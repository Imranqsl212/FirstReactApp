import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../../components/cards/cardList";
import SearchInput from "../../components/UI/customSearchInput/SearchInput";
import "./home.css";
import Filter from "../../components/filter/Filter";
import Price from "../../components/priceFilter/Price";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [sortingOrder, setSortingOrder] = useState("");
  const fetchData = async (index, sort) => {
    try {
      let apiUrl = "https://650efda754d18aabfe99b5f0.mockapi.io/api/cards";

      const categoryParam =
        index === 0 ? "" : `?category=${activeCategoryIndex}`;
      apiUrl += categoryParam;

      if (sort !== "" && categoryParam === "") {
        apiUrl += `?sortBy=price&order=${sort}`;
      } else if (sort !== "" && categoryParam !== "") {
        apiUrl += `&sortBy=price&order=${sort}`;
      }

      const response = await axios.get(apiUrl);
      setData(response.data);
      console.log(1);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(activeCategoryIndex, sortingOrder);
  }, [activeCategoryIndex, sortingOrder]);

  useEffect(() => {
    fetchData(activeCategoryIndex, sortingOrder);
  }, []);

  const filteredData = data.filter((cardData) =>
    cardData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="cards">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <hr className="input__underline" />
        <Filter
          value={activeCategoryIndex}
          setValue={(i) => setActiveCategoryIndex(i)}
        />
        <Price sortingOrder={sortingOrder} setSortingOrder={setSortingOrder} />
        <h3 className="cards__h3">Рестораны в Москве</h3>
        <div className="cardWrapper">
          <CardList data={filteredData} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Home;
