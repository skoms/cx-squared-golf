import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import '../styles/global.css'
import styles from './App.module.css'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<div className='flag flag-us'></div>
			<Main />
			<Footer />
		</div>
	)
}

export default App
