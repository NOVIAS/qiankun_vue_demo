/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js");

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
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js");

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
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js");

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
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js ***!
  \*************************************************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js ***!
  \*****************************************************************************/
/***/ ((module) => {

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

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js ***!
  \*******************************************************************************/
/***/ ((module) => {

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

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js ***!
  \****************************************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js ***!
  \*****************************************************************************/
/***/ ((module) => {

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

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js ***!
  \*******************************************************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js ***!
  \******************************************************************************/
/***/ ((module) => {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js");

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
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js");

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
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js");

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
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js");

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
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
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

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

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
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");

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
    if (!isObject(proto)) {
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

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseEach.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseEach.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFlatten.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFlatten.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseForOwn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseForOwn.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js");

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
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

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
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
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
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
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
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMergeDeep.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js ***!
  \*****************************************************************************/
/***/ ((module) => {

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

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js ***!
  \*****************************************************************************/
/***/ ((module) => {

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

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castFunction.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castFunction.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
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


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js ***!
  \*******************************************************************************/
/***/ ((module) => {

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

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
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

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js ***!
  \*****************************************************************************/
/***/ ((module) => {

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

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js");

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
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseEach.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseEach.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createBaseFor.js ***!
  \*********************************************************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js");

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
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getRawTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js");

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
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js ***!
  \****************************************************************************/
/***/ ((module) => {

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

module.exports = getValue;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js ***!
  \******************************************************************************/
/***/ ((module) => {

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

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

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
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isFlattenable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isFlattenable.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js ***!
  \***************************************************************************/
/***/ ((module) => {

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

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIterateeCall.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js ***!
  \*****************************************************************************/
/***/ ((module) => {

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

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
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

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js ***!
  \*******************************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js ***!
  \**********************************************************************************/
/***/ ((module) => {

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

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js");

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
      index = assocIndexOf(data, key);

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

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js");

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
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js");

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
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js");

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
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js");

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
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js");

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
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js");

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
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js");

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
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js");

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
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js ***!
  \********************************************************************************/
/***/ ((module) => {

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

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js ***!
  \****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

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


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_objectToString.js ***!
  \**********************************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overArg.js ***!
  \***************************************************************************/
/***/ ((module) => {

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

module.exports = overArg;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_overRest.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_safeGet.js ***!
  \***************************************************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToString.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_shortOut.js ***!
  \****************************************************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js ***!
  \*******************************************************************************/
/***/ ((module) => {

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

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js ***!
  \****************************************************************************/
/***/ ((module) => {

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

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js ***!
  \****************************************************************************/
/***/ ((module) => {

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

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js");

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
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js ***!
  \****************************************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

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
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js ***!
  \********************************************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

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
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/concat.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/concat.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFlatten.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js");

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/constant.js ***!
  \***************************************************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/deburr.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js":
/*!*********************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js ***!
  \*********************************************************************/
/***/ ((module) => {

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

module.exports = eq;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/forEach.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/forEach.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js ***!
  \***************************************************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

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
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js ***!
  \**************************************************************************/
/***/ ((module) => {

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

module.exports = isArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js");

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
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLikeObject.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

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
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");

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
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js ***!
  \***************************************************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

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
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

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
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js ***!
  \***************************************************************************/
/***/ ((module) => {

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

module.exports = isObject;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js ***!
  \*******************************************************************************/
/***/ ((module) => {

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

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isPlainObject.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

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
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

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
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

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
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js");

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
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js");

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
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mergeWith.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mergeWith.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js ***!
  \***********************************************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/snakeCase.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/snakeCase.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js ***!
  \****************************************************************************/
/***/ ((module) => {

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

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js ***!
  \****************************************************************************/
/***/ ((module) => {

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

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toPlainObject.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/words.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/.pnpm/regenerator-runtime@0.13.7/node_modules/regenerator-runtime/runtime.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/regenerator-runtime@0.13.7/node_modules/regenerator-runtime/runtime.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.pnpm/regenerator-runtime@0.13.7/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/cjs.js!./index.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n    display: flex;\r\n    background: #42b983;\r\n}\r\n", "",{"version":3,"sources":["webpack://./index.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;AACvB","sourcesContent":[".header {\r\n    display: flex;\r\n    background: #42b983;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/index.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getExternalStyleSheets": () => (/* binding */ _getExternalStyleSheets),
/* harmony export */   "getExternalScripts": () => (/* binding */ _getExternalScripts),
/* harmony export */   "execScripts": () => (/* binding */ _execScripts),
/* harmony export */   "default": () => (/* binding */ importHTML),
/* harmony export */   "importEntry": () => (/* binding */ importEntry)
/* harmony export */ });
/* harmony import */ var _process_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-tpl */ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/process-tpl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/utils.js");
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-08-15 11:37
 */


var styleCache = {};
var scriptCache = {};
var embedHTMLCache = {};

if (!window.fetch) {
  throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');
}

var defaultFetch = window.fetch.bind(window);

function defaultGetTemplate(tpl) {
  return tpl;
}
/**
 * convert external css link to inline style for performance optimization
 * @param template
 * @param styles
 * @param opts
 * @return embedHTML
 */


function getEmbedHTML(template, styles) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _opts$fetch = opts.fetch,
      fetch = _opts$fetch === void 0 ? defaultFetch : _opts$fetch;
  var embedHTML = template;
  return _getExternalStyleSheets(styles, fetch).then(function (styleSheets) {
    embedHTML = styles.reduce(function (html, styleSrc, i) {
      html = html.replace((0,_process_tpl__WEBPACK_IMPORTED_MODULE_0__.genLinkReplaceSymbol)(styleSrc), "<style>/* ".concat(styleSrc, " */").concat(styleSheets[i], "</style>"));
      return html;
    }, embedHTML);
    return embedHTML;
  });
}

var isInlineCode = function isInlineCode(code) {
  return code.startsWith('<');
};

function getExecutableScript(scriptSrc, scriptText, proxy, strictGlobal) {
  var sourceUrl = isInlineCode(scriptSrc) ? '' : "//# sourceURL=".concat(scriptSrc, "\n"); // 通过这种方式获取全局 window，因为 script 也是在全局作用域下运行的，所以我们通过 window.proxy 绑定时也必须确保绑定到全局 window 上
  // 否则在嵌套场景下， window.proxy 设置的是内层应用的 window，而代码其实是在全局作用域运行的，会导致闭包里的 window.proxy 取的是最外层的微应用的 proxy

  var globalWindow = (0, eval)('window');
  globalWindow.proxy = proxy; // TODO 通过 strictGlobal 方式切换切换 with 闭包，待 with 方式坑趟平后再合并

  return strictGlobal ? ";(function(window, self, globalThis){with(window){;".concat(scriptText, "\n").concat(sourceUrl, "}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);") : ";(function(window, self, globalThis){;".concat(scriptText, "\n").concat(sourceUrl, "}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);");
} // for prefetch


function _getExternalStyleSheets(styles) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  return Promise.all(styles.map(function (styleLink) {
    if (isInlineCode(styleLink)) {
      // if it is inline style
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInlineCode)(styleLink);
    } else {
      // external styles
      return styleCache[styleLink] || (styleCache[styleLink] = fetch(styleLink).then(function (response) {
        return response.text();
      }));
    }
  }));
} // for prefetch




function _getExternalScripts(scripts) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  var errorCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var fetchScript = function fetchScript(scriptUrl) {
    return scriptCache[scriptUrl] || (scriptCache[scriptUrl] = fetch(scriptUrl).then(function (response) {
      // usually browser treats 4xx and 5xx response of script loading as an error and will fire a script error event
      // https://stackoverflow.com/questions/5625420/what-http-headers-responses-trigger-the-onerror-handler-on-a-script-tag/5625603
      if (response.status >= 400) {
        errorCallback();
        throw new Error("".concat(scriptUrl, " load failed with status ").concat(response.status));
      }

      return response.text();
    }));
  };

  return Promise.all(scripts.map(function (script) {
    if (typeof script === 'string') {
      if (isInlineCode(script)) {
        // if it is inline script
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInlineCode)(script);
      } else {
        // external script
        return fetchScript(script);
      }
    } else {
      // use idle time to load async script
      var src = script.src,
          async = script.async;

      if (async) {
        return {
          src: src,
          async: true,
          content: new Promise(function (resolve, reject) {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.requestIdleCallback)(function () {
              return fetchScript(src).then(resolve, reject);
            });
          })
        };
      }

      return fetchScript(src);
    }
  }));
}



function throwNonBlockingError(error, msg) {
  setTimeout(function () {
    console.error(msg);
    throw error;
  });
}

var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
/**
 * FIXME to consistent with browser behavior, we should only provide callback way to invoke success and error event
 * @param entry
 * @param scripts
 * @param proxy
 * @param opts
 * @returns {Promise<unknown>}
 */

function _execScripts(entry, scripts) {
  var proxy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _opts$fetch2 = opts.fetch,
      fetch = _opts$fetch2 === void 0 ? defaultFetch : _opts$fetch2,
      _opts$strictGlobal = opts.strictGlobal,
      strictGlobal = _opts$strictGlobal === void 0 ? false : _opts$strictGlobal,
      success = opts.success,
      _opts$error = opts.error,
      error = _opts$error === void 0 ? function () {} : _opts$error,
      _opts$beforeExec = opts.beforeExec,
      beforeExec = _opts$beforeExec === void 0 ? function () {} : _opts$beforeExec,
      _opts$afterExec = opts.afterExec,
      afterExec = _opts$afterExec === void 0 ? function () {} : _opts$afterExec;
  return _getExternalScripts(scripts, fetch, error).then(function (scriptsText) {
    var geval = function geval(scriptSrc, inlineScript) {
      var rawCode = beforeExec(inlineScript, scriptSrc) || inlineScript;
      var code = getExecutableScript(scriptSrc, rawCode, proxy, strictGlobal);
      (0, eval)(code);
      afterExec(inlineScript, scriptSrc);
    };

    function exec(scriptSrc, inlineScript, resolve) {
      var markName = "Evaluating script ".concat(scriptSrc);
      var measureName = "Evaluating Time Consuming: ".concat(scriptSrc);

      if ( true && supportsUserTiming) {
        performance.mark(markName);
      }

      if (scriptSrc === entry) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.noteGlobalProps)(strictGlobal ? proxy : window);

        try {
          // bind window.proxy to change `this` reference in script
          geval(scriptSrc, inlineScript);
          var exports = proxy[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobalProp)(strictGlobal ? proxy : window)] || {};
          resolve(exports);
        } catch (e) {
          // entry error must be thrown to make the promise settled
          console.error("[import-html-entry]: error occurs while executing entry script ".concat(scriptSrc));
          throw e;
        }
      } else {
        if (typeof inlineScript === 'string') {
          try {
            // bind window.proxy to change `this` reference in script
            geval(scriptSrc, inlineScript);
          } catch (e) {
            // consistent with browser behavior, any independent script evaluation error should not block the others
            throwNonBlockingError(e, "[import-html-entry]: error occurs while executing normal script ".concat(scriptSrc));
          }
        } else {
          // external script marked with async
          inlineScript.async && (inlineScript === null || inlineScript === void 0 ? void 0 : inlineScript.content.then(function (downloadedScriptText) {
            return geval(inlineScript.src, downloadedScriptText);
          })["catch"](function (e) {
            throwNonBlockingError(e, "[import-html-entry]: error occurs while executing async script ".concat(inlineScript.src));
          }));
        }
      }

      if ( true && supportsUserTiming) {
        performance.measure(measureName, markName);
        performance.clearMarks(markName);
        performance.clearMeasures(measureName);
      }
    }

    function schedule(i, resolvePromise) {
      if (i < scripts.length) {
        var scriptSrc = scripts[i];
        var inlineScript = scriptsText[i];
        exec(scriptSrc, inlineScript, resolvePromise); // resolve the promise while the last script executed and entry not provided

        if (!entry && i === scripts.length - 1) {
          resolvePromise();
        } else {
          schedule(i + 1, resolvePromise);
        }
      }
    }

    return new Promise(function (resolve) {
      return schedule(0, success || resolve);
    });
  });
}


function importHTML(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetch = defaultFetch;
  var autoDecodeResponse = false;
  var getPublicPath = _utils__WEBPACK_IMPORTED_MODULE_1__.defaultGetPublicPath;
  var getTemplate = defaultGetTemplate; // compatible with the legacy importHTML api

  if (typeof opts === 'function') {
    fetch = opts;
  } else {
    // fetch option is availble
    if (opts.fetch) {
      // fetch is a funciton
      if (typeof opts.fetch === 'function') {
        fetch = opts.fetch;
      } else {
        // configuration
        fetch = opts.fetch.fn || defaultFetch;
        autoDecodeResponse = !!opts.fetch.autoDecodeResponse;
      }
    }

    getPublicPath = opts.getPublicPath || opts.getDomain || _utils__WEBPACK_IMPORTED_MODULE_1__.defaultGetPublicPath;
    getTemplate = opts.getTemplate || defaultGetTemplate;
  }

  return embedHTMLCache[url] || (embedHTMLCache[url] = fetch(url).then(function (response) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.readResAsString)(response, autoDecodeResponse);
  }).then(function (html) {
    var assetPublicPath = getPublicPath(url);

    var _processTpl = (0,_process_tpl__WEBPACK_IMPORTED_MODULE_0__.default)(getTemplate(html), assetPublicPath),
        template = _processTpl.template,
        scripts = _processTpl.scripts,
        entry = _processTpl.entry,
        styles = _processTpl.styles;

    return getEmbedHTML(template, styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        assetPublicPath: assetPublicPath,
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts, fetch);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles, fetch);
        },
        execScripts: function execScripts(proxy, strictGlobal) {
          var execScriptsHooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          if (!scripts.length) {
            return Promise.resolve();
          }

          return _execScripts(entry, scripts, proxy, {
            fetch: fetch,
            strictGlobal: strictGlobal,
            beforeExec: execScriptsHooks.beforeExec,
            afterExec: execScriptsHooks.afterExec
          });
        }
      };
    });
  }));
}
function importEntry(entry) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$fetch3 = opts.fetch,
      fetch = _opts$fetch3 === void 0 ? defaultFetch : _opts$fetch3,
      _opts$getTemplate = opts.getTemplate,
      getTemplate = _opts$getTemplate === void 0 ? defaultGetTemplate : _opts$getTemplate;
  var getPublicPath = opts.getPublicPath || opts.getDomain || _utils__WEBPACK_IMPORTED_MODULE_1__.defaultGetPublicPath;

  if (!entry) {
    throw new SyntaxError('entry should not be empty!');
  } // html entry


  if (typeof entry === 'string') {
    return importHTML(entry, {
      fetch: fetch,
      getPublicPath: getPublicPath,
      getTemplate: getTemplate
    });
  } // config entry


  if (Array.isArray(entry.scripts) || Array.isArray(entry.styles)) {
    var _entry$scripts = entry.scripts,
        scripts = _entry$scripts === void 0 ? [] : _entry$scripts,
        _entry$styles = entry.styles,
        styles = _entry$styles === void 0 ? [] : _entry$styles,
        _entry$html = entry.html,
        html = _entry$html === void 0 ? '' : _entry$html;

    var setStylePlaceholder2HTML = function setStylePlaceholder2HTML(tpl) {
      return styles.reduceRight(function (html, styleSrc) {
        return "".concat((0,_process_tpl__WEBPACK_IMPORTED_MODULE_0__.genLinkReplaceSymbol)(styleSrc)).concat(html);
      }, tpl);
    };

    var setScriptPlaceholder2HTML = function setScriptPlaceholder2HTML(tpl) {
      return scripts.reduce(function (html, scriptSrc) {
        return "".concat(html).concat((0,_process_tpl__WEBPACK_IMPORTED_MODULE_0__.genScriptReplaceSymbol)(scriptSrc));
      }, tpl);
    };

    return getEmbedHTML(getTemplate(setScriptPlaceholder2HTML(setStylePlaceholder2HTML(html))), styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        assetPublicPath: getPublicPath(entry),
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts, fetch);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles, fetch);
        },
        execScripts: function execScripts(proxy, strictGlobal) {
          var execScriptsHooks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          if (!scripts.length) {
            return Promise.resolve();
          }

          return _execScripts(scripts[scripts.length - 1], scripts, proxy, {
            fetch: fetch,
            strictGlobal: strictGlobal,
            beforeExec: execScriptsHooks.beforeExec,
            afterExec: execScriptsHooks.afterExec
          });
        }
      };
    });
  } else {
    throw new SyntaxError('entry scripts or styles should be array!');
  }
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/process-tpl.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/process-tpl.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genLinkReplaceSymbol": () => (/* binding */ genLinkReplaceSymbol),
/* harmony export */   "genScriptReplaceSymbol": () => (/* binding */ genScriptReplaceSymbol),
/* harmony export */   "inlineScriptReplaceSymbol": () => (/* binding */ inlineScriptReplaceSymbol),
/* harmony export */   "genIgnoreAssetReplaceSymbol": () => (/* binding */ genIgnoreAssetReplaceSymbol),
/* harmony export */   "genModuleScriptReplaceSymbol": () => (/* binding */ genModuleScriptReplaceSymbol),
/* harmony export */   "default": () => (/* binding */ processTpl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/utils.js");


/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-09-03 15:04
 */

var ALL_SCRIPT_REGEX = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi;
var SCRIPT_TAG_REGEX = /<(script)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+((?!type=('|')text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i;
var SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
var SCRIPT_TYPE_REGEX = /.*\stype=('|")?([^>'"\s]+)/;
var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
var SCRIPT_ASYNC_REGEX = /.*\sasync\s*.*/;
var SCRIPT_NO_MODULE_REGEX = /.*\snomodule\s*.*/;
var SCRIPT_MODULE_REGEX = /.*\stype=('|")?module('|")?\s*.*/;
var LINK_TAG_REGEX = /<(link)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*?>/ig;
var LINK_PRELOAD_OR_PREFETCH_REGEX = /\srel=('|")?(preload|prefetch)\1/;
var LINK_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var LINK_AS_FONT = /.*\sas=('|")?font\1.*/;
var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
var STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
var STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
var LINK_IGNORE_REGEX = /<link([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)ignore([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*|=[\s\S]*)>/i;
var STYLE_IGNORE_REGEX = /<style([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)ignore([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*|=[\s\S]*)>/i;
var SCRIPT_IGNORE_REGEX = /<script([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)ignore([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+[\s\S]*|=[\s\S]*)>/i;

function hasProtocol(url) {
  return url.startsWith('//') || url.startsWith('http://') || url.startsWith('https://');
}

function getEntirePath(path, baseURI) {
  return new URL(path, baseURI).toString();
}

function isValidJavaScriptType(type) {
  var handleTypes = ['text/javascript', 'module', 'application/javascript', 'text/ecmascript', 'application/ecmascript'];
  return !type || handleTypes.indexOf(type) !== -1;
}

var genLinkReplaceSymbol = function genLinkReplaceSymbol(linkHref) {
  var preloadOrPrefetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(preloadOrPrefetch ? 'prefetch/preload' : '', " link ").concat(linkHref, " replaced by import-html-entry -->");
};
var genScriptReplaceSymbol = function genScriptReplaceSymbol(scriptSrc) {
  var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(async ? 'async' : '', " script ").concat(scriptSrc, " replaced by import-html-entry -->");
};
var inlineScriptReplaceSymbol = "<!-- inline scripts replaced by import-html-entry -->";
var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol(url) {
  return "<!-- ignore asset ".concat(url || 'file', " replaced by import-html-entry -->");
};
var genModuleScriptReplaceSymbol = function genModuleScriptReplaceSymbol(scriptSrc, moduleSupport) {
  return "<!-- ".concat(moduleSupport ? 'nomodule' : 'module', " script ").concat(scriptSrc, " ignored by import-html-entry -->");
};
/**
 * parse the script link from the template
 * 1. collect stylesheets
 * 2. use global eval to evaluate the inline scripts
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Difference_between_Function_constructor_and_function_declaration
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
 * @param tpl
 * @param baseURI
 * @stripStyles whether to strip the css links
 * @returns {{template: void | string | *, scripts: *[], entry: *}}
 */

function processTpl(tpl, baseURI) {
  var scripts = [];
  var styles = [];
  var entry = null;
  var moduleSupport = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isModuleScriptSupported)();
  var template = tpl
  /*
  remove html comment first
  */
  .replace(HTML_COMMENT_REGEX, '').replace(LINK_TAG_REGEX, function (match) {
    /*
    change the css link
    */
    var styleType = !!match.match(STYLE_TYPE_REGEX);

    if (styleType) {
      var styleHref = match.match(STYLE_HREF_REGEX);
      var styleIgnore = match.match(LINK_IGNORE_REGEX);

      if (styleHref) {
        var href = styleHref && styleHref[2];
        var newHref = href;

        if (href && !hasProtocol(href)) {
          newHref = getEntirePath(href, baseURI);
        }

        if (styleIgnore) {
          return genIgnoreAssetReplaceSymbol(newHref);
        }

        styles.push(newHref);
        return genLinkReplaceSymbol(newHref);
      }
    }

    var preloadOrPrefetchType = match.match(LINK_PRELOAD_OR_PREFETCH_REGEX) && match.match(LINK_HREF_REGEX) && !match.match(LINK_AS_FONT);

    if (preloadOrPrefetchType) {
      var _match$match = match.match(LINK_HREF_REGEX),
          _match$match2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_match$match, 3),
          linkHref = _match$match2[2];

      return genLinkReplaceSymbol(linkHref, true);
    }

    return match;
  }).replace(STYLE_TAG_REGEX, function (match) {
    if (STYLE_IGNORE_REGEX.test(match)) {
      return genIgnoreAssetReplaceSymbol('style file');
    }

    return match;
  }).replace(ALL_SCRIPT_REGEX, function (match, scriptTag) {
    var scriptIgnore = scriptTag.match(SCRIPT_IGNORE_REGEX);
    var moduleScriptIgnore = moduleSupport && !!scriptTag.match(SCRIPT_NO_MODULE_REGEX) || !moduleSupport && !!scriptTag.match(SCRIPT_MODULE_REGEX); // in order to keep the exec order of all javascripts

    var matchedScriptTypeMatch = scriptTag.match(SCRIPT_TYPE_REGEX);
    var matchedScriptType = matchedScriptTypeMatch && matchedScriptTypeMatch[2];

    if (!isValidJavaScriptType(matchedScriptType)) {
      return match;
    } // if it is a external script


    if (SCRIPT_TAG_REGEX.test(match) && scriptTag.match(SCRIPT_SRC_REGEX)) {
      /*
      collect scripts and replace the ref
      */
      var matchedScriptEntry = scriptTag.match(SCRIPT_ENTRY_REGEX);
      var matchedScriptSrcMatch = scriptTag.match(SCRIPT_SRC_REGEX);
      var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];

      if (entry && matchedScriptEntry) {
        throw new SyntaxError('You should not set multiply entry script!');
      } else {
        // append the domain while the script not have an protocol prefix
        if (matchedScriptSrc && !hasProtocol(matchedScriptSrc)) {
          matchedScriptSrc = getEntirePath(matchedScriptSrc, baseURI);
        }

        entry = entry || matchedScriptEntry && matchedScriptSrc;
      }

      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol(matchedScriptSrc || 'js file');
      }

      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol(matchedScriptSrc || 'js file', moduleSupport);
      }

      if (matchedScriptSrc) {
        var asyncScript = !!scriptTag.match(SCRIPT_ASYNC_REGEX);
        scripts.push(asyncScript ? {
          async: true,
          src: matchedScriptSrc
        } : matchedScriptSrc);
        return genScriptReplaceSymbol(matchedScriptSrc, asyncScript);
      }

      return match;
    } else {
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol('js file');
      }

      if (moduleScriptIgnore) {
        return genModuleScriptReplaceSymbol('js file', moduleSupport);
      } // if it is an inline script


      var code = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getInlineCode)(match); // remove script blocks when all of these lines are comments.

      var isPureCommentBlock = code.split(/[\r\n]+/).every(function (line) {
        return !line.trim() || line.trim().startsWith('//');
      });

      if (!isPureCommentBlock) {
        scripts.push(match);
      }

      return inlineScriptReplaceSymbol;
    }
  });
  scripts = scripts.filter(function (script) {
    // filter empty script
    return !!script;
  });
  return {
    template: template,
    scripts: scripts,
    styles: styles,
    // set the last script as entry if have not set
    entry: entry || scripts[scripts.length - 1]
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/utils.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/utils.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobalProp": () => (/* binding */ getGlobalProp),
/* harmony export */   "noteGlobalProps": () => (/* binding */ noteGlobalProps),
/* harmony export */   "getInlineCode": () => (/* binding */ getInlineCode),
/* harmony export */   "defaultGetPublicPath": () => (/* binding */ defaultGetPublicPath),
/* harmony export */   "isModuleScriptSupported": () => (/* binding */ isModuleScriptSupported),
/* harmony export */   "requestIdleCallback": () => (/* binding */ requestIdleCallback),
/* harmony export */   "readResAsString": () => (/* binding */ readResAsString)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js");



/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2019-02-25
 * fork from https://github.com/systemjs/systemjs/blob/master/src/extras/global.js
 */
var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

function shouldSkipProperty(global, p) {
  if (!global.hasOwnProperty(p) || !isNaN(p) && p < global.length) return true;

  if (isIE11) {
    // https://github.com/kuitos/import-html-entry/pull/32，最小化 try 范围
    try {
      return global[p] && typeof window !== 'undefined' && global[p].parent === window;
    } catch (err) {
      return true;
    }
  } else {
    return false;
  }
} // safari unpredictably lists some new globals first or second in object order


var firstGlobalProp, secondGlobalProp, lastGlobalProp;
function getGlobalProp(global) {
  var cnt = 0;
  var lastProp;
  var hasIframe = false;

  for (var p in global) {
    if (shouldSkipProperty(global, p)) continue; // 遍历 iframe，检查 window 上的属性值是否是 iframe，是则跳过后面的 first 和 second 判断

    for (var i = 0; i < window.frames.length && !hasIframe; i++) {
      var frame = window.frames[i];

      if (frame === global[p]) {
        hasIframe = true;
        break;
      }
    }

    if (!hasIframe && (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)) return p;
    cnt++;
    lastProp = p;
  }

  if (lastProp !== lastGlobalProp) return lastProp;
}
function noteGlobalProps(global) {
  // alternatively Object.keys(global).pop()
  // but this may be faster (pending benchmarks)
  firstGlobalProp = secondGlobalProp = undefined;

  for (var p in global) {
    if (shouldSkipProperty(global, p)) continue;
    if (!firstGlobalProp) firstGlobalProp = p;else if (!secondGlobalProp) secondGlobalProp = p;
    lastGlobalProp = p;
  }

  return lastGlobalProp;
}
function getInlineCode(match) {
  var start = match.indexOf('>') + 1;
  var end = match.lastIndexOf('<');
  return match.substring(start, end);
}
function defaultGetPublicPath(entry) {
  if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__.default)(entry) === 'object') {
    return '/';
  }

  try {
    // URL 构造函数不支持使用 // 前缀的 url
    var _URL = new URL(entry.startsWith('//') ? "".concat(location.protocol).concat(entry) : entry, location.href),
        origin = _URL.origin,
        pathname = _URL.pathname;

    var paths = pathname.split('/'); // 移除最后一个元素

    paths.pop();
    return "".concat(origin).concat(paths.join('/'), "/");
  } catch (e) {
    console.warn(e);
    return '';
  }
} // Detect whether browser supports `<script type=module>` or not

function isModuleScriptSupported() {
  var s = document.createElement('script');
  return 'noModule' in s;
} // RIC and shim for browsers setTimeout() without it

var requestIdleCallback = window.requestIdleCallback || function requestIdleCallback(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
function readResAsString(response, autoDetectCharset) {
  // 未启用自动检测
  if (!autoDetectCharset) {
    return response.text();
  } // 如果没headers，发生在test环境下的mock数据，为兼容原有测试用例


  if (!response.headers) {
    return response.text();
  } // 如果没返回content-type，走默认逻辑


  var contentType = response.headers.get('Content-Type');

  if (!contentType) {
    return response.text();
  } // 解析content-type内的charset
  // Content-Type: text/html; charset=utf-8
  // Content-Type: multipart/form-data; boundary=something
  // GET请求下不会出现第二种content-type


  var charset = 'utf-8';
  var parts = contentType.split(';');

  if (parts.length === 2) {
    var _parts$1$split = parts[1].split('='),
        _parts$1$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_parts$1$split, 2),
        value = _parts$1$split2[1];

    var encoding = value && value.trim();

    if (encoding) {
      charset = encoding;
    }
  } // 如果还是utf-8，那么走默认，兼容原有逻辑，这段代码删除也应该工作


  if (charset.toUpperCase() === 'UTF-8') {
    return response.text();
  } // 走流读取，编码可能是gbk，gb2312等，比如sofa 3默认是gbk编码


  return response.blob().then(function (file) {
    return new Promise(function (resolve, reject) {
      var reader = new window.FileReader();

      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = reject;
      reader.readAsText(file, charset);
    });
  });
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/engineFlag.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/engineFlag.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAddOn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");


/**
 * @author Kuitos
 * @since 2020-05-15
 */

function getAddOn(global) {
  return {
    beforeLoad: function beforeLoad() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line no-param-reassign
                global.__POWERED_BY_QIANKUN__ = true;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    },
    beforeMount: function beforeMount() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // eslint-disable-next-line no-param-reassign
                global.__POWERED_BY_QIANKUN__ = true;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    },
    beforeUnmount: function beforeUnmount() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // eslint-disable-next-line no-param-reassign
                delete global.__POWERED_BY_QIANKUN__;

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAddOns)
/* harmony export */ });
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/concat */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/mergeWith */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mergeWith.js");
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _runtimePublicPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runtimePublicPath */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/runtimePublicPath.js");
/* harmony import */ var _engineFlag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engineFlag */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/engineFlag.js");




function getAddOns(global, publicPath) {
  return lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1___default()({}, (0,_engineFlag__WEBPACK_IMPORTED_MODULE_2__.default)(global), (0,_runtimePublicPath__WEBPACK_IMPORTED_MODULE_3__.default)(global, publicPath), function (v1, v2) {
    return lodash_concat__WEBPACK_IMPORTED_MODULE_0___default()(v1 !== null && v1 !== void 0 ? v1 : [], v2 !== null && v2 !== void 0 ? v2 : []);
  });
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/runtimePublicPath.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/runtimePublicPath.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAddOn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");


var rawPublicPath = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
function getAddOn(global) {
  var publicPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var hasMountedOnce = false;
  return {
    beforeLoad: function beforeLoad() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // eslint-disable-next-line no-param-reassign
                global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = publicPath;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    },
    beforeMount: function beforeMount() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (hasMountedOnce) {
                  // eslint-disable-next-line no-param-reassign
                  global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = publicPath;
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    },
    beforeUnmount: function beforeUnmount() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (rawPublicPath === undefined) {
                  // eslint-disable-next-line no-param-reassign
                  delete global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
                } else {
                  // eslint-disable-next-line no-param-reassign
                  global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = rawPublicPath;
                }

                hasMountedOnce = true;

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/apis.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/apis.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frameworkConfiguration": () => (/* binding */ frameworkConfiguration),
/* harmony export */   "registerMicroApps": () => (/* binding */ registerMicroApps),
/* harmony export */   "loadMicroApp": () => (/* binding */ loadMicroApp),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! single-spa */ "./node_modules/.pnpm/registry.nlark.com+single-spa@5.9.2/node_modules/single-spa/lib/esm/single-spa.min.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/loader.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prefetch */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/prefetch.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/utils.js");









var microApps = []; // eslint-disable-next-line import/no-mutable-exports

var frameworkConfiguration = {};
var started = false;
var defaultUrlRerouteOnly = true;
var frameworkStartedDefer = new _utils__WEBPACK_IMPORTED_MODULE_5__.Deferred();
function registerMicroApps(apps, lifeCycles) {
  var _this = this;

  // Each app only needs to be registered once
  var unregisteredApps = apps.filter(function (app) {
    return !microApps.some(function (registeredApp) {
      return registeredApp.name === app.name;
    });
  });
  microApps = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(microApps), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(unregisteredApps));
  unregisteredApps.forEach(function (app) {
    var name = app.name,
        activeRule = app.activeRule,
        _app$loader = app.loader,
        loader = _app$loader === void 0 ? (lodash_noop__WEBPACK_IMPORTED_MODULE_2___default()) : _app$loader,
        props = app.props,
        appConfig = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(app, ["name", "activeRule", "loader", "props"]);

    (0,single_spa__WEBPACK_IMPORTED_MODULE_4__.registerApplication)({
      name: name,
      app: function app() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
          var _this2 = this;

          var _a, mount, otherMicroAppConfigs;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  loader(true);
                  _context3.next = 3;
                  return frameworkStartedDefer.promise;

                case 3:
                  _context3.next = 5;
                  return (0,_loader__WEBPACK_IMPORTED_MODULE_7__.loadApp)(Object.assign({
                    name: name,
                    props: props
                  }, appConfig), frameworkConfiguration, lifeCycles);

                case 5:
                  _context3.t0 = _context3.sent;
                  _a = (0, _context3.t0)();
                  mount = _a.mount;
                  otherMicroAppConfigs = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(_a, ["mount"]);
                  return _context3.abrupt("return", Object.assign({
                    mount: [function () {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                return _context.abrupt("return", loader(true));

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                    }].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.toArray)(mount)), [function () {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                return _context2.abrupt("return", loader(false));

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));
                    }])
                  }, otherMicroAppConfigs));

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
      },
      activeWhen: activeRule,
      customProps: props
    });
  });
}
var appConfigPromiseGetterMap = new Map();
function loadMicroApp(app, configuration, lifeCycles) {
  var _this3 = this;

  var _a;

  var props = app.props,
      name = app.name;

  var getContainerXpath = function getContainerXpath(container) {
    var containerElement = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getContainer)(container);

    if (containerElement) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getXPathForElement)(containerElement, document);
    }

    return undefined;
  };

  var wrapParcelConfigForRemount = function wrapParcelConfigForRemount(config) {
    return Object.assign(Object.assign({}, config), {
      // empty bootstrap hook which should not run twice while it calling from cached micro app
      bootstrap: function bootstrap() {
        return Promise.resolve();
      }
    });
  };
  /**
   * using name + container xpath as the micro app instance id,
   * it means if you rendering a micro app to a dom which have been rendered before,
   * the micro app would not load and evaluate its lifecycles again
   */


  var memorizedLoadingFn = function memorizedLoadingFn() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
      var userConfiguration, $$cacheLifecycleByAppName, container, parcelConfigGetterPromise, xpath, _parcelConfigGetterPromise, parcelConfigObjectGetterPromise, _xpath;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userConfiguration = configuration !== null && configuration !== void 0 ? configuration : Object.assign(Object.assign({}, frameworkConfiguration), {
                singular: false
              });
              $$cacheLifecycleByAppName = userConfiguration.$$cacheLifecycleByAppName;
              container = 'container' in app ? app.container : undefined;

              if (!container) {
                _context4.next = 23;
                break;
              }

              if (!$$cacheLifecycleByAppName) {
                _context4.next = 13;
                break;
              }

              parcelConfigGetterPromise = appConfigPromiseGetterMap.get(name);

              if (!parcelConfigGetterPromise) {
                _context4.next = 13;
                break;
              }

              _context4.t0 = wrapParcelConfigForRemount;
              _context4.next = 10;
              return parcelConfigGetterPromise;

            case 10:
              _context4.t1 = _context4.sent;
              _context4.t2 = (0, _context4.t1)(container);
              return _context4.abrupt("return", (0, _context4.t0)(_context4.t2));

            case 13:
              xpath = getContainerXpath(container);

              if (!xpath) {
                _context4.next = 23;
                break;
              }

              _parcelConfigGetterPromise = appConfigPromiseGetterMap.get("".concat(name, "-").concat(xpath));

              if (!_parcelConfigGetterPromise) {
                _context4.next = 23;
                break;
              }

              _context4.t3 = wrapParcelConfigForRemount;
              _context4.next = 20;
              return _parcelConfigGetterPromise;

            case 20:
              _context4.t4 = _context4.sent;
              _context4.t5 = (0, _context4.t4)(container);
              return _context4.abrupt("return", (0, _context4.t3)(_context4.t5));

            case 23:
              parcelConfigObjectGetterPromise = (0,_loader__WEBPACK_IMPORTED_MODULE_7__.loadApp)(app, userConfiguration, lifeCycles);

              if (container) {
                if ($$cacheLifecycleByAppName) {
                  appConfigPromiseGetterMap.set(name, parcelConfigObjectGetterPromise);
                } else {
                  _xpath = getContainerXpath(container);
                  if (_xpath) appConfigPromiseGetterMap.set("".concat(name, "-").concat(_xpath), parcelConfigObjectGetterPromise);
                }
              }

              _context4.next = 27;
              return parcelConfigObjectGetterPromise;

            case 27:
              _context4.t6 = _context4.sent;
              return _context4.abrupt("return", (0, _context4.t6)(container));

            case 29:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
  };

  if (!started) {
    // We need to invoke start method of single-spa as the popstate event should be dispatched while the main app calling pushState/replaceState automatically,
    // but in single-spa it will check the start status before it dispatch popstate
    // see https://github.com/single-spa/single-spa/blob/f28b5963be1484583a072c8145ac0b5a28d91235/src/navigation/navigation-events.js#L101
    // ref https://github.com/umijs/qiankun/pull/1071
    (0,single_spa__WEBPACK_IMPORTED_MODULE_4__.start)({
      urlRerouteOnly: (_a = frameworkConfiguration.urlRerouteOnly) !== null && _a !== void 0 ? _a : defaultUrlRerouteOnly
    });
  }

  return (0,single_spa__WEBPACK_IMPORTED_MODULE_4__.mountRootParcel)(memorizedLoadingFn, Object.assign({
    domElement: document.createElement('div')
  }, props));
}
function start() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  frameworkConfiguration = Object.assign({
    prefetch: true,
    singular: true,
    sandbox: true
  }, opts);

  var _frameworkConfigurati = frameworkConfiguration,
      prefetch = _frameworkConfigurati.prefetch,
      sandbox = _frameworkConfigurati.sandbox,
      singular = _frameworkConfigurati.singular,
      _frameworkConfigurati2 = _frameworkConfigurati.urlRerouteOnly,
      urlRerouteOnly = _frameworkConfigurati2 === void 0 ? defaultUrlRerouteOnly : _frameworkConfigurati2,
      importEntryOpts = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__rest)(frameworkConfiguration, ["prefetch", "sandbox", "singular", "urlRerouteOnly"]);

  if (prefetch) {
    (0,_prefetch__WEBPACK_IMPORTED_MODULE_8__.doPrefetchStrategy)(microApps, prefetch, importEntryOpts);
  }

  if (sandbox) {
    if (!window.Proxy) {
      console.warn('[qiankun] Miss window.Proxy, proxySandbox will degenerate into snapshotSandbox');
      frameworkConfiguration.sandbox = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(sandbox) === 'object' ? Object.assign(Object.assign({}, sandbox), {
        loose: true
      }) : {
        loose: true
      };

      if (!singular) {
        console.warn('[qiankun] Setting singular as false may cause unexpected behavior while your browser not support window.Proxy');
      }
    }
  }

  (0,single_spa__WEBPACK_IMPORTED_MODULE_4__.start)({
    urlRerouteOnly: urlRerouteOnly
  });
  started = true;
  frameworkStartedDefer.resolve();
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/globalState.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/globalState.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initGlobalState": () => (/* binding */ initGlobalState),
/* harmony export */   "getMicroAppStateActions": () => (/* binding */ getMicroAppStateActions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);


var globalState = {};
var deps = {}; // 触发全局监听

function emitGlobal(state, prevState) {
  Object.keys(deps).forEach(function (id) {
    if (deps[id] instanceof Function) {
      deps[id](lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(prevState));
    }
  });
}

function initGlobalState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (state === globalState) {
    console.warn('[qiankun] state has not changed！');
  } else {
    var prevGlobalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(globalState);

    globalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(state);
    emitGlobal(globalState, prevGlobalState);
  }

  return getMicroAppStateActions("global-".concat(+new Date()), true);
}
function getMicroAppStateActions(id, isMaster) {
  return {
    /**
     * onGlobalStateChange 全局依赖监听
     *
     * 收集 setState 时所需要触发的依赖
     *
     * 限制条件：每个子应用只有一个激活状态的全局监听，新监听覆盖旧监听，若只是监听部分属性，请使用 onGlobalStateChange
     *
     * 这么设计是为了减少全局监听滥用导致的内存爆炸
     *
     * 依赖数据结构为：
     * {
     *   {id}: callback
     * }
     *
     * @param callback
     * @param fireImmediately
     */
    onGlobalStateChange: function onGlobalStateChange(callback, fireImmediately) {
      if (!(callback instanceof Function)) {
        console.error('[qiankun] callback must be function!');
        return;
      }

      if (deps[id]) {
        console.warn("[qiankun] '".concat(id, "' global listener already exists before this, new listener will overwrite it."));
      }

      deps[id] = callback;

      var cloneState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(globalState);

      if (fireImmediately) {
        callback(cloneState, cloneState);
      }
    },

    /**
     * setGlobalState 更新 store 数据
     *
     * 1. 对输入 state 的第一层属性做校验，只有初始化时声明过的第一层（bucket）属性才会被更改
     * 2. 修改 store 并触发全局监听
     *
     * @param state
     */
    setGlobalState: function setGlobalState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (state === globalState) {
        console.warn('[qiankun] state has not changed！');
        return false;
      }

      var changeKeys = [];

      var prevGlobalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(globalState);

      globalState = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(Object.keys(state).reduce(function (_globalState, changeKey) {
        if (isMaster || _globalState.hasOwnProperty(changeKey)) {
          changeKeys.push(changeKey);
          return Object.assign(_globalState, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, changeKey, state[changeKey]));
        }

        console.warn("[qiankun] '".concat(changeKey, "' not declared when init state\uFF01"));
        return _globalState;
      }, globalState));

      if (changeKeys.length === 0) {
        console.warn('[qiankun] state has not changed！');
        return false;
      }

      emitGlobal(globalState, prevGlobalState);
      return true;
    },
    // 注销该应用下的依赖
    offGlobalStateChange: function offGlobalStateChange() {
      delete deps[id];
      return true;
    }
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/interfaces.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/interfaces.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SandBoxType": () => (/* binding */ SandBoxType)
/* harmony export */ });
var SandBoxType;

(function (SandBoxType) {
  SandBoxType["Proxy"] = "Proxy";
  SandBoxType["Snapshot"] = "Snapshot"; // for legacy sandbox
  // https://github.com/umijs/qiankun/blob/0d1d3f0c5ed1642f01854f96c3fabf0a2148bd26/src/sandbox/legacy/sandbox.ts#L22...L25

  SandBoxType["LegacyProxy"] = "LegacyProxy";
})(SandBoxType || (SandBoxType = {}));

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/loader.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/loader.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadApp": () => (/* binding */ loadApp)
/* harmony export */ });
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/concat */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/concat.js");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/mergeWith */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mergeWith.js");
/* harmony import */ var lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var import_html_entry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! import-html-entry */ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/index.js");
/* harmony import */ var _addons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addons */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/addons/index.js");
/* harmony import */ var _globalState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globalState */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/globalState.js");
/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sandbox */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/css.js");
/* harmony import */ var _sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sandbox */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/utils.js");






/**
 * @author Kuitos
 * @since 2020-04-01
 */







function assertElementExist(element, msg) {
  if (!element) {
    if (msg) {
      throw new Error(msg);
    }

    throw new Error('[qiankun] element not existed!');
  }
}

function execHooksChain(hooks, app) {
  var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  if (hooks.length) {
    return hooks.reduce(function (chain, hook) {
      return chain.then(function () {
        return hook(app, global);
      });
    }, Promise.resolve());
  }

  return Promise.resolve();
}

function validateSingularMode(validate, app) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", typeof validate === 'function' ? validate(app) : !!validate);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
} // @ts-ignore


var supportShadowDOM = document.head.attachShadow || document.head.createShadowRoot;

function createElement(appContent, strictStyleIsolation, scopedCSS, appName) {
  var containerElement = document.createElement('div');
  containerElement.innerHTML = appContent; // appContent always wrapped with a singular div

  var appElement = containerElement.firstChild;

  if (strictStyleIsolation) {
    if (!supportShadowDOM) {
      console.warn('[qiankun]: As current browser not support shadow dom, your strictStyleIsolation configuration will be ignored!');
    } else {
      var innerHTML = appElement.innerHTML;
      appElement.innerHTML = '';
      var shadow;

      if (appElement.attachShadow) {
        shadow = appElement.attachShadow({
          mode: 'open'
        });
      } else {
        // createShadowRoot was proposed in initial spec, which has then been deprecated
        shadow = appElement.createShadowRoot();
      }

      shadow.innerHTML = innerHTML;
    }
  }

  if (scopedCSS) {
    var attr = appElement.getAttribute(_sandbox__WEBPACK_IMPORTED_MODULE_6__.QiankunCSSRewriteAttr);

    if (!attr) {
      appElement.setAttribute(_sandbox__WEBPACK_IMPORTED_MODULE_6__.QiankunCSSRewriteAttr, appName);
    }

    var styleNodes = appElement.querySelectorAll('style') || [];

    lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default()(styleNodes, function (stylesheetElement) {
      _sandbox__WEBPACK_IMPORTED_MODULE_6__.process(appElement, stylesheetElement, appName);
    });
  }

  return appElement;
}
/** generate app wrapper dom getter */


function getAppWrapperGetter(appName, appInstanceId, useLegacyRender, strictStyleIsolation, scopedCSS, elementGetter) {
  return function () {
    if (useLegacyRender) {
      if (strictStyleIsolation) throw new Error('[qiankun]: strictStyleIsolation can not be used with legacy render!');
      if (scopedCSS) throw new Error('[qiankun]: experimentalStyleIsolation can not be used with legacy render!');
      var appWrapper = document.getElementById((0,_utils__WEBPACK_IMPORTED_MODULE_7__.getWrapperId)(appInstanceId));
      assertElementExist(appWrapper, "[qiankun] Wrapper element for ".concat(appName, " with instance ").concat(appInstanceId, " is not existed!"));
      return appWrapper;
    }

    var element = elementGetter();
    assertElementExist(element, "[qiankun] Wrapper element for ".concat(appName, " with instance ").concat(appInstanceId, " is not existed!"));

    if (strictStyleIsolation) {
      return element.shadowRoot;
    }

    return element;
  };
}

var rawAppendChild = HTMLElement.prototype.appendChild;
var rawRemoveChild = HTMLElement.prototype.removeChild;
/**
 * Get the render function
 * If the legacy render function is provide, used as it, otherwise we will insert the app element to target container by qiankun
 * @param appName
 * @param appContent
 * @param legacyRender
 */

function getRender(appName, appContent, legacyRender) {
  var render = function render(_ref, phase) {
    var element = _ref.element,
        loading = _ref.loading,
        container = _ref.container;

    if (legacyRender) {
      if (true) {
        console.warn('[qiankun] Custom rendering function is deprecated, you can use the container element setting instead!');
      }

      return legacyRender({
        loading: loading,
        appContent: element ? appContent : ''
      });
    }

    var containerElement = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getContainer)(container); // The container might have be removed after micro app unmounted.
    // Such as the micro app unmount lifecycle called by a react componentWillUnmount lifecycle, after micro app unmounted, the react component might also be removed

    if (phase !== 'unmounted') {
      var errorMsg = function () {
        switch (phase) {
          case 'loading':
          case 'mounting':
            return "[qiankun] Target container with ".concat(container, " not existed while ").concat(appName, " ").concat(phase, "!");

          case 'mounted':
            return "[qiankun] Target container with ".concat(container, " not existed after ").concat(appName, " ").concat(phase, "!");

          default:
            return "[qiankun] Target container with ".concat(container, " not existed while ").concat(appName, " rendering!");
        }
      }();

      assertElementExist(containerElement, errorMsg);
    }

    if (containerElement && !containerElement.contains(element)) {
      // clear the container
      while (containerElement.firstChild) {
        rawRemoveChild.call(containerElement, containerElement.firstChild);
      } // append the element to container if it exist


      if (element) {
        rawAppendChild.call(containerElement, element);
      }
    }

    return undefined;
  };

  return render;
}

function getLifecyclesFromExports(scriptExports, appName, global, globalLatestSetProp) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.validateExportLifecycle)(scriptExports)) {
    return scriptExports;
  } // fallback to sandbox latest set property if it had


  if (globalLatestSetProp) {
    var lifecycles = global[globalLatestSetProp];

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.validateExportLifecycle)(lifecycles)) {
      return lifecycles;
    }
  }

  if (true) {
    console.warn("[qiankun] lifecycle not found from ".concat(appName, " entry exports, fallback to get from window['").concat(appName, "']"));
  } // fallback to global variable who named with ${appName} while module exports not found


  var globalVariableExports = global[appName];

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.validateExportLifecycle)(globalVariableExports)) {
    return globalVariableExports;
  }

  throw new Error("[qiankun] You need to export lifecycle functions in ".concat(appName, " entry"));
}

var prevAppUnmountedDeferred;
function loadApp(app) {
  var configuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var lifeCycles = arguments.length > 2 ? arguments[2] : undefined;

  var _a;

  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee16() {
    var _this = this;

    var entry, appName, appInstanceId, markName, _configuration$singul, singular, _configuration$sandbo, sandbox, excludeAssetFilter, importEntryOpts, _yield$importEntry, template, execScripts, assetPublicPath, appContent, strictStyleIsolation, scopedCSS, initialAppWrapperElement, initialContainer, legacyRender, render, initialAppWrapperGetter, global, mountSandbox, unmountSandbox, useLooseSandbox, sandboxContainer, _mergeWith, _mergeWith$beforeUnmo, beforeUnmount, _mergeWith$afterUnmou, afterUnmount, _mergeWith$afterMount, afterMount, _mergeWith$beforeMoun, beforeMount, _mergeWith$beforeLoad, beforeLoad, scriptExports, _getLifecyclesFromExp, bootstrap, mount, unmount, update, _getMicroAppStateActi, onGlobalStateChange, setGlobalState, offGlobalStateChange, syncAppWrapperElement2Sandbox, parcelConfigGetter;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            entry = app.entry, appName = app.name;
            appInstanceId = "".concat(appName, "_").concat(+new Date(), "_").concat(Math.floor(Math.random() * 1000));
            markName = "[qiankun] App ".concat(appInstanceId, " Loading");

            if (true) {
              (0,_utils__WEBPACK_IMPORTED_MODULE_7__.performanceMark)(markName);
            }

            _configuration$singul = configuration.singular, singular = _configuration$singul === void 0 ? false : _configuration$singul, _configuration$sandbo = configuration.sandbox, sandbox = _configuration$sandbo === void 0 ? true : _configuration$sandbo, excludeAssetFilter = configuration.excludeAssetFilter, importEntryOpts = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(configuration, ["singular", "sandbox", "excludeAssetFilter"]); // get the entry html content and script executor

            _context16.next = 7;
            return (0,import_html_entry__WEBPACK_IMPORTED_MODULE_8__.importEntry)(entry, importEntryOpts);

          case 7:
            _yield$importEntry = _context16.sent;
            template = _yield$importEntry.template;
            execScripts = _yield$importEntry.execScripts;
            assetPublicPath = _yield$importEntry.assetPublicPath;
            _context16.next = 13;
            return validateSingularMode(singular, app);

          case 13:
            if (!_context16.sent) {
              _context16.next = 16;
              break;
            }

            _context16.next = 16;
            return prevAppUnmountedDeferred && prevAppUnmountedDeferred.promise;

          case 16:
            appContent = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDefaultTplWrapper)(appInstanceId, appName)(template);
            strictStyleIsolation = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__.default)(sandbox) === 'object' && !!sandbox.strictStyleIsolation;
            scopedCSS = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.isEnableScopedCSS)(sandbox);
            initialAppWrapperElement = createElement(appContent, strictStyleIsolation, scopedCSS, appName);
            initialContainer = 'container' in app ? app.container : undefined;
            legacyRender = 'render' in app ? app.render : undefined;
            render = getRender(appName, appContent, legacyRender); // 第一次加载设置应用可见区域 dom 结构
            // 确保每次应用加载前容器 dom 结构已经设置完毕

            render({
              element: initialAppWrapperElement,
              loading: true,
              container: initialContainer
            }, 'loading');
            initialAppWrapperGetter = getAppWrapperGetter(appName, appInstanceId, !!legacyRender, strictStyleIsolation, scopedCSS, function () {
              return initialAppWrapperElement;
            });
            global = window;

            mountSandbox = function mountSandbox() {
              return Promise.resolve();
            };

            unmountSandbox = function unmountSandbox() {
              return Promise.resolve();
            };

            useLooseSandbox = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__.default)(sandbox) === 'object' && !!sandbox.loose;

            if (sandbox) {
              sandboxContainer = (0,_sandbox__WEBPACK_IMPORTED_MODULE_9__.createSandboxContainer)(appName, // FIXME should use a strict sandbox logic while remount, see https://github.com/umijs/qiankun/issues/518
              initialAppWrapperGetter, scopedCSS, useLooseSandbox, excludeAssetFilter); // 用沙箱的代理对象作为接下来使用的全局对象

              global = sandboxContainer.instance.proxy;
              mountSandbox = sandboxContainer.mount;
              unmountSandbox = sandboxContainer.unmount;
            }

            _mergeWith = lodash_mergeWith__WEBPACK_IMPORTED_MODULE_1___default()({}, (0,_addons__WEBPACK_IMPORTED_MODULE_10__.default)(global, assetPublicPath), lifeCycles, function (v1, v2) {
              return lodash_concat__WEBPACK_IMPORTED_MODULE_0___default()(v1 !== null && v1 !== void 0 ? v1 : [], v2 !== null && v2 !== void 0 ? v2 : []);
            }), _mergeWith$beforeUnmo = _mergeWith.beforeUnmount, beforeUnmount = _mergeWith$beforeUnmo === void 0 ? [] : _mergeWith$beforeUnmo, _mergeWith$afterUnmou = _mergeWith.afterUnmount, afterUnmount = _mergeWith$afterUnmou === void 0 ? [] : _mergeWith$afterUnmou, _mergeWith$afterMount = _mergeWith.afterMount, afterMount = _mergeWith$afterMount === void 0 ? [] : _mergeWith$afterMount, _mergeWith$beforeMoun = _mergeWith.beforeMount, beforeMount = _mergeWith$beforeMoun === void 0 ? [] : _mergeWith$beforeMoun, _mergeWith$beforeLoad = _mergeWith.beforeLoad, beforeLoad = _mergeWith$beforeLoad === void 0 ? [] : _mergeWith$beforeLoad;
            _context16.next = 33;
            return execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_7__.toArray)(beforeLoad), app, global);

          case 33:
            _context16.next = 35;
            return execScripts(global, !useLooseSandbox);

          case 35:
            scriptExports = _context16.sent;
            _getLifecyclesFromExp = getLifecyclesFromExports(scriptExports, appName, global, (_a = sandboxContainer === null || sandboxContainer === void 0 ? void 0 : sandboxContainer.instance) === null || _a === void 0 ? void 0 : _a.latestSetProp), bootstrap = _getLifecyclesFromExp.bootstrap, mount = _getLifecyclesFromExp.mount, unmount = _getLifecyclesFromExp.unmount, update = _getLifecyclesFromExp.update;
            _getMicroAppStateActi = (0,_globalState__WEBPACK_IMPORTED_MODULE_11__.getMicroAppStateActions)(appInstanceId), onGlobalStateChange = _getMicroAppStateActi.onGlobalStateChange, setGlobalState = _getMicroAppStateActi.setGlobalState, offGlobalStateChange = _getMicroAppStateActi.offGlobalStateChange; // FIXME temporary way

            syncAppWrapperElement2Sandbox = function syncAppWrapperElement2Sandbox(element) {
              return initialAppWrapperElement = element;
            };

            parcelConfigGetter = function parcelConfigGetter() {
              var remountContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialContainer;
              var appWrapperElement = initialAppWrapperElement;
              var appWrapperGetter = getAppWrapperGetter(appName, appInstanceId, !!legacyRender, strictStyleIsolation, scopedCSS, function () {
                return appWrapperElement;
              });
              var parcelConfig = {
                name: appInstanceId,
                bootstrap: bootstrap,
                mount: [function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
                    var marks;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (true) {
                              marks = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.performanceGetEntriesByName)(markName, 'mark'); // mark length is zero means the app is remounting

                              if (marks && !marks.length) {
                                (0,_utils__WEBPACK_IMPORTED_MODULE_7__.performanceMark)(markName);
                              }
                            }

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));
                }, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return validateSingularMode(singular, app);

                          case 2:
                            _context3.t0 = _context3.sent;

                            if (!_context3.t0) {
                              _context3.next = 5;
                              break;
                            }

                            _context3.t0 = prevAppUnmountedDeferred;

                          case 5:
                            if (!_context3.t0) {
                              _context3.next = 7;
                              break;
                            }

                            return _context3.abrupt("return", prevAppUnmountedDeferred.promise);

                          case 7:
                            return _context3.abrupt("return", undefined);

                          case 8:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                }, // 添加 mount hook, 确保每次应用加载前容器 dom 结构已经设置完毕
                function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
                    var useNewContainer;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            useNewContainer = remountContainer !== initialContainer;

                            if (useNewContainer || !appWrapperElement) {
                              // element will be destroyed after unmounted, we need to recreate it if it not exist
                              // or we try to remount into a new container
                              appWrapperElement = createElement(appContent, strictStyleIsolation, scopedCSS, appName);
                              syncAppWrapperElement2Sandbox(appWrapperElement);
                            }

                            render({
                              element: appWrapperElement,
                              loading: true,
                              container: remountContainer
                            }, 'mounting');

                          case 3:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                }, mountSandbox, // exec the chain after rendering to keep the behavior with beforeLoad
                function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            return _context5.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_7__.toArray)(beforeMount), app, global));

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));
                }, function (props) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            return _context6.abrupt("return", mount(Object.assign(Object.assign({}, props), {
                              container: appWrapperGetter(),
                              setGlobalState: setGlobalState,
                              onGlobalStateChange: onGlobalStateChange
                            })));

                          case 1:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));
                }, // finish loading after app mounted
                function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            return _context7.abrupt("return", render({
                              element: appWrapperElement,
                              loading: false,
                              container: remountContainer
                            }, 'mounted'));

                          case 1:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));
                }, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            return _context8.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_7__.toArray)(afterMount), app, global));

                          case 1:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));
                }, // initialize the unmount defer after app mounted and resolve the defer after it unmounted
                function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return validateSingularMode(singular, app);

                          case 2:
                            if (!_context9.sent) {
                              _context9.next = 4;
                              break;
                            }

                            prevAppUnmountedDeferred = new _utils__WEBPACK_IMPORTED_MODULE_7__.Deferred();

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));
                }, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee10() {
                    var measureName;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            if (true) {
                              measureName = "[qiankun] App ".concat(appInstanceId, " Loading Consuming");
                              (0,_utils__WEBPACK_IMPORTED_MODULE_7__.performanceMeasure)(measureName, markName);
                            }

                          case 1:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));
                }],
                unmount: [function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee11() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            return _context11.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_7__.toArray)(beforeUnmount), app, global));

                          case 1:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));
                }, function (props) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee12() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            return _context12.abrupt("return", unmount(Object.assign(Object.assign({}, props), {
                              container: appWrapperGetter()
                            })));

                          case 1:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));
                }, unmountSandbox, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee13() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            return _context13.abrupt("return", execHooksChain((0,_utils__WEBPACK_IMPORTED_MODULE_7__.toArray)(afterUnmount), app, global));

                          case 1:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));
                }, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee14() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            render({
                              element: null,
                              loading: false,
                              container: remountContainer
                            }, 'unmounted');
                            offGlobalStateChange(appInstanceId); // for gc

                            appWrapperElement = null;
                            syncAppWrapperElement2Sandbox(appWrapperElement);

                          case 4:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14);
                  }));
                }, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee15() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            _context15.next = 2;
                            return validateSingularMode(singular, app);

                          case 2:
                            _context15.t0 = _context15.sent;

                            if (!_context15.t0) {
                              _context15.next = 5;
                              break;
                            }

                            _context15.t0 = prevAppUnmountedDeferred;

                          case 5:
                            if (!_context15.t0) {
                              _context15.next = 7;
                              break;
                            }

                            prevAppUnmountedDeferred.resolve();

                          case 7:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));
                }]
              };

              if (typeof update === 'function') {
                parcelConfig.update = update;
              }

              return parcelConfig;
            };

            return _context16.abrupt("return", parcelConfigGetter);

          case 41:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/prefetch.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/prefetch.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefetchImmediately": () => (/* binding */ prefetchImmediately),
