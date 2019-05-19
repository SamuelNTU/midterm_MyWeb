import React, { Component } from "react";
import $ from "jquery";

const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi();
var posX;

var tmp = true;
var that_state;
var trackcount;

class AlbumTrans extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(token);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: "Not Checked", albumArt: "" },
      tracks: [],
      current_track: 0
    };
  }
  getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };
  getArtistAlbum = () => {
    var artist = document.getElementById("get-artist-track").value;

    var that = this;
    spotifyApi.searchTracks("artist:" + artist, { limit: 10, offset: 0 }).then(
      function(data) {
        console.log("Artist albums", data.body.tracks);
        that.setState({ tracks: data.body.tracks.items });
      },
      function(err) {
        console.error(err);
      }
    );
    setTimeout(() => {
      console.log(this.state.tracks[0])
      if(this.state.tracks[0]!== undefined){
      //   console.log(this.state.tracks)
      document.getElementById("track-current").innerHTML =
        this.state.tracks[this.state.current_track].name +
        "<br/>" +
        this.state.tracks[this.state.current_track].artists[0].name;
      document.getElementById("track-source").src = this.state.tracks[
        this.state.current_track
      ].preview_url;
      document.getElementById("track-audio").load();
      document.getElementById("track-audio").play();
      document.getElementById("track-link").href = this.state.tracks[
        this.state.current_track
      ].external_urls.spotify;
      //   this.refs.audio.load()
      //   document.getElementById("track-audio").audio.load()
    }
    }, 500);
    //   document.getElementById("track-audio").src=this.state.tracks[1].preview_url
  };

  //jquery handle eventlistener
  componentDidMount() {
    that_state = this;
    $(document).ready(function() {
      $("div.docs-container").mousemove(function(e) {
        // console.log()
        posX = e.originalEvent.offsetX;
      });
    });

    $(function() {
      $("#gettrack").on("click", function() {
        setTimeout(() => {
          trackcount = $("div.menu-container").find("img").length;

          if (tmp) {
            $("div.menu-container")
              .find("img")
              .each(function(i, j) {
                console.log(j);

                j.style.transform =
                  "rotateY(" +
                  (360 / trackcount) * i +
                  "deg) translateZ(230px)";
                tmp = false;
              });

            //   document.getElementById("track-audio").src=this.state.tracks
          }
        }, 500);
      });
    });

    $(function() {
      $("div.menu-container").on("click", function() {
        var detectwidth = $("div.menu-container").width();
        var current = that_state.state.current_track

        console.log(posX, detectwidth / 2);
        if (posX < detectwidth / 2) {
          if (that_state.state.current_track === 0) {
            current = 9;
          } else {
            current = that_state.state.current_track - 1;
          }
          $(this)
            .find("img")
            .each(function(i, j) {
              var angle = parseInt(
                j.style.transform.split("(")[1].split("deg")[0]
              );
              console.log(j.style.transform.split("(")[1].split("deg")[0]);
              console.log("左邊", i, j, angle);
              angle = angle + 360 / trackcount;
              j.style.transform = "rotateY(" + angle + "deg) translateZ(230px)";
              return j;
            });
        } else {
          if (that_state.state.current_track === 9) {
            current = 0;
          } else {
            current = that_state.state.current_track + 1;
          }
          $(this)
            .find("img")
            .each(function(i, j) {
              console.log(j.style);
              var angle = parseInt(
                j.style.transform.split("(")[1].split("deg")[0]
              );
              console.log(j.style.transform.split("(")[1].split("deg")[0]);
              console.log("右邊", i, j, angle);
              console.log(this);
              angle = angle - 360 / trackcount;
              j.style.transform = "rotateY(" + angle + "deg) translateZ(230px)";
              return j;
            });
        }

        document.getElementById("track-current").innerHTML =
          that_state.state.tracks[current].name +
          "</br>" +
          that_state.state.tracks[current].artists[0].name;
        document.getElementById("track-source").src =
          that_state.state.tracks[current].preview_url;
        document.getElementById("track-audio").load();
        document.getElementById("track-audio").play();
        document.getElementById("track-link").href =
          that_state.state.tracks[current].external_urls.spotify;
        that_state.setState({ current_track: current });
      });
    });
  }

  render() {
    return (
      <div>
        <img
          className="img-fluid rounded float-left"
          style={{ width: 200 }}
          alt=""
          src="https://developer.spotify.com/assets/branding-guidelines/logo@2x.png"
        />
        {console.log(this.state.tracks)}

        <div className="container docs-container gradient-img img-thumbnail pt-0 pb-3 mb-5">
          <h3 className="disply-1 text-white offset-4">now playing~</h3>
          <p id="track-current" className="text-justify offset-4">
            what
          </p>
          <div className="menu-container ima mt-5 pt-5" id="imagecontainer">
            {this.state.tracks.map((e, index) => {
              return (
                <img
                  id={`item-${index}`}
                  key={index}
                  className="img-fluid mx-auto"
                  alt=""
                  src={e.album.images[0].url}
                />
              );
            })}
          </div>
          <div style={{ height: 100 }} />
          <div className="container">
            <audio className="mt-5" id="track-audio" controls>
              <source id="track-source" ref="" type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
            <a href="#top" alt="" id="track-link" className="float-right">
              source
            </a>
          </div>
        </div>
        <strong className="mt-4 text-dark">
          currently using my client_id client_secret
        </strong>
        <br />
        <a
          className="btn btn-light btn-outline-dark"
          href="http://localhost:8888"
        >
          login
        </a>

        <div className="row container mt-3">
          <input
            type="text"
            id="get-artist-track"
            placeholder="search artist,ex: hardwell"
            className="form-control col-5 mr-2"
          />
          <button
            className="btn btn-default btn-outline-dark col-auto"
            style={{ left: 0 }}
            id="gettrack"
            onClick={this.getArtistAlbum}
          >
            get Album
          </button>
        </div>
      </div>
    );
  }
}
export default AlbumTrans;
