import React from "react";

function Banner() {
  return (
    <React.Fragment>
      <div className="container-fluid banner">
        <div className="row h-100">
          <div className="col-md-12 h-100 px-0">
            <img
              className="img-fluid main-bg-img"
              src={require("../images/main-bg.jpg")}
            />
            <div className="h-100 text-white position-absolute mainBg">
              <h2 className="font-roboto font-weight-normal">
                Stable, Strong, Safe
              </h2>
              <h6 className="banner-text">
                Proin vel ex vitae urna faucibus tristique.
              </h6>
              <button className="banner-button-learn-more btn btn-outline-dark py-sm-2 py-1 px-3 px-sm-5 my-1 my-sm-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container welcome">
        <div className="row">
          <div className="col-md-12 text-center py-xs-5 py-2">
            <h2 className="heading-text position-relative mb-4">
              Welcome To PS Building Contractors LTD
            </h2>
            <p className="mt-4 pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center py-xs-4 py-2">
            <div className="service p-4">
              <img className="mb-3" src={require("../images/service1.png")} />
              <h6 className="text-uppercase">Lorem Ipsum</h6>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center py-xs-4 py-3">
            <div className="service p-4">
              <img className="mb-3" src={require("../images/service2.png")} />
              <h6 className="text-uppercase">Lorem Ipsum</h6>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center py-xs-4 py-3">
            <div className="service p-4">
              <img className="mb-3" src={require("../images/service3.png")} />
              <h6 className="text-uppercase">Lorem Ipsum</h6>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center py-xs-4 py-3">
            <div className="service p-4">
              <img className="mb-3" src={require("../images/service4.png")} />
              <h6 className="text-uppercase">Lorem Ipsum</h6>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
