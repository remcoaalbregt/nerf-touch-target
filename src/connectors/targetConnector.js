import { connect } from 'react-redux'
import Target from '../components/target';
import {black, blue, red, white, yellow} from '../styles/colors';

const fitaTarget = [
	{ value: 1, color: white },
	{ value: 2, color: white },
	{ value: 3, color: black },
	{ value: 4, color: black },
	{ value: 5, color: blue },
	{ value: 6, color: blue },
	{ value: 7, color: red },
	{ value: 8, color: red },
	{ value: 9, color: yellow },
	{ value: 10, color: yellow }
	];

const mapStateToProps = (state, ownProps) => ({
	rings: fitaTarget
})

export default connect(
	mapStateToProps,
)(Target)