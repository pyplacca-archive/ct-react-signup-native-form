import React from 'react';
import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';


const variables = {
	primeColor: '#763dcc',
	spacing: 25
};

class SignupScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			password2: '',
		};
	};

	render () {

		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					margin: variables.spacing * 2,
					color: variables.primeColor,
				}}
			>
				<Text style={{
					marginVertical: variables.spacing * 2,
					color: variables.primeColor,
					fontSize: 40,
					fontWeight: 'bold'
				}}>
					Sign up
				</Text>

				{/* form inputs */}
				<TextInput
					placeholder="Username"
					value={this.state.username}
					onChangeText={username => this.setState({username})}
					style={[
						styles.input,
						styles.text, {
							marginBottom: variables.spacing * 2
						}
					]}
				/>
				<TextInput
					placeholder="Email"
					value={this.state.email}
					onChangeText={email => this.setState({email})}
					style={[
						styles.input,
						styles.text, {
							marginBottom: variables.spacing * 2
						}
					]}
				/>
				<TextInput
					placeholder="Password"
					value={this.state.password}
					secureTextEntry={true}
					onChangeText={password => this.setState({password})}
					style={[
						styles.input,
						styles.text, {
							marginBottom: variables.spacing * 2
						}
					]}
				/>
				<TextInput
					placeholder="Password again"
					value={this.state.password2}
					secureTextEntry={true}
					onChangeText={password2 => this.setState({password2})}
					style={[styles.text, styles.input]}
				/>

				{/* Signup button */}
				<TouchableOpacity style={[
					styles.allCenter, {
						paddingVertical: 15,
						marginVertical: variables.spacing * 2,
						backgroundColor: variables.primeColor,
						borderRadius: 10,
					}
				]}>
					<Text style={{
						color: '#fff',
						fontSize: 20,
						fontWeight: 'bold',
					}}>
						Sign up
					</Text>
				</TouchableOpacity>

				{/* bottom text */}
				<View style={[
					styles.allCenter, {
						flexDirection: 'row',
					}
				]}>
					<Text style={styles.text}>You already have an account?</Text>
					<Text style={[
						styles.text, {
							marginLeft: 7,
							color: variables.primeColor,
							fontWeight: 'bold'
						}
					]}>
						Log in
					</Text>
				</View>
			</ScrollView>
		)
	};
};

const styles = {
	text: {
		fontSize: 17,
	},

	input: {
		paddingBottom: 5,
		borderBottomColor: variables.primeColor,
		borderBottomWidth: 2,
	},

	allCenter: {
		justifyContent: 'center',
		alignItems: 'center',
	},
};


export default SignupScreen;
