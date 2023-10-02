import { createUseStyles } from 'react-jss'
import { faq_question_background, faq_question_text, off_black } from '../../config/colours'
import { headingFontFamily } from '../../config/jss-vars'

const styles = {
	accordion: {
		margin: '1em',
		padding: '1.5rem 4rem',
		background: faq_question_background,
		color: faq_question_text,
		boxShadow: `0em 0.15em 0.65em 0em ${off_black}`,
	},
	check: {
		position: 'absolute',
		cursor: 'pointer',
		width: '50vw',
		height: '3em',
		zIndex: '1',
		opacity: '0',
		'&:checked ~ p': {
			maxHeight: '0',
			opacity: '0',
			transform: 'translate(0, 50%)',
			paddingBottom: '0',
			margin: '0',
		},
		'&:checked ~ h4': {
			'&::after': {
				content: '"+"',
			},
		},
	},
	title: {
		fontSize: '1.5em',
		margin: '0',
		fontFamily: headingFontFamily,
		'&::after': {
			content: '"-"',
			paddingLeft: '0.5em',
		},
	},
	description: {
		position: 'relative',
		overflow: 'hidden',
		maxHeight: '800px',
		opacity: '1',
		transform: 'translate(0, 0)',
		marginTop: '14px',
		zIndex: '2',
		transition: 'all 0.25s ease-in-out',
	},
}

export default createUseStyles(styles)
