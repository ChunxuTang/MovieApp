import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';
import axios from 'axios';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

class MovieContainer extends Component {
  componentDidMount() {
    axios.get('/movies')
      .then((res) => {
        this.props.fetchMovies(res.data);
      });

    // fetch('/movies')
    //   .then(res => res.json())
    //   .then(data => this.props.fetchMovies(data))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid">
        <br/>
        <MovieList/>
        <MovieDetail/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMovies
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieContainer);
