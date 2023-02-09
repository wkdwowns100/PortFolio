# 포트폴리오의 구성 및 설명

- ### 포트폴리오 주소 : <https://wkdwowns100.github.io/PortFolio/>

## 목적

#### 포트폴리오 제작을 통해 간단한 자기소개 및 현재의 지식과 기술, 진행한 프로젝트를 소개

## 포트폴리오의 구성

### `디렉토리 구조`

<img src="./directoryStructure.png" width="600px" alt="디렉토리구조"></img>

- #### layout 폴더 내부에 Header, Home, About, Project, Contact, Footer의 6개 컴포넌트로 분리하여 작성
- #### 그 외에 세부 컴포넌트 들은 components 폴더 내에 작성

## 사용한 기술

- #### SPA Framework / Library React
- #### SCSS
- #### JavaScript (ES6+)
- #### JSON
- #### Tool
  - GitHub(호스팅 및 백업)
  - Visual Studio Code(문서작성 및 수정)
  - Figma(와이어프레임 및 프로토타입 제작)
  - Adobe Illustrator(파비콘 및 오픈그라피 제작)

## 페이지 구성

- ### 1개의 페이지 안에 Home, About, Project, Contact 의 4가지의 레이아웃으로 구성

  ### `Header`

  - **position fixed**를 이용하여 헤더 고정
  - Header에 **Navigation** 메뉴 및 아이콘 작성
  - 아이콘을 통한 큰 화면의 Navigation의 경우 JS를 이용하여 **클릭이벤트** 사용
  - **Link**를 통해 해당 영역으로 이동

  ### `Home`

  - **flex, position**을 이용한 레이아웃 구성
  - scss를 이용한 **3D 애니메이션** 사용
  - JS를 이용한 **마우스 이벤트**
  - **typed.js를 이용한 autoType** 구현

  ### `About`

  - **JSON 객체 배열** 이용
  - map() 함수, 삼항연산자 등의 **JSX**를 사용하여 레이아웃 구성
  - **스크롤 이벤트**(Y좌표)를 이용한 오브젝트 가로방향 이동
  - **flex, position**을 이용한 위치 조정

  ### `Project`

  - **마우스 이벤트**를 이용한 크기변경 및 외부링크
  - **grid, gap**을 이용한 레이아웃 구성

  ### `Contact`

  - **flex**를 이용한 레이아웃 구성
  - scss를 이용한 **마우스 hover 이벤트 및 외부링크**
  - **typed.js를 이용한 autoType** 구현

  ### `Footer`

  - **position fixed**를 이용하여 버튼 고정
  - **JS 스크롤 이벤트**를 이용하여 일정 스크롤이 지나야 나타나게 구현

## 문제 및 해결

- #### react-router-dom의 Link를 통한 Navigation 이용 시, 각 영역의 제목이 헤더영역에 가려지는 현상 발생
  - `scss를 이용하여 해당 영역의 상부 여백조정을 통해 제목이 가려지지 않게 구성`

---

- #### Home의 3D 큐브 작업 시 react의 3d-cube, three 등을 사용하여 구현해야 했음
  - `빠른시간에 지식 습득 및 구현이 어려워, SCSS의 애니메이션으로 작성`
  - `애니메이션이 구동되기는 했으나 3차원적인 빛의 방향이 표현되지 않음. 추후 다른 프로젝트에서 구현해 볼 예정`

---

- #### AutoTyped 구현 시 기존 사용했었던 JS가 적용되지 않음

```
const h1 = document.querySelector('h1');
    const text = '중요한것은 꺾이지 않는 마음';

    let i = 0;

    (function autoType() {
      if (i < text.length) {
        h2.textContent += text[i];
        i++;
      } else {
        h2.textContent = "";
        i = 0;
      }
      setTimeout(autoType, 300);
    })();
```

- `typed.js를 이용하여 자동완성 및 변화 구현`

```
import Typed from "typed.js";
import { useEffect, useRef } from "react";

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
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
```

---

- #### 마우스 좌표에 따른 이펙트를 넣고자 useEffect를 사용하였으나 작동하지 않음.

```
  const [handleX, setHandleX] = useState(0);
  const [handleY, setHandleY] = useState(0);

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
  }, []);
```

- `이벤트의 원인인 x, y좌표의 변동값을 콜백하여 해결`

```
  const [handleX, setHandleX] = useState(0);
  const [handleY, setHandleY] = useState(0);

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
  }, [handleX, handleY]); // x, y좌표 콜백
```
