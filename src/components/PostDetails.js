import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { FaThumbsUp, FaComment, FaUserCircle } from "react-icons/fa";
import { deleteComment, updateComment } from "../redux/comments/commentAction";
import "../styles/Card.css";

function PostDetails() {
  const [cBody, setCBody] = useState("");
  const [update, setUpdate] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [post] = useSelector((state) =>
    state.post.posts.filter((p) => p.id === parseInt(id, 10))
  );
  const [user] = useSelector((state) =>
    state.user.users.filter((u) => u.id === parseInt(post.userId, 10))
  );
  const comments = useSelector((state) =>
    state.comment.comments.filter((c) => c.postId === parseInt(id, 10))
  );
  // console.log(comments)

  const deleteHandler = (id) => {
    // console.log(id);
    dispatch(deleteComment(id));
  };

  const commentChangeHandler = (e) => {
    setCBody(e.target.value);
  };

  const updateCommentHandler =(cid) => {
    dispatch(updateComment({id: cid, body: cBody}));
    setUpdate(null);
    setCBody("");
  }
  return (
    <div>
      <div className="card__container " id="details" key={post && post.id}>
        <div className="card__author">
          <h4 className="card__authorName">
            <FaUserCircle
              className="card__authorAvatar"
              style={{ marginRight: "4px" }}
            />
            {(user && user.name) || ("John Doe")}
          </h4>
        </div>
        <div className="card__heading">
          <h3>{post && post.title}</h3>
        </div>
        <div className="card__content">
          <p>{post && post.body}</p>

          <div className="card__icons">
            <FaThumbsUp />
            <span style={{ marginLeft: "6px" }}>2k</span>
            <FaComment style={{ marginLeft: "12px" }} />
            <span style={{ marginLeft: "6px" }}>10</span>
          </div>
        </div>

        {comments &&
          comments.map((c) => (
            <div key={c.id} className="comment">
              {c.email === "local@local.com" ? (
                <>
                  <p>
                    By: <strong>{c.email}</strong>
                  </p>
                  <div>
                    {update === c.id ? (
                      <span className="card__commentBg">
                        <input
                        className="card__commentInput"
                          placeholder={c.body}
                          name="body"
                          value={cBody}
                          onChange={commentChangeHandler}
                        />{" "}
                        <button
                        className="card__commentButton"
                          onClick={() => {
                            updateCommentHandler(c.id);
                          }}
                        >
                          Save
                        </button>
                      </span>
                    ) : (
                      <>{c.body}</>
                    )}
                  </div>
                  <button
                  className="card__commentButton del"
                    onClick={() => {
                      deleteHandler(c.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                  className="card__commentButton update"
                    onClick={() => {
                      setCBody(c.body);
                      setUpdate(c.id);
                    }}
                  >
                    Edit
                  </button>
                </>
              ) : (
                <>
                  <p>
                    By: <strong>{c.email}</strong>
                  </p>
                  <div>{c.body}</div>
                </>
              )}
            </div>
          ))}

        {!comments.length && (
          <div className="comment">
           
            <div>{"No comments till now"}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
