import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
<<<<<<< HEAD
import Playground from "../Playground";
import App from '../memorygame/App';
=======
import { database } from "../Config";
>>>>>>> 4fb5799c3b4f68723162d183c538fb6acb5ac723


export default function Memorytask() {

    // var handleEndGame = (boolean) => {
    //     // if (boolean) {
    //     //   this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    //     // } else {
    //     //   this.setState({ showEndGame: boolean });
    //     // }
    //     console.log("Hello");
    //   };
    return (
        <>
<<<<<<< HEAD
        <Navbar />
          <App />
=======
          <Navbar />
          <br />
          <center>
            <h1>Simon says play the tile game!</h1>
          </center>
          <br />
          <br />
          {/* <Game /> */}
          <br />
          <br />
          <br />
>>>>>>> 4fb5799c3b4f68723162d183c538fb6acb5ac723
          <Footer />
        </>
      );
}