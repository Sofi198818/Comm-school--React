import React, { useState } from "react";
import Input from "./Input";

function Form({ setPersons }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="inputs">
      <Input
        label="სახელი"
        name="firstName"
        type="text"
        value={firstName}
        setValue={setFirstName}
      />
      <Input
        label="გვარი"
        name="lastName"
        type="text"
        value={lastName}
        setValue={setLastName}
      />
      <Input
        label="ელ-ფოსტა"
        name="email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <Input
        label="ქალაქი"
        name="city"
        type="city"
        value={city}
        setValue={setCity}
      />

      <button
        className="button"
        onClick={() =>
          setPersons((prev) => [...prev,
             {
               id: prev.length + 1,
               firstName,
               lastName, 
               email, 
               city }])
        }
      >
        დამატება
      </button>
    </div>
  );
}

export default Form;
