import React from 'react';

import styles from './BookCard.module.scss';

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
        <div className = {styles.book}>
            {displayBook}
        </div>
    )
};

export default BookCard;