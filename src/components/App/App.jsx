import { fetchImages } from '../ServiceAxios/ServiceAxios';
import { Searchbar } from '../Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    largeImageSrc: '',
    searchInput: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchInput !== prevState.searchInput &&
      this.state.searchInput
    ) {
      fetchImages();
    }
  }
  handeleSubmitClick = value => {
    this.setState({ searchInput: value });
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
      <div>
        <Searchbar onSubmit={this.handeleSubmitClick} />
      </div>
    );
  }
}
