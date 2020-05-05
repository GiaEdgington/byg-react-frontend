import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Destination from '../../components/Destination';

import styles from './BookList.module.scss';

const BookList = () => {

    const { books, readMore, savedDestinations, savedBooks } = useContext(AppContext);

    const settings = savedDestinations.settings;

    const destinationIds = [...savedDestinations.destinationId].map(destinationId => destinationId);

    const destinationBooks = () => {
        let bookIds;
        destinationIds.forEach(destinationId => {
            fetch(`http://localhost:3000/destination/${destinationId}`)
            .then(result => result.json())
            .then(data => {
                bookIds = data.destination.books;
            })
        })
        return (
            <Destination
            key = {bookIds}
            bookIds = {bookIds}
            />
        ) 
    }

    return(
        <div className={styles.container}>
           {destinationBooks()}
            {/* {[...savedDestinations.destinationId].map(destinationId => renderDestination(destinationId))} */}
        </div>
    )
}

export default BookList;