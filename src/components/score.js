import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledScore = styled.div``;

const Score = ({ score }) => <StyledScore>{`Score: ${score}`}</StyledScore>

Score.propTypes = {
	score: PropTypes.number.isRequired
}

export default Score;