/* harmony export */   "doPrefetchStrategy": () => (/* binding */ doPrefetchStrategy)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var import_html_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! import-html-entry */ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/index.js");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa */ "./node_modules/.pnpm/registry.nlark.com+single-spa@5.9.2/node_modules/single-spa/lib/esm/single-spa.min.js");



/**
 * @author Kuitos
 * @since 2019-02-26
 */


 // RIC and shim for browsers setTimeout() without it

var requestIdleCallback = window.requestIdleCallback || function requestIdleCallback(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var isSlowNetwork = navigator.connection ? navigator.connection.saveData || navigator.connection.type !== 'wifi' && navigator.connection.type !== 'ethernet' && /(2|3)g/.test(navigator.connection.effectiveType) : false;
/**
 * prefetch assets, do nothing while in mobile network
 * @param entry
 * @param opts
 */

function prefetch(entry, opts) {
  var _this = this;

  if (!navigator.onLine || isSlowNetwork) {
    // Don't prefetch if in a slow network or offline
    return;
  }

  requestIdleCallback(function () {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$importEntry, getExternalScripts, getExternalStyleSheets;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,import_html_entry__WEBPACK_IMPORTED_MODULE_4__.importEntry)(entry, opts);

            case 2:
              _yield$importEntry = _context.sent;
              getExternalScripts = _yield$importEntry.getExternalScripts;
              getExternalStyleSheets = _yield$importEntry.getExternalStyleSheets;
              requestIdleCallback(getExternalStyleSheets);
              requestIdleCallback(getExternalScripts);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  });
}

