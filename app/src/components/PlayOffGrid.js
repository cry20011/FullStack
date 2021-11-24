import React from "react";

import PlayOffSeries from "./PlayOffSeries";

import '../style/PlayOffGrid.css'
import '../style/PlayOffLines.css'



function PlayOffGrid({Teams}) {

    const GetTeamById = (id)=>Teams.filter(item=>item.id === id)
    console.log(GetTeamById(15))

    return (
       <div className="play_off_grid">
           <div className="upper_lower_bracket">
               <div className="upper_bracket">
                    <div className="first_white_block"></div>
                    <div className="upper_first_round">
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(15)} Team2={GetTeamById(7)} Team1score={1} Team2score={2} Winner={2}/>
                            <hr className="upper_first_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_1"/>
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(9)} Team2={GetTeamById(13)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="upper_first_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_2"/>
                             
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(8)} Team2={GetTeamById(12)} Team1score={2} Team2score={1} Winner={1}/>
                            <hr className="upper_first_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_1"/>
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(18)} Team2={GetTeamById(17)} Team1score={2} Team2score={1} Winner={1}/>
                            <hr className="upper_first_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_2"/>
                        </div>

                    </div>
                    <div className="white_block">
                        <hr className="upper_first_round_winner_line_right_2" />
                        <hr className="upper_first_round_winner_line_right_3" />
                        <hr className="upper_first_round_winner_line_right_4" />
                        <hr className="upper_first_round_winner_line_right_3" />
                    </div>
                    <div className="upper_second_round">
                        <div className="play_off_series_with_line_IG_Secret">
                            <PlayOffSeries Team1={GetTeamById(7)} Team2={GetTeamById(13)} Team1score={1} Team2score={2} Winner={2}/>
                            <hr className="upper_first_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_3"/>    
                        </div>
                        <div className="play_off_series_with_line_LGD_VP">
                            <PlayOffSeries Team1={GetTeamById(8)} Team2={GetTeamById(18)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="upper_first_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_4"/>
                        </div>

                    </div>
                    <div className="white_block">
                        <hr className="upper_first_round_winner_line_right_5" />
                        <hr className="upper_first_round_winner_line_right_3" />
                    </div>

                    <div className="upper_third_round">
                        <div className="play_off_series_with_line_LGD_Secret">
                            <PlayOffSeries Team1={GetTeamById(13)} Team2={GetTeamById(8)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_forth_round_winner_line_bot_4"/>
                            <hr className="lower_forth_round_winner_line_right_5"/>
                        </div>
                    </div>
                    
               </div>



               <div className="lower_bracket">
                   
                   <div className="lower_first_round">
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(6)} Team2={GetTeamById(16)} Team1score={1} Team2score={0} Winner={1}/>
                            <hr className="winner_line"/>   
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(2)} Team2={GetTeamById(10)} Team1score={0} Team2score={1} Winner={2}/>
                            <hr className="winner_line"/>   
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(1)} Team2={GetTeamById(3)} Team1score={1} Team2score={0} Winner={1}/>
                            <hr className="winner_line"/>   
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(4)} Team2={GetTeamById(5)} Team1score={1} Team2score={0} Winner={1}/>
                            <hr className="winner_line"/>   
                        </div>
                   </div>

                   <div className="lower_second_round">
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(6)} Team2={GetTeamById(15)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_1"/>
                            <hr className="lower_second_round_winner_line_right_2"/>
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(10)} Team2={GetTeamById(9)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_2"/>
                            <hr className="lower_second_round_winner_line_right_3"/>
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(1)} Team2={GetTeamById(12)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_1"/>
                            <hr className="lower_second_round_winner_line_right_2"/>
                        </div>
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(4)} Team2={GetTeamById(17)} Team1score={1} Team2score={2} Winner={2}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_second_round_winner_line_bot_2"/>
                            <hr className="lower_second_round_winner_line_right_3"/>
                        </div>
                   </div>

                   <div className="lower_third_round">
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(15)} Team2={GetTeamById(9)} Team1score={2} Team2score={0} Winner={1}/>
                            <hr className="winner_line"/>   
                        </div>
                        <div className="play_off_series_with_line_VG_T1">
                            <PlayOffSeries Team1={GetTeamById(12)} Team2={GetTeamById(17)} Team1score={1} Team2score={2} Winner={2}/>
                            <hr className="winner_line"/>   
                        </div>
                        
                   </div>

                   <div className="lower_forth_round">
                        <div className="play_off_series_with_line">
                            <PlayOffSeries Team1={GetTeamById(15)} Team2={GetTeamById(18)} Team1score={2} Team2score={1} Winner={1}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_forth_round_winner_line_bot_1"/>
                            <hr className="lower_forth_round_winner_line_right_2"/>
  
                        </div>
                        <div className="play_off_series_with_line_VG_IG">
                            <PlayOffSeries Team1={GetTeamById(17)} Team2={GetTeamById(7)} Team1score={0} Team2score={2} Winner={2}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_forth_round_winner_line_bot_2"/>
                            <hr className="lower_forth_round_winner_line_right_3"/>
                        </div>
                   </div>

                   <div className="lower_forth_round">
                        <div className="play_off_series_with_line_VG_IG">
                            <PlayOffSeries Team1={GetTeamById(15)} Team2={GetTeamById(7)} Team1score={2} Team2score={0} Winner={1}/>
                            <hr className="winner_line" />
                        </div>
                   </div>
                   <div className="lower_forth_round">
                        <div className="play_off_series_with_line_TS_Secret">
                            <PlayOffSeries Team1={GetTeamById(15)} Team2={GetTeamById(13)} Team1score={2} Team2score={1} Winner={1}/>
                            <hr className="lower_second_round_winner_line_right_1"/>
                            <hr className="lower_forth_round_winner_line_bot_3"/>
                            <hr className="lower_second_round_winner_line_right_4"/>  
                        </div>
                   </div>

               </div>
           </div>
           <div className="grand_final">
                <div className="play_off_series_with_line_final">
                    <PlayOffSeries Team1={GetTeamById(8)} Team2={GetTeamById(15)} Team1score={2} Team2score={3} Winner={2}/>
                    <hr className="winner_line"/>
                    <img className="winner_logo" src={GetTeamById(15)[0].logo}/>
                </div>
           </div>
       </div>
    );
}
  
export default PlayOffGrid