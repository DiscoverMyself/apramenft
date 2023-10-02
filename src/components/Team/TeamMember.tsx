import TwitterLogo from '../Logo/TwitterLogo'
import useStyles from './TeamMember.styles'

interface TeamMember {
	name: string
	description: string
	twitter: string
	image: string
}
interface Props {
	teamMember: TeamMember
}

const TeamMember: React.FC<Props> = ({ teamMember }) => {
	const classes = useStyles()
	return (
		<div className={classes.teamMember}>
			<img className={classes.avatar} src={`img/${teamMember.image}`} />
			<p className={classes.memberName}>{teamMember.name}</p>
			<p className={classes.description}>{teamMember.description}</p>
			{teamMember.twitter.length > 0 && (
				<a
					className={classes.twitterLink}
					href={`https://twitter.com/${teamMember.twitter}`}
				>
					<TwitterLogo className="small" /> @{teamMember.twitter}
				</a>
			)}
		</div>
	)
}

export default TeamMember
