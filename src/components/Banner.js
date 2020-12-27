import React from 'react';
import {Link} from 'react-router-dom'
import banner from './media/bg-children.jpg'

export default function Banner() {
    return (
        <div style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize : 'cover', width : "1350px", height : "580px"}}>
            <div className="container">
                <div className="row">
                
                    <div className="col-lg-8 col-md-12"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1 style={{color : 'white'}}>Game for Overall Development Of Kids</h1><Link className="btn btn-success" to="/simonsays">Play</Link></div>
                    <div className="col-lg-4 col-md-12"></div>
                </div>
            </div>
        </div>
    )
}
