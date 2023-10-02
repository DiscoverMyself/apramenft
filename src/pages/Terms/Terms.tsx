import PageWrapper from '../../components/PageWrapper/PageWrapper'
import useStyles from './Terms.styles'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import termsFile from '../../config/terms.md'
import Spinner from '../../components/Spinner/Spinner'

const Terms: React.FC = () => {
	const classes = useStyles()
	const [content, setContent] = useState<string>()

	useEffect(() => {
		fetch(termsFile)
			.then(res => res.text())
			.then(text => setContent(text))
	}, [])

	return (
		<PageWrapper>
			<div className={classes.page}>
				<section className={classes.hero}>
					{content?.length ? <ReactMarkdown children={content} /> : <Spinner />}
				</section>
			</div>
		</PageWrapper>
	)
}

export default Terms
