import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function Task() {

    const [task, setTask] = useState("");
    const [vidid, setVidid] = useState("");

    const getTask = () => {
        const allTasks = ["Push up", "High plank", "Side plank", "Single-arm chest press", "Rotational punches", "Bench press"];
        const videourl = ["Eh00_rniF8E", "rtcHuoxWjGI", "K2VljzCC16g", "td-4lC0tXKA", "ziLsNfvyCsA", "rT7DgCr-3pg"]
        const idx = Math.floor(Math.random() * 6);
        setTask(allTasks[idx]);
        setVidid(videourl[idx]);
    }

    useEffect(() => {
        getTask();
    }, [])

    return (
        <div>
            <h1>{task}</h1>
            <iframe title="example" width="560" height="315" src={`https://www.youtube.com/embed/${vidid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
            <Link to="/simonsays/score" className="btn btn-success">Do it</Link>
        </div>
    )
}
