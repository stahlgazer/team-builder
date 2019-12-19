import React from "react";

const TeamList = props => {
  return (
    <div className="team-list">
      {props.member.map(member => (
        <div className="team" key={member.name}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
