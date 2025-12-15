module.exports = [
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Explicit error types.
 *
 * See the following link for more information about why the code includes
 * calls to setPrototypeOf:
 *
 * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */ // tslint:enable
/**
 * Equivalent of Python's AttributeError.
 */ __turbopack_context__.s([
    "AssertionError",
    ()=>AssertionError,
    "AttributeError",
    ()=>AttributeError,
    "IndexError",
    ()=>IndexError,
    "NotImplementedError",
    ()=>NotImplementedError,
    "RuntimeError",
    ()=>RuntimeError,
    "ValueError",
    ()=>ValueError
]);
class AttributeError extends Error {
    constructor(message){
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AttributeError.prototype);
    }
}
class RuntimeError extends Error {
    constructor(message){
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, RuntimeError.prototype);
    }
}
class ValueError extends Error {
    constructor(message){
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ValueError.prototype);
    }
}
class NotImplementedError extends Error {
    constructor(message){
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}
class AssertionError extends Error {
    constructor(message){
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AssertionError.prototype);
    }
}
class IndexError extends Error {
    constructor(message){
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, IndexError.prototype);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOzs7Ozs7O0dBT0c7QUFDSCxnQkFBZ0I7QUFFaEI7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBZSxTQUFRLEtBQUs7SUFDdkMsWUFBWSxPQUFnQjtRQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixnQ0FBZ0M7UUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFlBQWEsU0FBUSxLQUFLO0lBQ3JDLFlBQVksT0FBZ0I7UUFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsZ0NBQWdDO1FBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxVQUFXLFNBQVEsS0FBSztJQUNuQyxZQUFZLE9BQWdCO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLGdDQUFnQztRQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsS0FBSztJQUM1QyxZQUFZLE9BQWdCO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLGdDQUFnQztRQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0Y7QUFFRDs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFlLFNBQVEsS0FBSztJQUN2QyxZQUFZLE9BQWdCO1FBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLGdDQUFnQztRQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sVUFBVyxTQUFRLEtBQUs7SUFDbkMsWUFBWSxPQUFnQjtRQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixnQ0FBZ0M7UUFDaEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogRXhwbGljaXQgZXJyb3IgdHlwZXMuXG4gKlxuICogU2VlIHRoZSBmb2xsb3dpbmcgbGluayBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB3aHkgdGhlIGNvZGUgaW5jbHVkZXNcbiAqIGNhbGxzIHRvIHNldFByb3RvdHlwZU9mOlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC13aWtpL2Jsb2IvbWFzdGVyL0JyZWFraW5nLUNoYW5nZXMubWQjZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtbWF5LW5vLWxvbmdlci13b3JrXG4gKi9cbi8vIHRzbGludDplbmFibGVcblxuLyoqXG4gKiBFcXVpdmFsZW50IG9mIFB5dGhvbidzIEF0dHJpYnV0ZUVycm9yLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5LlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdHRyaWJ1dGVFcnJvci5wcm90b3R5cGUpO1xuICB9XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCBvZiBQeXRob24ncyBSdW50aW1lRXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBSdW50aW1lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5LlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBSdW50aW1lRXJyb3IucHJvdG90eXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgb2YgUHl0aG9uJ3MgVmFsdWVFcnJvci5cbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5LlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBWYWx1ZUVycm9yLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IG9mIFB5dGhvbidzIE5vdEltcGxlbWVudGVkRXJyb3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgLy8gU2V0IHRoZSBwcm90b3R5cGUgZXhwbGljaXRseS5cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgTm90SW1wbGVtZW50ZWRFcnJvci5wcm90b3R5cGUpO1xuICB9XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCBvZiBQeXRob24ncyBBc3NlcnRpb25FcnJvci5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzc2VydGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgLy8gU2V0IHRoZSBwcm90b3R5cGUgZXhwbGljaXRseS5cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXNzZXJ0aW9uRXJyb3IucHJvdG90eXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgb2YgUHl0aG9uJ3MgSW5kZXhFcnJvci5cbiAqL1xuZXhwb3J0IGNsYXNzIEluZGV4RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSBleHBsaWNpdGx5LlxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbmRleEVycm9yLnByb3RvdHlwZSk7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/keras_format/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "VALID_BIDIRECTIONAL_MERGE_MODES",
    ()=>VALID_BIDIRECTIONAL_MERGE_MODES,
    "VALID_DATA_FORMAT_VALUES",
    ()=>VALID_DATA_FORMAT_VALUES,
    "VALID_INTERPOLATION_FORMAT_VALUES",
    ()=>VALID_INTERPOLATION_FORMAT_VALUES,
    "VALID_PADDING_MODE_VALUES",
    ()=>VALID_PADDING_MODE_VALUES,
    "VALID_POOL_MODE_VALUES",
    ()=>VALID_POOL_MODE_VALUES,
    "VALID_SAMPLE_WEIGHT_MODES",
    ()=>VALID_SAMPLE_WEIGHT_MODES
]);
const VALID_DATA_FORMAT_VALUES = [
    'channelsFirst',
    'channelsLast'
];
const VALID_INTERPOLATION_FORMAT_VALUES = [
    'nearest',
    'bilinear'
];
const VALID_PADDING_MODE_VALUES = [
    'valid',
    'same',
    'causal'
];
const VALID_POOL_MODE_VALUES = [
    'max',
    'avg'
];
const VALID_BIDIRECTIONAL_MERGE_MODES = [
    'sum',
    'mul',
    'concat',
    'ave'
];
const VALID_SAMPLE_WEIGHT_MODES = [
    'temporal'
]; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2tlcmFzX2Zvcm1hdC9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFhSCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUcxRSxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQU16RSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFJckUsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFJckQsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUkvRSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gVE9ETyhodWFuKTogYWRkIGxheWVyLXNwZWNpZmljIGlucHV0IHNoYXBlIHR5cGVzIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMtbGF5ZXJzL3B1bGwvNDkyKVxuLyoqIEBkb2NhbGlhcyAobnVsbCB8IG51bWJlcilbXSAqL1xuZXhwb3J0IHR5cGUgU2hhcGUgPSBBcnJheTxudWxsIHwgbnVtYmVyPjtcblxuLy8gVGhlIHRmanMtY29yZSB2ZXJzaW9uIG9mIERhdGFUeXBlIG11c3Qgc3RheSBzeW5jZWQgd2l0aCB0aGlzLlxuZXhwb3J0IHR5cGUgRGF0YVR5cGUgPSAnZmxvYXQzMid8J2ludDMyJ3wnYm9vbCd8J2NvbXBsZXg2NCd8J3N0cmluZyc7XG5cbi8vIFRPRE8oc29lcmdlbCk6IE1vdmUgdGhlIENhbWVsQ2FzZSB2ZXJzaW9ucyBiYWNrIG91dCBvZiBrZXJhc19mb3JtYXRcbi8vIGUuZy4gdG8gc3JjL2NvbW1vbi50cy4gIE1heWJlIGV2ZW4gZHVwbGljYXRlICphbGwqIG9mIHRoZXNlIHRvIGJlIHBlZGFudGljP1xuLyoqIEBkb2NpbmxpbmUgKi9cbmV4cG9ydCB0eXBlIERhdGFGb3JtYXQgPSAnY2hhbm5lbHNGaXJzdCd8J2NoYW5uZWxzTGFzdCc7XG5leHBvcnQgY29uc3QgVkFMSURfREFUQV9GT1JNQVRfVkFMVUVTID0gWydjaGFubmVsc0ZpcnN0JywgJ2NoYW5uZWxzTGFzdCddO1xuXG5leHBvcnQgdHlwZSBJbnRlcnBvbGF0aW9uRm9ybWF0ID0gJ25lYXJlc3QnfCdiaWxpbmVhcic7XG5leHBvcnQgY29uc3QgVkFMSURfSU5URVJQT0xBVElPTl9GT1JNQVRfVkFMVUVTID0gWyduZWFyZXN0JywgJ2JpbGluZWFyJ107XG4vLyBUaGVzZSBjb25zdGFudHMgaGF2ZSBhIHNuYWtlIHZzLiBjYW1lbCBkaXN0aW5jdGlvbi5cbmV4cG9ydCB0eXBlIERhdGFGb3JtYXRTZXJpYWxpemF0aW9uID0gJ2NoYW5uZWxzX2ZpcnN0J3wnY2hhbm5lbHNfbGFzdCc7XG5cbi8qKiBAZG9jaW5saW5lICovXG5leHBvcnQgdHlwZSBQYWRkaW5nTW9kZSA9ICd2YWxpZCd8J3NhbWUnfCdjYXVzYWwnO1xuZXhwb3J0IGNvbnN0IFZBTElEX1BBRERJTkdfTU9ERV9WQUxVRVMgPSBbJ3ZhbGlkJywgJ3NhbWUnLCAnY2F1c2FsJ107XG5cbi8qKiBAZG9jaW5saW5lICovXG5leHBvcnQgdHlwZSBQb29sTW9kZSA9ICdtYXgnfCdhdmcnO1xuZXhwb3J0IGNvbnN0IFZBTElEX1BPT0xfTU9ERV9WQUxVRVMgPSBbJ21heCcsICdhdmcnXTtcblxuLyoqIEBkb2NpbmxpbmUgKi9cbmV4cG9ydCB0eXBlIEJpZGlyZWN0aW9uYWxNZXJnZU1vZGUgPSAnc3VtJ3wnbXVsJ3wnY29uY2F0J3wnYXZlJztcbmV4cG9ydCBjb25zdCBWQUxJRF9CSURJUkVDVElPTkFMX01FUkdFX01PREVTID0gWydzdW0nLCAnbXVsJywgJ2NvbmNhdCcsICdhdmUnXTtcblxuLyoqIEBkb2NpbmxpbmUgKi9cbmV4cG9ydCB0eXBlIFNhbXBsZVdlaWdodE1vZGUgPSAndGVtcG9yYWwnO1xuZXhwb3J0IGNvbnN0IFZBTElEX1NBTVBMRV9XRUlHSFRfTU9ERVMgPSBbJ3RlbXBvcmFsJ107XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/keras_format/initializer_config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "VALID_DISTRIBUTION_VALUES",
    ()=>VALID_DISTRIBUTION_VALUES,
    "VALID_FAN_MODE_VALUES",
    ()=>VALID_FAN_MODE_VALUES,
    "initializerClassNames",
    ()=>initializerClassNames
]);
const VALID_FAN_MODE_VALUES = [
    'fanIn',
    'fanOut',
    'fanAvg'
];
const VALID_DISTRIBUTION_VALUES = [
    'normal',
    'uniform',
    'truncatedNormal'
];
const initializerClassNames = [
    'Zeros',
    'Ones',
    'Constant',
    'RandomNormal',
    'RandomUniform',
    'TruncatedNormal',
    'VarianceScaling',
    'Orthogonal',
    'Identity'
]; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXJfY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2tlcmFzX2Zvcm1hdC9pbml0aWFsaXplcl9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFRSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFPbkUsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQ2xDLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBNEU3Qyw0RUFBNEU7QUFDNUUsNkVBQTZFO0FBQzdFLDZDQUE2QztBQUU3Qzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTJCO0lBQzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxlQUFlO0lBQzVELGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxVQUFVO0NBQy9ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0Jhc2VTZXJpYWxpemF0aW9ufSBmcm9tICcuL3R5cGVzJztcblxuLy8gVE9ETyhzb2VyZ2VsKTogTW92ZSB0aGUgQ2FtZWxDYXNlIHZlcnNpb25zIGJhY2sgb3V0IG9mIGtlcmFzX2Zvcm1hdFxuLy8gZS5nLiB0byBzcmMvY29tbW9uLnRzLiAgTWF5YmUgZXZlbiBkdXBsaWNhdGUgKmFsbCogb2YgdGhlc2UgdG8gYmUgcGVkYW50aWM/XG4vKiogQGRvY2lubGluZSAqL1xuZXhwb3J0IHR5cGUgRmFuTW9kZSA9ICdmYW5Jbid8J2Zhbk91dCd8J2ZhbkF2Zyc7XG5leHBvcnQgY29uc3QgVkFMSURfRkFOX01PREVfVkFMVUVTID0gWydmYW5JbicsICdmYW5PdXQnLCAnZmFuQXZnJ107XG5cbi8vIFRoZXNlIGNvbnN0YW50cyBoYXZlIGEgc25ha2UgdnMuIGNhbWVsIGRpc3RpbmN0aW9uLlxuZXhwb3J0IHR5cGUgRmFuTW9kZVNlcmlhbGl6YXRpb24gPSAnZmFuX2luJ3wnZmFuX291dCd8J2Zhbl9hdmcnO1xuXG4vKiogQGRvY2lubGluZSAqL1xuZXhwb3J0IHR5cGUgRGlzdHJpYnV0aW9uID0gJ25vcm1hbCd8J3VuaWZvcm0nfCd0cnVuY2F0ZWROb3JtYWwnO1xuZXhwb3J0IGNvbnN0IFZBTElEX0RJU1RSSUJVVElPTl9WQUxVRVMgPVxuICAgIFsnbm9ybWFsJywgJ3VuaWZvcm0nLCAndHJ1bmNhdGVkTm9ybWFsJ107XG4vLyBUaGVzZSBjb25zdGFudHMgaGF2ZSBhIHNuYWtlIHZzLiBjYW1lbCBkaXN0aW5jdGlvbi5cbmV4cG9ydCB0eXBlIERpc3RyaWJ1dGlvblNlcmlhbGl6YXRpb24gPSAnbm9ybWFsJ3wndW5pZm9ybSd8J3RydW5jYXRlZF9ub3JtYWwnO1xuXG5leHBvcnQgdHlwZSBaZXJvc1NlcmlhbGl6YXRpb24gPSBCYXNlU2VyaWFsaXphdGlvbjwnWmVyb3MnLCB7fT47XG5cbmV4cG9ydCB0eXBlIE9uZXNTZXJpYWxpemF0aW9uID0gQmFzZVNlcmlhbGl6YXRpb248J09uZXMnLCB7fT47XG5cbmV4cG9ydCB0eXBlIENvbnN0YW50Q29uZmlnID0ge1xuICB2YWx1ZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQ29uc3RhbnRTZXJpYWxpemF0aW9uID1cbiAgICBCYXNlU2VyaWFsaXphdGlvbjwnQ29uc3RhbnQnLCBDb25zdGFudENvbmZpZz47XG5cbmV4cG9ydCB0eXBlIFJhbmRvbU5vcm1hbENvbmZpZyA9IHtcbiAgbWVhbj86IG51bWJlcjtcbiAgc3RkZGV2PzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUmFuZG9tTm9ybWFsU2VyaWFsaXphdGlvbiA9XG4gICAgQmFzZVNlcmlhbGl6YXRpb248J1JhbmRvbU5vcm1hbCcsIFJhbmRvbU5vcm1hbENvbmZpZz47XG5cbmV4cG9ydCB0eXBlIFJhbmRvbVVuaWZvcm1Db25maWcgPSB7XG4gIG1pbnZhbD86IG51bWJlcjtcbiAgbWF4dmFsPzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUmFuZG9tVW5pZm9ybVNlcmlhbGl6YXRpb24gPVxuICAgIEJhc2VTZXJpYWxpemF0aW9uPCdSYW5kb21Vbmlmb3JtJywgUmFuZG9tVW5pZm9ybUNvbmZpZz47XG5cbmV4cG9ydCB0eXBlIFRydW5jYXRlZE5vcm1hbENvbmZpZyA9IHtcbiAgbWVhbj86IG51bWJlcjtcbiAgc3RkZGV2PzogbnVtYmVyO1xuICBzZWVkPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgVHJ1bmNhdGVkTm9ybWFsU2VyaWFsaXphdGlvbiA9XG4gICAgQmFzZVNlcmlhbGl6YXRpb248J1RydW5jYXRlZE5vcm1hbCcsIFRydW5jYXRlZE5vcm1hbENvbmZpZz47XG5cbmV4cG9ydCB0eXBlIFZhcmlhbmNlU2NhbGluZ0NvbmZpZyA9IHtcbiAgc2NhbGU/OiBudW1iZXI7XG5cbiAgbW9kZT86IEZhbk1vZGVTZXJpYWxpemF0aW9uO1xuICBkaXN0cmlidXRpb24/OiBEaXN0cmlidXRpb25TZXJpYWxpemF0aW9uO1xuICBzZWVkPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgVmFyaWFuY2VTY2FsaW5nU2VyaWFsaXphdGlvbiA9XG4gICAgQmFzZVNlcmlhbGl6YXRpb248J1ZhcmlhbmNlU2NhbGluZycsIFZhcmlhbmNlU2NhbGluZ0NvbmZpZz47XG5cbmV4cG9ydCB0eXBlIE9ydGhvZ29uYWxDb25maWcgPSB7XG4gIHNlZWQ/OiBudW1iZXI7XG4gIGdhaW4/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBPcnRob2dvbmFsU2VyaWFsaXphdGlvbiA9XG4gICAgQmFzZVNlcmlhbGl6YXRpb248J09ydGhvZ29uYWwnLCBPcnRob2dvbmFsQ29uZmlnPjtcblxuZXhwb3J0IHR5cGUgSWRlbnRpdHlDb25maWcgPSB7XG4gIGdhaW4/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBJZGVudGl0eVNlcmlhbGl6YXRpb24gPVxuICAgIEJhc2VTZXJpYWxpemF0aW9uPCdJZGVudGl0eScsIElkZW50aXR5Q29uZmlnPjtcblxuLy8gVXBkYXRlIGluaXRpYWxpemVyQ2xhc3NOYW1lcyBiZWxvdyBpbiBjb25jZXJ0IHdpdGggdGhpcy5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVyU2VyaWFsaXphdGlvbiA9IFplcm9zU2VyaWFsaXphdGlvbnxPbmVzU2VyaWFsaXphdGlvbnxcbiAgICBDb25zdGFudFNlcmlhbGl6YXRpb258UmFuZG9tVW5pZm9ybVNlcmlhbGl6YXRpb258UmFuZG9tTm9ybWFsU2VyaWFsaXphdGlvbnxcbiAgICBUcnVuY2F0ZWROb3JtYWxTZXJpYWxpemF0aW9ufElkZW50aXR5U2VyaWFsaXphdGlvbnxcbiAgICBWYXJpYW5jZVNjYWxpbmdTZXJpYWxpemF0aW9ufE9ydGhvZ29uYWxTZXJpYWxpemF0aW9uO1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplckNsYXNzTmFtZSA9IEluaXRpYWxpemVyU2VyaWFsaXphdGlvblsnY2xhc3NfbmFtZSddO1xuXG4vLyBXZSBjYW4ndCBlYXNpbHkgZXh0cmFjdCBhIHN0cmluZ1tdIGZyb20gdGhlIHN0cmluZyB1bmlvbiB0eXBlLCBidXQgd2UgY2FuXG4vLyByZWNhcGl0dWxhdGUgdGhlIGxpc3QsIGVuZm9yY2luZyBhdCBjb21waWxlIHRpbWUgdGhhdCB0aGUgdmFsdWVzIGFyZSB2YWxpZFxuLy8gYW5kIHRoYXQgd2UgaGF2ZSB0aGUgcmlnaHQgbnVtYmVyIG9mIHRoZW0uXG5cbi8qKlxuICogQSBzdHJpbmcgYXJyYXkgb2YgdmFsaWQgSW5pdGlhbGl6ZXIgY2xhc3MgbmFtZXMuXG4gKlxuICogVGhpcyBpcyBndWFyYW50ZWVkIHRvIG1hdGNoIHRoZSBgSW5pdGlhbGl6ZXJDbGFzc05hbWVgIHVuaW9uIHR5cGUuXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplckNsYXNzTmFtZXM6IEluaXRpYWxpemVyQ2xhc3NOYW1lW10gPSBbXG4gICdaZXJvcycsICdPbmVzJywgJ0NvbnN0YW50JywgJ1JhbmRvbU5vcm1hbCcsICdSYW5kb21Vbmlmb3JtJyxcbiAgJ1RydW5jYXRlZE5vcm1hbCcsICdWYXJpYW5jZVNjYWxpbmcnLCAnT3J0aG9nb25hbCcsICdJZGVudGl0eSdcbl07XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Common functions for TensorFlow.js Layers.
 */ __turbopack_context__.s([
    "checkDataFormat",
    ()=>checkDataFormat,
    "checkInterpolationFormat",
    ()=>checkInterpolationFormat,
    "checkPaddingMode",
    ()=>checkPaddingMode,
    "checkPoolMode",
    ()=>checkPoolMode,
    "getScopedTensorName",
    ()=>getScopedTensorName,
    "getUniqueTensorName",
    ()=>getUniqueTensorName,
    "isValidTensorName",
    ()=>isValidTensorName,
    "nameScope",
    ()=>nameScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/keras_format/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
;
// A map from the requested scoped name of a Tensor to the number of Tensors
// wanting that name so far.  This allows enforcing name uniqueness by appending
// an incrementing index, e.g. scope/name, scope/name_1, scope/name_2, etc.
const nameMap = new Map();
function checkDataFormat(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_DATA_FORMAT_VALUES"], 'DataFormat', value);
}
function checkInterpolationFormat(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_INTERPOLATION_FORMAT_VALUES"], 'InterpolationFormat', value);
}
function checkPaddingMode(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_PADDING_MODE_VALUES"], 'PaddingMode', value);
}
function checkPoolMode(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_POOL_MODE_VALUES"], 'PoolMode', value);
}
const _nameScopeStack = [];
const _nameScopeDivider = '/';
function nameScope(name, fn) {
    _nameScopeStack.push(name);
    try {
        const val = fn();
        _nameScopeStack.pop();
        return val;
    } catch (e) {
        _nameScopeStack.pop();
        throw e;
    }
}
/**
 * Get the current namescope as a flat, concatenated string.
 */ function currentNameScopePrefix() {
    if (_nameScopeStack.length === 0) {
        return '';
    } else {
        return _nameScopeStack.join(_nameScopeDivider) + _nameScopeDivider;
    }
}
function getScopedTensorName(tensorName) {
    if (!isValidTensorName(tensorName)) {
        throw new Error('Not a valid tensor name: \'' + tensorName + '\'');
    }
    return currentNameScopePrefix() + tensorName;
}
function getUniqueTensorName(scopedName) {
    if (!isValidTensorName(scopedName)) {
        throw new Error('Not a valid tensor name: \'' + scopedName + '\'');
    }
    if (!nameMap.has(scopedName)) {
        nameMap.set(scopedName, 0);
    }
    const index = nameMap.get(scopedName);
    nameMap.set(scopedName, nameMap.get(scopedName) + 1);
    if (index > 0) {
        const result = `${scopedName}_${index}`;
        // Mark the composed name as used in case someone wants
        // to call getUniqueTensorName("name_1").
        nameMap.set(result, 1);
        return result;
    } else {
        return scopedName;
    }
}
const tensorNameRegex = new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);
function isValidTensorName(name) {
    return !!name.match(tensorNameRegex);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBQ0gsT0FBTyxFQUFDLHdCQUF3QixFQUFFLGlDQUFpQyxFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckosT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFaEUsNEVBQTRFO0FBQzVFLGdGQUFnRjtBQUNoRiwyRUFBMkU7QUFDM0UsTUFBTSxPQUFPLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO0FBRS9ELE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBYztJQUM1Qyx5QkFBeUIsQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0UsQ0FBQztBQUVELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxLQUFjO0lBQ3JELHlCQUF5QixDQUNyQixpQ0FBaUMsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQWM7SUFDN0MseUJBQXlCLENBQUMseUJBQXlCLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWM7SUFDMUMseUJBQXlCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBYSxFQUFFLENBQUM7QUFDckMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUM7QUFFOUI7O0dBRUc7QUFDSCxNQUFNLFVBQVUsU0FBUyxDQUFJLElBQVksRUFBRSxFQUFXO0lBQ3BELGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ3BCLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixlQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLENBQUM7S0FDVDtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsc0JBQXNCO0lBQzdCLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxFQUFFLENBQUM7S0FDWDtTQUFNO1FBQ0wsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsaUJBQWlCLENBQUM7S0FDcEU7QUFDSCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxVQUFrQjtJQUNwRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEU7SUFDRCxPQUFPLHNCQUFzQixFQUFFLEdBQUcsVUFBVSxDQUFDO0FBQy9DLENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsVUFBa0I7SUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3BFO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDNUI7SUFDRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFckQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ2IsTUFBTSxNQUFNLEdBQUcsR0FBRyxVQUFVLElBQUksS0FBSyxFQUFFLENBQUM7UUFDeEMsdURBQXVEO1FBQ3ZELHlDQUF5QztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLE1BQU0sQ0FBQztLQUNmO1NBQU07UUFDTCxPQUFPLFVBQVUsQ0FBQztLQUNuQjtBQUNILENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBRXRFOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBWTtJQUM1QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIENvbW1vbiBmdW5jdGlvbnMgZm9yIFRlbnNvckZsb3cuanMgTGF5ZXJzLlxuICovXG5pbXBvcnQge1ZBTElEX0RBVEFfRk9STUFUX1ZBTFVFUywgVkFMSURfSU5URVJQT0xBVElPTl9GT1JNQVRfVkFMVUVTLCBWQUxJRF9QQURESU5HX01PREVfVkFMVUVTLCBWQUxJRF9QT09MX01PREVfVkFMVUVTfSBmcm9tICcuL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtjaGVja1N0cmluZ1R5cGVVbmlvblZhbHVlfSBmcm9tICcuL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuXG4vLyBBIG1hcCBmcm9tIHRoZSByZXF1ZXN0ZWQgc2NvcGVkIG5hbWUgb2YgYSBUZW5zb3IgdG8gdGhlIG51bWJlciBvZiBUZW5zb3JzXG4vLyB3YW50aW5nIHRoYXQgbmFtZSBzbyBmYXIuICBUaGlzIGFsbG93cyBlbmZvcmNpbmcgbmFtZSB1bmlxdWVuZXNzIGJ5IGFwcGVuZGluZ1xuLy8gYW4gaW5jcmVtZW50aW5nIGluZGV4LCBlLmcuIHNjb3BlL25hbWUsIHNjb3BlL25hbWVfMSwgc2NvcGUvbmFtZV8yLCBldGMuXG5jb25zdCBuYW1lTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGF0YUZvcm1hdCh2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICBjaGVja1N0cmluZ1R5cGVVbmlvblZhbHVlKFZBTElEX0RBVEFfRk9STUFUX1ZBTFVFUywgJ0RhdGFGb3JtYXQnLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0ludGVycG9sYXRpb25Gb3JtYXQodmFsdWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgY2hlY2tTdHJpbmdUeXBlVW5pb25WYWx1ZShcbiAgICAgIFZBTElEX0lOVEVSUE9MQVRJT05fRk9STUFUX1ZBTFVFUywgJ0ludGVycG9sYXRpb25Gb3JtYXQnLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1BhZGRpbmdNb2RlKHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XG4gIGNoZWNrU3RyaW5nVHlwZVVuaW9uVmFsdWUoVkFMSURfUEFERElOR19NT0RFX1ZBTFVFUywgJ1BhZGRpbmdNb2RlJywgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQb29sTW9kZSh2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICBjaGVja1N0cmluZ1R5cGVVbmlvblZhbHVlKFZBTElEX1BPT0xfTU9ERV9WQUxVRVMsICdQb29sTW9kZScsIHZhbHVlKTtcbn1cblxuY29uc3QgX25hbWVTY29wZVN0YWNrOiBzdHJpbmdbXSA9IFtdO1xuY29uc3QgX25hbWVTY29wZURpdmlkZXIgPSAnLyc7XG5cbi8qKlxuICogRW50ZXIgbmFtZXNjb3BlLCB3aGljaCBjYW4gYmUgbmVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZVNjb3BlPFQ+KG5hbWU6IHN0cmluZywgZm46ICgpID0+IFQpOiBUIHtcbiAgX25hbWVTY29wZVN0YWNrLnB1c2gobmFtZSk7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsOiBUID0gZm4oKTtcbiAgICBfbmFtZVNjb3BlU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIF9uYW1lU2NvcGVTdGFjay5wb3AoKTtcbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjdXJyZW50IG5hbWVzY29wZSBhcyBhIGZsYXQsIGNvbmNhdGVuYXRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGN1cnJlbnROYW1lU2NvcGVQcmVmaXgoKTogc3RyaW5nIHtcbiAgaWYgKF9uYW1lU2NvcGVTdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9uYW1lU2NvcGVTdGFjay5qb2luKF9uYW1lU2NvcGVEaXZpZGVyKSArIF9uYW1lU2NvcGVEaXZpZGVyO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBuYW1lIGEgVGVuc29yIChvciBWYXJpYWJsZSkgd291bGQgaGF2ZSBpZiBub3QgdW5pcXVlaWZpZWQuXG4gKiBAcGFyYW0gdGVuc29yTmFtZVxuICogQHJldHVybiBTY29wZWQgbmFtZSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY29wZWRUZW5zb3JOYW1lKHRlbnNvck5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghaXNWYWxpZFRlbnNvck5hbWUodGVuc29yTmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIHRlbnNvciBuYW1lOiBcXCcnICsgdGVuc29yTmFtZSArICdcXCcnKTtcbiAgfVxuICByZXR1cm4gY3VycmVudE5hbWVTY29wZVByZWZpeCgpICsgdGVuc29yTmFtZTtcbn1cblxuLyoqXG4gKiBHZXQgdW5pcXVlIG5hbWVzIGZvciBUZW5zb3JzIGFuZCBWYXJpYWJsZXMuXG4gKiBAcGFyYW0gc2NvcGVkTmFtZSBUaGUgZnVsbHktcXVhbGlmaWVkIG5hbWUgb2YgdGhlIFRlbnNvciwgaS5lLiBhcyBwcm9kdWNlZCBieVxuICogIGBnZXRTY29wZWRUZW5zb3JOYW1lKClgLlxuICogQHJldHVybiBBIHVuaXF1ZSB2ZXJzaW9uIG9mIHRoZSBnaXZlbiBmdWxseSBzY29wZWQgbmFtZS5cbiAqICAgSWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB0aGF0IHRoZSBzY29wZWQgbmFtZSBpcyBzZWVuIGluIHRoaXMgc2Vzc2lvbixcbiAqICAgdGhlbiB0aGUgZ2l2ZW4gYHNjb3BlZE5hbWVgIGlzIHJldHVybmVkIHVuYWx0ZXJlZC4gIElmIHRoZSBzYW1lIG5hbWUgaXNcbiAqICAgc2VlbiBhZ2FpbiAocHJvZHVjaW5nIGEgY29sbGlzaW9uKSwgYW4gaW5jcmVtZW50aW5nIHN1ZmZpeCBpcyBhZGRlZCB0byB0aGVcbiAqICAgZW5kIG9mIHRoZSBuYW1lLCBzbyBpdCB0YWtlcyB0aGUgZm9ybSAnc2NvcGUvbmFtZV8xJywgJ3Njb3BlL25hbWVfMicsIGV0Yy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZVRlbnNvck5hbWUoc2NvcGVkTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFpc1ZhbGlkVGVuc29yTmFtZShzY29wZWROYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgdGVuc29yIG5hbWU6IFxcJycgKyBzY29wZWROYW1lICsgJ1xcJycpO1xuICB9XG4gIGlmICghbmFtZU1hcC5oYXMoc2NvcGVkTmFtZSkpIHtcbiAgICBuYW1lTWFwLnNldChzY29wZWROYW1lLCAwKTtcbiAgfVxuICBjb25zdCBpbmRleCA9IG5hbWVNYXAuZ2V0KHNjb3BlZE5hbWUpO1xuICBuYW1lTWFwLnNldChzY29wZWROYW1lLCBuYW1lTWFwLmdldChzY29wZWROYW1lKSArIDEpO1xuXG4gIGlmIChpbmRleCA+IDApIHtcbiAgICBjb25zdCByZXN1bHQgPSBgJHtzY29wZWROYW1lfV8ke2luZGV4fWA7XG4gICAgLy8gTWFyayB0aGUgY29tcG9zZWQgbmFtZSBhcyB1c2VkIGluIGNhc2Ugc29tZW9uZSB3YW50c1xuICAgIC8vIHRvIGNhbGwgZ2V0VW5pcXVlVGVuc29yTmFtZShcIm5hbWVfMVwiKS5cbiAgICBuYW1lTWFwLnNldChyZXN1bHQsIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNjb3BlZE5hbWU7XG4gIH1cbn1cblxuY29uc3QgdGVuc29yTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgvXltBLVphLXowLTldWy1BLVphLXowLTlcXC5fXFwvXSokLyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgYSBzdHJpbmcgaXMgYSB2YWxpZCB0ZW5zb3IgbmFtZS5cbiAqIEBwYXJhbSBuYW1lXG4gKiBAcmV0dXJucyBBIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGBuYW1lYCBpcyBhIHZhbGlkIHRlbnNvciBuYW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFRlbnNvck5hbWUobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIW5hbWUubWF0Y2godGVuc29yTmFtZVJlZ2V4KTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "Constant",
    ()=>Constant,
    "GlorotNormal",
    ()=>GlorotNormal,
    "GlorotUniform",
    ()=>GlorotUniform,
    "HeNormal",
    ()=>HeNormal,
    "HeUniform",
    ()=>HeUniform,
    "INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP",
    ()=>INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP,
    "Identity",
    ()=>Identity,
    "Initializer",
    ()=>Initializer,
    "LeCunNormal",
    ()=>LeCunNormal,
    "LeCunUniform",
    ()=>LeCunUniform,
    "Ones",
    ()=>Ones,
    "Orthogonal",
    ()=>Orthogonal,
    "RandomNormal",
    ()=>RandomNormal,
    "RandomUniform",
    ()=>RandomUniform,
    "TruncatedNormal",
    ()=>TruncatedNormal,
    "VarianceScaling",
    ()=>VarianceScaling,
    "Zeros",
    ()=>Zeros,
    "checkDistribution",
    ()=>checkDistribution,
    "checkFanMode",
    ()=>checkFanMode,
    "getInitializer",
    ()=>getInitializer,
    "serializeInitializer",
    ()=>serializeInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/eye.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ops.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/random_uniform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$truncated_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/truncated_normal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$initializer_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/keras_format/initializer_config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function checkFanMode(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$initializer_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_FAN_MODE_VALUES"], 'FanMode', value);
}
function checkDistribution(value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkStringTypeUnionValue"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$keras_format$2f$initializer_config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALID_DISTRIBUTION_VALUES"], 'Distribution', value);
}
class Initializer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].Serializable {
    fromConfigUsesCustomObjects() {
        return false;
    }
    getConfig() {
        return {};
    }
}
class Zeros extends Initializer {
    apply(shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeros"])(shape, dtype);
    }
}
/** @nocollapse */ Zeros.className = 'Zeros';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Zeros);
class Ones extends Initializer {
    apply(shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ones"])(shape, dtype);
    }
}
/** @nocollapse */ Ones.className = 'Ones';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Ones);
class Constant extends Initializer {
    constructor(args){
        super();
        if (typeof args !== 'object') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Expected argument of type ConstantConfig but got ${args}`);
        }
        if (args.value === undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`config must have value set but got ${args}`);
        }
        this.value = args.value;
    }
    apply(shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scalar"])(this.value), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ones"])(shape, dtype)));
    }
    getConfig() {
        return {
            value: this.value
        };
    }
}
/** @nocollapse */ Constant.className = 'Constant';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Constant);
class RandomUniform extends Initializer {
    constructor(args){
        super();
        this.DEFAULT_MINVAL = -0.05;
        this.DEFAULT_MAXVAL = 0.05;
        this.minval = args.minval || this.DEFAULT_MINVAL;
        this.maxval = args.maxval || this.DEFAULT_MAXVAL;
        this.seed = args.seed;
    }
    apply(shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomUniform"])(shape, this.minval, this.maxval, dtype, this.seed);
    }
    getConfig() {
        return {
            minval: this.minval,
            maxval: this.maxval,
            seed: this.seed
        };
    }
}
/** @nocollapse */ RandomUniform.className = 'RandomUniform';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(RandomUniform);
class RandomNormal extends Initializer {
    constructor(args){
        super();
        this.DEFAULT_MEAN = 0.;
        this.DEFAULT_STDDEV = 0.05;
        this.mean = args.mean || this.DEFAULT_MEAN;
        this.stddev = args.stddev || this.DEFAULT_STDDEV;
        this.seed = args.seed;
    }
    apply(shape, dtype) {
        dtype = dtype || 'float32';
        if (dtype !== 'float32' && dtype !== 'int32') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`randomNormal does not support dType ${dtype}.`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomNormal"](shape, this.mean, this.stddev, dtype, this.seed);
    }
    getConfig() {
        return {
            mean: this.mean,
            stddev: this.stddev,
            seed: this.seed
        };
    }
}
/** @nocollapse */ RandomNormal.className = 'RandomNormal';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(RandomNormal);
class TruncatedNormal extends Initializer {
    constructor(args){
        super();
        this.DEFAULT_MEAN = 0.;
        this.DEFAULT_STDDEV = 0.05;
        this.mean = args.mean || this.DEFAULT_MEAN;
        this.stddev = args.stddev || this.DEFAULT_STDDEV;
        this.seed = args.seed;
    }
    apply(shape, dtype) {
        dtype = dtype || 'float32';
        if (dtype !== 'float32' && dtype !== 'int32') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`truncatedNormal does not support dType ${dtype}.`);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$truncated_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncatedNormal"])(shape, this.mean, this.stddev, dtype, this.seed);
    }
    getConfig() {
        return {
            mean: this.mean,
            stddev: this.stddev,
            seed: this.seed
        };
    }
}
/** @nocollapse */ TruncatedNormal.className = 'TruncatedNormal';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(TruncatedNormal);
class Identity extends Initializer {
    constructor(args){
        super();
        this.gain = args.gain != null ? args.gain : 1.0;
    }
    apply(shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            if (shape.length !== 2 || shape[0] !== shape[1]) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Identity matrix initializer can only be used for' + ' 2D square matrices.');
            } else {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])(this.gain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eye"])(shape[0]));
            }
        });
    }
    getConfig() {
        return {
            gain: this.gain
        };
    }
}
/** @nocollapse */ Identity.className = 'Identity';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Identity);
/**
 * Computes the number of input and output units for a weight shape.
 * @param shape Shape of weight.
 * @param dataFormat data format to use for convolution kernels.
 *   Note that all kernels in Keras are standardized on the
 *   CHANNEL_LAST ordering (even when inputs are set to CHANNEL_FIRST).
 * @return An length-2 array: fanIn, fanOut.
 */ function computeFans(shape, dataFormat = 'channelsLast') {
    let fanIn;
    let fanOut;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkDataFormat"])(dataFormat);
    if (shape.length === 2) {
        fanIn = shape[0];
        fanOut = shape[1];
    } else if ([
        3,
        4,
        5
    ].indexOf(shape.length) !== -1) {
        if (dataFormat === 'channelsFirst') {
            const receptiveFieldSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayProd"])(shape, 2);
            fanIn = shape[1] * receptiveFieldSize;
            fanOut = shape[0] * receptiveFieldSize;
        } else if (dataFormat === 'channelsLast') {
            const receptiveFieldSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayProd"])(shape, 0, shape.length - 2);
            fanIn = shape[shape.length - 2] * receptiveFieldSize;
            fanOut = shape[shape.length - 1] * receptiveFieldSize;
        }
    } else {
        const shapeProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayProd"])(shape);
        fanIn = Math.sqrt(shapeProd);
        fanOut = Math.sqrt(shapeProd);
    }
    return [
        fanIn,
        fanOut
    ];
}
class VarianceScaling extends Initializer {
    /**
     * Constructor of VarianceScaling.
     * @throws ValueError for invalid value in scale.
     */ constructor(args){
        super();
        if (args.scale < 0.0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`scale must be a positive float. Got: ${args.scale}`);
        }
        this.scale = args.scale == null ? 1.0 : args.scale;
        this.mode = args.mode == null ? 'fanIn' : args.mode;
        checkFanMode(this.mode);
        this.distribution = args.distribution == null ? 'normal' : args.distribution;
        checkDistribution(this.distribution);
        this.seed = args.seed;
    }
    apply(shape, dtype) {
        const fans = computeFans(shape);
        const fanIn = fans[0];
        const fanOut = fans[1];
        let scale = this.scale;
        if (this.mode === 'fanIn') {
            scale /= Math.max(1, fanIn);
        } else if (this.mode === 'fanOut') {
            scale /= Math.max(1, fanOut);
        } else {
            scale /= Math.max(1, (fanIn + fanOut) / 2);
        }
        if (this.distribution === 'normal') {
            const stddev = Math.sqrt(scale);
            dtype = dtype || 'float32';
            if (dtype !== 'float32' && dtype !== 'int32') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`${this.getClassName()} does not support dType ${dtype}.`);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$truncated_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncatedNormal"])(shape, 0, stddev, dtype, this.seed);
        } else {
            const limit = Math.sqrt(3 * scale);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomUniform"])(shape, -limit, limit, dtype, this.seed);
        }
    }
    getConfig() {
        return {
            scale: this.scale,
            mode: this.mode,
            distribution: this.distribution,
            seed: this.seed
        };
    }
}
/** @nocollapse */ VarianceScaling.className = 'VarianceScaling';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(VarianceScaling);
class GlorotUniform extends VarianceScaling {
    /**
     * Constructor of GlorotUniform
     * @param scale
     * @param mode
     * @param distribution
     * @param seed
     */ constructor(args){
        super({
            scale: 1.0,
            mode: 'fanAvg',
            distribution: 'uniform',
            seed: args == null ? null : args.seed
        });
    }
    getClassName() {
        // In Python Keras, GlorotUniform is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    }
}
/** @nocollapse */ GlorotUniform.className = 'GlorotUniform';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GlorotUniform);
class GlorotNormal extends VarianceScaling {
    /**
     * Constructor of GlorotNormal.
     * @param scale
     * @param mode
     * @param distribution
     * @param seed
     */ constructor(args){
        super({
            scale: 1.0,
            mode: 'fanAvg',
            distribution: 'normal',
            seed: args == null ? null : args.seed
        });
    }
    getClassName() {
        // In Python Keras, GlorotNormal is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    }
}
/** @nocollapse */ GlorotNormal.className = 'GlorotNormal';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GlorotNormal);
class HeNormal extends VarianceScaling {
    constructor(args){
        super({
            scale: 2.0,
            mode: 'fanIn',
            distribution: 'normal',
            seed: args == null ? null : args.seed
        });
    }
    getClassName() {
        // In Python Keras, HeNormal is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    }
}
/** @nocollapse */ HeNormal.className = 'HeNormal';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(HeNormal);
class HeUniform extends VarianceScaling {
    constructor(args){
        super({
            scale: 2.0,
            mode: 'fanIn',
            distribution: 'uniform',
            seed: args == null ? null : args.seed
        });
    }
    getClassName() {
        // In Python Keras, HeUniform is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    }
}
/** @nocollapse */ HeUniform.className = 'HeUniform';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(HeUniform);
class LeCunNormal extends VarianceScaling {
    constructor(args){
        super({
            scale: 1.0,
            mode: 'fanIn',
            distribution: 'normal',
            seed: args == null ? null : args.seed
        });
    }
    getClassName() {
        // In Python Keras, LeCunNormal is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    }
}
/** @nocollapse */ LeCunNormal.className = 'LeCunNormal';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(LeCunNormal);
class LeCunUniform extends VarianceScaling {
    constructor(args){
        super({
            scale: 1.0,
            mode: 'fanIn',
            distribution: 'uniform',
            seed: args == null ? null : args.seed
        });
    }
    getClassName() {
        // In Python Keras, LeCunUniform is not a class, but a helper method
        // that creates a VarianceScaling object. Use 'VarianceScaling' as
        // class name to be compatible with that.
        return VarianceScaling.className;
    }
}
/** @nocollapse */ LeCunUniform.className = 'LeCunUniform';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(LeCunUniform);
class Orthogonal extends Initializer {
    constructor(args){
        super();
        this.DEFAULT_GAIN = 1;
        this.ELEMENTS_WARN_SLOW = 2000;
        this.gain = args.gain == null ? this.DEFAULT_GAIN : args.gain;
        this.seed = args.seed;
    }
    apply(shape, dtype) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            if (shape.length < 2) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Shape must be at least 2D.');
            }
            if (dtype !== 'int32' && dtype !== 'float32' && dtype !== undefined) {
                throw new TypeError(`Unsupported data type ${dtype}.`);
            }
            dtype = dtype;
            // flatten the input shape with the last dimension remaining its
            // original shape so it works for conv2d
            const numRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].sizeFromShape(shape.slice(0, -1));
            const numCols = shape[shape.length - 1];
            const numElements = numRows * numCols;
            if (numElements > this.ELEMENTS_WARN_SLOW) {
                console.warn(`Orthogonal initializer is being called on a matrix with more ` + `than ${this.ELEMENTS_WARN_SLOW} (${numElements}) elements: ` + `Slowness may result.`);
            }
            const flatShape = [
                Math.max(numCols, numRows),
                Math.min(numCols, numRows)
            ];
            // Generate a random matrix
            const randNormalMat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomNormal"](flatShape, 0, 1, dtype, this.seed);
            // Compute QR factorization
            const qr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ops$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["linalg"].qr(randNormalMat, false);
            let qMat = qr[0];
            const rMat = qr[1];
            // Make Q uniform
            const diag = rMat.flatten().stridedSlice([
                0
            ], [
                Math.min(numCols, numRows) * Math.min(numCols, numRows)
            ], [
                Math.min(numCols, numRows) + 1
            ]);
            qMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])(qMat, diag.sign());
            if (numRows < numCols) {
                qMat = qMat.transpose();
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scalar"])(this.gain), qMat.reshape(shape));
        });
    }
    getConfig() {
        return {
            gain: this.gain,
            seed: this.seed
        };
    }
}
/** @nocollapse */ Orthogonal.className = 'Orthogonal';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Orthogonal);
const INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    'constant': 'Constant',
    'glorotNormal': 'GlorotNormal',
    'glorotUniform': 'GlorotUniform',
    'heNormal': 'HeNormal',
    'heUniform': 'HeUniform',
    'identity': 'Identity',
    'leCunNormal': 'LeCunNormal',
    'leCunUniform': 'LeCunUniform',
    'ones': 'Ones',
    'orthogonal': 'Orthogonal',
    'randomNormal': 'RandomNormal',
    'randomUniform': 'RandomUniform',
    'truncatedNormal': 'TruncatedNormal',
    'varianceScaling': 'VarianceScaling',
    'zeros': 'Zeros'
};
function deserializeInitializer(config, customObjects = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeKerasObject"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].SerializationMap.getMap().classNameMap, customObjects, 'initializer');
}
function serializeInitializer(initializer) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeKerasObject"])(initializer);
}
function getInitializer(identifier) {
    if (typeof identifier === 'string') {
        const className = identifier in INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] : identifier;
        /* We have four 'helper' classes for common initializers that
        all get serialized as 'VarianceScaling' and shouldn't go through
        the deserializeInitializer pathway. */ if (className === 'GlorotNormal') {
            return new GlorotNormal();
        } else if (className === 'GlorotUniform') {
            return new GlorotUniform();
        } else if (className === 'HeNormal') {
            return new HeNormal();
        } else if (className === 'HeUniform') {
            return new HeUniform();
        } else if (className === 'LeCunNormal') {
            return new LeCunNormal();
        } else if (className === 'LeCunUniform') {
            return new LeCunUniform();
        } else {
            const config = {};
            config['className'] = className;
            config['config'] = {};
            return deserializeInitializer(config);
        }
    } else if (identifier instanceof Initializer) {
        return identifier;
    } else {
        return deserializeInitializer(identifier);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2luaXRpYWxpemVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILE9BQU8sRUFBVyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQVUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFekosT0FBTyxLQUFLLENBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFekQsT0FBTyxFQUF3Qix5QkFBeUIsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFILE9BQU8sRUFBQyx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzlHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUU3QyxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWM7SUFDekMseUJBQXlCLENBQUMscUJBQXFCLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBYztJQUM5Qyx5QkFBeUIsQ0FBQyx5QkFBeUIsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFnQixXQUFZLFNBQVEsYUFBYSxDQUFDLFlBQVk7SUFDM0QsMkJBQTJCO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQVNELFNB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QztRQUN0QyxJQUFJLFNBQVMsS0FBSyxjQUFjLEVBQUU7WUFDaEMsT0FBTyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxTQUFTLEtBQUssZUFBZSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUM1QjthQUFNLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUNuQyxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7U0FDdkI7YUFBTSxJQUFJLFNBQVMsS0FBSyxXQUFXLEVBQUU7WUFDcEMsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxTQUFTLEtBQUssYUFBYSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUMxQjthQUFNLElBQUksU0FBUyxLQUFLLGNBQWMsRUFBRTtZQUN2QyxPQUFPLElBQUksWUFBWSxFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLE1BQU0sTUFBTSxHQUE2QixFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkM7S0FDRjtTQUFNLElBQUksVUFBVSxZQUFZLFdBQVcsRUFBRTtRQUM1QyxPQUFPLFVBQVUsQ0FBQztLQUNuQjtTQUFNO1FBQ0wsT0FBTyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMzQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0RhdGFUeXBlLCBleWUsIGxpbmFsZywgbXVsLCBvbmVzLCByYW5kb21Vbmlmb3JtLCBzY2FsYXIsIHNlcmlhbGl6YXRpb24sIFRlbnNvciwgdGlkeSwgdHJ1bmNhdGVkTm9ybWFsLCB1dGlsLCB6ZXJvc30gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0ICogYXMgSyBmcm9tICcuL2JhY2tlbmQvdGZqc19iYWNrZW5kJztcbmltcG9ydCB7Y2hlY2tEYXRhRm9ybWF0fSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQge05vdEltcGxlbWVudGVkRXJyb3IsIFZhbHVlRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7RGF0YUZvcm1hdCwgU2hhcGV9IGZyb20gJy4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge0Rpc3RyaWJ1dGlvbiwgRmFuTW9kZSwgVkFMSURfRElTVFJJQlVUSU9OX1ZBTFVFUywgVkFMSURfRkFOX01PREVfVkFMVUVTfSBmcm9tICcuL2tlcmFzX2Zvcm1hdC9pbml0aWFsaXplcl9jb25maWcnO1xuaW1wb3J0IHtjaGVja1N0cmluZ1R5cGVVbmlvblZhbHVlLCBkZXNlcmlhbGl6ZUtlcmFzT2JqZWN0LCBzZXJpYWxpemVLZXJhc09iamVjdH0gZnJvbSAnLi91dGlscy9nZW5lcmljX3V0aWxzJztcbmltcG9ydCB7YXJyYXlQcm9kfSBmcm9tICcuL3V0aWxzL21hdGhfdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGYW5Nb2RlKHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XG4gIGNoZWNrU3RyaW5nVHlwZVVuaW9uVmFsdWUoVkFMSURfRkFOX01PREVfVkFMVUVTLCAnRmFuTW9kZScsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGlzdHJpYnV0aW9uKHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XG4gIGNoZWNrU3RyaW5nVHlwZVVuaW9uVmFsdWUoVkFMSURfRElTVFJJQlVUSU9OX1ZBTFVFUywgJ0Rpc3RyaWJ1dGlvbicsIHZhbHVlKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplciBiYXNlIGNsYXNzLlxuICpcbiAqIEBkb2Mge1xuICogICBoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnLCBuYW1lc3BhY2U6ICdpbml0aWFsaXplcnMnfVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5pdGlhbGl6ZXIgZXh0ZW5kcyBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZSB7XG4gIHB1YmxpYyBmcm9tQ29uZmlnVXNlc0N1c3RvbU9iamVjdHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhbiBpbml0aWFsIHZhbHVlLlxuICAgKiBAcGFyYW0gc2hhcGVcbiAgICogQHBhcmFtIGR0eXBlXG4gICAqIEByZXR1cm4gVGhlIGluaXQgdmFsdWUuXG4gICAqL1xuICBhYnN0cmFjdCBhcHBseShzaGFwZTogU2hhcGUsIGR0eXBlPzogRGF0YVR5cGUpOiBUZW5zb3I7XG5cbiAgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBaZXJvcyBleHRlbmRzIEluaXRpYWxpemVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnWmVyb3MnO1xuXG4gIGFwcGx5KHNoYXBlOiBTaGFwZSwgZHR5cGU/OiBEYXRhVHlwZSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHplcm9zKHNoYXBlLCBkdHlwZSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhaZXJvcyk7XG5cbmV4cG9ydCBjbGFzcyBPbmVzIGV4dGVuZHMgSW5pdGlhbGl6ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdPbmVzJztcblxuICBhcHBseShzaGFwZTogU2hhcGUsIGR0eXBlPzogRGF0YVR5cGUpOiBUZW5zb3Ige1xuICAgIHJldHVybiBvbmVzKHNoYXBlLCBkdHlwZSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhPbmVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb25zdGFudEFyZ3Mge1xuICAvKiogVGhlIHZhbHVlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHZhcmlhYmxlLiAqL1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc3RhbnQgZXh0ZW5kcyBJbml0aWFsaXplciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ0NvbnN0YW50JztcbiAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBDb25zdGFudEFyZ3MpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICh0eXBlb2YgYXJncyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBFeHBlY3RlZCBhcmd1bWVudCBvZiB0eXBlIENvbnN0YW50Q29uZmlnIGJ1dCBnb3QgJHthcmdzfWApO1xuICAgIH1cbiAgICBpZiAoYXJncy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgY29uZmlnIG11c3QgaGF2ZSB2YWx1ZSBzZXQgYnV0IGdvdCAke2FyZ3N9YCk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBhcmdzLnZhbHVlO1xuICB9XG5cbiAgYXBwbHkoc2hhcGU6IFNoYXBlLCBkdHlwZT86IERhdGFUeXBlKTogVGVuc29yIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiBtdWwoc2NhbGFyKHRoaXMudmFsdWUpLCBvbmVzKHNoYXBlLCBkdHlwZSkpKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoQ29uc3RhbnQpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbVVuaWZvcm1BcmdzIHtcbiAgLyoqIExvd2VyIGJvdW5kIG9mIHRoZSByYW5nZSBvZiByYW5kb20gdmFsdWVzIHRvIGdlbmVyYXRlLiAqL1xuICBtaW52YWw/OiBudW1iZXI7XG4gIC8qKiBVcHBlciBib3VuZCBvZiB0aGUgcmFuZ2Ugb2YgcmFuZG9tIHZhbHVlcyB0byBnZW5lcmF0ZS4gKi9cbiAgbWF4dmFsPzogbnVtYmVyO1xuICAvKiogVXNlZCB0byBzZWVkIHRoZSByYW5kb20gZ2VuZXJhdG9yLiAqL1xuICBzZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmFuZG9tVW5pZm9ybSBleHRlbmRzIEluaXRpYWxpemVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnUmFuZG9tVW5pZm9ybSc7XG4gIHJlYWRvbmx5IERFRkFVTFRfTUlOVkFMID0gLTAuMDU7XG4gIHJlYWRvbmx5IERFRkFVTFRfTUFYVkFMID0gMC4wNTtcbiAgcHJpdmF0ZSBtaW52YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBtYXh2YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBzZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXJnczogUmFuZG9tVW5pZm9ybUFyZ3MpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWludmFsID0gYXJncy5taW52YWwgfHwgdGhpcy5ERUZBVUxUX01JTlZBTDtcbiAgICB0aGlzLm1heHZhbCA9IGFyZ3MubWF4dmFsIHx8IHRoaXMuREVGQVVMVF9NQVhWQUw7XG4gICAgdGhpcy5zZWVkID0gYXJncy5zZWVkO1xuICB9XG5cbiAgYXBwbHkoc2hhcGU6IFNoYXBlLCBkdHlwZT86IERhdGFUeXBlKTogVGVuc29yIHtcbiAgICByZXR1cm4gcmFuZG9tVW5pZm9ybShzaGFwZSwgdGhpcy5taW52YWwsIHRoaXMubWF4dmFsLCBkdHlwZSwgdGhpcy5zZWVkKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7bWludmFsOiB0aGlzLm1pbnZhbCwgbWF4dmFsOiB0aGlzLm1heHZhbCwgc2VlZDogdGhpcy5zZWVkfTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFJhbmRvbVVuaWZvcm0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbU5vcm1hbEFyZ3Mge1xuICAvKiogTWVhbiBvZiB0aGUgcmFuZG9tIHZhbHVlcyB0byBnZW5lcmF0ZS4gKi9cbiAgbWVhbj86IG51bWJlcjtcbiAgLyoqIFN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgcmFuZG9tIHZhbHVlcyB0byBnZW5lcmF0ZS4gKi9cbiAgc3RkZGV2PzogbnVtYmVyO1xuICAvKiogVXNlZCB0byBzZWVkIHRoZSByYW5kb20gZ2VuZXJhdG9yLiAqL1xuICBzZWVkPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmFuZG9tTm9ybWFsIGV4dGVuZHMgSW5pdGlhbGl6ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdSYW5kb21Ob3JtYWwnO1xuICByZWFkb25seSBERUZBVUxUX01FQU4gPSAwLjtcbiAgcmVhZG9ubHkgREVGQVVMVF9TVERERVYgPSAwLjA1O1xuICBwcml2YXRlIG1lYW46IG51bWJlcjtcbiAgcHJpdmF0ZSBzdGRkZXY6IG51bWJlcjtcbiAgcHJpdmF0ZSBzZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXJnczogUmFuZG9tTm9ybWFsQXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tZWFuID0gYXJncy5tZWFuIHx8IHRoaXMuREVGQVVMVF9NRUFOO1xuICAgIHRoaXMuc3RkZGV2ID0gYXJncy5zdGRkZXYgfHwgdGhpcy5ERUZBVUxUX1NURERFVjtcbiAgICB0aGlzLnNlZWQgPSBhcmdzLnNlZWQ7XG4gIH1cblxuICBhcHBseShzaGFwZTogU2hhcGUsIGR0eXBlPzogRGF0YVR5cGUpOiBUZW5zb3Ige1xuICAgIGR0eXBlID0gZHR5cGUgfHwgJ2Zsb2F0MzInO1xuICAgIGlmIChkdHlwZSAhPT0gJ2Zsb2F0MzInICYmIGR0eXBlICE9PSAnaW50MzInKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICBgcmFuZG9tTm9ybWFsIGRvZXMgbm90IHN1cHBvcnQgZFR5cGUgJHtkdHlwZX0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEsucmFuZG9tTm9ybWFsKHNoYXBlLCB0aGlzLm1lYW4sIHRoaXMuc3RkZGV2LCBkdHlwZSwgdGhpcy5zZWVkKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7bWVhbjogdGhpcy5tZWFuLCBzdGRkZXY6IHRoaXMuc3RkZGV2LCBzZWVkOiB0aGlzLnNlZWR9O1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoUmFuZG9tTm9ybWFsKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcnVuY2F0ZWROb3JtYWxBcmdzIHtcbiAgLyoqIE1lYW4gb2YgdGhlIHJhbmRvbSB2YWx1ZXMgdG8gZ2VuZXJhdGUuICovXG4gIG1lYW4/OiBudW1iZXI7XG4gIC8qKiBTdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHJhbmRvbSB2YWx1ZXMgdG8gZ2VuZXJhdGUuICovXG4gIHN0ZGRldj86IG51bWJlcjtcbiAgLyoqIFVzZWQgdG8gc2VlZCB0aGUgcmFuZG9tIGdlbmVyYXRvci4gKi9cbiAgc2VlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFRydW5jYXRlZE5vcm1hbCBleHRlbmRzIEluaXRpYWxpemVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnVHJ1bmNhdGVkTm9ybWFsJztcblxuICByZWFkb25seSBERUZBVUxUX01FQU4gPSAwLjtcbiAgcmVhZG9ubHkgREVGQVVMVF9TVERERVYgPSAwLjA1O1xuICBwcml2YXRlIG1lYW46IG51bWJlcjtcbiAgcHJpdmF0ZSBzdGRkZXY6IG51bWJlcjtcbiAgcHJpdmF0ZSBzZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXJnczogVHJ1bmNhdGVkTm9ybWFsQXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tZWFuID0gYXJncy5tZWFuIHx8IHRoaXMuREVGQVVMVF9NRUFOO1xuICAgIHRoaXMuc3RkZGV2ID0gYXJncy5zdGRkZXYgfHwgdGhpcy5ERUZBVUxUX1NURERFVjtcbiAgICB0aGlzLnNlZWQgPSBhcmdzLnNlZWQ7XG4gIH1cblxuICBhcHBseShzaGFwZTogU2hhcGUsIGR0eXBlPzogRGF0YVR5cGUpOiBUZW5zb3Ige1xuICAgIGR0eXBlID0gZHR5cGUgfHwgJ2Zsb2F0MzInO1xuICAgIGlmIChkdHlwZSAhPT0gJ2Zsb2F0MzInICYmIGR0eXBlICE9PSAnaW50MzInKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICBgdHJ1bmNhdGVkTm9ybWFsIGRvZXMgbm90IHN1cHBvcnQgZFR5cGUgJHtkdHlwZX0uYCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVuY2F0ZWROb3JtYWwoc2hhcGUsIHRoaXMubWVhbiwgdGhpcy5zdGRkZXYsIGR0eXBlLCB0aGlzLnNlZWQpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgcmV0dXJuIHttZWFuOiB0aGlzLm1lYW4sIHN0ZGRldjogdGhpcy5zdGRkZXYsIHNlZWQ6IHRoaXMuc2VlZH07XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhUcnVuY2F0ZWROb3JtYWwpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElkZW50aXR5QXJncyB7XG4gIC8qKlxuICAgKiBNdWx0aXBsaWNhdGl2ZSBmYWN0b3IgdG8gYXBwbHkgdG8gdGhlIGlkZW50aXR5IG1hdHJpeC5cbiAgICovXG4gIGdhaW4/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIEluaXRpYWxpemVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnSWRlbnRpdHknO1xuICBwcml2YXRlIGdhaW46IG51bWJlcjtcbiAgY29uc3RydWN0b3IoYXJnczogSWRlbnRpdHlBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdhaW4gPSBhcmdzLmdhaW4gIT0gbnVsbCA/IGFyZ3MuZ2FpbiA6IDEuMDtcbiAgfVxuXG4gIGFwcGx5KHNoYXBlOiBTaGFwZSwgZHR5cGU/OiBEYXRhVHlwZSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgaWYgKHNoYXBlLmxlbmd0aCAhPT0gMiB8fCBzaGFwZVswXSAhPT0gc2hhcGVbMV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAnSWRlbnRpdHkgbWF0cml4IGluaXRpYWxpemVyIGNhbiBvbmx5IGJlIHVzZWQgZm9yJyArXG4gICAgICAgICAgICAnIDJEIHNxdWFyZSBtYXRyaWNlcy4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtdWwodGhpcy5nYWluLCBleWUoc2hhcGVbMF0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7Z2FpbjogdGhpcy5nYWlufTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKElkZW50aXR5KTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgbnVtYmVyIG9mIGlucHV0IGFuZCBvdXRwdXQgdW5pdHMgZm9yIGEgd2VpZ2h0IHNoYXBlLlxuICogQHBhcmFtIHNoYXBlIFNoYXBlIG9mIHdlaWdodC5cbiAqIEBwYXJhbSBkYXRhRm9ybWF0IGRhdGEgZm9ybWF0IHRvIHVzZSBmb3IgY29udm9sdXRpb24ga2VybmVscy5cbiAqICAgTm90ZSB0aGF0IGFsbCBrZXJuZWxzIGluIEtlcmFzIGFyZSBzdGFuZGFyZGl6ZWQgb24gdGhlXG4gKiAgIENIQU5ORUxfTEFTVCBvcmRlcmluZyAoZXZlbiB3aGVuIGlucHV0cyBhcmUgc2V0IHRvIENIQU5ORUxfRklSU1QpLlxuICogQHJldHVybiBBbiBsZW5ndGgtMiBhcnJheTogZmFuSW4sIGZhbk91dC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUZhbnMoXG4gICAgc2hhcGU6IFNoYXBlLCBkYXRhRm9ybWF0OiBEYXRhRm9ybWF0ID0gJ2NoYW5uZWxzTGFzdCcpOiBudW1iZXJbXSB7XG4gIGxldCBmYW5JbjogbnVtYmVyO1xuICBsZXQgZmFuT3V0OiBudW1iZXI7XG4gIGNoZWNrRGF0YUZvcm1hdChkYXRhRm9ybWF0KTtcbiAgaWYgKHNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgIGZhbkluID0gc2hhcGVbMF07XG4gICAgZmFuT3V0ID0gc2hhcGVbMV07XG4gIH0gZWxzZSBpZiAoWzMsIDQsIDVdLmluZGV4T2Yoc2hhcGUubGVuZ3RoKSAhPT0gLTEpIHtcbiAgICBpZiAoZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzRmlyc3QnKSB7XG4gICAgICBjb25zdCByZWNlcHRpdmVGaWVsZFNpemUgPSBhcnJheVByb2Qoc2hhcGUsIDIpO1xuICAgICAgZmFuSW4gPSBzaGFwZVsxXSAqIHJlY2VwdGl2ZUZpZWxkU2l6ZTtcbiAgICAgIGZhbk91dCA9IHNoYXBlWzBdICogcmVjZXB0aXZlRmllbGRTaXplO1xuICAgIH0gZWxzZSBpZiAoZGF0YUZvcm1hdCA9PT0gJ2NoYW5uZWxzTGFzdCcpIHtcbiAgICAgIGNvbnN0IHJlY2VwdGl2ZUZpZWxkU2l6ZSA9IGFycmF5UHJvZChzaGFwZSwgMCwgc2hhcGUubGVuZ3RoIC0gMik7XG4gICAgICBmYW5JbiA9IHNoYXBlW3NoYXBlLmxlbmd0aCAtIDJdICogcmVjZXB0aXZlRmllbGRTaXplO1xuICAgICAgZmFuT3V0ID0gc2hhcGVbc2hhcGUubGVuZ3RoIC0gMV0gKiByZWNlcHRpdmVGaWVsZFNpemU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNoYXBlUHJvZCA9IGFycmF5UHJvZChzaGFwZSk7XG4gICAgZmFuSW4gPSBNYXRoLnNxcnQoc2hhcGVQcm9kKTtcbiAgICBmYW5PdXQgPSBNYXRoLnNxcnQoc2hhcGVQcm9kKTtcbiAgfVxuXG4gIHJldHVybiBbZmFuSW4sIGZhbk91dF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWFuY2VTY2FsaW5nQXJncyB7XG4gIC8qKiBTY2FsaW5nIGZhY3RvciAocG9zaXRpdmUgZmxvYXQpLiAqL1xuICBzY2FsZT86IG51bWJlcjtcblxuICAvKiogRmFubmluZyBtb2RlIGZvciBpbnB1dHMgYW5kIG91dHB1dHMuICovXG4gIG1vZGU/OiBGYW5Nb2RlO1xuXG4gIC8qKiBQcm9iYWJpbGlzdGljIGRpc3RyaWJ1dGlvbiBvZiB0aGUgdmFsdWVzLiAqL1xuICBkaXN0cmlidXRpb24/OiBEaXN0cmlidXRpb247XG5cbiAgLyoqIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIHNlZWQuICovXG4gIHNlZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYW5jZVNjYWxpbmcgZXh0ZW5kcyBJbml0aWFsaXplciB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY2xhc3NOYW1lID0gJ1ZhcmlhbmNlU2NhbGluZyc7XG4gIHByaXZhdGUgc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtb2RlOiBGYW5Nb2RlO1xuICBwcml2YXRlIGRpc3RyaWJ1dGlvbjogRGlzdHJpYnV0aW9uO1xuICBwcml2YXRlIHNlZWQ6IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igb2YgVmFyaWFuY2VTY2FsaW5nLlxuICAgKiBAdGhyb3dzIFZhbHVlRXJyb3IgZm9yIGludmFsaWQgdmFsdWUgaW4gc2NhbGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzOiBWYXJpYW5jZVNjYWxpbmdBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoYXJncy5zY2FsZSA8IDAuMCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYHNjYWxlIG11c3QgYmUgYSBwb3NpdGl2ZSBmbG9hdC4gR290OiAke2FyZ3Muc2NhbGV9YCk7XG4gICAgfVxuICAgIHRoaXMuc2NhbGUgPSBhcmdzLnNjYWxlID09IG51bGwgPyAxLjAgOiBhcmdzLnNjYWxlO1xuICAgIHRoaXMubW9kZSA9IGFyZ3MubW9kZSA9PSBudWxsID8gJ2ZhbkluJyA6IGFyZ3MubW9kZTtcbiAgICBjaGVja0Zhbk1vZGUodGhpcy5tb2RlKTtcbiAgICB0aGlzLmRpc3RyaWJ1dGlvbiA9XG4gICAgICAgIGFyZ3MuZGlzdHJpYnV0aW9uID09IG51bGwgPyAnbm9ybWFsJyA6IGFyZ3MuZGlzdHJpYnV0aW9uO1xuICAgIGNoZWNrRGlzdHJpYnV0aW9uKHRoaXMuZGlzdHJpYnV0aW9uKTtcbiAgICB0aGlzLnNlZWQgPSBhcmdzLnNlZWQ7XG4gIH1cblxuICBhcHBseShzaGFwZTogU2hhcGUsIGR0eXBlPzogRGF0YVR5cGUpOiBUZW5zb3Ige1xuICAgIGNvbnN0IGZhbnMgPSBjb21wdXRlRmFucyhzaGFwZSk7XG4gICAgY29uc3QgZmFuSW4gPSBmYW5zWzBdO1xuICAgIGNvbnN0IGZhbk91dCA9IGZhbnNbMV07XG4gICAgbGV0IHNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnZmFuSW4nKSB7XG4gICAgICBzY2FsZSAvPSBNYXRoLm1heCgxLCBmYW5Jbik7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdmYW5PdXQnKSB7XG4gICAgICBzY2FsZSAvPSBNYXRoLm1heCgxLCBmYW5PdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSAvPSBNYXRoLm1heCgxLCAoZmFuSW4gKyBmYW5PdXQpIC8gMik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzdHJpYnV0aW9uID09PSAnbm9ybWFsJykge1xuICAgICAgY29uc3Qgc3RkZGV2ID0gTWF0aC5zcXJ0KHNjYWxlKTtcbiAgICAgIGR0eXBlID0gZHR5cGUgfHwgJ2Zsb2F0MzInO1xuICAgICAgaWYgKGR0eXBlICE9PSAnZmxvYXQzMicgJiYgZHR5cGUgIT09ICdpbnQzMicpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzTmFtZSgpfSBkb2VzIG5vdCBzdXBwb3J0IGRUeXBlICR7ZHR5cGV9LmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydW5jYXRlZE5vcm1hbChzaGFwZSwgMCwgc3RkZGV2LCBkdHlwZSwgdGhpcy5zZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGltaXQgPSBNYXRoLnNxcnQoMyAqIHNjYWxlKTtcbiAgICAgIHJldHVybiByYW5kb21Vbmlmb3JtKHNoYXBlLCAtbGltaXQsIGxpbWl0LCBkdHlwZSwgdGhpcy5zZWVkKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBkaXN0cmlidXRpb246IHRoaXMuZGlzdHJpYnV0aW9uLFxuICAgICAgc2VlZDogdGhpcy5zZWVkXG4gICAgfTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFZhcmlhbmNlU2NhbGluZyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VlZE9ubHlJbml0aWFsaXplckFyZ3Mge1xuICAvKiogUmFuZG9tIG51bWJlciBnZW5lcmF0b3Igc2VlZC4gKi9cbiAgc2VlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEdsb3JvdFVuaWZvcm0gZXh0ZW5kcyBWYXJpYW5jZVNjYWxpbmcge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIG92ZXJyaWRlIGNsYXNzTmFtZSA9ICdHbG9yb3RVbmlmb3JtJztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igb2YgR2xvcm90VW5pZm9ybVxuICAgKiBAcGFyYW0gc2NhbGVcbiAgICogQHBhcmFtIG1vZGVcbiAgICogQHBhcmFtIGRpc3RyaWJ1dGlvblxuICAgKiBAcGFyYW0gc2VlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoYXJncz86IFNlZWRPbmx5SW5pdGlhbGl6ZXJBcmdzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgc2NhbGU6IDEuMCxcbiAgICAgIG1vZGU6ICdmYW5BdmcnLFxuICAgICAgZGlzdHJpYnV0aW9uOiAndW5pZm9ybScsXG4gICAgICBzZWVkOiBhcmdzID09IG51bGwgPyBudWxsIDogYXJncy5zZWVkXG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAvLyBJbiBQeXRob24gS2VyYXMsIEdsb3JvdFVuaWZvcm0gaXMgbm90IGEgY2xhc3MsIGJ1dCBhIGhlbHBlciBtZXRob2RcbiAgICAvLyB0aGF0IGNyZWF0ZXMgYSBWYXJpYW5jZVNjYWxpbmcgb2JqZWN0LiBVc2UgJ1ZhcmlhbmNlU2NhbGluZycgYXNcbiAgICAvLyBjbGFzcyBuYW1lIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGF0LlxuICAgIHJldHVybiBWYXJpYW5jZVNjYWxpbmcuY2xhc3NOYW1lO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2xvcm90VW5pZm9ybSk7XG5cbmV4cG9ydCBjbGFzcyBHbG9yb3ROb3JtYWwgZXh0ZW5kcyBWYXJpYW5jZVNjYWxpbmcge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIG92ZXJyaWRlIGNsYXNzTmFtZSA9ICdHbG9yb3ROb3JtYWwnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBvZiBHbG9yb3ROb3JtYWwuXG4gICAqIEBwYXJhbSBzY2FsZVxuICAgKiBAcGFyYW0gbW9kZVxuICAgKiBAcGFyYW0gZGlzdHJpYnV0aW9uXG4gICAqIEBwYXJhbSBzZWVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhcmdzPzogU2VlZE9ubHlJbml0aWFsaXplckFyZ3MpIHtcbiAgICBzdXBlcih7XG4gICAgICBzY2FsZTogMS4wLFxuICAgICAgbW9kZTogJ2ZhbkF2ZycsXG4gICAgICBkaXN0cmlidXRpb246ICdub3JtYWwnLFxuICAgICAgc2VlZDogYXJncyA9PSBudWxsID8gbnVsbCA6IGFyZ3Muc2VlZFxuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gSW4gUHl0aG9uIEtlcmFzLCBHbG9yb3ROb3JtYWwgaXMgbm90IGEgY2xhc3MsIGJ1dCBhIGhlbHBlciBtZXRob2RcbiAgICAvLyB0aGF0IGNyZWF0ZXMgYSBWYXJpYW5jZVNjYWxpbmcgb2JqZWN0LiBVc2UgJ1ZhcmlhbmNlU2NhbGluZycgYXNcbiAgICAvLyBjbGFzcyBuYW1lIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGF0LlxuICAgIHJldHVybiBWYXJpYW5jZVNjYWxpbmcuY2xhc3NOYW1lO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2xvcm90Tm9ybWFsKTtcblxuZXhwb3J0IGNsYXNzIEhlTm9ybWFsIGV4dGVuZHMgVmFyaWFuY2VTY2FsaW5nIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBjbGFzc05hbWUgPSAnSGVOb3JtYWwnO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBTZWVkT25seUluaXRpYWxpemVyQXJncykge1xuICAgIHN1cGVyKHtcbiAgICAgIHNjYWxlOiAyLjAsXG4gICAgICBtb2RlOiAnZmFuSW4nLFxuICAgICAgZGlzdHJpYnV0aW9uOiAnbm9ybWFsJyxcbiAgICAgIHNlZWQ6IGFyZ3MgPT0gbnVsbCA/IG51bGwgOiBhcmdzLnNlZWRcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIEluIFB5dGhvbiBLZXJhcywgSGVOb3JtYWwgaXMgbm90IGEgY2xhc3MsIGJ1dCBhIGhlbHBlciBtZXRob2RcbiAgICAvLyB0aGF0IGNyZWF0ZXMgYSBWYXJpYW5jZVNjYWxpbmcgb2JqZWN0LiBVc2UgJ1ZhcmlhbmNlU2NhbGluZycgYXNcbiAgICAvLyBjbGFzcyBuYW1lIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGF0LlxuICAgIHJldHVybiBWYXJpYW5jZVNjYWxpbmcuY2xhc3NOYW1lO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoSGVOb3JtYWwpO1xuXG5leHBvcnQgY2xhc3MgSGVVbmlmb3JtIGV4dGVuZHMgVmFyaWFuY2VTY2FsaW5nIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBjbGFzc05hbWUgPSAnSGVVbmlmb3JtJztcblxuICBjb25zdHJ1Y3RvcihhcmdzPzogU2VlZE9ubHlJbml0aWFsaXplckFyZ3MpIHtcbiAgICBzdXBlcih7XG4gICAgICBzY2FsZTogMi4wLFxuICAgICAgbW9kZTogJ2ZhbkluJyxcbiAgICAgIGRpc3RyaWJ1dGlvbjogJ3VuaWZvcm0nLFxuICAgICAgc2VlZDogYXJncyA9PSBudWxsID8gbnVsbCA6IGFyZ3Muc2VlZFxuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gSW4gUHl0aG9uIEtlcmFzLCBIZVVuaWZvcm0gaXMgbm90IGEgY2xhc3MsIGJ1dCBhIGhlbHBlciBtZXRob2RcbiAgICAvLyB0aGF0IGNyZWF0ZXMgYSBWYXJpYW5jZVNjYWxpbmcgb2JqZWN0LiBVc2UgJ1ZhcmlhbmNlU2NhbGluZycgYXNcbiAgICAvLyBjbGFzcyBuYW1lIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGF0LlxuICAgIHJldHVybiBWYXJpYW5jZVNjYWxpbmcuY2xhc3NOYW1lO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoSGVVbmlmb3JtKTtcblxuZXhwb3J0IGNsYXNzIExlQ3VuTm9ybWFsIGV4dGVuZHMgVmFyaWFuY2VTY2FsaW5nIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBjbGFzc05hbWUgPSAnTGVDdW5Ob3JtYWwnO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBTZWVkT25seUluaXRpYWxpemVyQXJncykge1xuICAgIHN1cGVyKHtcbiAgICAgIHNjYWxlOiAxLjAsXG4gICAgICBtb2RlOiAnZmFuSW4nLFxuICAgICAgZGlzdHJpYnV0aW9uOiAnbm9ybWFsJyxcbiAgICAgIHNlZWQ6IGFyZ3MgPT0gbnVsbCA/IG51bGwgOiBhcmdzLnNlZWRcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIEluIFB5dGhvbiBLZXJhcywgTGVDdW5Ob3JtYWwgaXMgbm90IGEgY2xhc3MsIGJ1dCBhIGhlbHBlciBtZXRob2RcbiAgICAvLyB0aGF0IGNyZWF0ZXMgYSBWYXJpYW5jZVNjYWxpbmcgb2JqZWN0LiBVc2UgJ1ZhcmlhbmNlU2NhbGluZycgYXNcbiAgICAvLyBjbGFzcyBuYW1lIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGF0LlxuICAgIHJldHVybiBWYXJpYW5jZVNjYWxpbmcuY2xhc3NOYW1lO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTGVDdW5Ob3JtYWwpO1xuXG5leHBvcnQgY2xhc3MgTGVDdW5Vbmlmb3JtIGV4dGVuZHMgVmFyaWFuY2VTY2FsaW5nIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBjbGFzc05hbWUgPSAnTGVDdW5Vbmlmb3JtJztcblxuICBjb25zdHJ1Y3RvcihhcmdzPzogU2VlZE9ubHlJbml0aWFsaXplckFyZ3MpIHtcbiAgICBzdXBlcih7XG4gICAgICBzY2FsZTogMS4wLFxuICAgICAgbW9kZTogJ2ZhbkluJyxcbiAgICAgIGRpc3RyaWJ1dGlvbjogJ3VuaWZvcm0nLFxuICAgICAgc2VlZDogYXJncyA9PSBudWxsID8gbnVsbCA6IGFyZ3Muc2VlZFxuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgLy8gSW4gUHl0aG9uIEtlcmFzLCBMZUN1blVuaWZvcm0gaXMgbm90IGEgY2xhc3MsIGJ1dCBhIGhlbHBlciBtZXRob2RcbiAgICAvLyB0aGF0IGNyZWF0ZXMgYSBWYXJpYW5jZVNjYWxpbmcgb2JqZWN0LiBVc2UgJ1ZhcmlhbmNlU2NhbGluZycgYXNcbiAgICAvLyBjbGFzcyBuYW1lIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB0aGF0LlxuICAgIHJldHVybiBWYXJpYW5jZVNjYWxpbmcuY2xhc3NOYW1lO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTGVDdW5Vbmlmb3JtKTtcblxuZXhwb3J0IGludGVyZmFjZSBPcnRob2dvbmFsQXJncyBleHRlbmRzIFNlZWRPbmx5SW5pdGlhbGl6ZXJBcmdzIHtcbiAgLyoqXG4gICAqIE11bHRpcGxpY2F0aXZlIGZhY3RvciB0byBhcHBseSB0byB0aGUgb3J0aG9nb25hbCBtYXRyaXguIERlZmF1bHRzIHRvIDEuXG4gICAqL1xuICBnYWluPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgT3J0aG9nb25hbCBleHRlbmRzIEluaXRpYWxpemVyIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnT3J0aG9nb25hbCc7XG4gIHJlYWRvbmx5IERFRkFVTFRfR0FJTiA9IDE7XG4gIHJlYWRvbmx5IEVMRU1FTlRTX1dBUk5fU0xPVyA9IDIwMDA7XG4gIHByb3RlY3RlZCByZWFkb25seSBnYWluOiBudW1iZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBzZWVkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXJncz86IE9ydGhvZ29uYWxBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdhaW4gPSBhcmdzLmdhaW4gPT0gbnVsbCA/IHRoaXMuREVGQVVMVF9HQUlOIDogYXJncy5nYWluO1xuICAgIHRoaXMuc2VlZCA9IGFyZ3Muc2VlZDtcbiAgfVxuXG4gIGFwcGx5KHNoYXBlOiBTaGFwZSwgZHR5cGU/OiBEYXRhVHlwZSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgaWYgKHNoYXBlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ1NoYXBlIG11c3QgYmUgYXQgbGVhc3QgMkQuJyk7XG4gICAgICB9XG4gICAgICBpZiAoZHR5cGUgIT09ICdpbnQzMicgJiYgZHR5cGUgIT09ICdmbG9hdDMyJyAmJiBkdHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVuc3VwcG9ydGVkIGRhdGEgdHlwZSAke2R0eXBlfS5gKTtcbiAgICAgIH1cbiAgICAgIGR0eXBlID0gZHR5cGUgYXMgJ2ludDMyJyB8ICdmbG9hdDMyJyB8IHVuZGVmaW5lZDtcblxuICAgICAgLy8gZmxhdHRlbiB0aGUgaW5wdXQgc2hhcGUgd2l0aCB0aGUgbGFzdCBkaW1lbnNpb24gcmVtYWluaW5nIGl0c1xuICAgICAgLy8gb3JpZ2luYWwgc2hhcGUgc28gaXQgd29ya3MgZm9yIGNvbnYyZFxuICAgICAgY29uc3QgbnVtUm93cyA9IHV0aWwuc2l6ZUZyb21TaGFwZShzaGFwZS5zbGljZSgwLCAtMSkpO1xuICAgICAgY29uc3QgbnVtQ29scyA9IHNoYXBlW3NoYXBlLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgbnVtRWxlbWVudHMgPSBudW1Sb3dzICogbnVtQ29scztcbiAgICAgIGlmIChudW1FbGVtZW50cyA+IHRoaXMuRUxFTUVOVFNfV0FSTl9TTE9XKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBPcnRob2dvbmFsIGluaXRpYWxpemVyIGlzIGJlaW5nIGNhbGxlZCBvbiBhIG1hdHJpeCB3aXRoIG1vcmUgYCArXG4gICAgICAgICAgICBgdGhhbiAke3RoaXMuRUxFTUVOVFNfV0FSTl9TTE9XfSAoJHtudW1FbGVtZW50c30pIGVsZW1lbnRzOiBgICtcbiAgICAgICAgICAgIGBTbG93bmVzcyBtYXkgcmVzdWx0LmApO1xuICAgICAgfVxuICAgICAgY29uc3QgZmxhdFNoYXBlID1cbiAgICAgICAgICBbTWF0aC5tYXgobnVtQ29scywgbnVtUm93cyksIE1hdGgubWluKG51bUNvbHMsIG51bVJvd3MpXTtcblxuICAgICAgLy8gR2VuZXJhdGUgYSByYW5kb20gbWF0cml4XG4gICAgICBjb25zdCByYW5kTm9ybWFsTWF0ID0gSy5yYW5kb21Ob3JtYWwoZmxhdFNoYXBlLCAwLCAxLCBkdHlwZSwgdGhpcy5zZWVkKTtcblxuICAgICAgLy8gQ29tcHV0ZSBRUiBmYWN0b3JpemF0aW9uXG4gICAgICBjb25zdCBxciA9IGxpbmFsZy5xcihyYW5kTm9ybWFsTWF0LCBmYWxzZSk7XG4gICAgICBsZXQgcU1hdCA9IHFyWzBdO1xuICAgICAgY29uc3Qgck1hdCA9IHFyWzFdO1xuXG4gICAgICAvLyBNYWtlIFEgdW5pZm9ybVxuICAgICAgY29uc3QgZGlhZyA9IHJNYXQuZmxhdHRlbigpLnN0cmlkZWRTbGljZShcbiAgICAgICAgICBbMF0sIFtNYXRoLm1pbihudW1Db2xzLCBudW1Sb3dzKSAqIE1hdGgubWluKG51bUNvbHMsIG51bVJvd3MpXSxcbiAgICAgICAgICBbTWF0aC5taW4obnVtQ29scywgbnVtUm93cykgKyAxXSk7XG4gICAgICBxTWF0ID0gbXVsKHFNYXQsIGRpYWcuc2lnbigpKTtcbiAgICAgIGlmIChudW1Sb3dzIDwgbnVtQ29scykge1xuICAgICAgICBxTWF0ID0gcU1hdC50cmFuc3Bvc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG11bChzY2FsYXIodGhpcy5nYWluKSwgcU1hdC5yZXNoYXBlKHNoYXBlKSk7XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2FpbjogdGhpcy5nYWluLFxuICAgICAgc2VlZDogdGhpcy5zZWVkLFxuICAgIH07XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhPcnRob2dvbmFsKTtcblxuLyoqIEBkb2NpbmxpbmUgKi9cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVySWRlbnRpZmllciA9XG4gICAgJ2NvbnN0YW50J3wnZ2xvcm90Tm9ybWFsJ3wnZ2xvcm90VW5pZm9ybSd8J2hlTm9ybWFsJ3wnaGVVbmlmb3JtJ3wnaWRlbnRpdHknfFxuICAgICdsZUN1bk5vcm1hbCd8J2xlQ3VuVW5pZm9ybSd8J29uZXMnfCdvcnRob2dvbmFsJ3wncmFuZG9tTm9ybWFsJ3xcbiAgICAncmFuZG9tVW5pZm9ybSd8J3RydW5jYXRlZE5vcm1hbCd8J3ZhcmlhbmNlU2NhbGluZyd8J3plcm9zJ3xzdHJpbmc7XG5cbi8vIE1hcHMgdGhlIEphdmFTY3JpcHQtbGlrZSBpZGVudGlmaWVyIGtleXMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgcmVnaXN0cnlcbi8vIHN5bWJvbHMuXG5leHBvcnQgY29uc3QgSU5JVElBTElaRVJfSURFTlRJRklFUl9SRUdJU1RSWV9TWU1CT0xfTUFQOlxuICAgIHtbaWRlbnRpZmllciBpbiBJbml0aWFsaXplcklkZW50aWZpZXJdOiBzdHJpbmd9ID0ge1xuICAgICAgJ2NvbnN0YW50JzogJ0NvbnN0YW50JyxcbiAgICAgICdnbG9yb3ROb3JtYWwnOiAnR2xvcm90Tm9ybWFsJyxcbiAgICAgICdnbG9yb3RVbmlmb3JtJzogJ0dsb3JvdFVuaWZvcm0nLFxuICAgICAgJ2hlTm9ybWFsJzogJ0hlTm9ybWFsJyxcbiAgICAgICdoZVVuaWZvcm0nOiAnSGVVbmlmb3JtJyxcbiAgICAgICdpZGVudGl0eSc6ICdJZGVudGl0eScsXG4gICAgICAnbGVDdW5Ob3JtYWwnOiAnTGVDdW5Ob3JtYWwnLFxuICAgICAgJ2xlQ3VuVW5pZm9ybSc6ICdMZUN1blVuaWZvcm0nLFxuICAgICAgJ29uZXMnOiAnT25lcycsXG4gICAgICAnb3J0aG9nb25hbCc6ICdPcnRob2dvbmFsJyxcbiAgICAgICdyYW5kb21Ob3JtYWwnOiAnUmFuZG9tTm9ybWFsJyxcbiAgICAgICdyYW5kb21Vbmlmb3JtJzogJ1JhbmRvbVVuaWZvcm0nLFxuICAgICAgJ3RydW5jYXRlZE5vcm1hbCc6ICdUcnVuY2F0ZWROb3JtYWwnLFxuICAgICAgJ3ZhcmlhbmNlU2NhbGluZyc6ICdWYXJpYW5jZVNjYWxpbmcnLFxuICAgICAgJ3plcm9zJzogJ1plcm9zJ1xuICAgIH07XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplSW5pdGlhbGl6ZXIoXG4gICAgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QsXG4gICAgY3VzdG9tT2JqZWN0czogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge30pOiBJbml0aWFsaXplciB7XG4gIHJldHVybiBkZXNlcmlhbGl6ZUtlcmFzT2JqZWN0KFxuICAgICAgY29uZmlnLCBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YXRpb25NYXAuZ2V0TWFwKCkuY2xhc3NOYW1lTWFwLFxuICAgICAgY3VzdG9tT2JqZWN0cywgJ2luaXRpYWxpemVyJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbml0aWFsaXplcihpbml0aWFsaXplcjogSW5pdGlhbGl6ZXIpOlxuICAgIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdFZhbHVlIHtcbiAgcmV0dXJuIHNlcmlhbGl6ZUtlcmFzT2JqZWN0KGluaXRpYWxpemVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxpemVyKGlkZW50aWZpZXI6IEluaXRpYWxpemVySWRlbnRpZmllcnxJbml0aWFsaXplcnxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QpOiBJbml0aWFsaXplciB7XG4gIGlmICh0eXBlb2YgaWRlbnRpZmllciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpZGVudGlmaWVyIGluIElOSVRJQUxJWkVSX0lERU5USUZJRVJfUkVHSVNUUllfU1lNQk9MX01BUCA/XG4gICAgICAgIElOSVRJQUxJWkVSX0lERU5USUZJRVJfUkVHSVNUUllfU1lNQk9MX01BUFtpZGVudGlmaWVyXSA6XG4gICAgICAgIGlkZW50aWZpZXI7XG4gICAgLyogV2UgaGF2ZSBmb3VyICdoZWxwZXInIGNsYXNzZXMgZm9yIGNvbW1vbiBpbml0aWFsaXplcnMgdGhhdFxuICAgIGFsbCBnZXQgc2VyaWFsaXplZCBhcyAnVmFyaWFuY2VTY2FsaW5nJyBhbmQgc2hvdWxkbid0IGdvIHRocm91Z2hcbiAgICB0aGUgZGVzZXJpYWxpemVJbml0aWFsaXplciBwYXRod2F5LiAqL1xuICAgIGlmIChjbGFzc05hbWUgPT09ICdHbG9yb3ROb3JtYWwnKSB7XG4gICAgICByZXR1cm4gbmV3IEdsb3JvdE5vcm1hbCgpO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSAnR2xvcm90VW5pZm9ybScpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvcm90VW5pZm9ybSgpO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSAnSGVOb3JtYWwnKSB7XG4gICAgICByZXR1cm4gbmV3IEhlTm9ybWFsKCk7XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09ICdIZVVuaWZvcm0nKSB7XG4gICAgICByZXR1cm4gbmV3IEhlVW5pZm9ybSgpO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09PSAnTGVDdW5Ob3JtYWwnKSB7XG4gICAgICByZXR1cm4gbmV3IExlQ3VuTm9ybWFsKCk7XG4gICAgfSBlbHNlIGlmIChjbGFzc05hbWUgPT09ICdMZUN1blVuaWZvcm0nKSB7XG4gICAgICByZXR1cm4gbmV3IExlQ3VuVW5pZm9ybSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHt9O1xuICAgICAgY29uZmlnWydjbGFzc05hbWUnXSA9IGNsYXNzTmFtZTtcbiAgICAgIGNvbmZpZ1snY29uZmlnJ10gPSB7fTtcbiAgICAgIHJldHVybiBkZXNlcmlhbGl6ZUluaXRpYWxpemVyKGNvbmZpZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlkZW50aWZpZXIgaW5zdGFuY2VvZiBJbml0aWFsaXplcikge1xuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZUluaXRpYWxpemVyKGlkZW50aWZpZXIpO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/variables.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "LayerVariable",
    ()=>LayerVariable,
    "batchGetValue",
    ()=>batchGetValue,
    "batchSetValue",
    ()=>batchSetValue,
    "eyeVariable",
    ()=>eyeVariable,
    "gradients",
    ()=>gradients,
    "onesLike",
    ()=>onesLike,
    "onesVariable",
    ()=>onesVariable,
    "randomNormalVariable",
    ()=>randomNormalVariable,
    "randomUniformVariable",
    ()=>randomUniformVariable,
    "truncatedNormalVariable",
    ()=>truncatedNormalVariable,
    "update",
    ()=>update,
    "updateAdd",
    ()=>updateAdd,
    "updateSub",
    ()=>updateSub,
    "variable",
    ()=>variable,
    "zerosLike",
    ()=>zerosLike,
    "zerosVariable",
    ()=>zerosVariable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$variable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/variable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros_like.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones_like.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/eye.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/random_uniform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$truncated_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/truncated_normal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/random_normal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sub.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/gradients.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
;
;
;
;
;
const DEFAULT_VARIABLE_NAME_PREFIX = 'Variable';
class LayerVariable {
    /**
     * Construct Variable from a `tf.Tensor`.
     *
     * If not explicitly named, the Variable will be given a name with the
     * prefix 'Variable'. Variable names are unique. In the case of name
     * collision, suffixies '_<num>' will be added to the name.
     *
     * @param val Initial value of the Variable.
     * @param name Name of the variable. If `null` or `undefined` is provided, it
     *   will default a name with the prefix 'Variable'.
     * @param constraint Optional, projection function to be applied to the
     * variable after optimize updates
     * @throws ValueError if `name` is `null` or `undefined`.
     */ constructor(val, dtype = 'float32', name = DEFAULT_VARIABLE_NAME_PREFIX, trainable = true, constraint = null){
        this.dtype = dtype == null ? 'float32' : dtype;
        this.shape = val.shape;
        this.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextUniqueTensorId"])();
        name = name == null ? DEFAULT_VARIABLE_NAME_PREFIX : name;
        this.originalName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScopedTensorName"])(name);
        this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUniqueTensorName"])(this.originalName);
        this.trainable_ = trainable;
        this.constraint = constraint;
        this.val = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$variable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variable"](val, this.trainable_, this.name, this.dtype);
    }
    /**
     * Get a snapshot of the Variable's value.
     *
     * The returned value is a snapshot of the Variable's value at the time of
     * the invocation. Future mutations in the value of the tensor will only
     * be reflected by future calls to this method.
     */ read() {
        this.assertNotDisposed();
        return this.val;
    }
    /**
     * Update the value of the Variable.
     *
     * @param newVal: The new value to update to. Must be consistent with the
     *   dtype and shape of the Variable.
     * @return This Variable.
     */ write(newVal) {
        // TODO(cais): Once  TF.js Core supports Tensor.dtype, check dtype match.
        this.assertNotDisposed();
        checkShapesMatch(this.val, newVal);
        // Skip updating if this is the exact same tensor.
        if (this.val.id !== newVal.id) {
            this.val.assign(newVal);
            if (this.constraint != null) {
                this.val.assign(this.constraint.apply(this.val));
            }
        }
        return this;
    }
    /**
     * Dispose this LayersVariable instance from memory.
     */ dispose() {
        this.assertNotDisposed();
        this.val.dispose();
    }
    assertNotDisposed() {
        if (this.val.isDisposed) {
            throw new Error(`LayersVariable ${this.name} is already disposed.`);
        }
    }
    get trainable() {
        return this.trainable_;
    }
    set trainable(trainable) {
        this.trainable_ = trainable;
        this.val.trainable = trainable;
    }
}
function checkShapesMatch(x, y) {
    if (x.shape.toString() !== y.shape.toString()) {
        throw new Error('Shape mismatch: ' + JSON.stringify(x.shape) + ' vs. ' + JSON.stringify(y.shape));
    }
}
function variable(x, dtype, name, constraint) {
    return new LayerVariable(x, dtype, name, true, constraint);
}
function zerosVariable(shape, dtype, name) {
    // TODO(cais): Implement logic for dtype.
    return new LayerVariable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeros"](shape), dtype, name);
}
function zerosLike(x, dtype, name) {
    return new LayerVariable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zerosLike"](x), dtype, name);
}
function onesVariable(shape, dtype, name) {
    // TODO(cais): Implement logic for dtype.
    const allocated = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ones"](shape);
    return new LayerVariable(allocated, dtype, name);
}
function onesLike(x, dtype, name) {
    const allocated = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onesLike"](x);
    return new LayerVariable(allocated, dtype, name);
}
function eyeVariable(size, dtype, name) {
    return new LayerVariable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eye"](size), dtype, name);
}
function randomUniformVariable(shape, minval, maxval, dtype, seed, name = 'randomUniform') {
    return new LayerVariable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_uniform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomUniform"](shape, minval, maxval, dtype), dtype, name);
}
function truncatedNormalVariable(shape, mean = 0.0, stddev = 1.0, dtype, seed, name = 'truncatedNormal') {
    // TODO(cais): Implement logic for dtype and seed once they are supported
    // by deeplearn.js.
    dtype = dtype || 'float32';
    if (dtype !== 'float32' && dtype !== 'int32') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`randomNormal does not support dType ${dtype}.`);
    }
    return new LayerVariable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$truncated_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["truncatedNormal"](shape, mean, stddev, dtype, seed), dtype, name);
}
function randomNormalVariable(shape, mean = 0.0, stddev = 1.0, dtype, seed, name = 'randomNormal') {
    dtype = dtype || 'float32';
    if (dtype !== 'float32' && dtype !== 'int32') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`randomNormalVariable does not support dType ${dtype}.`);
    }
    return new LayerVariable(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$random_normal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomNormal"](shape, mean, stddev, dtype, seed), dtype, name);
}
function update(x, xNew) {
    return x.write(xNew);
}
function updateAdd(x, increment) {
    return x.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](x.read(), increment));
}
function updateSub(x, decrement) {
    return x.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](x.read(), decrement));
}
function batchGetValue(xs) {
    return xs.map((x)=>x.read());
}
function batchSetValue(variablesAndValues) {
    variablesAndValues.forEach((variableAndValue)=>{
        const variable = variableAndValue[0];
        variable.write(variableAndValue[1]);
    });
}
function gradients(lossFn, variables) {
    // TODO(cais): The return type signature can be simplified if deeplearn makes
    //   the corresponding type public.
    const variableList = variables.map((variable)=>variable.read());
    const valudAndGrads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["variableGrads"])(lossFn, variableList);
    return variables.map((variable)=>valudAndGrads.grads[variable.name]);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL3ZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFtQixhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFbEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBSTdDLE1BQU0sNEJBQTRCLEdBQUcsVUFBVSxDQUFDO0FBRWhEOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUFleEI7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILFlBQ0ksR0FBVyxFQUFFLFFBQWtCLFNBQVMsRUFDeEMsSUFBSSxHQUFHLDRCQUE0QixFQUFFLFNBQVMsR0FBRyxJQUFJLEVBQ3JELGFBQXlCLElBQUk7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1FBRWxDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxJ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Q3JCLE1BQXdCLEVBQUUsU0FBMEI7SUFDdEQsNkVBQTZFO0lBQzdFLG1DQUFtQztJQUNuQyxNQUFNLFlBQVksR0FDZCxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBa0IsQ0FBQyxDQUFDO0lBQy9ELE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUQsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge0RhdGFUeXBlLCBUZW5zb3IsIHZhcmlhYmxlR3JhZHN9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7Z2V0TmV4dFVuaXF1ZVRlbnNvcklkfSBmcm9tICcuL2JhY2tlbmQvc3RhdGUnO1xuaW1wb3J0IHtnZXRTY29wZWRUZW5zb3JOYW1lLCBnZXRVbmlxdWVUZW5zb3JOYW1lfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQge0NvbnN0cmFpbnR9IGZyb20gJy4vY29uc3RyYWludHMnO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge1NoYXBlfSBmcm9tICcuL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtIYXNTaGFwZX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IERFRkFVTFRfVkFSSUFCTEVfTkFNRV9QUkVGSVggPSAnVmFyaWFibGUnO1xuXG4vKipcbiAqIEEgYHRmLmxheWVycy5MYXllclZhcmlhYmxlYCBpcyBzaW1pbGFyIHRvIGEgYHRmLlRlbnNvcmAgaW4gdGhhdCBpdCBoYXMgYVxuICogZHR5cGUgYW5kIHNoYXBlLCBidXQgaXRzIHZhbHVlIGlzIG11dGFibGUuICBUaGUgdmFsdWUgaXMgaXRzZWxmIHJlcHJlc2VudGVkXG4gKiBhcyBhYHRmLlRlbnNvcmAsIGFuZCBjYW4gYmUgcmVhZCB3aXRoIHRoZSBgcmVhZCgpYCBtZXRob2QgYW5kIHVwZGF0ZWQgd2l0aFxuICogdGhlIGB3cml0ZSgpYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXllclZhcmlhYmxlIHtcbiAgcmVhZG9ubHkgZHR5cGU6IERhdGFUeXBlO1xuICByZWFkb25seSBzaGFwZTogU2hhcGU7XG5cbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcbiAgLy8gVGhlIGZ1bGx5IHNjb3BlZCBuYW1lIG9mIHRoaXMgVmFyaWFibGUsIGluY2x1ZGluZyBhIHVuaXF1ZSBzdWZmaXggaWYgbmVlZGVkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLy8gVGhlIG9yaWdpbmFsbHkgcmVxdWVzdGVkIGZ1bGx5IHNjb3BlZCBuYW1lIG9mIHRoaXMgVmFyaWFibGUsIG5vdCBpbmNsdWRpbmdcbiAgLy8gYW55IHVuaXF1ZSBzdWZmaXguICBUaGlzIG1heSBiZSBuZWVkZWQgd2hlbiByZXN0b3Jpbmcgd2VpZ2h0cyBiZWNhdXNlIHRoaXNcbiAgLy8gb3JpZ2luYWwgbmFtZSBpcyB1c2VkIGFzIGEga2V5LlxuICByZWFkb25seSBvcmlnaW5hbE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSB0cmFpbmFibGVfOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSB2YWw6IHRmYy5WYXJpYWJsZTtcbiAgcmVhZG9ubHkgY29uc3RyYWludDogQ29uc3RyYWludDtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBWYXJpYWJsZSBmcm9tIGEgYHRmLlRlbnNvcmAuXG4gICAqXG4gICAqIElmIG5vdCBleHBsaWNpdGx5IG5hbWVkLCB0aGUgVmFyaWFibGUgd2lsbCBiZSBnaXZlbiBhIG5hbWUgd2l0aCB0aGVcbiAgICogcHJlZml4ICdWYXJpYWJsZScuIFZhcmlhYmxlIG5hbWVzIGFyZSB1bmlxdWUuIEluIHRoZSBjYXNlIG9mIG5hbWVcbiAgICogY29sbGlzaW9uLCBzdWZmaXhpZXMgJ188bnVtPicgd2lsbCBiZSBhZGRlZCB0byB0aGUgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHZhbCBJbml0aWFsIHZhbHVlIG9mIHRoZSBWYXJpYWJsZS5cbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdmFyaWFibGUuIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBpcyBwcm92aWRlZCwgaXRcbiAgICogICB3aWxsIGRlZmF1bHQgYSBuYW1lIHdpdGggdGhlIHByZWZpeCAnVmFyaWFibGUnLlxuICAgKiBAcGFyYW0gY29uc3RyYWludCBPcHRpb25hbCwgcHJvamVjdGlvbiBmdW5jdGlvbiB0byBiZSBhcHBsaWVkIHRvIHRoZVxuICAgKiB2YXJpYWJsZSBhZnRlciBvcHRpbWl6ZSB1cGRhdGVzXG4gICAqIEB0aHJvd3MgVmFsdWVFcnJvciBpZiBgbmFtZWAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgICB2YWw6IFRlbnNvciwgZHR5cGU6IERhdGFUeXBlID0gJ2Zsb2F0MzInLFxuICAgICAgbmFtZSA9IERFRkFVTFRfVkFSSUFCTEVfTkFNRV9QUkVGSVgsIHRyYWluYWJsZSA9IHRydWUsXG4gICAgICBjb25zdHJhaW50OiBDb25zdHJhaW50ID0gbnVsbCkge1xuICAgIHRoaXMuZHR5cGUgPSBkdHlwZSA9PSBudWxsID8gJ2Zsb2F0MzInIDogZHR5cGU7XG4gICAgdGhpcy5zaGFwZSA9IHZhbC5zaGFwZTtcbiAgICB0aGlzLmlkID0gZ2V0TmV4dFVuaXF1ZVRlbnNvcklkKCk7XG5cbiAgICBuYW1lID0gbmFtZSA9PSBudWxsID8gREVGQVVMVF9WQVJJQUJMRV9OQU1FX1BSRUZJWCA6IG5hbWU7XG4gICAgdGhpcy5vcmlnaW5hbE5hbWUgPSBnZXRTY29wZWRUZW5zb3JOYW1lKG5hbWUpO1xuICAgIHRoaXMubmFtZSA9IGdldFVuaXF1ZVRlbnNvck5hbWUodGhpcy5vcmlnaW5hbE5hbWUpO1xuXG4gICAgdGhpcy50cmFpbmFibGVfID0gdHJhaW5hYmxlO1xuICAgIHRoaXMuY29uc3RyYWludCA9IGNvbnN0cmFpbnQ7XG5cbiAgICB0aGlzLnZhbCA9IHRmYy52YXJpYWJsZSh2YWwsIHRoaXMudHJhaW5hYmxlXywgdGhpcy5uYW1lLCB0aGlzLmR0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzbmFwc2hvdCBvZiB0aGUgVmFyaWFibGUncyB2YWx1ZS5cbiAgICpcbiAgICogVGhlIHJldHVybmVkIHZhbHVlIGlzIGEgc25hcHNob3Qgb2YgdGhlIFZhcmlhYmxlJ3MgdmFsdWUgYXQgdGhlIHRpbWUgb2ZcbiAgICogdGhlIGludm9jYXRpb24uIEZ1dHVyZSBtdXRhdGlvbnMgaW4gdGhlIHZhbHVlIG9mIHRoZSB0ZW5zb3Igd2lsbCBvbmx5XG4gICAqIGJlIHJlZmxlY3RlZCBieSBmdXR1cmUgY2FsbHMgdG8gdGhpcyBtZXRob2QuXG4gICAqL1xuICByZWFkKCk6IFRlbnNvciB7XG4gICAgdGhpcy5hc3NlcnROb3REaXNwb3NlZCgpO1xuICAgIHJldHVybiB0aGlzLnZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBWYXJpYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIG5ld1ZhbDogVGhlIG5ldyB2YWx1ZSB0byB1cGRhdGUgdG8uIE11c3QgYmUgY29uc2lzdGVudCB3aXRoIHRoZVxuICAgKiAgIGR0eXBlIGFuZCBzaGFwZSBvZiB0aGUgVmFyaWFibGUuXG4gICAqIEByZXR1cm4gVGhpcyBWYXJpYWJsZS5cbiAgICovXG4gIHdyaXRlKG5ld1ZhbDogVGVuc29yKSB7XG4gICAgLy8gVE9ETyhjYWlzKTogT25jZSAgVEYuanMgQ29yZSBzdXBwb3J0cyBUZW5zb3IuZHR5cGUsIGNoZWNrIGR0eXBlIG1hdGNoLlxuICAgIHRoaXMuYXNzZXJ0Tm90RGlzcG9zZWQoKTtcbiAgICBjaGVja1NoYXBlc01hdGNoKHRoaXMudmFsLCBuZXdWYWwpO1xuICAgIC8vIFNraXAgdXBkYXRpbmcgaWYgdGhpcyBpcyB0aGUgZXhhY3Qgc2FtZSB0ZW5zb3IuXG4gICAgaWYgKHRoaXMudmFsLmlkICE9PSBuZXdWYWwuaWQpIHtcbiAgICAgIHRoaXMudmFsLmFzc2lnbihuZXdWYWwpO1xuICAgICAgaWYgKHRoaXMuY29uc3RyYWludCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudmFsLmFzc2lnbih0aGlzLmNvbnN0cmFpbnQuYXBwbHkodGhpcy52YWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSB0aGlzIExheWVyc1ZhcmlhYmxlIGluc3RhbmNlIGZyb20gbWVtb3J5LlxuICAgKi9cbiAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzc2VydE5vdERpc3Bvc2VkKCk7XG4gICAgdGhpcy52YWwuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzc2VydE5vdERpc3Bvc2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbC5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYExheWVyc1ZhcmlhYmxlICR7dGhpcy5uYW1lfSBpcyBhbHJlYWR5IGRpc3Bvc2VkLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0cmFpbmFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHJhaW5hYmxlXztcbiAgfVxuXG4gIHNldCB0cmFpbmFibGUodHJhaW5hYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy50cmFpbmFibGVfID0gdHJhaW5hYmxlO1xuICAgIHRoaXMudmFsLnRyYWluYWJsZSA9IHRyYWluYWJsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1NoYXBlc01hdGNoKHg6IEhhc1NoYXBlLCB5OiBIYXNTaGFwZSk6IHZvaWQge1xuICBpZiAoeC5zaGFwZS50b1N0cmluZygpICE9PSB5LnNoYXBlLnRvU3RyaW5nKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdTaGFwZSBtaXNtYXRjaDogJyArIEpTT04uc3RyaW5naWZ5KHguc2hhcGUpICsgJyB2cy4gJyArXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHkuc2hhcGUpKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIFZhcmlhYmxlLlxuICogQHBhcmFtIHggVGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGBWYXJpYWJsZWAuXG4gKiBAcGFyYW0gZHR5cGUgb3B0aW9uYWwsIHRoZSB0eXBlIG9mIHRoZSB2YXJpYWJsZS5cbiAqIEBwYXJhbSBuYW1lIG9wdGlvbmFsLCB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUsIGRlZmF1bHQgcHJvdmlkZWQgYnlcbiAqIFZhcmlhYmxlLlxuICogQHBhcmFtIGNvbnN0cmFpbnQgb3B0aW9uYWwsIGEgY29uc3RyYWludCB0byBiZSBhcHBsaWVkIGFmdGVyIGV2ZXJ5IHVwZGF0ZS5cbiAqIEByZXR1cm4gVGhlIG5ld2x5IGluc3RhbnRpYXRlZCBgVmFyaWFibGVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGUoXG4gICAgeDogVGVuc29yLCBkdHlwZT86IERhdGFUeXBlLCBuYW1lPzogc3RyaW5nLFxuICAgIGNvbnN0cmFpbnQ/OiBDb25zdHJhaW50KTogTGF5ZXJWYXJpYWJsZSB7XG4gIHJldHVybiBuZXcgTGF5ZXJWYXJpYWJsZSh4LCBkdHlwZSwgbmFtZSwgdHJ1ZSwgY29uc3RyYWludCk7XG59XG5cbi8qKlxuICogSW5zdGFudGlhdGVzIGFuIGFsbC16ZXJvcyBWYXJpYWJsZSBhbmQgcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0gc2hhcGUgU2hhcGUgb2YgdGhlIHRlbnNvci5cbiAqIEBwYXJhbSBkdHlwZSBEVHlwZSBvZiB0aGUgdGVuc29yLlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdGVuc29yLlxuICogQHJldHVybiBBbiBhbGwtemVybyBWYXJpYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHplcm9zVmFyaWFibGUoXG4gICAgc2hhcGU6IFNoYXBlLCBkdHlwZT86IERhdGFUeXBlLCBuYW1lPzogc3RyaW5nKTogTGF5ZXJWYXJpYWJsZSB7XG4gIC8vIFRPRE8oY2Fpcyk6IEltcGxlbWVudCBsb2dpYyBmb3IgZHR5cGUuXG4gIHJldHVybiBuZXcgTGF5ZXJWYXJpYWJsZSh0ZmMuemVyb3Moc2hhcGUpLCBkdHlwZSwgbmFtZSk7XG59XG5cbi8qKlxuICogSW5zdGFudGlhdGVzIGFuIGFsbC16ZXJvcyB0ZW5zb3Igb2YgdGhlIHNhbWUgc2hhcGUgYXMgYW5vdGhlciB0ZW5zb3IuXG4gKlxuICogQHBhcmFtIHggVGhlIG90aGVyIHRlbnNvci5cbiAqIEBwYXJhbSBkdHlwZSBEVHlwZSBvZiB0aGUgdGVuc29yLlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdGVuc29yLlxuICogQHJldHVybiBBIG5ld2x5IGluc3RhbnRpYXRlZCBWYXJpYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHplcm9zTGlrZShcbiAgICB4OiBUZW5zb3IsIGR0eXBlPzogRGF0YVR5cGUsIG5hbWU/OiBzdHJpbmcpOiBMYXllclZhcmlhYmxlIHtcbiAgcmV0dXJuIG5ldyBMYXllclZhcmlhYmxlKHRmYy56ZXJvc0xpa2UoeCksIGR0eXBlLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgYW4gYWxsLW9uZXMgdGVuc29yIGFuZCByZXR1cm5zIGl0LlxuICpcbiAqIEBwYXJhbSBzaGFwZSBTaGFwZSBvZiB0aGUgdGVuc29yLlxuICogQHBhcmFtIGR0eXBlIERUeXBlIG9mIHRoZSB0ZW5zb3IuXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSB0ZW5zb3IuXG4gKiBAcmV0dXJuIEFuIGFsbC1vbmVzIFZhcmlhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25lc1ZhcmlhYmxlKFxuICAgIHNoYXBlOiBTaGFwZSwgZHR5cGU/OiBEYXRhVHlwZSwgbmFtZT86IHN0cmluZyk6IExheWVyVmFyaWFibGUge1xuICAvLyBUT0RPKGNhaXMpOiBJbXBsZW1lbnQgbG9naWMgZm9yIGR0eXBlLlxuICBjb25zdCBhbGxvY2F0ZWQgPSB0ZmMub25lcyhzaGFwZSk7XG4gIHJldHVybiBuZXcgTGF5ZXJWYXJpYWJsZShhbGxvY2F0ZWQsIGR0eXBlLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBJbnN0YW50aWF0ZXMgYW4gYWxsLW9uZXMgdGVuc29yIG9mIHRoZSBzYW1lIHNoYXBlIGFzIGFub3RoZXIgdGVuc29yLlxuICpcbiAqIEBwYXJhbSB4IFRoZSBvdGhlciB0ZW5zb3IuXG4gKiBAcGFyYW0gZHR5cGUgRFR5cGUgb2YgdGhlIHRlbnNvci5cbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIHRlbnNvci5cbiAqIEByZXR1cm4gQSBuZXdseSBpbnN0YW50aWF0ZWQgVmFyaWFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbmVzTGlrZShcbiAgICB4OiBUZW5zb3IsIGR0eXBlPzogRGF0YVR5cGUsIG5hbWU/OiBzdHJpbmcpOiBMYXllclZhcmlhYmxlIHtcbiAgY29uc3QgYWxsb2NhdGVkID0gdGZjLm9uZXNMaWtlKHgpO1xuICByZXR1cm4gbmV3IExheWVyVmFyaWFibGUoYWxsb2NhdGVkLCBkdHlwZSwgbmFtZSk7XG59XG5cbi8qKlxuICogSW5zdGFudGlhdGUgYW4gaWRlbnRpdHkgbWF0cml4IGFuZCByZXR1cm5zIGl0LCBhcyBhIFZhcmlhYmxlXG4gKlxuICogQHBhcmFtIHNpemUgTnVtYmVyIG9mIHJvd3MvY29sdW1ucy5cbiAqIEBwYXJhbSBkdHlwZSBEYXRhIHR5cGUgb2YgcmV0dXJuZWQgVmFyaWFibGUuXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHJldHVybmVkIFZhcmlhYmxlLlxuICogQHJldHVybiBBIFZhcmlhYmxlLCBhbiBpZGVudGl0eSBtYXRyaXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleWVWYXJpYWJsZShcbiAgICBzaXplOiBudW1iZXIsIGR0eXBlPzogRGF0YVR5cGUsIG5hbWU/OiBzdHJpbmcpOiBMYXllclZhcmlhYmxlIHtcbiAgcmV0dXJuIG5ldyBMYXllclZhcmlhYmxlKHRmYy5leWUoc2l6ZSksIGR0eXBlLCBuYW1lKTtcbn1cblxuLyoqXG4gKiBHZXQgYSBWYXJpYWJsZSB3aXRoIHVuaWZvcm0gZGlzdHJpYnV0aW9uIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSBzaGFwZSBTaGFwZSBvZiB0aGUgdGVuc29yLlxuICogQHBhcmFtIG1pbnZhbCBMb3dlciBib3VuZCBvZiB0aGUgdW5pZm9ybSBkaXN0cmlidXRpb24uXG4gKiBAcGFyYW0gbWF4dmFsIFVwcGVyIGJvdW5kIG9mIHRoZSB1bmlmb3JtIGRpc3RyaWJ1dGlvbi5cbiAqIEBwYXJhbSBkdHlwZVxuICogQHBhcmFtIHNlZWRcbiAqIEBwYXJhbSBuYW1lIE9wdGlvbmFsIG5hbWUuXG4gKiBAcmV0dXJuIFRoZSB1bmlmb3JtLXJhbmRvbSBWYXJpYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVVuaWZvcm1WYXJpYWJsZShcbiAgICBzaGFwZTogU2hhcGUsIG1pbnZhbDogbnVtYmVyLCBtYXh2YWw6IG51bWJlciwgZHR5cGU/OiBEYXRhVHlwZSxcbiAgICBzZWVkPzogbnVtYmVyLCBuYW1lID0gJ3JhbmRvbVVuaWZvcm0nKTogTGF5ZXJWYXJpYWJsZSB7XG4gIHJldHVybiBuZXcgTGF5ZXJWYXJpYWJsZShcbiAgICAgIHRmYy5yYW5kb21Vbmlmb3JtKHNoYXBlLCBtaW52YWwsIG1heHZhbCwgZHR5cGUpLCBkdHlwZSwgbmFtZSk7XG59XG5cbi8qKlxuICogR2V0IGEgVmFyaWFibGUgd2l0aCB0cnVuY2F0ZWQtbm9ybWFsIGRpc3RyaWJ1dGlvbiBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0gc2hhcGUgU2hhcGUgb2YgdGhlIHRlbnNvci5cbiAqIEBwYXJhbSBtZWFuIG1lYW4gdmFsdWUgb2YgdGhlIG5vcm1hbCBkaXN0cmlidXRpb24uXG4gKiBAcGFyYW0gc3RkZGV2IHN0YW5kYXJkIGRldmlhdGlvbiBvZiB0aGUgbm9ybWFsIGRpc3RyaWJ1dGlvbi5cbiAqIEBwYXJhbSBkdHlwZVxuICogQHBhcmFtIHNlZWRcbiAqIEBwYXJhbSBuYW1lIE9wdGlvbmFsIG5hbWUuXG4gKiBAcmV0dXJuIFRoZSB0cnVuY2F0ZWQtbm9ybWFsLXJhbmRvbSBWYXJpYWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlZE5vcm1hbFZhcmlhYmxlKFxuICAgIHNoYXBlOiBTaGFwZSwgbWVhbiA9IDAuMCwgc3RkZGV2ID0gMS4wLCBkdHlwZT86IERhdGFUeXBlLCBzZWVkPzogbnVtYmVyLFxuICAgIG5hbWUgPSAndHJ1bmNhdGVkTm9ybWFsJyk6IExheWVyVmFyaWFibGUge1xuICAvLyBUT0RPKGNhaXMpOiBJbXBsZW1lbnQgbG9naWMgZm9yIGR0eXBlIGFuZCBzZWVkIG9uY2UgdGhleSBhcmUgc3VwcG9ydGVkXG4gIC8vIGJ5IGRlZXBsZWFybi5qcy5cbiAgZHR5cGUgPSBkdHlwZSB8fCAnZmxvYXQzMic7XG4gIGlmIChkdHlwZSAhPT0gJ2Zsb2F0MzInICYmIGR0eXBlICE9PSAnaW50MzInKSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgIGByYW5kb21Ob3JtYWwgZG9lcyBub3Qgc3VwcG9ydCBkVHlwZSAke2R0eXBlfS5gKTtcbiAgfVxuICByZXR1cm4gbmV3IExheWVyVmFyaWFibGUoXG4gICAgICB0ZmMudHJ1bmNhdGVkTm9ybWFsKHNoYXBlLCBtZWFuLCBzdGRkZXYsIGR0eXBlLCBzZWVkKSwgZHR5cGUsIG5hbWUpO1xufVxuLyoqXG4gKiBHZXQgYSBWYXJpYWJsZSB3aXRoIG5vcm1hbCBkaXN0cmlidXRpb24gb2YgdmFsdWVzLlxuICogQHBhcmFtIHNoYXBlIFNoYXBlIG9mIHRoZSB0ZW5zb3IuXG4gKiBAcGFyYW0gbWVhbiBtZWFuIHZhbHVlIG9mIHRoZSBub3JtYWwgZGlzdHJpYnV0aW9uLlxuICogQHBhcmFtIHN0ZGRldiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIG5vcm1hbCBkaXN0cmlidXRpb24uXG4gKiBAcGFyYW0gZHR5cGVcbiAqIEBwYXJhbSBzZWVkXG4gKiBAcGFyYW0gbmFtZSBPcHRpb25hbCBuYW1lLlxuICogQHJldHVybiBUaGUgdHJ1bmNhdGVkLW5vcm1hbC1yYW5kb20gVmFyaWFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Ob3JtYWxWYXJpYWJsZShcbiAgICBzaGFwZTogU2hhcGUsIG1lYW4gPSAwLjAsIHN0ZGRldiA9IDEuMCwgZHR5cGU/OiBEYXRhVHlwZSwgc2VlZD86IG51bWJlcixcbiAgICBuYW1lID0gJ3JhbmRvbU5vcm1hbCcpOiBMYXllclZhcmlhYmxlIHtcbiAgZHR5cGUgPSBkdHlwZSB8fCAnZmxvYXQzMic7XG4gIGlmIChkdHlwZSAhPT0gJ2Zsb2F0MzInICYmIGR0eXBlICE9PSAnaW50MzInKSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgIGByYW5kb21Ob3JtYWxWYXJpYWJsZSBkb2VzIG5vdCBzdXBwb3J0IGRUeXBlICR7ZHR5cGV9LmApO1xuICB9XG4gIHJldHVybiBuZXcgTGF5ZXJWYXJpYWJsZShcbiAgICAgIHRmYy5yYW5kb21Ob3JtYWwoc2hhcGUsIG1lYW4sIHN0ZGRldiwgZHR5cGUsIHNlZWQpLCBkdHlwZSwgbmFtZSk7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSB2YWx1ZSBvZiBhIFZhcmlhYmxlLlxuICogQHBhcmFtIHggVGhlIFZhcmlhYmxlIHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0geE5ldyBUaGUgbmV3IHZhbHVlIHRvIHVwZGF0ZSB0by5cbiAqIEByZXR1cm4gVGhlIFZhcmlhYmxlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoeDogTGF5ZXJWYXJpYWJsZSwgeE5ldzogVGVuc29yKTogTGF5ZXJWYXJpYWJsZSB7XG4gIHJldHVybiB4LndyaXRlKHhOZXcpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgdmFsdWUgb2YgYSBWYXJpYWJsZSBieSBhZGRpbmcgYW4gaW5jcmVtZW50LlxuICogQHBhcmFtIHggVGhlIFZhcmlhYmxlIHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gaW5jcmVtZW50IFRoZSBpbmNybWVudCB0byBhZGQgdG8gYHhgLlxuICogQHJldHVybiBUaGUgVmFyaWFibGUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZCh4OiBMYXllclZhcmlhYmxlLCBpbmNyZW1lbnQ6IFRlbnNvcik6IExheWVyVmFyaWFibGUge1xuICByZXR1cm4geC53cml0ZSh0ZmMuYWRkKHgucmVhZCgpLCBpbmNyZW1lbnQpKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHZhbHVlIG9mIGEgVmFyaWFibGUgYnkgc3VidHJhY3RpbmcgYSBkZWNyZW1lbnQuXG4gKiBAcGFyYW0geCBUaGUgVmFyaWFibGUgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSBkZWNyZW1lbnQgVGhlIGRlY3JlbWVudCB0byBzdWJ0cmFjdCBmcm9tIGB4YC5cbiAqIEByZXR1cm4gVGhlIFZhcmlhYmxlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdWIoeDogTGF5ZXJWYXJpYWJsZSwgZGVjcmVtZW50OiBUZW5zb3IpOiBMYXllclZhcmlhYmxlIHtcbiAgcmV0dXJuIHgud3JpdGUodGZjLnN1Yih4LnJlYWQoKSwgZGVjcmVtZW50KSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZXMgb2YgYW4gYXJyYXkgb2YgVmFyaWFibGVzLlxuICpcbiAqIEBwYXJhbSB0ZW5zb3JzIEFuIGBBcnJheWAgb2YgYFZhcmlhYmxlYHMgdG8gZ2V0IHRoZSB2YWx1ZXMgb2YuXG4gKiBAcmV0dXJuIFRoZSB2YWx1ZXMgb2YgdGhlIGlucHV0cywgYXMgYW4gYEFycmF5YCBvZmB0Zi5UZW5zb3Jgcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhdGNoR2V0VmFsdWUoeHM6IExheWVyVmFyaWFibGVbXSk6IFRlbnNvcltdIHtcbiAgcmV0dXJuIHhzLm1hcCh4ID0+IHgucmVhZCgpKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHZhbHVlIG9mIG11bHRpcGxlIFZhcmlhYmxlcyBhdCBvbmNlLlxuICpcbiAqIEBwYXJhbSB2YXJpYWJsZXNBbmRWYWx1ZXMgQW4gYEFycmF5YCwgZWFjaCBlbGVtZW50IGlzIG9mIHR5cGVcbiAqICAgW1ZhcmlhYmxlLCBUZW5zb3JdLiBUaGUgZmlyc3QgaXRlbSBpcyB0aGVcbiAqICAgYFZhcmlhYmxlYCBvZiB3aGljaCB0aGUgdmFsdWUgaXMgdG8gYmUgdXBkYXRlZC4gVGhlIHNlY29uZCBpdGVtXG4gKiAgIGNhcnJpZXMgdGhlIG5ldyB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhdGNoU2V0VmFsdWUoXG4gICAgdmFyaWFibGVzQW5kVmFsdWVzOiBBcnJheTxbTGF5ZXJWYXJpYWJsZSwgVGVuc29yXT4pOiB2b2lkIHtcbiAgdmFyaWFibGVzQW5kVmFsdWVzLmZvckVhY2godmFyaWFibGVBbmRWYWx1ZSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGU6IExheWVyVmFyaWFibGUgPSB2YXJpYWJsZUFuZFZhbHVlWzBdO1xuICAgIHZhcmlhYmxlLndyaXRlKHZhcmlhYmxlQW5kVmFsdWVbMV0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBncmFkaWVudHMgb2YgYHZhcmlhYmxlc2Agdy5yLnQuIHRoZSByZXR1cm4gdmFsdWUgb2YgYGxvc3NGbmAuXG4gKiBAcGFyYW0gbG9zc0ZuIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIFNjYWxhciB0byBiZSB1c2VkIGFzIHRoZSBmdW5jdGlvblxuICogICB2YWx1ZSAoaS5lLiwgbnVtZXJhdG9yKSBmb3IgZGlmZmVyZW50aWF0aW9uLlxuICogQHBhcmFtIHZhcmlhYmxlcyBMaXN0IG9mIHZhcmlhYmxlcyB0byBiZSB1c2VkIGFzIHRoZSBpbmRlcGVuZGVudCB2YXJpYWJsZXNcbiAqICAgKGkuZS4sIGRlbm9taW5hdG9yKSBmb3IgZGlmZmVyZW50aWF0aW9uLlxuICogQHJldHVybnMgQW4gQXJyYXkgb2YgZ3JhZGllbnRzIHRlbnNvcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncmFkaWVudHMoXG4gICAgbG9zc0ZuOiAoKSA9PiB0ZmMuU2NhbGFyLCB2YXJpYWJsZXM6IExheWVyVmFyaWFibGVbXSk6IFRlbnNvcltdIHtcbiAgLy8gVE9ETyhjYWlzKTogVGhlIHJldHVybiB0eXBlIHNpZ25hdHVyZSBjYW4gYmUgc2ltcGxpZmllZCBpZiBkZWVwbGVhcm4gbWFrZXNcbiAgLy8gICB0aGUgY29ycmVzcG9uZGluZyB0eXBlIHB1YmxpYy5cbiAgY29uc3QgdmFyaWFibGVMaXN0ID1cbiAgICAgIHZhcmlhYmxlcy5tYXAodmFyaWFibGUgPT4gdmFyaWFibGUucmVhZCgpIGFzIHRmYy5WYXJpYWJsZSk7XG4gIGNvbnN0IHZhbHVkQW5kR3JhZHMgPSB2YXJpYWJsZUdyYWRzKGxvc3NGbiwgdmFyaWFibGVMaXN0KTtcbiAgcmV0dXJuIHZhcmlhYmxlcy5tYXAodmFyaWFibGUgPT4gdmFsdWRBbmRHcmFkcy5ncmFkc1t2YXJpYWJsZS5uYW1lXSk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/flags_layers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
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
    ()=>ENV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/environment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/executor.js [app-ssr] (ecmascript)");
;
;
const ENV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$environment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["env"])();
/** The max number of entries for the caches of layers' topological sort. */ ENV.registerFlag('TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES', ()=>100, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCacheMaxEntries"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZ3NfbGF5ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2ZsYWdzX2xheWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFMUMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFeEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBRXpCLDRFQUE0RTtBQUM1RSxHQUFHLENBQUMsWUFBWSxDQUNaLG9DQUFvQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2Vudn0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHt1cGRhdGVDYWNoZU1heEVudHJpZXN9IGZyb20gJy4vZW5naW5lL2V4ZWN1dG9yJztcblxuZXhwb3J0IGNvbnN0IEVOViA9IGVudigpO1xuXG4vKiogVGhlIG1heCBudW1iZXIgb2YgZW50cmllcyBmb3IgdGhlIGNhY2hlcyBvZiBsYXllcnMnIHRvcG9sb2dpY2FsIHNvcnQuICovXG5FTlYucmVnaXN0ZXJGbGFnKFxuICAgICdUT1BPTE9HSUNBTF9TT1JUX0NBQ0hFX01BWF9FTlRSSUVTJywgKCkgPT4gMTAwLCB1cGRhdGVDYWNoZU1heEVudHJpZXMpO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source: keras/contraints.py */ __turbopack_context__.s([
    "CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP",
    ()=>CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP,
    "Constraint",
    ()=>Constraint,
    "MaxNorm",
    ()=>MaxNorm,
    "MinMaxNorm",
    ()=>MinMaxNorm,
    "NonNeg",
    ()=>NonNeg,
    "UnitNorm",
    ()=>UnitNorm,
    "deserializeConstraint",
    ()=>deserializeConstraint,
    "getConstraint",
    ()=>getConstraint,
    "serializeConstraint",
    ()=>serializeConstraint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sqrt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/clip_by_value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/relu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Helper function used by many of the Constraints to find the L2Norms.
 */ function calcL2Norms(w, axis) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqrt"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](w, w), axis, true)));
}
class Constraint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].Serializable {
    getConfig() {
        return {};
    }
}
class MaxNorm extends Constraint {
    constructor(args){
        super();
        this.defaultMaxValue = 2;
        this.defaultAxis = 0;
        this.maxValue = args.maxValue != null ? args.maxValue : this.defaultMaxValue;
        this.axis = args.axis != null ? args.axis : this.defaultAxis;
    }
    apply(w) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const norms = calcL2Norms(w, this.axis);
            const desired = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](norms, 0, this.maxValue);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](w, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](desired, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), norms)));
        });
    }
    getConfig() {
        return {
            maxValue: this.maxValue,
            axis: this.axis
        };
    }
}
/** @nocollapse */ MaxNorm.className = 'MaxNorm';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(MaxNorm);
class UnitNorm extends Constraint {
    constructor(args){
        super();
        this.defaultAxis = 0;
        this.axis = args.axis != null ? args.axis : this.defaultAxis;
    }
    apply(w) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](w, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), calcL2Norms(w, this.axis))));
    }
    getConfig() {
        return {
            axis: this.axis
        };
    }
}
/** @nocollapse */ UnitNorm.className = 'UnitNorm';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(UnitNorm);
class NonNeg extends Constraint {
    apply(w) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relu"](w);
    }
}
/** @nocollapse */ NonNeg.className = 'NonNeg';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(NonNeg);
class MinMaxNorm extends Constraint {
    constructor(args){
        super();
        this.defaultMinValue = 0.0;
        this.defaultMaxValue = 1.0;
        this.defaultRate = 1.0;
        this.defaultAxis = 0;
        this.minValue = args.minValue != null ? args.minValue : this.defaultMinValue;
        this.maxValue = args.maxValue != null ? args.maxValue : this.defaultMaxValue;
        this.rate = args.rate != null ? args.rate : this.defaultRate;
        this.axis = args.axis != null ? args.axis : this.defaultAxis;
    }
    apply(w) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const norms = calcL2Norms(w, this.axis);
            const desired = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](this.rate, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](norms, this.minValue, this.maxValue)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](1.0 - this.rate, norms));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](w, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](desired, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), norms)));
        });
    }
    getConfig() {
        return {
            minValue: this.minValue,
            maxValue: this.maxValue,
            rate: this.rate,
            axis: this.axis
        };
    }
}
/** @nocollapse */ MinMaxNorm.className = 'MinMaxNorm';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(MinMaxNorm);
const CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    'maxNorm': 'MaxNorm',
    'minMaxNorm': 'MinMaxNorm',
    'nonNeg': 'NonNeg',
    'unitNorm': 'UnitNorm'
};
function serializeConstraint(constraint) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeKerasObject"])(constraint);
}
function deserializeConstraint(config, customObjects = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeKerasObject"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].SerializationMap.getMap().classNameMap, customObjects, 'constraint');
}
function getConstraint(identifier) {
    if (identifier == null) {
        return null;
    }
    if (typeof identifier === 'string') {
        const className = identifier in CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP ? CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] : identifier;
        const config = {
            className,
            config: {}
        };
        return deserializeConstraint(config);
    } else if (identifier instanceof Constraint) {
        return identifier;
    } else {
        return deserializeConstraint(identifier);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RyYWludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvY29uc3RyYWludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCwwQ0FBMEM7QUFFMUMsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFVLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRjs7R0FFRztBQUNILFNBQVMsV0FBVyxDQUFDLENBQVMsRUFBRSxJQUFZO0lBQzFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sT0FBZ0IsVUFBVyxTQUFRLGFBQWEsQ0FBQyxZQUFZO0lBR2pFLFNBQVM7UUFDUCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjtBQXdCRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0lBUXJDLFlBQVksSUFBaUI7UUFDM0IsS0FBSyxFQUFFLENBQUM7UUFKTyxvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUkvQixJQUFJLENBQUMsUUFBUTtZQUNULElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFB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LE1BQU0sQ0FBQyxDQUFDO0tBQ3RDO1NBQU0sSUFBSSxVQUFVLFlBQVksVUFBVSxFQUFFO1FBQzNDLE9BQU8sVUFBVSxDQUFDO0tBQ25CO1NBQU07UUFDTCxPQUFPLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qIE9yaWdpbmFsIHNvdXJjZToga2VyYXMvY29udHJhaW50cy5weSAqL1xuXG5pbXBvcnQgKiBhcyB0ZmMgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7c2VyaWFsaXphdGlvbiwgVGVuc29yLCB0aWR5fSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtlcHNpbG9ufSBmcm9tICcuL2JhY2tlbmQvY29tbW9uJztcbmltcG9ydCB7ZGVzZXJpYWxpemVLZXJhc09iamVjdCwgc2VyaWFsaXplS2VyYXNPYmplY3R9IGZyb20gJy4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHVzZWQgYnkgbWFueSBvZiB0aGUgQ29uc3RyYWludHMgdG8gZmluZCB0aGUgTDJOb3Jtcy5cbiAqL1xuZnVuY3Rpb24gY2FsY0wyTm9ybXModzogVGVuc29yLCBheGlzOiBudW1iZXIpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB0ZmMuc3FydCh0ZmMuc3VtKHRmYy5tdWwodywgdyksIGF4aXMsIHRydWUpKSk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgZnVuY3Rpb25zIHRoYXQgaW1wb3NlIGNvbnN0cmFpbnRzIG9uIHdlaWdodCB2YWx1ZXNcbiAqXG4gKiBAZG9jIHtcbiAqICAgaGVhZGluZzogJ0NvbnN0cmFpbnRzJyxcbiAqICAgc3ViaGVhZGluZzogJ0NsYXNzZXMnLFxuICogICBuYW1lc3BhY2U6ICdjb25zdHJhaW50cydcbiAqIH1cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnN0cmFpbnQgZXh0ZW5kcyBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZSB7XG4gIC8qIFBvcnRpbmcgbm90ZTogd2FzIF9fY2FsbF9fLCBhcHBseSBjaG9zZW4gdG8gbWF0Y2ggb3RoZXIgc2ltaWxhciBjaG9pY2VzICovXG4gIGFic3RyYWN0IGFwcGx5KHc6IFRlbnNvcik6IFRlbnNvcjtcbiAgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF4Tm9ybUFyZ3Mge1xuICAvKipcbiAgICogTWF4aW11bSBub3JtIGZvciBpbmNvbWluZyB3ZWlnaHRzXG4gICAqL1xuICBtYXhWYWx1ZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIEF4aXMgYWxvbmcgd2hpY2ggdG8gY2FsY3VsYXRlIG5vcm1zLlxuICAgKlxuICAgKiAgRm9yIGluc3RhbmNlLCBpbiBhIGBEZW5zZWAgbGF5ZXIgdGhlIHdlaWdodCBtYXRyaXhcbiAgICogIGhhcyBzaGFwZSBgW2lucHV0RGltLCBvdXRwdXREaW1dYCxcbiAgICogIHNldCBgYXhpc2AgdG8gYDBgIHRvIGNvbnN0cmFpbiBlYWNoIHdlaWdodCB2ZWN0b3JcbiAgICogIG9mIGxlbmd0aCBgW2lucHV0RGltLF1gLlxuICAgKiAgSW4gYSBgQ29udjJEYCBsYXllciB3aXRoIGBkYXRhRm9ybWF0PVwiY2hhbm5lbHNfbGFzdFwiYCxcbiAgICogIHRoZSB3ZWlnaHQgdGVuc29yIGhhcyBzaGFwZVxuICAgKiAgYFtyb3dzLCBjb2xzLCBpbnB1dERlcHRoLCBvdXRwdXREZXB0aF1gLFxuICAgKiAgc2V0IGBheGlzYCB0byBgWzAsIDEsIDJdYFxuICAgKiAgdG8gY29uc3RyYWluIHRoZSB3ZWlnaHRzIG9mIGVhY2ggZmlsdGVyIHRlbnNvciBvZiBzaXplXG4gICAqICBgW3Jvd3MsIGNvbHMsIGlucHV0RGVwdGhdYC5cbiAgICovXG4gIGF4aXM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNYXhOb3JtIGV4dGVuZHMgQ29uc3RyYWludCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ01heE5vcm0nO1xuICBwcml2YXRlIG1heFZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgYXhpczogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRNYXhWYWx1ZSA9IDI7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdEF4aXMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IE1heE5vcm1BcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1heFZhbHVlID1cbiAgICAgICAgYXJncy5tYXhWYWx1ZSAhPSBudWxsID8gYXJncy5tYXhWYWx1ZSA6IHRoaXMuZGVmYXVsdE1heFZhbHVlO1xuICAgIHRoaXMuYXhpcyA9IGFyZ3MuYXhpcyAhPSBudWxsID8gYXJncy5heGlzIDogdGhpcy5kZWZhdWx0QXhpcztcbiAgfVxuXG4gIGFwcGx5KHc6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3Qgbm9ybXMgPSBjYWxjTDJOb3Jtcyh3LCB0aGlzLmF4aXMpO1xuICAgICAgY29uc3QgZGVzaXJlZCA9IHRmYy5jbGlwQnlWYWx1ZShub3JtcywgMCwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICByZXR1cm4gdGZjLm11bCh3LCB0ZmMuZGl2KGRlc2lyZWQsIHRmYy5hZGQoZXBzaWxvbigpLCBub3JtcykpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7bWF4VmFsdWU6IHRoaXMubWF4VmFsdWUsIGF4aXM6IHRoaXMuYXhpc307XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhNYXhOb3JtKTtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0Tm9ybUFyZ3Mge1xuICAvKipcbiAgICogQXhpcyBhbG9uZyB3aGljaCB0byBjYWxjdWxhdGUgbm9ybXMuXG4gICAqXG4gICAqIEZvciBpbnN0YW5jZSwgaW4gYSBgRGVuc2VgIGxheWVyIHRoZSB3ZWlnaHQgbWF0cml4XG4gICAqIGhhcyBzaGFwZSBgW2lucHV0RGltLCBvdXRwdXREaW1dYCxcbiAgICogc2V0IGBheGlzYCB0byBgMGAgdG8gY29uc3RyYWluIGVhY2ggd2VpZ2h0IHZlY3RvclxuICAgKiBvZiBsZW5ndGggYFtpbnB1dERpbSxdYC5cbiAgICogSW4gYSBgQ29udjJEYCBsYXllciB3aXRoIGBkYXRhRm9ybWF0PVwiY2hhbm5lbHNfbGFzdFwiYCxcbiAgICogdGhlIHdlaWdodCB0ZW5zb3IgaGFzIHNoYXBlXG4gICAqIGBbcm93cywgY29scywgaW5wdXREZXB0aCwgb3V0cHV0RGVwdGhdYCxcbiAgICogc2V0IGBheGlzYCB0byBgWzAsIDEsIDJdYFxuICAgKiB0byBjb25zdHJhaW4gdGhlIHdlaWdodHMgb2YgZWFjaCBmaWx0ZXIgdGVuc29yIG9mIHNpemVcbiAgICogYFtyb3dzLCBjb2xzLCBpbnB1dERlcHRoXWAuXG4gICAqL1xuICBheGlzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVW5pdE5vcm0gZXh0ZW5kcyBDb25zdHJhaW50IHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgPSAnVW5pdE5vcm0nO1xuICBwcml2YXRlIGF4aXM6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0QXhpcyA9IDA7XG4gIGNvbnN0cnVjdG9yKGFyZ3M6IFVuaXROb3JtQXJncykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5heGlzID0gYXJncy5heGlzICE9IG51bGwgPyBhcmdzLmF4aXMgOiB0aGlzLmRlZmF1bHRBeGlzO1xuICB9XG5cbiAgYXBwbHkodzogVGVuc29yKTogVGVuc29yIHtcbiAgICByZXR1cm4gdGlkeShcbiAgICAgICAgKCkgPT4gdGZjLmRpdih3LCB0ZmMuYWRkKGVwc2lsb24oKSwgY2FsY0wyTm9ybXModywgdGhpcy5heGlzKSkpKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7YXhpczogdGhpcy5heGlzfTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFVuaXROb3JtKTtcblxuZXhwb3J0IGNsYXNzIE5vbk5lZyBleHRlbmRzIENvbnN0cmFpbnQge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNsYXNzTmFtZSA9ICdOb25OZWcnO1xuXG4gIGFwcGx5KHc6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRmYy5yZWx1KHcpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTm9uTmVnKTtcblxuZXhwb3J0IGludGVyZmFjZSBNaW5NYXhOb3JtQXJncyB7XG4gIC8qKlxuICAgKiBNaW5pbXVtIG5vcm0gZm9yIGluY29taW5nIHdlaWdodHNcbiAgICovXG4gIG1pblZhbHVlPzogbnVtYmVyO1xuICAvKipcbiAgICogTWF4aW11bSBub3JtIGZvciBpbmNvbWluZyB3ZWlnaHRzXG4gICAqL1xuICBtYXhWYWx1ZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIEF4aXMgYWxvbmcgd2hpY2ggdG8gY2FsY3VsYXRlIG5vcm1zLlxuICAgKiBGb3IgaW5zdGFuY2UsIGluIGEgYERlbnNlYCBsYXllciB0aGUgd2VpZ2h0IG1hdHJpeFxuICAgKiBoYXMgc2hhcGUgYFtpbnB1dERpbSwgb3V0cHV0RGltXWAsXG4gICAqIHNldCBgYXhpc2AgdG8gYDBgIHRvIGNvbnN0cmFpbiBlYWNoIHdlaWdodCB2ZWN0b3JcbiAgICogb2YgbGVuZ3RoIGBbaW5wdXREaW0sXWAuXG4gICAqIEluIGEgYENvbnYyRGAgbGF5ZXIgd2l0aCBgZGF0YUZvcm1hdD1cImNoYW5uZWxzX2xhc3RcImAsXG4gICAqIHRoZSB3ZWlnaHQgdGVuc29yIGhhcyBzaGFwZVxuICAgKiBgW3Jvd3MsIGNvbHMsIGlucHV0RGVwdGgsIG91dHB1dERlcHRoXWAsXG4gICAqIHNldCBgYXhpc2AgdG8gYFswLCAxLCAyXWBcbiAgICogdG8gY29uc3RyYWluIHRoZSB3ZWlnaHRzIG9mIGVhY2ggZmlsdGVyIHRlbnNvciBvZiBzaXplXG4gICAqIGBbcm93cywgY29scywgaW5wdXREZXB0aF1gLlxuICAgKi9cbiAgYXhpcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFJhdGUgZm9yIGVuZm9yY2luZyB0aGUgY29uc3RyYWludDogd2VpZ2h0cyB3aWxsIGJlIHJlc2NhbGVkIHRvIHlpZWxkOlxuICAgKiBgKDEgLSByYXRlKSAqIG5vcm0gKyByYXRlICogbm9ybS5jbGlwKG1pblZhbHVlLCBtYXhWYWx1ZSlgLlxuICAgKiBFZmZlY3RpdmVseSwgdGhpcyBtZWFucyB0aGF0IHJhdGU9MS4wIHN0YW5kcyBmb3Igc3RyaWN0XG4gICAqIGVuZm9yY2VtZW50IG9mIHRoZSBjb25zdHJhaW50LCB3aGlsZSByYXRlPDEuMCBtZWFucyB0aGF0XG4gICAqIHdlaWdodHMgd2lsbCBiZSByZXNjYWxlZCBhdCBlYWNoIHN0ZXAgdG8gc2xvd2x5IG1vdmVcbiAgICogdG93YXJkcyBhIHZhbHVlIGluc2lkZSB0aGUgZGVzaXJlZCBpbnRlcnZhbC5cbiAgICovXG4gIHJhdGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNaW5NYXhOb3JtIGV4dGVuZHMgQ29uc3RyYWludCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ01pbk1heE5vcm0nO1xuICBwcml2YXRlIG1pblZhbHVlOiBudW1iZXI7XG4gIHByaXZhdGUgbWF4VmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSByYXRlOiBudW1iZXI7XG4gIHByaXZhdGUgYXhpczogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRNaW5WYWx1ZSA9IDAuMDtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0TWF4VmFsdWUgPSAxLjA7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdFJhdGUgPSAxLjA7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdEF4aXMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IE1pbk1heE5vcm1BcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1pblZhbHVlID1cbiAgICAgICAgYXJncy5taW5WYWx1ZSAhPSBudWxsID8gYXJncy5taW5WYWx1ZSA6IHRoaXMuZGVmYXVsdE1pblZhbHVlO1xuICAgIHRoaXMubWF4VmFsdWUgPVxuICAgICAgICBhcmdzLm1heFZhbHVlICE9IG51bGwgPyBhcmdzLm1heFZhbHVlIDogdGhpcy5kZWZhdWx0TWF4VmFsdWU7XG4gICAgdGhpcy5yYXRlID0gYXJncy5yYXRlICE9IG51bGwgPyBhcmdzLnJhdGUgOiB0aGlzLmRlZmF1bHRSYXRlO1xuICAgIHRoaXMuYXhpcyA9IGFyZ3MuYXhpcyAhPSBudWxsID8gYXJncy5heGlzIDogdGhpcy5kZWZhdWx0QXhpcztcbiAgfVxuXG4gIGFwcGx5KHc6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3Qgbm9ybXMgPSBjYWxjTDJOb3Jtcyh3LCB0aGlzLmF4aXMpO1xuICAgICAgY29uc3QgZGVzaXJlZCA9IHRmYy5hZGQoXG4gICAgICAgICAgdGZjLm11bChcbiAgICAgICAgICAgICAgdGhpcy5yYXRlLCB0ZmMuY2xpcEJ5VmFsdWUobm9ybXMsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpKSxcbiAgICAgICAgICB0ZmMubXVsKDEuMCAtIHRoaXMucmF0ZSwgbm9ybXMpKTtcbiAgICAgIHJldHVybiB0ZmMubXVsKHcsIHRmYy5kaXYoZGVzaXJlZCwgdGZjLmFkZChlcHNpbG9uKCksIG5vcm1zKSkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pblZhbHVlOiB0aGlzLm1pblZhbHVlLFxuICAgICAgbWF4VmFsdWU6IHRoaXMubWF4VmFsdWUsXG4gICAgICByYXRlOiB0aGlzLnJhdGUsXG4gICAgICBheGlzOiB0aGlzLmF4aXNcbiAgICB9O1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTWluTWF4Tm9ybSk7XG5cbi8qKiBAZG9jaW5saW5lICovXG5leHBvcnQgdHlwZSBDb25zdHJhaW50SWRlbnRpZmllciA9XG4gICAgJ21heE5vcm0nfCdtaW5NYXhOb3JtJ3wnbm9uTmVnJ3wndW5pdE5vcm0nfHN0cmluZztcblxuLy8gTWFwcyB0aGUgSmF2YVNjcmlwdC1saWtlIGlkZW50aWZpZXIga2V5cyB0byB0aGUgY29ycmVzcG9uZGluZyByZWdpc3RyeVxuLy8gc3ltYm9scy5cbmV4cG9ydCBjb25zdCBDT05TVFJBSU5UX0lERU5USUZJRVJfUkVHSVNUUllfU1lNQk9MX01BUDpcbiAgICB7W2lkZW50aWZpZXIgaW4gQ29uc3RyYWludElkZW50aWZpZXJdOiBzdHJpbmd9ID0ge1xuICAgICAgJ21heE5vcm0nOiAnTWF4Tm9ybScsXG4gICAgICAnbWluTWF4Tm9ybSc6ICdNaW5NYXhOb3JtJyxcbiAgICAgICdub25OZWcnOiAnTm9uTmVnJyxcbiAgICAgICd1bml0Tm9ybSc6ICdVbml0Tm9ybSdcbiAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplQ29uc3RyYWludChjb25zdHJhaW50OiBDb25zdHJhaW50KTpcbiAgICBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3RWYWx1ZSB7XG4gIHJldHVybiBzZXJpYWxpemVLZXJhc09iamVjdChjb25zdHJhaW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplQ29uc3RyYWludChcbiAgICBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICBjdXN0b21PYmplY3RzOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fSk6IENvbnN0cmFpbnQge1xuICByZXR1cm4gZGVzZXJpYWxpemVLZXJhc09iamVjdChcbiAgICAgIGNvbmZpZywgc2VyaWFsaXphdGlvbi5TZXJpYWxpemF0aW9uTWFwLmdldE1hcCgpLmNsYXNzTmFtZU1hcCxcbiAgICAgIGN1c3RvbU9iamVjdHMsICdjb25zdHJhaW50Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25zdHJhaW50KGlkZW50aWZpZXI6IENvbnN0cmFpbnRJZGVudGlmaWVyfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0fENvbnN0cmFpbnQpOiBDb25zdHJhaW50IHtcbiAgaWYgKGlkZW50aWZpZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgaWRlbnRpZmllciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpZGVudGlmaWVyIGluIENPTlNUUkFJTlRfSURFTlRJRklFUl9SRUdJU1RSWV9TWU1CT0xfTUFQID9cbiAgICAgICAgQ09OU1RSQUlOVF9JREVOVElGSUVSX1JFR0lTVFJZX1NZTUJPTF9NQVBbaWRlbnRpZmllcl0gOlxuICAgICAgICBpZGVudGlmaWVyO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtjbGFzc05hbWUsIGNvbmZpZzoge319O1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZUNvbnN0cmFpbnQoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpZGVudGlmaWVyIGluc3RhbmNlb2YgQ29uc3RyYWludCkge1xuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZUNvbnN0cmFpbnQoaWRlbnRpZmllcik7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_constraints.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ // tslint:disable-next-line:max-line-length
__turbopack_context__.s([
    "maxNorm",
    ()=>maxNorm,
    "minMaxNorm",
    ()=>minMaxNorm,
    "nonNeg",
    ()=>nonNeg,
    "unitNorm",
    ()=>unitNorm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/constraints.js [app-ssr] (ecmascript)");
;
function maxNorm(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaxNorm"](args);
}
function unitNorm(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnitNorm"](args);
}
function nonNeg() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NonNeg"]();
}
function minMaxNorm(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MinMaxNorm"](config);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0c19jb25zdHJhaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9leHBvcnRzX2NvbnN0cmFpbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBQ0gsMkNBQTJDO0FBQzNDLE9BQU8sRUFBYSxPQUFPLEVBQWUsVUFBVSxFQUFrQixNQUFNLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRTNIOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBaUI7SUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBa0I7SUFDekMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxNQUFNO0lBQ3BCLE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRUQsOERBQThEO0FBQzlELE1BQU0sVUFBVSxVQUFVLENBQUMsTUFBc0I7SUFDL0MsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7Q29uc3RyYWludCwgTWF4Tm9ybSwgTWF4Tm9ybUFyZ3MsIE1pbk1heE5vcm0sIE1pbk1heE5vcm1BcmdzLCBOb25OZWcsIFVuaXROb3JtLCBVbml0Tm9ybUFyZ3N9IGZyb20gJy4vY29uc3RyYWludHMnO1xuXG4vKipcbiAqIE1heE5vcm0gd2VpZ2h0IGNvbnN0cmFpbnQuXG4gKlxuICogQ29uc3RyYWlucyB0aGUgd2VpZ2h0cyBpbmNpZGVudCB0byBlYWNoIGhpZGRlbiB1bml0XG4gKiB0byBoYXZlIGEgbm9ybSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYSBkZXNpcmVkIHZhbHVlLlxuICpcbiAqIFJlZmVyZW5jZXNcbiAqICAgICAgIC0gW0Ryb3BvdXQ6IEEgU2ltcGxlIFdheSB0byBQcmV2ZW50IE5ldXJhbCBOZXR3b3JrcyBmcm9tIE92ZXJmaXR0aW5nXG4gKiBTcml2YXN0YXZhLCBIaW50b24sIGV0IGFsLlxuICogMjAxNF0oaHR0cDovL3d3dy5jcy50b3JvbnRvLmVkdS9+cnNhbGFraHUvcGFwZXJzL3NyaXZhc3RhdmExNGEucGRmKVxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdDb25zdHJhaW50cycsbmFtZXNwYWNlOiAnY29uc3RyYWludHMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4Tm9ybShhcmdzOiBNYXhOb3JtQXJncyk6IENvbnN0cmFpbnQge1xuICByZXR1cm4gbmV3IE1heE5vcm0oYXJncyk7XG59XG5cbi8qKlxuICogQ29uc3RyYWlucyB0aGUgd2VpZ2h0cyBpbmNpZGVudCB0byBlYWNoIGhpZGRlbiB1bml0IHRvIGhhdmUgdW5pdCBub3JtLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdDb25zdHJhaW50cycsIG5hbWVzcGFjZTogJ2NvbnN0cmFpbnRzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaXROb3JtKGFyZ3M6IFVuaXROb3JtQXJncyk6IENvbnN0cmFpbnQge1xuICByZXR1cm4gbmV3IFVuaXROb3JtKGFyZ3MpO1xufVxuXG4vKipcbiAqIENvbnN0cmFpbnMgdGhlIHdlaWdodCB0byBiZSBub24tbmVnYXRpdmUuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0NvbnN0cmFpbnRzJywgbmFtZXNwYWNlOiAnY29uc3RyYWludHMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9uTmVnKCk6IENvbnN0cmFpbnQge1xuICByZXR1cm4gbmV3IE5vbk5lZygpO1xufVxuXG4vKiogQGRvYyB7aGVhZGluZzogJ0NvbnN0cmFpbnRzJywgbmFtZXNwYWNlOiAnY29uc3RyYWludHMnfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbk1heE5vcm0oY29uZmlnOiBNaW5NYXhOb3JtQXJncyk6IENvbnN0cmFpbnQge1xuICByZXR1cm4gbmV3IE1pbk1heE5vcm0oY29uZmlnKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_initializers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ // tslint:disable-next-line:max-line-length
__turbopack_context__.s([
    "constant",
    ()=>constant,
    "glorotNormal",
    ()=>glorotNormal,
    "glorotUniform",
    ()=>glorotUniform,
    "heNormal",
    ()=>heNormal,
    "heUniform",
    ()=>heUniform,
    "identity",
    ()=>identity,
    "leCunNormal",
    ()=>leCunNormal,
    "leCunUniform",
    ()=>leCunUniform,
    "ones",
    ()=>ones,
    "orthogonal",
    ()=>orthogonal,
    "randomNormal",
    ()=>randomNormal,
    "randomUniform",
    ()=>randomUniform,
    "truncatedNormal",
    ()=>truncatedNormal,
    "varianceScaling",
    ()=>varianceScaling,
    "zeros",
    ()=>zeros
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-ssr] (ecmascript)");
;
function zeros() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Zeros"]();
}
function ones() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ones"]();
}
function constant(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Constant"](args);
}
function randomUniform(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomUniform"](args);
}
function randomNormal(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomNormal"](args);
}
function truncatedNormal(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TruncatedNormal"](args);
}
function identity(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Identity"](args);
}
function varianceScaling(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VarianceScaling"](config);
}
function glorotUniform(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlorotUniform"](args);
}
function glorotNormal(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlorotNormal"](args);
}
function heNormal(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeNormal"](args);
}
function heUniform(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeUniform"](args);
}
function leCunNormal(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeCunNormal"](args);
}
function leCunUniform(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LeCunUniform"](args);
}
function orthogonal(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Orthogonal"](args);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0c19pbml0aWFsaXplcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZXhwb3J0c19pbml0aWFsaXplcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDSCwyQ0FBMkM7QUFDM0MsT0FBTyxFQUFDLFFBQVEsRUFBZ0IsWUFBWSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBNkIsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFrQixZQUFZLEVBQW9CLGFBQWEsRUFBOEMsZUFBZSxFQUF1QixlQUFlLEVBQXVCLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhYOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsS0FBSztJQUNuQixPQUFPLElBQUksS0FBSyxFQUFFLENBQUM7QUFDckIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsSUFBSTtJQUNsQixPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQWtCO0lBQ3pDLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUF1QjtJQUNuRCxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBc0I7SUFDakQsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUF5QjtJQUN2RCxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBa0I7SUFDekMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRUQ7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUEyQjtJQUN6RCxPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQTZCO0lBQ3pELE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBNkI7SUFDeEQsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQTZCO0lBQ3BELE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVEOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUE2QjtJQUNyRCxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQTZCO0lBQ3ZELE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUE2QjtJQUN4RCxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxJQUFvQjtJQUM3QyxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHtDb25zdGFudCwgQ29uc3RhbnRBcmdzLCBHbG9yb3ROb3JtYWwsIEdsb3JvdFVuaWZvcm0sIEhlTm9ybWFsLCBIZVVuaWZvcm0sIElkZW50aXR5LCBJZGVudGl0eUFyZ3MsIEluaXRpYWxpemVyLCBMZUN1bk5vcm1hbCwgTGVDdW5Vbmlmb3JtLCBPbmVzLCBPcnRob2dvbmFsLCBPcnRob2dvbmFsQXJncywgUmFuZG9tTm9ybWFsLCBSYW5kb21Ob3JtYWxBcmdzLCBSYW5kb21Vbmlmb3JtLCBSYW5kb21Vbmlmb3JtQXJncywgU2VlZE9ubHlJbml0aWFsaXplckFyZ3MsIFRydW5jYXRlZE5vcm1hbCwgVHJ1bmNhdGVkTm9ybWFsQXJncywgVmFyaWFuY2VTY2FsaW5nLCBWYXJpYW5jZVNjYWxpbmdBcmdzLCBaZXJvc30gZnJvbSAnLi9pbml0aWFsaXplcnMnO1xuXG4vKipcbiAqIEluaXRpYWxpemVyIHRoYXQgZ2VuZXJhdGVzIHRlbnNvcnMgaW5pdGlhbGl6ZWQgdG8gMC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHplcm9zKCk6IFplcm9zIHtcbiAgcmV0dXJuIG5ldyBaZXJvcygpO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVyIHRoYXQgZ2VuZXJhdGVzIHRlbnNvcnMgaW5pdGlhbGl6ZWQgdG8gMS5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uZXMoKTogSW5pdGlhbGl6ZXIge1xuICByZXR1cm4gbmV3IE9uZXMoKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplciB0aGF0IGdlbmVyYXRlcyB2YWx1ZXMgaW5pdGlhbGl6ZWQgdG8gc29tZSBjb25zdGFudC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0YW50KGFyZ3M6IENvbnN0YW50QXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBDb25zdGFudChhcmdzKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplciB0aGF0IGdlbmVyYXRlcyByYW5kb20gdmFsdWVzIGluaXRpYWxpemVkIHRvIGEgdW5pZm9ybVxuICogZGlzdHJpYnV0aW9uLlxuICpcbiAqIFZhbHVlcyB3aWxsIGJlIGRpc3RyaWJ1dGVkIHVuaWZvcm1seSBiZXR3ZWVuIHRoZSBjb25maWd1cmVkIG1pbnZhbCBhbmRcbiAqIG1heHZhbC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVVuaWZvcm0oYXJnczogUmFuZG9tVW5pZm9ybUFyZ3MpOiBJbml0aWFsaXplciB7XG4gIHJldHVybiBuZXcgUmFuZG9tVW5pZm9ybShhcmdzKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplciB0aGF0IGdlbmVyYXRlcyByYW5kb20gdmFsdWVzIGluaXRpYWxpemVkIHRvIGEgbm9ybWFsXG4gKiBkaXN0cmlidXRpb24uXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0luaXRpYWxpemVycycsIG5hbWVzcGFjZTogJ2luaXRpYWxpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Ob3JtYWwoYXJnczogUmFuZG9tTm9ybWFsQXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBSYW5kb21Ob3JtYWwoYXJncyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXIgdGhhdCBnZW5lcmF0ZXMgcmFuZG9tIHZhbHVlcyBpbml0aWFsaXplZCB0byBhIHRydW5jYXRlZCBub3JtYWxcbiAqIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBUaGVzZSB2YWx1ZXMgYXJlIHNpbWlsYXIgdG8gdmFsdWVzIGZyb20gYSBgUmFuZG9tTm9ybWFsYCBleGNlcHQgdGhhdCB2YWx1ZXNcbiAqIG1vcmUgdGhhbiB0d28gc3RhbmRhcmQgZGV2aWF0aW9ucyBmcm9tIHRoZSBtZWFuIGFyZSBkaXNjYXJkZWQgYW5kIHJlLWRyYXduLlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgaW5pdGlhbGl6ZXIgZm9yIG5ldXJhbCBuZXR3b3JrIHdlaWdodHMgYW5kIGZpbHRlcnMuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0luaXRpYWxpemVycycsIG5hbWVzcGFjZTogJ2luaXRpYWxpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZWROb3JtYWwoYXJnczogVHJ1bmNhdGVkTm9ybWFsQXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBUcnVuY2F0ZWROb3JtYWwoYXJncyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXIgdGhhdCBnZW5lcmF0ZXMgdGhlIGlkZW50aXR5IG1hdHJpeC5cbiAqIE9ubHkgdXNlIGZvciBzcXVhcmUgMkQgbWF0cmljZXMuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0luaXRpYWxpemVycycsIG5hbWVzcGFjZTogJ2luaXRpYWxpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShhcmdzOiBJZGVudGl0eUFyZ3MpOiBJbml0aWFsaXplciB7XG4gIHJldHVybiBuZXcgSWRlbnRpdHkoYXJncyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXIgY2FwYWJsZSBvZiBhZGFwdGluZyBpdHMgc2NhbGUgdG8gdGhlIHNoYXBlIG9mIHdlaWdodHMuXG4gKiBXaXRoIGRpc3RyaWJ1dGlvbj1OT1JNQUwsIHNhbXBsZXMgYXJlIGRyYXduIGZyb20gYSB0cnVuY2F0ZWQgbm9ybWFsXG4gKiBkaXN0cmlidXRpb24gY2VudGVyZWQgb24gemVybywgd2l0aCBgc3RkZGV2ID0gc3FydChzY2FsZSAvIG4pYCB3aGVyZSBuIGlzOlxuICogICAtIG51bWJlciBvZiBpbnB1dCB1bml0cyBpbiB0aGUgd2VpZ2h0IHRlbnNvciwgaWYgbW9kZSA9IEZBTl9JTi5cbiAqICAgLSBudW1iZXIgb2Ygb3V0cHV0IHVuaXRzLCBpZiBtb2RlID0gRkFOX09VVC5cbiAqICAgLSBhdmVyYWdlIG9mIHRoZSBudW1iZXJzIG9mIGlucHV0IGFuZCBvdXRwdXQgdW5pdHMsIGlmIG1vZGUgPSBGQU5fQVZHLlxuICogV2l0aCBkaXN0cmlidXRpb249VU5JRk9STSxcbiAqIHNhbXBsZXMgYXJlIGRyYXduIGZyb20gYSB1bmlmb3JtIGRpc3RyaWJ1dGlvblxuICogd2l0aGluIFstbGltaXQsIGxpbWl0XSwgd2l0aCBgbGltaXQgPSBzcXJ0KDMgKiBzY2FsZSAvIG4pYC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJyxuYW1lc3BhY2U6ICdpbml0aWFsaXplcnMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFuY2VTY2FsaW5nKGNvbmZpZzogVmFyaWFuY2VTY2FsaW5nQXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBWYXJpYW5jZVNjYWxpbmcoY29uZmlnKTtcbn1cblxuLyoqXG4gKiBHbG9yb3QgdW5pZm9ybSBpbml0aWFsaXplciwgYWxzbyBjYWxsZWQgWGF2aWVyIHVuaWZvcm0gaW5pdGlhbGl6ZXIuXG4gKiBJdCBkcmF3cyBzYW1wbGVzIGZyb20gYSB1bmlmb3JtIGRpc3RyaWJ1dGlvbiB3aXRoaW4gWy1saW1pdCwgbGltaXRdXG4gKiB3aGVyZSBgbGltaXRgIGlzIGBzcXJ0KDYgLyAoZmFuX2luICsgZmFuX291dCkpYFxuICogd2hlcmUgYGZhbl9pbmAgaXMgdGhlIG51bWJlciBvZiBpbnB1dCB1bml0cyBpbiB0aGUgd2VpZ2h0IHRlbnNvclxuICogYW5kIGBmYW5fb3V0YCBpcyB0aGUgbnVtYmVyIG9mIG91dHB1dCB1bml0cyBpbiB0aGUgd2VpZ2h0IHRlbnNvclxuICpcbiAqIFJlZmVyZW5jZTpcbiAqICAgR2xvcm90ICYgQmVuZ2lvLCBBSVNUQVRTIDIwMTBcbiAqICAgICAgIGh0dHA6Ly9qbWxyLm9yZy9wcm9jZWVkaW5ncy9wYXBlcnMvdjkvZ2xvcm90MTBhL2dsb3JvdDEwYS5wZGYuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0luaXRpYWxpemVycycsIG5hbWVzcGFjZTogJ2luaXRpYWxpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnbG9yb3RVbmlmb3JtKGFyZ3M6IFNlZWRPbmx5SW5pdGlhbGl6ZXJBcmdzKTogSW5pdGlhbGl6ZXIge1xuICByZXR1cm4gbmV3IEdsb3JvdFVuaWZvcm0oYXJncyk7XG59XG5cbi8qKlxuICogR2xvcm90IG5vcm1hbCBpbml0aWFsaXplciwgYWxzbyBjYWxsZWQgWGF2aWVyIG5vcm1hbCBpbml0aWFsaXplci5cbiAqIEl0IGRyYXdzIHNhbXBsZXMgZnJvbSBhIHRydW5jYXRlZCBub3JtYWwgZGlzdHJpYnV0aW9uIGNlbnRlcmVkIG9uIDBcbiAqIHdpdGggYHN0ZGRldiA9IHNxcnQoMiAvIChmYW5faW4gKyBmYW5fb3V0KSlgXG4gKiB3aGVyZSBgZmFuX2luYCBpcyB0aGUgbnVtYmVyIG9mIGlucHV0IHVuaXRzIGluIHRoZSB3ZWlnaHQgdGVuc29yXG4gKiBhbmQgYGZhbl9vdXRgIGlzIHRoZSBudW1iZXIgb2Ygb3V0cHV0IHVuaXRzIGluIHRoZSB3ZWlnaHQgdGVuc29yLlxuICpcbiAqIFJlZmVyZW5jZTpcbiAqICAgR2xvcm90ICYgQmVuZ2lvLCBBSVNUQVRTIDIwMTBcbiAqICAgICAgIGh0dHA6Ly9qbWxyLm9yZy9wcm9jZWVkaW5ncy9wYXBlcnMvdjkvZ2xvcm90MTBhL2dsb3JvdDEwYS5wZGZcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdsb3JvdE5vcm1hbChhcmdzOiBTZWVkT25seUluaXRpYWxpemVyQXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBHbG9yb3ROb3JtYWwoYXJncyk7XG59XG5cbi8qKlxuICogSGUgbm9ybWFsIGluaXRpYWxpemVyLlxuICpcbiAqIEl0IGRyYXdzIHNhbXBsZXMgZnJvbSBhIHRydW5jYXRlZCBub3JtYWwgZGlzdHJpYnV0aW9uIGNlbnRlcmVkIG9uIDBcbiAqIHdpdGggYHN0ZGRldiA9IHNxcnQoMiAvIGZhbkluKWBcbiAqIHdoZXJlIGBmYW5JbmAgaXMgdGhlIG51bWJlciBvZiBpbnB1dCB1bml0cyBpbiB0aGUgd2VpZ2h0IHRlbnNvci5cbiAqXG4gKiBSZWZlcmVuY2U6XG4gKiAgICAgSGUgZXQgYWwuLCBodHRwOi8vYXJ4aXYub3JnL2Ficy8xNTAyLjAxODUyXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ0luaXRpYWxpemVycycsIG5hbWVzcGFjZTogJ2luaXRpYWxpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZU5vcm1hbChhcmdzOiBTZWVkT25seUluaXRpYWxpemVyQXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBIZU5vcm1hbChhcmdzKTtcbn1cblxuLyoqXG4gKiBIZSB1bmlmb3JtIGluaXRpYWxpemVyLlxuICpcbiAqIEl0IGRyYXdzIHNhbXBsZXMgZnJvbSBhIHVuaWZvcm0gZGlzdHJpYnV0aW9uIHdpdGhpbiBbLWxpbWl0LCBsaW1pdF1cbiAqIHdoZXJlIGBsaW1pdGAgaXMgYHNxcnQoNiAvIGZhbl9pbilgXG4gKiB3aGVyZSBgZmFuSW5gIGlzIHRoZSBudW1iZXIgb2YgaW5wdXQgdW5pdHMgaW4gdGhlIHdlaWdodCB0ZW5zb3IuXG4gKlxuICogUmVmZXJlbmNlOlxuICogICAgIEhlIGV0IGFsLiwgaHR0cDovL2FyeGl2Lm9yZy9hYnMvMTUwMi4wMTg1MlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdJbml0aWFsaXplcnMnLG5hbWVzcGFjZTogJ2luaXRpYWxpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZVVuaWZvcm0oYXJnczogU2VlZE9ubHlJbml0aWFsaXplckFyZ3MpOiBJbml0aWFsaXplciB7XG4gIHJldHVybiBuZXcgSGVVbmlmb3JtKGFyZ3MpO1xufVxuXG4vKipcbiAqIExlQ3VuIG5vcm1hbCBpbml0aWFsaXplci5cbiAqXG4gKiBJdCBkcmF3cyBzYW1wbGVzIGZyb20gYSB0cnVuY2F0ZWQgbm9ybWFsIGRpc3RyaWJ1dGlvbiBjZW50ZXJlZCBvbiAwXG4gKiB3aXRoIGBzdGRkZXYgPSBzcXJ0KDEgLyBmYW5JbilgXG4gKiB3aGVyZSBgZmFuSW5gIGlzIHRoZSBudW1iZXIgb2YgaW5wdXQgdW5pdHMgaW4gdGhlIHdlaWdodCB0ZW5zb3IuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICAgW1NlbGYtTm9ybWFsaXppbmcgTmV1cmFsIE5ldHdvcmtzXShodHRwczovL2FyeGl2Lm9yZy9hYnMvMTcwNi4wMjUxNSlcbiAqICAgW0VmZmljaWVudCBCYWNrcHJvcF0oaHR0cDovL3lhbm4ubGVjdW4uY29tL2V4ZGIvcHVibGlzL3BkZi9sZWN1bi05OGIucGRmKVxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdJbml0aWFsaXplcnMnLCBuYW1lc3BhY2U6ICdpbml0aWFsaXplcnMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVDdW5Ob3JtYWwoYXJnczogU2VlZE9ubHlJbml0aWFsaXplckFyZ3MpOiBJbml0aWFsaXplciB7XG4gIHJldHVybiBuZXcgTGVDdW5Ob3JtYWwoYXJncyk7XG59XG5cbi8qKlxuICogTGVDdW4gdW5pZm9ybSBpbml0aWFsaXplci5cbiAqXG4gKiBJdCBkcmF3cyBzYW1wbGVzIGZyb20gYSB1bmlmb3JtIGRpc3RyaWJ1dGlvbiBpbiB0aGUgaW50ZXJ2YWxcbiAqIGBbLWxpbWl0LCBsaW1pdF1gIHdpdGggYGxpbWl0ID0gc3FydCgzIC8gZmFuSW4pYCxcbiAqIHdoZXJlIGBmYW5JbmAgaXMgdGhlIG51bWJlciBvZiBpbnB1dCB1bml0cyBpbiB0aGUgd2VpZ2h0IHRlbnNvci5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlQ3VuVW5pZm9ybShhcmdzOiBTZWVkT25seUluaXRpYWxpemVyQXJncyk6IEluaXRpYWxpemVyIHtcbiAgcmV0dXJuIG5ldyBMZUN1blVuaWZvcm0oYXJncyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXIgdGhhdCBnZW5lcmF0ZXMgYSByYW5kb20gb3J0aG9nb25hbCBtYXRyaXguXG4gKlxuICogUmVmZXJlbmNlOlxuICogW1NheGUgZXQgYWwuLCBodHRwOi8vYXJ4aXYub3JnL2Ficy8xMzEyLjYxMjBdKGh0dHA6Ly9hcnhpdi5vcmcvYWJzLzEzMTIuNjEyMClcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnSW5pdGlhbGl6ZXJzJywgbmFtZXNwYWNlOiAnaW5pdGlhbGl6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvZ29uYWwoYXJnczogT3J0aG9nb25hbEFyZ3MpOiBJbml0aWFsaXplciB7XG4gIHJldHVybiBuZXcgT3J0aG9nb25hbChhcmdzKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/logs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "disposeTensorsInLogs",
    ()=>disposeTensorsInLogs,
    "resolveScalarsInLogs",
    ()=>resolveScalarsInLogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
;
async function resolveScalarsInLogs(logs) {
    if (logs == null) {
        return;
    }
    const promises = [];
    const keys = [];
    const scalarsToDispose = [];
    for(const key in logs){
        const value = logs[key];
        if (typeof value !== 'number') {
            const valueScalar = value;
            promises.push(valueScalar.data());
            keys.push(key);
            scalarsToDispose.push(valueScalar);
        }
    }
    if (promises.length > 0) {
        const values = await Promise.all(promises);
        for(let i = 0; i < values.length; ++i){
            logs[keys[i]] = values[i][0];
        }
        // Dispose the original scalar tensors.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(scalarsToDispose);
    }
}
function disposeTensorsInLogs(logs) {
    if (logs == null) {
        return;
    }
    for(const key in logs){
        const value = logs[key];
        if (typeof value !== 'number') {
            value.dispose();
        }
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9sb2dzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBUyxNQUFNLHVCQUF1QixDQUFDO0FBV3REOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLG9CQUFvQixDQUFDLElBQW9CO0lBQzdELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNoQixPQUFPO0tBQ1I7SUFDRCxNQUFNLFFBQVEsR0FBdUQsRUFBRSxDQUFDO0lBQ3hFLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztJQUMxQixNQUFNLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztJQUN0QyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtRQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QixNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELHVDQUF1QztRQUN2QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMzQjtBQUNILENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxJQUFvQjtJQUN2RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTztLQUNSO0lBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQjtLQUNGO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7ZGlzcG9zZSwgU2NhbGFyfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG4vKipcbiAqIExvZ3MgaW4gd2hpY2ggdmFsdWVzIGNhbiBiZSBlaXRoZXIgbnVtYmVycyBvciBUZW5zb3JzIChTY2FsYXJzKS5cbiAqXG4gKiBVc2VkIGludGVybmFsbHkuXG4gKi9cbmV4cG9ydCB0eXBlIFVucmVzb2x2ZWRMb2dzID0ge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXJ8U2NhbGFyO1xufTtcblxuLyoqXG4gKiBUdXJuIGFueSBTY2FsYXIgdmFsdWVzIGluIGEgTG9ncyBvYmplY3QgaW50byBhY3R1YWwgbnVtYmVyIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0gbG9ncyBUaGUgYExvZ3NgIG9iamVjdCB0byBiZSByZXNvbHZlZCBpbiBwbGFjZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVTY2FsYXJzSW5Mb2dzKGxvZ3M6IFVucmVzb2x2ZWRMb2dzKSB7XG4gIGlmIChsb2dzID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvbWlzZXM6IEFycmF5PFByb21pc2U8RmxvYXQzMkFycmF5fEludDMyQXJyYXl8VWludDhBcnJheT4+ID0gW107XG4gIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHNjYWxhcnNUb0Rpc3Bvc2U6IFNjYWxhcltdID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIGxvZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxvZ3Nba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgdmFsdWVTY2FsYXIgPSB2YWx1ZTtcbiAgICAgIHByb21pc2VzLnB1c2godmFsdWVTY2FsYXIuZGF0YSgpKTtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgc2NhbGFyc1RvRGlzcG9zZS5wdXNoKHZhbHVlU2NhbGFyKTtcbiAgICB9XG4gIH1cbiAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxvZ3Nba2V5c1tpXV0gPSB2YWx1ZXNbaV1bMF07XG4gICAgfVxuICAgIC8vIERpc3Bvc2UgdGhlIG9yaWdpbmFsIHNjYWxhciB0ZW5zb3JzLlxuICAgIGRpc3Bvc2Uoc2NhbGFyc1RvRGlzcG9zZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwb3NlIGFsbCBUZW5zb3JzIGluIGFuIFVucmVzb2x2ZWRMb2dzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gbG9ncyBBbiBgVW5yZXNvbHZlZExvZ3NgIG9iamVjdCBwb3RlbnRpYWxseSBjb250YWluaW5nIGB0Zi5UZW5zb3JgcyBpblxuICogICBwbGFjZXMgd2hlcmUgdGhlIHZhbHVlcyBjYW4gYmUgYHRmLlRlbnNvcmAgb3IgYG51bWJlcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwb3NlVGVuc29yc0luTG9ncyhsb2dzOiBVbnJlc29sdmVkTG9ncykge1xuICBpZiAobG9ncyA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIGxvZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxvZ3Nba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIExvZ3MgaW4gd2hpY2ggdmFsdWVzIGNhbiBvbmx5IGJlIG51bWJlcnMuXG4gKlxuICogVXNlZCB3aGVuIGNhbGxpbmcgY2xpZW50LXByb3ZpZGVkIGN1c3RvbSBjYWxsYmFja3MuXG4gKi9cbmV4cG9ydCB0eXBlIExvZ3MgPSB7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlcjtcbn07XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/base_callbacks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source: keras/callbacks.py */ __turbopack_context__.s([
    "BaseCallback",
    ()=>BaseCallback,
    "BaseLogger",
    ()=>BaseLogger,
    "CallbackConstructorRegistry",
    ()=>CallbackConstructorRegistry,
    "CallbackList",
    ()=>CallbackList,
    "CustomCallback",
    ()=>CustomCallback,
    "DEFAULT_YIELD_EVERY_MS",
    ()=>DEFAULT_YIELD_EVERY_MS,
    "History",
    ()=>History,
    "ModelLoggingVerbosity",
    ()=>ModelLoggingVerbosity,
    "configureCallbacks",
    ()=>configureCallbacks,
    "standardizeCallbacks",
    ()=>standardizeCallbacks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$browser_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/browser_util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/logs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
;
;
;
var ModelLoggingVerbosity;
(function(ModelLoggingVerbosity) {
    ModelLoggingVerbosity[ModelLoggingVerbosity["SILENT"] = 0] = "SILENT";
    ModelLoggingVerbosity[ModelLoggingVerbosity["VERBOSE"] = 1] = "VERBOSE";
})(ModelLoggingVerbosity || (ModelLoggingVerbosity = {}));
const DEFAULT_YIELD_EVERY_MS = 125;
class BaseCallback {
    constructor(){
        // TODO(michaelterry): This type is a best guess.
        this.validationData = null;
    }
    setParams(params) {
        this.params = params;
    }
    async onEpochBegin(epoch, logs) {}
    async onEpochEnd(epoch, logs) {}
    async onBatchBegin(batch, logs) {}
    async onBatchEnd(batch, logs) {}
    async onTrainBegin(logs) {}
    async onTrainEnd(logs) {}
    // LayersModel needs to call Callback.setModel(), but cannot actually depend
    // on Callback because that creates a cyclic dependency.  Providing this no-op
    // method on BaseCallback breaks the cycle: this way LayersModel can depend on
    // BaseCallback but not on Callback.  The argument is typed as `Container`
    // (the superclass of LayersModel) to avoid recapitulating the cycle. Callback
    // overrides this method and enforces that the argument is really a
    // LayersModel.
    setModel(model) {
    // Do nothing. Use Callback instead of BaseCallback to track the model.
    }
}
class CallbackList {
    // TODO(cais): When the need arises, uncomment the following lines and
    // implement the queue for time values.
    // private deltaTBatch: number;
    // private deltaTsBatchBegin: Array<number>;
    // private deltaTsBatchEnd: Array<number>;
    /**
     * Constructor of CallbackList.
     * @param callbacks Array of `Callback` instances.
     * @param queueLength Queue length for keeping running statistics over
     *   callback execution time.
     */ constructor(callbacks, queueLength = 10){
        // TODO(cais): Make use of queueLength when implementing the queue for time
        // values.
        if (callbacks == null) {
            callbacks = [];
        }
        this.callbacks = callbacks;
        this.queueLength = queueLength;
    }
    append(callback) {
        this.callbacks.push(callback);
    }
    setParams(params) {
        for (const callback of this.callbacks){
            callback.setParams(params);
        }
    }
    setModel(model) {
        for (const callback of this.callbacks){
            callback.setModel(model);
        }
    }
    /**
     * Called at the start of an epoch.
     * @param epoch Index of epoch.
     * @param logs Dictionary of logs.
     */ async onEpochBegin(epoch, logs) {
        if (logs == null) {
            logs = {};
        }
        for (const callback of this.callbacks){
            await callback.onEpochBegin(epoch, logs);
        }
    }
    /**
     * Called at the end of an epoch.
     * @param epoch Index of epoch.
     * @param logs Dictionary of logs.
     */ async onEpochEnd(epoch, logs) {
        if (logs == null) {
            logs = {};
        }
        for (const callback of this.callbacks){
            await callback.onEpochEnd(epoch, logs);
        }
    }
    /**
     * Called  right before processing a batch.
     * @param batch Index of batch within the current epoch.
     * @param logs Dictionary of logs.
     */ async onBatchBegin(batch, logs) {
        if (logs == null) {
            logs = {};
        }
        for (const callback of this.callbacks){
            await callback.onBatchBegin(batch, logs);
        }
    }
    /**
     * Called at the end of a batch.
     * @param batch Index of batch within the current epoch.
     * @param logs Dictionary of logs.
     */ async onBatchEnd(batch, logs) {
        if (logs == null) {
            logs = {};
        }
        for (const callback of this.callbacks){
            await callback.onBatchEnd(batch, logs);
        }
    }
    /**
     * Called at the beginning of training.
     * @param logs Dictionary of logs.
     */ async onTrainBegin(logs) {
        if (logs == null) {
            logs = {};
        }
        for (const callback of this.callbacks){
            await callback.onTrainBegin(logs);
        }
    }
    /**
     * Called at the end of training.
     * @param logs Dictionary of logs.
     */ async onTrainEnd(logs) {
        if (logs == null) {
            logs = {};
        }
        for (const callback of this.callbacks){
            await callback.onTrainEnd(logs);
        }
    }
}
class BaseLogger extends BaseCallback {
    constructor(){
        super();
    }
    async onEpochBegin(epoch) {
        this.seen = 0;
        this.totals = {};
    }
    async onBatchEnd(batch, logs) {
        if (logs == null) {
            logs = {};
        }
        const batchSize = logs['size'] == null ? 0 : logs['size'];
        this.seen += batchSize;
        for(const key in logs){
            const value = logs[key];
            if (typeof value === 'number') {
                if (!this.totals.hasOwnProperty(key)) {
                    this.totals[key] = 0;
                }
                this.totals[key] = this.totals[key] + value * batchSize;
            } else {
                let oldTotalsToDispose;
                if (key in this.totals) {
                    oldTotalsToDispose = this.totals[key];
                } else {
                    this.totals[key] = 0;
                }
                const total = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(this.totals[key], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])(value, batchSize)));
                this.totals[key] = total;
                if (oldTotalsToDispose != null) {
                    oldTotalsToDispose.dispose();
                }
            }
        }
    }
    async onEpochEnd(epoch, logs) {
        if (logs != null) {
            for (const key of this.params['metrics']){
                if (this.totals[key] == null) {
                    continue;
                }
                if (typeof this.totals[key] === 'number') {
                    logs[key] = this.totals[key] / this.seen;
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
                        const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"])(1, this.seen), this.totals[key]);
                        logs[key] = log;
                        this.totals[key].dispose();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keep"])(logs[key]);
                    });
                }
            }
        }
    }
}
class History extends BaseCallback {
    async onTrainBegin(logs) {
        this.epoch = [];
        this.history = {};
    }
    async onEpochEnd(epoch, logs) {
        if (logs == null) {
            logs = {};
        }
        this.epoch.push(epoch);
        for(const key in logs){
            if (this.history[key] == null) {
                this.history[key] = [];
            }
            this.history[key].push(logs[key]);
        }
    }
    /**
     * Await the values of all losses and metrics.
     */ async syncData() {
        const promises = [];
        const keys = [];
        const indices = [];
        for(const key in this.history){
            const valueArray = this.history[key];
            for(let i = 0; i < valueArray.length; ++i){
                if (typeof valueArray[i] !== 'number') {
                    const valueScalar = valueArray[i];
                    promises.push(valueScalar.data());
                    keys.push(key);
                    indices.push(i);
                }
            }
        }
        const values = await Promise.all(promises);
        for(let n = 0; n < values.length; ++n){
            const tensorToDispose = this.history[keys[n]][indices[n]];
            tensorToDispose.dispose();
            this.history[keys[n]][indices[n]] = values[n][0];
        }
    }
}
class CustomCallback extends BaseCallback {
    constructor(args, yieldEvery){
        super();
        this.currentEpoch = 0;
        this.nowFunc = args.nowFunc;
        this.nextFrameFunc = args.nextFrameFunc || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$browser_util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextFrame"];
        this.yieldEvery = yieldEvery || 'auto';
        if (this.yieldEvery === 'auto') {
            this.yieldEvery = DEFAULT_YIELD_EVERY_MS;
        }
        if (this.yieldEvery === 'never' && args.onYield != null) {
            throw new Error('yieldEvery is `never` but you provided an `onYield` callback. ' + 'Either change `yieldEvery` or remove the callback');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isNumber(this.yieldEvery)) {
            // Decorate `maybeWait` so it will be called at most once every
            // `yieldEvery` ms.
            this.maybeWait = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"](this.maybeWait.bind(this), this.yieldEvery, this.nowFunc);
        }
        this.trainBegin = args.onTrainBegin;
        this.trainEnd = args.onTrainEnd;
        this.epochBegin = args.onEpochBegin;
        this.epochEnd = args.onEpochEnd;
        this.batchBegin = args.onBatchBegin;
        this.batchEnd = args.onBatchEnd;
        this.yield = args.onYield;
    }
    async maybeWait(epoch, batch, logs) {
        const ps = [];
        if (this.yield != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            ps.push(this.yield(epoch, batch, logs));
        }
        ps.push(this.nextFrameFunc());
        await Promise.all(ps);
    }
    async onEpochBegin(epoch, logs) {
        this.currentEpoch = epoch;
        if (this.epochBegin != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            await this.epochBegin(epoch, logs);
        }
    }
    async onEpochEnd(epoch, logs) {
        const ps = [];
        if (this.epochEnd != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            ps.push(this.epochEnd(epoch, logs));
        }
        if (this.yieldEvery === 'epoch') {
            ps.push(this.nextFrameFunc());
        }
        await Promise.all(ps);
    }
    async onBatchBegin(batch, logs) {
        if (this.batchBegin != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            await this.batchBegin(batch, logs);
        }
    }
    async onBatchEnd(batch, logs) {
        const ps = [];
        if (this.batchEnd != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            ps.push(this.batchEnd(batch, logs));
        }
        if (this.yieldEvery === 'batch') {
            ps.push(this.nextFrameFunc());
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].isNumber(this.yieldEvery)) {
            ps.push(this.maybeWait(this.currentEpoch, batch, logs));
        }
        await Promise.all(ps);
    }
    async onTrainBegin(logs) {
        if (this.trainBegin != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            await this.trainBegin(logs);
        }
    }
    async onTrainEnd(logs) {
        if (this.trainEnd != null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
            await this.trainEnd(logs);
        }
    }
}
function standardizeCallbacks(callbacks, yieldEvery) {
    if (callbacks == null) {
        callbacks = {};
    }
    if (callbacks instanceof BaseCallback) {
        return [
            callbacks
        ];
    }
    if (Array.isArray(callbacks) && callbacks[0] instanceof BaseCallback) {
        return callbacks;
    }
    // Convert custom callback configs to custom callback objects.
    const callbackConfigs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](callbacks);
    return callbackConfigs.map((callbackConfig)=>new CustomCallback(callbackConfig, yieldEvery));
}
/**
 * A global registry for callback constructors to be used during
 * LayersModel.fit().
 */ class CallbackConstructorRegistry {
    /**
     * Blocks public access to constructor.
     */ constructor(){}
    /**
     * Register a tf.LayersModel.fit() callback constructor.
     *
     * The registered callback constructor will be used to instantiate
     * callbacks for every tf.LayersModel.fit() call afterwards.
     *
     * @param verbosityLevel Level of verbosity at which the `callbackConstructor`
     *   is to be reigstered.
     * @param callbackConstructor A no-arg constructor for `tf.Callback`.
     * @throws Error, if the same callbackConstructor has been registered before,
     *   either at the same or a different `verbosityLevel`.
     */ static registerCallbackConstructor(verbosityLevel, callbackConstructor) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(verbosityLevel >= 0 && Number.isInteger(verbosityLevel), ()=>`Verbosity level is expected to be an integer >= 0, ` + `but got ${verbosityLevel}`);
        CallbackConstructorRegistry.checkForDuplicate(callbackConstructor);
        if (CallbackConstructorRegistry.constructors[verbosityLevel] == null) {
            CallbackConstructorRegistry.constructors[verbosityLevel] = [];
        }
        CallbackConstructorRegistry.constructors[verbosityLevel].push(callbackConstructor);
    }
    static checkForDuplicate(callbackConstructor) {
        for(const levelName in CallbackConstructorRegistry.constructors){
            const constructors = CallbackConstructorRegistry.constructors[+levelName];
            constructors.forEach((ctor)=>{
                if (ctor === callbackConstructor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Duplicate callback constructor.');
                }
            });
        }
    }
    /**
     * Clear all registered callback constructors.
     */ static clear() {
        CallbackConstructorRegistry.constructors = {};
    }
    /**
     * Create callbacks using the registered callback constructors.
     *
     * Given `verbosityLevel`, all constructors registered at that level or above
     * will be called and the instantiated callbacks will be used.
     *
     * @param verbosityLevel: Level of verbosity.
     */ static createCallbacks(verbosityLevel) {
        const constructors = [];
        for(const levelName in CallbackConstructorRegistry.constructors){
            const level = +levelName;
            if (verbosityLevel >= level) {
                constructors.push(...CallbackConstructorRegistry.constructors[level]);
            }
        }
        return constructors.map((ctor)=>new ctor());
    }
}
CallbackConstructorRegistry.constructors = {};
;
function configureCallbacks(callbacks, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics) {
    const history = new History();
    const actualCallbacks = [
        new BaseLogger(),
        ...CallbackConstructorRegistry.createCallbacks(verbose)
    ];
    if (callbacks != null) {
        actualCallbacks.push(...callbacks);
    }
    actualCallbacks.push(history);
    const callbackList = new CallbackList(actualCallbacks);
    // TODO(cais): Figure out when this LayersModel instance can have a
    // dynamically
    //   set property called 'callback_model' as in PyKeras.
    callbackList.setParams({
        epochs,
        initialEpoch,
        samples: numTrainSamples,
        steps: stepsPerEpoch,
        batchSize,
        verbose,
        doValidation,
        metrics: callbackMetrics
    });
    return {
        callbackList,
        history
    };
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jYWxsYmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvYmFzZV9jYWxsYmFja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCx5Q0FBeUM7QUFFekMsT0FBTyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQWtCLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBTyxvQkFBb0IsRUFBaUIsTUFBTSxRQUFRLENBQUM7QUFDbEUsT0FBTyxLQUFLLGFBQWEsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RCxvREFBb0Q7QUFDcEQsTUFBTSxDQUFOLElBQVkscUJBR1g7QUFIRCxXQUFZLHFCQUFxQjtJQUMvQixxRUFBVSxDQUFBO0lBQ1YsdUVBQVcsQ0FBQTtBQUNiLENBQUMsRUFIVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBR2hDO0FBRUQsbUVBQW1FO0FBQ25FLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztBQVExQzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFNLE9BQWdCLFlBQVk7SUFBbEM7UUFDRSxpREFBaUQ7UUFDakQsbUJBQWMsR0FBb0IsSUFBSSxDQUFDO0lBZ0N6QyxDQUFDO0lBMUJDLFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQWEsRUFBRSxJQUFxQixJQUFHLENBQUM7SUFFM0QsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsSUFBcUIsSUFBRyxDQUFDO0lBRXpELEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBYSxFQUFFLElB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U0FBaUIsRUFBRSxZQUFxQixFQUN4QyxlQUF5QjtJQUMzQixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzlCLE1BQU0sZUFBZSxHQUFtQjtRQUN0QyxJQUFJLFVBQVUsRUFBRSxFQUFFLEdBQUcsMkJBQTJCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztLQUMxRSxDQUFDO0lBQ0YsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztLQUNwQztJQUNELGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFdkQsbUVBQW1FO0lBQ25FLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUNyQixNQUFNO1FBQ04sWUFBWTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsWUFBWTtRQUNaLE9BQU8sRUFBRSxlQUFlO0tBQ3pCLENBQUMsQ0FBQztJQUNILE9BQU8sRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFDLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qIE9yaWdpbmFsIHNvdXJjZToga2VyYXMvY2FsbGJhY2tzLnB5ICovXG5cbmltcG9ydCB7YWRkLCBkaXYsIGtlZXAsIG11bCwgbmV4dEZyYW1lLCBTY2FsYXIsIFRlbnNvciwgdGlkeSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4vZW5naW5lL2NvbnRhaW5lcic7XG5pbXBvcnQge1ZhbHVlRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7TG9ncywgcmVzb2x2ZVNjYWxhcnNJbkxvZ3MsIFVucmVzb2x2ZWRMb2dzfSBmcm9tICcuL2xvZ3MnO1xuaW1wb3J0ICogYXMgZ2VuZXJpY191dGlscyBmcm9tICcuL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuXG4vKiogVmVyYm9zaXR5IGxvZ2dpbmcgbGV2ZWwgd2hlbiBmaXR0aW5nIGEgbW9kZWwuICovXG5leHBvcnQgZW51bSBNb2RlbExvZ2dpbmdWZXJib3NpdHkge1xuICBTSUxFTlQgPSAwLFxuICBWRVJCT1NFID0gMVxufVxuXG4vKiogSG93IG9mdGVuIHRvIHlpZWxkIHRvIHRoZSBtYWluIHRocmVhZCB3aGVuIHRyYWluaW5nIChpbiBtcykuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ZSUVMRF9FVkVSWV9NUyA9IDEyNTtcblxuZXhwb3J0IHR5cGUgUGFyYW1zID0ge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXJ8c3RyaW5nfGJvb2xlYW58bnVtYmVyW118c3RyaW5nW118Ym9vbGVhbltdO1xufTtcblxuZXhwb3J0IHR5cGUgWWllbGRFdmVyeU9wdGlvbnMgPSAnYXV0byd8J2JhdGNoJ3wnZXBvY2gnfCduZXZlcid8bnVtYmVyO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgdXNlZCB0byBidWlsZCBuZXcgY2FsbGJhY2tzLlxuICpcbiAqIFRoZSBgbG9nc2AgZGljdGlvbmFyeSB0aGF0IGNhbGxiYWNrIG1ldGhvZHMgdGFrZSBhcyBhcmd1bWVudCB3aWxsIGNvbnRhaW5cbiAqIGtleXMgZm9yIHF1YW50aXRpZXMgcmVsZXZhbnQgdG8gdGhlIGN1cnJlbnQgYmF0Y2ggb3IgZXBvY2guXG4gKlxuICogQ3VycmVudGx5LCB0aGUgYC5maXQoKWAgbWV0aG9kIG9mIHRoZSBgU2VxdWVudGlhbGAgbW9kZWwgY2xhc3NcbiAqIHdpbGwgaW5jbHVkZSB0aGUgZm9sbG93aW5nIHF1YW50aXRpZXMgaW4gdGhlIGBsb2dzYCB0aGF0XG4gKiBpdCBwYXNzZXMgdG8gaXRzIGNhbGxiYWNrczpcbiAqXG4gKiBvbkVwb2NoRW5kOiBMb2dzIGluY2x1ZGUgYGFjY2AgYW5kIGBsb3NzYCwgYW5kIG9wdGlvbmFsbHkgaW5jbHVkZSBgdmFsTG9zc2BcbiAqICAgKGlmIHZhbGlkYXRpb24gaXMgZW5hYmxlZCBpbiBgZml0YCksIGFuZCBgdmFsQWNjYCAoaWYgdmFsaWRhdGlvbiBhbmRcbiAqICAgYWNjdXJhY3kgbW9uaXRvcmluZyBhcmUgZW5hYmxlZCkuXG4gKiBvbkJhdGNoQmVnaW46IExvZ3MgaW5jbHVkZSBgc2l6ZWAsIHRoZSBudW1iZXIgb2Ygc2FtcGxlcyBpbiB0aGUgY3VycmVudFxuICogICBiYXRjaC5cbiAqIG9uQmF0Y2hFbmQ6IExvZ3MgaW5jbHVkZSBgbG9zc2AsIGFuZCBvcHRpb25hbGx5IGBhY2NgIChpZiBhY2N1cmFjeSBtb25pdG9yaW5nXG4gKiAgIGlzIGVuYWJsZWQpLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNhbGxiYWNrIHtcbiAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBUaGlzIHR5cGUgaXMgYSBiZXN0IGd1ZXNzLlxuICB2YWxpZGF0aW9uRGF0YTogVGVuc29yfFRlbnNvcltdID0gbnVsbDtcbiAgLyoqXG4gICAqIFRyYWluaW5nIHBhcmFtZXRlcnMgKGVnLiB2ZXJib3NpdHksIGJhdGNoIHNpemUsIG51bWJlciBvZiBlcG9jaHMuLi4pLlxuICAgKi9cbiAgcGFyYW1zOiBQYXJhbXM7XG5cbiAgc2V0UGFyYW1zKHBhcmFtczogUGFyYW1zKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBhc3luYyBvbkVwb2NoQmVnaW4oZXBvY2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKSB7fVxuXG4gIGFzeW5jIG9uRXBvY2hFbmQoZXBvY2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKSB7fVxuXG4gIGFzeW5jIG9uQmF0Y2hCZWdpbihiYXRjaDogbnVtYmVyLCBsb2dzPzogVW5yZXNvbHZlZExvZ3MpIHt9XG5cbiAgYXN5bmMgb25CYXRjaEVuZChiYXRjaDogbnVtYmVyLCBsb2dzPzogVW5yZXNvbHZlZExvZ3MpIHt9XG5cbiAgYXN5bmMgb25UcmFpbkJlZ2luKGxvZ3M/OiBVbnJlc29sdmVkTG9ncykge31cblxuICBhc3luYyBvblRyYWluRW5kKGxvZ3M/OiBVbnJlc29sdmVkTG9ncykge31cblxuICAvLyBMYXllcnNNb2RlbCBuZWVkcyB0byBjYWxsIENhbGxiYWNrLnNldE1vZGVsKCksIGJ1dCBjYW5ub3QgYWN0dWFsbHkgZGVwZW5kXG4gIC8vIG9uIENhbGxiYWNrIGJlY2F1c2UgdGhhdCBjcmVhdGVzIGEgY3ljbGljIGRlcGVuZGVuY3kuICBQcm92aWRpbmcgdGhpcyBuby1vcFxuICAvLyBtZXRob2Qgb24gQmFzZUNhbGxiYWNrIGJyZWFrcyB0aGUgY3ljbGU6IHRoaXMgd2F5IExheWVyc01vZGVsIGNhbiBkZXBlbmQgb25cbiAgLy8gQmFzZUNhbGxiYWNrIGJ1dCBub3Qgb24gQ2FsbGJhY2suICBUaGUgYXJndW1lbnQgaXMgdHlwZWQgYXMgYENvbnRhaW5lcmBcbiAgLy8gKHRoZSBzdXBlcmNsYXNzIG9mIExheWVyc01vZGVsKSB0byBhdm9pZCByZWNhcGl0dWxhdGluZyB0aGUgY3ljbGUuIENhbGxiYWNrXG4gIC8vIG92ZXJyaWRlcyB0aGlzIG1ldGhvZCBhbmQgZW5mb3JjZXMgdGhhdCB0aGUgYXJndW1lbnQgaXMgcmVhbGx5IGFcbiAgLy8gTGF5ZXJzTW9kZWwuXG4gIHNldE1vZGVsKG1vZGVsOiBDb250YWluZXIpOiB2b2lkIHtcbiAgICAvLyBEbyBub3RoaW5nLiBVc2UgQ2FsbGJhY2sgaW5zdGVhZCBvZiBCYXNlQ2FsbGJhY2sgdG8gdHJhY2sgdGhlIG1vZGVsLlxuICB9XG59XG5cbi8qKlxuICogQ29udGFpbmVyIGFic3RyYWN0aW5nIGEgbGlzdCBvZiBjYWxsYmFja3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxsYmFja0xpc3Qge1xuICBjYWxsYmFja3M6IEJhc2VDYWxsYmFja1tdO1xuICBxdWV1ZUxlbmd0aDogbnVtYmVyO1xuXG4gIC8vIFRPRE8oY2Fpcyk6IFdoZW4gdGhlIG5lZWQgYXJpc2VzLCB1bmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lcyBhbmRcbiAgLy8gaW1wbGVtZW50IHRoZSBxdWV1ZSBmb3IgdGltZSB2YWx1ZXMuXG4gIC8vIHByaXZhdGUgZGVsdGFUQmF0Y2g6IG51bWJlcjtcbiAgLy8gcHJpdmF0ZSBkZWx0YVRzQmF0Y2hCZWdpbjogQXJyYXk8bnVtYmVyPjtcbiAgLy8gcHJpdmF0ZSBkZWx0YVRzQmF0Y2hFbmQ6IEFycmF5PG51bWJlcj47XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIG9mIENhbGxiYWNrTGlzdC5cbiAgICogQHBhcmFtIGNhbGxiYWNrcyBBcnJheSBvZiBgQ2FsbGJhY2tgIGluc3RhbmNlcy5cbiAgICogQHBhcmFtIHF1ZXVlTGVuZ3RoIFF1ZXVlIGxlbmd0aCBmb3Iga2VlcGluZyBydW5uaW5nIHN0YXRpc3RpY3Mgb3ZlclxuICAgKiAgIGNhbGxiYWNrIGV4ZWN1dGlvbiB0aW1lLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FsbGJhY2tzPzogQmFzZUNhbGxiYWNrW10sIHF1ZXVlTGVuZ3RoID0gMTApIHtcbiAgICAvLyBUT0RPKGNhaXMpOiBNYWtlIHVzZSBvZiBxdWV1ZUxlbmd0aCB3aGVuIGltcGxlbWVudGluZyB0aGUgcXVldWUgZm9yIHRpbWVcbiAgICAvLyB2YWx1ZXMuXG4gICAgaWYgKGNhbGxiYWNrcyA9PSBudWxsKSB7XG4gICAgICBjYWxsYmFja3MgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgdGhpcy5xdWV1ZUxlbmd0aCA9IHF1ZXVlTGVuZ3RoO1xuICB9XG5cbiAgYXBwZW5kKGNhbGxiYWNrOiBCYXNlQ2FsbGJhY2spOiB2b2lkIHtcbiAgICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXM6IFBhcmFtcyk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgIGNhbGxiYWNrLnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1vZGVsKG1vZGVsOiBDb250YWluZXIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuY2FsbGJhY2tzKSB7XG4gICAgICBjYWxsYmFjay5zZXRNb2RlbChtb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhdCB0aGUgc3RhcnQgb2YgYW4gZXBvY2guXG4gICAqIEBwYXJhbSBlcG9jaCBJbmRleCBvZiBlcG9jaC5cbiAgICogQHBhcmFtIGxvZ3MgRGljdGlvbmFyeSBvZiBsb2dzLlxuICAgKi9cbiAgYXN5bmMgb25FcG9jaEJlZ2luKGVwb2NoOiBudW1iZXIsIGxvZ3M/OiBVbnJlc29sdmVkTG9ncykge1xuICAgIGlmIChsb2dzID09IG51bGwpIHtcbiAgICAgIGxvZ3MgPSB7fTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLmNhbGxiYWNrcykge1xuICAgICAgYXdhaXQgY2FsbGJhY2sub25FcG9jaEJlZ2luKGVwb2NoLCBsb2dzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgYW4gZXBvY2guXG4gICAqIEBwYXJhbSBlcG9jaCBJbmRleCBvZiBlcG9jaC5cbiAgICogQHBhcmFtIGxvZ3MgRGljdGlvbmFyeSBvZiBsb2dzLlxuICAgKi9cbiAgYXN5bmMgb25FcG9jaEVuZChlcG9jaDogbnVtYmVyLCBsb2dzPzogVW5yZXNvbHZlZExvZ3MpIHtcbiAgICBpZiAobG9ncyA9PSBudWxsKSB7XG4gICAgICBsb2dzID0ge307XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrLm9uRXBvY2hFbmQoZXBvY2gsIGxvZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgIHJpZ2h0IGJlZm9yZSBwcm9jZXNzaW5nIGEgYmF0Y2guXG4gICAqIEBwYXJhbSBiYXRjaCBJbmRleCBvZiBiYXRjaCB3aXRoaW4gdGhlIGN1cnJlbnQgZXBvY2guXG4gICAqIEBwYXJhbSBsb2dzIERpY3Rpb25hcnkgb2YgbG9ncy5cbiAgICovXG4gIGFzeW5jIG9uQmF0Y2hCZWdpbihiYXRjaDogbnVtYmVyLCBsb2dzPzogVW5yZXNvbHZlZExvZ3MpIHtcbiAgICBpZiAobG9ncyA9PSBudWxsKSB7XG4gICAgICBsb2dzID0ge307XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrLm9uQmF0Y2hCZWdpbihiYXRjaCwgbG9ncyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhdCB0aGUgZW5kIG9mIGEgYmF0Y2guXG4gICAqIEBwYXJhbSBiYXRjaCBJbmRleCBvZiBiYXRjaCB3aXRoaW4gdGhlIGN1cnJlbnQgZXBvY2guXG4gICAqIEBwYXJhbSBsb2dzIERpY3Rpb25hcnkgb2YgbG9ncy5cbiAgICovXG4gIGFzeW5jIG9uQmF0Y2hFbmQoYmF0Y2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKSB7XG4gICAgaWYgKGxvZ3MgPT0gbnVsbCkge1xuICAgICAgbG9ncyA9IHt9O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuY2FsbGJhY2tzKSB7XG4gICAgICBhd2FpdCBjYWxsYmFjay5vbkJhdGNoRW5kKGJhdGNoLCBsb2dzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdHJhaW5pbmcuXG4gICAqIEBwYXJhbSBsb2dzIERpY3Rpb25hcnkgb2YgbG9ncy5cbiAgICovXG4gIGFzeW5jIG9uVHJhaW5CZWdpbihsb2dzPzogVW5yZXNvbHZlZExvZ3MpIHtcbiAgICBpZiAobG9ncyA9PSBudWxsKSB7XG4gICAgICBsb2dzID0ge307XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrLm9uVHJhaW5CZWdpbihsb2dzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGF0IHRoZSBlbmQgb2YgdHJhaW5pbmcuXG4gICAqIEBwYXJhbSBsb2dzIERpY3Rpb25hcnkgb2YgbG9ncy5cbiAgICovXG4gIGFzeW5jIG9uVHJhaW5FbmQobG9ncz86IFVucmVzb2x2ZWRMb2dzKSB7XG4gICAgaWYgKGxvZ3MgPT0gbnVsbCkge1xuICAgICAgbG9ncyA9IHt9O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuY2FsbGJhY2tzKSB7XG4gICAgICBhd2FpdCBjYWxsYmFjay5vblRyYWluRW5kKGxvZ3MpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENhbGxiYWNrIHRoYXQgYWNjdW11bGF0ZXMgZXBvY2ggYXZlcmFnZXMgb2YgbWV0cmljcy5cbiAqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGF1dG9tYXRpY2FsbHkgYXBwbGllZCB0byBldmVyeSBMYXllcnNNb2RlbC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VMb2dnZXIgZXh0ZW5kcyBCYXNlQ2FsbGJhY2sge1xuICBwcml2YXRlIHNlZW46IG51bWJlcjtcbiAgcHJpdmF0ZSB0b3RhbHM6IFVucmVzb2x2ZWRMb2dzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvdmVycmlkZSBhc3luYyBvbkVwb2NoQmVnaW4oZXBvY2g6IG51bWJlcikge1xuICAgIHRoaXMuc2VlbiA9IDA7XG4gICAgdGhpcy50b3RhbHMgPSB7fTtcbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uQmF0Y2hFbmQoYmF0Y2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKSB7XG4gICAgaWYgKGxvZ3MgPT0gbnVsbCkge1xuICAgICAgbG9ncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBiYXRjaFNpemUgPSBsb2dzWydzaXplJ10gPT0gbnVsbCA/IDAgOiBsb2dzWydzaXplJ10gYXMgbnVtYmVyO1xuICAgIHRoaXMuc2VlbiArPSBiYXRjaFNpemU7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbG9ncykge1xuICAgICAgY29uc3QgdmFsdWUgPSBsb2dzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoIXRoaXMudG90YWxzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsc1trZXldID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdGFsc1trZXldID0gdGhpcy50b3RhbHNba2V5XSBhcyBudW1iZXIgKyB2YWx1ZSAqIGJhdGNoU2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBvbGRUb3RhbHNUb0Rpc3Bvc2U6IFNjYWxhcjtcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLnRvdGFscykge1xuICAgICAgICAgIG9sZFRvdGFsc1RvRGlzcG9zZSA9IHRoaXMudG90YWxzW2tleV0gYXMgU2NhbGFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG90YWxzW2tleV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvdGFsOiBTY2FsYXIgPVxuICAgICAgICAgICAgdGlkeSgoKSA9PiBhZGQoKHRoaXMudG90YWxzW2tleV0pLCBtdWwodmFsdWUsIGJhdGNoU2l6ZSkpKTtcbiAgICAgICAgdGhpcy50b3RhbHNba2V5XSA9IHRvdGFsO1xuICAgICAgICBpZiAob2xkVG90YWxzVG9EaXNwb3NlICE9IG51bGwpIHtcbiAgICAgICAgICBvbGRUb3RhbHNUb0Rpc3Bvc2UuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgYXN5bmMgb25FcG9jaEVuZChlcG9jaDogbnVtYmVyLCBsb2dzPzogVW5yZXNvbHZlZExvZ3MpIHtcbiAgICBpZiAobG9ncyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnBhcmFtc1snbWV0cmljcyddIGFzIHN0cmluZ1tdKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudG90YWxzW2tleV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgbG9nc1trZXldID0gdGhpcy50b3RhbHNba2V5XSBhcyBudW1iZXIgLyB0aGlzLnNlZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGlkeSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2c6IFNjYWxhciA9IG11bChkaXYoMSwgdGhpcy5zZWVuKSwgdGhpcy50b3RhbHNba2V5XSk7XG4gICAgICAgICAgICBsb2dzW2tleV0gPSBsb2c7XG4gICAgICAgICAgICAodGhpcy50b3RhbHNba2V5XSBhcyBUZW5zb3IpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGtlZXAobG9nc1trZXldIGFzIFNjYWxhcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayB0aGF0IHJlY29yZHMgZXZlbnRzIGludG8gYSBgSGlzdG9yeWAgb2JqZWN0LiBUaGlzIGNhbGxiYWNrIGlzXG4gKiBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gZXZlcnkgVEYuanMgTGF5ZXJzIG1vZGVsLiBUaGUgYEhpc3RvcnlgIG9iamVjdFxuICogZ2V0cyByZXR1cm5lZCBieSB0aGUgYGZpdGAgbWV0aG9kIG9mIG1vZGVscy5cbiAqL1xuZXhwb3J0IGNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBCYXNlQ2FsbGJhY2sge1xuICBlcG9jaDogbnVtYmVyW107XG4gIGhpc3Rvcnk6IHtba2V5OiBzdHJpbmddOiBBcnJheTxudW1iZXJ8VGVuc29yPn07XG5cbiAgb3ZlcnJpZGUgYXN5bmMgb25UcmFpbkJlZ2luKGxvZ3M/OiBVbnJlc29sdmVkTG9ncykge1xuICAgIHRoaXMuZXBvY2ggPSBbXTtcbiAgICB0aGlzLmhpc3RvcnkgPSB7fTtcbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uRXBvY2hFbmQoZXBvY2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKSB7XG4gICAgaWYgKGxvZ3MgPT0gbnVsbCkge1xuICAgICAgbG9ncyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmVwb2NoLnB1c2goZXBvY2gpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGxvZ3MpIHtcbiAgICAgIGlmICh0aGlzLmhpc3Rvcnlba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeVtrZXldID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmhpc3Rvcnlba2V5XS5wdXNoKGxvZ3Nba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF3YWl0IHRoZSB2YWx1ZXMgb2YgYWxsIGxvc3NlcyBhbmQgbWV0cmljcy5cbiAgICovXG4gIGFzeW5jIHN5bmNEYXRhKCkge1xuICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPEZsb2F0MzJBcnJheXxJbnQzMkFycmF5fFVpbnQ4QXJyYXk+PiA9IFtdO1xuICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgaW5kaWNlczogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmhpc3RvcnkpIHtcbiAgICAgIGNvbnN0IHZhbHVlQXJyYXkgPSB0aGlzLmhpc3Rvcnlba2V5XTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVBcnJheS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlQXJyYXlbaV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVTY2FsYXIgPSB2YWx1ZUFycmF5W2ldIGFzIFRlbnNvcjtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHZhbHVlU2NhbGFyLmRhdGEoKSk7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgaW5kaWNlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IHZhbHVlcy5sZW5ndGg7ICsrbikge1xuICAgICAgY29uc3QgdGVuc29yVG9EaXNwb3NlID0gdGhpcy5oaXN0b3J5W2tleXNbbl1dW2luZGljZXNbbl1dIGFzIFRlbnNvcjtcbiAgICAgIHRlbnNvclRvRGlzcG9zZS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLmhpc3Rvcnlba2V5c1tuXV1baW5kaWNlc1tuXV0gPSB2YWx1ZXNbbl1bMF07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQ2FsbGJhY2tBcmdzIHtcbiAgb25UcmFpbkJlZ2luPzogKGxvZ3M/OiBMb2dzKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcbiAgb25UcmFpbkVuZD86IChsb2dzPzogTG9ncykgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XG4gIG9uRXBvY2hCZWdpbj86IChlcG9jaDogbnVtYmVyLCBsb2dzPzogTG9ncykgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XG4gIG9uRXBvY2hFbmQ/OiAoZXBvY2g6IG51bWJlciwgbG9ncz86IExvZ3MpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xuICBvbkJhdGNoQmVnaW4/OiAoYmF0Y2g6IG51bWJlciwgbG9ncz86IExvZ3MpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xuICBvbkJhdGNoRW5kPzogKGJhdGNoOiBudW1iZXIsIGxvZ3M/OiBMb2dzKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcbiAgb25ZaWVsZD86IChlcG9jaDogbnVtYmVyLCBiYXRjaDogbnVtYmVyLCBsb2dzOiBMb2dzKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcbiAgLy8gVXNlZCBmb3IgdGVzdCBESSBtb2NraW5nLlxuICBub3dGdW5jPzogRnVuY3Rpb247XG4gIG5leHRGcmFtZUZ1bmM/OiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBDdXN0b20gY2FsbGJhY2sgZm9yIHRyYWluaW5nLlxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2FsbGJhY2sgZXh0ZW5kcyBCYXNlQ2FsbGJhY2sge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJhaW5CZWdpbjogKGxvZ3M/OiBMb2dzKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyYWluRW5kOiAobG9ncz86IExvZ3MpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXBvY2hCZWdpbjpcbiAgICAgIChlcG9jaDogbnVtYmVyLCBsb2dzPzogTG9ncykgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XG4gIHByb3RlY3RlZCByZWFkb25seSBlcG9jaEVuZDpcbiAgICAgIChlcG9jaDogbnVtYmVyLCBsb2dzPzogTG9ncykgPT4gdm9pZCB8IFByb21pc2U8dm9pZD47XG4gIHByb3RlY3RlZCByZWFkb25seSBiYXRjaEJlZ2luOlxuICAgICAgKGJhdGNoOiBudW1iZXIsIGxvZ3M/OiBMb2dzKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGJhdGNoRW5kOlxuICAgICAgKGJhdGNoOiBudW1iZXIsIGxvZ3M/OiBMb2dzKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHlpZWxkOlxuICAgICAgKGVwb2NoOiBudW1iZXIsIGJhdGNoOiBudW1iZXIsIGxvZ3M6IExvZ3MpID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+O1xuXG4gIHByaXZhdGUgeWllbGRFdmVyeTogWWllbGRFdmVyeU9wdGlvbnM7XG4gIHByaXZhdGUgY3VycmVudEVwb2NoID0gMDtcbiAgcHVibGljIG5vd0Z1bmM6IEZ1bmN0aW9uO1xuICBwdWJsaWMgbmV4dEZyYW1lRnVuYzogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoYXJnczogQ3VzdG9tQ2FsbGJhY2tBcmdzLCB5aWVsZEV2ZXJ5PzogWWllbGRFdmVyeU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubm93RnVuYyA9IGFyZ3Mubm93RnVuYztcbiAgICB0aGlzLm5leHRGcmFtZUZ1bmMgPSBhcmdzLm5leHRGcmFtZUZ1bmMgfHwgbmV4dEZyYW1lO1xuICAgIHRoaXMueWllbGRFdmVyeSA9IHlpZWxkRXZlcnkgfHwgJ2F1dG8nO1xuICAgIGlmICh0aGlzLnlpZWxkRXZlcnkgPT09ICdhdXRvJykge1xuICAgICAgdGhpcy55aWVsZEV2ZXJ5ID0gREVGQVVMVF9ZSUVMRF9FVkVSWV9NUztcbiAgICB9XG4gICAgaWYgKHRoaXMueWllbGRFdmVyeSA9PT0gJ25ldmVyJyAmJiBhcmdzLm9uWWllbGQgIT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICd5aWVsZEV2ZXJ5IGlzIGBuZXZlcmAgYnV0IHlvdSBwcm92aWRlZCBhbiBgb25ZaWVsZGAgY2FsbGJhY2suICcgK1xuICAgICAgICAgICdFaXRoZXIgY2hhbmdlIGB5aWVsZEV2ZXJ5YCBvciByZW1vdmUgdGhlIGNhbGxiYWNrJyk7XG4gICAgfVxuICAgIGlmICh1dGlsLmlzTnVtYmVyKHRoaXMueWllbGRFdmVyeSkpIHtcbiAgICAgIC8vIERlY29yYXRlIGBtYXliZVdhaXRgIHNvIGl0IHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBldmVyeVxuICAgICAgLy8gYHlpZWxkRXZlcnlgIG1zLlxuICAgICAgdGhpcy5tYXliZVdhaXQgPSBnZW5lcmljX3V0aWxzLmRlYm91bmNlKFxuICAgICAgICAgIHRoaXMubWF5YmVXYWl0LmJpbmQodGhpcyksIHRoaXMueWllbGRFdmVyeSBhcyBudW1iZXIsIHRoaXMubm93RnVuYyk7XG4gICAgfVxuICAgIHRoaXMudHJhaW5CZWdpbiA9IGFyZ3Mub25UcmFpbkJlZ2luO1xuICAgIHRoaXMudHJhaW5FbmQgPSBhcmdzLm9uVHJhaW5FbmQ7XG4gICAgdGhpcy5lcG9jaEJlZ2luID0gYXJncy5vbkVwb2NoQmVnaW47XG4gICAgdGhpcy5lcG9jaEVuZCA9IGFyZ3Mub25FcG9jaEVuZDtcbiAgICB0aGlzLmJhdGNoQmVnaW4gPSBhcmdzLm9uQmF0Y2hCZWdpbjtcbiAgICB0aGlzLmJhdGNoRW5kID0gYXJncy5vbkJhdGNoRW5kO1xuICAgIHRoaXMueWllbGQgPSBhcmdzLm9uWWllbGQ7XG4gIH1cblxuICBhc3luYyBtYXliZVdhaXQoZXBvY2g6IG51bWJlciwgYmF0Y2g6IG51bWJlciwgbG9nczogVW5yZXNvbHZlZExvZ3MpIHtcbiAgICBjb25zdCBwczogQXJyYXk8dm9pZHxQcm9taXNlPHZvaWQ+PiA9IFtdO1xuICAgIGlmICh0aGlzLnlpZWxkICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IHJlc29sdmVTY2FsYXJzSW5Mb2dzKGxvZ3MpO1xuICAgICAgcHMucHVzaCh0aGlzLnlpZWxkKGVwb2NoLCBiYXRjaCwgbG9ncyBhcyBMb2dzKSk7XG4gICAgfVxuICAgIHBzLnB1c2godGhpcy5uZXh0RnJhbWVGdW5jKCkpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHBzKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uRXBvY2hCZWdpbihlcG9jaDogbnVtYmVyLCBsb2dzPzogVW5yZXNvbHZlZExvZ3MpOlxuICAgICAgUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jdXJyZW50RXBvY2ggPSBlcG9jaDtcbiAgICBpZiAodGhpcy5lcG9jaEJlZ2luICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IHJlc29sdmVTY2FsYXJzSW5Mb2dzKGxvZ3MpO1xuICAgICAgYXdhaXQgdGhpcy5lcG9jaEJlZ2luKGVwb2NoLCBsb2dzIGFzIExvZ3MpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uRXBvY2hFbmQoZXBvY2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKTpcbiAgICAgIFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBzOiBBcnJheTx2b2lkfFByb21pc2U8dm9pZD4+ID0gW107XG4gICAgaWYgKHRoaXMuZXBvY2hFbmQgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgcmVzb2x2ZVNjYWxhcnNJbkxvZ3MobG9ncyk7XG4gICAgICBwcy5wdXNoKHRoaXMuZXBvY2hFbmQoZXBvY2gsIGxvZ3MgYXMgTG9ncykpO1xuICAgIH1cbiAgICBpZiAodGhpcy55aWVsZEV2ZXJ5ID09PSAnZXBvY2gnKSB7XG4gICAgICBwcy5wdXNoKHRoaXMubmV4dEZyYW1lRnVuYygpKTtcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHMpO1xuICB9XG5cbiAgb3ZlcnJpZGUgYXN5bmMgb25CYXRjaEJlZ2luKGJhdGNoOiBudW1iZXIsIGxvZ3M/OiBVbnJlc29sdmVkTG9ncyk6XG4gICAgICBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5iYXRjaEJlZ2luICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IHJlc29sdmVTY2FsYXJzSW5Mb2dzKGxvZ3MpO1xuICAgICAgYXdhaXQgdGhpcy5iYXRjaEJlZ2luKGJhdGNoLCBsb2dzIGFzIExvZ3MpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uQmF0Y2hFbmQoYmF0Y2g6IG51bWJlciwgbG9ncz86IFVucmVzb2x2ZWRMb2dzKTpcbiAgICAgIFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBzOiBBcnJheTx2b2lkfFByb21pc2U8dm9pZD4+ID0gW107XG4gICAgaWYgKHRoaXMuYmF0Y2hFbmQgIT0gbnVsbCkge1xuICAgICAgYXdhaXQgcmVzb2x2ZVNjYWxhcnNJbkxvZ3MobG9ncyk7XG4gICAgICBwcy5wdXNoKHRoaXMuYmF0Y2hFbmQoYmF0Y2gsIGxvZ3MgYXMgTG9ncykpO1xuICAgIH1cbiAgICBpZiAodGhpcy55aWVsZEV2ZXJ5ID09PSAnYmF0Y2gnKSB7XG4gICAgICBwcy5wdXNoKHRoaXMubmV4dEZyYW1lRnVuYygpKTtcbiAgICB9IGVsc2UgaWYgKHV0aWwuaXNOdW1iZXIodGhpcy55aWVsZEV2ZXJ5KSkge1xuICAgICAgcHMucHVzaCh0aGlzLm1heWJlV2FpdCh0aGlzLmN1cnJlbnRFcG9jaCwgYmF0Y2gsIGxvZ3MpKTtcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHMpO1xuICB9XG5cbiAgb3ZlcnJpZGUgYXN5bmMgb25UcmFpbkJlZ2luKGxvZ3M/OiBVbnJlc29sdmVkTG9ncyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnRyYWluQmVnaW4gIT0gbnVsbCkge1xuICAgICAgYXdhaXQgcmVzb2x2ZVNjYWxhcnNJbkxvZ3MobG9ncyk7XG4gICAgICBhd2FpdCB0aGlzLnRyYWluQmVnaW4obG9ncyBhcyBMb2dzKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBhc3luYyBvblRyYWluRW5kKGxvZ3M/OiBVbnJlc29sdmVkTG9ncyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnRyYWluRW5kICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IHJlc29sdmVTY2FsYXJzSW5Mb2dzKGxvZ3MpO1xuICAgICAgYXdhaXQgdGhpcy50cmFpbkVuZChsb2dzIGFzIExvZ3MpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFN0YW5kYXJkaXplIGNhbGxiYWNrcyBvciBjb25maWd1cmF0aW9ucyBvZiB0aGVtIHRvIGFuIEFycmF5IG9mIGNhbGxiYWNrcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YW5kYXJkaXplQ2FsbGJhY2tzKFxuICAgIGNhbGxiYWNrczogQmFzZUNhbGxiYWNrfEJhc2VDYWxsYmFja1tdfEN1c3RvbUNhbGxiYWNrQXJnc3xcbiAgICBDdXN0b21DYWxsYmFja0FyZ3NbXSxcbiAgICB5aWVsZEV2ZXJ5OiBZaWVsZEV2ZXJ5T3B0aW9ucyk6IEJhc2VDYWxsYmFja1tdIHtcbiAgaWYgKGNhbGxiYWNrcyA9PSBudWxsKSB7XG4gICAgY2FsbGJhY2tzID0ge30gYXMgQmFzZUNhbGxiYWNrO1xuICB9XG4gIGlmIChjYWxsYmFja3MgaW5zdGFuY2VvZiBCYXNlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gW2NhbGxiYWNrc107XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2FsbGJhY2tzKSAmJiBjYWxsYmFja3NbMF0gaW5zdGFuY2VvZiBCYXNlQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gY2FsbGJhY2tzIGFzIEJhc2VDYWxsYmFja1tdO1xuICB9XG4gIC8vIENvbnZlcnQgY3VzdG9tIGNhbGxiYWNrIGNvbmZpZ3MgdG8gY3VzdG9tIGNhbGxiYWNrIG9iamVjdHMuXG4gIGNvbnN0IGNhbGxiYWNrQ29uZmlncyA9XG4gICAgICBnZW5lcmljX3V0aWxzLnRvTGlzdDxCYXNlQ2FsbGJhY2sgfCBDdXN0b21DYWxsYmFja0FyZ3M+KFxuICAgICAgICBjYWxsYmFja3MpIGFzIEN1c3RvbUNhbGxiYWNrQXJnc1tdO1xuICByZXR1cm4gY2FsbGJhY2tDb25maWdzLm1hcChcbiAgICAgIGNhbGxiYWNrQ29uZmlnID0+IG5ldyBDdXN0b21DYWxsYmFjayhjYWxsYmFja0NvbmZpZywgeWllbGRFdmVyeSkpO1xufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIEJhc2VDYWxsYmFja0NvbnN0cnVjdG9yID0ge1xuICBuZXcgKCk6IEJhc2VDYWxsYmFja1xufTtcblxuLyoqXG4gKiBBIGdsb2JhbCByZWdpc3RyeSBmb3IgY2FsbGJhY2sgY29uc3RydWN0b3JzIHRvIGJlIHVzZWQgZHVyaW5nXG4gKiBMYXllcnNNb2RlbC5maXQoKS5cbiAqL1xuZXhwb3J0IGNsYXNzIENhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeSB7XG4gIHByaXZhdGUgc3RhdGljIGNvbnN0cnVjdG9yczpcbiAgICAgIHtbdmVyYm9zaXR5TGV2ZWw6IG51bWJlcl06IEJhc2VDYWxsYmFja0NvbnN0cnVjdG9yW119ID0ge307XG5cbiAgLyoqXG4gICAqIEJsb2NrcyBwdWJsaWMgYWNjZXNzIHRvIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgdGYuTGF5ZXJzTW9kZWwuZml0KCkgY2FsbGJhY2sgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIFRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGNvbnN0cnVjdG9yIHdpbGwgYmUgdXNlZCB0byBpbnN0YW50aWF0ZVxuICAgKiBjYWxsYmFja3MgZm9yIGV2ZXJ5IHRmLkxheWVyc01vZGVsLmZpdCgpIGNhbGwgYWZ0ZXJ3YXJkcy5cbiAgICpcbiAgICogQHBhcmFtIHZlcmJvc2l0eUxldmVsIExldmVsIG9mIHZlcmJvc2l0eSBhdCB3aGljaCB0aGUgYGNhbGxiYWNrQ29uc3RydWN0b3JgXG4gICAqICAgaXMgdG8gYmUgcmVpZ3N0ZXJlZC5cbiAgICogQHBhcmFtIGNhbGxiYWNrQ29uc3RydWN0b3IgQSBuby1hcmcgY29uc3RydWN0b3IgZm9yIGB0Zi5DYWxsYmFja2AuXG4gICAqIEB0aHJvd3MgRXJyb3IsIGlmIHRoZSBzYW1lIGNhbGxiYWNrQ29uc3RydWN0b3IgaGFzIGJlZW4gcmVnaXN0ZXJlZCBiZWZvcmUsXG4gICAqICAgZWl0aGVyIGF0IHRoZSBzYW1lIG9yIGEgZGlmZmVyZW50IGB2ZXJib3NpdHlMZXZlbGAuXG4gICAqL1xuICBzdGF0aWMgcmVnaXN0ZXJDYWxsYmFja0NvbnN0cnVjdG9yKFxuICAgICAgdmVyYm9zaXR5TGV2ZWw6IG51bWJlciwgY2FsbGJhY2tDb25zdHJ1Y3RvcjogQmFzZUNhbGxiYWNrQ29uc3RydWN0b3IpIHtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgdmVyYm9zaXR5TGV2ZWwgPj0gMCAmJiBOdW1iZXIuaXNJbnRlZ2VyKHZlcmJvc2l0eUxldmVsKSxcbiAgICAgICAgKCkgPT4gYFZlcmJvc2l0eSBsZXZlbCBpcyBleHBlY3RlZCB0byBiZSBhbiBpbnRlZ2VyID49IDAsIGAgK1xuICAgICAgICAgICAgYGJ1dCBnb3QgJHt2ZXJib3NpdHlMZXZlbH1gKTtcbiAgICBDYWxsYmFja0NvbnN0cnVjdG9yUmVnaXN0cnkuY2hlY2tGb3JEdXBsaWNhdGUoY2FsbGJhY2tDb25zdHJ1Y3Rvcik7XG4gICAgaWYgKENhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeS5jb25zdHJ1Y3RvcnNbdmVyYm9zaXR5TGV2ZWxdID09IG51bGwpIHtcbiAgICAgIENhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeS5jb25zdHJ1Y3RvcnNbdmVyYm9zaXR5TGV2ZWxdID0gW107XG4gICAgfVxuICAgIENhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeS5jb25zdHJ1Y3RvcnNbdmVyYm9zaXR5TGV2ZWxdLnB1c2goXG4gICAgICAgIGNhbGxiYWNrQ29uc3RydWN0b3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tGb3JEdXBsaWNhdGUoY2FsbGJhY2tDb25zdHJ1Y3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2VDYWxsYmFja0NvbnN0cnVjdG9yKSB7XG4gICAgZm9yIChjb25zdCBsZXZlbE5hbWUgaW4gQ2FsbGJhY2tDb25zdHJ1Y3RvclJlZ2lzdHJ5LmNvbnN0cnVjdG9ycykge1xuICAgICAgY29uc3QgY29uc3RydWN0b3JzID0gQ2FsbGJhY2tDb25zdHJ1Y3RvclJlZ2lzdHJ5LmNvbnN0cnVjdG9yc1srbGV2ZWxOYW1lXTtcbiAgICAgIGNvbnN0cnVjdG9ycy5mb3JFYWNoKGN0b3IgPT4ge1xuICAgICAgICBpZiAoY3RvciA9PT0gY2FsbGJhY2tDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKCdEdXBsaWNhdGUgY2FsbGJhY2sgY29uc3RydWN0b3IuJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFjayBjb25zdHJ1Y3RvcnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIGNsZWFyKCkge1xuICAgIENhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeS5jb25zdHJ1Y3RvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2FsbGJhY2tzIHVzaW5nIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrIGNvbnN0cnVjdG9ycy5cbiAgICpcbiAgICogR2l2ZW4gYHZlcmJvc2l0eUxldmVsYCwgYWxsIGNvbnN0cnVjdG9ycyByZWdpc3RlcmVkIGF0IHRoYXQgbGV2ZWwgb3IgYWJvdmVcbiAgICogd2lsbCBiZSBjYWxsZWQgYW5kIHRoZSBpbnN0YW50aWF0ZWQgY2FsbGJhY2tzIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogQHBhcmFtIHZlcmJvc2l0eUxldmVsOiBMZXZlbCBvZiB2ZXJib3NpdHkuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQ2FsbGJhY2tzKHZlcmJvc2l0eUxldmVsOiBudW1iZXIpOiBCYXNlQ2FsbGJhY2tbXSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzOiBCYXNlQ2FsbGJhY2tDb25zdHJ1Y3RvcltdID0gW107XG4gICAgZm9yIChjb25zdCBsZXZlbE5hbWUgaW4gQ2FsbGJhY2tDb25zdHJ1Y3RvclJlZ2lzdHJ5LmNvbnN0cnVjdG9ycykge1xuICAgICAgY29uc3QgbGV2ZWwgPSArbGV2ZWxOYW1lO1xuICAgICAgaWYgKHZlcmJvc2l0eUxldmVsID49IGxldmVsKSB7XG4gICAgICAgIGNvbnN0cnVjdG9ycy5wdXNoKC4uLkNhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeS5jb25zdHJ1Y3RvcnNbbGV2ZWxdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycy5tYXAoY3RvciA9PiBuZXcgY3RvcigpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlQ2FsbGJhY2tzKFxuICAgIGNhbGxiYWNrczogQmFzZUNhbGxiYWNrW10sIHZlcmJvc2U6IE1vZGVsTG9nZ2luZ1ZlcmJvc2l0eSwgZXBvY2hzOiBudW1iZXIsXG4gICAgaW5pdGlhbEVwb2NoOiBudW1iZXIsIG51bVRyYWluU2FtcGxlczogbnVtYmVyLCBzdGVwc1BlckVwb2NoOiBudW1iZXIsXG4gICAgYmF0Y2hTaXplOiBudW1iZXIsIGRvVmFsaWRhdGlvbjogYm9vbGVhbixcbiAgICBjYWxsYmFja01ldHJpY3M6IHN0cmluZ1tdKToge2NhbGxiYWNrTGlzdDogQ2FsbGJhY2tMaXN0LCBoaXN0b3J5OiBIaXN0b3J5fSB7XG4gIGNvbnN0IGhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICBjb25zdCBhY3R1YWxDYWxsYmFja3M6IEJhc2VDYWxsYmFja1tdID0gW1xuICAgIG5ldyBCYXNlTG9nZ2VyKCksIC4uLkNhbGxiYWNrQ29uc3RydWN0b3JSZWdpc3RyeS5jcmVhdGVDYWxsYmFja3ModmVyYm9zZSlcbiAgXTtcbiAgaWYgKGNhbGxiYWNrcyAhPSBudWxsKSB7XG4gICAgYWN0dWFsQ2FsbGJhY2tzLnB1c2goLi4uY2FsbGJhY2tzKTtcbiAgfVxuICBhY3R1YWxDYWxsYmFja3MucHVzaChoaXN0b3J5KTtcbiAgY29uc3QgY2FsbGJhY2tMaXN0ID0gbmV3IENhbGxiYWNrTGlzdChhY3R1YWxDYWxsYmFja3MpO1xuXG4gIC8vIFRPRE8oY2Fpcyk6IEZpZ3VyZSBvdXQgd2hlbiB0aGlzIExheWVyc01vZGVsIGluc3RhbmNlIGNhbiBoYXZlIGFcbiAgLy8gZHluYW1pY2FsbHlcbiAgLy8gICBzZXQgcHJvcGVydHkgY2FsbGVkICdjYWxsYmFja19tb2RlbCcgYXMgaW4gUHlLZXJhcy5cblxuICBjYWxsYmFja0xpc3Quc2V0UGFyYW1zKHtcbiAgICBlcG9jaHMsXG4gICAgaW5pdGlhbEVwb2NoLFxuICAgIHNhbXBsZXM6IG51bVRyYWluU2FtcGxlcyxcbiAgICBzdGVwczogc3RlcHNQZXJFcG9jaCxcbiAgICBiYXRjaFNpemUsXG4gICAgdmVyYm9zZSxcbiAgICBkb1ZhbGlkYXRpb24sXG4gICAgbWV0cmljczogY2FsbGJhY2tNZXRyaWNzLFxuICB9KTtcbiAgcmV0dXJuIHtjYWxsYmFja0xpc3QsIGhpc3Rvcnl9O1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/losses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original Source: losses.py */ __turbopack_context__.s([
    "KLD",
    ()=>KLD,
    "MAE",
    ()=>MAE,
    "MAPE",
    ()=>MAPE,
    "MSE",
    ()=>MSE,
    "MSLE",
    ()=>MSLE,
    "binaryCrossentropy",
    ()=>binaryCrossentropy,
    "categoricalCrossentropy",
    ()=>categoricalCrossentropy,
    "categoricalHinge",
    ()=>categoricalHinge,
    "cosine",
    ()=>cosine,
    "cosineProximity",
    ()=>cosineProximity,
    "get",
    ()=>get,
    "hinge",
    ()=>hinge,
    "kld",
    ()=>kld,
    "kullbackLeiblerDivergence",
    ()=>kullbackLeiblerDivergence,
    "l2Normalize",
    ()=>l2Normalize,
    "logcosh",
    ()=>logcosh,
    "lossesMap",
    ()=>lossesMap,
    "mae",
    ()=>mae,
    "mape",
    ()=>mape,
    "meanAbsoluteError",
    ()=>meanAbsoluteError,
    "meanAbsolutePercentageError",
    ()=>meanAbsolutePercentageError,
    "meanSquaredError",
    ()=>meanSquaredError,
    "meanSquaredLogarithmicError",
    ()=>meanSquaredLogarithmicError,
    "mse",
    ()=>mse,
    "msle",
    ()=>msle,
    "poisson",
    ()=>poisson,
    "sigmoidCrossEntropyWithLogits",
    ()=>sigmoidCrossEntropyWithLogits,
    "sparseCategoricalCrossentropy",
    ()=>sparseCategoricalCrossentropy,
    "squaredHinge",
    ()=>squaredHinge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/fill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sqrt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/maximum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mean.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sub.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/abs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/clip_by_value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/max.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softplus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/softplus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softmax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/softmax.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$neg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/neg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$floor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/floor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$one_hot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/one_hot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/relu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log1p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/log1p.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$exp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/exp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
;
;
;
;
;
function l2Normalize(x, axis) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (x.dtype !== 'float32') {
            x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](x, 'float32');
        }
        const squareSum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["square"](x), axis, true);
        const epsilonTensor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fill"](squareSum.shape, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])());
        const norm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqrt"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximum"](squareSum, epsilonTensor));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](x, norm);
    });
}
function meanSquaredError(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["square"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](yPred, yTrue)), -1));
}
function meanAbsoluteError(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](yPred, yTrue)), -1));
}
function meanAbsolutePercentageError(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const diff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](yTrue, yPred);
        const clippedTrue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"](yTrue), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), Number.MAX_VALUE);
        const absResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](diff, clippedTrue));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](100, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](absResult, -1));
    });
}
function meanSquaredLogarithmicError(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const clippedPred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](yPred, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), Number.MAX_VALUE);
        const firstLog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](1, clippedPred));
        const clippedTrue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](yTrue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), Number.MAX_VALUE);
        const secondLog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](1, clippedTrue));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["square"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](firstLog, secondLog)), -1);
    });
}
function squaredHinge(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const maxResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximum"](0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](yTrue, yPred)));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["square"](maxResult), -1);
    });
}
function hinge(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const maxResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximum"](0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](yTrue, yPred)));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](maxResult, -1);
    });
}
function categoricalHinge(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](yTrue, yPred), -1);
        const neg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["max"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](1, yTrue), yPred), -1);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$maximum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maximum"](0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](neg, pos)));
    });
}
function logcosh(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const log2 = Math.log(2);
        const predictionDiff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](yPred, yTrue);
        const logcoshResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](predictionDiff, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softplus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softplus"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](-2, predictionDiff))), log2);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](logcoshResult, -1);
    });
}
function categoricalCrossentropy(target, output, fromLogits = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        if (fromLogits) {
            output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softmax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softmax"](output);
        } else {
            // scale preds so that the class probabilities of each sample sum to 1.
            const outputSum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](output, output.shape.length - 1, true);
            output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](output, outputSum);
        }
        output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](output, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])());
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$neg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neg"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](target, 'float32'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"](output)), output.shape.length - 1));
    });
}
function sparseCategoricalCrossentropy(target, output, fromLogits = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const flatTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$floor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["floor"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flatten"](target)), 'int32');
        output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](output, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])());
        const outputShape = output.shape;
        const oneHotTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$one_hot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oneHot"](flatTarget, outputShape[outputShape.length - 1]), outputShape);
        return categoricalCrossentropy(oneHotTarget, output, fromLogits);
    });
}
function sigmoidCrossEntropyWithLogits(labels, logits) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(labels.shape, logits.shape)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`logits and labels must have the same shape, but got shapes ` + `${JSON.stringify(labels.shape)} and ${JSON.stringify(logits.shape)}`);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        // The logistic loss formula from above is
        //   x - x * z + log(1 + exp(-x))
        // For x < 0, a more numerically stable formula is
        //   -x * z + log(1 + exp(x))
        // Note that these two expressions can be combined into the following:
        //   max(x, 0) - x * z + log(1 + exp(-abs(x)))
        const reluLogits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relu"](logits);
        const negAbsLogits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$neg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neg"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"](logits));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](reluLogits, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](logits, labels)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log1p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log1p"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$exp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exp"](negAbsLogits)));
    });
}
function binaryCrossentropy(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        let y;
        y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](yPred, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])());
        y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](1, y)));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](sigmoidCrossEntropyWithLogits(yTrue, y), -1);
    });
}
function kullbackLeiblerDivergence(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const clippedTrue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](yTrue, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), 1);
        const clippedPred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clip_by_value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipByValue"](yPred, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), 1);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](yTrue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](clippedTrue, clippedPred))), -1);
    });
}
function poisson(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const logPred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["log"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), yPred));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sub$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sub"](yPred, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](yTrue, logPred)), -1);
    });
}
function cosineProximity(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const trueNormalized = l2Normalize(yTrue, -1);
        const predNormalized = l2Normalize(yPred, -1);
        const trueXPred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](trueNormalized, predNormalized);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$neg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["neg"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](trueXPred, -1));
    });
}
const mse = meanSquaredError;
const MSE = meanSquaredError;
const mae = meanAbsoluteError;
const MAE = meanAbsoluteError;
const mape = meanAbsolutePercentageError;
const MAPE = meanAbsolutePercentageError;
const msle = meanSquaredLogarithmicError;
const MSLE = meanSquaredLogarithmicError;
const kld = kullbackLeiblerDivergence;
const KLD = kullbackLeiblerDivergence;
const cosine = cosineProximity;
const lossesMap = {
    meanSquaredError,
    meanAbsoluteError,
    meanAbsolutePercentageError,
    meanSquaredLogarithmicError,
    squaredHinge,
    hinge,
    categoricalHinge,
    logcosh,
    categoricalCrossentropy,
    sparseCategoricalCrossentropy,
    binaryCrossentropy,
    kullbackLeiblerDivergence,
    poisson,
    cosineProximity
};
function get(identifierOrFn) {
    if (typeof identifierOrFn === 'string') {
        if (identifierOrFn in lossesMap) {
            return lossesMap[identifierOrFn];
        }
        let errMsg = `Unknown loss ${identifierOrFn}`;
        if (identifierOrFn.toLowerCase().includes('softmaxcrossentropy')) {
            errMsg = `Unknown loss ${identifierOrFn}. ` + 'Use "categoricalCrossentropy" as the string name for ' + 'tf.losses.softmaxCrossEntropy';
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](errMsg);
    } else {
        return identifierOrFn;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9zc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2xvc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILGdDQUFnQztBQUNoQyxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBbUIsSUFBSSxFQUFFLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRW5FLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFHcEM7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBUyxFQUFFLElBQWE7SUFDbEQsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN6QixDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUI7UUFDRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM3RCxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUMs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SUFDM0IsWUFBWTtJQUNaLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixPQUFPO0lBQ1AsZUFBZTtDQUNoQixDQUFDO0FBRUYsOEVBQThFO0FBQzlFLGtEQUFrRDtBQUNsRCxNQUFNLFVBQVUsR0FBRyxDQUFDLGNBQXFDO0lBQ3ZELElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxFQUFFO1FBQ3RDLElBQUksY0FBYyxJQUFJLFNBQVMsRUFBRTtZQUMvQixPQUFPLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksTUFBTSxHQUFHLGdCQUFnQixjQUFjLEVBQUUsQ0FBQztRQUM5QyxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUNoRSxNQUFNLEdBQUcsZ0JBQWdCLGNBQWMsSUFBSTtnQkFDdkMsdURBQXVEO2dCQUN2RCwrQkFBK0IsQ0FBQztTQUNyQztRQUNELE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7U0FBTTtRQUNMLE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qIE9yaWdpbmFsIFNvdXJjZTogbG9zc2VzLnB5ICovXG5pbXBvcnQgKiBhcyB0ZmMgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7VGVuc29yLCBUZW5zb3IxRCwgdGlkeSwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtlcHNpbG9ufSBmcm9tICcuL2JhY2tlbmQvY29tbW9uJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge1ZhbHVlRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7TG9zc09yTWV0cmljRm59IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYSB0ZW5zb3Igd3J0IHRoZSBMMiBub3JtIGFsb25nc2lkZSB0aGUgc3BlY2lmaWVkIGF4aXMuXG4gKiBAcGFyYW0geFxuICogQHBhcmFtIGF4aXMgQXhpcyBhbG9uZyB3aGljaCB0byBwZXJmb3JtIG5vcm1hbGl6YXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsMk5vcm1hbGl6ZSh4OiBUZW5zb3IsIGF4aXM/OiBudW1iZXIpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKHguZHR5cGUgIT09ICdmbG9hdDMyJykge1xuICAgICAgeCA9IHRmYy5jYXN0KHgsICdmbG9hdDMyJyk7XG4gICAgfVxuICAgIGNvbnN0IHNxdWFyZVN1bSA9IHRmYy5zdW0oSy5zcXVhcmUoeCksIGF4aXMsIHRydWUpO1xuICAgIGNvbnN0IGVwc2lsb25UZW5zb3IgPSB0ZmMuZmlsbChzcXVhcmVTdW0uc2hhcGUsIGVwc2lsb24oKSk7XG4gICAgY29uc3Qgbm9ybSA9IHRmYy5zcXJ0KHRmYy5tYXhpbXVtKHNxdWFyZVN1bSwgZXBzaWxvblRlbnNvcikpO1xuICAgIHJldHVybiB0ZmMuZGl2KHgsIG5vcm0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lYW5TcXVhcmVkRXJyb3IoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHRmYy5tZWFuKEsuc3F1YXJlKHRmYy5zdWIoeVByZWQsIHlUcnVlKSksIC0xKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuQWJzb2x1dGVFcnJvcih5VHJ1ZTogVGVuc29yLCB5UHJlZDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4gdGZjLm1lYW4odGZjLmFicyh0ZmMuc3ViKHlQcmVkLCB5VHJ1ZSkpLCAtMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbkFic29sdXRlUGVyY2VudGFnZUVycm9yKFxuICAgIHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY29uc3QgZGlmZiA9IHRmYy5zdWIoeVRydWUsIHlQcmVkKTtcbiAgICBjb25zdCBjbGlwcGVkVHJ1ZSA9XG4gICAgICAgIHRmYy5jbGlwQnlWYWx1ZSh0ZmMuYWJzKHlUcnVlKSwgZXBzaWxvbigpLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICBjb25zdCBhYnNSZXN1bHQgPSB0ZmMuYWJzKHRmYy5kaXYoZGlmZiwgY2xpcHBlZFRydWUpKTtcbiAgICByZXR1cm4gdGZjLm11bCgxMDAsIHRmYy5tZWFuKGFic1Jlc3VsdCwgLTEpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuU3F1YXJlZExvZ2FyaXRobWljRXJyb3IoXG4gICAgeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCBjbGlwcGVkUHJlZCA9IHRmYy5jbGlwQnlWYWx1ZSh5UHJlZCwgZXBzaWxvbigpLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICBjb25zdCBmaXJzdExvZyA9IHRmYy5sb2codGZjLmFkZCgxLCBjbGlwcGVkUHJlZCkpO1xuXG4gICAgY29uc3QgY2xpcHBlZFRydWUgPSB0ZmMuY2xpcEJ5VmFsdWUoeVRydWUsIGVwc2lsb24oKSwgTnVtYmVyLk1BWF9WQUxVRSk7XG4gICAgY29uc3Qgc2Vjb25kTG9nID0gdGZjLmxvZyh0ZmMuYWRkKDEsIGNsaXBwZWRUcnVlKSk7XG5cbiAgICByZXR1cm4gdGZjLm1lYW4oSy5zcXVhcmUodGZjLnN1YihmaXJzdExvZywgc2Vjb25kTG9nKSksIC0xKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkSGluZ2UoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCBtYXhSZXN1bHQgPSB0ZmMubWF4aW11bSgwLCB0ZmMuc3ViKDEsIHRmYy5tdWwoeVRydWUsIHlQcmVkKSkpO1xuICAgIHJldHVybiB0ZmMubWVhbihLLnNxdWFyZShtYXhSZXN1bHQpLCAtMSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGluZ2UoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCBtYXhSZXN1bHQgPSB0ZmMubWF4aW11bSgwLCB0ZmMuc3ViKDEsIHRmYy5tdWwoeVRydWUsIHlQcmVkKSkpO1xuICAgIHJldHVybiB0ZmMubWVhbihtYXhSZXN1bHQsIC0xKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yaWNhbEhpbmdlKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY29uc3QgcG9zID0gdGZjLnN1bSh0ZmMubXVsKHlUcnVlLCB5UHJlZCksIC0xKTtcbiAgICBjb25zdCBuZWcgPSB0ZmMubWF4KHRmYy5tdWwodGZjLnN1YigxLCB5VHJ1ZSksIHlQcmVkKSwgLTEpO1xuICAgIHJldHVybiB0ZmMubWF4aW11bSgwLCB0ZmMuYWRkKDEsIHRmYy5zdWIobmVnLCBwb3MpKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIExvZ2FyaXRobSBvZiB0aGUgaHlwZXJib2xpYyBjb3NpbmUgb2YgdGhlIHByZWRpY3Rpb24gZXJyb3IuXG4gKlxuICogYGxvZyhjb3NoKHgpKWAgaXMgYXBwcm94aW1hdGVseSBlcXVhbCB0byBgKHggKiogMikgLyAyYCBmb3Igc21hbGwgYHhgIGFuZFxuICogdG8gYGFicyh4KSAtIGxvZygyKWAgZm9yIGxhcmdlIGB4YC4gVGhpcyBtZWFucyB0aGF0ICdsb2djb3NoJyB3b3JrcyBtb3N0bHlcbiAqIGxpa2UgdGhlIG1lYW4gc3F1YXJlZCBlcnJvciwgYnV0IHdpbGwgbm90IGJlIHNvIHN0cm9uZ2x5IGFmZmVjdGVkIGJ5IHRoZVxuICogb2NjYXNpb25hbCB3aWxkbHkgaW5jb3JyZWN0IHByZWRpY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2djb3NoKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY29uc3QgbG9nMiA9IE1hdGgubG9nKDIpO1xuICAgIGNvbnN0IHByZWRpY3Rpb25EaWZmID0gdGZjLnN1Yih5UHJlZCwgeVRydWUpO1xuICAgIGNvbnN0IGxvZ2Nvc2hSZXN1bHQgPSB0ZmMuc3ViKFxuICAgICAgICB0ZmMuYWRkKHByZWRpY3Rpb25EaWZmLCB0ZmMuc29mdHBsdXModGZjLm11bCgtMiwgcHJlZGljdGlvbkRpZmYpKSksXG4gICAgICAgIGxvZzIpO1xuICAgIHJldHVybiB0ZmMubWVhbihsb2djb3NoUmVzdWx0LCAtMSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2F0ZWdvcmljYWxDcm9zc2VudHJvcHkoXG4gICAgdGFyZ2V0OiBUZW5zb3IsIG91dHB1dDogVGVuc29yLCBmcm9tTG9naXRzID0gZmFsc2UpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgaWYgKGZyb21Mb2dpdHMpIHtcbiAgICAgIG91dHB1dCA9IHRmYy5zb2Z0bWF4KG91dHB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNjYWxlIHByZWRzIHNvIHRoYXQgdGhlIGNsYXNzIHByb2JhYmlsaXRpZXMgb2YgZWFjaCBzYW1wbGUgc3VtIHRvIDEuXG4gICAgICBjb25zdCBvdXRwdXRTdW0gPSB0ZmMuc3VtKG91dHB1dCwgb3V0cHV0LnNoYXBlLmxlbmd0aCAtIDEsIHRydWUpO1xuICAgICAgb3V0cHV0ID0gdGZjLmRpdihvdXRwdXQsIG91dHB1dFN1bSk7XG4gICAgfVxuICAgIG91dHB1dCA9IHRmYy5jbGlwQnlWYWx1ZShvdXRwdXQsIGVwc2lsb24oKSwgMSAtIGVwc2lsb24oKSk7XG4gICAgcmV0dXJuIHRmYy5uZWcodGZjLnN1bShcbiAgICAgICAgdGZjLm11bCh0ZmMuY2FzdCh0YXJnZXQsICdmbG9hdDMyJyksIHRmYy5sb2cob3V0cHV0KSksXG4gICAgICAgIG91dHB1dC5zaGFwZS5sZW5ndGggLSAxKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENhdGVnb3JpY2FsIGNyb3NzZW50cm9weSB3aXRoIGludGVnZXIgdGFyZ2V0cy5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IEFuIGludGVnZXIgdGVuc29yLlxuICogQHBhcmFtIG91dHB1dCBBIHRlbnNvciByZXN1bHRpbmcgZnJvbSBhIHNvZnRtYXggKHVubGVzcyBgZnJvbUxvZ2l0c2AgaXNcbiAqICBgdHJ1ZWAsIGluIHdoaWNoIGNhc2UgYG91dHB1dGAgaXMgZXhwZWN0ZWQgdG8gYmUgdGhlIGxvZ2l0cykuXG4gKiBAcGFyYW0gZnJvbUxvZ2l0cyBCb29sZWFuLCB3aGV0aGVyIGBvdXRwdXRgIGlzIHRoZSByZXN1bHQgb2YgYSBzb2Z0bWF4LCBvciBpc1xuICogICBhIHRlbnNvciBvZiBsb2dpdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGFyc2VDYXRlZ29yaWNhbENyb3NzZW50cm9weShcbiAgICB0YXJnZXQ6IFRlbnNvciwgb3V0cHV0OiBUZW5zb3IsIGZyb21Mb2dpdHMgPSBmYWxzZSk6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCBmbGF0VGFyZ2V0ID1cbiAgICAgICAgdGZjLmNhc3QodGZjLmZsb29yKEsuZmxhdHRlbih0YXJnZXQpKSwgJ2ludDMyJykgYXMgVGVuc29yMUQ7XG4gICAgb3V0cHV0ID0gdGZjLmNsaXBCeVZhbHVlKG91dHB1dCwgZXBzaWxvbigpLCAxIC0gZXBzaWxvbigpKTtcbiAgICBjb25zdCBvdXRwdXRTaGFwZSA9IG91dHB1dC5zaGFwZTtcbiAgICBjb25zdCBvbmVIb3RUYXJnZXQgPSB0ZmMucmVzaGFwZShcbiAgICAgICAgdGZjLm9uZUhvdChmbGF0VGFyZ2V0LCBvdXRwdXRTaGFwZVtvdXRwdXRTaGFwZS5sZW5ndGggLSAxXSksXG4gICAgICAgIG91dHB1dFNoYXBlKTtcbiAgICByZXR1cm4gY2F0ZWdvcmljYWxDcm9zc2VudHJvcHkob25lSG90VGFyZ2V0LCBvdXRwdXQsIGZyb21Mb2dpdHMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBGcm9tIFRlbnNvckZsb3cncyBpbXBsZW1lbnRhdGlvbiBpbiBubl9pbXBsLnB5OlxuICpcbiAqIEZvciBicmV2aXR5LCBsZXQgYHggPSBsb2dpdHNgLCBgeiA9IGxhYmVsc2AuICBUaGUgbG9naXN0aWMgbG9zcyBpc1xuICogICAgICB6ICogLWxvZyhzaWdtb2lkKHgpKSArICgxIC0geikgKiAtbG9nKDEgLSBzaWdtb2lkKHgpKVxuICogICAgPSB6ICogLWxvZygxIC8gKDEgKyBleHAoLXgpKSkgKyAoMSAtIHopICogLWxvZyhleHAoLXgpIC8gKDEgKyBleHAoLXgpKSlcbiAqICAgID0geiAqIGxvZygxICsgZXhwKC14KSkgKyAoMSAtIHopICogKC1sb2coZXhwKC14KSkgKyBsb2coMSArIGV4cCgteCkpKVxuICogICAgPSB6ICogbG9nKDEgKyBleHAoLXgpKSArICgxIC0geikgKiAoeCArIGxvZygxICsgZXhwKC14KSlcbiAqICAgID0gKDEgLSB6KSAqIHggKyBsb2coMSArIGV4cCgteCkpXG4gKiAgICA9IHggLSB4ICogeiArIGxvZygxICsgZXhwKC14KSlcbiAqIEZvciB4IDwgMCwgdG8gYXZvaWQgb3ZlcmZsb3cgaW4gZXhwKC14KSwgd2UgcmVmb3JtdWxhdGUgdGhlIGFib3ZlXG4gKiAgICAgIHggLSB4ICogeiArIGxvZygxICsgZXhwKC14KSlcbiAqICAgID0gbG9nKGV4cCh4KSkgLSB4ICogeiArIGxvZygxICsgZXhwKC14KSlcbiAqICAgID0gLSB4ICogeiArIGxvZygxICsgZXhwKHgpKVxuICogSGVuY2UsIHRvIGVuc3VyZSBzdGFiaWxpdHkgYW5kIGF2b2lkIG92ZXJmbG93LCB0aGUgaW1wbGVtZW50YXRpb24gdXNlcyB0aGlzXG4gKiBlcXVpdmFsZW50IGZvcm11bGF0aW9uXG4gKiAgICBtYXgoeCwgMCkgLSB4ICogeiArIGxvZygxICsgZXhwKC1hYnMoeCkpKVxuICpcbiAqIEBwYXJhbSBsYWJlbHMgVGhlIGxhYmVscy5cbiAqIEBwYXJhbSBsb2dpdHMgVGhlIGxvZ2l0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ21vaWRDcm9zc0VudHJvcHlXaXRoTG9naXRzKFxuICAgIGxhYmVsczogVGVuc29yLCBsb2dpdHM6IFRlbnNvcik6IFRlbnNvciB7XG4gIGlmICghdXRpbC5hcnJheXNFcXVhbChsYWJlbHMuc2hhcGUsIGxvZ2l0cy5zaGFwZSkpIHtcbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgYGxvZ2l0cyBhbmQgbGFiZWxzIG11c3QgaGF2ZSB0aGUgc2FtZSBzaGFwZSwgYnV0IGdvdCBzaGFwZXMgYCArXG4gICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGxhYmVscy5zaGFwZSl9IGFuZCAke0pTT04uc3RyaW5naWZ5KGxvZ2l0cy5zaGFwZSl9YCk7XG4gIH1cbiAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgIC8vIFRoZSBsb2dpc3RpYyBsb3NzIGZvcm11bGEgZnJvbSBhYm92ZSBpc1xuICAgIC8vICAgeCAtIHggKiB6ICsgbG9nKDEgKyBleHAoLXgpKVxuICAgIC8vIEZvciB4IDwgMCwgYSBtb3JlIG51bWVyaWNhbGx5IHN0YWJsZSBmb3JtdWxhIGlzXG4gICAgLy8gICAteCAqIHogKyBsb2coMSArIGV4cCh4KSlcbiAgICAvLyBOb3RlIHRoYXQgdGhlc2UgdHdvIGV4cHJlc3Npb25zIGNhbiBiZSBjb21iaW5lZCBpbnRvIHRoZSBmb2xsb3dpbmc6XG4gICAgLy8gICBtYXgoeCwgMCkgLSB4ICogeiArIGxvZygxICsgZXhwKC1hYnMoeCkpKVxuICAgIGNvbnN0IHJlbHVMb2dpdHMgPSB0ZmMucmVsdShsb2dpdHMpO1xuICAgIGNvbnN0IG5lZ0Fic0xvZ2l0cyA9IHRmYy5uZWcodGZjLmFicyhsb2dpdHMpKTtcbiAgICByZXR1cm4gdGZjLmFkZChcbiAgICAgICAgdGZjLnN1YihyZWx1TG9naXRzLCB0ZmMubXVsKGxvZ2l0cywgbGFiZWxzKSksXG4gICAgICAgIHRmYy5sb2cxcCh0ZmMuZXhwKG5lZ0Fic0xvZ2l0cykpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlDcm9zc2VudHJvcHkoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBsZXQgeTogVGVuc29yO1xuICAgIHkgPSB0ZmMuY2xpcEJ5VmFsdWUoeVByZWQsIGVwc2lsb24oKSwgMSAtIGVwc2lsb24oKSk7XG4gICAgeSA9IHRmYy5sb2codGZjLmRpdih5LCB0ZmMuc3ViKDEsIHkpKSk7XG4gICAgcmV0dXJuIHRmYy5tZWFuKHNpZ21vaWRDcm9zc0VudHJvcHlXaXRoTG9naXRzKHlUcnVlLCB5KSwgLTEpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGt1bGxiYWNrTGVpYmxlckRpdmVyZ2VuY2UoXG4gICAgeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCBjbGlwcGVkVHJ1ZSA9IHRmYy5jbGlwQnlWYWx1ZSh5VHJ1ZSwgZXBzaWxvbigpLCAxKTtcbiAgICBjb25zdCBjbGlwcGVkUHJlZCA9IHRmYy5jbGlwQnlWYWx1ZSh5UHJlZCwgZXBzaWxvbigpLCAxKTtcbiAgICByZXR1cm4gdGZjLnN1bShcbiAgICAgICAgdGZjLm11bCh5VHJ1ZSwgdGZjLmxvZyh0ZmMuZGl2KGNsaXBwZWRUcnVlLCBjbGlwcGVkUHJlZCkpKSwgLTEpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvaXNzb24oeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCBsb2dQcmVkID0gdGZjLmxvZyh0ZmMuYWRkKGVwc2lsb24oKSwgeVByZWQpKTtcbiAgICByZXR1cm4gdGZjLm1lYW4odGZjLnN1Yih5UHJlZCwgdGZjLm11bCh5VHJ1ZSwgbG9nUHJlZCkpLCAtMSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29zaW5lUHJveGltaXR5KHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY29uc3QgdHJ1ZU5vcm1hbGl6ZWQgPSBsMk5vcm1hbGl6ZSh5VHJ1ZSwgLTEpO1xuICAgIGNvbnN0IHByZWROb3JtYWxpemVkID0gbDJOb3JtYWxpemUoeVByZWQsIC0xKTtcbiAgICBjb25zdCB0cnVlWFByZWQgPSB0ZmMubXVsKHRydWVOb3JtYWxpemVkLCBwcmVkTm9ybWFsaXplZCk7XG4gICAgcmV0dXJuIHRmYy5uZWcodGZjLnN1bSh0cnVlWFByZWQsIC0xKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgbXNlID0gbWVhblNxdWFyZWRFcnJvcjtcbmV4cG9ydCBjb25zdCBNU0UgPSBtZWFuU3F1YXJlZEVycm9yO1xuZXhwb3J0IGNvbnN0IG1hZSA9IG1lYW5BYnNvbHV0ZUVycm9yO1xuZXhwb3J0IGNvbnN0IE1BRSA9IG1lYW5BYnNvbHV0ZUVycm9yO1xuZXhwb3J0IGNvbnN0IG1hcGUgPSBtZWFuQWJzb2x1dGVQZXJjZW50YWdlRXJyb3I7XG5leHBvcnQgY29uc3QgTUFQRSA9IG1lYW5BYnNvbHV0ZVBlcmNlbnRhZ2VFcnJvcjtcbmV4cG9ydCBjb25zdCBtc2xlID0gbWVhblNxdWFyZWRMb2dhcml0aG1pY0Vycm9yO1xuZXhwb3J0IGNvbnN0IE1TTEUgPSBtZWFuU3F1YXJlZExvZ2FyaXRobWljRXJyb3I7XG5leHBvcnQgY29uc3Qga2xkID0ga3VsbGJhY2tMZWlibGVyRGl2ZXJnZW5jZTtcbmV4cG9ydCBjb25zdCBLTEQgPSBrdWxsYmFja0xlaWJsZXJEaXZlcmdlbmNlO1xuZXhwb3J0IGNvbnN0IGNvc2luZSA9IGNvc2luZVByb3hpbWl0eTtcblxuLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBBZGQgZGVzZXJpYWxpemUoKSBmdW5jdGlvbi5cblxuZXhwb3J0IGNvbnN0IGxvc3Nlc01hcDoge1tmdW5jdGlvbk5hbWU6IHN0cmluZ106IExvc3NPck1ldHJpY0ZufSA9IHtcbiAgbWVhblNxdWFyZWRFcnJvcixcbiAgbWVhbkFic29sdXRlRXJyb3IsXG4gIG1lYW5BYnNvbHV0ZVBlcmNlbnRhZ2VFcnJvcixcbiAgbWVhblNxdWFyZWRMb2dhcml0aG1pY0Vycm9yLFxuICBzcXVhcmVkSGluZ2UsXG4gIGhpbmdlLFxuICBjYXRlZ29yaWNhbEhpbmdlLFxuICBsb2djb3NoLFxuICBjYXRlZ29yaWNhbENyb3NzZW50cm9weSxcbiAgc3BhcnNlQ2F0ZWdvcmljYWxDcm9zc2VudHJvcHksXG4gIGJpbmFyeUNyb3NzZW50cm9weSxcbiAga3VsbGJhY2tMZWlibGVyRGl2ZXJnZW5jZSxcbiAgcG9pc3NvbixcbiAgY29zaW5lUHJveGltaXR5XG59O1xuXG4vLyBQb3J0aW5nIG5vdGU6IFRoaXMgZGl2ZXJnZXMgZnJvbSB0aGUgUHlLZXJhcyBpbXBsZW1lbnRhdGlvbiBhbmQgbWF5IG5lZWQgdG9cbi8vIGNoYW5nZSBiYXNlZCBvbiAoZGUpc2VyaWFsaXphdGlvbiByZXF1aXJlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGlkZW50aWZpZXJPckZuOiBzdHJpbmd8TG9zc09yTWV0cmljRm4pOiBMb3NzT3JNZXRyaWNGbiB7XG4gIGlmICh0eXBlb2YgaWRlbnRpZmllck9yRm4gPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlkZW50aWZpZXJPckZuIGluIGxvc3Nlc01hcCkge1xuICAgICAgcmV0dXJuIGxvc3Nlc01hcFtpZGVudGlmaWVyT3JGbl07XG4gICAgfVxuICAgIGxldCBlcnJNc2cgPSBgVW5rbm93biBsb3NzICR7aWRlbnRpZmllck9yRm59YDtcbiAgICBpZiAoaWRlbnRpZmllck9yRm4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc29mdG1heGNyb3NzZW50cm9weScpKSB7XG4gICAgICBlcnJNc2cgPSBgVW5rbm93biBsb3NzICR7aWRlbnRpZmllck9yRm59LiBgICtcbiAgICAgICAgICAnVXNlIFwiY2F0ZWdvcmljYWxDcm9zc2VudHJvcHlcIiBhcyB0aGUgc3RyaW5nIG5hbWUgZm9yICcgK1xuICAgICAgICAgICd0Zi5sb3NzZXMuc29mdG1heENyb3NzRW50cm9weSc7XG4gICAgfVxuICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKGVyck1zZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlkZW50aWZpZXJPckZuO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/metrics.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Built-in metrics.
 */ __turbopack_context__.s([
    "MAE",
    ()=>MAE,
    "MAPE",
    ()=>MAPE,
    "MSE",
    ()=>MSE,
    "binaryAccuracy",
    ()=>binaryAccuracy,
    "binaryCrossentropy",
    ()=>binaryCrossentropy,
    "categoricalAccuracy",
    ()=>categoricalAccuracy,
    "categoricalCrossentropy",
    ()=>categoricalCrossentropy,
    "cosine",
    ()=>cosine,
    "get",
    ()=>get,
    "getLossOrMetricName",
    ()=>getLossOrMetricName,
    "mae",
    ()=>mae,
    "mape",
    ()=>mape,
    "metricsMap",
    ()=>metricsMap,
    "mse",
    ()=>mse,
    "precision",
    ()=>precision,
    "r2Score",
    ()=>r2Score,
    "recall",
    ()=>recall,
    "sparseCategoricalAccuracy",
    ()=>sparseCategoricalAccuracy,
    "sparseCategoricalCrossentropy",
    ()=>sparseCategoricalCrossentropy,
    "sparseTopKCategoricalAccuracy",
    ()=>sparseTopKCategoricalAccuracy,
    "topKCategoricalAccuracy",
    ()=>topKCategoricalAccuracy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/ones_like.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/greater.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mean.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/equal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$arg_max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/arg_max.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$logical_and$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/logical_and.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/where.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$squeeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/squeeze.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/losses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function binaryAccuracy(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const threshold = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ones_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onesLike"](yPred));
        const yPredThresholded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greater"](yPred, threshold), yTrue.dtype);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yTrue, yPredThresholded), -1);
    });
}
function categoricalAccuracy(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$arg_max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argMax"](yTrue, -1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$arg_max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argMax"](yPred, -1)), 'float32'));
}
function truePositives(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$logical_and$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logicalAnd"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yTrue, 1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yPred, 1))), 'float32');
    });
}
function falseNegatives(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$logical_and$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logicalAnd"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yTrue, 1), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yPred, 0))), 'float32');
    });
}
function falsePositives(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$logical_and$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logicalAnd"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yTrue, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yPred, 1))), 'float32');
    });
}
function precision(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const tp = truePositives(yTrue, yPred);
        const fp = falsePositives(yTrue, yPred);
        const denominator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](tp, fp);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greater"](denominator, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](tp, denominator), 0), 'float32');
    });
}
function recall(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const tp = truePositives(yTrue, yPred);
        const fn = falseNegatives(yTrue, yPred);
        const denominator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](tp, fn);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$where$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$greater$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greater"](denominator, 0), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](tp, denominator), 0), 'float32');
    });
}
function binaryCrossentropy(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryCrossentropy"])(yTrue, yPred);
}
function sparseCategoricalAccuracy(yTrue, yPred) {
    if (yTrue.rank === yPred.rank) {
        yTrue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$squeeze$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["squeeze"](yTrue, [
            yTrue.rank - 1
        ]);
    }
    yPred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$arg_max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argMax"](yPred, -1);
    if (yPred.dtype !== yTrue.dtype) {
        yPred = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](yPred, yTrue.dtype);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$equal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equal"](yTrue, yPred), 'float32');
}
function topKCategoricalAccuracy(yTrue, yPred) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]();
}
function sparseTopKCategoricalAccuracy(yTrue, yPred) {
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]();
}
function r2Score(yTrue, yPred) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
        const sumSquaresResiduals = yTrue.sub(yPred).square().sum();
        const sumSquares = yTrue.sub(yTrue.mean()).square().sum();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scalar"](1).sub(sumSquaresResiduals.div(sumSquares));
    });
}
const mse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanSquaredError"];
const MSE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanSquaredError"];
const mae = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsoluteError"];
const MAE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsoluteError"];
const mape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsolutePercentageError"];
const MAPE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsolutePercentageError"];
const categoricalCrossentropy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalCrossentropy"];
const cosine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cosineProximity"];
const sparseCategoricalCrossentropy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseCategoricalCrossentropy"];
const metricsMap = {
    binaryAccuracy,
    categoricalAccuracy,
    precision,
    categoricalCrossentropy,
    sparseCategoricalCrossentropy,
    mse,
    MSE,
    mae,
    MAE,
    mape,
    MAPE,
    cosine
};
function get(identifier) {
    if (typeof identifier === 'string' && identifier in metricsMap) {
        return metricsMap[identifier];
    } else if (typeof identifier !== 'string' && identifier != null) {
        return identifier;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unknown metric ${identifier}`);
    }
}
function getLossOrMetricName(fn) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](fn !== null, `Unknown LossOrMetricFn ${fn}`);
    if (typeof fn === 'string') {
        return fn;
    } else {
        let fnName;
        for (const key of Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lossesMap"])){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lossesMap"][key] === fn) {
                fnName = key;
                break;
            }
        }
        if (fnName !== undefined) {
            return fnName;
        }
        for (const key of Object.keys(metricsMap)){
            if (metricsMap[key] === fn) {
                fnName = key;
                break;
            }
        }
        if (fnName !== undefined) {
            return fnName;
        }
        return fn.name;
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9tZXRyaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBUyxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEtBQUssQ0FBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzVDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixJQUFJLHNCQUFzQixFQUFFLHVCQUF1QixJQUFJLDJCQUEyQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUUsZ0JBQWdCLEVBQUUsNkJBQTZCLElBQUksaUNBQWlDLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaFMsT0FBTyxLQUFLLElBQUksTUFBTSx1QkFBdUIsQ0FBQztBQUU5QyxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQ3pELE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNmLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFD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LE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUMxQixNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNiLE1BQU07YUFDUDtTQUNGO1FBQ0QsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFRLEVBQWUsQ0FBQyxJQUFJLENBQUM7S0FDOUI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBCdWlsdC1pbiBtZXRyaWNzLlxuICovXG5cbmltcG9ydCAqIGFzIHRmYyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtUZW5zb3IsIHRpZHl9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCAqIGFzIEsgZnJvbSAnLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge05vdEltcGxlbWVudGVkRXJyb3IsIFZhbHVlRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7YmluYXJ5Q3Jvc3NlbnRyb3B5IGFzIGxvc3NCaW5hcnlDcm9zc2VudHJvcHksIGNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5IGFzIGNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5TG9zcywgY29zaW5lUHJveGltaXR5LCBsb3NzZXNNYXAsIG1lYW5BYnNvbHV0ZUVycm9yLCBtZWFuQWJzb2x1dGVQZXJjZW50YWdlRXJyb3IsIG1lYW5TcXVhcmVkRXJyb3IsIHNwYXJzZUNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5IGFzIHNwYXJzZUNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5TG9zc30gZnJvbSAnLi9sb3NzZXMnO1xuaW1wb3J0IHtMb3NzT3JNZXRyaWNGbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlBY2N1cmFjeSh5VHJ1ZTogVGVuc29yLCB5UHJlZDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRmYy5tdWwoLjUsIHRmYy5vbmVzTGlrZSh5UHJlZCkpO1xuICAgIGNvbnN0IHlQcmVkVGhyZXNob2xkZWQgPSBLLmNhc3QodGZjLmdyZWF0ZXIoeVByZWQsIHRocmVzaG9sZCksIHlUcnVlLmR0eXBlKTtcbiAgICByZXR1cm4gdGZjLm1lYW4odGZjLmVxdWFsKHlUcnVlLCB5UHJlZFRocmVzaG9sZGVkKSwgLTEpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3JpY2FsQWNjdXJhY3koeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KFxuICAgICAgKCkgPT4gSy5jYXN0KFxuICAgICAgICAgIHRmYy5lcXVhbCh0ZmMuYXJnTWF4KHlUcnVlLCAtMSksIHRmYy5hcmdNYXgoeVByZWQsIC0xKSksICdmbG9hdDMyJykpO1xufVxuXG5mdW5jdGlvbiB0cnVlUG9zaXRpdmVzKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgcmV0dXJuIHRmYy5jYXN0KFxuICAgICAgICB0ZmMuc3VtKHRmYy5sb2dpY2FsQW5kKHRmYy5lcXVhbCh5VHJ1ZSwgMSksIHRmYy5lcXVhbCh5UHJlZCwgMSkpKSxcbiAgICAgICAgJ2Zsb2F0MzInKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZhbHNlTmVnYXRpdmVzKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgcmV0dXJuIHRmYy5jYXN0KFxuICAgICAgICB0ZmMuc3VtKHRmYy5sb2dpY2FsQW5kKHRmYy5lcXVhbCh5VHJ1ZSwgMSksIHRmYy5lcXVhbCh5UHJlZCwgMCkpKSxcbiAgICAgICAgJ2Zsb2F0MzInKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZhbHNlUG9zaXRpdmVzKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgcmV0dXJuIHRmYy5jYXN0KFxuICAgICAgICB0ZmMuc3VtKHRmYy5sb2dpY2FsQW5kKHRmYy5lcXVhbCh5VHJ1ZSwgMCksIHRmYy5lcXVhbCh5UHJlZCwgMSkpKSxcbiAgICAgICAgJ2Zsb2F0MzInKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVjaXNpb24oeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCB0cCA9IHRydWVQb3NpdGl2ZXMoeVRydWUsIHlQcmVkKTtcbiAgICBjb25zdCBmcCA9IGZhbHNlUG9zaXRpdmVzKHlUcnVlLCB5UHJlZCk7XG5cbiAgICBjb25zdCBkZW5vbWluYXRvciA9IHRmYy5hZGQodHAsIGZwKTtcblxuICAgIHJldHVybiB0ZmMuY2FzdChcbiAgICAgICAgdGZjLndoZXJlKHRmYy5ncmVhdGVyKGRlbm9taW5hdG9yLCAwKSwgdGZjLmRpdih0cCwgZGVub21pbmF0b3IpLCAwKSxcbiAgICAgICAgJ2Zsb2F0MzInKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNhbGwoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICBjb25zdCB0cCA9IHRydWVQb3NpdGl2ZXMoeVRydWUsIHlQcmVkKTtcbiAgICBjb25zdCBmbiA9IGZhbHNlTmVnYXRpdmVzKHlUcnVlLCB5UHJlZCk7XG5cbiAgICBjb25zdCBkZW5vbWluYXRvciA9IHRmYy5hZGQodHAsIGZuKTtcblxuICAgIHJldHVybiB0ZmMuY2FzdChcbiAgICAgICAgdGZjLndoZXJlKHRmYy5ncmVhdGVyKGRlbm9taW5hdG9yLCAwKSwgdGZjLmRpdih0cCwgZGVub21pbmF0b3IpLCAwKSxcbiAgICAgICAgJ2Zsb2F0MzInKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5hcnlDcm9zc2VudHJvcHkoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBsb3NzQmluYXJ5Q3Jvc3NlbnRyb3B5KHlUcnVlLCB5UHJlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGFyc2VDYXRlZ29yaWNhbEFjY3VyYWN5KFxuICAgIHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICBpZiAoeVRydWUucmFuayA9PT0geVByZWQucmFuaykge1xuICAgIHlUcnVlID0gdGZjLnNxdWVlemUoeVRydWUsIFt5VHJ1ZS5yYW5rIC0gMV0pO1xuICB9XG4gIHlQcmVkID0gdGZjLmFyZ01heCh5UHJlZCwgLTEpO1xuICBpZiAoeVByZWQuZHR5cGUgIT09IHlUcnVlLmR0eXBlKSB7XG4gICAgeVByZWQgPSB0ZmMuY2FzdCh5UHJlZCwgeVRydWUuZHR5cGUpO1xuICB9XG4gIHJldHVybiB0ZmMuY2FzdCh0ZmMuZXF1YWwoeVRydWUsIHlQcmVkKSwgJ2Zsb2F0MzInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcEtDYXRlZ29yaWNhbEFjY3VyYWN5KHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BhcnNlVG9wS0NhdGVnb3JpY2FsQWNjdXJhY3koXG4gICAgeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByMlNjb3JlKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgY29uc3Qgc3VtU3F1YXJlc1Jlc2lkdWFscyA9IHlUcnVlLnN1Yih5UHJlZCkuc3F1YXJlKCkuc3VtKCk7XG4gICAgY29uc3Qgc3VtU3F1YXJlcyA9IHlUcnVlLnN1Yih5VHJ1ZS5tZWFuKCkpLnNxdWFyZSgpLnN1bSgpO1xuICAgIHJldHVybiB0ZmMuc2NhbGFyKDEpLnN1YihzdW1TcXVhcmVzUmVzaWR1YWxzLmRpdihzdW1TcXVhcmVzKSk7XG4gIH0pO1xufVxuXG4vLyBBbGlhc2VzLlxuZXhwb3J0IGNvbnN0IG1zZSA9IG1lYW5TcXVhcmVkRXJyb3I7XG5leHBvcnQgY29uc3QgTVNFID0gbWVhblNxdWFyZWRFcnJvcjtcbmV4cG9ydCBjb25zdCBtYWUgPSBtZWFuQWJzb2x1dGVFcnJvcjtcbmV4cG9ydCBjb25zdCBNQUUgPSBtZWFuQWJzb2x1dGVFcnJvcjtcbmV4cG9ydCBjb25zdCBtYXBlID0gbWVhbkFic29sdXRlUGVyY2VudGFnZUVycm9yO1xuZXhwb3J0IGNvbnN0IE1BUEUgPSBtZWFuQWJzb2x1dGVQZXJjZW50YWdlRXJyb3I7XG5leHBvcnQgY29uc3QgY2F0ZWdvcmljYWxDcm9zc2VudHJvcHkgPSBjYXRlZ29yaWNhbENyb3NzZW50cm9weUxvc3M7XG5leHBvcnQgY29uc3QgY29zaW5lID0gY29zaW5lUHJveGltaXR5O1xuZXhwb3J0IGNvbnN0IHNwYXJzZUNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5ID0gc3BhcnNlQ2F0ZWdvcmljYWxDcm9zc2VudHJvcHlMb3NzO1xuXG4vLyBUT0RPKGNhaXMsIG5pZWxzZW5lKTogQWRkIHNlcmlhbGl6ZSgpLlxuXG5leHBvcnQgY29uc3QgbWV0cmljc01hcDoge1tmdW5jdGlvbk5hbWU6IHN0cmluZ106IExvc3NPck1ldHJpY0ZufSA9IHtcbiAgYmluYXJ5QWNjdXJhY3ksXG4gIGNhdGVnb3JpY2FsQWNjdXJhY3ksXG4gIHByZWNpc2lvbixcbiAgY2F0ZWdvcmljYWxDcm9zc2VudHJvcHksXG4gIHNwYXJzZUNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5LFxuICBtc2UsXG4gIE1TRSxcbiAgbWFlLFxuICBNQUUsXG4gIG1hcGUsXG4gIE1BUEUsXG4gIGNvc2luZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChpZGVudGlmaWVyOiBzdHJpbmd8TG9zc09yTWV0cmljRm4pOiBMb3NzT3JNZXRyaWNGbiB7XG4gIGlmICh0eXBlb2YgaWRlbnRpZmllciA9PT0gJ3N0cmluZycgJiYgaWRlbnRpZmllciBpbiBtZXRyaWNzTWFwKSB7XG4gICAgcmV0dXJuIG1ldHJpY3NNYXBbaWRlbnRpZmllcl07XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlkZW50aWZpZXIgIT09ICdzdHJpbmcnICYmIGlkZW50aWZpZXIgIT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKGBVbmtub3duIG1ldHJpYyAke2lkZW50aWZpZXJ9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNob3J0Y3V0IGZ1bmN0aW9uIG5hbWUuXG4gKlxuICogSWYgdGhlIGZuIG5hbWUgaXMgYSBzdHJpbmcsXG4gKiAgIGRpcmVjdGx5IHJldHVybiB0aGUgc3RyaW5nIG5hbWUuXG4gKiBJZiB0aGUgZnVuY3Rpb24gaXMgaW5jbHVkZWQgaW4gbWV0cmljc01hcCBvciBsb3NzZXNNYXAsXG4gKiAgIHJldHVybiBrZXkgb2YgdGhlIG1hcC5cbiAqICAgLSBJZiB0aGUgZnVuY3Rpb24gcmVsYXRpdmUgdG8gbXVsdGlwbGUga2V5cyxcbiAqICAgICByZXR1cm4gdGhlIGZpcnN0IGZvdW5kIGtleSBhcyB0aGUgZnVuY3Rpb24gbmFtZS5cbiAqICAgLSBJZiB0aGUgZnVuY3Rpb24gZXhpc3RzIGluIGJvdGggbG9zc2VzTWFwIGFuZCBtZXRyaWNzTWFwLFxuICogICAgIHNlYXJjaCBsb3NzZXNNYXAgZmlyc3QuXG4gKiBJZiB0aGUgZnVuY3Rpb24gaXMgbm90IGluY2x1ZGVkIGluIG1ldHJpY3NNYXAgb3IgbG9zc2VzTWFwLFxuICogICByZXR1cm4gdGhlIGZ1bmN0aW9uIG5hbWUuXG4gKlxuICogQHBhcmFtIGZuIGxvc3MgZnVuY3Rpb24sIG1ldHJpYyBmdW5jdGlvbiwgb3Igc2hvcnQgY3V0IG5hbWUuXG4gKiBAcmV0dXJucyBMb3NzIG9yIE1ldHJpYyBuYW1lIGluIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvc3NPck1ldHJpY05hbWUoZm46IHN0cmluZ3xMb3NzT3JNZXRyaWNGbik6IHN0cmluZyB7XG4gIHV0aWwuYXNzZXJ0KGZuICE9PSBudWxsLCBgVW5rbm93biBMb3NzT3JNZXRyaWNGbiAke2ZufWApO1xuICBpZiAodHlwZW9mIGZuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmbjtcbiAgfSBlbHNlIHtcbiAgICBsZXQgZm5OYW1lO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGxvc3Nlc01hcCkpIHtcbiAgICAgIGlmIChsb3NzZXNNYXBba2V5XSA9PT0gZm4pIHtcbiAgICAgICAgZm5OYW1lID0ga2V5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZuTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm5OYW1lO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtZXRyaWNzTWFwKSkge1xuICAgICAgaWYgKG1ldHJpY3NNYXBba2V5XSA9PT0gZm4pIHtcbiAgICAgICAgZm5OYW1lID0ga2V5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZuTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm5OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gKGZuIGFzIEZ1bmN0aW9uKS5uYW1lO1xuICB9XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/optimizers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Optimizers.
 */ __turbopack_context__.s([
    "getOptimizer",
    ()=>getOptimizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/train.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
;
;
;
function getOptimizer(identifier) {
    const optimizerMap = {
        'Adagrad': ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["train"].adagrad(0.01),
        'Adadelta': ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["train"].adadelta(1, 0.95, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])()),
        'Adam': ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["train"].adam(0.001, 0.9, 0.999, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])()),
        'Adamax': ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["train"].adamax(0.002, 0.9, 0.999, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])(), 0),
        'RMSProp': ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["train"].rmsprop(0.001, 0.9, 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["epsilon"])()),
        'SGD': ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$train$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["train"].sgd(0.01)
    };
    optimizerMap['adagrad'] = optimizerMap['Adagrad'];
    optimizerMap['adadelta'] = optimizerMap['Adadelta'];
    optimizerMap['adam'] = optimizerMap['Adam'];
    optimizerMap['adamax'] = optimizerMap['Adamax'];
    optimizerMap['rmsprop'] = optimizerMap['RMSProp'];
    optimizerMap['sgd'] = optimizerMap['SGD'];
    if (identifier in optimizerMap) {
        return optimizerMap[identifier]();
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unknown Optimizer ${identifier}`);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW1pemVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9vcHRpbWl6ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEVBQVksS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFcEMsc0JBQXNCO0FBRXRCLDhFQUE4RTtBQUM5RSxrREFBa0Q7QUFDbEQsTUFBTSxVQUFVLFlBQVksQ0FBQyxVQUFrQjtJQUM3QyxNQUFNLFlBQVksR0FBK0M7UUFDL0QsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3BDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDcEQsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEQsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3hELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztLQUM3QixDQUFDO0lBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUMsSUFBSSxVQUFVLElBQUksWUFBWSxFQUFFO1FBQzlCLE9BQU8sWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7S0FDbkM7SUFDRCxNQUFNLElBQUksVUFBVSxDQUFDLHFCQUFxQixVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIE9wdGltaXplcnMuXG4gKi9cblxuaW1wb3J0IHtPcHRpbWl6ZXIsIHRyYWlufSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge2Vwc2lsb259IGZyb20gJy4vYmFja2VuZC9jb21tb24nO1xuXG5pbXBvcnQge1ZhbHVlRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcblxuLy8gQWRkIChkZSlzZXJpYWxpemUoKVxuXG4vLyBQb3J0aW5nIG5vdGU6IFRoaXMgZGl2ZXJnZXMgZnJvbSB0aGUgUHlLZXJhcyBpbXBsZW1lbnRhdGlvbiBhbmQgbWF5IG5lZWQgdG9cbi8vIGNoYW5nZSBiYXNlZCBvbiAoZGUpc2VyaWFsaXphdGlvbiByZXF1aXJlbWVudHMuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW1pemVyKGlkZW50aWZpZXI6IHN0cmluZyk6IE9wdGltaXplciB7XG4gIGNvbnN0IG9wdGltaXplck1hcDoge1tvcHRpbWl6ZXJOYW1lOiBzdHJpbmddOiAoKSA9PiBPcHRpbWl6ZXJ9ID0ge1xuICAgICdBZGFncmFkJzogKCkgPT4gdHJhaW4uYWRhZ3JhZCgwLjAxKSxcbiAgICAnQWRhZGVsdGEnOiAoKSA9PiB0cmFpbi5hZGFkZWx0YSgxLCAwLjk1LCBlcHNpbG9uKCkpLFxuICAgICdBZGFtJzogKCkgPT4gdHJhaW4uYWRhbSgwLjAwMSwgMC45LCAwLjk5OSwgZXBzaWxvbigpKSxcbiAgICAnQWRhbWF4JzogKCkgPT4gdHJhaW4uYWRhbWF4KDAuMDAyLCAwLjksIDAuOTk5LCBlcHNpbG9uKCksIDApLFxuICAgICdSTVNQcm9wJzogKCkgPT4gdHJhaW4ucm1zcHJvcCgwLjAwMSwgMC45LCAwLCBlcHNpbG9uKCkpLFxuICAgICdTR0QnOiAoKSA9PiB0cmFpbi5zZ2QoMC4wMSlcbiAgfTtcbiAgb3B0aW1pemVyTWFwWydhZGFncmFkJ10gPSBvcHRpbWl6ZXJNYXBbJ0FkYWdyYWQnXTtcbiAgb3B0aW1pemVyTWFwWydhZGFkZWx0YSddID0gb3B0aW1pemVyTWFwWydBZGFkZWx0YSddO1xuICBvcHRpbWl6ZXJNYXBbJ2FkYW0nXSA9IG9wdGltaXplck1hcFsnQWRhbSddO1xuICBvcHRpbWl6ZXJNYXBbJ2FkYW1heCddID0gb3B0aW1pemVyTWFwWydBZGFtYXgnXTtcbiAgb3B0aW1pemVyTWFwWydybXNwcm9wJ10gPSBvcHRpbWl6ZXJNYXBbJ1JNU1Byb3AnXTtcbiAgb3B0aW1pemVyTWFwWydzZ2QnXSA9IG9wdGltaXplck1hcFsnU0dEJ107XG5cbiAgaWYgKGlkZW50aWZpZXIgaW4gb3B0aW1pemVyTWFwKSB7XG4gICAgcmV0dXJuIG9wdGltaXplck1hcFtpZGVudGlmaWVyXSgpO1xuICB9XG4gIHRocm93IG5ldyBWYWx1ZUVycm9yKGBVbmtub3duIE9wdGltaXplciAke2lkZW50aWZpZXJ9YCk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/user_defined_metadata.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /** Utility functions related to user-defined metadata. */ // Maximum recommended serialized size for user-defined metadata.
// Beyond this limit, a warning message will be printed during model loading and
// saving.
__turbopack_context__.s([
    "MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH",
    ()=>MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH,
    "checkUserDefinedMetadata",
    ()=>checkUserDefinedMetadata,
    "plainObjectCheck",
    ()=>plainObjectCheck
]);
const MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH = 1 * 1024 * 1024;
function checkUserDefinedMetadata(userDefinedMetadata, modelName, checkSize = false) {
    if (userDefinedMetadata == null || typeof userDefinedMetadata !== 'object' || Object.getPrototypeOf(userDefinedMetadata) !== Object.prototype || !plainObjectCheck(userDefinedMetadata)) {
        throw new Error('User-defined metadata is expected to be a JSON object, but is not.');
    }
    if (checkSize) {
        const out = JSON.stringify(userDefinedMetadata);
        if (out.length > MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH) {
            console.warn(`User-defined metadata of model "${modelName}" is too large in ` + `size (length=${out.length} when serialized). It is not ` + `recommended to store such large objects in user-defined metadata. ` + `Please make sure its serialized length is <= ` + `${MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH}.`);
        }
    }
}
function plainObjectCheck(x) {
    if (x === null) {
        // Note: typeof `null` is 'object', and `null` is valid in JSON.
        return true;
    } else if (typeof x === 'object') {
        if (Object.getPrototypeOf(x) === Object.prototype) {
            // `x` is a JavaScript object and its prototype is Object.
            const keys = Object.keys(x);
            for (const key of keys){
                if (typeof key !== 'string') {
                    // JSON keys must be strings.
                    return false;
                }
                if (!plainObjectCheck(x[key])) {
                    return false;
                }
            }
            return true;
        } else {
            // `x` is a JavaScript object but its prototype is not Object.
            if (Array.isArray(x)) {
                // `x` is a JavaScript array.
                for (const item of x){
                    if (!plainObjectCheck(item)) {
                        return false;
                    }
                }
                return true;
            } else {
                // `x` is a JavaScript object and its prototype is not Object,
                // and it's not an Array. I.e., it's a complex object such as
                // `Error` and `Date`.
                return false;
            }
        }
    } else {
        // `x` is not a JavaScript object or `null`.
        const xType = typeof x;
        return xType === 'string' || xType === 'number' || xType === 'boolean';
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9kZWZpbmVkX21ldGFkYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL3VzZXJfZGVmaW5lZF9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILDBEQUEwRDtBQUUxRCxpRUFBaUU7QUFDakUsZ0ZBQWdGO0FBQ2hGLFVBQVU7QUFDVixNQUFNLENBQUMsTUFBTSwyQ0FBMkMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUUzRTs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sVUFBVSx3QkFBd0IsQ0FDcEMsbUJBQXVCLEVBQUUsU0FBaUIsRUFBRSxTQUFTLEdBQUcsS0FBSztJQUMvRCxJQUFJLG1CQUFtQixJQUFJLElBQUk7UUFDM0IsT0FBTyxtQkFBbUIsS0FBSyxRQUFRO1FBQ3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUztRQUMvRCxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLEVBQUU7UUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FDWCxvRUFBb0UsQ0FBQyxDQUFDO0tBQzNFO0lBRUQsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLDJDQUEyQyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxJQUFJLENBQ1IsbUNBQW1DLFNBQVMsb0JBQW9CO2dCQUNoRSxnQkFBZ0IsR0FBRyxDQUFDLE1BQU0sK0JBQStCO2dCQUN6RCxvRUFBb0U7Z0JBQ3BFLCtDQUErQztnQkFDL0MsR0FBRywyQ0FBMkMsR0FBRyxDQUFDLENBQUM7U0FDeEQ7S0FDRjtBQUNILENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxrQ0FBa0M7QUFDbEMsTUFBTSxVQUFVLGdCQUFnQixDQUFDLENBQU07SUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2QsZ0VBQWdFO1FBQ2hFLE9BQU8sSUFBSSxDQUFDO0tBQ2I7U0FBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNoQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNqRCwwREFBMEQ7WUFDMUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQzNCLDZCQUE2QjtvQkFDN0IsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUcsa0JBQWtCO29CQUNsRCxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsOERBQThEO1lBQzlELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEIsNkJBQTZCO2dCQUM3QixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUcsa0JBQWtCO3dCQUNoRCxPQUFPLEtBQUssQ0FBQztxQkFDZDtpQkFDRjtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLDhEQUE4RDtnQkFDOUQsNkRBQTZEO2dCQUM3RCxzQkFBc0I7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtLQUNGO1NBQU07UUFDTCw0Q0FBNEM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDdkIsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQztLQUN4RTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKiogVXRpbGl0eSBmdW5jdGlvbnMgcmVsYXRlZCB0byB1c2VyLWRlZmluZWQgbWV0YWRhdGEuICovXG5cbi8vIE1heGltdW0gcmVjb21tZW5kZWQgc2VyaWFsaXplZCBzaXplIGZvciB1c2VyLWRlZmluZWQgbWV0YWRhdGEuXG4vLyBCZXlvbmQgdGhpcyBsaW1pdCwgYSB3YXJuaW5nIG1lc3NhZ2Ugd2lsbCBiZSBwcmludGVkIGR1cmluZyBtb2RlbCBsb2FkaW5nIGFuZFxuLy8gc2F2aW5nLlxuZXhwb3J0IGNvbnN0IE1BWF9VU0VSX0RFRklORURfTUVUQURBVEFfU0VSSUFMSVpFRF9MRU5HVEggPSAxICogMTAyNCAqIDEwMjQ7XG5cbi8qKlxuICogQ2hlY2sgdmFsaWRpdHkgb2YgdXNlci1kZWZpbmVkIG1ldGFkYXRhLlxuICpcbiAqIEBwYXJhbSB1c2VyRGVmaW5lZE1ldGFkYXRhXG4gKiBAcGFyYW0gbW9kZWxOYW1lIE5hbWUgb2YgdGhlIG1vZGVsIHRoYXQgdGhlIHVzZXItZGVmaW5lZCBtZXRhZGF0YSBiZWxvbmdzIHRvLlxuICogICBVc2VkIGR1cmluZyBjb25zdHJ1Y3Rpb24gb2YgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gY2hlY2tTaXplIFdoZXRoZXIgdG8gY2hlY2sgdGhlIHNpemUgb2YgdGhlIG1ldGFkYXRhIGlzIHVuZGVyXG4gKiAgIHJlY29tbWVuZGVkIGxpbWl0LiBEZWZhdWx0OiBgZmFsc2VgLiBJZiBgdHJ1ZWAsIHdpbGwgdHJ5IHN0cmluZ2lmeSB0aGVcbiAqICAgSlNPTiBvYmplY3QgYW5kIHByaW50IGEgY29uc29sZSB3YXJuaW5nIGlmIHRoZSBzZXJpYWx6aWVkIHNpemUgaXMgYWJvdmUgdGhlXG4gKiAgIGxpbWl0LlxuICogQHRocm93cyBFcnJvciBpZiBgdXNlckRlZmluZWRNZXRhZGF0YWAgaXMgbm90IGEgcGxhaW4gSlNPTiBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1VzZXJEZWZpbmVkTWV0YWRhdGEoXG4gICAgdXNlckRlZmluZWRNZXRhZGF0YToge30sIG1vZGVsTmFtZTogc3RyaW5nLCBjaGVja1NpemUgPSBmYWxzZSk6IHZvaWQge1xuICBpZiAodXNlckRlZmluZWRNZXRhZGF0YSA9PSBudWxsIHx8XG4gICAgICB0eXBlb2YgdXNlckRlZmluZWRNZXRhZGF0YSAhPT0gJ29iamVjdCcgfHxcbiAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZih1c2VyRGVmaW5lZE1ldGFkYXRhKSAhPT0gT2JqZWN0LnByb3RvdHlwZSB8fFxuICAgICAgIXBsYWluT2JqZWN0Q2hlY2sodXNlckRlZmluZWRNZXRhZGF0YSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdVc2VyLWRlZmluZWQgbWV0YWRhdGEgaXMgZXhwZWN0ZWQgdG8gYmUgYSBKU09OIG9iamVjdCwgYnV0IGlzIG5vdC4nKTtcbiAgfVxuXG4gIGlmIChjaGVja1NpemUpIHtcbiAgICBjb25zdCBvdXQgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGVmaW5lZE1ldGFkYXRhKTtcbiAgICBpZiAob3V0Lmxlbmd0aCA+IE1BWF9VU0VSX0RFRklORURfTUVUQURBVEFfU0VSSUFMSVpFRF9MRU5HVEgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgVXNlci1kZWZpbmVkIG1ldGFkYXRhIG9mIG1vZGVsIFwiJHttb2RlbE5hbWV9XCIgaXMgdG9vIGxhcmdlIGluIGAgK1xuICAgICAgICAgIGBzaXplIChsZW5ndGg9JHtvdXQubGVuZ3RofSB3aGVuIHNlcmlhbGl6ZWQpLiBJdCBpcyBub3QgYCArXG4gICAgICAgICAgYHJlY29tbWVuZGVkIHRvIHN0b3JlIHN1Y2ggbGFyZ2Ugb2JqZWN0cyBpbiB1c2VyLWRlZmluZWQgbWV0YWRhdGEuIGAgK1xuICAgICAgICAgIGBQbGVhc2UgbWFrZSBzdXJlIGl0cyBzZXJpYWxpemVkIGxlbmd0aCBpcyA8PSBgICtcbiAgICAgICAgICBgJHtNQVhfVVNFUl9ERUZJTkVEX01FVEFEQVRBX1NFUklBTElaRURfTEVOR1RIfS5gKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBpbnB1dCBpcyBwbGFpbiBKU09OIG9iamVjdCBvciBhbnkgdmFsaWQgc3ViZmllbGQgb2YgaXQuXG4gKlxuICogQHBhcmFtIHggVGhlIGlucHV0IHRvIGJlIGNoZWNrZWQuXG4gKiBAcGFyYW0gYXNzZXJ0T2JqZWN0IFdoZXRoZXIgdG8gYXNzZXJ0IGB4YCBpcyBhIEpTT04gb2JqZWN0LCBpLmUuLCByZWplY3RcbiAqICAgY2FzZXMgb2YgYXJyYXlzIGFuZCBwcmltaXRpdmVzLlxuICogQHJldHVybiBSZXR1cm5zIGB0cnVlYCBpZiBhbmQgb25seSBpZiBgeGAgaXMgYSBwbGFpbiBKU09OIG9iamVjdCxcbiAqICAgYSBKU09OLXZhbGlkIHByaW1pdGl2ZSBpbmNsdWRpbmcgc3RyaW5nLCBudW1iZXIsIGJvb2xlYW4gYW5kIG51bGwsXG4gKiAgIG9yIGFuIGFycmF5IG9mIHRoZSBzYWlkIHR5cGVzLlxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgZnVuY3Rpb24gcGxhaW5PYmplY3RDaGVjayh4OiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICAvLyBOb3RlOiB0eXBlb2YgYG51bGxgIGlzICdvYmplY3QnLCBhbmQgYG51bGxgIGlzIHZhbGlkIGluIEpTT04uXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSA9PT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgLy8gYHhgIGlzIGEgSmF2YVNjcmlwdCBvYmplY3QgYW5kIGl0cyBwcm90b3R5cGUgaXMgT2JqZWN0LlxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHgpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBKU09OIGtleXMgbXVzdCBiZSBzdHJpbmdzLlxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsYWluT2JqZWN0Q2hlY2soeFtrZXldKSkgeyAgLy8gUmVjdXJzaXZlIGNhbGwuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYHhgIGlzIGEgSmF2YVNjcmlwdCBvYmplY3QgYnV0IGl0cyBwcm90b3R5cGUgaXMgbm90IE9iamVjdC5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgICAgIC8vIGB4YCBpcyBhIEphdmFTY3JpcHQgYXJyYXkuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB4KSB7XG4gICAgICAgICAgaWYgKCFwbGFpbk9iamVjdENoZWNrKGl0ZW0pKSB7ICAvLyBSZWN1cnNpdmUgY2FsbC5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBgeGAgaXMgYSBKYXZhU2NyaXB0IG9iamVjdCBhbmQgaXRzIHByb3RvdHlwZSBpcyBub3QgT2JqZWN0LFxuICAgICAgICAvLyBhbmQgaXQncyBub3QgYW4gQXJyYXkuIEkuZS4sIGl0J3MgYSBjb21wbGV4IG9iamVjdCBzdWNoIGFzXG4gICAgICAgIC8vIGBFcnJvcmAgYW5kIGBEYXRlYC5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBgeGAgaXMgbm90IGEgSmF2YVNjcmlwdCBvYmplY3Qgb3IgYG51bGxgLlxuICAgIGNvbnN0IHhUeXBlID0gdHlwZW9mIHg7XG4gICAgcmV0dXJuIHhUeXBlID09PSAnc3RyaW5nJyB8fCB4VHlwZSA9PT0gJ251bWJlcicgfHwgeFR5cGUgPT09ICdib29sZWFuJztcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @license See the LICENSE file. */ // This code is auto-generated, do not modify this file!
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '4.22.0';
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy92ZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUVyQyx3REFBd0Q7QUFDeEQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBTZWUgdGhlIExJQ0VOU0UgZmlsZS4gKi9cblxuLy8gVGhpcyBjb2RlIGlzIGF1dG8tZ2VuZXJhdGVkLCBkbyBub3QgbW9kaWZ5IHRoaXMgZmlsZSFcbmNvbnN0IHZlcnNpb24gPSAnNC4yMi4wJztcbmV4cG9ydCB7dmVyc2lvbn07XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/models.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source keras/models.py */ __turbopack_context__.s([
    "Sequential",
    ()=>Sequential,
    "loadLayersModel",
    ()=>loadLayersModel,
    "loadLayersModelFromIOHandler",
    ()=>loadLayersModelFromIOHandler,
    "modelFromJSON",
    ()=>modelFromJSON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/io/io.js [app-ssr] (ecmascript) <export * as io>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/input_layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/serialization_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-ssr] (ecmascript)");
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
async function modelFromJSON(modelAndWeightsConfig, customObjects) {
    if (!('modelTopology' in modelAndWeightsConfig)) {
        modelAndWeightsConfig = {
            modelTopology: modelAndWeightsConfig
        };
    }
    modelAndWeightsConfig = modelAndWeightsConfig;
    let modelTopology = modelAndWeightsConfig.modelTopology;
    if (modelTopology['model_config'] != null) {
        // If the model-topology JSON contains a 'model_config' field, then it is
        // a full model JSON (e.g., from `keras.Model.save()`), which contains
        // not only the model's architecture in its 'model_config' field, but
        // additional information such as the model's optimizer. We use only the
        // 'model_config' field currently.
        modelTopology = modelTopology['model_config'];
    }
    const tsConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertPythonicToTs"])(modelTopology);
    const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(tsConfig, customObjects);
    if (modelAndWeightsConfig.weightsManifest != null) {
        // Load the weight values keyed by the original tensor names in the model
        // file that was loaded.  These should match the keys of the weight
        // manifest.
        const weightValues = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].loadWeights(modelAndWeightsConfig.weightsManifest, modelAndWeightsConfig.pathPrefix, model.weights.map((weight)=>weight.originalName));
        // Map the weights to the unique tensor names generated during model loading
        const uniqueWeightValues = {};
        for (const weight of model.weights){
            uniqueWeightValues[weight.originalName] = weightValues[weight.originalName];
        }
        model.loadWeights(uniqueWeightValues);
        // Dispose temporary weight values.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(weightValues);
    }
    return model;
}
async function loadLayersModel(pathOrIOHandler, options) {
    if (options == null) {
        options = {};
    }
    if (typeof pathOrIOHandler === 'string') {
        const handlers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].getLoadHandlers(pathOrIOHandler, options);
        if (handlers.length === 0) {
            // For backward compatibility: if no load handler can be found,
            // assume it is a relative http path.
            // TODO(cais): Reformat the args into a single `LoadOptions` once the core
            // is refactored.
            handlers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].browserHTTPRequest(pathOrIOHandler, options));
        } else if (handlers.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Found more than one (${handlers.length}) load handlers for ` + `URL '${pathOrIOHandler}'`);
        }
        pathOrIOHandler = handlers[0];
    }
    return loadLayersModelFromIOHandler(pathOrIOHandler, undefined, options);
}
async function loadLayersModelFromIOHandler(handler, customObjects, options) {
    if (options == null) {
        options = {};
    }
    if (handler.load == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Cannot proceed with model loading because the IOHandler provided ' + 'does not have the `load` method implemented.');
    }
    const artifacts = await handler.load();
    let modelTopology = artifacts.modelTopology;
    if (modelTopology['model_config'] != null) {
        modelTopology = modelTopology['model_config'];
    }
    const strict = options.strict == null ? true : options.strict;
    // If weights are provided and the weight-loading mode is strict, use
    // fast weight initialization. This skips costly initializers such as
    // 'orthogonal' and saves unnecessary computation in cases where
    // the initialized weight values will immediately be overwritten by
    // loaded weight values.
    const fastWeightInit = artifacts.weightData != null && artifacts.weightSpecs != null && strict;
    const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertPythonicToTs"])(modelTopology), customObjects, fastWeightInit);
    const trainingConfig = artifacts.trainingConfig;
    if (trainingConfig != null) {
        model.loadTrainingConfig(trainingConfig);
    }
    if (artifacts.userDefinedMetadata != null) {
        model.setUserDefinedMetadata(artifacts.userDefinedMetadata);
    }
    // If weightData is present, load the weights into the model.
    if (artifacts.weightData != null) {
        // Loading weights requires weightSpecs.
        if (artifacts.weightSpecs == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('LayersModel artifacts contains weight data, but not weight specs. ' + 'Therefore loading of weights cannot proceed.');
        }
        const { modelWeights, optimizerWeights } = decodeModelAndOptimizerWeights(artifacts.weightData, artifacts.weightSpecs);
        model.loadWeights(modelWeights, strict);
        if (model.optimizer != null && optimizerWeights.length > 0) {
            await model.optimizer.setWeights(optimizerWeights);
        }
        // Dispose temporary weight values.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(modelWeights);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(optimizerWeights.map((w)=>w.tensor));
    }
    return model;
}
function decodeModelAndOptimizerWeights(weightData, specs) {
    const name2Tensor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].decodeWeights(weightData, specs);
    const modelWeights = {};
    const optimizerWeights = [];
    specs.forEach((spec)=>{
        if (spec.group === 'optimizer') {
            optimizerWeights.push({
                name: spec.name,
                tensor: name2Tensor[spec.name]
            });
        } else {
            modelWeights[spec.name] = name2Tensor[spec.name];
        }
    });
    return {
        modelWeights,
        optimizerWeights
    };
}
/**
 * A model with a stack of layers, feeding linearly from one to the next.
 *
 * `tf.sequential` is a factory function that creates an instance of
 * `tf.Sequential`.
 *
 * ```js
 *  // Define a model for linear regression.
 *  const model = tf.sequential();
 *  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
 *
 *  // Prepare the model for training: Specify the loss and the optimizer.
 *  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
 *
 *  // Generate some synthetic data for training.
 *  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
 *  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
 *
 *  // Train the model using the data then do inference on a data point the
 *  // model hasn't seen:
 *  await model.fit(xs, ys);
 *  model.predict(tf.tensor2d([5], [1, 1])).print();
 * ```
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */ class Sequential extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersModel"] {
    constructor(args){
        super({
            inputs: [],
            outputs: []
        });
        args = args || {};
        this.trainable = true;
        this.built = false;
        // Set model name.
        this.name = args.name != null ? args.name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUid"])('sequential_');
        // Add to the model any layers passed to the constructor.
        if (args.layers != null) {
            for (const layer of args.layers){
                this.add(layer);
            }
        }
    }
    // Helper function to Sequential.add  Throws if the new output shape will be
    // invalid.
    checkShape(layer) {
        const shape = layer.inboundNodes[0].outputTensors[0].shape;
        if (shape.some((x)=>x < 0)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Negative dimension size caused by adding layer ' + `${layer.name} with input shape [` + `${layer.inboundNodes[0].inputTensors[0].shape}]`);
        }
    }
    /**
     * Adds a layer instance on top of the layer stack.
     *
     * ```js
     *  const model = tf.sequential();
     *  model.add(tf.layers.dense({units: 8, inputShape: [1]}));
     *  model.add(tf.layers.dense({units: 4, activation: 'relu6'}));
     *  model.add(tf.layers.dense({units: 1, activation: 'relu6'}));
     *  // Note that the untrained model is random at this point.
     *  model.predict(tf.randomNormal([10, 1])).print();
     * ```
     * @param layer Layer instance.
     *
     * @exception ValueError In case the `layer` argument does not know its
     * input shape.
     * @exception ValueError In case the `layer` argument has multiple output
     *   tensors, or is already connected somewhere else (forbidden in
     *   `Sequential` models).
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ add(layer) {
        const isLayerModelInstance = layer instanceof Sequential || layer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersModel"];
        let modelLayer;
        if (isLayerModelInstance) {
            modelLayer = layer;
            if (modelLayer.outputs.length !== 1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('All layers in a Sequential model ' + 'should have a single output tensor. ' + 'For multi-output layers, ' + 'use the functional API.');
            }
            if (modelLayer.inputs.length !== 1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('All layers in a Sequential model ' + 'should have a single input tensor. ' + 'For multi-input layers, ' + 'use the functional API.');
            }
        }
        if (this.outputs.length === 0) {
            // first layer in model: check that it is an input layer
            if (layer.inboundNodes.length === 0) {
                // create an input layer
                if (layer.batchInputShape == null) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('The first layer in a Sequential model must ' + 'get an `inputShape` or `batchInputShape` argument.');
                }
                // Instantiate the input layer.
                const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"])({
                    batchShape: layer.batchInputShape,
                    dtype: layer.dtype,
                    name: layer.name + '_input'
                });
                // This will build the current layer and create the node connecting
                // the current layer to the input layer we just created.
                layer.apply(x);
            }
            if (isLayerModelInstance) {
                this.outputs = modelLayer.outputs;
                this.inputs = modelLayer.inputs;
            } else {
                if (layer.inboundNodes.length !== 1) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('A layer added to a Sequential model must not already be ' + `connected somewhere else. LayersModel received layer ${layer.name} ` + `which has ${layer.inboundNodes.length} pre-existing inbound ` + 'connections.');
                }
                if (layer.inboundNodes[0].outputTensors.length !== 1) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('All layers in a Sequential model ' + 'should have a single output tensor. ' + 'For multi-output layers, ' + 'use the functional API.');
                }
                this.checkShape(layer);
                this.outputs = [
                    layer.inboundNodes[0].outputTensors[0]
                ];
                this.inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSourceInputs"])(this.outputs[0]);
            }
            this.inboundNodes = [];
            // We create an input node, which we will keep updated
            // as we add more layers.
            // (This call has side effects.)
            // tslint:disable-next-line:no-unused-expression
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"]({
                outboundLayer: this,
                inboundLayers: [],
                nodeIndices: [],
                tensorIndices: [],
                inputTensors: this.inputs,
                outputTensors: this.outputs,
                // no model-level masking for now
                inputMasks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pyListRepeat"](null, this.inputs.length),
                outputMasks: [
                    null
                ],
                inputShapes: this.inputs.map((x)=>x.shape),
                outputShapes: this.outputs[0].shape
            });
        } else {
            const outputTensor = layer.apply(this.outputs[0]);
            if (Array.isArray(outputTensor)) {
                throw new TypeError('All layers in a Sequential model ' + 'should have a single output tensor. ' + 'For multi-output layers, ' + 'use the functional API.');
            }
            this.checkShape(layer);
            this.outputs = [
                outputTensor
            ];
            // update self.inbound_nodes
            this.inboundNodes[0].outputTensors = this.outputs;
            this.inboundNodes[0].outputShapes = [
                this.outputs[0].shape
            ];
        }
        this.layers.push(layer);
        this.built = false;
    }
    /**
     * Removes the last layer in the model.
     *
     * @exception TypeError if there are no layers in the model.
     */ pop() {
        if (this.layers.length === 0) {
            throw new TypeError('There are no layers in the model.');
        }
        this.layers.pop();
        if (this.layers.length === 0) {
            this.outputs = [];
            this.inboundNodes = [];
            this.outboundNodes = [];
        } else {
            const lastLayerIndex = this.layers.length - 1;
            this.layers[lastLayerIndex].outboundNodes = [];
            this.outputs = [
                this.layers[lastLayerIndex].output
            ];
            // update self.inbound_nodes
            this.inboundNodes[0].outputTensors = this.outputs;
            this.inboundNodes[0].outputShapes = [
                this.outputs[0].shape
            ];
        }
    }
    call(inputs, kwargs) {
        if (this.model == null) {
            this.build();
        }
        return this.model.call(inputs, kwargs);
    }
    build(inputShape) {
        // Call `getExactlyOneShape` without using its return value,
        // to verify that exactly one input shape is provided.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExactlyOneShape"])(inputShape);
        if (this.inputs.length === 0 || this.outputs.length === 0) {
            throw new TypeError('Sequential model cannot be built: model is empty.' + ' Add some layers first.');
        }
        // actually create the model
        this.model = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersModel"]({
            inputs: this.inputs,
            outputs: this.outputs[0],
            name: this.name + '_model'
        });
        this.model.trainable = this.trainable;
        // mirror model attributes
        this.supportsMasking = this.model.supportsMasking;
        // TODO(michaelterry): Add caches
        this.inputLayers = this.model.inputLayers;
        this.inputLayersNodeIndices = this.model.inputLayersNodeIndices;
        this.inputLayersTensorIndices = this.model.inputLayersTensorIndices;
        this.outputLayers = this.model.outputLayers;
        this.outputLayersNodeIndices = this.model.outputLayersNodeIndices;
        this.outputLayersTensorIndices = this.model.outputLayersTensorIndices;
        this.nodesByDepth = this.model.nodesByDepth;
        this.containerNodes = this.model.containerNodes;
        this.outputNames = this.model.outputNames;
        this.inputNames = this.model.inputNames;
        // TODO(michaelterry): Add feedInputNames, feedInputs, if needed.
        // TODO(michaelterry): Add callbackModel if needed.
        this.built = true;
    }
    countParams() {
        if (!this.built) {
            this.build();
        }
        return super.countParams();
    }
    /**
     * Print a text summary of the Sequential model's layers.
     *
     * The summary includes
     * - Name and type of all layers that comprise the model.
     * - Output shape(s) of the layers
     * - Number of weight parameters of each layer
     * - The total number of trainable and non-trainable parameters of the
     * model.
     *
     * ```js
     * const model = tf.sequential();
     * model.add(
     *     tf.layers.dense({units: 100, inputShape: [10], activation: 'relu'}));
     * model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
     *
     * model.summary();
     * ```
     *
     * @param lineLength Custom line length, in number of characters.
     * @param positions Custom widths of each of the columns, as either
     *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
     *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
     *   right-most (i.e., ending) position of a column.
     * @param printFn Custom print function. Can be used to replace the default
     *   `console.log`. For example, you can use `x => {}` to mute the printed
     *   messages in the console.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ summary(lineLength, positions, printFn = console.log) {
        if (!this.built) {
            this.build();
        }
        super.summary(lineLength, positions, printFn);
    }
    /**
     * Sets the weights of the model.
     *
     * @param weights Should be a list of Tensors with shapes and types matching
     *   the output of `model.getWeights()`.
     */ setWeights(weights) {
        if (this.model == null) {
            this.build();
        }
        this.model.setWeights(weights);
    }
    /**
     * Returns the loss value & metrics values for the model in test mode.
     *
     * Loss and metrics are specified during `compile()`, which needs to happen
     * before calls to `evaluate()`.
     *
     * Computation is done in batches.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const result = model.evaluate(tf.ones([8, 10]), tf.ones([8, 1]), {
     *   batchSize: 4,
     * });
     * result.print();
     * ```
     *
     * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
     * model has multiple inputs.
     * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
     * model has multiple outputs.
     * @param args A `ModelEvaluateConfig`, containing optional fields.
     *
     * @return `Scalar` test loss (if the model has a single output and no
     *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
     *   and/or metrics). The attribute `model.metricsNames`
     *   will give you the display labels for the scalar outputs.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ evaluate(x, y, args = {}) {
        if (!this.built) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"]('The model needs to be compiled before being used.');
        }
        return this.model.evaluate(x, y, args);
    }
    // TODO(cais): Add code snippet below once real dataset objects are
    //   available.
    /**
     * Evaluate model using a dataset object.
     *
     * Note: Unlike `evaluate()`, this method is asynchronous (`async`).
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for evaluation. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g.
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs. Of the two items in the array, the
     *   first is the input feature(s) and the second is the output target(s).
     * @param args A configuration object for the dataset-based evaluation.
     * @returns Loss and metric values as an Array of `Scalar` objects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async evaluateDataset(dataset, args) {
        if (!this.built) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"]('The model needs to be compiled before being used.');
        }
        return this.model.evaluateDataset(dataset, args);
    }
    /**
     * Generates output predictions for the input samples.
     *
     * Computation is done in batches.
     *
     * Note: the "step" mode of predict() is currently not supported.
     *   This is because the TensorFlow.js core backend is imperative only.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predict(tf.ones([2, 10])).print();
     * ```
     *
     * @param x The input data, as a Tensor, or an `Array` of `tf.Tensor`s if
     *   the model has multiple inputs.
     * @param conifg A `ModelPredictConfig` object containing optional fields.
     *
     * @return `tf.Tensor`(s) of predictions.
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and the model's expectations, or in case a stateful model receives a
     *   number of samples that is not a multiple of the batch size.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ predict(x, args = {}) {
        if (this.model == null) {
            this.build();
        }
        return this.model.predict(x, args);
    }
    /**
     * Returns predictions for a single batch of samples.
     *
     * @param x: Input samples, as a Tensor, or list of Tensors (if the model
     *   has multiple inputs).
     * @return Tensor(s) of predictions
     */ predictOnBatch(x) {
        if (this.model == null) {
            this.build();
        }
        return this.model.predictOnBatch(x);
    }
    /**
     * See `LayersModel.compile`.
     *
     * @param args
     */ compile(args) {
        this.build();
        this.model.compile(args);
        this.optimizer_ = this.model.optimizer;
        // tslint:disable-next-line:no-any
        this.isOptimizerOwned = this.model.isOptimizerOwned;
        this.loss = this.model.loss;
        this.metrics = this.model.metrics;
        // TODO(cais): Add this.lossWeights, this.sampleWeightMode,
        //   this.weightedMetrics, this.targets.
        this.metricsTensors = this.model.metricsTensors;
        this.metricsNames = this.model.metricsNames;
    // TODO(cais): Add sampleWeights.
    }
    get optimizer() {
        return this.model == null ? undefined : this.model.optimizer;
    }
    set optimizer(optimizer) {
        this.model.optimizer = optimizer;
    }
    /**
     * Trains the model for a fixed number of epochs (iterations on a dataset).
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const history = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
     *   batchSize: 4,
     *   epochs: 3
     * });
     * console.log(history.history.loss[0]);
     * ```
     *
     * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
     * model has multiple inputs. If all inputs in the model are named, you can
     * also pass a dictionary mapping input names to `tf.Tensor`s.
     * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
     * the model has multiple outputs. If all outputs in the model are named, you
     *  can also pass a dictionary mapping output names to `tf.Tensor`s.
     * @param args  A `ModelFitConfig`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and what the model expects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async fit(x, y, args = {}) {
        if (!this.built) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"]('The model needs to be compiled before ' + 'being used.');
        }
        return this.model.fit(x, y, args);
    }
    /**
     * Trains the model using a dataset object.
     *
     * ```js
     * const xArray = [
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
     * ];
     * const yArray = [1, 1, 1, 1];
     * // Create a dataset from the JavaScript array.
     * const xDataset = tf.data.array(xArray);
     * const yDataset = tf.data.array(yArray);
     * // Zip combines the `x` and `y` Datasets into a single Dataset, the
     * // iterator of which will return an object containing of two tensors,
     * // corresponding to `x` and `y`.  The call to `batch(4)` will bundle
     * // four such samples into a single object, with the same keys now pointing
     * // to tensors that hold 4 examples, organized along the batch dimension.
     * // The call to `shuffle(4)` causes each iteration through the dataset to
     * // happen in a different order.  The size of the shuffle window is 4.
     * const xyDataset = tf.data.zip({xs: xDataset, ys: yDataset})
     *     .batch(4)
     *     .shuffle(4);
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [9]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * const history = await model.fitDataset(xyDataset, {
     *   epochs: 4,
     *   callbacks: {onEpochEnd: (epoch, logs) => console.log(logs.loss)}
     * });
     * ```
     *
     * @param dataset A dataset object. Its `iterator()` method is expected to
     *   generate a dataset iterator object, the `next()` method of which is
     *   expected to produce data batches for evaluation. The return value of the
     *   `next()` call ought to contain a boolean `done` field and a `value`
     *   field.
     *
     *   The `value` field is expected to be an object of with fields
     *   `xs` and `ys`, which point to the feature tensor and the target tensor,
     *   respectively. This case is for models with exactly one input and one
     *   output (e.g. a sequential model). For example:
     *   ```js
     *   {value: {xs: xsTensor, ys: ysTensor}, done: false}
     *   ```
     *
     *   If the model has multiple inputs, the `xs` field of `value` should
     *   be an object mapping input names to their respective feature tensors.
     *   For example:
     *   ```js
     *   {
     *     value: {
     *       xs: {
     *         input_1: xsTensor1,
     *         input_2: xsTensor2
     *       },
     *       ys: ysTensor
     *     },
     *     done: false
     *   }
     *   ```
     *   If the model has multiple outputs, the `ys` field of `value` should
     *   be an object mapping output names to their respective target tensors.
     *   For example:
     *   ```js
     *   {
     *     value: {
     *       xs: xsTensor,
     *       ys: {
     *         output_1: ysTensor1,
     *         output_2: ysTensor2
     *       },
     *     },
     *     done: false
     *   }
     *   ```
     * @param args A `ModelFitDatasetArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
     */ async fitDataset(dataset, args) {
        if (!this.built) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"]('The model needs to be compiled before ' + 'being used.');
        }
        return this.model.fitDataset(dataset, args);
    }
    /**
     * Runs a single gradient update on a single batch of data.
     *
     * This method differs from `fit()` and `fitDataset()` in the following
     * regards:
     *   - It operates on exactly one batch of data.
     *   - It returns only the loss and metric values, instead of
     *     returning the batch-by-batch loss and metric values.
     *   - It doesn't support fine-grained options such as verbosity and
     *     callbacks.
     *
     * @param x Input data. It could be one of the following:
     *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
     *     multiple inputs).
     *   - An Object mapping input names to corresponding `tf.Tensor` (if the
     *     model has named inputs).
     * @param y Target data. It could be either a `tf.Tensor` or multiple
     *   `tf.Tensor`s. It should be consistent with `x`.
     * @returns Training loss or losses (in case the model has
     *   multiple outputs), along with metrics (if any), as numbers.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async trainOnBatch(x, y) {
        return this.model.trainOnBatch(x, y);
    }
    /* See parent class for JsDoc */ /** @nocollapse */ static fromConfig(cls, config, customObjects = {}, fastWeightInit = false) {
        let configArray;
        let extraModelConfig = {};
        if (config instanceof Array) {
            if (!(config[0].className != null) || config[0]['className'] === 'Merge') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Legacy serialization format not supported yet.');
            }
            configArray = config;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(config['layers'] != null, ()=>`When the config data for a Sequential model is not an Array, ` + `it must be an Object that contains the 'layers' field.`);
            configArray = config['layers'];
            delete config['layers'];
            extraModelConfig = config;
        }
        const model = new cls(extraModelConfig);
        if (!(model instanceof Sequential)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"](`Sequential.fromConfig called on non-Sequential input: ${model}`);
        }
        for (const conf of configArray){
            const customObjects = undefined;
            const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(conf, customObjects, fastWeightInit);
            if (fastWeightInit) {
                layer.setFastWeightInitDuringBuild(true);
            }
            model.add(layer);
        }
        return model;
    }
    /**
     * Setter used for force stopping of LayersModel.fit() (i.e., training).
     *
     * Example:
     *
     * ```js
     * const model = tf.sequential();
     * model.add(tf.layers.dense({units: 1, inputShape: [10]}));
     * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
     * const xs = tf.ones([8, 10]);
     * const ys = tf.zeros([8, 1]);
     *
     * const history = await model.fit(xs, ys, {
     *   epochs: 10,
     *   callbacks: {
     *     onEpochEnd: async (epoch, logs) => {
     *       if (epoch === 2) {
     *         model.stopTraining = true;
     *       }
     *     }
     *   }
     * });
     *
     * // There should be only 3 values in the loss array, instead of 10 values,
     * // due to the stopping after 3 epochs.
     * console.log(history.history.loss);
     * ```
     */ set stopTraining(stop) {
        // TODO(cais): When refactoring to remove the composition pattern happens,
        // remove this method overriding.
        if (this.model == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Cannot set the stopTraining property of a sequential model before ' + 'it is compiled.');
        }
        this.model.stopTraining = stop;
    }
    get stopTraining() {
        if (this.model == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Cannot get the stopTraining property of a sequential model before ' + 'it is compiled.');
        }
        return this.model.stopTraining;
    }
    // TODO(cais): Override get trainableWeights() here
    // tslint:disable-next-line:no-any
    getConfig() {
        // NOTE(cais): We override the return type of getConfig() to `any` here,
        //   because the `Sequential` class is a special case among `Container`
        //   subtypes in that its getConfig() method returns an Array (not a
        //   dict).
        const layers = [];
        for (const layer of this.layers){
            const dict = {};
            dict['className'] = layer.getClassName();
            dict['config'] = layer.getConfig();
            layers.push(dict);
        }
        return {
            name: this.name,
            layers
        };
    }
}
/** @nocollapse */ Sequential.className = 'Sequential';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Sequential); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL21vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILHFDQUFxQztBQUVyQyxPQUFPLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBcUMsYUFBYSxFQUFVLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRWxILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUd2QyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBUyxJQUFJLEVBQWlCLE1BQU0sbUJBQW1CLENBQUM7QUFDL0UsT0FBTyxFQUFDLFdBQVcsRUFBc0MsTUFBTSxtQkFBbUIsQ0FBQztBQUduRixPQUFPLEVBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUl2RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxLQUFLLGFBQWEsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsYUFBYSxDQUMvQixxQkFBdUQsRUFDdkQsYUFBd0M7SUFDMUMsSUFBSSxDQUFDLENBQUMsZUFBZSxJQUFJLHFCQUFxQixDQUFDLEVBQUU7UUFDL0MscUJBQXFCLEdBQUcsRUFBQyxhQUFhLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztLQUNoRTtJQUNELHFCQUFxQixHQUFHLHFCQUE4QyxDQUFDO0lBRXZFLElBQUksYUFBYSxHQUFHLHFCQUFx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QyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUNuQyxDQUFDOztBQTFzQkQsa0JBQWtCO0FBQ0Ysb0JBQVMsR0FBRyxZQUFZLENBQUM7U0FGOUIsVUFBVTtBQTZzQnZCLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKiBPcmlnaW5hbCBzb3VyY2Uga2VyYXMvbW9kZWxzLnB5ICovXG5cbmltcG9ydCB7ZGlzcG9zZSwgaW8sIE5hbWVkVGVuc29yTWFwLCBPcHRpbWl6ZXIsIFNjYWxhciwgc2VyaWFsaXphdGlvbiwgVGVuc29yLCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQge2dldFVpZH0gZnJvbSAnLi9iYWNrZW5kL3N0YXRlJztcbmltcG9ydCB7SGlzdG9yeX0gZnJvbSAnLi9iYXNlX2NhbGxiYWNrcyc7XG5pbXBvcnQge0RhdGFzZXR9IGZyb20gJy4vZW5naW5lL2RhdGFzZXRfc3R1Yic7XG5pbXBvcnQge0lucHV0fSBmcm9tICcuL2VuZ2luZS9pbnB1dF9sYXllcic7XG5pbXBvcnQge2dldFNvdXJjZUlucHV0cywgTGF5ZXIsIE5vZGUsIFN5bWJvbGljVGVuc29yfSBmcm9tICcuL2VuZ2luZS90b3BvbG9neSc7XG5pbXBvcnQge0xheWVyc01vZGVsLCBNb2RlbENvbXBpbGVBcmdzLCBNb2RlbEV2YWx1YXRlQXJnc30gZnJvbSAnLi9lbmdpbmUvdHJhaW5pbmcnO1xuaW1wb3J0IHtNb2RlbEV2YWx1YXRlRGF0YXNldEFyZ3MsIE1vZGVsRml0RGF0YXNldEFyZ3N9IGZyb20gJy4vZW5naW5lL3RyYWluaW5nX2RhdGFzZXQnO1xuaW1wb3J0IHtNb2RlbEZpdEFyZ3N9IGZyb20gJy4vZW5naW5lL3RyYWluaW5nX3RlbnNvcnMnO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yLCBSdW50aW1lRXJyb3IsIFZhbHVlRXJyb3J9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7U2hhcGV9IGZyb20gJy4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge1RyYWluaW5nQ29uZmlnfSBmcm9tICcuL2tlcmFzX2Zvcm1hdC90cmFpbmluZ19jb25maWcnO1xuaW1wb3J0IHtQeUpzb25EaWN0fSBmcm9tICcuL2tlcmFzX2Zvcm1hdC90eXBlcyc7XG5pbXBvcnQge2Rlc2VyaWFsaXplfSBmcm9tICcuL2xheWVycy9zZXJpYWxpemF0aW9uJztcbmltcG9ydCB7S3dhcmdzLCBOYW1lZFRlbnNvcn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgKiBhcyBnZW5lcmljX3V0aWxzIGZyb20gJy4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG5pbXBvcnQge2NvbnZlcnRQeXRob25pY1RvVHN9IGZyb20gJy4vdXRpbHMvc2VyaWFsaXphdGlvbl91dGlscyc7XG5pbXBvcnQge2dldEV4YWN0bHlPbmVTaGFwZX0gZnJvbSAnLi91dGlscy90eXBlc191dGlscyc7XG5cbi8qKlxuICogUGFyc2VzIGEgSlNPTiBtb2RlbCBjb25maWd1cmF0aW9uIGZpbGUgYW5kIHJldHVybnMgYSBtb2RlbCBpbnN0YW5jZS5cbiAqXG4gKiBgYGBqc1xuICogLy8gVGhpcyBleGFtcGxlIHNob3dzIGhvdyB0byBzZXJpYWxpemUgYSBtb2RlbCB1c2luZyBgdG9KU09OKClgIGFuZFxuICogLy8gZGVzZXJpYWxpemUgaXQgYXMgYW5vdGhlciBtb2RlbCB1c2luZyBgdGYubW9kZWxzLm1vZGVsRnJvbUpTT04oKWAuXG4gKiAvLyBOb3RlOiB0aGlzIGV4YW1wbGUgc2VyaWFsaXplcyBhbmQgZGVzZXJpYWxpemVzIG9ubHkgdGhlIHRvcG9sb2d5XG4gKiAvLyBvZiB0aGUgbW9kZWw7IHRoZSB3ZWlnaHRzIG9mIHRoZSBsb2FkZWQgbW9kZWwgd2lsbCBiZSBkaWZmZXJlbnRcbiAqIC8vIGZyb20gdGhvc2Ugb2YgdGhlIHRoZSBvcmlnaW5hbCBtb2RlbCwgZHVlIHRvIHJhbmRvbSB3ZWlnaHRcbiAqIC8vIGluaXRpYWxpemF0aW9uLlxuICogLy8gVG8gbG9hZCB0aGUgdG9wb2xvZ3kgYW5kIHdlaWdodHMgb2YgYSBtb2RlbCwgdXNlIGB0Zi5sb2FkTGF5ZXJzTW9kZWwoKWAuXG4gKiBjb25zdCBtb2RlbDEgPSB0Zi5zZXF1ZW50aWFsKCk7XG4gKiBtb2RlbDEuYWRkKHRmLmxheWVycy5yZXBlYXRWZWN0b3Ioe2lucHV0U2hhcGU6IFsyXSwgbjogNH0pKTtcbiAqIC8vIFNlcmlhbGl6ZSBgbW9kZWwxYCBhcyBhIEpTT04gb2JqZWN0LlxuICogY29uc3QgbW9kZWwxSlNPTiA9IG1vZGVsMS50b0pTT04obnVsbCwgZmFsc2UpO1xuICogbW9kZWwxLnN1bW1hcnkoKTtcbiAqXG4gKiBjb25zdCBtb2RlbDIgPSBhd2FpdCB0Zi5tb2RlbHMubW9kZWxGcm9tSlNPTihtb2RlbDFKU09OKTtcbiAqIG1vZGVsMi5zdW1tYXJ5KCk7XG4gKiBgYGBcbiAqXG4gKiAgQHBhcmFtIG1vZGVsQW5kV2VpZ2h0c0NvbmZpZyBKU09OIG9iamVjdCBvciBzdHJpbmcgZW5jb2RpbmcgYSBtb2RlbCBhbmRcbiAqICAgICAgIHdlaWdodHMgY29uZmlndXJhdGlvbi4gSXQgY2FuIGFsc28gYmUgb25seSB0aGUgdG9wb2xvZ3kgSlNPTiBvZiB0aGVcbiAqICAgICAgIG1vZGVsLCBpbiB3aGljaCBjYXNlIHRoZSB3ZWlnaHRzIHdpbGwgbm90IGJlIGxvYWRlZC5cbiAqICBAcGFyYW0gY3VzdG9tX29iamVjdHMgT3B0aW9uYWwgZGljdGlvbmFyeSBtYXBwaW5nIG5hbWVzXG4gKiAgICAgICAoc3RyaW5ncykgdG8gY3VzdG9tIGNsYXNzZXMgb3IgZnVuY3Rpb25zIHRvIGJlXG4gKiAgICAgICBjb25zaWRlcmVkIGR1cmluZyBkZXNlcmlhbGl6YXRpb24uXG4gKiBAcmV0dXJucyBBIFRlbnNvckZsb3cuanMgTGF5ZXJzIGB0Zi5MYXllcnNNb2RlbGAgaW5zdGFuY2UgKHVuY29tcGlsZWQpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9kZWxGcm9tSlNPTihcbiAgICBtb2RlbEFuZFdlaWdodHNDb25maWc6IE1vZGVsQW5kV2VpZ2h0c0NvbmZpZ3xQeUpzb25EaWN0LFxuICAgIGN1c3RvbU9iamVjdHM/OiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QpOiBQcm9taXNlPExheWVyc01vZGVsPiB7XG4gIGlmICghKCdtb2RlbFRvcG9sb2d5JyBpbiBtb2RlbEFuZFdlaWdodHNDb25maWcpKSB7XG4gICAgbW9kZWxBbmRXZWlnaHRzQ29uZmlnID0ge21vZGVsVG9wb2xvZ3k6IG1vZGVsQW5kV2VpZ2h0c0NvbmZpZ307XG4gIH1cbiAgbW9kZWxBbmRXZWlnaHRzQ29uZmlnID0gbW9kZWxBbmRXZWlnaHRzQ29uZmlnIGFzIE1vZGVsQW5kV2VpZ2h0c0NvbmZpZztcblxuICBsZXQgbW9kZWxUb3BvbG9neSA9IG1vZGVsQW5kV2VpZ2h0c0NvbmZpZy5tb2RlbFRvcG9sb2d5O1xuICBpZiAobW9kZWxUb3BvbG9neVsnbW9kZWxfY29uZmlnJ10gIT0gbnVsbCkge1xuICAgIC8vIElmIHRoZSBtb2RlbC10b3BvbG9neSBKU09OIGNvbnRhaW5zIGEgJ21vZGVsX2NvbmZpZycgZmllbGQsIHRoZW4gaXQgaXNcbiAgICAvLyBhIGZ1bGwgbW9kZWwgSlNPTiAoZS5nLiwgZnJvbSBga2VyYXMuTW9kZWwuc2F2ZSgpYCksIHdoaWNoIGNvbnRhaW5zXG4gICAgLy8gbm90IG9ubHkgdGhlIG1vZGVsJ3MgYXJjaGl0ZWN0dXJlIGluIGl0cyAnbW9kZWxfY29uZmlnJyBmaWVsZCwgYnV0XG4gICAgLy8gYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBzdWNoIGFzIHRoZSBtb2RlbCdzIG9wdGltaXplci4gV2UgdXNlIG9ubHkgdGhlXG4gICAgLy8gJ21vZGVsX2NvbmZpZycgZmllbGQgY3VycmVudGx5LlxuICAgIG1vZGVsVG9wb2xvZ3kgPSBtb2RlbFRvcG9sb2d5Wydtb2RlbF9jb25maWcnXSBhcyBQeUpzb25EaWN0O1xuICB9XG4gIGNvbnN0IHRzQ29uZmlnID1cbiAgICAgIGNvbnZlcnRQeXRob25pY1RvVHMobW9kZWxUb3BvbG9neSkgYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0O1xuICBjb25zdCBtb2RlbCA9IGRlc2VyaWFsaXplKHRzQ29uZmlnLCBjdXN0b21PYmplY3RzKSBhcyBMYXllcnNNb2RlbDtcblxuICBpZiAobW9kZWxBbmRXZWlnaHRzQ29uZmlnLndlaWdodHNNYW5pZmVzdCAhPSBudWxsKSB7XG4gICAgLy8gTG9hZCB0aGUgd2VpZ2h0IHZhbHVlcyBrZXllZCBieSB0aGUgb3JpZ2luYWwgdGVuc29yIG5hbWVzIGluIHRoZSBtb2RlbFxuICAgIC8vIGZpbGUgdGhhdCB3YXMgbG9hZGVkLiAgVGhlc2Ugc2hvdWxkIG1hdGNoIHRoZSBrZXlzIG9mIHRoZSB3ZWlnaHRcbiAgICAvLyBtYW5pZmVzdC5cbiAgICBjb25zdCB3ZWlnaHRWYWx1ZXMgPSBhd2FpdCBpby5sb2FkV2VpZ2h0cyhcbiAgICAgICAgbW9kZWxBbmRXZWlnaHRzQ29uZmlnLndlaWdodHNNYW5pZmVzdCwgbW9kZWxBbmRXZWlnaHRzQ29uZmlnLnBhdGhQcmVmaXgsXG4gICAgICAgIG1vZGVsLndlaWdodHMubWFwKHdlaWdodCA9PiB3ZWlnaHQub3JpZ2luYWxOYW1lKSk7XG5cbiAgICAvLyBNYXAgdGhlIHdlaWdodHMgdG8gdGhlIHVuaXF1ZSB0ZW5zb3IgbmFtZXMgZ2VuZXJhdGVkIGR1cmluZyBtb2RlbCBsb2FkaW5nXG4gICAgY29uc3QgdW5pcXVlV2VpZ2h0VmFsdWVzOiBOYW1lZFRlbnNvck1hcCA9IHt9O1xuICAgIGZvciAoY29uc3Qgd2VpZ2h0IG9mIG1vZGVsLndlaWdodHMpIHtcbiAgICAgIHVuaXF1ZVdlaWdodFZhbHVlc1t3ZWlnaHQub3JpZ2luYWxOYW1lXSA9XG4gICAgICAgICAgd2VpZ2h0VmFsdWVzW3dlaWdodC5vcmlnaW5hbE5hbWVdO1xuICAgIH1cblxuICAgIG1vZGVsLmxvYWRXZWlnaHRzKHVuaXF1ZVdlaWdodFZhbHVlcyk7XG4gICAgLy8gRGlzcG9zZSB0ZW1wb3Jhcnkgd2VpZ2h0IHZhbHVlcy5cbiAgICBkaXNwb3NlKHdlaWdodFZhbHVlcyk7XG4gIH1cbiAgcmV0dXJuIG1vZGVsO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGxvYWRpbmcgYSBzYXZlZCBtb2RlIGluIFRlbnNvckZsb3cuanMgZm9ybWF0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vZGVsQW5kV2VpZ2h0c0NvbmZpZyB7XG4gIC8qKlxuICAgKiBBIEpTT04gb2JqZWN0IG9yIEpTT04gc3RyaW5nIGNvbnRhaW5pbmcgdGhlIG1vZGVsIGNvbmZpZy5cbiAgICpcbiAgICogVGhpcyBjYW4gYmUgZWl0aGVyIG9mIHRoZSBmb2xsb3dpbmcgdHdvIGZvcm1hdHM6XG4gICAqICAgLSBBIG1vZGVsIGFyY2hpZWN0dXJlLW9ubHkgY29uZmlnLCAgaS5lLiwgYSBmb3JtYXQgY29uc2lzdGVudCB3aXRoIHRoZVxuICAgKiAgICAgcmV0dXJuIHZhbHVlIG9mYGtlcmFzLk1vZGVsLnRvX2pzb24oKWAuXG4gICAqICAgLSBBIGZ1bGwgbW9kZWwgY29uZmlnLCBjb250YWluaW5nIG5vdCBvbmx5IG1vZGVsIGFyY2hpdGVjdHVyZSwgYnV0IGFsc29cbiAgICogICAgIHRyYWluaW5nIG9wdGlvbnMgYW5kIHN0YXRlLCBpLmUuLCBhIGZvcm1hdCBjb25zaXN0ZW50IHdpdGggdGhlIHJldHVyblxuICAgKiAgICAgdmFsdWUgb2YgYGtlcmFzLm1vZGVscy5zYXZlX21vZGVsKClgLlxuICAgKi9cbiAgbW9kZWxUb3BvbG9neTogUHlKc29uRGljdDtcblxuICAvKipcbiAgICogQSB3ZWlnaHRzIG1hbmlmZXN0IGluIFRlbnNvckZsb3cuanMgZm9ybWF0LlxuICAgKi9cbiAgd2VpZ2h0c01hbmlmZXN0PzogaW8uV2VpZ2h0c01hbmlmZXN0Q29uZmlnO1xuXG4gIC8qKlxuICAgKiBQYXRoIHRvIHByZXBlbmQgdG8gdGhlIHBhdGhzIGluIGB3ZWlnaHRNYW5pZmVzdGAgYmVmb3JlIGZldGNoaW5nLlxuICAgKlxuICAgKiBUaGUgcGF0aCBtYXkgb3B0aW9uYWxseSBlbmQgaW4gYSBzbGFzaCAoJy8nKS5cbiAgICovXG4gIHBhdGhQcmVmaXg/OiBzdHJpbmc7XG59XG5cbi8vIFRPRE8obmllbHNlbmUpOiBSZW1vdmUgYWZ0ZXI6IGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMvaXNzdWVzLzQwMFxuZXhwb3J0IGludGVyZmFjZSBNb2RlbFByZWRpY3RBcmdzIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsLiBCYXRjaCBzaXplIChJbnRlZ2VyKS4gSWYgdW5zcGVjaWZpZWQsIGl0IHdpbGwgZGVmYXVsdCB0byAzMi5cbiAgICovXG4gIGJhdGNoU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogT3B0aW9uYWwuIFZlcmJvc2l0eSBtb2RlLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIHZlcmJvc2U/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIExvYWQgYSBtb2RlbCBjb21wb3NlZCBvZiBMYXllciBvYmplY3RzLCBpbmNsdWRpbmcgaXRzIHRvcG9sb2d5IGFuZCBvcHRpb25hbGx5XG4gKiB3ZWlnaHRzLiBTZWUgdGhlIFR1dG9yaWFsIG5hbWVkIFwiSG93IHRvIGltcG9ydCBhIEtlcmFzIE1vZGVsXCIgZm9yIHVzYWdlXG4gKiBleGFtcGxlcy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBhcHBsaWNhYmxlIHRvOlxuICpcbiAqIDEuIE1vZGVscyBjcmVhdGVkIHdpdGggdGhlIGB0Zi5sYXllcnMuKmAsIGB0Zi5zZXF1ZW50aWFsYCwgYW5kXG4gKiBgdGYubW9kZWxgIEFQSXMgb2YgVGVuc29yRmxvdy5qcyBhbmQgbGF0ZXIgc2F2ZWQgd2l0aCB0aGVcbiAqIGB0Zi5MYXllcnNNb2RlbC5zYXZlYCBtZXRob2QuXG4gKiAyLiBNb2RlbHMgY29udmVydGVkIGZyb20gS2VyYXMgb3IgVGVuc29yRmxvdyB0Zi5rZXJhcyB1c2luZyB0aGVcbiAqIFt0ZW5zb3JmbG93anNfY29udmVydGVyXShodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzL3RyZWUvbWFzdGVyL3RmanMtY29udmVydGVyKS5cbiAqXG4gKiBUaGlzIG1vZGUgaXMgKm5vdCogYXBwbGljYWJsZSB0byBUZW5zb3JGbG93IGBTYXZlZE1vZGVsYHMgb3IgdGhlaXIgY29udmVydGVkXG4gKiBmb3Jtcy4gRm9yIHRob3NlIG1vZGVscywgdXNlIGB0Zi5sb2FkR3JhcGhNb2RlbGAuXG4gKlxuICogRXhhbXBsZSAxLiBMb2FkIGEgbW9kZWwgZnJvbSBhbiBIVFRQIHNlcnZlci5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW9kZWwgPSBhd2FpdCB0Zi5sb2FkTGF5ZXJzTW9kZWwoXG4gKiAgICAgJ2h0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS90ZmpzLW1vZGVscy90ZmpzL2lyaXNfdjEvbW9kZWwuanNvbicpO1xuICogbW9kZWwuc3VtbWFyeSgpO1xuICogYGBgXG4gKlxuICogRXhhbXBsZSAyOiBTYXZlIGBtb2RlbGAncyB0b3BvbG9neSBhbmQgd2VpZ2h0cyB0byBicm93c2VyIFtsb2NhbFxuICogc3RvcmFnZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9sb2NhbFN0b3JhZ2UpO1xuICogdGhlbiBsb2FkIGl0IGJhY2suXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1vZGVsID0gdGYuc2VxdWVudGlhbChcbiAqICAgICB7bGF5ZXJzOiBbdGYubGF5ZXJzLmRlbnNlKHt1bml0czogMSwgaW5wdXRTaGFwZTogWzNdfSldfSk7XG4gKiBjb25zb2xlLmxvZygnUHJlZGljdGlvbiBmcm9tIG9yaWdpbmFsIG1vZGVsOicpO1xuICogbW9kZWwucHJlZGljdCh0Zi5vbmVzKFsxLCAzXSkpLnByaW50KCk7XG4gKlxuICogY29uc3Qgc2F2ZVJlc3VsdHMgPSBhd2FpdCBtb2RlbC5zYXZlKCdsb2NhbHN0b3JhZ2U6Ly9teS1tb2RlbC0xJyk7XG4gKlxuICogY29uc3QgbG9hZGVkTW9kZWwgPSBhd2FpdCB0Zi5sb2FkTGF5ZXJzTW9kZWwoJ2xvY2Fsc3RvcmFnZTovL215LW1vZGVsLTEnKTtcbiAqIGNvbnNvbGUubG9nKCdQcmVkaWN0aW9uIGZyb20gbG9hZGVkIG1vZGVsOicpO1xuICogbG9hZGVkTW9kZWwucHJlZGljdCh0Zi5vbmVzKFsxLCAzXSkpLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBFeGFtcGxlIDMuIFNhdmluZyBgbW9kZWxgJ3MgdG9wb2xvZ3kgYW5kIHdlaWdodHMgdG8gYnJvd3NlclxuICogW0luZGV4ZWREQl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0luZGV4ZWREQl9BUEkpO1xuICogdGhlbiBsb2FkIGl0IGJhY2suXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1vZGVsID0gdGYuc2VxdWVudGlhbChcbiAqICAgICB7bGF5ZXJzOiBbdGYubGF5ZXJzLmRlbnNlKHt1bml0czogMSwgaW5wdXRTaGFwZTogWzNdfSldfSk7XG4gKiBjb25zb2xlLmxvZygnUHJlZGljdGlvbiBmcm9tIG9yaWdpbmFsIG1vZGVsOicpO1xuICogbW9kZWwucHJlZGljdCh0Zi5vbmVzKFsxLCAzXSkpLnByaW50KCk7XG4gKlxuICogY29uc3Qgc2F2ZVJlc3VsdHMgPSBhd2FpdCBtb2RlbC5zYXZlKCdpbmRleGVkZGI6Ly9teS1tb2RlbC0xJyk7XG4gKlxuICogY29uc3QgbG9hZGVkTW9kZWwgPSBhd2FpdCB0Zi5sb2FkTGF5ZXJzTW9kZWwoJ2luZGV4ZWRkYjovL215LW1vZGVsLTEnKTtcbiAqIGNvbnNvbGUubG9nKCdQcmVkaWN0aW9uIGZyb20gbG9hZGVkIG1vZGVsOicpO1xuICogbG9hZGVkTW9kZWwucHJlZGljdCh0Zi5vbmVzKFsxLCAzXSkpLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBFeGFtcGxlIDQuIExvYWQgYSBtb2RlbCBmcm9tIHVzZXItc2VsZWN0ZWQgZmlsZXMgZnJvbSBIVE1MXG4gKiBbZmlsZSBpbnB1dFxuICogZWxlbWVudHNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dC9maWxlKS5cbiAqXG4gKiBgYGBqc1xuICogLy8gTm90ZTogdGhpcyBjb2RlIHNuaXBwZXQgd2lsbCBub3Qgd29yayB3aXRob3V0IHRoZSBIVE1MIGVsZW1lbnRzIGluIHRoZVxuICogLy8gICBwYWdlXG4gKiBjb25zdCBqc29uVXBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzb24tdXBsb2FkJyk7XG4gKiBjb25zdCB3ZWlnaHRzVXBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodHMtdXBsb2FkJyk7XG4gKlxuICogY29uc3QgbW9kZWwgPSBhd2FpdCB0Zi5sb2FkTGF5ZXJzTW9kZWwoXG4gKiAgICAgdGYuaW8uYnJvd3NlckZpbGVzKFtqc29uVXBsb2FkLmZpbGVzWzBdLCB3ZWlnaHRzVXBsb2FkLmZpbGVzWzBdXSkpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHBhdGhPcklPSGFuZGxlciBDYW4gYmUgZWl0aGVyIG9mIHRoZSB0d28gZm9ybWF0c1xuICogICAxLiBBIHN0cmluZyBwYXRoIHRvIHRoZSBgTW9kZWxBbmRXZWlnaHRzQ29uZmlnYCBKU09OIGRlc2NyaWJpbmdcbiAqICAgICAgdGhlIG1vZGVsIGluIHRoZSBjYW5vbmljYWwgVGVuc29yRmxvdy5qcyBmb3JtYXQuIEZvciBmaWxlOi8vXG4gKiAgICAgICh0ZmpzLW5vZGUtb25seSksIGh0dHA6Ly8gYW5kIGh0dHBzOi8vIHNjaGVtYXMsIHRoZSBwYXRoIGNhbiBiZVxuICogICAgICBlaXRoZXIgYWJzb2x1dGUgb3IgcmVsYXRpdmUuIFRoZSBjb250ZW50IG9mIHRoZSBKU09OIGZpbGUgaXMgYXNzdW1lZCB0b1xuICogICAgICBiZSBhIEpTT04gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHMgYW5kIHZhbHVlczpcbiAqICAgICAgLSAnbW9kZWxUb3BvbG9neSc6IEEgSlNPTiBvYmplY3QgdGhhdCBjYW4gYmUgZWl0aGVyIG9mOlxuICogICAgICAgIDEuIGEgbW9kZWwgYXJjaGl0ZWN0dXJlIEpTT04gY29uc2lzdGVudCB3aXRoIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVyblxuICogICAgICAgICAgICB2YWx1ZSBvZiBga2VyYXMuTW9kZWwudG9fanNvbigpYFxuICogICAgICAgIDIuIGEgZnVsbCBtb2RlbCBKU09OIGluIHRoZSBmb3JtYXQgb2YgYGtlcmFzLm1vZGVscy5zYXZlX21vZGVsKClgLlxuICogICAgICAtICd3ZWlnaHRzTWFuaWZlc3QnOiBBIFRlbnNvckZsb3cuanMgd2VpZ2h0cyBtYW5pZmVzdC5cbiAqICAgICAgU2VlIHRoZSBQeXRob24gY29udmVydGVyIGZ1bmN0aW9uIGBzYXZlX21vZGVsKClgIGZvciBtb3JlIGRldGFpbHMuXG4gKiAgICAgIEl0IGlzIGFsc28gYXNzdW1lZCB0aGF0IG1vZGVsIHdlaWdodHMgY2FuIGJlIGFjY2Vzc2VkIGZyb20gcmVsYXRpdmVcbiAqICAgICAgcGF0aHMgZGVzY3JpYmVkIGJ5IHRoZSBgcGF0aHNgIGZpZWxkcyBpbiB3ZWlnaHRzIG1hbmlmZXN0LlxuICogICAyLiBBIGB0Zi5pby5JT0hhbmRsZXJgIG9iamVjdCB0aGF0IGxvYWRzIG1vZGVsIGFydGlmYWN0cyB3aXRoIGl0cyBgbG9hZGBcbiAqICAgICAgbWV0aG9kLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgY29uZmlndXJhdGlvbiBhcmd1bWVudHMgZm9yIHRoZSBtb2RlbCBsb2FkaW5nLFxuICogICBpbmNsdWRpbmc6XG4gKiAgIC0gYHN0cmljdGA6IFJlcXVpcmUgdGhhdCB0aGUgcHJvdmlkZWQgd2VpZ2h0cyBleGFjdGx5IG1hdGNoIHRob3NlIHJlcXVpcmVkXG4gKiAgICAgYnkgdGhlIGxheWVycy4gIERlZmF1bHQgdHJ1ZS4gIFBhc3NpbmcgZmFsc2UgbWVhbnMgdGhhdCBib3RoIGV4dHJhXG4gKiAgICAgd2VpZ2h0cyBhbmQgbWlzc2luZyB3ZWlnaHRzIHdpbGwgYmUgc2lsZW50bHkgaWdub3JlZC5cbiAqICAgLSBgb25Qcm9ncmVzc2A6IEEgcHJvZ3Jlc3MgY2FsbGJhY2sgb2YgdGhlIGZvcm06XG4gKiAgICAgYChmcmFjdGlvbjogbnVtYmVyKSA9PiB2b2lkYC4gVGhpcyBjYWxsYmFjayBjYW4gYmUgdXNlZCB0byBtb25pdG9yIHRoZVxuICogICAgIG1vZGVsLWxvYWRpbmcgcHJvY2Vzcy5cbiAqIEByZXR1cm5zIEEgYFByb21pc2VgIG9mIGB0Zi5MYXllcnNNb2RlbGAsIHdpdGggdGhlIHRvcG9sb2d5IGFuZCB3ZWlnaHRzXG4gKiAgICAgbG9hZGVkLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnTG9hZGluZyd9XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTGF5ZXJzTW9kZWwoXG4gICAgcGF0aE9ySU9IYW5kbGVyOiBzdHJpbmd8aW8uSU9IYW5kbGVyLFxuICAgIG9wdGlvbnM/OiBpby5Mb2FkT3B0aW9ucyk6IFByb21pc2U8TGF5ZXJzTW9kZWw+IHtcbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAodHlwZW9mIHBhdGhPcklPSGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IGlvLmdldExvYWRIYW5kbGVycyhwYXRoT3JJT0hhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5OiBpZiBubyBsb2FkIGhhbmRsZXIgY2FuIGJlIGZvdW5kLFxuICAgICAgLy8gYXNzdW1lIGl0IGlzIGEgcmVsYXRpdmUgaHR0cCBwYXRoLlxuICAgICAgLy8gVE9ETyhjYWlzKTogUmVmb3JtYXQgdGhlIGFyZ3MgaW50byBhIHNpbmdsZSBgTG9hZE9wdGlvbnNgIG9uY2UgdGhlIGNvcmVcbiAgICAgIC8vIGlzIHJlZmFjdG9yZWQuXG4gICAgICBoYW5kbGVycy5wdXNoKGlvLmJyb3dzZXJIVFRQUmVxdWVzdChwYXRoT3JJT0hhbmRsZXIsIG9wdGlvbnMpKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBGb3VuZCBtb3JlIHRoYW4gb25lICgke2hhbmRsZXJzLmxlbmd0aH0pIGxvYWQgaGFuZGxlcnMgZm9yIGAgK1xuICAgICAgICAgIGBVUkwgJyR7cGF0aE9ySU9IYW5kbGVyfSdgKTtcbiAgICB9XG4gICAgcGF0aE9ySU9IYW5kbGVyID0gaGFuZGxlcnNbMF07XG4gIH1cbiAgcmV0dXJuIGxvYWRMYXllcnNNb2RlbEZyb21JT0hhbmRsZXIocGF0aE9ySU9IYW5kbGVyLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIExvYWQgYSBtb2RlbCBhbmQgb3B0aW9uYWxseSBpdHMgd2VpZ2h0cywgdXNpbmcgYW4gSU9IYW5kbGVyIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gaGFuZGxlciBUaGUgaW5zdGFuY2Ugb2YgYElPSGFuZGxlcmAgdG8gYmUgdXNlZCBkdXJpbmcgdGhlIG1vZGVsXG4gKiAgIGxvYWRpbmcuXG4gKiBAcGFyYW0gY3VzdG9tT2JqZWN0cyBBbnkgb3B0aW9uYWwgY3VzdG9tIG9iamVjdHMgdG8gYmUgdXNlZCBkdXJpbmcgbW9kZWxcbiAqICAgbG9hZGluZy5cbiAqIEBwYXJhbSBzdHJpY3QgV2hldGhlciB0aGUgd2VpZ2h0IGxvYWRpbmcgd2lsbCBiZSBkb25lIGluIHN0cmljdCBtb2RlLlxuICogICBEZWZhdWx0OiBgdHJ1ZWAuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkTGF5ZXJzTW9kZWxGcm9tSU9IYW5kbGVyKFxuICAgIGhhbmRsZXI6IGlvLklPSGFuZGxlciwgY3VzdG9tT2JqZWN0cz86IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICBvcHRpb25zPzogaW8uTG9hZE9wdGlvbnMpOiBQcm9taXNlPExheWVyc01vZGVsPiB7XG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKGhhbmRsZXIubG9hZCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcHJvY2VlZCB3aXRoIG1vZGVsIGxvYWRpbmcgYmVjYXVzZSB0aGUgSU9IYW5kbGVyIHByb3ZpZGVkICcgK1xuICAgICAgICAnZG9lcyBub3QgaGF2ZSB0aGUgYGxvYWRgIG1ldGhvZCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuICBjb25zdCBhcnRpZmFjdHMgPSBhd2FpdCBoYW5kbGVyLmxvYWQoKTtcbiAgbGV0IG1vZGVsVG9wb2xvZ3kgPSBhcnRpZmFjdHMubW9kZWxUb3BvbG9neSBhcyBQeUpzb25EaWN0O1xuICBpZiAobW9kZWxUb3BvbG9neVsnbW9kZWxfY29uZmlnJ10gIT0gbnVsbCkge1xuICAgIG1vZGVsVG9wb2xvZ3kgPSBtb2RlbFRvcG9sb2d5Wydtb2RlbF9jb25maWcnXSBhcyBQeUpzb25EaWN0O1xuICB9XG5cbiAgY29uc3Qgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3QgPT0gbnVsbCA/IHRydWUgOiBvcHRpb25zLnN0cmljdDtcbiAgLy8gSWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgYW5kIHRoZSB3ZWlnaHQtbG9hZGluZyBtb2RlIGlzIHN0cmljdCwgdXNlXG4gIC8vIGZhc3Qgd2VpZ2h0IGluaXRpYWxpemF0aW9uLiBUaGlzIHNraXBzIGNvc3RseSBpbml0aWFsaXplcnMgc3VjaCBhc1xuICAvLyAnb3J0aG9nb25hbCcgYW5kIHNhdmVzIHVubmVjZXNzYXJ5IGNvbXB1dGF0aW9uIGluIGNhc2VzIHdoZXJlXG4gIC8vIHRoZSBpbml0aWFsaXplZCB3ZWlnaHQgdmFsdWVzIHdpbGwgaW1tZWRpYXRlbHkgYmUgb3ZlcndyaXR0ZW4gYnlcbiAgLy8gbG9hZGVkIHdlaWdodCB2YWx1ZXMuXG4gIGNvbnN0IGZhc3RXZWlnaHRJbml0ID1cbiAgICAgIGFydGlmYWN0cy53ZWlnaHREYXRhICE9IG51bGwgJiYgYXJ0aWZhY3RzLndlaWdodFNwZWNzICE9IG51bGwgJiYgc3RyaWN0O1xuICBjb25zdCBtb2RlbCA9XG4gICAgICBkZXNlcmlhbGl6ZShcbiAgICAgICAgICBjb252ZXJ0UHl0aG9uaWNUb1RzKG1vZGVsVG9wb2xvZ3kpIGFzIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICAgICAgICBjdXN0b21PYmplY3RzLCBmYXN0V2VpZ2h0SW5pdCkgYXMgTGF5ZXJzTW9kZWw7XG5cbiAgY29uc3QgdHJhaW5pbmdDb25maWcgPSBhcnRpZmFjdHMudHJhaW5pbmdDb25maWcgYXMgVHJhaW5pbmdDb25maWc7XG4gIGlmICh0cmFpbmluZ0NvbmZpZyAhPSBudWxsKSB7XG4gICAgbW9kZWwubG9hZFRyYWluaW5nQ29uZmlnKHRyYWluaW5nQ29uZmlnKTtcbiAgfVxuICBpZiAoYXJ0aWZhY3RzLnVzZXJEZWZpbmVkTWV0YWRhdGEgIT0gbnVsbCkge1xuICAgIG1vZGVsLnNldFVzZXJEZWZpbmVkTWV0YWRhdGEoYXJ0aWZhY3RzLnVzZXJEZWZpbmVkTWV0YWRhdGEpO1xuICB9XG5cbiAgLy8gSWYgd2VpZ2h0RGF0YSBpcyBwcmVzZW50LCBsb2FkIHRoZSB3ZWlnaHRzIGludG8gdGhlIG1vZGVsLlxuICBpZiAoYXJ0aWZhY3RzLndlaWdodERhdGEgIT0gbnVsbCkge1xuICAgIC8vIExvYWRpbmcgd2VpZ2h0cyByZXF1aXJlcyB3ZWlnaHRTcGVjcy5cbiAgICBpZiAoYXJ0aWZhY3RzLndlaWdodFNwZWNzID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICdMYXllcnNNb2RlbCBhcnRpZmFjdHMgY29udGFpbnMgd2VpZ2h0IGRhdGEsIGJ1dCBub3Qgd2VpZ2h0IHNwZWNzLiAnICtcbiAgICAgICAgICAnVGhlcmVmb3JlIGxvYWRpbmcgb2Ygd2VpZ2h0cyBjYW5ub3QgcHJvY2VlZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB7bW9kZWxXZWlnaHRzLCBvcHRpbWl6ZXJXZWlnaHRzfSA9IGRlY29kZU1vZGVsQW5kT3B0aW1pemVyV2VpZ2h0cyhcbiAgICAgICAgYXJ0aWZhY3RzLndlaWdodERhdGEsIGFydGlmYWN0cy53ZWlnaHRTcGVjcyk7XG4gICAgbW9kZWwubG9hZFdlaWdodHMobW9kZWxXZWlnaHRzLCBzdHJpY3QpO1xuXG4gICAgaWYgKG1vZGVsLm9wdGltaXplciAhPSBudWxsICYmIG9wdGltaXplcldlaWdodHMubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgbW9kZWwub3B0aW1pemVyLnNldFdlaWdodHMob3B0aW1pemVyV2VpZ2h0cyk7XG4gICAgfVxuXG4gICAgLy8gRGlzcG9zZSB0ZW1wb3Jhcnkgd2VpZ2h0IHZhbHVlcy5cbiAgICBkaXNwb3NlKG1vZGVsV2VpZ2h0cyk7XG4gICAgZGlzcG9zZShvcHRpbWl6ZXJXZWlnaHRzLm1hcCh3ID0+IHcudGVuc29yKSk7XG4gIH1cbiAgcmV0dXJuIG1vZGVsO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVNb2RlbEFuZE9wdGltaXplcldlaWdodHMoXG4gICAgd2VpZ2h0RGF0YTogaW8uV2VpZ2h0RGF0YSwgc3BlY3M6IGlvLldlaWdodHNNYW5pZmVzdEVudHJ5W10pOlxuICAgIHttb2RlbFdlaWdodHM6IE5hbWVkVGVuc29yTWFwLCBvcHRpbWl6ZXJXZWlnaHRzOiBOYW1lZFRlbnNvcltdfSB7XG4gIGNvbnN0IG5hbWUyVGVuc29yID0gaW8uZGVjb2RlV2VpZ2h0cyh3ZWlnaHREYXRhLCBzcGVjcyk7XG4gIGNvbnN0IG1vZGVsV2VpZ2h0czogTmFtZWRUZW5zb3JNYXAgPSB7fTtcbiAgY29uc3Qgb3B0aW1pemVyV2VpZ2h0czogTmFtZWRUZW5zb3JbXSA9IFtdO1xuICBzcGVjcy5mb3JFYWNoKHNwZWMgPT4ge1xuICAgIGlmIChzcGVjLmdyb3VwID09PSAnb3B0aW1pemVyJykge1xuICAgICAgb3B0aW1pemVyV2VpZ2h0cy5wdXNoKHtuYW1lOiBzcGVjLm5hbWUsIHRlbnNvcjogbmFtZTJUZW5zb3Jbc3BlYy5uYW1lXX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb2RlbFdlaWdodHNbc3BlYy5uYW1lXSA9IG5hbWUyVGVuc29yW3NwZWMubmFtZV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHttb2RlbFdlaWdodHMsIG9wdGltaXplcldlaWdodHN9O1xufVxuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGEgU2VxdWVudGlhbCBtb2RlbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXF1ZW50aWFsQXJncyB7XG4gIC8qKiBTdGFjayBvZiBsYXllcnMgZm9yIHRoZSBtb2RlbC4gKi9cbiAgbGF5ZXJzPzogTGF5ZXJbXTtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhpcyBtb2RlbC4gKi9cbiAgbmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIG1vZGVsIHdpdGggYSBzdGFjayBvZiBsYXllcnMsIGZlZWRpbmcgbGluZWFybHkgZnJvbSBvbmUgdG8gdGhlIG5leHQuXG4gKlxuICogYHRmLnNlcXVlbnRpYWxgIGlzIGEgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2ZcbiAqIGB0Zi5TZXF1ZW50aWFsYC5cbiAqXG4gKiBgYGBqc1xuICogIC8vIERlZmluZSBhIG1vZGVsIGZvciBsaW5lYXIgcmVncmVzc2lvbi5cbiAqICBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoKTtcbiAqICBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czogMSwgaW5wdXRTaGFwZTogWzFdfSkpO1xuICpcbiAqICAvLyBQcmVwYXJlIHRoZSBtb2RlbCBmb3IgdHJhaW5pbmc6IFNwZWNpZnkgdGhlIGxvc3MgYW5kIHRoZSBvcHRpbWl6ZXIuXG4gKiAgbW9kZWwuY29tcGlsZSh7bG9zczogJ21lYW5TcXVhcmVkRXJyb3InLCBvcHRpbWl6ZXI6ICdzZ2QnfSk7XG4gKlxuICogIC8vIEdlbmVyYXRlIHNvbWUgc3ludGhldGljIGRhdGEgZm9yIHRyYWluaW5nLlxuICogIGNvbnN0IHhzID0gdGYudGVuc29yMmQoWzEsIDIsIDMsIDRdLCBbNCwgMV0pO1xuICogIGNvbnN0IHlzID0gdGYudGVuc29yMmQoWzEsIDMsIDUsIDddLCBbNCwgMV0pO1xuICpcbiAqICAvLyBUcmFpbiB0aGUgbW9kZWwgdXNpbmcgdGhlIGRhdGEgdGhlbiBkbyBpbmZlcmVuY2Ugb24gYSBkYXRhIHBvaW50IHRoZVxuICogIC8vIG1vZGVsIGhhc24ndCBzZWVuOlxuICogIGF3YWl0IG1vZGVsLmZpdCh4cywgeXMpO1xuICogIG1vZGVsLnByZWRpY3QodGYudGVuc29yMmQoWzVdLCBbMSwgMV0pKS5wcmludCgpO1xuICogYGBgXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcXVlbnRpYWwgZXh0ZW5kcyBMYXllcnNNb2RlbCB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgb3ZlcnJpZGUgY2xhc3NOYW1lID0gJ1NlcXVlbnRpYWwnO1xuICBwcml2YXRlIG1vZGVsOiBMYXllcnNNb2RlbDtcbiAgY29uc3RydWN0b3IoYXJncz86IFNlcXVlbnRpYWxBcmdzKSB7XG4gICAgc3VwZXIoe2lucHV0czogW10sIG91dHB1dHM6IFtdfSk7XG4gICAgYXJncyA9IGFyZ3MgfHwge307XG5cbiAgICB0aGlzLnRyYWluYWJsZSA9IHRydWU7XG4gICAgdGhpcy5idWlsdCA9IGZhbHNlO1xuXG4gICAgLy8gU2V0IG1vZGVsIG5hbWUuXG4gICAgdGhpcy5uYW1lID0gKGFyZ3MubmFtZSAhPSBudWxsKSA/IGFyZ3MubmFtZSA6IGdldFVpZCgnc2VxdWVudGlhbF8nKTtcblxuICAgIC8vIEFkZCB0byB0aGUgbW9kZWwgYW55IGxheWVycyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgIGlmIChhcmdzLmxheWVycyAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGFyZ3MubGF5ZXJzKSB7XG4gICAgICAgIHRoaXMuYWRkKGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gU2VxdWVudGlhbC5hZGQgIFRocm93cyBpZiB0aGUgbmV3IG91dHB1dCBzaGFwZSB3aWxsIGJlXG4gIC8vIGludmFsaWQuXG4gIHByaXZhdGUgY2hlY2tTaGFwZShsYXllcjogTGF5ZXIpIHtcbiAgICBjb25zdCBzaGFwZSA9IGxheWVyLmluYm91bmROb2Rlc1swXS5vdXRwdXRUZW5zb3JzWzBdLnNoYXBlO1xuICAgIGlmIChzaGFwZS5zb21lKHggPT4geCA8IDApKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnTmVnYXRpdmUgZGltZW5zaW9uIHNpemUgY2F1c2VkIGJ5IGFkZGluZyBsYXllciAnICtcbiAgICAgICAgICBgJHtsYXllci5uYW1lfSB3aXRoIGlucHV0IHNoYXBlIFtgICtcbiAgICAgICAgICBgJHtsYXllci5pbmJvdW5kTm9kZXNbMF0uaW5wdXRUZW5zb3JzWzBdLnNoYXBlfV1gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxheWVyIGluc3RhbmNlIG9uIHRvcCBvZiB0aGUgbGF5ZXIgc3RhY2suXG4gICAqXG4gICAqIGBgYGpzXG4gICAqICBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoKTtcbiAgICogIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiA4LCBpbnB1dFNoYXBlOiBbMV19KSk7XG4gICAqICBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czogNCwgYWN0aXZhdGlvbjogJ3JlbHU2J30pKTtcbiAgICogIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBhY3RpdmF0aW9uOiAncmVsdTYnfSkpO1xuICAgKiAgLy8gTm90ZSB0aGF0IHRoZSB1bnRyYWluZWQgbW9kZWwgaXMgcmFuZG9tIGF0IHRoaXMgcG9pbnQuXG4gICAqICBtb2RlbC5wcmVkaWN0KHRmLnJhbmRvbU5vcm1hbChbMTAsIDFdKSkucHJpbnQoKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSBsYXllciBMYXllciBpbnN0YW5jZS5cbiAgICpcbiAgICogQGV4Y2VwdGlvbiBWYWx1ZUVycm9yIEluIGNhc2UgdGhlIGBsYXllcmAgYXJndW1lbnQgZG9lcyBub3Qga25vdyBpdHNcbiAgICogaW5wdXQgc2hhcGUuXG4gICAqIEBleGNlcHRpb24gVmFsdWVFcnJvciBJbiBjYXNlIHRoZSBgbGF5ZXJgIGFyZ3VtZW50IGhhcyBtdWx0aXBsZSBvdXRwdXRcbiAgICogICB0ZW5zb3JzLCBvciBpcyBhbHJlYWR5IGNvbm5lY3RlZCBzb21ld2hlcmUgZWxzZSAoZm9yYmlkZGVuIGluXG4gICAqICAgYFNlcXVlbnRpYWxgIG1vZGVscykuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhZGQobGF5ZXI6IExheWVyKTogdm9pZCB7XG4gICAgY29uc3QgaXNMYXllck1vZGVsSW5zdGFuY2UgPVxuICAgICAgICBsYXllciBpbnN0YW5jZW9mIFNlcXVlbnRpYWwgfHwgbGF5ZXIgaW5zdGFuY2VvZiBMYXllcnNNb2RlbDtcbiAgICBsZXQgbW9kZWxMYXllcjogTGF5ZXJzTW9kZWw7XG4gICAgaWYgKGlzTGF5ZXJNb2RlbEluc3RhbmNlKSB7XG4gICAgICBtb2RlbExheWVyID0gbGF5ZXIgYXMgTGF5ZXJzTW9kZWw7XG4gICAgICBpZiAobW9kZWxMYXllci5vdXRwdXRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICdBbGwgbGF5ZXJzIGluIGEgU2VxdWVudGlhbCBtb2RlbCAnICtcbiAgICAgICAgICAgICdzaG91bGQgaGF2ZSBhIHNpbmdsZSBvdXRwdXQgdGVuc29yLiAnICtcbiAgICAgICAgICAgICdGb3IgbXVsdGktb3V0cHV0IGxheWVycywgJyArXG4gICAgICAgICAgICAndXNlIHRoZSBmdW5jdGlvbmFsIEFQSS4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlbExheWVyLmlucHV0cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAnQWxsIGxheWVycyBpbiBhIFNlcXVlbnRpYWwgbW9kZWwgJyArXG4gICAgICAgICAgICAnc2hvdWxkIGhhdmUgYSBzaW5nbGUgaW5wdXQgdGVuc29yLiAnICtcbiAgICAgICAgICAgICdGb3IgbXVsdGktaW5wdXQgbGF5ZXJzLCAnICtcbiAgICAgICAgICAgICd1c2UgdGhlIGZ1bmN0aW9uYWwgQVBJLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm91dHB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBmaXJzdCBsYXllciBpbiBtb2RlbDogY2hlY2sgdGhhdCBpdCBpcyBhbiBpbnB1dCBsYXllclxuICAgICAgaWYgKGxheWVyLmluYm91bmROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gY3JlYXRlIGFuIGlucHV0IGxheWVyXG4gICAgICAgIGlmIChsYXllci5iYXRjaElucHV0U2hhcGUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICAnVGhlIGZpcnN0IGxheWVyIGluIGEgU2VxdWVudGlhbCBtb2RlbCBtdXN0ICcgK1xuICAgICAgICAgICAgICAnZ2V0IGFuIGBpbnB1dFNoYXBlYCBvciBgYmF0Y2hJbnB1dFNoYXBlYCBhcmd1bWVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnN0YW50aWF0ZSB0aGUgaW5wdXQgbGF5ZXIuXG4gICAgICAgIGNvbnN0IHggPSBJbnB1dCh7XG4gICAgICAgICAgYmF0Y2hTaGFwZTogbGF5ZXIuYmF0Y2hJbnB1dFNoYXBlLFxuICAgICAgICAgIGR0eXBlOiBsYXllci5kdHlwZSxcbiAgICAgICAgICBuYW1lOiBsYXllci5uYW1lICsgJ19pbnB1dCdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBidWlsZCB0aGUgY3VycmVudCBsYXllciBhbmQgY3JlYXRlIHRoZSBub2RlIGNvbm5lY3RpbmdcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgbGF5ZXIgdG8gdGhlIGlucHV0IGxheWVyIHdlIGp1c3QgY3JlYXRlZC5cbiAgICAgICAgbGF5ZXIuYXBwbHkoeCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0xheWVyTW9kZWxJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLm91dHB1dHMgPSBtb2RlbExheWVyLm91dHB1dHM7XG4gICAgICAgIHRoaXMuaW5wdXRzID0gbW9kZWxMYXllci5pbnB1dHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGF5ZXIuaW5ib3VuZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICAnQSBsYXllciBhZGRlZCB0byBhIFNlcXVlbnRpYWwgbW9kZWwgbXVzdCBub3QgYWxyZWFkeSBiZSAnICtcbiAgICAgICAgICAgICAgYGNvbm5lY3RlZCBzb21ld2hlcmUgZWxzZS4gTGF5ZXJzTW9kZWwgcmVjZWl2ZWQgbGF5ZXIgJHtcbiAgICAgICAgICAgICAgICAgIGxheWVyLm5hbWV9IGAgK1xuICAgICAgICAgICAgICBgd2hpY2ggaGFzICR7bGF5ZXIuaW5ib3VuZE5vZGVzLmxlbmd0aH0gcHJlLWV4aXN0aW5nIGluYm91bmQgYCArXG4gICAgICAgICAgICAgICdjb25uZWN0aW9ucy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXllci5pbmJvdW5kTm9kZXNbMF0ub3V0cHV0VGVuc29ycy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgJ0FsbCBsYXllcnMgaW4gYSBTZXF1ZW50aWFsIG1vZGVsICcgK1xuICAgICAgICAgICAgICAnc2hvdWxkIGhhdmUgYSBzaW5nbGUgb3V0cHV0IHRlbnNvci4gJyArXG4gICAgICAgICAgICAgICdGb3IgbXVsdGktb3V0cHV0IGxheWVycywgJyArXG4gICAgICAgICAgICAgICd1c2UgdGhlIGZ1bmN0aW9uYWwgQVBJLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tTaGFwZShsYXllcik7XG4gICAgICAgIHRoaXMub3V0cHV0cyA9IFtsYXllci5pbmJvdW5kTm9kZXNbMF0ub3V0cHV0VGVuc29yc1swXV07XG4gICAgICAgIHRoaXMuaW5wdXRzID0gZ2V0U291cmNlSW5wdXRzKHRoaXMub3V0cHV0c1swXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5ib3VuZE5vZGVzID0gW107XG4gICAgICAvLyBXZSBjcmVhdGUgYW4gaW5wdXQgbm9kZSwgd2hpY2ggd2Ugd2lsbCBrZWVwIHVwZGF0ZWRcbiAgICAgIC8vIGFzIHdlIGFkZCBtb3JlIGxheWVycy5cbiAgICAgIC8vIChUaGlzIGNhbGwgaGFzIHNpZGUgZWZmZWN0cy4pXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAgIG5ldyBOb2RlKHtcbiAgICAgICAgb3V0Ym91bmRMYXllcjogdGhpcyxcbiAgICAgICAgaW5ib3VuZExheWVyczogW10sXG4gICAgICAgIG5vZGVJbmRpY2VzOiBbXSxcbiAgICAgICAgdGVuc29ySW5kaWNlczogW10sXG4gICAgICAgIGlucHV0VGVuc29yczogdGhpcy5pbnB1dHMsXG4gICAgICAgIG91dHB1dFRlbnNvcnM6IHRoaXMub3V0cHV0cyxcbiAgICAgICAgLy8gbm8gbW9kZWwtbGV2ZWwgbWFza2luZyBmb3Igbm93XG4gICAgICAgIGlucHV0TWFza3M6IGdlbmVyaWNfdXRpbHMucHlMaXN0UmVwZWF0KG51bGwsIHRoaXMuaW5wdXRzLmxlbmd0aCksXG4gICAgICAgIG91dHB1dE1hc2tzOiBbbnVsbF0sXG4gICAgICAgIGlucHV0U2hhcGVzOiB0aGlzLmlucHV0cy5tYXAoeCA9PiB4LnNoYXBlKSxcbiAgICAgICAgb3V0cHV0U2hhcGVzOiB0aGlzLm91dHB1dHNbMF0uc2hhcGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvdXRwdXRUZW5zb3IgPSBsYXllci5hcHBseSh0aGlzLm91dHB1dHNbMF0pO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3V0cHV0VGVuc29yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0FsbCBsYXllcnMgaW4gYSBTZXF1ZW50aWFsIG1vZGVsICcgK1xuICAgICAgICAgICAgJ3Nob3VsZCBoYXZlIGEgc2luZ2xlIG91dHB1dCB0ZW5zb3IuICcgK1xuICAgICAgICAgICAgJ0ZvciBtdWx0aS1vdXRwdXQgbGF5ZXJzLCAnICtcbiAgICAgICAgICAgICd1c2UgdGhlIGZ1bmN0aW9uYWwgQVBJLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja1NoYXBlKGxheWVyKTtcbiAgICAgIHRoaXMub3V0cHV0cyA9IFtvdXRwdXRUZW5zb3IgYXMgU3ltYm9saWNUZW5zb3JdO1xuICAgICAgLy8gdXBkYXRlIHNlbGYuaW5ib3VuZF9ub2Rlc1xuICAgICAgdGhpcy5pbmJvdW5kTm9kZXNbMF0ub3V0cHV0VGVuc29ycyA9IHRoaXMub3V0cHV0cztcbiAgICAgIHRoaXMuaW5ib3VuZE5vZGVzWzBdLm91dHB1dFNoYXBlcyA9IFt0aGlzLm91dHB1dHNbMF0uc2hhcGVdO1xuICAgIH1cblxuICAgIHRoaXMubGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgIHRoaXMuYnVpbHQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBsYXN0IGxheWVyIGluIHRoZSBtb2RlbC5cbiAgICpcbiAgICogQGV4Y2VwdGlvbiBUeXBlRXJyb3IgaWYgdGhlcmUgYXJlIG5vIGxheWVycyBpbiB0aGUgbW9kZWwuXG4gICAqL1xuICBwb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlcmUgYXJlIG5vIGxheWVycyBpbiB0aGUgbW9kZWwuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXllcnMucG9wKCk7XG4gICAgaWYgKHRoaXMubGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5vdXRwdXRzID0gW107XG4gICAgICB0aGlzLmluYm91bmROb2RlcyA9IFtdO1xuICAgICAgdGhpcy5vdXRib3VuZE5vZGVzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMYXllckluZGV4ID0gdGhpcy5sYXllcnMubGVuZ3RoIC0gMTtcbiAgICAgIHRoaXMubGF5ZXJzW2xhc3RMYXllckluZGV4XS5vdXRib3VuZE5vZGVzID0gW107XG4gICAgICB0aGlzLm91dHB1dHMgPSBbdGhpcy5sYXllcnNbbGFzdExheWVySW5kZXhdLm91dHB1dCBhcyBTeW1ib2xpY1RlbnNvcl07XG4gICAgICAvLyB1cGRhdGUgc2VsZi5pbmJvdW5kX25vZGVzXG4gICAgICB0aGlzLmluYm91bmROb2Rlc1swXS5vdXRwdXRUZW5zb3JzID0gdGhpcy5vdXRwdXRzO1xuICAgICAgdGhpcy5pbmJvdW5kTm9kZXNbMF0ub3V0cHV0U2hhcGVzID0gW3RoaXMub3V0cHV0c1swXS5zaGFwZV07XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgY2FsbChpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwga3dhcmdzOiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIGlmICh0aGlzLm1vZGVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY2FsbChpbnB1dHMsIGt3YXJncyk7XG4gIH1cblxuICBvdmVycmlkZSBidWlsZChpbnB1dFNoYXBlPzogU2hhcGV8U2hhcGVbXSkge1xuICAgIC8vIENhbGwgYGdldEV4YWN0bHlPbmVTaGFwZWAgd2l0aG91dCB1c2luZyBpdHMgcmV0dXJuIHZhbHVlLFxuICAgIC8vIHRvIHZlcmlmeSB0aGF0IGV4YWN0bHkgb25lIGlucHV0IHNoYXBlIGlzIHByb3ZpZGVkLlxuICAgIGdldEV4YWN0bHlPbmVTaGFwZShpbnB1dFNoYXBlKTtcblxuICAgIGlmICh0aGlzLmlucHV0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5vdXRwdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAnU2VxdWVudGlhbCBtb2RlbCBjYW5ub3QgYmUgYnVpbHQ6IG1vZGVsIGlzIGVtcHR5LicgK1xuICAgICAgICAgICcgQWRkIHNvbWUgbGF5ZXJzIGZpcnN0LicpO1xuICAgIH1cbiAgICAvLyBhY3R1YWxseSBjcmVhdGUgdGhlIG1vZGVsXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBMYXllcnNNb2RlbCh7XG4gICAgICBpbnB1dHM6IHRoaXMuaW5wdXRzLFxuICAgICAgb3V0cHV0czogdGhpcy5vdXRwdXRzWzBdLFxuICAgICAgbmFtZTogdGhpcy5uYW1lICsgJ19tb2RlbCdcbiAgICB9KTtcbiAgICB0aGlzLm1vZGVsLnRyYWluYWJsZSA9IHRoaXMudHJhaW5hYmxlO1xuXG4gICAgLy8gbWlycm9yIG1vZGVsIGF0dHJpYnV0ZXNcbiAgICB0aGlzLnN1cHBvcnRzTWFza2luZyA9IHRoaXMubW9kZWwuc3VwcG9ydHNNYXNraW5nO1xuICAgIC8vIFRPRE8obWljaGFlbHRlcnJ5KTogQWRkIGNhY2hlc1xuICAgIHRoaXMuaW5wdXRMYXllcnMgPSB0aGlzLm1vZGVsLmlucHV0TGF5ZXJzO1xuICAgIHRoaXMuaW5wdXRMYXllcnNOb2RlSW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRMYXllcnNOb2RlSW5kaWNlcztcbiAgICB0aGlzLmlucHV0TGF5ZXJzVGVuc29ySW5kaWNlcyA9IHRoaXMubW9kZWwuaW5wdXRMYXllcnNUZW5zb3JJbmRpY2VzO1xuICAgIHRoaXMub3V0cHV0TGF5ZXJzID0gdGhpcy5tb2RlbC5vdXRwdXRMYXllcnM7XG4gICAgdGhpcy5vdXRwdXRMYXllcnNOb2RlSW5kaWNlcyA9IHRoaXMubW9kZWwub3V0cHV0TGF5ZXJzTm9kZUluZGljZXM7XG4gICAgdGhpcy5vdXRwdXRMYXllcnNUZW5zb3JJbmRpY2VzID0gdGhpcy5tb2RlbC5vdXRwdXRMYXllcnNUZW5zb3JJbmRpY2VzO1xuICAgIHRoaXMubm9kZXNCeURlcHRoID0gdGhpcy5tb2RlbC5ub2Rlc0J5RGVwdGg7XG4gICAgdGhpcy5jb250YWluZXJOb2RlcyA9IHRoaXMubW9kZWwuY29udGFpbmVyTm9kZXM7XG4gICAgdGhpcy5vdXRwdXROYW1lcyA9IHRoaXMubW9kZWwub3V0cHV0TmFtZXM7XG4gICAgdGhpcy5pbnB1dE5hbWVzID0gdGhpcy5tb2RlbC5pbnB1dE5hbWVzO1xuICAgIC8vIFRPRE8obWljaGFlbHRlcnJ5KTogQWRkIGZlZWRJbnB1dE5hbWVzLCBmZWVkSW5wdXRzLCBpZiBuZWVkZWQuXG4gICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBBZGQgY2FsbGJhY2tNb2RlbCBpZiBuZWVkZWQuXG4gICAgdGhpcy5idWlsdCA9IHRydWU7XG4gIH1cblxuICBvdmVycmlkZSBjb3VudFBhcmFtcygpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5idWlsdCkge1xuICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuY291bnRQYXJhbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBhIHRleHQgc3VtbWFyeSBvZiB0aGUgU2VxdWVudGlhbCBtb2RlbCdzIGxheWVycy5cbiAgICpcbiAgICogVGhlIHN1bW1hcnkgaW5jbHVkZXNcbiAgICogLSBOYW1lIGFuZCB0eXBlIG9mIGFsbCBsYXllcnMgdGhhdCBjb21wcmlzZSB0aGUgbW9kZWwuXG4gICAqIC0gT3V0cHV0IHNoYXBlKHMpIG9mIHRoZSBsYXllcnNcbiAgICogLSBOdW1iZXIgb2Ygd2VpZ2h0IHBhcmFtZXRlcnMgb2YgZWFjaCBsYXllclxuICAgKiAtIFRoZSB0b3RhbCBudW1iZXIgb2YgdHJhaW5hYmxlIGFuZCBub24tdHJhaW5hYmxlIHBhcmFtZXRlcnMgb2YgdGhlXG4gICAqIG1vZGVsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoKTtcbiAgICogbW9kZWwuYWRkKFxuICAgKiAgICAgdGYubGF5ZXJzLmRlbnNlKHt1bml0czogMTAwLCBpbnB1dFNoYXBlOiBbMTBdLCBhY3RpdmF0aW9uOiAncmVsdSd9KSk7XG4gICAqIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBhY3RpdmF0aW9uOiAnc2lnbW9pZCd9KSk7XG4gICAqXG4gICAqIG1vZGVsLnN1bW1hcnkoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBsaW5lTGVuZ3RoIEN1c3RvbSBsaW5lIGxlbmd0aCwgaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMuXG4gICAqIEBwYXJhbSBwb3NpdGlvbnMgQ3VzdG9tIHdpZHRocyBvZiBlYWNoIG9mIHRoZSBjb2x1bW5zLCBhcyBlaXRoZXJcbiAgICogICBmcmFjdGlvbnMgb2YgYGxpbmVMZW5ndGhgIChlLmcuLCBgWzAuNSwgMC43NSwgMV1gKSBvciBhYnNvbHV0ZSBudW1iZXJcbiAgICogICBvZiBjaGFyYWN0ZXJzIChlLmcuLCBgWzMwLCA1MCwgNjVdYCkuIEVhY2ggbnVtYmVyIGNvcnJlc3BvbmRzIHRvXG4gICAqICAgcmlnaHQtbW9zdCAoaS5lLiwgZW5kaW5nKSBwb3NpdGlvbiBvZiBhIGNvbHVtbi5cbiAgICogQHBhcmFtIHByaW50Rm4gQ3VzdG9tIHByaW50IGZ1bmN0aW9uLiBDYW4gYmUgdXNlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0XG4gICAqICAgYGNvbnNvbGUubG9nYC4gRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIGB4ID0+IHt9YCB0byBtdXRlIHRoZSBwcmludGVkXG4gICAqICAgbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBvdmVycmlkZSBzdW1tYXJ5KFxuICAgICAgbGluZUxlbmd0aD86IG51bWJlciwgcG9zaXRpb25zPzogbnVtYmVyW10sXG4gICAgICBwcmludEZuOlxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHZvaWQgPSBjb25zb2xlLmxvZykge1xuICAgIGlmICghdGhpcy5idWlsdCkge1xuICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbiAgICBzdXBlci5zdW1tYXJ5KGxpbmVMZW5ndGgsIHBvc2l0aW9ucywgcHJpbnRGbik7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgd2VpZ2h0cyBvZiB0aGUgbW9kZWwuXG4gICAqXG4gICAqIEBwYXJhbSB3ZWlnaHRzIFNob3VsZCBiZSBhIGxpc3Qgb2YgVGVuc29ycyB3aXRoIHNoYXBlcyBhbmQgdHlwZXMgbWF0Y2hpbmdcbiAgICogICB0aGUgb3V0cHV0IG9mIGBtb2RlbC5nZXRXZWlnaHRzKClgLlxuICAgKi9cbiAgb3ZlcnJpZGUgc2V0V2VpZ2h0cyh3ZWlnaHRzOiBUZW5zb3JbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlbC5zZXRXZWlnaHRzKHdlaWdodHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvc3MgdmFsdWUgJiBtZXRyaWNzIHZhbHVlcyBmb3IgdGhlIG1vZGVsIGluIHRlc3QgbW9kZS5cbiAgICpcbiAgICogTG9zcyBhbmQgbWV0cmljcyBhcmUgc3BlY2lmaWVkIGR1cmluZyBgY29tcGlsZSgpYCwgd2hpY2ggbmVlZHMgdG8gaGFwcGVuXG4gICAqIGJlZm9yZSBjYWxscyB0byBgZXZhbHVhdGUoKWAuXG4gICAqXG4gICAqIENvbXB1dGF0aW9uIGlzIGRvbmUgaW4gYmF0Y2hlcy5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKHtcbiAgICogICBsYXllcnM6IFt0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBpbnB1dFNoYXBlOiBbMTBdfSldXG4gICAqIH0pO1xuICAgKiBtb2RlbC5jb21waWxlKHtvcHRpbWl6ZXI6ICdzZ2QnLCBsb3NzOiAnbWVhblNxdWFyZWRFcnJvcid9KTtcbiAgICogY29uc3QgcmVzdWx0ID0gbW9kZWwuZXZhbHVhdGUodGYub25lcyhbOCwgMTBdKSwgdGYub25lcyhbOCwgMV0pLCB7XG4gICAqICAgYmF0Y2hTaXplOiA0LFxuICAgKiB9KTtcbiAgICogcmVzdWx0LnByaW50KCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0geCBgdGYuVGVuc29yYCBvZiB0ZXN0IGRhdGEsIG9yIGFuIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzIGlmIHRoZVxuICAgKiBtb2RlbCBoYXMgbXVsdGlwbGUgaW5wdXRzLlxuICAgKiBAcGFyYW0geSBgdGYuVGVuc29yYCBvZiB0YXJnZXQgZGF0YSwgb3IgYW4gYEFycmF5YCBvZiBgdGYuVGVuc29yYHMgaWYgdGhlXG4gICAqIG1vZGVsIGhhcyBtdWx0aXBsZSBvdXRwdXRzLlxuICAgKiBAcGFyYW0gYXJncyBBIGBNb2RlbEV2YWx1YXRlQ29uZmlnYCwgY29udGFpbmluZyBvcHRpb25hbCBmaWVsZHMuXG4gICAqXG4gICAqIEByZXR1cm4gYFNjYWxhcmAgdGVzdCBsb3NzIChpZiB0aGUgbW9kZWwgaGFzIGEgc2luZ2xlIG91dHB1dCBhbmQgbm9cbiAgICogICBtZXRyaWNzKSBvciBgQXJyYXlgIG9mIGBTY2FsYXJgcyAoaWYgdGhlIG1vZGVsIGhhcyBtdWx0aXBsZSBvdXRwdXRzXG4gICAqICAgYW5kL29yIG1ldHJpY3MpLiBUaGUgYXR0cmlidXRlIGBtb2RlbC5tZXRyaWNzTmFtZXNgXG4gICAqICAgd2lsbCBnaXZlIHlvdSB0aGUgZGlzcGxheSBsYWJlbHMgZm9yIHRoZSBzY2FsYXIgb3V0cHV0cy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIG92ZXJyaWRlIGV2YWx1YXRlKFxuICAgICAgeDogVGVuc29yfFRlbnNvcltdLCB5OiBUZW5zb3J8VGVuc29yW10sXG4gICAgICBhcmdzOiBNb2RlbEV2YWx1YXRlQXJncyA9IHt9KTogU2NhbGFyfFNjYWxhcltdIHtcbiAgICBpZiAoIXRoaXMuYnVpbHQpIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICAgJ1RoZSBtb2RlbCBuZWVkcyB0byBiZSBjb21waWxlZCBiZWZvcmUgYmVpbmcgdXNlZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZXZhbHVhdGUoeCwgeSwgYXJncyk7XG4gIH1cblxuICAvLyBUT0RPKGNhaXMpOiBBZGQgY29kZSBzbmlwcGV0IGJlbG93IG9uY2UgcmVhbCBkYXRhc2V0IG9iamVjdHMgYXJlXG4gIC8vICAgYXZhaWxhYmxlLlxuICAvKipcbiAgICogRXZhbHVhdGUgbW9kZWwgdXNpbmcgYSBkYXRhc2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZTogVW5saWtlIGBldmFsdWF0ZSgpYCwgdGhpcyBtZXRob2QgaXMgYXN5bmNocm9ub3VzIChgYXN5bmNgKS5cbiAgICpcbiAgICogQHBhcmFtIGRhdGFzZXQgQSBkYXRhc2V0IG9iamVjdC4gSXRzIGBpdGVyYXRvcigpYCBtZXRob2QgaXMgZXhwZWN0ZWRcbiAgICogICB0byBnZW5lcmF0ZSBhIGRhdGFzZXQgaXRlcmF0b3Igb2JqZWN0LCB0aGUgYG5leHQoKWAgbWV0aG9kIG9mIHdoaWNoXG4gICAqICAgaXMgZXhwZWN0ZWQgdG8gcHJvZHVjZSBkYXRhIGJhdGNoZXMgZm9yIGV2YWx1YXRpb24uIFRoZSByZXR1cm4gdmFsdWVcbiAgICogICBvZiB0aGUgYG5leHQoKWAgY2FsbCBvdWdodCB0byBjb250YWluIGEgYm9vbGVhbiBgZG9uZWAgZmllbGQgYW5kIGFcbiAgICogICBgdmFsdWVgIGZpZWxkLiBUaGUgYHZhbHVlYCBmaWVsZCBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheSBvZiB0d29cbiAgICogICBgdGYuVGVuc29yYHMgb3IgYW4gYXJyYXkgb2YgdHdvIG5lc3RlZCBgdGYuVGVuc29yYCBzdHJ1Y3R1cmVzLiBUaGUgZm9ybWVyXG4gICAqICAgY2FzZSBpcyBmb3IgbW9kZWxzIHdpdGggZXhhY3RseSBvbmUgaW5wdXQgYW5kIG9uZSBvdXRwdXQgKGUuZy5cbiAgICogICBhIHNlcXVlbnRpYWwgbW9kZWwpLiBUaGUgbGF0dGVyIGNhc2UgaXMgZm9yIG1vZGVscyB3aXRoIG11bHRpcGxlXG4gICAqICAgaW5wdXRzIGFuZC9vciBtdWx0aXBsZSBvdXRwdXRzLiBPZiB0aGUgdHdvIGl0ZW1zIGluIHRoZSBhcnJheSwgdGhlXG4gICAqICAgZmlyc3QgaXMgdGhlIGlucHV0IGZlYXR1cmUocykgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIG91dHB1dCB0YXJnZXQocykuXG4gICAqIEBwYXJhbSBhcmdzIEEgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBkYXRhc2V0LWJhc2VkIGV2YWx1YXRpb24uXG4gICAqIEByZXR1cm5zIExvc3MgYW5kIG1ldHJpYyB2YWx1ZXMgYXMgYW4gQXJyYXkgb2YgYFNjYWxhcmAgb2JqZWN0cy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIG92ZXJyaWRlIGFzeW5jIGV2YWx1YXRlRGF0YXNldChkYXRhc2V0OiBEYXRhc2V0PHt9PixcbiAgICAgIGFyZ3M6IE1vZGVsRXZhbHVhdGVEYXRhc2V0QXJncyk6IFByb21pc2U8U2NhbGFyfFNjYWxhcltdPiB7XG4gICAgaWYgKCF0aGlzLmJ1aWx0KSB7XG4gICAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFxuICAgICAgICAgICdUaGUgbW9kZWwgbmVlZHMgdG8gYmUgY29tcGlsZWQgYmVmb3JlIGJlaW5nIHVzZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGVsLmV2YWx1YXRlRGF0YXNldChkYXRhc2V0LCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgb3V0cHV0IHByZWRpY3Rpb25zIGZvciB0aGUgaW5wdXQgc2FtcGxlcy5cbiAgICpcbiAgICogQ29tcHV0YXRpb24gaXMgZG9uZSBpbiBiYXRjaGVzLlxuICAgKlxuICAgKiBOb3RlOiB0aGUgXCJzdGVwXCIgbW9kZSBvZiBwcmVkaWN0KCkgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQuXG4gICAqICAgVGhpcyBpcyBiZWNhdXNlIHRoZSBUZW5zb3JGbG93LmpzIGNvcmUgYmFja2VuZCBpcyBpbXBlcmF0aXZlIG9ubHkuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IG1vZGVsID0gdGYuc2VxdWVudGlhbCh7XG4gICAqICAgbGF5ZXJzOiBbdGYubGF5ZXJzLmRlbnNlKHt1bml0czogMSwgaW5wdXRTaGFwZTogWzEwXX0pXVxuICAgKiB9KTtcbiAgICogbW9kZWwucHJlZGljdCh0Zi5vbmVzKFsyLCAxMF0pKS5wcmludCgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHggVGhlIGlucHV0IGRhdGEsIGFzIGEgVGVuc29yLCBvciBhbiBgQXJyYXlgIG9mIGB0Zi5UZW5zb3JgcyBpZlxuICAgKiAgIHRoZSBtb2RlbCBoYXMgbXVsdGlwbGUgaW5wdXRzLlxuICAgKiBAcGFyYW0gY29uaWZnIEEgYE1vZGVsUHJlZGljdENvbmZpZ2Agb2JqZWN0IGNvbnRhaW5pbmcgb3B0aW9uYWwgZmllbGRzLlxuICAgKlxuICAgKiBAcmV0dXJuIGB0Zi5UZW5zb3JgKHMpIG9mIHByZWRpY3Rpb25zLlxuICAgKlxuICAgKiBAZXhjZXB0aW9uIFZhbHVlRXJyb3IgSW4gY2FzZSBvZiBtaXNtYXRjaCBiZXR3ZWVuIHRoZSBwcm92aWRlZCBpbnB1dCBkYXRhXG4gICAqICAgYW5kIHRoZSBtb2RlbCdzIGV4cGVjdGF0aW9ucywgb3IgaW4gY2FzZSBhIHN0YXRlZnVsIG1vZGVsIHJlY2VpdmVzIGFcbiAgICogICBudW1iZXIgb2Ygc2FtcGxlcyB0aGF0IGlzIG5vdCBhIG11bHRpcGxlIG9mIHRoZSBiYXRjaCBzaXplLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgb3ZlcnJpZGUgcHJlZGljdCh4OiBUZW5zb3J8VGVuc29yW10sIGFyZ3M6IE1vZGVsUHJlZGljdEFyZ3MgPSB7fSk6XG4gICAgICBUZW5zb3J8VGVuc29yW10ge1xuICAgIGlmICh0aGlzLm1vZGVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucHJlZGljdCh4LCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByZWRpY3Rpb25zIGZvciBhIHNpbmdsZSBiYXRjaCBvZiBzYW1wbGVzLlxuICAgKlxuICAgKiBAcGFyYW0geDogSW5wdXQgc2FtcGxlcywgYXMgYSBUZW5zb3IsIG9yIGxpc3Qgb2YgVGVuc29ycyAoaWYgdGhlIG1vZGVsXG4gICAqICAgaGFzIG11bHRpcGxlIGlucHV0cykuXG4gICAqIEByZXR1cm4gVGVuc29yKHMpIG9mIHByZWRpY3Rpb25zXG4gICAqL1xuICBvdmVycmlkZSBwcmVkaWN0T25CYXRjaCh4OiBUZW5zb3IpOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIGlmICh0aGlzLm1vZGVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucHJlZGljdE9uQmF0Y2goeCk7XG4gIH1cblxuICAvKipcbiAgICogU2VlIGBMYXllcnNNb2RlbC5jb21waWxlYC5cbiAgICpcbiAgICogQHBhcmFtIGFyZ3NcbiAgICovXG4gIG92ZXJyaWRlIGNvbXBpbGUoYXJnczogTW9kZWxDb21waWxlQXJncyk6IHZvaWQge1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgICB0aGlzLm1vZGVsLmNvbXBpbGUoYXJncyk7XG4gICAgdGhpcy5vcHRpbWl6ZXJfID0gdGhpcy5tb2RlbC5vcHRpbWl6ZXI7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHRoaXMuaXNPcHRpbWl6ZXJPd25lZCA9ICh0aGlzLm1vZGVsIGFzIGFueSkuaXNPcHRpbWl6ZXJPd25lZDtcbiAgICB0aGlzLmxvc3MgPSB0aGlzLm1vZGVsLmxvc3M7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5tb2RlbC5tZXRyaWNzO1xuICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCB0aGlzLmxvc3NXZWlnaHRzLCB0aGlzLnNhbXBsZVdlaWdodE1vZGUsXG4gICAgLy8gICB0aGlzLndlaWdodGVkTWV0cmljcywgdGhpcy50YXJnZXRzLlxuICAgIHRoaXMubWV0cmljc1RlbnNvcnMgPSB0aGlzLm1vZGVsLm1ldHJpY3NUZW5zb3JzO1xuICAgIHRoaXMubWV0cmljc05hbWVzID0gdGhpcy5tb2RlbC5tZXRyaWNzTmFtZXM7XG4gICAgLy8gVE9ETyhjYWlzKTogQWRkIHNhbXBsZVdlaWdodHMuXG4gIH1cblxuICBvdmVycmlkZSBnZXQgb3B0aW1pemVyKCk6IE9wdGltaXplciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHRoaXMubW9kZWwub3B0aW1pemVyO1xuICB9XG5cbiAgb3ZlcnJpZGUgc2V0IG9wdGltaXplcihvcHRpbWl6ZXI6IE9wdGltaXplcikge1xuICAgIHRoaXMubW9kZWwub3B0aW1pemVyID0gb3B0aW1pemVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWlucyB0aGUgbW9kZWwgZm9yIGEgZml4ZWQgbnVtYmVyIG9mIGVwb2NocyAoaXRlcmF0aW9ucyBvbiBhIGRhdGFzZXQpLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoe1xuICAgKiAgIGxheWVyczogW3RmLmxheWVycy5kZW5zZSh7dW5pdHM6IDEsIGlucHV0U2hhcGU6IFsxMF19KV1cbiAgICogfSk7XG4gICAqIG1vZGVsLmNvbXBpbGUoe29wdGltaXplcjogJ3NnZCcsIGxvc3M6ICdtZWFuU3F1YXJlZEVycm9yJ30pO1xuICAgKiBjb25zdCBoaXN0b3J5ID0gYXdhaXQgbW9kZWwuZml0KHRmLm9uZXMoWzgsIDEwXSksIHRmLm9uZXMoWzgsIDFdKSwge1xuICAgKiAgIGJhdGNoU2l6ZTogNCxcbiAgICogICBlcG9jaHM6IDNcbiAgICogfSk7XG4gICAqIGNvbnNvbGUubG9nKGhpc3RvcnkuaGlzdG9yeS5sb3NzWzBdKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB4IGB0Zi5UZW5zb3JgIG9mIHRyYWluaW5nIGRhdGEsIG9yIGFuIGFycmF5IG9mIGB0Zi5UZW5zb3JgcyBpZiB0aGVcbiAgICogbW9kZWwgaGFzIG11bHRpcGxlIGlucHV0cy4gSWYgYWxsIGlucHV0cyBpbiB0aGUgbW9kZWwgYXJlIG5hbWVkLCB5b3UgY2FuXG4gICAqIGFsc28gcGFzcyBhIGRpY3Rpb25hcnkgbWFwcGluZyBpbnB1dCBuYW1lcyB0byBgdGYuVGVuc29yYHMuXG4gICAqIEBwYXJhbSB5IGB0Zi5UZW5zb3JgIG9mIHRhcmdldCAobGFiZWwpIGRhdGEsIG9yIGFuIGFycmF5IG9mIGB0Zi5UZW5zb3JgcyBpZlxuICAgKiB0aGUgbW9kZWwgaGFzIG11bHRpcGxlIG91dHB1dHMuIElmIGFsbCBvdXRwdXRzIGluIHRoZSBtb2RlbCBhcmUgbmFtZWQsIHlvdVxuICAgKiAgY2FuIGFsc28gcGFzcyBhIGRpY3Rpb25hcnkgbWFwcGluZyBvdXRwdXQgbmFtZXMgdG8gYHRmLlRlbnNvcmBzLlxuICAgKiBAcGFyYW0gYXJncyAgQSBgTW9kZWxGaXRDb25maWdgLCBjb250YWluaW5nIG9wdGlvbmFsIGZpZWxkcy5cbiAgICpcbiAgICogQHJldHVybiBBIGBIaXN0b3J5YCBpbnN0YW5jZS4gSXRzIGBoaXN0b3J5YCBhdHRyaWJ1dGUgY29udGFpbnMgYWxsXG4gICAqICAgaW5mb3JtYXRpb24gY29sbGVjdGVkIGR1cmluZyB0cmFpbmluZy5cbiAgICpcbiAgICogQGV4Y2VwdGlvbiBWYWx1ZUVycm9yIEluIGNhc2Ugb2YgbWlzbWF0Y2ggYmV0d2VlbiB0aGUgcHJvdmlkZWQgaW5wdXQgZGF0YVxuICAgKiAgIGFuZCB3aGF0IHRoZSBtb2RlbCBleHBlY3RzLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgb3ZlcnJpZGUgYXN5bmMgZml0KFxuICAgICAgeDogVGVuc29yfFRlbnNvcltdfHtbaW5wdXROYW1lOiBzdHJpbmddOiBUZW5zb3J9LFxuICAgICAgeTogVGVuc29yfFRlbnNvcltdfHtbaW5wdXROYW1lOiBzdHJpbmddOiBUZW5zb3J9LFxuICAgICAgYXJnczogTW9kZWxGaXRBcmdzID0ge30pOiBQcm9taXNlPEhpc3Rvcnk+IHtcbiAgICBpZiAoIXRoaXMuYnVpbHQpIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICAgJ1RoZSBtb2RlbCBuZWVkcyB0byBiZSBjb21waWxlZCBiZWZvcmUgJyArXG4gICAgICAgICAgJ2JlaW5nIHVzZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpdCh4LCB5LCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFpbnMgdGhlIG1vZGVsIHVzaW5nIGEgZGF0YXNldCBvYmplY3QuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHhBcnJheSA9IFtcbiAgICogICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAqICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgKiAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICogICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAqIF07XG4gICAqIGNvbnN0IHlBcnJheSA9IFsxLCAxLCAxLCAxXTtcbiAgICogLy8gQ3JlYXRlIGEgZGF0YXNldCBmcm9tIHRoZSBKYXZhU2NyaXB0IGFycmF5LlxuICAgKiBjb25zdCB4RGF0YXNldCA9IHRmLmRhdGEuYXJyYXkoeEFycmF5KTtcbiAgICogY29uc3QgeURhdGFzZXQgPSB0Zi5kYXRhLmFycmF5KHlBcnJheSk7XG4gICAqIC8vIFppcCBjb21iaW5lcyB0aGUgYHhgIGFuZCBgeWAgRGF0YXNldHMgaW50byBhIHNpbmdsZSBEYXRhc2V0LCB0aGVcbiAgICogLy8gaXRlcmF0b3Igb2Ygd2hpY2ggd2lsbCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb2YgdHdvIHRlbnNvcnMsXG4gICAqIC8vIGNvcnJlc3BvbmRpbmcgdG8gYHhgIGFuZCBgeWAuICBUaGUgY2FsbCB0byBgYmF0Y2goNClgIHdpbGwgYnVuZGxlXG4gICAqIC8vIGZvdXIgc3VjaCBzYW1wbGVzIGludG8gYSBzaW5nbGUgb2JqZWN0LCB3aXRoIHRoZSBzYW1lIGtleXMgbm93IHBvaW50aW5nXG4gICAqIC8vIHRvIHRlbnNvcnMgdGhhdCBob2xkIDQgZXhhbXBsZXMsIG9yZ2FuaXplZCBhbG9uZyB0aGUgYmF0Y2ggZGltZW5zaW9uLlxuICAgKiAvLyBUaGUgY2FsbCB0byBgc2h1ZmZsZSg0KWAgY2F1c2VzIGVhY2ggaXRlcmF0aW9uIHRocm91Z2ggdGhlIGRhdGFzZXQgdG9cbiAgICogLy8gaGFwcGVuIGluIGEgZGlmZmVyZW50IG9yZGVyLiAgVGhlIHNpemUgb2YgdGhlIHNodWZmbGUgd2luZG93IGlzIDQuXG4gICAqIGNvbnN0IHh5RGF0YXNldCA9IHRmLmRhdGEuemlwKHt4czogeERhdGFzZXQsIHlzOiB5RGF0YXNldH0pXG4gICAqICAgICAuYmF0Y2goNClcbiAgICogICAgIC5zaHVmZmxlKDQpO1xuICAgKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoe1xuICAgKiAgIGxheWVyczogW3RmLmxheWVycy5kZW5zZSh7dW5pdHM6IDEsIGlucHV0U2hhcGU6IFs5XX0pXVxuICAgKiB9KTtcbiAgICogbW9kZWwuY29tcGlsZSh7b3B0aW1pemVyOiAnc2dkJywgbG9zczogJ21lYW5TcXVhcmVkRXJyb3InfSk7XG4gICAqIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBtb2RlbC5maXREYXRhc2V0KHh5RGF0YXNldCwge1xuICAgKiAgIGVwb2NoczogNCxcbiAgICogICBjYWxsYmFja3M6IHtvbkVwb2NoRW5kOiAoZXBvY2gsIGxvZ3MpID0+IGNvbnNvbGUubG9nKGxvZ3MubG9zcyl9XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGRhdGFzZXQgQSBkYXRhc2V0IG9iamVjdC4gSXRzIGBpdGVyYXRvcigpYCBtZXRob2QgaXMgZXhwZWN0ZWQgdG9cbiAgICogICBnZW5lcmF0ZSBhIGRhdGFzZXQgaXRlcmF0b3Igb2JqZWN0LCB0aGUgYG5leHQoKWAgbWV0aG9kIG9mIHdoaWNoIGlzXG4gICAqICAgZXhwZWN0ZWQgdG8gcHJvZHVjZSBkYXRhIGJhdGNoZXMgZm9yIGV2YWx1YXRpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhlXG4gICAqICAgYG5leHQoKWAgY2FsbCBvdWdodCB0byBjb250YWluIGEgYm9vbGVhbiBgZG9uZWAgZmllbGQgYW5kIGEgYHZhbHVlYFxuICAgKiAgIGZpZWxkLlxuICAgKlxuICAgKiAgIFRoZSBgdmFsdWVgIGZpZWxkIGlzIGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCBvZiB3aXRoIGZpZWxkc1xuICAgKiAgIGB4c2AgYW5kIGB5c2AsIHdoaWNoIHBvaW50IHRvIHRoZSBmZWF0dXJlIHRlbnNvciBhbmQgdGhlIHRhcmdldCB0ZW5zb3IsXG4gICAqICAgcmVzcGVjdGl2ZWx5LiBUaGlzIGNhc2UgaXMgZm9yIG1vZGVscyB3aXRoIGV4YWN0bHkgb25lIGlucHV0IGFuZCBvbmVcbiAgICogICBvdXRwdXQgKGUuZy4gYSBzZXF1ZW50aWFsIG1vZGVsKS4gRm9yIGV4YW1wbGU6XG4gICAqICAgYGBganNcbiAgICogICB7dmFsdWU6IHt4czogeHNUZW5zb3IsIHlzOiB5c1RlbnNvcn0sIGRvbmU6IGZhbHNlfVxuICAgKiAgIGBgYFxuICAgKlxuICAgKiAgIElmIHRoZSBtb2RlbCBoYXMgbXVsdGlwbGUgaW5wdXRzLCB0aGUgYHhzYCBmaWVsZCBvZiBgdmFsdWVgIHNob3VsZFxuICAgKiAgIGJlIGFuIG9iamVjdCBtYXBwaW5nIGlucHV0IG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgZmVhdHVyZSB0ZW5zb3JzLlxuICAgKiAgIEZvciBleGFtcGxlOlxuICAgKiAgIGBgYGpzXG4gICAqICAge1xuICAgKiAgICAgdmFsdWU6IHtcbiAgICogICAgICAgeHM6IHtcbiAgICogICAgICAgICBpbnB1dF8xOiB4c1RlbnNvcjEsXG4gICAqICAgICAgICAgaW5wdXRfMjogeHNUZW5zb3IyXG4gICAqICAgICAgIH0sXG4gICAqICAgICAgIHlzOiB5c1RlbnNvclxuICAgKiAgICAgfSxcbiAgICogICAgIGRvbmU6IGZhbHNlXG4gICAqICAgfVxuICAgKiAgIGBgYFxuICAgKiAgIElmIHRoZSBtb2RlbCBoYXMgbXVsdGlwbGUgb3V0cHV0cywgdGhlIGB5c2AgZmllbGQgb2YgYHZhbHVlYCBzaG91bGRcbiAgICogICBiZSBhbiBvYmplY3QgbWFwcGluZyBvdXRwdXQgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSB0YXJnZXQgdGVuc29ycy5cbiAgICogICBGb3IgZXhhbXBsZTpcbiAgICogICBgYGBqc1xuICAgKiAgIHtcbiAgICogICAgIHZhbHVlOiB7XG4gICAqICAgICAgIHhzOiB4c1RlbnNvcixcbiAgICogICAgICAgeXM6IHtcbiAgICogICAgICAgICBvdXRwdXRfMTogeXNUZW5zb3IxLFxuICAgKiAgICAgICAgIG91dHB1dF8yOiB5c1RlbnNvcjJcbiAgICogICAgICAgfSxcbiAgICogICAgIH0sXG4gICAqICAgICBkb25lOiBmYWxzZVxuICAgKiAgIH1cbiAgICogICBgYGBcbiAgICogQHBhcmFtIGFyZ3MgQSBgTW9kZWxGaXREYXRhc2V0QXJnc2AsIGNvbnRhaW5pbmcgb3B0aW9uYWwgZmllbGRzLlxuICAgKlxuICAgKiBAcmV0dXJuIEEgYEhpc3RvcnlgIGluc3RhbmNlLiBJdHMgYGhpc3RvcnlgIGF0dHJpYnV0ZSBjb250YWlucyBhbGxcbiAgICogICBpbmZvcm1hdGlvbiBjb2xsZWN0ZWQgZHVyaW5nIHRyYWluaW5nLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnLCBpZ25vcmVDSTogdHJ1ZX1cbiAgICovXG4gIG92ZXJyaWRlIGFzeW5jIGZpdERhdGFzZXQ8VD4oZGF0YXNldDogRGF0YXNldDxUPixcbiAgICAgIGFyZ3M6IE1vZGVsRml0RGF0YXNldEFyZ3M8VD4pOiBQcm9taXNlPEhpc3Rvcnk+IHtcbiAgICBpZiAoIXRoaXMuYnVpbHQpIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICAgJ1RoZSBtb2RlbCBuZWVkcyB0byBiZSBjb21waWxlZCBiZWZvcmUgJyArXG4gICAgICAgICAgJ2JlaW5nIHVzZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpdERhdGFzZXQoZGF0YXNldCwgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhIHNpbmdsZSBncmFkaWVudCB1cGRhdGUgb24gYSBzaW5nbGUgYmF0Y2ggb2YgZGF0YS5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZGlmZmVycyBmcm9tIGBmaXQoKWAgYW5kIGBmaXREYXRhc2V0KClgIGluIHRoZSBmb2xsb3dpbmdcbiAgICogcmVnYXJkczpcbiAgICogICAtIEl0IG9wZXJhdGVzIG9uIGV4YWN0bHkgb25lIGJhdGNoIG9mIGRhdGEuXG4gICAqICAgLSBJdCByZXR1cm5zIG9ubHkgdGhlIGxvc3MgYW5kIG1ldHJpYyB2YWx1ZXMsIGluc3RlYWQgb2ZcbiAgICogICAgIHJldHVybmluZyB0aGUgYmF0Y2gtYnktYmF0Y2ggbG9zcyBhbmQgbWV0cmljIHZhbHVlcy5cbiAgICogICAtIEl0IGRvZXNuJ3Qgc3VwcG9ydCBmaW5lLWdyYWluZWQgb3B0aW9ucyBzdWNoIGFzIHZlcmJvc2l0eSBhbmRcbiAgICogICAgIGNhbGxiYWNrcy5cbiAgICpcbiAgICogQHBhcmFtIHggSW5wdXQgZGF0YS4gSXQgY291bGQgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XG4gICAqICAgLSBBIGB0Zi5UZW5zb3JgLCBvciBhbiBBcnJheSBvZiBgdGYuVGVuc29yYHMgKGluIGNhc2UgdGhlIG1vZGVsIGhhc1xuICAgKiAgICAgbXVsdGlwbGUgaW5wdXRzKS5cbiAgICogICAtIEFuIE9iamVjdCBtYXBwaW5nIGlucHV0IG5hbWVzIHRvIGNvcnJlc3BvbmRpbmcgYHRmLlRlbnNvcmAgKGlmIHRoZVxuICAgKiAgICAgbW9kZWwgaGFzIG5hbWVkIGlucHV0cykuXG4gICAqIEBwYXJhbSB5IFRhcmdldCBkYXRhLiBJdCBjb3VsZCBiZSBlaXRoZXIgYSBgdGYuVGVuc29yYCBvciBtdWx0aXBsZVxuICAgKiAgIGB0Zi5UZW5zb3Jgcy4gSXQgc2hvdWxkIGJlIGNvbnNpc3RlbnQgd2l0aCBgeGAuXG4gICAqIEByZXR1cm5zIFRyYWluaW5nIGxvc3Mgb3IgbG9zc2VzIChpbiBjYXNlIHRoZSBtb2RlbCBoYXNcbiAgICogICBtdWx0aXBsZSBvdXRwdXRzKSwgYWxvbmcgd2l0aCBtZXRyaWNzIChpZiBhbnkpLCBhcyBudW1iZXJzLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgb3ZlcnJpZGUgYXN5bmMgdHJhaW5PbkJhdGNoKFxuICAgICAgeDogVGVuc29yfFRlbnNvcltdfHtbaW5wdXROYW1lOiBzdHJpbmddOiBUZW5zb3J9LFxuICAgICAgeTogVGVuc29yfFRlbnNvcltdfFxuICAgICAge1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0pOiBQcm9taXNlPG51bWJlcnxudW1iZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnRyYWluT25CYXRjaCh4LCB5KTtcbiAgfVxuXG4gIC8qIFNlZSBwYXJlbnQgY2xhc3MgZm9yIEpzRG9jICovXG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgb3ZlcnJpZGUgZnJvbUNvbmZpZzxUIGV4dGVuZHMgc2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGU+KFxuICAgICAgY2xzOiBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZUNvbnN0cnVjdG9yPFQ+LFxuICAgICAgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QsXG4gICAgICBjdXN0b21PYmplY3RzID0ge30gYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0LFxuICAgICAgZmFzdFdlaWdodEluaXQgPSBmYWxzZSk6IFQge1xuICAgIGxldCBjb25maWdBcnJheTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0QXJyYXk7XG4gICAgbGV0IGV4dHJhTW9kZWxDb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHt9O1xuICAgIGlmIChjb25maWcgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgaWYgKCEoY29uZmlnWzBdLmNsYXNzTmFtZSAhPSBudWxsKSB8fFxuICAgICAgICAgIGNvbmZpZ1swXVsnY2xhc3NOYW1lJ10gPT09ICdNZXJnZScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ0xlZ2FjeSBzZXJpYWxpemF0aW9uIGZvcm1hdCBub3Qgc3VwcG9ydGVkIHlldC4nKTtcbiAgICAgIH1cbiAgICAgIGNvbmZpZ0FycmF5ID0gY29uZmlnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICBjb25maWdbJ2xheWVycyddICE9IG51bGwsXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgYFdoZW4gdGhlIGNvbmZpZyBkYXRhIGZvciBhIFNlcXVlbnRpYWwgbW9kZWwgaXMgbm90IGFuIEFycmF5LCBgICtcbiAgICAgICAgICAgICAgYGl0IG11c3QgYmUgYW4gT2JqZWN0IHRoYXQgY29udGFpbnMgdGhlICdsYXllcnMnIGZpZWxkLmApO1xuICAgICAgY29uZmlnQXJyYXkgPSBjb25maWdbJ2xheWVycyddIGFzIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdEFycmF5O1xuICAgICAgZGVsZXRlIGNvbmZpZ1snbGF5ZXJzJ107XG4gICAgICBleHRyYU1vZGVsQ29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGVsID0gbmV3IGNscyhleHRyYU1vZGVsQ29uZmlnKTtcbiAgICBpZiAoIShtb2RlbCBpbnN0YW5jZW9mIFNlcXVlbnRpYWwpKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICBgU2VxdWVudGlhbC5mcm9tQ29uZmlnIGNhbGxlZCBvbiBub24tU2VxdWVudGlhbCBpbnB1dDogJHttb2RlbH1gKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjb25mIG9mIGNvbmZpZ0FycmF5KSB7XG4gICAgICBjb25zdCBjdXN0b21PYmplY3RzOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBsYXllciA9IGRlc2VyaWFsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZiBhcyBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QsIGN1c3RvbU9iamVjdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXN0V2VpZ2h0SW5pdCkgYXMgTGF5ZXI7XG4gICAgICBpZiAoZmFzdFdlaWdodEluaXQpIHtcbiAgICAgICAgbGF5ZXIuc2V0RmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIG1vZGVsLmFkZChsYXllcik7XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR0ZXIgdXNlZCBmb3IgZm9yY2Ugc3RvcHBpbmcgb2YgTGF5ZXJzTW9kZWwuZml0KCkgKGkuZS4sIHRyYWluaW5nKS5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKCk7XG4gICAqIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBpbnB1dFNoYXBlOiBbMTBdfSkpO1xuICAgKiBtb2RlbC5jb21waWxlKHtsb3NzOiAnbWVhblNxdWFyZWRFcnJvcicsIG9wdGltaXplcjogJ3NnZCd9KTtcbiAgICogY29uc3QgeHMgPSB0Zi5vbmVzKFs4LCAxMF0pO1xuICAgKiBjb25zdCB5cyA9IHRmLnplcm9zKFs4LCAxXSk7XG4gICAqXG4gICAqIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBtb2RlbC5maXQoeHMsIHlzLCB7XG4gICAqICAgZXBvY2hzOiAxMCxcbiAgICogICBjYWxsYmFja3M6IHtcbiAgICogICAgIG9uRXBvY2hFbmQ6IGFzeW5jIChlcG9jaCwgbG9ncykgPT4ge1xuICAgKiAgICAgICBpZiAoZXBvY2ggPT09IDIpIHtcbiAgICogICAgICAgICBtb2RlbC5zdG9wVHJhaW5pbmcgPSB0cnVlO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqICAgfVxuICAgKiB9KTtcbiAgICpcbiAgICogLy8gVGhlcmUgc2hvdWxkIGJlIG9ubHkgMyB2YWx1ZXMgaW4gdGhlIGxvc3MgYXJyYXksIGluc3RlYWQgb2YgMTAgdmFsdWVzLFxuICAgKiAvLyBkdWUgdG8gdGhlIHN0b3BwaW5nIGFmdGVyIDMgZXBvY2hzLlxuICAgKiBjb25zb2xlLmxvZyhoaXN0b3J5Lmhpc3RvcnkubG9zcyk7XG4gICAqIGBgYFxuICAgKi9cbiAgb3ZlcnJpZGUgc2V0IHN0b3BUcmFpbmluZyhzdG9wOiBib29sZWFuKSB7XG4gICAgLy8gVE9ETyhjYWlzKTogV2hlbiByZWZhY3RvcmluZyB0byByZW1vdmUgdGhlIGNvbXBvc2l0aW9uIHBhdHRlcm4gaGFwcGVucyxcbiAgICAvLyByZW1vdmUgdGhpcyBtZXRob2Qgb3ZlcnJpZGluZy5cbiAgICBpZiAodGhpcy5tb2RlbCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHNldCB0aGUgc3RvcFRyYWluaW5nIHByb3BlcnR5IG9mIGEgc2VxdWVudGlhbCBtb2RlbCBiZWZvcmUgJyArXG4gICAgICAgICAgJ2l0IGlzIGNvbXBpbGVkLicpO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsLnN0b3BUcmFpbmluZyA9IHN0b3A7XG4gIH1cblxuICBvdmVycmlkZSBnZXQgc3RvcFRyYWluaW5nKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm1vZGVsID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICdDYW5ub3QgZ2V0IHRoZSBzdG9wVHJhaW5pbmcgcHJvcGVydHkgb2YgYSBzZXF1ZW50aWFsIG1vZGVsIGJlZm9yZSAnICtcbiAgICAgICAgICAnaXQgaXMgY29tcGlsZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGVsLnN0b3BUcmFpbmluZztcbiAgfVxuXG4gIC8vIFRPRE8oY2Fpcyk6IE92ZXJyaWRlIGdldCB0cmFpbmFibGVXZWlnaHRzKCkgaGVyZVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgLy8gTk9URShjYWlzKTogV2Ugb3ZlcnJpZGUgdGhlIHJldHVybiB0eXBlIG9mIGdldENvbmZpZygpIHRvIGBhbnlgIGhlcmUsXG4gICAgLy8gICBiZWNhdXNlIHRoZSBgU2VxdWVudGlhbGAgY2xhc3MgaXMgYSBzcGVjaWFsIGNhc2UgYW1vbmcgYENvbnRhaW5lcmBcbiAgICAvLyAgIHN1YnR5cGVzIGluIHRoYXQgaXRzIGdldENvbmZpZygpIG1ldGhvZCByZXR1cm5zIGFuIEFycmF5IChub3QgYVxuICAgIC8vICAgZGljdCkuXG4gICAgY29uc3QgbGF5ZXJzOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3RbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgIGNvbnN0IGRpY3Q6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHt9O1xuICAgICAgZGljdFsnY2xhc3NOYW1lJ10gPSBsYXllci5nZXRDbGFzc05hbWUoKTtcbiAgICAgIGRpY3RbJ2NvbmZpZyddID0gbGF5ZXIuZ2V0Q29uZmlnKCk7XG4gICAgICBsYXllcnMucHVzaChkaWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtuYW1lOiB0aGlzLm5hbWUsIGxheWVyc307XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhTZXF1ZW50aWFsKTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
 * Exported functions.
 */ __turbopack_context__.s([
    "input",
    ()=>input,
    "model",
    ()=>model,
    "registerCallbackConstructor",
    ()=>registerCallbackConstructor,
    "sequential",
    ()=>sequential
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/base_callbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/input_layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/models.js [app-ssr] (ecmascript)");
;
;
;
;
;
function model(args) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersModel"](args);
}
function sequential(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sequential"](config);
}
function input(config) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"])(config);
}
function registerCallbackConstructor(verbosityLevel, callbackConstructor) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallbackConstructorRegistry"].registerCallbackConstructor(verbosityLevel, callbackConstructor);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9leHBvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEVBQTBCLDJCQUEyQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFdEYsT0FBTyxFQUFDLEtBQUssR0FBZSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsVUFBVSxFQUFpQixNQUFNLFVBQVUsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBRXpDLHdFQUF3RTtBQUN4RSx3RUFBd0U7QUFDeEUsa0JBQWtCO0FBRWxCLDJDQUEyQztBQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFtQjtJQUN2QyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyREc7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLE1BQXVCO0lBQ2hELE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBQyxNQUFtQjtJQUN2QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUN2QyxjQUFzQixFQUN0QixtQkFBNEM7SUFDOUMsMkJBQTJCLENBQUMsMkJBQTJCLENBQ25ELGNBQWMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEV4cG9ydGVkIGZ1bmN0aW9ucy5cbiAqL1xuXG5pbXBvcnQge0Jhc2VDYWxsYmFja0NvbnN0cnVjdG9yLCBDYWxsYmFja0NvbnN0cnVjdG9yUmVnaXN0cnl9IGZyb20gJy4vYmFzZV9jYWxsYmFja3MnO1xuaW1wb3J0IHtDb250YWluZXJBcmdzfSBmcm9tICcuL2VuZ2luZS9jb250YWluZXInO1xuaW1wb3J0IHtJbnB1dCwgSW5wdXRDb25maWcsfSBmcm9tICcuL2VuZ2luZS9pbnB1dF9sYXllcic7XG5pbXBvcnQge1N5bWJvbGljVGVuc29yfSBmcm9tICcuL2VuZ2luZS90b3BvbG9neSc7XG5pbXBvcnQge0xheWVyc01vZGVsfSBmcm9tICcuL2VuZ2luZS90cmFpbmluZyc7XG5pbXBvcnQge1NlcXVlbnRpYWwsIFNlcXVlbnRpYWxBcmdzfSBmcm9tICcuL21vZGVscyc7XG5cbmV4cG9ydCB7bG9hZExheWVyc01vZGVsfSBmcm9tICcuL21vZGVscyc7XG5cbi8vIFRPRE8oY2Fpcyk6IEFkZCBkb2Mgc3RyaW5nIHRvIGFsbCB0aGUgcHVibGljIHN0YXRpYyBmdW5jdGlvbnMgaW4gdGhpc1xuLy8gICBjbGFzczsgaW5jbHVkZSBleGVjdHVhYmxlIEphdmFTY3JpcHQgY29kZSBzbmlwcGV0cyB3aGVyZSBhcHBsaWNhYmxlXG4vLyAgIChiLzc0MDc0NDU4KS5cblxuLy8gTGF5ZXJzTW9kZWwgYW5kIHJlbGF0ZWQgZmFjdG9yeSBtZXRob2RzLlxuXG4vKipcbiAqIEEgbW9kZWwgaXMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IGNvbnNpc3RzIG9mIGBMYXllcnNgIGFuZCBkZWZpbmVzIGlucHV0c1xuICogYW5kIG91dHB1dHMuXG4gKlxuICogVGhlIGtleSBkaWZmZXJlbmNlIGJldHdlZW4gYHRmLm1vZGVsYCBhbmQgYHRmLnNlcXVlbnRpYWxgIGlzIHRoYXRcbiAqIGB0Zi5tb2RlbGAgaXMgbW9yZSBnZW5lcmljLCBzdXBwb3J0aW5nIGFuIGFyYml0cmFyeSBncmFwaCAod2l0aG91dFxuICogY3ljbGVzKSBvZiBsYXllcnMuIGB0Zi5zZXF1ZW50aWFsYCBpcyBsZXNzIGdlbmVyaWMgYW5kIHN1cHBvcnRzIG9ubHkgYSBsaW5lYXJcbiAqIHN0YWNrIG9mIGxheWVycy5cbiAqXG4gKiBXaGVuIGNyZWF0aW5nIGEgYHRmLkxheWVyc01vZGVsYCwgc3BlY2lmeSBpdHMgaW5wdXQocykgYW5kIG91dHB1dChzKS4gTGF5ZXJzXG4gKiBhcmUgdXNlZCB0byB3aXJlIGlucHV0KHMpIHRvIG91dHB1dChzKS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBjb2RlIHNuaXBwZXQgZGVmaW5lcyBhIG1vZGVsIGNvbnNpc3Rpbmcgb2ZcbiAqIHR3byBgZGVuc2VgIGxheWVycywgd2l0aCAxMCBhbmQgNCB1bml0cywgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIGBgYGpzXG4gKiAvLyBEZWZpbmUgaW5wdXQsIHdoaWNoIGhhcyBhIHNpemUgb2YgNSAobm90IGluY2x1ZGluZyBiYXRjaCBkaW1lbnNpb24pLlxuICogY29uc3QgaW5wdXQgPSB0Zi5pbnB1dCh7c2hhcGU6IFs1XX0pO1xuICpcbiAqIC8vIEZpcnN0IGRlbnNlIGxheWVyIHVzZXMgcmVsdSBhY3RpdmF0aW9uLlxuICogY29uc3QgZGVuc2VMYXllcjEgPSB0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxMCwgYWN0aXZhdGlvbjogJ3JlbHUnfSk7XG4gKiAvLyBTZWNvbmQgZGVuc2UgbGF5ZXIgdXNlcyBzb2Z0bWF4IGFjdGl2YXRpb24uXG4gKiBjb25zdCBkZW5zZUxheWVyMiA9IHRmLmxheWVycy5kZW5zZSh7dW5pdHM6IDQsIGFjdGl2YXRpb246ICdzb2Z0bWF4J30pO1xuICpcbiAqIC8vIE9idGFpbiB0aGUgb3V0cHV0IHN5bWJvbGljIHRlbnNvciBieSBhcHBseWluZyB0aGUgbGF5ZXJzIG9uIHRoZSBpbnB1dC5cbiAqIGNvbnN0IG91dHB1dCA9IGRlbnNlTGF5ZXIyLmFwcGx5KGRlbnNlTGF5ZXIxLmFwcGx5KGlucHV0KSk7XG4gKlxuICogLy8gQ3JlYXRlIHRoZSBtb2RlbCBiYXNlZCBvbiB0aGUgaW5wdXRzLlxuICogY29uc3QgbW9kZWwgPSB0Zi5tb2RlbCh7aW5wdXRzOiBpbnB1dCwgb3V0cHV0czogb3V0cHV0fSk7XG4gKlxuICogLy8gVGhlIG1vZGVsIGNhbiBiZSB1c2VkIGZvciB0cmFpbmluZywgZXZhbHVhdGlvbiBhbmQgcHJlZGljdGlvbi5cbiAqIC8vIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIGxpbmUgcnVucyBwcmVkaWN0aW9uIHdpdGggdGhlIG1vZGVsIG9uXG4gKiAvLyBzb21lIGZha2UgZGF0YS5cbiAqIG1vZGVsLnByZWRpY3QodGYub25lcyhbMiwgNV0pKS5wcmludCgpO1xuICogYGBgXG4gKiBTZWUgYWxzbzpcbiAqICAgYHRmLnNlcXVlbnRpYWxgLCBgdGYubG9hZExheWVyc01vZGVsYC5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgc3ViaGVhZGluZzogJ0NyZWF0aW9uJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vZGVsKGFyZ3M6IENvbnRhaW5lckFyZ3MpOiBMYXllcnNNb2RlbCB7XG4gIHJldHVybiBuZXcgTGF5ZXJzTW9kZWwoYXJncyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGB0Zi5TZXF1ZW50aWFsYCBtb2RlbC4gIEEgc2VxdWVudGlhbCBtb2RlbCBpcyBhbnkgbW9kZWwgd2hlcmUgdGhlXG4gKiBvdXRwdXRzIG9mIG9uZSBsYXllciBhcmUgdGhlIGlucHV0cyB0byB0aGUgbmV4dCBsYXllciwgaS5lLiB0aGUgbW9kZWxcbiAqIHRvcG9sb2d5IGlzIGEgc2ltcGxlICdzdGFjaycgb2YgbGF5ZXJzLCB3aXRoIG5vIGJyYW5jaGluZyBvciBza2lwcGluZy5cbiAqXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGZpcnN0IGxheWVyIHBhc3NlZCB0byBhIGB0Zi5TZXF1ZW50aWFsYCBtb2RlbCBzaG91bGQgaGF2ZVxuICogYSBkZWZpbmVkIGlucHV0IHNoYXBlLiBXaGF0IHRoYXQgbWVhbnMgaXMgdGhhdCBpdCBzaG91bGQgaGF2ZSByZWNlaXZlZCBhblxuICogYGlucHV0U2hhcGVgIG9yIGBiYXRjaElucHV0U2hhcGVgIGFyZ3VtZW50LCBvciBmb3Igc29tZSB0eXBlIG9mIGxheWVyc1xuICogKHJlY3VycmVudCwgRGVuc2UuLi4pIGFuIGBpbnB1dERpbWAgYXJndW1lbnQuXG4gKlxuICogVGhlIGtleSBkaWZmZXJlbmNlIGJldHdlZW4gYHRmLm1vZGVsYCBhbmQgYHRmLnNlcXVlbnRpYWxgIGlzIHRoYXRcbiAqIGB0Zi5zZXF1ZW50aWFsYCBpcyBsZXNzIGdlbmVyaWMsIHN1cHBvcnRpbmcgb25seSBhIGxpbmVhciBzdGFjayBvZiBsYXllcnMuXG4gKiBgdGYubW9kZWxgIGlzIG1vcmUgZ2VuZXJpYyBhbmQgc3VwcG9ydHMgYW4gYXJiaXRyYXJ5IGdyYXBoICh3aXRob3V0XG4gKiBjeWNsZXMpIG9mIGxheWVycy5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKCk7XG4gKlxuICogLy8gRmlyc3QgbGF5ZXIgbXVzdCBoYXZlIGFuIGlucHV0IHNoYXBlIGRlZmluZWQuXG4gKiBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czogMzIsIGlucHV0U2hhcGU6IFs1MF19KSk7XG4gKiAvLyBBZnRlcndhcmRzLCBURi5qcyBkb2VzIGF1dG9tYXRpYyBzaGFwZSBpbmZlcmVuY2UuXG4gKiBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czogNH0pKTtcbiAqXG4gKiAvLyBJbnNwZWN0IHRoZSBpbmZlcnJlZCBzaGFwZSBvZiB0aGUgbW9kZWwncyBvdXRwdXQsIHdoaWNoIGVxdWFsc1xuICogLy8gYFtudWxsLCA0XWAuIFRoZSAxc3QgZGltZW5zaW9uIGlzIHRoZSB1bmRldGVybWluZWQgYmF0Y2ggZGltZW5zaW9uOyB0aGVcbiAqIC8vIDJuZCBpcyB0aGUgb3V0cHV0IHNpemUgb2YgdGhlIG1vZGVsJ3MgbGFzdCBsYXllci5cbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1vZGVsLm91dHB1dHNbMF0uc2hhcGUpKTtcbiAqIGBgYFxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gc3BlY2lmeSBhIGJhdGNoIHNpemUgKHdpdGggcG90ZW50aWFsbHkgdW5kZXRlcm1pbmVkXG4gKiBiYXRjaCBkaW1lbnNpb24sIGRlbm90ZWQgYnkgXCJudWxsXCIpIGZvciB0aGUgZmlyc3QgbGF5ZXIgdXNpbmcgdGhlXG4gKiBgYmF0Y2hJbnB1dFNoYXBlYCBrZXkuIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBhYm92ZTpcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKCk7XG4gKlxuICogLy8gRmlyc3QgbGF5ZXIgbXVzdCBoYXZlIGEgZGVmaW5lZCBpbnB1dCBzaGFwZVxuICogbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6IDMyLCBiYXRjaElucHV0U2hhcGU6IFtudWxsLCA1MF19KSk7XG4gKiAvLyBBZnRlcndhcmRzLCBURi5qcyBkb2VzIGF1dG9tYXRpYyBzaGFwZSBpbmZlcmVuY2UuXG4gKiBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czogNH0pKTtcbiAqXG4gKiAvLyBJbnNwZWN0IHRoZSBpbmZlcnJlZCBzaGFwZSBvZiB0aGUgbW9kZWwncyBvdXRwdXQuXG4gKiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtb2RlbC5vdXRwdXRzWzBdLnNoYXBlKSk7XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFsc28gdXNlIGFuIGBBcnJheWAgb2YgYWxyZWFkeS1jb25zdHJ1Y3RlZCBgTGF5ZXJgcyB0byBjcmVhdGVcbiAqIGEgYHRmLlNlcXVlbnRpYWxgIG1vZGVsOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoe1xuICogICBsYXllcnM6IFt0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAzMiwgaW5wdXRTaGFwZTogWzUwXX0pLFxuICogICAgICAgICAgICB0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiA0fSldXG4gKiB9KTtcbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1vZGVsLm91dHB1dHNbMF0uc2hhcGUpKTtcbiAqIGBgYFxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ3JlYXRpb24nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVudGlhbChjb25maWc/OiBTZXF1ZW50aWFsQXJncyk6IFNlcXVlbnRpYWwge1xuICByZXR1cm4gbmV3IFNlcXVlbnRpYWwoY29uZmlnKTtcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGluc3RhbnRpYXRlIGFuIGlucHV0IHRvIGEgbW9kZWwgYXMgYSBgdGYuU3ltYm9saWNUZW5zb3JgLlxuICpcbiAqIFVzZXJzIHNob3VsZCBjYWxsIHRoZSBgaW5wdXRgIGZhY3RvcnkgZnVuY3Rpb24gZm9yXG4gKiBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGdlbmVyYXRvciBmdW5jdGlvbnMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogLy8gRGVmaW5lcyBhIHNpbXBsZSBsb2dpc3RpYyByZWdyZXNzaW9uIG1vZGVsIHdpdGggMzIgZGltZW5zaW9uYWwgaW5wdXRcbiAqIC8vIGFuZCAzIGRpbWVuc2lvbmFsIG91dHB1dC5cbiAqIGNvbnN0IHggPSB0Zi5pbnB1dCh7c2hhcGU6IFszMl19KTtcbiAqIGNvbnN0IHkgPSB0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAzLCBhY3RpdmF0aW9uOiAnc29mdG1heCd9KS5hcHBseSh4KTtcbiAqIGNvbnN0IG1vZGVsID0gdGYubW9kZWwoe2lucHV0czogeCwgb3V0cHV0czogeX0pO1xuICogbW9kZWwucHJlZGljdCh0Zi5vbmVzKFsyLCAzMl0pKS5wcmludCgpO1xuICogYGBgXG4gKlxuICogTm90ZTogYGlucHV0YCBpcyBvbmx5IG5lY2Vzc2FyeSB3aGVuIHVzaW5nIGBtb2RlbGAuIFdoZW4gdXNpbmdcbiAqIGBzZXF1ZW50aWFsYCwgc3BlY2lmeSBgaW5wdXRTaGFwZWAgZm9yIHRoZSBmaXJzdCBsYXllciBvciB1c2UgYGlucHV0TGF5ZXJgXG4gKiBhcyB0aGUgZmlyc3QgbGF5ZXIuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdJbnB1dHMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5wdXQoY29uZmlnOiBJbnB1dENvbmZpZyk6IFN5bWJvbGljVGVuc29yIHtcbiAgcmV0dXJuIElucHV0KGNvbmZpZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrQ29uc3RydWN0b3IoXG4gICAgdmVyYm9zaXR5TGV2ZWw6IG51bWJlcixcbiAgICBjYWxsYmFja0NvbnN0cnVjdG9yOiBCYXNlQ2FsbGJhY2tDb25zdHJ1Y3Rvcik6IHZvaWQge1xuICBDYWxsYmFja0NvbnN0cnVjdG9yUmVnaXN0cnkucmVnaXN0ZXJDYWxsYmFja0NvbnN0cnVjdG9yKFxuICAgICAgdmVyYm9zaXR5TGV2ZWwsIGNhbGxiYWNrQ29uc3RydWN0b3IpO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/activations.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ // Layer activation functions
__turbopack_context__.s([
    "Activation",
    ()=>Activation,
    "Elu",
    ()=>Elu,
    "Gelu",
    ()=>Gelu,
    "GeluNew",
    ()=>GeluNew,
    "HardSigmoid",
    ()=>HardSigmoid,
    "Linear",
    ()=>Linear,
    "LogSoftmax",
    ()=>LogSoftmax,
    "Mish",
    ()=>Mish,
    "Relu",
    ()=>Relu,
    "Relu6",
    ()=>Relu6,
    "Selu",
    ()=>Selu,
    "Sigmoid",
    ()=>Sigmoid,
    "Softmax",
    ()=>Softmax,
    "Softplus",
    ()=>Softplus,
    "Softsign",
    ()=>Softsign,
    "Swish",
    ()=>Swish,
    "Tanh",
    ()=>Tanh,
    "deserializeActivation",
    ()=>deserializeActivation,
    "getActivation",
    ()=>getActivation,
    "serializeActivation",
    ()=>serializeActivation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$selu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/selu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/relu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$minimum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/minimum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sigmoid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sigmoid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softplus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/softplus.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tanh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tanh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softmax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/softmax.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log_softmax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/log_softmax.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/erf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sqrt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/pow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
;
;
;
class Activation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].Serializable {
    getConfig() {
        return {};
    }
}
/**
 * Exponential linear unit (ELU).
 * Reference: https://arxiv.org/abs/1511.07289
 */ class Elu extends Activation {
    /**
     * Calculate the activation function.
     *
     * @param x: Input.
     * @param alpha: Scaling factor the negative section.
     * @return Output of the ELU activation.
     */ apply(x, alpha = 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["elu"](x, alpha);
    }
}
/** @nocollapse */ Elu.className = 'elu';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Elu);
/**
 * Scaled Exponential Linear Unit. (Klambauer et al., 2017).
 * Reference: Self-Normalizing Neural Networks, https://arxiv.org/abs/1706.02515
 * Notes:
 *   - To be used together with the initialization "lecunNormal".
 *   - To be used together with the dropout variant "AlphaDropout".
 */ class Selu extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$selu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selu"](x);
    }
}
/** @nocollapse */ Selu.className = 'selu';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Selu);
/**
 *  Rectified linear unit
 */ class Relu extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relu"](x);
    }
}
/** @nocollapse */ Relu.className = 'relu';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Relu);
/**
 * Rectified linear unit activation maxing out at 6.0.
 */ class Relu6 extends Activation {
    apply(x) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$minimum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minimum"](6.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$relu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["relu"](x)));
    }
}
/** @nocollapse */ Relu6.className = 'relu6';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Relu6);
//* Linear activation (no-op) */
class Linear extends Activation {
    apply(x) {
        return x;
    }
}
/** @nocollapse */ Linear.className = 'linear';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Linear);
/**
 * Sigmoid activation function.
 */ class Sigmoid extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sigmoid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sigmoid"](x);
    }
}
/** @nocollapse */ Sigmoid.className = 'sigmoid';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Sigmoid);
/**
 * Segment-wise linear approximation of sigmoid.
 */ class HardSigmoid extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hardSigmoid"](x);
    }
}
/** @nocollapse */ HardSigmoid.className = 'hardSigmoid';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(HardSigmoid);
/**
 * Softplus activation function.
 */ class Softplus extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softplus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softplus"](x);
    }
}
/** @nocollapse */ Softplus.className = 'softplus';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Softplus);
/**
 * Softsign activation function.
 */ class Softsign extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softsign"](x);
    }
}
/** @nocollapse */ Softsign.className = 'softsign';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Softsign);
/**
 * Hyperbolic tangent function.
 */ class Tanh extends Activation {
    apply(x) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tanh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tanh"](x);
    }
}
/** @nocollapse */ Tanh.className = 'tanh';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Tanh);
/**
 * Softmax activation function
 */ class Softmax extends Activation {
    /**
     * Calculate the activation function.
     *
     * @param x Tensor.
     * @param axis Integer, axis along which the softmax normalization is applied.
     * Invalid if < 2, as softmax across 1 (the batch dimension) is assumed to be
     * an error.
     *
     * @returns a Tensor of the same shape as x
     *
     * @throws ValueError: In case `dim(x) < 2`.
     */ apply(x, axis = -1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softmax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softmax"](x, axis);
    }
}
/** @nocollapse */ Softmax.className = 'softmax';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Softmax);
/**
 * Log softmax activation function
 */ class LogSoftmax extends Activation {
    /**
     * Calculate the activation function of log softmax:
     * log( exp(x_i) / sum(exp(x)) )
     *
     * @param x Tensor.
     * @param axis Integer, axis along which the softmax normalization is applied.
     * Invalid if < 2, as softmax across 1 (the batch dimension) is assumed to be
     * an error.
     *
     * @returns a Tensor of the same shape as x
     *
     * @throws ValueError: In case `dim(x) < 2`.
     */ apply(x, axis = -1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$log_softmax$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSoftmax"](x, axis);
    }
}
/** @nocollapse */ LogSoftmax.className = 'logSoftmax';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(LogSoftmax);
/**
 * Gelu activation function
 */ class Gelu extends Activation {
    /**
     * Calculate the activation function.
     *
     * @param x Tensor.
     * @returns a Tensor of the same shape as x
     */ apply(x) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
                const sqrtTwo = Math.sqrt(2);
                // Compute Φ(x) using the erf function
                const cdf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](0.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erf"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](x, sqrtTwo))));
                // Compute GELU(x) = x * Φ(x)
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](x, cdf);
            });
        });
    }
}
/** @nocollapse */ Gelu.className = 'gelu';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Gelu);
/**
 * GeluNew activation function
 */ class GeluNew extends Activation {
    /**
     * Calculate the activation function.
     *
     * @param x Tensor.
     * @returns a Tensor of the same shape as x
     */ apply(x) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](0.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tanh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tanh"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sqrt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sqrt"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](2, Math.PI)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](0.044715, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$pow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pow"](x, 3))))))));
        });
    }
}
/** @nocollapse */ GeluNew.className = 'gelu_new';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(GeluNew);
/**
 * Mish activation function
 */ class Mish extends Activation {
    /**
     * Calculate the activation function.
     *
     * @param x Tensor.
     * @returns a Tensor of the same shape as x
     */ apply(x) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tanh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tanh"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$softplus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["softplus"](x))));
    }
}
/** @nocollapse */ Mish.className = 'mish';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Mish);
/**
 * Swish activation function
 */ class Swish extends Activation {
    /**
     * Calculate the activation function.
     *
     * @param x Tensor.
     * @param alpha Scaling factor for the sigmoid function.
     * @returns a Tensor of the same shape as x
     */ apply(x, alpha = 1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sigmoid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sigmoid"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](x, alpha)), x));
    }
}
/** @nocollapse */ Swish.className = 'swish';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Swish);
function serializeActivation(activation) {
    return activation.getClassName();
}
function deserializeActivation(config, customObjects = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeKerasObject"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].SerializationMap.getMap().classNameMap, customObjects, 'activation');
}
function getActivation(identifier) {
    if (identifier == null) {
        const config = {};
        config['className'] = 'linear';
        config['config'] = {};
        return deserializeActivation(config);
    }
    if (typeof identifier === 'string') {
        const config = {};
        config['className'] = identifier;
        config['config'] = {};
        return deserializeActivation(config);
    } else if (identifier instanceof Activation) {
        return identifier;
    } else {
        return deserializeActivation(identifier);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvYWN0aXZhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCw2QkFBNkI7QUFDN0IsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFVLElBQUksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sS0FBSyxDQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFNUMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFN0Q7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFnQixVQUFXLFNBQVEsYUFBYSxDQUFDLFlBQVk7SUFFakUsU0FBUztRQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGO0FBRUQ7OztHQUdHO0FBQ0gsTUFBYSxHQUFJLFNBQVEsVUFBVTtJQUdqQzs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsQ0FBUyxFQUFFLEtBQUssR0FBRyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7QUFYRCxrQkFBa0I7QUFDRixhQUFTLEdBQUcsS0FBSyxDQUFDO1NBRnZCLEdBQUc7QUFjaEIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVqQzs7Ozs7O0dBTUc7QUFDSCxNQUFhLElBQUssU0FBUSxVQUFVO0lBR2xDLEtBQUssQ0FBQyxDQUFTO1FBQ2IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O0FBSkQsa0JBQWtCO0FBQ0YsY0FBUyxHQUFHLE1BQU0sQ0FBQztTQUZ4QixJQUFJO0FBT2pCLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7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QUFDO0tBQ3RDO0lBQ0QsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7UUFDbEMsTUFBTSxNQUFNLEdBQTZCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBTyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0QztTQUFNLElBQUksVUFBVSxZQUFZLFVBQVUsRUFBRTtRQUMzQyxPQUFPLFVBQVUsQ0FBQztLQUNuQjtTQUFNO1FBQ0wsT0FBTyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMxQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vLyBMYXllciBhY3RpdmF0aW9uIGZ1bmN0aW9uc1xuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge3NlcmlhbGl6YXRpb24sIFRlbnNvciwgdGlkeX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCAqIGFzIEsgZnJvbSAnLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge0FjdGl2YXRpb25JZGVudGlmaWVyfSBmcm9tICcuL2tlcmFzX2Zvcm1hdC9hY3RpdmF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge2Rlc2VyaWFsaXplS2VyYXNPYmplY3R9IGZyb20gJy4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgQWN0aXZhdGlvbnMuXG4gKlxuICogU3BlY2lhbCBub3RlOiBkdWUgdG8gY3Jvc3MtbGFuZ3VhZ2UgY29tcGF0aWJpbGl0eSByZWFzb25zLCB0aGVcbiAqIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgZmllbGQgaW4gdGhpcyBmYW1pbHkgb2YgY2xhc3NlcyBtdXN0IGJlIHNldCB0b1xuICogdGhlIGluaXRpYWxMb3dlckNhbWVsQ2FzZSBuYW1lIG9mIHRoZSBhY3RpdmF0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWN0aXZhdGlvbiBleHRlbmRzIHNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlIHtcbiAgYWJzdHJhY3QgYXBwbHkodGVuc29yOiBUZW5zb3IsIGF4aXM/OiBudW1iZXIpOiBUZW5zb3I7XG4gIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG4vKipcbiAqIEV4cG9uZW50aWFsIGxpbmVhciB1bml0IChFTFUpLlxuICogUmVmZXJlbmNlOiBodHRwczovL2FyeGl2Lm9yZy9hYnMvMTUxMS4wNzI4OVxuICovXG5leHBvcnQgY2xhc3MgRWx1IGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ2VsdSc7XG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFjdGl2YXRpb24gZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB4OiBJbnB1dC5cbiAgICogQHBhcmFtIGFscGhhOiBTY2FsaW5nIGZhY3RvciB0aGUgbmVnYXRpdmUgc2VjdGlvbi5cbiAgICogQHJldHVybiBPdXRwdXQgb2YgdGhlIEVMVSBhY3RpdmF0aW9uLlxuICAgKi9cbiAgYXBwbHkoeDogVGVuc29yLCBhbHBoYSA9IDEpOiBUZW5zb3Ige1xuICAgIHJldHVybiBLLmVsdSh4LCBhbHBoYSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhFbHUpO1xuXG4vKipcbiAqIFNjYWxlZCBFeHBvbmVudGlhbCBMaW5lYXIgVW5pdC4gKEtsYW1iYXVlciBldCBhbC4sIDIwMTcpLlxuICogUmVmZXJlbmNlOiBTZWxmLU5vcm1hbGl6aW5nIE5ldXJhbCBOZXR3b3JrcywgaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzE3MDYuMDI1MTVcbiAqIE5vdGVzOlxuICogICAtIFRvIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCB0aGUgaW5pdGlhbGl6YXRpb24gXCJsZWN1bk5vcm1hbFwiLlxuICogICAtIFRvIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCB0aGUgZHJvcG91dCB2YXJpYW50IFwiQWxwaGFEcm9wb3V0XCIuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWx1IGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ3NlbHUnO1xuICBhcHBseSh4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAgIHJldHVybiB0ZmMuc2VsdSh4KTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFNlbHUpO1xuXG4vKipcbiAqICBSZWN0aWZpZWQgbGluZWFyIHVuaXRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbHUgZXh0ZW5kcyBBY3RpdmF0aW9uIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgPSAncmVsdSc7XG4gIGFwcGx5KHg6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRmYy5yZWx1KHgpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoUmVsdSk7XG5cbi8qKlxuICogUmVjdGlmaWVkIGxpbmVhciB1bml0IGFjdGl2YXRpb24gbWF4aW5nIG91dCBhdCA2LjAuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWx1NiBleHRlbmRzIEFjdGl2YXRpb24ge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNsYXNzTmFtZSA9ICdyZWx1Nic7XG4gIGFwcGx5KHg6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4gdGZjLm1pbmltdW0oNi4wLCB0ZmMucmVsdSh4KSkpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoUmVsdTYpO1xuXG4vLyogTGluZWFyIGFjdGl2YXRpb24gKG5vLW9wKSAqL1xuZXhwb3J0IGNsYXNzIExpbmVhciBleHRlbmRzIEFjdGl2YXRpb24ge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNsYXNzTmFtZSA9ICdsaW5lYXInO1xuICBhcHBseSh4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAgIHJldHVybiB4O1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoTGluZWFyKTtcblxuLyoqXG4gKiBTaWdtb2lkIGFjdGl2YXRpb24gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTaWdtb2lkIGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ3NpZ21vaWQnO1xuICBhcHBseSh4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAgIHJldHVybiB0ZmMuc2lnbW9pZCh4KTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFNpZ21vaWQpO1xuXG4vKipcbiAqIFNlZ21lbnQtd2lzZSBsaW5lYXIgYXBwcm94aW1hdGlvbiBvZiBzaWdtb2lkLlxuICovXG5leHBvcnQgY2xhc3MgSGFyZFNpZ21vaWQgZXh0ZW5kcyBBY3RpdmF0aW9uIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgPSAnaGFyZFNpZ21vaWQnO1xuICBhcHBseSh4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAgIHJldHVybiBLLmhhcmRTaWdtb2lkKHgpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoSGFyZFNpZ21vaWQpO1xuXG4vKipcbiAqIFNvZnRwbHVzIGFjdGl2YXRpb24gZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTb2Z0cGx1cyBleHRlbmRzIEFjdGl2YXRpb24ge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNsYXNzTmFtZSA9ICdzb2Z0cGx1cyc7XG4gIGFwcGx5KHg6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRmYy5zb2Z0cGx1cyh4KTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKFNvZnRwbHVzKTtcblxuLyoqXG4gKiBTb2Z0c2lnbiBhY3RpdmF0aW9uIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgU29mdHNpZ24gZXh0ZW5kcyBBY3RpdmF0aW9uIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgPSAnc29mdHNpZ24nO1xuICBhcHBseSh4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAgIHJldHVybiBLLnNvZnRzaWduKHgpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoU29mdHNpZ24pO1xuXG4vKipcbiAqIEh5cGVyYm9saWMgdGFuZ2VudCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhbmggZXh0ZW5kcyBBY3RpdmF0aW9uIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgPSAndGFuaCc7XG4gIGFwcGx5KHg6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRmYy50YW5oKHgpO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoVGFuaCk7XG5cbi8qKlxuICogU29mdG1heCBhY3RpdmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTb2Z0bWF4IGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ3NvZnRtYXgnO1xuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3RpdmF0aW9uIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0geCBUZW5zb3IuXG4gICAqIEBwYXJhbSBheGlzIEludGVnZXIsIGF4aXMgYWxvbmcgd2hpY2ggdGhlIHNvZnRtYXggbm9ybWFsaXphdGlvbiBpcyBhcHBsaWVkLlxuICAgKiBJbnZhbGlkIGlmIDwgMiwgYXMgc29mdG1heCBhY3Jvc3MgMSAodGhlIGJhdGNoIGRpbWVuc2lvbikgaXMgYXNzdW1lZCB0byBiZVxuICAgKiBhbiBlcnJvci5cbiAgICpcbiAgICogQHJldHVybnMgYSBUZW5zb3Igb2YgdGhlIHNhbWUgc2hhcGUgYXMgeFxuICAgKlxuICAgKiBAdGhyb3dzIFZhbHVlRXJyb3I6IEluIGNhc2UgYGRpbSh4KSA8IDJgLlxuICAgKi9cbiAgYXBwbHkoeDogVGVuc29yLCBheGlzOiBudW1iZXIgPSAoLTEpKTogVGVuc29yIHtcbiAgICByZXR1cm4gdGZjLnNvZnRtYXgoeCwgYXhpcyk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhTb2Z0bWF4KTtcblxuLyoqXG4gKiBMb2cgc29mdG1heCBhY3RpdmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dTb2Z0bWF4IGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ2xvZ1NvZnRtYXgnO1xuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3RpdmF0aW9uIGZ1bmN0aW9uIG9mIGxvZyBzb2Z0bWF4OlxuICAgKiBsb2coIGV4cCh4X2kpIC8gc3VtKGV4cCh4KSkgKVxuICAgKlxuICAgKiBAcGFyYW0geCBUZW5zb3IuXG4gICAqIEBwYXJhbSBheGlzIEludGVnZXIsIGF4aXMgYWxvbmcgd2hpY2ggdGhlIHNvZnRtYXggbm9ybWFsaXphdGlvbiBpcyBhcHBsaWVkLlxuICAgKiBJbnZhbGlkIGlmIDwgMiwgYXMgc29mdG1heCBhY3Jvc3MgMSAodGhlIGJhdGNoIGRpbWVuc2lvbikgaXMgYXNzdW1lZCB0byBiZVxuICAgKiBhbiBlcnJvci5cbiAgICpcbiAgICogQHJldHVybnMgYSBUZW5zb3Igb2YgdGhlIHNhbWUgc2hhcGUgYXMgeFxuICAgKlxuICAgKiBAdGhyb3dzIFZhbHVlRXJyb3I6IEluIGNhc2UgYGRpbSh4KSA8IDJgLlxuICAgKi9cbiAgYXBwbHkoeDogVGVuc29yLCBheGlzOiBudW1iZXIgPSAoLTEpKTogVGVuc29yIHtcbiAgICByZXR1cm4gdGZjLmxvZ1NvZnRtYXgoeCwgYXhpcyk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhMb2dTb2Z0bWF4KTtcblxuLyoqXG4gKiBHZWx1IGFjdGl2YXRpb24gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdlbHUgZXh0ZW5kcyBBY3RpdmF0aW9uIHtcbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyByZWFkb25seSBjbGFzc05hbWUgPSAnZ2VsdSc7XG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFjdGl2YXRpb24gZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB4IFRlbnNvci5cbiAgICogQHJldHVybnMgYSBUZW5zb3Igb2YgdGhlIHNhbWUgc2hhcGUgYXMgeFxuICAgKi9cbiAgYXBwbHkoeDogVGVuc29yKTogVGVuc29yIHtcbiAgICByZXR1cm4gdGlkeSgoKSA9PiB7XG4gICAgICByZXR1cm4gdGZjLnRpZHkoKCkgPT4ge1xuICAgICAgICBjb25zdCBzcXJ0VHdvID0gTWF0aC5zcXJ0KDIpO1xuICAgICAgICAvLyBDb21wdXRlIM6mKHgpIHVzaW5nIHRoZSBlcmYgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgY2RmID0gdGZjLm11bCgwLjUsIHRmYy5hZGQoMSwgdGZjLmVyZih0ZmMuZGl2KHgsIHNxcnRUd28pKSkpO1xuICAgICAgICAvLyBDb21wdXRlIEdFTFUoeCkgPSB4ICogzqYoeClcbiAgICAgICAgcmV0dXJuIHRmYy5tdWwoeCwgY2RmKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2VsdSk7XG5cbi8qKlxuICogR2VsdU5ldyBhY3RpdmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBHZWx1TmV3IGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ2dlbHVfbmV3JztcbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgYWN0aXZhdGlvbiBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHggVGVuc29yLlxuICAgKiBAcmV0dXJucyBhIFRlbnNvciBvZiB0aGUgc2FtZSBzaGFwZSBhcyB4XG4gICAqL1xuICBhcHBseSh4OiBUZW5zb3IpOiBUZW5zb3Ige1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIHJldHVybiB0ZmMubXVsKFxuICAgICAgICAwLjUsXG4gICAgICAgIHRmYy5tdWwoXG4gICAgICAgICAgeCxcbiAgICAgICAgICB0ZmMuYWRkKFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICB0ZmMudGFuaChcbiAgICAgICAgICAgICAgICB0ZmMubXVsKFxuICAgICAgICAgICAgICAgICAgdGZjLnNxcnQodGZjLmRpdigyLCBNYXRoLlBJKSksXG4gICAgICAgICAgICAgICAgICB0ZmMuYWRkKHgsIHRmYy5tdWwoMC4wNDQ3MTUsIHRmYy5wb3coeCwgMykpKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5zZXJpYWxpemF0aW9uLnJlZ2lzdGVyQ2xhc3MoR2VsdU5ldyk7XG5cbi8qKlxuICogTWlzaCBhY3RpdmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNaXNoIGV4dGVuZHMgQWN0aXZhdGlvbiB7XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkgY2xhc3NOYW1lID0gJ21pc2gnO1xuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBhY3RpdmF0aW9uIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0geCBUZW5zb3IuXG4gICAqIEByZXR1cm5zIGEgVGVuc29yIG9mIHRoZSBzYW1lIHNoYXBlIGFzIHhcbiAgICovXG4gIGFwcGx5KHg6IFRlbnNvcik6IFRlbnNvciB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4gdGZjLm11bCh4LCB0ZmMudGFuaCh0ZmMuc29mdHBsdXMoeCkpKSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhNaXNoKTtcblxuLyoqXG4gKiBTd2lzaCBhY3RpdmF0aW9uIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTd2lzaCBleHRlbmRzIEFjdGl2YXRpb24ge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNsYXNzTmFtZSA9ICdzd2lzaCc7XG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIGFjdGl2YXRpb24gZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB4IFRlbnNvci5cbiAgICogQHBhcmFtIGFscGhhIFNjYWxpbmcgZmFjdG9yIGZvciB0aGUgc2lnbW9pZCBmdW5jdGlvbi5cbiAgICogQHJldHVybnMgYSBUZW5zb3Igb2YgdGhlIHNhbWUgc2hhcGUgYXMgeFxuICAgKi9cbiAgYXBwbHkoeDogVGVuc29yLCBhbHBoYSA9IDEpOiBUZW5zb3Ige1xuICAgIHJldHVybiB0aWR5KCgpID0+IHRmYy5tdWwodGZjLnNpZ21vaWQodGZjLm11bCh4LCBhbHBoYSkpLCB4KSk7XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhTd2lzaCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVBY3RpdmF0aW9uKGFjdGl2YXRpb246IEFjdGl2YXRpb24pOiBzdHJpbmcge1xuICByZXR1cm4gYWN0aXZhdGlvbi5nZXRDbGFzc05hbWUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplQWN0aXZhdGlvbihcbiAgICBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCxcbiAgICBjdXN0b21PYmplY3RzOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fSk6IEFjdGl2YXRpb24ge1xuICByZXR1cm4gZGVzZXJpYWxpemVLZXJhc09iamVjdChcbiAgICAgIGNvbmZpZywgc2VyaWFsaXphdGlvbi5TZXJpYWxpemF0aW9uTWFwLmdldE1hcCgpLmNsYXNzTmFtZU1hcCxcbiAgICAgIGN1c3RvbU9iamVjdHMsICdhY3RpdmF0aW9uJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmF0aW9uKGlkZW50aWZpZXI6IEFjdGl2YXRpb25JZGVudGlmaWVyfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0fEFjdGl2YXRpb24pOiBBY3RpdmF0aW9uIHtcbiAgaWYgKGlkZW50aWZpZXIgPT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge307XG4gICAgY29uZmlnWydjbGFzc05hbWUnXSA9ICdsaW5lYXInO1xuICAgIGNvbmZpZ1snY29uZmlnJ10gPSB7fTtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVBY3RpdmF0aW9uKGNvbmZpZyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0ID0ge307XG4gICAgY29uZmlnWydjbGFzc05hbWUnXSA9IGlkZW50aWZpZXI7XG4gICAgY29uZmlnWydjb25maWcnXSA9IHt9O1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZUFjdGl2YXRpb24oY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpZGVudGlmaWVyIGluc3RhbmNlb2YgQWN0aXZhdGlvbikge1xuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZUFjdGl2YXRpb24oaWRlbnRpZmllcik7XG4gIH1cbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* original source: keras/regularizers.py */ __turbopack_context__.s([
    "L1L2",
    ()=>L1L2,
    "REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP",
    ()=>REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP,
    "Regularizer",
    ()=>Regularizer,
    "deserializeRegularizer",
    ()=>deserializeRegularizer,
    "getRegularizer",
    ()=>getRegularizer,
    "l1",
    ()=>l1,
    "l2",
    ()=>l2,
    "serializeRegularizer",
    ()=>serializeRegularizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/abs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/sum.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/zeros.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
;
;
;
;
function assertObjectArgs(args) {
    if (args != null && typeof args !== 'object') {
        throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an ` + `object, but received: ${args}`);
    }
}
class Regularizer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].Serializable {
}
class L1L2 extends Regularizer {
    constructor(args){
        super();
        assertObjectArgs(args);
        this.l1 = args == null || args.l1 == null ? 0.01 : args.l1;
        this.l2 = args == null || args.l2 == null ? 0.01 : args.l2;
        this.hasL1 = this.l1 !== 0;
        this.hasL2 = this.l2 !== 0;
    }
    /**
     * Porting note: Renamed from __call__.
     * @param x Variable of which to calculate the regularization score.
     */ apply(x) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            let regularization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$zeros$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeros"])([
                1
            ]);
            if (this.hasL1) {
                regularization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(regularization, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](this.l1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$abs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["abs"])(x))));
            }
            if (this.hasL2) {
                regularization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"])(regularization, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sum$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sum"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](this.l2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["square"](x))));
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"](regularization, []);
        });
    }
    getConfig() {
        return {
            'l1': this.l1,
            'l2': this.l2
        };
    }
    /** @nocollapse */ static fromConfig(cls, config) {
        return new cls({
            l1: config['l1'],
            l2: config['l2']
        });
    }
}
/** @nocollapse */ L1L2.className = 'L1L2';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(L1L2);
function l1(args) {
    assertObjectArgs(args);
    return new L1L2({
        l1: args != null ? args.l1 : null,
        l2: 0
    });
}
function l2(args) {
    assertObjectArgs(args);
    return new L1L2({
        l2: args != null ? args.l2 : null,
        l1: 0
    });
}
const REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
    'l1l2': 'L1L2'
};
function serializeRegularizer(constraint) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeKerasObject"])(constraint);
}
function deserializeRegularizer(config, customObjects = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeKerasObject"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].SerializationMap.getMap().classNameMap, customObjects, 'regularizer');
}
function getRegularizer(identifier) {
    if (identifier == null) {
        return null;
    }
    if (typeof identifier === 'string') {
        const className = identifier in REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ? REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] : identifier;
        const config = {
            className,
            config: {}
        };
        return deserializeRegularizer(config);
    } else if (identifier instanceof Regularizer) {
        return identifier;
    } else {
        return deserializeRegularizer(identifier);
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVndWxhcml6ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL3JlZ3VsYXJpemVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILDRDQUE0QztBQUU1QyxPQUFPLEtBQUssR0FBRyxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFVLGFBQWEsRUFBRSxHQUFHLEVBQVUsSUFBSSxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hHLE9BQU8sS0FBSyxDQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLHNCQUFzQixFQUFFLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFbkYsU0FBUyxnQkFBZ0IsQ0FBQyxJQUE0QjtJQUNwRCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVDLE1BQU0sSUFBSSxLQUFLLENBQ1gsa0VBQWtFO1lBQ2xFLHlCQUF5QixJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0FBQ0gsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxPQUFnQixXQUFZLFNBQVEsYUFBYSxDQUFDLFlBQVk7Q0FFbkU7QUFtQkQsTUFBYSxJQUFLLFNBQVEsV0FBVztJQVFuQyxZQUFZLElBQWU7UUFDekIsS0FBSyxFQUFFLENBQUM7UUFFUixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUs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RUFBRSxDQUFDLFlBQVksRUFDNUQsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLFVBRVc7SUFDeEMsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtRQUNsQyxNQUFNLFNBQVMsR0FBRyxVQUFVLElBQUksMENBQTBDLENBQUMsQ0FBQztZQUN4RSwwQ0FBMEMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hELFVBQVUsQ0FBQztRQUNmLE1BQU0sTUFBTSxHQUFHLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUN2QyxPQUFPLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZDO1NBQU0sSUFBSSxVQUFVLFlBQVksV0FBVyxFQUFFO1FBQzVDLE9BQU8sVUFBVSxDQUFDO0tBQ25CO1NBQU07UUFDTCxPQUFPLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzNDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qIG9yaWdpbmFsIHNvdXJjZToga2VyYXMvcmVndWxhcml6ZXJzLnB5ICovXG5cbmltcG9ydCAqIGFzIHRmYyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHthYnMsIGFkZCwgU2NhbGFyLCBzZXJpYWxpemF0aW9uLCBzdW0sIFRlbnNvciwgdGlkeSwgemVyb3N9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQgKiBhcyBLIGZyb20gJy4vYmFja2VuZC90ZmpzX2JhY2tlbmQnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZUtlcmFzT2JqZWN0LCBzZXJpYWxpemVLZXJhc09iamVjdH0gZnJvbSAnLi91dGlscy9nZW5lcmljX3V0aWxzJztcblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0QXJncyhhcmdzOiBMMUFyZ3N8TDJBcmdzfEwxTDJBcmdzKTogdm9pZCB7XG4gIGlmIChhcmdzICE9IG51bGwgJiYgdHlwZW9mIGFyZ3MgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQXJndW1lbnQgdG8gTDFMMiByZWd1bGFyaXplcidzIGNvbnN0cnVjdG9yIGlzIGV4cGVjdGVkIHRvIGJlIGFuIGAgK1xuICAgICAgICBgb2JqZWN0LCBidXQgcmVjZWl2ZWQ6ICR7YXJnc31gKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlZ3VsYXJpemVyIGJhc2UgY2xhc3MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWd1bGFyaXplciBleHRlbmRzIHNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlIHtcbiAgYWJzdHJhY3QgYXBwbHkoeDogVGVuc29yKTogU2NhbGFyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEwxTDJBcmdzIHtcbiAgLyoqIEwxIHJlZ3VsYXJpemF0aW9uIHJhdGUuIERlZmF1bHRzIHRvIDAuMDEuICovXG4gIGwxPzogbnVtYmVyO1xuICAvKiogTDIgcmVndWxhcml6YXRpb24gcmF0ZS4gRGVmYXVsdHMgdG8gMC4wMS4gKi9cbiAgbDI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTDFBcmdzIHtcbiAgLyoqIEwxIHJlZ3VsYXJpemF0aW9uIHJhdGUuIERlZmF1bHRzIHRvIDAuMDEuICovXG4gIGwxOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTDJBcmdzIHtcbiAgLyoqIEwyIHJlZ3VsYXJpemF0aW9uIHJhdGUuIERlZmF1bHRzIHRvIDAuMDEuICovXG4gIGwyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBMMUwyIGV4dGVuZHMgUmVndWxhcml6ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdMMUwyJztcblxuICBwcml2YXRlIHJlYWRvbmx5IGwxOiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgbDI6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBoYXNMMTogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWFkb25seSBoYXNMMjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoYXJncz86IEwxTDJBcmdzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGFzc2VydE9iamVjdEFyZ3MoYXJncyk7XG5cbiAgICB0aGlzLmwxID0gYXJncyA9PSBudWxsIHx8IGFyZ3MubDEgPT0gbnVsbCA/IDAuMDEgOiBhcmdzLmwxO1xuICAgIHRoaXMubDIgPSBhcmdzID09IG51bGwgfHwgYXJncy5sMiA9PSBudWxsID8gMC4wMSA6IGFyZ3MubDI7XG4gICAgdGhpcy5oYXNMMSA9IHRoaXMubDEgIT09IDA7XG4gICAgdGhpcy5oYXNMMiA9IHRoaXMubDIgIT09IDA7XG4gIH1cblxuICAvKipcbiAgICogUG9ydGluZyBub3RlOiBSZW5hbWVkIGZyb20gX19jYWxsX18uXG4gICAqIEBwYXJhbSB4IFZhcmlhYmxlIG9mIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgcmVndWxhcml6YXRpb24gc2NvcmUuXG4gICAqL1xuICBhcHBseSh4OiBUZW5zb3IpOiBTY2FsYXIge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGxldCByZWd1bGFyaXphdGlvbjogVGVuc29yID0gemVyb3MoWzFdKTtcbiAgICAgIGlmICh0aGlzLmhhc0wxKSB7XG4gICAgICAgIHJlZ3VsYXJpemF0aW9uID0gYWRkKHJlZ3VsYXJpemF0aW9uLCBzdW0odGZjLm11bCh0aGlzLmwxLCBhYnMoeCkpKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNMMikge1xuICAgICAgICByZWd1bGFyaXphdGlvbiA9XG4gICAgICAgICAgICBhZGQocmVndWxhcml6YXRpb24sIHN1bSh0ZmMubXVsKHRoaXMubDIsIEsuc3F1YXJlKHgpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRmYy5yZXNoYXBlKHJlZ3VsYXJpemF0aW9uLCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICByZXR1cm4geydsMSc6IHRoaXMubDEsICdsMic6IHRoaXMubDJ9O1xuICB9XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBvdmVycmlkZSBmcm9tQ29uZmlnPFQgZXh0ZW5kcyBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZT4oXG4gICAgICBjbHM6IHNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlQ29uc3RydWN0b3I8VD4sXG4gICAgICBjb25maWc6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCk6IFQge1xuICAgIHJldHVybiBuZXcgY2xzKHtsMTogY29uZmlnWydsMSddIGFzIG51bWJlciwgbDI6IGNvbmZpZ1snbDInXSBhcyBudW1iZXJ9KTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKEwxTDIpO1xuXG5leHBvcnQgZnVuY3Rpb24gbDEoYXJncz86IEwxQXJncykge1xuICBhc3NlcnRPYmplY3RBcmdzKGFyZ3MpO1xuICByZXR1cm4gbmV3IEwxTDIoe2wxOiBhcmdzICE9IG51bGwgPyBhcmdzLmwxIDogbnVsbCwgbDI6IDB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGwyKGFyZ3M6IEwyQXJncykge1xuICBhc3NlcnRPYmplY3RBcmdzKGFyZ3MpO1xuICByZXR1cm4gbmV3IEwxTDIoe2wyOiBhcmdzICE9IG51bGwgPyBhcmdzLmwyIDogbnVsbCwgbDE6IDB9KTtcbn1cblxuLyoqIEBkb2NpbmxpbmUgKi9cbmV4cG9ydCB0eXBlIFJlZ3VsYXJpemVySWRlbnRpZmllciA9ICdsMWwyJ3xzdHJpbmc7XG5cbi8vIE1hcHMgdGhlIEphdmFTY3JpcHQtbGlrZSBpZGVudGlmaWVyIGtleXMgdG8gdGhlIGNvcnJlc3BvbmRpbmcga2VyYXMgc3ltYm9scy5cbmV4cG9ydCBjb25zdCBSRUdVTEFSSVpFUl9JREVOVElGSUVSX1JFR0lTVFJZX1NZTUJPTF9NQVA6XG4gICAge1tpZGVudGlmaWVyIGluIFJlZ3VsYXJpemVySWRlbnRpZmllcl06IHN0cmluZ30gPSB7XG4gICAgICAnbDFsMic6ICdMMUwyJ1xuICAgIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVSZWd1bGFyaXplcihjb25zdHJhaW50OiBSZWd1bGFyaXplcik6XG4gICAgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0VmFsdWUge1xuICByZXR1cm4gc2VyaWFsaXplS2VyYXNPYmplY3QoY29uc3RyYWludCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVJlZ3VsYXJpemVyKFxuICAgIGNvbmZpZzogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0LFxuICAgIGN1c3RvbU9iamVjdHM6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHt9KTogUmVndWxhcml6ZXIge1xuICByZXR1cm4gZGVzZXJpYWxpemVLZXJhc09iamVjdChcbiAgICAgIGNvbmZpZywgc2VyaWFsaXphdGlvbi5TZXJpYWxpemF0aW9uTWFwLmdldE1hcCgpLmNsYXNzTmFtZU1hcCxcbiAgICAgIGN1c3RvbU9iamVjdHMsICdyZWd1bGFyaXplcicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVndWxhcml6ZXIoaWRlbnRpZmllcjogUmVndWxhcml6ZXJJZGVudGlmaWVyfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWd1bGFyaXplcik6IFJlZ3VsYXJpemVyIHtcbiAgaWYgKGlkZW50aWZpZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgaWRlbnRpZmllciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBpZGVudGlmaWVyIGluIFJFR1VMQVJJWkVSX0lERU5USUZJRVJfUkVHSVNUUllfU1lNQk9MX01BUCA/XG4gICAgICAgIFJFR1VMQVJJWkVSX0lERU5USUZJRVJfUkVHSVNUUllfU1lNQk9MX01BUFtpZGVudGlmaWVyXSA6XG4gICAgICAgIGlkZW50aWZpZXI7XG4gICAgY29uc3QgY29uZmlnID0ge2NsYXNzTmFtZSwgY29uZmlnOiB7fX07XG4gICAgcmV0dXJuIGRlc2VyaWFsaXplUmVndWxhcml6ZXIoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpZGVudGlmaWVyIGluc3RhbmNlb2YgUmVndWxhcml6ZXIpIHtcbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVSZWd1bGFyaXplcihpZGVudGlmaWVyKTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_layers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"],
    "RNN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RNN"],
    "RNNCell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RNNCell"],
    "activation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["activation"],
    "add",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["add"],
    "alphaDropout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["alphaDropout"],
    "average",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["average"],
    "averagePooling1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["averagePooling1d"],
    "averagePooling2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["averagePooling2d"],
    "averagePooling3d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["averagePooling3d"],
    "avgPool1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["avgPool1d"],
    "avgPool2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["avgPool2d"],
    "avgPool3d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["avgPool3d"],
    "avgPooling1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["avgPooling1d"],
    "avgPooling2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["avgPooling2d"],
    "avgPooling3d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["avgPooling3d"],
    "batchNormalization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["batchNormalization"],
    "bidirectional",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bidirectional"],
    "categoryEncoding",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["categoryEncoding"],
    "centerCrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["centerCrop"],
    "concatenate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concatenate"],
    "conv1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conv1d"],
    "conv2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conv2d"],
    "conv2dTranspose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conv2dTranspose"],
    "conv3d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conv3d"],
    "conv3dTranspose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["conv3dTranspose"],
    "convLstm2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convLstm2d"],
    "convLstm2dCell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convLstm2dCell"],
    "cropping2D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cropping2D"],
    "dense",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dense"],
    "depthwiseConv2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["depthwiseConv2d"],
    "dot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dot"],
    "dropout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dropout"],
    "elu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["elu"],
    "embedding",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["embedding"],
    "flatten",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flatten"],
    "gaussianDropout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gaussianDropout"],
    "gaussianNoise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gaussianNoise"],
    "globalAveragePooling1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalAveragePooling1d"],
    "globalAveragePooling2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalAveragePooling2d"],
    "globalMaxPool1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalMaxPool1d"],
    "globalMaxPool2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalMaxPool2d"],
    "globalMaxPooling1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalMaxPooling1d"],
    "globalMaxPooling2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalMaxPooling2d"],
    "gru",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gru"],
    "gruCell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gruCell"],
    "input",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["input"],
    "inputLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inputLayer"],
    "layerNormalization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["layerNormalization"],
    "leakyReLU",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leakyReLU"],
    "lstm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lstm"],
    "lstmCell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lstmCell"],
    "masking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["masking"],
    "maxPool1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["maxPool1d"],
    "maxPool2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["maxPool2d"],
    "maxPooling1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["maxPooling1d"],
    "maxPooling2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["maxPooling2d"],
    "maxPooling3d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["maxPooling3d"],
    "maximum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["maximum"],
    "minimum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["minimum"],
    "multiply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["multiply"],
    "permute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["permute"],
    "prelu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prelu"],
    "randomWidth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomWidth"],
    "reLU",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reLU"],
    "repeatVector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["repeatVector"],
    "rescaling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rescaling"],
    "reshape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["reshape"],
    "resizing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resizing"],
    "rnn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["rnn"],
    "separableConv2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["separableConv2d"],
    "simpleRNN",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["simpleRNN"],
    "simpleRNNCell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["simpleRNNCell"],
    "softmax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["softmax"],
    "spatialDropout1d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["spatialDropout1d"],
    "stackedRNNCells",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["stackedRNNCells"],
    "thresholdedReLU",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["thresholdedReLU"],
    "timeDistributed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["timeDistributed"],
    "upSampling2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["upSampling2d"],
    "zeroPadding2d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zeroPadding2d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_layers.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/recurrent.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_metrics.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAPE",
    ()=>MAPE,
    "MSE",
    ()=>MSE,
    "binaryAccuracy",
    ()=>binaryAccuracy,
    "binaryCrossentropy",
    ()=>binaryCrossentropy,
    "categoricalAccuracy",
    ()=>categoricalAccuracy,
    "categoricalCrossentropy",
    ()=>categoricalCrossentropy,
    "cosineProximity",
    ()=>cosineProximity,
    "mape",
    ()=>mape,
    "meanAbsoluteError",
    ()=>meanAbsoluteError,
    "meanAbsolutePercentageError",
    ()=>meanAbsolutePercentageError,
    "meanSquaredError",
    ()=>meanSquaredError,
    "mse",
    ()=>mse,
    "precision",
    ()=>precision,
    "r2Score",
    ()=>r2Score,
    "recall",
    ()=>recall,
    "sparseCategoricalAccuracy",
    ()=>sparseCategoricalAccuracy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/losses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/metrics.js [app-ssr] (ecmascript)");
;
;
function binaryAccuracy(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryAccuracy"](yTrue, yPred);
}
function binaryCrossentropy(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryCrossentropy"](yTrue, yPred);
}
function sparseCategoricalAccuracy(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseCategoricalAccuracy"](yTrue, yPred);
}
function categoricalAccuracy(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalAccuracy"](yTrue, yPred);
}
function categoricalCrossentropy(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalCrossentropy"](yTrue, yPred);
}
function precision(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["precision"](yTrue, yPred);
}
function recall(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recall"](yTrue, yPred);
}
function cosineProximity(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cosineProximity"](yTrue, yPred);
}
function meanAbsoluteError(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsoluteError"](yTrue, yPred);
}
function meanAbsolutePercentageError(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsolutePercentageError"](yTrue, yPred);
}
function MAPE(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsolutePercentageError"](yTrue, yPred);
}
function mape(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanAbsolutePercentageError"](yTrue, yPred);
}
function meanSquaredError(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanSquaredError"](yTrue, yPred);
}
function MSE(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanSquaredError"](yTrue, yPred);
}
function mse(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanSquaredError"](yTrue, yPred);
}
function r2Score(yTrue, yPred) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r2Score"](yTrue, yPred);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0c19tZXRyaWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2V4cG9ydHNfbWV0cmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUNuQyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUVyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDekQsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDN0QsT0FBTyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsTUFBTSxVQUFVLHlCQUF5QixDQUNyQyxLQUFhLEVBQUUsS0FBYTtJQUM5QixPQUFPLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUM5RCxPQUFPLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDbEUsT0FBTyxPQUFPLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDcEQsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7QUFDSCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQ2pELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDMUQsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDNUQsT0FBTyxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFNLFVBQVUsMkJBQTJCLENBQ3ZDLEtBQWEsRUFBRSxLQUFhO0lBQzlCLE9BQU8sTUFBTSxDQUFDLDJCQUEyQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBTSxVQUFVLElBQUksQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUMvQyxPQUFPLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDL0MsT0FBTyxNQUFNLENBQUMsMkJBQTJCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDM0QsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQzlDLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUM5QyxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYTtJQUNsRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0IHtUZW5zb3J9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCAqIGFzIGxvc3NlcyBmcm9tICcuL2xvc3Nlcyc7XG5pbXBvcnQgKiBhcyBtZXRyaWNzIGZyb20gJy4vbWV0cmljcyc7XG5cbi8qKlxuICogQmluYXJ5IGFjY3VyYWN5IG1ldHJpYyBmdW5jdGlvbi5cbiAqXG4gKiBgeVRydWVgIGFuZCBgeVByZWRgIGNhbiBoYXZlIDAtMSB2YWx1ZXMuIEV4YW1wbGU6XG4gKiBgYGBqc1xuICogY29uc3QgeCA9IHRmLnRlbnNvcjJkKFtbMSwgMSwgMSwgMV0sIFswLCAwLCAwLCAwXV0sIFsyLCA0XSk7XG4gKiBjb25zdCB5ID0gdGYudGVuc29yMmQoW1sxLCAwLCAxLCAwXSwgWzAsIDAsIDAsIDFdXSwgWzIsIDRdKTtcbiAqIGNvbnN0IGFjY3VyYWN5ID0gdGYubWV0cmljcy5iaW5hcnlBY2N1cmFjeSh4LCB5KTtcbiAqIGFjY3VyYWN5LnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBgeVRydWVgIGFuZCBgeVByZWRgIGNhbiBhbHNvIGhhdmUgZmxvYXRpbmctbnVtYmVyIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDEsIGluXG4gKiB3aGljaCBjYXNlIHRoZSB2YWx1ZXMgd2lsbCBiZSB0aHJlc2hvbGRlZCBhdCAwLjUgdG8geWllbGQgMC0xIHZhbHVlcyAoaS5lLixcbiAqIGEgdmFsdWUgPj0gMC41IGFuZCA8PSAxLjAgaXMgaW50ZXJwcmV0ZWQgYXMgMSkuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGpzXG4gKiBjb25zdCB4ID0gdGYudGVuc29yMWQoWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDBdKTtcbiAqIGNvbnN0IHkgPSB0Zi50ZW5zb3IxZChbMC4yLCAwLjQsIDAuNiwgMC44LCAwLjIsIDAuMywgMC40LCAwLjddKTtcbiAqIGNvbnN0IGFjY3VyYWN5ID0gdGYubWV0cmljcy5iaW5hcnlBY2N1cmFjeSh4LCB5KTtcbiAqIGFjY3VyYWN5LnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geVRydWUgQmluYXJ5IFRlbnNvciBvZiB0cnV0aC5cbiAqIEBwYXJhbSB5UHJlZCBCaW5hcnkgVGVuc29yIG9mIHByZWRpY3Rpb24uXG4gKiBAcmV0dXJuIEFjY3VyYWN5IFRlbnNvci5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnTWV0cmljcycsIG5hbWVzcGFjZTogJ21ldHJpY3MnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5QWNjdXJhY3koeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBtZXRyaWNzLmJpbmFyeUFjY3VyYWN5KHlUcnVlLCB5UHJlZCk7XG59XG5cbi8qKlxuICogQmluYXJ5IGNyb3NzZW50cm9weSBtZXRyaWMgZnVuY3Rpb24uXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGpzXG4gKiBjb25zdCB4ID0gdGYudGVuc29yMmQoW1swXSwgWzFdLCBbMV0sIFsxXV0pO1xuICogY29uc3QgeSA9IHRmLnRlbnNvcjJkKFtbMF0sIFswXSwgWzAuNV0sIFsxXV0pO1xuICogY29uc3QgY3Jvc3NlbnRyb3B5ID0gdGYubWV0cmljcy5iaW5hcnlDcm9zc2VudHJvcHkoeCwgeSk7XG4gKiBjcm9zc2VudHJvcHkucHJpbnQoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB5VHJ1ZSBCaW5hcnkgVGVuc29yIG9mIHRydXRoLlxuICogQHBhcmFtIHlQcmVkIEJpbmFyeSBUZW5zb3Igb2YgcHJlZGljdGlvbiwgcHJvYmFiaWxpdGllcyBmb3IgdGhlIGAxYCBjYXNlLlxuICogQHJldHVybiBBY2N1cmFjeSBUZW5zb3IuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01ldHJpY3MnLCBuYW1lc3BhY2U6ICdtZXRyaWNzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeUNyb3NzZW50cm9weSh5VHJ1ZTogVGVuc29yLCB5UHJlZDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIG1ldHJpY3MuYmluYXJ5Q3Jvc3NlbnRyb3B5KHlUcnVlLCB5UHJlZCk7XG59XG5cbi8qKlxuICogU3BhcnNlIGNhdGVnb3JpY2FsIGFjY3VyYWN5IG1ldHJpYyBmdW5jdGlvbi5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBganNcbiAqXG4gKiBjb25zdCB5VHJ1ZSA9IHRmLnRlbnNvcjFkKFsxLCAxLCAyLCAyLCAwXSk7XG4gKiBjb25zdCB5UHJlZCA9IHRmLnRlbnNvcjJkKFxuICogICAgICBbWzAsIDEsIDBdLCBbMSwgMCwgMF0sIFswLCAwLjQsIDAuNl0sIFswLCAwLjYsIDAuNF0sIFswLjcsIDAuMywgMF1dKTtcbiAqIGNvbnN0IGNyb3NzZW50cm9weSA9IHRmLm1ldHJpY3Muc3BhcnNlQ2F0ZWdvcmljYWxBY2N1cmFjeSh5VHJ1ZSwgeVByZWQpO1xuICogY3Jvc3NlbnRyb3B5LnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geVRydWUgVHJ1ZSBsYWJlbHM6IGluZGljZXMuXG4gKiBAcGFyYW0geVByZWQgUHJlZGljdGVkIHByb2JhYmlsaXRpZXMgb3IgbG9naXRzLlxuICogQHJldHVybnMgQWNjdXJhY3kgdGVuc29yLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNZXRyaWNzJywgbmFtZXNwYWNlOiAnbWV0cmljcyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGFyc2VDYXRlZ29yaWNhbEFjY3VyYWN5KFxuICAgIHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gbWV0cmljcy5zcGFyc2VDYXRlZ29yaWNhbEFjY3VyYWN5KHlUcnVlLCB5UHJlZCk7XG59XG5cbi8qKlxuICogQ2F0ZWdvcmljYWwgYWNjdXJhY3kgbWV0cmljIGZ1bmN0aW9uLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBqc1xuICogY29uc3QgeCA9IHRmLnRlbnNvcjJkKFtbMCwgMCwgMCwgMV0sIFswLCAwLCAwLCAxXV0pO1xuICogY29uc3QgeSA9IHRmLnRlbnNvcjJkKFtbMC4xLCAwLjgsIDAuMDUsIDAuMDVdLCBbMC4xLCAwLjA1LCAwLjA1LCAwLjhdXSk7XG4gKiBjb25zdCBhY2N1cmFjeSA9IHRmLm1ldHJpY3MuY2F0ZWdvcmljYWxBY2N1cmFjeSh4LCB5KTtcbiAqIGFjY3VyYWN5LnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geVRydWUgQmluYXJ5IFRlbnNvciBvZiB0cnV0aDogb25lLWhvdCBlbmNvZGluZyBvZiBjYXRlZ29yaWVzLlxuICogQHBhcmFtIHlQcmVkIEJpbmFyeSBUZW5zb3Igb2YgcHJlZGljdGlvbjogcHJvYmFiaWxpdGllcyBvciBsb2dpdHMgZm9yIHRoZVxuICogICBzYW1lIGNhdGVnb3JpZXMgYXMgaW4gYHlUcnVlYC5cbiAqIEByZXR1cm4gQWNjdXJhY3kgVGVuc29yLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNZXRyaWNzJywgbmFtZXNwYWNlOiAnbWV0cmljcyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yaWNhbEFjY3VyYWN5KHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gbWV0cmljcy5jYXRlZ29yaWNhbEFjY3VyYWN5KHlUcnVlLCB5UHJlZCk7XG59XG5cbi8qKlxuICogQ2F0ZWdvcmljYWwgY3Jvc3NlbnRyb3B5IGJldHdlZW4gYW4gb3V0cHV0IHRlbnNvciBhbmQgYSB0YXJnZXQgdGVuc29yLlxuICpcbiAqIEBwYXJhbSB0YXJnZXQgQSB0ZW5zb3Igb2YgdGhlIHNhbWUgc2hhcGUgYXMgYG91dHB1dGAuXG4gKiBAcGFyYW0gb3V0cHV0IEEgdGVuc29yIHJlc3VsdGluZyBmcm9tIGEgc29mdG1heCAodW5sZXNzIGBmcm9tTG9naXRzYCBpc1xuICogIGB0cnVlYCwgaW4gd2hpY2ggY2FzZSBgb3V0cHV0YCBpcyBleHBlY3RlZCB0byBiZSB0aGUgbG9naXRzKS5cbiAqIEBwYXJhbSBmcm9tTG9naXRzIEJvb2xlYW4sIHdoZXRoZXIgYG91dHB1dGAgaXMgdGhlIHJlc3VsdCBvZiBhIHNvZnRtYXgsIG9yIGlzXG4gKiAgIGEgdGVuc29yIG9mIGxvZ2l0cy5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnTWV0cmljcycsIG5hbWVzcGFjZTogJ21ldHJpY3MnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2F0ZWdvcmljYWxDcm9zc2VudHJvcHkoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBtZXRyaWNzLmNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5KHlUcnVlLCB5UHJlZCk7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHByZWNpc2lvbiBvZiB0aGUgcHJlZGljdGlvbnMgd2l0aCByZXNwZWN0IHRvIHRoZSBsYWJlbHMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGpzXG4gKiBjb25zdCB4ID0gdGYudGVuc29yMmQoXG4gKiAgICBbXG4gKiAgICAgIFswLCAwLCAwLCAxXSxcbiAqICAgICAgWzAsIDEsIDAsIDBdLFxuICogICAgICBbMCwgMCwgMCwgMV0sXG4gKiAgICAgIFsxLCAwLCAwLCAwXSxcbiAqICAgICAgWzAsIDAsIDEsIDBdXG4gKiAgICBdXG4gKiApO1xuICpcbiAqIGNvbnN0IHkgPSB0Zi50ZW5zb3IyZChcbiAqICAgIFtcbiAqICAgICAgWzAsIDAsIDEsIDBdLFxuICogICAgICBbMCwgMSwgMCwgMF0sXG4gKiAgICAgIFswLCAwLCAwLCAxXSxcbiAqICAgICAgWzAsIDEsIDAsIDBdLFxuICogICAgICBbMCwgMSwgMCwgMF1cbiAqICAgIF1cbiAqICk7XG4gKlxuICogY29uc3QgcHJlY2lzaW9uID0gdGYubWV0cmljcy5wcmVjaXNpb24oeCwgeSk7XG4gKiBwcmVjaXNpb24ucHJpbnQoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB5VHJ1ZSBUaGUgZ3JvdW5kIHRydXRoIHZhbHVlcy4gRXhwZWN0ZWQgdG8gY29udGFpbiBvbmx5IDAtMSB2YWx1ZXMuXG4gKiBAcGFyYW0geVByZWQgVGhlIHByZWRpY3RlZCB2YWx1ZXMuIEV4cGVjdGVkIHRvIGNvbnRhaW4gb25seSAwLTEgdmFsdWVzLlxuICogQHJldHVybiBQcmVjaXNpb24gVGVuc29yLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNZXRyaWNzJywgbmFtZXNwYWNlOiAnbWV0cmljcyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVjaXNpb24oeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBtZXRyaWNzLnByZWNpc2lvbih5VHJ1ZSwgeVByZWQpO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSByZWNhbGwgb2YgdGhlIHByZWRpY3Rpb25zIHdpdGggcmVzcGVjdCB0byB0aGUgbGFiZWxzLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGBqc1xuICogY29uc3QgeCA9IHRmLnRlbnNvcjJkKFxuICogICAgW1xuICogICAgICBbMCwgMCwgMCwgMV0sXG4gKiAgICAgIFswLCAxLCAwLCAwXSxcbiAqICAgICAgWzAsIDAsIDAsIDFdLFxuICogICAgICBbMSwgMCwgMCwgMF0sXG4gKiAgICAgIFswLCAwLCAxLCAwXVxuICogICAgXVxuICogKTtcbiAqXG4gKiBjb25zdCB5ID0gdGYudGVuc29yMmQoXG4gKiAgICBbXG4gKiAgICAgIFswLCAwLCAxLCAwXSxcbiAqICAgICAgWzAsIDEsIDAsIDBdLFxuICogICAgICBbMCwgMCwgMCwgMV0sXG4gKiAgICAgIFswLCAxLCAwLCAwXSxcbiAqICAgICAgWzAsIDEsIDAsIDBdXG4gKiAgICBdXG4gKiApO1xuICpcbiAqIGNvbnN0IHJlY2FsbCA9IHRmLm1ldHJpY3MucmVjYWxsKHgsIHkpO1xuICogcmVjYWxsLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0geVRydWUgVGhlIGdyb3VuZCB0cnV0aCB2YWx1ZXMuIEV4cGVjdGVkIHRvIGNvbnRhaW4gb25seSAwLTEgdmFsdWVzLlxuICogQHBhcmFtIHlQcmVkIFRoZSBwcmVkaWN0ZWQgdmFsdWVzLiBFeHBlY3RlZCB0byBjb250YWluIG9ubHkgMC0xIHZhbHVlcy5cbiAqIEByZXR1cm4gUmVjYWxsIFRlbnNvci5cbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnTWV0cmljcycsIG5hbWVzcGFjZTogJ21ldHJpY3MnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjYWxsKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gbWV0cmljcy5yZWNhbGwoeVRydWUsIHlQcmVkKTtcbn1cblxuLyoqXG4gKiBMb3NzIG9yIG1ldHJpYyBmdW5jdGlvbjogQ29zaW5lIHByb3hpbWl0eS5cbiAqXG4gKiBNYXRoZW1hdGljYWxseSwgY29zaW5lIHByb3hpbWl0eSBpcyBkZWZpbmVkIGFzOlxuICogICBgLXN1bShsMk5vcm1hbGl6ZSh5VHJ1ZSkgKiBsMk5vcm1hbGl6ZSh5UHJlZCkpYCxcbiAqIHdoZXJlaW4gYGwyTm9ybWFsaXplKClgIG5vcm1hbGl6ZXMgdGhlIEwyIG5vcm0gb2YgdGhlIGlucHV0IHRvIDEgYW5kIGAqYFxuICogcmVwcmVzZW50cyBlbGVtZW50LXdpc2UgbXVsdGlwbGljYXRpb24uXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHlUcnVlID0gdGYudGVuc29yMmQoW1sxLCAwXSwgWzEsIDBdXSk7XG4gKiBjb25zdCB5UHJlZCA9IHRmLnRlbnNvcjJkKFtbMSAvIE1hdGguc3FydCgyKSwgMSAvIE1hdGguc3FydCgyKV0sIFswLCAxXV0pO1xuICogY29uc3QgcHJveGltaXR5ID0gdGYubWV0cmljcy5jb3NpbmVQcm94aW1pdHkoeVRydWUsIHlQcmVkKTtcbiAqIHByb3hpbWl0eS5wcmludCgpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHlUcnVlIFRydXRoIFRlbnNvci5cbiAqIEBwYXJhbSB5UHJlZCBQcmVkaWN0aW9uIFRlbnNvci5cbiAqIEByZXR1cm4gQ29zaW5lIHByb3hpbWl0eSBUZW5zb3IuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01ldHJpY3MnLCBuYW1lc3BhY2U6ICdtZXRyaWNzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvc2luZVByb3hpbWl0eSh5VHJ1ZTogVGVuc29yLCB5UHJlZDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIGxvc3Nlcy5jb3NpbmVQcm94aW1pdHkoeVRydWUsIHlQcmVkKTtcbn1cblxuLyoqXG4gKiBMb3NzIG9yIG1ldHJpYyBmdW5jdGlvbjogTWVhbiBhYnNvbHV0ZSBlcnJvci5cbiAqXG4gKiBNYXRoZW1hdGljYWxseSwgbWVhbiBhYnNvbHV0ZSBlcnJvciBpcyBkZWZpbmVkIGFzOlxuICogICBgbWVhbihhYnMoeVByZWQgLSB5VHJ1ZSkpYCxcbiAqIHdoZXJlaW4gdGhlIGBtZWFuYCBpcyBhcHBsaWVkIG92ZXIgZmVhdHVyZSBkaW1lbnNpb25zLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCB5VHJ1ZSA9IHRmLnRlbnNvcjJkKFtbMCwgMV0sIFswLCAwXSwgWzIsIDNdXSk7XG4gKiBjb25zdCB5UHJlZCA9IHRmLnRlbnNvcjJkKFtbMCwgMV0sIFswLCAxXSwgWy0yLCAtM11dKTtcbiAqIGNvbnN0IG1zZSA9IHRmLm1ldHJpY3MubWVhbkFic29sdXRlRXJyb3IoeVRydWUsIHlQcmVkKTtcbiAqIG1zZS5wcmludCgpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHlUcnVlIFRydXRoIFRlbnNvci5cbiAqIEBwYXJhbSB5UHJlZCBQcmVkaWN0aW9uIFRlbnNvci5cbiAqIEByZXR1cm4gTWVhbiBhYnNvbHV0ZSBlcnJvciBUZW5zb3IuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01ldHJpY3MnLCBuYW1lc3BhY2U6ICdtZXRyaWNzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lYW5BYnNvbHV0ZUVycm9yKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gbG9zc2VzLm1lYW5BYnNvbHV0ZUVycm9yKHlUcnVlLCB5UHJlZCk7XG59XG5cbi8qKlxuICogTG9zcyBvciBtZXRyaWMgZnVuY3Rpb246IE1lYW4gYWJzb2x1dGUgcGVyY2VudGFnZSBlcnJvci5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgeVRydWUgPSB0Zi50ZW5zb3IyZChbWzAsIDFdLCBbMTAsIDIwXV0pO1xuICogY29uc3QgeVByZWQgPSB0Zi50ZW5zb3IyZChbWzAsIDFdLCBbMTEsIDI0XV0pO1xuICogY29uc3QgbXNlID0gdGYubWV0cmljcy5tZWFuQWJzb2x1dGVQZXJjZW50YWdlRXJyb3IoeVRydWUsIHlQcmVkKTtcbiAqIG1zZS5wcmludCgpO1xuICogYGBgXG4gKlxuICogQWxpYXNlczogYHRmLm1ldHJpY3MuTUFQRWAsIGB0Zi5tZXRyaWNzLm1hcGVgLlxuICpcbiAqIEBwYXJhbSB5VHJ1ZSBUcnV0aCBUZW5zb3IuXG4gKiBAcGFyYW0geVByZWQgUHJlZGljdGlvbiBUZW5zb3IuXG4gKiBAcmV0dXJuIE1lYW4gYWJzb2x1dGUgcGVyY2VudGFnZSBlcnJvciBUZW5zb3IuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01ldHJpY3MnLCBuYW1lc3BhY2U6ICdtZXRyaWNzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lYW5BYnNvbHV0ZVBlcmNlbnRhZ2VFcnJvcihcbiAgICB5VHJ1ZTogVGVuc29yLCB5UHJlZDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIGxvc3Nlcy5tZWFuQWJzb2x1dGVQZXJjZW50YWdlRXJyb3IoeVRydWUsIHlQcmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1BUEUoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBsb3NzZXMubWVhbkFic29sdXRlUGVyY2VudGFnZUVycm9yKHlUcnVlLCB5UHJlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBlKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gbG9zc2VzLm1lYW5BYnNvbHV0ZVBlcmNlbnRhZ2VFcnJvcih5VHJ1ZSwgeVByZWQpO1xufVxuXG4vKipcbiAqIExvc3Mgb3IgbWV0cmljIGZ1bmN0aW9uOiBNZWFuIHNxdWFyZWQgZXJyb3IuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHlUcnVlID0gdGYudGVuc29yMmQoW1swLCAxXSwgWzMsIDRdXSk7XG4gKiBjb25zdCB5UHJlZCA9IHRmLnRlbnNvcjJkKFtbMCwgMV0sIFstMywgLTRdXSk7XG4gKiBjb25zdCBtc2UgPSB0Zi5tZXRyaWNzLm1lYW5TcXVhcmVkRXJyb3IoeVRydWUsIHlQcmVkKTtcbiAqIG1zZS5wcmludCgpO1xuICogYGBgXG4gKlxuICogQWxpYXNlczogYHRmLm1ldHJpY3MuTVNFYCwgYHRmLm1ldHJpY3MubXNlYC5cbiAqXG4gKiBAcGFyYW0geVRydWUgVHJ1dGggVGVuc29yLlxuICogQHBhcmFtIHlQcmVkIFByZWRpY3Rpb24gVGVuc29yLlxuICogQHJldHVybiBNZWFuIHNxdWFyZWQgZXJyb3IgVGVuc29yLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdNZXRyaWNzJywgbmFtZXNwYWNlOiAnbWV0cmljcyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFuU3F1YXJlZEVycm9yKHlUcnVlOiBUZW5zb3IsIHlQcmVkOiBUZW5zb3IpOiBUZW5zb3Ige1xuICByZXR1cm4gbG9zc2VzLm1lYW5TcXVhcmVkRXJyb3IoeVRydWUsIHlQcmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1TRSh5VHJ1ZTogVGVuc29yLCB5UHJlZDogVGVuc29yKTogVGVuc29yIHtcbiAgcmV0dXJuIGxvc3Nlcy5tZWFuU3F1YXJlZEVycm9yKHlUcnVlLCB5UHJlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtc2UoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBsb3NzZXMubWVhblNxdWFyZWRFcnJvcih5VHJ1ZSwgeVByZWQpO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIFIyIHNjb3JlLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCB5VHJ1ZSA9IHRmLnRlbnNvcjJkKFtbMCwgMV0sIFszLCA0XV0pO1xuICogY29uc3QgeVByZWQgPSB0Zi50ZW5zb3IyZChbWzAsIDFdLCBbLTMsIC00XV0pO1xuICogY29uc3QgcjJTY29yZSA9IHRmLm1ldHJpY3MucjJTY29yZSh5VHJ1ZSwgeVByZWQpO1xuICogcjJTY29yZS5wcmludCgpO1xuICogYGBgXG4gKiBAcGFyYW0geVRydWUgVHJ1dGggVGVuc29yLlxuICogQHBhcmFtIHlQcmVkIFByZWRpY3Rpb24gVGVuc29yLlxuICogQHJldHVybiBSMiBzY29yZSBUZW5zb3IuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01ldHJpY3MnLCBuYW1lc3BhY2U6ICdtZXRyaWNzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHIyU2NvcmUoeVRydWU6IFRlbnNvciwgeVByZWQ6IFRlbnNvcik6IFRlbnNvciB7XG4gIHJldHVybiBtZXRyaWNzLnIyU2NvcmUoeVRydWUsIHlQcmVkKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_models.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/models.js [app-ssr] (ecmascript)"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0c19tb2RlbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZXhwb3J0c19tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuZXhwb3J0IHttb2RlbEZyb21KU09OfSBmcm9tICcuL21vZGVscyc7XG4iXX0=
;
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_models.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modelFromJSON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modelFromJSON"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_models.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/models.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_regularizers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "l1",
    ()=>l1,
    "l1l2",
    ()=>l1l2,
    "l2",
    ()=>l2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/regularizers.js [app-ssr] (ecmascript)");
;
;
function l1l2(config) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L1L2"](config);
}
function l1(config) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l1"](config);
}
function l2(config) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$regularizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l2"](config);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0c19yZWd1bGFyaXplcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZXhwb3J0c19yZWd1bGFyaXplcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDSCxPQUFPLEtBQUssWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLDJDQUEyQztBQUMzQyxPQUFPLEVBQVMsSUFBSSxFQUFnQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNFOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsSUFBSSxDQUFDLE1BQWlCO0lBQ3BDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLEVBQUUsQ0FBQyxNQUFlO0lBQ2hDLE9BQU8sWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUsRUFBRSxDQUFDLE1BQWU7SUFDaEMsT0FBTyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuaW1wb3J0ICogYXMgcmVndWxhcml6ZXJzIGZyb20gJy4vcmVndWxhcml6ZXJzJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7TDFBcmdzLCBMMUwyLCBMMUwyQXJncywgTDJBcmdzLCBSZWd1bGFyaXplcn0gZnJvbSAnLi9yZWd1bGFyaXplcnMnO1xuXG4vKipcbiAqIFJlZ3VsYXJpemVyIGZvciBMMSBhbmQgTDIgcmVndWxhcml6YXRpb24uXG4gKlxuICogQWRkcyBhIHRlcm0gdG8gdGhlIGxvc3MgdG8gcGVuYWxpemUgbGFyZ2Ugd2VpZ2h0czpcbiAqIGxvc3MgKz0gc3VtKGwxICogYWJzKHgpKSArIHN1bShsMiAqIHheMilcbiAqXG4gKiBAZG9jIHtoZWFkaW5nOiAnUmVndWxhcml6ZXJzJywgbmFtZXNwYWNlOiAncmVndWxhcml6ZXJzJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGwxbDIoY29uZmlnPzogTDFMMkFyZ3MpOiBSZWd1bGFyaXplciB7XG4gIHJldHVybiBuZXcgTDFMMihjb25maWcpO1xufVxuXG4vKipcbiAqIFJlZ3VsYXJpemVyIGZvciBMMSByZWd1bGFyaXphdGlvbi5cbiAqXG4gKiBBZGRzIGEgdGVybSB0byB0aGUgbG9zcyB0byBwZW5hbGl6ZSBsYXJnZSB3ZWlnaHRzOlxuICogbG9zcyArPSBzdW0obDEgKiBhYnMoeCkpXG4gKiBAcGFyYW0gYXJncyBsMSBjb25maWcuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ1JlZ3VsYXJpemVycycsIG5hbWVzcGFjZTogJ3JlZ3VsYXJpemVycyd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsMShjb25maWc/OiBMMUFyZ3MpOiBSZWd1bGFyaXplciB7XG4gIHJldHVybiByZWd1bGFyaXplcnMubDEoY29uZmlnKTtcbn1cblxuLyoqXG4gKiBSZWd1bGFyaXplciBmb3IgTDIgcmVndWxhcml6YXRpb24uXG4gKlxuICogQWRkcyBhIHRlcm0gdG8gdGhlIGxvc3MgdG8gcGVuYWxpemUgbGFyZ2Ugd2VpZ2h0czpcbiAqIGxvc3MgKz0gc3VtKGwyICogeF4yKVxuICogQHBhcmFtIGFyZ3MgbDIgY29uZmlnLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdSZWd1bGFyaXplcnMnLCBuYW1lc3BhY2U6ICdyZWd1bGFyaXplcnMnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbDIoY29uZmlnPzogTDJBcmdzKTogUmVndWxhcml6ZXIge1xuICByZXR1cm4gcmVndWxhcml6ZXJzLmwyKGNvbmZpZyk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/callbacks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source: keras/callbacks.py */ __turbopack_context__.s([
    "Callback",
    ()=>Callback,
    "EarlyStopping",
    ()=>EarlyStopping,
    "callbacks",
    ()=>callbacks,
    "earlyStopping",
    ()=>earlyStopping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/base_callbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/logs.js [app-ssr] (ecmascript)");
;
;
;
;
class Callback extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseCallback"] {
    constructor(){
        super(...arguments);
        /** Instance of `keras.models.Model`. Reference of the model being trained. */ this.model = null;
    }
    setModel(model) {
        if (!(model instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayersModel"])) {
            throw new Error('model must be a LayersModel, not some other Container');
        }
        this.model = model;
    }
}
function less(currVal, prevVal) {
    return currVal < prevVal;
}
function greater(currVal, prevVal) {
    return currVal > prevVal;
}
class EarlyStopping extends Callback {
    constructor(args){
        super();
        if (args == null) {
            args = {};
        }
        if (args.restoreBestWeights) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('restoreBestWeights = True is not implemented in EarlyStopping yet.');
        }
        this.monitor = args.monitor || 'val_loss';
        this.minDelta = Math.abs(args.minDelta || 0);
        this.patience = args.patience || 0;
        this.verbose = args.verbose || 0;
        this.mode = args.mode || 'auto';
        this.baseline = args.baseline;
        if ([
            'auto',
            'min',
            'max'
        ].indexOf(this.mode) === -1) {
            console.warn(`EarlyStopping mode '${this.mode}' is invalid. ` + `Falling back to mode 'auto'.`);
            this.mode = 'auto';
        }
        if (this.mode === 'min') {
            this.monitorFunc = less;
        } else if (this.mode === 'max') {
            this.monitorFunc = greater;
        } else {
            // For mode === 'auto'.
            if (this.monitor.indexOf('acc') !== -1) {
                this.monitorFunc = greater;
            } else {
                this.monitorFunc = less;
            }
        }
        if (this.monitorFunc === less) {
            this.minDelta *= -1;
        }
    }
    async onTrainBegin(logs) {
        this.wait = 0;
        this.stoppedEpoch = 0;
        if (this.baseline != null) {
            this.best = this.baseline;
        } else {
            this.best = this.monitorFunc === less ? Infinity : -Infinity;
        }
    }
    async onEpochEnd(epoch, logs) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveScalarsInLogs"])(logs);
        const current = this.getMonitorValue(logs);
        if (current == null) {
            return;
        }
        if (this.monitorFunc(current - this.minDelta, this.best)) {
            this.best = current;
            this.wait = 0;
        // TODO(cais): Logic for restoreBestWeights.
        } else {
            this.wait++;
            if (this.wait >= this.patience) {
                this.stoppedEpoch = epoch;
                this.model.stopTraining = true;
            }
        // TODO(cais): Logic for restoreBestWeights.
        }
    }
    async onTrainEnd(logs) {
        if (this.stoppedEpoch > 0 && this.verbose) {
            console.log(`Epoch ${this.stoppedEpoch}: early stopping.`);
        }
    }
    getMonitorValue(logs) {
        if (logs == null) {
            logs = {};
        }
        const monitorValue = logs[this.monitor];
        if (monitorValue == null) {
            console.warn(`Metric for EarlyStopping ${this.monitor} is not available. ` + `Available metrics are: ${Object.keys(logs)}`);
        }
        return monitorValue;
    }
}
function earlyStopping(args) {
    return new EarlyStopping(args);
}
const callbacks = {
    earlyStopping
}; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGJhY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2NhbGxiYWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILHlDQUF5QztBQUV6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUM3QyxPQUFPLEVBQU8sb0JBQW9CLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFbEQsTUFBTSxPQUFnQixRQUFTLFNBQVEsWUFBWTtJQUFuRDs7UUFDRSw4RUFBOEU7UUFDOUUsVUFBSyxHQUFnQixJQUFJLENBQUM7SUFRNUIsQ0FBQztJQU5VLFFBQVEsQ0FBQyxLQUFnQjtRQUNoQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBNERELFNBQVMsSUFBSSxDQUFDLE9BQWUsRUFBRSxPQUFlO0lBQzVDLE9BQU8sT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsT0FBZSxFQUFFLE9BQWU7SUFDL0MsT0FBTyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzNCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sYUFBYyxTQUFRLFFBQVE7SUFjekMsWUFBWSxJQUFnQztRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLElBQUks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ZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qIE9yaWdpbmFsIHNvdXJjZToga2VyYXMvY2FsbGJhY2tzLnB5ICovXG5cbmltcG9ydCB7QmFzZUNhbGxiYWNrfSBmcm9tICcuL2Jhc2VfY2FsbGJhY2tzJztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuL2VuZ2luZS9jb250YWluZXInO1xuaW1wb3J0IHtMYXllcnNNb2RlbH0gZnJvbSAnLi9lbmdpbmUvdHJhaW5pbmcnO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge0xvZ3MsIHJlc29sdmVTY2FsYXJzSW5Mb2dzfSBmcm9tICcuL2xvZ3MnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FsbGJhY2sgZXh0ZW5kcyBCYXNlQ2FsbGJhY2sge1xuICAvKiogSW5zdGFuY2Ugb2YgYGtlcmFzLm1vZGVscy5Nb2RlbGAuIFJlZmVyZW5jZSBvZiB0aGUgbW9kZWwgYmVpbmcgdHJhaW5lZC4gKi9cbiAgbW9kZWw6IExheWVyc01vZGVsID0gbnVsbDtcblxuICBvdmVycmlkZSBzZXRNb2RlbChtb2RlbDogQ29udGFpbmVyKTogdm9pZCB7XG4gICAgaWYgKCEobW9kZWwgaW5zdGFuY2VvZiBMYXllcnNNb2RlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbW9kZWwgbXVzdCBiZSBhIExheWVyc01vZGVsLCBub3Qgc29tZSBvdGhlciBDb250YWluZXInKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWFybHlTdG9wcGluZ0NhbGxiYWNrQXJncyB7XG4gIC8qKlxuICAgKiBRdWFudGl0eSB0byBiZSBtb25pdG9yZWQuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvICd2YWxfbG9zcycuXG4gICAqL1xuICBtb25pdG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGNoYW5nZSBpbiB0aGUgbW9uaXRvcmVkIHF1YW50aXR5IHRvIHF1YWxpZnkgYXMgaW1wcm92ZW1lbnQsXG4gICAqIGkuZS4sIGFuIGFic29sdXRlIGNoYW5nZSBvZiBsZXNzIHRoYW4gYG1pbkRlbHRhYCB3aWxsIGNvdW50IGFzIG5vXG4gICAqIGltcHJvdmVtZW50LlxuICAgKlxuICAgKiBEZWZhdWx0cyB0byAwLlxuICAgKi9cbiAgbWluRGVsdGE/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBlcG9jaHMgd2l0aCBubyBpbXByb3ZlbWVudCBhZnRlciB3aGljaCB0cmFpbmluZyB3aWxsIGJlIHN0b3BwZWQuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDAuXG4gICAqL1xuICBwYXRpZW5jZT86IG51bWJlcjtcblxuICAvKiogVmVyYm9zaXR5IG1vZGUuICovXG4gIHZlcmJvc2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1vZGU6IG9uZSBvZiAnbWluJywgJ21heCcsIGFuZCAnYXV0bycuXG4gICAqIC0gSW4gJ21pbicgbW9kZSwgdHJhaW5pbmcgd2lsbCBiZSBzdG9wcGVkIHdoZW4gdGhlIHF1YW50aXR5IG1vbml0b3JlZCBoYXNcbiAgICogICBzdG9wcGVkIGRlY3JlYXNpbmcuXG4gICAqIC0gSW4gJ21heCcgbW9kZSwgdHJhaW5pbmcgd2lsbCBiZSBzdG9wcGVkIHdoZW4gdGhlIHF1YW50aXR5IG1vbml0b3JlZCBoYXNcbiAgICogICBzdG9wcGVkIGluY3JlYXNpbmcuXG4gICAqIC0gSW4gJ2F1dG8nIG1vZGUsIHRoZSBkaXJlY3Rpb24gaXMgaW5mZXJyZWQgYXV0b21hdGljYWxseSBmcm9tIHRoZSBuYW1lIG9mXG4gICAqICAgdGhlIG1vbml0b3JlZCBxdWFudGl0eS5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gJ2F1dG8nLlxuICAgKi9cbiAgbW9kZT86ICdhdXRvJ3wnbWluJ3wnbWF4JztcblxuICAvKipcbiAgICogQmFzZWxpbmUgdmFsdWUgb2YgdGhlIG1vbml0b3JlZCBxdWFudGl0eS5cbiAgICpcbiAgICogSWYgc3BlY2lmaWVkLCB0cmFpbmluZyB3aWxsIGJlIHN0b3BwZWQgaWYgdGhlIG1vZGVsIGRvZXNuJ3Qgc2hvd1xuICAgKiBpbXByb3ZlbWVudCBvdmVyIHRoZSBiYXNlbGluZS5cbiAgICovXG4gIGJhc2VsaW5lPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlc3RvcmUgbW9kZWwgd2VpZ2h0cyBmcm9tIHRoZSBlcG9jaCB3aXRoIHRoZSBiZXN0IHZhbHVlXG4gICAqIG9mIHRoZSBtb25pdG9yZWQgcXVhbnRpdHkuIElmIGBGYWxzZWAsIHRoZSBtb2RlbCB3ZWlnaHRzIG9idGFpbmVkIGF0IHRoZVxuICAgKiBsYXN0IHN0ZXAgb2YgdHJhaW5pbmcgYXJlIHVzZWQuXG4gICAqXG4gICAqICoqYFRydWVgIGlzIG5vdCBzdXBwb3J0ZWQgeWV0LioqXG4gICAqL1xuICByZXN0b3JlQmVzdFdlaWdodHM/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBsZXNzKGN1cnJWYWw6IG51bWJlciwgcHJldlZhbDogbnVtYmVyKSB7XG4gIHJldHVybiBjdXJyVmFsIDwgcHJldlZhbDtcbn1cblxuZnVuY3Rpb24gZ3JlYXRlcihjdXJyVmFsOiBudW1iZXIsIHByZXZWYWw6IG51bWJlcikge1xuICByZXR1cm4gY3VyclZhbCA+IHByZXZWYWw7XG59XG5cbi8qKlxuICogQSBDYWxsYmFjayB0aGF0IHN0b3BzIHRyYWluaW5nIHdoZW4gYSBtb25pdG9yZWQgcXVhbnRpdHkgaGFzIHN0b3BwZWRcbiAqIGltcHJvdmluZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVhcmx5U3RvcHBpbmcgZXh0ZW5kcyBDYWxsYmFjayB7XG4gIHByb3RlY3RlZCByZWFkb25seSBtb25pdG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCByZWFkb25seSBtaW5EZWx0YTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGF0aWVuY2U6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGJhc2VsaW5lOiBudW1iZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSB2ZXJib3NlOiBudW1iZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBtb2RlOiAnYXV0byd8J21pbid8J21heCc7XG5cbiAgcHJvdGVjdGVkIG1vbml0b3JGdW5jOiAoY3VyclZhbDogbnVtYmVyLCBwcmV2VmFsOiBudW1iZXIpID0+IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSB3YWl0OiBudW1iZXI7XG4gIHByaXZhdGUgc3RvcHBlZEVwb2NoOiBudW1iZXI7XG4gIHByaXZhdGUgYmVzdDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M/OiBFYXJseVN0b3BwaW5nQ2FsbGJhY2tBcmdzKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoYXJncyA9PSBudWxsKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgfVxuICAgIGlmIChhcmdzLnJlc3RvcmVCZXN0V2VpZ2h0cykge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgJ3Jlc3RvcmVCZXN0V2VpZ2h0cyA9IFRydWUgaXMgbm90IGltcGxlbWVudGVkIGluIEVhcmx5U3RvcHBpbmcgeWV0LicpO1xuICAgIH1cblxuICAgIHRoaXMubW9uaXRvciA9IGFyZ3MubW9uaXRvciB8fCAndmFsX2xvc3MnO1xuICAgIHRoaXMubWluRGVsdGEgPSBNYXRoLmFicyhhcmdzLm1pbkRlbHRhIHx8IDApO1xuICAgIHRoaXMucGF0aWVuY2UgPSBhcmdzLnBhdGllbmNlIHx8IDA7XG4gICAgdGhpcy52ZXJib3NlID0gYXJncy52ZXJib3NlIHx8IDA7XG4gICAgdGhpcy5tb2RlID0gYXJncy5tb2RlIHx8ICdhdXRvJztcbiAgICB0aGlzLmJhc2VsaW5lID0gYXJncy5iYXNlbGluZTtcblxuICAgIGlmIChbJ2F1dG8nLCAnbWluJywgJ21heCddLmluZGV4T2YodGhpcy5tb2RlKSA9PT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgRWFybHlTdG9wcGluZyBtb2RlICcke3RoaXMubW9kZX0nIGlzIGludmFsaWQuIGAgK1xuICAgICAgICAgIGBGYWxsaW5nIGJhY2sgdG8gbW9kZSAnYXV0bycuYCk7XG4gICAgICB0aGlzLm1vZGUgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ21pbicpIHtcbiAgICAgIHRoaXMubW9uaXRvckZ1bmMgPSBsZXNzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbWF4Jykge1xuICAgICAgdGhpcy5tb25pdG9yRnVuYyA9IGdyZWF0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvciBtb2RlID09PSAnYXV0bycuXG4gICAgICBpZiAodGhpcy5tb25pdG9yLmluZGV4T2YoJ2FjYycpICE9PSAtMSkge1xuICAgICAgICB0aGlzLm1vbml0b3JGdW5jID0gZ3JlYXRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9uaXRvckZ1bmMgPSBsZXNzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1vbml0b3JGdW5jID09PSBsZXNzKSB7XG4gICAgICB0aGlzLm1pbkRlbHRhICo9IC0xO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uVHJhaW5CZWdpbihsb2dzPzogTG9ncykge1xuICAgIHRoaXMud2FpdCA9IDA7XG4gICAgdGhpcy5zdG9wcGVkRXBvY2ggPSAwO1xuICAgIGlmICh0aGlzLmJhc2VsaW5lICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYmVzdCA9IHRoaXMuYmFzZWxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmVzdCA9IHRoaXMubW9uaXRvckZ1bmMgPT09IGxlc3MgPyBJbmZpbml0eSA6IC1JbmZpbml0eTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBhc3luYyBvbkVwb2NoRW5kKGVwb2NoOiBudW1iZXIsIGxvZ3M/OiBMb2dzKSB7XG4gICAgYXdhaXQgcmVzb2x2ZVNjYWxhcnNJbkxvZ3MobG9ncyk7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0TW9uaXRvclZhbHVlKGxvZ3MpO1xuICAgIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb25pdG9yRnVuYyhjdXJyZW50IC0gdGhpcy5taW5EZWx0YSwgdGhpcy5iZXN0KSkge1xuICAgICAgdGhpcy5iZXN0ID0gY3VycmVudDtcbiAgICAgIHRoaXMud2FpdCA9IDA7XG4gICAgICAvLyBUT0RPKGNhaXMpOiBMb2dpYyBmb3IgcmVzdG9yZUJlc3RXZWlnaHRzLlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXQrKztcbiAgICAgIGlmICh0aGlzLndhaXQgPj0gdGhpcy5wYXRpZW5jZSkge1xuICAgICAgICB0aGlzLnN0b3BwZWRFcG9jaCA9IGVwb2NoO1xuICAgICAgICB0aGlzLm1vZGVsLnN0b3BUcmFpbmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBUT0RPKGNhaXMpOiBMb2dpYyBmb3IgcmVzdG9yZUJlc3RXZWlnaHRzLlxuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGFzeW5jIG9uVHJhaW5FbmQobG9ncz86IExvZ3MpIHtcbiAgICBpZiAodGhpcy5zdG9wcGVkRXBvY2ggPiAwICYmIHRoaXMudmVyYm9zZSkge1xuICAgICAgY29uc29sZS5sb2coYEVwb2NoICR7dGhpcy5zdG9wcGVkRXBvY2h9OiBlYXJseSBzdG9wcGluZy5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE1vbml0b3JWYWx1ZShsb2dzOiBMb2dzKSB7XG4gICAgaWYgKGxvZ3MgPT0gbnVsbCkge1xuICAgICAgbG9ncyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBtb25pdG9yVmFsdWUgPSBsb2dzW3RoaXMubW9uaXRvcl07XG4gICAgaWYgKG1vbml0b3JWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgYE1ldHJpYyBmb3IgRWFybHlTdG9wcGluZyAke3RoaXMubW9uaXRvcn0gaXMgbm90IGF2YWlsYWJsZS4gYCArXG4gICAgICAgICAgYEF2YWlsYWJsZSBtZXRyaWNzIGFyZTogJHtPYmplY3Qua2V5cyhsb2dzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vbml0b3JWYWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gZm9yIGEgQ2FsbGJhY2sgdGhhdCBzdG9wcyB0cmFpbmluZyB3aGVuIGEgbW9uaXRvcmVkXG4gKiBxdWFudGl0eSBoYXMgc3RvcHBlZCBpbXByb3ZpbmcuXG4gKlxuICogRWFybHkgc3RvcHBpbmcgaXMgYSB0eXBlIG9mIHJlZ3VsYXJpemF0aW9uLCBhbmQgcHJvdGVjdHMgbW9kZWwgYWdhaW5zdFxuICogb3ZlcmZpdHRpbmcuXG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGJhc2VkIG9uIGZha2UgZGF0YSBpbGx1c3RyYXRlcyBob3cgdGhpcyBjYWxsYmFja1xuICogY2FuIGJlIHVzZWQgZHVyaW5nIGB0Zi5MYXllcnNNb2RlbC5maXQoKWA6XG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1vZGVsID0gdGYuc2VxdWVudGlhbCgpO1xuICogbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7XG4gKiAgIHVuaXRzOiAzLFxuICogICBhY3RpdmF0aW9uOiAnc29mdG1heCcsXG4gKiAgIGtlcm5lbEluaXRpYWxpemVyOiAnb25lcycsXG4gKiAgIGlucHV0U2hhcGU6IFsyXVxuICogfSkpO1xuICogY29uc3QgeHMgPSB0Zi50ZW5zb3IyZChbMSwgMiwgMywgNF0sIFsyLCAyXSk7XG4gKiBjb25zdCB5cyA9IHRmLnRlbnNvcjJkKFtbMSwgMCwgMF0sIFswLCAxLCAwXV0sIFsyLCAzXSk7XG4gKiBjb25zdCB4c1ZhbCA9IHRmLnRlbnNvcjJkKFs0LCAzLCAyLCAxXSwgWzIsIDJdKTtcbiAqIGNvbnN0IHlzVmFsID0gdGYudGVuc29yMmQoW1swLCAwLCAxXSwgWzAsIDEsIDBdXSwgWzIsIDNdKTtcbiAqIG1vZGVsLmNvbXBpbGUoXG4gKiAgICAge2xvc3M6ICdjYXRlZ29yaWNhbENyb3NzZW50cm9weScsIG9wdGltaXplcjogJ3NnZCcsIG1ldHJpY3M6IFsnYWNjJ119KTtcbiAqXG4gKiAvLyBXaXRob3V0IHRoZSBFYXJseVN0b3BwaW5nIGNhbGxiYWNrLCB0aGUgdmFsX2FjYyB2YWx1ZSB3b3VsZCBiZTpcbiAqIC8vICAgMC41LCAwLjUsIDAuNSwgMC41LCAuLi5cbiAqIC8vIFdpdGggdmFsX2FjYyBiZWluZyBtb25pdG9yZWQsIHRyYWluaW5nIHNob3VsZCBzdG9wIGFmdGVyIHRoZSAybmQgZXBvY2guXG4gKiBjb25zdCBoaXN0b3J5ID0gYXdhaXQgbW9kZWwuZml0KHhzLCB5cywge1xuICogICBlcG9jaHM6IDEwLFxuICogICB2YWxpZGF0aW9uRGF0YTogW3hzVmFsLCB5c1ZhbF0sXG4gKiAgIGNhbGxiYWNrczogdGYuY2FsbGJhY2tzLmVhcmx5U3RvcHBpbmcoe21vbml0b3I6ICd2YWxfYWNjJ30pXG4gKiB9KTtcbiAqXG4gKiAvLyBFeHBlY3QgdG8gc2VlIGEgbGVuZ3RoLTIgYXJyYXkuXG4gKiBjb25zb2xlLmxvZyhoaXN0b3J5Lmhpc3RvcnkudmFsX2FjYyk7XG4gKiBgYGBcbiAqXG4gKiBAZG9jIHtcbiAqICAgaGVhZGluZzogJ0NhbGxiYWNrcycsXG4gKiAgIG5hbWVzcGFjZTogJ2NhbGxiYWNrcydcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhcmx5U3RvcHBpbmcoYXJncz86IEVhcmx5U3RvcHBpbmdDYWxsYmFja0FyZ3MpIHtcbiAgcmV0dXJuIG5ldyBFYXJseVN0b3BwaW5nKGFyZ3MpO1xufVxuXG5leHBvcnQgY29uc3QgY2FsbGJhY2tzID0ge2Vhcmx5U3RvcHBpbmd9O1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$flags_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/flags_layers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
// tslint:disable-next-line: no-imports-from-dist
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$register_all_gradients$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/register_all_gradients.js [app-ssr] (ecmascript)");
// This file lists all exports of TensorFlow.js Layers
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_constraints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_constraints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_initializers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_layers.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_layers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_metrics.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_models.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_models.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports_regularizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports_regularizers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/base_callbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/callbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/exports.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$recurrent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/recurrent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$models$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/models.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/variables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/version.js [app-ssr] (ecmascript)");
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxPQUFPLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsaURBQWlEO0FBQ2pELE9BQU8sbURBQW1ELENBQUM7QUFFM0Qsc0RBQXNEO0FBRXRELE9BQU8sS0FBSyxXQUFXLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxLQUFLLFlBQVksTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEtBQUssTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxLQUFLLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUMzQyxPQUFPLEtBQUssWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFzQixPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRixPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQTRCLE1BQU0sYUFBYSxDQUFDO0FBQzFGLE9BQU8sRUFBQyxTQUFTLEVBQUUsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBc0MsTUFBTSxtQkFBbUIsQ0FBQztBQUluRixPQUFPLEVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUUsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRWpHLE9BQU8sRUFBbUUsR0FBRyxFQUEyRCxNQUFNLG9CQUFvQixDQUFDO0FBRW5LLE9BQU8sRUFBd0IsVUFBVSxFQUFpQixNQUFNLFVBQVUsQ0FBQztBQUMzRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxPQUFPLElBQUksY0FBYyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0ICcuL2ZsYWdzX2xheWVycyc7XG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcG9ydHMtZnJvbS1kaXN0XG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtY29yZS9kaXN0L3JlZ2lzdGVyX2FsbF9ncmFkaWVudHMnO1xuXG4vLyBUaGlzIGZpbGUgbGlzdHMgYWxsIGV4cG9ydHMgb2YgVGVuc29yRmxvdy5qcyBMYXllcnNcblxuaW1wb3J0ICogYXMgY29uc3RyYWludHMgZnJvbSAnLi9leHBvcnRzX2NvbnN0cmFpbnRzJztcbmltcG9ydCAqIGFzIGluaXRpYWxpemVycyBmcm9tICcuL2V4cG9ydHNfaW5pdGlhbGl6ZXJzJztcbmltcG9ydCAqIGFzIGxheWVycyBmcm9tICcuL2V4cG9ydHNfbGF5ZXJzJztcbmltcG9ydCAqIGFzIG1ldHJpY3MgZnJvbSAnLi9leHBvcnRzX21ldHJpY3MnO1xuaW1wb3J0ICogYXMgbW9kZWxzIGZyb20gJy4vZXhwb3J0c19tb2RlbHMnO1xuaW1wb3J0ICogYXMgcmVndWxhcml6ZXJzIGZyb20gJy4vZXhwb3J0c19yZWd1bGFyaXplcnMnO1xuXG5leHBvcnQge0NhbGxiYWNrTGlzdCwgQ3VzdG9tQ2FsbGJhY2ssIEN1c3RvbUNhbGxiYWNrQXJncywgSGlzdG9yeX0gZnJvbSAnLi9iYXNlX2NhbGxiYWNrcyc7XG5leHBvcnQge0NhbGxiYWNrLCBjYWxsYmFja3MsIEVhcmx5U3RvcHBpbmcsIEVhcmx5U3RvcHBpbmdDYWxsYmFja0FyZ3N9IGZyb20gJy4vY2FsbGJhY2tzJztcbmV4cG9ydCB7SW5wdXRTcGVjLCBTeW1ib2xpY1RlbnNvcn0gZnJvbSAnLi9lbmdpbmUvdG9wb2xvZ3knO1xuZXhwb3J0IHtMYXllcnNNb2RlbCwgTW9kZWxDb21waWxlQXJncywgTW9kZWxFdmFsdWF0ZUFyZ3N9IGZyb20gJy4vZW5naW5lL3RyYWluaW5nJztcbmV4cG9ydCB7TW9kZWxGaXREYXRhc2V0QXJnc30gZnJvbSAnLi9lbmdpbmUvdHJhaW5pbmdfZGF0YXNldCc7XG5leHBvcnQge01vZGVsRml0QXJnc30gZnJvbSAnLi9lbmdpbmUvdHJhaW5pbmdfdGVuc29ycyc7XG5leHBvcnQge0NsYXNzV2VpZ2h0LCBDbGFzc1dlaWdodE1hcH0gZnJvbSAnLi9lbmdpbmUvdHJhaW5pbmdfdXRpbHMnO1xuZXhwb3J0IHtpbnB1dCwgbG9hZExheWVyc01vZGVsLCBtb2RlbCwgcmVnaXN0ZXJDYWxsYmFja0NvbnN0cnVjdG9yLCBzZXF1ZW50aWFsfSBmcm9tICcuL2V4cG9ydHMnO1xuZXhwb3J0IHtTaGFwZX0gZnJvbSAnLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmV4cG9ydCB7R1JVQ2VsbExheWVyQXJncywgR1JVTGF5ZXJBcmdzLCBMU1RNQ2VsbExheWVyQXJncywgTFNUTUxheWVyQXJncywgUk5OLCBSTk5MYXllckFyZ3MsIFNpbXBsZVJOTkNlbGxMYXllckFyZ3MsIFNpbXBsZVJOTkxheWVyQXJnc30gZnJvbSAnLi9sYXllcnMvcmVjdXJyZW50JztcbmV4cG9ydCB7TG9nc30gZnJvbSAnLi9sb2dzJztcbmV4cG9ydCB7TW9kZWxBbmRXZWlnaHRzQ29uZmlnLCBTZXF1ZW50aWFsLCBTZXF1ZW50aWFsQXJnc30gZnJvbSAnLi9tb2RlbHMnO1xuZXhwb3J0IHtMYXllclZhcmlhYmxlfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5leHBvcnQge3ZlcnNpb24gYXMgdmVyc2lvbl9sYXllcnN9IGZyb20gJy4vdmVyc2lvbic7XG5leHBvcnQge2NvbnN0cmFpbnRzLCBpbml0aWFsaXplcnMsIGxheWVycywgbWV0cmljcywgbW9kZWxzLCByZWd1bGFyaXplcnN9O1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/version.js [app-ssr] (ecmascript) <export version as version_layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version_layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/version.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-layers_dist_5c7b43cb._.js.map