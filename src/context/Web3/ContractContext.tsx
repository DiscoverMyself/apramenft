import { Contract, ethers } from 'ethers'
import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import ABI from '../../abi/nftABI.json'
import { getContractId } from '../../config/chain'
import { Web3Context } from './Web3Context'

interface CtxProps {
	nftContract?: Contract
	nftContractId?: string
}
interface Props {
	children: ReactNode
}

export const ContractContext = createContext<CtxProps>({})
const ContractContextProvider: FC<Props> = ({ children }) => {
	const { web3Provider } = useContext(Web3Context)

	const [nftContract, setNftContract] = useState<Contract>()
	const [nftContractId, setNftContractId] = useState<string>()

	useEffect(() => {
		getContracts()
	}, [web3Provider])

	const getContracts = async () => {
		if (!web3Provider) {
			return
		}

		const { chainId } = await web3Provider.getNetwork()
		const _nftContractId = getContractId(chainId)

		const signer = web3Provider.getSigner()

		if (_nftContractId) {
			setNftContractId(_nftContractId)
			const _nftContract = new ethers.Contract(_nftContractId, ABI, signer)
			setNftContract(_nftContract)
		}
	}

	return (
		<ContractContext.Provider
			value={{
				nftContract,
				nftContractId,
			}}
		>
			{children}
		</ContractContext.Provider>
	)
}

export default ContractContextProvider
