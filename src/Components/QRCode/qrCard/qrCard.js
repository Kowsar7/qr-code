import React from 'react'

import classes from './qrCard.module.css'
import QRImage from '../../../assets/images/image-qr-code.png'

const card = () => {
    return(
        <div className= {classes.Container}>
            <div className= {classes.Card}>
                <img src={QRImage} alt="QR code" className= {classes.Image}/>
                <h3 className= {classes.Bold}>Improve your front-end<br />skills by building projects</h3>
                <h5 className= {classes.Small}>Scan the QR code to visit Frontend<br />Mentor and take your coding skills to<br />the next level</h5>
            </div>
        </div>
    )
}

export default card