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
		connection: 'postgres://localhost:5432/game-of-thrones',
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};
