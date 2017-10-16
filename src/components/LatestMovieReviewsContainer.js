import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews' //making content accessible in this file


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
// const QUERY = `query=${search-term}`

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends React.Component  {
  constructor(){
    super();
    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          reviews: res.results
        })
      })
  }


  render(){

    return ( <div className="latest-movie-reviews">
                <h1>Latest movies</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
    )
  }
}
