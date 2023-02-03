import "../assets/style/contact.scss";
import kakaoQR from "../assets/images/kakaoQR.jpg";

function Contact() {
  return (
    <article className="contact" id="contact">
      <div className="contactBox">
        <div className="leftTxt">
          <h1 className="">"중요한것은 꺾이지 않는 마음!"</h1>
          <div className="middleTxt">
            <h2>포기하지 않고 끊임없이</h2>
            <h2>도전하고 노력하는</h2>
            <h2>프론트엔드 개발자 장재준입니다.</h2>
          </div>
          <div className="linkMe">
            <div className="myName">Jang Jae Jun</div>
            <div className="social">
              <a href={kakaoQR} target="_blank">
                kakaotalk
              </a>
            </div>

            <div className="social">
              <a href="https://github.com/wkdwowns100" target="_blank">
                github
              </a>
            </div>
            <div className="email">
              <a href="mailto:wkdwowns100@naver.com">wkdwowns100@naver.com</a>
            </div>
          </div>
        </div>
        <div className="rightTxt">
          My Career
          <ul className="history">
            <li>1993.07.29</li>
            <li></li>
            <li></li>
            <li>22-23 프론트엔드 개발 및 실무프로젝트 구현과정 수료</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Contact;
