import React from "react";
import styles from "./styles/Card.module.css";
import {IoCloseCircleOutline} from 'react-icons/io5' 

export default function Card(props) {
  // acá va tu código
  const { name, min, max, img, onClose, primary } = props;
  const { card, bloque, titleCard, minTempCard, maxTempCard, buttonCard } = styles;
  return (
    <div>
      <div className={card}>
        <div className={titleCard}>
          <h4>{name} Weather...</h4>
        </div>

        <div className={bloque}>
          <div className={minTempCard}>
            <p>Min</p>
            <p>{min}</p>
          </div>

          <div>
            <img
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt="Not Found"
            />
          </div>

          <div className={maxTempCard}>
            <p>Max</p>
            <p>{max}</p>
          </div>
        </div>

        <div>
          {!primary && (<button className={buttonCard} onClick={onClose}>
            <IoCloseCircleOutline size={30}/>
          </button>)}
        </div>
      </div>
    </div>
  );
}
