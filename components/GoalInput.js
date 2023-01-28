import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput({ onAddGoal, visible, closeAddGoalModal }) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/rocket-dynamic-color.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your goal"
          value={enteredGoal}
          onChangeText={goalInputHandler}
          placeholderTextColor="#fff"
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
              color="#41fa56"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={closeAddGoalModal}
              color="#f88b4b"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(90deg, rgb(123, 91, 199) 0%, rgb(234, 56, 141) 100%)",
    padding: 16,
  },
  textInput: {
    width: "100%",
    borderColor: "#e6398f",
    backgroundColor: "#e6398f",
    borderWidth: 1,
    borderRadius: 7,
    alignItems: "center",
    padding: 8,
    marginRight: 8,
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});
