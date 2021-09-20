const img = document.querySelector('.img');
const fullName = document.querySelector('.name');
const username = document.querySelector('.username');
const website = document.querySelector('.website');
const country = document.querySelector('.country');
const twitter = document.querySelector('.twitter');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repos = document.querySelector('.repos');
const bio = document.querySelector('.bio');
const searchForm = document.querySelector('.search');
const searchUser = document.querySelector('.searchUser');

function formSubmit(e) {
	e.preventDefault();
	const githubUser = searchUser.value;
	fetchUser(githubUser);
	searchUser.value = '';
}

searchForm.addEventListener('submit', formSubmit);

async function fetchUser(username) {
	const response = await fetch(`https://api.github.com/users/${username}`);
	const returnedData = await response.json();

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	console.log(returnedData);
	return updateDOM(returnedData);
}

function updateDOM(user) {
	img.src = user.avatar_url;
	fullName.textContent = user.name;
	username.textContent = user.login;
	website.textContent = user.blog;
	country.textContent = user.location;
	followers.textContent = user.followers;
	following.textContent = user.following;
	repos.textContent = user.public_repos;
	twitter.textContent = user.twitter_username;
	bio.textContent = user.bio;
}

fetchUser('hariscs');
