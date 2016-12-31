// @flow
import React, {Component} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export class TabScene1 extends Component<void, Props, void> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`tab scene1`}
        </Text>
      </View>
    );
  }
}
