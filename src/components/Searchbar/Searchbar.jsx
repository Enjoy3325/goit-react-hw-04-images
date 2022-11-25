import React from 'react';

export class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };
  handleSearch(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.state.inputValue = '';
  }
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSearch}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
