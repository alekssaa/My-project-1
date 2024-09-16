import React from "react";
import Product from "./Product";
import Featured from "./Featured";

const Izdvojeno = () => {
  return (
    <div className="featured container">
      <article className="home">
        <div>
          <h1>
            Najkvalitetniji proizvodi <br /> od metala
          </h1>
          <p>
            Occaecat Lorem aliquip et incididunt proident cupidatat eiusmod
            exercitation officia id ex ad elit fugiat. Tempor adipisicing ut in
            veniam dolore eu quis aliquip. Dolore aliquip labore minim eu nisi
            magna ut nostrud in consectetur veniam ea. Amet reprehenderit ea
            deserunt irure qui reprehenderit deserunt sint eu.
          </p>
        </div>
        <img className="home-img" src="../imgs/slika1.jpg" />
      </article>
      <h2>Izdvojeno:</h2> <br />
      <Featured />
      <hr />
    </div>
  );
};

export default Izdvojeno;
