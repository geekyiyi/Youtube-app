import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(search);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleOnSubmit}>
        <div className="field">
          <label>Search for a Video</label>
          <input
            type="text"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
