// ==UserScript==
// @name         高校邦 课程 快进、跳题、失焦不暂停
// @namespace    http://tampermonkey.net/
// @version      1.2.2
// @description  try to take over the world!
// @author       You
// @match        *://buaa.class.gaoxiaobang.com/class/1953*/unit/*/chapter/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	function start()
	{
		//加速
		var vid = document.getElementById("vjs_video_3_html5_api");
		if(vid!==undefined)
			vid.playbackRate = 3;
		var classFix = document.getElementsByClassName("gxb-icon-check unchecked");
		//勾选全部答案
		for(var i=0;i<classFix.length;i++)
		{
			var Fix = classFix[i];
			Fix.className="gxb-icon-check checked";
		}
		//提交
		var oBtn = document.getElementsByClassName('gxb-btn_ submit');
		for(var i=0;i<oBtn.length;i++)
		{
			var click = oBtn[i];
			click.click();
		}
		//继续观看
		var oBtn2 = document.getElementsByClassName('gxb-btn_ player');
		for(var i=0;i<oBtn2.length;i++)
		{
			var click = oBtn2[i];
			click.click();

		}

		//检测并跳过章节测试
		var testCon = document.getElementsByClassName("gxb-btn-pri gxb-btn-big quiz-join chapter_id");
		var testCon2 =  document.getElementsByClassName("gxb-btn-pri gxb-btn-big disable");
		var continueBtn = document.getElementsByClassName("gxb-next-blue");
		for(var r=0;r<testCon.length;r++)
		{
			var test = testCon[r];
			if(test.className=="gxb-btn-pri gxb-btn-big quiz-join chapter_id")
			{
				var clickContinue = continueBtn[r];
				clickContinue.click();
			}
		}
		for(var u=0;u<testCon2.length;u++)
		{
			var test2 = testCon2[u];
			if(test2.className=="gxb-btn-pri gxb-btn-big disable")
			{
				var clickContinue2 = continueBtn[u];
				clickContinue2.click();
			}
		}
		//检测并跳过讨论
		var dicCon = document.getElementsByClassName("gxb-btn-pri gxb-btn-nav post-submit");
		var dicCon2 = document.getElementsByClassName("gxb-btn-pri gxb-btn-nav post-submit-edit");
		var continueBtn = document.getElementsByClassName("gxb-next-blue");
		for(var f=0;f<dicCon.length;f++)
		{
			var test = dicCon[f];
			if(test.className=="gxb-btn-pri gxb-btn-nav post-submit")
			{
				var clickContinue = continueBtn[f];
				clickContinue.click();
			}
		}
		for(var f=0;f<dicCon.length;f++)
		{
			var test = dicCon[f];
			if(test.className=="gxb-btn-pri gxb-btn-nav post-submit-edit")
			{
				var clickContinue = continueBtn[f];
				clickContinue.click();
			}
		}
	}
	window.setInterval(start,3000);
	window.onblur=function(){setTimeout(function(){document.getElementsByTagName("video")[0].play();},0);};
	//失焦暂停后重新播放，（只是失焦一瞬间会暂停）。
})();
