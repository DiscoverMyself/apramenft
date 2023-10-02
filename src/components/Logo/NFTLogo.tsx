import useStyles, { ClassNames } from './Logo.styles'

const { PUBLIC_URL } = process.env

interface Props {
	className?: ClassNames
}

const NFTLogo: React.FC<Props> = ({ className }) => {
	const classes = useStyles()

	return (
		<img
			className={classes[className || 'default']}
			src={`${PUBLIC_URL}/img/logo_nft.png`}
			alt="NFT Logo"
		/>
	)
}

export default NFTLogo
