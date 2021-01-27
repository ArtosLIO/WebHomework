
function addFormUserCard(user){
	const {
		name, 
		email, 
		website,
	} = user;

	const userCard = document.createElement('div');
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
	userCard.appendChild(info);
	info.appendChild(userName);
	info.appendChild(userEmail);

	const userButton = document.getElementById('add-new-user');
	
	userButton.after(userCard);

	userCard.id = "add-user";
	setTimeout(function(){
		userCard.id = '';
	}, 5000);
}

function createFormField (config){
	const{
		name, 
		text, 
		placeholder
	} = config;

	const label = document.createElement('div');
	label.textContent = text;
	label.className = 'label';

	const input = document.createElement('input');
	input.name = name;
	input.placeholder = placeholder;

	const wrapper = document.createElement('div');
	wrapper.className = 'form-field';

	wrapper.appendChild(label);
	wrapper.appendChild(input);

	return wrapper;
}

const FORM_CONFIG = [
	{
		name: 'name',
		text: 'Name',
		placeholder: 'Enter you user name',
	},
	{
		name: 'email',
		text: 'Email',
		placeholder: 'Enter you user email',
	},
	{
		name: 'website',
		text: 'Website',
		placeholder: 'Enter you user website',
	},
]

const BUTTON_CONFIG = [
	{
		type: 'button',
		text: 'Cancel',
		color: 'danger',
	},
	{
		type: 'submit',
		text: 'Save',
		color: 'seccess',
	},
]

function createButton(config){
	const{
		type,
		text,
		color,
	} = config

	const button = document.createElement('button');
	button.type = type;
	button.textContent = text;
	button.className = `button-${color}`;

	return button;
}

function onSubmit(event){
	event.preventDefault();

	const elements = event.target.elements
	// const { 
	// 	target:{
	// 		element
	// 	}
	// } = event;

	const newUser = {
		name: elements.name.value,
		email: elements.email.value,
		website: elements.website.value,
		id: Math.random(),
	}

	if(newUser.name.length > 4 && newUser.email.length > 4 && newUser.website.length > 4){
		const invalidateForm = document.getElementsByTagName('form');
		invalidateForm[0].remove();

		addFormUserCard(newUser);
	}else{
		const errorFilling = document.createElement('p');
		errorFilling.className = 'filling-error';
		errorFilling.textContent = 'The field must be more than 4 characters!';
		
		const infoError = document.getElementsByClassName('form-field');
		infoError[2].after(errorFilling);
	}
}

function onButtonClick(event){
	const invalidateForm = document.getElementsByTagName('form');

	if(invalidateForm.length != 0){
		invalidateForm[0].remove();
	}

	const form = document.createElement('form');

	FORM_CONFIG.forEach(config => {
		const formField = createFormField(config);
		form.appendChild(formField);
	});

	const addUserButton = event.currentTarget;

	const buttonsWrapper = document.createElement('div');
	buttonsWrapper.className = 'button-wrapper';

	BUTTON_CONFIG.forEach(config => {
		const button = createButton(config);

		if(config.type === 'button'){
			button.onclick = () => {
				form.remove();
			}
		}

		buttonsWrapper.appendChild(button);
	})

	form.appendChild(buttonsWrapper);

	form.onsubmit = onSubmit;

	addUserButton.after(form);
}

function addNewUserButtonHandler(){
	const buttonElement = document.getElementById('add-new-user');

	buttonElement.onclick = onButtonClick;
}

