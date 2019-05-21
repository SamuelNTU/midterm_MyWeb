import React, { Component } from "react";
import Contact from "./Home_component/contact";
import { RSG, NTU, NCU, Selfie } from "../assests/images/";
import Top from "./Home_component/Top";
import Experience from "./Home_component/experience";
import ChatModal from "./Home_component/chatmodal";
import SideBar from "./Home_component/sidebar";
// import '../../node_modules/font-awesome5/css/fontawesome.min.css'

class App extends Component {
  state = {
    toggle: "active",
    Nav: [
      { tag: "top", key: 1 },
      { tag: "about", key: 2 },
      { tag: "contact", key: 3 }
    ]
  };
  toggleSidebar = () => {
    if (this.state.toggle !== "") this.setState({ toggle: "" });
    else this.setState({ toggle: "active" });
  };
  render() {
    return (
      // <React.Fragment>
      <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar" className={this.state.toggle}>
          <div className="sidebar-header">
            <strong style={{ position: "relative", left: -13, top: 6 }}>
              SLLY
            </strong>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-home" />
                Home
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#top">Home 1</a>
                </li>

                <li>
                  <a href="#top">Home 2</a>
                </li>

                <li>
                  <a href="#top">Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#top">
                <i className="fas fa-briefcase" />
                About
              </a>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fas fa-copy" />
                Pages
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#top">Page 1</a>
                </li>
                <li>
                  <a href="#top">Page 2</a>
                </li>
                <li>
                  <a href="#top">Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#top">
                <i className="fas fa-image" />
                Portfolio
              </a>
            </li>
            <li>
              <a href="#top">
                <i className="fas fa-question" />
                FAQ
              </a>
            </li>
            <li>
              <a href="#top">
                <i className="fas fa-paper-plane" />
                Contact
              </a>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <a
                href="#top"
                className="download"
              >
                Download source
              </a>
            </li>
            <li>
              <a
                href="#top"
                className="article"
              >
                Back to article
              </a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <SideBar toggleSidebar={this.toggleSidebar} />
          <Top id="top" Selfie={Selfie} name="Samuel" introduction="" />
          <Experience id="#about" RSG={RSG} NTU={NTU} NCU={NCU} />
          <div id="info" style={{ height: 400 }}>
            something to say :
          </div>
        </div>
        <Contact
          id="info"
          link={{
            facebook: "https://www.facebook.com/",
            linkedin: "https://tw.linkedin.com/",
            github: "https://github.com/SamuelNTU"
          }}
        />
        <ChatModal />
      </div>
    );
  }
}

export default App;
