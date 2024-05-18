'use strict';

const searchFormClearBtnEle = document.querySelector(
	'.google-search-form__icon-list-item--1'
);

const searchFormInputEle = document.querySelector('.google-search-form__input');
searchFormInputEle.addEventListener('keyup', e => {
	if (e.target.value.length > 0) {
		searchFormClearBtnEle.classList.remove('hidden');
	} else {
		searchFormClearBtnEle.classList.add('hidden');
	}
});

searchFormClearBtnEle.addEventListener('click', e => {
	searchFormInputEle.value = '';
});

// searchFormClearBtnEle.addEventListener()
