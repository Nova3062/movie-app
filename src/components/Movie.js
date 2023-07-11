import React from 'react';
//import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Card from 'react-bootstrap/Card';

// make cards for each movie

const Movie = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <img src={movie.image} className='posterImage img-fluid' alt='movie_image' />
      <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.synopsis}</Card.Text>
      <Card.Text>{movie.director}</Card.Text>
      <Card.Text>{movie.writer}</Card.Text>
      <Card.Text>{movie.starring}</Card.Text>
<ReviewForm />
</Card.Body>
</Card>
      </div>
  );


  // return (
  //   <div>
      
      
        
  //     <h2>{movie.title}</h2>
  //     <p>{movie.synopsis}</p>
  //     <img src={movie.image} className='posterImage img-fluid' alt='movie_image' />
  //     <p>{movie.director}</p>
  //     <p>{movie.writer}</p>
  //     <p>{movie.starring}</p>
  //     <p>{movie.rating}</p>
  //     <p>{movie.ReviewList}</p>
  //     <p>{movie.author}</p>
  //     <p>{movie.stars}</p>
  //     <p>{movie.review}</p>
  //     <ReviewForm />
      
  //     </div>
      
    
  // );
};

export default Movie;
