import React from 'react';
import {Link} from 'react-router-dom';

export default function Section2() {
    return (
        <div className="row">
            <div className="col-lg-6" style={{backgroundColor : '#90EE90'}}>
                <center>
                    <h1>Physical Development</h1>
                    <p>Many Children These are mostly stuck to there mobile phones and do not play well outside which shows side effects on there physical body. This will lead to many diseases in future</p>
                    <Link to="/simonsays/" className="btn btn-primary">Physical Developemt</Link>
                </center>
                <br />
            </div>
            <div className="col-lg-6" style={{backgroundColor : '#add8e6'}}>
            <center>
                    <h1>Cognitive Development</h1>
            </center>
            </div>
        </div>
    )
}