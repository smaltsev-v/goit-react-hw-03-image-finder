import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import PropTypes from "prop-types";



export default class Searchbar extends Component{
    state = {
        inquiry: '',
    };

    handleNameChange = (e) => {
        this.setState({ inquiry: e.currentTarget.value});
    };
  

     handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inquiry.trim() === '') {
      toast.error('Введите запрос ');
      return;
    }

    this.props.onSubmit(this.state.inquiry);
    this.setState({ inquiry: '' });
    };
    
    render() {
        return (
            
            <header className={s.searchbar}>
                <form
                    onSubmit={this.handleFormSubmit}
                    className={s.form}>
                    <button
                        type="submit"
                        className={s.button}>
                        <ImSearch />
                        
                        <span className={s.button__label}>Search</span>
                    </button>

                    <input
                        className={s.input}
                        value={this.state.inquiry}
                        onChange={this.handleNameChange}
                        type="text"
                        autocomplete="off"
                        autofocus
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











