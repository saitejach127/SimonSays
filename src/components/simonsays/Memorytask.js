import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { database } from "../Config";
import Playground from "../Playground";


export default function Memorytask() {

    var handleEndGame = (boolean) => {
        // if (boolean) {
        //   this.setState({ showEndGame: boolean, score: this.state.score + 1 });
        // } else {
        //   this.setState({ showEndGame: boolean });
        // }
        console.log("Hello");
      };
    return (
        <>
          <Navbar />
          <br />
          <center>
            <h1>Simon says play the tile game!</h1>
          </center>
          <br />
          <br />
          <Playground />
          <br />
          <br />
          <br />
          <Footer />
        </>
      );
}