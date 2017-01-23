import React, {
	Component,
	PropTypes as T,
} from 'react';
import {
	View,
	Text,
	Alert,
	TouchableOpacity,
	ToastAndroid,
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
			</View>
		);
	}
}

Index.PropTypes = {

};

export default Index;
