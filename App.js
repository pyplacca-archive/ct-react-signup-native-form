import React from 'react';
import { Statusbar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import SignupScreen from './screens/Signup'

export default function App() {
	return (
		<View>
			<StatusBar
				style="light"
				backgroundColor='#763dcc'
				// hidden={true}
			/>
			<SignupScreen />
		</View>
	);
}
