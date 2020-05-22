import React from 'react';


const AddButton = ({onClickAdd}) => {
    return (
        //make call to backend to create destination/add book
        <button 
        type="button"
        onClick = {onClickAdd}
        >
        Save
        </button>
    )
};

export default AddButton;