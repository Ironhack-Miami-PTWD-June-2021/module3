import React from "react";
import { Link } from "react-router-dom";

export default function List({ contacts }) {
  console.log(contacts);
  return contacts.map((contact) => {
    return (
      <div key={contact.id}>
        <img src={contact.pictureUrl} alt={contact.name} width="200" />
        <h5>
          <Link to={`/list/${contact.id}`}>{contact.name}</Link>
        </h5>
      </div>
    );
  });
}
