import React, { createContext } from 'react'
import { Session } from 'next-auth'
import Skeletal, { SkeletonTheme } from 'react-loading-skeleton'

import { PostCreator } from '../creator'

export const FeedContext = createContext<FeedWrapperContextProps>(
	{} as FeedWrapperContextProps
)

export const FeedWrapperProvider: React.FC<FeedWrapperProps> = ({
	user,
	children,
}) => {
	const [posts, setPosts] = React.useState<FeedPostProps[]>([])
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [loadingCount, setLoadingCount] = React.useState<number>(10)

	return (
		<FeedContext.Provider
			value={{
				posts,
				setPosts,
				isLoading,
				setIsLoading,
				loadingCount,
				setLoadingCount,
				user,
			}}
		>
			<div id="feed" className="w-full p-8">
				<PostCreator />

				<SkeletonTheme color="#ececec33" highlightColor="#f5f5f533">
					{isLoading && (
						<Skeletal circle={true} count={loadingCount} height={125} />
					)}
					{children}
				</SkeletonTheme>
			</div>
		</FeedContext.Provider>
	)
}
