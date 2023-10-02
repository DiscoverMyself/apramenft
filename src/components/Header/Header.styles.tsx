import { createUseStyles } from 'react-jss'
import { white } from '../../config/colours'
import { weightSemiBold } from '../../config/jss-vars'

const styles = {
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1em',
		padding: '1em',
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	linkGroup: {
		display: 'flex',
		flexDirection: 'row',
		gap: '1.5em',
	},
	link: {
		textTransform: 'uppercase',
		color: white,
		fontSize: '1.5em',
		fontWeight: weightSemiBold,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}

export default createUseStyles(styles)
