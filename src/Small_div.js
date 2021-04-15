import React from "react";
export default function Small_div() {
  return (
    <>
      <div class="container-fluid sss">
        <div class="row">
          <div class="col-md-10 col-12 mx-auto  small_div">
            <div class="row">
              <div class="col-md-2 col-5 d-flex  ">
                <div class="briefcase">
                  <i class="fas fa-briefcase"></i>
                </div>
                <div class="d-flex flex-column">
                  <h3>1,77,877</h3>
                  <p>Job Opportunity</p>
                </div>
              </div>

              <div class=" col-md-2 col-5 d-flex">
                <div class="company">
                  <i class="fas fa-building"></i>
                </div>
                <div class="d-flex flex-column">
                  <h3>5,787</h3>
                  <p>Company</p>
                </div>
              </div>
              <div class="col-md-3 col-4">
                <input
                  type="password"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  placeholder="Job Title, Keywords or Company "
                />
              </div>

              <div class=" col-md-3 col-4">
                <input
                  type="password"
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  placeholder="City,Zip Code"
                />
              </div>

              <div class=" col-md-2 col-4 d-flex justify-content-end">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
