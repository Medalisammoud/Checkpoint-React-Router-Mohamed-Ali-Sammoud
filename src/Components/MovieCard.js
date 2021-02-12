import React from "react";
import Rating from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import {Card,ListGroupItem,ListGroup } from "react-bootstrap";


const MovieCard =(props)=>{
  
  return (
    <Card style={{ width: "18rem", marginLeft:'30px',marginTop: '10px'}}>
    <Card.Img style={{ height: "15rem" }} variant="top" src={props.imageUrl} />
    <Card.Body>
      <Card.Title style={{ textAlign: "center",height: "10px" }}>{props.title}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>
        <Rating
          style={{ height: "10px" }}
          count={5}
          size={24}
          edit={false}
          value={ props.rate }
          activeColor="#ffd700"
        /></ListGroupItem>
            <ListGroupItem style={{display:'flex', justifyContent:'space-between'}}>
              <NavLink to={`/Description/${props.id}`}>Description</NavLink>
              <button className='buttonplay'>
					        <i className="fas fa-play"></i><NavLink style={{color:'white'}} to={`/Trailer/${props.id}`}>SEE TRAILER</NavLink> 
				      </button>
            </ListGroupItem>
        </ListGroup>
      </Card>
    );
}

export default MovieCard;
