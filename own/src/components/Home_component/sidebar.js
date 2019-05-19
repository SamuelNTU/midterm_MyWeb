import React from 'react'

const SideBar=(props)=>{
    return  (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                onClick={props.toggleSidebar}
                className="btn btn-info"
              >
                <i className="fas fa-align-left" />
                <span>Toggle Sidebar</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-align-justify" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#top">
                      top
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#info">
                      info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}
export default SideBar;
