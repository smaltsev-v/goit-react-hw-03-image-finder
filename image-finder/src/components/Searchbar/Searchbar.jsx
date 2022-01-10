import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

import s from './Searchbar.module.css';
import PropTypes from "prop-types";



export default class Searchbar extends Component{
    state = {
        query: ''
    };

    handleChange = (e) => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.query);
        this.setState({ query: "" });
    };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button className={s.searchFormBtn} type="submit">
                    <span className={s.searchFormBtnLabel}>Search</span>
                    <ImSearch/>
          </button>

          <input
            className={s.searchFormInput}
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}



Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};











