import React from 'react';
import PropTypes from 'prop-types';

import MoreButton from '../MoreButton';
import AddButton from '../AddButton';

import styles from './Book.module.scss';

const Book = ({
    id,
    title,
    author,
    image,
    synopsis,
    isDisplayed,
    onClickMore,
    onClickAdd
}) => {

    return(
        <div>
            <div className={styles.bookCard}>
                {/* <h3>{title}</h3> */}
                <img src={image} alt={title} />
                <div className={styles.buttons}>
                    <MoreButton 
                    className={styles.buttons}
                    onClickMore={onClickMore}
                    isDisplayed
                    />
                    {/* when hovered? create overlay with explanation*/}
                    <AddButton
                    className={styles.buttons}
                    onClickAdd={onClickAdd} 
                    />
                </div>
            </div>
            { isDisplayed ? 
            <div className= {styles.info}>
                <span className= {styles.author}>By {author}</span>
                <hr/>
                <span className= {styles.synopsis}>{synopsis}</span>
            </div>
            :
            <div></div>
            }
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