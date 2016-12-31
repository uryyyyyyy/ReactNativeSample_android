// @flow
import React, {Component} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {Actions} from 'react-native-router-flux';

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

export class TopPage extends Component<void, Props, void> {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => Actions.counter()}
          title="counter"
          color="#841584"
        />
        <Button
          onPress={() => Actions.scene1()}
          title="scene1"
          color="#841584"
        />
        <Button
          onPress={() => Actions.tabbar()}
          title="tab bar"
          color="#841584"
        />
      </View>
    );
  }
}
