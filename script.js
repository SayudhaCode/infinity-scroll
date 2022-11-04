const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const param = 'random';
const apiKey = 'jzXSIVfTMoYHisGsuI998c4YnJq-C1taWXDgeOTV5wA';
const apiURL = `https://api.unsplash.com/photos/${param}/?client_id=${apiKey}&count=${count}`;

// helper functions
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// create element functions
function displayPhotos() {
	photosArray.forEach((photo) => {
		const item = document.createElement('a');
		setAttributes(item, {
			href: photo.links.html,
			target: '_blank',
		});

		const img = document.createElement('img');
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

// GET photos
async function getPhotos() {
	try {
		const response = await fetch(apiURL);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {
		console.log(error);
	}
}

// on load
getPhotos();