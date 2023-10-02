import useStyles from './Select.styles'

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
	const classes = useStyles()

	return (
		<select
			className={classes['base']}
			{...props}
		/>
	)
}

export default Select
