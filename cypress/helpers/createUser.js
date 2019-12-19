import faker from 'faker'
import uniqid from 'uniqid'

export default function createUser(options = {}) {
	return {
		address: '601 Coronation Drive, Toowong QLD, Australia',
		country: 'AU',
		dob: '1980-08-15',
		email: `test_${uniqid()}@benon.com`,
		firstname: faker.name.firstName(),
		lastname: faker.name.lastName(),
		limit: '',
		password: 'Password1',
		phone: '0491570156',
		postcode: '4066',
		receive_emails: false,
		state: 'QLD',
		suburb: 'Toowong',
		title: 'Mrs',
		...options,
	}
}
