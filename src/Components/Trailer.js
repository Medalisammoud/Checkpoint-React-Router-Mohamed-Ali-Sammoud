import React,{useState} from 'react'

const Trailer = ({Movies}) => {
    const path=window.location.pathname.split('');
    const id=path[path.length-1];
    const [ Movie, setMovie ] = useState(Movies.find(movie => {return movie.id===Number(id)}));
    return (
        <div className="container my-4">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title={Movie.title} src={Movie.trailer} ></iframe>
            </div>
        </div>
    )
}

export default Trailer
