import { connect } from 'react-redux'
import Ring from '../components/ring';
import {addScore} from '../actions/scoreActions';

const mapDispatchToProps = (dispatch, ownProps) => ({
	onTouchStart: () => dispatch(addScore(ownProps.value))
})

export default connect(
	null,
	mapDispatchToProps
)(Ring)