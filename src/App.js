import React from 'react';
import { YellowBox, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SafeArea from 'react-native-safe-area';
import { Home } from './containers/home';
import { Buttons } from './containers/Buttons';
import { TabBarView } from './containers/tabBar';


// https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-380648083
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// https://stackoverflow.com/questions/50618519/react-native-warning-rctc-module-not-exported
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
const headerSetting = {
	headerMode: 'screen',
};
const RootStack = createStackNavigator(
	{
		Home,
		Buttons,
		TabBarView,
	},
	{
		initialRouteName: 'Home',
		...headerSetting,
	},
);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			safeAreaInsets: {
				marginBottom: 0,
				marginLeft: 0,
				marginRight: 0,
			},
		};
		this.getSafeMargin = this.getSafeMargin.bind(this);
	}

	componentDidMount() {
		SafeArea.addEventListener('safeAreaInsetsForRootViewDidChange', this.onSafeAreaInsetsForRootViewChange);
	}

	componentWillUnmount() {
		// Remove event listener
		SafeArea.removeEventListener('safeAreaInsetsForRootViewDidChange', this.onSafeAreaInsetsForRootViewChange);
	}

	onSafeAreaInsetsForRootViewChange(result) {
		// Called every time that safe area insets changed
		this.setState({
			safeAreaInsets: result.safeAreaInsets,
		});
	}

	getSafeMargin() {
		return {
			marginBottom: this.state.safeAreaInsets.bottom,
			marginLeft: this.state.safeAreaInsets.left,
			marginRight: this.state.safeAreaInsets.right,
		};
	}

	render() {
		return (
			<View style={{ flex: 1, position: 'relative' }}>
				<RootStack style={this.getSafeMargin()} />
			</View>
		);
	}
}
