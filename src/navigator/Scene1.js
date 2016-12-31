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

export class Scene1 extends Component<void, Props, void> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Scene1`}
        </Text>
        <Button
          onPress={() => Actions.scene2()}
          title="Scene2に進む"
          color="#841584"
        />
        <Button
          onPress={() => Actions.popup_root()}
          title="Scene2のPop Up"
          color="#841584"
        />
      </View>
    );
  }
}
