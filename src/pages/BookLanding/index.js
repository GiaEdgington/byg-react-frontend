import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';
import Book from '../../components/Book';

function BookLanding() {
    const { books } = useContext(AppContext);

    const renderBook = (book) => (
        <Book 
        {...book}
        key={books.indexOf(book)}
        />
    )

    return(
        <main>
            <header>
                <form>
                    <label>Your destination:</label><br/>
                    <input type="text" placeholder="" name="destination"/><br/>
                    <button className="">Search for Books</button>
                </form>
            </header>
            <div>
                <h1>Books here</h1>
                {/* {[...books].map(b => b[1])} */}
                { [...books].map( b => renderBook(b) )} 
            </div>
        </main>
    )
}

export default BookLanding;