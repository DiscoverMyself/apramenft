import { createUseStyles } from 'react-jss'
import { page_text, text_shadow } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	footer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'center',
		flexWrap: 'wrap',
		width: '100%',
		padding: '2em 0',
		fontSize: '0.8em',
		gap: '0.8em',
		color: page_text,
		'& a': {
			color: page_text,
		},
	},
	title: {
		fontSize: '3em',
		marginBottom: '0.2em',
		fontFamily: headingFontFamily,
		textTransform: 'uppercase',
		textShadow: text_shadow,
	},
	linkGroup: {
		display: 'flex',
		fontSize: '0.5em',
		'& a': {
			padding: '0 0.5em',
		},
	},
	text: {
		width: '40em',
	},
}

export default createUseStyles(styles)
