import { useEffect, useRef } from "react";
import Typed from "typed.js";
import kakaoQR from "../assets/images/kakaoQR.jpg";
import "../assets/style/contact.scss";

function Contact() {
  const onText = useRef(null);
  useEffect(() => {
    const typed = new Typed(onText.current, {
      strings: [
        `"새로운 도전을 시작합니다"`,
        `"Slow and Steady"`,
        `"중요한것은 꺾이지 않는 마음!"`,
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <article className="contact" id="contact">
      <div className="contactBox">
        <h1>
          <span ref={onText}></span>{" "}
        </h1>
        <div className="leftTxt">
          <div className="middleTxt">
            <h2>포기하지 않고 끊임없이</h2>
            <h2>도전하고 노력하는</h2>
            <h2>프론트엔드 개발자 장재준입니다.</h2>
          </div>
          <div className="linkMe">
            <div className="myName">Jang Jae Jun</div>
            <div className="social">
              <a href={kakaoQR} target="_blank" rel="noopener noreferrer">
                kakaotalk
              </a>
            </div>

            <div className="social">
              <a
                href="https://github.com/wkdwowns100"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </div>
            <div className="email">
              <a href="mailto:wkdwowns100@naver.com">wkdwowns100@naver.com</a>
            </div>
          </div>
        </div>
        <div className="rightTxt">
          Cube J
          <ul className="history">
            <li>1993.07.29</li>
            <li>ISTJ</li>
            <li>충북대학교 졸업</li>
            <li>22-23 프론트엔드 개발 및 실무프로젝트 구현과정 수료</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Contact;
