import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, id, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(id)}
        android_ripple={{ color: "#21064" }}
        // style={({ pressed }) => [
        //   {
        //     backgroundColor: pressed ? "#ccc" : "#ccc",
        //   },
        // ]}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: "#f3effd",
    borderRadius: 7,
  },
  goalText: {
    padding: 10,
  },
});
