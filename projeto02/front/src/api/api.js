export const Api = {
	baseUrl: "http://localhost:7000",

	createUrl: () => Api.baseUrl + "/characters",

	readAllUrl: () => Api.baseUrl + "/characters",
	readSingleUrl: (id) => Api.baseUrl + "/characters/" + id,

	updateUrl: (id) => Api.baseUrl + "/characters/" + id,

	deleteUrl: (id) => Api.baseUrl + "/characters/" + id,
	deleteAllUrl: () => Api.baseUrl + "/",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
		});
	},
};
