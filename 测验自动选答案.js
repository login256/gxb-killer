// ==UserScript==
// @name         高校邦 测验 自动选出正确答案
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ...
// @author       You
// @match        *://buaa.class.gaoxiaobang.com/class/*/quiz/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
	'use strict';
	function delayer()
	{
		setTimeout(function(){
			if(document.querySelector(".question-item")===null)
			{
				delayer();
			}
			questionList.forEach(function (item, index) {
				item.answerList.forEach(function (item, index){
					if (item.correct == "1")
					{
						var answerId = item.answerId;
						Array.prototype.forEach.call(document.getElementsByTagName('i'), function (item, index){
							if (item.getAttribute('answer_id') == answerId)
							{
								item.click();
							}
						});
					}
				});
			});
            scrollBottom();
		},200);
	}
	delayer();
})();
