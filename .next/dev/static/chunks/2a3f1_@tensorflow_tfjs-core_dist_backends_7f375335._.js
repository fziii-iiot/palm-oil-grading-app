(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/backend.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "DataStorage",
    ()=>DataStorage,
    "EPSILON_FLOAT16",
    ()=>EPSILON_FLOAT16,
    "EPSILON_FLOAT32",
    ()=>EPSILON_FLOAT32,
    "KernelBackend",
    ()=>KernelBackend
]);
const EPSILON_FLOAT32 = 1e-7;
const EPSILON_FLOAT16 = 1e-4;
class DataStorage {
    constructor(backend, dataMover){
        this.backend = backend;
        this.dataMover = dataMover;
        this.data = new WeakMap();
        this.dataIdsCount = 0;
    }
    get(dataId) {
        if (!this.data.has(dataId)) {
            this.dataMover.moveData(this.backend, dataId);
        }
        return this.data.get(dataId);
    }
    set(dataId, value) {
        this.dataIdsCount++;
        this.data.set(dataId, value);
    }
    has(dataId) {
        return this.data.has(dataId);
    }
    delete(dataId) {
        this.dataIdsCount--;
        return this.data.delete(dataId);
    }
    numDataIds() {
        return this.dataIdsCount;
    }
}
class KernelBackend {
    refCount(dataId) {
        return notYetImplemented('refCount');
    }
    incRef(dataId) {
        return notYetImplemented('incRef');
    }
    timerAvailable() {
        return true;
    }
    time(f) {
        return notYetImplemented('time');
    }
    read(dataId) {
        return notYetImplemented('read');
    }
    readSync(dataId) {
        return notYetImplemented('readSync');
    }
    readToGPU(dataId, options) {
        return notYetImplemented('readToGPU');
    }
    numDataIds() {
        return notYetImplemented('numDataIds');
    }
    disposeData(dataId, force) {
        return notYetImplemented('disposeData');
    }
    write(values, shape, dtype) {
        return notYetImplemented('write');
    }
    move(dataId, values, shape, dtype, refCount) {
        return notYetImplemented('move');
    }
    createTensorFromGPUData(values, shape, dtype) {
        return notYetImplemented('createTensorFromGPUData');
    }
    memory() {
        return notYetImplemented('memory');
    }
    /** Returns the highest precision for floats in bits (e.g. 16 or 32) */ floatPrecision() {
        return notYetImplemented('floatPrecision');
    }
    /** Returns the smallest representable number.  */ epsilon() {
        return this.floatPrecision() === 32 ? EPSILON_FLOAT32 : EPSILON_FLOAT16;
    }
    dispose() {
        return notYetImplemented('dispose');
    }
}
function notYetImplemented(kernelName) {
    throw new Error(`'${kernelName}' not yet implemented or not found in the registry. ` + `This kernel may not be supported by the tfjs backend you have chosen`);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvYmFja2VuZHMvYmFja2VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFNSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUM7QUF1QnBDLHdEQUF3RDtBQUN4RCxNQUFNLE9BQU8sV0FBVztJQUl0QixZQUFvQixPQUFzQixFQUFVLFNBQW9CO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBSGhFLFNBQUksR0FBRyxJQUFJLE9BQU8sRUFBYSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRWtELENBQUM7SUFFNUUsR0FBRyxDQUFDLE1BQWM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQVE7UUFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsR0FBRyxDQUFDLE1BQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBaUJEOzs7OztHQUtHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUFDeEIsUUFBUSxDQUFDLE1BQWM7UUFDckIsT0FBTyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQWM7UUFDbkIsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELElBQUksQ0FBQyxDQUFhO1FBQ2hCLE9BQU8saUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksQ0FBQyxNQUFjO1FBQ2pCLE9BQU8saUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELFFBQVEsQ0FBQyxNQUFjO1FBQ3JCLE9BQU8saUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELFNBQVMsQ0FBQyxNQUFjLEVBQUUsT0FBMEI7UUFDbEQsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8saUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELFdBQVcsQ0FBQyxNQUFjLEVBQUUsS0FBZTtRQUN6QyxPQUFPLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBcUIsRUFBRSxLQUFlLEVBQUUsS0FBZTtRQUMzRCxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUFJLENBQ0EsTUFBYyxFQUFFLE1BQXFCLEVBQUUsS0FBZSxFQUFFLEtBQWUsRUFDdkUsUUFBZ0I7UUFDbEIsT0FBTyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUJBQXVCLENBQ25CLE1BQTRCLEVBQUUsS0FBZSxFQUFFLEtBQWU7UUFDaEUsT0FBTyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsdUVBQXVFO0lBQ3ZFLGNBQWM7UUFDWixPQUFPLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELGtEQUFrRDtJQUNsRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxVQUFrQjtJQUMzQyxNQUFNLElBQUksS0FBSyxDQUNYLElBQUksVUFBVSxzREFBc0Q7UUFDcEUsc0VBQXNFLENBQUMsQ0FBQztBQUM5RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0JhY2tlbmQsIERhdGFUb0dQVU9wdGlvbnMsIEdQVURhdGEsIFRlbnNvcn0gZnJvbSAnLi4vdGVuc29yJztcbmltcG9ydCB7RGF0YUlkfSBmcm9tICcuLi90ZW5zb3JfaW5mbyc7XG5pbXBvcnQge0JhY2tlbmRWYWx1ZXMsIERhdGFUeXBlLCBXZWJHTERhdGEsIFdlYkdQVURhdGF9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEVQU0lMT05fRkxPQVQzMiA9IDFlLTc7XG5leHBvcnQgY29uc3QgRVBTSUxPTl9GTE9BVDE2ID0gMWUtNDtcblxuLy8gUmVxdWlyZWQgaW5mb3JtYXRpb24gZm9yIGFsbCBiYWNrZW5kcy5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2VuZFRpbWluZ0luZm8ge1xuICBrZXJuZWxNczogbnVtYmVyfHtlcnJvcjogc3RyaW5nfTtcbiAgZ2V0RXh0cmFQcm9maWxlSW5mbz8oKTogc3RyaW5nOyAgLy8gYSBmaWVsZCBmb3IgYWRkaXRpb25hbCB0aW1pbmcgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZS5nLiBwYWNraW5nIC8gdW5wYWNraW5nIGZvciBXZWJHTCBiYWNrZW5kXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVuc29yU3RvcmFnZSB7XG4gIHJlYWQoZGF0YUlkOiBEYXRhSWQpOiBQcm9taXNlPEJhY2tlbmRWYWx1ZXM+O1xuICByZWFkU3luYyhkYXRhSWQ6IERhdGFJZCk6IEJhY2tlbmRWYWx1ZXM7XG4gIGRpc3Bvc2VEYXRhKGRhdGFJZDogRGF0YUlkLCBmb3JjZT86IGJvb2xlYW4pOiBib29sZWFuO1xuICB3cml0ZSh2YWx1ZXM6IEJhY2tlbmRWYWx1ZXMsIHNoYXBlOiBudW1iZXJbXSwgZHR5cGU6IERhdGFUeXBlKTogRGF0YUlkO1xuICBtb3ZlKFxuICAgICAgZGF0YUlkOiBEYXRhSWQsIHZhbHVlczogQmFja2VuZFZhbHVlcywgc2hhcGU6IG51bWJlcltdLCBkdHlwZTogRGF0YVR5cGUsXG4gICAgICByZWZDb3VudDogbnVtYmVyKTogdm9pZDtcbiAgbWVtb3J5KCk6IHt1bnJlbGlhYmxlOiBib29sZWFuO307ICAvLyBCYWNrZW5kLXNwZWNpZmljIGluZm9ybWF0aW9uLlxuICAvKiogUmV0dXJucyBudW1iZXIgb2YgZGF0YSBpZHMgY3VycmVudGx5IGluIHRoZSBzdG9yYWdlLiAqL1xuICBudW1EYXRhSWRzKCk6IG51bWJlcjtcbiAgcmVmQ291bnQoZGF0YUlkOiBEYXRhSWQpOiBudW1iZXI7XG59XG5cbi8qKiBDb252ZW5pZW50IGNsYXNzIGZvciBzdG9yaW5nIHRlbnNvci1yZWxhdGVkIGRhdGEuICovXG5leHBvcnQgY2xhc3MgRGF0YVN0b3JhZ2U8VD4ge1xuICBwcml2YXRlIGRhdGEgPSBuZXcgV2Vha01hcDxEYXRhSWQsIFQ+KCk7XG4gIHByaXZhdGUgZGF0YUlkc0NvdW50ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmQ6IEtlcm5lbEJhY2tlbmQsIHByaXZhdGUgZGF0YU1vdmVyOiBEYXRhTW92ZXIpIHt9XG5cbiAgZ2V0KGRhdGFJZDogRGF0YUlkKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEuaGFzKGRhdGFJZCkpIHtcbiAgICAgIHRoaXMuZGF0YU1vdmVyLm1vdmVEYXRhKHRoaXMuYmFja2VuZCwgZGF0YUlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5nZXQoZGF0YUlkKTtcbiAgfVxuXG4gIHNldChkYXRhSWQ6IERhdGFJZCwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFJZHNDb3VudCsrO1xuICAgIHRoaXMuZGF0YS5zZXQoZGF0YUlkLCB2YWx1ZSk7XG4gIH1cblxuICBoYXMoZGF0YUlkOiBEYXRhSWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhhcyhkYXRhSWQpO1xuICB9XG5cbiAgZGVsZXRlKGRhdGFJZDogRGF0YUlkKTogYm9vbGVhbiB7XG4gICAgdGhpcy5kYXRhSWRzQ291bnQtLTtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmRlbGV0ZShkYXRhSWQpO1xuICB9XG5cbiAgbnVtRGF0YUlkcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRhdGFJZHNDb3VudDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFNb3ZlciB7XG4gIC8qKlxuICAgKiBUbyBiZSBjYWxsZWQgYnkgYmFja2VuZHMgd2hlbmV2ZXIgdGhleSBzZWUgYSBkYXRhSWQgdGhhdCB0aGV5IGRvbid0IG93bi5cbiAgICogVXBvbiBjYWxsaW5nIHRoaXMgbWV0aG9kLCB0aGUgbW92ZXIgd2lsbCBmZXRjaCB0aGUgdGVuc29yIGZyb20gYW5vdGhlclxuICAgKiBiYWNrZW5kIGFuZCByZWdpc3RlciBpdCB3aXRoIHRoZSBjdXJyZW50IGFjdGl2ZSBiYWNrZW5kLlxuICAgKi9cbiAgbW92ZURhdGEoYmFja2VuZDogS2VybmVsQmFja2VuZCwgZGF0YUlkOiBEYXRhSWQpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tlbmRUaW1lciB7XG4gIC8vIGNoZWNrIGlmIGJhY2tlbmQgdGltZXIgaXMgYXZhaWxhYmxlXG4gIHRpbWVyQXZhaWxhYmxlKCk6IGJvb2xlYW47XG4gIHRpbWUoZjogKCkgPT4gdm9pZCk6IFByb21pc2U8QmFja2VuZFRpbWluZ0luZm8+O1xufVxuXG4vKipcbiAqIFRoZSBpbnRlcmZhY2UgdGhhdCBkZWZpbmVzIHRoZSBrZXJuZWxzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkIHdoZW5cbiAqIGFkZGluZyBhIG5ldyBiYWNrZW5kLiBOZXcgYmFja2VuZHMgZG9uJ3QgbmVlZCB0byBpbXBsZW1lbnQgZXZlcnkgb25lIG9mIHRoZVxuICogbWV0aG9kcywgdGhpcyBjYW4gYmUgZG9uZSBncmFkdWFsbHkgKHRocm93IGFuIGVycm9yIGZvciB1bmltcGxlbWVudGVkXG4gKiBtZXRob2RzKS5cbiAqL1xuZXhwb3J0IGNsYXNzIEtlcm5lbEJhY2tlbmQgaW1wbGVtZW50cyBUZW5zb3JTdG9yYWdlLCBCYWNrZW5kLCBCYWNrZW5kVGltZXIge1xuICByZWZDb3VudChkYXRhSWQ6IERhdGFJZCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5vdFlldEltcGxlbWVudGVkKCdyZWZDb3VudCcpO1xuICB9XG4gIGluY1JlZihkYXRhSWQ6IERhdGFJZCk6IHZvaWQge1xuICAgIHJldHVybiBub3RZZXRJbXBsZW1lbnRlZCgnaW5jUmVmJyk7XG4gIH1cbiAgdGltZXJBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdGltZShmOiAoKSA9PiB2b2lkKTogUHJvbWlzZTxCYWNrZW5kVGltaW5nSW5mbz4ge1xuICAgIHJldHVybiBub3RZZXRJbXBsZW1lbnRlZCgndGltZScpO1xuICB9XG4gIHJlYWQoZGF0YUlkOiBvYmplY3QpOiBQcm9taXNlPEJhY2tlbmRWYWx1ZXM+IHtcbiAgICByZXR1cm4gbm90WWV0SW1wbGVtZW50ZWQoJ3JlYWQnKTtcbiAgfVxuICByZWFkU3luYyhkYXRhSWQ6IG9iamVjdCk6IEJhY2tlbmRWYWx1ZXMge1xuICAgIHJldHVybiBub3RZZXRJbXBsZW1lbnRlZCgncmVhZFN5bmMnKTtcbiAgfVxuICByZWFkVG9HUFUoZGF0YUlkOiBvYmplY3QsIG9wdGlvbnM/OiBEYXRhVG9HUFVPcHRpb25zKTogR1BVRGF0YSB7XG4gICAgcmV0dXJuIG5vdFlldEltcGxlbWVudGVkKCdyZWFkVG9HUFUnKTtcbiAgfVxuICBudW1EYXRhSWRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIG5vdFlldEltcGxlbWVudGVkKCdudW1EYXRhSWRzJyk7XG4gIH1cbiAgZGlzcG9zZURhdGEoZGF0YUlkOiBvYmplY3QsIGZvcmNlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBub3RZZXRJbXBsZW1lbnRlZCgnZGlzcG9zZURhdGEnKTtcbiAgfVxuICB3cml0ZSh2YWx1ZXM6IEJhY2tlbmRWYWx1ZXMsIHNoYXBlOiBudW1iZXJbXSwgZHR5cGU6IERhdGFUeXBlKTogRGF0YUlkIHtcbiAgICByZXR1cm4gbm90WWV0SW1wbGVtZW50ZWQoJ3dyaXRlJyk7XG4gIH1cbiAgbW92ZShcbiAgICAgIGRhdGFJZDogRGF0YUlkLCB2YWx1ZXM6IEJhY2tlbmRWYWx1ZXMsIHNoYXBlOiBudW1iZXJbXSwgZHR5cGU6IERhdGFUeXBlLFxuICAgICAgcmVmQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybiBub3RZZXRJbXBsZW1lbnRlZCgnbW92ZScpO1xuICB9XG5cbiAgY3JlYXRlVGVuc29yRnJvbUdQVURhdGEoXG4gICAgICB2YWx1ZXM6IFdlYkdMRGF0YXxXZWJHUFVEYXRhLCBzaGFwZTogbnVtYmVyW10sIGR0eXBlOiBEYXRhVHlwZSk6IFRlbnNvciB7XG4gICAgcmV0dXJuIG5vdFlldEltcGxlbWVudGVkKCdjcmVhdGVUZW5zb3JGcm9tR1BVRGF0YScpO1xuICB9XG5cbiAgbWVtb3J5KCk6IHt1bnJlbGlhYmxlOiBib29sZWFuOyByZWFzb25zPzogc3RyaW5nW119IHtcbiAgICByZXR1cm4gbm90WWV0SW1wbGVtZW50ZWQoJ21lbW9yeScpO1xuICB9XG4gIC8qKiBSZXR1cm5zIHRoZSBoaWdoZXN0IHByZWNpc2lvbiBmb3IgZmxvYXRzIGluIGJpdHMgKGUuZy4gMTYgb3IgMzIpICovXG4gIGZsb2F0UHJlY2lzaW9uKCk6IDE2fDMyIHtcbiAgICByZXR1cm4gbm90WWV0SW1wbGVtZW50ZWQoJ2Zsb2F0UHJlY2lzaW9uJyk7XG4gIH1cbiAgLyoqIFJldHVybnMgdGhlIHNtYWxsZXN0IHJlcHJlc2VudGFibGUgbnVtYmVyLiAgKi9cbiAgZXBzaWxvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmZsb2F0UHJlY2lzaW9uKCkgPT09IDMyID8gRVBTSUxPTl9GTE9BVDMyIDogRVBTSUxPTl9GTE9BVDE2O1xuICB9XG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgcmV0dXJuIG5vdFlldEltcGxlbWVudGVkKCdkaXNwb3NlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90WWV0SW1wbGVtZW50ZWQoa2VybmVsTmFtZTogc3RyaW5nKTogbmV2ZXIge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgJyR7a2VybmVsTmFtZX0nIG5vdCB5ZXQgaW1wbGVtZW50ZWQgb3Igbm90IGZvdW5kIGluIHRoZSByZWdpc3RyeS4gYCArXG4gICAgICBgVGhpcyBrZXJuZWwgbWF5IG5vdCBiZSBzdXBwb3J0ZWQgYnkgdGhlIHRmanMgYmFja2VuZCB5b3UgaGF2ZSBjaG9zZW5gKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
    "fromStringArrayToUint8",
    ()=>fromStringArrayToUint8,
    "fromUint8ToStringArray",
    ()=>fromUint8ToStringArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/slice_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$segment_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/segment_util.js [app-client] (ecmascript)");
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
function fromUint8ToStringArray(vals) {
    try {
        // Decode the bytes into string.
        return vals.map((val)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeString"])(val));
    } catch (err) {
        throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${err}`);
    }
}
function fromStringArrayToUint8(strings) {
    return strings.map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodeString"])(s));
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZF91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9iYWNrZW5kcy9iYWNrZW5kX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFFbkQsb0RBQW9EO0FBQ3BELGNBQWMsa0JBQWtCLENBQUM7QUFDakMsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QyxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsY0FBYyxvQkFBb0IsQ0FBQztBQUVuQyxPQUFPLEtBQUssVUFBVSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxVQUFVLEVBQUMsQ0FBQztBQUVwQixPQUFPLEVBQTRCLFVBQVUsRUFBWSxNQUFNLFVBQVUsQ0FBQztBQUUxRSxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsY0FBYyx1QkFBdUIsQ0FBQztBQUN0QyxjQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGNBQWMsa0JBQWtCLENBQUM7QUFDakMsY0FBYyxtQkFBbUIsQ0FBQztBQUNsQyxjQUFjLGlCQUFpQixDQUFDO0FBQ2hDLGNBQWMsUUFBUSxDQUFDO0FBQ3ZCLGNBQWMsMEJBQTBCLENBQUM7QUFDekMsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGNBQWMsMkNBQTJDLENBQUM7QUFDMUQsY0FBYyxtQ0FBbUMsQ0FBQztBQUNsRCxjQUFjLDZDQUE2QyxDQUFDO0FBRTVELE9BQU8sS0FBSyxZQUFZLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFlBQVksRUFBQyxDQUFDO0FBRXRCLE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxJQUFrQjtJQUN2RCxJQUFJO1FBQ0YsZ0NBQWdDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixNQUFNLElBQUksS0FBSyxDQUNYLDREQUE0RCxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3hFO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxPQUFpQjtJQUN0RCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge2RlY29kZVN0cmluZywgZW5jb2RlU3RyaW5nfSBmcm9tICcuLi91dGlsJztcblxuLy8gVXRpbGl0aWVzIG5lZWRlZCBieSBiYWNrZW5kIGNvbnN1bWVycyBvZiB0Zi1jb3JlLlxuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2F4aXNfdXRpbCc7XG5leHBvcnQgKiBmcm9tICcuLi9vcHMvYnJvYWRjYXN0X3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2NvbmNhdF91dGlsJztcbmV4cG9ydCAqIGZyb20gJy4uL29wcy9jb252X3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2Z1c2VkX3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2Z1c2VkX3R5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4uL29wcy9yYWdnZWRfdG9fZGVuc2VfdXRpbCc7XG5leHBvcnQgKiBmcm9tICcuLi9vcHMvcmVkdWNlX3V0aWwnO1xuXG5pbXBvcnQgKiBhcyBzbGljZV91dGlsIGZyb20gJy4uL29wcy9zbGljZV91dGlsJztcbmV4cG9ydCB7c2xpY2VfdXRpbH07XG5cbmV4cG9ydCB7QmFja2VuZFZhbHVlcywgVHlwZWRBcnJheSwgdXBjYXN0VHlwZSwgUGl4ZWxEYXRhfSBmcm9tICcuLi90eXBlcyc7XG5leHBvcnQge01lbW9yeUluZm8sIFRpbWluZ0luZm99IGZyb20gJy4uL2VuZ2luZSc7XG5leHBvcnQgKiBmcm9tICcuLi9vcHMvcm90YXRlX3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2FycmF5X29wc191dGlsJztcbmV4cG9ydCAqIGZyb20gJy4uL29wcy9nYXRoZXJfbmRfdXRpbCc7XG5leHBvcnQgKiBmcm9tICcuLi9vcHMvc2NhdHRlcl9uZF91dGlsJztcbmV4cG9ydCAqIGZyb20gJy4uL29wcy9zZWx1X3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2Z1c2VkX3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL2VyZl91dGlsJztcbmV4cG9ydCAqIGZyb20gJy4uL2xvZyc7XG5leHBvcnQgKiBmcm9tICcuLi9iYWNrZW5kcy9jb21wbGV4X3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vYmFja2VuZHMvZWluc3VtX3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL3NwbGl0X3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL3NwYXJzZS9zcGFyc2VfZmlsbF9lbXB0eV9yb3dzX3V0aWwnO1xuZXhwb3J0ICogZnJvbSAnLi4vb3BzL3NwYXJzZS9zcGFyc2VfcmVzaGFwZV91dGlsJztcbmV4cG9ydCAqIGZyb20gJy4uL29wcy9zcGFyc2Uvc3BhcnNlX3NlZ21lbnRfcmVkdWN0aW9uX3V0aWwnO1xuXG5pbXBvcnQgKiBhcyBzZWdtZW50X3V0aWwgZnJvbSAnLi4vb3BzL3NlZ21lbnRfdXRpbCc7XG5leHBvcnQge3NlZ21lbnRfdXRpbH07XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVWludDhUb1N0cmluZ0FycmF5KHZhbHM6IFVpbnQ4QXJyYXlbXSkge1xuICB0cnkge1xuICAgIC8vIERlY29kZSB0aGUgYnl0ZXMgaW50byBzdHJpbmcuXG4gICAgcmV0dXJuIHZhbHMubWFwKHZhbCA9PiBkZWNvZGVTdHJpbmcodmFsKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBkZWNvZGUgZW5jb2RlZCBzdHJpbmcgYnl0ZXMgaW50byB1dGYtOCwgZXJyb3I6ICR7ZXJyfWApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU3RyaW5nQXJyYXlUb1VpbnQ4KHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBzdHJpbmdzLm1hcChzID0+IGVuY29kZVN0cmluZyhzKSk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/complex_util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ /**
 * Merges real and imaginary Float32Arrays into a single complex Float32Array.
 *
 * The memory layout is interleaved as follows:
 * real: [r0, r1, r2]
 * imag: [i0, i1, i2]
 * complex: [r0, i0, r1, i1, r2, i2]
 *
 * This is the inverse of splitRealAndImagArrays.
 *
 * @param real The real values of the complex tensor values.
 * @param imag The imag values of the complex tensor values.
 * @returns A complex tensor as a Float32Array with merged values.
 */ __turbopack_context__.s([
    "assignToTypedArray",
    ()=>assignToTypedArray,
    "complexWithEvenIndex",
    ()=>complexWithEvenIndex,
    "complexWithOddIndex",
    ()=>complexWithOddIndex,
    "exponent",
    ()=>exponent,
    "exponents",
    ()=>exponents,
    "getComplexWithIndex",
    ()=>getComplexWithIndex,
    "mergeRealAndImagArrays",
    ()=>mergeRealAndImagArrays,
    "splitRealAndImagArrays",
    ()=>splitRealAndImagArrays
]);
function mergeRealAndImagArrays(real, imag) {
    if (real.length !== imag.length) {
        throw new Error(`Cannot merge real and imag arrays of different lengths. real:` + `${real.length}, imag: ${imag.length}.`);
    }
    const result = new Float32Array(real.length * 2);
    for(let i = 0; i < result.length; i += 2){
        result[i] = real[i / 2];
        result[i + 1] = imag[i / 2];
    }
    return result;
}
function splitRealAndImagArrays(complex) {
    const real = new Float32Array(complex.length / 2);
    const imag = new Float32Array(complex.length / 2);
    for(let i = 0; i < complex.length; i += 2){
        real[i / 2] = complex[i];
        imag[i / 2] = complex[i + 1];
    }
    return {
        real,
        imag
    };
}
function complexWithEvenIndex(complex) {
    const len = Math.ceil(complex.length / 4);
    const real = new Float32Array(len);
    const imag = new Float32Array(len);
    for(let i = 0; i < complex.length; i += 4){
        real[Math.floor(i / 4)] = complex[i];
        imag[Math.floor(i / 4)] = complex[i + 1];
    }
    return {
        real,
        imag
    };
}
function complexWithOddIndex(complex) {
    const len = Math.floor(complex.length / 4);
    const real = new Float32Array(len);
    const imag = new Float32Array(len);
    for(let i = 2; i < complex.length; i += 4){
        real[Math.floor(i / 4)] = complex[i];
        imag[Math.floor(i / 4)] = complex[i + 1];
    }
    return {
        real,
        imag
    };
}
function getComplexWithIndex(complex, index) {
    const real = complex[index * 2];
    const imag = complex[index * 2 + 1];
    return {
        real,
        imag
    };
}
function assignToTypedArray(data, real, imag, index) {
    data[index * 2] = real;
    data[index * 2 + 1] = imag;
}
function exponents(n, inverse) {
    const real = new Float32Array(n / 2);
    const imag = new Float32Array(n / 2);
    for(let i = 0; i < Math.ceil(n / 2); i++){
        const x = (inverse ? 2 : -2) * Math.PI * (i / n);
        real[i] = Math.cos(x);
        imag[i] = Math.sin(x);
    }
    return {
        real,
        imag
    };
}
function exponent(k, n, inverse) {
    const x = (inverse ? 2 : -2) * Math.PI * (k / n);
    const real = Math.cos(x);
    const imag = Math.sin(x);
    return {
        real,
        imag
    };
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxleF91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9iYWNrZW5kcy9jb21wbGV4X3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBR0g7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FDbEMsSUFBa0IsRUFBRSxJQUFrQjtJQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUMvQixNQUFNLElBQUksS0FBSyxDQUNYLCtEQUErRDtZQUMvRCxHQUFHLElBQUksQ0FBQyxNQUFNLFdBQVcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDOUM7SUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsT0FBcUI7SUFFMUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxNQUFNLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFB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LENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsT0FBTyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge1R5cGVkQXJyYXl9IGZyb20gJy4uL3R5cGVzJztcbi8qKlxuICogTWVyZ2VzIHJlYWwgYW5kIGltYWdpbmFyeSBGbG9hdDMyQXJyYXlzIGludG8gYSBzaW5nbGUgY29tcGxleCBGbG9hdDMyQXJyYXkuXG4gKlxuICogVGhlIG1lbW9yeSBsYXlvdXQgaXMgaW50ZXJsZWF2ZWQgYXMgZm9sbG93czpcbiAqIHJlYWw6IFtyMCwgcjEsIHIyXVxuICogaW1hZzogW2kwLCBpMSwgaTJdXG4gKiBjb21wbGV4OiBbcjAsIGkwLCByMSwgaTEsIHIyLCBpMl1cbiAqXG4gKiBUaGlzIGlzIHRoZSBpbnZlcnNlIG9mIHNwbGl0UmVhbEFuZEltYWdBcnJheXMuXG4gKlxuICogQHBhcmFtIHJlYWwgVGhlIHJlYWwgdmFsdWVzIG9mIHRoZSBjb21wbGV4IHRlbnNvciB2YWx1ZXMuXG4gKiBAcGFyYW0gaW1hZyBUaGUgaW1hZyB2YWx1ZXMgb2YgdGhlIGNvbXBsZXggdGVuc29yIHZhbHVlcy5cbiAqIEByZXR1cm5zIEEgY29tcGxleCB0ZW5zb3IgYXMgYSBGbG9hdDMyQXJyYXkgd2l0aCBtZXJnZWQgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VSZWFsQW5kSW1hZ0FycmF5cyhcbiAgICByZWFsOiBGbG9hdDMyQXJyYXksIGltYWc6IEZsb2F0MzJBcnJheSk6IEZsb2F0MzJBcnJheSB7XG4gIGlmIChyZWFsLmxlbmd0aCAhPT0gaW1hZy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBDYW5ub3QgbWVyZ2UgcmVhbCBhbmQgaW1hZyBhcnJheXMgb2YgZGlmZmVyZW50IGxlbmd0aHMuIHJlYWw6YCArXG4gICAgICAgIGAke3JlYWwubGVuZ3RofSwgaW1hZzogJHtpbWFnLmxlbmd0aH0uYCk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gbmV3IEZsb2F0MzJBcnJheShyZWFsLmxlbmd0aCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlc3VsdFtpXSA9IHJlYWxbaSAvIDJdO1xuICAgIHJlc3VsdFtpICsgMV0gPSBpbWFnW2kgLyAyXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFNwbGl0cyBhIGNvbXBsZXggRmxvYXQzMkFycmF5IGludG8gcmVhbCBhbmQgaW1hZyBwYXJ0cy5cbiAqXG4gKiBUaGUgbWVtb3J5IGxheW91dCBpcyBpbnRlcmxlYXZlZCBhcyBmb2xsb3dzOlxuICogY29tcGxleDogW3IwLCBpMCwgcjEsIGkxLCByMiwgaTJdXG4gKiByZWFsOiBbcjAsIHIxLCByMl1cbiAqIGltYWc6IFtpMCwgaTEsIGkyXVxuICpcbiAqIFRoaXMgaXMgdGhlIGludmVyc2Ugb2YgbWVyZ2VSZWFsQW5kSW1hZ0FycmF5cy5cbiAqXG4gKiBAcGFyYW0gY29tcGxleCBUaGUgY29tcGxleCB0ZW5zb3IgdmFsdWVzLlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggcmVhbCBhbmQgaW1hZyBGbG9hdDMyQXJyYXkgY29tcG9uZW50cyBvZiB0aGUgY29tcGxleFxuICogICAgIHRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0UmVhbEFuZEltYWdBcnJheXMoY29tcGxleDogRmxvYXQzMkFycmF5KTpcbiAgICB7cmVhbDogRmxvYXQzMkFycmF5LCBpbWFnOiBGbG9hdDMyQXJyYXl9IHtcbiAgY29uc3QgcmVhbCA9IG5ldyBGbG9hdDMyQXJyYXkoY29tcGxleC5sZW5ndGggLyAyKTtcbiAgY29uc3QgaW1hZyA9IG5ldyBGbG9hdDMyQXJyYXkoY29tcGxleC5sZW5ndGggLyAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wbGV4Lmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVhbFtpIC8gMl0gPSBjb21wbGV4W2ldO1xuICAgIGltYWdbaSAvIDJdID0gY29tcGxleFtpICsgMV07XG4gIH1cbiAgcmV0dXJuIHtyZWFsLCBpbWFnfTtcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBldmVuIGluZGV4ZWQgY29tcGxleCB2YWx1ZXMgaW4gdGhlIGdpdmVuIGFycmF5LlxuICogQHBhcmFtIGNvbXBsZXggVGhlIGNvbXBsZXggdGVuc29yIHZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGxleFdpdGhFdmVuSW5kZXgoY29tcGxleDogRmxvYXQzMkFycmF5KTpcbiAgICB7cmVhbDogRmxvYXQzMkFycmF5LCBpbWFnOiBGbG9hdDMyQXJyYXl9IHtcbiAgY29uc3QgbGVuID0gTWF0aC5jZWlsKGNvbXBsZXgubGVuZ3RoIC8gNCk7XG4gIGNvbnN0IHJlYWwgPSBuZXcgRmxvYXQzMkFycmF5KGxlbik7XG4gIGNvbnN0IGltYWcgPSBuZXcgRmxvYXQzMkFycmF5KGxlbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGxleC5sZW5ndGg7IGkgKz0gNCkge1xuICAgIHJlYWxbTWF0aC5mbG9vcihpIC8gNCldID0gY29tcGxleFtpXTtcbiAgICBpbWFnW01hdGguZmxvb3IoaSAvIDQpXSA9IGNvbXBsZXhbaSArIDFdO1xuICB9XG4gIHJldHVybiB7cmVhbCwgaW1hZ307XG59XG5cbi8qKlxuICogRXh0cmFjdHMgb2RkIGluZGV4ZWQgY29tcGxldGUgdmFsdWVzIGluIHRoZSBnaXZlbiBhcnJheS5cbiAqIEBwYXJhbSBjb21wbGV4IFRoZSBjb21wbGV4IHRlbnNvciB2YWx1ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXhXaXRoT2RkSW5kZXgoY29tcGxleDogRmxvYXQzMkFycmF5KTpcbiAgICB7cmVhbDogRmxvYXQzMkFycmF5LCBpbWFnOiBGbG9hdDMyQXJyYXl9IHtcbiAgY29uc3QgbGVuID0gTWF0aC5mbG9vcihjb21wbGV4Lmxlbmd0aCAvIDQpO1xuICBjb25zdCByZWFsID0gbmV3IEZsb2F0MzJBcnJheShsZW4pO1xuICBjb25zdCBpbWFnID0gbmV3IEZsb2F0MzJBcnJheShsZW4pO1xuICBmb3IgKGxldCBpID0gMjsgaSA8IGNvbXBsZXgubGVuZ3RoOyBpICs9IDQpIHtcbiAgICByZWFsW01hdGguZmxvb3IoaSAvIDQpXSA9IGNvbXBsZXhbaV07XG4gICAgaW1hZ1tNYXRoLmZsb29yKGkgLyA0KV0gPSBjb21wbGV4W2kgKyAxXTtcbiAgfVxuICByZXR1cm4ge3JlYWwsIGltYWd9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgbWFwIHJlcHJlc2VudGluZyBhIGNvbXBsZXggdmFsdWUgaW4gdGhlIGdpdmVuIGFycmF5LlxuICogQHBhcmFtIGNvbXBsZXggVGhlIGNvbXBsZXggdGVuc29yIHZhbHVlcy5cbiAqIEBwYXJhbSBpbmRleCBBbiBpbmRleCBvZiB0aGUgdGFyZ2V0IGNvbXBsZXggdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wbGV4V2l0aEluZGV4KFxuICAgIGNvbXBsZXg6IEZsb2F0MzJBcnJheSwgaW5kZXg6IG51bWJlcik6IHtyZWFsOiBudW1iZXIsIGltYWc6IG51bWJlcn0ge1xuICBjb25zdCByZWFsID0gY29tcGxleFtpbmRleCAqIDJdO1xuICBjb25zdCBpbWFnID0gY29tcGxleFtpbmRleCAqIDIgKyAxXTtcbiAgcmV0dXJuIHtyZWFsLCBpbWFnfTtcbn1cblxuLyoqXG4gKiBJbnNlcnQgYSBnaXZlbiBjb21wbGV4IHZhbHVlIGludG8gdGhlIFR5cGVkQXJyYXkuXG4gKiBAcGFyYW0gZGF0YSBUaGUgYXJyYXkgaW4gd2hpY2ggdGhlIGNvbXBsZXggdmFsdWUgaXMgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0gYyBUaGUgY29tcGxleCB2YWx1ZSB0byBiZSBpbnNlcnRlZC5cbiAqIEBwYXJhbSBpbmRleCBBbiBpbmRleCBvZiB0aGUgdGFyZ2V0IGNvbXBsZXggdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Ub1R5cGVkQXJyYXkoXG4gICAgZGF0YTogVHlwZWRBcnJheSwgcmVhbDogbnVtYmVyLCBpbWFnOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcbiAgZGF0YVtpbmRleCAqIDJdID0gcmVhbDtcbiAgZGF0YVtpbmRleCAqIDIgKyAxXSA9IGltYWc7XG59XG5cbi8qKlxuICogTWFrZSB0aGUgbGlzdCBvZiBleHBvbmVudCB0ZXJtcyB1c2VkIGJ5IEZGVC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cG9uZW50cyhcbiAgICBuOiBudW1iZXIsIGludmVyc2U6IGJvb2xlYW4pOiB7cmVhbDogRmxvYXQzMkFycmF5LCBpbWFnOiBGbG9hdDMyQXJyYXl9IHtcbiAgY29uc3QgcmVhbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAvIDIpO1xuICBjb25zdCBpbWFnID0gbmV3IEZsb2F0MzJBcnJheShuIC8gMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5jZWlsKG4gLyAyKTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IChpbnZlcnNlID8gMiA6IC0yKSAqIE1hdGguUEkgKiAoaSAvIG4pO1xuICAgIHJlYWxbaV0gPSBNYXRoLmNvcyh4KTtcbiAgICBpbWFnW2ldID0gTWF0aC5zaW4oeCk7XG4gIH1cbiAgcmV0dXJuIHtyZWFsLCBpbWFnfTtcbn1cblxuLyoqXG4gKiBNYWtlIHRoZSBleHBvbmVudCB0ZXJtIHVzZWQgYnkgRkZULlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwb25lbnQoXG4gICAgazogbnVtYmVyLCBuOiBudW1iZXIsIGludmVyc2U6IGJvb2xlYW4pOiB7cmVhbDogbnVtYmVyLCBpbWFnOiBudW1iZXJ9IHtcbiAgY29uc3QgeCA9IChpbnZlcnNlID8gMiA6IC0yKSAqIE1hdGguUEkgKiAoayAvIG4pO1xuICBjb25zdCByZWFsID0gTWF0aC5jb3MoeCk7XG4gIGNvbnN0IGltYWcgPSBNYXRoLnNpbih4KTtcbiAgcmV0dXJuIHtyZWFsLCBpbWFnfTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/einsum_util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "checkEinsumDimSizes",
    ()=>checkEinsumDimSizes,
    "decodeEinsumEquation",
    ()=>decodeEinsumEquation,
    "getEinsumComputePath",
    ()=>getEinsumComputePath,
    "getEinsumPermutation",
    ()=>getEinsumPermutation,
    "isIdentityPermutation",
    ()=>isIdentityPermutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
;
const ARROW = '->';
const ARROW_REGEX = /->/g;
const COMMA = ',';
const ELLIPSIS = '...';
function decodeEinsumEquation(equation, numTensors) {
    equation = equation.replace(/\s/g, ''); // Remove witespace in equation.
    const numArrows = (equation.length - equation.replace(ARROW_REGEX, '').length) / ARROW.length;
    if (numArrows < 1) {
        throw new Error('Equations without an arrow are not supported.');
    } else if (numArrows > 1) {
        throw new Error(`Equation must contain exactly one arrow ("${ARROW}").`);
    }
    const [inputString, outputString] = equation.split(ARROW);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(inputString.indexOf(ELLIPSIS) === -1, ()=>`The ellipsis notation ("${ELLIPSIS}") is not supported yet.`);
    const inputTerms = inputString.split(COMMA);
    const numInputs = inputTerms.length;
    if (numTensors !== numInputs) {
        throw new Error(`Expected ${numInputs} input tensors, received ${numTensors}`);
    }
    if (numInputs > 2) {
        throw new Error('Support for more than 2 input tensors is not implemented yet.');
    }
    const allDims = [];
    for(let i = 0; i < outputString.length; ++i){
        const dimName = outputString[i];
        if (!inputTerms.some((inputTerm)=>inputTerm.indexOf(dimName) !== -1)) {
            throw new Error(`Output subscripts contain the label ${dimName} ` + `not present in the input subscripts.`);
        }
        if (allDims.indexOf(dimName) === -1) {
            allDims.push(dimName);
        }
    }
    for(let i = 0; i < inputString.length; ++i){
        const dimName = inputString[i];
        if (allDims.indexOf(dimName) === -1 && dimName !== COMMA) {
            allDims.push(dimName);
        }
    }
    const idDims = new Array(inputTerms.length);
    for(let i = 0; i < numInputs; ++i){
        if (new Set(inputTerms[i].split('')).size !== inputTerms[i].length) {
            throw new Error(`Found duplicate axes in input component ${inputTerms[i]}. ` + `Support for duplicate axes in input is not implemented yet.`);
        }
        idDims[i] = [];
        for(let j = 0; j < inputTerms[i].length; ++j){
            idDims[i].push(allDims.indexOf(inputTerms[i][j]));
        }
    }
    const numDims = allDims.length; // Number of unique dimensions.
    const numOutDims = outputString.length; // Number of output dimensions.
    const summedDims = []; // Dimensions being summed over.
    for(let i = numOutDims; i < numDims; ++i){
        summedDims.push(i);
    }
    return {
        allDims,
        summedDims,
        idDims
    };
}
function getEinsumPermutation(nDims, idDims) {
    let permutationIndices = new Array(nDims);
    permutationIndices.fill(-1);
    for(let i = 0; i < idDims.length; ++i){
        permutationIndices[idDims[i]] = i;
    }
    const expandDims = [];
    for(let i = 0; i < nDims; ++i){
        if (permutationIndices[i] === -1) {
            expandDims.push(i);
        }
    }
    permutationIndices = permutationIndices.filter((d)=>d !== -1);
    return {
        permutationIndices,
        expandDims
    };
}
function checkEinsumDimSizes(nDims, idDims, tensors) {
    const dimSizes = new Array(nDims);
    for(let i = 0; i < tensors.length; ++i){
        const shape = tensors[i].shape;
        for(let j = 0; j < idDims[i].length; ++j){
            if (dimSizes[idDims[i][j]] === undefined) {
                dimSizes[idDims[i][j]] = shape[j];
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(dimSizes[idDims[i][j]] === shape[j], ()=>`Expected dimension ${dimSizes[idDims[i][j]]} at axis ${j} ` + `of input shaped ${JSON.stringify(shape)}, ` + `but got dimension ${shape[j]}`);
            }
        }
    }
}
function getEinsumComputePath(summedDims, idDims) {
    const path = summedDims;
    const steps = [];
    let nSteps = 0;
    if (summedDims.length === 0) {
        // Einsum that involes no summing: e.g., transpose and outer product.
        path.push(-1);
    }
    nSteps = summedDims.length + 1;
    for(let i = 0; i < nSteps; ++i){
        steps.push([]);
    }
    const computedTermIndices = [];
    for(let i = 0; i < path.length; ++i){
        const summedDim = path[i];
        const termIndices = findTermsWithDim(idDims, summedDim);
        for (const termIndex of termIndices){
            if (computedTermIndices.indexOf(termIndex) === -1) {
                steps[i].push(termIndex);
                computedTermIndices.push(termIndex);
            }
        }
    }
    return {
        path,
        steps
    };
}
function isIdentityPermutation(perm) {
    return perm.every((dim, index)=>dim === index);
}
function findTermsWithDim(idDims, dim) {
    const termIndices = [];
    for(let i = 0; i < idDims.length; ++i){
        if (idDims[i].length === 0 || idDims[i].indexOf(dim) !== -1 || dim === -1) {
            termIndices.push(i);
        }
    }
    return termIndices;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWluc3VtX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWNvcmUvc3JjL2JhY2tlbmRzL2VpbnN1bV91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQVFILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBRXZCOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxRQUFnQixFQUFFLFVBQWtCO0lBS3ZFLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFFLGdDQUFnQztJQUN6RSxNQUFNLFNBQVMsR0FDWCxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzVELEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztLQUNsRTtTQUFNLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtRQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxLQUFLLEtBQUssQ0FBQyxDQUFDO0tBQzFFO0lBQ0QsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELE1BQU0sQ0FDRixXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMs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Q0FBQyxDQUFDO0FBQ25FLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE1BQWtCLEVBQUUsR0FBVztJQUN2RCxNQUFNLFdBQVcsR0FBYSxFQUFFLENBQUM7SUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDdEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN6RSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIGZvciBjb21wdXRpbmcgZWluc3VtICh0ZW5zb3IgY29udHJhY3Rpb24gYW5kIHN1bW1hdGlvblxuICogYmFzZWQgb24gRWluc3RlaW4gc3VtbWF0aW9uLilcbiAqL1xuXG5pbXBvcnQge1RlbnNvcn0gZnJvbSAnLi4vdGVuc29yJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuLi91dGlsX2Jhc2UnO1xuXG5jb25zdCBBUlJPVyA9ICctPic7XG5jb25zdCBBUlJPV19SRUdFWCA9IC8tPi9nO1xuY29uc3QgQ09NTUEgPSAnLCc7XG5jb25zdCBFTExJUFNJUyA9ICcuLi4nO1xuXG4vKipcbiAqIFBhcnNlIGFuIGVxdWF0aW9uIGZvciBlaW5zdW0uXG4gKlxuICogQHBhcmFtIGVxdWF0aW9uIFRoZSBlaW5zdW0gZXF1YXRpb24gKGUuZy4sIFwiaWosamstPmlrXCIpLlxuICogQHBhcmFtIG51bVRlbnNvcnMgTnVtYmVyIG9mIHRlbnNvcnMgcHJvdmlkZWQgYWxvbmcgd2l0aCBgZXF1YXRpb25gLiBVc2VkIHRvXG4gKiAgIGNoZWNrIG1hdGNoaW5nIG51bWJlciBvZiBpbnB1dCB0ZW5zb3JzLlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnNpc3Rpbmcgb2YgdGhlIGZvbGxvd2luZyBmaWVsZHM6XG4gKiAgIC0gYWxsRGltczogYWxsIGRpbWVuc2lvbiBuYW1lcyBhcyBzdHJpbmdzLlxuICogICAtIHN1bW1lZERpbXM6IGEgbGlzdCBvZiBhbGwgZGltZW5zaW9ucyBiZWluZyBzdW1tZWQgb3ZlciwgYXMgaW5kaWNlcyB0b1xuICogICAgIHRoZSBlbGVtZW50cyBvZiBgYWxsRGltc2AuXG4gKiAgIC0gaWREaW1zOiBpbmRpY2VzIG9mIHRoZSBkaW1lbnNpb25zIGluIGVhY2ggaW5wdXQgdGVuc29yLCBhcyBpbmRpY2VzIHRvXG4gKiAgICAgdGhlIGVsZW1lbnRzIG9mIGBhbGxEaW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRWluc3VtRXF1YXRpb24oZXF1YXRpb246IHN0cmluZywgbnVtVGVuc29yczogbnVtYmVyKToge1xuICBhbGxEaW1zOiBzdHJpbmdbXSxcbiAgc3VtbWVkRGltczogbnVtYmVyW10sXG4gIGlkRGltczogbnVtYmVyW11bXSxcbn0ge1xuICBlcXVhdGlvbiA9IGVxdWF0aW9uLnJlcGxhY2UoL1xccy9nLCAnJyk7ICAvLyBSZW1vdmUgd2l0ZXNwYWNlIGluIGVxdWF0aW9uLlxuICBjb25zdCBudW1BcnJvd3MgPVxuICAgICAgKGVxdWF0aW9uLmxlbmd0aCAtIGVxdWF0aW9uLnJlcGxhY2UoQVJST1dfUkVHRVgsICcnKS5sZW5ndGgpIC9cbiAgICAgIEFSUk9XLmxlbmd0aDtcbiAgaWYgKG51bUFycm93cyA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VxdWF0aW9ucyB3aXRob3V0IGFuIGFycm93IGFyZSBub3Qgc3VwcG9ydGVkLicpO1xuICB9IGVsc2UgaWYgKG51bUFycm93cyA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVxdWF0aW9uIG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBhcnJvdyAoXCIke0FSUk9XfVwiKS5gKTtcbiAgfVxuICBjb25zdCBbaW5wdXRTdHJpbmcsIG91dHB1dFN0cmluZ10gPSBlcXVhdGlvbi5zcGxpdChBUlJPVyk7XG4gIGFzc2VydChcbiAgICAgIGlucHV0U3RyaW5nLmluZGV4T2YoRUxMSVBTSVMpID09PSAtMSxcbiAgICAgICgpID0+IGBUaGUgZWxsaXBzaXMgbm90YXRpb24gKFwiJHtFTExJUFNJU31cIikgaXMgbm90IHN1cHBvcnRlZCB5ZXQuYCk7XG4gIGNvbnN0IGlucHV0VGVybXMgPSBpbnB1dFN0cmluZy5zcGxpdChDT01NQSk7XG4gIGNvbnN0IG51bUlucHV0cyA9IGlucHV0VGVybXMubGVuZ3RoO1xuICBpZiAobnVtVGVuc29ycyAhPT0gbnVtSW5wdXRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRXhwZWN0ZWQgJHtudW1JbnB1dHN9IGlucHV0IHRlbnNvcnMsIHJlY2VpdmVkICR7bnVtVGVuc29yc31gKTtcbiAgfVxuICBpZiAobnVtSW5wdXRzID4gMikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1N1cHBvcnQgZm9yIG1vcmUgdGhhbiAyIGlucHV0IHRlbnNvcnMgaXMgbm90IGltcGxlbWVudGVkIHlldC4nKTtcbiAgfVxuXG4gIGNvbnN0IGFsbERpbXM6IHN0cmluZ1tdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0U3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgZGltTmFtZSA9IG91dHB1dFN0cmluZ1tpXTtcbiAgICBpZiAoIWlucHV0VGVybXMuc29tZShpbnB1dFRlcm0gPT4gaW5wdXRUZXJtLmluZGV4T2YoZGltTmFtZSkgIT09IC0xKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBPdXRwdXQgc3Vic2NyaXB0cyBjb250YWluIHRoZSBsYWJlbCAke2RpbU5hbWV9IGAgK1xuICAgICAgICAgIGBub3QgcHJlc2VudCBpbiB0aGUgaW5wdXQgc3Vic2NyaXB0cy5gKTtcbiAgICB9XG4gICAgaWYgKGFsbERpbXMuaW5kZXhPZihkaW1OYW1lKSA9PT0gLTEpIHtcbiAgICAgIGFsbERpbXMucHVzaChkaW1OYW1lKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dFN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGRpbU5hbWUgPSBpbnB1dFN0cmluZ1tpXTtcbiAgICBpZiAoYWxsRGltcy5pbmRleE9mKGRpbU5hbWUpID09PSAtMSAmJiBkaW1OYW1lICE9PSBDT01NQSkge1xuICAgICAgYWxsRGltcy5wdXNoKGRpbU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlkRGltczogbnVtYmVyW11bXSA9IG5ldyBBcnJheTxudW1iZXJbXT4oaW5wdXRUZXJtcy5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUlucHV0czsgKytpKSB7XG4gICAgaWYgKG5ldyBTZXQoaW5wdXRUZXJtc1tpXS5zcGxpdCgnJykpLnNpemUgIT09IGlucHV0VGVybXNbaV0ubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZvdW5kIGR1cGxpY2F0ZSBheGVzIGluIGlucHV0IGNvbXBvbmVudCAke2lucHV0VGVybXNbaV19LiBgICtcbiAgICAgICAgICBgU3VwcG9ydCBmb3IgZHVwbGljYXRlIGF4ZXMgaW4gaW5wdXQgaXMgbm90IGltcGxlbWVudGVkIHlldC5gKTtcbiAgICB9XG4gICAgaWREaW1zW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnB1dFRlcm1zW2ldLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZERpbXNbaV0ucHVzaChhbGxEaW1zLmluZGV4T2YoaW5wdXRUZXJtc1tpXVtqXSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG51bURpbXMgPSBhbGxEaW1zLmxlbmd0aDsgICAgICAgICAgLy8gTnVtYmVyIG9mIHVuaXF1ZSBkaW1lbnNpb25zLlxuICBjb25zdCBudW1PdXREaW1zID0gb3V0cHV0U3RyaW5nLmxlbmd0aDsgIC8vIE51bWJlciBvZiBvdXRwdXQgZGltZW5zaW9ucy5cbiAgY29uc3Qgc3VtbWVkRGltczogbnVtYmVyW10gPSBbXTsgICAgICAgICAvLyBEaW1lbnNpb25zIGJlaW5nIHN1bW1lZCBvdmVyLlxuICBmb3IgKGxldCBpID0gbnVtT3V0RGltczsgaSA8IG51bURpbXM7ICsraSkge1xuICAgIHN1bW1lZERpbXMucHVzaChpKTtcbiAgfVxuICByZXR1cm4ge2FsbERpbXMsIHN1bW1lZERpbXMsIGlkRGltc307XG59XG5cbi8qKlxuICogR2V0IHRoZSBwZXJtdXRhdGlvbiBmb3IgYSBnaXZlbiBpbnB1dCB0ZW5zb3IuXG4gKlxuICogQHBhcmFtIG5EaW1zIFRvdGFsIG51bWJlciBvZiBkaW1lbnNpb24gb2YgYWxsIHRlbnNvcnMgaW52b2x2ZWQgaW4gdGhlIGVpbnN1bVxuICogICBvcGVyYXRpb24uXG4gKiBAcGFyYW0gaWREaW1zIERpbWVuc2lvbiBpbmRpY2VzIGludm9sdmUgaW4gdGhlIHRlbnNvciBpbiBxdWVzdGlvbi5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb25zaXN0aW5nIG9mIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICogICAtIHBlcm11dGF0aW9uSW5kaWNlczogSW5kaWNlcyB0byBwZXJtdXRlIHRoZSBheGVzIG9mIHRoZSB0ZW5zb3Igd2l0aC5cbiAqICAgLSBleHBhbmREaW1zOiBJbmRpY2VzIHRvIHRoZSBkaW1lbnNpb24gdGhhdCBuZWVkIHRvIGJlIGV4cGFuZGVkIGZyb20gdGhlXG4gKiAgICAgdGVuc29yIGFmdGVyIHBlcm11dGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWluc3VtUGVybXV0YXRpb24obkRpbXM6IG51bWJlciwgaWREaW1zOiBudW1iZXJbXSk6XG4gICAge3Blcm11dGF0aW9uSW5kaWNlczogbnVtYmVyW10sIGV4cGFuZERpbXM6IG51bWJlcltdfSB7XG4gIGxldCBwZXJtdXRhdGlvbkluZGljZXM6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4obkRpbXMpO1xuICBwZXJtdXRhdGlvbkluZGljZXMuZmlsbCgtMSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaWREaW1zLmxlbmd0aDsgKytpKSB7XG4gICAgcGVybXV0YXRpb25JbmRpY2VzW2lkRGltc1tpXV0gPSBpO1xuICB9XG4gIGNvbnN0IGV4cGFuZERpbXM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbkRpbXM7ICsraSkge1xuICAgIGlmIChwZXJtdXRhdGlvbkluZGljZXNbaV0gPT09IC0xKSB7XG4gICAgICBleHBhbmREaW1zLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHBlcm11dGF0aW9uSW5kaWNlcyA9IHBlcm11dGF0aW9uSW5kaWNlcy5maWx0ZXIoZCA9PiBkICE9PSAtMSk7XG4gIHJldHVybiB7cGVybXV0YXRpb25JbmRpY2VzLCBleHBhbmREaW1zfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgdGhhdCB0aGUgZGltZW5zaW9uIHNpemVzIGZyb20gZGlmZmVyZW50IGlucHV0IHRlbnNvcnMgbWF0Y2ggdGhlXG4gKiBlcXVhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRWluc3VtRGltU2l6ZXMoXG4gICAgbkRpbXM6IG51bWJlciwgaWREaW1zOiBudW1iZXJbXVtdLCB0ZW5zb3JzOiBUZW5zb3JbXSkge1xuICBjb25zdCBkaW1TaXplczogbnVtYmVyW10gPSBuZXcgQXJyYXk8bnVtYmVyPihuRGltcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVuc29ycy5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHNoYXBlOiBudW1iZXJbXSA9IHRlbnNvcnNbaV0uc2hhcGU7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpZERpbXNbaV0ubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChkaW1TaXplc1tpZERpbXNbaV1bal1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGltU2l6ZXNbaWREaW1zW2ldW2pdXSA9IHNoYXBlW2pdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNzZXJ0KFxuICAgICAgICAgICAgZGltU2l6ZXNbaWREaW1zW2ldW2pdXSA9PT0gc2hhcGVbal0sXG4gICAgICAgICAgICAoKSA9PiBgRXhwZWN0ZWQgZGltZW5zaW9uICR7ZGltU2l6ZXNbaWREaW1zW2ldW2pdXX0gYXQgYXhpcyAke2p9IGAgK1xuICAgICAgICAgICAgICAgIGBvZiBpbnB1dCBzaGFwZWQgJHtKU09OLnN0cmluZ2lmeShzaGFwZSl9LCBgICtcbiAgICAgICAgICAgICAgICBgYnV0IGdvdCBkaW1lbnNpb24gJHtzaGFwZVtqXX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHBhdGggb2YgY29tcHV0YXRpb24gZm9yIGVpbnN1bS5cbiAqXG4gKiBAcGFyYW0gc3VtbWVkRGltcyBpbmRpY2VzIHRvIHRoZSBkaW1lbnNpb25zIGJlaW5nIHN1bW1lZCBvdmVyLlxuICogQHBhcmFtIGlkRGltcyBBIGxvb2sgdXAgdGFibGUgZm9yIHRoZSBkaW1lbnNpb25zIHByZXNlbnQgaW4gZWFjaCBpbnB1dFxuICogICAgIHRlbnNvci5FYWNoIGNvbnN0aXR1ZW50IGFycmF5IGNvbnRhaW5zIGluZGljZXMgZm9yIHRoZSBkaW1lbnNpb25zIGluIHRoZVxuICogICAgIGNvcnJlc3BvbmRpbmcgaW5wdXQgdGVuc29yLlxuICpcbiAqIEByZXR1cm4gQSBtYXAgd2l0aCB0d28gZmllbGRzOlxuICogICAtIHBhdGg6IFRoZSBwYXRoIG9mIGNvbXB1dGF0aW9uLCB3aXRoIGVhY2ggZWxlbWVudCBpbmRpY2F0aW5nIHRoZSBkaW1lbnNpb25cbiAqICAgICBiZWluZyBzdW1tZWQgb3ZlciBhZnRlciB0aGUgZWxlbWVudC13aXNlIG11bHRpcGxpY2F0aW9uIGluIHRoYXQgc3RlcC5cbiAqICAgLSBzdGVwczogV2l0aCB0aGUgc2FtZSBsZW5ndGggYXMgYHBhdGhgLiBFYWNoIGVsZW1lbnQgY29udGFpbnMgdGhlIGluZGljZXNcbiAqICAgICB0byB0aGUgaW5wdXQgdGVuc29ycyBiZWluZyB1c2VkIGZvciBlbGVtZW50LXdpc2UgbXVsdGlwbGljYXRpb24gaW4gdGhlXG4gKiAgICAgY29ycmVzcG9uZGluZyBzdGVwLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWluc3VtQ29tcHV0ZVBhdGgoc3VtbWVkRGltczogbnVtYmVyW10sIGlkRGltczogbnVtYmVyW11bXSk6XG4gICAge3BhdGg6IG51bWJlcltdLCBzdGVwczogbnVtYmVyW11bXX0ge1xuICBjb25zdCBwYXRoOiBudW1iZXJbXSA9IHN1bW1lZERpbXM7XG4gIGNvbnN0IHN0ZXBzOiBudW1iZXJbXVtdID0gW107XG4gIGxldCBuU3RlcHMgPSAwO1xuICBpZiAoc3VtbWVkRGltcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBFaW5zdW0gdGhhdCBpbnZvbGVzIG5vIHN1bW1pbmc6IGUuZy4sIHRyYW5zcG9zZSBhbmQgb3V0ZXIgcHJvZHVjdC5cbiAgICBwYXRoLnB1c2goLTEpO1xuICB9XG4gIG5TdGVwcyA9IHN1bW1lZERpbXMubGVuZ3RoICsgMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU3RlcHM7ICsraSkge1xuICAgIHN0ZXBzLnB1c2goW10pO1xuICB9XG4gIGNvbnN0IGNvbXB1dGVkVGVybUluZGljZXM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHN1bW1lZERpbSA9IHBhdGhbaV07XG4gICAgY29uc3QgdGVybUluZGljZXMgPSBmaW5kVGVybXNXaXRoRGltKGlkRGltcywgc3VtbWVkRGltKTtcbiAgICBmb3IgKGNvbnN0IHRlcm1JbmRleCBvZiB0ZXJtSW5kaWNlcykge1xuICAgICAgaWYgKGNvbXB1dGVkVGVybUluZGljZXMuaW5kZXhPZih0ZXJtSW5kZXgpID09PSAtMSkge1xuICAgICAgICBzdGVwc1tpXS5wdXNoKHRlcm1JbmRleCk7XG4gICAgICAgIGNvbXB1dGVkVGVybUluZGljZXMucHVzaCh0ZXJtSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge3BhdGgsIHN0ZXBzfTtcbn1cblxuLyoqIERldGVybWluZXMgaWYgYW4gYXhlcyBwZXJtdXRhdGlvbiBpcyB0aGUgaWRlbnRpdHkgcGVybXV0YXRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gaXNJZGVudGl0eVBlcm11dGF0aW9uKHBlcm06IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIHJldHVybiBwZXJtLmV2ZXJ5KChkaW06IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gZGltID09PSBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUZXJtc1dpdGhEaW0oaWREaW1zOiBudW1iZXJbXVtdLCBkaW06IG51bWJlcik6IG51bWJlcltdIHtcbiAgY29uc3QgdGVybUluZGljZXM6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaWREaW1zLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGlkRGltc1tpXS5sZW5ndGggPT09IDAgfHwgaWREaW1zW2ldLmluZGV4T2YoZGltKSAhPT0gLTEgfHwgZGltID09PSAtMSkge1xuICAgICAgdGVybUluZGljZXMucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRlcm1JbmRpY2VzO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERF_A1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERF_A1"],
    "ERF_A2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERF_A2"],
    "ERF_A3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERF_A3"],
    "ERF_A4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERF_A4"],
    "ERF_A5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERF_A5"],
    "ERF_P",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERF_P"],
    "PARALLELIZE_THRESHOLD",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reduce_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARALLELIZE_THRESHOLD"],
    "RowPartitionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ragged_to_dense_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowPartitionType"],
    "SELU_SCALE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$selu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELU_SCALE"],
    "SELU_SCALEALPHA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$selu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SELU_SCALEALPHA"],
    "applyActivation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyActivation"],
    "assertAndGetBroadcastShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAndGetBroadcastShape"],
    "assertAxesAreInnerMostDims",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAxesAreInnerMostDims"],
    "assertParamsConsistent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertParamsConsistent"],
    "assignToTypedArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignToTypedArray"],
    "axesAreInnerMostDims",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axesAreInnerMostDims"],
    "calculateShapes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scatter_nd_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateShapes"],
    "checkEinsumDimSizes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$einsum_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEinsumDimSizes"],
    "checkPadOnDimRoundingMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPadOnDimRoundingMode"],
    "combineLocations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineLocations"],
    "combineRaggedTensorToTensorShapes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ragged_to_dense_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineRaggedTensorToTensorShapes"],
    "complexWithEvenIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complexWithEvenIndex"],
    "complexWithOddIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["complexWithOddIndex"],
    "computeConv2DInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeConv2DInfo"],
    "computeConv3DInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeConv3DInfo"],
    "computeDefaultPad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeDefaultPad"],
    "computeDilation2DInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeDilation2DInfo"],
    "computeOptimalWindowSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reduce_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeOptimalWindowSize"],
    "computeOutAndReduceShapes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeOutAndReduceShapes"],
    "computeOutShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeOutShape"],
    "computePool2DInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computePool2DInfo"],
    "computePool3DInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computePool3DInfo"],
    "convertConv2DDataFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertConv2DDataFormat"],
    "decodeEinsumEquation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$einsum_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEinsumEquation"],
    "eitherStridesOrDilationsAreOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eitherStridesOrDilationsAreOne"],
    "expandShapeToKeepDim",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandShapeToKeepDim"],
    "exponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exponent"],
    "exponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exponents"],
    "fromStringArrayToUint8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromStringArrayToUint8"],
    "fromUint8ToStringArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromUint8ToStringArray"],
    "getAxesPermutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxesPermutation"],
    "getBroadcastDims",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBroadcastDims"],
    "getComplexWithIndex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComplexWithIndex"],
    "getEinsumComputePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$einsum_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEinsumComputePath"],
    "getEinsumPermutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$einsum_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEinsumPermutation"],
    "getFusedBiasGradient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedBiasGradient"],
    "getFusedDyActivation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedDyActivation"],
    "getImageCenter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$rotate_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageCenter"],
    "getInnerMostAxes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInnerMostAxes"],
    "getPermuted",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$array_ops_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPermuted"],
    "getRaggedRank",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ragged_to_dense_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRaggedRank"],
    "getReductionAxes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReductionAxes"],
    "getReshaped",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$array_ops_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReshaped"],
    "getReshapedPermuted",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$array_ops_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReshapedPermuted"],
    "getRowPartitionTypesHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ragged_to_dense_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRowPartitionTypesHelper"],
    "getSliceBeginCoords",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$array_ops_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliceBeginCoords"],
    "getSliceSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$array_ops_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSliceSize"],
    "getSparseFillEmptyRowsIndicesDenseShapeMismatch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_fill_empty_rows_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseFillEmptyRowsIndicesDenseShapeMismatch"],
    "getSparseFillEmptyRowsNegativeIndexErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_fill_empty_rows_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseFillEmptyRowsNegativeIndexErrorMessage"],
    "getSparseFillEmptyRowsOutOfRangeIndexErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_fill_empty_rows_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseFillEmptyRowsOutOfRangeIndexErrorMessage"],
    "getSparseReshapeEmptyTensorZeroOutputDimErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_reshape_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseReshapeEmptyTensorZeroOutputDimErrorMessage"],
    "getSparseReshapeInputOutputMismatchErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_reshape_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseReshapeInputOutputMismatchErrorMessage"],
    "getSparseReshapeInputOutputMultipleErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_reshape_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseReshapeInputOutputMultipleErrorMessage"],
    "getSparseReshapeMultipleNegativeOneOutputDimErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_reshape_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseReshapeMultipleNegativeOneOutputDimErrorMessage"],
    "getSparseReshapeNegativeOutputDimErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_reshape_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseReshapeNegativeOutputDimErrorMessage"],
    "getSparseSegmentReductionIndicesOutOfRangeErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_segment_reduction_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseSegmentReductionIndicesOutOfRangeErrorMessage"],
    "getSparseSegmentReductionNegativeSegmentIdsErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_segment_reduction_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseSegmentReductionNegativeSegmentIdsErrorMessage"],
    "getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_segment_reduction_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage"],
    "getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_segment_reduction_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage"],
    "getUndoAxesPermutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUndoAxesPermutation"],
    "isIdentityPermutation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$einsum_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIdentityPermutation"],
    "log",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["log"],
    "mergeRealAndImagArrays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRealAndImagArrays"],
    "prepareAndValidate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$gather_nd_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareAndValidate"],
    "prepareSplitSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareSplitSize"],
    "segment_util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$segment_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "shouldFuse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldFuse"],
    "slice_util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "splitRealAndImagArrays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitRealAndImagArrays"],
    "stridesOrDilationsArePositive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stridesOrDilationsArePositive"],
    "tupleValuesAreOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tupleValuesAreOne"],
    "upcastType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upcastType"],
    "validateDefaultValueShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ragged_to_dense_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateDefaultValueShape"],
    "validateInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scatter_nd_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateInput"],
    "validateUpdateShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scatter_nd_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateUpdateShape"],
    "warn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$axis_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/axis_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/concat_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/conv_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused_types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$ragged_to_dense_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/ragged_to_dense_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reduce_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reduce_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$slice_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/slice_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$rotate_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/rotate_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$array_ops_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/array_ops_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$gather_nd_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/gather_nd_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scatter_nd_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/scatter_nd_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$selu_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/selu_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$erf_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/erf_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$complex_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/complex_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$einsum_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/einsum_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$split_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/split_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_fill_empty_rows_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_reshape_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$sparse$2f$sparse_segment_reduction_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_reduction_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$segment_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/segment_util.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript) <export * as backend_util>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backend_util",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$backend_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/backend_util.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ /**
 * Inserts a value into a sorted array. This method allows duplicate, meaning it
 * allows inserting duplicate value, in which case, the element will be inserted
 * at the lowest index of the value.
 * @param arr The array to modify.
 * @param element The element to insert.
 * @param comparator Optional. If no comparator is specified, elements are
 * compared using array_util.defaultComparator, which is suitable for Strings
 * and Numbers in ascending arrays. If the array contains multiple instances of
 * the target value, the left-most instance will be returned. To provide a
 * comparator, it should take 2 arguments to compare and return a negative,
 * zero, or a positive number.
 */ __turbopack_context__.s([
    "binaryInsert",
    ()=>binaryInsert,
    "binarySearch",
    ()=>binarySearch
]);
function binaryInsert(arr, element, comparator) {
    const index = binarySearch(arr, element, comparator);
    const insertionPoint = index < 0 ? -(index + 1) : index;
    arr.splice(insertionPoint, 0, element);
}
function binarySearch(arr, target, comparator) {
    return binarySearch_(arr, target, comparator || defaultComparator);
}
/**
 * Compares its two arguments for order.
 * @param a The first element to be compared.
 * @param b The second element to be compared.
 * @return A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 */ function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
function binarySearch_(arr, target, comparator) {
    let left = 0;
    let right = arr.length;
    let middle = 0;
    let found = false;
    while(left < right){
        middle = left + (right - left >>> 1);
        const compareResult = comparator(target, arr[middle]);
        if (compareResult > 0) {
            left = middle + 1;
        } else {
            right = middle;
            // If compareResult is 0, the value is found. We record it is found,
            // and then keep looking because there may be duplicate.
            found = !compareResult;
        }
    }
    return found ? left : -left - 1;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9iYWNrZW5kcy9ub25fbWF4X3N1cHByZXNzaW9uX3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUg7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FDeEIsR0FBUSxFQUFFLE9BQVUsRUFBRSxVQUFtQztJQUMzRCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRCxNQUFNLGNBQWMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQ3hCLEdBQVEsRUFBRSxNQUFTLEVBQUUsVUFBbUM7SUFDMUQsT0FBTyxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLElBQUksaUJBQWlCLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBSSxDQUFJLEVBQUUsQ0FBSTtJQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQ2xCLEdBQVEsRUFBRSxNQUFTLEVBQUUsVUFBa0M7SUFDekQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN2QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEIsT0FBTyxJQUFJLEdBQUcsS0FBSyxFQUFFO1FBQ25CLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0wsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNmLG9FQUFvRTtZQUNwRSx3REFBd0Q7WUFDeEQsS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDO1NBQ3hCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyoqXG4gKiBJbnNlcnRzIGEgdmFsdWUgaW50byBhIHNvcnRlZCBhcnJheS4gVGhpcyBtZXRob2QgYWxsb3dzIGR1cGxpY2F0ZSwgbWVhbmluZyBpdFxuICogYWxsb3dzIGluc2VydGluZyBkdXBsaWNhdGUgdmFsdWUsIGluIHdoaWNoIGNhc2UsIHRoZSBlbGVtZW50IHdpbGwgYmUgaW5zZXJ0ZWRcbiAqIGF0IHRoZSBsb3dlc3QgaW5kZXggb2YgdGhlIHZhbHVlLlxuICogQHBhcmFtIGFyciBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gaW5zZXJ0LlxuICogQHBhcmFtIGNvbXBhcmF0b3IgT3B0aW9uYWwuIElmIG5vIGNvbXBhcmF0b3IgaXMgc3BlY2lmaWVkLCBlbGVtZW50cyBhcmVcbiAqIGNvbXBhcmVkIHVzaW5nIGFycmF5X3V0aWwuZGVmYXVsdENvbXBhcmF0b3IsIHdoaWNoIGlzIHN1aXRhYmxlIGZvciBTdHJpbmdzXG4gKiBhbmQgTnVtYmVycyBpbiBhc2NlbmRpbmcgYXJyYXlzLiBJZiB0aGUgYXJyYXkgY29udGFpbnMgbXVsdGlwbGUgaW5zdGFuY2VzIG9mXG4gKiB0aGUgdGFyZ2V0IHZhbHVlLCB0aGUgbGVmdC1tb3N0IGluc3RhbmNlIHdpbGwgYmUgcmV0dXJuZWQuIFRvIHByb3ZpZGUgYVxuICogY29tcGFyYXRvciwgaXQgc2hvdWxkIHRha2UgMiBhcmd1bWVudHMgdG8gY29tcGFyZSBhbmQgcmV0dXJuIGEgbmVnYXRpdmUsXG4gKiB6ZXJvLCBvciBhIHBvc2l0aXZlIG51bWJlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeUluc2VydDxUPihcbiAgICBhcnI6IFRbXSwgZWxlbWVudDogVCwgY29tcGFyYXRvcj86IChhOiBULCBiOiBUKSA9PiBudW1iZXIpIHtcbiAgY29uc3QgaW5kZXggPSBiaW5hcnlTZWFyY2goYXJyLCBlbGVtZW50LCBjb21wYXJhdG9yKTtcbiAgY29uc3QgaW5zZXJ0aW9uUG9pbnQgPSBpbmRleCA8IDAgPyAtKGluZGV4ICsgMSkgOiBpbmRleDtcbiAgYXJyLnNwbGljZShpbnNlcnRpb25Qb2ludCwgMCwgZWxlbWVudCk7XG59XG5cbi8qKlxuICogU2VhcmNoZXMgdGhlIGFycmF5IGZvciB0aGUgdGFyZ2V0IHVzaW5nIGJpbmFyeSBzZWFyY2gsIHJldHVybnMgdGhlIGluZGV4XG4gKiBvZiB0aGUgZm91bmQgZWxlbWVudCwgb3IgcG9zaXRpb24gdG8gaW5zZXJ0IGlmIGVsZW1lbnQgbm90IGZvdW5kLiBJZiBub1xuICogY29tcGFyYXRvciBpcyBzcGVjaWZpZWQsIGVsZW1lbnRzIGFyZSBjb21wYXJlZCB1c2luZyBhcnJheV9cbiAqIHV0aWwuZGVmYXVsdENvbXBhcmF0b3IsIHdoaWNoIGlzIHN1aXRhYmxlIGZvciBTdHJpbmdzIGFuZCBOdW1iZXJzIGluXG4gKiBhc2NlbmRpbmcgYXJyYXlzLiBJZiB0aGUgYXJyYXkgY29udGFpbnMgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHRoZSB0YXJnZXRcbiAqIHZhbHVlLCB0aGUgbGVmdC1tb3N0IGluc3RhbmNlIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBAcGFyYW0gYXJyIFRoZSBhcnJheSB0byBiZSBzZWFyY2hlZCBpbi5cbiAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCB0byBiZSBzZWFyY2hlZCBmb3IuXG4gKiBAcGFyYW0gY29tcGFyYXRvciBTaG91bGQgdGFrZSAyIGFyZ3VtZW50cyB0byBjb21wYXJlIGFuZCByZXR1cm4gYSBuZWdhdGl2ZSxcbiAqICAgIHplcm8sIG9yIGEgcG9zaXRpdmUgbnVtYmVyLlxuICogQHJldHVybiBMb3dlc3QgaW5kZXggb2YgdGhlIHRhcmdldCB2YWx1ZSBpZiBmb3VuZCwgb3RoZXJ3aXNlIHRoZSBpbnNlcnRpb25cbiAqICAgIHBvaW50IHdoZXJlIHRoZSB0YXJnZXQgc2hvdWxkIGJlIGluc2VydGVkLCBpbiB0aGUgZm9ybSBvZlxuICogICAgKC1pbnNlcnRpb25Qb2ludCAtIDEpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5U2VhcmNoPFQ+KFxuICAgIGFycjogVFtdLCB0YXJnZXQ6IFQsIGNvbXBhcmF0b3I/OiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKSB7XG4gIHJldHVybiBiaW5hcnlTZWFyY2hfKGFyciwgdGFyZ2V0LCBjb21wYXJhdG9yIHx8IGRlZmF1bHRDb21wYXJhdG9yKTtcbn1cblxuLyoqXG4gKiBDb21wYXJlcyBpdHMgdHdvIGFyZ3VtZW50cyBmb3Igb3JkZXIuXG4gKiBAcGFyYW0gYSBUaGUgZmlyc3QgZWxlbWVudCB0byBiZSBjb21wYXJlZC5cbiAqIEBwYXJhbSBiIFRoZSBzZWNvbmQgZWxlbWVudCB0byBiZSBjb21wYXJlZC5cbiAqIEByZXR1cm4gQSBuZWdhdGl2ZSBudW1iZXIsIHplcm8sIG9yIGEgcG9zaXRpdmUgbnVtYmVyIGFzIHRoZSBmaXJzdFxuICogICAgIGFyZ3VtZW50IGlzIGxlc3MgdGhhbiwgZXF1YWwgdG8sIG9yIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kLlxuICovXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyYXRvcjxUPihhOiBULCBiOiBUKTogbnVtYmVyIHtcbiAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xufVxuXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2hfPFQ+KFxuICAgIGFycjogVFtdLCB0YXJnZXQ6IFQsIGNvbXBhcmF0b3I6IChhOiBULCBiOiBUKSA9PiBudW1iZXIpIHtcbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgcmlnaHQgPSBhcnIubGVuZ3RoO1xuICBsZXQgbWlkZGxlID0gMDtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcbiAgICBtaWRkbGUgPSBsZWZ0ICsgKChyaWdodCAtIGxlZnQpID4+PiAxKTtcbiAgICBjb25zdCBjb21wYXJlUmVzdWx0ID0gY29tcGFyYXRvcih0YXJnZXQsIGFyclttaWRkbGVdKTtcbiAgICBpZiAoY29tcGFyZVJlc3VsdCA+IDApIHtcbiAgICAgIGxlZnQgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByaWdodCA9IG1pZGRsZTtcbiAgICAgIC8vIElmIGNvbXBhcmVSZXN1bHQgaXMgMCwgdGhlIHZhbHVlIGlzIGZvdW5kLiBXZSByZWNvcmQgaXQgaXMgZm91bmQsXG4gICAgICAvLyBhbmQgdGhlbiBrZWVwIGxvb2tpbmcgYmVjYXVzZSB0aGVyZSBtYXkgYmUgZHVwbGljYXRlLlxuICAgICAgZm91bmQgPSAhY29tcGFyZVJlc3VsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQgPyBsZWZ0IDogLWxlZnQgLSAxO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "nonMaxSuppressionV3Impl",
    ()=>nonMaxSuppressionV3Impl,
    "nonMaxSuppressionV4Impl",
    ()=>nonMaxSuppressionV4Impl,
    "nonMaxSuppressionV5Impl",
    ()=>nonMaxSuppressionV5Impl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js [app-client] (ecmascript)");
;
function nonMaxSuppressionV3Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
    return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, 0 /* softNmsSigma */ );
}
function nonMaxSuppressionV4Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, padToMaxOutputSize) {
    return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, 0 /* softNmsSigma */ , false, padToMaxOutputSize /* padToMaxOutputSize */ , true);
}
function nonMaxSuppressionV5Impl(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma) {
    return nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, true);
}
function nonMaxSuppressionImpl_(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold, softNmsSigma, returnScoresTensor = false, padToMaxOutputSize = false, returnValidOutputs = false) {
    // The list is sorted in ascending order, so that we can always pop the
    // candidate with the largest score in O(1) time.
    const candidates = [];
    for(let i = 0; i < scores.length; i++){
        if (scores[i] > scoreThreshold) {
            candidates.push({
                score: scores[i],
                boxIndex: i,
                suppressBeginIndex: 0
            });
        }
    }
    candidates.sort(ascendingComparator);
    // If softNmsSigma is 0, the outcome of this algorithm is exactly same as
    // before.
    const scale = softNmsSigma > 0 ? -0.5 / softNmsSigma : 0.0;
    const selectedIndices = [];
    const selectedScores = [];
    while(selectedIndices.length < maxOutputSize && candidates.length > 0){
        const candidate = candidates.pop();
        const { score: originalScore, boxIndex, suppressBeginIndex } = candidate;
        if (originalScore < scoreThreshold) {
            break;
        }
        // Overlapping boxes are likely to have similar scores, therefore we
        // iterate through the previously selected boxes backwards in order to
        // see if candidate's score should be suppressed. We use
        // suppressBeginIndex to track and ensure a candidate can be suppressed
        // by a selected box no more than once. Also, if the overlap exceeds
        // iouThreshold, we simply ignore the candidate.
        let ignoreCandidate = false;
        for(let j = selectedIndices.length - 1; j >= suppressBeginIndex; --j){
            const iou = intersectionOverUnion(boxes, boxIndex, selectedIndices[j]);
            if (iou >= iouThreshold) {
                ignoreCandidate = true;
                break;
            }
            candidate.score = candidate.score * suppressWeight(iouThreshold, scale, iou);
            if (candidate.score <= scoreThreshold) {
                break;
            }
        }
        // At this point, if `candidate.score` has not dropped below
        // `scoreThreshold`, then we know that we went through all of the
        // previous selections and can safely update `suppressBeginIndex` to the
        // end of the selected array. Then we can re-insert the candidate with
        // the updated score and suppressBeginIndex back in the candidate list.
        // If on the other hand, `candidate.score` has dropped below the score
        // threshold, we will not add it back to the candidates list.
        candidate.suppressBeginIndex = selectedIndices.length;
        if (!ignoreCandidate) {
            // Candidate has passed all the tests, and is not suppressed, so
            // select the candidate.
            if (candidate.score === originalScore) {
                selectedIndices.push(boxIndex);
                selectedScores.push(candidate.score);
            } else if (candidate.score > scoreThreshold) {
                // Candidate's score is suppressed but is still high enough to be
                // considered, so add back to the candidates list.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binaryInsert"])(candidates, candidate, ascendingComparator);
            }
        }
    }
    // NonMaxSuppressionV4 feature: padding output to maxOutputSize.
    const validOutputs = selectedIndices.length;
    const elemsToPad = maxOutputSize - validOutputs;
    if (padToMaxOutputSize && elemsToPad > 0) {
        selectedIndices.push(...new Array(elemsToPad).fill(0));
        selectedScores.push(...new Array(elemsToPad).fill(0.0));
    }
    const result = {
        selectedIndices
    };
    if (returnScoresTensor) {
        result['selectedScores'] = selectedScores;
    }
    if (returnValidOutputs) {
        result['validOutputs'] = validOutputs;
    }
    return result;
}
function intersectionOverUnion(boxes, i, j) {
    const iCoord = boxes.subarray(i * 4, i * 4 + 4);
    const jCoord = boxes.subarray(j * 4, j * 4 + 4);
    const yminI = Math.min(iCoord[0], iCoord[2]);
    const xminI = Math.min(iCoord[1], iCoord[3]);
    const ymaxI = Math.max(iCoord[0], iCoord[2]);
    const xmaxI = Math.max(iCoord[1], iCoord[3]);
    const yminJ = Math.min(jCoord[0], jCoord[2]);
    const xminJ = Math.min(jCoord[1], jCoord[3]);
    const ymaxJ = Math.max(jCoord[0], jCoord[2]);
    const xmaxJ = Math.max(jCoord[1], jCoord[3]);
    const areaI = (ymaxI - yminI) * (xmaxI - xminI);
    const areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
    if (areaI <= 0 || areaJ <= 0) {
        return 0.0;
    }
    const intersectionYmin = Math.max(yminI, yminJ);
    const intersectionXmin = Math.max(xminI, xminJ);
    const intersectionYmax = Math.min(ymaxI, ymaxJ);
    const intersectionXmax = Math.min(xmaxI, xmaxJ);
    const intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0.0) * Math.max(intersectionXmax - intersectionXmin, 0.0);
    return intersectionArea / (areaI + areaJ - intersectionArea);
}
// A Gaussian penalty function, this method always returns values in [0, 1].
// The weight is a function of similarity, the more overlap two boxes are, the
// smaller the weight is,meaning highly overlapping boxes will be significantly
// penalized. On the other hand, a non-overlapping box will not be penalized.
function suppressWeight(iouThreshold, scale, iou) {
    const weight = Math.exp(scale * iou * iou);
    return iou <= iouThreshold ? weight : 0.0;
}
function ascendingComparator(c1, c2) {
    // For objects with same scores, we make the object with the larger index go
    // first. In an array that pops from the end, this means that the object with
    // the smaller index will be popped first. This ensures the same output as
    // the TensorFlow python version.
    return c1.score - c2.score || c1.score === c2.score && c2.boxIndex - c1.boxIndex;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uX21heF9zdXBwcmVzc2lvbl9pbXBsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9iYWNrZW5kcy9ub25fbWF4X3N1cHByZXNzaW9uX2ltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBR0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBaUJ4RCxNQUFNLFVBQVUsdUJBQXVCLENBQ25DLEtBQWlCLEVBQUUsTUFBa0IsRUFBRSxhQUFxQixFQUM1RCxZQUFvQixFQUFFLGNBQXNCO0lBQzlDLE9BQU8sc0JBQXNCLENBQ3pCLEtBQUssRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQzFELENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQ25DLEtBQWlCLEVBQUUsTUFBa0IsRUFBRSxhQUFxQixFQUM1RCxZQUFvQixFQUFFLGNBQXNCLEVBQzVDLGtCQUEyQjtJQUM3QixPQUFPLHNCQUFzQixDQUN6QixLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUMxRCxDQUFDLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QixFQUNwRCxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJO0lBQ2pELHdCQUF3QixFQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FDbkMsS0FBaUIsRUFBRSxNQUFrQixFQUFFLGFBQXFCLEVBQzVELFlBQW9CLEVBQUUsY0FBc0IsRUFDNUMsWUFBb0I7SUFDdEIsT0FBTyxzQkFBc0IsQ0FDekIsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQ3hFLElBQUksQ0FBQyx3QkFBd0Is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QUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEQsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixFQUFFLEdBQUcsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLGdCQUFnQixDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVELDRFQUE0RTtBQUM1RSw4RUFBOEU7QUFDOUUsK0VBQStFO0FBQy9FLDZFQUE2RTtBQUM3RSxTQUFTLGNBQWMsQ0FBQyxZQUFvQixFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQ3RFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMzQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzVDLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEVBQWEsRUFBRSxFQUFhO0lBQ3ZELDRFQUE0RTtJQUM1RSw2RUFBNkU7SUFDN0UsMEVBQTBFO0lBQzFFLGlDQUFpQztJQUNqQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtUeXBlZEFycmF5fSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2JpbmFyeUluc2VydH0gZnJvbSAnLi9ub25fbWF4X3N1cHByZXNzaW9uX3V0aWwnO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBOb25NYXhTdXBwcmVzc2lvbiBrZXJuZWwgc2hhcmVkIGJldHdlZW4gd2ViZ2wgYW5kIGNwdS5cbiAqL1xuaW50ZXJmYWNlIENhbmRpZGF0ZSB7XG4gIHNjb3JlOiBudW1iZXI7XG4gIGJveEluZGV4OiBudW1iZXI7XG4gIHN1cHByZXNzQmVnaW5JbmRleDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTm9uTWF4U3VwcHJlc3Npb25SZXN1bHQge1xuICBzZWxlY3RlZEluZGljZXM6IG51bWJlcltdO1xuICBzZWxlY3RlZFNjb3Jlcz86IG51bWJlcltdO1xuICB2YWxpZE91dHB1dHM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub25NYXhTdXBwcmVzc2lvblYzSW1wbChcbiAgICBib3hlczogVHlwZWRBcnJheSwgc2NvcmVzOiBUeXBlZEFycmF5LCBtYXhPdXRwdXRTaXplOiBudW1iZXIsXG4gICAgaW91VGhyZXNob2xkOiBudW1iZXIsIHNjb3JlVGhyZXNob2xkOiBudW1iZXIpOiBOb25NYXhTdXBwcmVzc2lvblJlc3VsdCB7XG4gIHJldHVybiBub25NYXhTdXBwcmVzc2lvbkltcGxfKFxuICAgICAgYm94ZXMsIHNjb3JlcywgbWF4T3V0cHV0U2l6ZSwgaW91VGhyZXNob2xkLCBzY29yZVRocmVzaG9sZCxcbiAgICAgIDAgLyogc29mdE5tc1NpZ21hICovKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbk1heFN1cHByZXNzaW9uVjRJbXBsKFxuICAgIGJveGVzOiBUeXBlZEFycmF5LCBzY29yZXM6IFR5cGVkQXJyYXksIG1heE91dHB1dFNpemU6IG51bWJlcixcbiAgICBpb3VUaHJlc2hvbGQ6IG51bWJlciwgc2NvcmVUaHJlc2hvbGQ6IG51bWJlcixcbiAgICBwYWRUb01heE91dHB1dFNpemU6IGJvb2xlYW4pOiBOb25NYXhTdXBwcmVzc2lvblJlc3VsdCB7XG4gIHJldHVybiBub25NYXhTdXBwcmVzc2lvbkltcGxfKFxuICAgICAgYm94ZXMsIHNjb3JlcywgbWF4T3V0cHV0U2l6ZSwgaW91VGhyZXNob2xkLCBzY29yZVRocmVzaG9sZCxcbiAgICAgIDAgLyogc29mdE5tc1NpZ21hICovLCBmYWxzZSAvKiByZXR1cm5TY29yZXNUZW5zb3IgKi8sXG4gICAgICBwYWRUb01heE91dHB1dFNpemUgLyogcGFkVG9NYXhPdXRwdXRTaXplICovLCB0cnVlXG4gICAgICAvKiByZXR1cm5WYWxpZE91dHB1dHMgKi8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9uTWF4U3VwcHJlc3Npb25WNUltcGwoXG4gICAgYm94ZXM6IFR5cGVkQXJyYXksIHNjb3JlczogVHlwZWRBcnJheSwgbWF4T3V0cHV0U2l6ZTogbnVtYmVyLFxuICAgIGlvdVRocmVzaG9sZDogbnVtYmVyLCBzY29yZVRocmVzaG9sZDogbnVtYmVyLFxuICAgIHNvZnRObXNTaWdtYTogbnVtYmVyKTogTm9uTWF4U3VwcHJlc3Npb25SZXN1bHQge1xuICByZXR1cm4gbm9uTWF4U3VwcHJlc3Npb25JbXBsXyhcbiAgICAgIGJveGVzLCBzY29yZXMsIG1heE91dHB1dFNpemUsIGlvdVRocmVzaG9sZCwgc2NvcmVUaHJlc2hvbGQsIHNvZnRObXNTaWdtYSxcbiAgICAgIHRydWUgLyogcmV0dXJuU2NvcmVzVGVuc29yICovKTtcbn1cblxuZnVuY3Rpb24gbm9uTWF4U3VwcHJlc3Npb25JbXBsXyhcbiAgICBib3hlczogVHlwZWRBcnJheSwgc2NvcmVzOiBUeXBlZEFycmF5LCBtYXhPdXRwdXRTaXplOiBudW1iZXIsXG4gICAgaW91VGhyZXNob2xkOiBudW1iZXIsIHNjb3JlVGhyZXNob2xkOiBudW1iZXIsIHNvZnRObXNTaWdtYTogbnVtYmVyLFxuICAgIHJldHVyblNjb3Jlc1RlbnNvciA9IGZhbHNlLCBwYWRUb01heE91dHB1dFNpemUgPSBmYWxzZSxcbiAgICByZXR1cm5WYWxpZE91dHB1dHMgPSBmYWxzZSk6IE5vbk1heFN1cHByZXNzaW9uUmVzdWx0IHtcbiAgLy8gVGhlIGxpc3QgaXMgc29ydGVkIGluIGFzY2VuZGluZyBvcmRlciwgc28gdGhhdCB3ZSBjYW4gYWx3YXlzIHBvcCB0aGVcbiAgLy8gY2FuZGlkYXRlIHdpdGggdGhlIGxhcmdlc3Qgc2NvcmUgaW4gTygxKSB0aW1lLlxuICBjb25zdCBjYW5kaWRhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29yZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2NvcmVzW2ldID4gc2NvcmVUaHJlc2hvbGQpIHtcbiAgICAgIGNhbmRpZGF0ZXMucHVzaCh7c2NvcmU6IHNjb3Jlc1tpXSwgYm94SW5kZXg6IGksIHN1cHByZXNzQmVnaW5JbmRleDogMH0pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmRpZGF0ZXMuc29ydChhc2NlbmRpbmdDb21wYXJhdG9yKTtcblxuICAvLyBJZiBzb2Z0Tm1zU2lnbWEgaXMgMCwgdGhlIG91dGNvbWUgb2YgdGhpcyBhbGdvcml0aG0gaXMgZXhhY3RseSBzYW1lIGFzXG4gIC8vIGJlZm9yZS5cbiAgY29uc3Qgc2NhbGUgPSBzb2Z0Tm1zU2lnbWEgPiAwID8gKC0wLjUgLyBzb2Z0Tm1zU2lnbWEpIDogMC4wO1xuXG4gIGNvbnN0IHNlbGVjdGVkSW5kaWNlczogbnVtYmVyW10gPSBbXTtcbiAgY29uc3Qgc2VsZWN0ZWRTY29yZXM6IG51bWJlcltdID0gW107XG5cbiAgd2hpbGUgKHNlbGVjdGVkSW5kaWNlcy5sZW5ndGggPCBtYXhPdXRwdXRTaXplICYmIGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZXMucG9wKCk7XG4gICAgY29uc3Qge3Njb3JlOiBvcmlnaW5hbFNjb3JlLCBib3hJbmRleCwgc3VwcHJlc3NCZWdpbkluZGV4fSA9IGNhbmRpZGF0ZTtcblxuICAgIGlmIChvcmlnaW5hbFNjb3JlIDwgc2NvcmVUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIE92ZXJsYXBwaW5nIGJveGVzIGFyZSBsaWtlbHkgdG8gaGF2ZSBzaW1pbGFyIHNjb3JlcywgdGhlcmVmb3JlIHdlXG4gICAgLy8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGJveGVzIGJhY2t3YXJkcyBpbiBvcmRlciB0b1xuICAgIC8vIHNlZSBpZiBjYW5kaWRhdGUncyBzY29yZSBzaG91bGQgYmUgc3VwcHJlc3NlZC4gV2UgdXNlXG4gICAgLy8gc3VwcHJlc3NCZWdpbkluZGV4IHRvIHRyYWNrIGFuZCBlbnN1cmUgYSBjYW5kaWRhdGUgY2FuIGJlIHN1cHByZXNzZWRcbiAgICAvLyBieSBhIHNlbGVjdGVkIGJveCBubyBtb3JlIHRoYW4gb25jZS4gQWxzbywgaWYgdGhlIG92ZXJsYXAgZXhjZWVkc1xuICAgIC8vIGlvdVRocmVzaG9sZCwgd2Ugc2ltcGx5IGlnbm9yZSB0aGUgY2FuZGlkYXRlLlxuICAgIGxldCBpZ25vcmVDYW5kaWRhdGUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBqID0gc2VsZWN0ZWRJbmRpY2VzLmxlbmd0aCAtIDE7IGogPj0gc3VwcHJlc3NCZWdpbkluZGV4OyAtLWopIHtcbiAgICAgIGNvbnN0IGlvdSA9IGludGVyc2VjdGlvbk92ZXJVbmlvbihib3hlcywgYm94SW5kZXgsIHNlbGVjdGVkSW5kaWNlc1tqXSk7XG5cbiAgICAgIGlmIChpb3UgPj0gaW91VGhyZXNob2xkKSB7XG4gICAgICAgIGlnbm9yZUNhbmRpZGF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYW5kaWRhdGUuc2NvcmUgPVxuICAgICAgICAgIGNhbmRpZGF0ZS5zY29yZSAqIHN1cHByZXNzV2VpZ2h0KGlvdVRocmVzaG9sZCwgc2NhbGUsIGlvdSk7XG5cbiAgICAgIGlmIChjYW5kaWRhdGUuc2NvcmUgPD0gc2NvcmVUaHJlc2hvbGQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXQgdGhpcyBwb2ludCwgaWYgYGNhbmRpZGF0ZS5zY29yZWAgaGFzIG5vdCBkcm9wcGVkIGJlbG93XG4gICAgLy8gYHNjb3JlVGhyZXNob2xkYCwgdGhlbiB3ZSBrbm93IHRoYXQgd2Ugd2VudCB0aHJvdWdoIGFsbCBvZiB0aGVcbiAgICAvLyBwcmV2aW91cyBzZWxlY3Rpb25zIGFuZCBjYW4gc2FmZWx5IHVwZGF0ZSBgc3VwcHJlc3NCZWdpbkluZGV4YCB0byB0aGVcbiAgICAvLyBlbmQgb2YgdGhlIHNlbGVjdGVkIGFycmF5LiBUaGVuIHdlIGNhbiByZS1pbnNlcnQgdGhlIGNhbmRpZGF0ZSB3aXRoXG4gICAgLy8gdGhlIHVwZGF0ZWQgc2NvcmUgYW5kIHN1cHByZXNzQmVnaW5JbmRleCBiYWNrIGluIHRoZSBjYW5kaWRhdGUgbGlzdC5cbiAgICAvLyBJZiBvbiB0aGUgb3RoZXIgaGFuZCwgYGNhbmRpZGF0ZS5zY29yZWAgaGFzIGRyb3BwZWQgYmVsb3cgdGhlIHNjb3JlXG4gICAgLy8gdGhyZXNob2xkLCB3ZSB3aWxsIG5vdCBhZGQgaXQgYmFjayB0byB0aGUgY2FuZGlkYXRlcyBsaXN0LlxuICAgIGNhbmRpZGF0ZS5zdXBwcmVzc0JlZ2luSW5kZXggPSBzZWxlY3RlZEluZGljZXMubGVuZ3RoO1xuXG4gICAgaWYgKCFpZ25vcmVDYW5kaWRhdGUpIHtcbiAgICAgIC8vIENhbmRpZGF0ZSBoYXMgcGFzc2VkIGFsbCB0aGUgdGVzdHMsIGFuZCBpcyBub3Qgc3VwcHJlc3NlZCwgc29cbiAgICAgIC8vIHNlbGVjdCB0aGUgY2FuZGlkYXRlLlxuICAgICAgaWYgKGNhbmRpZGF0ZS5zY29yZSA9PT0gb3JpZ2luYWxTY29yZSkge1xuICAgICAgICBzZWxlY3RlZEluZGljZXMucHVzaChib3hJbmRleCk7XG4gICAgICAgIHNlbGVjdGVkU2NvcmVzLnB1c2goY2FuZGlkYXRlLnNjb3JlKTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuZGlkYXRlLnNjb3JlID4gc2NvcmVUaHJlc2hvbGQpIHtcbiAgICAgICAgLy8gQ2FuZGlkYXRlJ3Mgc2NvcmUgaXMgc3VwcHJlc3NlZCBidXQgaXMgc3RpbGwgaGlnaCBlbm91Z2ggdG8gYmVcbiAgICAgICAgLy8gY29uc2lkZXJlZCwgc28gYWRkIGJhY2sgdG8gdGhlIGNhbmRpZGF0ZXMgbGlzdC5cbiAgICAgICAgYmluYXJ5SW5zZXJ0KGNhbmRpZGF0ZXMsIGNhbmRpZGF0ZSwgYXNjZW5kaW5nQ29tcGFyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTm9uTWF4U3VwcHJlc3Npb25WNCBmZWF0dXJlOiBwYWRkaW5nIG91dHB1dCB0byBtYXhPdXRwdXRTaXplLlxuICBjb25zdCB2YWxpZE91dHB1dHMgPSBzZWxlY3RlZEluZGljZXMubGVuZ3RoO1xuICBjb25zdCBlbGVtc1RvUGFkID0gbWF4T3V0cHV0U2l6ZSAtIHZhbGlkT3V0cHV0cztcblxuICBpZiAocGFkVG9NYXhPdXRwdXRTaXplICYmIGVsZW1zVG9QYWQgPiAwKSB7XG4gICAgc2VsZWN0ZWRJbmRpY2VzLnB1c2goLi4ubmV3IEFycmF5KGVsZW1zVG9QYWQpLmZpbGwoMCkpO1xuICAgIHNlbGVjdGVkU2NvcmVzLnB1c2goLi4ubmV3IEFycmF5KGVsZW1zVG9QYWQpLmZpbGwoMC4wKSk7XG4gIH1cblxuICBjb25zdCByZXN1bHQ6IE5vbk1heFN1cHByZXNzaW9uUmVzdWx0ID0ge3NlbGVjdGVkSW5kaWNlc307XG5cbiAgaWYgKHJldHVyblNjb3Jlc1RlbnNvcikge1xuICAgIHJlc3VsdFsnc2VsZWN0ZWRTY29yZXMnXSA9IHNlbGVjdGVkU2NvcmVzO1xuICB9XG5cbiAgaWYgKHJldHVyblZhbGlkT3V0cHV0cykge1xuICAgIHJlc3VsdFsndmFsaWRPdXRwdXRzJ10gPSB2YWxpZE91dHB1dHM7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb25PdmVyVW5pb24oYm94ZXM6IFR5cGVkQXJyYXksIGk6IG51bWJlciwgajogbnVtYmVyKSB7XG4gIGNvbnN0IGlDb29yZCA9IGJveGVzLnN1YmFycmF5KGkgKiA0LCBpICogNCArIDQpO1xuICBjb25zdCBqQ29vcmQgPSBib3hlcy5zdWJhcnJheShqICogNCwgaiAqIDQgKyA0KTtcbiAgY29uc3QgeW1pbkkgPSBNYXRoLm1pbihpQ29vcmRbMF0sIGlDb29yZFsyXSk7XG4gIGNvbnN0IHhtaW5JID0gTWF0aC5taW4oaUNvb3JkWzFdLCBpQ29vcmRbM10pO1xuICBjb25zdCB5bWF4SSA9IE1hdGgubWF4KGlDb29yZFswXSwgaUNvb3JkWzJdKTtcbiAgY29uc3QgeG1heEkgPSBNYXRoLm1heChpQ29vcmRbMV0sIGlDb29yZFszXSk7XG4gIGNvbnN0IHltaW5KID0gTWF0aC5taW4oakNvb3JkWzBdLCBqQ29vcmRbMl0pO1xuICBjb25zdCB4bWluSiA9IE1hdGgubWluKGpDb29yZFsxXSwgakNvb3JkWzNdKTtcbiAgY29uc3QgeW1heEogPSBNYXRoLm1heChqQ29vcmRbMF0sIGpDb29yZFsyXSk7XG4gIGNvbnN0IHhtYXhKID0gTWF0aC5tYXgoakNvb3JkWzFdLCBqQ29vcmRbM10pO1xuICBjb25zdCBhcmVhSSA9ICh5bWF4SSAtIHltaW5JKSAqICh4bWF4SSAtIHhtaW5JKTtcbiAgY29uc3QgYXJlYUogPSAoeW1heEogLSB5bWluSikgKiAoeG1heEogLSB4bWluSik7XG4gIGlmIChhcmVhSSA8PSAwIHx8IGFyZWFKIDw9IDApIHtcbiAgICByZXR1cm4gMC4wO1xuICB9XG4gIGNvbnN0IGludGVyc2VjdGlvblltaW4gPSBNYXRoLm1heCh5bWluSSwgeW1pbkopO1xuICBjb25zdCBpbnRlcnNlY3Rpb25YbWluID0gTWF0aC5tYXgoeG1pbkksIHhtaW5KKTtcbiAgY29uc3QgaW50ZXJzZWN0aW9uWW1heCA9IE1hdGgubWluKHltYXhJLCB5bWF4Sik7XG4gIGNvbnN0IGludGVyc2VjdGlvblhtYXggPSBNYXRoLm1pbih4bWF4SSwgeG1heEopO1xuICBjb25zdCBpbnRlcnNlY3Rpb25BcmVhID0gTWF0aC5tYXgoaW50ZXJzZWN0aW9uWW1heCAtIGludGVyc2VjdGlvblltaW4sIDAuMCkgKlxuICAgICAgTWF0aC5tYXgoaW50ZXJzZWN0aW9uWG1heCAtIGludGVyc2VjdGlvblhtaW4sIDAuMCk7XG4gIHJldHVybiBpbnRlcnNlY3Rpb25BcmVhIC8gKGFyZWFJICsgYXJlYUogLSBpbnRlcnNlY3Rpb25BcmVhKTtcbn1cblxuLy8gQSBHYXVzc2lhbiBwZW5hbHR5IGZ1bmN0aW9uLCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyB2YWx1ZXMgaW4gWzAsIDFdLlxuLy8gVGhlIHdlaWdodCBpcyBhIGZ1bmN0aW9uIG9mIHNpbWlsYXJpdHksIHRoZSBtb3JlIG92ZXJsYXAgdHdvIGJveGVzIGFyZSwgdGhlXG4vLyBzbWFsbGVyIHRoZSB3ZWlnaHQgaXMsbWVhbmluZyBoaWdobHkgb3ZlcmxhcHBpbmcgYm94ZXMgd2lsbCBiZSBzaWduaWZpY2FudGx5XG4vLyBwZW5hbGl6ZWQuIE9uIHRoZSBvdGhlciBoYW5kLCBhIG5vbi1vdmVybGFwcGluZyBib3ggd2lsbCBub3QgYmUgcGVuYWxpemVkLlxuZnVuY3Rpb24gc3VwcHJlc3NXZWlnaHQoaW91VGhyZXNob2xkOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIGlvdTogbnVtYmVyKSB7XG4gIGNvbnN0IHdlaWdodCA9IE1hdGguZXhwKHNjYWxlICogaW91ICogaW91KTtcbiAgcmV0dXJuIGlvdSA8PSBpb3VUaHJlc2hvbGQgPyB3ZWlnaHQgOiAwLjA7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ0NvbXBhcmF0b3IoYzE6IENhbmRpZGF0ZSwgYzI6IENhbmRpZGF0ZSkge1xuICAvLyBGb3Igb2JqZWN0cyB3aXRoIHNhbWUgc2NvcmVzLCB3ZSBtYWtlIHRoZSBvYmplY3Qgd2l0aCB0aGUgbGFyZ2VyIGluZGV4IGdvXG4gIC8vIGZpcnN0LiBJbiBhbiBhcnJheSB0aGF0IHBvcHMgZnJvbSB0aGUgZW5kLCB0aGlzIG1lYW5zIHRoYXQgdGhlIG9iamVjdCB3aXRoXG4gIC8vIHRoZSBzbWFsbGVyIGluZGV4IHdpbGwgYmUgcG9wcGVkIGZpcnN0LiBUaGlzIGVuc3VyZXMgdGhlIHNhbWUgb3V0cHV0IGFzXG4gIC8vIHRoZSBUZW5zb3JGbG93IHB5dGhvbiB2ZXJzaW9uLlxuICByZXR1cm4gKGMxLnNjb3JlIC0gYzIuc2NvcmUpIHx8XG4gICAgICAoKGMxLnNjb3JlID09PSBjMi5zY29yZSkgJiYgKGMyLmJveEluZGV4IC0gYzEuYm94SW5kZXgpKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/where_impl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ /** An implementation of the Where kernel shared between cpu and webgl */ __turbopack_context__.s([
    "whereImpl",
    ()=>whereImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/buffer.js [app-client] (ecmascript)");
;
function whereImpl(condShape, condVals) {
    const indices = [];
    for(let i = 0; i < condVals.length; i++){
        if (condVals[i]) {
            indices.push(i);
        }
    }
    const inBuffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])(condShape, 'int32');
    const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buffer"])([
        indices.length,
        condShape.length
    ], 'int32');
    for(let i = 0; i < indices.length; i++){
        const loc = inBuffer.indexToLoc(indices[i]);
        const offset = i * condShape.length;
        out.values.set(loc, offset);
    }
    return out.toTensor();
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hlcmVfaW1wbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvYmFja2VuZHMvd2hlcmVfaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFFSCx5RUFBeUU7QUFFekUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUlyQyxNQUFNLFVBQVUsU0FBUyxDQUFDLFNBQW1CLEVBQUUsUUFBb0I7SUFDakUsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU1QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3QjtJQUNELE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBYyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgV2hlcmUga2VybmVsIHNoYXJlZCBiZXR3ZWVuIGNwdSBhbmQgd2ViZ2wgKi9cblxuaW1wb3J0IHtidWZmZXJ9IGZyb20gJy4uL29wcy9idWZmZXInO1xuaW1wb3J0IHtUZW5zb3IyRH0gZnJvbSAnLi4vdGVuc29yJztcbmltcG9ydCB7VHlwZWRBcnJheX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hlcmVJbXBsKGNvbmRTaGFwZTogbnVtYmVyW10sIGNvbmRWYWxzOiBUeXBlZEFycmF5KTogVGVuc29yMkQge1xuICBjb25zdCBpbmRpY2VzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZFZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY29uZFZhbHNbaV0pIHtcbiAgICAgIGluZGljZXMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbkJ1ZmZlciA9IGJ1ZmZlcihjb25kU2hhcGUsICdpbnQzMicpO1xuXG4gIGNvbnN0IG91dCA9IGJ1ZmZlcihbaW5kaWNlcy5sZW5ndGgsIGNvbmRTaGFwZS5sZW5ndGhdLCAnaW50MzInKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbG9jID0gaW5CdWZmZXIuaW5kZXhUb0xvYyhpbmRpY2VzW2ldKTtcbiAgICBjb25zdCBvZmZzZXQgPSBpICogY29uZFNoYXBlLmxlbmd0aDtcbiAgICBvdXQudmFsdWVzLnNldChsb2MsIG9mZnNldCk7XG4gIH1cbiAgcmV0dXJuIG91dC50b1RlbnNvcigpIGFzIFRlbnNvcjJEO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
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
;
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VybmVsX2ltcGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9iYWNrZW5kcy9rZXJuZWxfaW1wbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDckgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuZXhwb3J0IHtub25NYXhTdXBwcmVzc2lvblYzSW1wbCwgbm9uTWF4U3VwcHJlc3Npb25WNEltcGwsIG5vbk1heFN1cHByZXNzaW9uVjVJbXBsfSBmcm9tICcuL25vbl9tYXhfc3VwcHJlc3Npb25faW1wbCc7XG5leHBvcnQge3doZXJlSW1wbH0gZnJvbSAnLi93aGVyZV9pbXBsJztcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonMaxSuppressionV3Impl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppressionV3Impl"],
    "nonMaxSuppressionV4Impl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppressionV4Impl"],
    "nonMaxSuppressionV5Impl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppressionV5Impl"],
    "whereImpl",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$where_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whereImpl"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$kernel_impls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$non_max_suppression_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$where_impl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/where_impl.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js [app-client] (ecmascript) <export * as kernel_impls>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kernel_impls",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$kernel_impls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$backends$2f$kernel_impls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/backends/kernel_impls.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-core_dist_backends_7f375335._.js.map