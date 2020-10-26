import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handleEvent = () => console.log("Test Cs");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handleEvent}>
        Hello React Native
      </Text>
      <Image
        source={{
          width: 300,
          height: 200,
          uri: "https://picsum.photos/200/300",
        }}
      ></Image>

      <Button
        title="Click Me"
        onPress={() =>
          // Alert.prompt(
          //   "Confirmation",
          //   "Kindly confirm your identity",
          //   (text) => console.log(text)
          // )
          Alert.alert("Confirmation", "Kindly confirm your identity", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "orange",
    backgroundColor: "white",
    fontSize: 20,
  },
});
