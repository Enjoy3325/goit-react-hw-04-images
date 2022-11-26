import axios from 'axios';

export async function fetchImages(inputValue, page) {
  try {
    const API_KEY = '29387302-2c01c74d3eaaf5cdbdb3e9280';
    const options = `image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&${options}&page=${page}`;

    return await axios.get(url);
  } catch (error) {
    console.log('Sorry failed to featch');
  }
}
