import React from "react";



import '../style/TableItem.css'


function TableItem({ClassName, Place, Team, WL}) {
    if (typeof Team === 'string') {
        return (
           <tr>
               <td>{Place}</td>
               <td>{Team}</td>
               <td>{WL}</td>
           </tr>
        )
    } else {
        return (
            <tr className={ClassName}>
                <td>{Place}</td>
                <td>
                    <div className="logo_team">
                        <img src={Team[0].logo} />
                        <span>{Team[0].name}</span>
                    </div>
                </td>
                <td>{WL}</td>
            </tr>
         )
    }
}
  
export default TableItem;