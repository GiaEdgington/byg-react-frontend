import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = (destination) => {
    
    const [destinationBooks, setBooks] = useState([]);

    const getDestinationBooks = async (destination) => {
        let destinationId = destination.destinationId;
        let bookArr = [];
        let bookData =[];
    //console.log(destinationId);
        try {
            let result = await fetch(`http://localhost:3000/destination/${destinationId}`);
            let resultJson = await result.json();
            bookArr.push(resultJson.destination.books);

            await Promise.all(bookArr.map(async (bookId) => {
                let result = await fetch(`http://localhost:3000/book/${bookId}`);
                let resultJson = await result.json();

                bookData.push(resultJson);
                
                setBooks(bookData);
            }))
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {  
        getDestinationBooks(destination);
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