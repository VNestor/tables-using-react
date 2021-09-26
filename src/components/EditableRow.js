/* This is the component that holds the input that lets the user update the values for a given row. */
import React from 'react'

const EditableRow = () => {
    return (
        <tr>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder="Enter a name..." 
                name="fullName"/>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter an address..." 
                name="address"/>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a phone number..." 
                name="phoneNumber"/>
            </td>
            <td>
            <input 
                type="email" 
                required="required" 
                placeholder="Enter an email..." 
                name="email"/>
            </td>
        </tr>

    )
}

export default EditableRow