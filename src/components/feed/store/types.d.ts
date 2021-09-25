interface FeedPostProps {
	id: number
	content: string
	user: {
		name: string
		image: string
	}
	createdAt: string
}

interface FeedWrapperContextProps {
	posts: FeedPostProps[]
	setPosts: React.Dispatch<React.SetStateAction<FeedPostProps[]>>
	isLoading: boolean
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
	loadingCount: number
	setLoadingCount: React.Dispatch<React.SetStateAction<number>>
	user: Session
}

interface FeedWrapperProps {
	user: Session
}
