import React from "react";

export default function Filter({ onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search} // matches the test's prop name
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}
