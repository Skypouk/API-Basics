import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  /*const apiUrl = process.env.REACT_APP_API_BASE_URL;*/

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/users/users/");
      setData(response.data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <section className="home-section">
      <h1>JSON Data Table</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            {/* Add more headers as per your JSON structure */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              {/* Add more cells as per your JSON structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Home;
