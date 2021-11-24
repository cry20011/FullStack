import React from "react";

import '../style/CommentItem.css'

function CommentItem({comment}) {
    const {name, text} = comment
  return (
    <div className="comment">
      <p><b>{name}</b>: {text}</p>
    </div>
  );
}

export default CommentItem;
