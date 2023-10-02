import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOAST_THEME } from './config/colours'
import ContractContextProvider from './context/Web3/ContractContext'
import Web3ContextProvider from './context/Web3/Web3Context'
import Router from './pages/Router'

const App: React.FC = () => {
	return (
		<Web3ContextProvider>
			<ContractContextProvider>
				<Router />
				<ToastContainer
					theme={TOAST_THEME}
					position='top-center'
					autoClose={5000}
					pauseOnFocusLoss={false}
					draggable={false}
				/>
			</ContractContextProvider>
		</Web3ContextProvider>
	)
}

export default App
