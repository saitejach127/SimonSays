import React from 'react';
import banner from './media/banner-bg.png'

export default function Banner() {
    return (
        <div style={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize : 'cover', width : "1350px", height : "580px"}}>
            <div className="container">
                <div className="row">
                
                    <div className="col-lg-8 col-md-12"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1>Games for Overall Development Of Kids</h1></div>
                    <div className="col-lg-4 col-md-12"></div>
                </div>
            </div>
        </div>
    )
}
