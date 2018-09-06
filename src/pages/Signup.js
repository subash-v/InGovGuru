import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";
import Form from "../components/SignUpForm";
import { Actions } from "react-native-router-flux";
import { Icon } from "react-native-elements";
import I18n from "react-native-i18n";
import en from "../components/en";
import hi from "../components/hi";
export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  goBack() {
    Actions.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ width: "100%", textAlign: "left" }}
          onPress={() => this.props.navigation.navigate("Home", {})}
        >
          <View
            style={{
              marginTop: 20,
              textAlign: "left",
              width: 50
            }}
          >
            <Icon name="chevron-left" size={40} color="white" />
          </View>
        </TouchableOpacity>
        <Logo />
        <Form type={I18n.t("signup")} {...this.props} />
        <View style={styles.signupcontainer}>
          <Text style={styles.signUpText}>{I18n.t("signup_tagline")}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login", {})}
          >
            <Text style={styles.signUpButton}>{I18n.t("login")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2089dc",
    alignItems: "center",
    justifyContent: "center"
  },
  signupcontainer: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 16
  },
  signUpText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16
  },
  signUpButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
I18n.fallbacks = true;

I18n.translations = {
  en,
  hi
};
