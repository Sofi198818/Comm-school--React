import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <main className="container">
      <Form setPersons={setPersons} />
      <Results persons={persons} />
    </main>
  );
}

export default App;
