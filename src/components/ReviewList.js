import Review from './Review';


const ReviewList = (props) => {

  return (
    <div>
      {props.reviewList.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;

