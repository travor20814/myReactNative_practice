import React, {
	Component,
	PropTypes as T,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	TextInput,
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';

const styles = {
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
	},
};

class Welcome extends Component {
	backward() {
		this.props.navigator.pop();
	}

	render() {
		const {
			userName,
		} = this.props;

		return (
			<View style={styles.wrapper}>
				<KeyboardAvoidingView style={styles.wrapper} behavior={'padding'}>
					<Text>Welcome Page</Text>
					<Text>Welcome to Navigation! {userName}</Text>
					<TextInput
						onChangeText={age => this.props.changeMyAge(age) }
						keyboardType="numeric"
						placeholder={'Enter your age:'}
						style={{ height: 40, width: 200 }} />
					<TouchableOpacity onPress={() => this.backward()}>
						<Text style={{ color: '#55ACEE' }}>Save my age</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

Welcome.PropTypes = {
	userName: T.string,
};

export default connect(
	state => ({
		userName: state.Login.userName,
	}),
	dispatch => bindActionCreators({}, dispatch),
)(Welcome);
