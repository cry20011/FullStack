import React, { useState } from "react";
import { createStore } from "redux";
import { reducer } from "../redux/Reducer";


import Title from "./Title";
import Info from "./Info";
import Infotext from "./Infotext";
import ParticHead from "./Partichead";
import RegionParticipants from "./RegionParticipants";
import TournamentEvents from "./TournamentEvents";
import CommentsList from "./CommentsList";

import '../style/Mainstyle.css'

import AllianceLogo from '../images/TeamsLogo/AllianceLogo.png'
import AsterLogo from '../images/TeamsLogo/AsterLogo.png'
import BCLogo from '../images/TeamsLogo/BCLogo.png'
import EGLogo from '../images/TeamsLogo/EGLogo.png'
import ElephantLogo from '../images/TeamsLogo/ElephantLogo.png'
import FnaticLogo from '../images/TeamsLogo/FnaticLogo.png'
import IGLogo from '../images/TeamsLogo/IGLogo.png'
import LGDLogo from '../images/TeamsLogo/LGDLogo.png'
import OGLogo from '../images/TeamsLogo/OGLogo.png'
import QCLogo from '../images/TeamsLogo/QCLogo.png'
import SGLogo from '../images/TeamsLogo/SGLogo.png'
import T1Logo from '../images/TeamsLogo/T1Logo.png'
import TeamSecretLogo from '../images/TeamsLogo/TeamSecretLogo.png'
import TPLogo from '../images/TeamsLogo/TPLogo.png'
import TSLogo from '../images/TeamsLogo/TSLogo.png'
import UndyingLogo from '../images/TeamsLogo/UndyingLogo.png'
import VGLogo from '../images/TeamsLogo/VGLogo.png'
import VPLogo from '../images/TeamsLogo/VPLogo.png'
import ResultTable from "./ResultTable";
import TeamItem from "./TeamItem";
import AddComment from "./AddComment";

