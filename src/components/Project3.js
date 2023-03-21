import { Link } from "react-router-dom";

import "./project3.scss";
import logo from "../assets/images/logo1.png";
import Preview from "../assets/images/project3Preview.png";

function Project3(props) {
  return (
    <div className="project3">
      <header>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </header>
      <article className="preview">
        <div className="left">
          <h1 className="title">GOTCHA</h1>
          <h2>
            FrontEnd 과정 시작 후 첫 번째 팀프로젝트 입니다.
          </h2>
          <h2>4인의 팀원으로 구성되었으며</h2>
          <h2>html과 css를 이용하여 4개의 페이지로 구성되었습니다.</h2>
          <div className="description">
            <h3>진행 과정</h3>
            <ul>
              <li>페이지 선정 및 파트 분배</li>
              <li>html 작성</li>
              <li>개별적으로 css 작성</li>
              <li>데이터 merge후 코드 수정 및 재작성</li>
              <li>발표 및 프로젝트 종료 후 포트폴리오를 위한 추가 수정</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img src={Preview} alt="미리보기" />
        </div>
      </article>
      <article className="directory">
        <div className="left">
          <h2>Directory 구성</h2>
        </div>
        <div className="right">
          <ul className="directoryList">
            <li>index.html</li>
            <li>
              css
              <ul>
                <li>minireset.css</li>
                <li>header.css</li>
                <li>footer.css</li>
                <li>index.css</li>
                <li>introduce.css</li>
                <li>package.css</li>
                <li>support.css</li>
              </ul>
            </li>
            <li>
              images
              <ul>
                <li>index</li>
                <li>introduce</li>
                <li>package</li>
                <li>support</li>
                <li>partners.css</li>
              </ul>
            </li>
            <li>
              favicon
            </li>
            <li>
              subpages
              <ul>
                <li>introduce.html</li>
                <li>package.html</li>
                <li>support.html</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article className="skills">
        <div className="left">
          <h2>Keyword</h2>
          <div className="hashTag">
            <span># HTML5</span>
            <span># CSS3</span>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>전체페이지 html 작성</li>
            <li>메인페이지의 css 작성</li>
            <li>플랜관리</li>
          </ul>
        </div>
      </article>
      <article className="page">
        <div className="left">
          <h2>페이지 구성</h2>
        </div>
        <div className="right">
          <h3>Main</h3>
          <ul>
            <li>css를 이용한 마우스 이벤트 구현</li>
            <li>position fixed를 이용한 고정버튼 구현</li>
            <li>flex, position을 이용한 레이아웃 구성</li>
            <li>select를 이용한 선택박스 구현</li>
          </ul>
          <h3>Introduce</h3>
          <ul>
            <li>css를 이용한 마우스 클릭 이벤트 구현</li>            
            <li>margin을 이용한 레이아웃 구성</li>
          </ul>
          <h3>Support</h3>
          <ul>
            <li>position, margin을 이용한 레이아웃 구성</li>
          </ul>
          <h3>Partners</h3>
          <ul>
            <li>grid를 이용한 레이아웃 구성</li>
            <li>마우스 이벤트 구현</li>
          </ul>
        </div>
      </article>
      <article className="review">
        <div className="left">
          <h2>Review</h2>
        </div>
        <div className="right">
          <ul>
            <li>html과 css 기초 기술로만 작성</li>
            <li>파트 분배를 하기전 모든 html을 먼저 작성 후 css 분배</li>
            <li>JavaScript를 필요로 하는 컨텐츠가 많아 구현하지 못함</li>
            <li>선택자의 활용이 다소 부적절함</li>
            <li>팀원들과의 git을 활용에 있어 다소 부족함</li>
            <li>
              미흡하게 작성되거나 구현하지 못한 컨텐츠가 많음
              <ul className="edit">
                <li>- 추후 JavaScript 교육을 이수 후 다른 프로젝트에 적용해 볼 예정</li>
              </ul>
            </li>
          </ul>
          <div className="siteLink">
            <a
              href="https://rudtjd6435.github.io/ex/Project-Gotcha_최종1114/index.html"
              target="_blank"
              rel="noopenner noreferrer nofollow"
            >
              사이트 바로가기
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Project3;
