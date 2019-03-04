import React from 'react';
import PropTypes from 'prop-types';

import { createIconSet } from 'react-native-vector-icons';
import glyphMap from '../utils/nixplay-icon/fonts/NixplayIcon.json';
import { color } from '../utils/color';

export const Icon = createIconSet(glyphMap, 'NixplayIcon');

export const NixplayIcon = (props) => (
	<Icon
		{...props}
		color={color[props.color] ? color[props.color] : props.color}
	/>
);

NixplayIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
};

NixplayIcon.defaultProps = {
	size: 24,
	color: 'black',
};
