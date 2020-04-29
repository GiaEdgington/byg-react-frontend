import React from 'react';

import styles from './Destination.module.scss';

const Destination = ({destination}) => {
    return (
        <div className={styles.destinationCard}>
            <h3>{destination}</h3>
        </div>
    )
}

export default Destination;