// import PropTypes from 'prop-types';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';
import React from 'react';

export class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };
  handleSearch = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSearch}>
          <SearchFormButton type="submit" className="button">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <FormInput
            value={this.state.inputValue}
            onChange={this.handleChange}
            name="inputValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
