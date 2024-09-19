import Header from "./components/Header";
import Footer from "./components/Footer";
import { About, Contact, Home, ProductDetails } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact-us" exact element={<Contact />} />
          <Route path="/product" exact element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
