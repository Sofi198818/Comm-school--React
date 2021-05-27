import React, { useState } from "react";

function Login() {
  const [items, setItems] = useState([]);
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <section className="login">
      {items.map((item) => (
        <h1>{item}</h1>
      ))}
      <div className="login-wrapper">
        <label htmlFor="username">
          სახელი
          <input
            id="username"
            placeholder="გვარი"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="lastname">
          გვარი
          <input
            id="lastname"
            placeholder="გვარი"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          ელ-ფოსტა
          <input
            id="email"
            placeholder="ელფოსტა"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="city">
          ქალაქი
          <input
            id="city"
            placeholder="ქალაქი"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button
          className="button"
          onClick={() => {
            setItems([...items, username, lastname, email, city]);
          }}
          //   disabled={!username || !lastname || !email || !city}
        >
          დამატება
        </button>
      </div>
    </section>
  );
}

export default Login;
