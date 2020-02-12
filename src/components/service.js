import React, { Component } from "react";

class Service extends Component {
  constructor() {
    super();
    this.state = {
        plumbing: "",
        electricity: "",
        decoration: "",
        furniture: "",
        architecture: "",
        color: ""
    }
  }

  handlChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick = (e) => {
      e.preventDefault();
      var getId = document.getElementsByClassName('active')[0].id;
      var oldActive  = document.getElementById(getId);
      oldActive.classList.remove("active");

      var getDivId = getId.replace('-tab','');

      (document.getElementById(getDivId)).classList.remove("active");
      (document.getElementById(getDivId)).classList.remove("show");

      var element = document.getElementById(e.target.id);
      var getNewDivId = (e.target.id).replace('-tab','');
      var divElement = document.getElementById(getNewDivId);
      divElement.classList.add('active');
      divElement.classList.add('show');
      element.classList.add("active");

    }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading-text position-relative mb-4 text-center">
                Services
              </h2>
            </div>
          </div>
          <div className="row  my-3 py-3 themeNavTab">
            <div className="col-lg-2 pr-0">
              <ul className="nav nav-pills flex-column" id="myTab" role="tablist">
                <li className="nav-item mb-0 mb-lg-1">
                  {" "}
                  <a
                    className="nav-link py-lg-4 py-2 text-white"
                    id="plum-tab"
                    data-toggle="tab"
                    href="#plum"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    name="plumbing"
                    onChange={e=>this.handlChange(e)}
                    onClick={e=>this.handleClick(e)}
                  >
                    Plumbing
                  </a>
                </li>
                <li className="nav-item mb-0 mb-lg-1">
                  {" "}
                  <a
                    className="nav-link py-lg-4 py-2 text-white"
                    id="elec-tab"
                    data-toggle="tab"
                    href="#elec"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    name="electricity"
                    onChange={e=>this.handlChange(e)}
                    onClick={e=>this.handleClick(e)}
                  >
                    Electricity
                  </a>
                </li>
                <li className="nav-item mb-0 mb-lg-1">
                  {" "}
                  <a
                    className="nav-link py-lg-4 py-2 text-white"
                    id="decor-tab"
                    data-toggle="tab"
                    href="#decor"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    name="decoration"
                    onChange={e=>this.handlChange(e)}
                    onClick={e=>this.handleClick(e)}
                  >
                    Decoration
                  </a>
                </li>
                <li className="nav-item mb-0 mb-lg-1">
                  {" "}
                  <a
                    className="nav-link py-lg-4 py-2 text-white"
                    id="furni-tab"
                    data-toggle="tab"
                    href="#furni"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    name="furniture"
                    onChange={e=>this.handlChange(e)}
                    onClick={e=>this.handleClick(e)}
                  >
                    Furniture
                  </a>
                </li>
                <li className="nav-item mb-0 mb-lg-1">
                  {" "}
                  <a
                    className="nav-link py-lg-4 py-2 text-white  active"
                    id="archi-tab"
                    data-toggle="tab"
                    href="#archi"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    name="architecture"
                    onChange={e=>this.handlChange(e)}
                    onClick={e=>this.handleClick(e)}
                  >
                    Architecture
                  </a>
                </li>
                <li className="nav-item mb-0 mb-lg-1">
                  {" "}
                  <a
                    className="nav-link py-lg-4 py-2 text-white"
                    id="color-tab"
                    data-toggle="tab"
                    href="#color"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                    name="color"
                    onChange={e=>this.handlChange(e)}
                    onClick={e=>this.handleClick(e)}
                  >
                    Color
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-10 pl-0 theme-tab">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade "
                  id="plum"
                  role="tabpanel"
                  aria-labelledby="plum-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-7 ">
                      <h5 className="font-weight-bold">
                        1)Where does it come from?
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <ul className="mb-0">
                        <li>In ac justo in sem auctor malesuada.</li>
                        <li>Curabitur pharetra ex vitae nisl cursus luctus.</li>
                        <li>
                          Mauris ut urna ullamcorper, luctus nisi a, mattis
                          enim.
                        </li>
                        <li>
                          Integer porttitor eros lacinia ligula, nec aliquam mi
                          volutpat.
                        </li>
                        <li>Praesent tempus felis nec cursus mattis.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>Duis congue ligula id pharetra lobortis.</li>
                        <li>
                          Etiam ac elit vel augue suscipit placerat a a lectus.
                        </li>
                        <li>In finibus neque at dolor dignissim dictum.</li>
                        <li>Mauris cursus odio in dictum ornare.</li>
                      </ul>
                    </div>
                    <div className="col-md-5  p-0 text-center mt-lg-0 mt-4">
                      <img
                        className="img-fluid"
                        src={require("../images/archi.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="elec"
                  role="tabpanel"
                  aria-labelledby="elec-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-7">
                      <h5 className="font-weight-bold">
                        2) Where does it come from?
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <ul className="mb-0">
                        <li>In ac justo in sem auctor malesuada.</li>
                        <li>Curabitur pharetra ex vitae nisl cursus luctus.</li>
                        <li>
                          Mauris ut urna ullamcorper, luctus nisi a, mattis
                          enim.
                        </li>
                        <li>
                          Integer porttitor eros lacinia ligula, nec aliquam mi
                          volutpat.
                        </li>
                        <li>Praesent tempus felis nec cursus mattis.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>Duis congue ligula id pharetra lobortis.</li>
                        <li>
                          Etiam ac elit vel augue suscipit placerat a a lectus.
                        </li>
                        <li>In finibus neque at dolor dignissim dictum.</li>
                        <li>Mauris cursus odio in dictum ornare.</li>
                      </ul>
                    </div>
                    <div className="col-md-5  p-0 text-center mt-lg-0 mt-4">
                      <img
                        className="img-fluid"
                        src={require("../images/archi.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="decor"
                  role="tabpanel"
                  aria-labelledby="decor-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-7">
                      <h5 className="font-weight-bold">
                        3) Where does it come from?
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <ul className="mb-0">
                        <li>In ac justo in sem auctor malesuada.</li>
                        <li>Curabitur pharetra ex vitae nisl cursus luctus.</li>
                        <li>
                          Mauris ut urna ullamcorper, luctus nisi a, mattis
                          enim.
                        </li>
                        <li>
                          Integer porttitor eros lacinia ligula, nec aliquam mi
                          volutpat.
                        </li>
                        <li>Praesent tempus felis nec cursus mattis.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>Duis congue ligula id pharetra lobortis.</li>
                        <li>
                          Etiam ac elit vel augue suscipit placerat a a lectus.
                        </li>
                        <li>In finibus neque at dolor dignissim dictum.</li>
                        <li>Mauris cursus odio in dictum ornare.</li>
                      </ul>
                    </div>
                    <div className="col-md-5  p-0 text-center mt-lg-0 mt-4">
                      <img
                        className="img-fluid"
                        src={require("../images/archi.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="furni"
                  role="tabpanel"
                  aria-labelledby="furni-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-7">
                      <h5 className="font-weight-bold">
                        4) Where does it come from?
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <ul className="mb-0">
                        <li>In ac justo in sem auctor malesuada.</li>
                        <li>Curabitur pharetra ex vitae nisl cursus luctus.</li>
                        <li>
                          Mauris ut urna ullamcorper, luctus nisi a, mattis
                          enim.
                        </li>
                        <li>
                          Integer porttitor eros lacinia ligula, nec aliquam mi
                          volutpat.
                        </li>
                        <li>Praesent tempus felis nec cursus mattis.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>Duis congue ligula id pharetra lobortis.</li>
                        <li>
                          Etiam ac elit vel augue suscipit placerat a a lectus.
                        </li>
                        <li>In finibus neque at dolor dignissim dictum.</li>
                        <li>Mauris cursus odio in dictum ornare.</li>
                      </ul>
                    </div>
                    <div className="col-md-5  p-0 text-center mt-lg-0 mt-4">
                      <img
                        className="img-fluid"
                        src={require("../images/archi.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="archi"
                  role="tabpanel"
                  aria-labelledby="archi-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-7">
                      <h5 className="font-weight-bold">Where does it come from?</h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <ul className="mb-0">
                        <li>In ac justo in sem auctor malesuada.</li>
                        <li>Curabitur pharetra ex vitae nisl cursus luctus.</li>
                        <li>
                          Mauris ut urna ullamcorper, luctus nisi a, mattis
                          enim.
                        </li>
                        <li>
                          Integer porttitor eros lacinia ligula, nec aliquam mi
                          volutpat.
                        </li>
                        <li>Praesent tempus felis nec cursus mattis.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>Duis congue ligula id pharetra lobortis.</li>
                        <li>
                          Etiam ac elit vel augue suscipit placerat a a lectus.
                        </li>
                        <li>In finibus neque at dolor dignissim dictum.</li>
                        <li>Mauris cursus odio in dictum ornare.</li>
                      </ul>
                    </div>
                    <div className="col-md-5  p-0 text-center mt-lg-0 mt-4">
                      <img
                        className="img-fluid"
                        src={require("../images/archi.jpg")}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="color"
                  role="tabpanel"
                  aria-labelledby="color-tab"
                >
                  <div className="row p-4">
                    <div className="col-md-7">
                      <h5 className="font-weight-bold">
                        6) Where does it come from?
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <ul className="mb-0">
                        <li>In ac justo in sem auctor malesuada.</li>
                        <li>Curabitur pharetra ex vitae nisl cursus luctus.</li>
                        <li>
                          Mauris ut urna ullamcorper, luctus nisi a, mattis
                          enim.
                        </li>
                        <li>
                          Integer porttitor eros lacinia ligula, nec aliquam mi
                          volutpat.
                        </li>
                        <li>Praesent tempus felis nec cursus mattis.</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </li>
                        <li>Duis congue ligula id pharetra lobortis.</li>
                        <li>
                          Etiam ac elit vel augue suscipit placerat a a lectus.
                        </li>
                        <li>In finibus neque at dolor dignissim dictum.</li>
                        <li>Mauris cursus odio in dictum ornare.</li>
                      </ul>
                    </div>
                    <div className="col-md-5  p-0 text-center mt-lg-0 mt-4">
                      <img
                        className="img-fluid"
                        src={require("../images/archi.jpg")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Service;
