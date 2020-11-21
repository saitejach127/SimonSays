import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Main() {
    return (
        <>
            <Navbar />
            <div className="container">
                <center><h1>Simon Says</h1>
                    <h3>About the Game</h3>
                    <p>Simon Says is a game where in children are given a random task and children perform the task</p>
                    <h3>How to play</h3>
                    </center>
                    <ul>
                        <li>Children are shown by a random task</li>
                        <li>Children should first watch the video on how to do it</li>
                        <li>Then they need to perform the task</li>
                        <li>Camera will be monitoring the task performed</li>
                        <li>Based on the performance children will be assigned score</li>
                        <li>Children can view all the scores of there friends on the Leaderboard</li>
                    </ul>
                    <center><Link to="/simonsays/task" className="btn btn-success">Play the Game</Link></center>
                    <br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </>
    )
}
