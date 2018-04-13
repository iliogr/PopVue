/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Vtooltip.vue":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Vtooltip.vue ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nexports.default = {\n    name: 'Vtooltip',\n    props: ['options'],\n    data: function data() {\n        return {\n            xCord: 0,\n            yCord: 0,\n            style: {},\n            arrowStyle: {},\n            data: (0, _lodash.cloneDeep)(this.options),\n            maxWidth: window.innerWidth / 2,\n            maxHeight: window.innerHeight / 2,\n            viewPortHeight: window.innerHeight,\n            offset: 10\n        };\n    },\n\n    mounted: function mounted() {\n        if (!this.data) {\n            this.data = {};\n        } else {\n            this.style.background = this.options.backgroundColor;\n            this.style.color = this.data.color;\n            this.style['font-size'] = this.data.fontSize + \"px\";\n            this.style['text-align'] = this.data.textAlign;\n            this.arrowStyle['border-bottom-color'] = this.data.backgroundColor;\n        }\n    },\n    methods: {\n        hoverOn: function hoverOn(evt) {\n            var itemWidth = this.$el.children[0].children[0].getBoundingClientRect().width;\n            var itemHeight = this.$el.children[0].children[0].getBoundingClientRect().height;\n            var tooltipHeight = this.$el.children[1].getBoundingClientRect().height;\n            var tooltipWidth = this.$el.children[1].getBoundingClientRect().width;\n\n            this.xCord = this.$el.children[0].children[0].getBoundingClientRect().x;\n            this.yCord = this.$el.children[0].children[0].getBoundingClientRect().y;\n\n            if (this.xCord <= this.maxWidth && this.yCord > this.maxHeight) {\n                this.style.left = this.xCord + (this.data.hOffset || 0) + \"px\";\n                this.style.bottom = this.viewPortHeight - this.yCord + this.offset - (this.data.vOffset || 0) + \"px\";\n\n                this.arrowStyle.bottom = \"-9px\";\n                this.arrowStyle.left = (this.data.arrowOffset || 0) + 1 + \"px\";\n                this.arrowStyle.transform = \"rotate(180deg)\";\n            } else if (this.xCord <= this.maxWidth && this.yCord <= this.maxHeight) {\n                this.style.left = this.xCord + (this.data.hOffset || 0) + \"px\";\n                this.style.top = this.yCord + itemHeight - this.offset + (this.data.vOffset || 0) + \"px\";\n\n                this.arrowStyle.top = \"-9px\";\n                this.arrowStyle.left = (this.data.arrowOffset || 0) + 1 + \"px\";\n            } else if (this.xCord > this.maxWidth && this.yCord > this.maxHeight) {\n                this.style.bottom = this.viewPortHeight - this.yCord + this.offset - (this.data.vOffset || 0) + \"px\";\n                this.style.left = this.xCord - tooltipWidth + itemWidth + (this.data.hOffset || 0) + \"px\";\n\n                this.arrowStyle.bottom = \"-9px\";\n                this.arrowStyle.right = (-this.data.arrowOffset || 0) + 1 + \"px\";\n                this.arrowStyle.transform = \"rotate(180deg)\";\n            } else if (this.xCord > this.maxWidth && this.yCord <= this.maxHeight) {\n                this.style.top = this.yCord + itemHeight - this.offset + (this.data.vOffset || 0) + \"px\";\n                this.style.left = this.xCord - tooltipWidth + itemWidth + (this.data.hOffset || 0) + \"px\";\n\n                this.arrowStyle.top = \"-9px\";\n                this.arrowStyle.right = (-this.data.arrowOffset || 0) + 1 + \"px\";\n            }\n\n            this.$forceUpdate();\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/Vtooltip.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9de54574\",\"scoped\":true,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Vtooltip.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9de54574","scoped":true,"sourceMap":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Vtooltip.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.tooltip[data-v-9de54574] {\\n  --main-bg-color: #000;\\n  --arrow-size: 5px;\\n}\\n.tooltip .tooltip-text[data-v-9de54574] {\\n    position: fixed;\\n    visibility: hidden;\\n    opacity: 0;\\n    font-size: 10px;\\n    z-index: 999;\\n    right: 0;\\n    width: 120px;\\n    max-width: 200px;\\n    background: red;\\n    background: var(--main-bg-color);\\n    color: #e0e0e0;\\n    padding: 5px 10px;\\n    border-radius: 3px;\\n    margin-top: 25px;\\n    text-align: left;\\n    transition: opacity 0.5s, visibility 0s ease;\\n}\\n.tooltip .tooltip-text .arrow[data-v-9de54574] {\\n      content: '';\\n      position: absolute;\\n      z-index: 999;\\n      border-style: solid;\\n      border-bottom-width: var(--arrow-size);\\n      border-top-width: var(--arrow-size);\\n      border-left-width: var(--arrow-size);\\n      border-right-width: var(--arrow-size);\\n      border-bottom-color: var(--main-bg-color);\\n      border-top-color: transparent;\\n      border-left-color: transparent;\\n      border-right-color: transparent;\\n}\\n.tooltip .content:hover + .tooltip-text[data-v-9de54574] {\\n    visibility: visible;\\n    opacity: 1;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/Vtooltip.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-9de54574%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  scriptExports = scriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof scriptExports.default\n  if (type === 'object' || type === 'function') {\n    scriptExports = scriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/component-normalizer.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9de54574\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Vtooltip.vue":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9de54574","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Vtooltip.vue ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"tooltip\", on: { mouseover: _vm.hoverOn } }, [\n    _c(\"div\", { staticClass: \"content\" }, [_vm._t(\"content\")], 2),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"tooltip-text\", style: _vm.style },\n      [\n        _c(\"span\", { staticClass: \"arrow\", style: _vm.arrowStyle }),\n        _vm._v(\" \"),\n        _vm._t(\"tooltip-text\")\n      ],\n      2\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/Vtooltip.vue?./node_modules/vue-loader/lib/template-compiler?%7B%22id%22:%22data-v-9de54574%22,%22hasScoped%22:true,%22optionsId%22:%220%22,%22buble%22:%7B%22transforms%22:%7B%7D%7D%7D!./node_modules/vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9de54574\",\"scoped\":true,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Vtooltip.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-9de54574","scoped":true,"sourceMap":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Vtooltip.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/style-compiler?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9de54574\",\"scoped\":true,\"sourceMap\":false}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Vtooltip.vue */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-9de54574\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Vtooltip.vue\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"e8479be0\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/Vtooltip.vue?./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?%7B%22optionsId%22:%220%22,%22vue%22:true,%22id%22:%22data-v-9de54574%22,%22scoped%22:true,%22sourceMap%22:false%7D!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./src/Vtooltip.vue":
/*!**************************!*\
  !*** ./src/Vtooltip.vue ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./Vtooltip.vue */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Vtooltip.vue\");\n/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9de54574_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{\"id\":\"data-v-9de54574\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./Vtooltip.vue */ \"./node_modules/vue-loader/lib/template-compiler/index.js?{\\\"id\\\":\\\"data-v-9de54574\\\",\\\"hasScoped\\\":true,\\\"optionsId\\\":\\\"0\\\",\\\"buble\\\":{\\\"transforms\\\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Vtooltip.vue\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/component-normalizer */ \"./node_modules/vue-loader/lib/runtime/component-normalizer.js\");\nvar disposed = false\nfunction injectStyle (context) {\n  if (disposed) return\n  __webpack_require__(/*! !vue-style-loader!css-loader!../node_modules/vue-loader/lib/style-compiler/index?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-9de54574\",\"scoped\":true,\"sourceMap\":false}!sass-loader!../node_modules/vue-loader/lib/selector?type=styles&index=0!./Vtooltip.vue */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\\\"optionsId\\\":\\\"0\\\",\\\"vue\\\":true,\\\"id\\\":\\\"data-v-9de54574\\\",\\\"scoped\\\":true,\\\"sourceMap\\\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Vtooltip.vue\")\n}\n/* script */\n\n\n/* template */\n\n/* template functional */\nvar __vue_template_functional__ = false\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-9de54574\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\n\nvar Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_0___default.a,\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9de54574_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_1__[\"render\"],\n  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_9de54574_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Vtooltip_vue__WEBPACK_IMPORTED_MODULE_1__[\"staticRenderFns\"],\n  __vue_template_functional__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"src/Vtooltip.vue\"\n\n/* hot reload */\nif (false) {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//# sourceURL=webpack:///./src/Vtooltip.vue?");

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Vtooltip = __webpack_require__(/*! ./Vtooltip.vue */ \"./src/Vtooltip.vue\");\n\nvar _Vtooltip2 = _interopRequireDefault(_Vtooltip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Vtooltip2.default;\n\n//# sourceURL=webpack:///./src/plugin.js?");

/***/ }),

/***/ "lodash":
/*!****************************************************************!*\
  !*** external {"commonjs":"lodash","amd":"lodash","root":"_"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack:///external_%7B%22commonjs%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });