import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useAppContext() {

    const [books, setBooks] = useState([]);
    const [destination, setDestination] = useState({setting: "", books: []});

    const fetchBooks = async () => {
        try {
            let result = await fetch(`http://localhost:3000/books?destination=${destination.setting}`);
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
       setDestination({ setting: location});
    };

    const readMore = (bookId)=> {
        let updateBooks = [...books];
        updateBooks = updateBooks.map(book => {
            if(book.id === bookId){
                book.isDisplayed = !book.isDisplayed;
            }
        });
        setDestination(updateBooks);
    };

    const addBook = async (book) => {
        //console.log(book);
       try{
           let location = await fetch('http://localhost:3000/destination', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({
                    location: destination.setting,
                    books: []
                })
           })
           console.log(location)

           let locationId = location._id;

            let result = await fetch('http://localhost:3000/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    title: book.title,
                    author: book.author.toString(),
                    image: book.image,
                    synopsis: book.synopsis,
                    location: locationId
                })
            })
            console.log(result);
        } catch (err) {
            console.log(err);
        } 
    };

    return {
        books,
        findBooks: fetchBooks,
        updateDestination,
        destination,
        readMore,
        addBook
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