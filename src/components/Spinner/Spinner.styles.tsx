import { createUseStyles } from 'react-jss'
import { spinnerColour } from '../../config/colours'

const styles = {
	'@global': {
		'@keyframes spinner': {
			'100%': { transform: 'rotate(360deg)' }
		},
	},
	spinner: {
		width: '5em',
		height: '5em',
		borderTop: `0.4em solid ${spinnerColour}`,
		borderRight: '0.4em solid transparent',
		borderRadius: '50%',
		animation: 'spinner 0.6s linear infinite'
	},
	spinPadding: {
		padding: '1em'
	}
}

export default createUseStyles(styles)
