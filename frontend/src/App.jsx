import { useEffect, useState } from "react";
import axios from "axios";

import { api_key } from "./config/config";

import "./App.css";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    axios.get(``);

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <>
      <h1 className="header-title">See latest news</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </>
  );
}

export default App;
