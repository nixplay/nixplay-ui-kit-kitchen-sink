import React from 'react';
import {
	Text as ReactText,
	StyleSheet,
	Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { color } from '../utils/color';


// Reference for letterSpacing
// https://medium.com/@knoland/typography-in-react-native-f09c43b5b435
export const textStyles = StyleSheet.create({
	boldTitle: {
		fontSize: 34,
		lineHeight: 41,
		letterSpacing: 0.374,
		fontWeight: '700',
	},
	largeTitle: {
		fontSize: 34,
		lineHeight: 41,
		letterSpacing: 0.374,
	},
	title1: {
		fontSize: 28,
		lineHeight: 34,
		letterSpacing: 0.364,
		fontWeight: '300',
	},
	title2: {
		fontSize: 22,
		lineHeight: 28,
		letterSpacing: 0.352,
	},
	title3: {
		fontSize: 20,
		lineHeight: 25,
		letterSpacing: 0.38,
	},
	headline: {
		fontSize: 17,
		lineHeight: 22,
		letterSpacing: -0.408,
		fontWeight: '600',
	},
	body: {
		fontSize: 17,
		lineHeight: 22,
		letterSpacing: -0.408,
	},
	callout: {
		fontSize: 16,
		lineHeight: 21,
		letterSpacing: -0.32,
	},
	subhead: {
		fontSize: 15,
		lineHeight: 20,
		letterSpacing: -0.24,
	},
	footnote: {
		fontSize: 13,
		lineHeight: 18,
		letterSpacing: -0.078,
	},
	caption1: {
		fontSize: 12,
		lineHeight: 16,
	},
	caption2: {
		fontSize: 11,
		lineHeight: 13,
		letterSpacing: 0.066,
	},
	description: {
		fontSize: 10,
		lineHeight: 13,
		letterSpacing: 0.07,
	},
});

export const textStylesSmall = StyleSheet.create({
	boldTitle: { fontSize: 33 },
	largeTitle: { fontSize: 33 },
	title1: { fontSize: 27 },
	title2: { fontSize: 21 },
	title3: { fontSize: 19 },
	headline: { fontSize: 16 },
	body: { fontSize: 16 },
	callout: { fontSize: 15 },
	subhead: { fontSize: 14 },
	footnote: { fontSize: 12 },
	caption1: { fontSize: 11 },
	caption2: { fontSize: 10 },
	description: { fontSize: 10 },
});


// Hack to fix android text got cut
// https://github.com/facebook/react-native/issues/15114#issuecomment-364458149
const styles = StyleSheet.create({
	text: {
		...(Platform.OS === 'android' ? { fontFamily: 'Roboto' } : {}
		),
	},
});


export const Text = (props) => {
	const textStyle = props.textStyle && textStyles[props.textStyle] ?
		props.textStyle : 'body';
	const textColor = props.color && color[props.color] ?
		color[props.color] : props.color;
	const isSmaller = (TextService.locale === 'de' && props.textSize !== 'default') || // eslint-disable-line no-use-before-define
		props.textSize === 'small';
	return (
		<ReactText
			{...props}
			style={[
				styles.text,
				textStyles[textStyle],
				isSmaller && textStylesSmall[textStyle],
				{ color: textColor },
				props.style,
			]}
		>
			{React.Children.map(props.children, (child) => (
				(child && child.type === Text) ?
					React.cloneElement(child, {
						textStyle: child.props.textStyle || props.textStyle,
						color: child.props.color || props.color,
						size: child.props.textSize || props.textSize,
					}) :
					child
			))}
		</ReactText>
	);
};

Text.propTypes = {
	textStyle: PropTypes.string,
	color: PropTypes.string,
	textSize: PropTypes.oneOf(['default', 'small']),
	style: PropTypes.any,
	children: PropTypes.any,
};

Text.defaultProps = {
	textStyle: null,
	color: null,
	textSize: null,
	style: null,
	children: null,
};


class Service {
	constructor() {
		this.locale = 'en';
		this.texts = {
			loading: 'Loading...',
			playlistFull: 'Playlist Full',
		};
	}

	setLocale(locale) {
		[this.locale] = locale.split('-');
	}

	setText(texts) {
		this.texts = texts;
	}
}

export const TextService = new Service();
