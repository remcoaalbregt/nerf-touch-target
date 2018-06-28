import {ADD_SCORE, RESET_SCORE} from '../actions/scoreActions';
import {isNumber, add} from '../helpers/functional';

const defaultState = {
	score: 0
}

const addScore = (stateScore = 0, score) => isNumber(score) ?
	add(score)(stateScore) : stateScore;

export const scoreReducer = (state = [], action = {}) => {
	const { type, score } = action;

	switch (type) {
		case '@@INIT':
			return defaultState
		case ADD_SCORE:
			return {
				...state,
				score: addScore(state.score, score)
			}
		case RESET_SCORE:
			return defaultState
		default:
			return state
	}
}