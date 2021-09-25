import React from 'react'
import { Session } from 'next-auth'

import { PostCreator } from './creator'
import { PostShow } from './show'
import { FeedContext, FeedWrapperProvider } from './store/feedWrapper'

export const FeedWrapper = ({ user }: { user: Session }) => {
	return (
		<FeedWrapperProvider {...{ user }}>
			<PostShow />
		</FeedWrapperProvider>
	)
}
