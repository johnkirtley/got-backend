const db = require('../data/db-config');

module.exports = {
	find,
	addUser,
	removeEpisode,
	// findById,
	findWatched,
	addWatched,
	findBy,
};

function find() {
	return db('users').select('id', 'username').orderBy('id');
}

function addUser(user) {
	return db('users').insert(user, 'id');
}

// function findById(id) {
// 	return db('users')
// 		.where({ id })
// 		.select('watched');
// }

function findBy(filter) {
	return db('users').where(filter);
}

function addWatched(id, episode) {
	return db('watched').insert({ episode_name: episode, user_id: id });
}

function findWatched(id) {
	return db('users')
		.join('watched', 'users.id', 'watched.user_id')
		.select('watched.episode_name')
		.where('watched.user_id', id);
}

function removeEpisode(id, episode) {
	return db('watched').where({ user_id: id, episode_name: episode }).delete();
}
