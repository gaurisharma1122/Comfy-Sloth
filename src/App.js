import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/cart" element={<CartPage/>}/>
        <Route exact path="/products" element={<ProductsPage/>}/>
        <Route exact path="/products/:id" element={<SingleProductPage/>}/>
        <Route exact path="/checkout" element={<CheckoutPage/>}/>
        <Route exact path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
