import React from 'react';

const BookCard = (book, destination) => {
    //console.log(book);
    return (
        <div>
            <img src={book.image}></img>
        </div>
    )
};

export default BookCard;