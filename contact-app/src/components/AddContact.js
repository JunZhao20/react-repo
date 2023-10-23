import React from "react";
class AddContact extends React.Component {
  // Sets the current state of the component
  state = {
    name: "",
    email: "",
  };
  render() {
    return (
      <div className="form">
        <h2 className="add">Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Input Name: "
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
              placeholder="Input Email: "
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
