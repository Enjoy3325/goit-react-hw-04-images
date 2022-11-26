import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchImages } from '../ServiceAxios/ServiceAxios';
import { Searchbar } from '../Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    largeImageSrc: '',
    searchInput: '',
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    if (this.state.searchInput !== prevState.searchInput) {
      try {
        const res = await fetchImages(this.state.searchInput, this.state.page);
        this.setState({ images: res.data.hits });
      } catch (error) {}
    }
  }
  handeleSubmitClick = searchValue => {
    this.setState({ searchInput: searchValue });
  };

  // onSubmit = async input => {
  //   try {
  //     const data = await fetchImages(input);
  //     this.state.images = data;
  //     console.log(data);
  //   } catch (error) {
  //     console.log('Error', error);
  //   }
  // };
  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handeleSubmitClick} />
        <ImageGallery images={this.state.images} />
      </Wrapper>
    );
  }
}
