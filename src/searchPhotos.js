import React, { useState } from "react";
import { createApi } from "unsplash-js";
import "./css/search.css";
import "./css/button.css";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const unsplash = createApi({
    accessKey: "z6hRuW8UEmXxD2jBMCNuCcpSj4dLdj3E_XHEBSsTmoA",
  });

  const searchPhotos = async (e) => {
    e.preventDefault();
    console.log("Submitting the Form");
    const { response } = await unsplash.search.getPhotos({
      query,
    });
    console.log(response.results);
    setPics(response.results);
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          <h2 className="brand">Image search</h2>
          <button className="button-24 center" onKeyDown={searchPhotos}>
            Submit
          </button>
          <div className="container">
            <input
              type="text"
              name="query"
              className="input"
              placeholder={"Try cars 🤷‍♂️"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="search"></div>
          </div>
        </label>
        <input />
        <div className="card-list">
          {pics &&
            pics.map((pic) => (
              <div key={pic.id} id="gallery" className="gridStyle px-4">
                <img
                  className="card--image"
                  alt={pic.alt_description}
                  src={pic.urls.full}
                  width="50%"
                  height="50%"
                ></img>
              </div>
            ))}
        </div>
      </form>
    </>
  );
}
