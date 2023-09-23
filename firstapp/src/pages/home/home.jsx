import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../../components/cards/cardList";
import SearchInput from "../../components/UI/customSearchInput/SearchInput";
import './home.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Cards");
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (e) {
        alert("Error: " + e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(
    (cardData) =>
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
          <h3 className="cards__h3">Рестораны в Москве</h3>
          <div className="cardWrapper">
            <CardList data={filteredData} loading={loading} />
          </div>
      </div>
    </>
  );
};

export default Home;
