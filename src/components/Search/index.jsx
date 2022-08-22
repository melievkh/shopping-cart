import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchInput, Form, SearchButton } from "./style";

const Search = () => {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Form>
      <SearchInput
        type="search"
        placeholder="qidirish..."
        onChange={() => inputHandler}
      />
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </Form>
  );
};
export default Search;
