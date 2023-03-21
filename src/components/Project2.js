import { Link } from "react-router-dom";

import "./project2.scss";
import logo from "../assets/images/logo1.png";
import Preview from "../assets/images/project2Preview.png";

function Project2(props) {
  return (
    <div className="project2">
      <header>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </header>
      <article className="preview">
        <div className="left">
          <h1 className="title">Metatoy<span>Dragon</span>Z</h1>
          <h2>
            JavaScript를 배운 후 첫 번째 팀프로젝트 입니다.
          </h2>
          <h2>4인의 팀원으로 구성되었으며</h2>
          <h2>서브페이지를 포함하여 4개의 페이지로 구성되었습니다.</h2>
          <div className="description">
            <h3>진행 과정</h3>
            <ul>
              <li>페이지 선정 및 coding-convention 작성</li>
              <li>파트 분배</li>
              <li>개별적으로 본인 파트 코딩</li>
              <li>git을 이용한 merge 후 최종 수정</li>
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
              common
              <ul>
                <li>font</li>
                <li>minireset.css</li>
                <li>swiper-bundle.min.css</li>
              </ul>
            </li>
            <li>
              css
              <ul>
                <li>header.css</li>
                <li>main.css</li>
                <li>roadmap.css</li>
                <li>story.css</li>
                <li>partners.css</li>
              </ul>
            </li>
            <li>
              images
              <ul>
                <li>favicon</li>
                <li>main-images</li>
                <li>roadmap</li>
                <li>story</li>
                <li>partners</li>
                <li>OpenGraphy</li>
              </ul>
            </li>
            <li>
              js
              <ul>
                <li>header.js</li>
                <li>main.js</li>
                <li>roadmap.js</li>
                <li>story.js</li>
                <li>partners.js</li>
                <li>vanilla-tilt.min.js</li>
              </ul>
            </li>
            <li>
              subpages
              <ul>
                <li>header+footer.html</li>
                <li>roadmap.html</li>
                <li>stoty.html</li>
                <li>partners.html</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article className="skills">
        <div className="left">
          <h2>Keyword</h2>
          <div className="hashTag">
            <span># JavaScript</span>
            <span># TeamProject</span>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>header와 footer, partners 페이지를 제작</li>
            <li>
              JavaScript를 이용한 마우스이벤트와 스크롤이벤트 구현
            </li>
            <li>한글 영문버전 클릭버튼 구현</li>
            <li>grid를 이용한 레이아웃 구성</li>
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
            <li>addEventListener를 이용한 마우스 이벤트 구현</li>
            <li>addEventListener를 이용한 스크롤 이벤트 구현</li>
            <li>transform을 이용한 애니메이션 구현</li>
          </ul>
          <h3>Road Map</h3>
          <ul>
            <li>addEventListener를 이용한 마우스 이벤트 구현</li>            
            <li>컨텐츠 부분 내에서의 스크롤 구현</li>
          </ul>
          <h3>Story</h3>
          <ul>
            <li>flex를 이용한 레이아웃 구성</li>
            <li>for 함수를 이용한 컨텐츠이미지 구현</li>
            <li>JavaScript를 통한 체크박스, 검색등을 이용한 필터 구현</li>
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
            <li>본격적으로 JavaScript를 실전에서 사용함</li>
            <li>css 작성 시 선택자의 활용 및 배치에 대하여 이해도를 높임</li>
            <li>한글, 영문버전의 버튼은 구현하였으나 실제 한글버전만 제작함</li>
            <li>for함수에 대해 숙련도가 부족하여 정확히 구현해 내지 못함</li>
            <li>팀원들간의 파일 및 버전관리에 있어 git을 본격적으로 활용함</li>
            <li>
              미흡하게 작성되거나 구현하지 못한 컨텐츠가 드러남
              <ul className="edit">
                <li>- 추후 팀원들과 소통하며 추가 작업으로 완성도를 높일 예정</li>
              </ul>
            </li>
          </ul>
          <div className="siteLink">
            <a
              href="https://teamproject-no-2.github.io/dragonz/subpages/partners.html"
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

export default Project2;