function prefetchAfterFirstMounted(apps, opts) {
  window.addEventListener('single-spa:first-mount', function listener() {
    var notLoadedApps = apps.filter(function (app) {
      return (0,single_spa__WEBPACK_IMPORTED_MODULE_2__.getAppStatus)(app.name) === single_spa__WEBPACK_IMPORTED_MODULE_2__.NOT_LOADED;
    });

    if (true) {
      var mountedApps = (0,single_spa__WEBPACK_IMPORTED_MODULE_2__.getMountedApps)();
      console.log("[qiankun] prefetch starting after ".concat(mountedApps, " mounted..."), notLoadedApps);
    }

    notLoadedApps.forEach(function (_ref) {
      var entry = _ref.entry;
      return prefetch(entry, opts);
    });
    window.removeEventListener('single-spa:first-mount', listener);
  });
}

function prefetchImmediately(apps, opts) {
  if (true) {
    console.log('[qiankun] prefetch starting for apps...', apps);
  }

  apps.forEach(function (_ref2) {
    var entry = _ref2.entry;
    return prefetch(entry, opts);
  });
}
function doPrefetchStrategy(apps, prefetchStrategy, importEntryOpts) {
  var _this2 = this;

  var appsName2Apps = function appsName2Apps(names) {
    return apps.filter(function (app) {
      return names.includes(app.name);
    });
  };

  if (Array.isArray(prefetchStrategy)) {
    prefetchAfterFirstMounted(appsName2Apps(prefetchStrategy), importEntryOpts);
  } else if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(prefetchStrategy)) {
    (function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var _yield$prefetchStrate, _yield$prefetchStrate2, criticalAppNames, _yield$prefetchStrate3, minorAppsName;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return prefetchStrategy(apps);

              case 2:
                _yield$prefetchStrate = _context2.sent;
                _yield$prefetchStrate2 = _yield$prefetchStrate.criticalAppNames;
                criticalAppNames = _yield$prefetchStrate2 === void 0 ? [] : _yield$prefetchStrate2;
                _yield$prefetchStrate3 = _yield$prefetchStrate.minorAppsName;
                minorAppsName = _yield$prefetchStrate3 === void 0 ? [] : _yield$prefetchStrate3;
                prefetchImmediately(appsName2Apps(criticalAppNames), importEntryOpts);
                prefetchAfterFirstMounted(appsName2Apps(minorAppsName), importEntryOpts);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    })();
  } else {
    switch (prefetchStrategy) {
      case true:
        prefetchAfterFirstMounted(apps, importEntryOpts);
        break;

      case 'all':
        prefetchImmediately(apps, importEntryOpts);
        break;

      default:
        break;
    }
  }
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/common.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/common.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentRunningSandboxProxy": () => (/* binding */ getCurrentRunningSandboxProxy),
/* harmony export */   "setCurrentRunningSandboxProxy": () => (/* binding */ setCurrentRunningSandboxProxy),
/* harmony export */   "getTargetValue": () => (/* binding */ getTargetValue),
/* harmony export */   "getProxyPropertyValue": () => (/* binding */ getProxyPropertyValue)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/utils.js");
/**
 * @author Kuitos
 * @since 2020-04-13
 */

