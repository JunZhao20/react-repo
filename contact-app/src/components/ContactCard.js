import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
  // extracts the properties from props.contact and stores them as variables
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user-avatar" />
      <div className="content">
        <div className="header"> {name}</div>
        <div>{email}</div>
      </div>
      <div className="ui icon right floated button">
        <i
          className="trash alternate outline right icon"
          style={{ color: "red" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
