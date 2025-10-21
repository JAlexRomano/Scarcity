let items = [];

function displayItems() {
	const itemsList = document.getElementById('itemsList');
	itemsList.innerHTML = '';
	items.forEach((item, index) => {
		const div = document.createElement('div');
		div.className = 'item-row';
		div.textContent = `${index + 1}. ${item.name} - $${item.price.toFixed(2)} (Priority: ${item.priority})`;
		itemsList.appendChild(div);
	});
}

function shiftPriorities(newPriority) {
	items.forEach(item => {
		if (item.priority >= newPriority) {
			item.priority += 1;
		}
	});
}

document.getElementById('addItemBtn').addEventListener('click', () => {
	const name = document.getElementById('itemName').value.trim();
	const price = parseFloat(document.getElementById('itemPrice').value);
	let priority = parseInt(document.getElementById('itemPriority').value);

	if (!name || isNaN(price) || isNaN(priority) || priority < 1) {
		alert('Please enter valid values!');
		return;
	}

	shiftPriorities(priority);

	items.push({ name, price, priority });
	displayItems();

	document.getElementById('itemName').value = '';
	document.getElementById('itemPrice').value = '';
	document.getElementById('itemPriority').value = '';
});

document.getElementById('calculateBtn').addEventListener('click', () => {
	const budget = parseFloat(document.getElementById('budget').value);
	if (isNaN(budget)) {
		alert('Please enter a valid budget!');
		return;
	}

	const sortedItems = items.slice().sort((a, b) => a.priority - b.priority);

	let remainingBudget = budget;
	const selected = [];

	for (let item of sortedItems) {
		if (item.price <= remainingBudget) {
			selected.push(item);
			remainingBudget -= item.price;
		}
	}

	const selectedDiv = document.getElementById('selectedItems');
	selectedDiv.innerHTML = '';
	if (selected.length === 0) {
		selectedDiv.textContent = 'No items fit within your budget.';
	} else {
		selected.forEach((item, index) => {
			const div = document.createElement('div');
			div.textContent = `${index + 1}. ${item.name} - $${item.price.toFixed(2)} (Priority: ${item.priority})`;
			selectedDiv.appendChild(div);
		});
	}

	const remainingDiv = document.getElementById('remainingCash');
	remainingDiv.innerHTML = '';
	const div = document.createElement('div');
	div.textContent = `$${remainingBudget.toFixed(2)}`;
	remainingDiv.appendChild(div);
});
