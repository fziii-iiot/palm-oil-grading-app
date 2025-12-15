(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/serialization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original Source layers/__init__.py */ __turbopack_context__.s([
    "deserialize",
    ()=>deserialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
;
;
function deserialize(config, customObjects = {}, fastWeightInit = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserializeKerasObject"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].SerializationMap.getMap().classNameMap, customObjects, 'layer', fastWeightInit);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvc2VyaWFsaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILHdDQUF3QztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQ3ZCLE1BQWdDLEVBQ2hDLGdCQUFnQixFQUE4QixFQUM5QyxjQUFjLEdBQUcsS0FBSztJQUN4QixPQUFPLHNCQUFzQixDQUN6QixNQUFNLEVBQUUsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFDNUQsYUFBYSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyogT3JpZ2luYWwgU291cmNlIGxheWVycy9fX2luaXRfXy5weSAqL1xuaW1wb3J0IHtzZXJpYWxpemF0aW9ufSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge2Rlc2VyaWFsaXplS2VyYXNPYmplY3R9IGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuXG4vKipcbiAqIEluc3RhbnRpYXRlIGEgbGF5ZXIgZnJvbSBhIGNvbmZpZyBkaWN0aW9uYXJ5LlxuICogQHBhcmFtIGNvbmZpZyBkaWN0IG9mIHRoZSBmb3JtIHtjbGFzc19uYW1lOiBzdHIsIGNvbmZpZzogZGljdH1cbiAqIEBwYXJhbSBjdXN0b21PYmplY3RzIGRpY3QgbWFwcGluZyBjbGFzcyBuYW1lcyAob3IgZnVuY3Rpb24gbmFtZXMpXG4gKiAgIG9mIGN1c3RvbSAobm9uLUtlcmFzKSBvYmplY3RzIHRvIGNsYXNzL2Z1bmN0aW9uc1xuICogQHBhcmFtIGZhc3RXZWlnaHRJbml0IE9wdGlvbmFsIGZsYWcgdG8gdXNlIGZhc3Qgd2VpZ2h0IGluaXRpYWxpemF0aW9uXG4gKiAgIGR1cmluZyBkZXNlcmlhbGl6YXRpb24uIFRoaXMgaXMgYXBwbGljYWJsZSB0byBjYXNlcyBpbiB3aGljaFxuICogICB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBiZSBpbW1lZGlhdGVseSBvdmVyd3JpdHRlbiBieSBsb2FkZWQgd2VpZ2h0XG4gKiAgIHZhbHVlcy4gRGVmYXVsdDogYGZhbHNlYC5cbiAqIEByZXR1cm5zIExheWVyIGluc3RhbmNlIChtYXkgYmUgTGF5ZXJzTW9kZWwsIFNlcXVlbnRpYWwsIExheWVyLi4uKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemUoXG4gICAgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QsXG4gICAgY3VzdG9tT2JqZWN0cyA9IHt9IGFzIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICBmYXN0V2VpZ2h0SW5pdCA9IGZhbHNlKTogc2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGUge1xuICByZXR1cm4gZGVzZXJpYWxpemVLZXJhc09iamVjdChcbiAgICAgIGNvbmZpZywgc2VyaWFsaXphdGlvbi5TZXJpYWxpemF0aW9uTWFwLmdldE1hcCgpLmNsYXNzTmFtZU1hcCxcbiAgICAgIGN1c3RvbU9iamVjdHMsICdsYXllcicsIGZhc3RXZWlnaHRJbml0KTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/advanced_activations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 *  Advanced activation layers.
 */ __turbopack_context__.s([
    "ELU",
    ()=>ELU,
    "LeakyReLU",
    ()=>LeakyReLU,
    "PReLU",
    ()=>PReLU,
    "ReLU",
    ()=>ReLU,
    "Softmax",
    ()=>Softmax,
    "ThresholdedReLU",
    ()=>ThresholdedReLU
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/clip_by_value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$elu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/elu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/exp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/greater.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$leaky_relu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/leaky_relu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log_sum_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/log_sum_exp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/prelu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/relu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/activations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class ReLU extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.supportsMasking = true;
        if (args != null) {
            this.maxValue = args.maxValue;
        }
    }
    call(inputs, kwargs) {
        inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        let output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"])(inputs);
        if (this.maxValue != null) {
            output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipByValue"])(output, 0, this.maxValue);
        }
        return output;
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const config = {
            maxValue: this.maxValue
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ ReLU.className = 'ReLU';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(ReLU);
class LeakyReLU extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.DEFAULT_ALPHA = 0.3;
        if (args == null) {
            args = {};
        }
        this.alpha = args.alpha == null ? this.DEFAULT_ALPHA : args.alpha;
    }
    call(inputs, kwargs) {
        const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$leaky_relu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leakyRelu"])(x, this.alpha);
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const config = {
            alpha: this.alpha
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ LeakyReLU.className = 'LeakyReLU';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(LeakyReLU);
class PReLU extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.DEFAULT_ALPHA_INITIALIZER = 'zeros';
        if (args == null) {
            args = {};
        }
        this.supportsMasking = true;
        this.alphaInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.alphaInitializer || this.DEFAULT_ALPHA_INITIALIZER);
        this.alphaRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.alphaRegularizer);
        this.alphaConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.alphaConstraint);
        if (args.sharedAxes == null) {
            this.sharedAxes = null;
        } else if (Array.isArray(args.sharedAxes)) {
            this.sharedAxes = args.sharedAxes;
        } else if (typeof args.sharedAxes === 'number') {
            this.sharedAxes = [
                args.sharedAxes
            ];
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Expected sharedAxes to be a number or an array of numbers, ` + `but got ${args.sharedAxes}`);
        }
    }
    build(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const paramShape = inputShape.slice(1);
        if (this.sharedAxes != null) {
            for (const i of this.sharedAxes){
                paramShape[i - 1] = 1;
            }
        }
        this.alpha = this.addWeight('alpha', paramShape, 'float32', this.alphaInitializer, this.alphaRegularizer, true, this.alphaConstraint);
        // Set input spec.
        const axes = {};
        if (this.sharedAxes != null) {
            for(let i = 1; i < inputShape.length; ++i){
                axes[i] = inputShape[i];
            }
        }
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: inputShape.length,
                axes
            })
        ];
        this.built = true;
    }
    call(inputs, kwargs) {
        inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(inputs, this.alpha.read());
    }
    getConfig() {
        const config = {
            alphaInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.alphaInitializer),
            alphaRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.alphaRegularizer),
            alphaConstraint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.alphaConstraint),
            sharedAxes: this.sharedAxes
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ PReLU.className = 'PReLU';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(PReLU);
class ELU extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.DEFAULT_ALPHA = 1.0;
        if (args == null) {
            args = {};
        }
        if (args.alpha != null && args.alpha !== this.DEFAULT_ALPHA) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"](`Non-default alpha value (${args.alpha}) is not supported by the ` + `ELU layer yet.`);
        }
        this.alpha = args.alpha == null ? this.DEFAULT_ALPHA : args.alpha;
    }
    call(inputs, kwargs) {
        const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$elu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elu"])(x);
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const config = {
            alpha: this.alpha
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ ELU.className = 'ELU';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(ELU);
class ThresholdedReLU extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.DEFAULT_THETA = 1.0;
        if (args == null) {
            args = {};
        }
        this.theta = args.theta == null ? this.DEFAULT_THETA : args.theta;
    }
    call(inputs, kwargs) {
        const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(x, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greater"])(x, this.theta), 'float32'));
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const config = {
            theta: this.theta
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ ThresholdedReLU.className = 'ThresholdedReLU';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(ThresholdedReLU);
class Softmax extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.DEFAULT_AXIS = 1.0;
        if (args == null) {
            args = {};
        }
        this.softmax = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Softmax"]().apply;
        this.axis = args.axis == null ? this.DEFAULT_AXIS : args.axis;
    }
    call(inputs, kwargs) {
        // TODO(pforderique): Add tests for when `this.axis` is a number[].
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const mask = kwargs['mask'];
            if (mask != null) {
                // Since mask is 1.0 for positions we want to keep and 0.0 for masked
                // positions, this operation will create a tensor which is 0.0 for
                // positions we want to attend and -1e.9 for masked positions.
                const adder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ones"])(x.shape), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])(mask, x.dtype)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"])(-1e9));
                // Since we are adding it to the raw scores before the softmax, this
                // is effectively the same as removing these entirely.
                x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(x, adder);
            }
            if (this.axis instanceof Array) {
                if (this.axis.length > 1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"])(x, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log_sum_exp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logSumExp"])(x, this.axis, true)));
                } else {
                    return this.softmax(x, this.axis[0]);
                }
            }
            return this.softmax(x, this.axis);
        });
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const config = {
            axis: this.axis
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Softmax.className = 'Softmax';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Softmax); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWRfYWN0aXZhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL2FkdmFuY2VkX2FjdGl2YXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQVUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFeEssT0FBTyxFQUFDLE9BQU8sSUFBSSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBYSxhQUFhLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDMUQsT0FBTyxFQUFDLGNBQWMsRUFBc0Msb0JBQW9CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RyxPQUFPLEVBQUMsY0FBYyxFQUFlLG9CQUFvQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFbEYsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFVN0UsTUFBYSxJQUFLLFNBQVEsS0FBSztJQUs3QixZQUFZLElBQW9CO1FBQzlCLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxNQUFNLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFUSxrQkFBa0IsQ0FBQyxVQUF5QjtRQUNuRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRVEsU0FBUztRQUNoQixNQUFNLE1BQU0sR0FBNkIsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1FBQ25FLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTlCRCxrQkFBa0I7QUFDWCxjQUFTLEdBQUcsTUFBTSxDQUFDO1NBRmYsSUFBSTtBQWlDakIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQVNsQyxNQUFhLFNBQVUsU0FBUSxLQUFLO0lBT2xDLFlBQVksSUFBeUI7UUFDbkMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFIekIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFJM0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksR0FBRyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQztJQUVRLElBQUksQ0FBQyxNQUF1QixFQUFFLE1BQWM7UUFDbkQsTUFBTSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsT0FBTyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVEsa0JBQWtCLENBQUMsVUFBeUI7UUFDbkQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVRLFNBQVM7UUFDaEIsTUFBTSxNQUFNLEdBQTZCLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUM3RCxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUE1QkQsa0JBQWtCO0FBQ1gsbUJBQVMsR0FBRyxXQUFXLEFBQWQsQ0FBZTtTQUZwQixTQUFTO0FBK0J0QixhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBNkJ2QyxNQUFhLEtBQU0sU0FBUSxLQUFLO0lBVzlCLFlBQVksSUFBcUI7UUFDL0IsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFIekIsOEJBQXlCLEdBQTBCLE9BQU8sQ0FBQztRQUlsRSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQjtZQUNqQixjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNuQzthQUFNLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxNQUFNLElBQUksVUFBVSxDQUNoQiw2REFBNkQ7Z0JBQzdELFdBQVcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRVEsS0FBSyxDQUFDLFVBQXlCO1FBQ3RDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBVSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUMvQixVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQ3JELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZELGtCQUFrQjtRQUNsQixNQUFNLElBQUksR0FBNkIsRUFBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQztnQkFDOUIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNO2dCQUN2QixJQUFJO2FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxNQUFNLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRVEsU0FBUztRQUNoQixNQUFNLE1BQU0sR0FBNkI7WUFDdkMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzdELGdCQUFnQixFQUFFLG9CQUFvQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RCxlQUFlLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMxRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDNUIsQ0FBQztRQUNGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQTFFRCxrQkFBa0I7QUFDWCxlQUFTLEdBQUcsT0FBTyxBQUFWLENBQVc7U0FGaEIsS0FBSztBQTZFbEIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQVNuQyxNQUFhLEdBQUksU0FBUSxLQUFLO0lBTzVCLFlBQVksSUFBbUI7UUFDN0IsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFIekIsa0JBQWEsR0FBRyxHQUFHLENBQUM7UUFJM0IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksR0FBRyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzNELE1BQU0sSUFBSSxtQkFBbUIsQ0FDekIsNEJBQTRCLElBQUksQ0FBQyxLQUFLLDRCQUE0QjtnQkFDbEUsZ0JBQWdCLENBQUMsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQztJQUVRLElBQUksQ0FBQyxNQUF1QixFQUFFLE1BQWM7UUFDbkQsTUFBTSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVRLGtCQUFrQixDQUFDLFVBQXlCO1FBQ25ELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFUSxTQUFTO1FBQ2hCLE1BQU0sTUFBTSxHQUE2QixFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDN0QsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBbkNELGtCQUFrQjtBQUNYLGFBQVMsR0FBRyxLQUFLLEFBQVIsQ0FBUztTQUZkLEdBQUc7QUFzQ2hCLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFTakMsTUFBYSxlQUFnQixTQUFRLEtBQUs7SUFPeEMsWUFBWSxJQUErQjtRQUN6QyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUh6QixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUkzQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwRSxDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxNQUFNLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVRLGtCQUFrQixDQUFDLFVBQXlCO1FBQ25ELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFUSxTQUFTO1FBQ2hCLE1BQU0sTUFBTSxHQUE2QixFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDN0QsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBN0JELGtCQUFrQjtBQUNYLHlCQUFTLEdBQUcsaUJBQWlCLEFBQXBCLENBQXFCO1NBRjFCLGVBQWU7QUFnQzVCLGFBQWEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFVN0MsTUFBYSxPQUFRLFNBQVEsS0FBSztJQU9oQyxZQUFZLElBQXVCO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSHpCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBSTFCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRSxDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxtRUFBbUU7UUFDbkUsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBVyxDQUFDO1lBQ3RDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDaEIscUVBQXFFO2dCQUNyRSxrRUFBa0U7Z0JBQ2xFLDhEQUE4RDtnQkFDOUQsTUFBTSxLQUFLLEdBQ1QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFN0Qsb0VBQW9FO2dCQUNwRSxzREFBc0Q7Z0JBQ3RELENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUSxrQkFBa0IsQ0FBQyxVQUF5QjtRQUNuRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRVEsU0FBUztRQUNoQixNQUFNLE1BQU0sR0FBNkIsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDO1FBQzNELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQW5ERCxrQkFBa0I7QUFDWCxpQkFBUyxHQUFHLFNBQVMsQUFBWixDQUFhO1NBRmxCLE9BQU87QUFzRHBCLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqICBBZHZhbmNlZCBhY3RpdmF0aW9uIGxheWVycy5cbiAqL1xuXG5pbXBvcnQge2FkZCwgY2FzdCwgY2xpcEJ5VmFsdWUsIGVsdSwgZXhwLCBncmVhdGVyLCBsZWFreVJlbHUsIGxvZ1N1bUV4cCwgbXVsLCBvbmVzLCBwcmVsdSwgcmVsdSwgc2NhbGFyLCBzZXJpYWxpemF0aW9uLCBzdWIsIFRlbnNvciwgdGlkeX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtTb2Z0bWF4IGFzIHNvZnRtYXhBY3RpdmF0aW9ufSBmcm9tICcuLi9hY3RpdmF0aW9ucyc7XG5pbXBvcnQge0NvbnN0cmFpbnQsIGdldENvbnN0cmFpbnQsIHNlcmlhbGl6ZUNvbnN0cmFpbnR9IGZyb20gJy4uL2NvbnN0cmFpbnRzJztcbmltcG9ydCB7SW5wdXRTcGVjLCBMYXllciwgTGF5ZXJBcmdzfSBmcm9tICcuLi9lbmdpbmUvdG9wb2xvZ3knO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yLCBWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtnZXRJbml0aWFsaXplciwgSW5pdGlhbGl6ZXIsIEluaXRpYWxpemVySWRlbnRpZmllciwgc2VyaWFsaXplSW5pdGlhbGl6ZXJ9IGZyb20gJy4uL2luaXRpYWxpemVycyc7XG5pbXBvcnQge1NoYXBlfSBmcm9tICcuLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmltcG9ydCB7Z2V0UmVndWxhcml6ZXIsIFJlZ3VsYXJpemVyLCBzZXJpYWxpemVSZWd1bGFyaXplcn0gZnJvbSAnLi4vcmVndWxhcml6ZXJzJztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldEV4YWN0bHlPbmVTaGFwZSwgZ2V0RXhhY3RseU9uZVRlbnNvcn0gZnJvbSAnLi4vdXRpbHMvdHlwZXNfdXRpbHMnO1xuaW1wb3J0IHtMYXllclZhcmlhYmxlfSBmcm9tICcuLi92YXJpYWJsZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUmVMVUxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBGbG9hdCwgdGhlIG1heGltdW0gb3V0cHV0IHZhbHVlLlxuICAgKi9cbiAgbWF4VmFsdWU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSZUxVIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdSZUxVJztcbiAgbWF4VmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihhcmdzPzogUmVMVUxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MgPT0gbnVsbCA/IHt9IDogYXJncyk7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICAgIGlmIChhcmdzICE9IG51bGwpIHtcbiAgICAgIHRoaXMubWF4VmFsdWUgPSBhcmdzLm1heFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICBpbnB1dHMgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgbGV0IG91dHB1dCA9IHJlbHUoaW5wdXRzKTtcbiAgICBpZiAodGhpcy5tYXhWYWx1ZSAhPSBudWxsKSB7XG4gICAgICBvdXRwdXQgPSBjbGlwQnlWYWx1ZShvdXRwdXQsIDAsIHRoaXMubWF4VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge21heFZhbHVlOiB0aGlzLm1heFZhbHVlfTtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhSZUxVKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIExlYWt5UmVMVUxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBGbG9hdCBgPj0gMGAuIE5lZ2F0aXZlIHNsb3BlIGNvZWZmaWNpZW50LiBEZWZhdWx0cyB0byBgMC4zYC5cbiAgICovXG4gIGFscGhhPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTGVha3lSZUxVIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdMZWFreVJlTFUnO1xuICByZWFkb25seSBhbHBoYTogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IERFRkFVTFRfQUxQSEEgPSAwLjM7XG5cbiAgY29uc3RydWN0b3IoYXJncz86IExlYWt5UmVMVUxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MgPT0gbnVsbCA/IHt9IDogYXJncyk7XG4gICAgaWYgKGFyZ3MgPT0gbnVsbCkge1xuICAgICAgYXJncyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmFscGhhID0gYXJncy5hbHBoYSA9PSBudWxsID8gdGhpcy5ERUZBVUxUX0FMUEhBIDogYXJncy5hbHBoYTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICBjb25zdCB4ID0gZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpO1xuICAgIHJldHVybiBsZWFreVJlbHUoeCwgdGhpcy5hbHBoYSk7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIHJldHVybiBpbnB1dFNoYXBlO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7YWxwaGE6IHRoaXMuYWxwaGF9O1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgYmFzZUNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKExlYWt5UmVMVSk7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBQUmVMVUxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplciBmb3IgdGhlIGxlYXJuYWJsZSBhbHBoYS5cbiAgICovXG4gIGFscGhhSW5pdGlhbGl6ZXI/OiBJbml0aWFsaXplcnxJbml0aWFsaXplcklkZW50aWZpZXI7XG5cbiAgLyoqXG4gICAqIFJlZ3VsYXJpemVyIGZvciB0aGUgbGVhcm5hYmxlIGFscGhhLlxuICAgKi9cbiAgYWxwaGFSZWd1bGFyaXplcj86IFJlZ3VsYXJpemVyO1xuXG4gIC8qKlxuICAgKiBDb25zdHJhaW50IGZvciB0aGUgbGVhcm5hYmxlIGFscGhhLlxuICAgKi9cbiAgYWxwaGFDb25zdHJhaW50PzogQ29uc3RyYWludDtcblxuICAvKipcbiAgICogVGhlIGF4ZXMgYWxvbmcgd2hpY2ggdG8gc2hhcmUgbGVhcm5hYmxlIHBhcmFtZXRlcnMgZm9yIHRoZSBhY3RpdmF0aW9uXG4gICAqIGZ1bmN0aW9uLiBGb3IgZXhhbXBsZSwgaWYgdGhlIGluY29taW5nIGZlYXR1cmUgbWFwcyBhcmUgZnJvbSBhIDJEXG4gICAqIGNvbnZvbHV0aW9uIHdpdGggb3V0cHV0IHNoYXBlIGBbbnVtRXhhbXBsZXMsIGhlaWdodCwgd2lkdGgsIGNoYW5uZWxzXWAsXG4gICAqIGFuZCB5b3Ugd2lzaCB0byBzaGFyZSBwYXJhbWV0ZXJzIGFjcm9zcyBzcGFjZSAoaGVpZ2h0IGFuZCB3aWR0aCkgc28gdGhhdFxuICAgKiBlYWNoIGZpbHRlciBjaGFubmVscyBoYXMgb25seSBvbmUgc2V0IG9mIHBhcmFtZXRlcnMsIHNldFxuICAgKiBgc2hhcmVkX2F4ZXM6IFsxLCAyXWAuXG4gICAqL1xuICBzaGFyZWRBeGVzPzogbnVtYmVyfG51bWJlcltdO1xufVxuXG5leHBvcnQgY2xhc3MgUFJlTFUgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ1BSZUxVJztcbiAgcHJpdmF0ZSByZWFkb25seSBhbHBoYUluaXRpYWxpemVyOiBJbml0aWFsaXplcjtcbiAgcHJpdmF0ZSByZWFkb25seSBhbHBoYVJlZ3VsYXJpemVyOiBSZWd1bGFyaXplcjtcbiAgcHJpdmF0ZSByZWFkb25seSBhbHBoYUNvbnN0cmFpbnQ6IENvbnN0cmFpbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2hhcmVkQXhlczogbnVtYmVyW107XG4gIHByaXZhdGUgYWxwaGE6IExheWVyVmFyaWFibGU7XG5cbiAgcmVhZG9ubHkgREVGQVVMVF9BTFBIQV9JTklUSUFMSVpFUjogSW5pdGlhbGl6ZXJJZGVudGlmaWVyID0gJ3plcm9zJztcblxuICBjb25zdHJ1Y3RvcihhcmdzPzogUFJlTFVMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzID09IG51bGwgPyB7fSA6IGFyZ3MpO1xuICAgIGlmIChhcmdzID09IG51bGwpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnN1cHBvcnRzTWFza2luZyA9IHRydWU7XG4gICAgdGhpcy5hbHBoYUluaXRpYWxpemVyID1cbiAgICAgICAgZ2V0SW5pdGlhbGl6ZXIoYXJncy5hbHBoYUluaXRpYWxpemVyIHx8IHRoaXMuREVGQVVMVF9BTFBIQV9JTklUSUFMSVpFUik7XG4gICAgdGhpcy5hbHBoYVJlZ3VsYXJpemVyID0gZ2V0UmVndWxhcml6ZXIoYXJncy5hbHBoYVJlZ3VsYXJpemVyKTtcbiAgICB0aGlzLmFscGhhQ29uc3RyYWludCA9IGdldENvbnN0cmFpbnQoYXJncy5hbHBoYUNvbnN0cmFpbnQpO1xuICAgIGlmIChhcmdzLnNoYXJlZEF4ZXMgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaGFyZWRBeGVzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJncy5zaGFyZWRBeGVzKSkge1xuICAgICAgdGhpcy5zaGFyZWRBeGVzID0gYXJncy5zaGFyZWRBeGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3Muc2hhcmVkQXhlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuc2hhcmVkQXhlcyA9IFthcmdzLnNoYXJlZEF4ZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgRXhwZWN0ZWQgc2hhcmVkQXhlcyB0byBiZSBhIG51bWJlciBvciBhbiBhcnJheSBvZiBudW1iZXJzLCBgICtcbiAgICAgICAgICBgYnV0IGdvdCAke2FyZ3Muc2hhcmVkQXhlc31gKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBidWlsZChpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKSB7XG4gICAgaW5wdXRTaGFwZSA9IGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcbiAgICBjb25zdCBwYXJhbVNoYXBlOiBTaGFwZSA9IGlucHV0U2hhcGUuc2xpY2UoMSk7XG4gICAgaWYgKHRoaXMuc2hhcmVkQXhlcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5zaGFyZWRBeGVzKSB7XG4gICAgICAgIHBhcmFtU2hhcGVbaSAtIDFdID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hbHBoYSA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAnYWxwaGEnLCBwYXJhbVNoYXBlLCAnZmxvYXQzMicsIHRoaXMuYWxwaGFJbml0aWFsaXplcixcbiAgICAgICAgdGhpcy5hbHBoYVJlZ3VsYXJpemVyLCB0cnVlLCB0aGlzLmFscGhhQ29uc3RyYWludCk7XG4gICAgLy8gU2V0IGlucHV0IHNwZWMuXG4gICAgY29uc3QgYXhlczoge1theGlzOiBudW1iZXJdOiBudW1iZXJ9ID0ge307XG4gICAgaWYgKHRoaXMuc2hhcmVkQXhlcyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGlucHV0U2hhcGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYXhlc1tpXSA9IGlucHV0U2hhcGVbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXRTcGVjID0gW25ldyBJbnB1dFNwZWMoe1xuICAgICAgbmRpbTogaW5wdXRTaGFwZS5sZW5ndGgsXG4gICAgICBheGVzLFxuICAgIH0pXTtcbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICBpbnB1dHMgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgcmV0dXJuIHByZWx1KGlucHV0cywgdGhpcy5hbHBoYS5yZWFkKCkpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICBhbHBoYUluaXRpYWxpemVyOiBzZXJpYWxpemVJbml0aWFsaXplcih0aGlzLmFscGhhSW5pdGlhbGl6ZXIpLFxuICAgICAgYWxwaGFSZWd1bGFyaXplcjogc2VyaWFsaXplUmVndWxhcml6ZXIodGhpcy5hbHBoYVJlZ3VsYXJpemVyKSxcbiAgICAgIGFscGhhQ29uc3RyYWludDogc2VyaWFsaXplQ29uc3RyYWludCh0aGlzLmFscGhhQ29uc3RyYWludCksXG4gICAgICBzaGFyZWRBeGVzOiB0aGlzLnNoYXJlZEF4ZXNcbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgYmFzZUNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFBSZUxVKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEVMVUxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBGbG9hdCBgPj0gMGAuIE5lZ2F0aXZlIHNsb3BlIGNvZWZmaWNpZW50LiBEZWZhdWx0cyB0byBgMS4wYC5cbiAgICovXG4gIGFscGhhPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRUxVIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdFTFUnO1xuICByZWFkb25seSBhbHBoYTogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IERFRkFVTFRfQUxQSEEgPSAxLjA7XG5cbiAgY29uc3RydWN0b3IoYXJncz86IEVMVUxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MgPT0gbnVsbCA/IHt9IDogYXJncyk7XG4gICAgaWYgKGFyZ3MgPT0gbnVsbCkge1xuICAgICAgYXJncyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChhcmdzLmFscGhhICE9IG51bGwgJiYgYXJncy5hbHBoYSAhPT0gdGhpcy5ERUZBVUxUX0FMUEhBKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICBgTm9uLWRlZmF1bHQgYWxwaGEgdmFsdWUgKCR7YXJncy5hbHBoYX0pIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGAgK1xuICAgICAgICAgIGBFTFUgbGF5ZXIgeWV0LmApO1xuICAgIH1cblxuICAgIHRoaXMuYWxwaGEgPSBhcmdzLmFscGhhID09IG51bGwgPyB0aGlzLkRFRkFVTFRfQUxQSEEgOiBhcmdzLmFscGhhO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIGNvbnN0IHggPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgcmV0dXJuIGVsdSh4KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNvbXB1dGVPdXRwdXRTaGFwZShpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogU2hhcGV8U2hhcGVbXSB7XG4gICAgcmV0dXJuIGlucHV0U2hhcGU7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHthbHBoYTogdGhpcy5hbHBoYX07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoRUxVKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRocmVzaG9sZGVkUmVMVUxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBGbG9hdCA+PSAwLiBUaHJlc2hvbGQgbG9jYXRpb24gb2YgYWN0aXZhdGlvbi5cbiAgICovXG4gIHRoZXRhPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVGhyZXNob2xkZWRSZUxVIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdUaHJlc2hvbGRlZFJlTFUnO1xuICByZWFkb25seSB0aGV0YTogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IERFRkFVTFRfVEhFVEEgPSAxLjA7XG5cbiAgY29uc3RydWN0b3IoYXJncz86IFRocmVzaG9sZGVkUmVMVUxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MgPT0gbnVsbCA/IHt9IDogYXJncyk7XG4gICAgaWYgKGFyZ3MgPT0gbnVsbCkge1xuICAgICAgYXJncyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMudGhldGEgPSBhcmdzLnRoZXRhID09IG51bGwgPyB0aGlzLkRFRkFVTFRfVEhFVEEgOiBhcmdzLnRoZXRhO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIGNvbnN0IHggPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgcmV0dXJuIG11bCh4LCBjYXN0KGdyZWF0ZXIoeCwgdGhpcy50aGV0YSksICdmbG9hdDMyJykpO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge3RoZXRhOiB0aGlzLnRoZXRhfTtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhUaHJlc2hvbGRlZFJlTFUpO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU29mdG1heExheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBJbnRlZ2VyLCBheGlzIGFsb25nIHdoaWNoIHRoZSBzb2Z0bWF4IG5vcm1hbGl6YXRpb24gaXMgYXBwbGllZC5cbiAgICogRGVmYXVsdHMgdG8gYC0xYCAoaS5lLiwgdGhlIGxhc3QgYXhpcykuXG4gICAqL1xuICBheGlzPzogbnVtYmVyfG51bWJlcltdO1xufVxuXG5leHBvcnQgY2xhc3MgU29mdG1heCBleHRlbmRzIExheWVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnU29mdG1heCc7XG4gIHJlYWRvbmx5IGF4aXM6IG51bWJlcnxudW1iZXJbXTtcbiAgcmVhZG9ubHkgc29mdG1heDogKHQ6IFRlbnNvciwgYT86IG51bWJlcikgPT4gVGVuc29yO1xuICByZWFkb25seSBERUZBVUxUX0FYSVMgPSAxLjA7XG5cbiAgY29uc3RydWN0b3IoYXJncz86IFNvZnRtYXhMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzID09IG51bGwgPyB7fSA6IGFyZ3MpO1xuICAgIGlmIChhcmdzID09IG51bGwpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5zb2Z0bWF4ID0gbmV3IHNvZnRtYXhBY3RpdmF0aW9uKCkuYXBwbHk7XG4gICAgdGhpcy5heGlzID0gYXJncy5heGlzID09IG51bGwgPyB0aGlzLkRFRkFVTFRfQVhJUyA6IGFyZ3MuYXhpcztcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICAvLyBUT0RPKHBmb3JkZXJpcXVlKTogQWRkIHRlc3RzIGZvciB3aGVuIGB0aGlzLmF4aXNgIGlzIGEgbnVtYmVyW10uXG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgbGV0IHggPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBjb25zdCBtYXNrID0ga3dhcmdzWydtYXNrJ10gYXMgVGVuc29yO1xuICAgICAgaWYgKG1hc2sgIT0gbnVsbCkge1xuICAgICAgICAvLyBTaW5jZSBtYXNrIGlzIDEuMCBmb3IgcG9zaXRpb25zIHdlIHdhbnQgdG8ga2VlcCBhbmQgMC4wIGZvciBtYXNrZWRcbiAgICAgICAgLy8gcG9zaXRpb25zLCB0aGlzIG9wZXJhdGlvbiB3aWxsIGNyZWF0ZSBhIHRlbnNvciB3aGljaCBpcyAwLjAgZm9yXG4gICAgICAgIC8vIHBvc2l0aW9ucyB3ZSB3YW50IHRvIGF0dGVuZCBhbmQgLTFlLjkgZm9yIG1hc2tlZCBwb3NpdGlvbnMuXG4gICAgICAgIGNvbnN0IGFkZGVyID1cbiAgICAgICAgICBtdWwoc3ViKG9uZXMoeC5zaGFwZSksIGNhc3QobWFzaywgeC5kdHlwZSkpLCBzY2FsYXIoLTFlOSkpO1xuXG4gICAgICAgIC8vIFNpbmNlIHdlIGFyZSBhZGRpbmcgaXQgdG8gdGhlIHJhdyBzY29yZXMgYmVmb3JlIHRoZSBzb2Z0bWF4LCB0aGlzXG4gICAgICAgIC8vIGlzIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIHJlbW92aW5nIHRoZXNlIGVudGlyZWx5LlxuICAgICAgICB4ID0gYWRkKHgsIGFkZGVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmF4aXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBpZiAodGhpcy5heGlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm4gZXhwKHN1Yih4LCBsb2dTdW1FeHAoeCwgdGhpcy5heGlzLCB0cnVlKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNvZnRtYXgoeCwgdGhpcy5heGlzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc29mdG1heCh4LCB0aGlzLmF4aXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge2F4aXM6IHRoaXMuYXhpc307XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoU29mdG1heCk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/convolutional_depthwise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * TensorFlow.js Layers: Depthwise Convolutional Layers
 */ __turbopack_context__.s([
    "DepthwiseConv2D",
    ()=>DepthwiseConv2D,
    "depthwiseConv2d",
    ()=>depthwiseConv2d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/transpose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/conv_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$convolutional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/convolutional.js [app-client] (ecmascript)");
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
function depthwiseConv2d(x, depthwiseKernel, strides = [
    1,
    1
], padding = 'valid', dataFormat, dilationRate) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (dataFormat == null) {
            dataFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageDataFormat"])();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        let y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$convolutional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preprocessConv2DInput"])(x, dataFormat);
        if (x.rank !== 4) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Input for depthwiseConv2d is required to be 4-D, but is instead ` + `${x.rank}-D`);
        }
        if (depthwiseKernel.rank !== 4) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`depthwiseKernel is required to be 4-D, but is instead ` + `${depthwiseKernel.rank}-D`);
        }
        y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseConv2d"](y, depthwiseKernel, strides, padding === 'same' ? 'same' : 'valid', 'NHWC', dilationRate);
        if (dataFormat === 'channelsFirst') {
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](y, [
                0,
                3,
                1,
                2
            ]);
        }
        return y;
    });
}
class DepthwiseConv2D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$convolutional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseConv"] {
    constructor(args){
        super(2, args);
        this.depthwiseKernel = null;
        this.depthMultiplier = args.depthMultiplier == null ? 1 : args.depthMultiplier;
        this.depthwiseInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.depthwiseInitializer || this.DEFAULT_KERNEL_INITIALIZER);
        this.depthwiseConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.depthwiseConstraint);
        this.depthwiseRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.depthwiseRegularizer);
    }
    build(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        if (inputShape.length < 4) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Inputs to DepthwiseConv2D should have rank 4. ` + `Received input shape: ${JSON.stringify(inputShape)}.`);
        }
        const channelAxis = this.dataFormat === 'channelsFirst' ? 1 : 3;
        if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('The channel dimension of the inputs to DepthwiseConv2D should ' + `be defined, but is not (${inputShape[channelAxis]}).`);
        }
        const inputDim = inputShape[channelAxis];
        const depthwiseKernelShape = [
            this.kernelSize[0],
            this.kernelSize[1],
            inputDim,
            this.depthMultiplier
        ];
        this.depthwiseKernel = this.addWeight('depthwise_kernel', depthwiseKernelShape, null, this.depthwiseInitializer, this.depthwiseRegularizer, true, this.depthwiseConstraint);
        if (this.useBias) {
            this.bias = this.addWeight('bias', [
                inputDim * this.depthMultiplier
            ], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        } else {
            this.bias = null;
        }
        this.built = true;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            let outputs = depthwiseConv2d(inputs, this.depthwiseKernel.read(), this.strides, this.padding, this.dataFormat, null);
            // TODO(cais): Add support for dilation.
            if (this.useBias) {
                outputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biasAdd"](outputs, this.bias.read(), this.dataFormat);
            }
            if (this.activation != null) {
                outputs = this.activation.apply(outputs);
            }
            return outputs;
        });
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const rows = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
        const cols = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
        const outFilters = this.dataFormat === 'channelsFirst' ? inputShape[1] * this.depthMultiplier : inputShape[3] * this.depthMultiplier;
        const outRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(rows, this.kernelSize[0], this.padding, this.strides[0]);
        const outCols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(cols, this.kernelSize[1], this.padding, this.strides[1]);
        if (this.dataFormat === 'channelsFirst') {
            return [
                inputShape[0],
                outFilters,
                outRows,
                outCols
            ];
        } else {
            // In this case, assume 'channelsLast'.
            return [
                inputShape[0],
                outRows,
                outCols,
                outFilters
            ];
        }
    }
    getConfig() {
        const config = super.getConfig();
        config['depthMultiplier'] = this.depthMultiplier;
        config['depthwiseInitializer'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.depthwiseInitializer);
        config['depthwiseRegularizer'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.depthwiseRegularizer);
        config['depthwiseConstraint'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.depthwiseRegularizer);
        return config;
    }
}
/** @nocollapse */ DepthwiseConv2D.className = 'DepthwiseConv2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(DepthwiseConv2D); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udm9sdXRpb25hbF9kZXB0aHdpc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL2NvbnZvbHV0aW9uYWxfZGVwdGh3aXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQW9CLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRTVFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFtQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxjQUFjLEVBQXNDLG9CQUFvQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekcsT0FBTyxFQUFDLGNBQWMsRUFBc0Msb0JBQW9CLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUc3RSxPQUFPLEVBQUMsUUFBUSxFQUFvQyxxQkFBcUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWxHOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FDM0IsQ0FBUyxFQUFFLGVBQXVCLEVBQUUsVUFBNEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RFLE9BQU8sR0FBRyxPQUFPLEVB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VUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxlQUFlLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCx1Q0FBdUM7WUFDdkMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVRLFNBQVM7UUFDaEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDakQsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1lBQzFCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztZQUMxQixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMscUJBQXFCLENBQUM7WUFDekIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbkQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFuR0Qsa0JBQWtCO0FBQ1gseUJBQVMsR0FBRyxpQkFBaUIsQUFBcEIsQ0FBcUI7U0FGMUIsZUFBZTtBQXNHNUIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogVGVuc29yRmxvdy5qcyBMYXllcnM6IERlcHRod2lzZSBDb252b2x1dGlvbmFsIExheWVyc1xuICovXG5cbmltcG9ydCAqIGFzIHRmYyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtzZXJpYWxpemF0aW9uLCBUZW5zb3IsIFRlbnNvcjRELCB0aWR5fSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge2ltYWdlRGF0YUZvcm1hdH0gZnJvbSAnLi4vYmFja2VuZC9jb21tb24nO1xuaW1wb3J0ICogYXMgSyBmcm9tICcuLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge2NoZWNrRGF0YUZvcm1hdH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7Q29uc3RyYWludCwgQ29uc3RyYWludElkZW50aWZpZXIsIGdldENvbnN0cmFpbnQsIHNlcmlhbGl6ZUNvbnN0cmFpbnR9IGZyb20gJy4uL2NvbnN0cmFpbnRzJztcbmltcG9ydCB7VmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7Z2V0SW5pdGlhbGl6ZXIsIEluaXRpYWxpemVyLCBJbml0aWFsaXplcklkZW50aWZpZXIsIHNlcmlhbGl6ZUluaXRpYWxpemVyfSBmcm9tICcuLi9pbml0aWFsaXplcnMnO1xuaW1wb3J0IHtEYXRhRm9ybWF0LCBTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge2dldFJlZ3VsYXJpemVyLCBSZWd1bGFyaXplciwgUmVndWxhcml6ZXJJZGVudGlmaWVyLCBzZXJpYWxpemVSZWd1bGFyaXplcn0gZnJvbSAnLi4vcmVndWxhcml6ZXJzJztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2NvbnZPdXRwdXRMZW5ndGh9IGZyb20gJy4uL3V0aWxzL2NvbnZfdXRpbHMnO1xuaW1wb3J0IHtnZXRFeGFjdGx5T25lU2hhcGUsIGdldEV4YWN0bHlPbmVUZW5zb3J9IGZyb20gJy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcbmltcG9ydCB7TGF5ZXJWYXJpYWJsZX0gZnJvbSAnLi4vdmFyaWFibGVzJztcblxuaW1wb3J0IHtCYXNlQ29udiwgQmFzZUNvbnZMYXllckFyZ3MsIENvbnZMYXllckFyZ3MsIHByZXByb2Nlc3NDb252MkRJbnB1dH0gZnJvbSAnLi9jb252b2x1dGlvbmFsJztcblxuLyoqXG4gKiAyRCBjb252b2x1dGlvbiB3aXRoIHNlcGFyYWJsZSBmaWx0ZXJzLlxuICogQHBhcmFtIHggSW5wdXQgdGVuc29yLlxuICogQHBhcmFtIGRlcHRod2lzZUtlcm5lbCBDb252b2x1dGlvbiBrZXJuZWwgZm9yIGRlcHRod2lzZSBjb252b2x1dGlvbi5cbiAqIEBwYXJhbSBzdHJpZGVzIFN0cmlkZXMgKEFycmF5IG9mIHR3byBpbnRlZ2VycykuXG4gKiBAcGFyYW0gcGFkZGluZyBQYWRkaW5nIG1vZGVsLlxuICogQHBhcmFtIGRhdGFGb3JtYXQgRGF0YSBmb3JtYXQuXG4gKiBAcGFyYW0gZGlsYXRpb25SYXRlIEFycmF5IG9mIHR3byBpbnRlZ2VycywgZGlsYXRpb24gcmF0ZXMgZm9yIHRoZSBzZXBhcmFibGVcbiAqICAgY29udm9sdXRpb24uXG4gKiBAcmV0dXJucyBPdXRwdXQgdGVuc29yLlxuICogQHRocm93cyBWYWx1ZUVycm9yIElmIGRlcHRod2lzZUtlcm5lbCBpcyBub3QgYSA0RCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHRod2lzZUNvbnYyZChcbiAgICB4OiBUZW5zb3IsIGRlcHRod2lzZUtlcm5lbDogVGVuc29yLCBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdID0gWzEsIDFdLFxuICAgIHBhZGRpbmcgPSAndmFsaWQnLCBkYXRhRm9ybWF0PzogRGF0YUZvcm1hdCxcbiAgICBkaWxhdGlvblJhdGU/OiBbbnVtYmVyLCBudW1iZXJdKTogVGVuc29yIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgIGlmIChkYXRhRm9ybWF0ID09IG51bGwpIHtcbiAgICAgIGRhdGFGb3JtYXQgPSBpbWFnZURhdGFGb3JtYXQoKTtcbiAgICB9XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGxldCB5ID0gcHJlcHJvY2Vzc0NvbnYyRElucHV0KHgsIGRhdGFGb3JtYXQpO1xuICAgIGlmICh4LnJhbmsgIT09IDQpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBJbnB1dCBmb3IgZGVwdGh3aXNlQ29udjJkIGlzIHJlcXVpcmVkIHRvIGJlIDQtRCwgYnV0IGlzIGluc3RlYWQgYCArXG4gICAgICAgICAgYCR7eC5yYW5rfS1EYCk7XG4gICAgfVxuICAgIGlmIChkZXB0aHdpc2VLZXJuZWwucmFuayAhPT0gNCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYGRlcHRod2lzZUtlcm5lbCBpcyByZXF1aXJlZCB0byBiZSA0LUQsIGJ1dCBpcyBpbnN0ZWFkIGAgK1xuICAgICAgICAgIGAke2RlcHRod2lzZUtlcm5lbC5yYW5rfS1EYCk7XG4gICAgfVxuICAgIHkgPSB0ZmMuZGVwdGh3aXNlQ29udjJkKFxuICAgICAgICB5IGFzIFRlbnNvcjRELCBkZXB0aHdpc2VLZXJuZWwgYXMgVGVuc29yNEQsIHN0cmlkZXMsXG4gICAgICAgIHBhZGRpbmcgPT09ICdzYW1lJyA/ICdzYW1lJyA6ICd2YWxpZCcsICdOSFdDJywgZGlsYXRpb25SYXRlKTtcbiAgICBpZiAoZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnKSB7XG4gICAgICB5ID0gdGZjLnRyYW5zcG9zZSh5LCBbMCwgMywgMSwgMl0pO1xuICAgIH1cbiAgICByZXR1cm4geTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBEZXB0aHdpc2VDb252MkRMYXllckFyZ3MgZXh0ZW5kcyBCYXNlQ29udkxheWVyQXJncyB7XG4gIC8qKlxuICAgKiBBbiBpbnRlZ2VyIG9yIEFycmF5IG9mIDIgaW50ZWdlcnMsIHNwZWNpZnlpbmcgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlXG4gICAqIDJEIGNvbnZvbHV0aW9uIHdpbmRvdy4gQ2FuIGJlIGEgc2luZ2xlIGludGVnZXIgdG8gc3BlY2lmeSB0aGUgc2FtZSB2YWx1ZVxuICAgKiBmb3IgYWxsIHNwYXRpYWwgZGltZW5zaW9ucy5cbiAgICovXG4gIGtlcm5lbFNpemU6IG51bWJlcnxbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGRlcHRod2lzZSBjb252b2x1dGlvbiBvdXRwdXQgY2hhbm5lbHMgZm9yIGVhY2ggaW5wdXRcbiAgICogY2hhbm5lbC5cbiAgICogVGhlIHRvdGFsIG51bWJlciBvZiBkZXB0aHdpc2UgY29udm9sdXRpb24gb3V0cHV0IGNoYW5uZWxzIHdpbGwgYmUgZXF1YWwgdG9cbiAgICogYGZpbHRlcnNJbiAqIGRlcHRoTXVsdGlwbGllcmAuXG4gICAqIERlZmF1bHQ6IDEuXG4gICAqL1xuICBkZXB0aE11bHRpcGxpZXI/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVyIGZvciB0aGUgZGVwdGh3aXNlIGtlcm5lbCBtYXRyaXguXG4gICAqIERlZmF1bHQ6IEdsb3JvdE5vcm1hbC5cbiAgICovXG4gIGRlcHRod2lzZUluaXRpYWxpemVyPzogSW5pdGlhbGl6ZXJJZGVudGlmaWVyfEluaXRpYWxpemVyO1xuXG4gIC8qKlxuICAgKiBDb25zdHJhaW50IGZvciB0aGUgZGVwdGh3aXNlIGtlcm5lbCBtYXRyaXguXG4gICAqL1xuICBkZXB0aHdpc2VDb25zdHJhaW50PzogQ29uc3RyYWludElkZW50aWZpZXJ8Q29uc3RyYWludDtcblxuICAvKipcbiAgICogUmVndWxhcml6ZXIgZnVuY3Rpb24gZm9yIHRoZSBkZXB0aHdpc2Uga2VybmVsIG1hdHJpeC5cbiAgICovXG4gIGRlcHRod2lzZVJlZ3VsYXJpemVyPzogUmVndWxhcml6ZXJJZGVudGlmaWVyfFJlZ3VsYXJpemVyO1xufVxuXG5leHBvcnQgY2xhc3MgRGVwdGh3aXNlQ29udjJEIGV4dGVuZHMgQmFzZUNvbnYge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdEZXB0aHdpc2VDb252MkQnO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlcHRoTXVsdGlwbGllcjogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlcHRod2lzZUluaXRpYWxpemVyOiBJbml0aWFsaXplcjtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXB0aHdpc2VDb25zdHJhaW50OiBDb25zdHJhaW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGRlcHRod2lzZVJlZ3VsYXJpemVyOiBSZWd1bGFyaXplcjtcblxuICBwcml2YXRlIGRlcHRod2lzZUtlcm5lbDogTGF5ZXJWYXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXJnczogRGVwdGh3aXNlQ29udjJETGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoMiwgYXJncyBhcyBDb252TGF5ZXJBcmdzKTtcbiAgICB0aGlzLmRlcHRoTXVsdGlwbGllciA9XG4gICAgICAgIGFyZ3MuZGVwdGhNdWx0aXBsaWVyID09IG51bGwgPyAxIDogYXJncy5kZXB0aE11bHRpcGxpZXI7XG4gICAgdGhpcy5kZXB0aHdpc2VJbml0aWFsaXplciA9IGdldEluaXRpYWxpemVyKFxuICAgICAgICBhcmdzLmRlcHRod2lzZUluaXRpYWxpemVyIHx8IHRoaXMuREVGQVVMVF9LRVJORUxfSU5JVElBTElaRVIpO1xuICAgIHRoaXMuZGVwdGh3aXNlQ29uc3RyYWludCA9IGdldENvbnN0cmFpbnQoYXJncy5kZXB0aHdpc2VDb25zdHJhaW50KTtcbiAgICB0aGlzLmRlcHRod2lzZVJlZ3VsYXJpemVyID0gZ2V0UmVndWxhcml6ZXIoYXJncy5kZXB0aHdpc2VSZWd1bGFyaXplcik7XG4gIH1cblxuICBvdmVycmlkZSBidWlsZChpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogdm9pZCB7XG4gICAgaW5wdXRTaGFwZSA9IGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcbiAgICBpZiAoaW5wdXRTaGFwZS5sZW5ndGggPCA0KSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgSW5wdXRzIHRvIERlcHRod2lzZUNvbnYyRCBzaG91bGQgaGF2ZSByYW5rIDQuIGAgK1xuICAgICAgICAgIGBSZWNlaXZlZCBpbnB1dCBzaGFwZTogJHtKU09OLnN0cmluZ2lmeShpbnB1dFNoYXBlKX0uYCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5uZWxBeGlzID0gdGhpcy5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcgPyAxIDogMztcbiAgICBpZiAoaW5wdXRTaGFwZVtjaGFubmVsQXhpc10gPT0gbnVsbCB8fCBpbnB1dFNoYXBlW2NoYW5uZWxBeGlzXSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICdUaGUgY2hhbm5lbCBkaW1lbnNpb24gb2YgdGhlIGlucHV0cyB0byBEZXB0aHdpc2VDb252MkQgc2hvdWxkICcgK1xuICAgICAgICAgIGBiZSBkZWZpbmVkLCBidXQgaXMgbm90ICgke2lucHV0U2hhcGVbY2hhbm5lbEF4aXNdfSkuYCk7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0RGltID0gaW5wdXRTaGFwZVtjaGFubmVsQXhpc107XG4gICAgY29uc3QgZGVwdGh3aXNlS2VybmVsU2hhcGU6IFNoYXBlID0gW1xuICAgICAgdGhpcy5rZXJuZWxTaXplWzBdLCB0aGlzLmtlcm5lbFNpemVbMV0sIGlucHV0RGltLCB0aGlzLmRlcHRoTXVsdGlwbGllclxuICAgIF07XG5cbiAgICB0aGlzLmRlcHRod2lzZUtlcm5lbCA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAnZGVwdGh3aXNlX2tlcm5lbCcsIGRlcHRod2lzZUtlcm5lbFNoYXBlLCBudWxsLFxuICAgICAgICB0aGlzLmRlcHRod2lzZUluaXRpYWxpemVyLCB0aGlzLmRlcHRod2lzZVJlZ3VsYXJpemVyLCB0cnVlLFxuICAgICAgICB0aGlzLmRlcHRod2lzZUNvbnN0cmFpbnQpO1xuICAgIGlmICh0aGlzLnVzZUJpYXMpIHtcbiAgICAgIHRoaXMuYmlhcyA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAgICdiaWFzJywgW2lucHV0RGltICogdGhpcy5kZXB0aE11bHRpcGxpZXJdLCBudWxsLCB0aGlzLmJpYXNJbml0aWFsaXplcixcbiAgICAgICAgICB0aGlzLmJpYXNSZWd1bGFyaXplciwgdHJ1ZSwgdGhpcy5iaWFzQ29uc3RyYWludCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmlhcyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuYnVpbHQgPSB0cnVlO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGlucHV0cyA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIGxldCBvdXRwdXRzID0gZGVwdGh3aXNlQ29udjJkKFxuICAgICAgICAgIGlucHV0cywgdGhpcy5kZXB0aHdpc2VLZXJuZWwucmVhZCgpLCB0aGlzLnN0cmlkZXMgYXMgW251bWJlciwgbnVtYmVyXSxcbiAgICAgICAgICB0aGlzLnBhZGRpbmcsIHRoaXMuZGF0YUZvcm1hdCwgbnVsbCk7XG4gICAgICAvLyBUT0RPKGNhaXMpOiBBZGQgc3VwcG9ydCBmb3IgZGlsYXRpb24uXG4gICAgICBpZiAodGhpcy51c2VCaWFzKSB7XG4gICAgICAgIG91dHB1dHMgPSBLLmJpYXNBZGQob3V0cHV0cywgdGhpcy5iaWFzLnJlYWQoKSwgdGhpcy5kYXRhRm9ybWF0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjdGl2YXRpb24gIT0gbnVsbCkge1xuICAgICAgICBvdXRwdXRzID0gdGhpcy5hY3RpdmF0aW9uLmFwcGx5KG91dHB1dHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dHM7XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgY29uc3Qgcm93cyA9XG4gICAgICAgIHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnID8gaW5wdXRTaGFwZVsyXSA6IGlucHV0U2hhcGVbMV07XG4gICAgY29uc3QgY29scyA9XG4gICAgICAgIHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnID8gaW5wdXRTaGFwZVszXSA6IGlucHV0U2hhcGVbMl07XG4gICAgY29uc3Qgb3V0RmlsdGVycyA9IHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnID9cbiAgICAgICAgaW5wdXRTaGFwZVsxXSAqIHRoaXMuZGVwdGhNdWx0aXBsaWVyIDpcbiAgICAgICAgaW5wdXRTaGFwZVszXSAqIHRoaXMuZGVwdGhNdWx0aXBsaWVyO1xuICAgIGNvbnN0IG91dFJvd3MgPSBjb252T3V0cHV0TGVuZ3RoKFxuICAgICAgICByb3dzLCB0aGlzLmtlcm5lbFNpemVbMF0sIHRoaXMucGFkZGluZywgdGhpcy5zdHJpZGVzWzBdKTtcbiAgICBjb25zdCBvdXRDb2xzID0gY29udk91dHB1dExlbmd0aChcbiAgICAgICAgY29scywgdGhpcy5rZXJuZWxTaXplWzFdLCB0aGlzLnBhZGRpbmcsIHRoaXMuc3RyaWRlc1sxXSk7XG4gICAgaWYgKHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnKSB7XG4gICAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIG91dEZpbHRlcnMsIG91dFJvd3MsIG91dENvbHNdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIGFzc3VtZSAnY2hhbm5lbHNMYXN0Jy5cbiAgICAgIHJldHVybiBbaW5wdXRTaGFwZVswXSwgb3V0Um93cywgb3V0Q29scywgb3V0RmlsdGVyc107XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgY29uZmlnWydkZXB0aE11bHRpcGxpZXInXSA9IHRoaXMuZGVwdGhNdWx0aXBsaWVyO1xuICAgIGNvbmZpZ1snZGVwdGh3aXNlSW5pdGlhbGl6ZXInXSA9XG4gICAgICAgIHNlcmlhbGl6ZUluaXRpYWxpemVyKHRoaXMuZGVwdGh3aXNlSW5pdGlhbGl6ZXIpO1xuICAgIGNvbmZpZ1snZGVwdGh3aXNlUmVndWxhcml6ZXInXSA9XG4gICAgICAgIHNlcmlhbGl6ZVJlZ3VsYXJpemVyKHRoaXMuZGVwdGh3aXNlUmVndWxhcml6ZXIpO1xuICAgIGNvbmZpZ1snZGVwdGh3aXNlQ29uc3RyYWludCddID1cbiAgICAgICAgc2VyaWFsaXplQ29uc3RyYWludCh0aGlzLmRlcHRod2lzZVJlZ3VsYXJpemVyKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoRGVwdGh3aXNlQ29udjJEKTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/convolutional_recurrent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "ConvLSTM2D",
    ()=>ConvLSTM2D,
    "ConvLSTM2DCell",
    ()=>ConvLSTM2DCell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones_like.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/split.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/conv2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/conv_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/recurrent.js [app-client] (ecmascript)");
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
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
class ConvRNN2DCell extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RNNCell"] {
}
/**
 * Base class for convolutional-recurrent layers.
 */ class ConvRNN2D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RNN"] {
    constructor(args){
        if (args.unroll) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('Unrolling is not possible with convolutional RNNs.');
        }
        if (Array.isArray(args.cell)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('It is not possible at the moment to stack convolutional cells.');
        }
        super(args);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 5
            })
        ];
    }
    call(inputs, kwargs) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
            if (this.cell.dropoutMask != null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](this.cell.dropoutMask);
                this.cell.dropoutMask = null;
            }
            if (this.cell.recurrentDropoutMask != null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](this.cell.recurrentDropoutMask);
                this.cell.recurrentDropoutMask = null;
            }
            if (kwargs && kwargs['constants']) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('ConvRNN2D cell does not support constants');
            }
            const mask = kwargs == null ? null : kwargs['mask'];
            const training = kwargs == null ? null : kwargs['training'];
            const initialState = kwargs == null ? null : kwargs['initialState'];
            return super.call(inputs, {
                mask,
                training,
                initialState
            });
        });
    }
    computeOutputShape(inputShape) {
        let outShape = this.computeSingleOutputShape(inputShape);
        if (!this.returnSequences) {
            outShape = [
                outShape[0],
                ...outShape.slice(2)
            ];
        }
        if (this.returnState) {
            outShape = [
                outShape,
                ...Array(2).fill([
                    inputShape[0],
                    ...outShape.slice(-3)
                ])
            ];
        }
        return outShape;
    }
    getInitialState(inputs) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
            const { stateSize } = this.cell;
            const inputShape = inputs.shape;
            const outputShape = this.computeSingleOutputShape(inputShape);
            const stateShape = [
                outputShape[0],
                ...outputShape.slice(2)
            ];
            const initialState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](stateShape);
            if (Array.isArray(stateSize)) {
                return Array(stateSize.length).fill(initialState);
            }
            return [
                initialState
            ];
        });
    }
    resetStates(states, training = false) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
            if (!this.stateful) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttributeError"]('Cannot call resetStates() on an RNN Layer that is not stateful.');
            }
            const inputShape = this.inputSpec[0].shape;
            const outputShape = this.computeSingleOutputShape(inputShape);
            const stateShape = [
                outputShape[0],
                ...outputShape.slice(2)
            ];
            const batchSize = inputShape[0];
            if (batchSize == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('If an RNN is stateful, it needs to know its batch size. Specify ' + 'the batch size of your input tensors: \n' + '- If using a Sequential model, specify the batch size by ' + 'passing a `batchInputShape` option to your first layer.\n' + '- If using the functional API, specify the batch size by ' + 'passing a `batchShape` option to your Input layer.');
            }
            // Initialize state if null.
            if (this.getStates() == null) {
                if (Array.isArray(this.cell.stateSize)) {
                    this.states_ = this.cell.stateSize.map(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](stateShape));
                } else {
                    this.states_ = [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](stateShape)
                    ];
                }
            } else if (states == null) {
                // Dispose old state tensors.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](this.states_);
                // For stateful RNNs, fully dispose kept old states.
                if (this.keptStates != null) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](this.keptStates);
                    this.keptStates = [];
                }
                if (Array.isArray(this.cell.stateSize)) {
                    this.states_ = this.cell.stateSize.map(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](stateShape));
                } else {
                    this.states_[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](stateShape);
                }
            } else {
                if (!Array.isArray(states)) {
                    states = [
                        states
                    ];
                }
                if (states.length !== this.states_.length) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Layer ${this.name} expects ${this.states_.length} state(s), ` + `but it received ${states.length} state value(s). Input ` + `received: ${states}`);
                }
                if (training) {
                    // Store old state tensors for complete disposal later, i.e., during
                    // the next no-arg call to this method. We do not dispose the old
                    // states immediately because that BPTT (among other things) require
                    // them.
                    this.keptStates.push(this.states_.slice());
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"](this.states_);
                }
                for(let index = 0; index < this.states_.length; ++index){
                    const value = states[index];
                    const expectedShape = stateShape;
                    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(value.shape, expectedShape)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`State ${index} is incompatible with layer ${this.name}: ` + `expected shape=${expectedShape}, received shape=${value.shape}`);
                    }
                    this.states_[index] = value;
                }
            }
            this.states_ = this.states_.map((state)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"](state.clone()));
        });
    }
    computeSingleOutputShape(inputShape) {
        const { dataFormat, filters, kernelSize, padding, strides, dilationRate } = this.cell;
        const isChannelsFirst = dataFormat === 'channelsFirst';
        const h = inputShape[isChannelsFirst ? 3 : 2];
        const w = inputShape[isChannelsFirst ? 4 : 3];
        const hOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(h, kernelSize[0], padding, strides[0], dilationRate[0]);
        const wOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(w, kernelSize[1], padding, strides[1], dilationRate[1]);
        const outShape = [
            ...inputShape.slice(0, 2),
            ...isChannelsFirst ? [
                filters,
                hOut,
                wOut
            ] : [
                hOut,
                wOut,
                filters
            ]
        ];
        return outShape;
    }
}
/** @nocollapse */ ConvRNN2D.className = 'ConvRNN2D';
class ConvLSTM2DCell extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LSTMCell"] {
    constructor(args){
        const { filters, kernelSize, strides, padding, dataFormat, dilationRate } = args;
        super(Object.assign(Object.assign({}, args), {
            units: filters
        }));
        this.filters = filters;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.filters, 'filters');
        this.kernelSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeArray"])(kernelSize, 2, 'kernelSize');
        this.kernelSize.forEach((size)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(size, 'kernelSize'));
        this.strides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeArray"])(strides || 1, 2, 'strides');
        this.strides.forEach((stride)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(stride, 'strides'));
        this.padding = padding || 'valid';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(this.padding);
        this.dataFormat = dataFormat || 'channelsLast';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(this.dataFormat);
        this.dilationRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeArray"])(dilationRate || 1, 2, 'dilationRate');
        this.dilationRate.forEach((rate)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(rate, 'dilationRate'));
    }
    build(inputShape) {
        var _a;
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
        if (inputShape[channelAxis] == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`The channel dimension of the input should be defined. ` + `Found ${inputShape[channelAxis]}`);
        }
        const inputDim = inputShape[channelAxis];
        const numOfKernels = 4;
        const kernelShape = this.kernelSize.concat([
            inputDim,
            this.filters * numOfKernels
        ]);
        this.kernel = this.addWeight('kernel', kernelShape, null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
        const recurrentKernelShape = this.kernelSize.concat([
            this.filters,
            this.filters * numOfKernels
        ]);
        this.recurrentKernel = this.addWeight('recurrent_kernel', recurrentKernelShape, null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
        if (this.useBias) {
            let biasInitializer;
            if (this.unitForgetBias) {
                const init = this.biasInitializer;
                const filters = this.filters;
                biasInitializer = new (_a = class CustomInit extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Initializer"] {
                    apply(shape, dtype) {
                        const biasI = init.apply([
                            filters
                        ]);
                        const biasF = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ones"]([
                            filters
                        ]);
                        const biasCAndO = init.apply([
                            filters * 2
                        ]);
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatenate"]([
                            biasI,
                            biasF,
                            biasCAndO
                        ]);
                    }
                }, /** @nocollapse */ _a.className = 'CustomInit', _a)();
            } else {
                biasInitializer = this.biasInitializer;
            }
            this.bias = this.addWeight('bias', [
                this.filters * numOfKernels
            ], null, biasInitializer, this.biasRegularizer, true, this.biasConstraint);
        }
        this.built = true;
    }
    call(inputs, kwargs) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
            if (inputs.length !== 3) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ` + `${inputs.length}.`);
            }
            const training = kwargs['training'] || false;
            const x = inputs[0]; // Current input
            const hTMinus1 = inputs[1]; // Previous memory state.
            const cTMinus1 = inputs[2]; // Previous carry state.
            const numOfKernels = 4;
            if (0 < this.dropout && this.dropout < 1 && this.dropoutMask == null) {
                this.dropoutMask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateDropoutMask"])({
                    ones: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onesLike"](x),
                    rate: this.dropout,
                    training,
                    count: numOfKernels,
                    dropoutFunc: this.dropoutFunc
                });
            }
            const dropoutMask = this.dropoutMask;
            const applyDropout = (x, mask, index)=>{
                if (!mask || !mask[index]) {
                    return x;
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](mask[index], x);
            };
            let xI = applyDropout(x, dropoutMask, 0);
            let xF = applyDropout(x, dropoutMask, 1);
            let xC = applyDropout(x, dropoutMask, 2);
            let xO = applyDropout(x, dropoutMask, 3);
            if (0 < this.recurrentDropout && this.recurrentDropout < 1 && this.recurrentDropoutMask == null) {
                this.recurrentDropoutMask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateDropoutMask"])({
                    ones: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onesLike"](hTMinus1),
                    rate: this.recurrentDropout,
                    training,
                    count: numOfKernels,
                    dropoutFunc: this.dropoutFunc
                });
            }
            const recDropoutMask = this.recurrentDropoutMask;
            let hI = applyDropout(hTMinus1, recDropoutMask, 0);
            let hF = applyDropout(hTMinus1, recDropoutMask, 1);
            let hC = applyDropout(hTMinus1, recDropoutMask, 2);
            let hO = applyDropout(hTMinus1, recDropoutMask, 3);
            const kernelChannelAxis = 3;
            const [kernelI, kernelF, kernelC, kernelO] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"](this.kernel.read(), numOfKernels, kernelChannelAxis);
            const [biasI, biasF, biasC, biasO] = this.useBias ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"](this.bias.read(), numOfKernels) : [
                null,
                null,
                null,
                null
            ];
            xI = this.inputConv(xI, kernelI, biasI, this.padding);
            xF = this.inputConv(xF, kernelF, biasF, this.padding);
            xC = this.inputConv(xC, kernelC, biasC, this.padding);
            xO = this.inputConv(xO, kernelO, biasO, this.padding);
            const [recKernelI, recKernelF, recKernelC, recKernelO] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"](this.recurrentKernel.read(), numOfKernels, kernelChannelAxis);
            hI = this.recurrentConv(hI, recKernelI);
            hF = this.recurrentConv(hF, recKernelF);
            hC = this.recurrentConv(hC, recKernelC);
            hO = this.recurrentConv(hO, recKernelO);
            const i = this.recurrentActivation.apply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](xI, hI));
            const f = this.recurrentActivation.apply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](xF, hF));
            const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](f, cTMinus1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](i, this.activation.apply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](xC, hC))));
            const h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](this.recurrentActivation.apply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](xO, hO)), this.activation.apply(c));
            return [
                h,
                h,
                c
            ];
        });
    }
    getConfig() {
        const _a = super.getConfig(), { 'units': _ } = _a, baseConfig = __rest(_a, [
            'units'
        ]);
        const config = {
            filters: this.filters,
            kernelSize: this.kernelSize,
            padding: this.padding,
            dataFormat: this.dataFormat,
            dilationRate: this.dilationRate,
            strides: this.strides
        };
        return Object.assign(Object.assign({}, baseConfig), config);
    }
    inputConv(x, w, b, padding) {
        const out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, w, this.strides, padding || 'valid', this.dataFormat === 'channelsFirst' ? 'NCHW' : 'NHWC', this.dilationRate);
        if (b) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biasAdd"](out, b, this.dataFormat);
        }
        return out;
    }
    recurrentConv(x, w) {
        const strides = 1;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, w, strides, 'same', this.dataFormat === 'channelsFirst' ? 'NCHW' : 'NHWC');
    }
}
/** @nocollapse */ ConvLSTM2DCell.className = 'ConvLSTM2DCell';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(ConvLSTM2DCell);
class ConvLSTM2D extends ConvRNN2D {
    constructor(args){
        const cell = new ConvLSTM2DCell(args);
        super(Object.assign(Object.assign({}, args), {
            cell
        }));
    }
    /** @nocollapse */ static fromConfig(cls, config) {
        return new cls(config);
    }
}
/** @nocollapse */ ConvLSTM2D.className = 'ConvLSTM2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(ConvLSTM2D); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udm9sdXRpb25hbF9yZWN1cnJlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL2NvbnZvbHV0aW9uYWxfcmVjdXJyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHOzs7Ozs7Ozs7Ozs7QUFFSCxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBUyxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUduRCxPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFNUQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUk1QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFtQixtQkFBbUIsRUFBRSxRQUFRLEVBQW9DLEdBQUcsRUFBRSxPQUFPLEVBQXVDLE1BQU0sYUFBYSxDQUFDO0FBc0RsSyxNQUFlLGFBQWMsU0FBUSxPQUFPO0NBeUIzQztBQUtEOztHQUVHO0FBQ0gsTUFBTSxTQUFVLFNBQVEsR0FBRztJQU16QixZQUFZLElBQXdCO1FBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sSUFBSSxtQkFBbUIsQ0FDekIsb0RBQW9ELENBQUMsQ0FB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LENBQ3RCLEdBQWlELEVBQ2pELE1BQW9DO1FBQ3RDLE9BQU8sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7QUFkRCxrQkFBa0I7QUFDRixvQkFBUyxHQUFHLFlBQVksQ0FBQztTQUY5QixVQUFVO0FBa0J2QixHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCAqIGFzIHRmYyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtUZW5zb3IsIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7QWN0aXZhdGlvbn0gZnJvbSAnLi4vYWN0aXZhdGlvbnMnO1xuaW1wb3J0ICogYXMgSyBmcm9tICcuLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge2NoZWNrRGF0YUZvcm1hdCwgY2hlY2tQYWRkaW5nTW9kZX0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7Q29uc3RyYWludH0gZnJvbSAnLi4vY29uc3RyYWludHMnO1xuaW1wb3J0IHtJbnB1dFNwZWN9IGZyb20gJy4uL2VuZ2luZS90b3BvbG9neSc7XG5pbXBvcnQge0F0dHJpYnV0ZUVycm9yLCBOb3RJbXBsZW1lbnRlZEVycm9yLCBWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtJbml0aWFsaXplcn0gZnJvbSAnLi4vaW5pdGlhbGl6ZXJzJztcbmltcG9ydCB7RGF0YUZvcm1hdCwgRGF0YVR5cGUsIFBhZGRpbmdNb2RlLCBTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge1JlZ3VsYXJpemVyfSBmcm9tICcuLi9yZWd1bGFyaXplcnMnO1xuaW1wb3J0IHtLd2FyZ3N9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7Y29udk91dHB1dExlbmd0aCwgbm9ybWFsaXplQXJyYXl9IGZyb20gJy4uL3V0aWxzL2NvbnZfdXRpbHMnO1xuaW1wb3J0IHthc3NlcnRQb3NpdGl2ZUludGVnZXJ9IGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuaW1wb3J0IHtnZXRFeGFjdGx5T25lU2hhcGV9IGZyb20gJy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcblxuaW1wb3J0IHtCYXNlUk5OTGF5ZXJBcmdzLCBnZW5lcmF0ZURyb3BvdXRNYXNrLCBMU1RNQ2VsbCwgTFNUTUNlbGxMYXllckFyZ3MsIExTVE1MYXllckFyZ3MsIFJOTiwgUk5OQ2VsbCwgUk5OTGF5ZXJBcmdzLCBTaW1wbGVSTk5DZWxsTGF5ZXJBcmdzfSBmcm9tICcuL3JlY3VycmVudCc7XG5cbmRlY2xhcmUgaW50ZXJmYWNlIENvbnZSTk4yRENlbGxBcmdzIGV4dGVuZHNcbiAgICBPbWl0PFNpbXBsZVJOTkNlbGxMYXllckFyZ3MsICd1bml0cyc+IHtcbiAgLyoqXG4gICAqIFRoZSBkaW1lbnNpb25hbGl0eSBvZiB0aGUgb3V0cHV0IHNwYWNlIChpLmUuIHRoZSBudW1iZXIgb2YgZmlsdGVycyBpbiB0aGVcbiAgICogY29udm9sdXRpb24pLlxuICAgKi9cbiAgZmlsdGVyczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGltZW5zaW9ucyBvZiB0aGUgY29udm9sdXRpb24gd2luZG93LiBJZiBrZXJuZWxTaXplIGlzIGEgbnVtYmVyLCB0aGVcbiAgICogY29udm9sdXRpb25hbCB3aW5kb3cgd2lsbCBiZSBzcXVhcmUuXG4gICAqL1xuICBrZXJuZWxTaXplOiBudW1iZXJ8bnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFRoZSBzdHJpZGVzIG9mIHRoZSBjb252b2x1dGlvbiBpbiBlYWNoIGRpbWVuc2lvbi4gSWYgc3RyaWRlcyBpcyBhIG51bWJlcixcbiAgICogc3RyaWRlcyBpbiBib3RoIGRpbWVuc2lvbnMgYXJlIGVxdWFsLlxuICAgKlxuICAgKiBTcGVjaWZ5aW5nIGFueSBzdHJpZGUgdmFsdWUgIT0gMSBpcyBpbmNvbXBhdGlibGUgd2l0aCBzcGVjaWZ5aW5nIGFueVxuICAgKiBgZGlsYXRpb25SYXRlYCB2YWx1ZSAhPSAxLlxuICAgKi9cbiAgc3RyaWRlcz86IG51bWJlcnxudW1iZXJbXTtcblxuICAvKipcbiAgICogUGFkZGluZyBtb2RlLlxuICAgKi9cbiAgcGFkZGluZz86IFBhZGRpbmdNb2RlO1xuXG4gIC8qKlxuICAgKiBGb3JtYXQgb2YgdGhlIGRhdGEsIHdoaWNoIGRldGVybWluZXMgdGhlIG9yZGVyaW5nIG9mIHRoZSBkaW1lbnNpb25zIGluXG4gICAqIHRoZSBpbnB1dHMuXG4gICAqXG4gICAqIGBjaGFubmVsc19sYXN0YCBjb3JyZXNwb25kcyB0byBpbnB1dHMgd2l0aCBzaGFwZVxuICAgKiAgIGAoYmF0Y2gsIC4uLiwgY2hhbm5lbHMpYFxuICAgKlxuICAgKiAgYGNoYW5uZWxzX2ZpcnN0YCBjb3JyZXNwb25kcyB0byBpbnB1dHMgd2l0aCBzaGFwZSBgKGJhdGNoLCBjaGFubmVscyxcbiAgICogLi4uKWAuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIGBjaGFubmVsc19sYXN0YC5cbiAgICovXG4gIGRhdGFGb3JtYXQ/OiBEYXRhRm9ybWF0O1xuXG4gIC8qKlxuICAgKiBUaGUgZGlsYXRpb24gcmF0ZSB0byB1c2UgZm9yIHRoZSBkaWxhdGVkIGNvbnZvbHV0aW9uIGluIGVhY2ggZGltZW5zaW9uLlxuICAgKiBTaG91bGQgYmUgYW4gaW50ZWdlciBvciBhcnJheSBvZiB0d28gb3IgdGhyZWUgaW50ZWdlcnMuXG4gICAqXG4gICAqIEN1cnJlbnRseSwgc3BlY2lmeWluZyBhbnkgYGRpbGF0aW9uUmF0ZWAgdmFsdWUgIT0gMSBpcyBpbmNvbXBhdGlibGUgd2l0aFxuICAgKiBzcGVjaWZ5aW5nIGFueSBgc3RyaWRlc2AgdmFsdWUgIT0gMS5cbiAgICovXG4gIGRpbGF0aW9uUmF0ZT86IG51bWJlcnxbbnVtYmVyXXxbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5hYnN0cmFjdCBjbGFzcyBDb252Uk5OMkRDZWxsIGV4dGVuZHMgUk5OQ2VsbCB7XG4gIHJlYWRvbmx5IGZpbHRlcnM6IG51bWJlcjtcbiAgcmVhZG9ubHkga2VybmVsU2l6ZTogbnVtYmVyW107XG4gIHJlYWRvbmx5IHN0cmlkZXM6IG51bWJlcltdO1xuICByZWFkb25seSBwYWRkaW5nOiBQYWRkaW5nTW9kZTtcbiAgcmVhZG9ubHkgZGF0YUZvcm1hdDogRGF0YUZvcm1hdDtcbiAgcmVhZG9ubHkgZGlsYXRpb25SYXRlOiBudW1iZXJbXTtcblxuICByZWFkb25seSBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uO1xuICByZWFkb25seSB1c2VCaWFzOiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGtlcm5lbEluaXRpYWxpemVyOiBJbml0aWFsaXplcjtcbiAgcmVhZG9ubHkgcmVjdXJyZW50SW5pdGlhbGl6ZXI6IEluaXRpYWxpemVyO1xuICByZWFkb25seSBiaWFzSW5pdGlhbGl6ZXI6IEluaXRpYWxpemVyO1xuXG4gIHJlYWRvbmx5IGtlcm5lbENvbnN0cmFpbnQ6IENvbnN0cmFpbnQ7XG4gIHJlYWRvbmx5IHJlY3VycmVudENvbnN0cmFpbnQ6IENvbnN0cmFpbnQ7XG4gIHJlYWRvbmx5IGJpYXNDb25zdHJhaW50OiBDb25zdHJhaW50O1xuXG4gIHJlYWRvbmx5IGtlcm5lbFJlZ3VsYXJpemVyOiBSZWd1bGFyaXplcjtcbiAgcmVhZG9ubHkgcmVjdXJyZW50UmVndWxhcml6ZXI6IFJlZ3VsYXJpemVyO1xuICByZWFkb25seSBiaWFzUmVndWxhcml6ZXI6IFJlZ3VsYXJpemVyO1xuXG4gIHJlYWRvbmx5IGRyb3BvdXQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgcmVjdXJyZW50RHJvcG91dDogbnVtYmVyO1xufVxuXG5kZWNsYXJlIGludGVyZmFjZSBDb252Uk5OMkRMYXllckFyZ3MgZXh0ZW5kcyBCYXNlUk5OTGF5ZXJBcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udlJOTjJEQ2VsbEFyZ3Mge31cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb252b2x1dGlvbmFsLXJlY3VycmVudCBsYXllcnMuXG4gKi9cbmNsYXNzIENvbnZSTk4yRCBleHRlbmRzIFJOTiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgb3ZlcnJpZGUgY2xhc3NOYW1lID0gJ0NvbnZSTk4yRCc7XG5cbiAgZGVjbGFyZSByZWFkb25seSBjZWxsOiBDb252Uk5OMkRDZWxsO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IENvbnZSTk4yRExheWVyQXJncykge1xuICAgIGlmIChhcmdzLnVucm9sbCkge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgJ1Vucm9sbGluZyBpcyBub3QgcG9zc2libGUgd2l0aCBjb252b2x1dGlvbmFsIFJOTnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncy5jZWxsKSkge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgJ0l0IGlzIG5vdCBwb3NzaWJsZSBhdCB0aGUgbW9tZW50IHRvIHN0YWNrIGNvbnZvbHV0aW9uYWwgY2VsbHMuJyk7XG4gICAgfVxuXG4gICAgc3VwZXIoYXJncyBhcyBSTk5MYXllckFyZ3MpO1xuXG4gICAgdGhpcy5pbnB1dFNwZWMgPSBbbmV3IElucHV0U3BlYyh7bmRpbTogNX0pXTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGZjLnRpZHkoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2VsbC5kcm9wb3V0TWFzayAhPSBudWxsKSB7XG4gICAgICAgIHRmYy5kaXNwb3NlKHRoaXMuY2VsbC5kcm9wb3V0TWFzayk7XG5cbiAgICAgICAgdGhpcy5jZWxsLmRyb3BvdXRNYXNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2VsbC5yZWN1cnJlbnREcm9wb3V0TWFzayAhPSBudWxsKSB7XG4gICAgICAgIHRmYy5kaXNwb3NlKHRoaXMuY2VsbC5yZWN1cnJlbnREcm9wb3V0TWFzayk7XG5cbiAgICAgICAgdGhpcy5jZWxsLnJlY3VycmVudERyb3BvdXRNYXNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGt3YXJncyAmJiBrd2FyZ3NbJ2NvbnN0YW50cyddKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKCdDb252Uk5OMkQgY2VsbCBkb2VzIG5vdCBzdXBwb3J0IGNvbnN0YW50cycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXNrID0ga3dhcmdzID09IG51bGwgPyBudWxsIDoga3dhcmdzWydtYXNrJ107XG5cbiAgICAgIGNvbnN0IHRyYWluaW5nID0ga3dhcmdzID09IG51bGwgPyBudWxsIDoga3dhcmdzWyd0cmFpbmluZyddO1xuXG4gICAgICBjb25zdCBpbml0aWFsU3RhdGU6IFRlbnNvcltdID1cbiAgICAgICAgICBrd2FyZ3MgPT0gbnVsbCA/IG51bGwgOiBrd2FyZ3NbJ2luaXRpYWxTdGF0ZSddO1xuXG4gICAgICByZXR1cm4gc3VwZXIuY2FsbChpbnB1dHMsIHttYXNrLCB0cmFpbmluZywgaW5pdGlhbFN0YXRlfSk7XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGUpOiBTaGFwZXxTaGFwZVtdIHtcbiAgICBsZXQgb3V0U2hhcGU6IFNoYXBlID0gdGhpcy5jb21wdXRlU2luZ2xlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZSk7XG5cbiAgICBpZiAoIXRoaXMucmV0dXJuU2VxdWVuY2VzKSB7XG4gICAgICBvdXRTaGFwZSA9IFtvdXRTaGFwZVswXSwgLi4ub3V0U2hhcGUuc2xpY2UoMildO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJldHVyblN0YXRlKSB7XG4gICAgICBvdXRTaGFwZSA9XG4gICAgICAgICAgW291dFNoYXBlLCAuLi5BcnJheSgyKS5maWxsKFtpbnB1dFNoYXBlWzBdLCAuLi5vdXRTaGFwZS5zbGljZSgtMyldKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dFNoYXBlO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0SW5pdGlhbFN0YXRlKGlucHV0czogdGZjLlRlbnNvcik6IHRmYy5UZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRmYy50aWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IHtzdGF0ZVNpemV9ID0gdGhpcy5jZWxsO1xuXG4gICAgICBjb25zdCBpbnB1dFNoYXBlID0gaW5wdXRzLnNoYXBlO1xuXG4gICAgICBjb25zdCBvdXRwdXRTaGFwZSA9IHRoaXMuY29tcHV0ZVNpbmdsZU91dHB1dFNoYXBlKGlucHV0U2hhcGUpO1xuXG4gICAgICBjb25zdCBzdGF0ZVNoYXBlID0gW291dHB1dFNoYXBlWzBdLCAuLi5vdXRwdXRTaGFwZS5zbGljZSgyKV07XG5cbiAgICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRmYy56ZXJvcyhzdGF0ZVNoYXBlKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGVTaXplKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkoc3RhdGVTaXplLmxlbmd0aCkuZmlsbChpbml0aWFsU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW2luaXRpYWxTdGF0ZV07XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSByZXNldFN0YXRlcyhzdGF0ZXM/OiBUZW5zb3J8VGVuc29yW10sIHRyYWluaW5nID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0ZmMudGlkeSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGVmdWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF0dHJpYnV0ZUVycm9yKFxuICAgICAgICAgICAgJ0Nhbm5vdCBjYWxsIHJlc2V0U3RhdGVzKCkgb24gYW4gUk5OIExheWVyIHRoYXQgaXMgbm90IHN0YXRlZnVsLicpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnB1dFNoYXBlID0gdGhpcy5pbnB1dFNwZWNbMF0uc2hhcGU7XG5cbiAgICAgIGNvbnN0IG91dHB1dFNoYXBlID0gdGhpcy5jb21wdXRlU2luZ2xlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZSk7XG5cbiAgICAgIGNvbnN0IHN0YXRlU2hhcGUgPSBbb3V0cHV0U2hhcGVbMF0sIC4uLm91dHB1dFNoYXBlLnNsaWNlKDIpXTtcblxuICAgICAgY29uc3QgYmF0Y2hTaXplID0gaW5wdXRTaGFwZVswXTtcblxuICAgICAgaWYgKGJhdGNoU2l6ZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgJ0lmIGFuIFJOTiBpcyBzdGF0ZWZ1bCwgaXQgbmVlZHMgdG8ga25vdyBpdHMgYmF0Y2ggc2l6ZS4gU3BlY2lmeSAnICtcbiAgICAgICAgICAgICd0aGUgYmF0Y2ggc2l6ZSBvZiB5b3VyIGlucHV0IHRlbnNvcnM6IFxcbicgK1xuICAgICAgICAgICAgJy0gSWYgdXNpbmcgYSBTZXF1ZW50aWFsIG1vZGVsLCBzcGVjaWZ5IHRoZSBiYXRjaCBzaXplIGJ5ICcgK1xuICAgICAgICAgICAgJ3Bhc3NpbmcgYSBgYmF0Y2hJbnB1dFNoYXBlYCBvcHRpb24gdG8geW91ciBmaXJzdCBsYXllci5cXG4nICtcbiAgICAgICAgICAgICctIElmIHVzaW5nIHRoZSBmdW5jdGlvbmFsIEFQSSwgc3BlY2lmeSB0aGUgYmF0Y2ggc2l6ZSBieSAnICtcbiAgICAgICAgICAgICdwYXNzaW5nIGEgYGJhdGNoU2hhcGVgIG9wdGlvbiB0byB5b3VyIElucHV0IGxheWVyLicpO1xuICAgICAgfVxuXG4gICAgICAvLyBJbml0aWFsaXplIHN0YXRlIGlmIG51bGwuXG4gICAgICBpZiAodGhpcy5nZXRTdGF0ZXMoKSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY2VsbC5zdGF0ZVNpemUpKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZXNfID0gdGhpcy5jZWxsLnN0YXRlU2l6ZS5tYXAoKCkgPT4gdGZjLnplcm9zKHN0YXRlU2hhcGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlc18gPSBbdGZjLnplcm9zKHN0YXRlU2hhcGUpXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMgPT0gbnVsbCkge1xuICAgICAgICAvLyBEaXNwb3NlIG9sZCBzdGF0ZSB0ZW5zb3JzLlxuICAgICAgICB0ZmMuZGlzcG9zZSh0aGlzLnN0YXRlc18pO1xuXG4gICAgICAgIC8vIEZvciBzdGF0ZWZ1bCBSTk5zLCBmdWxseSBkaXNwb3NlIGtlcHQgb2xkIHN0YXRlcy5cbiAgICAgICAgaWYgKHRoaXMua2VwdFN0YXRlcyAhPSBudWxsKSB7XG4gICAgICAgICAgdGZjLmRpc3Bvc2UodGhpcy5rZXB0U3RhdGVzKTtcbiAgICAgICAgICB0aGlzLmtlcHRTdGF0ZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY2VsbC5zdGF0ZVNpemUpKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZXNfID0gdGhpcy5jZWxsLnN0YXRlU2l6ZS5tYXAoKCkgPT4gdGZjLnplcm9zKHN0YXRlU2hhcGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlc19bMF0gPSB0ZmMuemVyb3Moc3RhdGVTaGFwZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzdGF0ZXMpKSB7XG4gICAgICAgICAgc3RhdGVzID0gW3N0YXRlc107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGVzLmxlbmd0aCAhPT0gdGhpcy5zdGF0ZXNfLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICBgTGF5ZXIgJHt0aGlzLm5hbWV9IGV4cGVjdHMgJHt0aGlzLnN0YXRlc18ubGVuZ3RofSBzdGF0ZShzKSwgYCArXG4gICAgICAgICAgICAgIGBidXQgaXQgcmVjZWl2ZWQgJHtzdGF0ZXMubGVuZ3RofSBzdGF0ZSB2YWx1ZShzKS4gSW5wdXQgYCArXG4gICAgICAgICAgICAgIGByZWNlaXZlZDogJHtzdGF0ZXN9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhaW5pbmcpIHtcbiAgICAgICAgICAvLyBTdG9yZSBvbGQgc3RhdGUgdGVuc29ycyBmb3IgY29tcGxldGUgZGlzcG9zYWwgbGF0ZXIsIGkuZS4sIGR1cmluZ1xuICAgICAgICAgIC8vIHRoZSBuZXh0IG5vLWFyZyBjYWxsIHRvIHRoaXMgbWV0aG9kLiBXZSBkbyBub3QgZGlzcG9zZSB0aGUgb2xkXG4gICAgICAgICAgLy8gc3RhdGVzIGltbWVkaWF0ZWx5IGJlY2F1c2UgdGhhdCBCUFRUIChhbW9uZyBvdGhlciB0aGluZ3MpIHJlcXVpcmVcbiAgICAgICAgICAvLyB0aGVtLlxuICAgICAgICAgIHRoaXMua2VwdFN0YXRlcy5wdXNoKHRoaXMuc3RhdGVzXy5zbGljZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZmMuZGlzcG9zZSh0aGlzLnN0YXRlc18pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3RhdGVzXy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlc1tpbmRleF07XG5cbiAgICAgICAgICBjb25zdCBleHBlY3RlZFNoYXBlID0gc3RhdGVTaGFwZTtcblxuICAgICAgICAgIGlmICghdXRpbC5hcnJheXNFcXVhbCh2YWx1ZS5zaGFwZSwgZXhwZWN0ZWRTaGFwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICAgIGBTdGF0ZSAke2luZGV4fSBpcyBpbmNvbXBhdGlibGUgd2l0aCBsYXllciAke3RoaXMubmFtZX06IGAgK1xuICAgICAgICAgICAgICAgIGBleHBlY3RlZCBzaGFwZT0ke2V4cGVjdGVkU2hhcGV9LCByZWNlaXZlZCBzaGFwZT0ke1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zaGFwZX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN0YXRlc19baW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZXNfID0gdGhpcy5zdGF0ZXNfLm1hcChzdGF0ZSA9PiB0ZmMua2VlcChzdGF0ZS5jbG9uZSgpKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcHV0ZVNpbmdsZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlKTogU2hhcGUge1xuICAgIGNvbnN0IHtkYXRhRm9ybWF0LCBmaWx0ZXJzLCBrZXJuZWxTaXplLCBwYWRkaW5nLCBzdHJpZGVzLCBkaWxhdGlvblJhdGV9ID1cbiAgICAgICAgdGhpcy5jZWxsO1xuXG4gICAgY29uc3QgaXNDaGFubmVsc0ZpcnN0ID0gZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnO1xuXG4gICAgY29uc3QgaCA9IGlucHV0U2hhcGVbaXNDaGFubmVsc0ZpcnN0ID8gMyA6IDJdO1xuICAgIGNvbnN0IHcgPSBpbnB1dFNoYXBlW2lzQ2hhbm5lbHNGaXJzdCA/IDQgOiAzXTtcblxuICAgIGNvbnN0IGhPdXQgPSBjb252T3V0cHV0TGVuZ3RoKFxuICAgICAgICBoLCBrZXJuZWxTaXplWzBdLCBwYWRkaW5nLCBzdHJpZGVzWzBdLCBkaWxhdGlvblJhdGVbMF0pO1xuICAgIGNvbnN0IHdPdXQgPSBjb252T3V0cHV0TGVuZ3RoKFxuICAgICAgICB3LCBrZXJuZWxTaXplWzFdLCBwYWRkaW5nLCBzdHJpZGVzWzFdLCBkaWxhdGlvblJhdGVbMV0pO1xuXG4gICAgY29uc3Qgb3V0U2hhcGU6IFNoYXBlID0gW1xuICAgICAgLi4uaW5wdXRTaGFwZS5zbGljZSgwLCAyKSxcbiAgICAgIC4uLihpc0NoYW5uZWxzRmlyc3QgPyBbZmlsdGVycywgaE91dCwgd091dF0gOiBbaE91dCwgd091dCwgZmlsdGVyc10pXG4gICAgXTtcblxuICAgIHJldHVybiBvdXRTaGFwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQ29udkxTVE0yRENlbGxBcmdzIGV4dGVuZHNcbiAgICBPbWl0PExTVE1DZWxsTGF5ZXJBcmdzLCAndW5pdHMnPiwgQ29udlJOTjJEQ2VsbEFyZ3Mge31cblxuZXhwb3J0IGNsYXNzIENvbnZMU1RNMkRDZWxsIGV4dGVuZHMgTFNUTUNlbGwgaW1wbGVtZW50cyBDb252Uk5OMkRDZWxsIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBjbGFzc05hbWUgPSAnQ29udkxTVE0yRENlbGwnO1xuXG4gIHJlYWRvbmx5IGZpbHRlcnM6IG51bWJlcjtcbiAgcmVhZG9ubHkga2VybmVsU2l6ZTogbnVtYmVyW107XG4gIHJlYWRvbmx5IHN0cmlkZXM6IG51bWJlcltdO1xuICByZWFkb25seSBwYWRkaW5nOiBQYWRkaW5nTW9kZTtcbiAgcmVhZG9ubHkgZGF0YUZvcm1hdDogRGF0YUZvcm1hdDtcbiAgcmVhZG9ubHkgZGlsYXRpb25SYXRlOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBDb252TFNUTTJEQ2VsbEFyZ3MpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWx0ZXJzLFxuICAgICAga2VybmVsU2l6ZSxcbiAgICAgIHN0cmlkZXMsXG4gICAgICBwYWRkaW5nLFxuICAgICAgZGF0YUZvcm1hdCxcbiAgICAgIGRpbGF0aW9uUmF0ZSxcbiAgICB9ID0gYXJncztcblxuICAgIHN1cGVyKHsuLi5hcmdzLCB1bml0czogZmlsdGVyc30pO1xuXG4gICAgdGhpcy5maWx0ZXJzID0gZmlsdGVycztcbiAgICBhc3NlcnRQb3NpdGl2ZUludGVnZXIodGhpcy5maWx0ZXJzLCAnZmlsdGVycycpO1xuXG4gICAgdGhpcy5rZXJuZWxTaXplID0gbm9ybWFsaXplQXJyYXkoa2VybmVsU2l6ZSwgMiwgJ2tlcm5lbFNpemUnKTtcbiAgICB0aGlzLmtlcm5lbFNpemUuZm9yRWFjaChzaXplID0+IGFzc2VydFBvc2l0aXZlSW50ZWdlcihzaXplLCAna2VybmVsU2l6ZScpKTtcblxuICAgIHRoaXMuc3RyaWRlcyA9IG5vcm1hbGl6ZUFycmF5KHN0cmlkZXMgfHwgMSwgMiwgJ3N0cmlkZXMnKTtcbiAgICB0aGlzLnN0cmlkZXMuZm9yRWFjaChzdHJpZGUgPT4gYXNzZXJ0UG9zaXRpdmVJbnRlZ2VyKHN0cmlkZSwgJ3N0cmlkZXMnKSk7XG5cbiAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nIHx8ICd2YWxpZCc7XG4gICAgY2hlY2tQYWRkaW5nTW9kZSh0aGlzLnBhZGRpbmcpO1xuXG4gICAgdGhpcy5kYXRhRm9ybWF0ID0gZGF0YUZvcm1hdCB8fCAnY2hhbm5lbHNMYXN0JztcbiAgICBjaGVja0RhdGFGb3JtYXQodGhpcy5kYXRhRm9ybWF0KTtcblxuICAgIHRoaXMuZGlsYXRpb25SYXRlID0gbm9ybWFsaXplQXJyYXkoZGlsYXRpb25SYXRlIHx8IDEsIDIsICdkaWxhdGlvblJhdGUnKTtcbiAgICB0aGlzLmRpbGF0aW9uUmF0ZS5mb3JFYWNoKFxuICAgICAgICByYXRlID0+IGFzc2VydFBvc2l0aXZlSW50ZWdlcihyYXRlLCAnZGlsYXRpb25SYXRlJykpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGJ1aWxkKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiB2b2lkIHtcbiAgICBpbnB1dFNoYXBlID0gZ2V0RXhhY3RseU9uZVNoYXBlKGlucHV0U2hhcGUpO1xuXG4gICAgY29uc3QgY2hhbm5lbEF4aXMgPVxuICAgICAgICB0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0JyA/IDEgOiBpbnB1dFNoYXBlLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoaW5wdXRTaGFwZVtjaGFubmVsQXhpc10gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYFRoZSBjaGFubmVsIGRpbWVuc2lvbiBvZiB0aGUgaW5wdXQgc2hvdWxkIGJlIGRlZmluZWQuIGAgK1xuICAgICAgICAgIGBGb3VuZCAke2lucHV0U2hhcGVbY2hhbm5lbEF4aXNdfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGltID0gaW5wdXRTaGFwZVtjaGFubmVsQXhpc107XG5cbiAgICBjb25zdCBudW1PZktlcm5lbHMgPSA0O1xuXG4gICAgY29uc3Qga2VybmVsU2hhcGUgPVxuICAgICAgICB0aGlzLmtlcm5lbFNpemUuY29uY2F0KFtpbnB1dERpbSwgdGhpcy5maWx0ZXJzICogbnVtT2ZLZXJuZWxzXSk7XG5cbiAgICB0aGlzLmtlcm5lbCA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAna2VybmVsJywga2VybmVsU2hhcGUsIG51bGwsIHRoaXMua2VybmVsSW5pdGlhbGl6ZXIsXG4gICAgICAgIHRoaXMua2VybmVsUmVndWxhcml6ZXIsIHRydWUsIHRoaXMua2VybmVsQ29uc3RyYWludCk7XG5cbiAgICBjb25zdCByZWN1cnJlbnRLZXJuZWxTaGFwZSA9XG4gICAgICAgIHRoaXMua2VybmVsU2l6ZS5jb25jYXQoW3RoaXMuZmlsdGVycywgdGhpcy5maWx0ZXJzICogbnVtT2ZLZXJuZWxzXSk7XG5cbiAgICB0aGlzLnJlY3VycmVudEtlcm5lbCA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAncmVjdXJyZW50X2tlcm5lbCcsIHJlY3VycmVudEtlcm5lbFNoYXBlLCBudWxsLFxuICAgICAgICB0aGlzLnJlY3VycmVudEluaXRpYWxpemVyLCB0aGlzLnJlY3VycmVudFJlZ3VsYXJpemVyLCB0cnVlLFxuICAgICAgICB0aGlzLnJlY3VycmVudENvbnN0cmFpbnQpO1xuXG4gICAgaWYgKHRoaXMudXNlQmlhcykge1xuICAgICAgbGV0IGJpYXNJbml0aWFsaXplcjogSW5pdGlhbGl6ZXI7XG5cbiAgICAgIGlmICh0aGlzLnVuaXRGb3JnZXRCaWFzKSB7XG4gICAgICAgIGNvbnN0IGluaXQgPSB0aGlzLmJpYXNJbml0aWFsaXplcjtcblxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5maWx0ZXJzO1xuXG4gICAgICAgIGJpYXNJbml0aWFsaXplciA9IG5ldyAoY2xhc3MgQ3VzdG9tSW5pdCBleHRlbmRzIEluaXRpYWxpemVyIHtcbiAgICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgICBzdGF0aWMgY2xhc3NOYW1lID0gJ0N1c3RvbUluaXQnO1xuXG4gICAgICAgICAgYXBwbHkoc2hhcGU6IFNoYXBlLCBkdHlwZT86IERhdGFUeXBlKTogdGZjLlRlbnNvciB7XG4gICAgICAgICAgICBjb25zdCBiaWFzSSA9IGluaXQuYXBwbHkoW2ZpbHRlcnNdKTtcbiAgICAgICAgICAgIGNvbnN0IGJpYXNGID0gdGZjLm9uZXMoW2ZpbHRlcnNdKTtcbiAgICAgICAgICAgIGNvbnN0IGJpYXNDQW5kTyA9IGluaXQuYXBwbHkoW2ZpbHRlcnMgKiAyXSk7XG4gICAgICAgICAgICByZXR1cm4gSy5jb25jYXRlbmF0ZShbYmlhc0ksIGJpYXNGLCBiaWFzQ0FuZE9dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaWFzSW5pdGlhbGl6ZXIgPSB0aGlzLmJpYXNJbml0aWFsaXplcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5iaWFzID0gdGhpcy5hZGRXZWlnaHQoXG4gICAgICAgICAgJ2JpYXMnLCBbdGhpcy5maWx0ZXJzICogbnVtT2ZLZXJuZWxzXSwgbnVsbCwgYmlhc0luaXRpYWxpemVyLFxuICAgICAgICAgIHRoaXMuYmlhc1JlZ3VsYXJpemVyLCB0cnVlLCB0aGlzLmJpYXNDb25zdHJhaW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiB0ZmMuVGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogdGZjLlRlbnNvcltdIHtcbiAgICByZXR1cm4gdGZjLnRpZHkoKCkgPT4ge1xuICAgICAgaWYgKGlucHV0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgQ29udkxTVE0yRENlbGwgZXhwZWN0cyAzIGlucHV0IFRlbnNvcnMgKGlucHV0cywgaCwgYyksIGdvdCBgICtcbiAgICAgICAgICAgIGAke2lucHV0cy5sZW5ndGh9LmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0cmFpbmluZyA9IGt3YXJnc1sndHJhaW5pbmcnXSB8fCBmYWxzZTtcblxuICAgICAgY29uc3QgeCA9IGlucHV0c1swXTsgICAgICAgICAvLyBDdXJyZW50IGlucHV0XG4gICAgICBjb25zdCBoVE1pbnVzMSA9IGlucHV0c1sxXTsgIC8vIFByZXZpb3VzIG1lbW9yeSBzdGF0ZS5cbiAgICAgIGNvbnN0IGNUTWludXMxID0gaW5wdXRzWzJdOyAgLy8gUHJldmlvdXMgY2Fycnkgc3RhdGUuXG5cbiAgICAgIGNvbnN0IG51bU9mS2VybmVscyA9IDQ7XG5cbiAgICAgIHR5cGUgRHJvcG91dE1hc2tzID0gW3RmYy5UZW5zb3IsIHRmYy5UZW5zb3IsIHRmYy5UZW5zb3IsIHRmYy5UZW5zb3JdO1xuXG4gICAgICBpZiAoMCA8IHRoaXMuZHJvcG91dCAmJiB0aGlzLmRyb3BvdXQgPCAxICYmIHRoaXMuZHJvcG91dE1hc2sgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRyb3BvdXRNYXNrID0gZ2VuZXJhdGVEcm9wb3V0TWFzayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZXM6ICgpID0+IHRmYy5vbmVzTGlrZSh4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0ZTogdGhpcy5kcm9wb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFpbmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IG51bU9mS2VybmVscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcG91dEZ1bmM6IHRoaXMuZHJvcG91dEZ1bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIGFzIHRmYy5UZW5zb3JbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcG91dE1hc2sgPSB0aGlzLmRyb3BvdXRNYXNrIGFzIERyb3BvdXRNYXNrcztcblxuICAgICAgY29uc3QgYXBwbHlEcm9wb3V0ID1cbiAgICAgICAgICAoeDogdGZjLlRlbnNvciwgbWFzazogdGZjLlRlbnNvcltdLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1hc2sgfHwgIW1hc2tbaW5kZXhdKSB7XG4gICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGZjLm11bChtYXNrW2luZGV4XSwgeCk7XG4gICAgICAgICAgfTtcblxuICAgICAgbGV0IHhJID0gYXBwbHlEcm9wb3V0KHgsIGRyb3BvdXRNYXNrLCAwKTtcbiAgICAgIGxldCB4RiA9IGFwcGx5RHJvcG91dCh4LCBkcm9wb3V0TWFzaywgMSk7XG4gICAgICBsZXQgeEMgPSBhcHBseURyb3BvdXQoeCwgZHJvcG91dE1hc2ssIDIpO1xuICAgICAgbGV0IHhPID0gYXBwbHlEcm9wb3V0KHgsIGRyb3BvdXRNYXNrLCAzKTtcblxuICAgICAgaWYgKDAgPCB0aGlzLnJlY3VycmVudERyb3BvdXQgJiYgdGhpcy5yZWN1cnJlbnREcm9wb3V0IDwgMSAmJlxuICAgICAgICAgIHRoaXMucmVjdXJyZW50RHJvcG91dE1hc2sgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlY3VycmVudERyb3BvdXRNYXNrID0gZ2VuZXJhdGVEcm9wb3V0TWFzayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZXM6ICgpID0+IHRmYy5vbmVzTGlrZShoVE1pbnVzMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGU6IHRoaXMucmVjdXJyZW50RHJvcG91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhaW5pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBudW1PZktlcm5lbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BvdXRGdW5jOiB0aGlzLmRyb3BvdXRGdW5jXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBhcyB0ZmMuVGVuc29yW107XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlY0Ryb3BvdXRNYXNrID0gdGhpcy5yZWN1cnJlbnREcm9wb3V0TWFzayBhcyBEcm9wb3V0TWFza3M7XG5cbiAgICAgIGxldCBoSSA9IGFwcGx5RHJvcG91dChoVE1pbnVzMSwgcmVjRHJvcG91dE1hc2ssIDApO1xuICAgICAgbGV0IGhGID0gYXBwbHlEcm9wb3V0KGhUTWludXMxLCByZWNEcm9wb3V0TWFzaywgMSk7XG4gICAgICBsZXQgaEMgPSBhcHBseURyb3BvdXQoaFRNaW51czEsIHJlY0Ryb3BvdXRNYXNrLCAyKTtcbiAgICAgIGxldCBoTyA9IGFwcGx5RHJvcG91dChoVE1pbnVzMSwgcmVjRHJvcG91dE1hc2ssIDMpO1xuXG4gICAgICBjb25zdCBrZXJuZWxDaGFubmVsQXhpcyA9IDM7XG5cbiAgICAgIGNvbnN0IFtrZXJuZWxJLCBrZXJuZWxGLCBrZXJuZWxDLCBrZXJuZWxPXTogdGZjLlRlbnNvcltdID1cbiAgICAgICAgICB0ZmMuc3BsaXQodGhpcy5rZXJuZWwucmVhZCgpLCBudW1PZktlcm5lbHMsIGtlcm5lbENoYW5uZWxBeGlzKTtcblxuICAgICAgY29uc3QgW2JpYXNJLCBiaWFzRiwgYmlhc0MsIGJpYXNPXTogdGZjLlRlbnNvcltdID0gdGhpcy51c2VCaWFzID9cbiAgICAgICAgICB0ZmMuc3BsaXQodGhpcy5iaWFzLnJlYWQoKSwgbnVtT2ZLZXJuZWxzKSA6XG4gICAgICAgICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG4gICAgICB4SSA9IHRoaXMuaW5wdXRDb252KHhJLCBrZXJuZWxJLCBiaWFzSSwgdGhpcy5wYWRkaW5nKTtcbiAgICAgIHhGID0gdGhpcy5pbnB1dENvbnYoeEYsIGtlcm5lbEYsIGJpYXNGLCB0aGlzLnBhZGRpbmcpO1xuICAgICAgeEMgPSB0aGlzLmlucHV0Q29udih4Qywga2VybmVsQywgYmlhc0MsIHRoaXMucGFkZGluZyk7XG4gICAgICB4TyA9IHRoaXMuaW5wdXRDb252KHhPLCBrZXJuZWxPLCBiaWFzTywgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgY29uc3QgW3JlY0tlcm5lbEksIHJlY0tlcm5lbEYsIHJlY0tlcm5lbEMsIHJlY0tlcm5lbE9dOiB0ZmMuVGVuc29yW10gPVxuICAgICAgICAgIHRmYy5zcGxpdChcbiAgICAgICAgICAgICAgdGhpcy5yZWN1cnJlbnRLZXJuZWwucmVhZCgpLCBudW1PZktlcm5lbHMsIGtlcm5lbENoYW5uZWxBeGlzKTtcblxuICAgICAgaEkgPSB0aGlzLnJlY3VycmVudENvbnYoaEksIHJlY0tlcm5lbEkpO1xuICAgICAgaEYgPSB0aGlzLnJlY3VycmVudENvbnYoaEYsIHJlY0tlcm5lbEYpO1xuICAgICAgaEMgPSB0aGlzLnJlY3VycmVudENvbnYoaEMsIHJlY0tlcm5lbEMpO1xuICAgICAgaE8gPSB0aGlzLnJlY3VycmVudENvbnYoaE8sIHJlY0tlcm5lbE8pO1xuXG4gICAgICBjb25zdCBpID0gdGhpcy5yZWN1cnJlbnRBY3RpdmF0aW9uLmFwcGx5KHRmYy5hZGQoeEksIGhJKSk7XG4gICAgICBjb25zdCBmID0gdGhpcy5yZWN1cnJlbnRBY3RpdmF0aW9uLmFwcGx5KHRmYy5hZGQoeEYsIGhGKSk7XG4gICAgICBjb25zdCBjID0gdGZjLmFkZChcbiAgICAgICAgICB0ZmMubXVsKGYsIGNUTWludXMxKSxcbiAgICAgICAgICB0ZmMubXVsKGksIHRoaXMuYWN0aXZhdGlvbi5hcHBseSh0ZmMuYWRkKHhDLCBoQykpKSk7XG4gICAgICBjb25zdCBoID0gdGZjLm11bChcbiAgICAgICAgICB0aGlzLnJlY3VycmVudEFjdGl2YXRpb24uYXBwbHkodGZjLmFkZCh4TywgaE8pKSxcbiAgICAgICAgICB0aGlzLmFjdGl2YXRpb24uYXBwbHkoYykpO1xuXG4gICAgICByZXR1cm4gW2gsIGgsIGNdO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHRmYy5zZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IHsndW5pdHMnOiBfLCAuLi5iYXNlQ29uZmlnfSA9IHN1cGVyLmdldENvbmZpZygpO1xuXG4gICAgY29uc3QgY29uZmlnOiB0ZmMuc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge1xuICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAga2VybmVsU2l6ZTogdGhpcy5rZXJuZWxTaXplLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgZGF0YUZvcm1hdDogdGhpcy5kYXRhRm9ybWF0LFxuICAgICAgZGlsYXRpb25SYXRlOiB0aGlzLmRpbGF0aW9uUmF0ZSxcbiAgICAgIHN0cmlkZXM6IHRoaXMuc3RyaWRlcyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsuLi5iYXNlQ29uZmlnLCAuLi5jb25maWd9O1xuICB9XG5cbiAgaW5wdXRDb252KHg6IFRlbnNvciwgdzogVGVuc29yLCBiPzogVGVuc29yLCBwYWRkaW5nPzogUGFkZGluZ01vZGUpIHtcbiAgICBjb25zdCBvdXQgPSB0ZmMuY29udjJkKFxuICAgICAgICB4IGFzIHRmYy5UZW5zb3IzRCwgdyBhcyB0ZmMuVGVuc29yNEQsIHRoaXMuc3RyaWRlcyBhcyBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICAocGFkZGluZyB8fCAndmFsaWQnKSBhcyAnc2FtZScgfCAndmFsaWQnLFxuICAgICAgICB0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0JyA/ICdOQ0hXJyA6ICdOSFdDJyxcbiAgICAgICAgdGhpcy5kaWxhdGlvblJhdGUgYXMgW251bWJlciwgbnVtYmVyXSk7XG5cbiAgICBpZiAoYikge1xuICAgICAgcmV0dXJuIEsuYmlhc0FkZChvdXQsIGIsIHRoaXMuZGF0YUZvcm1hdCkgYXMgdGZjLlRlbnNvcjNEO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICByZWN1cnJlbnRDb252KHg6IFRlbnNvciwgdzogVGVuc29yKSB7XG4gICAgY29uc3Qgc3RyaWRlcyA9IDE7XG5cbiAgICByZXR1cm4gdGZjLmNvbnYyZChcbiAgICAgICAgeCBhcyB0ZmMuVGVuc29yM0QsIHcgYXMgdGZjLlRlbnNvcjRELCBzdHJpZGVzLCAnc2FtZScsXG4gICAgICAgIHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnID8gJ05DSFcnIDogJ05IV0MnKTtcbiAgfVxufVxuXG50ZmMuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKENvbnZMU1RNMkRDZWxsKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIENvbnZMU1RNMkRBcmdzIGV4dGVuZHNcbiAgICBPbWl0PExTVE1MYXllckFyZ3MsICd1bml0cyd8J2NlbGwnPiwgQ29udlJOTjJETGF5ZXJBcmdzIHt9XG5cbmV4cG9ydCBjbGFzcyBDb252TFNUTTJEIGV4dGVuZHMgQ29udlJOTjJEIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBjbGFzc05hbWUgPSAnQ29udkxTVE0yRCc7XG5cbiAgY29uc3RydWN0b3IoYXJnczogQ29udkxTVE0yREFyZ3MpIHtcbiAgICBjb25zdCBjZWxsID0gbmV3IENvbnZMU1RNMkRDZWxsKGFyZ3MpO1xuXG4gICAgc3VwZXIoey4uLmFyZ3MsIGNlbGx9IGFzIENvbnZSTk4yRExheWVyQXJncyk7XG4gIH1cblxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIG92ZXJyaWRlIGZyb21Db25maWc8VCBleHRlbmRzIHRmYy5zZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZT4oXG4gICAgICBjbHM6IHRmYy5zZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZUNvbnN0cnVjdG9yPFQ+LFxuICAgICAgY29uZmlnOiB0ZmMuc2VyaWFsaXphdGlvbi5Db25maWdEaWN0KTogVCB7XG4gICAgcmV0dXJuIG5ldyBjbHMoY29uZmlnKTtcbiAgfVxufVxuXG50ZmMuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKENvbnZMU1RNMkQpO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * TensorFlow.js Layers: Basic Layers.
 */ __turbopack_context__.s([
    "Activation",
    ()=>Activation,
    "Dense",
    ()=>Dense,
    "Dropout",
    ()=>Dropout,
    "Flatten",
    ()=>Flatten,
    "Masking",
    ()=>Masking,
    "Permute",
    ()=>Permute,
    "RepeatVector",
    ()=>RepeatVector,
    "Reshape",
    ()=>Reshape,
    "SpatialDropout1D",
    ()=>SpatialDropout1D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$any$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/any.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$not_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/not_equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/transpose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/activations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
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
class Dropout extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.rate = Math.max(Math.min(args.rate, 1), 0);
        // So that the scalar doesn't get tidied up between executions.
        this.noiseShape = args.noiseShape;
        this.seed = args.seed;
        this.supportsMasking = true;
    }
    getNoiseShape(input) {
        if (this.noiseShape == null) {
            return this.noiseShape;
        }
        const inputShape = input.shape;
        const noiseShape = [];
        for(let i = 0; i < this.noiseShape.length; ++i){
            noiseShape.push(this.noiseShape[i] == null ? inputShape[i] : this.noiseShape[i]);
        }
        return noiseShape;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (0 < this.rate && this.rate < 1) {
                const training = kwargs['training'] == null ? false : kwargs['training'];
                const noiseShape = this.getNoiseShape(input);
                const output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inTrainPhase"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropout"](input, this.rate, noiseShape, this.seed), ()=>input, training);
                return output;
            }
            return inputs;
        });
    }
    getConfig() {
        const config = {
            rate: this.rate,
            noiseShape: this.noiseShape,
            seed: this.seed
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    dispose() {
        return super.dispose();
    }
}
/** @nocollapse */ Dropout.className = 'Dropout';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Dropout);
class SpatialDropout1D extends Dropout {
    constructor(args){
        super(args);
        this.inputSpec = [
            {
                ndim: 3
            }
        ];
    }
    getNoiseShape(input) {
        const inputShape = input.shape;
        return [
            inputShape[0],
            1,
            inputShape[2]
        ];
    }
}
/** @nocollapse */ SpatialDropout1D.className = 'SpatialDropout1D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(SpatialDropout1D);
class Dense extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        // Default activation: Linear (none).
        this.activation = null;
        this.useBias = true;
        this.kernel = null;
        this.bias = null;
        this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
        this.DEFAULT_BIAS_INITIALIZER = 'zeros';
        if (args.batchInputShape == null && args.inputShape == null && args.inputDim != null) {
            // This logic is copied from Layer's constructor, since we can't
            // do exactly what the Python constructor does for Dense().
            let batchSize = null;
            if (args.batchSize != null) {
                batchSize = args.batchSize;
            }
            this.batchInputShape = [
                batchSize,
                args.inputDim
            ];
        }
        this.units = args.units;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.units, 'units');
        this.activation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivation"])(args.activation);
        if (args.useBias != null) {
            this.useBias = args.useBias;
        }
        this.kernelInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER);
        this.biasInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.biasInitializer || this.DEFAULT_BIAS_INITIALIZER);
        this.kernelConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.kernelConstraint);
        this.biasConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.biasConstraint);
        this.kernelRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.kernelRegularizer);
        this.biasRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.biasRegularizer);
        this.activityRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.activityRegularizer);
        this.supportsMasking = true;
        this.inputSpec = [
            {
                minNDim: 2
            }
        ];
    }
    build(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const inputLastDim = inputShape[inputShape.length - 1];
        if (this.kernel == null) {
            this.kernel = this.addWeight('kernel', [
                inputLastDim,
                this.units
            ], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [
                    this.units
                ], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
        }
        this.inputSpec = [
            {
                minNDim: 2,
                axes: {
                    [-1]: inputLastDim
                }
            }
        ];
        this.built = true;
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const outputShape = inputShape.slice();
        outputShape[outputShape.length - 1] = this.units;
        return outputShape;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            // Dense layer accepts only a single input.
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const fusedActivationName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapActivationToFusedKernel"])(this.activation.getClassName());
            let output;
            if (fusedActivationName != null) {
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dot"](input, this.kernel.read(), fusedActivationName, this.bias ? this.bias.read() : null);
            } else {
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dot"](input, this.kernel.read());
                if (this.bias != null) {
                    output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biasAdd"](output, this.bias.read());
                }
                if (this.activation != null) {
                    output = this.activation.apply(output);
                }
            }
            return output;
        });
    }
    getConfig() {
        const config = {
            units: this.units,
            activation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeActivation"])(this.activation),
            useBias: this.useBias,
            kernelInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.kernelInitializer),
            biasInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.biasInitializer),
            kernelRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.kernelRegularizer),
            biasRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.biasRegularizer),
            activityRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.activityRegularizer),
            kernelConstraint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.kernelConstraint),
            biasConstraint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.biasConstraint)
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Dense.className = 'Dense';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Dense);
class Flatten extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        args = args || {};
        super(args);
        this.inputSpec = [
            {
                minNDim: 3
            }
        ];
        this.dataFormat = args.dataFormat;
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        for (const dim of inputShape.slice(1)){
            if (dim == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`The shape of the input to "Flatten" is not fully defined ` + `(got ${inputShape.slice(1)}). Make sure to pass a complete ` + `"input_shape" or "batch_input_shape" argument to the first ` + `layer in your model.`);
            }
        }
        return [
            inputShape[0],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayProd"])(inputShape, 1)
        ];
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            let input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (this.dataFormat === 'channelsFirst' && input.rank > 1) {
                const permutation = [
                    0
                ];
                for(let i = 2; i < input.rank; ++i){
                    permutation.push(i);
                }
                permutation.push(1);
                input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"])(input, permutation);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batchFlatten"](input);
        });
    }
    getConfig() {
        const config = {};
        if (this.dataFormat != null) {
            config['dataFormat'] = this.dataFormat;
        }
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Flatten.className = 'Flatten';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Flatten);
class Activation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.supportsMasking = true;
        this.activation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActivation"])(args.activation);
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            return this.activation.apply(input);
        });
    }
    getConfig() {
        const config = {
            activation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$activations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeActivation"])(this.activation)
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Activation.className = 'Activation';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Activation);
class RepeatVector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.n = args.n;
        this.inputSpec = [
            {
                ndim: 2
            }
        ];
    }
    computeOutputShape(inputShape) {
        return [
            inputShape[0],
            this.n,
            inputShape[1]
        ];
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["repeat"](inputs, this.n);
        });
    }
    getConfig() {
        const config = {
            n: this.n
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ RepeatVector.className = 'RepeatVector';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(RepeatVector);
class Reshape extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.targetShape = args.targetShape;
        // Make sure that all unknown dimensions are represented as `null`.
        for(let i = 0; i < this.targetShape.length; ++i){
            if (this.isUnknown(this.targetShape[i])) {
                this.targetShape[i] = null;
            }
        }
    }
    isUnknown(dim) {
        return dim < 0 || dim == null;
    }
    /**
     * Finds and replaces a missing dimension in output shape.
     *
     * This is a near direct port of the internal Numpy function
     * `_fix_unknown_dimension` in `numpy/core/src/multiarray/shape.c`.
     *
     * @param inputShape: Original shape of array begin reshape.
     * @param outputShape: Target shape of the array, with at most a single
     * `null` or negative number, which indicates an underdetermined dimension
     * that should be derived from `inputShape` and the known dimensions of
     *   `outputShape`.
     * @returns: The output shape with `null` replaced with its computed value.
     * @throws: ValueError: If `inputShape` and `outputShape` do not match.
     */ fixUnknownDimension(inputShape, outputShape) {
        const errorMsg = 'Total size of new array must be unchanged.';
        const finalShape = outputShape.slice();
        let known = 1;
        let unknown = null;
        for(let i = 0; i < finalShape.length; ++i){
            const dim = finalShape[i];
            if (this.isUnknown(dim)) {
                if (unknown === null) {
                    unknown = i;
                } else {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('Can only specifiy one unknown dimension.');
                }
            } else {
                known *= dim;
            }
        }
        const originalSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayProd"])(inputShape);
        if (unknown !== null) {
            if (known === 0 || originalSize % known !== 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](errorMsg);
            }
            finalShape[unknown] = originalSize / known;
        } else if (originalSize !== known) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](errorMsg);
        }
        return finalShape;
    }
    computeOutputShape(inputShape) {
        let anyUnknownDims = false;
        for(let i = 0; i < inputShape.length; ++i){
            if (this.isUnknown(inputShape[i])) {
                anyUnknownDims = true;
                break;
            }
        }
        if (anyUnknownDims) {
            return inputShape.slice(0, 1).concat(this.targetShape);
        } else {
            return inputShape.slice(0, 1).concat(this.fixUnknownDimension(inputShape.slice(1), this.targetShape));
        }
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const inputShape = input.shape;
            const outputShape = inputShape.slice(0, 1).concat(this.fixUnknownDimension(inputShape.slice(1), this.targetShape));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(input, outputShape);
        });
    }
    getConfig() {
        const config = {
            targetShape: this.targetShape
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Reshape.className = 'Reshape';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Reshape);
class Permute extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        if (args.dims == null) {
            throw new Error('Required configuration field `dims` is missing during Permute ' + 'constructor call.');
        }
        if (!Array.isArray(args.dims)) {
            throw new Error('Permute constructor requires `dims` to be an Array, but received ' + `${args.dims} instead.`);
        }
        // Check the validity of the permutation indices.
        const expectedSortedIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(1, args.dims.length + 1);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(args.dims.slice().sort(), expectedSortedIndices)) {
            throw new Error('Invalid permutation `dims`: ' + JSON.stringify(args.dims) + ' `dims` must contain consecutive integers starting from 1.');
        }
        this.dims = args.dims;
        this.dimsIncludingBatch = [
            0
        ].concat(this.dims);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: this.dims.length + 1
            })
        ];
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const outputShape = inputShape.slice();
        this.dims.forEach((dim, i)=>{
            outputShape[i + 1] = inputShape[dim];
        });
        return outputShape;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), this.dimsIncludingBatch);
    }
    getConfig() {
        const config = {
            dims: this.dims
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Permute.className = 'Permute';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Permute);
class Masking extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args == null ? {} : args);
        this.supportsMasking = true;
        if (args != null) {
            this.maskValue = args.maskValue == null ? 0 : args.maskValue;
        } else {
            this.maskValue = 0;
        }
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const baseConfig = super.getConfig();
        const config = {
            maskValue: this.maskValue
        };
        Object.assign(config, baseConfig);
        return config;
    }
    computeMask(inputs, mask) {
        const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        const axis = -1;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$any$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["any"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$not_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notEqual"])(input, this.maskValue), axis);
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const axis = -1;
            const keepDims = true;
            const booleanMask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$any$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["any"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$not_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notEqual"])(input, this.maskValue), axis, keepDims);
            const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])(booleanMask, input.dtype));
            return output;
        });
    }
}
/** @nocollapse */ Masking.className = 'Masking';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Masking); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUgsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFVLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEgsT0FBTyxFQUE2QixhQUFhLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RixPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sRUFBbUMsYUFBYSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEcsT0FBTyxFQUFnQixTQUFTLEVBQUUsS0FBSyxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFzQyxvQkFBb0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBSXpHLE9BQU8sRUFBQyxjQUFjLEVBQXNDLG9CQUFvQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekcsT0FBTyxFQUFDLHFCQUFxQixFQUFFLDBCQUEwQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQXFCN0UsTUFBYSxPQUFRLFNBQVEsS0FBSztJQU9oQyxZQUFZLElBQXNCO1FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJ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QUMsQ0FBQztZQUNwQyxNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdEIsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6RSxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQTFDRCxrQkFBa0I7QUFDWCxpQkFBUyxHQUFHLFNBQVMsQ0FBQztTQUZsQixPQUFPO0FBNkNwQixhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBUZW5zb3JGbG93LmpzIExheWVyczogQmFzaWMgTGF5ZXJzLlxuICovXG5cbmltcG9ydCB7YW55LCBjYXN0LCBtdWwsIG5vdEVxdWFsLCByZXNoYXBlLCBzZXJpYWxpemF0aW9uLCBUZW5zb3IsIHRpZHksIHRyYW5zcG9zZSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtBY3RpdmF0aW9uIGFzIEFjdGl2YXRpb25GbiwgZ2V0QWN0aXZhdGlvbiwgc2VyaWFsaXplQWN0aXZhdGlvbn0gZnJvbSAnLi4vYWN0aXZhdGlvbnMnO1xuaW1wb3J0ICogYXMgSyBmcm9tICcuLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge0NvbnN0cmFpbnQsIENvbnN0cmFpbnRJZGVudGlmaWVyLCBnZXRDb25zdHJhaW50LCBzZXJpYWxpemVDb25zdHJhaW50fSBmcm9tICcuLi9jb25zdHJhaW50cyc7XG5pbXBvcnQge0Rpc3Bvc2VSZXN1bHQsIElucHV0U3BlYywgTGF5ZXIsIExheWVyQXJnc30gZnJvbSAnLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7VmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7Z2V0SW5pdGlhbGl6ZXIsIEluaXRpYWxpemVyLCBJbml0aWFsaXplcklkZW50aWZpZXIsIHNlcmlhbGl6ZUluaXRpYWxpemVyfSBmcm9tICcuLi9pbml0aWFsaXplcnMnO1xuaW1wb3J0IHtBY3RpdmF0aW9uSWRlbnRpZmllcn0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2FjdGl2YXRpb25fY29uZmlnJztcbmltcG9ydCB7RGF0YUZvcm1hdCwgU2hhcGV9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtMYXllckNvbmZpZ30gZnJvbSAnLi4va2VyYXNfZm9ybWF0L3RvcG9sb2d5X2NvbmZpZyc7XG5pbXBvcnQge2dldFJlZ3VsYXJpemVyLCBSZWd1bGFyaXplciwgUmVndWxhcml6ZXJJZGVudGlmaWVyLCBzZXJpYWxpemVSZWd1bGFyaXplcn0gZnJvbSAnLi4vcmVndWxhcml6ZXJzJztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2Fzc2VydFBvc2l0aXZlSW50ZWdlciwgbWFwQWN0aXZhdGlvblRvRnVzZWRLZXJuZWx9IGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuaW1wb3J0IHthcnJheVByb2QsIHJhbmdlfSBmcm9tICcuLi91dGlscy9tYXRoX3V0aWxzJztcbmltcG9ydCB7Z2V0RXhhY3RseU9uZVNoYXBlLCBnZXRFeGFjdGx5T25lVGVuc29yfSBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5pbXBvcnQge0xheWVyVmFyaWFibGV9IGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBEcm9wb3V0TGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqIEZsb2F0IGJldHdlZW4gMCBhbmQgMS4gRnJhY3Rpb24gb2YgdGhlIGlucHV0IHVuaXRzIHRvIGRyb3AuICovXG4gIHJhdGU6IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZWdlciBhcnJheSByZXByZXNlbnRpbmcgdGhlIHNoYXBlIG9mIHRoZSBiaW5hcnkgZHJvcG91dCBtYXNrIHRoYXQgd2lsbFxuICAgKiBiZSBtdWx0aXBsaWVkIHdpdGggdGhlIGlucHV0LlxuICAgKlxuICAgKiBGb3IgaW5zdGFuY2UsIGlmIHlvdXIgaW5wdXRzIGhhdmUgc2hhcGUgYChiYXRjaFNpemUsIHRpbWVzdGVwcywgZmVhdHVyZXMpYFxuICAgKiBhbmQgeW91IHdhbnQgdGhlIGRyb3BvdXQgbWFzayB0byBiZSB0aGUgc2FtZSBmb3IgYWxsIHRpbWVzdGVwcywgeW91IGNhbiB1c2VcbiAgICogYG5vaXNlX3NoYXBlPShiYXRjaF9zaXplLCAxLCBmZWF0dXJlcylgLlxuICAgKi9cbiAgbm9pc2VTaGFwZT86IG51bWJlcltdO1xuXG4gIC8qKiBBbiBpbnRlZ2VyIHRvIHVzZSBhcyByYW5kb20gc2VlZC4gKi9cbiAgc2VlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIERyb3BvdXQgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0Ryb3BvdXQnO1xuICBwcml2YXRlIHJlYWRvbmx5IHJhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBub2lzZVNoYXBlOiBudW1iZXJbXTtcbiAgcHJpdmF0ZSByZWFkb25seSBzZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXJnczogRHJvcG91dExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMucmF0ZSA9IE1hdGgubWF4KE1hdGgubWluKGFyZ3MucmF0ZSwgMSksIDApO1xuICAgIC8vIFNvIHRoYXQgdGhlIHNjYWxhciBkb2Vzbid0IGdldCB0aWRpZWQgdXAgYmV0d2VlbiBleGVjdXRpb25zLlxuICAgIHRoaXMubm9pc2VTaGFwZSA9IGFyZ3Mubm9pc2VTaGFwZTtcbiAgICB0aGlzLnNlZWQgPSBhcmdzLnNlZWQ7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE5vaXNlU2hhcGUoaW5wdXQ6IFRlbnNvcik6IFNoYXBlIHtcbiAgICBpZiAodGhpcy5ub2lzZVNoYXBlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vaXNlU2hhcGU7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0U2hhcGUgPSBpbnB1dC5zaGFwZTtcbiAgICBjb25zdCBub2lzZVNoYXBlOiBTaGFwZSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2lzZVNoYXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBub2lzZVNoYXBlLnB1c2goXG4gICAgICAgICAgdGhpcy5ub2lzZVNoYXBlW2ldID09IG51bGwgPyBpbnB1dFNoYXBlW2ldIDogdGhpcy5ub2lzZVNoYXBlW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vaXNlU2hhcGU7XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgdGhpcy5pbnZva2VDYWxsSG9vayhpbnB1dHMsIGt3YXJncyk7XG4gICAgICBjb25zdCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIGlmICgwIDwgdGhpcy5yYXRlICYmIHRoaXMucmF0ZSA8IDEpIHtcbiAgICAgICAgY29uc3QgdHJhaW5pbmcgPVxuICAgICAgICAgICAga3dhcmdzWyd0cmFpbmluZyddID09IG51bGwgPyBmYWxzZSA6IGt3YXJnc1sndHJhaW5pbmcnXTtcbiAgICAgICAgY29uc3Qgbm9pc2VTaGFwZSA9IHRoaXMuZ2V0Tm9pc2VTaGFwZShpbnB1dCk7XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IEsuaW5UcmFpblBoYXNlKFxuICAgICAgICAgICAgKCkgPT4gSy5kcm9wb3V0KGlucHV0LCB0aGlzLnJhdGUsIG5vaXNlU2hhcGUsIHRoaXMuc2VlZCksXG4gICAgICAgICAgICAoKSA9PiBpbnB1dCwgdHJhaW5pbmcpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHJhdGU6IHRoaXMucmF0ZSxcbiAgICAgIG5vaXNlU2hhcGU6IHRoaXMubm9pc2VTaGFwZSxcbiAgICAgIHNlZWQ6IHRoaXMuc2VlZCxcbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgYmFzZUNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIG92ZXJyaWRlIGRpc3Bvc2UoKTogRGlzcG9zZVJlc3VsdCB7XG4gICAgcmV0dXJuIHN1cGVyLmRpc3Bvc2UoKTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKERyb3BvdXQpO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgRGVuc2VMYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKiogUG9zaXRpdmUgaW50ZWdlciwgZGltZW5zaW9uYWxpdHkgb2YgdGhlIG91dHB1dCBzcGFjZS4gKi9cbiAgdW5pdHM6IG51bWJlcjtcbiAgLyoqXG4gICAqIEFjdGl2YXRpb24gZnVuY3Rpb24gdG8gdXNlLlxuICAgKlxuICAgKiBJZiB1bnNwZWNpZmllZCwgbm8gYWN0aXZhdGlvbiBpcyBhcHBsaWVkLlxuICAgKi9cbiAgYWN0aXZhdGlvbj86IEFjdGl2YXRpb25JZGVudGlmaWVyO1xuICAvKiogV2hldGhlciB0byBhcHBseSBhIGJpYXMuICovXG4gIHVzZUJpYXM/OiBib29sZWFuO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXIgZm9yIHRoZSBkZW5zZSBrZXJuZWwgd2VpZ2h0cyBtYXRyaXguXG4gICAqL1xuICBrZXJuZWxJbml0aWFsaXplcj86IEluaXRpYWxpemVySWRlbnRpZmllcnxJbml0aWFsaXplcjtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVyIGZvciB0aGUgYmlhcyB2ZWN0b3IuXG4gICAqL1xuICBiaWFzSW5pdGlhbGl6ZXI/OiBJbml0aWFsaXplcklkZW50aWZpZXJ8SW5pdGlhbGl6ZXI7XG4gIC8qKlxuICAgKiBJZiBzcGVjaWZpZWQsIGRlZmluZXMgaW5wdXRTaGFwZSBhcyBgW2lucHV0RGltXWAuXG4gICAqL1xuICBpbnB1dERpbT86IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uc3RyYWludCBmb3IgdGhlIGtlcm5lbCB3ZWlnaHRzLlxuICAgKi9cbiAga2VybmVsQ29uc3RyYWludD86IENvbnN0cmFpbnRJZGVudGlmaWVyfENvbnN0cmFpbnQ7XG5cbiAgLyoqXG4gICAqIENvbnN0cmFpbnQgZm9yIHRoZSBiaWFzIHZlY3Rvci5cbiAgICovXG4gIGJpYXNDb25zdHJhaW50PzogQ29uc3RyYWludElkZW50aWZpZXJ8Q29uc3RyYWludDtcblxuICAvKipcbiAgICogUmVndWxhcml6ZXIgZnVuY3Rpb24gYXBwbGllZCB0byB0aGUgZGVuc2Uga2VybmVsIHdlaWdodHMgbWF0cml4LlxuICAgKi9cbiAga2VybmVsUmVndWxhcml6ZXI/OiBSZWd1bGFyaXplcklkZW50aWZpZXJ8UmVndWxhcml6ZXI7XG5cbiAgLyoqXG4gICAqIFJlZ3VsYXJpemVyIGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGJpYXMgdmVjdG9yLlxuICAgKi9cbiAgYmlhc1JlZ3VsYXJpemVyPzogUmVndWxhcml6ZXJJZGVudGlmaWVyfFJlZ3VsYXJpemVyO1xuXG4gIC8qKlxuICAgKiBSZWd1bGFyaXplciBmdW5jdGlvbiBhcHBsaWVkIHRvIHRoZSBhY3RpdmF0aW9uLlxuICAgKi9cbiAgYWN0aXZpdHlSZWd1bGFyaXplcj86IFJlZ3VsYXJpemVySWRlbnRpZmllcnxSZWd1bGFyaXplcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcGF0aWFsRHJvcG91dDFETGF5ZXJDb25maWcgZXh0ZW5kcyBMYXllckNvbmZpZyB7XG4gIC8qKiBGbG9hdCBiZXR3ZWVuIDAgYW5kIDEuIEZyYWN0aW9uIG9mIHRoZSBpbnB1dCB1bml0cyB0byBkcm9wLiAqL1xuICByYXRlOiBudW1iZXI7XG5cbiAgLyoqIEFuIGludGVnZXIgdG8gdXNlIGFzIHJhbmRvbSBzZWVkLiAqL1xuICBzZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3BhdGlhbERyb3BvdXQxRCBleHRlbmRzIERyb3BvdXQge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIG92ZXJyaWRlIGNsYXNzTmFtZSA9ICdTcGF0aWFsRHJvcG91dDFEJztcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBTcGF0aWFsRHJvcG91dDFETGF5ZXJDb25maWcpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLmlucHV0U3BlYyA9IFt7bmRpbTogM31dO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldE5vaXNlU2hhcGUoaW5wdXQ6IFRlbnNvcik6IFNoYXBlIHtcbiAgICBjb25zdCBpbnB1dFNoYXBlID0gaW5wdXQuc2hhcGU7XG4gICAgcmV0dXJuIFtpbnB1dFNoYXBlWzBdLCAxLCBpbnB1dFNoYXBlWzJdXTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFNwYXRpYWxEcm9wb3V0MUQpO1xuXG5leHBvcnQgY2xhc3MgRGVuc2UgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0RlbnNlJztcbiAgcHJpdmF0ZSB1bml0czogbnVtYmVyO1xuICAvLyBEZWZhdWx0IGFjdGl2YXRpb246IExpbmVhciAobm9uZSkuXG4gIHByaXZhdGUgYWN0aXZhdGlvbjogQWN0aXZhdGlvbkZuID0gbnVsbDtcbiAgcHJpdmF0ZSB1c2VCaWFzID0gdHJ1ZTtcbiAgcHJpdmF0ZSBrZXJuZWxJbml0aWFsaXplcjogSW5pdGlhbGl6ZXI7XG4gIHByaXZhdGUgYmlhc0luaXRpYWxpemVyOiBJbml0aWFsaXplcjtcbiAgcHJpdmF0ZSBrZXJuZWw6IExheWVyVmFyaWFibGUgPSBudWxsO1xuICBwcml2YXRlIGJpYXM6IExheWVyVmFyaWFibGUgPSBudWxsO1xuXG4gIHJlYWRvbmx5IERFRkFVTFRfS0VSTkVMX0lOSVRJQUxJWkVSOiBJbml0aWFsaXplcklkZW50aWZpZXIgPSAnZ2xvcm90Tm9ybWFsJztcbiAgcmVhZG9ubHkgREVGQVVMVF9CSUFTX0lOSVRJQUxJWkVSOiBJbml0aWFsaXplcklkZW50aWZpZXIgPSAnemVyb3MnO1xuICBwcml2YXRlIHJlYWRvbmx5IGtlcm5lbENvbnN0cmFpbnQ/OiBDb25zdHJhaW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGJpYXNDb25zdHJhaW50PzogQ29uc3RyYWludDtcbiAgcHJpdmF0ZSByZWFkb25seSBrZXJuZWxSZWd1bGFyaXplcj86IFJlZ3VsYXJpemVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGJpYXNSZWd1bGFyaXplcj86IFJlZ3VsYXJpemVyO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IERlbnNlTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgaWYgKGFyZ3MuYmF0Y2hJbnB1dFNoYXBlID09IG51bGwgJiYgYXJncy5pbnB1dFNoYXBlID09IG51bGwgJiZcbiAgICAgICAgYXJncy5pbnB1dERpbSAhPSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGxvZ2ljIGlzIGNvcGllZCBmcm9tIExheWVyJ3MgY29uc3RydWN0b3IsIHNpbmNlIHdlIGNhbid0XG4gICAgICAvLyBkbyBleGFjdGx5IHdoYXQgdGhlIFB5dGhvbiBjb25zdHJ1Y3RvciBkb2VzIGZvciBEZW5zZSgpLlxuICAgICAgbGV0IGJhdGNoU2l6ZTogbnVtYmVyID0gbnVsbDtcbiAgICAgIGlmIChhcmdzLmJhdGNoU2l6ZSAhPSBudWxsKSB7XG4gICAgICAgIGJhdGNoU2l6ZSA9IGFyZ3MuYmF0Y2hTaXplO1xuICAgICAgfVxuICAgICAgdGhpcy5iYXRjaElucHV0U2hhcGUgPSBbYmF0Y2hTaXplLCBhcmdzLmlucHV0RGltXTtcbiAgICB9XG5cbiAgICB0aGlzLnVuaXRzID0gYXJncy51bml0cztcbiAgICBhc3NlcnRQb3NpdGl2ZUludGVnZXIodGhpcy51bml0cywgJ3VuaXRzJyk7XG4gICAgdGhpcy5hY3RpdmF0aW9uID0gZ2V0QWN0aXZhdGlvbihhcmdzLmFjdGl2YXRpb24pO1xuICAgIGlmIChhcmdzLnVzZUJpYXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy51c2VCaWFzID0gYXJncy51c2VCaWFzO1xuICAgIH1cbiAgICB0aGlzLmtlcm5lbEluaXRpYWxpemVyID0gZ2V0SW5pdGlhbGl6ZXIoXG4gICAgICAgIGFyZ3Mua2VybmVsSW5pdGlhbGl6ZXIgfHwgdGhpcy5ERUZBVUxUX0tFUk5FTF9JTklUSUFMSVpFUik7XG4gICAgdGhpcy5iaWFzSW5pdGlhbGl6ZXIgPVxuICAgICAgICBnZXRJbml0aWFsaXplcihhcmdzLmJpYXNJbml0aWFsaXplciB8fCB0aGlzLkRFRkFVTFRfQklBU19JTklUSUFMSVpFUik7XG4gICAgdGhpcy5rZXJuZWxDb25zdHJhaW50ID0gZ2V0Q29uc3RyYWludChhcmdzLmtlcm5lbENvbnN0cmFpbnQpO1xuICAgIHRoaXMuYmlhc0NvbnN0cmFpbnQgPSBnZXRDb25zdHJhaW50KGFyZ3MuYmlhc0NvbnN0cmFpbnQpO1xuICAgIHRoaXMua2VybmVsUmVndWxhcml6ZXIgPSBnZXRSZWd1bGFyaXplcihhcmdzLmtlcm5lbFJlZ3VsYXJpemVyKTtcbiAgICB0aGlzLmJpYXNSZWd1bGFyaXplciA9IGdldFJlZ3VsYXJpemVyKGFyZ3MuYmlhc1JlZ3VsYXJpemVyKTtcbiAgICB0aGlzLmFjdGl2aXR5UmVndWxhcml6ZXIgPSBnZXRSZWd1bGFyaXplcihhcmdzLmFjdGl2aXR5UmVndWxhcml6ZXIpO1xuICAgIHRoaXMuc3VwcG9ydHNNYXNraW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaW5wdXRTcGVjID0gW3ttaW5ORGltOiAyfV07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYnVpbGQoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IHZvaWQge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgY29uc3QgaW5wdXRMYXN0RGltID0gaW5wdXRTaGFwZVtpbnB1dFNoYXBlLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0aGlzLmtlcm5lbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmtlcm5lbCA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAgICdrZXJuZWwnLCBbaW5wdXRMYXN0RGltLCB0aGlzLnVuaXRzXSwgbnVsbCwgdGhpcy5rZXJuZWxJbml0aWFsaXplcixcbiAgICAgICAgICB0aGlzLmtlcm5lbFJlZ3VsYXJpemVyLCB0cnVlLCB0aGlzLmtlcm5lbENvbnN0cmFpbnQpO1xuICAgICAgaWYgKHRoaXMudXNlQmlhcykge1xuICAgICAgICB0aGlzLmJpYXMgPSB0aGlzLmFkZFdlaWdodChcbiAgICAgICAgICAgICdiaWFzJywgW3RoaXMudW5pdHNdLCBudWxsLCB0aGlzLmJpYXNJbml0aWFsaXplcixcbiAgICAgICAgICAgIHRoaXMuYmlhc1JlZ3VsYXJpemVyLCB0cnVlLCB0aGlzLmJpYXNDb25zdHJhaW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0U3BlYyA9IFt7bWluTkRpbTogMiwgYXhlczoge1stMV06IGlucHV0TGFzdERpbX19XTtcbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNvbXB1dGVPdXRwdXRTaGFwZShpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogU2hhcGV8U2hhcGVbXSB7XG4gICAgaW5wdXRTaGFwZSA9IGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcbiAgICBjb25zdCBvdXRwdXRTaGFwZSA9IGlucHV0U2hhcGUuc2xpY2UoKTtcbiAgICBvdXRwdXRTaGFwZVtvdXRwdXRTaGFwZS5sZW5ndGggLSAxXSA9IHRoaXMudW5pdHM7XG4gICAgcmV0dXJuIG91dHB1dFNoYXBlO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgLy8gRGVuc2UgbGF5ZXIgYWNjZXB0cyBvbmx5IGEgc2luZ2xlIGlucHV0LlxuICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBjb25zdCBmdXNlZEFjdGl2YXRpb25OYW1lID1cbiAgICAgICAgICBtYXBBY3RpdmF0aW9uVG9GdXNlZEtlcm5lbCh0aGlzLmFjdGl2YXRpb24uZ2V0Q2xhc3NOYW1lKCkpO1xuICAgICAgbGV0IG91dHB1dDogVGVuc29yO1xuXG4gICAgICBpZiAoZnVzZWRBY3RpdmF0aW9uTmFtZSAhPSBudWxsKSB7XG4gICAgICAgIG91dHB1dCA9IEsuZG90KFxuICAgICAgICAgICAgaW5wdXQsIHRoaXMua2VybmVsLnJlYWQoKSwgZnVzZWRBY3RpdmF0aW9uTmFtZSxcbiAgICAgICAgICAgIHRoaXMuYmlhcyA/IHRoaXMuYmlhcy5yZWFkKCkgOiBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCA9IEsuZG90KGlucHV0LCB0aGlzLmtlcm5lbC5yZWFkKCkpO1xuICAgICAgICBpZiAodGhpcy5iaWFzICE9IG51bGwpIHtcbiAgICAgICAgICBvdXRwdXQgPSBLLmJpYXNBZGQob3V0cHV0LCB0aGlzLmJpYXMucmVhZCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICBvdXRwdXQgPSB0aGlzLmFjdGl2YXRpb24uYXBwbHkob3V0cHV0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICB1bml0czogdGhpcy51bml0cyxcbiAgICAgIGFjdGl2YXRpb246IHNlcmlhbGl6ZUFjdGl2YXRpb24odGhpcy5hY3RpdmF0aW9uKSxcbiAgICAgIHVzZUJpYXM6IHRoaXMudXNlQmlhcyxcbiAgICAgIGtlcm5lbEluaXRpYWxpemVyOiBzZXJpYWxpemVJbml0aWFsaXplcih0aGlzLmtlcm5lbEluaXRpYWxpemVyKSxcbiAgICAgIGJpYXNJbml0aWFsaXplcjogc2VyaWFsaXplSW5pdGlhbGl6ZXIodGhpcy5iaWFzSW5pdGlhbGl6ZXIpLFxuICAgICAga2VybmVsUmVndWxhcml6ZXI6IHNlcmlhbGl6ZVJlZ3VsYXJpemVyKHRoaXMua2VybmVsUmVndWxhcml6ZXIpLFxuICAgICAgYmlhc1JlZ3VsYXJpemVyOiBzZXJpYWxpemVSZWd1bGFyaXplcih0aGlzLmJpYXNSZWd1bGFyaXplciksXG4gICAgICBhY3Rpdml0eVJlZ3VsYXJpemVyOiBzZXJpYWxpemVSZWd1bGFyaXplcih0aGlzLmFjdGl2aXR5UmVndWxhcml6ZXIpLFxuICAgICAga2VybmVsQ29uc3RyYWludDogc2VyaWFsaXplQ29uc3RyYWludCh0aGlzLmtlcm5lbENvbnN0cmFpbnQpLFxuICAgICAgYmlhc0NvbnN0cmFpbnQ6IHNlcmlhbGl6ZUNvbnN0cmFpbnQodGhpcy5iaWFzQ29uc3RyYWludClcbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgYmFzZUNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKERlbnNlKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEZsYXR0ZW5MYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKiogSW1hZ2UgZGF0YSBmb3JtYXQ6IGNoYW5uZWxzTGFzdCAoZGVmYXVsdCkgb3IgY2hhbm5lbHNGaXJzdC4gKi9cbiAgZGF0YUZvcm1hdD86IERhdGFGb3JtYXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBGbGF0dGVuIGV4dGVuZHMgTGF5ZXIge1xuICBwcml2YXRlIGRhdGFGb3JtYXQ6IERhdGFGb3JtYXQ7XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnRmxhdHRlbic7XG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBGbGF0dGVuTGF5ZXJBcmdzKSB7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5pbnB1dFNwZWMgPSBbe21pbk5EaW06IDN9XTtcbiAgICB0aGlzLmRhdGFGb3JtYXQgPSBhcmdzLmRhdGFGb3JtYXQ7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgZm9yIChjb25zdCBkaW0gb2YgaW5wdXRTaGFwZS5zbGljZSgxKSkge1xuICAgICAgaWYgKGRpbSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYFRoZSBzaGFwZSBvZiB0aGUgaW5wdXQgdG8gXCJGbGF0dGVuXCIgaXMgbm90IGZ1bGx5IGRlZmluZWQgYCArXG4gICAgICAgICAgICBgKGdvdCAke2lucHV0U2hhcGUuc2xpY2UoMSl9KS4gTWFrZSBzdXJlIHRvIHBhc3MgYSBjb21wbGV0ZSBgICtcbiAgICAgICAgICAgIGBcImlucHV0X3NoYXBlXCIgb3IgXCJiYXRjaF9pbnB1dF9zaGFwZVwiIGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBgICtcbiAgICAgICAgICAgIGBsYXllciBpbiB5b3VyIG1vZGVsLmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIGFycmF5UHJvZChpbnB1dFNoYXBlLCAxKV07XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgdGhpcy5pbnZva2VDYWxsSG9vayhpbnB1dHMsIGt3YXJncyk7XG5cbiAgICAgIGxldCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIGlmICh0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0JyAmJiBpbnB1dC5yYW5rID4gMSkge1xuICAgICAgICBjb25zdCBwZXJtdXRhdGlvbjogbnVtYmVyW10gPSBbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgaW5wdXQucmFuazsgKytpKSB7XG4gICAgICAgICAgcGVybXV0YXRpb24ucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBwZXJtdXRhdGlvbi5wdXNoKDEpO1xuICAgICAgICBpbnB1dCA9IHRyYW5zcG9zZShpbnB1dCwgcGVybXV0YXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gSy5iYXRjaEZsYXR0ZW4oaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fTtcbiAgICBpZiAodGhpcy5kYXRhRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgIGNvbmZpZ1snZGF0YUZvcm1hdCddID0gdGhpcy5kYXRhRm9ybWF0O1xuICAgIH1cbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhGbGF0dGVuKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFjdGl2YXRpb25MYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgYWN0aXZhdGlvbiBmdW5jdGlvbiB0byB1c2UuXG4gICAqL1xuICBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uSWRlbnRpZmllcjtcbn1cblxuZXhwb3J0IGNsYXNzIEFjdGl2YXRpb24gZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0FjdGl2YXRpb24nO1xuICBhY3RpdmF0aW9uOiBBY3RpdmF0aW9uRm47XG5cbiAgY29uc3RydWN0b3IoYXJnczogQWN0aXZhdGlvbkxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMuc3VwcG9ydHNNYXNraW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFjdGl2YXRpb24gPSBnZXRBY3RpdmF0aW9uKGFyZ3MuYWN0aXZhdGlvbik7XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgdGhpcy5pbnZva2VDYWxsSG9vayhpbnB1dHMsIGt3YXJncyk7XG4gICAgICBjb25zdCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2YXRpb24uYXBwbHkoaW5wdXQpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnID0ge2FjdGl2YXRpb246IHNlcmlhbGl6ZUFjdGl2YXRpb24odGhpcy5hY3RpdmF0aW9uKX07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoQWN0aXZhdGlvbik7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBSZXNoYXBlTGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqIFRoZSB0YXJnZXQgc2hhcGUuIERvZXMgbm90IGluY2x1ZGUgdGhlIGJhdGNoIGF4aXMuICovXG4gIHRhcmdldFNoYXBlOiBTaGFwZTtcbn1cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFJlcGVhdFZlY3RvckxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBUaGUgaW50ZWdlciBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBpbnB1dC5cbiAgICovXG4gIG46IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlcGVhdFZlY3RvciBleHRlbmRzIExheWVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnUmVwZWF0VmVjdG9yJztcbiAgcmVhZG9ubHkgbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFJlcGVhdFZlY3RvckxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMubiA9IGFyZ3MubjtcbiAgICB0aGlzLmlucHV0U3BlYyA9IFt7bmRpbTogMn1dO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlKTogU2hhcGUge1xuICAgIHJldHVybiBbaW5wdXRTaGFwZVswXSwgdGhpcy5uLCBpbnB1dFNoYXBlWzFdXTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBpbnB1dHMgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICByZXR1cm4gSy5yZXBlYXQoaW5wdXRzLCB0aGlzLm4pO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgbjogdGhpcy5uLFxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoUmVwZWF0VmVjdG9yKTtcblxuZXhwb3J0IGNsYXNzIFJlc2hhcGUgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ1Jlc2hhcGUnO1xuICBwcml2YXRlIHRhcmdldFNoYXBlOiBTaGFwZTtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBSZXNoYXBlTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy50YXJnZXRTaGFwZSA9IGFyZ3MudGFyZ2V0U2hhcGU7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbGwgdW5rbm93biBkaW1lbnNpb25zIGFyZSByZXByZXNlbnRlZCBhcyBgbnVsbGAuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhcmdldFNoYXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy5pc1Vua25vd24odGhpcy50YXJnZXRTaGFwZVtpXSkpIHtcbiAgICAgICAgdGhpcy50YXJnZXRTaGFwZVtpXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1Vua25vd24oZGltOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGltIDwgMCB8fCBkaW0gPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbmQgcmVwbGFjZXMgYSBtaXNzaW5nIGRpbWVuc2lvbiBpbiBvdXRwdXQgc2hhcGUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBuZWFyIGRpcmVjdCBwb3J0IG9mIHRoZSBpbnRlcm5hbCBOdW1weSBmdW5jdGlvblxuICAgKiBgX2ZpeF91bmtub3duX2RpbWVuc2lvbmAgaW4gYG51bXB5L2NvcmUvc3JjL211bHRpYXJyYXkvc2hhcGUuY2AuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dFNoYXBlOiBPcmlnaW5hbCBzaGFwZSBvZiBhcnJheSBiZWdpbiByZXNoYXBlLlxuICAgKiBAcGFyYW0gb3V0cHV0U2hhcGU6IFRhcmdldCBzaGFwZSBvZiB0aGUgYXJyYXksIHdpdGggYXQgbW9zdCBhIHNpbmdsZVxuICAgKiBgbnVsbGAgb3IgbmVnYXRpdmUgbnVtYmVyLCB3aGljaCBpbmRpY2F0ZXMgYW4gdW5kZXJkZXRlcm1pbmVkIGRpbWVuc2lvblxuICAgKiB0aGF0IHNob3VsZCBiZSBkZXJpdmVkIGZyb20gYGlucHV0U2hhcGVgIGFuZCB0aGUga25vd24gZGltZW5zaW9ucyBvZlxuICAgKiAgIGBvdXRwdXRTaGFwZWAuXG4gICAqIEByZXR1cm5zOiBUaGUgb3V0cHV0IHNoYXBlIHdpdGggYG51bGxgIHJlcGxhY2VkIHdpdGggaXRzIGNvbXB1dGVkIHZhbHVlLlxuICAgKiBAdGhyb3dzOiBWYWx1ZUVycm9yOiBJZiBgaW5wdXRTaGFwZWAgYW5kIGBvdXRwdXRTaGFwZWAgZG8gbm90IG1hdGNoLlxuICAgKi9cbiAgcHJpdmF0ZSBmaXhVbmtub3duRGltZW5zaW9uKGlucHV0U2hhcGU6IFNoYXBlLCBvdXRwdXRTaGFwZTogU2hhcGUpOiBTaGFwZSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSAnVG90YWwgc2l6ZSBvZiBuZXcgYXJyYXkgbXVzdCBiZSB1bmNoYW5nZWQuJztcbiAgICBjb25zdCBmaW5hbFNoYXBlID0gb3V0cHV0U2hhcGUuc2xpY2UoKTtcbiAgICBsZXQga25vd24gPSAxO1xuICAgIGxldCB1bmtub3duID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsU2hhcGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IGRpbSA9IGZpbmFsU2hhcGVbaV07XG4gICAgICBpZiAodGhpcy5pc1Vua25vd24oZGltKSkge1xuICAgICAgICBpZiAodW5rbm93biA9PT0gbnVsbCkge1xuICAgICAgICAgIHVua25vd24gPSBpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKCdDYW4gb25seSBzcGVjaWZpeSBvbmUgdW5rbm93biBkaW1lbnNpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtub3duICo9IGRpbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcmlnaW5hbFNpemUgPSBhcnJheVByb2QoaW5wdXRTaGFwZSk7XG4gICAgaWYgKHVua25vd24gIT09IG51bGwpIHtcbiAgICAgIGlmIChrbm93biA9PT0gMCB8fCBvcmlnaW5hbFNpemUgJSBrbm93biAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihlcnJvck1zZyk7XG4gICAgICB9XG4gICAgICBmaW5hbFNoYXBlW3Vua25vd25dID0gb3JpZ2luYWxTaXplIC8ga25vd247XG4gICAgfSBlbHNlIGlmIChvcmlnaW5hbFNpemUgIT09IGtub3duKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihlcnJvck1zZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmFsU2hhcGU7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGUpOiBTaGFwZSB7XG4gICAgbGV0IGFueVVua25vd25EaW1zID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dFNoYXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy5pc1Vua25vd24oaW5wdXRTaGFwZVtpXSkpIHtcbiAgICAgICAgYW55VW5rbm93bkRpbXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW55VW5rbm93bkRpbXMpIHtcbiAgICAgIHJldHVybiBpbnB1dFNoYXBlLnNsaWNlKDAsIDEpLmNvbmNhdCh0aGlzLnRhcmdldFNoYXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlucHV0U2hhcGUuc2xpY2UoMCwgMSkuY29uY2F0KFxuICAgICAgICAgIHRoaXMuZml4VW5rbm93bkRpbWVuc2lvbihpbnB1dFNoYXBlLnNsaWNlKDEpLCB0aGlzLnRhcmdldFNoYXBlKSk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBjb25zdCBpbnB1dFNoYXBlID0gaW5wdXQuc2hhcGU7XG4gICAgICBjb25zdCBvdXRwdXRTaGFwZSA9IGlucHV0U2hhcGUuc2xpY2UoMCwgMSkuY29uY2F0KFxuICAgICAgICAgIHRoaXMuZml4VW5rbm93bkRpbWVuc2lvbihpbnB1dFNoYXBlLnNsaWNlKDEpLCB0aGlzLnRhcmdldFNoYXBlKSk7XG4gICAgICByZXR1cm4gcmVzaGFwZShpbnB1dCwgb3V0cHV0U2hhcGUpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgdGFyZ2V0U2hhcGU6IHRoaXMudGFyZ2V0U2hhcGUsXG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhSZXNoYXBlKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBlcm11dGVMYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKipcbiAgICogQXJyYXkgb2YgaW50ZWdlcnMuIFBlcm11dGF0aW9uIHBhdHRlcm4uIERvZXMgbm90IGluY2x1ZGUgdGhlXG4gICAqIHNhbXBsZSAoYmF0Y2gpIGRpbWVuc2lvbi4gSW5kZXggc3RhcnRzIGF0IDEuXG4gICAqIEZvciBpbnN0YW5jZSwgYFsyLCAxXWAgcGVybXV0ZXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZGltZW5zaW9uc1xuICAgKiBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBkaW1zOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFBlcm11dGUgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ1Blcm11dGUnO1xuICByZWFkb25seSBkaW1zOiBudW1iZXJbXTtcbiAgcHJpdmF0ZSByZWFkb25seSBkaW1zSW5jbHVkaW5nQmF0Y2g6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFBlcm11dGVMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICBpZiAoYXJncy5kaW1zID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnUmVxdWlyZWQgY29uZmlndXJhdGlvbiBmaWVsZCBgZGltc2AgaXMgbWlzc2luZyBkdXJpbmcgUGVybXV0ZSAnICtcbiAgICAgICAgICAnY29uc3RydWN0b3IgY2FsbC4nKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MuZGltcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnUGVybXV0ZSBjb25zdHJ1Y3RvciByZXF1aXJlcyBgZGltc2AgdG8gYmUgYW4gQXJyYXksIGJ1dCByZWNlaXZlZCAnICtcbiAgICAgICAgICBgJHthcmdzLmRpbXN9IGluc3RlYWQuYCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhlIHZhbGlkaXR5IG9mIHRoZSBwZXJtdXRhdGlvbiBpbmRpY2VzLlxuICAgIGNvbnN0IGV4cGVjdGVkU29ydGVkSW5kaWNlcyA9IHJhbmdlKDEsIGFyZ3MuZGltcy5sZW5ndGggKyAxKTtcbiAgICBpZiAoIXV0aWwuYXJyYXlzRXF1YWwoYXJncy5kaW1zLnNsaWNlKCkuc29ydCgpLCBleHBlY3RlZFNvcnRlZEluZGljZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0ludmFsaWQgcGVybXV0YXRpb24gYGRpbXNgOiAnICsgSlNPTi5zdHJpbmdpZnkoYXJncy5kaW1zKSArXG4gICAgICAgICAgJyBgZGltc2AgbXVzdCBjb250YWluIGNvbnNlY3V0aXZlIGludGVnZXJzIHN0YXJ0aW5nIGZyb20gMS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpbXMgPSBhcmdzLmRpbXM7XG4gICAgdGhpcy5kaW1zSW5jbHVkaW5nQmF0Y2ggPSBbMF0uY29uY2F0KHRoaXMuZGltcyk7XG4gICAgdGhpcy5pbnB1dFNwZWMgPSBbbmV3IElucHV0U3BlYyh7bmRpbTogdGhpcy5kaW1zLmxlbmd0aCArIDF9KV07XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgY29uc3Qgb3V0cHV0U2hhcGUgPSBpbnB1dFNoYXBlLnNsaWNlKCk7XG4gICAgdGhpcy5kaW1zLmZvckVhY2goKGRpbTogbnVtYmVyLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIG91dHB1dFNoYXBlW2kgKyAxXSA9IChpbnB1dFNoYXBlIGFzIFNoYXBlKVtkaW1dO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXRwdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdHJhbnNwb3NlKGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKSwgdGhpcy5kaW1zSW5jbHVkaW5nQmF0Y2gpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZGltczogdGhpcy5kaW1zLFxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoUGVybXV0ZSk7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBNYXNraW5nQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBNYXNraW5nIFZhbHVlLiBEZWZhdWx0cyB0byBgMC4wYC5cbiAgICovXG4gIG1hc2tWYWx1ZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1hc2tpbmcgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ01hc2tpbmcnO1xuICBtYXNrVmFsdWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihhcmdzPzogTWFza2luZ0FyZ3MpIHtcbiAgICBzdXBlcihhcmdzID09IG51bGwgPyB7fSA6IGFyZ3MpO1xuICAgIHRoaXMuc3VwcG9ydHNNYXNraW5nID0gdHJ1ZTtcbiAgICBpZiAoYXJncyAhPSBudWxsKSB7XG4gICAgICB0aGlzLm1hc2tWYWx1ZSA9IGFyZ3MubWFza1ZhbHVlID09IG51bGwgPyAwIDogYXJncy5tYXNrVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFza1ZhbHVlID0gMDtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIHJldHVybiBpbnB1dFNoYXBlO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCkge1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBjb25zdCBjb25maWcgPSB7bWFza1ZhbHVlOiB0aGlzLm1hc2tWYWx1ZX07XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlTWFzayhpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwgbWFzaz86IFRlbnNvcnxUZW5zb3JbXSk6XG4gICAgICBUZW5zb3Ige1xuICAgIGNvbnN0IGlucHV0ID0gZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpO1xuICAgIGNvbnN0IGF4aXMgPSAtMTtcbiAgICByZXR1cm4gYW55KG5vdEVxdWFsKGlucHV0LCB0aGlzLm1hc2tWYWx1ZSksIGF4aXMpO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBjb25zdCBheGlzID0gLTE7XG4gICAgICBjb25zdCBrZWVwRGltcyA9IHRydWU7XG4gICAgICBjb25zdCBib29sZWFuTWFzayA9IGFueShub3RFcXVhbChpbnB1dCwgdGhpcy5tYXNrVmFsdWUpLCBheGlzLCBrZWVwRGltcyk7XG4gICAgICBjb25zdCBvdXRwdXQgPSBtdWwoaW5wdXQsIGNhc3QoYm9vbGVhbk1hc2ssIGlucHV0LmR0eXBlKSk7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTWFza2luZyk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/embeddings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * TensorFlow.js Layers: Embedding Layer.
 *
 * Original source: keras/constraints.py
 */ __turbopack_context__.s([
    "Embedding",
    ()=>Embedding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$not_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/not_equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros_like.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class Embedding extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.embeddings = null;
        this.DEFAULT_EMBEDDINGS_INITIALIZER = 'randomUniform';
        if (args.batchInputShape == null && args.inputShape == null) {
            // Porting Note: This logic is copied from Layer's constructor, since we
            // can't do exactly what the Python constructor does for Embedding().
            // Specifically, the super constructor can not be called after the
            // mutation of the `config` argument.
            let batchSize = null;
            if (args.batchSize != null) {
                batchSize = args.batchSize;
            }
            if (args.inputLength == null) {
                // Fix super-constructor to what it would have done if
                // 'config.inputShape' were (None, )
                this.batchInputShape = [
                    batchSize,
                    null
                ];
            } else {
                // Fix super-constructor to what it would have done if
                // 'config.inputShape' were (config.inputLength, )
                this.batchInputShape = [
                    batchSize
                ].concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toList"](args.inputLength));
            }
        }
        this.inputDim = args.inputDim;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"](this.inputDim, 'inputDim');
        this.outputDim = args.outputDim;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"](this.outputDim, 'outputDim');
        this.embeddingsInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.embeddingsInitializer || this.DEFAULT_EMBEDDINGS_INITIALIZER);
        this.embeddingsRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.embeddingsRegularizer);
        this.activityRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.activityRegularizer);
        this.embeddingsConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.embeddingsConstraint);
        this.maskZero = args.maskZero;
        this.supportsMasking = args.maskZero;
        this.inputLength = args.inputLength;
    }
    build(inputShape) {
        this.embeddings = this.addWeight('embeddings', [
            this.inputDim,
            this.outputDim
        ], this.dtype, this.embeddingsInitializer, this.embeddingsRegularizer, true, this.embeddingsConstraint);
        this.built = true;
    }
    // Override warnOnIncompatibleInputShape because an embedding layer allows
    // the input to have varying ranks.
    warnOnIncompatibleInputShape(inputShape) {}
    computeMask(inputs, mask) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            if (!this.maskZero) {
                return null;
            } else {
                inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$not_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notEqual"])(inputs, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zerosLike"])(inputs));
            }
        });
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        if (this.inputLength == null) {
            return [
                ...inputShape,
                this.outputDim
            ];
        }
        // inputLength can be an array if input is 3D or higher.
        const inLens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toList"](this.inputLength);
        if (inLens.length !== inputShape.length - 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`"inputLength" is ${this.inputLength}, but received ` + `input shape has shape ${inputShape}`);
        } else {
            let i = 0;
            for(let k = 0; k < inLens.length; ++k){
                const s1 = inLens[k];
                const s2 = inputShape[k + 1];
                if (s1 != null && s2 != null && s1 !== s2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`"inputLength" is ${this.inputLength}, but received ` + `input shape has shape ${inputShape}`);
                } else if (s1 == null) {
                    inLens[i] = s2;
                }
                i++;
            }
        }
        return [
            inputShape[0],
            ...inLens,
            this.outputDim
        ];
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            // Embedding layer accepts only a single input.
            let input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (input.dtype !== 'int32') {
                input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](input, 'int32');
            }
            const output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gather"](this.embeddings.read(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(input, [
                input.size
            ]));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(output, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(this.computeOutputShape(input.shape)));
        });
    }
    getConfig() {
        const config = {
            inputDim: this.inputDim,
            outputDim: this.outputDim,
            embeddingsInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.embeddingsInitializer),
            embeddingsRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.embeddingsRegularizer),
            activityRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.activityRegularizer),
            embeddingsConstraint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.embeddingsConstraint),
            maskZero: this.maskZero,
            inputLength: this.inputLength
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Embedding.className = 'Embedding';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Embedding); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1iZWRkaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvZW1iZWRkaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOzs7O0dBSUc7QUFDSCxPQUFPLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRWhHLE9BQU8sS0FBSyxDQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0MsT0FBTyxFQUFtQyxhQUFhLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUMsS0FBSyxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUMsY0FBYyxFQUFzQyxvQkFBb0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpHLE9BQU8sRUFBQyxjQUFjLEVBQXNDLG9CQUFvQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekcsT0FBTyxLQUFLLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQWlEN0UsTUFBYSxTQUFVLFNBQVEsS0FBSztJQWdCbEMsWUFBWSxJQUF3QjtRQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFSTixlQUFVLEdBQWtCLElBQUksQ0FBQztRQUVoQyxtQ0FBOEIsR0FDbkMsZUFBZSxDQUFDO1FBTWxCLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDM0Qsd0VBQXdFO1lBQ3hFLHFFQUFxRTtZQUNyRSxrRUFBa0U7WUFDbEUscUNBQXFDO1lBQ3JD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QUNGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXJJRCxrQkFBa0I7QUFDWCxtQkFBUyxHQUFHLFdBQVcsQUFBZCxDQUFlO1NBRnBCLFNBQVM7QUF3SXRCLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIFRlbnNvckZsb3cuanMgTGF5ZXJzOiBFbWJlZGRpbmcgTGF5ZXIuXG4gKlxuICogT3JpZ2luYWwgc291cmNlOiBrZXJhcy9jb25zdHJhaW50cy5weVxuICovXG5pbXBvcnQge25vdEVxdWFsLCByZXNoYXBlLCBzZXJpYWxpemF0aW9uLCBUZW5zb3IsIHRpZHksIHplcm9zTGlrZX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0ICogYXMgSyBmcm9tICcuLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge0NvbnN0cmFpbnQsIENvbnN0cmFpbnRJZGVudGlmaWVyLCBnZXRDb25zdHJhaW50LCBzZXJpYWxpemVDb25zdHJhaW50fSBmcm9tICcuLi9jb25zdHJhaW50cyc7XG5pbXBvcnQge0xheWVyLCBMYXllckFyZ3N9IGZyb20gJy4uL2VuZ2luZS90b3BvbG9neSc7XG5pbXBvcnQge1ZhbHVlRXJyb3J9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQge2dldEluaXRpYWxpemVyLCBJbml0aWFsaXplciwgSW5pdGlhbGl6ZXJJZGVudGlmaWVyLCBzZXJpYWxpemVJbml0aWFsaXplcn0gZnJvbSAnLi4vaW5pdGlhbGl6ZXJzJztcbmltcG9ydCB7U2hhcGV9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtnZXRSZWd1bGFyaXplciwgUmVndWxhcml6ZXIsIFJlZ3VsYXJpemVySWRlbnRpZmllciwgc2VyaWFsaXplUmVndWxhcml6ZXJ9IGZyb20gJy4uL3JlZ3VsYXJpemVycyc7XG5pbXBvcnQge0t3YXJnc30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0ICogYXMgZ2VuZXJpY191dGlscyBmcm9tICcuLi91dGlscy9nZW5lcmljX3V0aWxzJztcbmltcG9ydCB7Z2V0RXhhY3RseU9uZVNoYXBlLCBnZXRFeGFjdGx5T25lVGVuc29yfSBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5pbXBvcnQge0xheWVyVmFyaWFibGV9IGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBFbWJlZGRpbmdMYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKipcbiAgICogSW50ZWdlciA+IDAuIFNpemUgb2YgdGhlIHZvY2FidWxhcnksIGkuZS4gbWF4aW11bSBpbnRlZ2VyIGluZGV4ICsgMS5cbiAgICovXG4gIGlucHV0RGltOiBudW1iZXI7XG4gIC8qKlxuICAgKiBJbnRlZ2VyID49IDAuIERpbWVuc2lvbiBvZiB0aGUgZGVuc2UgZW1iZWRkaW5nLlxuICAgKi9cbiAgb3V0cHV0RGltOiBudW1iZXI7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplciBmb3IgdGhlIGBlbWJlZGRpbmdzYCBtYXRyaXguXG4gICAqL1xuICBlbWJlZGRpbmdzSW5pdGlhbGl6ZXI/OiBJbml0aWFsaXplcklkZW50aWZpZXJ8SW5pdGlhbGl6ZXI7XG4gIC8qKlxuICAgKiBSZWd1bGFyaXplciBmdW5jdGlvbiBhcHBsaWVkIHRvIHRoZSBgZW1iZWRkaW5nc2AgbWF0cml4LlxuICAgKi9cbiAgZW1iZWRkaW5nc1JlZ3VsYXJpemVyPzogUmVndWxhcml6ZXJJZGVudGlmaWVyfFJlZ3VsYXJpemVyO1xuICAvKipcbiAgICogUmVndWxhcml6ZXIgZnVuY3Rpb24gYXBwbGllZCB0byB0aGUgYWN0aXZhdGlvbi5cbiAgICovXG4gIGFjdGl2aXR5UmVndWxhcml6ZXI/OiBSZWd1bGFyaXplcklkZW50aWZpZXJ8UmVndWxhcml6ZXI7XG4gIC8qKlxuICAgKiBDb25zdHJhaW50IGZ1bmN0aW9uIGFwcGxpZWQgdG8gdGhlIGBlbWJlZGRpbmdzYCBtYXRyaXguXG4gICAqL1xuICBlbWJlZGRpbmdzQ29uc3RyYWludD86IENvbnN0cmFpbnRJZGVudGlmaWVyfENvbnN0cmFpbnQ7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBpbnB1dCB2YWx1ZSAwIGlzIGEgc3BlY2lhbCBcInBhZGRpbmdcIiB2YWx1ZSB0aGF0IHNob3VsZCBiZVxuICAgKiBtYXNrZWQgb3V0LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHVzaW5nIHJlY3VycmVudCBsYXllcnMgd2hpY2ggbWF5IHRha2VcbiAgICogdmFyaWFibGUgbGVuZ3RoIGlucHV0LlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIGBUcnVlYCB0aGVuIGFsbCBzdWJzZXF1ZW50IGxheWVycyBpbiB0aGUgbW9kZWwgbmVlZCB0byBzdXBwb3J0XG4gICAqIG1hc2tpbmcgb3IgYW4gZXhjZXB0aW9uIHdpbGwgYmUgcmFpc2VkLiBJZiBtYXNrWmVybyBpcyBzZXQgdG8gYFRydWVgLCBhcyBhXG4gICAqIGNvbnNlcXVlbmNlLCBpbmRleCAwIGNhbm5vdCBiZSB1c2VkIGluIHRoZSB2b2NhYnVsYXJ5IChpbnB1dERpbSBzaG91bGRcbiAgICogZXF1YWwgc2l6ZSBvZiB2b2NhYnVsYXJ5ICsgMSkuXG4gICAqL1xuICBtYXNrWmVybz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBMZW5ndGggb2YgaW5wdXQgc2VxdWVuY2VzLCB3aGVuIGl0IGlzIGNvbnN0YW50LlxuICAgKlxuICAgKiBUaGlzIGFyZ3VtZW50IGlzIHJlcXVpcmVkIGlmIHlvdSBhcmUgZ29pbmcgdG8gY29ubmVjdCBgZmxhdHRlbmAgdGhlblxuICAgKiBgZGVuc2VgIGxheWVycyB1cHN0cmVhbSAod2l0aG91dCBpdCwgdGhlIHNoYXBlIG9mIHRoZSBkZW5zZSBvdXRwdXRzIGNhbm5vdFxuICAgKiBiZSBjb21wdXRlZCkuXG4gICAqL1xuICBpbnB1dExlbmd0aD86IG51bWJlcnxudW1iZXJbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEVtYmVkZGluZyBleHRlbmRzIExheWVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnRW1iZWRkaW5nJztcbiAgcHJpdmF0ZSBpbnB1dERpbTogbnVtYmVyO1xuICBwcml2YXRlIG91dHB1dERpbTogbnVtYmVyO1xuICBwcml2YXRlIGVtYmVkZGluZ3NJbml0aWFsaXplcjogSW5pdGlhbGl6ZXI7XG4gIHByaXZhdGUgbWFza1plcm86IGJvb2xlYW47XG4gIHByaXZhdGUgaW5wdXRMZW5ndGg6IG51bWJlcnxudW1iZXJbXTtcblxuICBwcml2YXRlIGVtYmVkZGluZ3M6IExheWVyVmFyaWFibGUgPSBudWxsO1xuXG4gIHJlYWRvbmx5IERFRkFVTFRfRU1CRURESU5HU19JTklUSUFMSVpFUjogSW5pdGlhbGl6ZXJJZGVudGlmaWVyID1cbiAgICAgICdyYW5kb21Vbmlmb3JtJztcbiAgcHJpdmF0ZSByZWFkb25seSBlbWJlZGRpbmdzUmVndWxhcml6ZXI/OiBSZWd1bGFyaXplcjtcbiAgcHJpdmF0ZSByZWFkb25seSBlbWJlZGRpbmdzQ29uc3RyYWludD86IENvbnN0cmFpbnQ7XG5cbiAgY29uc3RydWN0b3IoYXJnczogRW1iZWRkaW5nTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgaWYgKGFyZ3MuYmF0Y2hJbnB1dFNoYXBlID09IG51bGwgJiYgYXJncy5pbnB1dFNoYXBlID09IG51bGwpIHtcbiAgICAgIC8vIFBvcnRpbmcgTm90ZTogVGhpcyBsb2dpYyBpcyBjb3BpZWQgZnJvbSBMYXllcidzIGNvbnN0cnVjdG9yLCBzaW5jZSB3ZVxuICAgICAgLy8gY2FuJ3QgZG8gZXhhY3RseSB3aGF0IHRoZSBQeXRob24gY29uc3RydWN0b3IgZG9lcyBmb3IgRW1iZWRkaW5nKCkuXG4gICAgICAvLyBTcGVjaWZpY2FsbHksIHRoZSBzdXBlciBjb25zdHJ1Y3RvciBjYW4gbm90IGJlIGNhbGxlZCBhZnRlciB0aGVcbiAgICAgIC8vIG11dGF0aW9uIG9mIHRoZSBgY29uZmlnYCBhcmd1bWVudC5cbiAgICAgIGxldCBiYXRjaFNpemU6IG51bWJlciA9IG51bGw7XG4gICAgICBpZiAoYXJncy5iYXRjaFNpemUgIT0gbnVsbCkge1xuICAgICAgICBiYXRjaFNpemUgPSBhcmdzLmJhdGNoU2l6ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhcmdzLmlucHV0TGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgLy8gRml4IHN1cGVyLWNvbnN0cnVjdG9yIHRvIHdoYXQgaXQgd291bGQgaGF2ZSBkb25lIGlmXG4gICAgICAgIC8vICdjb25maWcuaW5wdXRTaGFwZScgd2VyZSAoTm9uZSwgKVxuICAgICAgICB0aGlzLmJhdGNoSW5wdXRTaGFwZSA9IFtiYXRjaFNpemUsIG51bGxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRml4IHN1cGVyLWNvbnN0cnVjdG9yIHRvIHdoYXQgaXQgd291bGQgaGF2ZSBkb25lIGlmXG4gICAgICAgIC8vICdjb25maWcuaW5wdXRTaGFwZScgd2VyZSAoY29uZmlnLmlucHV0TGVuZ3RoLCApXG4gICAgICAgIHRoaXMuYmF0Y2hJbnB1dFNoYXBlID1cbiAgICAgICAgICAgIFtiYXRjaFNpemVdLmNvbmNhdChnZW5lcmljX3V0aWxzLnRvTGlzdChhcmdzLmlucHV0TGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXREaW0gPSBhcmdzLmlucHV0RGltO1xuICAgIGdlbmVyaWNfdXRpbHMuYXNzZXJ0UG9zaXRpdmVJbnRlZ2VyKHRoaXMuaW5wdXREaW0sICdpbnB1dERpbScpO1xuICAgIHRoaXMub3V0cHV0RGltID0gYXJncy5vdXRwdXREaW07XG4gICAgZ2VuZXJpY191dGlscy5hc3NlcnRQb3NpdGl2ZUludGVnZXIodGhpcy5vdXRwdXREaW0sICdvdXRwdXREaW0nKTtcbiAgICB0aGlzLmVtYmVkZGluZ3NJbml0aWFsaXplciA9IGdldEluaXRpYWxpemVyKFxuICAgICAgICBhcmdzLmVtYmVkZGluZ3NJbml0aWFsaXplciB8fCB0aGlzLkRFRkFVTFRfRU1CRURESU5HU19JTklUSUFMSVpFUik7XG4gICAgdGhpcy5lbWJlZGRpbmdzUmVndWxhcml6ZXIgPSBnZXRSZWd1bGFyaXplcihhcmdzLmVtYmVkZGluZ3NSZWd1bGFyaXplcik7XG4gICAgdGhpcy5hY3Rpdml0eVJlZ3VsYXJpemVyID0gZ2V0UmVndWxhcml6ZXIoYXJncy5hY3Rpdml0eVJlZ3VsYXJpemVyKTtcbiAgICB0aGlzLmVtYmVkZGluZ3NDb25zdHJhaW50ID0gZ2V0Q29uc3RyYWludChhcmdzLmVtYmVkZGluZ3NDb25zdHJhaW50KTtcbiAgICB0aGlzLm1hc2taZXJvID0gYXJncy5tYXNrWmVybztcbiAgICB0aGlzLnN1cHBvcnRzTWFza2luZyA9IGFyZ3MubWFza1plcm87XG4gICAgdGhpcy5pbnB1dExlbmd0aCA9IGFyZ3MuaW5wdXRMZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYnVpbGQoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IHZvaWQge1xuICAgIHRoaXMuZW1iZWRkaW5ncyA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAnZW1iZWRkaW5ncycsIFt0aGlzLmlucHV0RGltLCB0aGlzLm91dHB1dERpbV0sIHRoaXMuZHR5cGUsXG4gICAgICAgIHRoaXMuZW1iZWRkaW5nc0luaXRpYWxpemVyLCB0aGlzLmVtYmVkZGluZ3NSZWd1bGFyaXplciwgdHJ1ZSxcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdzQ29uc3RyYWludCk7XG4gICAgdGhpcy5idWlsdCA9IHRydWU7XG4gIH1cblxuICAvLyBPdmVycmlkZSB3YXJuT25JbmNvbXBhdGlibGVJbnB1dFNoYXBlIGJlY2F1c2UgYW4gZW1iZWRkaW5nIGxheWVyIGFsbG93c1xuICAvLyB0aGUgaW5wdXQgdG8gaGF2ZSB2YXJ5aW5nIHJhbmtzLlxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgd2Fybk9uSW5jb21wYXRpYmxlSW5wdXRTaGFwZShpbnB1dFNoYXBlOiBTaGFwZSkge31cblxuICBvdmVycmlkZSBjb21wdXRlTWFzayhpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwgbWFzaz86IFRlbnNvcnxUZW5zb3JbXSk6XG4gICAgICBUZW5zb3Ige1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5tYXNrWmVybykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0cyA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgICAgcmV0dXJuIG5vdEVxdWFsKGlucHV0cywgemVyb3NMaWtlKGlucHV0cykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICBpbnB1dFNoYXBlID0gZ2V0RXhhY3RseU9uZVNoYXBlKGlucHV0U2hhcGUpO1xuICAgIGlmICh0aGlzLmlucHV0TGVuZ3RoID09IG51bGwpIHtcbiAgICAgIHJldHVybiBbLi4uaW5wdXRTaGFwZSwgdGhpcy5vdXRwdXREaW1dO1xuICAgIH1cbiAgICAvLyBpbnB1dExlbmd0aCBjYW4gYmUgYW4gYXJyYXkgaWYgaW5wdXQgaXMgM0Qgb3IgaGlnaGVyLlxuICAgIGNvbnN0IGluTGVuczogbnVtYmVyW10gPSBnZW5lcmljX3V0aWxzLnRvTGlzdCh0aGlzLmlucHV0TGVuZ3RoKTtcbiAgICBpZiAoaW5MZW5zLmxlbmd0aCAhPT0gaW5wdXRTaGFwZS5sZW5ndGggLSAxKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgXCJpbnB1dExlbmd0aFwiIGlzICR7dGhpcy5pbnB1dExlbmd0aH0sIGJ1dCByZWNlaXZlZCBgICtcbiAgICAgICAgICBgaW5wdXQgc2hhcGUgaGFzIHNoYXBlICR7aW5wdXRTaGFwZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpbkxlbnMubGVuZ3RoOyArK2spIHtcbiAgICAgICAgY29uc3QgczEgPSBpbkxlbnNba107XG4gICAgICAgIGNvbnN0IHMyID0gaW5wdXRTaGFwZVtrICsgMV07XG4gICAgICAgIGlmICgoczEgIT0gbnVsbCkgJiYgKHMyICE9IG51bGwpICYmIChzMSAhPT0gczIpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGBcImlucHV0TGVuZ3RoXCIgaXMgJHt0aGlzLmlucHV0TGVuZ3RofSwgYnV0IHJlY2VpdmVkIGAgK1xuICAgICAgICAgICAgICBgaW5wdXQgc2hhcGUgaGFzIHNoYXBlICR7aW5wdXRTaGFwZX1gKTtcbiAgICAgICAgfSBlbHNlIGlmIChzMSA9PSBudWxsKSB7XG4gICAgICAgICAgaW5MZW5zW2ldID0gczI7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIC4uLmluTGVucywgdGhpcy5vdXRwdXREaW1dO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgLy8gRW1iZWRkaW5nIGxheWVyIGFjY2VwdHMgb25seSBhIHNpbmdsZSBpbnB1dC5cbiAgICAgIGxldCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIGlmIChpbnB1dC5kdHlwZSAhPT0gJ2ludDMyJykge1xuICAgICAgICBpbnB1dCA9IEsuY2FzdChpbnB1dCwgJ2ludDMyJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBvdXRwdXQgPVxuICAgICAgICAgIEsuZ2F0aGVyKHRoaXMuZW1iZWRkaW5ncy5yZWFkKCksIHJlc2hhcGUoaW5wdXQsIFtpbnB1dC5zaXplXSkpO1xuICAgICAgcmV0dXJuIHJlc2hhcGUoXG4gICAgICAgICAgb3V0cHV0LCBnZXRFeGFjdGx5T25lU2hhcGUodGhpcy5jb21wdXRlT3V0cHV0U2hhcGUoaW5wdXQuc2hhcGUpKSk7XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBpbnB1dERpbTogdGhpcy5pbnB1dERpbSxcbiAgICAgIG91dHB1dERpbTogdGhpcy5vdXRwdXREaW0sXG4gICAgICBlbWJlZGRpbmdzSW5pdGlhbGl6ZXI6IHNlcmlhbGl6ZUluaXRpYWxpemVyKHRoaXMuZW1iZWRkaW5nc0luaXRpYWxpemVyKSxcbiAgICAgIGVtYmVkZGluZ3NSZWd1bGFyaXplcjogc2VyaWFsaXplUmVndWxhcml6ZXIodGhpcy5lbWJlZGRpbmdzUmVndWxhcml6ZXIpLFxuICAgICAgYWN0aXZpdHlSZWd1bGFyaXplcjogc2VyaWFsaXplUmVndWxhcml6ZXIodGhpcy5hY3Rpdml0eVJlZ3VsYXJpemVyKSxcbiAgICAgIGVtYmVkZGluZ3NDb25zdHJhaW50OiBzZXJpYWxpemVDb25zdHJhaW50KHRoaXMuZW1iZWRkaW5nc0NvbnN0cmFpbnQpLFxuICAgICAgbWFza1plcm86IHRoaXMubWFza1plcm8sXG4gICAgICBpbnB1dExlbmd0aDogdGhpcy5pbnB1dExlbmd0aFxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoRW1iZWRkaW5nKTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * TensorFlow.js Layers: Merge Layers.
 */ __turbopack_context__.s([
    "Add",
    ()=>Add,
    "Average",
    ()=>Average,
    "Concatenate",
    ()=>Concatenate,
    "Dot",
    ()=>Dot,
    "Maximum",
    ()=>Maximum,
    "Merge",
    ()=>Merge,
    "Minimum",
    ()=>Minimum,
    "Multiply",
    ()=>Multiply,
    "add",
    ()=>add,
    "average",
    ()=>average,
    "concatenate",
    ()=>concatenate,
    "maximum",
    ()=>maximum,
    "minimum",
    ()=>minimum,
    "multiply",
    ()=>multiply
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/transpose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/expand_dims.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$logical_and$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/logical_and.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/maximum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$minimum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/minimum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones_like.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mat_mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$squeeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/squeeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/losses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class Merge extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args || {});
        this.supportsMasking = true;
    }
    /**
     * Logic for merging multiple tensors, to be overridden by subclasses.
     * @param inputs
     */ mergeFunction(inputs) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]();
    }
    /**
     * Computes the shape of the result of an elementwise operation.
     *
     * @param shape1: Shape of the first tensor.
     * @param shape2: Shape of the second tensor.
     * @returns Expected output shape when an elementwise operation is carried
     *   out on 2 tensors with shapes `shape1` and `shape2`.
     * @throws ValueError: If `shape1` and `shape2` are not compatible for
     *   element-wise operations.
     */ computeElementwiseOpOutputShape(shape1, shape2) {
        if (shape1 == null || shape2 == null) {
            return null;
        } else if (shape1.length < shape2.length) {
            return this.computeElementwiseOpOutputShape(shape2, shape1);
        } else if (shape2.length === 0) {
            return shape1;
        }
        const outputShape = shape1.slice(0, shape1.length - shape2.length);
        for(let k = 0; k < shape2.length; ++k){
            const i = shape1[shape1.length - shape2.length + k];
            const j = shape2[k];
            if (i == null || j == null || i < 0 || j < 0) {
                outputShape.push(null);
            } else if (i === 1) {
                outputShape.push(j);
            } else if (j === 1) {
                outputShape.push(i);
            } else {
                if (i !== j) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('Operands could not be broadcast together with shapes ' + JSON.stringify(shape1) + ' ' + JSON.stringify(shape2));
                }
                outputShape.push(i);
            }
        }
        return outputShape;
    }
    build(inputShape) {
        // Used purely for shape validation.
        if (Array.isArray(inputShape) && !Array.isArray(inputShape[0])) {
            // Make sure that inputShape is an Array of shape.
            inputShape = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape)
            ];
        }
        inputShape = inputShape;
        if (inputShape.length < 2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('A merge layer should be called on an Array of at least 2 inputs.' + ` Got ${inputShape.length} input(s).`);
        }
        // Make sure that there is at most one unique batch size among the input
        // shapes.
        let batchSizes = [];
        for (const shape of inputShape){
            if (shape != null && shape[0] !== null) {
                batchSizes.push(shape[0]);
            }
        }
        batchSizes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unique"](batchSizes);
        if (batchSizes.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Can not merge tensors with different batch sizes. ` + `Got tensors with shapes: ${JSON.stringify(inputShape)}.`);
        }
        let outputShape = inputShape[0] == null ? null : inputShape[0].slice(1);
        for(let i = 1; i < inputShape.length; ++i){
            const shape = inputShape[i] == null ? null : inputShape[i].slice(1);
            outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
        }
        // If the inputs have different ranks, we have to reshape them to make them
        // broadcastable.
        const allRanks = inputShape.map((shape)=>shape.length);
        if (inputShape.indexOf(null) === -1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unique"](allRanks).length === 1) {
            this.reshapeRequired = false;
        } else {
            this.reshapeRequired = true;
        }
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = inputs;
            if (this.reshapeRequired) {
                const reshapedInputs = [];
                const inputDims = inputs.map((input)=>input.rank);
                if (inputDims.indexOf(null) === -1) {
                    // If ranks of all inputs are available, we simply expand each of them
                    // at axis=1 until all of them have the same rank.
                    const maxNDim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](inputDims);
                    for (let x of inputs){
                        const xNDim = x.rank;
                        for(let k = 0; k < maxNDim - xNDim; ++k){
                            x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](x, 1);
                        }
                        reshapedInputs.push(x);
                    }
                    return this.mergeFunction(reshapedInputs);
                } else {
                    // Transpose all inputs so that batch size is the last dimension.
                    // [batchSize, dim1, dim2, ...] -> [dim1, dim2, ..., batchSize]
                    let transposed = false;
                    for (const x of inputs){
                        const xNDim = x.rank;
                        if (xNDim == null) {
                            const xShape = x.shape;
                            const batchSize = xShape[0];
                            const newShape = xShape.slice(1).concat([
                                batchSize
                            ]);
                            let xTransposed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](x, [
                                batchSize
                            ].concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayProd"](xShape.slice(1))));
                            xTransposed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](xTransposed, [
                                1,
                                0
                            ]);
                            xTransposed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](xTransposed, newShape);
                            reshapedInputs.push(xTransposed);
                            transposed = true;
                        } else if (xNDim > 1) {
                            const dims = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"](1, xNDim).concat([
                                0
                            ]);
                            reshapedInputs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](x, dims));
                            transposed = true;
                        } else {
                            // We don't transpose inputs if they are 1D vectors or scalars.
                            reshapedInputs.push(x);
                        }
                    }
                    let y = this.mergeFunction(reshapedInputs);
                    const yNDim = y.rank;
                    if (transposed) {
                        // If inputs have been transposed, we have to transpose the output
                        // too.
                        if (yNDim == null) {
                            const yShape = y.shape;
                            const yNDim = yShape.length;
                            const batchSize = yShape[yNDim - 1];
                            const newShape = [
                                batchSize
                            ].concat(yShape.slice(0, yShape.length - 1));
                            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](y, [
                                -1,
                                batchSize
                            ]), [
                                1,
                                0
                            ]), newShape);
                        } else if (yNDim > 1) {
                            const dims = [
                                yNDim - 1
                            ].concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"](0, yNDim - 1));
                            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](y, dims);
                        }
                    }
                    return y;
                }
            } else {
                return this.mergeFunction(inputs);
            }
        });
    }
    computeOutputShape(inputShape) {
        inputShape = inputShape;
        let outputShape;
        if (inputShape[0] == null) {
            outputShape = null;
        } else {
            outputShape = inputShape[0].slice(1);
        }
        for(let i = 1; i < inputShape.length; ++i){
            const shape = inputShape[i] == null ? null : inputShape[i].slice(1);
            outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
        }
        let batchSizes = [];
        for (const shape of inputShape){
            if (shape != null && shape[0] !== null) {
                batchSizes.push(shape[0]);
            }
        }
        batchSizes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unique"](batchSizes);
        if (batchSizes.length === 1) {
            outputShape = batchSizes.concat(outputShape);
        } else {
            outputShape = [
                null
            ].concat(outputShape);
        }
        return outputShape;
    }
    computeMask(inputs, mask) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
            if (mask == null) {
                return null;
            }
            if (!Array.isArray(mask)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('`mask` should be an Array');
            }
            if (!Array.isArray(inputs)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('`inputs` should be an Array');
            }
            if (mask.length !== inputs.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`The Array 'inputs' and 'mask' are expected to have the same ` + `length, but have different lengths ` + `(${inputs.length} vs ${mask.length})`);
            }
            if (mask.every((m)=>m == null)) {
                return null;
            }
            mask = mask.map((m)=>m == null ? m : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](m, 0));
            let output = mask[0];
            for(let i = 1; i < mask.length - 1; ++i){
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$logical_and$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logicalAnd"](output, mask[i]);
            }
            return output;
        });
    }
}
class Add extends Merge {
    constructor(args){
        super(args);
    }
    mergeFunction(inputs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let output = inputs[0].clone();
            for(let i = 1; i < inputs.length; ++i){
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](output, inputs[i]);
            }
            return output;
        });
    }
}
/** @nocollapse */ Add.className = 'Add';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Add);
function add(config) {
    if (Array.isArray(config)) {
        const layer = new Add({});
        return layer.apply(config);
    } else {
        return new Add(config);
    }
}
class Multiply extends Merge {
    constructor(args){
        super(args);
    }
    mergeFunction(inputs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let output = inputs[0].clone();
            for(let i = 1; i < inputs.length; ++i){
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](output, inputs[i]);
            }
            return output;
        });
    }
}
/** @nocollapse */ Multiply.className = 'Multiply';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Multiply);
function multiply(config) {
    if (Array.isArray(config)) {
        const layer = new Multiply({});
        return layer.apply(config);
    } else {
        return new Multiply(config);
    }
}
class Average extends Merge {
    constructor(args){
        super(args);
    }
    mergeFunction(inputs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let output = inputs[0].clone();
            for(let i = 1; i < inputs.length; ++i){
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](output, inputs[i]);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](1 / inputs.length, output);
        });
    }
}
/** @nocollapse */ Average.className = 'Average';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Average);
function average(config) {
    if (Array.isArray(config)) {
        const layer = new Average({});
        return layer.apply(config);
    } else {
        return new Average(config);
    }
}
class Maximum extends Merge {
    constructor(args){
        super(args);
    }
    mergeFunction(inputs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let output = inputs[0];
            for(let i = 1; i < inputs.length; ++i){
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maximum"](output, inputs[i]);
            }
            return output;
        });
    }
}
/** @nocollapse */ Maximum.className = 'Maximum';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Maximum);
function maximum(config) {
    if (Array.isArray(config)) {
        const layer = new Maximum({});
        return layer.apply(config);
    } else {
        return new Maximum(config);
    }
}
class Minimum extends Merge {
    constructor(args){
        super(args);
    }
    mergeFunction(inputs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let output = inputs[0];
            for(let i = 1; i < inputs.length; ++i){
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$minimum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimum"](output, inputs[i]);
            }
            return output;
        });
    }
}
/** @nocollapse */ Minimum.className = 'Minimum';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Minimum);
function minimum(config) {
    if (Array.isArray(config)) {
        const layer = new Minimum({});
        return layer.apply(config);
    } else {
        return new Minimum(config);
    }
}
class Concatenate extends Merge {
    constructor(args){
        super(args);
        this.DEFAULT_AXIS = -1;
        if (args == null) {
            args = {};
        }
        this.axis = args.axis == null ? this.DEFAULT_AXIS : args.axis;
        this.supportsMasking = true;
        this.reshapeRequired = false;
    }
    build(inputShape) {
        // Used purely for shape validation.]
        if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0])) || inputShape.length === 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('A `Concatenate` layer should be called on a list of at least 2 ' + 'inputs');
        }
        inputShape = inputShape;
        let allNoneShape = true;
        for (const shape of inputShape){
            if (shape != null) {
                allNoneShape = false;
                break;
            }
        }
        if (allNoneShape) {
            return;
        }
        const shapeSet = [];
        for(let i = 0; i < inputShape.length; ++i){
            const shapeWithoutConcatAxis = inputShape[i].slice();
            shapeWithoutConcatAxis.splice(this.axis, 1);
            let exists = false;
            for (const shape of shapeSet){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(shape, shapeWithoutConcatAxis)) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                shapeSet.push(shapeWithoutConcatAxis);
            }
        }
        if (shapeSet.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('A `Concatenate` layer requires inputs with matching shapes ' + 'except for the concat axis. Got input shapes: ' + JSON.stringify(inputShape));
        }
    }
    mergeFunction(inputs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatenate"](inputs, this.axis);
        });
    }
    computeOutputShape(inputShape) {
        if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0]))) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('A `Concatenate` layer should be called on a list of inputs.');
        }
        const inputShapes = inputShape;
        const outputShape = inputShapes[0].slice();
        const axis = this.axis < 0 ? outputShape.length + this.axis : this.axis;
        // Porting Note: the line above is because TypeScript doesn't support
        //   negative indices.
        for (const shape of inputShapes.slice(1)){
            if (outputShape[axis] == null || shape[axis] == null) {
                outputShape[axis] = null;
                break;
            }
            outputShape[axis] += shape[axis];
        }
        return outputShape;
    }
    computeMask(inputs, mask) {
        if (mask == null) {
            return null;
        }
        if (!Array.isArray(mask)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('`mask` should be an array for Concatenate');
        }
        if (!Array.isArray(inputs)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('`inputs` should be an array for Concatenate');
        }
        if (mask.length !== inputs.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Mismatch in the length of mask (${mask.length}) ` + `and the legnth of inputs (${inputs.length})`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
            let allNullMasks = true;
            mask.forEach((m)=>{
                if (m != null) {
                    allNullMasks = false;
                    return;
                }
            });
            if (allNullMasks) {
                return null;
            }
            const outputMasks = [];
            for(let i = 0; i < inputs.length; ++i){
                if (mask[i] == null) {
                    // Input is unmasked. Append all 1's to masks.
                    outputMasks.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onesLike"](inputs[i]), 'bool'));
                } else if (mask[i].rank < inputs[i].rank) {
                    // Mask is smaller than the input, expand it.
                    outputMasks.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](mask[i], -1));
                } else {
                    outputMasks.push(mask[i]);
                }
            }
            const concatenatedMasks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](outputMasks, this.axis);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["all"](concatenatedMasks, -1, false);
        });
    }
    getConfig() {
        const config = {
            'axis': this.axis
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Concatenate.className = 'Concatenate';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Concatenate);
function concatenate(config) {
    if (Array.isArray(config)) {
        const layer = new Concatenate({});
        return layer.apply(config);
    } else {
        return new Concatenate(config);
    }
}
/**
 * Interpretable potentially negative axis index.
 *
 * For example, given axis = -1, and dim = 3, this function will return 2.
 *
 * @param axis The axis index, may be a positive, zero or negative integer.
 * @param dim Total number of dimensions, a positive integer.
 * @returns A non-negative axis index equivalent to the input `axis`.
 */ function interpretAxis(axis, dim) {
    while(axis < 0){
        axis += dim;
    }
    return axis;
}
function batchDot(x, y, axes) {
    if (x.shape.length > 3 || y.shape.length > 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('batchDot is not implemented for tensors of 4D or higher rank yet');
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(x.shape.length >= 2, ()=>`batchDot requires the rank of x to be >= 2, ` + `but got ${x.shape.length}`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(x.shape.length >= 2, ()=>`batchDot requires the rank of y to be >= 2, ` + `but got ${y.shape.length}`);
    if (typeof axes === 'number') {
        axes = [
            axes,
            axes
        ];
    }
    if (x.dtype === 'complex64' || y.dtype === 'complex64') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('batchDot is not implemented for complex64-type Tensors yet.');
    }
    const xNDim = x.shape.length;
    const yNDim = y.shape.length;
    if (axes == null) {
        // Behave like batchMatmul by default.
        axes = [
            xNDim - 1,
            yNDim - 2
        ];
    }
    const axesArray = axes;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
        let diff;
        if (xNDim > yNDim) {
            diff = xNDim - yNDim;
            const diffShape = [];
            for(let i = 0; i < diff; ++i){
                diffShape.push(1);
            }
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](y, y.shape.concat(diffShape));
        } else if (yNDim > xNDim) {
            diff = yNDim - xNDim;
            const diffShape = [];
            for(let i = 0; i < diff; ++i){
                diffShape.push(1);
            }
            x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](x, x.shape.concat(diffShape));
        } else {
            diff = 0;
        }
        let out;
        if (x.shape.length === 2 && y.shape.length === 2) {
            if (axesArray[0] === axesArray[1]) {
                out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](x, y), axesArray[0]);
            } else {
                out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](x, [
                    1,
                    0
                ]), y), axesArray[1]);
            }
        } else {
            const adjX = axesArray[0] !== x.shape.length - 1;
            const adjY = axesArray[1] === y.shape.length - 1;
            out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"](x, y, adjX, adjY);
        }
        if (diff > 0) {
            let idx;
            if (xNDim > yNDim) {
                idx = xNDim + yNDim - 3;
            } else {
                idx = xNDim - 1;
            }
            const squeezeAxes = [];
            for(let i = idx; i < idx + diff; ++i){
                squeezeAxes.push(i);
            }
            out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$squeeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squeeze"](out, squeezeAxes);
        }
        if (out.shape.length === 1) {
            out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](out, 1);
        }
        return out;
    });
}
class Dot extends Merge {
    constructor(args){
        super(args);
        this.axes = args.axes;
        this.normalize = args.normalize == null ? false : args.normalize;
        this.supportsMasking = true;
        this.reshapeRequired = false;
    }
    build(inputShape) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(Array.isArray(inputShape) && inputShape.length === 2 && Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]), ()=>'A `Dot` layer should be called on a list of exactly 2 inputs.');
        const shape1 = inputShape[0];
        const shape2 = inputShape[1];
        if (shape1.length > 3 || shape2.length > 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('Dot layer does not support tensors of 4D or higher rank yet.');
        }
        const axes = this.interpretAxes(shape1, shape2);
        if (shape1[axes[0]] !== shape2[axes[1]]) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Dimension incompatibility: ` + `${shape1[axes[0]]} !== ${shape2[axes[1]]}`);
        }
    }
    mergeFunction(inputs) {
        if (inputs.length !== 2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('A `Dot` layer must be called on exactly 2 inputs, ' + `but received ${inputs.length} input(s).`);
        }
        let x1 = inputs[0];
        let x2 = inputs[1];
        let axes;
        if (!Array.isArray(this.axes)) {
            axes = [
                interpretAxis(this.axes, x1.shape.length),
                interpretAxis(this.axes, x2.shape.length)
            ];
        } else {
            axes = this.axes.map((axis, i)=>interpretAxis(axis, inputs[i].shape.length));
        }
        if (this.normalize) {
            x1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l2Normalize"])(x1, axes[0]);
            x2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["l2Normalize"])(x2, axes[1]);
        }
        return batchDot(x1, x2, axes);
    }
    interpretAxes(shape1, shape2) {
        let axes;
        if (!Array.isArray(this.axes)) {
            // `this.axes` is a single integer.
            axes = [
                interpretAxis(this.axes, shape1.length),
                interpretAxis(this.axes, shape2.length)
            ];
        } else {
            // `this.axes` is an Array of integers.
            axes = this.axes;
        }
        return axes;
    }
    computeOutputShape(inputShape) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(Array.isArray(inputShape) && inputShape.length === 2 && Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]), ()=>'A `Dot` layer should be called on a list of exactly 2 inputs.');
        const shape1 = inputShape[0].slice();
        const shape2 = inputShape[1].slice();
        if (shape1.length > 3 || shape2.length > 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('Dot layer does not support tensors of 4D or higher rank yet.');
        }
        const axes = this.interpretAxes(shape1, shape2);
        shape1.splice(axes[0], 1);
        shape2.splice(axes[1], 1);
        shape2.splice(0, 1);
        const outputShape = shape1.concat(shape2);
        if (outputShape.length === 1) {
            outputShape.push(1);
        }
        return outputShape;
    }
    computeMask(inputs, mask) {
        return null;
    }
    getConfig() {
        const config = {
            'axes': this.axes,
            'normalize': this.normalize
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ Dot.className = 'Dot';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Dot); // TODO(cais): Add functional interfaces for the merge layers.
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL21lcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQVUsSUFBSSxFQUFFLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sS0FBSyxDQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLEtBQUssRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRTFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFdEMsT0FBTyxLQUFLLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEtBQUssU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXhEOzs7O0dBSUc7QUFDSCxNQUFNLE9BQWdCLEtBQU0sU0FBUSxLQUFLO0lBR3ZDLFlBQVksSUFBZ0I7UUFDMUIsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sYUFBYSxDQUFDLE1BQWdCO1FBQ3RDLE1BQU0sSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSywrQkFBK0IsQ0FBQyxNQUFhLEVBQUUsTUFBYTtRQUNsRSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNwQyxPQUFPLElB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dGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIFRlbnNvckZsb3cuanMgTGF5ZXJzOiBNZXJnZSBMYXllcnMuXG4gKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge3NlcmlhbGl6YXRpb24sIFRlbnNvciwgdGlkeSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuaW1wb3J0IHtMYXllciwgTGF5ZXJBcmdzLCBTeW1ib2xpY1RlbnNvcn0gZnJvbSAnLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7Tm90SW1wbGVtZW50ZWRFcnJvciwgVmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7U2hhcGV9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtsMk5vcm1hbGl6ZX0gZnJvbSAnLi4vbG9zc2VzJztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgKiBhcyBnZW5lcmljX3V0aWxzIGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuaW1wb3J0ICogYXMgbWF0aFV0aWxzIGZyb20gJy4uL3V0aWxzL21hdGhfdXRpbHMnO1xuaW1wb3J0IHtnZXRFeGFjdGx5T25lU2hhcGV9IGZyb20gJy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcblxuLyoqXG4gKiBHZW5lcmljIE1lcmdlIGxheWVyIGZvciBlbGVtZW50LXdpc2UgbWVyZ2UgZnVuY3Rpb25zLlxuICpcbiAqIFVzZWQgdG8gaW1wbGVtZW50IGBTdW1gLCBgQXZlcmFnZWAsIGBDb25jYXRlbmF0ZWAsIGV0Yy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lcmdlIGV4dGVuZHMgTGF5ZXIge1xuICBwcm90ZWN0ZWQgcmVzaGFwZVJlcXVpcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzIHx8IHt9KTtcbiAgICB0aGlzLnN1cHBvcnRzTWFza2luZyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTG9naWMgZm9yIG1lcmdpbmcgbXVsdGlwbGUgdGVuc29ycywgdG8gYmUgb3ZlcnJpZGRlbiBieSBzdWJjbGFzc2VzLlxuICAgKiBAcGFyYW0gaW5wdXRzXG4gICAqL1xuICBwcm90ZWN0ZWQgbWVyZ2VGdW5jdGlvbihpbnB1dHM6IFRlbnNvcltdKTogVGVuc29yIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzaGFwZSBvZiB0aGUgcmVzdWx0IG9mIGFuIGVsZW1lbnR3aXNlIG9wZXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNoYXBlMTogU2hhcGUgb2YgdGhlIGZpcnN0IHRlbnNvci5cbiAgICogQHBhcmFtIHNoYXBlMjogU2hhcGUgb2YgdGhlIHNlY29uZCB0ZW5zb3IuXG4gICAqIEByZXR1cm5zIEV4cGVjdGVkIG91dHB1dCBzaGFwZSB3aGVuIGFuIGVsZW1lbnR3aXNlIG9wZXJhdGlvbiBpcyBjYXJyaWVkXG4gICAqICAgb3V0IG9uIDIgdGVuc29ycyB3aXRoIHNoYXBlcyBgc2hhcGUxYCBhbmQgYHNoYXBlMmAuXG4gICAqIEB0aHJvd3MgVmFsdWVFcnJvcjogSWYgYHNoYXBlMWAgYW5kIGBzaGFwZTJgIGFyZSBub3QgY29tcGF0aWJsZSBmb3JcbiAgICogICBlbGVtZW50LXdpc2Ugb3BlcmF0aW9ucy5cbiAgICovXG4gIHByaXZhdGUgY29tcHV0ZUVsZW1lbnR3aXNlT3BPdXRwdXRTaGFwZShzaGFwZTE6IFNoYXBlLCBzaGFwZTI6IFNoYXBlKTogU2hhcGUge1xuICAgIGlmIChzaGFwZTEgPT0gbnVsbCB8fCBzaGFwZTIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChzaGFwZTEubGVuZ3RoIDwgc2hhcGUyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZUVsZW1lbnR3aXNlT3BPdXRwdXRTaGFwZShzaGFwZTIsIHNoYXBlMSk7XG4gICAgfSBlbHNlIGlmIChzaGFwZTIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2hhcGUxO1xuICAgIH1cbiAgICBjb25zdCBvdXRwdXRTaGFwZTogU2hhcGUgPSBzaGFwZTEuc2xpY2UoMCwgc2hhcGUxLmxlbmd0aCAtIHNoYXBlMi5sZW5ndGgpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2hhcGUyLmxlbmd0aDsgKytrKSB7XG4gICAgICBjb25zdCBpID0gc2hhcGUxW3NoYXBlMS5sZW5ndGggLSBzaGFwZTIubGVuZ3RoICsga107XG4gICAgICBjb25zdCBqID0gc2hhcGUyW2tdO1xuICAgICAgaWYgKGkgPT0gbnVsbCB8fCBqID09IG51bGwgfHwgaSA8IDAgfHwgaiA8IDApIHtcbiAgICAgICAgb3V0cHV0U2hhcGUucHVzaChudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBvdXRwdXRTaGFwZS5wdXNoKGopO1xuICAgICAgfSBlbHNlIGlmIChqID09PSAxKSB7XG4gICAgICAgIG91dHB1dFNoYXBlLnB1c2goaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICAnT3BlcmFuZHMgY291bGQgbm90IGJlIGJyb2FkY2FzdCB0b2dldGhlciB3aXRoIHNoYXBlcyAnICtcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2hhcGUxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KHNoYXBlMikpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dFNoYXBlLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGJ1aWxkKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiB2b2lkIHtcbiAgICAvLyBVc2VkIHB1cmVseSBmb3Igc2hhcGUgdmFsaWRhdGlvbi5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dFNoYXBlKSAmJiAhQXJyYXkuaXNBcnJheShpbnB1dFNoYXBlWzBdKSkge1xuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgaW5wdXRTaGFwZSBpcyBhbiBBcnJheSBvZiBzaGFwZS5cbiAgICAgIGlucHV0U2hhcGUgPSBbZ2V0RXhhY3RseU9uZVNoYXBlKGlucHV0U2hhcGUpXTtcbiAgICB9XG4gICAgaW5wdXRTaGFwZSA9IGlucHV0U2hhcGUgYXMgU2hhcGVbXTtcbiAgICBpZiAoaW5wdXRTaGFwZS5sZW5ndGggPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnQSBtZXJnZSBsYXllciBzaG91bGQgYmUgY2FsbGVkIG9uIGFuIEFycmF5IG9mIGF0IGxlYXN0IDIgaW5wdXRzLicgK1xuICAgICAgICAgIGAgR290ICR7aW5wdXRTaGFwZS5sZW5ndGh9IGlucHV0KHMpLmApO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZXJlIGlzIGF0IG1vc3Qgb25lIHVuaXF1ZSBiYXRjaCBzaXplIGFtb25nIHRoZSBpbnB1dFxuICAgIC8vIHNoYXBlcy5cbiAgICBsZXQgYmF0Y2hTaXplczogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHNoYXBlIG9mIGlucHV0U2hhcGUpIHtcbiAgICAgIGlmIChzaGFwZSAhPSBudWxsICYmIHNoYXBlWzBdICE9PSBudWxsKSB7XG4gICAgICAgIGJhdGNoU2l6ZXMucHVzaChzaGFwZVswXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGJhdGNoU2l6ZXMgPSBnZW5lcmljX3V0aWxzLnVuaXF1ZShiYXRjaFNpemVzKTtcbiAgICBpZiAoYmF0Y2hTaXplcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgQ2FuIG5vdCBtZXJnZSB0ZW5zb3JzIHdpdGggZGlmZmVyZW50IGJhdGNoIHNpemVzLiBgICtcbiAgICAgICAgICBgR290IHRlbnNvcnMgd2l0aCBzaGFwZXM6ICR7SlNPTi5zdHJpbmdpZnkoaW5wdXRTaGFwZSl9LmApO1xuICAgIH1cblxuICAgIGxldCBvdXRwdXRTaGFwZTogU2hhcGUgPVxuICAgICAgICBpbnB1dFNoYXBlWzBdID09IG51bGwgPyBudWxsIDogaW5wdXRTaGFwZVswXS5zbGljZSgxKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGlucHV0U2hhcGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHNoYXBlID0gaW5wdXRTaGFwZVtpXSA9PSBudWxsID8gbnVsbCA6IGlucHV0U2hhcGVbaV0uc2xpY2UoMSk7XG4gICAgICBvdXRwdXRTaGFwZSA9IHRoaXMuY29tcHV0ZUVsZW1lbnR3aXNlT3BPdXRwdXRTaGFwZShvdXRwdXRTaGFwZSwgc2hhcGUpO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgaW5wdXRzIGhhdmUgZGlmZmVyZW50IHJhbmtzLCB3ZSBoYXZlIHRvIHJlc2hhcGUgdGhlbSB0byBtYWtlIHRoZW1cbiAgICAvLyBicm9hZGNhc3RhYmxlLlxuICAgIGNvbnN0IGFsbFJhbmtzID0gaW5wdXRTaGFwZS5tYXAoc2hhcGUgPT4gc2hhcGUubGVuZ3RoKTtcbiAgICBpZiAoaW5wdXRTaGFwZS5pbmRleE9mKG51bGwpID09PSAtMSAmJlxuICAgICAgICBnZW5lcmljX3V0aWxzLnVuaXF1ZShhbGxSYW5rcykubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLnJlc2hhcGVSZXF1aXJlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2hhcGVSZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGlucHV0cyA9IGlucHV0cyBhcyBUZW5zb3JbXTtcbiAgICAgIGlmICh0aGlzLnJlc2hhcGVSZXF1aXJlZCkge1xuICAgICAgICBjb25zdCByZXNoYXBlZElucHV0czogVGVuc29yW10gPSBbXTtcbiAgICAgICAgY29uc3QgaW5wdXREaW1zID0gaW5wdXRzLm1hcChpbnB1dCA9PiBpbnB1dC5yYW5rKTtcbiAgICAgICAgaWYgKGlucHV0RGltcy5pbmRleE9mKG51bGwpID09PSAtMSkge1xuICAgICAgICAgIC8vIElmIHJhbmtzIG9mIGFsbCBpbnB1dHMgYXJlIGF2YWlsYWJsZSwgd2Ugc2ltcGx5IGV4cGFuZCBlYWNoIG9mIHRoZW1cbiAgICAgICAgICAvLyBhdCBheGlzPTEgdW50aWwgYWxsIG9mIHRoZW0gaGF2ZSB0aGUgc2FtZSByYW5rLlxuICAgICAgICAgIGNvbnN0IG1heE5EaW0gPSBtYXRoVXRpbHMubWF4KGlucHV0RGltcyk7XG4gICAgICAgICAgZm9yIChsZXQgeCBvZiBpbnB1dHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHhORGltID0geC5yYW5rO1xuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBtYXhORGltIC0geE5EaW07ICsraykge1xuICAgICAgICAgICAgICB4ID0gSy5leHBhbmREaW1zKHgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzaGFwZWRJbnB1dHMucHVzaCh4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VGdW5jdGlvbihyZXNoYXBlZElucHV0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVHJhbnNwb3NlIGFsbCBpbnB1dHMgc28gdGhhdCBiYXRjaCBzaXplIGlzIHRoZSBsYXN0IGRpbWVuc2lvbi5cbiAgICAgICAgICAvLyBbYmF0Y2hTaXplLCBkaW0xLCBkaW0yLCAuLi5dIC0+IFtkaW0xLCBkaW0yLCAuLi4sIGJhdGNoU2l6ZV1cbiAgICAgICAgICBsZXQgdHJhbnNwb3NlZCA9IGZhbHNlO1xuICAgICAgICAgIGZvciAoY29uc3QgeCBvZiBpbnB1dHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHhORGltID0geC5yYW5rO1xuICAgICAgICAgICAgaWYgKHhORGltID09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgeFNoYXBlID0geC5zaGFwZTtcbiAgICAgICAgICAgICAgY29uc3QgYmF0Y2hTaXplID0geFNoYXBlWzBdO1xuICAgICAgICAgICAgICBjb25zdCBuZXdTaGFwZSA9IHhTaGFwZS5zbGljZSgxKS5jb25jYXQoW2JhdGNoU2l6ZV0pO1xuICAgICAgICAgICAgICBsZXQgeFRyYW5zcG9zZWQgPSB0ZmMucmVzaGFwZShcbiAgICAgICAgICAgICAgICAgIHgsIFtiYXRjaFNpemVdLmNvbmNhdChtYXRoVXRpbHMuYXJyYXlQcm9kKHhTaGFwZS5zbGljZSgxKSkpKTtcbiAgICAgICAgICAgICAgeFRyYW5zcG9zZWQgPSB0ZmMudHJhbnNwb3NlKHhUcmFuc3Bvc2VkLCBbMSwgMF0pO1xuICAgICAgICAgICAgICB4VHJhbnNwb3NlZCA9IHRmYy5yZXNoYXBlKHhUcmFuc3Bvc2VkLCBuZXdTaGFwZSk7XG4gICAgICAgICAgICAgIHJlc2hhcGVkSW5wdXRzLnB1c2goeFRyYW5zcG9zZWQpO1xuICAgICAgICAgICAgICB0cmFuc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeE5EaW0gPiAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRpbXMgPSBtYXRoVXRpbHMucmFuZ2UoMSwgeE5EaW0pLmNvbmNhdChbMF0pO1xuICAgICAgICAgICAgICByZXNoYXBlZElucHV0cy5wdXNoKHRmYy50cmFuc3Bvc2UoeCwgZGltcykpO1xuICAgICAgICAgICAgICB0cmFuc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IHRyYW5zcG9zZSBpbnB1dHMgaWYgdGhleSBhcmUgMUQgdmVjdG9ycyBvciBzY2FsYXJzLlxuICAgICAgICAgICAgICByZXNoYXBlZElucHV0cy5wdXNoKHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgeSA9IHRoaXMubWVyZ2VGdW5jdGlvbihyZXNoYXBlZElucHV0cyk7XG4gICAgICAgICAgY29uc3QgeU5EaW0gPSB5LnJhbms7XG4gICAgICAgICAgaWYgKHRyYW5zcG9zZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGlucHV0cyBoYXZlIGJlZW4gdHJhbnNwb3NlZCwgd2UgaGF2ZSB0byB0cmFuc3Bvc2UgdGhlIG91dHB1dFxuICAgICAgICAgICAgLy8gdG9vLlxuICAgICAgICAgICAgaWYgKHlORGltID09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgeVNoYXBlID0geS5zaGFwZTtcbiAgICAgICAgICAgICAgY29uc3QgeU5EaW0gPSB5U2hhcGUubGVuZ3RoO1xuICAgICAgICAgICAgICBjb25zdCBiYXRjaFNpemUgPSB5U2hhcGVbeU5EaW0gLSAxXTtcbiAgICAgICAgICAgICAgY29uc3QgbmV3U2hhcGUgPVxuICAgICAgICAgICAgICAgICAgW2JhdGNoU2l6ZV0uY29uY2F0KHlTaGFwZS5zbGljZSgwLCB5U2hhcGUubGVuZ3RoIC0gMSkpO1xuICAgICAgICAgICAgICB5ID0gdGZjLnJlc2hhcGUoXG4gICAgICAgICAgICAgICAgICB0ZmMudHJhbnNwb3NlKHRmYy5yZXNoYXBlKHksIFstMSwgYmF0Y2hTaXplXSksIFsxLCAwXSksXG4gICAgICAgICAgICAgICAgICBuZXdTaGFwZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHlORGltID4gMSkge1xuICAgICAgICAgICAgICBjb25zdCBkaW1zID0gW3lORGltIC0gMV0uY29uY2F0KG1hdGhVdGlscy5yYW5nZSgwLCB5TkRpbSAtIDEpKTtcbiAgICAgICAgICAgICAgeSA9IHRmYy50cmFuc3Bvc2UoeSwgZGltcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJnZUZ1bmN0aW9uKGlucHV0cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBpbnB1dFNoYXBlIGFzIFNoYXBlW107XG4gICAgbGV0IG91dHB1dFNoYXBlOiBTaGFwZTtcbiAgICBpZiAoaW5wdXRTaGFwZVswXSA9PSBudWxsKSB7XG4gICAgICBvdXRwdXRTaGFwZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dFNoYXBlID0gaW5wdXRTaGFwZVswXS5zbGljZSgxKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbnB1dFNoYXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBzaGFwZSA9IGlucHV0U2hhcGVbaV0gPT0gbnVsbCA/IG51bGwgOiBpbnB1dFNoYXBlW2ldLnNsaWNlKDEpO1xuICAgICAgb3V0cHV0U2hhcGUgPSB0aGlzLmNvbXB1dGVFbGVtZW50d2lzZU9wT3V0cHV0U2hhcGUob3V0cHV0U2hhcGUsIHNoYXBlKTtcbiAgICB9XG5cbiAgICBsZXQgYmF0Y2hTaXplczogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHNoYXBlIG9mIGlucHV0U2hhcGUpIHtcbiAgICAgIGlmIChzaGFwZSAhPSBudWxsICYmIHNoYXBlWzBdICE9PSBudWxsKSB7XG4gICAgICAgIGJhdGNoU2l6ZXMucHVzaChzaGFwZVswXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGJhdGNoU2l6ZXMgPSBnZW5lcmljX3V0aWxzLnVuaXF1ZShiYXRjaFNpemVzKTtcbiAgICBpZiAoYmF0Y2hTaXplcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIG91dHB1dFNoYXBlID0gYmF0Y2hTaXplcy5jb25jYXQob3V0cHV0U2hhcGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRTaGFwZSA9IFtudWxsXS5jb25jYXQob3V0cHV0U2hhcGUpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0U2hhcGU7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlTWFzayhpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwgbWFzaz86IFRlbnNvcnxUZW5zb3JbXSk6XG4gICAgICBUZW5zb3Ige1xuICAgIHJldHVybiB0ZmMudGlkeSgoKSA9PiB7XG4gICAgICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1hc2spKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKCdgbWFza2Agc2hvdWxkIGJlIGFuIEFycmF5Jyk7XG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcignYGlucHV0c2Agc2hvdWxkIGJlIGFuIEFycmF5Jyk7XG4gICAgICB9XG4gICAgICBpZiAobWFzay5sZW5ndGggIT09IGlucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgVGhlIEFycmF5ICdpbnB1dHMnIGFuZCAnbWFzaycgYXJlIGV4cGVjdGVkIHRvIGhhdmUgdGhlIHNhbWUgYCArXG4gICAgICAgICAgICBgbGVuZ3RoLCBidXQgaGF2ZSBkaWZmZXJlbnQgbGVuZ3RocyBgICtcbiAgICAgICAgICAgIGAoJHtpbnB1dHMubGVuZ3RofSB2cyAke21hc2subGVuZ3RofSlgKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXNrLmV2ZXJ5KG0gPT4gbSA9PSBudWxsKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIG1hc2sgPSBtYXNrLm1hcChtID0+IG0gPT0gbnVsbCA/IG0gOiB0ZmMuZXhwYW5kRGltcyhtLCAwKSk7XG4gICAgICBsZXQgb3V0cHV0ID0gbWFza1swXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWFzay5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgb3V0cHV0ID0gdGZjLmxvZ2ljYWxBbmQob3V0cHV0LCBtYXNrW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZCBleHRlbmRzIE1lcmdlIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnQWRkJztcbiAgY29uc3RydWN0b3IoYXJncz86IExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIG1lcmdlRnVuY3Rpb24oaW5wdXRzOiBUZW5zb3JbXSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IGlucHV0c1swXS5jbG9uZSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbnB1dHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgb3V0cHV0ID0gdGZjLmFkZChvdXRwdXQsIGlucHV0c1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoQWRkKTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGVsZW1lbnQtd2lzZSBzdW0gb2YgaW5wdXRzLCB3aGljaCBhbGwgaGF2ZSB0aGUgc2FtZSBzaGFwZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBpbnZva2VkIGluIHRocmVlIHdheXMuXG4gKlxuICogMS4gQ29uc3RydWN0IGFuIGluc3RhbmNlIG9mIGBBZGRgIGxheWVyLCBieSB1c2luZyBubyBpbnB1dCBhcmd1bWVudFxuICogICAgb3IgYSBzaW5nbGUgY29uZmlndXJhdGlvbiBhcmd1bWVudC4gVGhlIHJlc3VsdGFudCBgQWRkYCBsYXllciBjYW4gdGhlblxuICogICAgYmUgdXNlZCBvbiBgdGYuU3ltYm9saWNUZW5zb3JgcyBvciBgdGYuVGVuc29yYHMuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBhZGRMYXllciA9IHRmLmxheWVycy5hZGQoKTtcbiAqXG4gKiAvLyBUaGUgbGF5ZXIgY2FuIGJlIGFwcGxpZWQgdG8gaW5wdXRzLlxuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDJdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSBhZGRMYXllci5hcHBseShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDIuIEludm9rZSBkaXJlY3RseSBvbiBhbiBgQXJyYXlgIG9mIGB0Zi5TeW1ib2xpY1RlbnNvcmBzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuU3ltYm9saWNUZW5zb3JgLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDJdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSB0Zi5sYXllcnMuYWRkKFtpbnB1dDEsIGlucHV0Ml0pO1xuICogY29uc29sZS5sb2cob3V0cHV0LnNoYXBlKTtcbiAqIC8vIFlvdSBnZXQgW251bGwsIDIsIDJdLCB3aXRoIHRoZSBmaXJzdCBkaW1lbnNpb24gYXMgdGhlIHVuZGV0ZXJtaW5lZCBiYXRjaFxuICogLy8gZGltZW5zaW9uLlxuICogYGBgXG4gKlxuICogMy4gSW52b2tlIGRpcmVjdGx5IG9uIGB0Zi5UZW5zb3JgcywgaS5lLiwgY29uY3JldGUgdmFsdWVzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuVGVuc29yYCBhcyB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbi4gRm9yXG4gKiBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBpbnB1dDEgPSB0Zi50ZW5zb3IyZChbMSwgMiwgMywgNF0sIFsyLCAyXSk7XG4gKiBjb25zdCBpbnB1dDIgPSB0Zi50ZW5zb3IyZChbMTAsIDIwLCAzMCwgNDBdLCBbMiwgMl0pO1xuICogdGYubGF5ZXJzLmFkZChbaW5wdXQxLCBpbnB1dDJdKS5wcmludCgpO1xuICogLy8gR2l2ZXMgW1sxMSwgMjJdLCBbMzMsIDQ0XV0uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKGNvbmZpZz86IFN5bWJvbGljVGVuc29yW118VGVuc29yW118TGF5ZXJBcmdzKTogTGF5ZXJ8XG4gICAgU3ltYm9saWNUZW5zb3J8VGVuc29yIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkge1xuICAgIGNvbnN0IGxheWVyID0gbmV3IEFkZCh7fSk7XG4gICAgcmV0dXJuIGxheWVyLmFwcGx5KGNvbmZpZykgYXMgU3ltYm9saWNUZW5zb3IgfCBUZW5zb3I7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBBZGQoY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbHkgZXh0ZW5kcyBNZXJnZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ011bHRpcGx5JztcbiAgY29uc3RydWN0b3IoYXJncz86IExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIG1lcmdlRnVuY3Rpb24oaW5wdXRzOiBUZW5zb3JbXSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IGlucHV0c1swXS5jbG9uZSgpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbnB1dHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgb3V0cHV0ID0gdGZjLm11bChvdXRwdXQsIGlucHV0c1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTXVsdGlwbHkpO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgZWxlbWVudC13aXNlIHByb2R1Y3Qgb2YgaW5wdXRzLCB3aGljaCBhbGwgaGF2ZSB0aGUgc2FtZSBzaGFwZS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBpbnZva2VkIGluIHRocmVlIHdheXMuXG4gKlxuICogMS4gQ29uc3RydWN0IGFuIGluc3RhbmNlIG9mIGBNdWx0aXBseWAgbGF5ZXIsIGJ5IHVzaW5nIG5vIGlucHV0IGFyZ3VtZW50XG4gKiAgICBvciBhIHNpbmdsZSBjb25maWd1cmF0aW9uIGFyZ3VtZW50LiBUaGUgcmVzdWx0YW50IGBNdWx0aXBseWAgbGF5ZXIgY2FuXG4gKiAgICB0aGVuIGJlIHVzZWQgb24gYHRmLlN5bWJvbGljVGVuc29yYHMgb3IgYHRmLlRlbnNvcmBzLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbXVsdGlwbHlMYXllciA9IHRmLmxheWVycy5tdWx0aXBseSgpO1xuICpcbiAqIC8vIFRoZSBsYXllciBjYW4gYmUgYXBwbGllZCB0byBpbnB1dHMuXG4gKiBjb25zdCBpbnB1dDEgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyLCAyXX0pO1xuICogY29uc3QgaW5wdXQyID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IG91dHB1dCA9IG11bHRpcGx5TGF5ZXIuYXBwbHkoW2lucHV0MSwgaW5wdXQyXSk7XG4gKiBjb25zb2xlLmxvZyhvdXRwdXQuc2hhcGUpO1xuICogLy8gWW91IGdldCBbbnVsbCwgMiwgMl0sIHdpdGggdGhlIGZpcnN0IGRpbWVuc2lvbiBhcyB0aGUgdW5kZXRlcm1pbmVkIGJhdGNoXG4gKiAvLyBkaW1lbnNpb24uXG4gKiBgYGBcbiAqXG4gKiAyLiBJbnZva2UgZGlyZWN0bHkgb24gYW4gYEFycmF5YCBvZiBgdGYuU3ltYm9saWNUZW5zb3Jgcy4gVGhpcyBjb25zdHJ1Y3RzXG4gKiAgICBhbiBgTGF5ZXJgIG9iamVjdCBpbnRlcm5hbGx5IGFuZCBjYWxscyBpdHMgYGFwcGx5YCBtZXRob2Qgb24gdGhlIGlucHV0cyxcbiAqICAgIGdlbmVyYXRpbmcgYSBuZXcgYHRmLlN5bWJvbGljVGVuc29yYC4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIGNvbnN0IGlucHV0MSA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDJdfSk7XG4gKiBjb25zdCBpbnB1dDIgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyLCAyXX0pO1xuICogY29uc3Qgb3V0cHV0ID0gdGYubGF5ZXJzLm11bHRpcGx5KFtpbnB1dDEsIGlucHV0Ml0pO1xuICogY29uc29sZS5sb2cob3V0cHV0LnNoYXBlKTtcbiAqIC8vIFlvdSBnZXQgW251bGwsIDIsIDJdLCB3aXRoIHRoZSBmaXJzdCBkaW1lbnNpb24gYXMgdGhlIHVuZGV0ZXJtaW5lZCBiYXRjaFxuICogLy8gZGltZW5zaW9uLlxuICogYGBgXG4gKlxuICogMy4gSW52b2tlIGRpcmVjdGx5IG9uIGB0Zi5UZW5zb3JgcywgaS5lLiwgY29uY3JldGUgdmFsdWVzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuVGVuc29yYCBhcyB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbi4gRm9yXG4gKiBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBpbnB1dDEgPSB0Zi50ZW5zb3IyZChbMSwgMiwgMywgNF0sIFsyLCAyXSk7XG4gKiBjb25zdCBpbnB1dDIgPSB0Zi50ZW5zb3IyZChbMTAsIDIwLCAzMCwgNDBdLCBbMiwgMl0pO1xuICogdGYubGF5ZXJzLm11bHRpcGx5KFtpbnB1dDEsIGlucHV0Ml0pLnByaW50KCk7XG4gKiAvLyBHaXZlcyBbWzEwLCA0MF0sIFs5MCwgMTYwXV0uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkoY29uZmlnPzogU3ltYm9saWNUZW5zb3JbXXxUZW5zb3JbXXxMYXllckFyZ3MpOiBMYXllcnxcbiAgICBTeW1ib2xpY1RlbnNvcnxUZW5zb3Ige1xuICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcpKSB7XG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgTXVsdGlwbHkoe30pO1xuICAgIHJldHVybiBsYXllci5hcHBseShjb25maWcpIGFzIFN5bWJvbGljVGVuc29yIHwgVGVuc29yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgTXVsdGlwbHkoY29uZmlnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXZlcmFnZSBleHRlbmRzIE1lcmdlIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnQXZlcmFnZSc7XG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBtZXJnZUZ1bmN0aW9uKGlucHV0czogVGVuc29yW10pOiBUZW5zb3Ige1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSBpbnB1dHNbMF0uY2xvbmUoKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIG91dHB1dCA9IHRmYy5hZGQob3V0cHV0LCBpbnB1dHNbaV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRmYy5tdWwoMSAvIGlucHV0cy5sZW5ndGgsIG91dHB1dCk7XG4gICAgfSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhBdmVyYWdlKTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGVsZW1lbnQtd2lzZSBhcml0aG1ldGljIG1lYW4gb2YgaW5wdXRzLCB3aGljaCBhbGwgaGF2ZSB0aGUgc2FtZVxuICogc2hhcGUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCBpbiB0aHJlZSB3YXlzLlxuICpcbiAqIDEuIENvbnN0cnVjdCBhbiBpbnN0YW5jZSBvZiBgQXZlcmFnZWAgbGF5ZXIsIGJ5IHVzaW5nIG5vIGlucHV0IGFyZ3VtZW50XG4gKiAgICBvciBhIHNpbmdsZSBjb25maWd1cmF0aW9uIGFyZ3VtZW50LiBUaGUgcmVzdWx0YW50IGBBdmVyYWdlYCBsYXllciBjYW4gdGhlblxuICogICAgYmUgdXNlZCBvbiBgdGYuU3ltYm9saWNUZW5zb3JgcyBvciBgdGYuVGVuc29yYHMuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBhdmVyYWdlTGF5ZXIgPSB0Zi5sYXllcnMuYXZlcmFnZSgpO1xuICpcbiAqIC8vIFRoZSBsYXllciBjYW4gYmUgYXBwbGllZCB0byBpbnB1dHMuXG4gKiBjb25zdCBpbnB1dDEgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyLCAyXX0pO1xuICogY29uc3QgaW5wdXQyID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IG91dHB1dCA9IGF2ZXJhZ2VMYXllci5hcHBseShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDIuIEludm9rZSBkaXJlY3RseSBvbiBhbiBgQXJyYXlgIG9mIGB0Zi5TeW1ib2xpY1RlbnNvcmBzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuU3ltYm9saWNUZW5zb3JgLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDJdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSB0Zi5sYXllcnMuYXZlcmFnZShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDMuIEludm9rZSBkaXJlY3RseSBvbiBgdGYuVGVuc29yYHMsIGkuZS4sIGNvbmNyZXRlIHZhbHVlcy4gVGhpcyBjb25zdHJ1Y3RzXG4gKiAgICBhbiBgTGF5ZXJgIG9iamVjdCBpbnRlcm5hbGx5IGFuZCBjYWxscyBpdHMgYGFwcGx5YCBtZXRob2Qgb24gdGhlIGlucHV0cyxcbiAqICAgIGdlbmVyYXRpbmcgYSBuZXcgYHRmLlRlbnNvcmAgYXMgdGhlIHJlc3VsdCBvZiB0aGUgY29tcHV0YXRpb24uIEZvclxuICogZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYudGVuc29yMmQoWzEsIDIsIDMsIDRdLCBbMiwgMl0pO1xuICogY29uc3QgaW5wdXQyID0gdGYudGVuc29yMmQoWzEwLCAyMCwgMzAsIDQwXSwgWzIsIDJdKTtcbiAqIHRmLmxheWVycy5hdmVyYWdlKFtpbnB1dDEsIGlucHV0Ml0pLnByaW50KCk7XG4gKiAvLyBHaXZlcyBbWzUuNSwgMTFdLCBbMTYuNSwgMjJdXS5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdmVyYWdlKGNvbmZpZz86IFN5bWJvbGljVGVuc29yW118VGVuc29yW118TGF5ZXJBcmdzKTogTGF5ZXJ8XG4gICAgU3ltYm9saWNUZW5zb3J8VGVuc29yIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkge1xuICAgIGNvbnN0IGxheWVyID0gbmV3IEF2ZXJhZ2Uoe30pO1xuICAgIHJldHVybiBsYXllci5hcHBseShjb25maWcpIGFzIFN5bWJvbGljVGVuc29yIHwgVGVuc29yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQXZlcmFnZShjb25maWcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXhpbXVtIGV4dGVuZHMgTWVyZ2Uge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdNYXhpbXVtJztcbiAgY29uc3RydWN0b3IoYXJncz86IExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIG1lcmdlRnVuY3Rpb24oaW5wdXRzOiBUZW5zb3JbXSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IGlucHV0c1swXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIG91dHB1dCA9IHRmYy5tYXhpbXVtKG91dHB1dCwgaW5wdXRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhNYXhpbXVtKTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGVsZW1lbnQtd2lzZSBtYXhpbXVtIG9mIGlucHV0cywgd2hpY2ggYWxsIGhhdmUgdGhlIHNhbWUgc2hhcGUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCBpbiB0aHJlZSB3YXlzLlxuICpcbiAqIDEuIENvbnN0cnVjdCBhbiBpbnN0YW5jZSBvZiBgTWF4aW11bWAgbGF5ZXIsIGJ5IHVzaW5nIG5vIGlucHV0IGFyZ3VtZW50XG4gKiAgICBvciBhIHNpbmdsZSBjb25maWd1cmF0aW9uIGFyZ3VtZW50LiBUaGUgcmVzdWx0YW50IGBNYXhpbXVtYCBsYXllciBjYW4gdGhlblxuICogICAgYmUgdXNlZCBvbiBgdGYuU3ltYm9saWNUZW5zb3JgcyBvciBgdGYuVGVuc29yYHMuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtYXhpbXVtTGF5ZXIgPSB0Zi5sYXllcnMubWF4aW11bSgpO1xuICpcbiAqIC8vIFRoZSBsYXllciBjYW4gYmUgYXBwbGllZCB0byBpbnB1dHMuXG4gKiBjb25zdCBpbnB1dDEgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyLCAyXX0pO1xuICogY29uc3QgaW5wdXQyID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IG91dHB1dCA9IG1heGltdW1MYXllci5hcHBseShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDIuIEludm9rZSBkaXJlY3RseSBvbiBhbiBgQXJyYXlgIG9mIGB0Zi5TeW1ib2xpY1RlbnNvcmBzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuU3ltYm9saWNUZW5zb3JgLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDJdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSB0Zi5sYXllcnMubWF4aW11bShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDMuIEludm9rZSBkaXJlY3RseSBvbiBgdGYuVGVuc29yYHMsIGkuZS4sIGNvbmNyZXRlIHZhbHVlcy4gVGhpcyBjb25zdHJ1Y3RzXG4gKiAgICBhbiBgTGF5ZXJgIG9iamVjdCBpbnRlcm5hbGx5IGFuZCBjYWxscyBpdHMgYGFwcGx5YCBtZXRob2Qgb24gdGhlIGlucHV0cyxcbiAqICAgIGdlbmVyYXRpbmcgYSBuZXcgYHRmLlRlbnNvcmAgYXMgdGhlIHJlc3VsdCBvZiB0aGUgY29tcHV0YXRpb24uIEZvclxuICogZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYudGVuc29yMmQoWzEsIDIwLCAzLCA0MF0sIFsyLCAyXSk7XG4gKiBjb25zdCBpbnB1dDIgPSB0Zi50ZW5zb3IyZChbMTAsIDIsIDMwLCA0XSwgWzIsIDJdKTtcbiAqIHRmLmxheWVycy5tYXhpbXVtKFtpbnB1dDEsIGlucHV0Ml0pLnByaW50KCk7XG4gKiAvLyBHaXZlcyBbWzEwLCAyMF0sIFszMCwgNDBdXS5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhpbXVtKGNvbmZpZz86IFN5bWJvbGljVGVuc29yW118VGVuc29yW118TGF5ZXJBcmdzKTogTGF5ZXJ8XG4gICAgU3ltYm9saWNUZW5zb3J8VGVuc29yIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnKSkge1xuICAgIGNvbnN0IGxheWVyID0gbmV3IE1heGltdW0oe30pO1xuICAgIHJldHVybiBsYXllci5hcHBseShjb25maWcpIGFzIFN5bWJvbGljVGVuc29yIHwgVGVuc29yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgTWF4aW11bShjb25maWcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNaW5pbXVtIGV4dGVuZHMgTWVyZ2Uge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdNaW5pbXVtJztcbiAgY29uc3RydWN0b3IoYXJncz86IExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIG1lcmdlRnVuY3Rpb24oaW5wdXRzOiBUZW5zb3JbXSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgbGV0IG91dHB1dCA9IGlucHV0c1swXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIG91dHB1dCA9IHRmYy5taW5pbXVtKG91dHB1dCwgaW5wdXRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhNaW5pbXVtKTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGVsZW1lbnQtd2lzZSBtaW5pbXVtIG9mIGlucHV0cywgd2hpY2ggYWxsIGhhdmUgdGhlIHNhbWUgc2hhcGUuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgaW52b2tlZCBpbiB0aHJlZSB3YXlzLlxuICpcbiAqIDEuIENvbnN0cnVjdCBhbiBpbnN0YW5jZSBvZiBgTWluaW11bWAgbGF5ZXIsIGJ5IHVzaW5nIG5vIGlucHV0IGFyZ3VtZW50XG4gKiAgICBvciBhIHNpbmdsZSBjb25maWd1cmF0aW9uIGFyZ3VtZW50LiBUaGUgcmVzdWx0YW50IGBNaW5pbXVtYCBsYXllciBjYW4gdGhlblxuICogICAgYmUgdXNlZCBvbiBgdGYuU3ltYm9saWNUZW5zb3JgcyBvciBgdGYuVGVuc29yYHMuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtaW5pbXVtTGF5ZXIgPSB0Zi5sYXllcnMubWluaW11bSgpO1xuICpcbiAqIC8vIFRoZSBsYXllciBjYW4gYmUgYXBwbGllZCB0byBpbnB1dHMuXG4gKiBjb25zdCBpbnB1dDEgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyLCAyXX0pO1xuICogY29uc3QgaW5wdXQyID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IG91dHB1dCA9IG1pbmltdW1MYXllci5hcHBseShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDIuIEludm9rZSBkaXJlY3RseSBvbiBhbiBgQXJyYXlgIG9mIGB0Zi5TeW1ib2xpY1RlbnNvcmBzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuU3ltYm9saWNUZW5zb3JgLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgMl19KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDJdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSB0Zi5sYXllcnMubWluaW11bShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCAyXSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbi5cbiAqIGBgYFxuICpcbiAqIDMuIEludm9rZSBkaXJlY3RseSBvbiBgdGYuVGVuc29yYHMsIGkuZS4sIGNvbmNyZXRlIHZhbHVlcy4gVGhpcyBjb25zdHJ1Y3RzXG4gKiAgICBhbiBgTGF5ZXJgIG9iamVjdCBpbnRlcm5hbGx5IGFuZCBjYWxscyBpdHMgYGFwcGx5YCBtZXRob2Qgb24gdGhlIGlucHV0cyxcbiAqICAgIGdlbmVyYXRpbmcgYSBuZXcgYHRmLlRlbnNvcmAgYXMgdGhlIHJlc3VsdCBvZiB0aGUgY29tcHV0YXRpb24uIEZvclxuICogZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYudGVuc29yMmQoWzEsIDIwLCAzLCA0MF0sIFsyLCAyXSk7XG4gKiBjb25zdCBpbnB1dDIgPSB0Zi50ZW5zb3IyZChbMTAsIDIsIDMwLCA0XSwgWzIsIDJdKTtcbiAqIHRmLmxheWVycy5taW5pbXVtKFtpbnB1dDEsIGlucHV0Ml0pLnByaW50KCk7XG4gKiAvLyBHaXZlcyBbWzEsIDJdLCBbMywgNF1dLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbmltdW0oY29uZmlnPzogU3ltYm9saWNUZW5zb3JbXXxUZW5zb3JbXXxMYXllckFyZ3MpOiBMYXllcnxcbiAgICBTeW1ib2xpY1RlbnNvcnxUZW5zb3Ige1xuICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcpKSB7XG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgTWluaW11bSh7fSk7XG4gICAgcmV0dXJuIGxheWVyLmFwcGx5KGNvbmZpZykgYXMgU3ltYm9saWNUZW5zb3IgfCBUZW5zb3I7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBNaW5pbXVtKGNvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIENvbmNhdGVuYXRlTGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqXG4gICAqIEF4aXMgYWxvbmcgd2hpY2ggdG8gY29uY2F0ZW5hdGUuXG4gICAqL1xuICBheGlzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uY2F0ZW5hdGUgZXh0ZW5kcyBNZXJnZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0NvbmNhdGVuYXRlJztcbiAgcmVhZG9ubHkgREVGQVVMVF9BWElTID0gLTE7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXhpczogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBDb25jYXRlbmF0ZUxheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIGlmIChhcmdzID09IG51bGwpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5heGlzID0gYXJncy5heGlzID09IG51bGwgPyB0aGlzLkRFRkFVTFRfQVhJUyA6IGFyZ3MuYXhpcztcbiAgICB0aGlzLnN1cHBvcnRzTWFza2luZyA9IHRydWU7XG4gICAgdGhpcy5yZXNoYXBlUmVxdWlyZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGJ1aWxkKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiB2b2lkIHtcbiAgICAvLyBVc2VkIHB1cmVseSBmb3Igc2hhcGUgdmFsaWRhdGlvbi5dXG4gICAgaWYgKCEoQXJyYXkuaXNBcnJheShpbnB1dFNoYXBlKSAmJiBBcnJheS5pc0FycmF5KGlucHV0U2hhcGVbMF0pKSB8fFxuICAgICAgICBpbnB1dFNoYXBlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgJ0EgYENvbmNhdGVuYXRlYCBsYXllciBzaG91bGQgYmUgY2FsbGVkIG9uIGEgbGlzdCBvZiBhdCBsZWFzdCAyICcgK1xuICAgICAgICAgICdpbnB1dHMnKTtcbiAgICB9XG4gICAgaW5wdXRTaGFwZSA9IGlucHV0U2hhcGUgYXMgU2hhcGVbXTtcblxuICAgIGxldCBhbGxOb25lU2hhcGUgPSB0cnVlO1xuICAgIGZvciAoY29uc3Qgc2hhcGUgb2YgaW5wdXRTaGFwZSkge1xuICAgICAgaWYgKHNoYXBlICE9IG51bGwpIHtcbiAgICAgICAgYWxsTm9uZVNoYXBlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWxsTm9uZVNoYXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hhcGVTZXQ6IFNoYXBlW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0U2hhcGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHNoYXBlV2l0aG91dENvbmNhdEF4aXMgPSBpbnB1dFNoYXBlW2ldLnNsaWNlKCk7XG4gICAgICBzaGFwZVdpdGhvdXRDb25jYXRBeGlzLnNwbGljZSh0aGlzLmF4aXMsIDEpO1xuICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgICAgZm9yIChjb25zdCBzaGFwZSBvZiBzaGFwZVNldCkge1xuICAgICAgICBpZiAodXRpbC5hcnJheXNFcXVhbChzaGFwZSwgc2hhcGVXaXRob3V0Q29uY2F0QXhpcykpIHtcbiAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICBzaGFwZVNldC5wdXNoKHNoYXBlV2l0aG91dENvbmNhdEF4aXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hhcGVTZXQubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgJ0EgYENvbmNhdGVuYXRlYCBsYXllciByZXF1aXJlcyBpbnB1dHMgd2l0aCBtYXRjaGluZyBzaGFwZXMgJyArXG4gICAgICAgICAgJ2V4Y2VwdCBmb3IgdGhlIGNvbmNhdCBheGlzLiBHb3QgaW5wdXQgc2hhcGVzOiAnICtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShpbnB1dFNoYXBlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIG1lcmdlRnVuY3Rpb24oaW5wdXRzOiBUZW5zb3JbXSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgcmV0dXJuIEsuY29uY2F0ZW5hdGUoaW5wdXRzLCB0aGlzLmF4aXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KGlucHV0U2hhcGUpICYmIEFycmF5LmlzQXJyYXkoaW5wdXRTaGFwZVswXSkpKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnQSBgQ29uY2F0ZW5hdGVgIGxheWVyIHNob3VsZCBiZSBjYWxsZWQgb24gYSBsaXN0IG9mIGlucHV0cy4nKTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRTaGFwZXMgPSBpbnB1dFNoYXBlIGFzIFNoYXBlW107XG4gICAgY29uc3Qgb3V0cHV0U2hhcGUgPSBpbnB1dFNoYXBlc1swXS5zbGljZSgpO1xuICAgIGNvbnN0IGF4aXMgPSB0aGlzLmF4aXMgPCAwID8gb3V0cHV0U2hhcGUubGVuZ3RoICsgdGhpcy5heGlzIDogdGhpcy5heGlzO1xuICAgIC8vIFBvcnRpbmcgTm90ZTogdGhlIGxpbmUgYWJvdmUgaXMgYmVjYXVzZSBUeXBlU2NyaXB0IGRvZXNuJ3Qgc3VwcG9ydFxuICAgIC8vICAgbmVnYXRpdmUgaW5kaWNlcy5cbiAgICBmb3IgKGNvbnN0IHNoYXBlIG9mIGlucHV0U2hhcGVzLnNsaWNlKDEpKSB7XG4gICAgICBpZiAob3V0cHV0U2hhcGVbYXhpc10gPT0gbnVsbCB8fCBzaGFwZVtheGlzXSA9PSBudWxsKSB7XG4gICAgICAgIG91dHB1dFNoYXBlW2F4aXNdID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBvdXRwdXRTaGFwZVtheGlzXSArPSBzaGFwZVtheGlzXTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dFNoYXBlO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU1hc2soaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIG1hc2s/OiBUZW5zb3J8VGVuc29yW10pOlxuICAgICAgVGVuc29yIHtcbiAgICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hc2spKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcignYG1hc2tgIHNob3VsZCBiZSBhbiBhcnJheSBmb3IgQ29uY2F0ZW5hdGUnKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0cykpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKCdgaW5wdXRzYCBzaG91bGQgYmUgYW4gYXJyYXkgZm9yIENvbmNhdGVuYXRlJyk7XG4gICAgfVxuICAgIGlmIChtYXNrLmxlbmd0aCAhPT0gaW5wdXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYE1pc21hdGNoIGluIHRoZSBsZW5ndGggb2YgbWFzayAoJHttYXNrLmxlbmd0aH0pIGAgK1xuICAgICAgICAgIGBhbmQgdGhlIGxlZ250aCBvZiBpbnB1dHMgKCR7aW5wdXRzLmxlbmd0aH0pYCk7XG4gICAgfVxuICAgIHJldHVybiB0ZmMudGlkeSgoKSA9PiB7XG4gICAgICBsZXQgYWxsTnVsbE1hc2tzID0gdHJ1ZTtcbiAgICAgIG1hc2suZm9yRWFjaChtID0+IHtcbiAgICAgICAgaWYgKG0gIT0gbnVsbCkge1xuICAgICAgICAgIGFsbE51bGxNYXNrcyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoYWxsTnVsbE1hc2tzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3V0cHV0TWFza3M6IFRlbnNvcltdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAobWFza1tpXSA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gSW5wdXQgaXMgdW5tYXNrZWQuIEFwcGVuZCBhbGwgMSdzIHRvIG1hc2tzLlxuICAgICAgICAgIG91dHB1dE1hc2tzLnB1c2godGZjLmNhc3QodGZjLm9uZXNMaWtlKGlucHV0c1tpXSksICdib29sJykpO1xuICAgICAgICB9IGVsc2UgaWYgKG1hc2tbaV0ucmFuayA8IGlucHV0c1tpXS5yYW5rKSB7XG4gICAgICAgICAgLy8gTWFzayBpcyBzbWFsbGVyIHRoYW4gdGhlIGlucHV0LCBleHBhbmQgaXQuXG4gICAgICAgICAgb3V0cHV0TWFza3MucHVzaCh0ZmMuZXhwYW5kRGltcyhtYXNrW2ldLCAtMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dE1hc2tzLnB1c2gobWFza1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmNhdGVuYXRlZE1hc2tzID0gdGZjLmNvbmNhdChvdXRwdXRNYXNrcywgdGhpcy5heGlzKTtcbiAgICAgIHJldHVybiB0ZmMuYWxsKGNvbmNhdGVuYXRlZE1hc2tzLCAtMSwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICAnYXhpcyc6IHRoaXMuYXhpcyxcbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgYmFzZUNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKENvbmNhdGVuYXRlKTtcblxuLyoqXG4gKiBDb25jYXRlbmF0ZSBhbiBgQXJyYXlgIG9mIGlucHV0cy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBpbnZva2VkIGluIHRocmVlIHdheXMuXG4gKlxuICogMS4gQ29uc3RydWN0IGFuIGluc3RhbmNlIG9mIGBDb25jYXRlbmF0ZWAgbGF5ZXIsIGJ5IHVzaW5nIG5vIGlucHV0IGFyZ3VtZW50XG4gKiAgICBvciBhIHNpbmdsZSBjb25maWd1cmF0aW9uIGFyZ3VtZW50LiBUaGUgcmVzdWx0YW50IGBDb25jYXRlbmF0ZWAgbGF5ZXIgY2FuXG4gKiAgICB0aGVuIGJlIHVzZWQgb24gYHRmLlN5bWJvbGljVGVuc29yYHMgb3IgYHRmLlRlbnNvcmBzLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgY29uY2F0TGF5ZXIgPSB0Zi5sYXllcnMuY29uY2F0ZW5hdGUoKTtcbiAqXG4gKiAvLyBUaGUgbGF5ZXIgY2FuIGJlIGFwcGxpZWQgdG8gaW5wdXRzLlxuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgM119KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDRdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSBjb25jYXRMYXllci5hcHBseShbaW5wdXQxLCBpbnB1dDJdKTtcbiAqIGNvbnNvbGUubG9nKG91dHB1dC5zaGFwZSk7XG4gKiAvLyBZb3UgZ2V0IFtudWxsLCAyLCA3XSwgd2l0aCB0aGUgZmlyc3QgZGltZW5zaW9uIGFzIHRoZSB1bmRldGVybWluZWQgYmF0Y2hcbiAqIC8vIGRpbWVuc2lvbiBhbmQgdGhlIGxhc3QgZGltZW5zaW9uIGFzIHRoZSByZXN1bHQgb2YgY29uY2F0ZW5hdGluZyB0aGVcbiAqIC8vIGxhc3QgZGltZW5zaW9ucyBvZiB0aGUgdHdvIGlucHV0cy5cbiAqIGBgYFxuICpcbiAqIDIuIEludm9rZSBkaXJlY3RseSBvbiBhbiBgQXJyYXlgIG9mIGB0Zi5TeW1ib2xpY1RlbnNvcmBzLiBUaGlzIGNvbnN0cnVjdHNcbiAqICAgIGFuIGBMYXllcmAgb2JqZWN0IGludGVybmFsbHkgYW5kIGNhbGxzIGl0cyBgYXBwbHlgIG1ldGhvZCBvbiB0aGUgaW5wdXRzLFxuICogICAgZ2VuZXJhdGluZyBhIG5ldyBgdGYuU3ltYm9saWNUZW5zb3JgLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgaW5wdXQxID0gdGYuaW5wdXQoe3NoYXBlOiBbMiwgM119KTtcbiAqIGNvbnN0IGlucHV0MiA9IHRmLmlucHV0KHtzaGFwZTogWzIsIDRdfSk7XG4gKiBjb25zdCBvdXRwdXQgPSB0Zi5sYXllcnMuY29uY2F0ZW5hdGUoW2lucHV0MSwgaW5wdXQyXSk7XG4gKiBjb25zb2xlLmxvZyhvdXRwdXQuc2hhcGUpO1xuICogLy8gWW91IGdldCBbbnVsbCwgMiwgMl0sIHdpdGggdGhlIGZpcnN0IGRpbWVuc2lvbiBhcyB0aGUgdW5kZXRlcm1pbmVkIGJhdGNoXG4gKiAvLyBkaW1lbnNpb24gYW5kIHRoZSBsYXN0IGRpbWVuc2lvbiBhcyB0aGUgcmVzdWx0IG9mIGNvbmNhdGVuYXRpbmcgdGhlXG4gKiAvLyBsYXN0IGRpbWVuc2lvbnMgb2YgdGhlIHR3byBpbnB1dHMuXG4gKiBgYGBcbiAqXG4gKiAzLiBJbnZva2UgZGlyZWN0bHkgb24gYHRmLlRlbnNvcmBzLCBpLmUuLCBjb25jcmV0ZSB2YWx1ZXMuIFRoaXMgY29uc3RydWN0c1xuICogICAgYW4gYExheWVyYCBvYmplY3QgaW50ZXJuYWxseSBhbmQgY2FsbHMgaXRzIGBhcHBseWAgbWV0aG9kIG9uIHRoZSBpbnB1dHMsXG4gKiAgICBnZW5lcmF0aW5nIGEgbmV3IGB0Zi5UZW5zb3JgIGFzIHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uLiBGb3JcbiAqIGV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIGNvbnN0IGlucHV0MSA9IHRmLnRlbnNvcjJkKFtbMSwgMl0sIFszLCA0XV0sIFsyLCAyXSk7XG4gKiBjb25zdCBpbnB1dDIgPSB0Zi50ZW5zb3IyZChbWzEwLCAyMF0sIFszMCwgNDBdXSwgWzIsIDJdKTtcbiAqIHRmLmxheWVycy5jb25jYXRlbmF0ZShbaW5wdXQxLCBpbnB1dDJdKS5wcmludCgpO1xuICogLy8gR2l2ZXMgW1sxLCAyLCAxMCwgMjBdLCBbMywgNCwgMzAsIDQwXV0uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGUoY29uZmlnPzogU3ltYm9saWNUZW5zb3JbXXxUZW5zb3JbXXxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25jYXRlbmF0ZUxheWVyQXJncyk6IExheWVyfFN5bWJvbGljVGVuc29yfFRlbnNvciB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZykpIHtcbiAgICBjb25zdCBsYXllciA9IG5ldyBDb25jYXRlbmF0ZSh7fSk7XG4gICAgcmV0dXJuIGxheWVyLmFwcGx5KGNvbmZpZykgYXMgU3ltYm9saWNUZW5zb3IgfCBUZW5zb3I7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBDb25jYXRlbmF0ZShjb25maWcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBEb3RMYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKipcbiAgICogQXhpcyBvciBheGVzIGFsb25nIHdoaWNoIHRoZSBkb3QgcHJvZHVjdCB3aWxsIGJlIHRha2VuLlxuICAgKlxuICAgKiBJbnRlZ2VyIG9yIGFuIEFycmF5IG9mIGludGVnZXJzLlxuICAgKi9cbiAgYXhlczogbnVtYmVyfFtudW1iZXIsIG51bWJlcl07XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gTDItbm9ybWFsaXplIHNhbXBsZXMgYWxvbmcgdGhlIGRvdCBwcm9kdWN0IGF4aXNcbiAgICogYmVmb3JlIHRha2luZyB0aGUgZG90IHByb2R1Y3QuXG4gICAqXG4gICAqIElmIHNldCB0byBgdHJ1ZWAsIHRoZSBvdXRwdXQgb2YgdGhlIGRvdCBwcm9kdWN0IGlzIHRoZSBjb3NpbmVcbiAgICogcHJveGltaXR5IGJldHdlZW4gdGhlIHR3byBzYW1wbGVzLlxuICAgKi9cbiAgbm9ybWFsaXplPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBJbnRlcnByZXRhYmxlIHBvdGVudGlhbGx5IG5lZ2F0aXZlIGF4aXMgaW5kZXguXG4gKlxuICogRm9yIGV4YW1wbGUsIGdpdmVuIGF4aXMgPSAtMSwgYW5kIGRpbSA9IDMsIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gMi5cbiAqXG4gKiBAcGFyYW0gYXhpcyBUaGUgYXhpcyBpbmRleCwgbWF5IGJlIGEgcG9zaXRpdmUsIHplcm8gb3IgbmVnYXRpdmUgaW50ZWdlci5cbiAqIEBwYXJhbSBkaW0gVG90YWwgbnVtYmVyIG9mIGRpbWVuc2lvbnMsIGEgcG9zaXRpdmUgaW50ZWdlci5cbiAqIEByZXR1cm5zIEEgbm9uLW5lZ2F0aXZlIGF4aXMgaW5kZXggZXF1aXZhbGVudCB0byB0aGUgaW5wdXQgYGF4aXNgLlxuICovXG5mdW5jdGlvbiBpbnRlcnByZXRBeGlzKGF4aXM6IG51bWJlciwgZGltOiBudW1iZXIpOiBudW1iZXIge1xuICB3aGlsZSAoYXhpcyA8IDApIHtcbiAgICBheGlzICs9IGRpbTtcbiAgfVxuICByZXR1cm4gYXhpcztcbn1cblxuZnVuY3Rpb24gYmF0Y2hEb3QoeDogVGVuc29yLCB5OiBUZW5zb3IsIGF4ZXM6IG51bWJlcnxbbnVtYmVyLCBudW1iZXJdKTogVGVuc29yIHtcbiAgaWYgKHguc2hhcGUubGVuZ3RoID4gMyB8fCB5LnNoYXBlLmxlbmd0aCA+IDMpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgJ2JhdGNoRG90IGlzIG5vdCBpbXBsZW1lbnRlZCBmb3IgdGVuc29ycyBvZiA0RCBvciBoaWdoZXIgcmFuayB5ZXQnKTtcbiAgfVxuICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICB4LnNoYXBlLmxlbmd0aCA+PSAyLFxuICAgICAgKCkgPT4gYGJhdGNoRG90IHJlcXVpcmVzIHRoZSByYW5rIG9mIHggdG8gYmUgPj0gMiwgYCArXG4gICAgICAgICAgYGJ1dCBnb3QgJHt4LnNoYXBlLmxlbmd0aH1gKTtcbiAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgeC5zaGFwZS5sZW5ndGggPj0gMixcbiAgICAgICgpID0+IGBiYXRjaERvdCByZXF1aXJlcyB0aGUgcmFuayBvZiB5IHRvIGJlID49IDIsIGAgK1xuICAgICAgICAgIGBidXQgZ290ICR7eS5zaGFwZS5sZW5ndGh9YCk7XG5cbiAgaWYgKHR5cGVvZiBheGVzID09PSAnbnVtYmVyJykge1xuICAgIGF4ZXMgPSBbYXhlcywgYXhlc107XG4gIH1cblxuICBpZiAoeC5kdHlwZSA9PT0gJ2NvbXBsZXg2NCcgfHwgeS5kdHlwZSA9PT0gJ2NvbXBsZXg2NCcpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgJ2JhdGNoRG90IGlzIG5vdCBpbXBsZW1lbnRlZCBmb3IgY29tcGxleDY0LXR5cGUgVGVuc29ycyB5ZXQuJyk7XG4gIH1cblxuICBjb25zdCB4TkRpbSA9IHguc2hhcGUubGVuZ3RoO1xuICBjb25zdCB5TkRpbSA9IHkuc2hhcGUubGVuZ3RoO1xuICBpZiAoYXhlcyA9PSBudWxsKSB7XG4gICAgLy8gQmVoYXZlIGxpa2UgYmF0Y2hNYXRtdWwgYnkgZGVmYXVsdC5cbiAgICBheGVzID0gW3hORGltIC0gMSwgeU5EaW0gLSAyXTtcbiAgfVxuICBjb25zdCBheGVzQXJyYXkgPSBheGVzIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgcmV0dXJuIHRmYy50aWR5KCgpID0+IHtcbiAgICBsZXQgZGlmZjogbnVtYmVyO1xuICAgIGlmICh4TkRpbSA+IHlORGltKSB7XG4gICAgICBkaWZmID0geE5EaW0gLSB5TkRpbTtcbiAgICAgIGNvbnN0IGRpZmZTaGFwZTogU2hhcGUgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgKytpKSB7XG4gICAgICAgIGRpZmZTaGFwZS5wdXNoKDEpO1xuICAgICAgfVxuICAgICAgeSA9IHRmYy5yZXNoYXBlKHksIHkuc2hhcGUuY29uY2F0KGRpZmZTaGFwZSkpO1xuICAgIH0gZWxzZSBpZiAoeU5EaW0gPiB4TkRpbSkge1xuICAgICAgZGlmZiA9IHlORGltIC0geE5EaW07XG4gICAgICBjb25zdCBkaWZmU2hhcGU6IFNoYXBlID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmY7ICsraSkge1xuICAgICAgICBkaWZmU2hhcGUucHVzaCgxKTtcbiAgICAgIH1cbiAgICAgIHggPSB0ZmMucmVzaGFwZSh4LCB4LnNoYXBlLmNvbmNhdChkaWZmU2hhcGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlmZiA9IDA7XG4gICAgfVxuXG4gICAgbGV0IG91dDogVGVuc29yO1xuICAgIGlmICh4LnNoYXBlLmxlbmd0aCA9PT0gMiAmJiB5LnNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgICAgaWYgKGF4ZXNBcnJheVswXSA9PT0gYXhlc0FycmF5WzFdKSB7XG4gICAgICAgIG91dCA9IHRmYy5zdW0odGZjLm11bCh4LCB5KSwgYXhlc0FycmF5WzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dCA9IHRmYy5zdW0odGZjLm11bCh0ZmMudHJhbnNwb3NlKHgsIFsxLCAwXSksIHkpLCBheGVzQXJyYXlbMV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGpYID0gYXhlc0FycmF5WzBdICE9PSB4LnNoYXBlLmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBhZGpZID0gYXhlc0FycmF5WzFdID09PSB5LnNoYXBlLmxlbmd0aCAtIDE7XG4gICAgICBvdXQgPSB0ZmMubWF0TXVsKHgsIHksIGFkalgsIGFkalkpO1xuICAgIH1cblxuICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgbGV0IGlkeDogbnVtYmVyO1xuICAgICAgaWYgKHhORGltID4geU5EaW0pIHtcbiAgICAgICAgaWR4ID0geE5EaW0gKyB5TkRpbSAtIDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZHggPSB4TkRpbSAtIDE7XG4gICAgICB9XG4gICAgICBjb25zdCBzcXVlZXplQXhlczogbnVtYmVyW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBpZHg7IGkgPCBpZHggKyBkaWZmOyArK2kpIHtcbiAgICAgICAgc3F1ZWV6ZUF4ZXMucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIG91dCA9IHRmYy5zcXVlZXplKG91dCwgc3F1ZWV6ZUF4ZXMpO1xuICAgIH1cbiAgICBpZiAob3V0LnNoYXBlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgb3V0ID0gdGZjLmV4cGFuZERpbXMob3V0LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEb3QgZXh0ZW5kcyBNZXJnZSB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0RvdCc7XG5cbiAgcHJpdmF0ZSBheGVzOiBudW1iZXJ8W251bWJlciwgbnVtYmVyXTtcbiAgcHJpdmF0ZSBub3JtYWxpemU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoYXJnczogRG90TGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5heGVzID0gYXJncy5heGVzO1xuICAgIHRoaXMubm9ybWFsaXplID0gYXJncy5ub3JtYWxpemUgPT0gbnVsbCA/IGZhbHNlIDogYXJncy5ub3JtYWxpemU7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVzaGFwZVJlcXVpcmVkID0gZmFsc2U7XG4gIH1cblxuICBvdmVycmlkZSBidWlsZChpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogdm9pZCB7XG4gICAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgICBBcnJheS5pc0FycmF5KGlucHV0U2hhcGUpICYmIGlucHV0U2hhcGUubGVuZ3RoID09PSAyICYmXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KGlucHV0U2hhcGVbMF0pICYmIEFycmF5LmlzQXJyYXkoaW5wdXRTaGFwZVsxXSksXG4gICAgICAgICgpID0+ICdBIGBEb3RgIGxheWVyIHNob3VsZCBiZSBjYWxsZWQgb24gYSBsaXN0IG9mIGV4YWN0bHkgMiBpbnB1dHMuJyk7XG4gICAgY29uc3Qgc2hhcGUxID0gaW5wdXRTaGFwZVswXSBhcyBTaGFwZTtcbiAgICBjb25zdCBzaGFwZTIgPSBpbnB1dFNoYXBlWzFdIGFzIFNoYXBlO1xuICAgIGlmIChzaGFwZTEubGVuZ3RoID4gMyB8fCBzaGFwZTIubGVuZ3RoID4gMykge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgJ0RvdCBsYXllciBkb2VzIG5vdCBzdXBwb3J0IHRlbnNvcnMgb2YgNEQgb3IgaGlnaGVyIHJhbmsgeWV0LicpO1xuICAgIH1cblxuICAgIGNvbnN0IGF4ZXMgPSB0aGlzLmludGVycHJldEF4ZXMoc2hhcGUxLCBzaGFwZTIpO1xuICAgIGlmIChzaGFwZTFbYXhlc1swXV0gIT09IHNoYXBlMltheGVzWzFdXSkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYERpbWVuc2lvbiBpbmNvbXBhdGliaWxpdHk6IGAgK1xuICAgICAgICAgIGAke3NoYXBlMVtheGVzWzBdXX0gIT09ICR7c2hhcGUyW2F4ZXNbMV1dfWApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBtZXJnZUZ1bmN0aW9uKGlucHV0czogVGVuc29yW10pOiBUZW5zb3Ige1xuICAgIGlmIChpbnB1dHMubGVuZ3RoICE9PSAyKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnQSBgRG90YCBsYXllciBtdXN0IGJlIGNhbGxlZCBvbiBleGFjdGx5IDIgaW5wdXRzLCAnICtcbiAgICAgICAgICBgYnV0IHJlY2VpdmVkICR7aW5wdXRzLmxlbmd0aH0gaW5wdXQocykuYCk7XG4gICAgfVxuXG4gICAgbGV0IHgxID0gaW5wdXRzWzBdO1xuICAgIGxldCB4MiA9IGlucHV0c1sxXTtcbiAgICBsZXQgYXhlczogW251bWJlciwgbnVtYmVyXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5heGVzKSkge1xuICAgICAgYXhlcyA9IFtcbiAgICAgICAgaW50ZXJwcmV0QXhpcyh0aGlzLmF4ZXMsIHgxLnNoYXBlLmxlbmd0aCksXG4gICAgICAgIGludGVycHJldEF4aXModGhpcy5heGVzLCB4Mi5zaGFwZS5sZW5ndGgpXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBheGVzID0gdGhpcy5heGVzLm1hcChcbiAgICAgICAgICAgICAgICAgKGF4aXMsIGkpID0+IGludGVycHJldEF4aXMoXG4gICAgICAgICAgICAgICAgICAgICBheGlzLCBpbnB1dHNbaV0uc2hhcGUubGVuZ3RoKSkgYXMgW251bWJlciwgbnVtYmVyXTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm9ybWFsaXplKSB7XG4gICAgICB4MSA9IGwyTm9ybWFsaXplKHgxLCBheGVzWzBdKTtcbiAgICAgIHgyID0gbDJOb3JtYWxpemUoeDIsIGF4ZXNbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gYmF0Y2hEb3QoeDEsIHgyLCBheGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJwcmV0QXhlcyhzaGFwZTE6IFNoYXBlLCBzaGFwZTI6IFNoYXBlKTogbnVtYmVyW10ge1xuICAgIGxldCBheGVzOiBudW1iZXJbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5heGVzKSkge1xuICAgICAgLy8gYHRoaXMuYXhlc2AgaXMgYSBzaW5nbGUgaW50ZWdlci5cbiAgICAgIGF4ZXMgPSBbXG4gICAgICAgIGludGVycHJldEF4aXModGhpcy5heGVzLCBzaGFwZTEubGVuZ3RoKSxcbiAgICAgICAgaW50ZXJwcmV0QXhpcyh0aGlzLmF4ZXMsIHNoYXBlMi5sZW5ndGgpXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBgdGhpcy5heGVzYCBpcyBhbiBBcnJheSBvZiBpbnRlZ2Vycy5cbiAgICAgIGF4ZXMgPSB0aGlzLmF4ZXM7XG4gICAgfVxuICAgIHJldHVybiBheGVzO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoaW5wdXRTaGFwZSkgJiYgaW5wdXRTaGFwZS5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoaW5wdXRTaGFwZVswXSkgJiYgQXJyYXkuaXNBcnJheShpbnB1dFNoYXBlWzFdKSxcbiAgICAgICAgKCkgPT4gJ0EgYERvdGAgbGF5ZXIgc2hvdWxkIGJlIGNhbGxlZCBvbiBhIGxpc3Qgb2YgZXhhY3RseSAyIGlucHV0cy4nKTtcbiAgICBjb25zdCBzaGFwZTEgPSAoaW5wdXRTaGFwZVswXSBhcyBTaGFwZSkuc2xpY2UoKTtcbiAgICBjb25zdCBzaGFwZTIgPSAoaW5wdXRTaGFwZVsxXSBhcyBTaGFwZSkuc2xpY2UoKTtcbiAgICBpZiAoc2hhcGUxLmxlbmd0aCA+IDMgfHwgc2hhcGUyLmxlbmd0aCA+IDMpIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKFxuICAgICAgICAgICdEb3QgbGF5ZXIgZG9lcyBub3Qgc3VwcG9ydCB0ZW5zb3JzIG9mIDREIG9yIGhpZ2hlciByYW5rIHlldC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBheGVzID0gdGhpcy5pbnRlcnByZXRBeGVzKHNoYXBlMSwgc2hhcGUyKTtcbiAgICBzaGFwZTEuc3BsaWNlKGF4ZXNbMF0sIDEpO1xuICAgIHNoYXBlMi5zcGxpY2UoYXhlc1sxXSwgMSk7XG4gICAgc2hhcGUyLnNwbGljZSgwLCAxKTtcbiAgICBjb25zdCBvdXRwdXRTaGFwZSA9IHNoYXBlMS5jb25jYXQoc2hhcGUyKTtcbiAgICBpZiAob3V0cHV0U2hhcGUubGVuZ3RoID09PSAxKSB7XG4gICAgICBvdXRwdXRTaGFwZS5wdXNoKDEpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0U2hhcGU7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlTWFzayhpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwgbWFzaz86IFRlbnNvcnxUZW5zb3JbXSk6XG4gICAgICBUZW5zb3Ige1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICAnYXhlcyc6IHRoaXMuYXhlcyxcbiAgICAgICdub3JtYWxpemUnOiB0aGlzLm5vcm1hbGl6ZVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoRG90KTtcblxuLy8gVE9ETyhjYWlzKTogQWRkIGZ1bmN0aW9uYWwgaW50ZXJmYWNlcyBmb3IgdGhlIG1lcmdlIGxheWVycy5cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/noise.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * TensorFlow.js Layers: Noise Layers.
 */ __turbopack_context__.s([
    "AlphaDropout",
    ()=>AlphaDropout,
    "GaussianDropout",
    ()=>GaussianDropout,
    "GaussianNoise",
    ()=>GaussianNoise
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/greater_equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/random_uniform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
;
;
;
;
class GaussianNoise extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.supportsMasking = true;
        this.stddev = args.stddev;
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const baseConfig = super.getConfig();
        const config = {
            stddev: this.stddev
        };
        Object.assign(config, baseConfig);
        return config;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const noised = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomNormal"](input.shape, 0, this.stddev), input);
            const output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inTrainPhase"](noised, ()=>input, kwargs['training'] || false);
            return output;
        });
    }
}
/** @nocollapse */ GaussianNoise.className = 'GaussianNoise';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GaussianNoise);
class GaussianDropout extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.supportsMasking = true;
        this.rate = args.rate;
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const baseConfig = super.getConfig();
        const config = {
            rate: this.rate
        };
        Object.assign(config, baseConfig);
        return config;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (this.rate > 0 && this.rate < 1) {
                const noised = ()=>{
                    const stddev = Math.sqrt(this.rate / (1 - this.rate));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(input, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomNormal"](input.shape, 1, stddev));
                };
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inTrainPhase"](noised, ()=>input, kwargs['training'] || false);
            }
            return input;
        });
    }
}
/** @nocollapse */ GaussianDropout.className = 'GaussianDropout';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GaussianDropout);
/**
 * Applies Alpha Dropout to the input.
 *
 * As it is a regularization layer, it is only active at training time.
 *
 * Alpha Dropout is a `Dropout` that keeps mean and variance of inputs
 * to their original values, in order to ensure the self-normalizing property
 * even after this dropout.
 * Alpha Dropout fits well to Scaled Exponential Linear Units
 * by randomly setting activations to the negative saturation value.
 *
 * Arguments:
 *   - `rate`: float, drop probability (as with `Dropout`).
 *     The multiplicative noise will have
 *     standard deviation `sqrt(rate / (1 - rate))`.
 *   - `noise_shape`: A 1-D `Tensor` of type `int32`, representing the
 *     shape for randomly generated keep/drop flags.
 *
 * Input shape:
 *   Arbitrary. Use the keyword argument `inputShape`
 *   (tuple of integers, does not include the samples axis)
 *   when using this layer as the first layer in a model.
 *
 * Output shape:
 *   Same shape as input.
 *
 * References:
 *   - [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
 */ class AlphaDropout extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.supportsMasking = true;
        this.rate = args.rate;
        this.noiseShape = args.noiseShape;
    }
    _getNoiseShape(inputs) {
        return this.noiseShape || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs).shape;
    }
    computeOutputShape(inputShape) {
        return inputShape;
    }
    getConfig() {
        const baseConfig = super.getConfig();
        const config = {
            rate: this.rate
        };
        Object.assign(config, baseConfig);
        return config;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            if (this.rate < 1 && this.rate > 0) {
                const noiseShape = this._getNoiseShape(inputs);
                const droppedInputs = ()=>{
                    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
                    const alpha = 1.6732632423543772848170429916717;
                    const scale = 1.0507009873554804934193349852946;
                    const alphaP = -alpha * scale;
                    let keptIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greaterEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUniform"])(noiseShape), this.rate);
                    keptIdx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](keptIdx, 'float32'); // get default dtype.
                    // Get affine transformation params.
                    const a = ((1 - this.rate) * (1 + this.rate * alphaP ** 2)) ** -0.5;
                    const b = -a * alphaP * this.rate;
                    // Apply mask.
                    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(input, keptIdx), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(keptIdx, -1), alphaP));
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(x, a), b);
                };
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inTrainPhase"](droppedInputs, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), kwargs['training'] || false);
            }
            return inputs;
        });
    }
}
/** @nocollapse */ AlphaDropout.className = 'AlphaDropout';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(AlphaDropout); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9pc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL25vaXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEVBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBVSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RyxPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxLQUFLLEVBQVksTUFBTSxvQkFBb0IsQ0FBQztBQUdwRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQU96RCxNQUFhLGFBQWMsU0FBUSxLQUFLO0lBS3RDLFlBQVksSUFBdUI7UUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFFUSxrQkFBa0IsQ0FBQyxVQUF5QjtRQUNuRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRVEsU0FBUztRQUNoQixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsTUFBTSxNQUFNLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFUSxJQUFJLENBQUMsTUFBdUIsRUFBRSxNQUFjO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLE1B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QkFFakUsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUUscUJBQXFCO29CQUU1RCxvQ0FBb0M7b0JBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUVsQyxjQUFjO29CQUNkLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFFbEUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FDakIsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxFQUNoRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBM0RELGtCQUFrQjtBQUNYLHNCQUFTLEdBQUcsY0FBYyxDQUFDO1NBRnZCLFlBQVk7QUE4RHpCLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIFRlbnNvckZsb3cuanMgTGF5ZXJzOiBOb2lzZSBMYXllcnMuXG4gKi9cblxuaW1wb3J0IHthZGQsIGdyZWF0ZXJFcXVhbCwgbXVsLCByYW5kb21Vbmlmb3JtLCBzZXJpYWxpemF0aW9uLCBUZW5zb3IsIHRpZHl9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCAqIGFzIEsgZnJvbSAnLi4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuaW1wb3J0IHtMYXllciwgTGF5ZXJBcmdzfSBmcm9tICcuLi9lbmdpbmUvdG9wb2xvZ3knO1xuaW1wb3J0IHtTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge0t3YXJnc30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtnZXRFeGFjdGx5T25lVGVuc29yfSBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBHYXVzc2lhbk5vaXNlQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKiBTdGFuZGFyZCBEZXZpYXRpb24uICAqL1xuICBzdGRkZXY6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEdhdXNzaWFuTm9pc2UgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0dhdXNzaWFuTm9pc2UnO1xuICByZWFkb25seSBzdGRkZXY6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBHYXVzc2lhbk5vaXNlQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMuc3VwcG9ydHNNYXNraW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0ZGRldiA9IGFyZ3Muc3RkZGV2O1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpIHtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgY29uZmlnID0ge3N0ZGRldjogdGhpcy5zdGRkZXZ9O1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBjb25zdCBub2lzZWQgPSAoKSA9PlxuICAgICAgICAgIGFkZChLLnJhbmRvbU5vcm1hbChpbnB1dC5zaGFwZSwgMCwgdGhpcy5zdGRkZXYpLCBpbnB1dCk7XG4gICAgICBjb25zdCBvdXRwdXQgPVxuICAgICAgICAgIEsuaW5UcmFpblBoYXNlKG5vaXNlZCwgKCkgPT4gaW5wdXQsIGt3YXJnc1sndHJhaW5pbmcnXSB8fCBmYWxzZSk7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2F1c3NpYW5Ob2lzZSk7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBHYXVzc2lhbkRyb3BvdXRBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqIGRyb3AgcHJvYmFiaWxpdHkuICAqL1xuICByYXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHYXVzc2lhbkRyb3BvdXQgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0dhdXNzaWFuRHJvcG91dCc7XG4gIHJlYWRvbmx5IHJhdGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBHYXVzc2lhbkRyb3BvdXRBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICAgIHRoaXMucmF0ZSA9IGFyZ3MucmF0ZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNvbXB1dGVPdXRwdXRTaGFwZShpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogU2hhcGV8U2hhcGVbXSB7XG4gICAgcmV0dXJuIGlucHV0U2hhcGU7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKSB7XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtyYXRlOiB0aGlzLnJhdGV9O1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBpZiAodGhpcy5yYXRlID4gMCAmJiB0aGlzLnJhdGUgPCAxKSB7XG4gICAgICAgIGNvbnN0IG5vaXNlZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGRkZXYgPSBNYXRoLnNxcnQodGhpcy5yYXRlIC8gKDEgLSB0aGlzLnJhdGUpKTtcbiAgICAgICAgICByZXR1cm4gbXVsKGlucHV0LCBLLnJhbmRvbU5vcm1hbChpbnB1dC5zaGFwZSwgMSwgc3RkZGV2KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBLLmluVHJhaW5QaGFzZShub2lzZWQsICgpID0+IGlucHV0LCBrd2FyZ3NbJ3RyYWluaW5nJ10gfHwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2F1c3NpYW5Ecm9wb3V0KTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIEFscGhhRHJvcG91dEFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKiogZHJvcCBwcm9iYWJpbGl0eS4gICovXG4gIHJhdGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIEEgMS1EIGBUZW5zb3JgIG9mIHR5cGUgYGludDMyYCwgcmVwcmVzZW50aW5nIHRoZVxuICAgKiBzaGFwZSBmb3IgcmFuZG9tbHkgZ2VuZXJhdGVkIGtlZXAvZHJvcCBmbGFncy5cbiAgICovXG4gIG5vaXNlU2hhcGU/OiBTaGFwZTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIEFscGhhIERyb3BvdXQgdG8gdGhlIGlucHV0LlxuICpcbiAqIEFzIGl0IGlzIGEgcmVndWxhcml6YXRpb24gbGF5ZXIsIGl0IGlzIG9ubHkgYWN0aXZlIGF0IHRyYWluaW5nIHRpbWUuXG4gKlxuICogQWxwaGEgRHJvcG91dCBpcyBhIGBEcm9wb3V0YCB0aGF0IGtlZXBzIG1lYW4gYW5kIHZhcmlhbmNlIG9mIGlucHV0c1xuICogdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzLCBpbiBvcmRlciB0byBlbnN1cmUgdGhlIHNlbGYtbm9ybWFsaXppbmcgcHJvcGVydHlcbiAqIGV2ZW4gYWZ0ZXIgdGhpcyBkcm9wb3V0LlxuICogQWxwaGEgRHJvcG91dCBmaXRzIHdlbGwgdG8gU2NhbGVkIEV4cG9uZW50aWFsIExpbmVhciBVbml0c1xuICogYnkgcmFuZG9tbHkgc2V0dGluZyBhY3RpdmF0aW9ucyB0byB0aGUgbmVnYXRpdmUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqXG4gKiBBcmd1bWVudHM6XG4gKiAgIC0gYHJhdGVgOiBmbG9hdCwgZHJvcCBwcm9iYWJpbGl0eSAoYXMgd2l0aCBgRHJvcG91dGApLlxuICogICAgIFRoZSBtdWx0aXBsaWNhdGl2ZSBub2lzZSB3aWxsIGhhdmVcbiAqICAgICBzdGFuZGFyZCBkZXZpYXRpb24gYHNxcnQocmF0ZSAvICgxIC0gcmF0ZSkpYC5cbiAqICAgLSBgbm9pc2Vfc2hhcGVgOiBBIDEtRCBgVGVuc29yYCBvZiB0eXBlIGBpbnQzMmAsIHJlcHJlc2VudGluZyB0aGVcbiAqICAgICBzaGFwZSBmb3IgcmFuZG9tbHkgZ2VuZXJhdGVkIGtlZXAvZHJvcCBmbGFncy5cbiAqXG4gKiBJbnB1dCBzaGFwZTpcbiAqICAgQXJiaXRyYXJ5LiBVc2UgdGhlIGtleXdvcmQgYXJndW1lbnQgYGlucHV0U2hhcGVgXG4gKiAgICh0dXBsZSBvZiBpbnRlZ2VycywgZG9lcyBub3QgaW5jbHVkZSB0aGUgc2FtcGxlcyBheGlzKVxuICogICB3aGVuIHVzaW5nIHRoaXMgbGF5ZXIgYXMgdGhlIGZpcnN0IGxheWVyIGluIGEgbW9kZWwuXG4gKlxuICogT3V0cHV0IHNoYXBlOlxuICogICBTYW1lIHNoYXBlIGFzIGlucHV0LlxuICpcbiAqIFJlZmVyZW5jZXM6XG4gKiAgIC0gW1NlbGYtTm9ybWFsaXppbmcgTmV1cmFsIE5ldHdvcmtzXShodHRwczovL2FyeGl2Lm9yZy9hYnMvMTcwNi4wMjUxNSlcbiAqL1xuZXhwb3J0IGNsYXNzIEFscGhhRHJvcG91dCBleHRlbmRzIExheWVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnQWxwaGFEcm9wb3V0JztcbiAgcmVhZG9ubHkgcmF0ZTogbnVtYmVyO1xuICByZWFkb25seSBub2lzZVNoYXBlOiBTaGFwZTtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBBbHBoYURyb3BvdXRBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICAgIHRoaXMucmF0ZSA9IGFyZ3MucmF0ZTtcbiAgICB0aGlzLm5vaXNlU2hhcGUgPSBhcmdzLm5vaXNlU2hhcGU7XG4gIH1cblxuICBfZ2V0Tm9pc2VTaGFwZShpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSkge1xuICAgIHJldHVybiB0aGlzLm5vaXNlU2hhcGUgfHwgZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpLnNoYXBlO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpIHtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgY29uZmlnID0ge3JhdGU6IHRoaXMucmF0ZX07XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucmF0ZSA8IDEgJiYgdGhpcy5yYXRlID4gMCkge1xuICAgICAgICBjb25zdCBub2lzZVNoYXBlID0gdGhpcy5fZ2V0Tm9pc2VTaGFwZShpbnB1dHMpO1xuXG4gICAgICAgIGNvbnN0IGRyb3BwZWRJbnB1dHMgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG5cbiAgICAgICAgICBjb25zdCBhbHBoYSA9IDEuNjczMjYzMjQyMzU0Mzc3Mjg0ODE3MDQyOTkxNjcxNztcbiAgICAgICAgICBjb25zdCBzY2FsZSA9IDEuMDUwNzAwOTg3MzU1NDgwNDkzNDE5MzM0OTg1Mjk0NjtcblxuICAgICAgICAgIGNvbnN0IGFscGhhUCA9IC1hbHBoYSAqIHNjYWxlO1xuXG4gICAgICAgICAgbGV0IGtlcHRJZHggPSBncmVhdGVyRXF1YWwocmFuZG9tVW5pZm9ybShub2lzZVNoYXBlKSwgdGhpcy5yYXRlKTtcblxuICAgICAgICAgIGtlcHRJZHggPSBLLmNhc3Qoa2VwdElkeCwgJ2Zsb2F0MzInKTsgIC8vIGdldCBkZWZhdWx0IGR0eXBlLlxuXG4gICAgICAgICAgLy8gR2V0IGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBwYXJhbXMuXG4gICAgICAgICAgY29uc3QgYSA9ICgoMSAtIHRoaXMucmF0ZSkgKiAoMSArIHRoaXMucmF0ZSAqIGFscGhhUCAqKiAyKSkgKiogLTAuNTtcbiAgICAgICAgICBjb25zdCBiID0gLWEgKiBhbHBoYVAgKiB0aGlzLnJhdGU7XG5cbiAgICAgICAgICAvLyBBcHBseSBtYXNrLlxuICAgICAgICAgIGNvbnN0IHggPSBhZGQobXVsKGlucHV0LCBrZXB0SWR4KSwgbXVsKGFkZChrZXB0SWR4LCAtMSksIGFscGhhUCkpO1xuXG4gICAgICAgICAgcmV0dXJuIGFkZChtdWwoeCwgYSksIGIpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSy5pblRyYWluUGhhc2UoXG4gICAgICAgICAgICBkcm9wcGVkSW5wdXRzLCAoKSA9PiBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyksXG4gICAgICAgICAgICBrd2FyZ3NbJ3RyYWluaW5nJ10gfHwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9KTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKEFscGhhRHJvcG91dCk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/normalization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Normalization layers.
 */ __turbopack_context__.s([
    "BatchNormalization",
    ()=>BatchNormalization,
    "LayerNormalization",
    ()=>LayerNormalization,
    "batchNormalization",
    ()=>batchNormalization,
    "normalizeBatchInTraining",
    ()=>normalizeBatchInTraining
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$batchnorm4d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm4d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$batchnorm3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm3d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$batchnorm2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/batchnorm2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$moments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/moments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
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
function batchNormalization(x, mean, variance, beta, gamma, epsilon = 1e-3) {
    let out;
    if (x.rank === 2) {
        out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$batchnorm2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batchNorm2d"](x, mean, variance, beta, gamma, epsilon);
    } else if (x.rank === 3) {
        // TODO(cais): Check rank; give proper error message.
        out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$batchnorm3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batchNorm3d"](x, mean, variance, beta, gamma, epsilon);
    } else if (x.rank === 4) {
        out = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$batchnorm4d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batchNorm4d"](x, mean, variance, beta, gamma, epsilon);
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"](`batchNormalization is not implemented for array of rank ${x.rank} ` + `yet`);
    }
    return out;
}
/**
 * Non-broadcasting batch normalization for use in training (not inference).
 *
 * The input is normalized to zero mean and unit variance along the
 * `reductionAxes`, followed by scaling with `gamma` and shifted by `beta`.
 * The result of that is returned as the first element
 * of the returned `Array`. The other two elements are the mean and variance,
 * respectively.
 *
 * @param x Input tensor to be normalized.
 * @param gamma Tensor by which to scale the input.
 * @param beta Tensor by which to center the input.
 * @param reductionAxes Axes over which to normalize.
 * @param epsilon Fuzz factor.
 * @returns An `Array` of three `Tensors`:
 *   [normalized tensor, mean of input, variance of input].
 */ function regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon = 1e-3) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const meanAndVariance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$moments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moments"](x, reductionAxes);
        const mean = meanAndVariance.mean;
        const variance = meanAndVariance.variance;
        const normed = batchNormalization(x, mean, variance, beta, gamma, epsilon);
        return [
            normed,
            mean,
            variance
        ];
    });
}
/**
 * Broadcasting batch normalization for use in training (not inference).
 *
 * The input is normalized to zero mean and unit variance along the
 * `reductionAxes`, followed by scaling with `gamma` and shifted by `beta`.
 * The result of that is returned as the first element
 * of the returned `Array`. The other two elements are the mean and variance,
 * respectively.
 *
 * @param x Input tensor to be normalized.
 * @param gamma Tensor by which to scale the input.
 * @param beta Tensor by which to center the input.
 * @param reductionAxes Axes over which to normalize.
 * @param epsilon Fuzz factor.
 * @returns An `Array` of three `Tensors`:
 *   [normalized tensor, mean of input, variance of input].
 */ function broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon = 1e-3) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const meanAndVariance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$moments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moments"](x, reductionAxes);
        const mean = meanAndVariance.mean;
        const variance = meanAndVariance.variance;
        const targetShape = [];
        for (const axis of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"](0, x.rank)){
            if (reductionAxes.indexOf(axis) !== -1) {
                targetShape.push(1);
            } else {
                targetShape.push(x.shape[axis]);
            }
        }
        const broadcastMean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(mean, targetShape);
        const broadcastVariance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(variance, targetShape);
        const broadcastGamma = gamma == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(gamma, targetShape);
        const broadcastBeta = beta == null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(beta, targetShape);
        const normed = batchNormalization(x, broadcastMean, broadcastVariance, broadcastBeta, broadcastGamma, epsilon);
        return [
            normed,
            mean,
            variance
        ];
    });
}
function normalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon = 1e-3) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(reductionAxes.slice().sort(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"](0, x.rank - 1))) {
        return regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon);
    } else {
        return broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon);
    }
}
class BatchNormalization extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        if (args == null) {
            args = {};
        }
        super(args);
        this.supportsMasking = true;
        this.axis = args.axis == null ? -1 : args.axis;
        this.momentum = args.momentum == null ? 0.99 : args.momentum;
        this.epsilon = args.epsilon == null ? 1e-3 : args.epsilon;
        this.center = args.center == null ? true : args.center;
        this.scale = args.scale == null ? true : args.scale;
        this.betaInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.betaInitializer || 'zeros');
        this.gammaInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.gammaInitializer || 'ones');
        this.movingMeanInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.movingMeanInitializer || 'zeros');
        this.movingVarianceInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.movingVarianceInitializer || 'ones');
        this.betaConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.betaConstraint);
        this.gammaConstraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstraint"])(args.gammaConstraint);
        this.betaRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.betaRegularizer);
        this.gammaRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.gammaRegularizer);
    }
    build(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const axis = this.axis >= 0 ? this.axis : this.axis + inputShape.length;
        const dim = inputShape[axis];
        if (dim == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Axis ${axis} of input tensor should have a defined dimension but ` + `the layer received an input with shape ` + `${JSON.stringify(inputShape)}.`);
        }
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: inputShape.length,
                axes: {
                    [axis]: dim
                }
            })
        ];
        const shape = [
            dim
        ];
        if (this.scale) {
            this.gamma = this.addWeight('gamma', shape, null, this.gammaInitializer, this.gammaRegularizer, true, this.gammaConstraint);
        }
        if (this.center) {
            this.beta = this.addWeight('beta', shape, null, this.betaInitializer, this.betaRegularizer, true, this.betaConstraint);
        }
        this.movingMean = this.addWeight('moving_mean', shape, null, this.movingMeanInitializer, null, false);
        this.movingVariance = this.addWeight('moving_variance', shape, null, this.movingVarianceInitializer, null, false);
        this.built = true;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const training = kwargs['training'] == null ? false : kwargs['training'];
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const inputShape = input.shape;
            const ndim = inputShape.length;
            const reductionAxes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"](0, ndim);
            const axis = this.axis >= 0 ? this.axis : this.axis + ndim;
            reductionAxes.splice(axis, 1);
            const broadcastShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pyListRepeat"](1, ndim);
            broadcastShape[axis] = inputShape[axis];
            const sortedReductionAxes = reductionAxes.slice();
            sortedReductionAxes.sort();
            const needsBroadcasting = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(sortedReductionAxes, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"](0, ndim).slice(0, ndim - 1));
            const normalizeInference = ()=>{
                if (needsBroadcasting) {
                    const broadcastMovingMean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(this.movingMean.read(), broadcastShape);
                    const broadcastMovingVariance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(this.movingVariance.read(), broadcastShape);
                    const broadcastBeta = this.center ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(this.beta.read(), broadcastShape) : null;
                    const broadcastGamma = this.scale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(this.gamma.read(), broadcastShape) : null;
                    return batchNormalization(input, broadcastMovingMean, broadcastMovingVariance, broadcastBeta, broadcastGamma, this.epsilon);
                } else {
                    return batchNormalization(input, this.movingMean.read(), this.movingVariance.read(), this.beta == null ? null : this.beta.read(), this.gamma == null ? null : this.gamma.read(), this.epsilon);
                }
            };
            if (!training) {
                return normalizeInference();
            }
            const [normedTraining, mean, variance] = normalizeBatchInTraining(input, this.gamma.read(), this.beta.read(), reductionAxes, this.epsilon);
            const doMovingAverage = (variable, value, momentum)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](()=>{
                    const decay = 1 - momentum;
                    const origValue = variable.read();
                    const updateDelta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](origValue, value), decay);
                    variable.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](origValue, updateDelta));
                });
            };
            // Perform updates to moving mean and moving variance for training.
            // Porting Note: In PyKeras, these updates to `movingMean` and
            //   `movingAverage` are done as a deferred Graph, added to the `Layer`'s
            //   `update`s using the `add_update()` method. Here we do it imperatively
            //   and encapsulate the updates in a function that is invoked
            //   immediately.
            const updateMovingMeanAndVariance = ()=>{
                doMovingAverage(this.movingMean, mean, this.momentum);
                doMovingAverage(this.movingVariance, variance, this.momentum);
            };
            updateMovingMeanAndVariance();
            return normedTraining;
        });
    }
    getConfig() {
        const config = {
            axis: this.axis,
            momentum: this.momentum,
            epsilon: this.epsilon,
            center: this.center,
            scale: this.scale,
            betaInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.betaInitializer),
            gammaInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.gammaInitializer),
            movingMeanInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.movingMeanInitializer),
            movingVarianceInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.movingVarianceInitializer),
            betaRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.betaRegularizer),
            gammaRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.gammaRegularizer),
            betaConstraint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.betaConstraint),
            gammaConstraint: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeConstraint"])(this.gammaConstraint)
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ BatchNormalization.className = 'BatchNormalization';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(BatchNormalization);
class LayerNormalization extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        if (args == null) {
            args = {};
        }
        super(args);
        this.axis = args.axis == null ? -1 : args.axis;
        if (typeof this.axis === 'number') {
            if (!Number.isInteger(this.axis)) {
                throw new Error(`Expected axis to be an integer, but received ${this.axis}`);
            }
        } else if (Array.isArray(this.axis)) {
            for (const axis of this.axis){
                if (!Number.isInteger(axis)) {
                    throw new Error(`Expected axis to be an array of integers, ` + `but received ${JSON.stringify(this.axis)}`);
                }
            }
        } else {
            throw new Error(`Expected axis to be an integer or an array of integers, ` + `but received ${JSON.stringify(this.axis)}`);
        }
        this.epsilon = args.epsilon == null ? 1e-3 : args.epsilon;
        this.center = args.center == null ? true : args.center;
        this.scale = args.scale == null ? true : args.scale;
        this.betaInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.betaInitializer || 'zeros');
        this.gammaInitializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializer"])(args.gammaInitializer || 'ones');
        this.betaRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.betaRegularizer);
        this.gammaRegularizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegularizer"])(args.gammaRegularizer);
        this.supportsMasking = true;
    }
    build(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const nDims = inputShape.length;
        // Convert axis to array and resolve negatives.
        if (typeof this.axis === 'number') {
            this.axis = [
                this.axis
            ];
        }
        for(let i = 0; i < this.axis.length; ++i){
            if (this.axis[i] < 0) {
                this.axis[i] += nDims;
            }
        }
        // Further validate axes.
        for (const axis of this.axis){
            if (axis < 0 || axis >= nDims) {
                throw new Error(`Invalid axis: ${axis}`);
            }
        }
        if (this.axis.length !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unique"](this.axis).length) {
            throw new Error(`Found duplicate axes in: ${this.axis}`);
        }
        const paramShape = this.axis.map((axis)=>inputShape[axis]);
        const trainable = true;
        if (this.scale) {
            this.gamma = this.addWeight('gamma', paramShape, 'float32', this.gammaInitializer, this.gammaRegularizer, trainable);
        } else {
            this.gamma = null;
        }
        if (this.center) {
            this.beta = this.addWeight('beta', paramShape, 'float32', this.betaInitializer, this.betaRegularizer, trainable);
        } else {
            this.beta = null;
        }
        this.built = true;
    }
    call(inputs, kwargs) {
        const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
        const inputShape = input.shape;
        const nDims = inputShape.length;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const keepDims = true;
            let { mean, variance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$moments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moments"])(input, this.axis, keepDims);
            const broadcastShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pyListRepeat"](1, nDims);
            for (const dim of this.axis){
                broadcastShape[dim] = inputShape[dim];
            }
            const broadcast = (v)=>{
                if (v != null && v.shape.length !== nDims) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](v, broadcastShape);
                } else {
                    return v;
                }
            };
            let scale = this.scale ? broadcast(this.gamma.read()) : null;
            let offset = this.center ? broadcast(this.beta.read()) : null;
            // TODO(https://github.com/tensorflow/tfjs/issues/2120): The tiling below
            // is a workaround for the limitation of core's batchNormalization?d don't
            // support broadcasting in their gradients. In addition, the tiling is
            // necessary to ensure correctness on the browser CPU backend regardless
            // of forward or backward computation. Remove this workaround once the
            // limitation is addressed. See .
            const momentsTiling = [];
            const scaleOffsetTiling = [];
            for(let i = 0; i < nDims; ++i){
                if (this.axis.indexOf(i) !== -1) {
                    momentsTiling.push(inputShape[i]);
                    scaleOffsetTiling.push(1);
                } else {
                    momentsTiling.push(1);
                    scaleOffsetTiling.push(inputShape[i]);
                }
            }
            mean = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tile"](mean, momentsTiling);
            variance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tile"](variance, momentsTiling);
            if (scale != null) {
                scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tile"](scale, scaleOffsetTiling);
            }
            if (offset != null) {
                offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tile"](offset, scaleOffsetTiling);
            }
            return batchNormalization(input, mean, variance, offset, scale, this.epsilon);
        });
    }
    getConfig() {
        const config = {
            axis: this.axis,
            epsilon: this.epsilon,
            center: this.center,
            scale: this.scale,
            betaInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.betaInitializer),
            gammaInitializer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeInitializer"])(this.gammaInitializer),
            betaRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.betaRegularizer),
            gammaRegularizer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeRegularizer"])(this.gammaRegularizer)
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ LayerNormalization.className = 'LayerNormalization';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(LayerNormalization); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvbm9ybWFsaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUgsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWtELElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVsSSxPQUFPLEVBQW1DLGFBQWEsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BHLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFDLG1CQUFtQixFQUFFLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxRCxPQUFPLEVBQUMsY0FBYyxFQUFzQyxvQkFBb0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpHLE9BQU8sRUFBQyxjQUFjLEVBQXNDLG9CQUFvQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekcsT0FBTyxLQUFLLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEtBQUssVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzdFOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQzlCLENBQVMsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxJQUFhLEVBQUUsS0FBYyxFQUN4RSxPQUFPLEdBQUcsSUFBSTtJQUNoQixJQUFJLEdBQVcsQ0FBQztJQUNoQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ2hCLEdBQUcsR0FB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QUFTO1FBQ2hCLE1BQU0sTUFBTSxHQUE2QjtZQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixlQUFlLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMzRCxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDN0QsZUFBZSxFQUFFLG9CQUFvQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDM0QsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlELENBQUM7UUFDRixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUF0S0Qsa0JBQWtCO0FBQ1gsNEJBQVMsR0FBRyxvQkFBb0IsQ0FBQztTQUY3QixrQkFBa0I7QUF5Sy9CLGFBQWEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogTm9ybWFsaXphdGlvbiBsYXllcnMuXG4gKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge21vbWVudHMsIHJlc2hhcGUsIHNlcmlhbGl6YXRpb24sIFRlbnNvciwgVGVuc29yMUQsIFRlbnNvcjJELCBUZW5zb3IzRCwgVGVuc29yNEQsIHRpZHksIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7Q29uc3RyYWludCwgQ29uc3RyYWludElkZW50aWZpZXIsIGdldENvbnN0cmFpbnQsIHNlcmlhbGl6ZUNvbnN0cmFpbnR9IGZyb20gJy4uL2NvbnN0cmFpbnRzJztcbmltcG9ydCB7SW5wdXRTcGVjLCBMYXllciwgTGF5ZXJBcmdzfSBmcm9tICcuLi9lbmdpbmUvdG9wb2xvZ3knO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yLCBWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtnZXRJbml0aWFsaXplciwgSW5pdGlhbGl6ZXIsIEluaXRpYWxpemVySWRlbnRpZmllciwgc2VyaWFsaXplSW5pdGlhbGl6ZXJ9IGZyb20gJy4uL2luaXRpYWxpemVycyc7XG5pbXBvcnQge1NoYXBlfSBmcm9tICcuLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmltcG9ydCB7Z2V0UmVndWxhcml6ZXIsIFJlZ3VsYXJpemVyLCBSZWd1bGFyaXplcklkZW50aWZpZXIsIHNlcmlhbGl6ZVJlZ3VsYXJpemVyfSBmcm9tICcuLi9yZWd1bGFyaXplcnMnO1xuaW1wb3J0IHtLd2FyZ3N9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIGdlbmVyaWNfdXRpbHMgZnJvbSAnLi4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG5pbXBvcnQgKiBhcyBtYXRoX3V0aWxzIGZyb20gJy4uL3V0aWxzL21hdGhfdXRpbHMnO1xuaW1wb3J0IHtnZXRFeGFjdGx5T25lU2hhcGUsIGdldEV4YWN0bHlPbmVUZW5zb3J9IGZyb20gJy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcbmltcG9ydCB7TGF5ZXJWYXJpYWJsZX0gZnJvbSAnLi4vdmFyaWFibGVzJztcblxuLyoqXG4gKiBBcHBsaWVzIGJhdGNoIG5vcm1hbGl6YXRpb24gb24geCBnaXZlbiBtZWFuLCB2YXIsIGJldGEgYW5kIGdhbW1hLlxuICpcbiAqIEkuZS4gcmV0dXJuczpcbiAqICAgYG91dHB1dCA9ICh4IC0gbWVhbikgLyAoc3FydCh2YXIpICsgZXBzaWxvbikgKiBnYW1tYSArIGJldGFgXG4gKlxuICogQHBhcmFtIHggSW5wdXQgdGVuc29yLlxuICogQHBhcmFtIG1lYW4gTWVhbiBvZiBiYXRjaC5cbiAqIEBwYXJhbSB2YXJpYW5jZSBWYXJpYW5jZSBvZiBiYXRjaC5cbiAqIEBwYXJhbSBiZXRhIFRlbnNvciB3aXRoIHdoaWNoIHRvIGNlbnRlciB0aGUgaW5wdXQuXG4gKiBAcGFyYW0gZ2FtbWEgVGVuc29yIGJ5IHdoaWNoIHRvIHNjYWxlIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSBlcHNpbG9uIEZ1enogZmFjdG9yLlxuICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgYmF0Y2ggbm9ybWFsaXphdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhdGNoTm9ybWFsaXphdGlvbihcbiAgICB4OiBUZW5zb3IsIG1lYW46IFRlbnNvciwgdmFyaWFuY2U6IFRlbnNvciwgYmV0YT86IFRlbnNvciwgZ2FtbWE/OiBUZW5zb3IsXG4gICAgZXBzaWxvbiA9IDFlLTMpOiBUZW5zb3Ige1xuICBsZXQgb3V0OiBUZW5zb3I7XG4gIGlmICh4LnJhbmsgPT09IDIpIHtcbiAgICBvdXQgPSB0ZmMuYmF0Y2hOb3JtMmQoXG4gICAgICAgIHggYXMgVGVuc29yMkQsIG1lYW4gYXMgVGVuc29yMkQgfCBUZW5zb3IxRCxcbiAgICAgICAgdmFyaWFuY2UgYXMgVGVuc29yMkQgfCBUZW5zb3IxRCwgYmV0YSBhcyBUZW5zb3IyRCB8IFRlbnNvcjFELFxuICAgICAgICBnYW1tYSBhcyBUZW5zb3IyRCB8IFRlbnNvcjFELCBlcHNpbG9uKTtcbiAgfSBlbHNlIGlmICh4LnJhbmsgPT09IDMpIHtcbiAgICAvLyBUT0RPKGNhaXMpOiBDaGVjayByYW5rOyBnaXZlIHByb3BlciBlcnJvciBtZXNzYWdlLlxuICAgIG91dCA9IHRmYy5iYXRjaE5vcm0zZChcbiAgICAgICAgeCBhcyBUZW5zb3IzRCwgbWVhbiBhcyBUZW5zb3IzRCB8IFRlbnNvcjFELFxuICAgICAgICB2YXJpYW5jZSBhcyBUZW5zb3IzRCB8IFRlbnNvcjFELCBiZXRhIGFzIFRlbnNvcjNEIHwgVGVuc29yMUQsXG4gICAgICAgIGdhbW1hIGFzIFRlbnNvcjNEIHwgVGVuc29yMUQsIGVwc2lsb24pO1xuICB9IGVsc2UgaWYgKHgucmFuayA9PT0gNCkge1xuICAgIG91dCA9IHRmYy5iYXRjaE5vcm00ZChcbiAgICAgICAgeCBhcyBUZW5zb3I0RCwgbWVhbiBhcyBUZW5zb3I0RCB8IFRlbnNvcjFELFxuICAgICAgICB2YXJpYW5jZSBhcyBUZW5zb3I0RCB8IFRlbnNvcjFELCBiZXRhIGFzIFRlbnNvcjREIHwgVGVuc29yMUQsXG4gICAgICAgIGdhbW1hIGFzIFRlbnNvcjREIHwgVGVuc29yMUQsIGVwc2lsb24pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKFxuICAgICAgICBgYmF0Y2hOb3JtYWxpemF0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBmb3IgYXJyYXkgb2YgcmFuayAke3gucmFua30gYCArXG4gICAgICAgIGB5ZXRgKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIE5vbi1icm9hZGNhc3RpbmcgYmF0Y2ggbm9ybWFsaXphdGlvbiBmb3IgdXNlIGluIHRyYWluaW5nIChub3QgaW5mZXJlbmNlKS5cbiAqXG4gKiBUaGUgaW5wdXQgaXMgbm9ybWFsaXplZCB0byB6ZXJvIG1lYW4gYW5kIHVuaXQgdmFyaWFuY2UgYWxvbmcgdGhlXG4gKiBgcmVkdWN0aW9uQXhlc2AsIGZvbGxvd2VkIGJ5IHNjYWxpbmcgd2l0aCBgZ2FtbWFgIGFuZCBzaGlmdGVkIGJ5IGBiZXRhYC5cbiAqIFRoZSByZXN1bHQgb2YgdGhhdCBpcyByZXR1cm5lZCBhcyB0aGUgZmlyc3QgZWxlbWVudFxuICogb2YgdGhlIHJldHVybmVkIGBBcnJheWAuIFRoZSBvdGhlciB0d28gZWxlbWVudHMgYXJlIHRoZSBtZWFuIGFuZCB2YXJpYW5jZSxcbiAqIHJlc3BlY3RpdmVseS5cbiAqXG4gKiBAcGFyYW0geCBJbnB1dCB0ZW5zb3IgdG8gYmUgbm9ybWFsaXplZC5cbiAqIEBwYXJhbSBnYW1tYSBUZW5zb3IgYnkgd2hpY2ggdG8gc2NhbGUgdGhlIGlucHV0LlxuICogQHBhcmFtIGJldGEgVGVuc29yIGJ5IHdoaWNoIHRvIGNlbnRlciB0aGUgaW5wdXQuXG4gKiBAcGFyYW0gcmVkdWN0aW9uQXhlcyBBeGVzIG92ZXIgd2hpY2ggdG8gbm9ybWFsaXplLlxuICogQHBhcmFtIGVwc2lsb24gRnV6eiBmYWN0b3IuXG4gKiBAcmV0dXJucyBBbiBgQXJyYXlgIG9mIHRocmVlIGBUZW5zb3JzYDpcbiAqICAgW25vcm1hbGl6ZWQgdGVuc29yLCBtZWFuIG9mIGlucHV0LCB2YXJpYW5jZSBvZiBpbnB1dF0uXG4gKi9cbmZ1bmN0aW9uIHJlZ3VsYXJOb3JtYWxpemVCYXRjaEluVHJhaW5pbmcoXG4gICAgeDogVGVuc29yLCBnYW1tYTogVGVuc29yLCBiZXRhOiBUZW5zb3IsIHJlZHVjdGlvbkF4ZXM6IG51bWJlcltdLFxuICAgIGVwc2lsb24gPSAxZS0zKTogW1RlbnNvciwgVGVuc29yLCBUZW5zb3JdIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgICAgICBjb25zdCBtZWFuQW5kVmFyaWFuY2UgPSB0ZmMubW9tZW50cyh4LCByZWR1Y3Rpb25BeGVzKTtcbiAgICAgICAgICAgY29uc3QgbWVhbiA9IG1lYW5BbmRWYXJpYW5jZS5tZWFuO1xuICAgICAgICAgICBjb25zdCB2YXJpYW5jZSA9IG1lYW5BbmRWYXJpYW5jZS52YXJpYW5jZTtcbiAgICAgICAgICAgY29uc3Qgbm9ybWVkID1cbiAgICAgICAgICAgICAgIGJhdGNoTm9ybWFsaXphdGlvbih4LCBtZWFuLCB2YXJpYW5jZSwgYmV0YSwgZ2FtbWEsIGVwc2lsb24pO1xuICAgICAgICAgICByZXR1cm4gW25vcm1lZCwgbWVhbiwgdmFyaWFuY2VdO1xuICAgICAgICAgfSkgYXMgW1RlbnNvciwgVGVuc29yLCBUZW5zb3JdO1xufVxuXG4vKipcbiAqIEJyb2FkY2FzdGluZyBiYXRjaCBub3JtYWxpemF0aW9uIGZvciB1c2UgaW4gdHJhaW5pbmcgKG5vdCBpbmZlcmVuY2UpLlxuICpcbiAqIFRoZSBpbnB1dCBpcyBub3JtYWxpemVkIHRvIHplcm8gbWVhbiBhbmQgdW5pdCB2YXJpYW5jZSBhbG9uZyB0aGVcbiAqIGByZWR1Y3Rpb25BeGVzYCwgZm9sbG93ZWQgYnkgc2NhbGluZyB3aXRoIGBnYW1tYWAgYW5kIHNoaWZ0ZWQgYnkgYGJldGFgLlxuICogVGhlIHJlc3VsdCBvZiB0aGF0IGlzIHJldHVybmVkIGFzIHRoZSBmaXJzdCBlbGVtZW50XG4gKiBvZiB0aGUgcmV0dXJuZWQgYEFycmF5YC4gVGhlIG90aGVyIHR3byBlbGVtZW50cyBhcmUgdGhlIG1lYW4gYW5kIHZhcmlhbmNlLFxuICogcmVzcGVjdGl2ZWx5LlxuICpcbiAqIEBwYXJhbSB4IElucHV0IHRlbnNvciB0byBiZSBub3JtYWxpemVkLlxuICogQHBhcmFtIGdhbW1hIFRlbnNvciBieSB3aGljaCB0byBzY2FsZSB0aGUgaW5wdXQuXG4gKiBAcGFyYW0gYmV0YSBUZW5zb3IgYnkgd2hpY2ggdG8gY2VudGVyIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSByZWR1Y3Rpb25BeGVzIEF4ZXMgb3ZlciB3aGljaCB0byBub3JtYWxpemUuXG4gKiBAcGFyYW0gZXBzaWxvbiBGdXp6IGZhY3Rvci5cbiAqIEByZXR1cm5zIEFuIGBBcnJheWAgb2YgdGhyZWUgYFRlbnNvcnNgOlxuICogICBbbm9ybWFsaXplZCB0ZW5zb3IsIG1lYW4gb2YgaW5wdXQsIHZhcmlhbmNlIG9mIGlucHV0XS5cbiAqL1xuZnVuY3Rpb24gYnJvYWRjYXN0Tm9ybWFsaXplQmF0Y2hJblRyYWluaW5nKFxuICAgIHg6IFRlbnNvciwgZ2FtbWE6IFRlbnNvciwgYmV0YTogVGVuc29yLCByZWR1Y3Rpb25BeGVzOiBudW1iZXJbXSxcbiAgICBlcHNpbG9uID0gMWUtMyk6IFtUZW5zb3IsIFRlbnNvciwgVGVuc29yXSB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgICAgICAgY29uc3QgbWVhbkFuZFZhcmlhbmNlID0gdGZjLm1vbWVudHMoeCwgcmVkdWN0aW9uQXhlcyk7XG4gICAgICAgICAgIGNvbnN0IG1lYW4gPSBtZWFuQW5kVmFyaWFuY2UubWVhbjtcbiAgICAgICAgICAgY29uc3QgdmFyaWFuY2UgPSBtZWFuQW5kVmFyaWFuY2UudmFyaWFuY2U7XG4gICAgICAgICAgIGNvbnN0IHRhcmdldFNoYXBlOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgbWF0aF91dGlscy5yYW5nZSgwLCB4LnJhbmspKSB7XG4gICAgICAgICAgICAgaWYgKHJlZHVjdGlvbkF4ZXMuaW5kZXhPZihheGlzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgIHRhcmdldFNoYXBlLnB1c2goMSk7XG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHRhcmdldFNoYXBlLnB1c2goeC5zaGFwZVtheGlzXSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICAgIGNvbnN0IGJyb2FkY2FzdE1lYW4gPSByZXNoYXBlKG1lYW4sIHRhcmdldFNoYXBlKTtcbiAgICAgICAgICAgY29uc3QgYnJvYWRjYXN0VmFyaWFuY2UgPSByZXNoYXBlKHZhcmlhbmNlLCB0YXJnZXRTaGFwZSk7XG4gICAgICAgICAgIGNvbnN0IGJyb2FkY2FzdEdhbW1hID1cbiAgICAgICAgICAgICAgIGdhbW1hID09IG51bGwgPyBudWxsIDogcmVzaGFwZShnYW1tYSwgdGFyZ2V0U2hhcGUpO1xuICAgICAgICAgICBjb25zdCBicm9hZGNhc3RCZXRhID1cbiAgICAgICAgICAgICAgIGJldGEgPT0gbnVsbCA/IG51bGwgOiByZXNoYXBlKGJldGEsIHRhcmdldFNoYXBlKTtcbiAgICAgICAgICAgY29uc3Qgbm9ybWVkID0gYmF0Y2hOb3JtYWxpemF0aW9uKFxuICAgICAgICAgICAgICAgeCwgYnJvYWRjYXN0TWVhbiwgYnJvYWRjYXN0VmFyaWFuY2UsIGJyb2FkY2FzdEJldGEsXG4gICAgICAgICAgICAgICBicm9hZGNhc3RHYW1tYSwgZXBzaWxvbik7XG4gICAgICAgICAgIHJldHVybiBbbm9ybWVkLCBtZWFuLCB2YXJpYW5jZV07XG4gICAgICAgICB9KSBhcyBbVGVuc29yLCBUZW5zb3IsIFRlbnNvcl07XG59XG5cbi8qKlxuICogQmF0Y2ggbm9ybWFsaXphdGlvbiBmb3IgdXNlIGluIHRyYWluaW5nIChub3QgaW5mZXJlbmNlKS5cbiAqXG4gKiBAcGFyYW0geCBJbnB1dCB0ZW5zb3IgdG8gYmUgbm9ybWFsaXplZC5cbiAqIEBwYXJhbSBnYW1tYSBUZW5zb3IgYnkgd2hpY2ggdG8gc2NhbGUgdGhlIGlucHV0LlxuICogQHBhcmFtIGJldGEgVGVuc29yIGJ5IHdoaWNoIHRvIGNlbnRlciB0aGUgaW5wdXQuXG4gKiBAcGFyYW0gcmVkdWN0aW9uQXhlcyBBeGVzIG92ZXIgd2hpY2ggdG8gbm9ybWFsaXplLlxuICogQHBhcmFtIGVwc2lsb24gRnV6eiBmYWN0b3IuXG4gKiBAcmV0dXJucyBBbiBgQXJyYXlgIG9mIHRocmVlIGBUZW5zb3JzYDpcbiAqICAgW25vcm1hbGl6ZWQgdGVuc29yLCBtZWFuIG9mIGlucHV0LCB2YXJpYW5jZSBvZiBpbnB1dF0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVCYXRjaEluVHJhaW5pbmcoXG4gICAgeDogVGVuc29yLCBnYW1tYTogVGVuc29yLCBiZXRhOiBUZW5zb3IsIHJlZHVjdGlvbkF4ZXM6IG51bWJlcltdLFxuICAgIGVwc2lsb24gPSAxZS0zKTogW1RlbnNvciwgVGVuc29yLCBUZW5zb3JdIHtcbiAgaWYgKHV0aWwuYXJyYXlzRXF1YWwoXG4gICAgICAgICAgcmVkdWN0aW9uQXhlcy5zbGljZSgpLnNvcnQoKSwgbWF0aF91dGlscy5yYW5nZSgwLCB4LnJhbmsgLSAxKSkpIHtcbiAgICByZXR1cm4gcmVndWxhck5vcm1hbGl6ZUJhdGNoSW5UcmFpbmluZyhcbiAgICAgICAgeCwgZ2FtbWEsIGJldGEsIHJlZHVjdGlvbkF4ZXMsIGVwc2lsb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBicm9hZGNhc3ROb3JtYWxpemVCYXRjaEluVHJhaW5pbmcoXG4gICAgICAgIHgsIGdhbW1hLCBiZXRhLCByZWR1Y3Rpb25BeGVzLCBlcHNpbG9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQmF0Y2hOb3JtYWxpemF0aW9uTGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqXG4gICAqIFRoZSBpbnRlZ2VyIGF4aXMgdGhhdCBzaG91bGQgYmUgbm9ybWFsaXplZCAodHlwaWNhbGx5IHRoZSBmZWF0dXJlcyBheGlzKS5cbiAgICogRGVmYXVsdHMgdG8gLTEuXG4gICAqXG4gICAqIEZvciBpbnN0YW5jZSwgYWZ0ZXIgYSBgQ29udjJEYCBsYXllciB3aXRoIGBkYXRhX2Zvcm1hdD1cImNoYW5uZWxzX2ZpcnN0XCJgLFxuICAgKiBzZXQgYGF4aXM9MWAgaW4gYGJhdGNoTm9ybWFsaXphdGlvbmAuXG4gICAqL1xuICBheGlzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNb21lbnR1bSBvZiB0aGUgbW92aW5nIGF2ZXJhZ2UuIERlZmF1bHRzIHRvIDAuOTkuXG4gICAqL1xuICBtb21lbnR1bT86IG51bWJlcjtcblxuICAvKipcbiAgICogU21hbGwgZmxvYXQgYWRkZWQgdG8gdGhlIHZhcmlhbmNlIHRvIGF2b2lkIGRpdmlkaW5nIGJ5IHplcm8uIERlZmF1bHRzIHRvXG4gICAqIDFlLTMuXG4gICAqL1xuICBlcHNpbG9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGFkZCBvZmZzZXQgb2YgYGJldGFgIHRvIG5vcm1hbGl6ZWQgdGVuc29yLlxuICAgKiBJZiBgZmFsc2VgLCBgYmV0YWAgaXMgaWdub3JlZC5cbiAgICogRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgKi9cbiAgY2VudGVyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBtdWx0aXBseSBieSBgZ2FtbWFgLlxuICAgKiBJZiBgZmFsc2VgLCBgZ2FtbWFgIGlzIG5vdCB1c2VkLlxuICAgKiBXaGVuIHRoZSBuZXh0IGxheWVyIGlzIGxpbmVhciAoYWxzbyBlLmcuIGBubi5yZWx1YCksXG4gICAqIHRoaXMgY2FuIGJlIGRpc2FibGVkIHNpbmNlIHRoZSBzY2FsaW5nIHdpbGwgYmUgZG9uZSBieSB0aGUgbmV4dCBsYXllci5cbiAgICogRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgKi9cbiAgc2NhbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplciBmb3IgdGhlIGJldGEgd2VpZ2h0LlxuICAgKiAgRGVmYXVsdHMgdG8gJ3plcm9zJy5cbiAgICovXG4gIGJldGFJbml0aWFsaXplcj86IEluaXRpYWxpemVySWRlbnRpZmllcnxJbml0aWFsaXplcjtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXIgZm9yIHRoZSBnYW1tYSB3ZWlnaHQuXG4gICAqICBEZWZhdWx0cyB0byBgb25lc2AuXG4gICAqL1xuICBnYW1tYUluaXRpYWxpemVyPzogSW5pdGlhbGl6ZXJJZGVudGlmaWVyfEluaXRpYWxpemVyO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplciBmb3IgdGhlIG1vdmluZyBtZWFuLlxuICAgKiBEZWZhdWx0cyB0byBgemVyb3NgXG4gICAqL1xuICBtb3ZpbmdNZWFuSW5pdGlhbGl6ZXI/OiBJbml0aWFsaXplcklkZW50aWZpZXJ8SW5pdGlhbGl6ZXI7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVyIGZvciB0aGUgbW92aW5nIHZhcmlhbmNlLlxuICAgKiAgRGVmYXVsdHMgdG8gJ09uZXMnLlxuICAgKi9cbiAgbW92aW5nVmFyaWFuY2VJbml0aWFsaXplcj86IEluaXRpYWxpemVySWRlbnRpZmllcnxJbml0aWFsaXplcjtcblxuICAvKipcbiAgICogQ29uc3RyYWludCBmb3IgdGhlIGJldGEgd2VpZ2h0LlxuICAgKi9cbiAgYmV0YUNvbnN0cmFpbnQ/OiBDb25zdHJhaW50SWRlbnRpZmllcnxDb25zdHJhaW50O1xuXG4gIC8qKlxuICAgKiBDb25zdHJhaW50IGZvciBnYW1tYSB3ZWlnaHQuXG4gICAqL1xuICBnYW1tYUNvbnN0cmFpbnQ/OiBDb25zdHJhaW50SWRlbnRpZmllcnxDb25zdHJhaW50O1xuXG4gIC8qKlxuICAgKiBSZWd1bGFyaXplciBmb3IgdGhlIGJldGEgd2VpZ2h0LlxuICAgKi9cbiAgYmV0YVJlZ3VsYXJpemVyPzogUmVndWxhcml6ZXJJZGVudGlmaWVyfFJlZ3VsYXJpemVyO1xuXG4gIC8qKlxuICAgKiBSZWd1bGFyaXplciBmb3IgdGhlIGdhbW1hIHdlaWdodC5cbiAgICovXG4gIGdhbW1hUmVndWxhcml6ZXI/OiBSZWd1bGFyaXplcklkZW50aWZpZXJ8UmVndWxhcml6ZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXRjaE5vcm1hbGl6YXRpb24gZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0JhdGNoTm9ybWFsaXphdGlvbic7XG4gIHByaXZhdGUgcmVhZG9ubHkgYXhpczogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IG1vbWVudHVtOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgZXBzaWxvbjogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGNlbnRlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2FsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSBiZXRhSW5pdGlhbGl6ZXI6IEluaXRpYWxpemVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGdhbW1hSW5pdGlhbGl6ZXI6IEluaXRpYWxpemVyO1xuICBwcml2YXRlIHJlYWRvbmx5IG1vdmluZ01lYW5Jbml0aWFsaXplcjogSW5pdGlhbGl6ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgbW92aW5nVmFyaWFuY2VJbml0aWFsaXplcjogSW5pdGlhbGl6ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgYmV0YUNvbnN0cmFpbnQ6IENvbnN0cmFpbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FtbWFDb25zdHJhaW50OiBDb25zdHJhaW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGJldGFSZWd1bGFyaXplcjogUmVndWxhcml6ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FtbWFSZWd1bGFyaXplcjogUmVndWxhcml6ZXI7XG4gIHByaXZhdGUgZ2FtbWE6IExheWVyVmFyaWFibGU7XG4gIHByaXZhdGUgYmV0YTogTGF5ZXJWYXJpYWJsZTtcbiAgcHJpdmF0ZSBtb3ZpbmdNZWFuOiBMYXllclZhcmlhYmxlO1xuICBwcml2YXRlIG1vdmluZ1ZhcmlhbmNlOiBMYXllclZhcmlhYmxlO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBCYXRjaE5vcm1hbGl6YXRpb25MYXllckFyZ3MpIHtcbiAgICBpZiAoYXJncyA9PSBudWxsKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgfVxuICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXhpcyA9IGFyZ3MuYXhpcyA9PSBudWxsID8gLTEgOiBhcmdzLmF4aXM7XG4gICAgdGhpcy5tb21lbnR1bSA9IGFyZ3MubW9tZW50dW0gPT0gbnVsbCA/IDAuOTkgOiBhcmdzLm1vbWVudHVtO1xuICAgIHRoaXMuZXBzaWxvbiA9IGFyZ3MuZXBzaWxvbiA9PSBudWxsID8gMWUtMyA6IGFyZ3MuZXBzaWxvbjtcbiAgICB0aGlzLmNlbnRlciA9IGFyZ3MuY2VudGVyID09IG51bGwgPyB0cnVlIDogYXJncy5jZW50ZXI7XG4gICAgdGhpcy5zY2FsZSA9IGFyZ3Muc2NhbGUgPT0gbnVsbCA/IHRydWUgOiBhcmdzLnNjYWxlO1xuICAgIHRoaXMuYmV0YUluaXRpYWxpemVyID0gZ2V0SW5pdGlhbGl6ZXIoYXJncy5iZXRhSW5pdGlhbGl6ZXIgfHwgJ3plcm9zJyk7XG4gICAgdGhpcy5nYW1tYUluaXRpYWxpemVyID0gZ2V0SW5pdGlhbGl6ZXIoYXJncy5nYW1tYUluaXRpYWxpemVyIHx8ICdvbmVzJyk7XG4gICAgdGhpcy5tb3ZpbmdNZWFuSW5pdGlhbGl6ZXIgPVxuICAgICAgICBnZXRJbml0aWFsaXplcihhcmdzLm1vdmluZ01lYW5Jbml0aWFsaXplciB8fCAnemVyb3MnKTtcbiAgICB0aGlzLm1vdmluZ1ZhcmlhbmNlSW5pdGlhbGl6ZXIgPVxuICAgICAgICBnZXRJbml0aWFsaXplcihhcmdzLm1vdmluZ1ZhcmlhbmNlSW5pdGlhbGl6ZXIgfHwgJ29uZXMnKTtcbiAgICB0aGlzLmJldGFDb25zdHJhaW50ID0gZ2V0Q29uc3RyYWludChhcmdzLmJldGFDb25zdHJhaW50KTtcbiAgICB0aGlzLmdhbW1hQ29uc3RyYWludCA9IGdldENvbnN0cmFpbnQoYXJncy5nYW1tYUNvbnN0cmFpbnQpO1xuICAgIHRoaXMuYmV0YVJlZ3VsYXJpemVyID0gZ2V0UmVndWxhcml6ZXIoYXJncy5iZXRhUmVndWxhcml6ZXIpO1xuICAgIHRoaXMuZ2FtbWFSZWd1bGFyaXplciA9IGdldFJlZ3VsYXJpemVyKGFyZ3MuZ2FtbWFSZWd1bGFyaXplcik7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgYnVpbGQoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IHZvaWQge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgY29uc3QgYXhpcyA9IHRoaXMuYXhpcyA+PSAwID8gdGhpcy5heGlzIDogKHRoaXMuYXhpcyArIGlucHV0U2hhcGUubGVuZ3RoKTtcbiAgICBjb25zdCBkaW0gPSBpbnB1dFNoYXBlW2F4aXNdO1xuICAgIGlmIChkaW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYEF4aXMgJHtheGlzfSBvZiBpbnB1dCB0ZW5zb3Igc2hvdWxkIGhhdmUgYSBkZWZpbmVkIGRpbWVuc2lvbiBidXQgYCArXG4gICAgICAgICAgYHRoZSBsYXllciByZWNlaXZlZCBhbiBpbnB1dCB3aXRoIHNoYXBlIGAgK1xuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGlucHV0U2hhcGUpfS5gKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dFNwZWMgPVxuICAgICAgICBbbmV3IElucHV0U3BlYyh7bmRpbTogaW5wdXRTaGFwZS5sZW5ndGgsIGF4ZXM6IHtbYXhpc106IGRpbX19KV07XG4gICAgY29uc3Qgc2hhcGUgPSBbZGltXTtcbiAgICBpZiAodGhpcy5zY2FsZSkge1xuICAgICAgdGhpcy5nYW1tYSA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAgICdnYW1tYScsIHNoYXBlLCBudWxsLCB0aGlzLmdhbW1hSW5pdGlhbGl6ZXIsIHRoaXMuZ2FtbWFSZWd1bGFyaXplcixcbiAgICAgICAgICB0cnVlLCB0aGlzLmdhbW1hQ29uc3RyYWludCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNlbnRlcikge1xuICAgICAgdGhpcy5iZXRhID0gdGhpcy5hZGRXZWlnaHQoXG4gICAgICAgICAgJ2JldGEnLCBzaGFwZSwgbnVsbCwgdGhpcy5iZXRhSW5pdGlhbGl6ZXIsIHRoaXMuYmV0YVJlZ3VsYXJpemVyLCB0cnVlLFxuICAgICAgICAgIHRoaXMuYmV0YUNvbnN0cmFpbnQpO1xuICAgIH1cbiAgICB0aGlzLm1vdmluZ01lYW4gPSB0aGlzLmFkZFdlaWdodChcbiAgICAgICAgJ21vdmluZ19tZWFuJywgc2hhcGUsIG51bGwsIHRoaXMubW92aW5nTWVhbkluaXRpYWxpemVyLCBudWxsLCBmYWxzZSk7XG4gICAgdGhpcy5tb3ZpbmdWYXJpYW5jZSA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAnbW92aW5nX3ZhcmlhbmNlJywgc2hhcGUsIG51bGwsIHRoaXMubW92aW5nVmFyaWFuY2VJbml0aWFsaXplciwgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuYnVpbHQgPSB0cnVlO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IHRyYWluaW5nID0ga3dhcmdzWyd0cmFpbmluZyddID09IG51bGwgPyBmYWxzZSA6IGt3YXJnc1sndHJhaW5pbmcnXTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpO1xuICAgICAgY29uc3QgaW5wdXRTaGFwZSA9IGlucHV0LnNoYXBlO1xuICAgICAgY29uc3QgbmRpbSA9IGlucHV0U2hhcGUubGVuZ3RoO1xuICAgICAgY29uc3QgcmVkdWN0aW9uQXhlcyA9IG1hdGhfdXRpbHMucmFuZ2UoMCwgbmRpbSk7XG4gICAgICBjb25zdCBheGlzID0gdGhpcy5heGlzID49IDAgPyB0aGlzLmF4aXMgOiAodGhpcy5heGlzICsgbmRpbSk7XG4gICAgICByZWR1Y3Rpb25BeGVzLnNwbGljZShheGlzLCAxKTtcbiAgICAgIGNvbnN0IGJyb2FkY2FzdFNoYXBlID0gZ2VuZXJpY191dGlscy5weUxpc3RSZXBlYXQoMSwgbmRpbSk7XG4gICAgICBicm9hZGNhc3RTaGFwZVtheGlzXSA9IGlucHV0U2hhcGVbYXhpc107XG5cbiAgICAgIGNvbnN0IHNvcnRlZFJlZHVjdGlvbkF4ZXMgPSByZWR1Y3Rpb25BeGVzLnNsaWNlKCk7XG4gICAgICBzb3J0ZWRSZWR1Y3Rpb25BeGVzLnNvcnQoKTtcbiAgICAgIGNvbnN0IG5lZWRzQnJvYWRjYXN0aW5nID0gIXV0aWwuYXJyYXlzRXF1YWwoXG4gICAgICAgICAgc29ydGVkUmVkdWN0aW9uQXhlcywgbWF0aF91dGlscy5yYW5nZSgwLCBuZGltKS5zbGljZSgwLCBuZGltIC0gMSkpO1xuXG4gICAgICBjb25zdCBub3JtYWxpemVJbmZlcmVuY2U6ICgpID0+IFRlbnNvciA9ICgpID0+IHtcbiAgICAgICAgaWYgKG5lZWRzQnJvYWRjYXN0aW5nKSB7XG4gICAgICAgICAgY29uc3QgYnJvYWRjYXN0TW92aW5nTWVhbiA9XG4gICAgICAgICAgICAgIHJlc2hhcGUodGhpcy5tb3ZpbmdNZWFuLnJlYWQoKSwgYnJvYWRjYXN0U2hhcGUpO1xuICAgICAgICAgIGNvbnN0IGJyb2FkY2FzdE1vdmluZ1ZhcmlhbmNlID1cbiAgICAgICAgICAgICAgcmVzaGFwZSh0aGlzLm1vdmluZ1ZhcmlhbmNlLnJlYWQoKSwgYnJvYWRjYXN0U2hhcGUpO1xuICAgICAgICAgIGNvbnN0IGJyb2FkY2FzdEJldGEgPVxuICAgICAgICAgICAgICB0aGlzLmNlbnRlciA/IHJlc2hhcGUodGhpcy5iZXRhLnJlYWQoKSwgYnJvYWRjYXN0U2hhcGUpIDogbnVsbDtcbiAgICAgICAgICBjb25zdCBicm9hZGNhc3RHYW1tYSA9XG4gICAgICAgICAgICAgIHRoaXMuc2NhbGUgPyByZXNoYXBlKHRoaXMuZ2FtbWEucmVhZCgpLCBicm9hZGNhc3RTaGFwZSkgOiBudWxsO1xuICAgICAgICAgIHJldHVybiBiYXRjaE5vcm1hbGl6YXRpb24oXG4gICAgICAgICAgICAgIGlucHV0LCBicm9hZGNhc3RNb3ZpbmdNZWFuLCBicm9hZGNhc3RNb3ZpbmdWYXJpYW5jZSxcbiAgICAgICAgICAgICAgYnJvYWRjYXN0QmV0YSwgYnJvYWRjYXN0R2FtbWEsIHRoaXMuZXBzaWxvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGJhdGNoTm9ybWFsaXphdGlvbihcbiAgICAgICAgICAgICAgaW5wdXQsIHRoaXMubW92aW5nTWVhbi5yZWFkKCksIHRoaXMubW92aW5nVmFyaWFuY2UucmVhZCgpLFxuICAgICAgICAgICAgICB0aGlzLmJldGEgPT0gbnVsbCA/IG51bGwgOiB0aGlzLmJldGEucmVhZCgpLFxuICAgICAgICAgICAgICB0aGlzLmdhbW1hID09IG51bGwgPyBudWxsIDogdGhpcy5nYW1tYS5yZWFkKCksIHRoaXMuZXBzaWxvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICghdHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZUluZmVyZW5jZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBbbm9ybWVkVHJhaW5pbmcsIG1lYW4sIHZhcmlhbmNlXSA9IG5vcm1hbGl6ZUJhdGNoSW5UcmFpbmluZyhcbiAgICAgICAgICBpbnB1dCwgdGhpcy5nYW1tYS5yZWFkKCksIHRoaXMuYmV0YS5yZWFkKCksIHJlZHVjdGlvbkF4ZXMsXG4gICAgICAgICAgdGhpcy5lcHNpbG9uKTtcblxuICAgICAgY29uc3QgZG9Nb3ZpbmdBdmVyYWdlID1cbiAgICAgICAgICAodmFyaWFibGU6IExheWVyVmFyaWFibGUsIHZhbHVlOiBUZW5zb3IsIG1vbWVudHVtOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRmYy50aWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGVjYXkgPSAxIC0gbW9tZW50dW07XG4gICAgICAgICAgICAgIGNvbnN0IG9yaWdWYWx1ZSA9IHZhcmlhYmxlLnJlYWQoKTtcbiAgICAgICAgICAgICAgY29uc3QgdXBkYXRlRGVsdGEgPSB0ZmMubXVsKHRmYy5zdWIob3JpZ1ZhbHVlLCB2YWx1ZSksIGRlY2F5KTtcbiAgICAgICAgICAgICAgdmFyaWFibGUud3JpdGUodGZjLnN1YihvcmlnVmFsdWUsIHVwZGF0ZURlbHRhKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAvLyBQZXJmb3JtIHVwZGF0ZXMgdG8gbW92aW5nIG1lYW4gYW5kIG1vdmluZyB2YXJpYW5jZSBmb3IgdHJhaW5pbmcuXG4gICAgICAvLyBQb3J0aW5nIE5vdGU6IEluIFB5S2VyYXMsIHRoZXNlIHVwZGF0ZXMgdG8gYG1vdmluZ01lYW5gIGFuZFxuICAgICAgLy8gICBgbW92aW5nQXZlcmFnZWAgYXJlIGRvbmUgYXMgYSBkZWZlcnJlZCBHcmFwaCwgYWRkZWQgdG8gdGhlIGBMYXllcmAnc1xuICAgICAgLy8gICBgdXBkYXRlYHMgdXNpbmcgdGhlIGBhZGRfdXBkYXRlKClgIG1ldGhvZC4gSGVyZSB3ZSBkbyBpdCBpbXBlcmF0aXZlbHlcbiAgICAgIC8vICAgYW5kIGVuY2Fwc3VsYXRlIHRoZSB1cGRhdGVzIGluIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkXG4gICAgICAvLyAgIGltbWVkaWF0ZWx5LlxuICAgICAgY29uc3QgdXBkYXRlTW92aW5nTWVhbkFuZFZhcmlhbmNlID0gKCkgPT4ge1xuICAgICAgICBkb01vdmluZ0F2ZXJhZ2UodGhpcy5tb3ZpbmdNZWFuLCBtZWFuLCB0aGlzLm1vbWVudHVtKTtcbiAgICAgICAgZG9Nb3ZpbmdBdmVyYWdlKHRoaXMubW92aW5nVmFyaWFuY2UsIHZhcmlhbmNlLCB0aGlzLm1vbWVudHVtKTtcbiAgICAgIH07XG4gICAgICB1cGRhdGVNb3ZpbmdNZWFuQW5kVmFyaWFuY2UoKTtcblxuICAgICAgcmV0dXJuIG5vcm1lZFRyYWluaW5nO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICBheGlzOiB0aGlzLmF4aXMsXG4gICAgICBtb21lbnR1bTogdGhpcy5tb21lbnR1bSxcbiAgICAgIGVwc2lsb246IHRoaXMuZXBzaWxvbixcbiAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIGJldGFJbml0aWFsaXplcjogc2VyaWFsaXplSW5pdGlhbGl6ZXIodGhpcy5iZXRhSW5pdGlhbGl6ZXIpLFxuICAgICAgZ2FtbWFJbml0aWFsaXplcjogc2VyaWFsaXplSW5pdGlhbGl6ZXIodGhpcy5nYW1tYUluaXRpYWxpemVyKSxcbiAgICAgIG1vdmluZ01lYW5Jbml0aWFsaXplcjogc2VyaWFsaXplSW5pdGlhbGl6ZXIodGhpcy5tb3ZpbmdNZWFuSW5pdGlhbGl6ZXIpLFxuICAgICAgbW92aW5nVmFyaWFuY2VJbml0aWFsaXplcjpcbiAgICAgICAgICBzZXJpYWxpemVJbml0aWFsaXplcih0aGlzLm1vdmluZ1ZhcmlhbmNlSW5pdGlhbGl6ZXIpLFxuICAgICAgYmV0YVJlZ3VsYXJpemVyOiBzZXJpYWxpemVSZWd1bGFyaXplcih0aGlzLmJldGFSZWd1bGFyaXplciksXG4gICAgICBnYW1tYVJlZ3VsYXJpemVyOiBzZXJpYWxpemVSZWd1bGFyaXplcih0aGlzLmdhbW1hUmVndWxhcml6ZXIpLFxuICAgICAgYmV0YUNvbnN0cmFpbnQ6IHNlcmlhbGl6ZUNvbnN0cmFpbnQodGhpcy5iZXRhQ29uc3RyYWludCksXG4gICAgICBnYW1tYUNvbnN0cmFpbnQ6IHNlcmlhbGl6ZUNvbnN0cmFpbnQodGhpcy5nYW1tYUNvbnN0cmFpbnQpXG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhCYXRjaE5vcm1hbGl6YXRpb24pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExheWVyTm9ybWFsaXphdGlvbkxheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBUaGUgYXhpcyBvciBheGVzIHRoYXQgc2hvdWxkIGJlIG5vcm1hbGl6ZWQgKHR5cGljYWxseSwgdGhlIGZlYXR1cmUgYXhpcykuXG4gICAqIERlZmF1bHRzIHRvIC0xICh0aGUgbGFzdCBheGlzKS5cbiAgICovXG4gIGF4aXM/OiBudW1iZXJ8bnVtYmVyW107XG5cbiAgLyoqXG4gICAqIEEgc21hbGwgcG9zaXRpdmUgZmxvYXQgYWRkZWQgdG8gdmFyaWFuY2UgdG8gYXZvaWQgZGl2aXNpb24gYnkgemVyby5cbiAgICogRGVmYXVsdHMgdG8gMWUtMy5cbiAgICovXG4gIGVwc2lsb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYWRkIG9mZnNldCBvZiBgYmV0YWAgdG8gbm9ybWFsaXplZCB0ZW5zb3IuXG4gICAqIElmIGBmYWxzZWAsIGBiZXRhYCBpcyBpZ25vcmVkLlxuICAgKiBEZWZhdWx0OiBgdHJ1ZWAuXG4gICAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIG11bHRpcGx5IG91dHB1dCBieSBgZ2FtbWFgLlxuICAgKiBJZiBgZmFsc2VgLCBgZ2FtbWFgIGlzIG5vdCB1c2VkLlxuICAgKiBXaGVuIHRoZSBuZXh0IGxheWVyIGlzIGxpbmVhciwgdGhpcyBjYW4gYmUgZGlzYWJsZWQgc2luY2Ugc2NhbGluZyB3aWxsXG4gICAqIGJlIGRvbmUgYnkgdGhlIG5leHQgbGF5ZXIuXG4gICAqIERlZmF1bHQ6IGB0cnVlYC5cbiAgICovXG4gIHNjYWxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXIgZm9yIHRoZSBiZXRhIHdlaWdodC5cbiAgICogRGVmYXVsdDogYCd6ZXJvcydgLlxuICAgKi9cbiAgYmV0YUluaXRpYWxpemVyPzogSW5pdGlhbGl6ZXJJZGVudGlmaWVyfEluaXRpYWxpemVyO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplciBmb3IgdGhlIGdhbW1hIHdlaWdodC5cbiAgICogRGVmYXVsdDogYCdvbmVzJ2AuXG4gICAqL1xuICBnYW1tYUluaXRpYWxpemVyPzogSW5pdGlhbGl6ZXJJZGVudGlmaWVyfEluaXRpYWxpemVyO1xuXG4gIC8qKiBSZWd1bGFyaXplciBmb3IgdGhlIGJldGEgd2VpZ2h0LiAqL1xuICBiZXRhUmVndWxhcml6ZXI/OiBSZWd1bGFyaXplcklkZW50aWZpZXJ8UmVndWxhcml6ZXI7XG5cbiAgLyoqIFJlZ3VsYXJpemVyIGZvciB0aGUgZ2FtbWEgd2VpZ2h0LiAqL1xuICBnYW1tYVJlZ3VsYXJpemVyPzogUmVndWxhcml6ZXJJZGVudGlmaWVyfFJlZ3VsYXJpemVyO1xufVxuXG5leHBvcnQgY2xhc3MgTGF5ZXJOb3JtYWxpemF0aW9uIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdMYXllck5vcm1hbGl6YXRpb24nO1xuXG4gIHByaXZhdGUgYXhpczogbnVtYmVyfG51bWJlcltdO1xuICByZWFkb25seSBlcHNpbG9uOiBudW1iZXI7XG4gIHJlYWRvbmx5IGNlbnRlcjogYm9vbGVhbjtcbiAgcmVhZG9ubHkgc2NhbGU6IGJvb2xlYW47XG4gIHJlYWRvbmx5IGJldGFJbml0aWFsaXplcjogSW5pdGlhbGl6ZXI7XG4gIHJlYWRvbmx5IGdhbW1hSW5pdGlhbGl6ZXI6IEluaXRpYWxpemVyO1xuICByZWFkb25seSBiZXRhUmVndWxhcml6ZXI6IFJlZ3VsYXJpemVyO1xuICByZWFkb25seSBnYW1tYVJlZ3VsYXJpemVyOiBSZWd1bGFyaXplcjtcblxuICBwcml2YXRlIGdhbW1hOiBMYXllclZhcmlhYmxlO1xuICBwcml2YXRlIGJldGE6IExheWVyVmFyaWFibGU7XG5cbiAgY29uc3RydWN0b3IoYXJncz86IExheWVyTm9ybWFsaXphdGlvbkxheWVyQXJncykge1xuICAgIGlmIChhcmdzID09IG51bGwpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICB9XG4gICAgc3VwZXIoYXJncyk7XG5cbiAgICB0aGlzLmF4aXMgPSBhcmdzLmF4aXMgPT0gbnVsbCA/IC0xIDogYXJncy5heGlzO1xuICAgIGlmICh0eXBlb2YgdGhpcy5heGlzID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuYXhpcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEV4cGVjdGVkIGF4aXMgdG8gYmUgYW4gaW50ZWdlciwgYnV0IHJlY2VpdmVkICR7dGhpcy5heGlzfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmF4aXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGF4aXMgb2YgdGhpcy5heGlzKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihheGlzKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYEV4cGVjdGVkIGF4aXMgdG8gYmUgYW4gYXJyYXkgb2YgaW50ZWdlcnMsIGAgK1xuICAgICAgICAgICAgICBgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkodGhpcy5heGlzKX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEV4cGVjdGVkIGF4aXMgdG8gYmUgYW4gaW50ZWdlciBvciBhbiBhcnJheSBvZiBpbnRlZ2VycywgYCArXG4gICAgICAgICAgYGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHRoaXMuYXhpcyl9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5lcHNpbG9uID0gYXJncy5lcHNpbG9uID09IG51bGwgPyAxZS0zIDogYXJncy5lcHNpbG9uO1xuICAgIHRoaXMuY2VudGVyID0gYXJncy5jZW50ZXIgPT0gbnVsbCA/IHRydWUgOiBhcmdzLmNlbnRlcjtcbiAgICB0aGlzLnNjYWxlID0gYXJncy5zY2FsZSA9PSBudWxsID8gdHJ1ZSA6IGFyZ3Muc2NhbGU7XG4gICAgdGhpcy5iZXRhSW5pdGlhbGl6ZXIgPSBnZXRJbml0aWFsaXplcihhcmdzLmJldGFJbml0aWFsaXplciB8fCAnemVyb3MnKTtcbiAgICB0aGlzLmdhbW1hSW5pdGlhbGl6ZXIgPSBnZXRJbml0aWFsaXplcihhcmdzLmdhbW1hSW5pdGlhbGl6ZXIgfHwgJ29uZXMnKTtcbiAgICB0aGlzLmJldGFSZWd1bGFyaXplciA9IGdldFJlZ3VsYXJpemVyKGFyZ3MuYmV0YVJlZ3VsYXJpemVyKTtcbiAgICB0aGlzLmdhbW1hUmVndWxhcml6ZXIgPSBnZXRSZWd1bGFyaXplcihhcmdzLmdhbW1hUmVndWxhcml6ZXIpO1xuXG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGJ1aWxkKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiB2b2lkIHtcbiAgICBpbnB1dFNoYXBlID0gZ2V0RXhhY3RseU9uZVNoYXBlKGlucHV0U2hhcGUpO1xuICAgIGNvbnN0IG5EaW1zID0gaW5wdXRTaGFwZS5sZW5ndGg7XG5cbiAgICAvLyBDb252ZXJ0IGF4aXMgdG8gYXJyYXkgYW5kIHJlc29sdmUgbmVnYXRpdmVzLlxuICAgIGlmICh0eXBlb2YgdGhpcy5heGlzID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5heGlzID0gW3RoaXMuYXhpc107XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5heGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy5heGlzW2ldIDwgMCkge1xuICAgICAgICB0aGlzLmF4aXNbaV0gKz0gbkRpbXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRnVydGhlciB2YWxpZGF0ZSBheGVzLlxuICAgIGZvciAoY29uc3QgYXhpcyBvZiB0aGlzLmF4aXMpIHtcbiAgICAgIGlmIChheGlzIDwgMCB8fCBheGlzID49IG5EaW1zKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBheGlzOiAke2F4aXN9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmF4aXMubGVuZ3RoICE9PSBnZW5lcmljX3V0aWxzLnVuaXF1ZSh0aGlzLmF4aXMpLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGb3VuZCBkdXBsaWNhdGUgYXhlcyBpbjogJHt0aGlzLmF4aXN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1TaGFwZSA9IHRoaXMuYXhpcy5tYXAoYXhpcyA9PiBpbnB1dFNoYXBlW2F4aXNdKSBhcyBudW1iZXJbXTtcblxuICAgIGNvbnN0IHRyYWluYWJsZSA9IHRydWU7XG4gICAgaWYgKHRoaXMuc2NhbGUpIHtcbiAgICAgIHRoaXMuZ2FtbWEgPSB0aGlzLmFkZFdlaWdodChcbiAgICAgICAgICAnZ2FtbWEnLCBwYXJhbVNoYXBlLCAnZmxvYXQzMicsIHRoaXMuZ2FtbWFJbml0aWFsaXplcixcbiAgICAgICAgICB0aGlzLmdhbW1hUmVndWxhcml6ZXIsIHRyYWluYWJsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtbWEgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5jZW50ZXIpIHtcbiAgICAgIHRoaXMuYmV0YSA9IHRoaXMuYWRkV2VpZ2h0KFxuICAgICAgICAgICdiZXRhJywgcGFyYW1TaGFwZSwgJ2Zsb2F0MzInLCB0aGlzLmJldGFJbml0aWFsaXplcixcbiAgICAgICAgICB0aGlzLmJldGFSZWd1bGFyaXplciwgdHJhaW5hYmxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iZXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICBjb25zdCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICBjb25zdCBpbnB1dFNoYXBlID0gaW5wdXQuc2hhcGU7XG4gICAgY29uc3QgbkRpbXMgPSBpbnB1dFNoYXBlLmxlbmd0aDtcblxuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IGtlZXBEaW1zID0gdHJ1ZTtcbiAgICAgIGxldCB7bWVhbiwgdmFyaWFuY2V9ID0gbW9tZW50cyhpbnB1dCwgdGhpcy5heGlzLCBrZWVwRGltcyk7XG4gICAgICBjb25zdCBicm9hZGNhc3RTaGFwZSA9IGdlbmVyaWNfdXRpbHMucHlMaXN0UmVwZWF0KDEsIG5EaW1zKTtcbiAgICAgIGZvciAoY29uc3QgZGltIG9mIHRoaXMuYXhpcyBhcyBudW1iZXJbXSkge1xuICAgICAgICBicm9hZGNhc3RTaGFwZVtkaW1dID0gaW5wdXRTaGFwZVtkaW1dO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBicm9hZGNhc3QgPSAodjogVGVuc29yKSA9PiB7XG4gICAgICAgIGlmICh2ICE9IG51bGwgJiYgdi5zaGFwZS5sZW5ndGggIT09IG5EaW1zKSB7XG4gICAgICAgICAgcmV0dXJuIHRmYy5yZXNoYXBlKHYsIGJyb2FkY2FzdFNoYXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZSA/IGJyb2FkY2FzdCh0aGlzLmdhbW1hLnJlYWQoKSkgOiBudWxsO1xuICAgICAgbGV0IG9mZnNldCA9IHRoaXMuY2VudGVyID8gYnJvYWRjYXN0KHRoaXMuYmV0YS5yZWFkKCkpIDogbnVsbDtcblxuICAgICAgLy8gVE9ETyhodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzL2lzc3Vlcy8yMTIwKTogVGhlIHRpbGluZyBiZWxvd1xuICAgICAgLy8gaXMgYSB3b3JrYXJvdW5kIGZvciB0aGUgbGltaXRhdGlvbiBvZiBjb3JlJ3MgYmF0Y2hOb3JtYWxpemF0aW9uP2QgZG9uJ3RcbiAgICAgIC8vIHN1cHBvcnQgYnJvYWRjYXN0aW5nIGluIHRoZWlyIGdyYWRpZW50cy4gSW4gYWRkaXRpb24sIHRoZSB0aWxpbmcgaXNcbiAgICAgIC8vIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3Mgb24gdGhlIGJyb3dzZXIgQ1BVIGJhY2tlbmQgcmVnYXJkbGVzc1xuICAgICAgLy8gb2YgZm9yd2FyZCBvciBiYWNrd2FyZCBjb21wdXRhdGlvbi4gUmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCBvbmNlIHRoZVxuICAgICAgLy8gbGltaXRhdGlvbiBpcyBhZGRyZXNzZWQuIFNlZSAuXG4gICAgICBjb25zdCBtb21lbnRzVGlsaW5nOiBudW1iZXJbXSA9IFtdO1xuICAgICAgY29uc3Qgc2NhbGVPZmZzZXRUaWxpbmc6IG51bWJlcltdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5EaW1zOyArK2kpIHtcbiAgICAgICAgaWYgKCh0aGlzLmF4aXMgYXMgbnVtYmVyW10pLmluZGV4T2YoaSkgIT09IC0xKSB7XG4gICAgICAgICAgbW9tZW50c1RpbGluZy5wdXNoKGlucHV0U2hhcGVbaV0pO1xuICAgICAgICAgIHNjYWxlT2Zmc2V0VGlsaW5nLnB1c2goMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50c1RpbGluZy5wdXNoKDEpO1xuICAgICAgICAgIHNjYWxlT2Zmc2V0VGlsaW5nLnB1c2goaW5wdXRTaGFwZVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1lYW4gPSB0ZmMudGlsZShtZWFuLCBtb21lbnRzVGlsaW5nKTtcbiAgICAgIHZhcmlhbmNlID0gdGZjLnRpbGUodmFyaWFuY2UsIG1vbWVudHNUaWxpbmcpO1xuICAgICAgaWYgKHNjYWxlICE9IG51bGwpIHtcbiAgICAgICAgc2NhbGUgPSB0ZmMudGlsZShzY2FsZSwgc2NhbGVPZmZzZXRUaWxpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKG9mZnNldCAhPSBudWxsKSB7XG4gICAgICAgIG9mZnNldCA9IHRmYy50aWxlKG9mZnNldCwgc2NhbGVPZmZzZXRUaWxpbmcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmF0Y2hOb3JtYWxpemF0aW9uKFxuICAgICAgICAgIGlucHV0LCBtZWFuLCB2YXJpYW5jZSwgb2Zmc2V0LCBzY2FsZSwgdGhpcy5lcHNpbG9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge1xuICAgICAgYXhpczogdGhpcy5heGlzLFxuICAgICAgZXBzaWxvbjogdGhpcy5lcHNpbG9uLFxuICAgICAgY2VudGVyOiB0aGlzLmNlbnRlcixcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgYmV0YUluaXRpYWxpemVyOiBzZXJpYWxpemVJbml0aWFsaXplcih0aGlzLmJldGFJbml0aWFsaXplciksXG4gICAgICBnYW1tYUluaXRpYWxpemVyOiBzZXJpYWxpemVJbml0aWFsaXplcih0aGlzLmdhbW1hSW5pdGlhbGl6ZXIpLFxuICAgICAgYmV0YVJlZ3VsYXJpemVyOiBzZXJpYWxpemVSZWd1bGFyaXplcih0aGlzLmJldGFSZWd1bGFyaXplciksXG4gICAgICBnYW1tYVJlZ3VsYXJpemVyOiBzZXJpYWxpemVSZWd1bGFyaXplcih0aGlzLmdhbW1hUmVndWxhcml6ZXIpXG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhMYXllck5vcm1hbGl6YXRpb24pO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/padding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Padding Layers.
 */ // Porting Note: In Python Keras, the padding layers are in convolutional.py,
//   but we decided to put them in a separate file (padding.ts) for clarity.
__turbopack_context__.s([
    "ZeroPadding2D",
    ()=>ZeroPadding2D,
    "spatial2dPadding",
    ()=>spatial2dPadding,
    "temporalPadding",
    ()=>temporalPadding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/pad.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
function temporalPadding(x, padding) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (x.rank !== 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`temporalPadding expects input tensor to be 3-D, but received a ` + `${x.rank}-D tensor.`);
        }
        if (padding == null) {
            padding = [
                1,
                1
            ];
        }
        if (padding.length !== 2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`temporalPadding expects input padding pattern to be a length-2 ` + `array, but received a length-${padding.length} array.`);
        }
        const pattern = [
            [
                0,
                0
            ],
            padding,
            [
                0,
                0
            ]
        ];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](x, pattern);
    });
}
function spatial2dPadding(x, padding, dataFormat) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (x.rank !== 4) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`temporalPadding expects input tensor to be 4-D, but received a ` + `${x.rank}-D tensor.`);
        }
        if (padding == null) {
            padding = [
                [
                    1,
                    1
                ],
                [
                    1,
                    1
                ]
            ];
        }
        if (padding.length !== 2 || padding[0].length !== 2 || padding[1].length !== 2) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('spatial2dPadding expects `padding` to be an Array of two Arrays, ' + 'each of which is an Array of two integers.');
        }
        if (dataFormat == null) {
            dataFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageDataFormat"])();
        }
        if (dataFormat !== 'channelsLast' && dataFormat !== 'channelsFirst') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Unknown data format: ${dataFormat}. ` + `Supported data formats are 'channelsLast' and 'channelsFirst.`);
        }
        let pattern;
        if (dataFormat === 'channelsFirst') {
            pattern = [
                [
                    0,
                    0
                ],
                [
                    0,
                    0
                ],
                padding[0],
                padding[1]
            ];
        } else {
            pattern = [
                [
                    0,
                    0
                ],
                padding[0],
                padding[1],
                [
                    0,
                    0
                ]
            ];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](x, pattern);
    });
}
class ZeroPadding2D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        if (args == null) {
            args = {};
        }
        super(args);
        this.dataFormat = args.dataFormat == null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageDataFormat"])() : args.dataFormat;
        // TODO(cais): Maybe refactor the following logic surrounding `padding`
        //   into a helper method.
        if (args.padding == null) {
            this.padding = [
                [
                    1,
                    1
                ],
                [
                    1,
                    1
                ]
            ];
        } else if (typeof args.padding === 'number') {
            this.padding = [
                [
                    args.padding,
                    args.padding
                ],
                [
                    args.padding,
                    args.padding
                ]
            ];
        } else {
            args.padding = args.padding;
            if (args.padding.length !== 2) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`ZeroPadding2D expects padding to be a length-2 array, but ` + `received a length-${args.padding.length} array.`);
            }
            let heightPadding;
            let widthPadding;
            if (typeof args.padding[0] === 'number') {
                heightPadding = [
                    args.padding[0],
                    args.padding[0]
                ];
                widthPadding = [
                    args.padding[1],
                    args.padding[1]
                ];
            } else {
                args.padding = args.padding;
                if (args.padding[0].length !== 2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`ZeroPadding2D expects height padding to be a length-2 array, ` + `but received a length-${args.padding[0].length} array.`);
                }
                heightPadding = args.padding[0];
                if (args.padding[1].length !== 2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`ZeroPadding2D expects width padding to be a length-2 array, ` + `but received a length-${args.padding[1].length} array.`);
                }
                widthPadding = args.padding[1];
            }
            this.padding = [
                heightPadding,
                widthPadding
            ];
        }
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 4
            })
        ];
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        let rows;
        let cols;
        if (this.dataFormat === 'channelsFirst') {
            if (inputShape[2] != null && inputShape[2] >= 0) {
                rows = inputShape[2] + this.padding[0][0] + this.padding[0][1];
            } else {
                rows = null;
            }
            if (inputShape[3] != null && inputShape[3] >= 0) {
                cols = inputShape[3] + this.padding[1][0] + this.padding[1][1];
            } else {
                cols = null;
            }
            return [
                inputShape[0],
                inputShape[1],
                rows,
                cols
            ];
        } else {
            if (inputShape[1] != null && inputShape[1] >= 0) {
                rows = inputShape[1] + this.padding[0][0] + this.padding[0][1];
            } else {
                rows = null;
            }
            if (inputShape[2] != null && inputShape[2] >= 0) {
                cols = inputShape[2] + this.padding[1][0] + this.padding[1][1];
            } else {
                cols = null;
            }
            return [
                inputShape[0],
                rows,
                cols,
                inputShape[3]
            ];
        }
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>spatial2dPadding((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), this.padding, this.dataFormat));
    }
    getConfig() {
        const config = {
            padding: this.padding,
            dataFormat: this.dataFormat
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
/** @nocollapse */ ZeroPadding2D.className = 'ZeroPadding2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(ZeroPadding2D); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvcGFkZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUgsNkVBQTZFO0FBQzdFLDRFQUE0RTtBQUU1RSxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQVUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFbEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUdyQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxDQUFTLEVBQUUsT0FBMEI7SUFDbkUsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNoQixNQUFNLElBQUksVUFBVSxDQUNoQixpRUFBaUU7Z0JBQ2pFLEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QixNQUFNLElBQUksVUFBVSxDQUNoQixpRUFBaUU7Z0JBQ2pFLGdDQUFnQyxPQUFPLENBQUMsTUFBTSxTQUFTLENBQUMsQ0FBQztTQUM5RDtRQUVELE1B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LENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxPQUFPLElBQUksQ0FDUCxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FDbEIsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVEsU0FBUztRQUNoQixNQUFNLE1BQU0sR0FBNkI7WUFDdkMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDO1FBQ0YsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0FBckdELGtCQUFrQjtBQUNYLHVCQUFTLEdBQUcsZUFBZSxDQUFDO1NBRnhCLGFBQWE7QUF3RzFCLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIFBhZGRpbmcgTGF5ZXJzLlxuICovXG5cbi8vIFBvcnRpbmcgTm90ZTogSW4gUHl0aG9uIEtlcmFzLCB0aGUgcGFkZGluZyBsYXllcnMgYXJlIGluIGNvbnZvbHV0aW9uYWwucHksXG4vLyAgIGJ1dCB3ZSBkZWNpZGVkIHRvIHB1dCB0aGVtIGluIGEgc2VwYXJhdGUgZmlsZSAocGFkZGluZy50cykgZm9yIGNsYXJpdHkuXG5cbmltcG9ydCAqIGFzIHRmYyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtzZXJpYWxpemF0aW9uLCBUZW5zb3IsIHRpZHl9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7aW1hZ2VEYXRhRm9ybWF0fSBmcm9tICcuLi9iYWNrZW5kL2NvbW1vbic7XG5pbXBvcnQge0lucHV0U3BlYywgTGF5ZXIsIExheWVyQXJnc30gZnJvbSAnLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7VmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7RGF0YUZvcm1hdCwgU2hhcGV9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtLd2FyZ3N9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7Z2V0RXhhY3RseU9uZVNoYXBlLCBnZXRFeGFjdGx5T25lVGVuc29yfSBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5cbi8qKlxuICogUGFkcyB0aGUgbWlkZGxlIGRpbWVuc2lvbiBvZiBhIDNEIHRlbnNvci5cbiAqXG4gKiBAcGFyYW0geCBJbnB1dCBgdGYuVGVuc29yYCB0byBiZSBwYWRkZWQuXG4gKiBAcGFyYW0gcGFkZGluZyBgQXJyYXlgIG9mIDIgaW50ZWdlcnMsIGhvdyBtYW55IHplcm9zIHRvIGFkZCBhdCB0aGUgc3RhcnQgYW5kXG4gKiAgIGVuZCBvZiB0aGUgbWlkZGxlIGRpbWVuc2lvbiAoaS5lLiwgZGltZW5zaW9uIDEpLlxuICogQHJldHVybiBBIHBhZGRlZCAzRCBgdGYuVGVuc29yYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBvcmFsUGFkZGluZyh4OiBUZW5zb3IsIHBhZGRpbmc/OiBbbnVtYmVyLCBudW1iZXJdKTogVGVuc29yIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgIGlmICh4LnJhbmsgIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGB0ZW1wb3JhbFBhZGRpbmcgZXhwZWN0cyBpbnB1dCB0ZW5zb3IgdG8gYmUgMy1ELCBidXQgcmVjZWl2ZWQgYSBgICtcbiAgICAgICAgICBgJHt4LnJhbmt9LUQgdGVuc29yLmApO1xuICAgIH1cblxuICAgIGlmIChwYWRkaW5nID09IG51bGwpIHtcbiAgICAgIHBhZGRpbmcgPSBbMSwgMV07XG4gICAgfVxuICAgIGlmIChwYWRkaW5nLmxlbmd0aCAhPT0gMikge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYHRlbXBvcmFsUGFkZGluZyBleHBlY3RzIGlucHV0IHBhZGRpbmcgcGF0dGVybiB0byBiZSBhIGxlbmd0aC0yIGAgK1xuICAgICAgICAgIGBhcnJheSwgYnV0IHJlY2VpdmVkIGEgbGVuZ3RoLSR7cGFkZGluZy5sZW5ndGh9IGFycmF5LmApO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdHRlcm46IEFycmF5PFtudW1iZXIsIG51bWJlcl0+ID0gW1swLCAwXSwgcGFkZGluZywgWzAsIDBdXTtcbiAgICByZXR1cm4gdGZjLnBhZCh4LCBwYXR0ZXJuKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUGFkcyB0aGUgMm5kIGFuZCAzcmQgZGltZW5zaW9ucyBvZiBhIDREIHRlbnNvci5cbiAqXG4gKiBAcGFyYW0geCBJbnB1dCBgdGYuVGVuc29yYCB0byBiZSBwYWRkZWQuXG4gKiBAcGFyYW0gcGFkZGluZyBgQXJyYXlgIG9mIHR3byBgQXJyYXlgcywgZWFjaCBvZiB3aGljaCBpcyBhbiBgQXJyYXlgIG9mIHR3b1xuICogICBpbnRlZ2Vycy4gVGhlIGFtb3VudCBvZiBwYWRkaW5nIGF0IHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0aGUgMm5kIGFuZCAzcmRcbiAqICAgZGltZW5zaW9ucywgcmVzcGVjdGl2ZWx5LlxuICogQHBhcmFtIGRhdGFGb3JtYXQgJ2NoYW5uZWxzTGFzdCcgKGRlZmF1bHQpIG9yICdjaGFubmVsc0ZpcnN0Jy5cbiAqIEByZXR1cm4gUGFkZGVkIDREIGB0Zi5UZW5zb3JgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BhdGlhbDJkUGFkZGluZyhcbiAgICB4OiBUZW5zb3IsIHBhZGRpbmc/OiBbW251bWJlciwgbnVtYmVyXSwgW251bWJlciwgbnVtYmVyXV0sXG4gICAgZGF0YUZvcm1hdD86IERhdGFGb3JtYXQpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKHgucmFuayAhPT0gNCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYHRlbXBvcmFsUGFkZGluZyBleHBlY3RzIGlucHV0IHRlbnNvciB0byBiZSA0LUQsIGJ1dCByZWNlaXZlZCBhIGAgK1xuICAgICAgICAgIGAke3gucmFua30tRCB0ZW5zb3IuYCk7XG4gICAgfVxuXG4gICAgaWYgKHBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgcGFkZGluZyA9IFtbMSwgMV0sIFsxLCAxXV07XG4gICAgfVxuICAgIGlmIChwYWRkaW5nLmxlbmd0aCAhPT0gMiB8fCBwYWRkaW5nWzBdLmxlbmd0aCAhPT0gMiB8fFxuICAgICAgICBwYWRkaW5nWzFdLmxlbmd0aCAhPT0gMikge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgJ3NwYXRpYWwyZFBhZGRpbmcgZXhwZWN0cyBgcGFkZGluZ2AgdG8gYmUgYW4gQXJyYXkgb2YgdHdvIEFycmF5cywgJyArXG4gICAgICAgICAgJ2VhY2ggb2Ygd2hpY2ggaXMgYW4gQXJyYXkgb2YgdHdvIGludGVnZXJzLicpO1xuICAgIH1cblxuICAgIGlmIChkYXRhRm9ybWF0ID09IG51bGwpIHtcbiAgICAgIGRhdGFGb3JtYXQgPSBpbWFnZURhdGFGb3JtYXQoKTtcbiAgICB9XG4gICAgaWYgKGRhdGFGb3JtYXQgIT09ICdjaGFubmVsc0xhc3QnICYmIGRhdGFGb3JtYXQgIT09ICdjaGFubmVsc0ZpcnN0Jykge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYFVua25vd24gZGF0YSBmb3JtYXQ6ICR7ZGF0YUZvcm1hdH0uIGAgK1xuICAgICAgICAgIGBTdXBwb3J0ZWQgZGF0YSBmb3JtYXRzIGFyZSAnY2hhbm5lbHNMYXN0JyBhbmQgJ2NoYW5uZWxzRmlyc3QuYCk7XG4gICAgfVxuXG4gICAgbGV0IHBhdHRlcm46IEFycmF5PFtudW1iZXIsIG51bWJlcl0+O1xuICAgIGlmIChkYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcpIHtcbiAgICAgIHBhdHRlcm4gPSBbWzAsIDBdLCBbMCwgMF0sIHBhZGRpbmdbMF0sIHBhZGRpbmdbMV1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXR0ZXJuID0gW1swLCAwXSwgcGFkZGluZ1swXSwgcGFkZGluZ1sxXSwgWzAsIDBdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGZjLnBhZCh4LCBwYXR0ZXJuKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBaZXJvUGFkZGluZzJETGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqXG4gICAqIEludGVnZXIsIG9yIGBBcnJheWAgb2YgMiBpbnRlZ2Vycywgb3IgYEFycmF5YCBvZiAyIGBBcnJheWBzLCBlYWNoIG9mXG4gICAqIHdoaWNoIGlzIGFuIGBBcnJheWAgb2YgMiBpbnRlZ2Vycy5cbiAgICogLSBJZiBpbnRlZ2VyLCB0aGUgc2FtZSBzeW1tZXRyaWMgcGFkZGluZyBpcyBhcHBsaWVkIHRvIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAqIC0gSWYgYEFycmF5YCBvZiAyIGludGVnZXJzLCBpbnRlcnByZXRlZCBhcyB0d28gZGlmZmVyZW50IHN5bW1ldHJpYyB2YWx1ZXNcbiAgICogICBmb3IgaGVpZ2h0IGFuZCB3aWR0aDpcbiAgICogICBgW3N5bW1ldHJpY0hlaWdodFBhZCwgc3ltbWV0cmljV2lkdGhQYWRdYC5cbiAgICogLSBJZiBgQXJyYXlgIG9mIDIgYEFycmF5YHMsIGludGVycHJldGVkIGFzOlxuICAgKiAgIGBbW3RvcFBhZCwgYm90dG9tUGFkXSwgW2xlZnRQYWQsIHJpZ2h0UGFkXV1gLlxuICAgKi9cbiAgcGFkZGluZz86IG51bWJlcnxbbnVtYmVyLCBudW1iZXJdfFtbbnVtYmVyLCBudW1iZXJdLCBbbnVtYmVyLCBudW1iZXJdXTtcblxuICAvKipcbiAgICogT25lIG9mIGAnY2hhbm5lbHNMYXN0J2AgKGRlZmF1bHQpIGFuZCBgJ2NoYW5uZWxzRmlyc3QnYC5cbiAgICpcbiAgICogVGhlIG9yZGVyaW5nIG9mIHRoZSBkaW1lbnNpb25zIGluIHRoZSBpbnB1dHMuXG4gICAqIGBjaGFubmVsc0xhc3RgIGNvcnJlc3BvbmRzIHRvIGlucHV0cyB3aXRoIHNoYXBlXG4gICAqIGBbYmF0Y2gsIGhlaWdodCwgd2lkdGgsIGNoYW5uZWxzXWAgd2hpbGUgYGNoYW5uZWxzRmlyc3RgXG4gICAqIGNvcnJlc3BvbmRzIHRvIGlucHV0cyB3aXRoIHNoYXBlXG4gICAqIGBbYmF0Y2gsIGNoYW5uZWxzLCBoZWlnaHQsIHdpZHRoXWAuXG4gICAqL1xuICBkYXRhRm9ybWF0PzogRGF0YUZvcm1hdDtcbn1cblxuZXhwb3J0IGNsYXNzIFplcm9QYWRkaW5nMkQgZXh0ZW5kcyBMYXllciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ1plcm9QYWRkaW5nMkQnO1xuICByZWFkb25seSBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0O1xuICByZWFkb25seSBwYWRkaW5nOiBbW251bWJlciwgbnVtYmVyXSwgW251bWJlciwgbnVtYmVyXV07XG5cbiAgY29uc3RydWN0b3IoYXJncz86IFplcm9QYWRkaW5nMkRMYXllckFyZ3MpIHtcbiAgICBpZiAoYXJncyA9PSBudWxsKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgfVxuICAgIHN1cGVyKGFyZ3MpO1xuXG4gICAgdGhpcy5kYXRhRm9ybWF0ID1cbiAgICAgICAgYXJncy5kYXRhRm9ybWF0ID09IG51bGwgPyBpbWFnZURhdGFGb3JtYXQoKSA6IGFyZ3MuZGF0YUZvcm1hdDtcbiAgICAvLyBUT0RPKGNhaXMpOiBNYXliZSByZWZhY3RvciB0aGUgZm9sbG93aW5nIGxvZ2ljIHN1cnJvdW5kaW5nIGBwYWRkaW5nYFxuICAgIC8vICAgaW50byBhIGhlbHBlciBtZXRob2QuXG4gICAgaWYgKGFyZ3MucGFkZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLnBhZGRpbmcgPSBbWzEsIDFdLCBbMSwgMV1dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3MucGFkZGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMucGFkZGluZyA9XG4gICAgICAgICAgW1thcmdzLnBhZGRpbmcsIGFyZ3MucGFkZGluZ10sIFthcmdzLnBhZGRpbmcsIGFyZ3MucGFkZGluZ11dO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnBhZGRpbmcgPSBhcmdzLnBhZGRpbmc7XG4gICAgICBpZiAoYXJncy5wYWRkaW5nLmxlbmd0aCAhPT0gMikge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBaZXJvUGFkZGluZzJEIGV4cGVjdHMgcGFkZGluZyB0byBiZSBhIGxlbmd0aC0yIGFycmF5LCBidXQgYCArXG4gICAgICAgICAgICBgcmVjZWl2ZWQgYSBsZW5ndGgtJHthcmdzLnBhZGRpbmcubGVuZ3RofSBhcnJheS5gKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGhlaWdodFBhZGRpbmc6IFtudW1iZXIsIG51bWJlcl07XG4gICAgICBsZXQgd2lkdGhQYWRkaW5nOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzLnBhZGRpbmdbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSBbYXJncy5wYWRkaW5nWzBdLCBhcmdzLnBhZGRpbmdbMF1dO1xuICAgICAgICB3aWR0aFBhZGRpbmcgPSBbYXJncy5wYWRkaW5nWzFdIGFzIG51bWJlciwgYXJncy5wYWRkaW5nWzFdIGFzIG51bWJlcl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzLnBhZGRpbmcgPSBhcmdzLnBhZGRpbmcgYXMgW1tudW1iZXIsIG51bWJlcl0sIFtudW1iZXIsIG51bWJlcl1dO1xuXG4gICAgICAgIGlmIChhcmdzLnBhZGRpbmdbMF0ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGBaZXJvUGFkZGluZzJEIGV4cGVjdHMgaGVpZ2h0IHBhZGRpbmcgdG8gYmUgYSBsZW5ndGgtMiBhcnJheSwgYCArXG4gICAgICAgICAgICAgIGBidXQgcmVjZWl2ZWQgYSBsZW5ndGgtJHthcmdzLnBhZGRpbmdbMF0ubGVuZ3RofSBhcnJheS5gKTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gYXJncy5wYWRkaW5nWzBdIGFzIFtudW1iZXIsIG51bWJlcl07XG5cbiAgICAgICAgaWYgKGFyZ3MucGFkZGluZ1sxXS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgYFplcm9QYWRkaW5nMkQgZXhwZWN0cyB3aWR0aCBwYWRkaW5nIHRvIGJlIGEgbGVuZ3RoLTIgYXJyYXksIGAgK1xuICAgICAgICAgICAgICBgYnV0IHJlY2VpdmVkIGEgbGVuZ3RoLSR7YXJncy5wYWRkaW5nWzFdLmxlbmd0aH0gYXJyYXkuYCk7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGhQYWRkaW5nID0gYXJncy5wYWRkaW5nWzFdIGFzIFtudW1iZXIsIG51bWJlcl07XG4gICAgICB9XG4gICAgICB0aGlzLnBhZGRpbmcgPSBbaGVpZ2h0UGFkZGluZywgd2lkdGhQYWRkaW5nXTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dFNwZWMgPSBbbmV3IElucHV0U3BlYyh7bmRpbTogNH0pXTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNvbXB1dGVPdXRwdXRTaGFwZShpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogU2hhcGV8U2hhcGVbXSB7XG4gICAgaW5wdXRTaGFwZSA9IGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcblxuICAgIGxldCByb3dzOiBudW1iZXI7XG4gICAgbGV0IGNvbHM6IG51bWJlcjtcbiAgICBpZiAodGhpcy5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcpIHtcbiAgICAgIGlmIChpbnB1dFNoYXBlWzJdICE9IG51bGwgJiYgaW5wdXRTaGFwZVsyXSA+PSAwKSB7XG4gICAgICAgIHJvd3MgPSBpbnB1dFNoYXBlWzJdICsgdGhpcy5wYWRkaW5nWzBdWzBdICsgdGhpcy5wYWRkaW5nWzBdWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm93cyA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRTaGFwZVszXSAhPSBudWxsICYmIGlucHV0U2hhcGVbM10gPj0gMCkge1xuICAgICAgICBjb2xzID0gaW5wdXRTaGFwZVszXSArIHRoaXMucGFkZGluZ1sxXVswXSArIHRoaXMucGFkZGluZ1sxXVsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHMgPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtpbnB1dFNoYXBlWzBdLCBpbnB1dFNoYXBlWzFdLCByb3dzLCBjb2xzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlucHV0U2hhcGVbMV0gIT0gbnVsbCAmJiBpbnB1dFNoYXBlWzFdID49IDApIHtcbiAgICAgICAgcm93cyA9IGlucHV0U2hhcGVbMV0gKyB0aGlzLnBhZGRpbmdbMF1bMF0gKyB0aGlzLnBhZGRpbmdbMF1bMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3dzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dFNoYXBlWzJdICE9IG51bGwgJiYgaW5wdXRTaGFwZVsyXSA+PSAwKSB7XG4gICAgICAgIGNvbHMgPSBpbnB1dFNoYXBlWzJdICsgdGhpcy5wYWRkaW5nWzFdWzBdICsgdGhpcy5wYWRkaW5nWzFdWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29scyA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIHJvd3MsIGNvbHMsIGlucHV0U2hhcGVbM11dO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGlkeShcbiAgICAgICAgKCkgPT4gc3BhdGlhbDJkUGFkZGluZyhcbiAgICAgICAgICAgIGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKSwgdGhpcy5wYWRkaW5nLCB0aGlzLmRhdGFGb3JtYXQpKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge1xuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgZGF0YUZvcm1hdDogdGhpcy5kYXRhRm9ybWF0LFxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoWmVyb1BhZGRpbmcyRCk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/pooling.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * TensorFlow.js Layers: Pooling Layers.
 */ __turbopack_context__.s([
    "AveragePooling1D",
    ()=>AveragePooling1D,
    "AveragePooling2D",
    ()=>AveragePooling2D,
    "AveragePooling3D",
    ()=>AveragePooling3D,
    "GlobalAveragePooling1D",
    ()=>GlobalAveragePooling1D,
    "GlobalAveragePooling2D",
    ()=>GlobalAveragePooling2D,
    "GlobalMaxPooling1D",
    ()=>GlobalMaxPooling1D,
    "GlobalMaxPooling2D",
    ()=>GlobalMaxPooling2D,
    "GlobalPooling1D",
    ()=>GlobalPooling1D,
    "GlobalPooling2D",
    ()=>GlobalPooling2D,
    "MaxPooling1D",
    ()=>MaxPooling1D,
    "MaxPooling2D",
    ()=>MaxPooling2D,
    "MaxPooling3D",
    ()=>MaxPooling3D,
    "Pooling1D",
    ()=>Pooling1D,
    "Pooling2D",
    ()=>Pooling2D,
    "Pooling3D",
    ()=>Pooling3D,
    "pool2d",
    ()=>pool2d,
    "pool3d",
    ()=>pool3d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$squeeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/squeeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mean.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/max.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$avg_pool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/avg_pool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max_pool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/max_pool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/transpose.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$avg_pool_3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/avg_pool_3d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max_pool_3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/max_pool_3d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/conv_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$convolutional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/convolutional.js [app-client] (ecmascript)");
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
function pool2d(x, poolSize, strides, padding, dataFormat, poolMode) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPoolMode"])(poolMode);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        if (strides == null) {
            strides = [
                1,
                1
            ];
        }
        if (padding == null) {
            padding = 'valid';
        }
        if (dataFormat == null) {
            dataFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageDataFormat"])();
        }
        if (poolMode == null) {
            poolMode = 'max';
        }
        // TODO(cais): Remove the preprocessing step once deeplearn.js supports
        // dataFormat as an input argument.
        x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$convolutional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preprocessConv2DInput"])(x, dataFormat); // x is NHWC after preprocessing.
        let y;
        const paddingString = padding === 'same' ? 'same' : 'valid';
        if (poolMode === 'max') {
            // TODO(cais): Rank check?
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max_pool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](x, poolSize, strides, paddingString);
        } else {
            // TODO(cais): Check the dtype and rank of x and give clear error message
            //   if those are incorrect.
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$avg_pool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgPool"](// TODO(cais): Rank check?
            x, poolSize, strides, paddingString);
        }
        if (dataFormat === 'channelsFirst') {
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](y, [
                0,
                3,
                1,
                2
            ]); // NHWC -> NCHW.
        }
        return y;
    });
}
function pool3d(x, poolSize, strides, padding, dataFormat, poolMode) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPoolMode"])(poolMode);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        if (strides == null) {
            strides = [
                1,
                1,
                1
            ];
        }
        if (padding == null) {
            padding = 'valid';
        }
        if (dataFormat == null) {
            dataFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageDataFormat"])();
        }
        if (poolMode == null) {
            poolMode = 'max';
        }
        // x is NDHWC after preprocessing.
        x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$convolutional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preprocessConv3DInput"])(x, dataFormat);
        let y;
        const paddingString = padding === 'same' ? 'same' : 'valid';
        if (poolMode === 'max') {
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max_pool_3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool3d"](x, poolSize, strides, paddingString);
        } else {
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$avg_pool_3d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgPool3d"](x, poolSize, strides, paddingString);
        }
        if (dataFormat === 'channelsFirst') {
            y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$transpose$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](y, [
                0,
                4,
                1,
                2,
                3
            ]); // NDHWC -> NCDHW.
        }
        return y;
    });
}
class Pooling1D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    /**
     *
     * @param args Parameters for the Pooling layer.
     *
     * config.poolSize defaults to 2.
     */ constructor(args){
        if (args.poolSize == null) {
            args.poolSize = 2;
        }
        super(args);
        if (typeof args.poolSize === 'number') {
            this.poolSize = [
                args.poolSize
            ];
        } else if (Array.isArray(args.poolSize) && args.poolSize.length === 1 && typeof args.poolSize[0] === 'number') {
            this.poolSize = args.poolSize;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`poolSize for 1D convolutional layer must be a number or an ` + `Array of a single number, but received ` + `${JSON.stringify(args.poolSize)}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.poolSize, 'poolSize');
        if (args.strides == null) {
            this.strides = this.poolSize;
        } else {
            if (typeof args.strides === 'number') {
                this.strides = [
                    args.strides
                ];
            } else if (Array.isArray(args.strides) && args.strides.length === 1 && typeof args.strides[0] === 'number') {
                this.strides = args.strides;
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`strides for 1D convolutional layer must be a number or an ` + `Array of a single number, but received ` + `${JSON.stringify(args.strides)}`);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.strides, 'strides');
        this.padding = args.padding == null ? 'valid' : args.padding;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(this.padding);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 3
            })
        ];
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(inputShape[1], this.poolSize[0], this.padding, this.strides[0]);
        return [
            inputShape[0],
            length,
            inputShape[2]
        ];
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            // Add dummy last dimension.
            inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), 2);
            const output = this.poolingFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), [
                this.poolSize[0],
                1
            ], [
                this.strides[0],
                1
            ], this.padding, 'channelsLast');
            // Remove dummy last dimension.
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$squeeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["squeeze"](output, [
                2
            ]);
        });
    }
    getConfig() {
        const config = {
            poolSize: this.poolSize,
            padding: this.padding,
            strides: this.strides
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
class MaxPooling1D extends Pooling1D {
    constructor(args){
        super(args);
    }
    poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'max');
    }
}
/** @nocollapse */ MaxPooling1D.className = 'MaxPooling1D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(MaxPooling1D);
class AveragePooling1D extends Pooling1D {
    constructor(args){
        super(args);
    }
    poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'avg');
    }
}
/** @nocollapse */ AveragePooling1D.className = 'AveragePooling1D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(AveragePooling1D);
class Pooling2D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        if (args.poolSize == null) {
            args.poolSize = [
                2,
                2
            ];
        }
        super(args);
        this.poolSize = Array.isArray(args.poolSize) ? args.poolSize : [
            args.poolSize,
            args.poolSize
        ];
        if (args.strides == null) {
            this.strides = this.poolSize;
        } else if (Array.isArray(args.strides)) {
            if (args.strides.length !== 2) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`If the strides property of a 2D pooling layer is an Array, ` + `it is expected to have a length of 2, but received length ` + `${args.strides.length}.`);
            }
            this.strides = args.strides;
        } else {
            // `config.strides` is a number.
            this.strides = [
                args.strides,
                args.strides
            ];
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.poolSize, 'poolSize');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.strides, 'strides');
        this.padding = args.padding == null ? 'valid' : args.padding;
        this.dataFormat = args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(this.dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(this.padding);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 4
            })
        ];
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        let rows = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
        let cols = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
        rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(rows, this.poolSize[0], this.padding, this.strides[0]);
        cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(cols, this.poolSize[1], this.padding, this.strides[1]);
        if (this.dataFormat === 'channelsFirst') {
            return [
                inputShape[0],
                inputShape[1],
                rows,
                cols
            ];
        } else {
            return [
                inputShape[0],
                rows,
                cols,
                inputShape[3]
            ];
        }
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            return this.poolingFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), this.poolSize, this.strides, this.padding, this.dataFormat);
        });
    }
    getConfig() {
        const config = {
            poolSize: this.poolSize,
            padding: this.padding,
            strides: this.strides,
            dataFormat: this.dataFormat
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
class MaxPooling2D extends Pooling2D {
    constructor(args){
        super(args);
    }
    poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'max');
    }
}
/** @nocollapse */ MaxPooling2D.className = 'MaxPooling2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(MaxPooling2D);
class AveragePooling2D extends Pooling2D {
    constructor(args){
        super(args);
    }
    poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        return pool2d(inputs, poolSize, strides, padding, dataFormat, 'avg');
    }
}
/** @nocollapse */ AveragePooling2D.className = 'AveragePooling2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(AveragePooling2D);
class Pooling3D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        if (args.poolSize == null) {
            args.poolSize = [
                2,
                2,
                2
            ];
        }
        super(args);
        this.poolSize = Array.isArray(args.poolSize) ? args.poolSize : [
            args.poolSize,
            args.poolSize,
            args.poolSize
        ];
        if (args.strides == null) {
            this.strides = this.poolSize;
        } else if (Array.isArray(args.strides)) {
            if (args.strides.length !== 3) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`If the strides property of a 3D pooling layer is an Array, ` + `it is expected to have a length of 3, but received length ` + `${args.strides.length}.`);
            }
            this.strides = args.strides;
        } else {
            // `config.strides` is a number.
            this.strides = [
                args.strides,
                args.strides,
                args.strides
            ];
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.poolSize, 'poolSize');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPositiveInteger"])(this.strides, 'strides');
        this.padding = args.padding == null ? 'valid' : args.padding;
        this.dataFormat = args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(this.dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(this.padding);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 5
            })
        ];
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        let depths = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
        let rows = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
        let cols = this.dataFormat === 'channelsFirst' ? inputShape[4] : inputShape[3];
        depths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(depths, this.poolSize[0], this.padding, this.strides[0]);
        rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(rows, this.poolSize[1], this.padding, this.strides[1]);
        cols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$conv_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convOutputLength"])(cols, this.poolSize[2], this.padding, this.strides[2]);
        if (this.dataFormat === 'channelsFirst') {
            return [
                inputShape[0],
                inputShape[1],
                depths,
                rows,
                cols
            ];
        } else {
            return [
                inputShape[0],
                depths,
                rows,
                cols,
                inputShape[4]
            ];
        }
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.invokeCallHook(inputs, kwargs);
            return this.poolingFunction((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs), this.poolSize, this.strides, this.padding, this.dataFormat);
        });
    }
    getConfig() {
        const config = {
            poolSize: this.poolSize,
            padding: this.padding,
            strides: this.strides,
            dataFormat: this.dataFormat
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
class MaxPooling3D extends Pooling3D {
    constructor(args){
        super(args);
    }
    poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        return pool3d(inputs, poolSize, strides, padding, dataFormat, 'max');
    }
}
/** @nocollapse */ MaxPooling3D.className = 'MaxPooling3D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(MaxPooling3D);
class AveragePooling3D extends Pooling3D {
    constructor(args){
        super(args);
    }
    poolingFunction(inputs, poolSize, strides, padding, dataFormat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPaddingMode"])(padding);
        return pool3d(inputs, poolSize, strides, padding, dataFormat, 'avg');
    }
}
/** @nocollapse */ AveragePooling3D.className = 'AveragePooling3D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(AveragePooling3D);
class GlobalPooling1D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 3
            })
        ];
    }
    computeOutputShape(inputShape) {
        return [
            inputShape[0],
            inputShape[2]
        ];
    }
    call(inputs, kwargs) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]();
    }
}
class GlobalAveragePooling1D extends GlobalPooling1D {
    constructor(args){
        super(args || {});
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mean"](input, 1);
        });
    }
}
/** @nocollapse */ GlobalAveragePooling1D.className = 'GlobalAveragePooling1D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GlobalAveragePooling1D);
class GlobalMaxPooling1D extends GlobalPooling1D {
    constructor(args){
        super(args || {});
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](input, 1);
        });
    }
}
/** @nocollapse */ GlobalMaxPooling1D.className = 'GlobalMaxPooling1D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GlobalMaxPooling1D);
class GlobalPooling2D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.dataFormat = args.dataFormat == null ? 'channelsLast' : args.dataFormat;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDataFormat"])(this.dataFormat);
        this.inputSpec = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                ndim: 4
            })
        ];
    }
    computeOutputShape(inputShape) {
        inputShape = inputShape;
        if (this.dataFormat === 'channelsLast') {
            return [
                inputShape[0],
                inputShape[3]
            ];
        } else {
            return [
                inputShape[0],
                inputShape[1]
            ];
        }
    }
    call(inputs, kwargs) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]();
    }
    getConfig() {
        const config = {
            dataFormat: this.dataFormat
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
class GlobalAveragePooling2D extends GlobalPooling2D {
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (this.dataFormat === 'channelsLast') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mean"](input, [
                    1,
                    2
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mean"](input, [
                    2,
                    3
                ]);
            }
        });
    }
}
/** @nocollapse */ GlobalAveragePooling2D.className = 'GlobalAveragePooling2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GlobalAveragePooling2D);
class GlobalMaxPooling2D extends GlobalPooling2D {
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (this.dataFormat === 'channelsLast') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](input, [
                    1,
                    2
                ]);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](input, [
                    2,
                    3
                ]);
            }
        });
    }
}
/** @nocollapse */ GlobalMaxPooling2D.className = 'GlobalMaxPooling2D';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GlobalMaxPooling2D); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9vbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvcG9vbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUgsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUF3QyxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxLQUFLLENBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFDLEtBQUssRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHMUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFFLHFCQUFxQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0U7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLE1BQU0sQ0FDbEIsQ0FBUyxFQUFFLFFBQTBCLEVBQUUsT0FBMEIsRUFDakUsT0FBcUIsRUFBRSxVQUF1QixFQUM5QyxRQUFtQjtJQUNyQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDZixlQUFlLENBQUMsVUFB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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBWkQsa0JBQWtCO0FBQ1gsZ0NBQVMsR0FBRyx3QkFBd0IsQ0FBQztTQUZqQyxzQkFBc0I7QUFlbkMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRXBELE1BQWEsa0JBQW1CLFNBQVEsZUFBZTtJQUk1QyxJQUFJLENBQUMsTUFBdUIsRUFBRSxNQUFjO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNmLE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLEVBQUU7Z0JBQ3RDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBWkQsa0JBQWtCO0FBQ1gsNEJBQVMsR0FBRyxvQkFBb0IsQ0FBQztTQUY3QixrQkFBa0I7QUFlL0IsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBUZW5zb3JGbG93LmpzIExheWVyczogUG9vbGluZyBMYXllcnMuXG4gKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge3NlcmlhbGl6YXRpb24sIFRlbnNvciwgVGVuc29yM0QsIFRlbnNvcjRELCBUZW5zb3I1RCwgdGlkeX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtpbWFnZURhdGFGb3JtYXR9IGZyb20gJy4uL2JhY2tlbmQvY29tbW9uJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuaW1wb3J0IHtjaGVja0RhdGFGb3JtYXQsIGNoZWNrUGFkZGluZ01vZGUsIGNoZWNrUG9vbE1vZGV9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQge0lucHV0U3BlY30gZnJvbSAnLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7TGF5ZXIsIExheWVyQXJnc30gZnJvbSAnLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7Tm90SW1wbGVtZW50ZWRFcnJvciwgVmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7RGF0YUZvcm1hdCwgUGFkZGluZ01vZGUsIFBvb2xNb2RlLCBTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge0t3YXJnc30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtjb252T3V0cHV0TGVuZ3RofSBmcm9tICcuLi91dGlscy9jb252X3V0aWxzJztcbmltcG9ydCB7YXNzZXJ0UG9zaXRpdmVJbnRlZ2VyfSBmcm9tICcuLi91dGlscy9nZW5lcmljX3V0aWxzJztcbmltcG9ydCB7Z2V0RXhhY3RseU9uZVNoYXBlLCBnZXRFeGFjdGx5T25lVGVuc29yfSBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5cbmltcG9ydCB7cHJlcHJvY2Vzc0NvbnYyRElucHV0LCBwcmVwcm9jZXNzQ29udjNESW5wdXR9IGZyb20gJy4vY29udm9sdXRpb25hbCc7XG5cbi8qKlxuICogMkQgcG9vbGluZy5cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0gcG9vbFNpemVcbiAqIEBwYXJhbSBzdHJpZGVzIHN0cmlkZXMuIERlZmF1bHRzIHRvIFsxLCAxXS5cbiAqIEBwYXJhbSBwYWRkaW5nIHBhZGRpbmcuIERlZmF1bHRzIHRvICd2YWxpZCcuXG4gKiBAcGFyYW0gZGF0YUZvcm1hdCBkYXRhIGZvcm1hdC4gRGVmYXVsdHMgdG8gJ2NoYW5uZWxzTGFzdCcuXG4gKiBAcGFyYW0gcG9vbE1vZGUgTW9kZSBvZiBwb29saW5nLiBEZWZhdWx0cyB0byAnbWF4Jy5cbiAqIEByZXR1cm5zIFJlc3VsdCBvZiB0aGUgMkQgcG9vbGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvb2wyZChcbiAgICB4OiBUZW5zb3IsIHBvb2xTaXplOiBbbnVtYmVyLCBudW1iZXJdLCBzdHJpZGVzPzogW251bWJlciwgbnVtYmVyXSxcbiAgICBwYWRkaW5nPzogUGFkZGluZ01vZGUsIGRhdGFGb3JtYXQ/OiBEYXRhRm9ybWF0LFxuICAgIHBvb2xNb2RlPzogUG9vbE1vZGUpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUG9vbE1vZGUocG9vbE1vZGUpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUocGFkZGluZyk7XG4gICAgaWYgKHN0cmlkZXMgPT0gbnVsbCkge1xuICAgICAgc3RyaWRlcyA9IFsxLCAxXTtcbiAgICB9XG4gICAgaWYgKHBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgcGFkZGluZyA9ICd2YWxpZCc7XG4gICAgfVxuICAgIGlmIChkYXRhRm9ybWF0ID09IG51bGwpIHtcbiAgICAgIGRhdGFGb3JtYXQgPSBpbWFnZURhdGFGb3JtYXQoKTtcbiAgICB9XG4gICAgaWYgKHBvb2xNb2RlID09IG51bGwpIHtcbiAgICAgIHBvb2xNb2RlID0gJ21heCc7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhjYWlzKTogUmVtb3ZlIHRoZSBwcmVwcm9jZXNzaW5nIHN0ZXAgb25jZSBkZWVwbGVhcm4uanMgc3VwcG9ydHNcbiAgICAvLyBkYXRhRm9ybWF0IGFzIGFuIGlucHV0IGFyZ3VtZW50LlxuICAgIHggPSBwcmVwcm9jZXNzQ29udjJESW5wdXQoeCwgZGF0YUZvcm1hdCk7ICAvLyB4IGlzIE5IV0MgYWZ0ZXIgcHJlcHJvY2Vzc2luZy5cbiAgICBsZXQgeTogVGVuc29yO1xuICAgIGNvbnN0IHBhZGRpbmdTdHJpbmcgPSAocGFkZGluZyA9PT0gJ3NhbWUnKSA/ICdzYW1lJyA6ICd2YWxpZCc7XG4gICAgaWYgKHBvb2xNb2RlID09PSAnbWF4Jykge1xuICAgICAgLy8gVE9ETyhjYWlzKTogUmFuayBjaGVjaz9cbiAgICAgIHkgPSB0ZmMubWF4UG9vbCh4IGFzIFRlbnNvcjRELCBwb29sU2l6ZSwgc3RyaWRlcywgcGFkZGluZ1N0cmluZyk7XG4gICAgfSBlbHNlIHsgIC8vICdhdmcnXG4gICAgICAvLyBUT0RPKGNhaXMpOiBDaGVjayB0aGUgZHR5cGUgYW5kIHJhbmsgb2YgeCBhbmQgZ2l2ZSBjbGVhciBlcnJvciBtZXNzYWdlXG4gICAgICAvLyAgIGlmIHRob3NlIGFyZSBpbmNvcnJlY3QuXG4gICAgICB5ID0gdGZjLmF2Z1Bvb2woXG4gICAgICAgICAgLy8gVE9ETyhjYWlzKTogUmFuayBjaGVjaz9cbiAgICAgICAgICB4IGFzIFRlbnNvcjNEIHwgVGVuc29yNEQsIHBvb2xTaXplLCBzdHJpZGVzLCBwYWRkaW5nU3RyaW5nKTtcbiAgICB9XG4gICAgaWYgKGRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0Jykge1xuICAgICAgeSA9IHRmYy50cmFuc3Bvc2UoeSwgWzAsIDMsIDEsIDJdKTsgIC8vIE5IV0MgLT4gTkNIVy5cbiAgICB9XG4gICAgcmV0dXJuIHk7XG4gIH0pO1xufVxuXG4vKipcbiAqIDNEIHBvb2xpbmcuXG4gKiBAcGFyYW0geFxuICogQHBhcmFtIHBvb2xTaXplLiBEZWZhdWx0IHRvIFsxLCAxLCAxXS5cbiAqIEBwYXJhbSBzdHJpZGVzIHN0cmlkZXMuIERlZmF1bHRzIHRvIFsxLCAxLCAxXS5cbiAqIEBwYXJhbSBwYWRkaW5nIHBhZGRpbmcuIERlZmF1bHRzIHRvICd2YWxpZCcuXG4gKiBAcGFyYW0gZGF0YUZvcm1hdCBkYXRhIGZvcm1hdC4gRGVmYXVsdHMgdG8gJ2NoYW5uZWxzTGFzdCcuXG4gKiBAcGFyYW0gcG9vbE1vZGUgTW9kZSBvZiBwb29saW5nLiBEZWZhdWx0cyB0byAnbWF4Jy5cbiAqIEByZXR1cm5zIFJlc3VsdCBvZiB0aGUgM0QgcG9vbGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvb2wzZChcbiAgICB4OiBUZW5zb3I1RCwgcG9vbFNpemU6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSxcbiAgICBzdHJpZGVzPzogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLCBwYWRkaW5nPzogUGFkZGluZ01vZGUsXG4gICAgZGF0YUZvcm1hdD86IERhdGFGb3JtYXQsIHBvb2xNb2RlPzogUG9vbE1vZGUpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUG9vbE1vZGUocG9vbE1vZGUpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUocGFkZGluZyk7XG4gICAgaWYgKHN0cmlkZXMgPT0gbnVsbCkge1xuICAgICAgc3RyaWRlcyA9IFsxLCAxLCAxXTtcbiAgICB9XG4gICAgaWYgKHBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgcGFkZGluZyA9ICd2YWxpZCc7XG4gICAgfVxuICAgIGlmIChkYXRhRm9ybWF0ID09IG51bGwpIHtcbiAgICAgIGRhdGFGb3JtYXQgPSBpbWFnZURhdGFGb3JtYXQoKTtcbiAgICB9XG4gICAgaWYgKHBvb2xNb2RlID09IG51bGwpIHtcbiAgICAgIHBvb2xNb2RlID0gJ21heCc7XG4gICAgfVxuXG4gICAgLy8geCBpcyBOREhXQyBhZnRlciBwcmVwcm9jZXNzaW5nLlxuICAgIHggPSBwcmVwcm9jZXNzQ29udjNESW5wdXQoeCBhcyBUZW5zb3IsIGRhdGFGb3JtYXQpIGFzIFRlbnNvcjVEO1xuICAgIGxldCB5OiBUZW5zb3I7XG4gICAgY29uc3QgcGFkZGluZ1N0cmluZyA9IChwYWRkaW5nID09PSAnc2FtZScpID8gJ3NhbWUnIDogJ3ZhbGlkJztcbiAgICBpZiAocG9vbE1vZGUgPT09ICdtYXgnKSB7XG4gICAgICB5ID0gdGZjLm1heFBvb2wzZCh4LCBwb29sU2l6ZSwgc3RyaWRlcywgcGFkZGluZ1N0cmluZyk7XG4gICAgfSBlbHNlIHsgIC8vICdhdmcnXG4gICAgICB5ID0gdGZjLmF2Z1Bvb2wzZCh4LCBwb29sU2l6ZSwgc3RyaWRlcywgcGFkZGluZ1N0cmluZyk7XG4gICAgfVxuICAgIGlmIChkYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcpIHtcbiAgICAgIHkgPSB0ZmMudHJhbnNwb3NlKHksIFswLCA0LCAxLCAyLCAzXSk7ICAvLyBOREhXQyAtPiBOQ0RIVy5cbiAgICB9XG4gICAgcmV0dXJuIHk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUG9vbGluZzFETGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIHdpbmRvdyB0byBwb29sIG92ZXIsIHNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuICAgKi9cbiAgcG9vbFNpemU/OiBudW1iZXJ8W251bWJlcl07XG4gIC8qKlxuICAgKiBQZXJpb2QgYXQgd2hpY2ggdG8gc2FtcGxlIHRoZSBwb29sZWQgdmFsdWVzLlxuICAgKlxuICAgKiBJZiBgbnVsbGAsIGRlZmF1bHRzIHRvIGBwb29sU2l6ZWAuXG4gICAqL1xuICBzdHJpZGVzPzogbnVtYmVyfFtudW1iZXJdO1xuICAvKiogSG93IHRvIGZpbGwgaW4gZGF0YSB0aGF0J3Mgbm90IGFuIGludGVnZXIgbXVsdGlwbGUgb2YgcG9vbFNpemUuICovXG4gIHBhZGRpbmc/OiBQYWRkaW5nTW9kZTtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgZGlmZmVyZW50IHBvb2xpbmcgMUQgbGF5ZXJzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9vbGluZzFEIGV4dGVuZHMgTGF5ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9vbFNpemU6IFtudW1iZXJdO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RyaWRlczogW251bWJlcl07XG4gIHByb3RlY3RlZCByZWFkb25seSBwYWRkaW5nOiBQYWRkaW5nTW9kZTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGFyZ3MgUGFyYW1ldGVycyBmb3IgdGhlIFBvb2xpbmcgbGF5ZXIuXG4gICAqXG4gICAqIGNvbmZpZy5wb29sU2l6ZSBkZWZhdWx0cyB0byAyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJnczogUG9vbGluZzFETGF5ZXJBcmdzKSB7XG4gICAgaWYgKGFyZ3MucG9vbFNpemUgPT0gbnVsbCkge1xuICAgICAgYXJncy5wb29sU2l6ZSA9IDI7XG4gICAgfVxuICAgIHN1cGVyKGFyZ3MpO1xuICAgIGlmICh0eXBlb2YgYXJncy5wb29sU2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMucG9vbFNpemUgPSBbYXJncy5wb29sU2l6ZV07XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgQXJyYXkuaXNBcnJheShhcmdzLnBvb2xTaXplKSAmJlxuICAgICAgICAoYXJncy5wb29sU2l6ZSBhcyBudW1iZXJbXSkubGVuZ3RoID09PSAxICYmXG4gICAgICAgIHR5cGVvZiAoYXJncy5wb29sU2l6ZSBhcyBudW1iZXJbXSlbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLnBvb2xTaXplID0gYXJncy5wb29sU2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYHBvb2xTaXplIGZvciAxRCBjb252b2x1dGlvbmFsIGxheWVyIG11c3QgYmUgYSBudW1iZXIgb3IgYW4gYCArXG4gICAgICAgICAgYEFycmF5IG9mIGEgc2luZ2xlIG51bWJlciwgYnV0IHJlY2VpdmVkIGAgK1xuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGFyZ3MucG9vbFNpemUpfWApO1xuICAgIH1cbiAgICBhc3NlcnRQb3NpdGl2ZUludGVnZXIodGhpcy5wb29sU2l6ZSwgJ3Bvb2xTaXplJyk7XG4gICAgaWYgKGFyZ3Muc3RyaWRlcyA9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0cmlkZXMgPSB0aGlzLnBvb2xTaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3Muc3RyaWRlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5zdHJpZGVzID0gW2FyZ3Muc3RyaWRlc107XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoYXJncy5zdHJpZGVzKSAmJlxuICAgICAgICAgIChhcmdzLnN0cmlkZXMgYXMgbnVtYmVyW10pLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgIHR5cGVvZiAoYXJncy5zdHJpZGVzIGFzIG51bWJlcltdKVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5zdHJpZGVzID0gYXJncy5zdHJpZGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgc3RyaWRlcyBmb3IgMUQgY29udm9sdXRpb25hbCBsYXllciBtdXN0IGJlIGEgbnVtYmVyIG9yIGFuIGAgK1xuICAgICAgICAgICAgYEFycmF5IG9mIGEgc2luZ2xlIG51bWJlciwgYnV0IHJlY2VpdmVkIGAgK1xuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoYXJncy5zdHJpZGVzKX1gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXNzZXJ0UG9zaXRpdmVJbnRlZ2VyKHRoaXMuc3RyaWRlcywgJ3N0cmlkZXMnKTtcblxuICAgIHRoaXMucGFkZGluZyA9IGFyZ3MucGFkZGluZyA9PSBudWxsID8gJ3ZhbGlkJyA6IGFyZ3MucGFkZGluZztcbiAgICBjaGVja1BhZGRpbmdNb2RlKHRoaXMucGFkZGluZyk7XG4gICAgdGhpcy5pbnB1dFNwZWMgPSBbbmV3IElucHV0U3BlYyh7bmRpbTogM30pXTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNvbXB1dGVPdXRwdXRTaGFwZShpbnB1dFNoYXBlOiBTaGFwZXxTaGFwZVtdKTogU2hhcGV8U2hhcGVbXSB7XG4gICAgaW5wdXRTaGFwZSA9IGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcbiAgICBjb25zdCBsZW5ndGggPSBjb252T3V0cHV0TGVuZ3RoKFxuICAgICAgICBpbnB1dFNoYXBlWzFdLCB0aGlzLnBvb2xTaXplWzBdLCB0aGlzLnBhZGRpbmcsIHRoaXMuc3RyaWRlc1swXSk7XG4gICAgcmV0dXJuIFtpbnB1dFNoYXBlWzBdLCBsZW5ndGgsIGlucHV0U2hhcGVbMl1dO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvb2xpbmdGdW5jdGlvbihcbiAgICAgIGlucHV0czogVGVuc29yLCBwb29sU2l6ZTogW251bWJlciwgbnVtYmVyXSwgc3RyaWRlczogW251bWJlciwgbnVtYmVyXSxcbiAgICAgIHBhZGRpbmc6IFBhZGRpbmdNb2RlLCBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0KTogVGVuc29yO1xuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICB0aGlzLmludm9rZUNhbGxIb29rKGlucHV0cywga3dhcmdzKTtcbiAgICAgIC8vIEFkZCBkdW1teSBsYXN0IGRpbWVuc2lvbi5cbiAgICAgIGlucHV0cyA9IEsuZXhwYW5kRGltcyhnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyksIDIpO1xuICAgICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5wb29saW5nRnVuY3Rpb24oXG4gICAgICAgICAgZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpLCBbdGhpcy5wb29sU2l6ZVswXSwgMV0sXG4gICAgICAgICAgW3RoaXMuc3RyaWRlc1swXSwgMV0sIHRoaXMucGFkZGluZywgJ2NoYW5uZWxzTGFzdCcpO1xuICAgICAgLy8gUmVtb3ZlIGR1bW15IGxhc3QgZGltZW5zaW9uLlxuICAgICAgcmV0dXJuIHRmYy5zcXVlZXplKG91dHB1dCwgWzJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHBvb2xTaXplOiB0aGlzLnBvb2xTaXplLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc3RyaWRlczogdGhpcy5zdHJpZGVzLFxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXhQb29saW5nMUQgZXh0ZW5kcyBQb29saW5nMUQge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdNYXhQb29saW5nMUQnO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBQb29saW5nMURMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwb29saW5nRnVuY3Rpb24oXG4gICAgICBpbnB1dHM6IFRlbnNvciwgcG9vbFNpemU6IFtudW1iZXIsIG51bWJlcl0sIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICBwYWRkaW5nOiBQYWRkaW5nTW9kZSwgZGF0YUZvcm1hdDogRGF0YUZvcm1hdCk6IFRlbnNvciB7XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUocGFkZGluZyk7XG4gICAgcmV0dXJuIHBvb2wyZChpbnB1dHMsIHBvb2xTaXplLCBzdHJpZGVzLCBwYWRkaW5nLCBkYXRhRm9ybWF0LCAnbWF4Jyk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhNYXhQb29saW5nMUQpO1xuXG5leHBvcnQgY2xhc3MgQXZlcmFnZVBvb2xpbmcxRCBleHRlbmRzIFBvb2xpbmcxRCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0F2ZXJhZ2VQb29saW5nMUQnO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBQb29saW5nMURMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwb29saW5nRnVuY3Rpb24oXG4gICAgICBpbnB1dHM6IFRlbnNvciwgcG9vbFNpemU6IFtudW1iZXIsIG51bWJlcl0sIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICBwYWRkaW5nOiBQYWRkaW5nTW9kZSwgZGF0YUZvcm1hdDogRGF0YUZvcm1hdCk6IFRlbnNvciB7XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUocGFkZGluZyk7XG4gICAgcmV0dXJuIHBvb2wyZChpbnB1dHMsIHBvb2xTaXplLCBzdHJpZGVzLCBwYWRkaW5nLCBkYXRhRm9ybWF0LCAnYXZnJyk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhBdmVyYWdlUG9vbGluZzFEKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBvb2xpbmcyRExheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBGYWN0b3JzIGJ5IHdoaWNoIHRvIGRvd25zY2FsZSBpbiBlYWNoIGRpbWVuc2lvbiBbdmVydGljYWwsIGhvcml6b250YWxdLlxuICAgKiBFeHBlY3RzIGFuIGludGVnZXIgb3IgYW4gYXJyYXkgb2YgMiBpbnRlZ2Vycy5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGBbMiwgMl1gIHdpbGwgaGFsdmUgdGhlIGlucHV0IGluIGJvdGggc3BhdGlhbCBkaW1lbnNpb25zLlxuICAgKiBJZiBvbmx5IG9uZSBpbnRlZ2VyIGlzIHNwZWNpZmllZCwgdGhlIHNhbWUgd2luZG93IGxlbmd0aFxuICAgKiB3aWxsIGJlIHVzZWQgZm9yIGJvdGggZGltZW5zaW9ucy5cbiAgICovXG4gIHBvb2xTaXplPzogbnVtYmVyfFtudW1iZXIsIG51bWJlcl07XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzdHJpZGUgaW4gZWFjaCBkaW1lbnNpb24gb2YgdGhlIHBvb2xpbmcgd2luZG93LiBFeHBlY3RzXG4gICAqIGFuIGludGVnZXIgb3IgYW4gYXJyYXkgb2YgMiBpbnRlZ2Vycy4gSW50ZWdlciwgdHVwbGUgb2YgMiBpbnRlZ2Vycywgb3JcbiAgICogTm9uZS5cbiAgICpcbiAgICogSWYgYG51bGxgLCBkZWZhdWx0cyB0byBgcG9vbFNpemVgLlxuICAgKi9cbiAgc3RyaWRlcz86IG51bWJlcnxbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8qKiBUaGUgcGFkZGluZyB0eXBlIHRvIHVzZSBmb3IgdGhlIHBvb2xpbmcgbGF5ZXIuICovXG4gIHBhZGRpbmc/OiBQYWRkaW5nTW9kZTtcbiAgLyoqIFRoZSBkYXRhIGZvcm1hdCB0byB1c2UgZm9yIHRoZSBwb29saW5nIGxheWVyLiAqL1xuICBkYXRhRm9ybWF0PzogRGF0YUZvcm1hdDtcbn1cblxuLyoqXG4gKiBBYnN0cmFjdCBjbGFzcyBmb3IgZGlmZmVyZW50IHBvb2xpbmcgMkQgbGF5ZXJzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG9vbGluZzJEIGV4dGVuZHMgTGF5ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9vbFNpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIHByb3RlY3RlZCByZWFkb25seSBzdHJpZGVzOiBbbnVtYmVyLCBudW1iZXJdO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGFkZGluZzogUGFkZGluZ01vZGU7XG4gIHByb3RlY3RlZCByZWFkb25seSBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0O1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFBvb2xpbmcyRExheWVyQXJncykge1xuICAgIGlmIChhcmdzLnBvb2xTaXplID09IG51bGwpIHtcbiAgICAgIGFyZ3MucG9vbFNpemUgPSBbMiwgMl07XG4gICAgfVxuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMucG9vbFNpemUgPSBBcnJheS5pc0FycmF5KGFyZ3MucG9vbFNpemUpID9cbiAgICAgICAgYXJncy5wb29sU2l6ZSA6XG4gICAgICAgIFthcmdzLnBvb2xTaXplLCBhcmdzLnBvb2xTaXplXTtcbiAgICBpZiAoYXJncy5zdHJpZGVzID09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RyaWRlcyA9IHRoaXMucG9vbFNpemU7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZ3Muc3RyaWRlcykpIHtcbiAgICAgIGlmIChhcmdzLnN0cmlkZXMubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYElmIHRoZSBzdHJpZGVzIHByb3BlcnR5IG9mIGEgMkQgcG9vbGluZyBsYXllciBpcyBhbiBBcnJheSwgYCArXG4gICAgICAgICAgICBgaXQgaXMgZXhwZWN0ZWQgdG8gaGF2ZSBhIGxlbmd0aCBvZiAyLCBidXQgcmVjZWl2ZWQgbGVuZ3RoIGAgK1xuICAgICAgICAgICAgYCR7YXJncy5zdHJpZGVzLmxlbmd0aH0uYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0cmlkZXMgPSBhcmdzLnN0cmlkZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGBjb25maWcuc3RyaWRlc2AgaXMgYSBudW1iZXIuXG4gICAgICB0aGlzLnN0cmlkZXMgPSBbYXJncy5zdHJpZGVzLCBhcmdzLnN0cmlkZXNdO1xuICAgIH1cbiAgICBhc3NlcnRQb3NpdGl2ZUludGVnZXIodGhpcy5wb29sU2l6ZSwgJ3Bvb2xTaXplJyk7XG4gICAgYXNzZXJ0UG9zaXRpdmVJbnRlZ2VyKHRoaXMuc3RyaWRlcywgJ3N0cmlkZXMnKTtcbiAgICB0aGlzLnBhZGRpbmcgPSBhcmdzLnBhZGRpbmcgPT0gbnVsbCA/ICd2YWxpZCcgOiBhcmdzLnBhZGRpbmc7XG4gICAgdGhpcy5kYXRhRm9ybWF0ID1cbiAgICAgICAgYXJncy5kYXRhRm9ybWF0ID09IG51bGwgPyAnY2hhbm5lbHNMYXN0JyA6IGFyZ3MuZGF0YUZvcm1hdDtcbiAgICBjaGVja0RhdGFGb3JtYXQodGhpcy5kYXRhRm9ybWF0KTtcbiAgICBjaGVja1BhZGRpbmdNb2RlKHRoaXMucGFkZGluZyk7XG5cbiAgICB0aGlzLmlucHV0U3BlYyA9IFtuZXcgSW5wdXRTcGVjKHtuZGltOiA0fSldO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICBpbnB1dFNoYXBlID0gZ2V0RXhhY3RseU9uZVNoYXBlKGlucHV0U2hhcGUpO1xuICAgIGxldCByb3dzID1cbiAgICAgICAgdGhpcy5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcgPyBpbnB1dFNoYXBlWzJdIDogaW5wdXRTaGFwZVsxXTtcbiAgICBsZXQgY29scyA9XG4gICAgICAgIHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnID8gaW5wdXRTaGFwZVszXSA6IGlucHV0U2hhcGVbMl07XG4gICAgcm93cyA9XG4gICAgICAgIGNvbnZPdXRwdXRMZW5ndGgocm93cywgdGhpcy5wb29sU2l6ZVswXSwgdGhpcy5wYWRkaW5nLCB0aGlzLnN0cmlkZXNbMF0pO1xuICAgIGNvbHMgPVxuICAgICAgICBjb252T3V0cHV0TGVuZ3RoKGNvbHMsIHRoaXMucG9vbFNpemVbMV0sIHRoaXMucGFkZGluZywgdGhpcy5zdHJpZGVzWzFdKTtcbiAgICBpZiAodGhpcy5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcpIHtcbiAgICAgIHJldHVybiBbaW5wdXRTaGFwZVswXSwgaW5wdXRTaGFwZVsxXSwgcm93cywgY29sc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbaW5wdXRTaGFwZVswXSwgcm93cywgY29scywgaW5wdXRTaGFwZVszXV07XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvb2xpbmdGdW5jdGlvbihcbiAgICAgIGlucHV0czogVGVuc29yLCBwb29sU2l6ZTogW251bWJlciwgbnVtYmVyXSwgc3RyaWRlczogW251bWJlciwgbnVtYmVyXSxcbiAgICAgIHBhZGRpbmc6IFBhZGRpbmdNb2RlLCBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0KTogVGVuc29yO1xuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICB0aGlzLmludm9rZUNhbGxIb29rKGlucHV0cywga3dhcmdzKTtcbiAgICAgIHJldHVybiB0aGlzLnBvb2xpbmdGdW5jdGlvbihcbiAgICAgICAgICBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyksIHRoaXMucG9vbFNpemUsIHRoaXMuc3RyaWRlcyxcbiAgICAgICAgICB0aGlzLnBhZGRpbmcsIHRoaXMuZGF0YUZvcm1hdCk7XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBwb29sU2l6ZTogdGhpcy5wb29sU2l6ZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHN0cmlkZXM6IHRoaXMuc3RyaWRlcyxcbiAgICAgIGRhdGFGb3JtYXQ6IHRoaXMuZGF0YUZvcm1hdFxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXhQb29saW5nMkQgZXh0ZW5kcyBQb29saW5nMkQge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdNYXhQb29saW5nMkQnO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBQb29saW5nMkRMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwb29saW5nRnVuY3Rpb24oXG4gICAgICBpbnB1dHM6IFRlbnNvciwgcG9vbFNpemU6IFtudW1iZXIsIG51bWJlcl0sIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICBwYWRkaW5nOiBQYWRkaW5nTW9kZSwgZGF0YUZvcm1hdDogRGF0YUZvcm1hdCk6IFRlbnNvciB7XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUocGFkZGluZyk7XG4gICAgcmV0dXJuIHBvb2wyZChpbnB1dHMsIHBvb2xTaXplLCBzdHJpZGVzLCBwYWRkaW5nLCBkYXRhRm9ybWF0LCAnbWF4Jyk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhNYXhQb29saW5nMkQpO1xuXG5leHBvcnQgY2xhc3MgQXZlcmFnZVBvb2xpbmcyRCBleHRlbmRzIFBvb2xpbmcyRCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0F2ZXJhZ2VQb29saW5nMkQnO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBQb29saW5nMkRMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwb29saW5nRnVuY3Rpb24oXG4gICAgICBpbnB1dHM6IFRlbnNvciwgcG9vbFNpemU6IFtudW1iZXIsIG51bWJlcl0sIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICBwYWRkaW5nOiBQYWRkaW5nTW9kZSwgZGF0YUZvcm1hdDogRGF0YUZvcm1hdCk6IFRlbnNvciB7XG4gICAgY2hlY2tEYXRhRm9ybWF0KGRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUocGFkZGluZyk7XG4gICAgcmV0dXJuIHBvb2wyZChpbnB1dHMsIHBvb2xTaXplLCBzdHJpZGVzLCBwYWRkaW5nLCBkYXRhRm9ybWF0LCAnYXZnJyk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhBdmVyYWdlUG9vbGluZzJEKTtcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFBvb2xpbmczRExheWVyQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIC8qKlxuICAgKiBGYWN0b3JzIGJ5IHdoaWNoIHRvIGRvd25zY2FsZSBpbiBlYWNoIGRpbWVuc2lvbiBbZGVwdGgsIGhlaWdodCwgd2lkdGhdLlxuICAgKiBFeHBlY3RzIGFuIGludGVnZXIgb3IgYW4gYXJyYXkgb2YgMyBpbnRlZ2Vycy5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGBbMiwgMiwgMl1gIHdpbGwgaGFsdmUgdGhlIGlucHV0IGluIHRocmVlIGRpbWVuc2lvbnMuXG4gICAqIElmIG9ubHkgb25lIGludGVnZXIgaXMgc3BlY2lmaWVkLCB0aGUgc2FtZSB3aW5kb3cgbGVuZ3RoXG4gICAqIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGRpbWVuc2lvbnMuXG4gICAqL1xuICBwb29sU2l6ZT86IG51bWJlcnxbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBzdHJpZGUgaW4gZWFjaCBkaW1lbnNpb24gb2YgdGhlIHBvb2xpbmcgd2luZG93LiBFeHBlY3RzXG4gICAqIGFuIGludGVnZXIgb3IgYW4gYXJyYXkgb2YgMyBpbnRlZ2Vycy4gSW50ZWdlciwgdHVwbGUgb2YgMyBpbnRlZ2Vycywgb3JcbiAgICogTm9uZS5cbiAgICpcbiAgICogSWYgYG51bGxgLCBkZWZhdWx0cyB0byBgcG9vbFNpemVgLlxuICAgKi9cbiAgc3RyaWRlcz86IG51bWJlcnxbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgLyoqIFRoZSBwYWRkaW5nIHR5cGUgdG8gdXNlIGZvciB0aGUgcG9vbGluZyBsYXllci4gKi9cbiAgcGFkZGluZz86IFBhZGRpbmdNb2RlO1xuICAvKiogVGhlIGRhdGEgZm9ybWF0IHRvIHVzZSBmb3IgdGhlIHBvb2xpbmcgbGF5ZXIuICovXG4gIGRhdGFGb3JtYXQ/OiBEYXRhRm9ybWF0O1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZvciBkaWZmZXJlbnQgcG9vbGluZyAzRCBsYXllcnMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb29saW5nM0QgZXh0ZW5kcyBMYXllciB7XG4gIHByb3RlY3RlZCByZWFkb25seSBwb29sU2l6ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGFkZGluZzogUGFkZGluZ01vZGU7XG4gIHByb3RlY3RlZCByZWFkb25seSBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0O1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFBvb2xpbmczRExheWVyQXJncykge1xuICAgIGlmIChhcmdzLnBvb2xTaXplID09IG51bGwpIHtcbiAgICAgIGFyZ3MucG9vbFNpemUgPSBbMiwgMiwgMl07XG4gICAgfVxuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMucG9vbFNpemUgPSBBcnJheS5pc0FycmF5KGFyZ3MucG9vbFNpemUpID9cbiAgICAgICAgYXJncy5wb29sU2l6ZSA6XG4gICAgICAgIFthcmdzLnBvb2xTaXplLCBhcmdzLnBvb2xTaXplLCBhcmdzLnBvb2xTaXplXTtcbiAgICBpZiAoYXJncy5zdHJpZGVzID09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RyaWRlcyA9IHRoaXMucG9vbFNpemU7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZ3Muc3RyaWRlcykpIHtcbiAgICAgIGlmIChhcmdzLnN0cmlkZXMubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYElmIHRoZSBzdHJpZGVzIHByb3BlcnR5IG9mIGEgM0QgcG9vbGluZyBsYXllciBpcyBhbiBBcnJheSwgYCArXG4gICAgICAgICAgICBgaXQgaXMgZXhwZWN0ZWQgdG8gaGF2ZSBhIGxlbmd0aCBvZiAzLCBidXQgcmVjZWl2ZWQgbGVuZ3RoIGAgK1xuICAgICAgICAgICAgYCR7YXJncy5zdHJpZGVzLmxlbmd0aH0uYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0cmlkZXMgPSBhcmdzLnN0cmlkZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGBjb25maWcuc3RyaWRlc2AgaXMgYSBudW1iZXIuXG4gICAgICB0aGlzLnN0cmlkZXMgPSBbYXJncy5zdHJpZGVzLCBhcmdzLnN0cmlkZXMsIGFyZ3Muc3RyaWRlc107XG4gICAgfVxuICAgIGFzc2VydFBvc2l0aXZlSW50ZWdlcih0aGlzLnBvb2xTaXplLCAncG9vbFNpemUnKTtcbiAgICBhc3NlcnRQb3NpdGl2ZUludGVnZXIodGhpcy5zdHJpZGVzLCAnc3RyaWRlcycpO1xuICAgIHRoaXMucGFkZGluZyA9IGFyZ3MucGFkZGluZyA9PSBudWxsID8gJ3ZhbGlkJyA6IGFyZ3MucGFkZGluZztcbiAgICB0aGlzLmRhdGFGb3JtYXQgPVxuICAgICAgICBhcmdzLmRhdGFGb3JtYXQgPT0gbnVsbCA/ICdjaGFubmVsc0xhc3QnIDogYXJncy5kYXRhRm9ybWF0O1xuICAgIGNoZWNrRGF0YUZvcm1hdCh0aGlzLmRhdGFGb3JtYXQpO1xuICAgIGNoZWNrUGFkZGluZ01vZGUodGhpcy5wYWRkaW5nKTtcblxuICAgIHRoaXMuaW5wdXRTcGVjID0gW25ldyBJbnB1dFNwZWMoe25kaW06IDV9KV07XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgbGV0IGRlcHRocyA9XG4gICAgICAgIHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnID8gaW5wdXRTaGFwZVsyXSA6IGlucHV0U2hhcGVbMV07XG4gICAgbGV0IHJvd3MgPVxuICAgICAgICB0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0JyA/IGlucHV0U2hhcGVbM10gOiBpbnB1dFNoYXBlWzJdO1xuICAgIGxldCBjb2xzID1cbiAgICAgICAgdGhpcy5kYXRhRm9ybWF0ID09PSAnY2hhbm5lbHNGaXJzdCcgPyBpbnB1dFNoYXBlWzRdIDogaW5wdXRTaGFwZVszXTtcbiAgICBkZXB0aHMgPSBjb252T3V0cHV0TGVuZ3RoKFxuICAgICAgICBkZXB0aHMsIHRoaXMucG9vbFNpemVbMF0sIHRoaXMucGFkZGluZywgdGhpcy5zdHJpZGVzWzBdKTtcbiAgICByb3dzID1cbiAgICAgICAgY29udk91dHB1dExlbmd0aChyb3dzLCB0aGlzLnBvb2xTaXplWzFdLCB0aGlzLnBhZGRpbmcsIHRoaXMuc3RyaWRlc1sxXSk7XG4gICAgY29scyA9XG4gICAgICAgIGNvbnZPdXRwdXRMZW5ndGgoY29scywgdGhpcy5wb29sU2l6ZVsyXSwgdGhpcy5wYWRkaW5nLCB0aGlzLnN0cmlkZXNbMl0pO1xuICAgIGlmICh0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0ZpcnN0Jykge1xuICAgICAgcmV0dXJuIFtpbnB1dFNoYXBlWzBdLCBpbnB1dFNoYXBlWzFdLCBkZXB0aHMsIHJvd3MsIGNvbHNdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIGRlcHRocywgcm93cywgY29scywgaW5wdXRTaGFwZVs0XV07XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvb2xpbmdGdW5jdGlvbihcbiAgICAgIGlucHV0czogVGVuc29yLCBwb29sU2l6ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLCBwYWRkaW5nOiBQYWRkaW5nTW9kZSxcbiAgICAgIGRhdGFGb3JtYXQ6IERhdGFGb3JtYXQpOiBUZW5zb3I7XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHRoaXMuaW52b2tlQ2FsbEhvb2soaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgcmV0dXJuIHRoaXMucG9vbGluZ0Z1bmN0aW9uKFxuICAgICAgICAgIGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKSwgdGhpcy5wb29sU2l6ZSwgdGhpcy5zdHJpZGVzLFxuICAgICAgICAgIHRoaXMucGFkZGluZywgdGhpcy5kYXRhRm9ybWF0KTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHBvb2xTaXplOiB0aGlzLnBvb2xTaXplLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc3RyaWRlczogdGhpcy5zdHJpZGVzLFxuICAgICAgZGF0YUZvcm1hdDogdGhpcy5kYXRhRm9ybWF0XG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1heFBvb2xpbmczRCBleHRlbmRzIFBvb2xpbmczRCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ01heFBvb2xpbmczRCc7XG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFBvb2xpbmczRExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvb2xpbmdGdW5jdGlvbihcbiAgICAgIGlucHV0czogVGVuc29yLCBwb29sU2l6ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLCBwYWRkaW5nOiBQYWRkaW5nTW9kZSxcbiAgICAgIGRhdGFGb3JtYXQ6IERhdGFGb3JtYXQpOiBUZW5zb3Ige1xuICAgIGNoZWNrRGF0YUZvcm1hdChkYXRhRm9ybWF0KTtcbiAgICBjaGVja1BhZGRpbmdNb2RlKHBhZGRpbmcpO1xuICAgIHJldHVybiBwb29sM2QoXG4gICAgICAgIGlucHV0cyBhcyBUZW5zb3I1RCwgcG9vbFNpemUsIHN0cmlkZXMsIHBhZGRpbmcsIGRhdGFGb3JtYXQsICdtYXgnKTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKE1heFBvb2xpbmczRCk7XG5cbmV4cG9ydCBjbGFzcyBBdmVyYWdlUG9vbGluZzNEIGV4dGVuZHMgUG9vbGluZzNEIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnQXZlcmFnZVBvb2xpbmczRCc7XG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFBvb2xpbmczRExheWVyQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBvb2xpbmdGdW5jdGlvbihcbiAgICAgIGlucHV0czogVGVuc29yLCBwb29sU2l6ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICAgICAgc3RyaWRlczogW251bWJlciwgbnVtYmVyLCBudW1iZXJdLCBwYWRkaW5nOiBQYWRkaW5nTW9kZSxcbiAgICAgIGRhdGFGb3JtYXQ6IERhdGFGb3JtYXQpOiBUZW5zb3Ige1xuICAgIGNoZWNrRGF0YUZvcm1hdChkYXRhRm9ybWF0KTtcbiAgICBjaGVja1BhZGRpbmdNb2RlKHBhZGRpbmcpO1xuICAgIHJldHVybiBwb29sM2QoXG4gICAgICAgIGlucHV0cyBhcyBUZW5zb3I1RCwgcG9vbFNpemUsIHN0cmlkZXMsIHBhZGRpbmcsIGRhdGFGb3JtYXQsICdhdmcnKTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKEF2ZXJhZ2VQb29saW5nM0QpO1xuXG4vKipcbiAqIEFic3RyYWN0IGNsYXNzIGZvciBkaWZmZXJlbnQgZ2xvYmFsIHBvb2xpbmcgMUQgbGF5ZXJzLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2xvYmFsUG9vbGluZzFEIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3RvcihhcmdzOiBMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLmlucHV0U3BlYyA9IFtuZXcgSW5wdXRTcGVjKHtuZGltOiAzfSldO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlKTogU2hhcGUge1xuICAgIHJldHVybiBbaW5wdXRTaGFwZVswXSwgaW5wdXRTaGFwZVsyXV07XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2xvYmFsQXZlcmFnZVBvb2xpbmcxRCBleHRlbmRzIEdsb2JhbFBvb2xpbmcxRCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0dsb2JhbEF2ZXJhZ2VQb29saW5nMUQnO1xuICBjb25zdHJ1Y3RvcihhcmdzPzogTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyB8fCB7fSk7XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICByZXR1cm4gdGZjLm1lYW4oaW5wdXQsIDEpO1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2xvYmFsQXZlcmFnZVBvb2xpbmcxRCk7XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxNYXhQb29saW5nMUQgZXh0ZW5kcyBHbG9iYWxQb29saW5nMUQge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdHbG9iYWxNYXhQb29saW5nMUQnO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzIHx8IHt9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIHJldHVybiB0ZmMubWF4KGlucHV0LCAxKTtcbiAgICB9KTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKEdsb2JhbE1heFBvb2xpbmcxRCk7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBHbG9iYWxQb29saW5nMkRMYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKipcbiAgICogT25lIG9mIGBDSEFOTkVMX0xBU1RgIChkZWZhdWx0KSBvciBgQ0hBTk5FTF9GSVJTVGAuXG4gICAqXG4gICAqIFRoZSBvcmRlcmluZyBvZiB0aGUgZGltZW5zaW9ucyBpbiB0aGUgaW5wdXRzLiBgQ0hBTk5FTF9MQVNUYCBjb3JyZXNwb25kc1xuICAgKiB0byBpbnB1dHMgd2l0aCBzaGFwZSBgW2JhdGNoLCBoZWlnaHQsIHdpZHRoLCBjaGFubmVsc11gIHdoaWxlXG4gICAqIGBDSEFOTkVMX0ZJUlNUYCBjb3JyZXNwb25kcyB0byBpbnB1dHMgd2l0aCBzaGFwZVxuICAgKiBgW2JhdGNoLCBjaGFubmVscywgaGVpZ2h0LCB3aWR0aF1gLlxuICAgKi9cbiAgZGF0YUZvcm1hdD86IERhdGFGb3JtYXQ7XG59XG5cbi8qKlxuICogQWJzdHJhY3QgY2xhc3MgZm9yIGRpZmZlcmVudCBnbG9iYWwgcG9vbGluZyAyRCBsYXllcnMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHbG9iYWxQb29saW5nMkQgZXh0ZW5kcyBMYXllciB7XG4gIHByb3RlY3RlZCBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0O1xuICBjb25zdHJ1Y3RvcihhcmdzOiBHbG9iYWxQb29saW5nMkRMYXllckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLmRhdGFGb3JtYXQgPVxuICAgICAgICBhcmdzLmRhdGFGb3JtYXQgPT0gbnVsbCA/ICdjaGFubmVsc0xhc3QnIDogYXJncy5kYXRhRm9ybWF0O1xuICAgIGNoZWNrRGF0YUZvcm1hdCh0aGlzLmRhdGFGb3JtYXQpO1xuICAgIHRoaXMuaW5wdXRTcGVjID0gW25ldyBJbnB1dFNwZWMoe25kaW06IDR9KV07XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBpbnB1dFNoYXBlIGFzIFNoYXBlO1xuICAgIGlmICh0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnKSB7XG4gICAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIGlucHV0U2hhcGVbM11dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2lucHV0U2hhcGVbMF0sIGlucHV0U2hhcGVbMV1dO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnID0ge2RhdGFGb3JtYXQ6IHRoaXMuZGF0YUZvcm1hdH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxBdmVyYWdlUG9vbGluZzJEIGV4dGVuZHMgR2xvYmFsUG9vbGluZzJEIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnR2xvYmFsQXZlcmFnZVBvb2xpbmcyRCc7XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpO1xuICAgICAgaWYgKHRoaXMuZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcpIHtcbiAgICAgICAgcmV0dXJuIHRmYy5tZWFuKGlucHV0LCBbMSwgMl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRmYy5tZWFuKGlucHV0LCBbMiwgM10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2xvYmFsQXZlcmFnZVBvb2xpbmcyRCk7XG5cbmV4cG9ydCBjbGFzcyBHbG9iYWxNYXhQb29saW5nMkQgZXh0ZW5kcyBHbG9iYWxQb29saW5nMkQge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdHbG9iYWxNYXhQb29saW5nMkQnO1xuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIGlmICh0aGlzLmRhdGFGb3JtYXQgPT09ICdjaGFubmVsc0xhc3QnKSB7XG4gICAgICAgIHJldHVybiB0ZmMubWF4KGlucHV0LCBbMSwgMl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRmYy5tYXgoaW5wdXQsIFsyLCAzXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhHbG9iYWxNYXhQb29saW5nMkQpO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/wrappers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * Layers that augment the functionality of a base layer.
 */ __turbopack_context__.s([
    "Bidirectional",
    ()=>Bidirectional,
    "TimeDistributed",
    ()=>TimeDistributed,
    "Wrapper",
    ()=>Wrapper,
    "checkBidirectionalMergeMode",
    ()=>checkBidirectionalMergeMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reverse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/keras_format/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/recurrent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/serialization.js [app-client] (ecmascript)");
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
class Wrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        // Porting Note: In PyKeras, `self.layer` is set prior to the calling
        //   `super()`. But we can't do that here due to TypeScript's restriction.
        //   See: https://github.com/Microsoft/TypeScript/issues/8277
        //   As a result, we have to add checks in `get trainable()` and
        //   `set trainable()` below in order to prevent using `this.layer` when
        //   its value is `undefined`. The super constructor does use the getter
        //   and the setter of `this.layer`.
        super(args);
        this.layer = args.layer;
    }
    build(inputShape) {
        this.built = true;
    }
    // TODO(cais): Implement activityRegularizer getter.
    get trainable() {
        // Porting Note: the check of `this.layer` here is necessary due to the
        //   way the `constructor` of this class is written (see Porting Note
        //   above).
        if (this.layer != null) {
            return this.layer.trainable;
        } else {
            return false;
        }
    }
    set trainable(value) {
        // Porting Note: the check of `this.layer` here is necessary due to the
        //   way the `constructor` of this class is written (see Porting Note
        //   above).
        if (this.layer != null) {
            this.layer.trainable = value;
        }
    }
    get trainableWeights() {
        return this.layer.trainableWeights;
    }
    // TODO(cais): Implement setter for trainableWeights.
    get nonTrainableWeights() {
        return this.layer.nonTrainableWeights;
    }
    // TODO(cais): Implement setter for nonTrainableWeights.
    get updates() {
        // tslint:disable-next-line:no-any
        return this.layer._updates;
    }
    // TODO(cais): Implement getUpdatesFor().
    get losses() {
        return this.layer.losses;
    }
    // TODO(cais): Implement getLossesFor().
    getWeights() {
        return this.layer.getWeights();
    }
    setWeights(weights) {
        this.layer.setWeights(weights);
    }
    getConfig() {
        const config = {
            'layer': {
                'className': this.layer.getClassName(),
                'config': this.layer.getConfig()
            }
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    setFastWeightInitDuringBuild(value) {
        super.setFastWeightInitDuringBuild(value);
        if (this.layer != null) {
            this.layer.setFastWeightInitDuringBuild(value);
        }
    }
    /** @nocollapse */ static fromConfig(cls, config, customObjects = {}) {
        const layerConfig = config['layer'];
        const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(layerConfig, customObjects);
        delete config['layer'];
        const newConfig = {
            layer
        };
        Object.assign(newConfig, config);
        return new cls(newConfig);
    }
}
class TimeDistributed extends Wrapper {
    constructor(args){
        super(args);
        this.supportsMasking = true;
    }
    build(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        if (inputShape.length < 3) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`TimeDistributed layer expects an input shape >= 3D, but received ` + `input shape ${JSON.stringify(inputShape)}`);
        }
        this.inputSpec = [
            {
                shape: inputShape
            }
        ];
        const childInputShape = [
            inputShape[0]
        ].concat(inputShape.slice(2));
        if (!this.layer.built) {
            this.layer.build(childInputShape);
            this.layer.built = true;
        }
        super.build(inputShape);
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const childInputShape = [
            inputShape[0]
        ].concat(inputShape.slice(2));
        const childOutputShape = this.layer.computeOutputShape(childInputShape);
        const timesteps = inputShape[1];
        return [
            childOutputShape[0],
            timesteps
        ].concat(childOutputShape.slice(1));
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            // TODO(cais): Add 'training' and 'useLearningPhase' to kwargs.
            inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            // Porting Note: In tfjs-layers, `inputs` are always concrete tensor
            // values. Hence the inputs can't have an undetermined first (batch)
            // dimension, which is why we always use the K.rnn approach here.
            const step = (inputs, states)=>{
                // TODO(cais): Add useLearningPhase.
                // NOTE(cais): `layer.call` may return a length-1 array of Tensor in
                //   some cases (e.g., `layer` is a `Sequential` instance), which is
                //   why `getExactlyOneTensor` is used below.
                const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(this.layer.call(inputs, kwargs));
                return [
                    output,
                    []
                ];
            };
            const rnnOutputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rnn"])(step, inputs, [], false, null, null, false, true);
            const y = rnnOutputs[1];
            // TODO(cais): Add activity regularization.
            // TODO(cais): Add useLearningPhase.
            return y;
        });
    }
}
/** @nocollapse */ TimeDistributed.className = 'TimeDistributed';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(TimeDistributed);
function checkBidirectionalMergeMode(value) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VALID_BIDIRECTIONAL_MERGE_MODES"], 'BidirectionalMergeMode', value);
}
const DEFAULT_BIDIRECTIONAL_MERGE_MODE = 'concat';
class Bidirectional extends Wrapper {
    constructor(args){
        super(args);
        // Note: When creating `this.forwardLayer`, the original Layer object
        //   (`config.layer`) ought to be cloned. This is why we call
        //   `getConfig()` followed by `deserialize()`. Without this cloning,
        //   the layer names saved during serialization will incorrectly contain
        //   the 'forward_' prefix. In Python Keras, this is done using
        //   `copy.copy` (shallow copy), which does not have a simple equivalent
        //   in JavaScript. JavaScript's `Object.assign()` does not copy
        //   methods.
        const layerConfig = args.layer.getConfig();
        const forwDict = {};
        forwDict['className'] = args.layer.getClassName();
        forwDict['config'] = layerConfig;
        this.forwardLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(forwDict);
        layerConfig['goBackwards'] = layerConfig['goBackwards'] === true ? false : true;
        const backDict = {};
        backDict['className'] = args.layer.getClassName();
        backDict['config'] = layerConfig;
        this.backwardLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(backDict);
        this.forwardLayer.name = 'forward_' + this.forwardLayer.name;
        this.backwardLayer.name = 'backward_' + this.backwardLayer.name;
        this.mergeMode = args.mergeMode === undefined ? DEFAULT_BIDIRECTIONAL_MERGE_MODE : args.mergeMode;
        checkBidirectionalMergeMode(this.mergeMode);
        if (args.weights) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('weights support is not implemented for Bidirectional layer yet.');
        }
        this._stateful = args.layer.stateful;
        this.returnSequences = args.layer.returnSequences;
        this.returnState = args.layer.returnState;
        this.supportsMasking = true;
        this._trainable = true;
        this.inputSpec = args.layer.inputSpec;
        this.numConstants = null;
    }
    get trainable() {
        return this._trainable;
    }
    set trainable(value) {
        // Porting Note: the check of `this.layer` here is necessary due to the
        //   way the `constructor` of this class is written (see Porting Note
        //   above).
        this._trainable = value;
        if (this.forwardLayer != null) {
            this.forwardLayer.trainable = value;
        }
        if (this.backwardLayer != null) {
            this.backwardLayer.trainable = value;
        }
    }
    getWeights() {
        return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights());
    }
    setWeights(weights) {
        const numWeights = weights.length;
        const numeightsOver2 = Math.floor(numWeights / 2);
        this.forwardLayer.setWeights(weights.slice(0, numeightsOver2));
        this.backwardLayer.setWeights(weights.slice(numeightsOver2));
    }
    computeOutputShape(inputShape) {
        let layerShapes = this.forwardLayer.computeOutputShape(inputShape);
        if (!(Array.isArray(layerShapes) && Array.isArray(layerShapes[0]))) {
            layerShapes = [
                layerShapes
            ];
        }
        layerShapes = layerShapes;
        let outputShape;
        let outputShapes;
        let stateShape;
        if (this.returnState) {
            stateShape = layerShapes.slice(1);
            outputShape = layerShapes[0];
        } else {
            outputShape = layerShapes[0];
        }
        outputShape = outputShape;
        if (this.mergeMode === 'concat') {
            outputShape[outputShape.length - 1] *= 2;
            outputShapes = [
                outputShape
            ];
        } else if (this.mergeMode == null) {
            outputShapes = [
                outputShape,
                outputShape.slice()
            ];
        } else {
            outputShapes = [
                outputShape
            ];
        }
        if (this.returnState) {
            if (this.mergeMode == null) {
                return outputShapes.concat(stateShape).concat(stateShape.slice());
            }
            return [
                outputShape
            ].concat(stateShape).concat(stateShape.slice());
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singletonOrArray"](outputShapes);
    }
    apply(inputs, kwargs) {
        let initialState = kwargs == null ? null : kwargs['initialState'];
        let constants = kwargs == null ? null : kwargs['constants'];
        if (kwargs == null) {
            kwargs = {};
        }
        const standardized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["standardizeArgs"])(inputs, initialState, constants, this.numConstants);
        inputs = standardized.inputs;
        initialState = standardized.initialState;
        constants = standardized.constants;
        if (Array.isArray(inputs)) {
            initialState = inputs.slice(1);
            inputs = inputs[0];
        }
        if ((initialState == null || initialState.length === 0) && constants == null) {
            return super.apply(inputs, kwargs);
        }
        const additionalInputs = [];
        const additionalSpecs = [];
        if (initialState != null) {
            const numStates = initialState.length;
            if (numStates % 2 > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('When passing `initialState` to a Bidrectional RNN, ' + 'the state should be an Array containing the states of ' + 'the underlying RNNs.');
            }
            kwargs['initialState'] = initialState;
            additionalInputs.push(...initialState);
            const stateSpecs = initialState.map((state)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSpec"]({
                    shape: state.shape
                }));
            this.forwardLayer.stateSpec = stateSpecs.slice(0, numStates / 2);
            this.backwardLayer.stateSpec = stateSpecs.slice(numStates / 2);
            additionalSpecs.push(...stateSpecs);
        }
        if (constants != null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"]('Support for constants in Bidirectional layers is not ' + 'implemented yet.');
        }
        const isSymbolicTensor = additionalInputs[0] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolicTensor"];
        for (const tensor of additionalInputs){
            if (tensor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolicTensor"] !== isSymbolicTensor) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('The initial state of a Bidirectional layer cannot be ' + 'specified as a mix of symbolic and non-symbolic tensors');
            }
        }
        if (isSymbolicTensor) {
            // Compute the full input and specs, including the states.
            const fullInput = [
                inputs
            ].concat(additionalInputs);
            const fullInputSpec = this.inputSpec.concat(additionalSpecs);
            // Perform the call temporarily and replace inputSpec.
            // Note: with initial states symbolic calls and non-symbolic calls to
            // this method differ in how the initial states are passed. For
            // symbolic calls, the initial states are passed in the first arg, as
            // an Array of SymbolicTensors; for non-symbolic calls, they are
            // passed in the second arg as a part of the kwargs. Hence the need to
            // temporarily modify inputSpec here.
            // TODO(cais): Make refactoring so that this hacky code below is no
            // longer needed.
            const originalInputSpec = this.inputSpec;
            this.inputSpec = fullInputSpec;
            const output = super.apply(fullInput, kwargs);
            this.inputSpec = originalInputSpec;
            return output;
        } else {
            return super.apply(inputs, kwargs);
        }
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const initialState = kwargs['initialState'];
            let y;
            let yRev;
            if (initialState == null) {
                y = this.forwardLayer.call(inputs, kwargs);
                yRev = this.backwardLayer.call(inputs, kwargs);
            } else {
                const forwardState = initialState.slice(0, initialState.length / 2);
                const backwardState = initialState.slice(initialState.length / 2);
                y = this.forwardLayer.call(inputs, Object.assign(kwargs, {
                    initialState: forwardState
                }));
                yRev = this.backwardLayer.call(inputs, Object.assign(kwargs, {
                    initialState: backwardState
                }));
            }
            let states;
            if (this.returnState) {
                if (Array.isArray(y)) {
                    states = y.slice(1).concat(yRev.slice(1));
                } else {}
                y = y[0];
                yRev = yRev[0];
            }
            if (this.returnSequences) {
                yRev = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reverse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reverse"](yRev, 1);
            }
            let output;
            if (this.mergeMode === 'concat') {
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatenate"]([
                    y,
                    yRev
                ]);
            } else if (this.mergeMode === 'sum') {
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](y, yRev);
            } else if (this.mergeMode === 'ave') {
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](y, yRev));
            } else if (this.mergeMode === 'mul') {
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](y, yRev);
            } else if (this.mergeMode == null) {
                output = [
                    y,
                    yRev
                ];
            }
            // TODO(cais): Properly set learning phase.
            if (this.returnState) {
                if (this.mergeMode == null) {
                    return output.concat(states);
                }
                return [
                    output
                ].concat(states);
            }
            return output;
        });
    }
    resetStates(states) {
        this.forwardLayer.resetStates();
        this.backwardLayer.resetStates();
    }
    build(inputShape) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nameScope"])(this.forwardLayer.name, ()=>{
            this.forwardLayer.build(inputShape);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nameScope"])(this.backwardLayer.name, ()=>{
            this.backwardLayer.build(inputShape);
        });
        this.built = true;
    }
    computeMask(inputs, mask) {
        if (Array.isArray(mask)) {
            mask = mask[0];
        }
        let outputMask;
        if (this.returnSequences) {
            if (this.mergeMode == null) {
                outputMask = [
                    mask,
                    mask
                ];
            } else {
                outputMask = mask;
            }
        } else {
            if (this.mergeMode == null) {
                outputMask = [
                    null,
                    null
                ];
            } else {
                outputMask = null;
            }
        }
        if (this.returnState) {
            const states = this.forwardLayer.states;
            const stateMask = states.map((state)=>null);
            if (Array.isArray(outputMask)) {
                return outputMask.concat(stateMask).concat(stateMask);
            } else {
                return [
                    outputMask
                ].concat(stateMask).concat(stateMask);
            }
        } else {
            return outputMask;
        }
    }
    get trainableWeights() {
        return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights);
    }
    get nonTrainableWeights() {
        return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights);
    }
    // TODO(cais): Implement constraints().
    setFastWeightInitDuringBuild(value) {
        super.setFastWeightInitDuringBuild(value);
        if (this.forwardLayer != null) {
            this.forwardLayer.setFastWeightInitDuringBuild(value);
        }
        if (this.backwardLayer != null) {
            this.backwardLayer.setFastWeightInitDuringBuild(value);
        }
    }
    getConfig() {
        const config = {
            'mergeMode': this.mergeMode
        };
        // TODO(cais): Add logic for `numConstants` once the property is added.
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    /** @nocollapse */ static fromConfig(cls, config) {
        const rnnLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deserialize"])(config['layer']);
        delete config['layer'];
        // TODO(cais): Add logic for `numConstants` once the property is added.
        if (config['numConstants'] != null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotImplementedError"](`Deserialization of a Bidirectional layer with numConstants ` + `present is not supported yet.`);
        }
        // tslint:disable-next-line:no-any
        const newConfig = config;
        newConfig['layer'] = rnnLayer;
        return new cls(newConfig);
    }
}
/** @nocollapse */ Bidirectional.className = 'Bidirectional';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Bidirectional); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL3dyYXBwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxhQUFhLEVBQVUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxLQUFLLENBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFhLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDMUQsT0FBTyxFQUFnQywrQkFBK0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR3RHLE9BQU8sS0FBSyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHN0UsT0FBTyxFQUFDLEdBQUcsRUFBTyxlQUFlLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUzVDOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBZ0IsT0FBUSxTQUFRLEtBQUs7SUFHekMsWUFBWSxJQUFzQjtRQUNoQyxxRUFBcUU7UUFDckUsMEVBQTBFO1FBQzFFLDZEQUE2RDtRQUM3RCxnRUFBZ0U7UUFDaEUsd0VBQXdFO1FBQ3hFLHdFQUF3RTtRQUN4RSxvQ0FBb0M7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJ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QUN2RSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixNQUFNLENBQVUsVUFBVSxDQUN0QixHQUE2QyxFQUM3QyxNQUFnQztRQUNsQyxNQUFNLFFBQVEsR0FDVixXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBNkIsQ0FBUSxDQUFDO1FBQ3BFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLHVFQUF1RTtRQUN2RSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDbEMsTUFBTSxJQUFJLG1CQUFtQixDQUN6Qiw2REFBNkQ7Z0JBQzdELCtCQUErQixDQUFDLENBQUM7U0FDdEM7UUFDRCxrQ0FBa0M7UUFDbEMsTUFBTSxTQUFTLEdBQXlCLE1BQU0sQ0FBQztRQUMvQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7QUEvVkQsa0JBQWtCO0FBQ1gsdUJBQVMsR0FBRyxlQUFlLENBQUM7U0FGeEIsYUFBYTtBQWtXMUIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogTGF5ZXJzIHRoYXQgYXVnbWVudCB0aGUgZnVuY3Rpb25hbGl0eSBvZiBhIGJhc2UgbGF5ZXIuXG4gKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge3NlcmlhbGl6YXRpb24sIFRlbnNvciwgdGlkeX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuaW1wb3J0IHtuYW1lU2NvcGV9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQge0lucHV0U3BlYywgTGF5ZXIsIExheWVyQXJncywgU3ltYm9saWNUZW5zb3J9IGZyb20gJy4uL2VuZ2luZS90b3BvbG9neSc7XG5pbXBvcnQge05vdEltcGxlbWVudGVkRXJyb3IsIFZhbHVlRXJyb3J9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQge0JpZGlyZWN0aW9uYWxNZXJnZU1vZGUsIFNoYXBlLCBWQUxJRF9CSURJUkVDVElPTkFMX01FUkdFX01PREVTfSBmcm9tICcuLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1JlZ3VsYXJpemVyRm4sIFJublN0ZXBGdW5jdGlvbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0ICogYXMgZ2VuZXJpY191dGlscyBmcm9tICcuLi91dGlscy9nZW5lcmljX3V0aWxzJztcbmltcG9ydCB7Z2V0RXhhY3RseU9uZVNoYXBlLCBnZXRFeGFjdGx5T25lVGVuc29yfSBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5pbXBvcnQge0xheWVyVmFyaWFibGV9IGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5cbmltcG9ydCB7cm5uLCBSTk4sIHN0YW5kYXJkaXplQXJnc30gZnJvbSAnLi9yZWN1cnJlbnQnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZX0gZnJvbSAnLi9zZXJpYWxpemF0aW9uJztcblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFdyYXBwZXJMYXllckFyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICAvKipcbiAgICogVGhlIGxheWVyIHRvIGJlIHdyYXBwZWQuXG4gICAqL1xuICBsYXllcjogTGF5ZXI7XG59XG5cbi8qKlxuICogQWJzdHJhY3Qgd3JhcHBlciBiYXNlIGNsYXNzLlxuICpcbiAqIFdyYXBwZXJzIHRha2UgYW5vdGhlciBsYXllciBhbmQgYXVnbWVudCBpdCBpbiB2YXJpb3VzIHdheXMuXG4gKiBEbyBub3QgdXNlIHRoaXMgY2xhc3MgYXMgYSBsYXllciwgaXQgaXMgb25seSBhbiBhYnN0cmFjdCBiYXNlIGNsYXNzLlxuICogVHdvIHVzYWJsZSB3cmFwcGVycyBhcmUgdGhlIGBUaW1lRGlzdHJpYnV0ZWRgIGFuZCBgQmlkaXJlY3Rpb25hbGAgd3JhcHBlcnMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXcmFwcGVyIGV4dGVuZHMgTGF5ZXIge1xuICByZWFkb25seSBsYXllcjogTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IoYXJnczogV3JhcHBlckxheWVyQXJncykge1xuICAgIC8vIFBvcnRpbmcgTm90ZTogSW4gUHlLZXJhcywgYHNlbGYubGF5ZXJgIGlzIHNldCBwcmlvciB0byB0aGUgY2FsbGluZ1xuICAgIC8vICAgYHN1cGVyKClgLiBCdXQgd2UgY2FuJ3QgZG8gdGhhdCBoZXJlIGR1ZSB0byBUeXBlU2NyaXB0J3MgcmVzdHJpY3Rpb24uXG4gICAgLy8gICBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvODI3N1xuICAgIC8vICAgQXMgYSByZXN1bHQsIHdlIGhhdmUgdG8gYWRkIGNoZWNrcyBpbiBgZ2V0IHRyYWluYWJsZSgpYCBhbmRcbiAgICAvLyAgIGBzZXQgdHJhaW5hYmxlKClgIGJlbG93IGluIG9yZGVyIHRvIHByZXZlbnQgdXNpbmcgYHRoaXMubGF5ZXJgIHdoZW5cbiAgICAvLyAgIGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4gVGhlIHN1cGVyIGNvbnN0cnVjdG9yIGRvZXMgdXNlIHRoZSBnZXR0ZXJcbiAgICAvLyAgIGFuZCB0aGUgc2V0dGVyIG9mIGB0aGlzLmxheWVyYC5cbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLmxheWVyID0gYXJncy5sYXllcjtcbiAgfVxuXG4gIG92ZXJyaWRlIGJ1aWxkKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIFRPRE8oY2Fpcyk6IEltcGxlbWVudCBhY3Rpdml0eVJlZ3VsYXJpemVyIGdldHRlci5cblxuICBvdmVycmlkZSBnZXQgdHJhaW5hYmxlKCk6IGJvb2xlYW4ge1xuICAgIC8vIFBvcnRpbmcgTm90ZTogdGhlIGNoZWNrIG9mIGB0aGlzLmxheWVyYCBoZXJlIGlzIG5lY2Vzc2FyeSBkdWUgdG8gdGhlXG4gICAgLy8gICB3YXkgdGhlIGBjb25zdHJ1Y3RvcmAgb2YgdGhpcyBjbGFzcyBpcyB3cml0dGVuIChzZWUgUG9ydGluZyBOb3RlXG4gICAgLy8gICBhYm92ZSkuXG4gICAgaWYgKHRoaXMubGF5ZXIgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXIudHJhaW5hYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgc2V0IHRyYWluYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIC8vIFBvcnRpbmcgTm90ZTogdGhlIGNoZWNrIG9mIGB0aGlzLmxheWVyYCBoZXJlIGlzIG5lY2Vzc2FyeSBkdWUgdG8gdGhlXG4gICAgLy8gICB3YXkgdGhlIGBjb25zdHJ1Y3RvcmAgb2YgdGhpcyBjbGFzcyBpcyB3cml0dGVuIChzZWUgUG9ydGluZyBOb3RlXG4gICAgLy8gICBhYm92ZSkuXG4gICAgaWYgKHRoaXMubGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5sYXllci50cmFpbmFibGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBnZXQgdHJhaW5hYmxlV2VpZ2h0cygpOiBMYXllclZhcmlhYmxlW10ge1xuICAgIHJldHVybiB0aGlzLmxheWVyLnRyYWluYWJsZVdlaWdodHM7XG4gIH1cbiAgLy8gVE9ETyhjYWlzKTogSW1wbGVtZW50IHNldHRlciBmb3IgdHJhaW5hYmxlV2VpZ2h0cy5cblxuICBvdmVycmlkZSBnZXQgbm9uVHJhaW5hYmxlV2VpZ2h0cygpOiBMYXllclZhcmlhYmxlW10ge1xuICAgIHJldHVybiB0aGlzLmxheWVyLm5vblRyYWluYWJsZVdlaWdodHM7XG4gIH1cbiAgLy8gVE9ETyhjYWlzKTogSW1wbGVtZW50IHNldHRlciBmb3Igbm9uVHJhaW5hYmxlV2VpZ2h0cy5cblxuICBvdmVycmlkZSBnZXQgdXBkYXRlcygpOiBUZW5zb3JbXSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcy5sYXllciBhcyBhbnkpLl91cGRhdGVzO1xuICB9XG5cbiAgLy8gVE9ETyhjYWlzKTogSW1wbGVtZW50IGdldFVwZGF0ZXNGb3IoKS5cblxuICBvdmVycmlkZSBnZXQgbG9zc2VzKCk6IFJlZ3VsYXJpemVyRm5bXSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXIubG9zc2VzO1xuICB9XG5cbiAgLy8gVE9ETyhjYWlzKTogSW1wbGVtZW50IGdldExvc3Nlc0ZvcigpLlxuXG4gIG92ZXJyaWRlIGdldFdlaWdodHMoKTogVGVuc29yW10ge1xuICAgIHJldHVybiB0aGlzLmxheWVyLmdldFdlaWdodHMoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIHNldFdlaWdodHMod2VpZ2h0czogVGVuc29yW10pOiB2b2lkIHtcbiAgICB0aGlzLmxheWVyLnNldFdlaWdodHMod2VpZ2h0cyk7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHtcbiAgICAgICdsYXllcic6IHtcbiAgICAgICAgJ2NsYXNzTmFtZSc6IHRoaXMubGF5ZXIuZ2V0Q2xhc3NOYW1lKCksXG4gICAgICAgICdjb25maWcnOiB0aGlzLmxheWVyLmdldENvbmZpZygpLFxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgb3ZlcnJpZGUgc2V0RmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHN1cGVyLnNldEZhc3RXZWlnaHRJbml0RHVyaW5nQnVpbGQodmFsdWUpO1xuICAgIGlmICh0aGlzLmxheWVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMubGF5ZXIuc2V0RmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBmcm9tQ29uZmlnPFQgZXh0ZW5kcyBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZT4oXG4gICAgICBjbHM6IHNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlQ29uc3RydWN0b3I8VD4sXG4gICAgICBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICAgIGN1c3RvbU9iamVjdHMgPSB7fSBhcyBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QpOiBUIHtcbiAgICBjb25zdCBsYXllckNvbmZpZyA9IGNvbmZpZ1snbGF5ZXInXSBhcyBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Q7XG4gICAgY29uc3QgbGF5ZXIgPSBkZXNlcmlhbGl6ZShsYXllckNvbmZpZywgY3VzdG9tT2JqZWN0cykgYXMgTGF5ZXI7XG4gICAgZGVsZXRlIGNvbmZpZ1snbGF5ZXInXTtcbiAgICBjb25zdCBuZXdDb25maWcgPSB7bGF5ZXJ9O1xuICAgIE9iamVjdC5hc3NpZ24obmV3Q29uZmlnLCBjb25maWcpO1xuICAgIHJldHVybiBuZXcgY2xzKG5ld0NvbmZpZyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRpbWVEaXN0cmlidXRlZCBleHRlbmRzIFdyYXBwZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdUaW1lRGlzdHJpYnV0ZWQnO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBXcmFwcGVyTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICB9XG5cbiAgb3ZlcnJpZGUgYnVpbGQoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IHZvaWQge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgaWYgKGlucHV0U2hhcGUubGVuZ3RoIDwgMykge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYFRpbWVEaXN0cmlidXRlZCBsYXllciBleHBlY3RzIGFuIGlucHV0IHNoYXBlID49IDNELCBidXQgcmVjZWl2ZWQgYCArXG4gICAgICAgICAgYGlucHV0IHNoYXBlICR7SlNPTi5zdHJpbmdpZnkoaW5wdXRTaGFwZSl9YCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRTcGVjID0gW3tzaGFwZTogaW5wdXRTaGFwZX1dO1xuICAgIGNvbnN0IGNoaWxkSW5wdXRTaGFwZSA9IFtpbnB1dFNoYXBlWzBdXS5jb25jYXQoaW5wdXRTaGFwZS5zbGljZSgyKSk7XG4gICAgaWYgKCF0aGlzLmxheWVyLmJ1aWx0KSB7XG4gICAgICB0aGlzLmxheWVyLmJ1aWxkKGNoaWxkSW5wdXRTaGFwZSk7XG4gICAgICB0aGlzLmxheWVyLmJ1aWx0ID0gdHJ1ZTtcbiAgICB9XG4gICAgc3VwZXIuYnVpbGQoaW5wdXRTaGFwZSk7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgY29uc3QgY2hpbGRJbnB1dFNoYXBlID0gW2lucHV0U2hhcGVbMF1dLmNvbmNhdChpbnB1dFNoYXBlLnNsaWNlKDIpKTtcbiAgICBjb25zdCBjaGlsZE91dHB1dFNoYXBlID1cbiAgICAgICAgdGhpcy5sYXllci5jb21wdXRlT3V0cHV0U2hhcGUoY2hpbGRJbnB1dFNoYXBlKSBhcyBTaGFwZTtcbiAgICBjb25zdCB0aW1lc3RlcHMgPSBpbnB1dFNoYXBlWzFdO1xuICAgIHJldHVybiBbY2hpbGRPdXRwdXRTaGFwZVswXSwgdGltZXN0ZXBzXS5jb25jYXQoY2hpbGRPdXRwdXRTaGFwZS5zbGljZSgxKSk7XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgLy8gVE9ETyhjYWlzKTogQWRkICd0cmFpbmluZycgYW5kICd1c2VMZWFybmluZ1BoYXNlJyB0byBrd2FyZ3MuXG4gICAgICBpbnB1dHMgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICAvLyBQb3J0aW5nIE5vdGU6IEluIHRmanMtbGF5ZXJzLCBgaW5wdXRzYCBhcmUgYWx3YXlzIGNvbmNyZXRlIHRlbnNvclxuICAgICAgLy8gdmFsdWVzLiBIZW5jZSB0aGUgaW5wdXRzIGNhbid0IGhhdmUgYW4gdW5kZXRlcm1pbmVkIGZpcnN0IChiYXRjaClcbiAgICAgIC8vIGRpbWVuc2lvbiwgd2hpY2ggaXMgd2h5IHdlIGFsd2F5cyB1c2UgdGhlIEsucm5uIGFwcHJvYWNoIGhlcmUuXG4gICAgICBjb25zdCBzdGVwOiBSbm5TdGVwRnVuY3Rpb24gPSAoaW5wdXRzOiBUZW5zb3IsIHN0YXRlczogVGVuc29yW10pID0+IHtcbiAgICAgICAgLy8gVE9ETyhjYWlzKTogQWRkIHVzZUxlYXJuaW5nUGhhc2UuXG4gICAgICAgIC8vIE5PVEUoY2Fpcyk6IGBsYXllci5jYWxsYCBtYXkgcmV0dXJuIGEgbGVuZ3RoLTEgYXJyYXkgb2YgVGVuc29yIGluXG4gICAgICAgIC8vICAgc29tZSBjYXNlcyAoZS5nLiwgYGxheWVyYCBpcyBhIGBTZXF1ZW50aWFsYCBpbnN0YW5jZSksIHdoaWNoIGlzXG4gICAgICAgIC8vICAgd2h5IGBnZXRFeGFjdGx5T25lVGVuc29yYCBpcyB1c2VkIGJlbG93LlxuICAgICAgICBjb25zdCBvdXRwdXQgPSBnZXRFeGFjdGx5T25lVGVuc29yKHRoaXMubGF5ZXIuY2FsbChpbnB1dHMsIGt3YXJncykpO1xuICAgICAgICByZXR1cm4gW291dHB1dCwgW11dO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHJubk91dHB1dHMgPVxuICAgICAgICAgIHJubihzdGVwLCBpbnB1dHMsIFtdLCBmYWxzZSAvKiBnb0JhY2t3YXJkcyAqLywgbnVsbCAvKiBtYXNrICovLFxuICAgICAgICAgICAgICBudWxsIC8qIGNvbnN0YW50cyAqLywgZmFsc2UgLyogdW5yb2xsICovLFxuICAgICAgICAgICAgICB0cnVlIC8qIG5lZWRQZXJTdGVwT3V0cHV0cyAqLyk7XG4gICAgICBjb25zdCB5ID0gcm5uT3V0cHV0c1sxXTtcbiAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBhY3Rpdml0eSByZWd1bGFyaXphdGlvbi5cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCB1c2VMZWFybmluZ1BoYXNlLlxuICAgICAgcmV0dXJuIHk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPKGNhaXMpOiBJbXBsZW1lbnQgZGV0YWlsZWQgY29tcHV0ZU1hc2soKSBsb2dpYy5cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhUaW1lRGlzdHJpYnV0ZWQpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCaWRpcmVjdGlvbmFsTWVyZ2VNb2RlKHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XG4gIGdlbmVyaWNfdXRpbHMuY2hlY2tTdHJpbmdUeXBlVW5pb25WYWx1ZShcbiAgICAgIFZBTElEX0JJRElSRUNUSU9OQUxfTUVSR0VfTU9ERVMsICdCaWRpcmVjdGlvbmFsTWVyZ2VNb2RlJywgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgQmlkaXJlY3Rpb25hbExheWVyQXJncyBleHRlbmRzIFdyYXBwZXJMYXllckFyZ3Mge1xuICAvKipcbiAgICogVGhlIGluc3RhbmNlIG9mIGFuIGBSTk5gIGxheWVyIHRvIGJlIHdyYXBwZWQuXG4gICAqL1xuICBsYXllcjogUk5OO1xuXG4gIC8qKlxuICAgKiBNb2RlIGJ5IHdoaWNoIG91dHB1dHMgb2YgdGhlIGZvcndhcmQgYW5kIGJhY2t3YXJkIFJOTnMgYXJlXG4gICAqIGNvbWJpbmVkLiBJZiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIHRoZSBvdXRwdXQgd2lsbCBub3QgYmVcbiAgICogY29tYmluZWQsIHRoZXkgd2lsbCBiZSByZXR1cm5lZCBhcyBhbiBgQXJyYXlgLlxuICAgKlxuICAgKiBJZiBgdW5kZWZpbmVkYCAoaS5lLiwgbm90IHByb3ZpZGVkKSwgZGVmYXVsdHMgdG8gYCdjb25jYXQnYC5cbiAgICovXG4gIG1lcmdlTW9kZT86IEJpZGlyZWN0aW9uYWxNZXJnZU1vZGU7XG59XG5cbmNvbnN0IERFRkFVTFRfQklESVJFQ1RJT05BTF9NRVJHRV9NT0RFOiBCaWRpcmVjdGlvbmFsTWVyZ2VNb2RlID0gJ2NvbmNhdCc7XG5cbmV4cG9ydCBjbGFzcyBCaWRpcmVjdGlvbmFsIGV4dGVuZHMgV3JhcHBlciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0JpZGlyZWN0aW9uYWwnO1xuICBtZXJnZU1vZGU6IEJpZGlyZWN0aW9uYWxNZXJnZU1vZGU7XG4gIHByaXZhdGUgZm9yd2FyZExheWVyOiBSTk47XG4gIHByaXZhdGUgYmFja3dhcmRMYXllcjogUk5OO1xuICBwcml2YXRlIHJldHVyblNlcXVlbmNlczogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZXR1cm5TdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBudW1Db25zdGFudHM/OiBudW1iZXI7XG4gIHByaXZhdGUgX3RyYWluYWJsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBCaWRpcmVjdGlvbmFsTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG5cbiAgICAvLyBOb3RlOiBXaGVuIGNyZWF0aW5nIGB0aGlzLmZvcndhcmRMYXllcmAsIHRoZSBvcmlnaW5hbCBMYXllciBvYmplY3RcbiAgICAvLyAgIChgY29uZmlnLmxheWVyYCkgb3VnaHQgdG8gYmUgY2xvbmVkLiBUaGlzIGlzIHdoeSB3ZSBjYWxsXG4gICAgLy8gICBgZ2V0Q29uZmlnKClgIGZvbGxvd2VkIGJ5IGBkZXNlcmlhbGl6ZSgpYC4gV2l0aG91dCB0aGlzIGNsb25pbmcsXG4gICAgLy8gICB0aGUgbGF5ZXIgbmFtZXMgc2F2ZWQgZHVyaW5nIHNlcmlhbGl6YXRpb24gd2lsbCBpbmNvcnJlY3RseSBjb250YWluXG4gICAgLy8gICB0aGUgJ2ZvcndhcmRfJyBwcmVmaXguIEluIFB5dGhvbiBLZXJhcywgdGhpcyBpcyBkb25lIHVzaW5nXG4gICAgLy8gICBgY29weS5jb3B5YCAoc2hhbGxvdyBjb3B5KSwgd2hpY2ggZG9lcyBub3QgaGF2ZSBhIHNpbXBsZSBlcXVpdmFsZW50XG4gICAgLy8gICBpbiBKYXZhU2NyaXB0LiBKYXZhU2NyaXB0J3MgYE9iamVjdC5hc3NpZ24oKWAgZG9lcyBub3QgY29weVxuICAgIC8vICAgbWV0aG9kcy5cbiAgICBjb25zdCBsYXllckNvbmZpZyA9IGFyZ3MubGF5ZXIuZ2V0Q29uZmlnKCk7XG4gICAgY29uc3QgZm9yd0RpY3Q6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHt9O1xuICAgIGZvcndEaWN0WydjbGFzc05hbWUnXSA9IGFyZ3MubGF5ZXIuZ2V0Q2xhc3NOYW1lKCk7XG4gICAgZm9yd0RpY3RbJ2NvbmZpZyddID0gbGF5ZXJDb25maWc7XG4gICAgdGhpcy5mb3J3YXJkTGF5ZXIgPSBkZXNlcmlhbGl6ZShmb3J3RGljdCkgYXMgUk5OO1xuICAgIGxheWVyQ29uZmlnWydnb0JhY2t3YXJkcyddID1cbiAgICAgICAgbGF5ZXJDb25maWdbJ2dvQmFja3dhcmRzJ10gPT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgY29uc3QgYmFja0RpY3Q6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHt9O1xuICAgIGJhY2tEaWN0WydjbGFzc05hbWUnXSA9IGFyZ3MubGF5ZXIuZ2V0Q2xhc3NOYW1lKCk7XG4gICAgYmFja0RpY3RbJ2NvbmZpZyddID0gbGF5ZXJDb25maWc7XG4gICAgdGhpcy5iYWNrd2FyZExheWVyID0gZGVzZXJpYWxpemUoYmFja0RpY3QpIGFzIFJOTjtcbiAgICB0aGlzLmZvcndhcmRMYXllci5uYW1lID0gJ2ZvcndhcmRfJyArIHRoaXMuZm9yd2FyZExheWVyLm5hbWU7XG4gICAgdGhpcy5iYWNrd2FyZExheWVyLm5hbWUgPSAnYmFja3dhcmRfJyArIHRoaXMuYmFja3dhcmRMYXllci5uYW1lO1xuXG4gICAgdGhpcy5tZXJnZU1vZGUgPSBhcmdzLm1lcmdlTW9kZSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgREVGQVVMVF9CSURJUkVDVElPTkFMX01FUkdFX01PREUgOlxuICAgICAgICBhcmdzLm1lcmdlTW9kZTtcbiAgICBjaGVja0JpZGlyZWN0aW9uYWxNZXJnZU1vZGUodGhpcy5tZXJnZU1vZGUpO1xuICAgIGlmIChhcmdzLndlaWdodHMpIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKFxuICAgICAgICAgICd3ZWlnaHRzIHN1cHBvcnQgaXMgbm90IGltcGxlbWVudGVkIGZvciBCaWRpcmVjdGlvbmFsIGxheWVyIHlldC4nKTtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVmdWwgPSBhcmdzLmxheWVyLnN0YXRlZnVsO1xuICAgIHRoaXMucmV0dXJuU2VxdWVuY2VzID0gYXJncy5sYXllci5yZXR1cm5TZXF1ZW5jZXM7XG4gICAgdGhpcy5yZXR1cm5TdGF0ZSA9IGFyZ3MubGF5ZXIucmV0dXJuU3RhdGU7XG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3RyYWluYWJsZSA9IHRydWU7XG4gICAgdGhpcy5pbnB1dFNwZWMgPSBhcmdzLmxheWVyLmlucHV0U3BlYztcbiAgICB0aGlzLm51bUNvbnN0YW50cyA9IG51bGw7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgdHJhaW5hYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90cmFpbmFibGU7XG4gIH1cblxuICBvdmVycmlkZSBzZXQgdHJhaW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgLy8gUG9ydGluZyBOb3RlOiB0aGUgY2hlY2sgb2YgYHRoaXMubGF5ZXJgIGhlcmUgaXMgbmVjZXNzYXJ5IGR1ZSB0byB0aGVcbiAgICAvLyAgIHdheSB0aGUgYGNvbnN0cnVjdG9yYCBvZiB0aGlzIGNsYXNzIGlzIHdyaXR0ZW4gKHNlZSBQb3J0aW5nIE5vdGVcbiAgICAvLyAgIGFib3ZlKS5cbiAgICB0aGlzLl90cmFpbmFibGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5mb3J3YXJkTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mb3J3YXJkTGF5ZXIudHJhaW5hYmxlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmJhY2t3YXJkTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5iYWNrd2FyZExheWVyLnRyYWluYWJsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGdldFdlaWdodHMoKTogVGVuc29yW10ge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRMYXllci5nZXRXZWlnaHRzKCkuY29uY2F0KFxuICAgICAgICB0aGlzLmJhY2t3YXJkTGF5ZXIuZ2V0V2VpZ2h0cygpKTtcbiAgfVxuXG4gIG92ZXJyaWRlIHNldFdlaWdodHMod2VpZ2h0czogVGVuc29yW10pOiB2b2lkIHtcbiAgICBjb25zdCBudW1XZWlnaHRzID0gd2VpZ2h0cy5sZW5ndGg7XG4gICAgY29uc3QgbnVtZWlnaHRzT3ZlcjIgPSBNYXRoLmZsb29yKG51bVdlaWdodHMgLyAyKTtcbiAgICB0aGlzLmZvcndhcmRMYXllci5zZXRXZWlnaHRzKHdlaWdodHMuc2xpY2UoMCwgbnVtZWlnaHRzT3ZlcjIpKTtcbiAgICB0aGlzLmJhY2t3YXJkTGF5ZXIuc2V0V2VpZ2h0cyh3ZWlnaHRzLnNsaWNlKG51bWVpZ2h0c092ZXIyKSk7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGxldCBsYXllclNoYXBlczogU2hhcGV8U2hhcGVbXSA9XG4gICAgICAgIHRoaXMuZm9yd2FyZExheWVyLmNvbXB1dGVPdXRwdXRTaGFwZShpbnB1dFNoYXBlKTtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KGxheWVyU2hhcGVzKSAmJiBBcnJheS5pc0FycmF5KGxheWVyU2hhcGVzWzBdKSkpIHtcbiAgICAgIGxheWVyU2hhcGVzID0gW2xheWVyU2hhcGVzIGFzIFNoYXBlXTtcbiAgICB9XG4gICAgbGF5ZXJTaGFwZXMgPSBsYXllclNoYXBlcyBhcyBTaGFwZVtdO1xuXG4gICAgbGV0IG91dHB1dFNoYXBlOiBTaGFwZTtcbiAgICBsZXQgb3V0cHV0U2hhcGVzOiBTaGFwZVtdO1xuICAgIGxldCBzdGF0ZVNoYXBlOiBTaGFwZVtdO1xuICAgIGlmICh0aGlzLnJldHVyblN0YXRlKSB7XG4gICAgICBzdGF0ZVNoYXBlID0gbGF5ZXJTaGFwZXMuc2xpY2UoMSk7XG4gICAgICBvdXRwdXRTaGFwZSA9IGxheWVyU2hhcGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXRTaGFwZSA9IGxheWVyU2hhcGVzWzBdO1xuICAgIH1cbiAgICBvdXRwdXRTaGFwZSA9IG91dHB1dFNoYXBlO1xuICAgIGlmICh0aGlzLm1lcmdlTW9kZSA9PT0gJ2NvbmNhdCcpIHtcbiAgICAgIG91dHB1dFNoYXBlW291dHB1dFNoYXBlLmxlbmd0aCAtIDFdICo9IDI7XG4gICAgICBvdXRwdXRTaGFwZXMgPSBbb3V0cHV0U2hhcGVdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tZXJnZU1vZGUgPT0gbnVsbCkge1xuICAgICAgb3V0cHV0U2hhcGVzID0gW291dHB1dFNoYXBlLCBvdXRwdXRTaGFwZS5zbGljZSgpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0U2hhcGVzID0gW291dHB1dFNoYXBlXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXR1cm5TdGF0ZSkge1xuICAgICAgaWYgKHRoaXMubWVyZ2VNb2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFNoYXBlcy5jb25jYXQoc3RhdGVTaGFwZSkuY29uY2F0KHN0YXRlU2hhcGUuc2xpY2UoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW291dHB1dFNoYXBlXS5jb25jYXQoc3RhdGVTaGFwZSkuY29uY2F0KHN0YXRlU2hhcGUuc2xpY2UoKSk7XG4gICAgfVxuICAgIHJldHVybiBnZW5lcmljX3V0aWxzLnNpbmdsZXRvbk9yQXJyYXkob3V0cHV0U2hhcGVzKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGFwcGx5KFxuICAgICAgaW5wdXRzOiBUZW5zb3J8VGVuc29yW118U3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXSxcbiAgICAgIGt3YXJncz86IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXXxTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdIHtcbiAgICBsZXQgaW5pdGlhbFN0YXRlOiBUZW5zb3JbXXxTeW1ib2xpY1RlbnNvcltdID1cbiAgICAgICAga3dhcmdzID09IG51bGwgPyBudWxsIDoga3dhcmdzWydpbml0aWFsU3RhdGUnXTtcbiAgICBsZXQgY29uc3RhbnRzOiBUZW5zb3JbXXxTeW1ib2xpY1RlbnNvcltdID1cbiAgICAgICAga3dhcmdzID09IG51bGwgPyBudWxsIDoga3dhcmdzWydjb25zdGFudHMnXTtcbiAgICBpZiAoa3dhcmdzID09IG51bGwpIHtcbiAgICAgIGt3YXJncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBzdGFuZGFyZGl6ZWQgPVxuICAgICAgICBzdGFuZGFyZGl6ZUFyZ3MoaW5wdXRzLCBpbml0aWFsU3RhdGUsIGNvbnN0YW50cywgdGhpcy5udW1Db25zdGFudHMpO1xuICAgIGlucHV0cyA9IHN0YW5kYXJkaXplZC5pbnB1dHM7XG4gICAgaW5pdGlhbFN0YXRlID0gc3RhbmRhcmRpemVkLmluaXRpYWxTdGF0ZTtcbiAgICBjb25zdGFudHMgPSBzdGFuZGFyZGl6ZWQuY29uc3RhbnRzO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXRzKSkge1xuICAgICAgaW5pdGlhbFN0YXRlID0gKGlucHV0cyBhcyBUZW5zb3JbXSB8IFN5bWJvbGljVGVuc29yW10pLnNsaWNlKDEpO1xuICAgICAgaW5wdXRzID0gKGlucHV0cyBhcyBUZW5zb3JbXSB8IFN5bWJvbGljVGVuc29yW10pWzBdO1xuICAgIH1cblxuICAgIGlmICgoaW5pdGlhbFN0YXRlID09IG51bGwgfHwgaW5pdGlhbFN0YXRlLmxlbmd0aCA9PT0gMCkgJiZcbiAgICAgICAgY29uc3RhbnRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBzdXBlci5hcHBseShpbnB1dHMsIGt3YXJncyk7XG4gICAgfVxuICAgIGNvbnN0IGFkZGl0aW9uYWxJbnB1dHM6IEFycmF5PFRlbnNvcnxTeW1ib2xpY1RlbnNvcj4gPSBbXTtcbiAgICBjb25zdCBhZGRpdGlvbmFsU3BlY3M6IElucHV0U3BlY1tdID0gW107XG4gICAgaWYgKGluaXRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBudW1TdGF0ZXMgPSBpbml0aWFsU3RhdGUubGVuZ3RoO1xuICAgICAgaWYgKG51bVN0YXRlcyAlIDIgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgJ1doZW4gcGFzc2luZyBgaW5pdGlhbFN0YXRlYCB0byBhIEJpZHJlY3Rpb25hbCBSTk4sICcgK1xuICAgICAgICAgICAgJ3RoZSBzdGF0ZSBzaG91bGQgYmUgYW4gQXJyYXkgY29udGFpbmluZyB0aGUgc3RhdGVzIG9mICcgK1xuICAgICAgICAgICAgJ3RoZSB1bmRlcmx5aW5nIFJOTnMuJyk7XG4gICAgICB9XG4gICAgICBrd2FyZ3NbJ2luaXRpYWxTdGF0ZSddID0gaW5pdGlhbFN0YXRlO1xuICAgICAgYWRkaXRpb25hbElucHV0cy5wdXNoKC4uLmluaXRpYWxTdGF0ZSk7XG4gICAgICBjb25zdCBzdGF0ZVNwZWNzID0gKGluaXRpYWxTdGF0ZSBhcyBBcnJheTxUZW5zb3J8U3ltYm9saWNUZW5zb3I+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHN0YXRlID0+IG5ldyBJbnB1dFNwZWMoe3NoYXBlOiBzdGF0ZS5zaGFwZX0pKTtcbiAgICAgIHRoaXMuZm9yd2FyZExheWVyLnN0YXRlU3BlYyA9IHN0YXRlU3BlY3Muc2xpY2UoMCwgbnVtU3RhdGVzIC8gMik7XG4gICAgICB0aGlzLmJhY2t3YXJkTGF5ZXIuc3RhdGVTcGVjID0gc3RhdGVTcGVjcy5zbGljZShudW1TdGF0ZXMgLyAyKTtcbiAgICAgIGFkZGl0aW9uYWxTcGVjcy5wdXNoKC4uLnN0YXRlU3BlY3MpO1xuICAgIH1cbiAgICBpZiAoY29uc3RhbnRzICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKFxuICAgICAgICAgICdTdXBwb3J0IGZvciBjb25zdGFudHMgaW4gQmlkaXJlY3Rpb25hbCBsYXllcnMgaXMgbm90ICcgK1xuICAgICAgICAgICdpbXBsZW1lbnRlZCB5ZXQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTeW1ib2xpY1RlbnNvciA9IGFkZGl0aW9uYWxJbnB1dHNbMF0gaW5zdGFuY2VvZiBTeW1ib2xpY1RlbnNvcjtcbiAgICBmb3IgKGNvbnN0IHRlbnNvciBvZiBhZGRpdGlvbmFsSW5wdXRzKSB7XG4gICAgICBpZiAodGVuc29yIGluc3RhbmNlb2YgU3ltYm9saWNUZW5zb3IgIT09IGlzU3ltYm9saWNUZW5zb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAnVGhlIGluaXRpYWwgc3RhdGUgb2YgYSBCaWRpcmVjdGlvbmFsIGxheWVyIGNhbm5vdCBiZSAnICtcbiAgICAgICAgICAgICdzcGVjaWZpZWQgYXMgYSBtaXggb2Ygc3ltYm9saWMgYW5kIG5vbi1zeW1ib2xpYyB0ZW5zb3JzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU3ltYm9saWNUZW5zb3IpIHtcbiAgICAgIC8vIENvbXB1dGUgdGhlIGZ1bGwgaW5wdXQgYW5kIHNwZWNzLCBpbmNsdWRpbmcgdGhlIHN0YXRlcy5cbiAgICAgIGNvbnN0IGZ1bGxJbnB1dCA9IFtpbnB1dHNdLmNvbmNhdChhZGRpdGlvbmFsSW5wdXRzKTtcbiAgICAgIGNvbnN0IGZ1bGxJbnB1dFNwZWMgPSB0aGlzLmlucHV0U3BlYy5jb25jYXQoYWRkaXRpb25hbFNwZWNzKTtcbiAgICAgIC8vIFBlcmZvcm0gdGhlIGNhbGwgdGVtcG9yYXJpbHkgYW5kIHJlcGxhY2UgaW5wdXRTcGVjLlxuICAgICAgLy8gTm90ZTogd2l0aCBpbml0aWFsIHN0YXRlcyBzeW1ib2xpYyBjYWxscyBhbmQgbm9uLXN5bWJvbGljIGNhbGxzIHRvXG4gICAgICAvLyB0aGlzIG1ldGhvZCBkaWZmZXIgaW4gaG93IHRoZSBpbml0aWFsIHN0YXRlcyBhcmUgcGFzc2VkLiBGb3JcbiAgICAgIC8vIHN5bWJvbGljIGNhbGxzLCB0aGUgaW5pdGlhbCBzdGF0ZXMgYXJlIHBhc3NlZCBpbiB0aGUgZmlyc3QgYXJnLCBhc1xuICAgICAgLy8gYW4gQXJyYXkgb2YgU3ltYm9saWNUZW5zb3JzOyBmb3Igbm9uLXN5bWJvbGljIGNhbGxzLCB0aGV5IGFyZVxuICAgICAgLy8gcGFzc2VkIGluIHRoZSBzZWNvbmQgYXJnIGFzIGEgcGFydCBvZiB0aGUga3dhcmdzLiBIZW5jZSB0aGUgbmVlZCB0b1xuICAgICAgLy8gdGVtcG9yYXJpbHkgbW9kaWZ5IGlucHV0U3BlYyBoZXJlLlxuICAgICAgLy8gVE9ETyhjYWlzKTogTWFrZSByZWZhY3RvcmluZyBzbyB0aGF0IHRoaXMgaGFja3kgY29kZSBiZWxvdyBpcyBub1xuICAgICAgLy8gbG9uZ2VyIG5lZWRlZC5cbiAgICAgIGNvbnN0IG9yaWdpbmFsSW5wdXRTcGVjID0gdGhpcy5pbnB1dFNwZWM7XG4gICAgICB0aGlzLmlucHV0U3BlYyA9IGZ1bGxJbnB1dFNwZWM7XG4gICAgICBjb25zdCBvdXRwdXQgPVxuICAgICAgICAgIHN1cGVyLmFwcGx5KGZ1bGxJbnB1dCBhcyBUZW5zb3JbXSB8IFN5bWJvbGljVGVuc29yW10sIGt3YXJncyk7XG4gICAgICB0aGlzLmlucHV0U3BlYyA9IG9yaWdpbmFsSW5wdXRTcGVjO1xuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLmFwcGx5KGlucHV0cywga3dhcmdzKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0ga3dhcmdzWydpbml0aWFsU3RhdGUnXTtcblxuICAgICAgbGV0IHk6IFRlbnNvcnxUZW5zb3JbXTtcbiAgICAgIGxldCB5UmV2OiBUZW5zb3J8VGVuc29yW107XG4gICAgICBpZiAoaW5pdGlhbFN0YXRlID09IG51bGwpIHtcbiAgICAgICAgeSA9IHRoaXMuZm9yd2FyZExheWVyLmNhbGwoaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgICB5UmV2ID0gdGhpcy5iYWNrd2FyZExheWVyLmNhbGwoaW5wdXRzLCBrd2FyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZm9yd2FyZFN0YXRlID0gaW5pdGlhbFN0YXRlLnNsaWNlKDAsIGluaXRpYWxTdGF0ZS5sZW5ndGggLyAyKTtcbiAgICAgICAgY29uc3QgYmFja3dhcmRTdGF0ZSA9IGluaXRpYWxTdGF0ZS5zbGljZShpbml0aWFsU3RhdGUubGVuZ3RoIC8gMik7XG4gICAgICAgIHkgPSB0aGlzLmZvcndhcmRMYXllci5jYWxsKFxuICAgICAgICAgICAgaW5wdXRzLCBPYmplY3QuYXNzaWduKGt3YXJncywge2luaXRpYWxTdGF0ZTogZm9yd2FyZFN0YXRlfSkpO1xuICAgICAgICB5UmV2ID0gdGhpcy5iYWNrd2FyZExheWVyLmNhbGwoXG4gICAgICAgICAgICBpbnB1dHMsIE9iamVjdC5hc3NpZ24oa3dhcmdzLCB7aW5pdGlhbFN0YXRlOiBiYWNrd2FyZFN0YXRlfSkpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc3RhdGVzOiBUZW5zb3JbXTtcbiAgICAgIGlmICh0aGlzLnJldHVyblN0YXRlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHkpKSB7XG4gICAgICAgICAgc3RhdGVzID0geS5zbGljZSgxKS5jb25jYXQoKHlSZXYgYXMgVGVuc29yW10pLnNsaWNlKDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgICAgICB5ID0gKHkgYXMgVGVuc29yW10pWzBdO1xuICAgICAgICB5UmV2ID0gKHlSZXYgYXMgVGVuc29yW10pWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yZXR1cm5TZXF1ZW5jZXMpIHtcbiAgICAgICAgeVJldiA9IHRmYy5yZXZlcnNlKHlSZXYgYXMgVGVuc29yLCAxKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG91dHB1dDogVGVuc29yfFRlbnNvcltdO1xuICAgICAgaWYgKHRoaXMubWVyZ2VNb2RlID09PSAnY29uY2F0Jykge1xuICAgICAgICBvdXRwdXQgPSBLLmNvbmNhdGVuYXRlKFt5IGFzIFRlbnNvciwgeVJldiBhcyBUZW5zb3JdKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJnZU1vZGUgPT09ICdzdW0nKSB7XG4gICAgICAgIG91dHB1dCA9IHRmYy5hZGQoeSBhcyBUZW5zb3IsIHlSZXYgYXMgVGVuc29yKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tZXJnZU1vZGUgPT09ICdhdmUnKSB7XG4gICAgICAgIG91dHB1dCA9IHRmYy5tdWwoLjUsIHRmYy5hZGQoeSBhcyBUZW5zb3IsIHlSZXYgYXMgVGVuc29yKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyZ2VNb2RlID09PSAnbXVsJykge1xuICAgICAgICBvdXRwdXQgPSB0ZmMubXVsKHkgYXMgVGVuc29yLCB5UmV2IGFzIFRlbnNvcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubWVyZ2VNb2RlID09IG51bGwpIHtcbiAgICAgICAgb3V0cHV0ID0gW3kgYXMgVGVuc29yLCB5UmV2IGFzIFRlbnNvcl07XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IFByb3Blcmx5IHNldCBsZWFybmluZyBwaGFzZS5cbiAgICAgIGlmICh0aGlzLnJldHVyblN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm1lcmdlTW9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIChvdXRwdXQgYXMgVGVuc29yW10pLmNvbmNhdChzdGF0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbb3V0cHV0IGFzIFRlbnNvcl0uY29uY2F0KHN0YXRlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgcmVzZXRTdGF0ZXMoc3RhdGVzPzogVGVuc29yfFRlbnNvcltdKTogdm9pZCB7XG4gICAgdGhpcy5mb3J3YXJkTGF5ZXIucmVzZXRTdGF0ZXMoKTtcbiAgICB0aGlzLmJhY2t3YXJkTGF5ZXIucmVzZXRTdGF0ZXMoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGJ1aWxkKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiB2b2lkIHtcbiAgICBuYW1lU2NvcGUodGhpcy5mb3J3YXJkTGF5ZXIubmFtZSwgKCkgPT4ge1xuICAgICAgdGhpcy5mb3J3YXJkTGF5ZXIuYnVpbGQoaW5wdXRTaGFwZSk7XG4gICAgfSk7XG4gICAgbmFtZVNjb3BlKHRoaXMuYmFja3dhcmRMYXllci5uYW1lLCAoKSA9PiB7XG4gICAgICB0aGlzLmJhY2t3YXJkTGF5ZXIuYnVpbGQoaW5wdXRTaGFwZSk7XG4gICAgfSk7XG4gICAgdGhpcy5idWlsdCA9IHRydWU7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlTWFzayhpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwgbWFzaz86IFRlbnNvcnxUZW5zb3JbXSk6IFRlbnNvclxuICAgICAgfFRlbnNvcltdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXNrKSkge1xuICAgICAgbWFzayA9IG1hc2tbMF07XG4gICAgfVxuICAgIGxldCBvdXRwdXRNYXNrOiBUZW5zb3J8VGVuc29yW107XG4gICAgaWYgKHRoaXMucmV0dXJuU2VxdWVuY2VzKSB7XG4gICAgICBpZiAodGhpcy5tZXJnZU1vZGUgPT0gbnVsbCkge1xuICAgICAgICBvdXRwdXRNYXNrID0gW21hc2ssIG1hc2tdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0TWFzayA9IG1hc2s7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1lcmdlTW9kZSA9PSBudWxsKSB7XG4gICAgICAgIG91dHB1dE1hc2sgPSBbbnVsbCwgbnVsbF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRNYXNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucmV0dXJuU3RhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuZm9yd2FyZExheWVyLnN0YXRlcztcbiAgICAgIGNvbnN0IHN0YXRlTWFzazogVGVuc29yW10gPSBzdGF0ZXMubWFwKHN0YXRlID0+IG51bGwpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3V0cHV0TWFzaykpIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dE1hc2suY29uY2F0KHN0YXRlTWFzaykuY29uY2F0KHN0YXRlTWFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW291dHB1dE1hc2tdLmNvbmNhdChzdGF0ZU1hc2spLmNvbmNhdChzdGF0ZU1hc2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3V0cHV0TWFzaztcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBnZXQgdHJhaW5hYmxlV2VpZ2h0cygpOiBMYXllclZhcmlhYmxlW10ge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRMYXllci50cmFpbmFibGVXZWlnaHRzLmNvbmNhdChcbiAgICAgICAgdGhpcy5iYWNrd2FyZExheWVyLnRyYWluYWJsZVdlaWdodHMpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0IG5vblRyYWluYWJsZVdlaWdodHMoKTogTGF5ZXJWYXJpYWJsZVtdIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkTGF5ZXIubm9uVHJhaW5hYmxlV2VpZ2h0cy5jb25jYXQoXG4gICAgICAgIHRoaXMuYmFja3dhcmRMYXllci5ub25UcmFpbmFibGVXZWlnaHRzKTtcbiAgfVxuXG4gIC8vIFRPRE8oY2Fpcyk6IEltcGxlbWVudCBjb25zdHJhaW50cygpLlxuXG4gIG92ZXJyaWRlIHNldEZhc3RXZWlnaHRJbml0RHVyaW5nQnVpbGQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBzdXBlci5zZXRGYXN0V2VpZ2h0SW5pdER1cmluZ0J1aWxkKHZhbHVlKTtcbiAgICBpZiAodGhpcy5mb3J3YXJkTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mb3J3YXJkTGF5ZXIuc2V0RmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJhY2t3YXJkTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5iYWNrd2FyZExheWVyLnNldEZhc3RXZWlnaHRJbml0RHVyaW5nQnVpbGQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge1xuICAgICAgJ21lcmdlTW9kZSc6IHRoaXMubWVyZ2VNb2RlLFxuICAgIH07XG4gICAgLy8gVE9ETyhjYWlzKTogQWRkIGxvZ2ljIGZvciBgbnVtQ29uc3RhbnRzYCBvbmNlIHRoZSBwcm9wZXJ0eSBpcyBhZGRlZC5cbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIG92ZXJyaWRlIGZyb21Db25maWc8VCBleHRlbmRzIHNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlPihcbiAgICAgIGNsczogc2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGVDb25zdHJ1Y3RvcjxUPixcbiAgICAgIGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0KTogVCB7XG4gICAgY29uc3Qgcm5uTGF5ZXIgPVxuICAgICAgICBkZXNlcmlhbGl6ZShjb25maWdbJ2xheWVyJ10gYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0KSBhcyBSTk47XG4gICAgZGVsZXRlIGNvbmZpZ1snbGF5ZXInXTtcbiAgICAvLyBUT0RPKGNhaXMpOiBBZGQgbG9naWMgZm9yIGBudW1Db25zdGFudHNgIG9uY2UgdGhlIHByb3BlcnR5IGlzIGFkZGVkLlxuICAgIGlmIChjb25maWdbJ251bUNvbnN0YW50cyddICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKFxuICAgICAgICAgIGBEZXNlcmlhbGl6YXRpb24gb2YgYSBCaWRpcmVjdGlvbmFsIGxheWVyIHdpdGggbnVtQ29uc3RhbnRzIGAgK1xuICAgICAgICAgIGBwcmVzZW50IGlzIG5vdCBzdXBwb3J0ZWQgeWV0LmApO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3QgbmV3Q29uZmlnOiB7W2tleTogc3RyaW5nXTogYW55fSA9IGNvbmZpZztcbiAgICBuZXdDb25maWdbJ2xheWVyJ10gPSBybm5MYXllcjtcbiAgICByZXR1cm4gbmV3IGNscyhuZXdDb25maWcpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoQmlkaXJlY3Rpb25hbCk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/image_preprocessing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "Rescaling",
    ()=>Rescaling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Preprocessing Rescaling Layer
 *
 * This rescales images by a scaling and offset factor
 */ class Rescaling extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.scale = args.scale;
        if (args.offset) {
            this.offset = args.offset;
        } else {
            this.offset = 0;
        }
    }
    getConfig() {
        const config = {
            'scale': this.scale,
            'offset': this.offset
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (inputs.dtype !== 'float32') {
                inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](inputs, 'float32');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(inputs, this.scale), this.offset);
        });
    }
}
/** @nocollapse */ Rescaling.className = 'Rescaling';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Rescaling); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfcHJlcHJvY2Vzc2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvcHJlcHJvY2Vzc2luZy9pbWFnZV9wcmVwcm9jZXNzaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFZLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEtBQUssQ0FBQyxNQUFNLDRCQUE0QixDQUFDO0FBUWhEOzs7O0dBSUc7QUFDSCxNQUFhLFNBQVUsU0FBUSxLQUFLO0lBS2xDLFlBQVksSUFBbUI7UUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXhCLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVRLFNBQVM7UUFDaEIsTUFBTSxNQUFNLEdBQTZCO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDZixNQUFNLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBRyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFuQ0Qsa0JBQWtCO0FBQ1gsbUJBQVMsR0FBRyxXQUFXLENBQUM7U0FGcEIsU0FBUztBQXVDdEIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIENvZGVTbWl0aCBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7TGF5ZXJBcmdzLCBMYXllcn0gZnJvbSAnLi4vLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7IHNlcmlhbGl6YXRpb24sIFRlbnNvciwgbXVsLCBhZGQsIHRpZHkgfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHsgZ2V0RXhhY3RseU9uZVRlbnNvciB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi4vLi4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuaW1wb3J0IHsgS3dhcmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgUmVzY2FsaW5nQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIHNjYWxlOiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBQcmVwcm9jZXNzaW5nIFJlc2NhbGluZyBMYXllclxuICpcbiAqIFRoaXMgcmVzY2FsZXMgaW1hZ2VzIGJ5IGEgc2NhbGluZyBhbmQgb2Zmc2V0IGZhY3RvclxuICovXG5leHBvcnQgY2xhc3MgUmVzY2FsaW5nIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdSZXNjYWxpbmcnO1xuICBwcml2YXRlIHJlYWRvbmx5IHNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgb2Zmc2V0OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFJlc2NhbGluZ0FyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcblxuICAgIHRoaXMuc2NhbGUgPSBhcmdzLnNjYWxlO1xuXG4gICAgaWYoYXJncy5vZmZzZXQpIHtcbiAgICB0aGlzLm9mZnNldCA9IGFyZ3Mub2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICAnc2NhbGUnOiB0aGlzLnNjYWxlLFxuICAgICAgJ29mZnNldCc6IHRoaXMub2Zmc2V0XG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VDb25maWcgPSBzdXBlci5nZXRDb25maWcoKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgYmFzZUNvbmZpZyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yW118VGVuc29yIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBpbnB1dHMgPSBnZXRFeGFjdGx5T25lVGVuc29yKGlucHV0cyk7XG4gICAgICBpZihpbnB1dHMuZHR5cGUgIT09ICdmbG9hdDMyJykge1xuICAgICAgICAgIGlucHV0cyA9IEsuY2FzdChpbnB1dHMsICdmbG9hdDMyJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRkKG11bChpbnB1dHMsIHRoaXMuc2NhbGUpLCB0aGlzLm9mZnNldCk7XG4gICAgfSk7XG4gIH1cbn1cblxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFJlc2NhbGluZyk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/center_crop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "CenterCrop",
    ()=>CenterCrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/unstack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ops.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
;
;
;
;
const { resizeBilinear, cropAndResize } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["image"];
class CenterCrop extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.height = args.height;
        this.width = args.width;
    }
    centerCrop(inputs, hBuffer, wBuffer, height, width, inputHeight, inputWidth, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let input;
            let isRank3 = false;
            const top = hBuffer / inputHeight;
            const left = wBuffer / inputWidth;
            const bottom = (height + hBuffer) / inputHeight;
            const right = (width + wBuffer) / inputWidth;
            const bound = [
                top,
                left,
                bottom,
                right
            ];
            const boxesArr = [];
            if (inputs.rank === 3) {
                isRank3 = true;
                input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"])([
                    inputs
                ]);
            } else {
                input = inputs;
            }
            for(let i = 0; i < input.shape[0]; i++){
                boxesArr.push(bound);
            }
            const boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])(boxesArr, [
                boxesArr.length,
                4
            ]);
            const boxInd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(0, boxesArr.length, 1, 'int32');
            const cropSize = [
                height,
                width
            ];
            const cropped = cropAndResize(input, boxes, boxInd, cropSize, 'nearest');
            if (isRank3) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"])(cropped)), dtype);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](cropped, dtype);
        });
    }
    upsize(inputs, height, width, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const outputs = resizeBilinear(inputs, [
                height,
                width
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](outputs, dtype);
        });
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const rankedInputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            const dtype = rankedInputs.dtype;
            const inputShape = rankedInputs.shape;
            const inputHeight = inputShape[inputShape.length - 3];
            const inputWidth = inputShape[inputShape.length - 2];
            let hBuffer = 0;
            if (inputHeight !== this.height) {
                hBuffer = Math.floor((inputHeight - this.height) / 2);
            }
            let wBuffer = 0;
            if (inputWidth !== this.width) {
                wBuffer = Math.floor((inputWidth - this.width) / 2);
                if (wBuffer === 0) {
                    wBuffer = 1;
                }
            }
            if (hBuffer >= 0 && wBuffer >= 0) {
                return this.centerCrop(rankedInputs, hBuffer, wBuffer, this.height, this.width, inputHeight, inputWidth, dtype);
            } else {
                return this.upsize(inputs, this.height, this.width, dtype);
            }
        });
    }
    getConfig() {
        const config = {
            'height': this.height,
            'width': this.width
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const hAxis = inputShape.length - 3;
        const wAxis = inputShape.length - 2;
        inputShape[hAxis] = this.height;
        inputShape[wAxis] = this.width;
        return inputShape;
    }
}
/** @nocollapse */ CenterCrop.className = 'CenterCrop';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(CenterCrop); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VudGVyX2Nyb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL3ByZXByb2Nlc3NpbmcvY2VudGVyX2Nyb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFVLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUErQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25KLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBWSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUd2RCxPQUFPLEtBQUssQ0FBQyxNQUFNLDRCQUE0QixDQUFDO0FBRWhELE1BQU0sRUFBQyxjQUFjLEVBQUUsYUFBYSxFQUFDLEdBQUcsS0FBSyxDQUFDO0FBTzlDLE1BQWEsVUFBVyxTQUFRLEtBQUs7SUFLbkMsWUFBWSxJQUFvQjtRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBMkIsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUM5RCxNQUFjLEVBQUUsS0FBYSxFQUFFLFdBQW1CLEVBQ2xELFVBQWtCLEVBQUUsS0FBZTtRQUUzQyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLEtBQWUsQ0FBQztZQUNwQixJQUFJLE9BQU8sR0FBUSxLQUFLLENBQUM7WUFDekIsTUFBTSxHQUFHLEdBQVEsT0FBTyxHQUFHLFdBQVcsQ0FBQztZQUN2QyxNQUFNLElBQUksR0FBTyxPQUFPLEdBQUcsVUFB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QUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7QUFoSEQsa0JBQWtCO0FBQ1gsb0JBQVMsR0FBRyxZQUFZLENBQUM7U0FGckIsVUFBVTtBQW9IdkIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIENvZGVTbWl0aCBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7c2VyaWFsaXphdGlvbixEYXRhVHlwZSx1bnN0YWNrLHN0YWNrLHRlbnNvcixUZW5zb3IsVGVuc29yMUQsVGVuc29yMkQsIFRlbnNvcjNELCBUZW5zb3I0RCwgdGlkeSwgcmFuZ2UsIGltYWdlfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtnZXRFeGFjdGx5T25lU2hhcGUsIGdldEV4YWN0bHlPbmVUZW5zb3J9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcbmltcG9ydCB7TGF5ZXJBcmdzLCBMYXllcn0gZnJvbSAnLi4vLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQge1NoYXBlfSBmcm9tICcuLi8uLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi4vLi4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuXG5jb25zdCB7cmVzaXplQmlsaW5lYXIsIGNyb3BBbmRSZXNpemV9ID0gaW1hZ2U7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBDZW50ZXJDcm9wQXJncyBleHRlbmRzIExheWVyQXJnc3tcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBDZW50ZXJDcm9wIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdDZW50ZXJDcm9wJztcbiAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSB3aWR0aDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBDZW50ZXJDcm9wQXJncykge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMuaGVpZ2h0ID0gYXJncy5oZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IGFyZ3Mud2lkdGg7XG4gIH1cblxuICBjZW50ZXJDcm9wKGlucHV0czogVGVuc29yM0QgfCBUZW5zb3I0RCwgaEJ1ZmZlcjogbnVtYmVyLCB3QnVmZmVyOiBudW1iZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaW5wdXRIZWlnaHQ6IG51bWJlcixcbiAgICAgICAgICAgIGlucHV0V2lkdGg6IG51bWJlciwgZHR5cGU6IERhdGFUeXBlKTogVGVuc29yIHwgVGVuc29yW10ge1xuXG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgbGV0IGlucHV0OiBUZW5zb3I0RDtcbiAgICAgIGxldCBpc1JhbmszICAgICAgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRvcCAgICAgID0gaEJ1ZmZlciAvIGlucHV0SGVpZ2h0O1xuICAgICAgY29uc3QgbGVmdCAgICAgPSB3QnVmZmVyIC8gaW5wdXRXaWR0aDtcbiAgICAgIGNvbnN0IGJvdHRvbSAgID0gKChoZWlnaHQpICsgaEJ1ZmZlcikgLyBpbnB1dEhlaWdodDtcbiAgICAgIGNvbnN0IHJpZ2h0ICAgID0gKCh3aWR0aCkgKyB3QnVmZmVyKSAvIGlucHV0V2lkdGg7XG4gICAgICBjb25zdCBib3VuZCAgICA9IFt0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHRdO1xuICAgICAgY29uc3QgYm94ZXNBcnIgPSBbXTtcblxuICAgICAgaWYoaW5wdXRzLnJhbmsgPT09IDMpIHtcbiAgICAgICAgaXNSYW5rMyAgPSB0cnVlO1xuICAgICAgICBpbnB1dCAgPSBzdGFjayhbaW5wdXRzXSkgYXMgVGVuc29yNEQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dCA9IGlucHV0cyBhcyBUZW5zb3I0RDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5zaGFwZVswXTsgaSsrKSB7XG4gICAgICAgIGJveGVzQXJyLnB1c2goYm91bmQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBib3hlczogVGVuc29yMkQgID0gdGVuc29yKGJveGVzQXJyLCBbYm94ZXNBcnIubGVuZ3RoLCA0XSk7XG4gICAgICBjb25zdCBib3hJbmQ6IFRlbnNvcjFEID0gcmFuZ2UoMCwgYm94ZXNBcnIubGVuZ3RoLCAxLCAnaW50MzInKTtcblxuICAgICAgY29uc3QgY3JvcFNpemU6IFtudW1iZXIsIG51bWJlcl0gPSBbaGVpZ2h0LCB3aWR0aF07XG4gICAgICBjb25zdCBjcm9wcGVkID0gY3JvcEFuZFJlc2l6ZShpbnB1dCwgYm94ZXMsIGJveEluZCwgY3JvcFNpemUsICduZWFyZXN0Jyk7XG5cbiAgICAgIGlmKGlzUmFuazMpIHtcbiAgICAgICAgcmV0dXJuIEsuY2FzdChnZXRFeGFjdGx5T25lVGVuc29yKHVuc3RhY2soY3JvcHBlZCkpLCBkdHlwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gSy5jYXN0KGNyb3BwZWQsIGR0eXBlKTtcbiAgIH0pO1xuXG4gIH1cblxuICB1cHNpemUoaW5wdXRzIDogVGVuc29yM0QgfCBUZW5zb3I0RCwgaGVpZ2h0OiBudW1iZXIsXG4gICAgICAgICB3aWR0aDogbnVtYmVyLCBkdHlwZTogRGF0YVR5cGUpOiBUZW5zb3IgfCBUZW5zb3JbXSB7XG5cbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCBvdXRwdXRzID0gcmVzaXplQmlsaW5lYXIoaW5wdXRzLCBbaGVpZ2h0LCB3aWR0aF0pO1xuICAgICAgcmV0dXJuIEsuY2FzdChvdXRwdXRzLCBkdHlwZSk7XG4gIH0pO1xuXG59XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcjNEIHwgVGVuc29yNEQgLCBrd2FyZ3M6IEt3YXJncyk6XG4gICAgICBUZW5zb3JbXSB8IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgcmFua2VkSW5wdXRzID0gZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpIGFzIFRlbnNvcjNEIHwgVGVuc29yNEQ7XG4gICAgICBjb25zdCBkdHlwZSAgICAgICA9IHJhbmtlZElucHV0cy5kdHlwZTtcbiAgICAgIGNvbnN0IGlucHV0U2hhcGUgID0gcmFua2VkSW5wdXRzLnNoYXBlO1xuICAgICAgY29uc3QgaW5wdXRIZWlnaHQgPSBpbnB1dFNoYXBlW2lucHV0U2hhcGUubGVuZ3RoIC0gM107XG4gICAgICBjb25zdCBpbnB1dFdpZHRoICA9ICBpbnB1dFNoYXBlW2lucHV0U2hhcGUubGVuZ3RoIC0gMl07XG5cbiAgICAgIGxldCBoQnVmZmVyID0gMDtcbiAgICAgIGlmIChpbnB1dEhlaWdodCAhPT0gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgaEJ1ZmZlciA9ICBNYXRoLmZsb29yKChpbnB1dEhlaWdodCAtIHRoaXMuaGVpZ2h0KSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgd0J1ZmZlciA9IDA7XG4gICAgICBpZiAoaW5wdXRXaWR0aCAhPT0gdGhpcy53aWR0aCkge1xuICAgICAgICB3QnVmZmVyID0gTWF0aC5mbG9vcigoaW5wdXRXaWR0aCAtIHRoaXMud2lkdGgpIC8gMik7XG5cbiAgICAgICAgaWYgKHdCdWZmZXIgPT09IDApIHtcbiAgICAgICAgICB3QnVmZmVyID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihoQnVmZmVyID49IDAgJiYgd0J1ZmZlciA+PSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlckNyb3AocmFua2VkSW5wdXRzLCBoQnVmZmVyLCB3QnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIGlucHV0SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRXaWR0aCwgZHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBzaXplKGlucHV0cywgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIGR0eXBlKTtcbiAgICAgIH1cbiAgIH0pO1xuXG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0e1xuXG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICAnaGVpZ2h0JyA6IHRoaXMuaGVpZ2h0LFxuICAgICAgJ3dpZHRoJyA6IHRoaXMud2lkdGhcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlIHwgU2hhcGVbXSk6IFNoYXBlIHwgU2hhcGVbXSB7XG4gICAgaW5wdXRTaGFwZSA9IGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcbiAgICBjb25zdCBoQXhpcyA9IGlucHV0U2hhcGUubGVuZ3RoIC0gMztcbiAgICBjb25zdCB3QXhpcyA9IGlucHV0U2hhcGUubGVuZ3RoIC0gMjtcbiAgICBpbnB1dFNoYXBlW2hBeGlzXSA9IHRoaXMuaGVpZ2h0O1xuICAgIGlucHV0U2hhcGVbd0F4aXNdID0gdGhpcy53aWR0aDtcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxufVxuXG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoQ2VudGVyQ3JvcCk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/preprocessing_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "encodeCategoricalInputs",
    ()=>encodeCategoricalInputs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$dense_bincount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/dense_bincount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/expand_dims.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
;
;
;
;
;
function encodeCategoricalInputs(inputs, outputMode, depth, weights) {
    let input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
    if (input.dtype !== 'int32') {
        input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](input, 'int32');
    }
    if (outputMode === 'int') {
        return input;
    }
    const originalShape = input.shape;
    if (input.rank === 0) {
        input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"])(input, -1);
    }
    if (outputMode === 'oneHot') {
        if (input.shape[input.shape.length - 1] !== 1) {
            input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"])(input, -1);
        }
    }
    if (input.rank > 2) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`When outputMode is not int, maximum output rank is 2` + ` Received outputMode ${outputMode} and input shape ${originalShape}` + ` which would result in output rank ${input.rank}.`);
    }
    const binaryOutput = [
        'multiHot',
        'oneHot'
    ].includes(outputMode);
    const denseBincountInput = input;
    let binCounts;
    if (typeof weights !== 'undefined' && outputMode === 'count') {
        binCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$dense_bincount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBincount"])(denseBincountInput, weights, depth, binaryOutput);
    } else {
        binCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$dense_bincount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBincount"])(denseBincountInput, [], depth, binaryOutput);
    }
    if (outputMode !== 'tfIdf') {
        return binCounts;
    }
    if (weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(binCounts, weights);
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`When outputMode is 'tfIdf', weights must be provided.`);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcHJvY2Vzc2luZ191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sYXllcnMvcHJlcHJvY2Vzc2luZy9wcmVwcm9jZXNzaW5nX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFVLGFBQWEsRUFBa0MsR0FBRyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUloRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsTUFBdUIsRUFDdkIsVUFBc0IsRUFDdEIsS0FBYSxFQUNiLE9BQXNDO0lBRzVFLElBQUksS0FBSyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhDLElBQUcsS0FBSyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7UUFDMUIsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlCO0lBRUgsSUFBRyxVQUFVLEtBQUssS0FBSyxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBRWxDLElBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7UUFDbkIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQUcsVUFBVSxLQUFLLFFBQVEsRUFBRTtRQUMxQixJQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7S0FDRjtJQUVELElBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDakIsTUFBTSxJQUFJLFVBQVUsQ0FBQyxzREFBc0Q7Y0FDekUsd0JBQXdCLFVBQVUsb0JBQW9CLGFBQWEsRUFBRTtjQUNyRSxzQ0FBc0MsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakUsTUFBTSxrQkFBa0IsR0FBRyxLQUE0QixDQUFDO0lBRXhELElBQUksU0FBOEIsQ0FBQztJQUVuQyxJQUFJLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxXQUFXLElBQUksVUFBVSxLQUFLLE9BQU8sRUFBRTtRQUM5RCxTQUFTLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDNUU7U0FBTTtRQUNOLFNBQVMsR0FBRyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztLQUN2RTtJQUVGLElBQUcsVUFBVSxLQUFLLE9BQU8sRUFBRTtRQUN6QixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDO1NBQU07UUFDSCxNQUFNLElBQUksVUFBVSxDQUNsQix1REFBdUQsQ0FDeEQsQ0FBQztLQUNMO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIENvZGVTbWl0aCBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7IFRlbnNvciwgZGVuc2VCaW5jb3VudCwgVGVuc29yMUQsIFRlbnNvcjJELCBUZW5zb3JMaWtlLCBtdWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQgeyBnZXRFeGFjdGx5T25lVGVuc29yIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXNfdXRpbHMnO1xuaW1wb3J0IHsgZXhwYW5kRGltc30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7IFZhbHVlRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0ICogYXMgSyBmcm9tICcuLi8uLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5cbmV4cG9ydCB0eXBlIE91dHB1dE1vZGUgPSAnaW50JyB8ICdvbmVIb3QnIHwgJ211bHRpSG90JyB8ICdjb3VudCcgfCAndGZJZGYnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlQ2F0ZWdvcmljYWxJbnB1dHMoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0TW9kZTogT3V0cHV0TW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXB0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodHM/OiBUZW5zb3IxRHxUZW5zb3IyRHxUZW5zb3JMaWtlKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5zb3J8VGVuc29yW10ge1xuXG4gIGxldCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcblxuICBpZihpbnB1dC5kdHlwZSAhPT0gJ2ludDMyJykge1xuICAgIGlucHV0ID0gSy5jYXN0KGlucHV0LCAnaW50MzInKTtcbiAgICB9XG5cbiAgaWYob3V0cHV0TW9kZSA9PT0gJ2ludCcpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbFNoYXBlID0gaW5wdXQuc2hhcGU7XG5cbiAgaWYoaW5wdXQucmFuayA9PT0gMCkge1xuICAgIGlucHV0ID0gZXhwYW5kRGltcyhpbnB1dCwgLTEpO1xuICB9XG5cbiAgaWYob3V0cHV0TW9kZSA9PT0gJ29uZUhvdCcpIHtcbiAgICBpZihpbnB1dC5zaGFwZVtpbnB1dC5zaGFwZS5sZW5ndGggLSAxXSAhPT0gMSkge1xuICAgICAgaW5wdXQgPSBleHBhbmREaW1zKGlucHV0LCAtMSk7XG4gICAgfVxuICB9XG5cbiAgaWYoaW5wdXQucmFuayA+IDIpIHtcbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgV2hlbiBvdXRwdXRNb2RlIGlzIG5vdCBpbnQsIG1heGltdW0gb3V0cHV0IHJhbmsgaXMgMmBcbiAgICArIGAgUmVjZWl2ZWQgb3V0cHV0TW9kZSAke291dHB1dE1vZGV9IGFuZCBpbnB1dCBzaGFwZSAke29yaWdpbmFsU2hhcGV9YFxuICAgICsgYCB3aGljaCB3b3VsZCByZXN1bHQgaW4gb3V0cHV0IHJhbmsgJHtpbnB1dC5yYW5rfS5gKTtcbiAgfVxuXG4gIGNvbnN0IGJpbmFyeU91dHB1dCA9IFsnbXVsdGlIb3QnLCAnb25lSG90J10uaW5jbHVkZXMob3V0cHV0TW9kZSk7XG5cbiAgY29uc3QgZGVuc2VCaW5jb3VudElucHV0ID0gaW5wdXQgYXMgVGVuc29yMUQgfCBUZW5zb3IyRDtcblxuICBsZXQgYmluQ291bnRzOiBUZW5zb3IxRCB8IFRlbnNvcjJEO1xuXG4gIGlmICgodHlwZW9mIHdlaWdodHMpICE9PSAndW5kZWZpbmVkJyAmJiBvdXRwdXRNb2RlID09PSAnY291bnQnKSB7XG4gICAgYmluQ291bnRzID0gZGVuc2VCaW5jb3VudChkZW5zZUJpbmNvdW50SW5wdXQsIHdlaWdodHMsIGRlcHRoLCBiaW5hcnlPdXRwdXQpO1xuICAgfSBlbHNlIHtcbiAgICBiaW5Db3VudHMgPSBkZW5zZUJpbmNvdW50KGRlbnNlQmluY291bnRJbnB1dCwgW10sIGRlcHRoLCBiaW5hcnlPdXRwdXQpO1xuICAgfVxuXG4gIGlmKG91dHB1dE1vZGUgIT09ICd0ZklkZicpIHtcbiAgICByZXR1cm4gYmluQ291bnRzO1xuICB9XG5cbiAgaWYgKHdlaWdodHMpIHtcbiAgICByZXR1cm4gbXVsKGJpbkNvdW50cywgd2VpZ2h0cyk7XG4gIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgYFdoZW4gb3V0cHV0TW9kZSBpcyAndGZJZGYnLCB3ZWlnaHRzIG11c3QgYmUgcHJvdmlkZWQuYFxuICAgICAgKTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/category_encoding.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "CategoryEncoding",
    ()=>CategoryEncoding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/greater.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/greater_equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/max.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$preprocessing$2f$preprocessing_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/preprocessing_utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class CategoryEncoding extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.numTokens = args.numTokens;
        if (args.outputMode) {
            this.outputMode = args.outputMode;
        } else {
            this.outputMode = 'multiHot';
        }
    }
    getConfig() {
        const config = {
            'numTokens': this.numTokens,
            'outputMode': this.outputMode
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        if (inputShape == null) {
            return [
                this.numTokens
            ];
        }
        if (this.outputMode === 'oneHot' && inputShape[inputShape.length - 1] !== 1) {
            inputShape.push(this.numTokens);
            return inputShape;
        }
        inputShape[inputShape.length - 1] = this.numTokens;
        return inputShape;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            if (inputs.dtype !== 'int32') {
                inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"](inputs, 'int32');
            }
            let countWeights;
            if (typeof kwargs['countWeights'] !== 'undefined') {
                if (this.outputMode !== 'count') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`countWeights is not used when outputMode !== count.
              Received countWeights=${kwargs['countWeights']}`);
                }
                countWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(kwargs['countWeights']);
            }
            const maxValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(inputs);
            const minValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(inputs);
            const greaterEqualMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greater"])(this.numTokens, maxValue).bufferSync().get(0);
            const greaterMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greaterEqual"])(minValue, 0).bufferSync().get(0);
            if (!(greaterEqualMax && greaterMin)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"]('Input values must be between 0 < values <=' + ` numTokens with numTokens=${this.numTokens}`);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$preprocessing$2f$preprocessing_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeCategoricalInputs"](inputs, this.outputMode, this.numTokens, countWeights);
        });
    }
}
/** @nocollapse */ CategoryEncoding.className = 'CategoryEncoding';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(CategoryEncoding); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnlfZW5jb2RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL3ByZXByb2Nlc3NpbmcvY2F0ZWdvcnlfZW5jb2RpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxPQUFPLEVBQWEsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBVSxJQUFJLEVBQXFCLE1BQU0sdUJBQXVCLENBQUM7QUFDdkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWxGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRCxPQUFPLEtBQUssS0FBSyxNQUFNLHVCQUF1QixDQUFDO0FBUS9DLE1BQWEsZ0JBQWlCLFNBQVEsS0FBSztJQU16QyxZQUFZLElBQTBCO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVoQyxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFUSxTQUFTO1FBQ2hCLE1BQU0sTUFBTSxHQUE2QjtZQUN2QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzlCLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVRLGtCQUFrQixDQUFDLFVBQXlCO1FBQ25ELFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1QyxJQUFHLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ3pFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBRUQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVCLEVBQUUsTUFBYztRQUNuRCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFYixNQUFNLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsSUFBRyxNQUFNLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDO1lBRUMsSUFBSSxZQUFpQyxDQUFDO1lBRXRDLElBQUcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFFbEQsSUFBRyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTtvQkFDOUIsTUFBTSxJQUFJLFVBQVUsQ0FDbEI7c0NBQ3dCLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3JEO2dCQUVELFlBQVk7c0JBQ1AsbUJBQW1CLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFzQixDQUFDO2FBQ3ZFO1lBRUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7aUJBQ1osVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpFLE1BQU0sVUFBVSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpFLElBQUcsQ0FBQyxDQUFDLGVBQWUsSUFBSSxVQUFVLENBQUMsRUFBRTtnQkFFbkMsTUFBTSxJQUFJLFVBQVUsQ0FBQyw0Q0FBNEM7c0JBQzdELDZCQUE2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzthQUNwRDtZQUVELE9BQU8sS0FBSyxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFDekMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFqRkQsa0JBQWtCO0FBQ1gsMEJBQVMsR0FBRyxrQkFBa0IsQ0FBQztTQUYzQixnQkFBZ0I7QUFxRjdCLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIENvZGVTbWl0aCBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7IExheWVyQXJncywgTGF5ZXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvdG9wb2xvZ3knO1xuaW1wb3J0IHsgc2VyaWFsaXphdGlvbiwgVGVuc29yLCB0aWR5LCBUZW5zb3IxRCwgVGVuc29yMkR9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQgeyBncmVhdGVyLCBncmVhdGVyRXF1YWwsIG1heCwgbWlufSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHsgU2hhcGUgfSBmcm9tICcuLi8uLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmltcG9ydCB7IGdldEV4YWN0bHlPbmVTaGFwZSwgZ2V0RXhhY3RseU9uZVRlbnNvciB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcbmltcG9ydCB7IEt3YXJncyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFZhbHVlRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0ICogYXMgSyBmcm9tICcuLi8uLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3ByZXByb2Nlc3NpbmdfdXRpbHMnO1xuaW1wb3J0IHsgT3V0cHV0TW9kZSB9IGZyb20gJy4vcHJlcHJvY2Vzc2luZ191dGlscyc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBDYXRlZ29yeUVuY29kaW5nQXJncyBleHRlbmRzIExheWVyQXJncyB7XG4gIG51bVRva2VuczogbnVtYmVyO1xuICBvdXRwdXRNb2RlPzogT3V0cHV0TW9kZTtcbiB9XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUVuY29kaW5nIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdDYXRlZ29yeUVuY29kaW5nJztcbiAgcHJpdmF0ZSByZWFkb25seSBudW1Ub2tlbnM6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBvdXRwdXRNb2RlOiBPdXRwdXRNb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IENhdGVnb3J5RW5jb2RpbmdBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5udW1Ub2tlbnMgPSBhcmdzLm51bVRva2VucztcblxuICAgIGlmKGFyZ3Mub3V0cHV0TW9kZSkge1xuICAgIHRoaXMub3V0cHV0TW9kZSA9IGFyZ3Mub3V0cHV0TW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXRNb2RlID0gJ211bHRpSG90JztcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHtcbiAgICAgICdudW1Ub2tlbnMnOiB0aGlzLm51bVRva2VucyxcbiAgICAgICdvdXRwdXRNb2RlJzogdGhpcy5vdXRwdXRNb2RlLFxuICAgIH07XG5cbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG5cbiAgICBpZihpbnB1dFNoYXBlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBbdGhpcy5udW1Ub2tlbnNdO1xuICAgIH1cblxuICAgIGlmKHRoaXMub3V0cHV0TW9kZSA9PT0gJ29uZUhvdCcgJiYgaW5wdXRTaGFwZVtpbnB1dFNoYXBlLmxlbmd0aCAtIDFdICE9PSAxKXtcbiAgICAgIGlucHV0U2hhcGUucHVzaCh0aGlzLm51bVRva2Vucyk7XG4gICAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgICB9XG5cbiAgICBpbnB1dFNoYXBlW2lucHV0U2hhcGUubGVuZ3RoIC0gMV0gPSB0aGlzLm51bVRva2VucztcbiAgICByZXR1cm4gaW5wdXRTaGFwZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yW118VGVuc29yIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG5cbiAgICAgICAgaW5wdXRzID0gZ2V0RXhhY3RseU9uZVRlbnNvcihpbnB1dHMpO1xuICAgICAgICBpZihpbnB1dHMuZHR5cGUgIT09ICdpbnQzMicpIHtcbiAgICAgICAgICBpbnB1dHMgPSBLLmNhc3QoaW5wdXRzLCAnaW50MzInKTtcbiAgICAgIH1cblxuICAgICAgICBsZXQgY291bnRXZWlnaHRzOiBUZW5zb3IxRCB8IFRlbnNvcjJEO1xuXG4gICAgICAgIGlmKCh0eXBlb2Yga3dhcmdzWydjb3VudFdlaWdodHMnXSkgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICBpZih0aGlzLm91dHB1dE1vZGUgIT09ICdjb3VudCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICBgY291bnRXZWlnaHRzIGlzIG5vdCB1c2VkIHdoZW4gb3V0cHV0TW9kZSAhPT0gY291bnQuXG4gICAgICAgICAgICAgIFJlY2VpdmVkIGNvdW50V2VpZ2h0cz0ke2t3YXJnc1snY291bnRXZWlnaHRzJ119YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY291bnRXZWlnaHRzXG4gICAgICAgICAgICA9ICBnZXRFeGFjdGx5T25lVGVuc29yKGt3YXJnc1snY291bnRXZWlnaHRzJ10pIGFzIFRlbnNvcjFEfFRlbnNvcjJEO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBtYXgoaW5wdXRzKTtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBtaW4oaW5wdXRzKTtcbiAgICAgICAgY29uc3QgZ3JlYXRlckVxdWFsTWF4ID0gZ3JlYXRlcih0aGlzLm51bVRva2VucywgbWF4VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1ZmZlclN5bmMoKS5nZXQoMCk7XG5cbiAgICAgICAgY29uc3QgZ3JlYXRlck1pbiA9IGdyZWF0ZXJFcXVhbChtaW5WYWx1ZSwgMCkuYnVmZmVyU3luYygpLmdldCgwKTtcblxuICAgICAgICBpZighKGdyZWF0ZXJFcXVhbE1heCAmJiBncmVhdGVyTWluKSkge1xuXG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0lucHV0IHZhbHVlcyBtdXN0IGJlIGJldHdlZW4gMCA8IHZhbHVlcyA8PSdcbiAgICAgICAgICAgICsgYCBudW1Ub2tlbnMgd2l0aCBudW1Ub2tlbnM9JHt0aGlzLm51bVRva2Vuc31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5lbmNvZGVDYXRlZ29yaWNhbElucHV0cyhpbnB1dHMsXG4gICAgICAgICAgdGhpcy5vdXRwdXRNb2RlLCB0aGlzLm51bVRva2VucywgY291bnRXZWlnaHRzKTtcbiAgICB9KTtcbiAgfVxufVxuXG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoQ2F0ZWdvcnlFbmNvZGluZyk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/image_resizing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "Resizing",
    ()=>Resizing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>"); // mul, add
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ops.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)"); //, getExactlyOneTensor
;
;
;
;
// tf methods unimplemented in tfjs: 'bicubic', 'area', 'lanczos3', 'lanczos5',
//                                   'gaussian', 'mitchellcubic'
const INTERPOLATION_KEYS = [
    'bilinear',
    'nearest'
];
const INTERPOLATION_METHODS = new Set(INTERPOLATION_KEYS);
/**
 * Preprocessing Resizing Layer
 *
 * This resizes images by a scaling and offset factor
 */ class Resizing extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.height = args.height;
        this.width = args.width;
        if (args.interpolation) {
            if (INTERPOLATION_METHODS.has(args.interpolation)) {
                this.interpolation = args.interpolation;
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Invalid interpolation parameter: ${args.interpolation} is not implemented`);
            }
        } else {
            this.interpolation = 'bilinear';
        }
        this.cropToAspectRatio = Boolean(args.cropToAspectRatio);
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const numChannels = inputShape[2];
        return [
            this.height,
            this.width,
            numChannels
        ];
    }
    getConfig() {
        const config = {
            'height': this.height,
            'width': this.width,
            'interpolation': this.interpolation,
            'cropToAspectRatio': this.cropToAspectRatio
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const size = [
                this.height,
                this.width
            ];
            if (this.interpolation === 'bilinear') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["image"].resizeBilinear(inputs, size, !this.cropToAspectRatio);
            } else if (this.interpolation === 'nearest') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["image"].resizeNearestNeighbor(inputs, size, !this.cropToAspectRatio);
            } else {
                throw new Error(`Interpolation is ${this.interpolation} but only ${[
                    ...INTERPOLATION_METHODS
                ]} are supported`);
            }
        });
    }
}
/** @nocollapse */ Resizing.className = 'Resizing';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Resizing); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfcmVzaXppbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvbGF5ZXJzL3ByZXByb2Nlc3NpbmcvaW1hZ2VfcmVzaXppbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxPQUFPLEVBQUMsS0FBSyxFQUFRLGFBQWEsRUFBVSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQyxDQUFFLFdBQVc7QUFFNUYsT0FBTyxFQUFDLEtBQUssRUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFHeEMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUMsQ0FBRSx1QkFBdUI7QUFFcEYsK0VBQStFO0FBQy9FLGdFQUFnRTtBQUNoRSxNQUFNLGtCQUFrQixHQUFHLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBVSxDQUFDO0FBQzVELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQVUxRDs7OztHQUlHO0FBRUgsTUFBYSxRQUFTLFNBQVEsS0FBSztJQVVqQyxZQUFZLElBQWtCO1FBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxVQUFVLENBQUMsb0NBQ2pCLElBQUksQ0FBQyxhQUFhLHFCQUFxQixDQUFDLENBQUM7YUFDOUM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFUSxrQkFBa0IsQ0FBQyxVQUF5QjtRQUNuRCxVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVRLFNBQVM7UUFDaEIsTUFBTSxNQUFNLEdBQTZCO1lBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ25DLG1CQUFtQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDNUMsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRVEsSUFBSSxDQUFDLE1BQXVDLEVBQUUsTUFBYztRQUVuRSxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDZixNQUFNLElBQUksR0FBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssVUFBVSxFQUFFO2dCQUNyQyxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3BFO2lCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7Z0JBQzNDLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixDQUM5QixNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLGFBQWEsYUFBYSxDQUFDLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNoSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUE1REQsa0JBQWtCO0FBQ1gsa0JBQVMsR0FBRyxVQUFVLENBQUM7U0FGbkIsUUFBUTtBQWdFckIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIENvZGVTbWl0aCBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7aW1hZ2UsIFJhbmssIHNlcmlhbGl6YXRpb24sIFRlbnNvciwgdGlkeX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJzsgIC8vIG11bCwgYWRkXG5cbmltcG9ydCB7TGF5ZXIsIExheWVyQXJnc30gZnJvbSAnLi4vLi4vZW5naW5lL3RvcG9sb2d5JztcbmltcG9ydCB7VmFsdWVFcnJvcn0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7U2hhcGV9IGZyb20gJy4uLy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtLd2FyZ3N9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7Z2V0RXhhY3RseU9uZVNoYXBlfSBmcm9tICcuLi8uLi91dGlscy90eXBlc191dGlscyc7ICAvLywgZ2V0RXhhY3RseU9uZVRlbnNvclxuXG4vLyB0ZiBtZXRob2RzIHVuaW1wbGVtZW50ZWQgaW4gdGZqczogJ2JpY3ViaWMnLCAnYXJlYScsICdsYW5jem9zMycsICdsYW5jem9zNScsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhdXNzaWFuJywgJ21pdGNoZWxsY3ViaWMnXG5jb25zdCBJTlRFUlBPTEFUSU9OX0tFWVMgPSBbJ2JpbGluZWFyJywgJ25lYXJlc3QnXSBhcyBjb25zdDtcbmNvbnN0IElOVEVSUE9MQVRJT05fTUVUSE9EUyA9IG5ldyBTZXQoSU5URVJQT0xBVElPTl9LRVlTKTtcbnR5cGUgSW50ZXJwb2xhdGlvblR5cGUgPSB0eXBlb2YgSU5URVJQT0xBVElPTl9LRVlTW251bWJlcl07XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBSZXNpemluZ0FyZ3MgZXh0ZW5kcyBMYXllckFyZ3Mge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaW50ZXJwb2xhdGlvbj86IEludGVycG9sYXRpb25UeXBlOyAvLyBkZWZhdWx0ID0gJ2JpbGluZWFyJztcbiAgY3JvcFRvQXNwZWN0UmF0aW8/OiBib29sZWFuOyAgICAgICAvLyBkZWZhdWx0ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUHJlcHJvY2Vzc2luZyBSZXNpemluZyBMYXllclxuICpcbiAqIFRoaXMgcmVzaXplcyBpbWFnZXMgYnkgYSBzY2FsaW5nIGFuZCBvZmZzZXQgZmFjdG9yXG4gKi9cblxuZXhwb3J0IGNsYXNzIFJlc2l6aW5nIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdSZXNpemluZyc7XG4gIHByaXZhdGUgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgLy8gbWV0aG9kIG9mIGludGVycG9sYXRpb24gdG8gYmUgdXNlZDsgZGVmYXVsdCA9IFwiYmlsaW5lYXJcIjtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnRlcnBvbGF0aW9uOiBJbnRlcnBvbGF0aW9uVHlwZTtcbiAgLy8gdG9nZ2xlIHdoZXRoZXIgdGhlIGFzcGVjdCByYXRpbyBzaG91bGQgYmUgcHJlc2VydmVkOyBkZWZhdWx0ID0gZmFsc2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgY3JvcFRvQXNwZWN0UmF0aW86IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoYXJnczogUmVzaXppbmdBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG5cbiAgICB0aGlzLmhlaWdodCA9IGFyZ3MuaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSBhcmdzLndpZHRoO1xuXG4gICAgaWYgKGFyZ3MuaW50ZXJwb2xhdGlvbikge1xuICAgICAgaWYgKElOVEVSUE9MQVRJT05fTUVUSE9EUy5oYXMoYXJncy5pbnRlcnBvbGF0aW9uKSkge1xuICAgICAgICB0aGlzLmludGVycG9sYXRpb24gPSBhcmdzLmludGVycG9sYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgSW52YWxpZCBpbnRlcnBvbGF0aW9uIHBhcmFtZXRlcjogJHtcbiAgICAgICAgICAgIGFyZ3MuaW50ZXJwb2xhdGlvbn0gaXMgbm90IGltcGxlbWVudGVkYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJwb2xhdGlvbiA9ICdiaWxpbmVhcic7XG4gICAgfVxuICAgIHRoaXMuY3JvcFRvQXNwZWN0UmF0aW8gPSBCb29sZWFuKGFyZ3MuY3JvcFRvQXNwZWN0UmF0aW8pO1xuICB9XG5cbiAgb3ZlcnJpZGUgY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlfFNoYXBlW10pOiBTaGFwZXxTaGFwZVtdIHtcbiAgICBpbnB1dFNoYXBlID0gZ2V0RXhhY3RseU9uZVNoYXBlKGlucHV0U2hhcGUpO1xuICAgIGNvbnN0IG51bUNoYW5uZWxzID0gaW5wdXRTaGFwZVsyXTtcbiAgICByZXR1cm4gW3RoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBudW1DaGFubmVsc107XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHtcbiAgICAgICdoZWlnaHQnOiB0aGlzLmhlaWdodCxcbiAgICAgICd3aWR0aCc6IHRoaXMud2lkdGgsXG4gICAgICAnaW50ZXJwb2xhdGlvbic6IHRoaXMuaW50ZXJwb2xhdGlvbixcbiAgICAgICdjcm9wVG9Bc3BlY3RSYXRpbyc6IHRoaXMuY3JvcFRvQXNwZWN0UmF0aW9cbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcjxSYW5rLlIzPnxUZW5zb3I8UmFuay5SND4sIGt3YXJnczogS3dhcmdzKTpcbiAgICAgIFRlbnNvcltdfFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3Qgc2l6ZTogW251bWJlciwgbnVtYmVyXSA9IFt0aGlzLmhlaWdodCwgdGhpcy53aWR0aF07XG4gICAgICBpZiAodGhpcy5pbnRlcnBvbGF0aW9uID09PSAnYmlsaW5lYXInKSB7XG4gICAgICAgIHJldHVybiBpbWFnZS5yZXNpemVCaWxpbmVhcihpbnB1dHMsIHNpemUsICF0aGlzLmNyb3BUb0FzcGVjdFJhdGlvKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnRlcnBvbGF0aW9uID09PSAnbmVhcmVzdCcpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlLnJlc2l6ZU5lYXJlc3ROZWlnaGJvcihcbiAgICAgICAgICAgIGlucHV0cywgc2l6ZSwgIXRoaXMuY3JvcFRvQXNwZWN0UmF0aW8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcnBvbGF0aW9uIGlzICR7dGhpcy5pbnRlcnBvbGF0aW9ufSBidXQgb25seSAke1suLi5JTlRFUlBPTEFUSU9OX01FVEhPRFNdfSBhcmUgc3VwcG9ydGVkYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFJlc2l6aW5nKTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/preprocessing/random_width.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2023 CodeSmith LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([
    "INTERPOLATION_METHODS",
    ()=>INTERPOLATION_METHODS,
    "RandomWidth",
    ()=>RandomWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ops.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-client] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$base_random_layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/base_random_layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/random_uniform.js [app-client] (ecmascript)");
;
;
;
;
;
const INTERPOLATION_KEYS = [
    'bilinear',
    'nearest'
];
const INTERPOLATION_METHODS = new Set(INTERPOLATION_KEYS);
/**
 * Preprocessing Layer with randomly varies image during training
 *
 * This layer randomly adjusts the width of a batch of images of a
 * batch of images by a random factor.
 *
 * The input should be a 3D (unbatched) or
 * 4D (batched) tensor in the `"channels_last"` image data format. Input pixel
 * values can be of any range (e.g. `[0., 1.)` or `[0, 255]`) and of integer
 * or floating point dtype. By default, the layer will output floats.
 *
 * tf methods implemented in tfjs: 'bilinear', 'nearest',
 * tf methods unimplemented in tfjs: 'bicubic', 'area', 'lanczos3', 'lanczos5',
 *                                   'gaussian', 'mitchellcubic'
 *
 */ class RandomWidth extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$base_random_layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseRandomLayer"] {
    constructor(args){
        super(args);
        const { factor, interpolation = 'bilinear' } = args;
        this.factor = factor;
        if (Array.isArray(this.factor) && this.factor.length === 2) {
            this.widthLower = this.factor[0];
            this.widthUpper = this.factor[1];
        } else if (!Array.isArray(this.factor) && this.factor > 0) {
            this.widthLower = -this.factor;
            this.widthUpper = this.factor;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);
        }
        if (this.widthLower < -1.0 || this.widthUpper < -1.0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`factor must have values larger than -1. Got: ${this.factor}`);
        }
        if (this.widthUpper < this.widthLower) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);
        }
        if (interpolation) {
            if (INTERPOLATION_METHODS.has(interpolation)) {
                this.interpolation = interpolation;
            } else {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValueError"](`Invalid interpolation parameter: ${interpolation} is not implemented`);
            }
        }
    }
    getConfig() {
        const config = {
            'factor': this.factor,
            'interpolation': this.interpolation
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
    computeOutputShape(inputShape) {
        inputShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        const numChannels = inputShape[2];
        return [
            this.imgHeight,
            -1,
            numChannels
        ];
    }
    call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExactlyOneTensor"])(inputs);
            this.imgHeight = input.shape[input.shape.length - 3];
            const imgWidth = input.shape[input.shape.length - 2];
            this.widthFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomUniform"])([
                1
            ], 1.0 + this.widthLower, 1.0 + this.widthUpper, 'float32', this.randomGenerator.next());
            let adjustedWidth = this.widthFactor.dataSync()[0] * imgWidth;
            adjustedWidth = Math.round(adjustedWidth);
            const size = [
                this.imgHeight,
                adjustedWidth
            ];
            switch(this.interpolation){
                case 'bilinear':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["image"].resizeBilinear(inputs, size);
                case 'nearest':
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["image"].resizeNearestNeighbor(inputs, size);
                default:
                    throw new Error(`Interpolation is ${this.interpolation}
          but only ${[
                        ...INTERPOLATION_METHODS
                    ]} are supported`);
            }
        });
    }
}
/** @nocollapse */ RandomWidth.className = 'RandomWidth';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(RandomWidth); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tX3dpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2xheWVycy9wcmVwcm9jZXNzaW5nL3JhbmRvbV93aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILE9BQU8sRUFBRSxLQUFLLEVBQVEsYUFBYSxFQUFVLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUF1QixlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFTdEQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQVUsQ0FBQztBQUM1RCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBR2pFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE1BQWEsV0FBWSxTQUFRLGVBQWU7SUFVOUMsWUFBWSxJQUFxQjtRQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixNQUFNLEVBQUMsTUFBTSxFQUFFLGFBQWEsR0FBRyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lB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LGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sSUFBSSxHQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFOUQsUUFBUSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMxQixLQUFLLFVBQVU7b0JBQ2IsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUMsS0FBSyxTQUFTO29CQUNaLE9BQU8sS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkQ7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLGFBQWE7cUJBQzNDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQS9GRCxrQkFBa0I7QUFDRixxQkFBUyxHQUFHLGFBQWEsQ0FBQztTQUYvQixXQUFXO0FBbUd4QixhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgQ29kZVNtaXRoIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHsgaW1hZ2UsIFJhbmssIHNlcmlhbGl6YXRpb24sIFRlbnNvciwgdGlkeSB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQgeyBnZXRFeGFjdGx5T25lVGVuc29yLCBnZXRFeGFjdGx5T25lU2hhcGUgfSBmcm9tICcuLi8uLi91dGlscy90eXBlc191dGlscyc7XG5pbXBvcnQgeyBTaGFwZSB9IGZyb20gJy4uLy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHsgS3dhcmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVmFsdWVFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBCYXNlUmFuZG9tTGF5ZXJBcmdzLCBCYXNlUmFuZG9tTGF5ZXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvYmFzZV9yYW5kb21fbGF5ZXInO1xuaW1wb3J0IHsgcmFuZG9tVW5pZm9ybSB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBSYW5kb21XaWR0aEFyZ3MgZXh0ZW5kcyBCYXNlUmFuZG9tTGF5ZXJBcmdzIHtcbiAgIGZhY3RvcjogbnVtYmVyIHwgW251bWJlciwgbnVtYmVyXTtcbiAgIGludGVycG9sYXRpb24/OiBJbnRlcnBvbGF0aW9uVHlwZTsgLy8gZGVmYXVsdCA9ICdiaWxpbmVhcic7XG4gICBzZWVkPzogbnVtYmVyOyAvLyBkZWZhdWx0ID0gbnVsbDtcbiAgIGF1dG9WZWN0b3JpemU/OiBib29sZWFuO1xufVxuXG5jb25zdCBJTlRFUlBPTEFUSU9OX0tFWVMgPSBbJ2JpbGluZWFyJywgJ25lYXJlc3QnXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBJTlRFUlBPTEFUSU9OX01FVEhPRFMgPSBuZXcgU2V0KElOVEVSUE9MQVRJT05fS0VZUyk7XG50eXBlIEludGVycG9sYXRpb25UeXBlID0gdHlwZW9mIElOVEVSUE9MQVRJT05fS0VZU1tudW1iZXJdO1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmcgTGF5ZXIgd2l0aCByYW5kb21seSB2YXJpZXMgaW1hZ2UgZHVyaW5nIHRyYWluaW5nXG4gKlxuICogVGhpcyBsYXllciByYW5kb21seSBhZGp1c3RzIHRoZSB3aWR0aCBvZiBhIGJhdGNoIG9mIGltYWdlcyBvZiBhXG4gKiBiYXRjaCBvZiBpbWFnZXMgYnkgYSByYW5kb20gZmFjdG9yLlxuICpcbiAqIFRoZSBpbnB1dCBzaG91bGQgYmUgYSAzRCAodW5iYXRjaGVkKSBvclxuICogNEQgKGJhdGNoZWQpIHRlbnNvciBpbiB0aGUgYFwiY2hhbm5lbHNfbGFzdFwiYCBpbWFnZSBkYXRhIGZvcm1hdC4gSW5wdXQgcGl4ZWxcbiAqIHZhbHVlcyBjYW4gYmUgb2YgYW55IHJhbmdlIChlLmcuIGBbMC4sIDEuKWAgb3IgYFswLCAyNTVdYCkgYW5kIG9mIGludGVnZXJcbiAqIG9yIGZsb2F0aW5nIHBvaW50IGR0eXBlLiBCeSBkZWZhdWx0LCB0aGUgbGF5ZXIgd2lsbCBvdXRwdXQgZmxvYXRzLlxuICpcbiAqIHRmIG1ldGhvZHMgaW1wbGVtZW50ZWQgaW4gdGZqczogJ2JpbGluZWFyJywgJ25lYXJlc3QnLFxuICogdGYgbWV0aG9kcyB1bmltcGxlbWVudGVkIGluIHRmanM6ICdiaWN1YmljJywgJ2FyZWEnLCAnbGFuY3pvczMnLCAnbGFuY3pvczUnLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYXVzc2lhbicsICdtaXRjaGVsbGN1YmljJ1xuICpcbiAqL1xuXG5leHBvcnQgY2xhc3MgUmFuZG9tV2lkdGggZXh0ZW5kcyBCYXNlUmFuZG9tTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIG92ZXJyaWRlIGNsYXNzTmFtZSA9ICdSYW5kb21XaWR0aCc7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmFjdG9yOiBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXJdO1xuICBwcml2YXRlIHJlYWRvbmx5IGludGVycG9sYXRpb24/OiBJbnRlcnBvbGF0aW9uVHlwZTsgIC8vIGRlZmF1bHQgPSAnYmlsaW5lYXJcbiAgcHJpdmF0ZSB3aWR0aExvd2VyOiBudW1iZXI7XG4gIHByaXZhdGUgd2lkdGhVcHBlcjogbnVtYmVyO1xuICBwcml2YXRlIGltZ0hlaWdodDogbnVtYmVyO1xuICBwcml2YXRlIHdpZHRoRmFjdG9yOiBUZW5zb3I8UmFuay5SMT47XG5cbiAgY29uc3RydWN0b3IoYXJnczogUmFuZG9tV2lkdGhBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgY29uc3Qge2ZhY3RvciwgaW50ZXJwb2xhdGlvbiA9ICdiaWxpbmVhcid9ID0gYXJncztcblxuICAgIHRoaXMuZmFjdG9yID0gZmFjdG9yO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5mYWN0b3IpICYmIHRoaXMuZmFjdG9yLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy53aWR0aExvd2VyID0gdGhpcy5mYWN0b3JbMF07XG4gICAgICB0aGlzLndpZHRoVXBwZXIgPSB0aGlzLmZhY3RvclsxXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuZmFjdG9yKSAmJiB0aGlzLmZhY3RvciA+IDApe1xuICAgICAgdGhpcy53aWR0aExvd2VyID0gLXRoaXMuZmFjdG9yO1xuICAgICAgdGhpcy53aWR0aFVwcGVyID0gdGhpcy5mYWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICBgSW52YWxpZCBmYWN0b3I6ICR7dGhpcy5mYWN0b3J9LiBNdXN0IGJlIHBvc2l0aXZlIG51bWJlciBvciB0dXBsZSBvZiAyIG51bWJlcnNgXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aExvd2VyIDwgLTEuMCB8fCB0aGlzLndpZHRoVXBwZXIgPCAtMS4wKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgYGZhY3RvciBtdXN0IGhhdmUgdmFsdWVzIGxhcmdlciB0aGFuIC0xLiBHb3Q6ICR7dGhpcy5mYWN0b3J9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53aWR0aFVwcGVyIDwgdGhpcy53aWR0aExvd2VyKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgYGZhY3RvciBjYW5ub3QgaGF2ZSB1cHBlciBib3VuZCBsZXNzIHRoYW4gbG93ZXIgYm91bmQuXG4gICAgICAgIEdvdCB1cHBlciBib3VuZDogJHt0aGlzLndpZHRoVXBwZXJ9LlxuICAgICAgICBHb3QgbG93ZXIgYm91bmQ6ICR7dGhpcy53aWR0aExvd2VyfVxuICAgICAgYCk7XG4gICAgfVxuXG4gICAgaWYgKGludGVycG9sYXRpb24pIHtcbiAgICAgIGlmIChJTlRFUlBPTEFUSU9OX01FVEhPRFMuaGFzKGludGVycG9sYXRpb24pKSB7XG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgSW52YWxpZCBpbnRlcnBvbGF0aW9uIHBhcmFtZXRlcjogJHtcbiAgICAgICAgICAgIGludGVycG9sYXRpb259IGlzIG5vdCBpbXBsZW1lbnRlZGApO1xuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHtcbiAgICAgICdmYWN0b3InOiB0aGlzLmZhY3RvcixcbiAgICAgICdpbnRlcnBvbGF0aW9uJzogdGhpcy5pbnRlcnBvbGF0aW9uLFxuICAgIH07XG5cbiAgICBjb25zdCBiYXNlQ29uZmlnID0gc3VwZXIuZ2V0Q29uZmlnKCk7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGJhc2VDb25maWcpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlucHV0U2hhcGUgPSBnZXRFeGFjdGx5T25lU2hhcGUoaW5wdXRTaGFwZSk7XG4gICAgY29uc3QgbnVtQ2hhbm5lbHMgPSBpbnB1dFNoYXBlWzJdO1xuICAgIHJldHVybiBbdGhpcy5pbWdIZWlnaHQsIC0xLCBudW1DaGFubmVsc107XG4gIH1cblxuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yPFJhbmsuUjM+fFRlbnNvcjxSYW5rLlI0PixcbiAgICBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcltdfFRlbnNvciB7XG5cbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGdldEV4YWN0bHlPbmVUZW5zb3IoaW5wdXRzKTtcbiAgICAgIHRoaXMuaW1nSGVpZ2h0ID0gaW5wdXQuc2hhcGVbaW5wdXQuc2hhcGUubGVuZ3RoIC0gM107XG4gICAgICBjb25zdCBpbWdXaWR0aCA9IGlucHV0LnNoYXBlW2lucHV0LnNoYXBlLmxlbmd0aCAtIDJdO1xuXG4gICAgICB0aGlzLndpZHRoRmFjdG9yID0gcmFuZG9tVW5pZm9ybShbMV0sXG4gICAgICAgICgxLjAgKyB0aGlzLndpZHRoTG93ZXIpLCAoMS4wICsgdGhpcy53aWR0aFVwcGVyKSxcbiAgICAgICAgJ2Zsb2F0MzInLCB0aGlzLnJhbmRvbUdlbmVyYXRvci5uZXh0KClcbiAgICAgICk7XG5cbiAgICAgIGxldCBhZGp1c3RlZFdpZHRoID0gdGhpcy53aWR0aEZhY3Rvci5kYXRhU3luYygpWzBdICogaW1nV2lkdGg7XG4gICAgICBhZGp1c3RlZFdpZHRoID0gTWF0aC5yb3VuZChhZGp1c3RlZFdpZHRoKTtcblxuICAgICAgY29uc3Qgc2l6ZTpbbnVtYmVyLCBudW1iZXJdID0gW3RoaXMuaW1nSGVpZ2h0LCBhZGp1c3RlZFdpZHRoXTtcblxuICAgICAgc3dpdGNoICh0aGlzLmludGVycG9sYXRpb24pIHtcbiAgICAgICAgY2FzZSAnYmlsaW5lYXInOlxuICAgICAgICAgIHJldHVybiBpbWFnZS5yZXNpemVCaWxpbmVhcihpbnB1dHMsIHNpemUpO1xuICAgICAgICBjYXNlICduZWFyZXN0JzpcbiAgICAgICAgICByZXR1cm4gaW1hZ2UucmVzaXplTmVhcmVzdE5laWdoYm9yKGlucHV0cywgc2l6ZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcnBvbGF0aW9uIGlzICR7dGhpcy5pbnRlcnBvbGF0aW9ufVxuICAgICAgICAgIGJ1dCBvbmx5ICR7Wy4uLklOVEVSUE9MQVRJT05fTUVUSE9EU119IGFyZSBzdXBwb3J0ZWRgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoUmFuZG9tV2lkdGgpO1xuIl19
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-layers_dist_layers_81754764._.js.map