var currentRunningSandboxProxy;
function getCurrentRunningSandboxProxy() {
  return currentRunningSandboxProxy;
}
function setCurrentRunningSandboxProxy(proxy) {
  currentRunningSandboxProxy = proxy;
}
function getTargetValue(target, value) {
  /*
    仅绑定 isCallable && !isBoundedFunction && !isConstructable 的函数对象，如 window.console、window.atob 这类。目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
    @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
   */
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isCallable)(value) && !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isBoundedFunction)(value) && !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isConstructable)(value)) {
    var boundValue = Function.prototype.bind.call(value, target); // some callable function has custom fields, we need to copy the enumerable props to boundValue. such as moment function.
    // use for..in rather than Object.keys.forEach for performance reason
    // eslint-disable-next-line guard-for-in,no-restricted-syntax

    for (var key in value) {
      boundValue[key] = value[key];
    } // copy prototype if bound function not have but target one have
    // as prototype is non-enumerable mostly, we need to copy it from target function manually


    if (value.hasOwnProperty('prototype') && !boundValue.hasOwnProperty('prototype')) {
      // we should not use assignment operator to set boundValue prototype like `boundValue.prototype = value.prototype`
      // as the assignment will also look up prototype chain while it hasn't own prototype property,
      // when the lookup succeed, the assignment will throw an TypeError like `Cannot assign to read only property 'prototype' of function` if its descriptor configured with writable false or just have a getter accessor
      // see https://github.com/umijs/qiankun/issues/1121
      Object.defineProperty(boundValue, 'prototype', {
        value: value.prototype,
        enumerable: false,
        writable: true
      });
    }

    return boundValue;
  }

  return value;
}
var getterInvocationResultMap = new WeakMap();
function getProxyPropertyValue(getter) {
  var getterResult = getterInvocationResultMap.get(getter);

  if (!getterResult) {
    var result = getter();
    getterInvocationResultMap.set(getter, result);
    return result;
  }

  return getterResult;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* reexport module object */ _patchers__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "createSandboxContainer": () => (/* binding */ createSandboxContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _legacy_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy/sandbox */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/legacy/sandbox.js");
/* harmony import */ var _patchers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patchers */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/index.js");
/* harmony import */ var _proxySandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxySandbox */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/proxySandbox.js");
/* harmony import */ var _snapshotSandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snapshotSandbox */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/snapshotSandbox.js");
/* harmony import */ var _patchers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patchers */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/css.js");








/**
 * 生成应用运行时沙箱
 *
 * 沙箱分两个类型：
 * 1. app 环境沙箱
 *  app 环境沙箱是指应用初始化过之后，应用会在什么样的上下文环境运行。每个应用的环境沙箱只会初始化一次，因为子应用只会触发一次 bootstrap 。
 *  子应用在切换时，实际上切换的是 app 环境沙箱。
 * 2. render 沙箱
 *  子应用在 app mount 开始前生成好的的沙箱。每次子应用切换过后，render 沙箱都会重现初始化。
 *
 * 这么设计的目的是为了保证每个子应用切换回来之后，还能运行在应用 bootstrap 之后的环境下。
 *
 * @param appName
 * @param elementGetter
 * @param scopedCSS
 * @param useLooseSandbox
 * @param excludeAssetFilter
 */

function createSandboxContainer(appName, elementGetter, scopedCSS, useLooseSandbox, excludeAssetFilter) {
  var sandbox;

  if (window.Proxy) {
    sandbox = useLooseSandbox ? new _legacy_sandbox__WEBPACK_IMPORTED_MODULE_3__.default(appName) : new _proxySandbox__WEBPACK_IMPORTED_MODULE_4__.default(appName);
  } else {
    sandbox = new _snapshotSandbox__WEBPACK_IMPORTED_MODULE_5__.default(appName);
  } // some side effect could be be invoked while bootstrapping, such as dynamic stylesheet injection with style-loader, especially during the development phase


  var bootstrappingFreers = (0,_patchers__WEBPACK_IMPORTED_MODULE_6__.patchAtBootstrapping)(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter); // mounting freers are one-off and should be re-init at every mounting time

  var mountingFreers = [];
  var sideEffectsRebuilders = [];
  return {
    instance: sandbox,

    /**
     * 沙箱被 mount
     * 可能是从 bootstrap 状态进入的 mount
     * 也可能是从 unmount 之后再次唤醒进入 mount
     */
    mount: function mount() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var sideEffectsRebuildersAtBootstrapping, sideEffectsRebuildersAtMounting;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /* ------------------------------------------ 因为有上下文依赖（window），以下代码执行顺序不能变 ------------------------------------------ */

                /* ------------------------------------------ 1. 启动/恢复 沙箱------------------------------------------ */
                sandbox.active();
                sideEffectsRebuildersAtBootstrapping = sideEffectsRebuilders.slice(0, bootstrappingFreers.length);
                sideEffectsRebuildersAtMounting = sideEffectsRebuilders.slice(bootstrappingFreers.length); // must rebuild the side effects which added at bootstrapping firstly to recovery to nature state

                if (sideEffectsRebuildersAtBootstrapping.length) {
                  sideEffectsRebuildersAtBootstrapping.forEach(function (rebuild) {
                    return rebuild();
                  });
                }
                /* ------------------------------------------ 2. 开启全局变量补丁 ------------------------------------------*/
                // render 沙箱启动时开始劫持各类全局监听，尽量不要在应用初始化阶段有 事件监听/定时器 等副作用


                mountingFreers = (0,_patchers__WEBPACK_IMPORTED_MODULE_6__.patchAtMounting)(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter);
                /* ------------------------------------------ 3. 重置一些初始化时的副作用 ------------------------------------------*/
                // 存在 rebuilder 则表明有些副作用需要重建

                if (sideEffectsRebuildersAtMounting.length) {
                  sideEffectsRebuildersAtMounting.forEach(function (rebuild) {
                    return rebuild();
                  });
                } // clean up rebuilders


                sideEffectsRebuilders = [];

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    },

    /**
     * 恢复 global 状态，使其能回到应用加载之前的状态
     */
    unmount: function unmount() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // record the rebuilders of window side effects (event listeners or timers)
                // note that the frees of mounting phase are one-off as it will be re-init at next mounting
                sideEffectsRebuilders = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(bootstrappingFreers), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(mountingFreers)).map(function (free) {
                  return free();
                });
                sandbox.inactive();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/legacy/sandbox.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/legacy/sandbox.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingularProxySandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/interfaces.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/common.js");







function isPropConfigurable(target, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(target, prop);
  return descriptor ? descriptor.configurable : true;
}

function setWindowProp(prop, value, toDelete) {
  if (value === undefined && toDelete) {
    delete window[prop];
  } else if (isPropConfigurable(window, prop) && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__.default)(prop) !== 'symbol') {
    Object.defineProperty(window, prop, {
      writable: true,
      configurable: true
    });
    window[prop] = value;
  }
}
/**
 * 基于 Proxy 实现的沙箱
 * TODO: 为了兼容性 singular 模式下依旧使用该沙箱，等新沙箱稳定之后再切换
 */


var SingularProxySandbox = /*#__PURE__*/function () {
  function SingularProxySandbox(name) {
    var _this = this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SingularProxySandbox);

    /** 沙箱期间新增的全局变量 */
    this.addedPropsMapInSandbox = new Map();
    /** 沙箱期间更新的全局变量 */

    this.modifiedPropsOriginalValueMapInSandbox = new Map();
    /** 持续记录更新的(新增和修改的)全局变量的 map，用于在任意时刻做 snapshot */

    this.currentUpdatedPropsValueMap = new Map();
    this.sandboxRunning = true;
    this.latestSetProp = null;
    this.name = name;
    this.type = _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.LegacyProxy;
    var addedPropsMapInSandbox = this.addedPropsMapInSandbox,
        modifiedPropsOriginalValueMapInSandbox = this.modifiedPropsOriginalValueMapInSandbox,
        currentUpdatedPropsValueMap = this.currentUpdatedPropsValueMap;
    var rawWindow = window;
    var fakeWindow = Object.create(null);
    var proxy = new Proxy(fakeWindow, {
      set: function set(_, p, value) {
        if (_this.sandboxRunning) {
          if (!rawWindow.hasOwnProperty(p)) {
            addedPropsMapInSandbox.set(p, value);
          } else if (!modifiedPropsOriginalValueMapInSandbox.has(p)) {
            // 如果当前 window 对象存在该属性，且 record map 中未记录过，则记录该属性初始值
            var originalValue = rawWindow[p];
            modifiedPropsOriginalValueMapInSandbox.set(p, originalValue);
          }

          currentUpdatedPropsValueMap.set(p, value); // 必须重新设置 window 对象保证下次 get 时能拿到已更新的数据
          // eslint-disable-next-line no-param-reassign

          rawWindow[p] = value;
          _this.latestSetProp = p;
          return true;
        }

        if (true) {
          console.warn("[qiankun] Set window.".concat(p.toString(), " while sandbox destroyed or inactive in ").concat(name, "!"));
        } // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误


        return true;
      },
      get: function get(_, p) {
        // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
        // or use window.top to check if an iframe context
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13
        if (p === 'top' || p === 'parent' || p === 'window' || p === 'self') {
          return proxy;
        }

        var value = rawWindow[p];
        return (0,_common__WEBPACK_IMPORTED_MODULE_5__.getTargetValue)(rawWindow, value);
      },
      // trap in operator
      // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
      has: function has(_, p) {
        return p in rawWindow;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(_, p) {
        var descriptor = Object.getOwnPropertyDescriptor(rawWindow, p); // A property cannot be reported as non-configurable, if it does not exists as an own property of the target object

        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }

        return descriptor;
      }
    });
    this.proxy = proxy;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SingularProxySandbox, [{
    key: "active",
    value: function active() {
      if (!this.sandboxRunning) {
        this.currentUpdatedPropsValueMap.forEach(function (v, p) {
          return setWindowProp(p, v);
        });
      }

      this.sandboxRunning = true;
    }
  }, {
    key: "inactive",
    value: function inactive() {
      if (true) {
        console.info("[qiankun:sandbox] ".concat(this.name, " modified global properties restore..."), [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.addedPropsMapInSandbox.keys()), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.modifiedPropsOriginalValueMapInSandbox.keys())));
      } // renderSandboxSnapshot = snapshot(currentUpdatedPropsValueMapForSnapshot);
      // restore global props to initial snapshot


      this.modifiedPropsOriginalValueMapInSandbox.forEach(function (v, p) {
        return setWindowProp(p, v);
      });
      this.addedPropsMapInSandbox.forEach(function (_, p) {
        return setWindowProp(p, undefined, true);
      });
      this.sandboxRunning = false;
    }
  }]);

  return SingularProxySandbox;
}();



