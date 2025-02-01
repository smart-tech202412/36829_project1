// components/FilterAndSearch.js

import { useState } from "react";

const FilterAndSearch = () => {
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedFilter, setSelectedFilter] = useState("newest");

  return (
    <div

      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        maxWidth: "250px",
        margin: "0 auto",
      }}
    >
      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <i className="fab fa-facebook-f" style={{ fontSize: "18px", color: "#000" }}></i>
        <i className="fab fa-twitter" style={{ fontSize: "18px", color: "#000" }}></i>
        <i className="fab fa-instagram" style={{ fontSize: "18px", color: "#000" }}></i>
        <i className="fab fa-youtube" style={{ fontSize: "18px", color: "#008000" }}></i>
        <i className="fab fa-pinterest" style={{ fontSize: "18px", color: "#000" }}></i>
      </div>

      {/* Sorting Dropdown */}
      <select
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "15px",
          background: "#f8f8f8",
        }}
      >
        <option value="default">Default</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>

      {/* Filtering Dropdown */}
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "15px",
          background: "#f8f8f8",
        }}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      {/* Checkbox Filters */}
      <div style={{ textAlign: "left", marginBottom: "15px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input type="checkbox" />
          Sandwiches
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
          <input type="checkbox" />
          {/* Empty checkbox for future category */}
        </label>
      </div>

      {/* Search Bar */}
      <div style={{ display: "flex", alignItems: "center", borderRadius: "5px", overflow: "hidden" }}>
        <input
          type="text"
          placeholder="Search Product"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            background: "#FCE8C3",
          }}
        />
        <button
          style={{
            background: "#F79C00",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>

  
    
  );
};

export default FilterAndSearch;
