import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import data from "../components/Data";
import Header from "../components/MobileHeader";
import Scrollbar from "../components/Scrollbar";

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <Header {...this.props} />
        <Scrollbar Data={data} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2089dc",

    alignItems: "center",
    justifyContent: "flex-end"
  }
});
