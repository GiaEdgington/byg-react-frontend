import React from 'react';

import styles from './BookCard.module.scss';

const BookCard = (book) => {

    let bookArr = Object.values(book);

    const displayBook = bookArr.map((book) => {
        //console.log(book);
        return (
            <div key={book._id} className = {styles.book}>
                <img src={book.image}></img>
            </div>
        )
    })
    return (
        <div className={styles.bookContainer}>
            {displayBook}
        </div>
    )
};

export default BookCard;