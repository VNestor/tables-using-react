import React from 'react';

/* This was cut and pasted from App.js */
/* We will be pass these in as props. */
/* When we pass things in as props, we can destructure it. */
/* When we render this component, we will pass in contacts, and our component
will can render the details based on the contact objects. */
/*  */
const ReadOnlyRow = ({contact, handleEditClick}) => {
    return(
        
        <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                  <button type="button" onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
              </td>
            </tr>
    )
}

export default ReadOnlyRow