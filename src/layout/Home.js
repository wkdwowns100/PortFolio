import { ReactComponent as Myname } from "../assets/images/name.svg";
import "../assets/style/home.scss";

function Home() {
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
            <div className="cube1"></div>
            <div className="cube2"></div>
            <div className="cube3"></div>
          </div>
          <div className="cubeTxt">
            <div className="cubeTxt1">끊임없는 도전</div>
            <div className="cubeTxt2">
              성실하고
              <br />
              책임감있게
            </div>
            <div className="cubeTxt3">슬로우 스타터</div>
          </div>
        </div>
      </div>
      <div className="downArrow">
        <span></span>
        <span></span>
      </div>
    </article>
  );
}

export default Home;
