import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Justin Fernandez"
        photo="https://randomuser.me/api/portraits/men/19.jpg"
        online
      />

      <Contact
        name="Everett Hale"
        photo="https://randomuser.me/api/portraits/men/37.jpg"
      />

      <Contact
        name="Rick Douglas"
        photo="https://randomuser.me/api/portraits/men/57.jpg"
        online
      />
    </div>
  );
}

export default App;
