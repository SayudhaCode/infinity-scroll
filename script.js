// Unsplash API
const count = 10;
const param = 'random';
const apiKey = '9ITQc6JR2m1J6xnmRiH6YakjKp_nGr9e1WfB1LuX0vk';
const apiURL = `https://api.unsplash.com/photos/${param}/?client_id=${apiKey}&count=${count}`;

// GET photos
async function getPhotos() {
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

// on load
getPhotos();