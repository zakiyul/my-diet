import React from "react";
import axios from "axios";
import NavbarComp from "../components/NavbarComp";

const HomePage = () => {
  const [caraPakai, setCaraPakai] = React.useState([]);

  const getCaraPakai = async () => {
    const res = await axios.get("http://localhost:8000/api/cara-pakai/");
    setCaraPakai(res.data.results);
  };

  React.useEffect(() => {
    getCaraPakai();
  }, []);
  return (
    <div>
      <NavbarComp />
      <div className="container">
        hello world
        {caraPakai &&
          caraPakai.map((cp) => {
            return (
              <li>
                <h3>{cp.slug}</h3>
                <pre>{cp.richText}</pre>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
