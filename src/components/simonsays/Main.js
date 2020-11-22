import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { database } from "../Config";

export default function Main() {
  const storeName = () => {
    if (localStorage.getItem("name") === null) {
      var name = prompt("Enter name");
      database
        .ref(`scores/${name}`)
        .set({
          name: name,
          score: 0,
        })
        .then(() => {
            localStorage.setItem("name", name)
          window.location.href = "/simonsays/common";
        });
    } else {
        window.location.href = "/simonsays/common"
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <center>
            <br />
          <h1>Simon Says</h1>
          <h3>About the Game</h3>
          <p>
            Simon Says is a game where you will be asked to perform a given task and
            later scored on it. Let's see how far you can climb up on the Leaderboard. 
          </p>
          <h3>Instructions :</h3>
        </center>
        <div className="container">
        <div className="container">
        <ul>
          <li>A random task will be shown.</li>
          <li>Perform the task and be quick.</li>
          <li>You will be scored on you performance. Be sure to keep a check on the timer.</li>
          <li>
            Children can view all the scores of there friends on the Leaderboard.
          </li>
        </ul>
        </div>
        </div>
        <center>
          <button className="btn btn-success" onClick={storeName}>
            Play
          </button>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
