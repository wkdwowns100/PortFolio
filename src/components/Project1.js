import { Link } from "react-router-dom";

import "./project1.scss";
import logo from "../assets/images/logo1.png";
import Preview from "../assets/images/project1Preview.png";

function Project1(props) {
  return (
    <div className="project1">
      <header>
        <Link to="/">
          <img src={logo} alt="로고" />
        </Link>
      </header>
      <article className="preview">
        <div className="left">
          <h1 className="title">easyLoA</h1>
          <h2>
            평소에 즐겨하는 MMORPG게임인 <span>Lost Ark</span>의
          </h2>
          <h2>주간 및 일일 컨텐츠의 달성도 및 주요 레이드의 공략을 정리한 </h2>
          <h2>
            <span className="kind">토이프로젝트</span> 입니다.
          </h2>
          <div className="description">
            <h3>
              육성 캐릭터가 늘어남에 따라, 반복되는 컨텐츠가 많아지게 되면서
            </h3>
            <h3>
              기존에 존재하는 체크 사이트들을 참고하여 직접 만들어보게
              되었습니다.
            </h3>
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
            <li>
              public
              <ul className="public">
                <li>index.html</li>
                <li>images</li>
              </ul>
            </li>            
            <li>src
              <ul className="src">
                <li>
                  assets
                  <ul className="srcInner">
                    <li>fonts</li>
                    <li>images</li>
                    <li>json</li>
                    <li>style</li>
                  </ul>
                </li>
                <li>
                  components
                  <ul className="srcInner">
                    <li>Abrelshud.js</li>
                    <li>Characters.js</li>
                    <li>CunningPaper.js</li>
                    <li>CunningPaperList.js</li>
                    <li>Homework.js</li>
                    <li>Illiakan.js</li>
                    <li>KakulSaydon.js</li>
                    <li>Lauriel.js</li>
                    <li>Valtan.js</li>
                    <li>Vykas.js</li>
                  </ul>
                </li>
                <li>
                  layout
                  <ul className="srcInner">
                    <li>Header.js</li>
                    <li>Footer.js</li>
                  </ul>
                </li>
                <li>App.js</li>
                <li>index.js</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <article className="skills">
        <div className="left">
          <h2>Keyword</h2>
          <div className="hashTag">
            <span># ReactComponent</span>
            <span># OpenAPI</span>
            <span># LocalStorage</span>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>React component를 이용한 SPA구성</li>
            <li>Lost Ark에서 제공한 Open API의 JSON를 활용한 계정 정보 활용</li>
            <li>
              Local Stroage를 이용하여 체크리스트 정보 보존 및 초기화버튼 설정
            </li>
            <li>JSX를 이용한 경매 최저가 입찰 계산기 구현</li>
          </ul>
        </div>
      </article>
      <article className="design">
        <div className="left">
          <h2>Design</h2>
          <h3>로스트아크의 상징인 "모코코" 캐릭터의 컬러를 베이스로</h3>
          <h3>비슷한 녹색계열의 색상을 사용</h3>
        </div>
        <div className="right">
          <div className="color">
            <ul>
              <li>
                <div>color</div>
                <span>#C5ED8C</span>
              </li>
              <li>
                <div>color</div>
                <span>#28AD57</span>
              </li>
              <li>
                <div>color</div>
                <span>#0f8136</span>
              </li>
              <li>
                <div>color</div>
                <span>#458964</span>
              </li>
              <li>
                <div>color</div>
                <span>#43C06F</span>
              </li>
              <li>
                <div>color</div>
                <span>#358D54</span>
              </li>
            </ul>
          </div>
          <div className="font">
            <h3>Typography</h3>
            <span className="notoSans">Noto Sans KR</span>{" "}
            <span className="pretendard">Pretendard Variable</span>
          </div>
          <div className="img">
            <h3>이미지출처</h3>
            <span>로스트아크 공식홈페이지 (캐릭터 클래스 이미지)</span>
            <br />
            <span>로스트아크 인벤 (커닝페이퍼)</span>
          </div>
        </div>
      </article>
      <article className="page">
        <div className="left">
          <h2>페이지 구성</h2>
        </div>
        <div className="right">
          <h3>숙제 체크리스트</h3>
          <ul>
            <li>table을 이용한 캐릭터별 컨텐츠 정리</li>
            <li>chrome 브라우저 최적화 및 LocalStorage 사용</li>
            <li>JSON, map() 함수를 이용한 데이터 리스트 구성</li>
          </ul>
          <h3>레이드 공략</h3>
          <ul>
            <li>SPA 구성</li>            
            <li>useState, Math 함수를 이용한 경매 최저가 입찰 계산기 구현</li>
          </ul>
          <h3>캐릭터 정보</h3>
          <ul>
            <li>Lost Ark 오픈 API를 이용한 JSON파일을 사용하여 캐릭터 정보 불러오기</li>
            <li>grid를 이용한 레이아웃 구성</li>
            <li>외부링크를 이용한 전투정보실 이동</li>
          </ul>
        </div>
      </article>
      <article className="review">
        <div className="left">
          <h2>Review</h2>
        </div>
        <div className="right">
          <h3>Open API 사용시 로스트 아크 서버와 실시간 연동 불가</h3>
          <h4>- 기존에 존재하는 다른 홈페이지의 경우 Open API 제공 전에 제작되었으며 크롤링을 통해 만들어져 있음</h4>
          <h4>- 제공된 JSON 파일을 이용하여 캐릭터 정보 연동</h4>
          <h3>
            LocalStorage 사용시 체크리스트 정보를 원하는시간에 초기화 시키지
            못함
          </h3>
          <h4>- 시작시점부터 시간의 범위를 맞춰놓은 시간에만 초기화 가능</h4>
          <h4>- 지정 시간에 초기화시키는 방법 대신 수동적으로 초기화를 위해 버튼을 생성</h4>
          <h3>주간컨텐츠와 일일컨텐츠의 LocalStorage 분리를 하지 못함</h3>
          <h4>
            - LocalStorage와 redux에 대한 추가적인 공부를 통해 보완 및 다른
            프로젝트에 적용해 볼 예정
          </h4>
          <div className="siteLink">
            <a
              href="https://wkdwowns100.github.io/project1_easyLoa"
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

export default Project1;
