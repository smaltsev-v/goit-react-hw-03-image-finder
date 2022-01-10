import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';





export default class App extends Component{

    state = {
        inquiry: '',
    };

    handleFormSubmit  = inquiry => {

        this.setState({ inquiry });
    
    };

    render() {
        return (
            <div>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ToastContainer autoClose={3000} />
            </div>
        );
    }
  
}



