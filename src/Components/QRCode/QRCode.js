import classes from './QRCode.module.css';

import QrCard from './qrCard/qrCard'

function QRCode() {
  return (
    <div className= {classes.QRCode}>
      <QrCard className= {classes.QRCard} />
      <div className= {classes.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/kowsar-mojtabaee">Kowsar7</a>.
      </div>
    </div>
  );
}

export default QRCode