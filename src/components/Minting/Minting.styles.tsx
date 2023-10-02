import { createUseStyles } from 'react-jss'
import { text_shadow } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	page: {
		minWidth: '100vw',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		'& h1': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '4em',
			textShadow: text_shadow,
			margin: '0',
		},
		'& p': {
			maxWidth: '50rem',
			fontSize: '1.3em',
		},
	},
	mint: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '2em',
	},
	remaining: {
		marginBottom: '1em',
		maxWidth: '50rem',
		fontSize: '1.3em',
	},
}

export default createUseStyles(styles)
