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
                <center><div class="row">
                    <div class="col-sm">
                        <center><Link to="/simonsays/task" className="btn btn-success">Physical Development</Link></center><br /><br />
                        <center><Link to="/simonsays/langtask" className="btn btn-success">Language Development</Link></center><br /><br />
                        <center><Link to="/simonsays/memtask" className="btn btn-success">Memory Development</Link></center><br /><br />
                    </div>
                </div></center> 
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}
