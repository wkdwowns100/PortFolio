import "../assets/style/project.scss";

function Project() {
  const project = [
    {
      id: 1,
      num: "01.",
      title: "MetatoyDragonz",
      category: "team Project",
      tag1: "javascript",
      tag2: "clone coding",
      imgURL: "",
      url: "",
    },
    {
      id: 2,
      num: "02.",
      title: "project2",
      category: "Publishing",
      tag1: "html5&css3",
      tag2: "redesign",
      imgURL: "",
      url: "",
    },
    {
      id: 3,
      num: "03.",
      title: "project3",
      category: "Clone Coding",
      tag1: "react",
      tag2: "swipe",
      imgURL: "",
      url: "",
    },
    {
      id: 4,
      num: "04.",
      title: "project4",
      category: "Redesign",
      tag1: "graphic",
      tag2: "prototype",
      imgURL: "",
      url: "",
    },
  ];
  return (
    <article className="project" id="project">
      <h1 className="title">What did I do?</h1>
      <div className="projectInner">
        {project.map((item) => (
          <div key={item.id} className={"projectBox project" + item.id}>
            <div className="num">{item.num}</div>
            <div className="projectName">{item.title}</div>
            <div className="img">
              <a href={item.url}>
                <img src={item.imgURL} alt={item.title} />
              </a>
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