import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../../components/cards/cardList";
import SearchInput from "../../components/UI/customSearchInput/SearchInput";
import "./home.css";
import Filter from "../../components/filter/Filter";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleCategoryChange = async (index) => {
    const categoryParam = index === 0 ? "" : `?category=${index}`;

    try {
      const response = await axios.get(
        `https://650efda754d18aabfe99b5f0.mockapi.io/api/cards${categoryParam}`
      );
      setData(response.data);
    } catch (e) {
      alert("Error: " + e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://650efda754d18aabfe99b5f0.mockapi.io/api/cards"
        );
        setData(response.data);
        setLoading(false);

        console.log(1);
      } catch (e) {
        alert("Error: " + e);
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    handleCategoryChange(activeCategoryIndex);
  }, [activeCategoryIndex]);

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
        <h3 className="cards__h3">Рестораны в Москве</h3>
        <div className="cardWrapper">
          <CardList data={filteredData} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Home;
