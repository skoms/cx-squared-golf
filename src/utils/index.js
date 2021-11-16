export const sortArrayByColumn = (arr, { type, column, order }) => {
	if (type === 'number') {
		if (order === 'ASC') {
			return arr.sort((a, b) => a[column] - b[column])
		}
		return arr.sort((a, b) => b[column] - a[column])
	} else if (type === 'string') {
		return arr.sort((a, b) => {
			const aVal = a[column].toUpperCase()
			const bVal = b[column].toUpperCase()
			if (aVal === bVal) return 1
			if (order === 'ASC') {
				return aVal < bVal ? -1 : 1
			} else {
				return aVal < bVal ? 1 : -1
			}
		})
	}
}

export const getSortOrderTerm = (order, sort) => {
	const isAsc = order === 'ASC'
	switch (sort.column) {
		case 'updatedAt':
			return isAsc ? 'Oldest' : 'Newest'
		case 'position':
			return isAsc ? 'Ascending' : 'Descending'
		case 'nationality':
			return isAsc ? 'A-Z' : 'Z-A'
		case 'name':
			return isAsc ? 'A-Z' : 'Z-A'
		case 'score':
			return isAsc ? 'Ascending' : 'Descending'
		case 'total':
			return isAsc ? 'Ascending' : 'Descending'
		default:
			break
	}
}
