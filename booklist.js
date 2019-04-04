var addToList = document.querySelector('#add-to-list');
var listItem = document.querySelector('#list-item');
var list = document.querySelector('#list');

addToList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (listItem.value.length < 1) return;

	// Add item to wishlist
	list.innerHTML += '<li>' + listItem.value + '</li>';

	// Clear input
	listItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('listItems', list.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('listItems');

// If there are any saved items, update our list
if (saved) {
	list.innerHTML = saved;
}



