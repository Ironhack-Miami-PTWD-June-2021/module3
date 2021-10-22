import React from "react";
import { Link } from "react-router-dom";

export default function List({ books }) {
  if (!books) return <div>Loading Books...</div>;

  return (
    <div>
      {books.map(({ _id, title }) => (
        <Link to={`/books/${_id}`}>
          <div>{title}</div>
        </Link>
      ))}
    </div>
  );
}
