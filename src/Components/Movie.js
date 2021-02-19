import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import './styleDescMovie.css'
import {Data} from '../Data'

const Movie = ({match}) => {
    

    const [ Movies, setMovies ] = useState (Data);
    const [ Movie, setMovie ] = useState(Movies.find(movie => {return movie.id===Number(match.params.id)}));
    return (
        <div>
            <div className="card1">
            
            <div className="thumbnail"><iframe className="embed-responsive-item" title={Movie.title} src={Movie.trailer} ></iframe></div>
            <div className="right">
                <h1>{Movie.title}</h1>
                
                <div className="separator"></div>
                <p>{Movie.description}</p>
            </div>
                <div className="fab"><NavLink className='NavLink' exact to='/'>Home</NavLink></div>
            
            </div>
        </div>
    )
}

export default Movie

