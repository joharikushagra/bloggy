import React, { useState } from "react";
import { FaThumbsUp, FaComment, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUserComment } from "../redux/comments/commentAction";
import "../styles/Card.css";

function Card({ user, post }) {
  const [comment, setComment] = useState({
    body: "",
    email: "local@local.com",
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      postId: post.id,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(addUserComment(comment));
    setComment({ body: "", email: "local@local.com" });
    alert("Your Comment Has Been Added!");
  };

  return (
    <div className="card__container" key={post.id}>
      <div className="card__author">
        {/* <h4 className="card__authorName"><FaUserCircle className="card__authorAvatar" style={{marginRight:'4px'}}/>Raushan Sinha, Web Developer, Amazon</h4> */}
        <h4 className="card__authorName">
          <FaUserCircle
            className="card__authorAvatar"
            style={{ marginRight: "4px" }}
          />
          {user && user.name}
        </h4>
        <p>Posted a day ago</p>
      </div>
      <div className="card__heading">
        <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
          <h3 className="card__headingTitle">{post && post.title}</h3>
        </Link>

        <h6 className="card__headingLocation">
          Data Science, Machine Learning, Amazon
        </h6>
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

      <div className="card__comment">
        <div className="card__commentBg">
          <input
            className="card__commentInput"
            type="text"
            name="body"
            value={comment.body}
            onChange={changeHandler}
            placeholder="Add Comment here..."
          />
          <button className="card__commentButton" onClick={clickHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
