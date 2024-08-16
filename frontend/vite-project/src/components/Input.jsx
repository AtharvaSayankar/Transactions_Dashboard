import React from 'react'

const Input = ({search , handleSearch }) => {
  return (
    <div>
        <input type="text" 
            value={search} 
            onChange={handleSearch} 
            autoComplete="off"
            name="search" 
            placeholder='Search keywords / ID / title' 
            className="mg2"
        />
    </div>
  )
}

export default Input
