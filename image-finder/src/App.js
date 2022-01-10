import React,{ Component } from "react";

import 'react-toastify/dist/ReactToastify.css';
import imgApi from './services/imgApi.jsx';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import ComponentLoader from './components/Loader';
import { MdClose } from "react-icons/md";
          


class App extends Component {

    state = {
        inquiry: '',
        hits: [],
        currentPage: 1,
        largeImg: "",
        searchQuery: "",
        isLoading: false,
        error: null,
        showModal: false,
    };

    componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    }
    onOpenModal = (e) => {
        const largeImgUrl = e.target.dataset.src;

        console.log(largeImgUrl);
        this.setState({
            showModal: true,
            largeImg: largeImgUrl,
        })
    };
    closeModal = () => {
        this.setState({
            showModal: false,
        });
    };

    handleFormSubmit = (inquiry) => {

        this.setState({
            searchQuery: inquiry,
            hits: [],
            currentPage: 1,
            error: null,
        });
    
    };
    fetchImages = () => {
        const { currentPage, searchQuery } = this.state;

        this.setState({ isLoading: true });

        const options = {
            searchQuery,
            currentPage,
        };
        imgApi
            .fetchImages(options)
            .then((hits) => {
                this.setState((prevState) => ({
                    hits: [...prevState.hits, ...hits],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch((error) => this.setState({ error }))
            .finally(() => {
                this.setState({ isLoading: false });
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });
            });
    };    


    render() {
        const { hits, isLoading, error, showModal, largeImg } = this.state;
        const shouldRenderLoadMoreBtn = hits.length > 0 && !isLoading;

        return (
            <div>
                {error && <h1>Not found please try again</h1>}
                <Searchbar onSubmit={this.handleFormSubmit} />
                
                {isLoading && <ComponentLoader />}

                <ImageGallery hits={hits} onClick={this.onOpenModal} />

                {shouldRenderLoadMoreBtn && <Button onClick={this.fetchImages} />}

                {/* <button type="button" onClick={this.toggleModal} > Open Modal</button> */}
                {showModal && (
                    <Modal onClose={this.closeModal} largeImg={largeImg}>
                        <button
                            className="btnCloseModal"
                            type="button"
                            onClick={this.closeModal}
                        >
                            <MdClose  />
                        </button>
                    </Modal>
                )}
            </div>
        );
    }
  
}
export default App;


