import React, { Component } from "react";
import AlbumTrans from "./musiccomponent/albumtrans";
import ChatModal from "./Home_component/chatmodal";

class Music extends Component {
  state = { query: "Armin" };

  render() {
    return (
      <div className="container" id="nav">
        <h2 className="text-center">Spotify Api Flow</h2>
        <div className="container">
          <div className="row">
            <div className="col-12" align="center">
              <p className="text-center bg-info btn text-white">
                Press Login to get access token (this will redirect to
                localhost:8888(bakcend) and
                <br /> send request to spotify server, then recieve access token
                which will last for one hour,
                <br />
                and then redirect to localhost:3000 ), in this example I have
                already type in my <br />
                client_id,client_secret,so you can use api right away{" "}
              </p>
              <div className="row">
                <div className="col-6 text-center">
                  <i className="fa fa-arrow-down" />
                </div>
                <div className="col-6 text-center">
                  <i className="fa fa-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <p className="center-block">
                <span className="btn btn-success btn-lg">Yes</span>
              </p>
              <p className="btn center-block">
                <span className="glyphicon glyphicon-arrow-down" />
              </p>
              <p className="bg-info text-white btn">
                use access token to query tracks
              </p>
              <div className="row">
                <div className="col-6 text-center">
                  <i className="fa fa-arrow-down" />
                </div>
                <div className="col-6 text-center">
                  <i className="fa fa-arrow-down" />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="center-block">
                    <span className="btn btn-success btn-lg">Yes</span>
                  </p>
                  <div>
                    <i className="fa fa-arrow-down" />
                  </div>
                  <p className="bg-success text-white btn">
                    use the submit button
                    <br /> search artist's tracks
                  </p>
                </div>
                <div className="col-6 text-center">
                  <p className="center-block">
                    <span className="btn btn-danger btn-lg">No</span>
                  </p>
                  <div>
                    <i className="fa fa-arrow-down" />
                  </div>
                  <p className="btn bg-danger text-white">
                    access token need to be update
                    <br /> per hour
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <p className="center-block">
                <span className="btn btn-danger btn-lg">No</span>
              </p>
              <p className="btn center-block">
                <span className="glyphicon glyphicon-arrow-down" />
              </p>
              <p className="bg-info text-white btn">
                check client_id and client_secret
              </p>
            </div>
          </div>
        </div>

        <AlbumTrans />

        <h1 className="page-header mt-5">
          Music <small>music is life</small>
        </h1>

        <p>
          I love the power of music, it can bring you to another level of
          feeling. <mark>SLLY</mark>
        </p>
        <hr />

        <blockquote className="blockquote">
          <p className="font-dark">The state of music</p>
          <small>
            It's not love for music, it's a passion, and it goes beyond liking,
            and beyond a hobby, it's about a way of living . . . music is
            essential of my life
          </small>
          <footer className="blockquote-footer">
            Quote by <cite title="Samuel">Armin van burren</cite>
          </footer>
        </blockquote>

        <blockquote className="blockquote">
          <small>
            One day you will leave this world behind, so live alife you will
            remember
          </small>{" "}
          <footer className="blockquote-footer">
            Quote by <cite title="Samuel">Avicii (RIP)</cite>
          </footer>
        </blockquote>
        <blockquote className="blockquote">
          <small>I can't live a day without dance music</small>{" "}
          <footer className="blockquote-footer">
            Quote by <cite title="Samuel">Hardwell</cite>
          </footer>
        </blockquote>

        <ChatModal />
        <hr />
        <div className="row mb-5">
          <h2 className="col-auto">external link</h2>
          <button className="btn btn-light btn-outline-dark">
            <a href="https://soundcloud.com/revolution-mus">
              <i
                style={{ color: "orange", fontSize: 30 }}
                className="pt-1 fab fa-soundcloud"
              />
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Music;
