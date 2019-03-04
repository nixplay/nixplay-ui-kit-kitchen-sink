import React, { Component } from 'react';

import { View } from 'react-native';
import { Text } from '../../components/text';

export class TabMiddle extends Component {
	static navigationOptions = {
		title: 'Tab Middle Button',
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>This is tab Middle Button</Text>
			</View>
		);
	}
}
