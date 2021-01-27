
// Task 1

let letters = [];
let someString = "Backend As A Service";

someString.split(' ').forEach(function(letter, index, list){
	letters[index] = letter.slice(0, 1);

	if(list.length - 1 === index){
		console.log(letters);
	}
})

console.log(letters.join(''));

// Task 2

function getNumberType(value){
	if(typeof(value) === 'number'){
		dateNow = new Date();
		formatDate = dateNow.getDate() + '.' + dateNow.getMonth() + '.' + dateNow.getFullYear() + 
			', ' + dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds();
        // .tolocalString().replaceAll('/', ':');
		console.log(formatDate);
	} else {
		console.error('Invalid data type!');
	}
}

getNumberType(13);
getNumberType("osidf");

// Task 4

function returnSelf(){
	console.log(returnSelf);
	console.log(arguments);	
}

returnSelf(10, false, "Google");

// Task 5

let firstUserInformation = {
	name: 'Ihor',
	registered: true,
	data: '14.11.2020',
	getInfo: userInfo,
}

let secondUserInformation = {
	name: 'Andrey',
	registered: false,
	data: '',
	getInfo: userInfo,
}

function userInfo(){
	let DataRegistered;

	if(this.registered){
		DataRegistered = "Date registered: " + this.data;
	} else {
		DataRegistered = "You don't registered: " + this.name;
	}
	console.log(DataRegistered);
}

firstUserInformation.getInfo();
secondUserInformation.getInfo();

// Task 6

var users = {
    14587: {
            name: "Ivan",
            email: "ivan78@gmail.com"
    },
    28419: {
            name: "Georg",
            email: "georg.klep@gmail.com"
    },
    41457: {
            name: "Stephan",
            email: "stephan.borg@gmail.com"
    }
}
var posts = {
    7891451: {
            author: 14587,
            text: "Imagine we can encapsulate these secondary responsibilities in functions"
    },
    7891452: {
            author: 28419,
            text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор. 
                    Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
                    Ключевое слово super также может быть использовано для вызова функций родительского объекта`
    },
    7891453: {
            author: 28419,
            text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое. 
                    Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`
    },
    7891454: {
            author: 14587,
            text: "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта"
    }
}
var comments = {
    91078454: {
            postId: 7891451,
            author: 28419,
            text: `The static String.fromCharCode() method returns a string created 
                    from the specified sequence of UTF-16 code units`
    },
    91078455: {
            postId: 7891451,
            author: 41457,
            text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента, 
                    который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`
    },
    91078457: {
            postId: 7891452,
            author: 41457,
            text: "Глобальный объект String является конструктором строк, или, последовательностей символов"
    },
    91078458: {
            postId: 7891452,
            author: 14587,
            text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                    or null if the element is not in a namespace`
    }
}

function getCurrentPostComments ( postId ) {
        var res = [];
        var comment = Object.keys(comments);
        var index = 0;

        comment.forEach(function(keyComment){
        	var infoComment = comments[keyComment];

        	if (infoComment.postId === postId){
        		var user = infoComment.author;

        		const nameAuthor = users[user].name;
        		const textComment = infoComment.text;

        		res[index] = {
        			author: nameAuthor,
        			text: textComment,
        		};

        		index++;
        	}
        })
        return res;
}

console.log ( getCurrentPostComments ( 7891451 ) )




