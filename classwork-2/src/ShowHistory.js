import React from "react";

function ShowHistory({ info, setIsClicked }) {
  return (
    <div>
      {info.map((item) => (
        <div className="history" key={Math.floor(Math.random() * 100)}>
          {item}
        </div>
      ))}
      <button className="button1" onClick={() => setIsClicked((prev) => !prev)}>
        show current
      </button>
    </div>
  );
}

export default ShowHistory;
