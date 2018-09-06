import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Searchbar from "../components/Searchbar";
import logo from "../images/Logo.png";
import I18n from "react-native-i18n";
import en from "../components/en";
import hi from "./hi";
export default class MobileHeader extends Component {
  render() {
    console.log("home", this.props);
    return (
      <View>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Menu")}
            >
              <Icon name="menu" color="white" />
            </TouchableOpacity>
          </View>
          <View onPress={() => this.openHome(i)}>
            <Image style={styles.Logo} source={logo} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Icon name="person" color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Searchbar placeholder={I18n.t("search")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2089dc",
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 5,
    height: "auto",
    width: "auto"
  },
  Logo: { width: 200, height: 40 }
});
//I18n.locale = "hi";
I18n.fallbacks = true;

I18n.translations = {
  en,
  hi
};
