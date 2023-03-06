import { Component } from "react";

import './card.style.css';

// Creating functional component 
const Card = ( {monster} ) => {

  // Destructuring the props
  const {name, email, id} = monster;

  return(
    // Rendering the card with the monster
    <div className="card__container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size:180x180`} alt={`Monster ${name}`} />
      <h2 className="secondary-heading">{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;

/////////////////////
// CLASS COMPONENT //
/////////////////////

// class Card extends Component {

//   render() {
    
//     // Destructuring the iteration of monsters array
//     const {name, email, id} = this.props.monster;
    
//     // Rendering the card with the monster
//     return (
//       <div className="card__container" key={id}>
//         <img src={`https://robohash.org/${id}?set=set2&size:180x180`} alt={`Monster ${name}`} />
//         <h2 className="secondary-heading">{name}</h2>
//         <p>{email}</p>
//       </div>
//     )

//   }
// }

// export default Card;