import _ from 'lodash';
import { StyleSheet } from 'react-native';
import { color } from '../../utils/color';


const shapeStyles = StyleSheet.create({
	button: {
		height: 44,
		paddingLeft: 22,
		paddingRight: 22,
		borderWidth: 1,
		borderRadius: 22,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonBlock: {
		flex: 1,
	},
	buttonPrimary: {},
	buttonSecondary: {},
	buttonShadowColor: {
		shadowOffset: { width: 0, height: 6 },
		shadowColor: color.blue,
		shadowOpacity: 0.4,
		shadowRadius: 10,
		elevation: 4,
	},
	buttonShadowShort: {
		shadowOffset: { width: 0, height: 1 },
		shadowColor: color.black,
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
	},
	buttonShadowLong: {
		shadowOffset: { width: 0, height: 4 },
		shadowColor: color.mistBlue04,
		shadowOpacity: 0.3,
		shadowRadius: 6,
		elevation: 4,
	},
	buttonInline: {
		height: 28,
		paddingLeft: 14,
		paddingRight: 14,
		borderRadius: 14,
	},
	buttonCircle: {
		height: 56,
		width: 56,
		borderRadius: 28,
		paddingLeft: 0,
		paddingRight: 0,
	},
	buttonCircleSmall: {
		height: 48,
		width: 48,
		borderRadius: 24,
	},
	buttonCircleLarge: {
		height: 64,
		width: 64,
		borderRadius: 32,
	},
	buttonSquare: {
		height: 56,
		width: 56,
		borderRadius: 10,
		paddingLeft: 0,
		paddingRight: 0,
		borderWidth: 1,
	},
	buttonText: {
		textAlign: 'center',
	},
	textInline: {
		fontWeight: '600',
	},
	margin: {
		marginLeft: 8,
	},
	marginInline: {
		marginLeft: 5,
	},
});

const colorStyles = {
	buttonPrimaryBlue: { backgroundColor: color.blue, borderColor: color.blue },
	textPrimaryBlue: { color: color.white },
	buttonPrimaryRed: { backgroundColor: color.red, borderColor: color.red },
	textPrimaryRed: { color: color.white },
	buttonPrimaryGreen: { backgroundColor: color.green, borderColor: color.green },
	textPrimaryGreen: { color: color.white },
	shadowBlue: { shadowColor: color.blue },
	shadowRed: { shadowColor: color.red },
	shadowGreen: { shadowColor: color.green },


	buttonSecondaryBlue: { backgroundColor: color.white, borderColor: color.blue },
	textSecondaryBlue: { color: color.blue },
	buttonSecondaryRed: { backgroundColor: color.white, borderColor: color.red },
	textSecondaryRed: { color: color.red },
	buttonSecondaryGreen: { backgroundColor: color.white, borderColor: color.green },
	textSecondaryGreen: { color: color.green },
	buttonSecondaryTransparent: { backgroundColor: color.transparent, borderColor: color.blue },

	buttonInlineBlue: { backgroundColor: color.mistBlue02, borderColor: color.mistBlue02 },
	textInlineBlue: { color: color.blue },
	buttonInlineRed: { backgroundColor: color.mistBlue02, borderColor: color.mistBlue02 },
	textInlineRed: { color: color.red },
	buttonInlineGreen: { backgroundColor: color.mistBlue02, borderColor: color.mistBlue02 },
	textInlineGreen: { color: color.green },
	buttonInlineSolidblue: { backgroundColor: color.blue, borderColor: color.blue },
	textInlineSolidblue: { color: color.white },

	buttonIconWhite: { backgroundColor: color.white, borderColor: color.white },
	textIconWhite: { color: color.mistBlue05 },
	buttonIconBlue: { backgroundColor: color.blue, borderColor: color.blue },
	textIconBlue: { color: color.white },
	buttonIconTransparent: { backgroundColor: color.transparent, borderColor: color.white },
	textIconTransparent: { color: color.white },

	buttonDisabled: { backgroundColor: color.grey02, borderColor: color.grey02 },
	textDisabled: { color: color.white },
};

export const getButtonStyle = ({
	type, color: btnColor, block, shadow, size, disabled,
}) => {
	const s = [
		shapeStyles.button,
		shapeStyles[`button${_.capitalize(type)}`],
		block && shapeStyles.buttonBlock,
	];

	if (disabled) {
		s.push(colorStyles.buttonDisabled);
	} else if (type === 'circle' || type === 'square') {
		s.push(colorStyles[`buttonIcon${_.capitalize(btnColor)}`]);
		if (size !== 'default') {
			s.push(shapeStyles[`button${_.capitalize(type)}${_.capitalize(size)}`]);
		}
	} else {
		s.push(colorStyles[`button${_.capitalize(type)}${_.capitalize(btnColor)}`]);
	}

	if (shadow === 'color') {
		s.push(shapeStyles.buttonShadowColor, colorStyles[`shadow${btnColor}`]);
	} else if (shadow) {
		s.push(shapeStyles[`buttonShadow${_.capitalize(shadow)}`]);
	}

	return s;
};

export const getChildMargin = ({ type, index }) => [
	index !== 0 && shapeStyles.margin,
	index !== 0 && type === 'inline' && shapeStyles.marginInline,
];

export const getTextStyle = ({
	type, btnColor, color: tColor, index, disabled,
}) => {
	const style = [
		shapeStyles.buttonText,
		type === 'inline' && shapeStyles.textInline,
		...getChildMargin({ type, index }),
	];

	let textColor = { color: color[tColor] ? color[tColor] : tColor };
	if (disabled) {
		textColor = colorStyles.textDisabled;
	} else if (!tColor) {
		textColor = (type === 'circle' || type === 'square') ?
			colorStyles[`textIcon${_.capitalize(btnColor)}`] :
			colorStyles[`text${_.capitalize(type)}${_.capitalize(btnColor)}`];
	}
	style.push(textColor);

	return style;
};
