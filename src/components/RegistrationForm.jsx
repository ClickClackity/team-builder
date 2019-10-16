import React, { useState } from "react";

const RegistrationForm = ({addMember}) => {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = e => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e =>{
    e.preventDefault();
    addMember(registrationData);
    setRegistrationData({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            id="name"
            value={registrationData.name}
            placeholder="enter your name"
            onChange={handleChange}
          />
        </label>
        
        <label htmlFor="email">
          Email:{" "}
          <input
            type="text"
            name="email"
            id="email"
            value={registrationData.email}
            placeholder="enter your email"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="role">
          Role:{" "}
          <input
            type="text"
            name="role"
            id="role"
            value={registrationData.role}
            placeholder="enter your dev role"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
