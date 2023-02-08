import { useEffect, useState } from "react";
import "../assets/style/about.scss";

function About() {
  const htmlCss = [
    { id: 1, text: "웹사이트 구축 및 디자인" },
    { id: 2, text: "Media Query를 이용한 반응형 웹 제작" },
    { id: 3, text: "웹 표준 & 웹 접근성을 준수한 시멘틱 마크업" },
    { id: 4, text: "CSS 및 SCSS style 및 Animation 구현" },
    { id: 5, text: "flex, grid, position을 이용한 레이아웃 구성" },
  ];
  const javascript = [
    { id: 1, text: "ES6+ 기반의 웹 사이트 구현" },
    { id: 2, text: "이벤트 메소드를 통한 효과 구현" },
    {
      id: 3,
      text: `setTimeout 및 async, await 함수를
      활용한 비동기 작업`,
    },
    { id: 4, text: "JavaScript를 이용한 DOM 제어" },
    { id: 5, text: "Open API 사용" },
  ];
  const react = [
    { id: 1, text: "함수 스타일의 컴포넌트 작성" },
    {
      id: 2,
      text: "useState, useEffect, useRef 등의 Hook 활용",
    },
    {
      id: 3,
      text: "map함수, 삼항 연산자와 같은 JS 문법으로 데이터 바인딩",
    },
    { id: 4, text: "react-router-dom을 활용한 페이지 이동" },
    { id: 5, text: "Context API, Redux Toolkit 을 이용한 전역 상태 관리" },
    { id: 6, text: "styled-components를 활용한 디자인" },
  ];
  const graphics = [
    { id: 1, text: "이미지 편집 및 디자인" },
    { id: 2, text: "UI/UX 디자인 구현" },
    { id: 3, text: "간단한 GIF제작" },
    { id: 4, text: "포토샵 & 일러스트 도구 사용" },
    { id: 5, text: "Figma를 이용한 와이어프레임 및 프로토타입 제작" },
  ];
  const gitserver = [
    { id: 1, text: "Git Bash 사용" },
    { id: 2, text: "GitHub를 이용한 작업물 저장 및 버전 관리" },
    { id: 3, text: "branch를 이용한 문서공유 및 협업" },
    { id: 4, text: "GitHub를 이용한 웹사이트 호스팅" },
    { id: 5, text: "react에서의 build로 직접 GitHub 백업" },
  ];

  const [useScroll, setUseScroll] = useState(0);
  const handleScroll = () => {
    console.log("y: ", window.scrollY);
    setUseScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article className="about" id="about">
      <h1 className="title">What can I do?</h1>
      <div className="box htmlCss">
        <div className={useScroll < 500 ? "left" : "left open"}>
          HTML5 & CSS3
        </div>
        <div className={useScroll < 500 ? "right" : "right open"}>
          <ul>
            {htmlCss.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box javascript">
        <div className={useScroll < 800 ? "left" : "left open"}>JavaScript</div>
        <div className={useScroll < 800 ? "right" : "right open"}>
          <ul>
            {javascript.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box react">
        <div className={useScroll < 1100 ? "left" : "left open"}>REACT</div>
        <div className={useScroll < 1100 ? "right" : "right open"}>
          <ul>
            {react.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box graphic">
        <div className={useScroll < 1400 ? "left" : "left open"}>
          Graphics & Design
        </div>
        <div className={useScroll < 1400 ? "right" : "right open"}>
          <ul>
            {graphics.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box git">
        <div className={useScroll < 1700 ? "left" : "left open"}>
          Git & Github
        </div>
        <div className={useScroll < 1700 ? "right" : "right open"}>
          <ul>
            {gitserver.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default About;
