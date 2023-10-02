import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { HomeRoute, MintRoute } from '../../pages/routes'
import Logo from '../Logo/NFTLogo'
import useStyles from './Header.styles'

const Header: React.FC = () => {
	const classes = useStyles()

	return (
		<header className={classes.header}>
			<nav className={classes.nav}>
				<Link to={HomeRoute.path}>
					<Logo className="defaultRect" />
				</Link>
				<div className={classes.linkGroup}>
					<HashLink
						smooth
						to={`${HomeRoute.path}#about`}
						className={classes.link}
					>
						About
					</HashLink>
					<HashLink
						smooth
						to={`${HomeRoute.path}#faq`}
						className={classes.link}
					>
						FAQ
					</HashLink>
					<Link to={MintRoute.path} className={classes.link}>
						Mint
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header
