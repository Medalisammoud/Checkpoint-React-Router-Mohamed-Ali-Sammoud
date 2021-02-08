import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Style.css";

const AddMovie = ({addNewMovie}) => {

    const [showForm, setShowForm] = useState(false);

    const [title, setTitle]=useState('');
    const [desc, setDesc]=useState('');
    const [postUrl, setPostUrl]=useState('');
    const [rate, setRate]=useState('');

    const handleMovie = () =>{
        const newMovie={
            title: title,
            description: desc,
            posterUrl: postUrl,
            rate: rate,
        }
        addNewMovie(newMovie); 
        setTitle('');
        setDesc('');
        setPostUrl('');
        setRate('');
        setShowForm(false);
    }

  return (
    <div>
    {showForm &&
    <div className='popup'>
    <div className='popup_inner'>
      <Form className='Add'>
        <Form.Group>
          <Form.Label>Title : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={title} type="text" onChange={(e)=>setTitle( e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={desc} type="text" onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>PostURL : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={postUrl} type="text" onChange={(e)=>setPostUrl(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate : </Form.Label>
          <Form.Control style={{ width: "500px" }} value={rate} type="text" onChange={(e)=>setRate(e.target.value)}/>
        </Form.Group>
        <Button type="button" className="btn" onClick={handleMovie}>
          Add Movie
        </Button>
      </Form>
      </div>
      </div>
      }
      <div className="btt">
        <Button type="button" className="btn btn-primary px-4" onClick={() => setShowForm(true)}>
          +
        </Button>
      </div>
    </div>
  );
};

export default AddMovie;
