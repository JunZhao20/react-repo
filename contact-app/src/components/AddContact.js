import React from "react";
class AddContact extends React.Component {
  render() {
    return (
      <div className="form">
        <h2 className="add">Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Input Name: " />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Input Email: " />
          </div>
          <div className="ui centered grid padded">
            <button className="ui primary button"> Add contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
