import React from 'react';
import Show from './Show';
import { Link } from 'react-router-dom';

const ShowList = (props) => {
  const {dataList, isRunning, searchShow} = props
  return (
    <ul className="show-list">
      {dataList
      .filter(showElement => !searchShow || showElement.show.name.toLowerCase().includes(searchShow.toLowerCase()))
      .filter(showElement => !isRunning || (isRunning !== false && showElement.show.status !== "Ended"))
      .map(showElement =>
        <Link key={showElement.show.id} to={`show/${showElement.show.id}`}>
          <Show 
            key = {showElement.show.id}
            showName = {showElement.show.name}
            showImage = {showElement.show.image.medium}
            showRating = {showElement.show.rating.average}
            showStatus = {showElement.show.status}
            showSummary = {showElement.show.showSummary}
          />
        </Link>
      )}

    </ul>
  );
}

export default ShowList;