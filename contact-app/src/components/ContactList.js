import React from "react";
import ContactCard from "./ContactCard";

// renders the list into contact manager
const ContactList = (props) => {
  // Takes each contact from contacts array and maps so it returns each contact within the array
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
