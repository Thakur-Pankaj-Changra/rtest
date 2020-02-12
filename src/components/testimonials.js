import React from "react";

function Testimonials() {
  return (
    <React.Fragment>
      <div class="container pb-5">
        <div class="row">
          <div class="col-md-12 text-center py-5">
            <h2 class="heading-text position-relative mb-4">Testimonials</h2>
          </div>
        </div>
        <div class="row Testimonials my-3 my-lg-5">
          <div class="col-md-12">
            <div id="blogCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#blogCarousel" data-slide-to="1"></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="d-sm-flex">
                        <div class="test-monial">
                          <img class="position-relative testimonialImg" src={require("../images/testimonial1.jpg")}  alt="Image" />
                          <div class="quotes-testimonial text-center">
                            <img class="img-fluid" width="20px" src={require("../images/quote-left.svg")} />
                          </div>
                        </div>
                        <div class="testimonial-detail py-4 pr-4">
                          <h5>Alison Burgas</h5>
                          <h6 class="position-relative">CEO</h6>
                          <ul class="list-unstyled mt-3">
                            <li class="list-inline-item mr-3">
                            <a href="https://www.facebook.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/facebook.svg")}
                              /></a>
                            </li>
                            <li class="list-inline-item mr-3">
                            <a href="https://twitter.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/twitter.svg")}
                              /></a>
                            </li>
                            <li class="list-inline-item mr-3">
                            <a href="https://www.google.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/google-plus.svg")}
                              /></a>
                            </li>
                            <li class="list-inline-item">
                            <a href="https://www.linkedin.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/linkedin-logo.svg")}
                              /></a>
                            </li>
                          </ul>
                          <p class="mb-0">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 mt-5 mt-lg-0">
                      <div class="d-sm-flex">
                        <div class="test-monial">
                          <img class="position-relative testimonialImg" src={require("../images/testimonial2.jpg")}  alt="Image" />
                          <div class="quotes-testimonial text-center">
                            <img class="img-fluid" width="20px" src={require("../images/quote-left.svg")} />
                          </div>
                        </div>
                        <div class="testimonial-detail py-4 pr-4">
                          <h5>Alison Burgas</h5>
                          <h6 class="position-relative">CEO</h6>
                          <ul class="list-unstyled mt-3">
                            <li class="list-inline-item mr-3">
                            <a href="https://www.facebook.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/facebook.svg")}
                              /></a>
                            </li>
                            <li class="list-inline-item mr-3">
                            <a href="https://twitter.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/twitter.svg")}
                              /></a>
                            </li>
                            <li class="list-inline-item mr-3">
                            <a href="https://www.google.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/google-plus.svg")}
                              /></a>
                            </li>
                            <li class="list-inline-item">
                            <a href="https://www.linkedin.com/" target="_blank"><img
                                width="15px"
                                src={require("../images/linkedin-logo.svg")}
                              /></a>
                            </li>
                          </ul>
                          <p class="mb-0">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
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

export default Testimonials;
