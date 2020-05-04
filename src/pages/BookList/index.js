import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Destination from '../../components/Destination';

import styles from './BookList.module.scss';

const BookList = () => {

    const { books, readMore, savedDestinations, savedBooks } = useContext(AppContext);

    const settings = savedDestinations.settings;

    const myDestinations = settings.map(destination => {
        return <Destination
        //key= {destination}
        destination = {destination}
        savedBooks = {savedBooks}
        />
    })

    return(
        <div className={styles.container}>
            {myDestinations}
        </div>
    )
}

export default BookList;