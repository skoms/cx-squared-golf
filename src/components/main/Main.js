import React from 'react'
import MenuBar from '../menuBar/MenuBar'
import Table from '../table/Table'
import styles from './Main.module.css'

const Main = () => {
	const goToTop = (e) => {
		e.target.parentElement.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}
	return (
		<main className={styles.container}>
			<MenuBar />
			<Table />
			<button className={styles.toTopButton} onClick={goToTop}>
				Go back to top
			</button>
		</main>
	)
}

export default Main
