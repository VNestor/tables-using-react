import React, { useState, Fragment} from "react";
import "./App.css";
import {nanoid} from 'nanoid';
/* calls api and getting data back, we are mocking data*/
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
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

  /* For the purposes of clarity, we are using two seperate state hooks. */
  /* Similar to what we did with our add contact form, we wan to update the state
  when any of the values change. */
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "", 
  })

  /* New state hook. */
  /* When editContactId is null, it means the user isnt editing any row. */
  /* We want to add a ternanry to render either the editable row, or the read only row
  depending if we have a editContactId or not. */
  const [editContactId, setEditContactId] = useState(null); 

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

  /* */
  /* This will be called when the user clicks on the edit button. */
  /* This accepts contact because we need to know the id of the contact for that row,
  so we can save it into state. */
  /* */
  const handleEditClick = (event, contact) => {
    event.preventDefault();

    setEditContactId(contact.id);
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
            <th>Actions</th>
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

          {/* After creating ReadOnlyRow component */}
          {/* We are rendering our new component in place of our old code.
          and we are passing in contact as a prop. */}
          {/* Don't forget to import our component. */}

          {/* After creating EditableRow component */}
          {/* Cannot have two children components stacked, must use React Fragment. */}
          {/* Ideally, we want to wrap editable row in a form tag so that we can handle the 
          form submit and capture the inputs. Unfortunately, we cannot. */}
          {/* Instead, we will wrap the entire table in the form tags. This is ok as we will
          only have one set of form inputs displayed being displayed in the DOM at any one time. */}
          {/* Form inputs will not be duplicated with this approach.  */}

          {/* After creating editContactId state hook */}
          {/* As the map function flips through the array, 
          if the id of the current contact object matches the id stored in state 
          in the editConactId state hook, then it will render the editable row.
          If not, it will render the read only row. */}
          {/* We want to add an edit button to each row, which will update our editContactId state hook. */}

          {/* After creating handleEditClick event listener */}
          {/* We pass this fucntion to our ReadOnlyRow component as a prop
          as this is where our edit button is going to be. */}
          {/* The editable row is essentially a form, similar to our addNewContact form. */}

          {/* To create a save and cancel feature, and repopulate the form: */}
          {/* We will start by creating a new state object to hold the form data 
          for when we are editing a given row. */}
          {contacts.map((contact) => (
            <Fragment>
              
              {editContactId === contact.id ? (
              <EditableRow/>
               ) : (
               <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}/> 
               )}
              
            </Fragment>
            
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
