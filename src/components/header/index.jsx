import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useDispatch, useSelector } from "react-redux";
import { langChange } from "../../redux/actions/languageAction";
const Header = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const { langType, language } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleLang = (e) => {
    dispatch(langChange(e.target.value));
  };


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
        <Link to="/">{language.home}</Link>
        <Link to="/projects">{language.projects}</Link>
        <Link to="/experience">{language.experience}</Link>
        <select value={langType} onChange={handleLang}>
          <option value="en">En</option>
          <option value="uz">Uz</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
