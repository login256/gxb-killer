// ==UserScript==
// @name         高校邦 课程 快进、跳题、跳页、失焦不暂停
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Please change what to be matched if you want to use this in other pages. Try to take over the world!
// @author       login256
// @match        *://buaa.class.gaoxiaobang.com/class/1953*/unit/*/chapter/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	function check()
	{
		if(document.getElementsByClassName("answer").length!==0)
		{
			if(document.getElementsByClassName('gxb-btn_ submit').length!==0) document.getElementsByClassName('gxb-btn_ submit')[0].click();
			if(document.getElementsByClassName('gxb-btn_ next').length!==0) document.getElementsByClassName('gxb-btn_ next')[0].click();
			if(document.getElementsByClassName('gxb-btn_ player').length!==0) document.getElementsByClassName('gxb-btn_ player')[0].click();
		}
		//出现视频内测验，由于不用选对(根本不用选），直接提交
		if(document.getElementsByClassName("player-video").length===0)
		{
			document.getElementsByClassName("gxb-next-blue")[0].click();
		}
		//非课程页面跳过
	}
	function speedUp()
	{
		if(document.getElementById("vjs_video_3_html5_api")===null)
		{
			setTimeout(speedUp,1000);
		}
		else
		{
			setTimeout(function(){var thv=document.getElementById("vjs_video_3_html5_api");thv.playbackRate=3;thv.muted=true;},0);
		}
	}
	//加速
	speedUp();
	window.setInterval(check,2333);
	window.onblur=function(){setTimeout(function(){if(document.getElementById("vjs_video_3_html5_api")!==null) document.getElementById("vjs_video_3_html5_api").play();},0);};
	//失焦暂停后重新播放（网站中只是失焦一瞬间会暂停，故直接播放就好）。
})();
