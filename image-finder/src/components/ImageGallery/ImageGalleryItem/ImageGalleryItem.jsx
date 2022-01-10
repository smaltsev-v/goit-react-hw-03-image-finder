import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImg, tags, onClick }) => {
  return (
    <li className={s.imggalleryitem} onClick={onClick}>
      <img
        className={s.imggalleryitem__image}
        src={webformatURL}
        alt={tags}
        data-src={largeImg}
      />
    </li>
  );
};

export default ImageGalleryItem;