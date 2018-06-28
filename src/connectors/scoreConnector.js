import { connect } from 'react-redux'
import Score from '../components/score';

const mapStateToProps = (state, ownProps) => ({
	score: state.scoreReducer.score
})

export default connect(
	mapStateToProps,
)(Score)