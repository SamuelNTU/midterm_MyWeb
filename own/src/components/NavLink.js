import React from "react";
import { SLLY } from "../assests/images/";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        {console.log(this.props)}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href={SLLY}>
            <img src={SLLY} width="70" height="50" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav bg-dark">
              <li className="nav-item">
                <a
                  className="nav-link text-white text-white"
                  data-toogle="tooltip"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className=" nav-link dropdown-toggle text-white"
                  data-toggle="dropdown"
                  role="button"
                  href="#1"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  previous practice
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="/previouspractice/flappybird"
                  >
                    <i class="fas fa-times mr-3" />
                    Flappy Bird
                  </a>

                  <a
                    className="dropdown-item"
                    href="/previouspractice/todolist"
                  >
                    <i class="fas fa-times mr-3" />
                    Todo List
                  </a>
                  <a
                    className="dropdown-item"
                    href="/previouspractice/imageviewer"
                  >
                    <i class="fas fa-check mr-2" style={{ width: 11 }} /> Image
                    Viewer
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/music" tabIndex="-1">
                  Music
                </a>
              </li>
            </ul>
          </div>
          <i className="fa fa-github-square" />
        </nav>
      </React.Fragment>
    );
  }
}
export default Navigation;
