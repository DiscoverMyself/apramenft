import { MintRoute } from '../routes'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import useStyles from './Home.styles'
import { useNavigate } from 'react-router-dom'
import {
	ABOUT_DESCRIPTION,
	ABOUT_TITLE,
	FAQS,
	FAQ_TITLE,
	HERO_BUTTON_TEXT,
	HERO_DESCRIPTION,
	HERO_SUBTEXT,
	HERO_TITLE,
	ROADMAP_TITLE,
	TEAM_MEMBER_TITLE,
} from '../../config/content'
import Button from '../../components/Button/Button'
import roadmapFile from '../../config/roadmap.md'
import Accordion from '../../components/Accordion/Accordion'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Spinner from '../../components/Spinner/Spinner'
import Team from '../../components/Team/Team'

const { PUBLIC_URL } = process.env

const Home: React.FC = () => {
	const navigate = useNavigate()
	const classes = useStyles()

	const [roadMapContent, setRoadMapContent] = useState<string>()

	useEffect(() => {
		fetch(roadmapFile)
			.then(res => res.text())
			.then(text => setRoadMapContent(text))
	}, [])

	return (
		<PageWrapper className="default">
			<div className={classes.page}>
				<section className={classes.hero}>
					<h1>{HERO_TITLE}</h1>
					<p>{HERO_DESCRIPTION}</p>
					<Button
						aria-label="Mint Now"
						className="primary"
						onClick={() => {
							navigate(MintRoute.path)
						}}
					>
						{HERO_BUTTON_TEXT}
					</Button>
					<p>
						<sub>{HERO_SUBTEXT}</sub>
					</p>
				</section>

				<section id="about" className={classes.about}>
					<div>
						<h2>{ABOUT_TITLE}</h2>
						<p>{ABOUT_DESCRIPTION}</p>
						<img
							src={`${PUBLIC_URL}/img/about.png`}
							className={classes.image}
						/>
					</div>
				</section>

				<section id="roadmap" className={classes.roadmap}>
					<div>
						<h2 className={classes.centered}>{ROADMAP_TITLE}</h2>
						{roadMapContent?.length ? (
							<ReactMarkdown children={roadMapContent} />
						) : (
							<Spinner />
						)}
					</div>
				</section>

				<section id="team" className={classes.team}>
					<h2 className={classes.centered}>{TEAM_MEMBER_TITLE}</h2>
					<Team />
				</section>

				<section id="faq" className={classes.faq}>
					<div>
						<h2 className={classes.centered}>{FAQ_TITLE}</h2>
						{FAQS.map(faq => {
							return (
								<Accordion
									key={faq.title}
									title={faq.title}
									expandedText={faq.description}
								/>
							)
						})}
					</div>
				</section>
			</div>
		</PageWrapper>
	)
}

export default Home
