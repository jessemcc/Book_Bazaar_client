import React, { useState } from "react";
import "./Filter.scss";

const Filter = ({ handleFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const genres = [
    "fiction",
    "science Fiction",
    "fantasy",
    "mystery",
    "non-fiction",
    "horror",
    "romance",
    "historical",
    "thriller",
    "YA",
    "graphic novel",
    "comic book",
    "biography",
    "adventure",
    "action",
    "true crime",
    "notebook",
  ];

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <section className="filter">
      <article className="filter__container">
        <label name="genre" className="filter__select-title">
          Sort by Genre:{" "}
        </label>
        <select
          className="filter__select"
          name="genre"
          onChange={handleChange}
          value={selectedGenre}
        >
          <option value="" disabled>
            Select a genre
          </option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </article>
    </section>
  );
};

export default Filter;
