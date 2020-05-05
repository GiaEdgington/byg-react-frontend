import React from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = () => {

    const renderCard = (book) => (
            <BookCard
            {...book}
            key={book.id}
            image = {book.image}
            />
    );



    const getBooks = () =>  (
            <BookCard
            //{...book}
            //key={book.id}
            //image = {book.image}
            //getDestination = {getDestination}
            />
        )

    //console.log(getBooks);
    
    return (
        <div className={styles.container}>
            <div className={styles.destinationCard}>
                {/* <h3>{destination.books}</h3> */}
                <div>
                    {/* {[...savedBooks.books].map(book => renderCard(book))} */}
                </div>
            </div>
        </div>
    )
}

export default Destination;