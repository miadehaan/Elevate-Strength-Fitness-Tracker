import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
// import PasswordReset from "./pages/PasswordReset";

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/account" component={Account} />
        {/* <Route path="/passwordReset" component={PasswordReset} /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
