import React, { useState } from "react";
import "./App.css";
/* calls api and getting data back, we are mocking data*/
import data from "./mock-data.json";
/* Arrow function */
/* */
const App = () => {
  /* initialize usestate hook with the data from the json file */
  const [contacts, setContacts] = useState(data);
  /* Initialize to be an object */
  /* Have different property for each input field */
  /* Notice how spelling is the same */
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  /* Function that gets called when a user changes a value in any of the inputs  */
  /* Arrow function that accepts the event  */
  /* First: Get the name of the input the user has changed: 'name' will get the name
  attribute of whichever input the user has typed into. And assigns it to  the field name
  varible.  */
  /* Next: Get the actual value the user has entered. */
  /* then make a copy of the existing
  form data so we can change it without mutating the state. */
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
  };

  /* className helps position the container */

  return (
    <div className="app-container">
      {/* table tag, indicates start of the table */}
      <table>
        {/* Table head tag: contains column heading */}
        <thead>
          {/* Table Row tag */}
          <tr>
            {/* table heading tag */}
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* Table body tag */}
        <tbody>
          {/* Map data using an arrow function */}
          {/* Map function outputs a row for each contact */}
          {/* As the map function flips through the contacts array, it'll give us 
        access to the current contact object it is currently on and passes it
      to our function as a varaible. We name this variable, contact */}
          {/* We now have access to the contact object 
            we can display the data in our table row */}
          {/* All these properties are coming from the contact object which
              is part of the mock data array */}
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* We will add contact by using a simple html form */}
      {/* We need to store form values in state, and update values as
      the user types */}
      {/* Objective:
         Store form values as an object in a single statehook
        Use an event handler function to update the value */}
      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a Name..."
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an Address..."
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a Phone Number..."
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an Email..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
