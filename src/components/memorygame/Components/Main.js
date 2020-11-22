import React from "react";
import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";
import { database } from "../../Config"

class Main extends React.Component {
  state = {
    showLogin: false,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    // if (boolean) {
    //   this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    // } else {
    //   this.setState({ showEndGame: boolean });
    // }
    if(boolean) {
      
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
              alert("Well done that was fast!");
              window.location.href = "/simonsays/common";
            });
        });
    } 
    else {
      alert("Wrong Answer, Please Try again!");
    }
  };
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Main;
