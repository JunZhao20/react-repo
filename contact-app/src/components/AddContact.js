import React from "react";
class AddContact extends React.Component {
  // Sets the current state of the component
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.name === "") {
      alert("All fields are mandatory for input");
      return;
    }
    // once contact added this will set the state value to empty
    this.setState({ name: "", email: "" });
    this.props.addContactHandler(this.state);
  };

  render() {
    return (
      <div className="form">
        <h2 className="add">Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name: "
              //Storing current value of state.name
              value={this.state.name}
              // Setting the state instance 'name' with the user input
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email: "
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
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
