import React from "react";

import '../style/Info.css'
import Int_Aegis from '../images/The_International_10.jpg'

function Info() {
    return (
       <div className="info">
           <img src={Int_Aegis} />
           <p className="org">Organizer: Valve</p>
           <p className="loc">Location: Bucharest</p>
           <p className="dates">Dates: Oct7 - 17, 2021</p>
           <p className="teams">Teams: 18</p>
           <p className="prize">Prize Pool: 40,018,195$</p>
       </div>
    );
}
  
export default Info;