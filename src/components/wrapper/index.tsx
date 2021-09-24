import React from 'react'
import { motion } from 'framer-motion'

export const Wrapper: React.FC = ({ children }) => {
	return (
		<motion.div
			initial={{
				x: '-1px',
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
			{children}
		</motion.div>
	)
}
