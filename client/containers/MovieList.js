import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMovie } from '../actions/index';

class MovieList extends Component {

  renderList() {
    console.log(this.props.movies);
    return this.props.movies.map((movie) => {
      return (
        <li key={movie._id} onClick={() => this.props.selectMovie(movie)} className="list-group-item">
          {movie.name}
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-md-4 col-sm-12">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectMovie
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
