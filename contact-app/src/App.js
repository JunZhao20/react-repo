import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";

function App() {
  return (
    <div className="container">
      <Header />
      <AddContact />
      {/* <ContactList /> */}
    </div>
  );
}

export default App;
