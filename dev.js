// ==UserScript==
	// @name         自动听力
	// @version     2018.10.9
	// @description 不可描述，不要使用
	// @author       Aaron Liu
	// @supportURL
	// @license      MIT
	// @date         2018-10-9
	// @match        *://www.shanbay.com/sentence/*
	// @require           https://code.jquery.com/jquery-3.3.1.min.js
	// @run-at            document-end
	// @grant             unsafeWindow
	// @grant             GM_setClipboard
	// @namespace undefined
	// ==/UserScript==

	(function () {
		'use strict';

		// Your code here...
		setTimeout(function () {
			console.log('begin review...');
			$('.start-review-button').click();

			var h = setInterval(function () {
				$('.sentence-word-input, .answer-box').each(function (index, e) {
					var $e = $(e);
					console.log($e.attr('data'));
					$e.attr('value', $e.attr('data'));

					$e.focus();
					$e.blur();
				});

				setTimeout(function () {
					// btn-next continue continue-button
					$('.btn-know, .btn-next, .continue-button').click();

					if ($('#btn-checkin').length > 0) {
						clearInterval(h);
					}

				}, 8000 + Math.random() * 1000 * 2);
			}, 10000 + Math.random() * 1000 * 4);
		}, 1000);
	})();