/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/css.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/css.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScopedCSS": () => (/* binding */ ScopedCSS),
/* harmony export */   "QiankunCSSRewriteAttr": () => (/* binding */ QiankunCSSRewriteAttr),
/* harmony export */   "process": () => (/* binding */ process)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * @author Saviio
 * @since 2020-4-19
 */
// https://developer.mozilla.org/en-US/docs/Web/API/CSSRule
var RuleType;

(function (RuleType) {
  // type: rule will be rewrote
  RuleType[RuleType["STYLE"] = 1] = "STYLE";
  RuleType[RuleType["MEDIA"] = 4] = "MEDIA";
  RuleType[RuleType["SUPPORTS"] = 12] = "SUPPORTS"; // type: value will be kept

  RuleType[RuleType["IMPORT"] = 3] = "IMPORT";
  RuleType[RuleType["FONT_FACE"] = 5] = "FONT_FACE";
  RuleType[RuleType["PAGE"] = 6] = "PAGE";
  RuleType[RuleType["KEYFRAMES"] = 7] = "KEYFRAMES";
  RuleType[RuleType["KEYFRAME"] = 8] = "KEYFRAME";
})(RuleType || (RuleType = {}));

var arrayify = function arrayify(list) {
  return [].slice.call(list, 0);
};

