import { isoA3ToA2 } from './alpha3To2'

/**
 * Takes in an array and returns a sorted version of it
 * @param {object} arr - Array of Updates to sort
 * @param {oject} sort - sort options structured { type, column, order }
 * @returns the sorted version of arr
 */
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

/**
 * Takes in order and column and returns the fitting term for it
 * @param {string} order - which order to sort it 'ASC' or 'DESC'
 * @param {object} sort - sort options structured { type, column, order }
 * @returns the correct ordering term for the column
 */
export const getSortOrderTerm = (order, sort) => {
	const isAsc = order === 'ASC'
	switch (sort.column) {
		case 'updatedAt':
			return isAsc ? 'Oldest' : 'Newest'
		case 'nationality':
			return isAsc ? 'A-Z' : 'Z-A'
		case 'name':
			return isAsc ? 'A-Z' : 'Z-A'
		case 'position':
			return isAsc ? 'Ascending' : 'Descending'
		case 'score':
			return isAsc ? 'Ascending' : 'Descending'
		case 'total':
			return isAsc ? 'Ascending' : 'Descending'
		default:
			return isAsc ? 'Ascending' : 'Descending'
	}
}

/**
 * Takes in ISO 3166-3 as a parameter and returns img element with the flag or a fallback
 * blank flag
 * @param {string} alpha3 - ISO 3166-3 / 3 letter country-code
 * @returns returns img element with flag associated with the alpha2 version
 */
export const getFlagByA3 = (alpha3) => (
	<img
		src={`/country-flags-16px/${(
			isoA3ToA2[alpha3] || 'AA'
		).toLowerCase()}_16.png`}
		alt={`${alpha3} Flag`}
	/>
)
