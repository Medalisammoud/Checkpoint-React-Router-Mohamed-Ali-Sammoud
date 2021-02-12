import React, { useState } from "react";
import { Form } from "react-bootstrap";
import buttonMovie from '../assets/buttonAdd.png';
import buttonAddMovie from '../assets/buttonAddMovie.png'
import cancel from '../assets/cancel.png'
import "./Style.css";

const AddMovie = ({addNewMovie}) => {

    const [showForm, setShowForm] = useState(false);

    const [title, setTitle]=useState('');
    const [postUrl, setPostUrl]=useState('');
    const [rate, setRate]=useState('');

    const handleMovie = () =>{
        const newMovie={
            title: title,
            posterUrl: postUrl,
            rate: rate,
        }
        addNewMovie(newMovie); 
        setTitle('');
        setPostUrl('');
        setRate('');
        
    }

  return (
    <div>
    {showForm &&
    <div className='popup'>
    <div className='popup_inner'>
      <Form className='Form'>
        <Form.Group>
          <Form.Label>Title : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={title} type="text" onChange={(e)=>setTitle( e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>PostURL : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={postUrl} type="text" onChange={(e)=>setPostUrl(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={rate} type="text" onChange={(e)=>setRate(e.target.value)}/>
        </Form.Group>
        <div className='Form-Button'>
        <button type="button" className="btn" onClick={() => setShowForm(!showForm)}>
         <img src={cancel} alt="cancel" />
        </button>
        <button type="button" className="btn" onClick={handleMovie}><img src={buttonAddMovie} alt="Movie" />
        </button>
        </div>
      </Form>
      </div>
      </div>
      }
      <div className="btt">
        <img src={buttonMovie} alt="add movie" onClick={() => setShowForm(!showForm)} />
      </div>
    </div>
  );
};

export default AddMovie;

