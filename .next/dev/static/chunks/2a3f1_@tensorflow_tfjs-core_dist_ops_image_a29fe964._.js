(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/resize_bilinear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "resizeBilinear",
    ()=>resizeBilinear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Bilinear resize a single 3D image or a batch of 3D images to a new shape.
 *
 * @param images The images, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param size The new shape `[newHeight, newWidth]` to resize the
 *     images to. Each channel is resized individually.
 * @param alignCorners Defaults to `false`. If true, rescale
 *     input by `(new_height - 1) / (height - 1)`, which exactly aligns the 4
 *     corners of images and resized images. If false, rescale by
 *     `new_height / height`. Treat similarly the width dimension.
 * @param halfPixelCenters Defaults to `false`. Whether to assume pixel centers
 *     are at 0.5, which would make the floating point coordinates of the top
 *     left pixel 0.5, 0.5.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function resizeBilinear_(images, size, alignCorners = false, halfPixelCenters = false) {
    const $images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(images, 'images', 'resizeBilinear');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($images.rank === 3 || $images.rank === 4, ()=>`Error in resizeBilinear: x must be rank 3 or 4, but got ` + `rank ${$images.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](size.length === 2, ()=>`Error in resizeBilinear: new shape must 2D, but got shape ` + `${size}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](halfPixelCenters === false || alignCorners === false, ()=>`Error in resizeBilinear: If halfPixelCenters is true, ` + `alignCorners must be false.`);
    let batchImages = $images;
    let reshapedTo4D = false;
    if ($images.rank === 3) {
        reshapedTo4D = true;
        batchImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($images, [
            1,
            $images.shape[0],
            $images.shape[1],
            $images.shape[2]
        ]);
    }
    const [] = size;
    const inputs = {
        images: batchImages
    };
    const attrs = {
        alignCorners,
        halfPixelCenters,
        size
    };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeBilinear"], inputs, attrs);
    if (reshapedTo4D) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, [
            res.shape[1],
            res.shape[2],
            res.shape[3]
        ]);
    }
    return res;
}
const resizeBilinear = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    resizeBilinear_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplX2JpbGluZWFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2UvcmVzaXplX2JpbGluZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLGNBQWMsRUFBNEMsTUFBTSxvQkFBb0IsQ0FBQztBQUk3RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFFbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNoQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsU0FBUyxlQUFlLENBQ3BCLE1BQW9CLEVBQUUsSUFBc0IsRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUNsRSxnQkFBZ0IsR0FBRyxLQUFLO0lBQzFCLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFcEUsSUFBSSxDQUFDLE1BQU0sQ0FDUCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsRUFDeEMsR0FBRyxFQUFFLENBQUMsMERBQTBEO1FBQzVELFFBQVEsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDakIsR0FBRyxFQUFFLENBQUMsNERBQTREO1FBQzlELEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUMsTUFBTSxDQUNQLGdCQUFnQixLQUFLLEtBQUssSUFBSSxZQUFZLEtBQUssS0FBSyxFQUNwRCxHQUFHLEVBQUUsQ0FBQyx3REFBd0Q7UUFDMUQsNkJBQTZCLENBQUMsQ0FBQztJQUV2QyxJQUFJLFdBQVcsR0FBRyxPQUFtQixDQUFDO0lBQ3RDLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztJQUN6QixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsV0FBVyxHQUFHLE9BQU8sQ0FDakIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RTtJQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztJQUVoQixNQUFNLE1BQU0sR0FBeUIsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUM7SUFDM0QsTUFBTSxLQUFLLEdBQXdCLEVBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBQyxDQUFDO0lBRTFFLDBEQUEwRDtJQUMxRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUNaLGNBQWMsRUFBRSxNQUFtQyxFQUNuRCxLQUFnQyxDQUFNLENBQUM7SUFFdkQsSUFBSSxZQUFZLEVBQUU7UUFDaEIsT0FBTyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBTSxDQUFDO0tBQ3RFO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0VOR0lORX0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7UmVzaXplQmlsaW5lYXIsIFJlc2l6ZUJpbGluZWFyQXR0cnMsIFJlc2l6ZUJpbGluZWFySW5wdXRzfSBmcm9tICcuLi8uLi9rZXJuZWxfbmFtZXMnO1xuaW1wb3J0IHtOYW1lZEF0dHJNYXB9IGZyb20gJy4uLy4uL2tlcm5lbF9yZWdpc3RyeSc7XG5pbXBvcnQge1RlbnNvcjNELCBUZW5zb3I0RH0gZnJvbSAnLi4vLi4vdGVuc29yJztcbmltcG9ydCB7TmFtZWRUZW5zb3JNYXB9IGZyb20gJy4uLy4uL3RlbnNvcl90eXBlcyc7XG5pbXBvcnQge2NvbnZlcnRUb1RlbnNvcn0gZnJvbSAnLi4vLi4vdGVuc29yX3V0aWxfZW52JztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi8uLi91dGlsJztcblxuaW1wb3J0IHtvcH0gZnJvbSAnLi4vb3BlcmF0aW9uJztcbmltcG9ydCB7cmVzaGFwZX0gZnJvbSAnLi4vcmVzaGFwZSc7XG5cbi8qKlxuICogQmlsaW5lYXIgcmVzaXplIGEgc2luZ2xlIDNEIGltYWdlIG9yIGEgYmF0Y2ggb2YgM0QgaW1hZ2VzIHRvIGEgbmV3IHNoYXBlLlxuICpcbiAqIEBwYXJhbSBpbWFnZXMgVGhlIGltYWdlcywgb2YgcmFuayA0IG9yIHJhbmsgMywgb2Ygc2hhcGVcbiAqICAgICBgW2JhdGNoLCBoZWlnaHQsIHdpZHRoLCBpbkNoYW5uZWxzXWAuIElmIHJhbmsgMywgYmF0Y2ggb2YgMSBpcyBhc3N1bWVkLlxuICogQHBhcmFtIHNpemUgVGhlIG5ldyBzaGFwZSBgW25ld0hlaWdodCwgbmV3V2lkdGhdYCB0byByZXNpemUgdGhlXG4gKiAgICAgaW1hZ2VzIHRvLiBFYWNoIGNoYW5uZWwgaXMgcmVzaXplZCBpbmRpdmlkdWFsbHkuXG4gKiBAcGFyYW0gYWxpZ25Db3JuZXJzIERlZmF1bHRzIHRvIGBmYWxzZWAuIElmIHRydWUsIHJlc2NhbGVcbiAqICAgICBpbnB1dCBieSBgKG5ld19oZWlnaHQgLSAxKSAvIChoZWlnaHQgLSAxKWAsIHdoaWNoIGV4YWN0bHkgYWxpZ25zIHRoZSA0XG4gKiAgICAgY29ybmVycyBvZiBpbWFnZXMgYW5kIHJlc2l6ZWQgaW1hZ2VzLiBJZiBmYWxzZSwgcmVzY2FsZSBieVxuICogICAgIGBuZXdfaGVpZ2h0IC8gaGVpZ2h0YC4gVHJlYXQgc2ltaWxhcmx5IHRoZSB3aWR0aCBkaW1lbnNpb24uXG4gKiBAcGFyYW0gaGFsZlBpeGVsQ2VudGVycyBEZWZhdWx0cyB0byBgZmFsc2VgLiBXaGV0aGVyIHRvIGFzc3VtZSBwaXhlbCBjZW50ZXJzXG4gKiAgICAgYXJlIGF0IDAuNSwgd2hpY2ggd291bGQgbWFrZSB0aGUgZmxvYXRpbmcgcG9pbnQgY29vcmRpbmF0ZXMgb2YgdGhlIHRvcFxuICogICAgIGxlZnQgcGl4ZWwgMC41LCAwLjUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ09wZXJhdGlvbnMnLCBzdWJoZWFkaW5nOiAnSW1hZ2VzJywgbmFtZXNwYWNlOiAnaW1hZ2UnfVxuICovXG5mdW5jdGlvbiByZXNpemVCaWxpbmVhcl88VCBleHRlbmRzIFRlbnNvcjNEfFRlbnNvcjREPihcbiAgICBpbWFnZXM6IFR8VGVuc29yTGlrZSwgc2l6ZTogW251bWJlciwgbnVtYmVyXSwgYWxpZ25Db3JuZXJzID0gZmFsc2UsXG4gICAgaGFsZlBpeGVsQ2VudGVycyA9IGZhbHNlKTogVCB7XG4gIGNvbnN0ICRpbWFnZXMgPSBjb252ZXJ0VG9UZW5zb3IoaW1hZ2VzLCAnaW1hZ2VzJywgJ3Jlc2l6ZUJpbGluZWFyJyk7XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICAkaW1hZ2VzLnJhbmsgPT09IDMgfHwgJGltYWdlcy5yYW5rID09PSA0LFxuICAgICAgKCkgPT4gYEVycm9yIGluIHJlc2l6ZUJpbGluZWFyOiB4IG11c3QgYmUgcmFuayAzIG9yIDQsIGJ1dCBnb3QgYCArXG4gICAgICAgICAgYHJhbmsgJHskaW1hZ2VzLnJhbmt9LmApO1xuICB1dGlsLmFzc2VydChcbiAgICAgIHNpemUubGVuZ3RoID09PSAyLFxuICAgICAgKCkgPT4gYEVycm9yIGluIHJlc2l6ZUJpbGluZWFyOiBuZXcgc2hhcGUgbXVzdCAyRCwgYnV0IGdvdCBzaGFwZSBgICtcbiAgICAgICAgICBgJHtzaXplfS5gKTtcbiAgdXRpbC5hc3NlcnQoXG4gICAgICBoYWxmUGl4ZWxDZW50ZXJzID09PSBmYWxzZSB8fCBhbGlnbkNvcm5lcnMgPT09IGZhbHNlLFxuICAgICAgKCkgPT4gYEVycm9yIGluIHJlc2l6ZUJpbGluZWFyOiBJZiBoYWxmUGl4ZWxDZW50ZXJzIGlzIHRydWUsIGAgK1xuICAgICAgICAgIGBhbGlnbkNvcm5lcnMgbXVzdCBiZSBmYWxzZS5gKTtcblxuICBsZXQgYmF0Y2hJbWFnZXMgPSAkaW1hZ2VzIGFzIFRlbnNvcjREO1xuICBsZXQgcmVzaGFwZWRUbzREID0gZmFsc2U7XG4gIGlmICgkaW1hZ2VzLnJhbmsgPT09IDMpIHtcbiAgICByZXNoYXBlZFRvNEQgPSB0cnVlO1xuICAgIGJhdGNoSW1hZ2VzID0gcmVzaGFwZShcbiAgICAgICAgJGltYWdlcywgWzEsICRpbWFnZXMuc2hhcGVbMF0sICRpbWFnZXMuc2hhcGVbMV0sICRpbWFnZXMuc2hhcGVbMl1dKTtcbiAgfVxuXG4gIGNvbnN0IFtdID0gc2l6ZTtcblxuICBjb25zdCBpbnB1dHM6IFJlc2l6ZUJpbGluZWFySW5wdXRzID0ge2ltYWdlczogYmF0Y2hJbWFnZXN9O1xuICBjb25zdCBhdHRyczogUmVzaXplQmlsaW5lYXJBdHRycyA9IHthbGlnbkNvcm5lcnMsIGhhbGZQaXhlbENlbnRlcnMsIHNpemV9O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgY29uc3QgcmVzID0gRU5HSU5FLnJ1bktlcm5lbChcbiAgICAgICAgICAgICAgICAgIFJlc2l6ZUJpbGluZWFyLCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCxcbiAgICAgICAgICAgICAgICAgIGF0dHJzIGFzIHVua25vd24gYXMgTmFtZWRBdHRyTWFwKSBhcyBUO1xuXG4gIGlmIChyZXNoYXBlZFRvNEQpIHtcbiAgICByZXR1cm4gcmVzaGFwZShyZXMsIFtyZXMuc2hhcGVbMV0sIHJlcy5zaGFwZVsyXSwgcmVzLnNoYXBlWzNdXSkgYXMgVDtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgY29uc3QgcmVzaXplQmlsaW5lYXIgPSAvKiBAX19QVVJFX18gKi8gb3Aoe3Jlc2l6ZUJpbGluZWFyX30pO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/resize_nearest_neighbor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "resizeNearestNeighbor",
    ()=>resizeNearestNeighbor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * NearestNeighbor resize a batch of 3D images to a new shape.
 *
 * @param images The images, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is assumed.
 * @param size The new shape `[newHeight, newWidth]` to resize the
 *     images to. Each channel is resized individually.
 * @param alignCorners Defaults to False. If true, rescale
 *     input by `(new_height - 1) / (height - 1)`, which exactly aligns the 4
 *     corners of images and resized images. If false, rescale by
 *     `new_height / height`. Treat similarly the width dimension.
 * @param halfPixelCenters Defaults to `false`. Whether to assume pixels are of
 *      half the actual dimensions, and yield more accurate resizes. This flag
 *      would also make the floating point coordinates of the top left pixel
 *      0.5, 0.5.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function resizeNearestNeighbor_(images, size, alignCorners = false, halfPixelCenters = false) {
    const $images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(images, 'images', 'resizeNearestNeighbor');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($images.rank === 3 || $images.rank === 4, ()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got ` + `rank ${$images.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](size.length === 2, ()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ` + `${size}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($images.dtype === 'float32' || $images.dtype === 'int32', ()=>'`images` must have `int32` or `float32` as dtype');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](halfPixelCenters === false || alignCorners === false, ()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, ` + `alignCorners must be false.`);
    let batchImages = $images;
    let reshapedTo4D = false;
    if ($images.rank === 3) {
        reshapedTo4D = true;
        batchImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($images, [
            1,
            $images.shape[0],
            $images.shape[1],
            $images.shape[2]
        ]);
    }
    const [] = size;
    const inputs = {
        images: batchImages
    };
    const attrs = {
        alignCorners,
        halfPixelCenters,
        size
    };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeNearestNeighbor"], inputs, attrs);
    if (reshapedTo4D) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, [
            res.shape[1],
            res.shape[2],
            res.shape[3]
        ]);
    }
    return res;
}
const resizeNearestNeighbor = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    resizeNearestNeighbor_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplX25lYXJlc3RfbmVpZ2hib3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL29wcy9pbWFnZS9yZXNpemVfbmVhcmVzdF9uZWlnaGJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxxQkFBcUIsRUFBMEQsTUFBTSxvQkFBb0IsQ0FBQztBQUlsSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFFbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNoQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILFNBQVMsc0JBQXNCLENBQzNCLE1BQW9CLEVBQUUsSUFBc0IsRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUNsRSxnQkFBZ0IsR0FBRyxLQUFLO0lBQzFCLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFFM0UsSUFBSSxDQUFDLE1BQU0sQ0FDUCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsRUFDeEMsR0FBRyxFQUFFLENBQUMsaUVBQWlFO1FBQ25FLFFBQVEsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDakIsR0FBRyxFQUFFLENBQ0QsbUVBQW1FO1FBQ25FLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUMsTUFBTSxDQUNQLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUN4RCxHQUFHLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0lBQzlELElBQUksQ0FBQyxNQUFNLENBQ1AsZ0JBQWdCLEtBQUssS0FBSyxJQUFJLFlBQVksS0FBSyxLQUFLLEVBQ3BELEdBQUcsRUFBRSxDQUFDLCtEQUErRDtRQUNqRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksV0FBVyxHQUFHLE9BQW1CLENBQUM7SUFDdEMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7UUFDdEIsWUFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixXQUFXLEdBQUcsT0FBTyxDQUNqQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pFO0lBQ0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRWhCLE1BQU0sTUFBTSxHQUFnQyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUNsRSxNQUFNLEtBQUssR0FDc0IsRUFBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFFeEUsMERBQTBEO0lBQzFELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQ1oscUJBQXFCLEVBQUUsTUFBbUMsRUFDMUQsS0FBZ0MsQ0FBTSxDQUFDO0lBRXZELElBQUksWUFBWSxFQUFFO1FBQ2hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQU0sQ0FBQztLQUN0RTtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBQyxzQkFBc0IsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RU5HSU5FfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHtSZXNpemVOZWFyZXN0TmVpZ2hib3IsIFJlc2l6ZU5lYXJlc3ROZWlnaGJvckF0dHJzLCBSZXNpemVOZWFyZXN0TmVpZ2hib3JJbnB1dHN9IGZyb20gJy4uLy4uL2tlcm5lbF9uYW1lcyc7XG5pbXBvcnQge05hbWVkQXR0ck1hcH0gZnJvbSAnLi4vLi4va2VybmVsX3JlZ2lzdHJ5JztcbmltcG9ydCB7VGVuc29yM0QsIFRlbnNvcjREfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtOYW1lZFRlbnNvck1hcH0gZnJvbSAnLi4vLi4vdGVuc29yX3R5cGVzJztcbmltcG9ydCB7Y29udmVydFRvVGVuc29yfSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbF9lbnYnO1xuaW1wb3J0IHtUZW5zb3JMaWtlfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uLy4uL3V0aWwnO1xuXG5pbXBvcnQge29wfSBmcm9tICcuLi9vcGVyYXRpb24nO1xuaW1wb3J0IHtyZXNoYXBlfSBmcm9tICcuLi9yZXNoYXBlJztcblxuLyoqXG4gKiBOZWFyZXN0TmVpZ2hib3IgcmVzaXplIGEgYmF0Y2ggb2YgM0QgaW1hZ2VzIHRvIGEgbmV3IHNoYXBlLlxuICpcbiAqIEBwYXJhbSBpbWFnZXMgVGhlIGltYWdlcywgb2YgcmFuayA0IG9yIHJhbmsgMywgb2Ygc2hhcGVcbiAqICAgICBgW2JhdGNoLCBoZWlnaHQsIHdpZHRoLCBpbkNoYW5uZWxzXWAuIElmIHJhbmsgMywgYmF0Y2ggb2YgMSBpcyBhc3N1bWVkLlxuICogQHBhcmFtIHNpemUgVGhlIG5ldyBzaGFwZSBgW25ld0hlaWdodCwgbmV3V2lkdGhdYCB0byByZXNpemUgdGhlXG4gKiAgICAgaW1hZ2VzIHRvLiBFYWNoIGNoYW5uZWwgaXMgcmVzaXplZCBpbmRpdmlkdWFsbHkuXG4gKiBAcGFyYW0gYWxpZ25Db3JuZXJzIERlZmF1bHRzIHRvIEZhbHNlLiBJZiB0cnVlLCByZXNjYWxlXG4gKiAgICAgaW5wdXQgYnkgYChuZXdfaGVpZ2h0IC0gMSkgLyAoaGVpZ2h0IC0gMSlgLCB3aGljaCBleGFjdGx5IGFsaWducyB0aGUgNFxuICogICAgIGNvcm5lcnMgb2YgaW1hZ2VzIGFuZCByZXNpemVkIGltYWdlcy4gSWYgZmFsc2UsIHJlc2NhbGUgYnlcbiAqICAgICBgbmV3X2hlaWdodCAvIGhlaWdodGAuIFRyZWF0IHNpbWlsYXJseSB0aGUgd2lkdGggZGltZW5zaW9uLlxuICogQHBhcmFtIGhhbGZQaXhlbENlbnRlcnMgRGVmYXVsdHMgdG8gYGZhbHNlYC4gV2hldGhlciB0byBhc3N1bWUgcGl4ZWxzIGFyZSBvZlxuICogICAgICBoYWxmIHRoZSBhY3R1YWwgZGltZW5zaW9ucywgYW5kIHlpZWxkIG1vcmUgYWNjdXJhdGUgcmVzaXplcy4gVGhpcyBmbGFnXG4gKiAgICAgIHdvdWxkIGFsc28gbWFrZSB0aGUgZmxvYXRpbmcgcG9pbnQgY29vcmRpbmF0ZXMgb2YgdGhlIHRvcCBsZWZ0IHBpeGVsXG4gKiAgICAgIDAuNSwgMC41LlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdPcGVyYXRpb25zJywgc3ViaGVhZGluZzogJ0ltYWdlcycsIG5hbWVzcGFjZTogJ2ltYWdlJ31cbiAqL1xuZnVuY3Rpb24gcmVzaXplTmVhcmVzdE5laWdoYm9yXzxUIGV4dGVuZHMgVGVuc29yM0R8VGVuc29yNEQ+KFxuICAgIGltYWdlczogVHxUZW5zb3JMaWtlLCBzaXplOiBbbnVtYmVyLCBudW1iZXJdLCBhbGlnbkNvcm5lcnMgPSBmYWxzZSxcbiAgICBoYWxmUGl4ZWxDZW50ZXJzID0gZmFsc2UpOiBUIHtcbiAgY29uc3QgJGltYWdlcyA9IGNvbnZlcnRUb1RlbnNvcihpbWFnZXMsICdpbWFnZXMnLCAncmVzaXplTmVhcmVzdE5laWdoYm9yJyk7XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICAkaW1hZ2VzLnJhbmsgPT09IDMgfHwgJGltYWdlcy5yYW5rID09PSA0LFxuICAgICAgKCkgPT4gYEVycm9yIGluIHJlc2l6ZU5lYXJlc3ROZWlnaGJvcjogeCBtdXN0IGJlIHJhbmsgMyBvciA0LCBidXQgZ290IGAgK1xuICAgICAgICAgIGByYW5rICR7JGltYWdlcy5yYW5rfS5gKTtcbiAgdXRpbC5hc3NlcnQoXG4gICAgICBzaXplLmxlbmd0aCA9PT0gMixcbiAgICAgICgpID0+XG4gICAgICAgICAgYEVycm9yIGluIHJlc2l6ZU5lYXJlc3ROZWlnaGJvcjogbmV3IHNoYXBlIG11c3QgMkQsIGJ1dCBnb3Qgc2hhcGUgYCArXG4gICAgICAgICAgYCR7c2l6ZX0uYCk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgJGltYWdlcy5kdHlwZSA9PT0gJ2Zsb2F0MzInIHx8ICRpbWFnZXMuZHR5cGUgPT09ICdpbnQzMicsXG4gICAgICAoKSA9PiAnYGltYWdlc2AgbXVzdCBoYXZlIGBpbnQzMmAgb3IgYGZsb2F0MzJgIGFzIGR0eXBlJyk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgaGFsZlBpeGVsQ2VudGVycyA9PT0gZmFsc2UgfHwgYWxpZ25Db3JuZXJzID09PSBmYWxzZSxcbiAgICAgICgpID0+IGBFcnJvciBpbiByZXNpemVOZWFyZXN0TmVpZ2hib3I6IElmIGhhbGZQaXhlbENlbnRlcnMgaXMgdHJ1ZSwgYCArXG4gICAgICAgICAgYGFsaWduQ29ybmVycyBtdXN0IGJlIGZhbHNlLmApO1xuICBsZXQgYmF0Y2hJbWFnZXMgPSAkaW1hZ2VzIGFzIFRlbnNvcjREO1xuICBsZXQgcmVzaGFwZWRUbzREID0gZmFsc2U7XG4gIGlmICgkaW1hZ2VzLnJhbmsgPT09IDMpIHtcbiAgICByZXNoYXBlZFRvNEQgPSB0cnVlO1xuICAgIGJhdGNoSW1hZ2VzID0gcmVzaGFwZShcbiAgICAgICAgJGltYWdlcywgWzEsICRpbWFnZXMuc2hhcGVbMF0sICRpbWFnZXMuc2hhcGVbMV0sICRpbWFnZXMuc2hhcGVbMl1dKTtcbiAgfVxuICBjb25zdCBbXSA9IHNpemU7XG5cbiAgY29uc3QgaW5wdXRzOiBSZXNpemVOZWFyZXN0TmVpZ2hib3JJbnB1dHMgPSB7aW1hZ2VzOiBiYXRjaEltYWdlc307XG4gIGNvbnN0IGF0dHJzOlxuICAgICAgUmVzaXplTmVhcmVzdE5laWdoYm9yQXR0cnMgPSB7YWxpZ25Db3JuZXJzLCBoYWxmUGl4ZWxDZW50ZXJzLCBzaXplfTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gIGNvbnN0IHJlcyA9IEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICAgICAgICAgICAgICBSZXNpemVOZWFyZXN0TmVpZ2hib3IsIGlucHV0cyBhcyB1bmtub3duIGFzIE5hbWVkVGVuc29yTWFwLFxuICAgICAgICAgICAgICAgICAgYXR0cnMgYXMgdW5rbm93biBhcyBOYW1lZEF0dHJNYXApIGFzIFQ7XG5cbiAgaWYgKHJlc2hhcGVkVG80RCkge1xuICAgIHJldHVybiByZXNoYXBlKHJlcywgW3Jlcy5zaGFwZVsxXSwgcmVzLnNoYXBlWzJdLCByZXMuc2hhcGVbM11dKSBhcyBUO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBjb25zdCByZXNpemVOZWFyZXN0TmVpZ2hib3IgPSAvKiBAX19QVVJFX18gKi8gb3Aoe3Jlc2l6ZU5lYXJlc3ROZWlnaGJvcl99KTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/crop_and_resize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "cropAndResize",
    ()=>cropAndResize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Extracts crops from the input image tensor and resizes them using bilinear
 * sampling or nearest neighbor sampling (possibly with aspect ratio change)
 * to a common output size specified by cropSize.
 *
 * @param image 4d tensor of shape `[batch,imageHeight,imageWidth, depth]`,
 *     where imageHeight and imageWidth must be positive, specifying the
 *     batch of images from which to take crops
 * @param boxes 2d float32 tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the normalized
 *     coordinates of the box in the `boxInd[i]`th image in the batch
 * @param boxInd 1d int32 tensor of shape `[numBoxes]` with values in range
 *     `[0, batch)` that specifies the image that the `i`-th box refers to.
 * @param cropSize 1d int32 tensor of 2 elements `[cropHeigh, cropWidth]`
 *     specifying the size to which all crops are resized to.
 * @param method Optional string from `'bilinear' | 'nearest'`,
 *     defaults to bilinear, which specifies the sampling method for resizing
 * @param extrapolationValue A threshold for deciding when to remove boxes based
 *     on score. Defaults to 0.
 * @return A 4D tensor of the shape `[numBoxes,cropHeight,cropWidth,depth]`
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function cropAndResize_(image, boxes, boxInd, cropSize, method = 'bilinear', extrapolationValue = 0) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'cropAndResize');
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'cropAndResize', 'float32');
    const $boxInd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxInd, 'boxInd', 'cropAndResize', 'int32');
    const numBoxes = $boxes.shape[0];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank === 4, ()=>'Error in cropAndResize: image must be rank 4,' + `but got rank ${$image.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($boxes.rank === 2 && $boxes.shape[1] === 4, ()=>`Error in cropAndResize: boxes must be have size [${numBoxes},4] ` + `but had shape ${$boxes.shape}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($boxInd.rank === 1 && $boxInd.shape[0] === numBoxes, ()=>`Error in cropAndResize: boxInd must be have size [${numBoxes}] ` + `but had shape ${$boxes.shape}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](cropSize.length === 2, ()=>`Error in cropAndResize: cropSize must be of length 2, but got ` + `length ${cropSize.length}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](cropSize[0] >= 1 && cropSize[1] >= 1, ()=>`cropSize must be atleast [1,1], but was ${cropSize}`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](method === 'bilinear' || method === 'nearest', ()=>`method must be bilinear or nearest, but was ${method}`);
    const inputs = {
        image: $image,
        boxes: $boxes,
        boxInd: $boxInd
    };
    const attrs = {
        method,
        extrapolationValue,
        cropSize
    };
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CropAndResize"], inputs, attrs);
    return res;
}
const cropAndResize = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    cropAndResize_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcF9hbmRfcmVzaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2UvY3JvcF9hbmRfcmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLGFBQWEsRUFBMEMsTUFBTSxvQkFBb0IsQ0FBQztBQUkxRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFFbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUNILFNBQVMsY0FBYyxDQUNuQixLQUEwQixFQUMxQixLQUEwQixFQUMxQixNQUEyQixFQUMzQixRQUEwQixFQUMxQixTQUErQixVQUFVLEVBQ3pDLGtCQUFrQixHQUFHLENBQUM7SUFFeEIsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEUsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNFLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU1RSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpDLElBQUksQ0FBQyxNQUFNLENBQ1AsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQ2pCLEdBQUcsRUFBRSxDQUFDLCtDQUErQztRQUNqRCxnQkFBZ0IsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDMUMsR0FBRyxFQUFFLENBQUMsb0RBQW9ELFFBQVEsTUFBTTtRQUNwRSxpQkFBaUIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFDbkQsR0FBRyxFQUFFLENBQUMscURBQXFELFFBQVEsSUFBSTtRQUNuRSxpQkFBaUIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDckIsR0FBRyxFQUFFLENBQUMsZ0VBQWdFO1FBQ2xFLFVBQVUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3BDLEdBQUcsRUFBRSxDQUFDLDJDQUEyQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQ1AsTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUM3QyxHQUFHLEVBQUUsQ0FBQywrQ0FBK0MsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVuRSxNQUFNLE1BQU0sR0FDYyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDMUUsTUFBTSxLQUFLLEdBQXVCLEVBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBQyxDQUFDO0lBQ3pFLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQ3hCLGFBQWEsRUFBRSxNQUFtQyxFQUNsRCxLQUFnQyxDQUFDLENBQUM7SUFDdEMsT0FBTyxHQUFlLENBQUM7QUFDekIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtFTkdJTkV9IGZyb20gJy4uLy4uL2VuZ2luZSc7XG5pbXBvcnQge0Nyb3BBbmRSZXNpemUsIENyb3BBbmRSZXNpemVBdHRycywgQ3JvcEFuZFJlc2l6ZUlucHV0c30gZnJvbSAnLi4vLi4va2VybmVsX25hbWVzJztcbmltcG9ydCB7TmFtZWRBdHRyTWFwfSBmcm9tICcuLi8uLi9rZXJuZWxfcmVnaXN0cnknO1xuaW1wb3J0IHtUZW5zb3IxRCwgVGVuc29yMkQsIFRlbnNvcjREfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtOYW1lZFRlbnNvck1hcH0gZnJvbSAnLi4vLi4vdGVuc29yX3R5cGVzJztcbmltcG9ydCB7Y29udmVydFRvVGVuc29yfSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbF9lbnYnO1xuaW1wb3J0IHtUZW5zb3JMaWtlfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uLy4uL3V0aWwnO1xuXG5pbXBvcnQge29wfSBmcm9tICcuLi9vcGVyYXRpb24nO1xuXG4vKipcbiAqIEV4dHJhY3RzIGNyb3BzIGZyb20gdGhlIGlucHV0IGltYWdlIHRlbnNvciBhbmQgcmVzaXplcyB0aGVtIHVzaW5nIGJpbGluZWFyXG4gKiBzYW1wbGluZyBvciBuZWFyZXN0IG5laWdoYm9yIHNhbXBsaW5nIChwb3NzaWJseSB3aXRoIGFzcGVjdCByYXRpbyBjaGFuZ2UpXG4gKiB0byBhIGNvbW1vbiBvdXRwdXQgc2l6ZSBzcGVjaWZpZWQgYnkgY3JvcFNpemUuXG4gKlxuICogQHBhcmFtIGltYWdlIDRkIHRlbnNvciBvZiBzaGFwZSBgW2JhdGNoLGltYWdlSGVpZ2h0LGltYWdlV2lkdGgsIGRlcHRoXWAsXG4gKiAgICAgd2hlcmUgaW1hZ2VIZWlnaHQgYW5kIGltYWdlV2lkdGggbXVzdCBiZSBwb3NpdGl2ZSwgc3BlY2lmeWluZyB0aGVcbiAqICAgICBiYXRjaCBvZiBpbWFnZXMgZnJvbSB3aGljaCB0byB0YWtlIGNyb3BzXG4gKiBAcGFyYW0gYm94ZXMgMmQgZmxvYXQzMiB0ZW5zb3Igb2Ygc2hhcGUgYFtudW1Cb3hlcywgNF1gLiBFYWNoIGVudHJ5IGlzXG4gKiAgICAgYFt5MSwgeDEsIHkyLCB4Ml1gLCB3aGVyZSBgKHkxLCB4MSlgIGFuZCBgKHkyLCB4MilgIGFyZSB0aGUgbm9ybWFsaXplZFxuICogICAgIGNvb3JkaW5hdGVzIG9mIHRoZSBib3ggaW4gdGhlIGBib3hJbmRbaV1gdGggaW1hZ2UgaW4gdGhlIGJhdGNoXG4gKiBAcGFyYW0gYm94SW5kIDFkIGludDMyIHRlbnNvciBvZiBzaGFwZSBgW251bUJveGVzXWAgd2l0aCB2YWx1ZXMgaW4gcmFuZ2VcbiAqICAgICBgWzAsIGJhdGNoKWAgdGhhdCBzcGVjaWZpZXMgdGhlIGltYWdlIHRoYXQgdGhlIGBpYC10aCBib3ggcmVmZXJzIHRvLlxuICogQHBhcmFtIGNyb3BTaXplIDFkIGludDMyIHRlbnNvciBvZiAyIGVsZW1lbnRzIGBbY3JvcEhlaWdoLCBjcm9wV2lkdGhdYFxuICogICAgIHNwZWNpZnlpbmcgdGhlIHNpemUgdG8gd2hpY2ggYWxsIGNyb3BzIGFyZSByZXNpemVkIHRvLlxuICogQHBhcmFtIG1ldGhvZCBPcHRpb25hbCBzdHJpbmcgZnJvbSBgJ2JpbGluZWFyJyB8ICduZWFyZXN0J2AsXG4gKiAgICAgZGVmYXVsdHMgdG8gYmlsaW5lYXIsIHdoaWNoIHNwZWNpZmllcyB0aGUgc2FtcGxpbmcgbWV0aG9kIGZvciByZXNpemluZ1xuICogQHBhcmFtIGV4dHJhcG9sYXRpb25WYWx1ZSBBIHRocmVzaG9sZCBmb3IgZGVjaWRpbmcgd2hlbiB0byByZW1vdmUgYm94ZXMgYmFzZWRcbiAqICAgICBvbiBzY29yZS4gRGVmYXVsdHMgdG8gMC5cbiAqIEByZXR1cm4gQSA0RCB0ZW5zb3Igb2YgdGhlIHNoYXBlIGBbbnVtQm94ZXMsY3JvcEhlaWdodCxjcm9wV2lkdGgsZGVwdGhdYFxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdPcGVyYXRpb25zJywgc3ViaGVhZGluZzogJ0ltYWdlcycsIG5hbWVzcGFjZTogJ2ltYWdlJ31cbiAqL1xuZnVuY3Rpb24gY3JvcEFuZFJlc2l6ZV8oXG4gICAgaW1hZ2U6IFRlbnNvcjREfFRlbnNvckxpa2UsXG4gICAgYm94ZXM6IFRlbnNvcjJEfFRlbnNvckxpa2UsXG4gICAgYm94SW5kOiBUZW5zb3IxRHxUZW5zb3JMaWtlLFxuICAgIGNyb3BTaXplOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIG1ldGhvZDogJ2JpbGluZWFyJ3wnbmVhcmVzdCcgPSAnYmlsaW5lYXInLFxuICAgIGV4dHJhcG9sYXRpb25WYWx1ZSA9IDAsXG4gICAgKTogVGVuc29yNEQge1xuICBjb25zdCAkaW1hZ2UgPSBjb252ZXJ0VG9UZW5zb3IoaW1hZ2UsICdpbWFnZScsICdjcm9wQW5kUmVzaXplJyk7XG4gIGNvbnN0ICRib3hlcyA9IGNvbnZlcnRUb1RlbnNvcihib3hlcywgJ2JveGVzJywgJ2Nyb3BBbmRSZXNpemUnLCAnZmxvYXQzMicpO1xuICBjb25zdCAkYm94SW5kID0gY29udmVydFRvVGVuc29yKGJveEluZCwgJ2JveEluZCcsICdjcm9wQW5kUmVzaXplJywgJ2ludDMyJyk7XG5cbiAgY29uc3QgbnVtQm94ZXMgPSAkYm94ZXMuc2hhcGVbMF07XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICAkaW1hZ2UucmFuayA9PT0gNCxcbiAgICAgICgpID0+ICdFcnJvciBpbiBjcm9wQW5kUmVzaXplOiBpbWFnZSBtdXN0IGJlIHJhbmsgNCwnICtcbiAgICAgICAgICBgYnV0IGdvdCByYW5rICR7JGltYWdlLnJhbmt9LmApO1xuICB1dGlsLmFzc2VydChcbiAgICAgICRib3hlcy5yYW5rID09PSAyICYmICRib3hlcy5zaGFwZVsxXSA9PT0gNCxcbiAgICAgICgpID0+IGBFcnJvciBpbiBjcm9wQW5kUmVzaXplOiBib3hlcyBtdXN0IGJlIGhhdmUgc2l6ZSBbJHtudW1Cb3hlc30sNF0gYCArXG4gICAgICAgICAgYGJ1dCBoYWQgc2hhcGUgJHskYm94ZXMuc2hhcGV9LmApO1xuICB1dGlsLmFzc2VydChcbiAgICAgICRib3hJbmQucmFuayA9PT0gMSAmJiAkYm94SW5kLnNoYXBlWzBdID09PSBudW1Cb3hlcyxcbiAgICAgICgpID0+IGBFcnJvciBpbiBjcm9wQW5kUmVzaXplOiBib3hJbmQgbXVzdCBiZSBoYXZlIHNpemUgWyR7bnVtQm94ZXN9XSBgICtcbiAgICAgICAgICBgYnV0IGhhZCBzaGFwZSAkeyRib3hlcy5zaGFwZX0uYCk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgY3JvcFNpemUubGVuZ3RoID09PSAyLFxuICAgICAgKCkgPT4gYEVycm9yIGluIGNyb3BBbmRSZXNpemU6IGNyb3BTaXplIG11c3QgYmUgb2YgbGVuZ3RoIDIsIGJ1dCBnb3QgYCArXG4gICAgICAgICAgYGxlbmd0aCAke2Nyb3BTaXplLmxlbmd0aH0uYCk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgY3JvcFNpemVbMF0gPj0gMSAmJiBjcm9wU2l6ZVsxXSA+PSAxLFxuICAgICAgKCkgPT4gYGNyb3BTaXplIG11c3QgYmUgYXRsZWFzdCBbMSwxXSwgYnV0IHdhcyAke2Nyb3BTaXplfWApO1xuICB1dGlsLmFzc2VydChcbiAgICAgIG1ldGhvZCA9PT0gJ2JpbGluZWFyJyB8fCBtZXRob2QgPT09ICduZWFyZXN0JyxcbiAgICAgICgpID0+IGBtZXRob2QgbXVzdCBiZSBiaWxpbmVhciBvciBuZWFyZXN0LCBidXQgd2FzICR7bWV0aG9kfWApO1xuXG4gIGNvbnN0IGlucHV0czpcbiAgICAgIENyb3BBbmRSZXNpemVJbnB1dHMgPSB7aW1hZ2U6ICRpbWFnZSwgYm94ZXM6ICRib3hlcywgYm94SW5kOiAkYm94SW5kfTtcbiAgY29uc3QgYXR0cnM6IENyb3BBbmRSZXNpemVBdHRycyA9IHttZXRob2QsIGV4dHJhcG9sYXRpb25WYWx1ZSwgY3JvcFNpemV9O1xuICBjb25zdCByZXMgPSBFTkdJTkUucnVuS2VybmVsKFxuICAgICAgQ3JvcEFuZFJlc2l6ZSwgaW5wdXRzIGFzIHVua25vd24gYXMgTmFtZWRUZW5zb3JNYXAsXG4gICAgICBhdHRycyBhcyB1bmtub3duIGFzIE5hbWVkQXR0ck1hcCk7XG4gIHJldHVybiByZXMgYXMgVGVuc29yNEQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcm9wQW5kUmVzaXplID0gLyogQF9fUFVSRV9fICovIG9wKHtjcm9wQW5kUmVzaXplX30pO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/flip_left_right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "flipLeftRight",
    ()=>flipLeftRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Flips the image left to right. Currently available in the CPU, WebGL, and
 * WASM backends.
 *
 * @param image 4d tensor of shape `[batch, imageHeight, imageWidth, depth]`.
 */ /** @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'} */ function flipLeftRight_(image) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'flipLeftRight', 'float32');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank === 4, ()=>'Error in flipLeftRight: image must be rank 4,' + `but got rank ${$image.rank}.`);
    const inputs = {
        image: $image
    };
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlipLeftRight"], inputs, {});
    return res;
}
const flipLeftRight = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    flipLeftRight_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcF9sZWZ0X3JpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2UvZmxpcF9sZWZ0X3JpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLGFBQWEsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVoQzs7Ozs7R0FLRztBQUNILDZFQUE2RTtBQUM3RSxTQUFTLGNBQWMsQ0FBQyxLQUEwQjtJQUNoRCxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFM0UsSUFBSSxDQUFDLE1BQU0sQ0FDUCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsRUFDakIsR0FBRyxFQUFFLENBQUMsK0NBQStDO1FBQ2pELGdCQUFnQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUV4QyxNQUFNLE1BQU0sR0FBd0IsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFDcEQsTUFBTSxHQUFHLEdBQ0wsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBbUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RSxPQUFPLEdBQWUsQ0FBQztBQUN6QixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0VOR0lORX0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7RmxpcExlZnRSaWdodCwgRmxpcExlZnRSaWdodElucHV0c30gZnJvbSAnLi4vLi4va2VybmVsX25hbWVzJztcbmltcG9ydCB7VGVuc29yNER9IGZyb20gJy4uLy4uL3RlbnNvcic7XG5pbXBvcnQge05hbWVkVGVuc29yTWFwfSBmcm9tICcuLi8uLi90ZW5zb3JfdHlwZXMnO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQge29wfSBmcm9tICcuLi9vcGVyYXRpb24nO1xuXG4vKipcbiAqIEZsaXBzIHRoZSBpbWFnZSBsZWZ0IHRvIHJpZ2h0LiBDdXJyZW50bHkgYXZhaWxhYmxlIGluIHRoZSBDUFUsIFdlYkdMLCBhbmRcbiAqIFdBU00gYmFja2VuZHMuXG4gKlxuICogQHBhcmFtIGltYWdlIDRkIHRlbnNvciBvZiBzaGFwZSBgW2JhdGNoLCBpbWFnZUhlaWdodCwgaW1hZ2VXaWR0aCwgZGVwdGhdYC5cbiAqL1xuLyoqIEBkb2Mge2hlYWRpbmc6ICdPcGVyYXRpb25zJywgc3ViaGVhZGluZzogJ0ltYWdlcycsIG5hbWVzcGFjZTogJ2ltYWdlJ30gKi9cbmZ1bmN0aW9uIGZsaXBMZWZ0UmlnaHRfKGltYWdlOiBUZW5zb3I0RHxUZW5zb3JMaWtlKTogVGVuc29yNEQge1xuICBjb25zdCAkaW1hZ2UgPSBjb252ZXJ0VG9UZW5zb3IoaW1hZ2UsICdpbWFnZScsICdmbGlwTGVmdFJpZ2h0JywgJ2Zsb2F0MzInKTtcblxuICB1dGlsLmFzc2VydChcbiAgICAgICRpbWFnZS5yYW5rID09PSA0LFxuICAgICAgKCkgPT4gJ0Vycm9yIGluIGZsaXBMZWZ0UmlnaHQ6IGltYWdlIG11c3QgYmUgcmFuayA0LCcgK1xuICAgICAgICAgIGBidXQgZ290IHJhbmsgJHskaW1hZ2UucmFua30uYCk7XG5cbiAgY29uc3QgaW5wdXRzOiBGbGlwTGVmdFJpZ2h0SW5wdXRzID0ge2ltYWdlOiAkaW1hZ2V9O1xuICBjb25zdCByZXMgPVxuICAgICAgRU5HSU5FLnJ1bktlcm5lbChGbGlwTGVmdFJpZ2h0LCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCwge30pO1xuICByZXR1cm4gcmVzIGFzIFRlbnNvcjREO1xufVxuXG5leHBvcnQgY29uc3QgZmxpcExlZnRSaWdodCA9IC8qIEBfX1BVUkVfXyAqLyBvcCh7ZmxpcExlZnRSaWdodF99KTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/grayscale_to_rgb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "grayscaleToRGB",
    ()=>grayscaleToRGB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tile.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Converts images from grayscale to RGB format.
 *
 * @param image A grayscale tensor to convert. The `image`'s last dimension must
 *     be size 1 with at least a two-dimensional shape.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function grayscaleToRGB_(image) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'grayscaleToRGB');
    const lastDimsIdx = $image.rank - 1;
    const lastDims = $image.shape[lastDimsIdx];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank >= 2, ()=>'Error in grayscaleToRGB: images must be at least rank 2, ' + `but got rank ${$image.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](lastDims === 1, ()=>'Error in grayscaleToRGB: last dimension of a grayscale image ' + `should be size 1, but got size ${lastDims}.`);
    const reps = new Array($image.rank);
    reps.fill(1, 0, lastDimsIdx);
    reps[lastDimsIdx] = 3;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tile"])($image, reps);
}
const grayscaleToRGB = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    grayscaleToRGB_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JheXNjYWxlX3RvX3JnYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL2ltYWdlL2dyYXlzY2FsZV90b19yZ2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBR0gsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUU3Qjs7Ozs7OztHQU9HO0FBQ0gsU0FBUyxlQUFlLENBQ1csS0FBbUI7SUFDcEQsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUVqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNwQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRTNDLElBQUksQ0FBQyxNQUFNLENBQ1AsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQ2hCLEdBQUcsRUFBRSxDQUFDLDJEQUEyRDtRQUM3RCxnQkFBZ0IsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxRQUFRLEtBQUssQ0FBQyxFQUNkLEdBQUcsRUFBRSxDQUFDLCtEQUErRDtRQUNqRSxrQ0FBa0MsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUV2RCxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7VGVuc29yMkQsIFRlbnNvcjNELCBUZW5zb3I0RCwgVGVuc29yNUQsIFRlbnNvcjZEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmltcG9ydCB7b3B9IGZyb20gJy4uL29wZXJhdGlvbic7XG5pbXBvcnQge3RpbGV9IGZyb20gJy4uL3RpbGUnO1xuXG4vKipcbiAqIENvbnZlcnRzIGltYWdlcyBmcm9tIGdyYXlzY2FsZSB0byBSR0IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSBpbWFnZSBBIGdyYXlzY2FsZSB0ZW5zb3IgdG8gY29udmVydC4gVGhlIGBpbWFnZWAncyBsYXN0IGRpbWVuc2lvbiBtdXN0XG4gKiAgICAgYmUgc2l6ZSAxIHdpdGggYXQgbGVhc3QgYSB0d28tZGltZW5zaW9uYWwgc2hhcGUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ09wZXJhdGlvbnMnLCBzdWJoZWFkaW5nOiAnSW1hZ2VzJywgbmFtZXNwYWNlOiAnaW1hZ2UnfVxuICovXG5mdW5jdGlvbiBncmF5c2NhbGVUb1JHQl88VCBleHRlbmRzIFRlbnNvcjJEfFRlbnNvcjNEfFRlbnNvcjREfFRlbnNvcjVEfFxuICAgICAgICAgICAgICAgICAgICAgICAgIFRlbnNvcjZEPihpbWFnZTogVHxUZW5zb3JMaWtlKTogVCB7XG4gIGNvbnN0ICRpbWFnZSA9IGNvbnZlcnRUb1RlbnNvcihpbWFnZSwgJ2ltYWdlJywgJ2dyYXlzY2FsZVRvUkdCJyk7XG5cbiAgY29uc3QgbGFzdERpbXNJZHggPSAkaW1hZ2UucmFuayAtIDE7XG4gIGNvbnN0IGxhc3REaW1zID0gJGltYWdlLnNoYXBlW2xhc3REaW1zSWR4XTtcblxuICB1dGlsLmFzc2VydChcbiAgICAgICRpbWFnZS5yYW5rID49IDIsXG4gICAgICAoKSA9PiAnRXJyb3IgaW4gZ3JheXNjYWxlVG9SR0I6IGltYWdlcyBtdXN0IGJlIGF0IGxlYXN0IHJhbmsgMiwgJyArXG4gICAgICAgICAgYGJ1dCBnb3QgcmFuayAkeyRpbWFnZS5yYW5rfS5gKTtcblxuICB1dGlsLmFzc2VydChcbiAgICAgIGxhc3REaW1zID09PSAxLFxuICAgICAgKCkgPT4gJ0Vycm9yIGluIGdyYXlzY2FsZVRvUkdCOiBsYXN0IGRpbWVuc2lvbiBvZiBhIGdyYXlzY2FsZSBpbWFnZSAnICtcbiAgICAgICAgICBgc2hvdWxkIGJlIHNpemUgMSwgYnV0IGdvdCBzaXplICR7bGFzdERpbXN9LmApO1xuXG4gIGNvbnN0IHJlcHMgPSBuZXcgQXJyYXkoJGltYWdlLnJhbmspO1xuXG4gIHJlcHMuZmlsbCgxLCAwLCBsYXN0RGltc0lkeCk7XG4gIHJlcHNbbGFzdERpbXNJZHhdID0gMztcblxuICByZXR1cm4gdGlsZSgkaW1hZ2UsIHJlcHMpO1xufVxuXG5leHBvcnQgY29uc3QgZ3JheXNjYWxlVG9SR0IgPSAvKiBAX19QVVJFX18gKi8gb3Aoe2dyYXlzY2FsZVRvUkdCX30pO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/rgb_to_grayscale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "rgbToGrayscale",
    ()=>rgbToGrayscale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$einsum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/einsum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/expand_dims.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/**
 * Converts images from RGB format to grayscale.
 *
 * @param image A RGB tensor to convert. The `image`'s last dimension must
 *     be size 3 with at least a two-dimensional shape.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function rgbToGrayscale_(image) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'RGBToGrayscale');
    const lastDimsIdx = $image.rank - 1;
    const lastDims = $image.shape[lastDimsIdx];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank >= 2, ()=>'Error in RGBToGrayscale: images must be at least rank 2, ' + `but got rank ${$image.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](lastDims === 3, ()=>'Error in RGBToGrayscale: last dimension of an RGB image ' + `should be size 3, but got size ${lastDims}.`);
    // Remember original dtype so we can convert back if needed
    const origDtype = $image.dtype;
    const fltImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])($image, 'float32');
    const rgbWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
        0.2989,
        0.5870,
        0.1140
    ]);
    let grayFloat;
    switch($image.rank){
        case 2:
            grayFloat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$einsum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["einsum"])('ij,j->i', fltImage, rgbWeights);
            break;
        case 3:
            grayFloat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$einsum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["einsum"])('ijk,k->ij', fltImage, rgbWeights);
            break;
        case 4:
            grayFloat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$einsum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["einsum"])('ijkl,l->ijk', fltImage, rgbWeights);
            break;
        case 5:
            grayFloat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$einsum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["einsum"])('ijklm,m->ijkl', fltImage, rgbWeights);
            break;
        case 6:
            grayFloat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$einsum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["einsum"])('ijklmn,n->ijklm', fltImage, rgbWeights);
            break;
        default:
            throw new Error('Not a valid tensor rank.');
    }
    grayFloat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$expand_dims$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"])(grayFloat, -1);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])(grayFloat, origDtype);
}
const rgbToGrayscale = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    rgbToGrayscale_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmdiX3RvX2dyYXlzY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL2ltYWdlL3JnYl90b19ncmF5c2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBR0gsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDN0IsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNoQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXJDOzs7Ozs7O0dBT0c7QUFDSCxTQUFTLGVBQWUsQ0FDVyxLQUFtQjtJQUNwRCxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFM0MsSUFBSSxDQUFDLE1BQU0sQ0FDUCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsRUFDaEIsR0FBRyxFQUFFLENBQUMsMkRBQTJEO1FBQzdELGdCQUFnQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUV4QyxJQUFJLENBQUMsTUFBTSxDQUNQLFFBQVEsS0FBSyxDQUFDLEVBQ2QsR0FBRyxFQUFFLENBQUMsMERBQTBEO1FBQzVELGtDQUFrQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRXZELDJEQUEyRDtJQUMzRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFekMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXRELElBQUksU0FBUyxDQUFDO0lBQ2QsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssQ0FBQztZQUNKLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRCxNQUFNO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELE1BQU07UUFDUixLQUFLLENBQUM7WUFDSixTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDeEQsTUFBTTtRQUNSLEtBQUssQ0FBQztZQUNKLFNBQVMsR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMxRCxNQUFNO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUQsTUFBTTtRQUNSO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQy9DO0lBQ0QsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV0QyxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFNLENBQUM7QUFDekMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTEMuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtUZW5zb3IyRCwgVGVuc29yM0QsIFRlbnNvcjRELCBUZW5zb3I1RCwgVGVuc29yNkR9IGZyb20gJy4uLy4uL3RlbnNvcic7XG5pbXBvcnQge2NvbnZlcnRUb1RlbnNvcn0gZnJvbSAnLi4vLi4vdGVuc29yX3V0aWxfZW52JztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7Y2FzdH0gZnJvbSAnLi4vY2FzdCc7XG5pbXBvcnQge2VpbnN1bX0gZnJvbSAnLi4vZWluc3VtJztcbmltcG9ydCB7ZXhwYW5kRGltc30gZnJvbSAnLi4vZXhwYW5kX2RpbXMnO1xuaW1wb3J0IHtvcH0gZnJvbSAnLi4vb3BlcmF0aW9uJztcbmltcG9ydCB7dGVuc29yMWR9IGZyb20gJy4uL3RlbnNvcjFkJztcblxuLyoqXG4gKiBDb252ZXJ0cyBpbWFnZXMgZnJvbSBSR0IgZm9ybWF0IHRvIGdyYXlzY2FsZS5cbiAqXG4gKiBAcGFyYW0gaW1hZ2UgQSBSR0IgdGVuc29yIHRvIGNvbnZlcnQuIFRoZSBgaW1hZ2VgJ3MgbGFzdCBkaW1lbnNpb24gbXVzdFxuICogICAgIGJlIHNpemUgMyB3aXRoIGF0IGxlYXN0IGEgdHdvLWRpbWVuc2lvbmFsIHNoYXBlLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdPcGVyYXRpb25zJywgc3ViaGVhZGluZzogJ0ltYWdlcycsIG5hbWVzcGFjZTogJ2ltYWdlJ31cbiAqL1xuZnVuY3Rpb24gcmdiVG9HcmF5c2NhbGVfPFQgZXh0ZW5kcyBUZW5zb3IyRHxUZW5zb3IzRHxUZW5zb3I0RHxUZW5zb3I1RHxcbiAgICAgICAgICAgICAgICAgICAgICAgICBUZW5zb3I2RD4oaW1hZ2U6IFR8VGVuc29yTGlrZSk6IFQge1xuICBjb25zdCAkaW1hZ2UgPSBjb252ZXJ0VG9UZW5zb3IoaW1hZ2UsICdpbWFnZScsICdSR0JUb0dyYXlzY2FsZScpO1xuXG4gIGNvbnN0IGxhc3REaW1zSWR4ID0gJGltYWdlLnJhbmsgLSAxO1xuICBjb25zdCBsYXN0RGltcyA9ICRpbWFnZS5zaGFwZVtsYXN0RGltc0lkeF07XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICAkaW1hZ2UucmFuayA+PSAyLFxuICAgICAgKCkgPT4gJ0Vycm9yIGluIFJHQlRvR3JheXNjYWxlOiBpbWFnZXMgbXVzdCBiZSBhdCBsZWFzdCByYW5rIDIsICcgK1xuICAgICAgICAgIGBidXQgZ290IHJhbmsgJHskaW1hZ2UucmFua30uYCk7XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICBsYXN0RGltcyA9PT0gMyxcbiAgICAgICgpID0+ICdFcnJvciBpbiBSR0JUb0dyYXlzY2FsZTogbGFzdCBkaW1lbnNpb24gb2YgYW4gUkdCIGltYWdlICcgK1xuICAgICAgICAgIGBzaG91bGQgYmUgc2l6ZSAzLCBidXQgZ290IHNpemUgJHtsYXN0RGltc30uYCk7XG5cbiAgLy8gUmVtZW1iZXIgb3JpZ2luYWwgZHR5cGUgc28gd2UgY2FuIGNvbnZlcnQgYmFjayBpZiBuZWVkZWRcbiAgY29uc3Qgb3JpZ0R0eXBlID0gJGltYWdlLmR0eXBlO1xuICBjb25zdCBmbHRJbWFnZSA9IGNhc3QoJGltYWdlLCAnZmxvYXQzMicpO1xuXG4gIGNvbnN0IHJnYldlaWdodHMgPSB0ZW5zb3IxZChbMC4yOTg5LCAwLjU4NzAsIDAuMTE0MF0pO1xuXG4gIGxldCBncmF5RmxvYXQ7XG4gIHN3aXRjaCAoJGltYWdlLnJhbmspIHtcbiAgICBjYXNlIDI6XG4gICAgICBncmF5RmxvYXQgPSBlaW5zdW0oJ2lqLGotPmknLCBmbHRJbWFnZSwgcmdiV2VpZ2h0cyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBncmF5RmxvYXQgPSBlaW5zdW0oJ2lqayxrLT5paicsIGZsdEltYWdlLCByZ2JXZWlnaHRzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGdyYXlGbG9hdCA9IGVpbnN1bSgnaWprbCxsLT5pamsnLCBmbHRJbWFnZSwgcmdiV2VpZ2h0cyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBncmF5RmxvYXQgPSBlaW5zdW0oJ2lqa2xtLG0tPmlqa2wnLCBmbHRJbWFnZSwgcmdiV2VpZ2h0cyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBncmF5RmxvYXQgPSBlaW5zdW0oJ2lqa2xtbixuLT5pamtsbScsIGZsdEltYWdlLCByZ2JXZWlnaHRzKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIHRlbnNvciByYW5rLicpO1xuICB9XG4gIGdyYXlGbG9hdCA9IGV4cGFuZERpbXMoZ3JheUZsb2F0LCAtMSk7XG5cbiAgcmV0dXJuIGNhc3QoZ3JheUZsb2F0LCBvcmlnRHR5cGUpIGFzIFQ7XG59XG5cbmV4cG9ydCBjb25zdCByZ2JUb0dyYXlzY2FsZSA9IC8qIEBfX1BVUkVfXyAqLyBvcCh7cmdiVG9HcmF5c2NhbGVffSk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/rotate_with_offset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "rotateWithOffset",
    ()=>rotateWithOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Rotates the input image tensor counter-clockwise with an optional offset
 * center of rotation. Currently available in the CPU, WebGL, and WASM backends.
 *
 * @param image 4d tensor of shape `[batch, imageHeight, imageWidth, depth]`.
 * @param radians The amount of rotation.
 * @param fillValue The value to fill in the empty space leftover
 *     after rotation. Can be either a single grayscale value (0-255), or an
 *     array of three numbers `[red, green, blue]` specifying the red, green,
 *     and blue channels. Defaults to `0` (black).
 * @param center The center of rotation. Can be either a single value (0-1), or
 *     an array of two numbers `[centerX, centerY]`. Defaults to `0.5` (rotates
 *     the image around its center).
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function rotateWithOffset_(image, radians, fillValue = 0, center = 0.5) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'rotateWithOffset', 'float32');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank === 4, ()=>'Error in rotateWithOffset: image must be rank 4,' + `but got rank ${$image.rank}.`);
    const inputs = {
        image: $image
    };
    const attrs = {
        radians,
        fillValue,
        center
    };
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RotateWithOffset"], inputs, attrs);
    return res;
}
const rotateWithOffset = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    rotateWithOffset_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlX3dpdGhfb2Zmc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2Uvcm90YXRlX3dpdGhfb2Zmc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLGdCQUFnQixFQUFnRCxNQUFNLG9CQUFvQixDQUFDO0FBSW5HLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RCxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUVuQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRWhDOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILFNBQVMsaUJBQWlCLENBQ3RCLEtBQTBCLEVBQUUsT0FBZSxFQUMzQyxZQUE2QyxDQUFDLEVBQzlDLFNBQWtDLEdBQUc7SUFDdkMsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFOUUsSUFBSSxDQUFDLE1BQU0sQ0FDUCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsRUFDakIsR0FBRyxFQUFFLENBQUMsa0RBQWtEO1FBQ3BELGdCQUFnQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUV4QyxNQUFNLE1BQU0sR0FBMkIsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFDdkQsTUFBTSxLQUFLLEdBQTBCLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUNsRSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUN4QixnQkFBZ0IsRUFBRSxNQUFtQyxFQUNyRCxLQUFnQyxDQUFDLENBQUM7SUFDdEMsT0FBTyxHQUFlLENBQUM7QUFDekIsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RU5HSU5FfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHtSb3RhdGVXaXRoT2Zmc2V0LCBSb3RhdGVXaXRoT2Zmc2V0QXR0cnMsIFJvdGF0ZVdpdGhPZmZzZXRJbnB1dHN9IGZyb20gJy4uLy4uL2tlcm5lbF9uYW1lcyc7XG5pbXBvcnQge05hbWVkQXR0ck1hcH0gZnJvbSAnLi4vLi4va2VybmVsX3JlZ2lzdHJ5JztcbmltcG9ydCB7VGVuc29yNER9IGZyb20gJy4uLy4uL3RlbnNvcic7XG5pbXBvcnQge05hbWVkVGVuc29yTWFwfSBmcm9tICcuLi8uLi90ZW5zb3JfdHlwZXMnO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmltcG9ydCB7b3B9IGZyb20gJy4uL29wZXJhdGlvbic7XG5cbi8qKlxuICogUm90YXRlcyB0aGUgaW5wdXQgaW1hZ2UgdGVuc29yIGNvdW50ZXItY2xvY2t3aXNlIHdpdGggYW4gb3B0aW9uYWwgb2Zmc2V0XG4gKiBjZW50ZXIgb2Ygcm90YXRpb24uIEN1cnJlbnRseSBhdmFpbGFibGUgaW4gdGhlIENQVSwgV2ViR0wsIGFuZCBXQVNNIGJhY2tlbmRzLlxuICpcbiAqIEBwYXJhbSBpbWFnZSA0ZCB0ZW5zb3Igb2Ygc2hhcGUgYFtiYXRjaCwgaW1hZ2VIZWlnaHQsIGltYWdlV2lkdGgsIGRlcHRoXWAuXG4gKiBAcGFyYW0gcmFkaWFucyBUaGUgYW1vdW50IG9mIHJvdGF0aW9uLlxuICogQHBhcmFtIGZpbGxWYWx1ZSBUaGUgdmFsdWUgdG8gZmlsbCBpbiB0aGUgZW1wdHkgc3BhY2UgbGVmdG92ZXJcbiAqICAgICBhZnRlciByb3RhdGlvbi4gQ2FuIGJlIGVpdGhlciBhIHNpbmdsZSBncmF5c2NhbGUgdmFsdWUgKDAtMjU1KSwgb3IgYW5cbiAqICAgICBhcnJheSBvZiB0aHJlZSBudW1iZXJzIGBbcmVkLCBncmVlbiwgYmx1ZV1gIHNwZWNpZnlpbmcgdGhlIHJlZCwgZ3JlZW4sXG4gKiAgICAgYW5kIGJsdWUgY2hhbm5lbHMuIERlZmF1bHRzIHRvIGAwYCAoYmxhY2spLlxuICogQHBhcmFtIGNlbnRlciBUaGUgY2VudGVyIG9mIHJvdGF0aW9uLiBDYW4gYmUgZWl0aGVyIGEgc2luZ2xlIHZhbHVlICgwLTEpLCBvclxuICogICAgIGFuIGFycmF5IG9mIHR3byBudW1iZXJzIGBbY2VudGVyWCwgY2VudGVyWV1gLiBEZWZhdWx0cyB0byBgMC41YCAocm90YXRlc1xuICogICAgIHRoZSBpbWFnZSBhcm91bmQgaXRzIGNlbnRlcikuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ09wZXJhdGlvbnMnLCBzdWJoZWFkaW5nOiAnSW1hZ2VzJywgbmFtZXNwYWNlOiAnaW1hZ2UnfVxuICovXG5mdW5jdGlvbiByb3RhdGVXaXRoT2Zmc2V0XyhcbiAgICBpbWFnZTogVGVuc29yNER8VGVuc29yTGlrZSwgcmFkaWFuczogbnVtYmVyLFxuICAgIGZpbGxWYWx1ZTogbnVtYmVyfFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9IDAsXG4gICAgY2VudGVyOiBudW1iZXJ8W251bWJlciwgbnVtYmVyXSA9IDAuNSk6IFRlbnNvcjREIHtcbiAgY29uc3QgJGltYWdlID0gY29udmVydFRvVGVuc29yKGltYWdlLCAnaW1hZ2UnLCAncm90YXRlV2l0aE9mZnNldCcsICdmbG9hdDMyJyk7XG5cbiAgdXRpbC5hc3NlcnQoXG4gICAgICAkaW1hZ2UucmFuayA9PT0gNCxcbiAgICAgICgpID0+ICdFcnJvciBpbiByb3RhdGVXaXRoT2Zmc2V0OiBpbWFnZSBtdXN0IGJlIHJhbmsgNCwnICtcbiAgICAgICAgICBgYnV0IGdvdCByYW5rICR7JGltYWdlLnJhbmt9LmApO1xuXG4gIGNvbnN0IGlucHV0czogUm90YXRlV2l0aE9mZnNldElucHV0cyA9IHtpbWFnZTogJGltYWdlfTtcbiAgY29uc3QgYXR0cnM6IFJvdGF0ZVdpdGhPZmZzZXRBdHRycyA9IHtyYWRpYW5zLCBmaWxsVmFsdWUsIGNlbnRlcn07XG4gIGNvbnN0IHJlcyA9IEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICBSb3RhdGVXaXRoT2Zmc2V0LCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCxcbiAgICAgIGF0dHJzIGFzIHVua25vd24gYXMgTmFtZWRBdHRyTWFwKTtcbiAgcmV0dXJuIHJlcyBhcyBUZW5zb3I0RDtcbn1cblxuZXhwb3J0IGNvbnN0IHJvdGF0ZVdpdGhPZmZzZXQgPSAvKiBAX19QVVJFX18gKi8gb3Aoe3JvdGF0ZVdpdGhPZmZzZXRffSk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppression",
    ()=>nonMaxSuppression
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @return A 1D tensor with the selected box indices.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function nonMaxSuppression_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'nonMaxSuppression', 'float32');
    const $scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(scores, 'scores', 'nonMaxSuppression', 'float32');
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppSanityCheck"])($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
    maxOutputSize = inputs.maxOutputSize;
    iouThreshold = inputs.iouThreshold;
    scoreThreshold = inputs.scoreThreshold;
    const attrs = {
        maxOutputSize,
        iouThreshold,
        scoreThreshold
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonMaxSuppressionV3"], {
        boxes: $boxes,
        scores: $scores
    }, attrs);
}
const nonMaxSuppression = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    nonMaxSuppression_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL2ltYWdlL25vbl9tYXhfc3VwcHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxTQUFTLGtCQUFrQixDQUN2QixLQUEwQixFQUFFLE1BQTJCLEVBQ3ZELGFBQXFCLEVBQUUsWUFBWSxHQUFHLEdBQUcsRUFDekMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUI7SUFDM0MsTUFBTSxNQUFNLEdBQ1IsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEUsTUFBTSxPQUFPLEdBQ1QsZUFBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFdEUsTUFBTSxNQUFNLEdBQUcscUJBQXFCLENBQ2hDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRSxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNyQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUV2QyxNQUFNLEtBQUssR0FBRyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFDLENBQUM7SUFDNUQsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUNuQixtQkFBbUIsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0VOR0lORX0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7Tm9uTWF4U3VwcHJlc3Npb25WM30gZnJvbSAnLi4vLi4va2VybmVsX25hbWVzJztcbmltcG9ydCB7VGVuc29yMUQsIFRlbnNvcjJEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7bm9uTWF4U3VwcFNhbml0eUNoZWNrfSBmcm9tICcuLi9ub25tYXhfdXRpbCc7XG5pbXBvcnQge29wfSBmcm9tICcuLi9vcGVyYXRpb24nO1xuXG4vKipcbiAqIFBlcmZvcm1zIG5vbiBtYXhpbXVtIHN1cHByZXNzaW9uIG9mIGJvdW5kaW5nIGJveGVzIGJhc2VkIG9uXG4gKiBpb3UgKGludGVyc2VjdGlvbiBvdmVyIHVuaW9uKS5cbiAqXG4gKiBAcGFyYW0gYm94ZXMgYSAyZCB0ZW5zb3Igb2Ygc2hhcGUgYFtudW1Cb3hlcywgNF1gLiBFYWNoIGVudHJ5IGlzXG4gKiAgICAgYFt5MSwgeDEsIHkyLCB4Ml1gLCB3aGVyZSBgKHkxLCB4MSlgIGFuZCBgKHkyLCB4MilgIGFyZSB0aGUgY29ybmVycyBvZlxuICogICAgIHRoZSBib3VuZGluZyBib3guXG4gKiBAcGFyYW0gc2NvcmVzIGEgMWQgdGVuc29yIHByb3ZpZGluZyB0aGUgYm94IHNjb3JlcyBvZiBzaGFwZSBgW251bUJveGVzXWAuXG4gKiBAcGFyYW0gbWF4T3V0cHV0U2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYm94ZXMgdG8gYmUgc2VsZWN0ZWQuXG4gKiBAcGFyYW0gaW91VGhyZXNob2xkIEEgZmxvYXQgcmVwcmVzZW50aW5nIHRoZSB0aHJlc2hvbGQgZm9yIGRlY2lkaW5nIHdoZXRoZXJcbiAqICAgICBib3hlcyBvdmVybGFwIHRvbyBtdWNoIHdpdGggcmVzcGVjdCB0byBJT1UuIE11c3QgYmUgYmV0d2VlbiBbMCwgMV0uXG4gKiAgICAgRGVmYXVsdHMgdG8gMC41ICg1MCUgYm94IG92ZXJsYXApLlxuICogQHBhcmFtIHNjb3JlVGhyZXNob2xkIEEgdGhyZXNob2xkIGZvciBkZWNpZGluZyB3aGVuIHRvIHJlbW92ZSBib3hlcyBiYXNlZFxuICogICAgIG9uIHNjb3JlLiBEZWZhdWx0cyB0byAtaW5mLCB3aGljaCBtZWFucyBhbnkgc2NvcmUgaXMgYWNjZXB0ZWQuXG4gKiBAcmV0dXJuIEEgMUQgdGVuc29yIHdpdGggdGhlIHNlbGVjdGVkIGJveCBpbmRpY2VzLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdPcGVyYXRpb25zJywgc3ViaGVhZGluZzogJ0ltYWdlcycsIG5hbWVzcGFjZTogJ2ltYWdlJ31cbiAqL1xuZnVuY3Rpb24gbm9uTWF4U3VwcHJlc3Npb25fKFxuICAgIGJveGVzOiBUZW5zb3IyRHxUZW5zb3JMaWtlLCBzY29yZXM6IFRlbnNvcjFEfFRlbnNvckxpa2UsXG4gICAgbWF4T3V0cHV0U2l6ZTogbnVtYmVyLCBpb3VUaHJlc2hvbGQgPSAwLjUsXG4gICAgc2NvcmVUaHJlc2hvbGQgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpOiBUZW5zb3IxRCB7XG4gIGNvbnN0ICRib3hlcyA9XG4gICAgICBjb252ZXJ0VG9UZW5zb3IoYm94ZXMsICdib3hlcycsICdub25NYXhTdXBwcmVzc2lvbicsICdmbG9hdDMyJyk7XG4gIGNvbnN0ICRzY29yZXMgPVxuICAgICAgY29udmVydFRvVGVuc29yKHNjb3JlcywgJ3Njb3JlcycsICdub25NYXhTdXBwcmVzc2lvbicsICdmbG9hdDMyJyk7XG5cbiAgY29uc3QgaW5wdXRzID0gbm9uTWF4U3VwcFNhbml0eUNoZWNrKFxuICAgICAgJGJveGVzLCAkc2NvcmVzLCBtYXhPdXRwdXRTaXplLCBpb3VUaHJlc2hvbGQsIHNjb3JlVGhyZXNob2xkKTtcbiAgbWF4T3V0cHV0U2l6ZSA9IGlucHV0cy5tYXhPdXRwdXRTaXplO1xuICBpb3VUaHJlc2hvbGQgPSBpbnB1dHMuaW91VGhyZXNob2xkO1xuICBzY29yZVRocmVzaG9sZCA9IGlucHV0cy5zY29yZVRocmVzaG9sZDtcblxuICBjb25zdCBhdHRycyA9IHttYXhPdXRwdXRTaXplLCBpb3VUaHJlc2hvbGQsIHNjb3JlVGhyZXNob2xkfTtcbiAgcmV0dXJuIEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICBOb25NYXhTdXBwcmVzc2lvblYzLCB7Ym94ZXM6ICRib3hlcywgc2NvcmVzOiAkc2NvcmVzfSwgYXR0cnMpO1xufVxuXG5leHBvcnQgY29uc3Qgbm9uTWF4U3VwcHJlc3Npb24gPSAvKiBAX19QVVJFX18gKi8gb3Aoe25vbk1heFN1cHByZXNzaW9uX30pO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_async.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppressionAsync",
    ()=>nonMaxSuppressionAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * This is the async version of `nonMaxSuppression`
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @return A 1D tensor with the selected box indices.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ async function nonMaxSuppressionAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY) {
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'nonMaxSuppressionAsync');
    const $scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(scores, 'scores', 'nonMaxSuppressionAsync');
    const inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppSanityCheck"])($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold);
    maxOutputSize = inputs.maxOutputSize;
    iouThreshold = inputs.iouThreshold;
    scoreThreshold = inputs.scoreThreshold;
    const boxesAndScores = await Promise.all([
        $boxes.data(),
        $scores.data()
    ]);
    const boxesVals = boxesAndScores[0];
    const scoresVals = boxesAndScores[1];
    // We call a cpu based impl directly with the typedarray data  here rather
    // than a kernel because all kernels are synchronous (and thus cannot await
    // .data()).
    const { selectedIndices } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppressionV3Impl"])(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold);
    if ($boxes !== boxes) {
        $boxes.dispose();
    }
    if ($scores !== scores) {
        $scores.dispose();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])(selectedIndices, 'int32');
}
const nonMaxSuppressionAsync = nonMaxSuppressionAsync_; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl9hc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL2ltYWdlL25vbl9tYXhfc3VwcHJlc3Npb25fYXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFaEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxLQUFLLFVBQVUsdUJBQXVCLENBQ2xDLEtBQTBCLEVBQUUsTUFBMkIsRUFDdkQsYUFBcUIsRUFBRSxZQUFZLEdBQUcsR0FBRyxFQUN6QyxjQUFjLEdBQUcsTUFBTSxDQUFDLGlCQUFpQjtJQUMzQyxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFFNUUsTUFBTSxNQUFNLEdBQUcscUJBQXFCLENBQ2hDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRSxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNyQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUV2QyxNQUFNLGNBQWMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJDLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLE1BQU0sRUFBQyxlQUFlLEVBQUMsR0FBRyx1QkFBdUIsQ0FDN0MsU0FBUyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbEI7SUFDRCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7UUFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsT0FBTyxRQUFRLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtub25NYXhTdXBwcmVzc2lvblYzSW1wbH0gZnJvbSAnLi4vLi4vYmFja2VuZHMvbm9uX21heF9zdXBwcmVzc2lvbl9pbXBsJztcbmltcG9ydCB7VGVuc29yMUQsIFRlbnNvcjJEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7bm9uTWF4U3VwcFNhbml0eUNoZWNrfSBmcm9tICcuLi9ub25tYXhfdXRpbCc7XG5pbXBvcnQge3RlbnNvcjFkfSBmcm9tICcuLi90ZW5zb3IxZCc7XG5cbi8qKlxuICogUGVyZm9ybXMgbm9uIG1heGltdW0gc3VwcHJlc3Npb24gb2YgYm91bmRpbmcgYm94ZXMgYmFzZWQgb25cbiAqIGlvdSAoaW50ZXJzZWN0aW9uIG92ZXIgdW5pb24pLlxuICpcbiAqIFRoaXMgaXMgdGhlIGFzeW5jIHZlcnNpb24gb2YgYG5vbk1heFN1cHByZXNzaW9uYFxuICpcbiAqIEBwYXJhbSBib3hlcyBhIDJkIHRlbnNvciBvZiBzaGFwZSBgW251bUJveGVzLCA0XWAuIEVhY2ggZW50cnkgaXNcbiAqICAgICBgW3kxLCB4MSwgeTIsIHgyXWAsIHdoZXJlIGAoeTEsIHgxKWAgYW5kIGAoeTIsIHgyKWAgYXJlIHRoZSBjb3JuZXJzIG9mXG4gKiAgICAgdGhlIGJvdW5kaW5nIGJveC5cbiAqIEBwYXJhbSBzY29yZXMgYSAxZCB0ZW5zb3IgcHJvdmlkaW5nIHRoZSBib3ggc2NvcmVzIG9mIHNoYXBlIGBbbnVtQm94ZXNdYC5cbiAqIEBwYXJhbSBtYXhPdXRwdXRTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBib3hlcyB0byBiZSBzZWxlY3RlZC5cbiAqIEBwYXJhbSBpb3VUaHJlc2hvbGQgQSBmbG9hdCByZXByZXNlbnRpbmcgdGhlIHRocmVzaG9sZCBmb3IgZGVjaWRpbmcgd2hldGhlclxuICogICAgIGJveGVzIG92ZXJsYXAgdG9vIG11Y2ggd2l0aCByZXNwZWN0IHRvIElPVS4gTXVzdCBiZSBiZXR3ZWVuIFswLCAxXS5cbiAqICAgICBEZWZhdWx0cyB0byAwLjUgKDUwJSBib3ggb3ZlcmxhcCkuXG4gKiBAcGFyYW0gc2NvcmVUaHJlc2hvbGQgQSB0aHJlc2hvbGQgZm9yIGRlY2lkaW5nIHdoZW4gdG8gcmVtb3ZlIGJveGVzIGJhc2VkXG4gKiAgICAgb24gc2NvcmUuIERlZmF1bHRzIHRvIC1pbmYsIHdoaWNoIG1lYW5zIGFueSBzY29yZSBpcyBhY2NlcHRlZC5cbiAqIEByZXR1cm4gQSAxRCB0ZW5zb3Igd2l0aCB0aGUgc2VsZWN0ZWQgYm94IGluZGljZXMuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ09wZXJhdGlvbnMnLCBzdWJoZWFkaW5nOiAnSW1hZ2VzJywgbmFtZXNwYWNlOiAnaW1hZ2UnfVxuICovXG5hc3luYyBmdW5jdGlvbiBub25NYXhTdXBwcmVzc2lvbkFzeW5jXyhcbiAgICBib3hlczogVGVuc29yMkR8VGVuc29yTGlrZSwgc2NvcmVzOiBUZW5zb3IxRHxUZW5zb3JMaWtlLFxuICAgIG1heE91dHB1dFNpemU6IG51bWJlciwgaW91VGhyZXNob2xkID0gMC41LFxuICAgIHNjb3JlVGhyZXNob2xkID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZKTogUHJvbWlzZTxUZW5zb3IxRD4ge1xuICBjb25zdCAkYm94ZXMgPSBjb252ZXJ0VG9UZW5zb3IoYm94ZXMsICdib3hlcycsICdub25NYXhTdXBwcmVzc2lvbkFzeW5jJyk7XG4gIGNvbnN0ICRzY29yZXMgPSBjb252ZXJ0VG9UZW5zb3Ioc2NvcmVzLCAnc2NvcmVzJywgJ25vbk1heFN1cHByZXNzaW9uQXN5bmMnKTtcblxuICBjb25zdCBpbnB1dHMgPSBub25NYXhTdXBwU2FuaXR5Q2hlY2soXG4gICAgICAkYm94ZXMsICRzY29yZXMsIG1heE91dHB1dFNpemUsIGlvdVRocmVzaG9sZCwgc2NvcmVUaHJlc2hvbGQpO1xuICBtYXhPdXRwdXRTaXplID0gaW5wdXRzLm1heE91dHB1dFNpemU7XG4gIGlvdVRocmVzaG9sZCA9IGlucHV0cy5pb3VUaHJlc2hvbGQ7XG4gIHNjb3JlVGhyZXNob2xkID0gaW5wdXRzLnNjb3JlVGhyZXNob2xkO1xuXG4gIGNvbnN0IGJveGVzQW5kU2NvcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoWyRib3hlcy5kYXRhKCksICRzY29yZXMuZGF0YSgpXSk7XG4gIGNvbnN0IGJveGVzVmFscyA9IGJveGVzQW5kU2NvcmVzWzBdO1xuICBjb25zdCBzY29yZXNWYWxzID0gYm94ZXNBbmRTY29yZXNbMV07XG5cbiAgLy8gV2UgY2FsbCBhIGNwdSBiYXNlZCBpbXBsIGRpcmVjdGx5IHdpdGggdGhlIHR5cGVkYXJyYXkgZGF0YSAgaGVyZSByYXRoZXJcbiAgLy8gdGhhbiBhIGtlcm5lbCBiZWNhdXNlIGFsbCBrZXJuZWxzIGFyZSBzeW5jaHJvbm91cyAoYW5kIHRodXMgY2Fubm90IGF3YWl0XG4gIC8vIC5kYXRhKCkpLlxuICBjb25zdCB7c2VsZWN0ZWRJbmRpY2VzfSA9IG5vbk1heFN1cHByZXNzaW9uVjNJbXBsKFxuICAgICAgYm94ZXNWYWxzLCBzY29yZXNWYWxzLCBtYXhPdXRwdXRTaXplLCBpb3VUaHJlc2hvbGQsIHNjb3JlVGhyZXNob2xkKTtcbiAgaWYgKCRib3hlcyAhPT0gYm94ZXMpIHtcbiAgICAkYm94ZXMuZGlzcG9zZSgpO1xuICB9XG4gIGlmICgkc2NvcmVzICE9PSBzY29yZXMpIHtcbiAgICAkc2NvcmVzLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHJldHVybiB0ZW5zb3IxZChzZWxlY3RlZEluZGljZXMsICdpbnQzMicpO1xufVxuXG5leHBvcnQgY29uc3Qgbm9uTWF4U3VwcHJlc3Npb25Bc3luYyA9IG5vbk1heFN1cHByZXNzaW9uQXN5bmNfO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppressionWithScore",
    ()=>nonMaxSuppressionWithScore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * This op also supports a Soft-NMS mode (cf.
 * Bodla et al, https://arxiv.org/abs/1704.04503) where boxes reduce the score
 * of other overlapping boxes, therefore favoring different regions of the image
 * with high scores. To enable this Soft-NMS mode, set the `softNmsSigma`
 * parameter to be larger than 0.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param softNmsSigma A float representing the sigma parameter for Soft NMS.
 *     When sigma is 0, it falls back to nonMaxSuppression.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - selectedScores: A 1D tensor with the corresponding scores for each
 *       selected box.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function nonMaxSuppressionWithScore_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0.0) {
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'nonMaxSuppression');
    const $scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(scores, 'scores', 'nonMaxSuppression');
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppSanityCheck"])($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
    maxOutputSize = params.maxOutputSize;
    iouThreshold = params.iouThreshold;
    scoreThreshold = params.scoreThreshold;
    softNmsSigma = params.softNmsSigma;
    const inputs = {
        boxes: $boxes,
        scores: $scores
    };
    const attrs = {
        maxOutputSize,
        iouThreshold,
        scoreThreshold,
        softNmsSigma
    };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonMaxSuppressionV5"], inputs, attrs);
    return {
        selectedIndices: result[0],
        selectedScores: result[1]
    };
}
const nonMaxSuppressionWithScore = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    nonMaxSuppressionWithScore_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl93aXRoX3Njb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2Uvbm9uX21heF9zdXBwcmVzc2lvbl93aXRoX3Njb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLG1CQUFtQixFQUFzRCxNQUFNLG9CQUFvQixDQUFDO0FBSTVHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUd0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsU0FBUywyQkFBMkIsQ0FDaEMsS0FBMEIsRUFBRSxNQUEyQixFQUN2RCxhQUFxQixFQUFFLFlBQVksR0FBRyxHQUFHLEVBQ3pDLGNBQWMsR0FBRyxNQUFNLENBQUMsaUJBQWlCLEVBQ3pDLFlBQVksR0FBRyxHQUFHO0lBQ3BCLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUV2RSxNQUFNLE1BQU0sR0FBRyxxQkFBcUIsQ0FDaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFDNUQsWUFBWSxDQUFDLENBQUM7SUFDbEIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDckMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDbkMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFbkMsTUFBTSxNQUFNLEdBQThCLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDM0UsTUFBTSxLQUFLLEdBQ1AsRUFBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUMsQ0FBQztJQUVoRSwwREFBMEQ7SUFDMUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FDWixtQkFBbUIsRUFBRSxNQUFtQyxFQUN4RCxLQUFnQyxDQUFhLENBQUM7SUFFakUsT0FBTyxFQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUMsMkJBQTJCLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0VOR0lORX0gZnJvbSAnLi4vLi4vZW5naW5lJztcbmltcG9ydCB7Tm9uTWF4U3VwcHJlc3Npb25WNSwgTm9uTWF4U3VwcHJlc3Npb25WNUF0dHJzLCBOb25NYXhTdXBwcmVzc2lvblY1SW5wdXRzfSBmcm9tICcuLi8uLi9rZXJuZWxfbmFtZXMnO1xuaW1wb3J0IHtOYW1lZEF0dHJNYXB9IGZyb20gJy4uLy4uL2tlcm5lbF9yZWdpc3RyeSc7XG5pbXBvcnQge1RlbnNvciwgVGVuc29yMUQsIFRlbnNvcjJEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtOYW1lZFRlbnNvck1hcH0gZnJvbSAnLi4vLi4vdGVuc29yX3R5cGVzJztcbmltcG9ydCB7Y29udmVydFRvVGVuc29yfSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbF9lbnYnO1xuaW1wb3J0IHtUZW5zb3JMaWtlfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7bm9uTWF4U3VwcFNhbml0eUNoZWNrfSBmcm9tICcuLi9ub25tYXhfdXRpbCc7XG5pbXBvcnQge29wfSBmcm9tICcuLi9vcGVyYXRpb24nO1xuXG4vKipcbiAqIFBlcmZvcm1zIG5vbiBtYXhpbXVtIHN1cHByZXNzaW9uIG9mIGJvdW5kaW5nIGJveGVzIGJhc2VkIG9uXG4gKiBpb3UgKGludGVyc2VjdGlvbiBvdmVyIHVuaW9uKS5cbiAqXG4gKiBUaGlzIG9wIGFsc28gc3VwcG9ydHMgYSBTb2Z0LU5NUyBtb2RlIChjZi5cbiAqIEJvZGxhIGV0IGFsLCBodHRwczovL2FyeGl2Lm9yZy9hYnMvMTcwNC4wNDUwMykgd2hlcmUgYm94ZXMgcmVkdWNlIHRoZSBzY29yZVxuICogb2Ygb3RoZXIgb3ZlcmxhcHBpbmcgYm94ZXMsIHRoZXJlZm9yZSBmYXZvcmluZyBkaWZmZXJlbnQgcmVnaW9ucyBvZiB0aGUgaW1hZ2VcbiAqIHdpdGggaGlnaCBzY29yZXMuIFRvIGVuYWJsZSB0aGlzIFNvZnQtTk1TIG1vZGUsIHNldCB0aGUgYHNvZnRObXNTaWdtYWBcbiAqIHBhcmFtZXRlciB0byBiZSBsYXJnZXIgdGhhbiAwLlxuICpcbiAqIEBwYXJhbSBib3hlcyBhIDJkIHRlbnNvciBvZiBzaGFwZSBgW251bUJveGVzLCA0XWAuIEVhY2ggZW50cnkgaXNcbiAqICAgICBgW3kxLCB4MSwgeTIsIHgyXWAsIHdoZXJlIGAoeTEsIHgxKWAgYW5kIGAoeTIsIHgyKWAgYXJlIHRoZSBjb3JuZXJzIG9mXG4gKiAgICAgdGhlIGJvdW5kaW5nIGJveC5cbiAqIEBwYXJhbSBzY29yZXMgYSAxZCB0ZW5zb3IgcHJvdmlkaW5nIHRoZSBib3ggc2NvcmVzIG9mIHNoYXBlIGBbbnVtQm94ZXNdYC5cbiAqIEBwYXJhbSBtYXhPdXRwdXRTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBib3hlcyB0byBiZSBzZWxlY3RlZC5cbiAqIEBwYXJhbSBpb3VUaHJlc2hvbGQgQSBmbG9hdCByZXByZXNlbnRpbmcgdGhlIHRocmVzaG9sZCBmb3IgZGVjaWRpbmcgd2hldGhlclxuICogICAgIGJveGVzIG92ZXJsYXAgdG9vIG11Y2ggd2l0aCByZXNwZWN0IHRvIElPVS4gTXVzdCBiZSBiZXR3ZWVuIFswLCAxXS5cbiAqICAgICBEZWZhdWx0cyB0byAwLjUgKDUwJSBib3ggb3ZlcmxhcCkuXG4gKiBAcGFyYW0gc2NvcmVUaHJlc2hvbGQgQSB0aHJlc2hvbGQgZm9yIGRlY2lkaW5nIHdoZW4gdG8gcmVtb3ZlIGJveGVzIGJhc2VkXG4gKiAgICAgb24gc2NvcmUuIERlZmF1bHRzIHRvIC1pbmYsIHdoaWNoIG1lYW5zIGFueSBzY29yZSBpcyBhY2NlcHRlZC5cbiAqIEBwYXJhbSBzb2Z0Tm1zU2lnbWEgQSBmbG9hdCByZXByZXNlbnRpbmcgdGhlIHNpZ21hIHBhcmFtZXRlciBmb3IgU29mdCBOTVMuXG4gKiAgICAgV2hlbiBzaWdtYSBpcyAwLCBpdCBmYWxscyBiYWNrIHRvIG5vbk1heFN1cHByZXNzaW9uLlxuICogQHJldHVybiBBIG1hcCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqICAgICAtIHNlbGVjdGVkSW5kaWNlczogQSAxRCB0ZW5zb3Igd2l0aCB0aGUgc2VsZWN0ZWQgYm94IGluZGljZXMuXG4gKiAgICAgLSBzZWxlY3RlZFNjb3JlczogQSAxRCB0ZW5zb3Igd2l0aCB0aGUgY29ycmVzcG9uZGluZyBzY29yZXMgZm9yIGVhY2hcbiAqICAgICAgIHNlbGVjdGVkIGJveC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnT3BlcmF0aW9ucycsIHN1YmhlYWRpbmc6ICdJbWFnZXMnLCBuYW1lc3BhY2U6ICdpbWFnZSd9XG4gKi9cbmZ1bmN0aW9uIG5vbk1heFN1cHByZXNzaW9uV2l0aFNjb3JlXyhcbiAgICBib3hlczogVGVuc29yMkR8VGVuc29yTGlrZSwgc2NvcmVzOiBUZW5zb3IxRHxUZW5zb3JMaWtlLFxuICAgIG1heE91dHB1dFNpemU6IG51bWJlciwgaW91VGhyZXNob2xkID0gMC41LFxuICAgIHNjb3JlVGhyZXNob2xkID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIHNvZnRObXNTaWdtYSA9IDAuMCk6IE5hbWVkVGVuc29yTWFwIHtcbiAgY29uc3QgJGJveGVzID0gY29udmVydFRvVGVuc29yKGJveGVzLCAnYm94ZXMnLCAnbm9uTWF4U3VwcHJlc3Npb24nKTtcbiAgY29uc3QgJHNjb3JlcyA9IGNvbnZlcnRUb1RlbnNvcihzY29yZXMsICdzY29yZXMnLCAnbm9uTWF4U3VwcHJlc3Npb24nKTtcblxuICBjb25zdCBwYXJhbXMgPSBub25NYXhTdXBwU2FuaXR5Q2hlY2soXG4gICAgICAkYm94ZXMsICRzY29yZXMsIG1heE91dHB1dFNpemUsIGlvdVRocmVzaG9sZCwgc2NvcmVUaHJlc2hvbGQsXG4gICAgICBzb2Z0Tm1zU2lnbWEpO1xuICBtYXhPdXRwdXRTaXplID0gcGFyYW1zLm1heE91dHB1dFNpemU7XG4gIGlvdVRocmVzaG9sZCA9IHBhcmFtcy5pb3VUaHJlc2hvbGQ7XG4gIHNjb3JlVGhyZXNob2xkID0gcGFyYW1zLnNjb3JlVGhyZXNob2xkO1xuICBzb2Z0Tm1zU2lnbWEgPSBwYXJhbXMuc29mdE5tc1NpZ21hO1xuXG4gIGNvbnN0IGlucHV0czogTm9uTWF4U3VwcHJlc3Npb25WNUlucHV0cyA9IHtib3hlczogJGJveGVzLCBzY29yZXM6ICRzY29yZXN9O1xuICBjb25zdCBhdHRyczogTm9uTWF4U3VwcHJlc3Npb25WNUF0dHJzID1cbiAgICAgIHttYXhPdXRwdXRTaXplLCBpb3VUaHJlc2hvbGQsIHNjb3JlVGhyZXNob2xkLCBzb2Z0Tm1zU2lnbWF9O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgY29uc3QgcmVzdWx0ID0gRU5HSU5FLnJ1bktlcm5lbChcbiAgICAgICAgICAgICAgICAgICAgIE5vbk1heFN1cHByZXNzaW9uVjUsIGlucHV0cyBhcyB1bmtub3duIGFzIE5hbWVkVGVuc29yTWFwLFxuICAgICAgICAgICAgICAgICAgICAgYXR0cnMgYXMgdW5rbm93biBhcyBOYW1lZEF0dHJNYXApIGFzIFRlbnNvcltdO1xuXG4gIHJldHVybiB7c2VsZWN0ZWRJbmRpY2VzOiByZXN1bHRbMF0sIHNlbGVjdGVkU2NvcmVzOiByZXN1bHRbMV19O1xufVxuXG5leHBvcnQgY29uc3Qgbm9uTWF4U3VwcHJlc3Npb25XaXRoU2NvcmUgPSAvKiBAX19QVVJFX18gKi8gb3Aoe25vbk1heFN1cHByZXNzaW9uV2l0aFNjb3JlX30pO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score_async.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppressionWithScoreAsync",
    ()=>nonMaxSuppressionWithScoreAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Asynchronously performs non maximum suppression of bounding boxes based on
 * iou (intersection over union).
 *
 * This op also supports a Soft-NMS mode (cf.
 * Bodla et al, https://arxiv.org/abs/1704.04503) where boxes reduce the score
 * of other overlapping boxes, therefore favoring different regions of the image
 * with high scores. To enable this Soft-NMS mode, set the `softNmsSigma`
 * parameter to be larger than 0.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param softNmsSigma A float representing the sigma parameter for Soft NMS.
 *     When sigma is 0, it falls back to nonMaxSuppression.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - selectedScores: A 1D tensor with the corresponding scores for each
 *       selected box.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ async function nonMaxSuppressionWithScoreAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, softNmsSigma = 0.0) {
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'nonMaxSuppressionAsync');
    const $scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(scores, 'scores', 'nonMaxSuppressionAsync');
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppSanityCheck"])($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
    maxOutputSize = params.maxOutputSize;
    iouThreshold = params.iouThreshold;
    scoreThreshold = params.scoreThreshold;
    softNmsSigma = params.softNmsSigma;
    const boxesAndScores = await Promise.all([
        $boxes.data(),
        $scores.data()
    ]);
    const boxesVals = boxesAndScores[0];
    const scoresVals = boxesAndScores[1];
    // We call a cpu based impl directly with the typedarray data  here rather
    // than a kernel because all kernels are synchronous (and thus cannot await
    // .data()).
    const { selectedIndices, selectedScores } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppressionV5Impl"])(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma);
    if ($boxes !== boxes) {
        $boxes.dispose();
    }
    if ($scores !== scores) {
        $scores.dispose();
    }
    return {
        selectedIndices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])(selectedIndices, 'int32'),
        selectedScores: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])(selectedScores)
    };
}
const nonMaxSuppressionWithScoreAsync = nonMaxSuppressionWithScoreAsync_; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl93aXRoX3Njb3JlX2FzeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2Uvbm9uX21heF9zdXBwcmVzc2lvbl93aXRoX3Njb3JlX2FzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBR2hGLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsS0FBSyxVQUFVLGdDQUFnQyxDQUMzQyxLQUEwQixFQUFFLE1BQTJCLEVBQ3ZELGFBQXFCLEVBQUUsWUFBWSxHQUFHLEdBQUcsRUFDekMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFDekMsWUFBWSxHQUFHLEdBQUc7SUFDcEIsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUN6RSxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBRTVFLE1BQU0sTUFBTSxHQUFHLHFCQUFxQixDQUNoQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUM1RCxZQUFZLENBQUMsQ0FBQztJQUNsQixhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNyQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUNuQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN2QyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUVuQyxNQUFNLGNBQWMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXJDLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLE1BQU0sRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFDLEdBQUcsdUJBQXVCLENBQzdELFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQ2xFLFlBQVksQ0FBQyxDQUFDO0lBRWxCLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtRQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbEI7SUFDRCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7UUFDdEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ25CO0lBRUQsT0FBTztRQUNMLGVBQWUsRUFBRSxRQUFRLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQztRQUNuRCxjQUFjLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQztLQUN6QyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtub25NYXhTdXBwcmVzc2lvblY1SW1wbH0gZnJvbSAnLi4vLi4vYmFja2VuZHMvbm9uX21heF9zdXBwcmVzc2lvbl9pbXBsJztcbmltcG9ydCB7VGVuc29yMUQsIFRlbnNvcjJEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtOYW1lZFRlbnNvck1hcH0gZnJvbSAnLi4vLi4vdGVuc29yX3R5cGVzJztcbmltcG9ydCB7Y29udmVydFRvVGVuc29yfSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbF9lbnYnO1xuaW1wb3J0IHtUZW5zb3JMaWtlfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQge25vbk1heFN1cHBTYW5pdHlDaGVja30gZnJvbSAnLi4vbm9ubWF4X3V0aWwnO1xuaW1wb3J0IHt0ZW5zb3IxZH0gZnJvbSAnLi4vdGVuc29yMWQnO1xuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHBlcmZvcm1zIG5vbiBtYXhpbXVtIHN1cHByZXNzaW9uIG9mIGJvdW5kaW5nIGJveGVzIGJhc2VkIG9uXG4gKiBpb3UgKGludGVyc2VjdGlvbiBvdmVyIHVuaW9uKS5cbiAqXG4gKiBUaGlzIG9wIGFsc28gc3VwcG9ydHMgYSBTb2Z0LU5NUyBtb2RlIChjZi5cbiAqIEJvZGxhIGV0IGFsLCBodHRwczovL2FyeGl2Lm9yZy9hYnMvMTcwNC4wNDUwMykgd2hlcmUgYm94ZXMgcmVkdWNlIHRoZSBzY29yZVxuICogb2Ygb3RoZXIgb3ZlcmxhcHBpbmcgYm94ZXMsIHRoZXJlZm9yZSBmYXZvcmluZyBkaWZmZXJlbnQgcmVnaW9ucyBvZiB0aGUgaW1hZ2VcbiAqIHdpdGggaGlnaCBzY29yZXMuIFRvIGVuYWJsZSB0aGlzIFNvZnQtTk1TIG1vZGUsIHNldCB0aGUgYHNvZnRObXNTaWdtYWBcbiAqIHBhcmFtZXRlciB0byBiZSBsYXJnZXIgdGhhbiAwLlxuICpcbiAqIEBwYXJhbSBib3hlcyBhIDJkIHRlbnNvciBvZiBzaGFwZSBgW251bUJveGVzLCA0XWAuIEVhY2ggZW50cnkgaXNcbiAqICAgICBgW3kxLCB4MSwgeTIsIHgyXWAsIHdoZXJlIGAoeTEsIHgxKWAgYW5kIGAoeTIsIHgyKWAgYXJlIHRoZSBjb3JuZXJzIG9mXG4gKiAgICAgdGhlIGJvdW5kaW5nIGJveC5cbiAqIEBwYXJhbSBzY29yZXMgYSAxZCB0ZW5zb3IgcHJvdmlkaW5nIHRoZSBib3ggc2NvcmVzIG9mIHNoYXBlIGBbbnVtQm94ZXNdYC5cbiAqIEBwYXJhbSBtYXhPdXRwdXRTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBib3hlcyB0byBiZSBzZWxlY3RlZC5cbiAqIEBwYXJhbSBpb3VUaHJlc2hvbGQgQSBmbG9hdCByZXByZXNlbnRpbmcgdGhlIHRocmVzaG9sZCBmb3IgZGVjaWRpbmcgd2hldGhlclxuICogICAgIGJveGVzIG92ZXJsYXAgdG9vIG11Y2ggd2l0aCByZXNwZWN0IHRvIElPVS4gTXVzdCBiZSBiZXR3ZWVuIFswLCAxXS5cbiAqICAgICBEZWZhdWx0cyB0byAwLjUgKDUwJSBib3ggb3ZlcmxhcCkuXG4gKiBAcGFyYW0gc2NvcmVUaHJlc2hvbGQgQSB0aHJlc2hvbGQgZm9yIGRlY2lkaW5nIHdoZW4gdG8gcmVtb3ZlIGJveGVzIGJhc2VkXG4gKiAgICAgb24gc2NvcmUuIERlZmF1bHRzIHRvIC1pbmYsIHdoaWNoIG1lYW5zIGFueSBzY29yZSBpcyBhY2NlcHRlZC5cbiAqIEBwYXJhbSBzb2Z0Tm1zU2lnbWEgQSBmbG9hdCByZXByZXNlbnRpbmcgdGhlIHNpZ21hIHBhcmFtZXRlciBmb3IgU29mdCBOTVMuXG4gKiAgICAgV2hlbiBzaWdtYSBpcyAwLCBpdCBmYWxscyBiYWNrIHRvIG5vbk1heFN1cHByZXNzaW9uLlxuICogQHJldHVybiBBIG1hcCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqICAgICAtIHNlbGVjdGVkSW5kaWNlczogQSAxRCB0ZW5zb3Igd2l0aCB0aGUgc2VsZWN0ZWQgYm94IGluZGljZXMuXG4gKiAgICAgLSBzZWxlY3RlZFNjb3JlczogQSAxRCB0ZW5zb3Igd2l0aCB0aGUgY29ycmVzcG9uZGluZyBzY29yZXMgZm9yIGVhY2hcbiAqICAgICAgIHNlbGVjdGVkIGJveC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnT3BlcmF0aW9ucycsIHN1YmhlYWRpbmc6ICdJbWFnZXMnLCBuYW1lc3BhY2U6ICdpbWFnZSd9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG5vbk1heFN1cHByZXNzaW9uV2l0aFNjb3JlQXN5bmNfKFxuICAgIGJveGVzOiBUZW5zb3IyRHxUZW5zb3JMaWtlLCBzY29yZXM6IFRlbnNvcjFEfFRlbnNvckxpa2UsXG4gICAgbWF4T3V0cHV0U2l6ZTogbnVtYmVyLCBpb3VUaHJlc2hvbGQgPSAwLjUsXG4gICAgc2NvcmVUaHJlc2hvbGQgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgc29mdE5tc1NpZ21hID0gMC4wKTogUHJvbWlzZTxOYW1lZFRlbnNvck1hcD4ge1xuICBjb25zdCAkYm94ZXMgPSBjb252ZXJ0VG9UZW5zb3IoYm94ZXMsICdib3hlcycsICdub25NYXhTdXBwcmVzc2lvbkFzeW5jJyk7XG4gIGNvbnN0ICRzY29yZXMgPSBjb252ZXJ0VG9UZW5zb3Ioc2NvcmVzLCAnc2NvcmVzJywgJ25vbk1heFN1cHByZXNzaW9uQXN5bmMnKTtcblxuICBjb25zdCBwYXJhbXMgPSBub25NYXhTdXBwU2FuaXR5Q2hlY2soXG4gICAgICAkYm94ZXMsICRzY29yZXMsIG1heE91dHB1dFNpemUsIGlvdVRocmVzaG9sZCwgc2NvcmVUaHJlc2hvbGQsXG4gICAgICBzb2Z0Tm1zU2lnbWEpO1xuICBtYXhPdXRwdXRTaXplID0gcGFyYW1zLm1heE91dHB1dFNpemU7XG4gIGlvdVRocmVzaG9sZCA9IHBhcmFtcy5pb3VUaHJlc2hvbGQ7XG4gIHNjb3JlVGhyZXNob2xkID0gcGFyYW1zLnNjb3JlVGhyZXNob2xkO1xuICBzb2Z0Tm1zU2lnbWEgPSBwYXJhbXMuc29mdE5tc1NpZ21hO1xuXG4gIGNvbnN0IGJveGVzQW5kU2NvcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoWyRib3hlcy5kYXRhKCksICRzY29yZXMuZGF0YSgpXSk7XG4gIGNvbnN0IGJveGVzVmFscyA9IGJveGVzQW5kU2NvcmVzWzBdO1xuICBjb25zdCBzY29yZXNWYWxzID0gYm94ZXNBbmRTY29yZXNbMV07XG5cbiAgLy8gV2UgY2FsbCBhIGNwdSBiYXNlZCBpbXBsIGRpcmVjdGx5IHdpdGggdGhlIHR5cGVkYXJyYXkgZGF0YSAgaGVyZSByYXRoZXJcbiAgLy8gdGhhbiBhIGtlcm5lbCBiZWNhdXNlIGFsbCBrZXJuZWxzIGFyZSBzeW5jaHJvbm91cyAoYW5kIHRodXMgY2Fubm90IGF3YWl0XG4gIC8vIC5kYXRhKCkpLlxuICBjb25zdCB7c2VsZWN0ZWRJbmRpY2VzLCBzZWxlY3RlZFNjb3Jlc30gPSBub25NYXhTdXBwcmVzc2lvblY1SW1wbChcbiAgICAgIGJveGVzVmFscywgc2NvcmVzVmFscywgbWF4T3V0cHV0U2l6ZSwgaW91VGhyZXNob2xkLCBzY29yZVRocmVzaG9sZCxcbiAgICAgIHNvZnRObXNTaWdtYSk7XG5cbiAgaWYgKCRib3hlcyAhPT0gYm94ZXMpIHtcbiAgICAkYm94ZXMuZGlzcG9zZSgpO1xuICB9XG4gIGlmICgkc2NvcmVzICE9PSBzY29yZXMpIHtcbiAgICAkc2NvcmVzLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0ZWRJbmRpY2VzOiB0ZW5zb3IxZChzZWxlY3RlZEluZGljZXMsICdpbnQzMicpLFxuICAgIHNlbGVjdGVkU2NvcmVzOiB0ZW5zb3IxZChzZWxlY3RlZFNjb3JlcylcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG5vbk1heFN1cHByZXNzaW9uV2l0aFNjb3JlQXN5bmMgPSBub25NYXhTdXBwcmVzc2lvbldpdGhTY29yZUFzeW5jXztcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppressionPadded",
    ()=>nonMaxSuppressionPadded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Asynchronously performs non maximum suppression of bounding boxes based on
 * iou (intersection over union), with an option to pad results.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param padToMaxOutputSize Defaults to false. If true, size of output
 *     `selectedIndices` is padded to maxOutputSize.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - validOutputs: A scalar denoting how many elements in `selectedIndices`
 *       are valid. Valid elements occur first, then padding.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function nonMaxSuppressionPadded_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'nonMaxSuppression');
    const $scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(scores, 'scores', 'nonMaxSuppression');
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppSanityCheck"])($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null);
    const $maxOutputSize = params.maxOutputSize;
    const $iouThreshold = params.iouThreshold;
    const $scoreThreshold = params.scoreThreshold;
    const inputs = {
        boxes: $boxes,
        scores: $scores
    };
    const attrs = {
        maxOutputSize: $maxOutputSize,
        iouThreshold: $iouThreshold,
        scoreThreshold: $scoreThreshold,
        padToMaxOutputSize
    };
    // tslint:disable-next-line: no-unnecessary-type-assertion
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonMaxSuppressionV4"], inputs, attrs);
    return {
        selectedIndices: result[0],
        validOutputs: result[1]
    };
}
const nonMaxSuppressionPadded = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    nonMaxSuppressionPadded_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl9wYWRkZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL29wcy9pbWFnZS9ub25fbWF4X3N1cHByZXNzaW9uX3BhZGRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxtQkFBbUIsRUFBc0QsTUFBTSxvQkFBb0IsQ0FBQztBQUk1RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFHdEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUNILFNBQVMsd0JBQXdCLENBQzdCLEtBQTBCLEVBQUUsTUFBMkIsRUFDdkQsYUFBcUIsRUFBRSxZQUFZLEdBQUcsR0FBRyxFQUN6QyxjQUFjLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixFQUN6QyxrQkFBa0IsR0FBRyxLQUFLO0lBQzVCLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUV2RSxNQUFNLE1BQU0sR0FBRyxxQkFBcUIsQ0FDaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFDNUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0IsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUM1QyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzFDLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFFOUMsTUFBTSxNQUFNLEdBQThCLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDM0UsTUFBTSxLQUFLLEdBQTZCO1FBQ3RDLGFBQWEsRUFBRSxjQUFjO1FBQzdCLFlBQVksRUFBRSxhQUFhO1FBQzNCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLGtCQUFrQjtLQUNuQixDQUFDO0lBRUYsMERBQTBEO0lBQzFELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQ1osbUJBQW1CLEVBQUUsTUFBbUMsRUFDeEQsS0FBZ0MsQ0FBYSxDQUFDO0lBRWpFLE9BQU8sRUFBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztBQUMvRCxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFDLHdCQUF3QixFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtFTkdJTkV9IGZyb20gJy4uLy4uL2VuZ2luZSc7XG5pbXBvcnQge05vbk1heFN1cHByZXNzaW9uVjQsIE5vbk1heFN1cHByZXNzaW9uVjRBdHRycywgTm9uTWF4U3VwcHJlc3Npb25WNElucHV0c30gZnJvbSAnLi4vLi4va2VybmVsX25hbWVzJztcbmltcG9ydCB7TmFtZWRBdHRyTWFwfSBmcm9tICcuLi8uLi9rZXJuZWxfcmVnaXN0cnknO1xuaW1wb3J0IHtUZW5zb3IsIFRlbnNvcjFELCBUZW5zb3IyRH0gZnJvbSAnLi4vLi4vdGVuc29yJztcbmltcG9ydCB7TmFtZWRUZW5zb3JNYXB9IGZyb20gJy4uLy4uL3RlbnNvcl90eXBlcyc7XG5pbXBvcnQge2NvbnZlcnRUb1RlbnNvcn0gZnJvbSAnLi4vLi4vdGVuc29yX3V0aWxfZW52JztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQge25vbk1heFN1cHBTYW5pdHlDaGVja30gZnJvbSAnLi4vbm9ubWF4X3V0aWwnO1xuaW1wb3J0IHtvcH0gZnJvbSAnLi4vb3BlcmF0aW9uJztcblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBwZXJmb3JtcyBub24gbWF4aW11bSBzdXBwcmVzc2lvbiBvZiBib3VuZGluZyBib3hlcyBiYXNlZCBvblxuICogaW91IChpbnRlcnNlY3Rpb24gb3ZlciB1bmlvbiksIHdpdGggYW4gb3B0aW9uIHRvIHBhZCByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSBib3hlcyBhIDJkIHRlbnNvciBvZiBzaGFwZSBgW251bUJveGVzLCA0XWAuIEVhY2ggZW50cnkgaXNcbiAqICAgICBgW3kxLCB4MSwgeTIsIHgyXWAsIHdoZXJlIGAoeTEsIHgxKWAgYW5kIGAoeTIsIHgyKWAgYXJlIHRoZSBjb3JuZXJzIG9mXG4gKiAgICAgdGhlIGJvdW5kaW5nIGJveC5cbiAqIEBwYXJhbSBzY29yZXMgYSAxZCB0ZW5zb3IgcHJvdmlkaW5nIHRoZSBib3ggc2NvcmVzIG9mIHNoYXBlIGBbbnVtQm94ZXNdYC5cbiAqIEBwYXJhbSBtYXhPdXRwdXRTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBib3hlcyB0byBiZSBzZWxlY3RlZC5cbiAqIEBwYXJhbSBpb3VUaHJlc2hvbGQgQSBmbG9hdCByZXByZXNlbnRpbmcgdGhlIHRocmVzaG9sZCBmb3IgZGVjaWRpbmcgd2hldGhlclxuICogICAgIGJveGVzIG92ZXJsYXAgdG9vIG11Y2ggd2l0aCByZXNwZWN0IHRvIElPVS4gTXVzdCBiZSBiZXR3ZWVuIFswLCAxXS5cbiAqICAgICBEZWZhdWx0cyB0byAwLjUgKDUwJSBib3ggb3ZlcmxhcCkuXG4gKiBAcGFyYW0gc2NvcmVUaHJlc2hvbGQgQSB0aHJlc2hvbGQgZm9yIGRlY2lkaW5nIHdoZW4gdG8gcmVtb3ZlIGJveGVzIGJhc2VkXG4gKiAgICAgb24gc2NvcmUuIERlZmF1bHRzIHRvIC1pbmYsIHdoaWNoIG1lYW5zIGFueSBzY29yZSBpcyBhY2NlcHRlZC5cbiAqIEBwYXJhbSBwYWRUb01heE91dHB1dFNpemUgRGVmYXVsdHMgdG8gZmFsc2UuIElmIHRydWUsIHNpemUgb2Ygb3V0cHV0XG4gKiAgICAgYHNlbGVjdGVkSW5kaWNlc2AgaXMgcGFkZGVkIHRvIG1heE91dHB1dFNpemUuXG4gKiBAcmV0dXJuIEEgbWFwIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogICAgIC0gc2VsZWN0ZWRJbmRpY2VzOiBBIDFEIHRlbnNvciB3aXRoIHRoZSBzZWxlY3RlZCBib3ggaW5kaWNlcy5cbiAqICAgICAtIHZhbGlkT3V0cHV0czogQSBzY2FsYXIgZGVub3RpbmcgaG93IG1hbnkgZWxlbWVudHMgaW4gYHNlbGVjdGVkSW5kaWNlc2BcbiAqICAgICAgIGFyZSB2YWxpZC4gVmFsaWQgZWxlbWVudHMgb2NjdXIgZmlyc3QsIHRoZW4gcGFkZGluZy5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnT3BlcmF0aW9ucycsIHN1YmhlYWRpbmc6ICdJbWFnZXMnLCBuYW1lc3BhY2U6ICdpbWFnZSd9XG4gKi9cbmZ1bmN0aW9uIG5vbk1heFN1cHByZXNzaW9uUGFkZGVkXyhcbiAgICBib3hlczogVGVuc29yMkR8VGVuc29yTGlrZSwgc2NvcmVzOiBUZW5zb3IxRHxUZW5zb3JMaWtlLFxuICAgIG1heE91dHB1dFNpemU6IG51bWJlciwgaW91VGhyZXNob2xkID0gMC41LFxuICAgIHNjb3JlVGhyZXNob2xkID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIHBhZFRvTWF4T3V0cHV0U2l6ZSA9IGZhbHNlKTogTmFtZWRUZW5zb3JNYXAge1xuICBjb25zdCAkYm94ZXMgPSBjb252ZXJ0VG9UZW5zb3IoYm94ZXMsICdib3hlcycsICdub25NYXhTdXBwcmVzc2lvbicpO1xuICBjb25zdCAkc2NvcmVzID0gY29udmVydFRvVGVuc29yKHNjb3JlcywgJ3Njb3JlcycsICdub25NYXhTdXBwcmVzc2lvbicpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IG5vbk1heFN1cHBTYW5pdHlDaGVjayhcbiAgICAgICRib3hlcywgJHNjb3JlcywgbWF4T3V0cHV0U2l6ZSwgaW91VGhyZXNob2xkLCBzY29yZVRocmVzaG9sZCxcbiAgICAgIG51bGwgLyogc29mdE5tc1NpZ21hICovKTtcbiAgY29uc3QgJG1heE91dHB1dFNpemUgPSBwYXJhbXMubWF4T3V0cHV0U2l6ZTtcbiAgY29uc3QgJGlvdVRocmVzaG9sZCA9IHBhcmFtcy5pb3VUaHJlc2hvbGQ7XG4gIGNvbnN0ICRzY29yZVRocmVzaG9sZCA9IHBhcmFtcy5zY29yZVRocmVzaG9sZDtcblxuICBjb25zdCBpbnB1dHM6IE5vbk1heFN1cHByZXNzaW9uVjRJbnB1dHMgPSB7Ym94ZXM6ICRib3hlcywgc2NvcmVzOiAkc2NvcmVzfTtcbiAgY29uc3QgYXR0cnM6IE5vbk1heFN1cHByZXNzaW9uVjRBdHRycyA9IHtcbiAgICBtYXhPdXRwdXRTaXplOiAkbWF4T3V0cHV0U2l6ZSxcbiAgICBpb3VUaHJlc2hvbGQ6ICRpb3VUaHJlc2hvbGQsXG4gICAgc2NvcmVUaHJlc2hvbGQ6ICRzY29yZVRocmVzaG9sZCxcbiAgICBwYWRUb01heE91dHB1dFNpemVcbiAgfTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gIGNvbnN0IHJlc3VsdCA9IEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICAgICAgICAgICAgICAgICBOb25NYXhTdXBwcmVzc2lvblY0LCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCxcbiAgICAgICAgICAgICAgICAgICAgIGF0dHJzIGFzIHVua25vd24gYXMgTmFtZWRBdHRyTWFwKSBhcyBUZW5zb3JbXTtcblxuICByZXR1cm4ge3NlbGVjdGVkSW5kaWNlczogcmVzdWx0WzBdLCB2YWxpZE91dHB1dHM6IHJlc3VsdFsxXX07XG59XG5cbmV4cG9ydCBjb25zdCBub25NYXhTdXBwcmVzc2lvblBhZGRlZCA9IC8qIEBfX1BVUkVfXyAqLyBvcCh7bm9uTWF4U3VwcHJlc3Npb25QYWRkZWRffSk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded_async.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppressionPaddedAsync",
    ()=>nonMaxSuppressionPaddedAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/nonmax_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Asynchronously performs non maximum suppression of bounding boxes based on
 * iou (intersection over union), with an option to pad results.
 *
 * @param boxes a 2d tensor of shape `[numBoxes, 4]`. Each entry is
 *     `[y1, x1, y2, x2]`, where `(y1, x1)` and `(y2, x2)` are the corners of
 *     the bounding box.
 * @param scores a 1d tensor providing the box scores of shape `[numBoxes]`.
 * @param maxOutputSize The maximum number of boxes to be selected.
 * @param iouThreshold A float representing the threshold for deciding whether
 *     boxes overlap too much with respect to IOU. Must be between [0, 1].
 *     Defaults to 0.5 (50% box overlap).
 * @param scoreThreshold A threshold for deciding when to remove boxes based
 *     on score. Defaults to -inf, which means any score is accepted.
 * @param padToMaxOutputSize Defaults to false. If true, size of output
 *     `selectedIndices` is padded to maxOutputSize.
 * @return A map with the following properties:
 *     - selectedIndices: A 1D tensor with the selected box indices.
 *     - validOutputs: A scalar denoting how many elements in `selectedIndices`
 *       are valid. Valid elements occur first, then padding.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ async function nonMaxSuppressionPaddedAsync_(boxes, scores, maxOutputSize, iouThreshold = 0.5, scoreThreshold = Number.NEGATIVE_INFINITY, padToMaxOutputSize = false) {
    const $boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(boxes, 'boxes', 'nonMaxSuppressionAsync');
    const $scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(scores, 'scores', 'nonMaxSuppressionAsync');
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$nonmax_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppSanityCheck"])($boxes, $scores, maxOutputSize, iouThreshold, scoreThreshold, null);
    const $maxOutputSize = params.maxOutputSize;
    const $iouThreshold = params.iouThreshold;
    const $scoreThreshold = params.scoreThreshold;
    const [boxesVals, scoresVals] = await Promise.all([
        $boxes.data(),
        $scores.data()
    ]);
    // We call a cpu based impl directly with the typedarray data here rather
    // than a kernel because all kernels are synchronous (and thus cannot await
    // .data()).
    const { selectedIndices, validOutputs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppressionV4Impl"])(boxesVals, scoresVals, $maxOutputSize, $iouThreshold, $scoreThreshold, padToMaxOutputSize);
    if ($boxes !== boxes) {
        $boxes.dispose();
    }
    if ($scores !== scores) {
        $scores.dispose();
    }
    return {
        selectedIndices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])(selectedIndices, 'int32'),
        validOutputs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"])(validOutputs, 'int32')
    };
}
const nonMaxSuppressionPaddedAsync = nonMaxSuppressionPaddedAsync_; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl9wYWRkZWRfYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL29wcy9pbWFnZS9ub25fbWF4X3N1cHByZXNzaW9uX3BhZGRlZF9hc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUdoRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsS0FBSyxVQUFVLDZCQUE2QixDQUN4QyxLQUEwQixFQUFFLE1BQTJCLEVBQ3ZELGFBQXFCLEVBQUUsWUFBWSxHQUFHLEdBQUcsRUFDekMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFDekMsa0JBQWtCLEdBQUcsS0FBSztJQUM1QixNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFFNUUsTUFBTSxNQUFNLEdBQUcscUJBQXFCLENBQ2hDLE1BQU0sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQzVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDNUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUMxQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBRTlDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEdBQ3pCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZELHlFQUF5RTtJQUN6RSwyRUFBMkU7SUFDM0UsWUFBWTtJQUNaLE1BQU0sRUFBQyxlQUFlLEVBQUUsWUFBWSxFQUFDLEdBQUcsdUJBQXVCLENBQzNELFNBQVMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQ3JFLGtCQUFrQixDQUFDLENBQUM7SUFFeEIsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNsQjtJQUNELElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtRQUN0QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDbkI7SUFFRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLFFBQVEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO1FBQ25ELFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztLQUM1QyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtub25NYXhTdXBwcmVzc2lvblY0SW1wbH0gZnJvbSAnLi4vLi4vYmFja2VuZHMvbm9uX21heF9zdXBwcmVzc2lvbl9pbXBsJztcbmltcG9ydCB7VGVuc29yMUQsIFRlbnNvcjJEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtOYW1lZFRlbnNvck1hcH0gZnJvbSAnLi4vLi4vdGVuc29yX3R5cGVzJztcbmltcG9ydCB7Y29udmVydFRvVGVuc29yfSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbF9lbnYnO1xuaW1wb3J0IHtUZW5zb3JMaWtlfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQge25vbk1heFN1cHBTYW5pdHlDaGVja30gZnJvbSAnLi4vbm9ubWF4X3V0aWwnO1xuaW1wb3J0IHtzY2FsYXJ9IGZyb20gJy4uL3NjYWxhcic7XG5pbXBvcnQge3RlbnNvcjFkfSBmcm9tICcuLi90ZW5zb3IxZCc7XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgcGVyZm9ybXMgbm9uIG1heGltdW0gc3VwcHJlc3Npb24gb2YgYm91bmRpbmcgYm94ZXMgYmFzZWQgb25cbiAqIGlvdSAoaW50ZXJzZWN0aW9uIG92ZXIgdW5pb24pLCB3aXRoIGFuIG9wdGlvbiB0byBwYWQgcmVzdWx0cy5cbiAqXG4gKiBAcGFyYW0gYm94ZXMgYSAyZCB0ZW5zb3Igb2Ygc2hhcGUgYFtudW1Cb3hlcywgNF1gLiBFYWNoIGVudHJ5IGlzXG4gKiAgICAgYFt5MSwgeDEsIHkyLCB4Ml1gLCB3aGVyZSBgKHkxLCB4MSlgIGFuZCBgKHkyLCB4MilgIGFyZSB0aGUgY29ybmVycyBvZlxuICogICAgIHRoZSBib3VuZGluZyBib3guXG4gKiBAcGFyYW0gc2NvcmVzIGEgMWQgdGVuc29yIHByb3ZpZGluZyB0aGUgYm94IHNjb3JlcyBvZiBzaGFwZSBgW251bUJveGVzXWAuXG4gKiBAcGFyYW0gbWF4T3V0cHV0U2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYm94ZXMgdG8gYmUgc2VsZWN0ZWQuXG4gKiBAcGFyYW0gaW91VGhyZXNob2xkIEEgZmxvYXQgcmVwcmVzZW50aW5nIHRoZSB0aHJlc2hvbGQgZm9yIGRlY2lkaW5nIHdoZXRoZXJcbiAqICAgICBib3hlcyBvdmVybGFwIHRvbyBtdWNoIHdpdGggcmVzcGVjdCB0byBJT1UuIE11c3QgYmUgYmV0d2VlbiBbMCwgMV0uXG4gKiAgICAgRGVmYXVsdHMgdG8gMC41ICg1MCUgYm94IG92ZXJsYXApLlxuICogQHBhcmFtIHNjb3JlVGhyZXNob2xkIEEgdGhyZXNob2xkIGZvciBkZWNpZGluZyB3aGVuIHRvIHJlbW92ZSBib3hlcyBiYXNlZFxuICogICAgIG9uIHNjb3JlLiBEZWZhdWx0cyB0byAtaW5mLCB3aGljaCBtZWFucyBhbnkgc2NvcmUgaXMgYWNjZXB0ZWQuXG4gKiBAcGFyYW0gcGFkVG9NYXhPdXRwdXRTaXplIERlZmF1bHRzIHRvIGZhbHNlLiBJZiB0cnVlLCBzaXplIG9mIG91dHB1dFxuICogICAgIGBzZWxlY3RlZEluZGljZXNgIGlzIHBhZGRlZCB0byBtYXhPdXRwdXRTaXplLlxuICogQHJldHVybiBBIG1hcCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqICAgICAtIHNlbGVjdGVkSW5kaWNlczogQSAxRCB0ZW5zb3Igd2l0aCB0aGUgc2VsZWN0ZWQgYm94IGluZGljZXMuXG4gKiAgICAgLSB2YWxpZE91dHB1dHM6IEEgc2NhbGFyIGRlbm90aW5nIGhvdyBtYW55IGVsZW1lbnRzIGluIGBzZWxlY3RlZEluZGljZXNgXG4gKiAgICAgICBhcmUgdmFsaWQuIFZhbGlkIGVsZW1lbnRzIG9jY3VyIGZpcnN0LCB0aGVuIHBhZGRpbmcuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ09wZXJhdGlvbnMnLCBzdWJoZWFkaW5nOiAnSW1hZ2VzJywgbmFtZXNwYWNlOiAnaW1hZ2UnfVxuICovXG5hc3luYyBmdW5jdGlvbiBub25NYXhTdXBwcmVzc2lvblBhZGRlZEFzeW5jXyhcbiAgICBib3hlczogVGVuc29yMkR8VGVuc29yTGlrZSwgc2NvcmVzOiBUZW5zb3IxRHxUZW5zb3JMaWtlLFxuICAgIG1heE91dHB1dFNpemU6IG51bWJlciwgaW91VGhyZXNob2xkID0gMC41LFxuICAgIHNjb3JlVGhyZXNob2xkID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgIHBhZFRvTWF4T3V0cHV0U2l6ZSA9IGZhbHNlKTogUHJvbWlzZTxOYW1lZFRlbnNvck1hcD4ge1xuICBjb25zdCAkYm94ZXMgPSBjb252ZXJ0VG9UZW5zb3IoYm94ZXMsICdib3hlcycsICdub25NYXhTdXBwcmVzc2lvbkFzeW5jJyk7XG4gIGNvbnN0ICRzY29yZXMgPSBjb252ZXJ0VG9UZW5zb3Ioc2NvcmVzLCAnc2NvcmVzJywgJ25vbk1heFN1cHByZXNzaW9uQXN5bmMnKTtcblxuICBjb25zdCBwYXJhbXMgPSBub25NYXhTdXBwU2FuaXR5Q2hlY2soXG4gICAgICAkYm94ZXMsICRzY29yZXMsIG1heE91dHB1dFNpemUsIGlvdVRocmVzaG9sZCwgc2NvcmVUaHJlc2hvbGQsXG4gICAgICBudWxsIC8qIHNvZnRObXNTaWdtYSAqLyk7XG4gIGNvbnN0ICRtYXhPdXRwdXRTaXplID0gcGFyYW1zLm1heE91dHB1dFNpemU7XG4gIGNvbnN0ICRpb3VUaHJlc2hvbGQgPSBwYXJhbXMuaW91VGhyZXNob2xkO1xuICBjb25zdCAkc2NvcmVUaHJlc2hvbGQgPSBwYXJhbXMuc2NvcmVUaHJlc2hvbGQ7XG5cbiAgY29uc3QgW2JveGVzVmFscywgc2NvcmVzVmFsc10gPVxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoWyRib3hlcy5kYXRhKCksICRzY29yZXMuZGF0YSgpXSk7XG5cbiAgLy8gV2UgY2FsbCBhIGNwdSBiYXNlZCBpbXBsIGRpcmVjdGx5IHdpdGggdGhlIHR5cGVkYXJyYXkgZGF0YSBoZXJlIHJhdGhlclxuICAvLyB0aGFuIGEga2VybmVsIGJlY2F1c2UgYWxsIGtlcm5lbHMgYXJlIHN5bmNocm9ub3VzIChhbmQgdGh1cyBjYW5ub3QgYXdhaXRcbiAgLy8gLmRhdGEoKSkuXG4gIGNvbnN0IHtzZWxlY3RlZEluZGljZXMsIHZhbGlkT3V0cHV0c30gPSBub25NYXhTdXBwcmVzc2lvblY0SW1wbChcbiAgICAgIGJveGVzVmFscywgc2NvcmVzVmFscywgJG1heE91dHB1dFNpemUsICRpb3VUaHJlc2hvbGQsICRzY29yZVRocmVzaG9sZCxcbiAgICAgIHBhZFRvTWF4T3V0cHV0U2l6ZSk7XG5cbiAgaWYgKCRib3hlcyAhPT0gYm94ZXMpIHtcbiAgICAkYm94ZXMuZGlzcG9zZSgpO1xuICB9XG4gIGlmICgkc2NvcmVzICE9PSBzY29yZXMpIHtcbiAgICAkc2NvcmVzLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0ZWRJbmRpY2VzOiB0ZW5zb3IxZChzZWxlY3RlZEluZGljZXMsICdpbnQzMicpLFxuICAgIHZhbGlkT3V0cHV0czogc2NhbGFyKHZhbGlkT3V0cHV0cywgJ2ludDMyJylcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG5vbk1heFN1cHByZXNzaW9uUGFkZGVkQXN5bmMgPSBub25NYXhTdXBwcmVzc2lvblBhZGRlZEFzeW5jXztcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/threshold.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ __turbopack_context__.s([
    "threshold",
    ()=>threshold
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/split.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$bincount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/bincount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$less_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/less_equal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/greater.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/sum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/sub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/round.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/where.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fill.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/range.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
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
/**
 * Performs image binarization with corresponding threshold
 * (depends on the method)value, which creates a binary image from a grayscale.
 * @param image 3d tensor of shape [imageHeight,imageWidth, depth],
 * where imageHeight and imageWidth must be positive.The image color
 * range should be [0, 255].
 * @param method Optional string from `'binary' | 'otsu'`
 * which specifies the method for thresholding. Defaults to 'binary'.
 * @param inverted Optional boolean whichspecifies
 * if colours should be inverted. Defaults to false.
 * @param threshValue Optional number which defines threshold value from 0 to 1.
 * Defaults to 0.5.
 * @return A 3d tensor of shape [imageHeight,imageWidth, depth], which
 * contains binarized image.
 */ function threshold_(image, method = 'binary', inverted = false, threshValue = 0.5) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'threshold');
    /* 0.2989, 0.5870, 0.1140 are represent luma coefficients in CCIR601.
    Reference for converting between RGB and grayscale: https://en.wikipedia.org/wiki/Luma_%28video%29  */ const RED_INTENCITY_COEF = 0.2989;
    const GREEN_INTENCITY_COEF = 0.5870;
    const BLUE_INTENCITY_COEF = 0.1140;
    const totalPixelsInImage = $image.shape[0] * $image.shape[1];
    let $threshold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
        threshValue
    ]), 255);
    let r, g, b, grayscale;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank === 3, ()=>'Error in threshold: image must be rank 3,' + `but got rank ${$image.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.shape[2] === 3 || $image.shape[2] === 1, ()=>'Error in threshold: ' + 'image color channel must be equal to 3 or 1' + `but got ${$image.shape[2]}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.dtype === 'int32' || $image.dtype === 'float32', ()=>'Error in dtype: image dtype must be int32 or float32,' + `but got dtype ${$image.dtype}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](method === 'otsu' || method === 'binary', ()=>`Method must be binary or otsu, but was ${method}`);
    if ($image.shape[2] === 3) {
        [r, g, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"])($image, [
            1,
            1,
            1
        ], -1);
        const $r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(r, RED_INTENCITY_COEF);
        const $g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(g, GREEN_INTENCITY_COEF);
        const $b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(b, BLUE_INTENCITY_COEF);
        grayscale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])($r, $g), $b);
    } else {
        grayscale = image;
    }
    if (method === 'otsu') {
        const $histogram = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$bincount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bincount"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(grayscale), 'int32'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])([]), 256);
        $threshold = otsu($histogram, totalPixelsInImage);
    }
    const invCondition = inverted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$less_equal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessEqual"])(grayscale, $threshold) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greater"])(grayscale, $threshold);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(invCondition, 255), 'int32');
    return result;
}
function otsu(histogram, total) {
    let bestThresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
        -1
    ]);
    let bestInBetVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
        0
    ]);
    let cInBetVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
        0
    ]);
    let classFirst, classSecond, meanFirst, meanSec, weightForeground, weightBack;
    for(let index = 0; index < histogram.size - 1; index++){
        classFirst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])(histogram, 0, index + 1);
        classSecond = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])(histogram, index + 1);
        weightForeground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(classFirst), total);
        weightBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(classSecond), total);
        const meanFirstDivA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(classFirst, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(0, classFirst.size)));
        meanFirst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"])(meanFirstDivA, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(classFirst));
        const meanSecFill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"])(classSecond.shape, classFirst.size);
        const meanSecAdd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(0, classSecond.size), meanSecFill);
        const meanSecMul = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(classSecond, meanSecAdd);
        meanSec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(meanSecMul), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sum"])(classSecond));
        const cInBetVarSubA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"])(meanFirst, meanSec);
        const cInBetVarSubB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"])(meanFirst, meanSec);
        const cInBetVarMul = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(weightForeground, weightBack);
        cInBetVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"])(cInBetVarMul, cInBetVarSubA), cInBetVarSubB);
        const condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greater"])(cInBetVar, bestInBetVar);
        bestInBetVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])(condition, cInBetVar, bestInBetVar);
        bestThresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])(condition, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"])([
            index
        ]), bestThresh);
    }
    return bestThresh;
}
const threshold = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    threshold_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZXNob2xkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2UvdGhyZXNob2xkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUdILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM3QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDN0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM3QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQy9CLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVILFNBQVMsVUFBVSxDQUNmLEtBQTRCLEVBQzVCLE1BQU0sR0FBRyxRQUFRLEVBQ2pCLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLFdBQVcsR0FBRyxHQUFHO0lBRWpCLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTVEOzBHQUNtRztJQUVuRyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQztJQUNwQyxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3RCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQztJQUV2QixJQUFJLENBQUMsTUFBTSxDQUNQLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUNqQixHQUFHLEVBQUUsQ0FBQywyQ0FBMkM7UUFDN0MsZ0JBQWdCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBRXhDLElBQUksQ0FBQyxNQUFNLENBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEVBQzdDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQjtRQUN4Qiw2Q0FBNkM7UUFDN0MsV0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV2QyxJQUFJLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxLQUFLLEtBQUssT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUN0RCxHQUFHLEVBQUUsQ0FBQyx1REFBdUQ7UUFDekQsaUJBQWlCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRXhDLElBQUksQ0FBQyxNQUFNLENBQ1QsTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssUUFBUSxFQUN4QyxHQUFHLEVBQUUsQ0FBQywwQ0FBMEMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUU1RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNyQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0gsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUNyQjtJQUVELElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNuQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQWEsRUFDbkUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUNWLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztLQUNyRDtJQUVELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFdEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFcEQsT0FBTyxNQUFrQixDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxTQUFtQixFQUFFLEtBQWE7SUFFNUMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixJQUFJLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUNsQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDO0lBRTFDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxHQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUVuRCxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTVDLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV6QyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RSxTQUFTLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQztRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWpELE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkQsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLGFBQWEsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRWhFLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFbkQsWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXpELFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FFaEU7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHsgVGVuc29yMUQsIFRlbnNvcjNEIH0gZnJvbSAnLi4vLi4vdGVuc29yJztcbmltcG9ydCB7IHRlbnNvcjFkIH0gZnJvbSAnLi4vdGVuc29yMWQnO1xuaW1wb3J0IHsgVGVuc29yTGlrZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IG9wIH0gZnJvbSAnLi4vb3BlcmF0aW9uJztcbmltcG9ydCB7IGNhc3QgfSBmcm9tICcuLi9jYXN0JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAnLi4vc3BsaXQnO1xuaW1wb3J0IHsgYmluY291bnQgfSBmcm9tICcuLi9iaW5jb3VudCc7XG5pbXBvcnQgeyBsZXNzRXF1YWwgfSBmcm9tICcuLi9sZXNzX2VxdWFsJztcbmltcG9ydCB7IGdyZWF0ZXIgfSBmcm9tICcuLi9ncmVhdGVyJztcbmltcG9ydCB7IHN1bSB9IGZyb20gJy4uL3N1bSc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9hZGQnO1xuaW1wb3J0IHsgbXVsIH0gZnJvbSAnLi4vbXVsJztcbmltcG9ydCB7IGRpdiB9IGZyb20gJy4uL2Rpdic7XG5pbXBvcnQgeyBzdWIgfSBmcm9tICcuLi9zdWInO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tICcuLi9yb3VuZCc7XG5pbXBvcnQgeyB3aGVyZSB9IGZyb20gJy4uL3doZXJlJztcbmltcG9ydCB7IGZpbGwgfSBmcm9tICcuLi9maWxsJztcbmltcG9ydCB7c2xpY2V9IGZyb20gJy4uL3NsaWNlJztcbmltcG9ydCB7IHJhbmdlIH0gZnJvbSAnLi4vcmFuZ2UnO1xuaW1wb3J0IHsgdGVuc29yIH0gZnJvbSAnLi4vdGVuc29yJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBjb252ZXJ0VG9UZW5zb3IgfSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbF9lbnYnO1xuXG4vKipcbiAqIFBlcmZvcm1zIGltYWdlIGJpbmFyaXphdGlvbiB3aXRoIGNvcnJlc3BvbmRpbmcgdGhyZXNob2xkXG4gKiAoZGVwZW5kcyBvbiB0aGUgbWV0aG9kKXZhbHVlLCB3aGljaCBjcmVhdGVzIGEgYmluYXJ5IGltYWdlIGZyb20gYSBncmF5c2NhbGUuXG4gKiBAcGFyYW0gaW1hZ2UgM2QgdGVuc29yIG9mIHNoYXBlIFtpbWFnZUhlaWdodCxpbWFnZVdpZHRoLCBkZXB0aF0sXG4gKiB3aGVyZSBpbWFnZUhlaWdodCBhbmQgaW1hZ2VXaWR0aCBtdXN0IGJlIHBvc2l0aXZlLlRoZSBpbWFnZSBjb2xvclxuICogcmFuZ2Ugc2hvdWxkIGJlIFswLCAyNTVdLlxuICogQHBhcmFtIG1ldGhvZCBPcHRpb25hbCBzdHJpbmcgZnJvbSBgJ2JpbmFyeScgfCAnb3RzdSdgXG4gKiB3aGljaCBzcGVjaWZpZXMgdGhlIG1ldGhvZCBmb3IgdGhyZXNob2xkaW5nLiBEZWZhdWx0cyB0byAnYmluYXJ5Jy5cbiAqIEBwYXJhbSBpbnZlcnRlZCBPcHRpb25hbCBib29sZWFuIHdoaWNoc3BlY2lmaWVzXG4gKiBpZiBjb2xvdXJzIHNob3VsZCBiZSBpbnZlcnRlZC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gKiBAcGFyYW0gdGhyZXNoVmFsdWUgT3B0aW9uYWwgbnVtYmVyIHdoaWNoIGRlZmluZXMgdGhyZXNob2xkIHZhbHVlIGZyb20gMCB0byAxLlxuICogRGVmYXVsdHMgdG8gMC41LlxuICogQHJldHVybiBBIDNkIHRlbnNvciBvZiBzaGFwZSBbaW1hZ2VIZWlnaHQsaW1hZ2VXaWR0aCwgZGVwdGhdLCB3aGljaFxuICogY29udGFpbnMgYmluYXJpemVkIGltYWdlLlxuICovXG5cbmZ1bmN0aW9uIHRocmVzaG9sZF8oXG4gICAgaW1hZ2U6IFRlbnNvcjNEIHwgVGVuc29yTGlrZSxcbiAgICBtZXRob2QgPSAnYmluYXJ5JyxcbiAgICBpbnZlcnRlZCA9IGZhbHNlLFxuICAgIHRocmVzaFZhbHVlID0gMC41XG4pOiBUZW5zb3IzRCB7XG4gICAgY29uc3QgJGltYWdlID0gY29udmVydFRvVGVuc29yKGltYWdlLCAnaW1hZ2UnLCAndGhyZXNob2xkJyk7XG5cbiAgICAvKiAwLjI5ODksIDAuNTg3MCwgMC4xMTQwIGFyZSByZXByZXNlbnQgbHVtYSBjb2VmZmljaWVudHMgaW4gQ0NJUjYwMS5cblx0UmVmZXJlbmNlIGZvciBjb252ZXJ0aW5nIGJldHdlZW4gUkdCIGFuZCBncmF5c2NhbGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0x1bWFfJTI4dmlkZW8lMjkgICovXG5cbiAgICBjb25zdCBSRURfSU5URU5DSVRZX0NPRUYgPSAwLjI5ODk7XG4gICAgY29uc3QgR1JFRU5fSU5URU5DSVRZX0NPRUYgPSAwLjU4NzA7XG4gICAgY29uc3QgQkxVRV9JTlRFTkNJVFlfQ09FRiA9IDAuMTE0MDtcbiAgICBjb25zdCB0b3RhbFBpeGVsc0luSW1hZ2UgPSAkaW1hZ2Uuc2hhcGVbMF0gKiAkaW1hZ2Uuc2hhcGVbMV07XG5cbiAgICBsZXQgJHRocmVzaG9sZCA9IG11bCh0ZW5zb3IxZChbdGhyZXNoVmFsdWVdKSwgMjU1KTtcbiAgICBsZXQgciwgZywgYiwgZ3JheXNjYWxlO1xuXG4gICAgdXRpbC5hc3NlcnQoXG4gICAgICAgICRpbWFnZS5yYW5rID09PSAzLFxuICAgICAgICAoKSA9PiAnRXJyb3IgaW4gdGhyZXNob2xkOiBpbWFnZSBtdXN0IGJlIHJhbmsgMywnICtcbiAgICAgICAgICAgIGBidXQgZ290IHJhbmsgJHskaW1hZ2UucmFua30uYCk7XG5cbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgJGltYWdlLnNoYXBlWzJdID09PSAzIHx8ICRpbWFnZS5zaGFwZVsyXT09PSAxLFxuICAgICAgICAoKSA9PiAnRXJyb3IgaW4gdGhyZXNob2xkOiAnICtcbiAgICAgICAgICAgICdpbWFnZSBjb2xvciBjaGFubmVsIG11c3QgYmUgZXF1YWwgdG8gMyBvciAxJyArXG4gICAgICAgICAgICBgYnV0IGdvdCAkeyRpbWFnZS5zaGFwZVsyXX0uYCk7XG5cbiAgICB1dGlsLmFzc2VydChcbiAgICAgICRpbWFnZS5kdHlwZSA9PT0gJ2ludDMyJyB8fCAkaW1hZ2UuZHR5cGUgPT09ICdmbG9hdDMyJyxcbiAgICAgICgpID0+ICdFcnJvciBpbiBkdHlwZTogaW1hZ2UgZHR5cGUgbXVzdCBiZSBpbnQzMiBvciBmbG9hdDMyLCcgK1xuICAgICAgICAgIGBidXQgZ290IGR0eXBlICR7JGltYWdlLmR0eXBlfS5gKTtcblxuICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgbWV0aG9kID09PSAnb3RzdScgfHwgbWV0aG9kID09PSAnYmluYXJ5JyxcbiAgICAgICgpID0+IGBNZXRob2QgbXVzdCBiZSBiaW5hcnkgb3Igb3RzdSwgYnV0IHdhcyAke21ldGhvZH1gKTtcblxuICAgIGlmICgkaW1hZ2Uuc2hhcGVbMl0gPT09IDMpIHtcbiAgICAgICAgW3IsIGcsIGJdID0gc3BsaXQoJGltYWdlLCBbMSwgMSwgMV0sIC0xKTtcbiAgICAgICAgY29uc3QgJHIgPSBtdWwocixSRURfSU5URU5DSVRZX0NPRUYpO1xuICAgICAgICBjb25zdCAkZyA9IG11bChnLEdSRUVOX0lOVEVOQ0lUWV9DT0VGKTtcbiAgICAgICAgY29uc3QgJGIgPSBtdWwoYixCTFVFX0lOVEVOQ0lUWV9DT0VGKTtcbiAgICAgICAgZ3JheXNjYWxlID0gYWRkKGFkZCgkciwgJGcpLCAkYik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ3JheXNjYWxlID0gaW1hZ2U7XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ290c3UnKSB7XG4gICAgICAgIGNvbnN0ICRoaXN0b2dyYW0gPSBiaW5jb3VudChjYXN0KHJvdW5kKGdyYXlzY2FsZSksICdpbnQzMicpIGFzIFRlbnNvcjFELFxuICAgICAgICAgICAgdGVuc29yKFtdKSxcbiAgICAgICAgICAgIDI1Nik7XG4gICAgICAgICR0aHJlc2hvbGQgPSBvdHN1KCRoaXN0b2dyYW0sIHRvdGFsUGl4ZWxzSW5JbWFnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW52Q29uZGl0aW9uID0gaW52ZXJ0ZWQgP1xuICAgICAgICBsZXNzRXF1YWwoZ3JheXNjYWxlLCAkdGhyZXNob2xkKSA6IGdyZWF0ZXIoZ3JheXNjYWxlLCAkdGhyZXNob2xkKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGNhc3QobXVsKGludkNvbmRpdGlvbiwyNTUpLCAnaW50MzInKTtcblxuICAgIHJldHVybiByZXN1bHQgYXMgVGVuc29yM0Q7XG59XG5cbmZ1bmN0aW9uIG90c3UoaGlzdG9ncmFtOiBUZW5zb3IxRCwgdG90YWw6IG51bWJlcik6VGVuc29yMUQge1xuXG4gICAgbGV0IGJlc3RUaHJlc2ggPSB0ZW5zb3IxZChbLTFdKTtcbiAgICBsZXQgYmVzdEluQmV0VmFyID0gdGVuc29yMWQoWzBdKTtcbiAgICBsZXQgY0luQmV0VmFyID0gdGVuc29yMWQoWzBdKTtcbiAgICBsZXQgY2xhc3NGaXJzdCwgY2xhc3NTZWNvbmQsIG1lYW5GaXJzdCxcbiAgICAgICAgbWVhblNlYywgd2VpZ2h0Rm9yZWdyb3VuZCwgd2VpZ2h0QmFjaztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoaXN0b2dyYW0uc2l6ZS0xOyBpbmRleCsrKSB7XG5cbiAgICAgICAgY2xhc3NGaXJzdCA9IHNsaWNlKGhpc3RvZ3JhbSwgMCwgaW5kZXggKyAxKTtcblxuICAgICAgICBjbGFzc1NlY29uZCA9IHNsaWNlKGhpc3RvZ3JhbSxpbmRleCArIDEpO1xuXG4gICAgICAgIHdlaWdodEZvcmVncm91bmQgPSBkaXYoc3VtKGNsYXNzRmlyc3QpLHRvdGFsKTtcblxuICAgICAgICB3ZWlnaHRCYWNrID0gZGl2KHN1bShjbGFzc1NlY29uZCksdG90YWwpO1xuXG4gICAgICAgIGNvbnN0IG1lYW5GaXJzdERpdkEgPSBzdW0obXVsKGNsYXNzRmlyc3QsIHJhbmdlKDAsIGNsYXNzRmlyc3Quc2l6ZSkpKTtcblxuICAgICAgICBtZWFuRmlyc3QgPSBkaXYobWVhbkZpcnN0RGl2QSwgc3VtKGNsYXNzRmlyc3QpICk7XG5cbiAgICAgICAgY29uc3QgbWVhblNlY0ZpbGwgPSBmaWxsKGNsYXNzU2Vjb25kLnNoYXBlLCBjbGFzc0ZpcnN0LnNpemUpO1xuICAgICAgICBjb25zdCBtZWFuU2VjQWRkID0gYWRkKHJhbmdlKDAsY2xhc3NTZWNvbmQuc2l6ZSksbWVhblNlY0ZpbGwpO1xuICAgICAgICBjb25zdCBtZWFuU2VjTXVsID0gbXVsKGNsYXNzU2Vjb25kLCAobWVhblNlY0FkZCkpO1xuICAgICAgICBtZWFuU2VjID0gZGl2KHN1bShtZWFuU2VjTXVsKSwgc3VtKGNsYXNzU2Vjb25kKSk7XG5cbiAgICAgICAgY29uc3QgY0luQmV0VmFyU3ViQSA9IHN1YihtZWFuRmlyc3QsIG1lYW5TZWMpO1xuICAgICAgICBjb25zdCBjSW5CZXRWYXJTdWJCID0gc3ViKG1lYW5GaXJzdCwgbWVhblNlYyk7XG4gICAgICAgIGNvbnN0IGNJbkJldFZhck11bCA9IG11bCh3ZWlnaHRGb3JlZ3JvdW5kLCB3ZWlnaHRCYWNrKTtcbiAgICAgICAgY0luQmV0VmFyID0gbXVsKG11bChjSW5CZXRWYXJNdWwsY0luQmV0VmFyU3ViQSksIGNJbkJldFZhclN1YkIpO1xuXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGdyZWF0ZXIoY0luQmV0VmFyLCBiZXN0SW5CZXRWYXIpO1xuXG4gICAgICAgIGJlc3RJbkJldFZhciA9IHdoZXJlKGNvbmRpdGlvbiwgY0luQmV0VmFyLCBiZXN0SW5CZXRWYXIpO1xuXG4gICAgICAgIGJlc3RUaHJlc2ggPSB3aGVyZShjb25kaXRpb24sIHRlbnNvcjFkKFtpbmRleF0pLCBiZXN0VGhyZXNoKTtcblxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRocmVzaDtcbn1cblxuZXhwb3J0IGNvbnN0IHRocmVzaG9sZCA9IC8qIEBfX1BVUkVfXyAqLyBvcCh7IHRocmVzaG9sZF8gfSk7XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/image/transform.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Applies the given transform(s) to the image(s).
 *
 * @param image 4d tensor of shape `[batch, imageHeight, imageWidth, depth]`.
 * @param transforms Projective transform matrix/matrices. A tensor1d of length
 *     8 or tensor of size N x 8. If one row of transforms is [a0, a1, a2, b0,
 *     b1, b2, c0, c1], then it maps the output point (x, y) to a transformed
 *     input point (x', y') = ((a0 x + a1 y + a2) / k, (b0 x + b1 y + b2) / k),
 *     where k = c0 x + c1 y + 1. The transforms are inverted compared to the
 *     transform mapping input points to output points.
 * @param interpolation Interpolation mode.
 *     Supported values: 'nearest', 'bilinear'. Default to 'nearest'.
 * @param fillMode Points outside the boundaries of the input are filled
 *     according to the given mode, one of 'constant', 'reflect', 'wrap',
 *     'nearest'. Default to 'constant'.
 *     'reflect': (d c b a | a b c d | d c b a ) The input is extended by
 *     reflecting about the edge of the last pixel.
 *     'constant': (k k k k | a b c d | k k k k) The input is extended by
 *     filling all values beyond the edge with the same constant value k.
 *     'wrap': (a b c d | a b c d | a b c d) The input is extended by
 *     wrapping around to the opposite edge.
 *     'nearest': (a a a a | a b c d | d d d d) The input is extended by
 *     the nearest pixel.
 * @param fillValue A float represents the value to be filled outside the
 *     boundaries when fillMode is 'constant'.
 * @param Output dimension after the transform, [height, width]. If undefined,
 *     output is the same size as input image.
 *
 * @doc {heading: 'Operations', subheading: 'Images', namespace: 'image'}
 */ function transform_(image, transforms, interpolation = 'nearest', fillMode = 'constant', fillValue = 0, outputShape) {
    const $image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(image, 'image', 'transform', 'float32');
    const $transforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(transforms, 'transforms', 'transform', 'float32');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($image.rank === 4, ()=>'Error in transform: image must be rank 4,' + `but got rank ${$image.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($transforms.rank === 2 && ($transforms.shape[0] === $image.shape[0] || $transforms.shape[0] === 1) && $transforms.shape[1] === 8, ()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](outputShape == null || outputShape.length === 2, ()=>'Error in transform: outputShape must be [height, width] or null, ' + `but got ${outputShape}.`);
    const inputs = {
        image: $image,
        transforms: $transforms
    };
    const attrs = {
        interpolation,
        fillMode,
        fillValue,
        outputShape
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transform"], inputs, attrs);
}
const transform = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    transform_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvaW1hZ2UvdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLFNBQVMsRUFBa0MsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFFbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Qkc7QUFDSCxTQUFTLFVBQVUsQ0FDZixLQUEwQixFQUFFLFVBQStCLEVBQzNELGdCQUFzQyxTQUFTLEVBQy9DLFdBQWtELFVBQVUsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUMzRSxXQUE4QjtJQUNoQyxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkUsTUFBTSxXQUFXLEdBQ2IsZUFBZSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXRFLElBQUksQ0FBQyxNQUFNLENBQ1AsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQ2pCLEdBQUcsRUFBRSxDQUFDLDJDQUEyQztRQUM3QyxnQkFBZ0IsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FDUCxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDbEIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUM5QixHQUFHLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO0lBRTlFLElBQUksQ0FBQyxNQUFNLENBQ1AsV0FBVyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDL0MsR0FBRyxFQUFFLENBQ0QsbUVBQW1FO1FBQ25FLFdBQVcsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUVuQyxNQUFNLE1BQU0sR0FBb0IsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUN6RSxNQUFNLEtBQUssR0FDVSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQyxDQUFDO0lBRXZFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FDbkIsU0FBUyxFQUFFLE1BQW1DLEVBQzlDLEtBQWdDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtFTkdJTkV9IGZyb20gJy4uLy4uL2VuZ2luZSc7XG5pbXBvcnQge1RyYW5zZm9ybSwgVHJhbnNmb3JtQXR0cnMsIFRyYW5zZm9ybUlucHV0c30gZnJvbSAnLi4vLi4va2VybmVsX25hbWVzJztcbmltcG9ydCB7TmFtZWRBdHRyTWFwfSBmcm9tICcuLi8uLi9rZXJuZWxfcmVnaXN0cnknO1xuaW1wb3J0IHtUZW5zb3IyRCwgVGVuc29yNER9IGZyb20gJy4uLy4uL3RlbnNvcic7XG5pbXBvcnQge05hbWVkVGVuc29yTWFwfSBmcm9tICcuLi8uLi90ZW5zb3JfdHlwZXMnO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmltcG9ydCB7b3B9IGZyb20gJy4uL29wZXJhdGlvbic7XG5cbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gdHJhbnNmb3JtKHMpIHRvIHRoZSBpbWFnZShzKS5cbiAqXG4gKiBAcGFyYW0gaW1hZ2UgNGQgdGVuc29yIG9mIHNoYXBlIGBbYmF0Y2gsIGltYWdlSGVpZ2h0LCBpbWFnZVdpZHRoLCBkZXB0aF1gLlxuICogQHBhcmFtIHRyYW5zZm9ybXMgUHJvamVjdGl2ZSB0cmFuc2Zvcm0gbWF0cml4L21hdHJpY2VzLiBBIHRlbnNvcjFkIG9mIGxlbmd0aFxuICogICAgIDggb3IgdGVuc29yIG9mIHNpemUgTiB4IDguIElmIG9uZSByb3cgb2YgdHJhbnNmb3JtcyBpcyBbYTAsIGExLCBhMiwgYjAsXG4gKiAgICAgYjEsIGIyLCBjMCwgYzFdLCB0aGVuIGl0IG1hcHMgdGhlIG91dHB1dCBwb2ludCAoeCwgeSkgdG8gYSB0cmFuc2Zvcm1lZFxuICogICAgIGlucHV0IHBvaW50ICh4JywgeScpID0gKChhMCB4ICsgYTEgeSArIGEyKSAvIGssIChiMCB4ICsgYjEgeSArIGIyKSAvIGspLFxuICogICAgIHdoZXJlIGsgPSBjMCB4ICsgYzEgeSArIDEuIFRoZSB0cmFuc2Zvcm1zIGFyZSBpbnZlcnRlZCBjb21wYXJlZCB0byB0aGVcbiAqICAgICB0cmFuc2Zvcm0gbWFwcGluZyBpbnB1dCBwb2ludHMgdG8gb3V0cHV0IHBvaW50cy5cbiAqIEBwYXJhbSBpbnRlcnBvbGF0aW9uIEludGVycG9sYXRpb24gbW9kZS5cbiAqICAgICBTdXBwb3J0ZWQgdmFsdWVzOiAnbmVhcmVzdCcsICdiaWxpbmVhcicuIERlZmF1bHQgdG8gJ25lYXJlc3QnLlxuICogQHBhcmFtIGZpbGxNb2RlIFBvaW50cyBvdXRzaWRlIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBpbnB1dCBhcmUgZmlsbGVkXG4gKiAgICAgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBtb2RlLCBvbmUgb2YgJ2NvbnN0YW50JywgJ3JlZmxlY3QnLCAnd3JhcCcsXG4gKiAgICAgJ25lYXJlc3QnLiBEZWZhdWx0IHRvICdjb25zdGFudCcuXG4gKiAgICAgJ3JlZmxlY3QnOiAoZCBjIGIgYSB8IGEgYiBjIGQgfCBkIGMgYiBhICkgVGhlIGlucHV0IGlzIGV4dGVuZGVkIGJ5XG4gKiAgICAgcmVmbGVjdGluZyBhYm91dCB0aGUgZWRnZSBvZiB0aGUgbGFzdCBwaXhlbC5cbiAqICAgICAnY29uc3RhbnQnOiAoayBrIGsgayB8IGEgYiBjIGQgfCBrIGsgayBrKSBUaGUgaW5wdXQgaXMgZXh0ZW5kZWQgYnlcbiAqICAgICBmaWxsaW5nIGFsbCB2YWx1ZXMgYmV5b25kIHRoZSBlZGdlIHdpdGggdGhlIHNhbWUgY29uc3RhbnQgdmFsdWUgay5cbiAqICAgICAnd3JhcCc6IChhIGIgYyBkIHwgYSBiIGMgZCB8IGEgYiBjIGQpIFRoZSBpbnB1dCBpcyBleHRlbmRlZCBieVxuICogICAgIHdyYXBwaW5nIGFyb3VuZCB0byB0aGUgb3Bwb3NpdGUgZWRnZS5cbiAqICAgICAnbmVhcmVzdCc6IChhIGEgYSBhIHwgYSBiIGMgZCB8IGQgZCBkIGQpIFRoZSBpbnB1dCBpcyBleHRlbmRlZCBieVxuICogICAgIHRoZSBuZWFyZXN0IHBpeGVsLlxuICogQHBhcmFtIGZpbGxWYWx1ZSBBIGZsb2F0IHJlcHJlc2VudHMgdGhlIHZhbHVlIHRvIGJlIGZpbGxlZCBvdXRzaWRlIHRoZVxuICogICAgIGJvdW5kYXJpZXMgd2hlbiBmaWxsTW9kZSBpcyAnY29uc3RhbnQnLlxuICogQHBhcmFtIE91dHB1dCBkaW1lbnNpb24gYWZ0ZXIgdGhlIHRyYW5zZm9ybSwgW2hlaWdodCwgd2lkdGhdLiBJZiB1bmRlZmluZWQsXG4gKiAgICAgb3V0cHV0IGlzIHRoZSBzYW1lIHNpemUgYXMgaW5wdXQgaW1hZ2UuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ09wZXJhdGlvbnMnLCBzdWJoZWFkaW5nOiAnSW1hZ2VzJywgbmFtZXNwYWNlOiAnaW1hZ2UnfVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1fKFxuICAgIGltYWdlOiBUZW5zb3I0RHxUZW5zb3JMaWtlLCB0cmFuc2Zvcm1zOiBUZW5zb3IyRHxUZW5zb3JMaWtlLFxuICAgIGludGVycG9sYXRpb246ICduZWFyZXN0J3wnYmlsaW5lYXInID0gJ25lYXJlc3QnLFxuICAgIGZpbGxNb2RlOiAnY29uc3RhbnQnfCdyZWZsZWN0J3wnd3JhcCd8J25lYXJlc3QnID0gJ2NvbnN0YW50JywgZmlsbFZhbHVlID0gMCxcbiAgICBvdXRwdXRTaGFwZT86IFtudW1iZXIsIG51bWJlcl0pOiBUZW5zb3I0RCB7XG4gIGNvbnN0ICRpbWFnZSA9IGNvbnZlcnRUb1RlbnNvcihpbWFnZSwgJ2ltYWdlJywgJ3RyYW5zZm9ybScsICdmbG9hdDMyJyk7XG4gIGNvbnN0ICR0cmFuc2Zvcm1zID1cbiAgICAgIGNvbnZlcnRUb1RlbnNvcih0cmFuc2Zvcm1zLCAndHJhbnNmb3JtcycsICd0cmFuc2Zvcm0nLCAnZmxvYXQzMicpO1xuXG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgJGltYWdlLnJhbmsgPT09IDQsXG4gICAgICAoKSA9PiAnRXJyb3IgaW4gdHJhbnNmb3JtOiBpbWFnZSBtdXN0IGJlIHJhbmsgNCwnICtcbiAgICAgICAgICBgYnV0IGdvdCByYW5rICR7JGltYWdlLnJhbmt9LmApO1xuXG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgJHRyYW5zZm9ybXMucmFuayA9PT0gMiAmJlxuICAgICAgICAgICgkdHJhbnNmb3Jtcy5zaGFwZVswXSA9PT0gJGltYWdlLnNoYXBlWzBdIHx8XG4gICAgICAgICAgICR0cmFuc2Zvcm1zLnNoYXBlWzBdID09PSAxKSAmJlxuICAgICAgICAgICR0cmFuc2Zvcm1zLnNoYXBlWzFdID09PSA4LFxuICAgICAgKCkgPT4gYEVycm9yIGluIHRyYW5zZm9ybTogSW5wdXQgdHJhbnNmb3JtIHNob3VsZCBiZSBiYXRjaCB4IDggb3IgMSB4IDhgKTtcblxuICB1dGlsLmFzc2VydChcbiAgICAgIG91dHB1dFNoYXBlID09IG51bGwgfHwgb3V0cHV0U2hhcGUubGVuZ3RoID09PSAyLFxuICAgICAgKCkgPT5cbiAgICAgICAgICAnRXJyb3IgaW4gdHJhbnNmb3JtOiBvdXRwdXRTaGFwZSBtdXN0IGJlIFtoZWlnaHQsIHdpZHRoXSBvciBudWxsLCAnICtcbiAgICAgICAgICBgYnV0IGdvdCAke291dHB1dFNoYXBlfS5gKTtcblxuICBjb25zdCBpbnB1dHM6IFRyYW5zZm9ybUlucHV0cyA9IHtpbWFnZTogJGltYWdlLCB0cmFuc2Zvcm1zOiAkdHJhbnNmb3Jtc307XG4gIGNvbnN0IGF0dHJzOlxuICAgICAgVHJhbnNmb3JtQXR0cnMgPSB7aW50ZXJwb2xhdGlvbiwgZmlsbE1vZGUsIGZpbGxWYWx1ZSwgb3V0cHV0U2hhcGV9O1xuXG4gIHJldHVybiBFTkdJTkUucnVuS2VybmVsKFxuICAgICAgVHJhbnNmb3JtLCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCxcbiAgICAgIGF0dHJzIGFzIHVua25vd24gYXMgTmFtZWRBdHRyTWFwKTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybSA9IC8qIEBfX1BVUkVfXyAqLyBvcCh7dHJhbnNmb3JtX30pO1xuIl19
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-core_dist_ops_image_a29fe964._.js.map