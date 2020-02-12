import React from "react";

function Project() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center py-4">
            <h2 className="heading-text position-relative mb-4">Projects</h2>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <img className="projectImg" src={require("../images/1.jpg")} />
            <img className="projectImg" src={require("../images/2.jpg")} />
            <img className="projectImg" src={require("../images/3.jpg")} />
            <img className="projectImg" src={require("../images/4.jpg")} />
            <img className="projectImg" src={require("../images/5.jpg")} />
            <img className="projectImg" src={require("../images/8.jpg")} />
            <img className="projectImg" src={require("../images/7.jpg")} />
            <img className="projectImg" src={require("../images/8.jpg")} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <button className="project-view-more-button btn btn-outline-dark py-2 px-5 my-4">
              View More
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
