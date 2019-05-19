import React from "react";

const Exper = props => {
  return (
    <div className="col-4">
      <section className="p-2 box" style={{ height: 400 }}>
        <img alt="" style={{ maxWidth: "100%", height: 200 }} src={props.img} />

        <h3 className="text-center mt-2">{props.topic}</h3>
        <p style={{ fontSize: 16 }}>{props.pattern}</p>
      </section>
    </div>
  );
};

const Experience = props => {
  const pattern = [
    "Studying in National Center Univesity Department of mechanical engineering  From 2014 to 2018",
    "Studying in National Taiwan Univesity, Department of Biomechanical engineering From 2018 to now",
    "A database create by c4Lab, which can query the regulatory of gene function. Regulartory such as transcription enhancer promoter are included"
  ];
  return (
    <div
      id="about"
      className="jumbotron m-2"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="font-weight-bolder text-center mb-5">
        Background and Experiences
      </h2>
      <div className="row">
        <Exper img={props.NCU} topic="Education" pattern={pattern[0]} />
        <Exper img={props.NTU} topic="Education" pattern={pattern[1]} />
        <Exper img={props.RSG} topic="RSG Project" pattern={pattern[2]} />
      </div>
      <hr className="my-4" />
      <div className="row">
        <p className="col-auto">this is a briefly intro of my experience</p>
        <a className="btn btn-primary col-auto" href="#top" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};
export default Experience;