var rawDocumentBodyAppend = HTMLBodyElement.prototype.appendChild;
var ScopedCSS = /*#__PURE__*/function () {
  function ScopedCSS() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ScopedCSS);

    var styleNode = document.createElement('style');
    rawDocumentBodyAppend.call(document.body, styleNode);
    this.swapNode = styleNode;
    this.sheet = styleNode.sheet;
    this.sheet.disabled = true;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ScopedCSS, [{
    key: "process",
    value: function process(styleNode) {
      var _this = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _a;

      if (styleNode.textContent !== '') {
        var textNode = document.createTextNode(styleNode.textContent || '');
        this.swapNode.appendChild(textNode);
        var sheet = this.swapNode.sheet; // type is missing

        var rules = arrayify((_a = sheet === null || sheet === void 0 ? void 0 : sheet.cssRules) !== null && _a !== void 0 ? _a : []);
        var css = this.rewrite(rules, prefix); // eslint-disable-next-line no-param-reassign

        styleNode.textContent = css; // cleanup

        this.swapNode.removeChild(textNode);
        return;
      }

      var mutator = new MutationObserver(function (mutations) {
        var _a;

        for (var i = 0; i < mutations.length; i += 1) {
          var mutation = mutations[i];

          if (ScopedCSS.ModifiedTag in styleNode) {
            return;
          }

          if (mutation.type === 'childList') {
            var _sheet = styleNode.sheet;

            var _rules = arrayify((_a = _sheet === null || _sheet === void 0 ? void 0 : _sheet.cssRules) !== null && _a !== void 0 ? _a : []);

            var _css = _this.rewrite(_rules, prefix); // eslint-disable-next-line no-param-reassign


            styleNode.textContent = _css; // eslint-disable-next-line no-param-reassign

            styleNode[ScopedCSS.ModifiedTag] = true;
          }
        }
      }); // since observer will be deleted when node be removed
      // we dont need create a cleanup function manually
      // see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect

      mutator.observe(styleNode, {
        childList: true
      });
    }
  }, {
    key: "rewrite",
    value: function rewrite(rules) {
      var _this2 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var css = '';
      rules.forEach(function (rule) {
        switch (rule.type) {
          case RuleType.STYLE:
            css += _this2.ruleStyle(rule, prefix);
            break;

          case RuleType.MEDIA:
            css += _this2.ruleMedia(rule, prefix);
            break;

          case RuleType.SUPPORTS:
            css += _this2.ruleSupport(rule, prefix);
            break;

          default:
            css += "".concat(rule.cssText);
            break;
        }
      });
      return css;
    } // handle case:
    // .app-main {}
    // html, body {}
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "ruleStyle",
    value: function ruleStyle(rule, prefix) {
      var rootSelectorRE = /((?:[^\w\-.#]|^)(body|html|:root))/gm;
      var rootCombinationRE = /(html[^\w{[]+)/gm;
      var selector = rule.selectorText.trim();
      var cssText = rule.cssText; // handle html { ... }
      // handle body { ... }
      // handle :root { ... }

      if (selector === 'html' || selector === 'body' || selector === ':root') {
        return cssText.replace(rootSelectorRE, prefix);
      } // handle html body { ... }
      // handle html > body { ... }


      if (rootCombinationRE.test(rule.selectorText)) {
        var siblingSelectorRE = /(html[^\w{]+)(\+|~)/gm; // since html + body is a non-standard rule for html
        // transformer will ignore it

        if (!siblingSelectorRE.test(rule.selectorText)) {
          cssText = cssText.replace(rootCombinationRE, '');
        }
      } // handle grouping selector, a,span,p,div { ... }


      cssText = cssText.replace(/^[\s\S]+{/, function (selectors) {
        return selectors.replace(/(^|,\n?)([^,]+)/g, function (item, p, s) {
          // handle div,body,span { ... }
          if (rootSelectorRE.test(item)) {
            return item.replace(rootSelectorRE, function (m) {
              // do not discard valid previous character, such as body,html or *:not(:root)
              var whitePrevChars = [',', '('];

              if (m && whitePrevChars.includes(m[0])) {
                return "".concat(m[0]).concat(prefix);
              } // replace root selector with prefix


              return prefix;
            });
          }

          return "".concat(p).concat(prefix, " ").concat(s.replace(/^ */, ''));
        });
      });
      return cssText;
    } // handle case:
    // @media screen and (max-width: 300px) {}

  }, {
    key: "ruleMedia",
    value: function ruleMedia(rule, prefix) {
      var css = this.rewrite(arrayify(rule.cssRules), prefix);
      return "@media ".concat(rule.conditionText, " {").concat(css, "}");
    } // handle case:
    // @supports (display: grid) {}

  }, {
    key: "ruleSupport",
    value: function ruleSupport(rule, prefix) {
      var css = this.rewrite(arrayify(rule.cssRules), prefix);
      return "@supports ".concat(rule.conditionText, " {").concat(css, "}");
    }
  }]);

  return ScopedCSS;
}();
ScopedCSS.ModifiedTag = 'Symbol(style-modified-qiankun)';
var processor;
var QiankunCSSRewriteAttr = 'data-qiankun';
var process = function process(appWrapper, stylesheetElement, appName) {
  // lazy singleton pattern
  if (!processor) {
    processor = new ScopedCSS();
  }

  if (stylesheetElement.tagName === 'LINK') {
    console.warn('Feature: sandbox.experimentalStyleIsolation is not support for link element yet.');
  }

  var mountDOM = appWrapper;

  if (!mountDOM) {
    return;
  }

  var tag = (mountDOM.tagName || '').toLowerCase();

  if (tag && stylesheetElement.tagName === 'STYLE') {
    var prefix = "".concat(tag, "[").concat(QiankunCSSRewriteAttr, "=\"").concat(appName, "\"]");
    processor.process(stylesheetElement, prefix);
  }
};

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/common.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/common.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rawHeadAppendChild": () => (/* binding */ rawHeadAppendChild),
/* harmony export */   "isHijackingTag": () => (/* binding */ isHijackingTag),
/* harmony export */   "isStyledComponentsLike": () => (/* binding */ isStyledComponentsLike),
/* harmony export */   "recordStyledComponentsCSSRules": () => (/* binding */ recordStyledComponentsCSSRules),
/* harmony export */   "getStyledElementCSSRules": () => (/* binding */ getStyledElementCSSRules),
/* harmony export */   "patchHTMLDynamicAppendPrototypeFunctions": () => (/* binding */ patchHTMLDynamicAppendPrototypeFunctions),
/* harmony export */   "rebuildCSSRules": () => (/* binding */ rebuildCSSRules)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var import_html_entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! import-html-entry */ "./node_modules/.pnpm/registry.nlark.com+import-html-entry@1.11.1/node_modules/import-html-entry/esm/index.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/apis.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/css.js");


/**
 * @author Kuitos
 * @since 2019-10-21
 */



var rawHeadAppendChild = HTMLHeadElement.prototype.appendChild;
var rawHeadRemoveChild = HTMLHeadElement.prototype.removeChild;
var rawBodyAppendChild = HTMLBodyElement.prototype.appendChild;
var rawBodyRemoveChild = HTMLBodyElement.prototype.removeChild;
var rawHeadInsertBefore = HTMLHeadElement.prototype.insertBefore;
var rawRemoveChild = HTMLElement.prototype.removeChild;
var SCRIPT_TAG_NAME = 'SCRIPT';
var LINK_TAG_NAME = 'LINK';
var STYLE_TAG_NAME = 'STYLE';
function isHijackingTag(tagName) {
  return (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === LINK_TAG_NAME || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === STYLE_TAG_NAME || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === SCRIPT_TAG_NAME;
}
/**
 * Check if a style element is a styled-component liked.
 * A styled-components liked element is which not have textContext but keep the rules in its styleSheet.cssRules.
 * Such as the style element generated by styled-components and emotion.
 * @param element
 */

function isStyledComponentsLike(element) {
  var _a, _b;

  return !element.textContent && (((_a = element.sheet) === null || _a === void 0 ? void 0 : _a.cssRules.length) || ((_b = getStyledElementCSSRules(element)) === null || _b === void 0 ? void 0 : _b.length));
}

function patchCustomEvent(e, elementGetter) {
  Object.defineProperties(e, {
    srcElement: {
      get: elementGetter
    },
    target: {
      get: elementGetter
    }
  });
  return e;
}

function manualInvokeElementOnLoad(element) {
  // we need to invoke the onload event manually to notify the event listener that the script was completed
  // here are the two typical ways of dynamic script loading
  // 1. element.onload callback way, which webpack and loadjs used, see https://github.com/muicss/loadjs/blob/master/src/loadjs.js#L138
  // 2. addEventListener way, which toast-loader used, see https://github.com/pyrsmk/toast/blob/master/src/Toast.ts#L64
  var loadEvent = new CustomEvent('load');
  var patchedEvent = patchCustomEvent(loadEvent, function () {
    return element;
  });

  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(element.onload)) {
    element.onload(patchedEvent);
  } else {
    element.dispatchEvent(patchedEvent);
  }
}

function manualInvokeElementOnError(element) {
  var errorEvent = new CustomEvent('error');
  var patchedEvent = patchCustomEvent(errorEvent, function () {
    return element;
  });

  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(element.onerror)) {
    element.onerror(patchedEvent);
  } else {
    element.dispatchEvent(patchedEvent);
  }
}

function convertLinkAsStyle(element, postProcess) {
  var fetchFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : fetch;
  var styleElement = document.createElement('style');
  var href = element.href; // add source link element href

  styleElement.dataset.qiankunHref = href;
  fetchFn(href).then(function (res) {
    return res.text();
  }).then(function (styleContext) {
    styleElement.appendChild(document.createTextNode(styleContext));
    postProcess(styleElement);
    manualInvokeElementOnLoad(element);
  }).catch(function () {
    return manualInvokeElementOnError(element);
  });
  return styleElement;
}

var styledComponentCSSRulesMap = new WeakMap();
var dynamicScriptAttachedCommentMap = new WeakMap();
var dynamicLinkAttachedInlineStyleMap = new WeakMap();
function recordStyledComponentsCSSRules(styleElements) {
  styleElements.forEach(function (styleElement) {
    /*
     With a styled-components generated style element, we need to record its cssRules for restore next re-mounting time.
     We're doing this because the sheet of style element is going to be cleaned automatically by browser after the style element dom removed from document.
     see https://www.w3.org/TR/cssom-1/#associated-css-style-sheet
     */
    if (styleElement instanceof HTMLStyleElement && isStyledComponentsLike(styleElement)) {
      if (styleElement.sheet) {
        // record the original css rules of the style element for restore
        styledComponentCSSRulesMap.set(styleElement, styleElement.sheet.cssRules);
      }
    }
  });
}
function getStyledElementCSSRules(styledElement) {
  return styledComponentCSSRulesMap.get(styledElement);
}

function getOverwrittenAppendChildOrInsertBefore(opts) {
  return function appendChildOrInsertBefore(newChild, refChild) {
    var _a, _b;

    var element = newChild;
    var rawDOMAppendOrInsertBefore = opts.rawDOMAppendOrInsertBefore,
        isInvokedByMicroApp = opts.isInvokedByMicroApp,
        containerConfigGetter = opts.containerConfigGetter;

    if (!isHijackingTag(element.tagName) || !isInvokedByMicroApp(element)) {
      return rawDOMAppendOrInsertBefore.call(this, element, refChild);
    }

    if (element.tagName) {
      var containerConfig = containerConfigGetter(element);
      var appName = containerConfig.appName,
          appWrapperGetter = containerConfig.appWrapperGetter,
          proxy = containerConfig.proxy,
          strictGlobal = containerConfig.strictGlobal,
          dynamicStyleSheetElements = containerConfig.dynamicStyleSheetElements,
          scopedCSS = containerConfig.scopedCSS,
          excludeAssetFilter = containerConfig.excludeAssetFilter;

      switch (element.tagName) {
        case LINK_TAG_NAME:
        case STYLE_TAG_NAME:
          {
            var stylesheetElement = newChild;
            var _stylesheetElement = stylesheetElement,
                href = _stylesheetElement.href;

            if (excludeAssetFilter && href && excludeAssetFilter(href)) {
              return rawDOMAppendOrInsertBefore.call(this, element, refChild);
            }

            var mountDOM = appWrapperGetter();

            if (scopedCSS) {
              // exclude link elements like <link rel="icon" href="favicon.ico">
              var linkElementUsingStylesheet = ((_a = element.tagName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === LINK_TAG_NAME && element.rel === 'stylesheet' && element.href;

              if (linkElementUsingStylesheet) {
                var _fetch = typeof _apis__WEBPACK_IMPORTED_MODULE_1__.frameworkConfiguration.fetch === 'function' ? _apis__WEBPACK_IMPORTED_MODULE_1__.frameworkConfiguration.fetch : (_b = _apis__WEBPACK_IMPORTED_MODULE_1__.frameworkConfiguration.fetch) === null || _b === void 0 ? void 0 : _b.fn;

                stylesheetElement = convertLinkAsStyle(element, function (styleElement) {
                  return _css__WEBPACK_IMPORTED_MODULE_2__.process(mountDOM, styleElement, appName);
                }, _fetch);
                dynamicLinkAttachedInlineStyleMap.set(element, stylesheetElement);
              } else {
                _css__WEBPACK_IMPORTED_MODULE_2__.process(mountDOM, stylesheetElement, appName);
              }
            } // eslint-disable-next-line no-shadow


            dynamicStyleSheetElements.push(stylesheetElement);
            var referenceNode = mountDOM.contains(refChild) ? refChild : null;
            return rawDOMAppendOrInsertBefore.call(mountDOM, stylesheetElement, referenceNode);
          }

        case SCRIPT_TAG_NAME:
          {
            var _element = element,
                src = _element.src,
                text = _element.text; // some script like jsonp maybe not support cors which should't use execScripts

            if (excludeAssetFilter && src && excludeAssetFilter(src)) {
              return rawDOMAppendOrInsertBefore.call(this, element, refChild);
            }

            var _mountDOM = appWrapperGetter();

            var _fetch2 = _apis__WEBPACK_IMPORTED_MODULE_1__.frameworkConfiguration.fetch;

            var _referenceNode = _mountDOM.contains(refChild) ? refChild : null;

            if (src) {
              (0,import_html_entry__WEBPACK_IMPORTED_MODULE_3__.execScripts)(null, [src], proxy, {
                fetch: _fetch2,
                strictGlobal: strictGlobal,
                beforeExec: function beforeExec() {
                  Object.defineProperty(document, 'currentScript', {
                    get: function get() {
                      return element;
                    },
                    configurable: true
                  });
                },
                success: function success() {
                  manualInvokeElementOnLoad(element);
                  element = null;
                },
                error: function error() {
                  manualInvokeElementOnError(element);
                  element = null;
                }
              });
              var dynamicScriptCommentElement = document.createComment("dynamic script ".concat(src, " replaced by qiankun"));
              dynamicScriptAttachedCommentMap.set(element, dynamicScriptCommentElement);
              return rawDOMAppendOrInsertBefore.call(_mountDOM, dynamicScriptCommentElement, _referenceNode);
            } // inline script never trigger the onload and onerror event


            (0,import_html_entry__WEBPACK_IMPORTED_MODULE_3__.execScripts)(null, ["<script>".concat(text, "</script>")], proxy, {
              strictGlobal: strictGlobal
            });
            var dynamicInlineScriptCommentElement = document.createComment('dynamic inline script replaced by qiankun');
            dynamicScriptAttachedCommentMap.set(element, dynamicInlineScriptCommentElement);
            return rawDOMAppendOrInsertBefore.call(_mountDOM, dynamicInlineScriptCommentElement, _referenceNode);
          }

        default:
          break;
      }
    }

    return rawDOMAppendOrInsertBefore.call(this, element, refChild);
  };
}

function getNewRemoveChild(headOrBodyRemoveChild, appWrapperGetterGetter) {
  return function removeChild(child) {
    var tagName = child.tagName;
    if (!isHijackingTag(tagName)) return headOrBodyRemoveChild.call(this, child);

    try {
      var attachedElement;

      switch (tagName) {
        case LINK_TAG_NAME:
          {
            attachedElement = dynamicLinkAttachedInlineStyleMap.get(child) || child;
            break;
          }

        case SCRIPT_TAG_NAME:
          {
            attachedElement = dynamicScriptAttachedCommentMap.get(child) || child;
            break;
          }

        default:
          {
            attachedElement = child;
          }
      } // container may had been removed while app unmounting if the removeChild action was async


      var appWrapperGetter = appWrapperGetterGetter(child);
      var container = appWrapperGetter();

      if (container.contains(attachedElement)) {
        return rawRemoveChild.call(container, attachedElement);
      }
    } catch (e) {
      console.warn(e);
    }

    return headOrBodyRemoveChild.call(this, child);
  };
}

function patchHTMLDynamicAppendPrototypeFunctions(isInvokedByMicroApp, containerConfigGetter) {
  // Just overwrite it while it have not been overwrite
  if (HTMLHeadElement.prototype.appendChild === rawHeadAppendChild && HTMLBodyElement.prototype.appendChild === rawBodyAppendChild && HTMLHeadElement.prototype.insertBefore === rawHeadInsertBefore) {
    HTMLHeadElement.prototype.appendChild = getOverwrittenAppendChildOrInsertBefore({
      rawDOMAppendOrInsertBefore: rawHeadAppendChild,
      containerConfigGetter: containerConfigGetter,
      isInvokedByMicroApp: isInvokedByMicroApp
    });
    HTMLBodyElement.prototype.appendChild = getOverwrittenAppendChildOrInsertBefore({
      rawDOMAppendOrInsertBefore: rawBodyAppendChild,
      containerConfigGetter: containerConfigGetter,
      isInvokedByMicroApp: isInvokedByMicroApp
    });
    HTMLHeadElement.prototype.insertBefore = getOverwrittenAppendChildOrInsertBefore({
      rawDOMAppendOrInsertBefore: rawHeadInsertBefore,
      containerConfigGetter: containerConfigGetter,
      isInvokedByMicroApp: isInvokedByMicroApp
    });
  } // Just overwrite it while it have not been overwrite


  if (HTMLHeadElement.prototype.removeChild === rawHeadRemoveChild && HTMLBodyElement.prototype.removeChild === rawBodyRemoveChild) {
    HTMLHeadElement.prototype.removeChild = getNewRemoveChild(rawHeadRemoveChild, function (element) {
      return containerConfigGetter(element).appWrapperGetter;
    });
    HTMLBodyElement.prototype.removeChild = getNewRemoveChild(rawBodyRemoveChild, function (element) {
      return containerConfigGetter(element).appWrapperGetter;
    });
  }

  return function unpatch() {
    HTMLHeadElement.prototype.appendChild = rawHeadAppendChild;
    HTMLHeadElement.prototype.removeChild = rawHeadRemoveChild;
    HTMLBodyElement.prototype.appendChild = rawBodyAppendChild;
    HTMLBodyElement.prototype.removeChild = rawBodyRemoveChild;
    HTMLHeadElement.prototype.insertBefore = rawHeadInsertBefore;
  };
}
function rebuildCSSRules(styleSheetElements, reAppendElement) {
  styleSheetElements.forEach(function (stylesheetElement) {
    // re-append the dynamic stylesheet to sub-app container
    var appendSuccess = reAppendElement(stylesheetElement);

    if (appendSuccess) {
      /*
      get the stored css rules from styled-components generated element, and the re-insert rules for them.
      note that we must do this after style element had been added to document, which stylesheet would be associated to the document automatically.
      check the spec https://www.w3.org/TR/cssom-1/#associated-css-style-sheet
       */
      if (stylesheetElement instanceof HTMLStyleElement && isStyledComponentsLike(stylesheetElement)) {
        var cssRules = getStyledElementCSSRules(stylesheetElement);

        if (cssRules) {
          // eslint-disable-next-line no-plusplus
          for (var i = 0; i < cssRules.length; i++) {
            var cssRule = cssRules[i];
            var cssStyleSheetElement = stylesheetElement.sheet;
            cssStyleSheetElement.insertRule(cssRule.cssText, cssStyleSheetElement.cssRules.length);
          }
        }
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/forLooseSandbox.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/forLooseSandbox.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patchLooseSandbox": () => (/* binding */ patchLooseSandbox)
/* harmony export */ });
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "./node_modules/.pnpm/registry.nlark.com+single-spa@5.9.2/node_modules/single-spa/lib/esm/single-spa.min.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/common.js");
/**
 * @author Kuitos
 * @since 2020-10-13
 */


var bootstrappingPatchCount = 0;
var mountingPatchCount = 0;
/**
 * Just hijack dynamic head append, that could avoid accidentally hijacking the insertion of elements except in head.
 * Such a case: ReactDOM.createPortal(<style>.test{color:blue}</style>, container),
 * this could made we append the style element into app wrapper but it will cause an error while the react portal unmounting, as ReactDOM could not find the style in body children list.
 * @param appName
 * @param appWrapperGetter
 * @param proxy
 * @param mounting
 * @param scopedCSS
 * @param excludeAssetFilter
 */

function patchLooseSandbox(appName, appWrapperGetter, proxy) {
  var mounting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var scopedCSS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var excludeAssetFilter = arguments.length > 5 ? arguments[5] : undefined;
  var dynamicStyleSheetElements = [];
  var unpatchDynamicAppendPrototypeFunctions = (0,_common__WEBPACK_IMPORTED_MODULE_1__.patchHTMLDynamicAppendPrototypeFunctions)(
  /*
    check if the currently specified application is active
    While we switch page from qiankun app to a normal react routing page, the normal one may load stylesheet dynamically while page rendering,
    but the url change listener must to wait until the current call stack is flushed.
    This scenario may cause we record the stylesheet from react routing page dynamic injection,
    and remove them after the url change triggered and qiankun app is unmouting
    see https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js#L222-L230
   */
  function () {
    return (0,single_spa__WEBPACK_IMPORTED_MODULE_0__.checkActivityFunctions)(window.location).some(function (name) {
      return name === appName;
    });
  }, function () {
    return {
      appName: appName,
      appWrapperGetter: appWrapperGetter,
      proxy: proxy,
      strictGlobal: false,
      scopedCSS: scopedCSS,
      dynamicStyleSheetElements: dynamicStyleSheetElements,
      excludeAssetFilter: excludeAssetFilter
    };
  });
  if (!mounting) bootstrappingPatchCount++;
  if (mounting) mountingPatchCount++;
  return function free() {
    // bootstrap patch just called once but its freer will be called multiple times
    if (!mounting && bootstrappingPatchCount !== 0) bootstrappingPatchCount--;
    if (mounting) mountingPatchCount--;
    var allMicroAppUnmounted = mountingPatchCount === 0 && bootstrappingPatchCount === 0; // release the overwrite prototype after all the micro apps unmounted

    if (allMicroAppUnmounted) unpatchDynamicAppendPrototypeFunctions();
    (0,_common__WEBPACK_IMPORTED_MODULE_1__.recordStyledComponentsCSSRules)(dynamicStyleSheetElements); // As now the sub app content all wrapped with a special id container,
    // the dynamic style sheet would be removed automatically while unmoutting

    return function rebuild() {
      (0,_common__WEBPACK_IMPORTED_MODULE_1__.rebuildCSSRules)(dynamicStyleSheetElements, function (stylesheetElement) {
        var appWrapper = appWrapperGetter();

        if (!appWrapper.contains(stylesheetElement)) {
          // Using document.head.appendChild ensures that appendChild invocation can also directly use the HTMLHeadElement.prototype.appendChild method which is overwritten at mounting phase
          document.head.appendChild.call(appWrapper, stylesheetElement);
          return true;
        }

        return false;
      }); // As the patcher will be invoked every mounting phase, we could release the cache for gc after rebuilding

      if (mounting) {
        dynamicStyleSheetElements = [];
      }
    };
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/forStrictSandbox.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/forStrictSandbox.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patchStrictSandbox": () => (/* binding */ patchStrictSandbox)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/common.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/common.js");
/**
 * @author Kuitos
 * @since 2020-10-13
 */


var rawDocumentCreateElement = Document.prototype.createElement;
var proxyAttachContainerConfigMap = new WeakMap();
var elementAttachContainerConfigMap = new WeakMap();

function patchDocumentCreateElement() {
  if (Document.prototype.createElement === rawDocumentCreateElement) {
    Document.prototype.createElement = function createElement(tagName, options) {
      var element = rawDocumentCreateElement.call(this, tagName, options);

      if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.isHijackingTag)(tagName)) {
        var currentRunningSandboxProxy = (0,_common__WEBPACK_IMPORTED_MODULE_1__.getCurrentRunningSandboxProxy)();

        if (currentRunningSandboxProxy) {
          var proxyContainerConfig = proxyAttachContainerConfigMap.get(currentRunningSandboxProxy);

          if (proxyContainerConfig) {
            elementAttachContainerConfigMap.set(element, proxyContainerConfig);
          }
        }
      }

      return element;
    };
  }

  return function unpatch() {
    Document.prototype.createElement = rawDocumentCreateElement;
  };
}

var bootstrappingPatchCount = 0;
var mountingPatchCount = 0;
function patchStrictSandbox(appName, appWrapperGetter, proxy) {
  var mounting = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var scopedCSS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var excludeAssetFilter = arguments.length > 5 ? arguments[5] : undefined;
  var containerConfig = proxyAttachContainerConfigMap.get(proxy);

  if (!containerConfig) {
    containerConfig = {
      appName: appName,
      proxy: proxy,
      appWrapperGetter: appWrapperGetter,
      dynamicStyleSheetElements: [],
      strictGlobal: true,
      excludeAssetFilter: excludeAssetFilter,
      scopedCSS: scopedCSS
    };
    proxyAttachContainerConfigMap.set(proxy, containerConfig);
  } // all dynamic style sheets are stored in proxy container


  var _containerConfig = containerConfig,
      dynamicStyleSheetElements = _containerConfig.dynamicStyleSheetElements;
  var unpatchDocumentCreate = patchDocumentCreateElement();
  var unpatchDynamicAppendPrototypeFunctions = (0,_common__WEBPACK_IMPORTED_MODULE_0__.patchHTMLDynamicAppendPrototypeFunctions)(function (element) {
    return elementAttachContainerConfigMap.has(element);
  }, function (element) {
    return elementAttachContainerConfigMap.get(element);
  });
  if (!mounting) bootstrappingPatchCount++;
  if (mounting) mountingPatchCount++;
  return function free() {
    // bootstrap patch just called once but its freer will be called multiple times
    if (!mounting && bootstrappingPatchCount !== 0) bootstrappingPatchCount--;
    if (mounting) mountingPatchCount--;
    var allMicroAppUnmounted = mountingPatchCount === 0 && bootstrappingPatchCount === 0; // release the overwrite prototype after all the micro apps unmounted

    if (allMicroAppUnmounted) {
      unpatchDynamicAppendPrototypeFunctions();
      unpatchDocumentCreate();
    }

    (0,_common__WEBPACK_IMPORTED_MODULE_0__.recordStyledComponentsCSSRules)(dynamicStyleSheetElements); // As now the sub app content all wrapped with a special id container,
    // the dynamic style sheet would be removed automatically while unmoutting

    return function rebuild() {
      (0,_common__WEBPACK_IMPORTED_MODULE_0__.rebuildCSSRules)(dynamicStyleSheetElements, function (stylesheetElement) {
        var appWrapper = appWrapperGetter();

        if (!appWrapper.contains(stylesheetElement)) {
          _common__WEBPACK_IMPORTED_MODULE_0__.rawHeadAppendChild.call(appWrapper, stylesheetElement);
          return true;
        }

        return false;
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/historyListener.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/historyListener.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ patch)
/* harmony export */ });
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);


function patch() {
  // FIXME umi unmount feature request
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var rawHistoryListen = function rawHistoryListen(_) {
    return (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default());
  };

  var historyListeners = [];
  var historyUnListens = [];

  if (window.g_history && lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(window.g_history.listen)) {
    rawHistoryListen = window.g_history.listen.bind(window.g_history);

    window.g_history.listen = function (listener) {
      historyListeners.push(listener);
      var unListen = rawHistoryListen(listener);
      historyUnListens.push(unListen);
      return function () {
        unListen();
        historyUnListens.splice(historyUnListens.indexOf(unListen), 1);
        historyListeners.splice(historyListeners.indexOf(listener), 1);
      };
    };
  }

  return function free() {
    var rebuild = (lodash_noop__WEBPACK_IMPORTED_MODULE_1___default());
    /*
     还存在余量 listener 表明未被卸载，存在两种情况
     1. 应用在 unmout 时未正确卸载 listener
     2. listener 是应用 mount 之前绑定的，
     第二种情况下应用在下次 mount 之前需重新绑定该 listener
     */

    if (historyListeners.length) {
      rebuild = function rebuild() {
        // 必须使用 window.g_history.listen 的方式重新绑定 listener，从而能保证 rebuild 这部分也能被捕获到，否则在应用卸载后无法正确的移除这部分副作用
        historyListeners.forEach(function (listener) {
          return window.g_history.listen(listener);
        });
      };
    } // 卸载余下的 listener


    historyUnListens.forEach(function (unListen) {
      return unListen();
    }); // restore

    if (window.g_history && lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(window.g_history.listen)) {
      window.g_history.listen = rawHistoryListen;
    }

    return rebuild;
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patchAtMounting": () => (/* binding */ patchAtMounting),
/* harmony export */   "patchAtBootstrapping": () => (/* binding */ patchAtBootstrapping),
/* harmony export */   "css": () => (/* reexport module object */ _css__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interfaces */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/interfaces.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/css.js");
/* harmony import */ var _dynamicAppend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicAppend */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/forLooseSandbox.js");
/* harmony import */ var _dynamicAppend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicAppend */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/dynamicAppend/forStrictSandbox.js");
/* harmony import */ var _historyListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historyListener */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/historyListener.js");
/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interval */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/interval.js");
/* harmony import */ var _windowListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowListener */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/windowListener.js");


/**
 * @author Kuitos
 * @since 2019-04-11
 */






function patchAtMounting(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter) {
  var _patchersInSandbox;

  var _a;

  var basePatchers = [function () {
    return (0,_interval__WEBPACK_IMPORTED_MODULE_1__.default)(sandbox.proxy);
  }, function () {
    return (0,_windowListener__WEBPACK_IMPORTED_MODULE_2__.default)(sandbox.proxy);
  }, function () {
    return (0,_historyListener__WEBPACK_IMPORTED_MODULE_3__.default)();
  }];
  var patchersInSandbox = (_patchersInSandbox = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_patchersInSandbox, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.LegacyProxy, [].concat(basePatchers, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox.proxy, true, scopedCSS, excludeAssetFilter);
  }])), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_patchersInSandbox, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Proxy, [].concat(basePatchers, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_6__.patchStrictSandbox)(appName, elementGetter, sandbox.proxy, true, scopedCSS, excludeAssetFilter);
  }])), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_patchersInSandbox, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Snapshot, [].concat(basePatchers, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox.proxy, true, scopedCSS, excludeAssetFilter);
  }])), _patchersInSandbox);
  return (_a = patchersInSandbox[sandbox.type]) === null || _a === void 0 ? void 0 : _a.map(function (patch) {
    return patch();
  });
}
function patchAtBootstrapping(appName, elementGetter, sandbox, scopedCSS, excludeAssetFilter) {
  var _patchersInSandbox2;

  var _a;

  var patchersInSandbox = (_patchersInSandbox2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_patchersInSandbox2, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.LegacyProxy, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox.proxy, false, scopedCSS, excludeAssetFilter);
  }]), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_patchersInSandbox2, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Proxy, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_6__.patchStrictSandbox)(appName, elementGetter, sandbox.proxy, false, scopedCSS, excludeAssetFilter);
  }]), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_patchersInSandbox2, _interfaces__WEBPACK_IMPORTED_MODULE_4__.SandBoxType.Snapshot, [function () {
    return (0,_dynamicAppend__WEBPACK_IMPORTED_MODULE_5__.patchLooseSandbox)(appName, elementGetter, sandbox.proxy, false, scopedCSS, excludeAssetFilter);
  }]), _patchersInSandbox2);
  return (_a = patchersInSandbox[sandbox.type]) === null || _a === void 0 ? void 0 : _a.map(function (patch) {
    return patch();
  });
}


/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/interval.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/interval.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ patch)
/* harmony export */ });
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/noop */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var rawWindowInterval = window.setInterval;
var rawWindowClearInterval = window.clearInterval;
function patch(global) {
  var intervals = [];

  global.clearInterval = function (intervalId) {
    intervals = intervals.filter(function (id) {
      return id !== intervalId;
    });
    return rawWindowClearInterval(intervalId);
  };

  global.setInterval = function (handler, timeout) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var intervalId = rawWindowInterval.apply(void 0, [handler, timeout].concat(args));
    intervals = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(intervals), [intervalId]);
    return intervalId;
  };

  return function free() {
    intervals.forEach(function (id) {
      return global.clearInterval(id);
    });
    global.setInterval = rawWindowInterval;
    global.clearInterval = rawWindowClearInterval;
    return (lodash_noop__WEBPACK_IMPORTED_MODULE_0___default());
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/windowListener.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/patchers/windowListener.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ patch)
/* harmony export */ });
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/noop */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");


