import React, {
	Component,
	PropTypes as T,
} from 'react';
import {
	View,
	Text,
	Alert,
	TouchableOpacity,
	TouchableHighlight,
	ToastAndroid,
	Modal,
} from 'react-native';
import Login from './Login';

const styles = {
	wrapper: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	newPage: {
		color: '#55ACEE',
	},
};

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: 0,
			modalVisible: false,
		};
	}

	openPage() {
		this.props.navigator.push({
			title: 'Login',
			component: Login,
		});
	}

	alertDialog() {
		Alert.alert('Alert', null, [
      { text: 'confirm', onPress: () => this.openPage() },
      { text: 'cancel', onPress: () => ToastAndroid.show('cancel click', ToastAndroid.SHORT) },
    ]);
	}

	setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

	render() {
		return (
			<View style={styles.wrapper}>
				<Text>Index Page</Text>
				<TouchableOpacity onPress={() => this.openPage()}>
					<Text style={styles.newPage}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.alertDialog()}>
					<Text style={styles.newPage}>Jump alert</Text>
				</TouchableOpacity>
				<TouchableHighlight
					underlayColor='#4F20A4'
					onPress={() => this.openPage()}>
					<Text style={styles.newPage}>Login high</Text>
				</TouchableHighlight>
				<View style={{ marginTop: 22 }}>
	        <TouchableHighlight onPress={() => { this.setModalVisible(true) }}>
	          <Text>Show Modal</Text>
	        </TouchableHighlight>
					<Modal
	          animationType={"fade"}
	          transparent={false}
	          visible={this.state.modalVisible}
	          onRequestClose={() => { alert("Modal has been closed.") }}>
	         <View style={{ marginTop: 22 }}>
	          <View>
	            <Text>Hello World!</Text>
	            <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
	              <Text>Hide Modal</Text>
	            </TouchableHighlight>
	          </View>
	         </View>
	        </Modal>
	      </View>
			</View>
		);
	}
}

Index.PropTypes = {

};

export default Index;
