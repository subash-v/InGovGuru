import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import I18n from "react-native-i18n";
import en from "../components/en";
import hi from "../components/hi";
export default class App extends React.Component {
  render() {
    console.log("form", this.props.type);
    return (
      <View>
        <TextInput
          style={styles.inputBox}
          placeholder={I18n.t("email")}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          placeholder={I18n.t("password")}
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",

    textAlign: "center"
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#1a6eb0",
    borderRadius: 25,
    paddingVertical: 13,
    marginVertical: 16
  }
});
I18n.fallbacks = true;

I18n.translations = {
  en,
  hi
};
