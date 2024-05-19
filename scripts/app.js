'use strict';

// Cache DOM elements
const clearButton = document.querySelector(
	'.google-search-form__icon-list-item--1'
);
const searchFormRow = document.querySelector('.google-search-form__row');
const searchInput = document.querySelector('.google-search-form__input');

// Event handler for google search input keyup
function handleInputKeyup(e) {
	if (e.target.value.length > 0) {
		clearButton.classList.remove('hidden');
	} else {
		clearButton.classList.add('hidden');
	}
}

// Event handler for google search clear button click
function handleClearButtonClick() {
	searchInput.value = '';
	clearButton.classList.add('hidden');
}

// Event handler for google search input focus
function handleInputFocus() {
	searchFormRow.classList.add('google-search-form__row--grey');
}

// Event handler for google search input blur
function handleInputBlur() {
	searchFormRow.classList.remove('google-search-form__row--grey');
}

// Attach event listeners
searchInput.addEventListener('keyup', handleInputKeyup);
clearButton.addEventListener('click', handleClearButtonClick);
searchInput.addEventListener('focus', handleInputFocus);
searchInput.addEventListener('blur', handleInputBlur);
