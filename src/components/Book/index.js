import React from 'react';


const Book = ({
    title,
    authors,
    image,
    synopsis
}) => {

    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div>
                <span>${authors}</span>
                <span>${synopsis}</span>
            </div>
        </div>
    )
}

export default Book;