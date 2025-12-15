(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "createSimpleBinaryKernelImpl",
    ()=>createSimpleBinaryKernelImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <export * as backend_util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
;
function createSimpleBinaryKernelImpl(op) {
    return (aShape, bShape, aVals, bVals, dtype)=>{
        const newShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        const resultRank = newShape.length;
        const resultStrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].computeStrides(newShape);
        const resultSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(newShape);
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].getTypedArrayFromDType(dtype, resultSize);
        const aRank = aShape.length;
        const bRank = bShape.length;
        const aStrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].computeStrides(aShape);
        const bStrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].computeStrides(bShape);
        const aBroadcastDims = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].getBroadcastDims(aShape, newShape);
        const bBroadcastDims = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].getBroadcastDims(bShape, newShape);
        if (aBroadcastDims.length + bBroadcastDims.length === 0) {
            for(let i = 0; i < result.length; ++i){
                result[i] = op(aVals[i % aVals.length], bVals[i % bVals.length]);
            }
        } else {
            for(let i = 0; i < result.length; ++i){
                const loc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].indexToLoc(i, resultRank, resultStrides);
                const aLoc = loc.slice(-aRank);
                aBroadcastDims.forEach((d)=>aLoc[d] = 0);
                const aIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].locToIndex(aLoc, aRank, aStrides);
                const bLoc = loc.slice(-bRank);
                bBroadcastDims.forEach((d)=>bLoc[d] = 0);
                const bIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].locToIndex(bLoc, bRank, bStrides);
                result[i] = op(aVals[aIndex], bVals[bIndex]);
            }
        }
        return [
            result,
            newShape
        ];
    };
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluYXJ5X2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy91dGlscy9iaW5hcnlfaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFxRCxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUk1Rzs7R0FFRztBQUNILE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxFQUF5QjtJQUVwRSxPQUFPLENBQUMsTUFBZ0IsRUFBRSxNQUFnQixFQUFFLEtBQWlCLEVBQ3JELEtBQWlCLEVBQUUsS0FBZSxFQUEwQixFQUFFO1FBQ3BFLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsTUFBTSxNQUFNLEdBQ1IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQXdCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEUsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRTVCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFdkUsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbEU7U0FDRjthQUFNO1lBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFMUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRXRELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUV0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUM5QztTQUNGO1FBRUQsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgRGF0YVR5cGUsIERhdGFWYWx1ZXMsIE51bWVyaWNEYXRhVHlwZSwgVHlwZWRBcnJheSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtTaW1wbGVCaW5hcnlLZXJuZWxJbXBsLCBTaW1wbGVCaW5hcnlPcGVyYXRpb259IGZyb20gJy4vYmluYXJ5X3R5cGVzJztcblxuLyoqXG4gKiBUZW1wbGF0ZSB0aGF0IGNyZWF0ZXMgaW1wbGVtZW50YXRpb24gZm9yIGJpbmFyeSBvcHMuIFN1cHBvcnRzIGJyb2FkY2FzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbXBsZUJpbmFyeUtlcm5lbEltcGwob3A6IFNpbXBsZUJpbmFyeU9wZXJhdGlvbik6XG4gICAgU2ltcGxlQmluYXJ5S2VybmVsSW1wbCB7XG4gIHJldHVybiAoYVNoYXBlOiBudW1iZXJbXSwgYlNoYXBlOiBudW1iZXJbXSwgYVZhbHM6IERhdGFWYWx1ZXMsXG4gICAgICAgICAgYlZhbHM6IERhdGFWYWx1ZXMsIGR0eXBlOiBEYXRhVHlwZSk6IFtUeXBlZEFycmF5LCBudW1iZXJbXV0gPT4ge1xuICAgIGNvbnN0IG5ld1NoYXBlID0gYmFja2VuZF91dGlsLmFzc2VydEFuZEdldEJyb2FkY2FzdFNoYXBlKGFTaGFwZSwgYlNoYXBlKTtcblxuICAgIGNvbnN0IHJlc3VsdFJhbmsgPSBuZXdTaGFwZS5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0U3RyaWRlcyA9IHV0aWwuY29tcHV0ZVN0cmlkZXMobmV3U2hhcGUpO1xuICAgIGNvbnN0IHJlc3VsdFNpemUgPSB1dGlsLnNpemVGcm9tU2hhcGUobmV3U2hhcGUpO1xuXG4gICAgY29uc3QgcmVzdWx0ID1cbiAgICAgICAgdXRpbC5nZXRUeXBlZEFycmF5RnJvbURUeXBlKGR0eXBlIGFzIE51bWVyaWNEYXRhVHlwZSwgcmVzdWx0U2l6ZSk7XG5cbiAgICBjb25zdCBhUmFuayA9IGFTaGFwZS5sZW5ndGg7XG4gICAgY29uc3QgYlJhbmsgPSBiU2hhcGUubGVuZ3RoO1xuXG4gICAgY29uc3QgYVN0cmlkZXMgPSB1dGlsLmNvbXB1dGVTdHJpZGVzKGFTaGFwZSk7XG4gICAgY29uc3QgYlN0cmlkZXMgPSB1dGlsLmNvbXB1dGVTdHJpZGVzKGJTaGFwZSk7XG5cbiAgICBjb25zdCBhQnJvYWRjYXN0RGltcyA9IGJhY2tlbmRfdXRpbC5nZXRCcm9hZGNhc3REaW1zKGFTaGFwZSwgbmV3U2hhcGUpO1xuICAgIGNvbnN0IGJCcm9hZGNhc3REaW1zID0gYmFja2VuZF91dGlsLmdldEJyb2FkY2FzdERpbXMoYlNoYXBlLCBuZXdTaGFwZSk7XG5cbiAgICBpZiAoYUJyb2FkY2FzdERpbXMubGVuZ3RoICsgYkJyb2FkY2FzdERpbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7ICsraSkge1xuICAgICAgICByZXN1bHRbaV0gPSBvcChhVmFsc1tpICUgYVZhbHMubGVuZ3RoXSwgYlZhbHNbaSAlIGJWYWxzLmxlbmd0aF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBsb2MgPSB1dGlsLmluZGV4VG9Mb2MoaSwgcmVzdWx0UmFuaywgcmVzdWx0U3RyaWRlcyk7XG5cbiAgICAgICAgY29uc3QgYUxvYyA9IGxvYy5zbGljZSgtYVJhbmspO1xuICAgICAgICBhQnJvYWRjYXN0RGltcy5mb3JFYWNoKGQgPT4gYUxvY1tkXSA9IDApO1xuICAgICAgICBjb25zdCBhSW5kZXggPSB1dGlsLmxvY1RvSW5kZXgoYUxvYywgYVJhbmssIGFTdHJpZGVzKTtcblxuICAgICAgICBjb25zdCBiTG9jID0gbG9jLnNsaWNlKC1iUmFuayk7XG4gICAgICAgIGJCcm9hZGNhc3REaW1zLmZvckVhY2goZCA9PiBiTG9jW2RdID0gMCk7XG4gICAgICAgIGNvbnN0IGJJbmRleCA9IHV0aWwubG9jVG9JbmRleChiTG9jLCBiUmFuaywgYlN0cmlkZXMpO1xuXG4gICAgICAgIHJlc3VsdFtpXSA9IG9wKGFWYWxzW2FJbmRleF0sIGJWYWxzW2JJbmRleF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbcmVzdWx0LCBuZXdTaGFwZV07XG4gIH07XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "zeros",
    ()=>zeros
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js [app-client] (ecmascript)");
;
;
function zeros(backend, shape, dtype = 'float32') {
    if (dtype === 'complex64') {
        const real = zeros(backend, shape, 'float32');
        const imag = zeros(backend, shape, 'float32');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
            inputs: {
                real,
                imag
            },
            backend
        });
    }
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].makeZerosTypedArray(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(shape), dtype);
    return backend.makeTensorInfo(shape, dtype, values);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyb3NfaW1wbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC1jcHUvc3JjL3V0aWxzL3plcm9zX2ltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUF1QixJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFM0M7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUNqQixPQUF1QixFQUFFLEtBQWUsRUFDeEMsUUFBa0IsU0FBUztJQUM3QixJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUU7UUFDekIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFOUMsT0FBTyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztLQUNqRDtJQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTFFLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RGF0YVR5cGUsIFRlbnNvckluZm8sIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge01hdGhCYWNrZW5kQ1BVfSBmcm9tICcuLi9iYWNrZW5kX2NwdSc7XG5pbXBvcnQge2NvbXBsZXh9IGZyb20gJy4uL2tlcm5lbHMvQ29tcGxleCc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdGVuc29ySW5mbyB3aXRoIGFsbCB6ZXJvcyB2YWx1ZS5cbiAqIEBwYXJhbSBiYWNrZW5kIGNwdSBiYWNrZW5kLlxuICogQHBhcmFtIHNoYXBlIFNoYXBlIGZvciB0aGUgemVyb3MgdGVuc29yLlxuICogQHBhcmFtIGR0eXBlIE9wdGlvbmFsLiBJZiBzZXQsIHRoZSByZXN1bHQgaGFzIHRoaXMgZHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvcyhcbiAgICBiYWNrZW5kOiBNYXRoQmFja2VuZENQVSwgc2hhcGU6IG51bWJlcltdLFxuICAgIGR0eXBlOiBEYXRhVHlwZSA9ICdmbG9hdDMyJyk6IFRlbnNvckluZm8ge1xuICBpZiAoZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgY29uc3QgcmVhbCA9IHplcm9zKGJhY2tlbmQsIHNoYXBlLCAnZmxvYXQzMicpO1xuICAgIGNvbnN0IGltYWcgPSB6ZXJvcyhiYWNrZW5kLCBzaGFwZSwgJ2Zsb2F0MzInKTtcblxuICAgIHJldHVybiBjb21wbGV4KHtpbnB1dHM6IHtyZWFsLCBpbWFnfSwgYmFja2VuZH0pO1xuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gdXRpbC5tYWtlWmVyb3NUeXBlZEFycmF5KHV0aWwuc2l6ZUZyb21TaGFwZShzaGFwZSksIGR0eXBlKTtcblxuICByZXR1cm4gYmFja2VuZC5tYWtlVGVuc29ySW5mbyhzaGFwZSwgZHR5cGUsIHZhbHVlcyk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "binaryKernelFunc",
    ()=>binaryKernelFunc,
    "createComplexBinaryKernelImpl",
    ()=>createComplexBinaryKernelImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <export * as backend_util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$cpu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js [app-client] (ecmascript)");
