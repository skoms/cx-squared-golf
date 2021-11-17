import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.ellipse} /> {/* used for curved background */}
			<span className={styles.madeBy}>
				<p>This Demo was made by Andreas Skomsoey for </p>
				<a href='https://www.cx-squared.com/'>{`{cx}²`}</a>
			</span>
			<nav className={styles.links}>
				<a href='https://www.linkedin.com/in/andreas-skoms%C3%B8y-01a027188/'>
					LinkedIn
				</a>
				<a href='https://github.com/skoms'>GitHub</a>
			</nav>
		</footer>
	)
}

export default Footer
