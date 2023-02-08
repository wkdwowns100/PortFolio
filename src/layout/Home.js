import { useEffect, useState } from "react";
import { ReactComponent as Myname } from "../assets/images/name.svg";
import "../assets/style/home.scss";

function Home() {
  const cubeTxt1 = document.querySelector(".cubeTxt1");
  const cubeTxt2 = document.querySelector(".cubeTxt2");
  const cubeTxt3 = document.querySelector(".cubeTxt3");

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
      cubeTxt1.style.transform = `translate(${posX / 30}px, ${posY / 20}px)`;
      cubeTxt2.style.transform = `translate(${-posY / -20}px, ${posX / 40}px)`;
      cubeTxt3.style.transform = `translate(${30 - posX / 20}px, ${
        -posY / 20
      }px)`;
    });
    return window.removeEventListener("mousemove", (e) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
      cubeTxt1.style.transform = `translate(${posX / 30}px, ${posY / 20}px)`;
      cubeTxt2.style.transform = `translate(${-posY / -20}px, ${posX / 40}px)`;
      cubeTxt3.style.transform = `translate(${30 - posX / 20}px, ${
        -posY / 20
      }px)`;
    });
  }, [posX, posY]);

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
            <div className="cubeTxt1">#끊임없는_도전</div>
            <div className="cubeTxt2">
              #성실하고
              <br />
              책임감있게
            </div>
            <div className="cubeTxt3">#슬로우스타터</div>
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
