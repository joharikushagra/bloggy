import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaThumbsUp, FaComment,FaUserCircle } from "react-icons/fa";
import '../styles/Card.css'; 

function PostDetails() {
  const { id } = useParams();
  const [post] = useSelector((state) =>
    state.post.posts.filter((p) => p.id === parseInt(id, 10))
  );
  const [user] = useSelector((state) =>
    state.user.users.filter((u) => u.id === parseInt(post.userId, 10))
  );
  const comments = useSelector((state) =>
    state.comment.comments.filter((c) => c.postId === parseInt(id, 10))
  );
  return (
    <div>
      <div className="card__container" key={post.id}>
        <div className="card__author">
          <h4 className="card__authorName">
            <FaUserCircle
              className="card__authorAvatar"
              style={{ marginRight: "4px" }}
            />
            {user && (user.name || "John Doe")}
          </h4>
        </div>
        <div className="card__heading">
            <h3>{post.title}</h3>
        </div>
        <div className="card__content">
          <p>{post.body}</p>

          <div className="card__icons">
            <FaThumbsUp />
            <span style={{ marginLeft: "6px" }}>2k</span>
            <FaComment style={{ marginLeft: "12px" }} />
            <span style={{ marginLeft: "6px" }}>10</span>
          </div>
        </div>

        {comments && comments.map(c => (<div key={c.id} className="comment">
            <p>By: <strong>{c.email}</strong></p>
            <div>{c.body}</div>
            {c.email ==="local@local.com" && (<><button>Delete</button><button>edit</button></>)}
        </div>))}

        {!comments.length && (<div  className="comment">
            <p>By: <strong>{"JOHN DOE"}</strong></p>
            <div>{"No comments till now"}</div>
        </div>)}
      </div>
    </div>
  );
}

export default PostDetails;
