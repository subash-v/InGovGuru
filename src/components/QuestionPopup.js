import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Icon, Button } from "react-native-elements";
import Modal from "react-native-modal";
import Textarea from "react-native-textarea";
import I18n from "react-native-i18n";
import en from "../components/en";
import hi from "./hi";
export default class Example extends Component {
  state = {
    visibleModal: null
  };

  _renderButton = (icon, text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      {text != "Post" && (
        <View style={styles.AddQuestionButton}>
          <Icon name={icon} size={20} color="white" />
          <Text style={styles.AddQuestionButtonName}>{I18n.t("add")}</Text>
        </View>
      )}
      {text == "Post" && (
        <View style={styles.QuestionPostButtonContainer}>
          <Button
            buttonStyle={styles.QuestionPostButton}
            title={I18n.t("submit")}
            backgroundColor={"white"}
            onPress={onPress}
          />
        </View>
      )}
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={{ position: "absolute", bottom: 0, top: 2, right: 5 }}
        onPress={() => this.setState({ visibleModal: null })}
      >
        <Icon
          name="close"
          size={25}
          color={"black"}
          type="material-community"
        />
      </TouchableOpacity>

      <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        placeholder={I18n.t("question")}
        numberOfLines={3}
        multiline={3}
        maxLength={120}
      />
      {this._renderButton("", "Post", () =>
        this.setState({ visibleModal: null })
      )}
    </View>
  );

  render() {
    console.log("thi", this.props);
    return (
      <View style={styles.container}>
        {this._renderButton("add-circle", "Add", () =>
          this.setState({ visibleModal: 1 })
        )}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  textareaContainer: {
    height: 180,
    padding: 5
  },
  textarea: {
    textAlignVertical: "top",
    height: 170,
    fontSize: 14,
    color: "#000000"
  },
  AddQuestionButton: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 2
  },
  AddQuestionButtonName: {
    fontSize: 14,
    color: "white",
    paddingTop: 2
  },
  QuestionPostButtonContainer: {
    position: "absolute",
    right: 50,
    bottom: -5
  },
  QuestionPostButton: {
    borderRadius: 25,
    fontSize: 12,
    paddingVertical: 3,
    paddingHorizontal: 10
  }
});

I18n.fallbacks = true;

I18n.translations = {
  en,
  hi
};
