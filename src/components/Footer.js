import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container">
      <hr />
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3 ">
            <h5>Sekcija</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 ">
                  Početna strana
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/products" className="nav-link p-0 ">
                  Proizvodi
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/cart" className="nav-link p-0 ">
                  Korpa
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Kontakt
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  O nama
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Plaćanje</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Način plaćanja
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Naručivanje i dostava
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Garancija i servis
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Uslovi korištenja i politika privatnosti
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 ">
                  Prava i obaveze potrošača
                </a>
              </li>
            </ul>
          </div>
          {/*DODATI LOKACIU I DOBRO ODRADJENO NA LINKU POGLEDATI https://zeusbl.com/kategorija-proizvoda/klime/inverter */}
          <div className="col-md-5 offset-md-1 mb-3">
            <iframe
              className="locatinon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11291.270189481422!2d17.3171245!3d44.96770075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475df93ab340f7ef%3A0x11614ef8b949a8e9!2z0JDQu9C10LrRgdCw0L3QtNGA0L7QstCw0YY!5e0!3m2!1ssr!2sba!4v1724840268926!5m2!1ssr!2sba"
              width="600"
              height="450"
            ></iframe>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
