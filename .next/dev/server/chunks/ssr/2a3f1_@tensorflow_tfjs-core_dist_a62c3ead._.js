module.exports = [
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ /**
 * Shuffles the array in-place using Fisher-Yates algorithm.
 *
 * ```js
 * const a = [1, 2, 3, 4, 5];
 * tf.util.shuffle(a);
 * console.log(a);
 * ```
 *
 * @param array The array to shuffle in-place.
 *
 * @doc {heading: 'Util', namespace: 'util'}
 */ // tslint:disable-next-line:no-any
__turbopack_context__.s([
    "arraysEqual",
    ()=>arraysEqual,
    "arraysEqualWithNull",
    ()=>arraysEqualWithNull,
    "assert",
    ()=>assert,
    "assertNonNegativeIntegerDimensions",
    ()=>assertNonNegativeIntegerDimensions,
    "assertNonNull",
    ()=>assertNonNull,
    "assertShapesMatch",
    ()=>assertShapesMatch,
    "bytesFromStringArray",
    ()=>bytesFromStringArray,
    "bytesPerElement",
    ()=>bytesPerElement,
    "checkConversionForErrors",
    ()=>checkConversionForErrors,
    "clamp",
    ()=>clamp,
    "computeStrides",
    ()=>computeStrides,
    "convertBackendValuesAndArrayBuffer",
    ()=>convertBackendValuesAndArrayBuffer,
    "createShuffledIndices",
    ()=>createShuffledIndices,
    "distSquared",
    ()=>distSquared,
    "getArrayFromDType",
    ()=>getArrayFromDType,
    "getTypedArrayFromDType",
    ()=>getTypedArrayFromDType,
    "hasEncodingLoss",
    ()=>hasEncodingLoss,
    "indexToLoc",
    ()=>indexToLoc,
    "inferDtype",
    ()=>inferDtype,
    "inferFromImplicitShape",
    ()=>inferFromImplicitShape,
    "isBoolean",
    ()=>isBoolean,
    "isFunction",
    ()=>isFunction,
    "isInt",
    ()=>isInt,
    "isNumber",
    ()=>isNumber,
    "isPromise",
    ()=>isPromise,
    "isScalarShape",
    ()=>isScalarShape,
    "isString",
    ()=>isString,
    "isValidDtype",
    ()=>isValidDtype,
    "locToIndex",
    ()=>locToIndex,
    "makeOnesTypedArray",
    ()=>makeOnesTypedArray,
    "makeZerosNestedTypedArray",
    ()=>makeZerosNestedTypedArray,
    "makeZerosTypedArray",
    ()=>makeZerosTypedArray,
    "nearestDivisor",
    ()=>nearestDivisor,
    "nearestLargerEven",
    ()=>nearestLargerEven,
    "parseAxisParam",
    ()=>parseAxisParam,
    "randUniform",
    ()=>randUniform,
    "repeatedTry",
    ()=>repeatedTry,
    "rightPad",
    ()=>rightPad,
    "shuffle",
    ()=>shuffle,
    "shuffleCombo",
    ()=>shuffleCombo,
    "sizeFromShape",
    ()=>sizeFromShape,
    "sizeToSquarishShape",
    ()=>sizeToSquarishShape,
    "squeezeShape",
    ()=>squeezeShape,
    "sum",
    ()=>sum,
    "swap",
    ()=>swap,
    "tanh",
    ()=>tanh,
    "toNestedArray",
    ()=>toNestedArray
]);
function shuffle(array) {
    let counter = array.length;
    let index = 0;
    // While there are elements in the array
    while(counter > 0){
        // Pick a random index
        index = Math.random() * counter | 0;
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        swap(array, counter, index);
    }
}
function shuffleCombo(// tslint:disable-next-line:no-any
array, // tslint:disable-next-line:no-any
array2) {
    if (array.length !== array2.length) {
        throw new Error(`Array sizes must match to be shuffled together ` + `First array length was ${array.length}` + `Second array length was ${array2.length}`);
    }
    let counter = array.length;
    let index = 0;
    // While there are elements in the array
    while(counter > 0){
        // Pick a random index
        index = Math.random() * counter | 0;
        // Decrease counter by 1
        counter--;
        // And swap the last element of each array with it
        swap(array, counter, index);
        swap(array2, counter, index);
    }
}
function clamp(min, x, max) {
    return Math.max(min, Math.min(x, max));
}
function nearestLargerEven(val) {
    return val % 2 === 0 ? val : val + 1;
}
function swap(object, left, right) {
    const temp = object[left];
    object[left] = object[right];
    object[right] = temp;
}
function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
function randUniform(a, b) {
    const r = Math.random();
    return b * r + (1 - r) * a;
}
function distSquared(a, b) {
    let result = 0;
    for(let i = 0; i < a.length; i++){
        const diff = Number(a[i]) - Number(b[i]);
        result += diff * diff;
    }
    return result;
}
function assert(expr, msg) {
    if (!expr) {
        throw new Error(typeof msg === 'string' ? msg : msg());
    }
}
function assertShapesMatch(shapeA, shapeB, errorMessagePrefix = '') {
    assert(arraysEqual(shapeA, shapeB), ()=>errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
}
function assertNonNull(a) {
    assert(a != null, ()=>`The input to the tensor constructor must be a non-null value.`);
}
function sizeFromShape(shape) {
    if (shape.length === 0) {
        // Scalar.
        return 1;
    }
    let size = shape[0];
    for(let i = 1; i < shape.length; i++){
        size *= shape[i];
    }
    return size;
}
function isScalarShape(shape) {
    return shape.length === 0;
}
function arraysEqualWithNull(n1, n2) {
    if (n1 === n2) {
        return true;
    }
    if (n1 == null || n2 == null) {
        return false;
    }
    if (n1.length !== n2.length) {
        return false;
    }
    for(let i = 0; i < n1.length; i++){
        if (n1[i] !== null && n2[i] !== null && n1[i] !== n2[i]) {
            return false;
        }
    }
    return true;
}
function arraysEqual(n1, n2) {
    if (n1 === n2) {
        return true;
    }
    if (n1 == null || n2 == null) {
        return false;
    }
    if (n1.length !== n2.length) {
        return false;
    }
    for(let i = 0; i < n1.length; i++){
        if (n1[i] !== n2[i]) {
            return false;
        }
    }
    return true;
}
function isInt(a) {
    return a % 1 === 0;
}
function tanh(x) {
    // tslint:disable-next-line:no-any
    if (Math.tanh != null) {
        // tslint:disable-next-line:no-any
        return Math.tanh(x);
    }
    if (x === Infinity) {
        return 1;
    } else if (x === -Infinity) {
        return -1;
    } else {
        const e2x = Math.exp(2 * x);
        return (e2x - 1) / (e2x + 1);
    }
}
function sizeToSquarishShape(size) {
    const width = Math.ceil(Math.sqrt(size));
    return [
        width,
        Math.ceil(size / width)
    ];
}
function createShuffledIndices(n) {
    const shuffledIndices = new Uint32Array(n);
    for(let i = 0; i < n; ++i){
        shuffledIndices[i] = i;
    }
    shuffle(shuffledIndices);
    return shuffledIndices;
}
function rightPad(a, size) {
    if (size <= a.length) {
        return a;
    }
    return a + ' '.repeat(size - a.length);
}
function repeatedTry(checkFn, delayFn = (counter)=>0, maxCounter, scheduleFn) {
    return new Promise((resolve, reject)=>{
        let tryCount = 0;
        const tryFn = ()=>{
            if (checkFn()) {
                resolve();
                return;
            }
            tryCount++;
            const nextBackoff = delayFn(tryCount);
            if (maxCounter != null && tryCount >= maxCounter) {
                reject();
                return;
            }
            if (scheduleFn != null) {
                scheduleFn(tryFn, nextBackoff);
            } else {
                // google3 does not allow assigning another variable to setTimeout.
                // Don't refactor this so scheduleFn has a default value of setTimeout.
                setTimeout(tryFn, nextBackoff);
            }
        };
        tryFn();
    });
}
function inferFromImplicitShape(shape, size) {
    let shapeProd = 1;
    let implicitIdx = -1;
    for(let i = 0; i < shape.length; ++i){
        if (shape[i] >= 0) {
            shapeProd *= shape[i];
        } else if (shape[i] === -1) {
            if (implicitIdx !== -1) {
                throw Error(`Shapes can only have 1 implicit size. ` + `Found -1 at dim ${implicitIdx} and dim ${i}`);
            }
            implicitIdx = i;
        } else if (shape[i] < 0) {
            throw Error(`Shapes can not be < 0. Found ${shape[i]} at dim ${i}`);
        }
    }
    if (implicitIdx === -1) {
        if (size > 0 && size !== shapeProd) {
            throw Error(`Size(${size}) must match the product of shape ${shape}`);
        }
        return shape;
    }
    if (shapeProd === 0) {
        throw Error(`Cannot infer the missing size in [${shape}] when ` + `there are 0 elements`);
    }
    if (size % shapeProd !== 0) {
        throw Error(`The implicit shape can't be a fractional number. ` + `Got ${size} / ${shapeProd}`);
    }
    const newShape = shape.slice();
    newShape[implicitIdx] = size / shapeProd;
    return newShape;
}
function parseAxisParam(axis, shape) {
    const rank = shape.length;
    // Normalize input
    axis = axis == null ? shape.map((s, i)=>i) : [].concat(axis);
    // Check for valid range
    assert(axis.every((ax)=>ax >= -rank && ax < rank), ()=>`All values in axis param must be in range [-${rank}, ${rank}) but ` + `got axis ${axis}`);
    // Check for only integers
    assert(axis.every((ax)=>isInt(ax)), ()=>`All values in axis param must be integers but ` + `got axis ${axis}`);
    // Handle negative axis.
    return axis.map((a)=>a < 0 ? rank + a : a);
}
function squeezeShape(shape, axis) {
    const newShape = [];
    const keptDims = [];
    const isEmptyArray = axis != null && Array.isArray(axis) && axis.length === 0;
    const axes = axis == null || isEmptyArray ? null : parseAxisParam(axis, shape).sort();
    let j = 0;
    for(let i = 0; i < shape.length; ++i){
        if (axes != null) {
            if (axes[j] === i && shape[i] !== 1) {
                throw new Error(`Can't squeeze axis ${i} since its dim '${shape[i]}' is not 1`);
            }
            if ((axes[j] == null || axes[j] > i) && shape[i] === 1) {
                newShape.push(shape[i]);
                keptDims.push(i);
            }
            if (axes[j] <= i) {
                j++;
            }
        }
        if (shape[i] !== 1) {
            newShape.push(shape[i]);
            keptDims.push(i);
        }
    }
    return {
        newShape,
        keptDims
    };
}
function getTypedArrayFromDType(dtype, size) {
    return getArrayFromDType(dtype, size);
}
function getArrayFromDType(dtype, size) {
    let values = null;
    if (dtype == null || dtype === 'float32') {
        values = new Float32Array(size);
    } else if (dtype === 'int32') {
        values = new Int32Array(size);
    } else if (dtype === 'bool') {
        values = new Uint8Array(size);
    } else if (dtype === 'string') {
        values = new Array(size);
    } else {
        throw new Error(`Unknown data type ${dtype}`);
    }
    return values;
}
function checkConversionForErrors(vals, dtype) {
    for(let i = 0; i < vals.length; i++){
        const num = vals[i];
        if (isNaN(num) || !isFinite(num)) {
            throw Error(`A tensor of type ${dtype} being uploaded contains ${num}.`);
        }
    }
}
function isValidDtype(dtype) {
    return dtype === 'bool' || dtype === 'complex64' || dtype === 'float32' || dtype === 'int32' || dtype === 'string';
}
function hasEncodingLoss(oldType, newType) {
    if (newType === 'complex64') {
        return false;
    }
    if (newType === 'float32' && oldType !== 'complex64') {
        return false;
    }
    if (newType === 'int32' && oldType !== 'float32' && oldType !== 'complex64') {
        return false;
    }
    if (newType === 'bool' && oldType === 'bool') {
        return false;
    }
    return true;
}
function bytesPerElement(dtype) {
    if (dtype === 'float32' || dtype === 'int32') {
        return 4;
    } else if (dtype === 'complex64') {
        return 8;
    } else if (dtype === 'bool') {
        return 1;
    } else {
        throw new Error(`Unknown dtype ${dtype}`);
    }
}
function bytesFromStringArray(arr) {
    if (arr == null) {
        return 0;
    }
    let bytes = 0;
    arr.forEach((x)=>bytes += x.length);
    return bytes;
}
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isNumber(value) {
    return typeof value === 'number';
}
function inferDtype(values) {
    if (Array.isArray(values)) {
        return inferDtype(values[0]);
    }
    if (values instanceof Float32Array) {
        return 'float32';
    } else if (values instanceof Int32Array || values instanceof Uint8Array || values instanceof Uint8ClampedArray) {
        return 'int32';
    } else if (isNumber(values)) {
        return 'float32';
    } else if (isString(values)) {
        return 'string';
    } else if (isBoolean(values)) {
        return 'bool';
    }
    return 'float32';
}
function isFunction(f) {
    return !!(f && f.constructor && f.call && f.apply);
}
function nearestDivisor(size, start) {
    for(let i = start; i < size; ++i){
        if (size % i === 0) {
            return i;
        }
    }
    return size;
}
function computeStrides(shape) {
    const rank = shape.length;
    if (rank < 2) {
        return [];
    }
    // Last dimension has implicit stride of 1, thus having D-1 (instead of D)
    // strides.
    const strides = new Array(rank - 1);
    strides[rank - 2] = shape[rank - 1];
    for(let i = rank - 3; i >= 0; --i){
        strides[i] = strides[i + 1] * shape[i + 1];
    }
    return strides;
}
function createNestedArray(offset, shape, a, isComplex = false) {
    const ret = new Array();
    if (shape.length === 1) {
        const d = shape[0] * (isComplex ? 2 : 1);
        for(let i = 0; i < d; i++){
            ret[i] = a[offset + i];
        }
    } else {
        const d = shape[0];
        const rest = shape.slice(1);
        const len = rest.reduce((acc, c)=>acc * c) * (isComplex ? 2 : 1);
        for(let i = 0; i < d; i++){
            ret[i] = createNestedArray(offset + i * len, rest, a, isComplex);
        }
    }
    return ret;
}
function toNestedArray(shape, a, isComplex = false) {
    if (shape.length === 0) {
        // Scalar type should return a single number.
        return a[0];
    }
    const size = shape.reduce((acc, c)=>acc * c) * (isComplex ? 2 : 1);
    if (size === 0) {
        // A tensor with shape zero should be turned into empty list.
        return [];
    }
    if (size !== a.length) {
        throw new Error(`[${shape}] does not match the input size ${a.length}${isComplex ? ' for a complex tensor' : ''}.`);
    }
    return createNestedArray(0, shape, a, isComplex);
}
function convertBackendValuesAndArrayBuffer(data, dtype) {
    // If is type Uint8Array[], return it directly.
    if (Array.isArray(data)) {
        return data;
    }
    if (dtype === 'float32') {
        return data instanceof Float32Array ? data : new Float32Array(data);
    } else if (dtype === 'int32') {
        return data instanceof Int32Array ? data : new Int32Array(data);
    } else if (dtype === 'bool' || dtype === 'string') {
        return Uint8Array.from(new Int32Array(data));
    } else {
        throw new Error(`Unknown dtype ${dtype}`);
    }
}
function makeOnesTypedArray(size, dtype) {
    const array = makeZerosTypedArray(size, dtype);
    for(let i = 0; i < array.length; i++){
        array[i] = 1;
    }
    return array;
}
function makeZerosTypedArray(size, dtype) {
    if (dtype == null || dtype === 'float32' || dtype === 'complex64') {
        return new Float32Array(size);
    } else if (dtype === 'int32') {
        return new Int32Array(size);
    } else if (dtype === 'bool') {
        return new Uint8Array(size);
    } else {
        throw new Error(`Unknown data type ${dtype}`);
    }
}
function makeZerosNestedTypedArray(shape, dtype) {
    const size = shape.reduce((prev, curr)=>prev * curr, 1);
    if (dtype == null || dtype === 'float32') {
        return toNestedArray(shape, new Float32Array(size));
    } else if (dtype === 'int32') {
        return toNestedArray(shape, new Int32Array(size));
    } else if (dtype === 'bool') {
        return toNestedArray(shape, new Uint8Array(size));
    } else {
        throw new Error(`Unknown data type ${dtype}`);
    }
}
function assertNonNegativeIntegerDimensions(shape) {
    shape.forEach((dimSize)=>{
        assert(Number.isInteger(dimSize) && dimSize >= 0, ()=>`Tensor must have a shape comprised of positive integers but got ` + `shape [${shape}].`);
    });
}
function locToIndex(locs, rank, strides) {
    if (rank === 0) {
        return 0;
    } else if (rank === 1) {
        return locs[0];
    }
    let index = locs[locs.length - 1];
    for(let i = 0; i < locs.length - 1; ++i){
        index += strides[i] * locs[i];
    }
    return index;
}
function indexToLoc(index, rank, strides) {
    if (rank === 0) {
        return [];
    } else if (rank === 1) {
        return [
            index
        ];
    }
    const locs = new Array(rank);
    for(let i = 0; i < locs.length - 1; ++i){
        locs[i] = Math.floor(index / strides[i]);
        index -= locs[i] * strides[i];
    }
    locs[locs.length - 1] = index;
    return locs;
}
function isPromise(object) {
    //  We chose to not use 'obj instanceOf Promise' for two reasons:
    //  1. It only reliably works for es6 Promise, not other Promise
    //  implementations.
    //  2. It doesn't work with framework that uses zone.js. zone.js monkey
    //  patch the async calls, so it is possible the obj (patched) is
    //  comparing to a pre-patched Promise.
    return object && object.then && typeof object.then === 'function';
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbF9iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy91dGlsX2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBSUg7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsa0NBQWtDO0FBQ2xDLE1BQU0sVUFBVSxPQUFPLENBQUMsS0FDWTtJQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLHdDQUF3QztJQUN4QyxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUU7UUFDbEIsc0JBQXNCO1FBQ3RCLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsd0JBQXdCO1FBQ3hCLE9BQU8sRUFBRSxDQUFDO1FBQ1Ysb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE1BQU0sVUFBVSxZQUFZO0FBQ3hCLGtDQUFrQztBQUNsQyxLQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsTUFBaUQ7SUFDbkQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FDWCxpREFBaUQ7WUFDakQsMEJBQTBCLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDeEMsMkJBQTJCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEO0lBQ0QsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCx3Q0FBd0M7SUFDeEMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxF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QUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEOzs7R0FHRztBQUNILG1DQUFtQztBQUNuQyxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQVc7SUFDbkMsaUVBQWlFO0lBQ2pFLGdFQUFnRTtJQUNoRSxvQkFBb0I7SUFDcEIsdUVBQXVFO0lBQ3ZFLGlFQUFpRTtJQUNqRSx1Q0FBdUM7SUFDdkMsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7QmFja2VuZFZhbHVlcywgRGF0YVR5cGUsIERhdGFUeXBlTWFwLCBGbGF0VmVjdG9yLCBOdW1lcmljRGF0YVR5cGUsIFRlbnNvckxpa2UsIFR5cGVkQXJyYXksIFdlYkdMRGF0YSwgV2ViR1BVRGF0YX0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogU2h1ZmZsZXMgdGhlIGFycmF5IGluLXBsYWNlIHVzaW5nIEZpc2hlci1ZYXRlcyBhbGdvcml0aG0uXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGEgPSBbMSwgMiwgMywgNCwgNV07XG4gKiB0Zi51dGlsLnNodWZmbGUoYSk7XG4gKiBjb25zb2xlLmxvZyhhKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gc2h1ZmZsZSBpbi1wbGFjZS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVXRpbCcsIG5hbWVzcGFjZTogJ3V0aWwnfVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTogYW55W118VWludDMyQXJyYXl8SW50MzJBcnJheXxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZsb2F0MzJBcnJheSk6IHZvaWQge1xuICBsZXQgY291bnRlciA9IGFycmF5Lmxlbmd0aDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgLy8gV2hpbGUgdGhlcmUgYXJlIGVsZW1lbnRzIGluIHRoZSBhcnJheVxuICB3aGlsZSAoY291bnRlciA+IDApIHtcbiAgICAvLyBQaWNrIGEgcmFuZG9tIGluZGV4XG4gICAgaW5kZXggPSAoTWF0aC5yYW5kb20oKSAqIGNvdW50ZXIpIHwgMDtcbiAgICAvLyBEZWNyZWFzZSBjb3VudGVyIGJ5IDFcbiAgICBjb3VudGVyLS07XG4gICAgLy8gQW5kIHN3YXAgdGhlIGxhc3QgZWxlbWVudCB3aXRoIGl0XG4gICAgc3dhcChhcnJheSwgY291bnRlciwgaW5kZXgpO1xuICB9XG59XG5cbi8qKlxuICogU2h1ZmZsZXMgdHdvIGFycmF5cyBpbi1wbGFjZSB0aGUgc2FtZSB3YXkgdXNpbmcgRmlzaGVyLVlhdGVzIGFsZ29yaXRobS5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgYSA9IFsxLDIsMyw0LDVdO1xuICogY29uc3QgYiA9IFsxMSwyMiwzMyw0NCw1NV07XG4gKiB0Zi51dGlsLnNodWZmbGVDb21ibyhhLCBiKTtcbiAqIGNvbnNvbGUubG9nKGEsIGIpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGFycmF5IFRoZSBmaXJzdCBhcnJheSB0byBzaHVmZmxlIGluLXBsYWNlLlxuICogQHBhcmFtIGFycmF5MiBUaGUgc2Vjb25kIGFycmF5IHRvIHNodWZmbGUgaW4tcGxhY2Ugd2l0aCB0aGUgc2FtZSBwZXJtdXRhdGlvblxuICogICAgIGFzIHRoZSBmaXJzdCBhcnJheS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVXRpbCcsIG5hbWVzcGFjZTogJ3V0aWwnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNvbWJvKFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBhcnJheTogYW55W118VWludDMyQXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXksXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGFycmF5MjogYW55W118VWludDMyQXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXkpOiB2b2lkIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFycmF5IHNpemVzIG11c3QgbWF0Y2ggdG8gYmUgc2h1ZmZsZWQgdG9nZXRoZXIgYCArXG4gICAgICAgIGBGaXJzdCBhcnJheSBsZW5ndGggd2FzICR7YXJyYXkubGVuZ3RofWAgK1xuICAgICAgICBgU2Vjb25kIGFycmF5IGxlbmd0aCB3YXMgJHthcnJheTIubGVuZ3RofWApO1xuICB9XG4gIGxldCBjb3VudGVyID0gYXJyYXkubGVuZ3RoO1xuICBsZXQgaW5kZXggPSAwO1xuICAvLyBXaGlsZSB0aGVyZSBhcmUgZWxlbWVudHMgaW4gdGhlIGFycmF5XG4gIHdoaWxlIChjb3VudGVyID4gMCkge1xuICAgIC8vIFBpY2sgYSByYW5kb20gaW5kZXhcbiAgICBpbmRleCA9IChNYXRoLnJhbmRvbSgpICogY291bnRlcikgfCAwO1xuICAgIC8vIERlY3JlYXNlIGNvdW50ZXIgYnkgMVxuICAgIGNvdW50ZXItLTtcbiAgICAvLyBBbmQgc3dhcCB0aGUgbGFzdCBlbGVtZW50IG9mIGVhY2ggYXJyYXkgd2l0aCBpdFxuICAgIHN3YXAoYXJyYXksIGNvdW50ZXIsIGluZGV4KTtcbiAgICBzd2FwKGFycmF5MiwgY291bnRlciwgaW5kZXgpO1xuICB9XG59XG5cbi8qKiBDbGFtcHMgYSB2YWx1ZSB0byBhIHNwZWNpZmllZCByYW5nZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW46IG51bWJlciwgeDogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKHgsIG1heCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVhcmVzdExhcmdlckV2ZW4odmFsOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdmFsICUgMiA9PT0gMCA/IHZhbCA6IHZhbCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2FwPFQ+KFxuICAgIG9iamVjdDoge1tpbmRleDogbnVtYmVyXTogVH0sIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcikge1xuICBjb25zdCB0ZW1wID0gb2JqZWN0W2xlZnRdO1xuICBvYmplY3RbbGVmdF0gPSBvYmplY3RbcmlnaHRdO1xuICBvYmplY3RbcmlnaHRdID0gdGVtcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bShhcnI6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgc3VtICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gc3VtO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzYW1wbGUgZnJvbSBhIHVuaWZvcm0gW2EsIGIpIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBAcGFyYW0gYSBUaGUgbWluaW11bSBzdXBwb3J0IChpbmNsdXNpdmUpLlxuICogQHBhcmFtIGIgVGhlIG1heGltdW0gc3VwcG9ydCAoZXhjbHVzaXZlKS5cbiAqIEByZXR1cm4gQSBwc2V1ZG9yYW5kb20gbnVtYmVyIG9uIHRoZSBoYWxmLW9wZW4gaW50ZXJ2YWwgW2EsYikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kVW5pZm9ybShhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKTtcbiAgcmV0dXJuIChiICogcikgKyAoMSAtIHIpICogYTtcbn1cblxuLyoqIFJldHVybnMgdGhlIHNxdWFyZWQgRXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlY3RvcnMuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdFNxdWFyZWQoYTogRmxhdFZlY3RvciwgYjogRmxhdFZlY3Rvcik6IG51bWJlciB7XG4gIGxldCByZXN1bHQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaWZmID0gTnVtYmVyKGFbaV0pIC0gTnVtYmVyKGJbaV0pO1xuICAgIHJlc3VsdCArPSBkaWZmICogZGlmZjtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCB0aGUgZXhwcmVzc2lvbiBpcyB0cnVlLiBPdGhlcndpc2UgdGhyb3dzIGFuIGVycm9yIHdpdGggdGhlXG4gKiBwcm92aWRlZCBtZXNzYWdlLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCB4ID0gMjtcbiAqIHRmLnV0aWwuYXNzZXJ0KHggPT09IDIsICd4IGlzIG5vdCAyJyk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZXhwciBUaGUgZXhwcmVzc2lvbiB0byBhc3NlcnQgKGFzIGEgYm9vbGVhbikuXG4gKiBAcGFyYW0gbXNnIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBtZXNzYWdlIHRvIHJlcG9ydCB3aGVuIHRocm93aW5nIGFuXG4gKiAgICAgZXJyb3IuIFdlIHVzZSBhIGZ1bmN0aW9uIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdVdGlsJywgbmFtZXNwYWNlOiAndXRpbCd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQoZXhwcjogYm9vbGVhbiwgbXNnOiAoKSA9PiBzdHJpbmcpIHtcbiAgaWYgKCFleHByKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnID8gbXNnIDogbXNnKCkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTaGFwZXNNYXRjaChcbiAgICBzaGFwZUE6IG51bWJlcltdLCBzaGFwZUI6IG51bWJlcltdLCBlcnJvck1lc3NhZ2VQcmVmaXggPSAnJyk6IHZvaWQge1xuICBhc3NlcnQoXG4gICAgICBhcnJheXNFcXVhbChzaGFwZUEsIHNoYXBlQiksXG4gICAgICAoKSA9PiBlcnJvck1lc3NhZ2VQcmVmaXggKyBgIFNoYXBlcyAke3NoYXBlQX0gYW5kICR7c2hhcGVCfSBtdXN0IG1hdGNoYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb25OdWxsKGE6IFRlbnNvckxpa2UpOiB2b2lkIHtcbiAgYXNzZXJ0KFxuICAgICAgYSAhPSBudWxsLFxuICAgICAgKCkgPT4gYFRoZSBpbnB1dCB0byB0aGUgdGVuc29yIGNvbnN0cnVjdG9yIG11c3QgYmUgYSBub24tbnVsbCB2YWx1ZS5gKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzaXplIChudW1iZXIgb2YgZWxlbWVudHMpIG9mIHRoZSB0ZW5zb3IgZ2l2ZW4gaXRzIHNoYXBlLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBzaGFwZSA9IFszLCA0LCAyXTtcbiAqIGNvbnN0IHNpemUgPSB0Zi51dGlsLnNpemVGcm9tU2hhcGUoc2hhcGUpO1xuICogY29uc29sZS5sb2coc2l6ZSk7XG4gKiBgYGBcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVXRpbCcsIG5hbWVzcGFjZTogJ3V0aWwnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZUZyb21TaGFwZShzaGFwZTogbnVtYmVyW10pOiBudW1iZXIge1xuICBpZiAoc2hhcGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gU2NhbGFyLlxuICAgIHJldHVybiAxO1xuICB9XG4gIGxldCBzaXplID0gc2hhcGVbMF07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc2hhcGUubGVuZ3RoOyBpKyspIHtcbiAgICBzaXplICo9IHNoYXBlW2ldO1xuICB9XG4gIHJldHVybiBzaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTY2FsYXJTaGFwZShzaGFwZTogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIHNoYXBlLmxlbmd0aCA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5c0VxdWFsV2l0aE51bGwobjE6IG51bWJlcltdLCBuMjogbnVtYmVyW10pIHtcbiAgaWYgKG4xID09PSBuMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKG4xID09IG51bGwgfHwgbjIgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuMS5sZW5ndGggIT09IG4yLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobjFbaV0gIT09IG51bGwgJiYgbjJbaV0gIT09IG51bGwgJiYgbjFbaV0gIT09IG4yW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlzRXF1YWwobjE6IEZsYXRWZWN0b3IsIG4yOiBGbGF0VmVjdG9yKSB7XG4gIGlmIChuMSA9PT0gbjIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobjEgPT0gbnVsbCB8fCBuMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG4xLmxlbmd0aCAhPT0gbjIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobjFbaV0gIT09IG4yW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQoYTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBhICUgMSA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhbmgoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpZiAoKE1hdGggYXMgYW55KS50YW5oICE9IG51bGwpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcmV0dXJuIChNYXRoIGFzIGFueSkudGFuaCh4KTtcbiAgfVxuICBpZiAoeCA9PT0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh4ID09PSAtSW5maW5pdHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZTJ4ID0gTWF0aC5leHAoMiAqIHgpO1xuICAgIHJldHVybiAoZTJ4IC0gMSkgLyAoZTJ4ICsgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVUb1NxdWFyaXNoU2hhcGUoc2l6ZTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKE1hdGguc3FydChzaXplKSk7XG4gIHJldHVybiBbd2lkdGgsIE1hdGguY2VpbChzaXplIC8gd2lkdGgpXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggcmFuZG9taXplZCBpbmRpY2VzIHRvIGEgZ2l2ZW4gcXVhbnRpdHkuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHJhbmRvbVRlbiA9IHRmLnV0aWwuY3JlYXRlU2h1ZmZsZWRJbmRpY2VzKDEwKTtcbiAqIGNvbnNvbGUubG9nKHJhbmRvbVRlbik7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbnVtYmVyIFF1YW50aXR5IG9mIGhvdyBtYW55IHNodWZmbGVkIGluZGljZXMgdG8gY3JlYXRlLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdVdGlsJywgbmFtZXNwYWNlOiAndXRpbCd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaHVmZmxlZEluZGljZXMobjogbnVtYmVyKTogVWludDMyQXJyYXkge1xuICBjb25zdCBzaHVmZmxlZEluZGljZXMgPSBuZXcgVWludDMyQXJyYXkobik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgc2h1ZmZsZWRJbmRpY2VzW2ldID0gaTtcbiAgfVxuICBzaHVmZmxlKHNodWZmbGVkSW5kaWNlcyk7XG4gIHJldHVybiBzaHVmZmxlZEluZGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFBhZChhOiBzdHJpbmcsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChzaXplIDw9IGEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgcmV0dXJuIGEgKyAnICcucmVwZWF0KHNpemUgLSBhLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFRyeShcbiAgICBjaGVja0ZuOiAoKSA9PiBib29sZWFuLCBkZWxheUZuID0gKGNvdW50ZXI6IG51bWJlcikgPT4gMCxcbiAgICBtYXhDb3VudGVyPzogbnVtYmVyLFxuICAgIHNjaGVkdWxlRm4/OiAoZnVuY3Rpb25SZWY6IEZ1bmN0aW9uLCBkZWxheTogbnVtYmVyKSA9PlxuICAgICAgICB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHRyeUNvdW50ID0gMDtcblxuICAgIGNvbnN0IHRyeUZuID0gKCkgPT4ge1xuICAgICAgaWYgKGNoZWNrRm4oKSkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdHJ5Q291bnQrKztcblxuICAgICAgY29uc3QgbmV4dEJhY2tvZmYgPSBkZWxheUZuKHRyeUNvdW50KTtcblxuICAgICAgaWYgKG1heENvdW50ZXIgIT0gbnVsbCAmJiB0cnlDb3VudCA+PSBtYXhDb3VudGVyKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzY2hlZHVsZUZuICE9IG51bGwpIHtcbiAgICAgICAgc2NoZWR1bGVGbih0cnlGbiwgbmV4dEJhY2tvZmYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ29vZ2xlMyBkb2VzIG5vdCBhbGxvdyBhc3NpZ25pbmcgYW5vdGhlciB2YXJpYWJsZSB0byBzZXRUaW1lb3V0LlxuICAgICAgICAvLyBEb24ndCByZWZhY3RvciB0aGlzIHNvIHNjaGVkdWxlRm4gaGFzIGEgZGVmYXVsdCB2YWx1ZSBvZiBzZXRUaW1lb3V0LlxuICAgICAgICBzZXRUaW1lb3V0KHRyeUZuLCBuZXh0QmFja29mZik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyeUZuKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdpdmVuIHRoZSBmdWxsIHNpemUgb2YgdGhlIGFycmF5IGFuZCBhIHNoYXBlIHRoYXQgbWF5IGNvbnRhaW4gLTEgYXMgdGhlXG4gKiBpbXBsaWNpdCBkaW1lbnNpb24sIHJldHVybnMgdGhlIGluZmVycmVkIHNoYXBlIHdoZXJlIC0xIGlzIHJlcGxhY2VkLlxuICogRS5nLiBGb3Igc2hhcGU9WzIsIC0xLCAzXSBhbmQgc2l6ZT0yNCwgaXQgd2lsbCByZXR1cm4gWzIsIDQsIDNdLlxuICpcbiAqIEBwYXJhbSBzaGFwZSBUaGUgc2hhcGUsIHdoaWNoIG1heSBjb250YWluIC0xIGluIHNvbWUgZGltZW5zaW9uLlxuICogQHBhcmFtIHNpemUgVGhlIGZ1bGwgc2l6ZSAobnVtYmVyIG9mIGVsZW1lbnRzKSBvZiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJuIFRoZSBpbmZlcnJlZCBzaGFwZSB3aGVyZSAtMSBpcyByZXBsYWNlZCB3aXRoIHRoZSBpbmZlcnJlZCBzaXplLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5mZXJGcm9tSW1wbGljaXRTaGFwZShcbiAgICBzaGFwZTogbnVtYmVyW10sIHNpemU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgbGV0IHNoYXBlUHJvZCA9IDE7XG4gIGxldCBpbXBsaWNpdElkeCA9IC0xO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhcGUubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoc2hhcGVbaV0gPj0gMCkge1xuICAgICAgc2hhcGVQcm9kICo9IHNoYXBlW2ldO1xuICAgIH0gZWxzZSBpZiAoc2hhcGVbaV0gPT09IC0xKSB7XG4gICAgICBpZiAoaW1wbGljaXRJZHggIT09IC0xKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYFNoYXBlcyBjYW4gb25seSBoYXZlIDEgaW1wbGljaXQgc2l6ZS4gYCArXG4gICAgICAgICAgICBgRm91bmQgLTEgYXQgZGltICR7aW1wbGljaXRJZHh9IGFuZCBkaW0gJHtpfWApO1xuICAgICAgfVxuICAgICAgaW1wbGljaXRJZHggPSBpO1xuICAgIH0gZWxzZSBpZiAoc2hhcGVbaV0gPCAwKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU2hhcGVzIGNhbiBub3QgYmUgPCAwLiBGb3VuZCAke3NoYXBlW2ldfSBhdCBkaW0gJHtpfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbXBsaWNpdElkeCA9PT0gLTEpIHtcbiAgICBpZiAoc2l6ZSA+IDAgJiYgc2l6ZSAhPT0gc2hhcGVQcm9kKSB7XG4gICAgICB0aHJvdyBFcnJvcihgU2l6ZSgke3NpemV9KSBtdXN0IG1hdGNoIHRoZSBwcm9kdWN0IG9mIHNoYXBlICR7c2hhcGV9YCk7XG4gICAgfVxuICAgIHJldHVybiBzaGFwZTtcbiAgfVxuXG4gIGlmIChzaGFwZVByb2QgPT09IDApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYENhbm5vdCBpbmZlciB0aGUgbWlzc2luZyBzaXplIGluIFske3NoYXBlfV0gd2hlbiBgICtcbiAgICAgICAgYHRoZXJlIGFyZSAwIGVsZW1lbnRzYCk7XG4gIH1cbiAgaWYgKHNpemUgJSBzaGFwZVByb2QgIT09IDApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYFRoZSBpbXBsaWNpdCBzaGFwZSBjYW4ndCBiZSBhIGZyYWN0aW9uYWwgbnVtYmVyLiBgICtcbiAgICAgICAgYEdvdCAke3NpemV9IC8gJHtzaGFwZVByb2R9YCk7XG4gIH1cblxuICBjb25zdCBuZXdTaGFwZSA9IHNoYXBlLnNsaWNlKCk7XG4gIG5ld1NoYXBlW2ltcGxpY2l0SWR4XSA9IHNpemUgLyBzaGFwZVByb2Q7XG4gIHJldHVybiBuZXdTaGFwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXhpc1BhcmFtKFxuICAgIGF4aXM6IG51bWJlcnxudW1iZXJbXSwgc2hhcGU6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICBjb25zdCByYW5rID0gc2hhcGUubGVuZ3RoO1xuXG4gIC8vIE5vcm1hbGl6ZSBpbnB1dFxuICBheGlzID0gYXhpcyA9PSBudWxsID8gc2hhcGUubWFwKChzLCBpKSA9PiBpKSA6IFtdLmNvbmNhdChheGlzKTtcblxuICAvLyBDaGVjayBmb3IgdmFsaWQgcmFuZ2VcbiAgYXNzZXJ0KFxuICAgICAgYXhpcy5ldmVyeShheCA9PiBheCA+PSAtcmFuayAmJiBheCA8IHJhbmspLFxuICAgICAgKCkgPT5cbiAgICAgICAgICBgQWxsIHZhbHVlcyBpbiBheGlzIHBhcmFtIG11c3QgYmUgaW4gcmFuZ2UgWy0ke3Jhbmt9LCAke3Jhbmt9KSBidXQgYCArXG4gICAgICAgICAgYGdvdCBheGlzICR7YXhpc31gKTtcblxuICAvLyBDaGVjayBmb3Igb25seSBpbnRlZ2Vyc1xuICBhc3NlcnQoXG4gICAgICBheGlzLmV2ZXJ5KGF4ID0+IGlzSW50KGF4KSksXG4gICAgICAoKSA9PiBgQWxsIHZhbHVlcyBpbiBheGlzIHBhcmFtIG11c3QgYmUgaW50ZWdlcnMgYnV0IGAgK1xuICAgICAgICAgIGBnb3QgYXhpcyAke2F4aXN9YCk7XG5cbiAgLy8gSGFuZGxlIG5lZ2F0aXZlIGF4aXMuXG4gIHJldHVybiBheGlzLm1hcChhID0+IGEgPCAwID8gcmFuayArIGEgOiBhKTtcbn1cblxuLyoqIFJlZHVjZXMgdGhlIHNoYXBlIGJ5IHJlbW92aW5nIGFsbCBkaW1lbnNpb25zIG9mIHNoYXBlIDEuICovXG5leHBvcnQgZnVuY3Rpb24gc3F1ZWV6ZVNoYXBlKHNoYXBlOiBudW1iZXJbXSwgYXhpcz86IG51bWJlcltdKTpcbiAgICB7bmV3U2hhcGU6IG51bWJlcltdLCBrZXB0RGltczogbnVtYmVyW119IHtcbiAgY29uc3QgbmV3U2hhcGU6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGtlcHREaW1zOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBpc0VtcHR5QXJyYXkgPSBheGlzICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShheGlzKSAmJiBheGlzLmxlbmd0aCA9PT0gMDtcbiAgY29uc3QgYXhlcyA9IChheGlzID09IG51bGwgfHwgaXNFbXB0eUFycmF5KSA/XG4gICAgICBudWxsIDpcbiAgICAgIHBhcnNlQXhpc1BhcmFtKGF4aXMsIHNoYXBlKS5zb3J0KCk7XG4gIGxldCBqID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFwZS5sZW5ndGg7ICsraSkge1xuICAgIGlmIChheGVzICE9IG51bGwpIHtcbiAgICAgIGlmIChheGVzW2pdID09PSBpICYmIHNoYXBlW2ldICE9PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBDYW4ndCBzcXVlZXplIGF4aXMgJHtpfSBzaW5jZSBpdHMgZGltICcke3NoYXBlW2ldfScgaXMgbm90IDFgKTtcbiAgICAgIH1cbiAgICAgIGlmICgoYXhlc1tqXSA9PSBudWxsIHx8IGF4ZXNbal0gPiBpKSAmJiBzaGFwZVtpXSA9PT0gMSkge1xuICAgICAgICBuZXdTaGFwZS5wdXNoKHNoYXBlW2ldKTtcbiAgICAgICAga2VwdERpbXMucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIGlmIChheGVzW2pdIDw9IGkpIHtcbiAgICAgICAgaisrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hhcGVbaV0gIT09IDEpIHtcbiAgICAgIG5ld1NoYXBlLnB1c2goc2hhcGVbaV0pO1xuICAgICAga2VwdERpbXMucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtuZXdTaGFwZSwga2VwdERpbXN9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZWRBcnJheUZyb21EVHlwZTxEIGV4dGVuZHMgTnVtZXJpY0RhdGFUeXBlPihcbiAgICBkdHlwZTogRCwgc2l6ZTogbnVtYmVyKTogRGF0YVR5cGVNYXBbRF0ge1xuICByZXR1cm4gZ2V0QXJyYXlGcm9tRFR5cGU8RD4oZHR5cGUsIHNpemUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlGcm9tRFR5cGU8RCBleHRlbmRzIERhdGFUeXBlPihcbiAgICBkdHlwZTogRCwgc2l6ZTogbnVtYmVyKTogRGF0YVR5cGVNYXBbRF0ge1xuICBsZXQgdmFsdWVzID0gbnVsbDtcbiAgaWYgKGR0eXBlID09IG51bGwgfHwgZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoc2l6ZSk7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdpbnQzMicpIHtcbiAgICB2YWx1ZXMgPSBuZXcgSW50MzJBcnJheShzaXplKTtcbiAgfSBlbHNlIGlmIChkdHlwZSA9PT0gJ2Jvb2wnKSB7XG4gICAgdmFsdWVzID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWVzID0gbmV3IEFycmF5PHN0cmluZz4oc2l6ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEgdHlwZSAke2R0eXBlfWApO1xuICB9XG4gIHJldHVybiB2YWx1ZXMgYXMgRGF0YVR5cGVNYXBbRF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbnZlcnNpb25Gb3JFcnJvcnM8RCBleHRlbmRzIERhdGFUeXBlPihcbiAgICB2YWxzOiBEYXRhVHlwZU1hcFtEXXxudW1iZXJbXSwgZHR5cGU6IEQpOiB2b2lkIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbnVtID0gdmFsc1tpXSBhcyBudW1iZXI7XG4gICAgaWYgKGlzTmFOKG51bSkgfHwgIWlzRmluaXRlKG51bSkpIHtcbiAgICAgIHRocm93IEVycm9yKGBBIHRlbnNvciBvZiB0eXBlICR7ZHR5cGV9IGJlaW5nIHVwbG9hZGVkIGNvbnRhaW5zICR7bnVtfS5gKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZHR5cGUgaXMgdmFsaWQuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZER0eXBlKGR0eXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gZHR5cGUgPT09ICdib29sJyB8fCBkdHlwZSA9PT0gJ2NvbXBsZXg2NCcgfHwgZHR5cGUgPT09ICdmbG9hdDMyJyB8fFxuICAgICAgZHR5cGUgPT09ICdpbnQzMicgfHwgZHR5cGUgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbmV3IHR5cGUgY2FuJ3QgZW5jb2RlIHRoZSBvbGQgdHlwZSB3aXRob3V0IGxvc3Mgb2ZcbiAqIHByZWNpc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0VuY29kaW5nTG9zcyhvbGRUeXBlOiBEYXRhVHlwZSwgbmV3VHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcbiAgaWYgKG5ld1R5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChuZXdUeXBlID09PSAnZmxvYXQzMicgJiYgb2xkVHlwZSAhPT0gJ2NvbXBsZXg2NCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG5ld1R5cGUgPT09ICdpbnQzMicgJiYgb2xkVHlwZSAhPT0gJ2Zsb2F0MzInICYmIG9sZFR5cGUgIT09ICdjb21wbGV4NjQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChuZXdUeXBlID09PSAnYm9vbCcgJiYgb2xkVHlwZSA9PT0gJ2Jvb2wnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNQZXJFbGVtZW50KGR0eXBlOiBEYXRhVHlwZSk6IG51bWJlciB7XG4gIGlmIChkdHlwZSA9PT0gJ2Zsb2F0MzInIHx8IGR0eXBlID09PSAnaW50MzInKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgcmV0dXJuIDg7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdib29sJykge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkdHlwZSAke2R0eXBlfWApO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXBwcm94aW1hdGUgbnVtYmVyIG9mIGJ5dGVzIGFsbG9jYXRlZCBpbiB0aGUgc3RyaW5nIGFycmF5IC0gMlxuICogYnl0ZXMgcGVyIGNoYXJhY3Rlci4gQ29tcHV0aW5nIHRoZSBleGFjdCBieXRlcyBmb3IgYSBuYXRpdmUgc3RyaW5nIGluIEpTXG4gKiBpcyBub3QgcG9zc2libGUgc2luY2UgaXQgZGVwZW5kcyBvbiB0aGUgZW5jb2Rpbmcgb2YgdGhlIGh0bWwgcGFnZSB0aGF0XG4gKiBzZXJ2ZXMgdGhlIHdlYnNpdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBieXRlc0Zyb21TdHJpbmdBcnJheShhcnI6IFVpbnQ4QXJyYXlbXSk6IG51bWJlciB7XG4gIGlmIChhcnIgPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGxldCBieXRlcyA9IDA7XG4gIGFyci5mb3JFYWNoKHggPT4gYnl0ZXMgKz0geC5sZW5ndGgpO1xuICByZXR1cm4gYnl0ZXM7XG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlOiB7fSk6IHZhbHVlIGlzIHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZToge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmZlckR0eXBlKHZhbHVlczogVGVuc29yTGlrZXxXZWJHTERhdGF8V2ViR1BVRGF0YSk6IERhdGFUeXBlIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIHJldHVybiBpbmZlckR0eXBlKHZhbHVlc1swXSk7XG4gIH1cbiAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xuICAgIHJldHVybiAnZmxvYXQzMic7XG4gIH0gZWxzZSBpZiAoXG4gICAgICB2YWx1ZXMgaW5zdGFuY2VvZiBJbnQzMkFycmF5IHx8IHZhbHVlcyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHxcbiAgICAgIHZhbHVlcyBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgcmV0dXJuICdpbnQzMic7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWVzKSkge1xuICAgIHJldHVybiAnZmxvYXQzMic7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWVzKSkge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odmFsdWVzKSkge1xuICAgIHJldHVybiAnYm9vbCc7XG4gIH1cbiAgcmV0dXJuICdmbG9hdDMyJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZjogRnVuY3Rpb24pIHtcbiAgcmV0dXJuICEhKGYgJiYgZi5jb25zdHJ1Y3RvciAmJiBmLmNhbGwgJiYgZi5hcHBseSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZWFyZXN0RGl2aXNvcihzaXplOiBudW1iZXIsIHN0YXJ0OiBudW1iZXIpOiBudW1iZXIge1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBzaXplOyArK2kpIHtcbiAgICBpZiAoc2l6ZSAlIGkgPT09IDApIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVTdHJpZGVzKHNoYXBlOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgY29uc3QgcmFuayA9IHNoYXBlLmxlbmd0aDtcbiAgaWYgKHJhbmsgPCAyKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gTGFzdCBkaW1lbnNpb24gaGFzIGltcGxpY2l0IHN0cmlkZSBvZiAxLCB0aHVzIGhhdmluZyBELTEgKGluc3RlYWQgb2YgRClcbiAgLy8gc3RyaWRlcy5cbiAgY29uc3Qgc3RyaWRlcyA9IG5ldyBBcnJheShyYW5rIC0gMSk7XG4gIHN0cmlkZXNbcmFuayAtIDJdID0gc2hhcGVbcmFuayAtIDFdO1xuICBmb3IgKGxldCBpID0gcmFuayAtIDM7IGkgPj0gMDsgLS1pKSB7XG4gICAgc3RyaWRlc1tpXSA9IHN0cmlkZXNbaSArIDFdICogc2hhcGVbaSArIDFdO1xuICB9XG4gIHJldHVybiBzdHJpZGVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXN0ZWRBcnJheShcbiAgICBvZmZzZXQ6IG51bWJlciwgc2hhcGU6IG51bWJlcltdLCBhOiBUeXBlZEFycmF5LCBpc0NvbXBsZXggPSBmYWxzZSkge1xuICBjb25zdCByZXQgPSBuZXcgQXJyYXkoKTtcbiAgaWYgKHNoYXBlLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGQgPSBzaGFwZVswXSAqIChpc0NvbXBsZXggPyAyIDogMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IGFbb2Zmc2V0ICsgaV07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGQgPSBzaGFwZVswXTtcbiAgICBjb25zdCByZXN0ID0gc2hhcGUuc2xpY2UoMSk7XG4gICAgY29uc3QgbGVuID0gcmVzdC5yZWR1Y2UoKGFjYywgYykgPT4gYWNjICogYykgKiAoaXNDb21wbGV4ID8gMiA6IDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSBjcmVhdGVOZXN0ZWRBcnJheShvZmZzZXQgKyBpICogbGVuLCByZXN0LCBhLCBpc0NvbXBsZXgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBQcm92aWRlIGEgbmVzdGVkIGFycmF5IG9mIFR5cGVkQXJyYXkgaW4gZ2l2ZW4gc2hhcGUuXG5leHBvcnQgZnVuY3Rpb24gdG9OZXN0ZWRBcnJheShcbiAgICBzaGFwZTogbnVtYmVyW10sIGE6IFR5cGVkQXJyYXksIGlzQ29tcGxleCA9IGZhbHNlKSB7XG4gIGlmIChzaGFwZS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBTY2FsYXIgdHlwZSBzaG91bGQgcmV0dXJuIGEgc2luZ2xlIG51bWJlci5cbiAgICByZXR1cm4gYVswXTtcbiAgfVxuICBjb25zdCBzaXplID0gc2hhcGUucmVkdWNlKChhY2MsIGMpID0+IGFjYyAqIGMpICogKGlzQ29tcGxleCA/IDIgOiAxKTtcbiAgaWYgKHNpemUgPT09IDApIHtcbiAgICAvLyBBIHRlbnNvciB3aXRoIHNoYXBlIHplcm8gc2hvdWxkIGJlIHR1cm5lZCBpbnRvIGVtcHR5IGxpc3QuXG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChzaXplICE9PSBhLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgWyR7c2hhcGV9XSBkb2VzIG5vdCBtYXRjaCB0aGUgaW5wdXQgc2l6ZSAke2EubGVuZ3RofSR7XG4gICAgICAgIGlzQ29tcGxleCA/ICcgZm9yIGEgY29tcGxleCB0ZW5zb3InIDogJyd9LmApO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZU5lc3RlZEFycmF5KDAsIHNoYXBlLCBhLCBpc0NvbXBsZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEJhY2tlbmRWYWx1ZXNBbmRBcnJheUJ1ZmZlcihcbiAgICBkYXRhOiBCYWNrZW5kVmFsdWVzfEFycmF5QnVmZmVyLCBkdHlwZTogRGF0YVR5cGUpIHtcbiAgLy8gSWYgaXMgdHlwZSBVaW50OEFycmF5W10sIHJldHVybiBpdCBkaXJlY3RseS5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBpZiAoZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5ID8gZGF0YSA6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdpbnQzMicpIHtcbiAgICByZXR1cm4gZGF0YSBpbnN0YW5jZW9mIEludDMyQXJyYXkgPyBkYXRhIDogbmV3IEludDMyQXJyYXkoZGF0YSk7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdib29sJyB8fCBkdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKG5ldyBJbnQzMkFycmF5KGRhdGEpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZHR5cGUgJHtkdHlwZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU9uZXNUeXBlZEFycmF5PEQgZXh0ZW5kcyBEYXRhVHlwZT4oXG4gICAgc2l6ZTogbnVtYmVyLCBkdHlwZTogRCk6IERhdGFUeXBlTWFwW0RdIHtcbiAgY29uc3QgYXJyYXkgPSBtYWtlWmVyb3NUeXBlZEFycmF5KHNpemUsIGR0eXBlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldID0gMTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlWmVyb3NUeXBlZEFycmF5PEQgZXh0ZW5kcyBEYXRhVHlwZT4oXG4gICAgc2l6ZTogbnVtYmVyLCBkdHlwZTogRCk6IERhdGFUeXBlTWFwW0RdIHtcbiAgaWYgKGR0eXBlID09IG51bGwgfHwgZHR5cGUgPT09ICdmbG9hdDMyJyB8fCBkdHlwZSA9PT0gJ2NvbXBsZXg2NCcpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShzaXplKSBhcyBEYXRhVHlwZU1hcFtEXTtcbiAgfSBlbHNlIGlmIChkdHlwZSA9PT0gJ2ludDMyJykge1xuICAgIHJldHVybiBuZXcgSW50MzJBcnJheShzaXplKSBhcyBEYXRhVHlwZU1hcFtEXTtcbiAgfSBlbHNlIGlmIChkdHlwZSA9PT0gJ2Jvb2wnKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNpemUpIGFzIERhdGFUeXBlTWFwW0RdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhIHR5cGUgJHtkdHlwZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgbmVzdGVkIGBUeXBlZEFycmF5YCBmaWxsZWQgd2l0aCB6ZXJvcy5cbiAqIEBwYXJhbSBzaGFwZSBUaGUgc2hhcGUgaW5mb3JtYXRpb24gZm9yIHRoZSBuZXN0ZWQgYXJyYXkuXG4gKiBAcGFyYW0gZHR5cGUgZHR5cGUgb2YgdGhlIGFycmF5IGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlWmVyb3NOZXN0ZWRUeXBlZEFycmF5PEQgZXh0ZW5kcyBEYXRhVHlwZT4oXG4gICAgc2hhcGU6IG51bWJlcltdLCBkdHlwZTogRCkge1xuICBjb25zdCBzaXplID0gc2hhcGUucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICogY3VyciwgMSk7XG4gIGlmIChkdHlwZSA9PSBudWxsIHx8IGR0eXBlID09PSAnZmxvYXQzMicpIHtcbiAgICByZXR1cm4gdG9OZXN0ZWRBcnJheShzaGFwZSwgbmV3IEZsb2F0MzJBcnJheShzaXplKSk7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdpbnQzMicpIHtcbiAgICByZXR1cm4gdG9OZXN0ZWRBcnJheShzaGFwZSwgbmV3IEludDMyQXJyYXkoc2l6ZSkpO1xuICB9IGVsc2UgaWYgKGR0eXBlID09PSAnYm9vbCcpIHtcbiAgICByZXR1cm4gdG9OZXN0ZWRBcnJheShzaGFwZSwgbmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhIHR5cGUgJHtkdHlwZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm9uTmVnYXRpdmVJbnRlZ2VyRGltZW5zaW9ucyhzaGFwZTogbnVtYmVyW10pIHtcbiAgc2hhcGUuZm9yRWFjaChkaW1TaXplID0+IHtcbiAgICBhc3NlcnQoXG4gICAgICAgIE51bWJlci5pc0ludGVnZXIoZGltU2l6ZSkgJiYgZGltU2l6ZSA+PSAwLFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgYFRlbnNvciBtdXN0IGhhdmUgYSBzaGFwZSBjb21wcmlzZWQgb2YgcG9zaXRpdmUgaW50ZWdlcnMgYnV0IGdvdCBgICtcbiAgICAgICAgICAgIGBzaGFwZSBbJHtzaGFwZX1dLmApO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBmbGF0IGluZGV4IGZvciBhIGdpdmVuIGxvY2F0aW9uIChtdWx0aWRpbWVudGlvbnNhbCBpbmRleCkgaW4gYVxuICogVGVuc29yL211bHRpZGltZW5zaW9uYWwgYXJyYXkuXG4gKlxuICogQHBhcmFtIGxvY3MgTG9jYXRpb24gaW4gdGhlIHRlbnNvci5cbiAqIEBwYXJhbSByYW5rIFJhbmsgb2YgdGhlIHRlbnNvci5cbiAqIEBwYXJhbSBzdHJpZGVzIFRlbnNvciBzdHJpZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jVG9JbmRleChcbiAgICBsb2NzOiBudW1iZXJbXSwgcmFuazogbnVtYmVyLCBzdHJpZGVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGlmIChyYW5rID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMSkge1xuICAgIHJldHVybiBsb2NzWzBdO1xuICB9XG4gIGxldCBpbmRleCA9IGxvY3NbbG9jcy5sZW5ndGggLSAxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgIGluZGV4ICs9IHN0cmlkZXNbaV0gKiBsb2NzW2ldO1xuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbG9jYXRpb24gKG11bHRpZGltZW5zaW9uYWwgaW5kZXgpIGluIGFcbiAqIHRlbnNvci9tdWx0aWRpbWVudGlvbmFsIGFycmF5IGZvciBhIGdpdmVuIGZsYXQgaW5kZXguXG4gKlxuICogQHBhcmFtIGluZGV4IEluZGV4IGluIGZsYXQgYXJyYXkuXG4gKiBAcGFyYW0gcmFuayBSYW5rIG9mIHRlbnNvci5cbiAqIEBwYXJhbSBzdHJpZGVzIFN0cmlkZXMgb2YgdGVuc29yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhUb0xvYyhcbiAgICBpbmRleDogbnVtYmVyLCByYW5rOiBudW1iZXIsIHN0cmlkZXM6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICBpZiAocmFuayA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxKSB7XG4gICAgcmV0dXJuIFtpbmRleF07XG4gIH1cbiAgY29uc3QgbG9jczogbnVtYmVyW10gPSBuZXcgQXJyYXkocmFuayk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICBsb2NzW2ldID0gTWF0aC5mbG9vcihpbmRleCAvIHN0cmlkZXNbaV0pO1xuICAgIGluZGV4IC09IGxvY3NbaV0gKiBzdHJpZGVzW2ldO1xuICB9XG4gIGxvY3NbbG9jcy5sZW5ndGggLSAxXSA9IGluZGV4O1xuICByZXR1cm4gbG9jcztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBhc3NlcnRzIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEgUHJvbWlzZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSBvYmplY3RcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2Uob2JqZWN0OiBhbnkpOiBvYmplY3QgaXMgUHJvbWlzZTx1bmtub3duPiB7XG4gIC8vICBXZSBjaG9zZSB0byBub3QgdXNlICdvYmogaW5zdGFuY2VPZiBQcm9taXNlJyBmb3IgdHdvIHJlYXNvbnM6XG4gIC8vICAxLiBJdCBvbmx5IHJlbGlhYmx5IHdvcmtzIGZvciBlczYgUHJvbWlzZSwgbm90IG90aGVyIFByb21pc2VcbiAgLy8gIGltcGxlbWVudGF0aW9ucy5cbiAgLy8gIDIuIEl0IGRvZXNuJ3Qgd29yayB3aXRoIGZyYW1ld29yayB0aGF0IHVzZXMgem9uZS5qcy4gem9uZS5qcyBtb25rZXlcbiAgLy8gIHBhdGNoIHRoZSBhc3luYyBjYWxscywgc28gaXQgaXMgcG9zc2libGUgdGhlIG9iaiAocGF0Y2hlZCkgaXNcbiAgLy8gIGNvbXBhcmluZyB0byBhIHByZS1wYXRjaGVkIFByb21pc2UuXG4gIHJldHVybiBvYmplY3QgJiYgb2JqZWN0LnRoZW4gJiYgdHlwZW9mIG9iamVjdC50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "ENV",
    ()=>ENV,
    "Environment",
    ()=>Environment,
    "env",
    ()=>env,
    "getQueryParams",
    ()=>getQueryParams,
    "setEnvironmentGlobal",
    ()=>setEnvironmentGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
// Expects flags from URL in the format ?tfjsflags=FLAG1:1,FLAG2:true.
const TENSORFLOWJS_FLAGS_PREFIX = 'tfjsflags';
class Environment {
    // tslint:disable-next-line: no-any
    constructor(global){
        this.global = global;
        this.flags = {};
        this.flagRegistry = {};
        this.urlFlags = {};
        // Jasmine spies on this in 'environment_test.ts'
        this.getQueryParams = getQueryParams;
        this.populateURLFlags();
    }
    setPlatform(platformName, platform) {
        if (this.platform != null) {
            if (!(env().getBool('IS_TEST') || env().getBool('PROD'))) {
                console.warn(`Platform ${this.platformName} has already been set. ` + `Overwriting the platform with ${platformName}.`);
            }
        }
        this.platformName = platformName;
        this.platform = platform;
    }
    registerFlag(flagName, evaluationFn, setHook) {
        this.flagRegistry[flagName] = {
            evaluationFn,
            setHook
        };
        // Override the flag value from the URL. This has to happen here because
        // the environment is initialized before flags get registered.
        if (this.urlFlags[flagName] != null) {
            const flagValue = this.urlFlags[flagName];
            if (!(env().getBool('IS_TEST') || env().getBool('PROD'))) {
                console.warn(`Setting feature override from URL ${flagName}: ${flagValue}.`);
            }
            this.set(flagName, flagValue);
        }
    }
    async getAsync(flagName) {
        if (flagName in this.flags) {
            return this.flags[flagName];
        }
        this.flags[flagName] = await this.evaluateFlag(flagName);
        return this.flags[flagName];
    }
    get(flagName) {
        if (flagName in this.flags) {
            return this.flags[flagName];
        }
        const flagValue = this.evaluateFlag(flagName);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromise"])(flagValue)) {
            throw new Error(`Flag ${flagName} cannot be synchronously evaluated. ` + `Please use getAsync() instead.`);
        }
        this.flags[flagName] = flagValue;
        return this.flags[flagName];
    }
    getNumber(flagName) {
        return this.get(flagName);
    }
    getBool(flagName) {
        return this.get(flagName);
    }
    getString(flagName) {
        return this.get(flagName);
    }
    getFlags() {
        return this.flags;
    }
    // For backwards compatibility.
    get features() {
        return this.flags;
    }
    set(flagName, value) {
        if (this.flagRegistry[flagName] == null) {
            throw new Error(`Cannot set flag ${flagName} as it has not been registered.`);
        }
        this.flags[flagName] = value;
        if (this.flagRegistry[flagName].setHook != null) {
            this.flagRegistry[flagName].setHook(value);
        }
    }
    evaluateFlag(flagName) {
        if (this.flagRegistry[flagName] == null) {
            throw new Error(`Cannot evaluate flag '${flagName}': no evaluation function found.`);
        }
        return this.flagRegistry[flagName].evaluationFn();
    }
    setFlags(flags) {
        this.flags = Object.assign({}, flags);
    }
    reset() {
        this.flags = {};
        this.urlFlags = {};
        this.populateURLFlags();
    }
    populateURLFlags() {
        if (typeof this.global === 'undefined' || typeof this.global.location === 'undefined' || typeof this.global.location.search === 'undefined') {
            return;
        }
        const urlParams = this.getQueryParams(this.global.location.search);
        if (TENSORFLOWJS_FLAGS_PREFIX in urlParams) {
            const keyValues = urlParams[TENSORFLOWJS_FLAGS_PREFIX].split(',');
            keyValues.forEach((keyValue)=>{
                const [key, value] = keyValue.split(':');
                this.urlFlags[key] = parseValue(key, value);
            });
        }
    }
}
function getQueryParams(queryString) {
    const params = {};
    queryString.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (s, ...t)=>{
        decodeParam(params, t[0], t[1]);
        return t.join('=');
    });
    return params;
}
function decodeParam(params, name, value) {
    params[decodeURIComponent(name)] = decodeURIComponent(value || '');
}
function parseValue(flagName, value) {
    const lowerCaseValue = value.toLowerCase();
    if (lowerCaseValue === 'true' || lowerCaseValue === 'false') {
        return lowerCaseValue === 'true';
    } else if (`${+lowerCaseValue}` === lowerCaseValue) {
        return +lowerCaseValue;
    } else {
        return value;
    }
}
function env() {
    return ENV;
}
let ENV = null;
function setEnvironmentGlobal(environment) {
    ENV = environment;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUdILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFdEMsc0VBQXNFO0FBQ3RFLE1BQU0seUJBQXlCLEdBQUcsV0FBVyxDQUFDO0FBWTlDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBWXRCLG1DQUFtQztJQUNuQyxZQUFtQixNQUFXO1FBQVgsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQVp0QixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGlCQUFZLEdBQTRDLEVBQUUsQ0FBQztRQUUzRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBSzdCLGlEQUFpRDtRQUNqRCxtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUk5QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVyxDQUFDLFlBQW9CLEVBQUUsUUFBa0I7UUFDbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQ1IsWUFBWSxJQUFJLENBQUMsWUFBWSx5QkFBeUI7b0JBQ3RELGlDQUFpQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsWUFBWSxDQUNSLFFBQWdCLEVBQUUsWUFBOEIsRUFDaEQsT0FB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O0FBQ0gsTUFBTSxVQUFVLEdBQUc7SUFDakIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFnQixJQUFJLENBQUM7QUFDbkMsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFdBQXdCO0lBQzNELEdBQUcsR0FBRyxXQUFXLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnLi9wbGF0Zm9ybXMvcGxhdGZvcm0nO1xuaW1wb3J0IHtpc1Byb21pc2V9IGZyb20gJy4vdXRpbF9iYXNlJztcblxuLy8gRXhwZWN0cyBmbGFncyBmcm9tIFVSTCBpbiB0aGUgZm9ybWF0ID90ZmpzZmxhZ3M9RkxBRzE6MSxGTEFHMjp0cnVlLlxuY29uc3QgVEVOU09SRkxPV0pTX0ZMQUdTX1BSRUZJWCA9ICd0ZmpzZmxhZ3MnO1xuXG50eXBlIEZsYWdWYWx1ZSA9IG51bWJlcnxib29sZWFufHN0cmluZztcbnR5cGUgRmxhZ0V2YWx1YXRpb25GbiA9ICgoKSA9PiBGbGFnVmFsdWUpfCgoKSA9PiBQcm9taXNlPEZsYWdWYWx1ZT4pO1xuZXhwb3J0IHR5cGUgRmxhZ3MgPSB7XG4gIFtmZWF0dXJlTmFtZTogc3RyaW5nXTogRmxhZ1ZhbHVlXG59O1xuZXhwb3J0IHR5cGUgRmxhZ1JlZ2lzdHJ5RW50cnkgPSB7XG4gIGV2YWx1YXRpb25GbjogRmxhZ0V2YWx1YXRpb25GbjtcbiAgc2V0SG9vaz86ICh2YWx1ZTogRmxhZ1ZhbHVlKSA9PiB2b2lkO1xufTtcblxuLyoqXG4gKiBUaGUgZW52aXJvbm1lbnQgY29udGFpbnMgZXZhbHVhdGVkIGZsYWdzIGFzIHdlbGwgYXMgdGhlIHJlZ2lzdGVyZWQgcGxhdGZvcm0uXG4gKiBUaGlzIGlzIGFsd2F5cyB1c2VkIGFzIGEgZ2xvYmFsIHNpbmdsZXRvbiBhbmQgY2FuIGJlIHJldHJpZXZlZCB3aXRoXG4gKiBgdGYuZW52KClgLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdFbnZpcm9ubWVudCd9XG4gKi9cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG4gIHByaXZhdGUgZmxhZ3M6IEZsYWdzID0ge307XG4gIHByaXZhdGUgZmxhZ1JlZ2lzdHJ5OiB7W2ZsYWdOYW1lOiBzdHJpbmddOiBGbGFnUmVnaXN0cnlFbnRyeX0gPSB7fTtcblxuICBwcml2YXRlIHVybEZsYWdzOiBGbGFncyA9IHt9O1xuXG4gIHBsYXRmb3JtTmFtZTogc3RyaW5nO1xuICBwbGF0Zm9ybTogUGxhdGZvcm07XG5cbiAgLy8gSmFzbWluZSBzcGllcyBvbiB0aGlzIGluICdlbnZpcm9ubWVudF90ZXN0LnRzJ1xuICBnZXRRdWVyeVBhcmFtcyA9IGdldFF1ZXJ5UGFyYW1zO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnbG9iYWw6IGFueSkge1xuICAgIHRoaXMucG9wdWxhdGVVUkxGbGFncygpO1xuICB9XG5cbiAgc2V0UGxhdGZvcm0ocGxhdGZvcm1OYW1lOiBzdHJpbmcsIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtICE9IG51bGwpIHtcbiAgICAgIGlmICghKGVudigpLmdldEJvb2woJ0lTX1RFU1QnKSB8fCBlbnYoKS5nZXRCb29sKCdQUk9EJykpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBQbGF0Zm9ybSAke3RoaXMucGxhdGZvcm1OYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHNldC4gYCArXG4gICAgICAgICAgICBgT3ZlcndyaXRpbmcgdGhlIHBsYXRmb3JtIHdpdGggJHtwbGF0Zm9ybU5hbWV9LmApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBsYXRmb3JtTmFtZSA9IHBsYXRmb3JtTmFtZTtcbiAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG4gIH1cblxuICByZWdpc3RlckZsYWcoXG4gICAgICBmbGFnTmFtZTogc3RyaW5nLCBldmFsdWF0aW9uRm46IEZsYWdFdmFsdWF0aW9uRm4sXG4gICAgICBzZXRIb29rPzogKHZhbHVlOiBGbGFnVmFsdWUpID0+IHZvaWQpIHtcbiAgICB0aGlzLmZsYWdSZWdpc3RyeVtmbGFnTmFtZV0gPSB7ZXZhbHVhdGlvbkZuLCBzZXRIb29rfTtcblxuICAgIC8vIE92ZXJyaWRlIHRoZSBmbGFnIHZhbHVlIGZyb20gdGhlIFVSTC4gVGhpcyBoYXMgdG8gaGFwcGVuIGhlcmUgYmVjYXVzZVxuICAgIC8vIHRoZSBlbnZpcm9ubWVudCBpcyBpbml0aWFsaXplZCBiZWZvcmUgZmxhZ3MgZ2V0IHJlZ2lzdGVyZWQuXG4gICAgaWYgKHRoaXMudXJsRmxhZ3NbZmxhZ05hbWVdICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGZsYWdWYWx1ZSA9IHRoaXMudXJsRmxhZ3NbZmxhZ05hbWVdO1xuICAgICAgaWYgKCEoZW52KCkuZ2V0Qm9vbCgnSVNfVEVTVCcpIHx8IGVudigpLmdldEJvb2woJ1BST0QnKSkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFNldHRpbmcgZmVhdHVyZSBvdmVycmlkZSBmcm9tIFVSTCAke2ZsYWdOYW1lfTogJHtmbGFnVmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXQoZmxhZ05hbWUsIGZsYWdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QXN5bmMoZmxhZ05hbWU6IHN0cmluZyk6IFByb21pc2U8RmxhZ1ZhbHVlPiB7XG4gICAgaWYgKGZsYWdOYW1lIGluIHRoaXMuZmxhZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmZsYWdzW2ZsYWdOYW1lXTtcbiAgICB9XG5cbiAgICB0aGlzLmZsYWdzW2ZsYWdOYW1lXSA9IGF3YWl0IHRoaXMuZXZhbHVhdGVGbGFnKGZsYWdOYW1lKTtcbiAgICByZXR1cm4gdGhpcy5mbGFnc1tmbGFnTmFtZV07XG4gIH1cblxuICBnZXQoZmxhZ05hbWU6IHN0cmluZyk6IEZsYWdWYWx1ZSB7XG4gICAgaWYgKGZsYWdOYW1lIGluIHRoaXMuZmxhZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLmZsYWdzW2ZsYWdOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBmbGFnVmFsdWUgPSB0aGlzLmV2YWx1YXRlRmxhZyhmbGFnTmFtZSk7XG4gICAgaWYgKGlzUHJvbWlzZShmbGFnVmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZsYWcgJHtmbGFnTmFtZX0gY2Fubm90IGJlIHN5bmNocm9ub3VzbHkgZXZhbHVhdGVkLiBgICtcbiAgICAgICAgICBgUGxlYXNlIHVzZSBnZXRBc3luYygpIGluc3RlYWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5mbGFnc1tmbGFnTmFtZV0gPSBmbGFnVmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuZmxhZ3NbZmxhZ05hbWVdO1xuICB9XG5cbiAgZ2V0TnVtYmVyKGZsYWdOYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldChmbGFnTmFtZSkgYXMgbnVtYmVyO1xuICB9XG5cbiAgZ2V0Qm9vbChmbGFnTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGZsYWdOYW1lKSBhcyBib29sZWFuO1xuICB9XG5cbiAgZ2V0U3RyaW5nKGZsYWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldChmbGFnTmFtZSkgYXMgc3RyaW5nO1xuICB9XG5cbiAgZ2V0RmxhZ3MoKTogRmxhZ3Mge1xuICAgIHJldHVybiB0aGlzLmZsYWdzO1xuICB9XG4gIC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgZ2V0IGZlYXR1cmVzKCk6IEZsYWdzIHtcbiAgICByZXR1cm4gdGhpcy5mbGFncztcbiAgfVxuXG4gIHNldChmbGFnTmFtZTogc3RyaW5nLCB2YWx1ZTogRmxhZ1ZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmxhZ1JlZ2lzdHJ5W2ZsYWdOYW1lXSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENhbm5vdCBzZXQgZmxhZyAke2ZsYWdOYW1lfSBhcyBpdCBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5gKTtcbiAgICB9XG4gICAgdGhpcy5mbGFnc1tmbGFnTmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5mbGFnUmVnaXN0cnlbZmxhZ05hbWVdLnNldEhvb2sgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mbGFnUmVnaXN0cnlbZmxhZ05hbWVdLnNldEhvb2sodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXZhbHVhdGVGbGFnKGZsYWdOYW1lOiBzdHJpbmcpOiBGbGFnVmFsdWV8UHJvbWlzZTxGbGFnVmFsdWU+IHtcbiAgICBpZiAodGhpcy5mbGFnUmVnaXN0cnlbZmxhZ05hbWVdID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2Fubm90IGV2YWx1YXRlIGZsYWcgJyR7ZmxhZ05hbWV9Jzogbm8gZXZhbHVhdGlvbiBmdW5jdGlvbiBmb3VuZC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmxhZ1JlZ2lzdHJ5W2ZsYWdOYW1lXS5ldmFsdWF0aW9uRm4oKTtcbiAgfVxuXG4gIHNldEZsYWdzKGZsYWdzOiBGbGFncykge1xuICAgIHRoaXMuZmxhZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBmbGFncyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmZsYWdzID0ge307XG4gICAgdGhpcy51cmxGbGFncyA9IHt9O1xuICAgIHRoaXMucG9wdWxhdGVVUkxGbGFncygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3B1bGF0ZVVSTEZsYWdzKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5nbG9iYWwgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLmdsb2JhbC5sb2NhdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMuZ2xvYmFsLmxvY2F0aW9uLnNlYXJjaCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSB0aGlzLmdldFF1ZXJ5UGFyYW1zKHRoaXMuZ2xvYmFsLmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgaWYgKFRFTlNPUkZMT1dKU19GTEFHU19QUkVGSVggaW4gdXJsUGFyYW1zKSB7XG4gICAgICBjb25zdCBrZXlWYWx1ZXMgPSB1cmxQYXJhbXNbVEVOU09SRkxPV0pTX0ZMQUdTX1BSRUZJWF0uc3BsaXQoJywnKTtcbiAgICAgIGtleVZhbHVlcy5mb3JFYWNoKGtleVZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0ga2V5VmFsdWUuc3BsaXQoJzonKSBhcyBbc3RyaW5nLCBzdHJpbmddO1xuICAgICAgICB0aGlzLnVybEZsYWdzW2tleV0gPSBwYXJzZVZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVyeVBhcmFtcyhxdWVyeVN0cmluZzogc3RyaW5nKToge1trZXk6IHN0cmluZ106IHN0cmluZ30ge1xuICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgcXVlcnlTdHJpbmcucmVwbGFjZSgvWz8mXShbXj0/Jl0rKSg/Oj0oW14mXSopKT8vZywgKHMsIC4uLnQpID0+IHtcbiAgICBkZWNvZGVQYXJhbShwYXJhbXMsIHRbMF0sIHRbMV0pO1xuICAgIHJldHVybiB0LmpvaW4oJz0nKTtcbiAgfSk7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKFxuICAgIHBhcmFtczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sIG5hbWU6IHN0cmluZywgdmFsdWU/OiBzdHJpbmcpIHtcbiAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChuYW1lKV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUgfHwgJycpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKGZsYWdOYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBGbGFnVmFsdWUge1xuICBjb25zdCBsb3dlckNhc2VWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChsb3dlckNhc2VWYWx1ZSA9PT0gJ3RydWUnIHx8IGxvd2VyQ2FzZVZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGxvd2VyQ2FzZVZhbHVlID09PSAndHJ1ZSc7XG4gIH0gZWxzZSBpZiAoYCR7KyBsb3dlckNhc2VWYWx1ZX1gID09PSBsb3dlckNhc2VWYWx1ZSkge1xuICAgIHJldHVybiArbG93ZXJDYXNlVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBlbnZpcm9ubWVudCAoYSBnbG9iYWwgc2luZ2xldG9uKS5cbiAqXG4gKiBUaGUgZW52aXJvbm1lbnQgb2JqZWN0IGNvbnRhaW5zIHRoZSBldmFsdWF0ZWQgZmVhdHVyZSB2YWx1ZXMgYXMgd2VsbCBhcyB0aGVcbiAqIGFjdGl2ZSBwbGF0Zm9ybS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnRW52aXJvbm1lbnQnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW52KCkge1xuICByZXR1cm4gRU5WO1xufVxuXG5leHBvcnQgbGV0IEVOVjogRW52aXJvbm1lbnQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVudmlyb25tZW50R2xvYmFsKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCkge1xuICBFTlYgPSBlbnZpcm9ubWVudDtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/global_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ // Note that the identifier globalNameSpace is scoped to this module, but will
// always resolve to the same global object regardless of how the module is
// resolved.
// tslint:disable-next-line:no-any
__turbopack_context__.s([
    "getGlobal",
    ()=>getGlobal,
    "getGlobalNamespace",
    ()=>getGlobalNamespace
]);
let globalNameSpace;
function getGlobalNamespace() {
    if (globalNameSpace == null) {
        // tslint:disable-next-line:no-any
        let ns;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else if ("TURBOPACK compile-time truthy", 1) {
            ns = /*TURBOPACK member replacement*/ __turbopack_context__.g;
        } else //TURBOPACK unreachable
        ;
        globalNameSpace = ns;
    }
    return globalNameSpace;
}
// tslint:disable-next-line:no-any
function getGlobalMap() {
    const ns = getGlobalNamespace();
    if (ns._tfGlobals == null) {
        ns._tfGlobals = new Map();
    }
    return ns._tfGlobals;
}
function getGlobal(key, init) {
    const globalMap = getGlobalMap();
    if (globalMap.has(key)) {
        return globalMap.get(key);
    } else {
        const singleton = init();
        globalMap.set(key, singleton);
        return globalMap.get(key);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2dsb2JhbF91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILDhFQUE4RTtBQUM5RSwyRUFBMkU7QUFDM0UsWUFBWTtBQUNaLGtDQUFrQztBQUNsQyxJQUFJLGVBQStDLENBQUM7QUFDcEQsa0NBQWtDO0FBQ2xDLE1BQU0sVUFBVSxrQkFBa0I7SUFDaEMsSUFBSSxlQUFlLElBQUksSUFBSSxFQUFFO1FBQzNCLGtDQUFrQztRQUNsQyxJQUFJLEVBQU8sQ0FBQztRQUNaLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUNuQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1NBQ2I7YUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDMUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNiO2FBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzNDLEVBQUUsR0FBRyxPQUFPLENBQUM7U0FDZDthQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUN4QyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ1g7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtRQUNELGVBQWUsR0FBRyxFQUFFLENBQUM7S0FDdEI7SUFDRCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDO0FBRUQsa0NBQWtDO0FBQ2xDLFNBQVMsWUFBWTtJQUNuQixNQUFNLEVBQUUsR0FBRyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hDLElBQUksRUFBRSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7UUFDekIsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO0FBQ3ZCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFJLEdBQVcsRUFBRSxJQUFhO0lBQ3JELE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQ2pDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLE1BQU0sU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMzQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8vIE5vdGUgdGhhdCB0aGUgaWRlbnRpZmllciBnbG9iYWxOYW1lU3BhY2UgaXMgc2NvcGVkIHRvIHRoaXMgbW9kdWxlLCBidXQgd2lsbFxuLy8gYWx3YXlzIHJlc29sdmUgdG8gdGhlIHNhbWUgZ2xvYmFsIG9iamVjdCByZWdhcmRsZXNzIG9mIGhvdyB0aGUgbW9kdWxlIGlzXG4vLyByZXNvbHZlZC5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmxldCBnbG9iYWxOYW1lU3BhY2U6IHtfdGZHbG9iYWxzOiBNYXA8c3RyaW5nLCBhbnk+fTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWxOYW1lc3BhY2UoKToge190Zkdsb2JhbHM6IE1hcDxzdHJpbmcsIGFueT59IHtcbiAgaWYgKGdsb2JhbE5hbWVTcGFjZSA9PSBudWxsKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGxldCBuczogYW55O1xuICAgIGlmICh0eXBlb2YgKHdpbmRvdykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBucyA9IHdpbmRvdztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZ2xvYmFsKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5zID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIChwcm9jZXNzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5zID0gcHJvY2VzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAoc2VsZikgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBucyA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSBnbG9iYWwgb2JqZWN0Jyk7XG4gICAgfVxuICAgIGdsb2JhbE5hbWVTcGFjZSA9IG5zO1xuICB9XG4gIHJldHVybiBnbG9iYWxOYW1lU3BhY2U7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmZ1bmN0aW9uIGdldEdsb2JhbE1hcCgpOiBNYXA8c3RyaW5nLCBhbnk+IHtcbiAgY29uc3QgbnMgPSBnZXRHbG9iYWxOYW1lc3BhY2UoKTtcbiAgaWYgKG5zLl90Zkdsb2JhbHMgPT0gbnVsbCkge1xuICAgIG5zLl90Zkdsb2JhbHMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgcmV0dXJuIG5zLl90Zkdsb2JhbHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGdsb2JhbGx5IGFjY2Vzc2libGUgJ3NpbmdsZXRvbicgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBrZXkgdGhlIG5hbWUgb2YgdGhlIG9iamVjdFxuICogQHBhcmFtIGluaXQgYSBmdW5jdGlvbiB0byBpbml0aWFsaXplIHRvIGluaXRpYWxpemUgdGhpcyBvYmplY3RcbiAqICAgICAgICAgICAgIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGZldGNoZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iYWw8VD4oa2V5OiBzdHJpbmcsIGluaXQ6ICgpID0+IFQpOiBUIHtcbiAgY29uc3QgZ2xvYmFsTWFwID0gZ2V0R2xvYmFsTWFwKCk7XG4gIGlmIChnbG9iYWxNYXAuaGFzKGtleSkpIHtcbiAgICByZXR1cm4gZ2xvYmFsTWFwLmdldChrZXkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNpbmdsZXRvbiA9IGluaXQoKTtcbiAgICBnbG9iYWxNYXAuc2V0KGtleSwgc2luZ2xldG9uKTtcbiAgICByZXR1cm4gZ2xvYmFsTWFwLmdldChrZXkpO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Abs",
    ()=>Abs,
    "Acos",
    ()=>Acos,
    "Acosh",
    ()=>Acosh,
    "Add",
    ()=>Add,
    "AddN",
    ()=>AddN,
    "All",
    ()=>All,
    "Any",
    ()=>Any,
    "ArgMax",
    ()=>ArgMax,
    "ArgMin",
    ()=>ArgMin,
    "Asin",
    ()=>Asin,
    "Asinh",
    ()=>Asinh,
    "Atan",
    ()=>Atan,
    "Atan2",
    ()=>Atan2,
    "Atanh",
    ()=>Atanh,
    "AvgPool",
    ()=>AvgPool,
    "AvgPool3D",
    ()=>AvgPool3D,
    "AvgPool3DGrad",
    ()=>AvgPool3DGrad,
    "AvgPoolGrad",
    ()=>AvgPoolGrad,
    "BatchMatMul",
    ()=>BatchMatMul,
    "BatchToSpaceND",
    ()=>BatchToSpaceND,
    "Bincount",
    ()=>Bincount,
    "BitwiseAnd",
    ()=>BitwiseAnd,
    "BroadcastArgs",
    ()=>BroadcastArgs,
    "BroadcastTo",
    ()=>BroadcastTo,
    "Cast",
    ()=>Cast,
    "Ceil",
    ()=>Ceil,
    "ClipByValue",
    ()=>ClipByValue,
    "Complex",
    ()=>Complex,
    "ComplexAbs",
    ()=>ComplexAbs,
    "Concat",
    ()=>Concat,
    "Conv2D",
    ()=>Conv2D,
    "Conv2DBackpropFilter",
    ()=>Conv2DBackpropFilter,
    "Conv2DBackpropInput",
    ()=>Conv2DBackpropInput,
    "Conv3D",
    ()=>Conv3D,
    "Conv3DBackpropFilterV2",
    ()=>Conv3DBackpropFilterV2,
    "Conv3DBackpropInputV2",
    ()=>Conv3DBackpropInputV2,
    "Cos",
    ()=>Cos,
    "Cosh",
    ()=>Cosh,
    "CropAndResize",
    ()=>CropAndResize,
    "Cumprod",
    ()=>Cumprod,
    "Cumsum",
    ()=>Cumsum,
    "DenseBincount",
    ()=>DenseBincount,
    "DepthToSpace",
    ()=>DepthToSpace,
    "DepthwiseConv2dNative",
    ()=>DepthwiseConv2dNative,
    "DepthwiseConv2dNativeBackpropFilter",
    ()=>DepthwiseConv2dNativeBackpropFilter,
    "DepthwiseConv2dNativeBackpropInput",
    ()=>DepthwiseConv2dNativeBackpropInput,
    "Diag",
    ()=>Diag,
    "Dilation2D",
    ()=>Dilation2D,
    "Dilation2DBackpropFilter",
    ()=>Dilation2DBackpropFilter,
    "Dilation2DBackpropInput",
    ()=>Dilation2DBackpropInput,
    "Draw",
    ()=>Draw,
    "Einsum",
    ()=>Einsum,
    "Elu",
    ()=>Elu,
    "EluGrad",
    ()=>EluGrad,
    "Equal",
    ()=>Equal,
    "Erf",
    ()=>Erf,
    "Exp",
    ()=>Exp,
    "ExpandDims",
    ()=>ExpandDims,
    "Expm1",
    ()=>Expm1,
    "FFT",
    ()=>FFT,
    "Fill",
    ()=>Fill,
    "FlipLeftRight",
    ()=>FlipLeftRight,
    "Floor",
    ()=>Floor,
    "FloorDiv",
    ()=>FloorDiv,
    "FromPixels",
    ()=>FromPixels,
    "FusedBatchNorm",
    ()=>FusedBatchNorm,
    "FusedConv2D",
    ()=>FusedConv2D,
    "FusedDepthwiseConv2D",
    ()=>FusedDepthwiseConv2D,
    "GatherNd",
    ()=>GatherNd,
    "GatherV2",
    ()=>GatherV2,
    "Greater",
    ()=>Greater,
    "GreaterEqual",
    ()=>GreaterEqual,
    "IFFT",
    ()=>IFFT,
    "Identity",
    ()=>Identity,
    "Imag",
    ()=>Imag,
    "IsFinite",
    ()=>IsFinite,
    "IsInf",
    ()=>IsInf,
    "IsNan",
    ()=>IsNan,
    "LRN",
    ()=>LRN,
    "LRNGrad",
    ()=>LRNGrad,
    "LeakyRelu",
    ()=>LeakyRelu,
    "Less",
    ()=>Less,
    "LessEqual",
    ()=>LessEqual,
    "LinSpace",
    ()=>LinSpace,
    "Log",
    ()=>Log,
    "Log1p",
    ()=>Log1p,
    "LogSoftmax",
    ()=>LogSoftmax,
    "LogicalAnd",
    ()=>LogicalAnd,
    "LogicalNot",
    ()=>LogicalNot,
    "LogicalOr",
    ()=>LogicalOr,
    "LogicalXor",
    ()=>LogicalXor,
    "LowerBound",
    ()=>LowerBound,
    "MatrixBandPart",
    ()=>MatrixBandPart,
    "Max",
    ()=>Max,
    "MaxPool",
    ()=>MaxPool,
    "MaxPool3D",
    ()=>MaxPool3D,
    "MaxPool3DGrad",
    ()=>MaxPool3DGrad,
    "MaxPoolGrad",
    ()=>MaxPoolGrad,
    "MaxPoolWithArgmax",
    ()=>MaxPoolWithArgmax,
    "Maximum",
    ()=>Maximum,
    "Mean",
    ()=>Mean,
    "Min",
    ()=>Min,
    "Minimum",
    ()=>Minimum,
    "MirrorPad",
    ()=>MirrorPad,
    "Mod",
    ()=>Mod,
    "Multinomial",
    ()=>Multinomial,
    "Multiply",
    ()=>Multiply,
    "Neg",
    ()=>Neg,
    "NonMaxSuppressionV3",
    ()=>NonMaxSuppressionV3,
    "NonMaxSuppressionV4",
    ()=>NonMaxSuppressionV4,
    "NonMaxSuppressionV5",
    ()=>NonMaxSuppressionV5,
    "NotEqual",
    ()=>NotEqual,
    "OneHot",
    ()=>OneHot,
    "OnesLike",
    ()=>OnesLike,
    "Pack",
    ()=>Pack,
    "PadV2",
    ()=>PadV2,
    "Pool",
    ()=>Pool,
    "Pow",
    ()=>Pow,
    "Prelu",
    ()=>Prelu,
    "Prod",
    ()=>Prod,
    "RaggedGather",
    ()=>RaggedGather,
    "RaggedRange",
    ()=>RaggedRange,
    "RaggedTensorToTensor",
    ()=>RaggedTensorToTensor,
    "Range",
    ()=>Range,
    "Real",
    ()=>Real,
    "RealDiv",
    ()=>RealDiv,
    "Reciprocal",
    ()=>Reciprocal,
    "Relu",
    ()=>Relu,
    "Relu6",
    ()=>Relu6,
    "Reshape",
    ()=>Reshape,
    "ResizeBilinear",
    ()=>ResizeBilinear,
    "ResizeBilinearGrad",
    ()=>ResizeBilinearGrad,
    "ResizeNearestNeighbor",
    ()=>ResizeNearestNeighbor,
    "ResizeNearestNeighborGrad",
    ()=>ResizeNearestNeighborGrad,
    "Reverse",
    ()=>Reverse,
    "RotateWithOffset",
    ()=>RotateWithOffset,
    "Round",
    ()=>Round,
    "Rsqrt",
    ()=>Rsqrt,
    "ScatterNd",
    ()=>ScatterNd,
    "SearchSorted",
    ()=>SearchSorted,
    "Select",
    ()=>Select,
    "Selu",
    ()=>Selu,
    "Sigmoid",
    ()=>Sigmoid,
    "Sign",
    ()=>Sign,
    "Sin",
    ()=>Sin,
    "Sinh",
    ()=>Sinh,
    "Slice",
    ()=>Slice,
    "Softmax",
    ()=>Softmax,
    "Softplus",
    ()=>Softplus,
    "SpaceToBatchND",
    ()=>SpaceToBatchND,
    "SparseFillEmptyRows",
    ()=>SparseFillEmptyRows,
    "SparseReshape",
    ()=>SparseReshape,
    "SparseSegmentMean",
    ()=>SparseSegmentMean,
    "SparseSegmentSum",
    ()=>SparseSegmentSum,
    "SparseToDense",
    ()=>SparseToDense,
    "SplitV",
    ()=>SplitV,
    "Sqrt",
    ()=>Sqrt,
    "Square",
    ()=>Square,
    "SquaredDifference",
    ()=>SquaredDifference,
    "StaticRegexReplace",
    ()=>StaticRegexReplace,
    "Step",
    ()=>Step,
    "StridedSlice",
    ()=>StridedSlice,
    "StringNGrams",
    ()=>StringNGrams,
    "StringSplit",
    ()=>StringSplit,
    "StringToHashBucketFast",
    ()=>StringToHashBucketFast,
    "Sub",
    ()=>Sub,
    "Sum",
    ()=>Sum,
    "Tan",
    ()=>Tan,
    "Tanh",
    ()=>Tanh,
    "TensorScatterUpdate",
    ()=>TensorScatterUpdate,
    "Tile",
    ()=>Tile,
    "TopK",
    ()=>TopK,
    "Transform",
    ()=>Transform,
    "Transpose",
    ()=>Transpose,
    "Unique",
    ()=>Unique,
    "Unpack",
    ()=>Unpack,
    "UnsortedSegmentSum",
    ()=>UnsortedSegmentSum,
    "UpperBound",
    ()=>UpperBound,
    "ZerosLike",
    ()=>ZerosLike,
    "_FusedMatMul",
    ()=>_FusedMatMul
]);
const Abs = 'Abs';
const Acos = 'Acos';
const Acosh = 'Acosh';
const Add = 'Add';
const AddN = 'AddN';
const All = 'All';
const Any = 'Any';
const ArgMax = 'ArgMax';
const ArgMin = 'ArgMin';
const Asin = 'Asin';
const Asinh = 'Asinh';
const Atan = 'Atan';
const Atanh = 'Atanh';
const Atan2 = 'Atan2';
const AvgPool = 'AvgPool';
const AvgPoolGrad = 'AvgPoolGrad';
const AvgPool3D = 'AvgPool3D';
const AvgPool3DGrad = 'AvgPool3DGrad';
const BatchMatMul = 'BatchMatMul';
const BatchToSpaceND = 'BatchToSpaceND';
const Bincount = 'Bincount';
const BitwiseAnd = 'BitwiseAnd';
const BroadcastTo = 'BroadcastTo';
const BroadcastArgs = 'BroadcastArgs';
const Cast = 'Cast';
const Ceil = 'Ceil';
const ClipByValue = 'ClipByValue';
const Complex = 'Complex';
const ComplexAbs = 'ComplexAbs';
const Concat = 'Concat';
const Conv2D = 'Conv2D';
const Conv2DBackpropFilter = 'Conv2DBackpropFilter';
const Conv2DBackpropInput = 'Conv2DBackpropInput';
const Conv3D = 'Conv3D';
const Conv3DBackpropFilterV2 = 'Conv3DBackpropFilterV2';
const Conv3DBackpropInputV2 = 'Conv3DBackpropInputV2';
const Cos = 'Cos';
const Cosh = 'Cosh';
const Cumprod = 'Cumprod';
const Cumsum = 'Cumsum';
const CropAndResize = 'CropAndResize';
const DenseBincount = 'DenseBincount';
const DepthToSpace = 'DepthToSpace';
const DepthwiseConv2dNative = 'DepthwiseConv2dNative';
const DepthwiseConv2dNativeBackpropFilter = 'DepthwiseConv2dNativeBackpropFilter';
const DepthwiseConv2dNativeBackpropInput = 'DepthwiseConv2dNativeBackpropInput';
const Diag = 'Diag';
const Dilation2D = 'Dilation2D';
const Dilation2DBackpropInput = 'Dilation2DBackpropInput';
const Dilation2DBackpropFilter = 'Dilation2DBackpropFilter';
const Draw = 'Draw';
const RealDiv = 'RealDiv';
const Einsum = 'Einsum';
const Elu = 'Elu';
const EluGrad = 'EluGrad';
const Erf = 'Erf';
const Equal = 'Equal';
const Exp = 'Exp';
const ExpandDims = 'ExpandDims';
const Expm1 = 'Expm1';
const FFT = 'FFT';
const Fill = 'Fill';
const FlipLeftRight = 'FlipLeftRight';
const Floor = 'Floor';
const FloorDiv = 'FloorDiv';
const FusedBatchNorm = 'FusedBatchNorm';
const GatherV2 = 'GatherV2';
const GatherNd = 'GatherNd';
const Greater = 'Greater';
const GreaterEqual = 'GreaterEqual';
const Identity = 'Identity';
const IFFT = 'IFFT';
const Imag = 'Imag';
const IsFinite = 'IsFinite';
const IsInf = 'IsInf';
const IsNan = 'IsNan';
const LeakyRelu = 'LeakyRelu';
const Less = 'Less';
const LessEqual = 'LessEqual';
const LinSpace = 'LinSpace';
const Log = 'Log';
const Log1p = 'Log1p';
const LogicalAnd = 'LogicalAnd';
const LogicalNot = 'LogicalNot';
const LogicalOr = 'LogicalOr';
const LogicalXor = 'LogicalXor';
const LogSoftmax = 'LogSoftmax';
const LowerBound = 'LowerBound';
const LRN = 'LRN';
const LRNGrad = 'LRNGrad';
const MatrixBandPart = 'MatrixBandPart';
const Max = 'Max';
const Maximum = 'Maximum';
const MaxPool = 'MaxPool';
const MaxPoolGrad = 'MaxPoolGrad';
const MaxPool3D = 'MaxPool3D';
const MaxPool3DGrad = 'MaxPool3DGrad';
const MaxPoolWithArgmax = 'MaxPoolWithArgmax';
const Mean = 'Mean';
const Min = 'Min';
const Minimum = 'Minimum';
const MirrorPad = 'MirrorPad';
const Mod = 'Mod';
const Multinomial = 'Multinomial';
const Multiply = 'Multiply';
const Neg = 'Neg';
const NotEqual = 'NotEqual';
const NonMaxSuppressionV3 = 'NonMaxSuppressionV3';
const NonMaxSuppressionV4 = 'NonMaxSuppressionV4';
const NonMaxSuppressionV5 = 'NonMaxSuppressionV5';
const OnesLike = 'OnesLike';
const OneHot = 'OneHot';
const Pack = 'Pack';
const PadV2 = 'PadV2';
const Pool = 'Pool';
const Pow = 'Pow';
const Prelu = 'Prelu';
const Prod = 'Prod';
const RaggedGather = 'RaggedGather';
const RaggedRange = 'RaggedRange';
const RaggedTensorToTensor = 'RaggedTensorToTensor';
const Range = 'Range';
const Real = 'Real';
const Reciprocal = 'Reciprocal';
const Relu = 'Relu';
const Reshape = 'Reshape';
const ResizeNearestNeighbor = 'ResizeNearestNeighbor';
const ResizeNearestNeighborGrad = 'ResizeNearestNeighborGrad';
const ResizeBilinear = 'ResizeBilinear';
const ResizeBilinearGrad = 'ResizeBilinearGrad';
const Relu6 = 'Relu6';
const Reverse = 'Reverse';
const Round = 'Round';
const Rsqrt = 'Rsqrt';
const ScatterNd = 'ScatterNd';
const TensorScatterUpdate = 'TensorScatterUpdate';
const SearchSorted = 'SearchSorted';
const Select = 'Select';
const Selu = 'Selu';
const Slice = 'Slice';
const Sin = 'Sin';
const Sinh = 'Sinh';
const Sign = 'Sign';
const Sigmoid = 'Sigmoid';
const Softplus = 'Softplus';
const Sqrt = 'Sqrt';
const Sum = 'Sum';
const SpaceToBatchND = 'SpaceToBatchND';
const SplitV = 'SplitV';
const Softmax = 'Softmax';
const SparseFillEmptyRows = 'SparseFillEmptyRows';
const SparseReshape = 'SparseReshape';
const SparseSegmentMean = 'SparseSegmentMean';
const SparseSegmentSum = 'SparseSegmentSum';
const SparseToDense = 'SparseToDense';
const SquaredDifference = 'SquaredDifference';
const Square = 'Square';
const StaticRegexReplace = 'StaticRegexReplace';
const StridedSlice = 'StridedSlice';
const StringNGrams = 'StringNGrams';
const StringSplit = 'StringSplit';
const StringToHashBucketFast = 'StringToHashBucketFast';
const Sub = 'Sub';
const Tan = 'Tan';
const Tanh = 'Tanh';
const Tile = 'Tile';
const TopK = 'TopK';
const Transform = 'Transform';
const Transpose = 'Transpose';
const Unique = 'Unique';
const Unpack = 'Unpack';
const UnsortedSegmentSum = 'UnsortedSegmentSum';
const UpperBound = 'UpperBound';
const ZerosLike = 'ZerosLike';
const Step = 'Step';
const FromPixels = 'FromPixels';
const RotateWithOffset = 'RotateWithOffset';
const _FusedMatMul = '_FusedMatMul';
const FusedConv2D = 'FusedConv2D';
const FusedDepthwiseConv2D = 'FusedDepthwiseConv2D'; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybmVsX25hbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9rZXJuZWxfbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFHekIsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUczQixNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBRzdCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFHekIsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUczQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBT3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFPekIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQU0vQixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBTS9CLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUM7QUFHM0IsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUc3QixNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBRzNCLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFHN0IsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUc3QixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBU2pDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFRekMsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQVVyQyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBUzdDLE1BQU0sQ0FBQyxNQUFNLFdBQVcs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QUFHLFFBQVEsQ0FBQztBQVEvQixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBTS9CLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDO0FBT3ZELE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFJdkMsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUdyQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUM7QUFNM0IsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQztBQVN2QyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQVFuRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDO0FBZ0IzQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO0FBaUJ6QyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbi8vIEFsbG93IFVwcGVyQ2FtZWxDYXNlIHZhcmlhYmxlIG5hbWVzXG4vLyB0c2xpbnQ6ZGlzYWJsZTogdmFyaWFibGUtbmFtZVxuLy8gVW5mb3J0dW5hdGVseSBqdXN0IGVuYWJsaW5nIFBhc2NhbENhc2UgcGVyIGZpbGUgKHRzbGludDplbmFibGU6XG4vLyBhbGxvdy1wYXNjYWwtY2FzZSkgZG9lc24ndCB3b3JrLlxuaW1wb3J0IHtOYW1lZFRlbnNvckluZm9NYXB9IGZyb20gJy4va2VybmVsX3JlZ2lzdHJ5JztcbmltcG9ydCB7RXhwbGljaXRQYWRkaW5nfSBmcm9tICcuL29wcy9jb252X3V0aWwnO1xuaW1wb3J0IHtBY3RpdmF0aW9ufSBmcm9tICcuL29wcy9mdXNlZF90eXBlcyc7XG5pbXBvcnQge1RlbnNvckluZm99IGZyb20gJy4vdGVuc29yX2luZm8nO1xuaW1wb3J0IHtEYXRhVHlwZSwgRHJhd09wdGlvbnMsIFBpeGVsRGF0YX0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBYnMgPSAnQWJzJztcbmV4cG9ydCB0eXBlIEFic0lucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgQWNvcyA9ICdBY29zJztcbmV4cG9ydCB0eXBlIEFjb3NJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEFjb3NoID0gJ0Fjb3NoJztcbmV4cG9ydCB0eXBlIEFjb3NoSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBBZGQgPSAnQWRkJztcbmV4cG9ydCB0eXBlIEFkZElucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEFkZE4gPSAnQWRkTic7XG5leHBvcnQgdHlwZSBBZGROSW5wdXRzID0gVGVuc29ySW5mb1tdO1xuXG5leHBvcnQgY29uc3QgQWxsID0gJ0FsbCc7XG5leHBvcnQgdHlwZSBBbGxJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQWxsQXR0cnMge1xuICBheGlzOiBudW1iZXJ8bnVtYmVyW107XG4gIGtlZXBEaW1zOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQW55ID0gJ0FueSc7XG5leHBvcnQgdHlwZSBBbnlJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXR0cnMge1xuICBheGlzOiBudW1iZXJ8bnVtYmVyW107XG4gIGtlZXBEaW1zOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQXJnTWF4ID0gJ0FyZ01heCc7XG5leHBvcnQgdHlwZSBBcmdNYXhJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQXJnTWF4QXR0cnMge1xuICBheGlzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBBcmdNaW4gPSAnQXJnTWluJztcbmV4cG9ydCB0eXBlIEFyZ01pbklucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBBcmdNaW5BdHRycyB7XG4gIGF4aXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEFzaW4gPSAnQXNpbic7XG5leHBvcnQgdHlwZSBBc2luSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBBc2luaCA9ICdBc2luaCc7XG5leHBvcnQgdHlwZSBBc2luaElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgQXRhbiA9ICdBdGFuJztcbmV4cG9ydCB0eXBlIEF0YW5JbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEF0YW5oID0gJ0F0YW5oJztcbmV4cG9ydCB0eXBlIEF0YW5oSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBBdGFuMiA9ICdBdGFuMic7XG5leHBvcnQgdHlwZSBBdGFuMklucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEF2Z1Bvb2wgPSAnQXZnUG9vbCc7XG5leHBvcnQgdHlwZSBBdmdQb29sSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIEF2Z1Bvb2xBdHRycyB7XG4gIGZpbHRlclNpemU6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJ3xudW1iZXJ8RXhwbGljaXRQYWRkaW5nO1xuICBkaW1Sb3VuZGluZ01vZGU/OiAnZmxvb3InfCdyb3VuZCd8J2NlaWwnO1xufVxuXG5leHBvcnQgY29uc3QgQXZnUG9vbEdyYWQgPSAnQXZnUG9vbEdyYWQnO1xuZXhwb3J0IHR5cGUgQXZnUG9vbEdyYWRJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2R5J3wnaW5wdXQnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQXZnUG9vbEdyYWRBdHRycyB7XG4gIGZpbHRlclNpemU6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJ3xudW1iZXJ8RXhwbGljaXRQYWRkaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQXZnUG9vbDNEID0gJ0F2Z1Bvb2wzRCc7XG5leHBvcnQgdHlwZSBBdmdQb29sM0RJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQXZnUG9vbDNEQXR0cnMge1xuICBmaWx0ZXJTaXplOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcjtcbiAgZGltUm91bmRpbmdNb2RlPzogJ2Zsb29yJ3wncm91bmQnfCdjZWlsJztcbiAgZGF0YUZvcm1hdDogJ05ESFdDJ3wnTkNESFcnO1xufVxuXG5leHBvcnQgY29uc3QgQXZnUG9vbDNER3JhZCA9ICdBdmdQb29sM0RHcmFkJztcbmV4cG9ydCB0eXBlIEF2Z1Bvb2wzREdyYWRJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2R5J3wnaW5wdXQnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQXZnUG9vbDNER3JhZEF0dHJzIHtcbiAgZmlsdGVyU2l6ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJ3xudW1iZXI7XG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCc7XG59XG5cbmV4cG9ydCBjb25zdCBCYXRjaE1hdE11bCA9ICdCYXRjaE1hdE11bCc7XG5leHBvcnQgdHlwZSBCYXRjaE1hdE11bElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnYSd8J2InPjtcbmV4cG9ydCBpbnRlcmZhY2UgQmF0Y2hNYXRNdWxBdHRycyB7XG4gIHRyYW5zcG9zZUE6IGJvb2xlYW47XG4gIHRyYW5zcG9zZUI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBCYXRjaFRvU3BhY2VORCA9ICdCYXRjaFRvU3BhY2VORCc7XG5leHBvcnQgdHlwZSBCYXRjaFRvU3BhY2VORElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBCYXRjaFRvU3BhY2VOREF0dHJzIHtcbiAgYmxvY2tTaGFwZTogbnVtYmVyW107XG4gIGNyb3BzOiBudW1iZXJbXVtdO1xufVxuXG5leHBvcnQgdHlwZSBCaW5hcnlJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2EnfCdiJz47XG5cbmV4cG9ydCBjb25zdCBCaW5jb3VudCA9ICdCaW5jb3VudCc7XG5leHBvcnQgdHlwZSBCaW5jb3VudElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCd8J3dlaWdodHMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQmluY291bnRBdHRycyB7XG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEJpdHdpc2VBbmQgPSAnQml0d2lzZUFuZCc7XG5leHBvcnQgdHlwZSBCaXR3aXNlQW5kSW5wdXRzID0gQmluYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgQnJvYWRjYXN0VG8gPSAnQnJvYWRjYXN0VG8nO1xuZXhwb3J0IHR5cGUgQnJvYWRjYXN0VG9JbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQnJvYWRDYXN0VG9BdHRycyB7XG4gIHNoYXBlOiBudW1iZXJbXTtcbiAgaW5wdXRTaGFwZTogbnVtYmVyW107ICAvLyBmb3IgZ3JhZGllbnRcbn1cblxuZXhwb3J0IGNvbnN0IEJyb2FkY2FzdEFyZ3MgPSAnQnJvYWRjYXN0QXJncyc7XG5leHBvcnQgdHlwZSBCcm9hZGNhc3RBcmdzSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdzMCd8J3MxJz47XG5cbmV4cG9ydCBjb25zdCBDYXN0ID0gJ0Nhc3QnO1xuZXhwb3J0IHR5cGUgQ2FzdElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuZXhwb3J0IGludGVyZmFjZSBDYXN0QXR0cnMge1xuICBkdHlwZTogRGF0YVR5cGU7XG59XG5cbmV4cG9ydCBjb25zdCBDZWlsID0gJ0NlaWwnO1xuZXhwb3J0IHR5cGUgQ2VpbElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgQ2xpcEJ5VmFsdWUgPSAnQ2xpcEJ5VmFsdWUnO1xuZXhwb3J0IHR5cGUgQ2xpcEJ5VmFsdWVJbnB1dHMgPSBVbmFyeUlucHV0cztcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcEJ5VmFsdWVBdHRycyB7XG4gIGNsaXBWYWx1ZU1pbjogbnVtYmVyO1xuICBjbGlwVmFsdWVNYXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IENvbXBsZXggPSAnQ29tcGxleCc7XG5leHBvcnQgdHlwZSBDb21wbGV4SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdyZWFsJ3wnaW1hZyc+O1xuXG5leHBvcnQgY29uc3QgQ29tcGxleEFicyA9ICdDb21wbGV4QWJzJztcbmV4cG9ydCB0eXBlIENvbXBsZXhBYnNJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IENvbmNhdCA9ICdDb25jYXQnO1xuZXhwb3J0IHR5cGUgQ29uY2F0SW5wdXRzID0gVGVuc29ySW5mb1tdO1xuZXhwb3J0IGludGVyZmFjZSBDb25jYXRBdHRycyB7XG4gIGF4aXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnYyRCA9ICdDb252MkQnO1xuZXhwb3J0IHR5cGUgQ29udjJESW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wnZmlsdGVyJz47XG5leHBvcnQgaW50ZXJmYWNlIENvbnYyREF0dHJzIHtcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSd8bnVtYmVyfEV4cGxpY2l0UGFkZGluZztcbiAgZGF0YUZvcm1hdDogJ05IV0MnfCdOQ0hXJztcbiAgZGlsYXRpb25zOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgZGltUm91bmRpbmdNb2RlPzogJ2Zsb29yJ3wncm91bmQnfCdjZWlsJztcbn1cblxuZXhwb3J0IGNvbnN0IENvbnYyREJhY2twcm9wRmlsdGVyID0gJ0NvbnYyREJhY2twcm9wRmlsdGVyJztcbmV4cG9ydCB0eXBlIENvbnYyREJhY2twcm9wRmlsdGVySW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wnZHknPjtcbmV4cG9ydCBpbnRlcmZhY2UgQ29udjJEQmFja3Byb3BGaWx0ZXJBdHRycyB7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcnxFeHBsaWNpdFBhZGRpbmc7XG4gIGRhdGFGb3JtYXQ6ICdOSFdDJ3wnTkNIVyc7XG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCc7XG4gIGZpbHRlclNoYXBlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnYyREJhY2twcm9wSW5wdXQgPSAnQ29udjJEQmFja3Byb3BJbnB1dCc7XG5leHBvcnQgdHlwZSBDb252MkRCYWNrcHJvcElucHV0SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdkeSd8J2ZpbHRlcic+O1xuZXhwb3J0IGludGVyZmFjZSBDb252MkRCYWNrcHJvcElucHV0QXR0cnMge1xuICBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJ3xudW1iZXJ8RXhwbGljaXRQYWRkaW5nO1xuICBkYXRhRm9ybWF0OiAnTkhXQyd8J05DSFcnO1xuICBkaW1Sb3VuZGluZ01vZGU/OiAnZmxvb3InfCdyb3VuZCd8J2NlaWwnO1xuICBpbnB1dFNoYXBlOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbnYzRCA9ICdDb252M0QnO1xuZXhwb3J0IHR5cGUgQ29udjNESW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wnZmlsdGVyJz47XG5leHBvcnQgaW50ZXJmYWNlIENvbnYzREF0dHJzIHtcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJztcbiAgZGF0YUZvcm1hdDogJ05ESFdDJ3wnTkNESFcnO1xuICBkaWxhdGlvbnM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXXxudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDb252M0RCYWNrcHJvcEZpbHRlclYyID0gJ0NvbnYzREJhY2twcm9wRmlsdGVyVjInO1xuZXhwb3J0IHR5cGUgQ29udjNEQmFja3Byb3BGaWx0ZXJWMklucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCd8J2R5Jz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udjNEQmFja3Byb3BGaWx0ZXJWMkF0dHJzIHtcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJztcbiAgZmlsdGVyU2hhcGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBjb25zdCBDb252M0RCYWNrcHJvcElucHV0VjIgPSAnQ29udjNEQmFja3Byb3BJbnB1dFYyJztcbmV4cG9ydCB0eXBlIENvbnYzREJhY2twcm9wSW5wdXRWMklucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdkeSd8J2ZpbHRlcic+O1xuZXhwb3J0IGludGVyZmFjZSBDb252M0RCYWNrcHJvcElucHV0VjJBdHRycyB7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSc7XG4gIGlucHV0U2hhcGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBjb25zdCBDb3MgPSAnQ29zJztcbmV4cG9ydCB0eXBlIENvc0lucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgQ29zaCA9ICdDb3NoJztcbmV4cG9ydCB0eXBlIENvc2hJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEN1bXByb2QgPSAnQ3VtcHJvZCc7XG5leHBvcnQgdHlwZSBDdW1wcm9kSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIEN1bXByb2RBdHRycyB7XG4gIGF4aXM6IG51bWJlcjtcbiAgZXhjbHVzaXZlOiBib29sZWFuO1xuICByZXZlcnNlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQ3Vtc3VtID0gJ0N1bXN1bSc7XG5leHBvcnQgdHlwZSBDdW1zdW1JbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQ3Vtc3VtQXR0cnMge1xuICBheGlzOiBudW1iZXI7XG4gIGV4Y2x1c2l2ZTogYm9vbGVhbjtcbiAgcmV2ZXJzZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENyb3BBbmRSZXNpemUgPSAnQ3JvcEFuZFJlc2l6ZSc7XG5leHBvcnQgdHlwZSBDcm9wQW5kUmVzaXplSW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2ltYWdlJ3wnYm94ZXMnfCdib3hJbmQnPjtcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcEFuZFJlc2l6ZUF0dHJzIHtcbiAgY3JvcFNpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIG1ldGhvZDogJ2JpbGluZWFyJ3wnbmVhcmVzdCc7XG4gIGV4dHJhcG9sYXRpb25WYWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgRGVuc2VCaW5jb3VudCA9ICdEZW5zZUJpbmNvdW50JztcbmV4cG9ydCB0eXBlIERlbnNlQmluY291bnRJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnfCd3ZWlnaHRzJz47XG5leHBvcnQgaW50ZXJmYWNlIERlbnNlQmluY291bnRBdHRycyB7XG4gIHNpemU6IG51bWJlcjtcbiAgYmluYXJ5T3V0cHV0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IERlcHRoVG9TcGFjZSA9ICdEZXB0aFRvU3BhY2UnO1xuZXhwb3J0IHR5cGUgRGVwdGhUb1NwYWNlSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIERlcHRoVG9TcGFjZUF0dHJzIHtcbiAgYmxvY2tTaXplOiBudW1iZXI7XG4gIGRhdGFGb3JtYXQ6ICdOSFdDJ3wnTkNIVyc7XG59XG5cbmV4cG9ydCBjb25zdCBEZXB0aHdpc2VDb252MmROYXRpdmUgPSAnRGVwdGh3aXNlQ29udjJkTmF0aXZlJztcbmV4cG9ydCB0eXBlIERlcHRod2lzZUNvbnYyZE5hdGl2ZUlucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wnZmlsdGVyJz47XG5leHBvcnQgaW50ZXJmYWNlIERlcHRod2lzZUNvbnYyZE5hdGl2ZUF0dHJzIHtcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSd8bnVtYmVyfEV4cGxpY2l0UGFkZGluZztcbiAgZGF0YUZvcm1hdDogJ05IV0MnfCdOQ0hXJztcbiAgZGlsYXRpb25zOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgZGltUm91bmRpbmdNb2RlPzogJ2Zsb29yJ3wncm91bmQnfCdjZWlsJztcbn1cblxuZXhwb3J0IGNvbnN0IERlcHRod2lzZUNvbnYyZE5hdGl2ZUJhY2twcm9wRmlsdGVyID1cbiAgICAnRGVwdGh3aXNlQ29udjJkTmF0aXZlQmFja3Byb3BGaWx0ZXInO1xuZXhwb3J0IHR5cGUgRGVwdGh3aXNlQ29udjJkTmF0aXZlQmFja3Byb3BGaWx0ZXJJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCd8J2R5Jz47XG5leHBvcnQgaW50ZXJmYWNlIERlcHRod2lzZUNvbnYyZE5hdGl2ZUJhY2twcm9wRmlsdGVyQXR0cnMge1xuICBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgZGlsYXRpb25zOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJ3xudW1iZXJ8RXhwbGljaXRQYWRkaW5nO1xuICBkaW1Sb3VuZGluZ01vZGU/OiAnZmxvb3InfCdyb3VuZCd8J2NlaWwnO1xuICBmaWx0ZXJTaGFwZTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBjb25zdCBEZXB0aHdpc2VDb252MmROYXRpdmVCYWNrcHJvcElucHV0ID1cbiAgICAnRGVwdGh3aXNlQ29udjJkTmF0aXZlQmFja3Byb3BJbnB1dCc7XG5leHBvcnQgdHlwZSBEZXB0aHdpc2VDb252MmROYXRpdmVCYWNrcHJvcElucHV0SW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2R5J3wnZmlsdGVyJz47XG5leHBvcnQgaW50ZXJmYWNlIERlcHRod2lzZUNvbnYyZE5hdGl2ZUJhY2twcm9wSW5wdXRBdHRycyB7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBkaWxhdGlvbnM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcnxFeHBsaWNpdFBhZGRpbmc7XG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCc7XG4gIGlucHV0U2hhcGU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgY29uc3QgRGlhZyA9ICdEaWFnJztcbmV4cG9ydCB0eXBlIERpYWdJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcblxuZXhwb3J0IGNvbnN0IERpbGF0aW9uMkQgPSAnRGlsYXRpb24yRCc7XG5leHBvcnQgdHlwZSBEaWxhdGlvbjJESW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wnZmlsdGVyJz47XG5leHBvcnQgaW50ZXJmYWNlIERpbGF0aW9uMkRBdHRycyB7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcjtcbiAgZGlsYXRpb25zOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IERpbGF0aW9uMkRCYWNrcHJvcElucHV0ID0gJ0RpbGF0aW9uMkRCYWNrcHJvcElucHV0JztcbmV4cG9ydCB0eXBlIERpbGF0aW9uMkRCYWNrcHJvcElucHV0SW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnfCdmaWx0ZXInfCdkeSc+O1xuXG5leHBvcnQgY29uc3QgRGlsYXRpb24yREJhY2twcm9wRmlsdGVyID0gJ0RpbGF0aW9uMkRCYWNrcHJvcEZpbHRlcic7XG5leHBvcnQgdHlwZSBEaWxhdGlvbjJEQmFja3Byb3BGaWx0ZXJJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCd8J2ZpbHRlcid8J2R5Jz47XG5cbmV4cG9ydCBjb25zdCBEcmF3ID0gJ0RyYXcnO1xuZXhwb3J0IHR5cGUgRHJhd0lucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW1hZ2UnPjtcbmV4cG9ydCBpbnRlcmZhY2UgRHJhd0F0dHJzIHtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgb3B0aW9ucz86IERyYXdPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgUmVhbERpdiA9ICdSZWFsRGl2JztcbmV4cG9ydCB0eXBlIFJlYWxEaXZJbnB1dHMgPSBCaW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBFaW5zdW0gPSAnRWluc3VtJztcbmV4cG9ydCB0eXBlIEVpbnN1bUlucHV0cyA9IFRlbnNvckluZm9bXTtcbmV4cG9ydCBpbnRlcmZhY2UgRWluc3VtQXR0cnMge1xuICBlcXVhdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRWx1ID0gJ0VsdSc7XG5leHBvcnQgdHlwZSBFbHVJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcblxuZXhwb3J0IGNvbnN0IEVsdUdyYWQgPSAnRWx1R3JhZCc7XG5leHBvcnQgdHlwZSBFbHVHcmFkSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdkeSd8J3knPjtcblxuZXhwb3J0IGNvbnN0IEVyZiA9ICdFcmYnO1xuZXhwb3J0IHR5cGUgRXJmSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBFcXVhbCA9ICdFcXVhbCc7XG5leHBvcnQgdHlwZSBFcXVhbElucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEV4cCA9ICdFeHAnO1xuZXhwb3J0IHR5cGUgRXhwSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBFeHBhbmREaW1zID0gJ0V4cGFuZERpbXMnO1xuZXhwb3J0IHR5cGUgRXhwYW5kRGltc0lucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW5wdXQnPjtcbmV4cG9ydCBpbnRlcmZhY2UgRXhwYW5kRGltc0F0dHJzIHtcbiAgZGltOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBFeHBtMSA9ICdFeHBtMSc7XG5leHBvcnQgdHlwZSBFeHBtMUlucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgRkZUID0gJ0ZGVCc7XG5leHBvcnQgdHlwZSBGRlRJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2lucHV0Jz47XG5cbmV4cG9ydCBjb25zdCBGaWxsID0gJ0ZpbGwnO1xuZXhwb3J0IGludGVyZmFjZSBGaWxsQXR0cnMge1xuICBzaGFwZTogbnVtYmVyW107XG4gIHZhbHVlOiBudW1iZXJ8c3RyaW5nO1xuICBkdHlwZTogRGF0YVR5cGU7XG59XG5cbmV4cG9ydCBjb25zdCBGbGlwTGVmdFJpZ2h0ID0gJ0ZsaXBMZWZ0UmlnaHQnO1xuZXhwb3J0IHR5cGUgRmxpcExlZnRSaWdodElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW1hZ2UnPjtcblxuZXhwb3J0IGNvbnN0IEZsb29yID0gJ0Zsb29yJztcbmV4cG9ydCB0eXBlIEZsb29ySW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBGbG9vckRpdiA9ICdGbG9vckRpdic7XG5leHBvcnQgdHlwZSBGbG9vckRpdklucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IEZ1c2VkQmF0Y2hOb3JtID0gJ0Z1c2VkQmF0Y2hOb3JtJztcbmV4cG9ydCB0eXBlIEZ1c2VkQmF0Y2hOb3JtSW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnfCdzY2FsZSd8J29mZnNldCd8J21lYW4nfCd2YXJpYW5jZSc+O1xuZXhwb3J0IGludGVyZmFjZSBGdXNlZEJhdGNoTm9ybUF0dHJzIHtcbiAgdmFyaWFuY2VFcHNpbG9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBHYXRoZXJWMiA9ICdHYXRoZXJWMic7XG5leHBvcnQgdHlwZSBHYXRoZXJWMklucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCd8J2luZGljZXMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgR2F0aGVyVjJBdHRycyB7XG4gIGF4aXM6IG51bWJlcjtcbiAgYmF0Y2hEaW1zOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBHYXRoZXJOZCA9ICdHYXRoZXJOZCc7XG5leHBvcnQgdHlwZSBHYXRoZXJOZElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAncGFyYW1zJ3wnaW5kaWNlcyc+O1xuXG5leHBvcnQgY29uc3QgR3JlYXRlciA9ICdHcmVhdGVyJztcbmV4cG9ydCB0eXBlIEdyZWF0ZXJJbnB1dHMgPSBCaW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBHcmVhdGVyRXF1YWwgPSAnR3JlYXRlckVxdWFsJztcbmV4cG9ydCB0eXBlIEdyZWF0ZXJFcXVhbElucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IElkZW50aXR5ID0gJ0lkZW50aXR5JztcbmV4cG9ydCB0eXBlIElkZW50aXR5SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5cbmV4cG9ydCBjb25zdCBJRkZUID0gJ0lGRlQnO1xuZXhwb3J0IHR5cGUgSUZGVElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW5wdXQnPjtcblxuZXhwb3J0IGNvbnN0IEltYWcgPSAnSW1hZyc7XG5leHBvcnQgdHlwZSBJbWFnSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbnB1dCc+O1xuXG5leHBvcnQgY29uc3QgSXNGaW5pdGUgPSAnSXNGaW5pdGUnO1xuZXhwb3J0IHR5cGUgSXNGaW5pdGVJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IElzSW5mID0gJ0lzSW5mJztcbmV4cG9ydCB0eXBlIElzSW5mSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBJc05hbiA9ICdJc05hbic7XG5leHBvcnQgdHlwZSBJc05hbklucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgTGVha3lSZWx1ID0gJ0xlYWt5UmVsdSc7XG5leHBvcnQgdHlwZSBMZWFreVJlbHVJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgTGVha3lSZWx1QXR0cnMge1xuICBhbHBoYTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTGVzcyA9ICdMZXNzJztcbmV4cG9ydCB0eXBlIExlc3NJbnB1dHMgPSBCaW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBMZXNzRXF1YWwgPSAnTGVzc0VxdWFsJztcbmV4cG9ydCB0eXBlIExlc3NFcXVhbElucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IExpblNwYWNlID0gJ0xpblNwYWNlJztcbmV4cG9ydCBpbnRlcmZhY2UgTGluU3BhY2VBdHRycyB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIHN0b3A6IG51bWJlcjtcbiAgbnVtOiBudW1iZXI7XG59XG5leHBvcnQgY29uc3QgTG9nID0gJ0xvZyc7XG5leHBvcnQgdHlwZSBMb2dJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IExvZzFwID0gJ0xvZzFwJztcbmV4cG9ydCB0eXBlIExvZzFwSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBMb2dpY2FsQW5kID0gJ0xvZ2ljYWxBbmQnO1xuZXhwb3J0IHR5cGUgTG9naWNhbEFuZElucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IExvZ2ljYWxOb3QgPSAnTG9naWNhbE5vdCc7XG5leHBvcnQgdHlwZSBMb2dpY2FsTm90SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5cbmV4cG9ydCBjb25zdCBMb2dpY2FsT3IgPSAnTG9naWNhbE9yJztcbmV4cG9ydCB0eXBlIExvZ2ljYWxPcklucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IExvZ2ljYWxYb3IgPSAnTG9naWNhbFhvcic7XG5leHBvcnQgdHlwZSBMb2dpY2FsWG9ySW5wdXRzID0gQmluYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgTG9nU29mdG1heCA9ICdMb2dTb2Z0bWF4JztcbmV4cG9ydCB0eXBlIExvZ1NvZnRtYXhJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2xvZ2l0cyc+O1xuZXhwb3J0IGludGVyZmFjZSBMb2dTb2Z0bWF4QXR0cnMge1xuICBheGlzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBMb3dlckJvdW5kID0gJ0xvd2VyQm91bmQnO1xuZXhwb3J0IHR5cGUgTG93ZXJCb3VuZElucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdzb3J0ZWRTZXF1ZW5jZSd8J3ZhbHVlcyc+O1xuXG5leHBvcnQgY29uc3QgTFJOID0gJ0xSTic7XG5leHBvcnQgdHlwZSBMUk5JbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgTFJOQXR0cnMge1xuICBkZXB0aFJhZGl1czogbnVtYmVyO1xuICBiaWFzOiBudW1iZXI7XG4gIGFscGhhOiBudW1iZXI7XG4gIGJldGE6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IExSTkdyYWQgPSAnTFJOR3JhZCc7XG5leHBvcnQgdHlwZSBMUk5HcmFkSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wneSd8J2R5Jz47XG5leHBvcnQgaW50ZXJmYWNlIExSTkdyYWRBdHRycyB7XG4gIGRlcHRoUmFkaXVzOiBudW1iZXI7XG4gIGJpYXM6IG51bWJlcjtcbiAgYWxwaGE6IG51bWJlcjtcbiAgYmV0YTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTWF0cml4QmFuZFBhcnQgPSAnTWF0cml4QmFuZFBhcnQnO1xuZXhwb3J0IHR5cGUgTWF0cml4QmFuZFBhcnRJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW5wdXQnfCdudW1Mb3dlcid8J251bVVwcGVyJz47XG5leHBvcnQgaW50ZXJmYWNlIE1hdHJpeEJhbmRQYXJ0QXR0cnMge31cblxuZXhwb3J0IGNvbnN0IE1heCA9ICdNYXgnO1xuZXhwb3J0IHR5cGUgTWF4SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIE1heEF0dHJzIHtcbiAgcmVkdWN0aW9uSW5kaWNlczogbnVtYmVyfG51bWJlcltdO1xuICBrZWVwRGltczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE1heGltdW0gPSAnTWF4aW11bSc7XG5leHBvcnQgdHlwZSBNYXhpbXVtSW5wdXRzID0gQmluYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgTWF4UG9vbCA9ICdNYXhQb29sJztcbmV4cG9ydCB0eXBlIE1heFBvb2xJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgTWF4UG9vbEF0dHJzIHtcbiAgZmlsdGVyU2l6ZTogW251bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcnxFeHBsaWNpdFBhZGRpbmc7XG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXhQb29sR3JhZCA9ICdNYXhQb29sR3JhZCc7XG5leHBvcnQgdHlwZSBNYXhQb29sR3JhZElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnZHknfCdpbnB1dCd8J291dHB1dCc+O1xuZXhwb3J0IGludGVyZmFjZSBNYXhQb29sR3JhZEF0dHJzIHtcbiAgZmlsdGVyU2l6ZTogW251bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcnxFeHBsaWNpdFBhZGRpbmc7XG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXhQb29sM0QgPSAnTWF4UG9vbDNEJztcbmV4cG9ydCB0eXBlIE1heFBvb2wzRElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBNYXhQb29sM0RBdHRycyB7XG4gIGZpbHRlclNpemU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSd8bnVtYmVyO1xuICBkYXRhRm9ybWF0OiAnTkRIV0MnfCdOQ0RIVyc7XG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCc7XG59XG5cbmV4cG9ydCBjb25zdCBNYXhQb29sM0RHcmFkID0gJ01heFBvb2wzREdyYWQnO1xuZXhwb3J0IHR5cGUgTWF4UG9vbDNER3JhZElucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdkeSd8J2lucHV0J3wnb3V0cHV0Jz47XG5leHBvcnQgaW50ZXJmYWNlIE1heFBvb2wzREdyYWRBdHRycyB7XG4gIGZpbHRlclNpemU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSd8bnVtYmVyO1xuICBkaW1Sb3VuZGluZ01vZGU/OiAnZmxvb3InfCdyb3VuZCd8J2NlaWwnO1xufVxuXG5leHBvcnQgY29uc3QgTWF4UG9vbFdpdGhBcmdtYXggPSAnTWF4UG9vbFdpdGhBcmdtYXgnO1xuZXhwb3J0IHR5cGUgTWF4UG9vbFdpdGhBcmdtYXhJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgTWF4UG9vbFdpdGhBcmdtYXhBdHRycyB7XG4gIGZpbHRlclNpemU6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgcGFkOiAndmFsaWQnfCdzYW1lJ3xudW1iZXI7XG4gIGluY2x1ZGVCYXRjaEluSW5kZXg6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBNZWFuID0gJ01lYW4nO1xuZXhwb3J0IHR5cGUgTWVhbklucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBNZWFuQXR0cnMge1xuICBheGlzOiBudW1iZXJ8bnVtYmVyW107XG4gIGtlZXBEaW1zOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTWluID0gJ01pbic7XG5leHBvcnQgdHlwZSBNaW5JbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgTWluQXR0cnMge1xuICBheGlzOiBudW1iZXJ8bnVtYmVyW107XG4gIGtlZXBEaW1zOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTWluaW11bSA9ICdNaW5pbXVtJztcbmV4cG9ydCB0eXBlIE1pbmltdW1JbnB1dHMgPSBCaW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBNaXJyb3JQYWQgPSAnTWlycm9yUGFkJztcbmV4cG9ydCB0eXBlIE1pcnJvclBhZElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBNaXJyb3JQYWRBdHRycyB7XG4gIHBhZGRpbmdzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPjtcbiAgbW9kZTogJ3JlZmxlY3QnfCdzeW1tZXRyaWMnO1xufVxuXG5leHBvcnQgY29uc3QgTW9kID0gJ01vZCc7XG5leHBvcnQgdHlwZSBNb2RJbnB1dHMgPSBCaW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBNdWx0aW5vbWlhbCA9ICdNdWx0aW5vbWlhbCc7XG5leHBvcnQgdHlwZSBNdWx0aW5vbWlhbElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnbG9naXRzJz47XG5leHBvcnQgaW50ZXJmYWNlIE11bHRpbm9taWFsQXR0cnMge1xuICBudW1TYW1wbGVzOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbiAgbm9ybWFsaXplZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE11bHRpcGx5ID0gJ011bHRpcGx5JztcbmV4cG9ydCB0eXBlIE11bHRpcGx5SW5wdXRzID0gQmluYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgTmVnID0gJ05lZyc7XG5leHBvcnQgdHlwZSBOZWdJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IE5vdEVxdWFsID0gJ05vdEVxdWFsJztcbmV4cG9ydCB0eXBlIE5vdEVxdWFsSW5wdXRzID0gQmluYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgTm9uTWF4U3VwcHJlc3Npb25WMyA9ICdOb25NYXhTdXBwcmVzc2lvblYzJztcbmV4cG9ydCB0eXBlIE5vbk1heFN1cHByZXNzaW9uVjNJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnYm94ZXMnfCdzY29yZXMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgTm9uTWF4U3VwcHJlc3Npb25WM0F0dHJzIHtcbiAgbWF4T3V0cHV0U2l6ZTogbnVtYmVyO1xuICBpb3VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgc2NvcmVUaHJlc2hvbGQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE5vbk1heFN1cHByZXNzaW9uVjQgPSAnTm9uTWF4U3VwcHJlc3Npb25WNCc7XG5leHBvcnQgdHlwZSBOb25NYXhTdXBwcmVzc2lvblY0SW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2JveGVzJ3wnc2NvcmVzJz47XG5leHBvcnQgaW50ZXJmYWNlIE5vbk1heFN1cHByZXNzaW9uVjRBdHRycyB7XG4gIG1heE91dHB1dFNpemU6IG51bWJlcjtcbiAgaW91VGhyZXNob2xkOiBudW1iZXI7XG4gIHNjb3JlVGhyZXNob2xkOiBudW1iZXI7XG4gIHBhZFRvTWF4T3V0cHV0U2l6ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE5vbk1heFN1cHByZXNzaW9uVjUgPSAnTm9uTWF4U3VwcHJlc3Npb25WNSc7XG5leHBvcnQgdHlwZSBOb25NYXhTdXBwcmVzc2lvblY1SW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2JveGVzJ3wnc2NvcmVzJz47XG5leHBvcnQgaW50ZXJmYWNlIE5vbk1heFN1cHByZXNzaW9uVjVBdHRycyB7XG4gIG1heE91dHB1dFNpemU6IG51bWJlcjtcbiAgaW91VGhyZXNob2xkOiBudW1iZXI7XG4gIHNjb3JlVGhyZXNob2xkOiBudW1iZXI7XG4gIHNvZnRObXNTaWdtYTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgT25lc0xpa2UgPSAnT25lc0xpa2UnO1xuZXhwb3J0IHR5cGUgT25lc0xpa2VJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IE9uZUhvdCA9ICdPbmVIb3QnO1xuZXhwb3J0IHR5cGUgT25lSG90SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbmRpY2VzJz47XG5leHBvcnQgaW50ZXJmYWNlIE9uZUhvdEF0dHJzIHtcbiAgZGVwdGg6IG51bWJlcjtcbiAgb25WYWx1ZTogbnVtYmVyO1xuICBvZmZWYWx1ZTogbnVtYmVyO1xuICBkdHlwZTogRGF0YVR5cGU7XG59XG5cbmV4cG9ydCBjb25zdCBQYWNrID0gJ1BhY2snO1xuZXhwb3J0IHR5cGUgUGFja0lucHV0cyA9IFRlbnNvckluZm9bXTtcbmV4cG9ydCBpbnRlcmZhY2UgUGFja0F0dHJzIHtcbiAgYXhpczogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgUGFkVjIgPSAnUGFkVjInO1xuZXhwb3J0IHR5cGUgUGFkVjJJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgUGFkVjJBdHRycyB7XG4gIHBhZGRpbmdzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPjtcbiAgY29uc3RhbnRWYWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgUG9vbCA9ICdQb29sJztcbmV4cG9ydCB0eXBlIFBvb2xJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2lucHV0Jz47XG5cbmV4cG9ydCBjb25zdCBQb3cgPSAnUG93JztcbmV4cG9ydCB0eXBlIFBvd0lucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IFByZWx1ID0gJ1ByZWx1JztcbmV4cG9ydCB0eXBlIFByZWx1SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4J3wnYWxwaGEnPjtcblxuZXhwb3J0IGNvbnN0IFByb2QgPSAnUHJvZCc7XG5leHBvcnQgdHlwZSBQcm9kSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIFByb2RBdHRycyB7XG4gIGF4aXM6IG51bWJlcnxudW1iZXJbXTtcbiAga2VlcERpbXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSYWdnZWRHYXRoZXIgPSAnUmFnZ2VkR2F0aGVyJztcbmV4cG9ydCB0eXBlIFJhZ2dlZEdhdGhlcklucHV0cyA9IHtcbiAgcGFyYW1zTmVzdGVkU3BsaXRzOiBUZW5zb3JJbmZvW11cbn0mUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdwYXJhbXNEZW5zZVZhbHVlcyd8J2luZGljZXMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgUmFnZ2VkR2F0aGVyQXR0cnMge1xuICBvdXRwdXRSYWdnZWRSYW5rOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBSYWdnZWRSYW5nZSA9ICdSYWdnZWRSYW5nZSc7XG5leHBvcnQgdHlwZSBSYWdnZWRSYW5nZUlucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdzdGFydHMnfCdsaW1pdHMnfCdkZWx0YXMnPjtcblxuZXhwb3J0IGNvbnN0IFJhZ2dlZFRlbnNvclRvVGVuc29yID0gJ1JhZ2dlZFRlbnNvclRvVGVuc29yJztcbmV4cG9ydCB0eXBlIFJhZ2dlZFRlbnNvclRvVGVuc29ySW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3NoYXBlJ3wndmFsdWVzJ3wnZGVmYXVsdFZhbHVlJz4mXG4gICAge3Jvd1BhcnRpdGlvblRlbnNvcnM6IFRlbnNvckluZm9bXX07XG5leHBvcnQgaW50ZXJmYWNlIFJhZ2dlZFRlbnNvclRvVGVuc29yQXR0cnMge1xuICByb3dQYXJ0aXRpb25UeXBlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBSYW5nZSA9ICdSYW5nZSc7XG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlQXR0cnMge1xuICBzdGFydDogbnVtYmVyO1xuICBzdG9wOiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZHR5cGU6ICdmbG9hdDMyJ3wnaW50MzInO1xufVxuXG5leHBvcnQgY29uc3QgUmVhbCA9ICdSZWFsJztcbmV4cG9ydCB0eXBlIFJlYWxJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2lucHV0Jz47XG5cbmV4cG9ydCBjb25zdCBSZWNpcHJvY2FsID0gJ1JlY2lwcm9jYWwnO1xuZXhwb3J0IHR5cGUgUmVjaXByb2NhbElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgUmVsdSA9ICdSZWx1JztcbmV4cG9ydCB0eXBlIFJlbHVJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcblxuZXhwb3J0IGNvbnN0IFJlc2hhcGUgPSAnUmVzaGFwZSc7XG5leHBvcnQgdHlwZSBSZXNoYXBlSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIFJlc2hhcGVBdHRycyB7XG4gIHNoYXBlOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFJlc2l6ZU5lYXJlc3ROZWlnaGJvciA9ICdSZXNpemVOZWFyZXN0TmVpZ2hib3InO1xuZXhwb3J0IHR5cGUgUmVzaXplTmVhcmVzdE5laWdoYm9ySW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbWFnZXMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplTmVhcmVzdE5laWdoYm9yQXR0cnMge1xuICBhbGlnbkNvcm5lcnM6IGJvb2xlYW47XG4gIGhhbGZQaXhlbENlbnRlcnM6IGJvb2xlYW47XG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBjb25zdCBSZXNpemVOZWFyZXN0TmVpZ2hib3JHcmFkID0gJ1Jlc2l6ZU5lYXJlc3ROZWlnaGJvckdyYWQnO1xuZXhwb3J0IHR5cGUgUmVzaXplTmVhcmVzdE5laWdoYm9yR3JhZElucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbWFnZXMnfCdkeSc+O1xuZXhwb3J0IHR5cGUgUmVzaXplTmVhcmVzdE5laWdoYm9yR3JhZEF0dHJzID0gUmVzaXplTmVhcmVzdE5laWdoYm9yQXR0cnM7XG5cbmV4cG9ydCBjb25zdCBSZXNpemVCaWxpbmVhciA9ICdSZXNpemVCaWxpbmVhcic7XG5leHBvcnQgdHlwZSBSZXNpemVCaWxpbmVhcklucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW1hZ2VzJz47XG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6ZUJpbGluZWFyQXR0cnMge1xuICBhbGlnbkNvcm5lcnM6IGJvb2xlYW47XG4gIGhhbGZQaXhlbENlbnRlcnM6IGJvb2xlYW47XG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBjb25zdCBSZXNpemVCaWxpbmVhckdyYWQgPSAnUmVzaXplQmlsaW5lYXJHcmFkJztcbmV4cG9ydCB0eXBlIFJlc2l6ZUJpbGluZWFyR3JhZElucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW1hZ2VzJ3wnZHknPjtcbmV4cG9ydCB0eXBlIFJlc2l6ZUJpbGluZWFyR3JhZEF0dHJzID0gUmVzaXplQmlsaW5lYXJBdHRycztcblxuZXhwb3J0IGNvbnN0IFJlbHU2ID0gJ1JlbHU2JztcbmV4cG9ydCB0eXBlIFJlbHU2SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5cbmV4cG9ydCBjb25zdCBSZXZlcnNlID0gJ1JldmVyc2UnO1xuZXhwb3J0IHR5cGUgUmV2ZXJzZUlucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBSZXZlcnNlQXR0cnMge1xuICBkaW1zOiBudW1iZXJ8bnVtYmVyW107XG59XG5cbmV4cG9ydCBjb25zdCBSb3VuZCA9ICdSb3VuZCc7XG5leHBvcnQgdHlwZSBSb3VuZElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgUnNxcnQgPSAnUnNxcnQnO1xuZXhwb3J0IHR5cGUgUnNxcnRJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IFNjYXR0ZXJOZCA9ICdTY2F0dGVyTmQnO1xuZXhwb3J0IHR5cGUgU2NhdHRlck5kSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbmRpY2VzJ3wndXBkYXRlcyc+O1xuZXhwb3J0IGludGVyZmFjZSBTY2F0dGVyTmRBdHRycyB7XG4gIHNoYXBlOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFRlbnNvclNjYXR0ZXJVcGRhdGUgPSAnVGVuc29yU2NhdHRlclVwZGF0ZSc7XG5leHBvcnQgdHlwZSBUZW5zb3JTY2F0dGVyVXBkYXRlSW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3RlbnNvcid8J2luZGljZXMnfCd1cGRhdGVzJz47XG5leHBvcnQgaW50ZXJmYWNlIFRlbnNvclNjYXR0ZXJVcGRhdGVBdHRycyB7fVxuXG5leHBvcnQgY29uc3QgU2VhcmNoU29ydGVkID0gJ1NlYXJjaFNvcnRlZCc7XG5leHBvcnQgdHlwZSBTZWFyY2hTb3J0ZWRJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnc29ydGVkU2VxdWVuY2UnfCd2YWx1ZXMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoU29ydGVkQXR0cnMge1xuICBzaWRlOiAnbGVmdCd8J3JpZ2h0Jztcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdCA9ICdTZWxlY3QnO1xuZXhwb3J0IHR5cGUgU2VsZWN0SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdjb25kaXRpb24nfCd0J3wnZSc+O1xuXG5leHBvcnQgY29uc3QgU2VsdSA9ICdTZWx1JztcbmV4cG9ydCB0eXBlIFNlbHVJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcblxuZXhwb3J0IGNvbnN0IFNsaWNlID0gJ1NsaWNlJztcbmV4cG9ydCB0eXBlIFNsaWNlSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIFNsaWNlQXR0cnMge1xuICBiZWdpbjogbnVtYmVyfG51bWJlcltdO1xuICBzaXplOiBudW1iZXJ8bnVtYmVyW107XG59XG5leHBvcnQgY29uc3QgU2luID0gJ1Npbic7XG5leHBvcnQgdHlwZSBTaW5JbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IFNpbmggPSAnU2luaCc7XG5leHBvcnQgdHlwZSBTaW5oSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBTaWduID0gJ1NpZ24nO1xuZXhwb3J0IHR5cGUgU2lnbklucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgU2lnbW9pZCA9ICdTaWdtb2lkJztcbmV4cG9ydCB0eXBlIFNpZ21vaWRJbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IFNvZnRwbHVzID0gJ1NvZnRwbHVzJztcbmV4cG9ydCB0eXBlIFNvZnRwbHVzSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBTcXJ0ID0gJ1NxcnQnO1xuZXhwb3J0IHR5cGUgU3FydElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgU3VtID0gJ1N1bSc7XG5leHBvcnQgdHlwZSBTdW1JbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgU3VtQXR0cnMge1xuICBheGlzOiBudW1iZXJ8bnVtYmVyW107XG4gIGtlZXBEaW1zOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3BhY2VUb0JhdGNoTkQgPSAnU3BhY2VUb0JhdGNoTkQnO1xuZXhwb3J0IHR5cGUgU3BhY2VUb0JhdGNoTkRJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgU3BhY2VUb0JhdGNoTkRBdHRycyB7XG4gIGJsb2NrU2hhcGU6IG51bWJlcltdO1xuICBwYWRkaW5nczogbnVtYmVyW11bXTtcbn1cblxuZXhwb3J0IGNvbnN0IFNwbGl0ViA9ICdTcGxpdFYnO1xuZXhwb3J0IHR5cGUgU3BsaXRWSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIFNwbGl0VkF0dHJzIHtcbiAgbnVtT3JTaXplU3BsaXRzOiBudW1iZXJbXXxudW1iZXI7XG4gIGF4aXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNvZnRtYXggPSAnU29mdG1heCc7XG5leHBvcnQgdHlwZSBTb2Z0bWF4SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdsb2dpdHMnPjtcbmV4cG9ydCBpbnRlcmZhY2UgU29mdG1heEF0dHJzIHtcbiAgZGltOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBTcGFyc2VGaWxsRW1wdHlSb3dzID0gJ1NwYXJzZUZpbGxFbXB0eVJvd3MnO1xuZXhwb3J0IHR5cGUgU3BhcnNlRmlsbEVtcHR5Um93c0lucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbmRpY2VzJ3wndmFsdWVzJ3wnZGVuc2VTaGFwZSd8J2RlZmF1bHRWYWx1ZSc+O1xuXG5leHBvcnQgY29uc3QgU3BhcnNlUmVzaGFwZSA9ICdTcGFyc2VSZXNoYXBlJztcbmV4cG9ydCB0eXBlIFNwYXJzZVJlc2hhcGVJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnaW5wdXRJbmRpY2VzJ3wnaW5wdXRTaGFwZSd8J25ld1NoYXBlJz47XG5cbmV4cG9ydCBjb25zdCBTcGFyc2VTZWdtZW50TWVhbiA9ICdTcGFyc2VTZWdtZW50TWVhbic7XG5leHBvcnQgdHlwZSBTcGFyc2VTZWdtZW50TWVhbklucHV0cyA9XG4gICAgUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdkYXRhJ3wnaW5kaWNlcyd8J3NlZ21lbnRJZHMnPjtcblxuZXhwb3J0IGNvbnN0IFNwYXJzZVNlZ21lbnRTdW0gPSAnU3BhcnNlU2VnbWVudFN1bSc7XG5leHBvcnQgdHlwZSBTcGFyc2VTZWdtZW50U3VtSW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2RhdGEnfCdpbmRpY2VzJ3wnc2VnbWVudElkcyc+O1xuXG5leHBvcnQgY29uc3QgU3BhcnNlVG9EZW5zZSA9ICdTcGFyc2VUb0RlbnNlJztcbmV4cG9ydCB0eXBlIFNwYXJzZVRvRGVuc2VJbnB1dHMgPVxuICAgIFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAnc3BhcnNlSW5kaWNlcyd8J3NwYXJzZVZhbHVlcyd8J2RlZmF1bHRWYWx1ZSc+O1xuZXhwb3J0IGludGVyZmFjZSBTcGFyc2VUb0RlbnNlQXR0cnMge1xuICBvdXRwdXRTaGFwZTogbnVtYmVyW107XG59XG5cbmV4cG9ydCBjb25zdCBTcXVhcmVkRGlmZmVyZW5jZSA9ICdTcXVhcmVkRGlmZmVyZW5jZSc7XG5leHBvcnQgdHlwZSBTcXVhcmVkRGlmZmVyZW5jZUlucHV0cyA9IEJpbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IFNxdWFyZSA9ICdTcXVhcmUnO1xuZXhwb3J0IHR5cGUgU3F1YXJlSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5cbmV4cG9ydCBjb25zdCBTdGF0aWNSZWdleFJlcGxhY2UgPSAnU3RhdGljUmVnZXhSZXBsYWNlJztcbmV4cG9ydCB0eXBlIFN0YXRpY1JlZ2V4UmVwbGFjZUlucHV0cyA9IFVuYXJ5SW5wdXRzO1xuZXhwb3J0IGludGVyZmFjZSBTdGF0aWNSZWdleFJlcGxhY2VBdHRycyB7XG4gIHBhdHRlcm46IHN0cmluZztcbiAgcmV3cml0ZTogc3RyaW5nO1xuICByZXBsYWNlR2xvYmFsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3RyaWRlZFNsaWNlID0gJ1N0cmlkZWRTbGljZSc7XG5leHBvcnQgdHlwZSBTdHJpZGVkU2xpY2VJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcbmV4cG9ydCBpbnRlcmZhY2UgU3RyaWRlZFNsaWNlQXR0cnMge1xuICBiZWdpbjogbnVtYmVyW107XG4gIGVuZDogbnVtYmVyW107XG4gIHN0cmlkZXM6IG51bWJlcltdO1xuICBiZWdpbk1hc2s6IG51bWJlcjtcbiAgZW5kTWFzazogbnVtYmVyO1xuICBlbGxpcHNpc01hc2s6IG51bWJlcjtcbiAgbmV3QXhpc01hc2s6IG51bWJlcjtcbiAgc2hyaW5rQXhpc01hc2s6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFN0cmluZ05HcmFtcyA9ICdTdHJpbmdOR3JhbXMnO1xuZXhwb3J0IHR5cGUgU3RyaW5nTkdyYW1zSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdkYXRhJ3wnZGF0YVNwbGl0cyc+O1xuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdOR3JhbXNBdHRycyB7XG4gIHNlcGFyYXRvcjogc3RyaW5nO1xuICBuR3JhbVdpZHRoczogbnVtYmVyW107XG4gIGxlZnRQYWQ6IHN0cmluZztcbiAgcmlnaHRQYWQ6IHN0cmluZztcbiAgcGFkV2lkdGg6IG51bWJlcjtcbiAgcHJlc2VydmVTaG9ydFNlcXVlbmNlczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN0cmluZ1NwbGl0ID0gJ1N0cmluZ1NwbGl0JztcbmV4cG9ydCB0eXBlIFN0cmluZ1NwbGl0SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbnB1dCd8J2RlbGltaXRlcic+O1xuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdTcGxpdEF0dHJzIHtcbiAgc2tpcEVtcHR5OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3RyaW5nVG9IYXNoQnVja2V0RmFzdCA9ICdTdHJpbmdUb0hhc2hCdWNrZXRGYXN0JztcbmV4cG9ydCB0eXBlIFN0cmluZ1RvSGFzaEJ1Y2tldEZhc3RJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2lucHV0Jz47XG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ1RvSGFzaEJ1Y2tldEZhc3RBdHRycyB7XG4gIG51bUJ1Y2tldHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFN1YiA9ICdTdWInO1xuZXhwb3J0IHR5cGUgU3ViSW5wdXRzID0gQmluYXJ5SW5wdXRzO1xuXG5leHBvcnQgY29uc3QgVGFuID0gJ1Rhbic7XG5leHBvcnQgdHlwZSBUYW5JbnB1dHMgPSBVbmFyeUlucHV0cztcblxuZXhwb3J0IGNvbnN0IFRhbmggPSAnVGFuaCc7XG5leHBvcnQgdHlwZSBUYW5oSW5wdXRzID0gVW5hcnlJbnB1dHM7XG5cbmV4cG9ydCBjb25zdCBUaWxlID0gJ1RpbGUnO1xuZXhwb3J0IHR5cGUgVGlsZUlucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBUaWxlQXR0cnMge1xuICByZXBzOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFRvcEsgPSAnVG9wSyc7XG5leHBvcnQgdHlwZSBUb3BLSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIFRvcEtBdHRycyB7XG4gIGs6IG51bWJlcjtcbiAgc29ydGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgVHJhbnNmb3JtID0gJ1RyYW5zZm9ybSc7XG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1JbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ2ltYWdlJ3wndHJhbnNmb3Jtcyc+O1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2Zvcm1BdHRycyB7XG4gIGludGVycG9sYXRpb246ICduZWFyZXN0J3wnYmlsaW5lYXInO1xuICBmaWxsTW9kZTogJ2NvbnN0YW50J3wncmVmbGVjdCd8J3dyYXAnfCduZWFyZXN0JztcbiAgZmlsbFZhbHVlOiBudW1iZXI7XG4gIG91dHB1dFNoYXBlPzogW251bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGNvbnN0IFRyYW5zcG9zZSA9ICdUcmFuc3Bvc2UnO1xuZXhwb3J0IHR5cGUgVHJhbnNwb3NlSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd4Jz47XG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zcG9zZUF0dHJzIHtcbiAgcGVybTogbnVtYmVyW107XG59XG5cbmV4cG9ydCBjb25zdCBVbmlxdWUgPSAnVW5pcXVlJztcbmV4cG9ydCB0eXBlIFVuaXF1ZUlucHV0cyA9IFBpY2s8TmFtZWRUZW5zb3JJbmZvTWFwLCAneCc+O1xuZXhwb3J0IGludGVyZmFjZSBVbmlxdWVBdHRycyB7XG4gIGF4aXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgVW5hcnlJbnB1dHMgPSBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnPjtcblxuZXhwb3J0IGNvbnN0IFVucGFjayA9ICdVbnBhY2snO1xuZXhwb3J0IHR5cGUgVW5wYWNrSW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICd2YWx1ZSc+O1xuZXhwb3J0IGludGVyZmFjZSBVbnBhY2tBdHRycyB7XG4gIGF4aXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFVuc29ydGVkU2VnbWVudFN1bSA9ICdVbnNvcnRlZFNlZ21lbnRTdW0nO1xuZXhwb3J0IHR5cGUgVW5zb3J0ZWRTZWdtZW50U3VtSW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3gnfCdzZWdtZW50SWRzJz47XG5leHBvcnQgaW50ZXJmYWNlIFVuc29ydGVkU2VnbWVudFN1bUF0dHJzIHtcbiAgbnVtU2VnbWVudHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFVwcGVyQm91bmQgPSAnVXBwZXJCb3VuZCc7XG5leHBvcnQgdHlwZSBVcHBlckJvdW5kSW5wdXRzID1cbiAgICBQaWNrPE5hbWVkVGVuc29ySW5mb01hcCwgJ3NvcnRlZFNlcXVlbmNlJ3wndmFsdWVzJz47XG5cbmV4cG9ydCBjb25zdCBaZXJvc0xpa2UgPSAnWmVyb3NMaWtlJztcbmV4cG9ydCB0eXBlIFplcm9zTGlrZUlucHV0cyA9IFVuYXJ5SW5wdXRzO1xuXG4vKipcbiAqIFRlbnNvckZsb3cuanMtb25seSBrZXJuZWxzXG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwID0gJ1N0ZXAnO1xuZXhwb3J0IHR5cGUgU3RlcElucHV0cyA9IFVuYXJ5SW5wdXRzO1xuZXhwb3J0IGludGVyZmFjZSBTdGVwQXR0cnMge1xuICBhbHBoYTogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgRnJvbVBpeGVscyA9ICdGcm9tUGl4ZWxzJztcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbVBpeGVsc0lucHV0cyB7XG4gIHBpeGVsczogUGl4ZWxEYXRhfEltYWdlRGF0YXxIVE1MSW1hZ2VFbGVtZW50fEhUTUxDYW52YXNFbGVtZW50fFxuICAgICAgSFRNTFZpZGVvRWxlbWVudHxJbWFnZUJpdG1hcDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnJvbVBpeGVsc0F0dHJzIHtcbiAgbnVtQ2hhbm5lbHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdGF0ZVdpdGhPZmZzZXQgPSAnUm90YXRlV2l0aE9mZnNldCc7XG5leHBvcnQgdHlwZSBSb3RhdGVXaXRoT2Zmc2V0SW5wdXRzID0gUGljazxOYW1lZFRlbnNvckluZm9NYXAsICdpbWFnZSc+O1xuZXhwb3J0IGludGVyZmFjZSBSb3RhdGVXaXRoT2Zmc2V0QXR0cnMge1xuICByYWRpYW5zOiBudW1iZXI7XG4gIGZpbGxWYWx1ZTogbnVtYmVyfFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgY2VudGVyOiBudW1iZXJ8W251bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGNvbnN0IF9GdXNlZE1hdE11bCA9ICdfRnVzZWRNYXRNdWwnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjbGFzcy1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIF9GdXNlZE1hdE11bElucHV0cyBleHRlbmRzIE5hbWVkVGVuc29ySW5mb01hcCB7XG4gIGE6IFRlbnNvckluZm87XG4gIGI6IFRlbnNvckluZm87XG4gIGJpYXM/OiBUZW5zb3JJbmZvO1xuICBwcmVsdUFjdGl2YXRpb25XZWlnaHRzPzogVGVuc29ySW5mbztcbn1cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY2xhc3MtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBfRnVzZWRNYXRNdWxBdHRycyB7XG4gIHRyYW5zcG9zZUE6IGJvb2xlYW47XG4gIHRyYW5zcG9zZUI6IGJvb2xlYW47XG4gIGFjdGl2YXRpb246IEFjdGl2YXRpb247XG4gIGxlYWt5cmVsdUFscGhhPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgRnVzZWRDb252MkQgPSAnRnVzZWRDb252MkQnO1xuZXhwb3J0IGludGVyZmFjZSBGdXNlZENvbnYyRElucHV0cyBleHRlbmRzIE5hbWVkVGVuc29ySW5mb01hcCB7XG4gIHg6IFRlbnNvckluZm87XG4gIGZpbHRlcjogVGVuc29ySW5mbztcbiAgYmlhcz86IFRlbnNvckluZm87XG4gIHByZWx1QWN0aXZhdGlvbldlaWdodHM/OiBUZW5zb3JJbmZvO1xufVxuZXhwb3J0IGludGVyZmFjZSBGdXNlZENvbnYyREF0dHJzIHtcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSd8bnVtYmVyfEV4cGxpY2l0UGFkZGluZztcbiAgZGF0YUZvcm1hdDogJ05IV0MnfCdOQ0hXJztcbiAgZGlsYXRpb25zOiBbbnVtYmVyLCBudW1iZXJdfG51bWJlcjtcbiAgZGltUm91bmRpbmdNb2RlOiAnZmxvb3InfCdyb3VuZCd8J2NlaWwnO1xuICBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uO1xuICBsZWFreXJlbHVBbHBoYT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEZ1c2VkRGVwdGh3aXNlQ29udjJEID0gJ0Z1c2VkRGVwdGh3aXNlQ29udjJEJztcbmV4cG9ydCBpbnRlcmZhY2UgRnVzZWREZXB0aHdpc2VDb252MkRJbnB1dHMgZXh0ZW5kcyBOYW1lZFRlbnNvckluZm9NYXAge1xuICB4OiBUZW5zb3JJbmZvO1xuICBmaWx0ZXI6IFRlbnNvckluZm87XG4gIGJpYXM/OiBUZW5zb3JJbmZvO1xuICBwcmVsdUFjdGl2YXRpb25XZWlnaHRzPzogVGVuc29ySW5mbztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnVzZWREZXB0aHdpc2VDb252MkRBdHRycyB7XG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyO1xuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcnxFeHBsaWNpdFBhZGRpbmc7XG4gIGRhdGFGb3JtYXQ6ICdOSFdDJ3wnTkNIVyc7XG4gIGRpbGF0aW9uczogW251bWJlciwgbnVtYmVyXXxudW1iZXI7XG4gIGRpbVJvdW5kaW5nTW9kZTogJ2Zsb29yJ3wncm91bmQnfCdjZWlsJztcbiAgYWN0aXZhdGlvbjogQWN0aXZhdGlvbjtcbiAgbGVha3lyZWx1QWxwaGE/OiBudW1iZXI7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/log.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "log",
    ()=>log,
    "warn",
    ()=>warn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
;
function warn(...msg) {
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('IS_TEST') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('PROD'))) {
        console.warn(...msg);
    }
}
function log(...msg) {
    if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('IS_TEST') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('PROD'))) {
        console.log(...msg);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVsQyxNQUFNLFVBQVUsSUFBSSxDQUFDLEdBQUcsR0FBYztJQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7UUFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFjO0lBQ25DLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2Vudn0gZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuKC4uLm1zZzogQXJyYXk8e30+KTogdm9pZCB7XG4gIGlmICghKGVudigpLmdldEJvb2woJ0lTX1RFU1QnKSB8fCBlbnYoKS5nZXRCb29sKCdQUk9EJykpKSB7XG4gICAgY29uc29sZS53YXJuKC4uLm1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyguLi5tc2c6IEFycmF5PHt9Pik6IHZvaWQge1xuICBpZiAoIShlbnYoKS5nZXRCb29sKCdJU19URVNUJykgfHwgZW52KCkuZ2V0Qm9vbCgnUFJPRCcpKSkge1xuICAgIGNvbnNvbGUubG9nKC4uLm1zZyk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_registry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "copyRegisteredKernels",
    ()=>copyRegisteredKernels,
    "getGradient",
    ()=>getGradient,
    "getKernel",
    ()=>getKernel,
    "getKernelsForBackend",
    ()=>getKernelsForBackend,
    "registerGradient",
    ()=>registerGradient,
    "registerKernel",
    ()=>registerKernel,
    "unregisterGradient",
    ()=>unregisterGradient,
    "unregisterKernel",
    ()=>unregisterKernel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$global_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/global_util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/log.js [app-ssr] (ecmascript)");
;
;
;
const kernelRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$global_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])('kernelRegistry', ()=>new Map());
const gradRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$global_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])('gradRegistry', ()=>new Map());
function getKernel(kernelName, backendName) {
    const key = makeKey(kernelName, backendName);
    return kernelRegistry.get(key);
}
function getGradient(kernelName) {
    return gradRegistry.get(kernelName);
}
function getKernelsForBackend(backendName) {
    const it = kernelRegistry.entries();
    const result = [];
    while(true){
        const { done, value } = it.next();
        if (done) {
            break;
        }
        const [key, config] = value;
        const [backend] = key.split('_');
        if (backend === backendName) {
            result.push(config);
        }
    }
    return result;
}
function registerKernel(config) {
    const { kernelName, backendName } = config;
    const key = makeKey(kernelName, backendName);
    if (kernelRegistry.has(key)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"](`The kernel '${kernelName}' for backend ` + `'${backendName}' is already registered`);
    }
    kernelRegistry.set(key, config);
}
function registerGradient(config) {
    const { kernelName } = config;
    if (gradRegistry.has(kernelName)) {
        // TODO (yassogba) after 3.0 assess whether we need to keep this gated
        // to debug mode.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('DEBUG')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"](`Overriding the gradient for '${kernelName}'`);
        }
    }
    gradRegistry.set(kernelName, config);
}
function unregisterKernel(kernelName, backendName) {
    const key = makeKey(kernelName, backendName);
    if (!kernelRegistry.has(key)) {
        throw new Error(`The kernel '${kernelName}' for backend ` + `'${backendName}' is not registered`);
    }
    kernelRegistry.delete(key);
}
function unregisterGradient(kernelName) {
    if (!gradRegistry.has(kernelName)) {
        throw new Error(`The gradient '${kernelName}' for backend is not registered`);
    }
    gradRegistry.delete(kernelName);
}
function copyRegisteredKernels(registeredBackendName, newBackendName) {
    const kernels = getKernelsForBackend(registeredBackendName);
    kernels.forEach((kernelConfig)=>{
        const newKernelConfig = Object.assign({}, kernelConfig, {
            backendName: newBackendName
        });
        registerKernel(newKernelConfig);
    });
}
function makeKey(kernelName, backendName) {
    return `${backendName}_${kernelName}`;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybmVsX3JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9rZXJuZWxfcmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDO0FBTTdCLE1BQU0sY0FBYyxHQUNsQixTQUFTLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQ3hCLENBQUMsQ0FBQztBQUNyQixNQUFNLFlBQVksR0FDaEIsU0FBUyxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBc0IsQ0FBQyxDQUFDO0FBcURqRTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQ3JCLFVBQWtCLEVBQUUsV0FBbUI7SUFDekMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM3QyxPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsVUFBa0I7SUFDNUMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsV0FBbUI7SUFDdEQsTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BDLE1BQU0sTUFBTSxHQUFtQixFQUFFLENBQUM7SUFFbEMsT0FBTyxJQUFJLEVBQUU7UUFDWCxNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxHQUFHLEVBQUUs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QUFPLENBQUMsVUFBa0IsRUFDbEIsV0FBbUI7SUFDbEMsT0FBTyxHQUFHLFdBQVcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtlbnZ9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtnZXRHbG9iYWx9IGZyb20gJy4vZ2xvYmFsX3V0aWwnO1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4vbG9nJztcbmltcG9ydCB7TmFtZWRHcmFkaWVudE1hcH0gZnJvbSAnLi90YXBlJztcbmltcG9ydCB7VGVuc29yfSBmcm9tICcuL3RlbnNvcic7XG5pbXBvcnQge1RlbnNvckluZm99IGZyb20gJy4vdGVuc29yX2luZm8nO1xuaW1wb3J0IHtSZWN1cnNpdmVBcnJheX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGtlcm5lbFJlZ2lzdHJ5ID1cbiAgZ2V0R2xvYmFsKCdrZXJuZWxSZWdpc3RyeScsICgpID0+IG5ldyBNYXA8YCR7c3RyaW5nfV8ke3N0cmluZ31gLFxuICAgIEtlcm5lbENvbmZpZz4oKSk7XG5jb25zdCBncmFkUmVnaXN0cnkgPVxuICBnZXRHbG9iYWwoJ2dyYWRSZWdpc3RyeScsICgpID0+IG5ldyBNYXA8c3RyaW5nLCBHcmFkQ29uZmlnPigpKTtcblxudHlwZSBBdHRyaWJ1dGVWYWx1ZSA9XG4gIG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbiB8IGJvb2xlYW5bXSB8IHN0cmluZyB8IHN0cmluZ1tdIHwgTmFtZWRBdHRyTWFwO1xuXG4vKiogVGhlc2UgYXJlIGV4dHJhIG5vbi10ZW5zb3IvcHJpbWl0aXZlIHBhcmFtcyBwYXNzZWQgdG8ga2VybmVsIGZ1bmN0aW9ucy4gKi9cbmV4cG9ydCB0eXBlIEF0dHJpYnV0ZSA9IEF0dHJpYnV0ZVZhbHVlIHwgUmVjdXJzaXZlQXJyYXk8QXR0cmlidXRlVmFsdWU+O1xuXG4vKiogU3BlY2lmaWVzIHRoZSBjb2RlIHRvIHJ1biB3aGVuIGV4ZWN1dGluZyBhIGtlcm5lbC4gKi9cbmV4cG9ydCB0eXBlIEtlcm5lbEZ1bmMgPSAocGFyYW1zOiB7XG4gIGlucHV0czogTmFtZWRUZW5zb3JJbmZvTWFwLFxuICBiYWNrZW5kOiB7fSxcbiAgYXR0cnM/OiBOYW1lZEF0dHJNYXAsXG59KSA9PiBUZW5zb3JJbmZvIHwgVGVuc29ySW5mb1tdO1xuXG4vKiogVGhlIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIGNvbXB1dGluZyBhIGdyYWRpZW50IGR1cmluZyBiYWNrcHJvcC4gKi9cbmV4cG9ydCB0eXBlIEdyYWRGdW5jID1cbiAgKGR5OiBUZW5zb3IgfCBUZW5zb3JbXSwgc2F2ZWQ6IFRlbnNvcltdLCBhdHRyczogTmFtZWRBdHRyTWFwKSA9PlxuICAgIE5hbWVkR3JhZGllbnRNYXA7XG5cbi8qKiBGdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGFmdGVyIHRoZSBiYWNrZW5kIGluaXRpYWxpemVzLiAqL1xuZXhwb3J0IHR5cGUgS2VybmVsU2V0dXBGdW5jID0gKGJhY2tlbmQ6IHt9KSA9PiB2b2lkO1xuLyoqIEZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgcmlnaHQgYmVmb3JlIHRoZSBiYWNrZW5kIGlzIGRpc3Bvc2VkLiAqL1xuZXhwb3J0IHR5cGUgS2VybmVsRGlzcG9zZUZ1bmMgPSBLZXJuZWxTZXR1cEZ1bmM7XG5cbi8qKiBDb25maWcgb2JqZWN0IGZvciByZWdpc3RlcmluZyBhIGtlcm5lbCBpbiB0aGUgZ2xvYmFsIHJlZ2lzdHJ5LiAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxDb25maWcge1xuICBrZXJuZWxOYW1lOiBzdHJpbmc7XG4gIGJhY2tlbmROYW1lOiBzdHJpbmc7XG4gIGtlcm5lbEZ1bmM6IEtlcm5lbEZ1bmM7XG4gIHNldHVwRnVuYz86IEtlcm5lbFNldHVwRnVuYztcbiAgZGlzcG9zZUZ1bmM/OiBLZXJuZWxEaXNwb3NlRnVuYztcbn1cblxuLyoqIENvbmZpZyBvYmplY3QgZm9yIHJlZ2lzdGVyaW5nIGEgZ3JhZGllbnQgaW4gdGhlIGdsb2JhbCByZWdpc3RyeS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3JhZENvbmZpZyB7XG4gIGtlcm5lbE5hbWU6IHN0cmluZztcbiAgaW5wdXRzVG9TYXZlPzogc3RyaW5nW107XG4gIC8vIFdoZW4gc2F2ZUFsbElucHV0cyBpcyB0cnVlLCBhbGwgaW5wdXRzIHdpbGwgYmUgc2F2ZWQuIE9ubHkgdXNlIHRoaXMgZmxhZ1xuICAvLyBpZiBpbnB1dHMgaXMgYW4gYXJyYXkgb2YgVGVuc29ycy5cbiAgc2F2ZUFsbElucHV0cz86IGJvb2xlYW47XG4gIG91dHB1dHNUb1NhdmU/OiBib29sZWFuW107XG4gIGdyYWRGdW5jOiBHcmFkRnVuYztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYW1lZFRlbnNvckluZm9NYXAge1xuICBbbmFtZTogc3RyaW5nXTogVGVuc29ySW5mb3x1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmFtZWRBdHRyTWFwIHtcbiAgW25hbWU6IHN0cmluZ106IEF0dHJpYnV0ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBrZXJuZWwgZnVuY3Rpb24gKGNvZGUpIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZXMuXG4gKlxuICogQHBhcmFtIGtlcm5lbE5hbWUgVGhlIG9mZmljaWFsIG5hbWUgb2YgdGhlIGtlcm5lbC5cbiAqIEBwYXJhbSBiYWNrZW5kTmFtZSBUaGUgb2ZmaWNpYWwgbmFtZSBvZiB0aGUgYmFja2VuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEtlcm5lbChcbiAgICBrZXJuZWxOYW1lOiBzdHJpbmcsIGJhY2tlbmROYW1lOiBzdHJpbmcpOiBLZXJuZWxDb25maWcge1xuICBjb25zdCBrZXkgPSBtYWtlS2V5KGtlcm5lbE5hbWUsIGJhY2tlbmROYW1lKTtcbiAgcmV0dXJuIGtlcm5lbFJlZ2lzdHJ5LmdldChrZXkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlZ2lzdGVyZWQgZ3JhZGllbnQgaW5mbyBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVkIGtlcm5lbC5cbiAqIEBwYXJhbSBrZXJuZWxOYW1lIFRoZSBvZmZpY2lhbCBURiBrZXJuZWwgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYWRpZW50KGtlcm5lbE5hbWU6IHN0cmluZyk6IEdyYWRDb25maWcge1xuICByZXR1cm4gZ3JhZFJlZ2lzdHJ5LmdldChrZXJuZWxOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtlcm5lbHNGb3JCYWNrZW5kKGJhY2tlbmROYW1lOiBzdHJpbmcpOiBLZXJuZWxDb25maWdbXSB7XG4gIGNvbnN0IGl0ID0ga2VybmVsUmVnaXN0cnkuZW50cmllcygpO1xuICBjb25zdCByZXN1bHQ6IEtlcm5lbENvbmZpZ1tdID0gW107XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7ZG9uZSwgdmFsdWV9ID0gaXQubmV4dCgpO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgW2tleSwgY29uZmlnXSA9IHZhbHVlO1xuICAgIGNvbnN0IFtiYWNrZW5kLCBdID0ga2V5LnNwbGl0KCdfJyk7XG4gICAgaWYgKGJhY2tlbmQgPT09IGJhY2tlbmROYW1lKSB7XG4gICAgICByZXN1bHQucHVzaChjb25maWcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyB0aGUgZnVuY3Rpb24gKGZvcndhcmQgcGFzcykgZm9yIHRoZSBrZXJuZWwgaW4gYSBnbG9iYWwgcmVnaXN0cnkuXG4gKlxuICogQHBhcmFtIGNvbmZpZyBBIGNvbmZpZyBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiAtIGBrZXJuZWxOYW1lYCBUaGUgb2ZmaWNpYWwgbmFtZSBvZiB0aGUga2VybmVsLlxuICogLSBgYmFja2VuZE5hbWVgIFRoZSBvZmZpY2lhbCBuYW1lIG9mIHRoZSBiYWNrZW5kLlxuICogLSBga2VybmVsRnVuY2AgVGhlIGZ1bmN0aW9uIHRvIHJ1biBkdXJpbmcgdGhlIGZvcndhcmQgcGFzcyBvZiB0aGUga2VybmVsLlxuICogLSBgc2V0dXBGdW5jYCBPcHRpb25hbC4gR2V0cyBjYWxsZWQgb25jZSwgYWZ0ZXIgdGhlIGJhY2tlbmQgaW5pdGlhbGl6ZXMuXG4gKiAtIGBkaXNwb3NlRnVuY2AgT3B0aW9uYWwuIEdldHMgY2FsbGVkIG9uY2UsIHJpZ2h0IGJlZm9yZSB0aGUgYmFja2VuZCBpc1xuICogZGlzcG9zZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlcktlcm5lbChjb25maWc6IEtlcm5lbENvbmZpZykge1xuICBjb25zdCB7a2VybmVsTmFtZSwgYmFja2VuZE5hbWV9ID0gY29uZmlnO1xuICBjb25zdCBrZXkgPSBtYWtlS2V5KGtlcm5lbE5hbWUsIGJhY2tlbmROYW1lKTtcbiAgaWYgKGtlcm5lbFJlZ2lzdHJ5LmhhcyhrZXkpKSB7XG4gICAgbG9nLndhcm4oXG4gICAgICAgIGBUaGUga2VybmVsICcke2tlcm5lbE5hbWV9JyBmb3IgYmFja2VuZCBgICtcbiAgICAgICAgYCcke2JhY2tlbmROYW1lfScgaXMgYWxyZWFkeSByZWdpc3RlcmVkYCk7XG4gIH1cbiAga2VybmVsUmVnaXN0cnkuc2V0KGtleSwgY29uZmlnKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBncmFkaWVudCBmdW5jdGlvbiBmb3IgYSBnaXZlbiBrZXJuZWwgaW4gdGhlIGdsb2JhbCByZWdpc3RyeSxcbiAqIHRvIGJlIHVzZWQgZHVyaW5nIHRoZSBiYWNrLXByb3BhZ2F0aW9uIG9mIHRoYXQga2VybmVsLlxuICpcbiAqIEBwYXJhbSBjb25maWcgQW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogLSBga2VybmVsTmFtZWAgVGhlIG5hbWUgb2YgdGhlIGtlcm5lbCB0aGF0IHRoZSBncmFkaWVudCBmdW5jdGlvbiBpcyBmb3IuXG4gKiAtIGBncmFkRnVuY2AgVGhlIGZ1bmN0aW9uIHRvIHJ1biBkdXJpbmcgYmFjay1wcm9wYWdhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyR3JhZGllbnQoY29uZmlnOiBHcmFkQ29uZmlnKSB7XG4gIGNvbnN0IHtrZXJuZWxOYW1lfSA9IGNvbmZpZztcblxuICBpZiAoZ3JhZFJlZ2lzdHJ5LmhhcyhrZXJuZWxOYW1lKSkge1xuICAgIC8vIFRPRE8gKHlhc3NvZ2JhKSBhZnRlciAzLjAgYXNzZXNzIHdoZXRoZXIgd2UgbmVlZCB0byBrZWVwIHRoaXMgZ2F0ZWRcbiAgICAvLyB0byBkZWJ1ZyBtb2RlLlxuICAgIGlmIChlbnYoKS5nZXRCb29sKCdERUJVRycpKSB7XG4gICAgICBsb2cud2FybihgT3ZlcnJpZGluZyB0aGUgZ3JhZGllbnQgZm9yICcke2tlcm5lbE5hbWV9J2ApO1xuICAgIH1cbiAgfVxuICBncmFkUmVnaXN0cnkuc2V0KGtlcm5lbE5hbWUsIGNvbmZpZyk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUga2VybmVsIGZ1bmN0aW9uIGZyb20gdGhlIHJlZ2lzdHJ5LlxuICpcbiAqIEBwYXJhbSBrZXJuZWxOYW1lIFRoZSBvZmZpY2lhbCBuYW1lIG9mIHRoZSBrZXJuZWwuXG4gKiBAcGFyYW0gYmFja2VuZE5hbWUgVGhlIG9mZmljaWFsIG5hbWUgb2YgdGhlIGJhY2tlbmQuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3Rlcktlcm5lbChcbiAgICBrZXJuZWxOYW1lOiBzdHJpbmcsIGJhY2tlbmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qga2V5ID0gbWFrZUtleShrZXJuZWxOYW1lLCBiYWNrZW5kTmFtZSk7XG4gIGlmICgha2VybmVsUmVnaXN0cnkuaGFzKGtleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUga2VybmVsICcke2tlcm5lbE5hbWV9JyBmb3IgYmFja2VuZCBgICtcbiAgICAgICAgYCcke2JhY2tlbmROYW1lfScgaXMgbm90IHJlZ2lzdGVyZWRgKTtcbiAgfVxuICBrZXJuZWxSZWdpc3RyeS5kZWxldGUoa2V5KTtcbn1cblxuLyoqIFJlbW92ZXMgdGhlIHJlZ2lzdGVyZWQgZ3JhZGllbnQgZnJvbSB0aGUgZ2xvYmFsIHJlZ2lzdHJ5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJHcmFkaWVudChrZXJuZWxOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFncmFkUmVnaXN0cnkuaGFzKGtlcm5lbE5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlIGdyYWRpZW50ICcke2tlcm5lbE5hbWV9JyBmb3IgYmFja2VuZCBpcyBub3QgcmVnaXN0ZXJlZGApO1xuICB9XG4gIGdyYWRSZWdpc3RyeS5kZWxldGUoa2VybmVsTmFtZSk7XG59XG5cbi8qKlxuICogRmluZHMga2VybmVscyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgdG8gYSBiYWNrZW5kIGFuZCByZS1yZWdpc3RlcnNcbiAqIHRoZW0gZm9yIGEgbmV3IGJhY2tlbmQuIFVzZWZ1bCBmb3IgcmVnaXN0ZXJpbmcgY3VzdG9tIGJhY2tlbmRzLlxuICogQHBhcmFtIHJlZ2lzdGVyZWRCYWNrZW5kTmFtZSBBbHJlYWR5IHJlZ2lzdGVyZWQgYmFja2VuZC5cbiAqIEBwYXJhbSBuZXdCYWNrZW5kTmFtZSBOZXcgYmFja2VuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlSZWdpc3RlcmVkS2VybmVscyhcbiAgICByZWdpc3RlcmVkQmFja2VuZE5hbWU6IHN0cmluZywgbmV3QmFja2VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBrZXJuZWxzID0gZ2V0S2VybmVsc0ZvckJhY2tlbmQocmVnaXN0ZXJlZEJhY2tlbmROYW1lKTtcbiAga2VybmVscy5mb3JFYWNoKGtlcm5lbENvbmZpZyA9PiB7XG4gICAgY29uc3QgbmV3S2VybmVsQ29uZmlnID1cbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwga2VybmVsQ29uZmlnLCB7YmFja2VuZE5hbWU6IG5ld0JhY2tlbmROYW1lfSk7XG4gICAgcmVnaXN0ZXJLZXJuZWwobmV3S2VybmVsQ29uZmlnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VLZXkoa2VybmVsTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICBiYWNrZW5kTmFtZTogc3RyaW5nKTogYCR7c3RyaW5nfV8ke3N0cmluZ31gIHtcbiAgcmV0dXJuIGAke2JhY2tlbmROYW1lfV8ke2tlcm5lbE5hbWV9YDtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/is_typed_array_browser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "isTypedArrayBrowser",
    ()=>isTypedArrayBrowser
]);
function isTypedArrayBrowser(a) {
    return a instanceof Float32Array || a instanceof Int32Array || a instanceof Uint8Array || a instanceof Uint8ClampedArray;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNfdHlwZWRfYXJyYXlfYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvcGxhdGZvcm1zL2lzX3R5cGVkX2FycmF5X2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsTUFBTSxVQUFVLG1CQUFtQixDQUFDLENBQVU7SUFFNUMsT0FBTyxDQUFDLFlBQVksWUFBWSxJQUFJLENBQUMsWUFBWSxVQUFVO1FBQ3pELENBQUMsWUFBWSxVQUFVLElBQUksQ0FBQyxZQUFZLGlCQUFpQixDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVkQXJyYXlCcm93c2VyKGE6IHVua25vd24pOiBhIGlzIFVpbnQ4QXJyYXlcbiAgfCBGbG9hdDMyQXJyYXkgfCBJbnQzMkFycmF5IHwgVWludDhDbGFtcGVkQXJyYXkge1xuICByZXR1cm4gYSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fCBhIGluc3RhbmNlb2YgSW50MzJBcnJheSB8fFxuICAgIGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/platform_browser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "PlatformBrowser",
    ()=>PlatformBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/flags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$indexed_db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/io/indexed_db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$local_storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/io/local_storage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$model_management$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/io/model_management.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$platforms$2f$is_typed_array_browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/is_typed_array_browser.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class PlatformBrowser {
    constructor(){
        // For setTimeoutCustom
        this.messageName = 'setTimeoutCustom';
        this.functionRefs = [];
        this.handledMessageCount = 0;
        this.hasEventListener = false;
    }
    fetch(path, init) {
        return fetch(path, init);
    }
    now() {
        return performance.now();
    }
    encode(text, encoding) {
        if (encoding !== 'utf-8' && encoding !== 'utf8') {
            throw new Error(`Browser's encoder only supports utf-8, but got ${encoding}`);
        }
        if (this.textEncoder == null) {
            this.textEncoder = new TextEncoder();
        }
        return this.textEncoder.encode(text);
    }
    decode(bytes, encoding) {
        return new TextDecoder(encoding).decode(bytes);
    }
    // If the setTimeout nesting level is greater than 5 and timeout is less
    // than 4ms, timeout will be clamped to 4ms, which hurts the perf.
    // Interleaving window.postMessage and setTimeout will trick the browser and
    // avoid the clamp.
    setTimeoutCustom(functionRef, delay) {
        if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('USE_SETTIMEOUTCUSTOM')) {
            setTimeout(functionRef, delay);
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    isTypedArray(a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$platforms$2f$is_typed_array_browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypedArrayBrowser"])(a);
    }
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER')) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().setPlatform('browser', new PlatformBrowser());
    // Register LocalStorage IOHandler
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$model_management$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelStoreManagerRegistry"].registerManager(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$local_storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserLocalStorage"].URL_SCHEME, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$local_storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserLocalStorageManager"]());
    } catch (err) {}
    // Register IndexedDB IOHandler
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$model_management$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModelStoreManagerRegistry"].registerManager(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$indexed_db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserIndexedDB"].URL_SCHEME, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$indexed_db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BrowserIndexedDBManager"]());
    } catch (err) {}
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvcGxhdGZvcm1zL3BsYXRmb3JtX2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRTdELE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBS0UsdUJBQXVCO1FBQ04sZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5Qix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBOERuQyxDQUFDO0lBNURDLEtBQUssQ0FBQyxJQUFZLEVBQUUsSUFBa0I7UUFDcEMsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxHQUFHO1FBQ0QsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZLEVBQUUsUUFBZ0I7UUFDbkMsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FDWCxrREFBa0QsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNuRTtRQUNE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QGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0ICcuLi9mbGFncyc7XG5cbmltcG9ydCB7ZW52fSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQge0Jyb3dzZXJJbmRleGVkREIsIEJyb3dzZXJJbmRleGVkREJNYW5hZ2VyfSBmcm9tICcuLi9pby9pbmRleGVkX2RiJztcbmltcG9ydCB7QnJvd3NlckxvY2FsU3RvcmFnZSwgQnJvd3NlckxvY2FsU3RvcmFnZU1hbmFnZXJ9IGZyb20gJy4uL2lvL2xvY2FsX3N0b3JhZ2UnO1xuaW1wb3J0IHtNb2RlbFN0b3JlTWFuYWdlclJlZ2lzdHJ5fSBmcm9tICcuLi9pby9tb2RlbF9tYW5hZ2VtZW50JztcblxuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQge2lzVHlwZWRBcnJheUJyb3dzZXJ9IGZyb20gJy4vaXNfdHlwZWRfYXJyYXlfYnJvd3Nlcic7XG5cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybUJyb3dzZXIgaW1wbGVtZW50cyBQbGF0Zm9ybSB7XG4gIC8vIEFjY29yZGluZyB0byB0aGUgc3BlYywgdGhlIGJ1aWx0LWluIGVuY29kZXIgY2FuIGRvIG9ubHkgVVRGLTggZW5jb2RpbmcuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9UZXh0RW5jb2Rlci9UZXh0RW5jb2RlclxuICBwcml2YXRlIHRleHRFbmNvZGVyOiBUZXh0RW5jb2RlcjtcblxuICAvLyBGb3Igc2V0VGltZW91dEN1c3RvbVxuICBwcml2YXRlIHJlYWRvbmx5IG1lc3NhZ2VOYW1lID0gJ3NldFRpbWVvdXRDdXN0b20nO1xuICBwcml2YXRlIGZ1bmN0aW9uUmVmczogRnVuY3Rpb25bXSA9IFtdO1xuICBwcml2YXRlIGhhbmRsZWRNZXNzYWdlQ291bnQgPSAwO1xuICBwcml2YXRlIGhhc0V2ZW50TGlzdGVuZXIgPSBmYWxzZTtcblxuICBmZXRjaChwYXRoOiBzdHJpbmcsIGluaXQ/OiBSZXF1ZXN0SW5pdCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gZmV0Y2gocGF0aCwgaW5pdCk7XG4gIH1cblxuICBub3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gIH1cblxuICBlbmNvZGUodGV4dDogc3RyaW5nLCBlbmNvZGluZzogc3RyaW5nKTogVWludDhBcnJheSB7XG4gICAgaWYgKGVuY29kaW5nICE9PSAndXRmLTgnICYmIGVuY29kaW5nICE9PSAndXRmOCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQnJvd3NlcidzIGVuY29kZXIgb25seSBzdXBwb3J0cyB1dGYtOCwgYnV0IGdvdCAke2VuY29kaW5nfWApO1xuICAgIH1cbiAgICBpZiAodGhpcy50ZXh0RW5jb2RlciA9PSBudWxsKSB7XG4gICAgICB0aGlzLnRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRleHRFbmNvZGVyLmVuY29kZSh0ZXh0KTtcbiAgfVxuICBkZWNvZGUoYnl0ZXM6IFVpbnQ4QXJyYXksIGVuY29kaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoZW5jb2RpbmcpLmRlY29kZShieXRlcyk7XG4gIH1cblxuICAvLyBJZiB0aGUgc2V0VGltZW91dCBuZXN0aW5nIGxldmVsIGlzIGdyZWF0ZXIgdGhhbiA1IGFuZCB0aW1lb3V0IGlzIGxlc3NcbiAgLy8gdGhhbiA0bXMsIHRpbWVvdXQgd2lsbCBiZSBjbGFtcGVkIHRvIDRtcywgd2hpY2ggaHVydHMgdGhlIHBlcmYuXG4gIC8vIEludGVybGVhdmluZyB3aW5kb3cucG9zdE1lc3NhZ2UgYW5kIHNldFRpbWVvdXQgd2lsbCB0cmljayB0aGUgYnJvd3NlciBhbmRcbiAgLy8gYXZvaWQgdGhlIGNsYW1wLlxuICBzZXRUaW1lb3V0Q3VzdG9tKGZ1bmN0aW9uUmVmOiBGdW5jdGlvbiwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAhZW52KCkuZ2V0Qm9vbCgnVVNFX1NFVFRJTUVPVVRDVVNUT00nKSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvblJlZiwgZGVsYXkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZnVuY3Rpb25SZWZzLnB1c2goZnVuY3Rpb25SZWYpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgIHtuYW1lOiB0aGlzLm1lc3NhZ2VOYW1lLCBpbmRleDogdGhpcy5mdW5jdGlvblJlZnMubGVuZ3RoIC0gMX0sICcqJyk7XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgaWYgKCF0aGlzLmhhc0V2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuaGFzRXZlbnRMaXN0ZW5lciA9IHRydWU7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IHdpbmRvdyAmJiBldmVudC5kYXRhLm5hbWUgPT09IHRoaXMubWVzc2FnZU5hbWUpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBjb25zdCBmdW5jdGlvblJlZiA9IHRoaXMuZnVuY3Rpb25SZWZzW2V2ZW50LmRhdGEuaW5kZXhdO1xuICAgICAgICAgIGZ1bmN0aW9uUmVmKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVkTWVzc2FnZUNvdW50Kys7XG4gICAgICAgICAgaWYgKHRoaXMuaGFuZGxlZE1lc3NhZ2VDb3VudCA9PT0gdGhpcy5mdW5jdGlvblJlZnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmZ1bmN0aW9uUmVmcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVkTWVzc2FnZUNvdW50ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzVHlwZWRBcnJheShhOiB1bmtub3duKTogYSBpcyBVaW50OEFycmF5IHwgRmxvYXQzMkFycmF5IHwgSW50MzJBcnJheVxuICAgIHwgVWludDhDbGFtcGVkQXJyYXkge1xuICAgIHJldHVybiBpc1R5cGVkQXJyYXlCcm93c2VyKGEpO1xuICB9XG59XG5cbmlmIChlbnYoKS5nZXQoJ0lTX0JST1dTRVInKSkge1xuICBlbnYoKS5zZXRQbGF0Zm9ybSgnYnJvd3NlcicsIG5ldyBQbGF0Zm9ybUJyb3dzZXIoKSk7XG5cbiAgLy8gUmVnaXN0ZXIgTG9jYWxTdG9yYWdlIElPSGFuZGxlclxuICB0cnkge1xuICAgIE1vZGVsU3RvcmVNYW5hZ2VyUmVnaXN0cnkucmVnaXN0ZXJNYW5hZ2VyKFxuICAgICAgICBCcm93c2VyTG9jYWxTdG9yYWdlLlVSTF9TQ0hFTUUsIG5ldyBCcm93c2VyTG9jYWxTdG9yYWdlTWFuYWdlcigpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gIH1cblxuICAvLyBSZWdpc3RlciBJbmRleGVkREIgSU9IYW5kbGVyXG4gIHRyeSB7XG4gICAgTW9kZWxTdG9yZU1hbmFnZXJSZWdpc3RyeS5yZWdpc3Rlck1hbmFnZXIoXG4gICAgICAgIEJyb3dzZXJJbmRleGVkREIuVVJMX1NDSEVNRSwgbmV3IEJyb3dzZXJJbmRleGVkREJNYW5hZ2VyKCkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/platform_node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "PlatformNode",
    ()=>PlatformNode,
    "getNodeFetch",
    ()=>getNodeFetch,
    "getSystemFetch",
    ()=>getSystemFetch,
    "resetSystemFetch",
    ()=>resetSystemFetch,
    "setSystemFetch",
    ()=>setSystemFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
;
const getNodeFetch = {
    // tslint:disable-next-line:no-require-imports
    importFetch: ()=>__turbopack_context__.r("[project]/node_modules/node-fetch/lib/index.mjs [app-ssr] (ecmascript)")
};
let systemFetch;
function resetSystemFetch() {
    systemFetch = null;
}
function setSystemFetch(fetchFn) {
    systemFetch = fetchFn;
}
function getSystemFetch() {
    return systemFetch;
}
class PlatformNode {
    constructor(){
        // tslint:disable-next-line:no-require-imports
        this.util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
        // According to the spec, the built-in encoder can do only UTF-8 encoding.
        // https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/TextEncoder
        this.textEncoder = new this.util.TextEncoder();
    }
    fetch(path, requestInits) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().global.fetch != null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().global.fetch(path, requestInits);
        }
        if (systemFetch == null) {
            systemFetch = getNodeFetch.importFetch();
        }
        return systemFetch(path, requestInits);
    }
    now() {
        const time = process.hrtime();
        return time[0] * 1000 + time[1] / 1000000;
    }
    encode(text, encoding) {
        if (encoding !== 'utf-8' && encoding !== 'utf8') {
            throw new Error(`Node built-in encoder only supports utf-8, but got ${encoding}`);
        }
        return this.textEncoder.encode(text);
    }
    decode(bytes, encoding) {
        if (bytes.length === 0) {
            return '';
        }
        return new this.util.TextDecoder(encoding).decode(bytes);
    }
    isTypedArray(a) {
        return this.util.types.isFloat32Array(a) || this.util.types.isInt32Array(a) || this.util.types.isUint8Array(a) || this.util.types.isUint8ClampedArray(a);
    }
}
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().get('IS_NODE') && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER')) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().setPlatform('node', new PlatformNode());
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvcGxhdGZvcm1zL3BsYXRmb3JtX25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR25DLHlFQUF5RTtBQUN6RSxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDMUIsOENBQThDO0lBQzlDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQ3pDLENBQUM7QUFHRixJQUFJLFdBQW9CLENBQUM7QUFDekIseUVBQXlFO0FBQ3pFLFlBQVk7QUFDWixNQUFNLFVBQVUsZ0JBQWdCO0lBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDckIsQ0FBQztBQUNELE1BQU0sVUFBVSxjQUFjLENBQUMsT0FBZ0I7SUFDN0MsV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUN4QixDQUFDO0FBQ0QsTUFBTSxVQUFVLGNBQWM7SUFDNUIsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUVELE1BQU0sT0FBTyxZQUFZO0lBS3ZCO1FBQ0UsOENBQThDO1FBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLDBFQUEwRTtRQUMxRSwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFZLEVBQUUsWUFBMEI7UUFDNUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3ZCLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELEdBQUc7UUFDRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZLEVBQUUsUUFBZ0I7UUFDbkMsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FDWCxzREFBc0QsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN2RTtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFpQixFQUFFLFFBQWdCO1FBQ3hDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELFlBQVksQ0FBQyxDQUFVO1FBRXJCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztlQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2VBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7ZUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBRUQsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDcEQsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7Q0FDL0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5pbXBvcnQge2Vudn0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5cbi8vIFdlIGFyZSB3cmFwcGluZyB0aGlzIHdpdGhpbiBhbiBvYmplY3Qgc28gaXQgY2FuIGJlIHN0dWJiZWQgYnkgSmFzbWluZS5cbmV4cG9ydCBjb25zdCBnZXROb2RlRmV0Y2ggPSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1yZXF1aXJlLWltcG9ydHNcbiAgaW1wb3J0RmV0Y2g6ICgpID0+IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxufTtcblxudHlwZSBGZXRjaEZuID0gKHVybDogc3RyaW5nLCBpbml0PzogUmVxdWVzdEluaXQpID0+IFByb21pc2U8UmVzcG9uc2U+O1xubGV0IHN5c3RlbUZldGNoOiBGZXRjaEZuO1xuLy8gVGhlc2UgZ2V0dGVycyBhbmQgc2V0dGVycyBhcmUgZm9yIHRlc3Rpbmcgc28gd2UgZG9uJ3QgZXhwb3J0IGEgbXV0YWJsZVxuLy8gdmFyaWFibGUuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTeXN0ZW1GZXRjaCgpIHtcbiAgc3lzdGVtRmV0Y2ggPSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFN5c3RlbUZldGNoKGZldGNoRm46IEZldGNoRm4pIHtcbiAgc3lzdGVtRmV0Y2ggPSBmZXRjaEZuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUZldGNoKCk6IEZldGNoRm4ge1xuICByZXR1cm4gc3lzdGVtRmV0Y2g7XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybU5vZGUgaW1wbGVtZW50cyBQbGF0Zm9ybSB7XG4gIHByaXZhdGUgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHV0aWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgdGhpcy51dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlYywgdGhlIGJ1aWx0LWluIGVuY29kZXIgY2FuIGRvIG9ubHkgVVRGLTggZW5jb2RpbmcuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1RleHRFbmNvZGVyL1RleHRFbmNvZGVyXG4gICAgdGhpcy50ZXh0RW5jb2RlciA9IG5ldyB0aGlzLnV0aWwuVGV4dEVuY29kZXIoKTtcbiAgfVxuXG4gIGZldGNoKHBhdGg6IHN0cmluZywgcmVxdWVzdEluaXRzPzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgaWYgKGVudigpLmdsb2JhbC5mZXRjaCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gZW52KCkuZ2xvYmFsLmZldGNoKHBhdGgsIHJlcXVlc3RJbml0cyk7XG4gICAgfVxuXG4gICAgaWYgKHN5c3RlbUZldGNoID09IG51bGwpIHtcbiAgICAgIHN5c3RlbUZldGNoID0gZ2V0Tm9kZUZldGNoLmltcG9ydEZldGNoKCk7XG4gICAgfVxuICAgIHJldHVybiBzeXN0ZW1GZXRjaChwYXRoLCByZXF1ZXN0SW5pdHMpO1xuICB9XG5cbiAgbm93KCk6IG51bWJlciB7XG4gICAgY29uc3QgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG4gICAgcmV0dXJuIHRpbWVbMF0gKiAxMDAwICsgdGltZVsxXSAvIDEwMDAwMDA7XG4gIH1cblxuICBlbmNvZGUodGV4dDogc3RyaW5nLCBlbmNvZGluZzogc3RyaW5nKTogVWludDhBcnJheSB7XG4gICAgaWYgKGVuY29kaW5nICE9PSAndXRmLTgnICYmIGVuY29kaW5nICE9PSAndXRmOCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTm9kZSBidWlsdC1pbiBlbmNvZGVyIG9ubHkgc3VwcG9ydHMgdXRmLTgsIGJ1dCBnb3QgJHtlbmNvZGluZ31gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGV4dEVuY29kZXIuZW5jb2RlKHRleHQpO1xuICB9XG4gIGRlY29kZShieXRlczogVWludDhBcnJheSwgZW5jb2Rpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGJ5dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRoaXMudXRpbC5UZXh0RGVjb2RlcihlbmNvZGluZykuZGVjb2RlKGJ5dGVzKTtcbiAgfVxuICBpc1R5cGVkQXJyYXkoYTogdW5rbm93bik6IGEgaXMgRmxvYXQzMkFycmF5IHwgSW50MzJBcnJheSB8IFVpbnQ4QXJyYXlcbiAgICB8IFVpbnQ4Q2xhbXBlZEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy51dGlsLnR5cGVzLmlzRmxvYXQzMkFycmF5KGEpXG4gICAgICB8fCB0aGlzLnV0aWwudHlwZXMuaXNJbnQzMkFycmF5KGEpXG4gICAgICB8fCB0aGlzLnV0aWwudHlwZXMuaXNVaW50OEFycmF5KGEpXG4gICAgICB8fCB0aGlzLnV0aWwudHlwZXMuaXNVaW50OENsYW1wZWRBcnJheShhKTtcbiAgfVxufVxuXG5pZiAoZW52KCkuZ2V0KCdJU19OT0RFJykgJiYgIWVudigpLmdldCgnSVNfQlJPV1NFUicpKSB7XG4gIGVudigpLnNldFBsYXRmb3JtKCdub2RlJywgbmV3IFBsYXRmb3JtTm9kZSgpKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "createScalarValue",
    ()=>createScalarValue,
    "decodeString",
    ()=>decodeString,
    "encodeString",
    ()=>encodeString,
    "fetch",
    ()=>fetch,
    "flatten",
    ()=>flatten,
    "isTypedArray",
    ()=>isTypedArray,
    "now",
    ()=>now,
    "toTypedArray",
    ()=>toTypedArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$platforms$2f$is_typed_array_browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/is_typed_array_browser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
;
;
;
;
function createScalarValue(value, dtype) {
    if (dtype === 'string') {
        return encodeString(value);
    }
    return toTypedArray([
        value
    ], dtype);
}
function noConversionNeeded(a, dtype) {
    return a instanceof Float32Array && dtype === 'float32' || a instanceof Int32Array && dtype === 'int32' || a instanceof Uint8Array && dtype === 'bool';
}
function toTypedArray(a, dtype) {
    if (dtype === 'string') {
        throw new Error('Cannot convert a string[] to a TypedArray');
    }
    if (Array.isArray(a)) {
        a = flatten(a);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('DEBUG')) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkConversionForErrors"](a, dtype);
    }
    if (noConversionNeeded(a, dtype)) {
        return a;
    }
    if (dtype == null || dtype === 'float32' || dtype === 'complex64') {
        return new Float32Array(a);
    } else if (dtype === 'int32') {
        return new Int32Array(a);
    } else if (dtype === 'bool') {
        const bool = new Uint8Array(a.length);
        for(let i = 0; i < bool.length; ++i){
            if (Math.round(a[i]) !== 0) {
                bool[i] = 1;
            }
        }
        return bool;
    } else {
        throw new Error(`Unknown data type ${dtype}`);
    }
}
function now() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().platform.now();
}
function fetch(path, requestInits) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().platform.fetch(path, requestInits);
}
function encodeString(s, encoding = 'utf-8') {
    encoding = encoding || 'utf-8';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().platform.encode(s, encoding);
}
function decodeString(bytes, encoding = 'utf-8') {
    encoding = encoding || 'utf-8';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().platform.decode(bytes, encoding);
}
function isTypedArray(a) {
    // TODO(mattsoulanille): Remove this fallback in 5.0.0
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().platform.isTypedArray != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().platform.isTypedArray(a);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$platforms$2f$is_typed_array_browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTypedArrayBrowser"])(a);
    }
}
function flatten(arr, result = [], skipTypedArray = false) {
    if (result == null) {
        result = [];
    }
    if (typeof arr === 'boolean' || typeof arr === 'number' || typeof arr === 'string' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromise"](arr) || arr == null || isTypedArray(arr) && skipTypedArray) {
        result.push(arr);
    } else if (Array.isArray(arr) || isTypedArray(arr)) {
        for(let i = 0; i < arr.length; ++i){
            flatten(arr[i], result, skipTypedArray);
        }
    } else {
        let maxIndex = -1;
        for (const key of Object.keys(arr)){
            // 0 or positive integer.
            if (/^([1-9]+[0-9]*|0)$/.test(key)) {
                maxIndex = Math.max(maxIndex, Number(key));
            }
        }
        for(let i = 0; i <= maxIndex; i++){
            // tslint:disable-next-line: no-unnecessary-type-assertion
            flatten(arr[i], result, skipTypedArray);
        }
    }
    return result;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRXZFLE9BQU8sS0FBSyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLGNBQWMsYUFBYSxDQUFDO0FBQzVCLGNBQWMsYUFBYSxDQUFDO0FBRTVCOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUM3QixLQUFlLEVBQUUsS0FBZTtJQUNsQyxJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDdEIsT0FBTyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7SUFFRCxPQUFPLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLENBQWEsRUFBRSxLQUFlO0lBQ3hELE9BQU8sQ0FBQyxDQUFDLFlBQVksWUFBWSxJQUFJLEtBQUssS0FBSyxTQUFTLENBQUM7UUFDckQsQ0FBQyxDQUFDLFlBQVksVUFBVSxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUM7UUFDOUMsQ0FBQyxDQUFDLFlBQVksVUFBVSxJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFhLEVBQUUsS0FBZTtJQUN6RCxJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLENBQUMsR0FBRyxPQUFPLENB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TUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7ZW52fSBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCB7aXNUeXBlZEFycmF5QnJvd3Nlcn0gZnJvbSAnLi9wbGF0Zm9ybXMvaXNfdHlwZWRfYXJyYXlfYnJvd3Nlcic7XG5pbXBvcnQge0JhY2tlbmRWYWx1ZXMsIERhdGFUeXBlLCBSZWN1cnNpdmVBcnJheSwgVGVuc29yTGlrZSwgVHlwZWRBcnJheX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vdXRpbF9iYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbF9iYXNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGFzaF91dGlsJztcblxuLyoqXG4gKiBDcmVhdGUgdHlwZWQgYXJyYXkgZm9yIHNjYWxhciB2YWx1ZS4gVXNlZCBmb3Igc3RvcmluZyBpbiBgRGF0YVN0b3JhZ2VgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NhbGFyVmFsdWUoXG4gICAgdmFsdWU6IERhdGFUeXBlLCBkdHlwZTogRGF0YVR5cGUpOiBCYWNrZW5kVmFsdWVzIHtcbiAgaWYgKGR0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbmNvZGVTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHRvVHlwZWRBcnJheShbdmFsdWVdLCBkdHlwZSk7XG59XG5cbmZ1bmN0aW9uIG5vQ29udmVyc2lvbk5lZWRlZChhOiBUZW5zb3JMaWtlLCBkdHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIChhIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5ICYmIGR0eXBlID09PSAnZmxvYXQzMicpIHx8XG4gICAgICAoYSBpbnN0YW5jZW9mIEludDMyQXJyYXkgJiYgZHR5cGUgPT09ICdpbnQzMicpIHx8XG4gICAgICAoYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgJiYgZHR5cGUgPT09ICdib29sJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1R5cGVkQXJyYXkoYTogVGVuc29yTGlrZSwgZHR5cGU6IERhdGFUeXBlKTogVHlwZWRBcnJheSB7XG4gIGlmIChkdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgc3RyaW5nW10gdG8gYSBUeXBlZEFycmF5Jyk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICBhID0gZmxhdHRlbihhKTtcbiAgfVxuXG4gIGlmIChlbnYoKS5nZXRCb29sKCdERUJVRycpKSB7XG4gICAgYmFzZS5jaGVja0NvbnZlcnNpb25Gb3JFcnJvcnMoYSBhcyBudW1iZXJbXSwgZHR5cGUpO1xuICB9XG4gIGlmIChub0NvbnZlcnNpb25OZWVkZWQoYSwgZHR5cGUpKSB7XG4gICAgcmV0dXJuIGEgYXMgVHlwZWRBcnJheTtcbiAgfVxuICBpZiAoZHR5cGUgPT0gbnVsbCB8fCBkdHlwZSA9PT0gJ2Zsb2F0MzInIHx8IGR0eXBlID09PSAnY29tcGxleDY0Jykge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGEgYXMgbnVtYmVyW10pO1xuICB9IGVsc2UgaWYgKGR0eXBlID09PSAnaW50MzInKSB7XG4gICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGEgYXMgbnVtYmVyW10pO1xuICB9IGVsc2UgaWYgKGR0eXBlID09PSAnYm9vbCcpIHtcbiAgICBjb25zdCBib29sID0gbmV3IFVpbnQ4QXJyYXkoKGEgYXMgbnVtYmVyW10pLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib29sLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoTWF0aC5yb3VuZCgoYSBhcyBudW1iZXJbXSlbaV0pICE9PSAwKSB7XG4gICAgICAgIGJvb2xbaV0gPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9vbDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YSB0eXBlICR7ZHR5cGV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGhpZ2gtcmVzb2x1dGlvbiB0aW1lIGluIG1pbGxpc2Vjb25kcyByZWxhdGl2ZSB0byBhblxuICogYXJiaXRyYXJ5IHRpbWUgaW4gdGhlIHBhc3QuIEl0IHdvcmtzIGFjcm9zcyBkaWZmZXJlbnQgcGxhdGZvcm1zIChub2RlLmpzLFxuICogYnJvd3NlcnMpLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zb2xlLmxvZyh0Zi51dGlsLm5vdygpKTtcbiAqIGBgYFxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdVdGlsJywgbmFtZXNwYWNlOiAndXRpbCd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3coKTogbnVtYmVyIHtcbiAgcmV0dXJuIGVudigpLnBsYXRmb3JtLm5vdygpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwbGF0Zm9ybS1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBvZlxuICogW2BmZXRjaGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkpLlxuICpcbiAqIElmIGBmZXRjaGAgaXMgZGVmaW5lZCBvbiB0aGUgZ2xvYmFsIG9iamVjdCAoYHdpbmRvd2AsIGBwcm9jZXNzYCwgZXRjLiksXG4gKiBgdGYudXRpbC5mZXRjaGAgcmV0dXJucyB0aGF0IGZ1bmN0aW9uLlxuICpcbiAqIElmIG5vdCwgYHRmLnV0aWwuZmV0Y2hgIHJldHVybnMgYSBwbGF0Zm9ybS1zcGVjaWZpYyBzb2x1dGlvbi5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcmVzb3VyY2UgPSBhd2FpdCB0Zi51dGlsLmZldGNoKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0B0ZW5zb3JmbG93L3RmanMnKTtcbiAqIC8vIGhhbmRsZSByZXNwb25zZVxuICogYGBgXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1V0aWwnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2goXG4gICAgcGF0aDogc3RyaW5nLCByZXF1ZXN0SW5pdHM/OiBSZXF1ZXN0SW5pdCk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgcmV0dXJuIGVudigpLnBsYXRmb3JtLmZldGNoKHBhdGgsIHJlcXVlc3RJbml0cyk7XG59XG5cbi8qKlxuICogRW5jb2RlcyB0aGUgcHJvdmlkZWQgc3RyaW5nIGludG8gYnl0ZXMgdXNpbmcgdGhlIHByb3ZpZGVkIGVuY29kaW5nIHNjaGVtZS5cbiAqXG4gKiBAcGFyYW0gcyBUaGUgc3RyaW5nIHRvIGVuY29kZS5cbiAqIEBwYXJhbSBlbmNvZGluZyBUaGUgZW5jb2Rpbmcgc2NoZW1lLiBEZWZhdWx0cyB0byB1dGYtOC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVXRpbCd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVTdHJpbmcoczogc3RyaW5nLCBlbmNvZGluZyA9ICd1dGYtOCcpOiBVaW50OEFycmF5IHtcbiAgZW5jb2RpbmcgPSBlbmNvZGluZyB8fCAndXRmLTgnO1xuICByZXR1cm4gZW52KCkucGxhdGZvcm0uZW5jb2RlKHMsIGVuY29kaW5nKTtcbn1cblxuLyoqXG4gKiBEZWNvZGVzIHRoZSBwcm92aWRlZCBieXRlcyBpbnRvIGEgc3RyaW5nIHVzaW5nIHRoZSBwcm92aWRlZCBlbmNvZGluZyBzY2hlbWUuXG4gKiBAcGFyYW0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlY29kZS5cbiAqXG4gKiBAcGFyYW0gZW5jb2RpbmcgVGhlIGVuY29kaW5nIHNjaGVtZS4gRGVmYXVsdHMgdG8gdXRmLTguXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1V0aWwnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nKGJ5dGVzOiBVaW50OEFycmF5LCBlbmNvZGluZyA9ICd1dGYtOCcpOiBzdHJpbmcge1xuICBlbmNvZGluZyA9IGVuY29kaW5nIHx8ICd1dGYtOCc7XG4gIHJldHVybiBlbnYoKS5wbGF0Zm9ybS5kZWNvZGUoYnl0ZXMsIGVuY29kaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZWRBcnJheShhOiB7fSk6IGEgaXMgRmxvYXQzMkFycmF5fEludDMyQXJyYXl8VWludDhBcnJheXxcbiAgICBVaW50OENsYW1wZWRBcnJheSB7XG4gIC8vIFRPRE8obWF0dHNvdWxhbmlsbGUpOiBSZW1vdmUgdGhpcyBmYWxsYmFjayBpbiA1LjAuMFxuICBpZiAoZW52KCkucGxhdGZvcm0uaXNUeXBlZEFycmF5ICE9IG51bGwpIHtcbiAgICByZXR1cm4gZW52KCkucGxhdGZvcm0uaXNUeXBlZEFycmF5KGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc1R5cGVkQXJyYXlCcm93c2VyKGEpO1xuICB9XG59XG5cbi8vIE5PVEU6IFdlIGV4cGxpY2l0bHkgdHlwZSBvdXQgd2hhdCBUIGV4dGVuZHMgaW5zdGVhZCBvZiBhbnkgc28gdGhhdFxuLy8gdXRpbC5mbGF0dGVuIG9uIGEgbmVzdGVkIGFycmF5IG9mIG51bWJlciBkb2Vzbid0IHRyeSB0byBpbmZlciBUIGFzIGFcbi8vIG51bWJlcltdW10sIGNhdXNpbmcgdXMgdG8gZXhwbGljaXRseSB0eXBlIHV0aWwuZmxhdHRlbjxudW1iZXI+KCkuXG4vKipcbiAqICBGbGF0dGVucyBhbiBhcmJpdHJhcmlseSBuZXN0ZWQgYXJyYXkuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGEgPSBbWzEsIDJdLCBbMywgNF0sIFs1LCBbNiwgWzddXV1dO1xuICogY29uc3QgZmxhdCA9IHRmLnV0aWwuZmxhdHRlbihhKTtcbiAqIGNvbnNvbGUubG9nKGZsYXQpO1xuICogYGBgXG4gKlxuICogIEBwYXJhbSBhcnIgVGhlIG5lc3RlZCBhcnJheSB0byBmbGF0dGVuLlxuICogIEBwYXJhbSByZXN1bHQgVGhlIGRlc3RpbmF0aW9uIGFycmF5IHdoaWNoIGhvbGRzIHRoZSBlbGVtZW50cy5cbiAqICBAcGFyYW0gc2tpcFR5cGVkQXJyYXkgSWYgdHJ1ZSwgYXZvaWRzIGZsYXR0ZW5pbmcgdGhlIHR5cGVkIGFycmF5cy4gRGVmYXVsdHNcbiAqICAgICAgdG8gZmFsc2UuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1V0aWwnLCBuYW1lc3BhY2U6ICd1dGlsJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uXG5mbGF0dGVuPFQgZXh0ZW5kcyBudW1iZXJ8Ym9vbGVhbnxzdHJpbmd8UHJvbWlzZTxudW1iZXI+fFR5cGVkQXJyYXk+KFxuICAgIGFycjogVHxSZWN1cnNpdmVBcnJheTxUPiwgcmVzdWx0OiBUW10gPSBbXSwgc2tpcFR5cGVkQXJyYXkgPSBmYWxzZSk6IFRbXSB7XG4gIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgIHJlc3VsdCA9IFtdO1xuICB9XG4gIGlmICh0eXBlb2YgYXJyID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIGFyciA9PT0gJ251bWJlcicgfHxcbiAgICB0eXBlb2YgYXJyID09PSAnc3RyaW5nJyB8fCBiYXNlLmlzUHJvbWlzZShhcnIpIHx8IGFyciA9PSBudWxsIHx8XG4gICAgICBpc1R5cGVkQXJyYXkoYXJyKSAmJiBza2lwVHlwZWRBcnJheSkge1xuICAgIHJlc3VsdC5wdXNoKGFyciBhcyBUKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFycikgfHwgaXNUeXBlZEFycmF5KGFycikpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgICAgZmxhdHRlbihhcnJbaV0sIHJlc3VsdCwgc2tpcFR5cGVkQXJyYXkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgbWF4SW5kZXggPSAtMTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhcnIpKSB7XG4gICAgICAvLyAwIG9yIHBvc2l0aXZlIGludGVnZXIuXG4gICAgICBpZiAoL14oWzEtOV0rWzAtOV0qfDApJC8udGVzdChrZXkpKSB7XG4gICAgICAgIG1heEluZGV4ID0gTWF0aC5tYXgobWF4SW5kZXgsIE51bWJlcihrZXkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbWF4SW5kZXg7IGkrKykge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgICAgZmxhdHRlbigoYXJyIGFzIFJlY3Vyc2l2ZUFycmF5PFQ+KVtpXSwgcmVzdWx0LCBza2lwVHlwZWRBcnJheSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/profiler.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "Logger",
    ()=>Logger,
    "Profiler",
    ()=>Profiler,
    "checkComputationForErrors",
    ()=>checkComputationForErrors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <locals>");
;
;
class Profiler {
    constructor(backendTimer, logger){
        this.backendTimer = backendTimer;
        this.logger = logger;
        if (logger == null) {
            this.logger = new Logger();
        }
    }
    profileKernel(kernelName, inputs, f) {
        let outputs;
        const holdResultWrapperFn = ()=>{
            outputs = f();
        };
        let timer;
        const start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["now"]();
        if (this.backendTimer.timerAvailable()) {
            timer = this.backendTimer.time(holdResultWrapperFn);
        } else {
            holdResultWrapperFn();
            for (const output of outputs){
                output.dataSync();
            }
            timer = Promise.resolve({
                kernelMs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["now"]() - start
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('CHECK_COMPUTATION_FOR_ERRORS')) {
            for(let i = 0; i < outputs.length; i++){
                const output = outputs[i];
                // Dangling promise here because we don't want to propagate up
                // asynchronicity.
                output.data().then((tensorVals)=>{
                    checkComputationForErrors(tensorVals, output.dtype, kernelName);
                });
            }
        }
        const kernelProfile = {
            kernelName,
            outputs,
            inputs,
            timeMs: timer.then((timing)=>timing.kernelMs),
            extraInfo: timer.then((timing)=>timing.getExtraProfileInfo != null ? timing.getExtraProfileInfo() : '')
        };
        return kernelProfile;
    }
    logKernelProfile(kernelProfile) {
        const { kernelName, outputs, timeMs, inputs, extraInfo } = kernelProfile;
        outputs.forEach((result)=>{
            Promise.all([
                result.data(),
                timeMs,
                extraInfo
            ]).then((valueContainer)=>{
                this.logger.logKernelProfile(kernelName, result, valueContainer[0], valueContainer[1], inputs, valueContainer[2]);
            });
        });
    }
}
function checkComputationForErrors(vals, dtype, kernelName) {
    if (dtype !== 'float32') {
        // Only floating point computations will generate NaN values
        return false;
    }
    for(let i = 0; i < vals.length; i++){
        const num = vals[i];
        if (isNaN(num) || !isFinite(num)) {
            // Throwing custom exception so behavior is testable.
            console.warn(`Found ${num} in the result of '${kernelName}'`);
            return true;
        }
    }
    return false;
}
class Logger {
    logKernelProfile(name, result, vals, timeMs, inputs, extraInfo) {
        const time = typeof timeMs === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rightPad"](`${timeMs}ms`, 9) : timeMs['error'];
        const paddedName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rightPad"](name, 25);
        const rank = result.rank;
        const size = result.size;
        const shape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rightPad"](result.shape.toString(), 14);
        let inputShapesDescription = '';
        for(const name in inputs){
            const input = inputs[name];
            if (input != null) {
                // The input might be a non-tensor (e.g HTMLImageElement), in which case
                // we claim the output shape as input shape.
                const inputShape = input.shape || result.shape;
                const inputRank = inputShape.length;
                inputShapesDescription += `${name}: ${inputRank}D ${inputRank > 0 ? inputShape : ''} `;
            }
        }
        console.log(`%c${paddedName}\t%c${time}\t%c${rank}D ${shape}\t%c${size}\t%c${inputShapesDescription}\t%c${extraInfo}`, 'font-weight:bold', 'color:red', 'color:blue', 'color: orange', 'color: green', 'color: steelblue');
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL3Byb2ZpbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUdILE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJbEMsT0FBTyxLQUFLLElBQUksTUFBTSxRQUFRLENBQUM7QUFVL0IsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFBb0IsWUFBMEIsRUFBVSxNQUFlO1FBQW5ELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNyRSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFrQixFQUFFLE1BQXNCLEVBQUUsQ0FBaUI7UUFFekUsSUFBSSxPQUFpQixDQUFDO1FBQ3RCLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFO1lBQy9CLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFDRixJQUFJLEtBQWlDLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUN0QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsbUJBQW1CLEVBQUUsQ0FBQztZQUN0QixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUUs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Q0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtCYWNrZW5kVGltZXIsIEJhY2tlbmRUaW1pbmdJbmZvfSBmcm9tICcuL2JhY2tlbmRzL2JhY2tlbmQnO1xuaW1wb3J0IHtlbnZ9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtUZW5zb3J9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7TmFtZWRUZW5zb3JNYXB9IGZyb20gJy4vdGVuc29yX3R5cGVzJztcbmltcG9ydCB7RGF0YVR5cGUsIERhdGFUeXBlTWFwLCBUeXBlZEFycmF5fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IHR5cGUgS2VybmVsUHJvZmlsZSA9IHtcbiAga2VybmVsTmFtZTogc3RyaW5nLFxuICBvdXRwdXRzOiBUZW5zb3JbXSxcbiAgaW5wdXRzOiBOYW1lZFRlbnNvck1hcCxcbiAgdGltZU1zOiBQcm9taXNlPG51bWJlcnx7ZXJyb3I6IHN0cmluZ30+LFxuICBleHRyYUluZm86IFByb21pc2U8c3RyaW5nPlxufTtcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kVGltZXI6IEJhY2tlbmRUaW1lciwgcHJpdmF0ZSBsb2dnZXI/OiBMb2dnZXIpIHtcbiAgICBpZiAobG9nZ2VyID09IG51bGwpIHtcbiAgICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByb2ZpbGVLZXJuZWwoa2VybmVsTmFtZTogc3RyaW5nLCBpbnB1dHM6IE5hbWVkVGVuc29yTWFwLCBmOiAoKSA9PiBUZW5zb3JbXSk6XG4gICAgICBLZXJuZWxQcm9maWxlIHtcbiAgICBsZXQgb3V0cHV0czogVGVuc29yW107XG4gICAgY29uc3QgaG9sZFJlc3VsdFdyYXBwZXJGbiA9ICgpID0+IHtcbiAgICAgIG91dHB1dHMgPSBmKCk7XG4gICAgfTtcbiAgICBsZXQgdGltZXI6IFByb21pc2U8QmFja2VuZFRpbWluZ0luZm8+O1xuICAgIGNvbnN0IHN0YXJ0ID0gdXRpbC5ub3coKTtcbiAgICBpZiAodGhpcy5iYWNrZW5kVGltZXIudGltZXJBdmFpbGFibGUoKSkge1xuICAgICAgdGltZXIgPSB0aGlzLmJhY2tlbmRUaW1lci50aW1lKGhvbGRSZXN1bHRXcmFwcGVyRm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBob2xkUmVzdWx0V3JhcHBlckZuKCk7XG4gICAgICBmb3IgKGNvbnN0IG91dHB1dCBvZiBvdXRwdXRzKSB7XG4gICAgICAgIG91dHB1dC5kYXRhU3luYygpO1xuICAgICAgfVxuICAgICAgdGltZXIgPSBQcm9taXNlLnJlc29sdmUoe2tlcm5lbE1zOiB1dGlsLm5vdygpIC0gc3RhcnR9KTtcbiAgICB9XG4gICAgaWYgKGVudigpLmdldEJvb2woJ0NIRUNLX0NPTVBVVEFUSU9OX0ZPUl9FUlJPUlMnKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRwdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG91dHB1dHNbaV07XG4gICAgICAgIC8vIERhbmdsaW5nIHByb21pc2UgaGVyZSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gcHJvcGFnYXRlIHVwXG4gICAgICAgIC8vIGFzeW5jaHJvbmljaXR5LlxuICAgICAgICBvdXRwdXQuZGF0YSgpLnRoZW4odGVuc29yVmFscyA9PiB7XG4gICAgICAgICAgY2hlY2tDb21wdXRhdGlvbkZvckVycm9ycyh0ZW5zb3JWYWxzLCBvdXRwdXQuZHR5cGUsIGtlcm5lbE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBrZXJuZWxQcm9maWxlID0ge1xuICAgICAga2VybmVsTmFtZSxcbiAgICAgIG91dHB1dHMsXG4gICAgICBpbnB1dHMsXG4gICAgICB0aW1lTXM6IHRpbWVyLnRoZW4odGltaW5nID0+IHRpbWluZy5rZXJuZWxNcyksXG4gICAgICBleHRyYUluZm86IHRpbWVyLnRoZW4oXG4gICAgICAgICAgdGltaW5nID0+IHRpbWluZy5nZXRFeHRyYVByb2ZpbGVJbmZvICE9IG51bGwgP1xuICAgICAgICAgICAgICB0aW1pbmcuZ2V0RXh0cmFQcm9maWxlSW5mbygpIDpcbiAgICAgICAgICAgICAgJycpXG4gICAgfTtcbiAgICByZXR1cm4ga2VybmVsUHJvZmlsZTtcbiAgfVxuXG4gIGxvZ0tlcm5lbFByb2ZpbGUoa2VybmVsUHJvZmlsZTogS2VybmVsUHJvZmlsZSk6IHZvaWQge1xuICAgIGNvbnN0IHtrZXJuZWxOYW1lLCBvdXRwdXRzLCB0aW1lTXMsIGlucHV0cywgZXh0cmFJbmZvfSA9IGtlcm5lbFByb2ZpbGU7XG5cbiAgICBvdXRwdXRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFtyZXN1bHQuZGF0YSgpLCB0aW1lTXMsIGV4dHJhSW5mb10pLnRoZW4odmFsdWVDb250YWluZXIgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2dLZXJuZWxQcm9maWxlKFxuICAgICAgICAgICAga2VybmVsTmFtZSwgcmVzdWx0LCB2YWx1ZUNvbnRhaW5lclswXSwgdmFsdWVDb250YWluZXJbMV0sIGlucHV0cyxcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyWzJdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbXB1dGF0aW9uRm9yRXJyb3JzPEQgZXh0ZW5kcyBEYXRhVHlwZT4oXG4gICAgdmFsczogRGF0YVR5cGVNYXBbRF0sIGR0eXBlOiBELCBrZXJuZWxOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKGR0eXBlICE9PSAnZmxvYXQzMicpIHtcbiAgICAvLyBPbmx5IGZsb2F0aW5nIHBvaW50IGNvbXB1dGF0aW9ucyB3aWxsIGdlbmVyYXRlIE5hTiB2YWx1ZXNcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbnVtID0gdmFsc1tpXSBhcyBudW1iZXI7XG4gICAgaWYgKGlzTmFOKG51bSkgfHwgIWlzRmluaXRlKG51bSkpIHtcbiAgICAgIC8vIFRocm93aW5nIGN1c3RvbSBleGNlcHRpb24gc28gYmVoYXZpb3IgaXMgdGVzdGFibGUuXG4gICAgICBjb25zb2xlLndhcm4oYEZvdW5kICR7bnVtfSBpbiB0aGUgcmVzdWx0IG9mICcke2tlcm5lbE5hbWV9J2ApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIGxvZ0tlcm5lbFByb2ZpbGUoXG4gICAgICBuYW1lOiBzdHJpbmcsIHJlc3VsdDogVGVuc29yLCB2YWxzOiBUeXBlZEFycmF5LFxuICAgICAgdGltZU1zOiBudW1iZXJ8e2Vycm9yOiBzdHJpbmd9LCBpbnB1dHM6IE5hbWVkVGVuc29yTWFwLFxuICAgICAgZXh0cmFJbmZvPzogc3RyaW5nKSB7XG4gICAgY29uc3QgdGltZSA9IHR5cGVvZiB0aW1lTXMgPT09ICdudW1iZXInID8gdXRpbC5yaWdodFBhZChgJHt0aW1lTXN9bXNgLCA5KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZU1zWydlcnJvciddO1xuICAgIGNvbnN0IHBhZGRlZE5hbWUgPSB1dGlsLnJpZ2h0UGFkKG5hbWUsIDI1KTtcbiAgICBjb25zdCByYW5rID0gcmVzdWx0LnJhbms7XG4gICAgY29uc3Qgc2l6ZSA9IHJlc3VsdC5zaXplO1xuICAgIGNvbnN0IHNoYXBlID0gdXRpbC5yaWdodFBhZChyZXN1bHQuc2hhcGUudG9TdHJpbmcoKSwgMTQpO1xuICAgIGxldCBpbnB1dFNoYXBlc0Rlc2NyaXB0aW9uID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gaW5wdXRzKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tuYW1lXTtcbiAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIC8vIFRoZSBpbnB1dCBtaWdodCBiZSBhIG5vbi10ZW5zb3IgKGUuZyBIVE1MSW1hZ2VFbGVtZW50KSwgaW4gd2hpY2ggY2FzZVxuICAgICAgICAvLyB3ZSBjbGFpbSB0aGUgb3V0cHV0IHNoYXBlIGFzIGlucHV0IHNoYXBlLlxuICAgICAgICBjb25zdCBpbnB1dFNoYXBlID0gaW5wdXQuc2hhcGUgfHwgcmVzdWx0LnNoYXBlO1xuICAgICAgICBjb25zdCBpbnB1dFJhbmsgPSBpbnB1dFNoYXBlLmxlbmd0aDtcbiAgICAgICAgaW5wdXRTaGFwZXNEZXNjcmlwdGlvbiArPVxuICAgICAgICAgICAgYCR7bmFtZX06ICR7aW5wdXRSYW5rfUQgJHtpbnB1dFJhbmsgPiAwID8gaW5wdXRTaGFwZSA6ICcnfSBgO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJWMke3BhZGRlZE5hbWV9XFx0JWMke3RpbWV9XFx0JWMke3Jhbmt9RCAke3NoYXBlfVxcdCVjJHtzaXplfVxcdCVjJHtcbiAgICAgICAgICAgIGlucHV0U2hhcGVzRGVzY3JpcHRpb259XFx0JWMke2V4dHJhSW5mb31gLFxuICAgICAgICAnZm9udC13ZWlnaHQ6Ym9sZCcsICdjb2xvcjpyZWQnLCAnY29sb3I6Ymx1ZScsICdjb2xvcjogb3JhbmdlJyxcbiAgICAgICAgJ2NvbG9yOiBncmVlbicsICdjb2xvcjogc3RlZWxibHVlJyk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tape.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "backpropagateGradients",
    ()=>backpropagateGradients,
    "getFilteredNodesXToY",
    ()=>getFilteredNodesXToY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
function getFilteredNodesXToY(tape, xs, y) {
    // Forward pass to compute all the nodes and Tensors that are transitively a
    // function of x.
    const tensorsFromX = {};
    const nodesFromX = {};
    for(let i = 0; i < xs.length; i++){
        tensorsFromX[xs[i].id] = true;
    }
    for(let i = 0; i < tape.length; i++){
        const node = tape[i];
        const nodeInputs = node.inputs;
        for(const inputName in nodeInputs){
            const input = nodeInputs[inputName];
            let anyInputFromX = false;
            for(let j = 0; j < xs.length; j++){
                if (tensorsFromX[input.id]) {
                    node.outputs.forEach((output)=>tensorsFromX[output.id] = true);
                    anyInputFromX = true;
                    nodesFromX[node.id] = true;
                    break;
                }
            }
            if (anyInputFromX) {
                break;
            }
        }
    }
    // Backward pass to find all of the nodes and Tensors that lead to y.
    const tensorsLeadToY = {};
    tensorsLeadToY[y.id] = true;
    const nodesToY = {};
    for(let i = tape.length - 1; i >= 0; i--){
        const node = tape[i];
        const nodeInputs = node.inputs;
        // If any of the outputs lead to y, mark all of the inputs as leading to y.
        for(let j = 0; j < node.outputs.length; j++){
            if (tensorsLeadToY[node.outputs[j].id]) {
                for(const inputName in nodeInputs){
                    tensorsLeadToY[nodeInputs[inputName].id] = true;
                    nodesToY[node.id] = true;
                }
                break;
            }
        }
    }
    // Return the paths that come from x and lead to y.
    const filteredTape = [];
    for(let i = 0; i < tape.length; i++){
        const node = tape[i];
        if (nodesFromX[node.id] && nodesToY[node.id]) {
            // Prune the inputs from the node that aren't a function of x.
            const prunedInputs = {};
            for(const inputName in node.inputs){
                const nodeInput = node.inputs[inputName];
                if (tensorsFromX[nodeInput.id]) {
                    prunedInputs[inputName] = nodeInput;
                }
            }
            // Copy the node and overwrite inputsAndArgs to the pruned version.
            const prunedNode = Object.assign({}, node);
            prunedNode.inputs = prunedInputs;
            prunedNode.outputs = node.outputs;
            filteredTape.push(prunedNode);
        }
    }
    return filteredTape;
}
function backpropagateGradients(tensorAccumulatedGradientMap, filteredTape, tidy, add) {
    // Walk the tape backward and keep a map of Tensor to its gradient.
    for(let i = filteredTape.length - 1; i >= 0; i--){
        const node = filteredTape[i];
        const dys = [];
        node.outputs.forEach((o)=>{
            const gradTensor = tensorAccumulatedGradientMap[o.id];
            if (gradTensor != null) {
                dys.push(gradTensor);
            } else {
                // This particular output is not in the back-propagation subgraph, so it
                // does not affect the final output, thus we put null for its dy.
                dys.push(null);
            }
        });
        if (node.gradient == null) {
            throw new Error(`Cannot compute gradient: gradient function not found ` + `for ${node.kernelName}.`);
        }
        // Backprop dy through this node and accumulate gradients over the inputs.
        const inputGradients = node.gradient(dys);
        for(const inputName in node.inputs){
            if (!(inputName in inputGradients)) {
                throw new Error(`Cannot backprop through input ${inputName}. ` + `Available gradients found: ${Object.keys(inputGradients)}.`);
            }
            // Call the gradient function.
            const dx = tidy(()=>inputGradients[inputName]());
            if (dx.dtype !== 'float32') {
                throw new Error(`Error in gradient for op ${node.kernelName}. The gradient of input ` + `${inputName} must have 'float32' dtype, but has '${dx.dtype}'`);
            }
            const x = node.inputs[inputName];
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arraysEqual"](dx.shape, x.shape)) {
                throw new Error(`Error in gradient for op ${node.kernelName}. The gradient of input ` + `'${inputName}' has shape '${dx.shape}', which does not match ` + `the shape of the input '${x.shape}'`);
            }
            if (tensorAccumulatedGradientMap[x.id] == null) {
                tensorAccumulatedGradientMap[x.id] = dx;
            } else {
                const curGradient = tensorAccumulatedGradientMap[x.id];
                tensorAccumulatedGradientMap[x.id] = add(curGradient, dx);
                curGradient.dispose();
            }
        }
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvdGFwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFJSCxPQUFPLEtBQUssSUFBSSxNQUFNLFFBQVEsQ0FBQztBQWdCL0I7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDaEMsSUFBZ0IsRUFBRSxFQUFZLEVBQUUsQ0FBUztJQUMzQyw0RUFBNEU7SUFDNUUsaUJBQWlCO0lBQ2pCLE1BQU0sWUFBWSxHQUFrQyxFQUFFLENBQUM7SUFDdkQsTUFBTSxVQUFVLEdBQWdDLEVBQUUsQ0FBQztJQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNsQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUMvQjtJQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2xDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVwQyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUMvRCxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDM0IsTUFBTTtpQkFDUDthQUNGO1lBRUQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLE1BQU07YUFDUDtTQUNGO0tBQ0Y7SUFFRCxxRUFBcUU7SUFDckUsTUFBTSxjQUFjLEdBQWtDLEVBQUUsQ0FBQztJQUN6RCxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM1QixNQUFNLFFBQVEsR0FBZ0MsRUFBRSxDQUFDO0lBRWpELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUvQiwyRUFBMkU7UUFDM0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RDLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO29CQUNsQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQzFCO2dCQUNELE1BQU07YUFDUDtTQUNGO0tBQ0Y7SUFFRCxtREFBbUQ7SUFDbkQsTUFBTSxZQUFZLEdBQWUsRUFBRSxDQUFDO0lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM1Qyw4REFBOEQ7WUFDOUQsTUFBTSxZQUFZLEdBQWtDLEVBQUUsQ0FBQztZQUN2RCxLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ25DLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDOUIsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztpQkFDckM7YUFDRjtZQUVELG1FQUFtRTtZQUNuRSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQyxVQUFVLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztZQUNqQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFFbEMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQjtLQUNGO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FDbEMsNEJBQTBELEVBQzFELFlBQXdCLEVBQUUsSUFBNkIsRUFDdkQsR0FBcUM7SUFDdkMsbUVBQW1FO0lBQ25FLEtBQUssSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqRCxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0IsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sVUFBVSxHQUFHLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsd0VBQXdFO2dCQUN4RSxpRUFBaUU7Z0JBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FDWCx1REFBdUQ7Z0JBQ3ZELE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFRCwwRUFBMEU7UUFDMUUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUxQyxLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLGNBQWMsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUNYLGlDQUFpQyxTQUFTLElBQUk7b0JBQzlDLDhCQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRTtZQUVELDhCQUE4QjtZQUM5QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUMxQixNQUFNLElBQUksS0FBSyxDQUNYLDRCQUNJLElBQUksQ0FBQyxVQUFVLDBCQUEwQjtvQkFDN0MsR0FBRyxTQUFTLHdDQUF3QyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUN0RTtZQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQ1gsNEJBQ0ksSUFBSSxDQUFDLFVBQVUsMEJBQTBCO29CQUM3QyxJQUFJLFNBQVMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLDBCQUEwQjtvQkFDL0QsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsSUFBSSw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUM5Qyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLE1BQU0sV0FBVyxHQUFHLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge1RlbnNvcn0gZnJvbSAnLi90ZW5zb3InO1xuaW1wb3J0IHtOYW1lZFRlbnNvck1hcH0gZnJvbSAnLi90ZW5zb3JfdHlwZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhcGVOb2RlIHtcbiAgaWQ6IG51bWJlcjtcbiAga2VybmVsTmFtZTogc3RyaW5nO1xuICBvdXRwdXRzOiBUZW5zb3JbXTtcbiAgaW5wdXRzOiBOYW1lZFRlbnNvck1hcDtcbiAgLy8gT3B0aW9uYWwgcGFyYW1zLCBkZWZpbmVkIG9ubHkgZm9yIG9wcyB3aXRoIGdyYWRpZW50IGltcGwuXG4gIGdyYWRpZW50PzogKGR5czogVGVuc29yW10pID0+IE5hbWVkR3JhZGllbnRNYXA7XG4gIHNhdmVkPzogVGVuc29yW107XG59XG5cbmV4cG9ydCB0eXBlIE5hbWVkR3JhZGllbnRNYXAgPSB7XG4gIFtpbnB1dE5hbWU6IHN0cmluZ106ICgpID0+IFRlbnNvcjtcbn07XG5cbi8qKlxuICogQ29tcHV0ZXMgYSBsaXN0IG9mIFRhcGVOb2RlcyB0aGF0IGNvbm5lY3QgeCB0byB5LCBmaWx0ZXJpbmcgZXZlcnl0aGluZyBlbHNlXG4gKiBvdXQgYW5kIHByZXNlcnZpbmcgdGhlIG9yZGVyIG9mIHRoZSBvcmlnaW5hbCB0YXBlIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB0YXBlIFRoZSB0YXBlIGVsZW1lbnRzIHRvIGZpbHRlci5cbiAqIEBwYXJhbSB4cyBUaGUgaW5wdXQgVGVuc29ycy5cbiAqIEBwYXJhbSB5IFRoZSBvdXRwdXQgVGVuc29yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyZWROb2Rlc1hUb1koXG4gICAgdGFwZTogVGFwZU5vZGVbXSwgeHM6IFRlbnNvcltdLCB5OiBUZW5zb3IpOiBUYXBlTm9kZVtdIHtcbiAgLy8gRm9yd2FyZCBwYXNzIHRvIGNvbXB1dGUgYWxsIHRoZSBub2RlcyBhbmQgVGVuc29ycyB0aGF0IGFyZSB0cmFuc2l0aXZlbHkgYVxuICAvLyBmdW5jdGlvbiBvZiB4LlxuICBjb25zdCB0ZW5zb3JzRnJvbVg6IHtbdGVuc29ySWQ6IG51bWJlcl06IGJvb2xlYW59ID0ge307XG4gIGNvbnN0IG5vZGVzRnJvbVg6IHtbbm9kZUlkOiBudW1iZXJdOiBib29sZWFufSA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVuc29yc0Zyb21YW3hzW2ldLmlkXSA9IHRydWU7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcGUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gdGFwZVtpXTtcbiAgICBjb25zdCBub2RlSW5wdXRzID0gbm9kZS5pbnB1dHM7XG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gbm9kZUlucHV0cykge1xuICAgICAgY29uc3QgaW5wdXQgPSBub2RlSW5wdXRzW2lucHV0TmFtZV07XG5cbiAgICAgIGxldCBhbnlJbnB1dEZyb21YID0gZmFsc2U7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHhzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0ZW5zb3JzRnJvbVhbaW5wdXQuaWRdKSB7XG4gICAgICAgICAgbm9kZS5vdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHRlbnNvcnNGcm9tWFtvdXRwdXQuaWRdID0gdHJ1ZSk7XG4gICAgICAgICAgYW55SW5wdXRGcm9tWCA9IHRydWU7XG4gICAgICAgICAgbm9kZXNGcm9tWFtub2RlLmlkXSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFueUlucHV0RnJvbVgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQmFja3dhcmQgcGFzcyB0byBmaW5kIGFsbCBvZiB0aGUgbm9kZXMgYW5kIFRlbnNvcnMgdGhhdCBsZWFkIHRvIHkuXG4gIGNvbnN0IHRlbnNvcnNMZWFkVG9ZOiB7W3RlbnNvcklkOiBudW1iZXJdOiBib29sZWFufSA9IHt9O1xuICB0ZW5zb3JzTGVhZFRvWVt5LmlkXSA9IHRydWU7XG4gIGNvbnN0IG5vZGVzVG9ZOiB7W25vZGVJZDogbnVtYmVyXTogYm9vbGVhbn0gPSB7fTtcblxuICBmb3IgKGxldCBpID0gdGFwZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IG5vZGUgPSB0YXBlW2ldO1xuICAgIGNvbnN0IG5vZGVJbnB1dHMgPSBub2RlLmlucHV0cztcblxuICAgIC8vIElmIGFueSBvZiB0aGUgb3V0cHV0cyBsZWFkIHRvIHksIG1hcmsgYWxsIG9mIHRoZSBpbnB1dHMgYXMgbGVhZGluZyB0byB5LlxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5vdXRwdXRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAodGVuc29yc0xlYWRUb1lbbm9kZS5vdXRwdXRzW2pdLmlkXSkge1xuICAgICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBub2RlSW5wdXRzKSB7XG4gICAgICAgICAgdGVuc29yc0xlYWRUb1lbbm9kZUlucHV0c1tpbnB1dE5hbWVdLmlkXSA9IHRydWU7XG4gICAgICAgICAgbm9kZXNUb1lbbm9kZS5pZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgcGF0aHMgdGhhdCBjb21lIGZyb20geCBhbmQgbGVhZCB0byB5LlxuICBjb25zdCBmaWx0ZXJlZFRhcGU6IFRhcGVOb2RlW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRhcGVbaV07XG5cbiAgICBpZiAobm9kZXNGcm9tWFtub2RlLmlkXSAmJiBub2Rlc1RvWVtub2RlLmlkXSkge1xuICAgICAgLy8gUHJ1bmUgdGhlIGlucHV0cyBmcm9tIHRoZSBub2RlIHRoYXQgYXJlbid0IGEgZnVuY3Rpb24gb2YgeC5cbiAgICAgIGNvbnN0IHBydW5lZElucHV0czoge1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0gPSB7fTtcbiAgICAgIGZvciAoY29uc3QgaW5wdXROYW1lIGluIG5vZGUuaW5wdXRzKSB7XG4gICAgICAgIGNvbnN0IG5vZGVJbnB1dCA9IG5vZGUuaW5wdXRzW2lucHV0TmFtZV07XG4gICAgICAgIGlmICh0ZW5zb3JzRnJvbVhbbm9kZUlucHV0LmlkXSkge1xuICAgICAgICAgIHBydW5lZElucHV0c1tpbnB1dE5hbWVdID0gbm9kZUlucHV0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgdGhlIG5vZGUgYW5kIG92ZXJ3cml0ZSBpbnB1dHNBbmRBcmdzIHRvIHRoZSBwcnVuZWQgdmVyc2lvbi5cbiAgICAgIGNvbnN0IHBydW5lZE5vZGUgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlKTtcbiAgICAgIHBydW5lZE5vZGUuaW5wdXRzID0gcHJ1bmVkSW5wdXRzO1xuICAgICAgcHJ1bmVkTm9kZS5vdXRwdXRzID0gbm9kZS5vdXRwdXRzO1xuXG4gICAgICBmaWx0ZXJlZFRhcGUucHVzaChwcnVuZWROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRUYXBlO1xufVxuXG4vKipcbiAqIEJhY2twcm9wYWdhdGUgZ3JhZGllbnRzIHRocm91Z2ggdGhlIGZpbHRlcmVkIFRhcGVOb2Rlcy5cbiAqXG4gKiBAcGFyYW0gdGVuc29yQWNjdW11bGF0ZWRHcmFkaWVudE1hcCBBIG1hcCBvZiBUZW5zb3IgdG8gaXRzIGdyYWRpZW50LiBUaGlzIG1hcFxuICogaXMgbXV0YXRlZCBieSB0aGlzIG1ldGhvZC5cbiAqIEBwYXJhbSBmaWx0ZXJlZFRhcGUgVGhlIGZpbHRlcmVkIFRhcGVOb2RlcyB0byBiYWNrcHJvcCB0aHJvdWdoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja3Byb3BhZ2F0ZUdyYWRpZW50cyhcbiAgICB0ZW5zb3JBY2N1bXVsYXRlZEdyYWRpZW50TWFwOiB7W3RlbnNvcklkOiBudW1iZXJdOiBUZW5zb3J9LFxuICAgIGZpbHRlcmVkVGFwZTogVGFwZU5vZGVbXSwgdGlkeTogKGY6IEZ1bmN0aW9uKSA9PiBUZW5zb3IsXG4gICAgYWRkOiAoYTogVGVuc29yLCBiOiBUZW5zb3IpID0+IFRlbnNvcikge1xuICAvLyBXYWxrIHRoZSB0YXBlIGJhY2t3YXJkIGFuZCBrZWVwIGEgbWFwIG9mIFRlbnNvciB0byBpdHMgZ3JhZGllbnQuXG4gIGZvciAobGV0IGkgPSBmaWx0ZXJlZFRhcGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBub2RlID0gZmlsdGVyZWRUYXBlW2ldO1xuXG4gICAgY29uc3QgZHlzOiBUZW5zb3JbXSA9IFtdO1xuICAgIG5vZGUub3V0cHV0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgY29uc3QgZ3JhZFRlbnNvciA9IHRlbnNvckFjY3VtdWxhdGVkR3JhZGllbnRNYXBbby5pZF07XG4gICAgICBpZiAoZ3JhZFRlbnNvciAhPSBudWxsKSB7XG4gICAgICAgIGR5cy5wdXNoKGdyYWRUZW5zb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGhpcyBwYXJ0aWN1bGFyIG91dHB1dCBpcyBub3QgaW4gdGhlIGJhY2stcHJvcGFnYXRpb24gc3ViZ3JhcGgsIHNvIGl0XG4gICAgICAgIC8vIGRvZXMgbm90IGFmZmVjdCB0aGUgZmluYWwgb3V0cHV0LCB0aHVzIHdlIHB1dCBudWxsIGZvciBpdHMgZHkuXG4gICAgICAgIGR5cy5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUuZ3JhZGllbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgY29tcHV0ZSBncmFkaWVudDogZ3JhZGllbnQgZnVuY3Rpb24gbm90IGZvdW5kIGAgK1xuICAgICAgICAgIGBmb3IgJHtub2RlLmtlcm5lbE5hbWV9LmApO1xuICAgIH1cblxuICAgIC8vIEJhY2twcm9wIGR5IHRocm91Z2ggdGhpcyBub2RlIGFuZCBhY2N1bXVsYXRlIGdyYWRpZW50cyBvdmVyIHRoZSBpbnB1dHMuXG4gICAgY29uc3QgaW5wdXRHcmFkaWVudHMgPSBub2RlLmdyYWRpZW50KGR5cyk7XG5cbiAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBub2RlLmlucHV0cykge1xuICAgICAgaWYgKCEoaW5wdXROYW1lIGluIGlucHV0R3JhZGllbnRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgQ2Fubm90IGJhY2twcm9wIHRocm91Z2ggaW5wdXQgJHtpbnB1dE5hbWV9LiBgICtcbiAgICAgICAgICAgIGBBdmFpbGFibGUgZ3JhZGllbnRzIGZvdW5kOiAke09iamVjdC5rZXlzKGlucHV0R3JhZGllbnRzKX0uYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGwgdGhlIGdyYWRpZW50IGZ1bmN0aW9uLlxuICAgICAgY29uc3QgZHggPSB0aWR5KCgpID0+IGlucHV0R3JhZGllbnRzW2lucHV0TmFtZV0oKSk7XG4gICAgICBpZiAoZHguZHR5cGUgIT09ICdmbG9hdDMyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRXJyb3IgaW4gZ3JhZGllbnQgZm9yIG9wICR7XG4gICAgICAgICAgICAgICAgbm9kZS5rZXJuZWxOYW1lfS4gVGhlIGdyYWRpZW50IG9mIGlucHV0IGAgK1xuICAgICAgICAgICAgYCR7aW5wdXROYW1lfSBtdXN0IGhhdmUgJ2Zsb2F0MzInIGR0eXBlLCBidXQgaGFzICcke2R4LmR0eXBlfSdgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHggPSBub2RlLmlucHV0c1tpbnB1dE5hbWVdO1xuICAgICAgaWYgKCF1dGlsLmFycmF5c0VxdWFsKGR4LnNoYXBlLCB4LnNoYXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRXJyb3IgaW4gZ3JhZGllbnQgZm9yIG9wICR7XG4gICAgICAgICAgICAgICAgbm9kZS5rZXJuZWxOYW1lfS4gVGhlIGdyYWRpZW50IG9mIGlucHV0IGAgK1xuICAgICAgICAgICAgYCcke2lucHV0TmFtZX0nIGhhcyBzaGFwZSAnJHtkeC5zaGFwZX0nLCB3aGljaCBkb2VzIG5vdCBtYXRjaCBgICtcbiAgICAgICAgICAgIGB0aGUgc2hhcGUgb2YgdGhlIGlucHV0ICcke3guc2hhcGV9J2ApO1xuICAgICAgfVxuXG4gICAgICBpZiAodGVuc29yQWNjdW11bGF0ZWRHcmFkaWVudE1hcFt4LmlkXSA9PSBudWxsKSB7XG4gICAgICAgIHRlbnNvckFjY3VtdWxhdGVkR3JhZGllbnRNYXBbeC5pZF0gPSBkeDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGN1ckdyYWRpZW50ID0gdGVuc29yQWNjdW11bGF0ZWRHcmFkaWVudE1hcFt4LmlkXTtcbiAgICAgICAgdGVuc29yQWNjdW11bGF0ZWRHcmFkaWVudE1hcFt4LmlkXSA9IGFkZChjdXJHcmFkaWVudCwgZHgpO1xuICAgICAgICBjdXJHcmFkaWVudC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_format.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "tensorToString",
    ()=>tensorToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
// Maximum number of values before we decide to show ellipsis.
const FORMAT_LIMIT_NUM_VALS = 20;
// Number of first and last values to show when displaying a, b,...,y, z.
const FORMAT_NUM_FIRST_LAST_VALS = 3;
// Number of significant digits to show.
const FORMAT_NUM_SIG_DIGITS = 7;
function tensorToString(vals, shape, dtype, verbose) {
    const strides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeStrides"])(shape);
    const padPerCol = computeMaxSizePerColumn(vals, shape, dtype, strides);
    const rank = shape.length;
    const valsLines = subTensorToString(vals, shape, dtype, strides, padPerCol);
    const lines = [
        'Tensor'
    ];
    if (verbose) {
        lines.push(`  dtype: ${dtype}`);
        lines.push(`  rank: ${rank}`);
        lines.push(`  shape: [${shape}]`);
        lines.push(`  values:`);
    }
    lines.push(valsLines.map((l)=>'    ' + l).join('\n'));
    return lines.join('\n');
}
function computeMaxSizePerColumn(vals, shape, dtype, strides) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeFromShape"])(shape);
    const numCols = strides[strides.length - 1];
    const padPerCol = new Array(numCols).fill(0);
    const rank = shape.length;
    const valuesOrTuples = dtype === 'complex64' ? createComplexTuples(vals) : vals;
    if (rank > 1) {
        for(let row = 0; row < n / numCols; row++){
            const offset = row * numCols;
            for(let j = 0; j < numCols; j++){
                padPerCol[j] = Math.max(padPerCol[j], valToString(valuesOrTuples[offset + j], 0, dtype).length);
            }
        }
    }
    return padPerCol;
}
function valToString(val, pad, dtype) {
    let valStr;
    if (Array.isArray(val)) {
        valStr = `${parseFloat(val[0].toFixed(FORMAT_NUM_SIG_DIGITS))} + ` + `${parseFloat(val[1].toFixed(FORMAT_NUM_SIG_DIGITS))}j`;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(val)) {
        valStr = `'${val}'`;
    } else if (dtype === 'bool') {
        valStr = boolNumToString(val);
    } else {
        valStr = parseFloat(val.toFixed(FORMAT_NUM_SIG_DIGITS)).toString();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rightPad"])(valStr, pad);
}
function boolNumToString(v) {
    return v === 0 ? 'false' : 'true';
}
function subTensorToString(vals, shape, dtype, strides, padPerCol, isLast = true) {
    const storagePerElement = dtype === 'complex64' ? 2 : 1;
    const size = shape[0];
    const rank = shape.length;
    if (rank === 0) {
        if (dtype === 'complex64') {
            const complexTuple = createComplexTuples(vals);
            return [
                valToString(complexTuple[0], 0, dtype)
            ];
        }
        if (dtype === 'bool') {
            return [
                boolNumToString(vals[0])
            ];
        }
        return [
            vals[0].toString()
        ];
    }
    if (rank === 1) {
        if (size > FORMAT_LIMIT_NUM_VALS) {
            const firstValsSize = FORMAT_NUM_FIRST_LAST_VALS * storagePerElement;
            let firstVals = Array.from(vals.slice(0, firstValsSize));
            let lastVals = Array.from(vals.slice((size - FORMAT_NUM_FIRST_LAST_VALS) * storagePerElement, size * storagePerElement));
            if (dtype === 'complex64') {
                firstVals = createComplexTuples(firstVals);
                lastVals = createComplexTuples(lastVals);
            }
            return [
                '[' + firstVals.map((x, i)=>valToString(x, padPerCol[i], dtype)).join(', ') + ', ..., ' + lastVals.map((x, i)=>valToString(x, padPerCol[size - FORMAT_NUM_FIRST_LAST_VALS + i], dtype)).join(', ') + ']'
            ];
        }
        const displayVals = dtype === 'complex64' ? createComplexTuples(vals) : Array.from(vals);
        return [
            '[' + displayVals.map((x, i)=>valToString(x, padPerCol[i], dtype)).join(', ') + ']'
        ];
    }
    // The array is rank 2 or more.
    const subshape = shape.slice(1);
    const substrides = strides.slice(1);
    const stride = strides[0] * storagePerElement;
    const lines = [];
    if (size > FORMAT_LIMIT_NUM_VALS) {
        for(let i = 0; i < FORMAT_NUM_FIRST_LAST_VALS; i++){
            const start = i * stride;
            const end = start + stride;
            lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, false));
        }
        lines.push('...');
        for(let i = size - FORMAT_NUM_FIRST_LAST_VALS; i < size; i++){
            const start = i * stride;
            const end = start + stride;
            lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, i === size - 1 /* isLast */ ));
        }
    } else {
        for(let i = 0; i < size; i++){
            const start = i * stride;
            const end = start + stride;
            lines.push(...subTensorToString(vals.slice(start, end), subshape, dtype, substrides, padPerCol, i === size - 1 /* isLast */ ));
        }
    }
    const sep = rank === 2 ? ',' : '';
    lines[0] = '[' + (size > 0 ? lines[0] + sep : '');
    for(let i = 1; i < lines.length - 1; i++){
        lines[i] = ' ' + lines[i] + sep;
    }
    let newLineSep = ',\n';
    for(let i = 2; i < rank; i++){
        newLineSep += '\n';
    }
    lines[lines.length - 1] = ' ' + lines[lines.length - 1] + ']' + (isLast ? '' : newLineSep);
    return lines;
}
function createComplexTuples(vals) {
    const complexTuples = [];
    for(let i = 0; i < vals.length; i += 2){
        complexTuples.push([
            vals[i],
            vals[i + 1]
        ]);
    }
    return complexTuples;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yX2Zvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvdGVuc29yX2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFHSCxPQUFPLEVBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXpFLDhEQUE4RDtBQUM5RCxNQUFNLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztBQUNqQyx5RUFBeUU7QUFDekUsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLENBQUM7QUFDckMsd0NBQXdDO0FBQ3hDLE1BQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBRWhDLE1BQU0sVUFBVSxjQUFjLENBQzFCLElBQXlCLEVBQUUsS0FBZSxFQUFFLEtBQWUsRUFDM0QsT0FBZ0I7SUFDbEIsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sU0FBUyxHQUFHLHVCQUF1QixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDMUIsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsSUFBSSxPQUFPLEVBQUU7UUFDWCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUMsQ0FB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QUFDLENBQUM7UUFDbkIsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRSxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLElBQ1U7SUFDckMsTUFBTSxhQUFhLEdBQTRCLEVBQUUsQ0FBQztJQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBcUIsQ0FBQyxDQUFDO0tBQ2hFO0lBQ0QsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtEYXRhVHlwZSwgVHlwZWRBcnJheX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NvbXB1dGVTdHJpZGVzLCBpc1N0cmluZywgcmlnaHRQYWQsIHNpemVGcm9tU2hhcGV9IGZyb20gJy4vdXRpbCc7XG5cbi8vIE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyBiZWZvcmUgd2UgZGVjaWRlIHRvIHNob3cgZWxsaXBzaXMuXG5jb25zdCBGT1JNQVRfTElNSVRfTlVNX1ZBTFMgPSAyMDtcbi8vIE51bWJlciBvZiBmaXJzdCBhbmQgbGFzdCB2YWx1ZXMgdG8gc2hvdyB3aGVuIGRpc3BsYXlpbmcgYSwgYiwuLi4seSwgei5cbmNvbnN0IEZPUk1BVF9OVU1fRklSU1RfTEFTVF9WQUxTID0gMztcbi8vIE51bWJlciBvZiBzaWduaWZpY2FudCBkaWdpdHMgdG8gc2hvdy5cbmNvbnN0IEZPUk1BVF9OVU1fU0lHX0RJR0lUUyA9IDc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW5zb3JUb1N0cmluZyhcbiAgICB2YWxzOiBUeXBlZEFycmF5fHN0cmluZ1tdLCBzaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSxcbiAgICB2ZXJib3NlOiBib29sZWFuKSB7XG4gIGNvbnN0IHN0cmlkZXMgPSBjb21wdXRlU3RyaWRlcyhzaGFwZSk7XG4gIGNvbnN0IHBhZFBlckNvbCA9IGNvbXB1dGVNYXhTaXplUGVyQ29sdW1uKHZhbHMsIHNoYXBlLCBkdHlwZSwgc3RyaWRlcyk7XG4gIGNvbnN0IHJhbmsgPSBzaGFwZS5sZW5ndGg7XG4gIGNvbnN0IHZhbHNMaW5lcyA9IHN1YlRlbnNvclRvU3RyaW5nKHZhbHMsIHNoYXBlLCBkdHlwZSwgc3RyaWRlcywgcGFkUGVyQ29sKTtcbiAgY29uc3QgbGluZXMgPSBbJ1RlbnNvciddO1xuICBpZiAodmVyYm9zZSkge1xuICAgIGxpbmVzLnB1c2goYCAgZHR5cGU6ICR7ZHR5cGV9YCk7XG4gICAgbGluZXMucHVzaChgICByYW5rOiAke3Jhbmt9YCk7XG4gICAgbGluZXMucHVzaChgICBzaGFwZTogWyR7c2hhcGV9XWApO1xuICAgIGxpbmVzLnB1c2goYCAgdmFsdWVzOmApO1xuICB9XG4gIGxpbmVzLnB1c2godmFsc0xpbmVzLm1hcChsID0+ICcgICAgJyArIGwpLmpvaW4oJ1xcbicpKTtcbiAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlTWF4U2l6ZVBlckNvbHVtbihcbiAgICB2YWxzOiBUeXBlZEFycmF5fHN0cmluZ1tdLCBzaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSxcbiAgICBzdHJpZGVzOiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgY29uc3QgbiA9IHNpemVGcm9tU2hhcGUoc2hhcGUpO1xuICBjb25zdCBudW1Db2xzID0gc3RyaWRlc1tzdHJpZGVzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBwYWRQZXJDb2wgPSBuZXcgQXJyYXkobnVtQ29scykuZmlsbCgwKTtcbiAgY29uc3QgcmFuayA9IHNoYXBlLmxlbmd0aDtcbiAgY29uc3QgdmFsdWVzT3JUdXBsZXMgPVxuICAgICAgZHR5cGUgPT09ICdjb21wbGV4NjQnID8gY3JlYXRlQ29tcGxleFR1cGxlcyh2YWxzKSA6IHZhbHM7XG5cbiAgaWYgKHJhbmsgPiAxKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbiAvIG51bUNvbHM7IHJvdysrKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSByb3cgKiBudW1Db2xzO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1Db2xzOyBqKyspIHtcbiAgICAgICAgcGFkUGVyQ29sW2pdID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBwYWRQZXJDb2xbal0sXG4gICAgICAgICAgICB2YWxUb1N0cmluZyh2YWx1ZXNPclR1cGxlc1tvZmZzZXQgKyBqXSwgMCwgZHR5cGUpLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwYWRQZXJDb2w7XG59XG5cbmZ1bmN0aW9uIHZhbFRvU3RyaW5nKFxuICAgIHZhbDogbnVtYmVyfHN0cmluZ3xbbnVtYmVyLCBudW1iZXJdLCBwYWQ6IG51bWJlciwgZHR5cGU6IERhdGFUeXBlKSB7XG4gIGxldCB2YWxTdHI6IHN0cmluZztcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHZhbFN0ciA9IGAke3BhcnNlRmxvYXQodmFsWzBdLnRvRml4ZWQoRk9STUFUX05VTV9TSUdfRElHSVRTKSl9ICsgYCArXG4gICAgICAgIGAke3BhcnNlRmxvYXQodmFsWzFdLnRvRml4ZWQoRk9STUFUX05VTV9TSUdfRElHSVRTKSl9amA7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgIHZhbFN0ciA9IGAnJHt2YWx9J2A7XG4gIH0gZWxzZSBpZiAoZHR5cGUgPT09ICdib29sJykge1xuICAgIHZhbFN0ciA9IGJvb2xOdW1Ub1N0cmluZyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHZhbFN0ciA9IHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoRk9STUFUX05VTV9TSUdfRElHSVRTKSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiByaWdodFBhZCh2YWxTdHIsIHBhZCk7XG59XG5cbmZ1bmN0aW9uIGJvb2xOdW1Ub1N0cmluZyh2OiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdiA9PT0gMCA/ICdmYWxzZScgOiAndHJ1ZSc7XG59XG5cbmZ1bmN0aW9uIHN1YlRlbnNvclRvU3RyaW5nKFxuICAgIHZhbHM6IFR5cGVkQXJyYXl8c3RyaW5nW10sIHNoYXBlOiBudW1iZXJbXSwgZHR5cGU6IERhdGFUeXBlLFxuICAgIHN0cmlkZXM6IG51bWJlcltdLCBwYWRQZXJDb2w6IG51bWJlcltdLCBpc0xhc3QgPSB0cnVlKTogc3RyaW5nW10ge1xuICBjb25zdCBzdG9yYWdlUGVyRWxlbWVudCA9IGR0eXBlID09PSAnY29tcGxleDY0JyA/IDIgOiAxO1xuXG4gIGNvbnN0IHNpemUgPSBzaGFwZVswXTtcbiAgY29uc3QgcmFuayA9IHNoYXBlLmxlbmd0aDtcbiAgaWYgKHJhbmsgPT09IDApIHtcbiAgICBpZiAoZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgICBjb25zdCBjb21wbGV4VHVwbGUgPSBjcmVhdGVDb21wbGV4VHVwbGVzKHZhbHMpO1xuICAgICAgcmV0dXJuIFt2YWxUb1N0cmluZyhjb21wbGV4VHVwbGVbMF0sIDAsIGR0eXBlKV07XG4gICAgfVxuICAgIGlmIChkdHlwZSA9PT0gJ2Jvb2wnKSB7XG4gICAgICByZXR1cm4gW2Jvb2xOdW1Ub1N0cmluZyh2YWxzWzBdIGFzIG51bWJlcildO1xuICAgIH1cbiAgICByZXR1cm4gW3ZhbHNbMF0udG9TdHJpbmcoKV07XG4gIH1cblxuICBpZiAocmFuayA9PT0gMSkge1xuICAgIGlmIChzaXplID4gRk9STUFUX0xJTUlUX05VTV9WQUxTKSB7XG4gICAgICBjb25zdCBmaXJzdFZhbHNTaXplID0gRk9STUFUX05VTV9GSVJTVF9MQVNUX1ZBTFMgKiBzdG9yYWdlUGVyRWxlbWVudDtcblxuICAgICAgbGV0IGZpcnN0VmFscyA9IEFycmF5LmZyb208bnVtYmVyfHN0cmluZ3xbbnVtYmVyLCBudW1iZXJdPihcbiAgICAgICAgICB2YWxzLnNsaWNlKDAsIGZpcnN0VmFsc1NpemUpKTtcbiAgICAgIGxldCBsYXN0VmFscyA9IEFycmF5LmZyb208bnVtYmVyfHN0cmluZ3xbbnVtYmVyLCBudW1iZXJdPih2YWxzLnNsaWNlKFxuICAgICAgICAgIChzaXplIC0gRk9STUFUX05VTV9GSVJTVF9MQVNUX1ZBTFMpICogc3RvcmFnZVBlckVsZW1lbnQsXG4gICAgICAgICAgc2l6ZSAqIHN0b3JhZ2VQZXJFbGVtZW50KSk7XG4gICAgICBpZiAoZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgICAgIGZpcnN0VmFscyA9IGNyZWF0ZUNvbXBsZXhUdXBsZXMoZmlyc3RWYWxzKTtcbiAgICAgICAgbGFzdFZhbHMgPSBjcmVhdGVDb21wbGV4VHVwbGVzKGxhc3RWYWxzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXG4gICAgICAgICdbJyArXG4gICAgICAgIGZpcnN0VmFscy5tYXAoKHgsIGkpID0+IHZhbFRvU3RyaW5nKHgsIHBhZFBlckNvbFtpXSwgZHR5cGUpKVxuICAgICAgICAgICAgLmpvaW4oJywgJykgK1xuICAgICAgICAnLCAuLi4sICcgK1xuICAgICAgICBsYXN0VmFsc1xuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAoeCwgaSkgPT4gdmFsVG9TdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgIHgsIHBhZFBlckNvbFtzaXplIC0gRk9STUFUX05VTV9GSVJTVF9MQVNUX1ZBTFMgKyBpXSwgZHR5cGUpKVxuICAgICAgICAgICAgLmpvaW4oJywgJykgK1xuICAgICAgICAnXSdcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGRpc3BsYXlWYWxzOiBBcnJheTxudW1iZXJ8c3RyaW5nfFtudW1iZXIsIG51bWJlcl0+ID1cbiAgICAgICAgZHR5cGUgPT09ICdjb21wbGV4NjQnID8gY3JlYXRlQ29tcGxleFR1cGxlcyh2YWxzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb208bnVtYmVyfHN0cmluZz4odmFscyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgJ1snICtcbiAgICAgIGRpc3BsYXlWYWxzLm1hcCgoeCwgaSkgPT4gdmFsVG9TdHJpbmcoeCwgcGFkUGVyQ29sW2ldLCBkdHlwZSkpXG4gICAgICAgICAgLmpvaW4oJywgJykgK1xuICAgICAgJ10nXG4gICAgXTtcbiAgfVxuXG4gIC8vIFRoZSBhcnJheSBpcyByYW5rIDIgb3IgbW9yZS5cbiAgY29uc3Qgc3Vic2hhcGUgPSBzaGFwZS5zbGljZSgxKTtcbiAgY29uc3Qgc3Vic3RyaWRlcyA9IHN0cmlkZXMuc2xpY2UoMSk7XG4gIGNvbnN0IHN0cmlkZSA9IHN0cmlkZXNbMF0gKiBzdG9yYWdlUGVyRWxlbWVudDtcbiAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG4gIGlmIChzaXplID4gRk9STUFUX0xJTUlUX05VTV9WQUxTKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBGT1JNQVRfTlVNX0ZJUlNUX0xBU1RfVkFMUzsgaSsrKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGkgKiBzdHJpZGU7XG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIHN0cmlkZTtcbiAgICAgIGxpbmVzLnB1c2goLi4uc3ViVGVuc29yVG9TdHJpbmcoXG4gICAgICAgICAgdmFscy5zbGljZShzdGFydCwgZW5kKSwgc3Vic2hhcGUsIGR0eXBlLCBzdWJzdHJpZGVzLCBwYWRQZXJDb2wsXG4gICAgICAgICAgZmFsc2UgLyogaXNMYXN0ICovKSk7XG4gICAgfVxuICAgIGxpbmVzLnB1c2goJy4uLicpO1xuICAgIGZvciAobGV0IGkgPSBzaXplIC0gRk9STUFUX05VTV9GSVJTVF9MQVNUX1ZBTFM7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaSAqIHN0cmlkZTtcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgc3RyaWRlO1xuICAgICAgbGluZXMucHVzaCguLi5zdWJUZW5zb3JUb1N0cmluZyhcbiAgICAgICAgICB2YWxzLnNsaWNlKHN0YXJ0LCBlbmQpLCBzdWJzaGFwZSwgZHR5cGUsIHN1YnN0cmlkZXMsIHBhZFBlckNvbCxcbiAgICAgICAgICBpID09PSBzaXplIC0gMSAvKiBpc0xhc3QgKi8pKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaSAqIHN0cmlkZTtcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgc3RyaWRlO1xuICAgICAgbGluZXMucHVzaCguLi5zdWJUZW5zb3JUb1N0cmluZyhcbiAgICAgICAgICB2YWxzLnNsaWNlKHN0YXJ0LCBlbmQpLCBzdWJzaGFwZSwgZHR5cGUsIHN1YnN0cmlkZXMsIHBhZFBlckNvbCxcbiAgICAgICAgICBpID09PSBzaXplIC0gMSAvKiBpc0xhc3QgKi8pKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2VwID0gcmFuayA9PT0gMiA/ICcsJyA6ICcnO1xuICBsaW5lc1swXSA9ICdbJyArIChzaXplID4gMCA/IGxpbmVzWzBdICsgc2VwIDogJycpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGxpbmVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGxpbmVzW2ldID0gJyAnICsgbGluZXNbaV0gKyBzZXA7XG4gIH1cbiAgbGV0IG5ld0xpbmVTZXAgPSAnLFxcbic7XG4gIGZvciAobGV0IGkgPSAyOyBpIDwgcmFuazsgaSsrKSB7XG4gICAgbmV3TGluZVNlcCArPSAnXFxuJztcbiAgfVxuICBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSA9XG4gICAgICAnICcgKyBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSArICddJyArIChpc0xhc3QgPyAnJyA6IG5ld0xpbmVTZXApO1xuICByZXR1cm4gbGluZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBsZXhUdXBsZXModmFsczogQXJyYXk8e30+fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlZEFycmF5KTogQXJyYXk8W251bWJlciwgbnVtYmVyXT4ge1xuICBjb25zdCBjb21wbGV4VHVwbGVzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBjb21wbGV4VHVwbGVzLnB1c2goW3ZhbHNbaV0sIHZhbHNbaSArIDFdXSBhcyBbbnVtYmVyLCBudW1iZXJdKTtcbiAgfVxuICByZXR1cm4gY29tcGxleFR1cGxlcztcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ // Workaround for: https://github.com/bazelbuild/rules_nodejs/issues/1265
/// <reference types="@webgpu/types/dist" />
__turbopack_context__.s([
    "Tensor",
    ()=>Tensor,
    "TensorBuffer",
    ()=>TensorBuffer,
    "Variable",
    ()=>Variable,
    "getGlobalTensorClass",
    ()=>getGlobalTensorClass,
    "setDeprecationWarningFn",
    ()=>setDeprecationWarningFn,
    "setOpHandler",
    ()=>setOpHandler,
    "setTensorTracker",
    ()=>setTensorTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$global_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/global_util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
class TensorBuffer {
    constructor(shape, dtype, values){
        this.dtype = dtype;
        this.shape = shape.slice();
        this.size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeFromShape"](shape);
        if (values != null) {
            const n = values.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](n === this.size, ()=>`Length of values '${n}' does not match the size ` + `inferred by the shape '${this.size}'.`);
        }
        if (dtype === 'complex64') {
            throw new Error(`complex64 dtype TensorBuffers are not supported. Please create ` + `a TensorBuffer for the real and imaginary parts separately and ` + `call tf.complex(real, imag).`);
        }
        this.values = values || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayFromDType"](dtype, this.size);
        this.strides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeStrides"])(shape);
    }
    /**
     * Sets a value in the buffer at a given location.
     *
     * @param value The value to set.
     * @param locs  The location indices.
     *
     * @doc {heading: 'Tensors', subheading: 'Creation'}
     */ set(value, ...locs) {
        if (locs.length === 0) {
            locs = [
                0
            ];
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](locs.length === this.rank, ()=>`The number of provided coordinates (${locs.length}) must ` + `match the rank (${this.rank})`);
        const index = this.locToIndex(locs);
        this.values[index] = value;
    }
    /**
     * Returns the value in the buffer at the provided location.
     *
     * @param locs The location indices.
     *
     * @doc {heading: 'Tensors', subheading: 'Creation'}
     */ get(...locs) {
        if (locs.length === 0) {
            locs = [
                0
            ];
        }
        let i = 0;
        for (const loc of locs){
            if (loc < 0 || loc >= this.shape[i]) {
                const msg = `Requested out of range element at ${locs}. ` + `  Buffer shape=${this.shape}`;
                throw new Error(msg);
            }
            i++;
        }
        let index = locs[locs.length - 1];
        for(let i = 0; i < locs.length - 1; ++i){
            index += this.strides[i] * locs[i];
        }
        return this.values[index];
    }
    locToIndex(locs) {
        if (this.rank === 0) {
            return 0;
        } else if (this.rank === 1) {
            return locs[0];
        }
        let index = locs[locs.length - 1];
        for(let i = 0; i < locs.length - 1; ++i){
            index += this.strides[i] * locs[i];
        }
        return index;
    }
    indexToLoc(index) {
        if (this.rank === 0) {
            return [];
        } else if (this.rank === 1) {
            return [
                index
            ];
        }
        const locs = new Array(this.shape.length);
        for(let i = 0; i < locs.length - 1; ++i){
            locs[i] = Math.floor(index / this.strides[i]);
            index -= locs[i] * this.strides[i];
        }
        locs[locs.length - 1] = index;
        return locs;
    }
    get rank() {
        return this.shape.length;
    }
    /**
     * Creates an immutable `tf.Tensor` object from the buffer.
     *
     * @doc {heading: 'Tensors', subheading: 'Creation'}
     */ toTensor() {
        return trackerFn().makeTensor(this.values, this.shape, this.dtype);
    }
}
// For tracking tensor creation and disposal.
let trackerFn = null;
// Used by chaining methods to call into ops.
let opHandler = null;
// Used to warn about deprecated methods.
let deprecationWarningFn = null;
// This here so that we can use this method on dev branches and keep the
// functionality at master.
// tslint:disable-next-line:no-unused-expression
[
    deprecationWarningFn
];
function setTensorTracker(fn) {
    trackerFn = fn;
}
function setOpHandler(handler) {
    opHandler = handler;
}
function setDeprecationWarningFn(fn) {
    deprecationWarningFn = fn;
}
class Tensor {
    constructor(shape, dtype, dataId, id){
        /** Whether this tensor has been globally kept. */ this.kept = false;
        this.isDisposedInternal = false;
        this.shape = shape.slice();
        this.dtype = dtype || 'float32';
        this.size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeFromShape"](shape);
        this.strides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeStrides"])(shape);
        this.dataId = dataId;
        this.id = id;
        this.rankType = this.rank < 5 ? this.rank.toString() : 'higher';
    }
    get rank() {
        return this.shape.length;
    }
    /**
     * Returns a promise of `tf.TensorBuffer` that holds the underlying data.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ async buffer() {
        const vals = await this.data();
        return opHandler.buffer(this.shape, this.dtype, vals);
    }
    /**
     * Returns a `tf.TensorBuffer` that holds the underlying data.
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ bufferSync() {
        return opHandler.buffer(this.shape, this.dtype, this.dataSync());
    }
    /**
     * Returns the tensor data as a nested array. The transfer of data is done
     * asynchronously.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ async array() {
        const vals = await this.data();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNestedArray"])(this.shape, vals, this.dtype === 'complex64');
    }
    /**
     * Returns the tensor data as a nested array. The transfer of data is done
     * synchronously.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ arraySync() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNestedArray"])(this.shape, this.dataSync(), this.dtype === 'complex64');
    }
    /**
     * Asynchronously downloads the values from the `tf.Tensor`. Returns a
     * promise of `TypedArray` that resolves when the computation has finished.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ async data() {
        this.throwIfDisposed();
        const data = trackerFn().read(this.dataId);
        if (this.dtype === 'string') {
            const bytes = await data;
            try {
                return bytes.map((b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeString"](b));
            } catch (_a) {
                throw new Error('Failed to decode the string bytes into utf-8. ' + 'To get the original bytes, call tensor.bytes().');
            }
        }
        return data;
    }
    /**
     * Copy the tensor's data to a new GPU resource. Comparing to the `dataSync()`
     * and `data()`, this method prevents data from being downloaded to CPU.
     *
     * For WebGL backend, the data will be stored on a densely packed texture.
     * This means that the texture will use the RGBA channels to store value.
     *
     * For WebGPU backend, the data will be stored on a buffer. There is no
     * parameter, so can not use a user-defined size to create the buffer.
     *
     * @param options:
     *     For WebGL,
     *         - customTexShape: Optional. If set, will use the user defined
     *     texture shape to create the texture.
     *
     * @returns For WebGL backend, a GPUData contains the new texture and
     *     its information.
     *     {
     *        tensorRef: The tensor that is associated with this texture,
     *        texture: WebGLTexture,
     *        texShape: [number, number] // [height, width]
     *     }
     *
     *     For WebGPU backend, a GPUData contains the new buffer.
     *     {
     *        tensorRef: The tensor that is associated with this buffer,
     *        buffer: GPUBuffer,
     *     }
     *
     *     Remember to dispose the GPUData after it is used by
     *     `res.tensorRef.dispose()`.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ dataToGPU(options) {
        this.throwIfDisposed();
        return trackerFn().readToGPU(this.dataId, options);
    }
    /**
     * Synchronously downloads the values from the `tf.Tensor`. This blocks the
     * UI thread until the values are ready, which can cause performance issues.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ dataSync() {
        this.throwIfDisposed();
        const data = trackerFn().readSync(this.dataId);
        if (this.dtype === 'string') {
            try {
                return data.map((b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeString"](b));
            } catch (_a) {
                throw new Error('Failed to decode the string bytes into utf-8. ' + 'To get the original bytes, call tensor.bytes().');
            }
        }
        return data;
    }
    /** Returns the underlying bytes of the tensor's data. */ async bytes() {
        this.throwIfDisposed();
        const data = await trackerFn().read(this.dataId);
        if (this.dtype === 'string') {
            return data;
        } else {
            return new Uint8Array(data.buffer);
        }
    }
    /**
     * Disposes `tf.Tensor` from memory.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ dispose() {
        if (this.isDisposed) {
            return;
        }
        if (this.kerasMask) {
            this.kerasMask.dispose();
        }
        trackerFn().disposeTensor(this);
        this.isDisposedInternal = true;
    }
    get isDisposed() {
        return this.isDisposedInternal;
    }
    throwIfDisposed() {
        if (this.isDisposed) {
            throw new Error(`Tensor is disposed.`);
        }
    }
    /**
     * Prints the `tf.Tensor`. See `tf.print` for details.
     *
     * @param verbose Whether to print verbose information about the tensor,
     *    including dtype and size.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ print(verbose = false) {
        return opHandler.print(this, verbose);
    }
    /**
     * Returns a copy of the tensor. See `tf.clone` for details.
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ clone() {
        this.throwIfDisposed();
        return opHandler.clone(this);
    }
    /**
     * Returns a human-readable description of the tensor. Useful for logging.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ toString(verbose = false) {
        const vals = this.dataSync();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tensorToString"])(vals, this.shape, this.dtype, verbose);
    }
    cast(dtype) {
        this.throwIfDisposed();
        return opHandler.cast(this, dtype);
    }
    variable(trainable = true, name, dtype) {
        this.throwIfDisposed();
        return trackerFn().makeVariable(this, trainable, name, dtype);
    }
}
Object.defineProperty(Tensor, Symbol.hasInstance, {
    value: (instance)=>{
        // Implementation note: we should use properties of the object that will be
        // defined before the constructor body has finished executing (methods).
        // This is because when this code is transpiled by babel, babel will call
        // classCallCheck before the constructor body is run.
        // See https://github.com/tensorflow/tfjs/issues/3384 for backstory.
        return !!instance && instance.data != null && instance.dataSync != null && instance.throwIfDisposed != null;
    }
});
function getGlobalTensorClass() {
    // Use getGlobal so that we can augment the Tensor class across package
    // boundaries because the node resolution alg may result in different modules
    // being returned for this file depending on the path they are loaded from.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$global_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobal"])('Tensor', ()=>{
        return Tensor;
    });
}
// Global side effect. Cache global reference to Tensor class
getGlobalTensorClass();
class Variable extends Tensor {
    constructor(initialValue, trainable, name, tensorId){
        super(initialValue.shape, initialValue.dtype, initialValue.dataId, tensorId);
        this.trainable = trainable;
        this.name = name;
    }
    /**
     * Assign a new `tf.Tensor` to this variable. The new `tf.Tensor` must have
     * the same shape and dtype as the old `tf.Tensor`.
     *
     * @param newValue New tensor to be assigned to this variable.
     *
     * @doc {heading: 'Tensors', subheading: 'Classes'}
     */ assign(newValue) {
        if (newValue.dtype !== this.dtype) {
            throw new Error(`dtype of the new value (${newValue.dtype}) and ` + `previous value (${this.dtype}) must match`);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arraysEqual"](newValue.shape, this.shape)) {
            throw new Error(`shape of the new value (${newValue.shape}) and ` + `previous value (${this.shape}) must match`);
        }
        trackerFn().disposeTensor(this);
        this.dataId = newValue.dataId;
        trackerFn().incRef(this, null);
    }
    dispose() {
        trackerFn().disposeVariable(this);
        this.isDisposedInternal = true;
    }
}
Object.defineProperty(Variable, Symbol.hasInstance, {
    value: (instance)=>{
        return instance instanceof Tensor && instance.assign != null && instance.assign instanceof Function;
    }
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy90ZW5zb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgseUVBQXlFO0FBQ3pFLDRDQUE0QztBQUU1QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEtBQUssSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUMsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQVdyRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxPQUFPLFlBQVk7SUFNdkIsWUFBWSxLQUFrQixFQUFTLEtBQVEsRUFBRSxNQUF1QjtRQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUFHO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBaUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FDUCxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksRUFDZixHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyw0QkFBNEI7Z0JBQ3BELDBCQUEwQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUNYLGlFQUFpRTtnQkFDakUsaUVBQWlFO2dCQUNqRSw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FB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TyxRQUFRLFlBQVksTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSTtZQUN4RCxRQUFRLENBQUMsTUFBTSxZQUFZLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2JhemVsYnVpbGQvcnVsZXNfbm9kZWpzL2lzc3Vlcy8xMjY1XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIkB3ZWJncHUvdHlwZXMvZGlzdFwiIC8+XG5cbmltcG9ydCB7Z2V0R2xvYmFsfSBmcm9tICcuL2dsb2JhbF91dGlsJztcbmltcG9ydCB7dGVuc29yVG9TdHJpbmd9IGZyb20gJy4vdGVuc29yX2Zvcm1hdCc7XG5pbXBvcnQge0RhdGFJZCwgVGVuc29ySW5mb30gZnJvbSAnLi90ZW5zb3JfaW5mbyc7XG5pbXBvcnQge0FycmF5TWFwLCBCYWNrZW5kVmFsdWVzLCBEYXRhVHlwZSwgRGF0YVR5cGVNYXAsIERhdGFWYWx1ZXMsIE51bWVyaWNEYXRhVHlwZSwgUmFuaywgU2hhcGVNYXAsIFNpbmdsZVZhbHVlTWFwLCBUeXBlZEFycmF5fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCB7Y29tcHV0ZVN0cmlkZXMsIHRvTmVzdGVkQXJyYXl9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVuc29yRGF0YTxEIGV4dGVuZHMgRGF0YVR5cGU+IHtcbiAgZGF0YUlkPzogRGF0YUlkO1xuICB2YWx1ZXM/OiBEYXRhVHlwZU1hcFtEXTtcbn1cblxuLy8gVGhpcyBpbnRlcmZhY2UgbWltaWNzIEtlcm5lbEJhY2tlbmQgKGluIGJhY2tlbmQudHMpLCB3aGljaCB3b3VsZCBjcmVhdGUgYVxuLy8gY2lyY3VsYXIgZGVwZW5kZW5jeSBpZiBpbXBvcnRlZC5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2VuZCB7fVxuXG4vKipcbiAqIEEgbXV0YWJsZSBvYmplY3QsIHNpbWlsYXIgdG8gYHRmLlRlbnNvcmAsIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHNldCB2YWx1ZXNcbiAqIGF0IGxvY2F0aW9ucyBiZWZvcmUgY29udmVydGluZyB0byBhbiBpbW11dGFibGUgYHRmLlRlbnNvcmAuXG4gKlxuICogU2VlIGB0Zi5idWZmZXJgIGZvciBjcmVhdGluZyBhIHRlbnNvciBidWZmZXIuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gKi9cbmV4cG9ydCBjbGFzcyBUZW5zb3JCdWZmZXI8UiBleHRlbmRzIFJhbmssIEQgZXh0ZW5kcyBEYXRhVHlwZSA9ICdmbG9hdDMyJz4ge1xuICBzaXplOiBudW1iZXI7XG4gIHNoYXBlOiBTaGFwZU1hcFtSXTtcbiAgc3RyaWRlczogbnVtYmVyW107XG4gIHZhbHVlczogRGF0YVR5cGVNYXBbRF07XG5cbiAgY29uc3RydWN0b3Ioc2hhcGU6IFNoYXBlTWFwW1JdLCBwdWJsaWMgZHR5cGU6IEQsIHZhbHVlcz86IERhdGFUeXBlTWFwW0RdKSB7XG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlLnNsaWNlKCkgYXMgU2hhcGVNYXBbUl07XG4gICAgdGhpcy5zaXplID0gdXRpbC5zaXplRnJvbVNoYXBlKHNoYXBlKTtcblxuICAgIGlmICh2YWx1ZXMgIT0gbnVsbCkge1xuICAgICAgY29uc3QgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICBuID09PSB0aGlzLnNpemUsXG4gICAgICAgICAgKCkgPT4gYExlbmd0aCBvZiB2YWx1ZXMgJyR7bn0nIGRvZXMgbm90IG1hdGNoIHRoZSBzaXplIGAgK1xuICAgICAgICAgICAgICBgaW5mZXJyZWQgYnkgdGhlIHNoYXBlICcke3RoaXMuc2l6ZX0nLmApO1xuICAgIH1cbiAgICBpZiAoZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYGNvbXBsZXg2NCBkdHlwZSBUZW5zb3JCdWZmZXJzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY3JlYXRlIGAgK1xuICAgICAgICAgIGBhIFRlbnNvckJ1ZmZlciBmb3IgdGhlIHJlYWwgYW5kIGltYWdpbmFyeSBwYXJ0cyBzZXBhcmF0ZWx5IGFuZCBgICtcbiAgICAgICAgICBgY2FsbCB0Zi5jb21wbGV4KHJlYWwsIGltYWcpLmApO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcyB8fCB1dGlsLmdldEFycmF5RnJvbURUeXBlKGR0eXBlLCB0aGlzLnNpemUpO1xuICAgIHRoaXMuc3RyaWRlcyA9IGNvbXB1dGVTdHJpZGVzKHNoYXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWUgaW4gdGhlIGJ1ZmZlciBhdCBhIGdpdmVuIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICogQHBhcmFtIGxvY3MgIFRoZSBsb2NhdGlvbiBpbmRpY2VzLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnVGVuc29ycycsIHN1YmhlYWRpbmc6ICdDcmVhdGlvbid9XG4gICAqL1xuICBzZXQodmFsdWU6IFNpbmdsZVZhbHVlTWFwW0RdLCAuLi5sb2NzOiBudW1iZXJbXSk6IHZvaWQge1xuICAgIGlmIChsb2NzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbG9jcyA9IFswXTtcbiAgICB9XG4gICAgdXRpbC5hc3NlcnQoXG4gICAgICAgIGxvY3MubGVuZ3RoID09PSB0aGlzLnJhbmssXG4gICAgICAgICgpID0+IGBUaGUgbnVtYmVyIG9mIHByb3ZpZGVkIGNvb3JkaW5hdGVzICgke2xvY3MubGVuZ3RofSkgbXVzdCBgICtcbiAgICAgICAgICAgIGBtYXRjaCB0aGUgcmFuayAoJHt0aGlzLnJhbmt9KWApO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxvY1RvSW5kZXgobG9jcyk7XG4gICAgdGhpcy52YWx1ZXNbaW5kZXhdID0gdmFsdWUgYXMgbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIGluIHRoZSBidWZmZXIgYXQgdGhlIHByb3ZpZGVkIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gbG9jcyBUaGUgbG9jYXRpb24gaW5kaWNlcy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ3JlYXRpb24nfVxuICAgKi9cbiAgZ2V0KC4uLmxvY3M6IG51bWJlcltdKTogU2luZ2xlVmFsdWVNYXBbRF0ge1xuICAgIGlmIChsb2NzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbG9jcyA9IFswXTtcbiAgICB9XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgbG9jIG9mIGxvY3MpIHtcbiAgICAgIGlmIChsb2MgPCAwIHx8IGxvYyA+PSB0aGlzLnNoYXBlW2ldKSB7XG4gICAgICAgIGNvbnN0IG1zZyA9IGBSZXF1ZXN0ZWQgb3V0IG9mIHJhbmdlIGVsZW1lbnQgYXQgJHtsb2NzfS4gYCArXG4gICAgICAgICAgICBgICBCdWZmZXIgc2hhcGU9JHt0aGlzLnNoYXBlfWA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSBsb2NzW2xvY3MubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgaW5kZXggKz0gdGhpcy5zdHJpZGVzW2ldICogbG9jc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XSBhcyBTaW5nbGVWYWx1ZU1hcFtEXTtcbiAgfVxuXG4gIGxvY1RvSW5kZXgobG9jczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnJhbmsgPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yYW5rID09PSAxKSB7XG4gICAgICByZXR1cm4gbG9jc1swXTtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gbG9jc1tsb2NzLmxlbmd0aCAtIDFdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgIGluZGV4ICs9IHRoaXMuc3RyaWRlc1tpXSAqIGxvY3NbaV07XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGluZGV4VG9Mb2MoaW5kZXg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBpZiAodGhpcy5yYW5rID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSBlbHNlIGlmICh0aGlzLnJhbmsgPT09IDEpIHtcbiAgICAgIHJldHVybiBbaW5kZXhdO1xuICAgIH1cbiAgICBjb25zdCBsb2NzOiBudW1iZXJbXSA9IG5ldyBBcnJheSh0aGlzLnNoYXBlLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NzLmxlbmd0aCAtIDE7ICsraSkge1xuICAgICAgbG9jc1tpXSA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnN0cmlkZXNbaV0pO1xuICAgICAgaW5kZXggLT0gbG9jc1tpXSAqIHRoaXMuc3RyaWRlc1tpXTtcbiAgICB9XG4gICAgbG9jc1tsb2NzLmxlbmd0aCAtIDFdID0gaW5kZXg7XG4gICAgcmV0dXJuIGxvY3M7XG4gIH1cblxuICBnZXQgcmFuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbW11dGFibGUgYHRmLlRlbnNvcmAgb2JqZWN0IGZyb20gdGhlIGJ1ZmZlci5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ3JlYXRpb24nfVxuICAgKi9cbiAgdG9UZW5zb3IoKTogVGVuc29yPFI+IHtcbiAgICByZXR1cm4gdHJhY2tlckZuKCkubWFrZVRlbnNvcih0aGlzLnZhbHVlcywgdGhpcy5zaGFwZSwgdGhpcy5kdHlwZSkgYXNcbiAgICAgICAgVGVuc29yPFI+O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRvR1BVV2ViR0xPcHRpb24ge1xuICBjdXN0b21UZXhTaGFwZT86IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCB0eXBlIERhdGFUb0dQVU9wdGlvbnMgPSBEYXRhVG9HUFVXZWJHTE9wdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBHUFVEYXRhIHtcbiAgdGVuc29yUmVmOiBUZW5zb3I7XG4gIHRleHR1cmU/OiBXZWJHTFRleHR1cmU7XG4gIGJ1ZmZlcj86IEdQVUJ1ZmZlcjtcbiAgdGV4U2hhcGU/OiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbnNvclRyYWNrZXIge1xuICBtYWtlVGVuc29yKFxuICAgICAgdmFsdWVzOiBEYXRhVmFsdWVzLCBzaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSxcbiAgICAgIGJhY2tlbmQ/OiBCYWNrZW5kKTogVGVuc29yO1xuICBtYWtlVmFyaWFibGUoXG4gICAgICBpbml0aWFsVmFsdWU6IFRlbnNvciwgdHJhaW5hYmxlPzogYm9vbGVhbiwgbmFtZT86IHN0cmluZyxcbiAgICAgIGR0eXBlPzogRGF0YVR5cGUpOiBWYXJpYWJsZTtcbiAgaW5jUmVmKGE6IFRlbnNvciwgYmFja2VuZDogQmFja2VuZCk6IHZvaWQ7XG4gIGRpc3Bvc2VUZW5zb3IodDogVGVuc29yKTogdm9pZDtcbiAgZGlzcG9zZVZhcmlhYmxlKHY6IFZhcmlhYmxlKTogdm9pZDtcbiAgcmVhZChkYXRhSWQ6IERhdGFJZCk6IFByb21pc2U8QmFja2VuZFZhbHVlcz47XG4gIHJlYWRTeW5jKGRhdGFJZDogRGF0YUlkKTogQmFja2VuZFZhbHVlcztcbiAgcmVhZFRvR1BVKGRhdGFJZDogRGF0YUlkLCBvcHRpb25zPzogRGF0YVRvR1BVT3B0aW9ucyk6IEdQVURhdGE7XG59XG5cbi8qKlxuICogVGhlIFRlbnNvciBjbGFzcyBjYWxscyBpbnRvIHRoaXMgaGFuZGxlciB0byBkZWxlZ2F0ZSBjaGFpbmluZyBvcGVyYXRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9wSGFuZGxlciB7XG4gIGNhc3Q8VCBleHRlbmRzIFRlbnNvcj4oeDogVCwgZHR5cGU6IERhdGFUeXBlKTogVDtcbiAgYnVmZmVyPFIgZXh0ZW5kcyBSYW5rLCBEIGV4dGVuZHMgRGF0YVR5cGU+KFxuICAgICAgc2hhcGU6IFNoYXBlTWFwW1JdLCBkdHlwZTogRCxcbiAgICAgIHZhbHVlcz86IERhdGFUeXBlTWFwW0RdKTogVGVuc29yQnVmZmVyPFIsIEQ+O1xuICBwcmludDxUIGV4dGVuZHMgVGVuc29yPih4OiBULCB2ZXJib3NlOiBib29sZWFuKTogdm9pZDtcbiAgY2xvbmU8VCBleHRlbmRzIFRlbnNvcj4oeDogVCk6IFQ7XG4gIC8vIFRPRE8oeWFzc29nYmEpIGJyaW5nIHJlc2hhcGUgYmFjaz9cbn1cblxuLy8gRm9yIHRyYWNraW5nIHRlbnNvciBjcmVhdGlvbiBhbmQgZGlzcG9zYWwuXG5sZXQgdHJhY2tlckZuOiAoKSA9PiBUZW5zb3JUcmFja2VyID0gbnVsbDtcbi8vIFVzZWQgYnkgY2hhaW5pbmcgbWV0aG9kcyB0byBjYWxsIGludG8gb3BzLlxubGV0IG9wSGFuZGxlcjogT3BIYW5kbGVyID0gbnVsbDtcbi8vIFVzZWQgdG8gd2FybiBhYm91dCBkZXByZWNhdGVkIG1ldGhvZHMuXG5sZXQgZGVwcmVjYXRpb25XYXJuaW5nRm46IChtc2c6IHN0cmluZykgPT4gdm9pZCA9IG51bGw7XG4vLyBUaGlzIGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoaXMgbWV0aG9kIG9uIGRldiBicmFuY2hlcyBhbmQga2VlcCB0aGVcbi8vIGZ1bmN0aW9uYWxpdHkgYXQgbWFzdGVyLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG5bZGVwcmVjYXRpb25XYXJuaW5nRm5dO1xuXG4vKipcbiAqIEFuIGV4dGVybmFsIGNvbnN1bWVyIGNhbiByZWdpc3RlciBpdHNlbGYgYXMgdGhlIHRlbnNvciB0cmFja2VyLiBUaGlzIHdheVxuICogdGhlIFRlbnNvciBjbGFzcyBjYW4gbm90aWZ5IHRoZSB0cmFja2VyIGZvciBldmVyeSB0ZW5zb3IgY3JlYXRlZCBhbmRcbiAqIGRpc3Bvc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VGVuc29yVHJhY2tlcihmbjogKCkgPT4gVGVuc29yVHJhY2tlcikge1xuICB0cmFja2VyRm4gPSBmbjtcbn1cblxuLyoqXG4gKiBBbiBleHRlcm5hbCBjb25zdW1lciBjYW4gcmVnaXN0ZXIgaXRzZWxmIGFzIHRoZSBvcCBoYW5kbGVyLiBUaGlzIHdheSB0aGVcbiAqIFRlbnNvciBjbGFzcyBjYW4gaGF2ZSBjaGFpbmluZyBtZXRob2RzIHRoYXQgY2FsbCBpbnRvIG9wcyB2aWEgdGhlIG9wXG4gKiBoYW5kbGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0T3BIYW5kbGVyKGhhbmRsZXI6IE9wSGFuZGxlcikge1xuICBvcEhhbmRsZXIgPSBoYW5kbGVyO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGRlcHJlY2F0aW9uIHdhcm5pbmcgZnVuY3Rpb24gdG8gYmUgdXNlZCBieSB0aGlzIGZpbGUuIFRoaXMgd2F5IHRoZVxuICogVGVuc29yIGNsYXNzIGNhbiBiZSBhIGxlYWYgYnV0IHN0aWxsIHVzZSB0aGUgZW52aXJvbm1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREZXByZWNhdGlvbldhcm5pbmdGbihmbjogKG1zZzogc3RyaW5nKSA9PiB2b2lkKSB7XG4gIGRlcHJlY2F0aW9uV2FybmluZ0ZuID0gZm47XG59XG5cbi8vIERlY2xhcmUgdGhpcyBuYW1lc3BhY2UgdG8gbWFrZSBUZW5zb3IgY2xhc3MgYXVnbWVudGF0aW9uIHdvcmsgaW4gZ29vZ2xlMy5cbmV4cG9ydCBkZWNsYXJlIG5hbWVzcGFjZSBUZW5zb3Ige31cbi8qKlxuICogQSBgdGYuVGVuc29yYCBvYmplY3QgcmVwcmVzZW50cyBhbiBpbW11dGFibGUsIG11bHRpZGltZW5zaW9uYWwgYXJyYXkgb2ZcbiAqIG51bWJlcnMgdGhhdCBoYXMgYSBzaGFwZSBhbmQgYSBkYXRhIHR5cGUuXG4gKlxuICogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGZ1bmN0aW9ucyB0aGF0IGNyZWF0ZSB0ZW5zb3JzIGRvIG5vdCBuZWNlc3NhcmlseVxuICogcGVyZm9ybSBhIGNvcHkgb2YgdGhlIGRhdGEgcGFzc2VkIHRvIHRoZW0gKGUuZy4gaWYgdGhlIGRhdGEgaXMgcGFzc2VkIGFzIGFcbiAqIGBGbG9hdDMyQXJyYXlgKSwgYW5kIGNoYW5nZXMgdG8gdGhlIGRhdGEgd2lsbCBjaGFuZ2UgdGhlIHRlbnNvci4gVGhpcyBpcyBub3RcbiAqIGEgZmVhdHVyZSBhbmQgaXMgbm90IHN1cHBvcnRlZC4gVG8gYXZvaWQgdGhpcyBiZWhhdmlvciwgdXNlIHRoZSB0ZW5zb3IgYmVmb3JlXG4gKiBjaGFuZ2luZyB0aGUgaW5wdXQgZGF0YSBvciBjcmVhdGUgYSBjb3B5IHdpdGggYGNvcHkgPSB0Zi5hZGQoeW91clRlbnNvciwgMClgLlxuICpcbiAqIFNlZSBgdGYudGVuc29yYCBmb3IgZGV0YWlscyBvbiBob3cgdG8gY3JlYXRlIGEgYHRmLlRlbnNvcmAuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gKi9cbmV4cG9ydCBjbGFzcyBUZW5zb3I8UiBleHRlbmRzIFJhbmsgPSBSYW5rPiBpbXBsZW1lbnRzIFRlbnNvckluZm8ge1xuICAvKiogVW5pcXVlIGlkIG9mIHRoaXMgdGVuc29yLiAqL1xuICByZWFkb25seSBpZDogbnVtYmVyO1xuICAvKipcbiAgICogSWQgb2YgdGhlIGJ1Y2tldCBob2xkaW5nIHRoZSBkYXRhIGZvciB0aGlzIHRlbnNvci4gTXVsdGlwbGUgYXJyYXlzIGNhblxuICAgKiBwb2ludCB0byB0aGUgc2FtZSBidWNrZXQgKGUuZy4gd2hlbiBjYWxsaW5nIGFycmF5LnJlc2hhcGUoKSkuXG4gICAqL1xuICBkYXRhSWQ6IERhdGFJZDtcbiAgLyoqIFRoZSBzaGFwZSBvZiB0aGUgdGVuc29yLiAqL1xuICByZWFkb25seSBzaGFwZTogU2hhcGVNYXBbUl07XG4gIC8qKiBOdW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHRlbnNvci4gKi9cbiAgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAvKiogVGhlIGRhdGEgdHlwZSBmb3IgdGhlIGFycmF5LiAqL1xuICByZWFkb25seSBkdHlwZTogRGF0YVR5cGU7XG4gIC8qKiBUaGUgcmFuayB0eXBlIGZvciB0aGUgYXJyYXkgKHNlZSBgUmFua2AgZW51bSkuICovXG4gIHJlYWRvbmx5IHJhbmtUeXBlOiBSO1xuXG4gIC8qKiBXaGV0aGVyIHRoaXMgdGVuc29yIGhhcyBiZWVuIGdsb2JhbGx5IGtlcHQuICovXG4gIGtlcHQgPSBmYWxzZTtcbiAgLyoqIFRoZSBpZCBvZiB0aGUgc2NvcGUgdGhpcyB0ZW5zb3IgaXMgYmVpbmcgdHJhY2tlZCBpbi4gKi9cbiAgc2NvcGVJZDogbnVtYmVyO1xuICAvKiogVGhlIGtlcmFzIG1hc2sgdGhhdCBzb21lIGtlcmFzIGxheWVycyBhdHRhY2ggdG8gdGhlIHRlbnNvciAqL1xuICBrZXJhc01hc2s/OiBUZW5zb3I7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGluIGVhY2ggZGltZW5zaW9uIHdoZW4gaW5kZXhpbmcuIFNlZVxuICAgKiBodHRwczovL2RvY3Muc2NpcHkub3JnL2RvYy9udW1weS9yZWZlcmVuY2UvZ2VuZXJhdGVkL1xcXG4gICAqIG51bXB5Lm5kYXJyYXkuc3RyaWRlcy5odG1sXG4gICAqL1xuICByZWFkb25seSBzdHJpZGVzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihzaGFwZTogU2hhcGVNYXBbUl0sIGR0eXBlOiBEYXRhVHlwZSwgZGF0YUlkOiBEYXRhSWQsIGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnNoYXBlID0gc2hhcGUuc2xpY2UoKSBhcyBTaGFwZU1hcFtSXTtcbiAgICB0aGlzLmR0eXBlID0gZHR5cGUgfHwgJ2Zsb2F0MzInO1xuICAgIHRoaXMuc2l6ZSA9IHV0aWwuc2l6ZUZyb21TaGFwZShzaGFwZSk7XG4gICAgdGhpcy5zdHJpZGVzID0gY29tcHV0ZVN0cmlkZXMoc2hhcGUpO1xuICAgIHRoaXMuZGF0YUlkID0gZGF0YUlkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnJhbmtUeXBlID0gKHRoaXMucmFuayA8IDUgPyB0aGlzLnJhbmsudG9TdHJpbmcoKSA6ICdoaWdoZXInKSBhcyBSO1xuICB9XG5cbiAgZ2V0IHJhbmsoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zaGFwZS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugb2YgYHRmLlRlbnNvckJ1ZmZlcmAgdGhhdCBob2xkcyB0aGUgdW5kZXJseWluZyBkYXRhLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnVGVuc29ycycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGFzeW5jIGJ1ZmZlcjxEIGV4dGVuZHMgRGF0YVR5cGUgPSAnZmxvYXQzMic+KCk6IFByb21pc2U8VGVuc29yQnVmZmVyPFIsIEQ+PiB7XG4gICAgY29uc3QgdmFscyA9IGF3YWl0IHRoaXMuZGF0YTxEPigpO1xuICAgIHJldHVybiBvcEhhbmRsZXIuYnVmZmVyKHRoaXMuc2hhcGUsIHRoaXMuZHR5cGUgYXMgRCwgdmFscyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGB0Zi5UZW5zb3JCdWZmZXJgIHRoYXQgaG9sZHMgdGhlIHVuZGVybHlpbmcgZGF0YS5cbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBidWZmZXJTeW5jPEQgZXh0ZW5kcyBEYXRhVHlwZSA9ICdmbG9hdDMyJz4oKTogVGVuc29yQnVmZmVyPFIsIEQ+IHtcbiAgICByZXR1cm4gb3BIYW5kbGVyLmJ1ZmZlcih0aGlzLnNoYXBlLCB0aGlzLmR0eXBlIGFzIEQsIHRoaXMuZGF0YVN5bmMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGVuc29yIGRhdGEgYXMgYSBuZXN0ZWQgYXJyYXkuIFRoZSB0cmFuc2ZlciBvZiBkYXRhIGlzIGRvbmVcbiAgICogYXN5bmNocm9ub3VzbHkuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdUZW5zb3JzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgYXN5bmMgYXJyYXkoKTogUHJvbWlzZTxBcnJheU1hcFtSXT4ge1xuICAgIGNvbnN0IHZhbHMgPSBhd2FpdCB0aGlzLmRhdGEoKTtcbiAgICByZXR1cm4gdG9OZXN0ZWRBcnJheSh0aGlzLnNoYXBlLCB2YWxzLCB0aGlzLmR0eXBlID09PSAnY29tcGxleDY0JykgYXNcbiAgICAgICAgQXJyYXlNYXBbUl07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGVuc29yIGRhdGEgYXMgYSBuZXN0ZWQgYXJyYXkuIFRoZSB0cmFuc2ZlciBvZiBkYXRhIGlzIGRvbmVcbiAgICogc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhcnJheVN5bmMoKTogQXJyYXlNYXBbUl0ge1xuICAgIHJldHVybiB0b05lc3RlZEFycmF5KFxuICAgICAgICAgICAgICAgdGhpcy5zaGFwZSwgdGhpcy5kYXRhU3luYygpLCB0aGlzLmR0eXBlID09PSAnY29tcGxleDY0JykgYXNcbiAgICAgICAgQXJyYXlNYXBbUl07XG4gIH1cblxuICAvKipcbiAgICogQXN5bmNocm9ub3VzbHkgZG93bmxvYWRzIHRoZSB2YWx1ZXMgZnJvbSB0aGUgYHRmLlRlbnNvcmAuIFJldHVybnMgYVxuICAgKiBwcm9taXNlIG9mIGBUeXBlZEFycmF5YCB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGNvbXB1dGF0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhc3luYyBkYXRhPEQgZXh0ZW5kcyBEYXRhVHlwZSA9IE51bWVyaWNEYXRhVHlwZT4oKTogUHJvbWlzZTxEYXRhVHlwZU1hcFtEXT4ge1xuICAgIHRoaXMudGhyb3dJZkRpc3Bvc2VkKCk7XG4gICAgY29uc3QgZGF0YSA9IHRyYWNrZXJGbigpLnJlYWQodGhpcy5kYXRhSWQpO1xuICAgIGlmICh0aGlzLmR0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgYnl0ZXMgPSBhd2FpdCBkYXRhIGFzIFVpbnQ4QXJyYXlbXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBieXRlcy5tYXAoYiA9PiB1dGlsLmRlY29kZVN0cmluZyhiKSkgYXMgRGF0YVR5cGVNYXBbRF07XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0ZhaWxlZCB0byBkZWNvZGUgdGhlIHN0cmluZyBieXRlcyBpbnRvIHV0Zi04LiAnICtcbiAgICAgICAgICAgICdUbyBnZXQgdGhlIG9yaWdpbmFsIGJ5dGVzLCBjYWxsIHRlbnNvci5ieXRlcygpLicpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YSBhcyBQcm9taXNlPERhdGFUeXBlTWFwW0RdPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IHRoZSB0ZW5zb3IncyBkYXRhIHRvIGEgbmV3IEdQVSByZXNvdXJjZS4gQ29tcGFyaW5nIHRvIHRoZSBgZGF0YVN5bmMoKWBcbiAgICogYW5kIGBkYXRhKClgLCB0aGlzIG1ldGhvZCBwcmV2ZW50cyBkYXRhIGZyb20gYmVpbmcgZG93bmxvYWRlZCB0byBDUFUuXG4gICAqXG4gICAqIEZvciBXZWJHTCBiYWNrZW5kLCB0aGUgZGF0YSB3aWxsIGJlIHN0b3JlZCBvbiBhIGRlbnNlbHkgcGFja2VkIHRleHR1cmUuXG4gICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGV4dHVyZSB3aWxsIHVzZSB0aGUgUkdCQSBjaGFubmVscyB0byBzdG9yZSB2YWx1ZS5cbiAgICpcbiAgICogRm9yIFdlYkdQVSBiYWNrZW5kLCB0aGUgZGF0YSB3aWxsIGJlIHN0b3JlZCBvbiBhIGJ1ZmZlci4gVGhlcmUgaXMgbm9cbiAgICogcGFyYW1ldGVyLCBzbyBjYW4gbm90IHVzZSBhIHVzZXItZGVmaW5lZCBzaXplIHRvIGNyZWF0ZSB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uczpcbiAgICogICAgIEZvciBXZWJHTCxcbiAgICogICAgICAgICAtIGN1c3RvbVRleFNoYXBlOiBPcHRpb25hbC4gSWYgc2V0LCB3aWxsIHVzZSB0aGUgdXNlciBkZWZpbmVkXG4gICAqICAgICB0ZXh0dXJlIHNoYXBlIHRvIGNyZWF0ZSB0aGUgdGV4dHVyZS5cbiAgICpcbiAgICogQHJldHVybnMgRm9yIFdlYkdMIGJhY2tlbmQsIGEgR1BVRGF0YSBjb250YWlucyB0aGUgbmV3IHRleHR1cmUgYW5kXG4gICAqICAgICBpdHMgaW5mb3JtYXRpb24uXG4gICAqICAgICB7XG4gICAqICAgICAgICB0ZW5zb3JSZWY6IFRoZSB0ZW5zb3IgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhpcyB0ZXh0dXJlLFxuICAgKiAgICAgICAgdGV4dHVyZTogV2ViR0xUZXh0dXJlLFxuICAgKiAgICAgICAgdGV4U2hhcGU6IFtudW1iZXIsIG51bWJlcl0gLy8gW2hlaWdodCwgd2lkdGhdXG4gICAqICAgICB9XG4gICAqXG4gICAqICAgICBGb3IgV2ViR1BVIGJhY2tlbmQsIGEgR1BVRGF0YSBjb250YWlucyB0aGUgbmV3IGJ1ZmZlci5cbiAgICogICAgIHtcbiAgICogICAgICAgIHRlbnNvclJlZjogVGhlIHRlbnNvciB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGJ1ZmZlcixcbiAgICogICAgICAgIGJ1ZmZlcjogR1BVQnVmZmVyLFxuICAgKiAgICAgfVxuICAgKlxuICAgKiAgICAgUmVtZW1iZXIgdG8gZGlzcG9zZSB0aGUgR1BVRGF0YSBhZnRlciBpdCBpcyB1c2VkIGJ5XG4gICAqICAgICBgcmVzLnRlbnNvclJlZi5kaXNwb3NlKClgLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnVGVuc29ycycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGRhdGFUb0dQVShvcHRpb25zPzogRGF0YVRvR1BVT3B0aW9ucyk6IEdQVURhdGEge1xuICAgIHRoaXMudGhyb3dJZkRpc3Bvc2VkKCk7XG4gICAgcmV0dXJuIHRyYWNrZXJGbigpLnJlYWRUb0dQVSh0aGlzLmRhdGFJZCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU3luY2hyb25vdXNseSBkb3dubG9hZHMgdGhlIHZhbHVlcyBmcm9tIHRoZSBgdGYuVGVuc29yYC4gVGhpcyBibG9ja3MgdGhlXG4gICAqIFVJIHRocmVhZCB1bnRpbCB0aGUgdmFsdWVzIGFyZSByZWFkeSwgd2hpY2ggY2FuIGNhdXNlIHBlcmZvcm1hbmNlIGlzc3Vlcy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBkYXRhU3luYzxEIGV4dGVuZHMgRGF0YVR5cGUgPSBOdW1lcmljRGF0YVR5cGU+KCk6IERhdGFUeXBlTWFwW0RdIHtcbiAgICB0aGlzLnRocm93SWZEaXNwb3NlZCgpO1xuICAgIGNvbnN0IGRhdGEgPSB0cmFja2VyRm4oKS5yZWFkU3luYyh0aGlzLmRhdGFJZCk7XG4gICAgaWYgKHRoaXMuZHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGRhdGEgYXMgVWludDhBcnJheVtdKS5tYXAoYiA9PiB1dGlsLmRlY29kZVN0cmluZyhiKSkgYXNcbiAgICAgICAgICAgIERhdGFUeXBlTWFwW0RdO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdGYWlsZWQgdG8gZGVjb2RlIHRoZSBzdHJpbmcgYnl0ZXMgaW50byB1dGYtOC4gJyArXG4gICAgICAgICAgICAnVG8gZ2V0IHRoZSBvcmlnaW5hbCBieXRlcywgY2FsbCB0ZW5zb3IuYnl0ZXMoKS4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGEgYXMgRGF0YVR5cGVNYXBbRF07XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgdW5kZXJseWluZyBieXRlcyBvZiB0aGUgdGVuc29yJ3MgZGF0YS4gKi9cbiAgYXN5bmMgYnl0ZXMoKTogUHJvbWlzZTxVaW50OEFycmF5W118VWludDhBcnJheT4ge1xuICAgIHRoaXMudGhyb3dJZkRpc3Bvc2VkKCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRyYWNrZXJGbigpLnJlYWQodGhpcy5kYXRhSWQpO1xuICAgIGlmICh0aGlzLmR0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRhdGEgYXMgVWludDhBcnJheVtdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoKGRhdGEgYXMgVHlwZWRBcnJheSkuYnVmZmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZXMgYHRmLlRlbnNvcmAgZnJvbSBtZW1vcnkuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdUZW5zb3JzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmtlcmFzTWFzaykge1xuICAgICAgdGhpcy5rZXJhc01hc2suZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0cmFja2VyRm4oKS5kaXNwb3NlVGVuc29yKHRoaXMpO1xuICAgIHRoaXMuaXNEaXNwb3NlZEludGVybmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc0Rpc3Bvc2VkSW50ZXJuYWwgPSBmYWxzZTtcbiAgZ2V0IGlzRGlzcG9zZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXNwb3NlZEludGVybmFsO1xuICB9XG5cbiAgdGhyb3dJZkRpc3Bvc2VkKCkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGVuc29yIGlzIGRpc3Bvc2VkLmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludHMgdGhlIGB0Zi5UZW5zb3JgLiBTZWUgYHRmLnByaW50YCBmb3IgZGV0YWlscy5cbiAgICpcbiAgICogQHBhcmFtIHZlcmJvc2UgV2hldGhlciB0byBwcmludCB2ZXJib3NlIGluZm9ybWF0aW9uIGFib3V0IHRoZSB0ZW5zb3IsXG4gICAqICAgIGluY2x1ZGluZyBkdHlwZSBhbmQgc2l6ZS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBwcmludCh2ZXJib3NlID0gZmFsc2UpOiB2b2lkIHtcbiAgICByZXR1cm4gb3BIYW5kbGVyLnByaW50KHRoaXMsIHZlcmJvc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSB0ZW5zb3IuIFNlZSBgdGYuY2xvbmVgIGZvciBkZXRhaWxzLlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnVGVuc29ycycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGNsb25lPFQgZXh0ZW5kcyBUZW5zb3I+KHRoaXM6IFQpOiBUIHtcbiAgICB0aGlzLnRocm93SWZEaXNwb3NlZCgpO1xuICAgIHJldHVybiBvcEhhbmRsZXIuY2xvbmUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGh1bWFuLXJlYWRhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSB0ZW5zb3IuIFVzZWZ1bCBmb3IgbG9nZ2luZy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ1RlbnNvcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICB0b1N0cmluZyh2ZXJib3NlID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbHMgPSB0aGlzLmRhdGFTeW5jKCk7XG4gICAgcmV0dXJuIHRlbnNvclRvU3RyaW5nKHZhbHMsIHRoaXMuc2hhcGUsIHRoaXMuZHR5cGUsIHZlcmJvc2UpO1xuICB9XG5cbiAgY2FzdDxUIGV4dGVuZHMgdGhpcz4oZHR5cGU6IERhdGFUeXBlKTogVCB7XG4gICAgdGhpcy50aHJvd0lmRGlzcG9zZWQoKTtcbiAgICByZXR1cm4gb3BIYW5kbGVyLmNhc3QodGhpcyBhcyBULCBkdHlwZSk7XG4gIH1cbiAgdmFyaWFibGUodHJhaW5hYmxlID0gdHJ1ZSwgbmFtZT86IHN0cmluZywgZHR5cGU/OiBEYXRhVHlwZSk6IFZhcmlhYmxlPFI+IHtcbiAgICB0aGlzLnRocm93SWZEaXNwb3NlZCgpO1xuICAgIHJldHVybiB0cmFja2VyRm4oKS5tYWtlVmFyaWFibGUodGhpcywgdHJhaW5hYmxlLCBuYW1lLCBkdHlwZSkgYXNcbiAgICAgICAgVmFyaWFibGU8Uj47XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFRlbnNvciwgU3ltYm9sLmhhc0luc3RhbmNlLCB7XG4gIHZhbHVlOiAoaW5zdGFuY2U6IFRlbnNvcikgPT4ge1xuICAgIC8vIEltcGxlbWVudGF0aW9uIG5vdGU6IHdlIHNob3VsZCB1c2UgcHJvcGVydGllcyBvZiB0aGUgb2JqZWN0IHRoYXQgd2lsbCBiZVxuICAgIC8vIGRlZmluZWQgYmVmb3JlIHRoZSBjb25zdHJ1Y3RvciBib2R5IGhhcyBmaW5pc2hlZCBleGVjdXRpbmcgKG1ldGhvZHMpLlxuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3aGVuIHRoaXMgY29kZSBpcyB0cmFuc3BpbGVkIGJ5IGJhYmVsLCBiYWJlbCB3aWxsIGNhbGxcbiAgICAvLyBjbGFzc0NhbGxDaGVjayBiZWZvcmUgdGhlIGNvbnN0cnVjdG9yIGJvZHkgaXMgcnVuLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzL2lzc3Vlcy8zMzg0IGZvciBiYWNrc3RvcnkuXG4gICAgcmV0dXJuICEhaW5zdGFuY2UgJiYgaW5zdGFuY2UuZGF0YSAhPSBudWxsICYmIGluc3RhbmNlLmRhdGFTeW5jICE9IG51bGwgJiZcbiAgICAgICAgaW5zdGFuY2UudGhyb3dJZkRpc3Bvc2VkICE9IG51bGw7XG4gIH1cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsVGVuc29yQ2xhc3MoKSB7XG4gIC8vIFVzZSBnZXRHbG9iYWwgc28gdGhhdCB3ZSBjYW4gYXVnbWVudCB0aGUgVGVuc29yIGNsYXNzIGFjcm9zcyBwYWNrYWdlXG4gIC8vIGJvdW5kYXJpZXMgYmVjYXVzZSB0aGUgbm9kZSByZXNvbHV0aW9uIGFsZyBtYXkgcmVzdWx0IGluIGRpZmZlcmVudCBtb2R1bGVzXG4gIC8vIGJlaW5nIHJldHVybmVkIGZvciB0aGlzIGZpbGUgZGVwZW5kaW5nIG9uIHRoZSBwYXRoIHRoZXkgYXJlIGxvYWRlZCBmcm9tLlxuICByZXR1cm4gZ2V0R2xvYmFsKCdUZW5zb3InLCAoKSA9PiB7XG4gICAgcmV0dXJuIFRlbnNvcjtcbiAgfSk7XG59XG5cbi8vIEdsb2JhbCBzaWRlIGVmZmVjdC4gQ2FjaGUgZ2xvYmFsIHJlZmVyZW5jZSB0byBUZW5zb3IgY2xhc3NcbmdldEdsb2JhbFRlbnNvckNsYXNzKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnVtZXJpY1RlbnNvcjxSIGV4dGVuZHMgUmFuayA9IFJhbms+IGV4dGVuZHMgVGVuc29yPFI+IHtcbiAgZHR5cGU6IE51bWVyaWNEYXRhVHlwZTtcbiAgZGF0YVN5bmM8RCBleHRlbmRzIERhdGFUeXBlID0gTnVtZXJpY0RhdGFUeXBlPigpOiBEYXRhVHlwZU1hcFtEXTtcbiAgZGF0YTxEIGV4dGVuZHMgRGF0YVR5cGUgPSBOdW1lcmljRGF0YVR5cGU+KCk6IFByb21pc2U8RGF0YVR5cGVNYXBbRF0+O1xuICBkYXRhVG9HUFUob3B0aW9ucz86IERhdGFUb0dQVU9wdGlvbnMpOiBHUFVEYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ1RlbnNvcjxSIGV4dGVuZHMgUmFuayA9IFJhbms+IGV4dGVuZHMgVGVuc29yPFI+IHtcbiAgZHR5cGU6ICdzdHJpbmcnO1xuICBkYXRhU3luYzxEIGV4dGVuZHMgRGF0YVR5cGUgPSAnc3RyaW5nJz4oKTogRGF0YVR5cGVNYXBbRF07XG4gIGRhdGE8RCBleHRlbmRzIERhdGFUeXBlID0gJ3N0cmluZyc+KCk6IFByb21pc2U8RGF0YVR5cGVNYXBbRF0+O1xufVxuXG4vKiogQGRvY2xpbmsgVGVuc29yICovXG5leHBvcnQgdHlwZSBTY2FsYXIgPSBUZW5zb3I8UmFuay5SMD47XG4vKiogQGRvY2xpbmsgVGVuc29yICovXG5leHBvcnQgdHlwZSBUZW5zb3IxRCA9IFRlbnNvcjxSYW5rLlIxPjtcbi8qKiBAZG9jbGluayBUZW5zb3IgKi9cbmV4cG9ydCB0eXBlIFRlbnNvcjJEID0gVGVuc29yPFJhbmsuUjI+O1xuLyoqIEBkb2NsaW5rIFRlbnNvciAqL1xuZXhwb3J0IHR5cGUgVGVuc29yM0QgPSBUZW5zb3I8UmFuay5SMz47XG4vKiogQGRvY2xpbmsgVGVuc29yICovXG5leHBvcnQgdHlwZSBUZW5zb3I0RCA9IFRlbnNvcjxSYW5rLlI0Pjtcbi8qKiBAZG9jbGluayBUZW5zb3IgKi9cbmV4cG9ydCB0eXBlIFRlbnNvcjVEID0gVGVuc29yPFJhbmsuUjU+O1xuLyoqIEBkb2NsaW5rIFRlbnNvciAqL1xuZXhwb3J0IHR5cGUgVGVuc29yNkQgPSBUZW5zb3I8UmFuay5SNj47XG5cbi8qKlxuICogQSBtdXRhYmxlIGB0Zi5UZW5zb3JgLCB1c2VmdWwgZm9yIHBlcnNpc3Rpbmcgc3RhdGUsIGUuZy4gZm9yIHRyYWluaW5nLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdUZW5zb3JzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICovXG5leHBvcnQgY2xhc3MgVmFyaWFibGU8UiBleHRlbmRzIFJhbmsgPSBSYW5rPiBleHRlbmRzIFRlbnNvcjxSPiB7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGluaXRpYWxWYWx1ZTogVGVuc29yPFI+LCBwdWJsaWMgdHJhaW5hYmxlOiBib29sZWFuLCBuYW1lOiBzdHJpbmcsXG4gICAgICB0ZW5zb3JJZDogbnVtYmVyKSB7XG4gICAgc3VwZXIoXG4gICAgICAgIGluaXRpYWxWYWx1ZS5zaGFwZSwgaW5pdGlhbFZhbHVlLmR0eXBlLCBpbml0aWFsVmFsdWUuZGF0YUlkLCB0ZW5zb3JJZCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBc3NpZ24gYSBuZXcgYHRmLlRlbnNvcmAgdG8gdGhpcyB2YXJpYWJsZS4gVGhlIG5ldyBgdGYuVGVuc29yYCBtdXN0IGhhdmVcbiAgICogdGhlIHNhbWUgc2hhcGUgYW5kIGR0eXBlIGFzIHRoZSBvbGQgYHRmLlRlbnNvcmAuXG4gICAqXG4gICAqIEBwYXJhbSBuZXdWYWx1ZSBOZXcgdGVuc29yIHRvIGJlIGFzc2lnbmVkIHRvIHRoaXMgdmFyaWFibGUuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdUZW5zb3JzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgYXNzaWduKG5ld1ZhbHVlOiBUZW5zb3I8Uj4pOiB2b2lkIHtcbiAgICBpZiAobmV3VmFsdWUuZHR5cGUgIT09IHRoaXMuZHR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgZHR5cGUgb2YgdGhlIG5ldyB2YWx1ZSAoJHtuZXdWYWx1ZS5kdHlwZX0pIGFuZCBgICtcbiAgICAgICAgICBgcHJldmlvdXMgdmFsdWUgKCR7dGhpcy5kdHlwZX0pIG11c3QgbWF0Y2hgKTtcbiAgICB9XG4gICAgaWYgKCF1dGlsLmFycmF5c0VxdWFsKG5ld1ZhbHVlLnNoYXBlLCB0aGlzLnNoYXBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBzaGFwZSBvZiB0aGUgbmV3IHZhbHVlICgke25ld1ZhbHVlLnNoYXBlfSkgYW5kIGAgK1xuICAgICAgICAgIGBwcmV2aW91cyB2YWx1ZSAoJHt0aGlzLnNoYXBlfSkgbXVzdCBtYXRjaGApO1xuICAgIH1cbiAgICB0cmFja2VyRm4oKS5kaXNwb3NlVGVuc29yKHRoaXMpO1xuICAgIHRoaXMuZGF0YUlkID0gbmV3VmFsdWUuZGF0YUlkO1xuICAgIHRyYWNrZXJGbigpLmluY1JlZih0aGlzLCBudWxsIC8qIGJhY2tlbmQgKi8pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0cmFja2VyRm4oKS5kaXNwb3NlVmFyaWFibGUodGhpcyk7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkSW50ZXJuYWwgPSB0cnVlO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWYXJpYWJsZSwgU3ltYm9sLmhhc0luc3RhbmNlLCB7XG4gIHZhbHVlOiAoaW5zdGFuY2U6IFZhcmlhYmxlKSA9PiB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgVGVuc29yICYmIGluc3RhbmNlLmFzc2lnbiAhPSBudWxsICYmXG4gICAgICAgIGluc3RhbmNlLmFzc2lnbiBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9XG59KTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "Rank",
    ()=>Rank,
    "isWebGLData",
    ()=>isWebGLData,
    "isWebGPUData",
    ()=>isWebGPUData,
    "sumOutType",
    ()=>sumOutType,
    "upcastType",
    ()=>upcastType
]);
var Rank;
(function(Rank) {
    Rank["R0"] = "R0";
    Rank["R1"] = "R1";
    Rank["R2"] = "R2";
    Rank["R3"] = "R3";
    Rank["R4"] = "R4";
    Rank["R5"] = "R5";
    Rank["R6"] = "R6";
})(Rank || (Rank = {}));
// Looks for upcasting types. Used, for example, in operations with mixed dtype
// inputs.
var UpcastInt32AndMap;
(function(UpcastInt32AndMap) {
    UpcastInt32AndMap["float32"] = "float32";
    UpcastInt32AndMap["int32"] = "int32";
    UpcastInt32AndMap["bool"] = "int32";
    UpcastInt32AndMap["complex64"] = "complex64";
})(UpcastInt32AndMap || (UpcastInt32AndMap = {}));
var UpcastBoolAndMap;
(function(UpcastBoolAndMap) {
    UpcastBoolAndMap["float32"] = "float32";
    UpcastBoolAndMap["int32"] = "int32";
    UpcastBoolAndMap["bool"] = "bool";
    UpcastBoolAndMap["complex64"] = "complex64";
})(UpcastBoolAndMap || (UpcastBoolAndMap = {}));
var UpcastFloat32AndMap;
(function(UpcastFloat32AndMap) {
    UpcastFloat32AndMap["float32"] = "float32";
    UpcastFloat32AndMap["int32"] = "float32";
    UpcastFloat32AndMap["bool"] = "float32";
    UpcastFloat32AndMap["complex64"] = "complex64";
})(UpcastFloat32AndMap || (UpcastFloat32AndMap = {}));
var UpcastComplex64AndMap;
(function(UpcastComplex64AndMap) {
    UpcastComplex64AndMap["float32"] = "complex64";
    UpcastComplex64AndMap["int32"] = "complex64";
    UpcastComplex64AndMap["bool"] = "complex64";
    UpcastComplex64AndMap["complex64"] = "complex64";
})(UpcastComplex64AndMap || (UpcastComplex64AndMap = {}));
const upcastTypeMap = {
    'float32': UpcastFloat32AndMap,
    'int32': UpcastInt32AndMap,
    'bool': UpcastBoolAndMap,
    'complex64': UpcastComplex64AndMap
};
function upcastType(typeA, typeB) {
    if (typeA === 'string' || typeB === 'string') {
        if (typeA === 'string' && typeB === 'string') {
            return 'string';
        }
        throw new Error(`Can not upcast ${typeA} with ${typeB}`);
    }
    return upcastTypeMap[typeA][typeB];
}
function sumOutType(type) {
    return upcastType(type, 'int32');
}
function isWebGLData(values) {
    return values != null && typeof values === 'object' && 'texture' in values && values.texture instanceof WebGLTexture;
}
function isWebGPUData(values) {
    return typeof GPUBuffer !== 'undefined' && values != null && typeof values === 'object' && 'buffer' in values && values.buffer instanceof GPUBuffer;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQXNESCxNQUFNLENBQU4sSUFBWSxJQVFYO0FBUkQsV0FBWSxJQUFJO0lBQ2QsaUJBQVMsQ0FBQTtJQUNULGlCQUFTLENBQUE7SUFDVCxpQkFBUyxDQUFBO0lBQ1QsaUJBQVMsQ0FBQTtJQUNULGlCQUFTLENBQUE7SUFDVCxpQkFBUyxDQUFBO0lBQ1QsaUJBQVMsQ0FBQTtBQUNYLENBQUMsRUFSVyxJQUFJLEtBQUosSUFBSSxRQVFmO0FBV0QsK0VBQStFO0FBQy9FLFVBQVU7QUFDVixJQUFLLGlCQUtKO0FBTEQsV0FBSyxpQkFBaUI7SUFDcEIsd0NBQXFCLENBQUE7SUFDckIsb0NBQWlCLENBQUE7SUFDakIsbUNBQWdCLENBQUE7SUFDaEIsNENBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUxJLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLckI7QUFFRCxJQUFLLGdCQUtKO0FBTEQsV0FBSyxnQkFBZ0I7SUFDbkIsdUNBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7SUFDakIsaUNBQWUsQ0FBQTtJQUNmLDJDQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMSSxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBS3BCO0FBRUQsSUFBSyxtQkFLSjtBQUxELFdBQUssbUJBQW1CO0lBQ3RCLDBDQUFxQixDQUFBO0lBQ3JCLHdDQUFtQixDQUFBO0lBQ25CLHVDQUFrQixDQUFBO0lBQ2xCLDhDQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMSSxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBS3ZCO0FBRUQsSUFBSyxxQkFLSjtBQUxELFdBQUsscUJBQXFCO0lBQ3hCLDhDQUF1QixDQUFBO0lBQ3ZCLDRDQUFxQixDQUFBO0lBQ3JCLDJDQUFvQixDQUFBO0lBQ3BCLGdEQUF5QixDQUFBO0FBQzNCLENBQUMsRUFMSSxxQkFBcUIsS0FBckIscUJBQXFCLFFBS3pCO0FBRUQsTUFBTSxhQUFhLEdBQUc7SUFDcEIsU0FBUyxFQUFFLG1CQUFtQjtJQUM5QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLE1BQU0sRUFBRSxnQkFBZ0I7SUFDeEIsV0FBVyxFQUFFLHFCQUFxQjtDQUNuQyxDQUFDO0FBRUYsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFlLEVBQUUsS0FBZTtJQUN6RCxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM1QyxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM1QyxPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQzFEO0lBQ0QsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELCtDQUErQztBQUMvQyxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQWM7SUFDdkMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFrRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUFlO0lBQ3pDLE9BQU8sTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksU0FBUyxJQUFJLE1BQU07UUFDdEUsTUFBTSxDQUFDLE9BQU8sWUFBWSxZQUFZLENBQUM7QUFDN0MsQ0FBQztBQUNELE1BQU0sVUFBVSxZQUFZLENBQUMsTUFBZTtJQUMxQyxPQUFPLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxNQUFNLElBQUksSUFBSTtRQUNyRCxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksUUFBUSxJQUFJLE1BQU07UUFDaEQsTUFBTSxDQUFDLE1BQU0sWUFBWSxTQUFTLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqIEBkb2NhbGlhcyBudW1iZXJbXSAqL1xuZXhwb3J0IGludGVyZmFjZSBTaGFwZU1hcCB7XG4gIFIwOiBudW1iZXJbXTtcbiAgUjE6IFtudW1iZXJdO1xuICBSMjogW251bWJlciwgbnVtYmVyXTtcbiAgUjM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgUjQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBSNTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgUjY6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn1cblxuLyoqIEBkb2NhbGlhcyBudW1iZXJbXSAqL1xuZXhwb3J0IGludGVyZmFjZSBBcnJheU1hcCB7XG4gIFIwOiBudW1iZXI7XG4gIFIxOiBudW1iZXJbXTtcbiAgUjI6IG51bWJlcltdW107XG4gIFIzOiBudW1iZXJbXVtdW107XG4gIFI0OiBudW1iZXJbXVtdW11bXTtcbiAgUjU6IG51bWJlcltdW11bXVtdW107XG4gIFI2OiBudW1iZXJbXVtdW11bXVtdW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVR5cGVNYXAge1xuICBmbG9hdDMyOiBGbG9hdDMyQXJyYXk7XG4gIGludDMyOiBJbnQzMkFycmF5O1xuICBib29sOiBVaW50OEFycmF5O1xuICBjb21wbGV4NjQ6IEZsb2F0MzJBcnJheTtcbiAgc3RyaW5nOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVWYWx1ZU1hcCB7XG4gIGJvb2w6IGJvb2xlYW47XG4gIGludDMyOiBudW1iZXI7XG4gIGZsb2F0MzI6IG51bWJlcjtcbiAgY29tcGxleDY0OiBudW1iZXI7XG4gIHN0cmluZzogc3RyaW5nO1xufVxuXG4vKiogQGRvY2FsaWFzICdmbG9hdDMyJ3wnaW50MzInfCdib29sJ3wnY29tcGxleDY0J3wnc3RyaW5nJyAqL1xuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSBrZXlvZiBEYXRhVHlwZU1hcDtcbmV4cG9ydCB0eXBlIE51bWVyaWNEYXRhVHlwZSA9ICdmbG9hdDMyJ3wnaW50MzInfCdib29sJ3wnY29tcGxleDY0JztcblxuZXhwb3J0IHR5cGUgRGF0YVR5cGVGb3I8VCBleHRlbmRzIG51bWJlcnxzdHJpbmd8Ym9vbGVhbj4gPVxuICAgIFQgZXh0ZW5kcyBudW1iZXJ8Ym9vbGVhbiA/IE51bWVyaWNEYXRhVHlwZSA6IFQgZXh0ZW5kcyBzdHJpbmcgPyAnc3RyaW5nJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldmVyO1xuXG5leHBvcnQgdHlwZSBUeXBlZEFycmF5ID0gRmxvYXQzMkFycmF5fEludDMyQXJyYXl8VWludDhBcnJheTtcbi8qKiBUZW5zb3IgZGF0YSB1c2VkIGluIHRlbnNvciBjcmVhdGlvbiBhbmQgdXNlci1mYWNpbmcgQVBJLiAqL1xuZXhwb3J0IHR5cGUgRGF0YVZhbHVlcyA9IERhdGFUeXBlTWFwW0RhdGFUeXBlXTtcbi8qKiBUaGUgdW5kZXJseWluZyB0ZW5zb3IgZGF0YSB0aGF0IGdldHMgc3RvcmVkIGluIGEgYmFja2VuZC4gKi9cbmV4cG9ydCB0eXBlIEJhY2tlbmRWYWx1ZXMgPSBGbG9hdDMyQXJyYXl8SW50MzJBcnJheXxVaW50OEFycmF5fFVpbnQ4QXJyYXlbXTtcblxuZXhwb3J0IGVudW0gUmFuayB7XG4gIFIwID0gJ1IwJyxcbiAgUjEgPSAnUjEnLFxuICBSMiA9ICdSMicsXG4gIFIzID0gJ1IzJyxcbiAgUjQgPSAnUjQnLFxuICBSNSA9ICdSNScsXG4gIFI2ID0gJ1I2J1xufVxuXG5leHBvcnQgdHlwZSBGbGF0VmVjdG9yID0gYm9vbGVhbltdfG51bWJlcltdfFR5cGVkQXJyYXk7XG5leHBvcnQgdHlwZSBSZWd1bGFyQXJyYXk8VD4gPVxuICAgIFRbXXxUW11bXXxUW11bXVtdfFRbXVtdW11bXXxUW11bXVtdW11bXXxUW11bXVtdW11bXVtdO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgaW50ZXJmYWNlIFJlY3Vyc2l2ZUFycmF5PFQgZXh0ZW5kcyBhbnk+IHtcbiAgW2luZGV4OiBudW1iZXJdOiBUfFJlY3Vyc2l2ZUFycmF5PFQ+O1xufVxuXG4vLyBMb29rcyBmb3IgdXBjYXN0aW5nIHR5cGVzLiBVc2VkLCBmb3IgZXhhbXBsZSwgaW4gb3BlcmF0aW9ucyB3aXRoIG1peGVkIGR0eXBlXG4vLyBpbnB1dHMuXG5lbnVtIFVwY2FzdEludDMyQW5kTWFwIHtcbiAgJ2Zsb2F0MzInID0gJ2Zsb2F0MzInLFxuICAnaW50MzInID0gJ2ludDMyJyxcbiAgJ2Jvb2wnID0gJ2ludDMyJyxcbiAgJ2NvbXBsZXg2NCcgPSAnY29tcGxleDY0J1xufVxuXG5lbnVtIFVwY2FzdEJvb2xBbmRNYXAge1xuICAnZmxvYXQzMicgPSAnZmxvYXQzMicsXG4gICdpbnQzMicgPSAnaW50MzInLFxuICAnYm9vbCcgPSAnYm9vbCcsXG4gICdjb21wbGV4NjQnID0gJ2NvbXBsZXg2NCdcbn1cblxuZW51bSBVcGNhc3RGbG9hdDMyQW5kTWFwIHtcbiAgJ2Zsb2F0MzInID0gJ2Zsb2F0MzInLFxuICAnaW50MzInID0gJ2Zsb2F0MzInLFxuICAnYm9vbCcgPSAnZmxvYXQzMicsXG4gICdjb21wbGV4NjQnID0gJ2NvbXBsZXg2NCdcbn1cblxuZW51bSBVcGNhc3RDb21wbGV4NjRBbmRNYXAge1xuICAnZmxvYXQzMicgPSAnY29tcGxleDY0JyxcbiAgJ2ludDMyJyA9ICdjb21wbGV4NjQnLFxuICAnYm9vbCcgPSAnY29tcGxleDY0JyxcbiAgJ2NvbXBsZXg2NCcgPSAnY29tcGxleDY0J1xufVxuXG5jb25zdCB1cGNhc3RUeXBlTWFwID0ge1xuICAnZmxvYXQzMic6IFVwY2FzdEZsb2F0MzJBbmRNYXAsXG4gICdpbnQzMic6IFVwY2FzdEludDMyQW5kTWFwLFxuICAnYm9vbCc6IFVwY2FzdEJvb2xBbmRNYXAsXG4gICdjb21wbGV4NjQnOiBVcGNhc3RDb21wbGV4NjRBbmRNYXBcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGNhc3RUeXBlKHR5cGVBOiBEYXRhVHlwZSwgdHlwZUI6IERhdGFUeXBlKTogRGF0YVR5cGUge1xuICBpZiAodHlwZUEgPT09ICdzdHJpbmcnIHx8IHR5cGVCID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlQSA9PT0gJ3N0cmluZycgJiYgdHlwZUIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJ3N0cmluZyc7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG5vdCB1cGNhc3QgJHt0eXBlQX0gd2l0aCAke3R5cGVCfWApO1xuICB9XG4gIHJldHVybiB1cGNhc3RUeXBlTWFwW3R5cGVBXVt0eXBlQl07XG59XG5cbi8qKiBSZXR1cm5zIHRoZSBvdXRwdXQgdHlwZSBhZnRlciBzdW1tYXRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gc3VtT3V0VHlwZSh0eXBlOiBEYXRhVHlwZSk6IERhdGFUeXBlIHtcbiAgcmV0dXJuIHVwY2FzdFR5cGUodHlwZSwgJ2ludDMyJyk7XG59XG5cbi8qKiBAZG9jYWxpYXMgVHlwZWRBcnJheXxBcnJheSAqL1xuZXhwb3J0IHR5cGUgVGVuc29yTGlrZSA9XG4gICAgVHlwZWRBcnJheXxudW1iZXJ8Ym9vbGVhbnxzdHJpbmd8UmVjdXJzaXZlQXJyYXk8bnVtYmVyfG51bWJlcltdfFR5cGVkQXJyYXk+fFxuICAgIFJlY3Vyc2l2ZUFycmF5PGJvb2xlYW4+fFJlY3Vyc2l2ZUFycmF5PHN0cmluZz58VWludDhBcnJheVtdO1xuZXhwb3J0IHR5cGUgU2NhbGFyTGlrZSA9IG51bWJlcnxib29sZWFufHN0cmluZ3xVaW50OEFycmF5O1xuLyoqIEBkb2NhbGlhcyBUeXBlZEFycmF5fEFycmF5ICovXG5leHBvcnQgdHlwZSBUZW5zb3JMaWtlMUQgPSBUeXBlZEFycmF5fG51bWJlcltdfGJvb2xlYW5bXXxzdHJpbmdbXXxVaW50OEFycmF5W107XG4vKiogQGRvY2FsaWFzIFR5cGVkQXJyYXl8QXJyYXkgKi9cbmV4cG9ydCB0eXBlIFRlbnNvckxpa2UyRCA9IFR5cGVkQXJyYXl8bnVtYmVyW118bnVtYmVyW11bXXxib29sZWFuW118Ym9vbGVhbltdW118XG4gICAgc3RyaW5nW118c3RyaW5nW11bXXxVaW50OEFycmF5W118VWludDhBcnJheVtdW107XG4vKiogQGRvY2FsaWFzIFR5cGVkQXJyYXl8QXJyYXkgKi9cbmV4cG9ydCB0eXBlIFRlbnNvckxpa2UzRCA9IFR5cGVkQXJyYXl8bnVtYmVyW118bnVtYmVyW11bXVtdfGJvb2xlYW5bXXxcbiAgICBib29sZWFuW11bXVtdfHN0cmluZ1tdfHN0cmluZ1tdW11bXXxVaW50OEFycmF5W118VWludDhBcnJheVtdW11bXTtcbi8qKiBAZG9jYWxpYXMgVHlwZWRBcnJheXxBcnJheSAqL1xuZXhwb3J0IHR5cGUgVGVuc29yTGlrZTREID0gVHlwZWRBcnJheXxudW1iZXJbXXxudW1iZXJbXVtdW11bXXxib29sZWFuW118XG4gICAgYm9vbGVhbltdW11bXVtdfHN0cmluZ1tdfHN0cmluZ1tdW11bXVtdfFVpbnQ4QXJyYXlbXXxVaW50OEFycmF5W11bXVtdW107XG4vKiogQGRvY2FsaWFzIFR5cGVkQXJyYXl8QXJyYXkgKi9cbmV4cG9ydCB0eXBlIFRlbnNvckxpa2U1RCA9XG4gICAgVHlwZWRBcnJheXxudW1iZXJbXXxudW1iZXJbXVtdW11bXVtdfGJvb2xlYW5bXXxib29sZWFuW11bXVtdW11bXXxzdHJpbmdbXXxcbiAgICBzdHJpbmdbXVtdW11bXVtdfFVpbnQ4QXJyYXlbXXxVaW50OEFycmF5W11bXVtdW11bXTtcbi8qKiBAZG9jYWxpYXMgVHlwZWRBcnJheXxBcnJheSAqL1xuZXhwb3J0IHR5cGUgVGVuc29yTGlrZTZEID1cbiAgICBUeXBlZEFycmF5fG51bWJlcltdfG51bWJlcltdW11bXVtdW11bXXxib29sZWFuW118Ym9vbGVhbltdW11bXVtdW11bXXxcbiAgICBzdHJpbmdbXXxzdHJpbmdbXVtdW11bXVtdW118VWludDhBcnJheVtdfFVpbnQ4QXJyYXlbXVtdW11bXVtdO1xuXG4vKiogVHlwZSBmb3IgcmVwcmVzZW50aW5nIGltYWdlIGRhdGEgaW4gVWludDhBcnJheSB0eXBlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaXhlbERhdGEge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZGF0YTogVWludDhBcnJheTtcbn1cblxuLyoqXG4gKiBUeXBlIGZvciByZXByZXNlbnRpbmcgYWxsIHBlcm11dGF0aW9ucyBhbmQgY29tYmluYXRpb25zIG9mICdSR0JBJyBjaGFubmVscy5cbiAqL1xuZXhwb3J0IHR5cGUgV2ViR0xDaGFubmVscyA9ICdBJ3wnQid8J0cnfCdSJ3wnQUInfCdBRyd8J0FSJ3wnQkEnfCdCRyd8J0JSJ3wnR0EnfFxuICAgICdHQid8J0dSJ3wnUkEnfCdSQid8J1JHJ3wnQUJHJ3wnQUJSJ3wnQUdCJ3wnQUdSJ3wnQVJCJ3wnQVJHJ3wnQkFHJ3wnQkFSJ3xcbiAgICAnQkdBJ3wnQkdSJ3wnQlJBJ3wnQlJHJ3wnR0FCJ3wnR0FSJ3wnR0JBJ3wnR0JSJ3wnR1JBJ3wnR1JCJ3wnUkFCJ3wnUkFHJ3xcbiAgICAnUkJBJ3wnUkJHJ3wnUkdBJ3wnUkdCJ3wnQUJHUid8J0FCUkcnfCdBR0JSJ3wnQUdSQid8J0FSQkcnfCdBUkdCJ3wnQkFHUid8XG4gICAgJ0JBUkcnfCdCR0FSJ3wnQkdSQSd8J0JSQUcnfCdCUkdBJ3wnR0FCUid8J0dBUkInfCdHQkFSJ3wnR0JSQSd8J0dSQUInfFxuICAgICdHUkJBJ3wnUkFCRyd8J1JBR0InfCdSQkFHJ3wnUkJHQSd8J1JHQUInfCdSR0JBJztcblxuLyoqIFR5cGUgZm9yIHJlcHJlc2VudGluZyBhIHRleHR1cmUgZGF0YSB0byBjcmVhdGUgYSB0ZW5zb3IuICovXG5leHBvcnQgaW50ZXJmYWNlIFdlYkdMRGF0YSB7XG4gIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGNoYW5uZWxzOiBXZWJHTENoYW5uZWxzO1xufVxuXG4vKipcbiAqIFR5cGUgZm9yIHJlcHJlc2VudGluZyBhIGJ1ZmZlciBkYXRhIHRvIGNyZWF0ZSBhIHRlbnNvci4gQnVmZmVyIHVzYWdlIHNob3VsZFxuICogYXQgbGVhc3Qgc3VwcG9ydCBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMuIFdoZW5cbiAqIHplcm9Db3B5IGlzIGZhbHNlIG9yIHVuZGVmaW5lZCAoZGVmYXVsdCksIHRoaXMgR1BVQnVmZmVyIHdpbGwgYmUgY29waWVkIHRvXG4gKiB0aGUgdGVuc29yJ3MgcmVzb3VyY2UgYnVmZmVyLiBXaGVuIHplcm9Db3B5IGlzIHRydWUsIHRlbnNvciB3aWxsIHVzZSB0aGlzXG4gKiBHUFVCdWZmZXIgYXMgdGVuc29yJ3MgcmVzb3VyY2UgYnVmZmVyLCB1c2VyIHNob3VsZCBub3QgZGVzdHJveSB0aGlzIEdQVUJ1ZmZlclxuICogdW50aWwgYWxsIGFjY2VzcyBpcyBkb25lLiBJZiBub3Qgc3BlY2lmaWVkIGF0IGNyZWF0aW5nIGEgdGVuc29yLCB0ZW5zb3IgdHlwZVxuICogaXMgZmxvYXQzMi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXZWJHUFVEYXRhIHtcbiAgYnVmZmVyOiBHUFVCdWZmZXI7XG4gIHplcm9Db3B5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViR0xEYXRhKHZhbHVlczogdW5rbm93bik6IHZhbHVlcyBpcyBXZWJHTERhdGEge1xuICByZXR1cm4gdmFsdWVzICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlcyA9PT0gJ29iamVjdCcgJiYgJ3RleHR1cmUnIGluIHZhbHVlcyAmJlxuICAgICAgdmFsdWVzLnRleHR1cmUgaW5zdGFuY2VvZiBXZWJHTFRleHR1cmU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNXZWJHUFVEYXRhKHZhbHVlczogdW5rbm93bik6IHZhbHVlcyBpcyBXZWJHUFVEYXRhIHtcbiAgcmV0dXJuIHR5cGVvZiBHUFVCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlcyAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVzID09PSAnb2JqZWN0JyAmJiAnYnVmZmVyJyBpbiB2YWx1ZXMgJiZcbiAgICAgIHZhbHVlcy5idWZmZXIgaW5zdGFuY2VvZiBHUFVCdWZmZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VPcHRpb25zIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsLiBBIG51bWJlciBpbiByYW5nZSBbMC0xXS4gSWYgdGhlIGltYWdlIGlzIGEgMkQgdGVuc29yIG9yIGEgM0RcbiAgICogdGVuc29yIHdpdGggMSBvciAzIGNoYW5uZWxzLCB0aGUgYWxwaGEgY2hhbm5lbHMgd291bGQgc2V0IGFzIGl0cyB2YWx1ZTtcbiAgICogb3RoZXJ3aXNlLCBpdCB3b3VsZCBub3QgbWFrZSBlZmZlY3RzLlxuICAgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dE9wdGlvbnMge1xuICAvKipcbiAgICogT3B0aW9uYWwuICBJZiB0aGUgY2FudmFzIGhhcyBjcmVhdGVkIGEgY29udGV4dCwgaXQgd291bGQgbm90IG1ha2UgZWZmZWN0cy5cbiAgICogSWYgaXQgaXMgbm90IHNldCwgaXQgd291bGQgYmUgdmFyaWFibGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgYmFja2VuZC5cbiAgICovXG4gIGNvbnRleHRUeXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogT3B0aW9uYWwuIEEgV2ViR0xDb250ZXh0QXR0cmlidXRlcyBjb25maWd1cmF0aW9uLiBJZiB0aGUgY2FudmFzIGhhcyBjcmVhdGVkXG4gICAqIGEgY29udGV4dCwgaXQgd291bGQgbm90IG1ha2UgZWZmZWN0cy5cbiAgICovXG4gIGNvbnRleHRBdHRyaWJ1dGVzPzogV2ViR0xDb250ZXh0QXR0cmlidXRlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmF3T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBPcHRpb25hbC4gQW4gb2JqZWN0IG9mIG9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaW1hZ2UgdGVuc29yLlxuICAgKi9cbiAgaW1hZ2VPcHRpb25zPzogSW1hZ2VPcHRpb25zO1xuICAvKipcbiAgICogT3B0aW9uYWwuIEFuIG9iamVjdCB0byBjb25maWd1cmUgdGhlIGNvbnRleHQgb2YgdGhlIGNhbnZhcyB0byBkcmF3IHRvLlxuICAgKi9cbiAgY29udGV4dE9wdGlvbnM/OiBDb250ZXh0T3B0aW9ucztcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "assertTypesMatch",
    ()=>assertTypesMatch,
    "getTensorsInContainer",
    ()=>getTensorsInContainer,
    "isTensorInList",
    ()=>isTensorInList,
    "makeTypesMatch",
    ()=>makeTypesMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
;
;
function makeTypesMatch(a, b) {
    if (a.dtype === b.dtype) {
        return [
            a,
            b
        ];
    }
    const dtype = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upcastType"])(a.dtype, b.dtype);
    return [
        a.cast(dtype),
        b.cast(dtype)
    ];
}
function assertTypesMatch(a, b) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(a.dtype === b.dtype, ()=>`The dtypes of the first(${a.dtype}) and` + ` second(${b.dtype}) input must match`);
}
function isTensorInList(tensor, tensorList) {
    return tensorList.some((x)=>x.id === tensor.id);
}
function getTensorsInContainer(result) {
    const list = [];
    const seen = new Set();
    walkTensorContainer(result, list, seen);
    return list;
}
function walkTensorContainer(container, list, seen) {
    if (container == null) {
        return;
    }
    if (container instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]) {
        list.push(container);
        return;
    }
    if (!isIterable(container)) {
        return;
    }
    // Iteration over keys works also for arrays.
    const iterable = container;
    for(const k in iterable){
        const val = iterable[k];
        if (!seen.has(val)) {
            seen.add(val);
            walkTensorContainer(val, list, seen);
        }
    }
}
// tslint:disable-next-line:no-any
function isIterable(obj) {
    return Array.isArray(obj) || typeof obj === 'object';
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL3RlbnNvcl91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE1BQU0sVUFBVSxjQUFjLENBQW1CLENBQUksRUFBRSxDQUFJO0lBQ3pELElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDZjtJQUNELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNuRCxNQUFNLENBQ0YsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxFQUNuQixHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssT0FBTztRQUMzQyxXQUFXLENBQUMsQ0FBQyxLQUFLLG9CQUFvQixDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBYyxFQUFFLFVBQW9CO0lBQ2pFLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxNQUF1QjtJQUMzRCxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7SUFDMUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQVcsQ0FBQztJQUNoQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQ3hCLFNBQTBCLEVBQUUsSUFBYyxFQUFFLElBQWtCO0lBQ2hFLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtRQUNyQixPQUFPO0tBQ1I7SUFDRCxJQUFJLFNBQVMsWUFBWSxNQUFNLEVBQUU7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQixPQUFPO0tBQ1I7SUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFCLE9BQU87S0FDUjtJQUNELDZDQUE2QztJQUM3QyxNQUFNLFFBQVEsR0FBRyxTQUFpQyxDQUFDO0lBQ25ELEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsbUJBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0QztLQUNGO0FBQ0gsQ0FBQztBQUVELGtDQUFrQztBQUNsQyxTQUFTLFVBQVUsQ0FBQyxHQUFRO0lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7QUFDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtUZW5zb3J9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7VGVuc29yQ29udGFpbmVyLCBUZW5zb3JDb250YWluZXJBcnJheX0gZnJvbSAnLi90ZW5zb3JfdHlwZXMnO1xuaW1wb3J0IHt1cGNhc3RUeXBlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVR5cGVzTWF0Y2g8VCBleHRlbmRzIFRlbnNvcj4oYTogVCwgYjogVCk6IFtULCBUXSB7XG4gIGlmIChhLmR0eXBlID09PSBiLmR0eXBlKSB7XG4gICAgcmV0dXJuIFthLCBiXTtcbiAgfVxuICBjb25zdCBkdHlwZSA9IHVwY2FzdFR5cGUoYS5kdHlwZSwgYi5kdHlwZSk7XG4gIHJldHVybiBbYS5jYXN0KGR0eXBlKSwgYi5jYXN0KGR0eXBlKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRUeXBlc01hdGNoKGE6IFRlbnNvciwgYjogVGVuc29yKTogdm9pZCB7XG4gIGFzc2VydChcbiAgICAgIGEuZHR5cGUgPT09IGIuZHR5cGUsXG4gICAgICAoKSA9PiBgVGhlIGR0eXBlcyBvZiB0aGUgZmlyc3QoJHthLmR0eXBlfSkgYW5kYCArXG4gICAgICAgICAgYCBzZWNvbmQoJHtiLmR0eXBlfSkgaW5wdXQgbXVzdCBtYXRjaGApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZW5zb3JJbkxpc3QodGVuc29yOiBUZW5zb3IsIHRlbnNvckxpc3Q6IFRlbnNvcltdKTogYm9vbGVhbiB7XG4gIHJldHVybiB0ZW5zb3JMaXN0LnNvbWUoeCA9PiB4LmlkID09PSB0ZW5zb3IuaWQpO1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIGFueSBgVGVuc29yYHMgZm91bmQgd2l0aGluIHRoZSBwcm92aWRlZCBvYmplY3QuXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lciBhbiBvYmplY3QgdGhhdCBtYXkgYmUgYSBgVGVuc29yYCBvciBtYXkgZGlyZWN0bHkgY29udGFpblxuICogICBgVGVuc29yYHMsIHN1Y2ggYXMgYSBgVGVuc29yW11gIG9yIGB7a2V5OiBUZW5zb3IsIC4uLn1gLiBJbiBnZW5lcmFsIGl0XG4gKiAgIGlzIHNhZmUgdG8gcGFzcyBhbnkgb2JqZWN0IGhlcmUsIGV4Y2VwdCB0aGF0IGBQcm9taXNlYHMgYXJlIG5vdFxuICogICBzdXBwb3J0ZWQuXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBgVGVuc29yc2AgZm91bmQgd2l0aGluIHRoZSBwYXNzZWQgb2JqZWN0LiBJZiB0aGVcbiAqICAgYXJndW1lbnQgaXMgc2ltcGx5IGEgYFRlbnNvcicsIGEgbGlzdCBjb250YWluaW5nIHRoYXQgYFRlbnNvcmAgaXNcbiAqICAgcmV0dXJuZWQuIElmIHRoZSBvYmplY3QgaXMgbm90IGEgYFRlbnNvcmAgb3IgZG9lcyBub3RcbiAqICAgY29udGFpbiBgVGVuc29yc2AsIGFuIGVtcHR5IGxpc3QgaXMgcmV0dXJuZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW5zb3JzSW5Db250YWluZXIocmVzdWx0OiBUZW5zb3JDb250YWluZXIpOiBUZW5zb3JbXSB7XG4gIGNvbnN0IGxpc3Q6IFRlbnNvcltdID0gW107XG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHt9fHZvaWQ+KCk7XG4gIHdhbGtUZW5zb3JDb250YWluZXIocmVzdWx0LCBsaXN0LCBzZWVuKTtcbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIHdhbGtUZW5zb3JDb250YWluZXIoXG4gICAgY29udGFpbmVyOiBUZW5zb3JDb250YWluZXIsIGxpc3Q6IFRlbnNvcltdLCBzZWVuOiBTZXQ8e318dm9pZD4pOiB2b2lkIHtcbiAgaWYgKGNvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBUZW5zb3IpIHtcbiAgICBsaXN0LnB1c2goY29udGFpbmVyKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFpc0l0ZXJhYmxlKGNvbnRhaW5lcikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gSXRlcmF0aW9uIG92ZXIga2V5cyB3b3JrcyBhbHNvIGZvciBhcnJheXMuXG4gIGNvbnN0IGl0ZXJhYmxlID0gY29udGFpbmVyIGFzIFRlbnNvckNvbnRhaW5lckFycmF5O1xuICBmb3IgKGNvbnN0IGsgaW4gaXRlcmFibGUpIHtcbiAgICBjb25zdCB2YWwgPSBpdGVyYWJsZVtrXTtcbiAgICBpZiAoIXNlZW4uaGFzKHZhbCkpIHtcbiAgICAgIHNlZW4uYWRkKHZhbCk7XG4gICAgICB3YWxrVGVuc29yQ29udGFpbmVyKHZhbCwgbGlzdCwgc2Vlbik7XG4gICAgfVxuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmZ1bmN0aW9uIGlzSXRlcmFibGUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSB8fCB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/device_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ // tslint:disable-next-line:no-any
__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser,
    "isMobile",
    ()=>isMobile,
    "mockIsMobile",
    ()=>mockIsMobile
]);
function _isNavigatorDefined() {
    return typeof navigator !== 'undefined' && navigator != null;
}
let isMobileMockValue;
function mockIsMobile(value) {
    isMobileMockValue = value;
}
function isMobile(nav) {
    if (isMobileMockValue !== undefined) {
        return isMobileMockValue;
    }
    if (nav || _isNavigatorDefined()) {
        if (!nav) {
            nav = navigator;
        }
        if (nav.product === 'ReactNative') {
            return true;
        }
        const a = nav.userAgent || nav.vendor || // tslint:disable-next-line:no-any
        (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '');
        // Use `navigator.userAgentData.mobile` as fallback.
        if (!a) {
            // tslint:disable-next-line:no-any
            const navAny = nav;
            return navAny.userAgentData && navAny.userAgentData.mobile;
        }
        // tslint:disable-next-line:max-line-length
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || // tslint:disable-next-line:max-line-length
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
    }
    return false;
}
function isBrowser() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.document != null || typeof WorkerGlobalScope !== 'undefined';
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2RldmljZV91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILGtDQUFrQztBQUNsQyxTQUFTLG1CQUFtQjtJQUMxQixPQUFPLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDO0FBQy9ELENBQUM7QUFFRCxJQUFJLGlCQUFvQyxDQUFDO0FBRXpDLE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBd0I7SUFDbkQsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQzVCLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQWU7SUFDdEMsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxpQkFBaUIsQ0FBQztLQUMxQjtJQUNELElBQUksR0FBRyxJQUFJLG1CQUFtQixFQUFFLEVBQUU7UUFDaEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDakI7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxNQUFNO1lBQ2pDLGtDQUFrQztZQUNsQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUUsTUFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakUsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixrQ0FBa0M7WUFDbEMsTUFBTSxNQUFNLEdBQUcsR0FBVSxDQUFDO1lBQzFCLE9BQU8sTUFBTSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztTQUM1RDtRQUNELDJDQUEyQztRQUMzQyxPQUFPLDBUQUEwVDthQUNyVCxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsMkNBQTJDO1lBQzNDLHlrREFBeWtEO2lCQUNwa0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLFVBQVUsU0FBUztJQUN2QixPQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBQzdELFlBQVk7UUFDWixDQUFDLE9BQU8saUJBQWlCLEtBQUssV0FBVyxDQUFDLENBQUM7QUFDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZnVuY3Rpb24gX2lzTmF2aWdhdG9yRGVmaW5lZCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvciAhPSBudWxsO1xufVxuXG5sZXQgaXNNb2JpbGVNb2NrVmFsdWU6IGJvb2xlYW58dW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9ja0lzTW9iaWxlKHZhbHVlOiBib29sZWFufHVuZGVmaW5lZCkge1xuICBpc01vYmlsZU1vY2tWYWx1ZSA9IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUobmF2PzogTmF2aWdhdG9yKTogYm9vbGVhbiB7XG4gIGlmIChpc01vYmlsZU1vY2tWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGlzTW9iaWxlTW9ja1ZhbHVlO1xuICB9XG4gIGlmIChuYXYgfHwgX2lzTmF2aWdhdG9yRGVmaW5lZCgpKSB7XG4gICAgaWYgKCFuYXYpIHtcbiAgICAgIG5hdiA9IG5hdmlnYXRvcjtcbiAgICB9XG4gICAgaWYgKG5hdi5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBhID0gbmF2LnVzZXJBZ2VudCB8fCBuYXYudmVuZG9yIHx8XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLm9wZXJhIDogJycpO1xuICAgIC8vIFVzZSBgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlYCBhcyBmYWxsYmFjay5cbiAgICBpZiAoIWEpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIGNvbnN0IG5hdkFueSA9IG5hdiBhcyBhbnk7XG4gICAgICByZXR1cm4gbmF2QW55LnVzZXJBZ2VudERhdGEgJiYgbmF2QW55LnVzZXJBZ2VudERhdGEubW9iaWxlO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgcmV0dXJuIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaVxuICAgICAgICAgICAgICAgLnRlc3QoYSkgfHxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaVxuICAgICAgICAgICAgLnRlc3QoYS5zdWJzdHIoMCwgNCkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlcigpOiBib29sZWFuIHtcbiAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgIT0gbnVsbCkgfHxcbiAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcpO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/flags.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$device_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/device_util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
;
;
;
const ENV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])();
/**
 * This file contains environment-related flag registrations.
 */ /** Whether to enable debug mode. */ ENV.registerFlag('DEBUG', ()=>false, (debugValue)=>{
    if (debugValue) {
        console.warn('Debugging mode is ON. The output of every math call will ' + 'be downloaded to CPU and checked for NaNs. ' + 'This significantly impacts performance.');
    }
});
/** Whether we are in a browser (as versus, say, node.js) environment. */ ENV.registerFlag('IS_BROWSER', ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$device_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBrowser"]());
/** Whether we are in a browser (as versus, say, node.js) environment. */ ENV.registerFlag('IS_NODE', ()=>typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.node !== 'undefined');
/** Whether this browser is Chrome. */ ENV.registerFlag('IS_CHROME', ()=>typeof navigator !== 'undefined' && navigator != null && navigator.userAgent != null && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
/** Whether this browser is Safari. */ ENV.registerFlag('IS_SAFARI', ()=>typeof navigator !== 'undefined' && navigator != null && navigator.userAgent != null && /Safari/.test(navigator.userAgent) && /Apple/.test(navigator.vendor));
/**
 * True when the environment is "production" where we disable safety checks
 * to gain performance.
 */ ENV.registerFlag('PROD', ()=>false);
/**
 * Whether to do sanity checks when inferring a shape from user-provided
 * values, used when creating a new tensor.
 */ ENV.registerFlag('TENSORLIKE_CHECK_SHAPE_CONSISTENCY', ()=>ENV.getBool('DEBUG'));
/** Whether deprecation warnings are enabled. */ ENV.registerFlag('DEPRECATION_WARNINGS_ENABLED', ()=>true);
/** True if running unit tests. */ ENV.registerFlag('IS_TEST', ()=>false);
/** Whether to check computation result for errors. */ ENV.registerFlag('CHECK_COMPUTATION_FOR_ERRORS', ()=>ENV.getBool('DEBUG'));
/** Whether the backend needs to wrap input to imageBitmap. */ ENV.registerFlag('WRAP_TO_IMAGEBITMAP', ()=>false);
/** Whether to enable canvas2d willReadFrequently for GPU backends */ ENV.registerFlag('CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU', ()=>false);
/** Whether to use setTimeoutCustom */ ENV.registerFlag('USE_SETTIMEOUTCUSTOM', ()=>false); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2ZsYWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE9BQU8sVUFBVSxDQUFDO0FBRWxCLE9BQU8sS0FBSyxXQUFXLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbEMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFFbEI7O0dBRUc7QUFFSCxvQ0FBb0M7QUFDcEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFO0lBQ2xELElBQUksVUFBVSxFQUFFO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FDUiwyREFBMkQ7WUFDM0QsNkNBQTZDO1lBQzdDLHlDQUF5QyxDQUFDLENBQUM7S0FDaEQ7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILHlFQUF5RTtBQUN6RSxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUU5RCx5RUFBeUU7QUFDekUsR0FBRyxDQUFDLFlBQVksQ0FDWixTQUFTLEVBQ1QsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUM7SUFDbEMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO0lBQ3pDLENBQUMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBRXhELHNDQUFzQztBQUN0QyxHQUFHLENBQUMsWUFBWSxDQUNaLFdBQVcsRUFDWCxHQUFHLEVBQUUsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxJQUFJLElBQUk7SUFDdkQsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ2pFLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFN0Msc0NBQXNDO0FBQ3RDLEdBQUcsQ0FBQyxZQUFZLENBQ1osV0FBVyxFQUNYLEdBQUcsRUFBRSxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLElBQUksSUFBSTtJQUN2RCxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN4Qzs7O0dBR0c7QUFDSCxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV0Qzs7O0dBR0c7QUFDSCxHQUFHLENBQUMsWUFBWSxDQUNaLG9DQUFvQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUV0RSxnREFBZ0Q7QUFDaEQsR0FBRyxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3RCxrQ0FBa0M7QUFDbEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFekMsc0RBQXNEO0FBQ3RELEdBQUcsQ0FBQyxZQUFZLENBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRTdFLDhEQUE4RDtBQUM5RCxHQUFHLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXJELHFFQUFxRTtBQUNyRSxHQUFHLENBQUMsWUFBWSxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXZFLHNDQUFzQztBQUN0QyxHQUFHLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0ICcuL2VuZ2luZSc7XG5cbmltcG9ydCAqIGFzIGRldmljZV91dGlsIGZyb20gJy4vZGV2aWNlX3V0aWwnO1xuaW1wb3J0IHtlbnZ9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5jb25zdCBFTlYgPSBlbnYoKTtcblxuLyoqXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgZW52aXJvbm1lbnQtcmVsYXRlZCBmbGFnIHJlZ2lzdHJhdGlvbnMuXG4gKi9cblxuLyoqIFdoZXRoZXIgdG8gZW5hYmxlIGRlYnVnIG1vZGUuICovXG5FTlYucmVnaXN0ZXJGbGFnKCdERUJVRycsICgpID0+IGZhbHNlLCBkZWJ1Z1ZhbHVlID0+IHtcbiAgaWYgKGRlYnVnVmFsdWUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdEZWJ1Z2dpbmcgbW9kZSBpcyBPTi4gVGhlIG91dHB1dCBvZiBldmVyeSBtYXRoIGNhbGwgd2lsbCAnICtcbiAgICAgICAgJ2JlIGRvd25sb2FkZWQgdG8gQ1BVIGFuZCBjaGVja2VkIGZvciBOYU5zLiAnICtcbiAgICAgICAgJ1RoaXMgc2lnbmlmaWNhbnRseSBpbXBhY3RzIHBlcmZvcm1hbmNlLicpO1xuICB9XG59KTtcblxuLyoqIFdoZXRoZXIgd2UgYXJlIGluIGEgYnJvd3NlciAoYXMgdmVyc3VzLCBzYXksIG5vZGUuanMpIGVudmlyb25tZW50LiAqL1xuRU5WLnJlZ2lzdGVyRmxhZygnSVNfQlJPV1NFUicsICgpID0+IGRldmljZV91dGlsLmlzQnJvd3NlcigpKTtcblxuLyoqIFdoZXRoZXIgd2UgYXJlIGluIGEgYnJvd3NlciAoYXMgdmVyc3VzLCBzYXksIG5vZGUuanMpIGVudmlyb25tZW50LiAqL1xuRU5WLnJlZ2lzdGVyRmxhZyhcbiAgICAnSVNfTk9ERScsXG4gICAgKCkgPT4gKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgKHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgKHR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUgIT09ICd1bmRlZmluZWQnKSk7XG5cbi8qKiBXaGV0aGVyIHRoaXMgYnJvd3NlciBpcyBDaHJvbWUuICovXG5FTlYucmVnaXN0ZXJGbGFnKFxuICAgICdJU19DSFJPTUUnLFxuICAgICgpID0+IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvciAhPSBudWxsICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCAmJiAvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmXG4gICAgICAgIC9Hb29nbGUgSW5jLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpKTtcblxuLyoqIFdoZXRoZXIgdGhpcyBicm93c2VyIGlzIFNhZmFyaS4gKi9cbkVOVi5yZWdpc3RlckZsYWcoXG4gICAgJ0lTX1NBRkFSSScsXG4gICAgKCkgPT4gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yICE9IG51bGwgJiZcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsICYmIC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiZcbiAgICAgICAgL0FwcGxlLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpKTtcbi8qKlxuICogVHJ1ZSB3aGVuIHRoZSBlbnZpcm9ubWVudCBpcyBcInByb2R1Y3Rpb25cIiB3aGVyZSB3ZSBkaXNhYmxlIHNhZmV0eSBjaGVja3NcbiAqIHRvIGdhaW4gcGVyZm9ybWFuY2UuXG4gKi9cbkVOVi5yZWdpc3RlckZsYWcoJ1BST0QnLCAoKSA9PiBmYWxzZSk7XG5cbi8qKlxuICogV2hldGhlciB0byBkbyBzYW5pdHkgY2hlY2tzIHdoZW4gaW5mZXJyaW5nIGEgc2hhcGUgZnJvbSB1c2VyLXByb3ZpZGVkXG4gKiB2YWx1ZXMsIHVzZWQgd2hlbiBjcmVhdGluZyBhIG5ldyB0ZW5zb3IuXG4gKi9cbkVOVi5yZWdpc3RlckZsYWcoXG4gICAgJ1RFTlNPUkxJS0VfQ0hFQ0tfU0hBUEVfQ09OU0lTVEVOQ1knLCAoKSA9PiBFTlYuZ2V0Qm9vbCgnREVCVUcnKSk7XG5cbi8qKiBXaGV0aGVyIGRlcHJlY2F0aW9uIHdhcm5pbmdzIGFyZSBlbmFibGVkLiAqL1xuRU5WLnJlZ2lzdGVyRmxhZygnREVQUkVDQVRJT05fV0FSTklOR1NfRU5BQkxFRCcsICgpID0+IHRydWUpO1xuXG4vKiogVHJ1ZSBpZiBydW5uaW5nIHVuaXQgdGVzdHMuICovXG5FTlYucmVnaXN0ZXJGbGFnKCdJU19URVNUJywgKCkgPT4gZmFsc2UpO1xuXG4vKiogV2hldGhlciB0byBjaGVjayBjb21wdXRhdGlvbiByZXN1bHQgZm9yIGVycm9ycy4gKi9cbkVOVi5yZWdpc3RlckZsYWcoJ0NIRUNLX0NPTVBVVEFUSU9OX0ZPUl9FUlJPUlMnLCAoKSA9PiBFTlYuZ2V0Qm9vbCgnREVCVUcnKSk7XG5cbi8qKiBXaGV0aGVyIHRoZSBiYWNrZW5kIG5lZWRzIHRvIHdyYXAgaW5wdXQgdG8gaW1hZ2VCaXRtYXAuICovXG5FTlYucmVnaXN0ZXJGbGFnKCdXUkFQX1RPX0lNQUdFQklUTUFQJywgKCkgPT4gZmFsc2UpO1xuXG4vKiogV2hldGhlciB0byBlbmFibGUgY2FudmFzMmQgd2lsbFJlYWRGcmVxdWVudGx5IGZvciBHUFUgYmFja2VuZHMgKi9cbkVOVi5yZWdpc3RlckZsYWcoJ0NBTlZBUzJEX1dJTExfUkVBRF9GUkVRVUVOVExZX0ZPUl9HUFUnLCAoKSA9PiBmYWxzZSk7XG5cbi8qKiBXaGV0aGVyIHRvIHVzZSBzZXRUaW1lb3V0Q3VzdG9tICovXG5FTlYucmVnaXN0ZXJGbGFnKCdVU0VfU0VUVElNRU9VVENVU1RPTScsICgpID0+IGZhbHNlKTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "convertToTensor",
    ()=>convertToTensor,
    "convertToTensorArray",
    ()=>convertToTensorArray,
    "inferShape",
    ()=>inferShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
function inferShape(val, dtype) {
    let firstElem = val;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(val)) {
        return dtype === 'string' ? [] : [
            val.length
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebGLData"])(val)) {
        const usedChannels = val.channels || 'RGBA';
        return [
            val.height,
            val.width * usedChannels.length
        ];
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWebGPUData"])(val)) {
        return [
            val.buffer.size / (dtype == null ? 4 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesPerElement"])(dtype))
        ];
    }
    if (!Array.isArray(val)) {
        return []; // Scalar.
    }
    const shape = [];
    while(Array.isArray(firstElem) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(firstElem) && dtype !== 'string'){
        shape.push(firstElem.length);
        firstElem = firstElem[0];
    }
    if (Array.isArray(val) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('TENSORLIKE_CHECK_SHAPE_CONSISTENCY')) {
        deepAssertShapeConsistency(val, shape, []);
    }
    return shape;
}
function deepAssertShapeConsistency(val, shape, indices) {
    indices = indices || [];
    if (!Array.isArray(val) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(val)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(shape.length === 0, ()=>`Element arr[${indices.join('][')}] is a primitive, ` + `but should be an array/TypedArray of ${shape[0]} elements`);
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(shape.length > 0, ()=>`Element arr[${indices.join('][')}] should be a primitive, ` + `but is an array of ${val.length} elements`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(val.length === shape[0], ()=>`Element arr[${indices.join('][')}] should have ${shape[0]} ` + `elements, but has ${val.length} elements`);
    const subShape = shape.slice(1);
    for(let i = 0; i < val.length; ++i){
        deepAssertShapeConsistency(val[i], subShape, indices.concat(i));
    }
}
function assertDtype(expectedDtype, actualDType, argName, functionName) {
    if (expectedDtype === 'string_or_numeric') {
        return;
    }
    if (expectedDtype == null) {
        throw new Error(`Expected dtype cannot be null.`);
    }
    if (expectedDtype !== 'numeric' && expectedDtype !== actualDType || expectedDtype === 'numeric' && actualDType === 'string') {
        throw new Error(`Argument '${argName}' passed to '${functionName}' must ` + `be ${expectedDtype} tensor, but got ${actualDType} tensor`);
    }
}
function convertToTensor(x, argName, functionName, parseAsDtype = 'numeric') {
    if (x instanceof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGlobalTensorClass"])()) {
        assertDtype(parseAsDtype, x.dtype, argName, functionName);
        return x;
    }
    let inferredDtype = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inferDtype"])(x);
    // If the user expects a bool/int/float, use that info to update the
    // inferredDtype when it is not a string.
    if (inferredDtype !== 'string' && [
        'bool',
        'int32',
        'float32'
    ].indexOf(parseAsDtype) >= 0) {
        inferredDtype = parseAsDtype;
    }
    assertDtype(parseAsDtype, inferredDtype, argName, functionName);
    if (x == null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(x) && !Array.isArray(x) && typeof x !== 'number' && typeof x !== 'boolean' && typeof x !== 'string') {
        const type = x == null ? 'null' : x.constructor.name;
        throw new Error(`Argument '${argName}' passed to '${functionName}' must be a ` + `Tensor or TensorLike, but got '${type}'`);
    }
    const inferredShape = inferShape(x, inferredDtype);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(x) && !Array.isArray(x)) {
        x = [
            x
        ];
    }
    const skipTypedArray = true;
    const values = inferredDtype !== 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toTypedArray"])(x, inferredDtype) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flatten"])(x, [], skipTypedArray);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].makeTensor(values, inferredShape, inferredDtype);
}
function convertToTensorArray(arg, argName, functionName, parseAsDtype = 'numeric') {
    if (!Array.isArray(arg)) {
        throw new Error(`Argument ${argName} passed to ${functionName} must be a ` + '`Tensor[]` or `TensorLike[]`');
    }
    const tensors = arg;
    return tensors.map((t, i)=>convertToTensor(t, `${argName}[${i}]`, functionName, parseAsDtype));
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yX3V0aWxfZW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy90ZW5zb3JfdXRpbF9lbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxvQkFBb0IsRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUN0RCxPQUFPLEVBQVcsV0FBVyxFQUFFLFlBQVksRUFBb0MsTUFBTSxTQUFTLENBQUM7QUFDL0YsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUU1QyxNQUFNLFVBQVUsVUFBVSxDQUN0QixHQUFvQyxFQUFFLEtBQWdCO0lBQ3hELElBQUksU0FBUyxHQUFlLEdBQUcsQ0FBQztJQUVoQyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0M7SUFFRCxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNwQixNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0RDtTQUFNLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxHQUFH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QUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0VOR0lORX0gZnJvbSAnLi9lbmdpbmUnO1xuaW1wb3J0IHtlbnZ9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtnZXRHbG9iYWxUZW5zb3JDbGFzcywgVGVuc29yfSBmcm9tICcuL3RlbnNvcic7XG5pbXBvcnQge0RhdGFUeXBlLCBpc1dlYkdMRGF0YSwgaXNXZWJHUFVEYXRhLCBUZW5zb3JMaWtlLCBXZWJHTERhdGEsIFdlYkdQVURhdGF9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHthc3NlcnQsIGZsYXR0ZW4sIGluZmVyRHR5cGUsIGlzVHlwZWRBcnJheSwgdG9UeXBlZEFycmF5fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtieXRlc1BlckVsZW1lbnR9IGZyb20gJy4vdXRpbF9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluZmVyU2hhcGUoXG4gICAgdmFsOiBUZW5zb3JMaWtlfFdlYkdMRGF0YXxXZWJHUFVEYXRhLCBkdHlwZT86IERhdGFUeXBlKTogbnVtYmVyW10ge1xuICBsZXQgZmlyc3RFbGVtOiB0eXBlb2YgdmFsID0gdmFsO1xuXG4gIGlmIChpc1R5cGVkQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBkdHlwZSA9PT0gJ3N0cmluZycgPyBbXSA6IFt2YWwubGVuZ3RoXTtcbiAgfVxuXG4gIGlmIChpc1dlYkdMRGF0YSh2YWwpKSB7XG4gICAgY29uc3QgdXNlZENoYW5uZWxzID0gdmFsLmNoYW5uZWxzIHx8ICdSR0JBJztcbiAgICByZXR1cm4gW3ZhbC5oZWlnaHQsIHZhbC53aWR0aCAqIHVzZWRDaGFubmVscy5sZW5ndGhdO1xuICB9IGVsc2UgaWYgKGlzV2ViR1BVRGF0YSh2YWwpKSB7XG4gICAgcmV0dXJuIFt2YWwuYnVmZmVyLnNpemUgLyAoZHR5cGUgPT0gbnVsbCA/IDQgOiBieXRlc1BlckVsZW1lbnQoZHR5cGUpKV07XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gW107ICAvLyBTY2FsYXIuXG4gIH1cbiAgY29uc3Qgc2hhcGU6IG51bWJlcltdID0gW107XG5cbiAgd2hpbGUgKEFycmF5LmlzQXJyYXkoZmlyc3RFbGVtKSB8fFxuICAgICAgICAgaXNUeXBlZEFycmF5KGZpcnN0RWxlbSkgJiYgZHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgc2hhcGUucHVzaChmaXJzdEVsZW0ubGVuZ3RoKTtcbiAgICBmaXJzdEVsZW0gPSBmaXJzdEVsZW1bMF07XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSAmJlxuICAgICAgZW52KCkuZ2V0Qm9vbCgnVEVOU09STElLRV9DSEVDS19TSEFQRV9DT05TSVNURU5DWScpKSB7XG4gICAgZGVlcEFzc2VydFNoYXBlQ29uc2lzdGVuY3kodmFsLCBzaGFwZSwgW10pO1xuICB9XG5cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG5mdW5jdGlvbiBkZWVwQXNzZXJ0U2hhcGVDb25zaXN0ZW5jeShcbiAgICB2YWw6IFRlbnNvckxpa2UsIHNoYXBlOiBudW1iZXJbXSwgaW5kaWNlczogbnVtYmVyW10pIHtcbiAgaW5kaWNlcyA9IGluZGljZXMgfHwgW107XG4gIGlmICghKEFycmF5LmlzQXJyYXkodmFsKSkgJiYgIWlzVHlwZWRBcnJheSh2YWwpKSB7XG4gICAgYXNzZXJ0KFxuICAgICAgICBzaGFwZS5sZW5ndGggPT09IDAsXG4gICAgICAgICgpID0+IGBFbGVtZW50IGFyclske2luZGljZXMuam9pbignXVsnKX1dIGlzIGEgcHJpbWl0aXZlLCBgICtcbiAgICAgICAgICAgIGBidXQgc2hvdWxkIGJlIGFuIGFycmF5L1R5cGVkQXJyYXkgb2YgJHtzaGFwZVswXX0gZWxlbWVudHNgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgYXNzZXJ0KFxuICAgICAgc2hhcGUubGVuZ3RoID4gMCxcbiAgICAgICgpID0+IGBFbGVtZW50IGFyclske2luZGljZXMuam9pbignXVsnKX1dIHNob3VsZCBiZSBhIHByaW1pdGl2ZSwgYCArXG4gICAgICAgICAgYGJ1dCBpcyBhbiBhcnJheSBvZiAke3ZhbC5sZW5ndGh9IGVsZW1lbnRzYCk7XG4gIGFzc2VydChcbiAgICAgIHZhbC5sZW5ndGggPT09IHNoYXBlWzBdLFxuICAgICAgKCkgPT4gYEVsZW1lbnQgYXJyWyR7aW5kaWNlcy5qb2luKCddWycpfV0gc2hvdWxkIGhhdmUgJHtzaGFwZVswXX0gYCArXG4gICAgICAgICAgYGVsZW1lbnRzLCBidXQgaGFzICR7dmFsLmxlbmd0aH0gZWxlbWVudHNgKTtcbiAgY29uc3Qgc3ViU2hhcGUgPSBzaGFwZS5zbGljZSgxKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyArK2kpIHtcbiAgICBkZWVwQXNzZXJ0U2hhcGVDb25zaXN0ZW5jeSh2YWxbaV0sIHN1YlNoYXBlLCBpbmRpY2VzLmNvbmNhdChpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0RHR5cGUoXG4gICAgZXhwZWN0ZWREdHlwZTogRGF0YVR5cGV8J251bWVyaWMnfCdzdHJpbmdfb3JfbnVtZXJpYycsXG4gICAgYWN0dWFsRFR5cGU6IERhdGFUeXBlLCBhcmdOYW1lOiBzdHJpbmcsIGZ1bmN0aW9uTmFtZTogc3RyaW5nKSB7XG4gIGlmIChleHBlY3RlZER0eXBlID09PSAnc3RyaW5nX29yX251bWVyaWMnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChleHBlY3RlZER0eXBlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGR0eXBlIGNhbm5vdCBiZSBudWxsLmApO1xuICB9XG4gIGlmIChleHBlY3RlZER0eXBlICE9PSAnbnVtZXJpYycgJiYgZXhwZWN0ZWREdHlwZSAhPT0gYWN0dWFsRFR5cGUgfHxcbiAgICAgIGV4cGVjdGVkRHR5cGUgPT09ICdudW1lcmljJyAmJiBhY3R1YWxEVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBBcmd1bWVudCAnJHthcmdOYW1lfScgcGFzc2VkIHRvICcke2Z1bmN0aW9uTmFtZX0nIG11c3QgYCArXG4gICAgICAgIGBiZSAke2V4cGVjdGVkRHR5cGV9IHRlbnNvciwgYnV0IGdvdCAke2FjdHVhbERUeXBlfSB0ZW5zb3JgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvVGVuc29yPFQgZXh0ZW5kcyBUZW5zb3I+KFxuICAgIHg6IFR8VGVuc29yTGlrZSwgYXJnTmFtZTogc3RyaW5nLCBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBwYXJzZUFzRHR5cGU6IERhdGFUeXBlfCdudW1lcmljJ3wnc3RyaW5nX29yX251bWVyaWMnID0gJ251bWVyaWMnKTogVCB7XG4gIGlmICh4IGluc3RhbmNlb2YgZ2V0R2xvYmFsVGVuc29yQ2xhc3MoKSkge1xuICAgIGFzc2VydER0eXBlKHBhcnNlQXNEdHlwZSwgeC5kdHlwZSwgYXJnTmFtZSwgZnVuY3Rpb25OYW1lKTtcbiAgICByZXR1cm4geDtcbiAgfVxuICBsZXQgaW5mZXJyZWREdHlwZSA9IGluZmVyRHR5cGUoeCk7XG4gIC8vIElmIHRoZSB1c2VyIGV4cGVjdHMgYSBib29sL2ludC9mbG9hdCwgdXNlIHRoYXQgaW5mbyB0byB1cGRhdGUgdGhlXG4gIC8vIGluZmVycmVkRHR5cGUgd2hlbiBpdCBpcyBub3QgYSBzdHJpbmcuXG4gIGlmIChpbmZlcnJlZER0eXBlICE9PSAnc3RyaW5nJyAmJlxuICAgICAgWydib29sJywgJ2ludDMyJywgJ2Zsb2F0MzInXS5pbmRleE9mKHBhcnNlQXNEdHlwZSkgPj0gMCkge1xuICAgIGluZmVycmVkRHR5cGUgPSBwYXJzZUFzRHR5cGUgYXMgRGF0YVR5cGU7XG4gIH1cbiAgYXNzZXJ0RHR5cGUocGFyc2VBc0R0eXBlLCBpbmZlcnJlZER0eXBlLCBhcmdOYW1lLCBmdW5jdGlvbk5hbWUpO1xuXG4gIGlmICgoeCA9PSBudWxsKSB8fFxuICAgICAgKCFpc1R5cGVkQXJyYXkoeCkgJiYgIUFycmF5LmlzQXJyYXkoeCkgJiYgdHlwZW9mIHggIT09ICdudW1iZXInICYmXG4gICAgICAgdHlwZW9mIHggIT09ICdib29sZWFuJyAmJiB0eXBlb2YgeCAhPT0gJ3N0cmluZycpKSB7XG4gICAgY29uc3QgdHlwZSA9IHggPT0gbnVsbCA/ICdudWxsJyA6ICh4IGFzIHt9KS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFyZ3VtZW50ICcke2FyZ05hbWV9JyBwYXNzZWQgdG8gJyR7ZnVuY3Rpb25OYW1lfScgbXVzdCBiZSBhIGAgK1xuICAgICAgICBgVGVuc29yIG9yIFRlbnNvckxpa2UsIGJ1dCBnb3QgJyR7dHlwZX0nYCk7XG4gIH1cbiAgY29uc3QgaW5mZXJyZWRTaGFwZSA9IGluZmVyU2hhcGUoeCwgaW5mZXJyZWREdHlwZSk7XG4gIGlmICghaXNUeXBlZEFycmF5KHgpICYmICFBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgeCA9IFt4XSBhcyBudW1iZXJbXTtcbiAgfVxuICBjb25zdCBza2lwVHlwZWRBcnJheSA9IHRydWU7XG4gIGNvbnN0IHZhbHVlcyA9IGluZmVycmVkRHR5cGUgIT09ICdzdHJpbmcnID9cbiAgICAgIHRvVHlwZWRBcnJheSh4LCBpbmZlcnJlZER0eXBlIGFzIERhdGFUeXBlKSA6XG4gICAgICBmbGF0dGVuKHggYXMgc3RyaW5nW10sIFtdLCBza2lwVHlwZWRBcnJheSkgYXMgc3RyaW5nW107XG4gIHJldHVybiBFTkdJTkUubWFrZVRlbnNvcih2YWx1ZXMsIGluZmVycmVkU2hhcGUsIGluZmVycmVkRHR5cGUpIGFzIFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9UZW5zb3JBcnJheTxUIGV4dGVuZHMgVGVuc29yPihcbiAgICBhcmc6IEFycmF5PFR8VGVuc29yTGlrZT4sIGFyZ05hbWU6IHN0cmluZywgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgcGFyc2VBc0R0eXBlOiBEYXRhVHlwZXwnbnVtZXJpYyd8J3N0cmluZ19vcl9udW1lcmljJyA9ICdudW1lcmljJyk6IFRbXSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQXJndW1lbnQgJHthcmdOYW1lfSBwYXNzZWQgdG8gJHtmdW5jdGlvbk5hbWV9IG11c3QgYmUgYSBgICtcbiAgICAgICAgJ2BUZW5zb3JbXWAgb3IgYFRlbnNvckxpa2VbXWAnKTtcbiAgfVxuICBjb25zdCB0ZW5zb3JzID0gYXJnIGFzIFRbXTtcbiAgcmV0dXJuIHRlbnNvcnMubWFwKFxuICAgICAgKHQsIGkpID0+XG4gICAgICAgICAgY29udmVydFRvVGVuc29yKHQsIGAke2FyZ05hbWV9WyR7aX1dYCwgZnVuY3Rpb25OYW1lLCBwYXJzZUFzRHR5cGUpKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "backend",
    ()=>backend,
    "deprecationWarn",
    ()=>deprecationWarn,
    "disableDeprecationWarnings",
    ()=>disableDeprecationWarnings,
    "dispose",
    ()=>dispose,
    "disposeVariables",
    ()=>disposeVariables,
    "enableDebugMode",
    ()=>enableDebugMode,
    "enableProdMode",
    ()=>enableProdMode,
    "engine",
    ()=>engine,
    "findBackend",
    ()=>findBackend,
    "findBackendFactory",
    ()=>findBackendFactory,
    "getBackend",
    ()=>getBackend,
    "keep",
    ()=>keep,
    "memory",
    ()=>memory,
    "profile",
    ()=>profile,
    "ready",
    ()=>ready,
    "registerBackend",
    ()=>registerBackend,
    "removeBackend",
    ()=>removeBackend,
    "setBackend",
    ()=>setBackend,
    "setPlatform",
    ()=>setPlatform,
    "tidy",
    ()=>tidy,
    "time",
    ()=>time
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-ssr] (ecmascript)");
;
;
;
;
function enableProdMode() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().set('PROD', true);
}
function enableDebugMode() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().set('DEBUG', true);
}
function disableDeprecationWarnings() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().set('DEPRECATION_WARNINGS_ENABLED', false);
    console.warn(`TensorFlow.js deprecation warnings have been disabled.`);
}
function deprecationWarn(msg) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().getBool('DEPRECATION_WARNINGS_ENABLED')) {
        console.warn(msg + ' You can disable deprecation warnings with ' + 'tf.disableDeprecationWarnings().');
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDeprecationWarningFn"])(deprecationWarn);
function disposeVariables() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].disposeVariables();
}
function engine() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"];
}
function memory() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].memory();
}
function profile(f) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].profile(f);
}
function tidy(nameOrFn, fn) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].tidy(nameOrFn, fn);
}
function dispose(container) {
    const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTensorsInContainer"])(container);
    tensors.forEach((tensor)=>tensor.dispose());
}
function keep(result) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].keep(result);
}
function time(f) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].time(f);
}
function setBackend(backendName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].setBackend(backendName);
}
function ready() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].ready();
}
function getBackend() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].backendName;
}
function removeBackend(name) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].removeBackend(name);
}
function findBackend(name) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].findBackend(name);
}
function findBackendFactory(name) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].findBackendFactory(name);
}
function registerBackend(name, factory, priority = 1) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].registerBackend(name, factory, priority);
}
function backend() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].backend;
}
function setPlatform(platformName, platform) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().setPlatform(platformName, platform);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvZ2xvYmFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFHSCxPQUFPLEVBQUMsTUFBTSxFQUF1RCxNQUFNLFVBQVUsQ0FBQztBQUN0RixPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2xDLE9BQU8sRUFBQyx1QkFBdUIsRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUV6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsY0FBYztJQUM1QixHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxVQUFVLGVBQWU7SUFDN0IsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsNkNBQTZDO0FBQzdDLE1BQU0sVUFBVSwwQkFBMEI7SUFDeEMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQsaURBQWlEO0FBQ2pELE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBVztJQUN6QyxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1FBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQ1IsR0FBRyxHQUFHLDZDQUE2QztZQUNuRCxrQ0FBa0MsQ0FBQyxDQUFDO0tBQ3pDO0FBQ0gsQ0FBQztBQUNELHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXpDOzs7O0dBSUc7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LEVBQUUsUUFBa0I7SUFDbEUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0tlcm5lbEJhY2tlbmR9IGZyb20gJy4vYmFja2VuZHMvYmFja2VuZCc7XG5pbXBvcnQge0VOR0lORSwgRW5naW5lLCBNZW1vcnlJbmZvLCBQcm9maWxlSW5mbywgU2NvcGVGbiwgVGltaW5nSW5mb30gZnJvbSAnLi9lbmdpbmUnO1xuaW1wb3J0IHtlbnZ9IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICcuL3BsYXRmb3Jtcy9wbGF0Zm9ybSc7XG5pbXBvcnQge3NldERlcHJlY2F0aW9uV2FybmluZ0ZuLCBUZW5zb3J9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7VGVuc29yQ29udGFpbmVyfSBmcm9tICcuL3RlbnNvcl90eXBlcyc7XG5pbXBvcnQge2dldFRlbnNvcnNJbkNvbnRhaW5lcn0gZnJvbSAnLi90ZW5zb3JfdXRpbCc7XG5cbi8qKlxuICogRW5hYmxlcyBwcm9kdWN0aW9uIG1vZGUgd2hpY2ggZGlzYWJsZXMgY29ycmVjdG5lc3MgY2hlY2tzIGluIGZhdm9yIG9mXG4gKiBwZXJmb3JtYW5jZS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnRW52aXJvbm1lbnQnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlUHJvZE1vZGUoKTogdm9pZCB7XG4gIGVudigpLnNldCgnUFJPRCcsIHRydWUpO1xufVxuXG4vKipcbiAqIEVuYWJsZXMgZGVidWcgbW9kZSB3aGljaCB3aWxsIGxvZyBpbmZvcm1hdGlvbiBhYm91dCBhbGwgZXhlY3V0ZWQga2VybmVsczpcbiAqIHRoZSBlbGFwc2VkIHRpbWUgb2YgdGhlIGtlcm5lbCBleGVjdXRpb24sIGFzIHdlbGwgYXMgdGhlIHJhbmssIHNoYXBlLCBhbmRcbiAqIHNpemUgb2YgdGhlIG91dHB1dCB0ZW5zb3IuXG4gKlxuICogRGVidWcgbW9kZSB3aWxsIHNpZ25pZmljYW50bHkgc2xvdyBkb3duIHlvdXIgYXBwbGljYXRpb24gYXMgaXQgd2lsbFxuICogZG93bmxvYWQgdGhlIHJlc3VsdCBvZiBldmVyeSBvcGVyYXRpb24gdG8gdGhlIENQVS4gVGhpcyBzaG91bGQgbm90IGJlIHVzZWQgaW5cbiAqIHByb2R1Y3Rpb24uIERlYnVnIG1vZGUgZG9lcyBub3QgYWZmZWN0IHRoZSB0aW1pbmcgaW5mb3JtYXRpb24gb2YgdGhlIGtlcm5lbFxuICogZXhlY3V0aW9uIGFzIHdlIGRvIG5vdCBtZWFzdXJlIGRvd25sb2FkIHRpbWUgaW4gdGhlIGtlcm5lbCBleGVjdXRpb24gdGltZS5cbiAqXG4gKiBTZWUgYWxzbzogYHRmLnByb2ZpbGVgLCBgdGYubWVtb3J5YC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnRW52aXJvbm1lbnQnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRGVidWdNb2RlKCk6IHZvaWQge1xuICBlbnYoKS5zZXQoJ0RFQlVHJywgdHJ1ZSk7XG59XG5cbi8qKiBHbG9iYWxseSBkaXNhYmxlcyBkZXByZWNhdGlvbiB3YXJuaW5ncyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzKCk6IHZvaWQge1xuICBlbnYoKS5zZXQoJ0RFUFJFQ0FUSU9OX1dBUk5JTkdTX0VOQUJMRUQnLCBmYWxzZSk7XG4gIGNvbnNvbGUud2FybihgVGVuc29yRmxvdy5qcyBkZXByZWNhdGlvbiB3YXJuaW5ncyBoYXZlIGJlZW4gZGlzYWJsZWQuYCk7XG59XG5cbi8qKiBXYXJuIHVzZXJzIGFib3V0IGRlcHJlY2F0ZWQgZnVuY3Rpb25hbGl0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGlvbldhcm4obXNnOiBzdHJpbmcpIHtcbiAgaWYgKGVudigpLmdldEJvb2woJ0RFUFJFQ0FUSU9OX1dBUk5JTkdTX0VOQUJMRUQnKSkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgbXNnICsgJyBZb3UgY2FuIGRpc2FibGUgZGVwcmVjYXRpb24gd2FybmluZ3Mgd2l0aCAnICtcbiAgICAgICAgJ3RmLmRpc2FibGVEZXByZWNhdGlvbldhcm5pbmdzKCkuJyk7XG4gIH1cbn1cbnNldERlcHJlY2F0aW9uV2FybmluZ0ZuKGRlcHJlY2F0aW9uV2Fybik7XG5cbi8qKlxuICogRGlzcG9zZSBhbGwgdmFyaWFibGVzIGtlcHQgaW4gYmFja2VuZCBlbmdpbmUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0Vudmlyb25tZW50J31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2VWYXJpYWJsZXMoKTogdm9pZCB7XG4gIEVOR0lORS5kaXNwb3NlVmFyaWFibGVzKCk7XG59XG5cbi8qKlxuICogSXQgcmV0dXJucyB0aGUgZ2xvYmFsIGVuZ2luZSB0aGF0IGtlZXBzIHRyYWNrIG9mIGFsbCB0ZW5zb3JzIGFuZCBiYWNrZW5kcy5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnRW52aXJvbm1lbnQnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5naW5lKCk6IEVuZ2luZSB7XG4gIHJldHVybiBFTkdJTkU7XG59XG5cbi8qKlxuICogUmV0dXJucyBtZW1vcnkgaW5mbyBhdCB0aGUgY3VycmVudCB0aW1lIGluIHRoZSBwcm9ncmFtLiBUaGUgcmVzdWx0IGlzIGFuXG4gKiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogLSBgbnVtQnl0ZXNgOiBOdW1iZXIgb2YgYnl0ZXMgYWxsb2NhdGVkICh1bmRpc3Bvc2VkKSBhdCB0aGlzIHRpbWUuXG4gKiAtIGBudW1UZW5zb3JzYDogTnVtYmVyIG9mIHVuaXF1ZSB0ZW5zb3JzIGFsbG9jYXRlZC5cbiAqIC0gYG51bURhdGFCdWZmZXJzYDogTnVtYmVyIG9mIHVuaXF1ZSBkYXRhIGJ1ZmZlcnMgYWxsb2NhdGVkXG4gKiAgICh1bmRpc3Bvc2VkKSBhdCB0aGlzIHRpbWUsIHdoaWNoIGlzIOKJpCB0aGUgbnVtYmVyIG9mIHRlbnNvcnNcbiAqICAgKGUuZy4gYGEucmVzaGFwZShuZXdTaGFwZSlgIG1ha2VzIGEgbmV3IFRlbnNvciB0aGF0IHNoYXJlcyB0aGUgc2FtZVxuICogICBkYXRhIGJ1ZmZlciB3aXRoIGBhYCkuXG4gKiAtIGB1bnJlbGlhYmxlYDogVHJ1ZSBpZiB0aGUgbWVtb3J5IHVzYWdlIGlzIHVucmVsaWFibGUuIFNlZSBgcmVhc29uc2Agd2hlblxuICogICAgYHVucmVsaWFibGVgIGlzIHRydWUuXG4gKiAtIGByZWFzb25zYDogYHN0cmluZ1tdYCwgcmVhc29ucyB3aHkgdGhlIG1lbW9yeSBpcyB1bnJlbGlhYmxlLCBwcmVzZW50IGlmXG4gKiAgICBgdW5yZWxpYWJsZWAgaXMgdHJ1ZS5cbiAqXG4gKiBXZWJHTCBQcm9wZXJ0aWVzOlxuICogLSBgbnVtQnl0ZXNJbkdQVWA6IE51bWJlciBvZiBieXRlcyBhbGxvY2F0ZWQgKHVuZGlzcG9zZWQpIGluIHRoZSBHUFUgb25seSBhdFxuICogICAgIHRoaXMgdGltZS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnUGVyZm9ybWFuY2UnLCBzdWJoZWFkaW5nOiAnTWVtb3J5J31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbW9yeSgpOiBNZW1vcnlJbmZvIHtcbiAgcmV0dXJuIEVOR0lORS5tZW1vcnkoKTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGYoKWAgYW5kIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGZ1bmN0aW9uJ3MgbWVtb3J5IHVzZTpcbiAqIC0gYG5ld0J5dGVzYDogdGhlIG51bWJlciBvZiBuZXcgYnl0ZXMgYWxsb2NhdGVkXG4gKiAtIGBuZXdUZW5zb3JzYDogdGhlIG51bWJlciBvZiBuZXcgdGVuc29ycyBjcmVhdGVkXG4gKiAtIGBwZWFrQnl0ZXNgOiB0aGUgcGVhayBudW1iZXIgb2YgYnl0ZXMgYWxsb2NhdGVkXG4gKiAtIGBrZXJuZWxzYDogYW4gYXJyYXkgb2Ygb2JqZWN0cyBmb3IgZWFjaCBrZXJuZWwgaW52b2x2ZWQgdGhhdCByZXBvcnRzXG4gKiB0aGVpciBpbnB1dCBhbmQgb3V0cHV0IHNoYXBlcywgbnVtYmVyIG9mIGJ5dGVzIHVzZWQsIGFuZCBudW1iZXIgb2YgbmV3XG4gKiB0ZW5zb3JzIGNyZWF0ZWQuXG4gKiAtIGBrZXJuZWxOYW1lc2A6IGFuIGFycmF5IG9mIHVuaXF1ZSBzdHJpbmdzIHdpdGgganVzdCB0aGUgbmFtZXMgb2YgdGhlXG4gKiBrZXJuZWxzIGluIHRoZSBga2VybmVsc2AgYXJyYXkuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0Zi5wcm9maWxlKCgpID0+IHtcbiAqICAgY29uc3QgeCA9IHRmLnRlbnNvcjFkKFsxLCAyLCAzXSk7XG4gKiAgIGxldCB4MiA9IHguc3F1YXJlKCk7XG4gKiAgIHgyLmRpc3Bvc2UoKTtcbiAqICAgeDIgPSB4LnNxdWFyZSgpO1xuICogICB4Mi5kaXNwb3NlKCk7XG4gKiAgIHJldHVybiB4O1xuICogfSk7XG4gKlxuICogY29uc29sZS5sb2coYG5ld0J5dGVzOiAke3Byb2ZpbGUubmV3Qnl0ZXN9YCk7XG4gKiBjb25zb2xlLmxvZyhgbmV3VGVuc29yczogJHtwcm9maWxlLm5ld1RlbnNvcnN9YCk7XG4gKiBjb25zb2xlLmxvZyhgYnl0ZSB1c2FnZSBvdmVyIGFsbCBrZXJuZWxzOiAke3Byb2ZpbGUua2VybmVscy5tYXAoayA9PlxuICogay50b3RhbEJ5dGVzU25hcHNob3QpfWApO1xuICogYGBgXG4gKlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdQZXJmb3JtYW5jZScsIHN1YmhlYWRpbmc6ICdQcm9maWxlJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGUoZjogKCkgPT4gKFRlbnNvckNvbnRhaW5lciB8IFByb21pc2U8VGVuc29yQ29udGFpbmVyPikpOlxuICAgIFByb21pc2U8UHJvZmlsZUluZm8+IHtcbiAgcmV0dXJuIEVOR0lORS5wcm9maWxlKGYpO1xufVxuXG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBgZm5gIGFuZCBhZnRlciBpdCBpcyBleGVjdXRlZCwgY2xlYW5zIHVwIGFsbFxuICogaW50ZXJtZWRpYXRlIHRlbnNvcnMgYWxsb2NhdGVkIGJ5IGBmbmAgZXhjZXB0IHRob3NlIHJldHVybmVkIGJ5IGBmbmAuXG4gKiBgZm5gIG11c3Qgbm90IHJldHVybiBhIFByb21pc2UgKGFzeW5jIGZ1bmN0aW9ucyBub3QgYWxsb3dlZCkuIFRoZSByZXR1cm5lZFxuICogcmVzdWx0IGNhbiBiZSBhIGNvbXBsZXggb2JqZWN0LlxuICpcbiAqIFVzaW5nIHRoaXMgbWV0aG9kIGhlbHBzIGF2b2lkIG1lbW9yeSBsZWFrcy4gSW4gZ2VuZXJhbCwgd3JhcCBjYWxscyB0b1xuICogb3BlcmF0aW9ucyBpbiBgdGYudGlkeWAgZm9yIGF1dG9tYXRpYyBtZW1vcnkgY2xlYW51cC5cbiAqXG4gKiBOT1RFOiBWYXJpYWJsZXMgZG8gKm5vdCogZ2V0IGNsZWFuZWQgdXAgd2hlbiBpbnNpZGUgYSB0aWR5KCkuIElmIHlvdSB3YW50IHRvXG4gKiBkaXNwb3NlIHZhcmlhYmxlcywgcGxlYXNlIHVzZSBgdGYuZGlzcG9zZVZhcmlhYmxlc2Agb3IgY2FsbCBkaXNwb3NlKClcbiAqIGRpcmVjdGx5IG9uIHZhcmlhYmxlcy5cbiAqXG4gKiBgYGBqc1xuICogLy8geSA9IDIgXiAyICsgMVxuICogY29uc3QgeSA9IHRmLnRpZHkoKCkgPT4ge1xuICogICAvLyBhLCBiLCBhbmQgb25lIHdpbGwgYmUgY2xlYW5lZCB1cCB3aGVuIHRoZSB0aWR5IGVuZHMuXG4gKiAgIGNvbnN0IG9uZSA9IHRmLnNjYWxhcigxKTtcbiAqICAgY29uc3QgYSA9IHRmLnNjYWxhcigyKTtcbiAqICAgY29uc3QgYiA9IGEuc3F1YXJlKCk7XG4gKlxuICogICBjb25zb2xlLmxvZygnbnVtVGVuc29ycyAoaW4gdGlkeSk6ICcgKyB0Zi5tZW1vcnkoKS5udW1UZW5zb3JzKTtcbiAqXG4gKiAgIC8vIFRoZSB2YWx1ZSByZXR1cm5lZCBpbnNpZGUgdGhlIHRpZHkgZnVuY3Rpb24gd2lsbCByZXR1cm5cbiAqICAgLy8gdGhyb3VnaCB0aGUgdGlkeSwgaW4gdGhpcyBjYXNlIHRvIHRoZSB2YXJpYWJsZSB5LlxuICogICByZXR1cm4gYi5hZGQob25lKTtcbiAqIH0pO1xuICpcbiAqIGNvbnNvbGUubG9nKCdudW1UZW5zb3JzIChvdXRzaWRlIHRpZHkpOiAnICsgdGYubWVtb3J5KCkubnVtVGVuc29ycyk7XG4gKiB5LnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbmFtZU9yRm4gVGhlIG5hbWUgb2YgdGhlIGNsb3N1cmUsIG9yIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlLlxuICogICAgIElmIGEgbmFtZSBpcyBwcm92aWRlZCwgdGhlIDJuZCBhcmd1bWVudCBzaG91bGQgYmUgdGhlIGZ1bmN0aW9uLlxuICogICAgIElmIGRlYnVnIG1vZGUgaXMgb24sIHRoZSB0aW1pbmcgYW5kIHRoZSBtZW1vcnkgdXNhZ2Ugb2YgdGhlIGZ1bmN0aW9uXG4gKiAgICAgd2lsbCBiZSB0cmFja2VkIGFuZCBkaXNwbGF5ZWQgb24gdGhlIGNvbnNvbGUgdXNpbmcgdGhlIHByb3ZpZGVkIG5hbWUuXG4gKiBAcGFyYW0gZm4gVGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1BlcmZvcm1hbmNlJywgc3ViaGVhZGluZzogJ01lbW9yeSd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aWR5PFQgZXh0ZW5kcyBUZW5zb3JDb250YWluZXI+KFxuICAgIG5hbWVPckZuOiBzdHJpbmd8U2NvcGVGbjxUPiwgZm4/OiBTY29wZUZuPFQ+KTogVCB7XG4gIHJldHVybiBFTkdJTkUudGlkeShuYW1lT3JGbiwgZm4pO1xufVxuXG4vKipcbiAqIERpc3Bvc2VzIGFueSBgdGYuVGVuc29yYHMgZm91bmQgd2l0aGluIHRoZSBwcm92aWRlZCBvYmplY3QuXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lciBhbiBvYmplY3QgdGhhdCBtYXkgYmUgYSBgdGYuVGVuc29yYCBvciBtYXkgZGlyZWN0bHlcbiAqICAgICBjb250YWluIGB0Zi5UZW5zb3Jgcywgc3VjaCBhcyBhIGBUZW5zb3JbXWAgb3IgYHtrZXk6IFRlbnNvciwgLi4ufWAuIElmXG4gKiAgICAgdGhlIG9iamVjdCBpcyBub3QgYSBgdGYuVGVuc29yYCBvciBkb2VzIG5vdCBjb250YWluIGBUZW5zb3JzYCwgbm90aGluZ1xuICogICAgIGhhcHBlbnMuIEluIGdlbmVyYWwgaXQgaXMgc2FmZSB0byBwYXNzIGFueSBvYmplY3QgaGVyZSwgZXhjZXB0IHRoYXRcbiAqICAgICBgUHJvbWlzZWBzIGFyZSBub3Qgc3VwcG9ydGVkLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdQZXJmb3JtYW5jZScsIHN1YmhlYWRpbmc6ICdNZW1vcnknfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZShjb250YWluZXI6IFRlbnNvckNvbnRhaW5lcikge1xuICBjb25zdCB0ZW5zb3JzID0gZ2V0VGVuc29yc0luQ29udGFpbmVyKGNvbnRhaW5lcik7XG4gIHRlbnNvcnMuZm9yRWFjaCh0ZW5zb3IgPT4gdGVuc29yLmRpc3Bvc2UoKSk7XG59XG5cbi8qKlxuICogS2VlcHMgYSBgdGYuVGVuc29yYCBnZW5lcmF0ZWQgaW5zaWRlIGEgYHRmLnRpZHlgIGZyb20gYmVpbmcgZGlzcG9zZWRcbiAqIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogYGBganNcbiAqIGxldCBiO1xuICogY29uc3QgeSA9IHRmLnRpZHkoKCkgPT4ge1xuICogICBjb25zdCBvbmUgPSB0Zi5zY2FsYXIoMSk7XG4gKiAgIGNvbnN0IGEgPSB0Zi5zY2FsYXIoMik7XG4gKlxuICogICAvLyBiIHdpbGwgbm90IGJlIGNsZWFuZWQgdXAgYnkgdGhlIHRpZHkuIGEgYW5kIG9uZSB3aWxsIGJlIGNsZWFuZWQgdXBcbiAqICAgLy8gd2hlbiB0aGUgdGlkeSBlbmRzLlxuICogICBiID0gdGYua2VlcChhLnNxdWFyZSgpKTtcbiAqXG4gKiAgIGNvbnNvbGUubG9nKCdudW1UZW5zb3JzIChpbiB0aWR5KTogJyArIHRmLm1lbW9yeSgpLm51bVRlbnNvcnMpO1xuICpcbiAqICAgLy8gVGhlIHZhbHVlIHJldHVybmVkIGluc2lkZSB0aGUgdGlkeSBmdW5jdGlvbiB3aWxsIHJldHVyblxuICogICAvLyB0aHJvdWdoIHRoZSB0aWR5LCBpbiB0aGlzIGNhc2UgdG8gdGhlIHZhcmlhYmxlIHkuXG4gKiAgIHJldHVybiBiLmFkZChvbmUpO1xuICogfSk7XG4gKlxuICogY29uc29sZS5sb2coJ251bVRlbnNvcnMgKG91dHNpZGUgdGlkeSk6ICcgKyB0Zi5tZW1vcnkoKS5udW1UZW5zb3JzKTtcbiAqIGNvbnNvbGUubG9nKCd5OicpO1xuICogeS5wcmludCgpO1xuICogY29uc29sZS5sb2coJ2I6Jyk7XG4gKiBiLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gcmVzdWx0IFRoZSB0ZW5zb3IgdG8ga2VlcCBmcm9tIGJlaW5nIGRpc3Bvc2VkLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdQZXJmb3JtYW5jZScsIHN1YmhlYWRpbmc6ICdNZW1vcnknfVxuICovXG5leHBvcnQgZnVuY3Rpb24ga2VlcDxUIGV4dGVuZHMgVGVuc29yPihyZXN1bHQ6IFQpOiBUIHtcbiAgcmV0dXJuIEVOR0lORS5rZWVwKHJlc3VsdCk7XG59XG5cbi8qKlxuICogRXhlY3V0ZXMgYGYoKWAgYW5kIHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aW1pbmdcbiAqIGluZm9ybWF0aW9uLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gYHdhbGxNc2A6IFdhbGwgZXhlY3V0aW9uIHRpbWUuXG4gKiAtIGBrZXJuZWxNc2A6IEtlcm5lbCBleGVjdXRpb24gdGltZSwgaWdub3JpbmcgZGF0YSB0cmFuc2Zlci4gSWYgdXNpbmcgdGhlXG4gKiBXZWJHTCBiYWNrZW5kIGFuZCB0aGUgcXVlcnkgdGltZXIgZXh0ZW5zaW9uIGlzIG5vdCBhdmFpbGFibGUsIHRoaXMgd2lsbFxuICogcmV0dXJuIGFuIGVycm9yIG9iamVjdC5cbiAqIC0gT24gYFdlYkdMYCBUaGUgZm9sbG93aW5nIGFkZGl0aW9uYWwgcHJvcGVydGllcyBleGlzdDpcbiAqICAgLSBgdXBsb2FkV2FpdE1zYDogQ1BVIGJsb2NraW5nIHRpbWUgb24gdGV4dHVyZSB1cGxvYWRzLlxuICogICAtIGBkb3dubG9hZFdhaXRNc2A6IENQVSBibG9ja2luZyB0aW1lIG9uIHRleHR1cmUgZG93bmxvYWRzIChyZWFkUGl4ZWxzKS5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgeCA9IHRmLnJhbmRvbU5vcm1hbChbMjAsIDIwXSk7XG4gKiBjb25zdCB0aW1lID0gYXdhaXQgdGYudGltZSgoKSA9PiB4Lm1hdE11bCh4KSk7XG4gKlxuICogY29uc29sZS5sb2coYGtlcm5lbE1zOiAke3RpbWUua2VybmVsTXN9LCB3YWxsVGltZU1zOiAke3RpbWUud2FsbE1zfWApO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGYgVGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYW5kIHRpbWUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1BlcmZvcm1hbmNlJywgc3ViaGVhZGluZzogJ1RpbWluZyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lKGY6ICgpID0+IHZvaWQpOiBQcm9taXNlPFRpbWluZ0luZm8+IHtcbiAgcmV0dXJuIEVOR0lORS50aW1lKGYpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGJhY2tlbmQgKGNwdSwgd2ViZ2wsIHdhc20sIGV0YykgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRlbnNvcnMgYW5kXG4gKiBleGVjdXRpbmcgb3BlcmF0aW9ucyBvbiB0aG9zZSB0ZW5zb3JzLiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzXG4gKiB0byBhIGJvb2xlYW4gaWYgdGhlIGJhY2tlbmQgaW5pdGlhbGl6YXRpb24gd2FzIHN1Y2Nlc3NmdWwuXG4gKlxuICogTm90ZSB0aGlzIGRpc3Bvc2VzIHRoZSBjdXJyZW50IGJhY2tlbmQsIGlmIGFueSwgYXMgd2VsbCBhcyBhbnkgdGVuc29yc1xuICogYXNzb2NpYXRlZCB3aXRoIGl0LiBBIG5ldyBiYWNrZW5kIGlzIGluaXRpYWxpemVkLCBldmVuIGlmIGl0IGlzIG9mIHRoZVxuICogc2FtZSB0eXBlIGFzIHRoZSBwcmV2aW91cyBvbmUuXG4gKlxuICogQHBhcmFtIGJhY2tlbmROYW1lIFRoZSBuYW1lIG9mIHRoZSBiYWNrZW5kLiBDdXJyZW50bHkgc3VwcG9ydHNcbiAqICAgICBgJ3dlYmdsJ3wnY3B1J2AgaW4gdGhlIGJyb3dzZXIsIGAndGVuc29yZmxvdydgIHVuZGVyIG5vZGUuanNcbiAqICAgICAocmVxdWlyZXMgdGZqcy1ub2RlKSwgYW5kIGAnd2FzbSdgIChyZXF1aXJlcyB0ZmpzLWJhY2tlbmQtd2FzbSkuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0JhY2tlbmRzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEJhY2tlbmQoYmFja2VuZE5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICByZXR1cm4gRU5HSU5FLnNldEJhY2tlbmQoYmFja2VuZE5hbWUpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGJhY2tlbmQgKG9yIHRoZVxuICogaGlnaGVzdCBwcmlvcml0eSBvbmUpIGhhcyBpbml0aWFsaXplZC4gQXdhaXQgdGhpcyBwcm9taXNlIHdoZW4geW91IGFyZSB1c2luZ1xuICogYSBiYWNrZW5kIHRoYXQgaGFzIGFzeW5jIGluaXRpYWxpemF0aW9uLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdCYWNrZW5kcyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIEVOR0lORS5yZWFkeSgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgYmFja2VuZCBuYW1lIChjcHUsIHdlYmdsLCBldGMpLiBUaGUgYmFja2VuZCBpc1xuICogcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRlbnNvcnMgYW5kIGV4ZWN1dGluZyBvcGVyYXRpb25zIG9uIHRob3NlIHRlbnNvcnMuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0JhY2tlbmRzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhY2tlbmQoKTogc3RyaW5nIHtcbiAgcmV0dXJuIEVOR0lORS5iYWNrZW5kTmFtZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgYmFja2VuZCBhbmQgdGhlIHJlZ2lzdGVyZWQgZmFjdG9yeS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnQmFja2VuZHMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmFja2VuZChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgRU5HSU5FLnJlbW92ZUJhY2tlbmQobmFtZSk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGJhY2tlbmQgcmVnaXN0ZXJlZCB1bmRlciB0aGUgcHJvdmlkZWQgbmFtZS4gUmV0dXJucyBudWxsIGlmIHRoZVxuICogbmFtZSBpcyBub3QgaW4gdGhlIHJlZ2lzdHJ5LCBvciB0aGUgcmVnaXN0cmF0aW9uIGhhc24ndCBmaW5pc2hlZCB5ZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQmFja2VuZChuYW1lOiBzdHJpbmcpOiBLZXJuZWxCYWNrZW5kIHtcbiAgcmV0dXJuIEVOR0lORS5maW5kQmFja2VuZChuYW1lKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgYmFja2VuZCBmYWN0b3J5IHJlZ2lzdGVyZWQgdW5kZXIgdGhlIHByb3ZpZGVkIG5hbWUuIFJldHVybnMgYVxuICogZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhIG5ldyBiYWNrZW5kIHdoZW4gY2FsbGVkLiBSZXR1cm5zIG51bGwgaWYgdGhlIG5hbWVcbiAqIGlzIG5vdCBpbiB0aGUgcmVnaXN0cnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQmFja2VuZEZhY3RvcnkobmFtZTogc3RyaW5nKTogKCkgPT5cbiAgICBLZXJuZWxCYWNrZW5kIHwgUHJvbWlzZTxLZXJuZWxCYWNrZW5kPiB7XG4gIHJldHVybiBFTkdJTkUuZmluZEJhY2tlbmRGYWN0b3J5KG5hbWUpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGdsb2JhbCBiYWNrZW5kLiBUaGUgcmVnaXN0cmF0aW9uIHNob3VsZCBoYXBwZW4gd2hlbiBpbXBvcnRpbmdcbiAqIGEgbW9kdWxlIGZpbGUgKGUuZy4gd2hlbiBpbXBvcnRpbmcgYGJhY2tlbmRfd2ViZ2wudHNgKSwgYW5kIGlzIHVzZWQgZm9yXG4gKiBtb2R1bGFyIGJ1aWxkcyAoZS5nLiBjdXN0b20gdGZqcyBidW5kbGUgd2l0aCBvbmx5IHdlYmdsIHN1cHBvcnQpLlxuICpcbiAqIEBwYXJhbSBmYWN0b3J5IFRoZSBiYWNrZW5kIGZhY3RvcnkgZnVuY3Rpb24uIFdoZW4gY2FsbGVkLCBpdCBzaG91bGRcbiAqIHJldHVybiBhIGJhY2tlbmQgaW5zdGFuY2UsIG9yIGEgcHJvbWlzZSBvZiBhbiBpbnN0YW5jZS5cbiAqIEBwYXJhbSBwcmlvcml0eSBUaGUgcHJpb3JpdHkgb2YgdGhlIGJhY2tlbmQgKGhpZ2hlciA9IG1vcmUgaW1wb3J0YW50KS5cbiAqICAgICBJbiBjYXNlIG11bHRpcGxlIGJhY2tlbmRzIGFyZSByZWdpc3RlcmVkLCB0aGUgcHJpb3JpdHkgaXMgdXNlZCB0byBmaW5kXG4gKiAgICAgdGhlIGJlc3QgYmFja2VuZC4gRGVmYXVsdHMgdG8gMS5cbiAqIEByZXR1cm4gRmFsc2UgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHJlZ2lzdGVyZWQgYmFja2VuZCB1bmRlciB0aGlzIG5hbWUsIHRydWVcbiAqICAgICBpZiBub3QuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0JhY2tlbmRzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQmFja2VuZChcbiAgICBuYW1lOiBzdHJpbmcsIGZhY3Rvcnk6ICgpID0+IEtlcm5lbEJhY2tlbmQgfCBQcm9taXNlPEtlcm5lbEJhY2tlbmQ+LFxuICAgIHByaW9yaXR5ID0gMSk6IGJvb2xlYW4ge1xuICByZXR1cm4gRU5HSU5FLnJlZ2lzdGVyQmFja2VuZChuYW1lLCBmYWN0b3J5LCBwcmlvcml0eSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgY3VycmVudCBiYWNrZW5kLiBJZiBubyBiYWNrZW5kcyBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQsIHRoaXMgd2lsbFxuICogYXR0ZW1wdCB0byBpbml0aWFsaXplIHRoZSBiZXN0IGJhY2tlbmQuIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGhpZ2hlc3RcbiAqIHByaW9yaXR5IGJhY2tlbmQgaGFzIGFzeW5jIGluaXRpYWxpemF0aW9uLCBpbiB3aGljaCBjYXNlIHlvdSBzaG91bGQgY2FsbFxuICogJ2F3YWl0IHRmLnJlYWR5KCknIGJlZm9yZSBydW5uaW5nIG90aGVyIGNvZGUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0JhY2tlbmRzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhY2tlbmQoKTogS2VybmVsQmFja2VuZCB7XG4gIHJldHVybiBFTkdJTkUuYmFja2VuZDtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBnbG9iYWwgcGxhdGZvcm0uXG4gKlxuICogQHBhcmFtIHBsYXRmb3JtTmFtZSBUaGUgbmFtZSBvZiB0aGlzIHBsYXRmb3JtLlxuICogQHBhcmFtIHBsYXRmb3JtIEEgcGxhdGZvcm0gaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQbGF0Zm9ybShwbGF0Zm9ybU5hbWU6IHN0cmluZywgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gIGVudigpLnNldFBsYXRmb3JtKHBsYXRmb3JtTmFtZSwgcGxhdGZvcm0pO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/base_side_effects.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ // Required side effectful code for tfjs-core
// Set up Engine and ENV
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-ssr] (ecmascript)");
// Register backend-agnostic flags.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$flags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/flags.js [app-ssr] (ecmascript)");
// Register platforms
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$platforms$2f$platform_browser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/platform_browser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$platforms$2f$platform_node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/platforms/platform_node.js [app-ssr] (ecmascript)");
// Set up OpHandler
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/clone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/print.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrMakeEngine"])();
;
;
;
;
;
;
;
;
const opHandler = {
    buffer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buffer"],
    cast: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"],
    clone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"],
    print: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$print$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["print"]
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setOpHandler"])(opHandler); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9zaWRlX2VmZmVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2Jhc2Vfc2lkZV9lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILDZDQUE2QztBQUU3Qyx3QkFBd0I7QUFDeEIsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN6QyxlQUFlLEVBQUUsQ0FBQztBQUVsQixtQ0FBbUM7QUFDbkMsT0FBTyxTQUFTLENBQUM7QUFDakIscUJBQXFCO0FBQ3JCLE9BQU8sOEJBQThCLENBQUM7QUFDdEMsT0FBTywyQkFBMkIsQ0FBQztBQUVuQyxtQkFBbUI7QUFDbkIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDbEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNsQyxPQUFPLEVBQVksWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE1BQU0sU0FBUyxHQUFjO0lBQzNCLE1BQU07SUFDTixJQUFJO0lBQ0osS0FBSztJQUNMLEtBQUs7Q0FDTixDQUFDO0FBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyBSZXF1aXJlZCBzaWRlIGVmZmVjdGZ1bCBjb2RlIGZvciB0ZmpzLWNvcmVcblxuLy8gU2V0IHVwIEVuZ2luZSBhbmQgRU5WXG5pbXBvcnQge2dldE9yTWFrZUVuZ2luZX0gZnJvbSAnLi9lbmdpbmUnO1xuZ2V0T3JNYWtlRW5naW5lKCk7XG5cbi8vIFJlZ2lzdGVyIGJhY2tlbmQtYWdub3N0aWMgZmxhZ3MuXG5pbXBvcnQgJy4vZmxhZ3MnO1xuLy8gUmVnaXN0ZXIgcGxhdGZvcm1zXG5pbXBvcnQgJy4vcGxhdGZvcm1zL3BsYXRmb3JtX2Jyb3dzZXInO1xuaW1wb3J0ICcuL3BsYXRmb3Jtcy9wbGF0Zm9ybV9ub2RlJztcblxuLy8gU2V0IHVwIE9wSGFuZGxlclxuaW1wb3J0IHtidWZmZXJ9IGZyb20gJy4vb3BzL2J1ZmZlcic7XG5pbXBvcnQge2Nhc3R9IGZyb20gJy4vb3BzL2Nhc3QnO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSAnLi9vcHMvY2xvbmUnO1xuaW1wb3J0IHtwcmludH0gZnJvbSAnLi9vcHMvcHJpbnQnO1xuaW1wb3J0IHtPcEhhbmRsZXIsIHNldE9wSGFuZGxlcn0gZnJvbSAnLi90ZW5zb3InO1xuY29uc3Qgb3BIYW5kbGVyOiBPcEhhbmRsZXIgPSB7XG4gIGJ1ZmZlcixcbiAgY2FzdCxcbiAgY2xvbmUsXG4gIHByaW50XG59O1xuc2V0T3BIYW5kbGVyKG9wSGFuZGxlcik7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "customGrad",
    ()=>customGrad,
    "grad",
    ()=>grad,
    "grads",
    ()=>grads,
    "valueAndGrad",
    ()=>valueAndGrad,
    "valueAndGrads",
    ()=>valueAndGrads,
    "variableGrads",
    ()=>variableGrads
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Provided `f(x)`, returns another function `g(x, dy?)`, which gives the
 * gradient of `f(x)` with respect to `x`.
 *
 * If `dy` is provided, the gradient of `f(x).mul(dy).sum()` with respect to
 * `x` is computed instead. `f(x)` must take a single tensor `x` and return a
 * single tensor `y`. If `f()` takes multiple inputs, use `tf.grads` instead.
 *
 * ```js
 * // f(x) = x ^ 2
 * const f = x => x.square();
 * // f'(x) = 2x
 * const g = tf.grad(f);
 *
 * const x = tf.tensor1d([2, 3]);
 * g(x).print();
 * ```
 *
 * ```js
 * // f(x) = x ^ 3
 * const f = x => x.pow(tf.scalar(3, 'int32'));
 * // f'(x) = 3x ^ 2
 * const g = tf.grad(f);
 * // f''(x) = 6x
 * const gg = tf.grad(g);
 *
 * const x = tf.tensor1d([2, 3]);
 * gg(x).print();
 * ```
 *
 * @param f The function f(x), to compute gradient for.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */ function grad(f) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](f), ()=>'The f passed in grad(f) must be a function');
    return (x, dy)=>{
        // x can be of any dtype, thus null as the last argument.
        const $x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToTensor"])(x, 'x', 'tf.grad', 'string_or_numeric');
        const $dy = dy != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToTensor"])(dy, 'dy', 'tf.grad') : null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].tidy(()=>{
            const { value, grads } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].gradients(()=>f($x), [
                $x
            ], $dy);
            if ($dy != null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertShapesMatch"](value.shape, $dy.shape, 'The shape of dy passed in grad(f)(x, dy) must match the shape ' + 'returned by f(x)');
            }
            checkGrads(grads);
            return grads[0];
        });
    };
}
/**
 * Provided `f(x1, x2,...)`, returns another function `g([x1, x2,...], dy?)`,
 * which gives an array of gradients of `f()` with respect to each input
 * [`x1`,`x2`,...].
 *
 * If `dy` is passed when calling `g()`, the gradient of
 * `f(x1,...).mul(dy).sum()` with respect to each input is computed instead.
 * The provided `f` must take one or more tensors and return a single tensor
 * `y`. If `f()` takes a single input, we recommend using `tf.grad` instead.
 *
 * ```js
 * // f(a, b) = a * b
 * const f = (a, b) => a.mul(b);
 * // df / da = b, df / db = a
 * const g = tf.grads(f);
 *
 * const a = tf.tensor1d([2, 3]);
 * const b = tf.tensor1d([-2, -3]);
 * const [da, db] = g([a, b]);
 * console.log('da');
 * da.print();
 * console.log('db');
 * db.print();
 * ```
 *
 * @param f The function `f(x1, x2,...)` to compute gradients for.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */ function grads(f) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](f), ()=>'The f passed in grads(f) must be a function');
    return (args, dy)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](Array.isArray(args), ()=>'The args passed in grads(f)(args) must be an array ' + 'of `Tensor`s or `TensorLike`s');
        // args can be of any dtype, thus null as the last argument.
        const $args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToTensorArray"])(args, 'args', 'tf.grads', 'string_or_numeric');
        const $dy = dy != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToTensor"])(dy, 'dy', 'tf.grads') : null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].tidy(()=>{
            const { value, grads } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].gradients(()=>f(...$args), $args, $dy);
            if ($dy != null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertShapesMatch"](value.shape, $dy.shape, 'The shape of dy passed in grads(f)([x1,...], dy) must ' + 'match the shape returned by f([x1,...])');
            }
            checkGrads(grads);
            return grads;
        });
    };
}
/**
 * Like `tf.grad`, but also returns the value of `f()`. Useful when `f()`
 * returns a metric you want to show.
 *
 * The result is a rich object with the following properties:
 * - grad: The gradient of `f(x)` w.r.t. `x` (result of `tf.grad`).
 * - value: The value returned by `f(x)`.
 *
 * ```js
 * // f(x) = x ^ 2
 * const f = x => x.square();
 * // f'(x) = 2x
 * const g = tf.valueAndGrad(f);
 *
 * const x = tf.tensor1d([2, 3]);
 * const {value, grad} = g(x);
 *
 * console.log('value');
 * value.print();
 * console.log('grad');
 * grad.print();
 * ```
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */ function valueAndGrad(f) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](f), ()=>'The f passed in valueAndGrad(f) must be a function');
    return (x, dy)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](x instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"], ()=>'The x passed in valueAndGrad(f)(x) must be a tensor');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](dy == null || dy instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"], ()=>'The dy passed in valueAndGrad(f)(x, dy) must be a tensor');
        const { grads, value } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].gradients(()=>f(x), [
            x
        ], dy);
        checkGrads(grads);
        return {
            grad: grads[0],
            value
        };
    };
}
/**
 * Like `tf.grads`, but returns also the value of `f()`. Useful when `f()`
 * returns a metric you want to show.
 *
 * The result is a rich object with the following properties:
 * - grads: The gradients of `f()` w.r.t. each input (result of `tf.grads`).
 * - value: The value returned by `f(x)`.
 *
 * ```js
 * // f(a, b) = a * b
 * const f = (a, b) => a.mul(b);
 * // df/da = b, df/db = a
 * const g = tf.valueAndGrads(f);
 *
 * const a = tf.tensor1d([2, 3]);
 * const b = tf.tensor1d([-2, -3]);
 * const {value, grads} = g([a, b]);
 *
 * const [da, db] = grads;
 *
 * console.log('value');
 * value.print();
 *
 * console.log('da');
 * da.print();
 * console.log('db');
 * db.print();
 * ```
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */ function valueAndGrads(f) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](f), ()=>'The f passed in valueAndGrads(f) must be a function');
    return (args, dy)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](Array.isArray(args) && args.every((arg)=>arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]), ()=>'The args passed in valueAndGrads(f)(args) must be array of ' + 'tensors');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](dy == null || dy instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"], ()=>'The dy passed in valueAndGrads(f)(args, dy) must be a tensor');
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].gradients(()=>f(...args), args, dy);
        if (dy != null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertShapesMatch"](res.value.shape, dy.shape, 'The shape of dy passed in valueAndGrads(f)([x1,...], dy) must ' + 'match the shape returned by f([x1,...])');
        }
        checkGrads(res.grads);
        return res;
    };
}
/**
 * Computes and returns the gradient of f(x) with respect to the list of
 * trainable variables provided by `varList`. If no list is provided, it
 * defaults to all trainable variables.
 *
 * ```js
 * const a = tf.variable(tf.tensor1d([3, 4]));
 * const b = tf.variable(tf.tensor1d([5, 6]));
 * const x = tf.tensor1d([1, 2]);
 *
 * // f(a, b) = a * x ^ 2 + b * x
 * const f = () => a.mul(x.square()).add(b.mul(x)).sum();
 * // df/da = x ^ 2, df/db = x
 * const {value, grads} = tf.variableGrads(f);
 *
 * Object.keys(grads).forEach(varName => grads[varName].print());
 * ```
 *
 * @param f The function to execute. f() should return a scalar.
 * @param varList The list of variables to compute the gradients with respect
 *     to. Defaults to all trainable variables.
 * @returns An object with the following keys and values:
 *   - `value`: The value of the function `f`.
 *   - `grads`: A map from the names of the variables to the gradients.
 *     If the `varList` argument is provided explicitly and contains a subset of
 *     non-trainable variables, this map in the return value will contain keys
 *     that map the names of the non-trainable variables to `null`.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */ function variableGrads(f, varList) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"](f), ()=>'The f passed in variableGrads(f) must be a function');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](varList == null || Array.isArray(varList) && varList.every((v)=>v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Variable"]), ()=>'The varList passed in variableGrads(f, varList) must be an array ' + 'of variables');
    const specifiedVarList = varList != null;
    if (!specifiedVarList) {
        // Get all of the trainable variables.
        varList = [];
        for(const varName in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].registeredVariables){
            varList.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].registeredVariables[varName]);
        }
    }
    const specifiedNonTrainable = specifiedVarList ? varList.filter((variable)=>!variable.trainable) : null;
    // Prune non-trainable variables.
    const originalVarCount = varList.length;
    varList = varList.filter((variable)=>variable.trainable);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](varList.length > 0, ()=>`variableGrads() expects at least one of the input variables to ` + `be trainable, but none of the ${originalVarCount} variables is ` + `trainable.`);
    const allowNoGradients = true;
    const { value, grads } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].gradients(f, varList, null, allowNoGradients);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](grads.some((g)=>g != null), ()=>'Cannot find a connection between any variable and the result of ' + 'the loss function y=f(x). Please make sure the operations that ' + 'use variables are inside the function f passed to minimize().');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](value.rank === 0, ()=>`The f passed in variableGrads(f) must return a scalar, but it ` + `returned a rank-${value.rank} tensor`);
    const namedGrads = {};
    varList.forEach((v, i)=>{
        if (grads[i] != null) {
            namedGrads[v.name] = grads[i];
        }
    });
    if (specifiedNonTrainable != null) {
        // If varList is explicitly provided and contains non-trainable values,
        // add them to the returned gradients with `null` values.
        specifiedNonTrainable.forEach((v)=>namedGrads[v.name] = null);
    }
    return {
        value,
        grads: namedGrads
    };
}
/**
 * Overrides the gradient computation of a function `f`.
 *
 * Takes a function
 * `f(...inputs, save) => {value: Tensor, gradFunc: (dy, saved) => Tensor[]}`
 * and returns another function `g(...inputs)` which takes the same inputs as
 * `f`. When called, `g` returns `f().value`. In backward mode, custom gradients
 * with respect to each input of `f` are computed using `f().gradFunc`.
 *
 * The `save` function passed to `f` should be used for saving tensors needed
 * in the gradient. And the `saved` passed to the `gradFunc` is a
 * `NamedTensorMap`, which contains those saved tensors.
 *
 * ```js
 * const customOp = tf.customGrad((x, save) => {
 *   // Save x to make sure it's available later for the gradient.
 *   save([x]);
 *   // Override gradient of our custom x ^ 2 op to be dy * abs(x);
 *   return {
 *     value: x.square(),
 *     // Note `saved.x` which points to the `x` we saved earlier.
 *     gradFunc: (dy, saved) => [dy.mul(saved[0].abs())]
 *   };
 * });
 *
 * const x = tf.tensor1d([-1, -2, 3]);
 * const dx = tf.grad(x => customOp(x));
 *
 * console.log(`f(x):`);
 * customOp(x).print();
 * console.log(`f'(x):`);
 * dx(x).print();
 * ```
 *
 * @param f The function to evaluate in forward mode, which should return
 *     `{value: Tensor, gradFunc: (dy, saved) => Tensor[]}`, where `gradFunc`
 *     returns the custom gradients of `f` with respect to its inputs.
 *
 * @doc {heading: 'Training', subheading: 'Gradients'}
 */ function customGrad(f) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].customGrad(f);
}
function checkGrads(grads) {
    const numNullGradients = grads.filter((g)=>g == null).length;
    if (numNullGradients > 0) {
        throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`);
    }
}
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGllbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9ncmFkaWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFxQixNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDcEQsT0FBTyxFQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFbEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXhFLE9BQU8sS0FBSyxJQUFJLE1BQU0sUUFBUSxDQUFDO0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSCxTQUFTLElBQUksQ0FBQyxDQUF3QjtJQUVwQyxJQUFJLENBQUMsTUFBTSxDQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM1RSxPQUFPLENBQUMsQ0FBb0IsRUFBRSxFQUFzQixFQUFVLEVBQUU7UUFDOUQseURBQXlEO1FBQ3pELE1BQU0sRUFBRSxHQUFHLGVBQWUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sR0FBRyxHQUNMLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9ELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFB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LEVBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRztBQUNILFNBQVMsVUFBVSxDQUFtQixDQUF3QjtJQUU1RCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQWU7SUFDakMsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM3RCxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRTtRQUN4QixNQUFNLElBQUksS0FBSyxDQUNYO29FQUM0RCxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDO0FBRUQsT0FBTyxFQUNMLFVBQVUsRUFDVixhQUFhLEVBQ2IsWUFBWSxFQUNaLGFBQWEsRUFDYixJQUFJLEVBQ0osS0FBSyxHQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7Q3VzdG9tR3JhZGllbnRGdW5jLCBFTkdJTkV9IGZyb20gJy4vZW5naW5lJztcbmltcG9ydCB7U2NhbGFyLCBUZW5zb3IsIFZhcmlhYmxlfSBmcm9tICcuL3RlbnNvcic7XG5pbXBvcnQge05hbWVkVGVuc29yTWFwfSBmcm9tICcuL3RlbnNvcl90eXBlcyc7XG5pbXBvcnQge2NvbnZlcnRUb1RlbnNvciwgY29udmVydFRvVGVuc29yQXJyYXl9IGZyb20gJy4vdGVuc29yX3V0aWxfZW52JztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogUHJvdmlkZWQgYGYoeClgLCByZXR1cm5zIGFub3RoZXIgZnVuY3Rpb24gYGcoeCwgZHk/KWAsIHdoaWNoIGdpdmVzIHRoZVxuICogZ3JhZGllbnQgb2YgYGYoeClgIHdpdGggcmVzcGVjdCB0byBgeGAuXG4gKlxuICogSWYgYGR5YCBpcyBwcm92aWRlZCwgdGhlIGdyYWRpZW50IG9mIGBmKHgpLm11bChkeSkuc3VtKClgIHdpdGggcmVzcGVjdCB0b1xuICogYHhgIGlzIGNvbXB1dGVkIGluc3RlYWQuIGBmKHgpYCBtdXN0IHRha2UgYSBzaW5nbGUgdGVuc29yIGB4YCBhbmQgcmV0dXJuIGFcbiAqIHNpbmdsZSB0ZW5zb3IgYHlgLiBJZiBgZigpYCB0YWtlcyBtdWx0aXBsZSBpbnB1dHMsIHVzZSBgdGYuZ3JhZHNgIGluc3RlYWQuXG4gKlxuICogYGBganNcbiAqIC8vIGYoeCkgPSB4IF4gMlxuICogY29uc3QgZiA9IHggPT4geC5zcXVhcmUoKTtcbiAqIC8vIGYnKHgpID0gMnhcbiAqIGNvbnN0IGcgPSB0Zi5ncmFkKGYpO1xuICpcbiAqIGNvbnN0IHggPSB0Zi50ZW5zb3IxZChbMiwgM10pO1xuICogZyh4KS5wcmludCgpO1xuICogYGBgXG4gKlxuICogYGBganNcbiAqIC8vIGYoeCkgPSB4IF4gM1xuICogY29uc3QgZiA9IHggPT4geC5wb3codGYuc2NhbGFyKDMsICdpbnQzMicpKTtcbiAqIC8vIGYnKHgpID0gM3ggXiAyXG4gKiBjb25zdCBnID0gdGYuZ3JhZChmKTtcbiAqIC8vIGYnJyh4KSA9IDZ4XG4gKiBjb25zdCBnZyA9IHRmLmdyYWQoZyk7XG4gKlxuICogY29uc3QgeCA9IHRmLnRlbnNvcjFkKFsyLCAzXSk7XG4gKiBnZyh4KS5wcmludCgpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGYgVGhlIGZ1bmN0aW9uIGYoeCksIHRvIGNvbXB1dGUgZ3JhZGllbnQgZm9yLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdUcmFpbmluZycsIHN1YmhlYWRpbmc6ICdHcmFkaWVudHMnfVxuICovXG5mdW5jdGlvbiBncmFkKGY6ICh4OiBUZW5zb3IpID0+IFRlbnNvcik6IChcbiAgICB4OiBUZW5zb3JMaWtlfFRlbnNvciwgZHk/OiBUZW5zb3JMaWtlfFRlbnNvcikgPT4gVGVuc29yIHtcbiAgdXRpbC5hc3NlcnQoXG4gICAgICB1dGlsLmlzRnVuY3Rpb24oZiksICgpID0+ICdUaGUgZiBwYXNzZWQgaW4gZ3JhZChmKSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgcmV0dXJuICh4OiBUZW5zb3JMaWtlfFRlbnNvciwgZHk/OiBUZW5zb3JMaWtlfFRlbnNvcik6IFRlbnNvciA9PiB7XG4gICAgLy8geCBjYW4gYmUgb2YgYW55IGR0eXBlLCB0aHVzIG51bGwgYXMgdGhlIGxhc3QgYXJndW1lbnQuXG4gICAgY29uc3QgJHggPSBjb252ZXJ0VG9UZW5zb3IoeCwgJ3gnLCAndGYuZ3JhZCcsICdzdHJpbmdfb3JfbnVtZXJpYycpO1xuICAgIGNvbnN0ICRkeTogVGVuc29yID1cbiAgICAgICAgKGR5ICE9IG51bGwpID8gY29udmVydFRvVGVuc29yKGR5LCAnZHknLCAndGYuZ3JhZCcpIDogbnVsbDtcbiAgICByZXR1cm4gRU5HSU5FLnRpZHkoKCkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlLCBncmFkc30gPSBFTkdJTkUuZ3JhZGllbnRzKCgpID0+IGYoJHgpLCBbJHhdLCAkZHkpO1xuICAgICAgaWYgKCRkeSAhPSBudWxsKSB7XG4gICAgICAgIHV0aWwuYXNzZXJ0U2hhcGVzTWF0Y2goXG4gICAgICAgICAgICB2YWx1ZS5zaGFwZSwgJGR5LnNoYXBlLFxuICAgICAgICAgICAgJ1RoZSBzaGFwZSBvZiBkeSBwYXNzZWQgaW4gZ3JhZChmKSh4LCBkeSkgbXVzdCBtYXRjaCB0aGUgc2hhcGUgJyArXG4gICAgICAgICAgICAgICAgJ3JldHVybmVkIGJ5IGYoeCknKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrR3JhZHMoZ3JhZHMpO1xuICAgICAgcmV0dXJuIGdyYWRzWzBdO1xuICAgIH0pO1xuICB9O1xufVxuXG4vKipcbiAqIFByb3ZpZGVkIGBmKHgxLCB4MiwuLi4pYCwgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uIGBnKFt4MSwgeDIsLi4uXSwgZHk/KWAsXG4gKiB3aGljaCBnaXZlcyBhbiBhcnJheSBvZiBncmFkaWVudHMgb2YgYGYoKWAgd2l0aCByZXNwZWN0IHRvIGVhY2ggaW5wdXRcbiAqIFtgeDFgLGB4MmAsLi4uXS5cbiAqXG4gKiBJZiBgZHlgIGlzIHBhc3NlZCB3aGVuIGNhbGxpbmcgYGcoKWAsIHRoZSBncmFkaWVudCBvZlxuICogYGYoeDEsLi4uKS5tdWwoZHkpLnN1bSgpYCB3aXRoIHJlc3BlY3QgdG8gZWFjaCBpbnB1dCBpcyBjb21wdXRlZCBpbnN0ZWFkLlxuICogVGhlIHByb3ZpZGVkIGBmYCBtdXN0IHRha2Ugb25lIG9yIG1vcmUgdGVuc29ycyBhbmQgcmV0dXJuIGEgc2luZ2xlIHRlbnNvclxuICogYHlgLiBJZiBgZigpYCB0YWtlcyBhIHNpbmdsZSBpbnB1dCwgd2UgcmVjb21tZW5kIHVzaW5nIGB0Zi5ncmFkYCBpbnN0ZWFkLlxuICpcbiAqIGBgYGpzXG4gKiAvLyBmKGEsIGIpID0gYSAqIGJcbiAqIGNvbnN0IGYgPSAoYSwgYikgPT4gYS5tdWwoYik7XG4gKiAvLyBkZiAvIGRhID0gYiwgZGYgLyBkYiA9IGFcbiAqIGNvbnN0IGcgPSB0Zi5ncmFkcyhmKTtcbiAqXG4gKiBjb25zdCBhID0gdGYudGVuc29yMWQoWzIsIDNdKTtcbiAqIGNvbnN0IGIgPSB0Zi50ZW5zb3IxZChbLTIsIC0zXSk7XG4gKiBjb25zdCBbZGEsIGRiXSA9IGcoW2EsIGJdKTtcbiAqIGNvbnNvbGUubG9nKCdkYScpO1xuICogZGEucHJpbnQoKTtcbiAqIGNvbnNvbGUubG9nKCdkYicpO1xuICogZGIucHJpbnQoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBmIFRoZSBmdW5jdGlvbiBgZih4MSwgeDIsLi4uKWAgdG8gY29tcHV0ZSBncmFkaWVudHMgZm9yLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdUcmFpbmluZycsIHN1YmhlYWRpbmc6ICdHcmFkaWVudHMnfVxuICovXG5mdW5jdGlvbiBncmFkcyhmOiAoLi4uYXJnczogVGVuc29yW10pID0+IFRlbnNvcik6IChcbiAgICBhcmdzOiBBcnJheTxUZW5zb3J8VGVuc29yTGlrZT4sIGR5PzogVGVuc29yfFRlbnNvckxpa2UpID0+IFRlbnNvcltdIHtcbiAgdXRpbC5hc3NlcnQoXG4gICAgICB1dGlsLmlzRnVuY3Rpb24oZiksICgpID0+ICdUaGUgZiBwYXNzZWQgaW4gZ3JhZHMoZikgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIHJldHVybiAoYXJnczogQXJyYXk8VGVuc29yfFRlbnNvckxpa2U+LCBkeT86IFRlbnNvcnxUZW5zb3JMaWtlKTogVGVuc29yW10gPT4ge1xuICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgICBBcnJheS5pc0FycmF5KGFyZ3MpLFxuICAgICAgICAoKSA9PiAnVGhlIGFyZ3MgcGFzc2VkIGluIGdyYWRzKGYpKGFyZ3MpIG11c3QgYmUgYW4gYXJyYXkgJyArXG4gICAgICAgICAgICAnb2YgYFRlbnNvcmBzIG9yIGBUZW5zb3JMaWtlYHMnKTtcbiAgICAvLyBhcmdzIGNhbiBiZSBvZiBhbnkgZHR5cGUsIHRodXMgbnVsbCBhcyB0aGUgbGFzdCBhcmd1bWVudC5cbiAgICBjb25zdCAkYXJncyA9XG4gICAgICAgIGNvbnZlcnRUb1RlbnNvckFycmF5KGFyZ3MsICdhcmdzJywgJ3RmLmdyYWRzJywgJ3N0cmluZ19vcl9udW1lcmljJyk7XG4gICAgY29uc3QgJGR5OiBUZW5zb3IgPVxuICAgICAgICAoZHkgIT0gbnVsbCkgPyBjb252ZXJ0VG9UZW5zb3IoZHksICdkeScsICd0Zi5ncmFkcycpIDogbnVsbDtcbiAgICByZXR1cm4gRU5HSU5FLnRpZHkoKCkgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlLCBncmFkc30gPSBFTkdJTkUuZ3JhZGllbnRzKCgpID0+IGYoLi4uJGFyZ3MpLCAkYXJncywgJGR5KTtcbiAgICAgIGlmICgkZHkgIT0gbnVsbCkge1xuICAgICAgICB1dGlsLmFzc2VydFNoYXBlc01hdGNoKFxuICAgICAgICAgICAgdmFsdWUuc2hhcGUsICRkeS5zaGFwZSxcbiAgICAgICAgICAgICdUaGUgc2hhcGUgb2YgZHkgcGFzc2VkIGluIGdyYWRzKGYpKFt4MSwuLi5dLCBkeSkgbXVzdCAnICtcbiAgICAgICAgICAgICAgICAnbWF0Y2ggdGhlIHNoYXBlIHJldHVybmVkIGJ5IGYoW3gxLC4uLl0pJyk7XG4gICAgICB9XG4gICAgICBjaGVja0dyYWRzKGdyYWRzKTtcbiAgICAgIHJldHVybiBncmFkcztcbiAgICB9KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBMaWtlIGB0Zi5ncmFkYCwgYnV0IGFsc28gcmV0dXJucyB0aGUgdmFsdWUgb2YgYGYoKWAuIFVzZWZ1bCB3aGVuIGBmKClgXG4gKiByZXR1cm5zIGEgbWV0cmljIHlvdSB3YW50IHRvIHNob3cuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIHJpY2ggb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogLSBncmFkOiBUaGUgZ3JhZGllbnQgb2YgYGYoeClgIHcuci50LiBgeGAgKHJlc3VsdCBvZiBgdGYuZ3JhZGApLlxuICogLSB2YWx1ZTogVGhlIHZhbHVlIHJldHVybmVkIGJ5IGBmKHgpYC5cbiAqXG4gKiBgYGBqc1xuICogLy8gZih4KSA9IHggXiAyXG4gKiBjb25zdCBmID0geCA9PiB4LnNxdWFyZSgpO1xuICogLy8gZicoeCkgPSAyeFxuICogY29uc3QgZyA9IHRmLnZhbHVlQW5kR3JhZChmKTtcbiAqXG4gKiBjb25zdCB4ID0gdGYudGVuc29yMWQoWzIsIDNdKTtcbiAqIGNvbnN0IHt2YWx1ZSwgZ3JhZH0gPSBnKHgpO1xuICpcbiAqIGNvbnNvbGUubG9nKCd2YWx1ZScpO1xuICogdmFsdWUucHJpbnQoKTtcbiAqIGNvbnNvbGUubG9nKCdncmFkJyk7XG4gKiBncmFkLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVHJhaW5pbmcnLCBzdWJoZWFkaW5nOiAnR3JhZGllbnRzJ31cbiAqL1xuZnVuY3Rpb24gdmFsdWVBbmRHcmFkPEkgZXh0ZW5kcyBUZW5zb3IsIE8gZXh0ZW5kcyBUZW5zb3I+KGY6ICh4OiBJKSA9PiBPKTogKFxuICAgIHg6IEksIGR5PzogTykgPT4ge1xuICB2YWx1ZTogTztcbiAgZ3JhZDogSTtcbn0ge1xuICB1dGlsLmFzc2VydChcbiAgICAgIHV0aWwuaXNGdW5jdGlvbihmKSxcbiAgICAgICgpID0+ICdUaGUgZiBwYXNzZWQgaW4gdmFsdWVBbmRHcmFkKGYpIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICByZXR1cm4gKHg6IEksIGR5PzogTykgPT4ge1xuICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgICB4IGluc3RhbmNlb2YgVGVuc29yLFxuICAgICAgICAoKSA9PiAnVGhlIHggcGFzc2VkIGluIHZhbHVlQW5kR3JhZChmKSh4KSBtdXN0IGJlIGEgdGVuc29yJyk7XG4gICAgdXRpbC5hc3NlcnQoXG4gICAgICAgIGR5ID09IG51bGwgfHwgZHkgaW5zdGFuY2VvZiBUZW5zb3IsXG4gICAgICAgICgpID0+ICdUaGUgZHkgcGFzc2VkIGluIHZhbHVlQW5kR3JhZChmKSh4LCBkeSkgbXVzdCBiZSBhIHRlbnNvcicpO1xuICAgIGNvbnN0IHtncmFkcywgdmFsdWV9ID0gRU5HSU5FLmdyYWRpZW50cygoKSA9PiBmKHgpLCBbeF0sIGR5KTtcbiAgICBjaGVja0dyYWRzKGdyYWRzKTtcbiAgICByZXR1cm4ge2dyYWQ6IGdyYWRzWzBdIGFzIEksIHZhbHVlfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBMaWtlIGB0Zi5ncmFkc2AsIGJ1dCByZXR1cm5zIGFsc28gdGhlIHZhbHVlIG9mIGBmKClgLiBVc2VmdWwgd2hlbiBgZigpYFxuICogcmV0dXJucyBhIG1ldHJpYyB5b3Ugd2FudCB0byBzaG93LlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSByaWNoIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIC0gZ3JhZHM6IFRoZSBncmFkaWVudHMgb2YgYGYoKWAgdy5yLnQuIGVhY2ggaW5wdXQgKHJlc3VsdCBvZiBgdGYuZ3JhZHNgKS5cbiAqIC0gdmFsdWU6IFRoZSB2YWx1ZSByZXR1cm5lZCBieSBgZih4KWAuXG4gKlxuICogYGBganNcbiAqIC8vIGYoYSwgYikgPSBhICogYlxuICogY29uc3QgZiA9IChhLCBiKSA9PiBhLm11bChiKTtcbiAqIC8vIGRmL2RhID0gYiwgZGYvZGIgPSBhXG4gKiBjb25zdCBnID0gdGYudmFsdWVBbmRHcmFkcyhmKTtcbiAqXG4gKiBjb25zdCBhID0gdGYudGVuc29yMWQoWzIsIDNdKTtcbiAqIGNvbnN0IGIgPSB0Zi50ZW5zb3IxZChbLTIsIC0zXSk7XG4gKiBjb25zdCB7dmFsdWUsIGdyYWRzfSA9IGcoW2EsIGJdKTtcbiAqXG4gKiBjb25zdCBbZGEsIGRiXSA9IGdyYWRzO1xuICpcbiAqIGNvbnNvbGUubG9nKCd2YWx1ZScpO1xuICogdmFsdWUucHJpbnQoKTtcbiAqXG4gKiBjb25zb2xlLmxvZygnZGEnKTtcbiAqIGRhLnByaW50KCk7XG4gKiBjb25zb2xlLmxvZygnZGInKTtcbiAqIGRiLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVHJhaW5pbmcnLCBzdWJoZWFkaW5nOiAnR3JhZGllbnRzJ31cbiAqL1xuZnVuY3Rpb24gdmFsdWVBbmRHcmFkczxPIGV4dGVuZHMgVGVuc29yPihmOiAoLi4uYXJnczogVGVuc29yW10pID0+IE8pOiAoXG4gICAgYXJnczogVGVuc29yW10sIGR5PzogTykgPT4ge1xuICBncmFkczogVGVuc29yW107XG4gIHZhbHVlOiBPO1xufSB7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgdXRpbC5pc0Z1bmN0aW9uKGYpLFxuICAgICAgKCkgPT4gJ1RoZSBmIHBhc3NlZCBpbiB2YWx1ZUFuZEdyYWRzKGYpIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICByZXR1cm4gKGFyZ3M6IFRlbnNvcltdLCBkeT86IE8pID0+IHtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgQXJyYXkuaXNBcnJheShhcmdzKSAmJiBhcmdzLmV2ZXJ5KGFyZyA9PiBhcmcgaW5zdGFuY2VvZiBUZW5zb3IpLFxuICAgICAgICAoKSA9PiAnVGhlIGFyZ3MgcGFzc2VkIGluIHZhbHVlQW5kR3JhZHMoZikoYXJncykgbXVzdCBiZSBhcnJheSBvZiAnICtcbiAgICAgICAgICAgICd0ZW5zb3JzJyk7XG4gICAgdXRpbC5hc3NlcnQoXG4gICAgICAgIGR5ID09IG51bGwgfHwgZHkgaW5zdGFuY2VvZiBUZW5zb3IsXG4gICAgICAgICgpID0+ICdUaGUgZHkgcGFzc2VkIGluIHZhbHVlQW5kR3JhZHMoZikoYXJncywgZHkpIG11c3QgYmUgYSB0ZW5zb3InKTtcbiAgICBjb25zdCByZXMgPSBFTkdJTkUuZ3JhZGllbnRzKCgpID0+IGYoLi4uYXJncyksIGFyZ3MsIGR5KTtcbiAgICBpZiAoZHkgIT0gbnVsbCkge1xuICAgICAgdXRpbC5hc3NlcnRTaGFwZXNNYXRjaChcbiAgICAgICAgICByZXMudmFsdWUuc2hhcGUsIGR5LnNoYXBlLFxuICAgICAgICAgICdUaGUgc2hhcGUgb2YgZHkgcGFzc2VkIGluIHZhbHVlQW5kR3JhZHMoZikoW3gxLC4uLl0sIGR5KSBtdXN0ICcgK1xuICAgICAgICAgICAgICAnbWF0Y2ggdGhlIHNoYXBlIHJldHVybmVkIGJ5IGYoW3gxLC4uLl0pJyk7XG4gICAgfVxuICAgIGNoZWNrR3JhZHMocmVzLmdyYWRzKTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIGFuZCByZXR1cm5zIHRoZSBncmFkaWVudCBvZiBmKHgpIHdpdGggcmVzcGVjdCB0byB0aGUgbGlzdCBvZlxuICogdHJhaW5hYmxlIHZhcmlhYmxlcyBwcm92aWRlZCBieSBgdmFyTGlzdGAuIElmIG5vIGxpc3QgaXMgcHJvdmlkZWQsIGl0XG4gKiBkZWZhdWx0cyB0byBhbGwgdHJhaW5hYmxlIHZhcmlhYmxlcy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgYSA9IHRmLnZhcmlhYmxlKHRmLnRlbnNvcjFkKFszLCA0XSkpO1xuICogY29uc3QgYiA9IHRmLnZhcmlhYmxlKHRmLnRlbnNvcjFkKFs1LCA2XSkpO1xuICogY29uc3QgeCA9IHRmLnRlbnNvcjFkKFsxLCAyXSk7XG4gKlxuICogLy8gZihhLCBiKSA9IGEgKiB4IF4gMiArIGIgKiB4XG4gKiBjb25zdCBmID0gKCkgPT4gYS5tdWwoeC5zcXVhcmUoKSkuYWRkKGIubXVsKHgpKS5zdW0oKTtcbiAqIC8vIGRmL2RhID0geCBeIDIsIGRmL2RiID0geFxuICogY29uc3Qge3ZhbHVlLCBncmFkc30gPSB0Zi52YXJpYWJsZUdyYWRzKGYpO1xuICpcbiAqIE9iamVjdC5rZXlzKGdyYWRzKS5mb3JFYWNoKHZhck5hbWUgPT4gZ3JhZHNbdmFyTmFtZV0ucHJpbnQoKSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZiBUaGUgZnVuY3Rpb24gdG8gZXhlY3V0ZS4gZigpIHNob3VsZCByZXR1cm4gYSBzY2FsYXIuXG4gKiBAcGFyYW0gdmFyTGlzdCBUaGUgbGlzdCBvZiB2YXJpYWJsZXMgdG8gY29tcHV0ZSB0aGUgZ3JhZGllbnRzIHdpdGggcmVzcGVjdFxuICogICAgIHRvLiBEZWZhdWx0cyB0byBhbGwgdHJhaW5hYmxlIHZhcmlhYmxlcy5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcga2V5cyBhbmQgdmFsdWVzOlxuICogICAtIGB2YWx1ZWA6IFRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYGZgLlxuICogICAtIGBncmFkc2A6IEEgbWFwIGZyb20gdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgdG8gdGhlIGdyYWRpZW50cy5cbiAqICAgICBJZiB0aGUgYHZhckxpc3RgIGFyZ3VtZW50IGlzIHByb3ZpZGVkIGV4cGxpY2l0bHkgYW5kIGNvbnRhaW5zIGEgc3Vic2V0IG9mXG4gKiAgICAgbm9uLXRyYWluYWJsZSB2YXJpYWJsZXMsIHRoaXMgbWFwIGluIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBjb250YWluIGtleXNcbiAqICAgICB0aGF0IG1hcCB0aGUgbmFtZXMgb2YgdGhlIG5vbi10cmFpbmFibGUgdmFyaWFibGVzIHRvIGBudWxsYC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnVHJhaW5pbmcnLCBzdWJoZWFkaW5nOiAnR3JhZGllbnRzJ31cbiAqL1xuZnVuY3Rpb24gdmFyaWFibGVHcmFkcyhmOiAoKSA9PiBTY2FsYXIsIHZhckxpc3Q/OiBWYXJpYWJsZVtdKTpcbiAgICB7dmFsdWU6IFNjYWxhciwgZ3JhZHM6IE5hbWVkVGVuc29yTWFwfSB7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgdXRpbC5pc0Z1bmN0aW9uKGYpLFxuICAgICAgKCkgPT4gJ1RoZSBmIHBhc3NlZCBpbiB2YXJpYWJsZUdyYWRzKGYpIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB1dGlsLmFzc2VydChcbiAgICAgIHZhckxpc3QgPT0gbnVsbCB8fFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkodmFyTGlzdCkgJiYgdmFyTGlzdC5ldmVyeSh2ID0+IHYgaW5zdGFuY2VvZiBWYXJpYWJsZSksXG4gICAgICAoKSA9PlxuICAgICAgICAgICdUaGUgdmFyTGlzdCBwYXNzZWQgaW4gdmFyaWFibGVHcmFkcyhmLCB2YXJMaXN0KSBtdXN0IGJlIGFuIGFycmF5ICcgK1xuICAgICAgICAgICdvZiB2YXJpYWJsZXMnKTtcblxuICBjb25zdCBzcGVjaWZpZWRWYXJMaXN0ID0gdmFyTGlzdCAhPSBudWxsO1xuICBpZiAoIXNwZWNpZmllZFZhckxpc3QpIHtcbiAgICAvLyBHZXQgYWxsIG9mIHRoZSB0cmFpbmFibGUgdmFyaWFibGVzLlxuICAgIHZhckxpc3QgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHZhck5hbWUgaW4gRU5HSU5FLnJlZ2lzdGVyZWRWYXJpYWJsZXMpIHtcbiAgICAgIHZhckxpc3QucHVzaChFTkdJTkUucmVnaXN0ZXJlZFZhcmlhYmxlc1t2YXJOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3BlY2lmaWVkTm9uVHJhaW5hYmxlOiBWYXJpYWJsZVtdID1cbiAgICAgIHNwZWNpZmllZFZhckxpc3QgPyB2YXJMaXN0LmZpbHRlcih2YXJpYWJsZSA9PiAhdmFyaWFibGUudHJhaW5hYmxlKSA6IG51bGw7XG5cbiAgLy8gUHJ1bmUgbm9uLXRyYWluYWJsZSB2YXJpYWJsZXMuXG4gIGNvbnN0IG9yaWdpbmFsVmFyQ291bnQgPSB2YXJMaXN0Lmxlbmd0aDtcbiAgdmFyTGlzdCA9IHZhckxpc3QuZmlsdGVyKHZhcmlhYmxlID0+IHZhcmlhYmxlLnRyYWluYWJsZSk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgdmFyTGlzdC5sZW5ndGggPiAwLFxuICAgICAgKCkgPT4gYHZhcmlhYmxlR3JhZHMoKSBleHBlY3RzIGF0IGxlYXN0IG9uZSBvZiB0aGUgaW5wdXQgdmFyaWFibGVzIHRvIGAgK1xuICAgICAgICAgIGBiZSB0cmFpbmFibGUsIGJ1dCBub25lIG9mIHRoZSAke29yaWdpbmFsVmFyQ291bnR9IHZhcmlhYmxlcyBpcyBgICtcbiAgICAgICAgICBgdHJhaW5hYmxlLmApO1xuXG4gIGNvbnN0IGFsbG93Tm9HcmFkaWVudHMgPSB0cnVlO1xuICBjb25zdCB7dmFsdWUsIGdyYWRzfSA9IEVOR0lORS5ncmFkaWVudHMoZiwgdmFyTGlzdCwgbnVsbCwgYWxsb3dOb0dyYWRpZW50cyk7XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICBncmFkcy5zb21lKGcgPT4gZyAhPSBudWxsKSxcbiAgICAgICgpID0+ICdDYW5ub3QgZmluZCBhIGNvbm5lY3Rpb24gYmV0d2VlbiBhbnkgdmFyaWFibGUgYW5kIHRoZSByZXN1bHQgb2YgJyArXG4gICAgICAgICAgJ3RoZSBsb3NzIGZ1bmN0aW9uIHk9Zih4KS4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgb3BlcmF0aW9ucyB0aGF0ICcgK1xuICAgICAgICAgICd1c2UgdmFyaWFibGVzIGFyZSBpbnNpZGUgdGhlIGZ1bmN0aW9uIGYgcGFzc2VkIHRvIG1pbmltaXplKCkuJyk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgdmFsdWUucmFuayA9PT0gMCxcbiAgICAgICgpID0+IGBUaGUgZiBwYXNzZWQgaW4gdmFyaWFibGVHcmFkcyhmKSBtdXN0IHJldHVybiBhIHNjYWxhciwgYnV0IGl0IGAgK1xuICAgICAgICAgIGByZXR1cm5lZCBhIHJhbmstJHt2YWx1ZS5yYW5rfSB0ZW5zb3JgKTtcblxuICBjb25zdCBuYW1lZEdyYWRzOiBOYW1lZFRlbnNvck1hcCA9IHt9O1xuICB2YXJMaXN0LmZvckVhY2goKHYsIGkpID0+IHtcbiAgICBpZiAoZ3JhZHNbaV0gIT0gbnVsbCkge1xuICAgICAgbmFtZWRHcmFkc1t2Lm5hbWVdID0gZ3JhZHNbaV07XG4gICAgfVxuICB9KTtcbiAgaWYgKHNwZWNpZmllZE5vblRyYWluYWJsZSAhPSBudWxsKSB7XG4gICAgLy8gSWYgdmFyTGlzdCBpcyBleHBsaWNpdGx5IHByb3ZpZGVkIGFuZCBjb250YWlucyBub24tdHJhaW5hYmxlIHZhbHVlcyxcbiAgICAvLyBhZGQgdGhlbSB0byB0aGUgcmV0dXJuZWQgZ3JhZGllbnRzIHdpdGggYG51bGxgIHZhbHVlcy5cbiAgICBzcGVjaWZpZWROb25UcmFpbmFibGUuZm9yRWFjaCh2ID0+IG5hbWVkR3JhZHNbdi5uYW1lXSA9IG51bGwpO1xuICB9XG4gIHJldHVybiB7dmFsdWUsIGdyYWRzOiBuYW1lZEdyYWRzfTtcbn1cblxuLyoqXG4gKiBPdmVycmlkZXMgdGhlIGdyYWRpZW50IGNvbXB1dGF0aW9uIG9mIGEgZnVuY3Rpb24gYGZgLlxuICpcbiAqIFRha2VzIGEgZnVuY3Rpb25cbiAqIGBmKC4uLmlucHV0cywgc2F2ZSkgPT4ge3ZhbHVlOiBUZW5zb3IsIGdyYWRGdW5jOiAoZHksIHNhdmVkKSA9PiBUZW5zb3JbXX1gXG4gKiBhbmQgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uIGBnKC4uLmlucHV0cylgIHdoaWNoIHRha2VzIHRoZSBzYW1lIGlucHV0cyBhc1xuICogYGZgLiBXaGVuIGNhbGxlZCwgYGdgIHJldHVybnMgYGYoKS52YWx1ZWAuIEluIGJhY2t3YXJkIG1vZGUsIGN1c3RvbSBncmFkaWVudHNcbiAqIHdpdGggcmVzcGVjdCB0byBlYWNoIGlucHV0IG9mIGBmYCBhcmUgY29tcHV0ZWQgdXNpbmcgYGYoKS5ncmFkRnVuY2AuXG4gKlxuICogVGhlIGBzYXZlYCBmdW5jdGlvbiBwYXNzZWQgdG8gYGZgIHNob3VsZCBiZSB1c2VkIGZvciBzYXZpbmcgdGVuc29ycyBuZWVkZWRcbiAqIGluIHRoZSBncmFkaWVudC4gQW5kIHRoZSBgc2F2ZWRgIHBhc3NlZCB0byB0aGUgYGdyYWRGdW5jYCBpcyBhXG4gKiBgTmFtZWRUZW5zb3JNYXBgLCB3aGljaCBjb250YWlucyB0aG9zZSBzYXZlZCB0ZW5zb3JzLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBjdXN0b21PcCA9IHRmLmN1c3RvbUdyYWQoKHgsIHNhdmUpID0+IHtcbiAqICAgLy8gU2F2ZSB4IHRvIG1ha2Ugc3VyZSBpdCdzIGF2YWlsYWJsZSBsYXRlciBmb3IgdGhlIGdyYWRpZW50LlxuICogICBzYXZlKFt4XSk7XG4gKiAgIC8vIE92ZXJyaWRlIGdyYWRpZW50IG9mIG91ciBjdXN0b20geCBeIDIgb3AgdG8gYmUgZHkgKiBhYnMoeCk7XG4gKiAgIHJldHVybiB7XG4gKiAgICAgdmFsdWU6IHguc3F1YXJlKCksXG4gKiAgICAgLy8gTm90ZSBgc2F2ZWQueGAgd2hpY2ggcG9pbnRzIHRvIHRoZSBgeGAgd2Ugc2F2ZWQgZWFybGllci5cbiAqICAgICBncmFkRnVuYzogKGR5LCBzYXZlZCkgPT4gW2R5Lm11bChzYXZlZFswXS5hYnMoKSldXG4gKiAgIH07XG4gKiB9KTtcbiAqXG4gKiBjb25zdCB4ID0gdGYudGVuc29yMWQoWy0xLCAtMiwgM10pO1xuICogY29uc3QgZHggPSB0Zi5ncmFkKHggPT4gY3VzdG9tT3AoeCkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGBmKHgpOmApO1xuICogY3VzdG9tT3AoeCkucHJpbnQoKTtcbiAqIGNvbnNvbGUubG9nKGBmJyh4KTpgKTtcbiAqIGR4KHgpLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZiBUaGUgZnVuY3Rpb24gdG8gZXZhbHVhdGUgaW4gZm9yd2FyZCBtb2RlLCB3aGljaCBzaG91bGQgcmV0dXJuXG4gKiAgICAgYHt2YWx1ZTogVGVuc29yLCBncmFkRnVuYzogKGR5LCBzYXZlZCkgPT4gVGVuc29yW119YCwgd2hlcmUgYGdyYWRGdW5jYFxuICogICAgIHJldHVybnMgdGhlIGN1c3RvbSBncmFkaWVudHMgb2YgYGZgIHdpdGggcmVzcGVjdCB0byBpdHMgaW5wdXRzLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdUcmFpbmluZycsIHN1YmhlYWRpbmc6ICdHcmFkaWVudHMnfVxuICovXG5mdW5jdGlvbiBjdXN0b21HcmFkPFQgZXh0ZW5kcyBUZW5zb3I+KGY6IEN1c3RvbUdyYWRpZW50RnVuYzxUPik6XG4gICAgKC4uLmFyZ3M6IFRlbnNvcltdKSA9PiBUIHtcbiAgcmV0dXJuIEVOR0lORS5jdXN0b21HcmFkKGYpO1xufVxuXG5mdW5jdGlvbiBjaGVja0dyYWRzKGdyYWRzOiBUZW5zb3JbXSkge1xuICBjb25zdCBudW1OdWxsR3JhZGllbnRzID0gZ3JhZHMuZmlsdGVyKGcgPT4gZyA9PSBudWxsKS5sZW5ndGg7XG4gIGlmIChudW1OdWxsR3JhZGllbnRzID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbm5vdCBjb21wdXRlIGdyYWRpZW50IG9mIHk9Zih4KSB3aXRoIHJlc3BlY3QgdG8geC4gTWFrZSBzdXJlIHRoYXRcbiAgICB0aGUgZiB5b3UgcGFzc2VkIGVuY2xvc2VzIGFsbCBvcGVyYXRpb25zIHRoYXQgbGVhZCBmcm9tIHggdG8geS5gKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjdXN0b21HcmFkLFxuICB2YXJpYWJsZUdyYWRzLFxuICB2YWx1ZUFuZEdyYWQsXG4gIHZhbHVlQW5kR3JhZHMsXG4gIGdyYWQsXG4gIGdyYWRzLFxufTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "Serializable",
    ()=>Serializable,
    "SerializationMap",
    ()=>SerializationMap,
    "getRegisteredName",
    ()=>getRegisteredName,
    "registerClass",
    ()=>registerClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
;
/**
 * Maps to mapping between the custom object and its name.
 *
 * After registering a custom class, these two maps will add key-value pairs
 * for the class object and the registered name.
 *
 * Therefore we can get the relative registered name by calling
 * getRegisteredName() function.
 *
 * For example:
 * GLOBAL_CUSTOM_OBJECT: {key=registeredName: value=corresponding
 * CustomObjectClass}
 *
 * GLOBAL_CUSTOM_NAMES: {key=CustomObjectClass: value=corresponding
 * registeredName}
 *
 */ const GLOBAL_CUSTOM_OBJECT = new Map();
const GLOBAL_CUSTOM_NAMES = new Map();
class Serializable {
    /**
     * Return the class name for this class to use in serialization contexts.
     *
     * Generally speaking this will be the same thing that constructor.name
     * would have returned.  However, the class name needs to be robust
     * against minification for serialization/deserialization to work properly.
     *
     * There's also places such as initializers.VarianceScaling, where
     * implementation details between different languages led to different
     * class hierarchies and a non-leaf node is used for serialization purposes.
     */ getClassName() {
        return this.constructor.className;
    }
    /**
     * Creates an instance of T from a ConfigDict.
     *
     * This works for most descendants of serializable.  A few need to
     * provide special handling.
     * @param cls A Constructor for the class to instantiate.
     * @param config The Configuration for the object.
     */ /** @nocollapse */ static fromConfig(cls, config) {
        return new cls(config);
    }
}
class SerializationMap {
    constructor(){
        this.classNameMap = {};
    }
    /**
     * Returns the singleton instance of the map.
     */ static getMap() {
        if (SerializationMap.instance == null) {
            SerializationMap.instance = new SerializationMap();
        }
        return SerializationMap.instance;
    }
    /**
     * Registers the class as serializable.
     */ static register(cls) {
        SerializationMap.getMap().classNameMap[cls.className] = [
            cls,
            cls.fromConfig
        ];
    }
}
function registerClass(cls, pkg, name) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(cls.className != null, ()=>`Class being registered does not have the static className ` + `property defined.`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(typeof cls.className === 'string', ()=>`className is required to be a string, but got type ` + typeof cls.className);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(cls.className.length > 0, ()=>`Class being registered has an empty-string as its className, ` + `which is disallowed.`);
    if (typeof pkg === 'undefined') {
        pkg = 'Custom';
    }
    if (typeof name === 'undefined') {
        name = cls.className;
    }
    const className = name;
    const registerName = pkg + '>' + className;
    SerializationMap.register(cls);
    GLOBAL_CUSTOM_OBJECT.set(registerName, cls);
    GLOBAL_CUSTOM_NAMES.set(cls, registerName);
    return cls;
}
function getRegisteredName(cls) {
    if (GLOBAL_CUSTOM_NAMES.has(cls)) {
        return GLOBAL_CUSTOM_NAMES.get(cls);
    } else {
        return cls.className;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvc2VyaWFsaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBdUM5Qjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNILE1BQU0sb0JBQW9CLEdBQ3RCLElBQUksR0FBRyxFQUFpRCxDQUFDO0FBRTdELE1BQU0sbUJBQW1CLEdBQ3JCLElBQUksR0FBRyxFQUFpRCxDQUFDO0FBRTdEOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFnQixZQUFZO0lBQ2hDOzs7Ozs7Ozs7O09BVUc7SUFDSCxZQUFZO1FBQ1YsT0FBUSxJQUFJLENBQUMsV0FBcUQ7YUFDN0QsU0FBUyxDQUFDO0lBQ2pCLENBQUM7SUFPRDs7Ozs7OztPQU9HO0lBQ0gsa0JBQWtCO0lBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQ2IsR0FBK0IsRUFBRSxNQUFrQjtRQUNyRCxPQUFPLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0I7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsTUFBTTtRQUNYLElBQUksZ0JBQWdCLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUNyQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBeUIsR0FBK0I7UUFDckUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDakQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUVHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FDekIsR0FBK0IsRUFBRSxHQUFZLEVBQUUsSUFBYTtJQUM5RCxNQUFNLENBQ0YsR0FBRyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQ3JCLEdBQUcsRUFBRSxDQUFDLDREQUE0RDtRQUM5RCxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sQ0FDRixPQUFPLEdBQUcsQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUNqQyxHQUFHLEVBQUUsQ0FBQyxxREFBcUQ7UUFDdkQsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsTUFBTSxDQUNGLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDeEIsR0FBRyxFQUFFLENBQUMsK0RBQStEO1FBQ2pFLHNCQUFzQixDQUFDLENBQUM7SUFFaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxXQUFXLEVBQUU7UUFDOUIsR0FBRyxHQUFHLFFBQVEsQ0FBQztLQUNoQjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO1FBQy9CLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0tBQ3RCO0lBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLE1BQU0sWUFBWSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDO0lBRTNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFM0MsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsR0FBK0I7SUFDakMsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckM7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQztLQUN0QjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFR5cGVzIHRvIHN1cHBvcnQgSlNPTi1lc3F1ZSBkYXRhIHN0cnVjdHVyZXMgaW50ZXJuYWxseS5cbiAqXG4gKiBJbnRlcm5hbGx5IENvbmZpZ0RpY3QncyB1c2UgY2FtZWxDYXNlIGtleXMgYW5kIHZhbHVlcyB3aGVyZSB0aGVcbiAqIHZhbHVlcyBhcmUgY2xhc3MgbmFtZXMgdG8gYmUgaW5zdGFudGlhdGVkLiAgT24gdGhlIHB5dGhvbiBzaWRlLCB0aGVzZVxuICogd2lsbCBiZSBzbmFrZV9jYXNlLiAgSW50ZXJuYWxseSB3ZSBhbGxvdyBFbnVtcyBpbnRvIHRoZSB2YWx1ZXMgZm9yIGJldHRlclxuICogdHlwZSBzYWZldHksIGJ1dCB0aGVzZSBuZWVkIHRvIGJlIGNvbnZlcnRlZCB0byByYXcgcHJpbWl0aXZlcyAodXN1YWxseVxuICogc3RyaW5ncykgZm9yIHJvdW5kLXRyaXBwaW5nIHdpdGggcHl0aG9uLlxuICpcbiAqIHRvQ29uZmlnIHJldHVybnMgdGhlIFRTLWZyaWVuZGx5IHJlcHJlc2VudGF0aW9uLiBtb2RlbC50b0pTT04oKSByZXR1cm5zXG4gKiB0aGUgcHl0aG9uaWMgdmVyc2lvbiBhcyB0aGF0J3MgdGhlIHBvcnRhYmxlIGZvcm1hdC4gIElmIHlvdSBuZWVkIHRvXG4gKiBweXRob24taWZ5IGEgbm9uLW1vZGVsIGxldmVsIHRvQ29uZmlnIG91dHB1dCwgeW91J2xsIG5lZWQgdG8gdXNlIGFcbiAqIGNvbnZlcnRUc1RvUHl0aG9uaWMgZnJvbSBzZXJpYWxpemF0aW9uX3V0aWxzIGluIC1MYXllcnMuXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIENvbmZpZ0RpY3RWYWx1ZSA9XG4gICAgYm9vbGVhbiB8IG51bWJlciB8IHN0cmluZyB8IG51bGwgfCBDb25maWdEaWN0QXJyYXkgfCBDb25maWdEaWN0O1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIENvbmZpZ0RpY3Qge1xuICBba2V5OiBzdHJpbmddOiBDb25maWdEaWN0VmFsdWU7XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ29uZmlnRGljdEFycmF5IGV4dGVuZHMgQXJyYXk8Q29uZmlnRGljdFZhbHVlPiB7fVxuXG4vKipcbiAqIFR5cGUgdG8gcmVwcmVzZW50IHRoZSBjbGFzcy10eXBlIG9mIFNlcmlhbGl6YWJsZSBvYmplY3RzLlxuICpcbiAqIEllIHRoZSBjbGFzcyBwcm90b3R5cGUgd2l0aCBhY2Nlc3MgdG8gdGhlIGNvbnN0cnVjdG9yIGFuZCBhbnlcbiAqIHN0YXRpYyBtZW1iZXJzL21ldGhvZHMuIEluc3RhbmNlIG1ldGhvZHMgYXJlIG5vdCBsaXN0ZWQgaGVyZS5cbiAqXG4gKiBTb3VyY2UgZm9yIHRoaXMgaWRlYTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQzNjA3MjU1XG4gKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU2VyaWFsaXphYmxlQ29uc3RydWN0b3I8VCBleHRlbmRzIFNlcmlhbGl6YWJsZT4gPSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IFQ7IGNsYXNzTmFtZTogc3RyaW5nOyBmcm9tQ29uZmlnOiBGcm9tQ29uZmlnTWV0aG9kPFQ+O1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgRnJvbUNvbmZpZ01ldGhvZDxUIGV4dGVuZHMgU2VyaWFsaXphYmxlPiA9XG4gICAgKGNsczogU2VyaWFsaXphYmxlQ29uc3RydWN0b3I8VD4sIGNvbmZpZzogQ29uZmlnRGljdCkgPT4gVDtcblxuLyoqXG4gKiBNYXBzIHRvIG1hcHBpbmcgYmV0d2VlbiB0aGUgY3VzdG9tIG9iamVjdCBhbmQgaXRzIG5hbWUuXG4gKlxuICogQWZ0ZXIgcmVnaXN0ZXJpbmcgYSBjdXN0b20gY2xhc3MsIHRoZXNlIHR3byBtYXBzIHdpbGwgYWRkIGtleS12YWx1ZSBwYWlyc1xuICogZm9yIHRoZSBjbGFzcyBvYmplY3QgYW5kIHRoZSByZWdpc3RlcmVkIG5hbWUuXG4gKlxuICogVGhlcmVmb3JlIHdlIGNhbiBnZXQgdGhlIHJlbGF0aXZlIHJlZ2lzdGVyZWQgbmFtZSBieSBjYWxsaW5nXG4gKiBnZXRSZWdpc3RlcmVkTmFtZSgpIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBleGFtcGxlOlxuICogR0xPQkFMX0NVU1RPTV9PQkpFQ1Q6IHtrZXk9cmVnaXN0ZXJlZE5hbWU6IHZhbHVlPWNvcnJlc3BvbmRpbmdcbiAqIEN1c3RvbU9iamVjdENsYXNzfVxuICpcbiAqIEdMT0JBTF9DVVNUT01fTkFNRVM6IHtrZXk9Q3VzdG9tT2JqZWN0Q2xhc3M6IHZhbHVlPWNvcnJlc3BvbmRpbmdcbiAqIHJlZ2lzdGVyZWROYW1lfVxuICpcbiAqL1xuY29uc3QgR0xPQkFMX0NVU1RPTV9PQkpFQ1QgPVxuICAgIG5ldyBNYXA8c3RyaW5nLCBTZXJpYWxpemFibGVDb25zdHJ1Y3RvcjxTZXJpYWxpemFibGU+PigpO1xuXG5jb25zdCBHTE9CQUxfQ1VTVE9NX05BTUVTID1cbiAgICBuZXcgTWFwPFNlcmlhbGl6YWJsZUNvbnN0cnVjdG9yPFNlcmlhbGl6YWJsZT4sIHN0cmluZz4oKTtcblxuLyoqXG4gKiBTZXJpYWxpemFibGUgZGVmaW5lcyB0aGUgc2VyaWFsaXphdGlvbiBjb250cmFjdC5cbiAqXG4gKiBURkpTIHJlcXVpcmVzIHNlcmlhbGl6YWJsZSBjbGFzc2VzIHRvIHJldHVybiB0aGVpciBjbGFzc05hbWUgd2hlbiBhc2tlZFxuICogdG8gYXZvaWQgaXNzdWVzIHdpdGggbWluaWZpY2F0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VyaWFsaXphYmxlIHtcbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY2xhc3MgbmFtZSBmb3IgdGhpcyBjbGFzcyB0byB1c2UgaW4gc2VyaWFsaXphdGlvbiBjb250ZXh0cy5cbiAgICpcbiAgICogR2VuZXJhbGx5IHNwZWFraW5nIHRoaXMgd2lsbCBiZSB0aGUgc2FtZSB0aGluZyB0aGF0IGNvbnN0cnVjdG9yLm5hbWVcbiAgICogd291bGQgaGF2ZSByZXR1cm5lZC4gIEhvd2V2ZXIsIHRoZSBjbGFzcyBuYW1lIG5lZWRzIHRvIGJlIHJvYnVzdFxuICAgKiBhZ2FpbnN0IG1pbmlmaWNhdGlvbiBmb3Igc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICpcbiAgICogVGhlcmUncyBhbHNvIHBsYWNlcyBzdWNoIGFzIGluaXRpYWxpemVycy5WYXJpYW5jZVNjYWxpbmcsIHdoZXJlXG4gICAqIGltcGxlbWVudGF0aW9uIGRldGFpbHMgYmV0d2VlbiBkaWZmZXJlbnQgbGFuZ3VhZ2VzIGxlZCB0byBkaWZmZXJlbnRcbiAgICogY2xhc3MgaGllcmFyY2hpZXMgYW5kIGEgbm9uLWxlYWYgbm9kZSBpcyB1c2VkIGZvciBzZXJpYWxpemF0aW9uIHB1cnBvc2VzLlxuICAgKi9cbiAgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbnN0cnVjdG9yIGFzIFNlcmlhbGl6YWJsZUNvbnN0cnVjdG9yPFNlcmlhbGl6YWJsZT4pXG4gICAgICAgIC5jbGFzc05hbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCB0aGUgbm9uLXdlaWdodCBzdGF0ZSBuZWVkZWQgdG8gc2VyaWFsaXplIHRoaXMgb2JqZWN0LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0Q29uZmlnKCk6IENvbmZpZ0RpY3Q7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVCBmcm9tIGEgQ29uZmlnRGljdC5cbiAgICpcbiAgICogVGhpcyB3b3JrcyBmb3IgbW9zdCBkZXNjZW5kYW50cyBvZiBzZXJpYWxpemFibGUuICBBIGZldyBuZWVkIHRvXG4gICAqIHByb3ZpZGUgc3BlY2lhbCBoYW5kbGluZy5cbiAgICogQHBhcmFtIGNscyBBIENvbnN0cnVjdG9yIGZvciB0aGUgY2xhc3MgdG8gaW5zdGFudGlhdGUuXG4gICAqIEBwYXJhbSBjb25maWcgVGhlIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBvYmplY3QuXG4gICAqL1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGZyb21Db25maWc8VCBleHRlbmRzIFNlcmlhbGl6YWJsZT4oXG4gICAgICBjbHM6IFNlcmlhbGl6YWJsZUNvbnN0cnVjdG9yPFQ+LCBjb25maWc6IENvbmZpZ0RpY3QpOiBUIHtcbiAgICByZXR1cm4gbmV3IGNscyhjb25maWcpO1xuICB9XG59XG5cbi8qKlxuICogTWFwcyBzdHJpbmcga2V5cyB0byBjbGFzcyBjb25zdHJ1Y3RvcnMuXG4gKlxuICogVXNlZCBkdXJpbmcgKGRlKXNlcmlhbGl6YXRpb24gZnJvbSB0aGUgY3Jvc3MtbGFuZ3VhZ2UgSlNPTiBmb3JtYXQsIHdoaWNoXG4gKiByZXF1aXJlcyB0aGUgY2xhc3MgbmFtZSBpbiB0aGUgc2VyaWFsaXphdGlvbiBmb3JtYXQgbWF0Y2hlcyB0aGUgY2xhc3NcbiAqIG5hbWVzIGFzIHVzZWQgaW4gUHl0aG9uLCBzaG91bGQgaXQgZXhpc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxpemF0aW9uTWFwIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNlcmlhbGl6YXRpb25NYXA7XG4gIGNsYXNzTmFtZU1hcDoge1xuICAgIFtjbGFzc05hbWU6IHN0cmluZ106XG4gICAgICAgIFtTZXJpYWxpemFibGVDb25zdHJ1Y3RvcjxTZXJpYWxpemFibGU+LCBGcm9tQ29uZmlnTWV0aG9kPFNlcmlhbGl6YWJsZT5dXG4gIH07XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsYXNzTmFtZU1hcCA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgbWFwLlxuICAgKi9cbiAgc3RhdGljIGdldE1hcCgpOiBTZXJpYWxpemF0aW9uTWFwIHtcbiAgICBpZiAoU2VyaWFsaXphdGlvbk1hcC5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBTZXJpYWxpemF0aW9uTWFwLmluc3RhbmNlID0gbmV3IFNlcmlhbGl6YXRpb25NYXAoKTtcbiAgICB9XG4gICAgcmV0dXJuIFNlcmlhbGl6YXRpb25NYXAuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBjbGFzcyBhcyBzZXJpYWxpemFibGUuXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXI8VCBleHRlbmRzIFNlcmlhbGl6YWJsZT4oY2xzOiBTZXJpYWxpemFibGVDb25zdHJ1Y3RvcjxUPikge1xuICAgIFNlcmlhbGl6YXRpb25NYXAuZ2V0TWFwKCkuY2xhc3NOYW1lTWFwW2Nscy5jbGFzc05hbWVdID1cbiAgICAgICAgW2NscywgY2xzLmZyb21Db25maWddO1xuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjbGFzcyB3aXRoIHRoZSBzZXJpYWxpemF0aW9uIG1hcCBvZiBUZW5zb3JGbG93LmpzLlxuICpcbiAqIFRoaXMgaXMgb2Z0ZW4gdXNlZCBmb3IgcmVnaXN0ZXJpbmcgY3VzdG9tIExheWVycywgc28gdGhleSBjYW4gYmVcbiAqIHNlcmlhbGl6ZWQgYW5kIGRlc2VyaWFsaXplZC5cbiAqXG4gKiBFeGFtcGxlIDEuIFJlZ2lzdGVyIHRoZSBjbGFzcyB3aXRob3V0IHBhY2thZ2UgbmFtZSBhbmQgc3BlY2lmaWVkIG5hbWUuXG4gKlxuICogYGBganNcbiAqIGNsYXNzIE15Q3VzdG9tTGF5ZXIgZXh0ZW5kcyB0Zi5sYXllcnMuTGF5ZXIge1xuICogICBzdGF0aWMgY2xhc3NOYW1lID0gJ015Q3VzdG9tTGF5ZXInO1xuICpcbiAqICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gKiAgICAgc3VwZXIoY29uZmlnKTtcbiAqICAgfVxuICogfVxuICogdGYuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKE15Q3VzdG9tTGF5ZXIpO1xuICogY29uc29sZS5sb2codGYuc2VyaWFsaXphdGlvbi5HTE9CQUxDVVNUT01PQkpFQ1QuZ2V0KFwiQ3VzdG9tPk15Q3VzdG9tTGF5ZXJcIikpO1xuICogY29uc29sZS5sb2codGYuc2VyaWFsaXphdGlvbi5HTE9CQUxDVVNUT01OQU1FUy5nZXQoTXlDdXN0b21MYXllcikpO1xuICogYGBgXG4gKlxuICogRXhhbXBsZSAyLiBSZWdpc3RlciB0aGUgY2xhc3Mgd2l0aCBwYWNrYWdlIG5hbWU6IFwiUGFja2FnZVwiIGFuZCBzcGVjaWZpZWRcbiAqIG5hbWU6IFwiTXlMYXllclwiLlxuICogYGBganNcbiAqIGNsYXNzIE15Q3VzdG9tTGF5ZXIgZXh0ZW5kcyB0Zi5sYXllcnMuTGF5ZXIge1xuICogICBzdGF0aWMgY2xhc3NOYW1lID0gJ015Q3VzdG9tTGF5ZXInO1xuICpcbiAqICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gKiAgICAgc3VwZXIoY29uZmlnKTtcbiAqICAgfVxuICogfVxuICogdGYuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKE15Q3VzdG9tTGF5ZXIsIFwiUGFja2FnZVwiLCBcIk15TGF5ZXJcIik7XG4gKiBjb25zb2xlLmxvZyh0Zi5zZXJpYWxpemF0aW9uLkdMT0JBTENVU1RPTU9CSkVDVC5nZXQoXCJQYWNrYWdlPk15TGF5ZXJcIikpO1xuICogY29uc29sZS5sb2codGYuc2VyaWFsaXphdGlvbi5HTE9CQUxDVVNUT01OQU1FUy5nZXQoTXlDdXN0b21MYXllcikpO1xuICogYGBgXG4gKlxuICogRXhhbXBsZSAzLiBSZWdpc3RlciB0aGUgY2xhc3Mgd2l0aCBzcGVjaWZpZWQgbmFtZTogXCJNeUxheWVyXCIuXG4gKiBgYGBqc1xuICogY2xhc3MgTXlDdXN0b21MYXllciBleHRlbmRzIHRmLmxheWVycy5MYXllciB7XG4gKiAgIHN0YXRpYyBjbGFzc05hbWUgPSAnTXlDdXN0b21MYXllcic7XG4gKlxuICogICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAqICAgICBzdXBlcihjb25maWcpO1xuICogICB9XG4gKiB9XG4gKiB0Zi5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTXlDdXN0b21MYXllciwgdW5kZWZpbmVkLCBcIk15TGF5ZXJcIik7XG4gKiBjb25zb2xlLmxvZyh0Zi5zZXJpYWxpemF0aW9uLkdMT0JBTENVU1RPTU9CSkVDVC5nZXQoXCJDdXN0b20+TXlMYXllclwiKSk7XG4gKiBjb25zb2xlLmxvZyh0Zi5zZXJpYWxpemF0aW9uLkdMT0JBTENVU1RPTU5BTUVTLmdldChNeUN1c3RvbUxheWVyKSk7XG4gKiBgYGBcbiAqXG4gKiBFeGFtcGxlIDQuIFJlZ2lzdGVyIHRoZSBjbGFzcyB3aXRoIHNwZWNpZmllZCBwYWNrYWdlIG5hbWU6IFwiUGFja2FnZVwiLlxuICogYGBganNcbiAqIGNsYXNzIE15Q3VzdG9tTGF5ZXIgZXh0ZW5kcyB0Zi5sYXllcnMuTGF5ZXIge1xuICogICBzdGF0aWMgY2xhc3NOYW1lID0gJ015Q3VzdG9tTGF5ZXInO1xuICpcbiAqICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gKiAgICAgc3VwZXIoY29uZmlnKTtcbiAqICAgfVxuICogfVxuICogdGYuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKE15Q3VzdG9tTGF5ZXIsIFwiUGFja2FnZVwiKTtcbiAqIGNvbnNvbGUubG9nKHRmLnNlcmlhbGl6YXRpb24uR0xPQkFMQ1VTVE9NT0JKRUNUXG4gKiAuZ2V0KFwiUGFja2FnZT5NeUN1c3RvbUxheWVyXCIpKTtcbiAqIGNvbnNvbGUubG9nKHRmLnNlcmlhbGl6YXRpb24uR0xPQkFMQ1VTVE9NTkFNRVNcbiAqIC5nZXQoTXlDdXN0b21MYXllcikpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGNscyBUaGUgY2xhc3MgdG8gYmUgcmVnaXN0ZXJlZC4gSXQgbXVzdCBoYXZlIGEgcHVibGljIHN0YXRpYyBtZW1iZXJcbiAqICAgY2FsbGVkIGBjbGFzc05hbWVgIGRlZmluZWQgYW5kIHRoZSB2YWx1ZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZy5cbiAqIEBwYXJhbSBwa2cgVGhlIHBhY2thZ2UgbmFtZSB0aGF0IHRoaXMgY2xhc3MgYmVsb25ncyB0by4gVGhpcyB1c2VkIHRvIGRlZmluZVxuICogICAgIHRoZSBrZXkgaW4gR2xvYmFsQ3VzdG9tT2JqZWN0LiBJZiBub3QgZGVmaW5lZCwgaXQgZGVmYXVsdHMgdG8gYEN1c3RvbWAuXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSB0aGF0IHVzZXIgc3BlY2lmaWVkLiBJdCBkZWZhdWx0cyB0byB0aGUgYWN0dWFsIG5hbWUgb2ZcbiAqICAgICB0aGUgY2xhc3MgYXMgc3BlY2lmaWVkIGJ5IGl0cyBzdGF0aWMgYGNsYXNzTmFtZWAgcHJvcGVydHkuXG4gKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ1NlcmlhbGl6YXRpb24nLCBpZ25vcmVDSTogdHJ1ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2xhc3M8VCBleHRlbmRzIFNlcmlhbGl6YWJsZT4oXG4gICAgY2xzOiBTZXJpYWxpemFibGVDb25zdHJ1Y3RvcjxUPiwgcGtnPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nKSB7XG4gIGFzc2VydChcbiAgICAgIGNscy5jbGFzc05hbWUgIT0gbnVsbCxcbiAgICAgICgpID0+IGBDbGFzcyBiZWluZyByZWdpc3RlcmVkIGRvZXMgbm90IGhhdmUgdGhlIHN0YXRpYyBjbGFzc05hbWUgYCArXG4gICAgICAgICAgYHByb3BlcnR5IGRlZmluZWQuYCk7XG4gIGFzc2VydChcbiAgICAgIHR5cGVvZiBjbHMuY2xhc3NOYW1lID09PSAnc3RyaW5nJyxcbiAgICAgICgpID0+IGBjbGFzc05hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYSBzdHJpbmcsIGJ1dCBnb3QgdHlwZSBgICtcbiAgICAgICAgICB0eXBlb2YgY2xzLmNsYXNzTmFtZSk7XG4gIGFzc2VydChcbiAgICAgIGNscy5jbGFzc05hbWUubGVuZ3RoID4gMCxcbiAgICAgICgpID0+IGBDbGFzcyBiZWluZyByZWdpc3RlcmVkIGhhcyBhbiBlbXB0eS1zdHJpbmcgYXMgaXRzIGNsYXNzTmFtZSwgYCArXG4gICAgICAgICAgYHdoaWNoIGlzIGRpc2FsbG93ZWQuYCk7XG5cbiAgaWYgKHR5cGVvZiBwa2cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcGtnID0gJ0N1c3RvbSc7XG4gIH1cblxuICBpZiAodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZSA9IGNscy5jbGFzc05hbWU7XG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSBuYW1lO1xuICBjb25zdCByZWdpc3Rlck5hbWUgPSBwa2cgKyAnPicgKyBjbGFzc05hbWU7XG5cbiAgU2VyaWFsaXphdGlvbk1hcC5yZWdpc3RlcihjbHMpO1xuICBHTE9CQUxfQ1VTVE9NX09CSkVDVC5zZXQocmVnaXN0ZXJOYW1lLCBjbHMpO1xuICBHTE9CQUxfQ1VTVE9NX05BTUVTLnNldChjbHMsIHJlZ2lzdGVyTmFtZSk7XG5cbiAgcmV0dXJuIGNscztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJlZ2lzdGVyZWQgbmFtZSBvZiBhIGNsYXNzLiBJZiB0aGUgY2xhc3MgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQsXG4gKiByZXR1cm4gdGhlIGNsYXNzIG5hbWUuXG4gKlxuICogQHBhcmFtIGNscyBUaGUgY2xhc3Mgd2Ugd2FudCB0byBnZXQgcmVnaXN0ZXIgbmFtZSBmb3IuIEl0IG11c3QgaGF2ZSBhIHB1YmxpY1xuICogICAgIHN0YXRpYyBtZW1iZXIgY2FsbGVkIGBjbGFzc05hbWVgIGRlZmluZWQuXG4gKiBAcmV0dXJucyByZWdpc3RlcmVkIG5hbWUgb3IgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZ2lzdGVyZWROYW1lPFQgZXh0ZW5kcyBTZXJpYWxpemFibGU+KFxuICAgIGNsczogU2VyaWFsaXphYmxlQ29uc3RydWN0b3I8VD4pIHtcbiAgaWYgKEdMT0JBTF9DVVNUT01fTkFNRVMuaGFzKGNscykpIHtcbiAgICByZXR1cm4gR0xPQkFMX0NVU1RPTV9OQU1FUy5nZXQoY2xzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY2xzLmNsYXNzTmFtZTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ // Required side effectful code.
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$base_side_effects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/base_side_effects.js [app-ssr] (ecmascript)");
// TODO(mattSoulanille): Move this to base_side_effects.ts
// It is here for now because custom bundles need to avoid calling it, and they
// only replace the index.js file, not the base_side_effects file.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$optimizers$2f$register_optimizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/optimizers/register_optimizers.js [app-ssr] (ecmascript)");
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$optimizers$2f$register_optimizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerOptimizers"])();
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILGdDQUFnQztBQUNoQyxPQUFPLHFCQUFxQixDQUFDO0FBRTdCLDBEQUEwRDtBQUMxRCwrRUFBK0U7QUFDL0Usa0VBQWtFO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLGtCQUFrQixFQUFFLENBQUM7QUFFckIsbURBQW1EO0FBQ25ELGNBQWMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyBSZXF1aXJlZCBzaWRlIGVmZmVjdGZ1bCBjb2RlLlxuaW1wb3J0ICcuL2Jhc2Vfc2lkZV9lZmZlY3RzJztcblxuLy8gVE9ETyhtYXR0U291bGFuaWxsZSk6IE1vdmUgdGhpcyB0byBiYXNlX3NpZGVfZWZmZWN0cy50c1xuLy8gSXQgaXMgaGVyZSBmb3Igbm93IGJlY2F1c2UgY3VzdG9tIGJ1bmRsZXMgbmVlZCB0byBhdm9pZCBjYWxsaW5nIGl0LCBhbmQgdGhleVxuLy8gb25seSByZXBsYWNlIHRoZSBpbmRleC5qcyBmaWxlLCBub3QgdGhlIGJhc2Vfc2lkZV9lZmZlY3RzIGZpbGUuXG5pbXBvcnQge3JlZ2lzdGVyT3B0aW1pemVyc30gZnJvbSAnLi9vcHRpbWl6ZXJzL3JlZ2lzdGVyX29wdGltaXplcnMnO1xucmVnaXN0ZXJPcHRpbWl6ZXJzKCk7XG5cbi8vIEFsbCBleHBvcnRzIGZyb20gdGhpcyBwYWNrYWdlIHNob3VsZCBiZSBpbiBiYXNlLlxuZXhwb3J0ICogZnJvbSAnLi9iYXNlJztcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/register_all_gradients.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Abs_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Abs_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Acos_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Acos_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Acosh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Acosh_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Add_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Add_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$AddN_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/AddN_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ArgMax_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ArgMax_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ArgMin_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ArgMin_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Asin_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Asin_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Asinh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Asinh_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Atan2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Atan2_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Atan_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Atan_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Atanh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Atanh_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$AvgPool3D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/AvgPool3D_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$AvgPool_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/AvgPool_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$BatchMatMul_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/BatchMatMul_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$BatchToSpaceND_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/BatchToSpaceND_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$BroadcastTo_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/BroadcastTo_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cast_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Cast_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Ceil_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Ceil_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ClipByValue_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ClipByValue_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ComplexAbs_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ComplexAbs_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Concat_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Concat_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Conv2D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Conv2D_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Conv2DBackpropInput_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Conv2DBackpropInput_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Conv3D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Conv3D_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cos_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Cos_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cosh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Cosh_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cumsum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Cumsum_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$DepthwiseConv2dNative_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/DepthwiseConv2dNative_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Dilation2D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Dilation2D_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Elu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Elu_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Erf_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Erf_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Exp_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Exp_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ExpandDims_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ExpandDims_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Expm1_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Expm1_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Floor_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Floor_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$FloorDiv_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/FloorDiv_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$FusedBatchNorm_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/FusedBatchNorm_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$GatherV2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/GatherV2_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$GreaterEqual_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/GreaterEqual_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Identity_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Identity_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$IsFinite_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/IsFinite_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$IsInf_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/IsInf_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$IsNan_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/IsNan_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$LeakyRelu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/LeakyRelu_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Log1p_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Log1p_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Log_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Log_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$LogSoftmax_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/LogSoftmax_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$LRN_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/LRN_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Max_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Max_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Maximum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Maximum_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$MaxPool3D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/MaxPool3D_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$MaxPool_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/MaxPool_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Mean_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Mean_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Min_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Min_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Minimum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Minimum_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$MirrorPad_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/MirrorPad_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Mod_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Mod_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Multiply_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Multiply_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Neg_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Neg_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$OneHot_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/OneHot_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$OnesLike_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/OnesLike_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Pack_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Pack_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$PadV2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/PadV2_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Pow_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Pow_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Prelu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Prelu_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Prod_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Prod_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$RealDiv_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/RealDiv_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Reciprocal_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Reciprocal_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Relu6_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Relu6_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Relu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Relu_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Reshape_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Reshape_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ResizeBilinear_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ResizeBilinear_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ResizeNearestNeighbor_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ResizeNearestNeighbor_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Reverse_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Reverse_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Round_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Round_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Rsqrt_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Rsqrt_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Select_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Select_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Selu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Selu_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sigmoid_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sigmoid_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sign_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sign_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sin_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sin_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sinh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sinh_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Slice_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Slice_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Softmax_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Softmax_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Softplus_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Softplus_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SpaceToBatchND_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/SpaceToBatchND_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SplitV_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/SplitV_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sqrt_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sqrt_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Square_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Square_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SquaredDifference_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/SquaredDifference_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Step_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Step_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sub_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sub_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Sum_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Tan_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Tan_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Tanh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Tanh_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Tile_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Tile_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Transpose_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Transpose_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Unpack_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/Unpack_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$UnsortedSegmentSum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/UnsortedSegmentSum_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ZerosLike_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients/ZerosLike_grad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_registry.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Export all kernel configs here so that the package can auto register them
const gradConfigs = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Abs_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["absGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Acos_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["acosGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Acosh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["acoshGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Add_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$AddN_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addNGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ArgMax_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argMaxGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ArgMin_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argMinGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Asin_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asinGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Asinh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asinhGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Atan2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atan2GradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Atan_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atanGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Atanh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atanhGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$AvgPool3D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avgPool3DGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$AvgPool_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avgPoolGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$BatchMatMul_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchMatMulGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$BatchToSpaceND_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchToSpaceNDGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$BroadcastTo_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["broadcastToGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cast_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Ceil_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ceilGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ClipByValue_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValueGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ComplexAbs_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["complexAbsGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Concat_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Conv2DBackpropInput_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conv2DBackpropInputGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Conv2D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conv2DGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Conv3D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conv3DGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cos_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cosGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cosh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["coshGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Cumsum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cumsumGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$DepthwiseConv2dNative_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depthwiseConv2dNativeGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Dilation2D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dilation2dGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$RealDiv_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["divGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Elu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eluGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Erf_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erfGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Exp_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ExpandDims_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandDimsGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Expm1_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expm1GradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$FloorDiv_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floorDivGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Floor_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floorGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$FusedBatchNorm_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fusedBatchNormGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$GatherV2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gatherGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$GreaterEqual_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greaterEqualGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Identity_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identityGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$IsFinite_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFiniteGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$IsInf_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInfGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$IsNan_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNanGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$LeakyRelu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leakyReluGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Log1p_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log1pGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Log_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$LogSoftmax_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSoftmaxGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$LRN_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lrnGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Max_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Max_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Maximum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximumGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$MaxPool3D_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxPool3DGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$MaxPool_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxPoolGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Mean_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Min_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Minimum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minimumGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$MirrorPad_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorPadGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Mod_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Multiply_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["multiplyGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Neg_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["negGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$OneHot_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oneHotGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$OnesLike_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onesLikeGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Pack_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$PadV2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padV2GradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$PadV2_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padV2GradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Pow_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["powGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Prelu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preluGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Prod_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prodGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Reciprocal_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reciprocalGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Relu6_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relu6GradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Relu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reluGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Reshape_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshapeGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ResizeBilinear_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resizeBilinearGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ResizeNearestNeighbor_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resizeNearestNeighborGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Reverse_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Round_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Rsqrt_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rsqrtGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Select_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Selu_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seluGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sigmoid_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sigmoidGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sign_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sin_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sinGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sinh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sinhGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Slice_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Softmax_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softmaxGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Softplus_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softplusGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SpaceToBatchND_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceToBatchNDGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SpaceToBatchND_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceToBatchNDGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SplitV_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitVGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SplitV_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitVGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sqrt_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqrtGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$SquaredDifference_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squaredDifferenceGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Square_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squareGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Step_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stepGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sub_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Sum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sumGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Tan_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tanGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Tanh_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tanhGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Tile_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tileGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Transpose_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transposeGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$Unpack_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unpackGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$UnsortedSegmentSum_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsortedSegmentSumGradConfig"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2f$ZerosLike_grad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zerosLikeGradConfig"]
];
for (const gradientConfig of gradConfigs){
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_registry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerGradient"])(gradientConfig);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJfYWxsX2dyYWRpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvcmVnaXN0ZXJfYWxsX2dyYWRpZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDdkYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUvRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCw0RUFBNEU7QUFDNUUsTUFBTSxXQUFXLEdBQWlCO0lBQ2hDLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRixLQUFLLE1BQU0sY0FBYyxJQUFJLFdBQVcsRUFBRTtJQUN4QyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztDQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmltcG9ydCB7YWJzR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQWJzX2dyYWQnO1xuaW1wb3J0IHthY29zR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQWNvc19ncmFkJztcbmltcG9ydCB7YWNvc2hHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9BY29zaF9ncmFkJztcbmltcG9ydCB7YWRkR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQWRkX2dyYWQnO1xuaW1wb3J0IHthZGROR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQWRkTl9ncmFkJztcbmltcG9ydCB7YXJnTWF4R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQXJnTWF4X2dyYWQnO1xuaW1wb3J0IHthcmdNaW5HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9BcmdNaW5fZ3JhZCc7XG5pbXBvcnQge2FzaW5HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Bc2luX2dyYWQnO1xuaW1wb3J0IHthc2luaEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0FzaW5oX2dyYWQnO1xuaW1wb3J0IHthdGFuMkdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0F0YW4yX2dyYWQnO1xuaW1wb3J0IHthdGFuR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQXRhbl9ncmFkJztcbmltcG9ydCB7YXRhbmhHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9BdGFuaF9ncmFkJztcbmltcG9ydCB7YXZnUG9vbDNER3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQXZnUG9vbDNEX2dyYWQnO1xuaW1wb3J0IHthdmdQb29sR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQXZnUG9vbF9ncmFkJztcbmltcG9ydCB7YmF0Y2hNYXRNdWxHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9CYXRjaE1hdE11bF9ncmFkJztcbmltcG9ydCB7YmF0Y2hUb1NwYWNlTkRHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9CYXRjaFRvU3BhY2VORF9ncmFkJztcbmltcG9ydCB7YnJvYWRjYXN0VG9HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Ccm9hZGNhc3RUb19ncmFkJztcbmltcG9ydCB7Y2FzdEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0Nhc3RfZ3JhZCc7XG5pbXBvcnQge2NlaWxHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9DZWlsX2dyYWQnO1xuaW1wb3J0IHtjbGlwQnlWYWx1ZUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0NsaXBCeVZhbHVlX2dyYWQnO1xuaW1wb3J0IHtjb21wbGV4QWJzR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQ29tcGxleEFic19ncmFkJztcbmltcG9ydCB7Y29uY2F0R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvQ29uY2F0X2dyYWQnO1xuaW1wb3J0IHtjb252MkRHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Db252MkRfZ3JhZCc7XG5pbXBvcnQge2NvbnYyREJhY2twcm9wSW5wdXRHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Db252MkRCYWNrcHJvcElucHV0X2dyYWQnO1xuaW1wb3J0IHtjb252M0RHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Db252M0RfZ3JhZCc7XG5pbXBvcnQge2Nvc0dyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0Nvc19ncmFkJztcbmltcG9ydCB7Y29zaEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0Nvc2hfZ3JhZCc7XG5pbXBvcnQge2N1bXN1bUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0N1bXN1bV9ncmFkJztcbmltcG9ydCB7ZGVwdGh3aXNlQ29udjJkTmF0aXZlR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRGVwdGh3aXNlQ29udjJkTmF0aXZlX2dyYWQnO1xuaW1wb3J0IHtkaWxhdGlvbjJkR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRGlsYXRpb24yRF9ncmFkJztcbmltcG9ydCB7ZWx1R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRWx1X2dyYWQnO1xuaW1wb3J0IHtlcmZHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9FcmZfZ3JhZCc7XG5pbXBvcnQge2V4cEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0V4cF9ncmFkJztcbmltcG9ydCB7ZXhwYW5kRGltc0dyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0V4cGFuZERpbXNfZ3JhZCc7XG5pbXBvcnQge2V4cG0xR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRXhwbTFfZ3JhZCc7XG5pbXBvcnQge2Zsb29yR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRmxvb3JfZ3JhZCc7XG5pbXBvcnQge2Zsb29yRGl2R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRmxvb3JEaXZfZ3JhZCc7XG5pbXBvcnQge2Z1c2VkQmF0Y2hOb3JtR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvRnVzZWRCYXRjaE5vcm1fZ3JhZCc7XG5pbXBvcnQge2dhdGhlckdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0dhdGhlclYyX2dyYWQnO1xuaW1wb3J0IHtncmVhdGVyRXF1YWxHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9HcmVhdGVyRXF1YWxfZ3JhZCc7XG5pbXBvcnQge2lkZW50aXR5R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvSWRlbnRpdHlfZ3JhZCc7XG5pbXBvcnQge2lzRmluaXRlR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvSXNGaW5pdGVfZ3JhZCc7XG5pbXBvcnQge2lzSW5mR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvSXNJbmZfZ3JhZCc7XG5pbXBvcnQge2lzTmFuR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvSXNOYW5fZ3JhZCc7XG5pbXBvcnQge2xlYWt5UmVsdUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL0xlYWt5UmVsdV9ncmFkJztcbmltcG9ydCB7bG9nMXBHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Mb2cxcF9ncmFkJztcbmltcG9ydCB7bG9nR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTG9nX2dyYWQnO1xuaW1wb3J0IHtsb2dTb2Z0bWF4R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTG9nU29mdG1heF9ncmFkJztcbmltcG9ydCB7bHJuR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTFJOX2dyYWQnO1xuaW1wb3J0IHttYXhHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9NYXhfZ3JhZCc7XG5pbXBvcnQge21heGltdW1HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9NYXhpbXVtX2dyYWQnO1xuaW1wb3J0IHttYXhQb29sM0RHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9NYXhQb29sM0RfZ3JhZCc7XG5pbXBvcnQge21heFBvb2xHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9NYXhQb29sX2dyYWQnO1xuaW1wb3J0IHttZWFuR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTWVhbl9ncmFkJztcbmltcG9ydCB7bWluR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTWluX2dyYWQnO1xuaW1wb3J0IHttaW5pbXVtR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTWluaW11bV9ncmFkJztcbmltcG9ydCB7bWlycm9yUGFkR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTWlycm9yUGFkX2dyYWQnO1xuaW1wb3J0IHttb2RHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Nb2RfZ3JhZCc7XG5pbXBvcnQge211bHRpcGx5R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvTXVsdGlwbHlfZ3JhZCc7XG5pbXBvcnQge25lZ0dyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL05lZ19ncmFkJztcbmltcG9ydCB7b25lSG90R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvT25lSG90X2dyYWQnO1xuaW1wb3J0IHtvbmVzTGlrZUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL09uZXNMaWtlX2dyYWQnO1xuaW1wb3J0IHtwYWNrR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUGFja19ncmFkJztcbmltcG9ydCB7cGFkVjJHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9QYWRWMl9ncmFkJztcbmltcG9ydCB7cG93R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUG93X2dyYWQnO1xuaW1wb3J0IHtwcmVsdUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1ByZWx1X2dyYWQnO1xuaW1wb3J0IHtwcm9kR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUHJvZF9ncmFkJztcbmltcG9ydCB7ZGl2R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUmVhbERpdl9ncmFkJztcbmltcG9ydCB7cmVjaXByb2NhbEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1JlY2lwcm9jYWxfZ3JhZCc7XG5pbXBvcnQge3JlbHU2R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUmVsdTZfZ3JhZCc7XG5pbXBvcnQge3JlbHVHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9SZWx1X2dyYWQnO1xuaW1wb3J0IHtyZXNoYXBlR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUmVzaGFwZV9ncmFkJztcbmltcG9ydCB7cmVzaXplQmlsaW5lYXJHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9SZXNpemVCaWxpbmVhcl9ncmFkJztcbmltcG9ydCB7cmVzaXplTmVhcmVzdE5laWdoYm9yR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUmVzaXplTmVhcmVzdE5laWdoYm9yX2dyYWQnO1xuaW1wb3J0IHtyZXZlcnNlR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvUmV2ZXJzZV9ncmFkJztcbmltcG9ydCB7cm91bmRHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Sb3VuZF9ncmFkJztcbmltcG9ydCB7cnNxcnRHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Sc3FydF9ncmFkJztcbmltcG9ydCB7c2VsZWN0R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU2VsZWN0X2dyYWQnO1xuaW1wb3J0IHtzZWx1R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU2VsdV9ncmFkJztcbmltcG9ydCB7c2lnbW9pZEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1NpZ21vaWRfZ3JhZCc7XG5pbXBvcnQge3NpZ25HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9TaWduX2dyYWQnO1xuaW1wb3J0IHtzaW5HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9TaW5fZ3JhZCc7XG5pbXBvcnQge3NpbmhHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9TaW5oX2dyYWQnO1xuaW1wb3J0IHtzbGljZUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1NsaWNlX2dyYWQnO1xuaW1wb3J0IHtzb2Z0bWF4R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU29mdG1heF9ncmFkJztcbmltcG9ydCB7c29mdHBsdXNHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9Tb2Z0cGx1c19ncmFkJztcbmltcG9ydCB7c3BhY2VUb0JhdGNoTkRHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9TcGFjZVRvQmF0Y2hORF9ncmFkJztcbmltcG9ydCB7c3BsaXRWR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU3BsaXRWX2dyYWQnO1xuaW1wb3J0IHtzcXJ0R3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU3FydF9ncmFkJztcbmltcG9ydCB7c3F1YXJlR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU3F1YXJlX2dyYWQnO1xuaW1wb3J0IHtzcXVhcmVkRGlmZmVyZW5jZUdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1NxdWFyZWREaWZmZXJlbmNlX2dyYWQnO1xuaW1wb3J0IHtzdGVwR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU3RlcF9ncmFkJztcbmltcG9ydCB7c3ViR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvU3ViX2dyYWQnO1xuaW1wb3J0IHtzdW1HcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9TdW1fZ3JhZCc7XG5pbXBvcnQge3RhbkdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1Rhbl9ncmFkJztcbmltcG9ydCB7dGFuaEdyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1RhbmhfZ3JhZCc7XG5pbXBvcnQge3RpbGVHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9UaWxlX2dyYWQnO1xuaW1wb3J0IHt0cmFuc3Bvc2VHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9UcmFuc3Bvc2VfZ3JhZCc7XG5pbXBvcnQge3VucGFja0dyYWRDb25maWd9IGZyb20gJy4vZ3JhZGllbnRzL1VucGFja19ncmFkJztcbmltcG9ydCB7dW5zb3J0ZWRTZWdtZW50U3VtR3JhZENvbmZpZ30gZnJvbSAnLi9ncmFkaWVudHMvVW5zb3J0ZWRTZWdtZW50U3VtX2dyYWQnO1xuaW1wb3J0IHt6ZXJvc0xpa2VHcmFkQ29uZmlnfSBmcm9tICcuL2dyYWRpZW50cy9aZXJvc0xpa2VfZ3JhZCc7XG5pbXBvcnQge0dyYWRDb25maWd9IGZyb20gJy4va2VybmVsX3JlZ2lzdHJ5JztcbmltcG9ydCB7cmVnaXN0ZXJHcmFkaWVudH0gZnJvbSAnLi9rZXJuZWxfcmVnaXN0cnknO1xuXG4vLyBFeHBvcnQgYWxsIGtlcm5lbCBjb25maWdzIGhlcmUgc28gdGhhdCB0aGUgcGFja2FnZSBjYW4gYXV0byByZWdpc3RlciB0aGVtXG5jb25zdCBncmFkQ29uZmlnczogR3JhZENvbmZpZ1tdID0gW1xuICBhYnNHcmFkQ29uZmlnLFxuICBhY29zR3JhZENvbmZpZyxcbiAgYWNvc2hHcmFkQ29uZmlnLFxuICBhZGRHcmFkQ29uZmlnLFxuICBhZGROR3JhZENvbmZpZyxcbiAgYXJnTWF4R3JhZENvbmZpZyxcbiAgYXJnTWluR3JhZENvbmZpZyxcbiAgYXNpbkdyYWRDb25maWcsXG4gIGFzaW5oR3JhZENvbmZpZyxcbiAgYXRhbjJHcmFkQ29uZmlnLFxuICBhdGFuR3JhZENvbmZpZyxcbiAgYXRhbmhHcmFkQ29uZmlnLFxuICBhdmdQb29sM0RHcmFkQ29uZmlnLFxuICBhdmdQb29sR3JhZENvbmZpZyxcbiAgYmF0Y2hNYXRNdWxHcmFkQ29uZmlnLFxuICBiYXRjaFRvU3BhY2VOREdyYWRDb25maWcsXG4gIGJyb2FkY2FzdFRvR3JhZENvbmZpZyxcbiAgY2FzdEdyYWRDb25maWcsXG4gIGNlaWxHcmFkQ29uZmlnLFxuICBjbGlwQnlWYWx1ZUdyYWRDb25maWcsXG4gIGNvbXBsZXhBYnNHcmFkQ29uZmlnLFxuICBjb25jYXRHcmFkQ29uZmlnLFxuICBjb252MkRCYWNrcHJvcElucHV0R3JhZENvbmZpZyxcbiAgY29udjJER3JhZENvbmZpZyxcbiAgY29udjNER3JhZENvbmZpZyxcbiAgY29zR3JhZENvbmZpZyxcbiAgY29zaEdyYWRDb25maWcsXG4gIGN1bXN1bUdyYWRDb25maWcsXG4gIGRlcHRod2lzZUNvbnYyZE5hdGl2ZUdyYWRDb25maWcsXG4gIGRpbGF0aW9uMmRHcmFkQ29uZmlnLFxuICBkaXZHcmFkQ29uZmlnLFxuICBlbHVHcmFkQ29uZmlnLFxuICBlcmZHcmFkQ29uZmlnLFxuICBleHBHcmFkQ29uZmlnLFxuICBleHBhbmREaW1zR3JhZENvbmZpZyxcbiAgZXhwbTFHcmFkQ29uZmlnLFxuICBmbG9vckRpdkdyYWRDb25maWcsXG4gIGZsb29yR3JhZENvbmZpZyxcbiAgZnVzZWRCYXRjaE5vcm1HcmFkQ29uZmlnLFxuICBnYXRoZXJHcmFkQ29uZmlnLFxuICBncmVhdGVyRXF1YWxHcmFkQ29uZmlnLFxuICBpZGVudGl0eUdyYWRDb25maWcsXG4gIGlzRmluaXRlR3JhZENvbmZpZyxcbiAgaXNJbmZHcmFkQ29uZmlnLFxuICBpc05hbkdyYWRDb25maWcsXG4gIGxlYWt5UmVsdUdyYWRDb25maWcsXG4gIGxvZzFwR3JhZENvbmZpZyxcbiAgbG9nR3JhZENvbmZpZyxcbiAgbG9nU29mdG1heEdyYWRDb25maWcsXG4gIGxybkdyYWRDb25maWcsXG4gIG1heEdyYWRDb25maWcsXG4gIG1heEdyYWRDb25maWcsXG4gIG1heGltdW1HcmFkQ29uZmlnLFxuICBtYXhQb29sM0RHcmFkQ29uZmlnLFxuICBtYXhQb29sR3JhZENvbmZpZyxcbiAgbWVhbkdyYWRDb25maWcsXG4gIG1pbkdyYWRDb25maWcsXG4gIG1pbmltdW1HcmFkQ29uZmlnLFxuICBtaXJyb3JQYWRHcmFkQ29uZmlnLFxuICBtb2RHcmFkQ29uZmlnLFxuICBtdWx0aXBseUdyYWRDb25maWcsXG4gIG5lZ0dyYWRDb25maWcsXG4gIG9uZUhvdEdyYWRDb25maWcsXG4gIG9uZXNMaWtlR3JhZENvbmZpZyxcbiAgcGFja0dyYWRDb25maWcsXG4gIHBhZFYyR3JhZENvbmZpZyxcbiAgcGFkVjJHcmFkQ29uZmlnLFxuICBwb3dHcmFkQ29uZmlnLFxuICBwcmVsdUdyYWRDb25maWcsXG4gIHByb2RHcmFkQ29uZmlnLFxuICByZWNpcHJvY2FsR3JhZENvbmZpZyxcbiAgcmVsdTZHcmFkQ29uZmlnLFxuICByZWx1R3JhZENvbmZpZyxcbiAgcmVzaGFwZUdyYWRDb25maWcsXG4gIHJlc2l6ZUJpbGluZWFyR3JhZENvbmZpZyxcbiAgcmVzaXplTmVhcmVzdE5laWdoYm9yR3JhZENvbmZpZyxcbiAgcmV2ZXJzZUdyYWRDb25maWcsXG4gIHJvdW5kR3JhZENvbmZpZyxcbiAgcnNxcnRHcmFkQ29uZmlnLFxuICBzZWxlY3RHcmFkQ29uZmlnLFxuICBzZWx1R3JhZENvbmZpZyxcbiAgc2lnbW9pZEdyYWRDb25maWcsXG4gIHNpZ25HcmFkQ29uZmlnLFxuICBzaW5HcmFkQ29uZmlnLFxuICBzaW5oR3JhZENvbmZpZyxcbiAgc2xpY2VHcmFkQ29uZmlnLFxuICBzb2Z0bWF4R3JhZENvbmZpZyxcbiAgc29mdHBsdXNHcmFkQ29uZmlnLFxuICBzcGFjZVRvQmF0Y2hOREdyYWRDb25maWcsXG4gIHNwYWNlVG9CYXRjaE5ER3JhZENvbmZpZyxcbiAgc3BsaXRWR3JhZENvbmZpZyxcbiAgc3BsaXRWR3JhZENvbmZpZyxcbiAgc3FydEdyYWRDb25maWcsXG4gIHNxdWFyZWREaWZmZXJlbmNlR3JhZENvbmZpZyxcbiAgc3F1YXJlR3JhZENvbmZpZyxcbiAgc3RlcEdyYWRDb25maWcsXG4gIHN1YkdyYWRDb25maWcsXG4gIHN1bUdyYWRDb25maWcsXG4gIHRhbkdyYWRDb25maWcsXG4gIHRhbmhHcmFkQ29uZmlnLFxuICB0aWxlR3JhZENvbmZpZyxcbiAgdHJhbnNwb3NlR3JhZENvbmZpZyxcbiAgdW5wYWNrR3JhZENvbmZpZyxcbiAgdW5zb3J0ZWRTZWdtZW50U3VtR3JhZENvbmZpZyxcbiAgemVyb3NMaWtlR3JhZENvbmZpZ1xuXTtcblxuZm9yIChjb25zdCBncmFkaWVudENvbmZpZyBvZiBncmFkQ29uZmlncykge1xuICByZWdpc3RlckdyYWRpZW50KGdyYWRpZW50Q29uZmlnKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/hash_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ // Workaround for allowing cjs module to be included in bundle created by
// rollup.
__turbopack_context__.s([
    "fingerPrint64",
    ()=>fingerPrint64,
    "hexToLong",
    ()=>hexToLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$long$2f$src$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/long/src/long.js [app-ssr] (ecmascript)");
;
// tslint:disable-next-line
const Long = // tslint:disable-next-line
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$long$2f$src$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$long$2f$src$2f$long$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
function hexToLong(hex) {
    return Long.fromString(hex, true, 16);
}
// Some primes between 2^63 and 2^64 for various uses.
// Hex 0xc3a5c85c97cb3127
const k0 = hexToLong('c3a5c85c97cb3127');
// Hex 0xb492b66fbe98f273
const k1 = hexToLong('b492b66fbe98f273');
// Hex 0x9ae16a3b2f90404f
const k2 = hexToLong('9ae16a3b2f90404f');
function shiftMix(val) {
    return val.xor(val.shru(47));
}
function fetch(s, offset, numBytes) {
    const bytes = s.slice(offset, offset + numBytes);
    return Long.fromBytes(Array.from(bytes), true, true);
}
function fetch64(s, offset) {
    return fetch(s, offset, 8);
}
function fetch32(s, offset) {
    return fetch(s, offset, 4);
}
function rotate64(val, shift) {
    // Avoid shifting by 64: doing so yields an undefined result.
    return shift === 0 ? val : val.shru(shift).or(val.shl(64 - shift));
}
function hashLen16(u, v, mul = hexToLong('9ddfea08eb382d69')) {
    // Murmur-inspired hashing.
    let a = u.xor(v).mul(mul);
    a = a.xor(a.shru(47));
    let b = v.xor(a).mul(mul);
    b = b.xor(b.shru(47));
    b = b.mul(mul);
    return b;
}
// Return a 16-byte hash for 48 bytes.  Quick and dirty.
// Callers do best to use "random-looking" values for a and b.
function weakHashLen32WithSeeds(w, x, y, z, a, b) {
    a = a.add(w);
    b = rotate64(b.add(a).add(z), 21);
    const c = a;
    a = a.add(x);
    a = a.add(y);
    b = b.add(rotate64(a, 44));
    return [
        a.add(z),
        b.add(c)
    ];
}
function weakHashLen32WithSeedsStr(s, offset, a, b) {
    return weakHashLen32WithSeeds(fetch64(s, offset), fetch64(s, offset + 8), fetch64(s, offset + 16), fetch64(s, offset + 24), a, b);
}
function hashLen0to16(s, len = s.length) {
    if (len >= 8) {
        const mul = k2.add(len * 2);
        const a = fetch64(s, 0).add(k2);
        const b = fetch64(s, len - 8);
        const c = rotate64(b, 37).mul(mul).add(a);
        const d = rotate64(a, 25).add(b).mul(mul);
        return hashLen16(c, d, mul);
    }
    if (len >= 4) {
        const mul = k2.add(len * 2);
        const a = fetch32(s, 0);
        return hashLen16(a.shl(3).add(len), fetch32(s, len - 4), mul);
    }
    if (len > 0) {
        const a = s[0];
        const b = s[len >> 1];
        const c = s[len - 1];
        const y = a + (b << 8);
        const z = len + (c << 2);
        return shiftMix(k2.mul(y).xor(k0.mul(z))).mul(k2);
    }
    return k2;
}
function hashLen17to32(s, len = s.length) {
    const mul = k2.add(len * 2);
    const a = fetch64(s, 0).mul(k1);
    const b = fetch64(s, 8);
    const c = fetch64(s, len - 8).mul(mul);
    const d = fetch64(s, len - 16).mul(k2);
    return hashLen16(rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d), a.add(rotate64(b.add(k2), 18)).add(c), mul);
}
function hashLen33to64(s, len = s.length) {
    const mul = k2.add(len * 2);
    const a = fetch64(s, 0).mul(k2);
    const b = fetch64(s, 8);
    const c = fetch64(s, len - 8).mul(mul);
    const d = fetch64(s, len - 16).mul(k2);
    const y = rotate64(a.add(b), 43).add(rotate64(c, 30)).add(d);
    const z = hashLen16(y, a.add(rotate64(b.add(k2), 18)).add(c), mul);
    const e = fetch64(s, 16).mul(mul);
    const f = fetch64(s, 24);
    const g = y.add(fetch64(s, len - 32)).mul(mul);
    const h = z.add(fetch64(s, len - 24)).mul(mul);
    return hashLen16(rotate64(e.add(f), 43).add(rotate64(g, 30)).add(h), e.add(rotate64(f.add(a), 18)).add(g), mul);
}
function fingerPrint64(s, len = s.length) {
    const seed = Long.fromNumber(81, true);
    if (len <= 32) {
        if (len <= 16) {
            return hashLen0to16(s, len);
        } else {
            return hashLen17to32(s, len);
        }
    } else if (len <= 64) {
        return hashLen33to64(s, len);
    }
    // For strings over 64 bytes we loop.  Internal state consists of
    // 56 bytes: v, w, x, y, and z.
    let x = seed;
    let y = seed.mul(k1).add(113);
    let z = shiftMix(y.mul(k2).add(113)).mul(k2);
    let v = [
        Long.UZERO,
        Long.UZERO
    ];
    let w = [
        Long.UZERO,
        Long.UZERO
    ];
    x = x.mul(k2).add(fetch64(s, 0));
    let offset = 0;
    // Set end so that after the loop we have 1 to 64 bytes left to process.
    const end = (len - 1 >> 6) * 64;
    const last64 = end + (len - 1 & 63) - 63;
    do {
        x = rotate64(x.add(y).add(v[0]).add(fetch64(s, offset + 8)), 37).mul(k1);
        y = rotate64(y.add(v[1]).add(fetch64(s, offset + 48)), 42).mul(k1);
        x = x.xor(w[1]);
        y = y.add(v[0]).add(fetch64(s, offset + 40));
        z = rotate64(z.add(w[0]), 33).mul(k1);
        v = weakHashLen32WithSeedsStr(s, offset, v[1].mul(k1), x.add(w[0]));
        w = weakHashLen32WithSeedsStr(s, offset + 32, z.add(w[1]), y.add(fetch64(s, offset + 16)));
        [z, x] = [
            x,
            z
        ];
        offset += 64;
    }while (offset !== end)
    const mul = k1.add(z.and(0xff).shl(1));
    // Point to the last 64 bytes of input.
    offset = last64;
    w[0] = w[0].add(len - 1 & 63);
    v[0] = v[0].add(w[0]);
    w[0] = w[0].add(v[0]);
    x = rotate64(x.add(y).add(v[0]).add(fetch64(s, offset + 8)), 37).mul(mul);
    y = rotate64(y.add(v[1]).add(fetch64(s, offset + 48)), 42).mul(mul);
    x = x.xor(w[1].mul(9));
    y = y.add(v[0].mul(9).add(fetch64(s, offset + 40)));
    z = rotate64(z.add(w[0]), 33).mul(mul);
    v = weakHashLen32WithSeedsStr(s, offset, v[1].mul(mul), x.add(w[0]));
    w = weakHashLen32WithSeedsStr(s, offset + 32, z.add(w[1]), y.add(fetch64(s, offset + 16)));
    [z, x] = [
        x,
        z
    ];
    return hashLen16(hashLen16(v[0], w[0], mul).add(shiftMix(y).mul(k0)).add(z), hashLen16(v[1], w[1], mul).add(x), mul);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaF91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9oYXNoX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBQ0gseUVBQXlFO0FBQ3pFLFVBQVU7QUFDVixPQUFPLEtBQUssV0FBVyxNQUFNLE1BQU0sQ0FBQztBQUNwQywyQkFBMkI7QUFDM0IsTUFBTSxJQUFJO0FBQ04sMkJBQTJCO0FBQzFCLFdBQW1CLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQztBQUVoRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEdBQVc7SUFDbkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELHNEQUFzRDtBQUN0RCx5QkFBeUI7QUFDekIsTUFBTSxFQUFFLEdBQVMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDL0MseUJBQXlCO0FBQ3pCLE1BQU0sRUFBRSxHQUFTLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQy9DLHlCQUF5QjtBQUN6QixNQUFNLEVBQUUsR0FBUyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUvQyxTQUFTLFFBQVEsQ0FBQyxHQUFTO0lBQ3pCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLENBQWEsRUFBRSxNQUFjLEVBQUUsUUFBZ0I7SUFDNUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJ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QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDbEQsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsQ0FBYSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTTtJQUNsRCxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFD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QUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTNDLEdBQUc7UUFDRCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxHQUFHLHlCQUF5QixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxHQUFHLHlCQUF5QixDQUN6QixDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sSUFBSSxFQUFFLENBQUM7S0FDZCxRQUFRLE1BQU0sS0FBSyxHQUFHLEVBQUU7SUFDekIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLHVDQUF1QztJQUN2QyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBRWhCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXRCLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsR0FBRyx5QkFBeUIsQ0FDekIsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVoQixPQUFPLFNBQVMsQ0FDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDMUQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG4vLyBXb3JrYXJvdW5kIGZvciBhbGxvd2luZyBjanMgbW9kdWxlIHRvIGJlIGluY2x1ZGVkIGluIGJ1bmRsZSBjcmVhdGVkIGJ5XG4vLyByb2xsdXAuXG5pbXBvcnQgKiBhcyBMb25nRXhwb3J0cyBmcm9tICdsb25nJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTG9uZzogTG9uZ0V4cG9ydHMuTG9uZ0NvbnN0cnVjdG9yID1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAoTG9uZ0V4cG9ydHMgYXMgYW55KS5kZWZhdWx0IHx8IExvbmdFeHBvcnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9Mb25nKGhleDogc3RyaW5nKTogTG9uZyB7XG4gIHJldHVybiBMb25nLmZyb21TdHJpbmcoaGV4LCB0cnVlLCAxNik7XG59XG5cbi8vIFNvbWUgcHJpbWVzIGJldHdlZW4gMl42MyBhbmQgMl42NCBmb3IgdmFyaW91cyB1c2VzLlxuLy8gSGV4IDB4YzNhNWM4NWM5N2NiMzEyN1xuY29uc3QgazA6IExvbmcgPSBoZXhUb0xvbmcoJ2MzYTVjODVjOTdjYjMxMjcnKTtcbi8vIEhleCAweGI0OTJiNjZmYmU5OGYyNzNcbmNvbnN0IGsxOiBMb25nID0gaGV4VG9Mb25nKCdiNDkyYjY2ZmJlOThmMjczJyk7XG4vLyBIZXggMHg5YWUxNmEzYjJmOTA0MDRmXG5jb25zdCBrMjogTG9uZyA9IGhleFRvTG9uZygnOWFlMTZhM2IyZjkwNDA0ZicpO1xuXG5mdW5jdGlvbiBzaGlmdE1peCh2YWw6IExvbmcpOiBMb25nIHtcbiAgcmV0dXJuIHZhbC54b3IodmFsLnNocnUoNDcpKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2goczogVWludDhBcnJheSwgb2Zmc2V0OiBudW1iZXIsIG51bUJ5dGVzOiBudW1iZXIpOiBMb25nIHtcbiAgY29uc3QgYnl0ZXMgPSBzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbnVtQnl0ZXMpO1xuICByZXR1cm4gTG9uZy5mcm9tQnl0ZXMoQXJyYXkuZnJvbShieXRlcyksIHRydWUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBmZXRjaDY0KHM6IFVpbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyKTogTG9uZyB7XG4gIHJldHVybiBmZXRjaChzLCBvZmZzZXQsIDgpO1xufVxuXG5mdW5jdGlvbiBmZXRjaDMyKHM6IFVpbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyKTogTG9uZyB7XG4gIHJldHVybiBmZXRjaChzLCBvZmZzZXQsIDQpO1xufVxuXG5mdW5jdGlvbiByb3RhdGU2NCh2YWw6IExvbmcsIHNoaWZ0OiBudW1iZXIpOiBMb25nIHtcbiAgLy8gQXZvaWQgc2hpZnRpbmcgYnkgNjQ6IGRvaW5nIHNvIHlpZWxkcyBhbiB1bmRlZmluZWQgcmVzdWx0LlxuICByZXR1cm4gc2hpZnQgPT09IDAgPyB2YWwgOiB2YWwuc2hydShzaGlmdCkub3IodmFsLnNobCg2NCAtIHNoaWZ0KSk7XG59XG5cbmZ1bmN0aW9uIGhhc2hMZW4xNih1OiBMb25nLCB2OiBMb25nLCBtdWwgPSBoZXhUb0xvbmcoJzlkZGZlYTA4ZWIzODJkNjknKSkge1xuICAvLyBNdXJtdXItaW5zcGlyZWQgaGFzaGluZy5cbiAgbGV0IGEgPSB1Lnhvcih2KS5tdWwobXVsKTtcbiAgYSA9IGEueG9yKGEuc2hydSg0NykpO1xuICBsZXQgYiA9IHYueG9yKGEpLm11bChtdWwpO1xuICBiID0gYi54b3IoYi5zaHJ1KDQ3KSk7XG4gIGIgPSBiLm11bChtdWwpO1xuICByZXR1cm4gYjtcbn1cblxuLy8gUmV0dXJuIGEgMTYtYnl0ZSBoYXNoIGZvciA0OCBieXRlcy4gIFF1aWNrIGFuZCBkaXJ0eS5cbi8vIENhbGxlcnMgZG8gYmVzdCB0byB1c2UgXCJyYW5kb20tbG9va2luZ1wiIHZhbHVlcyBmb3IgYSBhbmQgYi5cbmZ1bmN0aW9uIHdlYWtIYXNoTGVuMzJXaXRoU2VlZHMoXG4gICAgdzogTG9uZywgeDogTG9uZywgeTogTG9uZywgejogTG9uZywgYTogTG9uZywgYjogTG9uZykge1xuICBhID0gYS5hZGQodyk7XG4gIGIgPSByb3RhdGU2NChiLmFkZChhKS5hZGQoeiksIDIxKTtcbiAgY29uc3QgYyA9IGE7XG4gIGEgPSBhLmFkZCh4KTtcbiAgYSA9IGEuYWRkKHkpO1xuICBiID0gYi5hZGQocm90YXRlNjQoYSwgNDQpKTtcbiAgcmV0dXJuIFthLmFkZCh6KSwgYi5hZGQoYyldO1xufVxuXG5mdW5jdGlvbiB3ZWFrSGFzaExlbjMyV2l0aFNlZWRzU3RyKFxuICAgIHM6IFVpbnQ4QXJyYXksIG9mZnNldDogbnVtYmVyLCBhOiBMb25nLCBiOiBMb25nKSB7XG4gIHJldHVybiB3ZWFrSGFzaExlbjMyV2l0aFNlZWRzKFxuICAgICAgZmV0Y2g2NChzLCBvZmZzZXQpLCBmZXRjaDY0KHMsIG9mZnNldCArIDgpLCBmZXRjaDY0KHMsIG9mZnNldCArIDE2KSxcbiAgICAgIGZldGNoNjQocywgb2Zmc2V0ICsgMjQpLCBhLCBiKTtcbn1cblxuZnVuY3Rpb24gaGFzaExlbjB0bzE2KHM6IFVpbnQ4QXJyYXksIGxlbiA9IHMubGVuZ3RoKTogTG9uZyB7XG4gIGlmIChsZW4gPj0gOCkge1xuICAgIGNvbnN0IG11bCA9IGsyLmFkZChsZW4gKiAyKTtcbiAgICBjb25zdCBhID0gZmV0Y2g2NChzLCAwKS5hZGQoazIpO1xuICAgIGNvbnN0IGIgPSBmZXRjaDY0KHMsIGxlbiAtIDgpO1xuICAgIGNvbnN0IGMgPSByb3RhdGU2NChiLCAzNykubXVsKG11bCkuYWRkKGEpO1xuICAgIGNvbnN0IGQgPSByb3RhdGU2NChhLCAyNSkuYWRkKGIpLm11bChtdWwpO1xuICAgIHJldHVybiBoYXNoTGVuMTYoYywgZCwgbXVsKTtcbiAgfVxuICBpZiAobGVuID49IDQpIHtcbiAgICBjb25zdCBtdWwgPSBrMi5hZGQobGVuICogMik7XG4gICAgY29uc3QgYSA9IGZldGNoMzIocywgMCk7XG4gICAgcmV0dXJuIGhhc2hMZW4xNihhLnNobCgzKS5hZGQobGVuKSwgZmV0Y2gzMihzLCBsZW4gLSA0KSwgbXVsKTtcbiAgfVxuICBpZiAobGVuID4gMCkge1xuICAgIGNvbnN0IGEgPSBzWzBdO1xuICAgIGNvbnN0IGIgPSBzW2xlbiA+PiAxXTtcbiAgICBjb25zdCBjID0gc1tsZW4gLSAxXTtcbiAgICBjb25zdCB5ID0gYSArIChiIDw8IDgpO1xuICAgIGNvbnN0IHogPSBsZW4gKyAoYyA8PCAyKTtcbiAgICByZXR1cm4gc2hpZnRNaXgoazIubXVsKHkpLnhvcihrMC5tdWwoeikpKS5tdWwoazIpO1xuICB9XG4gIHJldHVybiBrMjtcbn1cblxuZnVuY3Rpb24gaGFzaExlbjE3dG8zMihzOiBVaW50OEFycmF5LCBsZW4gPSBzLmxlbmd0aCk6IExvbmcge1xuICBjb25zdCBtdWwgPSBrMi5hZGQobGVuICogMik7XG4gIGNvbnN0IGEgPSBmZXRjaDY0KHMsIDApLm11bChrMSk7XG4gIGNvbnN0IGIgPSBmZXRjaDY0KHMsIDgpO1xuICBjb25zdCBjID0gZmV0Y2g2NChzLCBsZW4gLSA4KS5tdWwobXVsKTtcbiAgY29uc3QgZCA9IGZldGNoNjQocywgbGVuIC0gMTYpLm11bChrMik7XG4gIHJldHVybiBoYXNoTGVuMTYoXG4gICAgICByb3RhdGU2NChhLmFkZChiKSwgNDMpLmFkZChyb3RhdGU2NChjLCAzMCkpLmFkZChkKSxcbiAgICAgIGEuYWRkKHJvdGF0ZTY0KGIuYWRkKGsyKSwgMTgpKS5hZGQoYyksIG11bCk7XG59XG5cbmZ1bmN0aW9uIGhhc2hMZW4zM3RvNjQoczogVWludDhBcnJheSwgbGVuID0gcy5sZW5ndGgpOiBMb25nIHtcbiAgY29uc3QgbXVsID0gazIuYWRkKGxlbiAqIDIpO1xuICBjb25zdCBhID0gZmV0Y2g2NChzLCAwKS5tdWwoazIpO1xuICBjb25zdCBiID0gZmV0Y2g2NChzLCA4KTtcbiAgY29uc3QgYyA9IGZldGNoNjQocywgbGVuIC0gOCkubXVsKG11bCk7XG4gIGNvbnN0IGQgPSBmZXRjaDY0KHMsIGxlbiAtIDE2KS5tdWwoazIpO1xuICBjb25zdCB5ID0gcm90YXRlNjQoYS5hZGQoYiksIDQzKS5hZGQocm90YXRlNjQoYywgMzApKS5hZGQoZCk7XG4gIGNvbnN0IHogPSBoYXNoTGVuMTYoeSwgYS5hZGQocm90YXRlNjQoYi5hZGQoazIpLCAxOCkpLmFkZChjKSwgbXVsKTtcbiAgY29uc3QgZSA9IGZldGNoNjQocywgMTYpLm11bChtdWwpO1xuICBjb25zdCBmID0gZmV0Y2g2NChzLCAyNCk7XG4gIGNvbnN0IGcgPSB5LmFkZChmZXRjaDY0KHMsIGxlbiAtIDMyKSkubXVsKG11bCk7XG4gIGNvbnN0IGggPSB6LmFkZChmZXRjaDY0KHMsIGxlbiAtIDI0KSkubXVsKG11bCk7XG4gIHJldHVybiBoYXNoTGVuMTYoXG4gICAgICByb3RhdGU2NChlLmFkZChmKSwgNDMpLmFkZChyb3RhdGU2NChnLCAzMCkpLmFkZChoKSxcbiAgICAgIGUuYWRkKHJvdGF0ZTY0KGYuYWRkKGEpLCAxOCkpLmFkZChnKSwgbXVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmdlclByaW50NjQoczogVWludDhBcnJheSwgbGVuID0gcy5sZW5ndGgpOiBMb25nIHtcbiAgY29uc3Qgc2VlZDogTG9uZyA9IExvbmcuZnJvbU51bWJlcig4MSwgdHJ1ZSk7XG4gIGlmIChsZW4gPD0gMzIpIHtcbiAgICBpZiAobGVuIDw9IDE2KSB7XG4gICAgICByZXR1cm4gaGFzaExlbjB0bzE2KHMsIGxlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBoYXNoTGVuMTd0bzMyKHMsIGxlbik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8PSA2NCkge1xuICAgIHJldHVybiBoYXNoTGVuMzN0bzY0KHMsIGxlbik7XG4gIH1cblxuICAvLyBGb3Igc3RyaW5ncyBvdmVyIDY0IGJ5dGVzIHdlIGxvb3AuICBJbnRlcm5hbCBzdGF0ZSBjb25zaXN0cyBvZlxuICAvLyA1NiBieXRlczogdiwgdywgeCwgeSwgYW5kIHouXG4gIGxldCB4ID0gc2VlZDtcbiAgbGV0IHkgPSBzZWVkLm11bChrMSkuYWRkKDExMyk7XG5cbiAgbGV0IHogPSBzaGlmdE1peCh5Lm11bChrMikuYWRkKDExMykpLm11bChrMik7XG4gIGxldCB2ID0gW0xvbmcuVVpFUk8sIExvbmcuVVpFUk9dO1xuICBsZXQgdyA9IFtMb25nLlVaRVJPLCBMb25nLlVaRVJPXTtcbiAgeCA9IHgubXVsKGsyKS5hZGQoZmV0Y2g2NChzLCAwKSk7XG5cbiAgbGV0IG9mZnNldCA9IDA7XG4gIC8vIFNldCBlbmQgc28gdGhhdCBhZnRlciB0aGUgbG9vcCB3ZSBoYXZlIDEgdG8gNjQgYnl0ZXMgbGVmdCB0byBwcm9jZXNzLlxuICBjb25zdCBlbmQgPSAoKGxlbiAtIDEpID4+IDYpICogNjQ7XG4gIGNvbnN0IGxhc3Q2NCA9IGVuZCArICgobGVuIC0gMSkgJiA2MykgLSA2MztcblxuICBkbyB7XG4gICAgeCA9IHJvdGF0ZTY0KHguYWRkKHkpLmFkZCh2WzBdKS5hZGQoZmV0Y2g2NChzLCBvZmZzZXQgKyA4KSksIDM3KS5tdWwoazEpO1xuICAgIHkgPSByb3RhdGU2NCh5LmFkZCh2WzFdKS5hZGQoZmV0Y2g2NChzLCBvZmZzZXQgKyA0OCkpLCA0MikubXVsKGsxKTtcbiAgICB4ID0geC54b3Iod1sxXSk7XG4gICAgeSA9IHkuYWRkKHZbMF0pLmFkZChmZXRjaDY0KHMsIG9mZnNldCArIDQwKSk7XG4gICAgeiA9IHJvdGF0ZTY0KHouYWRkKHdbMF0pLCAzMykubXVsKGsxKTtcbiAgICB2ID0gd2Vha0hhc2hMZW4zMldpdGhTZWVkc1N0cihzLCBvZmZzZXQsIHZbMV0ubXVsKGsxKSwgeC5hZGQod1swXSkpO1xuICAgIHcgPSB3ZWFrSGFzaExlbjMyV2l0aFNlZWRzU3RyKFxuICAgICAgICBzLCBvZmZzZXQgKyAzMiwgei5hZGQod1sxXSksIHkuYWRkKGZldGNoNjQocywgb2Zmc2V0ICsgMTYpKSk7XG5cbiAgICBbeiwgeF0gPSBbeCwgel07XG4gICAgb2Zmc2V0ICs9IDY0O1xuICB9IHdoaWxlIChvZmZzZXQgIT09IGVuZCk7XG4gIGNvbnN0IG11bCA9IGsxLmFkZCh6LmFuZCgweGZmKS5zaGwoMSkpO1xuICAvLyBQb2ludCB0byB0aGUgbGFzdCA2NCBieXRlcyBvZiBpbnB1dC5cbiAgb2Zmc2V0ID0gbGFzdDY0O1xuXG4gIHdbMF0gPSB3WzBdLmFkZCgobGVuIC0gMSkgJiA2Myk7XG4gIHZbMF0gPSB2WzBdLmFkZCh3WzBdKTtcbiAgd1swXSA9IHdbMF0uYWRkKHZbMF0pO1xuXG4gIHggPSByb3RhdGU2NCh4LmFkZCh5KS5hZGQodlswXSkuYWRkKGZldGNoNjQocywgb2Zmc2V0ICsgOCkpLCAzNykubXVsKG11bCk7XG4gIHkgPSByb3RhdGU2NCh5LmFkZCh2WzFdKS5hZGQoZmV0Y2g2NChzLCBvZmZzZXQgKyA0OCkpLCA0MikubXVsKG11bCk7XG4gIHggPSB4Lnhvcih3WzFdLm11bCg5KSk7XG4gIHkgPSB5LmFkZCh2WzBdLm11bCg5KS5hZGQoZmV0Y2g2NChzLCBvZmZzZXQgKyA0MCkpKTtcbiAgeiA9IHJvdGF0ZTY0KHouYWRkKHdbMF0pLCAzMykubXVsKG11bCk7XG4gIHYgPSB3ZWFrSGFzaExlbjMyV2l0aFNlZWRzU3RyKHMsIG9mZnNldCwgdlsxXS5tdWwobXVsKSwgeC5hZGQod1swXSkpO1xuICB3ID0gd2Vha0hhc2hMZW4zMldpdGhTZWVkc1N0cihcbiAgICAgIHMsIG9mZnNldCArIDMyLCB6LmFkZCh3WzFdKSwgeS5hZGQoZmV0Y2g2NChzLCBvZmZzZXQgKyAxNikpKTtcblxuICBbeiwgeF0gPSBbeCwgel07XG5cbiAgcmV0dXJuIGhhc2hMZW4xNihcbiAgICAgIGhhc2hMZW4xNih2WzBdLCB3WzBdLCBtdWwpLmFkZChzaGlmdE1peCh5KS5tdWwoazApKS5hZGQoeiksXG4gICAgICBoYXNoTGVuMTYodlsxXSwgd1sxXSwgbXVsKS5hZGQoeCksIG11bCk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arraysEqual",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arraysEqual"],
    "arraysEqualWithNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arraysEqualWithNull"],
    "assert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"],
    "assertNonNegativeIntegerDimensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNonNegativeIntegerDimensions"],
    "assertNonNull",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNonNull"],
    "assertShapesMatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertShapesMatch"],
    "bytesFromStringArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesFromStringArray"],
    "bytesPerElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesPerElement"],
    "checkConversionForErrors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkConversionForErrors"],
    "clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"],
    "computeStrides",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeStrides"],
    "convertBackendValuesAndArrayBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertBackendValuesAndArrayBuffer"],
    "createScalarValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createScalarValue"],
    "createShuffledIndices",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createShuffledIndices"],
    "decodeString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeString"],
    "distSquared",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distSquared"],
    "encodeString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeString"],
    "fetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fetch"],
    "fingerPrint64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$hash_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fingerPrint64"],
    "flatten",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flatten"],
    "getArrayFromDType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayFromDType"],
    "getTypedArrayFromDType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTypedArrayFromDType"],
    "hasEncodingLoss",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasEncodingLoss"],
    "hexToLong",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$hash_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToLong"],
    "indexToLoc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indexToLoc"],
    "inferDtype",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inferDtype"],
    "inferFromImplicitShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inferFromImplicitShape"],
    "isBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBoolean"],
    "isFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"],
    "isInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInt"],
    "isNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"],
    "isPromise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPromise"],
    "isScalarShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isScalarShape"],
    "isString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"],
    "isTypedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"],
    "isValidDtype",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidDtype"],
    "locToIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locToIndex"],
    "makeOnesTypedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeOnesTypedArray"],
    "makeZerosNestedTypedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeZerosNestedTypedArray"],
    "makeZerosTypedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeZerosTypedArray"],
    "nearestDivisor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nearestDivisor"],
    "nearestLargerEven",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nearestLargerEven"],
    "now",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["now"],
    "parseAxisParam",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAxisParam"],
    "randUniform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randUniform"],
    "repeatedTry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["repeatedTry"],
    "rightPad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rightPad"],
    "shuffle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffle"],
    "shuffleCombo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffleCombo"],
    "sizeFromShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeFromShape"],
    "sizeToSquarishShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizeToSquarishShape"],
    "squeezeShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squeezeShape"],
    "sum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"],
    "swap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swap"],
    "tanh",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tanh"],
    "toNestedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNestedArray"],
    "toTypedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toTypedArray"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$hash_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/hash_util.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/test_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "TEST_EPSILON_FLOAT16",
    ()=>TEST_EPSILON_FLOAT16,
    "createVideoElement",
    ()=>createVideoElement,
    "encodeStrings",
    ()=>encodeStrings,
    "expectArrayBuffersEqual",
    ()=>expectArrayBuffersEqual,
    "expectArraysClose",
    ()=>expectArraysClose,
    "expectArraysEqual",
    ()=>expectArraysEqual,
    "expectNumbersClose",
    ()=>expectNumbersClose,
    "expectPromiseToFail",
    ()=>expectPromiseToFail,
    "expectValuesInRange",
    ()=>expectValuesInRange,
    "play",
    ()=>play,
    "testEpsilon",
    ()=>testEpsilon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <locals>");
;
;
;
const TEST_EPSILON_FLOAT32 = 1e-3;
const TEST_EPSILON_FLOAT16 = 1e-1;
function expectArraysClose(actual, expected, epsilon) {
    if (epsilon == null) {
        epsilon = testEpsilon();
    }
    return expectArraysPredicate(actual, expected, (a, b)=>areClose(a, b, epsilon));
}
function testEpsilon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENGINE"].backend.floatPrecision() === 32 ? TEST_EPSILON_FLOAT32 : TEST_EPSILON_FLOAT16;
}
function expectArraysPredicate(actual, expected, predicate) {
    let checkClassType = true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(actual) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(expected)) {
        checkClassType = false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(actual) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(expected)) {
        checkClassType = true;
    }
    if (checkClassType) {
        const aType = actual.constructor.name;
        const bType = expected.constructor.name;
        if (aType !== bType) {
            throw new Error(`Arrays are of different type. Actual: ${aType}. ` + `Expected: ${bType}`);
        }
    }
    if (Array.isArray(actual) && Array.isArray(expected)) {
        const actualShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inferShape"])(actual);
        const expectedShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inferShape"])(expected);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arraysEqual"])(actualShape, expectedShape)) {
            throw new Error(`Arrays have different shapes. ` + `Actual: [${actualShape}]. Expected: [${expectedShape}]`);
        }
    }
    const actualFlat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(actual) ? actual : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flatten"])(actual);
    const expectedFlat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isTypedArray"])(expected) ? expected : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flatten"])(expected);
    if (actualFlat.length !== expectedFlat.length) {
        throw new Error(`Arrays have different lengths actual: ${actualFlat.length} vs ` + `expected: ${expectedFlat.length}.\n` + `Actual:   ${actualFlat}.\n` + `Expected: ${expectedFlat}.`);
    }
    for(let i = 0; i < expectedFlat.length; ++i){
        const a = actualFlat[i];
        const e = expectedFlat[i];
        if (!predicate(a, e)) {
            throw new Error(`Arrays differ: actual[${i}] = ${a}, expected[${i}] = ${e}.\n` + `Actual:   ${actualFlat}.\n` + `Expected: ${expectedFlat}.`);
        }
    }
    if (typeof expect !== 'undefined') {
        expect().nothing();
    }
}
function expectPromiseToFail(fn, done) {
    fn().then(()=>done.fail(), ()=>done());
    if (typeof expect !== 'undefined') {
        expect().nothing();
    }
}
function expectArraysEqual(actual, expected) {
    const exp = typeof expected === 'string' || typeof expected === 'number' || typeof expected === 'boolean' ? [
        expected
    ] : expected;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(actual) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(actual[0]) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(expected) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(expected[0])) {
        // tslint:disable-next-line: triple-equals
        return expectArraysPredicate(actual, exp, (a, b)=>a == b);
    }
    return expectArraysPredicate(actual, expected, (a, b)=>areClose(a, b, 0));
}
function expectNumbersClose(a, e, epsilon) {
    if (epsilon == null) {
        epsilon = testEpsilon();
    }
    if (!areClose(a, e, epsilon)) {
        throw new Error(`Numbers differ: actual === ${a}, expected === ${e}`);
    }
    if (typeof expect !== 'undefined') {
        expect().nothing();
    }
}
function areClose(a, e, epsilon) {
    if (!isFinite(a) && !isFinite(e)) {
        return true;
    }
    if (isNaN(a) || isNaN(e) || Math.abs(a - e) > epsilon) {
        return false;
    }
    return true;
}
function expectValuesInRange(actual, low, high) {
    for(let i = 0; i < actual.length; i++){
        if (actual[i] < low || actual[i] > high) {
            throw new Error(`Value out of range:${actual[i]} low: ${low}, high: ${high}`);
        }
    }
}
function expectArrayBuffersEqual(actual, expected) {
    // Safari does not like comparing ArrayBuffers directly. Wrapping in
    // a Float32Array solves this issue.
    const actualArray = new Float32Array(actual);
    const expectedArray = new Float32Array(expected);
    if (actualArray.length !== expectedArray.length) {
        throw new Error('Expected ArrayBuffer to be of length ' + `${expectedArray.length}, but it was ${actualArray.length}`);
    }
    for(let i = 0; i < expectedArray.length; i++){
        if (actualArray[i] !== expectedArray[i]) {
            throw new Error(`Expected ArrayBuffer value at ${i} to be ` + `${expectedArray[i]} but got ${actualArray[i]} instead`);
        }
    }
}
function encodeStrings(a) {
    for(let i = 0; i < a.length; i++){
        const val = a[i];
        if (Array.isArray(val)) {
            encodeStrings(val);
        } else {
            a[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeString"])(val);
        }
    }
    return a;
}
function createVideoElement(source) {
    const video = document.createElement('video');
    if ('playsInline' in video) {
        // tslint:disable-next-line:no-any
        video.playsInline = true;
    }
    video.muted = true;
    video.loop = true;
    video.style.position = 'fixed';
    video.style.left = '0px';
    video.style.top = '0px';
    video.preload = 'auto';
    video.appendChild(source);
    return new Promise((resolve)=>{
        video.addEventListener('loadeddata', (_)=>resolve(video));
        video.load();
    });
}
async function play(video) {
    await video.play();
    if ('requestVideoFrameCallback' in video) {
        await new Promise((resolve)=>{
            // tslint:disable-next-line:no-any
            video.requestVideoFrameCallback(resolve);
        });
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy90ZXN0X3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsT0FBTyxFQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFbEYsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUM7QUFDbEMsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0FBRXpDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsTUFBZ0QsRUFDaEQsUUFBa0QsRUFBRSxPQUFnQjtJQUN0RSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsT0FBTyxHQUFHLFdBQVcsRUFBRSxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxxQkFBcUIsQ0FDeEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFXLEVBQUUsQ0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEIsb0JBQW9CLENBQUM7QUFDdkUsQ0FBQztBQUVELFNBQVMscUJBQXFCLENBQzFCLE1BQWtCLEVBQUUsUUFBb0IsRUFDeEMsU0FBb0M7SUFDdEMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzFCLElBQUksWUFBWSxDQUFDLE1BQU0s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QUFJLENBQUM7S0FDbkM7SUFDRCxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDL0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUV4QixLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN2QixLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDM0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQXVCO0lBQ2hELE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLElBQUksMkJBQTJCLElBQUksS0FBSyxFQUFFO1FBQ3hDLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsa0NBQWtDO1lBQ2pDLEtBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtFTkdJTkV9IGZyb20gJy4vZW5naW5lJztcbmltcG9ydCB7aW5mZXJTaGFwZX0gZnJvbSAnLi90ZW5zb3JfdXRpbF9lbnYnO1xuaW1wb3J0IHtSZWN1cnNpdmVBcnJheSwgVGVuc29yTGlrZSwgVHlwZWRBcnJheX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FycmF5c0VxdWFsLCBlbmNvZGVTdHJpbmcsIGZsYXR0ZW4sIGlzU3RyaW5nLCBpc1R5cGVkQXJyYXl9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IFRFU1RfRVBTSUxPTl9GTE9BVDMyID0gMWUtMztcbmV4cG9ydCBjb25zdCBURVNUX0VQU0lMT05fRkxPQVQxNiA9IDFlLTE7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RBcnJheXNDbG9zZShcbiAgICBhY3R1YWw6IFR5cGVkQXJyYXl8bnVtYmVyfFJlY3Vyc2l2ZUFycmF5PG51bWJlcj4sXG4gICAgZXhwZWN0ZWQ6IFR5cGVkQXJyYXl8bnVtYmVyfFJlY3Vyc2l2ZUFycmF5PG51bWJlcj4sIGVwc2lsb24/OiBudW1iZXIpIHtcbiAgaWYgKGVwc2lsb24gPT0gbnVsbCkge1xuICAgIGVwc2lsb24gPSB0ZXN0RXBzaWxvbigpO1xuICB9XG4gIHJldHVybiBleHBlY3RBcnJheXNQcmVkaWNhdGUoXG4gICAgICBhY3R1YWwsIGV4cGVjdGVkLCAoYSwgYikgPT4gYXJlQ2xvc2UoYSBhcyBudW1iZXIsIGIgYXMgbnVtYmVyLCBlcHNpbG9uKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0RXBzaWxvbigpIHtcbiAgcmV0dXJuIEVOR0lORS5iYWNrZW5kLmZsb2F0UHJlY2lzaW9uKCkgPT09IDMyID8gVEVTVF9FUFNJTE9OX0ZMT0FUMzIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBURVNUX0VQU0lMT05fRkxPQVQxNjtcbn1cblxuZnVuY3Rpb24gZXhwZWN0QXJyYXlzUHJlZGljYXRlKFxuICAgIGFjdHVhbDogVGVuc29yTGlrZSwgZXhwZWN0ZWQ6IFRlbnNvckxpa2UsXG4gICAgcHJlZGljYXRlOiAoYToge30sIGI6IHt9KSA9PiBib29sZWFuKSB7XG4gIGxldCBjaGVja0NsYXNzVHlwZSA9IHRydWU7XG4gIGlmIChpc1R5cGVkQXJyYXkoYWN0dWFsKSB8fCBpc1R5cGVkQXJyYXkoZXhwZWN0ZWQpKSB7XG4gICAgY2hlY2tDbGFzc1R5cGUgPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNUeXBlZEFycmF5KGFjdHVhbCkgJiYgaXNUeXBlZEFycmF5KGV4cGVjdGVkKSkge1xuICAgIGNoZWNrQ2xhc3NUeXBlID0gdHJ1ZTtcbiAgfVxuICBpZiAoY2hlY2tDbGFzc1R5cGUpIHtcbiAgICBjb25zdCBhVHlwZSA9IGFjdHVhbC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGNvbnN0IGJUeXBlID0gZXhwZWN0ZWQuY29uc3RydWN0b3IubmFtZTtcblxuICAgIGlmIChhVHlwZSAhPT0gYlR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQXJyYXlzIGFyZSBvZiBkaWZmZXJlbnQgdHlwZS4gQWN0dWFsOiAke2FUeXBlfS4gYCArXG4gICAgICAgICAgYEV4cGVjdGVkOiAke2JUeXBlfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGFjdHVhbCkgJiYgQXJyYXkuaXNBcnJheShleHBlY3RlZCkpIHtcbiAgICBjb25zdCBhY3R1YWxTaGFwZSA9IGluZmVyU2hhcGUoYWN0dWFsKTtcbiAgICBjb25zdCBleHBlY3RlZFNoYXBlID0gaW5mZXJTaGFwZShleHBlY3RlZCk7XG4gICAgaWYgKCFhcnJheXNFcXVhbChhY3R1YWxTaGFwZSwgZXhwZWN0ZWRTaGFwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQXJyYXlzIGhhdmUgZGlmZmVyZW50IHNoYXBlcy4gYCArXG4gICAgICAgICAgYEFjdHVhbDogWyR7YWN0dWFsU2hhcGV9XS4gRXhwZWN0ZWQ6IFske2V4cGVjdGVkU2hhcGV9XWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFjdHVhbEZsYXQgPVxuICAgICAgaXNUeXBlZEFycmF5KGFjdHVhbCkgPyBhY3R1YWwgOiBmbGF0dGVuKGFjdHVhbCBhcyBSZWN1cnNpdmVBcnJheTxudW1iZXI+KTtcbiAgY29uc3QgZXhwZWN0ZWRGbGF0ID0gaXNUeXBlZEFycmF5KGV4cGVjdGVkKSA/XG4gICAgICBleHBlY3RlZCA6XG4gICAgICBmbGF0dGVuKGV4cGVjdGVkIGFzIFJlY3Vyc2l2ZUFycmF5PG51bWJlcj4pO1xuXG4gIGlmIChhY3R1YWxGbGF0Lmxlbmd0aCAhPT0gZXhwZWN0ZWRGbGF0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzIGFjdHVhbDogJHthY3R1YWxGbGF0Lmxlbmd0aH0gdnMgYCArXG4gICAgICAgIGBleHBlY3RlZDogJHtleHBlY3RlZEZsYXQubGVuZ3RofS5cXG5gICtcbiAgICAgICAgYEFjdHVhbDogICAke2FjdHVhbEZsYXR9LlxcbmAgK1xuICAgICAgICBgRXhwZWN0ZWQ6ICR7ZXhwZWN0ZWRGbGF0fS5gKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cGVjdGVkRmxhdC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGEgPSBhY3R1YWxGbGF0W2ldO1xuICAgIGNvbnN0IGUgPSBleHBlY3RlZEZsYXRbaV07XG5cbiAgICBpZiAoIXByZWRpY2F0ZShhLCBlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBBcnJheXMgZGlmZmVyOiBhY3R1YWxbJHtpfV0gPSAke2F9LCBleHBlY3RlZFske2l9XSA9ICR7ZX0uXFxuYCArXG4gICAgICAgICAgYEFjdHVhbDogICAke2FjdHVhbEZsYXR9LlxcbmAgK1xuICAgICAgICAgIGBFeHBlY3RlZDogJHtleHBlY3RlZEZsYXR9LmApO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGV4cGVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBlY3QoKS5ub3RoaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb25lRm4ge1xuICAoKTogdm9pZDtcbiAgZmFpbDogKG1lc3NhZ2U/OiBFcnJvcnxzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RQcm9taXNlVG9GYWlsKGZuOiAoKSA9PiBQcm9taXNlPHt9PiwgZG9uZTogRG9uZUZuKTogdm9pZCB7XG4gIGZuKCkudGhlbigoKSA9PiBkb25lLmZhaWwoKSwgKCkgPT4gZG9uZSgpKTtcbiAgaWYgKHR5cGVvZiBleHBlY3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXhwZWN0KCkubm90aGluZygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RBcnJheXNFcXVhbChhY3R1YWw6IFRlbnNvckxpa2UsIGV4cGVjdGVkOiBUZW5zb3JMaWtlKSB7XG4gIGNvbnN0IGV4cCA9IHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGV4cGVjdGVkID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgIHR5cGVvZiBleHBlY3RlZCA9PT0gJ2Jvb2xlYW4nID9cbiAgICAgIFtleHBlY3RlZF0gYXMgbnVtYmVyW10gOlxuICAgICAgZXhwZWN0ZWQgYXMgbnVtYmVyW107XG4gIGlmIChpc1N0cmluZyhhY3R1YWwpIHx8IGlzU3RyaW5nKChhY3R1YWwgYXMgc3RyaW5nW10pWzBdKSB8fFxuICAgICAgaXNTdHJpbmcoZXhwZWN0ZWQpIHx8IGlzU3RyaW5nKChleHBlY3RlZCBhcyBzdHJpbmdbXSlbMF0pKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0cmlwbGUtZXF1YWxzXG4gICAgcmV0dXJuIGV4cGVjdEFycmF5c1ByZWRpY2F0ZShhY3R1YWwsIGV4cCwgKGEsIGIpID0+IGEgPT0gYik7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdEFycmF5c1ByZWRpY2F0ZShcbiAgICAgIGFjdHVhbCwgZXhwZWN0ZWQsIChhLCBiKSA9PiBhcmVDbG9zZShhIGFzIG51bWJlciwgYiBhcyBudW1iZXIsIDApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdE51bWJlcnNDbG9zZShhOiBudW1iZXIsIGU6IG51bWJlciwgZXBzaWxvbj86IG51bWJlcikge1xuICBpZiAoZXBzaWxvbiA9PSBudWxsKSB7XG4gICAgZXBzaWxvbiA9IHRlc3RFcHNpbG9uKCk7XG4gIH1cbiAgaWYgKCFhcmVDbG9zZShhLCBlLCBlcHNpbG9uKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTnVtYmVycyBkaWZmZXI6IGFjdHVhbCA9PT0gJHthfSwgZXhwZWN0ZWQgPT09ICR7ZX1gKTtcbiAgfVxuICBpZiAodHlwZW9mIGV4cGVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBlY3QoKS5ub3RoaW5nKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXJlQ2xvc2UoYTogbnVtYmVyLCBlOiBudW1iZXIsIGVwc2lsb246IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoIWlzRmluaXRlKGEpICYmICFpc0Zpbml0ZShlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc05hTihhKSB8fCBpc05hTihlKSB8fCBNYXRoLmFicyhhIC0gZSkgPiBlcHNpbG9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0VmFsdWVzSW5SYW5nZShcbiAgICBhY3R1YWw6IFR5cGVkQXJyYXl8bnVtYmVyW10sIGxvdzogbnVtYmVyLCBoaWdoOiBudW1iZXIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3R1YWwubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWN0dWFsW2ldIDwgbG93IHx8IGFjdHVhbFtpXSA+IGhpZ2gpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVmFsdWUgb3V0IG9mIHJhbmdlOiR7YWN0dWFsW2ldfSBsb3c6ICR7bG93fSwgaGlnaDogJHtoaWdofWApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0QXJyYXlCdWZmZXJzRXF1YWwoXG4gICAgYWN0dWFsOiBBcnJheUJ1ZmZlciwgZXhwZWN0ZWQ6IEFycmF5QnVmZmVyKSB7XG4gIC8vIFNhZmFyaSBkb2VzIG5vdCBsaWtlIGNvbXBhcmluZyBBcnJheUJ1ZmZlcnMgZGlyZWN0bHkuIFdyYXBwaW5nIGluXG4gIC8vIGEgRmxvYXQzMkFycmF5IHNvbHZlcyB0aGlzIGlzc3VlLlxuICBjb25zdCBhY3R1YWxBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYWN0dWFsKTtcbiAgY29uc3QgZXhwZWN0ZWRBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZXhwZWN0ZWQpO1xuICBpZiAoYWN0dWFsQXJyYXkubGVuZ3RoICE9PSBleHBlY3RlZEFycmF5Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0V4cGVjdGVkIEFycmF5QnVmZmVyIHRvIGJlIG9mIGxlbmd0aCAnICtcbiAgICAgICAgYCR7ZXhwZWN0ZWRBcnJheS5sZW5ndGh9LCBidXQgaXQgd2FzICR7YWN0dWFsQXJyYXkubGVuZ3RofWApO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBlY3RlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFjdHVhbEFycmF5W2ldICE9PSBleHBlY3RlZEFycmF5W2ldKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEV4cGVjdGVkIEFycmF5QnVmZmVyIHZhbHVlIGF0ICR7aX0gdG8gYmUgYCArXG4gICAgICAgICAgYCR7ZXhwZWN0ZWRBcnJheVtpXX0gYnV0IGdvdCAke2FjdHVhbEFycmF5W2ldfSBpbnN0ZWFkYCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBFbmNvZGVzIHN0cmluZ3MgaW50byB1dGYtOCBieXRlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVTdHJpbmdzKGE6IFJlY3Vyc2l2ZUFycmF5PHt9Pik6XG4gICAgUmVjdXJzaXZlQXJyYXk8VWludDhBcnJheT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IChhIGFzIEFycmF5PHt9PikubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2YWwgPSBhW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGVuY29kZVN0cmluZ3ModmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtpXSA9IGVuY29kZVN0cmluZyh2YWwgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGEgYXMgUmVjdXJzaXZlQXJyYXk8VWludDhBcnJheT47XG59XG5cbi8qKiBDcmVhdGVzIGFuIEhUTUxWaWRlb0VsZW1lbnQgd2l0aCBhdXRvcGxheS1mcmllbmRseSBkZWZhdWx0IHNldHRpbmdzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZGVvRWxlbWVudChzb3VyY2U6IEhUTUxTb3VyY2VFbGVtZW50KTpcbiAgICBQcm9taXNlPEhUTUxWaWRlb0VsZW1lbnQ+IHtcbiAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICBpZiAoJ3BsYXlzSW5saW5lJyBpbiB2aWRlbykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAodmlkZW8gYXMgYW55KS5wbGF5c0lubGluZSA9IHRydWU7XG4gIH1cbiAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICB2aWRlby5sb29wID0gdHJ1ZTtcbiAgdmlkZW8uc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICB2aWRlby5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gIHZpZGVvLnN0eWxlLnRvcCA9ICcwcHgnO1xuXG4gIHZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gIHZpZGVvLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRkYXRhJywgXyA9PiByZXNvbHZlKHZpZGVvKSk7XG4gICAgdmlkZW8ubG9hZCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBsYXkodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgYXdhaXQgdmlkZW8ucGxheSgpO1xuICBpZiAoJ3JlcXVlc3RWaWRlb0ZyYW1lQ2FsbGJhY2snIGluIHZpZGVvKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAodmlkZW8gYXMgYW55KS5yZXF1ZXN0VmlkZW9GcmFtZUNhbGxiYWNrKHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/browser_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "nextFrame",
    ()=>nextFrame
]);
const delayCallback = (()=>{
    if (typeof requestAnimationFrame !== 'undefined') {
        return requestAnimationFrame;
    } else if (typeof setImmediate !== 'undefined') {
        return setImmediate;
    }
    return (f)=>f(); // no delays
})();
/**
 * Returns a promise that resolves when a requestAnimationFrame has completed.
 *
 * On Node.js this uses setImmediate instead of requestAnimationFrame.
 *
 * This is simply a sugar method so that users can do the following:
 * `await tf.nextFrame();`
 *
 * @doc {heading: 'Performance', subheading: 'Timing'}
 */ function nextFrame() {
    return new Promise((resolve)=>delayCallback(()=>resolve()));
}
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9icm93c2VyX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsTUFBTSxhQUFhLEdBQWEsQ0FBQyxHQUFHLEVBQUU7SUFDcEMsSUFBSSxPQUFPLHFCQUFxQixLQUFLLFdBQVcsRUFBRTtRQUNoRCxPQUFPLHFCQUFxQixDQUFDO0tBQzlCO1NBQU0sSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7UUFDOUMsT0FBTyxZQUFZLENBQUM7S0FDckI7SUFDRCxPQUFPLENBQUMsQ0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFLFlBQVk7QUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMOzs7Ozs7Ozs7R0FTRztBQUNILFNBQVMsU0FBUztJQUNoQixPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQsT0FBTyxFQUFDLFNBQVMsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBkZWxheUNhbGxiYWNrOiBGdW5jdGlvbiA9ICgoKSA9PiB7XG4gIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gc2V0SW1tZWRpYXRlO1xuICB9XG4gIHJldHVybiAoZjogRnVuY3Rpb24pID0+IGYoKTsgIC8vIG5vIGRlbGF5c1xufSkoKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaGFzIGNvbXBsZXRlZC5cbiAqXG4gKiBPbiBOb2RlLmpzIHRoaXMgdXNlcyBzZXRJbW1lZGlhdGUgaW5zdGVhZCBvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXG4gKlxuICogVGhpcyBpcyBzaW1wbHkgYSBzdWdhciBtZXRob2Qgc28gdGhhdCB1c2VycyBjYW4gZG8gdGhlIGZvbGxvd2luZzpcbiAqIGBhd2FpdCB0Zi5uZXh0RnJhbWUoKTtgXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1BlcmZvcm1hbmNlJywgc3ViaGVhZGluZzogJ1RpbWluZyd9XG4gKi9cbmZ1bmN0aW9uIG5leHRGcmFtZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4gZGVsYXlDYWxsYmFjaygoKSA9PiByZXNvbHZlKCkpKTtcbn1cblxuZXhwb3J0IHtuZXh0RnJhbWV9O1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/train.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "train",
    ()=>train
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$optimizers$2f$optimizer_constructors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/optimizers/optimizer_constructors.js [app-ssr] (ecmascript)");
;
const train = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$optimizers$2f$optimizer_constructors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptimizerConstructors"]; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL3RyYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRTFFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtPcHRpbWl6ZXJDb25zdHJ1Y3RvcnN9IGZyb20gJy4vb3B0aW1pemVycy9vcHRpbWl6ZXJfY29uc3RydWN0b3JzJztcblxuZXhwb3J0IGNvbnN0IHRyYWluID0gT3B0aW1pemVyQ29uc3RydWN0b3JzO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-ssr] (ecmascript) <export * as tensor_util>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tensor_util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/device_util.js [app-ssr] (ecmascript) <export * as device_util>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "device_util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$device_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$device_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/device_util.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @license See the LICENSE file. */ // This code is auto-generated, do not modify this file!
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '4.22.0';
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFFckMsd0RBQXdEO0FBQ3hELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN6QixPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGxpY2Vuc2UgU2VlIHRoZSBMSUNFTlNFIGZpbGUuICovXG5cbi8vIFRoaXMgY29kZSBpcyBhdXRvLWdlbmVyYXRlZCwgZG8gbm90IG1vZGlmeSB0aGlzIGZpbGUhXG5jb25zdCB2ZXJzaW9uID0gJzQuMjIuMCc7XG5leHBvcnQge3ZlcnNpb259O1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/version.js [app-ssr] (ecmascript) <export version as version_core>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version_core",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/version.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-core_dist_a62c3ead._.js.map