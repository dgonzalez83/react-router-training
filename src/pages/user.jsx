import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import getUsers from "../api/users";

const textStyle = {
  color: "red",
};

function UserPage() {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(async () => {
    const data = await getUsers(id);
    if (!data) return;
    setUser({ ...data });
  }, []);

  return (
    <Fragment>
      <h3>UsersPage works!</h3>
      <div>
        <p style={{backgroundColor: 'blue'}}>{user.name}</p>
      </div>
    </Fragment>
  );
}

export default UserPage;
