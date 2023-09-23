import React from "react";
import Card from "../UI/Card/Card";


const CardList = ({ data, loading }) => {

  return (
    <>
      {loading ? (
        <p>load</p>
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




