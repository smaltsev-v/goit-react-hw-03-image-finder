import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImg, tags, onClick }) => {
  return (
    <li className={s.item} onClick={onClick}>
      <img
        className={s.itemImage}
        src={webformatURL}
        alt={tags}
        data-src={largeImg}
      />
    </li>
  );
};

export default ImageGalleryItem;