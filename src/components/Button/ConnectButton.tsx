import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import Web3Modal from 'web3modal'
import { INFURA_ID, VALID_CHAIN_IDS } from '../../config/chain'
import { Web3Context } from '../../context/Web3/Web3Context'
import Spinner from '../Spinner/Spinner'
import Button from './Button'

const web3Modal = new Web3Modal({
	network: 'mainnet',
	cacheProvider: false,
	providerOptions: {
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				infuraId: INFURA_ID,
			},
		},
	},
	disableInjectedProvider: false,
})

const ConnectButton: React.FC = () => {
	const { account, setAccount, setAddress, setWeb3Provider } = useContext(
		Web3Context,
	)
	if (!setAccount || !setAddress || !setWeb3Provider) {
		return <></>
	}

	const [isLoading, setIsLoading] = useState(false)

	const connect = async () => {
		await web3Modal.clearCachedProvider()
		const connection = await web3Modal.connect()

		setIsLoading(true)

		const provider = new ethers.providers.Web3Provider(connection)

		if (!VALID_CHAIN_IDS.includes((await provider.getNetwork()).chainId)) {
			toast.error('Invalid network selected. Please switch to Mainnet')
			return
		}

		const accounts = await provider.listAccounts()
		const addr = accounts[0]
		setAddress(addr)

		let name
		try {
			name = await provider.lookupAddress(addr)
		} catch (err) {
			// This is fine
			// console.log(err)
		}

		if (name) {
			setAccount(name)
		} else {
			setAccount(
				`${addr.substring(0, 5)}...${addr.substring(
					addr.length - 4,
					addr.length,
				)}`,
			)
		}
		setWeb3Provider(provider)
		setIsLoading(false)
	}

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<Button onClick={connect} className="primary">
					{account || 'Connect Wallet'}
				</Button>
			)}
		</>
	)
}

export default ConnectButton
