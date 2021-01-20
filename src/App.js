import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../src/components/common/navbar";
import FlipBooks from "./components/flipbooks";
import RegisterForm from "./components/registerForm";
import FlipbookDetails from "./components/flipbookDetails";
import ProtectedRoute from "./components/common/protectedRoute";
import FlipbookForm from "./components/flipbookForm";
import Footer from "./components/common/footer";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import About from "./components/about";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <NavBar user={user} />
        <Switch>
          <Route path="/flipbooks/new" component={FlipbookForm} />
          <ProtectedRoute path="/flipbooks/:id" component={FlipbookForm} />
          <Route path="/flipbook-details/:id" component={FlipbookDetails} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={LoginForm} />
          <Route
            path="/flipbooks"
            render={(props) => <FlipBooks {...props} user={user} />}
          />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
