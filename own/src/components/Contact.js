import React, { Component } from 'react';



class Contact extends Component {
  state = {
    info: [
      { info: "Samuel", url: "https://petbird.tw/article15392.html", key: 1 },
      { info: "github", url: "https://github.com/", key: 2 },
      {
        info: "soudcloud",
        url: "https://soundcloud.com/revolution-mus",
        key: 3
      }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.info.map(tag => (
          <li key={tag.key}>
            {" "}
            {tag.info} : {tag.url}{" "}
          </li>
        ))}
      </ul>
    );
  }
}
export default Contact;
