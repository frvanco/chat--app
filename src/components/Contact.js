import React from 'react';
import './contact.css'



const name='Justin Fernandez';
const photo="https://randomuser.me/api/portraits/men/19.jpg";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className ="avatar" src={photo}/>
      <div>
        <h3>{name}</h3>    
        <div className="status">
          <div className="status-online"></div>
          <p className="status-text">{online ? 'Online' : 'Offline'}</p>
        </div>
    </div>
  </div>
        
            )
        }

        export default Contact;
