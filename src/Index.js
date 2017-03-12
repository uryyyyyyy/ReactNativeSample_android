// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from 'react-native';
const {MyToastModule} = NativeModules;

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          title="Toast"
          onPress={() => MyToastModule.show('Awsome', MyToastModule.SHORT)}
        />
      </View>
    );
  }
}

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
