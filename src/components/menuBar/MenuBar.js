import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearUpdates, selectSort, updateSort } from '../table/tableSlice'
import styles from './MenuBar.module.css'
import { getSortOrderTerm } from '../../utils'

const MenuBar = () => {
	const dispatch = useDispatch()
	const sort = useSelector(selectSort)

	const changeHandler = (e) => {
		if (e.target.name === 'column-sort') {
			dispatch(updateSort({ column: e.target.value, order: sort.order }))
		} else if (e.target.name === 'order-sort') {
			dispatch(updateSort({ order: e.target.value, column: sort.column }))
		}
	}
	return (
		<div className={styles.container}>
			<div className={styles.sortSelects}>
				<select name='column-sort' id='column-sort' onChange={changeHandler}>
					<option value='updatedAt'>By Update Time</option>
					<option value='position'>New Ranking</option>
					<option value='nationality'>Nationality</option>
					<option value='name'>Name</option>
					<option value='score'>Score</option>
					<option value='total'>Total</option>
				</select>
				<select name='order-sort' id='order-sort' onChange={changeHandler}>
					<option value='DESC'>{getSortOrderTerm('DESC', sort)}</option>
					<option value='ASC'>{getSortOrderTerm('ASC', sort)}</option>
				</select>
			</div>
			<button
				className={styles.clearButton}
				onClick={() => dispatch(clearUpdates())}
			>
				Clear Table
			</button>
		</div>
	)
}

export default MenuBar
