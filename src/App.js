import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import NavBar from "./components/common/navbar";
import { isExpired } from "react-jwt";
import SignUpForm from "./components/common/signUp";



function App() {

  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/posts"
                           render={props => {
                               if (isExpired(localStorage.getItem('token'))) {
                                   return <Redirect to="/" />;
                               }
                               return <Posts />;
                           }}
                    />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={Home} />
                    <Route path="/signUp" component={SignUpForm} />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
