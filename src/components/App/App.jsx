import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchImages } from '../../ServiceAxios/ServiceAxios';
import { Searchbar } from '../Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    searchInput: '',
    page: 1,
    totalHits: 0,
    bntLoadMore: false,
    spinner: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchInput, page } = this.state;
    if (
      (prevState.page !== page && page > 1) ||
      (searchInput !== prevState.searchInput && searchInput !== '')
    ) {
      this.handleFetch();
    }
  }

  handleFetch = async () => {
    this.setState({ bntLoadMore: false, spinner: true });

    try {
      const { searchInput, page } = this.state;
      const res = await fetchImages(searchInput, page);
      const { hits, totalHits } = res.data;
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits: totalHits,
      }));

      if (hits.length === 0) {
        this.setState({ bntLoadMore: false });
        return alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      // Скролл страницы
      if (page !== 1) {
        this.scrollOnLoad();
      }
    } catch (error) {
      console.log('Error');
    } finally {
      this.setState({ spinner: false });
    }
  };
  scrollOnLoad = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  handeleSubmitClick = searchValue => {
    const { searchInput } = this.state;
    if (searchInput === searchValue) {
      return;
    }
    this.setState({ searchInput: searchValue, page: 1, images: [] });
  };

  handleLoadMore = () => {
    if (this.state.searchInput !== '') {
      this.setState(prevState => ({ page: prevState.page + 1 }));
      this.setState({
        bntLoadMore: true,
        spinner: false,
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handeleSubmitClick} />
        <ImageGallery
          images={this.state.images}
          totalHits={this.state.totalHits}
          onClick={this.handleLoadMore}
          spinner={this.state.spinner}
        />
      </Wrapper>
    );
  }
}
