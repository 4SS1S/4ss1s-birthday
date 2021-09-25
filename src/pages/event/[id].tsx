import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'

const Event = props => {
	return (
		<div>
			<h1>Event</h1>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	const id = context.params?.id

	return {
		props: {
			id,
		},
	}
}

export default Event