;
;
;
;
function binaryKernelFunc(name, simpleImpl, complexImpl, dtype) {
    if (complexImpl == null) {
        return ({ inputs, backend })=>{
            const { a, b } = inputs;
            const cpuBackend = backend;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$cpu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNotComplex"])([
                a,
                b
            ], name);
            const aVals = cpuBackend.data.get(a.dataId).values;
            const bVals = cpuBackend.data.get(b.dataId).values;
            const decodedAVals = a.dtype === 'string' ? // tslint:disable-next-line: no-any
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].fromUint8ToStringArray(aVals) : aVals;
            const decodedBVals = a.dtype === 'string' ? // tslint:disable-next-line: no-any
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].fromUint8ToStringArray(bVals) : bVals;
            const $dtype = dtype || a.dtype;
            const [resultData, resultShape] = simpleImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype);
            return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
        };
    }
    return ({ inputs, backend })=>{
        const { a, b } = inputs;
        const cpuBackend = backend;
        if (a.dtype === 'complex64' || b.dtype === 'complex64') {
            const $aComplex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])({
                inputs: {
                    x: a
                },
                backend: cpuBackend,
                attrs: {
                    dtype: 'complex64'
                }
            });
            const $aComplexVals = cpuBackend.data.get($aComplex.dataId);
            const aReal = $aComplexVals.complexTensorInfos.real;
            const aImag = $aComplexVals.complexTensorInfos.imag;
            const aRealVals = cpuBackend.data.get(aReal.dataId).values;
            const aImagVals = cpuBackend.data.get(aImag.dataId).values;
            const $bComplex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])({
                inputs: {
                    x: b
                },
                backend: cpuBackend,
                attrs: {
                    dtype: 'complex64'
                }
            });
            const $bComplexVals = cpuBackend.data.get($bComplex.dataId);
            const bReal = $bComplexVals.complexTensorInfos.real;
            const bImag = $bComplexVals.complexTensorInfos.imag;
            const bRealVals = cpuBackend.data.get(bReal.dataId).values;
            const bImagVals = cpuBackend.data.get(bImag.dataId).values;
            const [resultRealData, resultImagData, resultShape] = complexImpl(a.shape, b.shape, aRealVals, aImagVals, bRealVals, bImagVals);
            const resultReal = cpuBackend.makeTensorInfo(resultShape, 'float32', resultRealData);
            const resultImag = cpuBackend.makeTensorInfo(resultShape, 'float32', resultImagData);
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
                inputs: {
                    real: resultReal,
                    imag: resultImag
                },
                backend: cpuBackend
            });
            cpuBackend.disposeIntermediateTensorInfo($aComplex);
            cpuBackend.disposeIntermediateTensorInfo($bComplex);
            cpuBackend.disposeIntermediateTensorInfo(resultReal);
            cpuBackend.disposeIntermediateTensorInfo(resultImag);
            return result;
        } else {
            const aVals = cpuBackend.data.get(a.dataId).values;
            const bVals = cpuBackend.data.get(b.dataId).values;
            const $dtype = dtype || a.dtype;
            const [resultData, resultShape] = simpleImpl(a.shape, b.shape, aVals, bVals, $dtype);
            return cpuBackend.makeTensorInfo(resultShape, $dtype, resultData);
        }
    };
}
function createComplexBinaryKernelImpl(op) {
    return (aShape, bShape, aRealVals, aImagVals, bRealVals, bImagVals)=>{
        const resultShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].assertAndGetBroadcastShape(aShape, bShape);
        const resultSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(resultShape);
        const resultRank = resultShape.length;
        const resultStrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].computeStrides(resultShape);
        const resultRealVals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].getTypedArrayFromDType('float32', resultSize);
        const resultImagVals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].getTypedArrayFromDType('float32', resultSize);
        const aBroadcastDims = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].getBroadcastDims(aShape, resultShape);
        const bBroadcastDims = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].getBroadcastDims(bShape, resultShape);
        const aVals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].mergeRealAndImagArrays(aRealVals, aImagVals);
        const bVals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].mergeRealAndImagArrays(bRealVals, bImagVals);
        const aRank = aShape.length;
        const aStrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].computeStrides(aShape);
        const bRank = bShape.length;
        const bStrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].computeStrides(bShape);
        if (aBroadcastDims.length + bBroadcastDims.length === 0) {
            for(let i = 0; i < resultRealVals.length; i++){
                const aIdx = i % aVals.length;
                const bIdx = i % bVals.length;
                const result = op(aVals[aIdx * 2], aVals[aIdx * 2 + 1], bVals[bIdx * 2], bVals[bIdx * 2 + 1]);
                resultRealVals[i] = result.real;
                resultImagVals[i] = result.imag;
            }
        } else {
            for(let i = 0; i < resultRealVals.length; i++){
                const loc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].indexToLoc(i, resultRank, resultStrides);
                const aLoc = loc.slice(-aRank);
                aBroadcastDims.forEach((d)=>aLoc[d] = 0);
                const aIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].locToIndex(aLoc, aRank, aStrides);
                const bLoc = loc.slice(-bRank);
                bBroadcastDims.forEach((d)=>bLoc[d] = 0);
                const bIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].locToIndex(bLoc, bRank, bStrides);
                const opResult = op(aVals[aIndex * 2], aVals[aIndex * 2 + 1], bVals[bIndex * 2], bVals[bIndex * 2 + 1]);
                resultRealVals[i] = opResult.real;
                resultImagVals[i] = opResult.imag;
            }
        }
        return [
            resultRealVals,
            resultImagVals,
            resultShape
        ];
    };
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluYXJ5X3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMvdXRpbHMvYmluYXJ5X3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQWtELElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR3pHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSTNDOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQzVCLElBQVksRUFBRSxVQUFrQyxFQUNoRCxXQUFxQyxFQUFFLEtBQWdCO0lBQ3pELElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtRQUN2QixPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBRTtZQUMzQixNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxHQUFHLE1BQXNCLENBQUM7WUFDdEMsTUFBTSxVQUFVLEdBQUcsT0FBeUIsQ0FBQztZQUU3QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUUvQixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBb0IsQ0FBQztZQUNqRSxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBb0IsQ0FBQztZQUVqRSxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxD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QUFLLENBQUMsQ0FBQztnQkFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUV0RCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFdEQsTUFBTSxRQUFRLEdBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDM0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFOUIsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ25DO1NBQ0Y7UUFDRCxPQUFPLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgQmluYXJ5SW5wdXRzLCBEYXRhVHlwZSwgS2VybmVsRnVuYywgVHlwZWRBcnJheSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtNYXRoQmFja2VuZENQVX0gZnJvbSAnLi4vYmFja2VuZF9jcHUnO1xuaW1wb3J0IHthc3NlcnROb3RDb21wbGV4fSBmcm9tICcuLi9jcHVfdXRpbCc7XG5pbXBvcnQge2Nhc3R9IGZyb20gJy4uL2tlcm5lbHMvQ2FzdCc7XG5pbXBvcnQge2NvbXBsZXh9IGZyb20gJy4uL2tlcm5lbHMvQ29tcGxleCc7XG5cbmltcG9ydCB7Q29tcGxleEJpbmFyeUtlcm5lbEltcGwsIENvbXBsZXhCaW5hcnlPcGVyYXRpb24sIFNpbXBsZUJpbmFyeUtlcm5lbEltcGx9IGZyb20gJy4vYmluYXJ5X3R5cGVzJztcblxuLyoqXG4gKiBUZW1wbGF0ZSB0aGF0IGNyZWF0ZXMgYSBgS2VybmVsRnVuY2AgZm9yIGJpbmFyeSBvcHMuXG4gKiBAcGFyYW0gbmFtZSBLZXJuZWwgbmFtZS5cbiAqIEBwYXJhbSBiaW5hcnlLZXJuZWxJbXBsIEEgYFNpbXBsZUJpbmFyeUtlcm5lbEltcGxgIGZvciB0aGUga2VybmVsLlxuICogQHBhcmFtIGJpbmFyeUtlcm5lbENvbXBsZXhJbXBsIE9wdGlvbmFsLiBJZiBleGlzdHMsIHJlcHJlc2VudHMgYVxuICogICAgIGBDb21wbGV4QmluYXJ5S2VybmVsSW1wbGAgZm9yIHRoZSBrZXJuZWwsIHdpbGwgYmUgdXNlZCB3aGVuIGlucHV0IGR0eXBlXG4gKiAgICAgaXMgYGNvbXBsZXg2NGAuXG4gKiBAcGFyYW0gZHR5cGUgT3B0aW9uYWwuIElmIHNldCwgdGhlIHJlc3VsdCBoYXMgdGhpcyBkdHlwZS4gT3RoZXJ3aXNlLCB0aGVcbiAqICAgICByZXN1bHQgaGFzIHRoZSBzYW1lIGR0eXBlIGFzIHRoZSBmaXJzdCBpbnB1dC4gVGhpcyBpcyBtYWlubHkgdXNlZCBpblxuICogICAgIGNvbXBhcmlzb24ga2VybmVscywgc3VjaCBhcyBFcXVhbCwgTGVzcywgR3JlYXRlciwgZXRjLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5S2VybmVsRnVuYyhcbiAgICBuYW1lOiBzdHJpbmcsIHNpbXBsZUltcGw6IFNpbXBsZUJpbmFyeUtlcm5lbEltcGwsXG4gICAgY29tcGxleEltcGw/OiBDb21wbGV4QmluYXJ5S2VybmVsSW1wbCwgZHR5cGU/OiBEYXRhVHlwZSk6IEtlcm5lbEZ1bmMge1xuICBpZiAoY29tcGxleEltcGwgPT0gbnVsbCkge1xuICAgIHJldHVybiAoe2lucHV0cywgYmFja2VuZH0pID0+IHtcbiAgICAgIGNvbnN0IHthLCBifSA9IGlucHV0cyBhcyBCaW5hcnlJbnB1dHM7XG4gICAgICBjb25zdCBjcHVCYWNrZW5kID0gYmFja2VuZCBhcyBNYXRoQmFja2VuZENQVTtcblxuICAgICAgYXNzZXJ0Tm90Q29tcGxleChbYSwgYl0sIG5hbWUpO1xuXG4gICAgICBjb25zdCBhVmFscyA9IGNwdUJhY2tlbmQuZGF0YS5nZXQoYS5kYXRhSWQpLnZhbHVlcyBhcyBUeXBlZEFycmF5O1xuICAgICAgY29uc3QgYlZhbHMgPSBjcHVCYWNrZW5kLmRhdGEuZ2V0KGIuZGF0YUlkKS52YWx1ZXMgYXMgVHlwZWRBcnJheTtcblxuICAgICAgY29uc3QgZGVjb2RlZEFWYWxzID0gYS5kdHlwZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gICAgICAgICAgYmFja2VuZF91dGlsLmZyb21VaW50OFRvU3RyaW5nQXJyYXkoYVZhbHMgYXMgYW55IGFzIFVpbnQ4QXJyYXlbXSkgOlxuICAgICAgICAgIGFWYWxzO1xuICAgICAgY29uc3QgZGVjb2RlZEJWYWxzID0gYS5kdHlwZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gICAgICAgICAgYmFja2VuZF91dGlsLmZyb21VaW50OFRvU3RyaW5nQXJyYXkoYlZhbHMgYXMgYW55IGFzIFVpbnQ4QXJyYXlbXSkgOlxuICAgICAgICAgIGJWYWxzO1xuICAgICAgY29uc3QgJGR0eXBlID0gZHR5cGUgfHwgYS5kdHlwZTtcblxuICAgICAgY29uc3QgW3Jlc3VsdERhdGEsIHJlc3VsdFNoYXBlXSA9XG4gICAgICAgICAgc2ltcGxlSW1wbChhLnNoYXBlLCBiLnNoYXBlLCBkZWNvZGVkQVZhbHMsIGRlY29kZWRCVmFscywgJGR0eXBlKTtcblxuICAgICAgcmV0dXJuIGNwdUJhY2tlbmQubWFrZVRlbnNvckluZm8ocmVzdWx0U2hhcGUsICRkdHlwZSwgcmVzdWx0RGF0YSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoe2lucHV0cywgYmFja2VuZH0pID0+IHtcbiAgICBjb25zdCB7YSwgYn0gPSBpbnB1dHMgYXMgQmluYXJ5SW5wdXRzO1xuICAgIGNvbnN0IGNwdUJhY2tlbmQgPSBiYWNrZW5kIGFzIE1hdGhCYWNrZW5kQ1BVO1xuXG4gICAgaWYgKGEuZHR5cGUgPT09ICdjb21wbGV4NjQnIHx8IGIuZHR5cGUgPT09ICdjb21wbGV4NjQnKSB7XG4gICAgICBjb25zdCAkYUNvbXBsZXggPSBjYXN0KFxuICAgICAgICAgIHtpbnB1dHM6IHt4OiBhfSwgYmFja2VuZDogY3B1QmFja2VuZCwgYXR0cnM6IHtkdHlwZTogJ2NvbXBsZXg2NCd9fSk7XG5cbiAgICAgIGNvbnN0ICRhQ29tcGxleFZhbHMgPSBjcHVCYWNrZW5kLmRhdGEuZ2V0KCRhQ29tcGxleC5kYXRhSWQpO1xuXG4gICAgICBjb25zdCBhUmVhbCA9ICRhQ29tcGxleFZhbHMuY29tcGxleFRlbnNvckluZm9zLnJlYWw7XG4gICAgICBjb25zdCBhSW1hZyA9ICRhQ29tcGxleFZhbHMuY29tcGxleFRlbnNvckluZm9zLmltYWc7XG5cbiAgICAgIGNvbnN0IGFSZWFsVmFscyA9XG4gICAgICAgICAgY3B1QmFja2VuZC5kYXRhLmdldChhUmVhbC5kYXRhSWQpLnZhbHVlcyBhcyBGbG9hdDMyQXJyYXk7XG4gICAgICBjb25zdCBhSW1hZ1ZhbHMgPVxuICAgICAgICAgIGNwdUJhY2tlbmQuZGF0YS5nZXQoYUltYWcuZGF0YUlkKS52YWx1ZXMgYXMgRmxvYXQzMkFycmF5O1xuXG4gICAgICBjb25zdCAkYkNvbXBsZXggPSBjYXN0KFxuICAgICAgICAgIHtpbnB1dHM6IHt4OiBifSwgYmFja2VuZDogY3B1QmFja2VuZCwgYXR0cnM6IHtkdHlwZTogJ2NvbXBsZXg2NCd9fSk7XG5cbiAgICAgIGNvbnN0ICRiQ29tcGxleFZhbHMgPSBjcHVCYWNrZW5kLmRhdGEuZ2V0KCRiQ29tcGxleC5kYXRhSWQpO1xuXG4gICAgICBjb25zdCBiUmVhbCA9ICRiQ29tcGxleFZhbHMuY29tcGxleFRlbnNvckluZm9zLnJlYWw7XG4gICAgICBjb25zdCBiSW1hZyA9ICRiQ29tcGxleFZhbHMuY29tcGxleFRlbnNvckluZm9zLmltYWc7XG5cbiAgICAgIGNvbnN0IGJSZWFsVmFscyA9XG4gICAgICAgICAgY3B1QmFja2VuZC5kYXRhLmdldChiUmVhbC5kYXRhSWQpLnZhbHVlcyBhcyBGbG9hdDMyQXJyYXk7XG4gICAgICBjb25zdCBiSW1hZ1ZhbHMgPVxuICAgICAgICAgIGNwdUJhY2tlbmQuZGF0YS5nZXQoYkltYWcuZGF0YUlkKS52YWx1ZXMgYXMgRmxvYXQzMkFycmF5O1xuXG4gICAgICBjb25zdCBbcmVzdWx0UmVhbERhdGEsIHJlc3VsdEltYWdEYXRhLCByZXN1bHRTaGFwZV0gPSBjb21wbGV4SW1wbChcbiAgICAgICAgICBhLnNoYXBlLCBiLnNoYXBlLCBhUmVhbFZhbHMsIGFJbWFnVmFscywgYlJlYWxWYWxzLCBiSW1hZ1ZhbHMpO1xuXG4gICAgICBjb25zdCByZXN1bHRSZWFsID1cbiAgICAgICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKHJlc3VsdFNoYXBlLCAnZmxvYXQzMicsIHJlc3VsdFJlYWxEYXRhKTtcblxuICAgICAgY29uc3QgcmVzdWx0SW1hZyA9XG4gICAgICAgICAgY3B1QmFja2VuZC5tYWtlVGVuc29ySW5mbyhyZXN1bHRTaGFwZSwgJ2Zsb2F0MzInLCByZXN1bHRJbWFnRGF0YSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBsZXgoXG4gICAgICAgICAge2lucHV0czoge3JlYWw6IHJlc3VsdFJlYWwsIGltYWc6IHJlc3VsdEltYWd9LCBiYWNrZW5kOiBjcHVCYWNrZW5kfSk7XG5cbiAgICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJGFDb21wbGV4KTtcbiAgICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJGJDb21wbGV4KTtcbiAgICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8ocmVzdWx0UmVhbCk7XG4gICAgICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKHJlc3VsdEltYWcpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhVmFscyA9IGNwdUJhY2tlbmQuZGF0YS5nZXQoYS5kYXRhSWQpLnZhbHVlcyBhcyBUeXBlZEFycmF5O1xuICAgICAgY29uc3QgYlZhbHMgPSBjcHVCYWNrZW5kLmRhdGEuZ2V0KGIuZGF0YUlkKS52YWx1ZXMgYXMgVHlwZWRBcnJheTtcblxuICAgICAgY29uc3QgJGR0eXBlID0gZHR5cGUgfHwgYS5kdHlwZTtcblxuICAgICAgY29uc3QgW3Jlc3VsdERhdGEsIHJlc3VsdFNoYXBlXSA9XG4gICAgICAgICAgc2ltcGxlSW1wbChhLnNoYXBlLCBiLnNoYXBlLCBhVmFscywgYlZhbHMsICRkdHlwZSk7XG5cbiAgICAgIHJldHVybiBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKHJlc3VsdFNoYXBlLCAkZHR5cGUsIHJlc3VsdERhdGEpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSB0aGF0IGNyZWF0ZXMgdGhlIGNvbXBsZXggdHlwZSBpbXBsZW1lbnRhdGlvbiBmb3IgYmluYXJ5IG9wcy5cbiAqIFN1cHBvcnRzIGJyb2FkY2FzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBsZXhCaW5hcnlLZXJuZWxJbXBsKG9wOiBDb21wbGV4QmluYXJ5T3BlcmF0aW9uKTpcbiAgICBDb21wbGV4QmluYXJ5S2VybmVsSW1wbCB7XG4gIHJldHVybiAoYVNoYXBlOiBudW1iZXJbXSwgYlNoYXBlOiBudW1iZXJbXSwgYVJlYWxWYWxzOiBGbG9hdDMyQXJyYXksXG4gICAgICAgICAgYUltYWdWYWxzOiBGbG9hdDMyQXJyYXksIGJSZWFsVmFsczogRmxvYXQzMkFycmF5LFxuICAgICAgICAgIGJJbWFnVmFsczogRmxvYXQzMkFycmF5KTogW1R5cGVkQXJyYXksIFR5cGVkQXJyYXksIG51bWJlcltdXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0U2hhcGUgPSBiYWNrZW5kX3V0aWwuYXNzZXJ0QW5kR2V0QnJvYWRjYXN0U2hhcGUoYVNoYXBlLCBiU2hhcGUpO1xuICAgIGNvbnN0IHJlc3VsdFNpemUgPSB1dGlsLnNpemVGcm9tU2hhcGUocmVzdWx0U2hhcGUpO1xuICAgIGNvbnN0IHJlc3VsdFJhbmsgPSByZXN1bHRTaGFwZS5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0U3RyaWRlcyA9IHV0aWwuY29tcHV0ZVN0cmlkZXMocmVzdWx0U2hhcGUpO1xuXG4gICAgY29uc3QgcmVzdWx0UmVhbFZhbHMgPSB1dGlsLmdldFR5cGVkQXJyYXlGcm9tRFR5cGUoJ2Zsb2F0MzInLCByZXN1bHRTaXplKTtcbiAgICBjb25zdCByZXN1bHRJbWFnVmFscyA9IHV0aWwuZ2V0VHlwZWRBcnJheUZyb21EVHlwZSgnZmxvYXQzMicsIHJlc3VsdFNpemUpO1xuXG4gICAgY29uc3QgYUJyb2FkY2FzdERpbXMgPSBiYWNrZW5kX3V0aWwuZ2V0QnJvYWRjYXN0RGltcyhhU2hhcGUsIHJlc3VsdFNoYXBlKTtcbiAgICBjb25zdCBiQnJvYWRjYXN0RGltcyA9IGJhY2tlbmRfdXRpbC5nZXRCcm9hZGNhc3REaW1zKGJTaGFwZSwgcmVzdWx0U2hhcGUpO1xuXG4gICAgY29uc3QgYVZhbHMgPSBiYWNrZW5kX3V0aWwubWVyZ2VSZWFsQW5kSW1hZ0FycmF5cyhhUmVhbFZhbHMsIGFJbWFnVmFscyk7XG4gICAgY29uc3QgYlZhbHMgPSBiYWNrZW5kX3V0aWwubWVyZ2VSZWFsQW5kSW1hZ0FycmF5cyhiUmVhbFZhbHMsIGJJbWFnVmFscyk7XG5cbiAgICBjb25zdCBhUmFuayA9IGFTaGFwZS5sZW5ndGg7XG4gICAgY29uc3QgYVN0cmlkZXMgPSB1dGlsLmNvbXB1dGVTdHJpZGVzKGFTaGFwZSk7XG5cbiAgICBjb25zdCBiUmFuayA9IGJTaGFwZS5sZW5ndGg7XG4gICAgY29uc3QgYlN0cmlkZXMgPSB1dGlsLmNvbXB1dGVTdHJpZGVzKGJTaGFwZSk7XG5cbiAgICBpZiAoYUJyb2FkY2FzdERpbXMubGVuZ3RoICsgYkJyb2FkY2FzdERpbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdFJlYWxWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFJZHggPSBpICUgYVZhbHMubGVuZ3RoO1xuICAgICAgICBjb25zdCBiSWR4ID0gaSAlIGJWYWxzLmxlbmd0aDtcblxuICAgICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICAgICAgb3AoYVZhbHNbYUlkeCAqIDJdLCBhVmFsc1thSWR4ICogMiArIDFdLCBiVmFsc1tiSWR4ICogMl0sXG4gICAgICAgICAgICAgICBiVmFsc1tiSWR4ICogMiArIDFdKTtcblxuICAgICAgICByZXN1bHRSZWFsVmFsc1tpXSA9IHJlc3VsdC5yZWFsO1xuICAgICAgICByZXN1bHRJbWFnVmFsc1tpXSA9IHJlc3VsdC5pbWFnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdFJlYWxWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IHV0aWwuaW5kZXhUb0xvYyhpLCByZXN1bHRSYW5rLCByZXN1bHRTdHJpZGVzKTtcblxuICAgICAgICBjb25zdCBhTG9jID0gbG9jLnNsaWNlKC1hUmFuayk7XG4gICAgICAgIGFCcm9hZGNhc3REaW1zLmZvckVhY2goZCA9PiBhTG9jW2RdID0gMCk7XG4gICAgICAgIGNvbnN0IGFJbmRleCA9IHV0aWwubG9jVG9JbmRleChhTG9jLCBhUmFuaywgYVN0cmlkZXMpO1xuXG4gICAgICAgIGNvbnN0IGJMb2MgPSBsb2Muc2xpY2UoLWJSYW5rKTtcbiAgICAgICAgYkJyb2FkY2FzdERpbXMuZm9yRWFjaChkID0+IGJMb2NbZF0gPSAwKTtcbiAgICAgICAgY29uc3QgYkluZGV4ID0gdXRpbC5sb2NUb0luZGV4KGJMb2MsIGJSYW5rLCBiU3RyaWRlcyk7XG5cbiAgICAgICAgY29uc3Qgb3BSZXN1bHQgPVxuICAgICAgICAgICAgb3AoYVZhbHNbYUluZGV4ICogMl0sIGFWYWxzW2FJbmRleCAqIDIgKyAxXSwgYlZhbHNbYkluZGV4ICogMl0sXG4gICAgICAgICAgICAgICBiVmFsc1tiSW5kZXggKiAyICsgMV0pO1xuXG4gICAgICAgIHJlc3VsdFJlYWxWYWxzW2ldID0gb3BSZXN1bHQucmVhbDtcbiAgICAgICAgcmVzdWx0SW1hZ1ZhbHNbaV0gPSBvcFJlc3VsdC5pbWFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3Jlc3VsdFJlYWxWYWxzLCByZXN1bHRJbWFnVmFscywgcmVzdWx0U2hhcGVdO1xuICB9O1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "createSimpleUnaryImpl",
    ()=>createSimpleUnaryImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
