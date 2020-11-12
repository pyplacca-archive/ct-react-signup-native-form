import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import SignupScreen from './screens/Signup'

export default function App() {
	return (
		<View style={{
			flexGrow: 1,
			justifyContent: 'space-between',
		}}>
			<StatusBar
				style="light"
				backgroundColor='#763dcc'
				// hidden={true}
			/>
			<SignupScreen />

			{/* Signature */}
			<Text style={{
				width: '100%',
				paddingVertical: 9,
				textAlign: 'center',
				backgroundColor: 'orangered',
				color: '#fff'
			}}>
				David Placca - Codetrain Gen 14
			</Text>


		</View>
	);
}
