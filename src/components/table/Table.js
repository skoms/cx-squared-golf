import React, { useState, useEffect } from 'react'
import styles from './Table.module.css'
import { io } from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { addUpdate, selectUpdates } from './tableSlice'
import { useSelector } from 'react-redux'
import { isoA3ToA2 } from '../../utils/alpha3To2'

const Table = () => {
	const [socket, setSocket] = useState(null)
	const dispatch = useDispatch()
	const updates = useSelector(selectUpdates)

	useEffect(() => {
		const newSocket = io('https://mst-full-stack-dev-test.herokuapp.com/')
		setSocket(newSocket)
		return () => newSocket.close()
	}, [setSocket])

	useEffect(() => {
		const updateListener = (update) => {
			dispatch(addUpdate(update))
		}

		socket && socket.on('data-update', updateListener)

		return () => {
			socket && socket.off('data-update', updateListener)
		}
	}, [socket, dispatch])

	return (
		<table className={styles.container}>
			<tbody>
				<tr>
					<th>Rank (at update)</th>
					<th>Player</th>
					<th>Match</th>
					<th>Score</th>
					<th>Total</th>
				</tr>
				{updates.length > 0 &&
					updates.map((update) => {
						const flag = (
							<img
								src={`/country-flags-16px/${(
									isoA3ToA2[update.nationality] || 'AA'
								).toLowerCase()}_16.png`}
								alt=''
							/>
						)
						return (
							<tr key={update.id}>
								<td>{update.position}</td>
								<td className={styles.playerData}>
									{flag}
									<p>{update.name}</p>
								</td>
								<td>{update.match}</td>
								<td>{update.score}</td>
								<td>{update.total}</td>
							</tr>
						)
					})}
			</tbody>
		</table>
	)
}

export default Table
