import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class LanguageSeletion extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#2089dc" }}>
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.text}>ENGLISH</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.text}>HINDI</Text>
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
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderTopWidth: 1,
    borderBottomColor: "black"
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  },
  separator: {
    marginLeft: 20,
    flex: 1,
    backgroundColor: "black",
    height: StyleSheet.hairlineWidth
  }
});
