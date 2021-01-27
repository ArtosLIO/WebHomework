
const AVATAR_URL = 'https://eu.ui-avatars.com/api/?name='

const creatUserCard = (user) => {
	const {
		name, 
		email, 
		website,
		company: {
			name: companyName,
		},
	} = user;

	const userCard = document.createElement('div');
	// userCard.textContent = user.name;
	userCard.className = 'user-card';

	const info = document.createElement('div');
	info.className = 'user-info';

	const userName = document.createElement('h4');
	userName.textContent = name;

	const userEmail = document.createElement('div');
	userEmail.textContent = `Email: ${email}, website: ${website}`;

	const userAvater = document.createElement('img');
	userAvater.src = AVATAR_URL + name;

	userCard.appendChild(userAvater);
	userCard.appendChild(info);	// img.after(info);
	info.appendChild(userName);
	info.appendChild(userEmail); // userName.after(userEmail);

	userListElem.appendChild(userCard);
}

const showUsers = users => {
	// const newTag = document.createElement('div');
	// newTag.textContent = 'Im created';
	// document.body.appendChild(newTag);

	// const userButton = document.createElement('input');
	// userButton.className = 'user-button';
	// userButton.setAttribute('type', 'button');
	// userButton.setAttribute('value', 'Hello user!');
	// userButton.setAttribute('onclick', "alert('Hello')");
	// userListElem.appendChild(userButton);

	users.forEach(creatUserCard);

}
