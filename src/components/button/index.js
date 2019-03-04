import React from 'react';
import {
	ViewPropTypes,
	TouchableOpacity,
	Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../text';
import { NixplayIcon } from '../nixplayIcon';

import { getButtonStyle, getTextStyle, getChildMargin } from './styles';


const ButtonText = (props) => {
	const { type, ...others } = props;
	return (
		<Text
			textStyle={type === 'inline' ? 'footnote' : 'title3'}
			style={getTextStyle(props)}
			{...others}
		/>
	);
};

ButtonText.propTypes = {
	type: PropTypes.string,
};

ButtonText.defaultProps = {
	type: '',
};

const ButtonIcon = (props) => {
	const { iconSize, ...others } = props;
	return (
		<NixplayIcon
			{...others}
			size={iconSize}
			style={getTextStyle(props)}
		/>
	);
};

ButtonIcon.propTypes = {
	iconSize: PropTypes.number,
};

ButtonIcon.defaultProps = {
	iconSize: 24,
};

const ButtonImageIcon = (props) => {
	const { iconSize, ...others } = props;
	return (
		<Image
			{...others}
			style={[getChildMargin(props), { width: iconSize, height: iconSize }]}
		/>
	);
};

ButtonImageIcon.propTypes = {
	iconSize: PropTypes.number,
};

ButtonImageIcon.defaultProps = {
	iconSize: 24,
};


export const Button = (props) => {
	const { children, style, ...others } = props;
	return (
		<TouchableOpacity
			{...others}
			activeOpacity={0.7}
			style={[getButtonStyle(props), style]}
		>
			{React.Children.map(props.children, (child, index) => {
				let iconSize = 24;
				if (child.props.size) {
					iconSize = child.props.size;
				} else if (props.type === 'inline') {
					iconSize = 18;
				} else if (props.size === 'large') {
					iconSize = 32;
				}
				const newProps = {
					type: props.type,
					btnColor: props.color,
					iconSize,
					index,
					textStyle: child.props.textStyle,
				};
				return React.cloneElement(child, newProps);
			})}
		</TouchableOpacity>
	);
};

Button.Icon = ButtonIcon;
Button.Text = ButtonText;
Button.ImageIcon = ButtonImageIcon;

Button.propTypes = {
	...ViewPropTypes,
	type: PropTypes.oneOf(['primary', 'secondary', 'inline', 'circle', 'square']),
	color: PropTypes.string,
	block: PropTypes.bool,
	shadow: PropTypes.oneOf([false, 'color', 'short', 'long']),
	size: PropTypes.oneOf(['default', 'small', 'large']),
	disabled: PropTypes.bool,
};

Button.defaultProps = {
	type: 'primary',
	color: 'blue',
	block: false,
	shadow: false,
	size: 'default',
	disabled: false,
};
