import Chat from "../../chatRoom/Chat";
import React from "react";
const ChatModal = () => {
  return (
    <React.Fragment>
      <i
        className="fa fa-address-book"
        id="chat_nav"
        data-toggle="modal"
        data-target="#myModal"
      />
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                Chat Chat <p style={{fontSize:15}}>(save history will save the chat another schema of my mongodb, and clear the render Schema)</p>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Chat />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" id="save_history" className="btn btn-primary">
                Save history
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ChatModal;
