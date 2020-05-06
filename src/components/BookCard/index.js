import React, { useState, useEffect } from 'react';
import AppContext from '../../contexts/AppContext';

const BookCard = (books) => {

    const [book, fetchBook] = useState({});

    const destinationBooks = books.books;

    const getBook = async (bookId) => {
        try {
            let result = await fetch(`http://localhost:3000/book/${bookId}`);
            let resultJson = await result.json();
            fetchBook(resultJson.book);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {  
        destinationBooks.map(bookId => {
            getBook(bookId)
        }); 
    }, []);

    return (
        <div>
            {console.log(book)}
        </div>
    )
};

export default BookCard;