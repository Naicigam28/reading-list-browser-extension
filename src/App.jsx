import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MediaCard from "./components/MediaCard/Card";
import CardGroup from "./components/MediaCard/CardGroup";

function App() {
  const [items, setItems] = useState([]);
  useEffect(async () => {
    const data = await chrome.readingList.query({});
    console.log(data);
    setItems(data);
  }, []);

  const handleClick = async () => {
    chrome.tabs.create({ url: "index.html" });
  };

  return (
    <>
      <button onClick={handleClick}>Open in new tab</button>

      <CardGroup items={items} />
    </>
  );
}

export default App;
