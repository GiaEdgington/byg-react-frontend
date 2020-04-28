import React from 'react';
import PropTypes from 'prop-types';

import styles from './Book.module.scss';

const Book = ({
    title,
    author,
    image,
    synopsis
}) => {

    return(
        <div className={styles.bookCard}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div className= {styles.info}>
                <span className= {styles.author}>{author}</span>
                <span className= {styles.synopsis}>{synopsis}</span>
            </div>
        </div>
    )
}

Book.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.arrayOf(
      PropTypes.string
    ),
    synopsis: PropTypes.string
  };

export default Book;