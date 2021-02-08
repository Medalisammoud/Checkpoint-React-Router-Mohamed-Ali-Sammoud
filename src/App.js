import React, { useState} from "react";
import { BrowserRouter , Route } from "react-router-dom";

import MovieList from "./Components/MovieList";
import FilterMovie from "./Components/FilterMovie";
import AddMovie from './Components/AddMovie'
import Description from "./Components/Description";
import Trailer from "./Components/Trailer";


function App () {
  const [ Movies, setMovies ] = useState (
     [
      {
        id:1,
        title: "Zone hostile",
        description:
          "Dans le futur, un pilote de drone est déployé dans une zone militarisée meurtrière où il va travailler pour un officier androïde chargé d'empêcher une attaque nucléaire.",
        posterUrl:
          "https://imgsrc.cineserie.com/2021/01/zone-hostile-c-est-quoi-ce-film-netflix-avec-anthony-mackie.png?ver=1",
        trailer:"https://www.youtube.com/embed/isj7LPta2_U",
        rate: 3,
      },
      {
        id:2,
        title: "Sniper: Ghost Shooter",
        description:
          "Des tireurs d'élite chargés de protéger un gazoduc contre des terroristes soupçonnent une faille de sécurité quand un tireur invisible les prend pour cible.",
        posterUrl:
          "https://www.themoviedb.org/t/p/w780/uAntGC8ywRsHyL3RIsQIi6LZvJn.jpg",
        trailer:'https://www.youtube.com/embed/lJv76raGBVU',
        rate: 5,
      },
      {
        id:3,
        title: "La Guerre des mondes",
        description:
          "Un horloger divorcé est contraint de devenir le père protecteur qu'il n'a jamais été quand des vaisseaux spatiaux envahissent la Terre et que le danger est à son comble.",
        posterUrl:
          "https://i.ytimg.com/vi/QD0whiJYRU4/maxresdefault.jpg",
        trailer:"https://www.youtube.com/embed/QD0whiJYRU4",
        rate: 2,
      },
    ],
  )

  // message warning for impty input AddMovie
  const [warning,setWarning]=useState(false);

  // Function AddMovie
const addNewMovie=(newMovie)=>{
  if(newMovie.title !== '' && newMovie.description !== '' && newMovie.posterUrl !== '' && newMovie.rate !== '' ){
    setMovies([...Movies, newMovie]);
    setWarning(false);
  }
  else{
    setWarning(true);
  }
 }
const warningMsg = warning && <div className='alert alert-danger mt-1' role='alert'>Empty box you have to complete !!!!!!!!!!! 
</div>

// Search Movies 
const [ Movies1 , setMovies1 ] = useState([]);
const [searchShow,setSearchShow]=useState(false);
  const searchMovie = (title , rate)=>{
    if(title !== '' || rate !== 0){
      setMovies1(Movies.filter((movie)=>{ return (movie.title === title || movie.rate === rate) }))
      setSearchShow(true);
    }
  }
 
    return (
      <div >
        <BrowserRouter>
          <Route exact path="/">
            {warningMsg}
            <div style={{display:'flex'}}>
            <FilterMovie searchMovie={searchMovie}/>
            <button className="btn btn-outline-primary" style={{height:'40px',margin:'5px 430px'}}  onClick={() => setSearchShow(false) }>Home</button>
            </div>
            <MovieList Movies={searchShow===false ? Movies : Movies1 }/>
            <AddMovie addNewMovie={addNewMovie}/>
          </Route>
          <Route path="/Description/:MovieId">
            <Description Movies={Movies}/>
          </Route>
          <Route path="/Trailer/:MovieId" >
            <Trailer Movies={Movies}/>
          </Route>
        </BrowserRouter>
      </div>
    );
}

export default App;
