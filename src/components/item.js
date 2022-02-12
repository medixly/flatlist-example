import { StyleSheet, View, Text, Dimensions } from "react-native";

const Item = ({ name, birthday, age }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        {name}
      </Text>
      <Text>Date of Birth: {birthday}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    marginBottom: Dimensions.get("window").height / 50,
    padding: 25,
    borderRadius: 15,
  },
});

export default Item;
