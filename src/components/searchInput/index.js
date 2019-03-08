import React from 'react'
import './searchInput.css'

export default function SearchInput({ change, value, placeholder }) {
  return (
    <div className="input_outbox" >
      <input
        className="search_input"
        type="text"
        onChange={change}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}

