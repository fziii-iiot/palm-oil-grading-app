(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused/conv2d.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "conv2d",
    ()=>conv2d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/conv2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d_backprop_filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/conv2d_backprop_filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d_backprop_input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/conv2d_backprop_input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/conv_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
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
 * Computes a 2D convolution over the input x, optionally fused with adding a
 * bias and applying an activation.
 *
 * ```js
 * const inputDepth = 2;
 * const inShape = [2, 2, 2, inputDepth];
 * const outputDepth = 2;
 * const fSize = 1;
 * const pad = 0;
 * const strides = 1;
 *
 * const x = tf.tensor4d( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
 * 16], inShape);
 * const w = tf.tensor4d([-1, 1, -2, 0.5], [fSize, fSize, inputDepth,
 * outputDepth]);
 *
 * tf.fused.conv2d({ x, filter: w, strides, pad, dataFormat: 'NHWC',
 * dilations: [1, 1], bias: tf.scalar(5), activation: 'relu' }).print();
 * ```
 *
 * @param obj An object with the following properties:
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter, rank 4, of shape
 *     `[filterHeight, filterWidth, inDepth, outDepth]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid` output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dataFormat An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `dilations` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param bias Tensor to be added to the result.
 * @param activation Name of activation kernel (defaults to `linear`) to be
 *     applied
 *      after biasAdd.
 * @param preluActivationWeights Tensor of prelu weights to be applied as part
 *     of a `prelu` activation, typically the same shape as `x`.
 * @param leakyreluAlpha Optional. Alpha to be applied as part of a `leakyrelu`
 *     activation.
 */ function fusedConv2d_({ x, filter, strides, pad, dataFormat = 'NHWC', dilations = [
    1,
    1
], dimRoundingMode, bias, activation = 'linear', preluActivationWeights, leakyreluAlpha }) {
    activation = activation || 'linear';
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldFuse"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].state.gradientDepth, activation) === false) {
        // TODO: Transpose bias and preluActivationWeights properly for NCHW
        // format before computation.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](dataFormat === 'NHWC', ()=>`Error in fused conv2d: got dataFormat of ${dataFormat} but ` + `only NHWC is currently supported for the case of gradient depth ` + `is 0 and the activation is not linear.`);
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"])(x, filter, strides, pad, dataFormat, dilations, dimRoundingMode);
        if (bias != null) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(result, bias);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyActivation"])(result, activation, preluActivationWeights, leakyreluAlpha);
    }
    const $x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(x, 'x', 'conv2d', 'float32');
    const $filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(filter, 'filter', 'conv2d', 'float32');
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($x, [
            1,
            $x.shape[0],
            $x.shape[1],
            $x.shape[2]
        ]);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](x4D.rank === 4, ()=>`Error in fused conv2d: input must be rank 4, but got rank ` + `${x4D.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($filter.rank === 4, ()=>`Error in fused conv2d: filter must be rank 4, but got rank ` + `${$filter.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPadOnDimRoundingMode"]('fused conv2d', pad, dimRoundingMode);
    const inputChannels = dataFormat === 'NHWC' ? x4D.shape[3] : x4D.shape[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($filter.shape[2] === inputChannels, ()=>`Error in conv2d: depth of input (${inputChannels}) must match ` + `input depth for filter ${$filter.shape[2]}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eitherStridesOrDilationsAreOne"](strides, dilations), ()=>'Error in conv2D: Either strides or dilations must be 1. ' + `Got strides ${strides} and dilations '${dilations}'`);
    const convInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeConv2DInfo"](x4D.shape, $filter.shape, strides, dilations, pad, dimRoundingMode);
    let $bias;
    if (bias != null) {
        $bias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(bias, 'bias', 'fused conv2d');
        [$bias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTypesMatch"])($bias, $x);
        // According to TensorFlow, the bias is supposed be a 1-D tensor or a
        // scalar.
        //
        // 3-D or 4-D bias is not disabled for NHWC format, because they are
        // currently being used in some cases. For examplem in our code base,
        // https://github.com/tensorflow/tfjs/blob/b53bd47e880367ae57493f0ea628abaf08db2d5d/tfjs-core/src/ops/fused/fused_conv2d_test.ts#L1972.
        if (dataFormat === 'NHWC') {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAndGetBroadcastShape"](convInfo.outShape, $bias.shape);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($bias.shape.length <= 1, ()=>`Error in fused conv2d: only supports scalar or 1-D Tensor ` + `bias for NCHW format but got the bias of ` + `rank-${$bias.shape.length}.`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($bias.shape.length === 0 || $bias.shape[0] === convInfo.outChannels || $bias.shape[0] === 1, ()=>`Error in fused conv2d: bias shape (${$bias.shape}) is not ` + `compatible with the number of output channels ` + `(${convInfo.outChannels})`);
        }
    }
    let $preluActivationWeights;
    if (preluActivationWeights != null) {
        // PReLU's activation weights could be a scalar, a 1-D tensor or a 3-D
        // tensor.
        const alphaShape = preluActivationWeights.shape;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](alphaShape.length <= 1 || alphaShape.length === 3, ()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or ` + `3-D Tensor PReLU activation weights but got a tensor of ` + `rank-${alphaShape.length}.`);
        if (alphaShape.length === 1) {
            // Whether the data format is NCHW or NHWC, the 1-D PReLU activation
            // weights tensor should be aligned with the output channels of conv2d
            // result.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](alphaShape[0] === 1 || alphaShape[0] === convInfo.outChannels, ()=>`Error in fused conv2d: PReLU activation weights ` + `(${alphaShape}) is not compatible with the number of output ` + `channels (${convInfo.outChannels}).`);
        } else if (alphaShape.length === 3) {
            // Whether the data format is NCHW or NHWC, the PReLU activation weights
            // tensor should has the compatible shape with the result of conv2d.
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAndGetBroadcastShape"](alphaShape, convInfo.outShape);
            } catch (e) {
                const errMsg = `Error in fused conv2d: PReLU activation weights (${alphaShape}) ` + `is not compatible with the output shape of the conv2d ` + `(${convInfo.outShape}).`;
                throw Error(errMsg);
            }
        }
        $preluActivationWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(preluActivationWeights, 'prelu weights', 'fused conv2d');
    }
    const grad = (dy, saved)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](dataFormat === 'NHWC', ()=>`Error in gradient of fused conv2D: got dataFormat of ${dataFormat} but only NHWC is currently supported.`);
        const [$filter, x4D, y, $bias] = saved;
        const dyActivation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedDyActivation"])(dy, y, activation);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tupleValuesAreOne"](dilations), ()=>'Error in gradient of fused conv2D: ' + `dilation rates greater than 1 ` + `are not yet supported in gradients. Got dilations '${dilations}'`);
        const xDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d_backprop_input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2DBackpropInput"])(x4D.shape, dyActivation, $filter, strides, pad);
        const filterDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv2d_backprop_filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2DBackpropFilter"])(x4D, dyActivation, $filter.shape, strides, pad);
        const der = [
            xDer,
            filterDer
        ];
        if ($bias != null) {
            const biasDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedBiasGradient"])($bias, dyActivation);
            der.push(biasDer);
        }
        return der;
    };
    const inputs = {
        x: x4D,
        filter: $filter,
        bias: $bias,
        preluActivationWeights: $preluActivationWeights
    };
    const attrs = {
        strides,
        pad,
        dataFormat,
        dilations,
        dimRoundingMode,
        activation,
        leakyreluAlpha
    };
    // Depending on the the params passed in we will have different number of
    // inputs and thus a a different number of elements in the gradient.
    if (bias == null) {
        const customOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customGrad"])((x4D, filter, save)=>{
            let res = // tslint:disable-next-line: no-unnecessary-type-assertion
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FusedConv2D"], inputs, attrs);
            save([
                filter,
                x4D,
                res
            ]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, [
                    res.shape[1],
                    res.shape[2],
                    res.shape[3]
                ]);
            }
            return {
                value: res,
                gradFunc: grad
            };
        });
        return customOp(x4D, $filter);
    } else {
        const customOpWithBias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customGrad"])((x4D, filter, bias, save)=>{
            let res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FusedConv2D"], inputs, attrs);
            save([
                filter,
                x4D,
                res,
                bias
            ]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, [
                    res.shape[1],
                    res.shape[2],
                    res.shape[3]
                ]);
            }
            return {
                value: res,
                gradFunc: grad
            };
        });
        return customOpWithBias(x4D, $filter, $bias);
    }
}
const conv2d = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    fusedConv2d_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udjJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1jb3JlL3NyYy9vcHMvZnVzZWQvY29udjJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxXQUFXLEVBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFJcEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RCxPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzNCLE9BQU8sS0FBSyxjQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLE1BQU0sSUFBSSxhQUFhLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxLQUFLLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFFMUMsT0FBTyxFQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNoQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdERztBQUNILFNB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LENBQUM7S0FDcEM7U0FBTTtRQUNMLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUMvQixDQUFDLEdBQWEsRUFBRSxNQUFnQixFQUFFLElBQVksRUFBRSxJQUFrQixFQUFFLEVBQUU7WUFDcEUsSUFBSSxHQUFHLEdBQXNCLE1BQU0sQ0FBQyxTQUFTLENBQ3pDLFdBQVcsRUFBRSxNQUFtQyxFQUNoRCxLQUFnQyxDQUFDLENBQUM7WUFFdEMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLFlBQVksRUFBRTtnQkFDaEIsMERBQTBEO2dCQUMxRCxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pELENBQUM7YUFDZDtZQUVELE9BQU8sRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQU0sQ0FBQztLQUNuRDtBQUNILENBQUM7QUFDRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RU5HSU5FfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHtjdXN0b21HcmFkfSBmcm9tICcuLi8uLi9ncmFkaWVudHMnO1xuaW1wb3J0IHtGdXNlZENvbnYyRCwgRnVzZWRDb252MkRBdHRycywgRnVzZWRDb252MkRJbnB1dHN9IGZyb20gJy4uLy4uL2tlcm5lbF9uYW1lcyc7XG5pbXBvcnQge05hbWVkQXR0ck1hcH0gZnJvbSAnLi4vLi4va2VybmVsX3JlZ2lzdHJ5JztcbmltcG9ydCB7VGVuc29yLCBUZW5zb3IzRCwgVGVuc29yNER9IGZyb20gJy4uLy4uL3RlbnNvcic7XG5pbXBvcnQge0dyYWRTYXZlRnVuYywgTmFtZWRUZW5zb3JNYXB9IGZyb20gJy4uLy4uL3RlbnNvcl90eXBlcyc7XG5pbXBvcnQge21ha2VUeXBlc01hdGNofSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbCc7XG5pbXBvcnQge2NvbnZlcnRUb1RlbnNvcn0gZnJvbSAnLi4vLi4vdGVuc29yX3V0aWxfZW52JztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7YWRkfSBmcm9tICcuLi9hZGQnO1xuaW1wb3J0ICogYXMgYnJvYWRjYXN0X3V0aWwgZnJvbSAnLi4vYnJvYWRjYXN0X3V0aWwnO1xuaW1wb3J0IHtjb252MmQgYXMgdW5mdXNlZENvbnYyZH0gZnJvbSAnLi4vY29udjJkJztcbmltcG9ydCB7Y29udjJEQmFja3Byb3BGaWx0ZXJ9IGZyb20gJy4uL2NvbnYyZF9iYWNrcHJvcF9maWx0ZXInO1xuaW1wb3J0IHtjb252MkRCYWNrcHJvcElucHV0fSBmcm9tICcuLi9jb252MmRfYmFja3Byb3BfaW5wdXQnO1xuaW1wb3J0ICogYXMgY29udl91dGlsIGZyb20gJy4uL2NvbnZfdXRpbCc7XG5pbXBvcnQge0FjdGl2YXRpb259IGZyb20gJy4uL2Z1c2VkX3R5cGVzJztcbmltcG9ydCB7YXBwbHlBY3RpdmF0aW9uLCBnZXRGdXNlZEJpYXNHcmFkaWVudCwgZ2V0RnVzZWREeUFjdGl2YXRpb24sIHNob3VsZEZ1c2V9IGZyb20gJy4uL2Z1c2VkX3V0aWwnO1xuaW1wb3J0IHtvcH0gZnJvbSAnLi4vb3BlcmF0aW9uJztcbmltcG9ydCB7cmVzaGFwZX0gZnJvbSAnLi4vcmVzaGFwZSc7XG5cbi8qKlxuICogQ29tcHV0ZXMgYSAyRCBjb252b2x1dGlvbiBvdmVyIHRoZSBpbnB1dCB4LCBvcHRpb25hbGx5IGZ1c2VkIHdpdGggYWRkaW5nIGFcbiAqIGJpYXMgYW5kIGFwcGx5aW5nIGFuIGFjdGl2YXRpb24uXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGlucHV0RGVwdGggPSAyO1xuICogY29uc3QgaW5TaGFwZSA9IFsyLCAyLCAyLCBpbnB1dERlcHRoXTtcbiAqIGNvbnN0IG91dHB1dERlcHRoID0gMjtcbiAqIGNvbnN0IGZTaXplID0gMTtcbiAqIGNvbnN0IHBhZCA9IDA7XG4gKiBjb25zdCBzdHJpZGVzID0gMTtcbiAqXG4gKiBjb25zdCB4ID0gdGYudGVuc29yNGQoIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuICogMTZdLCBpblNoYXBlKTtcbiAqIGNvbnN0IHcgPSB0Zi50ZW5zb3I0ZChbLTEsIDEsIC0yLCAwLjVdLCBbZlNpemUsIGZTaXplLCBpbnB1dERlcHRoLFxuICogb3V0cHV0RGVwdGhdKTtcbiAqXG4gKiB0Zi5mdXNlZC5jb252MmQoeyB4LCBmaWx0ZXI6IHcsIHN0cmlkZXMsIHBhZCwgZGF0YUZvcm1hdDogJ05IV0MnLFxuICogZGlsYXRpb25zOiBbMSwgMV0sIGJpYXM6IHRmLnNjYWxhcig1KSwgYWN0aXZhdGlvbjogJ3JlbHUnIH0pLnByaW50KCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gb2JqIEFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIEBwYXJhbSB4IFRoZSBpbnB1dCB0ZW5zb3IsIG9mIHJhbmsgNCBvciByYW5rIDMsIG9mIHNoYXBlXG4gKiAgICAgYFtiYXRjaCwgaGVpZ2h0LCB3aWR0aCwgaW5DaGFubmVsc11gLiBJZiByYW5rIDMsIGJhdGNoIG9mIDEgaXNcbiAqIGFzc3VtZWQuXG4gKiBAcGFyYW0gZmlsdGVyIFRoZSBmaWx0ZXIsIHJhbmsgNCwgb2Ygc2hhcGVcbiAqICAgICBgW2ZpbHRlckhlaWdodCwgZmlsdGVyV2lkdGgsIGluRGVwdGgsIG91dERlcHRoXWAuXG4gKiBAcGFyYW0gc3RyaWRlcyBUaGUgc3RyaWRlcyBvZiB0aGUgY29udm9sdXRpb246IGBbc3RyaWRlSGVpZ2h0LFxuICogc3RyaWRlV2lkdGhdYC5cbiAqIEBwYXJhbSBwYWQgVGhlIHR5cGUgb2YgcGFkZGluZyBhbGdvcml0aG0uXG4gKiAgIC0gYHNhbWVgIGFuZCBzdHJpZGUgMTogb3V0cHV0IHdpbGwgYmUgb2Ygc2FtZSBzaXplIGFzIGlucHV0LFxuICogICAgICAgcmVnYXJkbGVzcyBvZiBmaWx0ZXIgc2l6ZS5cbiAqICAgLSBgdmFsaWRgIG91dHB1dCB3aWxsIGJlIHNtYWxsZXIgdGhhbiBpbnB1dCBpZiBmaWx0ZXIgaXMgbGFyZ2VyXG4gKiAgICAgICB0aGFuIDF4MS5cbiAqICAgLSBGb3IgbW9yZSBpbmZvLCBzZWUgdGhpcyBndWlkZTpcbiAqICAgICBbaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvYXBpX2RvY3MvcHl0aG9uL3RmL25uL2NvbnZvbHV0aW9uXShcbiAqICAgICAgICAgIGh0dHBzOi8vd3d3LnRlbnNvcmZsb3cub3JnL2FwaV9kb2NzL3B5dGhvbi90Zi9ubi9jb252b2x1dGlvbilcbiAqIEBwYXJhbSBkYXRhRm9ybWF0IEFuIG9wdGlvbmFsIHN0cmluZyBmcm9tOiBcIk5IV0NcIiwgXCJOQ0hXXCIuIERlZmF1bHRzIHRvXG4gKiAgICAgXCJOSFdDXCIuIFNwZWNpZnkgdGhlIGRhdGEgZm9ybWF0IG9mIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGRhdGEuIFdpdGggdGhlXG4gKiAgICAgZGVmYXVsdCBmb3JtYXQgXCJOSFdDXCIsIHRoZSBkYXRhIGlzIHN0b3JlZCBpbiB0aGUgb3JkZXIgb2Y6IFtiYXRjaCxcbiAqICAgICBoZWlnaHQsIHdpZHRoLCBjaGFubmVsc10uIE9ubHkgXCJOSFdDXCIgaXMgY3VycmVudGx5IHN1cHBvcnRlZC5cbiAqIEBwYXJhbSBkaWxhdGlvbnMgVGhlIGRpbGF0aW9uIHJhdGVzOiBgW2RpbGF0aW9uSGVpZ2h0LCBkaWxhdGlvbldpZHRoXWBcbiAqICAgICBpbiB3aGljaCB3ZSBzYW1wbGUgaW5wdXQgdmFsdWVzIGFjcm9zcyB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBkaW1lbnNpb25zXG4gKiAgICAgaW4gYXRyb3VzIGNvbnZvbHV0aW9uLiBEZWZhdWx0cyB0byBgWzEsIDFdYC4gSWYgYGRpbGF0aW9uc2AgaXMgYSBzaW5nbGVcbiAqICAgICBudW1iZXIsIHRoZW4gYGRpbGF0aW9uSGVpZ2h0ID09IGRpbGF0aW9uV2lkdGhgLiBJZiBpdCBpcyBncmVhdGVyIHRoYW5cbiAqICAgICAxLCB0aGVuIGFsbCB2YWx1ZXMgb2YgYHN0cmlkZXNgIG11c3QgYmUgMS5cbiAqIEBwYXJhbSBkaW1Sb3VuZGluZ01vZGUgQSBzdHJpbmcgZnJvbTogJ2NlaWwnLCAncm91bmQnLCAnZmxvb3InLiBJZiBub25lIGlzXG4gKiAgICAgcHJvdmlkZWQsIGl0IHdpbGwgZGVmYXVsdCB0byB0cnVuY2F0ZS5cbiAqIEBwYXJhbSBiaWFzIFRlbnNvciB0byBiZSBhZGRlZCB0byB0aGUgcmVzdWx0LlxuICogQHBhcmFtIGFjdGl2YXRpb24gTmFtZSBvZiBhY3RpdmF0aW9uIGtlcm5lbCAoZGVmYXVsdHMgdG8gYGxpbmVhcmApIHRvIGJlXG4gKiAgICAgYXBwbGllZFxuICogICAgICBhZnRlciBiaWFzQWRkLlxuICogQHBhcmFtIHByZWx1QWN0aXZhdGlvbldlaWdodHMgVGVuc29yIG9mIHByZWx1IHdlaWdodHMgdG8gYmUgYXBwbGllZCBhcyBwYXJ0XG4gKiAgICAgb2YgYSBgcHJlbHVgIGFjdGl2YXRpb24sIHR5cGljYWxseSB0aGUgc2FtZSBzaGFwZSBhcyBgeGAuXG4gKiBAcGFyYW0gbGVha3lyZWx1QWxwaGEgT3B0aW9uYWwuIEFscGhhIHRvIGJlIGFwcGxpZWQgYXMgcGFydCBvZiBhIGBsZWFreXJlbHVgXG4gKiAgICAgYWN0aXZhdGlvbi5cbiAqL1xuZnVuY3Rpb24gZnVzZWRDb252MmRfPFQgZXh0ZW5kcyBUZW5zb3IzRHxUZW5zb3I0RD4oe1xuICB4LFxuICBmaWx0ZXIsXG4gIHN0cmlkZXMsXG4gIHBhZCxcbiAgZGF0YUZvcm1hdCA9ICdOSFdDJyxcbiAgZGlsYXRpb25zID0gWzEsIDFdLFxuICBkaW1Sb3VuZGluZ01vZGUsXG4gIGJpYXMsXG4gIGFjdGl2YXRpb24gPSAnbGluZWFyJyxcbiAgcHJlbHVBY3RpdmF0aW9uV2VpZ2h0cyxcbiAgbGVha3lyZWx1QWxwaGFcbn06IHtcbiAgeDogVHxUZW5zb3JMaWtlLFxuICBmaWx0ZXI6IFRlbnNvcjREfFRlbnNvckxpa2UsXG4gIHN0cmlkZXM6IFtudW1iZXIsIG51bWJlcl18bnVtYmVyLFxuICBwYWQ6ICd2YWxpZCd8J3NhbWUnfG51bWJlcnxjb252X3V0aWwuRXhwbGljaXRQYWRkaW5nLFxuICBkYXRhRm9ybWF0PzogJ05IV0MnfCdOQ0hXJyxcbiAgZGlsYXRpb25zPzogW251bWJlciwgbnVtYmVyXXxudW1iZXIsXG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCcsXG4gIGJpYXM/OiBUZW5zb3J8VGVuc29yTGlrZSxcbiAgYWN0aXZhdGlvbj86IEFjdGl2YXRpb24sXG4gIHByZWx1QWN0aXZhdGlvbldlaWdodHM/OiBUZW5zb3IsXG4gIGxlYWt5cmVsdUFscGhhPzogbnVtYmVyXG59KTogVCB7XG4gIGFjdGl2YXRpb24gPSBhY3RpdmF0aW9uIHx8ICdsaW5lYXInO1xuXG4gIGlmIChzaG91bGRGdXNlKEVOR0lORS5zdGF0ZS5ncmFkaWVudERlcHRoLCBhY3RpdmF0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAvLyBUT0RPOiBUcmFuc3Bvc2UgYmlhcyBhbmQgcHJlbHVBY3RpdmF0aW9uV2VpZ2h0cyBwcm9wZXJseSBmb3IgTkNIV1xuICAgIC8vIGZvcm1hdCBiZWZvcmUgY29tcHV0YXRpb24uXG4gICAgdXRpbC5hc3NlcnQoXG4gICAgICAgIGRhdGFGb3JtYXQgPT09ICdOSFdDJyxcbiAgICAgICAgKCkgPT4gYEVycm9yIGluIGZ1c2VkIGNvbnYyZDogZ290IGRhdGFGb3JtYXQgb2YgJHtkYXRhRm9ybWF0fSBidXQgYCArXG4gICAgICAgICAgICBgb25seSBOSFdDIGlzIGN1cnJlbnRseSBzdXBwb3J0ZWQgZm9yIHRoZSBjYXNlIG9mIGdyYWRpZW50IGRlcHRoIGAgK1xuICAgICAgICAgICAgYGlzIDAgYW5kIHRoZSBhY3RpdmF0aW9uIGlzIG5vdCBsaW5lYXIuYCk7XG5cbiAgICBsZXQgcmVzdWx0ID0gdW5mdXNlZENvbnYyZChcbiAgICAgICAgeCwgZmlsdGVyLCBzdHJpZGVzLCBwYWQsIGRhdGFGb3JtYXQsIGRpbGF0aW9ucywgZGltUm91bmRpbmdNb2RlKTtcbiAgICBpZiAoYmlhcyAhPSBudWxsKSB7XG4gICAgICByZXN1bHQgPSBhZGQocmVzdWx0LCBiaWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXBwbHlBY3RpdmF0aW9uKFxuICAgICAgICAgICAgICAgcmVzdWx0LCBhY3RpdmF0aW9uLCBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLCBsZWFreXJlbHVBbHBoYSkgYXMgVDtcbiAgfVxuXG4gIGNvbnN0ICR4ID0gY29udmVydFRvVGVuc29yKHgsICd4JywgJ2NvbnYyZCcsICdmbG9hdDMyJyk7XG4gIGNvbnN0ICRmaWx0ZXIgPSBjb252ZXJ0VG9UZW5zb3IoZmlsdGVyLCAnZmlsdGVyJywgJ2NvbnYyZCcsICdmbG9hdDMyJyk7XG5cbiAgbGV0IHg0RCA9ICR4IGFzIFRlbnNvcjREO1xuICBsZXQgcmVzaGFwZWRUbzREID0gZmFsc2U7XG5cbiAgaWYgKCR4LnJhbmsgPT09IDMpIHtcbiAgICByZXNoYXBlZFRvNEQgPSB0cnVlO1xuICAgIHg0RCA9IHJlc2hhcGUoJHgsIFsxLCAkeC5zaGFwZVswXSwgJHguc2hhcGVbMV0sICR4LnNoYXBlWzJdXSk7XG4gIH1cbiAgdXRpbC5hc3NlcnQoXG4gICAgICB4NEQucmFuayA9PT0gNCxcbiAgICAgICgpID0+IGBFcnJvciBpbiBmdXNlZCBjb252MmQ6IGlucHV0IG11c3QgYmUgcmFuayA0LCBidXQgZ290IHJhbmsgYCArXG4gICAgICAgICAgYCR7eDRELnJhbmt9LmApO1xuICB1dGlsLmFzc2VydChcbiAgICAgICRmaWx0ZXIucmFuayA9PT0gNCxcbiAgICAgICgpID0+IGBFcnJvciBpbiBmdXNlZCBjb252MmQ6IGZpbHRlciBtdXN0IGJlIHJhbmsgNCwgYnV0IGdvdCByYW5rIGAgK1xuICAgICAgICAgIGAkeyRmaWx0ZXIucmFua30uYCk7XG4gIGNvbnZfdXRpbC5jaGVja1BhZE9uRGltUm91bmRpbmdNb2RlKCdmdXNlZCBjb252MmQnLCBwYWQsIGRpbVJvdW5kaW5nTW9kZSk7XG4gIGNvbnN0IGlucHV0Q2hhbm5lbHMgPSBkYXRhRm9ybWF0ID09PSAnTkhXQycgPyB4NEQuc2hhcGVbM10gOiB4NEQuc2hhcGVbMV07XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgJGZpbHRlci5zaGFwZVsyXSA9PT0gaW5wdXRDaGFubmVscyxcbiAgICAgICgpID0+IGBFcnJvciBpbiBjb252MmQ6IGRlcHRoIG9mIGlucHV0ICgke2lucHV0Q2hhbm5lbHN9KSBtdXN0IG1hdGNoIGAgK1xuICAgICAgICAgIGBpbnB1dCBkZXB0aCBmb3IgZmlsdGVyICR7JGZpbHRlci5zaGFwZVsyXX0uYCk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgY29udl91dGlsLmVpdGhlclN0cmlkZXNPckRpbGF0aW9uc0FyZU9uZShzdHJpZGVzLCBkaWxhdGlvbnMpLFxuICAgICAgKCkgPT4gJ0Vycm9yIGluIGNvbnYyRDogRWl0aGVyIHN0cmlkZXMgb3IgZGlsYXRpb25zIG11c3QgYmUgMS4gJyArXG4gICAgICAgICAgYEdvdCBzdHJpZGVzICR7c3RyaWRlc30gYW5kIGRpbGF0aW9ucyAnJHtkaWxhdGlvbnN9J2ApO1xuXG4gIGNvbnN0IGNvbnZJbmZvID0gY29udl91dGlsLmNvbXB1dGVDb252MkRJbmZvKFxuICAgICAgeDRELnNoYXBlLCAkZmlsdGVyLnNoYXBlLCBzdHJpZGVzLCBkaWxhdGlvbnMsIHBhZCwgZGltUm91bmRpbmdNb2RlKTtcblxuICBsZXQgJGJpYXM6IFRlbnNvcjtcbiAgaWYgKGJpYXMgIT0gbnVsbCkge1xuICAgICRiaWFzID0gY29udmVydFRvVGVuc29yKGJpYXMsICdiaWFzJywgJ2Z1c2VkIGNvbnYyZCcpO1xuICAgIFskYmlhc10gPSBtYWtlVHlwZXNNYXRjaCgkYmlhcywgJHgpO1xuXG4gICAgLy8gQWNjb3JkaW5nIHRvIFRlbnNvckZsb3csIHRoZSBiaWFzIGlzIHN1cHBvc2VkIGJlIGEgMS1EIHRlbnNvciBvciBhXG4gICAgLy8gc2NhbGFyLlxuICAgIC8vXG4gICAgLy8gMy1EIG9yIDQtRCBiaWFzIGlzIG5vdCBkaXNhYmxlZCBmb3IgTkhXQyBmb3JtYXQsIGJlY2F1c2UgdGhleSBhcmVcbiAgICAvLyBjdXJyZW50bHkgYmVpbmcgdXNlZCBpbiBzb21lIGNhc2VzLiBGb3IgZXhhbXBsZW0gaW4gb3VyIGNvZGUgYmFzZSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzL2Jsb2IvYjUzYmQ0N2U4ODAzNjdhZTU3NDkzZjBlYTYyOGFiYWYwOGRiMmQ1ZC90ZmpzLWNvcmUvc3JjL29wcy9mdXNlZC9mdXNlZF9jb252MmRfdGVzdC50cyNMMTk3Mi5cbiAgICBpZiAoZGF0YUZvcm1hdCA9PT0gJ05IV0MnKSB7XG4gICAgICBicm9hZGNhc3RfdXRpbC5hc3NlcnRBbmRHZXRCcm9hZGNhc3RTaGFwZShjb252SW5mby5vdXRTaGFwZSwgJGJpYXMuc2hhcGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICAkYmlhcy5zaGFwZS5sZW5ndGggPD0gMSxcbiAgICAgICAgICAoKSA9PiBgRXJyb3IgaW4gZnVzZWQgY29udjJkOiBvbmx5IHN1cHBvcnRzIHNjYWxhciBvciAxLUQgVGVuc29yIGAgK1xuICAgICAgICAgICAgICBgYmlhcyBmb3IgTkNIVyBmb3JtYXQgYnV0IGdvdCB0aGUgYmlhcyBvZiBgICtcbiAgICAgICAgICAgICAgYHJhbmstJHskYmlhcy5zaGFwZS5sZW5ndGh9LmApO1xuXG4gICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICAkYmlhcy5zaGFwZS5sZW5ndGggPT09IDAgfHwgJGJpYXMuc2hhcGVbMF0gPT09IGNvbnZJbmZvLm91dENoYW5uZWxzIHx8XG4gICAgICAgICAgICAgICRiaWFzLnNoYXBlWzBdID09PSAxLFxuICAgICAgICAgICgpID0+IGBFcnJvciBpbiBmdXNlZCBjb252MmQ6IGJpYXMgc2hhcGUgKCR7JGJpYXMuc2hhcGV9KSBpcyBub3QgYCArXG4gICAgICAgICAgICAgIGBjb21wYXRpYmxlIHdpdGggdGhlIG51bWJlciBvZiBvdXRwdXQgY2hhbm5lbHMgYCArXG4gICAgICAgICAgICAgIGAoJHtjb252SW5mby5vdXRDaGFubmVsc30pYCk7XG4gICAgfVxuICB9XG5cbiAgbGV0ICRwcmVsdUFjdGl2YXRpb25XZWlnaHRzOiBUZW5zb3I7XG4gIGlmIChwcmVsdUFjdGl2YXRpb25XZWlnaHRzICE9IG51bGwpIHtcbiAgICAvLyBQUmVMVSdzIGFjdGl2YXRpb24gd2VpZ2h0cyBjb3VsZCBiZSBhIHNjYWxhciwgYSAxLUQgdGVuc29yIG9yIGEgMy1EXG4gICAgLy8gdGVuc29yLlxuICAgIGNvbnN0IGFscGhhU2hhcGUgPSBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLnNoYXBlO1xuICAgIHV0aWwuYXNzZXJ0KFxuICAgICAgICBhbHBoYVNoYXBlLmxlbmd0aCA8PSAxIHx8IGFscGhhU2hhcGUubGVuZ3RoID09PSAzLFxuICAgICAgICAoKSA9PiBgRXJyb3IgaW4gZnVzZWQgY29udjJkOiBvbmx5IHN1cHBvcnRzIHNjYWxhciwgMS1EIFRlbnNvciBvciBgICtcbiAgICAgICAgICAgIGAzLUQgVGVuc29yIFBSZUxVIGFjdGl2YXRpb24gd2VpZ2h0cyBidXQgZ290IGEgdGVuc29yIG9mIGAgK1xuICAgICAgICAgICAgYHJhbmstJHthbHBoYVNoYXBlLmxlbmd0aH0uYCk7XG5cbiAgICBpZiAoYWxwaGFTaGFwZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFdoZXRoZXIgdGhlIGRhdGEgZm9ybWF0IGlzIE5DSFcgb3IgTkhXQywgdGhlIDEtRCBQUmVMVSBhY3RpdmF0aW9uXG4gICAgICAvLyB3ZWlnaHRzIHRlbnNvciBzaG91bGQgYmUgYWxpZ25lZCB3aXRoIHRoZSBvdXRwdXQgY2hhbm5lbHMgb2YgY29udjJkXG4gICAgICAvLyByZXN1bHQuXG4gICAgICB1dGlsLmFzc2VydChcbiAgICAgICAgICBhbHBoYVNoYXBlWzBdID09PSAxIHx8IGFscGhhU2hhcGVbMF0gPT09IGNvbnZJbmZvLm91dENoYW5uZWxzLFxuICAgICAgICAgICgpID0+IGBFcnJvciBpbiBmdXNlZCBjb252MmQ6IFBSZUxVIGFjdGl2YXRpb24gd2VpZ2h0cyBgICtcbiAgICAgICAgICAgICAgYCgke2FscGhhU2hhcGV9KSBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoZSBudW1iZXIgb2Ygb3V0cHV0IGAgK1xuICAgICAgICAgICAgICBgY2hhbm5lbHMgKCR7Y29udkluZm8ub3V0Q2hhbm5lbHN9KS5gKTtcbiAgICB9IGVsc2UgaWYgKGFscGhhU2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgICAvLyBXaGV0aGVyIHRoZSBkYXRhIGZvcm1hdCBpcyBOQ0hXIG9yIE5IV0MsIHRoZSBQUmVMVSBhY3RpdmF0aW9uIHdlaWdodHNcbiAgICAgIC8vIHRlbnNvciBzaG91bGQgaGFzIHRoZSBjb21wYXRpYmxlIHNoYXBlIHdpdGggdGhlIHJlc3VsdCBvZiBjb252MmQuXG4gICAgICB0cnkge1xuICAgICAgICBicm9hZGNhc3RfdXRpbC5hc3NlcnRBbmRHZXRCcm9hZGNhc3RTaGFwZShcbiAgICAgICAgICAgIGFscGhhU2hhcGUsIGNvbnZJbmZvLm91dFNoYXBlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZXJyTXNnID1cbiAgICAgICAgICAgIGBFcnJvciBpbiBmdXNlZCBjb252MmQ6IFBSZUxVIGFjdGl2YXRpb24gd2VpZ2h0cyAoJHthbHBoYVNoYXBlfSkgYCArXG4gICAgICAgICAgICBgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgb3V0cHV0IHNoYXBlIG9mIHRoZSBjb252MmQgYCArXG4gICAgICAgICAgICBgKCR7Y29udkluZm8ub3V0U2hhcGV9KS5gO1xuICAgICAgICB0aHJvdyBFcnJvcihlcnJNc2cpO1xuICAgICAgfVxuICAgIH1cblxuICAgICRwcmVsdUFjdGl2YXRpb25XZWlnaHRzID0gY29udmVydFRvVGVuc29yKFxuICAgICAgICBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLCAncHJlbHUgd2VpZ2h0cycsICdmdXNlZCBjb252MmQnKTtcbiAgfVxuXG4gIGNvbnN0IGdyYWQgPSAoZHk6IFRlbnNvcjRELCBzYXZlZDogVGVuc29yW10pID0+IHtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgZGF0YUZvcm1hdCA9PT0gJ05IV0MnLFxuICAgICAgICAoKSA9PiBgRXJyb3IgaW4gZ3JhZGllbnQgb2YgZnVzZWQgY29udjJEOiBnb3QgZGF0YUZvcm1hdCBvZiAke1xuICAgICAgICAgICAgZGF0YUZvcm1hdH0gYnV0IG9ubHkgTkhXQyBpcyBjdXJyZW50bHkgc3VwcG9ydGVkLmApO1xuXG4gICAgY29uc3QgWyRmaWx0ZXIsIHg0RCwgeSwgJGJpYXNdID1cbiAgICAgICAgc2F2ZWQgYXMgW1RlbnNvcjRELCBUZW5zb3I0RCwgVGVuc29yNEQsIFRlbnNvcl07XG5cbiAgICBjb25zdCBkeUFjdGl2YXRpb24gPSBnZXRGdXNlZER5QWN0aXZhdGlvbihkeSwgeSwgYWN0aXZhdGlvbikgYXMgVGVuc29yNEQ7XG5cbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgY29udl91dGlsLnR1cGxlVmFsdWVzQXJlT25lKGRpbGF0aW9ucyksXG4gICAgICAgICgpID0+ICdFcnJvciBpbiBncmFkaWVudCBvZiBmdXNlZCBjb252MkQ6ICcgK1xuICAgICAgICAgICAgYGRpbGF0aW9uIHJhdGVzIGdyZWF0ZXIgdGhhbiAxIGAgK1xuICAgICAgICAgICAgYGFyZSBub3QgeWV0IHN1cHBvcnRlZCBpbiBncmFkaWVudHMuIEdvdCBkaWxhdGlvbnMgJyR7ZGlsYXRpb25zfSdgKTtcblxuICAgIGNvbnN0IHhEZXIgPVxuICAgICAgICBjb252MkRCYWNrcHJvcElucHV0KHg0RC5zaGFwZSwgZHlBY3RpdmF0aW9uLCAkZmlsdGVyLCBzdHJpZGVzLCBwYWQpO1xuICAgIGNvbnN0IGZpbHRlckRlciA9XG4gICAgICAgIGNvbnYyREJhY2twcm9wRmlsdGVyKHg0RCwgZHlBY3RpdmF0aW9uLCAkZmlsdGVyLnNoYXBlLCBzdHJpZGVzLCBwYWQpO1xuICAgIGNvbnN0IGRlcjogVGVuc29yW10gPSBbeERlciwgZmlsdGVyRGVyXTtcblxuICAgIGlmICgkYmlhcyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBiaWFzRGVyID0gZ2V0RnVzZWRCaWFzR3JhZGllbnQoJGJpYXMsIGR5QWN0aXZhdGlvbik7XG4gICAgICBkZXIucHVzaChiaWFzRGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcjtcbiAgfTtcblxuICBjb25zdCBpbnB1dHM6IEZ1c2VkQ29udjJESW5wdXRzID0ge1xuICAgIHg6IHg0RCxcbiAgICBmaWx0ZXI6ICRmaWx0ZXIsXG4gICAgYmlhczogJGJpYXMsXG4gICAgcHJlbHVBY3RpdmF0aW9uV2VpZ2h0czogJHByZWx1QWN0aXZhdGlvbldlaWdodHNcbiAgfTtcblxuICBjb25zdCBhdHRyczogRnVzZWRDb252MkRBdHRycyA9IHtcbiAgICBzdHJpZGVzLFxuICAgIHBhZCxcbiAgICBkYXRhRm9ybWF0LFxuICAgIGRpbGF0aW9ucyxcbiAgICBkaW1Sb3VuZGluZ01vZGUsXG4gICAgYWN0aXZhdGlvbixcbiAgICBsZWFreXJlbHVBbHBoYVxuICB9O1xuXG4gIC8vIERlcGVuZGluZyBvbiB0aGUgdGhlIHBhcmFtcyBwYXNzZWQgaW4gd2Ugd2lsbCBoYXZlIGRpZmZlcmVudCBudW1iZXIgb2ZcbiAgLy8gaW5wdXRzIGFuZCB0aHVzIGEgYSBkaWZmZXJlbnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBncmFkaWVudC5cbiAgaWYgKGJpYXMgPT0gbnVsbCkge1xuICAgIGNvbnN0IGN1c3RvbU9wID1cbiAgICAgICAgY3VzdG9tR3JhZCgoeDREOiBUZW5zb3I0RCwgZmlsdGVyOiBUZW5zb3I0RCwgc2F2ZTogR3JhZFNhdmVGdW5jKSA9PiB7XG4gICAgICAgICAgbGV0IHJlczogVGVuc29yNER8VGVuc29yM0QgPVxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgIEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICAgICAgICAgICAgICBGdXNlZENvbnYyRCwgaW5wdXRzIGFzIHVua25vd24gYXMgTmFtZWRUZW5zb3JNYXAsXG4gICAgICAgICAgICAgICAgICBhdHRycyBhcyB1bmtub3duIGFzIE5hbWVkQXR0ck1hcCk7XG5cbiAgICAgICAgICBzYXZlKFtmaWx0ZXIsIHg0RCwgcmVzXSk7XG5cbiAgICAgICAgICBpZiAocmVzaGFwZWRUbzREKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gICAgICAgICAgICByZXMgPSByZXNoYXBlKHJlcywgW3Jlcy5zaGFwZVsxXSwgcmVzLnNoYXBlWzJdLCByZXMuc2hhcGVbM11dKSBhc1xuICAgICAgICAgICAgICAgIFRlbnNvcjNEO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7dmFsdWU6IHJlcywgZ3JhZEZ1bmM6IGdyYWR9O1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gY3VzdG9tT3AoeDRELCAkZmlsdGVyKSBhcyBUO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN1c3RvbU9wV2l0aEJpYXMgPSBjdXN0b21HcmFkKFxuICAgICAgICAoeDREOiBUZW5zb3I0RCwgZmlsdGVyOiBUZW5zb3I0RCwgYmlhczogVGVuc29yLCBzYXZlOiBHcmFkU2F2ZUZ1bmMpID0+IHtcbiAgICAgICAgICBsZXQgcmVzOiBUZW5zb3I0RHxUZW5zb3IzRCA9IEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICAgICAgICAgIEZ1c2VkQ29udjJELCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCxcbiAgICAgICAgICAgICAgYXR0cnMgYXMgdW5rbm93biBhcyBOYW1lZEF0dHJNYXApO1xuXG4gICAgICAgICAgc2F2ZShbZmlsdGVyLCB4NEQsIHJlcywgYmlhc10pO1xuXG4gICAgICAgICAgaWYgKHJlc2hhcGVkVG80RCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgICAgICAgICAgcmVzID0gcmVzaGFwZShyZXMsIFtyZXMuc2hhcGVbMV0sIHJlcy5zaGFwZVsyXSwgcmVzLnNoYXBlWzNdXSkgYXNcbiAgICAgICAgICAgICAgICBUZW5zb3IzRDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge3ZhbHVlOiByZXMsIGdyYWRGdW5jOiBncmFkfTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3VzdG9tT3BXaXRoQmlhcyh4NEQsICRmaWx0ZXIsICRiaWFzKSBhcyBUO1xuICB9XG59XG5leHBvcnQgY29uc3QgY29udjJkID0gLyogQF9fUFVSRV9fICovIG9wKHtmdXNlZENvbnYyZF99KTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused/depthwise_conv2d.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "depthwiseConv2d",
    ()=>depthwiseConv2d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/conv_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d_native_backprop_filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_filter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d_native_backprop_input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
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
 * Computes depthwise 2D convolution, optionally fused with adding a
 * bias and applying an activation.
 *
 * Given a 4D `input` array and a `filter` array of shape
 * `[filterHeight, filterWidth, inChannels, channelMultiplier]` containing
 * `inChannels` convolutional filters of depth 1, this op applies a
 * different filter to each input channel (expanding from 1 channel to
 * `channelMultiplier` channels for each), then concatenates the results
 * together. The output has `inChannels * channelMultiplier` channels.
 *
 * See
 * [https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d](
 *     https://www.tensorflow.org/api_docs/python/tf/nn/depthwise_conv2d)
 * for more details.
 *
 * @param obj An object with the following properties:
 * @param x The input tensor, of rank 4 or rank 3, of shape
 *     `[batch, height, width, inChannels]`. If rank 3, batch of 1 is
 * assumed.
 * @param filter The filter tensor, rank 4, of shape
 *     `[filterHeight, filterWidth, inChannels, channelMultiplier]`.
 * @param strides The strides of the convolution: `[strideHeight,
 * strideWidth]`. If strides is a single number, then `strideHeight ==
 * strideWidth`.
 * @param pad The type of padding algorithm.
 *   - `same` and stride 1: output will be of same size as input,
 *       regardless of filter size.
 *   - `valid`: output will be smaller than input if filter is larger
 *       than 1x1.
 *   - For more info, see this guide:
 *     [https://www.tensorflow.org/api_docs/python/tf/nn/convolution](
 *          https://www.tensorflow.org/api_docs/python/tf/nn/convolution)
 * @param dilations The dilation rates: `[dilationHeight, dilationWidth]`
 *     in which we sample input values across the height and width dimensions
 *     in atrous convolution. Defaults to `[1, 1]`. If `rate` is a single
 *     number, then `dilationHeight == dilationWidth`. If it is greater than
 *     1, then all values of `strides` must be 1.
 * @param dataFormat: An optional string from: "NHWC", "NCHW". Defaults to
 *     "NHWC". Specify the data format of the input and output data. With the
 *     default format "NHWC", the data is stored in the order of: [batch,
 *     height, width, channels]. Only "NHWC" is currently supported.
 * @param dimRoundingMode A string from: 'ceil', 'round', 'floor'. If none is
 *     provided, it will default to truncate.
 * @param bias Tensor to be added to the result.
 * @param activation Name of activation kernel (defaults to `linear`).
 * @param preluActivationWeights Tensor of prelu weights to be applied as part
 *     of a `prelu` activation, typically the same shape as `x`.
 * @param leakyreluAlpha Optional. Alpha to be applied as part of a `leakyrelu`
 *     activation.
 */ function fusedDepthwiseConv2d_({ x, filter, strides, pad, dataFormat = 'NHWC', dilations = [
    1,
    1
], dimRoundingMode, bias, activation = 'linear', preluActivationWeights, leakyreluAlpha }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldFuse"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].state.gradientDepth, activation) === false) {
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseConv2d"])(x, filter, strides, pad, dataFormat, dilations, dimRoundingMode);
        if (bias != null) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(result, bias);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyActivation"])(result, activation, preluActivationWeights, leakyreluAlpha);
    }
    const $x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(x, 'x', 'depthwiseConv2d', 'float32');
    const $filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(filter, 'filter', 'depthwiseConv2d', 'float32');
    let x4D = $x;
    let reshapedTo4D = false;
    if ($x.rank === 3) {
        reshapedTo4D = true;
        x4D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($x, [
            1,
            $x.shape[0],
            $x.shape[1],
            $x.shape[2]
        ]);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](x4D.rank === 4, ()=>`Error in fused depthwiseConv2d: input must be rank 4, but got ` + `rank ${x4D.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"]($filter.rank === 4, ()=>`Error in fused depthwiseConv2d: filter must be rank 4, ` + `but got rank ${$filter.rank}.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](x4D.shape[3] === $filter.shape[2], ()=>`Error in fused depthwiseConv2d: number of input channels ` + `(${x4D.shape[3]}) must match the inChannels dimension in ` + `filter ${$filter.shape[2]}.`);
    if (dilations == null) {
        dilations = [
            1,
            1
        ];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eitherStridesOrDilationsAreOne"](strides, dilations), ()=>'Error in fused depthwiseConv2d: Either strides or dilations must ' + `be 1. Got strides ${strides} and dilations '${dilations}'`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkPadOnDimRoundingMode"]('fused depthwiseConv2d', pad, dimRoundingMode);
    const convInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeConv2DInfo"](x4D.shape, $filter.shape, strides, dilations, pad, dimRoundingMode, true);
    let $bias;
    if (bias != null) {
        $bias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(bias, 'bias', 'fused conv2d');
        [$bias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTypesMatch"])($bias, $x);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAndGetBroadcastShape"](convInfo.outShape, $bias.shape);
    }
    let $preluActivationWeights;
    if (preluActivationWeights != null) {
        $preluActivationWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(preluActivationWeights, 'prelu weights', 'fused depthwiseConv2d');
    }
    const grad = (dy, saved)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$conv_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tupleValuesAreOne"](dilations), ()=>'Error in gradient of fused depthwiseConv2d: dilation rates ' + `greater than 1 are not yet supported. Got dilations ` + `'${dilations}'`);
        const [$filter, x4D, y, bias] = saved;
        const dyActivation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedDyActivation"])(dy, y, activation);
        const xDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d_native_backprop_input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseConv2dNativeBackpropInput"])(x4D.shape, dyActivation, $filter, strides, pad, dilations, dimRoundingMode);
        const filterDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$depthwise_conv2d_native_backprop_filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseConv2dNativeBackpropFilter"])(x4D, dyActivation, $filter.shape, strides, pad, dilations, dimRoundingMode);
        if (bias != null) {
            const biasDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedBiasGradient"])($bias, dyActivation);
            return [
                xDer,
                filterDer,
                biasDer
            ];
        }
        return [
            xDer,
            filterDer
        ];
    };
    const inputs = {
        x: x4D,
        filter: $filter,
        bias: $bias,
        preluActivationWeights: $preluActivationWeights
    };
    const attrs = {
        strides,
        pad,
        dataFormat,
        dilations,
        dimRoundingMode,
        activation,
        leakyreluAlpha
    };
    // Depending on the the params passed in we will have different number of
    // inputs and thus a a different number of elements in the gradient.
    if (bias == null) {
        const customOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customGrad"])((x4D, filter, save)=>{
            // tslint:disable-next-line: no-unnecessary-type-assertion
            let res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FusedDepthwiseConv2D"], inputs, attrs);
            save([
                filter,
                x4D,
                res
            ]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, [
                    res.shape[1],
                    res.shape[2],
                    res.shape[3]
                ]);
            }
            return {
                value: res,
                gradFunc: grad
            };
        });
        return customOp(x4D, $filter);
    } else {
        const customOpWithBias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customGrad"])((x4D, filter, bias, save)=>{
            // tslint:disable-next-line: no-unnecessary-type-assertion
            let res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FusedDepthwiseConv2D"], inputs, attrs);
            save([
                filter,
                x4D,
                res,
                bias
            ]);
            if (reshapedTo4D) {
                // tslint:disable-next-line: no-unnecessary-type-assertion
                res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, [
                    res.shape[1],
                    res.shape[2],
                    res.shape[3]
                ]);
            }
            return {
                value: res,
                gradFunc: grad
            };
        });
        return customOpWithBias(x4D, $filter, $bias);
    }
}
const depthwiseConv2d = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    fusedDepthwiseConv2d_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwdGh3aXNlX2NvbnYyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL2Z1c2VkL2RlcHRod2lzZV9jb252MmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLG9CQUFvQixFQUF3RCxNQUFNLG9CQUFvQixDQUFDO0FBSS9HLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQsT0FBTyxLQUFLLElBQUksTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMzQixPQUFPLEtBQUssY0FBYyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxlQUFlLElBQUksc0JBQXNCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRixPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RixPQUFPLEVBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0QsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBQyxxQkFBcUIsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7RU5HSU5FfSBmcm9tICcuLi8uLi9lbmdpbmUnO1xuaW1wb3J0IHtjdXN0b21HcmFkfSBmcm9tICcuLi8uLi9ncmFkaWVudHMnO1xuaW1wb3J0IHtGdXNlZERlcHRod2lzZUNvbnYyRCwgRnVzZWREZXB0aHdpc2VDb252MkRBdHRycywgRnVzZWREZXB0aHdpc2VDb252MkRJbnB1dHN9IGZyb20gJy4uLy4uL2tlcm5lbF9uYW1lcyc7XG5pbXBvcnQge05hbWVkQXR0ck1hcH0gZnJvbSAnLi4vLi4va2VybmVsX3JlZ2lzdHJ5JztcbmltcG9ydCB7VGVuc29yLCBUZW5zb3IzRCwgVGVuc29yNER9IGZyb20gJy4uLy4uL3RlbnNvcic7XG5pbXBvcnQge0dyYWRTYXZlRnVuYywgTmFtZWRUZW5zb3JNYXB9IGZyb20gJy4uLy4uL3RlbnNvcl90eXBlcyc7XG5pbXBvcnQge21ha2VUeXBlc01hdGNofSBmcm9tICcuLi8uLi90ZW5zb3JfdXRpbCc7XG5pbXBvcnQge2NvbnZlcnRUb1RlbnNvcn0gZnJvbSAnLi4vLi4vdGVuc29yX3V0aWxfZW52JztcbmltcG9ydCB7VGVuc29yTGlrZX0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7YWRkfSBmcm9tICcuLi9hZGQnO1xuaW1wb3J0ICogYXMgYnJvYWRjYXN0X3V0aWwgZnJvbSAnLi4vYnJvYWRjYXN0X3V0aWwnO1xuaW1wb3J0ICogYXMgY29udl91dGlsIGZyb20gJy4uL2NvbnZfdXRpbCc7XG5pbXBvcnQge2RlcHRod2lzZUNvbnYyZCBhcyB1bmZ1c2VkRGVwdGh3aXNlQ29udjJkfSBmcm9tICcuLi9kZXB0aHdpc2VfY29udjJkJztcbmltcG9ydCB7ZGVwdGh3aXNlQ29udjJkTmF0aXZlQmFja3Byb3BGaWx0ZXJ9IGZyb20gJy4uL2RlcHRod2lzZV9jb252MmRfbmF0aXZlX2JhY2twcm9wX2ZpbHRlcic7XG5pbXBvcnQge2RlcHRod2lzZUNvbnYyZE5hdGl2ZUJhY2twcm9wSW5wdXR9IGZyb20gJy4uL2RlcHRod2lzZV9jb252MmRfbmF0aXZlX2JhY2twcm9wX2lucHV0JztcbmltcG9ydCB7QWN0aXZhdGlvbn0gZnJvbSAnLi4vZnVzZWRfdHlwZXMnO1xuaW1wb3J0IHthcHBseUFjdGl2YXRpb24sIGdldEZ1c2VkQmlhc0dyYWRpZW50LCBnZXRGdXNlZER5QWN0aXZhdGlvbiwgc2hvdWxkRnVzZX0gZnJvbSAnLi4vZnVzZWRfdXRpbCc7XG5pbXBvcnQge29wfSBmcm9tICcuLi9vcGVyYXRpb24nO1xuaW1wb3J0IHtyZXNoYXBlfSBmcm9tICcuLi9yZXNoYXBlJztcblxuLyoqXG4gKiBDb21wdXRlcyBkZXB0aHdpc2UgMkQgY29udm9sdXRpb24sIG9wdGlvbmFsbHkgZnVzZWQgd2l0aCBhZGRpbmcgYVxuICogYmlhcyBhbmQgYXBwbHlpbmcgYW4gYWN0aXZhdGlvbi5cbiAqXG4gKiBHaXZlbiBhIDREIGBpbnB1dGAgYXJyYXkgYW5kIGEgYGZpbHRlcmAgYXJyYXkgb2Ygc2hhcGVcbiAqIGBbZmlsdGVySGVpZ2h0LCBmaWx0ZXJXaWR0aCwgaW5DaGFubmVscywgY2hhbm5lbE11bHRpcGxpZXJdYCBjb250YWluaW5nXG4gKiBgaW5DaGFubmVsc2AgY29udm9sdXRpb25hbCBmaWx0ZXJzIG9mIGRlcHRoIDEsIHRoaXMgb3AgYXBwbGllcyBhXG4gKiBkaWZmZXJlbnQgZmlsdGVyIHRvIGVhY2ggaW5wdXQgY2hhbm5lbCAoZXhwYW5kaW5nIGZyb20gMSBjaGFubmVsIHRvXG4gKiBgY2hhbm5lbE11bHRpcGxpZXJgIGNoYW5uZWxzIGZvciBlYWNoKSwgdGhlbiBjb25jYXRlbmF0ZXMgdGhlIHJlc3VsdHNcbiAqIHRvZ2V0aGVyLiBUaGUgb3V0cHV0IGhhcyBgaW5DaGFubmVscyAqIGNoYW5uZWxNdWx0aXBsaWVyYCBjaGFubmVscy5cbiAqXG4gKiBTZWVcbiAqIFtodHRwczovL3d3dy50ZW5zb3JmbG93Lm9yZy9hcGlfZG9jcy9weXRob24vdGYvbm4vZGVwdGh3aXNlX2NvbnYyZF0oXG4gKiAgICAgaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvYXBpX2RvY3MvcHl0aG9uL3RmL25uL2RlcHRod2lzZV9jb252MmQpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogQHBhcmFtIHggVGhlIGlucHV0IHRlbnNvciwgb2YgcmFuayA0IG9yIHJhbmsgMywgb2Ygc2hhcGVcbiAqICAgICBgW2JhdGNoLCBoZWlnaHQsIHdpZHRoLCBpbkNoYW5uZWxzXWAuIElmIHJhbmsgMywgYmF0Y2ggb2YgMSBpc1xuICogYXNzdW1lZC5cbiAqIEBwYXJhbSBmaWx0ZXIgVGhlIGZpbHRlciB0ZW5zb3IsIHJhbmsgNCwgb2Ygc2hhcGVcbiAqICAgICBgW2ZpbHRlckhlaWdodCwgZmlsdGVyV2lkdGgsIGluQ2hhbm5lbHMsIGNoYW5uZWxNdWx0aXBsaWVyXWAuXG4gKiBAcGFyYW0gc3RyaWRlcyBUaGUgc3RyaWRlcyBvZiB0aGUgY29udm9sdXRpb246IGBbc3RyaWRlSGVpZ2h0LFxuICogc3RyaWRlV2lkdGhdYC4gSWYgc3RyaWRlcyBpcyBhIHNpbmdsZSBudW1iZXIsIHRoZW4gYHN0cmlkZUhlaWdodCA9PVxuICogc3RyaWRlV2lkdGhgLlxuICogQHBhcmFtIHBhZCBUaGUgdHlwZSBvZiBwYWRkaW5nIGFsZ29yaXRobS5cbiAqICAgLSBgc2FtZWAgYW5kIHN0cmlkZSAxOiBvdXRwdXQgd2lsbCBiZSBvZiBzYW1lIHNpemUgYXMgaW5wdXQsXG4gKiAgICAgICByZWdhcmRsZXNzIG9mIGZpbHRlciBzaXplLlxuICogICAtIGB2YWxpZGA6IG91dHB1dCB3aWxsIGJlIHNtYWxsZXIgdGhhbiBpbnB1dCBpZiBmaWx0ZXIgaXMgbGFyZ2VyXG4gKiAgICAgICB0aGFuIDF4MS5cbiAqICAgLSBGb3IgbW9yZSBpbmZvLCBzZWUgdGhpcyBndWlkZTpcbiAqICAgICBbaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvYXBpX2RvY3MvcHl0aG9uL3RmL25uL2NvbnZvbHV0aW9uXShcbiAqICAgICAgICAgIGh0dHBzOi8vd3d3LnRlbnNvcmZsb3cub3JnL2FwaV9kb2NzL3B5dGhvbi90Zi9ubi9jb252b2x1dGlvbilcbiAqIEBwYXJhbSBkaWxhdGlvbnMgVGhlIGRpbGF0aW9uIHJhdGVzOiBgW2RpbGF0aW9uSGVpZ2h0LCBkaWxhdGlvbldpZHRoXWBcbiAqICAgICBpbiB3aGljaCB3ZSBzYW1wbGUgaW5wdXQgdmFsdWVzIGFjcm9zcyB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBkaW1lbnNpb25zXG4gKiAgICAgaW4gYXRyb3VzIGNvbnZvbHV0aW9uLiBEZWZhdWx0cyB0byBgWzEsIDFdYC4gSWYgYHJhdGVgIGlzIGEgc2luZ2xlXG4gKiAgICAgbnVtYmVyLCB0aGVuIGBkaWxhdGlvbkhlaWdodCA9PSBkaWxhdGlvbldpZHRoYC4gSWYgaXQgaXMgZ3JlYXRlciB0aGFuXG4gKiAgICAgMSwgdGhlbiBhbGwgdmFsdWVzIG9mIGBzdHJpZGVzYCBtdXN0IGJlIDEuXG4gKiBAcGFyYW0gZGF0YUZvcm1hdDogQW4gb3B0aW9uYWwgc3RyaW5nIGZyb206IFwiTkhXQ1wiLCBcIk5DSFdcIi4gRGVmYXVsdHMgdG9cbiAqICAgICBcIk5IV0NcIi4gU3BlY2lmeSB0aGUgZGF0YSBmb3JtYXQgb2YgdGhlIGlucHV0IGFuZCBvdXRwdXQgZGF0YS4gV2l0aCB0aGVcbiAqICAgICBkZWZhdWx0IGZvcm1hdCBcIk5IV0NcIiwgdGhlIGRhdGEgaXMgc3RvcmVkIGluIHRoZSBvcmRlciBvZjogW2JhdGNoLFxuICogICAgIGhlaWdodCwgd2lkdGgsIGNoYW5uZWxzXS4gT25seSBcIk5IV0NcIiBpcyBjdXJyZW50bHkgc3VwcG9ydGVkLlxuICogQHBhcmFtIGRpbVJvdW5kaW5nTW9kZSBBIHN0cmluZyBmcm9tOiAnY2VpbCcsICdyb3VuZCcsICdmbG9vcicuIElmIG5vbmUgaXNcbiAqICAgICBwcm92aWRlZCwgaXQgd2lsbCBkZWZhdWx0IHRvIHRydW5jYXRlLlxuICogQHBhcmFtIGJpYXMgVGVuc29yIHRvIGJlIGFkZGVkIHRvIHRoZSByZXN1bHQuXG4gKiBAcGFyYW0gYWN0aXZhdGlvbiBOYW1lIG9mIGFjdGl2YXRpb24ga2VybmVsIChkZWZhdWx0cyB0byBgbGluZWFyYCkuXG4gKiBAcGFyYW0gcHJlbHVBY3RpdmF0aW9uV2VpZ2h0cyBUZW5zb3Igb2YgcHJlbHUgd2VpZ2h0cyB0byBiZSBhcHBsaWVkIGFzIHBhcnRcbiAqICAgICBvZiBhIGBwcmVsdWAgYWN0aXZhdGlvbiwgdHlwaWNhbGx5IHRoZSBzYW1lIHNoYXBlIGFzIGB4YC5cbiAqIEBwYXJhbSBsZWFreXJlbHVBbHBoYSBPcHRpb25hbC4gQWxwaGEgdG8gYmUgYXBwbGllZCBhcyBwYXJ0IG9mIGEgYGxlYWt5cmVsdWBcbiAqICAgICBhY3RpdmF0aW9uLlxuICovXG5mdW5jdGlvbiBmdXNlZERlcHRod2lzZUNvbnYyZF88VCBleHRlbmRzIFRlbnNvcjNEfFRlbnNvcjREPih7XG4gIHgsXG4gIGZpbHRlcixcbiAgc3RyaWRlcyxcbiAgcGFkLFxuICBkYXRhRm9ybWF0ID0gJ05IV0MnLFxuICBkaWxhdGlvbnMgPSBbMSwgMV0sXG4gIGRpbVJvdW5kaW5nTW9kZSxcbiAgYmlhcyxcbiAgYWN0aXZhdGlvbiA9ICdsaW5lYXInLFxuICBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLFxuICBsZWFreXJlbHVBbHBoYVxufToge1xuICB4OiBUfFRlbnNvckxpa2UsXG4gIGZpbHRlcjogVGVuc29yNER8VGVuc29yTGlrZSxcbiAgc3RyaWRlczogW251bWJlciwgbnVtYmVyXXxudW1iZXIsXG4gIHBhZDogJ3ZhbGlkJ3wnc2FtZSd8bnVtYmVyLFxuICBkYXRhRm9ybWF0PzogJ05IV0MnfCdOQ0hXJyxcbiAgZGlsYXRpb25zPzogW251bWJlciwgbnVtYmVyXXxudW1iZXIsXG4gIGRpbVJvdW5kaW5nTW9kZT86ICdmbG9vcid8J3JvdW5kJ3wnY2VpbCcsXG4gIGJpYXM/OiBUZW5zb3J8VGVuc29yTGlrZSxcbiAgYWN0aXZhdGlvbj86IEFjdGl2YXRpb24sXG4gIHByZWx1QWN0aXZhdGlvbldlaWdodHM/OiBUZW5zb3IsXG4gIGxlYWt5cmVsdUFscGhhPzogbnVtYmVyXG59KTogVCB7XG4gIGlmIChzaG91bGRGdXNlKEVOR0lORS5zdGF0ZS5ncmFkaWVudERlcHRoLCBhY3RpdmF0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICBsZXQgcmVzdWx0ID0gdW5mdXNlZERlcHRod2lzZUNvbnYyZChcbiAgICAgICAgeCwgZmlsdGVyLCBzdHJpZGVzLCBwYWQsIGRhdGFGb3JtYXQsIGRpbGF0aW9ucywgZGltUm91bmRpbmdNb2RlKTtcbiAgICBpZiAoYmlhcyAhPSBudWxsKSB7XG4gICAgICByZXN1bHQgPSBhZGQocmVzdWx0LCBiaWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXBwbHlBY3RpdmF0aW9uKFxuICAgICAgICAgICAgICAgcmVzdWx0LCBhY3RpdmF0aW9uLCBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLCBsZWFreXJlbHVBbHBoYSkgYXMgVDtcbiAgfVxuXG4gIGNvbnN0ICR4ID0gY29udmVydFRvVGVuc29yKHgsICd4JywgJ2RlcHRod2lzZUNvbnYyZCcsICdmbG9hdDMyJyk7XG4gIGNvbnN0ICRmaWx0ZXIgPVxuICAgICAgY29udmVydFRvVGVuc29yKGZpbHRlciwgJ2ZpbHRlcicsICdkZXB0aHdpc2VDb252MmQnLCAnZmxvYXQzMicpO1xuXG4gIGxldCB4NEQgPSAkeCBhcyBUZW5zb3I0RDtcbiAgbGV0IHJlc2hhcGVkVG80RCA9IGZhbHNlO1xuICBpZiAoJHgucmFuayA9PT0gMykge1xuICAgIHJlc2hhcGVkVG80RCA9IHRydWU7XG4gICAgeDREID0gcmVzaGFwZSgkeCwgWzEsICR4LnNoYXBlWzBdLCAkeC5zaGFwZVsxXSwgJHguc2hhcGVbMl1dKTtcbiAgfVxuICB1dGlsLmFzc2VydChcbiAgICAgIHg0RC5yYW5rID09PSA0LFxuICAgICAgKCkgPT4gYEVycm9yIGluIGZ1c2VkIGRlcHRod2lzZUNvbnYyZDogaW5wdXQgbXVzdCBiZSByYW5rIDQsIGJ1dCBnb3QgYCArXG4gICAgICAgICAgYHJhbmsgJHt4NEQucmFua30uYCk7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgJGZpbHRlci5yYW5rID09PSA0LFxuICAgICAgKCkgPT4gYEVycm9yIGluIGZ1c2VkIGRlcHRod2lzZUNvbnYyZDogZmlsdGVyIG11c3QgYmUgcmFuayA0LCBgICtcbiAgICAgICAgICBgYnV0IGdvdCByYW5rICR7JGZpbHRlci5yYW5rfS5gKTtcbiAgdXRpbC5hc3NlcnQoXG4gICAgICB4NEQuc2hhcGVbM10gPT09ICRmaWx0ZXIuc2hhcGVbMl0sXG4gICAgICAoKSA9PiBgRXJyb3IgaW4gZnVzZWQgZGVwdGh3aXNlQ29udjJkOiBudW1iZXIgb2YgaW5wdXQgY2hhbm5lbHMgYCArXG4gICAgICAgICAgYCgke3g0RC5zaGFwZVszXX0pIG11c3QgbWF0Y2ggdGhlIGluQ2hhbm5lbHMgZGltZW5zaW9uIGluIGAgK1xuICAgICAgICAgIGBmaWx0ZXIgJHskZmlsdGVyLnNoYXBlWzJdfS5gKTtcbiAgaWYgKGRpbGF0aW9ucyA9PSBudWxsKSB7XG4gICAgZGlsYXRpb25zID0gWzEsIDFdO1xuICB9XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgY29udl91dGlsLmVpdGhlclN0cmlkZXNPckRpbGF0aW9uc0FyZU9uZShzdHJpZGVzLCBkaWxhdGlvbnMpLFxuICAgICAgKCkgPT5cbiAgICAgICAgICAnRXJyb3IgaW4gZnVzZWQgZGVwdGh3aXNlQ29udjJkOiBFaXRoZXIgc3RyaWRlcyBvciBkaWxhdGlvbnMgbXVzdCAnICtcbiAgICAgICAgICBgYmUgMS4gR290IHN0cmlkZXMgJHtzdHJpZGVzfSBhbmQgZGlsYXRpb25zICcke2RpbGF0aW9uc30nYCk7XG4gIGNvbnZfdXRpbC5jaGVja1BhZE9uRGltUm91bmRpbmdNb2RlKFxuICAgICAgJ2Z1c2VkIGRlcHRod2lzZUNvbnYyZCcsIHBhZCwgZGltUm91bmRpbmdNb2RlKTtcbiAgY29uc3QgY29udkluZm8gPSBjb252X3V0aWwuY29tcHV0ZUNvbnYyREluZm8oXG4gICAgICB4NEQuc2hhcGUsICRmaWx0ZXIuc2hhcGUsIHN0cmlkZXMsIGRpbGF0aW9ucywgcGFkLCBkaW1Sb3VuZGluZ01vZGUsXG4gICAgICB0cnVlIC8qIGRlcHRod2lzZSAqLyk7XG5cbiAgbGV0ICRiaWFzOiBUZW5zb3I7XG4gIGlmIChiaWFzICE9IG51bGwpIHtcbiAgICAkYmlhcyA9IGNvbnZlcnRUb1RlbnNvcihiaWFzLCAnYmlhcycsICdmdXNlZCBjb252MmQnKTtcbiAgICBbJGJpYXNdID0gbWFrZVR5cGVzTWF0Y2goJGJpYXMsICR4KTtcblxuICAgIGJyb2FkY2FzdF91dGlsLmFzc2VydEFuZEdldEJyb2FkY2FzdFNoYXBlKGNvbnZJbmZvLm91dFNoYXBlLCAkYmlhcy5zaGFwZSk7XG4gIH1cblxuICBsZXQgJHByZWx1QWN0aXZhdGlvbldlaWdodHM6IFRlbnNvcjtcbiAgaWYgKHByZWx1QWN0aXZhdGlvbldlaWdodHMgIT0gbnVsbCkge1xuICAgICRwcmVsdUFjdGl2YXRpb25XZWlnaHRzID0gY29udmVydFRvVGVuc29yKFxuICAgICAgICBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLCAncHJlbHUgd2VpZ2h0cycsICdmdXNlZCBkZXB0aHdpc2VDb252MmQnKTtcbiAgfVxuXG4gIGNvbnN0IGdyYWQgPSAoZHk6IFRlbnNvcjRELCBzYXZlZDogVGVuc29yW10pID0+IHtcbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgY29udl91dGlsLnR1cGxlVmFsdWVzQXJlT25lKGRpbGF0aW9ucyksXG4gICAgICAgICgpID0+ICdFcnJvciBpbiBncmFkaWVudCBvZiBmdXNlZCBkZXB0aHdpc2VDb252MmQ6IGRpbGF0aW9uIHJhdGVzICcgK1xuICAgICAgICAgICAgYGdyZWF0ZXIgdGhhbiAxIGFyZSBub3QgeWV0IHN1cHBvcnRlZC4gR290IGRpbGF0aW9ucyBgICtcbiAgICAgICAgICAgIGAnJHtkaWxhdGlvbnN9J2ApO1xuICAgIGNvbnN0IFskZmlsdGVyLCB4NEQsIHksIGJpYXNdID0gc2F2ZWQ7XG5cbiAgICBjb25zdCBkeUFjdGl2YXRpb24gPSBnZXRGdXNlZER5QWN0aXZhdGlvbihkeSwgeSwgYWN0aXZhdGlvbikgYXMgVGVuc29yNEQ7XG5cbiAgICBjb25zdCB4RGVyID0gZGVwdGh3aXNlQ29udjJkTmF0aXZlQmFja3Byb3BJbnB1dChcbiAgICAgICAgKHg0RCBhcyBUZW5zb3I0RCkuc2hhcGUsIGR5QWN0aXZhdGlvbiwgJGZpbHRlciBhcyBUZW5zb3I0RCwgc3RyaWRlcyxcbiAgICAgICAgcGFkLCBkaWxhdGlvbnMsIGRpbVJvdW5kaW5nTW9kZSk7XG4gICAgY29uc3QgZmlsdGVyRGVyID0gZGVwdGh3aXNlQ29udjJkTmF0aXZlQmFja3Byb3BGaWx0ZXIoXG4gICAgICAgIHg0RCBhcyBUZW5zb3I0RCwgZHlBY3RpdmF0aW9uLCAoJGZpbHRlciBhcyBUZW5zb3I0RCkuc2hhcGUsIHN0cmlkZXMsXG4gICAgICAgIHBhZCwgZGlsYXRpb25zLCBkaW1Sb3VuZGluZ01vZGUpO1xuXG4gICAgaWYgKGJpYXMgIT0gbnVsbCkge1xuICAgICAgY29uc3QgYmlhc0RlciA9IGdldEZ1c2VkQmlhc0dyYWRpZW50KCRiaWFzLCBkeUFjdGl2YXRpb24pO1xuICAgICAgcmV0dXJuIFt4RGVyLCBmaWx0ZXJEZXIsIGJpYXNEZXJdO1xuICAgIH1cbiAgICByZXR1cm4gW3hEZXIsIGZpbHRlckRlcl07XG4gIH07XG5cbiAgY29uc3QgaW5wdXRzOiBGdXNlZERlcHRod2lzZUNvbnYyRElucHV0cyA9IHtcbiAgICB4OiB4NEQsXG4gICAgZmlsdGVyOiAkZmlsdGVyLFxuICAgIGJpYXM6ICRiaWFzLFxuICAgIHByZWx1QWN0aXZhdGlvbldlaWdodHM6ICRwcmVsdUFjdGl2YXRpb25XZWlnaHRzXG4gIH07XG4gIGNvbnN0IGF0dHJzOiBGdXNlZERlcHRod2lzZUNvbnYyREF0dHJzID0ge1xuICAgIHN0cmlkZXMsXG4gICAgcGFkLFxuICAgIGRhdGFGb3JtYXQsXG4gICAgZGlsYXRpb25zLFxuICAgIGRpbVJvdW5kaW5nTW9kZSxcbiAgICBhY3RpdmF0aW9uLFxuICAgIGxlYWt5cmVsdUFscGhhXG4gIH07XG5cbiAgLy8gRGVwZW5kaW5nIG9uIHRoZSB0aGUgcGFyYW1zIHBhc3NlZCBpbiB3ZSB3aWxsIGhhdmUgZGlmZmVyZW50IG51bWJlciBvZlxuICAvLyBpbnB1dHMgYW5kIHRodXMgYSBhIGRpZmZlcmVudCBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGdyYWRpZW50LlxuICBpZiAoYmlhcyA9PSBudWxsKSB7XG4gICAgY29uc3QgY3VzdG9tT3AgPVxuICAgICAgICBjdXN0b21HcmFkKCh4NEQ6IFRlbnNvcjRELCBmaWx0ZXI6IFRlbnNvcjRELCBzYXZlOiBHcmFkU2F2ZUZ1bmMpID0+IHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gICAgICAgICAgbGV0IHJlczogVGVuc29yNER8VGVuc29yM0QgPSBFTkdJTkUucnVuS2VybmVsKFxuICAgICAgICAgICAgICBGdXNlZERlcHRod2lzZUNvbnYyRCwgaW5wdXRzIGFzIHVua25vd24gYXMgTmFtZWRUZW5zb3JNYXAsXG4gICAgICAgICAgICAgIGF0dHJzIGFzIHVua25vd24gYXMgTmFtZWRBdHRyTWFwKTtcblxuICAgICAgICAgIHNhdmUoW2ZpbHRlciwgeDRELCByZXNdKTtcblxuICAgICAgICAgIGlmIChyZXNoYXBlZFRvNEQpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgICAgICAgICAgIHJlcyA9IHJlc2hhcGUocmVzLCBbcmVzLnNoYXBlWzFdLCByZXMuc2hhcGVbMl0sIHJlcy5zaGFwZVszXV0pIGFzXG4gICAgICAgICAgICAgICAgVGVuc29yM0Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHt2YWx1ZTogcmVzLCBncmFkRnVuYzogZ3JhZH07XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBjdXN0b21PcCh4NEQsICRmaWx0ZXIpIGFzIFQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY3VzdG9tT3BXaXRoQmlhcyA9IGN1c3RvbUdyYWQoXG4gICAgICAgICh4NEQ6IFRlbnNvcjRELCBmaWx0ZXI6IFRlbnNvcjRELCBiaWFzOiBUZW5zb3IsIHNhdmU6IEdyYWRTYXZlRnVuYykgPT4ge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgICAgICAgICBsZXQgcmVzOiBUZW5zb3I0RHxUZW5zb3IzRCA9IEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICAgICAgICAgIEZ1c2VkRGVwdGh3aXNlQ29udjJELCBpbnB1dHMgYXMgdW5rbm93biBhcyBOYW1lZFRlbnNvck1hcCxcbiAgICAgICAgICAgICAgYXR0cnMgYXMgdW5rbm93biBhcyBOYW1lZEF0dHJNYXApO1xuXG4gICAgICAgICAgc2F2ZShbZmlsdGVyLCB4NEQsIHJlcywgYmlhc10pO1xuXG4gICAgICAgICAgaWYgKHJlc2hhcGVkVG80RCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgICAgICAgICAgcmVzID0gcmVzaGFwZShyZXMsIFtyZXMuc2hhcGVbMV0sIHJlcy5zaGFwZVsyXSwgcmVzLnNoYXBlWzNdXSkgYXNcbiAgICAgICAgICAgICAgICBUZW5zb3IzRDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge3ZhbHVlOiByZXMsIGdyYWRGdW5jOiBncmFkfTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY3VzdG9tT3BXaXRoQmlhcyh4NEQsICRmaWx0ZXIsICRiaWFzKSBhcyBUO1xuICB9XG59XG5leHBvcnQgY29uc3QgZGVwdGh3aXNlQ29udjJkID0gLyogQF9fUFVSRV9fICovIG9wKHtmdXNlZERlcHRod2lzZUNvbnYyZF99KTtcbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused/mat_mul.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "matMul",
    ()=>matMul
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/gradients.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/kernel_names.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/tensor_util_env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/util_base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/broadcast_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/fused_util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/mat_mul.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/operation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-client] (ecmascript)");
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
 * Computes the dot product of two matrices with optional activation and bias.
 *
 * ```js
 * const a = tf.tensor2d([-1, -2], [1, 2]);
 * const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
 * const bias = tf.tensor2d([1, 2], [1, 2]);
 *
 * tf.fused.matMul({a, b, bias, activation: 'relu'}).print();
 * ```
 *
 * @param obj An object with the following properties:
 * - `a` First matrix in dot product operation.
 * - `b` Second matrix in dot product operation.
 * - `transposeA` If true, `a` is transposed before multiplication.
 * - `transposeB` If true, `b` is transposed before multiplication.
 * - `bias` Matrix to be added to the result.
 * - `activation` Name of activation kernel (defaults to `linear`).
 * - `preluActivationWeights` Tensor of prelu weights.
 * - `leakyreluAlpha` Alpha of leakyrelu.
 */ function fusedMatMul_({ a, b, transposeA = false, transposeB = false, bias, activation = 'linear', preluActivationWeights, leakyreluAlpha = 0.2 }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldFuse"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].state.gradientDepth, activation) === false) {
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(a, b, transposeA, transposeB);
        if (bias != null) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"])(result, bias);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyActivation"])(result, activation, preluActivationWeights, leakyreluAlpha);
    }
    let $a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(a, 'a', 'fused matMul');
    let $b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(b, 'b', 'fused matMul');
    [$a, $b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTypesMatch"])($a, $b);
    const innerShapeA = transposeA ? $a.shape[$a.rank - 2] : $a.shape[$a.rank - 1];
    const innerShapeB = transposeB ? $b.shape[$b.rank - 1] : $b.shape[$b.rank - 2];
    const outerShapeA = transposeA ? $a.shape[$a.rank - 1] : $a.shape[$a.rank - 2];
    const outerShapeB = transposeB ? $b.shape[$b.rank - 2] : $b.shape[$b.rank - 1];
    const outerDimsA = $a.shape.slice(0, -2);
    const outerDimsB = $b.shape.slice(0, -2);
    const batchDimA = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeFromShape"](outerDimsA);
    const batchDimB = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeFromShape"](outerDimsB);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util_base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"](innerShapeA === innerShapeB, ()=>`Error in fused matMul: inner shapes (${innerShapeA}) and (` + `${innerShapeB}) of Tensors with shapes ${$a.shape} and ` + `${$b.shape} and transposeA=${transposeA}` + ` and transposeB=${transposeB} must match.`);
    const outShapeOuterDims = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAndGetBroadcastShape"]($a.shape.slice(0, -2), $b.shape.slice(0, -2));
    const outShape = outShapeOuterDims.concat([
        outerShapeA,
        outerShapeB
    ]);
    const a3D = transposeA ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($a, [
        batchDimA,
        innerShapeA,
        outerShapeA
    ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($a, [
        batchDimA,
        outerShapeA,
        innerShapeA
    ]);
    const b3D = transposeB ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($b, [
        batchDimB,
        outerShapeB,
        innerShapeB
    ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])($b, [
        batchDimB,
        innerShapeB,
        outerShapeB
    ]);
    let $bias;
    if (bias != null) {
        $bias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(bias, 'bias', 'fused matMul');
        [$bias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeTypesMatch"])($bias, $a);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$broadcast_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertAndGetBroadcastShape"](outShape, $bias.shape);
    }
    let $preluActivationWeights;
    if (preluActivationWeights != null) {
        $preluActivationWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor_util_env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToTensor"])(preluActivationWeights, 'prelu weights', 'fused matMul');
    }
    const grad = (dy, saved)=>{
        const [a3D, b3D, y, $bias] = saved;
        // we reshape dy because the result of the forward is not
        // necessarily going to be a 3d tensor due to a reshape done at the end of
        // the customOp.
        const dyActivation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedDyActivation"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(dy, y.shape), y, activation);
        let aDer;
        let bDer;
        if (!transposeA && !transposeB) {
            aDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(dyActivation, b3D, false, true);
            bDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(a3D, dyActivation, true, false);
        } else if (!transposeA && transposeB) {
            aDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(dyActivation, b3D, false, false);
            bDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(dyActivation, a3D, true, false);
        } else if (transposeA && !transposeB) {
            aDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(b3D, dyActivation, false, true);
            bDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(a3D, dyActivation, false, false);
        } else {
            aDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(b3D, dyActivation, true, true);
            bDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mat_mul$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"])(dyActivation, a3D, true, true);
        }
        if (bias != null) {
            const biasDer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$fused_util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFusedBiasGradient"])($bias, dyActivation);
            return [
                aDer,
                bDer,
                biasDer
            ];
        } else {
            return [
                aDer,
                bDer
            ];
        }
    };
    const inputs = {
        a: a3D,
        b: b3D,
        bias: $bias,
        preluActivationWeights: $preluActivationWeights
    };
    const attrs = {
        transposeA,
        transposeB,
        activation,
        leakyreluAlpha
    };
    // Depending on the the params passed in we will have different number of
    // inputs and thus a a different number of elements in the gradient.
    if (bias == null) {
        const customOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customGrad"])((a3D, b3D, save)=>{
            const res = // tslint:disable-next-line: no-unnecessary-type-assertion
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_FusedMatMul"], inputs, attrs);
            save([
                a3D,
                b3D,
                res
            ]);
            return {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, outShape),
                gradFunc: grad
            };
        });
        return customOp(a3D, b3D);
    } else {
        const customOpWithBias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$gradients$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customGrad"])((a3D, b3D, $bias, save)=>{
            const res = // tslint:disable-next-line: no-unnecessary-type-assertion
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENGINE"].runKernel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$kernel_names$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_FusedMatMul"], inputs, attrs);
            save([
                a3D,
                b3D,
                res,
                $bias
            ]);
            return {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"])(res, outShape),
                gradFunc: grad
            };
        });
        return customOpWithBias(a3D, b3D, $bias);
    }
}
const matMul = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$operation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["op"])({
    fusedMatMul_
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0X211bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RmanMtY29yZS9zcmMvb3BzL2Z1c2VkL21hdF9tdWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBd0MsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXRELE9BQU8sS0FBSyxJQUFJLE1BQU0sWUFBWSxDQUFDO0FBRW5DLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDM0IsT0FBTyxLQUFLLGNBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUMsTUFBTSxJQUFJLGFBQWEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuRCxPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0gsU0FBUyxZQUFZLENBQUMsRUFDcEIsQ0FBQyxFQUNELENBQUMsRUFDRCxVQUFVLEdBQUcsS0FBSyxFQUNsQixVQUFVLEdBQUcsS0FBSyxFQUNsQixJQUFJLEVBQ0osVUFBVSxHQUFHLFFBQVEsRUFDckIsc0JBQXNCLEVBQ3RCLGNBQWMsR0FBRyxHQUFHLEdBVXJCO0lBQ0csSUFBSSxVQUFV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QUFFLEdBQWEsRUFBRSxLQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2xFLE1BQU0sR0FBRztZQUNMLDBEQUEwRDtZQUMxRCxNQUFNLENBQUMsU0FBUyxDQUNaLFlBQVksRUFBRSxNQUFtQyxFQUNqRCxLQUFnQyxDQUFXLENBQUM7WUFFcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUU3QixPQUFPLEVBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHtFTkdJTkV9IGZyb20gJy4uLy4uL2VuZ2luZSc7XG5pbXBvcnQge2N1c3RvbUdyYWR9IGZyb20gJy4uLy4uL2dyYWRpZW50cyc7XG5pbXBvcnQge19GdXNlZE1hdE11bCwgX0Z1c2VkTWF0TXVsQXR0cnMsIF9GdXNlZE1hdE11bElucHV0c30gZnJvbSAnLi4vLi4va2VybmVsX25hbWVzJztcbmltcG9ydCB7TmFtZWRBdHRyTWFwfSBmcm9tICcuLi8uLi9rZXJuZWxfcmVnaXN0cnknO1xuaW1wb3J0IHtUZW5zb3IsIFRlbnNvcjNEfSBmcm9tICcuLi8uLi90ZW5zb3InO1xuaW1wb3J0IHtHcmFkU2F2ZUZ1bmMsIE5hbWVkVGVuc29yTWFwfSBmcm9tICcuLi8uLi90ZW5zb3JfdHlwZXMnO1xuaW1wb3J0IHttYWtlVHlwZXNNYXRjaH0gZnJvbSAnLi4vLi4vdGVuc29yX3V0aWwnO1xuaW1wb3J0IHtjb252ZXJ0VG9UZW5zb3J9IGZyb20gJy4uLy4uL3RlbnNvcl91dGlsX2Vudic7XG5pbXBvcnQge1RlbnNvckxpa2V9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmltcG9ydCB7YWRkfSBmcm9tICcuLi9hZGQnO1xuaW1wb3J0ICogYXMgYnJvYWRjYXN0X3V0aWwgZnJvbSAnLi4vYnJvYWRjYXN0X3V0aWwnO1xuaW1wb3J0IHtBY3RpdmF0aW9ufSBmcm9tICcuLi9mdXNlZF90eXBlcyc7XG5pbXBvcnQge2FwcGx5QWN0aXZhdGlvbiwgZ2V0RnVzZWRCaWFzR3JhZGllbnQsIGdldEZ1c2VkRHlBY3RpdmF0aW9uLCBzaG91bGRGdXNlfSBmcm9tICcuLi9mdXNlZF91dGlsJztcbmltcG9ydCB7bWF0TXVsIGFzIHVuZnVzZWRNYXRNdWx9IGZyb20gJy4uL21hdF9tdWwnO1xuaW1wb3J0IHtvcH0gZnJvbSAnLi4vb3BlcmF0aW9uJztcbmltcG9ydCB7cmVzaGFwZX0gZnJvbSAnLi4vcmVzaGFwZSc7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBtYXRyaWNlcyB3aXRoIG9wdGlvbmFsIGFjdGl2YXRpb24gYW5kIGJpYXMuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGEgPSB0Zi50ZW5zb3IyZChbLTEsIC0yXSwgWzEsIDJdKTtcbiAqIGNvbnN0IGIgPSB0Zi50ZW5zb3IyZChbMSwgMiwgMywgNF0sIFsyLCAyXSk7XG4gKiBjb25zdCBiaWFzID0gdGYudGVuc29yMmQoWzEsIDJdLCBbMSwgMl0pO1xuICpcbiAqIHRmLmZ1c2VkLm1hdE11bCh7YSwgYiwgYmlhcywgYWN0aXZhdGlvbjogJ3JlbHUnfSkucHJpbnQoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBvYmogQW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogLSBgYWAgRmlyc3QgbWF0cml4IGluIGRvdCBwcm9kdWN0IG9wZXJhdGlvbi5cbiAqIC0gYGJgIFNlY29uZCBtYXRyaXggaW4gZG90IHByb2R1Y3Qgb3BlcmF0aW9uLlxuICogLSBgdHJhbnNwb3NlQWAgSWYgdHJ1ZSwgYGFgIGlzIHRyYW5zcG9zZWQgYmVmb3JlIG11bHRpcGxpY2F0aW9uLlxuICogLSBgdHJhbnNwb3NlQmAgSWYgdHJ1ZSwgYGJgIGlzIHRyYW5zcG9zZWQgYmVmb3JlIG11bHRpcGxpY2F0aW9uLlxuICogLSBgYmlhc2AgTWF0cml4IHRvIGJlIGFkZGVkIHRvIHRoZSByZXN1bHQuXG4gKiAtIGBhY3RpdmF0aW9uYCBOYW1lIG9mIGFjdGl2YXRpb24ga2VybmVsIChkZWZhdWx0cyB0byBgbGluZWFyYCkuXG4gKiAtIGBwcmVsdUFjdGl2YXRpb25XZWlnaHRzYCBUZW5zb3Igb2YgcHJlbHUgd2VpZ2h0cy5cbiAqIC0gYGxlYWt5cmVsdUFscGhhYCBBbHBoYSBvZiBsZWFreXJlbHUuXG4gKi9cbmZ1bmN0aW9uIGZ1c2VkTWF0TXVsXyh7XG4gIGEsXG4gIGIsXG4gIHRyYW5zcG9zZUEgPSBmYWxzZSxcbiAgdHJhbnNwb3NlQiA9IGZhbHNlLFxuICBiaWFzLFxuICBhY3RpdmF0aW9uID0gJ2xpbmVhcicsXG4gIHByZWx1QWN0aXZhdGlvbldlaWdodHMsXG4gIGxlYWt5cmVsdUFscGhhID0gMC4yLFxufToge1xuICBhOiBUZW5zb3J8VGVuc29yTGlrZSxcbiAgYjogVGVuc29yfFRlbnNvckxpa2UsXG4gIHRyYW5zcG9zZUE/OiBib29sZWFuLFxuICB0cmFuc3Bvc2VCPzogYm9vbGVhbixcbiAgYmlhcz86IFRlbnNvcnxUZW5zb3JMaWtlLFxuICBhY3RpdmF0aW9uPzogQWN0aXZhdGlvbixcbiAgcHJlbHVBY3RpdmF0aW9uV2VpZ2h0cz86IFRlbnNvclxuICBsZWFreXJlbHVBbHBoYT86IG51bWJlclxufSk6IFRlbnNvciB7XG4gICAgaWYgKHNob3VsZEZ1c2UoRU5HSU5FLnN0YXRlLmdyYWRpZW50RGVwdGgsIGFjdGl2YXRpb24pID09PSBmYWxzZSkge1xuICAgICAgbGV0IHJlc3VsdCA9IHVuZnVzZWRNYXRNdWwoYSwgYiwgdHJhbnNwb3NlQSwgdHJhbnNwb3NlQik7XG4gICAgICBpZiAoYmlhcyAhPSBudWxsKSB7XG4gICAgICAgIHJlc3VsdCA9IGFkZChyZXN1bHQsIGJpYXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbHlBY3RpdmF0aW9uKFxuICAgICAgICAgICAgICAgICByZXN1bHQsIGFjdGl2YXRpb24sIHByZWx1QWN0aXZhdGlvbldlaWdodHMsIGxlYWt5cmVsdUFscGhhKTtcbiAgICB9XG5cbiAgICBsZXQgJGEgPSBjb252ZXJ0VG9UZW5zb3IoYSwgJ2EnLCAnZnVzZWQgbWF0TXVsJyk7XG4gICAgbGV0ICRiID0gY29udmVydFRvVGVuc29yKGIsICdiJywgJ2Z1c2VkIG1hdE11bCcpO1xuICAgIFskYSwgJGJdID0gbWFrZVR5cGVzTWF0Y2goJGEsICRiKTtcblxuICAgIGNvbnN0IGlubmVyU2hhcGVBID1cbiAgICAgICAgdHJhbnNwb3NlQSA/ICRhLnNoYXBlWyRhLnJhbmsgLSAyXSA6ICRhLnNoYXBlWyRhLnJhbmsgLSAxXTtcbiAgICBjb25zdCBpbm5lclNoYXBlQiA9XG4gICAgICAgIHRyYW5zcG9zZUIgPyAkYi5zaGFwZVskYi5yYW5rIC0gMV0gOiAkYi5zaGFwZVskYi5yYW5rIC0gMl07XG5cbiAgICBjb25zdCBvdXRlclNoYXBlQSA9XG4gICAgICAgIHRyYW5zcG9zZUEgPyAkYS5zaGFwZVskYS5yYW5rIC0gMV0gOiAkYS5zaGFwZVskYS5yYW5rIC0gMl07XG4gICAgY29uc3Qgb3V0ZXJTaGFwZUIgPVxuICAgICAgICB0cmFuc3Bvc2VCID8gJGIuc2hhcGVbJGIucmFuayAtIDJdIDogJGIuc2hhcGVbJGIucmFuayAtIDFdO1xuXG4gICAgY29uc3Qgb3V0ZXJEaW1zQSA9ICRhLnNoYXBlLnNsaWNlKDAsIC0yKTtcbiAgICBjb25zdCBvdXRlckRpbXNCID0gJGIuc2hhcGUuc2xpY2UoMCwgLTIpO1xuICAgIGNvbnN0IGJhdGNoRGltQSA9IHV0aWwuc2l6ZUZyb21TaGFwZShvdXRlckRpbXNBKTtcbiAgICBjb25zdCBiYXRjaERpbUIgPSB1dGlsLnNpemVGcm9tU2hhcGUob3V0ZXJEaW1zQik7XG5cbiAgICB1dGlsLmFzc2VydChcbiAgICAgICAgaW5uZXJTaGFwZUEgPT09IGlubmVyU2hhcGVCLFxuICAgICAgICAoKSA9PiBgRXJyb3IgaW4gZnVzZWQgbWF0TXVsOiBpbm5lciBzaGFwZXMgKCR7aW5uZXJTaGFwZUF9KSBhbmQgKGAgK1xuICAgICAgICAgICAgYCR7aW5uZXJTaGFwZUJ9KSBvZiBUZW5zb3JzIHdpdGggc2hhcGVzICR7JGEuc2hhcGV9IGFuZCBgICtcbiAgICAgICAgICAgIGAkeyRiLnNoYXBlfSBhbmQgdHJhbnNwb3NlQT0ke3RyYW5zcG9zZUF9YCArXG4gICAgICAgICAgICBgIGFuZCB0cmFuc3Bvc2VCPSR7dHJhbnNwb3NlQn0gbXVzdCBtYXRjaC5gKTtcblxuICAgIGNvbnN0IG91dFNoYXBlT3V0ZXJEaW1zID0gYnJvYWRjYXN0X3V0aWwuYXNzZXJ0QW5kR2V0QnJvYWRjYXN0U2hhcGUoXG4gICAgICAgICRhLnNoYXBlLnNsaWNlKDAsIC0yKSwgJGIuc2hhcGUuc2xpY2UoMCwgLTIpKTtcbiAgICBjb25zdCBvdXRTaGFwZSA9IG91dFNoYXBlT3V0ZXJEaW1zLmNvbmNhdChbb3V0ZXJTaGFwZUEsIG91dGVyU2hhcGVCXSk7XG5cbiAgICBjb25zdCBhM0Q6IFRlbnNvcjNEID0gdHJhbnNwb3NlQSA/XG4gICAgICAgIHJlc2hhcGUoJGEsIFtiYXRjaERpbUEsIGlubmVyU2hhcGVBLCBvdXRlclNoYXBlQV0pIDpcbiAgICAgICAgcmVzaGFwZSgkYSwgW2JhdGNoRGltQSwgb3V0ZXJTaGFwZUEsIGlubmVyU2hhcGVBXSk7XG4gICAgY29uc3QgYjNEOiBUZW5zb3IzRCA9IHRyYW5zcG9zZUIgP1xuICAgICAgICByZXNoYXBlKCRiLCBbYmF0Y2hEaW1CLCBvdXRlclNoYXBlQiwgaW5uZXJTaGFwZUJdKSA6XG4gICAgICAgIHJlc2hhcGUoJGIsIFtiYXRjaERpbUIsIGlubmVyU2hhcGVCLCBvdXRlclNoYXBlQl0pO1xuXG4gICAgbGV0ICRiaWFzOiBUZW5zb3I7XG4gICAgaWYgKGJpYXMgIT0gbnVsbCkge1xuICAgICAgJGJpYXMgPSBjb252ZXJ0VG9UZW5zb3IoYmlhcywgJ2JpYXMnLCAnZnVzZWQgbWF0TXVsJyk7XG4gICAgICBbJGJpYXNdID0gbWFrZVR5cGVzTWF0Y2goJGJpYXMsICRhKTtcblxuICAgICAgYnJvYWRjYXN0X3V0aWwuYXNzZXJ0QW5kR2V0QnJvYWRjYXN0U2hhcGUob3V0U2hhcGUsICRiaWFzLnNoYXBlKTtcbiAgICB9XG5cbiAgICBsZXQgJHByZWx1QWN0aXZhdGlvbldlaWdodHM6IFRlbnNvcjtcbiAgICBpZiAocHJlbHVBY3RpdmF0aW9uV2VpZ2h0cyAhPSBudWxsKSB7XG4gICAgICAkcHJlbHVBY3RpdmF0aW9uV2VpZ2h0cyA9IGNvbnZlcnRUb1RlbnNvcihcbiAgICAgICAgICBwcmVsdUFjdGl2YXRpb25XZWlnaHRzLCAncHJlbHUgd2VpZ2h0cycsICdmdXNlZCBtYXRNdWwnKTtcbiAgICB9XG5cbiAgICBjb25zdCBncmFkID0gKGR5OiBUZW5zb3IzRCwgc2F2ZWQ6IFRlbnNvcltdKSA9PiB7XG4gICAgICBjb25zdCBbYTNELCBiM0QsIHksICRiaWFzXSA9IHNhdmVkO1xuICAgICAgLy8gd2UgcmVzaGFwZSBkeSBiZWNhdXNlIHRoZSByZXN1bHQgb2YgdGhlIGZvcndhcmQgaXMgbm90XG4gICAgICAvLyBuZWNlc3NhcmlseSBnb2luZyB0byBiZSBhIDNkIHRlbnNvciBkdWUgdG8gYSByZXNoYXBlIGRvbmUgYXQgdGhlIGVuZCBvZlxuICAgICAgLy8gdGhlIGN1c3RvbU9wLlxuICAgICAgY29uc3QgZHlBY3RpdmF0aW9uID1cbiAgICAgICAgICBnZXRGdXNlZER5QWN0aXZhdGlvbihyZXNoYXBlKGR5LCB5LnNoYXBlKSwgeSwgYWN0aXZhdGlvbik7XG4gICAgICBsZXQgYURlcjogVGVuc29yO1xuICAgICAgbGV0IGJEZXI6IFRlbnNvcjtcblxuICAgICAgaWYgKCF0cmFuc3Bvc2VBICYmICF0cmFuc3Bvc2VCKSB7XG4gICAgICAgIGFEZXIgPSB1bmZ1c2VkTWF0TXVsKGR5QWN0aXZhdGlvbiwgYjNELCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIGJEZXIgPSB1bmZ1c2VkTWF0TXVsKGEzRCwgZHlBY3RpdmF0aW9uLCB0cnVlLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKCF0cmFuc3Bvc2VBICYmIHRyYW5zcG9zZUIpIHtcbiAgICAgICAgYURlciA9IHVuZnVzZWRNYXRNdWwoZHlBY3RpdmF0aW9uLCBiM0QsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGJEZXIgPSB1bmZ1c2VkTWF0TXVsKGR5QWN0aXZhdGlvbiwgYTNELCB0cnVlLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zcG9zZUEgJiYgIXRyYW5zcG9zZUIpIHtcbiAgICAgICAgYURlciA9IHVuZnVzZWRNYXRNdWwoYjNELCBkeUFjdGl2YXRpb24sIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgYkRlciA9IHVuZnVzZWRNYXRNdWwoYTNELCBkeUFjdGl2YXRpb24sIGZhbHNlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhRGVyID0gdW5mdXNlZE1hdE11bChiM0QsIGR5QWN0aXZhdGlvbiwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGJEZXIgPSB1bmZ1c2VkTWF0TXVsKGR5QWN0aXZhdGlvbiwgYTNELCB0cnVlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpYXMgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBiaWFzRGVyID0gZ2V0RnVzZWRCaWFzR3JhZGllbnQoJGJpYXMsIGR5QWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiBbYURlciwgYkRlciwgYmlhc0Rlcl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW2FEZXIsIGJEZXJdO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpbnB1dHM6IF9GdXNlZE1hdE11bElucHV0cyA9IHtcbiAgICAgIGE6IGEzRCxcbiAgICAgIGI6IGIzRCxcbiAgICAgIGJpYXM6ICRiaWFzLFxuICAgICAgcHJlbHVBY3RpdmF0aW9uV2VpZ2h0czogJHByZWx1QWN0aXZhdGlvbldlaWdodHNcbiAgICB9O1xuICAgIGNvbnN0IGF0dHJzOiBfRnVzZWRNYXRNdWxBdHRycyA9XG4gICAgICAgIHt0cmFuc3Bvc2VBLCB0cmFuc3Bvc2VCLCBhY3RpdmF0aW9uLCBsZWFreXJlbHVBbHBoYX07XG5cbiAgICAvLyBEZXBlbmRpbmcgb24gdGhlIHRoZSBwYXJhbXMgcGFzc2VkIGluIHdlIHdpbGwgaGF2ZSBkaWZmZXJlbnQgbnVtYmVyIG9mXG4gICAgLy8gaW5wdXRzIGFuZCB0aHVzIGEgYSBkaWZmZXJlbnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBncmFkaWVudC5cbiAgICBpZiAoYmlhcyA9PSBudWxsKSB7XG4gICAgICBjb25zdCBjdXN0b21PcCA9XG4gICAgICAgICAgY3VzdG9tR3JhZCgoYTNEOiBUZW5zb3IzRCwgYjNEOiBUZW5zb3IzRCwgc2F2ZTogR3JhZFNhdmVGdW5jKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXMgPVxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb25cbiAgICAgICAgICAgICAgICBFTkdJTkUucnVuS2VybmVsKFxuICAgICAgICAgICAgICAgICAgICBfRnVzZWRNYXRNdWwsIGlucHV0cyBhcyB1bmtub3duIGFzIE5hbWVkVGVuc29yTWFwLFxuICAgICAgICAgICAgICAgICAgICBhdHRycyBhcyB1bmtub3duIGFzIE5hbWVkQXR0ck1hcCkgYXMgVGVuc29yO1xuXG4gICAgICAgICAgICBzYXZlKFthM0QsIGIzRCwgcmVzXSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IHJlc2hhcGUocmVzLCBvdXRTaGFwZSksIGdyYWRGdW5jOiBncmFkfTtcbiAgICAgICAgICB9KTtcbiAgICAgIHJldHVybiBjdXN0b21PcChhM0QsIGIzRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1c3RvbU9wV2l0aEJpYXMgPSBjdXN0b21HcmFkKFxuICAgICAgICAgIChhM0Q6IFRlbnNvcjNELCBiM0Q6IFRlbnNvcjNELCAkYmlhczogVGVuc29yLCBzYXZlOiBHcmFkU2F2ZUZ1bmMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bm5lY2Vzc2FyeS10eXBlLWFzc2VydGlvblxuICAgICAgICAgICAgICAgIEVOR0lORS5ydW5LZXJuZWwoXG4gICAgICAgICAgICAgICAgICAgIF9GdXNlZE1hdE11bCwgaW5wdXRzIGFzIHVua25vd24gYXMgTmFtZWRUZW5zb3JNYXAsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzIGFzIHVua25vd24gYXMgTmFtZWRBdHRyTWFwKSBhcyBUZW5zb3I7XG5cbiAgICAgICAgICAgIHNhdmUoW2EzRCwgYjNELCByZXMsICRiaWFzXSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IHJlc2hhcGUocmVzLCBvdXRTaGFwZSksIGdyYWRGdW5jOiBncmFkfTtcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIGN1c3RvbU9wV2l0aEJpYXMoYTNELCBiM0QsICRiaWFzKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY29uc3QgbWF0TXVsID0gLyogQF9fUFVSRV9fICovIG9wKHtmdXNlZE1hdE11bF99KTtcbiJdfQ==
}),
]);

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-core_dist_ops_fused_b7b57294._.js.map