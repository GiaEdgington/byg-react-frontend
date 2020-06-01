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

    const removeDestination = async () => {
        try{
            let delDest = await fetch(`http://localhost:3000/destination/${destination.destinationId}`, {
                method: 'DELETE'
            })
            console.log('destination removed');
            return delDest.json();
        } catch (err) {
            console.log(err);
        }
    }

    const getBook = (book) => (
            <BookCard
            {...book}
            key={book[0]._id}
            book={book}
            />
    );
    return (
        <div className={styles.destinationCard}>
            <h2 className={styles.destination}>{destinationData.location}</h2>
            <button type="button" value="submit" onClick={removeDestination} style={{ textAlign:'right', paddingRight:'1em'}}>Remove</button>
                <div>
                    {[...destinationData.books].map(book => getBook(book))}
                </div>
        </div>
    )
}

export default Destination;