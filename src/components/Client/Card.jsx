import React from 'react'
import "./stylecard.css"

const Card = ({image,reference,designation,prix}) => {
  return (
    <div className="card">
{image && <img src={image} alt={reference} />}
<div className="card-content">
<h1 className="card-title">{reference}</h1>
<p className="card-description">{designation.substr(0,20)}</p>
<h1 className="card-title">Prix : {prix} TND</h1>

<button className="card-button"><i class="fa-solid fa-basket-shopping"></i>Add to card</button>



</div>
</div>
);
};

export default Card