function App() {

    const TeamsLogoPlayers = [
        {id: 1, name: 'Alliance', logo: AllianceLogo, players: {pos1: 'Nikobaby', pos2: 'LIMMP', pos3: 's4', pos4: 'Handsken', pos5: 'fng'}},
        {id: 2, name: 'Team Aster', logo: AsterLogo, players: {pos1: 'Monet', pos2: '刘宇皓', pos3: 'Xxs', pos4: 'Borax', pos5: 'LaNm'}},
        {id: 3, name: 'Beastcoast', logo: BCLogo, players: {pos1: 'K1', pos2: 'Chris Luck', pos3: 'Wisper', pos4: 'Scofield', pos5: 'Stinger'}},
        {id: 4, name: 'Evil Geniuses', logo: EGLogo, players: {pos1: 'Arteezy', pos2: 'Abed', pos3: 'iceiceice', pos4: 'Cr1t-', pos5: 'Fly'}},
        {id: 5, name: 'Elephant', logo: ElephantLogo, players: {pos1: 'Eurus', pos2: 'Somnus', pos3: 'Yang', pos4: 'fy', pos5: 'Super'}},
        {id: 6, name: 'Fnatic', logo: FnaticLogo, players: {pos1: 'Raven', pos2: 'ChYuan', pos3: 'Deth', pos4: 'Jabz', pos5: 'Dj'}},
        {id: 7, name: 'Invictus Gaming', logo: IGLogo, players: {pos1: 'flyfly', pos2: 'Emo', pos3: 'JT-', pos4: 'Kaka', pos5: 'Oli'}},
        {id: 8, name: 'PSG LGD', logo: LGDLogo, players: {pos1: 'Ame', pos2: 'NothingToSay', pos3: 'Faith_bian', pos4: 'XinQ', pos5: 'y`'}},
        {id: 9, name: 'OG', logo: OGLogo, players: {pos1: 'SumaiL', pos2: 'Topson', pos3: 'Ceb', pos4: 'Saksa', pos5: 'N0tail'}},
        {id: 10, name: 'Quincy Crew', logo: QCLogo, players: {pos1: 'YawaR', pos2: 'Quinn', pos3: 'Lelis', pos4: 'MSS', pos5: 'SVG'}},
        {id: 11, name: 'SG Esports', logo: SGLogo, players: {pos1: 'Costabile', pos2: '4dr', pos3: 'Tavo', pos4: 'Thiolicor', pos5: 'KJ'}},
        {id: 12, name: 'T1', logo: T1Logo, players: {pos1: '23savage', pos2: 'Karl', pos3: 'Kuku', pos4: 'Xepher', pos5: 'Whitemon'}},
        {id: 13, name: 'Team Secret', logo: TeamSecretLogo, players: {pos1: 'MATUMBAMAN', pos2: 'Nisha', pos3: 'zai', pos4: 'YapzOr', pos5: 'Puppey'}},
        {id: 14, name: 'Thunder Predator', logo: TPLogo, players: {pos1: 'Mnz', pos2: 'Leostyle-', pos3: 'Frank', pos4: 'MoOz', pos5: 'Mjz'}},
        {id: 15, name: 'Team Spirit', logo: TSLogo, players: {pos1: 'Yatoro', pos2: 'TORONTOTOKYO', pos3: 'Collapse', pos4: 'Mira', pos5: 'Miposhka'}},
        {id: 16, name: 'Team Undying', logo: UndyingLogo, players: {pos1: 'Timado', pos2: 'Bryle', pos3: 'SabeRLight-', pos4: 'MoonMeander', pos5: 'Dubu'}},
        {id: 17, name: 'Vici Gaming', logo: VGLogo, players: {pos1: 'poyoyo', pos2: 'Ori', pos3: 'old eLeVeN', pos4: 'Pyw', pos5: 'Dy'}},
        {id: 18, name: 'Virus Pro', logo: VPLogo, players: {pos1: 'Nightfall', pos2: 'gpk', pos3: 'DM', pos4: 'Save-', pos5: 'KingSlayer'}},
    ]

    const WestEuIds = [1, 9, 13];
    const EastEuIds = [15, 18];
    const ChinaIds = [8, 17, 7, 5, 2];
    const SouthAsiaIds = [12, 6];
    const NorthAmericaIds = [4, 10, 16];
    const SouthAmericaIds = [14, 11, 3];

    const GetTeamsByIds = (ids)=>{
        return TeamsLogoPlayers.filter((item)=>{
            for (let i = 0; i < ids.length; ++i) {
                if (item.id === ids[i]) {
                    return true;
                }
            }
            return false;
        })
    }

    const initialCommentsList = [
        {id: 1, name: 'TSpirit:TORONTOTOKYO', text: 'ez game'},
        {id: 2, name: 'OG:N0tail', text: 'ratatatata'},
        {id: 3, name: 'Серега Чугун', text: 'Подпивас на топсоне'}
    ];

    const store_1 = createStore(reducer, initialCommentsList);

    const [store, setStore] = useState(store_1)
    const [state, setState] = useState(store.getState());

    function changeComment() {
        setState(()=>{
            return store.getState()
        })
    };
    store.subscribe(changeComment)

    return (
        <div>
            <div className="head">
                <Title />    
                <Info />
                <Infotext />
            </div>
            <div className="participants">
                <ParticHead />
                <RegionParticipants Region="Western Europe" Teams={GetTeamsByIds(WestEuIds)}/>
                <RegionParticipants Region="Eastern Europe" Teams={GetTeamsByIds(EastEuIds)}/>
                <RegionParticipants Region="China" Teams={GetTeamsByIds(ChinaIds)}/>
                <RegionParticipants Region="South Asia" Teams={GetTeamsByIds(SouthAsiaIds)}/>
                <RegionParticipants Region="North America" Teams={GetTeamsByIds(NorthAmericaIds)}/>
                <RegionParticipants Region="South America" Teams={GetTeamsByIds(SouthAmericaIds)}/>
                <hr />
            </div>
            <div className="tournament_events">
                <p className="tour_head">Tournament</p>
                <TournamentEvents Teams={TeamsLogoPlayers}/>
                <hr />
            </div>
            <div className="results">
                <p className="tour_head">Results</p>
                <ResultTable Teams={TeamsLogoPlayers}/>
            </div>
            <div className="comments">
                <p className="tour_head">Comments</p>
                <hr />
                <CommentsList comments={state} store={store}/>
                <AddComment store={store} setStore={setStore}/>
            </div>
        </div>
    );
}
  
export default App;