// 动态修改font-size值
// 1 个 font size 10分之一的宽度 
// import 'lib-flexible';

function remRefresh() {
	// 1、获取屏幕的宽度
	let clientWidth = document.documentElement.clientWidth;
	// 2、将屏幕等分10份
	let rem = clientWidth / 10;
	document.documentElement.style.fontSize = rem + 'px';
	document.body.style.fontSize = '12px';
}

window.addEventListener('pageshow', () => {
	remRefresh()
})
// 函数防抖
let timeoutId;
window.addEventListener('resize', () => {
timeoutId && clearTimeout(timeoutId);
timeoutId = setTimeout(() =>{
	remRefresh()
	}, 300)
})


import './index.css'


// 移动端适配的原则
// 1、写的px 设计稿的宽度
// 2、动态修改font-zise 10分之一的屏幕宽度
// 3、px2rem-loader 进行转换 将px  转换成 rem
// 4、rem = 1 根节点font-size