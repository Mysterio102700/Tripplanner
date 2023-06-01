import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const options = {
      method: "GET",
      url: "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport",
      params: { query: query },
      headers: {
        "X-RapidAPI-Key": "87827f1c84mshcc050ec80bd24e2p16bcdfjsnc548a5060814",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setResults(response.data[1]); // Ensure results are set even if empty
      console.log(setResults)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.parent_name}>{result.sname}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
