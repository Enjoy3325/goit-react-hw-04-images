import Notiflix from 'notiflix';
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

  async componentDidUpdate(_, prevState) {
    const { searchInput, page, spinner } = this.state;
    try {
      //
      if (searchInput !== prevState.searchInput && searchInput !== '') {
        this.setState({ bntLoadMore: false, page: 1, spinner: true });

        const res = await fetchImages(searchInput);

        const { hits, totalHits } = res.data;

        if (hits.length === 0 || hits <= 12) {
          this.setState({ images: [], bntLoadMore: false });
          return Notiflix.warning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState({
          images: hits,
          totalHits: totalHits,
          bntLoadMore: false,
        });

        Notiflix.info(`Hooray! We found ${this.state.totalHits} images.`);
      }
      if (prevState.page !== this.state.page && this.state.page > 1) {
        this.setState({ bntLoadMore: true, spinner: true });

        const res = await fetchImages(searchInput, page);
        console.log('res.data :>> ', res.data);
        const { hits } = res.data;

        this.setState(
          prevState => ({
            images: [...prevState.images, ...hits],
            bntLoadMore: false,
          }),
          () => {
            if (this.state.totalHits === this.state.images.length) {
              this.setState({ bntLoadMore: false });
              return Notiflix.failure(
                `We're sorry, but you've reached the end of search results.`
              );
            }
          }
        );
      }
      // Скролл страницы
      if (page !== 1) {
        this.scrollOnLoad();
        this.setState({ spinner: true });
      }
    } catch (error) {
      throw new Error('Sorry nothing found!');
    }
  }

  scrollOnLoad = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  handeleSubmitClick = searchValue => {
    this.setState({ searchInput: searchValue });
  };

  handleLoadMore = () => {
    if (this.state.searchInput !== '') {
      this.setState(prevState => ({ page: prevState.page + 1 }));
      this.setState({
        bntLoadMore: true,
      });
    }
  };

  render() {
    console.log('this.state.images :>> ', this.state.images);
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handeleSubmitClick} />
        <ImageGallery
          images={this.state.images}
          onClick={this.handleLoadMore}
          spinner={this.state.spinner}
        />
      </Wrapper>
    );
  }
}
