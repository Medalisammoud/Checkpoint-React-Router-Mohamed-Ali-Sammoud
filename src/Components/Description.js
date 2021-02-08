import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import './styleDescMovie.css'

const Description = ({Movies}) => {
    const path=window.location.pathname.split('');
    const id=path[path.length-1];
    const [ Movie, setMovie ] = useState(Movies.find(movie => {return movie.id===Number(id)}));
    return (
        <div>
            <div className="card1">
            
            <div className="thumbnail"><img className="left" src={Movie.posterUrl} alt={Movie.title}/></div>
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

export default Description

