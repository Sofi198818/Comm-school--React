import React, { useState, useEffect } from "react";
import { getUser } from "../api";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser(page)
      .then((data) => setUsers((prevUsers) => [...prevUsers, data]))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <>
      <div className="dashboard">
        {loading && !users.length && <h1>Loading</h1>}
        {error && <h1>{error}</h1>}
        {users.map((user) => (
          <div className="card" key={user.cell}>
            <img alt="user" src={user.picture.medium} />
            <p>{user.email}</p>
            <p>{user.location.city}</p>
            <p>{user.name.title} {user.name.first} {user.name.last} </p>
          </div>
        ))}
      </div>
      <button className="button" onClick={() => setPage(page + 1)}>
        Next
      </button>
      {loading && users.length && <h1>Loading</h1>}
    </>
  );
}

export default Dashboard;