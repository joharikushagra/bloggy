import React from "react";
import "../styles/SideDisplay.css";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SideDisplay({ postData }) {
  return (
    <div className="display__container">
      <div className="display__search">
        <span className="display__searchIcon">
          <FaSearch />
        </span>
        <input
          className="display__searchInput"
          placeholder="Search questions with keywords"
        />
      </div>
      <div className="display__content"></div>
      <h2 className="display__contentHead">Top Searched Items</h2>
      <ul className="display__contentList">
        {postData &&
          postData.posts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} style={{textDecoration:'none'}}>
              <li>{post.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postData: state.post,
  };
};

export default connect(mapStateToProps, null)(SideDisplay);
