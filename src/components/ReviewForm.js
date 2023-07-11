import React, { useState } from 'react';
import ReviewList from './ReviewList';
import Stars from './Stars'

const ReviewForm = (props) => {
  const [review, setReview] = useState('');
  const [author, setAuthor] = useState('');
  const [stars, setStars] = useState(null)

  const [reviewList, setReviewList] = useState ([
    { id: 1, author: 'User 1', review: 'Review 1', stars: 5 },
    { id: 2, author: 'User 2', review: 'Review 2', stars: 4 },
    // Add more review objects as needed
  ])

let newId = 1000

  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleAuthorChange = event => {
    setAuthor(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Add logic to handle review submission and update movie
    setReview('');
  };

  const handleClick = event => {
    event.preventDefault();
    let newReview = {id: newId++, author: author, review: review, stars: stars} 
    setReviewList([...reviewList, newReview])

  }

  const handleRatingChange = rating => {
    setStars(rating);
 };

  return (
    <div>
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleAuthorChange}></input>
        <textarea value={review} onChange={handleReviewChange} />
        <Stars stars={stars} changeRating={handleRatingChange}/>
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
      <ReviewList reviewList={reviewList} />
    </div>
  );
};

export default ReviewForm;
