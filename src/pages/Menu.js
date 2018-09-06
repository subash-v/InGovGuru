import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#2089dc" }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Language")}
        >
          <View style={styles.row}>
            <Text style={styles.text}> LANGUAGE</Text>
            <Icon name="chevron-right" size={40} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "rgba(255,255,255,0.5)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  }
});
