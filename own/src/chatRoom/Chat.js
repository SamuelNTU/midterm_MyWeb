import React, { Component } from "react";
const io = require("socket.io-client/dist/socket.io");

const element = id => {
  return document.getElementById(id);
};

class Chat extends Component {  
  state = {
    chatRoomName: "",
    user: "",
    message: ""
  };
  componentDidMount() {
    const status = element("status");
    const save_messages=element('save_history')
    const messages = element("messages");
    const textarea = element("textarea");
    const username = element("username");
    const clearBtn = element("clear");

    username.focus();

    // Setting default status
    let statusDefault = status.textContent;

    const setStatus = s => {
      // Setting status
      status.textContent = s;

      // Resetting status to default every x seconds
      if (s !== statusDefault) {
        setTimeout(() => {
          setStatus(statusDefault);
        }, 2000);
      }
    };

    // Connecting to socket.io
    const socket = io.connect("http://localhost:5000");

    // Checking for connection
    if (socket !== undefined) {
      console.log("Connected to sockets!");

      const updateList = data => {
        for (let x = 0; x < data.length; x++) {
          // Building out message div
          const message = document.createElement("div");
          message.setAttribute("class", "chat-message");
          message.textContent = data[x].name + ": " + data[x].body;
          messages.appendChild(message);
          //            messages.insertBefore(message, messages.firstChild)
        }
      };

      const clearList = () => {
        messages.textContent = "";
        username.value = "";
        username.focus();
      };

      // Handling initialization
      socket.on("init", data => {
        if (data.length && messages.childNodes.length === 0) updateList(data);
      });

      // Handling Output
      socket.on("output", data => {
        if (data.length) updateList(data);
      });

      // Getting Status From Server
      socket.on("status", data => {
        setStatus(typeof data === "object" ? data.message : data);

        // If status is clear, clear text
        if (data.clear) {
          textarea.value = "";
        }
      });

      // Handle Input
      textarea.addEventListener("keydown", event => {
        if (event.which === 13 && event.shiftKey === false) {
          // Emit to server input
          socket.emit("input", {
            name: username.value,
            body: textarea.value
          });

          event.preventDefault();
        }
      });
      
      save_messages.addEventListener('click',()=>{
        clearList();
        socket.emit('save')
      })

      // Handle Chat Clear
      clearBtn.addEventListener("click", () => {
        clearList();
        socket.emit("clear");
      });

      // Clear Message
      socket.on("cleared", () => {
        clearList();
      });
    }
  }
  handleUserChat = () => {
    const message = document.getElementById("textarea");
    const user = element("text");
    this.setState = { user, message };
  };
  render() {
    return (
      // style={{position:'fixed',height:"100%",top:0,left:0,backgroundColor:'gray',opacity:0.5}}
      <div className="container col-10">
        <div className="row">
          {/* <div className="col-md-6 offset-md-3 col-sm-12"> */}
          <button id="clear" className="btn btn-danger col-2 mb-2">
            Clear
          </button>
          <div id="chat" style={{ overflowY: "auto" }} className="col-12 p-0">
            <div className="card">
              <div
                id="messages"
                className="card-body"
                style={{
                  position: "relative",
                  overflowY: "auto",
                  maxHeight: "15rem"
                }}
              />
            </div>
            <br />
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter name..."
            />
            <br />
            <textarea
              id="textarea"
              className="form-control"
              placeholder="Enter message..."
            />
          </div>
          <div id="status" />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Chat;
