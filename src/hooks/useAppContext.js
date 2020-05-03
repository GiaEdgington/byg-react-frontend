import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useAppContext() {

    const [books, setBooks] = useState([]);
    const [destination, setDestination] = useState({setting: "", books: []});
    const [destinationNum, setNum] = useState(0);
    const [savedBooks, fetchSavedBooks] = useState({});
    const [reload, setReload] = useState(false);

    const fetchBooks = async () => {
        try {
            let result = await fetch(`http://localhost:3000/books?destination=${destination.setting}`);
            let resJson = await result.json();
            setBooks(resJson);
            setReload(!reload);

        } catch (err) {
            console.log(err);
        }
    };

    const fetchNum = async () => {
        let result = await fetch('http://localhost:3000/destinations')
        let resultJson = await result.json();
        let total = resultJson.totalDestinations;
        setNum(total);
    };
    //fetchBooks with location

    useEffect(() => {
        //fetchBooks();
      fetchNum();
    }, [destinationNum]);

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
       try {
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
           let locationJson = await location.json();

           fetchNum();
  
           const locationId = locationJson.id;
           
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
            getSavedBooks();
            console.log(result);
            setReload(!reload);
        } catch (err) {
            console.log(err);
        } 
    };

    const getSavedBooks = async () =>{
        let result = await fetch('http://localhost:3000/saved-books')
        let resultJson = await result.json();
        fetchSavedBooks(resultJson);
    };

    return {
        books,
        findBooks: fetchBooks,
        updateDestination,
        destination,
        readMore,
        addBook,
        destinationNum,
        getSavedBooks,
        savedBooks
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