import { createUseStyles } from 'react-jss'
import {
	box_shadow,
	team_member_background,
	team_member_text,
	twitter_blue,
	white,
} from '../../config/colours'
import { weightSemiBold } from '../../config/jss-vars'

const styles = {
	teamMember: {
		background: team_member_background,
		color: team_member_text,
		margin: '1rem',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		flex: '1 1',
		minWidth: '200px',
		boxShadow: box_shadow,
	},
	avatar: {
		width: '125px',
	},
	memberName: {
		fontWeight: weightSemiBold,
	},
	twitterLink: {
		backgroundColor: twitter_blue,
		borderRadius: '0.5rem',
		color: white,
		padding: '0.5rem 1rem',
		textDecoration: 'none',
	},
	description: {
		fontSize: '0.9rem',
		textAlign: 'justify',
		paddingBottom: '1em',
	},
}

export default createUseStyles(styles)
