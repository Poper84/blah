import React from "react";
import "./App.css";
import collegeBasketballTeams from "./CollegeBasketballTeams.json";
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}
function Welcome() {
  return <h1>NCAA Basketball March Madness!</h1>;
}

class Band extends React.Component<Team> {
  render() {
    const oneBand = this.props;

    return (
      <div>
        <h2>School Name: {oneBand.school}</h2>
        <h2>Mascot: {oneBand.name}</h2>
        <h2>City: {oneBand.city}</h2>
        <h2>State: {oneBand.state}</h2>
      </div>
    );
  }
}
function Bandlist() {
  return (
    <div>
      {collegeBasketballTeams.teams.map((team: Team) => (
        <Band key={team.school} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Bandlist />
    </div>
  );
}

export default App;
