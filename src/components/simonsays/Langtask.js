import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { database } from "../Config";

export default function Langtask() {
  const [word, setWord] = useState("");
  const [spelling, setSpelling] = useState("");

  const getTask = () => {
    var allTasks = [
      "Misspell",
      "Pharaoh",
      "Intelligence",
      "Pronunciation",
      "Handkerchief",
      "logorrhea",
      "Chiaroscurist",
      "Pochemuchka",
      "Gobbledegook",
    ];
    var idx = Math.floor(Math.random() * allTasks.length);
    setWord(allTasks[idx]);
    var msg = new window.SpeechSynthesisUtterance(`Simon says Spell the word`);
    window.speechSynthesis.speak(msg);
    console.log("sun");
  };

  const spellWord = () => {
    var wordmsg = new window.SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(wordmsg);
    console.log("sone");
  };

  const validateWord = () => {
    if (word.toUpperCase() === spelling.toUpperCase()) {
      alert("Correct Answer!");
      var name = localStorage.getItem("name");
      database
        .ref(`scores/${name}`)
        .once("value")
        .then((snap) => {
          var data = snap.val();
          // console.log(data);
          database
            .ref(`scores/${name}`)
            .set({
              name: name,
              score: data.score + 10,
            })
            .then(() => {
              window.location.href = "/simonsays/common";
            });
        });
    } else {
      alert("Wrong Answer, Please Try again!");
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <center>
        <h1>Simon says spell the word</h1>
      </center>
      <div className="row">
        <div className="col-lg-6">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <p>
              Click on Listen button and listen to the word. Then enter the
              spelling of it in the text box below and click submit
            </p>
          </center>
        </div>
        <div className="col-lg-6">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <button className="btn btn-primary" onClick={spellWord}>
              Listen
            </button>
            <br />
            <br />
            <input
              type="text"
              value={spelling}
              onChange={(e) => {
                setSpelling(e.target.value);
              }}
            />
            <br />
            <br />
            <button className="btn btn-success" onClick={validateWord}>
              Submit
            </button>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
