"use strict";
/**
 * This is my implementation of table building library. This library will build table inside DOM element. 
 * You can add multiple tables with this program. Each time you need own configuration object but
 * data could be the same or different.
 * 
 * @param {Object} config - configuration for table. Includes columns names and 'value' field so the function will know where to place certain data.
 * @param {Array} data - array that contains objects for table. Objects fields must be named with 'values' from config. Data could be not full.
 *                       Absent fields will be empty.
 */
function DataTable(config, data) {
	let parent = document.querySelector(config['parent']);

	let table = document.createElement('table');
	parent.appendChild(table);

	let tHead = document.createElement('thead');
	table.appendChild(tHead);

	let tHeadRow = document.createElement('tr');
	tHead.appendChild(tHeadRow);

	for (let i = 0; i < config.columns.length; i++) {
		let th = document.createElement('th');
		tHeadRow.appendChild(th);
	}

	let headings = parent.querySelectorAll('th');
	for (let i = 0; i < headings.length; i++) {
		headings[i].innerText = config.columns[i].title;
		headings[i].setAttribute('value', config.columns[i].value);
	}

	let tBody = document.createElement('tbody');
	table.appendChild(tBody);
	data.forEach(function (element) {
		let row = document.createElement('tr');
		for (let i = 0; i < config.columns.length; i++) {
			let td = document.createElement('td');
			td.setAttribute('value', headings[i].getAttribute('value'));
			td.innerText = element[td.getAttribute('value')] || "";
			row.appendChild(td);
		}
		tBody.appendChild(row);
	});
	table.classList.add('nice');
}

/**
 * Object that contains configuration for DataTable function. Field "parent" is REQUIRED for function to work.
 */
const config1 = {
	parent: '#usersTable01',
	columns: [
		{ title: '№', value: 'id' },
		{ title: 'Имя', value: 'name' },
		{ title: 'Фамилия', value: 'surname' },
		{ title: 'Возраст', value: 'age' },
	]
};

/**
 * Array with data for table. Cold be not full. Fields of elements must be named with 'value' of configuration object in order to work properly.
 */
const users = [
	{ id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
	{ id: 30051, name: 'Петя', surname: 'Васечкин', age: 15 },
	{ surname: 'Куплинов', age: 35, id: 30050, },
	{ name: 'Карина', age: 22 },
	{ id: 65, name: 'Данил', surname: 'Ишутин' },
	{ id: 30051, name: 'Александр', surname: 'Дашкевич', age: 30 },

];

DataTable(config1, users);