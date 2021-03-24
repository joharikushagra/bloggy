import "./App.css";
import Card from "./components/Card";
import SideDisplay from "./components/SideDisplay";
import { FaPencilAlt } from "react-icons/fa";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewPost from "./components/NewPost";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <div className="cards">
              <div className="newPost__container">
                <Link to="/new">
                  Share your Interview experience with community <FaPencilAlt />
                </Link>
              </div>
              <Card />
              <Card />
              <Card />
            </div>
            <div className="menu">
              <SideDisplay />
            </div>
          </Route>
          <Route path="/new">
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
