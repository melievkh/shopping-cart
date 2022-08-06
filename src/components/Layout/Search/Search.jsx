import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchInput, Form, SearchButton } from './Search.style';

const Search = () => {
  return (
    <Form>
      <SearchInput type="search" placeholder="qidirish..." />
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </Form>
  );
};

export default Search;
