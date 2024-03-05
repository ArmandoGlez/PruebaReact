import { setDoc } from "firebase/firestore";
import React, { useState } from "react";

const UseState = () => {
  const Contador = () => {
    const handleSubmit = (event) => {
      event.preventDefault(); // Evitar que la página se refresque al enviar el formulario
    };
    const [numero, setNumero] = useState(1);
    const [name, setName] = useState([]);
    const [newName, setNewName] = useState("");

    const [counter, setCounter] = useState(0);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fullName = firstName + " " + lastName;

    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
      setLastName(e.target.value);
    }

    const increase = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    const aumentar = () => {
      setNumero(numero + 1);
    };

    const disminuir = () => {
      setNumero(numero - 1);
    };

    const addingName = () => {
      const nameUpdate = [...name, newName];
      setName(nameUpdate);
      setNewName("");
    };

    return (
      <>
        <div className="flex justify-center items-center flex-col">
          <h2>Using a useState Hook</h2>
          <h3>Taste Me</h3>
          <h6>{numero}</h6>
          <button
            className="bg-[#beeab6] p-2 rounded-lg hover:bg-[#6ec860]"
            onClick={aumentar}
          >
            +
          </button>

          <button
            className="bg-[#ff7c70] p-2 rounded-lg hover:bg-[#ef4335]"
            onClick={disminuir}
          >
            -
          </button>
        </div>

        <h3 className="font-sans text-base p-2 text-center">Add a new name</h3>
        <div className="flex items-center justify-center">
          <form className="bg-[#7abef7] rounded-lg p-4" onSubmit={handleSubmit}>
            <label htmlFor="nameAdd">Name</label>
            <input
              type="text"
              id="nameAdd"
              placeholder="Enter your name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2"
            />

            <button
              onClick={addingName}
              type="submit"
              className="bg-[#96b5a6] rounded-xl px-4 py-2 mt-2 text-white"
            >
              Add name
            </button>
          </form>
        </div>
        <div>
          <ul className="rounded-lg text-center">
            {/* Renderizar los elementos del array */}
            {name.map((names, index) => (
              <li key={index}>{"* " + names}</li>
            ))}
          </ul>
        </div>

        <h2 className="font-sans text-base p-2 text-center">
          Let's register you
        </h2>

        <div className="flex justify-center flex-col items-center flex-wrap bg-[#9bc1b7] rounded-lg m-6">
          <div className="flex justify-center items-center ">
            <label>
              Name: <input value={firstName} onChange={handleFirstNameChange} />
            </label>
            <label>
              Last Name:{" "}
              <input value={lastName} onChange={handleLastNameChange} />
            </label>
            <p>
              Your ticket will be issues to: <b>{fullName}</b>
            </p>
          </div>
        </div>

        <h3 className="font-sans text-base p-2 text-center">Customs Hooks</h3>
      </>
    );
  };

  return <Contador />;
};

export default UseState;
