
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScroolToTop";

function App() {

  return (
    <BrowserRouter>
     <>
      <ScrollToTop />


      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
          </>
      
        <div>
      <Footer />
    </div>

    </BrowserRouter>
    
  );
}

export default App;