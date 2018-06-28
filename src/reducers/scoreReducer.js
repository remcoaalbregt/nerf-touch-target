import {ADD_SCORE, RESET_SCORE} from '../actions/scoreActions';

const defaultState = {
	score: 0
}

export const scoreReducer = (state = [], action = {}) => {
	const { type, score } = action;

	switch (type) {
		case '@@INIT':
			return defaultState
		case ADD_SCORE:
			return {
				...state,
				score: state.score + score
			}
		case RESET_SCORE:
			return defaultState
		default:
			return state
	}
}