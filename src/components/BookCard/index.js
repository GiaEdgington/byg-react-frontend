import React, { useState, useEffect } from 'react';
import AppContext from '../../contexts/AppContext';
import Destination from '../Destination';

const BookCard = (book) => {
    //const [book, fetchBook] = useState({});

  /*   useEffect(() => {  
        function getBook(book) {
            destinationBooks.map(bookId => {
                let result = fetch(`http://localhost:3000/book/${bookId}`);
                let resultJson = result.json();
                fetchBook(resultJson.book);
            })
        }
        Destination.subscribeToBooks(books, getBook);
        return function cleanup() {
            Destination.unsubscribeToBooks(books, getBook);
        };
    }, []); */

    return (
        <div>
            {/* {console.log(book.book)} */}
            {/* {console.log(book.title)} */}
        </div>
    )
};

export default BookCard;