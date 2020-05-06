import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

const BookCard = (books) => {

    const {savedBooks} = useContext(AppContext);

    const destinationBooks = books.books;
    

    return (
        <div>
            {destinationBooks}
        </div>
    )
};

export default BookCard;