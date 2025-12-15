(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 * This differs from util.assertShapesMatch in that it allows values of
 * negative one, an undefined size of a dimensinon, in a shape to match
 * anything.
 */ __turbopack_context__.s([
    "assertShapesMatchAllowUndefinedSize",
    ()=>assertShapesMatchAllowUndefinedSize,
    "fullDefinedShape",
    ()=>fullDefinedShape,
    "inferElementShape",
    ()=>inferElementShape,
    "mergeElementShape",
    ()=>mergeElementShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
;
function assertShapesMatchAllowUndefinedSize(shapeA, shapeB, errorMessagePrefix = '') {
    // constant shape means unknown rank
    if (typeof shapeA === 'number' || typeof shapeB === 'number') {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(shapeA.length === shapeB.length, ()=>errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
    for(let i = 0; i < shapeA.length; i++){
        const dim0 = shapeA[i];
        const dim1 = shapeB[i];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(dim0 < 0 || dim1 < 0 || dim0 === dim1, ()=>errorMessagePrefix + ` Shapes ${shapeA} and ${shapeB} must match`);
    }
}
function fullDefinedShape(elementShape) {
    if (typeof elementShape === 'number' || elementShape.some((dim)=>dim < 0)) {
        return false;
    }
    return true;
}
function inferElementShape(listElementShape, tensors, elementShape) {
    let partialShape = mergeElementShape(listElementShape, elementShape);
    const notfullDefinedShape = !fullDefinedShape(partialShape);
    if (notfullDefinedShape && tensors.length === 0) {
        throw new Error(`Tried to calculate elements of an empty list` + ` with non-fully-defined elementShape: ${partialShape}`);
    }
    if (notfullDefinedShape) {
        tensors.forEach((tensor)=>{
            partialShape = mergeElementShape(tensor.shape, partialShape);
        });
    }
    if (!fullDefinedShape(partialShape)) {
        throw new Error(`Non-fully-defined elementShape: ${partialShape}`);
    }
    return partialShape;
}
function mergeElementShape(elementShapeA, elementShapeB) {
    if (typeof elementShapeA === 'number') {
        return elementShapeB;
    }
    if (typeof elementShapeB === 'number') {
        return elementShapeA;
    }
    if (elementShapeA.length !== elementShapeB.length) {
        throw new Error(`Incompatible ranks during merge: ${elementShapeA} vs. ${elementShapeB}`);
    }
    const result = [];
    for(let i = 0; i < elementShapeA.length; ++i){
        const dim0 = elementShapeA[i];
        const dim1 = elementShapeB[i];
        if (dim0 >= 0 && dim1 >= 0 && dim0 !== dim1) {
            throw new Error(`Incompatible shape during merge: ${elementShapeA} vs. ${elementShapeB}`);
        }
        result[i] = dim0 >= 0 ? dim0 : dim1;
    }
    return result;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb252ZXJ0ZXIvc3JjL2V4ZWN1dG9yL3RlbnNvcl91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSDs7OztHQUlHO0FBRUgsT0FBTyxFQUFTLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRW5EOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxtQ0FBbUMsQ0FDL0MsTUFBdUIsRUFBRSxNQUF1QixFQUNoRCxrQkFBa0IsR0FBRyxFQUFFO0lBQ3pCLG9DQUFvQztJQUNwQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUQsT0FBTztLQUNSO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FDUCxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQy9CLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsTUFBTSxRQUFRLE1BQU0sYUFBYSxDQUFDLENBQUM7SUFDN0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUNQLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUNyQyxHQUFHLEVBQUUsQ0FDRCxrQkFBa0IsR0FBRyxXQUFXLE1BQU0sUUFBUSxNQUFNLGFBQWEsQ0FBQyxDQUFDO0tBQzVFO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxZQUE2QjtJQUM1RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3pFLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQzdCLGdCQUFpQyxFQUFFLE9BQWlCLEVBQ3BELFlBQTZCO0lBQy9CLElBQUksWUFBWSxHQUFHLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxJQUFJLG1CQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQ1gsOENBQThDO1lBQzlDLHlDQUF5QyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsSUFBSSxtQkFBbUIsRUFBRTtRQUN2QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsWUFBWSxFQUFFLENBQUMsQ0FBQztLQUNwRTtJQUNELE9BQU8sWUFBd0IsQ0FBQztBQUNsQyxDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUM3QixhQUE4QixFQUFFLGFBQThCO0lBRWhFLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1FBQ3JDLE9BQU8sYUFBYSxDQUFDO0tBQ3RCO0lBQ0QsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7UUFDckMsT0FBTyxhQUFhLENBQUM7S0FDdEI7SUFFRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxhQUFhLFFBQzdELGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDdEI7SUFFRCxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDN0MsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLGFBQWEsUUFDN0QsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUN0QjtRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNyQztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbi8qKlxuICogVGhpcyBkaWZmZXJzIGZyb20gdXRpbC5hc3NlcnRTaGFwZXNNYXRjaCBpbiB0aGF0IGl0IGFsbG93cyB2YWx1ZXMgb2ZcbiAqIG5lZ2F0aXZlIG9uZSwgYW4gdW5kZWZpbmVkIHNpemUgb2YgYSBkaW1lbnNpbm9uLCBpbiBhIHNoYXBlIHRvIG1hdGNoXG4gKiBhbnl0aGluZy5cbiAqL1xuXG5pbXBvcnQge1RlbnNvciwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuLyoqXG4gKiBVc2VkIGJ5IFRlbnNvckxpc3QgYW5kIFRlbnNvckFycmF5IHRvIHZlcmlmeSBpZiBlbGVtZW50U2hhcGUgbWF0Y2hlcywgc3VwcG9ydFxuICogbmVnYXRpdmUgdmFsdWUgYXMgdGhlIGRpbSBzaGFwZS5cbiAqIEBwYXJhbSBzaGFwZUFcbiAqIEBwYXJhbSBzaGFwZUJcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2VQcmVmaXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgIHNoYXBlQTogbnVtYmVyfG51bWJlcltdLCBzaGFwZUI6IG51bWJlcnxudW1iZXJbXSxcbiAgICBlcnJvck1lc3NhZ2VQcmVmaXggPSAnJyk6IHZvaWQge1xuICAvLyBjb25zdGFudCBzaGFwZSBtZWFucyB1bmtub3duIHJhbmtcbiAgaWYgKHR5cGVvZiBzaGFwZUEgPT09ICdudW1iZXInIHx8IHR5cGVvZiBzaGFwZUIgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgc2hhcGVBLmxlbmd0aCA9PT0gc2hhcGVCLmxlbmd0aCxcbiAgICAgICgpID0+IGVycm9yTWVzc2FnZVByZWZpeCArIGAgU2hhcGVzICR7c2hhcGVBfSBhbmQgJHtzaGFwZUJ9IG11c3QgbWF0Y2hgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGFwZUEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaW0wID0gc2hhcGVBW2ldO1xuICAgIGNvbnN0IGRpbTEgPSBzaGFwZUJbaV07XG4gICAgdXRpbC5hc3NlcnQoXG4gICAgICAgIGRpbTAgPCAwIHx8IGRpbTEgPCAwIHx8IGRpbTAgPT09IGRpbTEsXG4gICAgICAgICgpID0+XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VQcmVmaXggKyBgIFNoYXBlcyAke3NoYXBlQX0gYW5kICR7c2hhcGVCfSBtdXN0IG1hdGNoYCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZ1bGxEZWZpbmVkU2hhcGUoZWxlbWVudFNoYXBlOiBudW1iZXJ8bnVtYmVyW10pOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50U2hhcGUgPT09ICdudW1iZXInIHx8IGVsZW1lbnRTaGFwZS5zb21lKGRpbSA9PiBkaW0gPCAwKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogR2VuZXJhdGUgdGhlIG91dHB1dCBlbGVtZW50IHNoYXBlIGZyb20gdGhlIGxpc3QgZWxlbWVudFNoYXBlLCBsaXN0IHRlbnNvcnNcbiAqIGFuZCBpbnB1dCBwYXJhbS5cbiAqIEBwYXJhbSBsaXN0RWxlbWVudFNoYXBlXG4gKiBAcGFyYW0gdGVuc29yc1xuICogQHBhcmFtIGVsZW1lbnRTaGFwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5mZXJFbGVtZW50U2hhcGUoXG4gICAgbGlzdEVsZW1lbnRTaGFwZTogbnVtYmVyfG51bWJlcltdLCB0ZW5zb3JzOiBUZW5zb3JbXSxcbiAgICBlbGVtZW50U2hhcGU6IG51bWJlcnxudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgbGV0IHBhcnRpYWxTaGFwZSA9IG1lcmdlRWxlbWVudFNoYXBlKGxpc3RFbGVtZW50U2hhcGUsIGVsZW1lbnRTaGFwZSk7XG4gIGNvbnN0IG5vdGZ1bGxEZWZpbmVkU2hhcGUgPSAhZnVsbERlZmluZWRTaGFwZShwYXJ0aWFsU2hhcGUpO1xuICBpZiAobm90ZnVsbERlZmluZWRTaGFwZSAmJiB0ZW5zb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRyaWVkIHRvIGNhbGN1bGF0ZSBlbGVtZW50cyBvZiBhbiBlbXB0eSBsaXN0YCArXG4gICAgICAgIGAgd2l0aCBub24tZnVsbHktZGVmaW5lZCBlbGVtZW50U2hhcGU6ICR7cGFydGlhbFNoYXBlfWApO1xuICB9XG4gIGlmIChub3RmdWxsRGVmaW5lZFNoYXBlKSB7XG4gICAgdGVuc29ycy5mb3JFYWNoKHRlbnNvciA9PiB7XG4gICAgICBwYXJ0aWFsU2hhcGUgPSBtZXJnZUVsZW1lbnRTaGFwZSh0ZW5zb3Iuc2hhcGUsIHBhcnRpYWxTaGFwZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCFmdWxsRGVmaW5lZFNoYXBlKHBhcnRpYWxTaGFwZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vbi1mdWxseS1kZWZpbmVkIGVsZW1lbnRTaGFwZTogJHtwYXJ0aWFsU2hhcGV9YCk7XG4gIH1cbiAgcmV0dXJuIHBhcnRpYWxTaGFwZSBhcyBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRWxlbWVudFNoYXBlKFxuICAgIGVsZW1lbnRTaGFwZUE6IG51bWJlcnxudW1iZXJbXSwgZWxlbWVudFNoYXBlQjogbnVtYmVyfG51bWJlcltdKTogbnVtYmVyfFxuICAgIG51bWJlcltdIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50U2hhcGVBID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBlbGVtZW50U2hhcGVCO1xuICB9XG4gIGlmICh0eXBlb2YgZWxlbWVudFNoYXBlQiA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZWxlbWVudFNoYXBlQTtcbiAgfVxuXG4gIGlmIChlbGVtZW50U2hhcGVBLmxlbmd0aCAhPT0gZWxlbWVudFNoYXBlQi5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEluY29tcGF0aWJsZSByYW5rcyBkdXJpbmcgbWVyZ2U6ICR7ZWxlbWVudFNoYXBlQX0gdnMuICR7XG4gICAgICAgIGVsZW1lbnRTaGFwZUJ9YCk7XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudFNoYXBlQS5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGRpbTAgPSBlbGVtZW50U2hhcGVBW2ldO1xuICAgIGNvbnN0IGRpbTEgPSBlbGVtZW50U2hhcGVCW2ldO1xuICAgIGlmIChkaW0wID49IDAgJiYgZGltMSA+PSAwICYmIGRpbTAgIT09IGRpbTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5jb21wYXRpYmxlIHNoYXBlIGR1cmluZyBtZXJnZTogJHtlbGVtZW50U2hhcGVBfSB2cy4gJHtcbiAgICAgICAgICBlbGVtZW50U2hhcGVCfWApO1xuICAgIH1cbiAgICByZXN1bHRbaV0gPSBkaW0wID49IDAgPyBkaW0wIDogZGltMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "TensorArray",
    ()=>TensorArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/unstack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js [app-client] (ecmascript)");
;
;
class TensorArray {
    constructor(name, dtype, maxSize, elementShape, identicalElementShapes, dynamicSize, clearAfterRead){
        this.name = name;
        this.dtype = dtype;
        this.maxSize = maxSize;
        this.elementShape = elementShape;
        this.identicalElementShapes = identicalElementShapes;
        this.dynamicSize = dynamicSize;
        this.clearAfterRead = clearAfterRead;
        this.tensors = [];
        this.closed_ = false;
        this.idTensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"])(0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(this.idTensor);
    }
    get id() {
        return this.idTensor.id;
    }
    get closed() {
        return this.closed_;
    }
    /**
     * Dispose the tensors and idTensor and mark the TensoryArray as closed.
     */ clearAndClose(keepIds) {
        this.tensors.forEach((tensor)=>{
            if (keepIds == null || !keepIds.has(tensor.tensor.id)) {
                tensor.tensor.dispose();
            }
        });
        this.tensors = [];
        this.closed_ = true;
        this.idTensor.dispose();
    }
    size() {
        return this.tensors.length;
    }
    /**
     * Read the value at location index in the TensorArray.
     * @param index Number the index to read from.
     */ read(index) {
        if (this.closed_) {
            throw new Error(`TensorArray ${this.name} has already been closed.`);
        }
        if (index < 0 || index >= this.size()) {
            throw new Error(`Tried to read from index ${index}, but array size is: ${this.size()}`);
        }
        const tensorWithState = this.tensors[index];
        if (tensorWithState.cleared) {
            throw new Error(`TensorArray ${this.name}: Could not read index ${index} twice because it was cleared after a previous read ` + `(perhaps try setting clear_after_read = false?).`);
        }
        if (this.clearAfterRead) {
            tensorWithState.cleared = true;
        }
        tensorWithState.read = true;
        return tensorWithState.tensor;
    }
    /**
     * Helper method to read multiple tensors from the specified indices.
     */ readMany(indices) {
        return indices.map((index)=>this.read(index));
    }
    /**
     * Write value into the index of the TensorArray.
     * @param index number the index to write to.
     * @param tensor
     */ write(index, tensor) {
        if (this.closed_) {
            throw new Error(`TensorArray ${this.name} has already been closed.`);
        }
        if (index < 0 || !this.dynamicSize && index >= this.maxSize) {
            throw new Error(`Tried to write to index ${index}, but array is not resizeable and size is: ${this.maxSize}`);
        }
        const t = this.tensors[index] || {};
        if (tensor.dtype !== this.dtype) {
            throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index},
          because the value dtype is ${tensor.dtype}, but TensorArray dtype is ${this.dtype}.`);
        }
        // Set the shape for the first time write to unknow shape tensor array
        if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0)) {
            this.elementShape = tensor.shape;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.elementShape, tensor.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${index}.`);
        if (t.read) {
            throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been read.`);
        }
        if (t.written) {
            throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${index}, because it has already been written.`);
        }
        t.tensor = tensor;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(tensor);
        t.written = true;
        this.tensors[index] = t;
    }
    /**
     * Helper method to write multiple tensors to the specified indices.
     */ writeMany(indices, tensors) {
        if (indices.length !== tensors.length) {
            throw new Error(`TensorArray ${this.name}: could not write multiple tensors,` + `because the index size: ${indices.length} is not the same as tensors size: ${tensors.length}.`);
        }
        indices.forEach((i, index)=>this.write(i, tensors[index]));
    }
    /**
     * Return selected values in the TensorArray as a packed Tensor. All of
     * selected values must have been written and their shapes must all match.
     * @param [indices] number[] Optional. Taking values in [0, max_value). If the
     *    TensorArray is not dynamic, max_value=size(). If not specified returns
     *    all tensors in the original order.
     * @param [dtype]
     */ gather(indices, dtype) {
        if (!!dtype && dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${dtype}`);
        }
        if (!indices) {
            indices = [];
            for(let i = 0; i < this.size(); i++){
                indices.push(i);
            }
        } else {
            indices = indices.slice(0, this.size());
        }
        if (indices.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])([], [
                0
            ].concat(this.elementShape));
        }
        // Read all the PersistentTensors into a vector to keep track of
        // their memory.
        const tensors = this.readMany(indices);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.elementShape, tensors[0].shape, 'TensorArray shape mismatch: ');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"])(tensors, 0);
    }
    /**
     * Return the values in the TensorArray as a concatenated Tensor.
     */ concat(dtype) {
        if (!!dtype && dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${dtype}`);
        }
        if (this.size() === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])([], [
                0
            ].concat(this.elementShape));
        }
        const indices = [];
        for(let i = 0; i < this.size(); i++){
            indices.push(i);
        }
        // Collect all the tensors from the tensors array.
        const tensors = this.readMany(indices);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.elementShape, tensors[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${tensors[0].shape})`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(tensors, 0);
    }
    /**
     * Scatter the values of a Tensor in specific indices of a TensorArray.
     * @param indices number[] values in [0, max_value). If the
     *    TensorArray is not dynamic, max_value=size().
     * @param tensor Tensor input tensor.
     */ scatter(indices, tensor) {
        if (tensor.dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
        }
        if (indices.length !== tensor.shape[0]) {
            throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
        }
        const maxIndex = Math.max(...indices);
        if (!this.dynamicSize && maxIndex >= this.maxSize) {
            throw new Error(`Max index must be < array size (${maxIndex}  vs. ${this.maxSize})`);
        }
        this.writeMany(indices, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"])(tensor, 0));
    }
    /**
     * Split the values of a Tensor into the TensorArray.
     * @param length number[] with the lengths to use when splitting value along
     *    its first dimension.
     * @param tensor Tensor, the tensor to split.
     */ split(length, tensor) {
        if (tensor.dtype !== this.dtype) {
            throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${tensor.dtype}`);
        }
        let totalLength = 0;
        const cumulativeLengths = length.map((len)=>{
            totalLength += len;
            return totalLength;
        });
        if (totalLength !== tensor.shape[0]) {
            throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
        }
        if (!this.dynamicSize && length.length !== this.maxSize) {
            throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${length.length}), ` + 'and the TensorArray is not marked as dynamically resizeable');
        }
        const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
        const tensors = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            tensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(tensor, [
                1,
                totalLength,
                elementPerRow
            ]);
            for(let i = 0; i < length.length; ++i){
                const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
                const indices = [
                    0,
                    previousLength,
                    0
                ];
                const sizes = [
                    1,
                    length[i],
                    elementPerRow
                ];
                tensors[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])(tensor, indices, sizes), this.elementShape);
            }
            return tensors;
        });
        const indices = [];
        for(let i = 0; i < length.length; i++){
            indices[i] = i;
        }
        this.writeMany(indices, tensors);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yX2FycmF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb252ZXJ0ZXIvc3JjL2V4ZWN1dG9yL3RlbnNvcl9hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFZLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUzSCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVFuRTs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUNhLElBQVksRUFBVyxLQUFlLEVBQVUsT0FBZSxFQUNoRSxZQUFzQixFQUFXLHNCQUErQixFQUMvRCxXQUFvQixFQUFXLGNBQXVCO1FBRnRELFNBQUksR0FBSixJQUFJLENBQVE7UUFBVyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNoRSxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUFXLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBUztRQUMvRCxnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUFXLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBTjNELFlBQU8sR0FBc0IsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFNdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENB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RUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDeEU7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2NvbmNhdCwgRGF0YVR5cGUsIGtlZXAsIHJlc2hhcGUsIHNjYWxhciwgc2xpY2UsIHN0YWNrLCBUZW5zb3IsIHRlbnNvciwgdGlkeSwgdW5zdGFja30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHthc3NlcnRTaGFwZXNNYXRjaEFsbG93VW5kZWZpbmVkU2l6ZX0gZnJvbSAnLi90ZW5zb3JfdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRlbnNvcldpdGhTdGF0ZSB7XG4gIHRlbnNvcj86IFRlbnNvcjtcbiAgd3JpdHRlbj86IGJvb2xlYW47XG4gIHJlYWQ/OiBib29sZWFuO1xuICBjbGVhcmVkPzogYm9vbGVhbjtcbn1cbi8qKlxuICogVGhlIFRlbnNvckFycmF5IG9iamVjdCBrZWVwcyBhbiBhcnJheSBvZiBUZW5zb3JzLiAgSXRcbiAqIGFsbG93cyByZWFkaW5nIGZyb20gdGhlIGFycmF5IGFuZCB3cml0aW5nIHRvIHRoZSBhcnJheS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbnNvckFycmF5IHtcbiAgcHJpdmF0ZSB0ZW5zb3JzOiBUZW5zb3JXaXRoU3RhdGVbXSA9IFtdO1xuICBwcml2YXRlIGNsb3NlZF8gPSBmYWxzZTtcbiAgcmVhZG9ubHkgaWRUZW5zb3I6IFRlbnNvcjtcbiAgY29uc3RydWN0b3IoXG4gICAgICByZWFkb25seSBuYW1lOiBzdHJpbmcsIHJlYWRvbmx5IGR0eXBlOiBEYXRhVHlwZSwgcHJpdmF0ZSBtYXhTaXplOiBudW1iZXIsXG4gICAgICBwcml2YXRlIGVsZW1lbnRTaGFwZTogbnVtYmVyW10sIHJlYWRvbmx5IGlkZW50aWNhbEVsZW1lbnRTaGFwZXM6IGJvb2xlYW4sXG4gICAgICByZWFkb25seSBkeW5hbWljU2l6ZTogYm9vbGVhbiwgcmVhZG9ubHkgY2xlYXJBZnRlclJlYWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlkVGVuc29yID0gc2NhbGFyKDApO1xuICAgIGtlZXAodGhpcy5pZFRlbnNvcik7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRUZW5zb3IuaWQ7XG4gIH1cblxuICBnZXQgY2xvc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmNsb3NlZF87XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSB0aGUgdGVuc29ycyBhbmQgaWRUZW5zb3IgYW5kIG1hcmsgdGhlIFRlbnNvcnlBcnJheSBhcyBjbG9zZWQuXG4gICAqL1xuICBjbGVhckFuZENsb3NlKGtlZXBJZHM/OiBTZXQ8bnVtYmVyPikge1xuICAgIHRoaXMudGVuc29ycy5mb3JFYWNoKHRlbnNvciA9PiB7XG4gICAgICBpZiAoa2VlcElkcyA9PSBudWxsIHx8ICFrZWVwSWRzLmhhcyh0ZW5zb3IudGVuc29yLmlkKSkge1xuICAgICAgICB0ZW5zb3IudGVuc29yLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRlbnNvcnMgPSBbXTtcbiAgICB0aGlzLmNsb3NlZF8gPSB0cnVlO1xuICAgIHRoaXMuaWRUZW5zb3IuZGlzcG9zZSgpO1xuICB9XG5cbiAgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRlbnNvcnMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdGhlIHZhbHVlIGF0IGxvY2F0aW9uIGluZGV4IGluIHRoZSBUZW5zb3JBcnJheS5cbiAgICogQHBhcmFtIGluZGV4IE51bWJlciB0aGUgaW5kZXggdG8gcmVhZCBmcm9tLlxuICAgKi9cbiAgcmVhZChpbmRleDogbnVtYmVyKTogVGVuc29yIHtcbiAgICBpZiAodGhpcy5jbG9zZWRfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRlbnNvckFycmF5ICR7dGhpcy5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZC5gKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuc2l6ZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyaWVkIHRvIHJlYWQgZnJvbSBpbmRleCAke2luZGV4fSwgYnV0IGFycmF5IHNpemUgaXM6ICR7XG4gICAgICAgICAgdGhpcy5zaXplKCl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGVuc29yV2l0aFN0YXRlID0gdGhpcy50ZW5zb3JzW2luZGV4XTtcbiAgICBpZiAodGVuc29yV2l0aFN0YXRlLmNsZWFyZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGVuc29yQXJyYXkgJHt0aGlzLm5hbWV9OiBDb3VsZCBub3QgcmVhZCBpbmRleCAke1xuICAgICAgICAgICAgICBpbmRleH0gdHdpY2UgYmVjYXVzZSBpdCB3YXMgY2xlYXJlZCBhZnRlciBhIHByZXZpb3VzIHJlYWQgYCArXG4gICAgICAgICAgYChwZXJoYXBzIHRyeSBzZXR0aW5nIGNsZWFyX2FmdGVyX3JlYWQgPSBmYWxzZT8pLmApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsZWFyQWZ0ZXJSZWFkKSB7XG4gICAgICB0ZW5zb3JXaXRoU3RhdGUuY2xlYXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGVuc29yV2l0aFN0YXRlLnJlYWQgPSB0cnVlO1xuICAgIHJldHVybiB0ZW5zb3JXaXRoU3RhdGUudGVuc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gcmVhZCBtdWx0aXBsZSB0ZW5zb3JzIGZyb20gdGhlIHNwZWNpZmllZCBpbmRpY2VzLlxuICAgKi9cbiAgcmVhZE1hbnkoaW5kaWNlczogbnVtYmVyW10pOiBUZW5zb3JbXSB7XG4gICAgcmV0dXJuIGluZGljZXMubWFwKGluZGV4ID0+IHRoaXMucmVhZChpbmRleCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIHZhbHVlIGludG8gdGhlIGluZGV4IG9mIHRoZSBUZW5zb3JBcnJheS5cbiAgICogQHBhcmFtIGluZGV4IG51bWJlciB0aGUgaW5kZXggdG8gd3JpdGUgdG8uXG4gICAqIEBwYXJhbSB0ZW5zb3JcbiAgICovXG4gIHdyaXRlKGluZGV4OiBudW1iZXIsIHRlbnNvcjogVGVuc29yKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VkXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUZW5zb3JBcnJheSAke3RoaXMubmFtZX0gaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgMCB8fCAhdGhpcy5keW5hbWljU2l6ZSAmJiBpbmRleCA+PSB0aGlzLm1heFNpemUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVHJpZWQgdG8gd3JpdGUgdG8gaW5kZXggJHtcbiAgICAgICAgICBpbmRleH0sIGJ1dCBhcnJheSBpcyBub3QgcmVzaXplYWJsZSBhbmQgc2l6ZSBpczogJHt0aGlzLm1heFNpemV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgdCA9IHRoaXMudGVuc29yc1tpbmRleF0gfHwge307XG5cbiAgICBpZiAodGVuc29yLmR0eXBlICE9PSB0aGlzLmR0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRlbnNvckFycmF5ICR7XG4gICAgICAgICAgdGhpcy5uYW1lfTogQ291bGQgbm90IHdyaXRlIHRvIFRlbnNvckFycmF5IGluZGV4ICR7aW5kZXh9LFxuICAgICAgICAgIGJlY2F1c2UgdGhlIHZhbHVlIGR0eXBlIGlzICR7XG4gICAgICAgICAgdGVuc29yLmR0eXBlfSwgYnV0IFRlbnNvckFycmF5IGR0eXBlIGlzICR7dGhpcy5kdHlwZX0uYCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBzaGFwZSBmb3IgdGhlIGZpcnN0IHRpbWUgd3JpdGUgdG8gdW5rbm93IHNoYXBlIHRlbnNvciBhcnJheVxuICAgIGlmICh0aGlzLnNpemUoKSA9PT0gMCAmJlxuICAgICAgICAodGhpcy5lbGVtZW50U2hhcGUgPT0gbnVsbCB8fCB0aGlzLmVsZW1lbnRTaGFwZS5sZW5ndGggPT09IDApKSB7XG4gICAgICB0aGlzLmVsZW1lbnRTaGFwZSA9IHRlbnNvci5zaGFwZTtcbiAgICB9XG5cbiAgICBhc3NlcnRTaGFwZXNNYXRjaEFsbG93VW5kZWZpbmVkU2l6ZShcbiAgICAgICAgdGhpcy5lbGVtZW50U2hhcGUsIHRlbnNvci5zaGFwZSxcbiAgICAgICAgYFRlbnNvckFycmF5ICR7dGhpcy5uYW1lfTogQ291bGQgbm90IHdyaXRlIHRvIFRlbnNvckFycmF5IGluZGV4ICR7XG4gICAgICAgICAgICBpbmRleH0uYCk7XG5cbiAgICBpZiAodC5yZWFkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRlbnNvckFycmF5ICR7dGhpcy5uYW1lfTogQ291bGQgbm90IHdyaXRlIHRvIFRlbnNvckFycmF5IGluZGV4ICR7XG4gICAgICAgICAgICAgIGluZGV4fSwgYmVjYXVzZSBpdCBoYXMgYWxyZWFkeSBiZWVuIHJlYWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHQud3JpdHRlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUZW5zb3JBcnJheSAke3RoaXMubmFtZX06IENvdWxkIG5vdCB3cml0ZSB0byBUZW5zb3JBcnJheSBpbmRleCAke1xuICAgICAgICAgICAgICBpbmRleH0sIGJlY2F1c2UgaXQgaGFzIGFscmVhZHkgYmVlbiB3cml0dGVuLmApO1xuICAgIH1cblxuICAgIHQudGVuc29yID0gdGVuc29yO1xuICAgIGtlZXAodGVuc29yKTtcbiAgICB0LndyaXR0ZW4gPSB0cnVlO1xuXG4gICAgdGhpcy50ZW5zb3JzW2luZGV4XSA9IHQ7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byB3cml0ZSBtdWx0aXBsZSB0ZW5zb3JzIHRvIHRoZSBzcGVjaWZpZWQgaW5kaWNlcy5cbiAgICovXG4gIHdyaXRlTWFueShpbmRpY2VzOiBudW1iZXJbXSwgdGVuc29yczogVGVuc29yW10pIHtcbiAgICBpZiAoaW5kaWNlcy5sZW5ndGggIT09IHRlbnNvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRlbnNvckFycmF5ICR7dGhpcy5uYW1lfTogY291bGQgbm90IHdyaXRlIG11bHRpcGxlIHRlbnNvcnMsYCArXG4gICAgICAgICAgYGJlY2F1c2UgdGhlIGluZGV4IHNpemU6ICR7XG4gICAgICAgICAgICAgIGluZGljZXMubGVuZ3RofSBpcyBub3QgdGhlIHNhbWUgYXMgdGVuc29ycyBzaXplOiAke1xuICAgICAgICAgICAgICB0ZW5zb3JzLmxlbmd0aH0uYCk7XG4gICAgfVxuXG4gICAgaW5kaWNlcy5mb3JFYWNoKChpLCBpbmRleCkgPT4gdGhpcy53cml0ZShpLCB0ZW5zb3JzW2luZGV4XSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBzZWxlY3RlZCB2YWx1ZXMgaW4gdGhlIFRlbnNvckFycmF5IGFzIGEgcGFja2VkIFRlbnNvci4gQWxsIG9mXG4gICAqIHNlbGVjdGVkIHZhbHVlcyBtdXN0IGhhdmUgYmVlbiB3cml0dGVuIGFuZCB0aGVpciBzaGFwZXMgbXVzdCBhbGwgbWF0Y2guXG4gICAqIEBwYXJhbSBbaW5kaWNlc10gbnVtYmVyW10gT3B0aW9uYWwuIFRha2luZyB2YWx1ZXMgaW4gWzAsIG1heF92YWx1ZSkuIElmIHRoZVxuICAgKiAgICBUZW5zb3JBcnJheSBpcyBub3QgZHluYW1pYywgbWF4X3ZhbHVlPXNpemUoKS4gSWYgbm90IHNwZWNpZmllZCByZXR1cm5zXG4gICAqICAgIGFsbCB0ZW5zb3JzIGluIHRoZSBvcmlnaW5hbCBvcmRlci5cbiAgICogQHBhcmFtIFtkdHlwZV1cbiAgICovXG4gIGdhdGhlcihpbmRpY2VzPzogbnVtYmVyW10sIGR0eXBlPzogRGF0YVR5cGUpOiBUZW5zb3Ige1xuICAgIGlmICghIWR0eXBlICYmIGR0eXBlICE9PSB0aGlzLmR0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRlbnNvckFycmF5IGR0eXBlIGlzICR7XG4gICAgICAgICAgdGhpcy5kdHlwZX0gYnV0IGdhdGhlciByZXF1ZXN0ZWQgZHR5cGUgJHtkdHlwZX1gKTtcbiAgICB9XG5cbiAgICBpZiAoIWluZGljZXMpIHtcbiAgICAgIGluZGljZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplKCk7IGkrKykge1xuICAgICAgICBpbmRpY2VzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGljZXMgPSBpbmRpY2VzLnNsaWNlKDAsIHRoaXMuc2l6ZSgpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0ZW5zb3IoW10sIFswXS5jb25jYXQodGhpcy5lbGVtZW50U2hhcGUpKTtcbiAgICB9XG5cbiAgICAvLyBSZWFkIGFsbCB0aGUgUGVyc2lzdGVudFRlbnNvcnMgaW50byBhIHZlY3RvciB0byBrZWVwIHRyYWNrIG9mXG4gICAgLy8gdGhlaXIgbWVtb3J5LlxuICAgIGNvbnN0IHRlbnNvcnMgPSB0aGlzLnJlYWRNYW55KGluZGljZXMpO1xuXG4gICAgYXNzZXJ0U2hhcGVzTWF0Y2hBbGxvd1VuZGVmaW5lZFNpemUoXG4gICAgICAgIHRoaXMuZWxlbWVudFNoYXBlLCB0ZW5zb3JzWzBdLnNoYXBlLCAnVGVuc29yQXJyYXkgc2hhcGUgbWlzbWF0Y2g6ICcpO1xuXG4gICAgcmV0dXJuIHN0YWNrKHRlbnNvcnMsIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgdmFsdWVzIGluIHRoZSBUZW5zb3JBcnJheSBhcyBhIGNvbmNhdGVuYXRlZCBUZW5zb3IuXG4gICAqL1xuICBjb25jYXQoZHR5cGU/OiBEYXRhVHlwZSk6IFRlbnNvciB7XG4gICAgaWYgKCEhZHR5cGUgJiYgZHR5cGUgIT09IHRoaXMuZHR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGVuc29yQXJyYXkgZHR5cGUgaXMgJHtcbiAgICAgICAgICB0aGlzLmR0eXBlfSBidXQgY29uY2F0IHJlcXVlc3RlZCBkdHlwZSAke2R0eXBlfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNpemUoKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRlbnNvcihbXSwgWzBdLmNvbmNhdCh0aGlzLmVsZW1lbnRTaGFwZSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZSgpOyBpKyspIHtcbiAgICAgIGluZGljZXMucHVzaChpKTtcbiAgICB9XG4gICAgLy8gQ29sbGVjdCBhbGwgdGhlIHRlbnNvcnMgZnJvbSB0aGUgdGVuc29ycyBhcnJheS5cbiAgICBjb25zdCB0ZW5zb3JzID0gdGhpcy5yZWFkTWFueShpbmRpY2VzKTtcblxuICAgIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgICB0aGlzLmVsZW1lbnRTaGFwZSwgdGVuc29yc1swXS5zaGFwZSxcbiAgICAgICAgYFRlbnNvckFycmF5IHNoYXBlIG1pc21hdGNoOiB0ZW5zb3IgYXJyYXkgc2hhcGUgKCR7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRTaGFwZX0pIHZzIGZpcnN0IHRlbnNvciBzaGFwZSAoJHt0ZW5zb3JzWzBdLnNoYXBlfSlgKTtcblxuICAgIHJldHVybiBjb25jYXQodGVuc29ycywgMCk7XG4gIH1cblxuICAvKipcbiAgICogU2NhdHRlciB0aGUgdmFsdWVzIG9mIGEgVGVuc29yIGluIHNwZWNpZmljIGluZGljZXMgb2YgYSBUZW5zb3JBcnJheS5cbiAgICogQHBhcmFtIGluZGljZXMgbnVtYmVyW10gdmFsdWVzIGluIFswLCBtYXhfdmFsdWUpLiBJZiB0aGVcbiAgICogICAgVGVuc29yQXJyYXkgaXMgbm90IGR5bmFtaWMsIG1heF92YWx1ZT1zaXplKCkuXG4gICAqIEBwYXJhbSB0ZW5zb3IgVGVuc29yIGlucHV0IHRlbnNvci5cbiAgICovXG4gIHNjYXR0ZXIoaW5kaWNlczogbnVtYmVyW10sIHRlbnNvcjogVGVuc29yKSB7XG4gICAgaWYgKHRlbnNvci5kdHlwZSAhPT0gdGhpcy5kdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUZW5zb3JBcnJheSBkdHlwZSBpcyAke1xuICAgICAgICAgIHRoaXMuZHR5cGV9IGJ1dCB0ZW5zb3IgaGFzIGR0eXBlICR7dGVuc29yLmR0eXBlfWApO1xuICAgIH1cblxuICAgIGlmIChpbmRpY2VzLmxlbmd0aCAhPT0gdGVuc29yLnNoYXBlWzBdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbihpbmRpY2VzKSA9PSB0ZW5zb3Iuc2hhcGVbMF0sIGJ1dCBzYXc6ICR7XG4gICAgICAgICAgaW5kaWNlcy5sZW5ndGh9IHZzLiAke3RlbnNvci5zaGFwZVswXX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXhJbmRleCA9IE1hdGgubWF4KC4uLmluZGljZXMpO1xuXG4gICAgaWYgKCF0aGlzLmR5bmFtaWNTaXplICYmIG1heEluZGV4ID49IHRoaXMubWF4U2l6ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBNYXggaW5kZXggbXVzdCBiZSA8IGFycmF5IHNpemUgKCR7bWF4SW5kZXh9ICB2cy4gJHt0aGlzLm1heFNpemV9KWApO1xuICAgIH1cblxuICAgIHRoaXMud3JpdGVNYW55KGluZGljZXMsIHVuc3RhY2sodGVuc29yLCAwKSk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgdGhlIHZhbHVlcyBvZiBhIFRlbnNvciBpbnRvIHRoZSBUZW5zb3JBcnJheS5cbiAgICogQHBhcmFtIGxlbmd0aCBudW1iZXJbXSB3aXRoIHRoZSBsZW5ndGhzIHRvIHVzZSB3aGVuIHNwbGl0dGluZyB2YWx1ZSBhbG9uZ1xuICAgKiAgICBpdHMgZmlyc3QgZGltZW5zaW9uLlxuICAgKiBAcGFyYW0gdGVuc29yIFRlbnNvciwgdGhlIHRlbnNvciB0byBzcGxpdC5cbiAgICovXG4gIHNwbGl0KGxlbmd0aDogbnVtYmVyW10sIHRlbnNvcjogVGVuc29yKSB7XG4gICAgaWYgKHRlbnNvci5kdHlwZSAhPT0gdGhpcy5kdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUZW5zb3JBcnJheSBkdHlwZSBpcyAke1xuICAgICAgICAgIHRoaXMuZHR5cGV9IGJ1dCB0ZW5zb3IgaGFzIGR0eXBlICR7dGVuc29yLmR0eXBlfWApO1xuICAgIH1cbiAgICBsZXQgdG90YWxMZW5ndGggPSAwO1xuICAgIGNvbnN0IGN1bXVsYXRpdmVMZW5ndGhzID0gbGVuZ3RoLm1hcChsZW4gPT4ge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGVuO1xuICAgICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xuICAgIH0pO1xuXG4gICAgaWYgKHRvdGFsTGVuZ3RoICE9PSB0ZW5zb3Iuc2hhcGVbMF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgc3VtIG9mIGxlbmd0aHMgdG8gYmUgZXF1YWwgdG9cbiAgICAgICAgICB0ZW5zb3Iuc2hhcGVbMF0sIGJ1dCBzdW0gb2YgbGVuZ3RocyBpc1xuICAgICAgICAke3RvdGFsTGVuZ3RofSwgYW5kIHRlbnNvcidzIHNoYXBlIGlzOiAke3RlbnNvci5zaGFwZX1gKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZHluYW1pY1NpemUgJiYgbGVuZ3RoLmxlbmd0aCAhPT0gdGhpcy5tYXhTaXplKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRlbnNvckFycmF5J3Mgc2l6ZSBpcyBub3QgZXF1YWwgdG8gdGhlIHNpemUgb2YgbGVuZ3RocyAoJHtcbiAgICAgICAgICAgICAgdGhpcy5tYXhTaXplfSB2cy4gJHtsZW5ndGgubGVuZ3RofSksIGAgK1xuICAgICAgICAgICdhbmQgdGhlIFRlbnNvckFycmF5IGlzIG5vdCBtYXJrZWQgYXMgZHluYW1pY2FsbHkgcmVzaXplYWJsZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRQZXJSb3cgPSB0b3RhbExlbmd0aCA9PT0gMCA/IDAgOiB0ZW5zb3Iuc2l6ZSAvIHRvdGFsTGVuZ3RoO1xuICAgIGNvbnN0IHRlbnNvcnM6IFRlbnNvcltdID0gW107XG4gICAgdGlkeSgoKSA9PiB7XG4gICAgICB0ZW5zb3IgPSByZXNoYXBlKHRlbnNvciwgWzEsIHRvdGFsTGVuZ3RoLCBlbGVtZW50UGVyUm93XSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aC5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c0xlbmd0aCA9IChpID09PSAwKSA/IDAgOiBjdW11bGF0aXZlTGVuZ3Roc1tpIC0gMV07XG4gICAgICAgIGNvbnN0IGluZGljZXMgPSBbMCwgcHJldmlvdXNMZW5ndGgsIDBdO1xuICAgICAgICBjb25zdCBzaXplcyA9IFsxLCBsZW5ndGhbaV0sIGVsZW1lbnRQZXJSb3ddO1xuICAgICAgICB0ZW5zb3JzW2ldID0gcmVzaGFwZShzbGljZSh0ZW5zb3IsIGluZGljZXMsIHNpemVzKSwgdGhpcy5lbGVtZW50U2hhcGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbnNvcnM7XG4gICAgfSk7XG4gICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbmRpY2VzW2ldID0gaTtcbiAgICB9XG4gICAgdGhpcy53cml0ZU1hbnkoaW5kaWNlcywgdGVuc29ycyk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "TensorList",
    ()=>TensorList,
    "fromTensor",
    ()=>fromTensor,
    "reserve",
    ()=>reserve,
    "scatter",
    ()=>scatter,
    "split",
    ()=>split
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/unstack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/tensor_utils.js [app-client] (ecmascript)");
;
;
class TensorList {
    get id() {
        return this.idTensor.id;
    }
    /**
     *
     * @param tensors list of tensors
     * @param elementShape shape of each tensor, this can be a single number (any
     * shape is allowed) or partial shape (dim = -1).
     * @param elementDtype data type of each tensor
     * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
     *   meaning that the size of `tensors` is unbounded.
     */ constructor(tensors, elementShape, elementDtype, maxNumElements = -1){
        this.tensors = tensors;
        this.elementShape = elementShape;
        this.elementDtype = elementDtype;
        if (tensors != null) {
            tensors.forEach((tensor)=>{
                if (elementDtype !== tensor.dtype) {
                    throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${tensor.dtype}`);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(elementShape, tensor.shape, 'TensorList shape mismatch: ');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(tensor);
            });
        }
        this.idTensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"])(0);
        this.maxNumElements = maxNumElements;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(this.idTensor);
    }
    /**
     * Get a new TensorList containing a copy of the underlying tensor container.
     */ copy() {
        return new TensorList([
            ...this.tensors
        ], this.elementShape, this.elementDtype);
    }
    /**
     * Dispose the tensors and idTensor and clear the tensor list.
     */ clearAndClose(keepIds) {
        this.tensors.forEach((tensor)=>{
            if (keepIds == null || !keepIds.has(tensor.id)) {
                tensor.dispose();
            }
        });
        this.tensors.length = 0;
        this.idTensor.dispose();
    }
    /**
     * The size of the tensors in the tensor list.
     */ size() {
        return this.tensors.length;
    }
    /**
     * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
     * tf.Tensor.
     * @param elementShape shape of each tensor
     * @param elementDtype data type of each tensor
     * @param numElements the number of elements to stack
     */ stack(elementShape, elementDtype, numElements = -1) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        if (numElements !== -1 && this.tensors.length !== numElements) {
            throw new Error(`Operation expected a list with ${numElements} elements but got a list with ${this.tensors.length} elements.`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(elementShape, this.elementShape, 'TensorList shape mismatch: ');
        const outputElementShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferElementShape"])(this.elementShape, this.tensors, elementShape);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const reshapedTensors = this.tensors.map((tensor)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(tensor, outputElementShape));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"])(reshapedTensors, 0);
        });
    }
    /**
     * Pop a tensor from the end of the list.
     * @param elementShape shape of the tensor
     * @param elementDtype data type of the tensor
     */ popBack(elementShape, elementDtype) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        if (this.size() === 0) {
            throw new Error('Trying to pop from an empty list.');
        }
        const outputElementShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferElementShape"])(this.elementShape, this.tensors, elementShape);
        const tensor = this.tensors.pop();
        tensor.kept = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(tensor.shape, elementShape, 'TensorList shape mismatch: ');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(tensor, outputElementShape);
    }
    /**
     * Push a tensor to the end of the list.
     * @param tensor Tensor to be pushed.
     */ pushBack(tensor) {
        if (tensor.dtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(tensor.shape, this.elementShape, 'TensorList shape mismatch: ');
        if (this.maxNumElements === this.size()) {
            throw new Error(`Trying to push element into a full list.`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(tensor);
        this.tensors.push(tensor);
    }
    /**
     * Update the size of the list.
     * @param size the new size of the list.
     */ resize(size) {
        if (size < 0) {
            throw new Error(`TensorListResize expects size to be non-negative. Got: ${size}`);
        }
        if (this.maxNumElements !== -1 && size > this.maxNumElements) {
            throw new Error(`TensorListResize input size ${size} is greater maxNumElement ${this.maxNumElements}.`);
        }
        const destTensorList = new TensorList([], this.elementShape, this.elementDtype, this.maxNumElements);
        destTensorList.tensors.length = size;
        for(let i = 0; i < Math.min(this.tensors.length, size); ++i){
            destTensorList.tensors[i] = this.tensors[i];
        }
        return destTensorList;
    }
    /**
     * Retrieve the element at the provided index
     * @param elementShape shape of the tensor
     * @param elementDtype dtype of the tensor
     * @param elementIndex index of the tensor
     */ getItem(elementIndex, elementShape, elementDtype) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        if (elementIndex < 0 || elementIndex > this.tensors.length) {
            throw new Error(`Trying to access element ${elementIndex} in a list with ${this.tensors.length} elements.`);
        }
        if (this.tensors[elementIndex] == null) {
            throw new Error(`element at index ${elementIndex} is null.`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.tensors[elementIndex].shape, elementShape, 'TensorList shape mismatch: ');
        const outputElementShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferElementShape"])(this.elementShape, this.tensors, elementShape);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(this.tensors[elementIndex], outputElementShape);
    }
    /**
     * Set the tensor at the index
     * @param elementIndex index of the tensor
     * @param tensor the tensor to be inserted into the list
     */ setItem(elementIndex, tensor) {
        if (tensor.dtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${this.elementDtype}`);
        }
        if (elementIndex < 0 || this.maxNumElements !== -1 && elementIndex >= this.maxNumElements) {
            throw new Error(`Trying to set element ${elementIndex} in a list with max ${this.maxNumElements} elements.`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.elementShape, tensor.shape, 'TensorList shape mismatch: ');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(tensor);
        // dispose the previous value if it is replacing.
        if (this.tensors[elementIndex] != null) {
            this.tensors[elementIndex].kept = false;
        }
        this.tensors[elementIndex] = tensor;
    }
    /**
     * Return selected values in the TensorList as a stacked Tensor. All of
     * selected values must have been written and their shapes must all match.
     * @param indices indices of tensors to gather
     * @param elementDtype output tensor dtype
     * @param elementShape output tensor element shape
     */ gather(indices, elementDtype, elementShape) {
        if (elementDtype !== this.elementDtype) {
            throw new Error(`Invalid data types; op elements ${elementDtype}, but list elements ${this.elementDtype}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.elementShape, elementShape, 'TensorList shape mismatch: ');
        // When indices is greater than the size of the list, indices beyond the
        // size of the list are ignored.
        indices = indices.slice(0, this.size());
        const outputElementShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferElementShape"])(this.elementShape, this.tensors, elementShape);
        if (indices.length === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])([], [
                0
            ].concat(outputElementShape));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const tensors = indices.map((i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(this.tensors[i], outputElementShape));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"])(tensors, 0);
        });
    }
    /**
     * Return the values in the TensorList as a concatenated Tensor.
     * @param elementDtype output tensor dtype
     * @param elementShape output tensor element shape
     */ concat(elementDtype, elementShape) {
        if (!!elementDtype && elementDtype !== this.elementDtype) {
            throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${elementDtype}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(this.elementShape, elementShape, 'TensorList shape mismatch: ');
        const outputElementShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inferElementShape"])(this.elementShape, this.tensors, elementShape);
        if (this.size() === 0) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"])([], [
                0
            ].concat(outputElementShape));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const tensors = this.tensors.map((t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(t, outputElementShape));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(tensors, 0);
        });
    }
}
function fromTensor(tensor, elementShape, elementDtype) {
    const dtype = tensor.dtype;
    if (tensor.shape.length < 1) {
        throw new Error(`Tensor must be at least a vector, but saw shape: ${tensor.shape}`);
    }
    if (tensor.dtype !== elementDtype) {
        throw new Error(`Invalid data types; op elements ${tensor.dtype}, but list elements ${elementDtype}`);
    }
    const tensorElementShape = tensor.shape.slice(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertShapesMatchAllowUndefinedSize"])(tensorElementShape, elementShape, 'TensorList shape mismatch: ');
    const tensorList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"])(tensor);
    return new TensorList(tensorList, elementShape, dtype);
}
function reserve(elementShape, elementDtype, numElements, maxNumElements) {
    return new TensorList([], elementShape, elementDtype, maxNumElements);
}
function scatter(tensor, indices, elementShape, numElements) {
    if (indices.length !== tensor.shape[0]) {
        throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${indices.length} vs. ${tensor.shape[0]}`);
    }
    const maxIndex = Math.max(...indices);
    if (numElements != null && numElements !== -1 && maxIndex >= numElements) {
        throw new Error(`Max index must be < array size (${maxIndex}  vs. ${numElements})`);
    }
    const list = new TensorList([], elementShape, tensor.dtype, numElements);
    const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"])(tensor, 0);
    indices.forEach((value, index)=>{
        list.setItem(value, tensors[index]);
    });
    return list;
}
function split(tensor, length, elementShape) {
    let totalLength = 0;
    const cumulativeLengths = length.map((len)=>{
        totalLength += len;
        return totalLength;
    });
    if (totalLength !== tensor.shape[0]) {
        throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${totalLength}, and tensor's shape is: ${tensor.shape}`);
    }
    const shapeWithoutFirstDim = tensor.shape.slice(1);
    const outputElementShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$tensor_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeElementShape"])(shapeWithoutFirstDim, elementShape);
    const elementPerRow = totalLength === 0 ? 0 : tensor.size / totalLength;
    const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const tensors = [];
        tensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(tensor, [
            1,
            totalLength,
            elementPerRow
        ]);
        for(let i = 0; i < length.length; ++i){
            const previousLength = i === 0 ? 0 : cumulativeLengths[i - 1];
            const indices = [
                0,
                previousLength,
                0
            ];
            const sizes = [
                1,
                length[i],
                elementPerRow
            ];
            tensors[i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"])(tensor, indices, sizes), outputElementShape);
        }
        tensor.dispose();
        return tensors;
    });
    const list = new TensorList([], elementShape, tensor.dtype, length.length);
    for(let i = 0; i < tensors.length; i++){
        list.setItem(i, tensors[i]);
    }
    return list;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuc29yX2xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvbnZlcnRlci9zcmMvZXhlY3V0b3IvdGVuc29yX2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBWSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFM0gsT0FBTyxFQUFDLG1DQUFtQyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekc7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVILE1BQU0sT0FBTyxVQUFVO0lBSXJCLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNEOzs7Ozs7OztPQVFHO0lBQ0gsWUFDYSxPQUFpQixFQUFXLFlBQTZCLEVBQ3pELFlBQXNCLEVBQUUsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUQzQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQVcsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQ3pELGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ2pDLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixJQUFJLFlBQVksS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUNaLFlBQVksdUJBQXVCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRCxtQ0FBbUMsQ0FDL0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztn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QUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2NvbmNhdCwgRGF0YVR5cGUsIGtlZXAsIHJlc2hhcGUsIHNjYWxhciwgc2xpY2UsIHN0YWNrLCBUZW5zb3IsIHRlbnNvciwgdGlkeSwgdW5zdGFja30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHthc3NlcnRTaGFwZXNNYXRjaEFsbG93VW5kZWZpbmVkU2l6ZSwgaW5mZXJFbGVtZW50U2hhcGUsIG1lcmdlRWxlbWVudFNoYXBlfSBmcm9tICcuL3RlbnNvcl91dGlscyc7XG5cbi8qKlxuICogVGVuc29yTGlzdCBzdG9yZXMgYSBjb250YWluZXIgb2YgYHRmLlRlbnNvcmAgb2JqZWN0cywgd2hpY2ggYXJlIGFjY2Vzc2libGVcbiAqIHZpYSB0ZW5zb3JzIGZpZWxkLlxuICpcbiAqIEluIG9yZGVyIHRvIGdldCBhIGNvcHkgb2YgdGhlIHVuZGVybHlpbmcgbGlzdCwgdXNlIHRoZSBjb3B5IG1ldGhvZDpcbiAqIGBgYFxuICogICAgVGVuc29yTGlzdCBiID0gYS5jb3B5KCk7XG4gKiAgICBiLnRlbnNvcnMoKS5wdXNoQmFjayh0KTsgIC8vIFRoaXMgZG9lcyBub3QgbW9kaWZ5IGEudGVuc29ycygpLlxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgaXMgbm90IGEgZGVlcCBjb3B5OiB0aGUgbWVtb3J5IGxvY2F0aW9ucyBvZiB0aGUgdW5kZXJseWluZ1xuICogdGVuc29ycyB3aWxsIHN0aWxsIHBvaW50IHRvIHRoZSBzYW1lIGxvY2F0aW9ucyBvZiB0aGUgY29ycmVzcG9uZGluZyB0ZW5zb3JzXG4gKiBpbiB0aGUgb3JpZ2luYWwuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFRlbnNvckxpc3Qge1xuICByZWFkb25seSBpZFRlbnNvcjogVGVuc29yO1xuICBtYXhOdW1FbGVtZW50czogbnVtYmVyO1xuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZFRlbnNvci5pZDtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRlbnNvcnMgbGlzdCBvZiB0ZW5zb3JzXG4gICAqIEBwYXJhbSBlbGVtZW50U2hhcGUgc2hhcGUgb2YgZWFjaCB0ZW5zb3IsIHRoaXMgY2FuIGJlIGEgc2luZ2xlIG51bWJlciAoYW55XG4gICAqIHNoYXBlIGlzIGFsbG93ZWQpIG9yIHBhcnRpYWwgc2hhcGUgKGRpbSA9IC0xKS5cbiAgICogQHBhcmFtIGVsZW1lbnREdHlwZSBkYXRhIHR5cGUgb2YgZWFjaCB0ZW5zb3JcbiAgICogQHBhcmFtIG1heE51bUVsZW1lbnRzIFRoZSBtYXhpbXVtIGFsbG93ZWQgc2l6ZSBvZiBgdGVuc29yc2AuIERlZmF1bHRzIHRvIC0xXG4gICAqICAgbWVhbmluZyB0aGF0IHRoZSBzaXplIG9mIGB0ZW5zb3JzYCBpcyB1bmJvdW5kZWQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHJlYWRvbmx5IHRlbnNvcnM6IFRlbnNvcltdLCByZWFkb25seSBlbGVtZW50U2hhcGU6IG51bWJlcnxudW1iZXJbXSxcbiAgICAgIHJlYWRvbmx5IGVsZW1lbnREdHlwZTogRGF0YVR5cGUsIG1heE51bUVsZW1lbnRzID0gLTEpIHtcbiAgICBpZiAodGVuc29ycyAhPSBudWxsKSB7XG4gICAgICB0ZW5zb3JzLmZvckVhY2godGVuc29yID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnREdHlwZSAhPT0gdGVuc29yLmR0eXBlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGEgdHlwZXM7IG9wIGVsZW1lbnRzICR7XG4gICAgICAgICAgICAgIGVsZW1lbnREdHlwZX0sIGJ1dCBsaXN0IGVsZW1lbnRzICR7dGVuc29yLmR0eXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgICAgICAgZWxlbWVudFNoYXBlLCB0ZW5zb3Iuc2hhcGUsICdUZW5zb3JMaXN0IHNoYXBlIG1pc21hdGNoOiAnKTtcblxuICAgICAgICBrZWVwKHRlbnNvcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5pZFRlbnNvciA9IHNjYWxhcigwKTtcbiAgICB0aGlzLm1heE51bUVsZW1lbnRzID0gbWF4TnVtRWxlbWVudHM7XG4gICAga2VlcCh0aGlzLmlkVGVuc29yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBuZXcgVGVuc29yTGlzdCBjb250YWluaW5nIGEgY29weSBvZiB0aGUgdW5kZXJseWluZyB0ZW5zb3IgY29udGFpbmVyLlxuICAgKi9cbiAgY29weSgpOiBUZW5zb3JMaXN0IHtcbiAgICByZXR1cm4gbmV3IFRlbnNvckxpc3QoXG4gICAgICAgIFsuLi50aGlzLnRlbnNvcnNdLCB0aGlzLmVsZW1lbnRTaGFwZSwgdGhpcy5lbGVtZW50RHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgdGhlIHRlbnNvcnMgYW5kIGlkVGVuc29yIGFuZCBjbGVhciB0aGUgdGVuc29yIGxpc3QuXG4gICAqL1xuICBjbGVhckFuZENsb3NlKGtlZXBJZHM/OiBTZXQ8bnVtYmVyPikge1xuICAgIHRoaXMudGVuc29ycy5mb3JFYWNoKHRlbnNvciA9PiB7XG4gICAgICBpZiAoa2VlcElkcyA9PSBudWxsIHx8ICFrZWVwSWRzLmhhcyh0ZW5zb3IuaWQpKSB7XG4gICAgICAgIHRlbnNvci5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50ZW5zb3JzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5pZFRlbnNvci5kaXNwb3NlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSB0ZW5zb3JzIGluIHRoZSB0ZW5zb3IgbGlzdC5cbiAgICovXG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVuc29ycy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgdGVuc29yIHRoYXQgc3RhY2tzIGEgbGlzdCBvZiByYW5rLVIgdGYuVGVuc29ycyBpbnRvIG9uZSByYW5rLShSKzEpXG4gICAqIHRmLlRlbnNvci5cbiAgICogQHBhcmFtIGVsZW1lbnRTaGFwZSBzaGFwZSBvZiBlYWNoIHRlbnNvclxuICAgKiBAcGFyYW0gZWxlbWVudER0eXBlIGRhdGEgdHlwZSBvZiBlYWNoIHRlbnNvclxuICAgKiBAcGFyYW0gbnVtRWxlbWVudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBzdGFja1xuICAgKi9cbiAgc3RhY2soZWxlbWVudFNoYXBlOiBudW1iZXJbXSwgZWxlbWVudER0eXBlOiBEYXRhVHlwZSwgbnVtRWxlbWVudHMgPSAtMSk6XG4gICAgICBUZW5zb3Ige1xuICAgIGlmIChlbGVtZW50RHR5cGUgIT09IHRoaXMuZWxlbWVudER0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0YSB0eXBlczsgb3AgZWxlbWVudHMgJHtcbiAgICAgICAgICBlbGVtZW50RHR5cGV9LCBidXQgbGlzdCBlbGVtZW50cyAke3RoaXMuZWxlbWVudER0eXBlfWApO1xuICAgIH1cbiAgICBpZiAobnVtRWxlbWVudHMgIT09IC0xICYmIHRoaXMudGVuc29ycy5sZW5ndGggIT09IG51bUVsZW1lbnRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wZXJhdGlvbiBleHBlY3RlZCBhIGxpc3Qgd2l0aCAke1xuICAgICAgICAgIG51bUVsZW1lbnRzfSBlbGVtZW50cyBidXQgZ290IGEgbGlzdCB3aXRoICR7XG4gICAgICAgICAgdGhpcy50ZW5zb3JzLmxlbmd0aH0gZWxlbWVudHMuYCk7XG4gICAgfVxuICAgIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgICBlbGVtZW50U2hhcGUsIHRoaXMuZWxlbWVudFNoYXBlLCAnVGVuc29yTGlzdCBzaGFwZSBtaXNtYXRjaDogJyk7XG4gICAgY29uc3Qgb3V0cHV0RWxlbWVudFNoYXBlID1cbiAgICAgICAgaW5mZXJFbGVtZW50U2hhcGUodGhpcy5lbGVtZW50U2hhcGUsIHRoaXMudGVuc29ycywgZWxlbWVudFNoYXBlKTtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCByZXNoYXBlZFRlbnNvcnMgPVxuICAgICAgICAgIHRoaXMudGVuc29ycy5tYXAodGVuc29yID0+IHJlc2hhcGUodGVuc29yLCBvdXRwdXRFbGVtZW50U2hhcGUpKTtcbiAgICAgIHJldHVybiBzdGFjayhyZXNoYXBlZFRlbnNvcnMsIDApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvcCBhIHRlbnNvciBmcm9tIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqIEBwYXJhbSBlbGVtZW50U2hhcGUgc2hhcGUgb2YgdGhlIHRlbnNvclxuICAgKiBAcGFyYW0gZWxlbWVudER0eXBlIGRhdGEgdHlwZSBvZiB0aGUgdGVuc29yXG4gICAqL1xuICBwb3BCYWNrKGVsZW1lbnRTaGFwZTogbnVtYmVyW10sIGVsZW1lbnREdHlwZTogRGF0YVR5cGUpOiBUZW5zb3Ige1xuICAgIGlmIChlbGVtZW50RHR5cGUgIT09IHRoaXMuZWxlbWVudER0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0YSB0eXBlczsgb3AgZWxlbWVudHMgJHtcbiAgICAgICAgICBlbGVtZW50RHR5cGV9LCBidXQgbGlzdCBlbGVtZW50cyAke3RoaXMuZWxlbWVudER0eXBlfWApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNpemUoKSA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gcG9wIGZyb20gYW4gZW1wdHkgbGlzdC4nKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0RWxlbWVudFNoYXBlID1cbiAgICAgICAgaW5mZXJFbGVtZW50U2hhcGUodGhpcy5lbGVtZW50U2hhcGUsIHRoaXMudGVuc29ycywgZWxlbWVudFNoYXBlKTtcbiAgICBjb25zdCB0ZW5zb3IgPSB0aGlzLnRlbnNvcnMucG9wKCk7XG4gICAgdGVuc29yLmtlcHQgPSBmYWxzZTtcblxuICAgIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgICB0ZW5zb3Iuc2hhcGUsIGVsZW1lbnRTaGFwZSwgJ1RlbnNvckxpc3Qgc2hhcGUgbWlzbWF0Y2g6ICcpO1xuXG4gICAgcmV0dXJuIHJlc2hhcGUodGVuc29yLCBvdXRwdXRFbGVtZW50U2hhcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1c2ggYSB0ZW5zb3IgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHRlbnNvciBUZW5zb3IgdG8gYmUgcHVzaGVkLlxuICAgKi9cbiAgcHVzaEJhY2sodGVuc29yOiBUZW5zb3IpIHtcbiAgICBpZiAodGVuc29yLmR0eXBlICE9PSB0aGlzLmVsZW1lbnREdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGEgdHlwZXM7IG9wIGVsZW1lbnRzICR7XG4gICAgICAgICAgdGVuc29yLmR0eXBlfSwgYnV0IGxpc3QgZWxlbWVudHMgJHt0aGlzLmVsZW1lbnREdHlwZX1gKTtcbiAgICB9XG5cbiAgICBhc3NlcnRTaGFwZXNNYXRjaEFsbG93VW5kZWZpbmVkU2l6ZShcbiAgICAgICAgdGVuc29yLnNoYXBlLCB0aGlzLmVsZW1lbnRTaGFwZSwgJ1RlbnNvckxpc3Qgc2hhcGUgbWlzbWF0Y2g6ICcpO1xuXG4gICAgaWYgKHRoaXMubWF4TnVtRWxlbWVudHMgPT09IHRoaXMuc2l6ZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRyeWluZyB0byBwdXNoIGVsZW1lbnQgaW50byBhIGZ1bGwgbGlzdC5gKTtcbiAgICB9XG4gICAga2VlcCh0ZW5zb3IpO1xuICAgIHRoaXMudGVuc29ycy5wdXNoKHRlbnNvcik7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzaXplIG9mIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0gc2l6ZSB0aGUgbmV3IHNpemUgb2YgdGhlIGxpc3QuXG4gICAqL1xuICByZXNpemUoc2l6ZTogbnVtYmVyKSB7XG4gICAgaWYgKHNpemUgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRlbnNvckxpc3RSZXNpemUgZXhwZWN0cyBzaXplIHRvIGJlIG5vbi1uZWdhdGl2ZS4gR290OiAke3NpemV9YCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4TnVtRWxlbWVudHMgIT09IC0xICYmIHNpemUgPiB0aGlzLm1heE51bUVsZW1lbnRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRlbnNvckxpc3RSZXNpemUgaW5wdXQgc2l6ZSAke1xuICAgICAgICAgIHNpemV9IGlzIGdyZWF0ZXIgbWF4TnVtRWxlbWVudCAke3RoaXMubWF4TnVtRWxlbWVudHN9LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGRlc3RUZW5zb3JMaXN0OiBUZW5zb3JMaXN0ID0gbmV3IFRlbnNvckxpc3QoXG4gICAgICAgIFtdLCB0aGlzLmVsZW1lbnRTaGFwZSwgdGhpcy5lbGVtZW50RHR5cGUsIHRoaXMubWF4TnVtRWxlbWVudHMpO1xuICAgIGRlc3RUZW5zb3JMaXN0LnRlbnNvcnMubGVuZ3RoID0gc2l6ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKHRoaXMudGVuc29ycy5sZW5ndGgsIHNpemUpOyArK2kpIHtcbiAgICAgIGRlc3RUZW5zb3JMaXN0LnRlbnNvcnNbaV0gPSB0aGlzLnRlbnNvcnNbaV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0VGVuc29yTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZWxlbWVudCBhdCB0aGUgcHJvdmlkZWQgaW5kZXhcbiAgICogQHBhcmFtIGVsZW1lbnRTaGFwZSBzaGFwZSBvZiB0aGUgdGVuc29yXG4gICAqIEBwYXJhbSBlbGVtZW50RHR5cGUgZHR5cGUgb2YgdGhlIHRlbnNvclxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IGluZGV4IG9mIHRoZSB0ZW5zb3JcbiAgICovXG4gIGdldEl0ZW0oZWxlbWVudEluZGV4OiBudW1iZXIsIGVsZW1lbnRTaGFwZTogbnVtYmVyW10sIGVsZW1lbnREdHlwZTogRGF0YVR5cGUpOlxuICAgICAgVGVuc29yIHtcbiAgICBpZiAoZWxlbWVudER0eXBlICE9PSB0aGlzLmVsZW1lbnREdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGEgdHlwZXM7IG9wIGVsZW1lbnRzICR7XG4gICAgICAgICAgZWxlbWVudER0eXBlfSwgYnV0IGxpc3QgZWxlbWVudHMgJHt0aGlzLmVsZW1lbnREdHlwZX1gKTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnRJbmRleCA8IDAgfHwgZWxlbWVudEluZGV4ID4gdGhpcy50ZW5zb3JzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcnlpbmcgdG8gYWNjZXNzIGVsZW1lbnQgJHtcbiAgICAgICAgICBlbGVtZW50SW5kZXh9IGluIGEgbGlzdCB3aXRoICR7dGhpcy50ZW5zb3JzLmxlbmd0aH0gZWxlbWVudHMuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGVuc29yc1tlbGVtZW50SW5kZXhdID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZWxlbWVudCBhdCBpbmRleCAke2VsZW1lbnRJbmRleH0gaXMgbnVsbC5gKTtcbiAgICB9XG5cbiAgICBhc3NlcnRTaGFwZXNNYXRjaEFsbG93VW5kZWZpbmVkU2l6ZShcbiAgICAgICAgdGhpcy50ZW5zb3JzW2VsZW1lbnRJbmRleF0uc2hhcGUsIGVsZW1lbnRTaGFwZSxcbiAgICAgICAgJ1RlbnNvckxpc3Qgc2hhcGUgbWlzbWF0Y2g6ICcpO1xuICAgIGNvbnN0IG91dHB1dEVsZW1lbnRTaGFwZSA9XG4gICAgICAgIGluZmVyRWxlbWVudFNoYXBlKHRoaXMuZWxlbWVudFNoYXBlLCB0aGlzLnRlbnNvcnMsIGVsZW1lbnRTaGFwZSk7XG4gICAgcmV0dXJuIHJlc2hhcGUodGhpcy50ZW5zb3JzW2VsZW1lbnRJbmRleF0sIG91dHB1dEVsZW1lbnRTaGFwZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB0ZW5zb3IgYXQgdGhlIGluZGV4XG4gICAqIEBwYXJhbSBlbGVtZW50SW5kZXggaW5kZXggb2YgdGhlIHRlbnNvclxuICAgKiBAcGFyYW0gdGVuc29yIHRoZSB0ZW5zb3IgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGUgbGlzdFxuICAgKi9cbiAgc2V0SXRlbShlbGVtZW50SW5kZXg6IG51bWJlciwgdGVuc29yOiBUZW5zb3IpIHtcbiAgICBpZiAodGVuc29yLmR0eXBlICE9PSB0aGlzLmVsZW1lbnREdHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRhdGEgdHlwZXM7IG9wIGVsZW1lbnRzICR7XG4gICAgICAgICAgdGVuc29yLmR0eXBlfSwgYnV0IGxpc3QgZWxlbWVudHMgJHt0aGlzLmVsZW1lbnREdHlwZX1gKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudEluZGV4IDwgMCB8fFxuICAgICAgICB0aGlzLm1heE51bUVsZW1lbnRzICE9PSAtMSAmJiBlbGVtZW50SW5kZXggPj0gdGhpcy5tYXhOdW1FbGVtZW50cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUcnlpbmcgdG8gc2V0IGVsZW1lbnQgJHtcbiAgICAgICAgICBlbGVtZW50SW5kZXh9IGluIGEgbGlzdCB3aXRoIG1heCAke3RoaXMubWF4TnVtRWxlbWVudHN9IGVsZW1lbnRzLmApO1xuICAgIH1cblxuICAgIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgICB0aGlzLmVsZW1lbnRTaGFwZSwgdGVuc29yLnNoYXBlLCAnVGVuc29yTGlzdCBzaGFwZSBtaXNtYXRjaDogJyk7XG4gICAga2VlcCh0ZW5zb3IpO1xuXG4gICAgLy8gZGlzcG9zZSB0aGUgcHJldmlvdXMgdmFsdWUgaWYgaXQgaXMgcmVwbGFjaW5nLlxuICAgIGlmICh0aGlzLnRlbnNvcnNbZWxlbWVudEluZGV4XSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnRlbnNvcnNbZWxlbWVudEluZGV4XS5rZXB0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy50ZW5zb3JzW2VsZW1lbnRJbmRleF0gPSB0ZW5zb3I7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHNlbGVjdGVkIHZhbHVlcyBpbiB0aGUgVGVuc29yTGlzdCBhcyBhIHN0YWNrZWQgVGVuc29yLiBBbGwgb2ZcbiAgICogc2VsZWN0ZWQgdmFsdWVzIG11c3QgaGF2ZSBiZWVuIHdyaXR0ZW4gYW5kIHRoZWlyIHNoYXBlcyBtdXN0IGFsbCBtYXRjaC5cbiAgICogQHBhcmFtIGluZGljZXMgaW5kaWNlcyBvZiB0ZW5zb3JzIHRvIGdhdGhlclxuICAgKiBAcGFyYW0gZWxlbWVudER0eXBlIG91dHB1dCB0ZW5zb3IgZHR5cGVcbiAgICogQHBhcmFtIGVsZW1lbnRTaGFwZSBvdXRwdXQgdGVuc29yIGVsZW1lbnQgc2hhcGVcbiAgICovXG4gIGdhdGhlcihpbmRpY2VzOiBudW1iZXJbXSwgZWxlbWVudER0eXBlOiBEYXRhVHlwZSwgZWxlbWVudFNoYXBlOiBudW1iZXJbXSk6XG4gICAgICBUZW5zb3Ige1xuICAgIGlmIChlbGVtZW50RHR5cGUgIT09IHRoaXMuZWxlbWVudER0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGF0YSB0eXBlczsgb3AgZWxlbWVudHMgJHtcbiAgICAgICAgICBlbGVtZW50RHR5cGV9LCBidXQgbGlzdCBlbGVtZW50cyAke3RoaXMuZWxlbWVudER0eXBlfWApO1xuICAgIH1cblxuICAgIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgICB0aGlzLmVsZW1lbnRTaGFwZSwgZWxlbWVudFNoYXBlLCAnVGVuc29yTGlzdCBzaGFwZSBtaXNtYXRjaDogJyk7XG5cbiAgICAvLyBXaGVuIGluZGljZXMgaXMgZ3JlYXRlciB0aGFuIHRoZSBzaXplIG9mIHRoZSBsaXN0LCBpbmRpY2VzIGJleW9uZCB0aGVcbiAgICAvLyBzaXplIG9mIHRoZSBsaXN0IGFyZSBpZ25vcmVkLlxuICAgIGluZGljZXMgPSBpbmRpY2VzLnNsaWNlKDAsIHRoaXMuc2l6ZSgpKTtcbiAgICBjb25zdCBvdXRwdXRFbGVtZW50U2hhcGUgPVxuICAgICAgICBpbmZlckVsZW1lbnRTaGFwZSh0aGlzLmVsZW1lbnRTaGFwZSwgdGhpcy50ZW5zb3JzLCBlbGVtZW50U2hhcGUpO1xuICAgIGlmIChpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRlbnNvcihbXSwgWzBdLmNvbmNhdChvdXRwdXRFbGVtZW50U2hhcGUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCB0ZW5zb3JzID1cbiAgICAgICAgICBpbmRpY2VzLm1hcChpID0+IHJlc2hhcGUodGhpcy50ZW5zb3JzW2ldLCBvdXRwdXRFbGVtZW50U2hhcGUpKTtcbiAgICAgIHJldHVybiBzdGFjayh0ZW5zb3JzLCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHZhbHVlcyBpbiB0aGUgVGVuc29yTGlzdCBhcyBhIGNvbmNhdGVuYXRlZCBUZW5zb3IuXG4gICAqIEBwYXJhbSBlbGVtZW50RHR5cGUgb3V0cHV0IHRlbnNvciBkdHlwZVxuICAgKiBAcGFyYW0gZWxlbWVudFNoYXBlIG91dHB1dCB0ZW5zb3IgZWxlbWVudCBzaGFwZVxuICAgKi9cbiAgY29uY2F0KGVsZW1lbnREdHlwZTogRGF0YVR5cGUsIGVsZW1lbnRTaGFwZTogbnVtYmVyW10pOiBUZW5zb3Ige1xuICAgIGlmICghIWVsZW1lbnREdHlwZSAmJiBlbGVtZW50RHR5cGUgIT09IHRoaXMuZWxlbWVudER0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRlbnNvckxpc3QgZHR5cGUgaXMgJHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnREdHlwZX0gYnV0IGNvbmNhdCByZXF1ZXN0ZWQgZHR5cGUgJHtlbGVtZW50RHR5cGV9YCk7XG4gICAgfVxuXG4gICAgYXNzZXJ0U2hhcGVzTWF0Y2hBbGxvd1VuZGVmaW5lZFNpemUoXG4gICAgICAgIHRoaXMuZWxlbWVudFNoYXBlLCBlbGVtZW50U2hhcGUsICdUZW5zb3JMaXN0IHNoYXBlIG1pc21hdGNoOiAnKTtcbiAgICBjb25zdCBvdXRwdXRFbGVtZW50U2hhcGUgPVxuICAgICAgICBpbmZlckVsZW1lbnRTaGFwZSh0aGlzLmVsZW1lbnRTaGFwZSwgdGhpcy50ZW5zb3JzLCBlbGVtZW50U2hhcGUpO1xuXG4gICAgaWYgKHRoaXMuc2l6ZSgpID09PSAwKSB7XG4gICAgICByZXR1cm4gdGVuc29yKFtdLCBbMF0uY29uY2F0KG91dHB1dEVsZW1lbnRTaGFwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICBjb25zdCB0ZW5zb3JzID0gdGhpcy50ZW5zb3JzLm1hcCh0ID0+IHJlc2hhcGUodCwgb3V0cHV0RWxlbWVudFNoYXBlKSk7XG4gICAgICByZXR1cm4gY29uY2F0KHRlbnNvcnMsIDApO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFRlbnNvckxpc3Qgd2hpY2gsIHdoZW4gc3RhY2tlZCwgaGFzIHRoZSB2YWx1ZSBvZiB0ZW5zb3IuXG4gKiBAcGFyYW0gdGVuc29yIGZyb20gdGVuc29yXG4gKiBAcGFyYW0gZWxlbWVudFNoYXBlIG91dHB1dCB0ZW5zb3IgZWxlbWVudCBzaGFwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRlbnNvcihcbiAgICB0ZW5zb3I6IFRlbnNvciwgZWxlbWVudFNoYXBlOiBudW1iZXJbXSwgZWxlbWVudER0eXBlOiBEYXRhVHlwZSkge1xuICBjb25zdCBkdHlwZSA9IHRlbnNvci5kdHlwZTtcbiAgaWYgKHRlbnNvci5zaGFwZS5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGVuc29yIG11c3QgYmUgYXQgbGVhc3QgYSB2ZWN0b3IsIGJ1dCBzYXcgc2hhcGU6ICR7dGVuc29yLnNoYXBlfWApO1xuICB9XG4gIGlmICh0ZW5zb3IuZHR5cGUgIT09IGVsZW1lbnREdHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkYXRhIHR5cGVzOyBvcCBlbGVtZW50cyAke1xuICAgICAgICB0ZW5zb3IuZHR5cGV9LCBidXQgbGlzdCBlbGVtZW50cyAke2VsZW1lbnREdHlwZX1gKTtcbiAgfVxuICBjb25zdCB0ZW5zb3JFbGVtZW50U2hhcGUgPSB0ZW5zb3Iuc2hhcGUuc2xpY2UoMSk7XG4gIGFzc2VydFNoYXBlc01hdGNoQWxsb3dVbmRlZmluZWRTaXplKFxuICAgICAgdGVuc29yRWxlbWVudFNoYXBlLCBlbGVtZW50U2hhcGUsICdUZW5zb3JMaXN0IHNoYXBlIG1pc21hdGNoOiAnKTtcbiAgY29uc3QgdGVuc29yTGlzdDogVGVuc29yW10gPSB1bnN0YWNrKHRlbnNvcik7XG4gIHJldHVybiBuZXcgVGVuc29yTGlzdCh0ZW5zb3JMaXN0LCBlbGVtZW50U2hhcGUsIGR0eXBlKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBUZW5zb3JMaXN0IG9mIHRoZSBnaXZlbiBzaXplIHdpdGggZW1wdHkgZWxlbWVudHMuXG4gKiBAcGFyYW0gZWxlbWVudFNoYXBlIHRoZSBzaGFwZSBvZiB0aGUgZnV0dXJlIGVsZW1lbnRzIG9mIHRoZSBsaXN0XG4gKiBAcGFyYW0gZWxlbWVudER0eXBlIHRoZSBkZXNpcmVkIHR5cGUgb2YgZWxlbWVudHMgaW4gdGhlIGxpc3RcbiAqIEBwYXJhbSBudW1FbGVtZW50cyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJlc2VydmVcbiAqIEBwYXJhbSBtYXhOdW1FbGVtZW50cyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGggbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXJ2ZShcbiAgICBlbGVtZW50U2hhcGU6IG51bWJlcltdLCBlbGVtZW50RHR5cGU6IERhdGFUeXBlLCBudW1FbGVtZW50czogbnVtYmVyLFxuICAgIG1heE51bUVsZW1lbnRzOiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBUZW5zb3JMaXN0KFtdLCBlbGVtZW50U2hhcGUsIGVsZW1lbnREdHlwZSwgbWF4TnVtRWxlbWVudHMpO1xufVxuXG4vKipcbiAqIFB1dCB0ZW5zb3JzIGF0IHNwZWNpZmljIGluZGljZXMgb2YgYSBzdGFja2VkIHRlbnNvciBpbnRvIGEgVGVuc29yTGlzdC5cbiAqIEBwYXJhbSBpbmRpY2VzIGxpc3Qgb2YgaW5kaWNlcyBvbiBob3cgdG8gc2NhdHRlciB0aGUgdGVuc29yLlxuICogQHBhcmFtIHRlbnNvciBpbnB1dCB0ZW5zb3IuXG4gKiBAcGFyYW0gZWxlbWVudFNoYXBlIHRoZSBzaGFwZSBvZiB0aGUgZnV0dXJlIGVsZW1lbnRzIG9mIHRoZSBsaXN0XG4gKiBAcGFyYW0gbnVtRWxlbWVudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBzY2F0dGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2F0dGVyKFxuICAgIHRlbnNvcjogVGVuc29yLCBpbmRpY2VzOiBudW1iZXJbXSwgZWxlbWVudFNoYXBlOiBudW1iZXJbXSxcbiAgICBudW1FbGVtZW50cz86IG51bWJlcik6IFRlbnNvckxpc3Qge1xuICBpZiAoaW5kaWNlcy5sZW5ndGggIT09IHRlbnNvci5zaGFwZVswXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuKGluZGljZXMpID09IHRlbnNvci5zaGFwZVswXSwgYnV0IHNhdzogJHtcbiAgICAgICAgaW5kaWNlcy5sZW5ndGh9IHZzLiAke3RlbnNvci5zaGFwZVswXX1gKTtcbiAgfVxuXG4gIGNvbnN0IG1heEluZGV4ID0gTWF0aC5tYXgoLi4uaW5kaWNlcyk7XG5cbiAgaWYgKG51bUVsZW1lbnRzICE9IG51bGwgJiYgbnVtRWxlbWVudHMgIT09IC0xICYmIG1heEluZGV4ID49IG51bUVsZW1lbnRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTWF4IGluZGV4IG11c3QgYmUgPCBhcnJheSBzaXplICgke21heEluZGV4fSAgdnMuICR7bnVtRWxlbWVudHN9KWApO1xuICB9XG5cbiAgY29uc3QgbGlzdCA9IG5ldyBUZW5zb3JMaXN0KFtdLCBlbGVtZW50U2hhcGUsIHRlbnNvci5kdHlwZSwgbnVtRWxlbWVudHMpO1xuICBjb25zdCB0ZW5zb3JzID0gdW5zdGFjayh0ZW5zb3IsIDApO1xuICBpbmRpY2VzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIGxpc3Quc2V0SXRlbSh2YWx1ZSwgdGVuc29yc1tpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogU3BsaXQgdGhlIHZhbHVlcyBvZiBhIFRlbnNvciBpbnRvIGEgVGVuc29yTGlzdC5cbiAqIEBwYXJhbSBsZW5ndGggdGhlIGxlbmd0aHMgdG8gdXNlIHdoZW4gc3BsaXR0aW5nIHZhbHVlIGFsb25nXG4gKiAgICBpdHMgZmlyc3QgZGltZW5zaW9uLlxuICogQHBhcmFtIHRlbnNvciB0aGUgdGVuc29yIHRvIHNwbGl0LlxuICogQHBhcmFtIGVsZW1lbnRTaGFwZSB0aGUgc2hhcGUgb2YgdGhlIGZ1dHVyZSBlbGVtZW50cyBvZiB0aGUgbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQoXG4gICAgdGVuc29yOiBUZW5zb3IsIGxlbmd0aDogbnVtYmVyW10sIGVsZW1lbnRTaGFwZTogbnVtYmVyW10pIHtcbiAgbGV0IHRvdGFsTGVuZ3RoID0gMDtcbiAgY29uc3QgY3VtdWxhdGl2ZUxlbmd0aHMgPSBsZW5ndGgubWFwKGxlbiA9PiB7XG4gICAgdG90YWxMZW5ndGggKz0gbGVuO1xuICAgIHJldHVybiB0b3RhbExlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKHRvdGFsTGVuZ3RoICE9PSB0ZW5zb3Iuc2hhcGVbMF0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIHN1bSBvZiBsZW5ndGhzIHRvIGJlIGVxdWFsIHRvXG4gICAgICAgICAgdGVuc29yLnNoYXBlWzBdLCBidXQgc3VtIG9mIGxlbmd0aHMgaXNcbiAgICAgICAgJHt0b3RhbExlbmd0aH0sIGFuZCB0ZW5zb3IncyBzaGFwZSBpczogJHt0ZW5zb3Iuc2hhcGV9YCk7XG4gIH1cblxuICBjb25zdCBzaGFwZVdpdGhvdXRGaXJzdERpbSA9IHRlbnNvci5zaGFwZS5zbGljZSgxKTtcbiAgY29uc3Qgb3V0cHV0RWxlbWVudFNoYXBlID1cbiAgICAgIG1lcmdlRWxlbWVudFNoYXBlKHNoYXBlV2l0aG91dEZpcnN0RGltLCBlbGVtZW50U2hhcGUpO1xuICBjb25zdCBlbGVtZW50UGVyUm93ID0gdG90YWxMZW5ndGggPT09IDAgPyAwIDogdGVuc29yLnNpemUgLyB0b3RhbExlbmd0aDtcbiAgY29uc3QgdGVuc29yczogVGVuc29yW10gPSB0aWR5KCgpID0+IHtcbiAgICBjb25zdCB0ZW5zb3JzID0gW107XG4gICAgdGVuc29yID0gcmVzaGFwZSh0ZW5zb3IsIFsxLCB0b3RhbExlbmd0aCwgZWxlbWVudFBlclJvd10pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0xlbmd0aCA9IChpID09PSAwKSA/IDAgOiBjdW11bGF0aXZlTGVuZ3Roc1tpIC0gMV07XG4gICAgICBjb25zdCBpbmRpY2VzID0gWzAsIHByZXZpb3VzTGVuZ3RoLCAwXTtcbiAgICAgIGNvbnN0IHNpemVzID0gWzEsIGxlbmd0aFtpXSwgZWxlbWVudFBlclJvd107XG4gICAgICB0ZW5zb3JzW2ldID0gcmVzaGFwZShcbiAgICAgICAgICBzbGljZSh0ZW5zb3IsIGluZGljZXMsIHNpemVzKSwgb3V0cHV0RWxlbWVudFNoYXBlIGFzIG51bWJlcltdKTtcbiAgICB9XG4gICAgdGVuc29yLmRpc3Bvc2UoKTtcbiAgICByZXR1cm4gdGVuc29ycztcbiAgfSk7XG5cbiAgY29uc3QgbGlzdCA9IG5ldyBUZW5zb3JMaXN0KFtdLCBlbGVtZW50U2hhcGUsIHRlbnNvci5kdHlwZSwgbGVuZ3RoLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW5zb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGlzdC5zZXRJdGVtKGksIHRlbnNvcnNbaV0pO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/hash_table.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "HashTable",
    ()=>HashTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/unstack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
;
;
class HashTable {
    get id() {
        return this.handle.id;
    }
    /**
     * Constructor of HashTable. Creates a hash table.
     *
     * @param keyDType `dtype` of the table keys.
     * @param valueDType `dtype` of the table values.
     */ constructor(keyDType, valueDType){
        this.keyDType = keyDType;
        this.valueDType = valueDType;
        this.handle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"])(0);
        // tslint:disable-next-line: no-any
        this.tensorMap = new Map();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(this.handle);
    }
    /**
     * Dispose the tensors and handle and clear the hashtable.
     */ clearAndClose() {
        this.tensorMap.forEach((value)=>value.dispose());
        this.tensorMap.clear();
        this.handle.dispose();
    }
    /**
     * The number of items in the hash table.
     */ size() {
        return this.tensorMap.size;
    }
    /**
     * The number of items in the hash table as a rank-0 tensor.
     */ tensorSize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](this.size(), 'int32');
    }
    /**
     * Replaces the contents of the table with the specified keys and values.
     * @param keys Keys to store in the hashtable.
     * @param values Values to store in the hashtable.
     */ async import(keys, values) {
        this.checkKeyAndValueTensor(keys, values);
        // We only store the primitive values of the keys, this allows lookup
        // to be O(1).
        const $keys = await keys.data();
        // Clear the hashTable before inserting new values.
        this.tensorMap.forEach((value)=>value.dispose());
        this.tensorMap.clear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const $values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$unstack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"])(values);
            const keysLength = $keys.length;
            const valuesLength = $values.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(keysLength === valuesLength, ()=>`The number of elements doesn't match, keys has ` + `${keysLength} elements, the values has ${valuesLength} ` + `elements.`);
            for(let i = 0; i < keysLength; i++){
                const key = $keys[i];
                const value = $values[i];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(value);
                this.tensorMap.set(key, value);
            }
            return this.handle;
        });
    }
    /**
     * Looks up keys in a hash table, outputs the corresponding values.
     *
     * Performs batch lookups, for every element in the key tensor, `find`
     * stacks the corresponding value into the return tensor.
     *
     * If an element is not present in the table, the given `defaultValue` is
     * used.
     *
     * @param keys Keys to look up. Must have the same type as the keys of the
     *     table.
     * @param defaultValue The scalar `defaultValue` is the value output for keys
     *     not present in the table. It must also be of the same type as the
     *     table values.
     */ async find(keys, defaultValue) {
        this.checkKeyAndValueTensor(keys, defaultValue);
        const $keys = await keys.data();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const result = [];
            for(let i = 0; i < $keys.length; i++){
                const key = $keys[i];
                const value = this.findWithDefault(key, defaultValue);
                result.push(value);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"])(result);
        });
    }
    // tslint:disable-next-line: no-any
    findWithDefault(key, defaultValue) {
        const result = this.tensorMap.get(key);
        return result != null ? result : defaultValue;
    }
    checkKeyAndValueTensor(key, value) {
        if (key.dtype !== this.keyDType) {
            throw new Error(`Expect key dtype ${this.keyDType}, but got ` + `${key.dtype}`);
        }
        if (value.dtype !== this.valueDType) {
            throw new Error(`Expect value dtype ${this.valueDType}, but got ` + `${value.dtype}`);
        }
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaF90YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29udmVydGVyL3NyYy9leGVjdXRvci9oYXNoX3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILE9BQU8sRUFBVyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2pHLGlEQUFpRDtBQUNqRCxPQUFPLEtBQUssS0FBSyxNQUFNLGtEQUFrRCxDQUFDO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFNcEIsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFxQixRQUFrQixFQUFXLFVBQW9CO1FBQWpELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVyxlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNGLE9BQU8s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O0lBRU8sc0JBQXNCLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDdkQsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FDWCxvQkFBb0IsSUFBSSxDQUFDLFFBQVEsWUFBWTtnQkFDN0MsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNyQjtRQUVELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQ1gsc0JBQXNCLElBQUksQ0FBQyxVQUFVLFlBQVk7Z0JBQ2pELEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5pbXBvcnQge0RhdGFUeXBlLCBrZWVwLCBzY2FsYXIsIHN0YWNrLCBUZW5zb3IsIHRpZHksIHVuc3RhY2ssIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcG9ydHMtZnJvbS1kaXN0XG5pbXBvcnQgKiBhcyB0Zk9wcyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUvZGlzdC9vcHMvb3BzX2Zvcl9jb252ZXJ0ZXInO1xuXG4vKipcbiAqIEhhc2h0YWJsZSBjb250YWlucyBhIHNldCBvZiB0ZW5zb3JzLCB3aGljaCBjYW4gYmUgYWNjZXNzZWQgYnkga2V5LlxuICovXG5leHBvcnQgY2xhc3MgSGFzaFRhYmxlIHtcbiAgcmVhZG9ubHkgaGFuZGxlOiBUZW5zb3I7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcbiAgcHJpdmF0ZSB0ZW5zb3JNYXA6IE1hcDxhbnksIFRlbnNvcj47XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZS5pZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBvZiBIYXNoVGFibGUuIENyZWF0ZXMgYSBoYXNoIHRhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5RFR5cGUgYGR0eXBlYCBvZiB0aGUgdGFibGUga2V5cy5cbiAgICogQHBhcmFtIHZhbHVlRFR5cGUgYGR0eXBlYCBvZiB0aGUgdGFibGUgdmFsdWVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVhZG9ubHkga2V5RFR5cGU6IERhdGFUeXBlLCByZWFkb25seSB2YWx1ZURUeXBlOiBEYXRhVHlwZSkge1xuICAgIHRoaXMuaGFuZGxlID0gc2NhbGFyKDApO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gICAgdGhpcy50ZW5zb3JNYXAgPSBuZXcgTWFwPGFueSwgVGVuc29yPigpO1xuXG4gICAga2VlcCh0aGlzLmhhbmRsZSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSB0aGUgdGVuc29ycyBhbmQgaGFuZGxlIGFuZCBjbGVhciB0aGUgaGFzaHRhYmxlLlxuICAgKi9cbiAgY2xlYXJBbmRDbG9zZSgpIHtcbiAgICB0aGlzLnRlbnNvck1hcC5mb3JFYWNoKHZhbHVlID0+IHZhbHVlLmRpc3Bvc2UoKSk7XG4gICAgdGhpcy50ZW5zb3JNYXAuY2xlYXIoKTtcbiAgICB0aGlzLmhhbmRsZS5kaXNwb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgaGFzaCB0YWJsZS5cbiAgICovXG4gIHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50ZW5zb3JNYXAuc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBoYXNoIHRhYmxlIGFzIGEgcmFuay0wIHRlbnNvci5cbiAgICovXG4gIHRlbnNvclNpemUoKTogVGVuc29yIHtcbiAgICByZXR1cm4gdGZPcHMuc2NhbGFyKHRoaXMuc2l6ZSgpLCAnaW50MzInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgY29udGVudHMgb2YgdGhlIHRhYmxlIHdpdGggdGhlIHNwZWNpZmllZCBrZXlzIGFuZCB2YWx1ZXMuXG4gICAqIEBwYXJhbSBrZXlzIEtleXMgdG8gc3RvcmUgaW4gdGhlIGhhc2h0YWJsZS5cbiAgICogQHBhcmFtIHZhbHVlcyBWYWx1ZXMgdG8gc3RvcmUgaW4gdGhlIGhhc2h0YWJsZS5cbiAgICovXG4gIGFzeW5jIGltcG9ydChrZXlzOiBUZW5zb3IsIHZhbHVlczogVGVuc29yKTogUHJvbWlzZTxUZW5zb3I+IHtcbiAgICB0aGlzLmNoZWNrS2V5QW5kVmFsdWVUZW5zb3Ioa2V5cywgdmFsdWVzKTtcblxuICAgIC8vIFdlIG9ubHkgc3RvcmUgdGhlIHByaW1pdGl2ZSB2YWx1ZXMgb2YgdGhlIGtleXMsIHRoaXMgYWxsb3dzIGxvb2t1cFxuICAgIC8vIHRvIGJlIE8oMSkuXG4gICAgY29uc3QgJGtleXMgPSBhd2FpdCBrZXlzLmRhdGEoKTtcblxuICAgIC8vIENsZWFyIHRoZSBoYXNoVGFibGUgYmVmb3JlIGluc2VydGluZyBuZXcgdmFsdWVzLlxuICAgIHRoaXMudGVuc29yTWFwLmZvckVhY2godmFsdWUgPT4gdmFsdWUuZGlzcG9zZSgpKTtcbiAgICB0aGlzLnRlbnNvck1hcC5jbGVhcigpO1xuXG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgJHZhbHVlcyA9IHVuc3RhY2sodmFsdWVzKTtcblxuICAgICAgY29uc3Qga2V5c0xlbmd0aCA9ICRrZXlzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHZhbHVlc0xlbmd0aCA9ICR2YWx1ZXMubGVuZ3RoO1xuXG4gICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICBrZXlzTGVuZ3RoID09PSB2YWx1ZXNMZW5ndGgsXG4gICAgICAgICAgKCkgPT4gYFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZG9lc24ndCBtYXRjaCwga2V5cyBoYXMgYCArXG4gICAgICAgICAgICAgIGAke2tleXNMZW5ndGh9IGVsZW1lbnRzLCB0aGUgdmFsdWVzIGhhcyAke3ZhbHVlc0xlbmd0aH0gYCArXG4gICAgICAgICAgICAgIGBlbGVtZW50cy5gKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gJGtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gJHZhbHVlc1tpXTtcblxuICAgICAgICBrZWVwKHZhbHVlKTtcbiAgICAgICAgdGhpcy50ZW5zb3JNYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9va3MgdXAga2V5cyBpbiBhIGhhc2ggdGFibGUsIG91dHB1dHMgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBQZXJmb3JtcyBiYXRjaCBsb29rdXBzLCBmb3IgZXZlcnkgZWxlbWVudCBpbiB0aGUga2V5IHRlbnNvciwgYGZpbmRgXG4gICAqIHN0YWNrcyB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSBpbnRvIHRoZSByZXR1cm4gdGVuc29yLlxuICAgKlxuICAgKiBJZiBhbiBlbGVtZW50IGlzIG5vdCBwcmVzZW50IGluIHRoZSB0YWJsZSwgdGhlIGdpdmVuIGBkZWZhdWx0VmFsdWVgIGlzXG4gICAqIHVzZWQuXG4gICAqXG4gICAqIEBwYXJhbSBrZXlzIEtleXMgdG8gbG9vayB1cC4gTXVzdCBoYXZlIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGtleXMgb2YgdGhlXG4gICAqICAgICB0YWJsZS5cbiAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBUaGUgc2NhbGFyIGBkZWZhdWx0VmFsdWVgIGlzIHRoZSB2YWx1ZSBvdXRwdXQgZm9yIGtleXNcbiAgICogICAgIG5vdCBwcmVzZW50IGluIHRoZSB0YWJsZS4gSXQgbXVzdCBhbHNvIGJlIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhlXG4gICAqICAgICB0YWJsZSB2YWx1ZXMuXG4gICAqL1xuICBhc3luYyBmaW5kKGtleXM6IFRlbnNvciwgZGVmYXVsdFZhbHVlOiBUZW5zb3IpOiBQcm9taXNlPFRlbnNvcj4ge1xuICAgIHRoaXMuY2hlY2tLZXlBbmRWYWx1ZVRlbnNvcihrZXlzLCBkZWZhdWx0VmFsdWUpO1xuXG4gICAgY29uc3QgJGtleXMgPSBhd2FpdCBrZXlzLmRhdGEoKTtcblxuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogVGVuc29yW10gPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAka2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSAka2V5c1tpXTtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmluZFdpdGhEZWZhdWx0KGtleSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhY2socmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XG4gIHByaXZhdGUgZmluZFdpdGhEZWZhdWx0KGtleTogYW55LCBkZWZhdWx0VmFsdWU6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy50ZW5zb3JNYXAuZ2V0KGtleSk7XG5cbiAgICByZXR1cm4gcmVzdWx0ICE9IG51bGwgPyByZXN1bHQgOiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrS2V5QW5kVmFsdWVUZW5zb3Ioa2V5OiBUZW5zb3IsIHZhbHVlOiBUZW5zb3IpIHtcbiAgICBpZiAoa2V5LmR0eXBlICE9PSB0aGlzLmtleURUeXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEV4cGVjdCBrZXkgZHR5cGUgJHt0aGlzLmtleURUeXBlfSwgYnV0IGdvdCBgICtcbiAgICAgICAgICBgJHtrZXkuZHR5cGV9YCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmR0eXBlICE9PSB0aGlzLnZhbHVlRFR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXhwZWN0IHZhbHVlIGR0eXBlICR7dGhpcy52YWx1ZURUeXBlfSwgYnV0IGdvdCBgICtcbiAgICAgICAgICBgJHt2YWx1ZS5kdHlwZX1gKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ExecutionContext captures the runtime environment of the node. It keeps
 * track of the current frame and iteration for the control flow ops.
 *
 * For example, typical Dynamic RNN model may contain loops, for which
 * TensorFlow will generate graphs with Enter/Exit nodes to control the
 * current execution frame, and NextIteration Nodes for iteration id increment.
 * For model with branch logic, TensorFLow will generate Switch/Merge ops.
 */ __turbopack_context__.s([
    "ExecutionContext",
    ()=>ExecutionContext
]);
class ExecutionContext {
    constructor(weightMap = {}, tensorArrayMap = {}, tensorListMap = {}, functionMap = {}, parseNodeNameCache){
        this.weightMap = weightMap;
        this.tensorArrayMap = tensorArrayMap;
        this.tensorListMap = tensorListMap;
        this.functionMap = functionMap;
        this.parseNodeNameCache = parseNodeNameCache;
        this.rootContext = {
            id: 0,
            frameName: '',
            iterationId: 0
        };
        this.contexts = [
            this.rootContext
        ];
        this.lastId = 0;
        this.generateCurrentContextIds();
    }
    newFrame(id, frameName) {
        return {
            id,
            frameName,
            iterationId: 0
        };
    }
    /**
     * Set the current context
     * @param contexts: ExecutionContextInfo[] the current path of execution
     * frames
     */ set currentContext(contexts) {
        if (this.contexts !== contexts) {
            this.contexts = contexts;
            this.generateCurrentContextIds();
        }
    }
    get currentContext() {
        return this.contexts;
    }
    /**
     * Returns the current context in string format.
     */ get currentContextId() {
        return this._currentContextIds[0];
    }
    /**
     * Returns the current context and all parent contexts in string format.
     * This allow access to the nodes in the current and parent frames.
     */ get currentContextIds() {
        return this._currentContextIds;
    }
    generateCurrentContextIds() {
        const names = [];
        for(let i = 0; i < this.contexts.length - 1; i++){
            const contexts = this.contexts.slice(0, this.contexts.length - i);
            names.push(this.contextIdforContexts(contexts));
        }
        names.push('');
        this._currentContextIds = names;
    }
    contextIdforContexts(contexts) {
        return contexts ? contexts.map((context)=>context.id === 0 && context.iterationId === 0 ? '' : `${context.frameName}-${context.iterationId}`).join('/') : '';
    }
    /**
     * Enter a new frame, a new context is pushed on the current context list.
     * @param frameId new frame id
     */ enterFrame(frameId) {
        if (this.contexts) {
            this.lastId++;
            this.contexts = this.contexts.slice();
            this.contexts.push(this.newFrame(this.lastId, frameId));
            this._currentContextIds.unshift(this.contextIdforContexts(this.contexts));
        }
    }
    /**
     * Exit the current frame, the last context is removed from the current
     * context list.
     */ exitFrame() {
        if (this.contexts && this.contexts.length > 1) {
            this.contexts = this.contexts.slice();
            this.contexts.splice(-1);
            this.currentContextIds.shift();
        } else {
            throw new Error('Cannot exit frame, the context is empty');
        }
    }
    /**
     * Enter the next iteration of a loop, the iteration id of last context is
     * increased.
     */ nextIteration() {
        if (this.contexts && this.contexts.length > 0) {
            this.contexts = this.contexts.slice();
            this.lastId++;
            const context = Object.assign({}, this.contexts[this.contexts.length - 1]);
            context.iterationId += 1;
            context.id = this.lastId;
            this.contexts.splice(-1, 1, context);
            this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
        } else {
            throw new Error('Cannot increase frame iteration, the context is empty');
        }
    }
    getWeight(name) {
        return this.weightMap[name];
    }
    addTensorArray(tensorArray) {
        this.tensorArrayMap[tensorArray.id] = tensorArray;
    }
    getTensorArray(id) {
        return this.tensorArrayMap[id];
    }
    addTensorList(tensorList) {
        this.tensorListMap[tensorList.id] = tensorList;
    }
    getTensorList(id) {
        return this.tensorListMap[id];
    }
    dispose(keepIds) {
        for(const key in this.tensorArrayMap){
            this.tensorArrayMap[key].clearAndClose(keepIds);
        }
        for(const key in this.tensorListMap){
            this.tensorListMap[key].clearAndClose(keepIds);
        }
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0aW9uX2NvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvbnZlcnRlci9zcmMvZXhlY3V0b3IvZXhlY3V0aW9uX2NvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JBOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixZQUNhLFlBQTZCLEVBQUUsRUFDL0IsaUJBQWlDLEVBQUUsRUFDbkMsZ0JBQStCLEVBQUUsRUFDakMsY0FBaUQsRUFBRSxFQUNuRCxrQkFBMkQ7UUFKM0QsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBd0M7UUFDbkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF5QztRQVZoRSxnQkFBVyxHQUFHLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNyRCxhQUFRLEdBQTJCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELFdBQU0sR0FBRyxDQUFDLENBQUM7UUFTakIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLFFBQVEsQ0FBQyxFQUFVLEVBQUUsU0FBaUI7UUFDNUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxjQUFjLENBQUMsUUFBZ0M7UUFDakQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNsQztJQUNI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b0I7UUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtUZW5zb3J9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7TmFtZWRUZW5zb3JzTWFwLCBUZW5zb3JBcnJheU1hcCwgVGVuc29yTGlzdE1hcH0gZnJvbSAnLi4vZGF0YS90eXBlcyc7XG5cbmltcG9ydCB7VGVuc29yQXJyYXl9IGZyb20gJy4vdGVuc29yX2FycmF5JztcbmltcG9ydCB7VGVuc29yTGlzdH0gZnJvbSAnLi90ZW5zb3JfbGlzdCc7XG5pbXBvcnQge0Z1bmN0aW9uRXhlY3V0b3J9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGlvbkNvbnRleHRJbmZvIHtcbiAgaWQ6IG51bWJlcjsgICAgICAgICAgIC8vIHRoZSB1bmlxdWUgaWQgb2YgdGhlIGNvbnRleHQgaW5mb1xuICBmcmFtZU5hbWU6IHN0cmluZzsgICAgLy8gVGhlIGZyYW1lIG5hbWUgb2YgdGhlIGxvb3AsIHRoaXMgY29tZXMgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIFRlbnNvckZsb3cgTm9kZURlZi5cbiAgaXRlcmF0aW9uSWQ6IG51bWJlcjsgIC8vIFRoZSBpdGVyYXRpb24gaWQgb2YgdGhlIGxvb3Bcbn1cblxuLyoqXG4gKiBFeGVjdXRpb25Db250ZXh0IGNhcHR1cmVzIHRoZSBydW50aW1lIGVudmlyb25tZW50IG9mIHRoZSBub2RlLiBJdCBrZWVwc1xuICogdHJhY2sgb2YgdGhlIGN1cnJlbnQgZnJhbWUgYW5kIGl0ZXJhdGlvbiBmb3IgdGhlIGNvbnRyb2wgZmxvdyBvcHMuXG4gKlxuICogRm9yIGV4YW1wbGUsIHR5cGljYWwgRHluYW1pYyBSTk4gbW9kZWwgbWF5IGNvbnRhaW4gbG9vcHMsIGZvciB3aGljaFxuICogVGVuc29yRmxvdyB3aWxsIGdlbmVyYXRlIGdyYXBocyB3aXRoIEVudGVyL0V4aXQgbm9kZXMgdG8gY29udHJvbCB0aGVcbiAqIGN1cnJlbnQgZXhlY3V0aW9uIGZyYW1lLCBhbmQgTmV4dEl0ZXJhdGlvbiBOb2RlcyBmb3IgaXRlcmF0aW9uIGlkIGluY3JlbWVudC5cbiAqIEZvciBtb2RlbCB3aXRoIGJyYW5jaCBsb2dpYywgVGVuc29yRkxvdyB3aWxsIGdlbmVyYXRlIFN3aXRjaC9NZXJnZSBvcHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGVjdXRpb25Db250ZXh0IHtcbiAgcHJpdmF0ZSByb290Q29udGV4dCA9IHtpZDogMCwgZnJhbWVOYW1lOiAnJywgaXRlcmF0aW9uSWQ6IDB9O1xuICBwcml2YXRlIGNvbnRleHRzOiBFeGVjdXRpb25Db250ZXh0SW5mb1tdID0gW3RoaXMucm9vdENvbnRleHRdO1xuICBwcml2YXRlIGxhc3RJZCA9IDA7XG4gIHByaXZhdGUgX2N1cnJlbnRDb250ZXh0SWRzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHJlYWRvbmx5IHdlaWdodE1hcDogTmFtZWRUZW5zb3JzTWFwID0ge30sXG4gICAgICByZWFkb25seSB0ZW5zb3JBcnJheU1hcDogVGVuc29yQXJyYXlNYXAgPSB7fSxcbiAgICAgIHJlYWRvbmx5IHRlbnNvckxpc3RNYXA6IFRlbnNvckxpc3RNYXAgPSB7fSxcbiAgICAgIHJlYWRvbmx5IGZ1bmN0aW9uTWFwOiB7W2tleTogc3RyaW5nXTogRnVuY3Rpb25FeGVjdXRvcn0gPSB7fSxcbiAgICAgIHJlYWRvbmx5IHBhcnNlTm9kZU5hbWVDYWNoZT86IE1hcDxzdHJpbmcsIFtzdHJpbmcsIG51bWJlciwgc3RyaW5nP10+KSB7XG4gICAgdGhpcy5nZW5lcmF0ZUN1cnJlbnRDb250ZXh0SWRzKCk7XG4gIH1cblxuICBwcml2YXRlIG5ld0ZyYW1lKGlkOiBudW1iZXIsIGZyYW1lTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHtpZCwgZnJhbWVOYW1lLCBpdGVyYXRpb25JZDogMH07XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjdXJyZW50IGNvbnRleHRcbiAgICogQHBhcmFtIGNvbnRleHRzOiBFeGVjdXRpb25Db250ZXh0SW5mb1tdIHRoZSBjdXJyZW50IHBhdGggb2YgZXhlY3V0aW9uXG4gICAqIGZyYW1lc1xuICAgKi9cbiAgc2V0IGN1cnJlbnRDb250ZXh0KGNvbnRleHRzOiBFeGVjdXRpb25Db250ZXh0SW5mb1tdKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dHMgIT09IGNvbnRleHRzKSB7XG4gICAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gICAgICB0aGlzLmdlbmVyYXRlQ3VycmVudENvbnRleHRJZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY3VycmVudENvbnRleHQoKTogRXhlY3V0aW9uQ29udGV4dEluZm9bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjb250ZXh0IGluIHN0cmluZyBmb3JtYXQuXG4gICAqL1xuICBnZXQgY3VycmVudENvbnRleHRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q29udGV4dElkc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNvbnRleHQgYW5kIGFsbCBwYXJlbnQgY29udGV4dHMgaW4gc3RyaW5nIGZvcm1hdC5cbiAgICogVGhpcyBhbGxvdyBhY2Nlc3MgdG8gdGhlIG5vZGVzIGluIHRoZSBjdXJyZW50IGFuZCBwYXJlbnQgZnJhbWVzLlxuICAgKi9cbiAgZ2V0IGN1cnJlbnRDb250ZXh0SWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENvbnRleHRJZHM7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQ3VycmVudENvbnRleHRJZHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udGV4dHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuY29udGV4dHMuc2xpY2UoMCwgdGhpcy5jb250ZXh0cy5sZW5ndGggLSBpKTtcbiAgICAgIG5hbWVzLnB1c2godGhpcy5jb250ZXh0SWRmb3JDb250ZXh0cyhjb250ZXh0cykpO1xuICAgIH1cbiAgICBuYW1lcy5wdXNoKCcnKTtcbiAgICB0aGlzLl9jdXJyZW50Q29udGV4dElkcyA9IG5hbWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjb250ZXh0SWRmb3JDb250ZXh0cyhjb250ZXh0czogRXhlY3V0aW9uQ29udGV4dEluZm9bXSkge1xuICAgIHJldHVybiBjb250ZXh0cyA/XG4gICAgICAgIGNvbnRleHRzXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgIGNvbnRleHQgPT4gKGNvbnRleHQuaWQgPT09IDAgJiYgY29udGV4dC5pdGVyYXRpb25JZCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAnJyA6XG4gICAgICAgICAgICAgICAgICAgIGAke2NvbnRleHQuZnJhbWVOYW1lfS0ke2NvbnRleHQuaXRlcmF0aW9uSWR9YClcbiAgICAgICAgICAgIC5qb2luKCcvJykgOlxuICAgICAgICAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciBhIG5ldyBmcmFtZSwgYSBuZXcgY29udGV4dCBpcyBwdXNoZWQgb24gdGhlIGN1cnJlbnQgY29udGV4dCBsaXN0LlxuICAgKiBAcGFyYW0gZnJhbWVJZCBuZXcgZnJhbWUgaWRcbiAgICovXG4gIGVudGVyRnJhbWUoZnJhbWVJZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dHMpIHtcbiAgICAgIHRoaXMubGFzdElkKys7XG4gICAgICB0aGlzLmNvbnRleHRzID0gdGhpcy5jb250ZXh0cy5zbGljZSgpO1xuICAgICAgdGhpcy5jb250ZXh0cy5wdXNoKHRoaXMubmV3RnJhbWUodGhpcy5sYXN0SWQsIGZyYW1lSWQpKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb250ZXh0SWRzLnVuc2hpZnQodGhpcy5jb250ZXh0SWRmb3JDb250ZXh0cyh0aGlzLmNvbnRleHRzKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4aXQgdGhlIGN1cnJlbnQgZnJhbWUsIHRoZSBsYXN0IGNvbnRleHQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBjdXJyZW50XG4gICAqIGNvbnRleHQgbGlzdC5cbiAgICovXG4gIGV4aXRGcmFtZSgpIHtcbiAgICBpZiAodGhpcy5jb250ZXh0cyAmJiB0aGlzLmNvbnRleHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuY29udGV4dHMgPSB0aGlzLmNvbnRleHRzLnNsaWNlKCk7XG4gICAgICB0aGlzLmNvbnRleHRzLnNwbGljZSgtMSk7XG4gICAgICB0aGlzLmN1cnJlbnRDb250ZXh0SWRzLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGV4aXQgZnJhbWUsIHRoZSBjb250ZXh0IGlzIGVtcHR5Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVudGVyIHRoZSBuZXh0IGl0ZXJhdGlvbiBvZiBhIGxvb3AsIHRoZSBpdGVyYXRpb24gaWQgb2YgbGFzdCBjb250ZXh0IGlzXG4gICAqIGluY3JlYXNlZC5cbiAgICovXG4gIG5leHRJdGVyYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dHMgJiYgdGhpcy5jb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvbnRleHRzID0gdGhpcy5jb250ZXh0cy5zbGljZSgpO1xuICAgICAgdGhpcy5sYXN0SWQrKztcbiAgICAgIGNvbnN0IGNvbnRleHQgPVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dHNbdGhpcy5jb250ZXh0cy5sZW5ndGggLSAxXSk7XG4gICAgICBjb250ZXh0Lml0ZXJhdGlvbklkICs9IDE7XG4gICAgICBjb250ZXh0LmlkID0gdGhpcy5sYXN0SWQ7XG4gICAgICB0aGlzLmNvbnRleHRzLnNwbGljZSgtMSwgMSwgY29udGV4dCk7XG4gICAgICB0aGlzLl9jdXJyZW50Q29udGV4dElkcy5zcGxpY2UoXG4gICAgICAgICAgMCwgMSwgdGhpcy5jb250ZXh0SWRmb3JDb250ZXh0cyh0aGlzLmNvbnRleHRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGluY3JlYXNlIGZyYW1lIGl0ZXJhdGlvbiwgdGhlIGNvbnRleHQgaXMgZW1wdHknKTtcbiAgICB9XG4gIH1cblxuICBnZXRXZWlnaHQobmFtZTogc3RyaW5nKTogVGVuc29yW10ge1xuICAgIHJldHVybiB0aGlzLndlaWdodE1hcFtuYW1lXTtcbiAgfVxuXG4gIGFkZFRlbnNvckFycmF5KHRlbnNvckFycmF5OiBUZW5zb3JBcnJheSkge1xuICAgIHRoaXMudGVuc29yQXJyYXlNYXBbdGVuc29yQXJyYXkuaWRdID0gdGVuc29yQXJyYXk7XG4gIH1cblxuICBnZXRUZW5zb3JBcnJheShpZDogbnVtYmVyKTogVGVuc29yQXJyYXkge1xuICAgIHJldHVybiB0aGlzLnRlbnNvckFycmF5TWFwW2lkXTtcbiAgfVxuXG4gIGFkZFRlbnNvckxpc3QodGVuc29yTGlzdDogVGVuc29yTGlzdCkge1xuICAgIHRoaXMudGVuc29yTGlzdE1hcFt0ZW5zb3JMaXN0LmlkXSA9IHRlbnNvckxpc3Q7XG4gIH1cblxuICBnZXRUZW5zb3JMaXN0KGlkOiBudW1iZXIpOiBUZW5zb3JMaXN0IHtcbiAgICByZXR1cm4gdGhpcy50ZW5zb3JMaXN0TWFwW2lkXTtcbiAgfVxuXG4gIGRpc3Bvc2Uoa2VlcElkczogU2V0PG51bWJlcj4pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnRlbnNvckFycmF5TWFwKSB7XG4gICAgICB0aGlzLnRlbnNvckFycmF5TWFwW2tleV0uY2xlYXJBbmRDbG9zZShrZWVwSWRzKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnRlbnNvckxpc3RNYXApIHtcbiAgICAgIHRoaXMudGVuc29yTGlzdE1hcFtrZXldLmNsZWFyQW5kQ2xvc2Uoa2VlcElkcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "getExecutionSubgraph",
    ()=>getExecutionSubgraph,
    "getNodeLiveUntilMap",
    ()=>getNodeLiveUntilMap,
    "getNodesInTopologicalOrder",
    ()=>getNodesInTopologicalOrder,
    "isControlFlow",
    ()=>isControlFlow,
    "isDynamicShape",
    ()=>isDynamicShape,
    "isHashTable",
    ()=>isHashTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js [app-client] (ecmascript)");
;
function getExecutionSubgraph(inputs, outputs, weightMap, initNodes) {
    const usedNodes = new Set();
    const missingInputs = [];
    let dynamicNode = null;
    let syncInputs = null;
    // Start with the outputs, going backwards and find all the nodes that are
    // needed to compute those outputs.
    const seen = new Set();
    const inputNodeNames = new Set(Object.keys(inputs).map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name)[0]));
    initNodes = initNodes || [];
    const initNodeNames = new Set(initNodes.map((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(node.name)[0]));
    const frontier = [
        ...outputs
    ];
    while(frontier.length > 0){
        const node = frontier.pop();
        if (isControlFlow(node) || isDynamicShape(node) || isHashTable(node)) {
            if (dynamicNode == null) {
                dynamicNode = node;
                syncInputs = dynamicNode.children.map((child)=>child.name).filter((name)=>usedNodes.has(name));
            }
        }
        usedNodes.add(node.name);
        // Weights are dead end since we already have their values.
        if (weightMap[node.name] != null) {
            continue;
        }
        // This node is a dead end since it's one of the user-provided inputs.
        if (inputNodeNames.has(node.name)) {
            continue;
        }
        // This node is a dead end since it doesn't have any inputs.
        if (initNodeNames.has(node.name)) {
            continue;
        }
        if (node.inputs.length === 0) {
            missingInputs.push(node.name);
            continue;
        }
        node.inputs.forEach((input)=>{
            // Don't add to the frontier if it is already there.
            if (seen.has(input.name)) {
                return;
            }
            seen.add(input.name);
            frontier.push(input);
        });
    }
    return {
        inputs,
        outputs,
        usedNodes,
        missingInputs,
        dynamicNode,
        syncInputs
    };
}
function getNodesInTopologicalOrder(graph, executionInfo) {
    const { usedNodes, inputs } = executionInfo;
    const inputNodes = Object.keys(inputs).map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name)[0]).map((name)=>graph.nodes[name]);
    const initNodes = graph.initNodes || [];
    const isUsed = (node)=>usedNodes.has(typeof node === 'string' ? node : node.name);
    function unique(nodes) {
        return [
            ...new Map(nodes.map((node)=>[
                    node.name,
                    node
                ])).values()
        ];
    }
    const predefinedNodes = unique([
        ...inputNodes,
        ...graph.weights,
        ...initNodes
    ]).filter(isUsed);
    const allNodes = unique([
        ...predefinedNodes,
        ...Object.values(graph.nodes)
    ]).filter(isUsed);
    const nameToNode = new Map(allNodes.map((node)=>[
            node.name,
            node
        ]));
    const inCounts = {};
    for (const node of allNodes){
        inCounts[node.name] = inCounts[node.name] || 0;
        for (const child of node.children){
            // When the child is unused, set in counts to infinity so that it will
            // never be decreased to 0 and added to the execution list.
            if (!isUsed(child)) {
                inCounts[child.name] = Number.POSITIVE_INFINITY;
            }
            inCounts[child.name] = (inCounts[child.name] || 0) + 1;
        }
    }
    // Build execution order for all used nodes regardless whether they are
    // predefined or not.
    const frontier = Object.entries(inCounts).filter(([, inCount])=>inCount === 0).map(([name])=>name);
    const orderedNodeNames = [
        ...frontier
    ];
    while(frontier.length > 0){
        const nodeName = frontier.pop();
        const node = nameToNode.get(nodeName);
        for (const child of node.children.filter(isUsed)){
            if (--inCounts[child.name] === 0) {
                orderedNodeNames.push(child.name);
                frontier.push(child.name);
            }
        }
    }
    const orderedNodes = orderedNodeNames.map((name)=>nameToNode.get(name));
    const filteredOrderedNodes = filterPredefinedReachableNodes(orderedNodes, predefinedNodes);
    // TODO: Turn validation on/off with tf env flag.
    validateNodesExecutionOrder(filteredOrderedNodes, predefinedNodes);
    return filteredOrderedNodes;
}
/**
 * This is a helper function of `getNodesInTopologicalOrder`.
 * Returns ordered nodes reachable by at least one predefined node.
 * This can help us filter out redundant nodes from the returned node list.
 * For example:
 * If we have four nodes with dependencies like this:
 *   a --> b --> c --> d
 * when node `c` is predefined (e.g. given as an input tensor), we can
 * skip node `a` and `b` since their outputs will never be used.
 *
 * @param orderedNodes Graph nodes in execution order.
 * @param predefinedNodes Graph inputs, weights, and init nodes. Nodes in this
 *     list must have distinct names.
 */ function filterPredefinedReachableNodes(orderedNodes, predefinedNodes) {
    const nameToNode = new Map(orderedNodes.map((node)=>[
            node.name,
            node
        ]));
    // TODO: Filter out more nodes when >=2 nodes are predefined in a path.
    const stack = predefinedNodes.map((node)=>node.name);
    const predefinedReachableNodeNames = new Set(stack);
    // Perform a DFS starting from the set of all predefined nodes
    // to find the set of all nodes reachable from the predefined nodes.
    while(stack.length > 0){
        const nodeName = stack.pop();
        const node = nameToNode.get(nodeName);
        for (const child of node.children){
            if (!nameToNode.has(child.name) || predefinedReachableNodeNames.has(child.name)) {
                continue;
            }
            predefinedReachableNodeNames.add(child.name);
            stack.push(child.name);
        }
    }
    // Filter out unreachable nodes and build the ordered node list.
    const filteredOrderedNodes = orderedNodes.filter((node)=>predefinedReachableNodeNames.has(node.name));
    return filteredOrderedNodes;
}
class NodesExecutionOrderError extends Error {
    constructor(message){
        super(`NodesExecutionOrderError: ${message}`);
    }
}
/**
 * This is a helper function of `getNodesInTopologicalOrder`.
 * Validates property: given nodes `a` and `b`, Order(a) > Order(b) if `a`
 * is a child of `b`. This function throws an error if validation fails.
 *
 * @param orderedNodes Graph nodes in execution order.
 * @param predefinedNodes Graph inputs, weights, and init nodes. Nodes in this
 *     list must have distinct names.
 */ function validateNodesExecutionOrder(orderedNodes, predefinedNodes) {
    const nodeNameToOrder = new Map(orderedNodes.map((node, order)=>[
            node.name,
            order
        ]));
    const predefinedNodeNames = new Set(predefinedNodes.map((node)=>node.name));
    const isPredefined = (node)=>predefinedNodeNames.has(typeof node === 'string' ? node : node.name);
    const willBeExecutedNodeNames = new Set(orderedNodes.map((node)=>node.name));
    const willBeExecuted = (node)=>willBeExecutedNodeNames.has(typeof node === 'string' ? node : node.name);
    for (const node of orderedNodes){
        for (const child of node.children.filter(willBeExecuted)){
            if (!nodeNameToOrder.has(child.name)) {
                throw new NodesExecutionOrderError(`Child ${child.name} of node ${node.name} is unreachable.`);
            }
            if (nodeNameToOrder.get(node.name) > nodeNameToOrder.get(child.name)) {
                throw new NodesExecutionOrderError(`Node ${node.name} is scheduled to run after its child ${child.name}.`);
            }
        }
        if (!isPredefined(node)) {
            for (const input of node.inputs){
                if (!nodeNameToOrder.has(input.name)) {
                    throw new NodesExecutionOrderError(`Input ${input.name} of node ${node.name} is unreachable.`);
                }
                if (nodeNameToOrder.get(input.name) > nodeNameToOrder.get(node.name)) {
                    throw new NodesExecutionOrderError(`Node ${node.name} is scheduled to run before its input ${input.name}.`);
                }
            }
        }
    }
}
function getNodeLiveUntilMap(orderedNodes) {
    const nodeNameToOrder = new Map(orderedNodes.map((node, order)=>[
            node.name,
            order
        ]));
    const INF_LIFE = Number.MAX_SAFE_INTEGER;
    // Make control flow nodes (and consequently their direct parents)
    // live forever since they're tricky to track correctly.
    const selfLifespans = orderedNodes.map((node, nodeOrder)=>isControlFlow(node) ? INF_LIFE : nodeOrder);
    const getSelfLifeSpan = (node)=>{
        const selfLife = selfLifespans[nodeNameToOrder.get(node.name)];
        if (selfLife == null) {
            // If nodeToOrder does not contain the node, it is unused or
            // unreachable in graph.
            return -1;
        }
        return selfLife;
    };
    // `liveUntil[i]` points to the last node in the `orderedNodes` array that
    // may depend on tensors from node `i`. It indicates that all the
    // intermediate tensors from `orderedNodes[i]` should be disposed after
    // `orderedNodes[liveUntil[i]]` is executed.
    // A node lives long enough to pass on its tensors to its children.
    // It lives until at least `max(node's position, children's positions)`.
    const liveUntilOrders = orderedNodes.map((node, nodeOrder)=>{
        return node.children.map(getSelfLifeSpan).reduce((a, b)=>Math.max(a, b), selfLifespans[nodeOrder]);
    });
    // liveUntilMap:
    // - Key: Name of a node `x`
    // - Values: All nodes whose intermediate tensors should be disposed
    //           after `x` is executed.
    const liveUntilMap = new Map();
    for(let nodeOrder = 0; nodeOrder < orderedNodes.length; ++nodeOrder){
        const liveUntilOrder = liveUntilOrders[nodeOrder];
        if (liveUntilOrder === INF_LIFE) {
            continue;
        }
        const node = orderedNodes[nodeOrder];
        const liveUntilNode = orderedNodes[liveUntilOrder];
        if (!liveUntilMap.has(liveUntilNode.name)) {
            liveUntilMap.set(liveUntilNode.name, []);
        }
        liveUntilMap.get(liveUntilNode.name).push(node);
    }
    return liveUntilMap;
}
const CONTROL_FLOW_OPS = new Set([
    'Switch',
    'Merge',
    'Enter',
    'Exit',
    'NextIteration',
    'StatelessIf',
    'StatelessWhile',
    'if',
    'While'
]);
const DYNAMIC_SHAPE_OPS = new Set([
    'NonMaxSuppressionV2',
    'NonMaxSuppressionV3',
    'NonMaxSuppressionV5',
    'Where'
]);
const HASH_TABLE_OPS = new Set([
    'HashTable',
    'HashTableV2',
    'LookupTableImport',
    'LookupTableImportV2',
    'LookupTableFind',
    'LookupTableFindV2',
    'LookupTableSize',
    'LookupTableSizeV2'
]);
function isControlFlow(node) {
    return CONTROL_FLOW_OPS.has(node.op);
}
function isDynamicShape(node) {
    return DYNAMIC_SHAPE_OPS.has(node.op);
}
function isHashTable(node) {
    return HASH_TABLE_OPS.has(node.op);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxfYW5hbHlzaXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvbnZlcnRlci9zcmMvZXhlY3V0b3IvbW9kZWxfYW5hbHlzaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBS0gsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBWTVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2hDLE1BQXNCLEVBQUUsT0FBZSxFQUFFLFNBQTBCLEVBQ25FLFNBQWtCO0lBQ3BCLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFDcEMsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFDO0lBQ25DLElBQUksV0FBVyxHQUFTLElBQUksQ0FBQztJQUM3QixJQUFJLFVBQVUsR0FBYSxJQUFJLENBQUM7SUFFaEMsMEVBQTBFO0lBQzFFLG1DQUFtQztJQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0lBQy9CLE1BQU0sY0FBYyxHQUNoQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUM1QixNQUFNLGFBQWEsR0FDZixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRSxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDOUIsT0FBTyxR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TSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNoQyxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxPQUFPO0NBQzdFLENBQUMsQ0FBQztBQUNILE1BQU0sY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQzdCLFdBQVcsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0lBQ3RFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQjtDQUMvRSxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQVU7SUFDdEMsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLElBQVU7SUFDdkMsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVU7SUFDcEMsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge05hbWVkVGVuc29yTWFwfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge05hbWVkVGVuc29yc01hcH0gZnJvbSAnLi4vZGF0YS90eXBlcyc7XG5pbXBvcnQge3BhcnNlTm9kZU5hbWV9IGZyb20gJy4uL29wZXJhdGlvbnMvZXhlY3V0b3JzL3V0aWxzJztcbmltcG9ydCB7R3JhcGgsIE5vZGV9IGZyb20gJy4uL29wZXJhdGlvbnMvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGlvbkluZm8ge1xuICBpbnB1dHM6IE5hbWVkVGVuc29yTWFwO1xuICBvdXRwdXRzOiBOb2RlW107XG4gIHVzZWROb2RlczogU2V0PHN0cmluZz47XG4gIG1pc3NpbmdJbnB1dHM6IHN0cmluZ1tdO1xuICBkeW5hbWljTm9kZTogTm9kZTtcbiAgc3luY0lucHV0czogc3RyaW5nW107XG59XG5cbi8qKlxuICogR2l2ZW4gZ3JhcGggaW5wdXRzIGFuZCBkZXNpcmVkIG91dHB1dHMsIGZpbmQgdGhlIG1pbmltYWwgc2V0IG9mIG5vZGVzXG4gKiB0byBleGVjdXRlIGluIG9yZGVyIHRvIGNvbXB1dGUgdGhlIG91dHB1dHMuIEluIGFkZGl0aW9uIHJldHVybiBvdGhlciB1c2VmdWxcbiAqIGluZm8gc3VjaDpcbiAqIC0gTWlzc2luZyBpbnB1dHMgbmVlZGVkIHRvIGNvbXB1dGUgdGhlIG91dHB1dC5cbiAqIC0gV2hldGhlciB0aGUgc3ViZ3JhcGggY29udGFpbnMgZHluYW1pYyBvcHMgKGNvbnRyb2wgZmxvdywgZHluYW1pYyBzaGFwZSkuXG4gKiAtIEFsdGVybmF0aXZlIGlucHV0cyBpbiBvcmRlciB0byBhdm9pZCBhc3luYyAoZHluYW1pYyBvcCkgZXhlY3V0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhlY3V0aW9uU3ViZ3JhcGgoXG4gICAgaW5wdXRzOiBOYW1lZFRlbnNvck1hcCwgb3V0cHV0czogTm9kZVtdLCB3ZWlnaHRNYXA6IE5hbWVkVGVuc29yc01hcCxcbiAgICBpbml0Tm9kZXM/OiBOb2RlW10pOiBFeGVjdXRpb25JbmZvIHtcbiAgY29uc3QgdXNlZE5vZGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IG1pc3NpbmdJbnB1dHM6IHN0cmluZ1tdID0gW107XG4gIGxldCBkeW5hbWljTm9kZTogTm9kZSA9IG51bGw7XG4gIGxldCBzeW5jSW5wdXRzOiBzdHJpbmdbXSA9IG51bGw7XG5cbiAgLy8gU3RhcnQgd2l0aCB0aGUgb3V0cHV0cywgZ29pbmcgYmFja3dhcmRzIGFuZCBmaW5kIGFsbCB0aGUgbm9kZXMgdGhhdCBhcmVcbiAgLy8gbmVlZGVkIHRvIGNvbXB1dGUgdGhvc2Ugb3V0cHV0cy5cbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBpbnB1dE5vZGVOYW1lcyA9XG4gICAgICBuZXcgU2V0KE9iamVjdC5rZXlzKGlucHV0cykubWFwKChuYW1lKSA9PiBwYXJzZU5vZGVOYW1lKG5hbWUpWzBdKSk7XG5cbiAgaW5pdE5vZGVzID0gaW5pdE5vZGVzIHx8IFtdO1xuICBjb25zdCBpbml0Tm9kZU5hbWVzID1cbiAgICAgIG5ldyBTZXQoaW5pdE5vZGVzLm1hcCgobm9kZSkgPT4gcGFyc2VOb2RlTmFtZShub2RlLm5hbWUpWzBdKSk7XG5cbiAgY29uc3QgZnJvbnRpZXIgPSBbLi4ub3V0cHV0c107XG4gIHdoaWxlIChmcm9udGllci5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZyb250aWVyLnBvcCgpO1xuICAgIGlmIChpc0NvbnRyb2xGbG93KG5vZGUpIHx8IGlzRHluYW1pY1NoYXBlKG5vZGUpIHx8IGlzSGFzaFRhYmxlKG5vZGUpKSB7XG4gICAgICBpZiAoZHluYW1pY05vZGUgPT0gbnVsbCkge1xuICAgICAgICBkeW5hbWljTm9kZSA9IG5vZGU7XG4gICAgICAgIHN5bmNJbnB1dHMgPSBkeW5hbWljTm9kZS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKG5hbWUgPT4gdXNlZE5vZGVzLmhhcyhuYW1lKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHVzZWROb2Rlcy5hZGQobm9kZS5uYW1lKTtcblxuICAgIC8vIFdlaWdodHMgYXJlIGRlYWQgZW5kIHNpbmNlIHdlIGFscmVhZHkgaGF2ZSB0aGVpciB2YWx1ZXMuXG4gICAgaWYgKHdlaWdodE1hcFtub2RlLm5hbWVdICE9IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICAvLyBUaGlzIG5vZGUgaXMgYSBkZWFkIGVuZCBzaW5jZSBpdCdzIG9uZSBvZiB0aGUgdXNlci1wcm92aWRlZCBpbnB1dHMuXG4gICAgaWYgKGlucHV0Tm9kZU5hbWVzLmhhcyhub2RlLm5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgLy8gVGhpcyBub2RlIGlzIGEgZGVhZCBlbmQgc2luY2UgaXQgZG9lc24ndCBoYXZlIGFueSBpbnB1dHMuXG4gICAgaWYgKGluaXROb2RlTmFtZXMuaGFzKG5vZGUubmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobm9kZS5pbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBtaXNzaW5nSW5wdXRzLnB1c2gobm9kZS5uYW1lKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBub2RlLmlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIC8vIERvbid0IGFkZCB0byB0aGUgZnJvbnRpZXIgaWYgaXQgaXMgYWxyZWFkeSB0aGVyZS5cbiAgICAgIGlmIChzZWVuLmhhcyhpbnB1dC5uYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWVuLmFkZChpbnB1dC5uYW1lKTtcbiAgICAgIGZyb250aWVyLnB1c2goaW5wdXQpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB7aW5wdXRzLCBvdXRwdXRzLCB1c2VkTm9kZXMsIG1pc3NpbmdJbnB1dHMsIGR5bmFtaWNOb2RlLCBzeW5jSW5wdXRzfTtcbn1cblxuLyoqXG4gKiBHaXZlbiB0aGUgZXhlY3V0aW9uIGluZm8sIHJldHVybiBhIGxpc3Qgb2Ygbm9kZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIgdGhhdFxuICogbmVlZCB0byBiZSBleGVjdXRlZCB0byBjb21wdXRlIHRoZSBvdXRwdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2Rlc0luVG9wb2xvZ2ljYWxPcmRlcihcbiAgICBncmFwaDogR3JhcGgsIGV4ZWN1dGlvbkluZm86IEV4ZWN1dGlvbkluZm8pOiBOb2RlW10ge1xuICBjb25zdCB7dXNlZE5vZGVzLCBpbnB1dHN9ID0gZXhlY3V0aW9uSW5mbztcbiAgY29uc3QgaW5wdXROb2RlcyA9IE9iamVjdC5rZXlzKGlucHV0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG5hbWUgPT4gcGFyc2VOb2RlTmFtZShuYW1lKVswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKG5hbWUgPT4gZ3JhcGgubm9kZXNbbmFtZV0pO1xuICBjb25zdCBpbml0Tm9kZXMgPSBncmFwaC5pbml0Tm9kZXMgfHwgW107XG5cbiAgY29uc3QgaXNVc2VkID0gKG5vZGU6IE5vZGV8c3RyaW5nKSA9PlxuICAgICAgdXNlZE5vZGVzLmhhcyh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgPyBub2RlIDogbm9kZS5uYW1lKTtcblxuICBmdW5jdGlvbiB1bmlxdWUobm9kZXM6IE5vZGVbXSk6IE5vZGVbXSB7XG4gICAgcmV0dXJuIFsuLi5uZXcgTWFwKG5vZGVzLm1hcCgobm9kZSkgPT4gW25vZGUubmFtZSwgbm9kZV0pKS52YWx1ZXMoKV07XG4gIH1cbiAgY29uc3QgcHJlZGVmaW5lZE5vZGVzID0gdW5pcXVlKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pbnB1dE5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmdyYXBoLndlaWdodHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaW5pdE5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKS5maWx0ZXIoaXNVc2VkKTtcbiAgY29uc3QgYWxsTm9kZXMgPSB1bmlxdWUoW1xuICAgICAgICAgICAgICAgICAgICAgLi4ucHJlZGVmaW5lZE5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgLi4uT2JqZWN0LnZhbHVlcyhncmFwaC5ub2RlcyksXG4gICAgICAgICAgICAgICAgICAgXSkuZmlsdGVyKGlzVXNlZCk7XG4gIGNvbnN0IG5hbWVUb05vZGUgPVxuICAgICAgbmV3IE1hcDxzdHJpbmcsIE5vZGU+KGFsbE5vZGVzLm1hcCgobm9kZSkgPT4gW25vZGUubmFtZSwgbm9kZV0pKTtcblxuICBjb25zdCBpbkNvdW50czogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICBmb3IgKGNvbnN0IG5vZGUgb2YgYWxsTm9kZXMpIHtcbiAgICBpbkNvdW50c1tub2RlLm5hbWVdID0gaW5Db3VudHNbbm9kZS5uYW1lXSB8fCAwO1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgLy8gV2hlbiB0aGUgY2hpbGQgaXMgdW51c2VkLCBzZXQgaW4gY291bnRzIHRvIGluZmluaXR5IHNvIHRoYXQgaXQgd2lsbFxuICAgICAgLy8gbmV2ZXIgYmUgZGVjcmVhc2VkIHRvIDAgYW5kIGFkZGVkIHRvIHRoZSBleGVjdXRpb24gbGlzdC5cbiAgICAgIGlmICghaXNVc2VkKGNoaWxkKSkge1xuICAgICAgICBpbkNvdW50c1tjaGlsZC5uYW1lXSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgIH1cbiAgICAgIGluQ291bnRzW2NoaWxkLm5hbWVdID0gKGluQ291bnRzW2NoaWxkLm5hbWVdIHx8IDApICsgMTtcbiAgICB9XG4gIH1cblxuICAvLyBCdWlsZCBleGVjdXRpb24gb3JkZXIgZm9yIGFsbCB1c2VkIG5vZGVzIHJlZ2FyZGxlc3Mgd2hldGhlciB0aGV5IGFyZVxuICAvLyBwcmVkZWZpbmVkIG9yIG5vdC5cbiAgY29uc3QgZnJvbnRpZXIgPSBPYmplY3QuZW50cmllcyhpbkNvdW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoWywgaW5Db3VudF0pID0+IGluQ291bnQgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSk7XG4gIGNvbnN0IG9yZGVyZWROb2RlTmFtZXMgPSBbLi4uZnJvbnRpZXJdO1xuICB3aGlsZSAoZnJvbnRpZXIubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IG5vZGVOYW1lID0gZnJvbnRpZXIucG9wKCk7XG4gICAgY29uc3Qgbm9kZSA9IG5hbWVUb05vZGUuZ2V0KG5vZGVOYW1lKSE7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuLmZpbHRlcihpc1VzZWQpKSB7XG4gICAgICBpZiAoLS1pbkNvdW50c1tjaGlsZC5uYW1lXSA9PT0gMCkge1xuICAgICAgICBvcmRlcmVkTm9kZU5hbWVzLnB1c2goY2hpbGQubmFtZSk7XG4gICAgICAgIGZyb250aWVyLnB1c2goY2hpbGQubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3JkZXJlZE5vZGVzID0gb3JkZXJlZE5vZGVOYW1lcy5tYXAoKG5hbWUpID0+IG5hbWVUb05vZGUuZ2V0KG5hbWUpKTtcbiAgY29uc3QgZmlsdGVyZWRPcmRlcmVkTm9kZXMgPVxuICAgICAgZmlsdGVyUHJlZGVmaW5lZFJlYWNoYWJsZU5vZGVzKG9yZGVyZWROb2RlcywgcHJlZGVmaW5lZE5vZGVzKTtcblxuICAvLyBUT0RPOiBUdXJuIHZhbGlkYXRpb24gb24vb2ZmIHdpdGggdGYgZW52IGZsYWcuXG4gIHZhbGlkYXRlTm9kZXNFeGVjdXRpb25PcmRlcihmaWx0ZXJlZE9yZGVyZWROb2RlcywgcHJlZGVmaW5lZE5vZGVzKTtcblxuICByZXR1cm4gZmlsdGVyZWRPcmRlcmVkTm9kZXM7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIGhlbHBlciBmdW5jdGlvbiBvZiBgZ2V0Tm9kZXNJblRvcG9sb2dpY2FsT3JkZXJgLlxuICogUmV0dXJucyBvcmRlcmVkIG5vZGVzIHJlYWNoYWJsZSBieSBhdCBsZWFzdCBvbmUgcHJlZGVmaW5lZCBub2RlLlxuICogVGhpcyBjYW4gaGVscCB1cyBmaWx0ZXIgb3V0IHJlZHVuZGFudCBub2RlcyBmcm9tIHRoZSByZXR1cm5lZCBub2RlIGxpc3QuXG4gKiBGb3IgZXhhbXBsZTpcbiAqIElmIHdlIGhhdmUgZm91ciBub2RlcyB3aXRoIGRlcGVuZGVuY2llcyBsaWtlIHRoaXM6XG4gKiAgIGEgLS0+IGIgLS0+IGMgLS0+IGRcbiAqIHdoZW4gbm9kZSBgY2AgaXMgcHJlZGVmaW5lZCAoZS5nLiBnaXZlbiBhcyBhbiBpbnB1dCB0ZW5zb3IpLCB3ZSBjYW5cbiAqIHNraXAgbm9kZSBgYWAgYW5kIGBiYCBzaW5jZSB0aGVpciBvdXRwdXRzIHdpbGwgbmV2ZXIgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gb3JkZXJlZE5vZGVzIEdyYXBoIG5vZGVzIGluIGV4ZWN1dGlvbiBvcmRlci5cbiAqIEBwYXJhbSBwcmVkZWZpbmVkTm9kZXMgR3JhcGggaW5wdXRzLCB3ZWlnaHRzLCBhbmQgaW5pdCBub2Rlcy4gTm9kZXMgaW4gdGhpc1xuICogICAgIGxpc3QgbXVzdCBoYXZlIGRpc3RpbmN0IG5hbWVzLlxuICovXG5mdW5jdGlvbiBmaWx0ZXJQcmVkZWZpbmVkUmVhY2hhYmxlTm9kZXMoXG4gICAgb3JkZXJlZE5vZGVzOiBOb2RlW10sIHByZWRlZmluZWROb2RlczogTm9kZVtdKSB7XG4gIGNvbnN0IG5hbWVUb05vZGUgPVxuICAgICAgbmV3IE1hcDxzdHJpbmcsIE5vZGU+KG9yZGVyZWROb2Rlcy5tYXAoKG5vZGUpID0+IFtub2RlLm5hbWUsIG5vZGVdKSk7XG5cbiAgLy8gVE9ETzogRmlsdGVyIG91dCBtb3JlIG5vZGVzIHdoZW4gPj0yIG5vZGVzIGFyZSBwcmVkZWZpbmVkIGluIGEgcGF0aC5cbiAgY29uc3Qgc3RhY2sgPSBwcmVkZWZpbmVkTm9kZXMubWFwKChub2RlKSA9PiBub2RlLm5hbWUpO1xuICBjb25zdCBwcmVkZWZpbmVkUmVhY2hhYmxlTm9kZU5hbWVzID0gbmV3IFNldChzdGFjayk7XG4gIC8vIFBlcmZvcm0gYSBERlMgc3RhcnRpbmcgZnJvbSB0aGUgc2V0IG9mIGFsbCBwcmVkZWZpbmVkIG5vZGVzXG4gIC8vIHRvIGZpbmQgdGhlIHNldCBvZiBhbGwgbm9kZXMgcmVhY2hhYmxlIGZyb20gdGhlIHByZWRlZmluZWQgbm9kZXMuXG4gIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgbm9kZU5hbWUgPSBzdGFjay5wb3AoKTtcbiAgICBjb25zdCBub2RlID0gbmFtZVRvTm9kZS5nZXQobm9kZU5hbWUpITtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGlmICghbmFtZVRvTm9kZS5oYXMoY2hpbGQubmFtZSkgfHxcbiAgICAgICAgICBwcmVkZWZpbmVkUmVhY2hhYmxlTm9kZU5hbWVzLmhhcyhjaGlsZC5uYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHByZWRlZmluZWRSZWFjaGFibGVOb2RlTmFtZXMuYWRkKGNoaWxkLm5hbWUpO1xuICAgICAgc3RhY2sucHVzaChjaGlsZC5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBGaWx0ZXIgb3V0IHVucmVhY2hhYmxlIG5vZGVzIGFuZCBidWlsZCB0aGUgb3JkZXJlZCBub2RlIGxpc3QuXG4gIGNvbnN0IGZpbHRlcmVkT3JkZXJlZE5vZGVzID0gb3JkZXJlZE5vZGVzLmZpbHRlcihcbiAgICAgIChub2RlKSA9PiBwcmVkZWZpbmVkUmVhY2hhYmxlTm9kZU5hbWVzLmhhcyhub2RlLm5hbWUpKTtcblxuICByZXR1cm4gZmlsdGVyZWRPcmRlcmVkTm9kZXM7XG59XG5cbmNsYXNzIE5vZGVzRXhlY3V0aW9uT3JkZXJFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoYE5vZGVzRXhlY3V0aW9uT3JkZXJFcnJvcjogJHttZXNzYWdlfWApO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIGhlbHBlciBmdW5jdGlvbiBvZiBgZ2V0Tm9kZXNJblRvcG9sb2dpY2FsT3JkZXJgLlxuICogVmFsaWRhdGVzIHByb3BlcnR5OiBnaXZlbiBub2RlcyBgYWAgYW5kIGBiYCwgT3JkZXIoYSkgPiBPcmRlcihiKSBpZiBgYWBcbiAqIGlzIGEgY2hpbGQgb2YgYGJgLiBUaGlzIGZ1bmN0aW9uIHRocm93cyBhbiBlcnJvciBpZiB2YWxpZGF0aW9uIGZhaWxzLlxuICpcbiAqIEBwYXJhbSBvcmRlcmVkTm9kZXMgR3JhcGggbm9kZXMgaW4gZXhlY3V0aW9uIG9yZGVyLlxuICogQHBhcmFtIHByZWRlZmluZWROb2RlcyBHcmFwaCBpbnB1dHMsIHdlaWdodHMsIGFuZCBpbml0IG5vZGVzLiBOb2RlcyBpbiB0aGlzXG4gKiAgICAgbGlzdCBtdXN0IGhhdmUgZGlzdGluY3QgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlTm9kZXNFeGVjdXRpb25PcmRlcihcbiAgICBvcmRlcmVkTm9kZXM6IE5vZGVbXSwgcHJlZGVmaW5lZE5vZGVzOiBOb2RlW10pIHtcbiAgY29uc3Qgbm9kZU5hbWVUb09yZGVyID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oXG4gICAgICBvcmRlcmVkTm9kZXMubWFwKChub2RlLCBvcmRlcikgPT4gW25vZGUubmFtZSwgb3JkZXJdKSk7XG4gIGNvbnN0IHByZWRlZmluZWROb2RlTmFtZXMgPSBuZXcgU2V0KHByZWRlZmluZWROb2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUubmFtZSkpO1xuICBjb25zdCBpc1ByZWRlZmluZWQgPSAobm9kZTogTm9kZXxzdHJpbmcpID0+XG4gICAgICBwcmVkZWZpbmVkTm9kZU5hbWVzLmhhcyh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgPyBub2RlIDogbm9kZS5uYW1lKTtcbiAgY29uc3Qgd2lsbEJlRXhlY3V0ZWROb2RlTmFtZXMgPVxuICAgICAgbmV3IFNldChvcmRlcmVkTm9kZXMubWFwKChub2RlKSA9PiBub2RlLm5hbWUpKTtcbiAgY29uc3Qgd2lsbEJlRXhlY3V0ZWQgPSAobm9kZTogTm9kZXxzdHJpbmcpID0+XG4gICAgICB3aWxsQmVFeGVjdXRlZE5vZGVOYW1lcy5oYXModHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnID8gbm9kZSA6IG5vZGUubmFtZSk7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIG9yZGVyZWROb2Rlcykge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbi5maWx0ZXIod2lsbEJlRXhlY3V0ZWQpKSB7XG4gICAgICBpZiAoIW5vZGVOYW1lVG9PcmRlci5oYXMoY2hpbGQubmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vZGVzRXhlY3V0aW9uT3JkZXJFcnJvcihcbiAgICAgICAgICAgIGBDaGlsZCAke2NoaWxkLm5hbWV9IG9mIG5vZGUgJHtub2RlLm5hbWV9IGlzIHVucmVhY2hhYmxlLmApO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGVOYW1lVG9PcmRlci5nZXQobm9kZS5uYW1lKSA+IG5vZGVOYW1lVG9PcmRlci5nZXQoY2hpbGQubmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vZGVzRXhlY3V0aW9uT3JkZXJFcnJvcihgTm9kZSAke1xuICAgICAgICAgICAgbm9kZS5uYW1lfSBpcyBzY2hlZHVsZWQgdG8gcnVuIGFmdGVyIGl0cyBjaGlsZCAke2NoaWxkLm5hbWV9LmApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzUHJlZGVmaW5lZChub2RlKSkge1xuICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBub2RlLmlucHV0cykge1xuICAgICAgICBpZiAoIW5vZGVOYW1lVG9PcmRlci5oYXMoaW5wdXQubmFtZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTm9kZXNFeGVjdXRpb25PcmRlckVycm9yKFxuICAgICAgICAgICAgICBgSW5wdXQgJHtpbnB1dC5uYW1lfSBvZiBub2RlICR7bm9kZS5uYW1lfSBpcyB1bnJlYWNoYWJsZS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZU5hbWVUb09yZGVyLmdldChpbnB1dC5uYW1lKSA+IG5vZGVOYW1lVG9PcmRlci5nZXQobm9kZS5uYW1lKSkge1xuICAgICAgICAgIHRocm93IG5ldyBOb2Rlc0V4ZWN1dGlvbk9yZGVyRXJyb3IoYE5vZGUgJHtcbiAgICAgICAgICAgICAgbm9kZS5uYW1lfSBpcyBzY2hlZHVsZWQgdG8gcnVuIGJlZm9yZSBpdHMgaW5wdXQgJHtpbnB1dC5uYW1lfS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIHRoZSBleGVjdXRpb24gaW5mbywgcmV0dXJuIGEgbWFwIGZyb20gbm9kZSBuYW1lIHRvIHRoZSBkaXNwb3NhYmxlXG4gKiBub2RlIG5hbWUgbGlzdCBhZnRlciBpdHMgZXhlY3V0aW9uLlxuICpcbiAqIEByZXR1cm5zIEEgbWFwIGZyb20gbm9kZSBuYW1lIHRvIGRpc3Bvc2FibGUgbm9kZXMgYWZ0ZXIgaXRzXG4gKiAgICAgZXhlY3V0aW9uLiBUaGF0IGlzLCBmb3IgYSBub2RlIGB4YCwgYG5vZGVMaXZlVW50aWxNYXBbeF1gIGluZGljYXRlc1xuICogICAgIGFsbCBub2RlcyB3aGljaCB0aGVpciBpbnRlcm1lZGlhdGUgdGVuc29ycyBzaG91bGQgYmUgZGlzcG9zZWQgYWZ0ZXIgYHhgXG4gKiAgICAgYmVpbmcgZXhlY3V0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlTGl2ZVVudGlsTWFwKG9yZGVyZWROb2RlczogTm9kZVtdKTogTWFwPHN0cmluZywgTm9kZVtdPiB7XG4gIGNvbnN0IG5vZGVOYW1lVG9PcmRlciA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFxuICAgICAgb3JkZXJlZE5vZGVzLm1hcCgobm9kZSwgb3JkZXIpID0+IFtub2RlLm5hbWUsIG9yZGVyXSkpO1xuXG4gIGNvbnN0IElORl9MSUZFID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gIC8vIE1ha2UgY29udHJvbCBmbG93IG5vZGVzIChhbmQgY29uc2VxdWVudGx5IHRoZWlyIGRpcmVjdCBwYXJlbnRzKVxuICAvLyBsaXZlIGZvcmV2ZXIgc2luY2UgdGhleSdyZSB0cmlja3kgdG8gdHJhY2sgY29ycmVjdGx5LlxuICBjb25zdCBzZWxmTGlmZXNwYW5zID0gb3JkZXJlZE5vZGVzLm1hcChcbiAgICAgIChub2RlLCBub2RlT3JkZXIpID0+IGlzQ29udHJvbEZsb3cobm9kZSkgPyBJTkZfTElGRSA6IG5vZGVPcmRlcik7XG4gIGNvbnN0IGdldFNlbGZMaWZlU3BhbiA9IChub2RlOiBOb2RlKSA9PiB7XG4gICAgY29uc3Qgc2VsZkxpZmUgPSBzZWxmTGlmZXNwYW5zW25vZGVOYW1lVG9PcmRlci5nZXQobm9kZS5uYW1lKSFdO1xuICAgIGlmIChzZWxmTGlmZSA9PSBudWxsKSB7XG4gICAgICAvLyBJZiBub2RlVG9PcmRlciBkb2VzIG5vdCBjb250YWluIHRoZSBub2RlLCBpdCBpcyB1bnVzZWQgb3JcbiAgICAgIC8vIHVucmVhY2hhYmxlIGluIGdyYXBoLlxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZkxpZmU7XG4gIH07XG5cbiAgLy8gYGxpdmVVbnRpbFtpXWAgcG9pbnRzIHRvIHRoZSBsYXN0IG5vZGUgaW4gdGhlIGBvcmRlcmVkTm9kZXNgIGFycmF5IHRoYXRcbiAgLy8gbWF5IGRlcGVuZCBvbiB0ZW5zb3JzIGZyb20gbm9kZSBgaWAuIEl0IGluZGljYXRlcyB0aGF0IGFsbCB0aGVcbiAgLy8gaW50ZXJtZWRpYXRlIHRlbnNvcnMgZnJvbSBgb3JkZXJlZE5vZGVzW2ldYCBzaG91bGQgYmUgZGlzcG9zZWQgYWZ0ZXJcbiAgLy8gYG9yZGVyZWROb2Rlc1tsaXZlVW50aWxbaV1dYCBpcyBleGVjdXRlZC5cbiAgLy8gQSBub2RlIGxpdmVzIGxvbmcgZW5vdWdoIHRvIHBhc3Mgb24gaXRzIHRlbnNvcnMgdG8gaXRzIGNoaWxkcmVuLlxuICAvLyBJdCBsaXZlcyB1bnRpbCBhdCBsZWFzdCBgbWF4KG5vZGUncyBwb3NpdGlvbiwgY2hpbGRyZW4ncyBwb3NpdGlvbnMpYC5cbiAgY29uc3QgbGl2ZVVudGlsT3JkZXJzID0gb3JkZXJlZE5vZGVzLm1hcCgobm9kZSwgbm9kZU9yZGVyKSA9PiB7XG4gICAgcmV0dXJuIG5vZGUuY2hpbGRyZW4ubWFwKGdldFNlbGZMaWZlU3BhbilcbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5tYXgoYSwgYiksIHNlbGZMaWZlc3BhbnNbbm9kZU9yZGVyXSk7XG4gIH0pO1xuXG4gIC8vIGxpdmVVbnRpbE1hcDpcbiAgLy8gLSBLZXk6IE5hbWUgb2YgYSBub2RlIGB4YFxuICAvLyAtIFZhbHVlczogQWxsIG5vZGVzIHdob3NlIGludGVybWVkaWF0ZSB0ZW5zb3JzIHNob3VsZCBiZSBkaXNwb3NlZFxuICAvLyAgICAgICAgICAgYWZ0ZXIgYHhgIGlzIGV4ZWN1dGVkLlxuICBjb25zdCBsaXZlVW50aWxNYXAgPSBuZXcgTWFwPHN0cmluZywgTm9kZVtdPigpO1xuICBmb3IgKGxldCBub2RlT3JkZXIgPSAwOyBub2RlT3JkZXIgPCBvcmRlcmVkTm9kZXMubGVuZ3RoOyArK25vZGVPcmRlcikge1xuICAgIGNvbnN0IGxpdmVVbnRpbE9yZGVyID0gbGl2ZVVudGlsT3JkZXJzW25vZGVPcmRlcl07XG4gICAgaWYgKGxpdmVVbnRpbE9yZGVyID09PSBJTkZfTElGRSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IG5vZGUgPSBvcmRlcmVkTm9kZXNbbm9kZU9yZGVyXTtcbiAgICBjb25zdCBsaXZlVW50aWxOb2RlID0gb3JkZXJlZE5vZGVzW2xpdmVVbnRpbE9yZGVyXTtcbiAgICBpZiAoIWxpdmVVbnRpbE1hcC5oYXMobGl2ZVVudGlsTm9kZS5uYW1lKSkge1xuICAgICAgbGl2ZVVudGlsTWFwLnNldChsaXZlVW50aWxOb2RlLm5hbWUsIFtdKTtcbiAgICB9XG4gICAgbGl2ZVVudGlsTWFwLmdldChsaXZlVW50aWxOb2RlLm5hbWUpIS5wdXNoKG5vZGUpO1xuICB9XG4gIHJldHVybiBsaXZlVW50aWxNYXA7XG59XG5cbmNvbnN0IENPTlRST0xfRkxPV19PUFMgPSBuZXcgU2V0KFtcbiAgJ1N3aXRjaCcsICdNZXJnZScsICdFbnRlcicsICdFeGl0JywgJ05leHRJdGVyYXRpb24nLCAnU3RhdGVsZXNzSWYnLFxuICAnU3RhdGVsZXNzV2hpbGUnLCAnaWYnLCAnV2hpbGUnXG5dKTtcbmNvbnN0IERZTkFNSUNfU0hBUEVfT1BTID0gbmV3IFNldChbXG4gICdOb25NYXhTdXBwcmVzc2lvblYyJywgJ05vbk1heFN1cHByZXNzaW9uVjMnLCAnTm9uTWF4U3VwcHJlc3Npb25WNScsICdXaGVyZSdcbl0pO1xuY29uc3QgSEFTSF9UQUJMRV9PUFMgPSBuZXcgU2V0KFtcbiAgJ0hhc2hUYWJsZScsICdIYXNoVGFibGVWMicsICdMb29rdXBUYWJsZUltcG9ydCcsICdMb29rdXBUYWJsZUltcG9ydFYyJyxcbiAgJ0xvb2t1cFRhYmxlRmluZCcsICdMb29rdXBUYWJsZUZpbmRWMicsICdMb29rdXBUYWJsZVNpemUnLCAnTG9va3VwVGFibGVTaXplVjInXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29udHJvbEZsb3cobm9kZTogTm9kZSkge1xuICByZXR1cm4gQ09OVFJPTF9GTE9XX09QUy5oYXMobm9kZS5vcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNTaGFwZShub2RlOiBOb2RlKSB7XG4gIHJldHVybiBEWU5BTUlDX1NIQVBFX09QUy5oYXMobm9kZS5vcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hhc2hUYWJsZShub2RlOiBOb2RlKSB7XG4gIHJldHVybiBIQVNIX1RBQkxFX09QUy5oYXMobm9kZS5vcCk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "GraphExecutor",
    ()=>GraphExecutor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/operations/executors/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$operation_executor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/operations/operation_executor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$execution_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/execution_context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/model_analysis.js [app-client] (ecmascript)");
;
;
;
;
;
class GraphExecutor {
    get weightIds() {
        return this.parent ? this.parent.weightIds : this._weightIds;
    }
    get functionExecutorMap() {
        return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
    }
    get weightMap() {
        return this.parent ? this.parent.weightMap : this._weightMap;
    }
    set weightMap(weightMap) {
        const weightIds = Object.keys(weightMap).map((key)=>weightMap[key].map((tensor)=>tensor.id));
        this._weightIds = [].concat(...weightIds);
        this._weightMap = weightMap;
    }
    /**
     * Set `ResourceManager` shared by executors of a model.
     * @param resourceManager: `ResourceManager` of the `GraphModel`.
     */ set resourceManager(resourceManager) {
        this._resourceManager = resourceManager;
    }
    get inputs() {
        return this._inputs.map((node)=>{
            return {
                name: node.name,
                shape: node.attrParams['shape'] ? node.attrParams['shape'].value : undefined,
                dtype: node.attrParams['dtype'] ? node.attrParams['dtype'].value : undefined
            };
        });
    }
    get outputs() {
        return this._outputs.map((node)=>{
            return {
                name: node.name,
                shape: node.attrParams['shape'] ? node.attrParams['shape'].value : undefined,
                dtype: node.attrParams['dtype'] ? node.attrParams['dtype'].value : undefined
            };
        });
    }
    get inputNodes() {
        return this._inputs.map((node)=>node.signatureKey || node.name);
    }
    get outputNodes() {
        return this._outputs.map((node)=>{
            const name = node.signatureKey || node.name;
            return node.defaultOutput ? `${name}:${node.defaultOutput}` : name;
        });
    }
    get functions() {
        return Object.keys(this._functions).reduce((map, key)=>{
            map[key] = this._functions[key].signature;
            return map;
        }, {});
    }
    /**
     *
     * @param graph Graph the model or function graph to be executed.
     * @param parent When building function exector you need to set the parent
     * executor. Since the weights and function executor maps are set at parant
     * level, that function executor can access the function maps and weight maps
     * through the parent.
     */ constructor(graph, parent){
        this.graph = graph;
        this.parent = parent;
        this.compiledMap = new Map();
        this.parseNodeNameCache = new Map();
        this._weightMap = {};
        this.SEPARATOR = ',';
        this._functions = {};
        this._functionExecutorMap = {};
        this.keepIntermediateTensors = false;
        this._outputs = graph.outputs;
        this._inputs = graph.inputs;
        this._initNodes = graph.initNodes;
        this._signature = graph.signature;
        this._functions = graph.functions;
        // create sub-graph executors
        if (graph.functions != null) {
            Object.keys(graph.functions).forEach((name)=>{
                this._functionExecutorMap[name] = new GraphExecutor(graph.functions[name], this);
            });
        }
    }
    getCompilationKey(inputs, outputs) {
        const sortedInputs = inputs.map((node)=>node.name).sort();
        const sortedOutputs = outputs.map((node)=>node.name).sort();
        return sortedInputs.join(this.SEPARATOR) + '--' + sortedOutputs.join(this.SEPARATOR);
    }
    /**
     * Compiles the inference graph and returns the minimal set of nodes that are
     * required for execution, in the correct execution order.
     * @returns {Object} compilation The compile result.
     * @returns {Node[]} compilation.orderedNodes Nodes in the correct execution
     *     order.
     * @returns {Map<string, Node[]>} compilation.nodeLiveUntilMap A map from node
     *     to disposable nodes after its execution. That is, for a node `x`,
     *     `nodeLiveUntilMap[x]` indicates all nodes whose intermediate
     *     tensors should be disposed after `x` is executed.
     */ compile(inputs, outputs) {
        const executionInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExecutionSubgraph"])(inputs, outputs, this.weightMap, this._initNodes);
        const { missingInputs, dynamicNode, syncInputs } = executionInfo;
        if (dynamicNode != null) {
            throw new Error(`This execution contains the node '${dynamicNode.name}', which has ` + `the dynamic op '${dynamicNode.op}'. Please use ` + `model.executeAsync() instead. Alternatively, to avoid the ` + `dynamic ops, specify the inputs [${syncInputs}]`);
        }
        if (missingInputs.length > 0) {
            const outNames = outputs.map((n)=>n.name);
            const inNames = Object.keys(inputs);
            throw new Error(`Cannot compute the outputs [${outNames}] from the provided inputs ` + `[${inNames}]. Missing the following inputs: [${missingInputs}]`);
        }
        const orderedNodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodesInTopologicalOrder"])(this.graph, executionInfo);
        const nodeLiveUntilMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeLiveUntilMap"])(orderedNodes);
        return {
            orderedNodes,
            nodeLiveUntilMap
        };
    }
    cloneAndKeepTensor(tensor) {
        if (tensor == null) {
            return null;
        }
        const clone = tensor.clone();
        // Keep the clone because`model.execute()` may be called within
        // a `tidy()`, but the user may inspect these tensors after the
        // tidy.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keep"])(clone);
        return clone;
    }
    cloneTensorList(tensors) {
        if (!tensors) {
            return null;
        }
        const clonedTensor = tensors.map((tensor)=>{
            return this.cloneAndKeepTensor(tensor);
        });
        return clonedTensor;
    }
    cloneTensorMap(tensorsMap) {
        return Object.fromEntries(Object.entries(tensorsMap).map(([name, tensorsList])=>{
            return [
                name,
                this.cloneTensorList(tensorsList)
            ];
        }));
    }
    /**
     * Executes the inference for given input tensors.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs Optional. output node name from the Tensorflow model, if
     * no outputs are specified, the default outputs of the model would be used.
     * You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     */ execute(inputs, outputs) {
        // Dispose any tensors from a prior run to avoid leaking them.
        this.disposeIntermediateTensors();
        inputs = this.mapInputs(inputs);
        const names = Object.keys(inputs).sort();
        this.checkInputs(inputs);
        this.checkInputShapeAndType(inputs);
        outputs = this.mapOutputs(outputs);
        this.checkOutputs(outputs);
        const inputNodes = names.map((name)=>this.graph.nodes[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name)[0]]);
        const outputNodeNames = outputs.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name)[0]);
        const outputNodeNameSet = new Set(outputNodeNames);
        let outputNodes = outputNodeNames.map((name)=>this.graph.nodes[name]);
        // If no outputs are specified, then use the default outputs of the model.
        if (outputNodes.length === 0) {
            outputNodes = this._outputs;
        }
        const compilationKey = this.getCompilationKey(inputNodes, outputNodes);
        // Do nothing if the compiled graph cache contains the input.
        let compilation = this.compiledMap.get(compilationKey);
        if (compilation == null) {
            compilation = this.compile(inputs, outputNodes);
            this.compiledMap.set(compilationKey, compilation);
        }
        // Keep tensors if KEEP_INTERMEDIATE_TENSORS is on.
        try {
            this.keepIntermediateTensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().getBool('KEEP_INTERMEDIATE_TENSORS');
        } catch (e) {
            this.keepIntermediateTensors = false;
            console.warn(e.message);
        }
        const tensorArrayMap = {};
        const tensorListMap = {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const context = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$execution_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExecutionContext"](this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap, this.parseNodeNameCache);
            const tensorsMap = Object.assign({}, this.weightMap);
            if (this.keepIntermediateTensors) {
                this.clonedTensorsMap = this.cloneTensorMap(this.weightMap);
            }
            Object.keys(inputs).forEach((name)=>{
                const [nodeName, index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name, context);
                const tensors = [];
                tensors[index] = inputs[name];
                tensorsMap[nodeName] = tensors;
                if (this.keepIntermediateTensors) {
                    this.clonedTensorsMap[nodeName] = this.cloneTensorList(tensors);
                }
            });
            const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
            const { orderedNodes, nodeLiveUntilMap } = compilation;
            for (const node of orderedNodes){
                if (tensorsMap[node.name]) {
                    continue;
                }
                const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$operation_executor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOp"])(node, tensorsMap, context, this._resourceManager);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isPromise(tensors)) {
                    throw new Error(`The execution of the op '${node.op}' returned a promise. ` + `Please use model.executeAsync() instead.`);
                }
                tensorsMap[node.name] = tensors;
                if (this.keepIntermediateTensors) {
                    this.clonedTensorsMap[node.name] = this.cloneTensorList(tensors);
                }
                this.checkTensorForDisposalWithNodeLiveUntilInfo(node, tensorsMap, context, tensorsToKeep, outputNodeNameSet, nodeLiveUntilMap.get(node.name));
            }
            // dispose the context for the root executor
            if (this.parent == null) {
                context.dispose(tensorsToKeep);
            }
            return outputs.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensor"])(name, tensorsMap, context));
        });
    }
    getFrozenTensorIds(tensorMap) {
        const ids = [].concat.apply([], Object.keys(tensorMap).map((key)=>tensorMap[key]).map((tensors)=>tensors.map((tensor)=>tensor.id)));
        return new Set(ids);
    }
    checkTensorForDisposal(nodeName, node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount) {
        // Skip output nodes and any control flow nodes, since its dependency is
        // tricky to track correctly.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControlFlow"])(node) || outputNodeNameSet.has(nodeName)) {
            return;
        }
        for (const tensor of tensorMap[nodeName]){
            if (tensor == null) {
                continue;
            }
            intermediateTensorConsumerCount[tensor.id] = (intermediateTensorConsumerCount[tensor.id] || 0) + node.children.length;
        }
        for (const input of node.inputs){
            // Skip any control flow nodes, since its dependency is tricky to track
            // correctly.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControlFlow"])(input)) {
                continue;
            }
            const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensorsForCurrentContext"])(input.name, tensorMap, context);
            if (tensors == null) {
                continue;
            }
            for (const tensor of tensors){
                if (!tensor || tensor.kept || tensorsToKeep.has(tensor.id)) {
                    continue;
                }
                // Only intermediate nodes' tensors have counts set, not marked as
                // kept, and not in `tensorsToKeep`.
                // Input and weight nodes' tensors should exist in `tensorsToKeep`.
                // Output and control flow nodes' tensors should never have count set.
                const count = intermediateTensorConsumerCount[tensor.id];
                if (count === 1) {
                    tensor.dispose();
                    delete intermediateTensorConsumerCount[tensor.id];
                } else if (count != null) {
                    intermediateTensorConsumerCount[tensor.id]--;
                }
            }
        }
    }
    checkTensorForDisposalWithNodeLiveUntilInfo(node, tensorMap, context, tensorsToKeep, outputNodeNameSet, liveUntilNodes) {
        function isNonDisposableNode(node) {
            // Skip output nodes and any control flow nodes, since its dependency is
            // tricky to track correctly.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControlFlow"])(node) || outputNodeNameSet.has(node.name);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControlFlow"])(node) || liveUntilNodes == null) {
            return;
        }
        for (const nodeToDispose of liveUntilNodes){
            if (isNonDisposableNode(nodeToDispose)) {
                continue;
            }
            const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensorsForCurrentContext"])(nodeToDispose.name, tensorMap, context);
            for (const tensor of tensors){
                if (!tensor || tensor.kept || tensorsToKeep.has(tensor.id)) {
                    continue;
                }
                tensor.dispose();
            }
        }
    }
    /**
     * Executes the inference for given input tensors in Async fashion.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs output node name from the Tensorflow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     */ async executeAsync(inputs, outputs) {
        return this._executeAsync(inputs, outputs);
    }
    disposeIntermediateTensors() {
        if (!this.clonedTensorsMap) {
            return;
        }
        Object.values(this.clonedTensorsMap).forEach((tensorsList)=>{
            for (const tensor of tensorsList){
                if (tensor && !tensor.isDisposed) {
                    tensor.dispose();
                }
            }
        });
        this.clonedTensorsMap = null;
    }
    getIntermediateTensors() {
        return this.clonedTensorsMap;
    }
    /**
     * Executes the inference for given input tensors in Async fashion.
     * @param inputs Tensor map for the model inputs, keyed by the input node
     * names.
     * @param outputs Optional. output node name from the Tensorflow model,
     * if no outputs are specified, the default outputs of the model would be
     * used. You can inspect intermediate nodes of the model by adding them to
     * the outputs array.
     * @param isFunctionExecution Optional. Flag for executing a function.
     * @param tensorArrayMap Optional, global TensorArray map by id. Used for
     * function execution.
     * @param tensorArrayMap Optional global TensorList map by id. Used for
     * function execution.
     */ async _executeAsync(inputs, outputs, isFunctionExecution = false, tensorArrayMap = {}, tensorListMap = {}) {
        // Dispose any tensors from a prior run to avoid leaking them.
        this.disposeIntermediateTensors();
        if (!isFunctionExecution) {
            inputs = this.mapInputs(inputs);
            this.checkInputs(inputs);
            this.checkInputShapeAndType(inputs);
            outputs = this.mapOutputs(outputs);
            this.checkOutputs(outputs);
        }
        // Keep tensors if KEEP_INTERMEDIATE_TENSORS is on.
        try {
            this.keepIntermediateTensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"])().getBool('KEEP_INTERMEDIATE_TENSORS');
        } catch (e) {
            this.keepIntermediateTensors = false;
            console.warn(e.message);
        }
        const context = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$execution_context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExecutionContext"](this.weightMap, tensorArrayMap, tensorListMap, this.functionExecutorMap, this.parseNodeNameCache);
        if (this.keepIntermediateTensors) {
            this.clonedTensorsMap = this.cloneTensorMap(this.weightMap);
        }
        // Graph with control flow op requires runtime evaluation of the execution
        // order, while without control flow the execution order is pre-determined
        // in the compile method.
        const tensorsMap = await this.executeWithControlFlow(inputs, context, outputs, isFunctionExecution);
        const results = outputs.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensor"])(name, tensorsMap, context));
        // dispose all the intermediate tensors
        const outputIds = results.map((t)=>t.id);
        const inputIds = Object.keys(inputs).map((name)=>inputs[name].id);
        const keepIds = new Set([
            ...outputIds,
            ...inputIds,
            ...this.weightIds
        ]);
        Object.values(tensorsMap).forEach((tensorsList)=>{
            tensorsList.forEach((tensor)=>{
                if (tensor && !tensor.isDisposed && !keepIds.has(tensor.id)) {
                    tensor.dispose();
                }
            });
        });
        // dispose the context for the root executor
        if (this.parent == null) {
            context.dispose(keepIds);
        }
        return results;
    }
    async executeFunctionAsync(inputs, tensorArrayMap, tensorListMap) {
        const mappedInputs = inputs.reduce((map, tensor, index)=>{
            map[this.inputs[index].name] = tensor;
            return map;
        }, {});
        return this._executeAsync(mappedInputs, this.outputNodes, true, tensorArrayMap, tensorListMap);
    }
    /**
     * When there are control flow nodes in the graph, the graph execution use
     * ExecutionContext to keep track of the frames and loop iterators.
     * @param inputs placeholder tensors for the graph.
     * @param context the execution context object for current execution.
     * @param outputNames Optional. output node name from the Tensorflow model,
     * if no outputs are specified, the default outputs of the model would be
     * used. You can inspect intermediate nodes of the model by adding them to
     * the outputs array.
     * @param isFunctionExecution Flag for executing a function.
     */ async executeWithControlFlow(inputs, context, outputNames, isFunctionExecution) {
        const names = Object.keys(inputs);
        const inputNodes = names.map((name)=>this.graph.nodes[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name)[0]]);
        const outputNodeNames = outputNames.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name)[0]);
        const outputNodeNameSet = new Set(outputNodeNames);
        let outputNodes = outputNodeNames.map((name)=>this.graph.nodes[name]);
        // If no outputs are specified, then use the default outputs of the model.
        if (outputNodes.length === 0) {
            outputNodes = this._outputs;
        }
        const { usedNodes, missingInputs, dynamicNode, syncInputs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExecutionSubgraph"])(inputs, outputNodes, this.weightMap, this._initNodes);
        // First nodes to execute include inputNodes, weights, and initNodes.
        const stack = [
            ...inputNodes,
            ...this.graph.weights,
            ...this._initNodes || []
        ].map((node)=>{
            return {
                node,
                contexts: context.currentContext
            };
        });
        const tensorsMap = Object.assign({}, this.weightMap);
        Object.keys(inputs).forEach((name)=>{
            const [nodeName, index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name);
            const tensors = [];
            tensors[index] = inputs[name];
            tensorsMap[nodeName] = tensors;
        });
        const intermediateTensorConsumerCount = {};
        const tensorsToKeep = this.getFrozenTensorIds(tensorsMap);
        const added = {};
        while(stack.length > 0){
            const promises = this.processStack(inputNodes, stack, context, tensorsMap, added, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount, usedNodes);
            await Promise.all(promises);
        }
        if (dynamicNode == null && !isFunctionExecution) {
            console.warn(`This model execution did not contain any nodes with control flow ` + `or dynamic output shapes. You can use model.execute() instead.`);
        }
        const missingOutputs = outputNodes.filter((node)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$model_analysis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControlFlow"])(node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensor"])(node.name, tensorsMap, context)).map((node)=>node.name);
        if (missingOutputs.length > 0) {
            let alternativeMsg = '';
            if (dynamicNode != null) {
                alternativeMsg = `Alternatively, to avoid the dynamic ops, use model.execute() ` + `and specify the inputs [${syncInputs}]`;
            }
            throw new Error(`Cannot compute the outputs [${missingOutputs}] from the provided ` + `inputs [${names}]. Consider providing the following inputs: ` + `[${missingInputs}]. ${alternativeMsg}`);
        }
        return tensorsMap;
    }
    processStack(inputNodes, stack, context, tensorMap, added, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount, usedNodes) {
        const promises = [];
        while(stack.length > 0){
            const item = stack.pop();
            context.currentContext = item.contexts;
            let nodeName = '';
            // The tensor of the Enter op with isConstant set should be set
            // in the parent scope, so it will be available as constant for the
            // whole loop.
            if (item.node.op === 'Enter' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParamValue"])('isConstant', item.node, tensorMap, context)) {
                [nodeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeNameAndIndex"])(item.node.name, context);
            }
            // only process nodes that are not in the tensorMap yet, this include
            // inputNodes and internal initNodes.
            if (tensorMap[item.node.name] == null) {
                const tensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$operation_executor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executeOp"])(item.node, tensorMap, context, this._resourceManager);
                if (!nodeName) {
                    [nodeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeNameAndIndex"])(item.node.name, context);
                }
                const currentContext = context.currentContext;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isPromise(tensors)) {
                    promises.push(tensors.then((t)=>{
                        tensorMap[nodeName] = t;
                        if (this.keepIntermediateTensors) {
                            this.clonedTensorsMap[nodeName] = this.cloneTensorList(t);
                        }
                        context.currentContext = currentContext;
                        this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount);
                        this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                        return t;
                    }));
                } else {
                    tensorMap[nodeName] = tensors;
                    if (this.keepIntermediateTensors) {
                        this.clonedTensorsMap[nodeName] = this.cloneTensorList(tensors);
                    }
                    this.checkTensorForDisposal(nodeName, item.node, tensorMap, context, tensorsToKeep, outputNodeNameSet, intermediateTensorConsumerCount);
                    this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
                }
            } else {
                this.processChildNodes(item.node, stack, context, tensorMap, added, usedNodes);
            }
        }
        return promises;
    }
    processChildNodes(node, stack, context, tensorMap, added, usedNodes) {
        node.children.forEach((childNode)=>{
            const [nodeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeNameAndIndex"])(childNode.name, context);
            if (added[nodeName] || !usedNodes.has(childNode.name)) {
                return;
            }
            // Merge op can be pushed if any of its inputs has value.
            if (childNode.op === 'Merge') {
                if (childNode.inputNames.some((name)=>{
                    return !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensor"])(name, tensorMap, context);
                })) {
                    added[nodeName] = true;
                    stack.push({
                        contexts: context.currentContext,
                        node: childNode
                    });
                }
            } else if (childNode.inputNames.every((name)=>{
                return !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTensor"])(name, tensorMap, context);
            })) {
                added[nodeName] = true;
                stack.push({
                    contexts: context.currentContext,
                    node: childNode
                });
            }
        });
    }
    /**
     * Releases the memory used by the weight tensors.
     */ dispose() {
        Object.keys(this.weightMap).forEach((key)=>this.weightMap[key].forEach((tensor)=>tensor.dispose()));
    }
    checkInputShapeAndType(inputs) {
        Object.keys(inputs).forEach((name)=>{
            const input = inputs[name];
            const [nodeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name);
            const node = this.graph.nodes[nodeName];
            if (node.attrParams['shape'] && node.attrParams['shape'].value) {
                const shape = node.attrParams['shape'].value;
                const match = shape.length === input.shape.length && input.shape.every((dim, index)=>shape[index] === -1 || shape[index] === dim);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(match, ()=>`The shape of dict['${node.name}'] provided in ` + `model.execute(dict) must be [${shape}], but was ` + `[${input.shape}]`);
            }
            if (node.attrParams['dtype'] && node.attrParams['dtype'].value) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(input.dtype === node.attrParams['dtype'].value, ()=>`The dtype of dict['${node.name}'] provided in ` + `model.execute(dict) must be ` + `${node.attrParams['dtype'].value}, but was ${input.dtype}`);
            }
        });
    }
    mapInputs(inputs) {
        var _a, _b;
        const result = {};
        for(const inputName in inputs){
            const tensor = (_b = (_a = this._signature) === null || _a === void 0 ? void 0 : _a.inputs) === null || _b === void 0 ? void 0 : _b[inputName];
            if (tensor != null) {
                result[tensor.name] = inputs[inputName];
            } else {
                result[inputName] = inputs[inputName];
            }
        }
        return result;
    }
    checkInputs(inputs) {
        const notInGraph = Object.keys(inputs).filter((name)=>{
            const [nodeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name);
            return this.graph.nodes[nodeName] == null;
        });
        if (notInGraph.length > 0) {
            throw new Error(`The dict provided in model.execute(dict) has ` + `keys: [${notInGraph}] that are not part of graph`);
        }
    }
    mapOutputs(outputs) {
        return outputs.map((name)=>{
            var _a, _b;
            const tensor = (_b = (_a = this._signature) === null || _a === void 0 ? void 0 : _a.outputs) === null || _b === void 0 ? void 0 : _b[name];
            if (tensor != null) {
                return tensor.name;
            }
            return name;
        }, {});
    }
    checkOutputs(outputs) {
        outputs.forEach((name)=>{
            const [normalizedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$executors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNodeName"])(name);
            if (!this.graph.nodes[normalizedName]) {
                throw new Error(`The output '${name}' is not found in the graph`);
            }
        });
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhfZXhlY3V0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvbnZlcnRlci9zcmMvZXhlY3V0b3IvZ3JhcGhfZXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFXLEdBQUcsRUFBRSxJQUFJLEVBQTBCLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUk5RixPQUFPLEVBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSxhQUFhLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN4SSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFHM0QsT0FBTyxFQUFDLGdCQUFnQixFQUF1QixNQUFNLHFCQUFxQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRSxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQVN0SCxNQUFNLE9BQU8sYUFBYTtJQWdCeEIsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFB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QyxlQUFlLElBQUksNkJBQTZCLENBQUMsQ0FBQzthQUNuRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0RhdGFUeXBlLCBlbnYsIGtlZXAsIE5hbWVkVGVuc29yTWFwLCBUZW5zb3IsIHRpZHksIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7SVNpZ25hdHVyZURlZn0gZnJvbSAnLi4vZGF0YS9jb21waWxlZF9hcGknO1xuaW1wb3J0IHtOYW1lZFRlbnNvcnNNYXAsIFRlbnNvckFycmF5TWFwLCBUZW5zb3JJbmZvLCBUZW5zb3JMaXN0TWFwfSBmcm9tICcuLi9kYXRhL3R5cGVzJztcbmltcG9ydCB7Z2V0Tm9kZU5hbWVBbmRJbmRleCwgZ2V0UGFyYW1WYWx1ZSwgZ2V0VGVuc29yLCBnZXRUZW5zb3JzRm9yQ3VycmVudENvbnRleHQsIHBhcnNlTm9kZU5hbWV9IGZyb20gJy4uL29wZXJhdGlvbnMvZXhlY3V0b3JzL3V0aWxzJztcbmltcG9ydCB7ZXhlY3V0ZU9wfSBmcm9tICcuLi9vcGVyYXRpb25zL29wZXJhdGlvbl9leGVjdXRvcic7XG5pbXBvcnQge0dyYXBoLCBOb2RlfSBmcm9tICcuLi9vcGVyYXRpb25zL3R5cGVzJztcblxuaW1wb3J0IHtFeGVjdXRpb25Db250ZXh0LCBFeGVjdXRpb25Db250ZXh0SW5mb30gZnJvbSAnLi9leGVjdXRpb25fY29udGV4dCc7XG5pbXBvcnQge2dldEV4ZWN1dGlvblN1YmdyYXBoLCBnZXROb2RlTGl2ZVVudGlsTWFwLCBnZXROb2Rlc0luVG9wb2xvZ2ljYWxPcmRlciwgaXNDb250cm9sRmxvd30gZnJvbSAnLi9tb2RlbF9hbmFseXNpcyc7XG5pbXBvcnQge1Jlc291cmNlTWFuYWdlcn0gZnJvbSAnLi9yZXNvdXJjZV9tYW5hZ2VyJztcbmltcG9ydCB7RnVuY3Rpb25FeGVjdXRvcn0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBOb2RlV2l0aENvbnRleHRzIHtcbiAgY29udGV4dHM6IEV4ZWN1dGlvbkNvbnRleHRJbmZvW107XG4gIG5vZGU6IE5vZGU7XG59XG5cbmV4cG9ydCBjbGFzcyBHcmFwaEV4ZWN1dG9yIGltcGxlbWVudHMgRnVuY3Rpb25FeGVjdXRvciB7XG4gIHByaXZhdGUgY29tcGlsZWRNYXAgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5jb21waWxlPj4oKTtcbiAgcHJpdmF0ZSBwYXJzZU5vZGVOYW1lQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgW3N0cmluZywgbnVtYmVyLCBzdHJpbmc/XT4oKTtcbiAgcHJpdmF0ZSBfd2VpZ2h0TWFwOiBOYW1lZFRlbnNvcnNNYXAgPSB7fTtcbiAgcHJpdmF0ZSBfd2VpZ2h0SWRzOiBudW1iZXJbXTtcbiAgcHJpdmF0ZSBfc2lnbmF0dXJlOiBJU2lnbmF0dXJlRGVmO1xuICBwcml2YXRlIF9pbnB1dHM6IE5vZGVbXTtcbiAgcHJpdmF0ZSBfb3V0cHV0czogTm9kZVtdO1xuICBwcml2YXRlIF9pbml0Tm9kZXM6IE5vZGVbXTsgIC8vIEludGVybmFsIGluaXQgbm9kZXMgdG8gc3RhcnQgaW5pdGlhbGl6YXRpb24uXG4gIHByaXZhdGUgU0VQQVJBVE9SID0gJywnO1xuICBwcml2YXRlIF9mdW5jdGlvbnM6IHtba2V5OiBzdHJpbmddOiBHcmFwaH0gPSB7fTtcbiAgcHJpdmF0ZSBfZnVuY3Rpb25FeGVjdXRvck1hcDoge1trZXk6IHN0cmluZ106IEZ1bmN0aW9uRXhlY3V0b3J9ID0ge307XG4gIHByaXZhdGUgX3Jlc291cmNlTWFuYWdlcjogUmVzb3VyY2VNYW5hZ2VyO1xuICBwcml2YXRlIGNsb25lZFRlbnNvcnNNYXA6IE5hbWVkVGVuc29yc01hcDtcbiAgcHJpdmF0ZSBrZWVwSW50ZXJtZWRpYXRlVGVuc29ycyA9IGZhbHNlO1xuXG4gIGdldCB3ZWlnaHRJZHMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LndlaWdodElkcyA6IHRoaXMuX3dlaWdodElkcztcbiAgfVxuXG4gIGdldCBmdW5jdGlvbkV4ZWN1dG9yTWFwKCk6IHtba2V5OiBzdHJpbmddOiBGdW5jdGlvbkV4ZWN1dG9yfSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZnVuY3Rpb25FeGVjdXRvck1hcCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnVuY3Rpb25FeGVjdXRvck1hcDtcbiAgfVxuXG4gIGdldCB3ZWlnaHRNYXAoKTogTmFtZWRUZW5zb3JzTWFwIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC53ZWlnaHRNYXAgOiB0aGlzLl93ZWlnaHRNYXA7XG4gIH1cblxuICBzZXQgd2VpZ2h0TWFwKHdlaWdodE1hcDogTmFtZWRUZW5zb3JzTWFwKSB7XG4gICAgY29uc3Qgd2VpZ2h0SWRzID0gT2JqZWN0LmtleXMod2VpZ2h0TWFwKS5tYXAoXG4gICAgICAgIGtleSA9PiB3ZWlnaHRNYXBba2V5XS5tYXAodGVuc29yID0+IHRlbnNvci5pZCkpO1xuICAgIHRoaXMuX3dlaWdodElkcyA9IFtdLmNvbmNhdCguLi53ZWlnaHRJZHMpO1xuICAgIHRoaXMuX3dlaWdodE1hcCA9IHdlaWdodE1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYFJlc291cmNlTWFuYWdlcmAgc2hhcmVkIGJ5IGV4ZWN1dG9ycyBvZiBhIG1vZGVsLlxuICAgKiBAcGFyYW0gcmVzb3VyY2VNYW5hZ2VyOiBgUmVzb3VyY2VNYW5hZ2VyYCBvZiB0aGUgYEdyYXBoTW9kZWxgLlxuICAgKi9cbiAgc2V0IHJlc291cmNlTWFuYWdlcihyZXNvdXJjZU1hbmFnZXI6IFJlc291cmNlTWFuYWdlcikge1xuICAgIHRoaXMuX3Jlc291cmNlTWFuYWdlciA9IHJlc291cmNlTWFuYWdlcjtcbiAgfVxuXG4gIGdldCBpbnB1dHMoKTogVGVuc29ySW5mb1tdIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLm1hcChub2RlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgc2hhcGU6IG5vZGUuYXR0clBhcmFtc1snc2hhcGUnXSA/XG4gICAgICAgICAgICBub2RlLmF0dHJQYXJhbXNbJ3NoYXBlJ10udmFsdWUgYXMgbnVtYmVyW10gOlxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICBkdHlwZTogbm9kZS5hdHRyUGFyYW1zWydkdHlwZSddID9cbiAgICAgICAgICAgIG5vZGUuYXR0clBhcmFtc1snZHR5cGUnXS52YWx1ZSBhcyBEYXRhVHlwZSA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXQgb3V0cHV0cygpOiBUZW5zb3JJbmZvW10ge1xuICAgIHJldHVybiB0aGlzLl9vdXRwdXRzLm1hcChub2RlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgc2hhcGU6IG5vZGUuYXR0clBhcmFtc1snc2hhcGUnXSA/XG4gICAgICAgICAgICBub2RlLmF0dHJQYXJhbXNbJ3NoYXBlJ10udmFsdWUgYXMgbnVtYmVyW10gOlxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICBkdHlwZTogbm9kZS5hdHRyUGFyYW1zWydkdHlwZSddID9cbiAgICAgICAgICAgIG5vZGUuYXR0clBhcmFtc1snZHR5cGUnXS52YWx1ZSBhcyBEYXRhVHlwZSA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaW5wdXROb2RlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0cy5tYXAobm9kZSA9PiBub2RlLnNpZ25hdHVyZUtleSB8fCBub2RlLm5hbWUpO1xuICB9XG5cbiAgZ2V0IG91dHB1dE5vZGVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fb3V0cHV0cy5tYXAoKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBub2RlLnNpZ25hdHVyZUtleSB8fCBub2RlLm5hbWU7XG4gICAgICByZXR1cm4gbm9kZS5kZWZhdWx0T3V0cHV0ID8gKGAke25hbWV9OiR7bm9kZS5kZWZhdWx0T3V0cHV0fWApIDogbmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBmdW5jdGlvbnMoKToge1trZXk6IHN0cmluZ106IElTaWduYXR1cmVEZWZ9IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZnVuY3Rpb25zKS5yZWR1Y2UoKG1hcCwga2V5KSA9PiB7XG4gICAgICBtYXBba2V5XSA9IHRoaXMuX2Z1bmN0aW9uc1trZXldLnNpZ25hdHVyZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30gYXMge1trZXk6IHN0cmluZ106IElTaWduYXR1cmVEZWZ9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZ3JhcGggR3JhcGggdGhlIG1vZGVsIG9yIGZ1bmN0aW9uIGdyYXBoIHRvIGJlIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0gcGFyZW50IFdoZW4gYnVpbGRpbmcgZnVuY3Rpb24gZXhlY3RvciB5b3UgbmVlZCB0byBzZXQgdGhlIHBhcmVudFxuICAgKiBleGVjdXRvci4gU2luY2UgdGhlIHdlaWdodHMgYW5kIGZ1bmN0aW9uIGV4ZWN1dG9yIG1hcHMgYXJlIHNldCBhdCBwYXJhbnRcbiAgICogbGV2ZWwsIHRoYXQgZnVuY3Rpb24gZXhlY3V0b3IgY2FuIGFjY2VzcyB0aGUgZnVuY3Rpb24gbWFwcyBhbmQgd2VpZ2h0IG1hcHNcbiAgICogdGhyb3VnaCB0aGUgcGFyZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncmFwaDogR3JhcGgsIHByaXZhdGUgcGFyZW50PzogR3JhcGhFeGVjdXRvcikge1xuICAgIHRoaXMuX291dHB1dHMgPSBncmFwaC5vdXRwdXRzO1xuICAgIHRoaXMuX2lucHV0cyA9IGdyYXBoLmlucHV0cztcbiAgICB0aGlzLl9pbml0Tm9kZXMgPSBncmFwaC5pbml0Tm9kZXM7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gZ3JhcGguc2lnbmF0dXJlO1xuICAgIHRoaXMuX2Z1bmN0aW9ucyA9IGdyYXBoLmZ1bmN0aW9ucztcbiAgICAvLyBjcmVhdGUgc3ViLWdyYXBoIGV4ZWN1dG9yc1xuICAgIGlmIChncmFwaC5mdW5jdGlvbnMgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXMoZ3JhcGguZnVuY3Rpb25zKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICB0aGlzLl9mdW5jdGlvbkV4ZWN1dG9yTWFwW25hbWVdID1cbiAgICAgICAgICAgIG5ldyBHcmFwaEV4ZWN1dG9yKGdyYXBoLmZ1bmN0aW9uc1tuYW1lXSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBpbGF0aW9uS2V5KGlucHV0czogTm9kZVtdLCBvdXRwdXRzOiBOb2RlW10pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNvcnRlZElucHV0cyA9IGlucHV0cy5tYXAobm9kZSA9PiBub2RlLm5hbWUpLnNvcnQoKTtcbiAgICBjb25zdCBzb3J0ZWRPdXRwdXRzID0gb3V0cHV0cy5tYXAobm9kZSA9PiBub2RlLm5hbWUpLnNvcnQoKTtcbiAgICByZXR1cm4gc29ydGVkSW5wdXRzLmpvaW4odGhpcy5TRVBBUkFUT1IpICsgJy0tJyArXG4gICAgICAgIHNvcnRlZE91dHB1dHMuam9pbih0aGlzLlNFUEFSQVRPUik7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGlsZXMgdGhlIGluZmVyZW5jZSBncmFwaCBhbmQgcmV0dXJucyB0aGUgbWluaW1hbCBzZXQgb2Ygbm9kZXMgdGhhdCBhcmVcbiAgICogcmVxdWlyZWQgZm9yIGV4ZWN1dGlvbiwgaW4gdGhlIGNvcnJlY3QgZXhlY3V0aW9uIG9yZGVyLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb21waWxhdGlvbiBUaGUgY29tcGlsZSByZXN1bHQuXG4gICAqIEByZXR1cm5zIHtOb2RlW119IGNvbXBpbGF0aW9uLm9yZGVyZWROb2RlcyBOb2RlcyBpbiB0aGUgY29ycmVjdCBleGVjdXRpb25cbiAgICogICAgIG9yZGVyLlxuICAgKiBAcmV0dXJucyB7TWFwPHN0cmluZywgTm9kZVtdPn0gY29tcGlsYXRpb24ubm9kZUxpdmVVbnRpbE1hcCBBIG1hcCBmcm9tIG5vZGVcbiAgICogICAgIHRvIGRpc3Bvc2FibGUgbm9kZXMgYWZ0ZXIgaXRzIGV4ZWN1dGlvbi4gVGhhdCBpcywgZm9yIGEgbm9kZSBgeGAsXG4gICAqICAgICBgbm9kZUxpdmVVbnRpbE1hcFt4XWAgaW5kaWNhdGVzIGFsbCBub2RlcyB3aG9zZSBpbnRlcm1lZGlhdGVcbiAgICogICAgIHRlbnNvcnMgc2hvdWxkIGJlIGRpc3Bvc2VkIGFmdGVyIGB4YCBpcyBleGVjdXRlZC5cbiAgICovXG4gIHByaXZhdGUgY29tcGlsZShpbnB1dHM6IE5hbWVkVGVuc29yTWFwLCBvdXRwdXRzOiBOb2RlW10pOlxuICAgICAge29yZGVyZWROb2RlczogTm9kZVtdLCBub2RlTGl2ZVVudGlsTWFwOiBNYXA8c3RyaW5nLCBOb2RlW10+fSB7XG4gICAgY29uc3QgZXhlY3V0aW9uSW5mbyA9XG4gICAgICAgIGdldEV4ZWN1dGlvblN1YmdyYXBoKGlucHV0cywgb3V0cHV0cywgdGhpcy53ZWlnaHRNYXAsIHRoaXMuX2luaXROb2Rlcyk7XG4gICAgY29uc3Qge21pc3NpbmdJbnB1dHMsIGR5bmFtaWNOb2RlLCBzeW5jSW5wdXRzfSA9IGV4ZWN1dGlvbkluZm87XG4gICAgaWYgKGR5bmFtaWNOb2RlICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGhpcyBleGVjdXRpb24gY29udGFpbnMgdGhlIG5vZGUgJyR7ZHluYW1pY05vZGUubmFtZX0nLCB3aGljaCBoYXMgYCArXG4gICAgICAgICAgYHRoZSBkeW5hbWljIG9wICcke2R5bmFtaWNOb2RlLm9wfScuIFBsZWFzZSB1c2UgYCArXG4gICAgICAgICAgYG1vZGVsLmV4ZWN1dGVBc3luYygpIGluc3RlYWQuIEFsdGVybmF0aXZlbHksIHRvIGF2b2lkIHRoZSBgICtcbiAgICAgICAgICBgZHluYW1pYyBvcHMsIHNwZWNpZnkgdGhlIGlucHV0cyBbJHtzeW5jSW5wdXRzfV1gKTtcbiAgICB9XG5cbiAgICBpZiAobWlzc2luZ0lucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvdXROYW1lcyA9IG91dHB1dHMubWFwKG4gPT4gbi5uYW1lKTtcbiAgICAgIGNvbnN0IGluTmFtZXMgPSBPYmplY3Qua2V5cyhpbnB1dHMpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgY29tcHV0ZSB0aGUgb3V0cHV0cyBbJHtvdXROYW1lc31dIGZyb20gdGhlIHByb3ZpZGVkIGlucHV0cyBgICtcbiAgICAgICAgICBgWyR7aW5OYW1lc31dLiBNaXNzaW5nIHRoZSBmb2xsb3dpbmcgaW5wdXRzOiBbJHttaXNzaW5nSW5wdXRzfV1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcmVkTm9kZXMgPSBnZXROb2Rlc0luVG9wb2xvZ2ljYWxPcmRlcih0aGlzLmdyYXBoLCBleGVjdXRpb25JbmZvKTtcbiAgICBjb25zdCBub2RlTGl2ZVVudGlsTWFwID0gZ2V0Tm9kZUxpdmVVbnRpbE1hcChvcmRlcmVkTm9kZXMpO1xuICAgIHJldHVybiB7b3JkZXJlZE5vZGVzLCBub2RlTGl2ZVVudGlsTWFwfTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvbmVBbmRLZWVwVGVuc29yKHRlbnNvcjogVGVuc29yKSB7XG4gICAgaWYgKHRlbnNvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY2xvbmUgPSB0ZW5zb3IuY2xvbmUoKTtcbiAgICAvLyBLZWVwIHRoZSBjbG9uZSBiZWNhdXNlYG1vZGVsLmV4ZWN1dGUoKWAgbWF5IGJlIGNhbGxlZCB3aXRoaW5cbiAgICAvLyBhIGB0aWR5KClgLCBidXQgdGhlIHVzZXIgbWF5IGluc3BlY3QgdGhlc2UgdGVuc29ycyBhZnRlciB0aGVcbiAgICAvLyB0aWR5LlxuICAgIGtlZXAoY2xvbmUpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvbmVUZW5zb3JMaXN0KHRlbnNvcnM6IFRlbnNvcltdKSB7XG4gICAgaWYgKCF0ZW5zb3JzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY2xvbmVkVGVuc29yID0gdGVuc29ycy5tYXAodGVuc29yID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNsb25lQW5kS2VlcFRlbnNvcih0ZW5zb3IpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZWRUZW5zb3I7XG4gIH1cblxuICBwcml2YXRlIGNsb25lVGVuc29yTWFwKHRlbnNvcnNNYXA6IE5hbWVkVGVuc29yc01hcCk6IE5hbWVkVGVuc29yc01hcCB7XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGVuc29yc01hcCkubWFwKChbbmFtZSwgdGVuc29yc0xpc3RdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtuYW1lLCB0aGlzLmNsb25lVGVuc29yTGlzdCh0ZW5zb3JzTGlzdCldO1xuICAgICAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgdGhlIGluZmVyZW5jZSBmb3IgZ2l2ZW4gaW5wdXQgdGVuc29ycy5cbiAgICogQHBhcmFtIGlucHV0cyBUZW5zb3IgbWFwIGZvciB0aGUgbW9kZWwgaW5wdXRzLCBrZXllZCBieSB0aGUgaW5wdXQgbm9kZVxuICAgKiBuYW1lcy5cbiAgICogQHBhcmFtIG91dHB1dHMgT3B0aW9uYWwuIG91dHB1dCBub2RlIG5hbWUgZnJvbSB0aGUgVGVuc29yZmxvdyBtb2RlbCwgaWZcbiAgICogbm8gb3V0cHV0cyBhcmUgc3BlY2lmaWVkLCB0aGUgZGVmYXVsdCBvdXRwdXRzIG9mIHRoZSBtb2RlbCB3b3VsZCBiZSB1c2VkLlxuICAgKiBZb3UgY2FuIGluc3BlY3QgaW50ZXJtZWRpYXRlIG5vZGVzIG9mIHRoZSBtb2RlbCBieSBhZGRpbmcgdGhlbSB0byB0aGVcbiAgICogb3V0cHV0cyBhcnJheS5cbiAgICovXG4gIGV4ZWN1dGUoaW5wdXRzOiBOYW1lZFRlbnNvck1hcCwgb3V0cHV0cz86IHN0cmluZ1tdKTogVGVuc29yW10ge1xuICAgIC8vIERpc3Bvc2UgYW55IHRlbnNvcnMgZnJvbSBhIHByaW9yIHJ1biB0byBhdm9pZCBsZWFraW5nIHRoZW0uXG4gICAgdGhpcy5kaXNwb3NlSW50ZXJtZWRpYXRlVGVuc29ycygpO1xuICAgIGlucHV0cyA9IHRoaXMubWFwSW5wdXRzKGlucHV0cyk7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhpbnB1dHMpLnNvcnQoKTtcbiAgICB0aGlzLmNoZWNrSW5wdXRzKGlucHV0cyk7XG4gICAgdGhpcy5jaGVja0lucHV0U2hhcGVBbmRUeXBlKGlucHV0cyk7XG4gICAgb3V0cHV0cyA9IHRoaXMubWFwT3V0cHV0cyhvdXRwdXRzKTtcbiAgICB0aGlzLmNoZWNrT3V0cHV0cyhvdXRwdXRzKTtcbiAgICBjb25zdCBpbnB1dE5vZGVzID1cbiAgICAgICAgbmFtZXMubWFwKG5hbWUgPT4gdGhpcy5ncmFwaC5ub2Rlc1twYXJzZU5vZGVOYW1lKG5hbWUpWzBdXSk7XG4gICAgY29uc3Qgb3V0cHV0Tm9kZU5hbWVzID0gb3V0cHV0cy5tYXAobmFtZSA9PiBwYXJzZU5vZGVOYW1lKG5hbWUpWzBdKTtcbiAgICBjb25zdCBvdXRwdXROb2RlTmFtZVNldCA9IG5ldyBTZXQob3V0cHV0Tm9kZU5hbWVzKTtcbiAgICBsZXQgb3V0cHV0Tm9kZXMgPSBvdXRwdXROb2RlTmFtZXMubWFwKG5hbWUgPT4gdGhpcy5ncmFwaC5ub2Rlc1tuYW1lXSk7XG4gICAgLy8gSWYgbm8gb3V0cHV0cyBhcmUgc3BlY2lmaWVkLCB0aGVuIHVzZSB0aGUgZGVmYXVsdCBvdXRwdXRzIG9mIHRoZSBtb2RlbC5cbiAgICBpZiAob3V0cHV0Tm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBvdXRwdXROb2RlcyA9IHRoaXMuX291dHB1dHM7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsYXRpb25LZXkgPSB0aGlzLmdldENvbXBpbGF0aW9uS2V5KGlucHV0Tm9kZXMsIG91dHB1dE5vZGVzKTtcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIGNvbXBpbGVkIGdyYXBoIGNhY2hlIGNvbnRhaW5zIHRoZSBpbnB1dC5cbiAgICBsZXQgY29tcGlsYXRpb24gPSB0aGlzLmNvbXBpbGVkTWFwLmdldChjb21waWxhdGlvbktleSk7XG4gICAgaWYgKGNvbXBpbGF0aW9uID09IG51bGwpIHtcbiAgICAgIGNvbXBpbGF0aW9uID0gdGhpcy5jb21waWxlKGlucHV0cywgb3V0cHV0Tm9kZXMpO1xuICAgICAgdGhpcy5jb21waWxlZE1hcC5zZXQoY29tcGlsYXRpb25LZXksIGNvbXBpbGF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBLZWVwIHRlbnNvcnMgaWYgS0VFUF9JTlRFUk1FRElBVEVfVEVOU09SUyBpcyBvbi5cbiAgICB0cnkge1xuICAgICAgdGhpcy5rZWVwSW50ZXJtZWRpYXRlVGVuc29ycyA9IGVudigpLmdldEJvb2woJ0tFRVBfSU5URVJNRURJQVRFX1RFTlNPUlMnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmtlZXBJbnRlcm1lZGlhdGVUZW5zb3JzID0gZmFsc2U7XG4gICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdGVuc29yQXJyYXlNYXA6IFRlbnNvckFycmF5TWFwID0ge307XG4gICAgY29uc3QgdGVuc29yTGlzdE1hcDogVGVuc29yTGlzdE1hcCA9IHt9O1xuXG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBFeGVjdXRpb25Db250ZXh0KFxuICAgICAgICAgIHRoaXMud2VpZ2h0TWFwLCB0ZW5zb3JBcnJheU1hcCwgdGVuc29yTGlzdE1hcCxcbiAgICAgICAgICB0aGlzLmZ1bmN0aW9uRXhlY3V0b3JNYXAsIHRoaXMucGFyc2VOb2RlTmFtZUNhY2hlKTtcbiAgICAgIGNvbnN0IHRlbnNvcnNNYXA6IE5hbWVkVGVuc29yc01hcCA9IHsuLi50aGlzLndlaWdodE1hcH07XG4gICAgICBpZiAodGhpcy5rZWVwSW50ZXJtZWRpYXRlVGVuc29ycykge1xuICAgICAgICB0aGlzLmNsb25lZFRlbnNvcnNNYXAgPSB0aGlzLmNsb25lVGVuc29yTWFwKHRoaXMud2VpZ2h0TWFwKTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMoaW5wdXRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBjb25zdCBbbm9kZU5hbWUsIGluZGV4XSA9IHBhcnNlTm9kZU5hbWUobmFtZSwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHRlbnNvcnM6IFRlbnNvcltdID0gW107XG4gICAgICAgIHRlbnNvcnNbaW5kZXhdID0gaW5wdXRzW25hbWVdO1xuICAgICAgICB0ZW5zb3JzTWFwW25vZGVOYW1lXSA9IHRlbnNvcnM7XG4gICAgICAgIGlmICh0aGlzLmtlZXBJbnRlcm1lZGlhdGVUZW5zb3JzKSB7XG4gICAgICAgICAgdGhpcy5jbG9uZWRUZW5zb3JzTWFwW25vZGVOYW1lXSA9IHRoaXMuY2xvbmVUZW5zb3JMaXN0KHRlbnNvcnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdGVuc29yc1RvS2VlcCA9IHRoaXMuZ2V0RnJvemVuVGVuc29ySWRzKHRlbnNvcnNNYXApO1xuICAgICAgY29uc3Qge29yZGVyZWROb2Rlcywgbm9kZUxpdmVVbnRpbE1hcH0gPSBjb21waWxhdGlvbjtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBvcmRlcmVkTm9kZXMpIHtcbiAgICAgICAgaWYgKHRlbnNvcnNNYXBbbm9kZS5uYW1lXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRlbnNvcnMgPVxuICAgICAgICAgICAgZXhlY3V0ZU9wKG5vZGUsIHRlbnNvcnNNYXAsIGNvbnRleHQsIHRoaXMuX3Jlc291cmNlTWFuYWdlcikgYXNcbiAgICAgICAgICAgIFRlbnNvcltdO1xuICAgICAgICBpZiAodXRpbC5pc1Byb21pc2UodGVuc29ycykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZXhlY3V0aW9uIG9mIHRoZSBvcCAnJHtub2RlLm9wfScgcmV0dXJuZWQgYSBwcm9taXNlLiBgICtcbiAgICAgICAgICAgICAgYFBsZWFzZSB1c2UgbW9kZWwuZXhlY3V0ZUFzeW5jKCkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW5zb3JzTWFwW25vZGUubmFtZV0gPSB0ZW5zb3JzO1xuICAgICAgICBpZiAodGhpcy5rZWVwSW50ZXJtZWRpYXRlVGVuc29ycykge1xuICAgICAgICAgIHRoaXMuY2xvbmVkVGVuc29yc01hcFtub2RlLm5hbWVdID0gdGhpcy5jbG9uZVRlbnNvckxpc3QodGVuc29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1RlbnNvckZvckRpc3Bvc2FsV2l0aE5vZGVMaXZlVW50aWxJbmZvKFxuICAgICAgICAgICAgbm9kZSwgdGVuc29yc01hcCwgY29udGV4dCwgdGVuc29yc1RvS2VlcCwgb3V0cHV0Tm9kZU5hbWVTZXQsXG4gICAgICAgICAgICBub2RlTGl2ZVVudGlsTWFwLmdldChub2RlLm5hbWUpKTtcbiAgICAgIH1cblxuICAgICAgLy8gZGlzcG9zZSB0aGUgY29udGV4dCBmb3IgdGhlIHJvb3QgZXhlY3V0b3JcbiAgICAgIGlmICh0aGlzLnBhcmVudCA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRleHQuZGlzcG9zZSh0ZW5zb3JzVG9LZWVwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dHMubWFwKG5hbWUgPT4gZ2V0VGVuc29yKG5hbWUsIHRlbnNvcnNNYXAsIGNvbnRleHQpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RnJvemVuVGVuc29ySWRzKHRlbnNvck1hcDogTmFtZWRUZW5zb3JzTWFwKTogU2V0PG51bWJlcj4ge1xuICAgIGNvbnN0IGlkcyA9IFtdLmNvbmNhdC5hcHBseShcbiAgICAgICAgW10sXG4gICAgICAgIE9iamVjdC5rZXlzKHRlbnNvck1hcClcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHRlbnNvck1hcFtrZXldKVxuICAgICAgICAgICAgLm1hcCh0ZW5zb3JzID0+IHRlbnNvcnMubWFwKHRlbnNvciA9PiB0ZW5zb3IuaWQpKSk7XG4gICAgcmV0dXJuIG5ldyBTZXQoaWRzKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tUZW5zb3JGb3JEaXNwb3NhbChcbiAgICAgIG5vZGVOYW1lOiBzdHJpbmcsIG5vZGU6IE5vZGUsIHRlbnNvck1hcDogTmFtZWRUZW5zb3JzTWFwLFxuICAgICAgY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgdGVuc29yc1RvS2VlcDogU2V0PG51bWJlcj4sXG4gICAgICBvdXRwdXROb2RlTmFtZVNldDogU2V0PHN0cmluZz4sXG4gICAgICBpbnRlcm1lZGlhdGVUZW5zb3JDb25zdW1lckNvdW50OiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSkge1xuICAgIC8vIFNraXAgb3V0cHV0IG5vZGVzIGFuZCBhbnkgY29udHJvbCBmbG93IG5vZGVzLCBzaW5jZSBpdHMgZGVwZW5kZW5jeSBpc1xuICAgIC8vIHRyaWNreSB0byB0cmFjayBjb3JyZWN0bHkuXG4gICAgaWYgKGlzQ29udHJvbEZsb3cobm9kZSkgfHwgb3V0cHV0Tm9kZU5hbWVTZXQuaGFzKG5vZGVOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdGVuc29yIG9mIHRlbnNvck1hcFtub2RlTmFtZV0pIHtcbiAgICAgIGlmICh0ZW5zb3IgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnRbdGVuc29yLmlkXSA9XG4gICAgICAgICAgKGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnRbdGVuc29yLmlkXSB8fCAwKSArXG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiBub2RlLmlucHV0cykge1xuICAgICAgLy8gU2tpcCBhbnkgY29udHJvbCBmbG93IG5vZGVzLCBzaW5jZSBpdHMgZGVwZW5kZW5jeSBpcyB0cmlja3kgdG8gdHJhY2tcbiAgICAgIC8vIGNvcnJlY3RseS5cbiAgICAgIGlmIChpc0NvbnRyb2xGbG93KGlucHV0KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGVuc29ycyA9XG4gICAgICAgICAgZ2V0VGVuc29yc0ZvckN1cnJlbnRDb250ZXh0KGlucHV0Lm5hbWUsIHRlbnNvck1hcCwgY29udGV4dCk7XG4gICAgICBpZiAodGVuc29ycyA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHRlbnNvciBvZiB0ZW5zb3JzKSB7XG4gICAgICAgIGlmICghdGVuc29yIHx8IHRlbnNvci5rZXB0IHx8IHRlbnNvcnNUb0tlZXAuaGFzKHRlbnNvci5pZCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgaW50ZXJtZWRpYXRlIG5vZGVzJyB0ZW5zb3JzIGhhdmUgY291bnRzIHNldCwgbm90IG1hcmtlZCBhc1xuICAgICAgICAvLyBrZXB0LCBhbmQgbm90IGluIGB0ZW5zb3JzVG9LZWVwYC5cbiAgICAgICAgLy8gSW5wdXQgYW5kIHdlaWdodCBub2RlcycgdGVuc29ycyBzaG91bGQgZXhpc3QgaW4gYHRlbnNvcnNUb0tlZXBgLlxuICAgICAgICAvLyBPdXRwdXQgYW5kIGNvbnRyb2wgZmxvdyBub2RlcycgdGVuc29ycyBzaG91bGQgbmV2ZXIgaGF2ZSBjb3VudCBzZXQuXG4gICAgICAgIGNvbnN0IGNvdW50ID0gaW50ZXJtZWRpYXRlVGVuc29yQ29uc3VtZXJDb3VudFt0ZW5zb3IuaWRdO1xuICAgICAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgICAgICB0ZW5zb3IuZGlzcG9zZSgpO1xuICAgICAgICAgIGRlbGV0ZSBpbnRlcm1lZGlhdGVUZW5zb3JDb25zdW1lckNvdW50W3RlbnNvci5pZF07XG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgIT0gbnVsbCkge1xuICAgICAgICAgIGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnRbdGVuc29yLmlkXS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1RlbnNvckZvckRpc3Bvc2FsV2l0aE5vZGVMaXZlVW50aWxJbmZvKFxuICAgICAgbm9kZTogTm9kZSwgdGVuc29yTWFwOiBOYW1lZFRlbnNvcnNNYXAsIGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsXG4gICAgICB0ZW5zb3JzVG9LZWVwOiBTZXQ8bnVtYmVyPiwgb3V0cHV0Tm9kZU5hbWVTZXQ6IFNldDxzdHJpbmc+LFxuICAgICAgbGl2ZVVudGlsTm9kZXM/OiBOb2RlW10pIHtcbiAgICBmdW5jdGlvbiBpc05vbkRpc3Bvc2FibGVOb2RlKG5vZGU6IE5vZGUpIHtcbiAgICAgIC8vIFNraXAgb3V0cHV0IG5vZGVzIGFuZCBhbnkgY29udHJvbCBmbG93IG5vZGVzLCBzaW5jZSBpdHMgZGVwZW5kZW5jeSBpc1xuICAgICAgLy8gdHJpY2t5IHRvIHRyYWNrIGNvcnJlY3RseS5cbiAgICAgIHJldHVybiBpc0NvbnRyb2xGbG93KG5vZGUpIHx8IG91dHB1dE5vZGVOYW1lU2V0Lmhhcyhub2RlLm5hbWUpO1xuICAgIH1cblxuICAgIGlmIChpc0NvbnRyb2xGbG93KG5vZGUpIHx8IGxpdmVVbnRpbE5vZGVzID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5vZGVUb0Rpc3Bvc2Ugb2YgbGl2ZVVudGlsTm9kZXMpIHtcbiAgICAgIGlmIChpc05vbkRpc3Bvc2FibGVOb2RlKG5vZGVUb0Rpc3Bvc2UpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVuc29ycyA9IGdldFRlbnNvcnNGb3JDdXJyZW50Q29udGV4dChcbiAgICAgICAgICBub2RlVG9EaXNwb3NlLm5hbWUsIHRlbnNvck1hcCwgY29udGV4dCk7XG4gICAgICBmb3IgKGNvbnN0IHRlbnNvciBvZiB0ZW5zb3JzKSB7XG4gICAgICAgIGlmICghdGVuc29yIHx8IHRlbnNvci5rZXB0IHx8IHRlbnNvcnNUb0tlZXAuaGFzKHRlbnNvci5pZCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0ZW5zb3IuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyB0aGUgaW5mZXJlbmNlIGZvciBnaXZlbiBpbnB1dCB0ZW5zb3JzIGluIEFzeW5jIGZhc2hpb24uXG4gICAqIEBwYXJhbSBpbnB1dHMgVGVuc29yIG1hcCBmb3IgdGhlIG1vZGVsIGlucHV0cywga2V5ZWQgYnkgdGhlIGlucHV0IG5vZGVcbiAgICogbmFtZXMuXG4gICAqIEBwYXJhbSBvdXRwdXRzIG91dHB1dCBub2RlIG5hbWUgZnJvbSB0aGUgVGVuc29yZmxvdyBtb2RlbCwgaWYgbm8gb3V0cHV0c1xuICAgKiBhcmUgc3BlY2lmaWVkLCB0aGUgZGVmYXVsdCBvdXRwdXRzIG9mIHRoZSBtb2RlbCB3b3VsZCBiZSB1c2VkLiBZb3UgY2FuXG4gICAqIGluc3BlY3QgaW50ZXJtZWRpYXRlIG5vZGVzIG9mIHRoZSBtb2RlbCBieSBhZGRpbmcgdGhlbSB0byB0aGUgb3V0cHV0c1xuICAgKiBhcnJheS5cbiAgICovXG4gIGFzeW5jIGV4ZWN1dGVBc3luYyhpbnB1dHM6IE5hbWVkVGVuc29yTWFwLCBvdXRwdXRzPzogc3RyaW5nW10pOlxuICAgICAgUHJvbWlzZTxUZW5zb3JbXT4ge1xuICAgIHJldHVybiB0aGlzLl9leGVjdXRlQXN5bmMoaW5wdXRzLCBvdXRwdXRzKTtcbiAgfVxuXG4gIGRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JzKCkge1xuICAgIGlmICghdGhpcy5jbG9uZWRUZW5zb3JzTWFwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC52YWx1ZXModGhpcy5jbG9uZWRUZW5zb3JzTWFwKS5mb3JFYWNoKHRlbnNvcnNMaXN0ID0+IHtcbiAgICAgIGZvciAoY29uc3QgdGVuc29yIG9mIHRlbnNvcnNMaXN0KSB7XG4gICAgICAgIGlmICh0ZW5zb3IgJiYgIXRlbnNvci5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgdGVuc29yLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jbG9uZWRUZW5zb3JzTWFwID0gbnVsbDtcbiAgfVxuXG4gIGdldEludGVybWVkaWF0ZVRlbnNvcnMoKTogTmFtZWRUZW5zb3JzTWFwIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZWRUZW5zb3JzTWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBpbmZlcmVuY2UgZm9yIGdpdmVuIGlucHV0IHRlbnNvcnMgaW4gQXN5bmMgZmFzaGlvbi5cbiAgICogQHBhcmFtIGlucHV0cyBUZW5zb3IgbWFwIGZvciB0aGUgbW9kZWwgaW5wdXRzLCBrZXllZCBieSB0aGUgaW5wdXQgbm9kZVxuICAgKiBuYW1lcy5cbiAgICogQHBhcmFtIG91dHB1dHMgT3B0aW9uYWwuIG91dHB1dCBub2RlIG5hbWUgZnJvbSB0aGUgVGVuc29yZmxvdyBtb2RlbCxcbiAgICogaWYgbm8gb3V0cHV0cyBhcmUgc3BlY2lmaWVkLCB0aGUgZGVmYXVsdCBvdXRwdXRzIG9mIHRoZSBtb2RlbCB3b3VsZCBiZVxuICAgKiB1c2VkLiBZb3UgY2FuIGluc3BlY3QgaW50ZXJtZWRpYXRlIG5vZGVzIG9mIHRoZSBtb2RlbCBieSBhZGRpbmcgdGhlbSB0b1xuICAgKiB0aGUgb3V0cHV0cyBhcnJheS5cbiAgICogQHBhcmFtIGlzRnVuY3Rpb25FeGVjdXRpb24gT3B0aW9uYWwuIEZsYWcgZm9yIGV4ZWN1dGluZyBhIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gdGVuc29yQXJyYXlNYXAgT3B0aW9uYWwsIGdsb2JhbCBUZW5zb3JBcnJheSBtYXAgYnkgaWQuIFVzZWQgZm9yXG4gICAqIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIHRlbnNvckFycmF5TWFwIE9wdGlvbmFsIGdsb2JhbCBUZW5zb3JMaXN0IG1hcCBieSBpZC4gVXNlZCBmb3JcbiAgICogZnVuY3Rpb24gZXhlY3V0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZXhlY3V0ZUFzeW5jKFxuICAgICAgaW5wdXRzOiBOYW1lZFRlbnNvck1hcCwgb3V0cHV0cz86IHN0cmluZ1tdLCBpc0Z1bmN0aW9uRXhlY3V0aW9uID0gZmFsc2UsXG4gICAgICB0ZW5zb3JBcnJheU1hcDogVGVuc29yQXJyYXlNYXAgPSB7fSxcbiAgICAgIHRlbnNvckxpc3RNYXA6IFRlbnNvckxpc3RNYXAgPSB7fSk6IFByb21pc2U8VGVuc29yW10+IHtcbiAgICAvLyBEaXNwb3NlIGFueSB0ZW5zb3JzIGZyb20gYSBwcmlvciBydW4gdG8gYXZvaWQgbGVha2luZyB0aGVtLlxuICAgIHRoaXMuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvcnMoKTtcbiAgICBpZiAoIWlzRnVuY3Rpb25FeGVjdXRpb24pIHtcbiAgICAgIGlucHV0cyA9IHRoaXMubWFwSW5wdXRzKGlucHV0cyk7XG4gICAgICB0aGlzLmNoZWNrSW5wdXRzKGlucHV0cyk7XG4gICAgICB0aGlzLmNoZWNrSW5wdXRTaGFwZUFuZFR5cGUoaW5wdXRzKTtcbiAgICAgIG91dHB1dHMgPSB0aGlzLm1hcE91dHB1dHMob3V0cHV0cyk7XG4gICAgICB0aGlzLmNoZWNrT3V0cHV0cyhvdXRwdXRzKTtcbiAgICB9XG5cbiAgICAvLyBLZWVwIHRlbnNvcnMgaWYgS0VFUF9JTlRFUk1FRElBVEVfVEVOU09SUyBpcyBvbi5cbiAgICB0cnkge1xuICAgICAgdGhpcy5rZWVwSW50ZXJtZWRpYXRlVGVuc29ycyA9IGVudigpLmdldEJvb2woJ0tFRVBfSU5URVJNRURJQVRFX1RFTlNPUlMnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmtlZXBJbnRlcm1lZGlhdGVUZW5zb3JzID0gZmFsc2U7XG4gICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IEV4ZWN1dGlvbkNvbnRleHQoXG4gICAgICAgIHRoaXMud2VpZ2h0TWFwLCB0ZW5zb3JBcnJheU1hcCwgdGVuc29yTGlzdE1hcCwgdGhpcy5mdW5jdGlvbkV4ZWN1dG9yTWFwLFxuICAgICAgICB0aGlzLnBhcnNlTm9kZU5hbWVDYWNoZSk7XG5cbiAgICBpZiAodGhpcy5rZWVwSW50ZXJtZWRpYXRlVGVuc29ycykge1xuICAgICAgdGhpcy5jbG9uZWRUZW5zb3JzTWFwID0gdGhpcy5jbG9uZVRlbnNvck1hcCh0aGlzLndlaWdodE1hcCk7XG4gICAgfVxuXG4gICAgLy8gR3JhcGggd2l0aCBjb250cm9sIGZsb3cgb3AgcmVxdWlyZXMgcnVudGltZSBldmFsdWF0aW9uIG9mIHRoZSBleGVjdXRpb25cbiAgICAvLyBvcmRlciwgd2hpbGUgd2l0aG91dCBjb250cm9sIGZsb3cgdGhlIGV4ZWN1dGlvbiBvcmRlciBpcyBwcmUtZGV0ZXJtaW5lZFxuICAgIC8vIGluIHRoZSBjb21waWxlIG1ldGhvZC5cbiAgICBjb25zdCB0ZW5zb3JzTWFwID0gYXdhaXQgdGhpcy5leGVjdXRlV2l0aENvbnRyb2xGbG93KFxuICAgICAgICBpbnB1dHMsIGNvbnRleHQsIG91dHB1dHMsIGlzRnVuY3Rpb25FeGVjdXRpb24pO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBvdXRwdXRzLm1hcChuYW1lID0+IGdldFRlbnNvcihuYW1lLCB0ZW5zb3JzTWFwLCBjb250ZXh0KSk7XG5cbiAgICAvLyBkaXNwb3NlIGFsbCB0aGUgaW50ZXJtZWRpYXRlIHRlbnNvcnNcbiAgICBjb25zdCBvdXRwdXRJZHMgPSByZXN1bHRzLm1hcCh0ID0+IHQuaWQpO1xuICAgIGNvbnN0IGlucHV0SWRzID0gT2JqZWN0LmtleXMoaW5wdXRzKS5tYXAobmFtZSA9PiBpbnB1dHNbbmFtZV0uaWQpO1xuICAgIGNvbnN0IGtlZXBJZHMgPVxuICAgICAgICBuZXcgU2V0PG51bWJlcj4oWy4uLm91dHB1dElkcywgLi4uaW5wdXRJZHMsIC4uLnRoaXMud2VpZ2h0SWRzXSk7XG5cbiAgICBPYmplY3QudmFsdWVzKHRlbnNvcnNNYXApLmZvckVhY2godGVuc29yc0xpc3QgPT4ge1xuICAgICAgdGVuc29yc0xpc3QuZm9yRWFjaCh0ZW5zb3IgPT4ge1xuICAgICAgICBpZiAodGVuc29yICYmICF0ZW5zb3IuaXNEaXNwb3NlZCAmJiAha2VlcElkcy5oYXModGVuc29yLmlkKSkge1xuICAgICAgICAgIHRlbnNvci5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzcG9zZSB0aGUgY29udGV4dCBmb3IgdGhlIHJvb3QgZXhlY3V0b3JcbiAgICBpZiAodGhpcy5wYXJlbnQgPT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kaXNwb3NlKGtlZXBJZHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgYXN5bmMgZXhlY3V0ZUZ1bmN0aW9uQXN5bmMoXG4gICAgICBpbnB1dHM6IFRlbnNvcltdLCB0ZW5zb3JBcnJheU1hcDogVGVuc29yQXJyYXlNYXAsXG4gICAgICB0ZW5zb3JMaXN0TWFwOiBUZW5zb3JMaXN0TWFwKTogUHJvbWlzZTxUZW5zb3JbXT4ge1xuICAgIGNvbnN0IG1hcHBlZElucHV0cyA9IGlucHV0cy5yZWR1Y2UoKG1hcCwgdGVuc29yLCBpbmRleCkgPT4ge1xuICAgICAgbWFwW3RoaXMuaW5wdXRzW2luZGV4XS5uYW1lXSA9IHRlbnNvcjtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30gYXMgTmFtZWRUZW5zb3JNYXApO1xuXG4gICAgcmV0dXJuIHRoaXMuX2V4ZWN1dGVBc3luYyhcbiAgICAgICAgbWFwcGVkSW5wdXRzLCB0aGlzLm91dHB1dE5vZGVzLCB0cnVlLCB0ZW5zb3JBcnJheU1hcCwgdGVuc29yTGlzdE1hcCk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGVyZSBhcmUgY29udHJvbCBmbG93IG5vZGVzIGluIHRoZSBncmFwaCwgdGhlIGdyYXBoIGV4ZWN1dGlvbiB1c2VcbiAgICogRXhlY3V0aW9uQ29udGV4dCB0byBrZWVwIHRyYWNrIG9mIHRoZSBmcmFtZXMgYW5kIGxvb3AgaXRlcmF0b3JzLlxuICAgKiBAcGFyYW0gaW5wdXRzIHBsYWNlaG9sZGVyIHRlbnNvcnMgZm9yIHRoZSBncmFwaC5cbiAgICogQHBhcmFtIGNvbnRleHQgdGhlIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdCBmb3IgY3VycmVudCBleGVjdXRpb24uXG4gICAqIEBwYXJhbSBvdXRwdXROYW1lcyBPcHRpb25hbC4gb3V0cHV0IG5vZGUgbmFtZSBmcm9tIHRoZSBUZW5zb3JmbG93IG1vZGVsLFxuICAgKiBpZiBubyBvdXRwdXRzIGFyZSBzcGVjaWZpZWQsIHRoZSBkZWZhdWx0IG91dHB1dHMgb2YgdGhlIG1vZGVsIHdvdWxkIGJlXG4gICAqIHVzZWQuIFlvdSBjYW4gaW5zcGVjdCBpbnRlcm1lZGlhdGUgbm9kZXMgb2YgdGhlIG1vZGVsIGJ5IGFkZGluZyB0aGVtIHRvXG4gICAqIHRoZSBvdXRwdXRzIGFycmF5LlxuICAgKiBAcGFyYW0gaXNGdW5jdGlvbkV4ZWN1dGlvbiBGbGFnIGZvciBleGVjdXRpbmcgYSBmdW5jdGlvbi5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZXhlY3V0ZVdpdGhDb250cm9sRmxvdyhcbiAgICAgIGlucHV0czogTmFtZWRUZW5zb3JNYXAsIGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsIG91dHB1dE5hbWVzPzogc3RyaW5nW10sXG4gICAgICBpc0Z1bmN0aW9uRXhlY3V0aW9uPzogYm9vbGVhbik6IFByb21pc2U8TmFtZWRUZW5zb3JzTWFwPiB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhpbnB1dHMpO1xuICAgIGNvbnN0IGlucHV0Tm9kZXMgPVxuICAgICAgICBuYW1lcy5tYXAobmFtZSA9PiB0aGlzLmdyYXBoLm5vZGVzW3BhcnNlTm9kZU5hbWUobmFtZSlbMF1dKTtcbiAgICBjb25zdCBvdXRwdXROb2RlTmFtZXMgPSBvdXRwdXROYW1lcy5tYXAobmFtZSA9PiBwYXJzZU5vZGVOYW1lKG5hbWUpWzBdKTtcbiAgICBjb25zdCBvdXRwdXROb2RlTmFtZVNldCA9IG5ldyBTZXQob3V0cHV0Tm9kZU5hbWVzKTtcbiAgICBsZXQgb3V0cHV0Tm9kZXMgPSBvdXRwdXROb2RlTmFtZXMubWFwKG5hbWUgPT4gdGhpcy5ncmFwaC5ub2Rlc1tuYW1lXSk7XG5cbiAgICAvLyBJZiBubyBvdXRwdXRzIGFyZSBzcGVjaWZpZWQsIHRoZW4gdXNlIHRoZSBkZWZhdWx0IG91dHB1dHMgb2YgdGhlIG1vZGVsLlxuICAgIGlmIChvdXRwdXROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIG91dHB1dE5vZGVzID0gdGhpcy5fb3V0cHV0cztcbiAgICB9XG5cbiAgICBjb25zdCB7dXNlZE5vZGVzLCBtaXNzaW5nSW5wdXRzLCBkeW5hbWljTm9kZSwgc3luY0lucHV0c30gPVxuICAgICAgICBnZXRFeGVjdXRpb25TdWJncmFwaChcbiAgICAgICAgICAgIGlucHV0cywgb3V0cHV0Tm9kZXMsIHRoaXMud2VpZ2h0TWFwLCB0aGlzLl9pbml0Tm9kZXMpO1xuXG4gICAgLy8gRmlyc3Qgbm9kZXMgdG8gZXhlY3V0ZSBpbmNsdWRlIGlucHV0Tm9kZXMsIHdlaWdodHMsIGFuZCBpbml0Tm9kZXMuXG4gICAgY29uc3Qgc3RhY2s6IE5vZGVXaXRoQ29udGV4dHNbXSA9IFtcbiAgICAgIC4uLmlucHV0Tm9kZXMsIC4uLnRoaXMuZ3JhcGgud2VpZ2h0cywgLi4uKHRoaXMuX2luaXROb2RlcyB8fCBbXSlcbiAgICBdLm1hcChub2RlID0+IHtcbiAgICAgIHJldHVybiB7bm9kZSwgY29udGV4dHM6IGNvbnRleHQuY3VycmVudENvbnRleHR9O1xuICAgIH0pO1xuICAgIGNvbnN0IHRlbnNvcnNNYXA6IE5hbWVkVGVuc29yc01hcCA9IHsuLi50aGlzLndlaWdodE1hcH07XG4gICAgT2JqZWN0LmtleXMoaW5wdXRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgW25vZGVOYW1lLCBpbmRleF0gPSBwYXJzZU5vZGVOYW1lKG5hbWUpO1xuICAgICAgY29uc3QgdGVuc29yczogVGVuc29yW10gPSBbXTtcbiAgICAgIHRlbnNvcnNbaW5kZXhdID0gaW5wdXRzW25hbWVdO1xuICAgICAgdGVuc29yc01hcFtub2RlTmFtZV0gPSB0ZW5zb3JzO1xuICAgIH0pO1xuICAgIGNvbnN0IGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnQ6IHtba2V5OiBudW1iZXJdOiBudW1iZXJ9ID0ge307XG4gICAgY29uc3QgdGVuc29yc1RvS2VlcCA9IHRoaXMuZ2V0RnJvemVuVGVuc29ySWRzKHRlbnNvcnNNYXApO1xuICAgIGNvbnN0IGFkZGVkOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0gPSB7fTtcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSB0aGlzLnByb2Nlc3NTdGFjayhcbiAgICAgICAgICBpbnB1dE5vZGVzLCBzdGFjaywgY29udGV4dCwgdGVuc29yc01hcCwgYWRkZWQsIHRlbnNvcnNUb0tlZXAsXG4gICAgICAgICAgb3V0cHV0Tm9kZU5hbWVTZXQsIGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnQsIHVzZWROb2Rlcyk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGlmIChkeW5hbWljTm9kZSA9PSBudWxsICYmICFpc0Z1bmN0aW9uRXhlY3V0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYFRoaXMgbW9kZWwgZXhlY3V0aW9uIGRpZCBub3QgY29udGFpbiBhbnkgbm9kZXMgd2l0aCBjb250cm9sIGZsb3cgYCArXG4gICAgICAgICAgYG9yIGR5bmFtaWMgb3V0cHV0IHNoYXBlcy4gWW91IGNhbiB1c2UgbW9kZWwuZXhlY3V0ZSgpIGluc3RlYWQuYCk7XG4gICAgfVxuICAgIGNvbnN0IG1pc3NpbmdPdXRwdXRzID1cbiAgICAgICAgb3V0cHV0Tm9kZXNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgbm9kZSA9PiAhaXNDb250cm9sRmxvdyhub2RlKSAmJlxuICAgICAgICAgICAgICAgICAgICAhZ2V0VGVuc29yKG5vZGUubmFtZSwgdGVuc29yc01hcCwgY29udGV4dCkpXG4gICAgICAgICAgICAubWFwKG5vZGUgPT4gbm9kZS5uYW1lKTtcbiAgICBpZiAobWlzc2luZ091dHB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGFsdGVybmF0aXZlTXNnID0gJyc7XG4gICAgICBpZiAoZHluYW1pY05vZGUgIT0gbnVsbCkge1xuICAgICAgICBhbHRlcm5hdGl2ZU1zZyA9XG4gICAgICAgICAgICBgQWx0ZXJuYXRpdmVseSwgdG8gYXZvaWQgdGhlIGR5bmFtaWMgb3BzLCB1c2UgbW9kZWwuZXhlY3V0ZSgpIGAgK1xuICAgICAgICAgICAgYGFuZCBzcGVjaWZ5IHRoZSBpbnB1dHMgWyR7c3luY0lucHV0c31dYDtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2Fubm90IGNvbXB1dGUgdGhlIG91dHB1dHMgWyR7bWlzc2luZ091dHB1dHN9XSBmcm9tIHRoZSBwcm92aWRlZCBgICtcbiAgICAgICAgICBgaW5wdXRzIFske25hbWVzfV0uIENvbnNpZGVyIHByb3ZpZGluZyB0aGUgZm9sbG93aW5nIGlucHV0czogYCArXG4gICAgICAgICAgYFske21pc3NpbmdJbnB1dHN9XS4gJHthbHRlcm5hdGl2ZU1zZ31gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbnNvcnNNYXA7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NTdGFjayhcbiAgICAgIGlucHV0Tm9kZXM6IE5vZGVbXSwgc3RhY2s6IE5vZGVXaXRoQ29udGV4dHNbXSwgY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCxcbiAgICAgIHRlbnNvck1hcDogTmFtZWRUZW5zb3JzTWFwLCBhZGRlZDoge1trZXk6IHN0cmluZ106IGJvb2xlYW59LFxuICAgICAgdGVuc29yc1RvS2VlcDogU2V0PG51bWJlcj4sIG91dHB1dE5vZGVOYW1lU2V0OiBTZXQ8c3RyaW5nPixcbiAgICAgIGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnQ6IHtba2V5OiBudW1iZXJdOiBudW1iZXJ9LFxuICAgICAgdXNlZE5vZGVzOiBTZXQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPFRlbnNvcltdPj4gPSBbXTtcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaXRlbSA9IHN0YWNrLnBvcCgpO1xuICAgICAgY29udGV4dC5jdXJyZW50Q29udGV4dCA9IGl0ZW0uY29udGV4dHM7XG4gICAgICBsZXQgbm9kZU5hbWUgPSAnJztcbiAgICAgIC8vIFRoZSB0ZW5zb3Igb2YgdGhlIEVudGVyIG9wIHdpdGggaXNDb25zdGFudCBzZXQgc2hvdWxkIGJlIHNldFxuICAgICAgLy8gaW4gdGhlIHBhcmVudCBzY29wZSwgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgYXMgY29uc3RhbnQgZm9yIHRoZVxuICAgICAgLy8gd2hvbGUgbG9vcC5cbiAgICAgIGlmIChpdGVtLm5vZGUub3AgPT09ICdFbnRlcicgJiZcbiAgICAgICAgICBnZXRQYXJhbVZhbHVlKCdpc0NvbnN0YW50JywgaXRlbS5ub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQpKSB7XG4gICAgICAgIFtub2RlTmFtZV0gPSBnZXROb2RlTmFtZUFuZEluZGV4KGl0ZW0ubm9kZS5uYW1lLCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgLy8gb25seSBwcm9jZXNzIG5vZGVzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdGVuc29yTWFwIHlldCwgdGhpcyBpbmNsdWRlXG4gICAgICAvLyBpbnB1dE5vZGVzIGFuZCBpbnRlcm5hbCBpbml0Tm9kZXMuXG4gICAgICBpZiAodGVuc29yTWFwW2l0ZW0ubm9kZS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlbnNvcnMgPVxuICAgICAgICAgICAgZXhlY3V0ZU9wKGl0ZW0ubm9kZSwgdGVuc29yTWFwLCBjb250ZXh0LCB0aGlzLl9yZXNvdXJjZU1hbmFnZXIpO1xuICAgICAgICBpZiAoIW5vZGVOYW1lKSB7XG4gICAgICAgICAgW25vZGVOYW1lXSA9IGdldE5vZGVOYW1lQW5kSW5kZXgoaXRlbS5ub2RlLm5hbWUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb250ZXh0ID0gY29udGV4dC5jdXJyZW50Q29udGV4dDtcbiAgICAgICAgaWYgKHV0aWwuaXNQcm9taXNlKHRlbnNvcnMpKSB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaCh0ZW5zb3JzLnRoZW4odCA9PiB7XG4gICAgICAgICAgICB0ZW5zb3JNYXBbbm9kZU5hbWVdID0gdDtcbiAgICAgICAgICAgIGlmICh0aGlzLmtlZXBJbnRlcm1lZGlhdGVUZW5zb3JzKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvbmVkVGVuc29yc01hcFtub2RlTmFtZV0gPSB0aGlzLmNsb25lVGVuc29yTGlzdCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudENvbnRleHQgPSBjdXJyZW50Q29udGV4dDtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tUZW5zb3JGb3JEaXNwb3NhbChcbiAgICAgICAgICAgICAgICBub2RlTmFtZSwgaXRlbS5ub2RlLCB0ZW5zb3JNYXAsIGNvbnRleHQsIHRlbnNvcnNUb0tlZXAsXG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZU5hbWVTZXQsIGludGVybWVkaWF0ZVRlbnNvckNvbnN1bWVyQ291bnQpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ2hpbGROb2RlcyhcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUsIHN0YWNrLCBjb250ZXh0LCB0ZW5zb3JNYXAsIGFkZGVkLCB1c2VkTm9kZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbnNvck1hcFtub2RlTmFtZV0gPSB0ZW5zb3JzO1xuICAgICAgICAgIGlmICh0aGlzLmtlZXBJbnRlcm1lZGlhdGVUZW5zb3JzKSB7XG4gICAgICAgICAgICB0aGlzLmNsb25lZFRlbnNvcnNNYXBbbm9kZU5hbWVdID0gdGhpcy5jbG9uZVRlbnNvckxpc3QodGVuc29ycyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hlY2tUZW5zb3JGb3JEaXNwb3NhbChcbiAgICAgICAgICAgICAgbm9kZU5hbWUsIGl0ZW0ubm9kZSwgdGVuc29yTWFwLCBjb250ZXh0LCB0ZW5zb3JzVG9LZWVwLFxuICAgICAgICAgICAgICBvdXRwdXROb2RlTmFtZVNldCwgaW50ZXJtZWRpYXRlVGVuc29yQ29uc3VtZXJDb3VudCk7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzQ2hpbGROb2RlcyhcbiAgICAgICAgICAgICAgaXRlbS5ub2RlLCBzdGFjaywgY29udGV4dCwgdGVuc29yTWFwLCBhZGRlZCwgdXNlZE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzQ2hpbGROb2RlcyhcbiAgICAgICAgICAgIGl0ZW0ubm9kZSwgc3RhY2ssIGNvbnRleHQsIHRlbnNvck1hcCwgYWRkZWQsIHVzZWROb2Rlcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlcztcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NoaWxkTm9kZXMoXG4gICAgICBub2RlOiBOb2RlLCBzdGFjazogTm9kZVdpdGhDb250ZXh0c1tdLCBjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LFxuICAgICAgdGVuc29yTWFwOiBOYW1lZFRlbnNvcnNNYXAsIGFkZGVkOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0sXG4gICAgICB1c2VkTm9kZXM6IFNldDxzdHJpbmc+KSB7XG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IFtub2RlTmFtZSwgXSA9IGdldE5vZGVOYW1lQW5kSW5kZXgoY2hpbGROb2RlLm5hbWUsIGNvbnRleHQpO1xuICAgICAgaWYgKGFkZGVkW25vZGVOYW1lXSB8fCAhdXNlZE5vZGVzLmhhcyhjaGlsZE5vZGUubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gTWVyZ2Ugb3AgY2FuIGJlIHB1c2hlZCBpZiBhbnkgb2YgaXRzIGlucHV0cyBoYXMgdmFsdWUuXG4gICAgICBpZiAoY2hpbGROb2RlLm9wID09PSAnTWVyZ2UnKSB7XG4gICAgICAgIGlmIChjaGlsZE5vZGUuaW5wdXROYW1lcy5zb21lKG5hbWUgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gISFnZXRUZW5zb3IobmFtZSwgdGVuc29yTWFwLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgYWRkZWRbbm9kZU5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBzdGFjay5wdXNoKHtjb250ZXh0czogY29udGV4dC5jdXJyZW50Q29udGV4dCwgbm9kZTogY2hpbGROb2RlfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSAgLy8gT3RoZXJ3aXNlIGFsbCBpbnB1dHMgbXVzdCB0byBoYXZlIHZhbHVlLlxuICAgICAgICAgIGlmIChjaGlsZE5vZGUuaW5wdXROYW1lcy5ldmVyeShuYW1lID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFnZXRUZW5zb3IobmFtZSwgdGVuc29yTWFwLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgYWRkZWRbbm9kZU5hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3RhY2sucHVzaCh7Y29udGV4dHM6IGNvbnRleHQuY3VycmVudENvbnRleHQsIG5vZGU6IGNoaWxkTm9kZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIHRoZSBtZW1vcnkgdXNlZCBieSB0aGUgd2VpZ2h0IHRlbnNvcnMuXG4gICAqL1xuICBkaXNwb3NlKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMud2VpZ2h0TWFwKVxuICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgIGtleSA9PiB0aGlzLndlaWdodE1hcFtrZXldLmZvckVhY2godGVuc29yID0+IHRlbnNvci5kaXNwb3NlKCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJbnB1dFNoYXBlQW5kVHlwZShpbnB1dHM6IE5hbWVkVGVuc29yTWFwKSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dHNbbmFtZV07XG4gICAgICBjb25zdCBbbm9kZU5hbWUsIF0gPSBwYXJzZU5vZGVOYW1lKG5hbWUpO1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ3JhcGgubm9kZXNbbm9kZU5hbWVdO1xuICAgICAgaWYgKG5vZGUuYXR0clBhcmFtc1snc2hhcGUnXSAmJiBub2RlLmF0dHJQYXJhbXNbJ3NoYXBlJ10udmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2hhcGUgPSBub2RlLmF0dHJQYXJhbXNbJ3NoYXBlJ10udmFsdWUgYXMgbnVtYmVyW107XG4gICAgICAgIGNvbnN0IG1hdGNoID0gc2hhcGUubGVuZ3RoID09PSBpbnB1dC5zaGFwZS5sZW5ndGggJiZcbiAgICAgICAgICAgIGlucHV0LnNoYXBlLmV2ZXJ5KFxuICAgICAgICAgICAgICAgIChkaW0sIGluZGV4KSA9PiBzaGFwZVtpbmRleF0gPT09IC0xIHx8IHNoYXBlW2luZGV4XSA9PT0gZGltKTtcbiAgICAgICAgdXRpbC5hc3NlcnQoXG4gICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICgpID0+IGBUaGUgc2hhcGUgb2YgZGljdFsnJHtub2RlLm5hbWV9J10gcHJvdmlkZWQgaW4gYCArXG4gICAgICAgICAgICAgICAgYG1vZGVsLmV4ZWN1dGUoZGljdCkgbXVzdCBiZSBbJHtzaGFwZX1dLCBidXQgd2FzIGAgK1xuICAgICAgICAgICAgICAgIGBbJHtpbnB1dC5zaGFwZX1dYCk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5hdHRyUGFyYW1zWydkdHlwZSddICYmIG5vZGUuYXR0clBhcmFtc1snZHR5cGUnXS52YWx1ZSkge1xuICAgICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICAgIGlucHV0LmR0eXBlID09PSBub2RlLmF0dHJQYXJhbXNbJ2R0eXBlJ10udmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAgKCkgPT4gYFRoZSBkdHlwZSBvZiBkaWN0Wycke25vZGUubmFtZX0nXSBwcm92aWRlZCBpbiBgICtcbiAgICAgICAgICAgICAgICBgbW9kZWwuZXhlY3V0ZShkaWN0KSBtdXN0IGJlIGAgK1xuICAgICAgICAgICAgICAgIGAke25vZGUuYXR0clBhcmFtc1snZHR5cGUnXS52YWx1ZX0sIGJ1dCB3YXMgJHtpbnB1dC5kdHlwZX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbWFwSW5wdXRzKGlucHV0czogTmFtZWRUZW5zb3JNYXApIHtcbiAgICBjb25zdCByZXN1bHQ6IE5hbWVkVGVuc29yTWFwID0ge307XG4gICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gaW5wdXRzKSB7XG4gICAgICBjb25zdCB0ZW5zb3IgPSB0aGlzLl9zaWduYXR1cmUgPy5pbnB1dHMgPy5baW5wdXROYW1lXTtcbiAgICAgIGlmICh0ZW5zb3IgIT0gbnVsbCkge1xuICAgICAgICByZXN1bHRbdGVuc29yLm5hbWVdID0gaW5wdXRzW2lucHV0TmFtZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbaW5wdXROYW1lXSA9IGlucHV0c1tpbnB1dE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lucHV0cyhpbnB1dHM6IE5hbWVkVGVuc29yTWFwKSB7XG4gICAgY29uc3Qgbm90SW5HcmFwaCA9IE9iamVjdC5rZXlzKGlucHV0cykuZmlsdGVyKG5hbWUgPT4ge1xuICAgICAgY29uc3QgW25vZGVOYW1lXSA9IHBhcnNlTm9kZU5hbWUobmFtZSk7XG4gICAgICByZXR1cm4gdGhpcy5ncmFwaC5ub2Rlc1tub2RlTmFtZV0gPT0gbnVsbDtcbiAgICB9KTtcbiAgICBpZiAobm90SW5HcmFwaC5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRoZSBkaWN0IHByb3ZpZGVkIGluIG1vZGVsLmV4ZWN1dGUoZGljdCkgaGFzIGAgK1xuICAgICAgICAgIGBrZXlzOiBbJHtub3RJbkdyYXBofV0gdGhhdCBhcmUgbm90IHBhcnQgb2YgZ3JhcGhgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcE91dHB1dHMob3V0cHV0czogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gb3V0cHV0cy5tYXAobmFtZSA9PiB7XG4gICAgICBjb25zdCB0ZW5zb3IgPSB0aGlzLl9zaWduYXR1cmUgPy5vdXRwdXRzID8uW25hbWVdO1xuICAgICAgaWYgKHRlbnNvciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0ZW5zb3IubmFtZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tPdXRwdXRzKG91dHB1dHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgb3V0cHV0cy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgW25vcm1hbGl6ZWROYW1lXSA9IHBhcnNlTm9kZU5hbWUobmFtZSk7XG4gICAgICBpZiAoIXRoaXMuZ3JhcGgubm9kZXNbbm9ybWFsaXplZE5hbWVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG91dHB1dCAnJHtuYW1lfScgaXMgbm90IGZvdW5kIGluIHRoZSBncmFwaGApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contains global resources of a model.
 */ __turbopack_context__.s([
    "ResourceManager",
    ()=>ResourceManager
]);
class ResourceManager {
    constructor(hashTableNameToHandle = {}, hashTableMap = {}){
        this.hashTableNameToHandle = hashTableNameToHandle;
        this.hashTableMap = hashTableMap;
    }
    /**
     * Register a `HashTable` in the resource manager.
     *
     * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
     * where id is the table handle tensor's id.
     *
     * @param name Op node name that creates the `HashTable`.
     * @param hashTable The `HashTable` to be added to resource manager.
     */ addHashTable(name, hashTable) {
        this.hashTableNameToHandle[name] = hashTable.handle;
        this.hashTableMap[hashTable.id] = hashTable;
    }
    /**
     * Get the table handle by node name.
     * @param name Op node name that creates the `HashTable`. This name is also
     *     used in the inputs list of lookup and import `HashTable` ops.
     */ getHashTableHandleByName(name) {
        return this.hashTableNameToHandle[name];
    }
    /**
     * Get the actual `HashTable` by its handle tensor's id.
     * @param id The id of the handle tensor.
     */ getHashTableById(id) {
        return this.hashTableMap[id];
    }
    /**
     * Dispose `ResourceManager`, including its hashTables and tensors in them.
     */ dispose() {
        for(const key in this.hashTableMap){
            this.hashTableMap[key].clearAndClose();
            delete this.hashTableMap[key];
        }
        for(const name in this.hashTableNameToHandle){
            this.hashTableNameToHandle[name].dispose();
            delete this.hashTableNameToHandle[name];
        }
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VfbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29udmVydGVyL3NyYy9leGVjdXRvci9yZXNvdXJjZV9tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTs7R0FFRztBQUNILE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQ2Esd0JBQXdDLEVBQUUsRUFDMUMsZUFBNkIsRUFBRTtRQUQvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXFCO1FBQzFDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtJQUFHLENBQUM7SUFFaEQ7Ozs7Ozs7O09BUUc7SUFDSCxZQUFZLENBQUMsSUFBWSxFQUFFLFNBQW9CO1FBQzdDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUF3QixDQUFDLElBQVk7UUFDbkMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDTCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5pbXBvcnQge0hhc2hUYWJsZU1hcCwgTmFtZWRUZW5zb3JNYXB9IGZyb20gJy4uL2RhdGEvdHlwZXMnO1xuaW1wb3J0IHtIYXNoVGFibGV9IGZyb20gJy4vaGFzaF90YWJsZSc7XG5cbi8qKlxuICogQ29udGFpbnMgZ2xvYmFsIHJlc291cmNlcyBvZiBhIG1vZGVsLlxuICovXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICByZWFkb25seSBoYXNoVGFibGVOYW1lVG9IYW5kbGU6IE5hbWVkVGVuc29yTWFwID0ge30sXG4gICAgICByZWFkb25seSBoYXNoVGFibGVNYXA6IEhhc2hUYWJsZU1hcCA9IHt9KSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGBIYXNoVGFibGVgIGluIHRoZSByZXNvdXJjZSBtYW5hZ2VyLlxuICAgKlxuICAgKiBUaGUgYEhhc2hUYWJsZWAgY2FuIGJlIHJldHJpZXZlZCBieSBgcmVzb3VyY2VNYW5hZ2VyLmdldEhhc2hUYWJsZUJ5SWRgLFxuICAgKiB3aGVyZSBpZCBpcyB0aGUgdGFibGUgaGFuZGxlIHRlbnNvcidzIGlkLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBPcCBub2RlIG5hbWUgdGhhdCBjcmVhdGVzIHRoZSBgSGFzaFRhYmxlYC5cbiAgICogQHBhcmFtIGhhc2hUYWJsZSBUaGUgYEhhc2hUYWJsZWAgdG8gYmUgYWRkZWQgdG8gcmVzb3VyY2UgbWFuYWdlci5cbiAgICovXG4gIGFkZEhhc2hUYWJsZShuYW1lOiBzdHJpbmcsIGhhc2hUYWJsZTogSGFzaFRhYmxlKSB7XG4gICAgdGhpcy5oYXNoVGFibGVOYW1lVG9IYW5kbGVbbmFtZV0gPSBoYXNoVGFibGUuaGFuZGxlO1xuICAgIHRoaXMuaGFzaFRhYmxlTWFwW2hhc2hUYWJsZS5pZF0gPSBoYXNoVGFibGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0YWJsZSBoYW5kbGUgYnkgbm9kZSBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBPcCBub2RlIG5hbWUgdGhhdCBjcmVhdGVzIHRoZSBgSGFzaFRhYmxlYC4gVGhpcyBuYW1lIGlzIGFsc29cbiAgICogICAgIHVzZWQgaW4gdGhlIGlucHV0cyBsaXN0IG9mIGxvb2t1cCBhbmQgaW1wb3J0IGBIYXNoVGFibGVgIG9wcy5cbiAgICovXG4gIGdldEhhc2hUYWJsZUhhbmRsZUJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNoVGFibGVOYW1lVG9IYW5kbGVbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhY3R1YWwgYEhhc2hUYWJsZWAgYnkgaXRzIGhhbmRsZSB0ZW5zb3IncyBpZC5cbiAgICogQHBhcmFtIGlkIFRoZSBpZCBvZiB0aGUgaGFuZGxlIHRlbnNvci5cbiAgICovXG4gIGdldEhhc2hUYWJsZUJ5SWQoaWQ6IG51bWJlcik6IEhhc2hUYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzaFRhYmxlTWFwW2lkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIGBSZXNvdXJjZU1hbmFnZXJgLCBpbmNsdWRpbmcgaXRzIGhhc2hUYWJsZXMgYW5kIHRlbnNvcnMgaW4gdGhlbS5cbiAgICovXG4gIGRpc3Bvc2UoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5oYXNoVGFibGVNYXApIHtcbiAgICAgIHRoaXMuaGFzaFRhYmxlTWFwW2tleV0uY2xlYXJBbmRDbG9zZSgpO1xuICAgICAgZGVsZXRlIHRoaXMuaGFzaFRhYmxlTWFwW2tleV07XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuaGFzaFRhYmxlTmFtZVRvSGFuZGxlKSB7XG4gICAgICB0aGlzLmhhc2hUYWJsZU5hbWVUb0hhbmRsZVtuYW1lXS5kaXNwb3NlKCk7XG4gICAgICBkZWxldGUgdGhpcy5oYXNoVGFibGVOYW1lVG9IYW5kbGVbbmFtZV07XG4gICAgfVxuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/graph_model.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "DEFAULT_MODEL_NAME",
    ()=>DEFAULT_MODEL_NAME,
    "GraphModel",
    ()=>GraphModel,
    "TFHUB_SEARCH_PARAM",
    ()=>TFHUB_SEARCH_PARAM,
    "loadGraphModel",
    ()=>loadGraphModel,
    "loadGraphModelSync",
    ()=>loadGraphModelSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/io/io.js [app-client] (ecmascript) <export * as io>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$operation_mapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/operations/operation_mapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$graph_executor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/graph_executor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$resource_manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-converter/dist/executor/resource_manager.js [app-client] (ecmascript)");
// tslint:disable-next-line: no-imports-from-dist
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/io/io_utils.js [app-client] (ecmascript)");
;
;
;
;
;
const TFHUB_SEARCH_PARAM = '?tfjs-format=file';
const DEFAULT_MODEL_NAME = 'model.json';
class GraphModel {
    // Returns the version information for the tensorflow model GraphDef.
    get modelVersion() {
        return this.version;
    }
    get inputNodes() {
        return this.executor.inputNodes;
    }
    get outputNodes() {
        return this.executor.outputNodes;
    }
    get inputs() {
        return this.executor.inputs;
    }
    get outputs() {
        return this.executor.outputs;
    }
    get weights() {
        return this.executor.weightMap;
    }
    get metadata() {
        return this.artifacts.userDefinedMetadata;
    }
    get modelSignature() {
        return this.signature;
    }
    get modelStructuredOutputKeys() {
        return this.structuredOutputKeys;
    }
    /**
     * @param modelUrl url for the model, or an `io.IOHandler`.
     * @param weightManifestUrl url for the weight file generated by
     * scripts/convert.py script.
     * @param requestOption options for Request, which allows to send credentials
     * and custom headers.
     * @param onProgress Optional, progress callback function, fired periodically
     * before the load is completed.
     */ constructor(modelUrl, loadOptions = {}, tfio = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"]){
        this.modelUrl = modelUrl;
        this.loadOptions = loadOptions;
        this.version = 'n/a';
        this.io = tfio;
        if (loadOptions == null) {
            this.loadOptions = {};
        }
        this.resourceManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$resource_manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceManager"]();
    }
    findIOHandler() {
        const path = this.modelUrl;
        if (path.load != null) {
            // Path is an IO Handler.
            this.handler = path;
        } else if (this.loadOptions.requestInit != null) {
            this.handler = this.io.browserHTTPRequest(path, this.loadOptions);
        } else {
            const handlers = this.io.getLoadHandlers(path, this.loadOptions);
            if (handlers.length === 0) {
                // For backward compatibility: if no load handler can be found,
                // assume it is a relative http path.
                handlers.push(this.io.browserHTTPRequest(path, this.loadOptions));
            } else if (handlers.length > 1) {
                throw new Error(`Found more than one (${handlers.length}) load handlers for ` + `URL '${[
                    path
                ]}'`);
            }
            this.handler = handlers[0];
        }
    }
    /**
     * Loads the model and weight files, construct the in memory weight map and
     * compile the inference graph.
     */ load() {
        this.findIOHandler();
        if (this.handler.load == null) {
            throw new Error('Cannot proceed with model loading because the IOHandler provided ' + 'does not have the `load` method implemented.');
        }
        const loadResult = this.handler.load();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isPromise(loadResult)) {
            return loadResult.then((artifacts)=>{
                if (artifacts.getWeightStream == null) {
                    return this.loadSync(artifacts);
                }
                return this.loadStreaming(artifacts);
            });
        }
        return this.loadSync(loadResult);
    }
    /**
     * Synchronously construct the in memory weight map and
     * compile the inference graph.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */ loadSync(artifacts) {
        const weightMap = this.io.decodeWeights(artifacts.weightData, artifacts.weightSpecs);
        return this.loadWithWeightMap(artifacts, weightMap);
    }
    async loadStreaming(artifacts) {
        if (artifacts.getWeightStream == null) {
            throw new Error('Model artifacts missing streamWeights function');
        }
        const weightMap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeWeightsStream"])(artifacts.getWeightStream(), artifacts.weightSpecs);
        return this.loadWithWeightMap(artifacts, weightMap);
    }
    loadWithWeightMap(artifacts, weightMap) {
        this.artifacts = artifacts;
        const graph = this.artifacts.modelTopology;
        let signature = this.artifacts.signature;
        if (this.artifacts.userDefinedMetadata != null) {
            const metadata = this.artifacts.userDefinedMetadata;
            if (metadata.signature != null) {
                signature = metadata.signature;
            }
            if (metadata.structuredOutputKeys != null) {
                this.structuredOutputKeys = metadata.structuredOutputKeys;
            }
        }
        this.signature = signature;
        this.version = `${graph.versions.producer}.${graph.versions.minConsumer}`;
        this.executor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$graph_executor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraphExecutor"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$operation_mapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationMapper"].Instance.transformGraph(graph, this.signature));
        this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
        // Attach a model-level resourceManager to each executor to share resources,
        // such as `HashTable`.
        this.executor.resourceManager = this.resourceManager;
        if (artifacts.modelInitializer != null && artifacts.modelInitializer.node != null) {
            const initializer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$operations$2f$operation_mapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OperationMapper"].Instance.transformGraph(artifacts.modelInitializer);
            this.initializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$converter$2f$dist$2f$executor$2f$graph_executor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GraphExecutor"](initializer);
            this.initializer.weightMap = this.executor.weightMap;
            // Attach a model-level resourceManager to the initializer, the
            // hashTables created from when executing the initializer will be stored
            // in the resourceManager.
            this.initializer.resourceManager = this.resourceManager;
            this.initializerSignature = artifacts.initializerSignature;
        }
        return true;
    }
    /**
     * Save the configuration and/or weights of the GraphModel.
     *
     * An `IOHandler` is an object that has a `save` method of the proper
     * signature defined. The `save` method manages the storing or
     * transmission of serialized data ("artifacts") that represent the
     * model's topology and weights onto or via a specific medium, such as
     * file downloads, local storage, IndexedDB in the web browser and HTTP
     * requests to a server. TensorFlow.js provides `IOHandler`
     * implementations for a number of frequently used saving mediums, such as
     * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
     * for more details.
     *
     * This method also allows you to refer to certain types of `IOHandler`s
     * as URL-like string shortcuts, such as 'localstorage://' and
     * 'indexeddb://'.
     *
     * Example 1: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const modelUrl =
     *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
     * const model = await tf.loadGraphModel(modelUrl);
     * const zeros = tf.zeros([1, 224, 224, 3]);
     * model.predict(zeros).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * model.predict(zeros).print();
     * ```
     *
     * @param handlerOrURL An instance of `IOHandler` or a URL-like,
     * scheme-based string shortcut for `IOHandler`.
     * @param config Options for saving the model.
     * @returns A `Promise` of `SaveResult`, which summarizes the result of
     * the saving, such as byte sizes of the saved artifacts for the model's
     *   topology and weight values.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */ async save(handlerOrURL, config) {
        if (typeof handlerOrURL === 'string') {
            const handlers = this.io.getSaveHandlers(handlerOrURL);
            if (handlers.length === 0) {
                throw new Error(`Cannot find any save handlers for URL '${handlerOrURL}'`);
            } else if (handlers.length > 1) {
                throw new Error(`Found more than one (${handlers.length}) save handlers for ` + `URL '${handlerOrURL}'`);
            }
            handlerOrURL = handlers[0];
        }
        if (handlerOrURL.save == null) {
            throw new Error('GraphModel.save() cannot proceed because the IOHandler ' + 'provided does not have the `save` attribute defined.');
        }
        return handlerOrURL.save(this.artifacts);
    }
    addStructuredOutputNames(outputTensors) {
        if (this.structuredOutputKeys) {
            const outputTensorsArray = outputTensors instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"] ? [
                outputTensors
            ] : outputTensors;
            const outputTensorMap = {};
            outputTensorsArray.forEach((outputTensor, i)=>outputTensorMap[this.structuredOutputKeys[i]] = outputTensor);
            return outputTensorMap;
        }
        return outputTensors;
    }
    /**
     * Execute the inference for the input tensors.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a `tf.Tensor`. For models with multiple inputs,
     * inputs params should be in either `tf.Tensor`[] if the input order is
     * fixed, or otherwise NamedTensorMap format.
     *
     * For model with multiple inputs, we recommend you use NamedTensorMap as the
     * input type, if you use `tf.Tensor`[], the order of the array needs to
     * follow the
     * order of inputNodes array. @see {@link GraphModel.inputNodes}
     *
     * You can also feed any intermediate nodes using the NamedTensorMap as the
     * input type. For example, given the graph
     *    InputNode => Intermediate => OutputNode,
     * you can execute the subgraph Intermediate => OutputNode by calling
     *    model.execute('IntermediateNode' : tf.tensor(...));
     *
     * This is useful for models that uses tf.dynamic_rnn, where the intermediate
     * state needs to be fed manually.
     *
     * For batch inference execution, the tensors for each input need to be
     * concatenated together. For example with mobilenet, the required input shape
     * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
     * If we are provide a batched data of 100 images, the input tensor should be
     * in the shape of [100, 244, 244, 3].
     *
     * @param config Prediction configuration for specifying the batch size.
     * Currently the batch size option is ignored for graph model.
     *
     * @returns Inference result tensors. If the model is converted and it
     * originally had structured_outputs in tensorflow, then a NamedTensorMap
     * will be returned matching the structured_outputs. If no structured_outputs
     * are present, the output will be single `tf.Tensor` if the model has single
     * output node, otherwise Tensor[].
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ predict(inputs, config) {
        const outputTensors = this.execute(inputs, this.outputNodes);
        return this.addStructuredOutputNames(outputTensors);
    }
    /**
     * Execute the inference for the input tensors in async fashion, use this
     * method when your model contains control flow ops.
     *
     * @param input The input tensors, when there is single input for the model,
     * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
     * inputs params should be in either `tf.Tensor`[] if the input order is
     * fixed, or otherwise NamedTensorMap format.
     *
     * For model with multiple inputs, we recommend you use NamedTensorMap as the
     * input type, if you use `tf.Tensor`[], the order of the array needs to
     * follow the
     * order of inputNodes array. @see {@link GraphModel.inputNodes}
     *
     * You can also feed any intermediate nodes using the NamedTensorMap as the
     * input type. For example, given the graph
     *    InputNode => Intermediate => OutputNode,
     * you can execute the subgraph Intermediate => OutputNode by calling
     *    model.execute('IntermediateNode' : tf.tensor(...));
     *
     * This is useful for models that uses tf.dynamic_rnn, where the intermediate
     * state needs to be fed manually.
     *
     * For batch inference execution, the tensors for each input need to be
     * concatenated together. For example with mobilenet, the required input shape
     * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
     * If we are provide a batched data of 100 images, the input tensor should be
     * in the shape of [100, 244, 244, 3].
     *
     * @param config Prediction configuration for specifying the batch size.
     * Currently the batch size option is ignored for graph model.
     *
     * @returns A Promise of inference result tensors. If the model is converted
     * and it originally had structured_outputs in tensorflow, then a
     * NamedTensorMap will be returned matching the structured_outputs. If no
     * structured_outputs are present, the output will be single `tf.Tensor` if
     * the model has single output node, otherwise Tensor[].
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async predictAsync(inputs, config) {
        const outputTensors = await this.executeAsync(inputs, this.outputNodes);
        return this.addStructuredOutputNames(outputTensors);
    }
    normalizeInputs(inputs) {
        var _a;
        if (!(inputs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"]) && !Array.isArray(inputs)) {
            // The input is already a NamedTensorMap.
            const signatureInputs = (_a = this.signature) === null || _a === void 0 ? void 0 : _a.inputs;
            if (signatureInputs != null) {
                for(const input in signatureInputs){
                    const tensor = signatureInputs[input];
                    if (tensor.resourceId != null) {
                        inputs[input] = this.resourceIdToCapturedInput[tensor.resourceId];
                    }
                }
            }
            return inputs;
        }
        inputs = Array.isArray(inputs) ? inputs : [
            inputs
        ];
        const numCapturedInputs = Object.keys(this.resourceIdToCapturedInput).length;
        if (inputs.length + numCapturedInputs !== this.inputNodes.length) {
            throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length - numCapturedInputs} non-resource placeholders, while there are ${inputs.length} input tensors provided.`);
        }
        let inputIndex = 0;
        return this.inputNodes.reduce((map, inputName)=>{
            var _a, _b, _c;
            const resourceId = (_c = (_b = (_a = this.signature) === null || _a === void 0 ? void 0 : _a.inputs) === null || _b === void 0 ? void 0 : _b[inputName]) === null || _c === void 0 ? void 0 : _c.resourceId;
            if (resourceId != null) {
                map[inputName] = this.resourceIdToCapturedInput[resourceId];
            } else {
                map[inputName] = inputs[inputIndex++];
            }
            return map;
        }, {});
    }
    normalizeOutputs(outputs) {
        outputs = outputs || this.outputNodes;
        return !Array.isArray(outputs) ? [
            outputs
        ] : outputs;
    }
    executeInitializerGraph() {
        if (this.initializer == null) {
            return [];
        }
        if (this.initializerSignature == null) {
            return this.initializer.execute({}, []);
        } else {
            return this.initializer.execute({}, Object.keys(this.initializerSignature.outputs));
        }
    }
    async executeInitializerGraphAsync() {
        if (this.initializer == null) {
            return [];
        }
        if (this.initializerSignature == null) {
            return this.initializer.executeAsync({}, []);
        } else {
            return this.initializer.executeAsync({}, Object.keys(this.initializerSignature.outputs));
        }
    }
    setResourceIdToCapturedInput(outputs) {
        this.resourceIdToCapturedInput = {};
        if (this.initializerSignature) {
            const signatureOutputs = this.initializerSignature.outputs;
            const outputNames = Object.keys(signatureOutputs);
            for(let i = 0; i < outputNames.length; i++){
                const outputName = outputNames[i];
                const tensorInfo = signatureOutputs[outputName];
                this.resourceIdToCapturedInput[tensorInfo.resourceId] = outputs[i];
            }
        }
    }
    /**
     * Executes inference for the model for given input tensors.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the TensorFlow model, if no
     * outputs are specified, the default outputs of the model would be used.
     * You can inspect intermediate nodes of the model by adding them to the
     * outputs array.
     *
     * @returns A single tensor if provided with a single output or no outputs
     * are provided and there is only one default output, otherwise return a
     * tensor array. The order of the tensor array is the same as the outputs
     * if provided, otherwise the order of outputNodes attribute of the model.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ execute(inputs, outputs) {
        if (this.resourceIdToCapturedInput == null) {
            this.setResourceIdToCapturedInput(this.executeInitializerGraph());
        }
        inputs = this.normalizeInputs(inputs);
        outputs = this.normalizeOutputs(outputs);
        const result = this.executor.execute(inputs, outputs);
        return result.length > 1 ? result : result[0];
    }
    /**
     * Executes inference for the model for given input tensors in async
     * fashion, use this method when your model contains control flow ops.
     * @param inputs tensor, tensor array or tensor map of the inputs for the
     * model, keyed by the input node names.
     * @param outputs output node name from the TensorFlow model, if no outputs
     * are specified, the default outputs of the model would be used. You can
     * inspect intermediate nodes of the model by adding them to the outputs
     * array.
     *
     * @returns A Promise of single tensor if provided with a single output or
     * no outputs are provided and there is only one default output, otherwise
     * return a tensor map.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async executeAsync(inputs, outputs) {
        if (this.resourceIdToCapturedInput == null) {
            this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync());
        }
        inputs = this.normalizeInputs(inputs);
        outputs = this.normalizeOutputs(outputs);
        const result = await this.executor.executeAsync(inputs, outputs);
        return result.length > 1 ? result : result[0];
    }
    /**
     * Get intermediate tensors for model debugging mode (flag
     * KEEP_INTERMEDIATE_TENSORS is true).
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ getIntermediateTensors() {
        return this.executor.getIntermediateTensors();
    }
    /**
     * Dispose intermediate tensors for model debugging mode (flag
     * KEEP_INTERMEDIATE_TENSORS is true).
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ disposeIntermediateTensors() {
        this.executor.disposeIntermediateTensors();
    }
    convertTensorMapToTensorsMap(map) {
        return Object.keys(map).reduce((newMap, key)=>{
            newMap[key] = [
                map[key]
            ];
            return newMap;
        }, {});
    }
    /**
     * Releases the memory used by the weight tensors and resourceManager.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ dispose() {
        this.executor.dispose();
        if (this.initializer) {
            this.initializer.dispose();
            if (this.resourceIdToCapturedInput) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispose"])(this.resourceIdToCapturedInput);
            }
        }
        this.resourceManager.dispose();
    }
}
async function loadGraphModel(modelUrl, options = {}, tfio = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"]) {
    if (modelUrl == null) {
        throw new Error('modelUrl in loadGraphModel() cannot be null. Please provide a url ' + 'or an IOHandler that loads the model');
    }
    if (options == null) {
        options = {};
    }
    if (options.fromTFHub && typeof modelUrl === 'string') {
        modelUrl = getTFHubUrl(modelUrl);
    }
    const model = new GraphModel(modelUrl, options, tfio);
    await model.load();
    return model;
}
function loadGraphModelSync(modelSource) {
    if (modelSource == null) {
        throw new Error('modelUrl in loadGraphModelSync() cannot be null. Please provide ' + 'model artifacts or an IOHandler that loads the model');
    }
    let ioHandler;
    if (modelSource instanceof Array) {
        const [modelJSON, weights] = modelSource;
        if (!modelJSON) {
            throw new Error('modelJSON must be the first element of the array');
        }
        if (!weights || !(weights instanceof ArrayBuffer)) {
            throw new Error('An ArrayBuffer of weights must be the second element of' + ' the array');
        }
        if (!('modelTopology' in modelJSON)) {
            throw new Error('Model JSON is missing \'modelTopology\'');
        }
        if (!('weightsManifest' in modelJSON)) {
            throw new Error('Model JSON is missing \'weightsManifest\'');
        }
        const weightSpecs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].getWeightSpecs(modelJSON.weightsManifest);
        const modelArtifacts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].getModelArtifactsForJSONSync(modelJSON, weightSpecs, weights);
        ioHandler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].fromMemorySync(modelArtifacts);
    } else if ('load' in modelSource) {
        // Then modelSource is already an IOHandlerSync.
        ioHandler = modelSource;
    } else if ('modelTopology' in modelSource && 'weightSpecs' in modelSource && 'weightData' in modelSource) {
        // modelSource is of type ModelArtifacts.
        ioHandler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].fromMemorySync(modelSource);
    } else {
        throw new Error('Unknown model format');
    }
    const model = new GraphModel(ioHandler);
    model.load();
    return model;
}
function getTFHubUrl(modelUrl) {
    if (!modelUrl.endsWith('/')) {
        modelUrl = modelUrl + '/';
    }
    return `${modelUrl}${DEFAULT_MODEL_NAME}${TFHUB_SEARCH_PARAM}`;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhfbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvbnZlcnRlci9zcmMvZXhlY3V0b3IvZ3JhcGhfbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBa0IsRUFBRSxFQUFzQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFJcEgsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsaURBQWlEO0FBQ2pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBRTNFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLFlBQVksQ0FBQztBQUkvQzs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLE9BQU8sVUFBVTtJQWNyQixxRUFBcUU7SUFDckUsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFF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QUFJLGFBQWEsSUFBSSxXQUFXO1FBQzlELFlBQVksSUFBSSxXQUFXLEVBQUU7UUFDL0IseUNBQXlDO1FBQ3pDLFNBQVMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVDO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDekM7SUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFnQjtJQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDN0I7SUFDRCxPQUFPLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGtCQUFrQixFQUFFLENBQUM7QUFDakUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtkaXNwb3NlLCBJbmZlcmVuY2VNb2RlbCwgaW8sIE1vZGVsUHJlZGljdENvbmZpZywgTmFtZWRUZW5zb3JNYXAsIFRlbnNvciwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0ICogYXMgdGVuc29yZmxvdyBmcm9tICcuLi9kYXRhL2NvbXBpbGVkX2FwaSc7XG5pbXBvcnQge05hbWVkVGVuc29yc01hcCwgVGVuc29ySW5mb30gZnJvbSAnLi4vZGF0YS90eXBlcyc7XG5pbXBvcnQge09wZXJhdGlvbk1hcHBlcn0gZnJvbSAnLi4vb3BlcmF0aW9ucy9vcGVyYXRpb25fbWFwcGVyJztcblxuaW1wb3J0IHtHcmFwaEV4ZWN1dG9yfSBmcm9tICcuL2dyYXBoX2V4ZWN1dG9yJztcbmltcG9ydCB7UmVzb3VyY2VNYW5hZ2VyfSBmcm9tICcuL3Jlc291cmNlX21hbmFnZXInO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBvcnRzLWZyb20tZGlzdFxuaW1wb3J0IHtkZWNvZGVXZWlnaHRzU3RyZWFtfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUvZGlzdC9pby9pb191dGlscyc7XG5cbmV4cG9ydCBjb25zdCBURkhVQl9TRUFSQ0hfUEFSQU0gPSAnP3RmanMtZm9ybWF0PWZpbGUnO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9ERUxfTkFNRSA9ICdtb2RlbC5qc29uJztcbnR5cGUgVXJsID0gc3RyaW5nfGlvLklPSGFuZGxlcnxpby5JT0hhbmRsZXJTeW5jO1xudHlwZSBVcmxJT0hhbmRsZXI8VCBleHRlbmRzIFVybD4gPSBUIGV4dGVuZHMgc3RyaW5nID8gaW8uSU9IYW5kbGVyIDogVDtcblxuLyoqXG4gKiBBIGB0Zi5HcmFwaE1vZGVsYCBpcyBhIGRpcmVjdGVkLCBhY3ljbGljIGdyYXBoIGJ1aWx0IGZyb20gYVxuICogU2F2ZWRNb2RlbCBHcmFwaERlZiBhbmQgYWxsb3dzIGluZmVyZW5jZSBleGVjdXRpb24uXG4gKlxuICogQSBgdGYuR3JhcGhNb2RlbGAgY2FuIG9ubHkgYmUgY3JlYXRlZCBieSBsb2FkaW5nIGZyb20gYSBtb2RlbCBjb252ZXJ0ZWQgZnJvbVxuICogYSBbVGVuc29yRmxvdyBTYXZlZE1vZGVsXShodHRwczovL3d3dy50ZW5zb3JmbG93Lm9yZy9ndWlkZS9zYXZlZF9tb2RlbCkgdXNpbmdcbiAqIHRoZSBjb21tYW5kIGxpbmUgY29udmVydGVyIHRvb2wgYW5kIGxvYWRlZCB2aWEgYHRmLmxvYWRHcmFwaE1vZGVsYC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICovXG5leHBvcnQgY2xhc3MgR3JhcGhNb2RlbDxNb2RlbFVSTCBleHRlbmRzIFVybCA9IHN0cmluZyB8IGlvLklPSGFuZGxlcj4gaW1wbGVtZW50c1xuICAgIEluZmVyZW5jZU1vZGVsIHtcbiAgcHJpdmF0ZSBleGVjdXRvcjogR3JhcGhFeGVjdXRvcjtcbiAgcHJpdmF0ZSB2ZXJzaW9uID0gJ24vYSc7XG4gIHByaXZhdGUgaGFuZGxlcjogVXJsSU9IYW5kbGVyPE1vZGVsVVJMPjtcbiAgcHJpdmF0ZSBhcnRpZmFjdHM6IGlvLk1vZGVsQXJ0aWZhY3RzO1xuICBwcml2YXRlIGluaXRpYWxpemVyOiBHcmFwaEV4ZWN1dG9yO1xuICBwcml2YXRlIHJlc291cmNlSWRUb0NhcHR1cmVkSW5wdXQ6IHtba2V5OiBudW1iZXJdOiBUZW5zb3J9O1xuICBwcml2YXRlIHJlc291cmNlTWFuYWdlcjogUmVzb3VyY2VNYW5hZ2VyO1xuICBwcml2YXRlIHNpZ25hdHVyZTogdGVuc29yZmxvdy5JU2lnbmF0dXJlRGVmO1xuICBwcml2YXRlIGluaXRpYWxpemVyU2lnbmF0dXJlOiB0ZW5zb3JmbG93LklTaWduYXR1cmVEZWY7XG4gIHByaXZhdGUgc3RydWN0dXJlZE91dHB1dEtleXM6IHN0cmluZ1tdO1xuICBwcml2YXRlIHJlYWRvbmx5IGlvOiB0eXBlb2YgaW87XG5cbiAgLy8gUmV0dXJucyB0aGUgdmVyc2lvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIHRlbnNvcmZsb3cgbW9kZWwgR3JhcGhEZWYuXG4gIGdldCBtb2RlbFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICB9XG5cbiAgZ2V0IGlucHV0Tm9kZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dG9yLmlucHV0Tm9kZXM7XG4gIH1cblxuICBnZXQgb3V0cHV0Tm9kZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dG9yLm91dHB1dE5vZGVzO1xuICB9XG5cbiAgZ2V0IGlucHV0cygpOiBUZW5zb3JJbmZvW10ge1xuICAgIHJldHVybiB0aGlzLmV4ZWN1dG9yLmlucHV0cztcbiAgfVxuXG4gIGdldCBvdXRwdXRzKCk6IFRlbnNvckluZm9bXSB7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0b3Iub3V0cHV0cztcbiAgfVxuXG4gIGdldCB3ZWlnaHRzKCk6IE5hbWVkVGVuc29yc01hcCB7XG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0b3Iud2VpZ2h0TWFwO1xuICB9XG5cbiAgZ2V0IG1ldGFkYXRhKCk6IHt9IHtcbiAgICByZXR1cm4gdGhpcy5hcnRpZmFjdHMudXNlckRlZmluZWRNZXRhZGF0YTtcbiAgfVxuXG4gIGdldCBtb2RlbFNpZ25hdHVyZSgpOiB7fSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0IG1vZGVsU3RydWN0dXJlZE91dHB1dEtleXMoKToge30ge1xuICAgIHJldHVybiB0aGlzLnN0cnVjdHVyZWRPdXRwdXRLZXlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBtb2RlbFVybCB1cmwgZm9yIHRoZSBtb2RlbCwgb3IgYW4gYGlvLklPSGFuZGxlcmAuXG4gICAqIEBwYXJhbSB3ZWlnaHRNYW5pZmVzdFVybCB1cmwgZm9yIHRoZSB3ZWlnaHQgZmlsZSBnZW5lcmF0ZWQgYnlcbiAgICogc2NyaXB0cy9jb252ZXJ0LnB5IHNjcmlwdC5cbiAgICogQHBhcmFtIHJlcXVlc3RPcHRpb24gb3B0aW9ucyBmb3IgUmVxdWVzdCwgd2hpY2ggYWxsb3dzIHRvIHNlbmQgY3JlZGVudGlhbHNcbiAgICogYW5kIGN1c3RvbSBoZWFkZXJzLlxuICAgKiBAcGFyYW0gb25Qcm9ncmVzcyBPcHRpb25hbCwgcHJvZ3Jlc3MgY2FsbGJhY2sgZnVuY3Rpb24sIGZpcmVkIHBlcmlvZGljYWxseVxuICAgKiBiZWZvcmUgdGhlIGxvYWQgaXMgY29tcGxldGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIG1vZGVsVXJsOiBNb2RlbFVSTCwgcHJpdmF0ZSBsb2FkT3B0aW9uczogaW8uTG9hZE9wdGlvbnMgPSB7fSxcbiAgICAgIHRmaW8gPSBpbykge1xuICAgIHRoaXMuaW8gPSB0ZmlvO1xuICAgIGlmIChsb2FkT3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmxvYWRPcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMucmVzb3VyY2VNYW5hZ2VyID0gbmV3IFJlc291cmNlTWFuYWdlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kSU9IYW5kbGVyKCkge1xuICAgIHR5cGUgSU9IYW5kbGVyID0gVXJsSU9IYW5kbGVyPE1vZGVsVVJMPjtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5tb2RlbFVybDtcbiAgICBpZiAoKHBhdGggYXMgaW8uSU9IYW5kbGVyKS5sb2FkICE9IG51bGwpIHtcbiAgICAgIC8vIFBhdGggaXMgYW4gSU8gSGFuZGxlci5cbiAgICAgIHRoaXMuaGFuZGxlciA9IHBhdGggYXMgSU9IYW5kbGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2FkT3B0aW9ucy5yZXF1ZXN0SW5pdCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmhhbmRsZXIgPSB0aGlzLmlvLmJyb3dzZXJIVFRQUmVxdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoIGFzIHN0cmluZywgdGhpcy5sb2FkT3B0aW9ucykgYXMgSU9IYW5kbGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBoYW5kbGVycyA9XG4gICAgICAgICAgdGhpcy5pby5nZXRMb2FkSGFuZGxlcnMocGF0aCBhcyBzdHJpbmcsIHRoaXMubG9hZE9wdGlvbnMpO1xuICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eTogaWYgbm8gbG9hZCBoYW5kbGVyIGNhbiBiZSBmb3VuZCxcbiAgICAgICAgLy8gYXNzdW1lIGl0IGlzIGEgcmVsYXRpdmUgaHR0cCBwYXRoLlxuICAgICAgICBoYW5kbGVycy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5pby5icm93c2VySFRUUFJlcXVlc3QocGF0aCBhcyBzdHJpbmcsIHRoaXMubG9hZE9wdGlvbnMpKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFuZGxlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRm91bmQgbW9yZSB0aGFuIG9uZSAoJHtoYW5kbGVycy5sZW5ndGh9KSBsb2FkIGhhbmRsZXJzIGZvciBgICtcbiAgICAgICAgICAgIGBVUkwgJyR7W3BhdGhdfSdgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXJzWzBdIGFzIElPSGFuZGxlcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIG1vZGVsIGFuZCB3ZWlnaHQgZmlsZXMsIGNvbnN0cnVjdCB0aGUgaW4gbWVtb3J5IHdlaWdodCBtYXAgYW5kXG4gICAqIGNvbXBpbGUgdGhlIGluZmVyZW5jZSBncmFwaC5cbiAgICovXG4gIGxvYWQoKTogVXJsSU9IYW5kbGVyPE1vZGVsVVJMPiBleHRlbmRzIGlvLklPSGFuZGxlclN5bmM/IGJvb2xlYW46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICB0eXBlIElPSGFuZGxlciA9IFVybElPSGFuZGxlcjxNb2RlbFVSTD47XG4gICAgdGhpcy5maW5kSU9IYW5kbGVyKCk7XG4gICAgaWYgKHRoaXMuaGFuZGxlci5sb2FkID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHByb2NlZWQgd2l0aCBtb2RlbCBsb2FkaW5nIGJlY2F1c2UgdGhlIElPSGFuZGxlciBwcm92aWRlZCAnICtcbiAgICAgICAgICAnZG9lcyBub3QgaGF2ZSB0aGUgYGxvYWRgIG1ldGhvZCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG5cbiAgICB0eXBlIFJlc3VsdCA9XG4gICAgICAgIElPSGFuZGxlciBleHRlbmRzIGlvLklPSGFuZGxlclN5bmMgPyBib29sZWFuIDogUHJvbWlzZTxib29sZWFuPjtcblxuICAgIGNvbnN0IGxvYWRSZXN1bHQgPSB0aGlzLmhhbmRsZXIubG9hZCgpIGFzIFJldHVyblR5cGU8SU9IYW5kbGVyWydsb2FkJ10+O1xuICAgIGlmICh1dGlsLmlzUHJvbWlzZShsb2FkUmVzdWx0KSkge1xuICAgICAgcmV0dXJuIGxvYWRSZXN1bHQudGhlbihhcnRpZmFjdHMgPT4ge1xuICAgICAgICBpZiAoYXJ0aWZhY3RzLmdldFdlaWdodFN0cmVhbSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubG9hZFN5bmMoYXJ0aWZhY3RzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkU3RyZWFtaW5nKGFydGlmYWN0cyk7XG4gICAgICB9KSBhcyBSZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZFN5bmMobG9hZFJlc3VsdCkgYXMgUmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9ub3VzbHkgY29uc3RydWN0IHRoZSBpbiBtZW1vcnkgd2VpZ2h0IG1hcCBhbmRcbiAgICogY29tcGlsZSB0aGUgaW5mZXJlbmNlIGdyYXBoLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnLCBpZ25vcmVDSTogdHJ1ZX1cbiAgICovXG4gIGxvYWRTeW5jKGFydGlmYWN0czogaW8uTW9kZWxBcnRpZmFjdHMpIHtcbiAgICBjb25zdCB3ZWlnaHRNYXAgPSB0aGlzLmlvLmRlY29kZVdlaWdodHMoXG4gICAgICAgIGFydGlmYWN0cy53ZWlnaHREYXRhLCBhcnRpZmFjdHMud2VpZ2h0U3BlY3MpO1xuXG4gICAgcmV0dXJuIHRoaXMubG9hZFdpdGhXZWlnaHRNYXAoYXJ0aWZhY3RzLCB3ZWlnaHRNYXApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkU3RyZWFtaW5nKGFydGlmYWN0czogaW8uTW9kZWxBcnRpZmFjdHMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoYXJ0aWZhY3RzLmdldFdlaWdodFN0cmVhbSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGVsIGFydGlmYWN0cyBtaXNzaW5nIHN0cmVhbVdlaWdodHMgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWlnaHRNYXAgPSBhd2FpdCBkZWNvZGVXZWlnaHRzU3RyZWFtKFxuICAgICAgYXJ0aWZhY3RzLmdldFdlaWdodFN0cmVhbSgpLCBhcnRpZmFjdHMud2VpZ2h0U3BlY3MpO1xuXG4gICAgcmV0dXJuIHRoaXMubG9hZFdpdGhXZWlnaHRNYXAoYXJ0aWZhY3RzLCB3ZWlnaHRNYXApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkV2l0aFdlaWdodE1hcChhcnRpZmFjdHM6IGlvLk1vZGVsQXJ0aWZhY3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodE1hcDogTmFtZWRUZW5zb3JNYXApIHtcbiAgICB0aGlzLmFydGlmYWN0cyA9IGFydGlmYWN0cztcbiAgICBjb25zdCBncmFwaCA9IHRoaXMuYXJ0aWZhY3RzLm1vZGVsVG9wb2xvZ3kgYXMgdGVuc29yZmxvdy5JR3JhcGhEZWY7XG5cbiAgICBsZXQgc2lnbmF0dXJlID0gdGhpcy5hcnRpZmFjdHMuc2lnbmF0dXJlO1xuICAgIGlmICh0aGlzLmFydGlmYWN0cy51c2VyRGVmaW5lZE1ldGFkYXRhICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5hcnRpZmFjdHMudXNlckRlZmluZWRNZXRhZGF0YTtcbiAgICAgIGlmIChtZXRhZGF0YS5zaWduYXR1cmUgIT0gbnVsbCkge1xuICAgICAgICBzaWduYXR1cmUgPSBtZXRhZGF0YS5zaWduYXR1cmU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhZGF0YS5zdHJ1Y3R1cmVkT3V0cHV0S2V5cyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RydWN0dXJlZE91dHB1dEtleXMgPSBtZXRhZGF0YS5zdHJ1Y3R1cmVkT3V0cHV0S2V5cyBhcyBzdHJpbmdbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG5cbiAgICB0aGlzLnZlcnNpb24gPSBgJHtncmFwaC52ZXJzaW9ucy5wcm9kdWNlcn0uJHtncmFwaC52ZXJzaW9ucy5taW5Db25zdW1lcn1gO1xuICAgIHRoaXMuZXhlY3V0b3IgPSBuZXcgR3JhcGhFeGVjdXRvcihcbiAgICAgICAgT3BlcmF0aW9uTWFwcGVyLkluc3RhbmNlLnRyYW5zZm9ybUdyYXBoKGdyYXBoLCB0aGlzLnNpZ25hdHVyZSkpO1xuICAgIHRoaXMuZXhlY3V0b3Iud2VpZ2h0TWFwID0gdGhpcy5jb252ZXJ0VGVuc29yTWFwVG9UZW5zb3JzTWFwKHdlaWdodE1hcCk7XG4gICAgLy8gQXR0YWNoIGEgbW9kZWwtbGV2ZWwgcmVzb3VyY2VNYW5hZ2VyIHRvIGVhY2ggZXhlY3V0b3IgdG8gc2hhcmUgcmVzb3VyY2VzLFxuICAgIC8vIHN1Y2ggYXMgYEhhc2hUYWJsZWAuXG4gICAgdGhpcy5leGVjdXRvci5yZXNvdXJjZU1hbmFnZXIgPSB0aGlzLnJlc291cmNlTWFuYWdlcjtcblxuICAgIGlmIChhcnRpZmFjdHMubW9kZWxJbml0aWFsaXplciAhPSBudWxsICYmXG4gICAgICAgIChhcnRpZmFjdHMubW9kZWxJbml0aWFsaXplciBhcyB0ZW5zb3JmbG93LklHcmFwaERlZikubm9kZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBpbml0aWFsaXplciA9XG4gICAgICAgICAgT3BlcmF0aW9uTWFwcGVyLkluc3RhbmNlLnRyYW5zZm9ybUdyYXBoKGFydGlmYWN0cy5tb2RlbEluaXRpYWxpemVyKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZXIgPSBuZXcgR3JhcGhFeGVjdXRvcihpbml0aWFsaXplcik7XG4gICAgICB0aGlzLmluaXRpYWxpemVyLndlaWdodE1hcCA9IHRoaXMuZXhlY3V0b3Iud2VpZ2h0TWFwO1xuICAgICAgLy8gQXR0YWNoIGEgbW9kZWwtbGV2ZWwgcmVzb3VyY2VNYW5hZ2VyIHRvIHRoZSBpbml0aWFsaXplciwgdGhlXG4gICAgICAvLyBoYXNoVGFibGVzIGNyZWF0ZWQgZnJvbSB3aGVuIGV4ZWN1dGluZyB0aGUgaW5pdGlhbGl6ZXIgd2lsbCBiZSBzdG9yZWRcbiAgICAgIC8vIGluIHRoZSByZXNvdXJjZU1hbmFnZXIuXG4gICAgICB0aGlzLmluaXRpYWxpemVyLnJlc291cmNlTWFuYWdlciA9IHRoaXMucmVzb3VyY2VNYW5hZ2VyO1xuICAgICAgdGhpcy5pbml0aWFsaXplclNpZ25hdHVyZSA9IGFydGlmYWN0cy5pbml0aWFsaXplclNpZ25hdHVyZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSBjb25maWd1cmF0aW9uIGFuZC9vciB3ZWlnaHRzIG9mIHRoZSBHcmFwaE1vZGVsLlxuICAgKlxuICAgKiBBbiBgSU9IYW5kbGVyYCBpcyBhbiBvYmplY3QgdGhhdCBoYXMgYSBgc2F2ZWAgbWV0aG9kIG9mIHRoZSBwcm9wZXJcbiAgICogc2lnbmF0dXJlIGRlZmluZWQuIFRoZSBgc2F2ZWAgbWV0aG9kIG1hbmFnZXMgdGhlIHN0b3Jpbmcgb3JcbiAgICogdHJhbnNtaXNzaW9uIG9mIHNlcmlhbGl6ZWQgZGF0YSAoXCJhcnRpZmFjdHNcIikgdGhhdCByZXByZXNlbnQgdGhlXG4gICAqIG1vZGVsJ3MgdG9wb2xvZ3kgYW5kIHdlaWdodHMgb250byBvciB2aWEgYSBzcGVjaWZpYyBtZWRpdW0sIHN1Y2ggYXNcbiAgICogZmlsZSBkb3dubG9hZHMsIGxvY2FsIHN0b3JhZ2UsIEluZGV4ZWREQiBpbiB0aGUgd2ViIGJyb3dzZXIgYW5kIEhUVFBcbiAgICogcmVxdWVzdHMgdG8gYSBzZXJ2ZXIuIFRlbnNvckZsb3cuanMgcHJvdmlkZXMgYElPSGFuZGxlcmBcbiAgICogaW1wbGVtZW50YXRpb25zIGZvciBhIG51bWJlciBvZiBmcmVxdWVudGx5IHVzZWQgc2F2aW5nIG1lZGl1bXMsIHN1Y2ggYXNcbiAgICogYHRmLmlvLmJyb3dzZXJEb3dubG9hZHNgIGFuZCBgdGYuaW8uYnJvd3NlckxvY2FsU3RvcmFnZWAuIFNlZSBgdGYuaW9gXG4gICAqIGZvciBtb3JlIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFsc28gYWxsb3dzIHlvdSB0byByZWZlciB0byBjZXJ0YWluIHR5cGVzIG9mIGBJT0hhbmRsZXJgc1xuICAgKiBhcyBVUkwtbGlrZSBzdHJpbmcgc2hvcnRjdXRzLCBzdWNoIGFzICdsb2NhbHN0b3JhZ2U6Ly8nIGFuZFxuICAgKiAnaW5kZXhlZGRiOi8vJy5cbiAgICpcbiAgICogRXhhbXBsZSAxOiBTYXZlIGBtb2RlbGAncyB0b3BvbG9neSBhbmQgd2VpZ2h0cyB0byBicm93c2VyIFtsb2NhbFxuICAgKiBzdG9yYWdlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2xvY2FsU3RvcmFnZSk7XG4gICAqIHRoZW4gbG9hZCBpdCBiYWNrLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBtb2RlbFVybCA9XG4gICAqICAgICdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdGZqcy1tb2RlbHMvc2F2ZWRtb2RlbC9tb2JpbGVuZXRfdjJfMS4wXzIyNC9tb2RlbC5qc29uJztcbiAgICogY29uc3QgbW9kZWwgPSBhd2FpdCB0Zi5sb2FkR3JhcGhNb2RlbChtb2RlbFVybCk7XG4gICAqIGNvbnN0IHplcm9zID0gdGYuemVyb3MoWzEsIDIyNCwgMjI0LCAzXSk7XG4gICAqIG1vZGVsLnByZWRpY3QoemVyb3MpLnByaW50KCk7XG4gICAqXG4gICAqIGNvbnN0IHNhdmVSZXN1bHRzID0gYXdhaXQgbW9kZWwuc2F2ZSgnbG9jYWxzdG9yYWdlOi8vbXktbW9kZWwtMScpO1xuICAgKlxuICAgKiBjb25zdCBsb2FkZWRNb2RlbCA9IGF3YWl0IHRmLmxvYWRHcmFwaE1vZGVsKCdsb2NhbHN0b3JhZ2U6Ly9teS1tb2RlbC0xJyk7XG4gICAqIGNvbnNvbGUubG9nKCdQcmVkaWN0aW9uIGZyb20gbG9hZGVkIG1vZGVsOicpO1xuICAgKiBtb2RlbC5wcmVkaWN0KHplcm9zKS5wcmludCgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGhhbmRsZXJPclVSTCBBbiBpbnN0YW5jZSBvZiBgSU9IYW5kbGVyYCBvciBhIFVSTC1saWtlLFxuICAgKiBzY2hlbWUtYmFzZWQgc3RyaW5nIHNob3J0Y3V0IGZvciBgSU9IYW5kbGVyYC5cbiAgICogQHBhcmFtIGNvbmZpZyBPcHRpb25zIGZvciBzYXZpbmcgdGhlIG1vZGVsLlxuICAgKiBAcmV0dXJucyBBIGBQcm9taXNlYCBvZiBgU2F2ZVJlc3VsdGAsIHdoaWNoIHN1bW1hcml6ZXMgdGhlIHJlc3VsdCBvZlxuICAgKiB0aGUgc2F2aW5nLCBzdWNoIGFzIGJ5dGUgc2l6ZXMgb2YgdGhlIHNhdmVkIGFydGlmYWN0cyBmb3IgdGhlIG1vZGVsJ3NcbiAgICogICB0b3BvbG9neSBhbmQgd2VpZ2h0IHZhbHVlcy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJywgaWdub3JlQ0k6IHRydWV9XG4gICAqL1xuICBhc3luYyBzYXZlKGhhbmRsZXJPclVSTDogaW8uSU9IYW5kbGVyfHN0cmluZywgY29uZmlnPzogaW8uU2F2ZUNvbmZpZyk6XG4gICAgICBQcm9taXNlPGlvLlNhdmVSZXN1bHQ+IHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXJPclVSTCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5pby5nZXRTYXZlSGFuZGxlcnMoaGFuZGxlck9yVVJMKTtcbiAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYENhbm5vdCBmaW5kIGFueSBzYXZlIGhhbmRsZXJzIGZvciBVUkwgJyR7aGFuZGxlck9yVVJMfSdgKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFuZGxlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgRm91bmQgbW9yZSB0aGFuIG9uZSAoJHtoYW5kbGVycy5sZW5ndGh9KSBzYXZlIGhhbmRsZXJzIGZvciBgICtcbiAgICAgICAgICAgIGBVUkwgJyR7aGFuZGxlck9yVVJMfSdgKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXJPclVSTCA9IGhhbmRsZXJzWzBdO1xuICAgIH1cbiAgICBpZiAoaGFuZGxlck9yVVJMLnNhdmUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdHcmFwaE1vZGVsLnNhdmUoKSBjYW5ub3QgcHJvY2VlZCBiZWNhdXNlIHRoZSBJT0hhbmRsZXIgJyArXG4gICAgICAgICAgJ3Byb3ZpZGVkIGRvZXMgbm90IGhhdmUgdGhlIGBzYXZlYCBhdHRyaWJ1dGUgZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlck9yVVJMLnNhdmUodGhpcy5hcnRpZmFjdHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHJ1Y3R1cmVkT3V0cHV0TmFtZXMob3V0cHV0VGVuc29yczogVGVuc29yfFRlbnNvcltdKSB7XG4gICAgaWYgKHRoaXMuc3RydWN0dXJlZE91dHB1dEtleXMpIHtcbiAgICAgIGNvbnN0IG91dHB1dFRlbnNvcnNBcnJheSA9XG4gICAgICAgICAgb3V0cHV0VGVuc29ycyBpbnN0YW5jZW9mIFRlbnNvciA/IFtvdXRwdXRUZW5zb3JzXSA6IG91dHB1dFRlbnNvcnM7XG4gICAgICBjb25zdCBvdXRwdXRUZW5zb3JNYXA6IE5hbWVkVGVuc29yTWFwID0ge307XG5cbiAgICAgIG91dHB1dFRlbnNvcnNBcnJheS5mb3JFYWNoKFxuICAgICAgICAgIChvdXRwdXRUZW5zb3IsIGkpID0+IG91dHB1dFRlbnNvck1hcFt0aGlzLnN0cnVjdHVyZWRPdXRwdXRLZXlzW2ldXSA9XG4gICAgICAgICAgICAgIG91dHB1dFRlbnNvcik7XG5cbiAgICAgIHJldHVybiBvdXRwdXRUZW5zb3JNYXA7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRUZW5zb3JzO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgdGhlIGluZmVyZW5jZSBmb3IgdGhlIGlucHV0IHRlbnNvcnMuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBUaGUgaW5wdXQgdGVuc29ycywgd2hlbiB0aGVyZSBpcyBzaW5nbGUgaW5wdXQgZm9yIHRoZSBtb2RlbCxcbiAgICogaW5wdXRzIHBhcmFtIHNob3VsZCBiZSBhIGB0Zi5UZW5zb3JgLiBGb3IgbW9kZWxzIHdpdGggbXVsdGlwbGUgaW5wdXRzLFxuICAgKiBpbnB1dHMgcGFyYW1zIHNob3VsZCBiZSBpbiBlaXRoZXIgYHRmLlRlbnNvcmBbXSBpZiB0aGUgaW5wdXQgb3JkZXIgaXNcbiAgICogZml4ZWQsIG9yIG90aGVyd2lzZSBOYW1lZFRlbnNvck1hcCBmb3JtYXQuXG4gICAqXG4gICAqIEZvciBtb2RlbCB3aXRoIG11bHRpcGxlIGlucHV0cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgTmFtZWRUZW5zb3JNYXAgYXMgdGhlXG4gICAqIGlucHV0IHR5cGUsIGlmIHlvdSB1c2UgYHRmLlRlbnNvcmBbXSwgdGhlIG9yZGVyIG9mIHRoZSBhcnJheSBuZWVkcyB0b1xuICAgKiBmb2xsb3cgdGhlXG4gICAqIG9yZGVyIG9mIGlucHV0Tm9kZXMgYXJyYXkuIEBzZWUge0BsaW5rIEdyYXBoTW9kZWwuaW5wdXROb2Rlc31cbiAgICpcbiAgICogWW91IGNhbiBhbHNvIGZlZWQgYW55IGludGVybWVkaWF0ZSBub2RlcyB1c2luZyB0aGUgTmFtZWRUZW5zb3JNYXAgYXMgdGhlXG4gICAqIGlucHV0IHR5cGUuIEZvciBleGFtcGxlLCBnaXZlbiB0aGUgZ3JhcGhcbiAgICogICAgSW5wdXROb2RlID0+IEludGVybWVkaWF0ZSA9PiBPdXRwdXROb2RlLFxuICAgKiB5b3UgY2FuIGV4ZWN1dGUgdGhlIHN1YmdyYXBoIEludGVybWVkaWF0ZSA9PiBPdXRwdXROb2RlIGJ5IGNhbGxpbmdcbiAgICogICAgbW9kZWwuZXhlY3V0ZSgnSW50ZXJtZWRpYXRlTm9kZScgOiB0Zi50ZW5zb3IoLi4uKSk7XG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBtb2RlbHMgdGhhdCB1c2VzIHRmLmR5bmFtaWNfcm5uLCB3aGVyZSB0aGUgaW50ZXJtZWRpYXRlXG4gICAqIHN0YXRlIG5lZWRzIHRvIGJlIGZlZCBtYW51YWxseS5cbiAgICpcbiAgICogRm9yIGJhdGNoIGluZmVyZW5jZSBleGVjdXRpb24sIHRoZSB0ZW5zb3JzIGZvciBlYWNoIGlucHV0IG5lZWQgdG8gYmVcbiAgICogY29uY2F0ZW5hdGVkIHRvZ2V0aGVyLiBGb3IgZXhhbXBsZSB3aXRoIG1vYmlsZW5ldCwgdGhlIHJlcXVpcmVkIGlucHV0IHNoYXBlXG4gICAqIGlzIFsxLCAyNDQsIDI0NCwgM10sIHdoaWNoIHJlcHJlc2VudHMgdGhlIFtiYXRjaCwgaGVpZ2h0LCB3aWR0aCwgY2hhbm5lbF0uXG4gICAqIElmIHdlIGFyZSBwcm92aWRlIGEgYmF0Y2hlZCBkYXRhIG9mIDEwMCBpbWFnZXMsIHRoZSBpbnB1dCB0ZW5zb3Igc2hvdWxkIGJlXG4gICAqIGluIHRoZSBzaGFwZSBvZiBbMTAwLCAyNDQsIDI0NCwgM10uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgUHJlZGljdGlvbiBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZ5aW5nIHRoZSBiYXRjaCBzaXplLlxuICAgKiBDdXJyZW50bHkgdGhlIGJhdGNoIHNpemUgb3B0aW9uIGlzIGlnbm9yZWQgZm9yIGdyYXBoIG1vZGVsLlxuICAgKlxuICAgKiBAcmV0dXJucyBJbmZlcmVuY2UgcmVzdWx0IHRlbnNvcnMuIElmIHRoZSBtb2RlbCBpcyBjb252ZXJ0ZWQgYW5kIGl0XG4gICAqIG9yaWdpbmFsbHkgaGFkIHN0cnVjdHVyZWRfb3V0cHV0cyBpbiB0ZW5zb3JmbG93LCB0aGVuIGEgTmFtZWRUZW5zb3JNYXBcbiAgICogd2lsbCBiZSByZXR1cm5lZCBtYXRjaGluZyB0aGUgc3RydWN0dXJlZF9vdXRwdXRzLiBJZiBubyBzdHJ1Y3R1cmVkX291dHB1dHNcbiAgICogYXJlIHByZXNlbnQsIHRoZSBvdXRwdXQgd2lsbCBiZSBzaW5nbGUgYHRmLlRlbnNvcmAgaWYgdGhlIG1vZGVsIGhhcyBzaW5nbGVcbiAgICogb3V0cHV0IG5vZGUsIG90aGVyd2lzZSBUZW5zb3JbXS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIHByZWRpY3QoaW5wdXRzOiBUZW5zb3J8VGVuc29yW118TmFtZWRUZW5zb3JNYXAsIGNvbmZpZz86IE1vZGVsUHJlZGljdENvbmZpZyk6XG4gICAgICBUZW5zb3J8VGVuc29yW118TmFtZWRUZW5zb3JNYXAge1xuICAgIGNvbnN0IG91dHB1dFRlbnNvcnMgPSB0aGlzLmV4ZWN1dGUoaW5wdXRzLCB0aGlzLm91dHB1dE5vZGVzKTtcbiAgICByZXR1cm4gdGhpcy5hZGRTdHJ1Y3R1cmVkT3V0cHV0TmFtZXMob3V0cHV0VGVuc29ycyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSB0aGUgaW5mZXJlbmNlIGZvciB0aGUgaW5wdXQgdGVuc29ycyBpbiBhc3luYyBmYXNoaW9uLCB1c2UgdGhpc1xuICAgKiBtZXRob2Qgd2hlbiB5b3VyIG1vZGVsIGNvbnRhaW5zIGNvbnRyb2wgZmxvdyBvcHMuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBUaGUgaW5wdXQgdGVuc29ycywgd2hlbiB0aGVyZSBpcyBzaW5nbGUgaW5wdXQgZm9yIHRoZSBtb2RlbCxcbiAgICogaW5wdXRzIHBhcmFtIHNob3VsZCBiZSBhIGB0Zi5UZW5zb3JgLiBGb3IgbW9kZWxzIHdpdGggbXV0bGlwbGUgaW5wdXRzLFxuICAgKiBpbnB1dHMgcGFyYW1zIHNob3VsZCBiZSBpbiBlaXRoZXIgYHRmLlRlbnNvcmBbXSBpZiB0aGUgaW5wdXQgb3JkZXIgaXNcbiAgICogZml4ZWQsIG9yIG90aGVyd2lzZSBOYW1lZFRlbnNvck1hcCBmb3JtYXQuXG4gICAqXG4gICAqIEZvciBtb2RlbCB3aXRoIG11bHRpcGxlIGlucHV0cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgTmFtZWRUZW5zb3JNYXAgYXMgdGhlXG4gICAqIGlucHV0IHR5cGUsIGlmIHlvdSB1c2UgYHRmLlRlbnNvcmBbXSwgdGhlIG9yZGVyIG9mIHRoZSBhcnJheSBuZWVkcyB0b1xuICAgKiBmb2xsb3cgdGhlXG4gICAqIG9yZGVyIG9mIGlucHV0Tm9kZXMgYXJyYXkuIEBzZWUge0BsaW5rIEdyYXBoTW9kZWwuaW5wdXROb2Rlc31cbiAgICpcbiAgICogWW91IGNhbiBhbHNvIGZlZWQgYW55IGludGVybWVkaWF0ZSBub2RlcyB1c2luZyB0aGUgTmFtZWRUZW5zb3JNYXAgYXMgdGhlXG4gICAqIGlucHV0IHR5cGUuIEZvciBleGFtcGxlLCBnaXZlbiB0aGUgZ3JhcGhcbiAgICogICAgSW5wdXROb2RlID0+IEludGVybWVkaWF0ZSA9PiBPdXRwdXROb2RlLFxuICAgKiB5b3UgY2FuIGV4ZWN1dGUgdGhlIHN1YmdyYXBoIEludGVybWVkaWF0ZSA9PiBPdXRwdXROb2RlIGJ5IGNhbGxpbmdcbiAgICogICAgbW9kZWwuZXhlY3V0ZSgnSW50ZXJtZWRpYXRlTm9kZScgOiB0Zi50ZW5zb3IoLi4uKSk7XG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBtb2RlbHMgdGhhdCB1c2VzIHRmLmR5bmFtaWNfcm5uLCB3aGVyZSB0aGUgaW50ZXJtZWRpYXRlXG4gICAqIHN0YXRlIG5lZWRzIHRvIGJlIGZlZCBtYW51YWxseS5cbiAgICpcbiAgICogRm9yIGJhdGNoIGluZmVyZW5jZSBleGVjdXRpb24sIHRoZSB0ZW5zb3JzIGZvciBlYWNoIGlucHV0IG5lZWQgdG8gYmVcbiAgICogY29uY2F0ZW5hdGVkIHRvZ2V0aGVyLiBGb3IgZXhhbXBsZSB3aXRoIG1vYmlsZW5ldCwgdGhlIHJlcXVpcmVkIGlucHV0IHNoYXBlXG4gICAqIGlzIFsxLCAyNDQsIDI0NCwgM10sIHdoaWNoIHJlcHJlc2VudHMgdGhlIFtiYXRjaCwgaGVpZ2h0LCB3aWR0aCwgY2hhbm5lbF0uXG4gICAqIElmIHdlIGFyZSBwcm92aWRlIGEgYmF0Y2hlZCBkYXRhIG9mIDEwMCBpbWFnZXMsIHRoZSBpbnB1dCB0ZW5zb3Igc2hvdWxkIGJlXG4gICAqIGluIHRoZSBzaGFwZSBvZiBbMTAwLCAyNDQsIDI0NCwgM10uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgUHJlZGljdGlvbiBjb25maWd1cmF0aW9uIGZvciBzcGVjaWZ5aW5nIHRoZSBiYXRjaCBzaXplLlxuICAgKiBDdXJyZW50bHkgdGhlIGJhdGNoIHNpemUgb3B0aW9uIGlzIGlnbm9yZWQgZm9yIGdyYXBoIG1vZGVsLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIFByb21pc2Ugb2YgaW5mZXJlbmNlIHJlc3VsdCB0ZW5zb3JzLiBJZiB0aGUgbW9kZWwgaXMgY29udmVydGVkXG4gICAqIGFuZCBpdCBvcmlnaW5hbGx5IGhhZCBzdHJ1Y3R1cmVkX291dHB1dHMgaW4gdGVuc29yZmxvdywgdGhlbiBhXG4gICAqIE5hbWVkVGVuc29yTWFwIHdpbGwgYmUgcmV0dXJuZWQgbWF0Y2hpbmcgdGhlIHN0cnVjdHVyZWRfb3V0cHV0cy4gSWYgbm9cbiAgICogc3RydWN0dXJlZF9vdXRwdXRzIGFyZSBwcmVzZW50LCB0aGUgb3V0cHV0IHdpbGwgYmUgc2luZ2xlIGB0Zi5UZW5zb3JgIGlmXG4gICAqIHRoZSBtb2RlbCBoYXMgc2luZ2xlIG91dHB1dCBub2RlLCBvdGhlcndpc2UgVGVuc29yW10uXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhc3luYyBwcmVkaWN0QXN5bmMoXG4gICAgICBpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXXxOYW1lZFRlbnNvck1hcCxcbiAgICAgIGNvbmZpZz86IE1vZGVsUHJlZGljdENvbmZpZyk6IFByb21pc2U8VGVuc29yfFRlbnNvcltdfE5hbWVkVGVuc29yTWFwPiB7XG4gICAgY29uc3Qgb3V0cHV0VGVuc29ycyA9IGF3YWl0IHRoaXMuZXhlY3V0ZUFzeW5jKGlucHV0cywgdGhpcy5vdXRwdXROb2Rlcyk7XG4gICAgcmV0dXJuIHRoaXMuYWRkU3RydWN0dXJlZE91dHB1dE5hbWVzKG91dHB1dFRlbnNvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVJbnB1dHMoaW5wdXRzOiBUZW5zb3J8VGVuc29yW118XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVkVGVuc29yTWFwKTogTmFtZWRUZW5zb3JNYXAge1xuICAgIGlmICghKGlucHV0cyBpbnN0YW5jZW9mIFRlbnNvcikgJiYgIUFycmF5LmlzQXJyYXkoaW5wdXRzKSkge1xuICAgICAgLy8gVGhlIGlucHV0IGlzIGFscmVhZHkgYSBOYW1lZFRlbnNvck1hcC5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUlucHV0cyA9IHRoaXMuc2lnbmF0dXJlPy5pbnB1dHM7XG4gICAgICBpZiAoc2lnbmF0dXJlSW5wdXRzICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dCBpbiBzaWduYXR1cmVJbnB1dHMpIHtcbiAgICAgICAgICBjb25zdCB0ZW5zb3IgPSBzaWduYXR1cmVJbnB1dHNbaW5wdXRdO1xuICAgICAgICAgIGlmICh0ZW5zb3IucmVzb3VyY2VJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbnB1dHNbaW5wdXRdID0gdGhpcy5yZXNvdXJjZUlkVG9DYXB0dXJlZElucHV0W3RlbnNvci5yZXNvdXJjZUlkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpbnB1dHM7XG4gICAgfVxuICAgIGlucHV0cyA9IEFycmF5LmlzQXJyYXkoaW5wdXRzKSA/IGlucHV0cyA6IFtpbnB1dHNdO1xuXG4gICAgY29uc3QgbnVtQ2FwdHVyZWRJbnB1dHMgPVxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlSWRUb0NhcHR1cmVkSW5wdXQpLmxlbmd0aDtcbiAgICBpZiAoaW5wdXRzLmxlbmd0aCArIG51bUNhcHR1cmVkSW5wdXRzICE9PSB0aGlzLmlucHV0Tm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0IHRlbnNvciBjb3VudCBtaXNtYXRjaCwgdGhlIGdyYXBoIG1vZGVsIGhhcyAke1xuICAgICAgICAgIHRoaXMuaW5wdXROb2Rlcy5sZW5ndGggLVxuICAgICAgICAgIG51bUNhcHR1cmVkSW5wdXRzfSBub24tcmVzb3VyY2UgcGxhY2Vob2xkZXJzLCB3aGlsZSB0aGVyZSBhcmUgJHtcbiAgICAgICAgICBpbnB1dHMubGVuZ3RofSBpbnB1dCB0ZW5zb3JzIHByb3ZpZGVkLmApO1xuICAgIH1cblxuICAgIGxldCBpbnB1dEluZGV4ID0gMDtcbiAgICByZXR1cm4gdGhpcy5pbnB1dE5vZGVzLnJlZHVjZSgobWFwLCBpbnB1dE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHJlc291cmNlSWQgPSB0aGlzLnNpZ25hdHVyZT8uaW5wdXRzPy5baW5wdXROYW1lXT8ucmVzb3VyY2VJZDtcbiAgICAgIGlmIChyZXNvdXJjZUlkICE9IG51bGwpIHtcbiAgICAgICAgbWFwW2lucHV0TmFtZV0gPSB0aGlzLnJlc291cmNlSWRUb0NhcHR1cmVkSW5wdXRbcmVzb3VyY2VJZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXBbaW5wdXROYW1lXSA9IChpbnB1dHMgYXMgVGVuc29yW10pW2lucHV0SW5kZXgrK107XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9IGFzIE5hbWVkVGVuc29yTWFwKTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplT3V0cHV0cyhvdXRwdXRzOiBzdHJpbmd8c3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgb3V0cHV0cyA9IG91dHB1dHMgfHwgdGhpcy5vdXRwdXROb2RlcztcbiAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkob3V0cHV0cykgPyBbb3V0cHV0c10gOiBvdXRwdXRzO1xuICB9XG5cbiAgcHJpdmF0ZSBleGVjdXRlSW5pdGlhbGl6ZXJHcmFwaCgpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmluaXRpYWxpemVyU2lnbmF0dXJlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxpemVyLmV4ZWN1dGUoe30sIFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZXIuZXhlY3V0ZShcbiAgICAgICAgICB7fSwgT2JqZWN0LmtleXModGhpcy5pbml0aWFsaXplclNpZ25hdHVyZS5vdXRwdXRzKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBleGVjdXRlSW5pdGlhbGl6ZXJHcmFwaEFzeW5jKCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZXJTaWduYXR1cmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZXIuZXhlY3V0ZUFzeW5jKHt9LCBbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxpemVyLmV4ZWN1dGVBc3luYyhcbiAgICAgICAgICB7fSwgT2JqZWN0LmtleXModGhpcy5pbml0aWFsaXplclNpZ25hdHVyZS5vdXRwdXRzKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXNvdXJjZUlkVG9DYXB0dXJlZElucHV0KG91dHB1dHM6IFRlbnNvcltdKSB7XG4gICAgdGhpcy5yZXNvdXJjZUlkVG9DYXB0dXJlZElucHV0ID0ge307XG5cbiAgICBpZiAodGhpcy5pbml0aWFsaXplclNpZ25hdHVyZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlT3V0cHV0cyA9IHRoaXMuaW5pdGlhbGl6ZXJTaWduYXR1cmUub3V0cHV0cztcbiAgICAgIGNvbnN0IG91dHB1dE5hbWVzID0gT2JqZWN0LmtleXMoc2lnbmF0dXJlT3V0cHV0cyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHB1dE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG91dHB1dE5hbWUgPSBvdXRwdXROYW1lc1tpXTtcbiAgICAgICAgY29uc3QgdGVuc29ySW5mbyA9IHNpZ25hdHVyZU91dHB1dHNbb3V0cHV0TmFtZV07XG4gICAgICAgIHRoaXMucmVzb3VyY2VJZFRvQ2FwdHVyZWRJbnB1dFt0ZW5zb3JJbmZvLnJlc291cmNlSWRdID0gb3V0cHV0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgaW5mZXJlbmNlIGZvciB0aGUgbW9kZWwgZm9yIGdpdmVuIGlucHV0IHRlbnNvcnMuXG4gICAqIEBwYXJhbSBpbnB1dHMgdGVuc29yLCB0ZW5zb3IgYXJyYXkgb3IgdGVuc29yIG1hcCBvZiB0aGUgaW5wdXRzIGZvciB0aGVcbiAgICogbW9kZWwsIGtleWVkIGJ5IHRoZSBpbnB1dCBub2RlIG5hbWVzLlxuICAgKiBAcGFyYW0gb3V0cHV0cyBvdXRwdXQgbm9kZSBuYW1lIGZyb20gdGhlIFRlbnNvckZsb3cgbW9kZWwsIGlmIG5vXG4gICAqIG91dHB1dHMgYXJlIHNwZWNpZmllZCwgdGhlIGRlZmF1bHQgb3V0cHV0cyBvZiB0aGUgbW9kZWwgd291bGQgYmUgdXNlZC5cbiAgICogWW91IGNhbiBpbnNwZWN0IGludGVybWVkaWF0ZSBub2RlcyBvZiB0aGUgbW9kZWwgYnkgYWRkaW5nIHRoZW0gdG8gdGhlXG4gICAqIG91dHB1dHMgYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgc2luZ2xlIHRlbnNvciBpZiBwcm92aWRlZCB3aXRoIGEgc2luZ2xlIG91dHB1dCBvciBubyBvdXRwdXRzXG4gICAqIGFyZSBwcm92aWRlZCBhbmQgdGhlcmUgaXMgb25seSBvbmUgZGVmYXVsdCBvdXRwdXQsIG90aGVyd2lzZSByZXR1cm4gYVxuICAgKiB0ZW5zb3IgYXJyYXkuIFRoZSBvcmRlciBvZiB0aGUgdGVuc29yIGFycmF5IGlzIHRoZSBzYW1lIGFzIHRoZSBvdXRwdXRzXG4gICAqIGlmIHByb3ZpZGVkLCBvdGhlcndpc2UgdGhlIG9yZGVyIG9mIG91dHB1dE5vZGVzIGF0dHJpYnV0ZSBvZiB0aGUgbW9kZWwuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBleGVjdXRlKGlucHV0czogVGVuc29yfFRlbnNvcltdfE5hbWVkVGVuc29yTWFwLCBvdXRwdXRzPzogc3RyaW5nfHN0cmluZ1tdKTpcbiAgICAgIFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2VJZFRvQ2FwdHVyZWRJbnB1dCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlSWRUb0NhcHR1cmVkSW5wdXQodGhpcy5leGVjdXRlSW5pdGlhbGl6ZXJHcmFwaCgpKTtcbiAgICB9XG4gICAgaW5wdXRzID0gdGhpcy5ub3JtYWxpemVJbnB1dHMoaW5wdXRzKTtcbiAgICBvdXRwdXRzID0gdGhpcy5ub3JtYWxpemVPdXRwdXRzKG91dHB1dHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXhlY3V0b3IuZXhlY3V0ZShpbnB1dHMsIG91dHB1dHMpO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID4gMSA/IHJlc3VsdCA6IHJlc3VsdFswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBpbmZlcmVuY2UgZm9yIHRoZSBtb2RlbCBmb3IgZ2l2ZW4gaW5wdXQgdGVuc29ycyBpbiBhc3luY1xuICAgKiBmYXNoaW9uLCB1c2UgdGhpcyBtZXRob2Qgd2hlbiB5b3VyIG1vZGVsIGNvbnRhaW5zIGNvbnRyb2wgZmxvdyBvcHMuXG4gICAqIEBwYXJhbSBpbnB1dHMgdGVuc29yLCB0ZW5zb3IgYXJyYXkgb3IgdGVuc29yIG1hcCBvZiB0aGUgaW5wdXRzIGZvciB0aGVcbiAgICogbW9kZWwsIGtleWVkIGJ5IHRoZSBpbnB1dCBub2RlIG5hbWVzLlxuICAgKiBAcGFyYW0gb3V0cHV0cyBvdXRwdXQgbm9kZSBuYW1lIGZyb20gdGhlIFRlbnNvckZsb3cgbW9kZWwsIGlmIG5vIG91dHB1dHNcbiAgICogYXJlIHNwZWNpZmllZCwgdGhlIGRlZmF1bHQgb3V0cHV0cyBvZiB0aGUgbW9kZWwgd291bGQgYmUgdXNlZC4gWW91IGNhblxuICAgKiBpbnNwZWN0IGludGVybWVkaWF0ZSBub2RlcyBvZiB0aGUgbW9kZWwgYnkgYWRkaW5nIHRoZW0gdG8gdGhlIG91dHB1dHNcbiAgICogYXJyYXkuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgUHJvbWlzZSBvZiBzaW5nbGUgdGVuc29yIGlmIHByb3ZpZGVkIHdpdGggYSBzaW5nbGUgb3V0cHV0IG9yXG4gICAqIG5vIG91dHB1dHMgYXJlIHByb3ZpZGVkIGFuZCB0aGVyZSBpcyBvbmx5IG9uZSBkZWZhdWx0IG91dHB1dCwgb3RoZXJ3aXNlXG4gICAqIHJldHVybiBhIHRlbnNvciBtYXAuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhc3luYyBleGVjdXRlQXN5bmMoXG4gICAgICBpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXXxOYW1lZFRlbnNvck1hcCxcbiAgICAgIG91dHB1dHM/OiBzdHJpbmd8c3RyaW5nW10pOiBQcm9taXNlPFRlbnNvcnxUZW5zb3JbXT4ge1xuICAgIGlmICh0aGlzLnJlc291cmNlSWRUb0NhcHR1cmVkSW5wdXQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZUlkVG9DYXB0dXJlZElucHV0KFxuICAgICAgICAgIGF3YWl0IHRoaXMuZXhlY3V0ZUluaXRpYWxpemVyR3JhcGhBc3luYygpKTtcbiAgICB9XG4gICAgaW5wdXRzID0gdGhpcy5ub3JtYWxpemVJbnB1dHMoaW5wdXRzKTtcbiAgICBvdXRwdXRzID0gdGhpcy5ub3JtYWxpemVPdXRwdXRzKG91dHB1dHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZXhlY3V0b3IuZXhlY3V0ZUFzeW5jKGlucHV0cywgb3V0cHV0cyk7XG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAxID8gcmVzdWx0IDogcmVzdWx0WzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnRlcm1lZGlhdGUgdGVuc29ycyBmb3IgbW9kZWwgZGVidWdnaW5nIG1vZGUgKGZsYWdcbiAgICogS0VFUF9JTlRFUk1FRElBVEVfVEVOU09SUyBpcyB0cnVlKS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGdldEludGVybWVkaWF0ZVRlbnNvcnMoKTogTmFtZWRUZW5zb3JzTWFwIHtcbiAgICByZXR1cm4gdGhpcy5leGVjdXRvci5nZXRJbnRlcm1lZGlhdGVUZW5zb3JzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSBpbnRlcm1lZGlhdGUgdGVuc29ycyBmb3IgbW9kZWwgZGVidWdnaW5nIG1vZGUgKGZsYWdcbiAgICogS0VFUF9JTlRFUk1FRElBVEVfVEVOU09SUyBpcyB0cnVlKS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGRpc3Bvc2VJbnRlcm1lZGlhdGVUZW5zb3JzKCkge1xuICAgIHRoaXMuZXhlY3V0b3IuZGlzcG9zZUludGVybWVkaWF0ZVRlbnNvcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFRlbnNvck1hcFRvVGVuc29yc01hcChtYXA6IE5hbWVkVGVuc29yTWFwKTogTmFtZWRUZW5zb3JzTWFwIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5yZWR1Y2UoKG5ld01hcDogTmFtZWRUZW5zb3JzTWFwLCBrZXkpID0+IHtcbiAgICAgIG5ld01hcFtrZXldID0gW21hcFtrZXldXTtcbiAgICAgIHJldHVybiBuZXdNYXA7XG4gICAgfSwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIHRoZSBtZW1vcnkgdXNlZCBieSB0aGUgd2VpZ2h0IHRlbnNvcnMgYW5kIHJlc291cmNlTWFuYWdlci5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5leGVjdXRvci5kaXNwb3NlKCk7XG5cbiAgICBpZiAodGhpcy5pbml0aWFsaXplcikge1xuICAgICAgdGhpcy5pbml0aWFsaXplci5kaXNwb3NlKCk7XG4gICAgICBpZiAodGhpcy5yZXNvdXJjZUlkVG9DYXB0dXJlZElucHV0KSB7XG4gICAgICAgIGRpc3Bvc2UodGhpcy5yZXNvdXJjZUlkVG9DYXB0dXJlZElucHV0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc291cmNlTWFuYWdlci5kaXNwb3NlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkIGEgZ3JhcGggbW9kZWwgZ2l2ZW4gYSBVUkwgdG8gdGhlIG1vZGVsIGRlZmluaXRpb24uXG4gKlxuICogRXhhbXBsZSBvZiBsb2FkaW5nIE1vYmlsZU5ldFYyIGZyb20gYSBVUkwgYW5kIG1ha2luZyBhIHByZWRpY3Rpb24gd2l0aCBhXG4gKiB6ZXJvcyBpbnB1dDpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW9kZWxVcmwgPVxuICogICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS90ZmpzLW1vZGVscy9zYXZlZG1vZGVsL21vYmlsZW5ldF92Ml8xLjBfMjI0L21vZGVsLmpzb24nO1xuICogY29uc3QgbW9kZWwgPSBhd2FpdCB0Zi5sb2FkR3JhcGhNb2RlbChtb2RlbFVybCk7XG4gKiBjb25zdCB6ZXJvcyA9IHRmLnplcm9zKFsxLCAyMjQsIDIyNCwgM10pO1xuICogbW9kZWwucHJlZGljdCh6ZXJvcykucHJpbnQoKTtcbiAqIGBgYFxuICpcbiAqIEV4YW1wbGUgb2YgbG9hZGluZyBNb2JpbGVOZXRWMiBmcm9tIGEgVEYgSHViIFVSTCBhbmQgbWFraW5nIGEgcHJlZGljdGlvblxuICogd2l0aCBhIHplcm9zIGlucHV0OlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtb2RlbFVybCA9XG4gKiAgICAnaHR0cHM6Ly90Zmh1Yi5kZXYvZ29vZ2xlL2ltYWdlbmV0L21vYmlsZW5ldF92Ml8xNDBfMjI0L2NsYXNzaWZpY2F0aW9uLzInO1xuICogY29uc3QgbW9kZWwgPSBhd2FpdCB0Zi5sb2FkR3JhcGhNb2RlbChtb2RlbFVybCwge2Zyb21URkh1YjogdHJ1ZX0pO1xuICogY29uc3QgemVyb3MgPSB0Zi56ZXJvcyhbMSwgMjI0LCAyMjQsIDNdKTtcbiAqIG1vZGVsLnByZWRpY3QoemVyb3MpLnByaW50KCk7XG4gKiBgYGBcbiAqIEBwYXJhbSBtb2RlbFVybCBUaGUgdXJsIG9yIGFuIGBpby5JT0hhbmRsZXJgIHRoYXQgbG9hZHMgdGhlIG1vZGVsLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIEhUVFAgcmVxdWVzdCwgd2hpY2ggYWxsb3dzIHRvIHNlbmRcbiAqICAgICBjcmVkZW50aWFsc1xuICogICAgYW5kIGN1c3RvbSBoZWFkZXJzLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnTG9hZGluZyd9XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR3JhcGhNb2RlbChcbiAgICBtb2RlbFVybDogc3RyaW5nfGlvLklPSGFuZGxlciwgb3B0aW9uczogaW8uTG9hZE9wdGlvbnMgPSB7fSxcbiAgICB0ZmlvID0gaW8pOiBQcm9taXNlPEdyYXBoTW9kZWw+IHtcbiAgaWYgKG1vZGVsVXJsID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdtb2RlbFVybCBpbiBsb2FkR3JhcGhNb2RlbCgpIGNhbm5vdCBiZSBudWxsLiBQbGVhc2UgcHJvdmlkZSBhIHVybCAnICtcbiAgICAgICAgJ29yIGFuIElPSGFuZGxlciB0aGF0IGxvYWRzIHRoZSBtb2RlbCcpO1xuICB9XG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAob3B0aW9ucy5mcm9tVEZIdWIgJiYgdHlwZW9mIG1vZGVsVXJsID09PSAnc3RyaW5nJykge1xuICAgIG1vZGVsVXJsID0gZ2V0VEZIdWJVcmwobW9kZWxVcmwpO1xuICB9XG4gIGNvbnN0IG1vZGVsID0gbmV3IEdyYXBoTW9kZWwobW9kZWxVcmwsIG9wdGlvbnMsIHRmaW8pO1xuICBhd2FpdCBtb2RlbC5sb2FkKCk7XG4gIHJldHVybiBtb2RlbDtcbn1cblxuLyoqXG4gKiBMb2FkIGEgZ3JhcGggbW9kZWwgZ2l2ZW4gYSBzeW5jaHJvbm91cyBJTyBoYW5kbGVyIHdpdGggYSAnbG9hZCcgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBtb2RlbFNvdXJjZSBUaGUgYGlvLklPSGFuZGxlclN5bmNgIHRoYXQgbG9hZHMgdGhlIG1vZGVsLCBvciB0aGVcbiAqICAgICBgaW8uTW9kZWxBcnRpZmFjdHNgIHRoYXQgZW5jb2RlIHRoZSBtb2RlbCwgb3IgYSB0dXBsZSBvZlxuICogICAgIGBbaW8uTW9kZWxKU09OLCBBcnJheUJ1ZmZlcl1gIG9mIHdoaWNoIHRoZSBmaXJzdCBlbGVtZW50IGVuY29kZXMgdGhlXG4gKiAgICAgIG1vZGVsIGFuZCB0aGUgc2Vjb25kIGNvbnRhaW5zIHRoZSB3ZWlnaHRzLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnTG9hZGluZyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR3JhcGhNb2RlbFN5bmMoXG4gICAgbW9kZWxTb3VyY2U6IGlvLklPSGFuZGxlclN5bmN8XG4gICAgaW8uTW9kZWxBcnRpZmFjdHN8W2lvLk1vZGVsSlNPTiwgLyogV2VpZ2h0cyAqLyBBcnJheUJ1ZmZlcl0pOlxuICAgIEdyYXBoTW9kZWw8aW8uSU9IYW5kbGVyU3luYz4ge1xuICBpZiAobW9kZWxTb3VyY2UgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ21vZGVsVXJsIGluIGxvYWRHcmFwaE1vZGVsU3luYygpIGNhbm5vdCBiZSBudWxsLiBQbGVhc2UgcHJvdmlkZSAnICtcbiAgICAgICAgJ21vZGVsIGFydGlmYWN0cyBvciBhbiBJT0hhbmRsZXIgdGhhdCBsb2FkcyB0aGUgbW9kZWwnKTtcbiAgfVxuXG4gIGxldCBpb0hhbmRsZXI6IGlvLklPSGFuZGxlclN5bmM7XG4gIGlmIChtb2RlbFNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgW21vZGVsSlNPTiwgd2VpZ2h0c10gPSBtb2RlbFNvdXJjZTtcbiAgICBpZiAoIW1vZGVsSlNPTikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2RlbEpTT04gbXVzdCBiZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXknKTtcbiAgICB9XG4gICAgaWYgKCF3ZWlnaHRzIHx8ICEod2VpZ2h0cyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdBbiBBcnJheUJ1ZmZlciBvZiB3ZWlnaHRzIG11c3QgYmUgdGhlIHNlY29uZCBlbGVtZW50IG9mJyArXG4gICAgICAgICAgJyB0aGUgYXJyYXknKTtcbiAgICB9XG4gICAgaWYgKCEoJ21vZGVsVG9wb2xvZ3knIGluIG1vZGVsSlNPTikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTW9kZWwgSlNPTiBpcyBtaXNzaW5nIFxcJ21vZGVsVG9wb2xvZ3lcXCcnKTtcbiAgICB9XG4gICAgaWYgKCEoJ3dlaWdodHNNYW5pZmVzdCcgaW4gbW9kZWxKU09OKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb2RlbCBKU09OIGlzIG1pc3NpbmcgXFwnd2VpZ2h0c01hbmlmZXN0XFwnJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2VpZ2h0U3BlY3MgPSBpby5nZXRXZWlnaHRTcGVjcyhtb2RlbEpTT04ud2VpZ2h0c01hbmlmZXN0KTtcbiAgICBjb25zdCBtb2RlbEFydGlmYWN0cyA9XG4gICAgICAgIGlvLmdldE1vZGVsQXJ0aWZhY3RzRm9ySlNPTlN5bmMobW9kZWxKU09OLCB3ZWlnaHRTcGVjcywgd2VpZ2h0cyk7XG4gICAgaW9IYW5kbGVyID0gaW8uZnJvbU1lbW9yeVN5bmMobW9kZWxBcnRpZmFjdHMpO1xuICB9IGVsc2UgaWYgKCdsb2FkJyBpbiBtb2RlbFNvdXJjZSkge1xuICAgIC8vIFRoZW4gbW9kZWxTb3VyY2UgaXMgYWxyZWFkeSBhbiBJT0hhbmRsZXJTeW5jLlxuICAgIGlvSGFuZGxlciA9IG1vZGVsU291cmNlO1xuICB9IGVsc2UgaWYgKFxuICAgICAgJ21vZGVsVG9wb2xvZ3knIGluIG1vZGVsU291cmNlICYmICd3ZWlnaHRTcGVjcycgaW4gbW9kZWxTb3VyY2UgJiZcbiAgICAgICd3ZWlnaHREYXRhJyBpbiBtb2RlbFNvdXJjZSkge1xuICAgIC8vIG1vZGVsU291cmNlIGlzIG9mIHR5cGUgTW9kZWxBcnRpZmFjdHMuXG4gICAgaW9IYW5kbGVyID0gaW8uZnJvbU1lbW9yeVN5bmMobW9kZWxTb3VyY2UpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbCBmb3JtYXQnKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGVsID0gbmV3IEdyYXBoTW9kZWwoaW9IYW5kbGVyKTtcbiAgbW9kZWwubG9hZCgpO1xuICByZXR1cm4gbW9kZWw7XG59XG5cbmZ1bmN0aW9uIGdldFRGSHViVXJsKG1vZGVsVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIW1vZGVsVXJsLmVuZHNXaXRoKCcvJykpIHtcbiAgICBtb2RlbFVybCA9IChtb2RlbFVybCkgKyAnLyc7XG4gIH1cbiAgcmV0dXJuIGAke21vZGVsVXJsfSR7REVGQVVMVF9NT0RFTF9OQU1FfSR7VEZIVUJfU0VBUkNIX1BBUkFNfWA7XG59XG4iXX0=
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-converter_dist_executor_2188d656._.js.map