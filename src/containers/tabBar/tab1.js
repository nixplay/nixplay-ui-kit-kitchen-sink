import React, { Component } from 'react';

import { View } from 'react-native';
import { Text } from '../../components/text';

export class Tab1 extends Component {
	static navigationOptions = {
		title: 'Tab 1',
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>This is tab 1</Text>
			</View>
		);
	}
}
