import { useGlobalContext } from "../context";
import { useState } from "react";

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const [text, SetText] = useState("");

  const handleChange = (e) => {
    SetText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    SetText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          onChange={handleChange}
          value={text}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={handleRandomMeal}
        >
          Surprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
