import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  FormInput,
} from './Searchbar.styled';
import { useState } from 'react';
import React from 'react';

export const Searchbar = props => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    props.onSubmit(inputValue);
    setInputValue('');
  };
  const handleChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSearch}>
        <SearchFormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
          <FcSearch size={30} />
        </SearchFormButton>
        <FormInput
          value={inputValue}
          onChange={handleChange}
          name="inputValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends React.Component {
//   state = {
//     inputValue: '',
//   };
// handleSearch = e => {
//   e.preventDefault();
//   this.props.onSubmit(this.state.inputValue);
//   this.setState({ inputValue: '' });
// };
// handleChange = e => {
//   this.setState({ inputValue: e.target.value });
// };
//   render() {
//     return (
// <SearchbarHeader>
//   <SearchForm onSubmit={this.handleSearch}>
//     <SearchFormButton type="submit">
//       <ButtonLabel>Search</ButtonLabel>
//       <FcSearch size={30} />
//     </SearchFormButton>
//     <FormInput
//       value={this.state.inputValue}
//       onChange={this.handleChange}
//       name="inputValue"
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//     />
//   </SearchForm>
// </SearchbarHeader>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
