import React from "react";

// Creates the navigation menu and receives props from the Header component.
// The active page receives the "active" css class.
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li><button><a href="#About" onClick={() => handlePageChange("About")} >About Me</a></button></li>
        <li><button><a href="#Portfolio" onClick={() => handlePageChange("Portfolio")} >Portfolio</a></button></li>
        <li><button><a href="#Resume" onClick={() => handlePageChange("Resume")} >Resume</a></button></li>
        <li><button><a href="#Contact" onClick={() => handlePageChange("Contact")} >Contact</a></button></li>
      </ul>
    </nav>
  );
}