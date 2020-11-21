import React,{useState, useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {database} from '../Config';

export default function Main() {

    const [rows, setRows] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        if(localStorage.getItem("name")){
            setName(localStorage.getItem("name"));
        }
        var allRows = [];
        database.ref("scores/").once("value").then((snap) => {
            var data = snap.val();
            for(var key of Object.keys(data)){
                allRows.push(data[key]);
            }
            console.log(allRows);
            allRows.sort((a,b) => {
                return b.score - a.score;
            })
            setRows(allRows);
        })
    }, [])

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
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,index) => (
                    <tr className={row.name === name?"table-primary":""} key={index}>
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