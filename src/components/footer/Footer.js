import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.ellipse} />
			<span className={styles.madeBy}>
				<p>This Demo was made by Andreas Skomsoey for </p>
				<a href='https://www.cx-squared.com/'>{`{cx}²`}</a>
			</span>
			<nav className={styles.links}>
				<a href='/'>LinkedIn</a>
				<a href='/'>GitHub</a>
			</nav>
		</footer>
	)
}

export default Footer
