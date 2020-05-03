import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Destination from '../../components/Destination';

import styles from './BookList.module.scss';

const BookList = () => {

    const { books, readMore, destination, savedBooks } = useContext(AppContext);

    console.log(savedBooks.books.length);
    return(
        <div className={styles.container}>
            <Destination
            destination = {destination.setting}
            books = {books}
            />
        </div>
    )
}

export default BookList;