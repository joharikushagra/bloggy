import "./App.css";
import Card from "./components/Card";
import PostDetails from './components/PostDetails'
import SideDisplay from "./components/SideDisplay";
import { FaPencilAlt } from "react-icons/fa";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPost from "./components/NewPost";
import { connect } from "react-redux";
import { fetchUsers } from "./redux/user/userAction";
import {fetchPosts} from './redux/posts/postAction';
import { useEffect } from "react";
import { fetchComments } from "./redux/comments/commentAction";
function App({ fetchPosts, fetchComments, fetchUsers,userData, postData}) {
  useEffect(() => {
    fetchUsers();
    fetchPosts();
    fetchComments();
  }, [])
  return (
    <Router>
      <div className="App">
      {/* <UserContainer/> */}
        <Switch>
          <Route path="/" exact>
            <div className="cards">
              <div className="newPost__container">
                <Link to="/new">
                  Share your Interview experience with community <FaPencilAlt />
                </Link>
              </div>
              {(postData&& userData) && postData.posts.map((post,i) => {
                {/* console.log(userData.users[i]) */}
                return <Card  key ={post.id} post={post} user={ userData.users[i]} />
              })}
            </div>
            <div className="menu">
              <SideDisplay />
            </div>
          </Route>
          <Route path="/new">
            <NewPost />
          </Route>
          <Route path="/post/:id">
            <PostDetails/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state=>{
  return{
    userData : state.user,
    postData : state.post,
    commentData: state.comment
  }
}

const mapDispatchToProps = dispatch =>{
  return {
     fetchUsers : ()=>dispatch(fetchUsers()),
     fetchPosts: ()=>dispatch(fetchPosts()),
     fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

