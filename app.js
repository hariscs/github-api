const img = document.querySelector('.img');
const name = document.querySelector('.name');
const username = document.querySelector('.username');
const website = document.querySelector('.website');
const country = document.querySelector('.country');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const search = document.querySelector('.search');

const searchUser = document.querySelector('.searchUser');

search.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = searchUser.value;

	const url = `https://api.github.com/users/${username}`;

	const apiCall = async () => {
		const response = await fetch(url);

		const data = await response.json();

		img.src = data.avatar_url;
		name.textContent = data.name;
		username.textContent = data.login;
		website.textContent = data.blog;
		country.textContent = data.location;
		followers.textContent = data.followers;
		following.textContent = data.following;

		console.log(data);
	};

	apiCall();
});
