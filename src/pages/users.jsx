import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getUsers from "../api/users";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const data = await getUsers();
    if(!data) return
    setUsers([...users, ...data]);
  }, []);

  return (
    <Fragment>
      <h3>UsersPage works!</h3>
        <button className="btn btn-primary">hola</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default UsersPage;
