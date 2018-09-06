import React, { Component } from "react";
import { ScrollView } from "react-native";
import QuesAns from "./QuesAns";
export default class Scrollbar extends Component {
  render() {
    console.log("data", this.props.Data);
    return (
      <ScrollView>
        <QuesAns data={this.props.Data} />
      </ScrollView>
    );
  }
}
