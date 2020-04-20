import React from 'react';

function Show(props) {
  return (
    <div className="show-card">
      <li className="show" id={props.showId}>
        <div className="show-image">
          <img src={props.showImage} alt={props.showName} />
        </div>

        <div className="show-full-info">
        <div className="show-title">
          <h2>{props.showName}</h2>
        </div>

        <div className="show-info">
          <p className="show-rating">Rating: {props.showRating === null ? 'No rating' : `${props.showRating}`}</p>
          <p className="show-status">Status: {props.showStatus}</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Show;