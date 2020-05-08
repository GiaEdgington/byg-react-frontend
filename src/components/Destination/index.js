import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = (destination) => {
    //console.log(destination);
    const [destinationData, setBooks] = useState({ books: [], location: ""});

    const getDestinationBooks = async (destination) => {

        let destinationId = destination.destinationId;
        let bookArr = [];

        try {
            let result = await fetch(`http://localhost:3000/destination/${destinationId}`);
            let resultJson = await result.json();
            bookArr.push(resultJson.books);
            setBooks({books: bookArr, location: resultJson.location});
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {  
        getDestinationBooks(destination);
    }, []);

    const getBook = (book) => (
            <BookCard
            {...book}
            key={book[0]._id}
            book={book}
            />
    );
    return (
        <div>
            <h3>{destinationData.location}</h3>
            <div className={styles.destinationCard}>
                <h2>{}</h2>
                <div>
                    {[...destinationData.books].map(book => getBook(book))}
                </div>
            </div>
        </div>
    )
}

export default Destination;