import { useContext } from 'react'
import Minting from '../../components/Minting/Minting'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { Web3Context } from '../../context/Web3/Web3Context'
import ConnectWallet from '../ConnectWallet/ConnectWallet'
import useStyles from './Mint.styles'

const Mint: React.FC = () => {
	const classes = useStyles()
	const { web3Provider } = useContext(Web3Context)

	if (!web3Provider) {
		// Require wallet connection
		return <ConnectWallet />
	}

	return (
		<PageWrapper>
			<div className={classes.page}>
				<Minting />
			</div>
		</PageWrapper>
	)
}

export default Mint
