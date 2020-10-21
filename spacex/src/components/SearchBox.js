import React, {Component} from 'react';

function SearchBox(props){
  return (
    <div className="launches_filter_container">
      <input onChange={props.handleInput} type="text" className="launches_filter" placeholder={props.placeholder}></input>
    </div>
  )
}

export default SearchBox;