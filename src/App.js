import React, { useState } from "react";
import Form from "./components/Form";
import "./index.css";
import Members from "./components/Members";

function App() {

  const [member, setMember] = useState([
    {
      id: 0,
      name: "Jared S.",
      role: "UI Designer",
      email: "jareds89@gmail.com"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addNewMember={addNewMember} />
      <Members member={member} />
    </div>
  );
}

export default App;
