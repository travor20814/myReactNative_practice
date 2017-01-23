import {
  StyleSheet,
  View,
  Text,
  DrawerLayoutAndroid,
  ListView,
  Picker,
  Button,
  Alert,
} from 'react-native';
import React, {
	Component,
	PropTypes as T,
} from 'react';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignSelf: 'stretch',
  },
  drawerList: {
    backgroundColor: '#9b9b9b',
  },
  listItem: {
    color: '#a52a2a',
    marginBottom: 10,
  },
});

class MainBoard extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(['Button 1', 'Button 2']),
      language: 'java',
    };
  }

  onPressDrawerButton() {
    Alert.alert('Button has been pressed!');
  }

  render() {
    const {
      children,
    } = this.props;

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ListView
          style={styles.drawerList}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Button
            onPress={() => this.onPressDrawerButton()}
            style={styles.listItem}
            title={rowData}
            accessibilityLabel="Learn more" />} />
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.wrapper}>
          {children}
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default MainBoard;
