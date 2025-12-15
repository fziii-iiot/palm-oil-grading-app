module.exports = [
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/executor_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /**
 * LruCache: A mapping from the String to T. If the number of the entries is
 * exceeding the `maxEntries`, the LruCache will delete the least recently
 * used entry.
 */ __turbopack_context__.s([
    "LruCache",
    ()=>LruCache
]);
class LruCache {
    constructor(maxEntries){
        this.maxEntries = maxEntries || 100;
        this.cache = new Map();
    }
    /**
     * Get the entry for the key and mark it as used recently.
     */ get(key) {
        let entry;
        if (this.cache.has(key)) {
            entry = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, entry);
        }
        return entry;
    }
    /**
     * Put the entry into the cache. If the key already existed, mark the key as
     * used recently.
     */ put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.maxEntries) {
            const keyToDelete = this.cache.keys().next().value;
            this.cache.delete(keyToDelete);
        }
        this.cache.set(key, value);
    }
    /**
     * Get the MaxEntries of the cache.
     */ getMaxEntries() {
        return this.maxEntries;
    }
    /**
     * Set the MaxEntries of the cache. If the maxEntries is decreased, reduce
     * entries in the cache.
     */ setMaxEntries(maxEntries) {
        if (maxEntries < 0) {
            throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${maxEntries}.`);
        }
        if (this.maxEntries > maxEntries) {
            for(let i = 0; i < this.maxEntries - maxEntries; i++){
                const keyToDelete = this.cache.keys().next().value;
                this.cache.delete(keyToDelete);
            }
        }
        this.maxEntries = maxEntries;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0b3JfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvdXRpbHMvZXhlY3V0b3JfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDSDs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLFFBQVE7SUFJbkIsWUFBWSxVQUFtQjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNJLEdBQUcsQ0FBQyxHQUFXO1FBQ3BCLElBQUksS0FBUSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFRO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGFBQWEsQ0FBQyxVQUFrQjtRQUNyQyxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FDWCw0REFDSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsRUFBRTtZQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbi8qKlxuICogTHJ1Q2FjaGU6IEEgbWFwcGluZyBmcm9tIHRoZSBTdHJpbmcgdG8gVC4gSWYgdGhlIG51bWJlciBvZiB0aGUgZW50cmllcyBpc1xuICogZXhjZWVkaW5nIHRoZSBgbWF4RW50cmllc2AsIHRoZSBMcnVDYWNoZSB3aWxsIGRlbGV0ZSB0aGUgbGVhc3QgcmVjZW50bHlcbiAqIHVzZWQgZW50cnkuXG4gKi9cblxuZXhwb3J0IGNsYXNzIExydUNhY2hlPFQ+IHtcbiAgcHJpdmF0ZSBjYWNoZTogTWFwPHN0cmluZywgVD47XG4gIHByaXZhdGUgbWF4RW50cmllczogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG1heEVudHJpZXM/OiBudW1iZXIpIHtcbiAgICB0aGlzLm1heEVudHJpZXMgPSBtYXhFbnRyaWVzIHx8IDEwMDtcbiAgICB0aGlzLmNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBlbnRyeSBmb3IgdGhlIGtleSBhbmQgbWFyayBpdCBhcyB1c2VkIHJlY2VudGx5LlxuICAgKi9cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IFQge1xuICAgIGxldCBlbnRyeTogVDtcbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuICAgICAgZW50cnkgPSB0aGlzLmNhY2hlLmdldChrZXkpO1xuICAgICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcbiAgICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICAvKipcbiAgICogUHV0IHRoZSBlbnRyeSBpbnRvIHRoZSBjYWNoZS4gSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0ZWQsIG1hcmsgdGhlIGtleSBhc1xuICAgKiB1c2VkIHJlY2VudGx5LlxuICAgKi9cbiAgcHVibGljIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2FjaGUuc2l6ZSA+PSB0aGlzLm1heEVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGtleVRvRGVsZXRlID0gdGhpcy5jYWNoZS5rZXlzKCkubmV4dCgpLnZhbHVlO1xuICAgICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5VG9EZWxldGUpO1xuICAgIH1cbiAgICB0aGlzLmNhY2hlLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIE1heEVudHJpZXMgb2YgdGhlIGNhY2hlLlxuICAgKi9cbiAgcHVibGljIGdldE1heEVudHJpZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tYXhFbnRyaWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgTWF4RW50cmllcyBvZiB0aGUgY2FjaGUuIElmIHRoZSBtYXhFbnRyaWVzIGlzIGRlY3JlYXNlZCwgcmVkdWNlXG4gICAqIGVudHJpZXMgaW4gdGhlIGNhY2hlLlxuICAgKi9cbiAgcHVibGljIHNldE1heEVudHJpZXMobWF4RW50cmllczogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKG1heEVudHJpZXMgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRoZSBtYXhFbnRyaWVzIG9mIExSVSBjYWNoZXMgbXVzdCBiZSBhdCBsZWFzdCAwLCBidXQgZ290ICR7XG4gICAgICAgICAgICAgIG1heEVudHJpZXN9LmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heEVudHJpZXMgPiBtYXhFbnRyaWVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4RW50cmllcyAtIG1heEVudHJpZXM7IGkrKykge1xuICAgICAgICBjb25zdCBrZXlUb0RlbGV0ZSA9IHRoaXMuY2FjaGUua2V5cygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgdGhpcy5jYWNoZS5kZWxldGUoa2V5VG9EZWxldGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubWF4RW50cmllcyA9IG1heEVudHJpZXM7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source: utils/generic_utils.py */ __turbopack_context__.s([
    "assert",
    ()=>assert,
    "assertPositiveInteger",
    ()=>assertPositiveInteger,
    "checkArrayTypeAndLength",
    ()=>checkArrayTypeAndLength,
    "checkStringTypeUnionValue",
    ()=>checkStringTypeUnionValue,
    "count",
    ()=>count,
    "debounce",
    ()=>debounce,
    "deserializeKerasObject",
    ()=>deserializeKerasObject,
    "formatAsFriendlyString",
    ()=>formatAsFriendlyString,
    "getCartesianProductOfValues",
    ()=>getCartesianProductOfValues,
    "isObjectEmpty",
    ()=>isObjectEmpty,
    "mapActivationToFusedKernel",
    ()=>mapActivationToFusedKernel,
    "numberCompare",
    ()=>numberCompare,
    "objectListUid",
    ()=>objectListUid,
    "pyListRepeat",
    ()=>pyListRepeat,
    "reverseNumberCompare",
    ()=>reverseNumberCompare,
    "serializeKerasObject",
    ()=>serializeKerasObject,
    "singletonOrArray",
    ()=>singletonOrArray,
    "stringToDType",
    ()=>stringToDType,
    "stringsEqual",
    ()=>stringsEqual,
    "toCamelCase",
    ()=>toCamelCase,
    "toList",
    ()=>toList,
    "toSnakeCase",
    ()=>toSnakeCase,
    "unique",
    ()=>unique
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
;
;
function pyListRepeat(value, numValues) {
    if (Array.isArray(value)) {
        // tslint:disable-next-line:no-any
        let newArray = [];
        for(let i = 0; i < numValues; i++){
            newArray = newArray.concat(value);
        }
        return newArray;
    } else {
        const newArray = new Array(numValues);
        newArray.fill(value);
        return newArray;
    }
}
function assert(val, message) {
    if (!val) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AssertionError"](message);
    }
}
function count(array, refernce) {
    let counter = 0;
    for (const item of array){
        if (item === refernce) {
            counter++;
        }
    }
    return counter;
}
function singletonOrArray(xs) {
    if (xs.length === 1) {
        return xs[0];
    }
    return xs;
}
function toList(x) {
    if (Array.isArray(x)) {
        return x;
    }
    return [
        x
    ];
}
function objectListUid(objs) {
    const objectList = toList(objs);
    let retVal = '';
    for (const obj of objectList){
        if (obj.id == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Object ${obj} passed to objectListUid without an id`);
        }
        if (retVal !== '') {
            retVal = retVal + ', ';
        }
        retVal = `${retVal}${Math.abs(obj.id)}`;
    }
    return retVal;
}
function toSnakeCase(name) {
    const intermediate = name.replace(/(.)([A-Z][a-z0-9]+)/g, '$1_$2');
    const insecure = intermediate.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    /*
     If the class is private the name starts with "_" which is not secure
     for creating scopes. We prefix the name with "private" in this case.
     */ if (insecure[0] !== '_') {
        return insecure;
    }
    return 'private' + insecure;
}
function toCamelCase(identifier) {
    // quick return for empty string or single character strings
    if (identifier.length <= 1) {
        return identifier;
    }
    // Check for the underscore indicating snake_case
    if (identifier.indexOf('_') === -1) {
        return identifier;
    }
    return identifier.replace(/[_]+(\w|$)/g, (m, p1)=>p1.toUpperCase());
}
// tslint:disable-next-line:no-any
let _GLOBAL_CUSTOM_OBJECTS = {};
function serializeKerasObject(instance) {
    if (instance === null || instance === undefined) {
        return null;
    }
    const dict = {};
    dict['className'] = instance.getClassName();
    dict['config'] = instance.getConfig();
    return dict;
}
/**
 * Replace ndarray-style scalar objects in serialization objects with numbers.
 *
 * Background: In some versions of tf.keras, certain scalar values in the HDF5
 * model save file can be serialized as: `{'type': 'ndarray', 'value': num}`,
 * where in `num` is a plain number. This method converts such serialization
 * to a `number`.
 *
 * @param config The keras-format serialization object to be processed
 *   (in place).
 */ function convertNDArrayScalarsInConfig(config) {
    if (config == null || typeof config !== 'object') {
        return;
    } else if (Array.isArray(config)) {
        config.forEach((configItem)=>convertNDArrayScalarsInConfig(configItem));
    } else {
        const fields = Object.keys(config);
        for (const field of fields){
            const value = config[field];
            if (value != null && typeof value === 'object') {
                if (!Array.isArray(value) && value['type'] === 'ndarray' && typeof value['value'] === 'number') {
                    config[field] = value['value'];
                } else {
                    convertNDArrayScalarsInConfig(value);
                }
            }
        }
    }
}
function deserializeKerasObject(identifier, moduleObjects = {}, customObjects = {}, printableModuleName = 'object', fastWeightInit = false) {
    // tslint:enable
    if (typeof identifier === 'string') {
        const functionName = identifier;
        let fn;
        if (functionName in customObjects) {
            fn = customObjects[functionName];
        } else if (functionName in _GLOBAL_CUSTOM_OBJECTS) {
            fn = _GLOBAL_CUSTOM_OBJECTS[functionName];
        } else {
            fn = moduleObjects[functionName];
            if (fn == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unknown ${printableModuleName}: ${identifier}. ` + `This may be due to one of the following reasons:\n` + `1. The ${printableModuleName} is defined in Python, in which ` + `case it needs to be ported to TensorFlow.js or your JavaScript ` + `code.\n` + `2. The custom ${printableModuleName} is defined in JavaScript, ` + `but is not registered properly with ` + `tf.serialization.registerClass().`);
            // TODO(cais): Add link to tutorial page on custom layers.
            }
        }
        return fn;
    } else {
        // In this case we are dealing with a Keras config dictionary.
        const config = identifier;
        if (config['className'] == null || config['config'] == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`${printableModuleName}: Improper config format: ` + `${JSON.stringify(config)}.\n` + `'className' and 'config' must set.`);
        }
        const className = config['className'];
        let cls, fromConfig;
        if (className in customObjects) {
            [cls, fromConfig] = customObjects[className];
        } else if (className in _GLOBAL_CUSTOM_OBJECTS) {
            [cls, fromConfig] = _GLOBAL_CUSTOM_OBJECTS['className'];
        } else if (className in moduleObjects) {
            [cls, fromConfig] = moduleObjects[className];
        }
        if (cls == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unknown ${printableModuleName}: ${className}. ` + `This may be due to one of the following reasons:\n` + `1. The ${printableModuleName} is defined in Python, in which ` + `case it needs to be ported to TensorFlow.js or your JavaScript ` + `code.\n` + `2. The custom ${printableModuleName} is defined in JavaScript, ` + `but is not registered properly with ` + `tf.serialization.registerClass().`);
        // TODO(cais): Add link to tutorial page on custom layers.
        }
        if (fromConfig != null) {
            // Porting notes: Instead of checking to see whether fromConfig accepts
            // customObjects, we create a customObjects dictionary and tack it on to
            // config['config'] as config['config'].customObjects. Objects can use it,
            // if they want.
            // tslint:disable-next-line:no-any
            const customObjectsCombined = {};
            for (const key of Object.keys(_GLOBAL_CUSTOM_OBJECTS)){
                customObjectsCombined[key] = _GLOBAL_CUSTOM_OBJECTS[key];
            }
            for (const key of Object.keys(customObjects)){
                customObjectsCombined[key] = customObjects[key];
            }
            // Add the customObjects to config
            const nestedConfig = config['config'];
            nestedConfig['customObjects'] = customObjectsCombined;
            const backupCustomObjects = Object.assign({}, _GLOBAL_CUSTOM_OBJECTS);
            for (const key of Object.keys(customObjects)){
                _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
            }
            convertNDArrayScalarsInConfig(config['config']);
            const returnObj = fromConfig(cls, config['config'], customObjects, fastWeightInit);
            _GLOBAL_CUSTOM_OBJECTS = Object.assign({}, backupCustomObjects);
            return returnObj;
        } else {
            // Then `cls` may be a function returning a class.
            // In this case by convention `config` holds
            // the kwargs of the function.
            const backupCustomObjects = Object.assign({}, _GLOBAL_CUSTOM_OBJECTS);
            for (const key of Object.keys(customObjects)){
                _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
            }
            // In python this is **config['config'], for tfjs-layers we require
            // classes that use this fall-through construction method to take
            // a config interface that mimics the expansion of named parameters.
            const returnObj = new cls(config['config']);
            _GLOBAL_CUSTOM_OBJECTS = Object.assign({}, backupCustomObjects);
            return returnObj;
        }
    }
}
function numberCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
function reverseNumberCompare(a, b) {
    return -1 * numberCompare(a, b);
}
function stringToDType(dtype) {
    switch(dtype){
        case 'float32':
            return 'float32';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Invalid dtype: ${dtype}`);
    }
}
function stringsEqual(xs, ys) {
    if (xs == null || ys == null) {
        return xs === ys;
    }
    if (xs.length !== ys.length) {
        return false;
    }
    for(let i = 0; i < xs.length; ++i){
        if (xs[i] !== ys[i]) {
            return false;
        }
    }
    return true;
}
function unique(xs) {
    if (xs == null) {
        return xs;
    }
    const out = [];
    // TODO(cais): Maybe improve performance by sorting.
    for (const x of xs){
        if (out.indexOf(x) === -1) {
            out.push(x);
        }
    }
    return out;
}
function isObjectEmpty(obj) {
    if (obj == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Invalid value in obj: ${JSON.stringify(obj)}`);
    }
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
function checkStringTypeUnionValue(values, label, value) {
    if (value == null) {
        return;
    }
    if (values.indexOf(value) < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`${value} is not a valid ${label}.  Valid values are ${values} or null/undefined.`);
    }
}
function checkArrayTypeAndLength(x, expectedType, minLength = 0, maxLength = Infinity) {
    assert(minLength >= 0);
    assert(maxLength >= minLength);
    return Array.isArray(x) && x.length >= minLength && x.length <= maxLength && x.every((e)=>typeof e === expectedType);
}
function assertPositiveInteger(value, name) {
    if (Array.isArray(value)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(value.length > 0, ()=>`${name} is unexpectedly an empty array.`);
        value.forEach((v, i)=>assertPositiveInteger(v, `element ${i + 1} of ${name}`));
    } else {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(Number.isInteger(value) && value > 0, ()=>`Expected ${name} to be a positive integer, but got ` + `${formatAsFriendlyString(value)}.`);
    }
}
function formatAsFriendlyString(value) {
    if (value === null) {
        return 'null';
    } else if (Array.isArray(value)) {
        return '[' + value.map((v)=>formatAsFriendlyString(v)).join(',') + ']';
    } else if (typeof value === 'string') {
        return `"${value}"`;
    } else {
        return `${value}`;
    }
}
function debounce(f, waitMs, nowFunc) {
    let lastTime = nowFunc != null ? nowFunc() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].now();
    let lastResult;
    const f2 = (...args)=>{
        const now = nowFunc != null ? nowFunc() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].now();
        if (now - lastTime < waitMs) {
            return lastResult;
        }
        lastTime = now;
        lastResult = f(...args);
        return lastResult;
    };
    return f2;
}
function mapActivationToFusedKernel(activationName) {
    if (activationName === 'relu') {
        return 'relu';
    }
    if (activationName === 'linear') {
        return 'linear';
    }
    if (activationName === 'elu') {
        return 'elu';
    }
    return null;
}
function getCartesianProductOfValues(...arrayOfValues) {
    assert(arrayOfValues.length > 0, 'arrayOfValues is empty');
    for (const values of arrayOfValues){
        assert(Array.isArray(values), 'one of the values is not an array');
        assert(values.length > 0, 'one of the values is empty');
    }
    return arrayOfValues.reduce((products, values)=>{
        if (products.length === 0) {
            return values.map((value)=>[
                    value
                ]);
        }
        return values.map((value)=>{
            return products.map((prevValue)=>[
                    ...prevValue,
                    value
                ]);
        }).reduce((flattenedProduct, unflattenedProduct)=>{
            return flattenedProduct.concat(unflattenedProduct);
        }, []);
    }, []);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpY191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy91dGlscy9nZW5lcmljX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsNkNBQTZDO0FBRTdDLE9BQU8sRUFBaUMsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFM0UsT0FBTyxFQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFckQsZ0JBQWdCO0FBRWhCOzs7R0FHRztBQUNILGtDQUFrQztBQUNsQyxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQVUsRUFBRSxTQUFpQjtJQUN4RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsa0NBQWtDO1FBQ2xDLElBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxRQUFRLENBQUM7S0FDakI7U0FBTTtRQUNMLE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsT0FBTyxRQUFRLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxHQUFZLEVBQUUsT0FBZ0I7SUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFJLEtBQVUsRUFBRSxR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QyxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxNQUFNO2FBQ1IsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsRUFBRTtZQUMvQyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFvQixDQUFDLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qIE9yaWdpbmFsIHNvdXJjZTogdXRpbHMvZ2VuZXJpY191dGlscy5weSAqL1xuXG5pbXBvcnQge0RhdGFUeXBlLCBmdXNlZCwgc2VyaWFsaXphdGlvbiwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtBc3NlcnRpb25FcnJvciwgVmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcblxuLy8gdHNsaW50OmVuYWJsZVxuXG4vKipcbiAqIElmIGB2YWx1ZWAgaXMgYW4gQXJyYXksIGVxdWl2YWxlbnQgdG8gUHl0aG9uJ3MgYHZhbHVlICogbnVtVmFsdWVzYC5cbiAqIElmIGB2YWx1ZWAgaXMgbm90IGFuIEFycmF5LCBlcXVpdmFsZW50IHRvIFB5dGhvbidzIGBbdmFsdWVdICogbnVtVmFsdWVzYFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gcHlMaXN0UmVwZWF0KHZhbHVlOiBhbnksIG51bVZhbHVlczogbnVtYmVyKTogYW55W10ge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgIG5ld0FycmF5ID0gbmV3QXJyYXkuY29uY2F0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IEFycmF5KG51bVZhbHVlcyk7XG4gICAgbmV3QXJyYXkuZmlsbCh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQodmFsOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghdmFsKSB7XG4gICAgdGhyb3cgbmV3IEFzc2VydGlvbkVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBlbGVtZW50cyBvZiB0aGUgYGFycmF5YCB0aGF0IGFyZSBlcXVhbCB0byBgcmVmZXJlbmNlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50PFQ+KGFycmF5OiBUW10sIHJlZmVybmNlOiBUKSB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGFycmF5KSB7XG4gICAgaWYgKGl0ZW0gPT09IHJlZmVybmNlKSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb3VudGVyO1xufVxuXG4vKipcbiAqIElmIGFuIGFycmF5IGlzIG9mIGxlbmd0aCAxLCBqdXN0IHJldHVybiB0aGUgZmlyc3QgZWxlbWVudC4gT3RoZXJ3aXNlLCByZXR1cm5cbiAqIHRoZSBmdWxsIGFycmF5LlxuICogQHBhcmFtIHRlbnNvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZXRvbk9yQXJyYXk8VD4oeHM6IFRbXSk6IFR8VFtdIHtcbiAgaWYgKHhzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiB4c1swXTtcbiAgfVxuICByZXR1cm4geHM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplcyBhIGxpc3QvdGVuc29yIGludG8gYSBsaXN0LlxuICpcbiAqIElmIGEgdGVuc29yIGlzIHBhc3NlZCwgd2UgcmV0dXJuXG4gKiBhIGxpc3Qgb2Ygc2l6ZSAxIGNvbnRhaW5pbmcgdGhlIHRlbnNvci5cbiAqXG4gKiBAcGFyYW0geCB0YXJnZXQgb2JqZWN0IHRvIGJlIG5vcm1hbGl6ZWQuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiB0b0xpc3Q8VD4oeDogVHxUW10pOiBUW10ge1xuICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHJldHVybiBbeF07XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBVSUQgZm9yIGEgbGlzdFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0TGlzdFVpZChvYmpzOiBhbnl8YW55W10pOiBzdHJpbmcge1xuICBjb25zdCBvYmplY3RMaXN0ID0gdG9MaXN0KG9ianMpO1xuICBsZXQgcmV0VmFsID0gJyc7XG4gIGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdExpc3QpIHtcbiAgICBpZiAob2JqLmlkID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBPYmplY3QgJHtvYmp9IHBhc3NlZCB0byBvYmplY3RMaXN0VWlkIHdpdGhvdXQgYW4gaWRgKTtcbiAgICB9XG4gICAgaWYgKHJldFZhbCAhPT0gJycpIHtcbiAgICAgIHJldFZhbCA9IHJldFZhbCArICcsICc7XG4gICAgfVxuICAgIHJldFZhbCA9IGAke3JldFZhbH0ke01hdGguYWJzKG9iai5pZCl9YDtcbiAgfVxuICByZXR1cm4gcmV0VmFsO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBzdHJpbmcgdG8gc25ha2UtY2FzZS5cbiAqIEBwYXJhbSBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1NuYWtlQ2FzZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpbnRlcm1lZGlhdGUgPSBuYW1lLnJlcGxhY2UoLyguKShbQS1aXVthLXowLTldKykvZywgJyQxXyQyJyk7XG4gIGNvbnN0IGluc2VjdXJlID1cbiAgICAgIGludGVybWVkaWF0ZS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDFfJDInKS50b0xvd2VyQ2FzZSgpO1xuICAvKlxuICAgSWYgdGhlIGNsYXNzIGlzIHByaXZhdGUgdGhlIG5hbWUgc3RhcnRzIHdpdGggXCJfXCIgd2hpY2ggaXMgbm90IHNlY3VyZVxuICAgZm9yIGNyZWF0aW5nIHNjb3Blcy4gV2UgcHJlZml4IHRoZSBuYW1lIHdpdGggXCJwcml2YXRlXCIgaW4gdGhpcyBjYXNlLlxuICAgKi9cbiAgaWYgKGluc2VjdXJlWzBdICE9PSAnXycpIHtcbiAgICByZXR1cm4gaW5zZWN1cmU7XG4gIH1cbiAgcmV0dXJuICdwcml2YXRlJyArIGluc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2UoaWRlbnRpZmllcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gcXVpY2sgcmV0dXJuIGZvciBlbXB0eSBzdHJpbmcgb3Igc2luZ2xlIGNoYXJhY3RlciBzdHJpbmdzXG4gIGlmIChpZGVudGlmaWVyLmxlbmd0aCA8PSAxKSB7XG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIHRoZSB1bmRlcnNjb3JlIGluZGljYXRpbmcgc25ha2VfY2FzZVxuICBpZiAoaWRlbnRpZmllci5pbmRleE9mKCdfJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvW19dKyhcXHd8JCkvZywgKG0sIHAxKSA9PiBwMS50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxubGV0IF9HTE9CQUxfQ1VTVE9NX09CSkVDVFMgPSB7fSBhcyB7W29iak5hbWU6IHN0cmluZ106IGFueX07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVLZXJhc09iamVjdChpbnN0YW5jZTogc2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGUpOlxuICAgIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdFZhbHVlIHtcbiAgaWYgKGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBkaWN0OiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3RWYWx1ZSA9IHt9O1xuICBkaWN0WydjbGFzc05hbWUnXSA9IGluc3RhbmNlLmdldENsYXNzTmFtZSgpO1xuICBkaWN0Wydjb25maWcnXSA9IGluc3RhbmNlLmdldENvbmZpZygpO1xuICByZXR1cm4gZGljdDtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIG5kYXJyYXktc3R5bGUgc2NhbGFyIG9iamVjdHMgaW4gc2VyaWFsaXphdGlvbiBvYmplY3RzIHdpdGggbnVtYmVycy5cbiAqXG4gKiBCYWNrZ3JvdW5kOiBJbiBzb21lIHZlcnNpb25zIG9mIHRmLmtlcmFzLCBjZXJ0YWluIHNjYWxhciB2YWx1ZXMgaW4gdGhlIEhERjVcbiAqIG1vZGVsIHNhdmUgZmlsZSBjYW4gYmUgc2VyaWFsaXplZCBhczogYHsndHlwZSc6ICduZGFycmF5JywgJ3ZhbHVlJzogbnVtfWAsXG4gKiB3aGVyZSBpbiBgbnVtYCBpcyBhIHBsYWluIG51bWJlci4gVGhpcyBtZXRob2QgY29udmVydHMgc3VjaCBzZXJpYWxpemF0aW9uXG4gKiB0byBhIGBudW1iZXJgLlxuICpcbiAqIEBwYXJhbSBjb25maWcgVGhlIGtlcmFzLWZvcm1hdCBzZXJpYWxpemF0aW9uIG9iamVjdCB0byBiZSBwcm9jZXNzZWRcbiAqICAgKGluIHBsYWNlKS5cbiAqL1xuZnVuY3Rpb24gY29udmVydE5EQXJyYXlTY2FsYXJzSW5Db25maWcoY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3RWYWx1ZSk6XG4gICAgdm9pZCB7XG4gIGlmIChjb25maWcgPT0gbnVsbCB8fCB0eXBlb2YgY29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZykpIHtcbiAgICBjb25maWcuZm9yRWFjaChjb25maWdJdGVtID0+IGNvbnZlcnROREFycmF5U2NhbGFyc0luQ29uZmlnKGNvbmZpZ0l0ZW0pKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1tmaWVsZF07XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWVbJ3R5cGUnXSA9PT0gJ25kYXJyYXknICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWVbJ3ZhbHVlJ10gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29uZmlnW2ZpZWxkXSA9IHZhbHVlWyd2YWx1ZSddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnZlcnROREFycmF5U2NhbGFyc0luQ29uZmlnKHZhbHVlIGFzIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZSBhIHNhdmVkIEtlcmFzIE9iamVjdFxuICogQHBhcmFtIGlkZW50aWZpZXIgZWl0aGVyIGEgc3RyaW5nIElEIG9yIGEgc2F2ZWQgS2VyYXMgZGljdGlvbmFyeVxuICogQHBhcmFtIG1vZHVsZU9iamVjdHMgYSBsaXN0IG9mIFB5dGhvbiBjbGFzcyBuYW1lcyB0byBvYmplY3QgY29uc3RydWN0b3JzXG4gKiBAcGFyYW0gY3VzdG9tT2JqZWN0cyBhIGxpc3Qgb2YgUHl0aG9uIGNsYXNzIG5hbWVzIHRvIG9iamVjdCBjb25zdHJ1Y3RvcnNcbiAqIEBwYXJhbSBwcmludGFibGVNb2R1bGVOYW1lIGRlYnVnIHRleHQgZm9yIHRoZSBvYmplY3QgYmVpbmcgcmVjb25zdGl0dXRlZFxuICogQHBhcmFtIGZhc3RXZWlnaHRJbml0IE9wdGlvbmFsIGZsYWcgdG8gdXNlIGZhc3Qgd2VpZ2h0IGluaXRpYWxpemF0aW9uXG4gKiAgIGR1cmluZyBkZXNlcmlhbGl6YXRpb24uIFRoaXMgaXMgYXBwbGljYWJsZSB0byBjYXNlcyBpbiB3aGljaFxuICogICB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBiZSBpbW1lZGlhdGVseSBvdmVyd3JpdHRlbiBieSBsb2FkZWQgd2VpZ2h0XG4gKiAgIHZhbHVlcy4gRGVmYXVsdDogYGZhbHNlYC5cbiAqIEByZXR1cm5zIGEgVGVuc29yRmxvdy5qcyBMYXllcnMgb2JqZWN0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplS2VyYXNPYmplY3QoXG4gICAgaWRlbnRpZmllcjogc3RyaW5nfHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICBtb2R1bGVPYmplY3RzID0ge30gYXMge1tvYmpOYW1lOiBzdHJpbmddOiBhbnl9LFxuICAgIGN1c3RvbU9iamVjdHMgPSB7fSBhcyB7W29iak5hbWU6IHN0cmluZ106IGFueX0sXG4gICAgcHJpbnRhYmxlTW9kdWxlTmFtZSA9ICdvYmplY3QnLCBmYXN0V2VpZ2h0SW5pdCA9IGZhbHNlKTogYW55IHtcbiAgLy8gdHNsaW50OmVuYWJsZVxuICBpZiAodHlwZW9mIGlkZW50aWZpZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gaWRlbnRpZmllcjtcbiAgICBsZXQgZm47XG4gICAgaWYgKGZ1bmN0aW9uTmFtZSBpbiBjdXN0b21PYmplY3RzKSB7XG4gICAgICBmbiA9IGN1c3RvbU9iamVjdHNbZnVuY3Rpb25OYW1lXTtcbiAgICB9IGVsc2UgaWYgKGZ1bmN0aW9uTmFtZSBpbiBfR0xPQkFMX0NVU1RPTV9PQkpFQ1RTKSB7XG4gICAgICBmbiA9IF9HTE9CQUxfQ1VTVE9NX09CSkVDVFNbZnVuY3Rpb25OYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4gPSBtb2R1bGVPYmplY3RzW2Z1bmN0aW9uTmFtZV07XG4gICAgICBpZiAoZm4gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBVbmtub3duICR7cHJpbnRhYmxlTW9kdWxlTmFtZX06ICR7aWRlbnRpZmllcn0uIGAgK1xuICAgICAgICAgICAgYFRoaXMgbWF5IGJlIGR1ZSB0byBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbmAgK1xuICAgICAgICAgICAgYDEuIFRoZSAke3ByaW50YWJsZU1vZHVsZU5hbWV9IGlzIGRlZmluZWQgaW4gUHl0aG9uLCBpbiB3aGljaCBgICtcbiAgICAgICAgICAgIGBjYXNlIGl0IG5lZWRzIHRvIGJlIHBvcnRlZCB0byBUZW5zb3JGbG93LmpzIG9yIHlvdXIgSmF2YVNjcmlwdCBgICtcbiAgICAgICAgICAgIGBjb2RlLlxcbmAgK1xuICAgICAgICAgICAgYDIuIFRoZSBjdXN0b20gJHtwcmludGFibGVNb2R1bGVOYW1lfSBpcyBkZWZpbmVkIGluIEphdmFTY3JpcHQsIGAgK1xuICAgICAgICAgICAgYGJ1dCBpcyBub3QgcmVnaXN0ZXJlZCBwcm9wZXJseSB3aXRoIGAgK1xuICAgICAgICAgICAgYHRmLnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcygpLmApO1xuICAgICAgICAvLyBUT0RPKGNhaXMpOiBBZGQgbGluayB0byB0dXRvcmlhbCBwYWdlIG9uIGN1c3RvbSBsYXllcnMuXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmbjtcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiB0aGlzIGNhc2Ugd2UgYXJlIGRlYWxpbmcgd2l0aCBhIEtlcmFzIGNvbmZpZyBkaWN0aW9uYXJ5LlxuICAgIGNvbnN0IGNvbmZpZyA9IGlkZW50aWZpZXI7XG4gICAgaWYgKGNvbmZpZ1snY2xhc3NOYW1lJ10gPT0gbnVsbCB8fCBjb25maWdbJ2NvbmZpZyddID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGAke3ByaW50YWJsZU1vZHVsZU5hbWV9OiBJbXByb3BlciBjb25maWcgZm9ybWF0OiBgICtcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShjb25maWcpfS5cXG5gICtcbiAgICAgICAgICBgJ2NsYXNzTmFtZScgYW5kICdjb25maWcnIG11c3Qgc2V0LmApO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWdbJ2NsYXNzTmFtZSddIGFzIHN0cmluZztcbiAgICBsZXQgY2xzLCBmcm9tQ29uZmlnO1xuICAgIGlmIChjbGFzc05hbWUgaW4gY3VzdG9tT2JqZWN0cykge1xuICAgICAgW2NscywgZnJvbUNvbmZpZ10gPSBjdXN0b21PYmplY3RzW2NsYXNzTmFtZV07XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgaW4gX0dMT0JBTF9DVVNUT01fT0JKRUNUUykge1xuICAgICAgW2NscywgZnJvbUNvbmZpZ10gPSBfR0xPQkFMX0NVU1RPTV9PQkpFQ1RTWydjbGFzc05hbWUnXTtcbiAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSBpbiBtb2R1bGVPYmplY3RzKSB7XG4gICAgICBbY2xzLCBmcm9tQ29uZmlnXSA9IG1vZHVsZU9iamVjdHNbY2xhc3NOYW1lXTtcbiAgICB9XG4gICAgaWYgKGNscyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgVW5rbm93biAke3ByaW50YWJsZU1vZHVsZU5hbWV9OiAke2NsYXNzTmFtZX0uIGAgK1xuICAgICAgICAgIGBUaGlzIG1heSBiZSBkdWUgdG8gb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG5gICtcbiAgICAgICAgICBgMS4gVGhlICR7cHJpbnRhYmxlTW9kdWxlTmFtZX0gaXMgZGVmaW5lZCBpbiBQeXRob24sIGluIHdoaWNoIGAgK1xuICAgICAgICAgIGBjYXNlIGl0IG5lZWRzIHRvIGJlIHBvcnRlZCB0byBUZW5zb3JGbG93LmpzIG9yIHlvdXIgSmF2YVNjcmlwdCBgICtcbiAgICAgICAgICBgY29kZS5cXG5gICtcbiAgICAgICAgICBgMi4gVGhlIGN1c3RvbSAke3ByaW50YWJsZU1vZHVsZU5hbWV9IGlzIGRlZmluZWQgaW4gSmF2YVNjcmlwdCwgYCArXG4gICAgICAgICAgYGJ1dCBpcyBub3QgcmVnaXN0ZXJlZCBwcm9wZXJseSB3aXRoIGAgK1xuICAgICAgICAgIGB0Zi5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoKS5gKTtcbiAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBsaW5rIHRvIHR1dG9yaWFsIHBhZ2Ugb24gY3VzdG9tIGxheWVycy5cbiAgICB9XG4gICAgaWYgKGZyb21Db25maWcgIT0gbnVsbCkge1xuICAgICAgLy8gUG9ydGluZyBub3RlczogSW5zdGVhZCBvZiBjaGVja2luZyB0byBzZWUgd2hldGhlciBmcm9tQ29uZmlnIGFjY2VwdHNcbiAgICAgIC8vIGN1c3RvbU9iamVjdHMsIHdlIGNyZWF0ZSBhIGN1c3RvbU9iamVjdHMgZGljdGlvbmFyeSBhbmQgdGFjayBpdCBvbiB0b1xuICAgICAgLy8gY29uZmlnWydjb25maWcnXSBhcyBjb25maWdbJ2NvbmZpZyddLmN1c3RvbU9iamVjdHMuIE9iamVjdHMgY2FuIHVzZSBpdCxcbiAgICAgIC8vIGlmIHRoZXkgd2FudC5cblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgY29uc3QgY3VzdG9tT2JqZWN0c0NvbWJpbmVkID0ge30gYXMge1tvYmpOYW1lOiBzdHJpbmddOiBhbnl9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoX0dMT0JBTF9DVVNUT01fT0JKRUNUUykpIHtcbiAgICAgICAgY3VzdG9tT2JqZWN0c0NvbWJpbmVkW2tleV0gPSBfR0xPQkFMX0NVU1RPTV9PQkpFQ1RTW2tleV07XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjdXN0b21PYmplY3RzKSkge1xuICAgICAgICBjdXN0b21PYmplY3RzQ29tYmluZWRba2V5XSA9IGN1c3RvbU9iamVjdHNba2V5XTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCB0aGUgY3VzdG9tT2JqZWN0cyB0byBjb25maWdcbiAgICAgIGNvbnN0IG5lc3RlZENvbmZpZyA9IGNvbmZpZ1snY29uZmlnJ10gYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0O1xuICAgICAgbmVzdGVkQ29uZmlnWydjdXN0b21PYmplY3RzJ10gPSBjdXN0b21PYmplY3RzQ29tYmluZWQ7XG5cbiAgICAgIGNvbnN0IGJhY2t1cEN1c3RvbU9iamVjdHMgPSB7Li4uX0dMT0JBTF9DVVNUT01fT0JKRUNUU307XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjdXN0b21PYmplY3RzKSkge1xuICAgICAgICBfR0xPQkFMX0NVU1RPTV9PQkpFQ1RTW2tleV0gPSBjdXN0b21PYmplY3RzW2tleV07XG4gICAgICB9XG4gICAgICBjb252ZXJ0TkRBcnJheVNjYWxhcnNJbkNvbmZpZyhjb25maWdbJ2NvbmZpZyddKTtcbiAgICAgIGNvbnN0IHJldHVybk9iaiA9XG4gICAgICAgICAgZnJvbUNvbmZpZyhjbHMsIGNvbmZpZ1snY29uZmlnJ10sIGN1c3RvbU9iamVjdHMsIGZhc3RXZWlnaHRJbml0KTtcbiAgICAgIF9HTE9CQUxfQ1VTVE9NX09CSkVDVFMgPSB7Li4uYmFja3VwQ3VzdG9tT2JqZWN0c307XG5cbiAgICAgIHJldHVybiByZXR1cm5PYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZW4gYGNsc2AgbWF5IGJlIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY2xhc3MuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UgYnkgY29udmVudGlvbiBgY29uZmlnYCBob2xkc1xuICAgICAgLy8gdGhlIGt3YXJncyBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICBjb25zdCBiYWNrdXBDdXN0b21PYmplY3RzID0gey4uLl9HTE9CQUxfQ1VTVE9NX09CSkVDVFN9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY3VzdG9tT2JqZWN0cykpIHtcbiAgICAgICAgX0dMT0JBTF9DVVNUT01fT0JKRUNUU1trZXldID0gY3VzdG9tT2JqZWN0c1trZXldO1xuICAgICAgfVxuICAgICAgLy8gSW4gcHl0aG9uIHRoaXMgaXMgKipjb25maWdbJ2NvbmZpZyddLCBmb3IgdGZqcy1sYXllcnMgd2UgcmVxdWlyZVxuICAgICAgLy8gY2xhc3NlcyB0aGF0IHVzZSB0aGlzIGZhbGwtdGhyb3VnaCBjb25zdHJ1Y3Rpb24gbWV0aG9kIHRvIHRha2VcbiAgICAgIC8vIGEgY29uZmlnIGludGVyZmFjZSB0aGF0IG1pbWljcyB0aGUgZXhwYW5zaW9uIG9mIG5hbWVkIHBhcmFtZXRlcnMuXG4gICAgICBjb25zdCByZXR1cm5PYmogPSBuZXcgY2xzKGNvbmZpZ1snY29uZmlnJ10pO1xuICAgICAgX0dMT0JBTF9DVVNUT01fT0JKRUNUUyA9IHsuLi5iYWNrdXBDdXN0b21PYmplY3RzfTtcbiAgICAgIHJldHVybiByZXR1cm5PYmo7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG51bWJlcnMgZm9yIHNvcnRpbmcuXG4gKiBAcGFyYW0gYVxuICogQHBhcmFtIGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG51bWJlckNvbXBhcmUoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgcmV0dXJuIChhIDwgYikgPyAtMSA6ICgoYSA+IGIpID8gMSA6IDApO1xufVxuXG4vKipcbiAqIENvbXBhcmlzb24gb2YgdHdvIG51bWJlcnMgZm9yIHJldmVyc2Ugc29ydGluZy5cbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZU51bWJlckNvbXBhcmUoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgcmV0dXJuIC0xICogbnVtYmVyQ29tcGFyZShhLCBiKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgRFR5cGUuXG4gKiBAcGFyYW0gZHR5cGVcbiAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIERUeXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9EVHlwZShkdHlwZTogc3RyaW5nKTogRGF0YVR5cGUge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICByZXR1cm4gJ2Zsb2F0MzInO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgSW52YWxpZCBkdHlwZTogJHtkdHlwZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIFRlc3QgdGhlIGVsZW1lbnQtYnktZWxlbWVudCBlcXVhbGl0eSBvZiB0d28gQXJyYXlzIG9mIHN0cmluZ3MuXG4gKiBAcGFyYW0geHMgRmlyc3QgYXJyYXkgb2Ygc3RyaW5ncy5cbiAqIEBwYXJhbSB5cyBTZWNvbmQgYXJyYXkgb2Ygc3RyaW5ncy5cbiAqIEByZXR1cm5zIFdldGhlciB0aGUgdHdvIGFycmF5cyBhcmUgYWxsIGVxdWFsLCBlbGVtZW50IGJ5IGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdzRXF1YWwoeHM6IHN0cmluZ1tdLCB5czogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgaWYgKHhzID09IG51bGwgfHwgeXMgPT0gbnVsbCkge1xuICAgIHJldHVybiB4cyA9PT0geXM7XG4gIH1cbiAgaWYgKHhzLmxlbmd0aCAhPT0geXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeHMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoeHNbaV0gIT09IHlzW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdW5pcXVlIGVsZW1lbnRzIG9mIGFuIGFycmF5LlxuICogQHBhcmFtIHhzIEFycmF5LlxuICogQHJldHVybnMgQW4gQXJyYXkgY29uc2lzdGluZyBvZiB0aGUgdW5pcXVlIGVsZW1lbnRzIGluIGB4c2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oeHM6IFRbXSk6IFRbXSB7XG4gIGlmICh4cyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHhzO1xuICB9XG4gIGNvbnN0IG91dDogVFtdID0gW107XG4gIC8vIFRPRE8oY2Fpcyk6IE1heWJlIGltcHJvdmUgcGVyZm9ybWFuY2UgYnkgc29ydGluZy5cbiAgZm9yIChjb25zdCB4IG9mIHhzKSB7XG4gICAgaWYgKG91dC5pbmRleE9mKHgpID09PSAtMSkge1xuICAgICAgb3V0LnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGFuIE9iamVjdCBpcyBlbXB0eSAoaS5lLiwgZG9lcyBub3QgaGF2ZSBvd24gcHJvcGVydGllcykuXG4gKiBAcGFyYW0gb2JqIE9iamVjdFxuICogQHJldHVybnMgV2hldGhlciB0aGUgT2JqZWN0IGlzIGVtcHR5LlxuICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBvYmplY3QgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmo6IHt9KTogYm9vbGVhbiB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKGBJbnZhbGlkIHZhbHVlIGluIG9iajogJHtKU09OLnN0cmluZ2lmeShvYmopfWApO1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdXNlZCB0byBidWlsZCB0eXBlIHVuaW9uL2VudW0gcnVuLXRpbWUgY2hlY2tlcnMuXG4gKiBAcGFyYW0gdmFsdWVzIFRoZSBsaXN0IG9mIGFsbG93ZWQgdmFsdWVzLlxuICogQHBhcmFtIGxhYmVsIEEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAdGhyb3dzIFZhbHVlRXJyb3I6IElmIHRoZSB2YWx1ZSBpcyBub3QgaW4gdmFsdWVzIG5vciBgdW5kZWZpbmVkYC9gbnVsbGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1N0cmluZ1R5cGVVbmlvblZhbHVlKFxuICAgIHZhbHVlczogc3RyaW5nW10sIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHZhbHVlcy5pbmRleE9mKHZhbHVlKSA8IDApIHtcbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgJHt2YWx1ZX0gaXMgbm90IGEgdmFsaWQgJHtsYWJlbH0uICBWYWxpZCB2YWx1ZXMgYXJlICR7XG4gICAgICAgIHZhbHVlc30gb3IgbnVsbC91bmRlZmluZWQuYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHZlcmlmeWluZyB0aGUgdHlwZXMgb2YgaW5wdXRzLlxuICpcbiAqIEVuc3VyZXMgdGhhdCB0aGUgZWxlbWVudHMgb2YgYHhgIGFyZSBhbGwgb2YgdHlwZSBgZXhwZWN0ZWRUeXBlYC5cbiAqIEFsc28gdmVyaWZpZXMgdGhhdCB0aGUgbGVuZ3RoIG9mIGB4YCBpcyB3aXRoaW4gYm91bmRzLlxuICpcbiAqIEBwYXJhbSB4IE9iamVjdCB0byB0ZXN0LlxuICogQHBhcmFtIGV4cGVjdGVkVHlwZSBUaGUgc3RyaW5nIGV4cGVjdGVkIHR5cGUgb2YgYWxsIG9mIHRoZSBlbGVtZW50cyBpbiB0aGVcbiAqIEFycmF5LlxuICogQHBhcmFtIG1pbkxlbmd0aCBSZXR1cm4gZmFsc2UgaWYgeC5sZW5ndGggaXMgbGVzcyB0aGFuIHRoaXMuXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIFJldHVybiBmYWxzZSBpZiB4Lmxlbmd0aCBpcyBncmVhdGVyIHRoYW4gdGhpcy5cbiAqIEByZXR1cm5zIHRydWUgaWYgYW5kIG9ubHkgaWYgYHhgIGlzIGFuIGBBcnJheTxleHBlY3RlZFR5cGU+YCB3aXRoXG4gKiBsZW5ndGggPj0gYG1pbkxlbmd0aGAgYW5kIDw9IGBtYXhMZW5ndGhgLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0FycmF5VHlwZUFuZExlbmd0aChcbiAgICB4OiBhbnksIGV4cGVjdGVkVHlwZTogc3RyaW5nLCBtaW5MZW5ndGggPSAwLFxuICAgIG1heExlbmd0aCA9IEluZmluaXR5KTogYm9vbGVhbiB7XG4gIGFzc2VydChtaW5MZW5ndGggPj0gMCk7XG4gIGFzc2VydChtYXhMZW5ndGggPj0gbWluTGVuZ3RoKTtcbiAgcmV0dXJuIChcbiAgICAgIEFycmF5LmlzQXJyYXkoeCkgJiYgeC5sZW5ndGggPj0gbWluTGVuZ3RoICYmIHgubGVuZ3RoIDw9IG1heExlbmd0aCAmJlxuICAgICAgeC5ldmVyeShlID0+IHR5cGVvZiBlID09PSBleHBlY3RlZFR5cGUpKTtcbn1cbi8vIHRzbGludDplbmFibGU6bm8tYW55XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgYSB2YWx1ZSBvciBhbiBhcnJheSBvZiB2YWx1ZSBhcmUgcG9zaXRpdmUgaW50ZWdlci5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGFzc2VydGVkIG9uLiBNYXkgYmUgYSBzaW5nbGUgbnVtYmVyIG9yIGFuIGFycmF5XG4gKiAgIG9mIG51bWJlcnMuXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSB2YWx1ZSwgdXNlZCB0byBtYWtlIHRoZSBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UG9zaXRpdmVJbnRlZ2VyKHZhbHVlOiBudW1iZXJ8bnVtYmVyW10sIG5hbWU6IHN0cmluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgdmFsdWUubGVuZ3RoID4gMCwgKCkgPT4gYCR7bmFtZX0gaXMgdW5leHBlY3RlZGx5IGFuIGVtcHR5IGFycmF5LmApO1xuICAgIHZhbHVlLmZvckVhY2goXG4gICAgICAgICh2LCBpKSA9PiBhc3NlcnRQb3NpdGl2ZUludGVnZXIodiwgYGVsZW1lbnQgJHtpICsgMX0gb2YgJHtuYW1lfWApKTtcbiAgfSBlbHNlIHtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgdmFsdWUgPiAwLFxuICAgICAgICAoKSA9PiBgRXhwZWN0ZWQgJHtuYW1lfSB0byBiZSBhIHBvc2l0aXZlIGludGVnZXIsIGJ1dCBnb3QgYCArXG4gICAgICAgICAgICBgJHtmb3JtYXRBc0ZyaWVuZGx5U3RyaW5nKHZhbHVlKX0uYCk7XG4gIH1cbn1cblxuLyoqXG4gKiBGb3JtYXQgYSB2YWx1ZSBpbnRvIGEgZGlzcGxheS1mcmllbmRseSwgaHVtYW4tcmVhZGFibGUgZmFzaGlvbi5cbiAqXG4gKiAtIGBudWxsYCBpcyBmb3JtYXR0ZWQgYXMgYCdudWxsJ2BcbiAqIC0gU3RyaW5ncyBhcmUgZm9ybWF0ZWQgd2l0aCBmbGFua2luZyBwYWlyIG9mIHF1b3Rlcy5cbiAqIC0gQXJyYXlzIGFyZSBmb3JtYXR0ZWQgd2l0aCBmbGFua2luZyBwYWlyIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGRpc3BsYXkuXG4gKiBAcmV0dXJuIEZvcm1hdHRlZCBzdHJpbmcuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBc0ZyaWVuZGx5U3RyaW5nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuICdbJyArIHZhbHVlLm1hcCh2ID0+IGZvcm1hdEFzRnJpZW5kbHlTdHJpbmcodikpLmpvaW4oJywnKSArICddJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGBcIiR7dmFsdWV9XCJgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIGBmMmAgKGRlY29yYXRvcikgd2hpY2ggd3JhcHMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uXG4gKiBgZmAuIGBmMmAgZ3VhcmFudGVlcyB0aGF0IGBmYCBjYW4gYmUgY2FsbGVkIGF0IG1vc3Qgb25jZVxuICogZXZlcnkgYHdhaXRNc2AgbXMuIElmIGBmMmAgaXMgY2FsbGVkIG1vcmUgb2Z0ZW4sIGl0IHdpbGwgcmV0dXJuXG4gKiB0aGUgbGFzdCByZXR1cm5lZCByZXN1bHQgb2YgYGZgLlxuICpcbiAqIEBwYXJhbSBmIFRoZSBvcmlnaW5hbCBmdW5jdGlvbiBgZmAgdG8gd3JhcC5cbiAqIEBwYXJhbSB3YWl0TXMgVGhlIHRpbWUgYmV0d2VlbiB0d28gY29uc2VjdXRpdmUgY2FsbHMgdG8gYGZgIGluIG1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2U8VD4oXG4gICAgZjogKC4uLmFyZ3M6IEFycmF5PHt9PikgPT4gVCwgd2FpdE1zOiBudW1iZXIsXG4gICAgbm93RnVuYz86IEZ1bmN0aW9uKTogKC4uLmFyZ3M6IEFycmF5PHt9PikgPT4gVCB7XG4gIGxldCBsYXN0VGltZSA9IG5vd0Z1bmMgIT0gbnVsbCA/IG5vd0Z1bmMoKSA6IHV0aWwubm93KCk7XG4gIGxldCBsYXN0UmVzdWx0OiBUO1xuICBjb25zdCBmMiA9ICguLi5hcmdzOiBBcnJheTx7fT4pID0+IHtcbiAgICBjb25zdCBub3cgPSBub3dGdW5jICE9IG51bGwgPyBub3dGdW5jKCkgOiB1dGlsLm5vdygpO1xuICAgIGlmIChub3cgLSBsYXN0VGltZSA8IHdhaXRNcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIGxhc3RUaW1lID0gbm93O1xuICAgIGxhc3RSZXN1bHQgPSBmKC4uLmFyZ3MpO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xuICByZXR1cm4gZjI7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVzYWJsZSBhY3RpdmF0aW9uIGdpdmVuIGEgbGF5ZXJzIGlkZW50aWZpZXIuXG4gKlxuICogQHBhcmFtIGFjdGl2YXRpb25OYW1lIFRoZSBsYXllcnMgaWRlbnRpZmllciBzdHJpbmcuXG4gKiBAcmV0dXJuIFRoZSBuYW1lIG9mIHRoZSBmdXNhYmxlIGFjdGl2YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBBY3RpdmF0aW9uVG9GdXNlZEtlcm5lbChhY3RpdmF0aW9uTmFtZTogc3RyaW5nKTpcbiAgICBmdXNlZC5BY3RpdmF0aW9uIHtcbiAgaWYgKGFjdGl2YXRpb25OYW1lID09PSAncmVsdScpIHtcbiAgICByZXR1cm4gJ3JlbHUnO1xuICB9XG4gIGlmIChhY3RpdmF0aW9uTmFtZSA9PT0gJ2xpbmVhcicpIHtcbiAgICByZXR1cm4gJ2xpbmVhcic7XG4gIH1cbiAgaWYgKGFjdGl2YXRpb25OYW1lID09PSAnZWx1Jykge1xuICAgIHJldHVybiAnZWx1JztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudHlwZSBQb3NzaWJsZVZhbHVlcyA9IEFycmF5PEFycmF5PGJvb2xlYW58c3RyaW5nfG51bWJlcj4+O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNhcnRlc2lhbiBwcm9kdWN0IG9mIHNldHMgb2YgdmFsdWVzLlxuICogVGhpcyB3b3JrcyB0aGUgc2FtZSBhcyBpdGVydG9vbHMucHJvZHVjdCBpbiBQeXRob24uXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBmaWx0ZXJzID0gWzEyOCwgMjU2LCA1MTJdXG4gKiBwYWRkaW5ncyA9IFsnc2FtZScsICd2YWxpZCddXG4gKlxuICogcHJvZHVjdCA9IFsgWzEyOCwgJ3NhbWUnXSwgWzEyOCwgJ3ZhbGlkJ10sIFsyNTYsICdzYW1lJ10sIFsyNTYsICd2YWxpZCddLFxuICogWzUxMiwgJ3NhbWUnXSwgWzUxMiwgJ3ZhbGlkJ11dXG4gKlxuICogQHBhcmFtIGFycmF5T2ZWYWx1ZXMgTGlzdC9hcnJheSBvZiB2YWx1ZXMuXG4gKiBAcmV0dXJuIFRoZSBjYXJ0ZXNpYW4gcHJvZHVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRlc2lhblByb2R1Y3RPZlZhbHVlcyguLi5hcnJheU9mVmFsdWVzOiBQb3NzaWJsZVZhbHVlcyk6XG4gICAgUG9zc2libGVWYWx1ZXMge1xuICBhc3NlcnQoYXJyYXlPZlZhbHVlcy5sZW5ndGggPiAwLCAnYXJyYXlPZlZhbHVlcyBpcyBlbXB0eScpO1xuXG4gIGZvciAoY29uc3QgdmFsdWVzIG9mIGFycmF5T2ZWYWx1ZXMpIHtcbiAgICBhc3NlcnQoQXJyYXkuaXNBcnJheSh2YWx1ZXMpLCAnb25lIG9mIHRoZSB2YWx1ZXMgaXMgbm90IGFuIGFycmF5Jyk7XG4gICAgYXNzZXJ0KHZhbHVlcy5sZW5ndGggPiAwLCAnb25lIG9mIHRoZSB2YWx1ZXMgaXMgZW1wdHknKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheU9mVmFsdWVzLnJlZHVjZSgocHJvZHVjdHMsIHZhbHVlcykgPT4ge1xuICAgIGlmIChwcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IFt2YWx1ZV0pO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNcbiAgICAgICAgLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJldlZhbHVlKSA9PiBbLi4ucHJldlZhbHVlLCB2YWx1ZV0pO1xuICAgICAgICB9KVxuICAgICAgICAucmVkdWNlKChmbGF0dGVuZWRQcm9kdWN0LCB1bmZsYXR0ZW5lZFByb2R1Y3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gZmxhdHRlbmVkUHJvZHVjdC5jb25jYXQodW5mbGF0dGVuZWRQcm9kdWN0KTtcbiAgICAgICAgfSwgW10pO1xuICB9LCBbXSBhcyBQb3NzaWJsZVZhbHVlcyk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /**
 * Math utility functions.
 *
 * This file contains some frequently used math function that operates on
 * number[] or Float32Array and return a number. Many of these functions are
 * not-so-thick wrappers around TF.js Core functions. But they offer the
 * convenience of
 * 1) not having to convert the inputs into Tensors,
 * 2) not having to convert the returned Tensors to numbers.
 */ __turbopack_context__.s([
    "arrayProd",
    ()=>arrayProd,
    "isInteger",
    ()=>isInteger,
    "max",
    ()=>max,
    "mean",
    ()=>mean,
    "median",
    ()=>median,
    "min",
    ()=>min,
    "range",
    ()=>range,
    "sum",
    ()=>sum,
    "variance",
    ()=>variance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
;
function isInteger(x) {
    return x === parseInt(x.toString(), 10);
}
function arrayProd(array, begin, end) {
    if (begin == null) {
        begin = 0;
    }
    if (end == null) {
        end = array.length;
    }
    let prod = 1;
    for(let i = begin; i < end; ++i){
        prod *= array[i];
    }
    return prod;
}
function min(array) {
    // same behavior as tf.min()
    if (array.length === 0) {
        return Number.NaN;
    }
    let min = Number.POSITIVE_INFINITY;
    for(let i = 0; i < array.length; i++){
        const value = array[i];
        if (value < min) {
            min = value;
        }
    }
    return min;
}
function max(array) {
    // same behavior as tf.max()
    if (array.length === 0) {
        return Number.NaN;
    }
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < array.length; i++){
        const value = array[i];
        if (value > max) {
            max = value;
        }
    }
    return max;
}
function sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const value = array[i];
        sum += value;
    }
    return sum;
}
function mean(array) {
    return sum(array) / array.length;
}
function variance(array) {
    const meanValue = mean(array);
    const demeaned = array.map((value)=>value - meanValue);
    let sumSquare = 0;
    for(let i = 0; i < demeaned.length; i++){
        const value = demeaned[i];
        sumSquare += value * value;
    }
    return sumSquare / array.length;
}
function median(array) {
    const arraySorted = array.slice().sort((a, b)=>a - b);
    const lowIdx = Math.floor((arraySorted.length - 1) / 2);
    const highIdx = Math.ceil((arraySorted.length - 1) / 2);
    if (lowIdx === highIdx) {
        return arraySorted[lowIdx];
    }
    return (arraySorted[lowIdx] + arraySorted[highIdx]) / 2;
}
function range(begin, end) {
    if (end < begin) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`end (${end}) < begin (${begin}) is forbidden.`);
    }
    const out = [];
    for(let i = begin; i < end; ++i){
        out.push(i);
    }
    return out;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy91dGlscy9tYXRoX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7Ozs7Ozs7OztHQVNHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUlyQzs7R0FFRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsQ0FBUztJQUNqQyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUNyQixLQUEwQixFQUFFLEtBQWMsRUFBRSxHQUFZO0lBQzFELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDZixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUNwQjtJQUVELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDaEMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQTRCO0lBQzlDLDRCQUE0QjtJQUM1QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNuQjtJQUNELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUNu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TyxFQUFFO1FBQ3RCLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVCO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYSxFQUFFLEdBQVc7SUFDOUMsSUFBSSxHQUFHLEdBQUcsS0FBSyxFQUFFO1FBQ2YsTUFBTSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEdBQUcsY0FBYyxLQUFLLGlCQUFpQixDQUFDLENBQUM7S0FDdkU7SUFDRCxNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIE1hdGggdXRpbGl0eSBmdW5jdGlvbnMuXG4gKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHNvbWUgZnJlcXVlbnRseSB1c2VkIG1hdGggZnVuY3Rpb24gdGhhdCBvcGVyYXRlcyBvblxuICogbnVtYmVyW10gb3IgRmxvYXQzMkFycmF5IGFuZCByZXR1cm4gYSBudW1iZXIuIE1hbnkgb2YgdGhlc2UgZnVuY3Rpb25zIGFyZVxuICogbm90LXNvLXRoaWNrIHdyYXBwZXJzIGFyb3VuZCBURi5qcyBDb3JlIGZ1bmN0aW9ucy4gQnV0IHRoZXkgb2ZmZXIgdGhlXG4gKiBjb252ZW5pZW5jZSBvZlxuICogMSkgbm90IGhhdmluZyB0byBjb252ZXJ0IHRoZSBpbnB1dHMgaW50byBUZW5zb3JzLFxuICogMikgbm90IGhhdmluZyB0byBjb252ZXJ0IHRoZSByZXR1cm5lZCBUZW5zb3JzIHRvIG51bWJlcnMuXG4gKi9cblxuaW1wb3J0IHtWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuXG5leHBvcnQgdHlwZSBBcnJheVR5cGVzID0gVWludDhBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSBudW1iZXIgaXMgYW4gaW50ZWdlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHggPT09IHBhcnNlSW50KHgudG9TdHJpbmcoKSwgMTApO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcHJvZHVjdCBvZiBhbiBhcnJheSBvZiBudW1iZXJzLlxuICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBjYWxjdWxhdGUgdGhlIHByb2R1Y3Qgb3Zlci5cbiAqIEBwYXJhbSBiZWdpbiBCZWdpbm5pbmcgaW5kZXgsIGluY2x1c2l2ZS5cbiAqIEBwYXJhbSBlbmQgRW5kaW5nIGluZGV4LCBleGNsdXNpdmUuXG4gKiBAcmV0dXJuIFRoZSBwcm9kdWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlQcm9kKFxuICAgIGFycmF5OiBudW1iZXJbXXxBcnJheVR5cGVzLCBiZWdpbj86IG51bWJlciwgZW5kPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKGJlZ2luID09IG51bGwpIHtcbiAgICBiZWdpbiA9IDA7XG4gIH1cbiAgaWYgKGVuZCA9PSBudWxsKSB7XG4gICAgZW5kID0gYXJyYXkubGVuZ3RoO1xuICB9XG5cbiAgbGV0IHByb2QgPSAxO1xuICBmb3IgKGxldCBpID0gYmVnaW47IGkgPCBlbmQ7ICsraSkge1xuICAgIHByb2QgKj0gYXJyYXlbaV07XG4gIH1cbiAgcmV0dXJuIHByb2Q7XG59XG5cbi8qKlxuICogQ29tcHV0ZSBtaW5pbXVtIHZhbHVlLlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJuIG1pbmltdW0gdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW4oYXJyYXk6IG51bWJlcltdfEZsb2F0MzJBcnJheSk6IG51bWJlciB7XG4gIC8vIHNhbWUgYmVoYXZpb3IgYXMgdGYubWluKClcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBOdW1iZXIuTmFOO1xuICB9XG4gIGxldCBtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFycmF5W2ldO1xuICAgIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgbWluID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW47XG59XG5cbi8qKlxuICogQ29tcHV0ZSBtYXhpbXVtIHZhbHVlLlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJuIG1heGltdW0gdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heChhcnJheTogbnVtYmVyW118RmxvYXQzMkFycmF5KTogbnVtYmVyIHtcbiAgLy8gc2FtZSBiZWhhdmlvciBhcyB0Zi5tYXgoKVxuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIE51bWJlci5OYU47XG4gIH1cbiAgbGV0IG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbaV07XG4gICAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICBtYXggPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cblxuLyoqXG4gKiBDb21wdXRlIHN1bSBvZiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHJldHVybiBUaGUgc3VtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VtKGFycmF5OiBudW1iZXJbXXxGbG9hdDMyQXJyYXkpOiBudW1iZXIge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbaV07XG4gICAgc3VtICs9IHZhbHVlO1xuICB9XG4gIHJldHVybiBzdW07XG59XG5cbi8qKlxuICogQ29tcHV0ZSBtZWFuIG9mIGFycmF5LlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJuIFRoZSBtZWFuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhbihhcnJheTogbnVtYmVyW118RmxvYXQzMkFycmF5KTogbnVtYmVyIHtcbiAgcmV0dXJuIHN1bShhcnJheSkgLyBhcnJheS5sZW5ndGg7XG59XG5cbi8qKlxuICogQ29tcHV0ZSB2YXJpYW5jZSBvZiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheVxuICogQHJldHVybiBUaGUgdmFyaWFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYW5jZShhcnJheTogbnVtYmVyW118RmxvYXQzMkFycmF5KTogbnVtYmVyIHtcbiAgY29uc3QgbWVhblZhbHVlID0gbWVhbihhcnJheSk7XG4gIGNvbnN0IGRlbWVhbmVkID0gYXJyYXkubWFwKCh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZSAtIG1lYW5WYWx1ZSk7XG4gIGxldCBzdW1TcXVhcmUgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbWVhbmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBkZW1lYW5lZFtpXTtcbiAgICBzdW1TcXVhcmUgKz0gdmFsdWUgKiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gc3VtU3F1YXJlIC8gYXJyYXkubGVuZ3RoO1xufVxuXG4vKipcbiAqIENvbXB1dGUgbWVkaWFuIG9mIGFycmF5LlxuICogQHBhcmFtIGFycmF5XG4gKiBAcmV0dXJuIFRoZSBtZWRpYW4gdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYW4oYXJyYXk6IG51bWJlcltdfEZsb2F0MzJBcnJheSk6IG51bWJlciB7XG4gIGNvbnN0IGFycmF5U29ydGVkID0gYXJyYXkuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGNvbnN0IGxvd0lkeCA9IE1hdGguZmxvb3IoKGFycmF5U29ydGVkLmxlbmd0aCAtIDEpIC8gMik7XG4gIGNvbnN0IGhpZ2hJZHggPSBNYXRoLmNlaWwoKGFycmF5U29ydGVkLmxlbmd0aCAtIDEpIC8gMik7XG4gIGlmIChsb3dJZHggPT09IGhpZ2hJZHgpIHtcbiAgICByZXR1cm4gYXJyYXlTb3J0ZWRbbG93SWR4XTtcbiAgfVxuICByZXR1cm4gKGFycmF5U29ydGVkW2xvd0lkeF0gKyBhcnJheVNvcnRlZFtoaWdoSWR4XSkgLyAyO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGFycmF5IG9mIGludGVnZXJzIGluIFtiZWdpbiwgZW5kKS5cbiAqIEBwYXJhbSBiZWdpbiBCZWdpbm5pbmcgaW50ZWdlciwgaW5jbHVzaXZlLlxuICogQHBhcmFtIGVuZCBFbmRpbmcgaW50ZWdlciwgZXhjbHVzaXZlLlxuICogQHJldHVybnMgUmFuZ2UgYXJyYXkuXG4gKiBAdGhyb3dzIFZhbHVlRXJyb3IsIGlmZiBgZW5kYCA8IGBiZWdpbmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgaWYgKGVuZCA8IGJlZ2luKSB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYGVuZCAoJHtlbmR9KSA8IGJlZ2luICgke2JlZ2lufSkgaXMgZm9yYmlkZGVuLmApO1xuICB9XG4gIGNvbnN0IG91dDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IGJlZ2luOyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQucHVzaChpKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "getExactlyOneShape",
    ()=>getExactlyOneShape,
    "getExactlyOneTensor",
    ()=>getExactlyOneTensor,
    "isArrayOfShapes",
    ()=>isArrayOfShapes,
    "normalizeShapeList",
    ()=>normalizeShapeList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
