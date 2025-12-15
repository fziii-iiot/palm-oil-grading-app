(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/deep_map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "canTensorify",
    ()=>canTensorify,
    "deepMap",
    ()=>deepMap,
    "deepMapAndAwaitAll",
    ()=>deepMapAndAwaitAll,
    "deepZip",
    ()=>deepZip,
    "isIterable",
    ()=>isIterable,
    "zipToList",
    ()=>zipToList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-client] (ecmascript)");
;
function deepMap(input, mapFn) {
    return deepMapInternal(input, mapFn);
}
/**
 * @param seen: A Map of known object mappings (i.e., memoized results of
 *   `mapFn()`)
 * @param containedIn: An set containing objects on the reference path currently
 *   being processed (used to detect cycles).
 */ function deepMapInternal(input, mapFn, seen = new Map(), containedIn = new Set()) {
    if (input == null) {
        return null;
    }
    if (typeof Blob === 'function' && input instanceof Blob) {
        return input.slice();
    }
    if (containedIn.has(input)) {
        throw new Error('Circular references are not supported.');
    }
    if (seen.has(input)) {
        return seen.get(input);
    }
    const result = mapFn(input);
    if (result.recurse && result.value !== null) {
        throw new Error('A deep map function may not return both a value and recurse=true.');
    }
    if (!result.recurse) {
        seen.set(input, result.value);
        return result.value;
    } else if (isIterable(input)) {
        // tslint:disable-next-line:no-any
        const mappedIterable = Array.isArray(input) ? [] : {};
        containedIn.add(input);
        for(const k in input){
            const child = input[k];
            const childResult = deepMapInternal(child, mapFn, seen, containedIn);
            mappedIterable[k] = childResult;
        }
        containedIn.delete(input);
        if (input.__proto__) {
            mappedIterable.__proto__ = input.__proto__;
        }
        return mappedIterable;
    } else {
        throw new Error(`Can't recurse into non-iterable type: ${input}`);
    }
}
function deepZip(inputs, zipFn = zipToList) {
    return deepZipInternal(inputs, zipFn);
}
/**
 * @param containedIn: An set containing objects on the reference path currently
 *   being processed (used to detect cycles).
 */ function deepZipInternal(inputs, zipFn, containedIn = new Set()) {
    // The recursion follows the structure of input 0; it's assumed that all the
    // other inputs have the same structure.
    const input = inputs[0];
    if (containedIn.has(input)) {
        throw new Error('Circular references are not supported.');
    }
    const result = zipFn(inputs);
    if (result.recurse && result.value !== null) {
        throw new Error('A deep zip function may not return both a value and recurse=true.');
    }
    if (!result.recurse) {
        return result.value;
    } else if (isIterable(input)) {
        // tslint:disable-next-line:no-any
        const mappedIterable = Array.isArray(input) ? [] : {};
        containedIn.add(input);
        for(const k in input){
            const children = inputs.map((x)=>x[k]);
            const childResult = deepZipInternal(children, zipFn, containedIn);
            mappedIterable[k] = childResult;
        }
        containedIn.delete(input);
        return mappedIterable;
    } else {
        throw new Error(`Can't recurse into non-iterable type: ${input}`);
    }
}
function zipToList(x) {
    if (x === null) {
        return null;
    }
    // TODO(soergel): validate array type?
    if (isIterable(x[0])) {
        return {
            value: null,
            recurse: true
        };
    } else {
        return {
            value: x,
            recurse: false
        };
    }
}
async function deepMapAndAwaitAll(input, mapFn) {
    const seen = new Map();
    // First do a normal deepMap, collecting Promises in 'seen' as a side effect.
    deepMapInternal(input, mapFn, seen);
    // Replace the Promises in 'seen' in place.
    // Note TypeScript provides no async map iteration, and regular map iteration
    // is broken too, so sadly we have to do Array.from() to make it work.
    // (There's no advantage to Promise.all(), and that would be tricky anyway.)
    for (const key of Array.from(seen.keys())){
        const value = seen.get(key);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isPromise(value)) {
            const mappedValue = await value;
            seen.set(key, mappedValue);
        }
    }
    // Normal deepMap again, this time filling in the resolved values.
    // It's unfortunate that we have to do two passes.
    // TODO(soergel): test performance and think harder about a fast solution.
    const result = deepMapInternal(input, mapFn, seen);
    return result;
}
function isIterable(obj) {
    let isTextDecoder = false;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"]().get('IS_BROWSER')) {
        isTextDecoder = obj instanceof TextDecoder;
    } else {
        // tslint:disable-next-line:no-require-imports
        const { StringDecoder } = {};
        isTextDecoder = obj instanceof StringDecoder;
    }
    return obj != null && !ArrayBuffer.isView(obj) && (Array.isArray(obj) || typeof obj === 'object' && !(obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"]) && !(obj instanceof Promise) && !isTextDecoder);
}
function canTensorify(obj) {
    return obj == null || isPrimitive(obj) || Array.isArray(obj) || typeof obj === 'object' && obj instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isTypedArray(obj);
}
/**
 * Returns true if the given `value` is a primitive type. Otherwise returns
 * false. This is equivalant to node util.isPrimitive
 */ function isPrimitive(value) {
    return value === null || typeof value !== 'object' && typeof value !== 'function';
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcF9tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWRhdGEvc3JjL3V0aWwvZGVlcF9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCxPQUFPLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBZTVDOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFVLEVBQUUsS0FBZ0M7SUFFbEUsT0FBTyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsZUFBZSxDQUNwQixLQUFVLEVBQUUsS0FBZ0MsRUFDNUMsT0FBc0IsSUFBSSxHQUFHLEVBQUUsRUFBRSxjQUF1QixJQUFJLEdBQUcsRUFBRTtJQUVuRSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDdkQsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdEI7SUFFRCxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4QjtJQUNELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU1QixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FDWCxtRUFBbUUsQ0FBQyxDQUFDO0tBQzFFO0lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNyQjtTQUFNLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzVCLGtDQUFrQztRQUNsQyxNQUFNLGNBQWMsR0FBYyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ3JCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDckUsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUNqQztRQUNELFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ25CLGNBQWMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztTQUM1QztRQUNELE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ25FO0FBQ0gsQ0FBQztBQUVELCtFQUErRTtBQUMvRSxhQUFhO0FBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQ25CLE1BQWEsRUFBRSxRQUFzQyxTQUFTO0lBQ2hFLE9BQU8sZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxlQUFlLENBQ3BCLE1BQWEsRUFBRSxLQUFtQyxFQUNsRCxjQUF1QixJQUFJLEdBQUcsRUFBRTtJQUNsQyw0RUFBNEU7SUFDNUUsd0NBQXdDO0lBQ3hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0tBQzNEO0lBQ0QsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUNYLG1FQUFtRSxDQUFDLENBQUM7S0FDMUU7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNuQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDckI7U0FBTSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM1QixrQ0FBa0M7UUFDbEMsTUFBTSxjQUFjLEdBQWMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNyQixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbEUsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUNqQztRQUNELFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTyxjQUFjLENBQUM7S0FDdkI7U0FBTTtRQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDO0FBRUQsa0NBQWtDO0FBQ2xDLE1BQU0sVUFBVSxTQUFTLENBQUMsQ0FBUTtJQUNoQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0Qsc0NBQXNDO0lBRXRDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUNyQztTQUFNO1FBQ0wsT0FBTyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQWFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLGtCQUFrQixDQUNwQyxLQUFVLEVBQUUsS0FBcUM7SUFDbkQsTUFBTSxJQUFJLEdBQWtCLElBQUksR0FBRyxFQUFFLENBQUM7SUFFdEMsNkVBQTZFO0lBQzdFLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXBDLDJDQUEyQztJQUMzQyw2RUFBNkU7SUFDN0Usc0VBQXNFO0lBQ3RFLDRFQUE0RTtJQUM1RSxLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE1BQU0sV0FBVyxHQUFHLE1BQU0sS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7SUFFRCxrRUFBa0U7SUFDbEUsa0RBQWtEO0lBQ2xELDBFQUEwRTtJQUMxRSxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILGtDQUFrQztBQUNsQyxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQVE7SUFDakMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzFCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUM5QixhQUFhLEdBQUcsR0FBRyxZQUFZLFdBQVcsQ0FBQztLQUM1QztTQUFNO1FBQ0wsOENBQThDO1FBQzlDLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxhQUFhLEdBQUcsR0FBRyxZQUFZLGFBQWEsQ0FBQztLQUM5QztJQUNELE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2xCLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLEdBQUcsWUFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxrQ0FBa0M7QUFDbEMsTUFBTSxVQUFVLFlBQVksQ0FBQyxHQUFRO0lBQ25DLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEQsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLFdBQVcsQ0FBQyxLQUFVO0lBQzdCLE9BQU8sQ0FDSCxLQUFLLEtBQUssSUFBSTtRQUNkLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuXG4vKipcbiAqIEEgcmV0dXJuIHZhbHVlIGZvciBhIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBjYW4gYmUgYXBwbGllZCB2aWEgZGVlcE1hcC5cbiAqXG4gKiBJZiByZWN1cnNlIGlzIHRydWUsIHRoZSB2YWx1ZSBzaG91bGQgYmUgZW1wdHksIGFuZCBpdGVyYXRpb24gd2lsbCBjb250aW51ZVxuICogaW50byB0aGUgb2JqZWN0IG9yIGFycmF5LlxuICovXG5leHBvcnQgdHlwZSBEZWVwTWFwUmVzdWx0ID0ge1xuICB2YWx1ZTogYW55LFxuICByZWN1cnNlOiBib29sZWFuXG59O1xuXG4vKipcbiAqIEFwcGx5IGEgbWFwcGluZyBmdW5jdGlvbiB0byBhIG5lc3RlZCBzdHJ1Y3R1cmUgaW4gYSByZWN1cnNpdmUgbWFubmVyLlxuICpcbiAqIFRoZSByZXN1bHQgb2YgdGhlIG1hcHBpbmcgaXMgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgbmVzdGVkIHN0cnVjdHVyZSAoaS5lLixcbiAqIG9mIGFycmF5cyBhbmQgZGljdHMpIGFzIHRoZSBpbnB1dCwgZXhjZXB0IHRoYXQgc29tZSBzdWJ0cmVlcyBhcmUgcmVwbGFjZWQsXG4gKiBhY2NvcmRpbmcgdG8gdGhlIHJlc3VsdHMgb2YgdGhlIG1hcHBpbmcgZnVuY3Rpb24uXG4gKlxuICogTWFwcGluZ3MgYXJlIG1lbW9pemVkLiAgVGh1cywgaWYgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUgY29udGFpbnMgdGhlIHNhbWVcbiAqIG9iamVjdCBpbiBtdWx0aXBsZSBwb3NpdGlvbnMsIHRoZSBvdXRwdXQgd2lsbCBjb250YWluIHRoZSBzYW1lIG1hcHBlZCBvYmplY3RcbiAqIGluIHRob3NlIHBvc2l0aW9ucy4gIEN5Y2xlcyBhcmUgbm90IHN1cHBvcnRlZCwgaG93ZXZlci5cbiAqXG4gKiBAcGFyYW0gaW5wdXQ6IFRoZSBvYmplY3QgdG8gd2hpY2ggdG8gYXBwbHkgdGhlIG1hcHBpbmcgZnVuY3Rpb24uXG4gKiBAcGFyYW0gbWFwRm46IEEgZnVuY3Rpb24gdGhhdCBleHBlY3RzIGEgc2luZ2xlIG5vZGUgb2YgdGhlIG9iamVjdCB0cmVlLCBhbmRcbiAqICAgcmV0dXJucyBhIGBEZWVwTWFwUmVzdWx0YC4gIFRoZSBgRGVlcE1hcFJlc3VsdGAgZWl0aGVyIHByb3ZpZGVzIGFcbiAqICAgcmVwbGFjZW1lbnQgdmFsdWUgZm9yIHRoYXQgbm9kZSAoaS5lLiwgcmVwbGFjaW5nIHRoZSBzdWJ0cmVlKSwgb3IgaW5kaWNhdGVzXG4gKiAgIHRoYXQgdGhlIG5vZGUgc2hvdWxkIGJlIHByb2Nlc3NlZCByZWN1cnNpdmVseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNYXAoaW5wdXQ6IGFueSwgbWFwRm46ICh4OiBhbnkpID0+IERlZXBNYXBSZXN1bHQpOiBhbnl8XG4gICAgYW55W10ge1xuICByZXR1cm4gZGVlcE1hcEludGVybmFsKGlucHV0LCBtYXBGbik7XG59XG5cbi8qKlxuICogQHBhcmFtIHNlZW46IEEgTWFwIG9mIGtub3duIG9iamVjdCBtYXBwaW5ncyAoaS5lLiwgbWVtb2l6ZWQgcmVzdWx0cyBvZlxuICogICBgbWFwRm4oKWApXG4gKiBAcGFyYW0gY29udGFpbmVkSW46IEFuIHNldCBjb250YWluaW5nIG9iamVjdHMgb24gdGhlIHJlZmVyZW5jZSBwYXRoIGN1cnJlbnRseVxuICogICBiZWluZyBwcm9jZXNzZWQgKHVzZWQgdG8gZGV0ZWN0IGN5Y2xlcykuXG4gKi9cbmZ1bmN0aW9uIGRlZXBNYXBJbnRlcm5hbChcbiAgICBpbnB1dDogYW55LCBtYXBGbjogKHg6IGFueSkgPT4gRGVlcE1hcFJlc3VsdCxcbiAgICBzZWVuOiBNYXA8YW55LCBhbnk+ID0gbmV3IE1hcCgpLCBjb250YWluZWRJbjogU2V0PHt9PiA9IG5ldyBTZXQoKSk6IGFueXxcbiAgICBhbnlbXSB7XG4gIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nICYmIGlucHV0IGluc3RhbmNlb2YgQmxvYikge1xuICAgIHJldHVybiBpbnB1dC5zbGljZSgpO1xuICB9XG5cbiAgaWYgKGNvbnRhaW5lZEluLmhhcyhpbnB1dCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH1cbiAgaWYgKHNlZW4uaGFzKGlucHV0KSkge1xuICAgIHJldHVybiBzZWVuLmdldChpbnB1dCk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gbWFwRm4oaW5wdXQpO1xuXG4gIGlmIChyZXN1bHQucmVjdXJzZSAmJiByZXN1bHQudmFsdWUgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdBIGRlZXAgbWFwIGZ1bmN0aW9uIG1heSBub3QgcmV0dXJuIGJvdGggYSB2YWx1ZSBhbmQgcmVjdXJzZT10cnVlLicpO1xuICB9XG5cbiAgaWYgKCFyZXN1bHQucmVjdXJzZSkge1xuICAgIHNlZW4uc2V0KGlucHV0LCByZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgbWFwcGVkSXRlcmFibGU6IGFueXxhbnlbXSA9IEFycmF5LmlzQXJyYXkoaW5wdXQpID8gW10gOiB7fTtcbiAgICBjb250YWluZWRJbi5hZGQoaW5wdXQpO1xuICAgIGZvciAoY29uc3QgayBpbiBpbnB1dCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBpbnB1dFtrXTtcbiAgICAgIGNvbnN0IGNoaWxkUmVzdWx0ID0gZGVlcE1hcEludGVybmFsKGNoaWxkLCBtYXBGbiwgc2VlbiwgY29udGFpbmVkSW4pO1xuICAgICAgbWFwcGVkSXRlcmFibGVba10gPSBjaGlsZFJlc3VsdDtcbiAgICB9XG4gICAgY29udGFpbmVkSW4uZGVsZXRlKGlucHV0KTtcbiAgICBpZiAoaW5wdXQuX19wcm90b19fKSB7XG4gICAgICBtYXBwZWRJdGVyYWJsZS5fX3Byb3RvX18gPSBpbnB1dC5fX3Byb3RvX187XG4gICAgfVxuICAgIHJldHVybiBtYXBwZWRJdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlY3Vyc2UgaW50byBub24taXRlcmFibGUgdHlwZTogJHtpbnB1dH1gKTtcbiAgfVxufVxuXG4vLyBUT0RPKHNvZXJnZWwsIGthbmd5aXpoYW5nKSBSZWNvbnNpZGVyIG5hbWluZyBvZiBkZWVwWmlwKCkgdG8gYXZvaWQgY29uZnVzaW9uXG4vLyB3aXRoIHppcCgpXG5cbi8qKlxuICogWmlwIG5lc3RlZCBzdHJ1Y3R1cmVzIHRvZ2V0aGVyIGluIGEgcmVjdXJzaXZlIG1hbm5lci5cbiAqXG4gKiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mIHRyYW5zcG9zaW5nIG9yIHBpdm90aW5nIGRhdGEsIGUuZy4gY29udmVydGluZyBpdCBmcm9tXG4gKiBhIHJvdy1tYWpvciByZXByZXNlbnRhdGlvbiB0byBhIGNvbHVtbi1tYWpvciByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYGRlZXBaaXAoW3thOiAxLCBiOiAyfSwge2E6IDMsIGI6IDR9XSlgIHJldHVybnNcbiAqIGB7YTogWzEsIDNdLCBiOiBbMiwgNF19YC5cbiAqXG4gKiBUaGUgaW5wdXRzIHNob3VsZCBhbGwgaGF2ZSB0aGUgc2FtZSBuZXN0ZWQgc3RydWN0dXJlIChpLmUuLCBvZiBhcnJheXMgYW5kXG4gKiBkaWN0cykuICBUaGUgcmVzdWx0IGlzIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBzYW1lIG5lc3RlZCBzdHJ1Y3R1cmUsIHdoZXJlXG4gKiB0aGUgbGVhdmVzIGFyZSBhcnJheXMgY29sbGVjdGluZyB0aGUgdmFsdWVzIG9mIHRoZSBpbnB1dHMgYXQgdGhhdCBsb2NhdGlvblxuICogKG9yLCBvcHRpb25hbGx5LCB0aGUgcmVzdWx0IG9mIGEgY3VzdG9tIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhvc2UgYXJyYXlzKS5cbiAqXG4gKiBAcGFyYW0gaW5wdXRzOiBBbiBhcnJheSBvZiB0aGUgb2JqZWN0cyB0byB6aXAgdG9nZXRoZXIuXG4gKiBAcGFyYW0gemlwRm46IChvcHRpb25hbCkgQSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgYW4gYXJyYXkgb2YgZWxlbWVudHMgYXQgYVxuICogICBzaW5nbGUgbm9kZSBvZiB0aGUgb2JqZWN0IHRyZWUsIGFuZCByZXR1cm5zIGEgYERlZXBNYXBSZXN1bHRgLiAgVGhlXG4gKiAgIGBEZWVwTWFwUmVzdWx0YCBlaXRoZXIgcHJvdmlkZXMgYSByZXN1bHQgdmFsdWUgZm9yIHRoYXQgbm9kZSAoaS5lLixcbiAqICAgcmVwcmVzZW50aW5nIHRoZSBzdWJ0cmVlKSwgb3IgaW5kaWNhdGVzIHRoYXQgdGhlIG5vZGUgc2hvdWxkIGJlIHByb2Nlc3NlZFxuICogICByZWN1cnNpdmVseS4gIFRoZSBkZWZhdWx0IHppcEZuIHJlY3Vyc2VzIGFzIGZhciBhcyBwb3NzaWJsZSBhbmQgcGxhY2VzXG4gKiAgIGFycmF5cyBhdCB0aGUgbGVhdmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcFppcChcbiAgICBpbnB1dHM6IGFueVtdLCB6aXBGbjogKHhzOiBhbnlbXSkgPT4gRGVlcE1hcFJlc3VsdCA9IHppcFRvTGlzdCk6IGFueXxhbnlbXSB7XG4gIHJldHVybiBkZWVwWmlwSW50ZXJuYWwoaW5wdXRzLCB6aXBGbik7XG59XG5cbi8qKlxuICogQHBhcmFtIGNvbnRhaW5lZEluOiBBbiBzZXQgY29udGFpbmluZyBvYmplY3RzIG9uIHRoZSByZWZlcmVuY2UgcGF0aCBjdXJyZW50bHlcbiAqICAgYmVpbmcgcHJvY2Vzc2VkICh1c2VkIHRvIGRldGVjdCBjeWNsZXMpLlxuICovXG5mdW5jdGlvbiBkZWVwWmlwSW50ZXJuYWwoXG4gICAgaW5wdXRzOiBhbnlbXSwgemlwRm46ICh4czogYW55W10pID0+IERlZXBNYXBSZXN1bHQsXG4gICAgY29udGFpbmVkSW46IFNldDx7fT4gPSBuZXcgU2V0KCkpOiBhbnl8YW55W10ge1xuICAvLyBUaGUgcmVjdXJzaW9uIGZvbGxvd3MgdGhlIHN0cnVjdHVyZSBvZiBpbnB1dCAwOyBpdCdzIGFzc3VtZWQgdGhhdCBhbGwgdGhlXG4gIC8vIG90aGVyIGlucHV0cyBoYXZlIHRoZSBzYW1lIHN0cnVjdHVyZS5cbiAgY29uc3QgaW5wdXQgPSBpbnB1dHNbMF07XG4gIGlmIChjb250YWluZWRJbi5oYXMoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2VzIGFyZSBub3Qgc3VwcG9ydGVkLicpO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IHppcEZuKGlucHV0cyk7XG5cbiAgaWYgKHJlc3VsdC5yZWN1cnNlICYmIHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0EgZGVlcCB6aXAgZnVuY3Rpb24gbWF5IG5vdCByZXR1cm4gYm90aCBhIHZhbHVlIGFuZCByZWN1cnNlPXRydWUuJyk7XG4gIH1cblxuICBpZiAoIXJlc3VsdC5yZWN1cnNlKSB7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfSBlbHNlIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdCBtYXBwZWRJdGVyYWJsZTogYW55fGFueVtdID0gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBbXSA6IHt9O1xuICAgIGNvbnRhaW5lZEluLmFkZChpbnB1dCk7XG4gICAgZm9yIChjb25zdCBrIGluIGlucHV0KSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGlucHV0cy5tYXAoeCA9PiB4W2tdKTtcbiAgICAgIGNvbnN0IGNoaWxkUmVzdWx0ID0gZGVlcFppcEludGVybmFsKGNoaWxkcmVuLCB6aXBGbiwgY29udGFpbmVkSW4pO1xuICAgICAgbWFwcGVkSXRlcmFibGVba10gPSBjaGlsZFJlc3VsdDtcbiAgICB9XG4gICAgY29udGFpbmVkSW4uZGVsZXRlKGlucHV0KTtcbiAgICByZXR1cm4gbWFwcGVkSXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZWN1cnNlIGludG8gbm9uLWl0ZXJhYmxlIHR5cGU6ICR7aW5wdXR9YCk7XG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIHppcFRvTGlzdCh4OiBhbnlbXSk6IERlZXBNYXBSZXN1bHQge1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIFRPRE8oc29lcmdlbCk6IHZhbGlkYXRlIGFycmF5IHR5cGU/XG5cbiAgaWYgKGlzSXRlcmFibGUoeFswXSkpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCByZWN1cnNlOiB0cnVlfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB4LCByZWN1cnNlOiBmYWxzZX07XG4gIH1cbn1cblxuLyoqXG4gKiBBIHJldHVybiB2YWx1ZSBmb3IgYW4gYXN5bmMgbWFwIGZ1bmN0aW9uIGZvciB1c2Ugd2l0aCBkZWVwTWFwQW5kQXdhaXRBbGwuXG4gKlxuICogSWYgcmVjdXJzZSBpcyB0cnVlLCB0aGUgdmFsdWUgc2hvdWxkIGJlIGVtcHR5LCBhbmQgaXRlcmF0aW9uIHdpbGwgY29udGludWVcbiAqIGludG8gdGhlIG9iamVjdCBvciBhcnJheS5cbiAqL1xuZXhwb3J0IHR5cGUgRGVlcE1hcEFzeW5jUmVzdWx0ID0ge1xuICB2YWx1ZTogUHJvbWlzZTxhbnk+LFxuICByZWN1cnNlOiBib29sZWFuXG59O1xuXG4vKipcbiAqIEFwcGx5IGFuIGFzeW5jIG1hcHBpbmcgZnVuY3Rpb24gdG8gYSBuZXN0ZWQgc3RydWN0dXJlIGluIGEgcmVjdXJzaXZlIG1hbm5lci5cbiAqXG4gKiBUaGlzIGZpcnN0IGNyZWF0ZXMgYSBuZXN0ZWQgc3RydWN0dXJlIG9mIFByb21pc2VzLCBhbmQgdGhlbiBhd2FpdHMgYWxsIG9mXG4gKiB0aG9zZSwgcmVzdWx0aW5nIGluIGEgc2luZ2xlIFByb21pc2UgZm9yIGEgcmVzb2x2ZWQgbmVzdGVkIHN0cnVjdHVyZS5cbiAqXG4gKiBUaGUgcmVzdWx0IG9mIHRoZSBtYXBwaW5nIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIG5lc3RlZCBzdHJ1Y3R1cmUgKGkuZS4sXG4gKiBvZiBhcnJheXMgYW5kIGRpY3RzKSBhcyB0aGUgaW5wdXQsIGV4Y2VwdCB0aGF0IHNvbWUgc3VidHJlZXMgYXJlIHJlcGxhY2VkLFxuICogYWNjb3JkaW5nIHRvIHRoZSByZXN1bHRzIG9mIHRoZSBtYXBwaW5nIGZ1bmN0aW9uLlxuICpcbiAqIE1hcHBpbmdzIGFyZSBtZW1vaXplZC4gIFRodXMsIGlmIHRoZSBuZXN0ZWQgc3RydWN0dXJlIGNvbnRhaW5zIHRoZSBzYW1lXG4gKiBvYmplY3QgaW4gbXVsdGlwbGUgcG9zaXRpb25zLCB0aGUgb3V0cHV0IHdpbGwgY29udGFpbiB0aGUgc2FtZSBtYXBwZWQgb2JqZWN0XG4gKiBpbiB0aG9zZSBwb3NpdGlvbnMuICBDeWNsZXMgYXJlIG5vdCBzdXBwb3J0ZWQsIGhvd2V2ZXIuXG4gKlxuICogQHBhcmFtIGlucHV0OiBUaGUgb2JqZWN0IHRvIHdoaWNoIHRvIGFwcGx5IHRoZSBtYXBwaW5nIGZ1bmN0aW9uLlxuICogQHBhcmFtIG1hcEZuOiBBIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhIHNpbmdsZSBub2RlIG9mIHRoZSBvYmplY3QgdHJlZSwgYW5kXG4gKiAgIHJldHVybnMgYSBgRGVlcE1hcEFzeW5jUmVzdWx0YC4gIFRoZSBgRGVlcE1hcEFzeW5jUmVzdWx0YCBlaXRoZXIgcHJvdmlkZXNcbiAqICAgYSBgUHJvbWlzZWAgZm9yIGEgcmVwbGFjZW1lbnQgdmFsdWUgZm9yIHRoYXQgbm9kZSAoaS5lLiwgcmVwbGFjaW5nIHRoZVxuICogICBzdWJ0cmVlKSwgb3IgaW5kaWNhdGVzIHRoYXQgdGhlIG5vZGUgc2hvdWxkIGJlIHByb2Nlc3NlZCByZWN1cnNpdmVseS4gIE5vdGVcbiAqICAgdGhhdCB0aGUgZGVjaXNpb24gd2hldGhlciBvciBub3QgdG8gcmVjdXJzZSBtdXN0IGJlIG1hZGUgaW1tZWRpYXRlbHk7IG9ubHlcbiAqICAgdGhlIG1hcHBlZCB2YWx1ZSBtYXkgYmUgcHJvbWlzZWQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWVwTWFwQW5kQXdhaXRBbGwoXG4gICAgaW5wdXQ6IGFueSwgbWFwRm46ICh4OiBhbnkpID0+IERlZXBNYXBBc3luY1Jlc3VsdCk6IFByb21pc2U8YW55fGFueVtdPiB7XG4gIGNvbnN0IHNlZW46IE1hcDxhbnksIGFueT4gPSBuZXcgTWFwKCk7XG5cbiAgLy8gRmlyc3QgZG8gYSBub3JtYWwgZGVlcE1hcCwgY29sbGVjdGluZyBQcm9taXNlcyBpbiAnc2VlbicgYXMgYSBzaWRlIGVmZmVjdC5cbiAgZGVlcE1hcEludGVybmFsKGlucHV0LCBtYXBGbiwgc2Vlbik7XG5cbiAgLy8gUmVwbGFjZSB0aGUgUHJvbWlzZXMgaW4gJ3NlZW4nIGluIHBsYWNlLlxuICAvLyBOb3RlIFR5cGVTY3JpcHQgcHJvdmlkZXMgbm8gYXN5bmMgbWFwIGl0ZXJhdGlvbiwgYW5kIHJlZ3VsYXIgbWFwIGl0ZXJhdGlvblxuICAvLyBpcyBicm9rZW4gdG9vLCBzbyBzYWRseSB3ZSBoYXZlIHRvIGRvIEFycmF5LmZyb20oKSB0byBtYWtlIGl0IHdvcmsuXG4gIC8vIChUaGVyZSdzIG5vIGFkdmFudGFnZSB0byBQcm9taXNlLmFsbCgpLCBhbmQgdGhhdCB3b3VsZCBiZSB0cmlja3kgYW55d2F5LilcbiAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbShzZWVuLmtleXMoKSkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlZW4uZ2V0KGtleSk7XG4gICAgaWYgKHRmLnV0aWwuaXNQcm9taXNlKHZhbHVlKSkge1xuICAgICAgY29uc3QgbWFwcGVkVmFsdWUgPSBhd2FpdCB2YWx1ZTtcbiAgICAgIHNlZW4uc2V0KGtleSwgbWFwcGVkVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vcm1hbCBkZWVwTWFwIGFnYWluLCB0aGlzIHRpbWUgZmlsbGluZyBpbiB0aGUgcmVzb2x2ZWQgdmFsdWVzLlxuICAvLyBJdCdzIHVuZm9ydHVuYXRlIHRoYXQgd2UgaGF2ZSB0byBkbyB0d28gcGFzc2VzLlxuICAvLyBUT0RPKHNvZXJnZWwpOiB0ZXN0IHBlcmZvcm1hbmNlIGFuZCB0aGluayBoYXJkZXIgYWJvdXQgYSBmYXN0IHNvbHV0aW9uLlxuICBjb25zdCByZXN1bHQgPSBkZWVwTWFwSW50ZXJuYWwoaW5wdXQsIG1hcEZuLCBzZWVuKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgaXRlcmFibGUuXG4gKlxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXkgb3IgYW55IG5vbi1UZW5zb3Igb2JqZWN0LlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gaXNJdGVyYWJsZShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICBsZXQgaXNUZXh0RGVjb2RlciA9IGZhbHNlO1xuICBpZiAodGYuZW52KCkuZ2V0KCdJU19CUk9XU0VSJykpIHtcbiAgICBpc1RleHREZWNvZGVyID0gb2JqIGluc3RhbmNlb2YgVGV4dERlY29kZXI7XG4gIH0gZWxzZSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXJlcXVpcmUtaW1wb3J0c1xuICAgIGNvbnN0IHtTdHJpbmdEZWNvZGVyfSA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyJyk7XG4gICAgaXNUZXh0RGVjb2RlciA9IG9iaiBpbnN0YW5jZW9mIFN0cmluZ0RlY29kZXI7XG4gIH1cbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmICghQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikpICYmXG4gICAgICAoQXJyYXkuaXNBcnJheShvYmopIHx8XG4gICAgICAgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICEob2JqIGluc3RhbmNlb2YgdGYuVGVuc29yKSAmJlxuICAgICAgICAhKG9iaiBpbnN0YW5jZW9mIFByb21pc2UpICYmICFpc1RleHREZWNvZGVyKSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGNhbiBiZSBjb252ZXJ0ZWQgdG8gVGVuc29yLlxuICpcbiAqIFRlbnNvcnMsIHByaW1pdGl2ZXMsIGFycmF5cywgYW5kIFR5cGVkQXJyYXlzIGFsbCBxdWFsaWZ5OyBhbnl0aGluZyBlbHNlIGRvZXNcbiAqIG5vdC5cbiAqXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBhcmd1bWVudCBjYW4gYmUgY29udmVydGVkIHRvIFRlbnNvci5cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGNhblRlbnNvcmlmeShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09IG51bGwgfHwgaXNQcmltaXRpdmUob2JqKSB8fCBBcnJheS5pc0FycmF5KG9iaikgfHxcbiAgICAgICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAob2JqIGluc3RhbmNlb2YgdGYuVGVuc29yKSkgfHxcbiAgICAgIHRmLnV0aWwuaXNUeXBlZEFycmF5KG9iaik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBgdmFsdWVgIGlzIGEgcHJpbWl0aXZlIHR5cGUuIE90aGVyd2lzZSByZXR1cm5zXG4gKiBmYWxzZS4gVGhpcyBpcyBlcXVpdmFsYW50IHRvIG5vZGUgdXRpbC5pc1ByaW1pdGl2ZVxuICovXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgICB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/deep_clone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "deepClone",
    ()=>deepClone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/deep_map.js [app-client] (ecmascript)");
;
;
function deepClone(container) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMap"])(container, cloneIfTensor);
}
// tslint:disable-next-line: no-any
function cloneIfTensor(item) {
    if (item instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"]) {
        return {
            value: item.clone(),
            recurse: false
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIterable"])(item)) {
        return {
            value: null,
            recurse: true
        };
    } else {
        return {
            value: item,
            recurse: false
        };
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcF9jbG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvdXRpbC9kZWVwX2Nsb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsT0FBTyxFQUFpQixVQUFVLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFOUQsTUFBTSxVQUFVLFNBQVMsQ0FBSSxTQUFZO0lBQ3ZDLE9BQU8sT0FBTyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsbUNBQW1DO0FBQ25DLFNBQVMsYUFBYSxDQUFDLElBQVM7SUFDOUIsSUFBSSxJQUFJLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUM3QixPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ2hEO1NBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDO0tBQ3JDO1NBQU07UUFDTCxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUM7S0FDdEM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7ZGVlcE1hcCwgRGVlcE1hcFJlc3VsdCwgaXNJdGVyYWJsZX0gZnJvbSAnLi9kZWVwX21hcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmU8VD4oY29udGFpbmVyOiBUKTogVCB7XG4gIHJldHVybiBkZWVwTWFwKGNvbnRhaW5lciwgY2xvbmVJZlRlbnNvcik7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG5mdW5jdGlvbiBjbG9uZUlmVGVuc29yKGl0ZW06IGFueSk6IERlZXBNYXBSZXN1bHQge1xuICBpZiAoaXRlbSBpbnN0YW5jZW9mIHRmLlRlbnNvcikge1xuICAgIHJldHVybiAoe3ZhbHVlOiBpdGVtLmNsb25lKCksIHJlY3Vyc2U6IGZhbHNlfSk7XG4gIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShpdGVtKSkge1xuICAgIHJldHVybiB7dmFsdWU6IG51bGwsIHJlY3Vyc2U6IHRydWV9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7dmFsdWU6IGl0ZW0sIHJlY3Vyc2U6IGZhbHNlfTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/ring_buffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ /**
 * A ring buffer, providing O(1) FIFO, LIFO, and related operations.
 */ __turbopack_context__.s([
    "RingBuffer",
    ()=>RingBuffer
]);
class RingBuffer {
    /**
     * Constructs a `RingBuffer`.
     * @param capacity The number of items that the buffer can accomodate.
     */ constructor(capacity){
        this.capacity = capacity;
        // Note we store the indices in the range 0 <= index < 2*capacity.
        // This allows us to distinguish the full from the empty case.
        // See https://www.snellman.net/blog/archive/2016-12-13-ring-buffers/
        this.begin = 0; // inclusive
        this.end = 0; // exclusive
        if (capacity == null) {
            throw new RangeError('Can\'t create a ring buffer of unknown capacity.');
        }
        if (capacity < 1) {
            throw new RangeError('Can\'t create ring buffer of capacity < 1.');
        }
        this.data = new Array(capacity);
        this.doubledCapacity = 2 * capacity;
    }
    /**
     * Map any index into the range 0 <= index < 2*capacity.
     */ wrap(index) {
        // don't trust % on negative numbers
        while(index < 0){
            index += this.doubledCapacity;
        }
        return index % this.doubledCapacity;
    }
    get(index) {
        if (index < 0) {
            throw new RangeError('Can\'t get item at a negative index.');
        }
        return this.data[index % this.capacity];
    }
    set(index, value) {
        if (index < 0) {
            throw new RangeError('Can\'t set item at a negative index.');
        }
        this.data[index % this.capacity] = value;
    }
    /**
     * Returns the current number of items in the buffer.
     */ length() {
        let length = this.end - this.begin;
        if (length < 0) {
            length = this.doubledCapacity + length;
        }
        return length;
    }
    /**
     * Reports whether the buffer is full.
     * @returns true if the number of items in the buffer equals its capacity, and
     *   false otherwise.
     */ isFull() {
        return this.length() === this.capacity;
    }
    /**
     * Reports whether the buffer is empty.
     * @returns true if the number of items in the buffer equals zero, and
     *   false otherwise.
     */ isEmpty() {
        return this.length() === 0;
    }
    /**
     * Adds an item to the end of the buffer.
     */ push(value) {
        if (this.isFull()) {
            throw new RangeError('Ring buffer is full.');
        }
        this.set(this.end, value);
        this.end = this.wrap(this.end + 1);
    }
    /**
     * Adds many items to the end of the buffer, in order.
     */ pushAll(values) {
        for (const value of values){
            this.push(value);
        }
    }
    /**
     * Removes and returns the last item in the buffer.
     */ pop() {
        if (this.isEmpty()) {
            throw new RangeError('Ring buffer is empty.');
        }
        this.end = this.wrap(this.end - 1);
        const result = this.get(this.end);
        this.set(this.end, undefined);
        return result;
    }
    /**
     * Adds an item to the beginning of the buffer.
     */ unshift(value) {
        if (this.isFull()) {
            throw new RangeError('Ring buffer is full.');
        }
        this.begin = this.wrap(this.begin - 1);
        this.set(this.begin, value);
    }
    /**
     * Removes and returns the first item in the buffer.
     */ shift() {
        if (this.isEmpty()) {
            throw new RangeError('Ring buffer is empty.');
        }
        const result = this.get(this.begin);
        this.set(this.begin, undefined);
        this.begin = this.wrap(this.begin + 1);
        return result;
    }
    /**
     * Removes and returns a specific item in the buffer, and moves the last item
     * to the vacated slot.  This is useful for implementing a shuffling stream.
     * Note that this operation necessarily scrambles the original order.
     *
     * @param relativeIndex: the index of the item to remove, relative to the
     *   first item in the buffer (e.g., hiding the ring nature of the underlying
     *   storage).
     */ shuffleExcise(relativeIndex) {
        if (this.isEmpty()) {
            throw new RangeError('Ring buffer is empty.');
        }
        const index = this.wrap(this.begin + relativeIndex);
        const result = this.get(index);
        this.set(index, this.pop());
        return result;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmluZ19idWZmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWRhdGEvc3JjL3V0aWwvcmluZ19idWZmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSDs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFVO0lBVXJCOzs7T0FHRztJQUNILFlBQW1CLFFBQWdCO1FBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFibkMsa0VBQWtFO1FBQ2xFLDhEQUE4RDtRQUM5RCxxRUFBcUU7UUFDM0QsVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFFLFlBQVk7UUFDeEIsUUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFJLFlBQVk7UUFVaEMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxVQUFVLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNoQixNQUFNLElBQUksVUFBVSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDcEU7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFJLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDTyxJQUFJLENBQUMsS0FBYTtRQUMxQixvQ0FBb0M7UUFDcEMsT0FBTyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUN0QyxDQUFDO0lBRVMsR0FBRyxDQUFDLEtBQWE7UUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxJQUFJLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVTLEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBUTtRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixNQUFNLElBQUksVUFBVSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDSixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLEtBQVE7UUFDWCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQixNQUFNLElBQUksVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLE1BQVc7UUFDakIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUc7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQixNQUFNLElBQUksVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLEtBQVE7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQixNQUFNLElBQUksVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMvQztRQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxhQUFhLENBQUMsYUFBcUI7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEIsTUFBTSxJQUFJLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBBIHJpbmcgYnVmZmVyLCBwcm92aWRpbmcgTygxKSBGSUZPLCBMSUZPLCBhbmQgcmVsYXRlZCBvcGVyYXRpb25zLlxuICovXG5leHBvcnQgY2xhc3MgUmluZ0J1ZmZlcjxUPiB7XG4gIC8vIE5vdGUgd2Ugc3RvcmUgdGhlIGluZGljZXMgaW4gdGhlIHJhbmdlIDAgPD0gaW5kZXggPCAyKmNhcGFjaXR5LlxuICAvLyBUaGlzIGFsbG93cyB1cyB0byBkaXN0aW5ndWlzaCB0aGUgZnVsbCBmcm9tIHRoZSBlbXB0eSBjYXNlLlxuICAvLyBTZWUgaHR0cHM6Ly93d3cuc25lbGxtYW4ubmV0L2Jsb2cvYXJjaGl2ZS8yMDE2LTEyLTEzLXJpbmctYnVmZmVycy9cbiAgcHJvdGVjdGVkIGJlZ2luID0gMDsgIC8vIGluY2x1c2l2ZVxuICBwcm90ZWN0ZWQgZW5kID0gMDsgICAgLy8gZXhjbHVzaXZlXG4gIHByb3RlY3RlZCBkb3VibGVkQ2FwYWNpdHk6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgZGF0YTogVFtdO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGEgYFJpbmdCdWZmZXJgLlxuICAgKiBAcGFyYW0gY2FwYWNpdHkgVGhlIG51bWJlciBvZiBpdGVtcyB0aGF0IHRoZSBidWZmZXIgY2FuIGFjY29tb2RhdGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FwYWNpdHk6IG51bWJlcikge1xuICAgIGlmIChjYXBhY2l0eSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ2FuXFwndCBjcmVhdGUgYSByaW5nIGJ1ZmZlciBvZiB1bmtub3duIGNhcGFjaXR5LicpO1xuICAgIH1cbiAgICBpZiAoY2FwYWNpdHkgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ2FuXFwndCBjcmVhdGUgcmluZyBidWZmZXIgb2YgY2FwYWNpdHkgPCAxLicpO1xuICAgIH1cbiAgICB0aGlzLmRhdGEgPSBuZXcgQXJyYXk8VD4oY2FwYWNpdHkpO1xuICAgIHRoaXMuZG91YmxlZENhcGFjaXR5ID0gMiAqIGNhcGFjaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCBhbnkgaW5kZXggaW50byB0aGUgcmFuZ2UgMCA8PSBpbmRleCA8IDIqY2FwYWNpdHkuXG4gICAqL1xuICBwcm90ZWN0ZWQgd3JhcChpbmRleDogbnVtYmVyKSB7XG4gICAgLy8gZG9uJ3QgdHJ1c3QgJSBvbiBuZWdhdGl2ZSBudW1iZXJzXG4gICAgd2hpbGUgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggKz0gdGhpcy5kb3VibGVkQ2FwYWNpdHk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleCAlIHRoaXMuZG91YmxlZENhcGFjaXR5O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0NhblxcJ3QgZ2V0IGl0ZW0gYXQgYSBuZWdhdGl2ZSBpbmRleC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtpbmRleCAlIHRoaXMuY2FwYWNpdHldO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldChpbmRleDogbnVtYmVyLCB2YWx1ZTogVCkge1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdDYW5cXCd0IHNldCBpdGVtIGF0IGEgbmVnYXRpdmUgaW5kZXguJyk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVtpbmRleCAlIHRoaXMuY2FwYWNpdHldID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGJ1ZmZlci5cbiAgICovXG4gIGxlbmd0aCgpOiBudW1iZXIge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLmVuZCAtIHRoaXMuYmVnaW47XG4gICAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICAgIGxlbmd0aCA9IHRoaXMuZG91YmxlZENhcGFjaXR5ICsgbGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydHMgd2hldGhlciB0aGUgYnVmZmVyIGlzIGZ1bGwuXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgYnVmZmVyIGVxdWFscyBpdHMgY2FwYWNpdHksIGFuZFxuICAgKiAgIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGlzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGgoKSA9PT0gdGhpcy5jYXBhY2l0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIGJ1ZmZlciBpcyBlbXB0eS5cbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBidWZmZXIgZXF1YWxzIHplcm8sIGFuZFxuICAgKiAgIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoKCkgPT09IDA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlci5cbiAgICovXG4gIHB1c2godmFsdWU6IFQpIHtcbiAgICBpZiAodGhpcy5pc0Z1bGwoKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1JpbmcgYnVmZmVyIGlzIGZ1bGwuJyk7XG4gICAgfVxuICAgIHRoaXMuc2V0KHRoaXMuZW5kLCB2YWx1ZSk7XG4gICAgdGhpcy5lbmQgPSB0aGlzLndyYXAodGhpcy5lbmQgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG1hbnkgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgYnVmZmVyLCBpbiBvcmRlci5cbiAgICovXG4gIHB1c2hBbGwodmFsdWVzOiBUW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgdGhpcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbmQgcmV0dXJucyB0aGUgbGFzdCBpdGVtIGluIHRoZSBidWZmZXIuXG4gICAqL1xuICBwb3AoKTogVCB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignUmluZyBidWZmZXIgaXMgZW1wdHkuJyk7XG4gICAgfVxuICAgIHRoaXMuZW5kID0gdGhpcy53cmFwKHRoaXMuZW5kIC0gMSk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXQodGhpcy5lbmQpO1xuICAgIHRoaXMuc2V0KHRoaXMuZW5kLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBpdGVtIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGJ1ZmZlci5cbiAgICovXG4gIHVuc2hpZnQodmFsdWU6IFQpIHtcbiAgICBpZiAodGhpcy5pc0Z1bGwoKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1JpbmcgYnVmZmVyIGlzIGZ1bGwuJyk7XG4gICAgfVxuICAgIHRoaXMuYmVnaW4gPSB0aGlzLndyYXAodGhpcy5iZWdpbiAtIDEpO1xuICAgIHRoaXMuc2V0KHRoaXMuYmVnaW4sIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBidWZmZXIuXG4gICAqL1xuICBzaGlmdCgpOiBUIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdSaW5nIGJ1ZmZlciBpcyBlbXB0eS4nKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXQodGhpcy5iZWdpbik7XG4gICAgdGhpcy5zZXQodGhpcy5iZWdpbiwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLmJlZ2luID0gdGhpcy53cmFwKHRoaXMuYmVnaW4gKyAxKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW5kIHJldHVybnMgYSBzcGVjaWZpYyBpdGVtIGluIHRoZSBidWZmZXIsIGFuZCBtb3ZlcyB0aGUgbGFzdCBpdGVtXG4gICAqIHRvIHRoZSB2YWNhdGVkIHNsb3QuICBUaGlzIGlzIHVzZWZ1bCBmb3IgaW1wbGVtZW50aW5nIGEgc2h1ZmZsaW5nIHN0cmVhbS5cbiAgICogTm90ZSB0aGF0IHRoaXMgb3BlcmF0aW9uIG5lY2Vzc2FyaWx5IHNjcmFtYmxlcyB0aGUgb3JpZ2luYWwgb3JkZXIuXG4gICAqXG4gICAqIEBwYXJhbSByZWxhdGl2ZUluZGV4OiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gdG8gcmVtb3ZlLCByZWxhdGl2ZSB0byB0aGVcbiAgICogICBmaXJzdCBpdGVtIGluIHRoZSBidWZmZXIgKGUuZy4sIGhpZGluZyB0aGUgcmluZyBuYXR1cmUgb2YgdGhlIHVuZGVybHlpbmdcbiAgICogICBzdG9yYWdlKS5cbiAgICovXG4gIHNodWZmbGVFeGNpc2UocmVsYXRpdmVJbmRleDogbnVtYmVyKTogVCB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignUmluZyBidWZmZXIgaXMgZW1wdHkuJyk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy53cmFwKHRoaXMuYmVnaW4gKyByZWxhdGl2ZUluZGV4KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldChpbmRleCk7XG4gICAgdGhpcy5zZXQoaW5kZXgsIHRoaXMucG9wKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/growing_ring_buffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "GrowingRingBuffer",
    ()=>GrowingRingBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$ring_buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/ring_buffer.js [app-client] (ecmascript)");
;
class GrowingRingBuffer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$ring_buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RingBuffer"] {
    /**
     * Constructs a `GrowingRingBuffer`.
     */ constructor(){
        super(GrowingRingBuffer.INITIAL_CAPACITY);
    }
    isFull() {
        return false;
    }
    push(value) {
        if (super.isFull()) {
            this.expand();
        }
        super.push(value);
    }
    unshift(value) {
        if (super.isFull()) {
            this.expand();
        }
        super.unshift(value);
    }
    /**
     * Doubles the capacity of the buffer.
     */ expand() {
        const newCapacity = this.capacity * 2;
        const newData = new Array(newCapacity);
        const len = this.length();
        // Rotate the buffer to start at index 0 again, since we can't just
        // allocate more space at the end.
        for(let i = 0; i < len; i++){
            newData[i] = this.get(this.wrap(this.begin + i));
        }
        this.data = newData;
        this.capacity = newCapacity;
        this.doubledCapacity = 2 * this.capacity;
        this.begin = 0;
        this.end = len;
    }
}
GrowingRingBuffer.INITIAL_CAPACITY = 32;
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Jvd2luZ19yaW5nX2J1ZmZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvdXRpbC9ncm93aW5nX3JpbmdfYnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxNQUFhLGlCQUFxQixTQUFRLFVBQWE7SUFHckQ7O09BRUc7SUFDSDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUSxNQUFNO1FBQ2IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRVEsSUFBSSxDQUFDLEtBQVE7UUFDcEIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFUSxPQUFPLENBQUMsS0FBUTtRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssTUFBTTtRQUNaLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxDQUFJLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUxQixtRUFBbUU7UUFDbkUsa0NBQWtDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7QUE5Q2Msa0NBQWdCLEdBQUcsRUFBRSxDQUFDO1NBRDFCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7UmluZ0J1ZmZlcn0gZnJvbSAnLi9yaW5nX2J1ZmZlcic7XG5cbmV4cG9ydCBjbGFzcyBHcm93aW5nUmluZ0J1ZmZlcjxUPiBleHRlbmRzIFJpbmdCdWZmZXI8VD4ge1xuICBwcml2YXRlIHN0YXRpYyBJTklUSUFMX0NBUEFDSVRZID0gMzI7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgYSBgR3Jvd2luZ1JpbmdCdWZmZXJgLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoR3Jvd2luZ1JpbmdCdWZmZXIuSU5JVElBTF9DQVBBQ0lUWSk7XG4gIH1cblxuICBvdmVycmlkZSBpc0Z1bGwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb3ZlcnJpZGUgcHVzaCh2YWx1ZTogVCkge1xuICAgIGlmIChzdXBlci5pc0Z1bGwoKSkge1xuICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICB9XG4gICAgc3VwZXIucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBvdmVycmlkZSB1bnNoaWZ0KHZhbHVlOiBUKSB7XG4gICAgaWYgKHN1cGVyLmlzRnVsbCgpKSB7XG4gICAgICB0aGlzLmV4cGFuZCgpO1xuICAgIH1cbiAgICBzdXBlci51bnNoaWZ0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb3VibGVzIHRoZSBjYXBhY2l0eSBvZiB0aGUgYnVmZmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBleHBhbmQoKSB7XG4gICAgY29uc3QgbmV3Q2FwYWNpdHkgPSB0aGlzLmNhcGFjaXR5ICogMjtcbiAgICBjb25zdCBuZXdEYXRhID0gbmV3IEFycmF5PFQ+KG5ld0NhcGFjaXR5KTtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgLy8gUm90YXRlIHRoZSBidWZmZXIgdG8gc3RhcnQgYXQgaW5kZXggMCBhZ2Fpbiwgc2luY2Ugd2UgY2FuJ3QganVzdFxuICAgIC8vIGFsbG9jYXRlIG1vcmUgc3BhY2UgYXQgdGhlIGVuZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBuZXdEYXRhW2ldID0gdGhpcy5nZXQodGhpcy53cmFwKHRoaXMuYmVnaW4gKyBpKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gbmV3RGF0YTtcbiAgICB0aGlzLmNhcGFjaXR5ID0gbmV3Q2FwYWNpdHk7XG4gICAgdGhpcy5kb3VibGVkQ2FwYWNpdHkgPSAyICogdGhpcy5jYXBhY2l0eTtcbiAgICB0aGlzLmJlZ2luID0gMDtcbiAgICB0aGlzLmVuZCA9IGxlbjtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "ChainedIterator",
    ()=>ChainedIterator,
    "LazyIterator",
    ()=>LazyIterator,
    "OneToManyIterator",
    ()=>OneToManyIterator,
    "PrefetchIterator",
    ()=>PrefetchIterator,
    "ShuffleIterator",
    ()=>ShuffleIterator,
    "ZipMismatchMode",
    ()=>ZipMismatchMode,
    "iteratorFromConcatenated",
    ()=>iteratorFromConcatenated,
    "iteratorFromConcatenatedFunction",
    ()=>iteratorFromConcatenatedFunction,
    "iteratorFromFunction",
    ()=>iteratorFromFunction,
    "iteratorFromIncrementing",
    ()=>iteratorFromIncrementing,
    "iteratorFromItems",
    ()=>iteratorFromItems,
    "iteratorFromZipped",
    ()=>iteratorFromZipped
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-client] (ecmascript) <export * as tensor_util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$seedrandom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/seedrandom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/deep_clone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/deep_map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$growing_ring_buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/growing_ring_buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$ring_buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/ring_buffer.js [app-client] (ecmascript)");
;
;
;
;
;
;
function iteratorFromItems(items) {
    return new ArrayIterator(items);
}
function iteratorFromIncrementing(start) {
    let i = start;
    return iteratorFromFunction(()=>({
            value: i++,
            done: false
        }));
}
function iteratorFromFunction(func) {
    return new FunctionCallIterator(func);
}
function iteratorFromConcatenated(baseIterators, baseErrorHandler) {
    return new ChainedIterator(baseIterators, baseErrorHandler);
}
function iteratorFromConcatenatedFunction(iteratorFunc, count, baseErrorHandler) {
    return iteratorFromConcatenated(iteratorFromFunction(iteratorFunc).take(count), baseErrorHandler);
}
function iteratorFromZipped(iterators, mismatchMode = ZipMismatchMode.FAIL) {
    return new ZipIterator(iterators, mismatchMode);
}
class LazyIterator {
    /**
     * Collect all remaining elements of a bounded stream into an array.
     * Obviously this will succeed only for small streams that fit in memory.
     * Useful for testing.
     *
     * @returns A Promise for an array of stream elements, which will resolve
     *   when the stream is exhausted.
     */ async toArray() {
        const result = [];
        let x = await this.next();
        while(!x.done){
            result.push(x.value);
            x = await this.next();
        }
        return result;
    }
    /**
     * Collect all elements of this dataset into an array with prefetching 100
     * elements. This is useful for testing, because the prefetch changes the
     * order in which the Promises are resolved along the processing pipeline.
     * This may help expose bugs where results are dependent on the order of
     * Promise resolution rather than on the logical order of the stream (i.e.,
     * due to hidden mutable state).
     *
     * @returns A Promise for an array of stream elements, which will resolve
     *   when the stream is exhausted.
     */ async toArrayForTest() {
        const stream = this.prefetch(100);
        const result = [];
        let x = await stream.next();
        while(!x.done){
            result.push(x.value);
            x = await stream.next();
        }
        return result;
    }
    /**
     * Draw items from the stream until it is exhausted.
     *
     * This can be useful when the stream has side effects but no output.  In
     * that case, calling this function guarantees that the stream will be
     * fully processed.
     */ async resolveFully() {
        let x = await this.next();
        while(!x.done){
            x = await this.next();
        }
    }
    /**
     * Draw items from the stream until it is exhausted, or a predicate fails.
     *
     * This can be useful when the stream has side effects but no output.  In
     * that case, calling this function guarantees that the stream will be
     * fully processed.
     */ async resolveWhile(predicate) {
        let x = await this.next();
        let shouldContinue = predicate(x.value);
        while(!x.done && shouldContinue){
            x = await this.next();
            shouldContinue = predicate(x.value);
        }
    }
    /**
     * Handles errors thrown on this stream using a provided handler function.
     *
     * @param handler A function that handles any `Error` thrown during a `next()`
     *   call and returns true if the stream should continue (dropping the failed
     *   call) or false if the stream should quietly terminate.  If the handler
     *   itself throws (or rethrows) an `Error`, that will be propagated.
     *
     * @returns A `LazyIterator` of elements passed through from upstream,
     *   possibly filtering or terminating on upstream `next()` calls that
     *   throw an `Error`.
     */ handleErrors(handler) {
        return new ErrorHandlingLazyIterator(this, handler);
    }
    // TODO(soergel): Implement reduce() etc.
    /**
     * Filters this stream according to `predicate`.
     *
     * @param predicate A function mapping a stream element to a boolean or a
     * `Promise` for one.
     *
     * @returns A `LazyIterator` of elements for which the predicate was true.
     */ filter(predicate) {
        return new FilterIterator(this, predicate);
    }
    /**
     * Maps this stream through a 1-to-1 transform.
     *
     * @param transform A function mapping a stream element to a transformed
     *   element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */ map(transform) {
        return new MapIterator(this, transform);
    }
    /**
     * Maps this stream through an async 1-to-1 transform.
     *
     * @param transform A function mapping a stream element to a `Promise` for a
     *   transformed stream element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */ mapAsync(transform) {
        return new AsyncMapIterator(this, transform);
    }
    /**
     * Maps this stream through a 1-to-1 transform, forcing serial execution.
     *
     * @param transform A function mapping a stream element to a transformed
     *   element.
     *
     * @returns A `LazyIterator` of transformed elements.
     */ serialMapAsync(transform) {
        return new AsyncMapIterator(this, transform).serial();
    }
    /**
     * Maps this stream through a 1-to-many transform.
     *
     * @param transform A function mapping a stream element to an array of
     *   transformed elements.
     *
     * @returns A `DataStream` of transformed elements.
     */ flatmap(transform) {
        return new FlatmapIterator(this, transform);
    }
    /**
     * Apply a function to every element of the stream.
     *
     * @param f A function to apply to each stream element.
     */ async forEachAsync(f) {
        return this.map(f).resolveFully();
    }
    /**
     * Apply a function to every element of the stream, forcing serial execution.
     *
     * @param f A function to apply to each stream element.  Should return 'true'
     *   to indicate that the stream should continue, or 'false' to cause it to
     *   terminate.
     */ async serialForEach(f) {
        return this.serialMapAsync(f).resolveWhile((x)=>x === true);
    }
    /**
     * Groups elements into batches, represented as arrays of elements.
     *
     * We can think of the elements of this iterator as 'rows' (even if they are
     * nested structures).  By the same token, consecutive values for a given
     * key within the elements form a 'column'.  This matches the usual sense of
     * 'row' and 'column' when processing tabular data (e.g., parsing a CSV).
     *
     * Thus, "Row-major" means that the resulting batch is simply a collection of
     * rows: `[row1, row2, row3, ...]`.  This is contrast to the column-major
     * form, which is needed for vectorized computation.
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @returns A `LazyIterator` of batches of elements, represented as arrays
     *   of the original element type.
     */ rowMajorBatch(batchSize, smallLastBatch = true) {
        return new RowMajorBatchIterator(this, batchSize, smallLastBatch);
    }
    /**
     * Groups elements into batches, represented in column-major form.
     *
     * We can think of the elements of this iterator as 'rows' (even if they are
     * nested structures).  By the same token, consecutive values for a given
     * key within the elements form a 'column'.  This matches the usual sense of
     * 'row' and 'column' when processing tabular data (e.g., parsing a CSV).
     *
     * Thus, "column-major" means that the resulting batch is a (potentially
     * nested) structure representing the columns.  Each column entry, then,
     * contains a collection of the values found in that column for a range of
     * input elements.  This representation allows for vectorized computation, in
     * contrast to the row-major form.
     *
     * The inputs should all have the same nested structure (i.e., of arrays and
     * dicts).  The result is a single object with the same nested structure,
     * where the leaves are arrays collecting the values of the inputs at that
     * location (or, optionally, the result of a custom function applied to those
     * arrays).
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @param zipFn: (optional) A function that expects an array of elements at a
     *   single node of the object tree, and returns a `DeepMapResult`.  The
     *   `DeepMapResult` either provides a result value for that node (i.e.,
     *   representing the subtree), or indicates that the node should be processed
     *   recursively.  The default zipFn recurses as far as possible and places
     *   arrays at the leaves.
     * @returns A `LazyIterator` of batches of elements, represented as an object
     *   with collections at the leaves.
     */ columnMajorBatch(batchSize, smallLastBatch = true, // tslint:disable-next-line:no-any
    zipFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zipToList"]) {
        // First collect the desired number of input elements as a row-major batch.
        const rowBatches = this.rowMajorBatch(batchSize, smallLastBatch);
        // Now 'rotate' or 'pivot' the data, collecting all values from each column
        // in the batch (i.e., for each key within the elements) into an array.
        return rowBatches.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepZip"])(x, zipFn));
    }
    /**
     * Concatenate this `LazyIterator` with another.
     *
     * @param iterator A `LazyIterator` to be concatenated onto this one.
     * @param baseErrorHandler An optional function that can intercept `Error`s
     *   raised during a `next()` call on the base stream.  This function can
     *   decide whether the error should be propagated, whether the error should
     *   be ignored, or whether the base stream should be terminated.
     * @returns A `LazyIterator`.
     */ concatenate(iterator, baseErrorHandler) {
        return new ChainedIterator(iteratorFromItems([
            this,
            iterator
        ]), baseErrorHandler);
    }
    /**
     * Limits this stream to return at most `count` items.
     *
     * @param count The maximum number of items to provide from the stream. If
     * a negative or undefined value is given, the entire stream is returned
     *   unaltered.
     */ take(count) {
        if (count < 0 || count == null) {
            return this;
        }
        return new TakeIterator(this, count);
    }
    /**
     * Skips the first `count` items in this stream.
     *
     * @param count The number of items to skip.  If a negative or undefined
     * value is given, the entire stream is returned unaltered.
     */ skip(count) {
        if (count < 0 || count == null) {
            return this;
        }
        return new SkipIterator(this, count);
    }
    /**
     * Prefetch the first `bufferSize` items in this stream.
     *
     * Note this prefetches Promises, but makes no guarantees about when those
     * Promises resolve.
     *
     * @param bufferSize: An integer specifying the number of elements to be
     *   prefetched.
     */ prefetch(bufferSize) {
        return new PrefetchIterator(this, bufferSize);
    }
    // TODO(soergel): deep sharded shuffle, where supported
    /**
     * Randomly shuffles the elements of this stream.
     *
     * @param bufferSize: An integer specifying the number of elements from
     * this stream from which the new stream will sample.
     * @param seed: (Optional.) An integer specifying the random seed that
     * will be used to create the distribution.
     */ shuffle(windowSize, seed) {
        return new ShuffleIterator(this, windowSize, seed);
    }
    /**
     * Force an iterator to execute serially: each next() call will await the
     * prior one, so that they cannot execute concurrently.
     */ serial() {
        return new SerialIterator(this);
    }
}
// ============================================================================
// The following private classes serve to implement the chainable methods
// on LazyIterator.  Unfortunately they can't be placed in separate files,
// due to resulting trouble with circular imports.
// ============================================================================
// Iterators that just extend LazyIterator directly
// ============================================================================
class ArrayIterator extends LazyIterator {
    constructor(items){
        super();
        this.items = items;
        this.trav = 0;
    }
    summary() {
        return `Array of ${this.items.length} items`;
    }
    async next() {
        if (this.trav >= this.items.length) {
            return {
                value: null,
                done: true
            };
        }
        const item = this.items[this.trav];
        this.trav++;
        return {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_clone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepClone"])(item),
            done: false
        };
    }
}
class FunctionCallIterator extends LazyIterator {
    constructor(nextFn){
        super();
        this.nextFn = nextFn;
    }
    summary() {
        return `Function call`;
    }
    async next() {
        try {
            return this.nextFn();
        } catch (e) {
            // Modify the error message but leave the stack trace intact
            e.message = `Error thrown while iterating through a dataset: ${e.message}`;
            throw e;
        }
    }
}
class SerialIterator extends LazyIterator {
    constructor(upstream){
        super();
        this.upstream = upstream;
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    summary() {
        return `${this.upstream.summary()} -> Serial`;
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    async serialNext() {
        return this.upstream.next();
    }
}
class SkipIterator extends LazyIterator {
    constructor(upstream, maxCount){
        super();
        this.upstream = upstream;
        this.maxCount = maxCount;
        // Local state that should not be clobbered by out-of-order execution.
        this.count = 0;
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    summary() {
        return `${this.upstream.summary()} -> Skip`;
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    async serialNext() {
        // TODO(soergel): consider tradeoffs of reading in parallel, eg.
        // collecting next() promises in an Array and then waiting for
        // Promise.all() of those. Benefit: pseudo-parallel execution.  Drawback:
        // maybe delayed GC.
        while(this.count++ < this.maxCount){
            const skipped = await this.upstream.next();
            // short-circuit if upstream is already empty
            if (skipped.done) {
                return skipped;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](skipped.value);
        }
        return this.upstream.next();
    }
}
class TakeIterator extends LazyIterator {
    constructor(upstream, maxCount){
        super();
        this.upstream = upstream;
        this.maxCount = maxCount;
        this.count = 0;
    }
    summary() {
        return `${this.upstream.summary()} -> Take`;
    }
    async next() {
        if (this.count++ >= this.maxCount) {
            return {
                value: null,
                done: true
            };
        }
        return this.upstream.next();
    }
}
// Note this batch just groups items into row-wise element arrays.
// Rotating these to a column-wise representation happens only at the dataset
// level.
class RowMajorBatchIterator extends LazyIterator {
    constructor(upstream, batchSize, enableSmallLastBatch = true){
        super();
        this.upstream = upstream;
        this.batchSize = batchSize;
        this.enableSmallLastBatch = enableSmallLastBatch;
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    summary() {
        return `${this.upstream.summary()} -> RowMajorBatch`;
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    async serialNext() {
        const batch = [];
        while(batch.length < this.batchSize){
            const item = await this.upstream.next();
            if (item.done) {
                if (this.enableSmallLastBatch && batch.length > 0) {
                    return {
                        value: batch,
                        done: false
                    };
                }
                return {
                    value: null,
                    done: true
                };
            }
            batch.push(item.value);
        }
        return {
            value: batch,
            done: false
        };
    }
}
class FilterIterator extends LazyIterator {
    constructor(upstream, predicate){
        super();
        this.upstream = upstream;
        this.predicate = predicate;
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    summary() {
        return `${this.upstream.summary()} -> Filter`;
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    async serialNext() {
        while(true){
            const item = await this.upstream.next();
            if (item.done || this.predicate(item.value)) {
                return item;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](item.value);
        }
    }
}
class MapIterator extends LazyIterator {
    constructor(upstream, transform){
        super();
        this.upstream = upstream;
        this.transform = transform;
    }
    summary() {
        return `${this.upstream.summary()} -> Map`;
    }
    async next() {
        const item = await this.upstream.next();
        if (item.done) {
            return {
                value: null,
                done: true
            };
        }
        const inputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].getTensorsInContainer(item.value);
        // Careful: the transform may mutate the item in place.
        // That's why we have to remember the input Tensors above, and then
        // below dispose only those that were not passed through to the output.
        // Note too that the transform function is responsible for tidying
        // any intermediate Tensors.  Here we are concerned only about the
        // inputs.
        const mapped = this.transform(item.value);
        const outputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].getTensorsInContainer(mapped);
        // TODO(soergel) faster intersection
        // TODO(soergel) move to tf.disposeExcept(in, out)?
        for (const t of inputTensors){
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].isTensorInList(t, outputTensors)) {
                t.dispose();
            }
        }
        return {
            value: mapped,
            done: false
        };
    }
}
class ErrorHandlingLazyIterator extends LazyIterator {
    constructor(upstream, handler){
        super();
        this.upstream = upstream;
        this.handler = handler;
        this.count = 0;
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    summary() {
        return `${this.upstream.summary()} -> handleErrors`;
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    async serialNext() {
        while(true){
            try {
                return await this.upstream.next();
            } catch (e) {
                if (!this.handler(e)) {
                    return {
                        value: null,
                        done: true
                    };
                }
            // If the handler returns true, loop and fetch the next upstream item.
            // If the upstream iterator throws an endless stream of errors, and if
            // the handler says to ignore them, then we loop forever here.  That is
            // the correct behavior-- it's up to the handler to decide when to stop.
            }
        }
    }
}
class AsyncMapIterator extends LazyIterator {
    constructor(upstream, transform){
        super();
        this.upstream = upstream;
        this.transform = transform;
    }
    summary() {
        return `${this.upstream.summary()} -> AsyncMap`;
    }
    async next() {
        const item = await this.upstream.next();
        if (item.done) {
            return {
                value: null,
                done: true
            };
        }
        const inputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].getTensorsInContainer(item.value);
        // Careful: the transform may mutate the item in place.
        // That's why we have to remember the input Tensors above, and then
        // below dispose only those that were not passed through to the output.
        // Note too that the transform function is responsible for tidying
        // any intermediate Tensors.  Here we are concerned only about the
        // inputs.
        const mapped = await this.transform(item.value);
        const outputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].getTensorsInContainer(mapped);
        // TODO(soergel) faster intersection
        // TODO(soergel) move to tf.disposeExcept(in, out)?
        for (const t of inputTensors){
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].isTensorInList(t, outputTensors)) {
                t.dispose();
            }
        }
        return {
            value: mapped,
            done: false
        };
    }
}
class OneToManyIterator extends LazyIterator {
    constructor(){
        super();
        this.outputQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$growing_ring_buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrowingRingBuffer"]();
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    async serialNext() {
        // Fetch so that the queue contains at least one item if possible.
        // If the upstream source is exhausted, AND there are no items left in
        // the output queue, then this stream is also exhausted.
        while(this.outputQueue.length() === 0){
            // TODO(soergel): consider parallel reads.
            if (!await this.pump()) {
                return {
                    value: null,
                    done: true
                };
            }
        }
        return {
            value: this.outputQueue.shift(),
            done: false
        };
    }
}
class FlatmapIterator extends OneToManyIterator {
    constructor(upstream, transform){
        super();
        this.upstream = upstream;
        this.transform = transform;
    }
    summary() {
        return `${this.upstream.summary()} -> Flatmap`;
    }
    async pump() {
        const item = await this.upstream.next();
        if (item.done) {
            return false;
        }
        const inputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].getTensorsInContainer(item.value);
        // Careful: the transform may mutate the item in place.
        // that's why we have to remember the input Tensors above, and then
        // below dispose only those that were not passed through to the output.
        // Note too that the transform function is responsible for tidying any
        // intermediate Tensors.  Here we are concerned only about the inputs.
        const mappedArray = this.transform(item.value);
        const outputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].getTensorsInContainer(mappedArray);
        this.outputQueue.pushAll(mappedArray);
        // TODO(soergel) faster intersection, and deduplicate outputTensors
        // TODO(soergel) move to tf.disposeExcept(in, out)?
        for (const t of inputTensors){
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__tensor_util$3e$__["tensor_util"].isTensorInList(t, outputTensors)) {
                t.dispose();
            }
        }
        return true;
    }
}
class ChainedIterator extends LazyIterator {
    constructor(iterators, baseErrorHandler){
        super();
        this.baseErrorHandler = baseErrorHandler;
        // Strict Promise execution order:
        // a next() call may not even begin until the previous one completes.
        this.lastRead = null;
        // Local state that should not be clobbered by out-of-order execution.
        this.iterator = null;
        this.moreIterators = iterators;
    }
    summary() {
        const upstreamSummaries = 'TODO: fill in upstream of chained summaries';
        return `${upstreamSummaries} -> Chained`;
    }
    async next() {
        this.lastRead = this.readFromChain(this.lastRead);
        return this.lastRead;
    }
    async readFromChain(lastRead) {
        // Must await on the previous read since the previous read may have advanced
        // the stream of streams, from which we need to read.
        // This is unfortunate since we can't parallelize reads. Which means
        // prefetching of chained streams is a no-op.
        // One solution is to prefetch immediately upstream of this.
        await lastRead;
        if (this.iterator == null) {
            const iteratorResult = await this.moreIterators.next();
            if (iteratorResult.done) {
                // No more streams to stream from.
                return {
                    value: null,
                    done: true
                };
            }
            this.iterator = iteratorResult.value;
            if (this.baseErrorHandler != null) {
                this.iterator = this.iterator.handleErrors(this.baseErrorHandler);
            }
        }
        const itemResult = await this.iterator.next();
        if (itemResult.done) {
            this.iterator = null;
            return this.readFromChain(lastRead);
        }
        return itemResult;
    }
}
var ZipMismatchMode;
(function(ZipMismatchMode) {
    ZipMismatchMode[ZipMismatchMode["FAIL"] = 0] = "FAIL";
    ZipMismatchMode[ZipMismatchMode["SHORTEST"] = 1] = "SHORTEST";
    ZipMismatchMode[ZipMismatchMode["LONGEST"] = 2] = "LONGEST"; // use nulls for exhausted streams; use up the longest stream.
})(ZipMismatchMode || (ZipMismatchMode = {}));
/**
 * Provides a `LazyIterator` that zips together an array, dict, or nested
 * structure of `LazyIterator`s (and perhaps additional constants).
 *
 * The underlying streams must provide elements in a consistent order such
 * that they correspond.
 *
 * Typically, the underlying streams should have the same number of
 * elements. If they do not, the behavior is determined by the
 * `mismatchMode` argument.
 *
 * The nested structure of the `iterators` argument determines the
 * structure of elements in the resulting iterator.
 *
 * Doing this in a concurrency-safe way requires some trickery.  In
 * particular, we want this stream to return the elements from the
 * underlying streams in the correct order according to when next() was
 * called, even if the resulting Promises resolve in a different order.
 *
 * @param iterators: An array or object containing LazyIterators at the
 * leaves.
 * @param mismatchMode: Determines what to do when one underlying iterator
 * is exhausted before the others.  `ZipMismatchMode.FAIL` (the default)
 * causes an error to be thrown in this case.  `ZipMismatchMode.SHORTEST`
 * causes the zipped iterator to terminate with the furst underlying
 * streams, so elements remaining on the longer streams are ignored.
 * `ZipMismatchMode.LONGEST` causes the zipped stream to continue, filling
 * in nulls for the exhausted streams, until all streams are exhausted.
 */ class ZipIterator extends LazyIterator {
    constructor(iterators, mismatchMode = ZipMismatchMode.FAIL){
        super();
        this.iterators = iterators;
        this.mismatchMode = mismatchMode;
        this.count = 0;
        this.currentPromise = null;
    }
    summary() {
        const upstreamSummaries = 'TODO: fill in upstream of zip summaries';
        return `{${upstreamSummaries}} -> Zip`;
    }
    async nextState(afterState) {
        // This chaining ensures that the underlying next() are not even called
        // before the previous ones have resolved.
        await afterState;
        // Collect underlying iterator "done" signals as a side effect in
        // getNext()
        let numIterators = 0;
        let iteratorsDone = 0;
        function getNext(container) {
            if (container instanceof LazyIterator) {
                const result = container.next();
                return {
                    value: result.then((x)=>{
                        numIterators++;
                        if (x.done) {
                            iteratorsDone++;
                        }
                        return x.value;
                    }),
                    recurse: false
                };
            } else {
                return {
                    value: null,
                    recurse: true
                };
            }
        }
        const mapped = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMapAndAwaitAll"])(this.iterators, getNext);
        if (numIterators === iteratorsDone) {
            // The streams have all ended.
            return {
                value: null,
                done: true
            };
        }
        if (iteratorsDone > 0) {
            switch(this.mismatchMode){
                case ZipMismatchMode.FAIL:
                    throw new Error('Zipped streams should have the same length. ' + `Mismatched at element ${this.count}.`);
                case ZipMismatchMode.SHORTEST:
                    return {
                        value: null,
                        done: true
                    };
                case ZipMismatchMode.LONGEST:
                default:
            }
        }
        this.count++;
        return {
            value: mapped,
            done: false
        };
    }
    async next() {
        this.currentPromise = this.nextState(this.currentPromise);
        return this.currentPromise;
    }
}
class PrefetchIterator extends LazyIterator {
    constructor(upstream, bufferSize){
        super();
        this.upstream = upstream;
        this.bufferSize = bufferSize;
        this.buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$ring_buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RingBuffer"](bufferSize);
    }
    summary() {
        return `${this.upstream.summary()} -> Prefetch`;
    }
    /**
     * Refill the prefetch buffer.  Returns only after the buffer is full, or
     * the upstream source is exhausted.
     */ refill() {
        while(!this.buffer.isFull()){
            const v = this.upstream.next();
            this.buffer.push(v);
        }
    }
    next() {
        this.refill();
        // This shift will never throw an error because the buffer is always
        // full after a refill. If the stream is exhausted, the buffer will be
        // full of Promises that will resolve to the end-of-stream signal.
        return this.buffer.shift();
    }
}
class ShuffleIterator extends PrefetchIterator {
    constructor(upstream, windowSize, seed){
        super(upstream, windowSize);
        this.upstream = upstream;
        this.windowSize = windowSize;
        // Local state that should not be clobbered by out-of-order execution.
        this.upstreamExhausted = false;
        this.random = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$seedrandom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alea"](seed || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].now().toString());
        this.lastRead = Promise.resolve({
            value: null,
            done: false
        });
    }
    async next() {
        // This sets this.lastRead to a new Promise right away, as opposed to
        // saying `await this.lastRead; this.lastRead = this.serialNext();` which
        // would not work because this.nextRead would be updated only after the
        // promise resolves.
        this.lastRead = this.lastRead.then(()=>this.serialNext());
        return this.lastRead;
    }
    randomInt(max) {
        return Math.floor(this.random() * max);
    }
    chooseIndex() {
        return this.randomInt(this.buffer.length());
    }
    async serialNext() {
        // TODO(soergel): consider performance
        if (!this.upstreamExhausted) {
            this.refill();
        }
        while(!this.buffer.isEmpty()){
            const chosenIndex = this.chooseIndex();
            const result = await this.buffer.shuffleExcise(chosenIndex);
            if (result.done) {
                this.upstreamExhausted = true;
            } else {
                this.refill();
                return result;
            }
        }
        return {
            value: null,
            done: true
        };
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eV9pdGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvaXRlcmF0b3JzL2xhenlfaXRlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCxPQUFPLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQXFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFPL0Msb0RBQW9EO0FBQ3BELGtFQUFrRTtBQUNsRSwwREFBMEQ7QUFFMUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUksS0FBVTtJQUM3QyxPQUFPLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxLQUFhO0lBQ3BELElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNkLE9BQU8sb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2hDLElBQ2lEO0lBQ25ELE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dB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Q0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FDRjtRQUNELE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0ICogYXMgc2VlZHJhbmRvbSBmcm9tICdzZWVkcmFuZG9tJztcblxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi91dGlsL2RlZXBfY2xvbmUnO1xuaW1wb3J0IHtkZWVwTWFwQW5kQXdhaXRBbGwsIERlZXBNYXBBc3luY1Jlc3VsdCwgRGVlcE1hcFJlc3VsdCwgZGVlcFppcCwgemlwVG9MaXN0fSBmcm9tICcuLi91dGlsL2RlZXBfbWFwJztcbmltcG9ydCB7R3Jvd2luZ1JpbmdCdWZmZXJ9IGZyb20gJy4uL3V0aWwvZ3Jvd2luZ19yaW5nX2J1ZmZlcic7XG5pbXBvcnQge1JpbmdCdWZmZXJ9IGZyb20gJy4uL3V0aWwvcmluZ19idWZmZXInO1xuXG4vKipcbiAqIEEgbmVzdGVkIHN0cnVjdHVyZSBvZiBMYXp5SXRlcmF0b3JzLCB1c2VkIGFzIHRoZSBpbnB1dCB0byB6aXAoKS5cbiAqL1xuZXhwb3J0IHR5cGUgSXRlcmF0b3JDb250YWluZXIgPSBDb250YWluZXI8TGF6eUl0ZXJhdG9yPHRmLlRlbnNvckNvbnRhaW5lcj4+O1xuXG4vLyBIZXJlIHdlIGltcGxlbWVudCBhIHNpbXBsZSBhc3luY2hyb25vdXMgaXRlcmF0b3IuXG4vLyBUaGlzIGxldHMgdXMgYXZvaWQgdXNpbmcgZWl0aGVyIHRoaXJkLXBhcnR5IHN0cmVhbSBsaWJyYXJpZXMgb3Jcbi8vIHJlY2VudCBUeXBlU2NyaXB0IGxhbmd1YWdlIHN1cHBvcnQgcmVxdWlyaW5nIHBvbHlmaWxscy5cblxuLyoqXG4gKiBDcmVhdGUgYSBgTGF6eUl0ZXJhdG9yYCBmcm9tIGFuIGFycmF5IG9mIGl0ZW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0b3JGcm9tSXRlbXM8VD4oaXRlbXM6IFRbXSk6IExhenlJdGVyYXRvcjxUPiB7XG4gIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcihpdGVtcyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYExhenlJdGVyYXRvcmAgb2YgaW5jcmVtZW50aW5nIGludGVnZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0b3JGcm9tSW5jcmVtZW50aW5nKHN0YXJ0OiBudW1iZXIpOiBMYXp5SXRlcmF0b3I8bnVtYmVyPiB7XG4gIGxldCBpID0gc3RhcnQ7XG4gIHJldHVybiBpdGVyYXRvckZyb21GdW5jdGlvbigoKSA9PiAoe3ZhbHVlOiBpKyssIGRvbmU6IGZhbHNlfSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBMYXp5SXRlcmF0b3JgIGZyb20gYSBmdW5jdGlvbi5cbiAqXG4gKiBgYGBqc1xuICogbGV0IGkgPSAtMTtcbiAqIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICogICAgKytpIDwgNSA/IHt2YWx1ZTogaSwgZG9uZTogZmFsc2V9IDoge3ZhbHVlOiBudWxsLCBkb25lOiB0cnVlfTtcbiAqIGNvbnN0IGl0ZXIgPSB0Zi5kYXRhLml0ZXJhdG9yRnJvbUZ1bmN0aW9uKGZ1bmMpO1xuICogYXdhaXQgaXRlci5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gZnVuYyBBIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgZGF0YSBvbiBlYWNoIGNhbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpdGVyYXRvckZyb21GdW5jdGlvbjxUPihcbiAgICBmdW5jOiAoKSA9PlxuICAgICAgICBJdGVyYXRvclJlc3VsdDxUPnwgUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4pOiBMYXp5SXRlcmF0b3I8VD4ge1xuICByZXR1cm4gbmV3IEZ1bmN0aW9uQ2FsbEl0ZXJhdG9yKGZ1bmMpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBMYXp5SXRlcmF0b3JgIGJ5IGNvbmNhdGVuYXRpbmcgdW5kZXJseWluZyBzdHJlYW1zLCB3aGljaCBhcmVcbiAqIHRoZW1zZWx2ZXMgcHJvdmlkZWQgYXMgYSBzdHJlYW0uXG4gKlxuICogVGhpcyBjYW4gYWxzbyBiZSB0aG91Z2h0IG9mIGFzIGEgXCJzdHJlYW0gZmxhdHRlblwiIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0gYmFzZUl0ZXJhdG9ycyBBIHN0cmVhbSBvZiBzdHJlYW1zIHRvIGJlIGNvbmNhdGVuYXRlZC5cbiAqIEBwYXJhbSBiYXNlRXJyb3JIYW5kbGVyIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgY2FuIGludGVyY2VwdCBgRXJyb3Jgc1xuICogICByYWlzZWQgZHVyaW5nIGEgYG5leHQoKWAgY2FsbCBvbiB0aGUgYmFzZSBzdHJlYW0uICBUaGlzIGZ1bmN0aW9uIGNhbiBkZWNpZGVcbiAqICAgd2hldGhlciB0aGUgZXJyb3Igc2hvdWxkIGJlIHByb3BhZ2F0ZWQsIHdoZXRoZXIgdGhlIGVycm9yIHNob3VsZCBiZVxuICogICBpZ25vcmVkLCBvciB3aGV0aGVyIHRoZSBiYXNlIHN0cmVhbSBzaG91bGQgYmUgdGVybWluYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGl0ZXJhdG9yRnJvbUNvbmNhdGVuYXRlZDxUPihcbiAgICBiYXNlSXRlcmF0b3JzOiBMYXp5SXRlcmF0b3I8TGF6eUl0ZXJhdG9yPFQ+PixcbiAgICBiYXNlRXJyb3JIYW5kbGVyPzogKGU6IEVycm9yKSA9PiBib29sZWFuKTogTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgcmV0dXJuIG5ldyBDaGFpbmVkSXRlcmF0b3IoYmFzZUl0ZXJhdG9ycywgYmFzZUVycm9ySGFuZGxlcik7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYExhenlJdGVyYXRvcmAgYnkgY29uY2F0ZW5hdGluZyBzdHJlYW1zIHByb2R1Y2VkIGJ5IGNhbGxpbmcgYVxuICogc3RyZWFtLWdlbmVyYXRpbmcgZnVuY3Rpb24gYSBnaXZlbiBudW1iZXIgb2YgdGltZXMuXG4gKlxuICogU2luY2UgYSBgTGF6eUl0ZXJhdG9yYCBpcyByZWFkLW9uY2UsIGl0IGNhbm5vdCBiZSByZXBlYXRlZCwgYnV0IHRoaXNcbiAqIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIGFjaGlldmUgYSBzaW1pbGFyIGVmZmVjdDpcbiAqXG4gKiAgIExhenlJdGVyYXRvci5vZkNvbmNhdGVuYXRlZEZ1bmN0aW9uKCgpID0+IG5ldyBNeUl0ZXJhdG9yKCksIDYpO1xuICpcbiAqIEBwYXJhbSBpdGVyYXRvckZ1bmM6IEEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhIG5ldyBzdHJlYW0gb24gZWFjaCBjYWxsLlxuICogQHBhcmFtIGNvdW50OiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGNhbGwgdGhlIGZ1bmN0aW9uLlxuICogQHBhcmFtIGJhc2VFcnJvckhhbmRsZXIgQW4gb3B0aW9uYWwgZnVuY3Rpb24gdGhhdCBjYW4gaW50ZXJjZXB0IGBFcnJvcmBzXG4gKiAgIHJhaXNlZCBkdXJpbmcgYSBgbmV4dCgpYCBjYWxsIG9uIHRoZSBiYXNlIHN0cmVhbS4gIFRoaXMgZnVuY3Rpb24gY2FuIGRlY2lkZVxuICogICB3aGV0aGVyIHRoZSBlcnJvciBzaG91bGQgYmUgcHJvcGFnYXRlZCwgd2hldGhlciB0aGUgZXJyb3Igc2hvdWxkIGJlXG4gKiAgIGlnbm9yZWQsIG9yIHdoZXRoZXIgdGhlIGJhc2Ugc3RyZWFtIHNob3VsZCBiZSB0ZXJtaW5hdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0b3JGcm9tQ29uY2F0ZW5hdGVkRnVuY3Rpb248VD4oXG4gICAgaXRlcmF0b3JGdW5jOiAoKSA9PiBJdGVyYXRvclJlc3VsdDxMYXp5SXRlcmF0b3I8VD4+LCBjb3VudDogbnVtYmVyLFxuICAgIGJhc2VFcnJvckhhbmRsZXI/OiAoZTogRXJyb3IpID0+IGJvb2xlYW4pOiBMYXp5SXRlcmF0b3I8VD4ge1xuICByZXR1cm4gaXRlcmF0b3JGcm9tQ29uY2F0ZW5hdGVkKFxuICAgICAgaXRlcmF0b3JGcm9tRnVuY3Rpb24oaXRlcmF0b3JGdW5jKS50YWtlKGNvdW50KSwgYmFzZUVycm9ySGFuZGxlcik7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYExhenlJdGVyYXRvcmAgYnkgemlwcGluZyB0b2dldGhlciBhbiBhcnJheSwgZGljdCwgb3IgbmVzdGVkXG4gKiBzdHJ1Y3R1cmUgb2YgYExhenlJdGVyYXRvcmBzIChhbmQgcGVyaGFwcyBhZGRpdGlvbmFsIGNvbnN0YW50cykuXG4gKlxuICogVGhlIHVuZGVybHlpbmcgc3RyZWFtcyBtdXN0IHByb3ZpZGUgZWxlbWVudHMgaW4gYSBjb25zaXN0ZW50IG9yZGVyIHN1Y2hcbiAqIHRoYXQgdGhleSBjb3JyZXNwb25kLlxuICpcbiAqIFR5cGljYWxseSwgdGhlIHVuZGVybHlpbmcgc3RyZWFtcyBzaG91bGQgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2ZcbiAqIGVsZW1lbnRzLiBJZiB0aGV5IGRvIG5vdCwgdGhlIGJlaGF2aW9yIGlzIGRldGVybWluZWQgYnkgdGhlXG4gKiBgbWlzbWF0Y2hNb2RlYCBhcmd1bWVudC5cbiAqXG4gKiBUaGUgbmVzdGVkIHN0cnVjdHVyZSBvZiB0aGUgYGl0ZXJhdG9yc2AgYXJndW1lbnQgZGV0ZXJtaW5lcyB0aGVcbiAqIHN0cnVjdHVyZSBvZiBlbGVtZW50cyBpbiB0aGUgcmVzdWx0aW5nIGl0ZXJhdG9yLlxuICpcbiAqIEBwYXJhbSBpdGVyYXRvcnM6IEFuIGFycmF5IG9yIG9iamVjdCBjb250YWluaW5nIExhenlJdGVyYXRvcnMgYXQgdGhlXG4gKiBsZWF2ZXMuXG4gKiBAcGFyYW0gbWlzbWF0Y2hNb2RlOiBEZXRlcm1pbmVzIHdoYXQgdG8gZG8gd2hlbiBvbmUgdW5kZXJseWluZyBpdGVyYXRvclxuICogaXMgZXhoYXVzdGVkIGJlZm9yZSB0aGUgb3RoZXJzLiAgYFppcE1pc21hdGNoTW9kZS5GQUlMYCAodGhlIGRlZmF1bHQpXG4gKiBjYXVzZXMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIGluIHRoaXMgY2FzZS4gIGBaaXBNaXNtYXRjaE1vZGUuU0hPUlRFU1RgXG4gKiBjYXVzZXMgdGhlIHppcHBlZCBpdGVyYXRvciB0byB0ZXJtaW5hdGUgd2l0aCB0aGUgZnVyc3QgdW5kZXJseWluZ1xuICogc3RyZWFtcywgc28gZWxlbWVudHMgcmVtYWluaW5nIG9uIHRoZSBsb25nZXIgc3RyZWFtcyBhcmUgaWdub3JlZC5cbiAqIGBaaXBNaXNtYXRjaE1vZGUuTE9OR0VTVGAgY2F1c2VzIHRoZSB6aXBwZWQgc3RyZWFtIHRvIGNvbnRpbnVlLCBmaWxsaW5nXG4gKiBpbiBudWxscyBmb3IgdGhlIGV4aGF1c3RlZCBzdHJlYW1zLCB1bnRpbCBhbGwgc3RyZWFtcyBhcmUgZXhoYXVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXRlcmF0b3JGcm9tWmlwcGVkPE8gZXh0ZW5kcyB0Zi5UZW5zb3JDb250YWluZXI+KFxuICAgIGl0ZXJhdG9yczogSXRlcmF0b3JDb250YWluZXIsXG4gICAgbWlzbWF0Y2hNb2RlOiBaaXBNaXNtYXRjaE1vZGUgPSBaaXBNaXNtYXRjaE1vZGUuRkFJTCk6IExhenlJdGVyYXRvcjxPPiB7XG4gIHJldHVybiBuZXcgWmlwSXRlcmF0b3I8Tz4oaXRlcmF0b3JzLCBtaXNtYXRjaE1vZGUpO1xufVxuXG4vKipcbiAqIEFuIGFzeW5jaHJvbm91cyBpdGVyYXRvciwgcHJvdmlkaW5nIGxhenkgYWNjZXNzIHRvIGEgcG90ZW50aWFsbHlcbiAqIHVuYm91bmRlZCBzdHJlYW0gb2YgZWxlbWVudHMuXG4gKlxuICogSXRlcmF0b3IgY2FuIGJlIG9idGFpbmVkIGZyb20gYSBkYXRhc2V0OlxuICogYGNvbnN0IGl0ZXIgPSBhd2FpdCBkYXRhc2V0Lml0ZXJhdG9yKCk7YFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgLy8gVGhpcyBjbGFzcyBpbXBsZW1lbnRzIEFzeW5jSXRlcmF0b3I8VD4sIGJ1dCB3ZSBoYXZlIG5vdCB5ZXQgc2V0IHRoZVxuICAvLyBUeXBlU2NyaXB0IC0tZG93bmxldmVsSXRlcmF0aW9uIGZsYWcgdG8gZW5hYmxlIHRoYXQuXG5cbiAgYWJzdHJhY3Qgc3VtbWFyeSgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBgUHJvbWlzZWAgZm9yIHRoZSBuZXh0IGVsZW1lbnQgaW4gdGhlIHN0cmVhbS5cbiAgICpcbiAgICogV2hlbiBhbiBpdGVtIGNhbiBiZSBwcm92aWRlZCBzdWNjZXNzZnVsbHksIHRoZSByZXR1cm4gdmFsdWUgaXNcbiAgICogYHt2YWx1ZTpULCBkb25lOmZhbHNlfWAuXG4gICAqXG4gICAqIENhbGxpbmcgbmV4dCgpIG9uIGEgY2xvc2VkIHN0cmVhbSByZXR1cm5zIGB7dmFsdWU6bnVsbCwgZG9uZTp0cnVlfWAuXG4gICAqL1xuICBhYnN0cmFjdCBuZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+O1xuXG4gIC8qKlxuICAgKiBDb2xsZWN0IGFsbCByZW1haW5pbmcgZWxlbWVudHMgb2YgYSBib3VuZGVkIHN0cmVhbSBpbnRvIGFuIGFycmF5LlxuICAgKiBPYnZpb3VzbHkgdGhpcyB3aWxsIHN1Y2NlZWQgb25seSBmb3Igc21hbGwgc3RyZWFtcyB0aGF0IGZpdCBpbiBtZW1vcnkuXG4gICAqIFVzZWZ1bCBmb3IgdGVzdGluZy5cbiAgICpcbiAgICogQHJldHVybnMgQSBQcm9taXNlIGZvciBhbiBhcnJheSBvZiBzdHJlYW0gZWxlbWVudHMsIHdoaWNoIHdpbGwgcmVzb2x2ZVxuICAgKiAgIHdoZW4gdGhlIHN0cmVhbSBpcyBleGhhdXN0ZWQuXG4gICAqL1xuICBhc3luYyB0b0FycmF5KCk6IFByb21pc2U8VFtdPiB7XG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXTtcbiAgICBsZXQgeCA9IGF3YWl0IHRoaXMubmV4dCgpO1xuICAgIHdoaWxlICgheC5kb25lKSB7XG4gICAgICByZXN1bHQucHVzaCh4LnZhbHVlKTtcbiAgICAgIHggPSBhd2FpdCB0aGlzLm5leHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0IGFsbCBlbGVtZW50cyBvZiB0aGlzIGRhdGFzZXQgaW50byBhbiBhcnJheSB3aXRoIHByZWZldGNoaW5nIDEwMFxuICAgKiBlbGVtZW50cy4gVGhpcyBpcyB1c2VmdWwgZm9yIHRlc3RpbmcsIGJlY2F1c2UgdGhlIHByZWZldGNoIGNoYW5nZXMgdGhlXG4gICAqIG9yZGVyIGluIHdoaWNoIHRoZSBQcm9taXNlcyBhcmUgcmVzb2x2ZWQgYWxvbmcgdGhlIHByb2Nlc3NpbmcgcGlwZWxpbmUuXG4gICAqIFRoaXMgbWF5IGhlbHAgZXhwb3NlIGJ1Z3Mgd2hlcmUgcmVzdWx0cyBhcmUgZGVwZW5kZW50IG9uIHRoZSBvcmRlciBvZlxuICAgKiBQcm9taXNlIHJlc29sdXRpb24gcmF0aGVyIHRoYW4gb24gdGhlIGxvZ2ljYWwgb3JkZXIgb2YgdGhlIHN0cmVhbSAoaS5lLixcbiAgICogZHVlIHRvIGhpZGRlbiBtdXRhYmxlIHN0YXRlKS5cbiAgICpcbiAgICogQHJldHVybnMgQSBQcm9taXNlIGZvciBhbiBhcnJheSBvZiBzdHJlYW0gZWxlbWVudHMsIHdoaWNoIHdpbGwgcmVzb2x2ZVxuICAgKiAgIHdoZW4gdGhlIHN0cmVhbSBpcyBleGhhdXN0ZWQuXG4gICAqL1xuICBhc3luYyB0b0FycmF5Rm9yVGVzdCgpOiBQcm9taXNlPFRbXT4ge1xuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMucHJlZmV0Y2goMTAwKTtcbiAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdO1xuICAgIGxldCB4ID0gYXdhaXQgc3RyZWFtLm5leHQoKTtcbiAgICB3aGlsZSAoIXguZG9uZSkge1xuICAgICAgcmVzdWx0LnB1c2goeC52YWx1ZSk7XG4gICAgICB4ID0gYXdhaXQgc3RyZWFtLm5leHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGl0ZW1zIGZyb20gdGhlIHN0cmVhbSB1bnRpbCBpdCBpcyBleGhhdXN0ZWQuXG4gICAqXG4gICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCB3aGVuIHRoZSBzdHJlYW0gaGFzIHNpZGUgZWZmZWN0cyBidXQgbm8gb3V0cHV0LiAgSW5cbiAgICogdGhhdCBjYXNlLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gZ3VhcmFudGVlcyB0aGF0IHRoZSBzdHJlYW0gd2lsbCBiZVxuICAgKiBmdWxseSBwcm9jZXNzZWQuXG4gICAqL1xuICBhc3luYyByZXNvbHZlRnVsbHkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHggPSBhd2FpdCB0aGlzLm5leHQoKTtcbiAgICB3aGlsZSAoIXguZG9uZSkge1xuICAgICAgeCA9IGF3YWl0IHRoaXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGl0ZW1zIGZyb20gdGhlIHN0cmVhbSB1bnRpbCBpdCBpcyBleGhhdXN0ZWQsIG9yIGEgcHJlZGljYXRlIGZhaWxzLlxuICAgKlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgd2hlbiB0aGUgc3RyZWFtIGhhcyBzaWRlIGVmZmVjdHMgYnV0IG5vIG91dHB1dC4gIEluXG4gICAqIHRoYXQgY2FzZSwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGd1YXJhbnRlZXMgdGhhdCB0aGUgc3RyZWFtIHdpbGwgYmVcbiAgICogZnVsbHkgcHJvY2Vzc2VkLlxuICAgKi9cbiAgYXN5bmMgcmVzb2x2ZVdoaWxlKHByZWRpY2F0ZTogKHI6IFQpID0+IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgeCA9IGF3YWl0IHRoaXMubmV4dCgpO1xuICAgIGxldCBzaG91bGRDb250aW51ZSA9IHByZWRpY2F0ZSh4LnZhbHVlKTtcbiAgICB3aGlsZSAoKCF4LmRvbmUpICYmIHNob3VsZENvbnRpbnVlKSB7XG4gICAgICB4ID0gYXdhaXQgdGhpcy5uZXh0KCk7XG4gICAgICBzaG91bGRDb250aW51ZSA9IHByZWRpY2F0ZSh4LnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBlcnJvcnMgdGhyb3duIG9uIHRoaXMgc3RyZWFtIHVzaW5nIGEgcHJvdmlkZWQgaGFuZGxlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGhhbmRsZXIgQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgYW55IGBFcnJvcmAgdGhyb3duIGR1cmluZyBhIGBuZXh0KClgXG4gICAqICAgY2FsbCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZSBzdHJlYW0gc2hvdWxkIGNvbnRpbnVlIChkcm9wcGluZyB0aGUgZmFpbGVkXG4gICAqICAgY2FsbCkgb3IgZmFsc2UgaWYgdGhlIHN0cmVhbSBzaG91bGQgcXVpZXRseSB0ZXJtaW5hdGUuICBJZiB0aGUgaGFuZGxlclxuICAgKiAgIGl0c2VsZiB0aHJvd3MgKG9yIHJldGhyb3dzKSBhbiBgRXJyb3JgLCB0aGF0IHdpbGwgYmUgcHJvcGFnYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgQSBgTGF6eUl0ZXJhdG9yYCBvZiBlbGVtZW50cyBwYXNzZWQgdGhyb3VnaCBmcm9tIHVwc3RyZWFtLFxuICAgKiAgIHBvc3NpYmx5IGZpbHRlcmluZyBvciB0ZXJtaW5hdGluZyBvbiB1cHN0cmVhbSBgbmV4dCgpYCBjYWxscyB0aGF0XG4gICAqICAgdGhyb3cgYW4gYEVycm9yYC5cbiAgICovXG4gIGhhbmRsZUVycm9ycyhoYW5kbGVyOiAoZXJyb3I6IEVycm9yKSA9PiBib29sZWFuKTogTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgICByZXR1cm4gbmV3IEVycm9ySGFuZGxpbmdMYXp5SXRlcmF0b3IodGhpcywgaGFuZGxlcik7XG4gIH1cblxuICAvLyBUT0RPKHNvZXJnZWwpOiBJbXBsZW1lbnQgcmVkdWNlKCkgZXRjLlxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHRoaXMgc3RyZWFtIGFjY29yZGluZyB0byBgcHJlZGljYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHByZWRpY2F0ZSBBIGZ1bmN0aW9uIG1hcHBpbmcgYSBzdHJlYW0gZWxlbWVudCB0byBhIGJvb2xlYW4gb3IgYVxuICAgKiBgUHJvbWlzZWAgZm9yIG9uZS5cbiAgICpcbiAgICogQHJldHVybnMgQSBgTGF6eUl0ZXJhdG9yYCBvZiBlbGVtZW50cyBmb3Igd2hpY2ggdGhlIHByZWRpY2F0ZSB3YXMgdHJ1ZS5cbiAgICovXG4gIGZpbHRlcihwcmVkaWNhdGU6ICh2YWx1ZTogVCkgPT4gYm9vbGVhbik6IExhenlJdGVyYXRvcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXJJdGVyYXRvcih0aGlzLCBwcmVkaWNhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgdGhpcyBzdHJlYW0gdGhyb3VnaCBhIDEtdG8tMSB0cmFuc2Zvcm0uXG4gICAqXG4gICAqIEBwYXJhbSB0cmFuc2Zvcm0gQSBmdW5jdGlvbiBtYXBwaW5nIGEgc3RyZWFtIGVsZW1lbnQgdG8gYSB0cmFuc2Zvcm1lZFxuICAgKiAgIGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgYExhenlJdGVyYXRvcmAgb2YgdHJhbnNmb3JtZWQgZWxlbWVudHMuXG4gICAqL1xuICBtYXA8Tz4odHJhbnNmb3JtOiAodmFsdWU6IFQpID0+IE8pOiBMYXp5SXRlcmF0b3I8Tz4ge1xuICAgIHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcywgdHJhbnNmb3JtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIHRoaXMgc3RyZWFtIHRocm91Z2ggYW4gYXN5bmMgMS10by0xIHRyYW5zZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHRyYW5zZm9ybSBBIGZ1bmN0aW9uIG1hcHBpbmcgYSBzdHJlYW0gZWxlbWVudCB0byBhIGBQcm9taXNlYCBmb3IgYVxuICAgKiAgIHRyYW5zZm9ybWVkIHN0cmVhbSBlbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGBMYXp5SXRlcmF0b3JgIG9mIHRyYW5zZm9ybWVkIGVsZW1lbnRzLlxuICAgKi9cbiAgbWFwQXN5bmM8Tz4odHJhbnNmb3JtOiAodmFsdWU6IFQpID0+IFByb21pc2U8Tz4pOiBMYXp5SXRlcmF0b3I8Tz4ge1xuICAgIHJldHVybiBuZXcgQXN5bmNNYXBJdGVyYXRvcih0aGlzLCB0cmFuc2Zvcm0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgdGhpcyBzdHJlYW0gdGhyb3VnaCBhIDEtdG8tMSB0cmFuc2Zvcm0sIGZvcmNpbmcgc2VyaWFsIGV4ZWN1dGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHRyYW5zZm9ybSBBIGZ1bmN0aW9uIG1hcHBpbmcgYSBzdHJlYW0gZWxlbWVudCB0byBhIHRyYW5zZm9ybWVkXG4gICAqICAgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybnMgQSBgTGF6eUl0ZXJhdG9yYCBvZiB0cmFuc2Zvcm1lZCBlbGVtZW50cy5cbiAgICovXG4gIHNlcmlhbE1hcEFzeW5jPE8+KHRyYW5zZm9ybTogKHZhbHVlOiBUKSA9PiBQcm9taXNlPE8+KTogTGF6eUl0ZXJhdG9yPE8+IHtcbiAgICByZXR1cm4gbmV3IEFzeW5jTWFwSXRlcmF0b3IodGhpcywgdHJhbnNmb3JtKS5zZXJpYWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIHRoaXMgc3RyZWFtIHRocm91Z2ggYSAxLXRvLW1hbnkgdHJhbnNmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0gdHJhbnNmb3JtIEEgZnVuY3Rpb24gbWFwcGluZyBhIHN0cmVhbSBlbGVtZW50IHRvIGFuIGFycmF5IG9mXG4gICAqICAgdHJhbnNmb3JtZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgYERhdGFTdHJlYW1gIG9mIHRyYW5zZm9ybWVkIGVsZW1lbnRzLlxuICAgKi9cbiAgZmxhdG1hcDxPPih0cmFuc2Zvcm06ICh2YWx1ZTogVCkgPT4gT1tdKTogTGF6eUl0ZXJhdG9yPE8+IHtcbiAgICByZXR1cm4gbmV3IEZsYXRtYXBJdGVyYXRvcih0aGlzLCB0cmFuc2Zvcm0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gZXZlcnkgZWxlbWVudCBvZiB0aGUgc3RyZWFtLlxuICAgKlxuICAgKiBAcGFyYW0gZiBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggc3RyZWFtIGVsZW1lbnQuXG4gICAqL1xuICBhc3luYyBmb3JFYWNoQXN5bmMoZjogKHZhbHVlOiBUKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGYpLnJlc29sdmVGdWxseSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gZXZlcnkgZWxlbWVudCBvZiB0aGUgc3RyZWFtLCBmb3JjaW5nIHNlcmlhbCBleGVjdXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBmIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBzdHJlYW0gZWxlbWVudC4gIFNob3VsZCByZXR1cm4gJ3RydWUnXG4gICAqICAgdG8gaW5kaWNhdGUgdGhhdCB0aGUgc3RyZWFtIHNob3VsZCBjb250aW51ZSwgb3IgJ2ZhbHNlJyB0byBjYXVzZSBpdCB0b1xuICAgKiAgIHRlcm1pbmF0ZS5cbiAgICovXG4gIGFzeW5jIHNlcmlhbEZvckVhY2goZjogKHZhbHVlOiBUKSA9PiBQcm9taXNlPGJvb2xlYW4+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsTWFwQXN5bmMoZikucmVzb2x2ZVdoaWxlKHggPT4gKHggPT09IHRydWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHcm91cHMgZWxlbWVudHMgaW50byBiYXRjaGVzLCByZXByZXNlbnRlZCBhcyBhcnJheXMgb2YgZWxlbWVudHMuXG4gICAqXG4gICAqIFdlIGNhbiB0aGluayBvZiB0aGUgZWxlbWVudHMgb2YgdGhpcyBpdGVyYXRvciBhcyAncm93cycgKGV2ZW4gaWYgdGhleSBhcmVcbiAgICogbmVzdGVkIHN0cnVjdHVyZXMpLiAgQnkgdGhlIHNhbWUgdG9rZW4sIGNvbnNlY3V0aXZlIHZhbHVlcyBmb3IgYSBnaXZlblxuICAgKiBrZXkgd2l0aGluIHRoZSBlbGVtZW50cyBmb3JtIGEgJ2NvbHVtbicuICBUaGlzIG1hdGNoZXMgdGhlIHVzdWFsIHNlbnNlIG9mXG4gICAqICdyb3cnIGFuZCAnY29sdW1uJyB3aGVuIHByb2Nlc3NpbmcgdGFidWxhciBkYXRhIChlLmcuLCBwYXJzaW5nIGEgQ1NWKS5cbiAgICpcbiAgICogVGh1cywgXCJSb3ctbWFqb3JcIiBtZWFucyB0aGF0IHRoZSByZXN1bHRpbmcgYmF0Y2ggaXMgc2ltcGx5IGEgY29sbGVjdGlvbiBvZlxuICAgKiByb3dzOiBgW3JvdzEsIHJvdzIsIHJvdzMsIC4uLl1gLiAgVGhpcyBpcyBjb250cmFzdCB0byB0aGUgY29sdW1uLW1ham9yXG4gICAqIGZvcm0sIHdoaWNoIGlzIG5lZWRlZCBmb3IgdmVjdG9yaXplZCBjb21wdXRhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGJhdGNoU2l6ZSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGRlc2lyZWQgcGVyIGJhdGNoLlxuICAgKiBAcGFyYW0gc21hbGxMYXN0QmF0Y2ggV2hldGhlciB0byBlbWl0IHRoZSBmaW5hbCBiYXRjaCB3aGVuIGl0IGhhcyBmZXdlclxuICAgKiAgIHRoYW4gYmF0Y2hTaXplIGVsZW1lbnRzLiBEZWZhdWx0IHRydWUuXG4gICAqIEByZXR1cm5zIEEgYExhenlJdGVyYXRvcmAgb2YgYmF0Y2hlcyBvZiBlbGVtZW50cywgcmVwcmVzZW50ZWQgYXMgYXJyYXlzXG4gICAqICAgb2YgdGhlIG9yaWdpbmFsIGVsZW1lbnQgdHlwZS5cbiAgICovXG4gIHJvd01ham9yQmF0Y2goYmF0Y2hTaXplOiBudW1iZXIsIHNtYWxsTGFzdEJhdGNoID0gdHJ1ZSk6IExhenlJdGVyYXRvcjxUW10+IHtcbiAgICByZXR1cm4gbmV3IFJvd01ham9yQmF0Y2hJdGVyYXRvcih0aGlzLCBiYXRjaFNpemUsIHNtYWxsTGFzdEJhdGNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHcm91cHMgZWxlbWVudHMgaW50byBiYXRjaGVzLCByZXByZXNlbnRlZCBpbiBjb2x1bW4tbWFqb3IgZm9ybS5cbiAgICpcbiAgICogV2UgY2FuIHRoaW5rIG9mIHRoZSBlbGVtZW50cyBvZiB0aGlzIGl0ZXJhdG9yIGFzICdyb3dzJyAoZXZlbiBpZiB0aGV5IGFyZVxuICAgKiBuZXN0ZWQgc3RydWN0dXJlcykuICBCeSB0aGUgc2FtZSB0b2tlbiwgY29uc2VjdXRpdmUgdmFsdWVzIGZvciBhIGdpdmVuXG4gICAqIGtleSB3aXRoaW4gdGhlIGVsZW1lbnRzIGZvcm0gYSAnY29sdW1uJy4gIFRoaXMgbWF0Y2hlcyB0aGUgdXN1YWwgc2Vuc2Ugb2ZcbiAgICogJ3JvdycgYW5kICdjb2x1bW4nIHdoZW4gcHJvY2Vzc2luZyB0YWJ1bGFyIGRhdGEgKGUuZy4sIHBhcnNpbmcgYSBDU1YpLlxuICAgKlxuICAgKiBUaHVzLCBcImNvbHVtbi1tYWpvclwiIG1lYW5zIHRoYXQgdGhlIHJlc3VsdGluZyBiYXRjaCBpcyBhIChwb3RlbnRpYWxseVxuICAgKiBuZXN0ZWQpIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgdGhlIGNvbHVtbnMuICBFYWNoIGNvbHVtbiBlbnRyeSwgdGhlbixcbiAgICogY29udGFpbnMgYSBjb2xsZWN0aW9uIG9mIHRoZSB2YWx1ZXMgZm91bmQgaW4gdGhhdCBjb2x1bW4gZm9yIGEgcmFuZ2Ugb2ZcbiAgICogaW5wdXQgZWxlbWVudHMuICBUaGlzIHJlcHJlc2VudGF0aW9uIGFsbG93cyBmb3IgdmVjdG9yaXplZCBjb21wdXRhdGlvbiwgaW5cbiAgICogY29udHJhc3QgdG8gdGhlIHJvdy1tYWpvciBmb3JtLlxuICAgKlxuICAgKiBUaGUgaW5wdXRzIHNob3VsZCBhbGwgaGF2ZSB0aGUgc2FtZSBuZXN0ZWQgc3RydWN0dXJlIChpLmUuLCBvZiBhcnJheXMgYW5kXG4gICAqIGRpY3RzKS4gIFRoZSByZXN1bHQgaXMgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgbmVzdGVkIHN0cnVjdHVyZSxcbiAgICogd2hlcmUgdGhlIGxlYXZlcyBhcmUgYXJyYXlzIGNvbGxlY3RpbmcgdGhlIHZhbHVlcyBvZiB0aGUgaW5wdXRzIGF0IHRoYXRcbiAgICogbG9jYXRpb24gKG9yLCBvcHRpb25hbGx5LCB0aGUgcmVzdWx0IG9mIGEgY3VzdG9tIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhvc2VcbiAgICogYXJyYXlzKS5cbiAgICpcbiAgICogQHBhcmFtIGJhdGNoU2l6ZSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGRlc2lyZWQgcGVyIGJhdGNoLlxuICAgKiBAcGFyYW0gc21hbGxMYXN0QmF0Y2ggV2hldGhlciB0byBlbWl0IHRoZSBmaW5hbCBiYXRjaCB3aGVuIGl0IGhhcyBmZXdlclxuICAgKiAgIHRoYW4gYmF0Y2hTaXplIGVsZW1lbnRzLiBEZWZhdWx0IHRydWUuXG4gICAqIEBwYXJhbSB6aXBGbjogKG9wdGlvbmFsKSBBIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhbiBhcnJheSBvZiBlbGVtZW50cyBhdCBhXG4gICAqICAgc2luZ2xlIG5vZGUgb2YgdGhlIG9iamVjdCB0cmVlLCBhbmQgcmV0dXJucyBhIGBEZWVwTWFwUmVzdWx0YC4gIFRoZVxuICAgKiAgIGBEZWVwTWFwUmVzdWx0YCBlaXRoZXIgcHJvdmlkZXMgYSByZXN1bHQgdmFsdWUgZm9yIHRoYXQgbm9kZSAoaS5lLixcbiAgICogICByZXByZXNlbnRpbmcgdGhlIHN1YnRyZWUpLCBvciBpbmRpY2F0ZXMgdGhhdCB0aGUgbm9kZSBzaG91bGQgYmUgcHJvY2Vzc2VkXG4gICAqICAgcmVjdXJzaXZlbHkuICBUaGUgZGVmYXVsdCB6aXBGbiByZWN1cnNlcyBhcyBmYXIgYXMgcG9zc2libGUgYW5kIHBsYWNlc1xuICAgKiAgIGFycmF5cyBhdCB0aGUgbGVhdmVzLlxuICAgKiBAcmV0dXJucyBBIGBMYXp5SXRlcmF0b3JgIG9mIGJhdGNoZXMgb2YgZWxlbWVudHMsIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdFxuICAgKiAgIHdpdGggY29sbGVjdGlvbnMgYXQgdGhlIGxlYXZlcy5cbiAgICovXG4gIGNvbHVtbk1ham9yQmF0Y2goXG4gICAgICBiYXRjaFNpemU6IG51bWJlciwgc21hbGxMYXN0QmF0Y2ggPSB0cnVlLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgemlwRm46ICh4czogYW55W10pID0+IERlZXBNYXBSZXN1bHQgPSB6aXBUb0xpc3QpOlxuICAgICAgTGF6eUl0ZXJhdG9yPHRmLlRlbnNvckNvbnRhaW5lcj4ge1xuICAgIC8vIEZpcnN0IGNvbGxlY3QgdGhlIGRlc2lyZWQgbnVtYmVyIG9mIGlucHV0IGVsZW1lbnRzIGFzIGEgcm93LW1ham9yIGJhdGNoLlxuICAgIGNvbnN0IHJvd0JhdGNoZXMgPSB0aGlzLnJvd01ham9yQmF0Y2goYmF0Y2hTaXplLCBzbWFsbExhc3RCYXRjaCk7XG4gICAgLy8gTm93ICdyb3RhdGUnIG9yICdwaXZvdCcgdGhlIGRhdGEsIGNvbGxlY3RpbmcgYWxsIHZhbHVlcyBmcm9tIGVhY2ggY29sdW1uXG4gICAgLy8gaW4gdGhlIGJhdGNoIChpLmUuLCBmb3IgZWFjaCBrZXkgd2l0aGluIHRoZSBlbGVtZW50cykgaW50byBhbiBhcnJheS5cbiAgICByZXR1cm4gcm93QmF0Y2hlcy5tYXAoeCA9PiBkZWVwWmlwKHgsIHppcEZuKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGUgdGhpcyBgTGF6eUl0ZXJhdG9yYCB3aXRoIGFub3RoZXIuXG4gICAqXG4gICAqIEBwYXJhbSBpdGVyYXRvciBBIGBMYXp5SXRlcmF0b3JgIHRvIGJlIGNvbmNhdGVuYXRlZCBvbnRvIHRoaXMgb25lLlxuICAgKiBAcGFyYW0gYmFzZUVycm9ySGFuZGxlciBBbiBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IGNhbiBpbnRlcmNlcHQgYEVycm9yYHNcbiAgICogICByYWlzZWQgZHVyaW5nIGEgYG5leHQoKWAgY2FsbCBvbiB0aGUgYmFzZSBzdHJlYW0uICBUaGlzIGZ1bmN0aW9uIGNhblxuICAgKiAgIGRlY2lkZSB3aGV0aGVyIHRoZSBlcnJvciBzaG91bGQgYmUgcHJvcGFnYXRlZCwgd2hldGhlciB0aGUgZXJyb3Igc2hvdWxkXG4gICAqICAgYmUgaWdub3JlZCwgb3Igd2hldGhlciB0aGUgYmFzZSBzdHJlYW0gc2hvdWxkIGJlIHRlcm1pbmF0ZWQuXG4gICAqIEByZXR1cm5zIEEgYExhenlJdGVyYXRvcmAuXG4gICAqL1xuICBjb25jYXRlbmF0ZShcbiAgICAgIGl0ZXJhdG9yOiBMYXp5SXRlcmF0b3I8VD4sXG4gICAgICBiYXNlRXJyb3JIYW5kbGVyPzogKGU6IEVycm9yKSA9PiBib29sZWFuKTogTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgICByZXR1cm4gbmV3IENoYWluZWRJdGVyYXRvcihcbiAgICAgICAgaXRlcmF0b3JGcm9tSXRlbXMoW3RoaXMsIGl0ZXJhdG9yXSksIGJhc2VFcnJvckhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpbWl0cyB0aGlzIHN0cmVhbSB0byByZXR1cm4gYXQgbW9zdCBgY291bnRgIGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0gY291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIHByb3ZpZGUgZnJvbSB0aGUgc3RyZWFtLiBJZlxuICAgKiBhIG5lZ2F0aXZlIG9yIHVuZGVmaW5lZCB2YWx1ZSBpcyBnaXZlbiwgdGhlIGVudGlyZSBzdHJlYW0gaXMgcmV0dXJuZWRcbiAgICogICB1bmFsdGVyZWQuXG4gICAqL1xuICB0YWtlKGNvdW50OiBudW1iZXIpOiBMYXp5SXRlcmF0b3I8VD4ge1xuICAgIGlmIChjb3VudCA8IDAgfHwgY291bnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGFrZUl0ZXJhdG9yKHRoaXMsIGNvdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTa2lwcyB0aGUgZmlyc3QgYGNvdW50YCBpdGVtcyBpbiB0aGlzIHN0cmVhbS5cbiAgICpcbiAgICogQHBhcmFtIGNvdW50IFRoZSBudW1iZXIgb2YgaXRlbXMgdG8gc2tpcC4gIElmIGEgbmVnYXRpdmUgb3IgdW5kZWZpbmVkXG4gICAqIHZhbHVlIGlzIGdpdmVuLCB0aGUgZW50aXJlIHN0cmVhbSBpcyByZXR1cm5lZCB1bmFsdGVyZWQuXG4gICAqL1xuICBza2lwKGNvdW50OiBudW1iZXIpOiBMYXp5SXRlcmF0b3I8VD4ge1xuICAgIGlmIChjb3VudCA8IDAgfHwgY291bnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU2tpcEl0ZXJhdG9yKHRoaXMsIGNvdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCB0aGUgZmlyc3QgYGJ1ZmZlclNpemVgIGl0ZW1zIGluIHRoaXMgc3RyZWFtLlxuICAgKlxuICAgKiBOb3RlIHRoaXMgcHJlZmV0Y2hlcyBQcm9taXNlcywgYnV0IG1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgd2hlbiB0aG9zZVxuICAgKiBQcm9taXNlcyByZXNvbHZlLlxuICAgKlxuICAgKiBAcGFyYW0gYnVmZmVyU2l6ZTogQW4gaW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gYmVcbiAgICogICBwcmVmZXRjaGVkLlxuICAgKi9cbiAgcHJlZmV0Y2goYnVmZmVyU2l6ZTogbnVtYmVyKTogTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByZWZldGNoSXRlcmF0b3IodGhpcywgYnVmZmVyU2l6ZSk7XG4gIH1cblxuICAvLyBUT0RPKHNvZXJnZWwpOiBkZWVwIHNoYXJkZWQgc2h1ZmZsZSwgd2hlcmUgc3VwcG9ydGVkXG5cbiAgLyoqXG4gICAqIFJhbmRvbWx5IHNodWZmbGVzIHRoZSBlbGVtZW50cyBvZiB0aGlzIHN0cmVhbS5cbiAgICpcbiAgICogQHBhcmFtIGJ1ZmZlclNpemU6IEFuIGludGVnZXIgc3BlY2lmeWluZyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb21cbiAgICogdGhpcyBzdHJlYW0gZnJvbSB3aGljaCB0aGUgbmV3IHN0cmVhbSB3aWxsIHNhbXBsZS5cbiAgICogQHBhcmFtIHNlZWQ6IChPcHRpb25hbC4pIEFuIGludGVnZXIgc3BlY2lmeWluZyB0aGUgcmFuZG9tIHNlZWQgdGhhdFxuICAgKiB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHRoZSBkaXN0cmlidXRpb24uXG4gICAqL1xuICBzaHVmZmxlKHdpbmRvd1NpemU6IG51bWJlciwgc2VlZD86IHN0cmluZyk6IExhenlJdGVyYXRvcjxUPiB7XG4gICAgcmV0dXJuIG5ldyBTaHVmZmxlSXRlcmF0b3IodGhpcywgd2luZG93U2l6ZSwgc2VlZCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgYW4gaXRlcmF0b3IgdG8gZXhlY3V0ZSBzZXJpYWxseTogZWFjaCBuZXh0KCkgY2FsbCB3aWxsIGF3YWl0IHRoZVxuICAgKiBwcmlvciBvbmUsIHNvIHRoYXQgdGhleSBjYW5ub3QgZXhlY3V0ZSBjb25jdXJyZW50bHkuXG4gICAqL1xuICBzZXJpYWwoKTogTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgICByZXR1cm4gbmV3IFNlcmlhbEl0ZXJhdG9yKHRoaXMpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRoZSBmb2xsb3dpbmcgcHJpdmF0ZSBjbGFzc2VzIHNlcnZlIHRvIGltcGxlbWVudCB0aGUgY2hhaW5hYmxlIG1ldGhvZHNcbi8vIG9uIExhenlJdGVyYXRvci4gIFVuZm9ydHVuYXRlbHkgdGhleSBjYW4ndCBiZSBwbGFjZWQgaW4gc2VwYXJhdGUgZmlsZXMsXG4vLyBkdWUgdG8gcmVzdWx0aW5nIHRyb3VibGUgd2l0aCBjaXJjdWxhciBpbXBvcnRzLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBJdGVyYXRvcnMgdGhhdCBqdXN0IGV4dGVuZCBMYXp5SXRlcmF0b3IgZGlyZWN0bHlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY2xhc3MgQXJyYXlJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIHByaXZhdGUgdHJhdiA9IDA7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtczogVFtdKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGBBcnJheSBvZiAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtc2A7XG4gIH1cblxuICBhc3luYyBuZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+IHtcbiAgICBpZiAodGhpcy50cmF2ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCBkb25lOiB0cnVlfTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy50cmF2XTtcbiAgICB0aGlzLnRyYXYrKztcbiAgICByZXR1cm4ge3ZhbHVlOiBkZWVwQ2xvbmUoaXRlbSksIGRvbmU6IGZhbHNlfTtcbiAgfVxufVxuXG5jbGFzcyBGdW5jdGlvbkNhbGxJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkIG5leHRGbjogKCkgPT4gSXRlcmF0b3JSZXN1bHQ8VD58IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGBGdW5jdGlvbiBjYWxsYDtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXh0Rm4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBNb2RpZnkgdGhlIGVycm9yIG1lc3NhZ2UgYnV0IGxlYXZlIHRoZSBzdGFjayB0cmFjZSBpbnRhY3RcbiAgICAgIGUubWVzc2FnZSA9XG4gICAgICAgICAgYEVycm9yIHRocm93biB3aGlsZSBpdGVyYXRpbmcgdGhyb3VnaCBhIGRhdGFzZXQ6ICR7ZS5tZXNzYWdlfWA7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBTZXJpYWxJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIC8vIFN0cmljdCBQcm9taXNlIGV4ZWN1dGlvbiBvcmRlcjpcbiAgLy8gYSBuZXh0KCkgY2FsbCBtYXkgbm90IGV2ZW4gYmVnaW4gdW50aWwgdGhlIHByZXZpb3VzIG9uZSBjb21wbGV0ZXMuXG4gIHByaXZhdGUgbGFzdFJlYWQ6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1cHN0cmVhbTogTGF6eUl0ZXJhdG9yPFQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxhc3RSZWFkID0gUHJvbWlzZS5yZXNvbHZlKHt2YWx1ZTogbnVsbCwgZG9uZTogZmFsc2V9KTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBTZXJpYWxgO1xuICB9XG5cbiAgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgLy8gVGhpcyBzZXRzIHRoaXMubGFzdFJlYWQgdG8gYSBuZXcgUHJvbWlzZSByaWdodCBhd2F5LCBhcyBvcHBvc2VkIHRvXG4gICAgLy8gc2F5aW5nIGBhd2FpdCB0aGlzLmxhc3RSZWFkOyB0aGlzLmxhc3RSZWFkID0gdGhpcy5zZXJpYWxOZXh0KCk7YCB3aGljaFxuICAgIC8vIHdvdWxkIG5vdCB3b3JrIGJlY2F1c2UgdGhpcy5uZXh0UmVhZCB3b3VsZCBiZSB1cGRhdGVkIG9ubHkgYWZ0ZXIgdGhlXG4gICAgLy8gcHJvbWlzZSByZXNvbHZlcy5cbiAgICB0aGlzLmxhc3RSZWFkID0gdGhpcy5sYXN0UmVhZC50aGVuKCgpID0+IHRoaXMuc2VyaWFsTmV4dCgpKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0UmVhZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VyaWFsTmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMudXBzdHJlYW0ubmV4dCgpO1xuICB9XG59XG5cbmNsYXNzIFNraXBJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIC8vIFN0cmljdCBQcm9taXNlIGV4ZWN1dGlvbiBvcmRlcjpcbiAgLy8gYSBuZXh0KCkgY2FsbCBtYXkgbm90IGV2ZW4gYmVnaW4gdW50aWwgdGhlIHByZXZpb3VzIG9uZSBjb21wbGV0ZXMuXG4gIHByaXZhdGUgbGFzdFJlYWQ6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+O1xuXG4gIC8vIExvY2FsIHN0YXRlIHRoYXQgc2hvdWxkIG5vdCBiZSBjbG9iYmVyZWQgYnkgb3V0LW9mLW9yZGVyIGV4ZWN1dGlvbi5cbiAgY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1cHN0cmVhbTogTGF6eUl0ZXJhdG9yPFQ+LCBwcm90ZWN0ZWQgbWF4Q291bnQ6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5sYXN0UmVhZCA9IFByb21pc2UucmVzb2x2ZSh7dmFsdWU6IG51bGwsIGRvbmU6IGZhbHNlfSk7XG4gIH1cblxuICBzdW1tYXJ5KCkge1xuICAgIHJldHVybiBgJHt0aGlzLnVwc3RyZWFtLnN1bW1hcnkoKX0gLT4gU2tpcGA7XG4gIH1cblxuICBhc3luYyBuZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+IHtcbiAgICAvLyBUaGlzIHNldHMgdGhpcy5sYXN0UmVhZCB0byBhIG5ldyBQcm9taXNlIHJpZ2h0IGF3YXksIGFzIG9wcG9zZWQgdG9cbiAgICAvLyBzYXlpbmcgYGF3YWl0IHRoaXMubGFzdFJlYWQ7IHRoaXMubGFzdFJlYWQgPSB0aGlzLnNlcmlhbE5leHQoKTtgIHdoaWNoXG4gICAgLy8gd291bGQgbm90IHdvcmsgYmVjYXVzZSB0aGlzLm5leHRSZWFkIHdvdWxkIGJlIHVwZGF0ZWQgb25seSBhZnRlciB0aGVcbiAgICAvLyBwcm9taXNlIHJlc29sdmVzLlxuICAgIHRoaXMubGFzdFJlYWQgPSB0aGlzLmxhc3RSZWFkLnRoZW4oKCkgPT4gdGhpcy5zZXJpYWxOZXh0KCkpO1xuICAgIHJldHVybiB0aGlzLmxhc3RSZWFkO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZXJpYWxOZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+IHtcbiAgICAvLyBUT0RPKHNvZXJnZWwpOiBjb25zaWRlciB0cmFkZW9mZnMgb2YgcmVhZGluZyBpbiBwYXJhbGxlbCwgZWcuXG4gICAgLy8gY29sbGVjdGluZyBuZXh0KCkgcHJvbWlzZXMgaW4gYW4gQXJyYXkgYW5kIHRoZW4gd2FpdGluZyBmb3JcbiAgICAvLyBQcm9taXNlLmFsbCgpIG9mIHRob3NlLiBCZW5lZml0OiBwc2V1ZG8tcGFyYWxsZWwgZXhlY3V0aW9uLiAgRHJhd2JhY2s6XG4gICAgLy8gbWF5YmUgZGVsYXllZCBHQy5cbiAgICB3aGlsZSAodGhpcy5jb3VudCsrIDwgdGhpcy5tYXhDb3VudCkge1xuICAgICAgY29uc3Qgc2tpcHBlZCA9IGF3YWl0IHRoaXMudXBzdHJlYW0ubmV4dCgpO1xuICAgICAgLy8gc2hvcnQtY2lyY3VpdCBpZiB1cHN0cmVhbSBpcyBhbHJlYWR5IGVtcHR5XG4gICAgICBpZiAoc2tpcHBlZC5kb25lKSB7XG4gICAgICAgIHJldHVybiBza2lwcGVkO1xuICAgICAgfVxuICAgICAgdGYuZGlzcG9zZShza2lwcGVkLnZhbHVlIGFzIHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBzdHJlYW0ubmV4dCgpO1xuICB9XG59XG5cbmNsYXNzIFRha2VJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIGNvdW50ID0gMDtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHVwc3RyZWFtOiBMYXp5SXRlcmF0b3I8VD4sIHByb3RlY3RlZCBtYXhDb3VudDogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBUYWtlYDtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4ge1xuICAgIGlmICh0aGlzLmNvdW50KysgPj0gdGhpcy5tYXhDb3VudCkge1xuICAgICAgcmV0dXJuIHt2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZX07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwc3RyZWFtLm5leHQoKTtcbiAgfVxufVxuXG4vLyBOb3RlIHRoaXMgYmF0Y2gganVzdCBncm91cHMgaXRlbXMgaW50byByb3ctd2lzZSBlbGVtZW50IGFycmF5cy5cbi8vIFJvdGF0aW5nIHRoZXNlIHRvIGEgY29sdW1uLXdpc2UgcmVwcmVzZW50YXRpb24gaGFwcGVucyBvbmx5IGF0IHRoZSBkYXRhc2V0XG4vLyBsZXZlbC5cbmNsYXNzIFJvd01ham9yQmF0Y2hJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUW10+IHtcbiAgLy8gU3RyaWN0IFByb21pc2UgZXhlY3V0aW9uIG9yZGVyOlxuICAvLyBhIG5leHQoKSBjYWxsIG1heSBub3QgZXZlbiBiZWdpbiB1bnRpbCB0aGUgcHJldmlvdXMgb25lIGNvbXBsZXRlcy5cbiAgcHJpdmF0ZSBsYXN0UmVhZDogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUW10+PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByb3RlY3RlZCB1cHN0cmVhbTogTGF6eUl0ZXJhdG9yPFQ+LCBwcm90ZWN0ZWQgYmF0Y2hTaXplOiBudW1iZXIsXG4gICAgICBwcm90ZWN0ZWQgZW5hYmxlU21hbGxMYXN0QmF0Y2ggPSB0cnVlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxhc3RSZWFkID0gUHJvbWlzZS5yZXNvbHZlKHt2YWx1ZTogbnVsbCwgZG9uZTogZmFsc2V9KTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBSb3dNYWpvckJhdGNoYDtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUW10+PiB7XG4gICAgLy8gVGhpcyBzZXRzIHRoaXMubGFzdFJlYWQgdG8gYSBuZXcgUHJvbWlzZSByaWdodCBhd2F5LCBhcyBvcHBvc2VkIHRvXG4gICAgLy8gc2F5aW5nIGBhd2FpdCB0aGlzLmxhc3RSZWFkOyB0aGlzLmxhc3RSZWFkID0gdGhpcy5zZXJpYWxOZXh0KCk7YCB3aGljaFxuICAgIC8vIHdvdWxkIG5vdCB3b3JrIGJlY2F1c2UgdGhpcy5uZXh0UmVhZCB3b3VsZCBiZSB1cGRhdGVkIG9ubHkgYWZ0ZXIgdGhlXG4gICAgLy8gcHJvbWlzZSByZXNvbHZlcy5cbiAgICB0aGlzLmxhc3RSZWFkID0gdGhpcy5sYXN0UmVhZC50aGVuKCgpID0+IHRoaXMuc2VyaWFsTmV4dCgpKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0UmVhZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VyaWFsTmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFRbXT4+IHtcbiAgICBjb25zdCBiYXRjaDogVFtdID0gW107XG4gICAgd2hpbGUgKGJhdGNoLmxlbmd0aCA8IHRoaXMuYmF0Y2hTaXplKSB7XG4gICAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy51cHN0cmVhbS5uZXh0KCk7XG4gICAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVNtYWxsTGFzdEJhdGNoICYmIGJhdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBiYXRjaCwgZG9uZTogZmFsc2V9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIGRvbmU6IHRydWV9O1xuICAgICAgfVxuICAgICAgYmF0Y2gucHVzaChpdGVtLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHt2YWx1ZTogYmF0Y2gsIGRvbmU6IGZhbHNlfTtcbiAgfVxufVxuXG5jbGFzcyBGaWx0ZXJJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIC8vIFN0cmljdCBQcm9taXNlIGV4ZWN1dGlvbiBvcmRlcjpcbiAgLy8gYSBuZXh0KCkgY2FsbCBtYXkgbm90IGV2ZW4gYmVnaW4gdW50aWwgdGhlIHByZXZpb3VzIG9uZSBjb21wbGV0ZXMuXG4gIHByaXZhdGUgbGFzdFJlYWQ6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkIHVwc3RyZWFtOiBMYXp5SXRlcmF0b3I8VD4sXG4gICAgICBwcm90ZWN0ZWQgcHJlZGljYXRlOiAodmFsdWU6IFQpID0+IGJvb2xlYW4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubGFzdFJlYWQgPSBQcm9taXNlLnJlc29sdmUoe3ZhbHVlOiBudWxsLCBkb25lOiBmYWxzZX0pO1xuICB9XG5cbiAgc3VtbWFyeSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy51cHN0cmVhbS5zdW1tYXJ5KCl9IC0+IEZpbHRlcmA7XG4gIH1cblxuICBhc3luYyBuZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+IHtcbiAgICAvLyBUaGlzIHNldHMgdGhpcy5sYXN0UmVhZCB0byBhIG5ldyBQcm9taXNlIHJpZ2h0IGF3YXksIGFzIG9wcG9zZWQgdG9cbiAgICAvLyBzYXlpbmcgYGF3YWl0IHRoaXMubGFzdFJlYWQ7IHRoaXMubGFzdFJlYWQgPSB0aGlzLnNlcmlhbE5leHQoKTtgIHdoaWNoXG4gICAgLy8gd291bGQgbm90IHdvcmsgYmVjYXVzZSB0aGlzLm5leHRSZWFkIHdvdWxkIGJlIHVwZGF0ZWQgb25seSBhZnRlciB0aGVcbiAgICAvLyBwcm9taXNlIHJlc29sdmVzLlxuICAgIHRoaXMubGFzdFJlYWQgPSB0aGlzLmxhc3RSZWFkLnRoZW4oKCkgPT4gdGhpcy5zZXJpYWxOZXh0KCkpO1xuICAgIHJldHVybiB0aGlzLmxhc3RSZWFkO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZXJpYWxOZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VD4+IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMudXBzdHJlYW0ubmV4dCgpO1xuICAgICAgaWYgKGl0ZW0uZG9uZSB8fCB0aGlzLnByZWRpY2F0ZShpdGVtLnZhbHVlKSkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICAgIHRmLmRpc3Bvc2UoaXRlbS52YWx1ZSBhcyB7fSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIE1hcEl0ZXJhdG9yPEksIE8+IGV4dGVuZHMgTGF6eUl0ZXJhdG9yPE8+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgdXBzdHJlYW06IExhenlJdGVyYXRvcjxJPixcbiAgICAgIHByb3RlY3RlZCB0cmFuc2Zvcm06ICh2YWx1ZTogSSkgPT4gTykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzdW1tYXJ5KCkge1xuICAgIHJldHVybiBgJHt0aGlzLnVwc3RyZWFtLnN1bW1hcnkoKX0gLT4gTWFwYDtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxPPj4ge1xuICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLnVwc3RyZWFtLm5leHQoKTtcbiAgICBpZiAoaXRlbS5kb25lKSB7XG4gICAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCBkb25lOiB0cnVlfTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRUZW5zb3JzID0gdGYudGVuc29yX3V0aWwuZ2V0VGVuc29yc0luQ29udGFpbmVyKGl0ZW0udmFsdWUgYXMge30pO1xuICAgIC8vIENhcmVmdWw6IHRoZSB0cmFuc2Zvcm0gbWF5IG11dGF0ZSB0aGUgaXRlbSBpbiBwbGFjZS5cbiAgICAvLyBUaGF0J3Mgd2h5IHdlIGhhdmUgdG8gcmVtZW1iZXIgdGhlIGlucHV0IFRlbnNvcnMgYWJvdmUsIGFuZCB0aGVuXG4gICAgLy8gYmVsb3cgZGlzcG9zZSBvbmx5IHRob3NlIHRoYXQgd2VyZSBub3QgcGFzc2VkIHRocm91Z2ggdG8gdGhlIG91dHB1dC5cbiAgICAvLyBOb3RlIHRvbyB0aGF0IHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRpZHlpbmdcbiAgICAvLyBhbnkgaW50ZXJtZWRpYXRlIFRlbnNvcnMuICBIZXJlIHdlIGFyZSBjb25jZXJuZWQgb25seSBhYm91dCB0aGVcbiAgICAvLyBpbnB1dHMuXG4gICAgY29uc3QgbWFwcGVkID0gdGhpcy50cmFuc2Zvcm0oaXRlbS52YWx1ZSk7XG4gICAgY29uc3Qgb3V0cHV0VGVuc29ycyA9IHRmLnRlbnNvcl91dGlsLmdldFRlbnNvcnNJbkNvbnRhaW5lcihtYXBwZWQgYXMge30pO1xuXG4gICAgLy8gVE9ETyhzb2VyZ2VsKSBmYXN0ZXIgaW50ZXJzZWN0aW9uXG4gICAgLy8gVE9ETyhzb2VyZ2VsKSBtb3ZlIHRvIHRmLmRpc3Bvc2VFeGNlcHQoaW4sIG91dCk/XG4gICAgZm9yIChjb25zdCB0IG9mIGlucHV0VGVuc29ycykge1xuICAgICAgaWYgKCF0Zi50ZW5zb3JfdXRpbC5pc1RlbnNvckluTGlzdCh0LCBvdXRwdXRUZW5zb3JzKSkge1xuICAgICAgICB0LmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt2YWx1ZTogbWFwcGVkLCBkb25lOiBmYWxzZX07XG4gIH1cbn1cblxuY2xhc3MgRXJyb3JIYW5kbGluZ0xhenlJdGVyYXRvcjxUPiBleHRlbmRzIExhenlJdGVyYXRvcjxUPiB7XG4gIGNvdW50ID0gMDtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgdXBzdHJlYW06IExhenlJdGVyYXRvcjxUPixcbiAgICAgIHByb3RlY3RlZCBoYW5kbGVyOiAoZXJyb3I6IEVycm9yKSA9PiBib29sZWFuKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxhc3RSZWFkID0gUHJvbWlzZS5yZXNvbHZlKHt2YWx1ZTogbnVsbCwgZG9uZTogZmFsc2V9KTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBoYW5kbGVFcnJvcnNgO1xuICB9XG5cbiAgLy8gU3RyaWN0IFByb21pc2UgZXhlY3V0aW9uIG9yZGVyOlxuICAvLyBhIG5leHQoKSBjYWxsIG1heSBub3QgZXZlbiBiZWdpbiB1bnRpbCB0aGUgcHJldmlvdXMgb25lIGNvbXBsZXRlcy5cbiAgcHJpdmF0ZSBsYXN0UmVhZDogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj47XG5cbiAgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgLy8gVGhpcyBzZXRzIHRoaXMubGFzdFJlYWQgdG8gYSBuZXcgUHJvbWlzZSByaWdodCBhd2F5LCBhcyBvcHBvc2VkIHRvXG4gICAgLy8gc2F5aW5nIGBhd2FpdCB0aGlzLmxhc3RSZWFkOyB0aGlzLmxhc3RSZWFkID0gdGhpcy5zZXJpYWxOZXh0KCk7YCB3aGljaFxuICAgIC8vIHdvdWxkIG5vdCB3b3JrIGJlY2F1c2UgdGhpcy5uZXh0UmVhZCB3b3VsZCBiZSB1cGRhdGVkIG9ubHkgYWZ0ZXIgdGhlXG4gICAgLy8gcHJvbWlzZSByZXNvbHZlcy5cbiAgICB0aGlzLmxhc3RSZWFkID0gdGhpcy5sYXN0UmVhZC50aGVuKCgpID0+IHRoaXMuc2VyaWFsTmV4dCgpKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0UmVhZDtcbiAgfVxuXG4gIGFzeW5jIHNlcmlhbE5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4ge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy51cHN0cmVhbS5uZXh0KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVyKGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHt2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZX07XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhbmRsZXIgcmV0dXJucyB0cnVlLCBsb29wIGFuZCBmZXRjaCB0aGUgbmV4dCB1cHN0cmVhbSBpdGVtLlxuXG4gICAgICAgIC8vIElmIHRoZSB1cHN0cmVhbSBpdGVyYXRvciB0aHJvd3MgYW4gZW5kbGVzcyBzdHJlYW0gb2YgZXJyb3JzLCBhbmQgaWZcbiAgICAgICAgLy8gdGhlIGhhbmRsZXIgc2F5cyB0byBpZ25vcmUgdGhlbSwgdGhlbiB3ZSBsb29wIGZvcmV2ZXIgaGVyZS4gIFRoYXQgaXNcbiAgICAgICAgLy8gdGhlIGNvcnJlY3QgYmVoYXZpb3ItLSBpdCdzIHVwIHRvIHRoZSBoYW5kbGVyIHRvIGRlY2lkZSB3aGVuIHRvIHN0b3AuXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEFzeW5jTWFwSXRlcmF0b3I8SSwgTz4gZXh0ZW5kcyBMYXp5SXRlcmF0b3I8Tz4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByb3RlY3RlZCB1cHN0cmVhbTogTGF6eUl0ZXJhdG9yPEk+LFxuICAgICAgcHJvdGVjdGVkIHRyYW5zZm9ybTogKHZhbHVlOiBJKSA9PiBQcm9taXNlPE8+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBBc3luY01hcGA7XG4gIH1cblxuICBhc3luYyBuZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8Tz4+IHtcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy51cHN0cmVhbS5uZXh0KCk7XG4gICAgaWYgKGl0ZW0uZG9uZSkge1xuICAgICAgcmV0dXJuIHt2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZX07XG4gICAgfVxuICAgIGNvbnN0IGlucHV0VGVuc29ycyA9IHRmLnRlbnNvcl91dGlsLmdldFRlbnNvcnNJbkNvbnRhaW5lcihpdGVtLnZhbHVlIGFzIHt9KTtcbiAgICAvLyBDYXJlZnVsOiB0aGUgdHJhbnNmb3JtIG1heSBtdXRhdGUgdGhlIGl0ZW0gaW4gcGxhY2UuXG4gICAgLy8gVGhhdCdzIHdoeSB3ZSBoYXZlIHRvIHJlbWVtYmVyIHRoZSBpbnB1dCBUZW5zb3JzIGFib3ZlLCBhbmQgdGhlblxuICAgIC8vIGJlbG93IGRpc3Bvc2Ugb25seSB0aG9zZSB0aGF0IHdlcmUgbm90IHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBvdXRwdXQuXG4gICAgLy8gTm90ZSB0b28gdGhhdCB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciB0aWR5aW5nXG4gICAgLy8gYW55IGludGVybWVkaWF0ZSBUZW5zb3JzLiAgSGVyZSB3ZSBhcmUgY29uY2VybmVkIG9ubHkgYWJvdXQgdGhlXG4gICAgLy8gaW5wdXRzLlxuICAgIGNvbnN0IG1hcHBlZCA9IGF3YWl0IHRoaXMudHJhbnNmb3JtKGl0ZW0udmFsdWUpO1xuICAgIGNvbnN0IG91dHB1dFRlbnNvcnMgPSB0Zi50ZW5zb3JfdXRpbC5nZXRUZW5zb3JzSW5Db250YWluZXIobWFwcGVkIGFzIHt9KTtcblxuICAgIC8vIFRPRE8oc29lcmdlbCkgZmFzdGVyIGludGVyc2VjdGlvblxuICAgIC8vIFRPRE8oc29lcmdlbCkgbW92ZSB0byB0Zi5kaXNwb3NlRXhjZXB0KGluLCBvdXQpP1xuICAgIGZvciAoY29uc3QgdCBvZiBpbnB1dFRlbnNvcnMpIHtcbiAgICAgIGlmICghdGYudGVuc29yX3V0aWwuaXNUZW5zb3JJbkxpc3QodCwgb3V0cHV0VGVuc29ycykpIHtcbiAgICAgICAgdC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7dmFsdWU6IG1hcHBlZCwgZG9uZTogZmFsc2V9O1xuICB9XG59XG5cbi8vIEl0ZXJhdG9ycyB0aGF0IG1haW50YWluIGEgcXVldWUgb2YgcGVuZGluZyBpdGVtc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEEgYmFzZSBjbGFzcyBmb3IgdHJhbnNmb3JtaW5nIHN0cmVhbXMgdGhhdCBvcGVyYXRlIGJ5IG1haW50YWluaW5nIGFuXG4gKiBvdXRwdXQgcXVldWUgb2YgZWxlbWVudHMgdGhhdCBhcmUgcmVhZHkgdG8gcmV0dXJuIHZpYSBuZXh0KCkuICBUaGlzIGlzXG4gKiBjb21tb25seSByZXF1aXJlZCB3aGVuIHRoZSB0cmFuc2Zvcm1hdGlvbiBpcyAxLXRvLW1hbnk6ICBBIGNhbGwgdG8gbmV4dCgpXG4gKiBtYXkgdHJpZ2dlciBhIGNhbGwgdG8gdGhlIHVuZGVybHlpbmcgc3RyZWFtLCB3aGljaCB3aWxsIHByb2R1Y2UgbWFueVxuICogbWFwcGVkIGVsZW1lbnRzIG9mIHRoaXMgc3RyZWFtLS0gb2Ygd2hpY2ggd2UgbmVlZCB0byByZXR1cm4gb25seSBvbmUsIHNvXG4gKiB3ZSBoYXZlIHRvIHF1ZXVlIHRoZSByZXN0LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT25lVG9NYW55SXRlcmF0b3I8VD4gZXh0ZW5kcyBMYXp5SXRlcmF0b3I8VD4ge1xuICAvLyBTdHJpY3QgUHJvbWlzZSBleGVjdXRpb24gb3JkZXI6XG4gIC8vIGEgbmV4dCgpIGNhbGwgbWF5IG5vdCBldmVuIGJlZ2luIHVudGlsIHRoZSBwcmV2aW91cyBvbmUgY29tcGxldGVzLlxuICBwcml2YXRlIGxhc3RSZWFkOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PjtcblxuICAvLyBMb2NhbCBzdGF0ZSB0aGF0IHNob3VsZCBub3QgYmUgY2xvYmJlcmVkIGJ5IG91dC1vZi1vcmRlciBleGVjdXRpb24uXG4gIHByb3RlY3RlZCBvdXRwdXRRdWV1ZTogUmluZ0J1ZmZlcjxUPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3V0cHV0UXVldWUgPSBuZXcgR3Jvd2luZ1JpbmdCdWZmZXI8VD4oKTtcbiAgICB0aGlzLmxhc3RSZWFkID0gUHJvbWlzZS5yZXNvbHZlKHt2YWx1ZTogbnVsbCwgZG9uZTogZmFsc2V9KTtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4ge1xuICAgIC8vIFRoaXMgc2V0cyB0aGlzLmxhc3RSZWFkIHRvIGEgbmV3IFByb21pc2UgcmlnaHQgYXdheSwgYXMgb3Bwb3NlZCB0b1xuICAgIC8vIHNheWluZyBgYXdhaXQgdGhpcy5sYXN0UmVhZDsgdGhpcy5sYXN0UmVhZCA9IHRoaXMuc2VyaWFsTmV4dCgpO2Agd2hpY2hcbiAgICAvLyB3b3VsZCBub3Qgd29yayBiZWNhdXNlIHRoaXMubmV4dFJlYWQgd291bGQgYmUgdXBkYXRlZCBvbmx5IGFmdGVyIHRoZVxuICAgIC8vIHByb21pc2UgcmVzb2x2ZXMuXG4gICAgdGhpcy5sYXN0UmVhZCA9IHRoaXMubGFzdFJlYWQudGhlbigoKSA9PiB0aGlzLnNlcmlhbE5leHQoKSk7XG4gICAgcmV0dXJuIHRoaXMubGFzdFJlYWQ7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBvbmUgb3IgbW9yZSBjaHVua3MgZnJvbSB1cHN0cmVhbSBhbmQgcHJvY2VzcyB0aGVtLCBwb3NzaWJseVxuICAgKiByZWFkaW5nIG9yIHdyaXRpbmcgYSBjYXJyeW92ZXIsIGFuZCBhZGRpbmcgcHJvY2Vzc2VkIGl0ZW1zIHRvIHRoZVxuICAgKiBvdXRwdXQgcXVldWUuICBOb3RlIGl0J3MgcG9zc2libGUgdGhhdCBubyBpdGVtcyBhcmUgYWRkZWQgdG8gdGhlIHF1ZXVlXG4gICAqIG9uIGEgZ2l2ZW4gcHVtcCgpIGNhbGwsIGV2ZW4gaWYgdGhlIHVwc3RyZWFtIHN0cmVhbSBpcyBub3QgY2xvc2VkXG4gICAqIChlLmcuLCBiZWNhdXNlIGl0ZW1zIGFyZSBmaWx0ZXJlZCkuXG4gICAqXG4gICAqIEByZXR1cm4gYHRydWVgIGlmIGFueSBhY3Rpb24gd2FzIHRha2VuLCBpLmUuIGZldGNoaW5nIGl0ZW1zIGZyb20gdGhlXG4gICAqICAgdXBzdHJlYW0gc291cmNlIE9SIGFkZGluZyBpdGVtcyB0byB0aGUgb3V0cHV0IHF1ZXVlLiAgYGZhbHNlYCBpZiB0aGVcbiAgICogICB1cHN0cmVhbSBzb3VyY2UgaXMgZXhoYXVzdGVkIEFORCBub3RoaW5nIHdhcyBhZGRlZCB0byB0aGUgcXVldWVcbiAgICogKGkuZS4sIGFueSByZW1haW5pbmcgY2FycnlvdmVyKS5cbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBwdW1wKCk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgYXN5bmMgc2VyaWFsTmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgLy8gRmV0Y2ggc28gdGhhdCB0aGUgcXVldWUgY29udGFpbnMgYXQgbGVhc3Qgb25lIGl0ZW0gaWYgcG9zc2libGUuXG4gICAgLy8gSWYgdGhlIHVwc3RyZWFtIHNvdXJjZSBpcyBleGhhdXN0ZWQsIEFORCB0aGVyZSBhcmUgbm8gaXRlbXMgbGVmdCBpblxuICAgIC8vIHRoZSBvdXRwdXQgcXVldWUsIHRoZW4gdGhpcyBzdHJlYW0gaXMgYWxzbyBleGhhdXN0ZWQuXG4gICAgd2hpbGUgKHRoaXMub3V0cHV0UXVldWUubGVuZ3RoKCkgPT09IDApIHtcbiAgICAgIC8vIFRPRE8oc29lcmdlbCk6IGNvbnNpZGVyIHBhcmFsbGVsIHJlYWRzLlxuICAgICAgaWYgKCFhd2FpdCB0aGlzLnB1bXAoKSkge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCBkb25lOiB0cnVlfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt2YWx1ZTogdGhpcy5vdXRwdXRRdWV1ZS5zaGlmdCgpLCBkb25lOiBmYWxzZX07XG4gIH1cbn1cbmNsYXNzIEZsYXRtYXBJdGVyYXRvcjxJLCBPPiBleHRlbmRzIE9uZVRvTWFueUl0ZXJhdG9yPE8+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgdXBzdHJlYW06IExhenlJdGVyYXRvcjxJPixcbiAgICAgIHByb3RlY3RlZCB0cmFuc2Zvcm06ICh2YWx1ZTogSSkgPT4gT1tdKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBGbGF0bWFwYDtcbiAgfVxuXG4gIGFzeW5jIHB1bXAoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMudXBzdHJlYW0ubmV4dCgpO1xuICAgIGlmIChpdGVtLmRvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRUZW5zb3JzID0gdGYudGVuc29yX3V0aWwuZ2V0VGVuc29yc0luQ29udGFpbmVyKGl0ZW0udmFsdWUgYXMge30pO1xuICAgIC8vIENhcmVmdWw6IHRoZSB0cmFuc2Zvcm0gbWF5IG11dGF0ZSB0aGUgaXRlbSBpbiBwbGFjZS5cbiAgICAvLyB0aGF0J3Mgd2h5IHdlIGhhdmUgdG8gcmVtZW1iZXIgdGhlIGlucHV0IFRlbnNvcnMgYWJvdmUsIGFuZCB0aGVuXG4gICAgLy8gYmVsb3cgZGlzcG9zZSBvbmx5IHRob3NlIHRoYXQgd2VyZSBub3QgcGFzc2VkIHRocm91Z2ggdG8gdGhlIG91dHB1dC5cbiAgICAvLyBOb3RlIHRvbyB0aGF0IHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRpZHlpbmcgYW55XG4gICAgLy8gaW50ZXJtZWRpYXRlIFRlbnNvcnMuICBIZXJlIHdlIGFyZSBjb25jZXJuZWQgb25seSBhYm91dCB0aGUgaW5wdXRzLlxuICAgIGNvbnN0IG1hcHBlZEFycmF5ID0gdGhpcy50cmFuc2Zvcm0oaXRlbS52YWx1ZSk7XG4gICAgY29uc3Qgb3V0cHV0VGVuc29ycyA9XG4gICAgICAgIHRmLnRlbnNvcl91dGlsLmdldFRlbnNvcnNJbkNvbnRhaW5lcihtYXBwZWRBcnJheSBhcyB7fSk7XG4gICAgdGhpcy5vdXRwdXRRdWV1ZS5wdXNoQWxsKG1hcHBlZEFycmF5KTtcblxuICAgIC8vIFRPRE8oc29lcmdlbCkgZmFzdGVyIGludGVyc2VjdGlvbiwgYW5kIGRlZHVwbGljYXRlIG91dHB1dFRlbnNvcnNcbiAgICAvLyBUT0RPKHNvZXJnZWwpIG1vdmUgdG8gdGYuZGlzcG9zZUV4Y2VwdChpbiwgb3V0KT9cbiAgICBmb3IgKGNvbnN0IHQgb2YgaW5wdXRUZW5zb3JzKSB7XG4gICAgICBpZiAoIXRmLnRlbnNvcl91dGlsLmlzVGVuc29ySW5MaXN0KHQsIG91dHB1dFRlbnNvcnMpKSB7XG4gICAgICAgIHQuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBgTGF6eUl0ZXJhdG9yYCB0aGF0IGNvbmNhdGVuYXRlcyBhIHN0cmVhbSBvZiB1bmRlcmx5aW5nXG4gKiBzdHJlYW1zLlxuICpcbiAqIERvaW5nIHRoaXMgaW4gYSBjb25jdXJyZW5jeS1zYWZlIHdheSByZXF1aXJlcyBzb21lIHRyaWNrZXJ5LiAgSW5cbiAqIHBhcnRpY3VsYXIsIHdlIHdhbnQgdGhpcyBzdHJlYW0gdG8gcmV0dXJuIHRoZSBlbGVtZW50cyBmcm9tIHRoZVxuICogdW5kZXJseWluZyBzdHJlYW1zIGluIHRoZSBjb3JyZWN0IG9yZGVyIGFjY29yZGluZyB0byB3aGVuIG5leHQoKSB3YXNcbiAqIGNhbGxlZCwgZXZlbiBpZiB0aGUgcmVzdWx0aW5nIFByb21pc2VzIHJlc29sdmUgaW4gYSBkaWZmZXJlbnQgb3JkZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFpbmVkSXRlcmF0b3I8VD4gZXh0ZW5kcyBMYXp5SXRlcmF0b3I8VD4ge1xuICAvLyBTdHJpY3QgUHJvbWlzZSBleGVjdXRpb24gb3JkZXI6XG4gIC8vIGEgbmV4dCgpIGNhbGwgbWF5IG5vdCBldmVuIGJlZ2luIHVudGlsIHRoZSBwcmV2aW91cyBvbmUgY29tcGxldGVzLlxuICBwcml2YXRlIGxhc3RSZWFkOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiA9IG51bGw7XG5cbiAgLy8gTG9jYWwgc3RhdGUgdGhhdCBzaG91bGQgbm90IGJlIGNsb2JiZXJlZCBieSBvdXQtb2Ytb3JkZXIgZXhlY3V0aW9uLlxuICBwcml2YXRlIGl0ZXJhdG9yOiBMYXp5SXRlcmF0b3I8VD4gPSBudWxsO1xuICBwcml2YXRlIG1vcmVJdGVyYXRvcnM6IExhenlJdGVyYXRvcjxMYXp5SXRlcmF0b3I8VD4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgaXRlcmF0b3JzOiBMYXp5SXRlcmF0b3I8TGF6eUl0ZXJhdG9yPFQ+PixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZUVycm9ySGFuZGxlcj86IChlOiBFcnJvcikgPT4gYm9vbGVhbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb3JlSXRlcmF0b3JzID0gaXRlcmF0b3JzO1xuICB9XG5cbiAgc3VtbWFyeSgpIHtcbiAgICBjb25zdCB1cHN0cmVhbVN1bW1hcmllcyA9ICdUT0RPOiBmaWxsIGluIHVwc3RyZWFtIG9mIGNoYWluZWQgc3VtbWFyaWVzJztcbiAgICByZXR1cm4gYCR7dXBzdHJlYW1TdW1tYXJpZXN9IC0+IENoYWluZWRgO1xuICB9XG5cbiAgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgdGhpcy5sYXN0UmVhZCA9IHRoaXMucmVhZEZyb21DaGFpbih0aGlzLmxhc3RSZWFkKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0UmVhZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVhZEZyb21DaGFpbihsYXN0UmVhZDogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4pOlxuICAgICAgUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4ge1xuICAgIC8vIE11c3QgYXdhaXQgb24gdGhlIHByZXZpb3VzIHJlYWQgc2luY2UgdGhlIHByZXZpb3VzIHJlYWQgbWF5IGhhdmUgYWR2YW5jZWRcbiAgICAvLyB0aGUgc3RyZWFtIG9mIHN0cmVhbXMsIGZyb20gd2hpY2ggd2UgbmVlZCB0byByZWFkLlxuICAgIC8vIFRoaXMgaXMgdW5mb3J0dW5hdGUgc2luY2Ugd2UgY2FuJ3QgcGFyYWxsZWxpemUgcmVhZHMuIFdoaWNoIG1lYW5zXG4gICAgLy8gcHJlZmV0Y2hpbmcgb2YgY2hhaW5lZCBzdHJlYW1zIGlzIGEgbm8tb3AuXG4gICAgLy8gT25lIHNvbHV0aW9uIGlzIHRvIHByZWZldGNoIGltbWVkaWF0ZWx5IHVwc3RyZWFtIG9mIHRoaXMuXG4gICAgYXdhaXQgbGFzdFJlYWQ7XG4gICAgaWYgKHRoaXMuaXRlcmF0b3IgPT0gbnVsbCkge1xuICAgICAgY29uc3QgaXRlcmF0b3JSZXN1bHQgPSBhd2FpdCB0aGlzLm1vcmVJdGVyYXRvcnMubmV4dCgpO1xuICAgICAgaWYgKGl0ZXJhdG9yUmVzdWx0LmRvbmUpIHtcbiAgICAgICAgLy8gTm8gbW9yZSBzdHJlYW1zIHRvIHN0cmVhbSBmcm9tLlxuICAgICAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCBkb25lOiB0cnVlfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvclJlc3VsdC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLmJhc2VFcnJvckhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLml0ZXJhdG9yID0gdGhpcy5pdGVyYXRvci5oYW5kbGVFcnJvcnModGhpcy5iYXNlRXJyb3JIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaXRlbVJlc3VsdCA9IGF3YWl0IHRoaXMuaXRlcmF0b3IubmV4dCgpO1xuICAgIGlmIChpdGVtUmVzdWx0LmRvbmUpIHtcbiAgICAgIHRoaXMuaXRlcmF0b3IgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMucmVhZEZyb21DaGFpbihsYXN0UmVhZCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtUmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBlbnVtIFppcE1pc21hdGNoTW9kZSB7XG4gIEZBSUwsICAgICAgLy8gcmVxdWlyZSB6aXBwZWQgc3RyZWFtcyB0byBoYXZlIHRoZSBzYW1lIGxlbmd0aFxuICBTSE9SVEVTVCwgIC8vIHRlcm1pbmF0ZSB6aXAgd2hlbiB0aGUgZmlyc3Qgc3RyZWFtIGlzIGV4aGF1c3RlZFxuICBMT05HRVNUICAgIC8vIHVzZSBudWxscyBmb3IgZXhoYXVzdGVkIHN0cmVhbXM7IHVzZSB1cCB0aGUgbG9uZ2VzdCBzdHJlYW0uXG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBgTGF6eUl0ZXJhdG9yYCB0aGF0IHppcHMgdG9nZXRoZXIgYW4gYXJyYXksIGRpY3QsIG9yIG5lc3RlZFxuICogc3RydWN0dXJlIG9mIGBMYXp5SXRlcmF0b3JgcyAoYW5kIHBlcmhhcHMgYWRkaXRpb25hbCBjb25zdGFudHMpLlxuICpcbiAqIFRoZSB1bmRlcmx5aW5nIHN0cmVhbXMgbXVzdCBwcm92aWRlIGVsZW1lbnRzIGluIGEgY29uc2lzdGVudCBvcmRlciBzdWNoXG4gKiB0aGF0IHRoZXkgY29ycmVzcG9uZC5cbiAqXG4gKiBUeXBpY2FsbHksIHRoZSB1bmRlcmx5aW5nIHN0cmVhbXMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mXG4gKiBlbGVtZW50cy4gSWYgdGhleSBkbyBub3QsIHRoZSBiZWhhdmlvciBpcyBkZXRlcm1pbmVkIGJ5IHRoZVxuICogYG1pc21hdGNoTW9kZWAgYXJndW1lbnQuXG4gKlxuICogVGhlIG5lc3RlZCBzdHJ1Y3R1cmUgb2YgdGhlIGBpdGVyYXRvcnNgIGFyZ3VtZW50IGRldGVybWluZXMgdGhlXG4gKiBzdHJ1Y3R1cmUgb2YgZWxlbWVudHMgaW4gdGhlIHJlc3VsdGluZyBpdGVyYXRvci5cbiAqXG4gKiBEb2luZyB0aGlzIGluIGEgY29uY3VycmVuY3ktc2FmZSB3YXkgcmVxdWlyZXMgc29tZSB0cmlja2VyeS4gIEluXG4gKiBwYXJ0aWN1bGFyLCB3ZSB3YW50IHRoaXMgc3RyZWFtIHRvIHJldHVybiB0aGUgZWxlbWVudHMgZnJvbSB0aGVcbiAqIHVuZGVybHlpbmcgc3RyZWFtcyBpbiB0aGUgY29ycmVjdCBvcmRlciBhY2NvcmRpbmcgdG8gd2hlbiBuZXh0KCkgd2FzXG4gKiBjYWxsZWQsIGV2ZW4gaWYgdGhlIHJlc3VsdGluZyBQcm9taXNlcyByZXNvbHZlIGluIGEgZGlmZmVyZW50IG9yZGVyLlxuICpcbiAqIEBwYXJhbSBpdGVyYXRvcnM6IEFuIGFycmF5IG9yIG9iamVjdCBjb250YWluaW5nIExhenlJdGVyYXRvcnMgYXQgdGhlXG4gKiBsZWF2ZXMuXG4gKiBAcGFyYW0gbWlzbWF0Y2hNb2RlOiBEZXRlcm1pbmVzIHdoYXQgdG8gZG8gd2hlbiBvbmUgdW5kZXJseWluZyBpdGVyYXRvclxuICogaXMgZXhoYXVzdGVkIGJlZm9yZSB0aGUgb3RoZXJzLiAgYFppcE1pc21hdGNoTW9kZS5GQUlMYCAodGhlIGRlZmF1bHQpXG4gKiBjYXVzZXMgYW4gZXJyb3IgdG8gYmUgdGhyb3duIGluIHRoaXMgY2FzZS4gIGBaaXBNaXNtYXRjaE1vZGUuU0hPUlRFU1RgXG4gKiBjYXVzZXMgdGhlIHppcHBlZCBpdGVyYXRvciB0byB0ZXJtaW5hdGUgd2l0aCB0aGUgZnVyc3QgdW5kZXJseWluZ1xuICogc3RyZWFtcywgc28gZWxlbWVudHMgcmVtYWluaW5nIG9uIHRoZSBsb25nZXIgc3RyZWFtcyBhcmUgaWdub3JlZC5cbiAqIGBaaXBNaXNtYXRjaE1vZGUuTE9OR0VTVGAgY2F1c2VzIHRoZSB6aXBwZWQgc3RyZWFtIHRvIGNvbnRpbnVlLCBmaWxsaW5nXG4gKiBpbiBudWxscyBmb3IgdGhlIGV4aGF1c3RlZCBzdHJlYW1zLCB1bnRpbCBhbGwgc3RyZWFtcyBhcmUgZXhoYXVzdGVkLlxuICovXG5jbGFzcyBaaXBJdGVyYXRvcjxPIGV4dGVuZHMgdGYuVGVuc29yQ29udGFpbmVyPiBleHRlbmRzIExhenlJdGVyYXRvcjxPPiB7XG4gIHByaXZhdGUgY291bnQgPSAwO1xuICBwcml2YXRlIGN1cnJlbnRQcm9taXNlOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PE8+PiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaXRlcmF0b3JzOiBJdGVyYXRvckNvbnRhaW5lcixcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSBtaXNtYXRjaE1vZGU6IFppcE1pc21hdGNoTW9kZSA9IFppcE1pc21hdGNoTW9kZS5GQUlMKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgY29uc3QgdXBzdHJlYW1TdW1tYXJpZXMgPSAnVE9ETzogZmlsbCBpbiB1cHN0cmVhbSBvZiB6aXAgc3VtbWFyaWVzJztcbiAgICByZXR1cm4gYHske3Vwc3RyZWFtU3VtbWFyaWVzfX0gLT4gWmlwYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbmV4dFN0YXRlKGFmdGVyU3RhdGU6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8Tz4+KTpcbiAgICAgIFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8Tz4+IHtcbiAgICAvLyBUaGlzIGNoYWluaW5nIGVuc3VyZXMgdGhhdCB0aGUgdW5kZXJseWluZyBuZXh0KCkgYXJlIG5vdCBldmVuIGNhbGxlZFxuICAgIC8vIGJlZm9yZSB0aGUgcHJldmlvdXMgb25lcyBoYXZlIHJlc29sdmVkLlxuICAgIGF3YWl0IGFmdGVyU3RhdGU7XG5cbiAgICAvLyBDb2xsZWN0IHVuZGVybHlpbmcgaXRlcmF0b3IgXCJkb25lXCIgc2lnbmFscyBhcyBhIHNpZGUgZWZmZWN0IGluXG4gICAgLy8gZ2V0TmV4dCgpXG4gICAgbGV0IG51bUl0ZXJhdG9ycyA9IDA7XG4gICAgbGV0IGl0ZXJhdG9yc0RvbmUgPSAwO1xuXG4gICAgZnVuY3Rpb24gZ2V0TmV4dChjb250YWluZXI6IEl0ZXJhdG9yQ29udGFpbmVyKTogRGVlcE1hcEFzeW5jUmVzdWx0IHtcbiAgICAgIGlmIChjb250YWluZXIgaW5zdGFuY2VvZiBMYXp5SXRlcmF0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGFpbmVyLm5leHQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogcmVzdWx0LnRoZW4oeCA9PiB7XG4gICAgICAgICAgICBudW1JdGVyYXRvcnMrKztcbiAgICAgICAgICAgIGlmICh4LmRvbmUpIHtcbiAgICAgICAgICAgICAgaXRlcmF0b3JzRG9uZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcmVjdXJzZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIHJlY3Vyc2U6IHRydWV9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1hcHBlZDogTyA9IGF3YWl0IGRlZXBNYXBBbmRBd2FpdEFsbCh0aGlzLml0ZXJhdG9ycywgZ2V0TmV4dCk7XG5cbiAgICBpZiAobnVtSXRlcmF0b3JzID09PSBpdGVyYXRvcnNEb25lKSB7XG4gICAgICAvLyBUaGUgc3RyZWFtcyBoYXZlIGFsbCBlbmRlZC5cbiAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIGRvbmU6IHRydWV9O1xuICAgIH1cbiAgICBpZiAoaXRlcmF0b3JzRG9uZSA+IDApIHtcbiAgICAgIHN3aXRjaCAodGhpcy5taXNtYXRjaE1vZGUpIHtcbiAgICAgICAgY2FzZSBaaXBNaXNtYXRjaE1vZGUuRkFJTDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICdaaXBwZWQgc3RyZWFtcyBzaG91bGQgaGF2ZSB0aGUgc2FtZSBsZW5ndGguICcgK1xuICAgICAgICAgICAgICBgTWlzbWF0Y2hlZCBhdCBlbGVtZW50ICR7dGhpcy5jb3VudH0uYCk7XG4gICAgICAgIGNhc2UgWmlwTWlzbWF0Y2hNb2RlLlNIT1JURVNUOlxuICAgICAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIGRvbmU6IHRydWV9O1xuICAgICAgICBjYXNlIFppcE1pc21hdGNoTW9kZS5MT05HRVNUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIENvbnRpbnVlLiAgVGhlIGV4aGF1c3RlZCBzdHJlYW1zIGFscmVhZHkgcHJvZHVjZWQgdmFsdWU6IG51bGwuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCsrO1xuICAgIHJldHVybiB7dmFsdWU6IG1hcHBlZCwgZG9uZTogZmFsc2V9O1xuICB9XG5cbiAgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PE8+PiB7XG4gICAgdGhpcy5jdXJyZW50UHJvbWlzZSA9IHRoaXMubmV4dFN0YXRlKHRoaXMuY3VycmVudFByb21pc2UpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9taXNlO1xuICB9XG59XG5cbi8vIEl0ZXJhdG9ycyB0aGF0IG1haW50YWluIGEgcmluZyBidWZmZXIgb2YgcGVuZGluZyBwcm9taXNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEEgc3RyZWFtIHRoYXQgcHJlZmV0Y2hlcyBhIGdpdmVuIG51bWJlciBvZiBpdGVtcyBmcm9tIGFuIHVwc3RyZWFtIHNvdXJjZSxcbiAqIHJldHVybmluZyB0aGVtIGluIEZJRk8gb3JkZXIuXG4gKlxuICogTm90ZSB0aGlzIHByZWZldGNoZXMgUHJvbWlzZXMsIGJ1dCBtYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IHdoZW4gdGhvc2VcbiAqIFByb21pc2VzIHJlc29sdmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVmZXRjaEl0ZXJhdG9yPFQ+IGV4dGVuZHMgTGF6eUl0ZXJhdG9yPFQ+IHtcbiAgcHJvdGVjdGVkIGJ1ZmZlcjogUmluZ0J1ZmZlcjxQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+Pj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgdXBzdHJlYW06IExhenlJdGVyYXRvcjxUPiwgcHJvdGVjdGVkIGJ1ZmZlclNpemU6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5idWZmZXIgPSBuZXcgUmluZ0J1ZmZlcjxQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+Pj4oYnVmZmVyU2l6ZSk7XG4gIH1cblxuICBzdW1tYXJ5KCkge1xuICAgIHJldHVybiBgJHt0aGlzLnVwc3RyZWFtLnN1bW1hcnkoKX0gLT4gUHJlZmV0Y2hgO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZmlsbCB0aGUgcHJlZmV0Y2ggYnVmZmVyLiAgUmV0dXJucyBvbmx5IGFmdGVyIHRoZSBidWZmZXIgaXMgZnVsbCwgb3JcbiAgICogdGhlIHVwc3RyZWFtIHNvdXJjZSBpcyBleGhhdXN0ZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVmaWxsKCkge1xuICAgIHdoaWxlICghdGhpcy5idWZmZXIuaXNGdWxsKCkpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnVwc3RyZWFtLm5leHQoKTtcbiAgICAgIHRoaXMuYnVmZmVyLnB1c2godik7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgdGhpcy5yZWZpbGwoKTtcbiAgICAvLyBUaGlzIHNoaWZ0IHdpbGwgbmV2ZXIgdGhyb3cgYW4gZXJyb3IgYmVjYXVzZSB0aGUgYnVmZmVyIGlzIGFsd2F5c1xuICAgIC8vIGZ1bGwgYWZ0ZXIgYSByZWZpbGwuIElmIHRoZSBzdHJlYW0gaXMgZXhoYXVzdGVkLCB0aGUgYnVmZmVyIHdpbGwgYmVcbiAgICAvLyBmdWxsIG9mIFByb21pc2VzIHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSBlbmQtb2Ytc3RyZWFtIHNpZ25hbC5cbiAgICByZXR1cm4gdGhpcy5idWZmZXIuc2hpZnQoKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgc3RyZWFtIHRoYXQgcGVyZm9ybXMgYSBzbGlkaW5nLXdpbmRvdyByYW5kb20gc2h1ZmZsZSBvbiBhbiB1cHN0cmVhbVxuICogc291cmNlLiBUaGlzIGlzIGxpa2UgYSBgUHJlZmV0Y2hJdGVyYXRvcmAgZXhjZXB0IHRoYXQgdGhlIGl0ZW1zIGFyZVxuICogcmV0dXJuZWQgaW4gcmFuZG9taXplZCBvcmRlci4gIE1peGluZyBuYXR1cmFsbHkgaW1wcm92ZXMgYXMgdGhlIGJ1ZmZlclxuICogc2l6ZSBpbmNyZWFzZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaHVmZmxlSXRlcmF0b3I8VD4gZXh0ZW5kcyBQcmVmZXRjaEl0ZXJhdG9yPFQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSByYW5kb206IHNlZWRyYW5kb20ucHJuZztcblxuICAvLyBTdHJpY3QgUHJvbWlzZSBleGVjdXRpb24gb3JkZXI6XG4gIC8vIGEgbmV4dCgpIGNhbGwgbWF5IG5vdCBldmVuIGJlZ2luIHVudGlsIHRoZSBwcmV2aW91cyBvbmUgY29tcGxldGVzLlxuICBwcml2YXRlIGxhc3RSZWFkOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PjtcblxuICAvLyBMb2NhbCBzdGF0ZSB0aGF0IHNob3VsZCBub3QgYmUgY2xvYmJlcmVkIGJ5IG91dC1vZi1vcmRlciBleGVjdXRpb24uXG4gIHByaXZhdGUgdXBzdHJlYW1FeGhhdXN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdXBzdHJlYW06IExhenlJdGVyYXRvcjxUPiwgcHJvdGVjdGVkIHdpbmRvd1NpemU6IG51bWJlcixcbiAgICAgIHNlZWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcih1cHN0cmVhbSwgd2luZG93U2l6ZSk7XG4gICAgdGhpcy5yYW5kb20gPSBzZWVkcmFuZG9tLmFsZWEoc2VlZCB8fCB0Zi51dGlsLm5vdygpLnRvU3RyaW5nKCkpO1xuICAgIHRoaXMubGFzdFJlYWQgPSBQcm9taXNlLnJlc29sdmUoe3ZhbHVlOiBudWxsLCBkb25lOiBmYWxzZX0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgLy8gVGhpcyBzZXRzIHRoaXMubGFzdFJlYWQgdG8gYSBuZXcgUHJvbWlzZSByaWdodCBhd2F5LCBhcyBvcHBvc2VkIHRvXG4gICAgLy8gc2F5aW5nIGBhd2FpdCB0aGlzLmxhc3RSZWFkOyB0aGlzLmxhc3RSZWFkID0gdGhpcy5zZXJpYWxOZXh0KCk7YCB3aGljaFxuICAgIC8vIHdvdWxkIG5vdCB3b3JrIGJlY2F1c2UgdGhpcy5uZXh0UmVhZCB3b3VsZCBiZSB1cGRhdGVkIG9ubHkgYWZ0ZXIgdGhlXG4gICAgLy8gcHJvbWlzZSByZXNvbHZlcy5cbiAgICB0aGlzLmxhc3RSZWFkID0gdGhpcy5sYXN0UmVhZC50aGVuKCgpID0+IHRoaXMuc2VyaWFsTmV4dCgpKTtcbiAgICByZXR1cm4gdGhpcy5sYXN0UmVhZDtcbiAgfVxuXG4gIHByaXZhdGUgcmFuZG9tSW50KG1heDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hvb3NlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5yYW5kb21JbnQodGhpcy5idWZmZXIubGVuZ3RoKCkpO1xuICB9XG5cbiAgYXN5bmMgc2VyaWFsTmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFQ+PiB7XG4gICAgLy8gVE9ETyhzb2VyZ2VsKTogY29uc2lkZXIgcGVyZm9ybWFuY2VcbiAgICBpZiAoIXRoaXMudXBzdHJlYW1FeGhhdXN0ZWQpIHtcbiAgICAgIHRoaXMucmVmaWxsKCk7XG4gICAgfVxuICAgIHdoaWxlICghdGhpcy5idWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zdCBjaG9zZW5JbmRleCA9IHRoaXMuY2hvb3NlSW5kZXgoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYnVmZmVyLnNodWZmbGVFeGNpc2UoY2hvc2VuSW5kZXgpO1xuICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgIHRoaXMudXBzdHJlYW1FeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWZpbGwoKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZX07XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/dataset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "Dataset",
    ()=>Dataset,
    "array",
    ()=>array,
    "datasetFromIteratorFn",
    ()=>datasetFromIteratorFn,
    "zip",
    ()=>zip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$seedrandom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/seedrandom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/deep_map.js [app-client] (ecmascript)");
;
;
;
;
// TODO(soergel): consider vectorized operations within the pipeline.
/**
 * Represents a potentially large list of independent data elements (typically
 * 'samples' or 'examples').
 *
 * A 'data example' may be a primitive, an array, a map from string keys to
 * values, or any nested structure of these.
 *
 * A `Dataset` represents an ordered collection of elements, together with a
 * chain of transformations to be performed on those elements. Each
 * transformation is a method of `Dataset` that returns another `Dataset`, so
 * these may be chained, e.g.
 * `const processedDataset = rawDataset.filter(...).map(...).batch(...)`.
 *
 * Data loading and transformation is done in a lazy, streaming fashion.  The
 * dataset may be iterated over multiple times; each iteration starts the data
 * loading anew and recapitulates the transformations.
 *
 * A `Dataset` is typically processed as a stream of unbatched examples -- i.e.,
 * its transformations are applied one example at a time. Batching produces a
 * new `Dataset` where each element is a batch. Batching should usually come
 * last in a pipeline, because data transformations are easier to express on a
 * per-example basis than on a per-batch basis.
 *
 * The following code examples are calling `await dataset.forEachAsync(...)` to
 * iterate once over the entire dataset in order to print out the data.
 *
 * @doc {heading: 'Data', subheading: 'Classes', namespace: 'data'}
 */ class Dataset {
    constructor(){
        this.size = null;
    }
    // TODO(soergel): Make Datasets report whether repeated iterator() calls
    // produce the same result (e.g., reading from a file) or different results
    // (e.g., from the webcam).  Currently we don't make this distinction but it
    // could be important for the user to know.
    // abstract isDeterministic(): boolean;
    /**
     * Groups elements into batches.
     *
     * It is assumed that each of the incoming dataset elements has the same
     * structure -- i.e. the same set of keys at each location in an object
     * hierarchy.  For each key, the resulting `Dataset` provides a batched
     * element collecting all of the incoming values for that key.
     *
     *  * Incoming primitives are grouped into a 1-D Tensor.
     *  * Incoming Tensors are grouped into a new Tensor where the 0th axis is
     *    the batch dimension.
     *  * Incoming arrays are converted to Tensor and then batched.
     *  * A nested array is interpreted as an n-D Tensor, so the batched result
     *    has n+1 dimensions.
     *  * An array that cannot be converted to Tensor produces an error.
     *
     * If an array should not be batched as a unit, it should first be converted
     * to an object with integer keys.
     *
     * Here are a few examples:
     *
     * Batch a dataset of numbers:
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8]).batch(4);
     * await a.forEachAsync(e => e.print());
     * ```
     *
     * Batch a dataset of arrays:
     * ```js
     * const b = tf.data.array([[1], [2], [3], [4], [5], [6], [7], [8]]).batch(4);
     * await b.forEachAsync(e => e.print());
     * ```
     *
     * Batch a dataset of objects:
     * ```js
     * const c = tf.data.array([{a: 1, b: 11}, {a: 2, b: 12}, {a: 3, b: 13},
     *   {a: 4, b: 14}, {a: 5, b: 15}, {a: 6, b: 16}, {a: 7, b: 17},
     *   {a: 8, b: 18}]).batch(4);
     * await c.forEachAsync(e => {
     *   console.log('{');
     *   for(var key in e) {
     *     console.log(key+':');
     *     e[key].print();
     *   }
     *   console.log('}');
     * })
     * ```
     *
     * @param batchSize The number of elements desired per batch.
     * @param smallLastBatch Whether to emit the final batch when it has fewer
     *   than batchSize elements. Default true.
     * @returns A `Dataset`, from which a stream of batches can be obtained.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ batch(batchSize, smallLastBatch = true) {
        const base = this;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(batchSize > 0, ()=>`batchSize needs to be positive, but it is
      ${batchSize}`);
        let size;
        if (this.size === Infinity || this.size == null) {
            // If the size of this dataset is infinity or null, the new size keeps the
            // same.
            size = this.size;
        } else if (smallLastBatch) {
            // If the size of this dataset is known and include small last batch, the
            // new size is full batch count plus last batch.
            size = Math.ceil(this.size / batchSize);
        } else {
            // If the size of this dataset is known and not include small last batch,
            // the new size is full batch count.
            size = Math.floor(this.size / batchSize);
        }
        return datasetFromIteratorFn(async ()=>{
            return (await base.iterator()).columnMajorBatch(batchSize, smallLastBatch, deepBatchConcat);
        }, size);
    }
    /**
     * Concatenates this `Dataset` with another.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]);
     * const b = tf.data.array([4, 5, 6]);
     * const c = a.concatenate(b);
     * await c.forEachAsync(e => console.log(e));
     * ```
     *
     * @param dataset A `Dataset` to be concatenated onto this one.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ concatenate(dataset) {
        const base = this;
        let size;
        if (this.size === Infinity || dataset.size === Infinity) {
            // If the size of any of these two dataset is infinity, new size is
            // infinity.
            size = Infinity;
        } else if (this.size != null && dataset.size != null) {
            // If the size of both datasets are known and not infinity, new size is
            // sum the size of these two datasets.
            size = this.size + dataset.size;
        } else {
            // If neither of these two datasets has infinite size and any of these two
            // datasets' size is null, the new size is null.
            size = null;
        }
        return datasetFromIteratorFn(async ()=>(await base.iterator()).concatenate(await dataset.iterator()), size);
    }
    /**
     * Filters this dataset according to `predicate`.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
     *   .filter(x => x%2 === 0);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param predicate A function mapping a dataset element to a boolean or a
     * `Promise` for one.
     *
     * @returns A `Dataset` of elements for which the predicate was true.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ filter(predicate) {
        const base = this;
        let size;
        if (this.size === Infinity) {
            // If the size of this dataset is infinity, new size is infinity
            size = Infinity;
        } else {
            // If this dataset has limited elements, new size is null because it might
            // exhausted randomly.
            size = null;
        }
        return datasetFromIteratorFn(async ()=>{
            return (await base.iterator()).filter((x)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>predicate(x)));
        }, size);
    }
    /**
     * Apply a function to every element of the dataset.
     *
     * After the function is applied to a dataset element, any Tensors contained
     * within that element are disposed.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param f A function to apply to each dataset element.
     * @returns A `Promise` that resolves after all elements have been processed.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ async forEachAsync(f) {
        return (await this.iterator()).forEachAsync(f);
    }
    /**
     * Maps this dataset through a 1-to-1 transform.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).map(x => x*x);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param transform A function mapping a dataset element to a transformed
     *   dataset element.
     *
     * @returns A `Dataset` of transformed elements.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ map(transform) {
        const base = this;
        return datasetFromIteratorFn(async ()=>{
            return (await base.iterator()).map((x)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>transform(x)));
        }, this.size);
    }
    /**
     * Maps this dataset through an async 1-to-1 transform.
     *
     * ```js
     * const a =
     *  tf.data.array([1, 2, 3]).mapAsync(x => new Promise(function(resolve){
     *    setTimeout(() => {
     *      resolve(x * x);
     *    }, Math.random()*1000 + 500);
     *  }));
     * console.log(await a.toArray());
     * ```
     *
     * @param transform A function mapping a dataset element to a `Promise` for a
     *   transformed dataset element.  This transform is responsible for disposing
     *   any intermediate `Tensor`s, i.e. by wrapping its computation in
     *   `tf.tidy()`; that cannot be automated here (as it is in the synchronous
     *   `map()` case).
     *
     * @returns A `Dataset` of transformed elements.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ mapAsync(transform) {
        const base = this;
        return datasetFromIteratorFn(async ()=>{
            return (await base.iterator()).mapAsync(transform);
        }, this.size);
    }
    /**
     *  Creates a `Dataset` that prefetches elements from this dataset.
     *
     * @param bufferSize: An integer specifying the number of elements to be
     *   prefetched.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ prefetch(bufferSize) {
        if (bufferSize == null) {
            throw new RangeError('`Dataset.prefetch()` requires bufferSize to be specified.');
        }
        const base = this;
        return datasetFromIteratorFn(async ()=>(await base.iterator()).prefetch(bufferSize), this.size);
    }
    /**
     * Repeats this dataset `count` times.
     *
     * NOTE: If this dataset is a function of global state (e.g. a random number
     * generator), then different repetitions may produce different elements.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3]).repeat(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: (Optional) An integer, representing the number of times
     *   the dataset should be repeated. The default behavior (if `count` is
     *   `undefined` or negative) is for the dataset be repeated indefinitely.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ repeat(count) {
        const base = this;
        let size;
        if (this.size != null && count > 0) {
            // If this dataset has size and count is positive, new size is current
            // size multiply count. This also covers the case that current size is
            // infinity.
            size = this.size * count;
        } else if (count === 0) {
            // If count is 0, new size is 0.
            size = 0;
        } else if (this.size != null && (count === undefined || count < 0)) {
            // If this dataset has size and count is undefined or negative, the
            // dataset will be repeated indefinitely and new size is infinity.
            size = Infinity;
        } else {
            // If the size of this dataset is null, the new dataset's size is null.
            size = null;
        }
        return datasetFromIteratorFn(async ()=>{
            const iteratorIterator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFromFunction"])(async ()=>({
                    value: await base.iterator(),
                    done: false
                }));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFromConcatenated"])(iteratorIterator.take(count));
        }, size);
    }
    /**
     * Creates a `Dataset` that skips `count` initial elements from this dataset.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).skip(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: The number of elements of this dataset that should be skipped
     *   to form the new dataset.  If `count` is greater than the size of this
     *   dataset, the new dataset will contain no elements.  If `count`
     *   is `undefined` or negative, skips the entire dataset.
     *
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ skip(count) {
        const base = this;
        let size;
        if (this.size != null && count >= 0 && this.size >= count) {
            // If the size of this dataset is greater than count, the new dataset's
            // size is current size minus skipped size.This also covers the case that
            // current size is infinity.
            size = this.size - count;
        } else if (this.size != null && (this.size < count || count === undefined || count < 0)) {
            // If the size of this dataset is smaller than count, or count is
            // undefined or negative, skips the entire dataset and the new size is 0.
            size = 0;
        } else {
            // If the size of this dataset is null, the new dataset's size is null.
            size = null;
        }
        return datasetFromIteratorFn(async ()=>(await base.iterator()).skip(count), size);
    }
    /**
     * Pseudorandomly shuffles the elements of this dataset. This is done in a
     * streaming manner, by sampling from a given number of prefetched elements.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).shuffle(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param bufferSize: An integer specifying the number of elements from this
     *   dataset from which the new dataset will sample.
     * @param seed: (Optional) An integer specifying the random seed that will
     *   be used to create the distribution.
     * @param reshuffleEachIteration: (Optional) A boolean, which if true
     *   indicates that the dataset should be pseudorandomly reshuffled each time
     *   it is iterated over. If false, elements will be returned in the same
     *   shuffled order on each iteration. (Defaults to `true`.)
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ shuffle(bufferSize, seed, reshuffleEachIteration = true) {
        if (bufferSize == null || bufferSize < 0) {
            if (this.size == null) {
                throw new RangeError('`Dataset.shuffle()` requires bufferSize to be specified.');
            } else {
                throw new RangeError('`Dataset.shuffle()` requires bufferSize to be specified.  ' + 'If your data fits in main memory (for regular JS objects), ' + 'and/or GPU memory (for `tf.Tensor`s), consider setting ' + `bufferSize to the dataset size (${this.size} elements)`);
            }
        }
        const base = this;
        const random = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$seedrandom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alea"](seed || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].now().toString());
        return datasetFromIteratorFn(async ()=>{
            let seed2 = random.int32();
            if (reshuffleEachIteration) {
                seed2 += random.int32();
            }
            return (await base.iterator()).shuffle(bufferSize, seed2.toString());
        }, this.size);
    }
    /**
     * Creates a `Dataset` with at most `count` initial elements from this
     * dataset.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]).take(3);
     * await a.forEachAsync(e => console.log(e));
     * ```
     *
     * @param count: The number of elements of this dataset that should be taken
     *   to form the new dataset.  If `count` is `undefined` or negative, or if
     *   `count` is greater than the size of this dataset, the new dataset will
     *   contain all elements of this dataset.
     * @returns A `Dataset`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ take(count) {
        const base = this;
        let size;
        if (this.size != null && this.size > count) {
            // If the size of this dataset is greater than count, the new dataset's
            // size is count.
            size = count;
        } else if (this.size != null && this.size <= count) {
            // If the size of this dataset is equal or smaller than count, the new
            // dataset's size is the size of this dataset.
            size = this.size;
        } else {
            // If the size of this dataset is null, the new dataset's size is null.
            size = null;
        }
        return datasetFromIteratorFn(async ()=>(await base.iterator()).take(count), size);
    }
    /**
     * Collect all elements of this dataset into an array.
     *
     * Obviously this will succeed only for small datasets that fit in memory.
     * Useful for testing and generally should be avoided if possible.
     *
     * ```js
     * const a = tf.data.array([1, 2, 3, 4, 5, 6]);
     * console.log(await a.toArray());
     * ```
     *
     * @returns A Promise for an array of elements, which will resolve
     *   when a new stream has been obtained and fully consumed.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ async toArray() {
        if (this.size === Infinity) {
            throw new Error('Can not convert infinite data stream to array.');
        }
        return (await this.iterator()).toArray();
    }
    /**
     * Collect all elements of this dataset into an array with prefetching 100
     * elements. This is useful for testing, because the prefetch changes the
     * order in which the Promises are resolved along the processing pipeline.
     * This may help expose bugs where results are dependent on the order of
     * Promise resolution rather than on the logical order of the stream (i.e.,
     * due to hidden mutable state).
     *
     * @returns A Promise for an array of elements, which will resolve
     *   when a new stream has been obtained and fully consumed.
     */ async toArrayForTest() {
        if (this.size === Infinity) {
            throw new Error('Can not convert infinite data stream to array.');
        }
        return (await this.iterator()).toArrayForTest();
    }
}
// TODO(soergel): deep sharded shuffle, where supported
Dataset.MAX_BUFFER_SIZE = 10000;
;
function datasetFromIteratorFn(iteratorFn, size = null) {
    return new class extends Dataset {
        constructor(){
            super(...arguments);
            this.size = size;
        }
        /*
         * Provide a new stream of elements.  Note this will also start new streams
         * from any underlying `Dataset`s.
         */ async iterator() {
            return iteratorFn();
        }
    }();
}
function array(items) {
    return datasetFromIteratorFn(async ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFromItems"])(items), items.length);
}
function zip(datasets) {
    // manually type-check the argument for JS users
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIterable"])(datasets)) {
        throw new Error('The argument to zip() must be an object or array.');
    }
    let size;
    if (Array.isArray(datasets)) {
        for(let i = 0; i < datasets.length; i++){
            size = size == null ? datasets[i].size : Math.min(size, datasets[i].size);
        }
    } else if (datasets instanceof Object) {
        for(const ds in datasets){
            size = size == null ? datasets[ds].size : Math.min(size, datasets[ds].size);
        }
    }
    return datasetFromIteratorFn(async ()=>{
        const streams = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepMapAndAwaitAll"])(datasets, (d)=>{
            if (d instanceof Dataset) {
                return {
                    value: d.iterator(),
                    recurse: false
                };
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIterable"])(d)) {
                return {
                    value: null,
                    recurse: true
                };
            } else {
                throw new Error('Leaves of the structure passed to zip() must be Datasets, ' + 'not primitives.');
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFromZipped"])(streams, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZipMismatchMode"].SHORTEST);
    }, size);
}
/**
 * A zip function for use with deepZip, passed via the columnMajorBatch call.
 *
 * Accepts an array of identically-structured nested elements and either batches
 * them (if they are primitives, numeric arrays, or Tensors) or requests
 * recursion (if not).
 */ // tslint:disable-next-line:no-any
function deepBatchConcat(rows) {
    if (rows === null) {
        return null;
    }
    // use the first item to decide whether to recurse or batch here.
    const exampleRow = rows[0];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$deep_map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canTensorify"])(exampleRow)) {
        // rows is an array of primitives, Tensors, or arrays.  Batch them.
        const value = batchConcat(rows);
        return {
            value,
            recurse: false
        };
    }
    // the example row is an object, so recurse into it.
    return {
        value: null,
        recurse: true
    };
}
/**
 * Assembles a list of same-shaped numbers, number arrays, or Tensors
 * into a single new Tensor where axis 0 is the batch dimension.
 */ function batchConcat(arrays) {
    if (arrays.length === 0) {
        // We can't return an empty Tensor because we don't know the element shape.
        throw new Error('Can\'t make a batch of zero elements.');
    }
    if (arrays[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"]) {
        // Input is an array of Tensors
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"](arrays);
    } else {
        // Input is a possibly-nested array of numbers.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"](arrays);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvZGF0YXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUVILE9BQU8sS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUMsT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFFekMsT0FBTyxFQUFDLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFnQixlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUvSixPQUFPLEVBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFpQixVQUFVLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU81RixxRUFBcUU7QUFFckU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUNILE1BQXNCLE9BQU87SUFBN0I7UUFXVyxTQUFJLEdBQVcsSUFBSSxDQUFDO0lBMmMvQixDQUFDO0lBemNDLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0UsNEVBQTRFO0lBQzVFLDJDQUEyQztJQUMzQyx1Q0FBdUM7SUFFdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXNERztJQUNILEtBQUssQ0FBQyxTQUFpQixFQUFFLGNBQWMsR0FBRyxJQUFJO1FBQzVDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDVixTQUFTLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQy9DLDBFQUEwRTtZQUMx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QUFNO1FBQ0wsK0NBQStDO1FBQy9DLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFvQixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7VGVuc29yQ29udGFpbmVyLCBUZW5zb3JMaWtlfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0ICogYXMgc2VlZHJhbmRvbSBmcm9tICdzZWVkcmFuZG9tJztcblxuaW1wb3J0IHtpdGVyYXRvckZyb21Db25jYXRlbmF0ZWQsIGl0ZXJhdG9yRnJvbUZ1bmN0aW9uLCBpdGVyYXRvckZyb21JdGVtcywgaXRlcmF0b3JGcm9tWmlwcGVkLCBMYXp5SXRlcmF0b3IsIFppcE1pc21hdGNoTW9kZX0gZnJvbSAnLi9pdGVyYXRvcnMvbGF6eV9pdGVyYXRvcic7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NhblRlbnNvcmlmeSwgZGVlcE1hcEFuZEF3YWl0QWxsLCBEZWVwTWFwUmVzdWx0LCBpc0l0ZXJhYmxlfSBmcm9tICcuL3V0aWwvZGVlcF9tYXAnO1xuXG4vKipcbiAqIEEgbmVzdGVkIHN0cnVjdHVyZSBvZiBEYXRhc2V0cywgdXNlZCBhcyB0aGUgaW5wdXQgdG8gemlwKCkuXG4gKi9cbmV4cG9ydCB0eXBlIERhdGFzZXRDb250YWluZXIgPSBDb250YWluZXI8RGF0YXNldDxUZW5zb3JDb250YWluZXI+PjtcblxuLy8gVE9ETyhzb2VyZ2VsKTogY29uc2lkZXIgdmVjdG9yaXplZCBvcGVyYXRpb25zIHdpdGhpbiB0aGUgcGlwZWxpbmUuXG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBvdGVudGlhbGx5IGxhcmdlIGxpc3Qgb2YgaW5kZXBlbmRlbnQgZGF0YSBlbGVtZW50cyAodHlwaWNhbGx5XG4gKiAnc2FtcGxlcycgb3IgJ2V4YW1wbGVzJykuXG4gKlxuICogQSAnZGF0YSBleGFtcGxlJyBtYXkgYmUgYSBwcmltaXRpdmUsIGFuIGFycmF5LCBhIG1hcCBmcm9tIHN0cmluZyBrZXlzIHRvXG4gKiB2YWx1ZXMsIG9yIGFueSBuZXN0ZWQgc3RydWN0dXJlIG9mIHRoZXNlLlxuICpcbiAqIEEgYERhdGFzZXRgIHJlcHJlc2VudHMgYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCB0b2dldGhlciB3aXRoIGFcbiAqIGNoYWluIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBiZSBwZXJmb3JtZWQgb24gdGhvc2UgZWxlbWVudHMuIEVhY2hcbiAqIHRyYW5zZm9ybWF0aW9uIGlzIGEgbWV0aG9kIG9mIGBEYXRhc2V0YCB0aGF0IHJldHVybnMgYW5vdGhlciBgRGF0YXNldGAsIHNvXG4gKiB0aGVzZSBtYXkgYmUgY2hhaW5lZCwgZS5nLlxuICogYGNvbnN0IHByb2Nlc3NlZERhdGFzZXQgPSByYXdEYXRhc2V0LmZpbHRlciguLi4pLm1hcCguLi4pLmJhdGNoKC4uLilgLlxuICpcbiAqIERhdGEgbG9hZGluZyBhbmQgdHJhbnNmb3JtYXRpb24gaXMgZG9uZSBpbiBhIGxhenksIHN0cmVhbWluZyBmYXNoaW9uLiAgVGhlXG4gKiBkYXRhc2V0IG1heSBiZSBpdGVyYXRlZCBvdmVyIG11bHRpcGxlIHRpbWVzOyBlYWNoIGl0ZXJhdGlvbiBzdGFydHMgdGhlIGRhdGFcbiAqIGxvYWRpbmcgYW5ldyBhbmQgcmVjYXBpdHVsYXRlcyB0aGUgdHJhbnNmb3JtYXRpb25zLlxuICpcbiAqIEEgYERhdGFzZXRgIGlzIHR5cGljYWxseSBwcm9jZXNzZWQgYXMgYSBzdHJlYW0gb2YgdW5iYXRjaGVkIGV4YW1wbGVzIC0tIGkuZS4sXG4gKiBpdHMgdHJhbnNmb3JtYXRpb25zIGFyZSBhcHBsaWVkIG9uZSBleGFtcGxlIGF0IGEgdGltZS4gQmF0Y2hpbmcgcHJvZHVjZXMgYVxuICogbmV3IGBEYXRhc2V0YCB3aGVyZSBlYWNoIGVsZW1lbnQgaXMgYSBiYXRjaC4gQmF0Y2hpbmcgc2hvdWxkIHVzdWFsbHkgY29tZVxuICogbGFzdCBpbiBhIHBpcGVsaW5lLCBiZWNhdXNlIGRhdGEgdHJhbnNmb3JtYXRpb25zIGFyZSBlYXNpZXIgdG8gZXhwcmVzcyBvbiBhXG4gKiBwZXItZXhhbXBsZSBiYXNpcyB0aGFuIG9uIGEgcGVyLWJhdGNoIGJhc2lzLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgY29kZSBleGFtcGxlcyBhcmUgY2FsbGluZyBgYXdhaXQgZGF0YXNldC5mb3JFYWNoQXN5bmMoLi4uKWAgdG9cbiAqIGl0ZXJhdGUgb25jZSBvdmVyIHRoZSBlbnRpcmUgZGF0YXNldCBpbiBvcmRlciB0byBwcmludCBvdXQgdGhlIGRhdGEuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0RhdGEnLCBzdWJoZWFkaW5nOiAnQ2xhc3NlcycsIG5hbWVzcGFjZTogJ2RhdGEnfVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YXNldDxUIGV4dGVuZHMgdGYuVGVuc29yQ29udGFpbmVyPiB7XG4gIC8qXG4gICAqIFByb3ZpZGUgYSBuZXcgc3RyZWFtIG9mIGVsZW1lbnRzLiAgTm90ZSB0aGlzIHdpbGwgYWxzbyBzdGFydCBuZXcgc3RyZWFtc1xuICAgKiBmcm9tIGFueSB1bmRlcmx5aW5nIGBEYXRhc2V0YHMuXG4gICAqXG4gICAqIENBVVRJT046IEFueSBUZW5zb3JzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnRzIHJldHVybmVkIGZyb21cbiAgICogdGhpcyBzdHJlYW0gKm11c3QqIGJlIG1hbnVhbGx5IGRpc3Bvc2VkIHRvIGF2b2lkIGEgR1BVIG1lbW9yeSBsZWFrLlxuICAgKiBUaGUgdGYudGlkeSgpIGFwcHJvYWNoIGNhbm5vdCBiZSB1c2VkIGluIGFuIGFzeW5jaHJvbm91cyBjb250ZXh0LlxuICAgKi9cbiAgYWJzdHJhY3QgaXRlcmF0b3IoKTogUHJvbWlzZTxMYXp5SXRlcmF0b3I8VD4+O1xuXG4gIHJlYWRvbmx5IHNpemU6IG51bWJlciA9IG51bGw7XG5cbiAgLy8gVE9ETyhzb2VyZ2VsKTogTWFrZSBEYXRhc2V0cyByZXBvcnQgd2hldGhlciByZXBlYXRlZCBpdGVyYXRvcigpIGNhbGxzXG4gIC8vIHByb2R1Y2UgdGhlIHNhbWUgcmVzdWx0IChlLmcuLCByZWFkaW5nIGZyb20gYSBmaWxlKSBvciBkaWZmZXJlbnQgcmVzdWx0c1xuICAvLyAoZS5nLiwgZnJvbSB0aGUgd2ViY2FtKS4gIEN1cnJlbnRseSB3ZSBkb24ndCBtYWtlIHRoaXMgZGlzdGluY3Rpb24gYnV0IGl0XG4gIC8vIGNvdWxkIGJlIGltcG9ydGFudCBmb3IgdGhlIHVzZXIgdG8ga25vdy5cbiAgLy8gYWJzdHJhY3QgaXNEZXRlcm1pbmlzdGljKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdyb3VwcyBlbGVtZW50cyBpbnRvIGJhdGNoZXMuXG4gICAqXG4gICAqIEl0IGlzIGFzc3VtZWQgdGhhdCBlYWNoIG9mIHRoZSBpbmNvbWluZyBkYXRhc2V0IGVsZW1lbnRzIGhhcyB0aGUgc2FtZVxuICAgKiBzdHJ1Y3R1cmUgLS0gaS5lLiB0aGUgc2FtZSBzZXQgb2Yga2V5cyBhdCBlYWNoIGxvY2F0aW9uIGluIGFuIG9iamVjdFxuICAgKiBoaWVyYXJjaHkuICBGb3IgZWFjaCBrZXksIHRoZSByZXN1bHRpbmcgYERhdGFzZXRgIHByb3ZpZGVzIGEgYmF0Y2hlZFxuICAgKiBlbGVtZW50IGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBpbmNvbWluZyB2YWx1ZXMgZm9yIHRoYXQga2V5LlxuICAgKlxuICAgKiAgKiBJbmNvbWluZyBwcmltaXRpdmVzIGFyZSBncm91cGVkIGludG8gYSAxLUQgVGVuc29yLlxuICAgKiAgKiBJbmNvbWluZyBUZW5zb3JzIGFyZSBncm91cGVkIGludG8gYSBuZXcgVGVuc29yIHdoZXJlIHRoZSAwdGggYXhpcyBpc1xuICAgKiAgICB0aGUgYmF0Y2ggZGltZW5zaW9uLlxuICAgKiAgKiBJbmNvbWluZyBhcnJheXMgYXJlIGNvbnZlcnRlZCB0byBUZW5zb3IgYW5kIHRoZW4gYmF0Y2hlZC5cbiAgICogICogQSBuZXN0ZWQgYXJyYXkgaXMgaW50ZXJwcmV0ZWQgYXMgYW4gbi1EIFRlbnNvciwgc28gdGhlIGJhdGNoZWQgcmVzdWx0XG4gICAqICAgIGhhcyBuKzEgZGltZW5zaW9ucy5cbiAgICogICogQW4gYXJyYXkgdGhhdCBjYW5ub3QgYmUgY29udmVydGVkIHRvIFRlbnNvciBwcm9kdWNlcyBhbiBlcnJvci5cbiAgICpcbiAgICogSWYgYW4gYXJyYXkgc2hvdWxkIG5vdCBiZSBiYXRjaGVkIGFzIGEgdW5pdCwgaXQgc2hvdWxkIGZpcnN0IGJlIGNvbnZlcnRlZFxuICAgKiB0byBhbiBvYmplY3Qgd2l0aCBpbnRlZ2VyIGtleXMuXG4gICAqXG4gICAqIEhlcmUgYXJlIGEgZmV3IGV4YW1wbGVzOlxuICAgKlxuICAgKiBCYXRjaCBhIGRhdGFzZXQgb2YgbnVtYmVyczpcbiAgICogYGBganNcbiAgICogY29uc3QgYSA9IHRmLmRhdGEuYXJyYXkoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdKS5iYXRjaCg0KTtcbiAgICogYXdhaXQgYS5mb3JFYWNoQXN5bmMoZSA9PiBlLnByaW50KCkpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQmF0Y2ggYSBkYXRhc2V0IG9mIGFycmF5czpcbiAgICogYGBganNcbiAgICogY29uc3QgYiA9IHRmLmRhdGEuYXJyYXkoW1sxXSwgWzJdLCBbM10sIFs0XSwgWzVdLCBbNl0sIFs3XSwgWzhdXSkuYmF0Y2goNCk7XG4gICAqIGF3YWl0IGIuZm9yRWFjaEFzeW5jKGUgPT4gZS5wcmludCgpKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEJhdGNoIGEgZGF0YXNldCBvZiBvYmplY3RzOlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBjID0gdGYuZGF0YS5hcnJheShbe2E6IDEsIGI6IDExfSwge2E6IDIsIGI6IDEyfSwge2E6IDMsIGI6IDEzfSxcbiAgICogICB7YTogNCwgYjogMTR9LCB7YTogNSwgYjogMTV9LCB7YTogNiwgYjogMTZ9LCB7YTogNywgYjogMTd9LFxuICAgKiAgIHthOiA4LCBiOiAxOH1dKS5iYXRjaCg0KTtcbiAgICogYXdhaXQgYy5mb3JFYWNoQXN5bmMoZSA9PiB7XG4gICAqICAgY29uc29sZS5sb2coJ3snKTtcbiAgICogICBmb3IodmFyIGtleSBpbiBlKSB7XG4gICAqICAgICBjb25zb2xlLmxvZyhrZXkrJzonKTtcbiAgICogICAgIGVba2V5XS5wcmludCgpO1xuICAgKiAgIH1cbiAgICogICBjb25zb2xlLmxvZygnfScpO1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGJhdGNoU2l6ZSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGRlc2lyZWQgcGVyIGJhdGNoLlxuICAgKiBAcGFyYW0gc21hbGxMYXN0QmF0Y2ggV2hldGhlciB0byBlbWl0IHRoZSBmaW5hbCBiYXRjaCB3aGVuIGl0IGhhcyBmZXdlclxuICAgKiAgIHRoYW4gYmF0Y2hTaXplIGVsZW1lbnRzLiBEZWZhdWx0IHRydWUuXG4gICAqIEByZXR1cm5zIEEgYERhdGFzZXRgLCBmcm9tIHdoaWNoIGEgc3RyZWFtIG9mIGJhdGNoZXMgY2FuIGJlIG9idGFpbmVkLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGJhdGNoKGJhdGNoU2l6ZTogbnVtYmVyLCBzbWFsbExhc3RCYXRjaCA9IHRydWUpOiBEYXRhc2V0PHRmLlRlbnNvckNvbnRhaW5lcj4ge1xuICAgIGNvbnN0IGJhc2UgPSB0aGlzO1xuICAgIHRmLnV0aWwuYXNzZXJ0KFxuICAgICAgICBiYXRjaFNpemUgPiAwLCAoKSA9PiBgYmF0Y2hTaXplIG5lZWRzIHRvIGJlIHBvc2l0aXZlLCBidXQgaXQgaXNcbiAgICAgICR7YmF0Y2hTaXplfWApO1xuICAgIGxldCBzaXplO1xuICAgIGlmICh0aGlzLnNpemUgPT09IEluZmluaXR5IHx8IHRoaXMuc2l6ZSA9PSBudWxsKSB7XG4gICAgICAvLyBJZiB0aGUgc2l6ZSBvZiB0aGlzIGRhdGFzZXQgaXMgaW5maW5pdHkgb3IgbnVsbCwgdGhlIG5ldyBzaXplIGtlZXBzIHRoZVxuICAgICAgLy8gc2FtZS5cbiAgICAgIHNpemUgPSB0aGlzLnNpemU7XG4gICAgfSBlbHNlIGlmIChzbWFsbExhc3RCYXRjaCkge1xuICAgICAgLy8gSWYgdGhlIHNpemUgb2YgdGhpcyBkYXRhc2V0IGlzIGtub3duIGFuZCBpbmNsdWRlIHNtYWxsIGxhc3QgYmF0Y2gsIHRoZVxuICAgICAgLy8gbmV3IHNpemUgaXMgZnVsbCBiYXRjaCBjb3VudCBwbHVzIGxhc3QgYmF0Y2guXG4gICAgICBzaXplID0gTWF0aC5jZWlsKHRoaXMuc2l6ZSAvIGJhdGNoU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBzaXplIG9mIHRoaXMgZGF0YXNldCBpcyBrbm93biBhbmQgbm90IGluY2x1ZGUgc21hbGwgbGFzdCBiYXRjaCxcbiAgICAgIC8vIHRoZSBuZXcgc2l6ZSBpcyBmdWxsIGJhdGNoIGNvdW50LlxuICAgICAgc2l6ZSA9IE1hdGguZmxvb3IodGhpcy5zaXplIC8gYmF0Y2hTaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFzZXRGcm9tSXRlcmF0b3JGbihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gKGF3YWl0IGJhc2UuaXRlcmF0b3IoKSlcbiAgICAgICAgICAuY29sdW1uTWFqb3JCYXRjaChiYXRjaFNpemUsIHNtYWxsTGFzdEJhdGNoLCBkZWVwQmF0Y2hDb25jYXQpO1xuICAgIH0sIHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyB0aGlzIGBEYXRhc2V0YCB3aXRoIGFub3RoZXIuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGEgPSB0Zi5kYXRhLmFycmF5KFsxLCAyLCAzXSk7XG4gICAqIGNvbnN0IGIgPSB0Zi5kYXRhLmFycmF5KFs0LCA1LCA2XSk7XG4gICAqIGNvbnN0IGMgPSBhLmNvbmNhdGVuYXRlKGIpO1xuICAgKiBhd2FpdCBjLmZvckVhY2hBc3luYyhlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhc2V0IEEgYERhdGFzZXRgIHRvIGJlIGNvbmNhdGVuYXRlZCBvbnRvIHRoaXMgb25lLlxuICAgKiBAcmV0dXJucyBBIGBEYXRhc2V0YC5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ0RhdGEnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBjb25jYXRlbmF0ZShkYXRhc2V0OiBEYXRhc2V0PFQ+KTogRGF0YXNldDxUPiB7XG4gICAgY29uc3QgYmFzZSA9IHRoaXM7XG4gICAgbGV0IHNpemU7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gSW5maW5pdHkgfHwgZGF0YXNldC5zaXplID09PSBJbmZpbml0eSkge1xuICAgICAgLy8gSWYgdGhlIHNpemUgb2YgYW55IG9mIHRoZXNlIHR3byBkYXRhc2V0IGlzIGluZmluaXR5LCBuZXcgc2l6ZSBpc1xuICAgICAgLy8gaW5maW5pdHkuXG4gICAgICBzaXplID0gSW5maW5pdHk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNpemUgIT0gbnVsbCAmJiBkYXRhc2V0LnNpemUgIT0gbnVsbCkge1xuICAgICAgLy8gSWYgdGhlIHNpemUgb2YgYm90aCBkYXRhc2V0cyBhcmUga25vd24gYW5kIG5vdCBpbmZpbml0eSwgbmV3IHNpemUgaXNcbiAgICAgIC8vIHN1bSB0aGUgc2l6ZSBvZiB0aGVzZSB0d28gZGF0YXNldHMuXG4gICAgICBzaXplID0gdGhpcy5zaXplICsgZGF0YXNldC5zaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBuZWl0aGVyIG9mIHRoZXNlIHR3byBkYXRhc2V0cyBoYXMgaW5maW5pdGUgc2l6ZSBhbmQgYW55IG9mIHRoZXNlIHR3b1xuICAgICAgLy8gZGF0YXNldHMnIHNpemUgaXMgbnVsbCwgdGhlIG5ldyBzaXplIGlzIG51bGwuXG4gICAgICBzaXplID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFzZXRGcm9tSXRlcmF0b3JGbihcbiAgICAgICAgYXN5bmMgKCkgPT5cbiAgICAgICAgICAgIChhd2FpdCBiYXNlLml0ZXJhdG9yKCkpLmNvbmNhdGVuYXRlKGF3YWl0IGRhdGFzZXQuaXRlcmF0b3IoKSksXG4gICAgICAgIHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbHRlcnMgdGhpcyBkYXRhc2V0IGFjY29yZGluZyB0byBgcHJlZGljYXRlYC5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgYSA9IHRmLmRhdGEuYXJyYXkoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSlcbiAgICogICAuZmlsdGVyKHggPT4geCUyID09PSAwKTtcbiAgICogYXdhaXQgYS5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcHJlZGljYXRlIEEgZnVuY3Rpb24gbWFwcGluZyBhIGRhdGFzZXQgZWxlbWVudCB0byBhIGJvb2xlYW4gb3IgYVxuICAgKiBgUHJvbWlzZWAgZm9yIG9uZS5cbiAgICpcbiAgICogQHJldHVybnMgQSBgRGF0YXNldGAgb2YgZWxlbWVudHMgZm9yIHdoaWNoIHRoZSBwcmVkaWNhdGUgd2FzIHRydWUuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdEYXRhJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgZmlsdGVyKHByZWRpY2F0ZTogKHZhbHVlOiBUKSA9PiBib29sZWFuKTogRGF0YXNldDxUPiB7XG4gICAgY29uc3QgYmFzZSA9IHRoaXM7XG4gICAgbGV0IHNpemU7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgIC8vIElmIHRoZSBzaXplIG9mIHRoaXMgZGF0YXNldCBpcyBpbmZpbml0eSwgbmV3IHNpemUgaXMgaW5maW5pdHlcbiAgICAgIHNpemUgPSBJbmZpbml0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhpcyBkYXRhc2V0IGhhcyBsaW1pdGVkIGVsZW1lbnRzLCBuZXcgc2l6ZSBpcyBudWxsIGJlY2F1c2UgaXQgbWlnaHRcbiAgICAgIC8vIGV4aGF1c3RlZCByYW5kb21seS5cbiAgICAgIHNpemUgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YXNldEZyb21JdGVyYXRvckZuKGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiAoYXdhaXQgYmFzZS5pdGVyYXRvcigpKS5maWx0ZXIoeCA9PiB0Zi50aWR5KCgpID0+IHByZWRpY2F0ZSh4KSkpO1xuICAgIH0sIHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gZXZlcnkgZWxlbWVudCBvZiB0aGUgZGF0YXNldC5cbiAgICpcbiAgICogQWZ0ZXIgdGhlIGZ1bmN0aW9uIGlzIGFwcGxpZWQgdG8gYSBkYXRhc2V0IGVsZW1lbnQsIGFueSBUZW5zb3JzIGNvbnRhaW5lZFxuICAgKiB3aXRoaW4gdGhhdCBlbGVtZW50IGFyZSBkaXNwb3NlZC5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgYSA9IHRmLmRhdGEuYXJyYXkoWzEsIDIsIDNdKTtcbiAgICogYXdhaXQgYS5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gZiBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggZGF0YXNldCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIGFmdGVyIGFsbCBlbGVtZW50cyBoYXZlIGJlZW4gcHJvY2Vzc2VkLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGFzeW5jIGZvckVhY2hBc3luYyhmOiAoaW5wdXQ6IFQpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaXRlcmF0b3IoKSkuZm9yRWFjaEFzeW5jKGYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgdGhpcyBkYXRhc2V0IHRocm91Z2ggYSAxLXRvLTEgdHJhbnNmb3JtLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBhID0gdGYuZGF0YS5hcnJheShbMSwgMiwgM10pLm1hcCh4ID0+IHgqeCk7XG4gICAqIGF3YWl0IGEuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHRyYW5zZm9ybSBBIGZ1bmN0aW9uIG1hcHBpbmcgYSBkYXRhc2V0IGVsZW1lbnQgdG8gYSB0cmFuc2Zvcm1lZFxuICAgKiAgIGRhdGFzZXQgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybnMgQSBgRGF0YXNldGAgb2YgdHJhbnNmb3JtZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdEYXRhJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgbWFwPE8gZXh0ZW5kcyB0Zi5UZW5zb3JDb250YWluZXI+KHRyYW5zZm9ybTogKHZhbHVlOiBUKSA9PiBPKTogRGF0YXNldDxPPiB7XG4gICAgY29uc3QgYmFzZSA9IHRoaXM7XG4gICAgcmV0dXJuIGRhdGFzZXRGcm9tSXRlcmF0b3JGbihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gKGF3YWl0IGJhc2UuaXRlcmF0b3IoKSkubWFwKHggPT4gdGYudGlkeSgoKSA9PiB0cmFuc2Zvcm0oeCkpKTtcbiAgICB9LCB0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgdGhpcyBkYXRhc2V0IHRocm91Z2ggYW4gYXN5bmMgMS10by0xIHRyYW5zZm9ybS5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgYSA9XG4gICAqICB0Zi5kYXRhLmFycmF5KFsxLCAyLCAzXSkubWFwQXN5bmMoeCA9PiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKXtcbiAgICogICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAqICAgICAgcmVzb2x2ZSh4ICogeCk7XG4gICAqICAgIH0sIE1hdGgucmFuZG9tKCkqMTAwMCArIDUwMCk7XG4gICAqICB9KSk7XG4gICAqIGNvbnNvbGUubG9nKGF3YWl0IGEudG9BcnJheSgpKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB0cmFuc2Zvcm0gQSBmdW5jdGlvbiBtYXBwaW5nIGEgZGF0YXNldCBlbGVtZW50IHRvIGEgYFByb21pc2VgIGZvciBhXG4gICAqICAgdHJhbnNmb3JtZWQgZGF0YXNldCBlbGVtZW50LiAgVGhpcyB0cmFuc2Zvcm0gaXMgcmVzcG9uc2libGUgZm9yIGRpc3Bvc2luZ1xuICAgKiAgIGFueSBpbnRlcm1lZGlhdGUgYFRlbnNvcmBzLCBpLmUuIGJ5IHdyYXBwaW5nIGl0cyBjb21wdXRhdGlvbiBpblxuICAgKiAgIGB0Zi50aWR5KClgOyB0aGF0IGNhbm5vdCBiZSBhdXRvbWF0ZWQgaGVyZSAoYXMgaXQgaXMgaW4gdGhlIHN5bmNocm9ub3VzXG4gICAqICAgYG1hcCgpYCBjYXNlKS5cbiAgICpcbiAgICogQHJldHVybnMgQSBgRGF0YXNldGAgb2YgdHJhbnNmb3JtZWQgZWxlbWVudHMuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdEYXRhJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgbWFwQXN5bmM8TyBleHRlbmRzIHRmLlRlbnNvckNvbnRhaW5lcj4odHJhbnNmb3JtOiAodmFsdWU6IFQpID0+IFByb21pc2U8Tz4pOlxuICAgICAgRGF0YXNldDxPPiB7XG4gICAgY29uc3QgYmFzZSA9IHRoaXM7XG4gICAgcmV0dXJuIGRhdGFzZXRGcm9tSXRlcmF0b3JGbihhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gKGF3YWl0IGJhc2UuaXRlcmF0b3IoKSkubWFwQXN5bmModHJhbnNmb3JtKTtcbiAgICB9LCB0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqICBDcmVhdGVzIGEgYERhdGFzZXRgIHRoYXQgcHJlZmV0Y2hlcyBlbGVtZW50cyBmcm9tIHRoaXMgZGF0YXNldC5cbiAgICpcbiAgICogQHBhcmFtIGJ1ZmZlclNpemU6IEFuIGludGVnZXIgc3BlY2lmeWluZyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGJlXG4gICAqICAgcHJlZmV0Y2hlZC5cbiAgICogQHJldHVybnMgQSBgRGF0YXNldGAuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdEYXRhJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgcHJlZmV0Y2goYnVmZmVyU2l6ZTogbnVtYmVyKTogRGF0YXNldDxUPiB7XG4gICAgaWYgKGJ1ZmZlclNpemUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgJ2BEYXRhc2V0LnByZWZldGNoKClgIHJlcXVpcmVzIGJ1ZmZlclNpemUgdG8gYmUgc3BlY2lmaWVkLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGJhc2UgPSB0aGlzO1xuICAgIHJldHVybiBkYXRhc2V0RnJvbUl0ZXJhdG9yRm4oXG4gICAgICAgIGFzeW5jICgpID0+IChhd2FpdCBiYXNlLml0ZXJhdG9yKCkpLnByZWZldGNoKGJ1ZmZlclNpemUpLCB0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGVhdHMgdGhpcyBkYXRhc2V0IGBjb3VudGAgdGltZXMuXG4gICAqXG4gICAqIE5PVEU6IElmIHRoaXMgZGF0YXNldCBpcyBhIGZ1bmN0aW9uIG9mIGdsb2JhbCBzdGF0ZSAoZS5nLiBhIHJhbmRvbSBudW1iZXJcbiAgICogZ2VuZXJhdG9yKSwgdGhlbiBkaWZmZXJlbnQgcmVwZXRpdGlvbnMgbWF5IHByb2R1Y2UgZGlmZmVyZW50IGVsZW1lbnRzLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBhID0gdGYuZGF0YS5hcnJheShbMSwgMiwgM10pLnJlcGVhdCgzKTtcbiAgICogYXdhaXQgYS5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gY291bnQ6IChPcHRpb25hbCkgQW4gaW50ZWdlciwgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgdGltZXNcbiAgICogICB0aGUgZGF0YXNldCBzaG91bGQgYmUgcmVwZWF0ZWQuIFRoZSBkZWZhdWx0IGJlaGF2aW9yIChpZiBgY291bnRgIGlzXG4gICAqICAgYHVuZGVmaW5lZGAgb3IgbmVnYXRpdmUpIGlzIGZvciB0aGUgZGF0YXNldCBiZSByZXBlYXRlZCBpbmRlZmluaXRlbHkuXG4gICAqIEByZXR1cm5zIEEgYERhdGFzZXRgLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIHJlcGVhdChjb3VudD86IG51bWJlcik6IERhdGFzZXQ8VD4ge1xuICAgIGNvbnN0IGJhc2UgPSB0aGlzO1xuICAgIGxldCBzaXplO1xuICAgIGlmICh0aGlzLnNpemUgIT0gbnVsbCAmJiBjb3VudCA+IDApIHtcbiAgICAgIC8vIElmIHRoaXMgZGF0YXNldCBoYXMgc2l6ZSBhbmQgY291bnQgaXMgcG9zaXRpdmUsIG5ldyBzaXplIGlzIGN1cnJlbnRcbiAgICAgIC8vIHNpemUgbXVsdGlwbHkgY291bnQuIFRoaXMgYWxzbyBjb3ZlcnMgdGhlIGNhc2UgdGhhdCBjdXJyZW50IHNpemUgaXNcbiAgICAgIC8vIGluZmluaXR5LlxuICAgICAgc2l6ZSA9IHRoaXMuc2l6ZSAqIGNvdW50O1xuICAgIH0gZWxzZSBpZiAoY291bnQgPT09IDApIHtcbiAgICAgIC8vIElmIGNvdW50IGlzIDAsIG5ldyBzaXplIGlzIDAuXG4gICAgICBzaXplID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSAhPSBudWxsICYmIChjb3VudCA9PT0gdW5kZWZpbmVkIHx8IGNvdW50IDwgMCkpIHtcbiAgICAgIC8vIElmIHRoaXMgZGF0YXNldCBoYXMgc2l6ZSBhbmQgY291bnQgaXMgdW5kZWZpbmVkIG9yIG5lZ2F0aXZlLCB0aGVcbiAgICAgIC8vIGRhdGFzZXQgd2lsbCBiZSByZXBlYXRlZCBpbmRlZmluaXRlbHkgYW5kIG5ldyBzaXplIGlzIGluZmluaXR5LlxuICAgICAgc2l6ZSA9IEluZmluaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgc2l6ZSBvZiB0aGlzIGRhdGFzZXQgaXMgbnVsbCwgdGhlIG5ldyBkYXRhc2V0J3Mgc2l6ZSBpcyBudWxsLlxuICAgICAgc2l6ZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkYXRhc2V0RnJvbUl0ZXJhdG9yRm4oYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgaXRlcmF0b3JJdGVyYXRvciA9IGl0ZXJhdG9yRnJvbUZ1bmN0aW9uKFxuICAgICAgICAgIGFzeW5jICgpID0+ICh7dmFsdWU6IGF3YWl0IGJhc2UuaXRlcmF0b3IoKSwgZG9uZTogZmFsc2V9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGcm9tQ29uY2F0ZW5hdGVkKGl0ZXJhdG9ySXRlcmF0b3IudGFrZShjb3VudCkpO1xuICAgIH0sIHNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBgRGF0YXNldGAgdGhhdCBza2lwcyBgY291bnRgIGluaXRpYWwgZWxlbWVudHMgZnJvbSB0aGlzIGRhdGFzZXQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGEgPSB0Zi5kYXRhLmFycmF5KFsxLCAyLCAzLCA0LCA1LCA2XSkuc2tpcCgzKTtcbiAgICogYXdhaXQgYS5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gY291bnQ6IFRoZSBudW1iZXIgb2YgZWxlbWVudHMgb2YgdGhpcyBkYXRhc2V0IHRoYXQgc2hvdWxkIGJlIHNraXBwZWRcbiAgICogICB0byBmb3JtIHRoZSBuZXcgZGF0YXNldC4gIElmIGBjb3VudGAgaXMgZ3JlYXRlciB0aGFuIHRoZSBzaXplIG9mIHRoaXNcbiAgICogICBkYXRhc2V0LCB0aGUgbmV3IGRhdGFzZXQgd2lsbCBjb250YWluIG5vIGVsZW1lbnRzLiAgSWYgYGNvdW50YFxuICAgKiAgIGlzIGB1bmRlZmluZWRgIG9yIG5lZ2F0aXZlLCBza2lwcyB0aGUgZW50aXJlIGRhdGFzZXQuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgYERhdGFzZXRgLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIHNraXAoY291bnQ6IG51bWJlcik6IERhdGFzZXQ8VD4ge1xuICAgIGNvbnN0IGJhc2UgPSB0aGlzO1xuICAgIGxldCBzaXplO1xuICAgIGlmICh0aGlzLnNpemUgIT0gbnVsbCAmJiBjb3VudCA+PSAwICYmIHRoaXMuc2l6ZSA+PSBjb3VudCkge1xuICAgICAgLy8gSWYgdGhlIHNpemUgb2YgdGhpcyBkYXRhc2V0IGlzIGdyZWF0ZXIgdGhhbiBjb3VudCwgdGhlIG5ldyBkYXRhc2V0J3NcbiAgICAgIC8vIHNpemUgaXMgY3VycmVudCBzaXplIG1pbnVzIHNraXBwZWQgc2l6ZS5UaGlzIGFsc28gY292ZXJzIHRoZSBjYXNlIHRoYXRcbiAgICAgIC8vIGN1cnJlbnQgc2l6ZSBpcyBpbmZpbml0eS5cbiAgICAgIHNpemUgPSB0aGlzLnNpemUgLSBjb3VudDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aGlzLnNpemUgIT0gbnVsbCAmJlxuICAgICAgICAodGhpcy5zaXplIDwgY291bnQgfHwgY291bnQgPT09IHVuZGVmaW5lZCB8fCBjb3VudCA8IDApKSB7XG4gICAgICAvLyBJZiB0aGUgc2l6ZSBvZiB0aGlzIGRhdGFzZXQgaXMgc21hbGxlciB0aGFuIGNvdW50LCBvciBjb3VudCBpc1xuICAgICAgLy8gdW5kZWZpbmVkIG9yIG5lZ2F0aXZlLCBza2lwcyB0aGUgZW50aXJlIGRhdGFzZXQgYW5kIHRoZSBuZXcgc2l6ZSBpcyAwLlxuICAgICAgc2l6ZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBzaXplIG9mIHRoaXMgZGF0YXNldCBpcyBudWxsLCB0aGUgbmV3IGRhdGFzZXQncyBzaXplIGlzIG51bGwuXG4gICAgICBzaXplID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFzZXRGcm9tSXRlcmF0b3JGbihcbiAgICAgICAgYXN5bmMgKCkgPT4gKGF3YWl0IGJhc2UuaXRlcmF0b3IoKSkuc2tpcChjb3VudCksIHNpemUpO1xuICB9XG5cbiAgLy8gVE9ETyhzb2VyZ2VsKTogZGVlcCBzaGFyZGVkIHNodWZmbGUsIHdoZXJlIHN1cHBvcnRlZFxuXG4gIHN0YXRpYyByZWFkb25seSBNQVhfQlVGRkVSX1NJWkUgPSAxMDAwMDtcblxuICAvKipcbiAgICogUHNldWRvcmFuZG9tbHkgc2h1ZmZsZXMgdGhlIGVsZW1lbnRzIG9mIHRoaXMgZGF0YXNldC4gVGhpcyBpcyBkb25lIGluIGFcbiAgICogc3RyZWFtaW5nIG1hbm5lciwgYnkgc2FtcGxpbmcgZnJvbSBhIGdpdmVuIG51bWJlciBvZiBwcmVmZXRjaGVkIGVsZW1lbnRzLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBhID0gdGYuZGF0YS5hcnJheShbMSwgMiwgMywgNCwgNSwgNl0pLnNodWZmbGUoMyk7XG4gICAqIGF3YWl0IGEuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGJ1ZmZlclNpemU6IEFuIGludGVnZXIgc3BlY2lmeWluZyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhpc1xuICAgKiAgIGRhdGFzZXQgZnJvbSB3aGljaCB0aGUgbmV3IGRhdGFzZXQgd2lsbCBzYW1wbGUuXG4gICAqIEBwYXJhbSBzZWVkOiAoT3B0aW9uYWwpIEFuIGludGVnZXIgc3BlY2lmeWluZyB0aGUgcmFuZG9tIHNlZWQgdGhhdCB3aWxsXG4gICAqICAgYmUgdXNlZCB0byBjcmVhdGUgdGhlIGRpc3RyaWJ1dGlvbi5cbiAgICogQHBhcmFtIHJlc2h1ZmZsZUVhY2hJdGVyYXRpb246IChPcHRpb25hbCkgQSBib29sZWFuLCB3aGljaCBpZiB0cnVlXG4gICAqICAgaW5kaWNhdGVzIHRoYXQgdGhlIGRhdGFzZXQgc2hvdWxkIGJlIHBzZXVkb3JhbmRvbWx5IHJlc2h1ZmZsZWQgZWFjaCB0aW1lXG4gICAqICAgaXQgaXMgaXRlcmF0ZWQgb3Zlci4gSWYgZmFsc2UsIGVsZW1lbnRzIHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIHNhbWVcbiAgICogICBzaHVmZmxlZCBvcmRlciBvbiBlYWNoIGl0ZXJhdGlvbi4gKERlZmF1bHRzIHRvIGB0cnVlYC4pXG4gICAqIEByZXR1cm5zIEEgYERhdGFzZXRgLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIHNodWZmbGUoYnVmZmVyU2l6ZTogbnVtYmVyLCBzZWVkPzogc3RyaW5nLCByZXNodWZmbGVFYWNoSXRlcmF0aW9uID0gdHJ1ZSk6XG4gICAgICBEYXRhc2V0PFQ+IHtcbiAgICBpZiAoYnVmZmVyU2l6ZSA9PSBudWxsIHx8IGJ1ZmZlclNpemUgPCAwKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnYERhdGFzZXQuc2h1ZmZsZSgpYCByZXF1aXJlcyBidWZmZXJTaXplIHRvIGJlIHNwZWNpZmllZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ2BEYXRhc2V0LnNodWZmbGUoKWAgcmVxdWlyZXMgYnVmZmVyU2l6ZSB0byBiZSBzcGVjaWZpZWQuICAnICtcbiAgICAgICAgICAgICdJZiB5b3VyIGRhdGEgZml0cyBpbiBtYWluIG1lbW9yeSAoZm9yIHJlZ3VsYXIgSlMgb2JqZWN0cyksICcgK1xuICAgICAgICAgICAgJ2FuZC9vciBHUFUgbWVtb3J5IChmb3IgYHRmLlRlbnNvcmBzKSwgY29uc2lkZXIgc2V0dGluZyAnICtcbiAgICAgICAgICAgIGBidWZmZXJTaXplIHRvIHRoZSBkYXRhc2V0IHNpemUgKCR7dGhpcy5zaXplfSBlbGVtZW50cylgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYmFzZSA9IHRoaXM7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZHJhbmRvbS5hbGVhKHNlZWQgfHwgdGYudXRpbC5ub3coKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gZGF0YXNldEZyb21JdGVyYXRvckZuKGFzeW5jICgpID0+IHtcbiAgICAgIGxldCBzZWVkMiA9IHJhbmRvbS5pbnQzMigpO1xuICAgICAgaWYgKHJlc2h1ZmZsZUVhY2hJdGVyYXRpb24pIHtcbiAgICAgICAgc2VlZDIgKz0gcmFuZG9tLmludDMyKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGF3YWl0IGJhc2UuaXRlcmF0b3IoKSkuc2h1ZmZsZShidWZmZXJTaXplLCBzZWVkMi50b1N0cmluZygpKTtcbiAgICB9LCB0aGlzLnNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBgRGF0YXNldGAgd2l0aCBhdCBtb3N0IGBjb3VudGAgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHRoaXNcbiAgICogZGF0YXNldC5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgYSA9IHRmLmRhdGEuYXJyYXkoWzEsIDIsIDMsIDQsIDUsIDZdKS50YWtlKDMpO1xuICAgKiBhd2FpdCBhLmZvckVhY2hBc3luYyhlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBjb3VudDogVGhlIG51bWJlciBvZiBlbGVtZW50cyBvZiB0aGlzIGRhdGFzZXQgdGhhdCBzaG91bGQgYmUgdGFrZW5cbiAgICogICB0byBmb3JtIHRoZSBuZXcgZGF0YXNldC4gIElmIGBjb3VudGAgaXMgYHVuZGVmaW5lZGAgb3IgbmVnYXRpdmUsIG9yIGlmXG4gICAqICAgYGNvdW50YCBpcyBncmVhdGVyIHRoYW4gdGhlIHNpemUgb2YgdGhpcyBkYXRhc2V0LCB0aGUgbmV3IGRhdGFzZXQgd2lsbFxuICAgKiAgIGNvbnRhaW4gYWxsIGVsZW1lbnRzIG9mIHRoaXMgZGF0YXNldC5cbiAgICogQHJldHVybnMgQSBgRGF0YXNldGAuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdEYXRhJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgdGFrZShjb3VudDogbnVtYmVyKTogRGF0YXNldDxUPiB7XG4gICAgY29uc3QgYmFzZSA9IHRoaXM7XG4gICAgbGV0IHNpemU7XG4gICAgaWYgKHRoaXMuc2l6ZSAhPSBudWxsICYmIHRoaXMuc2l6ZSA+IGNvdW50KSB7XG4gICAgICAvLyBJZiB0aGUgc2l6ZSBvZiB0aGlzIGRhdGFzZXQgaXMgZ3JlYXRlciB0aGFuIGNvdW50LCB0aGUgbmV3IGRhdGFzZXQnc1xuICAgICAgLy8gc2l6ZSBpcyBjb3VudC5cbiAgICAgIHNpemUgPSBjb3VudDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2l6ZSAhPSBudWxsICYmIHRoaXMuc2l6ZSA8PSBjb3VudCkge1xuICAgICAgLy8gSWYgdGhlIHNpemUgb2YgdGhpcyBkYXRhc2V0IGlzIGVxdWFsIG9yIHNtYWxsZXIgdGhhbiBjb3VudCwgdGhlIG5ld1xuICAgICAgLy8gZGF0YXNldCdzIHNpemUgaXMgdGhlIHNpemUgb2YgdGhpcyBkYXRhc2V0LlxuICAgICAgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHNpemUgb2YgdGhpcyBkYXRhc2V0IGlzIG51bGwsIHRoZSBuZXcgZGF0YXNldCdzIHNpemUgaXMgbnVsbC5cbiAgICAgIHNpemUgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YXNldEZyb21JdGVyYXRvckZuKFxuICAgICAgICBhc3luYyAoKSA9PiAoYXdhaXQgYmFzZS5pdGVyYXRvcigpKS50YWtlKGNvdW50KSwgc2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBhbGwgZWxlbWVudHMgb2YgdGhpcyBkYXRhc2V0IGludG8gYW4gYXJyYXkuXG4gICAqXG4gICAqIE9idmlvdXNseSB0aGlzIHdpbGwgc3VjY2VlZCBvbmx5IGZvciBzbWFsbCBkYXRhc2V0cyB0aGF0IGZpdCBpbiBtZW1vcnkuXG4gICAqIFVzZWZ1bCBmb3IgdGVzdGluZyBhbmQgZ2VuZXJhbGx5IHNob3VsZCBiZSBhdm9pZGVkIGlmIHBvc3NpYmxlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBhID0gdGYuZGF0YS5hcnJheShbMSwgMiwgMywgNCwgNSwgNl0pO1xuICAgKiBjb25zb2xlLmxvZyhhd2FpdCBhLnRvQXJyYXkoKSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcmV0dXJucyBBIFByb21pc2UgZm9yIGFuIGFycmF5IG9mIGVsZW1lbnRzLCB3aGljaCB3aWxsIHJlc29sdmVcbiAgICogICB3aGVuIGEgbmV3IHN0cmVhbSBoYXMgYmVlbiBvYnRhaW5lZCBhbmQgZnVsbHkgY29uc3VtZWQuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdEYXRhJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgYXN5bmMgdG9BcnJheSgpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSBJbmZpbml0eSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNvbnZlcnQgaW5maW5pdGUgZGF0YSBzdHJlYW0gdG8gYXJyYXkuJyk7XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgdGhpcy5pdGVyYXRvcigpKS50b0FycmF5KCk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBhbGwgZWxlbWVudHMgb2YgdGhpcyBkYXRhc2V0IGludG8gYW4gYXJyYXkgd2l0aCBwcmVmZXRjaGluZyAxMDBcbiAgICogZWxlbWVudHMuIFRoaXMgaXMgdXNlZnVsIGZvciB0ZXN0aW5nLCBiZWNhdXNlIHRoZSBwcmVmZXRjaCBjaGFuZ2VzIHRoZVxuICAgKiBvcmRlciBpbiB3aGljaCB0aGUgUHJvbWlzZXMgYXJlIHJlc29sdmVkIGFsb25nIHRoZSBwcm9jZXNzaW5nIHBpcGVsaW5lLlxuICAgKiBUaGlzIG1heSBoZWxwIGV4cG9zZSBidWdzIHdoZXJlIHJlc3VsdHMgYXJlIGRlcGVuZGVudCBvbiB0aGUgb3JkZXIgb2ZcbiAgICogUHJvbWlzZSByZXNvbHV0aW9uIHJhdGhlciB0aGFuIG9uIHRoZSBsb2dpY2FsIG9yZGVyIG9mIHRoZSBzdHJlYW0gKGkuZS4sXG4gICAqIGR1ZSB0byBoaWRkZW4gbXV0YWJsZSBzdGF0ZSkuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgUHJvbWlzZSBmb3IgYW4gYXJyYXkgb2YgZWxlbWVudHMsIHdoaWNoIHdpbGwgcmVzb2x2ZVxuICAgKiAgIHdoZW4gYSBuZXcgc3RyZWFtIGhhcyBiZWVuIG9idGFpbmVkIGFuZCBmdWxseSBjb25zdW1lZC5cbiAgICovXG4gIGFzeW5jIHRvQXJyYXlGb3JUZXN0KCkge1xuICAgIGlmICh0aGlzLnNpemUgPT09IEluZmluaXR5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY29udmVydCBpbmZpbml0ZSBkYXRhIHN0cmVhbSB0byBhcnJheS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLml0ZXJhdG9yKCkpLnRvQXJyYXlGb3JUZXN0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgRGF0YXNldGAgZGVmaW5lZCBieSBhIHByb3ZpZGVkIGl0ZXJhdG9yKCkgZnVuY3Rpb24uXG4gKlxuICogYGBganNcbiAqIGxldCBpID0gLTE7XG4gKiBjb25zdCBmdW5jID0gKCkgPT5cbiAqICAgICsraSA8IDUgPyB7dmFsdWU6IGksIGRvbmU6IGZhbHNlfSA6IHt2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZX07XG4gKiBjb25zdCBpdGVyID0gdGYuZGF0YS5pdGVyYXRvckZyb21GdW5jdGlvbihmdW5jKTtcbiAqIGNvbnN0IGRzID0gdGYuZGF0YS5kYXRhc2V0RnJvbUl0ZXJhdG9yRm4oaXRlcik7XG4gKiBhd2FpdCBkcy5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhdGFzZXRGcm9tSXRlcmF0b3JGbjxUIGV4dGVuZHMgdGYuVGVuc29yQ29udGFpbmVyPihcbiAgICBpdGVyYXRvckZuOiAoKSA9PiBQcm9taXNlPExhenlJdGVyYXRvcjxUPj4sXG4gICAgc2l6ZTogbnVtYmVyID0gbnVsbCk6IERhdGFzZXQ8VD4ge1xuICByZXR1cm4gbmV3IGNsYXNzIGV4dGVuZHMgRGF0YXNldDxUPiB7XG4gICAgb3ZlcnJpZGUgc2l6ZSA9IHNpemU7XG5cbiAgICAvKlxuICAgICAqIFByb3ZpZGUgYSBuZXcgc3RyZWFtIG9mIGVsZW1lbnRzLiAgTm90ZSB0aGlzIHdpbGwgYWxzbyBzdGFydCBuZXcgc3RyZWFtc1xuICAgICAqIGZyb20gYW55IHVuZGVybHlpbmcgYERhdGFzZXRgcy5cbiAgICAgKi9cbiAgICBhc3luYyBpdGVyYXRvcigpOiBQcm9taXNlPExhenlJdGVyYXRvcjxUPj4ge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm4oKTtcbiAgICB9XG4gIH1cbiAgKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYERhdGFzZXRgIGZyb20gYW4gYXJyYXkgb2YgZWxlbWVudHMuXG4gKlxuICogQ3JlYXRlIGEgRGF0YXNldCBmcm9tIGFuIGFycmF5IG9mIG9iamVjdHM6XG4gKiBgYGBqc1xuICogY29uc3QgYSA9IHRmLmRhdGEuYXJyYXkoW3snaXRlbSc6IDF9LCB7J2l0ZW0nOiAyfSwgeydpdGVtJzogM31dKTtcbiAqIGF3YWl0IGEuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICogYGBgXG4gKlxuICogQ3JlYXRlIGEgRGF0YXNldCBmcm9tIGFuIGFycmF5IG9mIG51bWJlcnM6XG4gKiBgYGBqc1xuICogY29uc3QgYSA9IHRmLmRhdGEuYXJyYXkoWzQsIDUsIDZdKTtcbiAqIGF3YWl0IGEuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICogYGBgXG4gKiBAcGFyYW0gaXRlbXMgQW4gYXJyYXkgb2YgZWxlbWVudHMgdGhhdCB3aWxsIGJlIHBhcnNlZCBhcyBpdGVtcyBpbiBhIGRhdGFzZXQuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0RhdGEnLCBzdWJoZWFkaW5nOiAnQ3JlYXRpb24nLCBuYW1lc3BhY2U6ICdkYXRhJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5PFQgZXh0ZW5kcyB0Zi5UZW5zb3JDb250YWluZXI+KGl0ZW1zOiBUW10pOiBEYXRhc2V0PFQ+IHtcbiAgcmV0dXJuIGRhdGFzZXRGcm9tSXRlcmF0b3JGbihcbiAgICAgIGFzeW5jICgpID0+IGl0ZXJhdG9yRnJvbUl0ZW1zKGl0ZW1zKSwgaXRlbXMubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgRGF0YXNldGAgYnkgemlwcGluZyB0b2dldGhlciBhbiBhcnJheSwgZGljdCwgb3IgbmVzdGVkXG4gKiBzdHJ1Y3R1cmUgb2YgYERhdGFzZXRgcyAoYW5kIHBlcmhhcHMgYWRkaXRpb25hbCBjb25zdGFudHMpLlxuICogVGhlIHVuZGVybHlpbmcgZGF0YXNldHMgbXVzdCBwcm92aWRlIGVsZW1lbnRzIGluIGEgY29uc2lzdGVudCBvcmRlciBzdWNoIHRoYXRcbiAqIHRoZXkgY29ycmVzcG9uZC5cbiAqXG4gKiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSByZXN1bHRpbmcgZGF0YXNldCBpcyB0aGUgc2FtZSBhcyB0aGUgc2l6ZSBvZlxuICogdGhlIHNtYWxsZXN0IGRhdGFzZXQgaW4gZGF0YXNldHMuXG4gKlxuICogVGhlIG5lc3RlZCBzdHJ1Y3R1cmUgb2YgdGhlIGBkYXRhc2V0c2AgYXJndW1lbnQgZGV0ZXJtaW5lcyB0aGVcbiAqIHN0cnVjdHVyZSBvZiBlbGVtZW50cyBpbiB0aGUgcmVzdWx0aW5nIGl0ZXJhdG9yLlxuICpcbiAqIE5vdGUgdGhpcyBtZWFucyB0aGF0LCBnaXZlbiBhbiBhcnJheSBvZiB0d28gZGF0YXNldHMgdGhhdCBwcm9kdWNlIGRpY3RcbiAqIGVsZW1lbnRzLCB0aGUgcmVzdWx0IGlzIGEgZGF0YXNldCB0aGF0IHByb2R1Y2VzIGVsZW1lbnRzIHRoYXQgYXJlIGFycmF5c1xuICogb2YgdHdvIGRpY3RzOlxuICpcbiAqIFppcCBhbiBhcnJheSBvZiBkYXRhc2V0czpcbiAqIGBgYGpzXG4gKiBjb25zb2xlLmxvZygnWmlwIHR3byBkYXRhc2V0cyBvZiBvYmplY3RzOicpO1xuICogY29uc3QgZHMxID0gdGYuZGF0YS5hcnJheShbe2E6IDF9LCB7YTogMn0sIHthOiAzfV0pO1xuICogY29uc3QgZHMyID0gdGYuZGF0YS5hcnJheShbe2I6IDR9LCB7YjogNX0sIHtiOiA2fV0pO1xuICogY29uc3QgZHMzID0gdGYuZGF0YS56aXAoW2RzMSwgZHMyXSk7XG4gKiBhd2FpdCBkczMuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpKTtcbiAqXG4gKiAvLyBJZiB0aGUgZ29hbCBpcyB0byBtZXJnZSB0aGUgZGljdHMgaW4gb3JkZXIgdG8gcHJvZHVjZSBlbGVtZW50cyBsaWtlXG4gKiAvLyB7YTogLi4uLCBiOiAuLi59LCB0aGlzIHJlcXVpcmVzIGEgc2Vjb25kIHN0ZXAgc3VjaCBhczpcbiAqIGNvbnNvbGUubG9nKCdNZXJnZSB0aGUgb2JqZWN0czonKTtcbiAqIGNvbnN0IGRzNCA9IGRzMy5tYXAoeCA9PiB7cmV0dXJuIHthOiB4WzBdLmEsIGI6IHhbMV0uYn19KTtcbiAqIGF3YWl0IGRzNC5mb3JFYWNoQXN5bmMoZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKiBgYGBcbiAqXG4gKiBaaXAgYSBkaWN0IG9mIGRhdGFzZXRzOlxuICogYGBganNcbiAqIGNvbnN0IGEgPSB0Zi5kYXRhLmFycmF5KFt7YTogMX0sIHthOiAyfSwge2E6IDN9XSk7XG4gKiBjb25zdCBiID0gdGYuZGF0YS5hcnJheShbe2I6IDR9LCB7YjogNX0sIHtiOiA2fV0pO1xuICogY29uc3QgYyA9IHRmLmRhdGEuemlwKHtjOiBhLCBkOiBifSk7XG4gKiBhd2FpdCBjLmZvckVhY2hBc3luYyhlID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUpKSk7XG4gKiBgYGBcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdPcGVyYXRpb25zJywgbmFtZXNwYWNlOiAnZGF0YSd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6aXA8TyBleHRlbmRzIHRmLlRlbnNvckNvbnRhaW5lcj4oZGF0YXNldHM6IERhdGFzZXRDb250YWluZXIpOlxuICAgIERhdGFzZXQ8Tz4ge1xuICAvLyBtYW51YWxseSB0eXBlLWNoZWNrIHRoZSBhcmd1bWVudCBmb3IgSlMgdXNlcnNcbiAgaWYgKCFpc0l0ZXJhYmxlKGRhdGFzZXRzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGFyZ3VtZW50IHRvIHppcCgpIG11c3QgYmUgYW4gb2JqZWN0IG9yIGFycmF5LicpO1xuICB9XG4gIGxldCBzaXplO1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhc2V0cykpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzaXplID0gc2l6ZSA9PSBudWxsID8gKGRhdGFzZXRzW2ldIGFzIERhdGFzZXQ8Tz4pLnNpemUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKHNpemUsIChkYXRhc2V0c1tpXSBhcyBEYXRhc2V0PE8+KS5zaXplKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGF0YXNldHMgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICBmb3IgKGNvbnN0IGRzIGluIGRhdGFzZXRzKSB7XG4gICAgICBzaXplID0gc2l6ZSA9PSBudWxsID8gKGRhdGFzZXRzW2RzXSBhcyBEYXRhc2V0PE8+KS5zaXplIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihzaXplLCAoZGF0YXNldHNbZHNdIGFzIERhdGFzZXQ8Tz4pLnNpemUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YXNldEZyb21JdGVyYXRvckZuPE8+KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdHJlYW1zID0gYXdhaXQgZGVlcE1hcEFuZEF3YWl0QWxsKGRhdGFzZXRzLCBkID0+IHtcbiAgICAgIGlmIChkIGluc3RhbmNlb2YgRGF0YXNldCkge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBkLml0ZXJhdG9yKCksIHJlY3Vyc2U6IGZhbHNlfTtcbiAgICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZShkKSkge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCByZWN1cnNlOiB0cnVlfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdMZWF2ZXMgb2YgdGhlIHN0cnVjdHVyZSBwYXNzZWQgdG8gemlwKCkgbXVzdCBiZSBEYXRhc2V0cywgJyArXG4gICAgICAgICAgICAnbm90IHByaW1pdGl2ZXMuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRnJvbVppcHBlZDxPPihzdHJlYW1zLCBaaXBNaXNtYXRjaE1vZGUuU0hPUlRFU1QpO1xuICB9LCBzaXplKTtcbn1cblxuLyoqXG4gKiBBIHppcCBmdW5jdGlvbiBmb3IgdXNlIHdpdGggZGVlcFppcCwgcGFzc2VkIHZpYSB0aGUgY29sdW1uTWFqb3JCYXRjaCBjYWxsLlxuICpcbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgaWRlbnRpY2FsbHktc3RydWN0dXJlZCBuZXN0ZWQgZWxlbWVudHMgYW5kIGVpdGhlciBiYXRjaGVzXG4gKiB0aGVtIChpZiB0aGV5IGFyZSBwcmltaXRpdmVzLCBudW1lcmljIGFycmF5cywgb3IgVGVuc29ycykgb3IgcmVxdWVzdHNcbiAqIHJlY3Vyc2lvbiAoaWYgbm90KS5cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZnVuY3Rpb24gZGVlcEJhdGNoQ29uY2F0KHJvd3M6IGFueVtdKTogRGVlcE1hcFJlc3VsdCB7XG4gIGlmIChyb3dzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyB1c2UgdGhlIGZpcnN0IGl0ZW0gdG8gZGVjaWRlIHdoZXRoZXIgdG8gcmVjdXJzZSBvciBiYXRjaCBoZXJlLlxuICBjb25zdCBleGFtcGxlUm93ID0gcm93c1swXTtcblxuICBpZiAoY2FuVGVuc29yaWZ5KGV4YW1wbGVSb3cpKSB7XG4gICAgLy8gcm93cyBpcyBhbiBhcnJheSBvZiBwcmltaXRpdmVzLCBUZW5zb3JzLCBvciBhcnJheXMuICBCYXRjaCB0aGVtLlxuICAgIGNvbnN0IHZhbHVlID0gYmF0Y2hDb25jYXQocm93cyk7XG4gICAgcmV0dXJuIHt2YWx1ZSwgcmVjdXJzZTogZmFsc2V9O1xuICB9XG5cbiAgLy8gdGhlIGV4YW1wbGUgcm93IGlzIGFuIG9iamVjdCwgc28gcmVjdXJzZSBpbnRvIGl0LlxuICByZXR1cm4ge3ZhbHVlOiBudWxsLCByZWN1cnNlOiB0cnVlfTtcbn1cblxuLyoqXG4gKiBBc3NlbWJsZXMgYSBsaXN0IG9mIHNhbWUtc2hhcGVkIG51bWJlcnMsIG51bWJlciBhcnJheXMsIG9yIFRlbnNvcnNcbiAqIGludG8gYSBzaW5nbGUgbmV3IFRlbnNvciB3aGVyZSBheGlzIDAgaXMgdGhlIGJhdGNoIGRpbWVuc2lvbi5cbiAqL1xuZnVuY3Rpb24gYmF0Y2hDb25jYXQ8VCBleHRlbmRzKFRlbnNvckxpa2UgfCB0Zi5UZW5zb3IpPihhcnJheXM6IFRbXSk6XG4gICAgdGYuVGVuc29yIHtcbiAgaWYgKGFycmF5cy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBXZSBjYW4ndCByZXR1cm4gYW4gZW1wdHkgVGVuc29yIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyB0aGUgZWxlbWVudCBzaGFwZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhblxcJ3QgbWFrZSBhIGJhdGNoIG9mIHplcm8gZWxlbWVudHMuJyk7XG4gIH1cblxuICBpZiAoYXJyYXlzWzBdIGluc3RhbmNlb2YgdGYuVGVuc29yKSB7XG4gICAgLy8gSW5wdXQgaXMgYW4gYXJyYXkgb2YgVGVuc29yc1xuICAgIHJldHVybiB0Zi5zdGFjayhhcnJheXMgYXMgdGYuVGVuc29yW10pO1xuICB9IGVsc2Uge1xuICAgIC8vIElucHV0IGlzIGEgcG9zc2libHktbmVzdGVkIGFycmF5IG9mIG51bWJlcnMuXG4gICAgcmV0dXJuIHRmLnRlbnNvcihhcnJheXMgYXMgVGVuc29yTGlrZSk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/text_line_dataset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "TextLineDataset",
    ()=>TextLineDataset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/dataset.js [app-client] (ecmascript)");
;
class TextLineDataset extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dataset"] {
    /**
     * Create a `TextLineDataset`.
     *
     * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
     */ constructor(input){
        super();
        this.input = input;
    }
    async iterator() {
        const inputIterator = await this.input.iterator();
        const utf8Iterator = inputIterator.decodeUTF8();
        const lineIterator = utf8Iterator.split('\n').map((line)=>{
            // Windows/DOS format text file has extra line breaker at the end of line.
            if (line.endsWith('\r')) {
                line = line.slice(0, -1);
            }
            return line;
        });
        return lineIterator;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dF9saW5lX2RhdGFzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWRhdGEvc3JjL2RhdGFzZXRzL3RleHRfbGluZV9kYXRhc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUluQzs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGVBQWdCLFNBQVEsT0FBZTtJQUNsRDs7OztPQUlHO0lBQ0gsWUFBK0IsS0FBaUI7UUFDOUMsS0FBSyxFQUFFLENBQUM7UUFEcUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUVoRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hELE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZELDBFQUEwRTtZQUMxRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RGF0YXNldH0gZnJvbSAnLi4vZGF0YXNldCc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHtMYXp5SXRlcmF0b3J9IGZyb20gJy4uL2l0ZXJhdG9ycy9sYXp5X2l0ZXJhdG9yJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcG90ZW50aWFsbHkgbGFyZ2UgY29sbGVjdGlvbiBvZiB0ZXh0IGxpbmVzLlxuICpcbiAqIFRoZSByZXN1bHRzIGFyZSBub3QgYmF0Y2hlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRMaW5lRGF0YXNldCBleHRlbmRzIERhdGFzZXQ8c3RyaW5nPiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBgVGV4dExpbmVEYXRhc2V0YC5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IEEgYERhdGFTb3VyY2VgIHByb3ZpZGluZyBhIGNodW5rZWQsIFVURjgtZW5jb2RlZCBieXRlIHN0cmVhbS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBpbnB1dDogRGF0YVNvdXJjZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhc3luYyBpdGVyYXRvcigpOiBQcm9taXNlPExhenlJdGVyYXRvcjxzdHJpbmc+PiB7XG4gICAgY29uc3QgaW5wdXRJdGVyYXRvciA9IGF3YWl0IHRoaXMuaW5wdXQuaXRlcmF0b3IoKTtcbiAgICBjb25zdCB1dGY4SXRlcmF0b3IgPSBpbnB1dEl0ZXJhdG9yLmRlY29kZVVURjgoKTtcbiAgICBjb25zdCBsaW5lSXRlcmF0b3IgPSB1dGY4SXRlcmF0b3Iuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IHtcbiAgICAgIC8vIFdpbmRvd3MvRE9TIGZvcm1hdCB0ZXh0IGZpbGUgaGFzIGV4dHJhIGxpbmUgYnJlYWtlciBhdCB0aGUgZW5kIG9mIGxpbmUuXG4gICAgICBpZiAobGluZS5lbmRzV2l0aCgnXFxyJykpIHtcbiAgICAgICAgbGluZSA9IGxpbmUuc2xpY2UoMCwgLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpbmVJdGVyYXRvcjtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/csv_dataset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "CSVDataset",
    ()=>CSVDataset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$text_line_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/text_line_dataset.js [app-client] (ecmascript)");
;
;
;
const CODE_QUOTE = '"';
const STATE_OUT = Symbol('out');
const STATE_FIELD = Symbol('field');
const STATE_QUOTE = Symbol('quote');
const STATE_QUOTE_AFTER_QUOTE = Symbol('quoteafterquote');
const STATE_WITHIN_QUOTE_IN_QUOTE = Symbol('quoteinquote');
class CSVDataset extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dataset"] {
    /**
     * Returns column names of the csv dataset. If `configuredColumnsOnly` is
     * true, return column names in `columnConfigs`. If `configuredColumnsOnly` is
     * false and `columnNames` is provided, `columnNames`. If
     * `configuredColumnsOnly` is false and `columnNames` is not provided, return
     * all column names parsed from the csv file. For example usage please go to
     * `tf.data.csv`.
     *
     * @doc {heading: 'Data', subheading: 'Classes'}
     */ async columnNames() {
        if (!this.columnNamesValidated) {
            await this.setColumnNames();
        }
        return this.configuredColumnsOnly ? Object.keys(this.columnConfigs) : this.fullColumnNames;
    }
    /* 1) If `columnNames` is provided as string[], use this string[] as output
     * keys in corresponding order. The length must match the number of inferred
     * columns if `hasHeader` is true .
     * 2) If `columnNames` is not provided, parse header line as `columnNames` if
     * hasHeader is true. If `hasHeader` is false, throw an error.
     * 3) If `columnConfigs` is provided, all the keys in `columnConfigs` must
     * exist in parsed `columnNames`.
     */ async setColumnNames() {
        const columnNamesFromFile = await this.maybeReadHeaderLine();
        if (!this.fullColumnNames && !columnNamesFromFile) {
            // Throw an error if columnNames is not provided and no header line.
            throw new Error('Column names must be provided if there is no header line.');
        } else if (this.fullColumnNames && columnNamesFromFile) {
            // Check provided columnNames match header line.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(columnNamesFromFile.length === this.fullColumnNames.length, ()=>'The length of provided columnNames (' + this.fullColumnNames.length.toString() + ') does not match the length of the header line read from ' + 'file (' + columnNamesFromFile.length.toString() + ').');
        }
        if (!this.fullColumnNames) {
            this.fullColumnNames = columnNamesFromFile;
        }
        // Check if there are duplicate column names.
        const counts = this.fullColumnNames.reduce((countAcc, name)=>{
            countAcc[name] = countAcc[name] + 1 || 1;
            return countAcc;
        }, {});
        const duplicateNames = Object.keys(counts).filter((name)=>counts[name] > 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(duplicateNames.length === 0, ()=>'Duplicate column names found: ' + duplicateNames.toString());
        // Check if keys in columnConfigs match columnNames.
        if (this.columnConfigs) {
            for (const key of Object.keys(this.columnConfigs)){
                const index = this.fullColumnNames.indexOf(key);
                if (index === -1) {
                    throw new Error('The key "' + key + '" provided in columnConfigs does not match any of the column ' + 'names (' + this.fullColumnNames.toString() + ').');
                }
            }
        }
        this.columnNamesValidated = true;
    }
    async maybeReadHeaderLine() {
        if (this.hasHeader) {
            const iter = await this.base.iterator();
            const firstElement = await iter.next();
            if (firstElement.done) {
                throw new Error('No data was found for CSV parsing.');
            }
            const firstLine = firstElement.value;
            const headers = this.parseRow(firstLine, false);
            return headers;
        } else {
            return null;
        }
    }
    /**
     * Create a `CSVDataset`.
     *
     * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
     * @param csvConfig (Optional) A CSVConfig object that contains configurations
     *     of reading and decoding from CSV file(s).
     *
     *     hasHeader: (Optional) A boolean value that indicates whether the first
     *     row of provided CSV file is a header line with column names, and should
     *     not be included in the data. Defaults to `true`.
     *
     *     columnNames: (Optional) A list of strings that corresponds to
     *     the CSV column names, in order. If provided, it ignores the column
     *     names inferred from the header row. If not provided, infers the column
     *     names from the first row of the records. If hasHeader is false and
     *     columnNames is not provided, this method throws an error.
     *
     *     columnConfigs: (Optional) A dictionary whose key is column names, value
     *     is an object stating if this column is required, column's data type,
     *     default value, and if this column is label. If provided, keys must
     *     correspond to names provided in columnNames or inferred from the file
     *     header lines. If isLabel is true any column, returns an array of two
     *     items: the first item is a dict of features key/value pairs, the second
     *     item is a dict of labels key/value pairs. If no feature is marked as
     *     label, returns a dict of features only.
     *
     *     configuredColumnsOnly (Optional) If true, only columns provided in
     *     columnConfigs will be parsed and provided during iteration.
     *
     *     delimiter (Optional) The string used to parse each line of the input
     *     file. Defaults to `,`.
     */ constructor(input, csvConfig){
        super();
        this.input = input;
        this.hasHeader = true;
        this.fullColumnNames = null;
        this.columnNamesValidated = false;
        this.columnConfigs = null;
        this.configuredColumnsOnly = false;
        this.delimiter = ',';
        this.delimWhitespace = false;
        this.base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$text_line_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextLineDataset"](input);
        if (!csvConfig) {
            csvConfig = {};
        }
        this.hasHeader = csvConfig.hasHeader === false ? false : true;
        this.fullColumnNames = csvConfig.columnNames;
        this.columnConfigs = csvConfig.columnConfigs;
        this.configuredColumnsOnly = csvConfig.configuredColumnsOnly;
        if (csvConfig.delimWhitespace) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(csvConfig.delimiter == null, ()=>'Delimiter should not be provided when delimWhitespace is true.');
            this.delimWhitespace = true;
            this.delimiter = ' ';
        } else {
            this.delimiter = csvConfig.delimiter ? csvConfig.delimiter : ',';
        }
    }
    async iterator() {
        if (!this.columnNamesValidated) {
            await this.setColumnNames();
        }
        let lines = await this.base.iterator();
        if (this.hasHeader) {
            // We previously read the first line to get the columnNames.
            // Now that we're providing data, skip it.
            lines = lines.skip(1);
        }
        return lines.map((x)=>this.makeDataElement(x));
    }
    makeDataElement(line) {
        const values = this.parseRow(line);
        const features = {};
        const labels = {};
        for(let i = 0; i < this.fullColumnNames.length; i++){
            const key = this.fullColumnNames[i];
            const config = this.columnConfigs ? this.columnConfigs[key] : null;
            if (this.configuredColumnsOnly && !config) {
                continue;
            } else {
                const value = values[i];
                let parsedValue = null;
                if (value === '') {
                    // If default value is provided, use it. If default value is not
                    // provided, set as undefined.
                    if (config && config.default !== undefined) {
                        parsedValue = config.default;
                    } else if (config && (config.required || config.isLabel)) {
                        throw new Error(`Required column ${key} is empty in this line: ${line}`);
                    } else {
                        parsedValue = undefined;
                    }
                } else {
                    // A value is present, so parse it based on type
                    const valueAsNum = Number(value);
                    if (isNaN(valueAsNum)) {
                        // The value is a string and this column is declared as boolean
                        // in config, parse it as boolean.
                        if (config && config.dtype === 'bool') {
                            parsedValue = this.getBoolean(value);
                        } else {
                            // Set value as string
                            parsedValue = value;
                        }
                    } else if (!config || !config.dtype) {
                        // If this value is a number and no type config is provided, return
                        // it as number.
                        parsedValue = valueAsNum;
                    } else {
                        // If this value is a number and data type is provided, parse it
                        // according to provided data type.
                        switch(config.dtype){
                            case 'float32':
                                parsedValue = valueAsNum;
                                break;
                            case 'int32':
                                parsedValue = Math.floor(valueAsNum);
                                break;
                            case 'bool':
                                parsedValue = this.getBoolean(value);
                                break;
                            default:
                                parsedValue = valueAsNum;
                        }
                    }
                }
                // Check if this column is label.
                config && config.isLabel ? labels[key] = parsedValue : features[key] = parsedValue;
            }
        }
        // If label exists, return an object of features and labels as {xs:features,
        // ys:labels}, otherwise return features only.
        if (Object.keys(labels).length === 0) {
            return features;
        } else {
            return {
                xs: features,
                ys: labels
            };
        }
    }
    getBoolean(value) {
        if (value === '1' || value.toLowerCase() === 'true') {
            return 1;
        } else {
            return 0;
        }
    }
    // adapted from https://beta.observablehq.com/@mbostock/streaming-csv
    parseRow(line, validateElementCount = true) {
        const result = [];
        let readOffset = 0;
        const readLength = line.length;
        let currentState = STATE_OUT;
        // Goes through the line to parse quote.
        for(let i = 0; i < readLength; i++){
            switch(currentState){
                // Before enter a new field
                case STATE_OUT:
                    switch(line.charAt(i)){
                        // Enter a quoted field
                        case CODE_QUOTE:
                            readOffset = i + 1;
                            currentState = STATE_QUOTE;
                            break;
                        // Read an empty field
                        case this.delimiter:
                            readOffset = i + 1;
                            // If delimiter is white space and configured to collapse
                            // multiple white spaces, ignore this white space.
                            if (this.delimiter === ' ' && this.delimWhitespace) {
                                break;
                            }
                            result.push('');
                            currentState = STATE_OUT;
                            break;
                        // Enter an unquoted field
                        default:
                            currentState = STATE_FIELD;
                            readOffset = i;
                            break;
                    }
                    break;
                // In an unquoted field
                case STATE_FIELD:
                    switch(line.charAt(i)){
                        // Exit an unquoted field, add it to result
                        case this.delimiter:
                            result.push(line.substring(readOffset, i));
                            currentState = STATE_OUT;
                            readOffset = i + 1;
                            break;
                        default:
                    }
                    break;
                // In a quoted field
                case STATE_QUOTE:
                    switch(line.charAt(i)){
                        // Read a quote after a quote
                        case CODE_QUOTE:
                            currentState = STATE_QUOTE_AFTER_QUOTE;
                            break;
                        default:
                    }
                    break;
                // This state means it's right after a second quote in a field
                case STATE_QUOTE_AFTER_QUOTE:
                    switch(line.charAt(i)){
                        // Finished a quoted field
                        case this.delimiter:
                            result.push(line.substring(readOffset, i - 1));
                            currentState = STATE_OUT;
                            readOffset = i + 1;
                            break;
                        // Finished a quoted part in a quoted field
                        case CODE_QUOTE:
                            currentState = STATE_QUOTE;
                            break;
                        // In a quoted part in a quoted field
                        default:
                            currentState = STATE_WITHIN_QUOTE_IN_QUOTE;
                            break;
                    }
                    break;
                case STATE_WITHIN_QUOTE_IN_QUOTE:
                    switch(line.charAt(i)){
                        // Exit a quoted part in a quoted field
                        case CODE_QUOTE:
                            currentState = STATE_QUOTE;
                            break;
                        default:
                    }
                    break;
                default:
            }
        }
        // Adds last item based on if it is quoted.
        if (currentState === STATE_QUOTE_AFTER_QUOTE) {
            result.push(line.substring(readOffset, readLength - 1));
        } else {
            result.push(line.substring(readOffset));
        }
        // Check if each row has the same number of elements as column names.
        if (validateElementCount && result.length !== this.fullColumnNames.length) {
            throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${result}`);
        }
        return result;
    }
} // TODO(soergel): add more basic datasets for parity with tf.data
 // tf.data.FixedLengthRecordDataset()
 // tf.data.TFRecordDataset()
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2X2RhdGFzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWRhdGEvc3JjL2RhdGFzZXRzL2Nzdl9kYXRhc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFrQixJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBSW5DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdkIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsTUFBTSx1QkFBdUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxRCxNQUFNLDJCQUEyQixHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUUzRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLE9BQU8sVUFBVyxTQUFRLE9BQXdCO0lBVXREOzs7Ozs7Ozs7T0FTRztJQUNILEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM5QixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSyxLQUFLLENBQUMsY0FB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VTs0QkFDYixZQUFZLEdBQUcsV0FBVyxDQUFDOzRCQUMzQixNQUFNO3dCQUNSLFFBQVE7cUJBQ1Q7b0JBQ0QsTUFBTTtnQkFDUixRQUFRO2FBQ1Q7U0FDRjtRQUNELDJDQUEyQztRQUMzQyxJQUFJLFlBQVksS0FBSyx1QkFBdUIsRUFBRTtZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELHFFQUFxRTtRQUNyRSxJQUFJLG9CQUFvQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDekUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FDWixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sK0JBQStCLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxpRUFBaUU7QUFDakUscUNBQXFDO0FBQ3JDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7VGVuc29yQ29udGFpbmVyLCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtEYXRhc2V0fSBmcm9tICcuLi9kYXRhc2V0JztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQge0xhenlJdGVyYXRvcn0gZnJvbSAnLi4vaXRlcmF0b3JzL2xhenlfaXRlcmF0b3InO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIENTVkNvbmZpZ30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtUZXh0TGluZURhdGFzZXR9IGZyb20gJy4vdGV4dF9saW5lX2RhdGFzZXQnO1xuXG5jb25zdCBDT0RFX1FVT1RFID0gJ1wiJztcbmNvbnN0IFNUQVRFX09VVCA9IFN5bWJvbCgnb3V0Jyk7XG5jb25zdCBTVEFURV9GSUVMRCA9IFN5bWJvbCgnZmllbGQnKTtcbmNvbnN0IFNUQVRFX1FVT1RFID0gU3ltYm9sKCdxdW90ZScpO1xuY29uc3QgU1RBVEVfUVVPVEVfQUZURVJfUVVPVEUgPSBTeW1ib2woJ3F1b3RlYWZ0ZXJxdW90ZScpO1xuY29uc3QgU1RBVEVfV0lUSElOX1FVT1RFX0lOX1FVT1RFID0gU3ltYm9sKCdxdW90ZWlucXVvdGUnKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcG90ZW50aWFsbHkgbGFyZ2UgY29sbGVjdGlvbiBvZiBkZWxpbWl0ZWQgdGV4dCByZWNvcmRzLlxuICpcbiAqIFRoZSBwcm9kdWNlZCBgVGVuc29yQ29udGFpbmVyYHMgZWFjaCBjb250YWluIG9uZSBrZXktdmFsdWUgcGFpciBmb3JcbiAqIGV2ZXJ5IGNvbHVtbiBvZiB0aGUgdGFibGUuICBXaGVuIGEgZmllbGQgaXMgZW1wdHkgaW4gdGhlIGluY29taW5nIGRhdGEsIHRoZVxuICogcmVzdWx0aW5nIHZhbHVlIGlzIGB1bmRlZmluZWRgLCBvciB0aHJvdyBlcnJvciBpZiBpdCBpcyByZXF1aXJlZC4gIFZhbHVlc1xuICogdGhhdCBjYW4gYmUgcGFyc2VkIGFzIG51bWJlcnMgYXJlIGVtaXR0ZWQgYXMgdHlwZSBgbnVtYmVyYCwgb3RoZXIgdmFsdWVzXG4gKiBhcmUgcGFyc2VkIGFzIGBzdHJpbmdgLlxuICpcbiAqIFRoZSByZXN1bHRzIGFyZSBub3QgYmF0Y2hlZC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJywgbmFtZXNwYWNlOiAnZGF0YSd9XG4gKi9cbmV4cG9ydCBjbGFzcyBDU1ZEYXRhc2V0IGV4dGVuZHMgRGF0YXNldDxUZW5zb3JDb250YWluZXI+IHtcbiAgYmFzZTogVGV4dExpbmVEYXRhc2V0O1xuICBwcml2YXRlIGhhc0hlYWRlciA9IHRydWU7XG4gIHByaXZhdGUgZnVsbENvbHVtbk5hbWVzOiBzdHJpbmdbXSA9IG51bGw7XG4gIHByaXZhdGUgY29sdW1uTmFtZXNWYWxpZGF0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb2x1bW5Db25maWdzOiB7W2tleTogc3RyaW5nXTogQ29sdW1uQ29uZmlnfSA9IG51bGw7XG4gIHByaXZhdGUgY29uZmlndXJlZENvbHVtbnNPbmx5ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVsaW1pdGVyID0gJywnO1xuICBwcml2YXRlIGRlbGltV2hpdGVzcGFjZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNvbHVtbiBuYW1lcyBvZiB0aGUgY3N2IGRhdGFzZXQuIElmIGBjb25maWd1cmVkQ29sdW1uc09ubHlgIGlzXG4gICAqIHRydWUsIHJldHVybiBjb2x1bW4gbmFtZXMgaW4gYGNvbHVtbkNvbmZpZ3NgLiBJZiBgY29uZmlndXJlZENvbHVtbnNPbmx5YCBpc1xuICAgKiBmYWxzZSBhbmQgYGNvbHVtbk5hbWVzYCBpcyBwcm92aWRlZCwgYGNvbHVtbk5hbWVzYC4gSWZcbiAgICogYGNvbmZpZ3VyZWRDb2x1bW5zT25seWAgaXMgZmFsc2UgYW5kIGBjb2x1bW5OYW1lc2AgaXMgbm90IHByb3ZpZGVkLCByZXR1cm5cbiAgICogYWxsIGNvbHVtbiBuYW1lcyBwYXJzZWQgZnJvbSB0aGUgY3N2IGZpbGUuIEZvciBleGFtcGxlIHVzYWdlIHBsZWFzZSBnbyB0b1xuICAgKiBgdGYuZGF0YS5jc3ZgLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnRGF0YScsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGFzeW5jIGNvbHVtbk5hbWVzKCkge1xuICAgIGlmICghdGhpcy5jb2x1bW5OYW1lc1ZhbGlkYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zZXRDb2x1bW5OYW1lcygpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmVkQ29sdW1uc09ubHkgPyBPYmplY3Qua2V5cyh0aGlzLmNvbHVtbkNvbmZpZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bGxDb2x1bW5OYW1lcztcbiAgfVxuXG4gIC8qIDEpIElmIGBjb2x1bW5OYW1lc2AgaXMgcHJvdmlkZWQgYXMgc3RyaW5nW10sIHVzZSB0aGlzIHN0cmluZ1tdIGFzIG91dHB1dFxuICAgKiBrZXlzIGluIGNvcnJlc3BvbmRpbmcgb3JkZXIuIFRoZSBsZW5ndGggbXVzdCBtYXRjaCB0aGUgbnVtYmVyIG9mIGluZmVycmVkXG4gICAqIGNvbHVtbnMgaWYgYGhhc0hlYWRlcmAgaXMgdHJ1ZSAuXG4gICAqIDIpIElmIGBjb2x1bW5OYW1lc2AgaXMgbm90IHByb3ZpZGVkLCBwYXJzZSBoZWFkZXIgbGluZSBhcyBgY29sdW1uTmFtZXNgIGlmXG4gICAqIGhhc0hlYWRlciBpcyB0cnVlLiBJZiBgaGFzSGVhZGVyYCBpcyBmYWxzZSwgdGhyb3cgYW4gZXJyb3IuXG4gICAqIDMpIElmIGBjb2x1bW5Db25maWdzYCBpcyBwcm92aWRlZCwgYWxsIHRoZSBrZXlzIGluIGBjb2x1bW5Db25maWdzYCBtdXN0XG4gICAqIGV4aXN0IGluIHBhcnNlZCBgY29sdW1uTmFtZXNgLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBzZXRDb2x1bW5OYW1lcygpIHtcbiAgICBjb25zdCBjb2x1bW5OYW1lc0Zyb21GaWxlID0gYXdhaXQgdGhpcy5tYXliZVJlYWRIZWFkZXJMaW5lKCk7XG4gICAgaWYgKCF0aGlzLmZ1bGxDb2x1bW5OYW1lcyAmJiAhY29sdW1uTmFtZXNGcm9tRmlsZSkge1xuICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgY29sdW1uTmFtZXMgaXMgbm90IHByb3ZpZGVkIGFuZCBubyBoZWFkZXIgbGluZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ29sdW1uIG5hbWVzIG11c3QgYmUgcHJvdmlkZWQgaWYgdGhlcmUgaXMgbm8gaGVhZGVyIGxpbmUuJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZ1bGxDb2x1bW5OYW1lcyAmJiBjb2x1bW5OYW1lc0Zyb21GaWxlKSB7XG4gICAgICAvLyBDaGVjayBwcm92aWRlZCBjb2x1bW5OYW1lcyBtYXRjaCBoZWFkZXIgbGluZS5cbiAgICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgICAgIGNvbHVtbk5hbWVzRnJvbUZpbGUubGVuZ3RoID09PSB0aGlzLmZ1bGxDb2x1bW5OYW1lcy5sZW5ndGgsXG4gICAgICAgICAgKCkgPT4gJ1RoZSBsZW5ndGggb2YgcHJvdmlkZWQgY29sdW1uTmFtZXMgKCcgK1xuICAgICAgICAgICAgICB0aGlzLmZ1bGxDb2x1bW5OYW1lcy5sZW5ndGgudG9TdHJpbmcoKSArXG4gICAgICAgICAgICAgICcpIGRvZXMgbm90IG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIGhlYWRlciBsaW5lIHJlYWQgZnJvbSAnICtcbiAgICAgICAgICAgICAgJ2ZpbGUgKCcgKyBjb2x1bW5OYW1lc0Zyb21GaWxlLmxlbmd0aC50b1N0cmluZygpICsgJykuJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5mdWxsQ29sdW1uTmFtZXMpIHtcbiAgICAgIHRoaXMuZnVsbENvbHVtbk5hbWVzID0gY29sdW1uTmFtZXNGcm9tRmlsZTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGR1cGxpY2F0ZSBjb2x1bW4gbmFtZXMuXG4gICAgY29uc3QgY291bnRzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHRoaXMuZnVsbENvbHVtbk5hbWVzLnJlZHVjZShcbiAgICAgICAgKGNvdW50QWNjOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSwgbmFtZSkgPT4ge1xuICAgICAgICAgIGNvdW50QWNjW25hbWVdID0gKGNvdW50QWNjW25hbWVdICsgMSkgfHwgMTtcbiAgICAgICAgICByZXR1cm4gY291bnRBY2M7XG4gICAgICAgIH0sXG4gICAgICAgIHt9KTtcbiAgICBjb25zdCBkdXBsaWNhdGVOYW1lcyA9XG4gICAgICAgIE9iamVjdC5rZXlzKGNvdW50cykuZmlsdGVyKChuYW1lKSA9PiAoY291bnRzW25hbWVdID4gMSkpO1xuICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgICBkdXBsaWNhdGVOYW1lcy5sZW5ndGggPT09IDAsXG4gICAgICAgICgpID0+ICdEdXBsaWNhdGUgY29sdW1uIG5hbWVzIGZvdW5kOiAnICsgZHVwbGljYXRlTmFtZXMudG9TdHJpbmcoKSk7XG4gICAgLy8gQ2hlY2sgaWYga2V5cyBpbiBjb2x1bW5Db25maWdzIG1hdGNoIGNvbHVtbk5hbWVzLlxuICAgIGlmICh0aGlzLmNvbHVtbkNvbmZpZ3MpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuY29sdW1uQ29uZmlncykpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bGxDb2x1bW5OYW1lcy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICdUaGUga2V5IFwiJyArIGtleSArXG4gICAgICAgICAgICAgICdcIiBwcm92aWRlZCBpbiBjb2x1bW5Db25maWdzIGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY29sdW1uICcgK1xuICAgICAgICAgICAgICAnbmFtZXMgKCcgKyB0aGlzLmZ1bGxDb2x1bW5OYW1lcy50b1N0cmluZygpICsgJykuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb2x1bW5OYW1lc1ZhbGlkYXRlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1heWJlUmVhZEhlYWRlckxpbmUoKSB7XG4gICAgaWYgKHRoaXMuaGFzSGVhZGVyKSB7XG4gICAgICBjb25zdCBpdGVyID0gYXdhaXQgdGhpcy5iYXNlLml0ZXJhdG9yKCk7XG4gICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBhd2FpdCBpdGVyLm5leHQoKTtcbiAgICAgIGlmIChmaXJzdEVsZW1lbnQuZG9uZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRhdGEgd2FzIGZvdW5kIGZvciBDU1YgcGFyc2luZy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpcnN0TGluZTogc3RyaW5nID0gZmlyc3RFbGVtZW50LnZhbHVlO1xuICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMucGFyc2VSb3coZmlyc3RMaW5lLCBmYWxzZSk7XG4gICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGBDU1ZEYXRhc2V0YC5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0IEEgYERhdGFTb3VyY2VgIHByb3ZpZGluZyBhIGNodW5rZWQsIFVURjgtZW5jb2RlZCBieXRlIHN0cmVhbS5cbiAgICogQHBhcmFtIGNzdkNvbmZpZyAoT3B0aW9uYWwpIEEgQ1NWQ29uZmlnIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNvbmZpZ3VyYXRpb25zXG4gICAqICAgICBvZiByZWFkaW5nIGFuZCBkZWNvZGluZyBmcm9tIENTViBmaWxlKHMpLlxuICAgKlxuICAgKiAgICAgaGFzSGVhZGVyOiAoT3B0aW9uYWwpIEEgYm9vbGVhbiB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBmaXJzdFxuICAgKiAgICAgcm93IG9mIHByb3ZpZGVkIENTViBmaWxlIGlzIGEgaGVhZGVyIGxpbmUgd2l0aCBjb2x1bW4gbmFtZXMsIGFuZCBzaG91bGRcbiAgICogICAgIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgZGF0YS4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgKlxuICAgKiAgICAgY29sdW1uTmFtZXM6IChPcHRpb25hbCkgQSBsaXN0IG9mIHN0cmluZ3MgdGhhdCBjb3JyZXNwb25kcyB0b1xuICAgKiAgICAgdGhlIENTViBjb2x1bW4gbmFtZXMsIGluIG9yZGVyLiBJZiBwcm92aWRlZCwgaXQgaWdub3JlcyB0aGUgY29sdW1uXG4gICAqICAgICBuYW1lcyBpbmZlcnJlZCBmcm9tIHRoZSBoZWFkZXIgcm93LiBJZiBub3QgcHJvdmlkZWQsIGluZmVycyB0aGUgY29sdW1uXG4gICAqICAgICBuYW1lcyBmcm9tIHRoZSBmaXJzdCByb3cgb2YgdGhlIHJlY29yZHMuIElmIGhhc0hlYWRlciBpcyBmYWxzZSBhbmRcbiAgICogICAgIGNvbHVtbk5hbWVzIGlzIG5vdCBwcm92aWRlZCwgdGhpcyBtZXRob2QgdGhyb3dzIGFuIGVycm9yLlxuICAgKlxuICAgKiAgICAgY29sdW1uQ29uZmlnczogKE9wdGlvbmFsKSBBIGRpY3Rpb25hcnkgd2hvc2Uga2V5IGlzIGNvbHVtbiBuYW1lcywgdmFsdWVcbiAgICogICAgIGlzIGFuIG9iamVjdCBzdGF0aW5nIGlmIHRoaXMgY29sdW1uIGlzIHJlcXVpcmVkLCBjb2x1bW4ncyBkYXRhIHR5cGUsXG4gICAqICAgICBkZWZhdWx0IHZhbHVlLCBhbmQgaWYgdGhpcyBjb2x1bW4gaXMgbGFiZWwuIElmIHByb3ZpZGVkLCBrZXlzIG11c3RcbiAgICogICAgIGNvcnJlc3BvbmQgdG8gbmFtZXMgcHJvdmlkZWQgaW4gY29sdW1uTmFtZXMgb3IgaW5mZXJyZWQgZnJvbSB0aGUgZmlsZVxuICAgKiAgICAgaGVhZGVyIGxpbmVzLiBJZiBpc0xhYmVsIGlzIHRydWUgYW55IGNvbHVtbiwgcmV0dXJucyBhbiBhcnJheSBvZiB0d29cbiAgICogICAgIGl0ZW1zOiB0aGUgZmlyc3QgaXRlbSBpcyBhIGRpY3Qgb2YgZmVhdHVyZXMga2V5L3ZhbHVlIHBhaXJzLCB0aGUgc2Vjb25kXG4gICAqICAgICBpdGVtIGlzIGEgZGljdCBvZiBsYWJlbHMga2V5L3ZhbHVlIHBhaXJzLiBJZiBubyBmZWF0dXJlIGlzIG1hcmtlZCBhc1xuICAgKiAgICAgbGFiZWwsIHJldHVybnMgYSBkaWN0IG9mIGZlYXR1cmVzIG9ubHkuXG4gICAqXG4gICAqICAgICBjb25maWd1cmVkQ29sdW1uc09ubHkgKE9wdGlvbmFsKSBJZiB0cnVlLCBvbmx5IGNvbHVtbnMgcHJvdmlkZWQgaW5cbiAgICogICAgIGNvbHVtbkNvbmZpZ3Mgd2lsbCBiZSBwYXJzZWQgYW5kIHByb3ZpZGVkIGR1cmluZyBpdGVyYXRpb24uXG4gICAqXG4gICAqICAgICBkZWxpbWl0ZXIgKE9wdGlvbmFsKSBUaGUgc3RyaW5nIHVzZWQgdG8gcGFyc2UgZWFjaCBsaW5lIG9mIHRoZSBpbnB1dFxuICAgKiAgICAgZmlsZS4gRGVmYXVsdHMgdG8gYCxgLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGlucHV0OiBEYXRhU291cmNlLCBjc3ZDb25maWc/OiBDU1ZDb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYmFzZSA9IG5ldyBUZXh0TGluZURhdGFzZXQoaW5wdXQpO1xuICAgIGlmICghY3N2Q29uZmlnKSB7XG4gICAgICBjc3ZDb25maWcgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5oYXNIZWFkZXIgPSBjc3ZDb25maWcuaGFzSGVhZGVyID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB0aGlzLmZ1bGxDb2x1bW5OYW1lcyA9IGNzdkNvbmZpZy5jb2x1bW5OYW1lcztcbiAgICB0aGlzLmNvbHVtbkNvbmZpZ3MgPSBjc3ZDb25maWcuY29sdW1uQ29uZmlncztcbiAgICB0aGlzLmNvbmZpZ3VyZWRDb2x1bW5zT25seSA9IGNzdkNvbmZpZy5jb25maWd1cmVkQ29sdW1uc09ubHk7XG4gICAgaWYgKGNzdkNvbmZpZy5kZWxpbVdoaXRlc3BhY2UpIHtcbiAgICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgICAgIGNzdkNvbmZpZy5kZWxpbWl0ZXIgPT0gbnVsbCxcbiAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAnRGVsaW1pdGVyIHNob3VsZCBub3QgYmUgcHJvdmlkZWQgd2hlbiBkZWxpbVdoaXRlc3BhY2UgaXMgdHJ1ZS4nKTtcbiAgICAgIHRoaXMuZGVsaW1XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGVsaW1pdGVyID0gJyAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlbGltaXRlciA9IGNzdkNvbmZpZy5kZWxpbWl0ZXIgPyBjc3ZDb25maWcuZGVsaW1pdGVyIDogJywnO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGl0ZXJhdG9yKCk6IFByb21pc2U8TGF6eUl0ZXJhdG9yPFRlbnNvckNvbnRhaW5lcj4+IHtcbiAgICBpZiAoIXRoaXMuY29sdW1uTmFtZXNWYWxpZGF0ZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0Q29sdW1uTmFtZXMoKTtcbiAgICB9XG4gICAgbGV0IGxpbmVzID0gYXdhaXQgdGhpcy5iYXNlLml0ZXJhdG9yKCk7XG4gICAgaWYgKHRoaXMuaGFzSGVhZGVyKSB7XG4gICAgICAvLyBXZSBwcmV2aW91c2x5IHJlYWQgdGhlIGZpcnN0IGxpbmUgdG8gZ2V0IHRoZSBjb2x1bW5OYW1lcy5cbiAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIHByb3ZpZGluZyBkYXRhLCBza2lwIGl0LlxuICAgICAgbGluZXMgPSBsaW5lcy5za2lwKDEpO1xuICAgIH1cbiAgICByZXR1cm4gbGluZXMubWFwKHggPT4gdGhpcy5tYWtlRGF0YUVsZW1lbnQoeCkpO1xuICB9XG5cbiAgbWFrZURhdGFFbGVtZW50KGxpbmU6IHN0cmluZyk6IFRlbnNvckNvbnRhaW5lciB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5wYXJzZVJvdyhsaW5lKTtcbiAgICBjb25zdCBmZWF0dXJlczoge1trZXk6IHN0cmluZ106IFRlbnNvckNvbnRhaW5lcn0gPSB7fTtcbiAgICBjb25zdCBsYWJlbHM6IHtba2V5OiBzdHJpbmddOiBUZW5zb3JDb250YWluZXJ9ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZnVsbENvbHVtbk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmZ1bGxDb2x1bW5OYW1lc1tpXTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29sdW1uQ29uZmlncyA/IHRoaXMuY29sdW1uQ29uZmlnc1trZXldIDogbnVsbDtcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyZWRDb2x1bW5zT25seSAmJiAhY29uZmlnKSB7XG4gICAgICAgIC8vIFRoaXMgY29sdW1uIGlzIG5vdCBzZWxlY3RlZC5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHBhcnNlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgIC8vIElmIGRlZmF1bHQgdmFsdWUgaXMgcHJvdmlkZWQsIHVzZSBpdC4gSWYgZGVmYXVsdCB2YWx1ZSBpcyBub3RcbiAgICAgICAgICAvLyBwcm92aWRlZCwgc2V0IGFzIHVuZGVmaW5lZC5cbiAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZFZhbHVlID0gY29uZmlnLmRlZmF1bHQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb25maWcgJiYgKGNvbmZpZy5yZXF1aXJlZCB8fCBjb25maWcuaXNMYWJlbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgUmVxdWlyZWQgY29sdW1uICR7a2V5fSBpcyBlbXB0eSBpbiB0aGlzIGxpbmU6ICR7bGluZX1gKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEEgdmFsdWUgaXMgcHJlc2VudCwgc28gcGFyc2UgaXQgYmFzZWQgb24gdHlwZVxuICAgICAgICAgIGNvbnN0IHZhbHVlQXNOdW0gPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgIGlmIChpc05hTih2YWx1ZUFzTnVtKSkge1xuICAgICAgICAgICAgLy8gVGhlIHZhbHVlIGlzIGEgc3RyaW5nIGFuZCB0aGlzIGNvbHVtbiBpcyBkZWNsYXJlZCBhcyBib29sZWFuXG4gICAgICAgICAgICAvLyBpbiBjb25maWcsIHBhcnNlIGl0IGFzIGJvb2xlYW4uXG4gICAgICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5kdHlwZSA9PT0gJ2Jvb2wnKSB7XG4gICAgICAgICAgICAgIHBhcnNlZFZhbHVlID0gdGhpcy5nZXRCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFNldCB2YWx1ZSBhcyBzdHJpbmdcbiAgICAgICAgICAgICAgcGFyc2VkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5kdHlwZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBpcyBhIG51bWJlciBhbmQgbm8gdHlwZSBjb25maWcgaXMgcHJvdmlkZWQsIHJldHVyblxuICAgICAgICAgICAgLy8gaXQgYXMgbnVtYmVyLlxuICAgICAgICAgICAgcGFyc2VkVmFsdWUgPSB2YWx1ZUFzTnVtO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGlzIGEgbnVtYmVyIGFuZCBkYXRhIHR5cGUgaXMgcHJvdmlkZWQsIHBhcnNlIGl0XG4gICAgICAgICAgICAvLyBhY2NvcmRpbmcgdG8gcHJvdmlkZWQgZGF0YSB0eXBlLlxuICAgICAgICAgICAgc3dpdGNoIChjb25maWcuZHR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICAgICAgICAgICAgcGFyc2VkVmFsdWUgPSB2YWx1ZUFzTnVtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdpbnQzMic6XG4gICAgICAgICAgICAgICAgcGFyc2VkVmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlQXNOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdib29sJzpcbiAgICAgICAgICAgICAgICBwYXJzZWRWYWx1ZSA9IHRoaXMuZ2V0Qm9vbGVhbih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcGFyc2VkVmFsdWUgPSB2YWx1ZUFzTnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGNvbHVtbiBpcyBsYWJlbC5cbiAgICAgICAgKGNvbmZpZyAmJiBjb25maWcuaXNMYWJlbCkgPyBsYWJlbHNba2V5XSA9IHBhcnNlZFZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlc1trZXldID0gcGFyc2VkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIGxhYmVsIGV4aXN0cywgcmV0dXJuIGFuIG9iamVjdCBvZiBmZWF0dXJlcyBhbmQgbGFiZWxzIGFzIHt4czpmZWF0dXJlcyxcbiAgICAvLyB5czpsYWJlbHN9LCBvdGhlcndpc2UgcmV0dXJuIGZlYXR1cmVzIG9ubHkuXG4gICAgaWYgKE9iamVjdC5rZXlzKGxhYmVscykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmVhdHVyZXM7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt4czogZmVhdHVyZXMsIHlzOiBsYWJlbHN9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Qm9vbGVhbih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAodmFsdWUgPT09ICcxJyB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICAvLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9iZXRhLm9ic2VydmFibGVocS5jb20vQG1ib3N0b2NrL3N0cmVhbWluZy1jc3ZcbiAgcHJpdmF0ZSBwYXJzZVJvdyhsaW5lOiBzdHJpbmcsIHZhbGlkYXRlRWxlbWVudENvdW50ID0gdHJ1ZSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IHJlYWRPZmZzZXQgPSAwO1xuICAgIGNvbnN0IHJlYWRMZW5ndGggPSBsaW5lLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudFN0YXRlID0gU1RBVEVfT1VUO1xuICAgIC8vIEdvZXMgdGhyb3VnaCB0aGUgbGluZSB0byBwYXJzZSBxdW90ZS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlYWRMZW5ndGg7IGkrKykge1xuICAgICAgc3dpdGNoIChjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgLy8gQmVmb3JlIGVudGVyIGEgbmV3IGZpZWxkXG4gICAgICAgIGNhc2UgU1RBVEVfT1VUOlxuICAgICAgICAgIHN3aXRjaCAobGluZS5jaGFyQXQoaSkpIHtcbiAgICAgICAgICAgIC8vIEVudGVyIGEgcXVvdGVkIGZpZWxkXG4gICAgICAgICAgICBjYXNlIENPREVfUVVPVEU6XG4gICAgICAgICAgICAgIHJlYWRPZmZzZXQgPSBpICsgMTtcbiAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gU1RBVEVfUVVPVEU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gUmVhZCBhbiBlbXB0eSBmaWVsZFxuICAgICAgICAgICAgY2FzZSB0aGlzLmRlbGltaXRlcjpcbiAgICAgICAgICAgICAgcmVhZE9mZnNldCA9IGkgKyAxO1xuICAgICAgICAgICAgICAvLyBJZiBkZWxpbWl0ZXIgaXMgd2hpdGUgc3BhY2UgYW5kIGNvbmZpZ3VyZWQgdG8gY29sbGFwc2VcbiAgICAgICAgICAgICAgLy8gbXVsdGlwbGUgd2hpdGUgc3BhY2VzLCBpZ25vcmUgdGhpcyB3aGl0ZSBzcGFjZS5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsaW1pdGVyID09PSAnICcgJiYgdGhpcy5kZWxpbVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQucHVzaCgnJyk7XG4gICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IFNUQVRFX09VVDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBFbnRlciBhbiB1bnF1b3RlZCBmaWVsZFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gU1RBVEVfRklFTEQ7XG4gICAgICAgICAgICAgIHJlYWRPZmZzZXQgPSBpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIEluIGFuIHVucXVvdGVkIGZpZWxkXG4gICAgICAgIGNhc2UgU1RBVEVfRklFTEQ6XG4gICAgICAgICAgc3dpdGNoIChsaW5lLmNoYXJBdChpKSkge1xuICAgICAgICAgICAgLy8gRXhpdCBhbiB1bnF1b3RlZCBmaWVsZCwgYWRkIGl0IHRvIHJlc3VsdFxuICAgICAgICAgICAgY2FzZSB0aGlzLmRlbGltaXRlcjpcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGluZS5zdWJzdHJpbmcocmVhZE9mZnNldCwgaSkpO1xuICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBTVEFURV9PVVQ7XG4gICAgICAgICAgICAgIHJlYWRPZmZzZXQgPSBpICsgMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gSW4gYSBxdW90ZWQgZmllbGRcbiAgICAgICAgY2FzZSBTVEFURV9RVU9URTpcbiAgICAgICAgICBzd2l0Y2ggKGxpbmUuY2hhckF0KGkpKSB7XG4gICAgICAgICAgICAvLyBSZWFkIGEgcXVvdGUgYWZ0ZXIgYSBxdW90ZVxuICAgICAgICAgICAgY2FzZSBDT0RFX1FVT1RFOlxuICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBTVEFURV9RVU9URV9BRlRFUl9RVU9URTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gVGhpcyBzdGF0ZSBtZWFucyBpdCdzIHJpZ2h0IGFmdGVyIGEgc2Vjb25kIHF1b3RlIGluIGEgZmllbGRcbiAgICAgICAgY2FzZSBTVEFURV9RVU9URV9BRlRFUl9RVU9URTpcbiAgICAgICAgICBzd2l0Y2ggKGxpbmUuY2hhckF0KGkpKSB7XG4gICAgICAgICAgICAvLyBGaW5pc2hlZCBhIHF1b3RlZCBmaWVsZFxuICAgICAgICAgICAgY2FzZSB0aGlzLmRlbGltaXRlcjpcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGluZS5zdWJzdHJpbmcocmVhZE9mZnNldCwgaSAtIDEpKTtcbiAgICAgICAgICAgICAgY3VycmVudFN0YXRlID0gU1RBVEVfT1VUO1xuICAgICAgICAgICAgICByZWFkT2Zmc2V0ID0gaSArIDE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gRmluaXNoZWQgYSBxdW90ZWQgcGFydCBpbiBhIHF1b3RlZCBmaWVsZFxuICAgICAgICAgICAgY2FzZSBDT0RFX1FVT1RFOlxuICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBTVEFURV9RVU9URTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBJbiBhIHF1b3RlZCBwYXJ0IGluIGEgcXVvdGVkIGZpZWxkXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBTVEFURV9XSVRISU5fUVVPVEVfSU5fUVVPVEU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTVEFURV9XSVRISU5fUVVPVEVfSU5fUVVPVEU6XG4gICAgICAgICAgc3dpdGNoIChsaW5lLmNoYXJBdChpKSkge1xuICAgICAgICAgICAgLy8gRXhpdCBhIHF1b3RlZCBwYXJ0IGluIGEgcXVvdGVkIGZpZWxkXG4gICAgICAgICAgICBjYXNlIENPREVfUVVPVEU6XG4gICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IFNUQVRFX1FVT1RFO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGRzIGxhc3QgaXRlbSBiYXNlZCBvbiBpZiBpdCBpcyBxdW90ZWQuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gU1RBVEVfUVVPVEVfQUZURVJfUVVPVEUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmUuc3Vic3RyaW5nKHJlYWRPZmZzZXQsIHJlYWRMZW5ndGggLSAxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmUuc3Vic3RyaW5nKHJlYWRPZmZzZXQpKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgZWFjaCByb3cgaGFzIHRoZSBzYW1lIG51bWJlciBvZiBlbGVtZW50cyBhcyBjb2x1bW4gbmFtZXMuXG4gICAgaWYgKHZhbGlkYXRlRWxlbWVudENvdW50ICYmIHJlc3VsdC5sZW5ndGggIT09IHRoaXMuZnVsbENvbHVtbk5hbWVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHJvdyBpbiBjc3YgZmlsZS4gU2hvdWxkIGhhdmUgJHtcbiAgICAgICAgICB0aGlzLmZ1bGxDb2x1bW5OYW1lcy5sZW5ndGh9IGVsZW1lbnRzIGluIGEgcm93LCBidXQgZ290ICR7cmVzdWx0fWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8vIFRPRE8oc29lcmdlbCk6IGFkZCBtb3JlIGJhc2ljIGRhdGFzZXRzIGZvciBwYXJpdHkgd2l0aCB0Zi5kYXRhXG4vLyB0Zi5kYXRhLkZpeGVkTGVuZ3RoUmVjb3JkRGF0YXNldCgpXG4vLyB0Zi5kYXRhLlRGUmVjb3JkRGF0YXNldCgpXG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/microphone_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "MicrophoneIterator",
    ()=>MicrophoneIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)");
;
;
class MicrophoneIterator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyIterator"] {
    constructor(microphoneConfig){
        super();
        this.microphoneConfig = microphoneConfig;
        this.isClosed = false;
        this.fftSize = microphoneConfig.fftSize || 1024;
        const fftSizeLog2 = Math.log2(this.fftSize);
        if (this.fftSize < 0 || fftSizeLog2 < 4 || fftSizeLog2 > 14 || !Number.isInteger(fftSizeLog2)) {
            throw new Error(`Invalid fftSize: it must be a power of 2 between ` + `2 to 4 and 2 to 14, but got ${this.fftSize}`);
        }
        this.numFrames = microphoneConfig.numFramesPerSpectrogram || 43;
        this.sampleRateHz = microphoneConfig.sampleRateHz;
        this.columnTruncateLength = microphoneConfig.columnTruncateLength || this.fftSize;
        this.audioTrackConstraints = microphoneConfig.audioTrackConstraints;
        this.smoothingTimeConstant = microphoneConfig.smoothingTimeConstant || 0;
        this.includeSpectrogram = microphoneConfig.includeSpectrogram === false ? false : true;
        this.includeWaveform = microphoneConfig.includeWaveform === true ? true : false;
        if (!this.includeSpectrogram && !this.includeWaveform) {
            throw new Error('Both includeSpectrogram and includeWaveform are false. ' + 'At least one type of data should be returned.');
        }
    }
    summary() {
        return `microphone`;
    }
    // Construct a MicrophoneIterator and start the audio stream.
    static async create(microphoneConfig = {}) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER')) {
            throw new Error('microphone API is only supported in browser environment.');
        }
        const microphoneIterator = new MicrophoneIterator(microphoneConfig);
        // Call async function start() to initialize the audio stream.
        await microphoneIterator.start();
        return microphoneIterator;
    }
    // Start the audio stream and FFT.
    async start() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                audio: this.audioTrackConstraints == null ? true : this.audioTrackConstraints,
                video: false
            });
        } catch (e) {
            throw new Error(`Error thrown while initializing video stream: ${e.message}`);
        }
        if (!this.stream) {
            throw new Error('Could not obtain audio from microphone.');
        }
        const ctxConstructor = // tslint:disable-next-line:no-any
        window.AudioContext || window.webkitAudioContext;
        this.audioContext = new ctxConstructor();
        if (!this.sampleRateHz) {
            // If sample rate is not provided, use the available sample rate on
            // device.
            this.sampleRateHz = this.audioContext.sampleRate;
        } else if (this.audioContext.sampleRate !== this.sampleRateHz) {
            throw new Error(`Mismatch in sampling rate: ` + `Expected: ${this.sampleRateHz}; ` + `Actual: ${this.audioContext.sampleRate}`);
        }
        const streamSource = this.audioContext.createMediaStreamSource(this.stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = this.fftSize * 2;
        this.analyser.smoothingTimeConstant = this.smoothingTimeConstant;
        streamSource.connect(this.analyser);
        this.freqData = new Float32Array(this.fftSize);
        this.timeData = new Float32Array(this.fftSize);
        return;
    }
    async next() {
        if (this.isClosed) {
            return {
                value: null,
                done: true
            };
        }
        let spectrogramTensor;
        let waveformTensor;
        const audioDataQueue = await this.getAudioData();
        if (this.includeSpectrogram) {
            const freqData = this.flattenQueue(audioDataQueue.freqDataQueue);
            spectrogramTensor = this.getTensorFromAudioDataArray(freqData, [
                this.numFrames,
                this.columnTruncateLength,
                1
            ]);
        }
        if (this.includeWaveform) {
            const timeData = this.flattenQueue(audioDataQueue.timeDataQueue);
            waveformTensor = this.getTensorFromAudioDataArray(timeData, [
                this.numFrames * this.fftSize,
                1
            ]);
        }
        return {
            value: {
                'spectrogram': spectrogramTensor,
                'waveform': waveformTensor
            },
            done: false
        };
    }
    // Capture one result from the audio stream, and extract the value from
    // iterator.next() result.
    async capture() {
        return (await this.next()).value;
    }
    async getAudioData() {
        const freqDataQueue = [];
        const timeDataQueue = [];
        let currentFrames = 0;
        return new Promise((resolve)=>{
            const intervalID = setInterval(()=>{
                if (this.includeSpectrogram) {
                    this.analyser.getFloatFrequencyData(this.freqData);
                    // If the audio stream is initializing, return empty queue.
                    if (this.freqData[0] === -Infinity) {
                        resolve({
                            freqDataQueue,
                            timeDataQueue
                        });
                    }
                    freqDataQueue.push(this.freqData.slice(0, this.columnTruncateLength));
                }
                if (this.includeWaveform) {
                    this.analyser.getFloatTimeDomainData(this.timeData);
                    timeDataQueue.push(this.timeData.slice());
                }
                // Clean interval and return when all frames have been collected
                if (++currentFrames === this.numFrames) {
                    clearInterval(intervalID);
                    resolve({
                        freqDataQueue,
                        timeDataQueue
                    });
                }
            }, this.fftSize / this.sampleRateHz * 1e3);
        });
    }
    // Stop the audio stream and pause the iterator.
    stop() {
        if (!this.isClosed) {
            this.isClosed = true;
            this.analyser.disconnect();
            this.audioContext.close();
            if (this.stream != null && this.stream.getTracks().length > 0) {
                this.stream.getTracks()[0].stop();
            }
        }
    }
    // Override toArray() function to prevent collecting.
    toArray() {
        throw new Error('Can not convert infinite audio stream to array.');
    }
    // Return audio sampling rate in Hz
    getSampleRate() {
        return this.sampleRateHz;
    }
    flattenQueue(queue) {
        const frameSize = queue[0].length;
        const freqData = new Float32Array(queue.length * frameSize);
        queue.forEach((data, i)=>freqData.set(data, i * frameSize));
        return freqData;
    }
    getTensorFromAudioDataArray(freqData, shape) {
        const vals = new Float32Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(shape));
        // If the data is less than the output shape, the rest is padded with zeros.
        vals.set(freqData, vals.length - freqData.length);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])(vals, shape);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm9waG9uZV9pdGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvaXRlcmF0b3JzL21pY3JvcGhvbmVfaXRlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCxPQUFPLEVBQUMsR0FBRyxFQUFVLE1BQU0sRUFBdUMsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFckcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQTZCO0lBZ0JuRSxZQUF1QyxnQkFBa0M7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFENkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWZqRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBaUJ2QixJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLFdBQVcsR0FBRyxFQUFFO1lBQ3ZELENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUNYLG1EQUFtRDtnQkFDbkQsK0JBQStCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLG9CQUFv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QztJQUVPLFlBQVksQ0FBQyxLQUFxQjtRQUN4QyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFTywyQkFBMkIsQ0FBQyxRQUFzQixFQUFFLEtBQWU7UUFFekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pELDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtlbnYsIFRlbnNvciwgdGVuc29yLCBUZW5zb3IyRCwgVGVuc29yM0QsIFRlbnNvckNvbnRhaW5lciwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7TWljcm9waG9uZUNvbmZpZ30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtMYXp5SXRlcmF0b3J9IGZyb20gJy4vbGF6eV9pdGVyYXRvcic7XG5cbi8qKlxuICogUHJvdmlkZSBhIHN0cmVhbSBvZiB0ZW5zb3JzIGZyb20gbWljcm9waG9uZSBhdWRpbyBzdHJlYW0uIFRoZSB0ZW5zb3JzIGFyZVxuICogcmVwcmVzZW50aW5nIGF1ZGlvIGRhdGEgYXMgZnJlcXVlbmN5LWRvbWFpbiBzcGVjdHJvZ3JhbSBnZW5lcmF0ZWQgd2l0aFxuICogYnJvd3NlcidzIG5hdGl2ZSBGRlQuIFRlbnNvcnMgcmVwcmVzZW50aW5nIHRpbWUtZG9tYWluIHdhdmVmb3JtIGlzIGF2YWlsYWJsZVxuICogYmFzZWQgb24gY29uZmlndXJhdGlvbi4gT25seSB3b3JrcyBpbiBicm93c2VyIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgY2xhc3MgTWljcm9waG9uZUl0ZXJhdG9yIGV4dGVuZHMgTGF6eUl0ZXJhdG9yPFRlbnNvckNvbnRhaW5lcj4ge1xuICBwcml2YXRlIGlzQ2xvc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgc3RyZWFtOiBNZWRpYVN0cmVhbTtcbiAgcHJpdmF0ZSByZWFkb25seSBmZnRTaXplOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29sdW1uVHJ1bmNhdGVMZW5ndGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBmcmVxRGF0YTogRmxvYXQzMkFycmF5O1xuICBwcml2YXRlIHRpbWVEYXRhOiBGbG9hdDMyQXJyYXk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbnVtRnJhbWVzOiBudW1iZXI7XG4gIHByaXZhdGUgYW5hbHlzZXI6IEFuYWx5c2VyTm9kZTtcbiAgcHJpdmF0ZSBhdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcbiAgcHJpdmF0ZSBzYW1wbGVSYXRlSHo6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBhdWRpb1RyYWNrQ29uc3RyYWludHM6IE1lZGlhVHJhY2tDb25zdHJhaW50cztcbiAgcHJpdmF0ZSByZWFkb25seSBzbW9vdGhpbmdUaW1lQ29uc3RhbnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBpbmNsdWRlU3BlY3Ryb2dyYW06IGJvb2xlYW47XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5jbHVkZVdhdmVmb3JtOiBib29sZWFuO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IG1pY3JvcGhvbmVDb25maWc6IE1pY3JvcGhvbmVDb25maWcpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZmZ0U2l6ZSA9IG1pY3JvcGhvbmVDb25maWcuZmZ0U2l6ZSB8fCAxMDI0O1xuICAgIGNvbnN0IGZmdFNpemVMb2cyID0gTWF0aC5sb2cyKHRoaXMuZmZ0U2l6ZSk7XG4gICAgaWYgKHRoaXMuZmZ0U2l6ZSA8IDAgfHwgZmZ0U2l6ZUxvZzIgPCA0IHx8IGZmdFNpemVMb2cyID4gMTQgfHxcbiAgICAgICAgIU51bWJlci5pc0ludGVnZXIoZmZ0U2l6ZUxvZzIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgZmZ0U2l6ZTogaXQgbXVzdCBiZSBhIHBvd2VyIG9mIDIgYmV0d2VlbiBgICtcbiAgICAgICAgICBgMiB0byA0IGFuZCAyIHRvIDE0LCBidXQgZ290ICR7dGhpcy5mZnRTaXplfWApO1xuICAgIH1cblxuICAgIHRoaXMubnVtRnJhbWVzID0gbWljcm9waG9uZUNvbmZpZy5udW1GcmFtZXNQZXJTcGVjdHJvZ3JhbSB8fCA0MztcbiAgICB0aGlzLnNhbXBsZVJhdGVIeiA9IG1pY3JvcGhvbmVDb25maWcuc2FtcGxlUmF0ZUh6O1xuICAgIHRoaXMuY29sdW1uVHJ1bmNhdGVMZW5ndGggPVxuICAgICAgICBtaWNyb3Bob25lQ29uZmlnLmNvbHVtblRydW5jYXRlTGVuZ3RoIHx8IHRoaXMuZmZ0U2l6ZTtcbiAgICB0aGlzLmF1ZGlvVHJhY2tDb25zdHJhaW50cyA9IG1pY3JvcGhvbmVDb25maWcuYXVkaW9UcmFja0NvbnN0cmFpbnRzO1xuICAgIHRoaXMuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gbWljcm9waG9uZUNvbmZpZy5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgfHwgMDtcblxuICAgIHRoaXMuaW5jbHVkZVNwZWN0cm9ncmFtID1cbiAgICAgICAgbWljcm9waG9uZUNvbmZpZy5pbmNsdWRlU3BlY3Ryb2dyYW0gPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXMuaW5jbHVkZVdhdmVmb3JtID1cbiAgICAgICAgbWljcm9waG9uZUNvbmZpZy5pbmNsdWRlV2F2ZWZvcm0gPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgaWYgKCF0aGlzLmluY2x1ZGVTcGVjdHJvZ3JhbSAmJiAhdGhpcy5pbmNsdWRlV2F2ZWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQm90aCBpbmNsdWRlU3BlY3Ryb2dyYW0gYW5kIGluY2x1ZGVXYXZlZm9ybSBhcmUgZmFsc2UuICcgK1xuICAgICAgICAgICdBdCBsZWFzdCBvbmUgdHlwZSBvZiBkYXRhIHNob3VsZCBiZSByZXR1cm5lZC4nKTtcbiAgICB9XG4gIH1cblxuICBzdW1tYXJ5KCkge1xuICAgIHJldHVybiBgbWljcm9waG9uZWA7XG4gIH1cblxuICAvLyBDb25zdHJ1Y3QgYSBNaWNyb3Bob25lSXRlcmF0b3IgYW5kIHN0YXJ0IHRoZSBhdWRpbyBzdHJlYW0uXG4gIHN0YXRpYyBhc3luYyBjcmVhdGUobWljcm9waG9uZUNvbmZpZzogTWljcm9waG9uZUNvbmZpZyA9IHt9KSB7XG4gICAgaWYgKCFlbnYoKS5nZXQoJ0lTX0JST1dTRVInKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdtaWNyb3Bob25lIEFQSSBpcyBvbmx5IHN1cHBvcnRlZCBpbiBicm93c2VyIGVudmlyb25tZW50LicpO1xuICAgIH1cblxuICAgIGNvbnN0IG1pY3JvcGhvbmVJdGVyYXRvciA9IG5ldyBNaWNyb3Bob25lSXRlcmF0b3IobWljcm9waG9uZUNvbmZpZyk7XG5cbiAgICAvLyBDYWxsIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkgdG8gaW5pdGlhbGl6ZSB0aGUgYXVkaW8gc3RyZWFtLlxuICAgIGF3YWl0IG1pY3JvcGhvbmVJdGVyYXRvci5zdGFydCgpO1xuXG4gICAgcmV0dXJuIG1pY3JvcGhvbmVJdGVyYXRvcjtcbiAgfVxuXG4gIC8vIFN0YXJ0IHRoZSBhdWRpbyBzdHJlYW0gYW5kIEZGVC5cbiAgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICBhdWRpbzogdGhpcy5hdWRpb1RyYWNrQ29uc3RyYWludHMgPT0gbnVsbCA/IHRydWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9UcmFja0NvbnN0cmFpbnRzLFxuICAgICAgICB2aWRlbzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXJyb3IgdGhyb3duIHdoaWxlIGluaXRpYWxpemluZyB2aWRlbyBzdHJlYW06ICR7ZS5tZXNzYWdlfWApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdHJlYW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IG9idGFpbiBhdWRpbyBmcm9tIG1pY3JvcGhvbmUuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY3R4Q29uc3RydWN0b3IgPVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICh3aW5kb3cgYXMgYW55KS5BdWRpb0NvbnRleHQgfHwgKHdpbmRvdyBhcyBhbnkpLndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBjdHhDb25zdHJ1Y3RvcigpO1xuXG4gICAgaWYgKCF0aGlzLnNhbXBsZVJhdGVIeikge1xuICAgICAgLy8gSWYgc2FtcGxlIHJhdGUgaXMgbm90IHByb3ZpZGVkLCB1c2UgdGhlIGF2YWlsYWJsZSBzYW1wbGUgcmF0ZSBvblxuICAgICAgLy8gZGV2aWNlLlxuICAgICAgdGhpcy5zYW1wbGVSYXRlSHogPSB0aGlzLmF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZSAhPT0gdGhpcy5zYW1wbGVSYXRlSHopIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTWlzbWF0Y2ggaW4gc2FtcGxpbmcgcmF0ZTogYCArXG4gICAgICAgICAgYEV4cGVjdGVkOiAke3RoaXMuc2FtcGxlUmF0ZUh6fTsgYCArXG4gICAgICAgICAgYEFjdHVhbDogJHt0aGlzLmF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmVhbVNvdXJjZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHRoaXMuc3RyZWFtKTtcbiAgICB0aGlzLmFuYWx5c2VyID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICB0aGlzLmFuYWx5c2VyLmZmdFNpemUgPSB0aGlzLmZmdFNpemUgKiAyO1xuICAgIHRoaXMuYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gdGhpcy5zbW9vdGhpbmdUaW1lQ29uc3RhbnQ7XG4gICAgc3RyZWFtU291cmNlLmNvbm5lY3QodGhpcy5hbmFseXNlcik7XG4gICAgdGhpcy5mcmVxRGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5mZnRTaXplKTtcbiAgICB0aGlzLnRpbWVEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmZmdFNpemUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFzeW5jIG5leHQoKTogUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUZW5zb3JDb250YWluZXI+PiB7XG4gICAgaWYgKHRoaXMuaXNDbG9zZWQpIHtcbiAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIGRvbmU6IHRydWV9O1xuICAgIH1cblxuICAgIGxldCBzcGVjdHJvZ3JhbVRlbnNvcjogVGVuc29yO1xuICAgIGxldCB3YXZlZm9ybVRlbnNvcjogVGVuc29yO1xuXG4gICAgY29uc3QgYXVkaW9EYXRhUXVldWUgPSBhd2FpdCB0aGlzLmdldEF1ZGlvRGF0YSgpO1xuICAgIGlmICh0aGlzLmluY2x1ZGVTcGVjdHJvZ3JhbSkge1xuICAgICAgY29uc3QgZnJlcURhdGEgPSB0aGlzLmZsYXR0ZW5RdWV1ZShhdWRpb0RhdGFRdWV1ZS5mcmVxRGF0YVF1ZXVlKTtcbiAgICAgIHNwZWN0cm9ncmFtVGVuc29yID0gdGhpcy5nZXRUZW5zb3JGcm9tQXVkaW9EYXRhQXJyYXkoXG4gICAgICAgICAgZnJlcURhdGEsIFt0aGlzLm51bUZyYW1lcywgdGhpcy5jb2x1bW5UcnVuY2F0ZUxlbmd0aCwgMV0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmNsdWRlV2F2ZWZvcm0pIHtcbiAgICAgIGNvbnN0IHRpbWVEYXRhID0gdGhpcy5mbGF0dGVuUXVldWUoYXVkaW9EYXRhUXVldWUudGltZURhdGFRdWV1ZSk7XG4gICAgICB3YXZlZm9ybVRlbnNvciA9IHRoaXMuZ2V0VGVuc29yRnJvbUF1ZGlvRGF0YUFycmF5KFxuICAgICAgICAgIHRpbWVEYXRhLCBbdGhpcy5udW1GcmFtZXMgKiB0aGlzLmZmdFNpemUsIDFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHsnc3BlY3Ryb2dyYW0nOiBzcGVjdHJvZ3JhbVRlbnNvciwgJ3dhdmVmb3JtJzogd2F2ZWZvcm1UZW5zb3J9LFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FwdHVyZSBvbmUgcmVzdWx0IGZyb20gdGhlIGF1ZGlvIHN0cmVhbSwgYW5kIGV4dHJhY3QgdGhlIHZhbHVlIGZyb21cbiAgLy8gaXRlcmF0b3IubmV4dCgpIHJlc3VsdC5cbiAgYXN5bmMgY2FwdHVyZSgpOiBQcm9taXNlPHtzcGVjdHJvZ3JhbTogVGVuc29yM0QsIHdhdmVmb3JtOiBUZW5zb3IyRH0+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMubmV4dCgpKS52YWx1ZSBhc1xuICAgICAgICB7c3BlY3Ryb2dyYW06IFRlbnNvcjNELCB3YXZlZm9ybTogVGVuc29yMkR9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRBdWRpb0RhdGEoKTpcbiAgICAgIFByb21pc2U8e2ZyZXFEYXRhUXVldWU6IEZsb2F0MzJBcnJheVtdLCB0aW1lRGF0YVF1ZXVlOiBGbG9hdDMyQXJyYXlbXX0+IHtcbiAgICBjb25zdCBmcmVxRGF0YVF1ZXVlOiBGbG9hdDMyQXJyYXlbXSA9IFtdO1xuICAgIGNvbnN0IHRpbWVEYXRhUXVldWU6IEZsb2F0MzJBcnJheVtdID0gW107XG4gICAgbGV0IGN1cnJlbnRGcmFtZXMgPSAwO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGVTcGVjdHJvZ3JhbSkge1xuICAgICAgICAgIHRoaXMuYW5hbHlzZXIuZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKHRoaXMuZnJlcURhdGEpO1xuICAgICAgICAgIC8vIElmIHRoZSBhdWRpbyBzdHJlYW0gaXMgaW5pdGlhbGl6aW5nLCByZXR1cm4gZW1wdHkgcXVldWUuXG4gICAgICAgICAgaWYgKHRoaXMuZnJlcURhdGFbMF0gPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7ZnJlcURhdGFRdWV1ZSwgdGltZURhdGFRdWV1ZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmcmVxRGF0YVF1ZXVlLnB1c2godGhpcy5mcmVxRGF0YS5zbGljZSgwLCB0aGlzLmNvbHVtblRydW5jYXRlTGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZVdhdmVmb3JtKSB7XG4gICAgICAgICAgdGhpcy5hbmFseXNlci5nZXRGbG9hdFRpbWVEb21haW5EYXRhKHRoaXMudGltZURhdGEpO1xuICAgICAgICAgIHRpbWVEYXRhUXVldWUucHVzaCh0aGlzLnRpbWVEYXRhLnNsaWNlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xlYW4gaW50ZXJ2YWwgYW5kIHJldHVybiB3aGVuIGFsbCBmcmFtZXMgaGF2ZSBiZWVuIGNvbGxlY3RlZFxuICAgICAgICBpZiAoKytjdXJyZW50RnJhbWVzID09PSB0aGlzLm51bUZyYW1lcykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgICAgcmVzb2x2ZSh7ZnJlcURhdGFRdWV1ZSwgdGltZURhdGFRdWV1ZX0pO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmZmdFNpemUgLyB0aGlzLnNhbXBsZVJhdGVIeiAqIDFlMyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTdG9wIHRoZSBhdWRpbyBzdHJlYW0gYW5kIHBhdXNlIHRoZSBpdGVyYXRvci5cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMuaXNDbG9zZWQgPSB0cnVlO1xuICAgICAgdGhpcy5hbmFseXNlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmF1ZGlvQ29udGV4dC5jbG9zZSgpO1xuICAgICAgaWYgKHRoaXMuc3RyZWFtICE9IG51bGwgJiYgdGhpcy5zdHJlYW0uZ2V0VHJhY2tzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnN0cmVhbS5nZXRUcmFja3MoKVswXS5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgdG9BcnJheSgpIGZ1bmN0aW9uIHRvIHByZXZlbnQgY29sbGVjdGluZy5cbiAgb3ZlcnJpZGUgdG9BcnJheSgpOiBQcm9taXNlPFRlbnNvcltdPiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGNvbnZlcnQgaW5maW5pdGUgYXVkaW8gc3RyZWFtIHRvIGFycmF5LicpO1xuICB9XG5cbiAgLy8gUmV0dXJuIGF1ZGlvIHNhbXBsaW5nIHJhdGUgaW4gSHpcbiAgZ2V0U2FtcGxlUmF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNhbXBsZVJhdGVIejtcbiAgfVxuXG4gIHByaXZhdGUgZmxhdHRlblF1ZXVlKHF1ZXVlOiBGbG9hdDMyQXJyYXlbXSk6IEZsb2F0MzJBcnJheSB7XG4gICAgY29uc3QgZnJhbWVTaXplID0gcXVldWVbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGZyZXFEYXRhID0gbmV3IEZsb2F0MzJBcnJheShxdWV1ZS5sZW5ndGggKiBmcmFtZVNpemUpO1xuICAgIHF1ZXVlLmZvckVhY2goKGRhdGEsIGkpID0+IGZyZXFEYXRhLnNldChkYXRhLCBpICogZnJhbWVTaXplKSk7XG4gICAgcmV0dXJuIGZyZXFEYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZW5zb3JGcm9tQXVkaW9EYXRhQXJyYXkoZnJlcURhdGE6IEZsb2F0MzJBcnJheSwgc2hhcGU6IG51bWJlcltdKTpcbiAgICAgIFRlbnNvciB7XG4gICAgY29uc3QgdmFscyA9IG5ldyBGbG9hdDMyQXJyYXkodXRpbC5zaXplRnJvbVNoYXBlKHNoYXBlKSk7XG4gICAgLy8gSWYgdGhlIGRhdGEgaXMgbGVzcyB0aGFuIHRoZSBvdXRwdXQgc2hhcGUsIHRoZSByZXN0IGlzIHBhZGRlZCB3aXRoIHplcm9zLlxuICAgIHZhbHMuc2V0KGZyZXFEYXRhLCB2YWxzLmxlbmd0aCAtIGZyZXFEYXRhLmxlbmd0aCk7XG4gICAgcmV0dXJuIHRlbnNvcih2YWxzLCBzaGFwZSk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/webcam_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "WebcamIterator",
    ()=>WebcamIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__browser$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/browser.js [app-client] (ecmascript) <export * as browser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/expand_dims.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ops.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)");
;
;
class WebcamIterator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyIterator"] {
    constructor(webcamVideoElement, webcamConfig){
        super();
        this.webcamVideoElement = webcamVideoElement;
        this.webcamConfig = webcamConfig;
        this.isClosed = true;
        this.resize = false;
        if (this.needToResize()) {
            this.resize = true;
            this.cropSize = [
                this.webcamConfig.resizeHeight,
                this.webcamConfig.resizeWidth
            ];
            this.cropBoxInd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
                0
            ], 'int32');
            if (this.webcamConfig.centerCrop) {
                // Calculate the box based on resizing shape.
                const widthCroppingRatio = this.webcamConfig.resizeWidth * 1.0 / this.webcamVideoElement.width;
                const heightCroppingRatio = this.webcamConfig.resizeHeight * 1.0 / this.webcamVideoElement.height;
                const widthCropStart = (1 - widthCroppingRatio) / 2;
                const heightCropStart = (1 - heightCroppingRatio) / 2;
                const widthCropEnd = widthCropStart + widthCroppingRatio;
                const heightCropEnd = heightCroppingRatio + heightCropStart;
                this.cropBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor2d"])([
                    heightCropStart,
                    widthCropStart,
                    heightCropEnd,
                    widthCropEnd
                ], [
                    1,
                    4
                ]);
            } else {
                this.cropBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor2d"])([
                    0,
                    0,
                    1,
                    1
                ], [
                    1,
                    4
                ]);
            }
        }
    }
    summary() {
        return `webcam`;
    }
    // Construct a WebcamIterator and start it's video stream.
    static async create(webcamVideoElement, webcamConfig = {}) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER')) {
            throw new Error('tf.data.webcam is only supported in browser environment.');
        }
        if (!webcamVideoElement) {
            // If webcam video element is not provided, create a hidden video element
            // with provided width and height.
            webcamVideoElement = document.createElement('video');
            if (!webcamConfig.resizeWidth || !webcamConfig.resizeHeight) {
                throw new Error('Please provide webcam video element, or resizeWidth and ' + 'resizeHeight to create a hidden video element.');
            }
            webcamVideoElement.width = webcamConfig.resizeWidth;
            webcamVideoElement.height = webcamConfig.resizeHeight;
        }
        const webcamIterator = new WebcamIterator(webcamVideoElement, webcamConfig);
        // Call async function to initialize the video stream.
        await webcamIterator.start();
        return webcamIterator;
    }
    // Async function to start video stream.
    async start() {
        if (this.webcamConfig.facingMode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(this.webcamConfig.facingMode === 'user' || this.webcamConfig.facingMode === 'environment', ()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. ` + `Please provide 'user' or 'environment'`);
        }
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    deviceId: this.webcamConfig.deviceId,
                    facingMode: this.webcamConfig.facingMode ? this.webcamConfig.facingMode : 'user',
                    width: this.webcamVideoElement.width,
                    height: this.webcamVideoElement.height
                }
            });
        } catch (e) {
            // Modify the error message but leave the stack trace intact
            e.message = `Error thrown while initializing video stream: ${e.message}`;
            throw e;
        }
        if (!this.stream) {
            throw new Error('Could not obtain video from webcam.');
        }
        // Older browsers may not have srcObject
        try {
            this.webcamVideoElement.srcObject = this.stream;
        } catch (error) {
            console.log(error);
            this.webcamVideoElement.src = window.URL.createObjectURL(this.stream);
        }
        // Start the webcam video stream
        this.webcamVideoElement.play();
        this.isClosed = false;
        return new Promise((resolve)=>{
            // Add event listener to make sure the webcam has been fully initialized.
            this.webcamVideoElement.onloadedmetadata = ()=>{
                resolve();
            };
        });
    }
    async next() {
        if (this.isClosed) {
            return {
                value: null,
                done: true
            };
        }
        let img;
        try {
            img = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__browser$3e$__["browser"].fromPixels(this.webcamVideoElement);
        } catch (e) {
            throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(e)}`);
        }
        if (this.resize) {
            try {
                return {
                    value: this.cropAndResizeFrame(img),
                    done: false
                };
            } catch (e) {
                throw new Error(`Error thrown cropping the video: ${e.message}`);
            } finally{
                img.dispose();
            }
        } else {
            return {
                value: img,
                done: false
            };
        }
    }
    needToResize() {
        // If resizeWidth and resizeHeight are provided, and different from the
        // width and height of original HTMLVideoElement, then resizing and cropping
        // is required.
        if (this.webcamConfig.resizeWidth && this.webcamConfig.resizeHeight && (this.webcamVideoElement.width !== this.webcamConfig.resizeWidth || this.webcamVideoElement.height !== this.webcamConfig.resizeHeight)) {
            return true;
        }
        return false;
    }
    // Cropping and resizing each frame based on config
    cropAndResizeFrame(img) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const expandedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])(img, 'float32'), 0);
            let resizedImage;
            resizedImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["image"].cropAndResize(expandedImage, this.cropBox, this.cropBoxInd, this.cropSize, 'bilinear');
            // Extract image from batch cropping.
            const shape = resizedImage.shape;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(resizedImage, shape.slice(1));
        });
    }
    // Capture one frame from the video stream, and extract the value from
    // iterator.next() result.
    async capture() {
        return (await this.next()).value;
    }
    // Stop the video stream and pause webcam iterator.
    stop() {
        const tracks = this.stream.getTracks();
        tracks.forEach((track)=>track.stop());
        try {
            this.webcamVideoElement.srcObject = null;
        } catch (error) {
            console.log(error);
            this.webcamVideoElement.src = null;
        }
        this.isClosed = true;
    }
    // Override toArray() function to prevent collecting.
    toArray() {
        throw new Error('Can not convert infinite video stream to array.');
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViY2FtX2l0ZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1kYXRhL3NyYy9pdGVyYXRvcnMvd2ViY2FtX2l0ZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQWdDLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU3SixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0M7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFzQjtJQVF4RCxZQUN1QixrQkFBb0MsRUFDcEMsWUFBMEI7UUFDL0MsS0FBSyxFQUFFLENBQUM7UUFGYSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBVHpDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUTtnQkFDVCxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUNoQyw2Q0FBNkM7Z0JBQzdDLE1BQU0sa0JBQWtCLEdBQ3BCLElBQUksQ0FBQyxZQUFZLENB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Q0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELHFEQUFxRDtJQUM1QyxPQUFPO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7YnJvd3NlciwgY2FzdCwgZW52LCBleHBhbmREaW1zLCBpbWFnZSwgcmVzaGFwZSwgdGVuc29yMWQsIFRlbnNvcjFELCB0ZW5zb3IyZCwgVGVuc29yMkQsIFRlbnNvcjNELCBUZW5zb3I0RCwgdGlkeSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7V2ViY2FtQ29uZmlnfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge0xhenlJdGVyYXRvcn0gZnJvbSAnLi9sYXp5X2l0ZXJhdG9yJztcblxuLyoqXG4gKiBQcm92aWRlIGEgc3RyZWFtIG9mIGltYWdlIHRlbnNvcnMgZnJvbSB3ZWJjYW0gdmlkZW8gc3RyZWFtLiBPbmx5IHdvcmtzIGluXG4gKiBicm93c2VyIGVudmlyb25tZW50LlxuICovXG5leHBvcnQgY2xhc3MgV2ViY2FtSXRlcmF0b3IgZXh0ZW5kcyBMYXp5SXRlcmF0b3I8VGVuc29yM0Q+IHtcbiAgcHJpdmF0ZSBpc0Nsb3NlZCA9IHRydWU7XG4gIHByaXZhdGUgc3RyZWFtOiBNZWRpYVN0cmVhbTtcbiAgcHJpdmF0ZSByZXNpemUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjcm9wU2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgcHJpdmF0ZSBjcm9wQm94OiBUZW5zb3IyRDtcbiAgcHJpdmF0ZSBjcm9wQm94SW5kOiBUZW5zb3IxRDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHdlYmNhbVZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudCxcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSB3ZWJjYW1Db25maWc6IFdlYmNhbUNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHRoaXMubmVlZFRvUmVzaXplKCkpIHtcbiAgICAgIHRoaXMucmVzaXplID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3JvcFNpemUgPVxuICAgICAgICAgIFt0aGlzLndlYmNhbUNvbmZpZy5yZXNpemVIZWlnaHQsIHRoaXMud2ViY2FtQ29uZmlnLnJlc2l6ZVdpZHRoXTtcbiAgICAgIHRoaXMuY3JvcEJveEluZCA9IHRlbnNvcjFkKFswXSwgJ2ludDMyJyk7XG4gICAgICBpZiAodGhpcy53ZWJjYW1Db25maWcuY2VudGVyQ3JvcCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGJveCBiYXNlZCBvbiByZXNpemluZyBzaGFwZS5cbiAgICAgICAgY29uc3Qgd2lkdGhDcm9wcGluZ1JhdGlvID1cbiAgICAgICAgICAgIHRoaXMud2ViY2FtQ29uZmlnLnJlc2l6ZVdpZHRoICogMS4wIC8gdGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodENyb3BwaW5nUmF0aW8gPSB0aGlzLndlYmNhbUNvbmZpZy5yZXNpemVIZWlnaHQgKiAxLjAgL1xuICAgICAgICAgICAgdGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQuaGVpZ2h0O1xuICAgICAgICBjb25zdCB3aWR0aENyb3BTdGFydCA9ICgxIC0gd2lkdGhDcm9wcGluZ1JhdGlvKSAvIDI7XG4gICAgICAgIGNvbnN0IGhlaWdodENyb3BTdGFydCA9ICgxIC0gaGVpZ2h0Q3JvcHBpbmdSYXRpbykgLyAyO1xuICAgICAgICBjb25zdCB3aWR0aENyb3BFbmQgPSB3aWR0aENyb3BTdGFydCArIHdpZHRoQ3JvcHBpbmdSYXRpbztcbiAgICAgICAgY29uc3QgaGVpZ2h0Q3JvcEVuZCA9IGhlaWdodENyb3BwaW5nUmF0aW8gKyBoZWlnaHRDcm9wU3RhcnQ7XG4gICAgICAgIHRoaXMuY3JvcEJveCA9IHRlbnNvcjJkKFxuICAgICAgICAgICAgW2hlaWdodENyb3BTdGFydCwgd2lkdGhDcm9wU3RhcnQsIGhlaWdodENyb3BFbmQsIHdpZHRoQ3JvcEVuZF0sXG4gICAgICAgICAgICBbMSwgNF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jcm9wQm94ID0gdGVuc29yMmQoWzAsIDAsIDEsIDFdLCBbMSwgNF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGB3ZWJjYW1gO1xuICB9XG5cbiAgLy8gQ29uc3RydWN0IGEgV2ViY2FtSXRlcmF0b3IgYW5kIHN0YXJ0IGl0J3MgdmlkZW8gc3RyZWFtLlxuICBzdGF0aWMgYXN5bmMgY3JlYXRlKFxuICAgICAgd2ViY2FtVmlkZW9FbGVtZW50PzogSFRNTFZpZGVvRWxlbWVudCwgd2ViY2FtQ29uZmlnOiBXZWJjYW1Db25maWcgPSB7fSkge1xuICAgIGlmICghZW52KCkuZ2V0KCdJU19CUk9XU0VSJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAndGYuZGF0YS53ZWJjYW0gaXMgb25seSBzdXBwb3J0ZWQgaW4gYnJvd3NlciBlbnZpcm9ubWVudC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIXdlYmNhbVZpZGVvRWxlbWVudCkge1xuICAgICAgLy8gSWYgd2ViY2FtIHZpZGVvIGVsZW1lbnQgaXMgbm90IHByb3ZpZGVkLCBjcmVhdGUgYSBoaWRkZW4gdmlkZW8gZWxlbWVudFxuICAgICAgLy8gd2l0aCBwcm92aWRlZCB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgICAgd2ViY2FtVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgIGlmICghd2ViY2FtQ29uZmlnLnJlc2l6ZVdpZHRoIHx8ICF3ZWJjYW1Db25maWcucmVzaXplSGVpZ2h0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdQbGVhc2UgcHJvdmlkZSB3ZWJjYW0gdmlkZW8gZWxlbWVudCwgb3IgcmVzaXplV2lkdGggYW5kICcgK1xuICAgICAgICAgICAgJ3Jlc2l6ZUhlaWdodCB0byBjcmVhdGUgYSBoaWRkZW4gdmlkZW8gZWxlbWVudC4nKTtcbiAgICAgIH1cbiAgICAgIHdlYmNhbVZpZGVvRWxlbWVudC53aWR0aCA9IHdlYmNhbUNvbmZpZy5yZXNpemVXaWR0aDtcbiAgICAgIHdlYmNhbVZpZGVvRWxlbWVudC5oZWlnaHQgPSB3ZWJjYW1Db25maWcucmVzaXplSGVpZ2h0O1xuICAgIH1cbiAgICBjb25zdCB3ZWJjYW1JdGVyYXRvciA9IG5ldyBXZWJjYW1JdGVyYXRvcih3ZWJjYW1WaWRlb0VsZW1lbnQsIHdlYmNhbUNvbmZpZyk7XG5cbiAgICAvLyBDYWxsIGFzeW5jIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgdGhlIHZpZGVvIHN0cmVhbS5cbiAgICBhd2FpdCB3ZWJjYW1JdGVyYXRvci5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHdlYmNhbUl0ZXJhdG9yO1xuICB9XG5cbiAgLy8gQXN5bmMgZnVuY3Rpb24gdG8gc3RhcnQgdmlkZW8gc3RyZWFtLlxuICBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy53ZWJjYW1Db25maWcuZmFjaW5nTW9kZSkge1xuICAgICAgdXRpbC5hc3NlcnQoXG4gICAgICAgICAgKHRoaXMud2ViY2FtQ29uZmlnLmZhY2luZ01vZGUgPT09ICd1c2VyJykgfHxcbiAgICAgICAgICAgICAgKHRoaXMud2ViY2FtQ29uZmlnLmZhY2luZ01vZGUgPT09ICdlbnZpcm9ubWVudCcpLFxuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIGBJbnZhbGlkIHdlYmNhbSBmYWNpbmcgbW9kZTogJHt0aGlzLndlYmNhbUNvbmZpZy5mYWNpbmdNb2RlfS4gYCArXG4gICAgICAgICAgICAgIGBQbGVhc2UgcHJvdmlkZSAndXNlcicgb3IgJ2Vudmlyb25tZW50J2ApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICBkZXZpY2VJZDogdGhpcy53ZWJjYW1Db25maWcuZGV2aWNlSWQsXG4gICAgICAgICAgZmFjaW5nTW9kZTogdGhpcy53ZWJjYW1Db25maWcuZmFjaW5nTW9kZSA/XG4gICAgICAgICAgICAgIHRoaXMud2ViY2FtQ29uZmlnLmZhY2luZ01vZGUgOlxuICAgICAgICAgICAgICAndXNlcicsXG4gICAgICAgICAgd2lkdGg6IHRoaXMud2ViY2FtVmlkZW9FbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIE1vZGlmeSB0aGUgZXJyb3IgbWVzc2FnZSBidXQgbGVhdmUgdGhlIHN0YWNrIHRyYWNlIGludGFjdFxuICAgICAgZS5tZXNzYWdlID0gYEVycm9yIHRocm93biB3aGlsZSBpbml0aWFsaXppbmcgdmlkZW8gc3RyZWFtOiAke2UubWVzc2FnZX1gO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RyZWFtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBvYnRhaW4gdmlkZW8gZnJvbSB3ZWJjYW0uJyk7XG4gICAgfVxuXG4gICAgLy8gT2xkZXIgYnJvd3NlcnMgbWF5IG5vdCBoYXZlIHNyY09iamVjdFxuICAgIHRyeSB7XG4gICAgICB0aGlzLndlYmNhbVZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSB0aGlzLnN0cmVhbTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoXG4gICAgICAgIHRoaXMuc3RyZWFtIGFzIHVua25vd24gYXMgTWVkaWFTb3VyY2UpO1xuICAgIH1cbiAgICAvLyBTdGFydCB0aGUgd2ViY2FtIHZpZGVvIHN0cmVhbVxuICAgIHRoaXMud2ViY2FtVmlkZW9FbGVtZW50LnBsYXkoKTtcblxuICAgIHRoaXMuaXNDbG9zZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBtYWtlIHN1cmUgdGhlIHdlYmNhbSBoYXMgYmVlbiBmdWxseSBpbml0aWFsaXplZC5cbiAgICAgIHRoaXMud2ViY2FtVmlkZW9FbGVtZW50Lm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBuZXh0KCk6IFByb21pc2U8SXRlcmF0b3JSZXN1bHQ8VGVuc29yM0Q+PiB7XG4gICAgaWYgKHRoaXMuaXNDbG9zZWQpIHtcbiAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIGRvbmU6IHRydWV9O1xuICAgIH1cblxuICAgIGxldCBpbWc7XG4gICAgdHJ5IHtcbiAgICAgIGltZyA9IGJyb3dzZXIuZnJvbVBpeGVscyh0aGlzLndlYmNhbVZpZGVvRWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBFcnJvciB0aHJvd24gY29udmVydGluZyB2aWRlbyB0byBwaXhlbHM6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlc2l6ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy5jcm9wQW5kUmVzaXplRnJhbWUoaW1nKSwgZG9uZTogZmFsc2V9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHRocm93biBjcm9wcGluZyB0aGUgdmlkZW86ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaW1nLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt2YWx1ZTogaW1nLCBkb25lOiBmYWxzZX07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBuZWVkVG9SZXNpemUoKSB7XG4gICAgLy8gSWYgcmVzaXplV2lkdGggYW5kIHJlc2l6ZUhlaWdodCBhcmUgcHJvdmlkZWQsIGFuZCBkaWZmZXJlbnQgZnJvbSB0aGVcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IG9mIG9yaWdpbmFsIEhUTUxWaWRlb0VsZW1lbnQsIHRoZW4gcmVzaXppbmcgYW5kIGNyb3BwaW5nXG4gICAgLy8gaXMgcmVxdWlyZWQuXG4gICAgaWYgKHRoaXMud2ViY2FtQ29uZmlnLnJlc2l6ZVdpZHRoICYmIHRoaXMud2ViY2FtQ29uZmlnLnJlc2l6ZUhlaWdodCAmJlxuICAgICAgICAodGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQud2lkdGggIT09IHRoaXMud2ViY2FtQ29uZmlnLnJlc2l6ZVdpZHRoIHx8XG4gICAgICAgICB0aGlzLndlYmNhbVZpZGVvRWxlbWVudC5oZWlnaHQgIT09IHRoaXMud2ViY2FtQ29uZmlnLnJlc2l6ZUhlaWdodCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBDcm9wcGluZyBhbmQgcmVzaXppbmcgZWFjaCBmcmFtZSBiYXNlZCBvbiBjb25maWdcbiAgY3JvcEFuZFJlc2l6ZUZyYW1lKGltZzogVGVuc29yM0QpOiBUZW5zb3IzRCB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgZXhwYW5kZWRJbWFnZTogVGVuc29yNEQgPSBleHBhbmREaW1zKGNhc3QoaW1nLCAnZmxvYXQzMicpLCAoMCkpO1xuICAgICAgbGV0IHJlc2l6ZWRJbWFnZTtcbiAgICAgIHJlc2l6ZWRJbWFnZSA9IGltYWdlLmNyb3BBbmRSZXNpemUoXG4gICAgICAgICAgZXhwYW5kZWRJbWFnZSwgdGhpcy5jcm9wQm94LCB0aGlzLmNyb3BCb3hJbmQsIHRoaXMuY3JvcFNpemUsXG4gICAgICAgICAgJ2JpbGluZWFyJyk7XG4gICAgICAvLyBFeHRyYWN0IGltYWdlIGZyb20gYmF0Y2ggY3JvcHBpbmcuXG4gICAgICBjb25zdCBzaGFwZSA9IHJlc2l6ZWRJbWFnZS5zaGFwZTtcbiAgICAgIHJldHVybiByZXNoYXBlKHJlc2l6ZWRJbWFnZSwgc2hhcGUuc2xpY2UoMSkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIENhcHR1cmUgb25lIGZyYW1lIGZyb20gdGhlIHZpZGVvIHN0cmVhbSwgYW5kIGV4dHJhY3QgdGhlIHZhbHVlIGZyb21cbiAgLy8gaXRlcmF0b3IubmV4dCgpIHJlc3VsdC5cbiAgYXN5bmMgY2FwdHVyZSgpOiBQcm9taXNlPFRlbnNvcjNEPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLm5leHQoKSkudmFsdWU7XG4gIH1cblxuICAvLyBTdG9wIHRoZSB2aWRlbyBzdHJlYW0gYW5kIHBhdXNlIHdlYmNhbSBpdGVyYXRvci5cbiAgc3RvcCgpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFja3MgPSB0aGlzLnN0cmVhbS5nZXRUcmFja3MoKTtcblxuICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdGhpcy53ZWJjYW1WaWRlb0VsZW1lbnQuc3JjID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5pc0Nsb3NlZCA9IHRydWU7XG4gIH1cblxuICAvLyBPdmVycmlkZSB0b0FycmF5KCkgZnVuY3Rpb24gdG8gcHJldmVudCBjb2xsZWN0aW5nLlxuICBvdmVycmlkZSB0b0FycmF5KCk6IFByb21pc2U8VGVuc29yM0RbXT4ge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBjb252ZXJ0IGluZmluaXRlIHZpZGVvIHN0cmVhbSB0byBhcnJheS4nKTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ /**
 * Represents a data source readable as a stream of binary data chunks.
 *
 * Because `Dataset`s can be read repeatedly (via `Dataset.iterator()`), this
 * provides a means to repeatedly create streams from the underlying data
 * sources.
 */ __turbopack_context__.s([
    "DataSource",
    ()=>DataSource
]);
class DataSource {
} // TODO(soergel): consider convenience factory functions here
 // in combination with chainable source->dataset above, e.g.:
 // tf.data.url(...).asCsvDataset().shuffle().batch()
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvZGF0YXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUlIOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBZ0IsVUFBVTtDQVUvQjtBQUVELDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0Qsb0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtCeXRlQ2h1bmtJdGVyYXRvcn0gZnJvbSAnLi9pdGVyYXRvcnMvYnl0ZV9jaHVua19pdGVyYXRvcic7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGRhdGEgc291cmNlIHJlYWRhYmxlIGFzIGEgc3RyZWFtIG9mIGJpbmFyeSBkYXRhIGNodW5rcy5cbiAqXG4gKiBCZWNhdXNlIGBEYXRhc2V0YHMgY2FuIGJlIHJlYWQgcmVwZWF0ZWRseSAodmlhIGBEYXRhc2V0Lml0ZXJhdG9yKClgKSwgdGhpc1xuICogcHJvdmlkZXMgYSBtZWFucyB0byByZXBlYXRlZGx5IGNyZWF0ZSBzdHJlYW1zIGZyb20gdGhlIHVuZGVybHlpbmcgZGF0YVxuICogc291cmNlcy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGFTb3VyY2Uge1xuICAvKipcbiAgICogT2J0YWluIGEgbmV3IHN0cmVhbSBvZiBiaW5hcnkgZGF0YSBjaHVua3MuXG4gICAqXG4gICAqIFN0YXJ0cyB0aGUgbmV3IHN0cmVhbSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGRhdGEgc291cmNlLCBldmVuIGlmIG90aGVyXG4gICAqIHN0cmVhbXMgaGF2ZSBiZWVuIG9idGFpbmVkIHByZXZpb3VzbHkuXG4gICAqL1xuICBhYnN0cmFjdCBpdGVyYXRvcigpOiBQcm9taXNlPEJ5dGVDaHVua0l0ZXJhdG9yPjtcblxuICAvLyBUT0RPKHNvZXJnZWwpOiBjb25zaWRlciBjaGFpbmFibGUgRGF0YXNldCBjb25zdHJ1Y3Rpb24gaGVyZVxufVxuXG4vLyBUT0RPKHNvZXJnZWwpOiBjb25zaWRlciBjb252ZW5pZW5jZSBmYWN0b3J5IGZ1bmN0aW9ucyBoZXJlXG4vLyBpbiBjb21iaW5hdGlvbiB3aXRoIGNoYWluYWJsZSBzb3VyY2UtPmRhdGFzZXQgYWJvdmUsIGUuZy46XG4vLyB0Zi5kYXRhLnVybCguLi4pLmFzQ3N2RGF0YXNldCgpLnNodWZmbGUoKS5iYXRjaCgpXG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/string_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "StringIterator",
    ()=>StringIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)");
;
class StringIterator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyIterator"] {
    /**
     * Splits a string stream on a given separator.
     *
     * It is assumed that the incoming chunk boundaries have no semantic meaning,
     * so conceptually the incoming stream is treated simply as the concatenation
     * of its elements.
     *
     * The outgoing stream provides chunks corresponding to the results of the
     * standard string split() operation (even if such a chunk spanned incoming
     * chunks).  The separators are not included.
     *
     * A typical usage is to split a text file (represented as a stream with
     * arbitrary chunk boundaries) into lines.
     *
     * @param upstream A readable stream of strings that can be treated as
     *   concatenated.
     * @param separator A character to split on.
     */ split(separator) {
        return new SplitIterator(this, separator);
    }
}
// ============================================================================
// The following private classes serve to implement the chainable methods
// on StringIterator.  Unfortunately they can't be placed in separate files, due
// to resulting trouble with circular imports.
// ============================================================================
// We wanted multiple inheritance, e.g.
//   class SplitIterator extends QueueIterator<string>, StringIterator
// but the TypeScript mixin approach is a bit hacky, so we take this adapter
// approach instead.
class SplitIterator extends StringIterator {
    constructor(upstream, separator){
        super();
        this.upstream = upstream;
        this.impl = new SplitIteratorImpl(upstream, separator);
    }
    summary() {
        return this.impl.summary();
    }
    async next() {
        return this.impl.next();
    }
}
class SplitIteratorImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneToManyIterator"] {
    constructor(upstream, separator){
        super();
        this.upstream = upstream;
        this.separator = separator;
        // A partial string at the end of an upstream chunk
        this.carryover = '';
    }
    summary() {
        return `${this.upstream.summary()} -> Split('${this.separator}')`;
    }
    async pump() {
        const chunkResult = await this.upstream.next();
        if (chunkResult.done) {
            if (this.carryover === '') {
                return false;
            }
            // Pretend that the pump succeeded in order to emit the small last batch.
            // The next pump() call will actually fail.
            this.outputQueue.push(this.carryover);
            this.carryover = '';
            return true;
        }
        const lines = chunkResult.value.split(this.separator);
        // Note the behavior: " ab ".split(' ') === ['', 'ab', '']
        // Thus the carryover may be '' if the separator falls on a chunk
        // boundary; this produces the correct result.
        lines[0] = this.carryover + lines[0];
        for (const line of lines.slice(0, -1)){
            this.outputQueue.push(line);
        }
        this.carryover = lines[lines.length - 1];
        return true;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX2l0ZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1kYXRhL3NyYy9pdGVyYXRvcnMvc3RyaW5nX2l0ZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWhFLE1BQU0sT0FBZ0IsY0FBZSxTQUFRLFlBQW9CO0lBQy9EOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNILEtBQUssQ0FBQyxTQUFpQjtRQUNyQixPQUFPLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUFFRCwrRUFBK0U7QUFDL0UseUVBQXlFO0FBQ3pFLGdGQUFnRjtBQUNoRiw4Q0FBOEM7QUFDOUMsK0VBQStFO0FBRS9FLHVDQUF1QztBQUN2QyxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLG9CQUFvQjtBQUVwQixNQUFNLGFBQWMsU0FBUSxjQUFjO0lBR3hDLFlBQXNCLFFBQThCLEVBQUUsU0FBaUI7UUFDckUsS0FBSyxFQUFFLENBQUM7UUFEWSxhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUVsRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQWlCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLGlCQUFrQixTQUFRLGlCQUF5QjtJQUl2RCxZQUNjLFFBQThCLEVBQVksU0FBaUI7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFESSxhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUFZLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFKekUsbURBQW1EO1FBQ25ELGNBQVMsR0FBRyxFQUFFLENBQUM7SUFLZixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxjQUFjLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztJQUNwRSxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCx5RUFBeUU7WUFDekUsMkNBQTJDO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBYSxDQUFDO1FBQ2xFLDBEQUEwRDtRQUMxRCxpRUFBaUU7UUFDakUsOENBQThDO1FBRTlDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtMYXp5SXRlcmF0b3IsIE9uZVRvTWFueUl0ZXJhdG9yfSBmcm9tICcuL2xhenlfaXRlcmF0b3InO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RyaW5nSXRlcmF0b3IgZXh0ZW5kcyBMYXp5SXRlcmF0b3I8c3RyaW5nPiB7XG4gIC8qKlxuICAgKiBTcGxpdHMgYSBzdHJpbmcgc3RyZWFtIG9uIGEgZ2l2ZW4gc2VwYXJhdG9yLlxuICAgKlxuICAgKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIGluY29taW5nIGNodW5rIGJvdW5kYXJpZXMgaGF2ZSBubyBzZW1hbnRpYyBtZWFuaW5nLFxuICAgKiBzbyBjb25jZXB0dWFsbHkgdGhlIGluY29taW5nIHN0cmVhbSBpcyB0cmVhdGVkIHNpbXBseSBhcyB0aGUgY29uY2F0ZW5hdGlvblxuICAgKiBvZiBpdHMgZWxlbWVudHMuXG4gICAqXG4gICAqIFRoZSBvdXRnb2luZyBzdHJlYW0gcHJvdmlkZXMgY2h1bmtzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlc3VsdHMgb2YgdGhlXG4gICAqIHN0YW5kYXJkIHN0cmluZyBzcGxpdCgpIG9wZXJhdGlvbiAoZXZlbiBpZiBzdWNoIGEgY2h1bmsgc3Bhbm5lZCBpbmNvbWluZ1xuICAgKiBjaHVua3MpLiAgVGhlIHNlcGFyYXRvcnMgYXJlIG5vdCBpbmNsdWRlZC5cbiAgICpcbiAgICogQSB0eXBpY2FsIHVzYWdlIGlzIHRvIHNwbGl0IGEgdGV4dCBmaWxlIChyZXByZXNlbnRlZCBhcyBhIHN0cmVhbSB3aXRoXG4gICAqIGFyYml0cmFyeSBjaHVuayBib3VuZGFyaWVzKSBpbnRvIGxpbmVzLlxuICAgKlxuICAgKiBAcGFyYW0gdXBzdHJlYW0gQSByZWFkYWJsZSBzdHJlYW0gb2Ygc3RyaW5ncyB0aGF0IGNhbiBiZSB0cmVhdGVkIGFzXG4gICAqICAgY29uY2F0ZW5hdGVkLlxuICAgKiBAcGFyYW0gc2VwYXJhdG9yIEEgY2hhcmFjdGVyIHRvIHNwbGl0IG9uLlxuICAgKi9cbiAgc3BsaXQoc2VwYXJhdG9yOiBzdHJpbmcpOiBTdHJpbmdJdGVyYXRvciB7XG4gICAgcmV0dXJuIG5ldyBTcGxpdEl0ZXJhdG9yKHRoaXMsIHNlcGFyYXRvcik7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVGhlIGZvbGxvd2luZyBwcml2YXRlIGNsYXNzZXMgc2VydmUgdG8gaW1wbGVtZW50IHRoZSBjaGFpbmFibGUgbWV0aG9kc1xuLy8gb24gU3RyaW5nSXRlcmF0b3IuICBVbmZvcnR1bmF0ZWx5IHRoZXkgY2FuJ3QgYmUgcGxhY2VkIGluIHNlcGFyYXRlIGZpbGVzLCBkdWVcbi8vIHRvIHJlc3VsdGluZyB0cm91YmxlIHdpdGggY2lyY3VsYXIgaW1wb3J0cy5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gV2Ugd2FudGVkIG11bHRpcGxlIGluaGVyaXRhbmNlLCBlLmcuXG4vLyAgIGNsYXNzIFNwbGl0SXRlcmF0b3IgZXh0ZW5kcyBRdWV1ZUl0ZXJhdG9yPHN0cmluZz4sIFN0cmluZ0l0ZXJhdG9yXG4vLyBidXQgdGhlIFR5cGVTY3JpcHQgbWl4aW4gYXBwcm9hY2ggaXMgYSBiaXQgaGFja3ksIHNvIHdlIHRha2UgdGhpcyBhZGFwdGVyXG4vLyBhcHByb2FjaCBpbnN0ZWFkLlxuXG5jbGFzcyBTcGxpdEl0ZXJhdG9yIGV4dGVuZHMgU3RyaW5nSXRlcmF0b3Ige1xuICBwcml2YXRlIGltcGw6IFNwbGl0SXRlcmF0b3JJbXBsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB1cHN0cmVhbTogTGF6eUl0ZXJhdG9yPHN0cmluZz4sIHNlcGFyYXRvcjogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmltcGwgPSBuZXcgU3BsaXRJdGVyYXRvckltcGwodXBzdHJlYW0sIHNlcGFyYXRvcik7XG4gIH1cblxuICBzdW1tYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmltcGwuc3VtbWFyeSgpO1xuICB9XG5cbiAgYXN5bmMgbmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsLm5leHQoKTtcbiAgfVxufVxuXG5jbGFzcyBTcGxpdEl0ZXJhdG9ySW1wbCBleHRlbmRzIE9uZVRvTWFueUl0ZXJhdG9yPHN0cmluZz4ge1xuICAvLyBBIHBhcnRpYWwgc3RyaW5nIGF0IHRoZSBlbmQgb2YgYW4gdXBzdHJlYW0gY2h1bmtcbiAgY2FycnlvdmVyID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgdXBzdHJlYW06IExhenlJdGVyYXRvcjxzdHJpbmc+LCBwcm90ZWN0ZWQgc2VwYXJhdG9yOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3VtbWFyeSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy51cHN0cmVhbS5zdW1tYXJ5KCl9IC0+IFNwbGl0KCcke3RoaXMuc2VwYXJhdG9yfScpYDtcbiAgfVxuXG4gIGFzeW5jIHB1bXAoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgY2h1bmtSZXN1bHQgPSBhd2FpdCB0aGlzLnVwc3RyZWFtLm5leHQoKTtcbiAgICBpZiAoY2h1bmtSZXN1bHQuZG9uZSkge1xuICAgICAgaWYgKHRoaXMuY2FycnlvdmVyID09PSAnJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXRlbmQgdGhhdCB0aGUgcHVtcCBzdWNjZWVkZWQgaW4gb3JkZXIgdG8gZW1pdCB0aGUgc21hbGwgbGFzdCBiYXRjaC5cbiAgICAgIC8vIFRoZSBuZXh0IHB1bXAoKSBjYWxsIHdpbGwgYWN0dWFsbHkgZmFpbC5cbiAgICAgIHRoaXMub3V0cHV0UXVldWUucHVzaCh0aGlzLmNhcnJ5b3Zlcik7XG4gICAgICB0aGlzLmNhcnJ5b3ZlciA9ICcnO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGxpbmVzID0gY2h1bmtSZXN1bHQudmFsdWUuc3BsaXQodGhpcy5zZXBhcmF0b3IpIGFzIHN0cmluZ1tdO1xuICAgIC8vIE5vdGUgdGhlIGJlaGF2aW9yOiBcIiBhYiBcIi5zcGxpdCgnICcpID09PSBbJycsICdhYicsICcnXVxuICAgIC8vIFRodXMgdGhlIGNhcnJ5b3ZlciBtYXkgYmUgJycgaWYgdGhlIHNlcGFyYXRvciBmYWxscyBvbiBhIGNodW5rXG4gICAgLy8gYm91bmRhcnk7IHRoaXMgcHJvZHVjZXMgdGhlIGNvcnJlY3QgcmVzdWx0LlxuXG4gICAgbGluZXNbMF0gPSB0aGlzLmNhcnJ5b3ZlciArIGxpbmVzWzBdO1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcy5zbGljZSgwLCAtMSkpIHtcbiAgICAgIHRoaXMub3V0cHV0UXVldWUucHVzaChsaW5lKTtcbiAgICB9XG4gICAgdGhpcy5jYXJyeW92ZXIgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/byte_chunk_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "ByteChunkIterator",
    ()=>ByteChunkIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$string_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/string_iterator.js [app-client] (ecmascript)");
;
;
;
class ByteChunkIterator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyIterator"] {
    /**
     * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
     *
     * The byte arrays producetd from the ByteChunkIterator on which this is
     * called will be interpreted as concatenated.  No assumptions are made about
     * the boundaries of the incoming chunks, so a multi-byte UTF8 encoding of a
     * character may span the boundary between chunks.  This naturally happens,
     * for instance, when reading fixed-size byte arrays from a file.
     */ decodeUTF8() {
        return new Utf8Iterator(this);
    }
}
// ============================================================================
// The following private classes serve to implement the chainable methods
// on ByteChunkIterator.  Unfortunately they can't be placed in separate files,
// due to resulting trouble with circular imports.
// ============================================================================
// We wanted multiple inheritance, e.g.
//   class Utf8Iterator extends QueueIterator<string>, StringIterator
// but the TypeScript mixin approach is a bit hacky, so we take this adapter
// approach instead.
class Utf8Iterator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$string_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StringIterator"] {
    constructor(upstream){
        super();
        this.upstream = upstream;
        this.impl = new Utf8IteratorImpl(upstream);
    }
    summary() {
        return this.impl.summary();
    }
    async next() {
        return this.impl.next();
    }
}
/**
 * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
 *
 * This is tricky because the incoming byte array boundaries may disrupt a
 * multi-byte UTF8 character. Thus any incomplete character data at the end of
 * a chunk must be carried over and prepended to the next chunk before
 * decoding. Luckily with native decoder, TextDecoder in browser and
 * string_decoder in node, byte array boundaries are handled automatically.
 *
 * In the context of an input pipeline for machine learning, UTF8 decoding is
 * needed to parse text files containing training examples or prediction
 * requests (e.g., formatted as CSV or JSON). We cannot use the built-in
 * decoding provided by FileReader.readAsText() because here we are in a
 * streaming context, which FileReader does not support.
 *
 * @param upstream A `LazyIterator` of `Uint8Arrays` containing UTF8-encoded
 *   text, which should be interpreted as concatenated.  No assumptions are
 *   made about the boundaries of the incoming chunks, so a multi-byte UTF8
 *   encoding of a character may span the boundary between chunks.  This
 *   naturally happens, for instance, when reading fixed-size byte arrays from a
 *   file.
 */ class Utf8IteratorImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneToManyIterator"] {
    constructor(upstream){
        super();
        this.upstream = upstream;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER')) {
            this.decoder = new TextDecoder('utf-8');
        } else {
            // tslint:disable-next-line:no-require-imports
            const { StringDecoder } = {};
            this.decoder = new StringDecoder('utf8');
        }
    }
    summary() {
        return `${this.upstream.summary()} -> Utf8`;
    }
    async pump() {
        const chunkResult = await this.upstream.next();
        let chunk;
        if (chunkResult.done) {
            return false;
        } else {
            chunk = chunkResult.value;
        }
        let text;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER')) {
            text = this.decoder.decode(chunk, {
                stream: true
            });
        } else {
            text = this.decoder.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(chunk.buffer));
        }
        this.outputQueue.push(text);
        return true;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnl0ZV9jaHVua19pdGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvaXRlcmF0b3JzL2J5dGVfY2h1bmtfaXRlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQWdCLGlCQUFrQixTQUFRLFlBQXdCO0lBQ3RFOzs7Ozs7OztPQVFHO0lBQ0gsVUFBVTtRQUNSLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBRUQsK0VBQStFO0FBQy9FLHlFQUF5RTtBQUN6RSwrRUFBK0U7QUFDL0Usa0RBQWtEO0FBQ2xELCtFQUErRTtBQUUvRSx1Q0FBdUM7QUFDdkMscUVBQXFFO0FBQ3JFLDRFQUE0RTtBQUM1RSxvQkFBb0I7QUFFcEIsTUFBTSxZQUFhLFNBQVEsY0FBYztJQUd2QyxZQUFzQixRQUFrQztRQUN0RCxLQUFLLEVBQUUsQ0FBQztRQURZLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBRXRELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUNILE1BQU0sZ0JBQWlCLFNBQVEsaUJBQXlCO0lBTXRELFlBQStCLFFBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBRS9ELElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNMLDhDQUE4QztZQUM5QyxNQUFNLEVBQUMsYUFBYSxFQUFDLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFDRCxPQUFPO1FBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0MsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQVksQ0FBQztRQUNqQixJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2Vudn0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7TGF6eUl0ZXJhdG9yLCBPbmVUb01hbnlJdGVyYXRvcn0gZnJvbSAnLi9sYXp5X2l0ZXJhdG9yJztcbmltcG9ydCB7U3RyaW5nSXRlcmF0b3J9IGZyb20gJy4vc3RyaW5nX2l0ZXJhdG9yJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJ5dGVDaHVua0l0ZXJhdG9yIGV4dGVuZHMgTGF6eUl0ZXJhdG9yPFVpbnQ4QXJyYXk+IHtcbiAgLyoqXG4gICAqIERlY29kZSBhIHN0cmVhbSBvZiBVVEY4LWVuY29kZWQgYnl0ZSBhcnJheXMgdG8gYSBzdHJlYW0gb2Ygc3RyaW5ncy5cbiAgICpcbiAgICogVGhlIGJ5dGUgYXJyYXlzIHByb2R1Y2V0ZCBmcm9tIHRoZSBCeXRlQ2h1bmtJdGVyYXRvciBvbiB3aGljaCB0aGlzIGlzXG4gICAqIGNhbGxlZCB3aWxsIGJlIGludGVycHJldGVkIGFzIGNvbmNhdGVuYXRlZC4gIE5vIGFzc3VtcHRpb25zIGFyZSBtYWRlIGFib3V0XG4gICAqIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBpbmNvbWluZyBjaHVua3MsIHNvIGEgbXVsdGktYnl0ZSBVVEY4IGVuY29kaW5nIG9mIGFcbiAgICogY2hhcmFjdGVyIG1heSBzcGFuIHRoZSBib3VuZGFyeSBiZXR3ZWVuIGNodW5rcy4gIFRoaXMgbmF0dXJhbGx5IGhhcHBlbnMsXG4gICAqIGZvciBpbnN0YW5jZSwgd2hlbiByZWFkaW5nIGZpeGVkLXNpemUgYnl0ZSBhcnJheXMgZnJvbSBhIGZpbGUuXG4gICAqL1xuICBkZWNvZGVVVEY4KCk6IFN0cmluZ0l0ZXJhdG9yIHtcbiAgICByZXR1cm4gbmV3IFV0ZjhJdGVyYXRvcih0aGlzKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUaGUgZm9sbG93aW5nIHByaXZhdGUgY2xhc3NlcyBzZXJ2ZSB0byBpbXBsZW1lbnQgdGhlIGNoYWluYWJsZSBtZXRob2RzXG4vLyBvbiBCeXRlQ2h1bmtJdGVyYXRvci4gIFVuZm9ydHVuYXRlbHkgdGhleSBjYW4ndCBiZSBwbGFjZWQgaW4gc2VwYXJhdGUgZmlsZXMsXG4vLyBkdWUgdG8gcmVzdWx0aW5nIHRyb3VibGUgd2l0aCBjaXJjdWxhciBpbXBvcnRzLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBXZSB3YW50ZWQgbXVsdGlwbGUgaW5oZXJpdGFuY2UsIGUuZy5cbi8vICAgY2xhc3MgVXRmOEl0ZXJhdG9yIGV4dGVuZHMgUXVldWVJdGVyYXRvcjxzdHJpbmc+LCBTdHJpbmdJdGVyYXRvclxuLy8gYnV0IHRoZSBUeXBlU2NyaXB0IG1peGluIGFwcHJvYWNoIGlzIGEgYml0IGhhY2t5LCBzbyB3ZSB0YWtlIHRoaXMgYWRhcHRlclxuLy8gYXBwcm9hY2ggaW5zdGVhZC5cblxuY2xhc3MgVXRmOEl0ZXJhdG9yIGV4dGVuZHMgU3RyaW5nSXRlcmF0b3Ige1xuICBwcml2YXRlIGltcGw6IFV0ZjhJdGVyYXRvckltcGw7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHVwc3RyZWFtOiBMYXp5SXRlcmF0b3I8VWludDhBcnJheT4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW1wbCA9IG5ldyBVdGY4SXRlcmF0b3JJbXBsKHVwc3RyZWFtKTtcbiAgfVxuXG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wbC5zdW1tYXJ5KCk7XG4gIH1cblxuICBhc3luYyBuZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmltcGwubmV4dCgpO1xuICB9XG59XG5cbi8qKlxuICogRGVjb2RlIGEgc3RyZWFtIG9mIFVURjgtZW5jb2RlZCBieXRlIGFycmF5cyB0byBhIHN0cmVhbSBvZiBzdHJpbmdzLlxuICpcbiAqIFRoaXMgaXMgdHJpY2t5IGJlY2F1c2UgdGhlIGluY29taW5nIGJ5dGUgYXJyYXkgYm91bmRhcmllcyBtYXkgZGlzcnVwdCBhXG4gKiBtdWx0aS1ieXRlIFVURjggY2hhcmFjdGVyLiBUaHVzIGFueSBpbmNvbXBsZXRlIGNoYXJhY3RlciBkYXRhIGF0IHRoZSBlbmQgb2ZcbiAqIGEgY2h1bmsgbXVzdCBiZSBjYXJyaWVkIG92ZXIgYW5kIHByZXBlbmRlZCB0byB0aGUgbmV4dCBjaHVuayBiZWZvcmVcbiAqIGRlY29kaW5nLiBMdWNraWx5IHdpdGggbmF0aXZlIGRlY29kZXIsIFRleHREZWNvZGVyIGluIGJyb3dzZXIgYW5kXG4gKiBzdHJpbmdfZGVjb2RlciBpbiBub2RlLCBieXRlIGFycmF5IGJvdW5kYXJpZXMgYXJlIGhhbmRsZWQgYXV0b21hdGljYWxseS5cbiAqXG4gKiBJbiB0aGUgY29udGV4dCBvZiBhbiBpbnB1dCBwaXBlbGluZSBmb3IgbWFjaGluZSBsZWFybmluZywgVVRGOCBkZWNvZGluZyBpc1xuICogbmVlZGVkIHRvIHBhcnNlIHRleHQgZmlsZXMgY29udGFpbmluZyB0cmFpbmluZyBleGFtcGxlcyBvciBwcmVkaWN0aW9uXG4gKiByZXF1ZXN0cyAoZS5nLiwgZm9ybWF0dGVkIGFzIENTViBvciBKU09OKS4gV2UgY2Fubm90IHVzZSB0aGUgYnVpbHQtaW5cbiAqIGRlY29kaW5nIHByb3ZpZGVkIGJ5IEZpbGVSZWFkZXIucmVhZEFzVGV4dCgpIGJlY2F1c2UgaGVyZSB3ZSBhcmUgaW4gYVxuICogc3RyZWFtaW5nIGNvbnRleHQsIHdoaWNoIEZpbGVSZWFkZXIgZG9lcyBub3Qgc3VwcG9ydC5cbiAqXG4gKiBAcGFyYW0gdXBzdHJlYW0gQSBgTGF6eUl0ZXJhdG9yYCBvZiBgVWludDhBcnJheXNgIGNvbnRhaW5pbmcgVVRGOC1lbmNvZGVkXG4gKiAgIHRleHQsIHdoaWNoIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBjb25jYXRlbmF0ZWQuICBObyBhc3N1bXB0aW9ucyBhcmVcbiAqICAgbWFkZSBhYm91dCB0aGUgYm91bmRhcmllcyBvZiB0aGUgaW5jb21pbmcgY2h1bmtzLCBzbyBhIG11bHRpLWJ5dGUgVVRGOFxuICogICBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciBtYXkgc3BhbiB0aGUgYm91bmRhcnkgYmV0d2VlbiBjaHVua3MuICBUaGlzXG4gKiAgIG5hdHVyYWxseSBoYXBwZW5zLCBmb3IgaW5zdGFuY2UsIHdoZW4gcmVhZGluZyBmaXhlZC1zaXplIGJ5dGUgYXJyYXlzIGZyb20gYVxuICogICBmaWxlLlxuICovXG5jbGFzcyBVdGY4SXRlcmF0b3JJbXBsIGV4dGVuZHMgT25lVG9NYW55SXRlcmF0b3I8c3RyaW5nPiB7XG4gIC8vIGBkZWNvZGVyYCBhcyBgYW55YCBoZXJlIHRvIGR5bmFtaWNhbGx5IGFzc2lnbiB2YWx1ZSBiYXNlZCBvbiB0aGVcbiAgLy8gZW52aXJvbm1lbnQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZGVjb2RlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSB1cHN0cmVhbTogTGF6eUl0ZXJhdG9yPFVpbnQ4QXJyYXk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoZW52KCkuZ2V0KCdJU19CUk9XU0VSJykpIHtcbiAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXJlcXVpcmUtaW1wb3J0c1xuICAgICAgY29uc3Qge1N0cmluZ0RlY29kZXJ9ID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXInKTtcbiAgICAgIHRoaXMuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKCd1dGY4Jyk7XG4gICAgfVxuICB9XG4gIHN1bW1hcnkoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMudXBzdHJlYW0uc3VtbWFyeSgpfSAtPiBVdGY4YDtcbiAgfVxuXG4gIGFzeW5jIHB1bXAoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgY2h1bmtSZXN1bHQgPSBhd2FpdCB0aGlzLnVwc3RyZWFtLm5leHQoKTtcbiAgICBsZXQgY2h1bms7XG4gICAgaWYgKGNodW5rUmVzdWx0LmRvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2h1bmsgPSBjaHVua1Jlc3VsdC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgdGV4dDogc3RyaW5nO1xuICAgIGlmIChlbnYoKS5nZXQoJ0lTX0JST1dTRVInKSkge1xuICAgICAgdGV4dCA9IHRoaXMuZGVjb2Rlci5kZWNvZGUoY2h1bmssIHtzdHJlYW06IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dCA9IHRoaXMuZGVjb2Rlci53cml0ZShCdWZmZXIuZnJvbShjaHVuay5idWZmZXIpKTtcbiAgICB9XG4gICAgdGhpcy5vdXRwdXRRdWV1ZS5wdXNoKHRleHQpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/file_chunk_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ // inspired by https://github.com/maxogden/filereader-stream
__turbopack_context__.s([
    "FileChunkIterator",
    ()=>FileChunkIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$byte_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/byte_chunk_iterator.js [app-client] (ecmascript)");
;
;
class FileChunkIterator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$byte_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ByteChunkIterator"] {
    constructor(file, options = {}){
        super();
        this.file = file;
        this.options = options;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(file instanceof Uint8Array || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().get('IS_BROWSER') ? file instanceof File || file instanceof Blob : false), ()=>'FileChunkIterator only supports File, Blob and Uint8Array ' + 'right now.');
        this.offset = options.offset || 0;
        // default 1MB chunk has tolerable perf on large files
        this.chunkSize = options.chunkSize || 1024 * 1024;
    }
    summary() {
        return `FileChunks ${this.file}`;
    }
    async next() {
        if (this.offset >= (this.file instanceof Uint8Array ? this.file.byteLength : this.file.size)) {
            return {
                value: null,
                done: true
            };
        }
        const chunk = new Promise((resolve, reject)=>{
            const end = this.offset + this.chunkSize;
            if (this.file instanceof Uint8Array) {
                // Note if end > this.uint8Array.byteLength, we just get a small last
                // chunk.
                resolve(new Uint8Array(this.file.slice(this.offset, end)));
            } else {
                // This branch assumes that this.file type is File or Blob, which
                // means it is in the browser environment.
                // TODO(soergel): is this a performance issue?
                const fileReader = new FileReader();
                fileReader.onload = (event)=>{
                    let data = fileReader.result;
                    // Not sure we can trust the return type of
                    // FileReader.readAsArrayBuffer See e.g.
                    // https://github.com/node-file-api/FileReader/issues/2
                    if (data instanceof ArrayBuffer) {
                        data = new Uint8Array(data);
                    }
                    if (!(data instanceof Uint8Array)) {
                        return reject(new TypeError('FileReader returned unknown type.'));
                    }
                    resolve(data);
                };
                fileReader.onabort = (event)=>{
                    return reject(new Error('Aborted'));
                };
                fileReader.onerror = (event)=>{
                    return reject(new Error(event.type));
                };
                // TODO(soergel): better handle onabort, onerror
                // Note if end > this.file.size, we just get a small last chunk.
                const slice = this.file.slice(this.offset, end);
                // We can't use readAsText here (even if we know the file is text)
                // because the slice boundary may fall within a multi-byte character.
                fileReader.readAsArrayBuffer(slice);
            }
            this.offset = end;
        });
        return {
            value: await chunk,
            done: false
        };
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZV9jaHVua19pdGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvaXRlcmF0b3JzL2ZpbGVfY2h1bmtfaXRlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCw0REFBNEQ7QUFDNUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQVN4RDs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsaUJBQWlCO0lBSXRELFlBQ2MsSUFBaUIsRUFDakIsVUFBb0MsRUFBRTtRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUZJLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBK0I7UUFFbEQsSUFBSSxDQUFDLE1BQU0sQ0FDUCxDQUFDLElBQUksWUFBWSxVQUFVLENBQUM7WUFDeEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxJQUFJLFlBQVksSUFBSSxJQUFJLElBQUksWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUMsRUFDZixHQUFHLEVBQUUsQ0FBQyw0REFBNEQ7WUFDOUQsWUFBWSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNsQyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDcEQsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDbEM7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLFVBQVUsRUFBRTtnQkFDbkMscUVBQXFFO2dCQUNyRSxTQUFTO2dCQUNULE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RDtpQkFBTTtnQkFDTCxpRUFBaUU7Z0JBQ2pFLDBDQUEwQztnQkFFMUMsOENBQThDO2dCQUM5QyxNQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUNwQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQzVCLElBQUksSUFBSSxHQUFrQyxVQUFVLENBQUMsTUFBTSxDQUFDO29CQUM1RCwyQ0FBMkM7b0JBQzNDLHdDQUF3QztvQkFDeEMsdURBQXVEO29CQUN2RCxJQUFJLElBQUksWUFBWSxXQUFXLEVBQUU7d0JBQy9CLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLFVBQVUsQ0FBQyxFQUFFO3dCQUNqQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7cUJBQ25FO29CQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQztnQkFDRixnREFBZ0Q7Z0JBQ2hELGdFQUFnRTtnQkFDaEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDaEQsa0VBQWtFO2dCQUNsRSxxRUFBcUU7Z0JBQ3JFLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxFQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXhvZ2Rlbi9maWxlcmVhZGVyLXN0cmVhbVxuaW1wb3J0IHtlbnYsIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge0ZpbGVFbGVtZW50fSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge0J5dGVDaHVua0l0ZXJhdG9yfSBmcm9tICcuL2J5dGVfY2h1bmtfaXRlcmF0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVDaHVua0l0ZXJhdG9yT3B0aW9ucyB7XG4gIC8qKiBUaGUgYnl0ZSBvZmZzZXQgYXQgd2hpY2ggdG8gYmVnaW4gcmVhZGluZyB0aGUgRmlsZSBvciBCbG9iLiBEZWZhdWx0IDAuICovXG4gIG9mZnNldD86IG51bWJlcjtcbiAgLyoqIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gcmVhZCBhdCBhIHRpbWUuIERlZmF1bHQgMU1CLiAqL1xuICBjaHVua1NpemU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogUHJvdmlkZSBhIHN0cmVhbSBvZiBjaHVua3MgZnJvbSBhIEZpbGUsIEJsb2IsIG9yIFVpbnQ4QXJyYXkuXG4gKiBAcGFyYW0gZmlsZSBUaGUgc291cmNlIEZpbGUsIEJsb2Igb3IgVWludDhBcnJheS5cbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbmFsIHNldHRpbmdzIGNvbnRyb2xsaW5nIGZpbGUgcmVhZGluZy5cbiAqIEByZXR1cm5zIGEgbGF6eSBJdGVyYXRvciBvZiBVaW50OEFycmF5cyBjb250YWluaW5nIHNlcXVlbnRpYWwgY2h1bmtzIG9mIHRoZVxuICogICBpbnB1dCBGaWxlLCBCbG9iIG9yIFVpbnQ4QXJyYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlQ2h1bmtJdGVyYXRvciBleHRlbmRzIEJ5dGVDaHVua0l0ZXJhdG9yIHtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIGNodW5rU2l6ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkIGZpbGU6IEZpbGVFbGVtZW50LFxuICAgICAgcHJvdGVjdGVkIG9wdGlvbnM6IEZpbGVDaHVua0l0ZXJhdG9yT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgKGZpbGUgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB8fFxuICAgICAgICAgICAgKGVudigpLmdldCgnSVNfQlJPV1NFUicpID9cbiAgICAgICAgICAgICAgICAgKGZpbGUgaW5zdGFuY2VvZiBGaWxlIHx8IGZpbGUgaW5zdGFuY2VvZiBCbG9iKSA6XG4gICAgICAgICAgICAgICAgIGZhbHNlKSxcbiAgICAgICAgKCkgPT4gJ0ZpbGVDaHVua0l0ZXJhdG9yIG9ubHkgc3VwcG9ydHMgRmlsZSwgQmxvYiBhbmQgVWludDhBcnJheSAnICtcbiAgICAgICAgICAgICdyaWdodCBub3cuJyk7XG4gICAgdGhpcy5vZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCAwO1xuICAgIC8vIGRlZmF1bHQgMU1CIGNodW5rIGhhcyB0b2xlcmFibGUgcGVyZiBvbiBsYXJnZSBmaWxlc1xuICAgIHRoaXMuY2h1bmtTaXplID0gb3B0aW9ucy5jaHVua1NpemUgfHwgMTAyNCAqIDEwMjQ7XG4gIH1cblxuICBzdW1tYXJ5KCkge1xuICAgIHJldHVybiBgRmlsZUNodW5rcyAke3RoaXMuZmlsZX1gO1xuICB9XG5cbiAgYXN5bmMgbmV4dCgpOiBQcm9taXNlPEl0ZXJhdG9yUmVzdWx0PFVpbnQ4QXJyYXk+PiB7XG4gICAgaWYgKHRoaXMub2Zmc2V0ID49ICgodGhpcy5maWxlIGluc3RhbmNlb2YgVWludDhBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5ieXRlTGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUuc2l6ZSkpIHtcbiAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIGRvbmU6IHRydWV9O1xuICAgIH1cbiAgICBjb25zdCBjaHVuayA9IG5ldyBQcm9taXNlPFVpbnQ4QXJyYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGVuZCA9IHRoaXMub2Zmc2V0ICsgdGhpcy5jaHVua1NpemU7XG4gICAgICBpZiAodGhpcy5maWxlIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAvLyBOb3RlIGlmIGVuZCA+IHRoaXMudWludDhBcnJheS5ieXRlTGVuZ3RoLCB3ZSBqdXN0IGdldCBhIHNtYWxsIGxhc3RcbiAgICAgICAgLy8gY2h1bmsuXG4gICAgICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkodGhpcy5maWxlLnNsaWNlKHRoaXMub2Zmc2V0LCBlbmQpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGlzIGJyYW5jaCBhc3N1bWVzIHRoYXQgdGhpcy5maWxlIHR5cGUgaXMgRmlsZSBvciBCbG9iLCB3aGljaFxuICAgICAgICAvLyBtZWFucyBpdCBpcyBpbiB0aGUgYnJvd3NlciBlbnZpcm9ubWVudC5cblxuICAgICAgICAvLyBUT0RPKHNvZXJnZWwpOiBpcyB0aGlzIGEgcGVyZm9ybWFuY2UgaXNzdWU/XG4gICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhOiBzdHJpbmd8QXJyYXlCdWZmZXJ8VWludDhBcnJheSA9IGZpbGVSZWFkZXIucmVzdWx0O1xuICAgICAgICAgIC8vIE5vdCBzdXJlIHdlIGNhbiB0cnVzdCB0aGUgcmV0dXJuIHR5cGUgb2ZcbiAgICAgICAgICAvLyBGaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyIFNlZSBlLmcuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGUtZmlsZS1hcGkvRmlsZVJlYWRlci9pc3N1ZXMvMlxuICAgICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ZpbGVSZWFkZXIgcmV0dXJuZWQgdW5rbm93biB0eXBlLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlsZVJlYWRlci5vbmFib3J0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ0Fib3J0ZWQnKSk7XG4gICAgICAgIH07XG4gICAgICAgIGZpbGVSZWFkZXIub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGV2ZW50LnR5cGUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVE9ETyhzb2VyZ2VsKTogYmV0dGVyIGhhbmRsZSBvbmFib3J0LCBvbmVycm9yXG4gICAgICAgIC8vIE5vdGUgaWYgZW5kID4gdGhpcy5maWxlLnNpemUsIHdlIGp1c3QgZ2V0IGEgc21hbGwgbGFzdCBjaHVuay5cbiAgICAgICAgY29uc3Qgc2xpY2UgPSB0aGlzLmZpbGUuc2xpY2UodGhpcy5vZmZzZXQsIGVuZCk7XG4gICAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFkQXNUZXh0IGhlcmUgKGV2ZW4gaWYgd2Uga25vdyB0aGUgZmlsZSBpcyB0ZXh0KVxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBzbGljZSBib3VuZGFyeSBtYXkgZmFsbCB3aXRoaW4gYSBtdWx0aS1ieXRlIGNoYXJhY3Rlci5cbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihzbGljZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm9mZnNldCA9IGVuZDtcbiAgICB9KTtcbiAgICByZXR1cm4ge3ZhbHVlOiAoYXdhaXQgY2h1bmspLCBkb25lOiBmYWxzZX07XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/url_chunk_iterator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "urlChunkIterator",
    ()=>urlChunkIterator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$file_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/file_chunk_iterator.js [app-client] (ecmascript)");
;
;
async function urlChunkIterator(url, options = {}, fetchFunc) {
    let urlString;
    let requestInit;
    if (typeof url === 'string') {
        urlString = url;
    } else {
        urlString = url.url;
        requestInit = getRequestInitFromRequest(url);
    }
    const response = await (fetchFunc || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].fetch)(urlString, requestInit);
    if (response.ok) {
        const uint8Array = new Uint8Array(await response.arrayBuffer());
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$file_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileChunkIterator"](uint8Array, options);
    } else {
        throw new Error(response.statusText);
    }
}
// Generate RequestInit from Request to match tf.util.fetch signature.
const getRequestInitFromRequest = (request)=>{
    const init = {
        method: request.method,
        headers: request.headers,
        body: request.body,
        mode: request.mode,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer,
        integrity: request.integrity
    };
    return init;
}; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX2NodW5rX2l0ZXJhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1kYXRhL3NyYy9pdGVyYXRvcnMvdXJsX2NodW5rX2l0ZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRjs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLGdCQUFnQixDQUNsQyxHQUFnQixFQUFFLFVBQW9DLEVBQUUsRUFDeEQsU0FBb0I7SUFDdEIsSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLFdBQVcsQ0FBQztJQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDN0IsU0FBUyxHQUFHLEdBQWEsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsU0FBUyxHQUFJLEdBQWUsQ0FBQyxHQUFHLENBQUM7UUFDakMsV0FBVyxHQUFHLHlCQUF5QixDQUFDLEdBQWMsQ0FBQyxDQUFDO0tBQ3pEO0lBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pFLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtRQUNmLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRDtTQUFNO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDdEM7QUFDSCxDQUFDO0FBRUQsc0VBQXNFO0FBQ3RFLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQUU7SUFDckQsTUFBTSxJQUFJLEdBQUc7UUFDWCxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1FBQ3hCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1FBQ2hDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztRQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7UUFDMUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1FBQzFCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztLQUM3QixDQUFDO0lBQ0YsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge3V0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge0ZpbGVDaHVua0l0ZXJhdG9yLCBGaWxlQ2h1bmtJdGVyYXRvck9wdGlvbnN9IGZyb20gJy4vZmlsZV9jaHVua19pdGVyYXRvcic7XG5cbi8qKlxuICogUHJvdmlkZSBhIHN0cmVhbSBvZiBjaHVua3MgZnJvbSBhIFVSTC5cbiAqXG4gKiBOb3RlIHRoaXMgY2xhc3MgZmlyc3QgZG93bmxvYWRzIHRoZSBlbnRpcmUgZmlsZSBpbnRvIG1lbW9yeSBiZWZvcmUgcHJvdmlkaW5nXG4gKiB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBzdHJlYW0uICBUaGlzIGlzIGJlY2F1c2UgdGhlIEZldGNoIEFQSSBkb2VzIG5vdFxuICogeWV0IHJlbGlhYmx5IHByb3ZpZGUgYSByZWFkZXIgc3RyZWFtIGZvciB0aGUgcmVzcG9uc2UgYm9keS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVybENodW5rSXRlcmF0b3IoXG4gICAgdXJsOiBSZXF1ZXN0SW5mbywgb3B0aW9uczogRmlsZUNodW5rSXRlcmF0b3JPcHRpb25zID0ge30sXG4gICAgZmV0Y2hGdW5jPzogRnVuY3Rpb24pIHtcbiAgbGV0IHVybFN0cmluZztcbiAgbGV0IHJlcXVlc3RJbml0O1xuICBpZiAoKHR5cGVvZiB1cmwpID09PSAnc3RyaW5nJykge1xuICAgIHVybFN0cmluZyA9IHVybCBhcyBzdHJpbmc7XG4gIH0gZWxzZSB7XG4gICAgdXJsU3RyaW5nID0gKHVybCBhcyBSZXF1ZXN0KS51cmw7XG4gICAgcmVxdWVzdEluaXQgPSBnZXRSZXF1ZXN0SW5pdEZyb21SZXF1ZXN0KHVybCBhcyBSZXF1ZXN0KTtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChmZXRjaEZ1bmMgfHwgdXRpbC5mZXRjaCkodXJsU3RyaW5nLCByZXF1ZXN0SW5pdCk7XG4gIGlmIChyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IHVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheShhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiAgICByZXR1cm4gbmV3IEZpbGVDaHVua0l0ZXJhdG9yKHVpbnQ4QXJyYXksIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxufVxuXG4vLyBHZW5lcmF0ZSBSZXF1ZXN0SW5pdCBmcm9tIFJlcXVlc3QgdG8gbWF0Y2ggdGYudXRpbC5mZXRjaCBzaWduYXR1cmUuXG5jb25zdCBnZXRSZXF1ZXN0SW5pdEZyb21SZXF1ZXN0ID0gKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcbiAgY29uc3QgaW5pdCA9IHtcbiAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICBib2R5OiByZXF1ZXN0LmJvZHksXG4gICAgbW9kZTogcmVxdWVzdC5tb2RlLFxuICAgIGNyZWRlbnRpYWxzOiByZXF1ZXN0LmNyZWRlbnRpYWxzLFxuICAgIGNhY2hlOiByZXF1ZXN0LmNhY2hlLFxuICAgIHJlZGlyZWN0OiByZXF1ZXN0LnJlZGlyZWN0LFxuICAgIHJlZmVycmVyOiByZXF1ZXN0LnJlZmVycmVyLFxuICAgIGludGVncml0eTogcmVxdWVzdC5pbnRlZ3JpdHksXG4gIH07XG4gIHJldHVybiBpbml0O1xufTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/source_util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ // Skip tslint any type check cause this method is aiming to check type of
// input.
// tslint:disable-next-line:no-any
__turbopack_context__.s([
    "isLocalPath",
    ()=>isLocalPath
]);
function isLocalPath(source) {
    return typeof source === 'string' && source.slice(0, 7) === 'file://';
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWRhdGEvc3JjL3V0aWwvc291cmNlX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCwwRUFBMEU7QUFDMUUsU0FBUztBQUNULGtDQUFrQztBQUNsQyxNQUFNLFVBQVUsV0FBVyxDQUFDLE1BQVc7SUFDckMsT0FBTyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUMxRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gU2tpcCB0c2xpbnQgYW55IHR5cGUgY2hlY2sgY2F1c2UgdGhpcyBtZXRob2QgaXMgYWltaW5nIHRvIGNoZWNrIHR5cGUgb2Zcbi8vIGlucHV0LlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxQYXRoKHNvdXJjZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpICYmIHNvdXJjZS5zbGljZSgwLCA3KSA9PT0gJ2ZpbGU6Ly8nO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/file_data_source.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "FileDataSource",
    ()=>FileDataSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$file_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/file_chunk_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$source_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/source_util.js [app-client] (ecmascript)");
;
;
;
;
class FileDataSource extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataSource"] {
    /**
     * Create a `FileDataSource`.
     *
     * @param input Local file path, or `File`/`Blob`/`Uint8Array` object to
     *     read. Local file only works in node environment.
     * @param options Options passed to the underlying `FileChunkIterator`s,
     *   such as {chunksize: 1024}.
     */ constructor(input, options = {}){
        super();
        this.input = input;
        this.options = options;
    }
    async iterator() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$source_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalPath"])(this.input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().get('IS_NODE')) {
            // tslint:disable-next-line:no-require-imports
            const fs = {};
            this.input = fs.readFileSync(this.input.slice(7));
        }
        // TODO(kangyizhang): Add LocalFileChunkIterator to split local streaming
        // with file in browser.
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$file_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileChunkIterator"](this.input, this.options);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZV9kYXRhX3NvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvc291cmNlcy9maWxlX2RhdGFfc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUEyQixNQUFNLGtDQUFrQyxDQUFDO0FBRTdGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7SUFDNUM7Ozs7Ozs7T0FPRztJQUNILFlBQ2MsS0FBeUIsRUFDaEIsVUFBb0MsRUFBRTtRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQUZJLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQStCO0lBRTdELENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUTtRQUNaLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkQsOENBQThDO1lBQzlDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLEtBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCx5RUFBeUU7UUFDekUsd0JBQXdCO1FBQ3hCLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtlbnZ9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHtCeXRlQ2h1bmtJdGVyYXRvcn0gZnJvbSAnLi4vaXRlcmF0b3JzL2J5dGVfY2h1bmtfaXRlcmF0b3InO1xuaW1wb3J0IHtGaWxlQ2h1bmtJdGVyYXRvciwgRmlsZUNodW5rSXRlcmF0b3JPcHRpb25zfSBmcm9tICcuLi9pdGVyYXRvcnMvZmlsZV9jaHVua19pdGVyYXRvcic7XG5pbXBvcnQge0ZpbGVFbGVtZW50fSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2lzTG9jYWxQYXRofSBmcm9tICcuLi91dGlsL3NvdXJjZV91dGlsJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZmlsZSwgYmxvYiwgb3IgVWludDhBcnJheSByZWFkYWJsZSBhcyBhIHN0cmVhbSBvZiBiaW5hcnkgZGF0YVxuICogY2h1bmtzLlxuICovXG5leHBvcnQgY2xhc3MgRmlsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIGBGaWxlRGF0YVNvdXJjZWAuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBMb2NhbCBmaWxlIHBhdGgsIG9yIGBGaWxlYC9gQmxvYmAvYFVpbnQ4QXJyYXlgIG9iamVjdCB0b1xuICAgKiAgICAgcmVhZC4gTG9jYWwgZmlsZSBvbmx5IHdvcmtzIGluIG5vZGUgZW52aXJvbm1lbnQuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIHRoZSB1bmRlcmx5aW5nIGBGaWxlQ2h1bmtJdGVyYXRvcmBzLFxuICAgKiAgIHN1Y2ggYXMge2NodW5rc2l6ZTogMTAyNH0uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByb3RlY3RlZCBpbnB1dDogRmlsZUVsZW1lbnR8c3RyaW5nLFxuICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IG9wdGlvbnM6IEZpbGVDaHVua0l0ZXJhdG9yT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFzeW5jIGl0ZXJhdG9yKCk6IFByb21pc2U8Qnl0ZUNodW5rSXRlcmF0b3I+IHtcbiAgICBpZiAoaXNMb2NhbFBhdGgodGhpcy5pbnB1dCkgJiYgZW52KCkuZ2V0KCdJU19OT0RFJykpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1yZXF1aXJlLWltcG9ydHNcbiAgICAgIGNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbiAgICAgIHRoaXMuaW5wdXQgPSBmcy5yZWFkRmlsZVN5bmMoKHRoaXMuaW5wdXQgYXMgc3RyaW5nKS5zbGljZSg3KSk7XG4gICAgfVxuICAgIC8vIFRPRE8oa2FuZ3lpemhhbmcpOiBBZGQgTG9jYWxGaWxlQ2h1bmtJdGVyYXRvciB0byBzcGxpdCBsb2NhbCBzdHJlYW1pbmdcbiAgICAvLyB3aXRoIGZpbGUgaW4gYnJvd3Nlci5cbiAgICByZXR1cm4gbmV3IEZpbGVDaHVua0l0ZXJhdG9yKHRoaXMuaW5wdXQgYXMgRmlsZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/url_data_source.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "URLDataSource",
    ()=>URLDataSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$url_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/url_chunk_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$source_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/util/source_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$file_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/file_data_source.js [app-client] (ecmascript)");
;
;
;
;
class URLDataSource extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataSource"] {
    /**
     * Create a `URLDataSource`.
     *
     * @param url A source URL string, or a `Request` object.
     * @param options Options passed to the underlying `FileChunkIterator`s,
     *   such as {chunksize: 1024}.
     */ constructor(url, fileOptions = {}){
        super();
        this.url = url;
        this.fileOptions = fileOptions;
    }
    // TODO(soergel): provide appropriate caching options.  Currently this
    // will download the URL anew for each call to iterator().  Since we have
    // to treat the downloaded file as a blob/buffer anyway, we may as well retain
    // it-- but that raises GC issues.  Also we may want a persistent disk cache.
    async iterator() {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$util$2f$source_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalPath"])(this.url)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$file_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileDataSource"](this.url, this.fileOptions).iterator();
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$url_chunk_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlChunkIterator"])(this.url, this.fileOptions);
        }
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsX2RhdGFfc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1kYXRhL3NyYy9zb3VyY2VzL3VybF9kYXRhX3NvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRDs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTtJQUMzQzs7Ozs7O09BTUc7SUFDSCxZQUN1QixHQUFnQixFQUNoQixjQUF3QyxFQUFFO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRmEsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBK0I7SUFFakUsQ0FBQztJQUVELHNFQUFzRTtJQUN0RSx5RUFBeUU7SUFDekUsOEVBQThFO0lBQzlFLDZFQUE2RTtJQUM3RSxLQUFLLENBQUMsUUFBUTtRQUNaLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzVELFFBQVEsRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFDTCxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7Qnl0ZUNodW5rSXRlcmF0b3J9IGZyb20gJy4uL2l0ZXJhdG9ycy9ieXRlX2NodW5rX2l0ZXJhdG9yJztcbmltcG9ydCB7RmlsZUNodW5rSXRlcmF0b3JPcHRpb25zfSBmcm9tICcuLi9pdGVyYXRvcnMvZmlsZV9jaHVua19pdGVyYXRvcic7XG5pbXBvcnQge3VybENodW5rSXRlcmF0b3J9IGZyb20gJy4uL2l0ZXJhdG9ycy91cmxfY2h1bmtfaXRlcmF0b3InO1xuaW1wb3J0IHtpc0xvY2FsUGF0aH0gZnJvbSAnLi4vdXRpbC9zb3VyY2VfdXRpbCc7XG5pbXBvcnQge0ZpbGVEYXRhU291cmNlfSBmcm9tICcuL2ZpbGVfZGF0YV9zb3VyY2UnO1xuXG4vKlxuICogUmVwcmVzZW50cyBhIFVSTCByZWFkYWJsZSBhcyBhIHN0cmVhbSBvZiBiaW5hcnkgZGF0YSBjaHVua3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBVUkxEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBgVVJMRGF0YVNvdXJjZWAuXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgQSBzb3VyY2UgVVJMIHN0cmluZywgb3IgYSBgUmVxdWVzdGAgb2JqZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byB0aGUgdW5kZXJseWluZyBgRmlsZUNodW5rSXRlcmF0b3JgcyxcbiAgICogICBzdWNoIGFzIHtjaHVua3NpemU6IDEwMjR9LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdXJsOiBSZXF1ZXN0SW5mbyxcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSBmaWxlT3B0aW9uczogRmlsZUNodW5rSXRlcmF0b3JPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLy8gVE9ETyhzb2VyZ2VsKTogcHJvdmlkZSBhcHByb3ByaWF0ZSBjYWNoaW5nIG9wdGlvbnMuICBDdXJyZW50bHkgdGhpc1xuICAvLyB3aWxsIGRvd25sb2FkIHRoZSBVUkwgYW5ldyBmb3IgZWFjaCBjYWxsIHRvIGl0ZXJhdG9yKCkuICBTaW5jZSB3ZSBoYXZlXG4gIC8vIHRvIHRyZWF0IHRoZSBkb3dubG9hZGVkIGZpbGUgYXMgYSBibG9iL2J1ZmZlciBhbnl3YXksIHdlIG1heSBhcyB3ZWxsIHJldGFpblxuICAvLyBpdC0tIGJ1dCB0aGF0IHJhaXNlcyBHQyBpc3N1ZXMuICBBbHNvIHdlIG1heSB3YW50IGEgcGVyc2lzdGVudCBkaXNrIGNhY2hlLlxuICBhc3luYyBpdGVyYXRvcigpOiBQcm9taXNlPEJ5dGVDaHVua0l0ZXJhdG9yPiB7XG4gICAgaWYgKGlzTG9jYWxQYXRoKHRoaXMudXJsKSkge1xuICAgICAgcmV0dXJuIChuZXcgRmlsZURhdGFTb3VyY2UodGhpcy51cmwgYXMgc3RyaW5nLCB0aGlzLmZpbGVPcHRpb25zKSlcbiAgICAgICAgICAuaXRlcmF0b3IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybENodW5rSXRlcmF0b3IodGhpcy51cmwsIHRoaXMuZmlsZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/readers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *
 * =============================================================================
 */ __turbopack_context__.s([
    "csv",
    ()=>csv,
    "func",
    ()=>func,
    "generator",
    ()=>generator,
    "microphone",
    ()=>microphone,
    "webcam",
    ()=>webcam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$csv_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/csv_dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/lazy_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$microphone_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/microphone_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$webcam_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/iterators/webcam_iterator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$url_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/url_data_source.js [app-client] (ecmascript)");
;
;
;
;
;
;
function csv(source, csvConfig = {}) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$csv_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSVDataset"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$url_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLDataSource"](source), csvConfig);
}
function func(f) {
    const iter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFromFunction"])(f);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datasetFromIteratorFn"])(async ()=>iter);
}
function generator(generator) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["datasetFromIteratorFn"])(async ()=>{
        const gen = await generator();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$lazy_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iteratorFromFunction"])(()=>gen.next());
    });
}
async function webcam(webcamVideoElement, webcamConfig) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$webcam_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebcamIterator"].create(webcamVideoElement, webcamConfig);
}
async function microphone(microphoneConfig) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$iterators$2f$microphone_iterator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrophoneIterator"].create(microphoneConfig);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvcmVhZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUdILE9BQU8sRUFBVSxxQkFBcUIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUd4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2RUc7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUNmLE1BQW1CLEVBQUUsWUFBdUIsRUFBRTtJQUNoRCxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFDSCxNQUFNLFVBQVUsSUFBSSxDQUNoQixDQUFzRDtJQUN4RCxNQUFNLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxPQUFPLHFCQUFxQixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5REc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUN2QixTQUFzRTtJQUV0RSxPQUFPLHFCQUFxQixDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLE1BQU0sU0FBUyxFQUFFLENBQUM7UUFDOUIsT0FBTyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Qkc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLE1BQU0sQ0FDeEIsa0JBQXFDLEVBQ3JDLFlBQTJCO0lBQzdCLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsVUFBVSxDQUFDLGdCQUFtQztJQUVsRSxPQUFPLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3JELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge1RlbnNvckNvbnRhaW5lcn0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7RGF0YXNldCwgZGF0YXNldEZyb21JdGVyYXRvckZufSBmcm9tICcuL2RhdGFzZXQnO1xuaW1wb3J0IHtDU1ZEYXRhc2V0fSBmcm9tICcuL2RhdGFzZXRzL2Nzdl9kYXRhc2V0JztcbmltcG9ydCB7aXRlcmF0b3JGcm9tRnVuY3Rpb259IGZyb20gJy4vaXRlcmF0b3JzL2xhenlfaXRlcmF0b3InO1xuaW1wb3J0IHtNaWNyb3Bob25lSXRlcmF0b3J9IGZyb20gJy4vaXRlcmF0b3JzL21pY3JvcGhvbmVfaXRlcmF0b3InO1xuaW1wb3J0IHtXZWJjYW1JdGVyYXRvcn0gZnJvbSAnLi9pdGVyYXRvcnMvd2ViY2FtX2l0ZXJhdG9yJztcbmltcG9ydCB7VVJMRGF0YVNvdXJjZX0gZnJvbSAnLi9zb3VyY2VzL3VybF9kYXRhX3NvdXJjZSc7XG5pbXBvcnQge0NTVkNvbmZpZywgTWljcm9waG9uZUNvbmZpZywgV2ViY2FtQ29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBDcmVhdGUgYSBgQ1NWRGF0YXNldGAgYnkgcmVhZGluZyBhbmQgZGVjb2RpbmcgQ1NWIGZpbGUocykgZnJvbSBwcm92aWRlZCBVUkxcbiAqIG9yIGxvY2FsIHBhdGggaWYgaXQncyBpbiBOb2RlIGVudmlyb25tZW50LlxuICpcbiAqIE5vdGU6IElmIGlzTGFiZWwgaW4gY29sdW1uQ29uZmlncyBpcyBgdHJ1ZWAgZm9yIGF0IGxlYXN0IG9uZSBjb2x1bW4sIHRoZVxuICogZWxlbWVudCBpbiByZXR1cm5lZCBgQ1NWRGF0YXNldGAgd2lsbCBiZSBhbiBvYmplY3Qgb2ZcbiAqIGB7eHM6ZmVhdHVyZXMsIHlzOmxhYmVsc31gOiB4cyBpcyBhIGRpY3Qgb2YgZmVhdHVyZXMga2V5L3ZhbHVlIHBhaXJzLCB5c1xuICogaXMgYSBkaWN0IG9mIGxhYmVscyBrZXkvdmFsdWUgcGFpcnMuIElmIG5vIGNvbHVtbiBpcyBtYXJrZWQgYXMgbGFiZWwsXG4gKiByZXR1cm5zIGEgZGljdCBvZiBmZWF0dXJlcyBvbmx5LlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBjc3ZVcmwgPVxuICogJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS90ZmpzLWV4YW1wbGVzL211bHRpdmFyaWF0ZS1saW5lYXItcmVncmVzc2lvbi9kYXRhL2Jvc3Rvbi1ob3VzaW5nLXRyYWluLmNzdic7XG4gKlxuICogYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuICogICAvLyBXZSB3YW50IHRvIHByZWRpY3QgdGhlIGNvbHVtbiBcIm1lZHZcIiwgd2hpY2ggcmVwcmVzZW50cyBhIG1lZGlhbiB2YWx1ZSBvZlxuICogICAvLyBhIGhvbWUgKGluICQxMDAwcyksIHNvIHdlIG1hcmsgaXQgYXMgYSBsYWJlbC5cbiAqICAgY29uc3QgY3N2RGF0YXNldCA9IHRmLmRhdGEuY3N2KFxuICogICAgIGNzdlVybCwge1xuICogICAgICAgY29sdW1uQ29uZmlnczoge1xuICogICAgICAgICBtZWR2OiB7XG4gKiAgICAgICAgICAgaXNMYWJlbDogdHJ1ZVxuICogICAgICAgICB9XG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogICAvLyBOdW1iZXIgb2YgZmVhdHVyZXMgaXMgdGhlIG51bWJlciBvZiBjb2x1bW4gbmFtZXMgbWludXMgb25lIGZvciB0aGUgbGFiZWxcbiAqICAgLy8gY29sdW1uLlxuICogICBjb25zdCBudW1PZkZlYXR1cmVzID0gKGF3YWl0IGNzdkRhdGFzZXQuY29sdW1uTmFtZXMoKSkubGVuZ3RoIC0gMTtcbiAqXG4gKiAgIC8vIFByZXBhcmUgdGhlIERhdGFzZXQgZm9yIHRyYWluaW5nLlxuICogICBjb25zdCBmbGF0dGVuZWREYXRhc2V0ID1cbiAqICAgICBjc3ZEYXRhc2V0XG4gKiAgICAgLm1hcCgoe3hzLCB5c30pID0+XG4gKiAgICAgICB7XG4gKiAgICAgICAgIC8vIENvbnZlcnQgeHMoZmVhdHVyZXMpIGFuZCB5cyhsYWJlbHMpIGZyb20gb2JqZWN0IGZvcm0gKGtleWVkIGJ5XG4gKiAgICAgICAgIC8vIGNvbHVtbiBuYW1lKSB0byBhcnJheSBmb3JtLlxuICogICAgICAgICByZXR1cm4ge3hzOk9iamVjdC52YWx1ZXMoeHMpLCB5czpPYmplY3QudmFsdWVzKHlzKX07XG4gKiAgICAgICB9KVxuICogICAgIC5iYXRjaCgxMCk7XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIG1vZGVsLlxuICogICBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoKTtcbiAqICAgbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7XG4gKiAgICAgaW5wdXRTaGFwZTogW251bU9mRmVhdHVyZXNdLFxuICogICAgIHVuaXRzOiAxXG4gKiAgIH0pKTtcbiAqICAgbW9kZWwuY29tcGlsZSh7XG4gKiAgICAgb3B0aW1pemVyOiB0Zi50cmFpbi5zZ2QoMC4wMDAwMDEpLFxuICogICAgIGxvc3M6ICdtZWFuU3F1YXJlZEVycm9yJ1xuICogICB9KTtcbiAqXG4gKiAgIC8vIEZpdCB0aGUgbW9kZWwgdXNpbmcgdGhlIHByZXBhcmVkIERhdGFzZXRcbiAqICAgcmV0dXJuIG1vZGVsLmZpdERhdGFzZXQoZmxhdHRlbmVkRGF0YXNldCwge1xuICogICAgIGVwb2NoczogMTAsXG4gKiAgICAgY2FsbGJhY2tzOiB7XG4gKiAgICAgICBvbkVwb2NoRW5kOiBhc3luYyAoZXBvY2gsIGxvZ3MpID0+IHtcbiAqICAgICAgICAgY29uc29sZS5sb2coZXBvY2ggKyAnOicgKyBsb2dzLmxvc3MpO1xuICogICAgICAgfVxuICogICAgIH1cbiAqICAgfSk7XG4gKiB9XG4gKlxuICogYXdhaXQgcnVuKCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc291cmNlIFVSTCBvciBsb2NhbCBwYXRoIHRvIGdldCBDU1YgZmlsZS4gSWYgaXQncyBhIGxvY2FsIHBhdGgsIGl0XG4gKiBtdXN0IGhhdmUgcHJlZml4IGBmaWxlOi8vYCBhbmQgaXQgb25seSB3b3JrcyBpbiBub2RlIGVudmlyb25tZW50LlxuICogQHBhcmFtIGNzdkNvbmZpZyAoT3B0aW9uYWwpIEEgQ1NWQ29uZmlnIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNvbmZpZ3VyYXRpb25zXG4gKiAgICAgb2YgcmVhZGluZyBhbmQgZGVjb2RpbmcgZnJvbSBDU1YgZmlsZShzKS5cbiAqXG4gKiBAZG9jIHtcbiAqICAgaGVhZGluZzogJ0RhdGEnLFxuICogICBzdWJoZWFkaW5nOiAnQ3JlYXRpb24nLFxuICogICBuYW1lc3BhY2U6ICdkYXRhJyxcbiAqICAgY29uZmlnUGFyYW1JbmRpY2VzOiBbMV1cbiAqICB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjc3YoXG4gICAgc291cmNlOiBSZXF1ZXN0SW5mbywgY3N2Q29uZmlnOiBDU1ZDb25maWcgPSB7fSk6IENTVkRhdGFzZXQge1xuICByZXR1cm4gbmV3IENTVkRhdGFzZXQobmV3IFVSTERhdGFTb3VyY2Uoc291cmNlKSwgY3N2Q29uZmlnKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgRGF0YXNldGAgdGhhdCBwcm9kdWNlcyBlYWNoIGVsZW1lbnQgYnkgY2FsbGluZyBhIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICpcbiAqIE5vdGUgdGhhdCByZXBlYXRlZCBpdGVyYXRpb25zIG92ZXIgdGhpcyBgRGF0YXNldGAgbWF5IHByb2R1Y2UgZGlmZmVyZW50XG4gKiByZXN1bHRzLCBiZWNhdXNlIHRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhbmV3IGZvciBlYWNoIGVsZW1lbnQgb2YgZWFjaFxuICogaXRlcmF0aW9uLlxuICpcbiAqIEFsc28sIGJld2FyZSB0aGF0IHRoZSBzZXF1ZW5jZSBvZiBjYWxscyB0byB0aGlzIGZ1bmN0aW9uIG1heSBiZSBvdXQgb2Ygb3JkZXJcbiAqIGluIHRpbWUgd2l0aCByZXNwZWN0IHRvIHRoZSBsb2dpY2FsIG9yZGVyIG9mIHRoZSBEYXRhc2V0LiBUaGlzIGlzIGR1ZSB0byB0aGVcbiAqIGFzeW5jaHJvbm91cyBsYXp5IG5hdHVyZSBvZiBzdHJlYW0gcHJvY2Vzc2luZywgYW5kIGRlcGVuZHMgb24gZG93bnN0cmVhbVxuICogdHJhbnNmb3JtYXRpb25zIChlLmcuIC5zaHVmZmxlKCkpLiBJZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgcHVyZSwgdGhpcyBpc1xuICogbm8gcHJvYmxlbSwgYnV0IGlmIGl0IGlzIGEgY2xvc3VyZSBvdmVyIGEgbXV0YWJsZSBzdGF0ZSAoZS5nLiwgYSB0cmF2ZXJzYWxcbiAqIHBvaW50ZXIpLCB0aGVuIHRoZSBvcmRlciBvZiB0aGUgcHJvZHVjZWQgZWxlbWVudHMgbWF5IGJlIHNjcmFtYmxlZC5cbiAqXG4gKiBgYGBqc1xuICogbGV0IGkgPSAtMTtcbiAqIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICogICAgKytpIDwgNSA/IHt2YWx1ZTogaSwgZG9uZTogZmFsc2V9IDoge3ZhbHVlOiBudWxsLCBkb25lOiB0cnVlfTtcbiAqIGNvbnN0IGRzID0gdGYuZGF0YS5mdW5jKGZ1bmMpO1xuICogYXdhaXQgZHMuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIGYgQSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIG9uZSBkYXRhIGVsZW1lbnQgb24gZWFjaCBjYWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnVuYzxUIGV4dGVuZHMgVGVuc29yQ29udGFpbmVyPihcbiAgICBmOiAoKSA9PiBJdGVyYXRvclJlc3VsdDxUPnwgUHJvbWlzZTxJdGVyYXRvclJlc3VsdDxUPj4pOiBEYXRhc2V0PFQ+IHtcbiAgY29uc3QgaXRlciA9IGl0ZXJhdG9yRnJvbUZ1bmN0aW9uKGYpO1xuICByZXR1cm4gZGF0YXNldEZyb21JdGVyYXRvckZuKGFzeW5jICgpID0+IGl0ZXIpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBEYXRhc2V0YCB0aGF0IHByb2R1Y2VzIGVhY2ggZWxlbWVudCBmcm9tIHByb3ZpZGVkIEphdmFTY3JpcHRcbiAqIGdlbmVyYXRvciwgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSAocG90ZW50aWFsbHkgYXN5bmMpIGl0ZXJhdG9yLlxuICpcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGl0ZXJhdG9ycyBhbmQgZ2VuZXJhdG9ycywgc2VlXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0l0ZXJhdG9yc19hbmRfR2VuZXJhdG9ycyAuXG4gKiBGb3IgdGhlIGl0ZXJhdG9yIHByb3RvY29sLCBzZWVcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0l0ZXJhdGlvbl9wcm90b2NvbHMgLlxuICpcbiAqIEV4YW1wbGUgb2YgY3JlYXRpbmcgYSBkYXRhc2V0IGZyb20gYW4gaXRlcmF0b3IgZmFjdG9yeTpcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiBtYWtlSXRlcmF0b3IoKSB7XG4gKiAgIGNvbnN0IG51bUVsZW1lbnRzID0gMTA7XG4gKiAgIGxldCBpbmRleCA9IDA7XG4gKlxuICogICBjb25zdCBpdGVyYXRvciA9IHtcbiAqICAgICBuZXh0OiAoKSA9PiB7XG4gKiAgICAgICBsZXQgcmVzdWx0O1xuICogICAgICAgaWYgKGluZGV4IDwgbnVtRWxlbWVudHMpIHtcbiAqICAgICAgICAgcmVzdWx0ID0ge3ZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2V9O1xuICogICAgICAgICBpbmRleCsrO1xuICogICAgICAgICByZXR1cm4gcmVzdWx0O1xuICogICAgICAgfVxuICogICAgICAgcmV0dXJuIHt2YWx1ZTogaW5kZXgsIGRvbmU6IHRydWV9O1xuICogICAgIH1cbiAqICAgfTtcbiAqICAgcmV0dXJuIGl0ZXJhdG9yO1xuICogfVxuICogY29uc3QgZHMgPSB0Zi5kYXRhLmdlbmVyYXRvcihtYWtlSXRlcmF0b3IpO1xuICogYXdhaXQgZHMuZm9yRWFjaEFzeW5jKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICogYGBgXG4gKlxuICogRXhhbXBsZSBvZiBjcmVhdGluZyBhIGRhdGFzZXQgZnJvbSBhIGdlbmVyYXRvcjpcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiogZGF0YUdlbmVyYXRvcigpIHtcbiAqICAgY29uc3QgbnVtRWxlbWVudHMgPSAxMDtcbiAqICAgbGV0IGluZGV4ID0gMDtcbiAqICAgd2hpbGUgKGluZGV4IDwgbnVtRWxlbWVudHMpIHtcbiAqICAgICBjb25zdCB4ID0gaW5kZXg7XG4gKiAgICAgaW5kZXgrKztcbiAqICAgICB5aWVsZCB4O1xuICogICB9XG4gKiB9XG4gKlxuICogY29uc3QgZHMgPSB0Zi5kYXRhLmdlbmVyYXRvcihkYXRhR2VuZXJhdG9yKTtcbiAqIGF3YWl0IGRzLmZvckVhY2hBc3luYyhlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBnZW5lcmF0b3IgQSBKYXZhU2NyaXB0IGZ1bmN0aW9uIHRoYXQgcmV0dXJuc1xuICogICAgIGEgKHBvdGVudGlhbGx5IGFzeW5jKSBKYXZhU2NyaXB0IGl0ZXJhdG9yLlxuICpcbiAqIEBkb2Mge1xuICogICBoZWFkaW5nOiAnRGF0YScsXG4gKiAgIHN1YmhlYWRpbmc6ICdDcmVhdGlvbicsXG4gKiAgIG5hbWVzcGFjZTogJ2RhdGEnLFxuICogICBjb25maWdQYXJhbUluZGljZXM6IFsxXVxuICogIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRvcjxUIGV4dGVuZHMgVGVuc29yQ29udGFpbmVyPihcbiAgZ2VuZXJhdG9yOiAoKSA9PiBJdGVyYXRvcjxUPiB8IFByb21pc2U8SXRlcmF0b3I8VD4+IHwgQXN5bmNJdGVyYXRvcjxUPixcbik6IERhdGFzZXQ8VD4ge1xuICByZXR1cm4gZGF0YXNldEZyb21JdGVyYXRvckZuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBnZW4gPSBhd2FpdCBnZW5lcmF0b3IoKTtcbiAgICByZXR1cm4gaXRlcmF0b3JGcm9tRnVuY3Rpb24oKCkgPT4gZ2VuLm5leHQoKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBpdGVyYXRvciB0aGF0IGdlbmVyYXRlcyBgVGVuc29yYHMgZnJvbSB3ZWJjYW0gdmlkZW8gc3RyZWFtLiBUaGlzXG4gKiBBUEkgb25seSB3b3JrcyBpbiBCcm93c2VyIGVudmlyb25tZW50IHdoZW4gdGhlIGRldmljZSBoYXMgd2ViY2FtLlxuICpcbiAqIE5vdGU6IHRoaXMgY29kZSBzbmlwcGV0IG9ubHkgd29ya3Mgd2hlbiB0aGUgZGV2aWNlIGhhcyBhIHdlYmNhbS4gSXQgd2lsbFxuICogcmVxdWVzdCBwZXJtaXNzaW9uIHRvIG9wZW4gdGhlIHdlYmNhbSB3aGVuIHJ1bm5pbmcuXG4gKiBgYGBqc1xuICogY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAqIHZpZGVvRWxlbWVudC53aWR0aCA9IDEwMDtcbiAqIHZpZGVvRWxlbWVudC5oZWlnaHQgPSAxMDA7XG4gKiBjb25zdCBjYW0gPSBhd2FpdCB0Zi5kYXRhLndlYmNhbSh2aWRlb0VsZW1lbnQpO1xuICogY29uc3QgaW1nID0gYXdhaXQgY2FtLmNhcHR1cmUoKTtcbiAqIGltZy5wcmludCgpO1xuICogY2FtLnN0b3AoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB3ZWJjYW1WaWRlb0VsZW1lbnQgQSBgSFRNTFZpZGVvRWxlbWVudGAgdXNlZCB0byBwbGF5IHZpZGVvIGZyb21cbiAqICAgICB3ZWJjYW0uIElmIHRoaXMgZWxlbWVudCBpcyBub3QgcHJvdmlkZWQsIGEgaGlkZGVuIGBIVE1MVmlkZW9FbGVtZW50YCB3aWxsXG4gKiAgICAgYmUgY3JlYXRlZC4gSW4gdGhhdCBjYXNlLCBgcmVzaXplV2lkdGhgIGFuZCBgcmVzaXplSGVpZ2h0YCBtdXN0IGJlXG4gKiAgICAgcHJvdmlkZWQgdG8gc2V0IHRoZSBnZW5lcmF0ZWQgdGVuc29yIHNoYXBlLlxuICogQHBhcmFtIHdlYmNhbUNvbmZpZyBBIGBXZWJjYW1Db25maWdgIG9iamVjdCB0aGF0IGNvbnRhaW5zIGNvbmZpZ3VyYXRpb25zIG9mXG4gKiAgICAgcmVhZGluZyBhbmQgbWFuaXB1bGF0aW5nIGRhdGEgZnJvbSB3ZWJjYW0gdmlkZW8gc3RyZWFtLlxuICpcbiAqIEBkb2Mge1xuICogICBoZWFkaW5nOiAnRGF0YScsXG4gKiAgIHN1YmhlYWRpbmc6ICdDcmVhdGlvbicsXG4gKiAgIG5hbWVzcGFjZTogJ2RhdGEnLFxuICogICBpZ25vcmVDSTogdHJ1ZVxuICogIH1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdlYmNhbShcbiAgICB3ZWJjYW1WaWRlb0VsZW1lbnQ/OiBIVE1MVmlkZW9FbGVtZW50LFxuICAgIHdlYmNhbUNvbmZpZz86IFdlYmNhbUNvbmZpZyk6IFByb21pc2U8V2ViY2FtSXRlcmF0b3I+IHtcbiAgcmV0dXJuIFdlYmNhbUl0ZXJhdG9yLmNyZWF0ZSh3ZWJjYW1WaWRlb0VsZW1lbnQsIHdlYmNhbUNvbmZpZyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGl0ZXJhdG9yIHRoYXQgZ2VuZXJhdGVzIGZyZXF1ZW5jeS1kb21haW4gc3BlY3Ryb2dyYW0gYFRlbnNvcmBzIGZyb21cbiAqIG1pY3JvcGhvbmUgYXVkaW8gc3RyZWFtIHdpdGggYnJvd3NlcidzIG5hdGl2ZSBGRlQuIFRoaXMgQVBJIG9ubHkgd29ya3MgaW5cbiAqIGJyb3dzZXIgZW52aXJvbm1lbnQgd2hlbiB0aGUgZGV2aWNlIGhhcyBtaWNyb3Bob25lLlxuICpcbiAqIE5vdGU6IHRoaXMgY29kZSBzbmlwcGV0IG9ubHkgd29ya3Mgd2hlbiB0aGUgZGV2aWNlIGhhcyBhIG1pY3JvcGhvbmUuIEl0IHdpbGxcbiAqIHJlcXVlc3QgcGVybWlzc2lvbiB0byBvcGVuIHRoZSBtaWNyb3Bob25lIHdoZW4gcnVubmluZy5cbiAqIGBgYGpzXG4gKiBjb25zdCBtaWMgPSBhd2FpdCB0Zi5kYXRhLm1pY3JvcGhvbmUoe1xuICogICBmZnRTaXplOiAxMDI0LFxuICogICBjb2x1bW5UcnVuY2F0ZUxlbmd0aDogMjMyLFxuICogICBudW1GcmFtZXNQZXJTcGVjdHJvZ3JhbTogNDMsXG4gKiAgIHNhbXBsZVJhdGVIejo0NDEwMCxcbiAqICAgaW5jbHVkZVNwZWN0cm9ncmFtOiB0cnVlLFxuICogICBpbmNsdWRlV2F2ZWZvcm06IHRydWVcbiAqIH0pO1xuICogY29uc3QgYXVkaW9EYXRhID0gYXdhaXQgbWljLmNhcHR1cmUoKTtcbiAqIGNvbnN0IHNwZWN0cm9ncmFtVGVuc29yID0gYXVkaW9EYXRhLnNwZWN0cm9ncmFtO1xuICogc3BlY3Ryb2dyYW1UZW5zb3IucHJpbnQoKTtcbiAqIGNvbnN0IHdhdmVmb3JtVGVuc29yID0gYXVkaW9EYXRhLndhdmVmb3JtO1xuICogd2F2ZWZvcm1UZW5zb3IucHJpbnQoKTtcbiAqIG1pYy5zdG9wKCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbWljcm9waG9uZUNvbmZpZyBBIGBNaWNyb3Bob25lQ29uZmlnYCBvYmplY3QgdGhhdCBjb250YWluc1xuICogICAgIGNvbmZpZ3VyYXRpb25zIG9mIHJlYWRpbmcgYXVkaW8gZGF0YSBmcm9tIG1pY3JvcGhvbmUuXG4gKlxuICogQGRvYyB7XG4gKiAgIGhlYWRpbmc6ICdEYXRhJyxcbiAqICAgc3ViaGVhZGluZzogJ0NyZWF0aW9uJyxcbiAqICAgbmFtZXNwYWNlOiAnZGF0YScsXG4gKiAgIGlnbm9yZUNJOiB0cnVlXG4gKiAgfVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWljcm9waG9uZShtaWNyb3Bob25lQ29uZmlnPzogTWljcm9waG9uZUNvbmZpZyk6XG4gICAgUHJvbWlzZTxNaWNyb3Bob25lSXRlcmF0b3I+IHtcbiAgcmV0dXJuIE1pY3JvcGhvbmVJdGVyYXRvci5jcmVhdGUobWljcm9waG9uZUNvbmZpZyk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @license See the LICENSE file. */ // This code is auto-generated, do not modify this file!
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '4.22.0';
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtZGF0YS9zcmMvdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFFckMsd0RBQXdEO0FBQ3hELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN6QixPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGxpY2Vuc2UgU2VlIHRoZSBMSUNFTlNFIGZpbGUuICovXG5cbi8vIFRoaXMgY29kZSBpcyBhdXRvLWdlbmVyYXRlZCwgZG8gbm90IG1vZGlmeSB0aGlzIGZpbGUhXG5jb25zdCB2ZXJzaW9uID0gJzQuMjIuMCc7XG5leHBvcnQge3ZlcnNpb259O1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$csv_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/csv_dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$text_line_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/text_line_dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/readers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$file_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/file_data_source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$url_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/url_data_source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/version.js [app-client] (ecmascript)"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWRhdGEvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFDLE9BQU8sSUFBSSxZQUFZLEVBQUMsTUFBTSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmV4cG9ydCB7YXJyYXksIERhdGFzZXQsIHppcH0gZnJvbSAnLi9kYXRhc2V0JztcbmV4cG9ydCB7Q1NWRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0cy9jc3ZfZGF0YXNldCc7XG5leHBvcnQge1RleHRMaW5lRGF0YXNldH0gZnJvbSAnLi9kYXRhc2V0cy90ZXh0X2xpbmVfZGF0YXNldCc7XG5leHBvcnQge2NzdiwgZnVuYywgZ2VuZXJhdG9yLCBtaWNyb3Bob25lLCB3ZWJjYW19IGZyb20gJy4vcmVhZGVycyc7XG5leHBvcnQge0ZpbGVEYXRhU291cmNlfSBmcm9tICcuL3NvdXJjZXMvZmlsZV9kYXRhX3NvdXJjZSc7XG5leHBvcnQge1VSTERhdGFTb3VyY2V9IGZyb20gJy4vc291cmNlcy91cmxfZGF0YV9zb3VyY2UnO1xuZXhwb3J0IHtDb2x1bW5Db25maWcsIE1pY3JvcGhvbmVDb25maWcsIFdlYmNhbUNvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQge3ZlcnNpb24gYXMgdmVyc2lvbl9kYXRhfSBmcm9tICcuL3ZlcnNpb24nO1xuIl19
;
;
;
;
;
;
;
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSVDataset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$csv_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSVDataset"],
    "Dataset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dataset"],
    "FileDataSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$file_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileDataSource"],
    "TextLineDataset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$text_line_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextLineDataset"],
    "URLDataSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$url_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["URLDataSource"],
    "array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"],
    "csv",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["csv"],
    "func",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["func"],
    "generator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generator"],
    "microphone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microphone"],
    "version_data",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"],
    "webcam",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["webcam"],
    "zip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zip"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$csv_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/csv_dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$datasets$2f$text_line_dataset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/datasets/text_line_dataset.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$readers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/readers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$file_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/file_data_source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$sources$2f$url_data_source$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/sources/url_data_source.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/version.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/version.js [app-client] (ecmascript) <export version as version_data>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version_data",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$data$2f$dist$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-data/dist/version.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-data_dist_92a59ce9._.js.map