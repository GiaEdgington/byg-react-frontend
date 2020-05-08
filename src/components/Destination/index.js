import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = (destination) => {
    //console.log(destination);
    const [destinationBooks, setBooks] = useState([]);

    const getDestinationBooks = async (destination) => {

        let destinationId = destination.destinationId;
        let bookArr = [];

        try {
            let result = await fetch(`http://localhost:3000/destination/${destinationId}`);
            let resultJson = await result.json();
            bookArr.push(resultJson.books);
            setBooks(bookArr);
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
            {/* Set location on state: <h3>{destination.location}</h3> */}
            <div className={styles.destinationCard}>
                <div>
                    {[...destinationBooks].map(book => getBook(book))}
                </div>
            </div>
        </div>
    )
}

export default Destination;