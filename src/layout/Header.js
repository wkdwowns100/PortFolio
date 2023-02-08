import { useState } from "react";
import { Link } from "react-scroll";
import "../assets/style/header.scss";

function Header() {
  const [isNav, setIsNav] = useState(false);
  const openMenu = () => {
    setIsNav(!isNav);
  };
  const removeNav = () => {
    setIsNav(!isNav);
  };
  return (
    <header>
      <ul>
        <li>
          <Link to="home" smooth={true}>
            home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            about
          </Link>
        </li>
        <li>
          <Link to="project" smooth={true}>
            project
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            contact
          </Link>
        </li>
      </ul>
      <div className={isNav ? "more open" : "more"} onClick={openMenu}>
        <span>line</span>
        <span>line</span>
        <span>line</span>
        <div className={isNav ? "nav on" : "nav"}>
          <ul>
            <li>
              <Link to="home" smooth={true} onClick={removeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} onClick={removeNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} onClick={removeNav}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} onClick={removeNav}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
