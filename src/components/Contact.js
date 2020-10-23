import React, { Component } from "react";
import "./contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.photo} />
        <div>
          <h3>{this.props.name}</h3>
          <div
            className="status"
            onClick={() => {
              const NewStatus = !this.state.online;
              this.setState({ online: NewStatus });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <p className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
