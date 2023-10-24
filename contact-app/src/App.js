import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./components/Header.js";
import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // '...contacts' is a copy of current state of the contact list
    // 'contact' is a new item that gets added into the end of the list.
    setContacts([...contacts, contact]);
    console.log(contacts);
  };

  return (
    <div className="container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {/* This adds contacts as a props that can be used in the child class*/}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
