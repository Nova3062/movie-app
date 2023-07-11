import React from 'react';

const Review = ({ review }) => {

  const displayStars = (stars) => {
    let newRating = ''
    for (let i = 1; i<= stars; i++){
       newRating = newRating + '⭐'
    }
    return newRating
  }



  return (
    <div>
      <p>Author: {review.author}</p>
      <p>Review: {review.review}</p>
      <p>Rating: {displayStars(review.stars)}</p>
    </div>
  );
};

export default Review;
