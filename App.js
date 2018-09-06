import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import Home from "./src/pages/Home";
import Menu from "./src/pages/Menu";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import LanguageSeletion from "./src/pages/LanguageSeletion";
const App1 = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Menu: { screen: Menu },
  Language: { screen: LanguageSeletion }
});

export default class App extends Component {
  render() {
    return <App1 />;
  }
}
