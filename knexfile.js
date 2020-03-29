module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/users.db3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},
	production: {
		client: 'pg',
		connection:
			'postgres://pltjsecsckutkx:3dd329da111d8fbd073dc6381a57b544ef9e057c25e37594a467c144aba810a9@ec2-3-230-106-126.compute-1.amazonaws.com:5432/d8f7vg0pgard5t',
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};
