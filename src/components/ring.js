import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {black, white} from '../styles/colors';

const getLength = ({ value }) => 100 - ((value -1) * 10)
const getBorderColor = ({ color }) => color === black ? white : black

const StyledRing = styled.div`
	background: ${props => props.color};
	width: ${getLength}%;
	height: ${getLength}%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	border-radius: 999em;
	border: 1px solid black;
	border-color: ${getBorderColor};
`;

const Ring = ({ onClick, value, color }) => (
	<StyledRing onClick={onClick} value={value} color={color} />
)

Ring.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
}

export default Ring;