import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { TabBar } from '../../components/tabBar';

import { Tab1 } from './tab1';
import { Tab2 } from './tab2';
import { Tab3 } from './tab3';
import { Tab4 } from './tab4';
import { TabMiddle } from './tabMiddle';

export const TabBarView = createBottomTabNavigator({
	Tab1: {
		screen: Tab1,
		navigationOptions: {
			tabBarIcon: ({ focused }) => (focused ? 'nixplay-solid' : 'nixplay'),
		},
	},
	Tab2: {
		screen: Tab2,
		navigationOptions: {
			tabBarIcon: ({ focused }) => (focused ? 'photos-solid' : 'photos'),
		},
	},
	TabOtherStack: {
		screen: TabMiddle,
		navigationOptions: {
			tabBarIcon: 'plus-thick',
		},
	},
	Tab3: {
		screen: Tab3,
		navigationOptions: {
			tabBarIcon: ({ focused }) => (focused ? 'friends-solid' : 'friends'),
		},
	},
	Tab4: {
		screen: Tab4,
		navigationOptions: {
			tabBarIcon: ({ focused }) => (focused ? 'more-solid' : 'more'),
		},
	},
}, {
	initialRouteName: 'Tab1',
	tabBarComponent: (props) => (
		<TabBar {...props} rounded={['TabOtherStack']} />
	),
});
