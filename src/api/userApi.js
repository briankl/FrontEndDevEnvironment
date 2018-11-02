
import 'whatwg-fetch';

export function getUsers() {
	return get('users');
}

function get(url) {
	return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
	return response.json();
}

function onError(error){
	console.warn(error); // eslint-disable-line no-console
}


// mock api notes
// 1. Declare our schame
	// - JSON Schema Faker
// 2. Generate Random Data
	// - faker.js
	// - chance.js
	// - randexp.js
// 3. Serve Data via API
	// - JSON Server
