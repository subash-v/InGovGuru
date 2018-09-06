import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Icon } from "react-native-elements";
import Logo from "../components/Logo";
import Form from "../components/Form";
import { Actions } from "react-native-router-flux";
import I18n from "react-native-i18n";
import en from "../components/en";
import hi from "../components/hi";
export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  signup() {
    Actions, signup();
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

        <Form type={I18n.t("login")} />
        <View style={styles.signupcontainer}>
          <Text style={styles.signUpText}>{I18n.t("account_Tagline")}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Signup", {})}
          >
            <Text style={styles.signUpButton}>{I18n.t("signup")}</Text>
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
    justifyContent: "center",
    paddingVertical: 10
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
