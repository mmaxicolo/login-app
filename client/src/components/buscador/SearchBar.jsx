// SearchBar.jsx
import React from "react";
import "./SearchBar.css"

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar ingredientes..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;
