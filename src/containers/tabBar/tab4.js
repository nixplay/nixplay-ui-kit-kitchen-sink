import React, { Component } from 'react';

import { View } from 'react-native';
import { Text } from '../../components/text';

export class Tab4 extends Component {
	static navigationOptions = {
		title: 'Tab 4',
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>This is tab 4</Text>
			</View>
		);
	}
}
