import React from "react";
import Card from './Card'

const CardList = ({ people }) => {
    const cardsArray = people.map((user, i) => {
        return (
            <Card
                key={i}
                id={i}
                name={people[i].name}
                gender={people[i].gender}
            />
        );
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;