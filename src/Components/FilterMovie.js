import React from "react";
import {  input } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import "./Style.css";

const FilterMovie = ({ setSearchTitle,titleInput,setRateSearch,rateInput}) => {
  

  return (
    <div className="search">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Title"
          aria-label="Search"
          value={titleInput}
          aria-describedby="search-addon"
          onChange={(e)=>{setSearchTitle(e.target.value);}}
        />
      </div>
      <div className='rating'>
        <Rating
          style={{height:'50px'}}
          name="handler"
          value={rateInput}
          size={25}
          count={5}
          onChange={(value) => {
            setRateSearch(value);
          }}
        />
      </div>
    </div>
  );
};
export default FilterMovie;
