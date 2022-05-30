import React from "react";
import axios from "axios";

import Navbar from '../components/NavbarComp';

const AddCaraPakai = () => {
  const [caraPakaiNew, setCaraPakaiNew] = React.useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCaraPakaiNew({ ...caraPakaiNew, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.post(
      "http://localhost:8000/api/cara-pakai/",
      caraPakaiNew
    );
    console.log(res);
  };
  return (
    <div>
      <Navbar/>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">
              Slug
            </label>
            <input
              type="text"
              className="form-control"
              name="slug"
              onChange={handleChange}
              />
          </div>
          <div className="mb-3">
            <label htmlFor="richText" className="form-label">
              Rich Text
            </label>
            <textarea
              name="richText"
              id="richText"
              onChange={handleChange}
              cols="30"
              rows="10"
              className="form-control"
              ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            add cara pakai
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCaraPakai;
