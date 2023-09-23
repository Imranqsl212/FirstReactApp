import classes from "./card.module.css";
import axios from "axios";
const Card = (props) => {
  const { img, name, desc, time, price } = props;
  const handleAddToBasket = async () => {
    try {
      const data = {
        img,
        name,
        desc,
        time,
        price,
      };
      const response = await axios.post("http://localhost:4000/basket", data);
      console.log("POST request successful", response.data);
    } catch (error) {
      console.error("Error making POST request", error);
    }
  };
  return (
    <div className={classes.cardContainer}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={classes.upper}
      ></div>
      <div className={classes.bottom}>
        <div className={classes.bottom__text}>
          <h4 className={classes.h4}>{name}</h4>
          <h5 className={classes.h5}>{desc}</h5>
          <p className={classes.p}>{time}</p>
          <p className={classes.h5}>{price} ₽</p>
        </div>
        <div className={classes.bottom__btn}>
          <button
            onClick={handleAddToBasket}
            className={`${classes.bottom__button}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
