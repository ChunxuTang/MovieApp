import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.movie) {
      return <div>Select a movie to view description.</div>
    }

    return (
      <div>
        <h4>Name: {this.props.movie.name}</h4>
        <div>Description: {this.props.movie.description}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  }
}

export default connect(mapStateToProps)(MovieDetail);
