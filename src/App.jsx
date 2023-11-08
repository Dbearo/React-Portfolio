import React, { useState } from "react";
import  Header from './components/Header.jsx'
import About from './components/About.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
function App() {
  const [currentPage, setCurrentPage] = useState("About");
  function handlePageChange(page) {
    setCurrentPage(page);
    console.log(currentPage)
  }

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
     return <Contact />;
    }
     return <Resume />;
  };


  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App