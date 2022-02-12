import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import Constants from "expo-constants";
import Item from "./components/item";

const data = [
  { name: "Michael Yi", birthday: "December 14th, 2004", age: 17 },
  { name: "Elon Musk", birthday: "December 15th, 2004", age: 18 },
  { name: "Sean Jason", birthday: "December 16th, 2004", age: 19 },
];

const App = () => {
  const renderItem = ({ item }) => (
    <Item name={item.name} birthday={item.birthday} age={item.age} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:
      Constants.statusBarHeight + Dimensions.get("window").height / 25,
    marginHorizontal: Dimensions.get("window").width / 10,
  },
});

export default App;
