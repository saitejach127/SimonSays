import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


function createData(name, score) {
    return { name, score };
  }


export default function Main() {

    var rows = [
        createData("Siddhant", 25),
        createData("Sai Teja", 122),
        createData("Anshika", 30),
    ]

    var name = "Siddhant"

    rows.sort(function (a,b)
    {
        return b.score - a.score
    })

    return (
        <>
            <Navbar />
            <div><br></br></div>
            <div><br></br></div>
            <div className = "container">
                <center><h2>LeaderBoard</h2></center>
            </div>
            <div><br></br></div>
            <div className="container">
                <center>
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,index) => (
                    <tr class={row.name === name?"table-primary":""}>
                    <th scope="row">{index+1}</th>
                    <td>{row.name}</td>
                    <td>{row.score}</td>
                    </tr>
                ))}
                    
                </tbody>
                </table>
                </center>
            </div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <Footer />
        </>
    )
}