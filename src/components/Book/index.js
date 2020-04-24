import React from 'react';
import PropTypes from 'prop-types';


const Book = ({
    title,
    author,
    image,
    synopsis
}) => {

    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div>
                <span>{author}</span>
                <span>{synopsis}</span>
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