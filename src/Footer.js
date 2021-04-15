import React from "react";
export default function Footer() {
  return (
    <>
      <footer class="footer-section" id="footerdiv">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <h3>Sign Up For Email</h3>
              <h6>Get the Latest news about acturial science & more</h6>

              <div class="container news-main">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-12">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control newss-input"
                        placeholder="Email"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">Sign Up</span>
                      </div>
                    </div>
                  </div>
                </div>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-linkedin"></i>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12 ">
              <div>
                <h3>
                  MAIL US ON <a href="#">admin@smonk.in</a>
                  <br />
                </h3>
                <h3>Locate Us</h3>
                <h6>3891 Ranchview Dr.Richardson California 62639</h6>
                <h3> We Support</h3>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12 text-center">
              <div>
                <h3>Customer Service</h3>
                <br />
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-12 text-center">
              <div>
                <h3>Who We Are</h3>
                <br />
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
                <h6>Lorem Ipsum</h6>
              </div>
            </div>
          </div>

          <div class="mt-5 text-center">
            <p>Copyright © 2021 All Rights reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
}
