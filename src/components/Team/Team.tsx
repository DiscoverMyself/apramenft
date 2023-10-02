import { TEAM_MEMBERS } from '../../config/content'
import TeamMember from './TeamMember'
import useStyles from './Team.styles'

const Team: React.FC = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			{TEAM_MEMBERS.map(member => {
				return <TeamMember teamMember={member} />
			})}
		</div>
	)
}

export default Team
