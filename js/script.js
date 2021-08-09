"use strict";

const users = [
	{ id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
	{ name: 'Вася', age: 15 },
];

let table = new Tabulator('#usersTable01', {
	data: users,
	layout: "fitColumns",
	columns: [
		{ title: '№', field: 'id' },
		{ title: 'Имя', field: 'name' },
		{ title: 'Фамилия', field: 'surname' },
		{ title: 'Возраст', field: 'age' }
	]
});