import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Book from '../../components/Book';
import Header from '../../components/Header';

import styles from './BookLanding.module.scss';

function BookLanding() {
    const { books, findBooks, updateDestination, readMore } = useContext(AppContext);

     const renderBook = (book) => (
        <Book 
        {...book}
        key = {book.id}
        onClick = {() => readMore(book.id)}
        />
    )

    const handleChange = (location) => {
        updateDestination(location);
    }

    return(
        
        <main>
            <Header />
            <form className={styles.form}>
                <label>Your destination:</label><br/>
                <input type="text" placeholder="" name="destination" onChange={(e) => handleChange(e.target.value)}/><br/>
                <button type="button" value="submit" onClick={findBooks}>Search for Books</button>
            </form>
            <div className={styles.container}>
                 {/* <h1>Books set in {destination}</h1> */}
                { [...books].map( b => renderBook(b) )}
            </div>
        </main> 
    )
}

export default BookLanding;