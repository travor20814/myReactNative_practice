import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Welcome from './Welcome';
import * as LoginActions from '../actions/Login.js';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: null,
			age: null,
		};
	}

	openPage(name) {
		this.props.login(name);

		this.props.navigator.push({
			component: Welcome,
			params: {
				changeMyAge: (age) => {
					this.setState({ age });
				},
			}
		});
	}

	render() {
		const {
			name,
		} = this.state;

		return (
			<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
				<Text>Form Page</Text>
				<TextInput
					value={name}
					onChangeText={name => this.setState({ name })}
					placeholder={'Enter your name'}
					style={{ height: 40, width: 200 }} />
				<Text>My age: {this.state.age ? this.state.age : 'Unknown'}</Text>
				<TouchableOpacity onPress={() => this.openPage(name)}>
					<Text style={{ color: '#55ACEE' }}>Login!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default connect(
	() => ({

  }),
  dispatch => bindActionCreators({
		...LoginActions,
  }, dispatch),
)(Login);
