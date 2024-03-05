import React from "react";
import Menu from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import NightDay from "./components/DarkDay.jsx";
import.meta.env.VITE_API_KEY;
import.meta.env.VITE_KEY_FIREBASE, import.meta.env.VITE_AUTH_DOMAIN_FIREBASE;
import.meta.env.VITE_PROJECT_ID_FIREBASE;
import.meta.env.VITE_STORE_BUCKET_FIREBASE;
import.meta.env.VITE_MESSAGE_FIREBASE;
import.meta.env.VITE_APP_ID_FIREBASE;

import WeatherAPI from "./components/WeatherApi.jsx";

import "./transitions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/cards.jsx";
import ImageXDD from "./components/corouser.jsx";
import Raiting from "./componentUi/raiting.jsx";
import UseState from "./components/UseState.jsx";
import UseEffect from "./components/UseEffect.jsx";

import Avatar from "@mui/material/Avatar";

import FormUser from "../src/components/raitingUser.jsx";

/*Importacion de iconos */
import { FaQuestion } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { GiBee } from "react-icons/gi";

/*Componentes para UI */
import People from "./componentUi/avatarPeople.jsx";

const App = () => {
  const dataUser = [
    {
      alt: "Remy Sharp",
      src: "/static/images/avatar/1.jpg",
      opinion: "Nice!!",
    },
    {
      alt: "Juan Ramirez",
      src: "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp",
      opinion: "Nah this products are very expensive",
    },
    {
      alt: "Pablo Pérez",
      src: "https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp",
      opinion: "My dick is so small",
    },

    {
      alt: "Armando González",
      src: "https://media.gq.com.mx/photos/640f3efd5b759e424e0f463d/master/w_2560%2Cc_limit/premios%2520oscar%25202023%2520broches%2520hombre.jpg",
      opinion: "The products are very good",
    },
  ];
  return (
    <>
      <Menu />
      <div className="font-sans txtWelcome">
        <h1 className="txtSize">
          Welcome dear user, here you can find all the information about citrus
          and global warming.
        </h1>
      </div>

      <NightDay />

      <h1 className="txtResult">Our results using Agrio Limon solutions</h1>

      <ImageXDD />

      <div className="centerItems">
        <h1 className="txtTitle">Hot sales</h1>
      </div>

      <Cards />

      <h1 className="txtResult">Don´t you find what you are looking for?</h1>
      <div className="containerFlex">
        <div
          className="element element1"
          style={{ backgroundColor: "#822626" }}
        >
          <h1 style={{ fontSize: "30px" }}>Help</h1>
          <FaQuestion style={{ fontSize: "30px" }} />
        </div>

        <div
          className="element element2"
          style={{ backgroundColor: "#87b091" }}
        >
          <h1 style={{ fontSize: "30px" }}>Our company</h1>
          <FaBuildingUser style={{ fontSize: "30px" }} />
        </div>

        <div
          className="element element2"
          style={{ backgroundColor: "#45813d" }}
        >
          <h1 style={{ fontSize: "21px" }}>Environmental care</h1>
          <TiWorld style={{ fontSize: "30px" }} />
        </div>

        <div
          className="element element1"
          style={{ backgroundColor: "#ffff90", color: "black" }}
        >
          <h1 style={{ fontSize: "30px" }}>Bee care</h1>
          <GiBee style={{ fontSize: "30px" }} />
        </div>
      </div>

      <h1 className="txtResult">Customer engineers</h1>

      <People />

      <h1 className="title">Using Tailwind CSS classes </h1>

      <div className="flex flex-col justify-center items-center">
        <div className="bg-gradient-to-b p-2 from-yellow-400 via-yellow-600 to-yellow-800 rounded-xl w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex-wrap">
          <h2 className="text-xl text-center">Frequent questions</h2>
          <div className="flex flex-wrap justify-evenly items-center">
            <div className="bg-[#e9e647] shadow-2xl rounded-xl w-full md:w-5/12 lg:w-1/5 flex flex-col items-center justify-center my-4 md:my-0 md:mx-2">
              <h1 className="text-xl">
                Are your products<br></br> reliable?
              </h1>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing . Obcaecati
                officia rerum itaque
              </p>
            </div>

            <div className="bg-[#e9e647] shadow-2xl rounded-xl w-full md:w-5/12 lg:w-1/5 flex flex-col items-center justify-center my-4 md:my-0 md:mx-2">
              <h1 className="text-xl">Return policy</h1>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati officia rerum itaque laborum
              </p>
            </div>

            <div className="bg-[#e9e647] shadow-2xl rounded-xl w-full md:w-5/12 lg:w-1/5 flex flex-col items-center justify-center my-4 md:my-0 md:mx-2">
              <h1 className="text-xl">Warranty</h1>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati officia rerum itaque laborum dig
              </p>
            </div>

            <div className="bg-[#e9e647] shadow-2xl rounded-xl w-full md:w-5/12 lg:w-1/5 flex flex-col items-center justify-center my-4 md:my-0 md:mx-2">
              <h1 className="text-xl">aksjalks</h1>
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati officia rerum itaque laborum
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-xl text-center p-4">Customer opinions</h1>

      <section className="flex justify-between flex-wrap p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataUser.map((user, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#e4ebf0] flex flex-col justify-center items-center p-4"
            >
              <Avatar
                src={user.src}
                alt={user.alt}
                sx={{ width: 64, height: 64 }}
                className="mb-2"
              />
              <p className="font-bold text-center">{user.alt}</p>
              <p className="text-center">{user.opinion}</p>
              <Raiting className="mt-2" />
            </div>
          ))}
        </div>
      </section>

      <FormUser />

      <h1 className="text-xl text-center p-4">All opinions</h1>

      <UseState />
      <UseEffect />

      <WeatherAPI />

      <Footer />
    </>
  );
};

export default App;
