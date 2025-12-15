module.exports = [
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/state.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Utilities related to persistent state in the backend.
 */ /**
 * An ID to track `tf.SymbolicTensor`s and derived classes.
 * Required in different places in engine/topology.ts to identify unique
 * tensors.
 */ __turbopack_context__.s([
    "getNextUniqueTensorId",
    ()=>getNextUniqueTensorId,
    "getUid",
    ()=>getUid
]);
let _nextUniqueTensorId = 0;
function getNextUniqueTensorId() {
    return _nextUniqueTensorId++;
}
const _uidPrefixes = {};
function getUid(prefix = '') {
    if (!(prefix in _uidPrefixes)) {
        _uidPrefixes[prefix] = 0;
    }
    _uidPrefixes[prefix] += 1;
    return prefix + _uidPrefixes[prefix].toString();
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvYmFja2VuZC9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUg7Ozs7R0FJRztBQUNILElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBRTVCLE1BQU0sVUFBVSxxQkFBcUI7SUFDbkMsT0FBTyxtQkFBbUIsRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFFRCxNQUFNLFlBQVksR0FBK0IsRUFBRSxDQUFDO0FBRXBEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFO0lBQ2hDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsRUFBRTtRQUM3QixZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixPQUFPLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogVXRpbGl0aWVzIHJlbGF0ZWQgdG8gcGVyc2lzdGVudCBzdGF0ZSBpbiB0aGUgYmFja2VuZC5cbiAqL1xuXG4vKipcbiAqIEFuIElEIHRvIHRyYWNrIGB0Zi5TeW1ib2xpY1RlbnNvcmBzIGFuZCBkZXJpdmVkIGNsYXNzZXMuXG4gKiBSZXF1aXJlZCBpbiBkaWZmZXJlbnQgcGxhY2VzIGluIGVuZ2luZS90b3BvbG9neS50cyB0byBpZGVudGlmeSB1bmlxdWVcbiAqIHRlbnNvcnMuXG4gKi9cbmxldCBfbmV4dFVuaXF1ZVRlbnNvcklkID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRVbmlxdWVUZW5zb3JJZCgpOiBudW1iZXIge1xuICByZXR1cm4gX25leHRVbmlxdWVUZW5zb3JJZCsrO1xufVxuXG5jb25zdCBfdWlkUHJlZml4ZXM6IHtbcHJlZml4OiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG5cbi8qKlxuICogUHJvdmlkZXMgYSB1bmlxdWUgVUlEIGdpdmVuIGEgc3RyaW5nIHByZWZpeC5cbiAqXG4gKiBAcGFyYW0gcHJlZml4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVaWQocHJlZml4ID0gJycpOiBzdHJpbmcge1xuICBpZiAoIShwcmVmaXggaW4gX3VpZFByZWZpeGVzKSkge1xuICAgIF91aWRQcmVmaXhlc1twcmVmaXhdID0gMDtcbiAgfVxuICBfdWlkUHJlZml4ZXNbcHJlZml4XSArPSAxO1xuICByZXR1cm4gcHJlZml4ICsgX3VpZFByZWZpeGVzW3ByZWZpeF0udG9TdHJpbmcoKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "epsilon",
    ()=>epsilon,
    "imageDataFormat",
    ()=>imageDataFormat,
    "setEpsilon",
    ()=>setEpsilon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
;
let _epsilon;
function epsilon() {
    if (_epsilon == null) {
        _epsilon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backend"])().epsilon();
    }
    return _epsilon;
}
function setEpsilon(e) {
    _epsilon = e;
}
function imageDataFormat() {
    return 'channelsLast';
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2JhY2tlbmQvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRzlDLElBQUksUUFBZ0IsQ0FBQztBQUVyQjs7R0FFRztBQUNILE1BQU0sVUFBVSxPQUFPO0lBQ3JCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtRQUNwQixRQUFRLEdBQUcsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEM7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxDQUFTO0lBQ2xDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtiYWNrZW5kfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtEYXRhRm9ybWF0fSBmcm9tICcuLi9rZXJhc19mb3JtYXQvY29tbW9uJztcblxubGV0IF9lcHNpbG9uOiBudW1iZXI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGZ1enogZmFjdG9yIHVzZWQgaW4gbnVtZXJpYyBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVwc2lsb24oKSB7XG4gIGlmIChfZXBzaWxvbiA9PSBudWxsKSB7XG4gICAgX2Vwc2lsb24gPSBiYWNrZW5kKCkuZXBzaWxvbigpO1xuICB9XG4gIHJldHVybiBfZXBzaWxvbjtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgZnV6eiBmYWN0b3IgdXNlZCBpbiBudW1lcmljIGV4cHJlc3Npb25zLlxuICogQHBhcmFtIGUgTmV3IHZhbHVlIG9mIGVwc2lsb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRFcHNpbG9uKGU6IG51bWJlcikge1xuICBfZXBzaWxvbiA9IGU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGVmYXVsdCBpbWFnZSBkYXRhIGZvcm1hdCBjb252ZW50aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1hZ2VEYXRhRm9ybWF0KCk6IERhdGFGb3JtYXQge1xuICByZXR1cm4gJ2NoYW5uZWxzTGFzdCc7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * deeplearn.js backend.
 */ __turbopack_context__.s([
    "batchFlatten",
    ()=>batchFlatten,
    "biasAdd",
    ()=>biasAdd,
    "cast",
    ()=>cast,
    "concatAlongFirstAxis",
    ()=>concatAlongFirstAxis,
    "concatenate",
    ()=>concatenate,
    "countParams",
    ()=>countParams,
    "dot",
    ()=>dot,
    "dropout",
    ()=>dropout,
    "elu",
    ()=>elu,
    "expandDims",
    ()=>expandDims,
    "flatten",
    ()=>flatten,
    "gather",
    ()=>gather,
    "getBackend",
    ()=>getBackend,
    "hardSigmoid",
    ()=>hardSigmoid,
    "inTrainPhase",
    ()=>inTrainPhase,
    "isBackendSymbolic",
    ()=>isBackendSymbolic,
    "oneHot",
    ()=>oneHot,
    "pow",
    ()=>pow,
    "randomNormal",
    ()=>randomNormal,
    "repeat",
    ()=>repeat,
    "setBackend",
    ()=>setBackend,
    "sign",
    ()=>sign,
    "sliceAlongAxis",
    ()=>sliceAlongAxis,
    "sliceAlongFirstAxis",
    ()=>sliceAlongFirstAxis,
    "sliceAlongLastAxis",
    ()=>sliceAlongLastAxis,
    "softsign",
    ()=>softsign,
    "square",
    ()=>square,
    "tile",
    ()=>tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/slice1d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice2d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/slice2d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice3d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/slice3d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/slice4d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat_1d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_2d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat_2d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_3d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat_3d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat_4d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/random_normal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/transpose.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_ops$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__fused$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/fused_ops.js [app-ssr] (ecmascript) <export * as fused>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/greater.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$one_hot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/one_hot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$gather$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/gather.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/pow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$elu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/elu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/abs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$dropout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/dropout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/clip_by_value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones_like.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/where.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros_like.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// tslint:enable
/* Setting and getting backend from deeplearn.js. */ // Default deeplearn.js backend is WebGL (GPU).
let backend = 'webgl';
function setBackend(requestedBackend) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setBackend"](requestedBackend);
    backend = requestedBackend;
}
function getBackend() {
    return backend;
}
function isBackendSymbolic() {
    return false;
}
function countParams(x) {
    const shape = x.shape;
    if (shape.length > 0) {
        return shape.reduce((a, b)=>a * b);
    } else {
        // Scalar.
        return 1;
    }
}
function cast(x, dtype) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](x, dtype);
}
function expandDims(x, axis = -1) {
    const outShape = x.shape.slice();
    if (axis < 0) {
        axis = outShape.length + axis + 1;
    }
    outShape.splice(axis, 0, 1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](x, outShape);
}
function repeat(x, n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (x.shape.length !== 2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`repeat() expects a rank-2 tensor, but received a ` + `rank-${x.shape.length} tensor.`);
        }
        const y = expandDims(x, 1);
        return tile(y, [
            1,
            n,
            1
        ]);
    });
}
function flatten(x) {
    const newShape = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayProd"](x.shape)
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](x, newShape);
}
function batchFlatten(x) {
    if (x.rank <= 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`batchFlatten requires a minimum rank of 2. Got rank: ${x.rank}.`);
    }
    const newShape = [
        x.shape[0],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayProd"](x.shape, 1)
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](x, newShape);
}
function sliceAlongFirstAxis(array, start, size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        switch(array.rank){
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice1d"](array, start, size);
            case 2:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice2d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice2d"](array, [
                    start,
                    0
                ], [
                    size,
                    array.shape[1]
                ]);
            case 3:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice3d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice3d"](array, [
                    start,
                    0,
                    0
                ], [
                    size,
                    array.shape[1],
                    array.shape[2]
                ]);
            case 4:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice4d"](array, [
                    start,
                    0,
                    0,
                    0
                ], [
                    size,
                    array.shape[1],
                    array.shape[2],
                    array.shape[3]
                ]);
            case 5:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"](array, [
                    start,
                    0,
                    0,
                    0,
                    0
                ], [
                    size,
                    array.shape[1],
                    array.shape[2],
                    array.shape[3],
                    array.shape[4]
                ]);
            case 6:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"](array, [
                    start,
                    0,
                    0,
                    0,
                    0,
                    0
                ], [
                    size,
                    array.shape[1],
                    array.shape[2],
                    array.shape[3],
                    array.shape[4],
                    array.shape[5]
                ]);
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`sliceAlongFirstAxis() received an unsupported tensor rank: ` + `${array.rank}`);
        }
    });
}
function sliceAlongLastAxis(array, start, size) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        switch(array.rank){
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice1d"](array, start, size);
            case 2:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice2d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice2d"](array, [
                    0,
                    start
                ], [
                    array.shape[0],
                    size
                ]);
            case 3:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice3d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice3d"](array, [
                    0,
                    0,
                    start
                ], [
                    array.shape[0],
                    array.shape[1],
                    size
                ]);
            case 4:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice4d"](array, [
                    0,
                    0,
                    0,
                    start
                ], [
                    array.shape[0],
                    array.shape[1],
                    array.shape[2],
                    size
                ]);
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`sliceAlongLastAxis() received an unsupported tensor rank: ` + `${array.rank}`);
        }
    });
}
function sliceAlongAxis(array, start, size, axis) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        switch(array.rank){
            case 1:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice1d"](array, start, size);
            case 2:
                switch(axis){
                    case 1:
                        return sliceAlongFirstAxis(array, start, size);
                    case 2:
                        return sliceAlongLastAxis(array, start, size);
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The axis is not within the rank of the tensor ` + `${axis}`);
                }
            case 3:
                switch(axis){
                    case 1:
                        return sliceAlongFirstAxis(array, start, size);
                    case 2:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice3d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice3d"](array, [
                            0,
                            start,
                            0
                        ], [
                            array.shape[0],
                            size,
                            array.shape[2]
                        ]);
                    case 3:
                        return sliceAlongLastAxis(array, start, size);
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The axis is not within the rank of the tensor ` + `${axis}`);
                }
            case 4:
                switch(axis){
                    case 1:
                        return sliceAlongFirstAxis(array, start, size);
                    case 2:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice4d"](array, [
                            0,
                            start,
                            0,
                            0
                        ], [
                            array.shape[0],
                            size,
                            array.shape[2],
                            array.shape[3]
                        ]);
                    case 3:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice4d"](array, [
                            0,
                            0,
                            start,
                            0
                        ], [
                            array.shape[0],
                            array.shape[1],
                            size,
                            array.shape[3]
                        ]);
                    case 4:
                        return sliceAlongLastAxis(array, start, size);
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The axis is not within the rank of the tensor ` + `${axis}`);
                }
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`sliceAlongLastAxis() received an unsupported tensor rank: ` + `${array.rank}`);
        }
    });
}
function concatenate(tensors, axis = -1) {
    let rank;
    if (axis < 0) {
        rank = tensors[0].rank;
        if (rank !== 0) {
            axis = rank;
        } else {
            axis = 0;
        }
    }
    if (axis === tensors[0].rank) {
        // Porting Note: This is necessary because tfc.concat() requires axis to be
        //   in the interval [-rank, rank).
        axis = -1;
    }
    // Porting Note: Sparse concat is not supported yet.
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"](tensors, axis);
}
function concatAlongFirstAxis(a, b) {
    switch(a.rank){
        case 1:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat1d"]([
                a,
                b
            ]);
        case 2:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_2d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat2d"]([
                a,
                b
            ], 0);
        case 3:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_3d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat3d"]([
                a,
                b
            ], 0);
        case 4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_4d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat4d"]([
                a,
                b
            ], 0);
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`concatAlongFirstAxis() received an unsupported ` + `tensor rank: ${a.rank}`);
    }
}
function tile(x, n) {
    if (!Array.isArray(n)) {
        n = [
            n
        ];
    }
    if (x.rank !== n.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The length of input n (${n.length}) does not match ` + `the number of dimensions in input x (${x.rank})`);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tile"](x, n);
}
function randomNormal(shape, mean = 0.0, stddev = 1.0, dtype, seed) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomNormal"](shape, mean, stddev, dtype, seed);
}
function dot(a, b, activation, bias) {
    if (a.rank < 2 || b.rank < 2) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`dot requires both inputs to be rank >= 2` + ` but got x shape = ${a.shape} and y shape = ${b.shape}`);
    }
    if (b.rank >= 3) {
        const xLastDim = a.shape.slice(-1)[0];
        const ySecondLastDim = b.shape.slice(-2)[0];
        if (xLastDim !== ySecondLastDim) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`If rank y >= 3, then the second last dim` + ` of y must equal the last dim of x but got x shape = ${a.shape} and ` + ` y shape = ${b.shape}`);
        }
    }
    // Handle basic 2D x 2D case.
    if (a.rank === 2 && b.rank === 2) {
        const transposeA = false;
        const transposeB = false;
        // tfc.fused.matMul only fuses certain activation functions. Unsupported
        // activation functions are treated as 'linear' activations, which is
        // equivalent to a no-op.
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_ops$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__fused$3e$__["fused"].matMul({
            a,
            b: b,
            transposeA,
            transposeB,
            bias: bias ? reshapeBias(a.rank, bias, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageDataFormat"])()) : null,
            activation
        });
    } else {
        // Reshape x into the analogous 2D Tensor.
        const aFirstDims = a.shape.slice(); // Holds all but the last dim of x.
        const aLastDim = aFirstDims.pop();
        a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](a, [
            -1,
            aLastDim
        ]);
        // Reshape y into the analogous 2D Tensor, and keep track of the
        // required dimensions to reproduce the output shape.
        const bShape = b.shape.slice();
        const bLastDim = bShape.pop();
        const ySecondLastDim = bShape.pop();
        const yOtherDims = [
            ...bShape,
            bLastDim
        ];
        // permutation should be like [r-2, 0, 1, 2, ... r-4, r-3, r-1]
        // where r is the rank of y.
        const perm = Array.from({
            length: b.rank
        }, (_, i)=>{
            if (i === 0) {
                return b.rank - 2;
            } else if (i <= b.rank - 2) {
                return i - 1;
            }
            return i;
        });
        b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transpose"](b, perm), [
            ySecondLastDim,
            -1
        ]);
        // Multiply x and y as 2D Tensors, and then reshape back to original.
        const outputShape = [
            ...aFirstDims,
            ...yOtherDims
        ];
        const transposeA = false;
        const transposeB = false;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_ops$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__fused$3e$__["fused"].matMul({
            a,
            b,
            transposeA,
            transposeB,
            bias: bias ? reshapeBias(a.rank, bias, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageDataFormat"])()) : null,
            activation
        }), outputShape);
    }
}
function sign(x) {
    // TODO(cais): Move to the core.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const zerosLikeX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zerosLike"])(x);
        const onesLikeX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onesLike"])(x);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](x, zerosLikeX), zerosLikeX, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greater"](x, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zerosLike"])(x)), onesLikeX, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](-1, onesLikeX)));
    });
}
function oneHot(indices, numClasses) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (indices.rank !== 1) {
            throw new Error('Only 1D one-hot tensors are supported in the ' + 'deeplearn backend, at present.');
        }
        indices = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](indices, 'int32');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$one_hot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oneHot"](indices, numClasses), 'float32');
    });
}
function gather(reference, indices, axis) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (Array.isArray(indices)) {
            indices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tensor1d"])(indices, 'int32');
        } else {
            indices = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](indices, 'int32');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$gather$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gather"](reference, indices, axis);
    });
}
function square(x) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](x, x);
}
function pow(x, a) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (typeof a === 'number') {
            a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scalar"])(Math.round(a), 'int32');
        }
        if (a.dtype !== 'int32') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`Non-int32 dtype (${a.dtype}) is not supported by pow() yet`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pow"](x, a);
    });
}
/**
 * Reshapes bias tensor according to rank of x.
 */ function reshapeBias(xRank, bias, dataFormat) {
    const biasShape = bias.shape;
    if (bias.rank !== 1 && bias.rank !== xRank) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unexpected bias dimensions: ${bias.rank}` + `; expected it to be 1 or ${xRank}`);
    }
    if (xRank === 5) {
        if (dataFormat === 'channelsFirst') {
            if (biasShape.length === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    biasShape[0],
                    1,
                    1,
                    1
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    biasShape[3],
                    biasShape[0],
                    biasShape[1],
                    biasShape[2]
                ]);
            }
        } else if (dataFormat === 'channelsLast') {
            if (biasShape.length === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    1,
                    1,
                    1,
                    biasShape[0]
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1
                ].concat(biasShape));
            }
        }
    } else if (xRank === 4) {
        if (dataFormat === 'channelsFirst') {
            if (biasShape.length === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    biasShape[0],
                    1,
                    1
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    biasShape[2],
                    biasShape[0],
                    biasShape[1]
                ]);
            }
        } else if (dataFormat === 'channelsLast') {
            if (biasShape.length === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    1,
                    1,
                    biasShape[0]
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1
                ].concat(biasShape));
            }
        }
    } else if (xRank === 3) {
        if (dataFormat === 'channelsFirst') {
            if (biasShape.length === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    biasShape[0],
                    1
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    biasShape[1],
                    biasShape[0]
                ]);
            }
        } else if (dataFormat === 'channelsLast') {
            if (biasShape.length === 1) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1,
                    1,
                    biasShape[0]
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](bias, [
                    1
                ].concat(biasShape));
            }
        }
    } else if (xRank < 3) {
        return bias;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unsupported input rank by biasAdd: ${bias.rank}`);
}
function biasAdd(x, bias, dataFormat) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (dataFormat == null) {
            dataFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageDataFormat"])();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](x, reshapeBias(x.rank, bias, dataFormat));
    });
}
function elu(x, alpha = 1) {
    // TODO(cais): Add support for alpha values other than 1.
    if (alpha !== 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`Support for alpha values other than 1 (${alpha}) is not implemented ` + `yet.`);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$elu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["elu"](x);
}
function softsign(x) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"](x), 1)));
}
function dropout(x, level, noiseShape, seed) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$dropout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dropout"](x, level, noiseShape, seed));
}
function hardSigmoid(x) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](.2, x));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](y, 0, 1);
    });
}
function inTrainPhase(x, alt, training = false) {
    return training ? x() : alt();
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGZqc19iYWNrZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2JhY2tlbmQvdGZqc19iYWNrZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLElBQUksWUFBWSxFQUFFLE1BQU0sRUFBb0IsUUFBUSxFQUEwQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsSUFBSSxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwTCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHMUQsT0FBTyxLQUFLLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRXpDLGdCQUFnQjtBQUVoQixvREFBb0Q7QUFFcEQsK0NBQStDO0FBQy9DLElBQUksT0FBTyxHQUFrQixPQUFPLENBQUM7QUFFckMsTUFBTSxVQUFVLFVBQVUsQ0FBQyxnQkFBK0I7SUFDeEQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxpQkFBaUI7SUFDL0IsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBVztJQUNyQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3RCLElB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R0FBRyxLQUFLO0lBQ3hFLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogZGVlcGxlYXJuLmpzIGJhY2tlbmQuXG4gKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge29uZXNMaWtlIGFzIGNvcmVPbmVzTGlrZSwgc2NhbGFyLCBUZW5zb3IsIFRlbnNvcjFELCB0ZW5zb3IxZCwgVGVuc29yMkQsIFRlbnNvcjNELCBUZW5zb3I0RCwgVGVuc29yNUQsIHRpZHksIHdoZXJlLCB6ZXJvc0xpa2UgYXMgY29yZVplcm9zTGlrZX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7Y2hlY2tEYXRhRm9ybWF0fSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yLCBWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtEYXRhRm9ybWF0LCBTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge0hhc1NoYXBlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgKiBhcyBtYXRoX3V0aWxzIGZyb20gJy4uL3V0aWxzL21hdGhfdXRpbHMnO1xuXG5pbXBvcnQge2ltYWdlRGF0YUZvcm1hdH0gZnJvbSAnLi9jb21tb24nO1xuXG4vLyB0c2xpbnQ6ZW5hYmxlXG5cbi8qIFNldHRpbmcgYW5kIGdldHRpbmcgYmFja2VuZCBmcm9tIGRlZXBsZWFybi5qcy4gKi9cblxuLy8gRGVmYXVsdCBkZWVwbGVhcm4uanMgYmFja2VuZCBpcyBXZWJHTCAoR1BVKS5cbmxldCBiYWNrZW5kOiAnY3B1J3wnd2ViZ2wnID0gJ3dlYmdsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEJhY2tlbmQocmVxdWVzdGVkQmFja2VuZDogJ2NwdSd8J3dlYmdsJykge1xuICB0ZmMuc2V0QmFja2VuZChyZXF1ZXN0ZWRCYWNrZW5kKTtcbiAgYmFja2VuZCA9IHJlcXVlc3RlZEJhY2tlbmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrZW5kKCk6ICdjcHUnfCd3ZWJnbCcge1xuICByZXR1cm4gYmFja2VuZDtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYmFja2VuZCBpcyBvcGVyYXRpbmcgc3ltYm9saWNhbGx5LlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBob3cgdG8gaW50ZXJwcmV0IHVzZXIgY29kZS4gSWZcbiAqIGl0IHJldHVybnMgdHJ1ZSwgY2FsbHMgdG8gdGhlIGJhY2tlbmQgY29uc3RydWN0IGEgc3ltYm9saWMgZ3JhcGg7IGlmXG4gKiBpdCByZXR1cm5zIGZhbHNlLCBjYWxscyB0byB0aGUgYmFja2VuZCBleGVjdXRlIGltbWVkaWF0ZWx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCYWNrZW5kU3ltYm9saWMoKTogYm9vbGVhbiB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIFRlbnNvci5cbiAqIEBwYXJhbSB4IFRoZSBUZW5zb3IuXG4gKiBAcmV0dXJuIE51bWJlciBvZiBlbGVtZW50cyBpbiBgeGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudFBhcmFtcyh4OiBIYXNTaGFwZSk6IG51bWJlciB7XG4gIGNvbnN0IHNoYXBlID0geC5zaGFwZTtcbiAgaWYgKHNoYXBlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gc2hhcGUucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSAqIGIpO1xuICB9IGVsc2Uge1xuICAgIC8vIFNjYWxhci5cbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG4vKipcbiAqIENhc3RzIGEgdGVuc29yIHRvIGEgZGlmZmVyZW50IGR0eXBlIGFuZCByZXR1cm5zIGl0LlxuICogQHBhcmFtIHggSW5wdXQgdGVuc29yLlxuICogQHBhcmFtIGR0eXBlIFN0cmluZzogJ2Zsb2F0MzInfCdpbnQzMid8J2Jvb2wnLlxuICogQHJldHVybnMgVGVuc29yIG9mIHRoZSBzcGVjaWZpZWQgYGR0eXBlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc3QoeDogVGVuc29yLCBkdHlwZTogdGZjLkRhdGFUeXBlKTogVGVuc29yIHtcbiAgcmV0dXJuIHRmYy5jYXN0KHgsIGR0eXBlKTtcbn1cblxuLyoqXG4gKiBBZGRzIGEgMS1zaXplZCBkaW1lbnNpb24gYXQgaW5kZXggXCJheGlzXCIuXG4gKiBAcGFyYW0geCBJbnB1dCB0ZW5zb3IuXG4gKiBAcGFyYW0gYXhpcyBQb3NpdGlvbiB3aGVyZSB0byBhZGQgdGhlIG5ldyBheGlzLlxuICogQHJldHVybnMgUmVzdWx0IG9mIHRoZSBkaW1lbnNpb24gZXhwYW5zaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRGltcyh4OiBUZW5zb3IsIGF4aXMgPSAtMSk6IFRlbnNvciB7XG4gIGNvbnN0IG91dFNoYXBlID0geC5zaGFwZS5zbGljZSgpO1xuICBpZiAoYXhpcyA8IDApIHtcbiAgICBheGlzID0gb3V0U2hhcGUubGVuZ3RoICsgYXhpcyArIDE7XG4gIH1cbiAgb3V0U2hhcGUuc3BsaWNlKGF4aXMsIDAsIDEpO1xuICByZXR1cm4gdGZjLnJlc2hhcGUoeCwgb3V0U2hhcGUpO1xufVxuXG4vKipcbiAqIFJlcGVhdHMgYSAyRCB0ZW5zb3IuXG4gKlxuICogSWYgYHhgIGhhcyBzaGFwZSBgW3NhbXBsZXMsIGRpbV1gIGFuZCBgbmAgaXMgMiwgZm9yIGV4YW1wbGUsIHRoZSBvdXRwdXRcbiAqIHdpbGwgaGF2ZSBzaGFwZSBgW3NhbXBsZXMsIDIsIGRpbV1gLlxuICpcbiAqIEBwYXJhbSB4IElucHV0IHRlbnNvci5cbiAqIEBwYXJhbSBuIEludGVnZXIsIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQuXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSByZXBlYXQgb3BlcmF0aW9uLlxuICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBpbnB1dCB0ZW5zb3IgaXMgbm90IDJELlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KHg6IFRlbnNvciwgbjogbnVtYmVyKTogVGVuc29yIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgIGlmICh4LnNoYXBlLmxlbmd0aCAhPT0gMikge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYHJlcGVhdCgpIGV4cGVjdHMgYSByYW5rLTIgdGVuc29yLCBidXQgcmVjZWl2ZWQgYSBgICtcbiAgICAgICAgICBgcmFuay0ke3guc2hhcGUubGVuZ3RofSB0ZW5zb3IuYCk7XG4gICAgfVxuICAgIGNvbnN0IHkgPSBleHBhbmREaW1zKHgsIDEpO1xuICAgIHJldHVybiB0aWxlKHksIFsxLCBuLCAxXSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBUZW5zb3IgaW50byAxRC5cbiAqIEBwYXJhbSB4IElucHV0IHRlbnNvci5cbiAqIEByZXR1cm4gVGhlIHJlc3VsdCBvZiB0aGUgZmxhdHRlbmluZyBgeGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKHg6IFRlbnNvcik6IFRlbnNvciB7XG4gIGNvbnN0IG5ld1NoYXBlID0gW21hdGhfdXRpbHMuYXJyYXlQcm9kKHguc2hhcGUpXTtcbiAgcmV0dXJuIHRmYy5yZXNoYXBlKHgsIG5ld1NoYXBlKTtcbn1cblxuLyoqXG4gKiBUdXJuIGEgbkQgdGVuc29yIGludG8gYSAyRCB0ZW5zb3Igd2l0aCBzYW1lIDB0aCBkaW1lbnNpb24uXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgZmxhdHRlbnMgZWFjaCBkYXRhIHNhbXBsZXMgb2YgYSBiYXRjaC5cbiAqXG4gKiBAcGFyYW0geCBUaGUgdGVuc29yIHRvIGZsYXR0ZW4uIFRoZSByYW5rIG9mIHRoaXMgdGVuc29yIGlzIHJlcXVpcmVkIHRvIGJlIDJcbiAqICAgb3IgaGlnaGVyLlxuICogQHJldHVybiBUaGUgcmVzdWx0IG9mIHRoZSBmbGF0dGVuaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmF0Y2hGbGF0dGVuKHg6IFRlbnNvcik6IFRlbnNvciB7XG4gIGlmICh4LnJhbmsgPD0gMSkge1xuICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICBgYmF0Y2hGbGF0dGVuIHJlcXVpcmVzIGEgbWluaW11bSByYW5rIG9mIDIuIEdvdCByYW5rOiAke3gucmFua30uYCk7XG4gIH1cbiAgY29uc3QgbmV3U2hhcGUgPSBbeC5zaGFwZVswXSwgbWF0aF91dGlscy5hcnJheVByb2QoeC5zaGFwZSwgMSldO1xuICByZXR1cm4gdGZjLnJlc2hhcGUoeCwgbmV3U2hhcGUpO1xufVxuXG4vKipcbiAqIERvIHNsaWNpbmcgYWxvbmcgdGhlIGZpcnN0IGF4aXMuXG4gKiBAcGFyYW0gYXJyYXkgaW5wdXQgYHRmLlRlbnNvcmAuXG4gKiBAcGFyYW0gc3RhcnQgc3RhcnRpbmcgaW5kZXgsIGluY2x1c2l2ZS5cbiAqIEBwYXJhbSBzaXplIHNpemUgb2YgdGhlIHNsaWNlIGFsb25nIHRoZSBmaXJzdCBheGlzLlxuICogQHJldHVybnMgcmVzdWx0IG9mIHRoZSBzbGljaW5nLlxuICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBgYXJyYXlgIGlzIG9mIGFuIHVuc3VwcG9ydGVkIHN1YnR5cGUgb2YgYHRmLlRlbnNvcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGljZUFsb25nRmlyc3RBeGlzKFxuICAgIGFycmF5OiBUZW5zb3IsIHN0YXJ0OiBudW1iZXIsIHNpemU6IG51bWJlcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBzd2l0Y2ggKGFycmF5LnJhbmspIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIHRmYy5zbGljZTFkKGFycmF5IGFzIFRlbnNvcjFELCBzdGFydCwgc2l6ZSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiB0ZmMuc2xpY2UyZChcbiAgICAgICAgICAgIGFycmF5IGFzIFRlbnNvcjJELCBbc3RhcnQsIDBdLCBbc2l6ZSwgYXJyYXkuc2hhcGVbMV1dKTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHRmYy5zbGljZTNkKFxuICAgICAgICAgICAgYXJyYXkgYXMgVGVuc29yM0QsIFtzdGFydCwgMCwgMF0sXG4gICAgICAgICAgICBbc2l6ZSwgYXJyYXkuc2hhcGVbMV0sIGFycmF5LnNoYXBlWzJdXSk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiB0ZmMuc2xpY2U0ZChcbiAgICAgICAgICAgIGFycmF5IGFzIFRlbnNvcjRELCBbc3RhcnQsIDAsIDAsIDBdLFxuICAgICAgICAgICAgW3NpemUsIGFycmF5LnNoYXBlWzFdLCBhcnJheS5zaGFwZVsyXSwgYXJyYXkuc2hhcGVbM11dKTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIHRmYy5zbGljZShhcnJheSBhcyBUZW5zb3I1RCwgW3N0YXJ0LCAwLCAwLCAwLCAwXSwgW1xuICAgICAgICAgIHNpemUsIGFycmF5LnNoYXBlWzFdLCBhcnJheS5zaGFwZVsyXSwgYXJyYXkuc2hhcGVbM10sIGFycmF5LnNoYXBlWzRdXG4gICAgICAgIF0pO1xuICAgICAgY2FzZSA2OlxuICAgICAgICByZXR1cm4gdGZjLnNsaWNlKGFycmF5LCBbc3RhcnQsIDAsIDAsIDAsIDAsIDBdLCBbXG4gICAgICAgICAgc2l6ZSwgYXJyYXkuc2hhcGVbMV0sIGFycmF5LnNoYXBlWzJdLCBhcnJheS5zaGFwZVszXSwgYXJyYXkuc2hhcGVbNF0sXG4gICAgICAgICAgYXJyYXkuc2hhcGVbNV1cbiAgICAgICAgXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBzbGljZUFsb25nRmlyc3RBeGlzKCkgcmVjZWl2ZWQgYW4gdW5zdXBwb3J0ZWQgdGVuc29yIHJhbms6IGAgK1xuICAgICAgICAgICAgYCR7YXJyYXkucmFua31gKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIERvIHNsaWNpbmcgYWxvbmcgdGhlIGxhc3QgYXhpcy5cbiAqIEBwYXJhbSBhcnJheSBpbnB1dCBgdGYuVGVuc29yYC5cbiAqIEBwYXJhbSBzdGFydCBzdGFydGluZyBpbmRleCwgaW5jbHVzaXZlLlxuICogQHBhcmFtIHNpemUgc2l6ZSBvZiB0aGUgc2xpY2UgYWxvbmcgdGhlIGxhc3QgYXhpcy5cbiAqIEByZXR1cm5zIHJlc3VsdCBvZiB0aGUgc2xpY2luZy5cbiAqIEB0aHJvd3MgVmFsdWVFcnJvcjogSWYgYGFycmF5YCBpcyBvZiBhbiB1bnN1cHBvcnRlZCBzdWJ0eXBlIG9mIGB0Zi5UZW5zb3JgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2VBbG9uZ0xhc3RBeGlzKFxuICAgIGFycmF5OiBUZW5zb3IsIHN0YXJ0OiBudW1iZXIsIHNpemU6IG51bWJlcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBzd2l0Y2ggKGFycmF5LnJhbmspIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIHRmYy5zbGljZTFkKGFycmF5IGFzIFRlbnNvcjFELCBzdGFydCwgc2l6ZSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiB0ZmMuc2xpY2UyZChcbiAgICAgICAgICAgIGFycmF5IGFzIFRlbnNvcjJELCBbMCwgc3RhcnRdLCBbYXJyYXkuc2hhcGVbMF0sIHNpemVdKTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHRmYy5zbGljZTNkKFxuICAgICAgICAgICAgYXJyYXkgYXMgVGVuc29yM0QsIFswLCAwLCBzdGFydF0sXG4gICAgICAgICAgICBbYXJyYXkuc2hhcGVbMF0sIGFycmF5LnNoYXBlWzFdLCBzaXplXSk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiB0ZmMuc2xpY2U0ZChcbiAgICAgICAgICAgIGFycmF5IGFzIFRlbnNvcjRELCBbMCwgMCwgMCwgc3RhcnRdLFxuICAgICAgICAgICAgW2FycmF5LnNoYXBlWzBdLCBhcnJheS5zaGFwZVsxXSwgYXJyYXkuc2hhcGVbMl0sIHNpemVdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYHNsaWNlQWxvbmdMYXN0QXhpcygpIHJlY2VpdmVkIGFuIHVuc3VwcG9ydGVkIHRlbnNvciByYW5rOiBgICtcbiAgICAgICAgICAgIGAke2FycmF5LnJhbmt9YCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBEbyBzbGljaW5nIGFsb25nIHRoZSBzZXBjaWZpZWQgYXhpcy5cbiAqIEBwYXJhbSBhcnJheSBpbnB1dCBgdGYuVGVuc29yYC5cbiAqIEBwYXJhbSBzdGFydCBzdGFydGluZyBpbmRleCwgaW5jbHVzaXZlLlxuICogQHBhcmFtIHNpemUgb2YgdGhlIHNsaWNlIGFsb25nIHRoZSBjaG9zZW4gYXhpcy5cbiAqIEBwYXJhbSBjaG9vc2UgYW4gYXhpcy5cbiAqIEByZXR1cm5zIHJlc3VsdCBvZiB0aGUgc2xpY2luZy5cbiAqIEB0aHJvd3MgVmFsdWVFcnJvcjogSWYgYGFycmF5YCBpcyBvZiBhbiB1bnN1cHBvcnRlZCBzdWJ0eXBlIG9mIGB0Zi5UZW5zb3JgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2VBbG9uZ0F4aXMoXG4gICAgYXJyYXk6IFRlbnNvciwgc3RhcnQ6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBheGlzOiBudW1iZXIpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgc3dpdGNoIChhcnJheS5yYW5rKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiB0ZmMuc2xpY2UxZChhcnJheSBhcyBUZW5zb3IxRCwgc3RhcnQsIHNpemUpO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gc2xpY2VBbG9uZ0ZpcnN0QXhpcyhhcnJheSwgc3RhcnQsIHNpemUpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzbGljZUFsb25nTGFzdEF4aXMoYXJyYXksIHN0YXJ0LCBzaXplKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBheGlzIGlzIG5vdCB3aXRoaW4gdGhlIHJhbmsgb2YgdGhlIHRlbnNvciBgICtcbiAgICAgICAgICAgICAgICBgJHtheGlzfWApO1xuICAgICAgICB9XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzbGljZUFsb25nRmlyc3RBeGlzKGFycmF5LCBzdGFydCwgc2l6ZSk7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHRmYy5zbGljZTNkKFxuICAgICAgICAgICAgICAgIGFycmF5IGFzIFRlbnNvcjNELCBbMCwgc3RhcnQsIDBdLFxuICAgICAgICAgICAgICAgIFthcnJheS5zaGFwZVswXSwgc2l6ZSwgYXJyYXkuc2hhcGVbMl1dKTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gc2xpY2VBbG9uZ0xhc3RBeGlzKGFycmF5LCBzdGFydCwgc2l6ZSk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgYXhpcyBpcyBub3Qgd2l0aGluIHRoZSByYW5rIG9mIHRoZSB0ZW5zb3IgYCArXG4gICAgICAgICAgICAgICAgYCR7YXhpc31gKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSA0OlxuICAgICAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gc2xpY2VBbG9uZ0ZpcnN0QXhpcyhhcnJheSwgc3RhcnQsIHNpemUpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiB0ZmMuc2xpY2U0ZChcbiAgICAgICAgICAgICAgICBhcnJheSBhcyBUZW5zb3I0RCwgWzAsIHN0YXJ0LCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbYXJyYXkuc2hhcGVbMF0sIHNpemUsIGFycmF5LnNoYXBlWzJdLCBhcnJheS5zaGFwZVszXV0pO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiB0ZmMuc2xpY2U0ZChcbiAgICAgICAgICAgICAgICBhcnJheSBhcyBUZW5zb3I0RCwgWzAsIDAsIHN0YXJ0LCAwXSxcbiAgICAgICAgICAgICAgICBbYXJyYXkuc2hhcGVbMF0sIGFycmF5LnNoYXBlWzFdLCBzaXplLCBhcnJheS5zaGFwZVszXV0pO1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiBzbGljZUFsb25nTGFzdEF4aXMoYXJyYXksIHN0YXJ0LCBzaXplKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBheGlzIGlzIG5vdCB3aXRoaW4gdGhlIHJhbmsgb2YgdGhlIHRlbnNvciBgICtcbiAgICAgICAgICAgICAgICBgJHtheGlzfWApO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBzbGljZUFsb25nTGFzdEF4aXMoKSByZWNlaXZlZCBhbiB1bnN1cHBvcnRlZCB0ZW5zb3IgcmFuazogYCArXG4gICAgICAgICAgICBgJHthcnJheS5yYW5rfWApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ29uY2F0ZW5hdGVzIGEgbGlzdCBvZiB0ZW5zb3JzIGFsb25nc2lkZSB0aGUgc3BlY2lmaWVkIGF4aXMuXG4gKiBAcGFyYW0gdGVuc29ycyBgQXJyYXlgIG9mIHRlbnNvcnMgdG8gY29uY2F0ZW5hdGUuXG4gKiBAcGFyYW0gYXhpcyBDb25jYXRlbmF0aW9uIGF4aXMuXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBjb25jYXRlbmF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGUodGVuc29yczogVGVuc29yW10sIGF4aXMgPSAtMSk6IFRlbnNvciB7XG4gIGxldCByYW5rOiBudW1iZXI7XG4gIGlmIChheGlzIDwgMCkge1xuICAgIHJhbmsgPSB0ZW5zb3JzWzBdLnJhbms7XG4gICAgaWYgKHJhbmsgIT09IDApIHtcbiAgICAgIGF4aXMgPSByYW5rO1xuICAgIH0gZWxzZSB7XG4gICAgICBheGlzID0gMDtcbiAgICB9XG4gIH1cbiAgaWYgKGF4aXMgPT09IHRlbnNvcnNbMF0ucmFuaykge1xuICAgIC8vIFBvcnRpbmcgTm90ZTogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSB0ZmMuY29uY2F0KCkgcmVxdWlyZXMgYXhpcyB0byBiZVxuICAgIC8vICAgaW4gdGhlIGludGVydmFsIFstcmFuaywgcmFuaykuXG4gICAgYXhpcyA9IC0xO1xuICB9XG4gIC8vIFBvcnRpbmcgTm90ZTogU3BhcnNlIGNvbmNhdCBpcyBub3Qgc3VwcG9ydGVkIHlldC5cbiAgcmV0dXJuIHRmYy5jb25jYXQodGVuc29ycywgYXhpcyk7XG59XG5cbi8qKlxuICogQ29uY2F0ZW5hdGUgdHdvIGFycmF5cyBhbG9uZyB0aGUgZmlyc3QgZGltZW5zaW9uLlxuICogQHBhcmFtIGEgVGhlIDFzdCBgdGYuVGVuc29yYCB0byBjb25jYXRlbmF0ZS5cbiAqIEBwYXJhbSBiIFRoZSAybmQgYHRmLlRlbnNvcmAgdG8gY29uY2F0ZW5hdGUuXG4gKiBAcmV0dXJucyBSZXN1bHQgb2YgdGhlIGNvbmNhdGVuYXRpb24uXG4gKiBAdGhyb3dzIFZhbHVlRXJyb3I6IElmIGBhYCBpcyBvZiBhbiB1bnN1cHBvcnRlZCBzdWJ0eXBlIG9mIGB0Zi5UZW5zb3JgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0QWxvbmdGaXJzdEF4aXMoYTogVGVuc29yLCBiOiBUZW5zb3IpOiBUZW5zb3Ige1xuICBzd2l0Y2ggKGEucmFuaykge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB0ZmMuY29uY2F0MWQoW2EgYXMgVGVuc29yMUQsIGIgYXMgVGVuc29yMURdKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gdGZjLmNvbmNhdDJkKFthIGFzIFRlbnNvcjJELCBiIGFzIFRlbnNvcjJEXSwgMCk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHRmYy5jb25jYXQzZChbYSBhcyBUZW5zb3IzRCwgYiBhcyBUZW5zb3IzRF0sIDApO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiB0ZmMuY29uY2F0NGQoW2EgYXMgVGVuc29yNEQsIGIgYXMgVGVuc29yNERdLCAwKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYGNvbmNhdEFsb25nRmlyc3RBeGlzKCkgcmVjZWl2ZWQgYW4gdW5zdXBwb3J0ZWQgYCArXG4gICAgICAgICAgYHRlbnNvciByYW5rOiAke2EucmFua31gKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0ZW5zb3IgYnkgdGlsaW5nIGB4YCBieSBgbmAuXG4gKiBAcGFyYW0geCBBIHRlbnNvci5cbiAqIEBwYXJhbSBuIEFuIEFycmF5IG9mIGludGVnZXJzIG9yIGEgc2luZ2xlIGludGVnZXIuIElmIGFuIEFycmF5LCB0aGUgbGVuZ3RoXG4gKiAgIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhlIG51bWJlciBvZiBkaW1lbnNpb25zIGluIGB4YC4gSWYgYSBzaW5nbGUgaW50ZWdlcixcbiAqICAgaXQgd2lsbCBiZSB0cmVhdGVkIGFzIGFuIEFycmF5IG9mIGxlbmd0aCAxLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGlsZSh4OiBUZW5zb3IsIG46IG51bWJlcnxudW1iZXJbXSk6IFRlbnNvciB7XG4gIGlmICghQXJyYXkuaXNBcnJheShuKSkge1xuICAgIG4gPSBbbl07XG4gIH1cbiAgaWYgKHgucmFuayAhPT0gbi5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgYFRoZSBsZW5ndGggb2YgaW5wdXQgbiAoJHtuLmxlbmd0aH0pIGRvZXMgbm90IG1hdGNoIGAgK1xuICAgICAgICBgdGhlIG51bWJlciBvZiBkaW1lbnNpb25zIGluIGlucHV0IHggKCR7eC5yYW5rfSlgKTtcbiAgfVxuICByZXR1cm4gdGZjLnRpbGUoeCwgbik7XG59XG5cbi8qIENyZWF0aW9uIG9mIHJhbmRvbSB0ZW5zb3JzLiAqL1xuXG4vKipcbiAqIEdldCBhIHRlbnNvciB3aXRoIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSBzaGFwZSBTaGFwZSBvZiB0aGUgdGVuc29yLlxuICogQHBhcmFtIG1lYW4gbWVhbiB2YWx1ZSBvZiB0aGUgbm9ybWFsIGRpc3RyaWJ1dGlvbi5cbiAqIEBwYXJhbSBzdGRkZXYgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSBub3JtYWwgZGlzdHJpYnV0aW9uLlxuICogQHBhcmFtIGR0eXBlXG4gKiBAcGFyYW0gc2VlZFxuICogQHJldHVybiBUaGUgbm9ybWFsIHRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU5vcm1hbChcbiAgICBzaGFwZTogU2hhcGUsIG1lYW4gPSAwLjAsIHN0ZGRldiA9IDEuMCwgZHR5cGU/OiAnZmxvYXQzMid8J2ludDMyJyxcbiAgICBzZWVkPzogbnVtYmVyKTogVGVuc29yIHtcbiAgcmV0dXJuIHRmYy5yYW5kb21Ob3JtYWwoc2hhcGUsIG1lYW4sIHN0ZGRldiwgZHR5cGUsIHNlZWQpO1xufVxuXG4vKiBMaW5lYXIgQWxnZWJyYSAqL1xuXG4vKipcbiAqIE11bHRpcGx5IHR3byB0ZW5zb3JzIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSB0ZW5zb3IuXG4gKlxuICogRm9yIDJEIHRlbnNvcnMsIHRoaXMgaXMgZXF1aXZhbGVudCB0byBtYXRyaXggbXVsdGlwbGljYXRpb24gKG1hdE11bCkuXG4gKiBGb3IgdGVuc29ycyBvZiBoaWdoZXIgcmFua3MsIGl0IGZvbGxvd3MgdGhlIFRoZWFubyBiZWhhdmlvcixcbiAqIChlLmcuIGAoMiwgMykgKiAoNCwgMywgNSkgLT4gKDIsIDQsIDUpYCkuICBGcm9tIHRoZSBUaGVhbm8gZG9jdW1lbnRhdGlvbjpcbiAqXG4gKiBGb3IgTiBkaW1lbnNpb25zIGl0IGlzIGEgc3VtIHByb2R1Y3Qgb3ZlciB0aGUgbGFzdCBheGlzIG9mIHggYW5kIHRoZVxuICogc2Vjb25kLXRvLWxhc3Qgb2YgeTpcbiAqXG4gKiBAcGFyYW0gYSBBIHRlbnNvciBvZiBhdCBsZWFzdCByYW5rIDIuXG4gKiBAcGFyYW0gYiBBIHRlbnNvciBvZiBhdCBsZWFzdCByYW5rIDIuXG4gKiBAcGFyYW0gYWN0aXZhdGlvbiAob3B0aW9uYWwpIEEgc3RyaW5nIGlkZW50aWZ5aW5nIHRoZSBhY3RpdmF0aW9uXG4gKiAgIGZ1bmN0aW9uLlxuICogQHJldHVybiBSZXN1bHQgb2YgdGhlIGRvdCBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb3QoXG4gICAgYTogVGVuc29yLCBiOiBUZW5zb3IsIGFjdGl2YXRpb24/OiB0ZmMuZnVzZWQuQWN0aXZhdGlvbixcbiAgICBiaWFzPzogVGVuc29yKTogVGVuc29yIHtcbiAgaWYgKChhLnJhbmsgPCAyKSB8fCAoYi5yYW5rIDwgMikpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgYGRvdCByZXF1aXJlcyBib3RoIGlucHV0cyB0byBiZSByYW5rID49IDJgICtcbiAgICAgICAgYCBidXQgZ290IHggc2hhcGUgPSAke2Euc2hhcGV9IGFuZCB5IHNoYXBlID0gJHtiLnNoYXBlfWApO1xuICB9XG4gIGlmIChiLnJhbmsgPj0gMykge1xuICAgIGNvbnN0IHhMYXN0RGltID0gYS5zaGFwZS5zbGljZSgtMSlbMF07XG4gICAgY29uc3QgeVNlY29uZExhc3REaW0gPSBiLnNoYXBlLnNsaWNlKC0yKVswXTtcbiAgICBpZiAoeExhc3REaW0gIT09IHlTZWNvbmRMYXN0RGltKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICBgSWYgcmFuayB5ID49IDMsIHRoZW4gdGhlIHNlY29uZCBsYXN0IGRpbWAgK1xuICAgICAgICAgIGAgb2YgeSBtdXN0IGVxdWFsIHRoZSBsYXN0IGRpbSBvZiB4IGJ1dCBnb3QgeCBzaGFwZSA9ICR7XG4gICAgICAgICAgICAgIGEuc2hhcGV9IGFuZCBgICtcbiAgICAgICAgICBgIHkgc2hhcGUgPSAke2Iuc2hhcGV9YCk7XG4gICAgfVxuICB9XG4gIC8vIEhhbmRsZSBiYXNpYyAyRCB4IDJEIGNhc2UuXG4gIGlmICgoYS5yYW5rID09PSAyKSAmJiAoYi5yYW5rID09PSAyKSkge1xuICAgIGNvbnN0IHRyYW5zcG9zZUEgPSBmYWxzZTtcbiAgICBjb25zdCB0cmFuc3Bvc2VCID0gZmFsc2U7XG4gICAgLy8gdGZjLmZ1c2VkLm1hdE11bCBvbmx5IGZ1c2VzIGNlcnRhaW4gYWN0aXZhdGlvbiBmdW5jdGlvbnMuIFVuc3VwcG9ydGVkXG4gICAgLy8gYWN0aXZhdGlvbiBmdW5jdGlvbnMgYXJlIHRyZWF0ZWQgYXMgJ2xpbmVhcicgYWN0aXZhdGlvbnMsIHdoaWNoIGlzXG4gICAgLy8gZXF1aXZhbGVudCB0byBhIG5vLW9wLlxuICAgIHJldHVybiB0ZmMuZnVzZWQubWF0TXVsKHtcbiAgICAgIGEsXG4gICAgICBiOiBiIGFzIFRlbnNvcjJELFxuICAgICAgdHJhbnNwb3NlQSxcbiAgICAgIHRyYW5zcG9zZUIsXG4gICAgICBiaWFzOiBiaWFzID8gcmVzaGFwZUJpYXMoYS5yYW5rLCBiaWFzLCBpbWFnZURhdGFGb3JtYXQoKSkgOiBudWxsLFxuICAgICAgYWN0aXZhdGlvblxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlc2hhcGUgeCBpbnRvIHRoZSBhbmFsb2dvdXMgMkQgVGVuc29yLlxuICAgIGNvbnN0IGFGaXJzdERpbXMgPSBhLnNoYXBlLnNsaWNlKCk7ICAvLyBIb2xkcyBhbGwgYnV0IHRoZSBsYXN0IGRpbSBvZiB4LlxuICAgIGNvbnN0IGFMYXN0RGltID0gYUZpcnN0RGltcy5wb3AoKTtcbiAgICBhID0gdGZjLnJlc2hhcGUoYSwgWy0xLCBhTGFzdERpbV0pO1xuXG4gICAgLy8gUmVzaGFwZSB5IGludG8gdGhlIGFuYWxvZ291cyAyRCBUZW5zb3IsIGFuZCBrZWVwIHRyYWNrIG9mIHRoZVxuICAgIC8vIHJlcXVpcmVkIGRpbWVuc2lvbnMgdG8gcmVwcm9kdWNlIHRoZSBvdXRwdXQgc2hhcGUuXG4gICAgY29uc3QgYlNoYXBlID0gYi5zaGFwZS5zbGljZSgpO1xuICAgIGNvbnN0IGJMYXN0RGltID0gYlNoYXBlLnBvcCgpO1xuICAgIGNvbnN0IHlTZWNvbmRMYXN0RGltID0gYlNoYXBlLnBvcCgpO1xuICAgIGNvbnN0IHlPdGhlckRpbXMgPSBbLi4uYlNoYXBlLCBiTGFzdERpbV07XG4gICAgLy8gcGVybXV0YXRpb24gc2hvdWxkIGJlIGxpa2UgW3ItMiwgMCwgMSwgMiwgLi4uIHItNCwgci0zLCByLTFdXG4gICAgLy8gd2hlcmUgciBpcyB0aGUgcmFuayBvZiB5LlxuICAgIGNvbnN0IHBlcm0gPSBBcnJheS5mcm9tKHtsZW5ndGg6IGIucmFua30sIChfLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYi5yYW5rIC0gMjtcbiAgICAgIH0gZWxzZSBpZiAoaSA8PSBiLnJhbmsgLSAyKSB7XG4gICAgICAgIHJldHVybiBpIC0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICAgIGIgPSB0ZmMucmVzaGFwZSh0ZmMudHJhbnNwb3NlKGIsIHBlcm0pLCBbeVNlY29uZExhc3REaW0sIC0xXSk7XG5cbiAgICAvLyBNdWx0aXBseSB4IGFuZCB5IGFzIDJEIFRlbnNvcnMsIGFuZCB0aGVuIHJlc2hhcGUgYmFjayB0byBvcmlnaW5hbC5cbiAgICBjb25zdCBvdXRwdXRTaGFwZSA9IFsuLi5hRmlyc3REaW1zLCAuLi55T3RoZXJEaW1zXTtcbiAgICBjb25zdCB0cmFuc3Bvc2VBID0gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNwb3NlQiA9IGZhbHNlO1xuICAgIHJldHVybiB0ZmMucmVzaGFwZShcbiAgICAgICAgdGZjLmZ1c2VkLm1hdE11bCh7XG4gICAgICAgICAgYSxcbiAgICAgICAgICBiLFxuICAgICAgICAgIHRyYW5zcG9zZUEsXG4gICAgICAgICAgdHJhbnNwb3NlQixcbiAgICAgICAgICBiaWFzOiBiaWFzID8gcmVzaGFwZUJpYXMoYS5yYW5rLCBiaWFzLCBpbWFnZURhdGFGb3JtYXQoKSkgOiBudWxsLFxuICAgICAgICAgIGFjdGl2YXRpb25cbiAgICAgICAgfSksXG4gICAgICAgIG91dHB1dFNoYXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXB1dGUgdGhlIHNpZ24gVGVuc29yIG9mIGFuIGlucHV0IFRlbnNvci5cbiAqXG4gKiBFbGVtZW50cyBvZiB0aGUgaW5wdXQgYHRmLlRlbnNvcmAgdGhhdCBhcmUgPT09IDAgYXJlIG1hcHBlZCB0byAwLlxuICogRWxlbWVudHMgb2YgdGhlIGlucHV0IGB0Zi5UZW5zb3JgIHRoYXQgYXJlID4gMCBhcmUgbWFwcGVkIHRvIDEuXG4gKiBFbGVtZW50cyBvZiB0aGUgaW5wdXQgYHRmLlRlbnNvcmAgdGhhdCBhcmUgPCAwIGFyZSBtYXBwZWQgdG8gLTEuXG4gKlxuICogQHBhcmFtIHggSW5wdXQgYHRmLlRlbnNvcmAuXG4gKiBAcmV0dXJuIFRoZSBzaWduIGB0Zi5UZW5zb3JgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbih4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAvLyBUT0RPKGNhaXMpOiBNb3ZlIHRvIHRoZSBjb3JlLlxuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY29uc3QgemVyb3NMaWtlWCA9IGNvcmVaZXJvc0xpa2UoeCk7XG4gICAgY29uc3Qgb25lc0xpa2VYID0gY29yZU9uZXNMaWtlKHgpO1xuICAgIHJldHVybiB3aGVyZShcbiAgICAgICAgdGZjLmVxdWFsKHgsIHplcm9zTGlrZVgpLCB6ZXJvc0xpa2VYLFxuICAgICAgICB3aGVyZShcbiAgICAgICAgICAgIHRmYy5ncmVhdGVyKHgsIGNvcmVaZXJvc0xpa2UoeCkpLCBvbmVzTGlrZVgsXG4gICAgICAgICAgICB0ZmMubXVsKC0xLCBvbmVzTGlrZVgpKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBvbmUtaG90IHJlcHJlc2VudGF0aW9uIG9mIGFuIGludGVnZXIgdGVuc29yLlxuICogQHBhcmFtIGluZGljZXMgbkQgaW50ZWdlciB0ZW5zb3Igb2Ygc2hhcGVcbiAqICAgYChiYXRjaF9zaXplLCBkaW0xLCBkaW0yLCAuLi4gZGltKG4tMSkpYFxuICogQHBhcmFtIG51bUNsYXNzZXMgSW50ZWdlciwgbnVtYmVyIG9mIGNsYXNzZXMgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJucyAobiArIDEpRCBvbmUgaG90IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbnB1dFxuICogICB3aXRoIHNoYXBlIGAoYmF0Y2hfc2l6ZSwgZGltMSwgZGltMiwgLi4uIGRpbShuLTEpLCBudW1fY2xhc3NlcylgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmVIb3QoaW5kaWNlczogVGVuc29yLCBudW1DbGFzc2VzOiBudW1iZXIpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKGluZGljZXMucmFuayAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdPbmx5IDFEIG9uZS1ob3QgdGVuc29ycyBhcmUgc3VwcG9ydGVkIGluIHRoZSAnICtcbiAgICAgICAgICAnZGVlcGxlYXJuIGJhY2tlbmQsIGF0IHByZXNlbnQuJyk7XG4gICAgfVxuICAgIGluZGljZXMgPSB0ZmMuY2FzdChpbmRpY2VzLCAnaW50MzInKTtcbiAgICByZXR1cm4gdGZjLmNhc3QodGZjLm9uZUhvdChpbmRpY2VzIGFzIFRlbnNvcjFELCBudW1DbGFzc2VzKSwgJ2Zsb2F0MzInKTtcbiAgfSk7XG59XG5cbi8qIEVsZW1lbnRhcnkgbWF0aCBmdW5jdGlvbnMuICovXG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBlbGVtZW50cyBvZiBpbmRpY2VzIGBpbmRpY2VzYCBpbiB0aGUgdGVuc29yIGByZWZlcmVuY2VgLlxuICogQHBhcmFtIHJlZmVyZW5jZSBBIHRlbnNvci5cbiAqIEBwYXJhbSBpbmRpY2VzIEFuIGludGVnZXIgdGVuc29yIG9mIGluZGljZXMgb3IgYW4gYEFycmF5YCBvZiBpbnRlZ2Vycy5cbiAqIEBwYXJhbSBheGlzIEF4aXMgYWxvbmcgd2hpY2ggdG8gcGVyZm9ybSB0aGUgZ2F0aGVyIG9wZXJhdGlvbi5cbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIGdhdGhlcmluZyBhcyBhIHRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdhdGhlcihcbiAgICByZWZlcmVuY2U6IFRlbnNvciwgaW5kaWNlczogbnVtYmVyW118VGVuc29yMUQsIGF4aXM/OiBudW1iZXIpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5kaWNlcykpIHtcbiAgICAgIGluZGljZXMgPSB0ZW5zb3IxZChpbmRpY2VzLCAnaW50MzInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kaWNlcyA9IHRmYy5jYXN0KGluZGljZXMsICdpbnQzMicpO1xuICAgIH1cbiAgICByZXR1cm4gdGZjLmdhdGhlcihyZWZlcmVuY2UsIGluZGljZXMsIGF4aXMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFbGVtZW50LXdpc2Ugc3F1YXJlLlxuICogQHBhcmFtIHggSW5wdXQgdGVuc29yLlxuICogQHJldHVybiBlbGVtZW50LXdpc2UgeF4yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIHRmYy5tdWwoeCwgeCk7XG59XG5cbi8qKlxuICogRWxlbWVudC13aXNlIGV4cG9uZW50aWF0aW9uLlxuICpcbiAqIFBvcnRpbmcgTm90ZTogSW4gUHlLZXJhcywgYGFgICh0aGUgZXhwb25lbnQpIGlzIGEgUHl0aG9uIGludGVnZXIsIHdoaWNoXG4gKiAgIHRha2VzIGFkdmF0bmFnZSBvZiB0aGUgYmFja2VuZCdzIChlLmcuLCBUZW5zb3JGbG93J3MpIGF1dG9tYXRpY1xuICogY29udmVyc2lvbiB0byB0ZW5zb3IuIEhlcmUgd2UgYWxsb3cgYGFgIHRvIGJlIGVpdGhlciBhIG51bWJlciBvciBhIHRlbnNvci5cbiAqXG4gKiBAcGFyYW0geCBUaGUgYmFzZSB0ZW5zb3IuXG4gKiBAcGFyYW0gYSBUaGUgZXhwb25lbnQsIHRlbnNvciBvciBudW1iZXIuIElmIGEgbnVtYmVyLCBpdCBpcyByb3VuZGVkIHRvIHRoZVxuICogICBuZWFyZXN0IGludGVnZXIgYW5kIGNvbnZlcnRlZCB0byBhIHRlbnNvci5cbiAqIEByZXR1cm5zIEEgdGVuc29yIG9mIHRoZSBzYW1lIHNoYXBlIGFzIGB4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvdyh4OiBUZW5zb3IsIGE6IFRlbnNvcnxudW1iZXIpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiAoYSkgPT09ICdudW1iZXInKSB7XG4gICAgICBhID0gc2NhbGFyKE1hdGgucm91bmQoYSksICdpbnQzMicpO1xuICAgIH1cbiAgICBpZiAoYS5kdHlwZSAhPT0gJ2ludDMyJykge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgYE5vbi1pbnQzMiBkdHlwZSAoJHthLmR0eXBlfSkgaXMgbm90IHN1cHBvcnRlZCBieSBwb3coKSB5ZXRgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRmYy5wb3coeCwgYSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlc2hhcGVzIGJpYXMgdGVuc29yIGFjY29yZGluZyB0byByYW5rIG9mIHguXG4gKi9cbmZ1bmN0aW9uIHJlc2hhcGVCaWFzKHhSYW5rOiBudW1iZXIsIGJpYXM6IFRlbnNvciwgZGF0YUZvcm1hdDogc3RyaW5nKSB7XG4gIGNvbnN0IGJpYXNTaGFwZSA9IGJpYXMuc2hhcGU7XG5cbiAgaWYgKGJpYXMucmFuayAhPT0gMSAmJiBiaWFzLnJhbmsgIT09IHhSYW5rKSB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGJpYXMgZGltZW5zaW9uczogJHtiaWFzLnJhbmt9YCArXG4gICAgICAgIGA7IGV4cGVjdGVkIGl0IHRvIGJlIDEgb3IgJHt4UmFua31gKTtcbiAgfVxuXG4gIGlmICh4UmFuayA9PT0gNSkge1xuICAgIGlmIChkYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcpIHtcbiAgICAgIGlmIChiaWFzU2hhcGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0ZmMucmVzaGFwZShiaWFzLCBbMSwgYmlhc1NoYXBlWzBdLCAxLCAxLCAxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGZjLnJlc2hhcGUoXG4gICAgICAgICAgICBiaWFzLCBbMSwgYmlhc1NoYXBlWzNdLCBiaWFzU2hhcGVbMF0sIGJpYXNTaGFwZVsxXSwgYmlhc1NoYXBlWzJdXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNMYXN0Jykge1xuICAgICAgaWYgKGJpYXNTaGFwZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRmYy5yZXNoYXBlKGJpYXMsIFsxLCAxLCAxLCAxLCBiaWFzU2hhcGVbMF1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZmMucmVzaGFwZShiaWFzLCBbMV0uY29uY2F0KGJpYXNTaGFwZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh4UmFuayA9PT0gNCkge1xuICAgIGlmIChkYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcpIHtcbiAgICAgIGlmIChiaWFzU2hhcGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0ZmMucmVzaGFwZShiaWFzLCBbMSwgYmlhc1NoYXBlWzBdLCAxLCAxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGZjLnJlc2hhcGUoYmlhcywgWzEsIGJpYXNTaGFwZVsyXSwgYmlhc1NoYXBlWzBdLCBiaWFzU2hhcGVbMV1dKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnKSB7XG4gICAgICBpZiAoYmlhc1NoYXBlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdGZjLnJlc2hhcGUoYmlhcywgWzEsIDEsIDEsIGJpYXNTaGFwZVswXV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRmYy5yZXNoYXBlKGJpYXMsIFsxXS5jb25jYXQoYmlhc1NoYXBlKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHhSYW5rID09PSAzKSB7XG4gICAgaWYgKGRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0Jykge1xuICAgICAgaWYgKGJpYXNTaGFwZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRmYy5yZXNoYXBlKGJpYXMsIFsxLCBiaWFzU2hhcGVbMF0sIDFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0ZmMucmVzaGFwZShiaWFzLCBbMSwgYmlhc1NoYXBlWzFdLCBiaWFzU2hhcGVbMF1dKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnKSB7XG4gICAgICBpZiAoYmlhc1NoYXBlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdGZjLnJlc2hhcGUoYmlhcywgWzEsIDEsIGJpYXNTaGFwZVswXV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRmYy5yZXNoYXBlKGJpYXMsIFsxXS5jb25jYXQoYmlhc1NoYXBlKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHhSYW5rIDwgMykge1xuICAgIHJldHVybiBiaWFzO1xuICB9XG4gIHRocm93IG5ldyBWYWx1ZUVycm9yKGBVbnN1cHBvcnRlZCBpbnB1dCByYW5rIGJ5IGJpYXNBZGQ6ICR7Ymlhcy5yYW5rfWApO1xufVxuXG4vKiBOZXVyYWwtbmV0d29yayBvcGVyYXRpb25zLiAqL1xuXG4vKipcbiAqIEFkZCBhIGJpYXMgdG8gYSB0ZW5zb3IuXG4gKlxuICogQHBhcmFtIHggVGhlIHRlbnNvciB0byBhZGQgdGhlIGJpYXMgdG8uXG4gKiBAcGFyYW0gYmlhcyBUaGUgYmlhcyB0byBhZGQgdG8gYHhgLiBNdXN0IGJlIDFEIG9yIHRoZSBzYW1lIHJhbmsgYXMgYHhgLlxuICogQHJldHVybiBSZXN1bHQgb2YgdGhlIGJpYXMgYWRkaW5nLlxuICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiB0aGUgcmFuayBvZiBgYmlhc2AgaXMgaW5jb3JyZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmlhc0FkZChcbiAgICB4OiBUZW5zb3IsIGJpYXM6IFRlbnNvciwgZGF0YUZvcm1hdD86IERhdGFGb3JtYXQpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKGRhdGFGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgZGF0YUZvcm1hdCA9IGltYWdlRGF0YUZvcm1hdCgpO1xuICAgIH1cbiAgICBjaGVja0RhdGFGb3JtYXQoZGF0YUZvcm1hdCk7XG5cbiAgICByZXR1cm4gdGZjLmFkZCh4LCByZXNoYXBlQmlhcyh4LnJhbmssIGJpYXMsIGRhdGFGb3JtYXQpKTtcbiAgfSk7XG59XG5cbi8qKlxuICogRXhwb25lbnRpYWwgbGluZWFyIHVuaXQgKEVMVSkuXG4gKiBAcGFyYW0geCBBIHRlbnNvciBvciB2YXJpYWJsZSB0byBjb21wdXRlIHRoZSBhY3RpdmF0aW9uIGZ1bmN0aW9uIGZvci5cbiAqIEBwYXJhbSBhbHBoYTogQSBzY2FsYXIsIGEgc2NhbGluZyBmYWN0b3IgZm9yIHRoZSBuZWdhdGl2ZSBzZWN0aW9uLlxuICogQHJldHVybiBPdXRwdXQgb2YgdGhlIEVMVSBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbHUoeDogVGVuc29yLCBhbHBoYSA9IDEpOiBUZW5zb3Ige1xuICAvLyBUT0RPKGNhaXMpOiBBZGQgc3VwcG9ydCBmb3IgYWxwaGEgdmFsdWVzIG90aGVyIHRoYW4gMS5cbiAgaWYgKGFscGhhICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgIGBTdXBwb3J0IGZvciBhbHBoYSB2YWx1ZXMgb3RoZXIgdGhhbiAxICgke2FscGhhfSkgaXMgbm90IGltcGxlbWVudGVkIGAgK1xuICAgICAgICBgeWV0LmApO1xuICB9XG4gIHJldHVybiB0ZmMuZWx1KHgpO1xufVxuXG4vKipcbiAqIFNvZnRzaWduIG9mIGEgdGVuc29yLlxuICpcbiAqIERlZmluZWQgYXMgeCAvIChhYnMoeCkgKyAxKSwgZWxlbWVudC13aXNlLlxuICpcbiAqIEBwYXJhbSB4OiBJbnB1dC5cbiAqIEByZXR1cm5zIE91dHB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvZnRzaWduKHg6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHRmYy5kaXYoeCwgdGZjLmFkZCh0ZmMuYWJzKHgpLCAxKSkpO1xufVxuXG4vKipcbiAqIFNldHMgZW50cmllcyBpbiBgeGAgdG8gemVybyBhdCByYW5kb20sIHdoaWxlIHNjYWxpbmcgdGhlIGVudGlyZSB0ZW5zb3IuXG4gKlxuICogQHBhcmFtIHggaW5wdXQgdGVuc29yLlxuICogQHBhcmFtIGxldmVsIGZyYWN0aW9uIG9mIHRoZSBlbnRyaWVzIGluIHRoZSB0ZW5zb3IgdGhhdCB3aWxsIGJlIHNldCB0byAwLlxuICogQHBhcmFtIG5vaXNlU2hhcGUgc2hhcGUgb2YgcmFuZG9tbHkgZ2VuZXJhdGVkIGtlZXAvZHJvcCBmbGFncywgbXVzdCBiZVxuICogICBicm9hZGNhc3RhYmxlIHRvIHRoZSBzaGFwZSBvZiBgeGAuIE9wdGlvbmFsLlxuICogQHBhcmFtIHNlZWQgcmFuZG9tIHNlZWQgdG8gZW5zdXJlIGRldGVybWluaXNtLiBPcHRpb25hbC5cbiAqIEByZXR1cm5zIFJlc3VsdCBvZiB0aGUgZHJvcG91dCBvcGVyYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcm9wb3V0KFxuICAgIHg6IFRlbnNvciwgbGV2ZWw6IG51bWJlciwgbm9pc2VTaGFwZT86IG51bWJlcltdLCBzZWVkPzogbnVtYmVyKTogVGVuc29yIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4gdGZjLmRyb3BvdXQoeCwgbGV2ZWwsIG5vaXNlU2hhcGUsIHNlZWQpKTtcbn1cblxuLyoqXG4gKiBFbGVtZW50LXdpc2UsIHNlZ21lbnQtd2lzZSBsaW5lYXIgYXBwcm94aW1hdGlvbiBvZiBzaWdtb2lkLlxuICpcbiAqIFJldHVybnMgYDAuYCBpZiBgeCA8IC0yLjVgLCBgMS5gIGlmIGB4ID4gMi41YC5cbiAqIEluIGAtMi41IDw9IHggPD0gMi41YCwgcmV0dXJucyBgMC4yICogeCArIDAuNWAuXG4gKlxuICogQHBhcmFtIHggSW5wdXQgdGVuc29yLlxuICogQHJldHVybnMgT3V0cHV0IHRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhcmRTaWdtb2lkKHg6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCB5ID0gdGZjLmFkZCguNSwgdGZjLm11bCguMiwgeCkpO1xuICAgIHJldHVybiB0ZmMuY2xpcEJ5VmFsdWUoeSwgMCwgMSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEludm9rZSBgeGAgaW4gdGhlIHRyYWluaW5nIHBoYXNlLCBhbmQgYGFsdGAgb3RoZXJ3aXNlLlxuICpcbiAqIFBvcnRpbmcgTm90ZTogV2UgZG8gbm90IGNyZWF0ZSBwbGFjZWhvbGRlciB0ZW5zb3JzIGZvciB0aGUgYHRyYWluaW5nYFxuICogYm9vbGVhbiBmbGFnIGhlcmUsIGJlY2F1c2UgdGhlcmUgaXMgbm8gc3VjaCB0aGluZyBpbiB0aGUgVEYuanMgaW1wZXJhdGl2ZVxuICogYmFja2VuZC5cbiAqXG4gKiBAcGFyYW0geCBUaGUgZnVuY3Rpb24gdG8gaW52b2tlIGlmZiBgdHJhaW5pbmdgIGlzIGB0cnVlYC5cbiAqIEBwYXJhbSBhbHQgVGhlIGZ1bmN0aW9uIHRvIGludm9rZSBpZmYgYHRyYWluaW5nYCBpcyBgZmFsc2VgLlxuICogQHBhcmFtIHRyYWluaW5nIEJvb2xlYW4gZmxhZyBmb3Igd2hldGhlciB0cmFpbmluZyBwaGFzZSBpcyBhY3RpdmUuXG4gKiBAcmV0dXJucyBUaGUgcmV0dXJuIHZhbHVlIG9mIGB4KClgIGlmIGB0cmFpbmluZ2AgaXMgYHRydWVgLCBvciB0aGUgcmV0dXJuXG4gKiAgIHZhbHVlIG9mIGBhbHQoKWAgaWYgYHRyYWluaW5nYCBpcyBgZmFsc2VgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5UcmFpblBoYXNlPFQ+KHg6ICgpID0+IFQsIGFsdDogKCkgPT4gVCwgdHJhaW5pbmcgPSBmYWxzZSk6IFQge1xuICByZXR1cm4gdHJhaW5pbmcgPyB4KCkgOiBhbHQoKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/random_seed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2023 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /**
 * Keeps track of seed and handles pseudorandomness
 * Instance created in BaseRandomLayer class
 * Utilized for random preprocessing layers
 */ __turbopack_context__.s([
    "RandomSeed",
    ()=>RandomSeed
]);
class RandomSeed {
    constructor(seed){
        this.seed = seed;
    }
    next() {
        if (this.seed === undefined) {
            return undefined;
        }
        return this.seed++;
    }
}
RandomSeed.className = 'RandomSeed';
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tX3NlZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvYmFja2VuZC9yYW5kb21fc2VlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOzs7O0dBSUc7QUFFSCxNQUFhLFVBQVU7SUFHckIsWUFBWSxJQUF3QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztBQVZNLG9CQUFTLEdBQUcsWUFBWSxDQUFDO1NBRHJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBDb2RlU21pdGggTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHNlZWQgYW5kIGhhbmRsZXMgcHNldWRvcmFuZG9tbmVzc1xuICogSW5zdGFuY2UgY3JlYXRlZCBpbiBCYXNlUmFuZG9tTGF5ZXIgY2xhc3NcbiAqIFV0aWxpemVkIGZvciByYW5kb20gcHJlcHJvY2Vzc2luZyBsYXllcnNcbiAqL1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tU2VlZCB7XG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnUmFuZG9tU2VlZCc7XG4gIHNlZWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgY29uc3RydWN0b3Ioc2VlZDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7IFxuICAgIHRoaXMuc2VlZCA9IHNlZWQ7IFxuICB9XG4gIG5leHQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHsgXG4gICAgaWYgKHRoaXMuc2VlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWVkKys7IFxuICB9XG59XG4iXX0=
}),
];

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-layers_dist_backend_eb83a5fe._.js.map