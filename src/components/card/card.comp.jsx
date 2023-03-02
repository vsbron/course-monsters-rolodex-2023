import { Component } from "react";

import './card.style.css';

class Card extends Component {

  render() {
    
    // Destructuring the iteration of monsters array
    const {name, email, id} = this.props.monster;
    
    // Rendering the card with the monster
    return (
      <div className="card__container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2&size:180x180`} alt={`Monster ${name}`} />
        <h2 className="secondary-heading">{name}</h2>
        <p>{email}</p>
      </div>
    )

  }
}

export default Card;