import { createUseStyles } from 'react-jss'
import {
	text_shadow,
} from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	page: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
		overflowX: 'hidden',
		position: 'relative',
		'& h1': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '4em',
			textShadow: text_shadow,
			margin: '0',
		},
	},
	section: {
		width: '100%',
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '4em 0em',
		position: 'relative',
		'& h2, h3': {
			fontFamily: headingFontFamily,
			textTransform: 'uppercase',
			fontSize: '2em',
			textShadow: text_shadow,
			margin: '0',
		},
		'& div': {
			maxWidth: '50rem',
		},
	},
	hero: {
		composes: '$section',
		textAlign: 'center',
		'& p': {
			maxWidth: '50rem',
			fontSize: '1.3em',
		},
		'& sub': {
			fontSize: '0.5em',
		},
	},
}

export default createUseStyles(styles)
