import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Playground from "../Playground";
import App from '../memorygame/App';


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
        <Navbar />
          <App />
          <Footer />
        </>
      );
}