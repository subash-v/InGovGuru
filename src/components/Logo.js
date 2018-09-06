import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../images/Logo.png";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={{ width: 250, height: 70 }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    alignItems: "center",
    justifyContent: "flex-end"
  }
});
