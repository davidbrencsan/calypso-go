/**
 * Icons - v1.1.0
 * Copyright 2021 Abel Brencsan
 * Released under the MIT License
 */

var Icons = (function(){

	'use strict';

	/**
	* Initialize icons. It inserts given symbols into body. (public)
	*/
	var init = function() {
		var symbols = "";
		symbols += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ei-sprite" style="display:none">';
		symbols += '<symbol id="icon-arrow-back" viewBox="0 0 512 512"><path d="m243.53 87.768a24.002 24.002 0 0 0-16.498 7.2617l-144 144a24.002 24.002 0 0 0 0 33.941l144 144a24.002 24.002 0 1 0 33.941-33.941l-103.03-103.03h254.06a24.002 24.002 0 1 0 0-48h-254.06l103.03-103.03a24.002 24.002 0 0 0-17.443-41.203z"/></symbol>';
		symbols += '<symbol id="icon-arrow-down" viewBox="0 0 512 512"><path d="m255.64 75.66a24.002 24.002 0 0 0-23.639 24.34v254.06l-103.03-103.03a24.002 24.002 0 1 0-33.941 33.941l144 144a24.002 24.002 0 0 0 33.941 0l144-144a24.002 24.002 0 1 0-33.941-33.941l-103.03 103.03v-254.06a24.002 24.002 0 0 0-24.361-24.34z"/></symbol>';
		symbols += '<symbol id="icon-arrow-forward" viewBox="0 0 512 512"><path d="m267.75 87.758a24.002 24.002 0 0 0-16.719 41.213l103.03 103.03h-254.06a24.002 24.002 0 1 0 0 48h254.06l-103.03 103.03a24.002 24.002 0 1 0 33.941 33.941l144-144a24.002 24.002 0 0 0 0-33.941l-144-144a24.002 24.002 0 0 0-17.223-7.2715z"/></symbol>';
		symbols += '<symbol id="icon-arrow-up" viewBox="0 0 512 512"><path d="m255.65 76.004a24.002 24.002 0 0 0-16.617 7.0254l-144 144a24.002 24.002 0 1 0 33.941 33.941l103.03-103.03v254.06a24.002 24.002 0 1 0 48 0v-254.06l103.03 103.03a24.002 24.002 0 1 0 33.941-33.941l-144-144a24.002 24.002 0 0 0-17.324-7.0254z"/></symbol>';
		symbols += '<symbol id="icon-checkmark" viewBox="0 0 512 512"><path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"/></symbol>';
		symbols += '<symbol id="icon-close" viewBox="0 0 512 512"><path d="m143.83 127.84a16.002 16.002 0 0 0-11.146 27.477l100.69 100.69-100.69 100.69a16.002 16.002 0 1 0 22.629 22.629l100.69-100.69 100.69 100.69a16.002 16.002 0 1 0 22.629-22.629l-100.69-100.69 100.69-100.69a16.002 16.002 0 1 0-22.629-22.629l-100.69 100.69-100.69-100.69a16.002 16.002 0 0 0-11.482-4.8477z"/></symbol>';
		symbols += '<symbol id="icon-settings" viewBox="0 0 512 512">	<path d="m213.23 26a16.002 16.002 0 0 0-0.33985 0.0039c-12.839 0.27187-23.891 9.7618-26.102 22.412a16.002 16.002 0 0 0-0.084 0.52734l-6.7266 47.883c-8.1993 3.9773-16.088 8.5678-23.594 13.736a16.002 16.002 0 0 0-0.0723 0.0508c-0.0461 0.0321-0.0514 0.0325-0.10352 0.0117l-44.842-18.057a16.002 16.002 0 0 0-0.29102-0.11328c-12.086-4.5956-25.992 0.26166-32.588 11.383a16.002 16.002 0 0 0-0.0918 0.15625l-42.756 73.975c-0.0018 3e-3 -0.0021 7e-3 -0.0039 0.01-6.4621 11.147-3.9564 25.6 5.8828 33.92a16.002 16.002 0 0 0 0.44727 0.36328l38.189 30a16.002 16.002 0 0 0 0.01172 0.01l0.0078-0.0957c-0.4079 4.4979-0.64648 9.0878-0.64648 13.795 0 4.7328 0.25024 9.353 0.64062 13.875a16.002 16.002 0 0 0 0.01172 0.12891c0.0035 0.0366 0.0092 0.0201-0.01953 0.043l-38.143 29.947a16.002 16.002 0 0 0-0.32031 0.25977c-10.013 8.2864-12.614 22.884-6.0801 34.119l42.748 73.963a16.002 16.002 0 0 0 0.09766 0.16797c6.6033 11.112 20.51 15.957 32.59 11.357a16.002 16.002 0 0 0 0.27929-0.10937l44.887-18.068-0.0273-0.0195c9e-3 7e-3 0.02 0.0111 0.0293 0.0176v2e-3c7.4984 5.2388 15.405 9.8694 23.643 13.846a16.002 16.002 0 0 0 0.0781 0.0371c0.0381 0.0181 0.033 0.0109 0.0391 0.0527l-6e-3 -0.0527 6.7188 47.82a16.002 16.002 0 0 0 0.17188 0.9961c2.5387 12.343 13.487 21.427 26.086 21.645a16.002 16.002 0 0 0 0.27735 2e-3h85.539a16.002 16.002 0 0 0 0.33984-4e-3c12.839-0.27187 23.891-9.7618 26.102-22.412a16.002 16.002 0 0 0 0.084-0.52734l6.7266-47.883c8.1993-3.9773 16.088-8.5678 23.594-13.736a16.002 16.002 0 0 0 0.0723-0.0508c0.0461-0.0321 0.0514-0.0325 0.10352-0.0117l44.842 18.057a16.002 16.002 0 0 0 0.29102 0.11328c12.086 4.5956 25.992-0.26165 32.588-11.383a16.002 16.002 0 0 0 0.0918-0.15625l42.754-73.973v-2e-3c6.5191-11.231 3.9215-25.812-6.0762-34.1a16.002 16.002 0 0 0-0.33594-0.27148l-38.234-29.988c0.38808-4.5162 0.65304-9.0428 0.67968-13.578a16.002 16.002 0 0 0 0-0.0937c0-4.7328-0.24886-9.3174-0.60156-13.742a16.002 16.002 0 0 0-0.0156-0.19531c-3e-3 -0.0334-5e-3 -0.0259 0.0156-0.041l38.191-29.986a16.002 16.002 0 0 0 0.32031-0.25977c10.013-8.2864 12.614-22.884 6.0801-34.119l-42.748-73.963a16.002 16.002 0 0 0-0.0976-0.16797c-6.6033-11.113-20.51-15.958-32.59-11.358a16.002 16.002 0 0 0-0.27929 0.10938l-44.887 18.068 0.0273 0.0195c-9e-3 -7e-3 -0.02-0.011-0.0293-0.0176-2.8e-4 -2.1e-4 2.9e-4 -2e-3 0-2e-3 -7.4984-5.2388-15.405-9.8694-23.643-13.846a16.002 16.002 0 0 0-0.0781-0.03711c-0.0381-0.01815-0.033-0.01094-0.0391-0.05273l6e-3 0.05273-6.7188-47.82a16.002 16.002 0 0 0-0.17188-0.99609c-2.5388-12.343-13.487-21.426-26.086-21.644a16.002 16.002 0 0 0-0.27734-0.001953zm4.5176 32h76.557l6.0312 42.916a16.002 16.002 0 0 0 8e-3 0.0547c1.5269 10.603 8.2878 19.783 17.961 24.387l-0.0801-0.0391c6.7074 3.2377 13.145 7.0085 19.25 11.275a16.002 16.002 0 0 0 0.0273 0.0195c8.8373 6.1488 20.233 7.4382 30.221 3.4199a16.002 16.002 0 0 0 2e-3 0l40.523-16.312 38.205 66.102-34.443 27.043a16.002 16.002 0 0 0-0.0215 0.0156c-8.5145 6.7078-13.074 17.324-12.08 28.117l-0.0176-0.19727c0.30607 3.8397 0.49652 7.5605 0.49805 11.154-0.0387 6.219-0.49485 12.428-1.3691 18.586a16.002 16.002 0 0 0 5.9668 14.838l41.436 32.502-38.209 66.105-40.527-16.318a16.002 16.002 0 0 0-0.0566-0.0234c-10.007-3.9843-21.4-2.6698-30.236 3.4883l0.0723-0.0508c-6.1859 4.2598-12.685 8.0442-19.443 11.32a16.002 16.002 0 0 0-0.0156 8e-3c-9.5601 4.6465-16.206 13.795-17.672 24.322-2e-4 1e-3 -2e-3 2e-3 -2e-3 4e-3l-6.0803 43.263h-76.557l-6.0312-42.916a16.002 16.002 0 0 0-8e-3 -0.0547c-1.5269-10.603-8.2878-19.783-17.961-24.387l0.0801 0.0391c-6.7074-3.2377-13.145-7.0085-19.25-11.275a16.002 16.002 0 0 0-0.0273-0.0195c-8.8373-6.1488-20.233-7.4382-30.221-3.4199a16.002 16.002 0 0 0-2e-3 0l-40.523 16.312-38.205-66.102 34.443-27.043a16.002 16.002 0 0 0 0.06836-0.0527c8.4774-6.7295 12.998-17.342 11.98-28.117l0.0117 0.12891c-0.32961-3.818-0.52148-7.5158-0.52148-11.123 0-3.6328 0.18352-7.2441 0.51562-10.906a16.002 16.002 0 0 0 8e-3 -0.0957c0.90781-10.726-3.6701-21.237-12.141-27.879l-34.332-26.973 38.207-66.104 40.527 16.318a16.002 16.002 0 0 0 0.0566 0.0234c10.007 3.9843 21.4 2.6698 30.236-3.4883l-0.0723 0.0508c6.1859-4.2598 12.685-8.0442 19.443-11.32a16.002 16.002 0 0 0 0.0156-8e-3c9.5601-4.6465 16.206-13.795 17.672-24.322l2e-3 -4e-3zm33.621 118.13c-28.849 1.6822-55.058 18.965-67.684 45.65-14.429 30.498-8.1064 66.923 15.75 90.779s60.281 30.179 90.779 15.75c30.498-14.429 48.714-46.602 45.398-80.178a16.002 16.002 0 0 0-4e-3 -0.0254c-3.799-37.824-33.896-67.922-71.721-71.721a16.002 16.002 0 0 0-0.0254-4e-3c-4.197-0.41451-8.3729-0.49227-12.494-0.25195zm1.8281 31.941c2.4721-0.1412 4.9785-0.092 7.502 0.15625 22.867 2.3006 40.768 20.201 43.068 43.068 1.9904 20.229-8.8646 39.395-27.238 48.088-18.379 8.6952-40.088 4.9276-54.467-9.4512s-18.146-36.088-9.4512-54.467c7.6083-16.082 23.241-26.404 40.586-27.395z" /></symbol>';	
		symbols += '</svg>';
		document.querySelector("body").insertAdjacentHTML("beforeend", symbols);
	}

	return {
		init: init
	};

})();

export { Icons };
