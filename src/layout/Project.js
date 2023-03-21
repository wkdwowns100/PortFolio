import { Link } from "react-router-dom";
import "../assets/style/project.scss";

function Project() {
  const project = [
    {
      id: 1,
      num: "01.",
      title: "easyLoA",
      category: "ToyProject",
      tag1: "react",
      tag2: "local Storage",
      imgURL: "/images/project1.png",
      url: "/project1",
    },
    {
      id: 2,
      num: "02.",
      title: "MetatoyDragonZ",
      category: "Team Project",
      tag1: "javascript",
      tag2: "clone coding",
      imgURL: "/images/project2.png",
      url: "/project2",
    },
    {
      id: 3,
      num: "03.",
      title: "GOTCHA",
      category: "Team Project",
      tag1: "html5",
      tag2: "css3",
      imgURL: "/images/project3.png",
      url: "/project3",
    },
    {
      id: 4,
      num: "04.",
      title: "PortFolio",
      category: "PortFolio",
      tag1: "React",
      tag2: "JSX",
      imgURL: "/images/project4.png",
      url: "https://github.com/wkdwowns100/PortFolio",
    },
  ];

  const path = process.env.PUBLIC_URL;

  return (
    <article className="project" id="project">
      <h1 className="title">What did I do?</h1>
      <div className="projectInner">
        {project.map((item) => (
          <div key={item.id} className={"projectBox project" + item.id}>
            <div className="num">{item.num}</div>
            <div className="projectName">{item.title}</div>
            <div className="img">
              <Link to={item.url}>
                <img src={path + item.imgURL} alt={item.title} />
              </Link>
            </div>
            <div className="category">{item.category}</div>
            <div className="tag">
              <span>{item.tag1}</span>
              <span>{item.tag2}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Project;
