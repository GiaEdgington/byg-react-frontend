import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = (destination) => {
    
    const [destinationBooks, setBooks] = useState([]);
    const [books, fetchBooks] = useState({});

    const getDestination = async (destination) => {
    
        let destinationId = destination.destinationId;
    //console.log(destinationId);
        try {
            let result = await fetch(`http://localhost:3000/destination/${destinationId}`);
            let resultJson = await result.json();
            setBooks(resultJson.destination.books);
        } catch (err) {
            console.log(err);
        }
    };

    // const getBooks = async (destinationBooks) => {

    // };

    useEffect(() => {  
        getDestination(destination);
    }, []);

    const getBooks = destinationBooks.map(book => {
        return (
            <BookCard
            {...book}
            key={book._id}
            book={book}
            />
        )
    });

    return (
        <div className={styles.container}>
            <div className={styles.destinationCard}>
                {/* <h3>{destination.books}</h3> */}
                <div>
                    {console.log(destinationBooks)}
                </div>
            </div>
        </div>
    )
}

export default Destination;