import { createUseStyles } from 'react-jss'
import { standardFontFamily } from '../../config/jss-vars'

const styles = {
	base: {
		fontFamily: standardFontFamily,
		display: 'inline-block',
		outline: 'none',
		padding: '1em',
		border: 'none',
	},
}

export default createUseStyles(styles)
