import React from 'react';
import Button from '../../Button/Button';
import { FiSearch } from 'react-icons/fi';
import { SearchInput, Form } from './Search.style';

const Search = () => {
  return (
    <Form>
      <SearchInput type="search" placeholder="qidirish..." />
      <Button wd="30px" style={{ borderRadius: '0 4px 4px 0' }}>
        <FiSearch style={{ color: 'black' }} />
      </Button>
    </Form>
  );
};

export default Search;
