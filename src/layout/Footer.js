import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "../assets/style/footer.scss";

function Footer() {
  const [scrollDown, setScrollDown] = useState(0);
  const onScroll = () => {
    setScrollDown(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer>
      <div className={scrollDown < 700 ? "goTop" : "goTop onBtn"}>
        <Link to="home" smooth={true}>
          TOP
        </Link>
      </div>
      <div className="copy">&copy; 2023. Jang-JaeJun All rights reserved</div>
    </footer>
  );
}

export default Footer;
