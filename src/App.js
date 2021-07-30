import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import fetchCity from "./components/services/apiKeyService";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 3) {
      alert("Can't add more cities");
    } else {
      fetchCity(ciudad, setData)
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  return (
    <div className="App">
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <hr />
      <div>
        {data.length > 0 && (
          <Card
            primary={true}
            max={data[data.length - 1].max}
            min={data[data.length - 1].min}
            name={data[data.length - 1].name}
            img={data[data.length - 1].img}
          />
        )}
      </div>
      <div>
        <Cards cities={data} onClose={(id) => handleOnClose(id)} />
      </div>
    </div>
  );
}

export default App;
