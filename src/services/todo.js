export function getAll(){
	return [
		{
			id: 0,
			text: 'Learn Javascript',
			timestamp: '2021-08-14 15:43:45',
			completed: false
		},
		{
			id: 1,
			text: 'Learn React',
			timestamp: '2021-08-16 15:43:45',
			completed: false
		},
		{
			id: 2,
			text: 'Build a React App',
			timestamp: '2021-08-15 15:43:45',
			completed: false
		}
	]
}


let todoCounter = 1;

function getNextId(){
	return getAll().length + todoCounter++;
}

function getCurrentDateTime(){
	let d = new Date();
	let dateString = d.getFullYear() +'-'+ (d.getMonth()+1) +'-'+ d.getDate() + 
	" " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

	return dateString;
}

export function addTodoList(list, text){
	const dateString = getCurrentDateTime();

	let item = Object.assign({
		id: getNextId(),
		timestamp: dateString,
		competed: false,
	}, {text});

	return list.concat([item]);
}

export function sortTodoList(list, attr, asc){
	let new_list = list.slice(0);
	let attrStr = attr + '';
	console.log(attrStr);

	if (asc) {
		new_list.sort(function(a, b){
			return a[attrStr] < b[attrStr] ? -1 : a[attrStr] > b[attrStr] ? 1 : 0;
		});
	} else {
		new_list.sort(function(a, b){
			return a[attrStr] > b[attrStr] ? -1 : a[attrStr] < b[attrStr] ? 1 : 0;
		});		
	}

	return new_list;
}


