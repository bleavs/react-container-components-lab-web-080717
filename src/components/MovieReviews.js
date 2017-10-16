// Code MovieReviews Here
import React from 'react';

const Review = ({
  display_title,
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className = "review">
      <h2>{display_title}</h2>
    </div>
)}

const MovieReviews = ({reviews}) =>
<div className="review-list">
  {reviews.map(Review)}
</div>

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
