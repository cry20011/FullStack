import React from "react";

import '../style/PlayOffSeries.css'

function PlayOffSeries({Team1, Team2, Team1score, Team2score, Winner}) {
    if (Winner === 1) {
        return (
            <div className="series_table">
                <table className="play_off_series">
                    <tr>
                        <td>
                            <div className="logo_team">
                                <img src={Team1[0].logo} />
                                <p><b>{Team1[0].name}</b></p>
                            </div>
                        </td>
                        <td className="team_score"><b>{Team1score}</b></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="logo_team">
                                <img src={Team2[0].logo} />
                                <p>{Team2[0].name}</p>
                            </div>
                        </td>
                        <td className="team_score">{Team2score}</td>
                    </tr>
                </table>
            </div>
        );
    } else {
        return (
            <div className="series_table">
                <table className="play_off_series">
                    <tr>
                        <td>
                            <div className="logo_team">
                                <img src={Team1[0].logo} />
                                <p>{Team1[0].name}</p>
                            </div>
                        </td>
                        <td className="team_score">{Team1score}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="logo_team">
                                <img src={Team2[0].logo} />
                                <p><b>{Team2[0].name}</b></p>
                            </div>
                        </td>
                        <td className="team_score"><b>{Team2score}</b></td>
                    </tr>
                </table>
            </div>
         );
    }
}
  
export default PlayOffSeries