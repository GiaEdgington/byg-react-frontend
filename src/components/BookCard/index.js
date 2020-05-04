import React from 'react';

const BookCard = (book, destination) => {
    return (
        <div>
            <img src={book.image}></img>
        </div>
    )
};

export default BookCard;