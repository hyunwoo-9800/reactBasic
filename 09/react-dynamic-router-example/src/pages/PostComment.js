import React from "react";
import { useParams } from "react-router-dom";

function PostComment() {

  const { postId, commentId } = useParams();

  return (

    <div>
      <h2>댓글 상세</h2>
      <p>포스트 ID : {postId}</p>
      <p>댓글 ID : {commentId}</p>
    </div>

  );
  
}

export default PostComment;
