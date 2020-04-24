import { useEffect, useState } from 'react';

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
        fetchBooks();
    }, []);

    return {
        books
    }
};