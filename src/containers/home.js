import React, { Component } from 'react';

import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from '../components/button';
import { styles } from '../utils/styles';

export class Home extends Component {
	static navigationOptions = {
		title: 'Nixplay UI Kit',
	}

	static propTypes = {
		navigation: PropTypes.object.isRequired,
	}

	render() {
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#EEE' }}>
				<Button
					style={styles.button}
					type="primary"
					onPress={() => this.props.navigation.push('Buttons')}
				>
					<Button.Text>Buttons</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="secondary"
					onPress={() => this.props.navigation.push('TabBarView')}
				>
					<Button.Text>TabBar</Button.Text>
				</Button>
			</ScrollView>
		);
	}
}
