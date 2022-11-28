import { toast, ToastContainer } from 'react-toastify';
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
  };

  async componentDidUpdate(_, prevState) {
    const { searchInput, page } = this.state;
    try {
      if (searchInput !== prevState.searchInput && searchInput !== '') {
        this.setState(prevState => ({ bntLoadMore: true, page: 1 }));
        console.log('page :>> ', page);
        const res = await fetchImages(searchInput);
        console.log('res :>> ', res);
        const { hits, totalHits } = res.data;
        if (hits.length === 0) {
          this.setState({ images: [] });
          return toast.success(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState({
          images: hits,
          totalHits: totalHits,
          bntLoadMore: false,
        });
        console.log('this.state.images :>> ', this.state.images);
        toast.error(`Hooray! We found ${totalHits} images.`);
      }
      if (prevState.page !== this.state.page && this.state.page > 1) {
        this.setState({ bntLoadMore: true });

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
              return toast.success(
                `We're sorry, but you've reached the end of search results.`
              );
            }
          }
        );
      }
    } catch (error) {
      throw new Error('Sorry nothing found!');
    }
  }

  handeleSubmitClick = searchValue => {
    this.setState({ searchInput: searchValue });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    console.log('this.state.images :>> ', this.state.images);
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handeleSubmitClick} />
        <ImageGallery
          images={this.state.images}
          onClick={this.handleLoadMore}
        />
      </Wrapper>
    );
  }
}
