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
            Simon Says is a game where in children are given a random task and
            children perform the task
          </p>
          <h3>How to play!!</h3>
        </center>
        <ul>
          <li>Children are shown by a random task</li>
          <li>Children should first watch the video on how to do it</li>
          <li>Then they need to perform the task</li>
          <li>Camera will be monitoring the task performed</li>
          <li>Based on the performance children will be assigned score</li>
          <li>
            Children can view all the scores of there friends on the Leaderboard
          </li>
        </ul>
        <center>
          <button className="btn btn-success" onClick={storeName}>
            Play the Game
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
