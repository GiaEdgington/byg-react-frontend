import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Destination from '../../components/Destination';

import styles from './BookList.module.scss';

const BookList = () => {

    const { books, readMore, destination, savedBooks } = useContext(AppContext);

    return(
        <div className={styles.container}>
            <Destination
            key= {destination}
            destination = {destination.setting}
            savedBooks = {savedBooks}
            />
        </div>
    )
}

export default BookList;