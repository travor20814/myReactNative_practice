import {
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignSelf: 'stretch',
  },
});

function MainBoard(props) {
  const {
    children,
  } = props;

  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}

export default MainBoard;