;
function createSimpleUnaryImpl(op) {
    return (values, dtype, attrs)=>{
        const newValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].getArrayFromDType(dtype, values.length);
        for(let i = 0; i < values.length; ++i){
            newValues[i] = op(values[i], attrs);
        }
        return newValues;
    };
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hcnlfaW1wbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC1jcHUvc3JjL3V0aWxzL3VuYXJ5X2ltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBSTNDOztHQUVHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUNDLEVBQThCO0lBRWxFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzlCLE1BQU0sU0FBUyxHQUNYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHt1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge1NpbXBsZVVuYXJ5SW1wbCwgU2ltcGxlVW5hcnlPcGVyYXRpb259IGZyb20gJy4vdW5hcnlfdHlwZXMnO1xuXG4vKipcbiAqIFRlbXBsYXRlIHRoYXQgY3JlYXRlcyBpbXBsZW1lbnRhdGlvbiBmb3IgdW5hcnkgb3AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW1wbGVVbmFyeUltcGw8SSBleHRlbmRzIG51bWJlciB8IHN0cmluZyA9IG51bWJlcixcbiAgTyBleHRlbmRzIG51bWJlciB8IHN0cmluZyA9IG51bWJlcj4ob3A6IFNpbXBsZVVuYXJ5T3BlcmF0aW9uPEksIE8+KTpcbiAgICBTaW1wbGVVbmFyeUltcGw8SSwgTz4ge1xuICByZXR1cm4gKHZhbHVlcywgZHR5cGUsIGF0dHJzKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWVzID1cbiAgICAgICAgdXRpbC5nZXRBcnJheUZyb21EVHlwZShkdHlwZSwgdmFsdWVzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIG5ld1ZhbHVlc1tpXSA9IG9wKHZhbHVlc1tpXSwgYXR0cnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWVzO1xuICB9O1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "unaryKernelFunc",
    ()=>unaryKernelFunc,
    "unaryKernelFuncFromImpl",
    ()=>unaryKernelFuncFromImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <export * as backend_util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$cpu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/cpu_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$utils$2f$unary_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js [app-client] (ecmascript)");
;
;
;
function unaryKernelFunc(name, op, dtype) {
    const impl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$utils$2f$unary_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSimpleUnaryImpl"])(op);
    return unaryKernelFuncFromImpl(name, impl, dtype);
}
function unaryKernelFuncFromImpl(name, unaryImpl, dtype) {
    return ({ inputs, attrs, backend })=>{
        const { x } = inputs;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$cpu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNotComplex"])(x, name);
        const cpuBackend = backend;
        const values = cpuBackend.data.get(x.dataId).values;
        let decoded;
        if (x.dtype === 'string') {
            if (!Array.isArray(values)) {
                throw new Error('String tensor\'s value was not an instance of Array');
            }
            decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].fromUint8ToStringArray(values);
        } else {
            decoded = values;
        }
        const $dtype = dtype || x.dtype;
        const newValues = unaryImpl(decoded, $dtype, attrs);
        return cpuBackend.makeTensorInfo(x.shape, $dtype, newValues);
    };
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hcnlfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy91dGlscy91bmFyeV91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUF1QyxNQUFNLHVCQUF1QixDQUFDO0FBR3pGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJbkQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxlQUFlLENBRTdCLElBQVksRUFBRSxFQUE4QixFQUM1QyxLQUFzQjtJQUV0QixNQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBTyxFQUFFLENBQUMsQ0FBQztJQUU3QyxPQUFPLHVCQUF1QixDQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLHVCQUF1QixDQUVyQyxJQUFZLEVBQUUsU0FBZ0MsRUFDOUMsS0FBc0I7SUFFdEIsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sRUFBQyxDQUFDLEVBQUMsR0FBRyxNQUFxQixDQUFDO1FBQ2xDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixNQUFNLFVBQVUsR0FBRyxPQUF5QixDQUFDO1FBQzdDLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDcEQsSUFBSSxPQUFxQixDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQzthQUN4RTtZQUNELE9BQU8sR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUN0QyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLEdBQUcsTUFBaUMsQ0FBQztTQUM3QztRQUVELE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBdUIsQ0FBQztRQUNsRCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxPQUFPLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtiYWNrZW5kX3V0aWwsIERhdGFUeXBlRm9yLCBLZXJuZWxGdW5jLCBVbmFyeUlucHV0c30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtNYXRoQmFja2VuZENQVX0gZnJvbSAnLi4vYmFja2VuZF9jcHUnO1xuaW1wb3J0IHthc3NlcnROb3RDb21wbGV4fSBmcm9tICcuLi9jcHVfdXRpbCc7XG5pbXBvcnQge2NyZWF0ZVNpbXBsZVVuYXJ5SW1wbH0gZnJvbSAnLi91bmFyeV9pbXBsJztcblxuaW1wb3J0IHtTaW1wbGVVbmFyeUltcGwsIFNpbXBsZVVuYXJ5T3BlcmF0aW9ufSBmcm9tICcuL3VuYXJ5X3R5cGVzJztcblxuLyoqXG4gKiBUZW1wbGF0ZSB0aGF0IGNyZWF0ZXMgYSBgS2VybmVsRnVuY2AgZm9yIHVuYXJ5IG9wcy5cbiAqIEBwYXJhbSBuYW1lIEtlcm5lbCBuYW1lLlxuICogQHBhcmFtIG9wIEEgYFNpbXBsZVVuYXJ5T3BlcmF0aW9uYCBmb3IgdGhlIGtlcm5lbC5cbiAqIEBwYXJhbSBkdHlwZSBPcHRpb25hbC4gSWYgc2V0LCB0aGUgcmVzdWx0IGhhcyB0aGlzIGR0eXBlLiBPdGhlcndpc2UsIHRoZVxuICogICAgIHJlc3VsdCBoYXMgdGhlIHNhbWUgZHR5cGUgYXMgdGhlIGlucHV0LiBUaGlzIGlzIG1haW5seSB1c2VkIGluIGNlcnRhaW5cbiAqICAgICBrZXJuZWxzIHRoYXQgcmV0dXJuIGJvb2wgdHlwZSwgc3VjaCBhcyBpc0Zpbml0ZSwgaXNJbmYsIGV0Yy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuYXJ5S2VybmVsRnVuYzxJIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nID0gbnVtYmVyLFxuICBPIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nID0gbnVtYmVyPihcbiAgbmFtZTogc3RyaW5nLCBvcDogU2ltcGxlVW5hcnlPcGVyYXRpb248SSwgTz4sXG4gIGR0eXBlPzogRGF0YVR5cGVGb3I8Tz4pOiBLZXJuZWxGdW5jIHtcblxuICBjb25zdCBpbXBsID0gY3JlYXRlU2ltcGxlVW5hcnlJbXBsPEksIE8+KG9wKTtcblxuICByZXR1cm4gdW5hcnlLZXJuZWxGdW5jRnJvbUltcGw8SSwgTz4obmFtZSwgaW1wbCwgZHR5cGUpO1xufVxuXG4vKipcbiAqIFRlbXBsYXRlIHRoYXQgY3JlYXRlcyBhIGBLZXJuZWxGdW5jYCBmb3IgdW5hcnkgb3BzIGZyb20gdGhlIGdpdmVuXG4gKiBgU2ltcGxlVW5hcnlJbXBsYC4uXG4gKiBAcGFyYW0gbmFtZSBLZXJuZWwgbmFtZS5cbiAqIEBwYXJhbSB1bmFyeUltcGwgQSBgU2ltcGxlVW5hcnlJbXBsYCB0aGF0IGltcGxlbWVudHMgdGhlIG9wLlxuICogQHBhcmFtIGR0eXBlIE9wdGlvbmFsLiBJZiBzZXQsIHRoZSByZXN1bHQgaGFzIHRoaXMgZHR5cGUuIE90aGVyd2lzZSwgdGhlXG4gKiAgICAgcmVzdWx0IGhhcyB0aGUgc2FtZSBkdHlwZSBhcyB0aGUgaW5wdXQuIFRoaXMgaXMgbWFpbmx5IHVzZWQgaW4gY2VydGFpblxuICogICAgIGtlcm5lbHMgdGhhdCByZXR1cm4gYm9vbCB0eXBlLCBzdWNoIGFzIGlzRmluaXRlLCBpc0luZiwgZXRjLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5hcnlLZXJuZWxGdW5jRnJvbUltcGw8SSBleHRlbmRzIG51bWJlciB8IHN0cmluZyA9IG51bWJlcixcbiAgTyBleHRlbmRzIG51bWJlciB8IHN0cmluZyA9IG51bWJlcj4oXG4gIG5hbWU6IHN0cmluZywgdW5hcnlJbXBsOiBTaW1wbGVVbmFyeUltcGw8SSwgTz4sXG4gIGR0eXBlPzogRGF0YVR5cGVGb3I8Tz4pOiBLZXJuZWxGdW5jIHtcblxuICByZXR1cm4gKHtpbnB1dHMsIGF0dHJzLCBiYWNrZW5kfSkgPT4ge1xuICAgIGNvbnN0IHt4fSA9IGlucHV0cyBhcyBVbmFyeUlucHV0cztcbiAgICBhc3NlcnROb3RDb21wbGV4KHgsIG5hbWUpO1xuXG4gICAgY29uc3QgY3B1QmFja2VuZCA9IGJhY2tlbmQgYXMgTWF0aEJhY2tlbmRDUFU7XG4gICAgY29uc3QgdmFsdWVzID0gY3B1QmFja2VuZC5kYXRhLmdldCh4LmRhdGFJZCkudmFsdWVzO1xuICAgIGxldCBkZWNvZGVkOiBBcnJheUxpa2U8ST47XG4gICAgaWYgKHguZHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmluZyB0ZW5zb3JcXCdzIHZhbHVlIHdhcyBub3QgYW4gaW5zdGFuY2Ugb2YgQXJyYXknKTtcbiAgICAgIH1cbiAgICAgIGRlY29kZWQgPSBiYWNrZW5kX3V0aWwuZnJvbVVpbnQ4VG9TdHJpbmdBcnJheSh2YWx1ZXMpIGFzIHVua25vd24gYXNcbiAgICAgICAgQXJyYXlMaWtlPEk+O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWNvZGVkID0gdmFsdWVzIGFzIHVua25vd24gYXMgQXJyYXlMaWtlPEk+O1xuICAgIH1cblxuICAgIGNvbnN0ICRkdHlwZSA9IGR0eXBlIHx8IHguZHR5cGUgYXMgRGF0YVR5cGVGb3I8Tz47XG4gICAgY29uc3QgbmV3VmFsdWVzID0gdW5hcnlJbXBsKGRlY29kZWQsICRkdHlwZSwgYXR0cnMpO1xuICAgIHJldHVybiBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKHguc2hhcGUsICRkdHlwZSwgbmV3VmFsdWVzKTtcbiAgfTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/fused_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "applyActivation",
    ()=>applyActivation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Elu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Elu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$LeakyRelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/LeakyRelu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Prelu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Relu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Relu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Relu6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Relu6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sigmoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function applyActivation(backend, x, activation, preluActivationWeights, leakyreluAlpha) {
    if (activation === 'linear') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"])({
            inputs: {
                x
            },
            backend
        });
    } else if (activation === 'relu') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Relu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"])({
            inputs: {
                x
            },
            backend
        });
    } else if (activation === 'elu') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Elu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elu"])({
            inputs: {
                x
            },
            backend
        });
    } else if (activation === 'relu6') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Relu6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu6"])({
            inputs: {
                x
            },
            backend
        });
    } else if (activation === 'prelu') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])({
            inputs: {
                x,
                alpha: preluActivationWeights
            },
            backend
        });
    } else if (activation === 'leakyrelu') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$LeakyRelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leakyRelu"])({
            inputs: {
                x
            },
            backend,
            attrs: {
                alpha: leakyreluAlpha
            }
        });
    } else if (activation === 'sigmoid') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sigmoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sigmoid"])({
            inputs: {
                x
            },
            backend
        });
    }
    throw new Error(`Activation ${activation} has not been implemented for the CPU backend.`);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVzZWRfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWJhY2tlbmQtY3B1L3NyYy91dGlscy9mdXNlZF91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFLSCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdkMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFM0MsTUFBTSxVQUFVLGVBQWUsQ0FDM0IsT0FBdUIsRUFBRSxDQUFhLEVBQUUsVUFBbUMsRUFDM0Usc0JBQW1DLEVBQUUsY0FBdUI7SUFDOUQsSUFBSSxVQUFVLEtBQUssUUFBUSxFQUFFO1FBQzNCLE9BQU8sUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztLQUN6QztTQUFNLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLE9BQU8sRUFBQyxDQUFlLENBQUM7S0FDbkQ7U0FBTSxJQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUU7UUFDL0IsT0FBTyxHQUFHLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxPQUFPLEVBQUMsQ0FBZSxDQUFDO0tBQ2xEO1NBQU0sSUFBSSxVQUFVLEtBQUssT0FBTyxFQUFFO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsT0FBTyxFQUFDLENBQWUsQ0FBQztLQUNwRDtTQUFNLElBQUksVUFBVSxLQUFLLE9BQU8sRUFBRTtRQUNqQyxPQUFPLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUMsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0tBQ3JFO1NBQU0sSUFBSSxVQUFVLEtBQUssV0FBVyxFQUFFO1FBQ3JDLE9BQU8sU0FBUyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUMsRUFBQyxDQUFDLENBQUM7S0FDMUU7U0FBTSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxPQUFPLEVBQUMsQ0FBZSxDQUFDO0tBQ3REO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDWCxjQUFjLFVBQVUsZ0RBQWdELENBQUMsQ0FBQztBQUNoRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge19GdXNlZE1hdE11bCwgX0Z1c2VkTWF0TXVsQXR0cnMsIF9GdXNlZE1hdE11bElucHV0cywgYmFja2VuZF91dGlsLCBUZW5zb3JJbmZvfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge01hdGhCYWNrZW5kQ1BVfSBmcm9tICcuLi9iYWNrZW5kX2NwdSc7XG5pbXBvcnQge2VsdX0gZnJvbSAnLi4va2VybmVscy9FbHUnO1xuaW1wb3J0IHtpZGVudGl0eX0gZnJvbSAnLi4va2VybmVscy9JZGVudGl0eSc7XG5pbXBvcnQge2xlYWt5UmVsdX0gZnJvbSAnLi4va2VybmVscy9MZWFreVJlbHUnO1xuaW1wb3J0IHtwcmVsdX0gZnJvbSAnLi4va2VybmVscy9QcmVsdSc7XG5pbXBvcnQge3JlbHV9IGZyb20gJy4uL2tlcm5lbHMvUmVsdSc7XG5pbXBvcnQge3JlbHU2fSBmcm9tICcuLi9rZXJuZWxzL1JlbHU2JztcbmltcG9ydCB7c2lnbW9pZH0gZnJvbSAnLi4va2VybmVscy9TaWdtb2lkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5QWN0aXZhdGlvbihcbiAgICBiYWNrZW5kOiBNYXRoQmFja2VuZENQVSwgeDogVGVuc29ySW5mbywgYWN0aXZhdGlvbjogYmFja2VuZF91dGlsLkFjdGl2YXRpb24sXG4gICAgcHJlbHVBY3RpdmF0aW9uV2VpZ2h0cz86IFRlbnNvckluZm8sIGxlYWt5cmVsdUFscGhhPzogbnVtYmVyKTogVGVuc29ySW5mbyB7XG4gIGlmIChhY3RpdmF0aW9uID09PSAnbGluZWFyJykge1xuICAgIHJldHVybiBpZGVudGl0eSh7aW5wdXRzOiB7eH0sIGJhY2tlbmR9KTtcbiAgfSBlbHNlIGlmIChhY3RpdmF0aW9uID09PSAncmVsdScpIHtcbiAgICByZXR1cm4gcmVsdSh7aW5wdXRzOiB7eH0sIGJhY2tlbmR9KSBhcyBUZW5zb3JJbmZvO1xuICB9IGVsc2UgaWYgKGFjdGl2YXRpb24gPT09ICdlbHUnKSB7XG4gICAgcmV0dXJuIGVsdSh7aW5wdXRzOiB7eH0sIGJhY2tlbmR9KSBhcyBUZW5zb3JJbmZvO1xuICB9IGVsc2UgaWYgKGFjdGl2YXRpb24gPT09ICdyZWx1NicpIHtcbiAgICByZXR1cm4gcmVsdTYoe2lucHV0czoge3h9LCBiYWNrZW5kfSkgYXMgVGVuc29ySW5mbztcbiAgfSBlbHNlIGlmIChhY3RpdmF0aW9uID09PSAncHJlbHUnKSB7XG4gICAgcmV0dXJuIHByZWx1KHtpbnB1dHM6IHt4LCBhbHBoYTogcHJlbHVBY3RpdmF0aW9uV2VpZ2h0c30sIGJhY2tlbmR9KTtcbiAgfSBlbHNlIGlmIChhY3RpdmF0aW9uID09PSAnbGVha3lyZWx1Jykge1xuICAgIHJldHVybiBsZWFreVJlbHUoe2lucHV0czoge3h9LCBiYWNrZW5kLCBhdHRyczoge2FscGhhOiBsZWFreXJlbHVBbHBoYX19KTtcbiAgfSBlbHNlIGlmIChhY3RpdmF0aW9uID09PSAnc2lnbW9pZCcpIHtcbiAgICByZXR1cm4gc2lnbW9pZCh7aW5wdXRzOiB7eH0sIGJhY2tlbmR9KSBhcyBUZW5zb3JJbmZvO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBBY3RpdmF0aW9uICR7YWN0aXZhdGlvbn0gaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgQ1BVIGJhY2tlbmQuYCk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/pool_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "maxPool3dPositions",
    ()=>maxPool3dPositions,
    "maxPoolPositions",
    ()=>maxPoolPositions,
    "pool",
    ()=>pool,
    "pool3d",
    ()=>pool3d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/buffer.js [app-client] (ecmascript)");
