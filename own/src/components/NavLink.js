import React from 'react';
import { SLLY } from "../assests/images/";



class Navigation extends React.Component {
render(){
  return (
    <React.Fragment>
      {console.log(this.props)}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
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
                
                  <a className="dropdown-item" href="/previouspractice/flappybird">
                    Flappy Bird
                  </a>
                
                  <a className="dropdown-item" href="/previouspractice/todolist">
                    Todo List
                  </a>
                  <a className="dropdown-item" href="/previouspractice/imageviewer">
                    Image Viewer
                  </a>
                {/* <div className="dropdown-divider" /> */}
              </div>
            </li>
            
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">
                  Contact
                </a>
              </li>
            
            
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="/music"
                  tabIndex="-1"
                  // aria-disabled="true"
                >
                  Music
                </a>
              </li>
            
          </ul>
          {/* <form className="form-inline my-2 ml-0">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </div>
        <i className="fa fa-github-square" />
        {/* <i className="fa-tachometer fa" style={{fontSize:50}} /> */}
      </nav>
    </React.Fragment>
  );
}};
export default Navigation;
