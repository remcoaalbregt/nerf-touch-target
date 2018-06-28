import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Ring from '../connectors/ringConnector';

const StyledTarget = styled.div`
	position: relative;
	height: 600px;
	width: 600px;
`;

const Target = ({ rings }) => (
	<StyledTarget>
		{ rings.map(({ color, value }, key) =>
			<Ring color={color} value={value} key={key} />)}
	</StyledTarget>
)

Target.propTypes = {
	rings: PropTypes.array.isRequired,
}

export default Target;