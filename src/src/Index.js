//@flow
import React, {Component} from "react";
import Counter from "./counter/Root";
import {Provider} from "react-redux";
import store from "./Store";
import {Scene, Router} from "react-native-router-flux";
import {TopPage} from "./TopPage";
import {Scene1} from "./navigator/Scene1";
import {Scene2} from "./navigator/Scene2";
import {StyleSheet, Text, View, Button} from "react-native";
import {TabScene2} from "./tabs/TabScene2";
import {TabScene1} from "./tabs/TabScene1";
import {TabIcon} from "./tabs/TabIcon";
import {TabNextScene} from "./tabs/TabNextScene";

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: 'rgb(50, 207, 202)',
  },
});

export class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              initial
              key="topPage"
              component={TopPage}
              title="Login"
            />
            <Scene
              key="counter"
              component={Counter}
              title="Counter"
            />
            <Scene
              key="scene1"
              component={Scene1}
              title="Scene1"
            />
            <Scene
              key="scene2"
              component={Scene2}
              title="Scene2"
            />
            <Scene key="popup_root" direction="vertical">
              <Scene
                initial
                key="scene2_popup"
                component={Scene2}
                title="Scene2（pop up）"
              />
            </Scene>

            <Scene
              key="tabbar"
              tabs
              tabBarStyle={styles.tabBar}>
              <Scene
                key="tabScene1"
                initial
                component={TabScene1}
                title="TabScene1"
                icon={TabIcon}
              />
              <Scene key="tabbar2_root" title="tabbarNav" icon={TabIcon}>
                <Scene
                  key="tabScene2"
                  component={TabScene2}
                  title="TabScene2"
                />
                <Scene
                  key="tabNextScene"
                  component={TabNextScene}
                  title="TabScene3"
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
