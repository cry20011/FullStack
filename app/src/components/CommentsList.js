import React from "react";

import CommentItem from "./CommentItem";

import '../style/CommentsList.css'



function CommentsList({ comments, setComments }) {
    return (
        <div className="comment_list">
            {comments.map(comment=><CommentItem comment={comment} setComments={setComments}/>)}
        </div>
    )
}
  
export default CommentsList;