var rawAddEventListener = window.addEventListener;
var rawRemoveEventListener = window.removeEventListener;
function patch(global) {
  var listenerMap = new Map();

  global.addEventListener = function (type, listener, options) {
    var listeners = listenerMap.get(type) || [];
    listenerMap.set(type, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(listeners), [listener]));
    return rawAddEventListener.call(window, type, listener, options);
  };

  global.removeEventListener = function (type, listener, options) {
    var storedTypeListeners = listenerMap.get(type);

    if (storedTypeListeners && storedTypeListeners.length && storedTypeListeners.indexOf(listener) !== -1) {
      storedTypeListeners.splice(storedTypeListeners.indexOf(listener), 1);
    }

    return rawRemoveEventListener.call(window, type, listener, options);
  };

  return function free() {
    listenerMap.forEach(function (listeners, type) {
      return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(listeners).forEach(function (listener) {
        return global.removeEventListener(type, listener);
      });
    });
    global.addEventListener = rawAddEventListener;
    global.removeEventListener = rawRemoveEventListener;
    return (lodash_noop__WEBPACK_IMPORTED_MODULE_0___default());
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/proxySandbox.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/proxySandbox.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProxySandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/interfaces.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/utils.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/common.js");






/**
 * fastest(at most time) unique array method
 * @see https://jsperf.com/array-filter-unique/30
 */

function uniq(array) {
  return array.filter(function filter(element) {
    return element in this ? false : this[element] = true;
  }, Object.create(null));
} // zone.js will overwrite Object.defineProperty


var rawObjectDefineProperty = Object.defineProperty;
var variableWhiteListInDev =  true ? [// for react hot reload
// see https://github.com/facebook/create-react-app/blob/66bf7dfc43350249e2f09d138a20840dae8a0a4a/packages/react-error-overlay/src/index.js#L180
'__REACT_ERROR_OVERLAY_GLOBAL_HOOK__'] : 0; // who could escape the sandbox

var variableWhiteList = [// FIXME System.js used a indirect call with eval, which would make it scope escape to global
// To make System.js works well, we write it back to global window temporary
// see https://github.com/systemjs/systemjs/blob/457f5b7e8af6bd120a279540477552a07d5de086/src/evaluate.js#L106
'System', // see https://github.com/systemjs/systemjs/blob/457f5b7e8af6bd120a279540477552a07d5de086/src/instantiate.js#L357
'__cjsWrapper'].concat(variableWhiteListInDev);
/*
 variables who are impossible to be overwrite need to be escaped from proxy sandbox for performance reasons
 */

var unscopables = {
  undefined: true,
  Array: true,
  Object: true,
  String: true,
  Boolean: true,
  Math: true,
  Number: true,
  Symbol: true,
  parseFloat: true,
  Float32Array: true
};

function createFakeWindow(global) {
  // map always has the fastest performance in has check scenario
  // see https://jsperf.com/array-indexof-vs-set-has/23
  var propertiesWithGetter = new Map();
  var fakeWindow = {};
  /*
   copy the non-configurable property of global to fakeWindow
   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
   > A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.
   */

  Object.getOwnPropertyNames(global).filter(function (p) {
    var descriptor = Object.getOwnPropertyDescriptor(global, p);
    return !(descriptor === null || descriptor === void 0 ? void 0 : descriptor.configurable);
  }).forEach(function (p) {
    var descriptor = Object.getOwnPropertyDescriptor(global, p);

    if (descriptor) {
      var hasGetter = Object.prototype.hasOwnProperty.call(descriptor, 'get');
      /*
       make top/self/window property configurable and writable, otherwise it will cause TypeError while get trap return.
       see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get
       > The value reported for a property must be the same as the value of the corresponding target object property if the target object property is a non-writable, non-configurable data property.
       */

      if (p === 'top' || p === 'parent' || p === 'self' || p === 'window' ||  false && (0)) {
        descriptor.configurable = true;
        /*
         The descriptor of window.window/window.top/window.self in Safari/FF are accessor descriptors, we need to avoid adding a data descriptor while it was
         Example:
          Safari/FF: Object.getOwnPropertyDescriptor(window, 'top') -> {get: function, set: undefined, enumerable: true, configurable: false}
          Chrome: Object.getOwnPropertyDescriptor(window, 'top') -> {value: Window, writable: false, enumerable: true, configurable: false}
         */

        if (!hasGetter) {
          descriptor.writable = true;
        }
      }

      if (hasGetter) propertiesWithGetter.set(p, true); // freeze the descriptor to avoid being modified by zone.js
      // see https://github.com/angular/zone.js/blob/a5fe09b0fac27ac5df1fa746042f96f05ccb6a00/lib/browser/define-property.ts#L71

      rawObjectDefineProperty(fakeWindow, p, Object.freeze(descriptor));
    }
  });
  return {
    fakeWindow: fakeWindow,
    propertiesWithGetter: propertiesWithGetter
  };
}

var activeSandboxCount = 0;
/**
 * 基于 Proxy 实现的沙箱
 */

var ProxySandbox = /*#__PURE__*/function () {
  function ProxySandbox(name) {
    var _this = this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ProxySandbox);

    /** window 值变更记录 */
    this.updatedValueSet = new Set();
    this.sandboxRunning = true;
    this.latestSetProp = null;
    this.name = name;
    this.type = _interfaces__WEBPACK_IMPORTED_MODULE_3__.SandBoxType.Proxy;
    var updatedValueSet = this.updatedValueSet;
    var rawWindow = window;

    var _createFakeWindow = createFakeWindow(rawWindow),
        fakeWindow = _createFakeWindow.fakeWindow,
        propertiesWithGetter = _createFakeWindow.propertiesWithGetter;

    var descriptorTargetMap = new Map();

    var hasOwnProperty = function hasOwnProperty(key) {
      return fakeWindow.hasOwnProperty(key) || rawWindow.hasOwnProperty(key);
    };

    var proxy = new Proxy(fakeWindow, {
      set: function set(target, p, value) {
        if (_this.sandboxRunning) {
          // We must kept its description while the property existed in rawWindow before
          if (!target.hasOwnProperty(p) && rawWindow.hasOwnProperty(p)) {
            var descriptor = Object.getOwnPropertyDescriptor(rawWindow, p);
            var writable = descriptor.writable,
                configurable = descriptor.configurable,
                enumerable = descriptor.enumerable;

            if (writable) {
              Object.defineProperty(target, p, {
                configurable: configurable,
                enumerable: enumerable,
                writable: writable,
                value: value
              });
            }
          } else {
            // @ts-ignore
            target[p] = value;
          }

          if (variableWhiteList.indexOf(p) !== -1) {
            // @ts-ignore
            rawWindow[p] = value;
          }

          updatedValueSet.add(p);
          _this.latestSetProp = p;
          return true;
        }

        if (true) {
          console.warn("[qiankun] Set window.".concat(p.toString(), " while sandbox destroyed or inactive in ").concat(name, "!"));
        } // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误


        return true;
      },
      get: function get(target, p) {
        if (p === Symbol.unscopables) return unscopables; // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13

        if (p === 'window' || p === 'self') {
          return proxy;
        } // hijack global accessing with globalThis keyword


        if (p === 'globalThis') {
          return proxy;
        }

        if (p === 'top' || p === 'parent' ||  false && (0)) {
          // if your master app in an iframe context, allow these props escape the sandbox
          if (rawWindow === rawWindow.parent) {
            return proxy;
          }

          return rawWindow[p];
        } // proxy.hasOwnProperty would invoke getter firstly, then its value represented as rawWindow.hasOwnProperty


        if (p === 'hasOwnProperty') {
          return hasOwnProperty;
        } // mark the symbol to document while accessing as document.createElement could know is invoked by which sandbox for dynamic append patcher


        if (p === 'document' || p === 'eval') {
          (0,_common__WEBPACK_IMPORTED_MODULE_4__.setCurrentRunningSandboxProxy)(proxy); // FIXME if you have any other good ideas
          // remove the mark in next tick, thus we can identify whether it in micro app or not
          // this approach is just a workaround, it could not cover all complex cases, such as the micro app runs in the same task context with master in some case

          (0,_utils__WEBPACK_IMPORTED_MODULE_5__.nextTick)(function () {
            return (0,_common__WEBPACK_IMPORTED_MODULE_4__.setCurrentRunningSandboxProxy)(null);
          });

          switch (p) {
            case 'document':
              return document;

            case 'eval':
              // eslint-disable-next-line no-eval
              return eval;
            // no default
          }
        } // eslint-disable-next-line no-nested-ternary


        var value = propertiesWithGetter.has(p) ? rawWindow[p] : p in target ? target[p] : rawWindow[p];
        return (0,_common__WEBPACK_IMPORTED_MODULE_4__.getTargetValue)(rawWindow, value);
      },
      // trap in operator
      // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
      has: function has(target, p) {
        return p in unscopables || p in target || p in rawWindow;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, p) {
        /*
         as the descriptor of top/self/window/mockTop in raw window are configurable but not in proxy target, we need to get it from target to avoid TypeError
         see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
         > A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.
         */
        if (target.hasOwnProperty(p)) {
          var descriptor = Object.getOwnPropertyDescriptor(target, p);
          descriptorTargetMap.set(p, 'target');
          return descriptor;
        }

        if (rawWindow.hasOwnProperty(p)) {
          var _descriptor = Object.getOwnPropertyDescriptor(rawWindow, p);

          descriptorTargetMap.set(p, 'rawWindow'); // A property cannot be reported as non-configurable, if it does not exists as an own property of the target object

          if (_descriptor && !_descriptor.configurable) {
            _descriptor.configurable = true;
          }

          return _descriptor;
        }

        return undefined;
      },
      // trap to support iterator with sandbox
      ownKeys: function ownKeys(target) {
        return uniq(Reflect.ownKeys(rawWindow).concat(Reflect.ownKeys(target)));
      },
      defineProperty: function defineProperty(target, p, attributes) {
        var from = descriptorTargetMap.get(p);
        /*
         Descriptor must be defined to native window while it comes from native window via Object.getOwnPropertyDescriptor(window, p),
         otherwise it would cause a TypeError with illegal invocation.
         */

        switch (from) {
          case 'rawWindow':
            return Reflect.defineProperty(rawWindow, p, attributes);

          default:
            return Reflect.defineProperty(target, p, attributes);
        }
      },
      deleteProperty: function deleteProperty(target, p) {
        if (target.hasOwnProperty(p)) {
          // @ts-ignore
          delete target[p];
          updatedValueSet.delete(p);
          return true;
        }

        return true;
      }
    });
    this.proxy = proxy;
    activeSandboxCount++;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ProxySandbox, [{
    key: "active",
    value: function active() {
      if (!this.sandboxRunning) activeSandboxCount++;
      this.sandboxRunning = true;
    }
  }, {
    key: "inactive",
    value: function inactive() {
      var _this2 = this;

      if (true) {
        console.info("[qiankun:sandbox] ".concat(this.name, " modified global properties restore..."), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.updatedValueSet.keys()));
      }

      if (--activeSandboxCount === 0) {
        variableWhiteList.forEach(function (p) {
          if (_this2.proxy.hasOwnProperty(p)) {
            // @ts-ignore
            delete window[p];
          }
        });
      }

      this.sandboxRunning = false;
    }
  }]);

  return ProxySandbox;
}();



/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/snapshotSandbox.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/sandbox/snapshotSandbox.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SnapshotSandbox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/interfaces.js");




function iter(obj, callbackFn) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      callbackFn(prop);
    }
  }
}
/**
 * 基于 diff 方式实现的沙箱，用于不支持 Proxy 的低版本浏览器
 */


var SnapshotSandbox = /*#__PURE__*/function () {
  function SnapshotSandbox(name) {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SnapshotSandbox);

    this.sandboxRunning = true;
    this.modifyPropsMap = {};
    this.name = name;
    this.proxy = window;
    this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.SandBoxType.Snapshot;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SnapshotSandbox, [{
    key: "active",
    value: function active() {
      var _this = this;

      // 记录当前快照
      this.windowSnapshot = {};
      iter(window, function (prop) {
        _this.windowSnapshot[prop] = window[prop];
      }); // 恢复之前的变更

      Object.keys(this.modifyPropsMap).forEach(function (p) {
        window[p] = _this.modifyPropsMap[p];
      });
      this.sandboxRunning = true;
    }
  }, {
    key: "inactive",
    value: function inactive() {
      var _this2 = this;

      this.modifyPropsMap = {};
      iter(window, function (prop) {
        if (window[prop] !== _this2.windowSnapshot[prop]) {
          // 记录变更，恢复环境
          _this2.modifyPropsMap[prop] = window[prop];
          window[prop] = _this2.windowSnapshot[prop];
        }
      });

      if (true) {
        console.info("[qiankun:sandbox] ".concat(this.name, " origin window restore..."), Object.keys(this.modifyPropsMap));
      }

      this.sandboxRunning = false;
    }
  }]);

  return SnapshotSandbox;
}();



/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/utils.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/utils.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "isConstructable": () => (/* binding */ isConstructable),
/* harmony export */   "isCallable": () => (/* binding */ isCallable),
/* harmony export */   "isBoundedFunction": () => (/* binding */ isBoundedFunction),
/* harmony export */   "getDefaultTplWrapper": () => (/* binding */ getDefaultTplWrapper),
/* harmony export */   "getWrapperId": () => (/* binding */ getWrapperId),
/* harmony export */   "validateExportLifecycle": () => (/* binding */ validateExportLifecycle),
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "performanceGetEntriesByName": () => (/* binding */ performanceGetEntriesByName),
/* harmony export */   "performanceMark": () => (/* binding */ performanceMark),
/* harmony export */   "performanceMeasure": () => (/* binding */ performanceMeasure),
/* harmony export */   "isEnableScopedCSS": () => (/* binding */ isEnableScopedCSS),
/* harmony export */   "getXPathForElement": () => (/* binding */ getXPathForElement),
/* harmony export */   "getContainer": () => (/* binding */ getContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/.pnpm/registry.nlark.com+@babel+runtime@7.14.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/snakeCase */ "./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/snakeCase.js");
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_3__);




function toArray(array) {
  return Array.isArray(array) ? array : [array];
}
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
/**
 * run a callback after next tick
 * @param cb
 */

function nextTick(cb) {
  Promise.resolve().then(cb);
}
var fnRegexCheckCacheMap = new WeakMap();
function isConstructable(fn) {
  // prototype methods might be changed while code running, so we need check it every time
  var hasPrototypeMethods = fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
  if (hasPrototypeMethods) return true;

  if (fnRegexCheckCacheMap.has(fn)) {
    return fnRegexCheckCacheMap.get(fn);
  }
  /*
    1. 有 prototype 并且 prototype 上有定义一系列非 constructor 属性
    2. 函数名大写开头
    3. class 函数
    满足其一则可认定为构造函数
   */


  var constructable = hasPrototypeMethods;

  if (!constructable) {
    // fn.toString has a significant performance overhead, if hasPrototypeMethods check not passed, we will check the function string with regex
    var fnString = fn.toString();
    var constructableFunctionRegex = /^function\b\s[A-Z].*/;
    var classRegex = /^class\b/;
    constructable = constructableFunctionRegex.test(fnString) || classRegex.test(fnString);
  }

  fnRegexCheckCacheMap.set(fn, constructable);
  return constructable;
}
/**
 * in safari
 * typeof document.all === 'undefined' // true
 * typeof document.all === 'function' // true
 * We need to discriminate safari for better performance
 */

var naughtySafari = typeof document.all === 'function' && typeof document.all === 'undefined';
var callableFnCacheMap = new WeakMap();
var isCallable = function isCallable(fn) {
  if (callableFnCacheMap.has(fn)) {
    return true;
  }

  var callable = naughtySafari ? typeof fn === 'function' && typeof fn !== 'undefined' : typeof fn === 'function';

  if (callable) {
    callableFnCacheMap.set(fn, callable);
  }

  return callable;
};
var boundedMap = new WeakMap();
function isBoundedFunction(fn) {
  if (boundedMap.has(fn)) {
    return boundedMap.get(fn);
  }
  /*
   indexOf is faster than startsWith
   see https://jsperf.com/string-startswith/72
   */


  var bounded = fn.name.indexOf('bound ') === 0 && !fn.hasOwnProperty('prototype');
  boundedMap.set(fn, bounded);
  return bounded;
}
function getDefaultTplWrapper(id, name) {
  return function (tpl) {
    return "<div id=\"".concat(getWrapperId(id), "\" data-name=\"").concat(name, "\">").concat(tpl, "</div>");
  };
}
function getWrapperId(id) {
  return "__qiankun_microapp_wrapper_for_".concat(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_3___default()(id), "__");
}
/** 校验子应用导出的 生命周期 对象是否正确 */

function validateExportLifecycle(exports) {
  var _ref = exports !== null && exports !== void 0 ? exports : {},
      bootstrap = _ref.bootstrap,
      mount = _ref.mount,
      unmount = _ref.unmount;

  return lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(bootstrap) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(mount) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(unmount);
}

var Deferred = function Deferred() {
  var _this = this;

  (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Deferred);

  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
};


var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function' && typeof performance.getEntriesByName === 'function';
function performanceGetEntriesByName(markName, type) {
  var marks = null;

  if (supportsUserTiming) {
    marks = performance.getEntriesByName(markName, type);
  }

  return marks;
}
function performanceMark(markName) {
  if (supportsUserTiming) {
    performance.mark(markName);
  }
}
function performanceMeasure(measureName, markName) {
  if (supportsUserTiming && performance.getEntriesByName(markName, 'mark').length) {
    performance.measure(measureName, markName);
    performance.clearMarks(markName);
    performance.clearMeasures(measureName);
  }
}
function isEnableScopedCSS(sandbox) {
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(sandbox) !== 'object') {
    return false;
  }

  if (sandbox.strictStyleIsolation) {
    return false;
  }

  return !!sandbox.experimentalStyleIsolation;
}
/**
 * copy from https://developer.mozilla.org/zh-CN/docs/Using_XPath
 * @param el
 * @param document
 */

function getXPathForElement(el, document) {
  // not support that if el not existed in document yet(such as it not append to document before it mounted)
  if (!document.body.contains(el)) {
    return undefined;
  }

  var xpath = '';
  var pos;
  var tmpEle;
  var element = el;

  while (element !== document.documentElement) {
    pos = 0;
    tmpEle = element;

    while (tmpEle) {
      if (tmpEle.nodeType === 1 && tmpEle.nodeName === element.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }

      tmpEle = tmpEle.previousSibling;
    }

    xpath = "*[name()='".concat(element.nodeName, "' and namespace-uri()='").concat(element.namespaceURI === null ? '' : element.namespaceURI, "'][").concat(pos, "]/").concat(xpath);
    element = element.parentNode;
  }

  xpath = "/*[name()='".concat(document.documentElement.nodeName, "' and namespace-uri()='").concat(element.namespaceURI === null ? '' : element.namespaceURI, "']/").concat(xpath);
  xpath = xpath.replace(/\/$/, '');
  return xpath;
}
function getContainer(container) {
  return typeof container === 'string' ? document.querySelector(container) : container;
}

/***/ }),

