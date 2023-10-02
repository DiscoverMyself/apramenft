import { createUseStyles } from 'react-jss'
import { page_background, page_text } from '../../config/colours'
import { standardFontFamily } from '../../config/jss-vars'

export type ClassNames = 'default'

const styles = {
	default: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		backgroundColor: page_background,
		overflowX: 'hidden',
	},
	main: {
		flex: 1,
		'& > *': {
			fontFamily: standardFontFamily,
			color: page_text,
		},
	},
}

export default createUseStyles(styles)
