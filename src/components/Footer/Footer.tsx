import { Link } from 'react-router-dom'
import {
	DISCORD_LINK,
	AOCOLLAB_LINK,
	OPENSEA_LINK,
	TWITTER_LINK,
	PROJECT_NAME,
} from '../../config/content'
import { TermsRoute } from '../../pages/routes'
import DiscordLogo from '../Logo/DiscordLogo'
import OpenseaLogo from '../Logo/OpenseaLogo'
import TwitterLogo from '../Logo/TwitterLogo'
import useStyles from './Footer.styles'

const Footer: React.FC = () => {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<div>
				&copy; {PROJECT_NAME} |{' '}
				<Link to={TermsRoute.path}>Terms &amp; Conditions</Link>
			</div>
			<div className={classes.linkGroup}>
				{DISCORD_LINK.length > 0 && (
					<a href={DISCORD_LINK} target="_blank">
						<DiscordLogo />
					</a>
				)}
				{TWITTER_LINK.length > 0 && (
					<a href={TWITTER_LINK} target="_blank">
						<TwitterLogo />
					</a>
				)}
				{OPENSEA_LINK.length > 0 && (
					<a href={OPENSEA_LINK} target="_blank">
						<OpenseaLogo />
					</a>
				)}
			</div>
			<div>
				Developed by{' '}
				<a href={AOCOLLAB_LINK} target="_blank">
					Ao Collab
				</a>
			</div>
		</footer>
	)
}

export default Footer
