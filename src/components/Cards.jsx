import React from 'react';
import Card from './Card.jsx';
import styles from './styles/Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
    return (
      <div className={styles.cards}>{
        cities.map(c => 
          <Card 
            key = {c.id}
            name={c.name}
            min={c.min}
            max={c.max}
            img={c.img}
            onClose={() => onClose(c.id)}
          />)
        }
      </div>
    )
  }else{
    return (
      <h4>No hay Ciudades</h4>
    )
  }
};