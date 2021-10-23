import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/authors">Authors</Link>
      </li>
      {!user ? (
        <>
          <li>
            <Link to="/auth/signup">Signup</Link>
          </li>
          {/* <li>
            <Link>Login</Link>
          </li> */}
        </>
      ) : (
        <li>{user?.username}</li>
      )}
    </ul>
  );
}
