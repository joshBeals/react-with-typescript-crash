import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";
import { IState } from "./interfaces/User";

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://e0.365dm.com/21/02/768x432/skysports-nba-los-angeles-lakers_5268563.jpg?20210211081745",
      age: 36,
      note: "4x NBA Champion"
    },
    {
      name: "Stephen Curry",
      url: "https://businesspost.ng/wp-content/uploads/2022/03/stephen-curry.jpg",
      age: 34,
      note: "Greatest Shooter Ever!!!"
    }
  ]);

  return (
      <div className="App">
        <h1>People Invited to my Party</h1>
        <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
      </div>
  );
}

export default App;
