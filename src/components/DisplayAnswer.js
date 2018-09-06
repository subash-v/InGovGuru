import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const time = new Date().toLocaleTimeString();
export default class DisplayAnswer extends Component {
  render() {
    return (
      <View>
        {this.props.answer.map(val => {
          return (
            <View id={val} key={val}>
              <View style={styles.container}>
                <Image style={styles.ProfileImage} source={val.profileImage} />
                <View>
                  <Text style={styles.ProfileName}>{val.Name}</Text>
                  <Text style={styles.subText}>{time}</Text>
                </View>
              </View>
              <Text style={styles.Answers}>{val.answer}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5
  },
  ProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    textAlign: "left"
  },
  ProfileName: {
    fontSize: 14,
    paddingLeft: 5,
    color: "#949090",
    fontWeight: "bold"
  },
  subText: {
    fontSize: 11,
    paddingLeft: 5,
    color: "#949090",
    fontWeight: "bold"
  },
  Answers: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingLeft: 25
  }
});
