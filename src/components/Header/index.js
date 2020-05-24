import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    const { savedDestinations, isAuth, signOutHandler } = useContext(AppContext);

    return (
        <header className={styles.header}>
            <Link to = "/search" className="bookList">
                <h2>Before You Go</h2>
            </Link>
            <nav className={styles.userNav}>
                <Link to = "/booklist" className="bookList">
                    <span>Book List</span>
                </Link>
                <span className={styles.notification}>{savedDestinations.settings.length}</span>
                { isAuth ? 
                <span className="" onClick={signOutHandler}>Sign Out</span>
                :
                <Link to = "/login" className="login">
                    <span className="">Sign In</span>
                </Link>
                }
            </nav>
        </header>
    );
};

export default Header;