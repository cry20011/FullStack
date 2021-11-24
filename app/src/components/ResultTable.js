import React from "react";

import TableItem from "./TableItem";

import '../style/ResultTable.css'


function ResultTable({Teams}) {
    return (
        <table>
                   <TableItem Place="Place" Team="Team" WL="Prize"/>
                   <TableItem ClassName="first" Place="1" Team={Teams.filter(item=>item.id === 15)} WL="$18,208,300"/>
                   <TableItem ClassName="second" Place="2" Team={Teams.filter(item=>item.id === 8)} WL="$5,202,400"/>
                   <TableItem ClassName="third" Place="3" Team={Teams.filter(item=>item.id === 13)} WL="$3,601,600"/>
                   
                   <TableItem ClassName="" Place="4" Team={Teams.filter(item=>item.id === 7)} WL="$2,401,100"/>
                   <TableItem ClassName="" Place="5-6" Team={Teams.filter(item=>item.id === 18)} WL="$1,400,600"/>
                   <TableItem ClassName="" Place="5-6" Team={Teams.filter(item=>item.id === 17)} WL="$1,400,600"/>
                   <TableItem ClassName="" Place="7-8" Team={Teams.filter(item=>item.id === 9)} WL="$1,000,500"/>
                   <TableItem ClassName="" Place="7-8" Team={Teams.filter(item=>item.id === 12)} WL="$1,000,500"/>
                   <TableItem ClassName="" Place="9-12" Team={Teams.filter(item=>item.id === 6)} WL="$800,400"/>
                   <TableItem ClassName="" Place="9-12" Team={Teams.filter(item=>item.id === 10)} WL="$800,400"/>
                   <TableItem ClassName="" Place="9-12" Team={Teams.filter(item=>item.id === 1)} WL="$800,400"/>
                   <TableItem ClassName="" Place="9-12" Team={Teams.filter(item=>item.id === 4)} WL="$800,400"/>
                   <TableItem ClassName="" Place="13-16" Team={Teams.filter(item=>item.id === 16)} WL="$600,300"/>
                   <TableItem ClassName="" Place="13-16" Team={Teams.filter(item=>item.id === 2)} WL="$600,300"/>
                   <TableItem ClassName="" Place="13-16" Team={Teams.filter(item=>item.id === 3)} WL="$600,300"/>
                   <TableItem ClassName="" Place="13-16" Team={Teams.filter(item=>item.id === 5)} WL="$600,300"/>
                   <TableItem ClassName="" Place="17-18" Team={Teams.filter(item=>item.id === 14)} WL="$100,000"/>
                   <TableItem ClassName="" Place="17-18" Team={Teams.filter(item=>item.id === 11)} WL="$100,000"/>
        </table>
    )
}
  
export default ResultTable;