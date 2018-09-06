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
      {text != "Submit" && (
        <View style={styles.AnswerButton}>
          <Icon name={icon} size={20} />
          <Text style={styles.AnswerButtonText}>{I18n.t("answer")}</Text>
        </View>
      )}
      {text == "Submit" && (
        <View style={styles.AnswerSubmit}>
          <Button
            buttonStyle={styles.AnswerSubmitButton}
            title={I18n.t("submit")}
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
        placeholder={I18n.t("enter_answer")}
        numberOfLines={3}
        multiline={3}
        maxLength={120}
      />
      {this._renderButton("", "Submit", () =>
        this.setState({ visibleModal: null })
      )}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this._renderButton("create", "Answer", () =>
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
  AnswerButton: {
    flexDirection: "row",
    padding: 5
  },
  AnswerButtonText: { fontSize: 16, paddingTop: 3 },
  AnswerSubmit: {
    position: "absolute",
    right: 50,
    bottom: -5
  },
  AnswerSubmitButton: {
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
