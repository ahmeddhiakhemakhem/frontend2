import React from 'react'
import { Link } from 'react-router-dom'
import "./article.css"

const Headerarticles = ({searchText,handleSearchChange}) => {
  return (
    <div className="table-container-header">

<div className="search-container">

<i className="fa-solid fa-search"></i>
<input
type="text"
value={searchText}
onChange={handleSearchChange}
placeholder="Rechercher des articles..."
className="search-input"
/>
</div>

</div>
  )
}

export default Headerarticles
