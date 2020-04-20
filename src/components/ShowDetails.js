import React from 'react';

const ShowDetails = (props) => {
  const regex = /(<([^>]+)>)/ig;
  const summary = props.show.show.summary.replace(regex, '');
  return ( 
    <div className="show-card-details">
      <li className="show-details" id={props.show.show.id}>
        <div className="show-details-image">
          <img src={props.show.show.image.original} alt={props.show.show.name} />
        </div>

        <div className="show-details-full">
          <div className="show-details-title">
            <h2>{props.show.show.name}</h2>
          </div>

          <div className="show-details-info">
            <p className="show-summary"><b>Summary:</b> {summary}</p>
            <p>Rating: {props.show.show.rating.average}</p>
            <ul className="show-genres"><h4>Genres:  </h4>
              {props.show.show.genres.map((genres,index) => (
                <li key={index}> {genres} | </li>
              ))
              }</ul>
          </div>
        </div>
      </li>
    </div>
  )
}

export default ShowDetails;