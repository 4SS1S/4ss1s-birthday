import React from 'react'
import { motion } from 'framer-motion'

const Suggestions = props => {
	return (
		<motion.div
			initial={{
				x: '100vw',
				opacity: 0,
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 30,
			}}
			exit={{
				x: '-100vw',
				opacity: 0,
			}}
		>
			<h1>Suggestions</h1>
		</motion.div>
	)
}

export default Suggestions
