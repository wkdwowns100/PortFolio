import Typed from "typed.js";
import { useEffect, useState, useRef } from "react";
import { ReactComponent as Myname } from "../assets/images/name.svg";
import "../assets/style/home.scss";

function Home() {
  const onTag1 = useRef(null);
  const onTag2 = useRef(null);
  const onTag3 = useRef(null);

  const cubeTxt1 = document.querySelector(".cubeTxt1");
  const cubeTxt2 = document.querySelector(".cubeTxt2");
  const cubeTxt3 = document.querySelector(".cubeTxt3");

  const [handleX, setHandleX] = useState(0);
  const [handleY, setHandleY] = useState(0);

  useEffect(() => {
    const typed1 = new Typed(onTag1.current, {
      strings: ["#끊임없는_도전", "#새로운_도전"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
    const typed2 = new Typed(onTag2.current, {
      strings: ["#성실하게", "#책임감있게"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
    const typed3 = new Typed(onTag3.current, {
      strings: ["#슬로우스타터", "#꾸준하게"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setHandleX(e.clientX);
      setHandleY(e.clientY);
      cubeTxt1.style.transform = `translate(${handleX / 30}px, ${
        handleY / 20
      }px)`;
      cubeTxt2.style.transform = `translate(${-handleY / -20}px, ${
        handleX / 40
      }px)`;
      cubeTxt3.style.transform = `translate(${30 - handleX / 20}px, ${
        -handleY / 20
      }px)`;
    });
    return window.removeEventListener("mousemove", (e) => {
      setHandleX(e.clientX);
      setHandleY(e.clientY);
      cubeTxt1.style.transform = `translate(${handleX / 30}px, ${
        handleY / 20
      }px)`;
      cubeTxt2.style.transform = `translate(${-handleY / -20}px, ${
        handleX / 40
      }px)`;
      cubeTxt3.style.transform = `translate(${30 - handleX / 20}px, ${
        -handleY / 20
      }px)`;
    });
  }, [handleX, handleY]);

  return (
    <article className="home" id="home">
      <div className="homeInner">
        <div className="homeTxt">
          <h3>끊임없이 도전하고 발전하며 나아가는</h3>
          <h2>Frontend Developer</h2>
          <h1>
            <Myname />
          </h1>
        </div>
        <div className="dotLine">
          &middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;&middot;
        </div>
        <div className="cube">
          <div className="cubeImg">
            <div class="cube-face cube-front"></div>
            <div class="cube-face cube-back"></div>
            <div class="cube-face cube-bottom"></div>
            <div class="cube-face cube-top"></div>
            <div class="cube-face cube-left"></div>
            <div class="cube-face cube-right"></div>
          </div>
          <div className="cubeTxt">
            <div className="cubeTxt1">
              <span ref={onTag1}></span>
              {""}
            </div>
            <div className="cubeTxt2">
              <span ref={onTag2}></span>
              {""}
            </div>
            <div className="cubeTxt3">
              <span ref={onTag3}></span>
              {""}
            </div>
          </div>
        </div>
      </div>
      <div className="downArrow">
        <span>left</span>
        <span>right</span>
      </div>
    </article>
  );
}

export default Home;
