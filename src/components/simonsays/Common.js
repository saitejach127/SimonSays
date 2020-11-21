import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import {Link} from 'react-router-dom'

export default function Common() {
    return (
        <>
            <Navbar />
            <div className="container"><br />
                <center><h1>Which skill do you want to develop ?</h1></center><br /><br />
                <Link to="/simonsays/task" className="btn btn-primary">Physical Development</Link><br /><br />
                <Link to="/simonsays/task" className="btn btn-primary">Language Development</Link><br /><br />
                <Link to="/simonsays/task" className="btn btn-primary">Memory Development</Link><br /><br />
                <Link to="/simonsays/task" className="btn btn-primary">Physical Development</Link><br />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}
