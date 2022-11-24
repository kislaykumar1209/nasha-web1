import "./App.css";
import Registartion from "./components/registration/registration";
import Dashboard from "./components/dashboard/dashboard";
import HomeScreen from "./components/home/homescreen";
import Login from "./components/login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Registartion} />
      </Switch>
    </Router>
  );
}

export default App;
