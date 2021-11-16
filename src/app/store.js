import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from '../components/table/tableSlice'

export const store = configureStore({
	reducer: {
		table: tableReducer,
	},
})
