/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
  Platform,
  TouchableOpacity,
  Navigator,
  View,
  Text,
} from 'react-native';
import Index from './Index.js';

const styles = {
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
  navBar: {
    alignItems: 'center',
    backgroundColor: '#55ACEE',
    shadowOffset: {
      width: 1,
      height: 0.5,
    },
    shadowColor: '#55ACEE',
    shadowOpacity: 0.8,
  },
  scene: {
    paddingTop: (Platform.OS === 'android' ? 66 : 74),
  },
  title: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '400',
  },
};

const defaultRoute = {
  component: Index,
};

export default class Navigation extends Component {
  renderScene(route, navigator) {
    const RouteView = route.component;

    return (
      <RouteView {...route.params} navigator={navigator} />
    );
  }

  renderNavBar() {
    const routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if (index > 0) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>{'< Back'}</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.button}>
            <Text style={styles.buttonText}>Logo</Text>
          </TouchableOpacity>
        );
      },
      RightButton(route, navigator, index, navState) {
        if (index > 0 && route.rightButton) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>123</Text>
            </TouchableOpacity>
          );
        }

        return null;
      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : 'My app'}</Text>
          </View>
        );
      },
    };

    return (
      <Navigator.NavigationBar
        style={styles.navBar}
        routeMapper={routeMapper} />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this.renderScene}
        sceneStyle={styles.scene}
        navigationBar={this.renderNavBar()} />
    );
  }
}
