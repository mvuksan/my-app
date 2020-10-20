import React from "react";
import IconBox from "../../component/iconBox";
import SubscribersUtilization from "../../component/subscribersUtilization";

function Subscribers() {
  return (
    <div className="ui-top-content">
      <div className="ui-top-boxes">
        <IconBox />
        <IconBox />
        <IconBox />
      </div>
      <div className="ui-center-content">
        <SubscribersUtilization />
      </div>
    </div>
  );
}

export default Subscribers;
