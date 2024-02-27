import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path= "/products/:id" element = {<Products />} />
        <Route path= "/product" element = {<Product />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
