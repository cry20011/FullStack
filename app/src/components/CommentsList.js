import React from "react";

import CommentItem from "./CommentItem";

import '../style/CommentsList.css'


function CommentsList({comments}) {
    return (
        <div>
            {comments.map(comment=><CommentItem comment={comment} />)}
        </div>
    )
}
  
export default CommentsList;