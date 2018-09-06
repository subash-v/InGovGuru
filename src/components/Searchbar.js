import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import QuestionPopup from "./QuestionPopup";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "#2089dc",
      opacity: 0.5
    };
  }
  onfocus = () => {
    this.setState({ backgroundColor: "#ffffff", opacity: 1 });
  };
  onblur = () => {
    this.setState({ backgroundColor: "#2089dc", opacity: 0.5 });
  };
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" color="white" size={20} paddingTop={5} />
          <TextInput
            style={{
              width: 280,
              height: "auto",
              opacity: this.state.opacity,
              backgroundColor: this.state.backgroundColor,
              shadowColor: "white",
              borderWidth: 0,
              padding: 5,
              textAlign: "left",
              fontSize: 14
            }}
            placeholder={this.props.placeholder}
            placeholderStyle={{ fontSize: 14 }}
            placeholderTextColor="white"
            onFocus={() => this.onfocus()}
            onBlur={() => this.onblur()}
          />
        </View>

        <QuestionPopup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    backgroundColor: "#2089dc",
    height: "auto",
    width: "100%",
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderStyle: "solid",
    borderColor: "#2089dc",
    justifyContent: "space-between"
  },

  searchContainer: {
    display: "flex",
    flexDirection: "row"
  }
});
