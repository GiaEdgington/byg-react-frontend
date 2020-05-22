import React from 'react';


const MoreButton = ({onClickMore}) => {
    return (
        <button 
        type="button"
        onClick = {onClickMore}
        >More
        </button>
    )
}

export default MoreButton;