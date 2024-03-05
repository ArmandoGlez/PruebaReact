import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import Rating from "@mui/material/Rating";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGE_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function raitingUser() {
  const [loading, setLoading] = React.useState(false);
  const [ratingValue, setRatingValue] = React.useState(1);
  const [userRatings, setUserRatings] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchUserRatings = async () => {
      const userRatingCol = collection(db, "userRating");
      const userRatingSnapshot = await getDocs(userRatingCol);
      const userRatings = userRatingSnapshot.docs.map((doc) => doc.data());
      setUserRatings(userRatings);
    };

    fetchUserRatings();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);

      const { name, comment, image } = data;
      const rating = parseFloat(data["rating"]);

      await addDoc(collection(db, "userRaiting"), {
        name,
        comment,
        image,
        rating: ratingValue,
      });

      reset();

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      setLoading(false);
    } catch (error) {
      alert("Something went wrong");

      setLoading(false);
    }
  });

  return (
    <>
      <div
        onSubmit={onSubmit}
        className="flex justify-center items-center h-screen rounded-lg"
      >
        <div className="bg-[#a6f589] p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Rate us</h2>
          <div
            onSubmit={onSubmit}
            className="flex justify-center items-center h-screen rounded-lg"
          >
            <div className="bg-[#a6f589] p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-6">Rate us</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="Put your name"
                    required
                    {...register("name", {
                      required: {
                        value: true,
                        message: "This value is required",
                      },
                      minLength: {
                        value: 2,
                        message: "The name is too short!",
                      },
                      maxLength: {
                        value: 20,
                        message: "Max 20 characters",
                      },
                    })}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Comment
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="Write your opinion"
                    type="text"
                    {...register("comment", {
                      required: {
                        value: true,
                        message: "This value is required",
                      },
                      minLength: {
                        value: 2,
                        message: "The comment is too short!",
                      },
                      maxLength: {
                        value: 50,
                        message: "Max 50 characters",
                      },
                    })}
                  ></textarea>
                  {errors.comment && <span>{errors.comment.message}</span>}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Link image
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="URL imagen"
                    type="text"
                    {...register("image", {
                      required: true,
                    })}
                  />

                  {errors.image && <span>This value is required</span>}
                </div>

                <label className="text-yellow ">Score</label>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    className="text-yellow-900 "
                    name="rating"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                      setRatingValue(newValue);
                    }}
                    precision={1}
                  />
                </Box>

                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Send
                  </button>
                  {/* Animación de carga */}
                  {loading && (
                    <div className="sk-folding-cube">
                      <div className="sk-cube1 sk-cube"></div>
                      <div className="sk-cube2 sk-cube"></div>
                      <div className="sk-cube4 sk-cube"></div>
                      <div className="sk-cube3 sk-cube"></div>
                    </div>
                  )}
                  {/* Mensaje de error */}
                  console.log("pene"); console.log("pene 2")
                  {Object.keys(errors).length !== 0 && (
                    <Alert severity="error">Something went wrong</Alert>
                  )}
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    Something went wrong?
                  </a>
                </div>
              </form>
            </div>
          </div>
          {userRatings.map((userRating, index) => (
            <div key={index}>
              <h2>{userRating.name}</h2>
              <p>{userRating.comment}</p>
              <p>Rating: {userRating.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
