import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import DisplayAnswer from "./DisplayAnswer";
import DisplayQuestion from "./DisplayQuestion";
import AnswerPopup from "./AnswerPopup";
import I18n from "react-native-i18n";
import en from "../components/en";
import hi from "./hi";

export default class Scrollbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: false,
      readmore: "showAll",
      answerId: 0,
      id: 0
    };
  }
  onPress = id => {
    this.setState({ id: id });
  };
  openAnswerHolder = id => {
    this.setState({ show: !this.state.show });
    this.setState({ answerId: id });
  };

  render() {
    console.log("header", this.props.data);
    return (
      <View style={styles.BackgroundColor}>
        {this.props.data &&
          this.props.data.map(i => {
            return (
              <View id={i} key={i} style={styles.BackgroundColor}>
                <View key={i} style={styles.container}>
                  <DisplayQuestion question={i} />

                  <Text style={styles.AnswerLength}>
                    {i.answer.length}
                    {I18n.t("answers")}
                  </Text>

                  {this.state.id != i && (
                    <View style={styles.AnswerDisplay}>
                      <DisplayAnswer answer={i.answer.slice(0, 2)} />

                      {i.answer.length > 2 && (
                        <Text
                          onPress={() => this.onPress(i)}
                          style={styles.AnswerReadMore}
                        >
                          {I18n.t("readmore")}
                        </Text>
                      )}
                    </View>
                  )}

                  {this.state.id == i && <DisplayAnswer answer={i.answer} />}
                  <View style={styles.AnswerMenu} />
                  <AnswerPopup id={i} />
                </View>
              </View>
            );
          })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  BackgroundColor: { backgroundColor: "#2089dc" },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#222222",
    height: "auto",
    width: "auto",
    borderStyle: "solid",
    margin: 5,
    padding: 15,
    backgroundColor: "#ffffff"
  },
  AnswerLength: {
    color: "#949090",
    textDecorationLine: "underline"
  },
  AnswerDisplay: {
    height: "auto",
    width: "auto",

    paddingTop: 5
  },
  AnswerReadMore: {
    height: "auto",
    width: "auto",
    padding: 10,
    color: "blue",
    textAlign: "right"
  },
  AnswerMenu: {
    width: "100%",
    height: "auto",
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    borderBottomRightRadius: 5,
    padding: 5
  }
});

I18n.fallbacks = true;

I18n.translations = {
  en,
  hi
};
