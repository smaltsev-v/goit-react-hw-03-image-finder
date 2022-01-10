import React from 'react';
import s from './ImageGallery.module.css'
import PropTypes from "prop-types";
import ImageGalleryItem from './ImageGalleryItem';


const ImageGallery = ({ onClick, hits }) => {
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            onClick={onClick}
            key={id}
            webformatURL={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
