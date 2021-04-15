import React from "react";

export default function Navbar() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 mx-md-auto">
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand" href="#">
                <img
                  src="https://listimg.pinclipart.com/picdir/s/54-542574_how-to-draw-buddha-draw-buddha-clipart.png"
                  alt=""
                  width="30"
                  height="24"
                  class="d-inline-block align-text-top"
                />
                Job <span>portal</span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <i class="fas fa-bars"></i>
                </span>
                MENU
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Find jobs <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Company Reviews
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      Find Salaries
                    </a>
                  </li>
                </ul>
                <div class="d-flex iconPack align-items-center">
                  <i class="fas fa-comment-alt"></i>
                  <i class="fas fa-bell"></i>
                  <i class="fas fa-user-alt"></i>
                  <div class="line">|</div>
                  <ul>
                    <li style={{ listStyle: "none", marginTop: "7px" }}>
                      <a>Employees/Post Job</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
