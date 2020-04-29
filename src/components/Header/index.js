import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className={styles.header}>
            <h2>Before You Go</h2>
            <nav className={styles.userNav}>
                <Link to = "booklist" className="bookList">
                    <span>Book List</span>
                </Link>
                <span className="">7</span>
                <div className="login">
                    <span className="">Login</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;