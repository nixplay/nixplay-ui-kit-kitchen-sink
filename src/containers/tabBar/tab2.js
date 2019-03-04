import React, { Component } from 'react';

import { View } from 'react-native';
import { Text } from '../../components/text';

export class Tab2 extends Component {
	static navigationOptions = {
		title: 'Tab 2',
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>This is tab 2</Text>
			</View>
		);
	}
}
