module.exports = [
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "assertNotComplex",
    ()=>assertNotComplex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
;
function assertNotComplex(tensor, opName) {
    if (!Array.isArray(tensor)) {
        tensor = [
            tensor
        ];
    }
    tensor.forEach((t)=>{
        if (t != null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(t.dtype !== 'complex64', ()=>`${opName} does not support complex64 tensors in the CPU backend.`);
        }
    });
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3B1X3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy9jcHVfdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQWEsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdkQsTUFBTSxVQUFVLGdCQUFnQixDQUM1QixNQUErQixFQUFFLE1BQWM7SUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDMUIsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkI7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQ1AsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQ3ZCLEdBQUcsRUFBRSxDQUFDLEdBQ0YsTUFBTSx5REFBeUQsQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge1RlbnNvckluZm8sIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROb3RDb21wbGV4KFxuICAgIHRlbnNvcjogVGVuc29ySW5mb3xUZW5zb3JJbmZvW10sIG9wTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh0ZW5zb3IpKSB7XG4gICAgdGVuc29yID0gW3RlbnNvcl07XG4gIH1cbiAgdGVuc29yLmZvckVhY2godCA9PiB7XG4gICAgaWYgKHQgIT0gbnVsbCkge1xuICAgICAgdXRpbC5hc3NlcnQoXG4gICAgICAgICAgdC5kdHlwZSAhPT0gJ2NvbXBsZXg2NCcsXG4gICAgICAgICAgKCkgPT4gYCR7XG4gICAgICAgICAgICAgIG9wTmFtZX0gZG9lcyBub3Qgc3VwcG9ydCBjb21wbGV4NjQgdGVuc29ycyBpbiB0aGUgQ1BVIGJhY2tlbmQuYCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/backend_cpu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "MathBackendCPU",
    ()=>MathBackendCPU
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-ssr] (ecmascript) <export * as backend_util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$kernel_impls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__kernel_impls$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js [app-ssr] (ecmascript) <export * as kernel_impls>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$cpu_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js [app-ssr] (ecmascript)");
;
const whereImpl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$kernel_impls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__kernel_impls$3e$__["kernel_impls"].whereImpl;
;
class MathBackendCPU extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KernelBackend"] {
    nextDataId() {
        return MathBackendCPU.nextDataId++;
    }
    constructor(){
        super();
        this.blockSize = 48;
        this.firstUse = true;
        this.data = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataStorage"](this, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engine"])());
    }
    write(values, shape, dtype) {
        if (this.firstUse) {
            this.firstUse = false;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])().get('IS_NODE')) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].warn('\n============================\n' + 'Hi, looks like you are running TensorFlow.js in ' + 'Node.js. To speed things up dramatically, install our node ' + 'backend, visit https://github.com/tensorflow/tfjs-node for more details. ' + '\n============================');
            }
        }
        const dataId = {
            id: this.nextDataId()
        };
        this.data.set(dataId, {
            values,
            dtype,
            refCount: 1
        });
        return dataId;
    }
    /**
     * Create a data bucket in cpu backend.
     * @param shape Shape of the `TensorInfo`.
     * @param dtype DType of the `TensorInfo`.
     * @param values The value of the `TensorInfo` stored as a flattened array.
     */ makeTensorInfo(shape, dtype, values) {
        let outId;
        if (dtype === 'string' && values != null && values.length > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isString(values[0])) {
            const encodedValues = values.map((d)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].encodeString(d));
            outId = this.write(encodedValues, shape, dtype);
        } else {
            outId = this.write(values, shape, dtype);
        }
        return {
            dataId: outId,
            shape,
            dtype
        };
    }
    /** Return refCount of a `TensorData`. */ refCount(dataId) {
        if (this.data.has(dataId)) {
            const tensorData = this.data.get(dataId);
            return tensorData.refCount;
        }
        return 0;
    }
    /** Increase refCount of a `TensorData`. */ incRef(dataId) {
        const tensorData = this.data.get(dataId);
        tensorData.refCount++;
    }
    /** Decrease refCount of a `TensorData`. */ decRef(dataId) {
        if (this.data.has(dataId)) {
            const tensorData = this.data.get(dataId);
            tensorData.refCount--;
        }
    }
    move(dataId, values, shape, dtype, refCount) {
        this.data.set(dataId, {
            values,
            dtype,
            refCount
        });
    }
    numDataIds() {
        return this.data.numDataIds();
    }
    async read(dataId) {
        return this.readSync(dataId);
    }
    readSync(dataId) {
        const { dtype, complexTensorInfos } = this.data.get(dataId);
        if (dtype === 'complex64') {
            const realValues = this.readSync(complexTensorInfos.real.dataId);
            const imagValues = this.readSync(complexTensorInfos.imag.dataId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].mergeRealAndImagArrays(realValues, imagValues);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].convertBackendValuesAndArrayBuffer(this.data.get(dataId).values, dtype);
    }
    bufferSync(t) {
        const data = this.readSync(t.dataId);
        if (t.dtype === 'string') {
            try {
                // Decode the bytes into string.
                const strings = data.map((d)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].decodeString(d));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buffer"])(t.shape, t.dtype, strings);
            } catch (_a) {
                throw new Error('Failed to decode encoded string bytes into utf-8');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buffer"])(t.shape, t.dtype, data);
    }
    makeOutput(values, shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engine"])().makeTensorFromTensorInfo(this.makeTensorInfo(shape, dtype, values), this);
    }
    /**
     * Dispose the memory if the dataId has 0 refCount. Return true if the memory
     * is released or memory is not managed in this backend, false if memory is
     * not cleared.
     * @param dataId
     * @oaram force Optional, remove the data regardless of refCount
     */ disposeData(dataId, force = false) {
        if (this.data.has(dataId)) {
            this.data.get(dataId).refCount--;
            if (!force && this.data.get(dataId).refCount > 0) {
                return false;
            }
            const { complexTensorInfos } = this.data.get(dataId);
            if (complexTensorInfos != null) {
                this.disposeData(complexTensorInfos.real.dataId, true);
                this.disposeData(complexTensorInfos.imag.dataId, true);
            }
            this.data.delete(dataId);
        }
        return true;
    }
    disposeIntermediateTensorInfo(tensorInfo) {
        this.disposeData(tensorInfo.dataId);
    }
    async time(f) {
        const start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].now();
        f();
        const kernelMs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].now() - start;
        return {
            kernelMs
        };
    }
    memory() {
        return {
            // Unreliable due to automatic gc. The numbers above are cumulative.
            unreliable: true,
            reasons: [
                'The reported memory is an upper bound. Due to automatic garbage ' + 'collection, the true allocated memory may be less.'
            ]
        };
    }
    where(condition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$cpu_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertNotComplex"])([
            condition
        ], 'where');
        const condVals = this.readSync(condition.dataId);
        return whereImpl(condition.shape, condVals);
    }
    dispose() {}
    floatPrecision() {
        return 32;
    }
    /** Returns the smallest representable number.  */ epsilon() {
        return super.epsilon();
    }
}
MathBackendCPU.nextDataId = 0;
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZF9jcHUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy9iYWNrZW5kX2NwdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFxQixNQUFNLEVBQUUsV0FBVyxFQUFZLE1BQU0sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBMEUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFN04sTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFnQjVDLE1BQWEsY0FBZSxTQUFRLGFBQWE7SUFNdkMsVUFBVTtRQUNoQixPQUFPLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVZILGNBQVMsR0FBRyxFQUFFLENBQUM7UUFHZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBUXRCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVRLEtBQUssQ0FDVixNQUFrQyxFQUFFLEtBQWUsRUFDbkQsS0FBZTtRQUNqQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQ2Isa0NBQWtDO29CQUNsQyxrREFBa0Q7b0JBQ2xELDZEQUE2RDtvQkFDN0QsMkVBQTJFO29CQUMzRSxnQ0FBZ0MsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFD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QUFLLENBQUM7UUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxDQUFDO0lBQ3BCLENBQUM7SUFFUSxNQUFNO1FBQ2IsT0FBTztZQUNMLG9FQUFvRTtZQUNwRSxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQ0gsQ0FBQyxrRUFBa0U7b0JBQ2xFLG9EQUFvRCxDQUFDO1NBQzNELENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQWlCO1FBQ3JCLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFlLENBQUM7UUFDL0QsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVEsT0FBTyxLQUFJLENBQUM7SUFFWixjQUFjO1FBQ3JCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGtEQUFrRDtJQUN6QyxPQUFPO1FBQ2QsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7QUE5TGMseUJBQVUsR0FBRyxDQUFDLEFBQUosQ0FBSztTQUxuQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgQmFja2VuZFRpbWluZ0luZm8sIGJ1ZmZlciwgRGF0YVN0b3JhZ2UsIERhdGFUeXBlLCBlbmdpbmUsIGVudiwga2VybmVsX2ltcGxzLCBLZXJuZWxCYWNrZW5kLCBSYW5rLCBTaGFwZU1hcCwgVGVuc29yLCBUZW5zb3IyRCwgVGVuc29yQnVmZmVyLCBUZW5zb3JJbmZvLCBUeXBlZEFycmF5LCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5jb25zdCB3aGVyZUltcGwgPSBrZXJuZWxfaW1wbHMud2hlcmVJbXBsO1xuaW1wb3J0IHthc3NlcnROb3RDb21wbGV4fSBmcm9tICcuL2NwdV91dGlsJztcblxuaW50ZXJmYWNlIERhdGFJZCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbnNvckRhdGE8RCBleHRlbmRzIERhdGFUeXBlPiB7XG4gIHZhbHVlcz86IGJhY2tlbmRfdXRpbC5CYWNrZW5kVmFsdWVzO1xuICBkdHlwZTogRDtcbiAgLy8gRm9yIGNvbXBsZXggbnVtYmVycywgdGhlIHJlYWwgYW5kIGltYWdpbmFyeSBwYXJ0cyBhcmUgc3RvcmVkIGFzIHRoZWlyIG93blxuICAvLyBpbmRpdmlkdWFsIHRlbnNvcnMsIHdpdGggYSBwYXJlbnQgam9pbmluZyB0aGUgdHdvIHdpdGggdGhlXG4gIC8vIGNvbXBsZXhUZW5zb3JJbmZvcyBmaWVsZC5cbiAgY29tcGxleFRlbnNvckluZm9zPzoge3JlYWw6IFRlbnNvckluZm8sIGltYWc6IFRlbnNvckluZm99O1xuICAvLyByZWZDb3VudCBrZWVwcyB0cmFjayBvZiBob3cgbWFueSB0ZW5zb3JzIHJlZmVyZW5jZSBpdC4gVXNlZCBmb3IgbWVtb3J5XG4gIC8vIG1hbmFnZW1lbnQuXG4gIHJlZkNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRoQmFja2VuZENQVSBleHRlbmRzIEtlcm5lbEJhY2tlbmQge1xuICBwdWJsaWMgYmxvY2tTaXplID0gNDg7XG5cbiAgZGF0YTogRGF0YVN0b3JhZ2U8VGVuc29yRGF0YTxEYXRhVHlwZT4+O1xuICBwcml2YXRlIGZpcnN0VXNlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzdGF0aWMgbmV4dERhdGFJZCA9IDA7XG4gIHByaXZhdGUgbmV4dERhdGFJZCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoQmFja2VuZENQVS5uZXh0RGF0YUlkKys7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRhU3RvcmFnZSh0aGlzLCBlbmdpbmUoKSk7XG4gIH1cblxuICBvdmVycmlkZSB3cml0ZShcbiAgICAgIHZhbHVlczogYmFja2VuZF91dGlsLkJhY2tlbmRWYWx1ZXMsIHNoYXBlOiBudW1iZXJbXSxcbiAgICAgIGR0eXBlOiBEYXRhVHlwZSk6IERhdGFJZCB7XG4gICAgaWYgKHRoaXMuZmlyc3RVc2UpIHtcbiAgICAgIHRoaXMuZmlyc3RVc2UgPSBmYWxzZTtcbiAgICAgIGlmIChlbnYoKS5nZXQoJ0lTX05PREUnKSkge1xuICAgICAgICBiYWNrZW5kX3V0aWwud2FybihcbiAgICAgICAgICAgICdcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJyArXG4gICAgICAgICAgICAnSGksIGxvb2tzIGxpa2UgeW91IGFyZSBydW5uaW5nIFRlbnNvckZsb3cuanMgaW4gJyArXG4gICAgICAgICAgICAnTm9kZS5qcy4gVG8gc3BlZWQgdGhpbmdzIHVwIGRyYW1hdGljYWxseSwgaW5zdGFsbCBvdXIgbm9kZSAnICtcbiAgICAgICAgICAgICdiYWNrZW5kLCB2aXNpdCBodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzLW5vZGUgZm9yIG1vcmUgZGV0YWlscy4gJyArXG4gICAgICAgICAgICAnXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkYXRhSWQgPSB7aWQ6IHRoaXMubmV4dERhdGFJZCgpfTtcblxuICAgIHRoaXMuZGF0YS5zZXQoZGF0YUlkLCB7dmFsdWVzLCBkdHlwZSwgcmVmQ291bnQ6IDF9KTtcblxuICAgIHJldHVybiBkYXRhSWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZGF0YSBidWNrZXQgaW4gY3B1IGJhY2tlbmQuXG4gICAqIEBwYXJhbSBzaGFwZSBTaGFwZSBvZiB0aGUgYFRlbnNvckluZm9gLlxuICAgKiBAcGFyYW0gZHR5cGUgRFR5cGUgb2YgdGhlIGBUZW5zb3JJbmZvYC5cbiAgICogQHBhcmFtIHZhbHVlcyBUaGUgdmFsdWUgb2YgdGhlIGBUZW5zb3JJbmZvYCBzdG9yZWQgYXMgYSBmbGF0dGVuZWQgYXJyYXkuXG4gICAqL1xuICBtYWtlVGVuc29ySW5mbyhcbiAgICAgIHNoYXBlOiBudW1iZXJbXSwgZHR5cGU6IERhdGFUeXBlLFxuICAgICAgdmFsdWVzPzogYmFja2VuZF91dGlsLkJhY2tlbmRWYWx1ZXN8c3RyaW5nW10pOiBUZW5zb3JJbmZvIHtcbiAgICBsZXQgb3V0SWQ7XG4gICAgaWYgKGR0eXBlID09PSAnc3RyaW5nJyAmJiB2YWx1ZXMgIT0gbnVsbCAmJiB2YWx1ZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICB1dGlsLmlzU3RyaW5nKHZhbHVlc1swXSkpIHtcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZXMgPVxuICAgICAgICAgICh2YWx1ZXMgYXMgdW5rbm93biBhcyBzdHJpbmdbXSkubWFwKGQgPT4gdXRpbC5lbmNvZGVTdHJpbmcoZCkpO1xuXG4gICAgICBvdXRJZCA9IHRoaXMud3JpdGUoZW5jb2RlZFZhbHVlcywgc2hhcGUsIGR0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0SWQgPSB0aGlzLndyaXRlKHZhbHVlcyBhcyBUeXBlZEFycmF5LCBzaGFwZSwgZHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7ZGF0YUlkOiBvdXRJZCwgc2hhcGUsIGR0eXBlfTtcbiAgfVxuXG4gIC8qKiBSZXR1cm4gcmVmQ291bnQgb2YgYSBgVGVuc29yRGF0YWAuICovXG4gIG92ZXJyaWRlIHJlZkNvdW50KGRhdGFJZDogRGF0YUlkKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5kYXRhLmhhcyhkYXRhSWQpKSB7XG4gICAgICBjb25zdCB0ZW5zb3JEYXRhID0gdGhpcy5kYXRhLmdldChkYXRhSWQpO1xuICAgICAgcmV0dXJuIHRlbnNvckRhdGEucmVmQ291bnQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqIEluY3JlYXNlIHJlZkNvdW50IG9mIGEgYFRlbnNvckRhdGFgLiAqL1xuICBvdmVycmlkZSBpbmNSZWYoZGF0YUlkOiBEYXRhSWQpOiB2b2lkIHtcbiAgICBjb25zdCB0ZW5zb3JEYXRhID0gdGhpcy5kYXRhLmdldChkYXRhSWQpO1xuICAgIHRlbnNvckRhdGEucmVmQ291bnQrKztcbiAgfVxuXG4gIC8qKiBEZWNyZWFzZSByZWZDb3VudCBvZiBhIGBUZW5zb3JEYXRhYC4gKi9cbiAgZGVjUmVmKGRhdGFJZDogRGF0YUlkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YS5oYXMoZGF0YUlkKSkge1xuICAgICAgY29uc3QgdGVuc29yRGF0YSA9IHRoaXMuZGF0YS5nZXQoZGF0YUlkKTtcbiAgICAgIHRlbnNvckRhdGEucmVmQ291bnQtLTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBtb3ZlKFxuICAgICAgZGF0YUlkOiBEYXRhSWQsIHZhbHVlczogYmFja2VuZF91dGlsLkJhY2tlbmRWYWx1ZXMsIHNoYXBlOiBudW1iZXJbXSxcbiAgICAgIGR0eXBlOiBEYXRhVHlwZSwgcmVmQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5zZXQoZGF0YUlkLCB7dmFsdWVzLCBkdHlwZSwgcmVmQ291bnR9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIG51bURhdGFJZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLm51bURhdGFJZHMoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIHJlYWQoZGF0YUlkOiBEYXRhSWQpOiBQcm9taXNlPGJhY2tlbmRfdXRpbC5CYWNrZW5kVmFsdWVzPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZFN5bmMoZGF0YUlkKTtcbiAgfVxuICBvdmVycmlkZSByZWFkU3luYyhkYXRhSWQ6IERhdGFJZCk6IGJhY2tlbmRfdXRpbC5CYWNrZW5kVmFsdWVzIHtcbiAgICBjb25zdCB7ZHR5cGUsIGNvbXBsZXhUZW5zb3JJbmZvc30gPSB0aGlzLmRhdGEuZ2V0KGRhdGFJZCk7XG5cbiAgICBpZiAoZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgICBjb25zdCByZWFsVmFsdWVzID1cbiAgICAgICAgICB0aGlzLnJlYWRTeW5jKGNvbXBsZXhUZW5zb3JJbmZvcy5yZWFsLmRhdGFJZCkgYXMgRmxvYXQzMkFycmF5O1xuICAgICAgY29uc3QgaW1hZ1ZhbHVlcyA9XG4gICAgICAgICAgdGhpcy5yZWFkU3luYyhjb21wbGV4VGVuc29ySW5mb3MuaW1hZy5kYXRhSWQpIGFzIEZsb2F0MzJBcnJheTtcbiAgICAgIHJldHVybiBiYWNrZW5kX3V0aWwubWVyZ2VSZWFsQW5kSW1hZ0FycmF5cyhyZWFsVmFsdWVzLCBpbWFnVmFsdWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHV0aWwuY29udmVydEJhY2tlbmRWYWx1ZXNBbmRBcnJheUJ1ZmZlcihcbiAgICAgICAgdGhpcy5kYXRhLmdldChkYXRhSWQpLnZhbHVlcywgZHR5cGUpO1xuICB9XG5cbiAgYnVmZmVyU3luYzxSIGV4dGVuZHMgUmFuaywgRCBleHRlbmRzIERhdGFUeXBlPih0OiBUZW5zb3JJbmZvKTpcbiAgICAgIFRlbnNvckJ1ZmZlcjxSLCBEPiB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZFN5bmModC5kYXRhSWQpO1xuICAgIGlmICh0LmR0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRGVjb2RlIHRoZSBieXRlcyBpbnRvIHN0cmluZy5cbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IChkYXRhIGFzIFVpbnQ4QXJyYXlbXSkubWFwKGQgPT4gdXRpbC5kZWNvZGVTdHJpbmcoZCkpO1xuICAgICAgICByZXR1cm4gYnVmZmVyKHQuc2hhcGUgYXMgU2hhcGVNYXBbUl0sIHQuZHR5cGUsIHN0cmluZ3MpIGFzXG4gICAgICAgICAgICBUZW5zb3JCdWZmZXI8UiwgRD47XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVjb2RlIGVuY29kZWQgc3RyaW5nIGJ5dGVzIGludG8gdXRmLTgnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcih0LnNoYXBlIGFzIFNoYXBlTWFwW1JdLCB0LmR0eXBlLCBkYXRhIGFzIFR5cGVkQXJyYXkpIGFzXG4gICAgICAgIFRlbnNvckJ1ZmZlcjxSLCBEPjtcbiAgfVxuXG4gIG1ha2VPdXRwdXQ8VCBleHRlbmRzIFRlbnNvcj4oXG4gICAgICB2YWx1ZXM6IGJhY2tlbmRfdXRpbC5CYWNrZW5kVmFsdWVzLCBzaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSk6IFQge1xuICAgIHJldHVybiBlbmdpbmUoKS5tYWtlVGVuc29yRnJvbVRlbnNvckluZm8oXG4gICAgICAgICAgICAgICB0aGlzLm1ha2VUZW5zb3JJbmZvKHNoYXBlLCBkdHlwZSwgdmFsdWVzKSwgdGhpcykgYXMgVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHRoZSBtZW1vcnkgaWYgdGhlIGRhdGFJZCBoYXMgMCByZWZDb3VudC4gUmV0dXJuIHRydWUgaWYgdGhlIG1lbW9yeVxuICAgKiBpcyByZWxlYXNlZCBvciBtZW1vcnkgaXMgbm90IG1hbmFnZWQgaW4gdGhpcyBiYWNrZW5kLCBmYWxzZSBpZiBtZW1vcnkgaXNcbiAgICogbm90IGNsZWFyZWQuXG4gICAqIEBwYXJhbSBkYXRhSWRcbiAgICogQG9hcmFtIGZvcmNlIE9wdGlvbmFsLCByZW1vdmUgdGhlIGRhdGEgcmVnYXJkbGVzcyBvZiByZWZDb3VudFxuICAgKi9cbiAgb3ZlcnJpZGUgZGlzcG9zZURhdGEoZGF0YUlkOiBEYXRhSWQsIGZvcmNlID0gZmFsc2UpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5kYXRhLmhhcyhkYXRhSWQpKSB7XG4gICAgICB0aGlzLmRhdGEuZ2V0KGRhdGFJZCkucmVmQ291bnQtLTtcbiAgICAgIGlmICghZm9yY2UgJiYgdGhpcy5kYXRhLmdldChkYXRhSWQpLnJlZkNvdW50ID4gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtjb21wbGV4VGVuc29ySW5mb3N9ID0gdGhpcy5kYXRhLmdldChkYXRhSWQpO1xuXG4gICAgICBpZiAoY29tcGxleFRlbnNvckluZm9zICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlRGF0YShjb21wbGV4VGVuc29ySW5mb3MucmVhbC5kYXRhSWQsIHRydWUpO1xuICAgICAgICB0aGlzLmRpc3Bvc2VEYXRhKGNvbXBsZXhUZW5zb3JJbmZvcy5pbWFnLmRhdGFJZCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YS5kZWxldGUoZGF0YUlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBkaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyh0ZW5zb3JJbmZvOiBUZW5zb3JJbmZvKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwb3NlRGF0YSh0ZW5zb3JJbmZvLmRhdGFJZCk7XG4gIH1cblxuICBvdmVycmlkZSBhc3luYyB0aW1lKGY6ICgpID0+IHZvaWQpOiBQcm9taXNlPEJhY2tlbmRUaW1pbmdJbmZvPiB7XG4gICAgY29uc3Qgc3RhcnQgPSB1dGlsLm5vdygpO1xuICAgIGYoKTtcbiAgICBjb25zdCBrZXJuZWxNcyA9IHV0aWwubm93KCkgLSBzdGFydDtcbiAgICByZXR1cm4ge2tlcm5lbE1zfTtcbiAgfVxuXG4gIG92ZXJyaWRlIG1lbW9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gVW5yZWxpYWJsZSBkdWUgdG8gYXV0b21hdGljIGdjLiBUaGUgbnVtYmVycyBhYm92ZSBhcmUgY3VtdWxhdGl2ZS5cbiAgICAgIHVucmVsaWFibGU6IHRydWUsXG4gICAgICByZWFzb25zOlxuICAgICAgICAgIFsnVGhlIHJlcG9ydGVkIG1lbW9yeSBpcyBhbiB1cHBlciBib3VuZC4gRHVlIHRvIGF1dG9tYXRpYyBnYXJiYWdlICcgK1xuICAgICAgICAgICAnY29sbGVjdGlvbiwgdGhlIHRydWUgYWxsb2NhdGVkIG1lbW9yeSBtYXkgYmUgbGVzcy4nXVxuICAgIH07XG4gIH1cblxuICB3aGVyZShjb25kaXRpb246IFRlbnNvcik6IFRlbnNvcjJEIHtcbiAgICBhc3NlcnROb3RDb21wbGV4KFtjb25kaXRpb25dLCAnd2hlcmUnKTtcblxuICAgIGNvbnN0IGNvbmRWYWxzID0gdGhpcy5yZWFkU3luYyhjb25kaXRpb24uZGF0YUlkKSBhcyBUeXBlZEFycmF5O1xuICAgIHJldHVybiB3aGVyZUltcGwoY29uZGl0aW9uLnNoYXBlLCBjb25kVmFscyk7XG4gIH1cblxuICBvdmVycmlkZSBkaXNwb3NlKCkge31cblxuICBvdmVycmlkZSBmbG9hdFByZWNpc2lvbigpOiAxNnwzMiB7XG4gICAgcmV0dXJuIDMyO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIHNtYWxsZXN0IHJlcHJlc2VudGFibGUgbnVtYmVyLiAgKi9cbiAgb3ZlcnJpZGUgZXBzaWxvbigpOiBudW1iZXIge1xuICAgIHJldHVybiBzdXBlci5lcHNpbG9uKCk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // Shared functionality among backends.
__turbopack_context__.s([]);
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILHVDQUF1QztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gU2hhcmVkIGZ1bmN0aW9uYWxpdHkgYW1vbmcgYmFja2VuZHMuXG5leHBvcnQge3NpbXBsZUFic0ltcGx9IGZyb20gJy4va2VybmVscy9BYnMnO1xuZXhwb3J0IHthZGRJbXBsfSBmcm9tICcuL2tlcm5lbHMvQWRkJztcbmV4cG9ydCB7YmluY291bnRJbXBsLCBiaW5jb3VudFJlZHVjZUltcGx9IGZyb20gJy4va2VybmVscy9CaW5jb3VudF9pbXBsJztcbmV4cG9ydCB7Yml0d2lzZUFuZEltcGx9IGZyb20gJy4va2VybmVscy9CaXR3aXNlQW5kJztcbmV4cG9ydCB7Y2FzdEltcGx9IGZyb20gJy4va2VybmVscy9DYXN0JztcbmV4cG9ydCB7Y2VpbEltcGx9IGZyb20gJy4va2VybmVscy9DZWlsJztcbmV4cG9ydCB7Y29uY2F0SW1wbH0gZnJvbSAnLi9rZXJuZWxzL0NvbmNhdF9pbXBsJztcbmV4cG9ydCB7ZXF1YWxJbXBsfSBmcm9tICcuL2tlcm5lbHMvRXF1YWwnO1xuZXhwb3J0IHtleHBJbXBsfSBmcm9tICcuL2tlcm5lbHMvRXhwJztcbmV4cG9ydCB7ZXhwbTFJbXBsfSBmcm9tICcuL2tlcm5lbHMvRXhwbTEnO1xuZXhwb3J0IHtmbG9vckltcGx9IGZyb20gJy4va2VybmVscy9GbG9vcic7XG5leHBvcnQge2Zsb29yRGl2SW1wbH0gZnJvbSAnLi9rZXJuZWxzL0Zsb29yRGl2JztcbmV4cG9ydCB7Z2F0aGVyTmRJbXBsfSBmcm9tICcuL2tlcm5lbHMvR2F0aGVyTmRfSW1wbCc7XG5leHBvcnQge2dhdGhlclYySW1wbH0gZnJvbSAnLi9rZXJuZWxzL0dhdGhlclYyX2ltcGwnO1xuZXhwb3J0IHtncmVhdGVySW1wbH0gZnJvbSAnLi9rZXJuZWxzL0dyZWF0ZXInO1xuZXhwb3J0IHtncmVhdGVyRXF1YWxJbXBsfSBmcm9tICcuL2tlcm5lbHMvR3JlYXRlckVxdWFsJztcbmV4cG9ydCB7bGVzc0ltcGx9IGZyb20gJy4va2VybmVscy9MZXNzJztcbmV4cG9ydCB7bGVzc0VxdWFsSW1wbH0gZnJvbSAnLi9rZXJuZWxzL0xlc3NFcXVhbCc7XG5leHBvcnQge2xpblNwYWNlSW1wbH0gZnJvbSAnLi9rZXJuZWxzL0xpblNwYWNlX2ltcGwnO1xuZXhwb3J0IHtsb2dJbXBsfSBmcm9tICcuL2tlcm5lbHMvTG9nJztcbmV4cG9ydCB7bWF4SW1wbH0gZnJvbSAnLi9rZXJuZWxzL01heF9pbXBsJztcbmV4cG9ydCB7bWF4aW11bUltcGx9IGZyb20gJy4va2VybmVscy9NYXhpbXVtJztcbmV4cG9ydCB7bWluaW11bUltcGx9IGZyb20gJy4va2VybmVscy9NaW5pbXVtJztcbmV4cG9ydCB7bXVsdGlwbHlJbXBsfSBmcm9tICcuL2tlcm5lbHMvTXVsdGlwbHknO1xuZXhwb3J0IHtuZWdJbXBsfSBmcm9tICcuL2tlcm5lbHMvTmVnJztcbmV4cG9ydCB7bm90RXF1YWxJbXBsfSBmcm9tICcuL2tlcm5lbHMvTm90RXF1YWwnO1xuZXhwb3J0IHtwcm9kSW1wbH0gZnJvbSAnLi9rZXJuZWxzL1Byb2QnO1xuZXhwb3J0IHtyYWdnZWRHYXRoZXJJbXBsfSBmcm9tICcuL2tlcm5lbHMvUmFnZ2VkR2F0aGVyX2ltcGwnO1xuZXhwb3J0IHtyYWdnZWRSYW5nZUltcGx9IGZyb20gJy4va2VybmVscy9SYWdnZWRSYW5nZV9pbXBsJztcbmV4cG9ydCB7cmFnZ2VkVGVuc29yVG9UZW5zb3JJbXBsfSBmcm9tICcuL2tlcm5lbHMvUmFnZ2VkVGVuc29yVG9UZW5zb3JfaW1wbCc7XG5leHBvcnQge3JhbmdlSW1wbH0gZnJvbSAnLi9rZXJuZWxzL1JhbmdlX2ltcGwnO1xuZXhwb3J0IHtyc3FydEltcGx9IGZyb20gJy4va2VybmVscy9Sc3FydCc7XG5leHBvcnQge3NjYXR0ZXJJbXBsfSBmcm9tICcuL2tlcm5lbHMvU2NhdHRlcl9pbXBsJztcbmV4cG9ydCB7c2lnbW9pZEltcGx9IGZyb20gJy4va2VybmVscy9TaWdtb2lkJztcbmV4cG9ydCB7c2xpY2VJbXBsfSBmcm9tICcuL2tlcm5lbHMvU2xpY2UnO1xuZXhwb3J0IHtzcGFyc2VGaWxsRW1wdHlSb3dzSW1wbH0gZnJvbSAnLi9rZXJuZWxzL1NwYXJzZUZpbGxFbXB0eVJvd3NfaW1wbCc7XG5leHBvcnQge3NwYXJzZVJlc2hhcGVJbXBsfSBmcm9tICcuL2tlcm5lbHMvU3BhcnNlUmVzaGFwZV9pbXBsJztcbmV4cG9ydCB7c3BhcnNlU2VnbWVudFJlZHVjdGlvbkltcGx9IGZyb20gJy4va2VybmVscy9TcGFyc2VTZWdtZW50UmVkdWN0aW9uX2ltcGwnO1xuZXhwb3J0IHtzcXJ0SW1wbH0gZnJvbSAnLi9rZXJuZWxzL1NxcnQnO1xuZXhwb3J0IHtzcXVhcmVkRGlmZmVyZW5jZUltcGx9IGZyb20gJy4va2VybmVscy9TcXVhcmVkRGlmZmVyZW5jZSc7XG5leHBvcnQge3N0YXRpY1JlZ2V4UmVwbGFjZUltcGx9IGZyb20gJy4va2VybmVscy9TdGF0aWNSZWdleFJlcGxhY2UnO1xuZXhwb3J0IHtzdHJpZGVkU2xpY2VJbXBsfSBmcm9tICcuL2tlcm5lbHMvU3RyaWRlZFNsaWNlX2ltcGwnO1xuZXhwb3J0IHtzdHJpbmdOR3JhbXNJbXBsfSBmcm9tICcuL2tlcm5lbHMvU3RyaW5nTkdyYW1zX2ltcGwnO1xuZXhwb3J0IHtzdHJpbmdTcGxpdEltcGx9IGZyb20gJy4va2VybmVscy9TdHJpbmdTcGxpdF9pbXBsJztcbmV4cG9ydCB7c3RyaW5nVG9IYXNoQnVja2V0RmFzdEltcGx9IGZyb20gJy4va2VybmVscy9TdHJpbmdUb0hhc2hCdWNrZXRGYXN0X2ltcGwnO1xuZXhwb3J0IHtzdWJJbXBsfSBmcm9tICcuL2tlcm5lbHMvU3ViJztcbmV4cG9ydCB7dGlsZUltcGx9IGZyb20gJy4va2VybmVscy9UaWxlX2ltcGwnO1xuZXhwb3J0IHt0b3BLSW1wbH0gZnJvbSAnLi9rZXJuZWxzL1RvcEtfaW1wbCc7XG5leHBvcnQge3RyYW5zcG9zZUltcGx9IGZyb20gJy4va2VybmVscy9UcmFuc3Bvc2VfaW1wbCc7XG5leHBvcnQge3VuaXF1ZUltcGx9IGZyb20gJy4va2VybmVscy9VbmlxdWVfaW1wbCc7XG5leHBvcnQge0NvbXBsZXhCaW5hcnlLZXJuZWxJbXBsLCBTaW1wbGVCaW5hcnlLZXJuZWxJbXBsfSBmcm9tICcuL3V0aWxzL2JpbmFyeV90eXBlcyc7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addImpl"],
    "bincountImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Bincount_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bincountImpl"],
    "bincountReduceImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Bincount_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bincountReduceImpl"],
    "bitwiseAndImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$BitwiseAnd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bitwiseAndImpl"],
    "castImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castImpl"],
    "ceilImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Ceil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ceilImpl"],
    "concatImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Concat_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatImpl"],
    "equalImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equalImpl"],
    "expImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Exp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expImpl"],
    "expm1Impl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Expm1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expm1Impl"],
    "floorDivImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$FloorDiv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floorDivImpl"],
    "floorImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Floor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floorImpl"],
    "gatherNdImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$GatherNd_Impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gatherNdImpl"],
    "gatherV2Impl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$GatherV2_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gatherV2Impl"],
    "greaterEqualImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$GreaterEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greaterEqualImpl"],
    "greaterImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greaterImpl"],
    "lessEqualImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$LessEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessEqualImpl"],
    "lessImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Less$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lessImpl"],
    "linSpaceImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$LinSpace_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linSpaceImpl"],
    "logImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logImpl"],
    "maxImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Max_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxImpl"],
    "maximumImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximumImpl"],
    "minimumImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Minimum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minimumImpl"],
    "multiplyImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Multiply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["multiplyImpl"],
    "negImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Neg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["negImpl"],
    "notEqualImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$NotEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notEqualImpl"],
    "prodImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Prod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prodImpl"],
    "raggedGatherImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RaggedGather_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raggedGatherImpl"],
    "raggedRangeImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RaggedRange_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raggedRangeImpl"],
    "raggedTensorToTensorImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RaggedTensorToTensor_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["raggedTensorToTensorImpl"],
    "rangeImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Range_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rangeImpl"],
    "rsqrtImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Rsqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rsqrtImpl"],
    "scatterImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Scatter_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scatterImpl"],
    "sigmoidImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sigmoid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sigmoidImpl"],
    "simpleAbsImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simpleAbsImpl"],
    "sliceImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceImpl"],
    "sparseFillEmptyRowsImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SparseFillEmptyRows_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseFillEmptyRowsImpl"],
    "sparseReshapeImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SparseReshape_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseReshapeImpl"],
    "sparseSegmentReductionImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SparseSegmentReduction_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseSegmentReductionImpl"],
    "sqrtImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqrtImpl"],
    "squaredDifferenceImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SquaredDifference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squaredDifferenceImpl"],
    "staticRegexReplaceImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StaticRegexReplace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["staticRegexReplaceImpl"],
    "stridedSliceImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StridedSlice_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stridedSliceImpl"],
    "stringNGramsImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StringNGrams_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringNGramsImpl"],
    "stringSplitImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StringSplit_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringSplitImpl"],
    "stringToHashBucketFastImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StringToHashBucketFast_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHashBucketFastImpl"],
    "subImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subImpl"],
    "tileImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Tile_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tileImpl"],
    "topKImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$TopK_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["topKImpl"],
    "transposeImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Transpose_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transposeImpl"],
    "uniqueImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Unique_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueImpl"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Bincount_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$BitwiseAnd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/BitwiseAnd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Ceil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Concat_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Exp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Expm1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Floor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$FloorDiv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$GatherNd_Impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$GatherV2_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$GreaterEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Less$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$LessEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$LinSpace_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Max_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Minimum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Multiply$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Neg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$NotEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Prod$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RaggedGather_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RaggedRange_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RaggedTensorToTensor_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Range_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Rsqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Scatter_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sigmoid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Slice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SparseFillEmptyRows_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SparseReshape_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SparseSegmentReduction_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$SquaredDifference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StaticRegexReplace$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StridedSlice_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StringNGrams_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StringSplit_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$StringToHashBucketFast_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Tile_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$TopK_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Transpose_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Unique_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/base.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ /*
 * base.ts contains all the exports from tfjs-backend-cpu
 * without auto-kernel registration
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$backend_cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/backend_cpu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Side effects for default initialization of MathBackendCPU
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerBackend"])('cpu', ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$backend_cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathBackendCPU"](), 1 /* priority */ ); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC1jcHUvc3JjL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUg7OztHQUdHO0FBQ0gsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFFbkMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUMsT0FBTyxJQUFJLFdBQVcsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNqRCxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUM7QUFFaEIsNERBQTREO0FBQzVELGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qXG4gKiBiYXNlLnRzIGNvbnRhaW5zIGFsbCB0aGUgZXhwb3J0cyBmcm9tIHRmanMtYmFja2VuZC1jcHVcbiAqIHdpdGhvdXQgYXV0by1rZXJuZWwgcmVnaXN0cmF0aW9uXG4gKi9cbmltcG9ydCB7cmVnaXN0ZXJCYWNrZW5kfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtNYXRoQmFja2VuZENQVX0gZnJvbSAnLi9iYWNrZW5kX2NwdSc7XG5pbXBvcnQgKiBhcyBzaGFyZWQgZnJvbSAnLi9zaGFyZWQnO1xuXG5leHBvcnQge01hdGhCYWNrZW5kQ1BVfSBmcm9tICcuL2JhY2tlbmRfY3B1JztcbmV4cG9ydCB7dmVyc2lvbiBhcyB2ZXJzaW9uX2NwdX0gZnJvbSAnLi92ZXJzaW9uJztcbmV4cG9ydCB7c2hhcmVkfTtcblxuLy8gU2lkZSBlZmZlY3RzIGZvciBkZWZhdWx0IGluaXRpYWxpemF0aW9uIG9mIE1hdGhCYWNrZW5kQ1BVXG5yZWdpc3RlckJhY2tlbmQoJ2NwdScsICgpID0+IG5ldyBNYXRoQmFja2VuZENQVSgpLCAxIC8qIHByaW9yaXR5ICovKTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 */ // All exports from this package should be in base.
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/base.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$register_all_kernels$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/register_all_kernels.js [app-ssr] (ecmascript)"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxtREFBbUQ7QUFDbkQsY0FBYyxRQUFRLENBQUM7QUFDdkIsT0FBTyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gQWxsIGV4cG9ydHMgZnJvbSB0aGlzIHBhY2thZ2Ugc2hvdWxkIGJlIGluIGJhc2UuXG5leHBvcnQgKiBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0ICcuL3JlZ2lzdGVyX2FsbF9rZXJuZWxzJztcbiJdfQ==
;
;
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @license See the LICENSE file. */ // This code is auto-generated, do not modify this file!
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '4.22.0';
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC1jcHUvc3JjL3ZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDO0FBRXJDLHdEQUF3RDtBQUN4RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDekIsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBsaWNlbnNlIFNlZSB0aGUgTElDRU5TRSBmaWxlLiAqL1xuXG4vLyBUaGlzIGNvZGUgaXMgYXV0by1nZW5lcmF0ZWQsIGRvIG5vdCBtb2RpZnkgdGhpcyBmaWxlIVxuY29uc3QgdmVyc2lvbiA9ICc0LjIyLjAnO1xuZXhwb3J0IHt2ZXJzaW9ufTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/base.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MathBackendCPU",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$backend_cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathBackendCPU"],
    "shared",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    "version_cpu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/base.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/shared.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$backend_cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/backend_cpu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/version.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-backend-cpu_dist_f5701f5f._.js.map