import React, { useState } from "react";
import "./App.css";
import {nanoid} from 'nanoid';
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
  /* "..." is the spread operator, to copy the existing form data 
  and assign the new data to the variable. */
  /* Next: Update the object with the new value the user has typed. */
  /* Remember: newFormData variable is an object so we can use [] and text 
  to get a given key */
  /* Finally: Set to state */

  /* Call function when any of the inputs change. 
  You can do this by adding onChange property in input. */
  /* When you specify a function call like this, React will 
  automatically pass in the event for us. */
  
  /* Why we do this: It makes it easier to add new values to your form:
  You add a new input to your form, add a new property to the initial state,
  and call the event handler, and it'll all work.
  
  This also means you don't have to seperate event handlers and state hooks
  for each input in our form, which can make the code repetitive and hard to follow.  */

  /* */


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  /* */
  /* We will add a function that gets called when the form is submitted */
  /* event.preventDefault prevents the from doing a POST request when its submitted */
  /* This will take data the user has entered into the form, which has been stored in the 
  addFormData state object, and create a new object from this */
  /* We will also add an ID to identify which contact we are editing  or trying to delete. */
  /* We import nanoid and it generates an id for us */
  /* Then we create a newContacts array to avoid mutating the state. */
  /* We use spread operator to copy the current contacts, 
  and then we add the newContact object we just created to the end of the new array. */
  /* Finally, set new contact by using setContacts and pass in the new array. */
  /* Reminder: Any new contact we add must have the same properties as our existing contacts. */

  /* Now we can call this function when our form is submitted using onSubmit property in <form> */
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
    
  }


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
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an Address..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a Phone Number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an Email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
