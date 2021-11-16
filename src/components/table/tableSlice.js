import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { sortArrayByColumn } from '../../utils'

const initialState = {
	updates: [],
	sortBy: { column: 'updatedAt', order: 'DESC', type: 'number' },
}

export const tableSlice = createSlice({
	name: 'table',
	initialState,
	reducers: {
		addUpdate: (state, { payload }) => {
			const result = state
			const update = {
				id: v4(),
				updatedAt: Date.now(),
				name: `${payload.First} ${payload.Last}`,
				nationality: payload.Nationality,
				score: payload.Score,
				position: payload.position,
				match: payload.Match,
				total: payload.TotalStrokes,
				gender: payload.Sex,
				...payload,
			}
			result.updates = [update, ...state.updates]
			result.updates = sortArrayByColumn(result.updates, state.sortBy)
			return result
		},
		clearUpdates: (state, { payload }) => {
			const result = state
			result.updates = []
			return result
		},
		updateSort: (state, { payload }) => {
			const result = state
			result.sortBy = {
				...result.sortBy,
				...payload,
				type: ['nationality', 'name'].includes(payload.column)
					? 'string'
					: 'number',
			}
			result.updates = sortArrayByColumn(result.updates, result.sortBy)
			return result
		},
	},
})

export const { addUpdate, updateSort, clearUpdates } = tableSlice.actions
export const selectUpdates = (state) => state.table.updates
export const selectSort = (state) => state.table.sortBy

export const tableReducer = tableSlice.reducer
