import React, { useState } from "react";
import "./SessionForm.css";

const SessionForm = () => {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Welcome ${name}`);
  };

  return (
    <div className="session-form">

      <h2>Session Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
};

export default SessionForm;