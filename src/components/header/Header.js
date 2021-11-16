import React from 'react'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.ellipse} />
			<span className={styles.logo}>{`{cx}²`}</span>
			<h2 className={styles.title}>Golf Tournament Updates</h2>
		</header>
	)
}

export default Header
