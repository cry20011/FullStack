import React from "react";

import TeamItem from "./TeamItem";

import '../style/RegionParticipants.css'

function RegionParticipants({Region, Teams}) {
    return (
       <div>
           <p className="region_name">
               {Region}
           </p>
           <div className="region_participants">
               {Teams.map(team=><TeamItem Name={team.name} Logo={team.logo} Players={team.players}/>)}
           </div>
       </div>
    );
}
  
export default RegionParticipants