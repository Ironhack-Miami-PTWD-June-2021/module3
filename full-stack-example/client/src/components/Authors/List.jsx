import React from "react";
import { Link } from "react-router-dom";

export default function List({ authors }) {
  if (!authors) return <div>Loading...</div>;

  return (
    <div>
      {authors.map(({ _id, name }) => (
        <Link to={`/authors/${_id}`}>
          <div>{name}</div>
        </Link>
      ))}
    </div>
  );
}
