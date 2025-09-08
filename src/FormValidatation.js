import React, { useState } from "react";

function FormValidation() {
  const [name, setName] = useState(""); // State to hold the input value

  const handleChange = (event) => {
    setName(event.target.value); // Update state as user types
  };

  // to heandle form data
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    alert(`Hello, ${name}!`); // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;
