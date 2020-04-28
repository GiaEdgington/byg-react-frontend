import React from 'react';
import styles from './Header.module.scss';

const Header = () => {

    return (
        <header className={styles.header}>
            <h2>Before You Go</h2>
            <nav className={styles.userNav}>
                    <div className="bookList">
                        <span>Book List</span>
                        <span className="">7</span>
                    </div>
                    <div className="signout">
                        <span className="">Sign Out</span>
                    </div>
                </nav>
        </header>
    );
};

export default Header;