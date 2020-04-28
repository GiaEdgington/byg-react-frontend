import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useAppContext() {

    const [books, setBooks] = useState([]);
    const [destination, setDestination] = useState("New York City");
    const [summary] = useState(false);

    const fetchBooks = async () => {
        try {
            let result = await fetch(`http://localhost:3000/books?destination=${destination}`);
            let resJson = await result.json();
            setBooks(resJson);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        //fetchBooks();
    }, []);

    const updateDestination = (location) => {
       setDestination(location);
    }

    return {
        books,
        findBooks: fetchBooks,
        updateDestination,
        destination,
        summary
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