import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useAppContext() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            let result = await fetch('http://localhost:3000/books');
            let resJson = await result.json();
            setBooks(resJson);
        } catch (err) {
            console.log(err);
        }   
    }
    useEffect(() => {
        //fetchBooks();
    }, []);

    return {
        books
    }
};

const bookPropTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.arrayOf(
      PropTypes.string
    ),
    synopsis: PropTypes.string
  };

export const providerPropTypes = {
      books: PropTypes.arrayOf(PropTypes.shape(bookPropTypes))
};