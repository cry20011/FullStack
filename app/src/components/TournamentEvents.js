import React, {useState} from "react";

import GroupTables from "./GroupTables";
import PlayOffGrid from "./PlayOffGrid";

import '../style/TournamentEvents.css'

let last_click_group = false;

function UseClick(clicked, setClicked, clicked_from_group) {
    
    if (clicked_from_group) {
        if (clicked[0]) {
            return ()=>setClicked([false, false]);
        }
        return ()=>setClicked([true, false]);
    } else {
        if (clicked[1]) {
            return ()=>setClicked([false, false]);
        }
        return ()=>setClicked([false, true]);
    }
}

function TournamentEvents({Teams}) {

    const [clicked_group_play, setClickedGroupPlay] = useState([false, false]);

    const onClickGroupHandler = UseClick(clicked_group_play, setClickedGroupPlay, true);
    const onClickPlayHandler = UseClick(clicked_group_play, setClickedGroupPlay, false);

    if (!clicked_group_play[0] && !clicked_group_play[1]) {
        return (
           <div className="main_events">
               <p onClick={onClickGroupHandler}><u>Group Stage</u></p>
               <p onClick={onClickPlayHandler}><u>Play-off</u></p>
           </div>
        )
    } else if (clicked_group_play[0]) {
        return (
            <div>
                <div className="main_events">
                    <p onClick={onClickGroupHandler}><u>Group Stage</u></p>
                    <p onClick={onClickPlayHandler}><u>Play-off</u></p>
                </div>
                <GroupTables Teams={Teams}/>
            </div>
        )
    } else {
        return (
            <div>
                <div className="main_events">
                    <p onClick={onClickGroupHandler}><u>Group Stage</u></p>
                    <p onClick={onClickPlayHandler}><u>Play-off</u></p>
                </div>
                <PlayOffGrid Teams={Teams}/>
            </div>
        )
    }
}
  
export default TournamentEvents;