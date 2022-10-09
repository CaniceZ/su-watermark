/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display/watermark.ts":
/*!**********************************!*\
  !*** ./src/display/watermark.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar watermark = {\n    /**\n     *  该方法只允许调用一次\n     *  @param:\n     *  @text == 水印内容\n     *  @sourceBody == 水印添加在哪里，不传就是body\n     * */\n    set: function (text, sourceBody) {\n        setWatermark(text, sourceBody);\n        // setInterval(() => {\n        //   if (document.getElementsByClassName('ygpwater').length === 0) {\n        //     id = setWatermark(text, sourceBody)\n        //   }\n        // }, 2000)\n        window.onresize = function () {\n            setWatermark(text, sourceBody);\n        };\n    }\n};\nvar setWatermark = function (text, sourceBody) {\n    var id = Math.random() * 10000 +\n        '-' +\n        Math.random() * 10000 +\n        '/' +\n        Math.random() * 10000;\n    if (document.getElementsByClassName('ygpwater').length > 0) {\n        document.body.removeChild(document.getElementsByClassName('ygpwater')[document.getElementsByClassName('ygpwater').length - 1]);\n    }\n    var can = document.createElement('canvas');\n    can.width = 305;\n    can.height = 190;\n    var cans = can.getContext('2d');\n    cans.rotate((-20 * Math.PI) / 180);\n    cans.font = '13px Microsoft JhengHei';\n    cans.fillStyle = 'rgba(0, 0, 0, .12)';\n    cans.textAlign = 'left';\n    cans.textBaseline = 'middle';\n    cans.fillText(text, can.width / 20, can.height);\n    var water_div = document.createElement('div');\n    water_div.id = id;\n    water_div.className = 'ygpwater';\n    water_div.style.pointerEvents = 'none';\n    water_div.style.background =\n        'url(' + can.toDataURL('image/png') + ') left top repeat';\n    if (sourceBody) {\n        water_div.style.width = '100%';\n        water_div.style.height = '100%';\n        sourceBody.appendChild(water_div);\n    }\n    else {\n        water_div.style.top = '3px';\n        water_div.style.left = '0px';\n        water_div.style.position = 'fixed';\n        water_div.style.zIndex = '100000';\n        water_div.style.width = document.documentElement.clientWidth + 'px';\n        water_div.style.height = document.documentElement.clientHeight + 'px';\n        document.body.appendChild(water_div);\n    }\n    monitor(water_div.getAttribute('style'), sourceBody, text);\n    return id;\n};\nfunction monitor(styleStr, sourceBody, text) {\n    var parentNode = document.getElementsByClassName('ygpwater')[0];\n    var observer = new MutationObserver(function () {\n        var wmInstance = parentNode;\n        if ((wmInstance && wmInstance.getAttribute('style') !== styleStr) ||\n            !wmInstance.getAttribute('style')) {\n            // 如果标签在，只修改了属性，重新赋值属性\n            if (wmInstance) {\n                // 避免一直触发\n                // observer.disconnect();\n                wmInstance.setAttribute('style', styleStr);\n            }\n            else {\n                observer.disconnect();\n            }\n        }\n        if (document.getElementsByClassName('ygpwater').length === 0) {\n            setWatermark(text, sourceBody);\n        }\n    });\n    observer.observe(document.body, {\n        childList: true,\n        attributes: true,\n        characterData: false,\n        subtree: true,\n        attributeOldValue: false,\n        characterDataOldValue: false\n    }); // 监听body节点\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (watermark);\n\n\n//# sourceURL=webpack://su-watermark/./src/display/watermark.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_watermark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/watermark */ \"./src/display/watermark.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_display_watermark__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://su-watermark/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});