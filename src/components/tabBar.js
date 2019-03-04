import React, { Component } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	SafeAreaView,
	Platform,
} from 'react-native';
import _ from 'lodash';
import ViewOverflow from 'react-native-view-overflow';
import PropTypes from 'prop-types';
import { Text } from './text';
import { NixplayIcon } from './nixplayIcon';
import { color } from '../utils/color';

const styles = StyleSheet.create({
	border: {
		borderTopWidth: 1,
		borderTopColor: color.mistBlue03,
	},
	outerContainer: {
		backgroundColor: color.white,
	},
	container: {
		flexDirection: 'row',
		backgroundColor: color.white,
		zIndex: 99,
	},
	buttonContainer: {
		flex: 1,
		height: 49,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	button: {
		paddingTop: 5,
		paddingBottom: 3,
	},
	buttonContent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonRound: {
		height: 68,
		width: 68,
		paddingTop: 0,
		paddingBottom: 0,
		borderRadius: 34,
		marginTop: -11,
		backgroundColor: color.white,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOffset: { width: 0, height: -1 },
		shadowColor: color.mistBlue03,
		shadowOpacity: 0.8,
		shadowRadius: 4,
		elevation: 2,
	},
	circleLine: {
		flex: 0,
		height: 62,
		width: 62,
		paddingTop: 14,
		borderRadius: 31,
		borderWidth: 1,
		borderColor: color.mistBlue03,
	},
	badge: {
		backgroundColor: color.red,
		width: 12,
		height: 12,
		borderRadius: 6,
		position: 'absolute',
		top: 0,
		right: 0,
	},
	counterBadge: {
		backgroundColor: color.red,
		width: 20,
		height: 20,
		borderRadius: 10,
		position: 'absolute',
		top: 0,
		right: 0,
	},
	counterBadgeText: {
		flex: 1,
		alignItems: 'center',
	},
	action: {
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'center',
		paddingVertical: 15,
		// marginHorizontal: 16,
		borderTopWidth: 1,
		borderColor: color.mistBlue03,
	},
	lastAction: {
		borderBottomWidth: 0,
		paddingBottom: 0,
	},
	optionLabelCenter: {
		flex: 1,
		textAlign: 'center',
	},
});

export class TabBar extends Component {
	render() {
		const {
			navigation,
			renderIcon,
			getLabelText,
			rounded,
			customAction,
			friendBadge,
			isConnected,
		} = this.props;
		const { routes } = navigation.state;
		const isiOS = Platform.OS === 'ios';
		const Wrapper = isiOS ? SafeAreaView : ViewOverflow;

		return (
			<Wrapper style={[isiOS && styles.border, styles.outerContainer]}>
				{!isiOS && <View style={styles.border} />}

				<ViewOverflow style={styles.container}>
					{routes.map((route, index) => {
						const { routeName } = route;
						const isActive = index === navigation.state.index;
						const isRounded = rounded.indexOf(routeName) >= 0;
						const iconName = renderIcon({ route, focused: isActive });
						const labelText = getLabelText({ route });
						const hasFriendBadge = (routeName === 'Friends') ? friendBadge : false;
						let textColor = 'mistBlue04';
						if (isActive || (isRounded && isConnected)) {
							textColor = 'blue';
						} else if (isRounded && !isConnected) {
							textColor = 'grey03';
						} else if (!isRounded && !isActive) {
							textColor = 'mistBlue04';
						}

						const onPress = () => {
							if (customAction[routeName]) {
								customAction[routeName](this.defaultDialogue);
							} else { navigation.navigate(routeName); }
						};
						return (
							<ViewOverflow style={[styles.buttonContainer]} key={routeName}>


								<TouchableOpacity
									activeOpacity={isRounded ? 1 : 0.7}
									onPress={onPress}
									style={[styles.button, isRounded && styles.buttonRound]}
								>
									<View style={[styles.buttonContent, isRounded && styles.circleLine]}>
										<NixplayIcon name={iconName} size={28} color={color[textColor]} />
										{!isRounded && <Text textStyle="description" color={textColor} textSize="default">{_.isFunction(labelText) ? labelText() : labelText}</Text>}
										{(hasFriendBadge) && <View style={styles.badge} />}

									</View>
								</TouchableOpacity>
							</ViewOverflow>
						);
					})}
				</ViewOverflow>
			</Wrapper>
		);
	}
}

TabBar.propTypes = {
	navigation: PropTypes.object.isRequired,
	renderIcon: PropTypes.func.isRequired,
	getLabelText: PropTypes.func.isRequired,
	rounded: PropTypes.array,
	customAction: PropTypes.object,
	friendBadge: PropTypes.bool,
	isConnected: PropTypes.bool,
};

TabBar.defaultProps = {
	friendBadge: false,
	rounded: [],
	customAction: {},
	isConnected: true,
};
