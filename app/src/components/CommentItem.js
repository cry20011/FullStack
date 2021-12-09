import React from "react";

import '../style/CommentItem.css'

const baseUrl = 'http://127.0.0.1:8000/api/'

const drop = (id)=>{
  fetch(baseUrl + `drop/${id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      }
  })
}


function CommentItem({comment, setComments}) {
    const {id, login, text} = comment
  return (
    <div>
    {

    // <form onSubmit={e=>{
    //   e.preventDefault();
    //   drop(id)
    //   const fetchComments = async () => {
    //         const response = await fetch(baseUrl + "get_all/");
    //       const comments_json = await response.json();
    //       setComments(comments_json);
    //   };
    //   fetchComments();
    // }}>
    //   <div>
    //     <button>Удалить</button>
    //   </div> 
    // </form>
    }
      <div className="comment">
        <p><b>{login}</b>: {text}</p>
      </div>
    </div>
  );
}

export default CommentItem;
