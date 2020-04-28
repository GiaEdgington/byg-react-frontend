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
            <div className={styles.buttons}>
                <button type="button">More</button>
                {/* when hovered? create overlay with explanation*/}
                <button type="button">Add Book</button>
            </div>
            
            <div className= {styles.info}>
                <span className= {styles.author}>By {author}</span>
                <hr/>
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