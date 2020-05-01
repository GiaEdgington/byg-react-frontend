import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    const { destinationNum } = useContext(AppContext);

    //console.log(destinationNum);

    return (
        <header className={styles.header}>
            <h2>Before You Go</h2>
            <nav className={styles.userNav}>
                <Link to = "/booklist" className="bookList">
                    <span>Book List</span>
                </Link>
                <span className={styles.notification}>{destinationNum}</span>
                <Link to = "/login" className="login">
                    <span className="">Login</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;