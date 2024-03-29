import React from "react";

function ApprovalCard(props) {
  return (
    <div style={{ marginTop: "5px" }}>
      <div className="ui card centered">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
