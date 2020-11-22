import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { database } from "../Config";

export default function Langtask() {
  const [word, setWord] = useState("");
  const [spelling, setSpelling] = useState("");
  const [speek, setSpeek] = useState(false);
  const [sent, setSent] = useState("");
  const [resultSent, setResultSent] = useState("");
  const [listening, setListening] = useState(false);

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
    var allSentence = [
      "I love my country",
      "Wash your hands regularly",
      "Do not forget to wear a mask",
      "I will do my homework in time",
      "I will eat only healthy food",
      "I will do exercise regularly",
      "Eating junk food is bad for health"
    ]
    var choice = Math.floor(Math.random() * 2);
    if(choice === 0){
      setSpeek(false);
      var wordmsg = new window.SpeechSynthesisUtterance("Simon says spell the word");
      window.speechSynthesis.speak(wordmsg);
      var idx = Math.floor(Math.random() * allTasks.length);
      setWord(allTasks[idx]);
    } else {
      setSpeek(true);
      var speekwordmsg = new window.SpeechSynthesisUtterance("Simon says Read the sentence");
      window.speechSynthesis.speak(speekwordmsg);
      var index = Math.floor(Math.random() * allSentence.length);
      setSent(allSentence[index]);
    }
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

  const handleSpeech = () => {
    var speechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new speechRecognition();

    recog.onstart = () => {
      setListening(true);
    }

    recog.onresult = (e) => {
      const curr = e.resultIndex;
      const trans = e.results[curr][0].transcript;
      setResultSent(trans);
      if(sent.toUpperCase() === trans.toUpperCase()){
        alert("Congrats You earned 10 points");
      } else {
        alert("wrong answer try again");
      }
    }

    recog.start();
    
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <center>
        {!speek && <h1>Simon says spell the word</h1>}
        {speek && <h1>Simon says Read the Sentence</h1>}
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
            {!speek && <p>
              Click on Listen button and listen to the word. Then enter the
              spelling of it in the text box below and click submit
            </p>}
            {speek && <p>
              Click on the speak button and read out the sentence shown below. < br/>
              <p>{sent}</p>
            </p>}
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
            {!speek && <div><button className="btn btn-primary" onClick={spellWord}>
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
            </button></div>}
            {speek && <div>
              <button className="btn btn-primary" onClick={handleSpeech}>Speak</button>
              <br />
              <br />
              {listening && <p>Listening... </p>}
            {resultSent && <p>Your sentence : {resultSent}</p>}
              </div>}
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
