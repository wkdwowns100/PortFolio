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
    { id: 1, text: "웹사이트 구현" },
    { id: 2, text: "이벤트 메소드 구현" },
    { id: 3, text: "" },
    { id: 4, text: "Open API 사용" },
    { id: 5, text: "슬라이드 & 자동애니메이션 구현" },
  ];
  const react = [
    { id: 1, text: "함수 스타일의 컴포넌트 작성" },
    {
      id: 2,
      text: "props를 이용하여 하위컴포넌트에 데이터 전달",
    },
    {
      id: 3,
      text: "map함수, 삼항 연산자와 같은 JS 문법으로 데이터 바인딩",
    },
    { id: 4, text: "useEffect, useState를 이용한 UI 제작" },
    { id: 5, text: "" },
  ];
  const graphics = [
    { id: 1, text: "이미지 편집 및 디자인" },
    { id: 2, text: "UI/UX 디자인 구현" },
    { id: 3, text: "프로토타입 제작" },
    { id: 4, text: "GIF제작" },
    { id: 5, text: "포토샵 & 일러스트 도구 사용" },
  ];
  const gitserver = [
    { id: 1, text: "Git Bash 사용" },
    { id: 2, text: "GitHub를 이용한 작업물 저장 및 버전 관리" },
    { id: 3, text: "branch를 이용한 공유 및 협업" },
    { id: 4, text: "" },
    { id: 5, text: "" },
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
        <div className={useScroll < 800 ? "left" : "left open"}>Javascript</div>
        <div className={useScroll < 800 ? "right" : "right open"}>
          <ul>
            {javascript.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box react">
        <div className={useScroll < 1100 ? "left" : "left open"}>React</div>
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
