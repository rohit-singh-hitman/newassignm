import React from "react";
export default function Subscribe() {
  return (
    <>
      <section class="newsletter " id="news" style={{ paddingTop: "50px" }}>
        <div class="container headings text-center font-weight-bold">
          <h1>
            SUBSCRIBE <span>Newsletter</span> & Get Company News.
          </h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control news-input"
                  placeholder="Email Address"
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="far fa-check-circle"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
