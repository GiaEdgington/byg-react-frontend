import React from 'react';


const BookCard = (book) => {

    let bookArr = Object.values(book);

    const displayBook = bookArr.map((book) => {
        //console.log(book);
        return (
            <div key={book._id}>
                <h3>{book.title}</h3>
            </div>
        )
    })
    return (
        <div>
            {displayBook}
        </div>
    )
};

export default BookCard;