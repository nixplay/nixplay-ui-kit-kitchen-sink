// https://css-tricks.com/snippets/javascript/lighten-darken-color/
const splitRGB = (color) => {
	let hex = color;
	if (hex[0] === '#') {
		hex = hex.slice(1);
	}
	const digit = hex.length < 6 ? 1 : 2;
	return [
		parseInt(hex.slice(0, digit), 16),
		parseInt(hex.slice(digit, digit * 2), 16),
		parseInt(hex.slice(digit * 2), 16),
	];
};

const LightenDarkenColor = (color, percent) => {
	const amt = Math.round((255 * percent) / 100);
	const rgb = splitRGB(color);

	let r = rgb[0] + amt;
	if (r > 255) r = 255;
	else if (r < 0) r = 0;

	let g = rgb[1] + amt;
	if (g > 255) g = 255;
	else if (g < 0) g = 0;

	let b = rgb[2] + amt;
	if (b > 255) b = 255;
	else if (b < 0) b = 0;

	return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

export const lighten = (color, percent) => LightenDarkenColor(color, percent);
export const darken = (color, percent) => LightenDarkenColor(color, percent * -1);

export const transparentize = (color, percent) => {
	const rgb = splitRGB(color).join(', ');
	return `rgba(${rgb}, ${(100 - percent) / 100})`;
};

export const basicColor = {
	// transparent
	transparent: '#00000000',

	// Accent Colors
	blue: '#479ADE',
	blueGradientStart: '#80C3F3',
	blueGradientEnd: '#4A90E2',

	// Basic Colors
	white: '#FFFFFF',
	black: '#000000',
	red: '#EB5649',
	green: '#4CD964',
	orange: '#F09300',
	yellow: '#F0AD4E',

	// Neutral Colors
	grey01: '#F7F7F7',
	grey02: '#C3C9CB',
	grey03: '#8E9193',
	grey04: '#6C6C6C',
	grey05: '#4A4A4A',
	grey06: '#4A4A4A',

	// Ambient Colors
	mistBlue01: '#F7F9FA',
	mistBlue02: '#EEF6F7',
	mistBlue03: '#DFE7EB',
	mistBlue04: '#7998A5',
	mistBlue05: '#466A78',
};

export const color = {
	...basicColor,

	textMistBlue: basicColor.mistBlue04,
	textGrey: basicColor.grey04,
	textBlack: basicColor.black,
	textBlue: basicColor.blue,
	textWhite: basicColor.white,

	borderMistBlue: basicColor.mistBlue03,
	borderGrey: transparentize(basicColor.black, 90),

};
