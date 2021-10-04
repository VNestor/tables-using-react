/* This is the component that holds the input that lets the user update the values for a given row. */
/* Goal: Add a button that will let us toggle between the view only row, and the one to edit that can be saved. */
import React from "react";

/** After completing editFormData and handleEditFormChange */
/** We destructure these by passing them here. */
/** We want to call our handleEditFormChange to update the form values in state
 * whenever our inputs change so we will add an onChange event to each input.
 * Anytime each of these inputs change, we will store the value for that input in state.
 * Similar to what we did with the add contact form.
 *
 *
 * We want to pre populate the input field values with whatever is in the edit form data prop object
 * So we can add a value to each input.
 * We do this by specifying the value prop on the input.
 *
 * Lastly, we will add a new table cell to this row with the save button in it. Even though
 * the actual form tag is outside the component, it doesnt matter because this button will still
 * submit the form because it's nested within the form tags when it gets rendered to the DOM.
 *
 * Now we save the form when the user clicks the save button. Jump back to App.js, line 147.
 */
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
