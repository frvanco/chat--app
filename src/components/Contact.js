import React from "react";
import "./contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.photo} />
      <div>
        <h3>{props.name}</h3>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{props.online ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
