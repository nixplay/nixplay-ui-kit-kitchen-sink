import React, { Component } from 'react';

import { View } from 'react-native';
import { Text } from '../../components/text';

export class Tab3 extends Component {
	static navigationOptions = {
		title: 'Tab 3',
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>This is tab 3</Text>
			</View>
		);
	}
}
