import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../contexts/AppContext';
import Header from '../../components/Header';
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
            <Header />
            <div className={styles.backbtn}>
                <Link to = "/search">
                    <span>Go Back</span>
                </Link>
            </div>
            <div className={styles.containerList}>
            {destinationIds.map(destinationId => renderDestination(destinationId))} 
            </div>
        </div>
    )
}

export default BookList;