/***/ "./node_modules/.pnpm/registry.nlark.com+single-spa@5.9.2/node_modules/single-spa/lib/esm/single-spa.min.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/registry.nlark.com+single-spa@5.9.2/node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOTSTRAPPING": () => (/* binding */ v),
/* harmony export */   "LOADING_SOURCE_CODE": () => (/* binding */ h),
/* harmony export */   "LOAD_ERROR": () => (/* binding */ O),
/* harmony export */   "MOUNTED": () => (/* binding */ g),
/* harmony export */   "MOUNTING": () => (/* binding */ w),
/* harmony export */   "NOT_BOOTSTRAPPED": () => (/* binding */ m),
/* harmony export */   "NOT_LOADED": () => (/* binding */ p),
/* harmony export */   "NOT_MOUNTED": () => (/* binding */ d),
/* harmony export */   "SKIP_BECAUSE_BROKEN": () => (/* binding */ P),
/* harmony export */   "UNMOUNTING": () => (/* binding */ y),
/* harmony export */   "UPDATING": () => (/* binding */ E),
/* harmony export */   "addErrorHandler": () => (/* binding */ c),
/* harmony export */   "checkActivityFunctions": () => (/* binding */ Tt),
/* harmony export */   "ensureJQuerySupport": () => (/* binding */ lt),
/* harmony export */   "getAppNames": () => (/* binding */ Ot),
/* harmony export */   "getAppStatus": () => (/* binding */ Pt),
/* harmony export */   "getMountedApps": () => (/* binding */ yt),
/* harmony export */   "mountRootParcel": () => (/* binding */ W),
/* harmony export */   "navigateToUrl": () => (/* binding */ et),
/* harmony export */   "pathToActiveWhen": () => (/* binding */ Dt),
/* harmony export */   "registerApplication": () => (/* binding */ bt),
/* harmony export */   "removeErrorHandler": () => (/* binding */ s),
/* harmony export */   "setBootstrapMaxTime": () => (/* binding */ J),
/* harmony export */   "setMountMaxTime": () => (/* binding */ H),
/* harmony export */   "setUnloadMaxTime": () => (/* binding */ V),
/* harmony export */   "setUnmountMaxTime": () => (/* binding */ Q),
/* harmony export */   "start": () => (/* binding */ Bt),
/* harmony export */   "triggerAppChange": () => (/* binding */ Lt),
/* harmony export */   "unloadApplication": () => (/* binding */ Nt),
/* harmony export */   "unregisterApplication": () => (/* binding */ At)
/* harmony export */ });
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "./node_modules/.pnpm/registry.nlark.com+single-spa@5.9.2/node_modules/single-spa/lib/esm/single-spa.min.js");
/* single-spa@5.9.2 - ESM - prod */
var n=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return lt},get setBootstrapMaxTime(){return J},get setMountMaxTime(){return H},get setUnmountMaxTime(){return Q},get setUnloadMaxTime(){return V},get registerApplication(){return bt},get unregisterApplication(){return At},get getMountedApps(){return yt},get getAppStatus(){return Pt},get unloadApplication(){return Nt},get checkActivityFunctions(){return Tt},get getAppNames(){return Ot},get pathToActiveWhen(){return Dt},get navigateToUrl(){return et},get triggerAppChange(){return Lt},get addErrorHandler(){return c},get removeErrorHandler(){return s},get mountRootParcel(){return W},get NOT_LOADED(){return p},get LOADING_SOURCE_CODE(){return h},get NOT_BOOTSTRAPPED(){return m},get BOOTSTRAPPING(){return v},get NOT_MOUNTED(){return d},get MOUNTING(){return w},get UPDATING(){return E},get LOAD_ERROR(){return O},get MOUNTED(){return g},get UNMOUNTING(){return y},get SKIP_BECAUSE_BROKEN(){return P}});function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{}).CustomEvent,i=function(){try{var t=new o("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?o:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},u=[];function a(t,n,e){var r=l(t,n,e);u.length?u.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function c(t){if("function"!=typeof t)throw Error(f(28,!1));u.push(t)}function s(t){if("function"!=typeof t)throw Error(f(29,!1));var n=!1;return u=u.filter((function(e){var r=e===t;return n=n||r,!r})),n}function f(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function l(t,n,e){var r,o="".concat(S(n)," '").concat(A(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(f(30,!1,n.status,A(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=A(n),n.status=e,r}var p="NOT_LOADED",h="LOADING_SOURCE_CODE",m="NOT_BOOTSTRAPPED",v="BOOTSTRAPPING",d="NOT_MOUNTED",w="MOUNTING",g="MOUNTED",E="UPDATING",y="UNMOUNTING",O="LOAD_ERROR",P="SKIP_BECAUSE_BROKEN";function b(t){return t.status===g}function T(t){try{return t.activeWhen(window.location)}catch(n){return a(n,t,P),!1}}function A(t){return t.name}function N(t){return Boolean(t.unmountThisParcel)}function S(t){return N(t)?"parcel":"application"}function _(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function D(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function U(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!D(n,(function(t){return"function"!=typeof t}))));var n}function j(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=S(t),o=A(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return M(e)?e:Promise.reject(f(15,!1,r,o,n,u))}))}),Promise.resolve())}}function M(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function L(t,n){return Promise.resolve().then((function(){return t.status!==m?t:(t.status=v,t.bootstrap?q(t,"bootstrap").then(e).catch((function(e){if(n)throw l(e,t,P);return a(e,t,P),t})):Promise.resolve().then(e))}));function e(){return t.status=d,t}}function R(t,n){return Promise.resolve().then((function(){if(t.status!==g)return t;t.status=y;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw l(r,t,P);a(r,t,P)}))})).then((function(){return t}));function r(){return q(t,"unmount").then((function(){t.status=d})).catch((function(e){if(n)throw l(e,t,P);a(e,t,P)}))}}))}var I=!1,x=!1;function B(t,n){return Promise.resolve().then((function(){return t.status!==d?t:(I||(window.dispatchEvent(new i("single-spa:before-first-mount")),I=!0),q(t,"mount").then((function(){return t.status=g,x||(window.dispatchEvent(new i("single-spa:first-mount")),x=!0),t})).catch((function(e){return t.status=g,R(t,!0).then(r,r);function r(){if(n)throw l(e,t,P);return a(e,t,P),t}})))}))}var G=0,C={parcels:{}};function W(){return $.apply(C,arguments)}function $(t,n){var r=this;if(!t||"object"!==e(t)&&"function"!=typeof t)throw Error(f(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(f(3,!1,e(t.name)));if("object"!==e(n))throw Error(f(4,!1,name,e(n)));if(!n.domElement)throw Error(f(5,!1,name));var o,i=G++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?h:m,customProps:n,parentName:A(r),unmountThisParcel:function(){return y.then((function(){if(c.status!==g)throw Error(f(6,!1,name,c.status));return R(c,!0)})).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return p(t),t})).catch((function(t){throw c.status=P,v(t),t}))}};r.parcels[i]=c;var s=a();if(!s||"function"!=typeof s.then)throw Error(f(7,!1));var p,v,w=(s=s.then((function(t){if(!t)throw Error(f(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!U(t.bootstrap))throw Error(f(9,!1,n));if(!U(t.mount))throw Error(f(10,!1,n));if(!U(t.unmount))throw Error(f(11,!1,n));if(t.update&&!U(t.update))throw Error(f(12,!1,n));var e=j(t,"bootstrap"),r=j(t,"mount"),u=j(t,"unmount");c.status=m,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=z(t.timeouts),t.update&&(c.update=j(t,"update"),o.update=function(t){return c.customProps=t,k(function(t){return Promise.resolve().then((function(){if(t.status!==g)throw Error(f(32,!1,A(t)));return t.status=E,q(t,"update").then((function(){return t.status=g,t})).catch((function(n){throw l(n,t,P)}))}))}(c))})}))).then((function(){return L(c,!0)})),y=w.then((function(){return B(c,!0)})),O=new Promise((function(t,n){p=t,v=n}));return o={mount:function(){return k(Promise.resolve().then((function(){if(c.status!==d)throw Error(f(13,!1,name,c.status));return r.parcels[i]=c,B(c)})))},unmount:function(){return k(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:k(s),bootstrapPromise:k(w),mountPromise:k(y),unmountPromise:k(O)}}function k(t){return t.then((function(){return null}))}function K(t){var r=A(t),o="function"==typeof t.customProps?t.customProps(r,window.location):t.customProps;("object"!==e(o)||null===o||Array.isArray(o))&&(o={},console.warn(f(40,!1),r,o));var i=_({},o,{name:r,mountParcel:$.bind(t),singleSpa:n});return N(t)&&(i.unmountSelf=t.unmountThisParcel),i}var F={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function J(t,n,e){if("number"!=typeof t||t<=0)throw Error(f(16,!1));F.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function H(t,n,e){if("number"!=typeof t||t<=0)throw Error(f(17,!1));F.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(f(18,!1));F.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n,e){if("number"!=typeof t||t<=0)throw Error(f(19,!1));F.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function q(t,n){var e=t.timeouts[n],r=e.warningMillis,o=S(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](K(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),e.millis);var s=f(31,!1,n,o,A(t),e.millis);function l(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(s)):console.error(s);else if(!c){var n=t,o=n*r;console.warn(s),o+r<e.millis&&setTimeout((function(){return l(n+1)}),r)}}}))}function z(t){var n={};for(var e in F)n[e]=_({},F[e],t&&t[e]||{});return n}function X(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==p&&t.status!==O?t:(t.status=h,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(K(t));if(!M(o))throw r=!0,Error(f(33,!1,A(t)));return o.then((function(r){var o;t.loadErrorTime=null,"object"!==e(n=r)&&(o=34),Object.prototype.hasOwnProperty.call(n,"bootstrap")&&!U(n.bootstrap)&&(o=35),U(n.mount)||(o=36),U(n.unmount)||(o=37);var i=S(n);if(o){var u;try{u=JSON.stringify(n)}catch(t){}return console.error(f(o,!1,i,A(t),u),n),a(void 0,t,P),t}return n.devtools&&n.devtools.overlays&&(t.devtools.overlays=_({},t.devtools.overlays,n.devtools.overlays)),t.status=m,t.bootstrap=j(n,"bootstrap"),t.mount=j(n,"mount"),t.unmount=j(n,"unmount"),t.unload=j(n,"unload"),t.timeouts=z(n.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=P:(e=O,t.loadErrorTime=(new Date).getTime()),a(n,t,e),t})));var n,r}))}var Y,Z="undefined"!=typeof window,tt={hashchange:[],popstate:[]},nt=["hashchange","popstate"];function et(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(f(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=st(window.location.href),r=st(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function rt(t){var n=this;if(t){var e=t[0].type;nt.indexOf(e)>=0&&tt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function ot(){Rt([],arguments)}function it(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return Y&&e===o||(Gt()?window.dispatchEvent(ut(window.history.state,n)):Rt([])),r}}function ut(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(Z){window.addEventListener("hashchange",ot),window.addEventListener("popstate",ot);var at=window.addEventListener,ct=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0)||D(tt[t],(function(t){return t===n})))return at.apply(this,arguments);tt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0))return ct.apply(this,arguments);tt[t]=tt[t].filter((function(t){return t!==n}))},window.history.pushState=it(window.history.pushState,"pushState"),window.history.replaceState=it(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(f(41,!1)):window.singleSpaNavigate=et}function st(t){var n=document.createElement("a");return n.href=t,n}var ft=!1;function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return pt.call(this,e,window.removeEventListener,t,n,arguments)},ft=!0}}function pt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){nt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var ht={};function mt(n){return Promise.resolve().then((function(){var e=ht[A(n)];if(!e)return n;if(n.status===p)return vt(n,e),n;if("UNLOADING"===n.status)return e.promise.then((function(){return n}));if(n.status!==d&&n.status!==single_spa__WEBPACK_IMPORTED_MODULE_0__.LOAD_ERROR)return n;var r=n.status===single_spa__WEBPACK_IMPORTED_MODULE_0__.LOAD_ERROR?Promise.resolve():q(n,"unload");return n.status="UNLOADING",r.then((function(){return vt(n,e),n})).catch((function(t){return function(t,n,e){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,a(e,t,P),n.reject(e)}(n,e,t),n}))}))}function vt(t,n){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=p,n.resolve()}function dt(t,n,e,r){ht[A(t)]={app:t,resolve:e,reject:r},Object.defineProperty(ht[A(t)],"promise",{get:n})}function wt(t){return ht[t]}var gt=[];function Et(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return gt.forEach((function(i){var u=i.status!==P&&T(i);switch(i.status){case O:u&&o-i.loadErrorTime>=200&&e.push(i);break;case p:case h:u&&e.push(i);break;case m:case d:!u&&wt(A(i))?t.push(i):u&&r.push(i);break;case g:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function yt(){return gt.filter(b).map(A)}function Ot(){return gt.map(A)}function Pt(t){var n=D(gt,(function(n){return A(n)===t}));return n?n.status:null}function bt(t,n,r,o){var i=function(t,n,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===e(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(f(39,!1));var n=["name","app","activeWhen","customProps"],r=Object.keys(t).reduce((function(t,e){return n.indexOf(e)>=0?t:t.concat(e)}),[]);if(0!==r.length)throw Error(f(38,!1,n.join(", "),r.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(f(20,!1));if("object"!==e(t.app)&&"function"!=typeof t.app)throw Error(f(20,!1));var o=function(t){return"string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(f(24,!1));if(!_t(t.customProps))throw Error(f(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(f(20,!1));if(!n)throw Error(f(23,!1));if("function"!=typeof e)throw Error(f(24,!1));if(!_t(r))throw Error(f(22,!1))}(t,n,r,o),u.name=t,u.loadApp=n,u.activeWhen=r,u.customProps=o),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:Dt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,n,r,o);if(-1!==Ot().indexOf(i.name))throw Error(f(21,!1,i.name));gt.push(_({loadErrorTime:null,status:p,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),Z&&(lt(),Rt())}function Tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return gt.filter((function(n){return n.activeWhen(t)})).map(A)}function At(t){if(0===gt.filter((function(n){return A(n)===t})).length)throw Error(f(25,!1,t));return Nt(t).then((function(){var n=gt.map(A).indexOf(t);gt.splice(n,1)}))}function Nt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(f(26,!1));var e=D(gt,(function(n){return A(n)===t}));if(!e)throw Error(f(27,!1,t));var r,o=wt(A(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){dt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,St(e,o.resolve,o.reject)):r=new Promise((function(t,n){dt(e,(function(){return r}),t,n),St(e,t,n)})),r}function St(t,n,e){R(t).then(mt).then((function(){n(),setTimeout((function(){Rt()}))})).catch(e)}function _t(t){return!t||"function"==typeof t||"object"===e(t)&&null!==t&&!Array.isArray(t)}function Dt(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.href.replace(t.origin,"").replace(t.search,"").split("?")[0];return e.test(n)}}var Ut=!1,jt=[],Mt=Z&&window.location.href;function Lt(){return Rt()}function Rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Ut)return new Promise((function(t,e){jt.push({resolve:t,reject:e,eventArguments:n})}));var e,o=Et(),u=o.appsToUnload,a=o.appsToUnmount,c=o.appsToLoad,s=o.appsToMount,f=!1,l=Mt,h=Mt=window.location.href;return Gt()?(Ut=!0,e=u.concat(c,a,s),w()):(e=c,v());function m(){f=!0}function v(){return Promise.resolve().then((function(){var t=c.map(X);return Promise.all(t).then(y).then((function(){return[]})).catch((function(t){throw y(),t}))}))}function w(){return Promise.resolve().then((function(){if(window.dispatchEvent(new i(0===e.length?"single-spa:before-no-app-change":"single-spa:before-app-change",O(!0))),window.dispatchEvent(new i("single-spa:before-routing-event",O(!0,{cancelNavigation:m}))),f)return window.dispatchEvent(new i("single-spa:before-mount-routing-event",O(!0))),E(),void et(l);var n=u.map(mt),r=a.map(R).map((function(t){return t.then(mt)})).concat(n),o=Promise.all(r);o.then((function(){window.dispatchEvent(new i("single-spa:before-mount-routing-event",O(!0)))}));var p=c.map((function(t){return X(t).then((function(t){return It(t,o)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return It(t,o)}));return o.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(p.concat(h)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(E)}))}))}function E(){var n=yt();t.forEach((function(t){return t.resolve(n)}));try{var r=0===e.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new i(r,O())),window.dispatchEvent(new i("single-spa:routing-event",O()))}catch(t){setTimeout((function(){throw t}))}if(Ut=!1,jt.length>0){var o=jt;jt=[],Rt(o)}return n}function y(){t.forEach((function(t){rt(t.eventArguments)})),rt(n)}function O(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1?arguments[1]:void 0,m={},v=(r(t={},g,[]),r(t,d,[]),r(t,p,[]),r(t,P,[]),t);o?(c.concat(s).forEach((function(t,n){E(t,g)})),u.forEach((function(t){E(t,p)})),a.forEach((function(t){E(t,d)}))):e.forEach((function(t){E(t)}));var w={detail:{newAppStatuses:m,appsByNewStatus:v,totalAppChanges:e.length,originalEvent:null==n?void 0:n[0],oldUrl:l,newUrl:h,navigationIsCanceled:f}};return i&&_(w.detail,i),w;function E(t,n){var e=A(t);n=n||Pt(e),m[e]=n,(v[n]=v[n]||[]).push(e)}}}function It(t,n){return T(t)?L(t).then((function(t){return n.then((function(){return T(t)?B(t):t}))})):n.then((function(){return t}))}var xt=!1;function Bt(t){var n;xt=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,Y=n),Z&&Rt()}function Gt(){return xt}Z&&setTimeout((function(){xt||console.warn(f(1,!1))}),5e3);var Ct={getRawAppData:function(){return[].concat(gt)},reroute:Rt,NOT_LOADED:p,toLoadPromise:X,toBootstrapPromise:L,unregisterApplication:At};Z&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ct);
//# sourceMappingURL=single-spa.min.js.map


/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_37_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/.pnpm/style-loader@2.0.0_webpack@5.37.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.37.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_37_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_37_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/.pnpm/registry.nlark.com+css-loader@5.2.4_webpack@5.37.0/node_modules/css-loader/dist/cjs.js!./index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_37_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_registry_nlark_com_css_loader_5_2_4_webpack_5_37_0_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.37.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.37.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js":
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/tslib@1.14.1/node_modules/tslib/tslib.es6.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./index.css");
/* harmony import */ var qiankun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qiankun */ "./node_modules/.pnpm/registry.nlark.com+qiankun@2.4.1/node_modules/qiankun/es/apis.js");
 // 引入qiankun


var apps = [{
  name: 'vue2',
  entry: '//localhost:8080',
  // 容器的挂载节点
  container: '#app-main',
  // 子应用的激活规则
  activeRule: '/vue2'
}, {
  name: 'vue3',
  entry: '//localhost:8081',
  // 容器的挂载节点
  container: '#app-main',
  // 子应用的激活规则
  activeRule: '/vue3'
}]; // 注册应用

(0,qiankun__WEBPACK_IMPORTED_MODULE_1__.registerMicroApps)(apps); // 开启应用

(0,qiankun__WEBPACK_IMPORTED_MODULE_1__.start)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map