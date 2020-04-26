import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Book from '../../components/Book';

import styles from './styles.css';

function BookLanding() {
    const { books, findBooks } = useContext(AppContext);

     const renderBook = (book) => (
        <Book 
        {...book}
        key={books.indexOf(book)}
        />
    )

    return(
        <main>
            <form className="form" onSubmit={findBooks}>
                <label>Your destination:</label><br/>
                <input type="text" placeholder="" name="destination"/><br/>
                <button className="">Search for Books</button>
            </form>
                <div>
                <h1>Books here</h1>
                { [...books].map( b => renderBook(b) )}
            </div>
        </main> 
    )
}

export default BookLanding;