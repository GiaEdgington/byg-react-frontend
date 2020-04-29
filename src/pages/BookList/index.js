import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Destination from '../../components/Destination';

import styles from './BookList.module.scss';

const BookList = () => {

    const { books, readMore, destination } = useContext(AppContext);

    return(
        <div className={styles.container}>
            <Destination
            destination = {destination}
            />
        </div>
    )
}

export default BookList;