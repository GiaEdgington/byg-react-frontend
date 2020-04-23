import React, { useContext } from 'react';
import { useEffect, useState } from 'react';

import AppContext from '../../contexts/AppContext';

function BookLanding() {

    const [books, searchBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            let result = await fetch('http://localhost:3000/books');
            let resJson = await result.json();
            searchBooks(resJson)
        } catch (err) {
            console.log(err)
        }   
    }
    useEffect(() => {
        fetchBooks();
    })
    
    return(
        <main>
            <p>Books here</p>
        </main>
    )
}

export default BookLanding;