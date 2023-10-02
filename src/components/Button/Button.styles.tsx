import { createUseStyles } from 'react-jss'
import { headingFontFamily, weightSemiBold } from '../../config/jss-vars'
import {
	off_black,
	button_text,
	button_background,
} from '../../config/colours'

export type ClassNames =
	| 'primary'
	| 'link'

const styles = {
	base: {
		cursor: 'pointer',
		fontFamily: headingFontFamily,
		fontSize: '1.5rem',
		lineHeight: '1rem',
		textAlign: 'center',
		display: 'inline-block',
		outline: 'none',
	},
	button: {
		composes: '$base',
		border: 'none',
		padding: '1.5rem 4rem',
		letterSpacing: 0,
		textTransform: 'uppercase',
		fontWeight: weightSemiBold,
		boxShadow: `0em 0.15em 0.65em 0em ${off_black}`,
		'&:disabled': {
			cursor: 'default',
			opacity: 0.5,
			pointerEvents: 'none',
		},
		'&:hover': {
			opacity: '0.85',
			transition: 'opacity .25s ease-in-out',
		},
	},
	primary: {
		composes: '$button',
		background: button_background,
		color: button_text,
	},
	// Unused
	link: {
		composes: '$base',
		border: 0,
		cursor: 'pointer',
		display: 'inline-block',
		padding: 0,
		backgroundColor: 'transparent',
		fontWeight: weightSemiBold,
		fontSize: '0.875rem',
		height: '0.875rem',
		lineHeight: '0.875rem',
		letterSpacing: 0.2,
	},
}

export default createUseStyles(styles)
