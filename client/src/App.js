import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/passwordReset" component={PasswordReset} />
          </Switch>
    </div>
  );
}

export default App;
