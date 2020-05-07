import React from 'react';


const BookCard = (book) => {

    let bookArr = Object.values(book);

    const displayBook = bookArr.map((book) => {
        return (
            <h3>{book.title}</h3>
        )
    })
    return (
        <div>
            {displayBook}
        </div>
    )
};

export default BookCard;