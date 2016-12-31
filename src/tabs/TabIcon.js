//@flow
import React, {Component} from "react";
import {Provider} from "react-redux";
import {StyleSheet, Text, View, Button} from "react-native";

export class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
    );
  }
}