import classes from "./basketCards.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BasketCards = () => {
  const [basketData, setBasketData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const getBasket = async () => {
      try {
        const response = await axios.get("http://localhost:4000/basket");
        setBasketData(response.data);
      } catch (e) {
        console.log("Error: " + e);
      }
    };
    getBasket();
  }, []);
  return (
    <>
      {basketData.map((i) => {
        return (
          <div key={i.id} className={classes.basketCard}>
            <div className={classes.basketCard__data}>
              <div className={classes.top}>
                <div className={classes.back} style={{ backgroundImage: `url(${i.img})` }}></div>
              </div>
              <div className={classes.bottom}>
                <h1 className={classes.h1} >{i.name}</h1>
                <br />
                <h4 className={classes.h4} >{i.desc}</h4>
              </div>
            </div>
            <hr className={classes.hr} />
          </div>
        );
      })}
    </>
  );
};

export default BasketCards;
