import React from "react";

/* This was cut and pasted from App.js */
/* We will be pass these in as props. */
/* When we pass things in as props, we can destructure it. */
/* When we render this component, we will pass in contacts, and our component
will can render the details based on the contact objects. */

/* After adding edit button */
/* Whenever the button is clicked, the state changes and sets the editContactId,
the component re-renders because the state changes and our ternary operator runs.  */

/**
 * After adding delete button
 * Destruct handleDeleteClick
 * Pass in arrow function which calls handleDeleteClick, pass in contact.id, which you get from contact that was passed in.
 * Whenever you call a function similar to handleDeleteClick and pass porameters, you must do it using an arrow function,
 * as this prevents the function that we're calling to be invoked straight away.
 * We want the function to be called when the onClick happens.
 *
 */
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
