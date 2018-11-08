import React from "react";

import { View, Text, Button } from "react-native";

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="分享"
        color="#f00"
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
