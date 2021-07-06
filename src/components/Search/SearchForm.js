import React, { useState } from "react";
import styles from "../../styles/SearchForm.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import { useHistory } from "react-router-dom";

function SearchForm() {
  const [searhValue, setSearhValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searhValue));
    history.push("/searchResult");
  };
  return (
    <form className={styles.search_form} onSubmit={handleSearch}>
      <input
        type="text"
        className={styles.search_input}
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
      <button
        className={styles.seach_icon}
        onClick={handleSearch}
        disabled={!searhValue}
        type="submit"
      >
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchForm;
