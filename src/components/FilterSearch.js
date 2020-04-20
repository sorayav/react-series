import React from 'react';

const FilterSearch = (props) => {
  
  const handleSearchShow = ev => {
    const value = ev.target.value
    props.handleSearchShow(value)
  }

  return (
    <form className="filter filter-search">
      <label htmlFor="search">Search show: </label>
     <input onChange={handleSearchShow} type="text" id="search" name="search" value={props.searchShow}/>
    </form>
  )
}

export default FilterSearch;