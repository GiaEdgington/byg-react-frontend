import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Destination from '../../components/Destination';

import styles from './BookList.module.scss';

const BookList = () => {

    const {savedDestinations} = useContext(AppContext);

    const destinationIds = [...savedDestinations.destinationId].map(destinationId => destinationId);

    
    const renderDestination = (destinationId) => (
        <Destination
        key= {destinationId}
        destinationId = {destinationId}
        />
    )

    return(
        <div className={styles.container}>
         {destinationIds.map(destinationId => renderDestination(destinationId))} 
        </div>
    )
}

export default BookList;