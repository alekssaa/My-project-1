import "./App.css";
import { links } from "./data/data";
import Error from "./pages/Error";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct.js";
function App() {
  //doraditi respozivnost
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          {links.map((link) => {
            const { url, id, component } = link;
            return <Route key={id} path={url} element={component} />;
          })}
          <Route path="/products/:id" element={<SingleProduct />} />{" "}
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
