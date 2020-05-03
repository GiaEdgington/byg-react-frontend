import React from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = ({destination, books}) => {

    console.log('test:' + destination);
    const renderCard = (book) => (
        //console.log(book.location);
        //console.log(destination);

            <BookCard
            {...book}
            image = {book.image}
            destination = {destination}
            />
    );

    return (
        <div className={styles.container}>
            <div className={styles.destinationCard}>
                <h3>{destination}</h3>
                <div>
                    {[...books].map(book => renderCard(book))}
                </div>
            </div>
        </div>
    )
}

export default Destination;