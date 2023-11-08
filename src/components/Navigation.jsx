import React from "react";

// Creates the navigation menu and receives props from the Header component.
// The active page receives the "active" css class.
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
        <li><a href="#About" onClick={() => handlePageChange("About")} >About Me</a></li>
        <li><a href="#Portfolio" onClick={() => handlePageChange("Portfolio")} >Portfolio</a></li>
        <li><a href="#Resume" onClick={() => handlePageChange("Resume")} >Resume</a></li>
        <li><a href="#Contact" onClick={() => handlePageChange("Contact")} >Contact</a></li>
      </ul>
    </nav>
  );
}