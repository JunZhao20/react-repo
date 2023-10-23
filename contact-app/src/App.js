import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Jun",
      email: "jun@gmail.com",
    },
    {
      id: "1",
      name: "Bob",
      email: "Bob@gmail.com",
    },
  ];
  return (
    <div className="container">
      <Header />
      <AddContact />
      {/* This adds contacts as a props that can be used in the child class*/}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
