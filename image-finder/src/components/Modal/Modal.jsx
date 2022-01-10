import React, { Component } from "react";
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from "prop-types";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
   componentDidMount() {
    window.addEventListener("keydown", this.handelKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handelKeydown);
  }

  handelKeydown = (e) => {
    if (e.code === "Escape") {
      console.log("закрыть модалку");
      this.props.onClose();
    }
  };
  
  handelBackDropClick = (e) => {
    console.log(e.currentTarget);
    console.log(e.target);

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };


  render() {
    const { largeImg, tag } = this.props;

    return createPortal(
      <div className={s.backdrop} onClick={this.handelBackDropClick}>
        <div className={s.content}>
          {this.props.children}
          <img src={largeImg} alt={tag} />
        </div>
      </div>,
      modalRoot
    );
      
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};





 

