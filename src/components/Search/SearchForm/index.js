import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setTerm } from "../../../features/term/termSlice";
import { useHistory } from "react-router-dom";
import { Form, SearchButton, SearchInput } from "./Styles";

function SearchForm() {
  const [searhValue, setSearhValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setTerm(searhValue));
    history.push("/searchResult");
  };
  return (
    <Form onSubmit={handleSearch}>
      <SearchInput
        type="text"
        placeholder="Search..."
        list="top-search-list"
        value={searhValue}
        onChange={(e) => setSearhValue(e.target.value)}
      />
      <datalist id="top-search-list">
        <option value="girls" />
        <option value="boys" />
        <option value="space" />
        <option value="fantasy" />
        <option value="comedy" />
        <option value="disney" />
        <option value="magic" />
        <option value="cats" />
      </datalist>
      <SearchButton onClick={handleSearch} disabled={!searhValue} type="submit">
        <AiOutlineSearch />
      </SearchButton>
    </Form>
  );
}

export default SearchForm;