;
function isArrayOfShapes(x) {
    return Array.isArray(x) && Array.isArray(x[0]);
}
function normalizeShapeList(x) {
    if (x.length === 0) {
        return [];
    }
    if (!Array.isArray(x[0])) {
        return [
            x
        ];
    }
    return x;
}
function getExactlyOneTensor(xs) {
    let x;
    if (Array.isArray(xs)) {
        if (xs.length !== 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Expected Tensor length to be 1; got ${xs.length}`);
        }
        x = xs[0];
    } else {
        x = xs;
    }
    return x;
}
function getExactlyOneShape(shapes) {
    if (Array.isArray(shapes) && Array.isArray(shapes[0])) {
        if (shapes.length === 1) {
            shapes = shapes;
            return shapes[0];
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Expected exactly 1 Shape; got ${shapes.length}`);
        }
    } else {
        return shapes;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvdXRpbHMvdHlwZXNfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFLSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRXJDLGdCQUFnQjtBQUVoQjs7R0FFRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsQ0FBZ0I7SUFDOUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLENBQWdCO0lBQ2pELElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbEIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQVksQ0FBQztLQUN2QjtJQUNELE9BQU8sQ0FBWSxDQUFDO0FBQ3RCLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxFQUFtQjtJQUNyRCxJQUFJLENBQVMsQ0FBQztJQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNyQixJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE1BQU0sSUFBSSxVQUFVLENBQUMsdUNBQXVDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNYO1NBQU07UUFDTCxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ1I7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBcUI7SUFDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDckQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLEdBQUcsTUFBaUIsQ0FBQztZQUMzQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsTUFBTSxJQUFJLFVBQVUsQ0FBQyxpQ0FBaUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDeEU7S0FDRjtTQUFNO1FBQ0wsT0FBTyxNQUFlLENBQUM7S0FDeEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyogT3JpZ2luYWwgc291cmNlOiB1dGlscy9nZW5lcmljX3V0aWxzLnB5ICovXG5cbmltcG9ydCB7VGVuc29yfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG4vLyB0c2xpbnQ6ZW5hYmxlXG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGlucHV0IGlzIGFuIEFycmF5IG9mIFNoYXBlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlNoYXBlcyh4OiBTaGFwZXxTaGFwZVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHgpICYmIEFycmF5LmlzQXJyYXkoeFswXSk7XG59XG5cbi8qKlxuICogU3BlY2lhbCBjYXNlIG9mIG5vcm1hbGl6aW5nIHNoYXBlcyB0byBsaXN0cy5cbiAqXG4gKiBAcGFyYW0geCBBIHNoYXBlIG9yIGxpc3Qgb2Ygc2hhcGVzIHRvIG5vcm1hbGl6ZSBpbnRvIGEgbGlzdCBvZiBTaGFwZXMuXG4gKiBAcmV0dXJuIEEgbGlzdCBvZiBTaGFwZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTaGFwZUxpc3QoeDogU2hhcGV8U2hhcGVbXSk6IFNoYXBlW10ge1xuICBpZiAoeC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHhbMF0pKSB7XG4gICAgcmV0dXJuIFt4XSBhcyBTaGFwZVtdO1xuICB9XG4gIHJldHVybiB4IGFzIFNoYXBlW107XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIG9idGFpbiBleGFjdGx5IG9uZSBUZW5zb3IuXG4gKiBAcGFyYW0geHM6IEEgc2luZ2xlIGB0Zi5UZW5zb3JgIG9yIGFuIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzLlxuICogQHJldHVybiBBIHNpbmdsZSBgdGYuVGVuc29yYC4gSWYgYHhzYCBpcyBhbiBgQXJyYXlgLCByZXR1cm4gdGhlIGZpcnN0IG9uZS5cbiAqIEB0aHJvd3MgVmFsdWVFcnJvcjogSWYgYHhzYCBpcyBhbiBgQXJyYXlgIGFuZCBpdHMgbGVuZ3RoIGlzIG5vdCAxLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhhY3RseU9uZVRlbnNvcih4czogVGVuc29yfFRlbnNvcltdKTogVGVuc29yIHtcbiAgbGV0IHg6IFRlbnNvcjtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeHMpKSB7XG4gICAgaWYgKHhzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYEV4cGVjdGVkIFRlbnNvciBsZW5ndGggdG8gYmUgMTsgZ290ICR7eHMubGVuZ3RofWApO1xuICAgIH1cbiAgICB4ID0geHNbMF07XG4gIH0gZWxzZSB7XG4gICAgeCA9IHhzO1xuICB9XG4gIHJldHVybiB4O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBvYnRhaW4gZXhhY3RseSBvbiBpbnN0YW5jZSBvZiBTaGFwZS5cbiAqXG4gKiBAcGFyYW0gc2hhcGVzIElucHV0IHNpbmdsZSBgU2hhcGVgIG9yIEFycmF5IG9mIGBTaGFwZWBzLlxuICogQHJldHVybnMgSWYgaW5wdXQgaXMgYSBzaW5nbGUgYFNoYXBlYCwgcmV0dXJuIGl0IHVuY2hhbmdlZC4gSWYgdGhlIGlucHV0IGlzXG4gKiAgIGFuIGBBcnJheWAgY29udGFpbmluZyBleGFjdGx5IG9uZSBpbnN0YW5jZSBvZiBgU2hhcGVgLCByZXR1cm4gdGhlIGluc3RhbmNlLlxuICogICBPdGhlcndpc2UsIHRocm93IGEgYFZhbHVlRXJyb3JgLlxuICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBpbnB1dCBpcyBhbiBgQXJyYXlgIG9mIGBTaGFwZWBzLCBhbmQgaXRzIGxlbmd0aCBpcyBub3RcbiAqICAgMS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV4YWN0bHlPbmVTaGFwZShzaGFwZXM6IFNoYXBlfFNoYXBlW10pOiBTaGFwZSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNoYXBlcykgJiYgQXJyYXkuaXNBcnJheShzaGFwZXNbMF0pKSB7XG4gICAgaWYgKHNoYXBlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNoYXBlcyA9IHNoYXBlcyBhcyBTaGFwZVtdO1xuICAgICAgcmV0dXJuIHNoYXBlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYEV4cGVjdGVkIGV4YWN0bHkgMSBTaGFwZTsgZ290ICR7c2hhcGVzLmxlbmd0aH1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNoYXBlcyBhcyBTaGFwZTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/variable_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /**
 * Count the elements in an Array of LayerVariables.
 *
 * @param weights: The LayerVariables of which the constituent numbers are to
 *   be counted.
 * @returns A count of the elements in all the LayerVariables
 */ __turbopack_context__.s([
    "countParamsInWeights",
    ()=>countParamsInWeights
]);
function countParamsInWeights(weights) {
    let count = 0;
    for (const weight of weights){
        if (weight.shape.length === 0) {
            count += 1;
        } else {
            count += weight.shape.reduce((a, b)=>a * b);
        }
    }
    return count;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvdXRpbHMvdmFyaWFibGVfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFJSDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsT0FBd0I7SUFDM0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNaO2FBQU07WUFDTCxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0M7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7TGF5ZXJWYXJpYWJsZX0gZnJvbSAnLi4vdmFyaWFibGVzJztcblxuLyoqXG4gKiBDb3VudCB0aGUgZWxlbWVudHMgaW4gYW4gQXJyYXkgb2YgTGF5ZXJWYXJpYWJsZXMuXG4gKlxuICogQHBhcmFtIHdlaWdodHM6IFRoZSBMYXllclZhcmlhYmxlcyBvZiB3aGljaCB0aGUgY29uc3RpdHVlbnQgbnVtYmVycyBhcmUgdG9cbiAqICAgYmUgY291bnRlZC5cbiAqIEByZXR1cm5zIEEgY291bnQgb2YgdGhlIGVsZW1lbnRzIGluIGFsbCB0aGUgTGF5ZXJWYXJpYWJsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvdW50UGFyYW1zSW5XZWlnaHRzKHdlaWdodHM6IExheWVyVmFyaWFibGVbXSk6IG51bWJlciB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAoY29uc3Qgd2VpZ2h0IG9mIHdlaWdodHMpIHtcbiAgICBpZiAod2VpZ2h0LnNoYXBlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgKz0gd2VpZ2h0LnNoYXBlLnJlZHVjZSgoYSwgYikgPT4gYSAqIGIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/layer_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "printSummary",
    ()=>printSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$variable_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/variable_utils.js [app-ssr] (ecmascript)");
;
function printSummary(model, lineLength, positions, // tslint:disable-next-line:no-any
printFn = console.log) {
    const sequentialLike = isModelSequentialLike(model);
    // Header names for different log elements.
    const toDisplay = [
        'Layer (type)',
        'Input Shape',
        'Output shape',
        'Param #'
    ];
    if (sequentialLike) {
        lineLength = lineLength || 90;
        positions = positions || [
            0.32,
            0.61,
            0.89,
            1
        ];
    } else {
        lineLength = lineLength || 115;
        positions = positions || [
            0.24,
            0.48,
            0.70,
            0.80,
            1
        ];
    // Header names for different log elements.
    }
    if (positions[positions.length - 1] <= 1) {
        // `positions` is relative. Convert it to absolute positioning.
        positions = positions.map((p)=>Math.floor(lineLength * p));
    }
    let relevantNodes;
    if (!sequentialLike) {
        toDisplay.push('Receives inputs');
        relevantNodes = [];
        for(const depth in model.nodesByDepth){
            relevantNodes.push(...model.nodesByDepth[depth]);
        }
    }
    printFn('_'.repeat(lineLength));
    printRow(toDisplay, positions, printFn);
    printFn('='.repeat(lineLength));
    const layers = model.layers;
    for(let i = 0; i < layers.length; ++i){
        if (sequentialLike) {
            printLayerSummary(layers[i], positions, printFn);
        } else {
            printLayerSummaryWithConnections(layers[i], positions, relevantNodes, printFn);
        }
        printFn((i === layers.length - 1 ? '=' : '_').repeat(lineLength));
    }
    // tslint:disable-next-line:no-any
    model.checkTrainableWeightsConsistency();
    const trainableCount = countTrainableParams(model);
    const nonTrainableCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$variable_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countParamsInWeights"])(model.nonTrainableWeights);
    printFn(`Total params: ${trainableCount + nonTrainableCount}`);
    printFn(`Trainable params: ${trainableCount}`);
    printFn(`Non-trainable params: ${nonTrainableCount}`);
    printFn('_'.repeat(lineLength));
}
function countTrainableParams(model) {
    let trainableCount;
    // tslint:disable:no-any
    if (model.collectedTrainableWeights != null) {
        trainableCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$variable_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countParamsInWeights"])(model.collectedTrainableWeights);
    } else {
        trainableCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$variable_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countParamsInWeights"])(model.trainableWeights);
    }
    // tslint:enable:no-any
    return trainableCount;
}
function isModelSequentialLike(model) {
    let sequentialLike = true;
    const nodesByDepth = [];
    const nodes = [];
    for(const depth in model.nodesByDepth){
        nodesByDepth.push(model.nodesByDepth[depth]);
    }
    for (const depthNodes of nodesByDepth){
        if (depthNodes.length > 1 || depthNodes.length === 1 && depthNodes[0].inboundLayers.length > 1) {
            sequentialLike = false;
            break;
        }
        nodes.push(...depthNodes);
    }
    if (sequentialLike) {
        // Search for shared layers.
        for (const layer of model.layers){
            let flag = false;
            for (const node of layer.inboundNodes){
                if (nodes.indexOf(node) !== -1) {
                    if (flag) {
                        sequentialLike = false;
                        break;
                    } else {
                        flag = true;
                    }
                }
            }
            if (!sequentialLike) {
                break;
            }
        }
    }
    return sequentialLike;
}
function printRow(fields, positions, // tslint:disable-next-line:no-any
printFn = console.log) {
    let line = '';
    for(let i = 0; i < fields.length; ++i){
        if (i > 0) {
            line = line.slice(0, line.length - 1) + ' ';
        }
        line += fields[i];
        line = line.slice(0, positions[i]);
        line += ' '.repeat(positions[i] - line.length);
    }
    printFn(line);
}
/**
 * Prints a summary for a single Layer, without connectivity information.
 *
 * @param layer: Layer instance to print.
 */ function printLayerSummary(layer, positions, // tslint:disable-next-line:no-any
printFn) {
    let outputShape;
    let inputShape;
    try {
        inputShape = layer.inboundNodes.map((x)=>JSON.stringify(x.inputShapes)).join(',');
    } catch (err) {
        inputShape = 'multiple';
    }
    try {
        outputShape = JSON.stringify(layer.outputShape);
    } catch (err) {
        outputShape = 'multiple';
    }
    const name = layer.name;
    const className = layer.getClassName();
    const fields = [
        `${name} (${className})`,
        inputShape,
        outputShape,
        layer.countParams().toString()
    ];
    printRow(fields, positions, printFn);
}
/**
 * Prints a summary for a single Layer, with connectivity information.
 */ function printLayerSummaryWithConnections(layer, positions, relevantNodes, // tslint:disable-next-line:no-any
printFn) {
    let outputShape;
    let inputShape;
    try {
        inputShape = layer.inboundNodes.map((x)=>JSON.stringify(x.inputShapes)).join(',');
    } catch (err) {
        inputShape = 'multiple';
    }
    try {
        outputShape = JSON.stringify(layer.outputShape);
    } catch (err) {
        outputShape = 'multiple';
    }
    const connections = [];
    for (const node of layer.inboundNodes){
        if (relevantNodes != null && relevantNodes.length > 0 && relevantNodes.indexOf(node) === -1) {
            continue;
        }
        for(let i = 0; i < node.inboundLayers.length; ++i){
            const inboundLayer = node.inboundLayers[i].name;
            const inboundLayerIndex = node.nodeIndices[i];
            const inboundTensorIndex = node.tensorIndices[i];
            connections.push(`${inboundLayer}[${inboundLayerIndex}][${inboundTensorIndex}]`);
        }
    }
    const name = layer.name;
    const className = layer.getClassName();
    const firstConnection = connections.length === 0 ? '' : connections[0];
    const fields = [
        `${name} (${className})`,
        inputShape,
        outputShape,
        layer.countParams().toString(),
        firstConnection
    ];
    printRow(fields, positions, printFn);
    for(let i = 1; i < connections.length; ++i){
        printRow([
            '',
            '',
            '',
            '',
            connections[i]
        ], positions, printFn);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvdXRpbHMvbGF5ZXJfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFJSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQ3hCLEtBQWdCLEVBQUUsVUFBbUIsRUFBRSxTQUFvQjtBQUMzRCxrQ0FBa0M7QUFDbEMsVUFDSSxPQUFPLENBQUMsR0FBRztJQUNqQixNQUFNLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwRCwyQ0FBMkM7SUFDM0MsTUFBTSxTQUFTLEdBQWEsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RixJQUFJLGNBQWMsRUFBRTtRQUNsQixVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUM5QixTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7U0FBTTtRQUNMLFVBQVUsR0FBRyxVQUFVLElBQUksR0FBRyxDQUFDO1FBQy9CLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckQsMkNBQTJDO0tBQzVDO0lBRUQsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEMsK0RBQStEO1FBQy9ELFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdB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ICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uL2VuZ2luZS9jb250YWluZXInO1xuaW1wb3J0IHtMYXllciwgTm9kZX0gZnJvbSAnLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7Y291bnRQYXJhbXNJbldlaWdodHN9IGZyb20gJy4vdmFyaWFibGVfdXRpbHMnO1xuXG4vKipcbiAqIFByaW50IHRoZSBzdW1tYXJ5IG9mIGEgTGF5ZXJzTW9kZWwgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBtb2RlbCB0Zi5MYXllcnNNb2RlbCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBsaW5lTGVuZ3RoIFRvdGFsIGxlbmd0aCBvZiBwcmludGVkIGxpbmVzLiBTZXQgdGhpcyB0byBhZGFwdCB0byB0aGVcbiAqICAgZGlzcGxheSB0byBkaWZmZXJlbnQgdGVybWluYWwgb3IgY29uc29sZSBzaXplcy5cbiAqIEBwYXJhbSBwb3NpdGlvbnMgUmVsYXRpdmUgb3IgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGxvZyBlbGVtZW50cyBpbiBlYWNoXG4gKiAgIGxpbmUuIEVhY2ggbnVtYmVyIGNvcnJlc3BvbmRzIHRvIHJpZ2h0LW1vc3QgKGkuZS4sIGVuZGluZykgcG9zaXRpb24gb2YgYVxuICogICBjb2x1bW4uXG4gKiAgIElmIG5vdCBwcm92aWRlZCwgZGVmYXVsdHMgdG8gYFswLjQ1LCAwLjg1LCAxXWAgZm9yIHNlcXVlbnRpYWwtbGlrZVxuICogICBtb2RlbHMgYW5kIGBbMC4zMywgMC41NSwgMC42NywgMV1gIGZvciBub24tc2VxdWVudGlhbCBsaWtlIG1vZGVscy5cbiAqIEBwYXJhbSBwcmludEZuIFByaW50IGZ1bmN0aW9uIHRvIHVzZS5cbiAqICAgSXQgd2lsbCBiZSBjYWxsZWQgb24gZWFjaCBsaW5lIG9mIHRoZSBzdW1tYXJ5LiBZb3UgY2FuIHByb3ZpZGUgYSBjdXN0b21cbiAqICAgZnVuY3Rpb24gaW4gb3JkZXIgdG8gY2FwdHVyZSB0aGUgc3RyaW5nIHN1bW1hcnkuIERlZmF1bHRzIHRvIGBjb25zb2xlLmxvZ2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmludFN1bW1hcnkoXG4gICAgbW9kZWw6IENvbnRhaW5lciwgbGluZUxlbmd0aD86IG51bWJlciwgcG9zaXRpb25zPzogbnVtYmVyW10sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaW50Rm46IChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHZvaWQgPVxuICAgICAgICBjb25zb2xlLmxvZyk6IHZvaWQge1xuICBjb25zdCBzZXF1ZW50aWFsTGlrZSA9IGlzTW9kZWxTZXF1ZW50aWFsTGlrZShtb2RlbCk7XG5cbiAgLy8gSGVhZGVyIG5hbWVzIGZvciBkaWZmZXJlbnQgbG9nIGVsZW1lbnRzLlxuICBjb25zdCB0b0Rpc3BsYXk6IHN0cmluZ1tdID0gWydMYXllciAodHlwZSknLCAnSW5wdXQgU2hhcGUnLCAnT3V0cHV0IHNoYXBlJywgJ1BhcmFtICMnXTtcbiAgaWYgKHNlcXVlbnRpYWxMaWtlKSB7XG4gICAgbGluZUxlbmd0aCA9IGxpbmVMZW5ndGggfHwgOTA7XG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zIHx8IFswLjMyLCAwLjYxLCAwLjg5LCAxXTtcbiAgfSBlbHNlIHtcbiAgICBsaW5lTGVuZ3RoID0gbGluZUxlbmd0aCB8fCAxMTU7XG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zIHx8IFswLjI0LCAwLjQ4LCAwLjcwLCAwLjgwLCAxXTtcbiAgICAvLyBIZWFkZXIgbmFtZXMgZm9yIGRpZmZlcmVudCBsb2cgZWxlbWVudHMuXG4gIH1cblxuICBpZiAocG9zaXRpb25zW3Bvc2l0aW9ucy5sZW5ndGggLSAxXSA8PSAxKSB7XG4gICAgLy8gYHBvc2l0aW9uc2AgaXMgcmVsYXRpdmUuIENvbnZlcnQgaXQgdG8gYWJzb2x1dGUgcG9zaXRpb25pbmcuXG4gICAgcG9zaXRpb25zID0gcG9zaXRpb25zLm1hcChwID0+IE1hdGguZmxvb3IobGluZUxlbmd0aCAqIHApKTtcbiAgfVxuXG4gIGxldCByZWxldmFudE5vZGVzOiBOb2RlW107XG4gIGlmICghc2VxdWVudGlhbExpa2UpIHtcbiAgICB0b0Rpc3BsYXkucHVzaCgnUmVjZWl2ZXMgaW5wdXRzJyk7XG4gICAgcmVsZXZhbnROb2RlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgZGVwdGggaW4gbW9kZWwubm9kZXNCeURlcHRoKSB7XG4gICAgICByZWxldmFudE5vZGVzLnB1c2goLi4ubW9kZWwubm9kZXNCeURlcHRoW2RlcHRoXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpbnRGbignXycucmVwZWF0KGxpbmVMZW5ndGgpKTtcbiAgcHJpbnRSb3codG9EaXNwbGF5LCBwb3NpdGlvbnMsIHByaW50Rm4pO1xuICBwcmludEZuKCc9Jy5yZXBlYXQobGluZUxlbmd0aCkpO1xuXG4gIGNvbnN0IGxheWVycyA9IG1vZGVsLmxheWVycztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoc2VxdWVudGlhbExpa2UpIHtcbiAgICAgIHByaW50TGF5ZXJTdW1tYXJ5KGxheWVyc1tpXSwgcG9zaXRpb25zLCBwcmludEZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbnRMYXllclN1bW1hcnlXaXRoQ29ubmVjdGlvbnMoXG4gICAgICAgICAgbGF5ZXJzW2ldLCBwb3NpdGlvbnMsIHJlbGV2YW50Tm9kZXMsIHByaW50Rm4pO1xuICAgIH1cbiAgICBwcmludEZuKChpID09PSBsYXllcnMubGVuZ3RoIC0gMSA/ICc9JyA6ICdfJykucmVwZWF0KGxpbmVMZW5ndGgpKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgKG1vZGVsIGFzIGFueSkuY2hlY2tUcmFpbmFibGVXZWlnaHRzQ29uc2lzdGVuY3koKTtcblxuICBjb25zdCB0cmFpbmFibGVDb3VudCA9IGNvdW50VHJhaW5hYmxlUGFyYW1zKG1vZGVsKTtcbiAgY29uc3Qgbm9uVHJhaW5hYmxlQ291bnQgPSBjb3VudFBhcmFtc0luV2VpZ2h0cyhtb2RlbC5ub25UcmFpbmFibGVXZWlnaHRzKTtcblxuICBwcmludEZuKGBUb3RhbCBwYXJhbXM6ICR7dHJhaW5hYmxlQ291bnQgKyBub25UcmFpbmFibGVDb3VudH1gKTtcbiAgcHJpbnRGbihgVHJhaW5hYmxlIHBhcmFtczogJHt0cmFpbmFibGVDb3VudH1gKTtcbiAgcHJpbnRGbihgTm9uLXRyYWluYWJsZSBwYXJhbXM6ICR7bm9uVHJhaW5hYmxlQ291bnR9YCk7XG4gIHByaW50Rm4oJ18nLnJlcGVhdChsaW5lTGVuZ3RoKSk7XG59XG5cbmZ1bmN0aW9uIGNvdW50VHJhaW5hYmxlUGFyYW1zKG1vZGVsOiBDb250YWluZXIpOiBudW1iZXIge1xuICBsZXQgdHJhaW5hYmxlQ291bnQ6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGlmICgobW9kZWwgYXMgYW55KS5jb2xsZWN0ZWRUcmFpbmFibGVXZWlnaHRzICE9IG51bGwpIHtcbiAgICB0cmFpbmFibGVDb3VudCA9XG4gICAgICAgIGNvdW50UGFyYW1zSW5XZWlnaHRzKChtb2RlbCBhcyBhbnkpLmNvbGxlY3RlZFRyYWluYWJsZVdlaWdodHMpO1xuICB9IGVsc2Uge1xuICAgIHRyYWluYWJsZUNvdW50ID0gY291bnRQYXJhbXNJbldlaWdodHMobW9kZWwudHJhaW5hYmxlV2VpZ2h0cyk7XG4gIH1cbiAgLy8gdHNsaW50OmVuYWJsZTpuby1hbnlcbiAgcmV0dXJuIHRyYWluYWJsZUNvdW50O1xufVxuXG5mdW5jdGlvbiBpc01vZGVsU2VxdWVudGlhbExpa2UobW9kZWw6IENvbnRhaW5lcik6IGJvb2xlYW4ge1xuICBsZXQgc2VxdWVudGlhbExpa2UgPSB0cnVlO1xuICBjb25zdCBub2Rlc0J5RGVwdGg6IE5vZGVbXVtdID0gW107XG4gIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcbiAgZm9yIChjb25zdCBkZXB0aCBpbiBtb2RlbC5ub2Rlc0J5RGVwdGgpIHtcbiAgICBub2Rlc0J5RGVwdGgucHVzaChtb2RlbC5ub2Rlc0J5RGVwdGhbZGVwdGhdKTtcbiAgfVxuICBmb3IgKGNvbnN0IGRlcHRoTm9kZXMgb2Ygbm9kZXNCeURlcHRoKSB7XG4gICAgaWYgKGRlcHRoTm9kZXMubGVuZ3RoID4gMSB8fFxuICAgICAgICBkZXB0aE5vZGVzLmxlbmd0aCA9PT0gMSAmJiBkZXB0aE5vZGVzWzBdLmluYm91bmRMYXllcnMubGVuZ3RoID4gMSkge1xuICAgICAgc2VxdWVudGlhbExpa2UgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBub2Rlcy5wdXNoKC4uLmRlcHRoTm9kZXMpO1xuICB9XG4gIGlmIChzZXF1ZW50aWFsTGlrZSkge1xuICAgIC8vIFNlYXJjaCBmb3Igc2hhcmVkIGxheWVycy5cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIG1vZGVsLmxheWVycykge1xuICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBsYXllci5pbmJvdW5kTm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGVzLmluZGV4T2Yobm9kZSkgIT09IC0xKSB7XG4gICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHNlcXVlbnRpYWxMaWtlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXNlcXVlbnRpYWxMaWtlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2VxdWVudGlhbExpa2U7XG59XG5cbmZ1bmN0aW9uIHByaW50Um93KFxuICAgIGZpZWxkczogc3RyaW5nW10sIHBvc2l0aW9uczogbnVtYmVyW10sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaW50Rm46IChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHZvaWQgPSBjb25zb2xlLmxvZykge1xuICBsZXQgbGluZSA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChpID4gMCkge1xuICAgICAgbGluZSA9IGxpbmUuc2xpY2UoMCwgbGluZS5sZW5ndGggLSAxKSArICcgJztcbiAgICB9XG4gICAgbGluZSArPSBmaWVsZHNbaV07XG4gICAgbGluZSA9IGxpbmUuc2xpY2UoMCwgcG9zaXRpb25zW2ldKTtcbiAgICBsaW5lICs9ICcgJy5yZXBlYXQocG9zaXRpb25zW2ldIC0gbGluZS5sZW5ndGgpO1xuICB9XG4gIHByaW50Rm4obGluZSk7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgc3VtbWFyeSBmb3IgYSBzaW5nbGUgTGF5ZXIsIHdpdGhvdXQgY29ubmVjdGl2aXR5IGluZm9ybWF0aW9uLlxuICpcbiAqIEBwYXJhbSBsYXllcjogTGF5ZXIgaW5zdGFuY2UgdG8gcHJpbnQuXG4gKi9cbmZ1bmN0aW9uIHByaW50TGF5ZXJTdW1tYXJ5KFxuICAgIGxheWVyOiBMYXllciwgcG9zaXRpb25zOiBudW1iZXJbXSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgcHJpbnRGbjogKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4gdm9pZCkge1xuICBsZXQgb3V0cHV0U2hhcGU6IHN0cmluZztcbiAgbGV0IGlucHV0U2hhcGU6IHN0cmluZztcblxuICB0cnkge1xuICAgIGlucHV0U2hhcGUgPSAobGF5ZXIuaW5ib3VuZE5vZGVzLm1hcChcbiAgICAgIHggPT4gSlNPTi5zdHJpbmdpZnkoeC5pbnB1dFNoYXBlcylcbiAgICApKS5qb2luKCcsJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlucHV0U2hhcGUgPSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBvdXRwdXRTaGFwZSA9IEpTT04uc3RyaW5naWZ5KGxheWVyLm91dHB1dFNoYXBlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgb3V0cHV0U2hhcGUgPSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGxheWVyLm5hbWU7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGxheWVyLmdldENsYXNzTmFtZSgpO1xuICBjb25zdCBmaWVsZHM6IHN0cmluZ1tdID1cbiAgICAgIFtgJHtuYW1lfSAoJHtjbGFzc05hbWV9KWAsIGlucHV0U2hhcGUsXG4gICAgICBvdXRwdXRTaGFwZSwgbGF5ZXIuY291bnRQYXJhbXMoKS50b1N0cmluZygpXTtcbiAgcHJpbnRSb3coZmllbGRzLCBwb3NpdGlvbnMsIHByaW50Rm4pO1xufVxuXG4vKipcbiAqIFByaW50cyBhIHN1bW1hcnkgZm9yIGEgc2luZ2xlIExheWVyLCB3aXRoIGNvbm5lY3Rpdml0eSBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gcHJpbnRMYXllclN1bW1hcnlXaXRoQ29ubmVjdGlvbnMoXG4gICAgbGF5ZXI6IExheWVyLCBwb3NpdGlvbnM6IG51bWJlcltdLCByZWxldmFudE5vZGVzOiBOb2RlW10sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHByaW50Rm46IChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHZvaWQpIHtcbiAgbGV0IG91dHB1dFNoYXBlOiBzdHJpbmc7XG4gIGxldCBpbnB1dFNoYXBlOiBzdHJpbmc7XG5cbiAgdHJ5IHtcbiAgICBpbnB1dFNoYXBlID0gKGxheWVyLmluYm91bmROb2Rlcy5tYXAoXG4gICAgICB4ID0+IEpTT04uc3RyaW5naWZ5KHguaW5wdXRTaGFwZXMpXG4gICAgKSkuam9pbignLCcpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpbnB1dFNoYXBlID0gJ211bHRpcGxlJztcbiAgfVxuXG4gIHRyeSB7XG4gICAgb3V0cHV0U2hhcGUgPSBKU09OLnN0cmluZ2lmeShsYXllci5vdXRwdXRTaGFwZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG91dHB1dFNoYXBlID0gJ211bHRpcGxlJztcbiAgfVxuXG4gIGNvbnN0IGNvbm5lY3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IG5vZGUgb2YgbGF5ZXIuaW5ib3VuZE5vZGVzKSB7XG4gICAgaWYgKHJlbGV2YW50Tm9kZXMgIT0gbnVsbCAmJiByZWxldmFudE5vZGVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgcmVsZXZhbnROb2Rlcy5pbmRleE9mKG5vZGUpID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5pbmJvdW5kTGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBpbmJvdW5kTGF5ZXIgPSBub2RlLmluYm91bmRMYXllcnNbaV0ubmFtZTtcbiAgICAgIGNvbnN0IGluYm91bmRMYXllckluZGV4ID0gbm9kZS5ub2RlSW5kaWNlc1tpXTtcbiAgICAgIGNvbnN0IGluYm91bmRUZW5zb3JJbmRleCA9IG5vZGUudGVuc29ySW5kaWNlc1tpXTtcbiAgICAgIGNvbm5lY3Rpb25zLnB1c2goXG4gICAgICAgICAgYCR7aW5ib3VuZExheWVyfVske2luYm91bmRMYXllckluZGV4fV1bJHtpbmJvdW5kVGVuc29ySW5kZXh9XWApO1xuICAgIH1cbiAgfVxuICBjb25zdCBuYW1lID0gbGF5ZXIubmFtZTtcbiAgY29uc3QgY2xhc3NOYW1lID0gbGF5ZXIuZ2V0Q2xhc3NOYW1lKCk7XG4gIGNvbnN0IGZpcnN0Q29ubmVjdGlvbiA9IGNvbm5lY3Rpb25zLmxlbmd0aCA9PT0gMCA/ICcnIDogY29ubmVjdGlvbnNbMF07XG4gIGNvbnN0IGZpZWxkczogc3RyaW5nW10gPSBbXG4gICAgYCR7bmFtZX0gKCR7Y2xhc3NOYW1lfSlgLCBpbnB1dFNoYXBlLFxuICAgIG91dHB1dFNoYXBlLCBsYXllci5jb3VudFBhcmFtcygpLnRvU3RyaW5nKCksXG4gICAgZmlyc3RDb25uZWN0aW9uXG4gIF07XG5cbiAgcHJpbnRSb3coZmllbGRzLCBwb3NpdGlvbnMsIHByaW50Rm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGNvbm5lY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgcHJpbnRSb3coWycnLCAnJywgJycsICcnLCBjb25uZWN0aW9uc1tpXV0sIHBvc2l0aW9ucywgcHJpbnRGbik7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/serialization_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "convertPythonicToTs",
    ()=>convertPythonicToTs,
    "convertTsToPythonic",
    ()=>convertTsToPythonic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
// tslint:enable
/**
 * Test whether a value in an array is the name of a LayersModel or Layer.
 * @param key The key name that the value is found under. Note that the key
 *   may not be at the level immediately above the value, if the value is in a
 *   nested array.
 * @param index Index of the value in the Array that it is found in.
 * @param value The value object.
 * @returns A boolean indicating whether value is a name.
 */ function isArrayItemInputOrOutputName(key, index, value) {
    return (key === 'inboundNodes' || key === 'outputLayers' || key === 'inputLayers') && index === 0 && typeof value === 'string';
}
function convertPythonicToTs(pythonicConfig, key) {
    if (pythonicConfig === null) {
        return null;
    } else if (typeof pythonicConfig === 'string') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"](pythonicConfig);
    } else if (typeof pythonicConfig === 'number' || typeof pythonicConfig === 'boolean') {
        return pythonicConfig;
    } else if (pythonicConfig instanceof Array) {
        const tsArray = [];
        const arrayLength = pythonicConfig.length;
        for(let i = 0; i < arrayLength; ++i){
            const item = pythonicConfig[i];
            if (isArrayItemInputOrOutputName(key, i, item)) {
                tsArray.push(item);
            } else {
                tsArray.push(convertPythonicToTs(item, key));
            }
        }
        return tsArray;
    } else {
        const tsDict = {};
        for (const pythonicKey of Object.keys(pythonicConfig)){
            const pythonicValue = pythonicConfig[pythonicKey];
            if (pythonicKey === 'name' && typeof pythonicValue === 'string') {
                // Special case the 'name' key with a string value. Name values, such as
                // the names of LayersModel and Layer instances, should not undergo the
                // camel-case conversion.
                tsDict[pythonicKey] = pythonicValue;
            } else {
                const tsKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"](pythonicKey);
                tsDict[tsKey] = convertPythonicToTs(pythonicValue, tsKey);
            }
        }
        return tsDict;
    }
}
function convertTsToPythonic(tsConfig, key) {
    if (tsConfig === null || tsConfig === undefined) {
        return null;
    } else if (typeof tsConfig === 'string') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"](tsConfig);
    } else if (typeof tsConfig === 'number' || typeof tsConfig === 'boolean') {
        return tsConfig;
    } else if (tsConfig instanceof Array) {
        const pyArray = [];
        const arrayLength = tsConfig.length;
        for(let i = 0; i < arrayLength; ++i){
            const item = tsConfig[i];
            if (isArrayItemInputOrOutputName(key, i, item)) {
                pyArray.push(item);
            } else {
                pyArray.push(convertTsToPythonic(item, key));
            }
        }
        return pyArray;
    } else {
        const pyDict = {};
        for (const tsKey of Object.keys(tsConfig)){
            const tsValue = tsConfig[tsKey];
            const pyKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"](tsKey);
            if ((tsKey === 'name' || tsKey === 'className') && typeof tsValue === 'string') {
                // Special case the 'name' key with a string value. Name values, such as
                // the names of LayersModel and Layer instances, should not undergo the
                // snake-case conversion.
                pyDict[pyKey] = tsValue;
            } else {
                pyDict[pyKey] = convertTsToPythonic(tsValue, tsKey);
            }
        }
        return pyDict;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbl91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy91dGlscy9zZXJpYWxpemF0aW9uX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBVUgsT0FBTyxLQUFLLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxnQkFBZ0I7QUFFaEI7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFTLDRCQUE0QixDQUNqQyxHQUFXLEVBQUUsS0FBYSxFQUFFLEtBQVE7SUFDdEMsT0FBTyxDQUFDLEdBQUcsS0FBSyxjQUFjLElBQUksR0FBRyxLQUFLLGNBQWM7UUFDaEQsR0FBRyxLQUFLLGFBQWEsQ0FBQztRQUMxQixLQUFLLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUMvQyxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQy9CLGNBQTJCLEVBQUUsR0FBWTtJQUMzQyxJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDYjtTQUFNLElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxFQUFFO1FBQzdDLE9BQU8sYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNsRDtTQUFNLElBQ0gsQ0FBQyxPQUFPLGNBQWMsS0FBSyxRQUFRLENBQUM7UUFDcEMsQ0FBQyxPQUFPLGNBQWMsS0FBSyxTQUFTLENBQUMsRUFBRTtRQUN6QyxPQUFPLGNBQWMsQ0FBQztLQUN2QjtTQUFNLElBQUksY0FBYyxZQUFZLEtBQUssRUFBRTtRQUMxQyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFF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Qy9CLHdFQUF3RTtnQkFDeEUsdUVBQXVFO2dCQUN2RSx5QkFBeUI7Z0JBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7S0FDZjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyBQb3J0aW5nIG5vdGU6IFRoaXMgZmlsZSBkb2Vzbid0IGV4aXN0IGluIFB5S2VyYXMuXG4vLyBJdHMgcHVycG9zZSBoZXJlIGlzIHRvIGNlbnRyYWxpemUgdGhlIGJvdW5kYXJ5IGxheWVyIGJldHdlZW5cbi8vIHRmanMtbGF5ZXJzJ3MgaW50ZXJuYWwgQ29uZmlnIFRTLUNlbnRyaWMgZm9ybWF0IGFuZCBQeUtlcmFzJ3Ncbi8vIHNlcmlhbGl6ZWQgUHl0aG9uIENvbmZpZyBmb3JtYXQuXG5cbmltcG9ydCB7c2VyaWFsaXphdGlvbn0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtQeUpzb25WYWx1ZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L3R5cGVzJztcbmltcG9ydCAqIGFzIGdlbmVyaWNfdXRpbHMgZnJvbSAnLi4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG4vLyB0c2xpbnQ6ZW5hYmxlXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIGEgdmFsdWUgaW4gYW4gYXJyYXkgaXMgdGhlIG5hbWUgb2YgYSBMYXllcnNNb2RlbCBvciBMYXllci5cbiAqIEBwYXJhbSBrZXkgVGhlIGtleSBuYW1lIHRoYXQgdGhlIHZhbHVlIGlzIGZvdW5kIHVuZGVyLiBOb3RlIHRoYXQgdGhlIGtleVxuICogICBtYXkgbm90IGJlIGF0IHRoZSBsZXZlbCBpbW1lZGlhdGVseSBhYm92ZSB0aGUgdmFsdWUsIGlmIHRoZSB2YWx1ZSBpcyBpbiBhXG4gKiAgIG5lc3RlZCBhcnJheS5cbiAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgdmFsdWUgaW4gdGhlIEFycmF5IHRoYXQgaXQgaXMgZm91bmQgaW4uXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9iamVjdC5cbiAqIEByZXR1cm5zIEEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdmFsdWUgaXMgYSBuYW1lLlxuICovXG5mdW5jdGlvbiBpc0FycmF5SXRlbUlucHV0T3JPdXRwdXROYW1lPFQ+KFxuICAgIGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCB2YWx1ZTogVCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKGtleSA9PT0gJ2luYm91bmROb2RlcycgfHwga2V5ID09PSAnb3V0cHV0TGF5ZXJzJyB8fFxuICAgICAgICAgIGtleSA9PT0gJ2lucHV0TGF5ZXJzJykgJiZcbiAgICAgIGluZGV4ID09PSAwICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogQ29udmVydCBhIFB5dGhvbmljIGNvbmZpZyBvYmplY3QgdG8gVHlwZVNjcmlwdCBjb25maWcgb2JqZWN0LlxuICogQHBhcmFtIHB5dGhvbmljQ29uZmlnIFRoZSBjb25maWcgb2JqZWN0IHRvIGNvbnZlcnQuXG4gKiBAcGFyYW0ga2V5IE9wdGlvbmFsIGtleSBuYW1lIG9mIHRoZSBvYmplY3QgYmVpbmcgY29udmVydGVkLlxuICogQHJldHVybnMgUmVzdWx0IG9mIHRoZSBjb252ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFB5dGhvbmljVG9UcyhcbiAgICBweXRob25pY0NvbmZpZzogUHlKc29uVmFsdWUsIGtleT86IHN0cmluZyk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdFZhbHVlIHtcbiAgaWYgKHB5dGhvbmljQ29uZmlnID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHB5dGhvbmljQ29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBnZW5lcmljX3V0aWxzLnRvQ2FtZWxDYXNlKHB5dGhvbmljQ29uZmlnKTtcbiAgfSBlbHNlIGlmIChcbiAgICAgICh0eXBlb2YgcHl0aG9uaWNDb25maWcgPT09ICdudW1iZXInKSB8fFxuICAgICAgKHR5cGVvZiBweXRob25pY0NvbmZpZyA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgIHJldHVybiBweXRob25pY0NvbmZpZztcbiAgfSBlbHNlIGlmIChweXRob25pY0NvbmZpZyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgdHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gcHl0aG9uaWNDb25maWcubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgaXRlbSA9IHB5dGhvbmljQ29uZmlnW2ldO1xuICAgICAgaWYgKGlzQXJyYXlJdGVtSW5wdXRPck91dHB1dE5hbWUoa2V5LCBpLCBpdGVtKSkge1xuICAgICAgICB0c0FycmF5LnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0c0FycmF5LnB1c2goY29udmVydFB5dGhvbmljVG9UcyhpdGVtLCBrZXkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRzQXJyYXk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHNEaWN0OiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHB5dGhvbmljS2V5IG9mIE9iamVjdC5rZXlzKHB5dGhvbmljQ29uZmlnKSkge1xuICAgICAgY29uc3QgcHl0aG9uaWNWYWx1ZSA9IHB5dGhvbmljQ29uZmlnW3B5dGhvbmljS2V5XTtcbiAgICAgIGlmIChweXRob25pY0tleSA9PT0gJ25hbWUnICYmIHR5cGVvZiBweXRob25pY1ZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdGhlICduYW1lJyBrZXkgd2l0aCBhIHN0cmluZyB2YWx1ZS4gTmFtZSB2YWx1ZXMsIHN1Y2ggYXNcbiAgICAgICAgLy8gdGhlIG5hbWVzIG9mIExheWVyc01vZGVsIGFuZCBMYXllciBpbnN0YW5jZXMsIHNob3VsZCBub3QgdW5kZXJnbyB0aGVcbiAgICAgICAgLy8gY2FtZWwtY2FzZSBjb252ZXJzaW9uLlxuICAgICAgICB0c0RpY3RbcHl0aG9uaWNLZXldID0gcHl0aG9uaWNWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRzS2V5ID0gZ2VuZXJpY191dGlscy50b0NhbWVsQ2FzZShweXRob25pY0tleSk7XG4gICAgICAgIHRzRGljdFt0c0tleV0gPSBjb252ZXJ0UHl0aG9uaWNUb1RzKHB5dGhvbmljVmFsdWUsIHRzS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRzRGljdDtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBUeXBlU2NyaXB0IGNvbmZpZyBvYmplY3QgdG8gUHl0aG9uIGNvbmZpZyBvYmplY3QuXG4gKiBAcGFyYW0gdHNDb25maWcgVGhlIGNvbmZpZyBvYmplY3QgdG8gY29udmVydC5cbiAqIEBwYXJhbSBrZXkgT3B0aW9uYWwga2V5IG5hbWUgb2YgdGhlIG9iamVjdCBiZWluZyBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJucyBSZXN1bHQgb2YgdGhlIGNvbnZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VHNUb1B5dGhvbmljKFxuICAgIHRzQ29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3RWYWx1ZSwga2V5Pzogc3RyaW5nKTogUHlKc29uVmFsdWUge1xuICBpZiAodHNDb25maWcgPT09IG51bGwgfHwgdHNDb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0c0NvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZ2VuZXJpY191dGlscy50b1NuYWtlQ2FzZSh0c0NvbmZpZyk7XG4gIH0gZWxzZSBpZiAoXG4gICAgICAodHlwZW9mIHRzQ29uZmlnID09PSAnbnVtYmVyJykgfHwgKHR5cGVvZiB0c0NvbmZpZyA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgIHJldHVybiB0c0NvbmZpZztcbiAgfSBlbHNlIGlmICh0c0NvbmZpZyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgcHlBcnJheSA9IFtdO1xuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gdHNDb25maWcubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgaXRlbSA9IHRzQ29uZmlnW2ldO1xuICAgICAgaWYgKGlzQXJyYXlJdGVtSW5wdXRPck91dHB1dE5hbWUoa2V5LCBpLCBpdGVtKSkge1xuICAgICAgICBweUFycmF5LnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBweUFycmF5LnB1c2goY29udmVydFRzVG9QeXRob25pYyhpdGVtLCBrZXkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHB5QXJyYXk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHlEaWN0OiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHRzS2V5IG9mIE9iamVjdC5rZXlzKHRzQ29uZmlnKSkge1xuICAgICAgY29uc3QgdHNWYWx1ZSA9IHRzQ29uZmlnW3RzS2V5XTtcbiAgICAgIGNvbnN0IHB5S2V5ID0gZ2VuZXJpY191dGlscy50b1NuYWtlQ2FzZSh0c0tleSk7XG4gICAgICBpZiAoKHRzS2V5ID09PSAnbmFtZScgfHwgdHNLZXkgPT09ICdjbGFzc05hbWUnKSAmJlxuICAgICAgICAgIHR5cGVvZiB0c1ZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBTcGVjaWFsIGNhc2UgdGhlICduYW1lJyBrZXkgd2l0aCBhIHN0cmluZyB2YWx1ZS4gTmFtZSB2YWx1ZXMsIHN1Y2ggYXNcbiAgICAgICAgLy8gdGhlIG5hbWVzIG9mIExheWVyc01vZGVsIGFuZCBMYXllciBpbnN0YW5jZXMsIHNob3VsZCBub3QgdW5kZXJnbyB0aGVcbiAgICAgICAgLy8gc25ha2UtY2FzZSBjb252ZXJzaW9uLlxuICAgICAgICBweURpY3RbcHlLZXldID0gdHNWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHB5RGljdFtweUtleV0gPSBjb252ZXJ0VHNUb1B5dGhvbmljKHRzVmFsdWUsIHRzS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHB5RGljdDtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/conv_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "convOutputLength",
    ()=>convOutputLength,
    "deconvLength",
    ()=>deconvLength,
    "normalizeArray",
    ()=>normalizeArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-ssr] (ecmascript)");
;
;
;
function normalizeArray(value, n, name) {
    if (typeof value === 'number') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pyListRepeat"])(value, n);
    } else {
        if (value.length !== n) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The ${name} argument must be an integer or tuple of ${n} integers.` + ` Received: ${value.length} elements.`);
        }
        for(let i = 0; i < n; ++i){
            const singleValue = value[i];
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInteger"])(singleValue)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The ${name} argument must be an integer or tuple of ${n}` + ` integers. Received: ${JSON.stringify(value)} including a` + ` non-integer number ${singleValue}`);
            }
        }
        return value;
    }
}
function convOutputLength(inputLength, filterSize, padding, stride, dilation = 1) {
    if (inputLength == null) {
        return inputLength;
    }
    const dilatedFilterSize = filterSize + (filterSize - 1) * (dilation - 1);
    let outputLength;
    if (padding === 'same') {
        outputLength = inputLength;
    } else {
        outputLength = inputLength - dilatedFilterSize + 1;
    }
    return Math.floor((outputLength + stride - 1) / stride);
}
function deconvLength(dimSize, strideSize, kernelSize, padding) {
    if (dimSize == null) {
        return null;
    }
    if (padding === 'valid') {
        dimSize = dimSize * strideSize + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"])([
            kernelSize - strideSize,
            0
        ]);
    } else if (padding === 'same') {
        dimSize = dimSize * strideSize;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unsupport padding mode: ${padding}.`);
    }
    return dimSize;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udl91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy91dGlscy9jb252X3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUdyQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFNUM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FDMUIsS0FBc0IsRUFBRSxDQUFTLEVBQUUsSUFBWTtJQUNqRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0I7U0FBTTtRQUNMLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxJQUFJLFVBQVUsQ0FDaEIsT0FBTyxJQUFJLDRDQUE0QyxDQUFDLFlBQVk7Z0JBQ3BFLGNBQWMsS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDLENBQUM7U0FDN0M7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUMzQixNQUFNLElBQUksVUFBVSxDQUNoQixPQUFPLElBQUksNENBQTRDLENBQUMsRUFBRTtvQkFDMUQsd0JBQXdCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWM7b0JBQzNELHVCQUF1QixXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLFdBQW1CLEVBQUUsVUFBa0IsRUFBRSxPQUFvQixFQUM3RCxNQUFjLEVBQUUsUUFBUSxHQUFHLENBQUM7SUFDOUIsSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFO1FBQ3ZCLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO0lBQ0QsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekUsSUFBSSxZQUFvQixDQUFDO0lBQ3pCLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtRQUN0QixZQUFZLEdBQUcsV0FBVyxDQUFDO0tBQzVCO1NBQU0sRUFBRyxRQUFRO1FBQ2hCLFlBQVksR0FBRyxXQUFXLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDeEIsT0FBZSxFQUFFLFVBQWtCLEVBQUUsVUFBa0IsRUFDdkQsT0FBb0I7SUFDdEIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7UUFDdkIsT0FBTyxHQUFHLE9BQU8sR0FBRyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO1NBQU0sSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1FBQzdCLE9BQU8sR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO0tBQ2hDO1NBQU07UUFDTCxNQUFNLElBQUksVUFBVSxDQUFDLDJCQUEyQixPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7VmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7UGFkZGluZ01vZGV9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuXG5pbXBvcnQge3B5TGlzdFJlcGVhdH0gZnJvbSAnLi9nZW5lcmljX3V0aWxzJztcbmltcG9ydCB7aXNJbnRlZ2VyLCBtYXh9IGZyb20gJy4vbWF0aF91dGlscyc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIHNpbmdsZSBudW1iZXIgb2YgYXJyYXkgb2YgbnVtYmVycyBpbnRvIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEBwYXJhbSBuOiBUaGUgc2l6ZSBvZiB0aGUgdHVwbGUgdG8gYmUgcmV0dXJuZWQuXG4gKiBAcGFyYW0gbmFtZTogTmFtZSBvZiB0aGUgcGFyYW1ldGVyLCB1c2VkIGZvciBnZW5lcmF0aW5nIGVycm9yIG1lc3NhZ2VzLlxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbnVtYmVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KFxuICAgIHZhbHVlOiBudW1iZXJ8bnVtYmVyW10sIG46IG51bWJlciwgbmFtZTogc3RyaW5nKTogbnVtYmVyW10ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBweUxpc3RSZXBlYXQodmFsdWUsIG4pO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IG4pIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBUaGUgJHtuYW1lfSBhcmd1bWVudCBtdXN0IGJlIGFuIGludGVnZXIgb3IgdHVwbGUgb2YgJHtufSBpbnRlZ2Vycy5gICtcbiAgICAgICAgICBgIFJlY2VpdmVkOiAke3ZhbHVlLmxlbmd0aH0gZWxlbWVudHMuYCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb25zdCBzaW5nbGVWYWx1ZSA9IHZhbHVlW2ldO1xuICAgICAgaWYgKCFpc0ludGVnZXIoc2luZ2xlVmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYFRoZSAke25hbWV9IGFyZ3VtZW50IG11c3QgYmUgYW4gaW50ZWdlciBvciB0dXBsZSBvZiAke259YCArXG4gICAgICAgICAgICBgIGludGVnZXJzLiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9IGluY2x1ZGluZyBhYCArXG4gICAgICAgICAgICBgIG5vbi1pbnRlZ2VyIG51bWJlciAke3NpbmdsZVZhbHVlfWApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIG91dHB1dCBsZW5ndGggb2YgYSBjb252b2x1dGlvbiBnaXZlbiBpbnB1dCBsZW5ndGguXG4gKiBAcGFyYW0gaW5wdXRMZW5ndGhcbiAqIEBwYXJhbSBmaWx0ZXJTaXplXG4gKiBAcGFyYW0gcGFkZGluZ1xuICogQHBhcmFtIHN0cmlkZVxuICogQHBhcmFtIGRpbGF0aW9uOiBkaWxhdGlvbiByYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udk91dHB1dExlbmd0aChcbiAgICBpbnB1dExlbmd0aDogbnVtYmVyLCBmaWx0ZXJTaXplOiBudW1iZXIsIHBhZGRpbmc6IFBhZGRpbmdNb2RlLFxuICAgIHN0cmlkZTogbnVtYmVyLCBkaWxhdGlvbiA9IDEpOiBudW1iZXIge1xuICBpZiAoaW5wdXRMZW5ndGggPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnB1dExlbmd0aDtcbiAgfVxuICBjb25zdCBkaWxhdGVkRmlsdGVyU2l6ZSA9IGZpbHRlclNpemUgKyAoZmlsdGVyU2l6ZSAtIDEpICogKGRpbGF0aW9uIC0gMSk7XG4gIGxldCBvdXRwdXRMZW5ndGg6IG51bWJlcjtcbiAgaWYgKHBhZGRpbmcgPT09ICdzYW1lJykge1xuICAgIG91dHB1dExlbmd0aCA9IGlucHV0TGVuZ3RoO1xuICB9IGVsc2UgeyAgLy8gVkFMSURcbiAgICBvdXRwdXRMZW5ndGggPSBpbnB1dExlbmd0aCAtIGRpbGF0ZWRGaWx0ZXJTaXplICsgMTtcbiAgfVxuICByZXR1cm4gTWF0aC5mbG9vcigob3V0cHV0TGVuZ3RoICsgc3RyaWRlIC0gMSkgLyBzdHJpZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb252TGVuZ3RoKFxuICAgIGRpbVNpemU6IG51bWJlciwgc3RyaWRlU2l6ZTogbnVtYmVyLCBrZXJuZWxTaXplOiBudW1iZXIsXG4gICAgcGFkZGluZzogUGFkZGluZ01vZGUpOiBudW1iZXIge1xuICBpZiAoZGltU2l6ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocGFkZGluZyA9PT0gJ3ZhbGlkJykge1xuICAgIGRpbVNpemUgPSBkaW1TaXplICogc3RyaWRlU2l6ZSArIG1heChba2VybmVsU2l6ZSAtIHN0cmlkZVNpemUsIDBdKTtcbiAgfSBlbHNlIGlmIChwYWRkaW5nID09PSAnc2FtZScpIHtcbiAgICBkaW1TaXplID0gZGltU2l6ZSAqIHN0cmlkZVNpemU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYFVuc3VwcG9ydCBwYWRkaW5nIG1vZGU6ICR7cGFkZGluZ30uYCk7XG4gIH1cbiAgcmV0dXJuIGRpbVNpemU7XG59XG4iXX0=
}),
];

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-layers_dist_utils_fde7ae19._.js.map