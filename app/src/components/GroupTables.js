import React from "react";

import TableItem from "./TableItem";

import '../style/GroupTables.css'

function GroupTables({Teams}) {
    
    return (
       <div className="group_tables">
           <div className="group_a">
               <h2>Group A</h2>
               <table>
                   <TableItem Place="Place" Team="Team" WL="W-L"/>
                   <TableItem ClassName="upper" Place="1" Team={Teams.filter(item=>item.id === 7)} WL="14-2"/>
                   <TableItem ClassName="upper" Place="2" Team={Teams.filter(item=>item.id === 18)} WL="11-5"/>
                   <TableItem ClassName="upper" Place="3" Team={Teams.filter(item=>item.id === 9)} WL="10-6"/>
                   <TableItem ClassName="upper" Place="4" Team={Teams.filter(item=>item.id === 12)} WL="10-6"/>

                   <TableItem ClassName="lower" Place="5" Team={Teams.filter(item=>item.id === 16)} WL="9-7"/>
                   <TableItem ClassName="lower" Place="6" Team={Teams.filter(item=>item.id === 4)} WL="9-7"/>
                   <TableItem ClassName="lower" Place="7" Team={Teams.filter(item=>item.id === 2)} WL="5-11"/>
                   <TableItem ClassName="lower" Place="8" Team={Teams.filter(item=>item.id === 1)} WL="4-12"/>

                   <TableItem ClassName="eliminated" Place="9" Team={Teams.filter(item=>item.id === 14)} WL="0-16"/>
               </table>
           </div>
           <div className="group_b">
               <h2>Group B</h2>
               <table>
                   <TableItem Place="Place" Team="Team" WL="W-L"/>
                   <TableItem ClassName="upper" Place="1" Team={Teams.filter(item=>item.id === 8)} WL="15-1"/>
                   <TableItem ClassName="upper" Place="2" Team={Teams.filter(item=>item.id === 13)} WL="10-6"/>
                   <TableItem ClassName="upper" Place="3" Team={Teams.filter(item=>item.id === 17)} WL="10-6"/>
                   <TableItem ClassName="upper" Place="4" Team={Teams.filter(item=>item.id === 15)} WL="10-6"/>

                   <TableItem ClassName="lower" Place="5" Team={Teams.filter(item=>item.id === 3)} WL="7-9"/>
                   <TableItem ClassName="lower" Place="6" Team={Teams.filter(item=>item.id === 10)} WL="6-10"/>
                   <TableItem ClassName="lower" Place="7" Team={Teams.filter(item=>item.id === 6)} WL="6-10"/>
                   <TableItem ClassName="lower" Place="8" Team={Teams.filter(item=>item.id === 5)} WL="6-10"/>

                   <TableItem ClassName="eliminated" Place="9" Team={Teams.filter(item=>item.id === 11)} WL="2-14"/>
               </table>
           </div>
           <div className="color_means">
               <p className="upper_round"></p><p>- Upper Bracket</p>
               <p className="lower_round"></p><p>- Lower Bracket</p>
               <p className="eliminated_round"></p><p>- Eliminated</p>
           </div>
       </div>
    );
}
  
export default GroupTables;