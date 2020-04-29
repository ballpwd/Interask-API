import React from "react";
import OrganizerPresentItem from "./OrganizerPresentItem";

const OrganizerPresentList = ({ askList }) => {
  return (
    <div className="pt-3 px-4">
      <h4 className="org-h4"> Question</h4>
      <hr />
      {Array.isArray(askList)}
      {askList.map((ask) => (
        <OrganizerPresentItem key={ask._id} ask={ask} />
      ))}
    </div>
  );
};

export default OrganizerPresentList;
