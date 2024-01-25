/**
 * Focus tracker - v1.1.0
 * Copyright 2021 Abel Brencsan
 * Released under the MIT License
 */

var FocusTracker = (function(){

	'use strict';

	var focusTracker = {};
	var className = 'keyboard-focus';
	var isUsingKeyboard = false;

	/**
	* Initialize focus tracker (public)
	*/
	var init = function() {
		addEvents();
	};

	/**
	* Add events to the document body (private)
	*/
	var addEvents = function() {
		document.body.addEventListener('keydown', preFocus);
		document.body.addEventListener('mousedown', preFocus);
		document.body.addEventListener('focusin', addFocus);
		document.body.addEventListener('focusout', removeFocus);
	};

	/**
	* Remove events from document body (private)
	*/
	var removeEvents = function() {
		document.body.removeEventListener('keydown', preFocus);
		document.body.removeEventListener('mousedown', preFocus);
		document.body.removeEventListener('focusin', addFocus);
		document.body.removeEventListener('focusout', removeFocus);
	};

	/**
	* Detect user is using keyboard or mouse (private)
	* @param event object
	*/
	var preFocus = function(event) {
		isUsingKeyboard = (event.type === 'keydown');
	};

	/**
	* Add focus tracker class on keyboard focus in (private)
	* @param event object
	*/
	var addFocus = function(event) {
		if (isUsingKeyboard) event.target.classList.add(className);
	};

	/**
	* Remove focus tracker class on focus out (private)
	* @param event object
	*/
	var removeFocus = function(event) {
		event.target.classList.remove(className);
	};

	/**
	* Destroy focus tracker (public)
	*/
	var destroy = function() {
		removeEvents();
	};

	/**
	* Get value of "isUsingKeyboard" (public)
	*/
	var getIsUsingKeyboard = function() {
		return isUsingKeyboard;
	};

	return {
		init: init,
		destroy: destroy,
		getIsUsingKeyboard: getIsUsingKeyboard
	};

})();

export { FocusTracker };
