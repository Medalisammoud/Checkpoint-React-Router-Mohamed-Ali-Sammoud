import React,{ useState } from 'react'
import MovieList from "./MovieList";
import FilterMovie from "./FilterMovie";
import AddMovie from './AddMovie'
import {Data} from '../Data'

const AppMovies = () => {
    const [ Movies, setMovies ] = useState (Data);
        // message warning for impty input AddMovie
    const [warning,setWarning]=useState(false);
    const [searchTitle,setSearchTitle]=useState('');
    const [rateSearch, setRateSearch] = useState(1);
    // Function AddMovie
    const addNewMovie=(newMovie)=>{
    if(newMovie.title !== '' && newMovie.posterUrl !== '' && newMovie.rate !== '' ){
        setMovies([...Movies, newMovie]);
        setWarning(false);
    }
    else{
        setWarning(true);
    }
    }
    const warningMsg = warning && <div className='alert alert-danger mt-1' role='alert'>Empty box you have to complete !!!!!!!!!!! 
    </div>
    return (
        <div>
              {warningMsg}
        <div style={{display:'flex',flexDirection:'column'}}>
        <FilterMovie setSearchTitle={setSearchTitle} titleInput={searchTitle} setRateSearch={setRateSearch} rateInput={rateSearch}/>
        <MovieList Movies={Movies} titleInput={searchTitle} rateInput={rateSearch}/>
        </div>
        <AddMovie addNewMovie={addNewMovie}/>
          
        </div>
    )
}

export default AppMovies
