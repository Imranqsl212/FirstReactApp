import React from "react";
import Card from "../UI/Card/Card";
import LoadingSpinner from '../loader/Loader'


const CardList = ({ data, loading }) => {

  return (
    <>
      {loading ? (
        <LoadingSpinner/>
      ) : (
        data.map((cardData) => {
          return (
            <Card
              key={cardData.id}
              img={cardData.img}
              name={cardData.name}
              desc={cardData.desc}
              time={cardData.time}
              price={cardData.price}
            />
          );
        })
      )}
    </>
  );
};

export default CardList;




