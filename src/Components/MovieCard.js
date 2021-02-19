import React from "react";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import {Card,ListGroupItem,ListGroup } from "react-bootstrap";
    
    
    const MovieCard =({movie})=>{
      
      return (
          <Card style={{ width: "18rem", marginLeft:'30px',marginTop: '10px'}}>
            <Card.Img style={{ height: "15rem" }} variant="top" src={movie.posterUrl} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center",height: "10px" }}>{movie.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <Rating
                  style={{ height: "10px" }}
                  count={5}
                  size={24}
                  edit={false}
                  value={ movie.rate }
                  activeColor="#ffd700"
                /></ListGroupItem>
                <ListGroupItem style={{marginLeft:'100px'}}>
              <Link to={`/Movies/${movie.id}`}>Movie</Link>
            </ListGroupItem>
            </ListGroup>
          </Card>
        );
    }
    
    export default MovieCard;



    
