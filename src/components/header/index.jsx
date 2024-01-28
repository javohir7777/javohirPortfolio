import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
const Header = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos !== currentScrollPos) {
      setExpandNavbar(false);
    }
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div
        className="toggleButton"
        onClick={() => setExpandNavbar((prev) => !prev)}
      >
        <button>
          {" "}
          <ReorderIcon />{" "}
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/experience"> Experience</Link>
      </div>
    </div>
  );
};

export default Header;
