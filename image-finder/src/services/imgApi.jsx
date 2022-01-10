import axios from "axios";

const apiKey = "24110159-bfc136adc0752a602941d71dc";
axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImages = ({ searchQuery = "", currentPage = 1, per_page = 12 }) => {
  return axios
    .get(
      `/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=${per_page}&page=${currentPage}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImages };