import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { uuid } from "uuidv4";
import Header from "./components/Header.js";
import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";

function App() {
  // this key will hold where the contacts state is stored
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    // the initial state will return the contacts data once App is rendered
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return data;
  });

  const addContactHandler = (contact) => {
    // '...contacts' is a copy of current state of the contact list
    // 'contact' is a new item that gets added into the end of the list.
    // uuid generates unique id
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // gets data once set
  // useEffect(() => {
  //   // retrieves data back from local storage by storing the data into a var
  //   // JSON.parse returns value to original data type
  //   const getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (getData) {
  //     setContacts(getData);
  //   }
  // }, []);

  // sets data when contacts change
  useEffect(() => {
    // sets contacts to LOCAL_STORAGE_KEY
    // turn the object to string using JSON.stringify() for the key value
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // Once contacts changes it will run the hook
  }, [contacts]);

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
