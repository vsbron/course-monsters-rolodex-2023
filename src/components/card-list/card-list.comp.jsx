import { Component } from "react";

import Card from "../card/card.comp";

import './card-list.style.css';

class CardList extends Component {

  render() {
    // Getting the props
    const {monsters} = this.props;
    console.log(monsters);

    return (
      <div className="card__list">
        {monsters.map(monster => {
          return <Card monster={monster} />
        })}
      </div>
    )
  }

}

export default CardList;