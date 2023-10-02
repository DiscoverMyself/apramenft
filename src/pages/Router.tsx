import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomeRoute, MintRoute, TermsRoute } from './routes'
import Mint from './Mint/Mint'
import Home from './Home/Home'
import Terms from './Terms/Terms'

const Router: React.FC = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path={HomeRoute.path} element={<Home />} />
					<Route path={MintRoute.path} element={<Mint />} />
					<Route path={TermsRoute.path} element={<Terms />} />
					<Route path="*" element={<Navigate to={HomeRoute.path} />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default Router
