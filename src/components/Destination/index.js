import React from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = ({destination, savedBooks}) => {

    const renderCard = (book) => (
            <BookCard
            {...book}
            key={book.id}
            image = {book.image}
            destination = {destination}
            />
    );

    return (
        <div className={styles.container}>
            <div className={styles.destinationCard}>
                <h3>{destination}</h3>
                <div>
                    {[...savedBooks.books].map(book => renderCard(book))}
                </div>
            </div>
        </div>
    )
}

export default Destination;