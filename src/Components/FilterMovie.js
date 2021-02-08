import React,{useState} from "react";
import Rating from "react-rating-stars-component";
import "./Style.css";

const FilterMovie=({searchMovie})=> {

const [titleSearch,setTitleSearch]= useState('');
const [rateSearch,setRateSearch]= useState(0);



    return (
      <div className='search1'>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Title"
            aria-label="Search"
            value={titleSearch}
            aria-describedby="search-addon"
            onChange={(e)=>setTitleSearch(e.target.value)}
          />
          <button type="button" className="btn btn-outline-primary" onClick={()=>{
            searchMovie(titleSearch,rateSearch);
            setRateSearch(0);
            setTitleSearch('');
            }}>
            search
          </button>
        </div>
        <Rating name="handler" value={rateSearch} size={25} count={5} onChange={(ev) => {
    setRateSearch(ev);
  }} />
        
      </div>
    );
}
export default FilterMovie;
