import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <select name="theme" id="theme-filter">
        <option value="">Filter by Theme</option>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
      <select name="category" id="category-filter">
        <option value="">Filter by Category</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
