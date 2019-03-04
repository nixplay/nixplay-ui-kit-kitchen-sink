import React, { Component } from 'react';

import { ScrollView } from 'react-native';
import { Button } from '../components/button';
import { styles } from '../utils/styles';

export class Buttons extends Component {
	static navigationOptions = {
		title: 'Buttons',
	}

	render() {
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#AAAAAA' }} contentContainerStyle={{ paddingBottom: 30 }}>
				<Button
					style={styles.button}
					type="primary"
				>
					<Button.Text>CTA button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="primary"
				>
					<Button.Icon name="album" />
					<Button.Text>CTA button Icon Left</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="primary"
				>
					<Button.Text>CTA button Icon Right</Button.Text>
					<Button.Icon name="arrow-down" />
				</Button>
				<Button
					style={styles.button}
					type="primary"
					color="red"
				>
					<Button.Text>CTA button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="primary"
					color="green"
				>
					<Button.Text>CTA button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="primary"
				>
					<Button.Text>Primary button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="primary"
					color="red"
				>
					<Button.Text>Primary button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="primary"
					color="green"
				>
					<Button.Text>Primary button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="secondary"
				>
					<Button.Text>Secondary button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="secondary"
					color="red"
				>
					<Button.Text>Secondary button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="secondary"
					color="green"
				>
					<Button.Text>Secondary button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="inline"
				>
					<Button.Text>Inline button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="inline"
				>
					<Button.Icon name="album" />
					<Button.Text>CTA button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="inline"
					color="red"
				>
					<Button.Text>Inline button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="inline"
					color="green"
				>
					<Button.Text>Inline button</Button.Text>
				</Button>
				<Button
					style={styles.button}
					type="circle"
					color="white"
				>
					<Button.Icon name="app-add" />
				</Button>
				<Button
					style={styles.button}
					type="square"
					color="transparent"
				>
					<Button.Icon name="photo-add" />
				</Button>
				<Button
					style={styles.button}
					type="circle"
				>
					<Button.Icon name="photo-send" />
				</Button>
			</ScrollView>
		);
	}
}
