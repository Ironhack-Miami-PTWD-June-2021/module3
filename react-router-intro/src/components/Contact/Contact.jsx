import React from "react";

export default class Contact extends React.Component {
  render() {
    console.log(this.props);
    const contactID = this.props.match.params.contactID;
    const contactsDetails = this.props.contacts.find(
      (contact) => contact.id === contactID
    );

    console.log(contactsDetails);
    return (
      <div>
        <img
          src={contactsDetails.pictureUrl}
          alt={contactsDetails.name}
          width="200"
        />
        <h5>{contactsDetails.name}</h5>
      </div>
    );
  }
}
