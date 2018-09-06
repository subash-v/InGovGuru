import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const time = new Date().toLocaleTimeString();
export default class DisplayQuestion extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image
            style={styles.ProfileImage}
            source={this.props.question.profileImage}
          />

          <View>
            <Text style={styles.ProfileName}>{this.props.question.Name}</Text>
            <Text style={styles.Time}>{time}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.Questions}>{this.props.question.question}?</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderBottomRightRadius: 5,
    padding: 5
  },
  ProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 1
  },
  ProfileName: {
    fontSize: 14,
    color: "#949090",
    fontWeight: "bold",
    paddingHorizontal: 5
  },
  Time: {
    fontSize: 11,
    paddingLeft: 5,
    color: "#949090",
    fontWeight: "bold"
  },
  Questions: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
