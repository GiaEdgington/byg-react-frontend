import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Book from '../../components/Book';
import Header from '../../components/Header';

import styles from './BookLanding.module.scss';

function BookLanding() {
    const { books, findBooks, destination, updateDestination } = useContext(AppContext);

     const renderBook = (book) => (
        <Book 
        {...book}
        key={books.indexOf(book)}
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
            <div>
                 {/* <h1>Books set in {destination}</h1> */}
                { [...books].map( b => renderBook(b) )}
            </div>
        </main> 
    )
}

export default BookLanding;