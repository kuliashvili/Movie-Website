import React from 'react'

export default function SearchBox(props) {
  return (
    <div>
    <input value={props.value} 
    onChange={(event) => props.setSearchValue(event.target.value)}
     className='searchbox'
     placeholder='Type to search...' 
     ></input>
    </div>
  )
}
