import React, {useState} from "react";

import '../style/TeamItem.css'

function UseClick(clicked, setClicked) {
    return ()=>setClicked(()=>clicked ? false : true);
}


function TeamItem({Name, Logo, Players}) {
    
    const [clicked, setClicked] = useState(false);
    const onClickHandler = UseClick(clicked, setClicked);
    
    if (!clicked) {
        return (
            <div className="team_item" onClick={onClickHandler}>
                <img src={Logo} />
                <p>{Name}</p>
            </div>
        );
    } else {
        return (
            <div className="team_players_item" onClick={onClickHandler}>
                <p className="pos1">pos1: {Players.pos1}</p>
                <p className="pos2">pos2: {Players.pos2}</p>
                <p className="pos3">pos3: {Players.pos3}</p>
                <p className="pos4">pos4: {Players.pos4}</p>
                <p className="pos5">pos5: {Players.pos5}</p>
                
            </div>
        );
    }
}
  
export default TeamItem