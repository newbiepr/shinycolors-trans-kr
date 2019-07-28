// ==UserScript==
// @name         샤니마스 한글 패치
// @namespace    https://github.com/newbiepr/shinycolors-trans-kr
// @version      0.5.14
// @description  샤니마스 한글 패치 스크립트입니다.
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       Source : biuuu(https://github.com/biuuu/ShinyColors)
// @match        https://shinycolors.enza.fun/*
// @run-at       document-start
// @updateURL    https://newbiepr.github.io/shinymaskr/ShinyColors.user.js
// @supportURL   https://github.com/newbiepr/shinycolors-trans-kr/issues
// ==/UserScript==
(function (http, https, url, assert, tty, util, os, zlib) {
	'use strict';

	const ENVIRONMENT = "";
	    const DEV = false;
	    const SHOW_UPDATE_TEXT = false;

	http = http && http.hasOwnProperty('default') ? http['default'] : http;
	https = https && https.hasOwnProperty('default') ? https['default'] : https;
	url = url && url.hasOwnProperty('default') ? url['default'] : url;
	assert = assert && assert.hasOwnProperty('default') ? assert['default'] : assert;
	tty = tty && tty.hasOwnProperty('default') ? tty['default'] : tty;
	util = util && util.hasOwnProperty('default') ? util['default'] : util;
	os = os && os.hasOwnProperty('default') ? os['default'] : os;
	zlib = zlib && zlib.hasOwnProperty('default') ? zlib['default'] : zlib;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol = _root.Symbol;

	var _Symbol = Symbol;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
	}

	var isString_1 = isString;

	const tagText = text => {
	  return "\u200B".concat(text);
	};

	const restoreConsole = () => {
	  const iframe = document.createElement('iframe');
	  iframe.style.display = 'none';
	  document.body.appendChild(iframe);
	  return iframe.contentWindow.console;
	};

	const isDomain = str => {
	  if (!/^https?:\/\//.test(str)) return false;
	  if (/\s/.test(str.trim())) return false;
	  return true;
	};

	const trim = (str, full = false) => {
	  if (!str) return '';
	  return full ? str.trim() : str.trimEnd();
	};

	const trimWrap = (str, full) => {
	  return trim(str, full).replace(/\\r/g, '\r').replace(/\\n/g, '\n');
	};

	const pureRE = str => {
	  return str.replace(/\?/g, '\\?').replace(/\./g, '\\.').replace(/\*/g, '\\*').replace(/\+/g, '\\+').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
	};

	let _console;

	if (ENVIRONMENT === 'development') {
	  _console = restoreConsole();
	}

	const log = (...args) => {
	  if (ENVIRONMENT === 'development') {
	    _console.log(...args);
	  }
	};

	const tryDownload = (content, filename) => {
	  const eleLink = document.createElement('a');
	  eleLink.download = filename;
	  eleLink.style.display = 'none';
	  const blob = new Blob([content], {
	    type: 'text/csv'
	  });
	  eleLink.href = URL.createObjectURL(blob);
	  document.body.appendChild(eleLink);
	  eleLink.click();
	  document.body.removeChild(eleLink);
	};

	const replaceWrap = text => {
	  if (isString_1(text)) {
	    return text.replace(/\r?\n|\r/g, '\\n');
	  }

	  return text;
	};

	const removeWrap = text => {
	  if (isString_1(text)) {
	    return text.replace(/\r?\n|\r/g, '');
	  }

	  return text;
	};

	const replaceWords = (str, map) => {
	  if (!str) return str;
	  let _str = str;

	  for (let [key, val] of map) {
	    if (!key || key.length < 2) continue;
	    const expr = key.replace(/\?/g, '\\?').replace(/\./g, '\\.').replace(/\*/g, '\\*').replace(/\+/g, '\\+');
	    _str = _str.replace(new RegExp(expr, 'g'), val);
	  }

	  return _str;
	};

	const replaceQuote = str => {
	  return str.replace(/"([^"]*)"/g, '“$1”').replace(/'([^']*)'/g, '“$1”');
	};

	const speakerList = ['プロデューサー', '審査員'];

	const transSpeaker = (item, nameMap) => {
	  if (item.speaker) {
	    const speaker = trim(item.speaker, true);

	    if (speakerList.includes(speaker) && nameMap.has(speaker)) {
	      item.speaker = tagText(nameMap.get(speaker));
	    }
	  }
	};

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike_1(value) && _baseGetTag(value) == boolTag);
	}

	var isBoolean_1 = isBoolean;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	var version = "0.5.14";

	const PREVIEW_COUNT = 5;
	const config = {
	  origin: 'https://newbiepr.github.io/shinymaskr',
	  hash: '',
	  localHash: '',
	  version: version,
	  story: 'normal',
	  timeout: 30,
	  font1: 'yuanti',
	  font2: 'heiti',
	  auto: 'on'
	};
	const defaultConfig = Object.assign({}, config);
	const fontList = ['yuanti', 'heiti', 'yuanti2'];
	const FONT = {
	  HEITI_JA: 'UDKakugo_SmallPr6-B',
	  HEITI_TRANS: "sczh-heiti,UDKakugo_SmallPr6-B",
	  YUAN_JA: 'HummingStd-E',
	  YUAN_TRANS: "sczh-yuanti,HummingStd-E"
	};
	const _keys = ['origin', 'font1', 'font2', 'timeout', 'story', 'auto'];
	const keys = DEV ? _keys.slice(1, _keys.length) : _keys;

	const setFont = () => {
	  FONT.HEITI_TRANS = "".concat(fontList.includes(config.font2) ? 'sczh-' : '').concat(config.font2, ",").concat(FONT.HEITI_JA);
	  FONT.YUAN_TRANS = "".concat(fontList.includes(config.font1) ? 'sczh-' : '').concat(config.font1, ",").concat(FONT.YUAN_JA);
	};

	const fixDefault = data => {
	  if (data.origin === 'https://newbiepr.github.io/shinymaskr') {
	    data.origin = defaultConfig.origin;
	  }
	};

	const getLocalConfig = () => {
	  const str = localStorage.getItem('sczh:setting');
	  let setting = JSON.parse(str);
	  if (!isPlainObject_1(setting)) setting = {};
	  fixDefault(setting);
	  const {
	    origin
	  } = setting;

	  if (isDomain(origin)) {
	    config.origin = origin.trim();
	  }

	  keys.forEach(key => {
	    let value = setting[key];
	    if (isString_1(value)) value = value.trim();

	    if (isBoolean_1(value) || value) {
	      config[key] = value;
	    }
	  });
	  setFont();

	  if (DEV) {
	    config.origin = 'http://localhost:15944';
	  }
	};

	const saveConfig = () => {
	  const data = {};
	  keys.forEach(key => {
	    if (config[key] !== defaultConfig[key]) {
	      data[key] = config[key];
	    }
	  });
	  setFont();
	  localStorage.setItem('sczh:setting', JSON.stringify(data));
	};

	const getConfigFromHash = () => {
	  let str = location.hash;
	  str = str.slice(1).replace(/\?tdsourcetag=s_pc(tim|qq)_aiomsg/, '');
	  let arr = str.split(';');
	  arr.forEach(_str => {
	    let _arr = _str.split('=');

	    let k = decodeURIComponent(_arr[0].trim());
	    let v = _arr[1] ? decodeURIComponent(_arr[1].trim()) : '';

	    if (k && keys.includes(k)) {
	      if (v) {
	        config[k] = v;
	      } else {
	        config[k] = defaultConfig[k];
	      }

	      saveConfig();
	    }
	  });
	};

	const getLocalHash = () => {
	  try {
	    const str = sessionStorage.getItem('sczh:data');
	    const data = JSON.parse(str);
	    config.localHash = data.hash;
	  } catch (err) {// ignore
	  }
	};

	getLocalConfig();
	getLocalHash();
	getConfigFromHash();
	window.addEventListener('hashchange', getConfigFromHash);

	const {
	  origin
	} = config;
	let fetchInfo = {
	  status: 'init',
	  result: false,
	  data: null
	};

	const tryFetch = async () => {
	  if (fetch) {
	    try {
	      const res = await fetch("".concat(origin, "/manifest.json"));
	      const data = await res.json();
	      fetchInfo.data = data;
	      fetchInfo.result = true;
	    } catch (e) {}
	  }

	  fetchInfo.status = 'finished';
	};

	const request = async pathname => {
	  if (fetchInfo.result) {
	    return new Promise((rev, rej) => {
	      let timer = setTimeout(() => {
	        rej("\u52A0\u8F7D".concat(pathname, "\u8D85\u65F6"));
	      }, config.timeout * 1000);
	      fetch("".concat(origin).concat(pathname)).then(res => {
	        clearTimeout(timer);
	        const type = res.headers.get('content-type');

	        if (type && type.includes('json')) {
	          return res.json();
	        }

	        return res.text();
	      }).then(rev).catch(rej);
	    });
	  } else {
	    return await fetchData(pathname);
	  }
	};

	const getHash = new Promise((rev, rej) => {
	  if (fetchInfo.status !== 'finished') {
	    tryFetch().then(() => {
	      const beforeStart = data => {
	        config.newVersion = data.version;
	        config.hash = data.hash;
	      };

	      if (fetchInfo.result) {
	        beforeStart(fetchInfo.data);
	        rev(fetchInfo.data);
	      } else {
	        rej('网络错误');
	      }
	    }).catch(rej);
	  } else {
	    rev(fetchInfo.data.hash);
	  }
	});

	const fetchWithHash = async pathname => {
	  const {
	    hash
	  } = await getHash;
	  const data = await request("".concat(pathname, "?v=").concat(hash));
	  return data;
	};

	var papaparse_min = createCommonjsModule(function (module, exports) {
	/* @license
	Papa Parse
	v4.6.3
	https://github.com/mholt/PapaParse
	License: MIT
	*/
	Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),function(e,t){module.exports=t();}(commonjsGlobal,function(){var s,e,f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},n=!f.document&&!!f.postMessage,o=n&&/(\?|&)papaworker(=|&|$)/.test(f.location.search),a=!1,h={},u=0,k={parse:function(e,t){var r=(t=t||{}).dynamicTyping||!1;z(r)&&(t.dynamicTypingFunction=r,r={});if(t.dynamicTyping=r,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var i=function(){if(!k.WORKERS_SUPPORTED)return !1;if(!a&&null===k.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=k.SCRIPT_PATH||s;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var t=new f.Worker(e);return t.onmessage=m,t.id=u++,h[t.id]=t}();return i.userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void i.postMessage({input:e,config:t,workerId:i.id})}var n=null;"string"==typeof e?n=t.download?new c(t):new _(t):!0===e.readable&&z(e.read)&&z(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new p(t));return n.stream(e)},unparse:function(e,t){var i=!1,g=!0,m=",",y="\r\n",n='"',r=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(r=t.skipEmptyLines);"string"==typeof t.newline&&(y=t.newline);"string"==typeof t.quoteChar&&(n=t.quoteChar);"boolean"==typeof t.header&&(g=t.header);}();var s=new RegExp(M(n),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return o(null,e,r);if("object"==typeof e[0])return o(a(e[0]),e,r)}else if("object"==typeof e)return "string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:a(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),o(e.fields||[],e.data||[],r);throw"exception: Unable to serialize unrecognized input";function a(e){if("object"!=typeof e)return [];var t=[];for(var r in e)t.push(r);return t}function o(e,t,r){var i="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(i+=m),i+=v(e[a],a);0<t.length&&(i+=y);}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(r&&!n&&(u="greedy"===r?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===r&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c]);}u=""===d.join("").trim();}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(i+=m);var _=n&&s?e[p]:p;i+=v(t[o][_],p);}o<t.length-1&&(!r||0<h&&!f)&&(i+=y);}}return i}function v(e,t){if(null==e)return "";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);e=e.toString().replace(s,n+n);var r="boolean"==typeof i&&i||Array.isArray(i)&&i[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return !0;return !1}(e,k.BAD_DELIMITERS)||-1<e.indexOf(m)||" "===e.charAt(0)||" "===e.charAt(e.length-1);return r?n+e+n:e}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!n&&!!f.Worker,k.SCRIPT_PATH=null,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=v,k.ParserHandle=r,k.NetworkStreamer=c,k.FileStreamer=p,k.StringStreamer=_,k.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var r=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return !0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},r)});}),e(),this;function e(){if(0!==h.length){var e,t,r,i,n=h[0];if(z(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,r=n.inputElem,i=s.reason,void(z(o.error)&&o.error({name:e},t,r,i));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config));}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){z(a)&&a(e,n.file,n.inputElem),u();},k.parse(n.file,n.instanceConfig);}else z(o.complete)&&o.complete();}function u(){h.splice(0,1),e();}};}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new r(t),(this._handle.streamer=this)._config=t;}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r);}this.isFirstChunk=!1;var i=this._partialLine+e;this._partialLine="";var n=this._handle.parse(i,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=i.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:k.WORKER_ID,finished:a});else if(z(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return;n=void 0,this._completeResults=void 0;}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!z(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}},this._sendError=function(e){z(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1});};}function c(e){var i;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded();}:function(){this._readChunk();},this.stream=function(e){this._input=e,this._nextChunk();},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(i=new XMLHttpRequest,this._config.withCredentials&&(i.withCredentials=this._config.withCredentials),n||(i.onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)),i.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)i.setRequestHeader(t,e[t]);}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;i.setRequestHeader("Range","bytes="+this._start+"-"+r),i.setRequestHeader("If-None-Match","webkit-no-cache");}try{i.send();}catch(e){this._chunkError(e.message);}n&&0===i.status?this._chunkError():this._start+=this._config.chunkSize;}},this._chunkLoaded=function(){4===i.readyState&&(i.status<200||400<=i.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return -1;return parseInt(t.substr(t.lastIndexOf("/")+1))}(i),this.parseChunk(i.responseText)));},this._chunkError=function(e){var t=i.statusText||e;this._sendError(new Error(t));};}function p(e){var i,n;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),l.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((i=new FileReader).onload=w(this._chunkLoaded,this),i.onerror=w(this._chunkError,this)):i=new FileReaderSync,this._nextChunk();},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk();},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t);}var r=i.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:r}});},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result);},this._chunkError=function(){this._sendError(i.error);};}function _(e){var r;l.call(this,e=e||{}),this.stream=function(e){return r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}};}function g(e){l.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause();},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume();},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError);},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0);},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0;},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()));}catch(e){this._streamError(e);}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e);},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("");},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError);},this);}function r(g){var a,o,h,i=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,n=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,r=0,s=0,u=!1,e=!1,f=[],d={data:[],errors:[],meta:{}};if(z(g.step)){var l=g.step;g.step=function(e){if(d=e,p())c();else{if(c(),0===d.data.length)return;r+=e.data.length,g.preview&&r>g.preview?o.abort():l(d,t);}};}function m(e){return "greedy"===g.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function c(){if(d&&h&&(y("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),h=!1),g.skipEmptyLines)for(var e=0;e<d.data.length;e++)m(d.data[e])&&d.data.splice(e--,1);return p()&&function(){if(!d)return;for(var e=0;p()&&e<d.data.length;e++)for(var t=0;t<d.data[e].length;t++){var r=d.data[e][t];g.trimHeaders&&(r=r.trim()),f.push(r);}d.data.splice(0,1);}(),function(){if(!d||!g.header&&!g.dynamicTyping&&!g.transform)return d;for(var e=0;e<d.data.length;e++){var t,r=g.header?{}:[];for(t=0;t<d.data[e].length;t++){var i=t,n=d.data[e][t];g.header&&(i=t>=f.length?"__parsed_extra":f[t]),g.transform&&(n=g.transform(n,i)),n=_(i,n),"__parsed_extra"===i?(r[i]=r[i]||[],r[i].push(n)):r[i]=n;}d.data[e]=r,g.header&&(t>f.length?y("FieldMismatch","TooManyFields","Too many fields: expected "+f.length+" fields but parsed "+t,s+e):t<f.length&&y("FieldMismatch","TooFewFields","Too few fields: expected "+f.length+" fields but parsed "+t,s+e));}g.header&&d.meta&&(d.meta.fields=f);return s+=d.data.length,d}()}function p(){return g.header&&0===f.length}function _(e,t){return r=e,g.dynamicTypingFunction&&void 0===g.dynamicTyping[r]&&(g.dynamicTyping[r]=g.dynamicTypingFunction(r)),!0===(g.dynamicTyping[r]||g.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(i.test(t)?parseFloat(t):n.test(t)?new Date(t):""===t?null:t):t;var r;}function y(e,t,r,i){d.errors.push({type:e,code:t,message:r,row:i});}this.parse=function(e,t,r){var i=g.quoteChar||'"';if(g.newline||(g.newline=function(e,t){e=e.substr(0,1048576);var r=new RegExp(M(t)+"([^]*?)"+M(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return "\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(e,i)),h=!1,g.delimiter)z(g.delimiter)&&(g.delimiter=g.delimiter(e),d.meta.delimiter=g.delimiter);else{var n=function(e,t,r,i){for(var n,s,a,o=[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP],h=0;h<o.length;h++){var u=o[h],f=0,d=0,l=0;a=void 0;for(var c=new v({comments:i,delimiter:u,newline:t,preview:10}).parse(e),p=0;p<c.data.length;p++)if(r&&m(c.data[p]))l++;else{var _=c.data[p].length;d+=_,void 0!==a?1<_&&(f+=Math.abs(_-a),a=_):a=0;}0<c.data.length&&(d/=c.data.length-l),(void 0===s||s<f)&&1.99<d&&(s=f,n=u);}return {successful:!!(g.delimiter=n),bestDelimiter:n}}(e,g.newline,g.skipEmptyLines,g.comments);n.successful?g.delimiter=n.bestDelimiter:(h=!0,g.delimiter=k.DefaultDelimiter),d.meta.delimiter=g.delimiter;}var s=E(g);return g.preview&&g.header&&s.preview++,a=e,o=new v(s),d=o.parse(a,t,r),c(),u?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,o.abort(),a=a.substr(o.getCharIndex());},this.resume=function(){u=!1,t.streamer.parseChunk(a,!0);},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),d.meta.aborted=!0,z(g.complete)&&g.complete(d),a="";};}function M(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(e){var S,O=(e=e||{}).delimiter,x=e.newline,T=e.comments,I=e.step,A=e.preview,D=e.fastMode,L=S=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(L=e.escapeChar),("string"!=typeof O||-1<k.BAD_DELIMITERS.indexOf(O))&&(O=","),T===O)throw"Comment character same as delimiter";!0===T?T="#":("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==x&&"\r"!==x&&"\r\n"!==x&&(x="\n");var P=0,F=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw"Input must be a string";var n=i.length,e=O.length,s=x.length,a=T.length,o=z(I),h=[],u=[],f=[],d=P=0;if(!i)return C();if(D||!1!==D&&-1===i.indexOf(S)){for(var l=i.split(x),c=0;c<l.length;c++){if(f=l[c],P+=f.length,c!==l.length-1)P+=x.length;else if(r)return C();if(!T||f.substr(0,a)!==T){if(o){if(h=[],k(f.split(O)),R(),F)return C()}else k(f.split(O));if(A&&A<=c)return h=h.slice(0,A),C(!0)}}return C()}for(var p,_=i.indexOf(O,P),g=i.indexOf(x,P),m=new RegExp(M(L)+M(S),"g");;)if(i[P]!==S)if(T&&0===f.length&&i.substr(P,a)===T){if(-1===g)return C();P=g+s,g=i.indexOf(x,P),_=i.indexOf(O,P);}else if(-1!==_&&(_<g||-1===g))f.push(i.substring(P,_)),P=_+e,_=i.indexOf(O,P);else{if(-1===g)break;if(f.push(i.substring(P,g)),w(g+s),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0)}else for(p=P,P++;;){if(-1===(p=i.indexOf(S,p+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:P}),E();if(p===n-1)return E(i.substring(P,p).replace(m,S));if(S!==L||i[p+1]!==L){if(S===L||0===p||i[p-1]!==L){var y=b(-1===g?_:Math.min(_,g));if(i[p+1+y]===O){f.push(i.substring(P,p).replace(m,S)),P=p+1+y+e,_=i.indexOf(O,P),g=i.indexOf(x,P);break}var v=b(g);if(i.substr(p+1+v,s)===x){if(f.push(i.substring(P,p).replace(m,S)),w(p+1+v+s),_=i.indexOf(O,P),o&&(R(),F))return C();if(A&&h.length>=A)return C(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:P}),p++;}}else p++;}return E();function k(e){h.push(e),d=P;}function b(e){var t=0;if(-1!==e){var r=i.substring(p+1,e);r&&""===r.trim()&&(t=r.length);}return t}function E(e){return r||(void 0===e&&(e=i.substr(P)),f.push(e),P=n,k(f),o&&R()),C()}function w(e){P=e,k(f),f=[],g=i.indexOf(x,P);}function C(e){return {data:h,errors:u,meta:{delimiter:O,linebreak:x,aborted:F,truncated:!!e,cursor:d+(t||0)}}}function R(){I(C()),h=[],u=[];}},this.abort=function(){F=!0;},this.getCharIndex=function(){return P};}function m(e){var t=e.data,r=h[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}});},pause:b,resume:b};if(z(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:[t.results.data[s]],errors:t.results.errors,meta:t.results.meta},n),!i);s++);delete t.results;}else z(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results);}t.finished&&!i&&y(t.workerId,t.results);}function y(e,t){var r=h[e];z(r.userComplete)&&r.userComplete(t),r.terminate(),delete h[e];}function b(){throw"Not implemented."}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=E(e[r]);return t}function w(e,t){return function(){e.apply(t,arguments);}}function z(e){return "function"==typeof e}return o?f.onmessage=function(e){var t=e.data;void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var r=k.parse(t.input,t.config);r&&f.postMessage({workerId:k.WORKER_ID,results:r,finished:!0});}}:k.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),s=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0;},!0):a=!0),(c.prototype=Object.create(l.prototype)).constructor=c,(p.prototype=Object.create(l.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(g.prototype=Object.create(l.prototype)).constructor=g,k});
	});

	const parseCsv = str => {
	  try {
	    return papaparse_min.parse(str.replace(/^\ufeff/, ''), {
	      header: true
	    }).data;
	  } catch (err) {
	    console.log(err);
	    return {};
	  }
	};

	let data$1 = null;

	const getLocalData = async type => {
	  if (DEV) return false;
	  if (data$1) return data$1[type];
	  const {
	    hash
	  } = await getHash;

	  try {
	    const str = localStorage.getItem('sczh:data');
	    if (!str) return false;
	    data$1 = JSON.parse(str);

	    if (data$1.hash !== hash) {
	      data$1 = null;
	      localStorage.removeItem('sczh:data');
	      localStorage.removeItem('sczh:data');
	      return false;
	    }

	    return data$1[type];
	  } catch (err) {
	    console.log(err);
	  }

	  return false;
	};

	const setLocalData = (type, value) => {
	  if (DEV) return false;
	  if (!data$1) data$1 = {
	    hash: config.hash
	  };
	  data$1[type] = value;
	  const str = JSON.stringify(data$1);

	  try {
	    localStorage.setItem('sczh:data', str);
	  } catch (err) {
	    console.log(err);
	  }
	};

	const phraseMap = new Map();
	let loaded = false;

	const getPhrase = async (full = false) => {
	  if (!loaded) {
	    let csv = await getLocalData('phrase');
	    csv = await fetchWithHash('/data/phrase.csv');
	    setLocalData('phrase', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.name) {
	        const _name = trim(item.name);

	        const _zh = trimWrap(item.zh);

	        if (_name && (_zh || full)) {
	          phraseMap.set(_name, tagText(_zh));
	        }
	      }
	    });
	    loaded = true;
	  }

	  return phraseMap;
	};

	let phraseMap$1 = null;

	const getPhraseObj = async () => {
	  let phrases;

	  try {
	    const {
	      moduleId
	    } = await getHash;
	    const modulePhrases = primJsp([], [], [moduleId.PHRASE]);
	    phrases = modulePhrases.default._polyglot.phrases;
	  } catch (e) {
	    log(e);
	  }

	  return phrases;
	};

	async function transPhrase() {
	  const obj = await getPhraseObj();
	  if (!obj) return; // if (ENVIRONMENT === 'development') {
	  //   phraseMap = await getPhrase(true)
	  //   collectPhrases(obj)
	  // }

	  phraseMap$1 = await getPhrase();

	  for (let [key, value] of phraseMap$1) {
	    obj[key] = value;
	  }
	}

	const itemMap = new Map();
	const itemLimitMap = new Map();
	let loaded$1 = false;

	const getItem = async () => {
	  if (!loaded$1) {
	    let csv = await getLocalData('item');
	    csv = await fetchWithHash('/data/item.csv');
	    setLocalData('item', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.text) {
	        const text = trim(item.text, true);
	        const trans = trimWrap(item.trans, true);
	        const type = trim(item.type, true) || 'normal';

	        if (text && trans && text !== trans) {
	          if (type === 'limit') {
	            itemLimitMap.set(text, trans);
	          } else {
	            itemMap.set(text, trans);
	          }
	        }
	      }
	    });
	    loaded$1 = true;
	  }

	  return {
	    itemMap,
	    itemLimitMap
	  };
	};

	const nameMap = new Map();
	let loaded$2 = false;

	const getName = async () => {
	  if (!loaded$2) {
	    let csv = await getLocalData('name');
	    csv = await fetchWithHash('/data/name.csv');
	    setLocalData('name', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      const name = trim(item.name, true);
	      const trans = trim(item.trans, true);

	      if (name && trans && name !== trans) {
	        nameMap.set(name, trans);
	      }
	    });
	    loaded$2 = true;
	  }

	  return nameMap;
	};

	let commonMap = new Map();
	let loaded$3 = false;

	const getCommMap = async () => {
	  if (!loaded$3) {
	    let csv = await getLocalData('common');
	    csv = await fetchWithHash('/data/common.csv');
	    setLocalData('common', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.ja) {
	        const _ja = trimWrap(item.ja);

	        const _zh = trimWrap(item.zh);

	        if (_ja && _zh && _ja !== _zh) {
	          commonMap.set(_ja, _zh);
	        }
	      }
	    });
	    const {
	      itemMap
	    } = await getItem();
	    const nameMap = await getName();
	    commonMap = new Map([...itemMap, ...nameMap, ...commonMap]);
	    loaded$3 = true;
	  }

	  return commonMap;
	};

	const storyTemp = new Map();
	const storyTitle = new Map();
	const commStoryMap = new Map();
	let commStoryLoaded = false;
	let storyIndex = null;

	const collectStoryTitle = data => {
	  if (data.communications && data.communications.length) {
	    data.communications.forEach(item => {
	      storyTitle.set(item.communicationId, item.title);
	    });
	  } else if (data.idol && data.idol.produceIdolEvents) {
	    data.idol.produceIdolEvents.forEach(item => {
	      storyTitle.set(item.id, item.title);
	    });
	    data.idol.produceAfterEvents.forEach(item => {
	      storyTitle.set(item.id, item.title);
	    });
	  } else if (data.supportIdol.produceSupportIdolEvents) {
	    data.supportIdol.produceSupportIdolEvents.forEach(item => {
	      storyTitle.set(item.id, item.title);
	    });
	  }

	  return storyTitle;
	};

	const getStoryMap = csv => {
	  const list = parseCsv(csv);
	  const storyMap = new Map();
	  list.forEach(item => {
	    const id = trim(item.id, true);
	    const text = removeWrap(trimWrap(item.text));
	    const trans = trimWrap(item.trans);
	    const name = trim(item.name, true);

	    if (text && trans) {
	      if (id && !/^0+$/.test(id) && id !== 'select') {
	        storyMap.set(id, tagText(trans));
	      } else {
	        if (id === 'select') {
	          storyMap.set("".concat(text, "-select"), tagText(trans));
	        } else {
	          storyMap.set(text, tagText(trans));
	        }
	      }
	    }

	    if (id && name && id === 'info') {
	      storyMap.set('name', name);
	    }
	  });
	  return storyMap;
	};

	const getStory = async name => {
	  if (!storyIndex) {
	    let storyIndexStr = await getLocalData('story-index');

	    if (!storyIndexStr) {
	      const storyIndexData = await fetchWithHash('/story.json');
	      storyIndex = new Map(storyIndexData);
	      setLocalData('story-index', JSON.stringify(storyIndexStr));
	    } else {
	      storyIndex = new Map(JSON.parse(storyIndexStr));
	    }
	  }

	  if (storyIndex.has(name)) {
	    if (storyTemp.has(name)) {
	      return storyTemp.get(name);
	    } else {
	      const csvPath = storyIndex.get(name);
	      const csvStr = await fetchWithHash(csvPath);
	      const storyMap = getStoryMap(csvStr);
	      storyTemp.set(name, storyMap);
	      return storyMap;
	    }
	  }

	  return false;
	};

	const getCommStory = async () => {
	  if (!commStoryLoaded) {
	    let csv = await getLocalData('comm-story');
	    csv = await fetchWithHash('/data/comm-story.csv');
	    setLocalData('comm-story', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.ja) {
	        const _ja = trimWrap(item.ja);

	        const _zh = trimWrap(item.zh);

	        if (_ja && _zh && _ja !== _zh) {
	          commStoryMap.set(_ja, _zh);
	        }
	      }
	    });
	    commStoryLoaded = true;
	  }

	  return commStoryMap;
	};

	let typeTextMap = new Map();
	let loaded$4 = false;

	const getTypeTextMap = async () => {
	  if (!loaded$4) {
	    let csv = await getLocalData('type-text');
	    csv = await fetchWithHash('/data/type-text.csv');
	    setLocalData('type-text', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.ja) {
	        const _ja = trimWrap(item.ja);

	        const _zh = trimWrap(item.zh);

	        if (_ja && _zh && _ja !== _zh) {
	          typeTextMap.set(_ja, _zh);
	        }
	      }
	    });
	    const commStoryMap = await getCommStory();
	    typeTextMap = new Map([...typeTextMap]);
	    loaded$4 = true;
	  }

	  return typeTextMap;
	};

	let commMap = new Map();
	let typeTextMap$1 = new Map();

	const replaceFont = style => {
	  if (style && style.fontFamily) {
	    if (style.fontFamily === FONT.HEITI_JA) {
	      Reflect.set(style, 'fontFamily', FONT.HEITI_TRANS);
	    } else if (style.fontFamily === FONT.YUAN_JA) {
	      Reflect.set(style, 'fontFamily', FONT.YUAN_TRANS);
	    }
	  }
	};

	const restoreFont = style => {
	  if (style && style.fontFamily) {
	    if (style.fontFamily === FONT.HEITI_TRANS) {
	      Reflect.set(style, 'fontFamily', FONT.HEITI_JA);
	    } else if (style.fontFamily === FONT.YUAN_TRANS) {
	      Reflect.set(style, 'fontFamily', FONT.YUAN_JA);
	    }
	  }
	};

	const textInMap = (text, map, style) => {
	  let _text = text;

	  if (map.has(text)) {
	    _text = '\u200b' + map.get(text);
	    replaceFont(style);
	  } else if (!text.startsWith('\u200b')) {
	    restoreFont(style);
	  }

	  return _text;
	};

	const fontCheck = (text, style, isType = false) => {
	  if (!isString_1(text)) return text;
	  let _text = text;

	  if (text.startsWith('\u200b')) {
	    replaceFont(style);
	  } else if (text.trim()) {
	    if (isType) {
	      _text = textInMap(text, typeTextMap$1, style);
	    } else {
	      _text = textInMap(text, commMap, style);
	    }
	  }

	  return _text;
	};

	async function watchText() {
	  if (!GLOBAL.aoba) return;
	  commMap = await getCommMap();
	  typeTextMap$1 = await getTypeTextMap();
	  const Text = new Proxy(aoba.Text, {
	    construct(target, args, newTarget) {
	      const text = args[0];
	      const option = args[1];
	      if (SHOW_UPDATE_TEXT) log('new text', ...args);
	      args[0] = fontCheck(text, option);
	      return Reflect.construct(target, args, newTarget);
	    }

	  }); // watch typeText

	  const originTypeText = aoba.Text.prototype.typeText;

	  aoba.Text.prototype.typeText = function (...args) {
	    const text = args[0];
	    if (SHOW_UPDATE_TEXT) log('type text', ...args);
	    args[0] = fontCheck(text, this.style, true);
	    return originTypeText.apply(this, args);
	  };

	  const originUpdateText = aoba.Text.prototype.updateText;

	  aoba.Text.prototype.updateText = function (t) {
	    if (this.localStyleID !== this._style.styleID && (this.dirty = !0, this._style.styleID), this.dirty || !t) {
	      if (DEV && SHOW_UPDATE_TEXT) log('update text', this._text);
	      const value = fontCheck(this._text, this._style);
	      Reflect.set(this, '_text', value);
	      return originUpdateText.call(this, t);
	    }
	  };

	  GLOBAL.aoba = new Proxy(aoba, {
	    get(target, name, receiver) {
	      if (name === 'Text') {
	        return Text;
	      }

	      return Reflect.get(target, name, receiver);
	    }

	  });
	}

	const autoTransCache = new Map();

	const replaceText = (text, expMap, wordMaps) => {
	  if (autoTransCache.has(text)) return autoTransCache.get(text);
	  let result = text;

	  for (let [re, trans] of expMap) {
	    result = result.replace(re, (...arr) => {
	      let _trans = trans;

	      for (let i = 1; i < arr.length - 2; i++) {
	        let eleKey = arr[i];
	        let replaced = false;
	        wordMaps.forEach(map => {
	          if (map.has(eleKey)) {
	            _trans = _trans.replace("$".concat(i), map.get(eleKey));
	            replaced = true;
	          }
	        });

	        if (!replaced) {
	          _trans = _trans.replace("$".concat(i), arr[i]);
	        }
	      }

	      return _trans;
	    });
	    re.lastIndex = 0;
	  }

	  autoTransCache.set(text, result);
	  return result;
	};

	const sortWords = (list, key = 'EMPTY') => {
	  return list.sort((prev, next) => {
	    let valPrev = prev;
	    let valNext = next;

	    if (key !== 'EMPTY') {
	      valPrev = prev[key];
	      valNext = next[key];
	    }

	    if (!valNext) valNext = '';
	    if (!valPrev) valPrev = '';

	    if (valNext.length > valPrev.length) {
	      return 1;
	    } else if (valPrev.length > valNext.length) {
	      return -1;
	    } else {
	      return 0;
	    }
	  });
	};

	const numRE = '(\\d{1,10}\\.?\\d{0,4}?)';
	const percentRE = '(\\d{1,10}\\.?\\d{0,4}?[%％])';
	const unknownRE = '(.+?)';

	const parseRegExp = (str, list) => {
	  let result = str.replace(/\$num/g, numRE).replace(/\$percent/g, percentRE).replace(/\$unknown/g, unknownRE);
	  list.forEach(item => {
	    result = result.replace(item.re, item.exp);
	    item.re.lastIndex = 0;
	  });
	  return new RegExp(result, 'gi');
	};

	const expMap = new Map();
	const nounMap = new Map();
	const nounArr = [];
	let loaded$5 = false;

	const getSupportSkill = async () => {
	  if (!loaded$5) {
	    let csv = await getLocalData('support-skill');
	    csv = await fetchWithHash('/data/support-skill.csv');
	    setLocalData('support-skill', csv);
	    const list = parseCsv(csv);
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item && item.text) {
	        const text = trim(item.text, true);
	        const trans = trimWrap(item.trans);
	        const type = trim(item.type, true);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap.set(text, trans);
	          } else {
	            reMap.set(text, trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$noun/g,
	      exp: "(".concat(nounArr.join('|'), ")")
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap.set(re, value);
	    }

	    loaded$5 = true;
	  }

	  return {
	    expMap,
	    wordMaps: [nounMap]
	  };
	};

	const transSkill = async data => {
	  const {
	    expMap,
	    wordMaps
	  } = await getSupportSkill();
	  const sskill = data.supportSkills;
	  const asskill = data.acquiredSupportSkills;
	  sskill.forEach(item => {
	    item.description = tagText(replaceText(item.description, expMap, wordMaps));
	  });
	  asskill && asskill.forEach(item => {
	    item.description = tagText(replaceText(item.description, expMap, wordMaps));
	  });
	};

	const textMap = new Map();
	const expMap$1 = new Map();
	const nounMap$1 = new Map();
	const nameMap$1 = new Map();
	const noteMap = new Map();
	let loaded$6 = false;

	const getMission = async (full = false) => {
	  if (!loaded$6) {
	    let csv = await getLocalData('mission');
	    csv = await fetchWithHash('/data/mission-re.csv');
	    setLocalData('mission', csv);
	    const list = parseCsv(csv);
	    const nounArr = [];
	    const nameArr = [];
	    const noteArr = [];
	    const reMap = new Map();
	    sortWords(list, 'text').forEach(item => {
	      if (item && item.text) {
	        const text = trim(item.text, true);
	        const trans = trimWrap(item.trans);
	        const type = trim(item.type, true);

	        if (text && trans) {
	          if (type === 'noun') {
	            nounArr.push(pureRE(text));
	            nounMap$1.set(text, trans);
	          } else if (type === 'note') {
	            noteArr.push(pureRE(text));
	            noteMap.set(text, trans);
	            reMap.set("\u3010".concat(text, "\u3011"), "\u3010".concat(trans, "\u3011"));
	          } else if (type === 'name') {
	            nameArr.push(pureRE(text));
	            nameMap$1.set(text, trans);
	          } else if (type === 'text') {
	            textMap.set(text, trans);
	          } else {
	            reMap.set(text, trans);
	          }
	        }
	      }
	    });
	    const expList = [{
	      re: /\$name/g,
	      exp: "(".concat(nameArr.join('|'), ")")
	    }, {
	      re: /\$noun/g,
	      exp: "(".concat(nounArr.join('|'), ")")
	    }, {
	      re: /\$note/g,
	      exp: "(".concat(noteArr.join('|'), ")")
	    }];

	    for (let [key, value] of reMap) {
	      const re = parseRegExp(key, expList);
	      expMap$1.set(re, value);
	    }

	    loaded$6 = true;
	  }

	  const wordMaps = [nounMap$1, noteMap, nameMap$1];
	  return {
	    expMap: expMap$1,
	    wordMaps,
	    textMap
	  };
	};

	let missionData = null;

	const replaceMission = (data, key) => {
	  if (!data) return;
	  const {
	    expMap,
	    wordMaps,
	    textMap
	  } = missionData;
	  const text = data[key];
	  let _text = text;
	  if (!text) return;

	  if (textMap.has(text)) {
	    data[key] = tagText(textMap.get(text));
	  } else {
	    _text = replaceText(text, expMap, wordMaps);

	    if (text !== _text) {
	      data[key] = tagText(_text);
	    }
	  }
	};

	const processMission = list => {
	  list.forEach(item => {
	    replaceMission(item.mission, 'title');
	    replaceMission(item.mission, 'comment');

	    if (item.mission.missionReward.content) {
	      replaceMission(item.mission.missionReward.content, 'name');
	      replaceMission(item.mission.missionReward.content, 'comment');
	    }
	  });
	};

	const transMission = async data => {
	  missionData = await getMission();
	  processMission(data.dailyUserMissions);
	  processMission(data.weeklyUserMissions);
	  data.eventUserMissions.forEach(item => {
	    if (item && item.userMissions) {
	      processMission(item.userMissions);
	    }
	  });
	  processMission(data.normalUserMissions);
	  processMission(data.specialUserMissions);
	};

	const reportMission = async data => {
	  missionData = await getMission();
	  processMission(data.reportUserMissions);
	};

	const accumulatedPresent = (item, key) => {
	  if (item && item[key] && /イベントミッションを\d+個達成しよう/.test(item[key])) {
	    item[key] = tagText(item[key].replace(/イベントミッションを(\d+)個達成しよう/, '完成$1个活动任务'));
	  }
	};

	const fesRecomMission = async data => {
	  missionData = await getMission();
	  replaceMission(data.userRecommendedMission.mission, 'comment');
	  replaceMission(data.userRecommendedMission.mission, 'title');
	  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
	    accumulatedPresent(item.gameEventAccumulatedPresent, 'comment');
	    accumulatedPresent(item.gameEventAccumulatedPresent, 'title');
	  });
	};

	const userItemTypes = ['userRecoveryItems', 'userProduceItems', 'userExchangeItems', 'userLotteryTickets', 'userEvolutionItems', 'userGashaTickets', 'userScoutTickets', 'userEnhancementItems'];
	const itemTypes = ['produceItem', 'recoveryItem', 'exchangeItem', 'lotteryTicket', 'evolutionItem', 'gashaTicket', 'scoutTicket', 'enhancementItem'];

	const transItem = (item, key, {
	  itemMap,
	  itemLimitMap
	}) => {
	  if (!item || typeof item[key] !== 'string') return;
	  let text = item[key].trim();
	  let limit = '';

	  if (/[\r\n]{1,2}\[[^\]]+\]$/.test(text)) {
	    let rgs = text.match(/([\s\S]+)[\r\n]{1,2}(\[[^\]]+\])$/);

	    if (rgs && rgs[1]) {
	      text = rgs[1].trim();

	      if (itemLimitMap.has(rgs[2])) {
	        limit = itemLimitMap.get(rgs[2]);
	      } else {
	        limit = rgs[2];
	      }
	    }
	  }

	  let trans = text;
	  text = text.replace(/\r?\n|\r/g, '\\n');

	  if (itemMap.has(text)) {
	    trans = itemMap.get(text);

	    if (limit) {
	      trans += "\n".concat(limit);
	    }

	    item[key] = tagText(trans);
	  }
	};

	const switchShop = (shop, maps) => {
	  if (shop && shop.shopMerchandises) {
	    shop.shopMerchandises.forEach(item => {
	      transItem(item, 'title', maps);
	      transItem(item, 'comment', maps);
	    });
	  }
	};

	const transShopItem = async data => {
	  const maps = await getItem();

	  if (data) {
	    if (Array.isArray(data.userShops)) {
	      data.userShops.forEach(shop => {
	        switchShop(shop, maps);
	      });
	    }

	    if (Array.isArray(data.userEventShops)) {
	      data.userEventShops.forEach(item => {
	        switchShop(item.userShop, maps);
	      });
	    }
	  }
	};

	const transUserItem = async data => {
	  const maps = await getItem();

	  if (Array.isArray(data)) {
	    data.forEach(obj => {
	      const item = obj[itemTypes[0]] || obj[itemTypes[1]] || obj[itemTypes[2]] || obj[itemTypes[3]] || obj[itemTypes[4]] || obj[itemTypes[5]] || obj[itemTypes[6]] || obj[itemTypes[7]];
	      transItem(item, 'name', maps);
	      transItem(item, 'comment', maps);
	    });
	  }
	};

	const transShopPurchase = async data => {
	  const maps = await getItem();

	  if (data && data.shopMerchandise) {
	    transItem(data.shopMerchandise, 'title', maps);
	    transItem(data.shopMerchandise, 'comment', maps);
	  }
	};

	const transPresentItem = async data => {
	  const maps = await getItem();

	  if (Array.isArray(data)) {
	    data.forEach(obj => {
	      transItem(obj.content, 'name', maps);
	    });
	  }
	};

	const transReceivePresent = async data => {
	  const maps = await getItem();
	  transItem(data.receivedPresent, 'Name', maps);
	};

	const transReceiveMission = async data => {
	  const maps = await getItem();
	  transItem(data.userMission.mission.missionReward.content, 'name', maps);
	};

	const transLoginBonus = async data => {
	  const maps = await getItem();
	  data.userLoginBonuses.forEach(item => {
	    item.loginBonus.sheets.forEach(sheet => {
	      sheet.rewards.forEach(reward => {
	        transItem(reward.content, 'name', maps);
	      });
	    });
	  });
	  data.userTotalBonuses.forEach(item => {
	    item.rewards.forEach(reward => {
	      transItem(reward.content, 'name', maps);
	    });
	  });
	};

	const transFesReward = async data => {
	  const maps = await getItem();

	  if (data.lastRankingResult) {
	    if (Array.isArray(data.lastRankingResult.fesMatchGradeRewards)) {
	      data.lastRankingResult.fesMatchGradeRewards.forEach(item => {
	        transItem(item.content, 'name', maps);
	      });
	    }
	  }
	};

	const transAccumulatedPresent = async data => {
	  const maps = await getItem();
	  data.accumulatedPresent.userGameEventAccumulatedPresents.forEach(item => {
	    item.gameEventAccumulatedPresent.rewards.forEach(reward => {
	      transItem(reward.content, 'name', maps);
	    });
	  });
	};

	function collectCardName (data) {
	  const names = [];
	  data.forEach(item => {
	    if (item.buttonImage === 'normal_gasha_button') {
	      item.contents.forEach(cont => {
	        names.push(cont.contentName);
	      });
	    }
	  });
	  console.log(names.join('\n'));
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$3 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$2.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$5.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$6.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag$1 = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys$1;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$9.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$1 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (_Map && getTag(new _Map) != mapTag$1) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$1) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */
	var Uint8Array$1 = _root.Uint8Array;

	var _Uint8Array = Uint8Array$1;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$2:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor;

	    case numberTag$1:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor;

	    case symbolTag:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$3 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$3 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$3 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$3 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
	cloneableTags[boolTag$3] = cloneableTags[dateTag$2] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
	cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
	cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
	cloneableTags[stringTag$3] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$3 || tag == argsTag$2 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	const getRequest = async () => {
	  let request;

	  try {
	    const {
	      moduleId
	    } = await getHash;
	    const moduleRequest = primJsp([], [], [moduleId.REQUEST]);
	    request = moduleRequest.default;
	  } catch (e) {
	    log(e);
	  }

	  return request;
	};

	const logStyles = color => ["background-color:".concat(color, ";color:#fff;padding:0 0.3em"), '', "color:".concat(color, ";text-decoration:underline")];

	const requestLog = (method, color, args, data) => {
	  if (DEV) {
	    let _data = data;

	    if (data) {
	      _data = cloneDeep_1(data);
	    }

	    log("%c".concat(method, "%c %c").concat(args[0]), ...logStyles(color), args[1] || '', '\n=>', _data);
	  }
	};

	async function requestHook() {
	  const request = await getRequest();
	  if (!request || !request.get) return;
	  const originGet = request.get;

	  request.get = async function (...args) {
	    const type = args[0];
	    const res = await originGet.apply(this, args);
	    if (!type) return res;
	    requestLog('GET', '#009688', args, res.body);

	    try {
	      if (/^userSupportIdols\/\d+$/.test(type) || type === 'userSupportIdols/statusMax') {
	        await transSkill(res.body);
	        collectStoryTitle(res.body);
	      } else if (/^userIdols\/\d+$/.test(type)) {
	        collectStoryTitle(res.body);
	      } else if (type === 'userMissions') {
	        await transMission(res.body);
	      } else if (type === 'characterAlbums') {
	        collectStoryTitle(res.body);
	      } else if (type === 'userShops' || type === 'userIdolPieceShops') {
	        await transShopItem(res.body);
	      } else if (userItemTypes.includes(type)) {
	        await transUserItem(res.body);
	      } else if (type.includes('userPresents?limit=') || type.includes('userPresentHistories?limit=')) {
	        await transPresentItem(res.body);
	      } else if (type === 'gashaGroups/1673/rates') {
	        if (DEV) {
	          collectCardName(res.body);
	        }
	      }
	    } catch (e) {
	      log(e);
	    }

	    return res;
	  };

	  const originPatch = request.patch;

	  request.patch = async function (...args) {
	    const type = args[0];
	    const res = await originPatch.apply(this, args);
	    if (!type) return res;
	    requestLog('PATCH', '#8BC34A', args, res.body);

	    try {
	      if (/^userSupportIdols\/\d+$/.test(type)) {
	        await transSkill(res.body.userSupportIdol);
	      }
	    } catch (e) {
	      log(e);
	    }

	    return res;
	  };

	  const originPost = request.post;

	  request.post = async function (...args) {
	    const type = args[0];
	    const res = await originPost.apply(this, args);
	    if (!type) return res;
	    requestLog('POST', '#3F51B5', args, res.body);

	    try {
	      if (type === 'myPage') {
	        await reportMission(res.body);
	      } else if (/^(produceMarathons|fesMarathons|trainingEvents)\/\d+\/top$/.test(type)) {
	        await fesRecomMission(res.body);
	        await transAccumulatedPresent(res.body);
	      } else if (type === 'userShops/actions/purchase') {
	        await transShopPurchase(res.body);
	      } else if (/produces\/\d+\/actions\/ready/.test(type)) {
	        await transUserItem(res.body.userProduceItems);
	      } else if (/userPresents\/\d+\/actions\/receive/.test(type)) {
	        await transReceivePresent(res.body);
	      } else if (/userMissions\/\d+\/actions\/receive/.test(type)) {
	        await transReceiveMission(res.body);
	      } else if (type === 'userLoginBonuses') {
	        await transLoginBonus(res.body);
	      } else if (type === 'fesTop') {
	        await transFesReward(res.body);
	      }
	    } catch (e) {
	      log(e);
	    }

	    return res;
	  };

	  const originPut = request.put;

	  request.put = async function (...args) {
	    const type = args[0];
	    const res = await originPut.apply(this, args);
	    if (!type) return res;
	    requestLog('PUT', '#9C27B0', args, res.body);
	    return res;
	  };
	}

	const imageMap = new Map();
	let loaded$7 = false;

	const getImage = async () => {
	  if (!loaded$7) {
	    let csv = await getLocalData('image');
	    csv = await fetchWithHash('/data/image.csv');
	    setLocalData('image', csv);
	    const list = parseCsv(csv);
	    list.forEach(item => {
	      if (item && item.name) {
	        const name = trim(item.name, true);
	        const url = trim(item.url, true);
	        const version = trim(item.version, true) || '1';

	        if (name && url) {
	          imageMap.set(name, {
	            url,
	            version
	          });
	        }
	      }
	    });
	    loaded$7 = true;
	  }

	  return imageMap;
	};

	let replaced = false;
	function resourceHook() {
	  if (!aoba || replaced) return;
	  const originLoadElement = aoba.loaders.Resource.prototype._loadElement;

	  aoba.loaders.Resource.prototype._loadElement = async function (type) {
	    if (DEV && type === 'image' && this.url.includes('bc86b91f4f40a00be6c149478bb5f370')) {
	      log(this.url, this.name);
	    }

	    try {
	      const imageMap = await getImage();

	      if (type === 'image' && imageMap.has(this.name)) {
	        const data = imageMap.get(this.name);

	        if (this.url.endsWith("v=".concat(data.version))) {
	          this.url = "".concat(config.origin, "/data/image/").concat(data.url, "?V=").concat(config.hash);
	          this.crossOrigin = true;
	        } else {
	          log('%cimage version not match', 'color:#fc4175');
	          log(this.name, this.url);
	        }
	      }
	    } catch (e) {}

	    return originLoadElement.call(this, type);
	  };

	  replaced = true;
	}

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return _root.Date.now();
	};

	var now_1 = now;

	/** `Object#toString` result references. */
	var symbolTag$2 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$2);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var toNumber_1 = toNumber;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber_1(wait) || 0;
	  if (isObject_1(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;

	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now_1();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now_1());
	  }

	  function debounced() {
	    var time = now_1(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	var debounce_1 = debounce;

	var papaparse = createCommonjsModule(function (module, exports) {
	/* @license
	Papa Parse
	v4.6.3
	https://github.com/mholt/PapaParse
	License: MIT
	*/

	// Polyfills
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill
	if (!Array.isArray)
	{
		Array.isArray = function(arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}

	(function(root, factory)
	{
		/* globals define */
		{
			// Node. Does not work with strict CommonJS, but
			// only CommonJS-like environments that support module.exports,
			// like Node.
			module.exports = factory();
		}
	}(commonjsGlobal, function()
	{

		var global = (function() {
			// alternative method, similar to `Function('return this')()`
			// but without using `eval` (which is disabled when
			// using Content Security Policy).

			if (typeof self !== 'undefined') { return self; }
			if (typeof window !== 'undefined') { return window; }
			if (typeof global !== 'undefined') { return global; }

			// When running tests none of the above have been defined
			return {};
		})();

		var IS_WORKER = !global.document && !!global.postMessage,
			IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
			LOADED_SYNC = false, AUTO_SCRIPT_PATH;
		var workers = {}, workerIdCounter = 0;

		var Papa = {};

		Papa.parse = CsvToJson;
		Papa.unparse = JsonToCsv;

		Papa.RECORD_SEP = String.fromCharCode(30);
		Papa.UNIT_SEP = String.fromCharCode(31);
		Papa.BYTE_ORDER_MARK = '\ufeff';
		Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
		Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
		Papa.SCRIPT_PATH = null;	// Must be set by your code if you use workers and this lib is loaded asynchronously
		Papa.NODE_STREAM_INPUT = 1;

		// Configurable chunk sizes for local and remote files, respectively
		Papa.LocalChunkSize = 1024 * 1024 * 10;	// 10 MB
		Papa.RemoteChunkSize = 1024 * 1024 * 5;	// 5 MB
		Papa.DefaultDelimiter = ',';			// Used if not specified and detection fails

		// Exposed for testing and development only
		Papa.Parser = Parser;
		Papa.ParserHandle = ParserHandle;
		Papa.NetworkStreamer = NetworkStreamer;
		Papa.FileStreamer = FileStreamer;
		Papa.StringStreamer = StringStreamer;
		Papa.ReadableStreamStreamer = ReadableStreamStreamer;
		if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
			Papa.DuplexStreamStreamer = DuplexStreamStreamer;
		}

		if (global.jQuery)
		{
			var $ = global.jQuery;
			$.fn.parse = function(options)
			{
				var config = options.config || {};
				var queue = [];

				this.each(function(idx)
				{
					var supported = $(this).prop('tagName').toUpperCase() === 'INPUT'
									&& $(this).attr('type').toLowerCase() === 'file'
									&& global.FileReader;

					if (!supported || !this.files || this.files.length === 0)
						return true;	// continue to next input element

					for (var i = 0; i < this.files.length; i++)
					{
						queue.push({
							file: this.files[i],
							inputElem: this,
							instanceConfig: $.extend({}, config)
						});
					}
				});

				parseNextFile();	// begin parsing
				return this;		// maintains chainability


				function parseNextFile()
				{
					if (queue.length === 0)
					{
						if (isFunction(options.complete))
							options.complete();
						return;
					}

					var f = queue[0];

					if (isFunction(options.before))
					{
						var returned = options.before(f.file, f.inputElem);

						if (typeof returned === 'object')
						{
							if (returned.action === 'abort')
							{
								error('AbortError', f.file, f.inputElem, returned.reason);
								return;	// Aborts all queued files immediately
							}
							else if (returned.action === 'skip')
							{
								fileComplete();	// parse the next file in the queue, if any
								return;
							}
							else if (typeof returned.config === 'object')
								f.instanceConfig = $.extend(f.instanceConfig, returned.config);
						}
						else if (returned === 'skip')
						{
							fileComplete();	// parse the next file in the queue, if any
							return;
						}
					}

					// Wrap up the user's complete callback, if any, so that ours also gets executed
					var userCompleteFunc = f.instanceConfig.complete;
					f.instanceConfig.complete = function(results)
					{
						if (isFunction(userCompleteFunc))
							userCompleteFunc(results, f.file, f.inputElem);
						fileComplete();
					};

					Papa.parse(f.file, f.instanceConfig);
				}

				function error(name, file, elem, reason)
				{
					if (isFunction(options.error))
						options.error({name: name}, file, elem, reason);
				}

				function fileComplete()
				{
					queue.splice(0, 1);
					parseNextFile();
				}
			};
		}


		if (IS_PAPA_WORKER)
		{
			global.onmessage = workerThreadReceivedMessage;
		}
		else if (Papa.WORKERS_SUPPORTED)
		{
			AUTO_SCRIPT_PATH = getScriptPath();

			// Check if the script was loaded synchronously
			if (!document.body)
			{
				// Body doesn't exist yet, must be synchronous
				LOADED_SYNC = true;
			}
			else
			{
				document.addEventListener('DOMContentLoaded', function() {
					LOADED_SYNC = true;
				}, true);
			}
		}




		function CsvToJson(_input, _config)
		{
			_config = _config || {};
			var dynamicTyping = _config.dynamicTyping || false;
			if (isFunction(dynamicTyping)) {
				_config.dynamicTypingFunction = dynamicTyping;
				// Will be filled on first row call
				dynamicTyping = {};
			}
			_config.dynamicTyping = dynamicTyping;

			_config.transform = isFunction(_config.transform) ? _config.transform : false;

			if (_config.worker && Papa.WORKERS_SUPPORTED)
			{
				var w = newWorker();

				w.userStep = _config.step;
				w.userChunk = _config.chunk;
				w.userComplete = _config.complete;
				w.userError = _config.error;

				_config.step = isFunction(_config.step);
				_config.chunk = isFunction(_config.chunk);
				_config.complete = isFunction(_config.complete);
				_config.error = isFunction(_config.error);
				delete _config.worker;	// prevent infinite loop

				w.postMessage({
					input: _input,
					config: _config,
					workerId: w.id
				});

				return;
			}

			var streamer = null;
			if (_input === Papa.NODE_STREAM_INPUT && typeof PAPA_BROWSER_CONTEXT === 'undefined')
			{
				// create a node Duplex stream for use
				// with .pipe
				streamer = new DuplexStreamStreamer(_config);
				return streamer.getStream();
			}
			else if (typeof _input === 'string')
			{
				if (_config.download)
					streamer = new NetworkStreamer(_config);
				else
					streamer = new StringStreamer(_config);
			}
			else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on))
			{
				streamer = new ReadableStreamStreamer(_config);
			}
			else if ((global.File && _input instanceof File) || _input instanceof Object)	// ...Safari. (see issue #106)
				streamer = new FileStreamer(_config);

			return streamer.stream(_input);
		}






		function JsonToCsv(_input, _config)
		{
			// Default configuration

			/** whether to surround every datum with quotes */
			var _quotes = false;

			/** whether to write headers */
			var _writeHeader = true;

			/** delimiting character(s) */
			var _delimiter = ',';

			/** newline character(s) */
			var _newline = '\r\n';

			/** quote character */
			var _quoteChar = '"';

			/** whether to skip empty lines */
			var _skipEmptyLines = false;

			unpackConfig();

			var quoteCharRegex = new RegExp(escapeRegExp(_quoteChar), 'g');

			if (typeof _input === 'string')
				_input = JSON.parse(_input);

			if (Array.isArray(_input))
			{
				if (!_input.length || Array.isArray(_input[0]))
					return serialize(null, _input, _skipEmptyLines);
				else if (typeof _input[0] === 'object')
					return serialize(objectKeys(_input[0]), _input, _skipEmptyLines);
			}
			else if (typeof _input === 'object')
			{
				if (typeof _input.data === 'string')
					_input.data = JSON.parse(_input.data);

				if (Array.isArray(_input.data))
				{
					if (!_input.fields)
						_input.fields =  _input.meta && _input.meta.fields;

					if (!_input.fields)
						_input.fields =  Array.isArray(_input.data[0])
							? _input.fields
							: objectKeys(_input.data[0]);

					if (!(Array.isArray(_input.data[0])) && typeof _input.data[0] !== 'object')
						_input.data = [_input.data];	// handles input like [1,2,3] or ['asdf']
				}

				return serialize(_input.fields || [], _input.data || [], _skipEmptyLines);
			}

			// Default (any valid paths should return before this)
			throw 'exception: Unable to serialize unrecognized input';


			function unpackConfig()
			{
				if (typeof _config !== 'object')
					return;

				if (typeof _config.delimiter === 'string'
	                && !Papa.BAD_DELIMITERS.filter(function(value) { return _config.delimiter.indexOf(value) !== -1; }).length)
				{
					_delimiter = _config.delimiter;
				}

				if (typeof _config.quotes === 'boolean'
					|| Array.isArray(_config.quotes))
					_quotes = _config.quotes;

				if (typeof _config.skipEmptyLines === 'boolean'
					|| typeof _config.skipEmptyLines === 'string')
					_skipEmptyLines = _config.skipEmptyLines;

				if (typeof _config.newline === 'string')
					_newline = _config.newline;

				if (typeof _config.quoteChar === 'string')
					_quoteChar = _config.quoteChar;

				if (typeof _config.header === 'boolean')
					_writeHeader = _config.header;
			}


			/** Turns an object's keys into an array */
			function objectKeys(obj)
			{
				if (typeof obj !== 'object')
					return [];
				var keys = [];
				for (var key in obj)
					keys.push(key);
				return keys;
			}

			/** The double for loop that iterates the data and writes out a CSV string including header row */
			function serialize(fields, data, skipEmptyLines)
			{
				var csv = '';

				if (typeof fields === 'string')
					fields = JSON.parse(fields);
				if (typeof data === 'string')
					data = JSON.parse(data);

				var hasHeader = Array.isArray(fields) && fields.length > 0;
				var dataKeyedByField = !(Array.isArray(data[0]));

				// If there a header row, write it first
				if (hasHeader && _writeHeader)
				{
					for (var i = 0; i < fields.length; i++)
					{
						if (i > 0)
							csv += _delimiter;
						csv += safe(fields[i], i);
					}
					if (data.length > 0)
						csv += _newline;
				}

				// Then write out the data
				for (var row = 0; row < data.length; row++)
				{
					var maxCol = hasHeader ? fields.length : data[row].length;

					var emptyLine = false;
					var nullLine = hasHeader ? Object.keys(data[row]).length === 0 : data[row].length === 0;
					if (skipEmptyLines && !hasHeader)
					{
						emptyLine = skipEmptyLines === 'greedy' ? data[row].join('').trim() === '' : data[row].length === 1 && data[row][0].length === 0;
					}
					if (skipEmptyLines === 'greedy' && hasHeader) {
						var line = [];
						for (var c = 0; c < maxCol; c++) {
							var cx = dataKeyedByField ? fields[c] : c;
							line.push(data[row][cx]);
						}
						emptyLine = line.join('').trim() === '';
					}
					if (!emptyLine)
					{
						for (var col = 0; col < maxCol; col++)
						{
							if (col > 0 && !nullLine)
								csv += _delimiter;
							var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
							csv += safe(data[row][colIdx], col);
						}
						if (row < data.length - 1 && (!skipEmptyLines || (maxCol > 0 && !nullLine)))
						{
							csv += _newline;
						}
					}
				}
				return csv;
			}

			/** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
			function safe(str, col)
			{
				if (typeof str === 'undefined' || str === null)
					return '';

				if (str.constructor === Date)
					return JSON.stringify(str).slice(1, 25);

				str = str.toString().replace(quoteCharRegex, _quoteChar + _quoteChar);

				var needsQuotes = (typeof _quotes === 'boolean' && _quotes)
								|| (Array.isArray(_quotes) && _quotes[col])
								|| hasAny(str, Papa.BAD_DELIMITERS)
								|| str.indexOf(_delimiter) > -1
								|| str.charAt(0) === ' '
								|| str.charAt(str.length - 1) === ' ';

				return needsQuotes ? _quoteChar + str + _quoteChar : str;
			}

			function hasAny(str, substrings)
			{
				for (var i = 0; i < substrings.length; i++)
					if (str.indexOf(substrings[i]) > -1)
						return true;
				return false;
			}
		}

		/** ChunkStreamer is the base prototype for various streamer implementations. */
		function ChunkStreamer(config)
		{
			this._handle = null;
			this._finished = false;
			this._completed = false;
			this._input = null;
			this._baseIndex = 0;
			this._partialLine = '';
			this._rowCount = 0;
			this._start = 0;
			this._nextChunk = null;
			this.isFirstChunk = true;
			this._completeResults = {
				data: [],
				errors: [],
				meta: {}
			};
			replaceConfig.call(this, config);

			this.parseChunk = function(chunk, isFakeChunk)
			{
				// First chunk pre-processing
				if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk))
				{
					var modifiedChunk = this._config.beforeFirstChunk(chunk);
					if (modifiedChunk !== undefined)
						chunk = modifiedChunk;
				}
				this.isFirstChunk = false;

				// Rejoin the line we likely just split in two by chunking the file
				var aggregate = this._partialLine + chunk;
				this._partialLine = '';

				var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);

				if (this._handle.paused() || this._handle.aborted())
					return;

				var lastIndex = results.meta.cursor;

				if (!this._finished)
				{
					this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
					this._baseIndex = lastIndex;
				}

				if (results && results.data)
					this._rowCount += results.data.length;

				var finishedIncludingPreview = this._finished || (this._config.preview && this._rowCount >= this._config.preview);

				if (IS_PAPA_WORKER)
				{
					global.postMessage({
						results: results,
						workerId: Papa.WORKER_ID,
						finished: finishedIncludingPreview
					});
				}
				else if (isFunction(this._config.chunk) && !isFakeChunk)
				{
					this._config.chunk(results, this._handle);
					if (this._handle.paused() || this._handle.aborted())
						return;
					results = undefined;
					this._completeResults = undefined;
				}

				if (!this._config.step && !this._config.chunk) {
					this._completeResults.data = this._completeResults.data.concat(results.data);
					this._completeResults.errors = this._completeResults.errors.concat(results.errors);
					this._completeResults.meta = results.meta;
				}

				if (!this._completed && finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted)) {
					this._config.complete(this._completeResults, this._input);
					this._completed = true;
				}

				if (!finishedIncludingPreview && (!results || !results.meta.paused))
					this._nextChunk();

				return results;
			};

			this._sendError = function(error)
			{
				if (isFunction(this._config.error))
					this._config.error(error);
				else if (IS_PAPA_WORKER && this._config.error)
				{
					global.postMessage({
						workerId: Papa.WORKER_ID,
						error: error,
						finished: false
					});
				}
			};

			function replaceConfig(config)
			{
				// Deep-copy the config so we can edit it
				var configCopy = copy(config);
				configCopy.chunkSize = parseInt(configCopy.chunkSize);	// parseInt VERY important so we don't concatenate strings!
				if (!config.step && !config.chunk)
					configCopy.chunkSize = null;  // disable Range header if not streaming; bad values break IIS - see issue #196
				this._handle = new ParserHandle(configCopy);
				this._handle.streamer = this;
				this._config = configCopy;	// persist the copy to the caller
			}
		}


		function NetworkStreamer(config)
		{
			config = config || {};
			if (!config.chunkSize)
				config.chunkSize = Papa.RemoteChunkSize;
			ChunkStreamer.call(this, config);

			var xhr;

			if (IS_WORKER)
			{
				this._nextChunk = function()
				{
					this._readChunk();
					this._chunkLoaded();
				};
			}
			else
			{
				this._nextChunk = function()
				{
					this._readChunk();
				};
			}

			this.stream = function(url)
			{
				this._input = url;
				this._nextChunk();	// Starts streaming
			};

			this._readChunk = function()
			{
				if (this._finished)
				{
					this._chunkLoaded();
					return;
				}

				xhr = new XMLHttpRequest();

				if (this._config.withCredentials)
				{
					xhr.withCredentials = this._config.withCredentials;
				}

				if (!IS_WORKER)
				{
					xhr.onload = bindFunction(this._chunkLoaded, this);
					xhr.onerror = bindFunction(this._chunkError, this);
				}

				xhr.open('GET', this._input, !IS_WORKER);
				// Headers can only be set when once the request state is OPENED
				if (this._config.downloadRequestHeaders)
				{
					var headers = this._config.downloadRequestHeaders;

					for (var headerName in headers)
					{
						xhr.setRequestHeader(headerName, headers[headerName]);
					}
				}

				if (this._config.chunkSize)
				{
					var end = this._start + this._config.chunkSize - 1;	// minus one because byte range is inclusive
					xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
					xhr.setRequestHeader('If-None-Match', 'webkit-no-cache'); // https://bugs.webkit.org/show_bug.cgi?id=82672
				}

				try {
					xhr.send();
				}
				catch (err) {
					this._chunkError(err.message);
				}

				if (IS_WORKER && xhr.status === 0)
					this._chunkError();
				else
					this._start += this._config.chunkSize;
			};

			this._chunkLoaded = function()
			{
				if (xhr.readyState !== 4)
					return;

				if (xhr.status < 200 || xhr.status >= 400)
				{
					this._chunkError();
					return;
				}

				this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
				this.parseChunk(xhr.responseText);
			};

			this._chunkError = function(errorMessage)
			{
				var errorText = xhr.statusText || errorMessage;
				this._sendError(new Error(errorText));
			};

			function getFileSize(xhr)
			{
				var contentRange = xhr.getResponseHeader('Content-Range');
				if (contentRange === null) { // no content range, then finish!
					return -1;
				}
				return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
			}
		}
		NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
		NetworkStreamer.prototype.constructor = NetworkStreamer;


		function FileStreamer(config)
		{
			config = config || {};
			if (!config.chunkSize)
				config.chunkSize = Papa.LocalChunkSize;
			ChunkStreamer.call(this, config);

			var reader, slice;

			// FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
			// But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
			var usingAsyncReader = typeof FileReader !== 'undefined';	// Safari doesn't consider it a function - see issue #105

			this.stream = function(file)
			{
				this._input = file;
				slice = file.slice || file.webkitSlice || file.mozSlice;

				if (usingAsyncReader)
				{
					reader = new FileReader();		// Preferred method of reading files, even in workers
					reader.onload = bindFunction(this._chunkLoaded, this);
					reader.onerror = bindFunction(this._chunkError, this);
				}
				else
					reader = new FileReaderSync();	// Hack for running in a web worker in Firefox

				this._nextChunk();	// Starts streaming
			};

			this._nextChunk = function()
			{
				if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview))
					this._readChunk();
			};

			this._readChunk = function()
			{
				var input = this._input;
				if (this._config.chunkSize)
				{
					var end = Math.min(this._start + this._config.chunkSize, this._input.size);
					input = slice.call(input, this._start, end);
				}
				var txt = reader.readAsText(input, this._config.encoding);
				if (!usingAsyncReader)
					this._chunkLoaded({ target: { result: txt } });	// mimic the async signature
			};

			this._chunkLoaded = function(event)
			{
				// Very important to increment start each time before handling results
				this._start += this._config.chunkSize;
				this._finished = !this._config.chunkSize || this._start >= this._input.size;
				this.parseChunk(event.target.result);
			};

			this._chunkError = function()
			{
				this._sendError(reader.error);
			};

		}
		FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
		FileStreamer.prototype.constructor = FileStreamer;


		function StringStreamer(config)
		{
			config = config || {};
			ChunkStreamer.call(this, config);

			var remaining;
			this.stream = function(s)
			{
				remaining = s;
				return this._nextChunk();
			};
			this._nextChunk = function()
			{
				if (this._finished) return;
				var size = this._config.chunkSize;
				var chunk = size ? remaining.substr(0, size) : remaining;
				remaining = size ? remaining.substr(size) : '';
				this._finished = !remaining;
				return this.parseChunk(chunk);
			};
		}
		StringStreamer.prototype = Object.create(StringStreamer.prototype);
		StringStreamer.prototype.constructor = StringStreamer;


		function ReadableStreamStreamer(config)
		{
			config = config || {};

			ChunkStreamer.call(this, config);

			var queue = [];
			var parseOnData = true;
			var streamHasEnded = false;

			this.pause = function()
			{
				ChunkStreamer.prototype.pause.apply(this, arguments);
				this._input.pause();
			};

			this.resume = function()
			{
				ChunkStreamer.prototype.resume.apply(this, arguments);
				this._input.resume();
			};

			this.stream = function(stream)
			{
				this._input = stream;

				this._input.on('data', this._streamData);
				this._input.on('end', this._streamEnd);
				this._input.on('error', this._streamError);
			};

			this._checkIsFinished = function()
			{
				if (streamHasEnded && queue.length === 1) {
					this._finished = true;
				}
			};

			this._nextChunk = function()
			{
				this._checkIsFinished();
				if (queue.length)
				{
					this.parseChunk(queue.shift());
				}
				else
				{
					parseOnData = true;
				}
			};

			this._streamData = bindFunction(function(chunk)
			{
				try
				{
					queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));

					if (parseOnData)
					{
						parseOnData = false;
						this._checkIsFinished();
						this.parseChunk(queue.shift());
					}
				}
				catch (error)
				{
					this._streamError(error);
				}
			}, this);

			this._streamError = bindFunction(function(error)
			{
				this._streamCleanUp();
				this._sendError(error);
			}, this);

			this._streamEnd = bindFunction(function()
			{
				this._streamCleanUp();
				streamHasEnded = true;
				this._streamData('');
			}, this);

			this._streamCleanUp = bindFunction(function()
			{
				this._input.removeListener('data', this._streamData);
				this._input.removeListener('end', this._streamEnd);
				this._input.removeListener('error', this._streamError);
			}, this);
		}
		ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
		ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;


		function DuplexStreamStreamer(_config) {
			var Duplex = require('stream').Duplex;
			var config = copy(_config);
			var parseOnWrite = true;
			var writeStreamHasFinished = false;
			var parseCallbackQueue = [];
			var stream = null;

			this._onCsvData = function(results)
			{
				var data = results.data;
				for (var i = 0; i < data.length; i++) {
					if (!stream.push(data[i]) && !this._handle.paused()) {
						// the writeable consumer buffer has filled up
						// so we need to pause until more items
						// can be processed
						this._handle.pause();
					}
				}
			};

			this._onCsvComplete = function()
			{
				// node will finish the read stream when
				// null is pushed
				stream.push(null);
			};

			config.step = bindFunction(this._onCsvData, this);
			config.complete = bindFunction(this._onCsvComplete, this);
			ChunkStreamer.call(this, config);

			this._nextChunk = function()
			{
				if (writeStreamHasFinished && parseCallbackQueue.length === 1) {
					this._finished = true;
				}
				if (parseCallbackQueue.length) {
					parseCallbackQueue.shift()();
				} else {
					parseOnWrite = true;
				}
			};

			this._addToParseQueue = function(chunk, callback)
			{
				// add to queue so that we can indicate
				// completion via callback
				// node will automatically pause the incoming stream
				// when too many items have been added without their
				// callback being invoked
				parseCallbackQueue.push(bindFunction(function() {
					this.parseChunk(typeof chunk === 'string' ? chunk : chunk.toString(config.encoding));
					if (isFunction(callback)) {
						return callback();
					}
				}, this));
				if (parseOnWrite) {
					parseOnWrite = false;
					this._nextChunk();
				}
			};

			this._onRead = function()
			{
				if (this._handle.paused()) {
					// the writeable consumer can handle more data
					// so resume the chunk parsing
					this._handle.resume();
				}
			};

			this._onWrite = function(chunk, encoding, callback)
			{
				this._addToParseQueue(chunk, callback);
			};

			this._onWriteComplete = function()
			{
				writeStreamHasFinished = true;
				// have to write empty string
				// so parser knows its done
				this._addToParseQueue('');
			};

			this.getStream = function()
			{
				return stream;
			};
			stream = new Duplex({
				readableObjectMode: true,
				decodeStrings: false,
				read: bindFunction(this._onRead, this),
				write: bindFunction(this._onWrite, this)
			});
			stream.once('finish', bindFunction(this._onWriteComplete, this));
		}
		if (typeof PAPA_BROWSER_CONTEXT === 'undefined') {
			DuplexStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
			DuplexStreamStreamer.prototype.constructor = DuplexStreamStreamer;
		}


		// Use one ParserHandle per entire CSV file or string
		function ParserHandle(_config)
		{
			// One goal is to minimize the use of regular expressions...
			var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;
			var ISO_DATE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

			var self = this;
			var _stepCounter = 0;	// Number of times step was called (number of rows parsed)
			var _rowCounter = 0;	// Number of rows that have been parsed so far
			var _input;				// The input being parsed
			var _parser;			// The core parser being used
			var _paused = false;	// Whether we are paused or not
			var _aborted = false;	// Whether the parser has aborted or not
			var _delimiterError;	// Temporary state between delimiter detection and processing results
			var _fields = [];		// Fields are from the header row of the input, if there is one
			var _results = {		// The last results returned from the parser
				data: [],
				errors: [],
				meta: {}
			};

			if (isFunction(_config.step))
			{
				var userStep = _config.step;
				_config.step = function(results)
				{
					_results = results;

					if (needsHeaderRow())
						processResults();
					else	// only call user's step function after header row
					{
						processResults();

						// It's possbile that this line was empty and there's no row here after all
						if (_results.data.length === 0)
							return;

						_stepCounter += results.data.length;
						if (_config.preview && _stepCounter > _config.preview)
							_parser.abort();
						else
							userStep(_results, self);
					}
				};
			}

			/**
			 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
			 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
			 * when an input comes in multiple chunks, like from a file.
			 */
			this.parse = function(input, baseIndex, ignoreLastRow)
			{
				var quoteChar = _config.quoteChar || '"';
				if (!_config.newline)
					_config.newline = guessLineEndings(input, quoteChar);

				_delimiterError = false;
				if (!_config.delimiter)
				{
					var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines, _config.comments);
					if (delimGuess.successful)
						_config.delimiter = delimGuess.bestDelimiter;
					else
					{
						_delimiterError = true;	// add error after parsing (otherwise it would be overwritten)
						_config.delimiter = Papa.DefaultDelimiter;
					}
					_results.meta.delimiter = _config.delimiter;
				}
				else if(isFunction(_config.delimiter))
				{
					_config.delimiter = _config.delimiter(input);
					_results.meta.delimiter = _config.delimiter;
				}

				var parserConfig = copy(_config);
				if (_config.preview && _config.header)
					parserConfig.preview++;	// to compensate for header row

				_input = input;
				_parser = new Parser(parserConfig);
				_results = _parser.parse(_input, baseIndex, ignoreLastRow);
				processResults();
				return _paused ? { meta: { paused: true } } : (_results || { meta: { paused: false } });
			};

			this.paused = function()
			{
				return _paused;
			};

			this.pause = function()
			{
				_paused = true;
				_parser.abort();
				_input = _input.substr(_parser.getCharIndex());
			};

			this.resume = function()
			{
				_paused = false;
				self.streamer.parseChunk(_input, true);
			};

			this.aborted = function()
			{
				return _aborted;
			};

			this.abort = function()
			{
				_aborted = true;
				_parser.abort();
				_results.meta.aborted = true;
				if (isFunction(_config.complete))
					_config.complete(_results);
				_input = '';
			};

			function testEmptyLine(s) {
				return _config.skipEmptyLines === 'greedy' ? s.join('').trim() === '' : s.length === 1 && s[0].length === 0;
			}

			function processResults()
			{
				if (_results && _delimiterError)
				{
					addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + Papa.DefaultDelimiter + '\'');
					_delimiterError = false;
				}

				if (_config.skipEmptyLines)
				{
					for (var i = 0; i < _results.data.length; i++)
						if (testEmptyLine(_results.data[i]))
							_results.data.splice(i--, 1);
				}

				if (needsHeaderRow())
					fillHeaderFields();

				return applyHeaderAndDynamicTypingAndTransformation();
			}

			function needsHeaderRow()
			{
				return _config.header && _fields.length === 0;
			}

			function fillHeaderFields()
			{
				if (!_results)
					return;
				for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
					for (var j = 0; j < _results.data[i].length; j++)
					{
						var header = _results.data[i][j];

						if (_config.trimHeaders) {
							header = header.trim();
						}

						_fields.push(header);
					}
				_results.data.splice(0, 1);
			}

			function shouldApplyDynamicTyping(field) {
				// Cache function values to avoid calling it for each row
				if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
					_config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
				}
				return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
			}

			function parseDynamic(field, value)
			{
				if (shouldApplyDynamicTyping(field))
				{
					if (value === 'true' || value === 'TRUE')
						return true;
					else if (value === 'false' || value === 'FALSE')
						return false;
					else if (FLOAT.test(value))
						return parseFloat(value);
					else if (ISO_DATE.test(value))
						return new Date(value);
					else
						return (value === '' ? null : value);
				}
				return value;
			}

			function applyHeaderAndDynamicTypingAndTransformation()
			{
				if (!_results || (!_config.header && !_config.dynamicTyping && !_config.transform))
					return _results;

				for (var i = 0; i < _results.data.length; i++)
				{
					var row = _config.header ? {} : [];

					var j;
					for (j = 0; j < _results.data[i].length; j++)
					{
						var field = j;
						var value = _results.data[i][j];

						if (_config.header)
							field = j >= _fields.length ? '__parsed_extra' : _fields[j];

						if (_config.transform)
							value = _config.transform(value,field);

						value = parseDynamic(field, value);

						if (field === '__parsed_extra')
						{
							row[field] = row[field] || [];
							row[field].push(value);
						}
						else
							row[field] = value;
					}

					_results.data[i] = row;

					if (_config.header)
					{
						if (j > _fields.length)
							addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
						else if (j < _fields.length)
							addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
					}
				}

				if (_config.header && _results.meta)
					_results.meta.fields = _fields;

				_rowCounter += _results.data.length;
				return _results;
			}

			function guessDelimiter(input, newline, skipEmptyLines, comments)
			{
				var delimChoices = [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP];
				var bestDelim, bestDelta, fieldCountPrevRow;

				for (var i = 0; i < delimChoices.length; i++)
				{
					var delim = delimChoices[i];
					var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
					fieldCountPrevRow = undefined;

					var preview = new Parser({
						comments: comments,
						delimiter: delim,
						newline: newline,
						preview: 10
					}).parse(input);

					for (var j = 0; j < preview.data.length; j++)
					{
						if (skipEmptyLines && testEmptyLine(preview.data[j]))
						{
							emptyLinesCount++;
							continue;
						}
						var fieldCount = preview.data[j].length;
						avgFieldCount += fieldCount;

						if (typeof fieldCountPrevRow === 'undefined')
						{
							fieldCountPrevRow = 0;
							continue;
						}
						else if (fieldCount > 1)
						{
							delta += Math.abs(fieldCount - fieldCountPrevRow);
							fieldCountPrevRow = fieldCount;
						}
					}

					if (preview.data.length > 0)
						avgFieldCount /= (preview.data.length - emptyLinesCount);

					if ((typeof bestDelta === 'undefined' || delta > bestDelta)
						&& avgFieldCount > 1.99)
					{
						bestDelta = delta;
						bestDelim = delim;
					}
				}

				_config.delimiter = bestDelim;

				return {
					successful: !!bestDelim,
					bestDelimiter: bestDelim
				};
			}

			function guessLineEndings(input, quoteChar)
			{
				input = input.substr(0, 1024 * 1024);	// max length 1 MB
				// Replace all the text inside quotes
				var re = new RegExp(escapeRegExp(quoteChar) + '([^]*?)' + escapeRegExp(quoteChar), 'gm');
				input = input.replace(re, '');

				var r = input.split('\r');

				var n = input.split('\n');

				var nAppearsFirst = (n.length > 1 && n[0].length < r[0].length);

				if (r.length === 1 || nAppearsFirst)
					return '\n';

				var numWithN = 0;
				for (var i = 0; i < r.length; i++)
				{
					if (r[i][0] === '\n')
						numWithN++;
				}

				return numWithN >= r.length / 2 ? '\r\n' : '\r';
			}

			function addError(type, code, msg, row)
			{
				_results.errors.push({
					type: type,
					code: code,
					message: msg,
					row: row
				});
			}
		}

		/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
		function escapeRegExp(string)
		{
			return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
		}

		/** The core parser implements speedy and correct CSV parsing */
		function Parser(config)
		{
			// Unpack the config object
			config = config || {};
			var delim = config.delimiter;
			var newline = config.newline;
			var comments = config.comments;
			var step = config.step;
			var preview = config.preview;
			var fastMode = config.fastMode;
			var quoteChar;
			/** Allows for no quoteChar by setting quoteChar to undefined in config */
			if (config.quoteChar === undefined) {
				quoteChar = '"';
			} else {
				quoteChar = config.quoteChar;
			}
			var escapeChar = quoteChar;
			if (config.escapeChar !== undefined) {
				escapeChar = config.escapeChar;
			}

			// Delimiter must be valid
			if (typeof delim !== 'string'
				|| Papa.BAD_DELIMITERS.indexOf(delim) > -1)
				delim = ',';

			// Comment character must be valid
			if (comments === delim)
				throw 'Comment character same as delimiter';
			else if (comments === true)
				comments = '#';
			else if (typeof comments !== 'string'
				|| Papa.BAD_DELIMITERS.indexOf(comments) > -1)
				comments = false;

			// Newline must be valid: \r, \n, or \r\n
			if (newline !== '\n' && newline !== '\r' && newline !== '\r\n')
				newline = '\n';

			// We're gonna need these at the Parser scope
			var cursor = 0;
			var aborted = false;

			this.parse = function(input, baseIndex, ignoreLastRow)
			{
				// For some reason, in Chrome, this speeds things up (!?)
				if (typeof input !== 'string')
					throw 'Input must be a string';

				// We don't need to compute some of these every time parse() is called,
				// but having them in a more local scope seems to perform better
				var inputLen = input.length,
					delimLen = delim.length,
					newlineLen = newline.length,
					commentsLen = comments.length;
				var stepIsFunction = isFunction(step);

				// Establish starting state
				cursor = 0;
				var data = [], errors = [], row = [], lastCursor = 0;

				if (!input)
					return returnable();

				if (fastMode || (fastMode !== false && input.indexOf(quoteChar) === -1))
				{
					var rows = input.split(newline);
					for (var i = 0; i < rows.length; i++)
					{
						row = rows[i];
						cursor += row.length;
						if (i !== rows.length - 1)
							cursor += newline.length;
						else if (ignoreLastRow)
							return returnable();
						if (comments && row.substr(0, commentsLen) === comments)
							continue;
						if (stepIsFunction)
						{
							data = [];
							pushRow(row.split(delim));
							doStep();
							if (aborted)
								return returnable();
						}
						else
							pushRow(row.split(delim));
						if (preview && i >= preview)
						{
							data = data.slice(0, preview);
							return returnable(true);
						}
					}
					return returnable();
				}

				var nextDelim = input.indexOf(delim, cursor);
				var nextNewline = input.indexOf(newline, cursor);
				var quoteCharRegex = new RegExp(escapeRegExp(escapeChar) + escapeRegExp(quoteChar), 'g');
				var quoteSearch;

				// Parser loop
				for (;;)
				{
					// Field has opening quote
					if (input[cursor] === quoteChar)
					{
						// Start our search for the closing quote where the cursor is
						quoteSearch = cursor;

						// Skip the opening quote
						cursor++;

						for (;;)
						{
							// Find closing quote
							quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);

							//No other quotes are found - no other delimiters
							if (quoteSearch === -1)
							{
								if (!ignoreLastRow) {
									// No closing quote... what a pity
									errors.push({
										type: 'Quotes',
										code: 'MissingQuotes',
										message: 'Quoted field unterminated',
										row: data.length,	// row has yet to be inserted
										index: cursor
									});
								}
								return finish();
							}

							// Closing quote at EOF
							if (quoteSearch === inputLen - 1)
							{
								var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
								return finish(value);
							}

							// If this quote is escaped, it's part of the data; skip it
							// If the quote character is the escape character, then check if the next character is the escape character
							if (quoteChar === escapeChar &&  input[quoteSearch + 1] === escapeChar)
							{
								quoteSearch++;
								continue;
							}

							// If the quote character is not the escape character, then check if the previous character was the escape character
							if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar)
							{
								continue;
							}

							// Check up to nextDelim or nextNewline, whichever is closest
							var checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline);
							var spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);

							// Closing quote followed by delimiter or 'unnecessary spaces + delimiter'
							if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] === delim)
							{
								row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
								cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
								nextDelim = input.indexOf(delim, cursor);
								nextNewline = input.indexOf(newline, cursor);
								break;
							}

							var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);

							// Closing quote followed by newline or 'unnecessary spaces + newLine'
							if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, newlineLen) === newline)
							{
								row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
								saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
								nextDelim = input.indexOf(delim, cursor);	// because we may have skipped the nextDelim in the quoted field

								if (stepIsFunction)
								{
									doStep();
									if (aborted)
										return returnable();
								}

								if (preview && data.length >= preview)
									return returnable(true);

								break;
							}


							// Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
							errors.push({
								type: 'Quotes',
								code: 'InvalidQuotes',
								message: 'Trailing quote on quoted field is malformed',
								row: data.length,	// row has yet to be inserted
								index: cursor
							});

							quoteSearch++;
							continue;

						}

						continue;
					}

					// Comment found at start of new line
					if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments)
					{
						if (nextNewline === -1)	// Comment ends at EOF
							return returnable();
						cursor = nextNewline + newlineLen;
						nextNewline = input.indexOf(newline, cursor);
						nextDelim = input.indexOf(delim, cursor);
						continue;
					}

					// Next delimiter comes before next newline, so we've reached end of field
					if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1))
					{
						row.push(input.substring(cursor, nextDelim));
						cursor = nextDelim + delimLen;
						nextDelim = input.indexOf(delim, cursor);
						continue;
					}

					// End of row
					if (nextNewline !== -1)
					{
						row.push(input.substring(cursor, nextNewline));
						saveRow(nextNewline + newlineLen);

						if (stepIsFunction)
						{
							doStep();
							if (aborted)
								return returnable();
						}

						if (preview && data.length >= preview)
							return returnable(true);

						continue;
					}

					break;
				}


				return finish();


				function pushRow(row)
				{
					data.push(row);
					lastCursor = cursor;
				}

				/**
	             * checks if there are extra spaces after closing quote and given index without any text
	             * if Yes, returns the number of spaces
	             */
				function extraSpaces(index) {
					var spaceLength = 0;
					if (index !== -1) {
						var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
						if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
							spaceLength = textBetweenClosingQuoteAndIndex.length;
						}
					}
					return spaceLength;
				}

				/**
				 * Appends the remaining input from cursor to the end into
				 * row, saves the row, calls step, and returns the results.
				 */
				function finish(value)
				{
					if (ignoreLastRow)
						return returnable();
					if (typeof value === 'undefined')
						value = input.substr(cursor);
					row.push(value);
					cursor = inputLen;	// important in case parsing is paused
					pushRow(row);
					if (stepIsFunction)
						doStep();
					return returnable();
				}

				/**
				 * Appends the current row to the results. It sets the cursor
				 * to newCursor and finds the nextNewline. The caller should
				 * take care to execute user's step function and check for
				 * preview and end parsing if necessary.
				 */
				function saveRow(newCursor)
				{
					cursor = newCursor;
					pushRow(row);
					row = [];
					nextNewline = input.indexOf(newline, cursor);
				}

				/** Returns an object with the results, errors, and meta. */
				function returnable(stopped)
				{
					return {
						data: data,
						errors: errors,
						meta: {
							delimiter: delim,
							linebreak: newline,
							aborted: aborted,
							truncated: !!stopped,
							cursor: lastCursor + (baseIndex || 0)
						}
					};
				}

				/** Executes the user's step function and resets data & errors. */
				function doStep()
				{
					step(returnable());
					data = [];
					errors = [];
				}
			};

			/** Sets the abort flag */
			this.abort = function()
			{
				aborted = true;
			};

			/** Gets the cursor position */
			this.getCharIndex = function()
			{
				return cursor;
			};
		}


		// If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
		// the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
		function getScriptPath()
		{
			var scripts = document.getElementsByTagName('script');
			return scripts.length ? scripts[scripts.length - 1].src : '';
		}

		function newWorker()
		{
			if (!Papa.WORKERS_SUPPORTED)
				return false;
			if (!LOADED_SYNC && Papa.SCRIPT_PATH === null)
				throw new Error(
					'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' +
					'You need to set Papa.SCRIPT_PATH manually.'
				);
			var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
			// Append 'papaworker' to the search string to tell papaparse that this is our worker.
			workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
			var w = new global.Worker(workerUrl);
			w.onmessage = mainThreadReceivedMessage;
			w.id = workerIdCounter++;
			workers[w.id] = w;
			return w;
		}

		/** Callback when main thread receives a message */
		function mainThreadReceivedMessage(e)
		{
			var msg = e.data;
			var worker = workers[msg.workerId];
			var aborted = false;

			if (msg.error)
				worker.userError(msg.error, msg.file);
			else if (msg.results && msg.results.data)
			{
				var abort = function() {
					aborted = true;
					completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
				};

				var handle = {
					abort: abort,
					pause: notImplemented,
					resume: notImplemented
				};

				if (isFunction(worker.userStep))
				{
					for (var i = 0; i < msg.results.data.length; i++)
					{
						worker.userStep({
							data: [msg.results.data[i]],
							errors: msg.results.errors,
							meta: msg.results.meta
						}, handle);
						if (aborted)
							break;
					}
					delete msg.results;	// free memory ASAP
				}
				else if (isFunction(worker.userChunk))
				{
					worker.userChunk(msg.results, handle, msg.file);
					delete msg.results;
				}
			}

			if (msg.finished && !aborted)
				completeWorker(msg.workerId, msg.results);
		}

		function completeWorker(workerId, results) {
			var worker = workers[workerId];
			if (isFunction(worker.userComplete))
				worker.userComplete(results);
			worker.terminate();
			delete workers[workerId];
		}

		function notImplemented() {
			throw 'Not implemented.';
		}

		/** Callback when worker thread receives a message */
		function workerThreadReceivedMessage(e)
		{
			var msg = e.data;

			if (typeof Papa.WORKER_ID === 'undefined' && msg)
				Papa.WORKER_ID = msg.workerId;

			if (typeof msg.input === 'string')
			{
				global.postMessage({
					workerId: Papa.WORKER_ID,
					results: Papa.parse(msg.input, msg.config),
					finished: true
				});
			}
			else if ((global.File && msg.input instanceof File) || msg.input instanceof Object)	// thank you, Safari (see issue #106)
			{
				var results = Papa.parse(msg.input, msg.config);
				if (results)
					global.postMessage({
						workerId: Papa.WORKER_ID,
						results: results,
						finished: true
					});
			}
		}

		/** Makes a deep copy of an array or object (mostly) */
		function copy(obj)
		{
			if (typeof obj !== 'object' || obj === null)
				return obj;
			var cpy = Array.isArray(obj) ? [] : {};
			for (var key in obj)
				cpy[key] = copy(obj[key]);
			return cpy;
		}

		function bindFunction(f, self)
		{
			return function() { f.apply(self, arguments); };
		}

		function isFunction(func)
		{
			return typeof func === 'function';
		}

		return Papa;
	}));
	});

	const html = "\n  <style>\n  #sczh-story-tool {\n    position: absolute;\n    display: none;\n    background: #ffffff;\n    border-radius: 24px;\n    box-sizing: border-box;\n    font-family: sczh-yuanti;\n    align-items: center;\n    justify-content: center;\n    color: #ff6499;\n    text-shadow: 0 0 6px #fff;\n    cursor: pointer;\n    user-select: none;\n    width: 100px;\n    height: 100px;\n    font-size: 32px;\n    border: 7px solid transparent;\n    border-image: url(".concat(config.origin, "/data/image/border.png);\n    border-image-slice: 7;\n    transform-origin: top right;\n  }\n  .story-tool-btns {\n    width: 100%;\n    height: 100%;\n    display: none;\n  }\n  .story-tool-btns .btn-download-sczh,\n  .story-tool-btns label {\n    flex: 1;\n    height: 100%;\n    background: #fff;\n    display: flex;\n    box-sizing: content-box;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    color: #c0aade;\n    text-shadow: 0 0 6px #fff;\n  }\n  .story-tool-btns .btn-download-sczh:hover {\n    color: #9f66ec;\n  }\n  .story-tool-btns label {\n    color: rgb(242, 156, 199);\n    border-right: 1px solid #c9c9c9;\n  }\n  #sczh-story-tool .btn-close-sczh {\n    height: 25px;\n    width: 50px;\n    background: rgba(0, 0, 0, 0.58);\n    color: #fff;\n    letter-spacing: 2px;\n    position: absolute;\n    right: -25px;\n    top: -20px;\n    border-radius: 4px;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    font-family: sczh-heiti;\n    font-size: 15px;\n  }\n  #sczh-story-tool:hover {\n    width: 200px;\n  }\n  #sczh-story-tool:hover .story-tool-btns {\n    display: flex;\n  }\n  #sczh-story-tool:hover .btn-close-sczh {\n    display: flex;\n  }\n  #sczh-story-tool:hover > .text-sczh {\n    display: none;\n  }\n  #sczh-story-tool .btn-close-sczh:hover {\n    background: rgba(0, 0, 0, 0.9);\n  }\n  .story-tool-btns label:hover {\n    color: #f270b1;\n  }\n  .story-tool-btns .btn-download-sczh:hover,\n  .story-tool-btns label:hover {\n    background-color: #f7f7f7;\n  }\n  </style>\n  <div id=\"sczh-story-tool\"><span class=\"text-sczh\">\uCEE4\uBBA4</span>\n    <span id=\"btn-close-sczh\" class=\"btn-close-sczh\">\uB2EB\uAE30</span>\n    <input type=\"file\" style=\"display:none\" id=\"ipt-preview-sczh\" multiple accept=\".csv\">\n    <div class=\"story-tool-btns\">\n      <label for=\"ipt-preview-sczh\">\uC2E4\uD5D8</label>\n      <div id=\"btn-download-sczh\" class=\"btn-download-sczh\">\uB2E4\uC6B4</div>\n    </div>\n  </div>\n  ");

	const savePreview = map => {
	  const arr = [...map].slice(-PREVIEW_COUNT);
	  const newArr = arr.map(item => {
	    item[1] = [...item[1]];
	    return item;
	  });
	  sessionStorage.setItem('sczh:preview', JSON.stringify(newArr));
	};

	let showToolFlag = false;

	const showStoryTool = storyCache => {
	  if (showToolFlag) return;
	  showToolFlag = true;
	  document.body.insertAdjacentHTML('beforeend', html);
	  const cont = document.getElementById('sczh-story-tool');
	  const setToolPos = debounce_1(() => {
	    const pos = [0.017, 0.22];
	    const height = window.innerHeight;
	    const width = window.innerWidth;
	    const h_w = height / width;
	    let ch = height;
	    let cw = width;
	    let offsetTop = 0;
	    let offsetRight = 0;

	    if (h_w > 9 / 16) {
	      ch = width * 9 / 16;
	      offsetTop = (height - ch) / 2;
	    } else {
	      cw = height * 16 / 9;
	      offsetRight = (width - cw) / 2;
	    }

	    cont.style.right = Math.floor(offsetRight + pos[0] * cw) + 'px';
	    cont.style.top = Math.floor(offsetTop + pos[1] * ch) + 'px';
	    cont.style.transform = "scale(".concat((ch / 900).toFixed(3), ")"); // cont.style.width = Math.floor(size[0] * cw) + 'px'
	    // cont.style.height = Math.floor(size[1] * cw) + 'px'
	    // cont.style.fontSize = Math.floor(size[1] * cw * 0.35) + 'px'

	    if (storyCache.name) {
	      cont.style.display = 'flex';
	    } else {
	      cont.style.display = 'none';
	    }
	  }, 300);
	  setToolPos();
	  window.addEventListener('resize', setToolPos);
	  const btnDl = document.getElementById('btn-download-sczh');
	  btnDl.addEventListener('click', function () {
	    if (storyCache.name) {
	      const str = papaparse.unparse(storyCache.list);
	      tryDownload(str, storyCache.filename);
	    }
	  });
	  const btnClose = document.getElementById('btn-close-sczh');
	  btnClose.addEventListener('click', function () {
	    cont.style.display = 'none';
	    config.story = 'normal';
	    saveConfig();
	  });
	  const iptPreview = document.getElementById('ipt-preview-sczh');
	  iptPreview.addEventListener('change', function () {
	    const files = this.files;
	    if (!files.length) return;
	    files.forEach(file => {
	      const reader = new FileReader();

	      reader.onload = e => {
	        const text = e.target.result;
	        const storyMap = getStoryMap(text);

	        if (storyMap.has('name')) {
	          const _name = storyMap.get('name');

	          storyCache.preview.set(_name, storyMap);
	          savePreview(storyCache.preview);
	          alert("\uB3C4\uC785".concat(_name, "\uC131\uACF5"));
	        }
	      };

	      reader.readAsText(file);
	    });
	  });
	};

	const nounFixMap = new Map();
	let nfLoaded = false;

	const getNounFix = async () => {
	  if (!nfLoaded) {
	    let csv = await getLocalData('noun-fix');
	    csv = await fetchWithHash('/data/etc/noun-fix.csv');
	    setLocalData('noun-fix', csv);
	    const list = parseCsv(csv);
	    sortWords(list, 'text').forEach(item => {
	      const text = trim(item.text, true);
	      const fixed = trim(item.fixed, true);

	      if (text) {
	        nounFixMap.set(text, fixed);
	      }
	    });
	    nfLoaded = true;
	  }

	  return nounFixMap;
	};

	const cyPrefixMap = new Map();
	let cyfLoaded = false;

	const getCaiyunPrefix = async () => {
	  if (!cyfLoaded) {
	    let csv = await getLocalData('caiyun-prefix');
	    csv = await fetchWithHash('/data/etc/caiyun-prefix.csv');
	    setLocalData('caiyun-prefix', csv);
	    const list = parseCsv(csv);
	    sortWords(list, 'text').forEach(item => {
	      const text = trim(item.text, true);
	      const fixed = trim(item.fixed, true);

	      if (text) {
	        cyPrefixMap.set(text, fixed);
	      }
	    });
	    cyfLoaded = true;
	  }

	  return cyPrefixMap;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty$b(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty$b(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	var encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var querystring = createCommonjsModule(function (module, exports) {

	exports.decode = exports.parse = decode;
	exports.encode = exports.stringify = encode;
	});
	var querystring_1 = querystring.decode;
	var querystring_2 = querystring.parse;
	var querystring_3 = querystring.encode;
	var querystring_4 = querystring.stringify;

	var bind = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */

	var isBuffer = function isBuffer (obj) {
	  return obj != null && obj.constructor != null &&
	    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	};

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray$1(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString$1(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject$1(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction$1(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject$1(val) && isFunction$1(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim$1(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray$1(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	var utils = {
	  isArray: isArray$1,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString$1,
	  isNumber: isNumber,
	  isObject: isObject$1,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction$1,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim$1
	};

	var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	var enhanceError = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	var createError = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	var settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};

	function encode$1(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	var buildURL = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode$1(key) + '=' + encode$1(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	var parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};

	var isURLSameOrigin = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);

	var cookies = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);

	var xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies$1 = cookies;

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies$1.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	var ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

	var debug = createCommonjsModule(function (module, exports) {
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = ms;

	/**
	 * Active `debug` instances.
	 */
	exports.instances = [];

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  var prevTime;

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	  debug.destroy = destroy;

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  exports.instances.push(debug);

	  return debug;
	}

	function destroy () {
	  var index = exports.instances.indexOf(this);
	  if (index !== -1) {
	    exports.instances.splice(index, 1);
	    return true;
	  } else {
	    return false;
	  }
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var i;
	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }

	  for (i = 0; i < exports.instances.length; i++) {
	    var instance = exports.instances[i];
	    instance.enabled = exports.enabled(instance.namespace);
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  if (name[name.length - 1] === '*') {
	    return true;
	  }
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}
	});
	var debug_1 = debug.coerce;
	var debug_2 = debug.disable;
	var debug_3 = debug.enable;
	var debug_4 = debug.enabled;
	var debug_5 = debug.humanize;
	var debug_6 = debug.instances;
	var debug_7 = debug.names;
	var debug_8 = debug.skips;
	var debug_9 = debug.formatters;

	var browser = createCommonjsModule(function (module, exports) {
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
	  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
	  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
	  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
	  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
	  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
	  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
	  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
	  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
	  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
	  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // Internet Explorer and Edge do not support colors.
	  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
	    return false;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit');

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	});
	var browser_1 = browser.log;
	var browser_2 = browser.formatArgs;
	var browser_3 = browser.save;
	var browser_4 = browser.load;
	var browser_5 = browser.useColors;
	var browser_6 = browser.storage;
	var browser_7 = browser.colors;

	var hasFlag = (flag, argv) => {
		argv = argv || process.argv;
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const pos = argv.indexOf(prefix + flag);
		const terminatorPos = argv.indexOf('--');
		return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
	};

	const env = process.env;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		forceColor = false;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = true;
	}
	if ('FORCE_COLOR' in env) {
		forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(stream) {
		if (forceColor === false) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (stream && !stream.isTTY && forceColor !== true) {
			return 0;
		}

		const min = forceColor ? 1 : 0;

		if (process.platform === 'win32') {
			// Node.js 7.5.0 is the first version of Node.js to include a patch to
			// libuv that enables 256 color output on Windows. Anything earlier and it
			// won't work. However, here we target Node.js 8 at minimum as it is an LTS
			// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
			// release that supports 256 colors. Windows 10 build 14931 is the first release
			// that supports 16m/TrueColor.
			const osRelease = os.release().split('.');
			if (
				Number(process.versions.node.split('.')[0]) >= 8 &&
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		if (env.TERM === 'dumb') {
			return min;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream);
		return translateLevel(level);
	}

	var supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: getSupportLevel(process.stdout),
		stderr: getSupportLevel(process.stderr)
	};

	var node = createCommonjsModule(function (module, exports) {
	/**
	 * Module dependencies.
	 */




	/**
	 * This is the Node.js implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.init = init;
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;

	/**
	 * Colors.
	 */

	exports.colors = [ 6, 2, 3, 4, 5, 1 ];

	try {
	  var supportsColor = supportsColor_1;
	  if (supportsColor && supportsColor.level >= 2) {
	    exports.colors = [
	      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
	      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
	      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
	      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
	      205, 206, 207, 208, 209, 214, 215, 220, 221
	    ];
	  }
	} catch (err) {
	  // swallow - we only care if `supports-color` is available; it doesn't have to be.
	}

	/**
	 * Build up the default `inspectOpts` object from the environment variables.
	 *
	 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
	 */

	exports.inspectOpts = Object.keys(process.env).filter(function (key) {
	  return /^debug_/i.test(key);
	}).reduce(function (obj, key) {
	  // camel-case
	  var prop = key
	    .substring(6)
	    .toLowerCase()
	    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

	  // coerce string value into JS value
	  var val = process.env[key];
	  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
	  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
	  else if (val === 'null') val = null;
	  else val = Number(val);

	  obj[prop] = val;
	  return obj;
	}, {});

	/**
	 * Is stdout a TTY? Colored output is enabled when `true`.
	 */

	function useColors() {
	  return 'colors' in exports.inspectOpts
	    ? Boolean(exports.inspectOpts.colors)
	    : tty.isatty(process.stderr.fd);
	}

	/**
	 * Map %o to `util.inspect()`, all on a single line.
	 */

	exports.formatters.o = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts)
	    .split('\n').map(function(str) {
	      return str.trim()
	    }).join(' ');
	};

	/**
	 * Map %o to `util.inspect()`, allowing multiple lines if needed.
	 */

	exports.formatters.O = function(v) {
	  this.inspectOpts.colors = this.useColors;
	  return util.inspect(v, this.inspectOpts);
	};

	/**
	 * Adds ANSI color escape codes if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var name = this.namespace;
	  var useColors = this.useColors;

	  if (useColors) {
	    var c = this.color;
	    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
	    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

	    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
	    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
	  } else {
	    args[0] = getDate() + name + ' ' + args[0];
	  }
	}

	function getDate() {
	  if (exports.inspectOpts.hideDate) {
	    return '';
	  } else {
	    return new Date().toISOString() + ' ';
	  }
	}

	/**
	 * Invokes `util.format()` with the specified arguments and writes to stderr.
	 */

	function log() {
	  return process.stderr.write(util.format.apply(util, arguments) + '\n');
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  if (null == namespaces) {
	    // If you set a process.env field to null or undefined, it gets cast to the
	    // string 'null' or 'undefined'. Just delete instead.
	    delete process.env.DEBUG;
	  } else {
	    process.env.DEBUG = namespaces;
	  }
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  return process.env.DEBUG;
	}

	/**
	 * Init logic for `debug` instances.
	 *
	 * Create a new `inspectOpts` object in case `useColors` is set
	 * differently for a particular `debug` instance.
	 */

	function init (debug) {
	  debug.inspectOpts = {};

	  var keys = Object.keys(exports.inspectOpts);
	  for (var i = 0; i < keys.length; i++) {
	    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	  }
	}

	/**
	 * Enable namespaces listed in `process.env.DEBUG` initially.
	 */

	exports.enable(load());
	});
	var node_1 = node.init;
	var node_2 = node.log;
	var node_3 = node.formatArgs;
	var node_4 = node.save;
	var node_5 = node.load;
	var node_6 = node.useColors;
	var node_7 = node.colors;
	var node_8 = node.inspectOpts;

	var src = createCommonjsModule(function (module) {
	/**
	 * Detect Electron renderer process, which is node, but we should
	 * treat as a browser.
	 */

	if (typeof process === 'undefined' || process.type === 'renderer') {
	  module.exports = browser;
	} else {
	  module.exports = node;
	}
	});

	var Writable = require("stream").Writable;
	var debug$1 = src("follow-redirects");

	// RFC7231§4.2.1: Of the request methods defined by this specification,
	// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
	var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

	// Create handlers that pass events from native requests
	var eventHandlers = Object.create(null);
	["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
	  eventHandlers[event] = function (arg) {
	    this._redirectable.emit(event, arg);
	  };
	});

	// An HTTP(S) request that can be redirected
	function RedirectableRequest(options, responseCallback) {
	  // Initialize the request
	  Writable.call(this);
	  options.headers = options.headers || {};
	  this._options = options;
	  this._redirectCount = 0;
	  this._redirects = [];
	  this._requestBodyLength = 0;
	  this._requestBodyBuffers = [];

	  // Since http.request treats host as an alias of hostname,
	  // but the url module interprets host as hostname plus port,
	  // eliminate the host property to avoid confusion.
	  if (options.host) {
	    // Use hostname if set, because it has precedence
	    if (!options.hostname) {
	      options.hostname = options.host;
	    }
	    delete options.host;
	  }

	  // Attach a callback if passed
	  if (responseCallback) {
	    this.on("response", responseCallback);
	  }

	  // React to responses of native requests
	  var self = this;
	  this._onNativeResponse = function (response) {
	    self._processResponse(response);
	  };

	  // Complete the URL object when necessary
	  if (!options.pathname && options.path) {
	    var searchPos = options.path.indexOf("?");
	    if (searchPos < 0) {
	      options.pathname = options.path;
	    }
	    else {
	      options.pathname = options.path.substring(0, searchPos);
	      options.search = options.path.substring(searchPos);
	    }
	  }

	  // Perform the first request
	  this._performRequest();
	}
	RedirectableRequest.prototype = Object.create(Writable.prototype);

	// Writes buffered data to the current native request
	RedirectableRequest.prototype.write = function (data, encoding, callback) {
	  // Validate input and shift parameters if necessary
	  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
	    throw new Error("data should be a string, Buffer or Uint8Array");
	  }
	  if (typeof encoding === "function") {
	    callback = encoding;
	    encoding = null;
	  }

	  // Ignore empty buffers, since writing them doesn't invoke the callback
	  // https://github.com/nodejs/node/issues/22066
	  if (data.length === 0) {
	    if (callback) {
	      callback();
	    }
	    return;
	  }
	  // Only write when we don't exceed the maximum body length
	  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
	    this._requestBodyLength += data.length;
	    this._requestBodyBuffers.push({ data: data, encoding: encoding });
	    this._currentRequest.write(data, encoding, callback);
	  }
	  // Error when we exceed the maximum body length
	  else {
	    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
	    this.abort();
	  }
	};

	// Ends the current native request
	RedirectableRequest.prototype.end = function (data, encoding, callback) {
	  // Shift parameters if necessary
	  if (typeof data === "function") {
	    callback = data;
	    data = encoding = null;
	  }
	  else if (typeof encoding === "function") {
	    callback = encoding;
	    encoding = null;
	  }

	  // Write data and end
	  var currentRequest = this._currentRequest;
	  this.write(data || "", encoding, function () {
	    currentRequest.end(null, null, callback);
	  });
	};

	// Sets a header value on the current native request
	RedirectableRequest.prototype.setHeader = function (name, value) {
	  this._options.headers[name] = value;
	  this._currentRequest.setHeader(name, value);
	};

	// Clears a header value on the current native request
	RedirectableRequest.prototype.removeHeader = function (name) {
	  delete this._options.headers[name];
	  this._currentRequest.removeHeader(name);
	};

	// Proxy all other public ClientRequest methods
	[
	  "abort", "flushHeaders", "getHeader",
	  "setNoDelay", "setSocketKeepAlive", "setTimeout",
	].forEach(function (method) {
	  RedirectableRequest.prototype[method] = function (a, b) {
	    return this._currentRequest[method](a, b);
	  };
	});

	// Proxy all public ClientRequest properties
	["aborted", "connection", "socket"].forEach(function (property) {
	  Object.defineProperty(RedirectableRequest.prototype, property, {
	    get: function () { return this._currentRequest[property]; },
	  });
	});

	// Executes the next native request (initial or redirect)
	RedirectableRequest.prototype._performRequest = function () {
	  // Load the native protocol
	  var protocol = this._options.protocol;
	  var nativeProtocol = this._options.nativeProtocols[protocol];
	  if (!nativeProtocol) {
	    this.emit("error", new Error("Unsupported protocol " + protocol));
	    return;
	  }

	  // If specified, use the agent corresponding to the protocol
	  // (HTTP and HTTPS use different types of agents)
	  if (this._options.agents) {
	    var scheme = protocol.substr(0, protocol.length - 1);
	    this._options.agent = this._options.agents[scheme];
	  }

	  // Create the native request
	  var request = this._currentRequest =
	        nativeProtocol.request(this._options, this._onNativeResponse);
	  this._currentUrl = url.format(this._options);

	  // Set up event handlers
	  request._redirectable = this;
	  for (var event in eventHandlers) {
	    /* istanbul ignore else */
	    if (event) {
	      request.on(event, eventHandlers[event]);
	    }
	  }

	  // End a redirected request
	  // (The first request must be ended explicitly with RedirectableRequest#end)
	  if (this._isRedirect) {
	    // Write the request entity and end.
	    var i = 0;
	    var buffers = this._requestBodyBuffers;
	    (function writeNext() {
	      if (i < buffers.length) {
	        var buffer = buffers[i++];
	        request.write(buffer.data, buffer.encoding, writeNext);
	      }
	      else {
	        request.end();
	      }
	    }());
	  }
	};

	// Processes a response from the current native request
	RedirectableRequest.prototype._processResponse = function (response) {
	  // Store the redirected response
	  if (this._options.trackRedirects) {
	    this._redirects.push({
	      url: this._currentUrl,
	      headers: response.headers,
	      statusCode: response.statusCode,
	    });
	  }

	  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	  // that further action needs to be taken by the user agent in order to
	  // fulfill the request. If a Location header field is provided,
	  // the user agent MAY automatically redirect its request to the URI
	  // referenced by the Location field value,
	  // even if the specific status code is not understood.
	  var location = response.headers.location;
	  if (location && this._options.followRedirects !== false &&
	      response.statusCode >= 300 && response.statusCode < 400) {
	    // RFC7231§6.4: A client SHOULD detect and intervene
	    // in cyclical redirections (i.e., "infinite" redirection loops).
	    if (++this._redirectCount > this._options.maxRedirects) {
	      this.emit("error", new Error("Max redirects exceeded."));
	      return;
	    }

	    // RFC7231§6.4: Automatic redirection needs to done with
	    // care for methods not known to be safe […],
	    // since the user might not wish to redirect an unsafe request.
	    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
	    // that the target resource resides temporarily under a different URI
	    // and the user agent MUST NOT change the request method
	    // if it performs an automatic redirection to that URI.
	    var header;
	    var headers = this._options.headers;
	    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
	      this._options.method = "GET";
	      // Drop a possible entity and headers related to it
	      this._requestBodyBuffers = [];
	      for (header in headers) {
	        if (/^content-/i.test(header)) {
	          delete headers[header];
	        }
	      }
	    }

	    // Drop the Host header, as the redirect might lead to a different host
	    if (!this._isRedirect) {
	      for (header in headers) {
	        if (/^host$/i.test(header)) {
	          delete headers[header];
	        }
	      }
	    }

	    // Perform the redirected request
	    var redirectUrl = url.resolve(this._currentUrl, location);
	    debug$1("redirecting to", redirectUrl);
	    Object.assign(this._options, url.parse(redirectUrl));
	    this._isRedirect = true;
	    this._performRequest();

	    // Discard the remainder of the response to avoid waiting for data
	    response.destroy();
	  }
	  else {
	    // The response is not a redirect; return it as-is
	    response.responseUrl = this._currentUrl;
	    response.redirects = this._redirects;
	    this.emit("response", response);

	    // Clean up
	    this._requestBodyBuffers = [];
	  }
	};

	// Wraps the key/value object of protocols with redirect functionality
	function wrap(protocols) {
	  // Default settings
	  var exports = {
	    maxRedirects: 21,
	    maxBodyLength: 10 * 1024 * 1024,
	  };

	  // Wrap each protocol
	  var nativeProtocols = {};
	  Object.keys(protocols).forEach(function (scheme) {
	    var protocol = scheme + ":";
	    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
	    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

	    // Executes a request, following redirects
	    wrappedProtocol.request = function (options, callback) {
	      if (typeof options === "string") {
	        options = url.parse(options);
	        options.maxRedirects = exports.maxRedirects;
	      }
	      else {
	        options = Object.assign({
	          protocol: protocol,
	          maxRedirects: exports.maxRedirects,
	          maxBodyLength: exports.maxBodyLength,
	        }, options);
	      }
	      options.nativeProtocols = nativeProtocols;
	      assert.equal(options.protocol, protocol, "protocol mismatch");
	      debug$1("options", options);
	      return new RedirectableRequest(options, callback);
	    };

	    // Executes a GET request, following redirects
	    wrappedProtocol.get = function (options, callback) {
	      var request = wrappedProtocol.request(options, callback);
	      request.end();
	      return request;
	    };
	  });
	  return exports;
	}

	// Exports
	var followRedirects = wrap({ http: http, https: https });
	var wrap_1 = wrap;
	followRedirects.wrap = wrap_1;

	var name = "axios";
	var version$1 = "0.18.1";
	var description = "Promise based HTTP client for the browser and node.js";
	var main = "index.js";
	var scripts = {
		test: "grunt test && bundlesize",
		start: "node ./sandbox/server.js",
		build: "NODE_ENV=production grunt build",
		preversion: "npm test",
		version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
		postversion: "git push && git push --tags",
		examples: "node ./examples/server.js",
		coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"
	};
	var repository = {
		type: "git",
		url: "https://github.com/axios/axios.git"
	};
	var keywords = [
		"xhr",
		"http",
		"ajax",
		"promise",
		"node"
	];
	var author = "Matt Zabriskie";
	var license = "MIT";
	var bugs = {
		url: "https://github.com/axios/axios/issues"
	};
	var homepage = "https://github.com/axios/axios";
	var devDependencies = {
		bundlesize: "^0.5.7",
		coveralls: "^2.11.9",
		"es6-promise": "^4.0.5",
		grunt: "^1.0.1",
		"grunt-banner": "^0.6.0",
		"grunt-cli": "^1.2.0",
		"grunt-contrib-clean": "^1.0.0",
		"grunt-contrib-nodeunit": "^1.0.0",
		"grunt-contrib-watch": "^1.0.0",
		"grunt-eslint": "^19.0.0",
		"grunt-karma": "^2.0.0",
		"grunt-ts": "^6.0.0-beta.3",
		"grunt-webpack": "^1.0.18",
		"istanbul-instrumenter-loader": "^1.0.0",
		"jasmine-core": "^2.4.1",
		karma: "^1.3.0",
		"karma-chrome-launcher": "^2.0.0",
		"karma-coverage": "^1.0.0",
		"karma-firefox-launcher": "^1.0.0",
		"karma-jasmine": "^1.0.2",
		"karma-jasmine-ajax": "^0.1.13",
		"karma-opera-launcher": "^1.0.0",
		"karma-safari-launcher": "^1.0.0",
		"karma-sauce-launcher": "^1.1.0",
		"karma-sinon": "^1.0.5",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^1.7.0",
		"load-grunt-tasks": "^3.5.2",
		minimist: "^1.2.0",
		sinon: "^1.17.4",
		webpack: "^1.13.1",
		"webpack-dev-server": "^1.14.1",
		"url-search-params": "^0.6.1",
		typescript: "^2.0.3"
	};
	var browser$1 = {
		"./lib/adapters/http.js": "./lib/adapters/xhr.js"
	};
	var typings = "./index.d.ts";
	var dependencies = {
		"follow-redirects": "1.5.10",
		"is-buffer": "^2.0.2"
	};
	var bundlesize = [
		{
			path: "./dist/axios.min.js",
			threshold: "5kB"
		}
	];
	var _package = {
		name: name,
		version: version$1,
		description: description,
		main: main,
		scripts: scripts,
		repository: repository,
		keywords: keywords,
		author: author,
		license: license,
		bugs: bugs,
		homepage: homepage,
		devDependencies: devDependencies,
		browser: browser$1,
		typings: typings,
		dependencies: dependencies,
		bundlesize: bundlesize
	};

	var _package$1 = /*#__PURE__*/Object.freeze({
		name: name,
		version: version$1,
		description: description,
		main: main,
		scripts: scripts,
		repository: repository,
		keywords: keywords,
		author: author,
		license: license,
		bugs: bugs,
		homepage: homepage,
		devDependencies: devDependencies,
		browser: browser$1,
		typings: typings,
		dependencies: dependencies,
		bundlesize: bundlesize,
		default: _package
	});

	var pkg = getCjsExportFromNamespace(_package$1);

	var httpFollow = followRedirects.http;
	var httpsFollow = followRedirects.https;






	/*eslint consistent-return:0*/
	var http_1 = function httpAdapter(config) {
	  return new Promise(function dispatchHttpRequest(resolve, reject) {
	    var data = config.data;
	    var headers = config.headers;
	    var timer;

	    // Set User-Agent (required by some servers)
	    // Only set header if it hasn't been set in config
	    // See https://github.com/axios/axios/issues/69
	    if (!headers['User-Agent'] && !headers['user-agent']) {
	      headers['User-Agent'] = 'axios/' + pkg.version;
	    }

	    if (data && !utils.isStream(data)) {
	      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
	        data = new Buffer(new Uint8Array(data));
	      } else if (utils.isString(data)) {
	        data = new Buffer(data, 'utf-8');
	      } else {
	        return reject(createError(
	          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
	          config
	        ));
	      }

	      // Add Content-Length header if data exists
	      headers['Content-Length'] = data.length;
	    }

	    // HTTP basic authentication
	    var auth = undefined;
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      auth = username + ':' + password;
	    }

	    // Parse url
	    var parsed = url.parse(config.url);
	    var protocol = parsed.protocol || 'http:';

	    if (!auth && parsed.auth) {
	      var urlAuth = parsed.auth.split(':');
	      var urlUsername = urlAuth[0] || '';
	      var urlPassword = urlAuth[1] || '';
	      auth = urlUsername + ':' + urlPassword;
	    }

	    if (auth) {
	      delete headers.Authorization;
	    }

	    var isHttps = protocol === 'https:';
	    var agent = isHttps ? config.httpsAgent : config.httpAgent;

	    var options = {
	      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
	      method: config.method,
	      headers: headers,
	      agent: agent,
	      auth: auth
	    };

	    if (config.socketPath) {
	      options.socketPath = config.socketPath;
	    } else {
	      options.hostname = parsed.hostname;
	      options.port = parsed.port;
	    }

	    var proxy = config.proxy;
	    if (!proxy && proxy !== false) {
	      var proxyEnv = protocol.slice(0, -1) + '_proxy';
	      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
	      if (proxyUrl) {
	        var parsedProxyUrl = url.parse(proxyUrl);
	        proxy = {
	          host: parsedProxyUrl.hostname,
	          port: parsedProxyUrl.port
	        };

	        if (parsedProxyUrl.auth) {
	          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
	          proxy.auth = {
	            username: proxyUrlAuth[0],
	            password: proxyUrlAuth[1]
	          };
	        }
	      }
	    }

	    if (proxy) {
	      options.hostname = proxy.host;
	      options.host = proxy.host;
	      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
	      options.port = proxy.port;
	      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

	      // Basic proxy authorization
	      if (proxy.auth) {
	        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
	        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
	      }
	    }

	    var transport;
	    if (config.transport) {
	      transport = config.transport;
	    } else if (config.maxRedirects === 0) {
	      transport = isHttps ? https : http;
	    } else {
	      if (config.maxRedirects) {
	        options.maxRedirects = config.maxRedirects;
	      }
	      transport = isHttps ? httpsFollow : httpFollow;
	    }

	    if (config.maxContentLength && config.maxContentLength > -1) {
	      options.maxBodyLength = config.maxContentLength;
	    }

	    // Create the request
	    var req = transport.request(options, function handleResponse(res) {
	      if (req.aborted) return;

	      // Response has been received so kill timer that handles request timeout
	      clearTimeout(timer);
	      timer = null;

	      // uncompress the response body transparently if required
	      var stream = res;
	      switch (res.headers['content-encoding']) {
	      /*eslint default-case:0*/
	      case 'gzip':
	      case 'compress':
	      case 'deflate':
	        // add the unzipper to the body stream processing pipeline
	        stream = stream.pipe(zlib.createUnzip());

	        // remove the content-encoding in order to not confuse downstream operations
	        delete res.headers['content-encoding'];
	        break;
	      }

	      // return the last request in case of redirects
	      var lastRequest = res.req || req;

	      var response = {
	        status: res.statusCode,
	        statusText: res.statusMessage,
	        headers: res.headers,
	        config: config,
	        request: lastRequest
	      };

	      if (config.responseType === 'stream') {
	        response.data = stream;
	        settle(resolve, reject, response);
	      } else {
	        var responseBuffer = [];
	        stream.on('data', function handleStreamData(chunk) {
	          responseBuffer.push(chunk);

	          // make sure the content length is not over the maxContentLength if specified
	          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
	            stream.destroy();
	            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
	              config, null, lastRequest));
	          }
	        });

	        stream.on('error', function handleStreamError(err) {
	          if (req.aborted) return;
	          reject(enhanceError(err, config, null, lastRequest));
	        });

	        stream.on('end', function handleStreamEnd() {
	          var responseData = Buffer.concat(responseBuffer);
	          if (config.responseType !== 'arraybuffer') {
	            responseData = responseData.toString('utf8');
	          }

	          response.data = responseData;
	          settle(resolve, reject, response);
	        });
	      }
	    });

	    // Handle errors
	    req.on('error', function handleRequestError(err) {
	      if (req.aborted) return;
	      reject(enhanceError(err, config, null, req));
	    });

	    // Handle request timeout
	    if (config.timeout && !timer) {
	      timer = setTimeout(function handleRequestTimeout() {
	        req.abort();
	        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
	      }, config.timeout);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (req.aborted) return;

	        req.abort();
	        reject(cancel);
	      });
	    }

	    // Send the request
	    if (utils.isStream(data)) {
	      data.pipe(req);
	    } else {
	      req.end(data);
	    }
	  });
	};

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = xhr;
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = http_1;
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	var defaults_1 = defaults;

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	var InterceptorManager_1 = InterceptorManager;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	var transformData = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

	var isCancel = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	var isAbsoluteURL = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	var combineURLs = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	var dispatchRequest = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults_1.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager_1(),
	    response: new InterceptorManager_1()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults_1, {method: 'get'}, this.defaults, config);
	  config.method = config.method.toLowerCase();

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	var Axios_1 = Axios;

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	var Cancel_1 = Cancel;

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel_1(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	var CancelToken_1 = CancelToken;

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios_1(defaultConfig);
	  var instance = bind(Axios_1.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios_1.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults_1);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios_1;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults_1, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = Cancel_1;
	axios.CancelToken = CancelToken_1;
	axios.isCancel = isCancel;

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = spread;

	var axios_1 = axios;

	// Allow use of default import syntax in TypeScript
	var default_1 = axios;
	axios_1.default = default_1;

	var axios$1 = axios_1;

	var sM_1 = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	/* eslint-disable */
	// BEGIN
	function sM(a) {
	    var e = [];
	    var f = 0;
	    for (var g = 0; g < a.length; g++) {
	        var l = a.charCodeAt(g);
	        128 > l
	            ? (e[f++] = l)
	            : (2048 > l
	                ? (e[f++] = (l >> 6) | 192)
	                : (55296 == (l & 64512) &&
	                    g + 1 < a.length &&
	                    56320 == (a.charCodeAt(g + 1) & 64512)
	                    ? ((l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023)),
	                        (e[f++] = (l >> 18) | 240),
	                        (e[f++] = ((l >> 12) & 63) | 128))
	                    : (e[f++] = (l >> 12) | 224),
	                    (e[f++] = ((l >> 6) & 63) | 128)),
	                (e[f++] = (l & 63) | 128));
	    }
	    var a_ = 0;
	    for (f = 0; f < e.length; f++) {
	        a_ += e[f];
	        a_ = xr(a_, "+-a^+6");
	    }
	    a_ = xr(a_, "+-3^+b+-f");
	    a_ ^= 0;
	    0 > a_ && (a_ = (a_ & 2147483647) + 2147483648);
	    a_ %= 1e6;
	    return a_.toString() + "." + a_.toString();
	}
	exports.default = sM;
	var xr = function (a, b) {
	    for (var c = 0; c < b.length - 2; c += 3) {
	        var d = b.charAt(c + 2);
	        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
	        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
	        a = "+" == b.charAt(c) ? a + d : a ^ d;
	    }
	    return a;
	};
	// END
	/* eslint-enable */
	});

	unwrapExports(sM_1);

	var languages = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var langs = {
	    auto: "Automatic",
	    af: "Afrikaans",
	    sq: "Albanian",
	    am: "Amharic",
	    ar: "Arabic",
	    hy: "Armenian",
	    az: "Azerbaijani",
	    eu: "Basque",
	    be: "Belarusian",
	    bn: "Bengali",
	    bs: "Bosnian",
	    bg: "Bulgarian",
	    ca: "Catalan",
	    ceb: "Cebuano",
	    ny: "Chichewa",
	    zh: "Chinese Simplified",
	    "zh-cn": "Chinese Simplified",
	    "zh-tw": "Chinese Traditional",
	    co: "Corsican",
	    hr: "Croatian",
	    cs: "Czech",
	    da: "Danish",
	    nl: "Dutch",
	    en: "English",
	    eo: "Esperanto",
	    et: "Estonian",
	    tl: "Filipino",
	    fi: "Finnish",
	    fr: "French",
	    fy: "Frisian",
	    gl: "Galician",
	    ka: "Georgian",
	    de: "German",
	    el: "Greek",
	    gu: "Gujarati",
	    ht: "Haitian Creole",
	    ha: "Hausa",
	    haw: "Hawaiian",
	    he: "Hebrew",
	    iw: "Hebrew",
	    hi: "Hindi",
	    hmn: "Hmong",
	    hu: "Hungarian",
	    is: "Icelandic",
	    ig: "Igbo",
	    id: "Indonesian",
	    ga: "Irish",
	    it: "Italian",
	    ja: "Japanese",
	    jw: "Javanese",
	    kn: "Kannada",
	    kk: "Kazakh",
	    km: "Khmer",
	    ko: "Korean",
	    ku: "Kurdish (Kurmanji)",
	    ky: "Kyrgyz",
	    lo: "Lao",
	    la: "Latin",
	    lv: "Latvian",
	    lt: "Lithuanian",
	    lb: "Luxembourgish",
	    mk: "Macedonian",
	    mg: "Malagasy",
	    ms: "Malay",
	    ml: "Malayalam",
	    mt: "Maltese",
	    mi: "Maori",
	    mr: "Marathi",
	    mn: "Mongolian",
	    my: "Myanmar (Burmese)",
	    ne: "Nepali",
	    no: "Norwegian",
	    ps: "Pashto",
	    fa: "Persian",
	    pl: "Polish",
	    pt: "Portuguese",
	    pa: "Punjabi",
	    ro: "Romanian",
	    ru: "Russian",
	    sm: "Samoan",
	    gd: "Scots Gaelic",
	    sr: "Serbian",
	    st: "Sesotho",
	    sn: "Shona",
	    sd: "Sindhi",
	    si: "Sinhala",
	    sk: "Slovak",
	    sl: "Slovenian",
	    so: "Somali",
	    es: "Spanish",
	    su: "Sundanese",
	    sw: "Swahili",
	    sv: "Swedish",
	    tg: "Tajik",
	    ta: "Tamil",
	    te: "Telugu",
	    th: "Thai",
	    tr: "Turkish",
	    uk: "Ukrainian",
	    ur: "Urdu",
	    uz: "Uzbek",
	    vi: "Vietnamese",
	    cy: "Welsh",
	    xh: "Xhosa",
	    yi: "Yiddish",
	    yo: "Yoruba",
	    zu: "Zulu"
	};
	exports.getCode = function (desiredLang) {
	    if (!desiredLang) {
	        return false;
	    }
	    desiredLang = desiredLang.toLowerCase();
	    if (langs[desiredLang]) {
	        return desiredLang;
	    }
	    var keys = Object.keys(langs).filter(function (key) {
	        if (typeof langs[key] !== "string") {
	            return false;
	        }
	        return langs[key].toLowerCase() === desiredLang;
	    });
	    return keys[0] || false;
	};
	exports.isSupported = function (desiredLang) {
	    return Boolean(exports.getCode(desiredLang));
	};
	exports.default = langs;
	});

	unwrapExports(languages);
	var languages_1 = languages.getCode;
	var languages_2 = languages.isSupported;

	var dist = createCommonjsModule(function (module, exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });

	var axios_1 = __importDefault(axios$1);
	var sM_1$1 = __importDefault(sM_1);

	function token(text) {
	    return new Promise(function (resolve) {
	        resolve({ name: "tk", value: sM_1$1.default(text) });
	    });
	}
	var CORSService = "";
	// setup your own cors-anywhere server
	exports.setCORS = function (CORSURL) {
	    CORSService = CORSURL;
	    return translate;
	};
	// function translate(text: string, to: string, from: string, tld: string) {
	function translate(text, opts_) {
	    if (opts_ === void 0) { opts_ = {}; }
	    var opts = {
	        from: opts_.from || "auto",
	        to: opts_.to || "en",
	        raw: opts_.raw || false,
	        tld: opts_.tld || "com"
	    };
	    var e = null;
	    [opts.from, opts.to].forEach(function (lang) {
	        if (lang && !languages.isSupported(lang)) {
	            e = new Error();
	            e.message = "The language '" + lang + "' is not supported";
	        }
	    });
	    if (e) {
	        return new Promise(function (resolve, reject) {
	            reject(e);
	        });
	    }
	    return token(text)
	        .then(function (token) {
	        var _a;
	        var url = "https://translate.google." + opts.tld + "/translate_a/single";
	        var data = (_a = {
	                client: "gtx",
	                sl: languages.getCode(opts.from),
	                tl: languages.getCode(opts.to),
	                hl: languages.getCode(opts.to),
	                dt: ["at", "bd", "ex", "ld", "md", "qca", "rw", "rm", "ss", "t"],
	                ie: "UTF-8",
	                oe: "UTF-8",
	                otf: 1,
	                ssel: 0,
	                tsel: 0,
	                kc: 7,
	                q: text
	            },
	            _a[token.name] = token.value,
	            _a);
	        var fullUrl = url + "?" + querystring.stringify(data);
	        /*
	          if (fullUrl.length > 2083) {
	              delete data.q;
	              return [
	                  url + '?' + stringify(data),
	                  {method: 'POST', body: {q: text}}
	              ];
	          }
	          */
	        return fullUrl;
	    })
	        .then(function (url) {
	        return axios_1.default
	            .get(CORSService + url)
	            .then(function (res_) {
	            var res = {
	                body: JSON.stringify(res_.data)
	            };
	            var result = {
	                text: "",
	                pronunciation: "",
	                from: {
	                    language: {
	                        didYouMean: false,
	                        iso: ""
	                    },
	                    text: {
	                        autoCorrected: false,
	                        value: "",
	                        didYouMean: false
	                    }
	                },
	                raw: opts.raw ? res.body : ""
	            };
	            var body = JSON.parse(res.body);
	            body[0].forEach(function (obj) {
	                if (obj[0]) {
	                    result.text += obj[0];
	                }
	                else if (obj[2]) {
	                    result.pronunciation += obj[2];
	                }
	            });
	            if (body[2] === body[8][0][0]) {
	                result.from.language.iso = body[2];
	            }
	            else {
	                result.from.language.didYouMean = true;
	                result.from.language.iso = body[8][0][0];
	            }
	            if (body[7] && body[7][0]) {
	                var str = body[7][0];
	                str = str.replace(/<b><i>/g, "[");
	                str = str.replace(/<\/i><\/b>/g, "]");
	                result.from.text.value = str;
	                if (body[7][5] === true) {
	                    result.from.text.autoCorrected = true;
	                }
	                else {
	                    result.from.text.didYouMean = true;
	                }
	            }
	            return result;
	        })
	            .catch(function (err) {
	            var e = new Error();
	            if (err.statusCode !== undefined && err.statusCode !== 200) {
	                e.message = "BAD_REQUEST";
	            }
	            else {
	                e.message = "BAD_NETWORK";
	            }
	            throw e;
	        });
	    });
	}
	exports.translate = translate;
	exports.default = translate;
	});

	unwrapExports(dist);
	var dist_1 = dist.setCORS;
	var dist_2 = dist.translate;

	const translate = dist_1("https://mysterious-wave-50866.herokuapp.com/");

	const caiyunTrans = async source => {
	  data = JSON.stringify(source);
	  translate(data, {
	    to: "jp"
	  }).then(res => {
	    return res.text;
	  }).catch(err => {
	    console.error(err);
	    return [];
	  });
	};

	const collectText = data => {
	  const textInfo = [];
	  const textList = [];
	  data.forEach((item, index) => {
	    if (item.text) {
	      textInfo.push({
	        key: 'text',
	        index
	      });
	      textList.push(item.text);
	    }

	    if (item.select) {
	      textInfo.push({
	        key: 'select',
	        index
	      });
	      textList.push(item.select);
	    }
	  });
	  return {
	    textInfo,
	    textList
	  };
	};

	const preFix = async list => {
	  const cyfMap = await getCaiyunPrefix();
	  return list.map(text => {
	    return replaceWords(text, cyfMap);
	  });
	};

	const nounFix = async list => {
	  const nounFixMap = await getNounFix();
	  return list.map(text => {
	    return replaceWords(text, nounFixMap);
	  });
	};

	const autoTransCache$1 = new Map();

	const autoTrans = async (data, commMap, name) => {
	  let fixedTransList;
	  const {
	    textInfo,
	    textList
	  } = collectText(data);

	  if (autoTransCache$1.has(name)) {
	    fixedTransList = autoTransCache$1.get(name);
	  } else {
	    const fixedTextList = await preFix(textList);
	    const transList = await caiyunTrans(fixedTextList);
	    fixedTransList = await nounFix(transList);
	    autoTransCache$1.set(name, fixedTransList);
	  }

	  if (DEV) {
	    let mergedList = [];
	    textList.forEach((text, index) => {
	      mergedList.push(text, fixedTransList[index]);
	    });
	    log(mergedList.join('\n'));
	  }

	  fixedTransList.forEach((trans, idx) => {
	    let _trans = trans;
	    const {
	      key,
	      index
	    } = textInfo[idx];
	    const text = trimWrap(replaceWrap(data[index][key]));

	    if (commMap.has(text)) {
	      _trans = commMap.get(text);
	    } else {
	      if (key === 'select') {
	        if (trans.length > 8 && !trans.includes('\n')) {
	          const len = Math.floor(trans.length / 2) + 1;
	          _trans = trans.slice(0, len) + '\n' + trans.slice(len, trans.length);
	        }
	      }

	      _trans = replaceQuote(_trans);
	    }

	    if (idx === 0) _trans = "".concat(_trans, "\uFF0A");
	    data[index][key] = tagText(_trans);
	  });
	  const nameMap = await getName();
	  data.forEach(item => {
	    transSpeaker(item, nameMap);
	  });
	};

	const getModule = async () => {
	  let scnModule;

	  try {
	    const {
	      moduleId
	    } = await getHash;
	    const moduleLoadScenario = primJsp([], [], [moduleId.SCENARIO]);
	    scnModule = moduleLoadScenario.default;

	    if (!moduleLoadScenario.default || !moduleLoadScenario.default['load'] || !moduleLoadScenario.default['_errorEvent'] || !moduleLoadScenario.default['_handleError']) {
	      throw new Error('模块不匹配');
	    }
	  } catch (e) {
	    log(e);
	  }

	  return scnModule;
	};

	const storyCache = {
	  name: '',
	  filename: '',
	  list: '',
	  preview: new Map()
	};
	let previewLoaded = false;

	const getPreview = () => {
	  if (previewLoaded) return;
	  previewLoaded = true;
	  const str = sessionStorage.getItem('sczh:preview');
	  if (!str) return;

	  try {
	    const arr = JSON.parse(str);
	    const map = new Map(arr);

	    for (let [key, value] of map) {
	      map.set(key, new Map(value));
	    }

	    storyCache.preview = map;
	  } catch (e) {
	    log(e);
	  }
	};

	const getCid = name => {
	  const res = name.match(/\/(\d+)$/);
	  if (res && res[1]) return res[1];
	  return '';
	};

	const saveData = (data, name) => {
	  const _name = name.replace('.json', '');

	  const _cid = getCid(_name);

	  const filename = storyTitle.get(_cid) || _name.replace(/\//g, '_');

	  const list = [];
	  data.forEach(item => {
	    let text = trim(replaceWrap(item.text));

	    if (text && text.trim()) {
	      list.push({
	        id: item.id || '0000000000000',
	        name: item.speaker || '',
	        text,
	        trans: ''
	      });
	    } else if (item.select) {
	      list.push({
	        id: 'select',
	        name: '',
	        text: trim(replaceWrap(item.select)),
	        trans: ''
	      });
	    }
	  });
	  list.push({
	    id: 'info',
	    name,
	    text: '',
	    trans: ''
	  });
	  list.push({
	    id: '译者',
	    name: '',
	    text: '',
	    trans: ''
	  });
	  storyCache.name = name;
	  storyCache.filename = "".concat(filename, ".csv");
	  storyCache.list = list;
	};

	const transStory = (data, storyMap, commMap, nameMap) => {
	  if (!Array.isArray(data)) return;
	  data.forEach(item => {
	    transSpeaker(item, nameMap);

	    if (item.text) {
	      if (item.id) {
	        const id = item.id + '';

	        if (storyMap.has(id)) {
	          item.text = storyMap.get(id);
	        }
	      } else {
	        const text = removeWrap(item.text);

	        if (storyMap.has(text)) {
	          item.text = storyMap.get(text);
	        } else if (commMap.has(item.text)) {
	          item.text = tagText(commMap.get(item.text));
	        }
	      }
	    }

	    if (item.select) {
	      const select = removeWrap(item.select);
	      const sKey = "".concat(select, "-select");

	      if (storyMap.has(sKey)) {
	        item.select = storyMap.get(sKey);
	      } else if (commMap.has(item.select)) {
	        item.select = tagText(commMap.get(item.select));
	      }
	    }
	  });
	};

	const transStory2 = (data, commMap, nameMap) => {
	  if (!Array.isArray(data)) return;
	  data.forEach(item => {
	    transSpeaker(item, nameMap);

	    if (item.text) {
	      const text = removeWrap(item.text);

	      if (commMap.has(item.text)) {
	        item.text = tagText(commMap.get(item.text));
	      }
	    }

	    if (item.select) {
	      const select = removeWrap(item.select);

	      if (commMap.has(item.select)) {
	        item.select = tagText(commMap.get(item.select));
	      }
	    }
	  });
	};

	const transScenario = async () => {
	  const scnModule = await getModule();
	  if (!scnModule) return;
	  const originLoad = scnModule.load;

	  scnModule.load = async function (...args) {
	    const res = await originLoad.apply(this, args);
	    const type = args[0];
	    if (!type) return res;
	    if (DEV && type.includes('/assets/json/')) requestLog('STORY', '#ad37c2', args, res);

	    if (type.includes('/produce_events/') || type.includes('/produce_communications/') || type.includes('/produce_communications_promises/') || type.includes('/produce_communication_promise_results/') || type.includes('/game_event_communications/') || type.includes('/special_communications/') || type.includes('/produce_communication_cheers/') || type.includes('/produce_communication_auditions/') || type.includes('/produce_communication_televisions/')) {
	      try {
	        const name = type.replace(/^\/assets\/json\//, '');
	        let storyMap;

	        if (config.story === 'edit') {
	          saveData(res, name);
	          showStoryTool(storyCache);
	        }

	        getPreview();

	        if (storyCache.preview.has(name)) {
	          storyMap = storyCache.preview.get(name);
	        } else {
	          storyMap = await getStory(name);
	        }

	        if (storyMap) {
	          const commMap = await getCommStory();
	          const nameMap = await getName();
	          transStory(res, storyMap, commMap, nameMap);
	        } else if (config.auto === 'on') {
	          const commMap = await getCommStory();
	          const nameMap = await getName();
	          transStory2(res, commMap, nameMap);
	          await autoTrans(res, commMap, name);
	        }
	      } catch (e) {
	        log(e);
	      }
	    }

	    return res;
	  };
	};

	const preload = src => {
	  const link = document.createElement('link');
	  link.setAttribute('rel', 'preload');
	  link.setAttribute('href', src);
	  link.setAttribute('as', 'font');
	  link.setAttribute('type', 'font/woff2');
	  link.setAttribute('crossorigin', 'anonymous');
	  document.head.appendChild(link);
	};

	const addFont = async () => {
	  const tag = document.createElement('style');
	  const {
	    hash
	  } = await getHash;
	  tag.innerHTML = "\n  @font-face {\n    font-family: \"sczh-heiti\";\n    src: url(\"".concat(config.origin, "/data/font/heiti.woff2?v=").concat(hash, "\");\n  }\n  @font-face {\n    font-family: \"sczh-yuanti\";\n    src: url(\"").concat(config.origin, "/data/font/yuanti.woff2?v=").concat(hash, "\");\n  }\n  @font-face {\n    font-family: \"sczh-yuanti2\";\n    src: url(\"").concat(config.origin, "/data/font/yuanti2.woff2?v=").concat(hash, "\");\n  }\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  ");

	  if (config.font1 === 'yuanti') {
	    preload("".concat(config.origin, "/data/font/yuanti.woff2?v=").concat(hash));
	  } else if (config.font1 === 'yuanti2') {
	    preload("".concat(config.origin, "/data/font/yuanti2.woff2?v=").concat(hash));
	  }

	  if (config.font2 === 'heiti') {
	    preload("".concat(config.origin, "/data/font/heiti.woff2?v=").concat(hash));
	  }

	  document.head.appendChild(tag);
	};

	const main$1 = async () => {
	  try {
	    resourceHook();
	    await Promise.all([addFont(), transPhrase(), watchText(), requestHook(), transScenario()]);
	  } catch (e) {
	    log(e);
	  }
	};

	setTimeout(() => {
	  window.addEventListener('load', main$1);
	});

}(http, https, url, assert, tty, util, os, zlib));
