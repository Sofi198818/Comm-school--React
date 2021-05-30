import React from "react";
import ResultItem from "./ResultItem";

function Results({ persons }) {
  return (
    <div className="results">
      {persons.map((person) => (
        <ResultItem
          key={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
          email={person.email}
          city={person.city}
        />
      ))}
    </div>
  );
}

export default Results;
