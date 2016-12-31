// @flow

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {CounterState} from "./Entities";
import {ActionDispatcher} from "./Actions";

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

type Props = {
  value: CounterState;
  actions: ActionDispatcher;
};

export class Counter extends Component<void, Props, void> {
  render() {
    const loading = (this.props.value.loadingCount === 0) ? null : <Text style={styles.welcome}>Loading...</Text>;
    return (
      <View style={styles.container}>
        {loading}
        <Text style={styles.welcome}>
          {`Count: ${this.props.value.num}`}
        </Text>
        <Button
          onPress={() => this.props.actions.increment(3)}
          title="Increment 3"
          color="#841584"
        />
        <Button
          onPress={() => this.props.actions.decrement(2)}
          title="decrement 2"
          color="#841584"
        />
        <Button
          onPress={() => this.props.actions.fetchAmount()}
          title="async increment 100"
          color="#841584"
        />
      </View>
    );
  }
}
