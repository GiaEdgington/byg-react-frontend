import React from 'react';
import BookCard from '../BookCard';

import styles from './Destination.module.scss';

const Destination = ({destination, books}) => {

    const renderCard = (book) => (
        <BookCard

        />
    );

    return (
        <container className={styles.container}>
            <div className={styles.destinationCard}>
                <h3>{destination}</h3>
                <div>
                    {[...books].map(book => renderCard(book))}
                </div>
            </div>
        </container>
    )
}

export default Destination;