;
function pool(xValues, xShape, dtype, strides, convInfo, poolType) {
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const initialValue = poolType === 'max' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])(convInfo.outShape, dtype);
    const outputVals = output.values;
    const outputBatchStrides = convInfo.outShape[1] * convInfo.outShape[2] * convInfo.outShape[3];
    const outputRowStrides = convInfo.outShape[2] * convInfo.outShape[3];
    const outputColStrides = convInfo.outShape[3];
    for(let b = 0; b < convInfo.batchSize; ++b){
        const outputBatchOffset = b * outputBatchStrides;
        const inputBatchOffset = b * strides[0];
        for(let d = 0; d < convInfo.inChannels; ++d){
            for(let yR = 0; yR < convInfo.outHeight; ++yR){
                const xRCorner = yR * strideHeight - padTop;
                const xRMin = Math.max(0, xRCorner);
                const xRMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRCorner);
                const outputRowOffset = outputBatchOffset + yR * outputRowStrides;
                for(let yC = 0; yC < convInfo.outWidth; ++yC){
                    const xCCorner = yC * strideWidth - padLeft;
                    const xCMin = Math.max(0, xCCorner);
                    const xCMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xCCorner);
                    let minMaxValue = initialValue;
                    let avgValue = 0;
                    let count = 0;
                    for(let xR = xRMin; xR < xRMax; xR += dilationHeight){
                        const xROffset = inputBatchOffset + xR * strides[1];
                        for(let xC = xCMin; xC < xCMax; xC += dilationWidth){
                            const xCOffset = xROffset + xC * strides[2];
                            const pixel = xValues[xCOffset + d];
                            if (poolType === 'max' && pixel > minMaxValue) {
                                minMaxValue = pixel;
                            } else if (poolType === 'avg') {
                                avgValue += pixel;
                                count++;
                            }
                        }
                        if (isNaN(minMaxValue)) {
                            break;
                        }
                    }
                    const outputOffset = outputRowOffset + yC * outputColStrides + d;
                    outputVals[outputOffset] = poolType === 'avg' ? avgValue / count : minMaxValue;
                }
            }
        }
    }
    return output;
}
function maxPoolPositions(xValues, xShape, dtype, convInfo, flattenPositions = false, includeBatchInIndex = false) {
    const maxPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])(convInfo.outShape, 'int32');
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const xBuf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])(xShape, dtype, xValues);
    for(let b = 0; b < convInfo.batchSize; ++b){
        for(let d = 0; d < convInfo.inChannels; ++d){
            for(let yR = 0; yR < convInfo.outHeight; ++yR){
                const xRCorner = yR * strideHeight - padTop;
                let xRMin = xRCorner;
                while(xRMin < 0){
                    xRMin += dilationHeight;
                }
                // const xRMin = Math.max(0, xRCorner);
                const xRMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRCorner);
                for(let yC = 0; yC < convInfo.outWidth; ++yC){
                    const xCCorner = yC * strideWidth - padLeft;
                    let xCMin = xCCorner;
                    while(xCMin < 0){
                        xCMin += dilationWidth;
                    }
                    const xCMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xCCorner);
                    let maxValue = Number.NEGATIVE_INFINITY;
                    let maxPosition = -1;
                    for(let xR = xRMin; xR < xRMax; xR += dilationHeight){
                        const wR = xR - xRCorner;
                        for(let xC = xCMin; xC < xCMax; xC += dilationWidth){
                            const wC = xC - xCCorner;
                            // For some reason, disable-next-line is not working
                            // TODO(mattsoulanille): Remove this when switching to TS5.
                            /* tslint:disable: no-unnecessary-type-assertion */ const pixel = xBuf.get(b, xR, xC, d);
                            if (pixel > maxValue) {
                                maxValue = pixel;
                                if (flattenPositions) {
                                    maxPosition = includeBatchInIndex ? ((b * convInfo.inHeight + xR) * convInfo.inWidth + xC) * convInfo.inChannels + d : (xR * convInfo.inWidth + xC) * convInfo.inChannels + d;
                                } else {
                                    maxPosition = wR * effectiveFilterWidth + wC;
                                }
                            }
                        }
                    }
                    maxPositions.set(maxPosition, b, yR, yC, d);
                }
            }
        }
    }
    return maxPositions;
}
function pool3d(xValues, xShape, dtype, strides, convInfo, poolType) {
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    const initialValue = poolType === 'max' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])(convInfo.outShape, dtype);
    const outputVals = output.values;
    const outputBatchStrides = convInfo.outShape[1] * convInfo.outShape[2] * convInfo.outShape[3] * convInfo.outShape[4];
    const outputDepthStrides = convInfo.outShape[2] * convInfo.outShape[3] * convInfo.outShape[4];
    const outputRowStrides = convInfo.outShape[3] * convInfo.outShape[4];
    const outputColStrides = convInfo.outShape[4];
    for(let batch = 0; batch < convInfo.batchSize; ++batch){
        const outputBatchOffset = batch * outputBatchStrides;
        const inputBatchOffset = batch * strides[0];
        for(let channel = 0; channel < convInfo.inChannels; ++channel){
            for(let yDepth = 0; yDepth < convInfo.outDepth; ++yDepth){
                const xDepthCorner = yDepth * strideDepth - padFront;
                let xDepthMin = xDepthCorner;
                while(xDepthMin < 0){
                    xDepthMin += dilationDepth;
                }
                const xDepthMax = Math.min(convInfo.inDepth, effectiveFilterDepth + xDepthCorner);
                const outputDepthOffset = outputBatchOffset + yDepth * outputDepthStrides;
                for(let yRow = 0; yRow < convInfo.outHeight; ++yRow){
                    const xRowCorner = yRow * strideHeight - padTop;
                    let xRowMin = xRowCorner;
                    while(xRowMin < 0){
                        xRowMin += dilationHeight;
                    }
                    const xRowMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRowCorner);
                    const outputRowOffset = outputDepthOffset + yRow * outputRowStrides;
                    for(let yCol = 0; yCol < convInfo.outWidth; ++yCol){
                        const xColCorner = yCol * strideWidth - padLeft;
                        let xColMin = xColCorner;
                        while(xColMin < 0){
                            xColMin += dilationWidth;
                        }
                        const xColMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xColCorner);
                        // Shader code begins
                        const outputColOffset = outputRowOffset + yCol * outputColStrides;
                        let minMaxValue = initialValue;
                        let avgValue = 0;
                        let count = 0;
                        for(let xDepth = xDepthMin; xDepth < xDepthMax; xDepth += dilationDepth){
                            const xDepthOffset = inputBatchOffset + xDepth * strides[1];
                            for(let xRow = xRowMin; xRow < xRowMax; xRow += dilationHeight){
                                const xRowOffset = xDepthOffset + xRow * strides[2];
                                for(let xCol = xColMin; xCol < xColMax; xCol += dilationWidth){
                                    const xColOffset = xRowOffset + xCol * strides[3];
                                    const pixel = xValues[xColOffset + channel];
                                    if (poolType === 'max' && pixel > minMaxValue) {
                                        minMaxValue = pixel;
                                    } else if (poolType === 'avg') {
                                        avgValue += pixel;
                                        count++;
                                    }
                                    if (isNaN(minMaxValue)) {
                                        break;
                                    }
                                }
                                if (isNaN(minMaxValue)) {
                                    break;
                                }
                            }
                            if (isNaN(minMaxValue)) {
                                break;
                            }
                        }
                        const outputOffset = outputColOffset + channel;
                        outputVals[outputOffset] = poolType === 'avg' ? avgValue / Math.max(count, 1) : minMaxValue;
                    }
                }
            }
        }
    }
    return output;
}
function maxPool3dPositions(xBuf, convInfo) {
    const maxPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])(convInfo.outShape, 'int32');
    const strideDepth = convInfo.strideDepth;
    const strideHeight = convInfo.strideHeight;
    const strideWidth = convInfo.strideWidth;
    const dilationDepth = convInfo.dilationDepth;
    const dilationHeight = convInfo.dilationHeight;
    const dilationWidth = convInfo.dilationWidth;
    const effectiveFilterDepth = convInfo.effectiveFilterDepth;
    const effectiveFilterHeight = convInfo.effectiveFilterHeight;
    const effectiveFilterWidth = convInfo.effectiveFilterWidth;
    const padFront = convInfo.padInfo.front;
    const padTop = convInfo.padInfo.top;
    const padLeft = convInfo.padInfo.left;
    for(let batch = 0; batch < convInfo.batchSize; ++batch){
        for(let channel = 0; channel < convInfo.inChannels; ++channel){
            for(let yDepth = 0; yDepth < convInfo.outDepth; ++yDepth){
                const xDepthCorner = yDepth * strideDepth - padFront;
                let xDepthMin = xDepthCorner;
                while(xDepthMin < 0){
                    xDepthMin += dilationDepth;
                }
                const xDepthMax = Math.min(convInfo.inDepth, effectiveFilterDepth + xDepthCorner);
                for(let yRow = 0; yRow < convInfo.outHeight; ++yRow){
                    const xRowCorner = yRow * strideHeight - padTop;
                    let xRowMin = xRowCorner;
                    while(xRowMin < 0){
                        xRowMin += dilationHeight;
                    }
                    const xRowMax = Math.min(convInfo.inHeight, effectiveFilterHeight + xRowCorner);
                    for(let yCol = 0; yCol < convInfo.outWidth; ++yCol){
                        const xColCorner = yCol * strideWidth - padLeft;
                        let xColMin = xColCorner;
                        while(xColMin < 0){
                            xColMin += dilationWidth;
                        }
                        const xColMax = Math.min(convInfo.inWidth, effectiveFilterWidth + xColCorner);
                        // Shader code begins
                        let maxValue = Number.NEGATIVE_INFINITY;
                        let maxPosition = -1;
                        for(let xDepth = xDepthMin; xDepth < xDepthMax; xDepth += dilationDepth){
                            const wDepth = xDepth - xDepthCorner;
                            for(let xRow = xRowMin; xRow < xRowMax; xRow += dilationHeight){
                                const wRow = xRow - xRowCorner;
                                for(let xCol = xColMin; xCol < xColMax; xCol += dilationWidth){
                                    const wCol = xCol - xColCorner;
                                    const pixel = xBuf.get(batch, xDepth, xRow, xCol, channel);
                                    if (pixel >= maxValue) {
                                        maxValue = pixel;
                                        maxPosition = wDepth * effectiveFilterHeight * effectiveFilterWidth + wRow * effectiveFilterHeight + wCol;
                                    }
                                }
                            }
                        }
                        maxPositions.set(maxPosition, batch, yDepth, yRow, yCol, channel);
                    }
                }
            }
        }
    }
    return maxPositions;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9vbF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtYmFja2VuZC1jcHUvc3JjL3V0aWxzL3Bvb2xfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFlLE1BQU0sRUFBMkMsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRyxNQUFNLFVBQVUsSUFBSSxDQUNoQixPQUFtQixFQUFFLE1BQWdCLEVBQUUsS0FBZSxFQUFFLE9BQWlCLEVBQ3pFLFFBQWlDLEVBQ2pDLFFBQXFCO0lBQ3ZCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDM0MsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDO0lBQy9DLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDN0MsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMscUJBQXFCLENBQUM7SUFDN0QsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUM7SUFDM0QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDcEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFdEMsTUFBTSxZQUFZLEdBQ2QsQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUVwRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRWpDLE1BQU0sa0JBQWtC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b0JBQW9CO2dEQUNyRCxJQUFJLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDO3FDQUN6QztpQ0FDRjs2QkFDRjt5QkFDRjt3QkFFRCxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ25FO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtiYWNrZW5kX3V0aWwsIGJ1ZmZlciwgRGF0YVR5cGUsIFJhbmssIFRlbnNvckJ1ZmZlciwgVHlwZWRBcnJheX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBvb2woXG4gICAgeFZhbHVlczogVHlwZWRBcnJheSwgeFNoYXBlOiBudW1iZXJbXSwgZHR5cGU6IERhdGFUeXBlLCBzdHJpZGVzOiBudW1iZXJbXSxcbiAgICBjb252SW5mbzogYmFja2VuZF91dGlsLkNvbnYyREluZm8sXG4gICAgcG9vbFR5cGU6ICdtYXgnfCdhdmcnKTogVGVuc29yQnVmZmVyPFJhbmssIERhdGFUeXBlPiB7XG4gIGNvbnN0IHN0cmlkZUhlaWdodCA9IGNvbnZJbmZvLnN0cmlkZUhlaWdodDtcbiAgY29uc3Qgc3RyaWRlV2lkdGggPSBjb252SW5mby5zdHJpZGVXaWR0aDtcbiAgY29uc3QgZGlsYXRpb25IZWlnaHQgPSBjb252SW5mby5kaWxhdGlvbkhlaWdodDtcbiAgY29uc3QgZGlsYXRpb25XaWR0aCA9IGNvbnZJbmZvLmRpbGF0aW9uV2lkdGg7XG4gIGNvbnN0IGVmZmVjdGl2ZUZpbHRlckhlaWdodCA9IGNvbnZJbmZvLmVmZmVjdGl2ZUZpbHRlckhlaWdodDtcbiAgY29uc3QgZWZmZWN0aXZlRmlsdGVyV2lkdGggPSBjb252SW5mby5lZmZlY3RpdmVGaWx0ZXJXaWR0aDtcbiAgY29uc3QgcGFkVG9wID0gY29udkluZm8ucGFkSW5mby50b3A7XG4gIGNvbnN0IHBhZExlZnQgPSBjb252SW5mby5wYWRJbmZvLmxlZnQ7XG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlID1cbiAgICAgIChwb29sVHlwZSA9PT0gJ21heCcgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSk7XG5cbiAgY29uc3Qgb3V0cHV0ID0gYnVmZmVyKGNvbnZJbmZvLm91dFNoYXBlLCBkdHlwZSk7XG4gIGNvbnN0IG91dHB1dFZhbHMgPSBvdXRwdXQudmFsdWVzO1xuXG4gIGNvbnN0IG91dHB1dEJhdGNoU3RyaWRlcyA9XG4gICAgICBjb252SW5mby5vdXRTaGFwZVsxXSAqIGNvbnZJbmZvLm91dFNoYXBlWzJdICogY29udkluZm8ub3V0U2hhcGVbM107XG4gIGNvbnN0IG91dHB1dFJvd1N0cmlkZXMgPSBjb252SW5mby5vdXRTaGFwZVsyXSAqIGNvbnZJbmZvLm91dFNoYXBlWzNdO1xuICBjb25zdCBvdXRwdXRDb2xTdHJpZGVzID0gY29udkluZm8ub3V0U2hhcGVbM107XG5cbiAgZm9yIChsZXQgYiA9IDA7IGIgPCBjb252SW5mby5iYXRjaFNpemU7ICsrYikge1xuICAgIGNvbnN0IG91dHB1dEJhdGNoT2Zmc2V0ID0gYiAqIG91dHB1dEJhdGNoU3RyaWRlcztcbiAgICBjb25zdCBpbnB1dEJhdGNoT2Zmc2V0ID0gYiAqIHN0cmlkZXNbMF07XG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBjb252SW5mby5pbkNoYW5uZWxzOyArK2QpIHtcbiAgICAgIGZvciAobGV0IHlSID0gMDsgeVIgPCBjb252SW5mby5vdXRIZWlnaHQ7ICsreVIpIHtcbiAgICAgICAgY29uc3QgeFJDb3JuZXIgPSB5UiAqIHN0cmlkZUhlaWdodCAtIHBhZFRvcDtcbiAgICAgICAgY29uc3QgeFJNaW4gPSBNYXRoLm1heCgwLCB4UkNvcm5lcik7XG4gICAgICAgIGNvbnN0IHhSTWF4ID1cbiAgICAgICAgICAgIE1hdGgubWluKGNvbnZJbmZvLmluSGVpZ2h0LCBlZmZlY3RpdmVGaWx0ZXJIZWlnaHQgKyB4UkNvcm5lcik7XG4gICAgICAgIGNvbnN0IG91dHB1dFJvd09mZnNldCA9IG91dHB1dEJhdGNoT2Zmc2V0ICsgeVIgKiBvdXRwdXRSb3dTdHJpZGVzO1xuICAgICAgICBmb3IgKGxldCB5QyA9IDA7IHlDIDwgY29udkluZm8ub3V0V2lkdGg7ICsreUMpIHtcbiAgICAgICAgICBjb25zdCB4Q0Nvcm5lciA9IHlDICogc3RyaWRlV2lkdGggLSBwYWRMZWZ0O1xuICAgICAgICAgIGNvbnN0IHhDTWluID0gTWF0aC5tYXgoMCwgeENDb3JuZXIpO1xuICAgICAgICAgIGNvbnN0IHhDTWF4ID1cbiAgICAgICAgICAgICAgTWF0aC5taW4oY29udkluZm8uaW5XaWR0aCwgZWZmZWN0aXZlRmlsdGVyV2lkdGggKyB4Q0Nvcm5lcik7XG4gICAgICAgICAgbGV0IG1pbk1heFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgIGxldCBhdmdWYWx1ZSA9IDA7XG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCB4UiA9IHhSTWluOyB4UiA8IHhSTWF4OyB4UiArPSBkaWxhdGlvbkhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgeFJPZmZzZXQgPSBpbnB1dEJhdGNoT2Zmc2V0ICsgeFIgKiBzdHJpZGVzWzFdO1xuICAgICAgICAgICAgZm9yIChsZXQgeEMgPSB4Q01pbjsgeEMgPCB4Q01heDsgeEMgKz0gZGlsYXRpb25XaWR0aCkge1xuICAgICAgICAgICAgICBjb25zdCB4Q09mZnNldCA9IHhST2Zmc2V0ICsgeEMgKiBzdHJpZGVzWzJdO1xuICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHhWYWx1ZXNbeENPZmZzZXQgKyBkXTtcbiAgICAgICAgICAgICAgaWYgKChwb29sVHlwZSA9PT0gJ21heCcgJiYgcGl4ZWwgPiBtaW5NYXhWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBtaW5NYXhWYWx1ZSA9IHBpeGVsO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvb2xUeXBlID09PSAnYXZnJykge1xuICAgICAgICAgICAgICAgIGF2Z1ZhbHVlICs9IHBpeGVsO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc05hTihtaW5NYXhWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG91dHB1dE9mZnNldCA9IG91dHB1dFJvd09mZnNldCArIHlDICogb3V0cHV0Q29sU3RyaWRlcyArIGQ7XG4gICAgICAgICAgb3V0cHV0VmFsc1tvdXRwdXRPZmZzZXRdID1cbiAgICAgICAgICAgICAgcG9vbFR5cGUgPT09ICdhdmcnID8gYXZnVmFsdWUgLyBjb3VudCA6IG1pbk1heFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXhQb29sUG9zaXRpb25zKFxuICAgIHhWYWx1ZXM6IFR5cGVkQXJyYXksIHhTaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSxcbiAgICBjb252SW5mbzogYmFja2VuZF91dGlsLkNvbnYyREluZm8sIGZsYXR0ZW5Qb3NpdGlvbnMgPSBmYWxzZSxcbiAgICBpbmNsdWRlQmF0Y2hJbkluZGV4ID0gZmFsc2UpOiBUZW5zb3JCdWZmZXI8UmFuaywgJ2ludDMyJz4ge1xuICBjb25zdCBtYXhQb3NpdGlvbnMgPSBidWZmZXIoY29udkluZm8ub3V0U2hhcGUsICdpbnQzMicpO1xuICBjb25zdCBzdHJpZGVIZWlnaHQgPSBjb252SW5mby5zdHJpZGVIZWlnaHQ7XG4gIGNvbnN0IHN0cmlkZVdpZHRoID0gY29udkluZm8uc3RyaWRlV2lkdGg7XG4gIGNvbnN0IGRpbGF0aW9uSGVpZ2h0ID0gY29udkluZm8uZGlsYXRpb25IZWlnaHQ7XG4gIGNvbnN0IGRpbGF0aW9uV2lkdGggPSBjb252SW5mby5kaWxhdGlvbldpZHRoO1xuICBjb25zdCBlZmZlY3RpdmVGaWx0ZXJIZWlnaHQgPSBjb252SW5mby5lZmZlY3RpdmVGaWx0ZXJIZWlnaHQ7XG4gIGNvbnN0IGVmZmVjdGl2ZUZpbHRlcldpZHRoID0gY29udkluZm8uZWZmZWN0aXZlRmlsdGVyV2lkdGg7XG4gIGNvbnN0IHBhZFRvcCA9IGNvbnZJbmZvLnBhZEluZm8udG9wO1xuICBjb25zdCBwYWRMZWZ0ID0gY29udkluZm8ucGFkSW5mby5sZWZ0O1xuXG4gIGNvbnN0IHhCdWYgPSBidWZmZXIoeFNoYXBlLCBkdHlwZSwgeFZhbHVlcyk7XG4gIGZvciAobGV0IGIgPSAwOyBiIDwgY29udkluZm8uYmF0Y2hTaXplOyArK2IpIHtcbiAgICBmb3IgKGxldCBkID0gMDsgZCA8IGNvbnZJbmZvLmluQ2hhbm5lbHM7ICsrZCkge1xuICAgICAgZm9yIChsZXQgeVIgPSAwOyB5UiA8IGNvbnZJbmZvLm91dEhlaWdodDsgKyt5Uikge1xuICAgICAgICBjb25zdCB4UkNvcm5lciA9IHlSICogc3RyaWRlSGVpZ2h0IC0gcGFkVG9wO1xuICAgICAgICBsZXQgeFJNaW4gPSB4UkNvcm5lcjtcbiAgICAgICAgd2hpbGUgKHhSTWluIDwgMCkge1xuICAgICAgICAgIHhSTWluICs9IGRpbGF0aW9uSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHhSTWluID0gTWF0aC5tYXgoMCwgeFJDb3JuZXIpO1xuICAgICAgICBjb25zdCB4Uk1heCA9XG4gICAgICAgICAgICBNYXRoLm1pbihjb252SW5mby5pbkhlaWdodCwgZWZmZWN0aXZlRmlsdGVySGVpZ2h0ICsgeFJDb3JuZXIpO1xuICAgICAgICBmb3IgKGxldCB5QyA9IDA7IHlDIDwgY29udkluZm8ub3V0V2lkdGg7ICsreUMpIHtcbiAgICAgICAgICBjb25zdCB4Q0Nvcm5lciA9IHlDICogc3RyaWRlV2lkdGggLSBwYWRMZWZ0O1xuICAgICAgICAgIGxldCB4Q01pbiA9IHhDQ29ybmVyO1xuICAgICAgICAgIHdoaWxlICh4Q01pbiA8IDApIHtcbiAgICAgICAgICAgIHhDTWluICs9IGRpbGF0aW9uV2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHhDTWF4ID1cbiAgICAgICAgICAgICAgTWF0aC5taW4oY29udkluZm8uaW5XaWR0aCwgZWZmZWN0aXZlRmlsdGVyV2lkdGggKyB4Q0Nvcm5lcik7XG4gICAgICAgICAgbGV0IG1heFZhbHVlID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgICAgIGxldCBtYXhQb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgICAgZm9yIChsZXQgeFIgPSB4Uk1pbjsgeFIgPCB4Uk1heDsgeFIgKz0gZGlsYXRpb25IZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHdSID0geFIgLSB4UkNvcm5lcjtcbiAgICAgICAgICAgIGZvciAobGV0IHhDID0geENNaW47IHhDIDwgeENNYXg7IHhDICs9IGRpbGF0aW9uV2lkdGgpIHtcbiAgICAgICAgICAgICAgY29uc3Qgd0MgPSB4QyAtIHhDQ29ybmVyO1xuICAgICAgICAgICAgICAvLyBGb3Igc29tZSByZWFzb24sIGRpc2FibGUtbmV4dC1saW5lIGlzIG5vdCB3b3JraW5nXG4gICAgICAgICAgICAgIC8vIFRPRE8obWF0dHNvdWxhbmlsbGUpOiBSZW1vdmUgdGhpcyB3aGVuIHN3aXRjaGluZyB0byBUUzUuXG4gICAgICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlOiBuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvbiAqL1xuICAgICAgICAgICAgICBjb25zdCBwaXhlbCA9IHhCdWYuZ2V0KGIsIHhSLCB4QywgZCkgYXMgbnVtYmVyO1xuICAgICAgICAgICAgICBpZiAocGl4ZWwgPiBtYXhWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gcGl4ZWwgYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgIGlmIChmbGF0dGVuUG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICBtYXhQb3NpdGlvbiA9IGluY2x1ZGVCYXRjaEluSW5kZXggP1xuICAgICAgICAgICAgICAgICAgICAgICgoYiAqIGNvbnZJbmZvLmluSGVpZ2h0ICsgeFIpICogY29udkluZm8uaW5XaWR0aCArIHhDKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252SW5mby5pbkNoYW5uZWxzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZCA6XG4gICAgICAgICAgICAgICAgICAgICAgKHhSICogY29udkluZm8uaW5XaWR0aCArIHhDKSAqIGNvbnZJbmZvLmluQ2hhbm5lbHMgKyBkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtYXhQb3NpdGlvbiA9IHdSICogZWZmZWN0aXZlRmlsdGVyV2lkdGggKyB3QztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbWF4UG9zaXRpb25zLnNldChtYXhQb3NpdGlvbiwgYiwgeVIsIHlDLCBkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4UG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9vbDNkKFxuICAgIHhWYWx1ZXM6IFR5cGVkQXJyYXksIHhTaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSwgc3RyaWRlczogbnVtYmVyW10sXG4gICAgY29udkluZm86IGJhY2tlbmRfdXRpbC5Db252M0RJbmZvLFxuICAgIHBvb2xUeXBlOiAnbWF4J3wnYXZnJyk6IFRlbnNvckJ1ZmZlcjxSYW5rLCBEYXRhVHlwZT4ge1xuICBjb25zdCBzdHJpZGVEZXB0aCA9IGNvbnZJbmZvLnN0cmlkZURlcHRoO1xuICBjb25zdCBzdHJpZGVIZWlnaHQgPSBjb252SW5mby5zdHJpZGVIZWlnaHQ7XG4gIGNvbnN0IHN0cmlkZVdpZHRoID0gY29udkluZm8uc3RyaWRlV2lkdGg7XG4gIGNvbnN0IGRpbGF0aW9uRGVwdGggPSBjb252SW5mby5kaWxhdGlvbkRlcHRoO1xuICBjb25zdCBkaWxhdGlvbkhlaWdodCA9IGNvbnZJbmZvLmRpbGF0aW9uSGVpZ2h0O1xuICBjb25zdCBkaWxhdGlvbldpZHRoID0gY29udkluZm8uZGlsYXRpb25XaWR0aDtcbiAgY29uc3QgZWZmZWN0aXZlRmlsdGVyRGVwdGggPSBjb252SW5mby5lZmZlY3RpdmVGaWx0ZXJEZXB0aDtcbiAgY29uc3QgZWZmZWN0aXZlRmlsdGVySGVpZ2h0ID0gY29udkluZm8uZWZmZWN0aXZlRmlsdGVySGVpZ2h0O1xuICBjb25zdCBlZmZlY3RpdmVGaWx0ZXJXaWR0aCA9IGNvbnZJbmZvLmVmZmVjdGl2ZUZpbHRlcldpZHRoO1xuICBjb25zdCBwYWRGcm9udCA9IGNvbnZJbmZvLnBhZEluZm8uZnJvbnQ7XG4gIGNvbnN0IHBhZFRvcCA9IGNvbnZJbmZvLnBhZEluZm8udG9wO1xuICBjb25zdCBwYWRMZWZ0ID0gY29udkluZm8ucGFkSW5mby5sZWZ0O1xuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZSA9XG4gICAgICAocG9vbFR5cGUgPT09ICdtYXgnID8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpO1xuXG4gIGNvbnN0IG91dHB1dCA9IGJ1ZmZlcihjb252SW5mby5vdXRTaGFwZSwgZHR5cGUpO1xuICBjb25zdCBvdXRwdXRWYWxzID0gb3V0cHV0LnZhbHVlcztcblxuICBjb25zdCBvdXRwdXRCYXRjaFN0cmlkZXMgPSBjb252SW5mby5vdXRTaGFwZVsxXSAqIGNvbnZJbmZvLm91dFNoYXBlWzJdICpcbiAgICAgIGNvbnZJbmZvLm91dFNoYXBlWzNdICogY29udkluZm8ub3V0U2hhcGVbNF07XG4gIGNvbnN0IG91dHB1dERlcHRoU3RyaWRlcyA9XG4gICAgICBjb252SW5mby5vdXRTaGFwZVsyXSAqIGNvbnZJbmZvLm91dFNoYXBlWzNdICogY29udkluZm8ub3V0U2hhcGVbNF07XG4gIGNvbnN0IG91dHB1dFJvd1N0cmlkZXMgPSBjb252SW5mby5vdXRTaGFwZVszXSAqIGNvbnZJbmZvLm91dFNoYXBlWzRdO1xuICBjb25zdCBvdXRwdXRDb2xTdHJpZGVzID0gY29udkluZm8ub3V0U2hhcGVbNF07XG5cbiAgZm9yIChsZXQgYmF0Y2ggPSAwOyBiYXRjaCA8IGNvbnZJbmZvLmJhdGNoU2l6ZTsgKytiYXRjaCkge1xuICAgIGNvbnN0IG91dHB1dEJhdGNoT2Zmc2V0ID0gYmF0Y2ggKiBvdXRwdXRCYXRjaFN0cmlkZXM7XG4gICAgY29uc3QgaW5wdXRCYXRjaE9mZnNldCA9IGJhdGNoICogc3RyaWRlc1swXTtcbiAgICBmb3IgKGxldCBjaGFubmVsID0gMDsgY2hhbm5lbCA8IGNvbnZJbmZvLmluQ2hhbm5lbHM7ICsrY2hhbm5lbCkge1xuICAgICAgZm9yIChsZXQgeURlcHRoID0gMDsgeURlcHRoIDwgY29udkluZm8ub3V0RGVwdGg7ICsreURlcHRoKSB7XG4gICAgICAgIGNvbnN0IHhEZXB0aENvcm5lciA9IHlEZXB0aCAqIHN0cmlkZURlcHRoIC0gcGFkRnJvbnQ7XG4gICAgICAgIGxldCB4RGVwdGhNaW4gPSB4RGVwdGhDb3JuZXI7XG4gICAgICAgIHdoaWxlICh4RGVwdGhNaW4gPCAwKSB7XG4gICAgICAgICAgeERlcHRoTWluICs9IGRpbGF0aW9uRGVwdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeERlcHRoTWF4ID1cbiAgICAgICAgICAgIE1hdGgubWluKGNvbnZJbmZvLmluRGVwdGgsIGVmZmVjdGl2ZUZpbHRlckRlcHRoICsgeERlcHRoQ29ybmVyKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0RGVwdGhPZmZzZXQgPVxuICAgICAgICAgICAgb3V0cHV0QmF0Y2hPZmZzZXQgKyB5RGVwdGggKiBvdXRwdXREZXB0aFN0cmlkZXM7XG4gICAgICAgIGZvciAobGV0IHlSb3cgPSAwOyB5Um93IDwgY29udkluZm8ub3V0SGVpZ2h0OyArK3lSb3cpIHtcbiAgICAgICAgICBjb25zdCB4Um93Q29ybmVyID0geVJvdyAqIHN0cmlkZUhlaWdodCAtIHBhZFRvcDtcbiAgICAgICAgICBsZXQgeFJvd01pbiA9IHhSb3dDb3JuZXI7XG4gICAgICAgICAgd2hpbGUgKHhSb3dNaW4gPCAwKSB7XG4gICAgICAgICAgICB4Um93TWluICs9IGRpbGF0aW9uSGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB4Um93TWF4ID1cbiAgICAgICAgICAgICAgTWF0aC5taW4oY29udkluZm8uaW5IZWlnaHQsIGVmZmVjdGl2ZUZpbHRlckhlaWdodCArIHhSb3dDb3JuZXIpO1xuICAgICAgICAgIGNvbnN0IG91dHB1dFJvd09mZnNldCA9IG91dHB1dERlcHRoT2Zmc2V0ICsgeVJvdyAqIG91dHB1dFJvd1N0cmlkZXM7XG4gICAgICAgICAgZm9yIChsZXQgeUNvbCA9IDA7IHlDb2wgPCBjb252SW5mby5vdXRXaWR0aDsgKyt5Q29sKSB7XG4gICAgICAgICAgICBjb25zdCB4Q29sQ29ybmVyID0geUNvbCAqIHN0cmlkZVdpZHRoIC0gcGFkTGVmdDtcbiAgICAgICAgICAgIGxldCB4Q29sTWluID0geENvbENvcm5lcjtcbiAgICAgICAgICAgIHdoaWxlICh4Q29sTWluIDwgMCkge1xuICAgICAgICAgICAgICB4Q29sTWluICs9IGRpbGF0aW9uV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB4Q29sTWF4ID1cbiAgICAgICAgICAgICAgICBNYXRoLm1pbihjb252SW5mby5pbldpZHRoLCBlZmZlY3RpdmVGaWx0ZXJXaWR0aCArIHhDb2xDb3JuZXIpO1xuICAgICAgICAgICAgLy8gU2hhZGVyIGNvZGUgYmVnaW5zXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRDb2xPZmZzZXQgPSBvdXRwdXRSb3dPZmZzZXQgKyB5Q29sICogb3V0cHV0Q29sU3RyaWRlcztcbiAgICAgICAgICAgIGxldCBtaW5NYXhWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgIGxldCBhdmdWYWx1ZSA9IDA7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgeERlcHRoID0geERlcHRoTWluOyB4RGVwdGggPCB4RGVwdGhNYXg7XG4gICAgICAgICAgICAgICAgIHhEZXB0aCArPSBkaWxhdGlvbkRlcHRoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHhEZXB0aE9mZnNldCA9IGlucHV0QmF0Y2hPZmZzZXQgKyB4RGVwdGggKiBzdHJpZGVzWzFdO1xuICAgICAgICAgICAgICBmb3IgKGxldCB4Um93ID0geFJvd01pbjsgeFJvdyA8IHhSb3dNYXg7IHhSb3cgKz0gZGlsYXRpb25IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4Um93T2Zmc2V0ID0geERlcHRoT2Zmc2V0ICsgeFJvdyAqIHN0cmlkZXNbMl07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeENvbCA9IHhDb2xNaW47IHhDb2wgPCB4Q29sTWF4O1xuICAgICAgICAgICAgICAgICAgICAgeENvbCArPSBkaWxhdGlvbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB4Q29sT2Zmc2V0ID0geFJvd09mZnNldCArIHhDb2wgKiBzdHJpZGVzWzNdO1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWwgPSB4VmFsdWVzW3hDb2xPZmZzZXQgKyBjaGFubmVsXTtcbiAgICAgICAgICAgICAgICAgIGlmICgocG9vbFR5cGUgPT09ICdtYXgnICYmIHBpeGVsID4gbWluTWF4VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbk1heFZhbHVlID0gcGl4ZWw7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvb2xUeXBlID09PSAnYXZnJykge1xuICAgICAgICAgICAgICAgICAgICBhdmdWYWx1ZSArPSBwaXhlbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChpc05hTihtaW5NYXhWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc05hTihtaW5NYXhWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaXNOYU4obWluTWF4VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG91dHB1dE9mZnNldCA9IG91dHB1dENvbE9mZnNldCArIGNoYW5uZWw7XG4gICAgICAgICAgICBvdXRwdXRWYWxzW291dHB1dE9mZnNldF0gPSBwb29sVHlwZSA9PT0gJ2F2ZycgP1xuICAgICAgICAgICAgICAgIGF2Z1ZhbHVlIC8gTWF0aC5tYXgoY291bnQsIDEpIDpcbiAgICAgICAgICAgICAgICBtaW5NYXhWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF4UG9vbDNkUG9zaXRpb25zKFxuICAgIHhCdWY6IFRlbnNvckJ1ZmZlcjxSYW5rLCBEYXRhVHlwZT4sXG4gICAgY29udkluZm86IGJhY2tlbmRfdXRpbC5Db252M0RJbmZvKTogVGVuc29yQnVmZmVyPFJhbmssIERhdGFUeXBlPiB7XG4gIGNvbnN0IG1heFBvc2l0aW9ucyA9IGJ1ZmZlcihjb252SW5mby5vdXRTaGFwZSwgJ2ludDMyJyk7XG4gIGNvbnN0IHN0cmlkZURlcHRoID0gY29udkluZm8uc3RyaWRlRGVwdGg7XG4gIGNvbnN0IHN0cmlkZUhlaWdodCA9IGNvbnZJbmZvLnN0cmlkZUhlaWdodDtcbiAgY29uc3Qgc3RyaWRlV2lkdGggPSBjb252SW5mby5zdHJpZGVXaWR0aDtcbiAgY29uc3QgZGlsYXRpb25EZXB0aCA9IGNvbnZJbmZvLmRpbGF0aW9uRGVwdGg7XG4gIGNvbnN0IGRpbGF0aW9uSGVpZ2h0ID0gY29udkluZm8uZGlsYXRpb25IZWlnaHQ7XG4gIGNvbnN0IGRpbGF0aW9uV2lkdGggPSBjb252SW5mby5kaWxhdGlvbldpZHRoO1xuICBjb25zdCBlZmZlY3RpdmVGaWx0ZXJEZXB0aCA9IGNvbnZJbmZvLmVmZmVjdGl2ZUZpbHRlckRlcHRoO1xuICBjb25zdCBlZmZlY3RpdmVGaWx0ZXJIZWlnaHQgPSBjb252SW5mby5lZmZlY3RpdmVGaWx0ZXJIZWlnaHQ7XG4gIGNvbnN0IGVmZmVjdGl2ZUZpbHRlcldpZHRoID0gY29udkluZm8uZWZmZWN0aXZlRmlsdGVyV2lkdGg7XG4gIGNvbnN0IHBhZEZyb250ID0gY29udkluZm8ucGFkSW5mby5mcm9udDtcbiAgY29uc3QgcGFkVG9wID0gY29udkluZm8ucGFkSW5mby50b3A7XG4gIGNvbnN0IHBhZExlZnQgPSBjb252SW5mby5wYWRJbmZvLmxlZnQ7XG5cbiAgZm9yIChsZXQgYmF0Y2ggPSAwOyBiYXRjaCA8IGNvbnZJbmZvLmJhdGNoU2l6ZTsgKytiYXRjaCkge1xuICAgIGZvciAobGV0IGNoYW5uZWwgPSAwOyBjaGFubmVsIDwgY29udkluZm8uaW5DaGFubmVsczsgKytjaGFubmVsKSB7XG4gICAgICBmb3IgKGxldCB5RGVwdGggPSAwOyB5RGVwdGggPCBjb252SW5mby5vdXREZXB0aDsgKyt5RGVwdGgpIHtcbiAgICAgICAgY29uc3QgeERlcHRoQ29ybmVyID0geURlcHRoICogc3RyaWRlRGVwdGggLSBwYWRGcm9udDtcbiAgICAgICAgbGV0IHhEZXB0aE1pbiA9IHhEZXB0aENvcm5lcjtcbiAgICAgICAgd2hpbGUgKHhEZXB0aE1pbiA8IDApIHtcbiAgICAgICAgICB4RGVwdGhNaW4gKz0gZGlsYXRpb25EZXB0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB4RGVwdGhNYXggPVxuICAgICAgICAgICAgTWF0aC5taW4oY29udkluZm8uaW5EZXB0aCwgZWZmZWN0aXZlRmlsdGVyRGVwdGggKyB4RGVwdGhDb3JuZXIpO1xuICAgICAgICBmb3IgKGxldCB5Um93ID0gMDsgeVJvdyA8IGNvbnZJbmZvLm91dEhlaWdodDsgKyt5Um93KSB7XG4gICAgICAgICAgY29uc3QgeFJvd0Nvcm5lciA9IHlSb3cgKiBzdHJpZGVIZWlnaHQgLSBwYWRUb3A7XG4gICAgICAgICAgbGV0IHhSb3dNaW4gPSB4Um93Q29ybmVyO1xuICAgICAgICAgIHdoaWxlICh4Um93TWluIDwgMCkge1xuICAgICAgICAgICAgeFJvd01pbiArPSBkaWxhdGlvbkhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgeFJvd01heCA9XG4gICAgICAgICAgICAgIE1hdGgubWluKGNvbnZJbmZvLmluSGVpZ2h0LCBlZmZlY3RpdmVGaWx0ZXJIZWlnaHQgKyB4Um93Q29ybmVyKTtcbiAgICAgICAgICBmb3IgKGxldCB5Q29sID0gMDsgeUNvbCA8IGNvbnZJbmZvLm91dFdpZHRoOyArK3lDb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHhDb2xDb3JuZXIgPSB5Q29sICogc3RyaWRlV2lkdGggLSBwYWRMZWZ0O1xuICAgICAgICAgICAgbGV0IHhDb2xNaW4gPSB4Q29sQ29ybmVyO1xuICAgICAgICAgICAgd2hpbGUgKHhDb2xNaW4gPCAwKSB7XG4gICAgICAgICAgICAgIHhDb2xNaW4gKz0gZGlsYXRpb25XaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHhDb2xNYXggPVxuICAgICAgICAgICAgICAgIE1hdGgubWluKGNvbnZJbmZvLmluV2lkdGgsIGVmZmVjdGl2ZUZpbHRlcldpZHRoICsgeENvbENvcm5lcik7XG5cbiAgICAgICAgICAgIC8vIFNoYWRlciBjb2RlIGJlZ2luc1xuICAgICAgICAgICAgbGV0IG1heFZhbHVlID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgICAgICAgICAgbGV0IG1heFBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHhEZXB0aCA9IHhEZXB0aE1pbjsgeERlcHRoIDwgeERlcHRoTWF4O1xuICAgICAgICAgICAgICAgICB4RGVwdGggKz0gZGlsYXRpb25EZXB0aCkge1xuICAgICAgICAgICAgICBjb25zdCB3RGVwdGggPSB4RGVwdGggLSB4RGVwdGhDb3JuZXI7XG4gICAgICAgICAgICAgIGZvciAobGV0IHhSb3cgPSB4Um93TWluOyB4Um93IDwgeFJvd01heDsgeFJvdyArPSBkaWxhdGlvbkhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdSb3cgPSB4Um93IC0geFJvd0Nvcm5lcjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4Q29sID0geENvbE1pbjsgeENvbCA8IHhDb2xNYXg7XG4gICAgICAgICAgICAgICAgICAgICB4Q29sICs9IGRpbGF0aW9uV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHdDb2wgPSB4Q29sIC0geENvbENvcm5lcjtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsID0geEJ1Zi5nZXQoYmF0Y2gsIHhEZXB0aCwgeFJvdywgeENvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbCkgYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgaWYgKHBpeGVsID49IG1heFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFZhbHVlID0gcGl4ZWwgYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBtYXhQb3NpdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICB3RGVwdGggKiBlZmZlY3RpdmVGaWx0ZXJIZWlnaHQgKiBlZmZlY3RpdmVGaWx0ZXJXaWR0aCArXG4gICAgICAgICAgICAgICAgICAgICAgICB3Um93ICogZWZmZWN0aXZlRmlsdGVySGVpZ2h0ICsgd0NvbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF4UG9zaXRpb25zLnNldChtYXhQb3NpdGlvbiwgYmF0Y2gsIHlEZXB0aCwgeVJvdywgeUNvbCwgY2hhbm5lbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heFBvc2l0aW9ucztcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/utils/fft_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ __turbopack_context__.s([
    "fftBatch",
    ()=>fftBatch,
    "fftImpl",
    ()=>fftImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <export * as backend_util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Imag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Imag.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Multiply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Real$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RealDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/RealDiv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js [app-client] (ecmascript)");
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
function fftBatch(input, inverse, cpuBackend) {
    const inputShape = input.shape;
    const batch = inputShape[0];
    const innerDim = inputShape[1];
    const inputVals = cpuBackend.data.get(input.dataId);
    const real2D = inputVals.complexTensorInfos.real;
    const imag2D = inputVals.complexTensorInfos.imag;
    // Collects real and imaginary values separately.
    const resultShape = [
        batch,
        innerDim
    ];
    const resultSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(resultShape);
    const resultReal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].getTypedArrayFromDType('float32', resultSize);
    const resultImag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].getTypedArrayFromDType('float32', resultSize);
    for(let b = 0; b < batch; b++){
        // TODO: Support slice ops for complex type.
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])({
            inputs: {
                x: real2D
            },
            backend: cpuBackend,
            attrs: {
                begin: [
                    b,
                    0
                ],
                size: [
                    1,
                    innerDim
                ]
            }
        });
        const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])({
            inputs: {
                x: imag2D
            },
            backend: cpuBackend,
            attrs: {
                begin: [
                    b,
                    0
                ],
                size: [
                    1,
                    innerDim
                ]
            }
        });
        const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
            inputs: {
                real: r,
                imag: i
            },
            backend: cpuBackend
        });
        // Run FFT by batch element.
        const { real, imag } = fftImpl(input, inverse, cpuBackend);
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].mergeRealAndImagArrays(real, imag);
        for(let d = 0; d < innerDim; d++){
            const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].getComplexWithIndex(res, d);
            resultReal[b * innerDim + d] = c.real;
            resultImag[b * innerDim + d] = c.imag;
        }
        cpuBackend.disposeIntermediateTensorInfo(r);
        cpuBackend.disposeIntermediateTensorInfo(i);
        cpuBackend.disposeIntermediateTensorInfo(input);
    }
    const $realInfo = cpuBackend.makeTensorInfo(resultShape, 'float32', resultReal);
    const $imagInfo = cpuBackend.makeTensorInfo(resultShape, 'float32', resultImag);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
        inputs: {
            real: $realInfo,
            imag: $imagInfo
        },
        backend: cpuBackend
    });
    cpuBackend.disposeIntermediateTensorInfo($realInfo);
    cpuBackend.disposeIntermediateTensorInfo($imagInfo);
    return result;
}
function fftImpl(input, inverse, cpuBackend) {
    const inputSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(input.shape);
    const inputVals = cpuBackend.data.get(input.dataId);
    const realVals = cpuBackend.data.get(inputVals.complexTensorInfos.real.dataId).values;
    const imagVals = cpuBackend.data.get(inputVals.complexTensorInfos.imag.dataId).values;
    if (isExponentOf2(inputSize)) {
        const result = fftRadix2(realVals, imagVals, inputSize, inverse, cpuBackend);
        const resultShape = [
            input.shape[0],
            input.shape[1]
        ];
        if (inverse) {
            const realInfo = cpuBackend.makeTensorInfo(resultShape, 'float32', result.real);
            const imagInfo = cpuBackend.makeTensorInfo(resultShape, 'float32', result.imag);
            const sizeInfo = cpuBackend.makeTensorInfo([], 'float32', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].createScalarValue(inputSize, 'float32'));
            const sizeInfoCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"])({
                inputs: {
                    x: sizeInfo
                },
                backend: cpuBackend
            });
            const divRealInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RealDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["realDivConfig"].kernelFunc({
                inputs: {
                    a: realInfo,
                    b: sizeInfo
                },
                backend: cpuBackend
            });
            const divImagInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$RealDiv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["realDivConfig"].kernelFunc({
                inputs: {
                    a: imagInfo,
                    b: sizeInfoCopy
                },
                backend: cpuBackend
            });
            const divRealVals = cpuBackend.data.get(divRealInfo.dataId).values;
            const divImagVals = cpuBackend.data.get(divImagInfo.dataId).values;
            cpuBackend.disposeIntermediateTensorInfo(realInfo);
            cpuBackend.disposeIntermediateTensorInfo(imagInfo);
            cpuBackend.disposeIntermediateTensorInfo(sizeInfo);
            cpuBackend.disposeIntermediateTensorInfo(sizeInfoCopy);
            cpuBackend.disposeIntermediateTensorInfo(divRealInfo);
            cpuBackend.disposeIntermediateTensorInfo(divImagInfo);
            return {
                real: divRealVals,
                imag: divImagVals
            };
        }
        return result;
    } else {
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].mergeRealAndImagArrays(realVals, imagVals);
        const rawOutput = fourierTransformByMatmul(data, inputSize, inverse);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].splitRealAndImagArrays(rawOutput);
    }
}
function isExponentOf2(size) {
    return (size & size - 1) === 0;
}
// FFT using Cooley-Tukey algorithm on radix 2 dimensional input.
function fftRadix2(realVals, imagVals, size, inverse, cpuBackend) {
    if (size === 1) {
        return {
            real: realVals,
            imag: imagVals
        };
    }
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].mergeRealAndImagArrays(realVals, imagVals);
    const half = size / 2;
    const evenComplex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].complexWithEvenIndex(data);
    const evenRealVals = evenComplex.real;
    const evenImagVals = evenComplex.imag;
    const evenShape = [
        evenRealVals.length
    ];
    const evenRealInfo = cpuBackend.makeTensorInfo(evenShape, 'float32', evenRealVals);
    const evenImagInfo = cpuBackend.makeTensorInfo(evenShape, 'float32', evenImagVals);
    const evenTensorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
        inputs: {
            real: evenRealInfo,
            imag: evenImagInfo
        },
        backend: cpuBackend
    });
    const oddComplex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].complexWithOddIndex(data);
    const oddRealVals = oddComplex.real;
    const oddImagVals = oddComplex.imag;
    const oddShape = [
        oddRealVals.length
    ];
    const oddRealInfo = cpuBackend.makeTensorInfo(oddShape, 'float32', oddRealVals);
    const oddImagInfo = cpuBackend.makeTensorInfo(oddShape, 'float32', oddImagVals);
    const oddTensorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
        inputs: {
            real: oddRealInfo,
            imag: oddImagInfo
        },
        backend: cpuBackend
    });
    // Recursive call for half part of original input.
    const $evenComplex = fftRadix2(evenRealVals, evenImagVals, half, inverse, cpuBackend);
    const $evenRealVals = $evenComplex.real;
    const $evenImagVals = $evenComplex.imag;
    const $evenShape = [
        $evenRealVals.length
    ];
    const $evenRealInfo = cpuBackend.makeTensorInfo($evenShape, 'float32', $evenRealVals);
    const $evenImagInfo = cpuBackend.makeTensorInfo($evenShape, 'float32', $evenImagVals);
    const $evenTensorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
        inputs: {
            real: $evenRealInfo,
            imag: $evenImagInfo
        },
        backend: cpuBackend
    });
    const $oddComplex = fftRadix2(oddRealVals, oddImagVals, half, inverse, cpuBackend);
    const $oddRealVals = $oddComplex.real;
    const $oddImagVals = $oddComplex.imag;
    const $oddShape = [
        $oddRealVals.length
    ];
    const $oddRealInfo = cpuBackend.makeTensorInfo($oddShape, 'float32', $oddRealVals);
    const $oddImagInfo = cpuBackend.makeTensorInfo($oddShape, 'float32', $oddImagVals);
    const $oddTensorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
        inputs: {
            real: $oddRealInfo,
            imag: $oddImagInfo
        },
        backend: cpuBackend
    });
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].exponents(size, inverse);
    const eShape = [
        e.real.length
    ];
    const eRealInfo = cpuBackend.makeTensorInfo(eShape, 'float32', e.real);
    const eImagInfo = cpuBackend.makeTensorInfo(eShape, 'float32', e.imag);
    const complexInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Complex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complex"])({
        inputs: {
            real: eRealInfo,
            imag: eImagInfo
        },
        backend: cpuBackend
    });
    const exponentInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Multiply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiply"])({
        inputs: {
            a: complexInfo,
            b: $oddTensorInfo
        },
        backend: cpuBackend
    });
    const addPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])({
        inputs: {
            a: $evenTensorInfo,
            b: exponentInfo
        },
        backend: cpuBackend
    });
    const subPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"])({
        inputs: {
            a: $evenTensorInfo,
            b: exponentInfo
        },
        backend: cpuBackend
    });
    const addPartReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Real$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["real"])({
        inputs: {
            input: addPart
        },
        backend: cpuBackend
    });
    const subPartReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Real$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["real"])({
        inputs: {
            input: subPart
        },
        backend: cpuBackend
    });
    const addPartImag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Imag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imag"])({
        inputs: {
            input: addPart
        },
        backend: cpuBackend
    });
    const subPartImag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Imag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imag"])({
        inputs: {
            input: subPart
        },
        backend: cpuBackend
    });
    const $real = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])({
        inputs: [
            addPartReal,
            subPartReal
        ],
        backend: cpuBackend,
        attrs: {
            axis: 0
        }
    });
    const $imag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$backend$2d$cpu$2f$dist$2f$kernels$2f$Concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])({
        inputs: [
            addPartImag,
            subPartImag
        ],
        backend: cpuBackend,
        attrs: {
            axis: 0
        }
    });
    const $realVals = cpuBackend.data.get($real.dataId).values;
    const $imagVals = cpuBackend.data.get($imag.dataId).values;
    cpuBackend.disposeIntermediateTensorInfo(evenRealInfo);
    cpuBackend.disposeIntermediateTensorInfo(evenImagInfo);
    cpuBackend.disposeIntermediateTensorInfo(evenTensorInfo);
    cpuBackend.disposeIntermediateTensorInfo(oddRealInfo);
    cpuBackend.disposeIntermediateTensorInfo(oddImagInfo);
    cpuBackend.disposeIntermediateTensorInfo(oddTensorInfo);
    cpuBackend.disposeIntermediateTensorInfo($evenRealInfo);
    cpuBackend.disposeIntermediateTensorInfo($evenImagInfo);
    cpuBackend.disposeIntermediateTensorInfo($evenTensorInfo);
    cpuBackend.disposeIntermediateTensorInfo($oddRealInfo);
    cpuBackend.disposeIntermediateTensorInfo($oddImagInfo);
    cpuBackend.disposeIntermediateTensorInfo($oddTensorInfo);
    cpuBackend.disposeIntermediateTensorInfo(eRealInfo);
    cpuBackend.disposeIntermediateTensorInfo(eImagInfo);
    cpuBackend.disposeIntermediateTensorInfo(complexInfo);
    cpuBackend.disposeIntermediateTensorInfo(exponentInfo);
    cpuBackend.disposeIntermediateTensorInfo(addPart);
    cpuBackend.disposeIntermediateTensorInfo(subPart);
    cpuBackend.disposeIntermediateTensorInfo(addPartReal);
    cpuBackend.disposeIntermediateTensorInfo(addPartImag);
    cpuBackend.disposeIntermediateTensorInfo(subPartReal);
    cpuBackend.disposeIntermediateTensorInfo(subPartImag);
    cpuBackend.disposeIntermediateTensorInfo($real);
    cpuBackend.disposeIntermediateTensorInfo($imag);
    return {
        real: $realVals,
        imag: $imagVals
    };
}
// Calculate fourier transform by multplying sinusoid matrix.
function fourierTransformByMatmul(data, size, inverse) {
    const ret = new Float32Array(size * 2);
    // TODO: Use matmul instead once it supports complex64 type.
    for(let r = 0; r < size; r++){
        let real = 0.0;
        let imag = 0.0;
        for(let c = 0; c < size; c++){
            const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].exponent(r * c, size, inverse);
            const term = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].getComplexWithIndex(data, c);
            real += term.real * e.real - term.imag * e.imag;
            imag += term.real * e.imag + term.imag * e.real;
        }
        if (inverse) {
            real /= size;
            imag /= size;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__backend_util$3e$__["backend_util"].assignToTypedArray(ret, real, imag, r);
    }
    return ret;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmZ0X3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1iYWNrZW5kLWNwdS9zcmMvdXRpbHMvZmZ0X3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQWtDLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR3pGLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQzs7R0FFRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQ3BCLEtBQWlCLEVBQUUsT0FBZ0IsRUFDbkMsVUFBMEI7SUFDNUIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMvQixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9CLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxD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SUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ2IsSUFBSSxJQUFJLElBQUksQ0FBQztTQUNkO1FBQ0QsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2JhY2tlbmRfdXRpbCwgVGVuc29yLCBUZW5zb3JJbmZvLCBUeXBlZEFycmF5LCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge01hdGhCYWNrZW5kQ1BVfSBmcm9tICcuLi9iYWNrZW5kX2NwdSc7XG5pbXBvcnQge2FkZH0gZnJvbSAnLi4va2VybmVscy9BZGQnO1xuaW1wb3J0IHtjb21wbGV4fSBmcm9tICcuLi9rZXJuZWxzL0NvbXBsZXgnO1xuaW1wb3J0IHtjb25jYXR9IGZyb20gJy4uL2tlcm5lbHMvQ29uY2F0JztcbmltcG9ydCB7aWRlbnRpdHl9IGZyb20gJy4uL2tlcm5lbHMvSWRlbnRpdHknO1xuaW1wb3J0IHtpbWFnfSBmcm9tICcuLi9rZXJuZWxzL0ltYWcnO1xuaW1wb3J0IHttdWx0aXBseX0gZnJvbSAnLi4va2VybmVscy9NdWx0aXBseSc7XG5pbXBvcnQge3JlYWx9IGZyb20gJy4uL2tlcm5lbHMvUmVhbCc7XG5pbXBvcnQge3JlYWxEaXZDb25maWd9IGZyb20gJy4uL2tlcm5lbHMvUmVhbERpdic7XG5pbXBvcnQge3NsaWNlfSBmcm9tICcuLi9rZXJuZWxzL1NsaWNlJztcbmltcG9ydCB7c3VifSBmcm9tICcuLi9rZXJuZWxzL1N1Yic7XG5cbi8qKlxuICogQ2FsY3VsYXRlIEZGVCBvZiBpbm5lciBtb3N0IGVsZW1lbnRzIG9mIGJhdGNoIHRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZmdEJhdGNoKFxuICAgIGlucHV0OiBUZW5zb3JJbmZvLCBpbnZlcnNlOiBib29sZWFuLFxuICAgIGNwdUJhY2tlbmQ6IE1hdGhCYWNrZW5kQ1BVKTogVGVuc29ySW5mbyB7XG4gIGNvbnN0IGlucHV0U2hhcGUgPSBpbnB1dC5zaGFwZTtcbiAgY29uc3QgYmF0Y2ggPSBpbnB1dFNoYXBlWzBdO1xuICBjb25zdCBpbm5lckRpbSA9IGlucHV0U2hhcGVbMV07XG5cbiAgY29uc3QgaW5wdXRWYWxzID0gY3B1QmFja2VuZC5kYXRhLmdldChpbnB1dC5kYXRhSWQpO1xuXG4gIGNvbnN0IHJlYWwyRCA9IGlucHV0VmFscy5jb21wbGV4VGVuc29ySW5mb3MucmVhbDtcbiAgY29uc3QgaW1hZzJEID0gaW5wdXRWYWxzLmNvbXBsZXhUZW5zb3JJbmZvcy5pbWFnO1xuXG4gIC8vIENvbGxlY3RzIHJlYWwgYW5kIGltYWdpbmFyeSB2YWx1ZXMgc2VwYXJhdGVseS5cbiAgY29uc3QgcmVzdWx0U2hhcGUgPSBbYmF0Y2gsIGlubmVyRGltXTtcbiAgY29uc3QgcmVzdWx0U2l6ZSA9IHV0aWwuc2l6ZUZyb21TaGFwZShyZXN1bHRTaGFwZSk7XG4gIGNvbnN0IHJlc3VsdFJlYWwgPSB1dGlsLmdldFR5cGVkQXJyYXlGcm9tRFR5cGUoJ2Zsb2F0MzInLCByZXN1bHRTaXplKTtcbiAgY29uc3QgcmVzdWx0SW1hZyA9IHV0aWwuZ2V0VHlwZWRBcnJheUZyb21EVHlwZSgnZmxvYXQzMicsIHJlc3VsdFNpemUpO1xuXG4gIGZvciAobGV0IGIgPSAwOyBiIDwgYmF0Y2g7IGIrKykge1xuICAgIC8vIFRPRE86IFN1cHBvcnQgc2xpY2Ugb3BzIGZvciBjb21wbGV4IHR5cGUuXG4gICAgY29uc3QgciA9IHNsaWNlKHtcbiAgICAgIGlucHV0czoge3g6IHJlYWwyRH0sXG4gICAgICBiYWNrZW5kOiBjcHVCYWNrZW5kLFxuICAgICAgYXR0cnM6IHtiZWdpbjogW2IsIDBdLCBzaXplOiBbMSwgaW5uZXJEaW1dfVxuICAgIH0pO1xuICAgIGNvbnN0IGkgPSBzbGljZSh7XG4gICAgICBpbnB1dHM6IHt4OiBpbWFnMkR9LFxuICAgICAgYmFja2VuZDogY3B1QmFja2VuZCxcbiAgICAgIGF0dHJzOiB7YmVnaW46IFtiLCAwXSwgc2l6ZTogWzEsIGlubmVyRGltXX1cbiAgICB9KTtcblxuICAgIGNvbnN0IGlucHV0ID0gY29tcGxleCh7aW5wdXRzOiB7cmVhbDogciwgaW1hZzogaX0sIGJhY2tlbmQ6IGNwdUJhY2tlbmR9KTtcblxuICAgIC8vIFJ1biBGRlQgYnkgYmF0Y2ggZWxlbWVudC5cbiAgICBjb25zdCB7cmVhbCwgaW1hZ30gPSBmZnRJbXBsKGlucHV0LCBpbnZlcnNlLCBjcHVCYWNrZW5kKTtcbiAgICBjb25zdCByZXMgPSBiYWNrZW5kX3V0aWwubWVyZ2VSZWFsQW5kSW1hZ0FycmF5cyhyZWFsLCBpbWFnKTtcblxuICAgIGZvciAobGV0IGQgPSAwOyBkIDwgaW5uZXJEaW07IGQrKykge1xuICAgICAgY29uc3QgYyA9IGJhY2tlbmRfdXRpbC5nZXRDb21wbGV4V2l0aEluZGV4KHJlcywgZCk7XG4gICAgICByZXN1bHRSZWFsW2IgKiBpbm5lckRpbSArIGRdID0gYy5yZWFsO1xuICAgICAgcmVzdWx0SW1hZ1tiICogaW5uZXJEaW0gKyBkXSA9IGMuaW1hZztcbiAgICB9XG5cbiAgICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKHIpO1xuICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oaSk7XG4gICAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhpbnB1dCk7XG4gIH1cblxuICBjb25zdCAkcmVhbEluZm86IFRlbnNvckluZm8gPVxuICAgICAgY3B1QmFja2VuZC5tYWtlVGVuc29ySW5mbyhyZXN1bHRTaGFwZSwgJ2Zsb2F0MzInLCByZXN1bHRSZWFsKTtcbiAgY29uc3QgJGltYWdJbmZvOiBUZW5zb3JJbmZvID1cbiAgICAgIGNwdUJhY2tlbmQubWFrZVRlbnNvckluZm8ocmVzdWx0U2hhcGUsICdmbG9hdDMyJywgcmVzdWx0SW1hZyk7XG5cbiAgY29uc3QgcmVzdWx0ID0gY29tcGxleChcbiAgICAgIHtpbnB1dHM6IHtyZWFsOiAkcmVhbEluZm8sIGltYWc6ICRpbWFnSW5mb30sIGJhY2tlbmQ6IGNwdUJhY2tlbmR9KTtcblxuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKCRyZWFsSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJGltYWdJbmZvKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmZ0SW1wbChcbiAgICBpbnB1dDogVGVuc29ySW5mbywgaW52ZXJzZTogYm9vbGVhbixcbiAgICBjcHVCYWNrZW5kOiBNYXRoQmFja2VuZENQVSk6IHtyZWFsOiBGbG9hdDMyQXJyYXksIGltYWc6IEZsb2F0MzJBcnJheX0ge1xuICBjb25zdCBpbnB1dFNpemUgPSB1dGlsLnNpemVGcm9tU2hhcGUoaW5wdXQuc2hhcGUpO1xuXG4gIGNvbnN0IGlucHV0VmFscyA9IGNwdUJhY2tlbmQuZGF0YS5nZXQoaW5wdXQuZGF0YUlkKTtcblxuICBjb25zdCByZWFsVmFscyA9XG4gICAgICBjcHVCYWNrZW5kLmRhdGEuZ2V0KGlucHV0VmFscy5jb21wbGV4VGVuc29ySW5mb3MucmVhbC5kYXRhSWQpLnZhbHVlcyBhc1xuICAgICAgRmxvYXQzMkFycmF5O1xuXG4gIGNvbnN0IGltYWdWYWxzID1cbiAgICAgIGNwdUJhY2tlbmQuZGF0YS5nZXQoaW5wdXRWYWxzLmNvbXBsZXhUZW5zb3JJbmZvcy5pbWFnLmRhdGFJZCkudmFsdWVzIGFzXG4gICAgICBGbG9hdDMyQXJyYXk7XG5cbiAgaWYgKGlzRXhwb25lbnRPZjIoaW5wdXRTaXplKSkge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIGZmdFJhZGl4MihyZWFsVmFscywgaW1hZ1ZhbHMsIGlucHV0U2l6ZSwgaW52ZXJzZSwgY3B1QmFja2VuZCk7XG5cbiAgICBjb25zdCByZXN1bHRTaGFwZSA9IFtpbnB1dC5zaGFwZVswXSwgaW5wdXQuc2hhcGVbMV1dO1xuXG4gICAgaWYgKGludmVyc2UpIHtcbiAgICAgIGNvbnN0IHJlYWxJbmZvOiBUZW5zb3JJbmZvID1cbiAgICAgICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKHJlc3VsdFNoYXBlLCAnZmxvYXQzMicsIHJlc3VsdC5yZWFsKTtcbiAgICAgIGNvbnN0IGltYWdJbmZvOiBUZW5zb3JJbmZvID1cbiAgICAgICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKHJlc3VsdFNoYXBlLCAnZmxvYXQzMicsIHJlc3VsdC5pbWFnKTtcblxuICAgICAgY29uc3Qgc2l6ZUluZm86IFRlbnNvckluZm8gPSBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKFxuICAgICAgICAgIFtdLCAnZmxvYXQzMicsXG4gICAgICAgICAgdXRpbC5jcmVhdGVTY2FsYXJWYWx1ZShpbnB1dFNpemUgYXMgdW5rbm93biBhcyAnZmxvYXQzMicsICdmbG9hdDMyJykpO1xuICAgICAgY29uc3Qgc2l6ZUluZm9Db3B5ID1cbiAgICAgICAgICBpZGVudGl0eSh7aW5wdXRzOiB7eDogc2l6ZUluZm99LCBiYWNrZW5kOiBjcHVCYWNrZW5kfSk7XG5cbiAgICAgIGNvbnN0IGRpdlJlYWxJbmZvID1cbiAgICAgICAgICByZWFsRGl2Q29uZmlnLmtlcm5lbEZ1bmMoXG4gICAgICAgICAgICAgIHtpbnB1dHM6IHthOiByZWFsSW5mbywgYjogc2l6ZUluZm99LCBiYWNrZW5kOiBjcHVCYWNrZW5kfSkgYXNcbiAgICAgICAgICBUZW5zb3JJbmZvO1xuICAgICAgY29uc3QgZGl2SW1hZ0luZm8gPVxuICAgICAgICAgIHJlYWxEaXZDb25maWcua2VybmVsRnVuYyhcbiAgICAgICAgICAgICAge2lucHV0czoge2E6IGltYWdJbmZvLCBiOiBzaXplSW5mb0NvcHl9LCBiYWNrZW5kOiBjcHVCYWNrZW5kfSkgYXNcbiAgICAgICAgICBUZW5zb3JJbmZvO1xuXG4gICAgICBjb25zdCBkaXZSZWFsVmFscyA9XG4gICAgICAgICAgY3B1QmFja2VuZC5kYXRhLmdldChkaXZSZWFsSW5mby5kYXRhSWQpLnZhbHVlcyBhcyBGbG9hdDMyQXJyYXk7XG4gICAgICBjb25zdCBkaXZJbWFnVmFscyA9XG4gICAgICAgICAgY3B1QmFja2VuZC5kYXRhLmdldChkaXZJbWFnSW5mby5kYXRhSWQpLnZhbHVlcyBhcyBGbG9hdDMyQXJyYXk7XG5cbiAgICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8ocmVhbEluZm8pO1xuICAgICAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhpbWFnSW5mbyk7XG4gICAgICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKHNpemVJbmZvKTtcbiAgICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oc2l6ZUluZm9Db3B5KTtcbiAgICAgIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oZGl2UmVhbEluZm8pO1xuICAgICAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhkaXZJbWFnSW5mbyk7XG5cbiAgICAgIHJldHVybiB7cmVhbDogZGl2UmVhbFZhbHMsIGltYWc6IGRpdkltYWdWYWxzfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRhdGEgPSBiYWNrZW5kX3V0aWwubWVyZ2VSZWFsQW5kSW1hZ0FycmF5cyhyZWFsVmFscywgaW1hZ1ZhbHMpO1xuXG4gICAgY29uc3QgcmF3T3V0cHV0ID1cbiAgICAgICAgZm91cmllclRyYW5zZm9ybUJ5TWF0bXVsKGRhdGEsIGlucHV0U2l6ZSwgaW52ZXJzZSkgYXMgRmxvYXQzMkFycmF5O1xuXG4gICAgcmV0dXJuIGJhY2tlbmRfdXRpbC5zcGxpdFJlYWxBbmRJbWFnQXJyYXlzKHJhd091dHB1dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudE9mMihzaXplOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChzaXplICYgc2l6ZSAtIDEpID09PSAwO1xufVxuXG4vLyBGRlQgdXNpbmcgQ29vbGV5LVR1a2V5IGFsZ29yaXRobSBvbiByYWRpeCAyIGRpbWVuc2lvbmFsIGlucHV0LlxuZnVuY3Rpb24gZmZ0UmFkaXgyKFxuICAgIHJlYWxWYWxzOiBGbG9hdDMyQXJyYXksIGltYWdWYWxzOiBGbG9hdDMyQXJyYXksIHNpemU6IG51bWJlcixcbiAgICBpbnZlcnNlOiBib29sZWFuLFxuICAgIGNwdUJhY2tlbmQ6IE1hdGhCYWNrZW5kQ1BVKToge3JlYWw6IEZsb2F0MzJBcnJheSwgaW1hZzogRmxvYXQzMkFycmF5fSB7XG4gIGlmIChzaXplID09PSAxKSB7XG4gICAgcmV0dXJuIHtyZWFsOiByZWFsVmFscywgaW1hZzogaW1hZ1ZhbHN9O1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGJhY2tlbmRfdXRpbC5tZXJnZVJlYWxBbmRJbWFnQXJyYXlzKHJlYWxWYWxzLCBpbWFnVmFscyk7XG5cbiAgY29uc3QgaGFsZiA9IHNpemUgLyAyO1xuXG4gIGNvbnN0IGV2ZW5Db21wbGV4ID0gYmFja2VuZF91dGlsLmNvbXBsZXhXaXRoRXZlbkluZGV4KGRhdGEpO1xuXG4gIGNvbnN0IGV2ZW5SZWFsVmFscyA9IGV2ZW5Db21wbGV4LnJlYWw7XG4gIGNvbnN0IGV2ZW5JbWFnVmFscyA9IGV2ZW5Db21wbGV4LmltYWc7XG5cbiAgY29uc3QgZXZlblNoYXBlID0gW2V2ZW5SZWFsVmFscy5sZW5ndGhdO1xuXG4gIGNvbnN0IGV2ZW5SZWFsSW5mbyA9XG4gICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKGV2ZW5TaGFwZSwgJ2Zsb2F0MzInLCBldmVuUmVhbFZhbHMpO1xuICBjb25zdCBldmVuSW1hZ0luZm8gPVxuICAgICAgY3B1QmFja2VuZC5tYWtlVGVuc29ySW5mbyhldmVuU2hhcGUsICdmbG9hdDMyJywgZXZlbkltYWdWYWxzKTtcblxuICBjb25zdCBldmVuVGVuc29ySW5mbyA9IGNvbXBsZXgoXG4gICAgICB7aW5wdXRzOiB7cmVhbDogZXZlblJlYWxJbmZvLCBpbWFnOiBldmVuSW1hZ0luZm99LCBiYWNrZW5kOiBjcHVCYWNrZW5kfSk7XG5cbiAgY29uc3Qgb2RkQ29tcGxleCA9IGJhY2tlbmRfdXRpbC5jb21wbGV4V2l0aE9kZEluZGV4KGRhdGEpO1xuXG4gIGNvbnN0IG9kZFJlYWxWYWxzID0gb2RkQ29tcGxleC5yZWFsO1xuICBjb25zdCBvZGRJbWFnVmFscyA9IG9kZENvbXBsZXguaW1hZztcblxuICBjb25zdCBvZGRTaGFwZSA9IFtvZGRSZWFsVmFscy5sZW5ndGhdO1xuXG4gIGNvbnN0IG9kZFJlYWxJbmZvID1cbiAgICAgIGNwdUJhY2tlbmQubWFrZVRlbnNvckluZm8ob2RkU2hhcGUsICdmbG9hdDMyJywgb2RkUmVhbFZhbHMpO1xuICBjb25zdCBvZGRJbWFnSW5mbyA9XG4gICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKG9kZFNoYXBlLCAnZmxvYXQzMicsIG9kZEltYWdWYWxzKTtcblxuICBjb25zdCBvZGRUZW5zb3JJbmZvID0gY29tcGxleChcbiAgICAgIHtpbnB1dHM6IHtyZWFsOiBvZGRSZWFsSW5mbywgaW1hZzogb2RkSW1hZ0luZm99LCBiYWNrZW5kOiBjcHVCYWNrZW5kfSk7XG5cbiAgLy8gUmVjdXJzaXZlIGNhbGwgZm9yIGhhbGYgcGFydCBvZiBvcmlnaW5hbCBpbnB1dC5cbiAgY29uc3QgJGV2ZW5Db21wbGV4ID1cbiAgICAgIGZmdFJhZGl4MihldmVuUmVhbFZhbHMsIGV2ZW5JbWFnVmFscywgaGFsZiwgaW52ZXJzZSwgY3B1QmFja2VuZCk7XG5cbiAgY29uc3QgJGV2ZW5SZWFsVmFscyA9ICRldmVuQ29tcGxleC5yZWFsO1xuICBjb25zdCAkZXZlbkltYWdWYWxzID0gJGV2ZW5Db21wbGV4LmltYWc7XG5cbiAgY29uc3QgJGV2ZW5TaGFwZSA9IFskZXZlblJlYWxWYWxzLmxlbmd0aF07XG5cbiAgY29uc3QgJGV2ZW5SZWFsSW5mbyA9XG4gICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKCRldmVuU2hhcGUsICdmbG9hdDMyJywgJGV2ZW5SZWFsVmFscyk7XG4gIGNvbnN0ICRldmVuSW1hZ0luZm8gPVxuICAgICAgY3B1QmFja2VuZC5tYWtlVGVuc29ySW5mbygkZXZlblNoYXBlLCAnZmxvYXQzMicsICRldmVuSW1hZ1ZhbHMpO1xuXG4gIGNvbnN0ICRldmVuVGVuc29ySW5mbyA9IGNvbXBsZXgoe1xuICAgIGlucHV0czoge3JlYWw6ICRldmVuUmVhbEluZm8sIGltYWc6ICRldmVuSW1hZ0luZm99LFxuICAgIGJhY2tlbmQ6IGNwdUJhY2tlbmRcbiAgfSk7XG5cbiAgY29uc3QgJG9kZENvbXBsZXggPVxuICAgICAgZmZ0UmFkaXgyKG9kZFJlYWxWYWxzLCBvZGRJbWFnVmFscywgaGFsZiwgaW52ZXJzZSwgY3B1QmFja2VuZCk7XG5cbiAgY29uc3QgJG9kZFJlYWxWYWxzID0gJG9kZENvbXBsZXgucmVhbDtcbiAgY29uc3QgJG9kZEltYWdWYWxzID0gJG9kZENvbXBsZXguaW1hZztcblxuICBjb25zdCAkb2RkU2hhcGUgPSBbJG9kZFJlYWxWYWxzLmxlbmd0aF07XG5cbiAgY29uc3QgJG9kZFJlYWxJbmZvID1cbiAgICAgIGNwdUJhY2tlbmQubWFrZVRlbnNvckluZm8oJG9kZFNoYXBlLCAnZmxvYXQzMicsICRvZGRSZWFsVmFscyk7XG4gIGNvbnN0ICRvZGRJbWFnSW5mbyA9XG4gICAgICBjcHVCYWNrZW5kLm1ha2VUZW5zb3JJbmZvKCRvZGRTaGFwZSwgJ2Zsb2F0MzInLCAkb2RkSW1hZ1ZhbHMpO1xuXG4gIGNvbnN0ICRvZGRUZW5zb3JJbmZvID0gY29tcGxleChcbiAgICAgIHtpbnB1dHM6IHtyZWFsOiAkb2RkUmVhbEluZm8sIGltYWc6ICRvZGRJbWFnSW5mb30sIGJhY2tlbmQ6IGNwdUJhY2tlbmR9KTtcblxuICBjb25zdCBlID0gYmFja2VuZF91dGlsLmV4cG9uZW50cyhzaXplLCBpbnZlcnNlKTtcbiAgY29uc3QgZVNoYXBlID0gW2UucmVhbC5sZW5ndGhdO1xuXG4gIGNvbnN0IGVSZWFsSW5mbyA9IGNwdUJhY2tlbmQubWFrZVRlbnNvckluZm8oZVNoYXBlLCAnZmxvYXQzMicsIGUucmVhbCk7XG4gIGNvbnN0IGVJbWFnSW5mbyA9IGNwdUJhY2tlbmQubWFrZVRlbnNvckluZm8oZVNoYXBlLCAnZmxvYXQzMicsIGUuaW1hZyk7XG5cbiAgY29uc3QgY29tcGxleEluZm8gPSBjb21wbGV4KFxuICAgICAge2lucHV0czoge3JlYWw6IGVSZWFsSW5mbywgaW1hZzogZUltYWdJbmZvfSwgYmFja2VuZDogY3B1QmFja2VuZH0pO1xuXG4gIGNvbnN0IGV4cG9uZW50SW5mbyA9XG4gICAgICBtdWx0aXBseShcbiAgICAgICAgICB7aW5wdXRzOiB7YTogY29tcGxleEluZm8sIGI6ICRvZGRUZW5zb3JJbmZvfSwgYmFja2VuZDogY3B1QmFja2VuZH0pIGFzXG4gICAgICBUZW5zb3JJbmZvO1xuXG4gIGNvbnN0IGFkZFBhcnQgPSBhZGQoe1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IHthOiAkZXZlblRlbnNvckluZm8sIGI6IGV4cG9uZW50SW5mb30sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlbmQ6IGNwdUJhY2tlbmRcbiAgICAgICAgICAgICAgICAgIH0pIGFzIFRlbnNvckluZm87XG4gIGNvbnN0IHN1YlBhcnQgPSBzdWIoe1xuICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IHthOiAkZXZlblRlbnNvckluZm8sIGI6IGV4cG9uZW50SW5mb30sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlbmQ6IGNwdUJhY2tlbmRcbiAgICAgICAgICAgICAgICAgIH0pIGFzIFRlbnNvckluZm87XG5cbiAgY29uc3QgYWRkUGFydFJlYWwgPSByZWFsKHtpbnB1dHM6IHtpbnB1dDogYWRkUGFydH0sIGJhY2tlbmQ6IGNwdUJhY2tlbmR9KTtcbiAgY29uc3Qgc3ViUGFydFJlYWwgPSByZWFsKHtpbnB1dHM6IHtpbnB1dDogc3ViUGFydH0sIGJhY2tlbmQ6IGNwdUJhY2tlbmR9KTtcblxuICBjb25zdCBhZGRQYXJ0SW1hZyA9IGltYWcoe2lucHV0czoge2lucHV0OiBhZGRQYXJ0fSwgYmFja2VuZDogY3B1QmFja2VuZH0pO1xuICBjb25zdCBzdWJQYXJ0SW1hZyA9IGltYWcoe2lucHV0czoge2lucHV0OiBzdWJQYXJ0fSwgYmFja2VuZDogY3B1QmFja2VuZH0pO1xuXG4gIGNvbnN0ICRyZWFsID0gY29uY2F0KHtcbiAgICBpbnB1dHM6IFthZGRQYXJ0UmVhbCBhcyBUZW5zb3IsIHN1YlBhcnRSZWFsIGFzIFRlbnNvcl0sXG4gICAgYmFja2VuZDogY3B1QmFja2VuZCxcbiAgICBhdHRyczoge2F4aXM6IDB9XG4gIH0pO1xuICBjb25zdCAkaW1hZyA9IGNvbmNhdCh7XG4gICAgaW5wdXRzOiBbYWRkUGFydEltYWcgYXMgVGVuc29yLCBzdWJQYXJ0SW1hZyBhcyBUZW5zb3JdLFxuICAgIGJhY2tlbmQ6IGNwdUJhY2tlbmQsXG4gICAgYXR0cnM6IHtheGlzOiAwfVxuICB9KTtcblxuICBjb25zdCAkcmVhbFZhbHMgPSBjcHVCYWNrZW5kLmRhdGEuZ2V0KCRyZWFsLmRhdGFJZCkudmFsdWVzIGFzIEZsb2F0MzJBcnJheTtcbiAgY29uc3QgJGltYWdWYWxzID0gY3B1QmFja2VuZC5kYXRhLmdldCgkaW1hZy5kYXRhSWQpLnZhbHVlcyBhcyBGbG9hdDMyQXJyYXk7XG5cbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhldmVuUmVhbEluZm8pO1xuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKGV2ZW5JbWFnSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oZXZlblRlbnNvckluZm8pO1xuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKG9kZFJlYWxJbmZvKTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhvZGRJbWFnSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8ob2RkVGVuc29ySW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJGV2ZW5SZWFsSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJGV2ZW5JbWFnSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJGV2ZW5UZW5zb3JJbmZvKTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbygkb2RkUmVhbEluZm8pO1xuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKCRvZGRJbWFnSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJG9kZFRlbnNvckluZm8pO1xuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKGVSZWFsSW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oZUltYWdJbmZvKTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhjb21wbGV4SW5mbyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oZXhwb25lbnRJbmZvKTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhhZGRQYXJ0KTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhzdWJQYXJ0KTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhhZGRQYXJ0UmVhbCk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oYWRkUGFydEltYWcpO1xuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKHN1YlBhcnRSZWFsKTtcbiAgY3B1QmFja2VuZC5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ySW5mbyhzdWJQYXJ0SW1hZyk7XG4gIGNwdUJhY2tlbmQuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvckluZm8oJHJlYWwpO1xuICBjcHVCYWNrZW5kLmRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JJbmZvKCRpbWFnKTtcblxuICByZXR1cm4ge3JlYWw6ICRyZWFsVmFscywgaW1hZzogJGltYWdWYWxzfTtcbn1cblxuLy8gQ2FsY3VsYXRlIGZvdXJpZXIgdHJhbnNmb3JtIGJ5IG11bHRwbHlpbmcgc2ludXNvaWQgbWF0cml4LlxuZnVuY3Rpb24gZm91cmllclRyYW5zZm9ybUJ5TWF0bXVsKFxuICAgIGRhdGE6IFR5cGVkQXJyYXksIHNpemU6IG51bWJlciwgaW52ZXJzZTogYm9vbGVhbik6IFR5cGVkQXJyYXkge1xuICBjb25zdCByZXQgPSBuZXcgRmxvYXQzMkFycmF5KHNpemUgKiAyKTtcbiAgLy8gVE9ETzogVXNlIG1hdG11bCBpbnN0ZWFkIG9uY2UgaXQgc3VwcG9ydHMgY29tcGxleDY0IHR5cGUuXG4gIGZvciAobGV0IHIgPSAwOyByIDwgc2l6ZTsgcisrKSB7XG4gICAgbGV0IHJlYWwgPSAwLjA7XG4gICAgbGV0IGltYWcgPSAwLjA7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBzaXplOyBjKyspIHtcbiAgICAgIGNvbnN0IGUgPSBiYWNrZW5kX3V0aWwuZXhwb25lbnQociAqIGMsIHNpemUsIGludmVyc2UpO1xuICAgICAgY29uc3QgdGVybSA9IGJhY2tlbmRfdXRpbC5nZXRDb21wbGV4V2l0aEluZGV4KGRhdGEgYXMgRmxvYXQzMkFycmF5LCBjKTtcbiAgICAgIHJlYWwgKz0gdGVybS5yZWFsICogZS5yZWFsIC0gdGVybS5pbWFnICogZS5pbWFnO1xuICAgICAgaW1hZyArPSB0ZXJtLnJlYWwgKiBlLmltYWcgKyB0ZXJtLmltYWcgKiBlLnJlYWw7XG4gICAgfVxuICAgIGlmIChpbnZlcnNlKSB7XG4gICAgICByZWFsIC89IHNpemU7XG4gICAgICBpbWFnIC89IHNpemU7XG4gICAgfVxuICAgIGJhY2tlbmRfdXRpbC5hc3NpZ25Ub1R5cGVkQXJyYXkocmV0LCByZWFsLCBpbWFnLCByKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIl19
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-backend-cpu_dist_utils_6b3fa643._.js.map