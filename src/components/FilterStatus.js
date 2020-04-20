import React from 'react';

const FilterStatus = (props) => {

  const updateCheckbox = () => {
    props.handleCheckbox();
  }

  return (
    <form className="filter filter-status">
      <label htmlFor="status">Filter shows currently on air: </label>
      <input onChange={updateCheckbox} type="checkbox" id="status" name="status" value="Estado" checked={props.isRunning}/>
    </form>
  )
}

export default FilterStatus;