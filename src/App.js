import React, { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import TeamList from "./components/Members";

function App() {

  const [members, setMembers] = useState([
    {
      id: 0,
      name: "Jared S.",
      role: "UI Designer",
      email: "jareds89@gmail.com",
    }
  ]);

  const addNewMember = newMember => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addNewMember={addNewMember} />
      <TeamList member={members} />
    </div>
  );
}

export default App;
