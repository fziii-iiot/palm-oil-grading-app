module.exports = [
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source: keras/engine/topology.py */ __turbopack_context__.s([
    "InputSpec",
    ()=>InputSpec,
    "Layer",
    ()=>Layer,
    "Node",
    ()=>Node,
    "SymbolicTensor",
    ()=>SymbolicTensor,
    "getSourceInputs",
    ()=>getSourceInputs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/initializers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$variable_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/variable_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/variables.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class InputSpec {
    constructor(args){
        this.dtype = args.dtype;
        this.shape = args.shape;
        /*
          TODO(michaelterry): Could throw error if ndim and shape are both defined
            (then backport).
        */ if (args.shape != null) {
            this.ndim = args.shape.length;
        } else {
            this.ndim = args.ndim;
        }
        this.maxNDim = args.maxNDim;
        this.minNDim = args.minNDim;
        this.axes = args.axes || {};
    }
}
class SymbolicTensor {
    /**
     *
     * @param dtype
     * @param shape
     * @param sourceLayer The Layer that produced this symbolic tensor.
     * @param inputs The inputs passed to sourceLayer's __call__() method.
     * @param nodeIndex
     * @param tensorIndex
     * @param callArgs The keyword arguments passed to the __call__() method.
     * @param name
     * @param outputTensorIndex The index of this tensor in the list of outputs
     *   returned by apply().
     */ constructor(dtype, shape, sourceLayer, inputs, callArgs, name, outputTensorIndex){
        this.dtype = dtype;
        this.shape = shape;
        this.sourceLayer = sourceLayer;
        this.inputs = inputs;
        this.callArgs = callArgs;
        this.outputTensorIndex = outputTensorIndex;
        this.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextUniqueTensorId"])();
        if (name != null) {
            this.originalName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScopedTensorName"])(name);
            this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUniqueTensorName"])(this.originalName);
        }
        this.rank = shape.length;
    }
}
let _nextNodeID = 0;
class Node {
    constructor(args, // TODO(michaelterry): Define actual type for this.
    callArgs){
        this.callArgs = callArgs;
        this.id = _nextNodeID++;
        /*
          Layer instance (NOT a list).
          this is the layer that takes a list of input tensors
          and turns them into a list of output tensors.
          the current node will be added to
          the inboundNodes of outboundLayer.
        */ this.outboundLayer = args.outboundLayer;
        /*
            The following 3 properties describe where
            the input tensors come from: which layers,
            and for each layer, which node and which
            tensor output of each node.
        */ // List of layer instances.
        this.inboundLayers = args.inboundLayers;
        // List of integers, 1:1 mapping with inboundLayers.
        this.nodeIndices = args.nodeIndices;
        // List of integers, 1:1 mapping with inboundLayers.
        this.tensorIndices = args.tensorIndices;
        /*
            Following 2 properties:
            tensor inputs and outputs of outboundLayer.
        */ // List of tensors. 1:1 mapping with inboundLayers.
        this.inputTensors = args.inputTensors;
        // List of tensors, created by outboundLayer.call().
        this.outputTensors = args.outputTensors;
        /*
            Following 2 properties: input and output masks.
            List of tensors, 1:1 mapping with inputTensor.
        */ this.inputMasks = args.inputMasks;
        // List of tensors, created by outboundLayer.computeMask().
        this.outputMasks = args.outputMasks;
        // Following 2 properties: input and output shapes.
        // List of shape tuples, shapes of inputTensors.
        this.inputShapes = args.inputShapes;
        // List of shape tuples, shapes of outputTensors.
        this.outputShapes = args.outputShapes;
        // Add nodes to all layers involved.
        for (const layer of args.inboundLayers){
            if (layer != null) {
                layer.outboundNodes.push(this);
            }
        }
        args.outboundLayer.inboundNodes.push(this);
    }
    getConfig() {
        const inboundNames = [];
        for (const layer of this.inboundLayers){
            if (layer != null) {
                inboundNames.push(layer.name);
            } else {
                inboundNames.push(null);
            }
        }
        return {
            outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
            inboundLayers: inboundNames,
            nodeIndices: this.nodeIndices,
            tensorIndices: this.tensorIndices
        };
    }
}
let _nextLayerID = 0;
class Layer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].Serializable {
    constructor(args = {}){
        super();
        this._callHook = null;
        this._addedWeightNames = [];
        // Porting Notes: PyKeras does not have this property in this base Layer
        //   class. Instead lets Layer subclass set it dynamically and checks the
        //   value with `hasattr`. In tfjs-layers, we let this be a member of this
        //   base class.
        this._stateful = false;
        this.id = _nextLayerID++;
        this.activityRegularizer = null;
        this.inputSpec = null;
        this.supportsMasking = false;
        // These properties will be set upon call of this.build()
        this._trainableWeights = [];
        this._nonTrainableWeights = [];
        this._losses = [];
        this._updates = [];
        this._built = false;
        /*
          These lists will be filled via successive calls
          to this.addInboundNode().
         */ this.inboundNodes = [];
        this.outboundNodes = [];
        let name = args.name;
        if (!name) {
            const prefix = this.getClassName();
            name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"](prefix) + '_' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUid"])(prefix);
        }
        this.name = name;
        this.trainable_ = args.trainable == null ? true : args.trainable;
        if (args.inputShape != null || args.batchInputShape != null) {
            /*
              In this case we will later create an input layer
              to insert before the current layer
             */ let batchInputShape;
            if (args.batchInputShape != null) {
                batchInputShape = args.batchInputShape;
            } else if (args.inputShape != null) {
                let batchSize = null;
                if (args.batchSize != null) {
                    batchSize = args.batchSize;
                }
                batchInputShape = [
                    batchSize
                ].concat(args.inputShape);
            }
            this.batchInputShape = batchInputShape;
            // Set dtype.
            let dtype = args.dtype;
            if (dtype == null) {
                dtype = args.inputDType;
            }
            if (dtype == null) {
                dtype = 'float32';
            }
            this.dtype = dtype;
        }
        if (args.weights != null) {
            this.initialWeights = args.weights;
        } else {
            this.initialWeights = null;
        }
        // The value of `_refCount` is initialized to null. When the layer is used
        // in a symbolic way for the first time, it will be set to 1.
        this._refCount = null;
        this.fastWeightInitDuringBuild = false;
    }
    /**
     * Converts a layer and its index to a unique (immutable type) name.
     * This function is used internally with `this.containerNodes`.
     * @param layer The layer.
     * @param nodeIndex The layer's position (e.g. via enumerate) in a list of
     *   nodes.
     *
     * @returns The unique name.
     */ static nodeKey(layer, nodeIndex) {
        return layer.name + '_ib-' + nodeIndex.toString();
    }
    /**
     * Returns this.inboundNode at index nodeIndex.
     *
     * Porting note: This is a replacement for _get_node_attribute_at_index()
     * @param nodeIndex
     * @param attrName The name of the attribute related to request for this node.
     */ getNodeAtIndex(nodeIndex, attrName) {
        if (this.inboundNodes.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"]('The layer has never been called ' + `and thus has no defined ${attrName}.`);
        }
        if (this.inboundNodes.length <= nodeIndex) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Asked to get ${attrName} at node ${nodeIndex}, ` + `but the layer has only ${this.inboundNodes.length} inbound nodes.`);
        }
        return this.inboundNodes[nodeIndex];
    }
    /**
     * Retrieves the input tensor(s) of a layer at a given node.
     *
     * @param nodeIndex Integer, index of the node from which to retrieve the
     *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
     *   was called.
     *
     * @return A tensor (or list of tensors if the layer has multiple inputs).
     */ getInputAt(nodeIndex) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](this.getNodeAtIndex(nodeIndex, 'input').inputTensors);
    }
    /**
     * Retrieves the output tensor(s) of a layer at a given node.
     *
     * @param nodeIndex Integer, index of the node from which to retrieve the
     *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
     *   was called.
     *
     * @return A tensor (or list of tensors if the layer has multiple outputs).
     */ getOutputAt(nodeIndex) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](this.getNodeAtIndex(nodeIndex, 'output').outputTensors);
    }
    // Properties
    /**
     * Retrieves the input tensor(s) of a layer.
     *
     * Only applicable if the layer has exactly one inbound node,
     * i.e. if it is connected to one incoming layer.
     *
     * @return Input tensor or list of input tensors.
     *
     * @exception AttributeError if the layer is connected to more than one
     *   incoming layers.
     */ get input() {
        if (this.inboundNodes.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeError"](`Layer ${this.name}` + ' has multiple inbound nodes, ' + 'hence the notion of "layer input" ' + 'is ill-defined. ' + 'Use `getInputAt(nodeIndex)` instead.');
        } else if (this.inboundNodes.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeError"](`Layer ${this.name}` + ' is not connected, no input to return.');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](this.getNodeAtIndex(0, 'input').inputTensors);
    }
    /**
     * Retrieves the output tensor(s) of a layer.
     *
     * Only applicable if the layer has exactly one inbound node,
     * i.e. if it is connected to one incoming layer.
     *
     * @return Output tensor or list of output tensors.
     *
     * @exception AttributeError if the layer is connected to more than one
     *   incoming layers.
     */ get output() {
        if (this.inboundNodes.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeError"](`Layer ${this.name}` + ' has no inbound nodes.');
        }
        if (this.inboundNodes.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeError"](`Layer ${this.name}` + ' has multiple inbound nodes, ' + 'hence the notion of "layer output" ' + 'is ill-defined. ' + 'Use `getOutputAt(nodeIndex)` instead.');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](this.getNodeAtIndex(0, 'output').outputTensors);
    }
    get losses() {
        return this._losses;
    }
    /**
     * Retrieves the Layer's current loss values.
     *
     * Used for regularizers during training.
     */ calculateLosses() {
        // Porting Node: This is an augmentation to Layer.loss in PyKeras.
        //   In PyKeras, Layer.loss returns symbolic tensors. Here a concrete
        //   Tensor (specifically Scalar) values are returned. This is due to the
        //   imperative backend.
        return this.losses.map((lossFn)=>lossFn());
    }
    get updates() {
        return this._updates;
    }
    get built() {
        return this._built;
    }
    set built(built) {
        this._built = built;
    }
    get trainable() {
        return this.trainable_;
    }
    set trainable(trainable) {
        this._trainableWeights.forEach((w)=>w.trainable = trainable);
        this.trainable_ = trainable;
    }
    get trainableWeights() {
        if (this.trainable_) {
            return this._trainableWeights.filter((w)=>w.trainable);
        } else {
            return [];
        }
    }
    set trainableWeights(weights) {
        this._trainableWeights = weights;
    }
    get nonTrainableWeights() {
        if (this.trainable) {
            return this._trainableWeights.filter((w)=>!w.trainable).concat(this._nonTrainableWeights);
        } else {
            return this._trainableWeights.concat(this._nonTrainableWeights);
        }
    }
    set nonTrainableWeights(weights) {
        this._nonTrainableWeights = weights;
    }
    /**
     * The concatenation of the lists trainableWeights and nonTrainableWeights
     * (in this order).
     */ get weights() {
        return this.trainableWeights.concat(this.nonTrainableWeights);
    }
    get stateful() {
        return this._stateful;
    }
    /**
     * Reset the states of the layer.
     *
     * This method of the base Layer class is essentially a no-op.
     * Subclasses that are stateful (e.g., stateful RNNs) should override this
     * method.
     */ resetStates() {
        if (!this.stateful) {
            throw new Error('Cannot call the resetStates() method of a non-stateful Layer ' + 'object.');
        }
    }
    /**
     * Checks compatibility between the layer and provided inputs.
     *
     * This checks that the tensor(s) `input`
     * verify the input assumptions of the layer
     * (if any). If not, exceptions are raised.
     *
     * @param inputs Input tensor or list of input tensors.
     *
     * @exception ValueError in case of mismatch between
     *   the provided inputs and the expectations of the layer.
     */ assertInputCompatibility(inputs) {
        const inputsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs);
        if (this.inputSpec == null || this.inputSpec.length === 0) {
            return;
        }
        const inputSpec = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](this.inputSpec);
        if (inputsList.length !== inputSpec.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Layer ${this.name} expects ${inputSpec.length} inputs, ` + `but it received ${inputsList.length} input tensors. ` + `Input received: ${inputs}`);
        }
        for(let inputIndex = 0; inputIndex < inputsList.length; inputIndex++){
            const x = inputsList[inputIndex];
            const spec = inputSpec[inputIndex];
            if (spec == null) {
                continue;
            }
            // Check ndim.
            const ndim = x.rank;
            if (spec.ndim != null) {
                if (ndim !== spec.ndim) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input ${inputIndex} is incompatible with layer ${this.name}: ` + `expected ndim=${spec.ndim}, found ndim=${ndim}`);
                }
            }
            if (spec.maxNDim != null) {
                if (ndim > spec.maxNDim) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input ${inputIndex} is incompatible with layer ${this.name}` + `: expected max_ndim=${spec.maxNDim}, found ndim=${ndim}`);
                }
            }
            if (spec.minNDim != null) {
                if (ndim < spec.minNDim) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input ${inputIndex} is incompatible with layer ${this.name}` + `: expected min_ndim=${spec.minNDim}, found ndim=${ndim}.`);
                }
            }
            // Check dtype.
            if (spec.dtype != null) {
                if (x.dtype !== spec.dtype) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input ${inputIndex} is incompatible with layer ${this.name} ` + `: expected dtype=${spec.dtype}, found dtype=${x.dtype}.`);
                }
            }
            // Check specific shape axes.
            if (spec.axes) {
                const xShape = x.shape;
                for(const key in spec.axes){
                    const axis = Number(key);
                    const value = spec.axes[key];
                    // Perform Python-style slicing in case axis < 0;
                    // TODO(cais): Use https://github.com/alvivi/typescript-underscore to
                    // ensure type safety through Underscore calls.
                    const xShapeAtAxis = axis >= 0 ? xShape[axis] : xShape[xShape.length + axis];
                    if (value != null && [
                        value,
                        null
                    ].indexOf(xShapeAtAxis) === -1) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input ${inputIndex} is incompatible with layer ` + `${this.name}: expected axis ${axis} of input shape to ` + `have value ${value} but got shape ${xShape}.`);
                    }
                }
            }
            // Check shape.
            if (spec.shape != null) {
                for(let i = 0; i < spec.shape.length; ++i){
                    const specDim = spec.shape[i];
                    const dim = x.shape[i];
                    if (specDim != null && dim != null) {
                        if (specDim !== dim) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input ${inputIndex} is incompatible with layer ` + `${this.name}: expected shape=${spec.shape}, ` + `found shape=${x.shape}.`);
                        }
                    }
                }
            }
        }
    }
    /**
     * This is where the layer's logic lives.
     *
     * @param inputs Input tensor, or list/tuple of input tensors.
     * @param kwargs Additional keyword arguments.
     *
     * @return A tensor or list/tuple of tensors.
     */ call(inputs, kwargs) {
        return inputs;
    }
    invokeCallHook(inputs, kwargs) {
        if (this._callHook != null) {
            this._callHook(inputs, kwargs);
        }
    }
    /**
     * Set call hook.
     * This is currently used for testing only.
     * @param callHook
     */ setCallHook(callHook) {
        this._callHook = callHook;
    }
    /**
     * Clear call hook.
     * This is currently used for testing only.
     */ clearCallHook() {
        this._callHook = null;
    }
    /**
     * Builds or executes a `Layer`'s logic.
     *
     * When called with `tf.Tensor`(s), execute the `Layer`'s computation and
     * return Tensor(s). For example:
     *
     * ```js
     * const denseLayer = tf.layers.dense({
     *   units: 1,
     *   kernelInitializer: 'zeros',
     *   useBias: false
     * });
     *
     * // Invoke the layer's apply() method with a `tf.Tensor` (with concrete
     * // numeric values).
     * const input = tf.ones([2, 2]);
     * const output = denseLayer.apply(input);
     *
     * // The output's value is expected to be [[0], [0]], due to the fact that
     * // the dense layer has a kernel initialized to all-zeros and does not have
     * // a bias.
     * output.print();
     * ```
     *
     * When called with `tf.SymbolicTensor`(s), this will prepare the layer for
     * future execution.  This entails internal book-keeping on shapes of
     * expected Tensors, wiring layers together, and initializing weights.
     *
     * Calling `apply` with `tf.SymbolicTensor`s are typically used during the
     * building of non-`tf.Sequential` models. For example:
     *
     * ```js
     * const flattenLayer = tf.layers.flatten();
     * const denseLayer = tf.layers.dense({units: 1});
     *
     * // Use tf.layers.input() to obtain a SymbolicTensor as input to apply().
     * const input = tf.input({shape: [2, 2]});
     * const output1 = flattenLayer.apply(input);
     *
     * // output1.shape is [null, 4]. The first dimension is the undetermined
     * // batch size. The second dimension comes from flattening the [2, 2]
     * // shape.
     * console.log(JSON.stringify(output1.shape));
     *
     * // The output SymbolicTensor of the flatten layer can be used to call
     * // the apply() of the dense layer:
     * const output2 = denseLayer.apply(output1);
     *
     * // output2.shape is [null, 1]. The first dimension is the undetermined
     * // batch size. The second dimension matches the number of units of the
     * // dense layer.
     * console.log(JSON.stringify(output2.shape));
     *
     * // The input and output can be used to construct a model that consists
     * // of the flatten and dense layers.
     * const model = tf.model({inputs: input, outputs: output2});
     * ```
     *
     * @param inputs a `tf.Tensor` or `tf.SymbolicTensor` or an Array of them.
     * @param kwargs Additional keyword arguments to be passed to `call()`.
     *
     * @return Output of the layer's `call` method.
     *
     * @exception ValueError error in case the layer is missing shape information
     *   for its `build` call.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ // Porting Note: This is a replacement for __call__() in Python.
    apply(inputs, kwargs) {
        kwargs = kwargs || {};
        this.assertNotDisposed();
        // Ensure inputs are all the same type.
        const inputsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs);
        const allAreSymbolic = checkAllSymbolic(inputs);
        const noneAreSymbolic = checkNoneSymbolic(inputs);
        if (allAreSymbolic === noneAreSymbolic) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Arguments to apply() must be all ' + 'SymbolicTensors or all Tensors');
        }
        // TODO(michaelterry): nameScope() may not be necessary.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nameScope"])(this.name, ()=>{
            // Handle laying building (weight creating, input spec locking).
            if (!this.built) {
                /*
                  Throw exceptions in case the input is not compatible
                  with the inputSpec specified in the layer constructor.
                 */ this.assertInputCompatibility(inputs);
                // Collect input shapes to build layer.
                const inputShapes = [];
                for (const xElem of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs)){
                    inputShapes.push(xElem.shape);
                }
                this.build(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](inputShapes));
                this.built = true;
                // Load weights that were specified at layer instantiation.
                if (this.initialWeights) {
                    this.setWeights(this.initialWeights);
                }
                if (this._refCount === null && noneAreSymbolic) {
                    // The first use of this layer is a non-symbolic call, set ref count
                    // to 1 so the Layer can be properly disposed if its dispose() method
                    // is called.
                    this._refCount = 1;
                }
            }
            /*
              Throw exceptions in case the input is not compatible
              with the inputSpec set at build time.
            */ this.assertInputCompatibility(inputs);
            // Handle mask propagation.
            // TODO(michaelterry): Mask propagation not currently implemented.
            // Actually call the layer, collecting output(s), mask(s), and shape(s).
            if (noneAreSymbolic) {
                let output = this.call(inputs, kwargs);
                // Apply masks to the output tensors if the layer supports it.
                if (this.supportsMasking) {
                    // TODO(mattsoulanille): pass the input tensors' masks to computeMask
                    this.setMaskMetadata(inputs, output);
                }
                // If the layer returns tensors from its inputs, unmodified,
                // we copy them to avoid loss of tensor metadata.
                const outputList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](output);
                const outputListCopy = [];
                // TODO(michaelterry): This copying may not be necessary given our eager
                // backend.
                for (let x of outputList){
                    if (inputsList.indexOf(x) !== -1) {
                        x = x.clone();
                    }
                    outputListCopy.push(x);
                }
                output = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](outputListCopy);
                if (this.activityRegularizer != null) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Layer invocation in the presence of activity ' + 'regularizer(s) is not supported yet.');
                }
                // TODO(michaelterry): Call addInboundNode()?
                return output;
            } else {
                const inputShape = collectInputShape(inputs);
                const outputShape = this.computeOutputShape(inputShape);
                let output;
                const outputDType = guessOutputDType(inputs);
                this.warnOnIncompatibleInputShape(Array.isArray(inputs) ? inputShape[0] : inputShape);
                if (outputShape != null && outputShape.length > 0 && Array.isArray(outputShape[0])) {
                    // We have multiple output shapes. Create multiple output tensors.
                    output = outputShape.map((shape, index)=>new SymbolicTensor(outputDType, shape, this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs), kwargs, this.name, index));
                } else {
                    output = new SymbolicTensor(outputDType, outputShape, this, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs), kwargs, this.name);
                }
                /*
                  Add an inbound node to the layer, so that it keeps track
                  of the call and of all new variables created during the call.
                  This also updates the layer history of the output tensor(s).
                  If the input tensor(s) had no previous history,
                  this does nothing.
                */ this.addInboundNode(inputs, output, null, null, inputShape, outputShape, kwargs);
                this._refCount++;
                if (this.activityRegularizer != null) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Layer invocation in the presence of activity ' + 'regularizer(s) is not supported yet.');
                }
                return output;
            }
        });
    }
    /**
     * Check compatibility between input shape and this layer's batchInputShape.
     *
     * Print warning if any incompatibility is found.
     *
     * @param inputShape Input shape to be checked.
     */ warnOnIncompatibleInputShape(inputShape) {
        if (this.batchInputShape == null) {
            return;
        } else if (inputShape.length !== this.batchInputShape.length) {
            console.warn(`The rank of the input tensor provided (shape: ` + `${JSON.stringify(inputShape)}) does not match that of the ` + `batchInputShape (${JSON.stringify(this.batchInputShape)}) ` + `of the layer ${this.name}`);
        } else {
            let dimMismatch = false;
            this.batchInputShape.forEach((dimension, i)=>{
                if (dimension != null && inputShape[i] != null && inputShape[i] !== dimension) {
                    dimMismatch = true;
                }
            });
            if (dimMismatch) {
                console.warn(`The shape of the input tensor ` + `(${JSON.stringify(inputShape)}) does not ` + `match the expectation of layer ${this.name}: ` + `${JSON.stringify(this.batchInputShape)}`);
            }
        }
    }
    /**
     * Retrieves the output shape(s) of a layer.
     *
     * Only applicable if the layer has only one inbound node, or if all inbound
     * nodes have the same output shape.
     *
     * @returns Output shape or shapes.
     * @throws AttributeError: if the layer is connected to more than one incoming
     *   nodes.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ get outputShape() {
        if (this.inboundNodes == null || this.inboundNodes.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeError"](`The layer ${this.name} has never been called and thus has no ` + `defined output shape.`);
        }
        const allOutputShapes = [];
        for (const node of this.inboundNodes){
            const shapeString = JSON.stringify(node.outputShapes);
            if (allOutputShapes.indexOf(shapeString) === -1) {
                allOutputShapes.push(shapeString);
            }
        }
        if (allOutputShapes.length === 1) {
            const outputShapes = this.inboundNodes[0].outputShapes;
            if (Array.isArray(outputShapes) && Array.isArray(outputShapes[0]) && outputShapes.length === 1) {
                return outputShapes[0];
            } else {
                return outputShapes;
            }
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeError"](`The layer ${this.name} has multiple inbound nodes with different ` + `output shapes. Hence the notion of "output shape" is ill-defined ` + `for the layer.`);
        // TODO(cais): Implement getOutputShapeAt().
        }
    }
    /**
     * Counts the total number of numbers (e.g., float32, int32) in the
     * weights.
     *
     * @returns An integer count.
     * @throws RuntimeError: If the layer is not built yet (in which case its
     *   weights are not defined yet.)
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ countParams() {
        if (!this.built) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"](`You tried to call countParams() on ${this.name}, ` + `but the layer is not built yet. Build it first by calling ` + `build(batchInputShape).`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$variable_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countParamsInWeights"](this.weights);
    }
    /**
     * Creates the layer weights.
     *
     * Must be implemented on all layers that have weights.
     *
     * Called when apply() is called to construct the weights.
     *
     * @param inputShape A `Shape` or array of `Shape` (unused).
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ build(inputShape) {
        this.built = true;
    }
    /**
     * Returns the current values of the weights of the layer.
     *
     * @param trainableOnly Whether to get the values of only trainable weights.
     * @returns Weight values as an `Array` of `tf.Tensor`s.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ getWeights(trainableOnly = false) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchGetValue"])(trainableOnly ? this.trainableWeights : this.weights);
    }
    /**
     * Sets the weights of the layer, from Tensors.
     *
     * @param weights a list of Tensors. The number of arrays and their shape
     *   must match number of the dimensions of the weights of the layer (i.e.
     *   it should match the output of `getWeights`).
     *
     * @exception ValueError If the provided weights list does not match the
     *   layer's specifications.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ setWeights(weights) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const params = this.weights;
            if (params.length !== weights.length) {
                // TODO(cais): Restore the following and use `providedWeights`, instead
                // of `weights` in the error message, once the deeplearn.js bug is
                // fixed: https://github.com/PAIR-code/deeplearnjs/issues/498 const
                // providedWeights = JSON.stringify(weights).slice(0, 50);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`You called setWeights(weights) on layer "${this.name}" ` + `with a weight list of length ${weights.length}, ` + `but the layer was expecting ${params.length} weights. ` + `Provided weights: ${weights}...`);
            }
            if (params.length === 0) {
                return;
            }
            const weightValueTuples = [];
            const paramValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchGetValue"])(params);
            for(let i = 0; i < paramValues.length; ++i){
                const pv = paramValues[i];
                const p = params[i];
                const w = weights[i];
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(pv.shape, w.shape)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Layer weight shape ${pv.shape} ` + `not compatible with provided weight shape ${w.shape}`);
                }
                weightValueTuples.push([
                    p,
                    w
                ]);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchSetValue"])(weightValueTuples);
        });
    }
    /**
     * Adds a weight variable to the layer.
     *
     * @param name Name of the new weight variable.
     * @param shape The shape of the weight.
     * @param dtype The dtype of the weight.
     * @param initializer An initializer instance.
     * @param regularizer A regularizer instance.
     * @param trainable Whether the weight should be trained via backprop or not
     *   (assuming that the layer itself is also trainable).
     * @param constraint An optional trainable.
     * @return The created weight variable.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ addWeight(name, shape, dtype, initializer, regularizer, trainable, constraint, getInitializerFunc) {
        // Reject duplicate weight names.
        if (this._addedWeightNames.indexOf(name) !== -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Duplicate weight name ${name} for layer ${this.name}`);
        }
        this._addedWeightNames.push(name);
        if (dtype == null) {
            dtype = 'float32';
        }
        if (this.fastWeightInitDuringBuild) {
            initializer = getInitializerFunc != null ? getInitializerFunc() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$initializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInitializer"])('zeros');
        }
        const initValue = initializer.apply(shape, dtype);
        const weight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayerVariable"](initValue, dtype, name, trainable, constraint);
        initValue.dispose();
        // Request backend not to dispose the weights of the model on scope() exit.
        if (regularizer != null) {
            this.addLoss(()=>regularizer.apply(weight.read()));
        }
        if (trainable == null) {
            trainable = true;
        }
        if (trainable) {
            this._trainableWeights.push(weight);
        } else {
            this._nonTrainableWeights.push(weight);
        }
        return weight;
    }
    /**
     * Set the fast-weight-initialization flag.
     *
     * In cases where the initialized weight values will be immediately
     * overwritten by loaded weight values during model loading, setting
     * the flag to `true` saves unnecessary calls to potentially expensive
     * initializers and speeds up the loading process.
     *
     * @param value Target value of the flag.
     */ setFastWeightInitDuringBuild(value) {
        this.fastWeightInitDuringBuild = value;
    }
    /**
     * Add losses to the layer.
     *
     * The loss may potentially be conditional on some inputs tensors,
     * for instance activity losses are conditional on the layer's inputs.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ addLoss(losses) {
        if (losses == null || Array.isArray(losses) && losses.length === 0) {
            return;
        }
        // Update this.losses
        losses = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](losses);
        if (this._losses !== undefined && this._losses !== null) {
            this.losses.push(...losses);
        }
    }
    /**
     * Computes the output shape of the layer.
     *
     * Assumes that the layer will be built to match that input shape provided.
     *
     * @param inputShape A shape (tuple of integers) or a list of shape tuples
     *   (one per output tensor of the layer). Shape tuples can include null for
     *   free dimensions, instead of an integer.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ computeOutputShape(inputShape) {
        return inputShape;
    }
    /**
     * Computes an output mask tensor.
     *
     * @param inputs Tensor or list of tensors.
     * @param mask Tensor or list of tensors.
     *
     * @return null or a tensor (or list of tensors, one per output tensor of the
     * layer).
     */ computeMask(inputs, mask) {
        if (!this.supportsMasking) {
            if (mask != null) {
                if (Array.isArray(mask)) {
                    mask.forEach((maskElement)=>{
                        if (maskElement != null) {
                            throw new TypeError(`Layer ${this.name} does not support masking, ` + 'but was passed an inputMask.');
                        }
                    });
                } else {
                    throw new TypeError(`Layer ${this.name} does not support masking, ` + 'but was passed an inputMask.');
                }
            }
            // masking not explicitly supported: return null as mask
            return null;
        }
        // if masking is explictly supported, by default
        // carry over the input mask
        return mask;
    }
    setMaskMetadata(inputs, outputs, previousMask) {
        if (!this.supportsMasking) {
            return;
        }
        const outputMasks = this.computeMask(inputs, previousMask);
        const outputsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](outputs);
        const outputMasksList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](outputMasks);
        if (outputsList.length !== outputMasksList.length) {
            throw new Error(`${this.name} outputs ${outputsList.length} tensors ` + `but ${outputsList.length} masks for those tensors`);
        }
        for(let i = 0; i < outputsList.length; i++){
            outputsList[i].kerasMask = outputMasksList[i];
        }
    }
    /**
     * Internal method to create an inbound node for the layer.
     *
     * @param inputTensors List of input tensors.
     * @param outputTensors List of output tensors.
     * @param inputMasks List of input masks (a mask can be a tensor, or null).
     * @param outputMasks List of output masks (a mask can be a tensor, or null).
     * @param inputShapes List of input shape tuples.
     * @param outputShapes List of output shape tuples.
     * @param kwargs Dictionary of keyword arguments that were passed to the
     *   `call` method of the layer at the call that created the node.
     */ addInboundNode(inputTensors, outputTensors, inputMasks, outputMasks, inputShapes, outputShapes, kwargs = null) {
        const inputTensorList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputTensors);
        outputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](outputTensors);
        inputMasks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputMasks);
        outputMasks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](outputMasks);
        inputShapes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeShapeList"](inputShapes);
        outputShapes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeShapeList"](outputShapes);
        // Collect input tensor(s) coordinates.
        const inboundLayers = [];
        const nodeIndices = [];
        const tensorIndices = [];
        for (const x of inputTensorList){
            /*
             * TODO(michaelterry): Keras adds this value to tensors; it's not
             * clear whether we'll use this or not.
             */ inboundLayers.push(x.sourceLayer);
            nodeIndices.push(x.nodeIndex);
            tensorIndices.push(x.tensorIndex);
        }
        // Create node, add it to inbound nodes.
        // (This call has side effects.)
        // tslint:disable-next-line:no-unused-expression
        new Node({
            outboundLayer: this,
            inboundLayers,
            nodeIndices,
            tensorIndices,
            inputTensors: inputTensorList,
            outputTensors,
            inputMasks,
            outputMasks,
            inputShapes,
            outputShapes
        }, kwargs);
        // Update tensor history
        for(let i = 0; i < outputTensors.length; i++){
            // TODO(michaelterry: _uses_learning_phase not tracked.
            outputTensors[i].sourceLayer = this;
            outputTensors[i].nodeIndex = this.inboundNodes.length - 1;
            outputTensors[i].tensorIndex = i;
        }
    }
    /**
     * Returns the config of the layer.
     *
     * A layer config is a TS dictionary (serializable)
     * containing the configuration of a layer.
     * The same layer can be reinstantiated later
     * (without its trained weights) from this configuration.
     *
     * The config of a layer does not include connectivity
     * information, nor the layer class name.  These are handled
     * by 'Container' (one layer of abstraction above).
     *
     * Porting Note: The TS dictionary follows TS naming standards for
     * keys, and uses tfjs-layers type-safe Enums.  Serialization methods
     * should use a helper function to convert to the pythonic storage
     * standard. (see serialization_utils.convertTsToPythonic)
     *
     * @returns TS dictionary of configuration.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ getConfig() {
        const config = {
            name: this.name,
            trainable: this.trainable
        };
        if (this.batchInputShape != null) {
            config['batchInputShape'] = this.batchInputShape;
        }
        if (this.dtype != null) {
            config['dtype'] = this.dtype;
        }
        return config;
    }
    /**
     * Dispose the weight variables that this Layer instance holds.
     *
     * @returns {number} Number of disposed variables.
     */ disposeWeights() {
        this.weights.forEach((weight)=>weight.dispose());
        return this.weights.length;
    }
    assertNotDisposed() {
        if (this._refCount === 0) {
            throw new Error(`Layer '${this.name}' is already disposed.`);
        }
    }
    /**
     * Attempt to dispose layer's weights.
     *
     * This method decreases the reference count of the Layer object by 1.
     *
     * A Layer is reference-counted. Its reference count is incremented by 1
     * the first item its `apply()` method is called and when it becomes a part
     * of a new `Node` (through calling the `apply()` method on a
     * `tf.SymbolicTensor`).
     *
     * If the reference count of a Layer becomes 0, all the weights will be
     * disposed and the underlying memory (e.g., the textures allocated in WebGL)
     * will be freed.
     *
     * Note: If the reference count is greater than 0 after the decrement, the
     * weights of the Layer will *not* be disposed.
     *
     * After a Layer is disposed, it cannot be used in calls such as `apply()`,
     * `getWeights()` or `setWeights()` anymore.
     *
     * @returns A DisposeResult Object with the following fields:
     *   - refCountAfterDispose: The reference count of the Container after this
     *     `dispose()` call.
     *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
     *     during this `dispose()` call.
     * @throws {Error} If the layer is not built yet, or if the layer has already
     *   been disposed.
     *
     * @doc {heading: 'Models', 'subheading': 'Classes'}
     */ dispose() {
        if (!this.built) {
            throw new Error(`Cannot dispose Layer ${this.name} because it has not been ` + `built yet.`);
        }
        if (this._refCount === null) {
            throw new Error(`Cannot dispose Layer ${this.name} because it has not been used ` + `yet.`);
        }
        this.assertNotDisposed();
        let numDisposedVariables = 0;
        if (--this._refCount === 0) {
            numDisposedVariables = this.disposeWeights();
        }
        return {
            refCountAfterDispose: this._refCount,
            numDisposedVariables
        };
    }
}
/**
 * Collects the input shape(s) of a list of `tf.Tensor`s or
 * `tf.SymbolicTensor`s.
 *
 * TODO(michaelterry): Update PyKeras docs (backport).
 *
 * @param inputTensors List of input tensors (or single input tensor).
 *
 * @return List of shape tuples (or single tuple), one tuple per input.
 */ function collectInputShape(inputTensors) {
    inputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputTensors);
    const shapes = [];
    for (const x of inputTensors){
        shapes.push(x.shape);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](shapes);
}
/**
 * Guesses output dtype based on inputs.
 *
 * At present, just returns 'float32' for any input.
 *
 * @param inputTensors List of input tensors (or single input tensor).
 *
 * @return The guessed DType. At present, always returns 'float32'.
 */ function guessOutputDType(inputTensors) {
    return 'float32';
}
function getSourceInputs(tensor, layer, nodeIndex) {
    if (layer == null || nodeIndex != null && nodeIndex > 0) {
        layer = tensor.sourceLayer;
        nodeIndex = tensor.nodeIndex;
    }
    if (layer.inboundNodes.length === 0) {
        return [
            tensor
        ];
    } else {
        const node = layer.inboundNodes[nodeIndex];
        if (node.inboundLayers.length === 0) {
            return node.inputTensors;
        } else {
            const sourceTensors = [];
            for(let i = 0; i < node.inboundLayers.length; i++){
                const x = node.inputTensors[i];
                const layer = node.inboundLayers[i];
                const nodeIndex = node.nodeIndices[i];
                const previousSources = getSourceInputs(x, layer, nodeIndex);
                // Avoid input redundancy.
                for (const x of previousSources){
                    if (sourceTensors.indexOf(x) === -1) {
                        sourceTensors.push(x);
                    }
                }
            }
            return sourceTensors;
        }
    }
}
function checkAllSymbolic(tensors) {
    let allAreSymbolic = true;
    for (const tensor of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](tensors)){
        if (!(tensor instanceof SymbolicTensor)) {
            allAreSymbolic = false;
            break;
        }
    }
    return allAreSymbolic;
}
function checkNoneSymbolic(tensors) {
    let noneAreSymbolic = true;
    for (const tensor of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](tensors)){
        if (tensor instanceof SymbolicTensor) {
            noneAreSymbolic = false;
            break;
        }
    }
    return noneAreSymbolic;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wb2xvZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZW5naW5lL3RvcG9sb2d5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsK0NBQStDO0FBRS9DLE9BQU8sRUFBbUIsYUFBYSxFQUFVLElBQUksRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0QsT0FBTyxFQUFDLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUU5RSxPQUFPLEVBQUMsY0FBYyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDeEYsT0FBTyxFQUFDLGNBQWMsRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBSTVELE9BQU8sS0FBSyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssY0FBYyxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQXVCekU7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLE9BQU8sU0FBUztJQWNwQixZQUFZLElBQW1CO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEI7OztVQUdFO1FBQ0YsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFD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LENBQUMsQ0FBQztnQkFDN0QsMEJBQTBCO2dCQUMxQixLQUFLLE1BQU0sQ0FBQyxJQUFJLGVBQWUsRUFBRTtvQkFDL0IsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dCQUNuQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2QjtpQkFDRjthQUNGO1lBQ0QsT0FBTyxhQUFhLENBQUM7U0FDdEI7S0FDRjtBQUNILENBQUM7QUFJRCxTQUFTLGdCQUFnQixDQUFDLE9BQXNDO0lBRTlELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztJQUMxQixLQUFLLE1BQU0sTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEQsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLGNBQWMsQ0FBQyxFQUFFO1lBQ3ZDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDdkIsTUFBTTtTQUNQO0tBQ0Y7SUFDRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxPQUNlO0lBQ3hDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztJQUMzQixLQUFLLE1BQU0sTUFBTSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbEQsSUFBSSxNQUFNLFlBQVksY0FBYyxFQUFFO1lBQ3BDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIsTUFBTTtTQUNQO0tBQ0Y7SUFDRCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyogT3JpZ2luYWwgc291cmNlOiBrZXJhcy9lbmdpbmUvdG9wb2xvZ3kucHkgKi9cblxuaW1wb3J0IHtEYXRhVHlwZSwgU2NhbGFyLCBzZXJpYWxpemF0aW9uLCBUZW5zb3IsIHRpZHksIHV0aWx9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7Z2V0TmV4dFVuaXF1ZVRlbnNvcklkLCBnZXRVaWR9IGZyb20gJy4uL2JhY2tlbmQvc3RhdGUnO1xuaW1wb3J0IHtnZXRTY29wZWRUZW5zb3JOYW1lLCBnZXRVbmlxdWVUZW5zb3JOYW1lLCBuYW1lU2NvcGV9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQge0NvbnN0cmFpbnR9IGZyb20gJy4uL2NvbnN0cmFpbnRzJztcbmltcG9ydCB7QXR0cmlidXRlRXJyb3IsIE5vdEltcGxlbWVudGVkRXJyb3IsIFJ1bnRpbWVFcnJvciwgVmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7Z2V0SW5pdGlhbGl6ZXIsIEluaXRpYWxpemVyfSBmcm9tICcuLi9pbml0aWFsaXplcnMnO1xuaW1wb3J0IHtTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge1JlZ3VsYXJpemVyfSBmcm9tICcuLi9yZWd1bGFyaXplcnMnO1xuaW1wb3J0IHtLd2FyZ3MsIFJlZ3VsYXJpemVyRm59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCAqIGFzIGdlbmVyaWNfdXRpbHMgZnJvbSAnLi4vdXRpbHMvZ2VuZXJpY191dGlscyc7XG5pbXBvcnQgKiBhcyB0eXBlc191dGlscyBmcm9tICcuLi91dGlscy90eXBlc191dGlscyc7XG5pbXBvcnQgKiBhcyB2YXJpYWJsZV91dGlscyBmcm9tICcuLi91dGlscy92YXJpYWJsZV91dGlscyc7XG5pbXBvcnQge2JhdGNoR2V0VmFsdWUsIGJhdGNoU2V0VmFsdWUsIExheWVyVmFyaWFibGV9IGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5cbi8vIFRPRE8obWljaGFlbHRlcnJ5KTogVGhpcyBpcyBhIHN0dWIgdW50aWwgaXQncyBkZWZpbmVkLlxuZXhwb3J0IHR5cGUgT3AgPSAoeDogTGF5ZXJWYXJpYWJsZSkgPT4gTGF5ZXJWYXJpYWJsZTtcblxuLyoqXG4gKiBDb25zdHJ1Y3RvciBhcmd1bWVudHMgZm9yIElucHV0U3BlYy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dFNwZWNBcmdzIHtcbiAgLyoqIEV4cGVjdGVkIGRhdGF0eXBlIG9mIHRoZSBpbnB1dC4gKi9cbiAgZHR5cGU/OiBEYXRhVHlwZTtcbiAgLyoqIEV4cGVjdGVkIHNoYXBlIG9mIHRoZSBpbnB1dCAobWF5IGluY2x1ZGUgbnVsbCBmb3IgdW5jaGVja2VkIGF4ZXMpLiAqL1xuICBzaGFwZT86IFNoYXBlO1xuICAvKiogRXhwZWN0ZWQgcmFuayBvZiB0aGUgaW5wdXQuICovXG4gIG5kaW0/OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhbmsgb2YgdGhlIGlucHV0LiAqL1xuICBtYXhORGltPzogbnVtYmVyO1xuICAvKiogTWluaW11bSByYW5rIG9mIHRoZSBpbnB1dC4gKi9cbiAgbWluTkRpbT86IG51bWJlcjtcbiAgLyoqIERpY3Rpb25hcnkgbWFwcGluZyBpbnRlZ2VyIGF4ZXMgdG8gYSBzcGVjaWZpYyBkaW1lbnNpb24gdmFsdWUuICovXG4gIGF4ZXM/OiB7W2F4aXM6IG51bWJlcl06IG51bWJlcn07XG59XG5cbi8qKlxuICogU3BlY2lmaWVzIHRoZSBuZGltLCBkdHlwZSBhbmQgc2hhcGUgb2YgZXZlcnkgaW5wdXQgdG8gYSBsYXllci5cbiAqXG4gKiBFdmVyeSBsYXllciBzaG91bGQgZXhwb3NlIChpZiBhcHByb3ByaWF0ZSkgYW4gYGlucHV0U3BlY2AgYXR0cmlidXRlOlxuICogYSBsaXN0IG9mIGluc3RhbmNlcyBvZiBJbnB1dFNwZWMgKG9uZSBwZXIgaW5wdXQgdGVuc29yKS5cbiAqXG4gKiBBIG51bGwgZW50cnkgaW4gYSBzaGFwZSBpcyBjb21wYXRpYmxlIHdpdGggYW55IGRpbWVuc2lvbixcbiAqIGEgbnVsbCBzaGFwZSBpcyBjb21wYXRpYmxlIHdpdGggYW55IHNoYXBlLlxuICovXG5leHBvcnQgY2xhc3MgSW5wdXRTcGVjIHtcbiAgLyoqIEV4cGVjdGVkIGRhdGF0eXBlIG9mIHRoZSBpbnB1dC4gKi9cbiAgZHR5cGU/OiBEYXRhVHlwZTtcbiAgLyoqIEV4cGVjdGVkIHNoYXBlIG9mIHRoZSBpbnB1dCAobWF5IGluY2x1ZGUgbnVsbCBmb3IgdW5jaGVja2VkIGF4ZXMpLiAqL1xuICBzaGFwZT86IFNoYXBlO1xuICAvKiogRXhwZWN0ZWQgcmFuayBvZiB0aGUgaW5wdXQuICovXG4gIG5kaW0/OiBudW1iZXI7XG4gIC8qKiBNYXhpbXVtIHJhbmsgb2YgdGhlIGlucHV0LiAqL1xuICBtYXhORGltPzogbnVtYmVyO1xuICAvKiogTWluaW11bSByYW5rIG9mIHRoZSBpbnB1dC4gKi9cbiAgbWluTkRpbT86IG51bWJlcjtcbiAgLyoqIERpY3Rpb25hcnkgbWFwcGluZyBpbnRlZ2VyIGF4ZXMgdG8gYSBzcGVjaWZpYyBkaW1lbnNpb24gdmFsdWUuICovXG4gIGF4ZXM/OiB7W2F4aXM6IG51bWJlcl06IG51bWJlcn07XG5cbiAgY29uc3RydWN0b3IoYXJnczogSW5wdXRTcGVjQXJncykge1xuICAgIHRoaXMuZHR5cGUgPSBhcmdzLmR0eXBlO1xuICAgIHRoaXMuc2hhcGUgPSBhcmdzLnNoYXBlO1xuICAgIC8qXG4gICAgICBUT0RPKG1pY2hhZWx0ZXJyeSk6IENvdWxkIHRocm93IGVycm9yIGlmIG5kaW0gYW5kIHNoYXBlIGFyZSBib3RoIGRlZmluZWRcbiAgICAgICAgKHRoZW4gYmFja3BvcnQpLlxuICAgICovXG4gICAgaWYgKGFyZ3Muc2hhcGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZGltID0gYXJncy5zaGFwZS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmRpbSA9IGFyZ3MubmRpbTtcbiAgICB9XG4gICAgdGhpcy5tYXhORGltID0gYXJncy5tYXhORGltO1xuICAgIHRoaXMubWluTkRpbSA9IGFyZ3MubWluTkRpbTtcbiAgICB0aGlzLmF4ZXMgPSBhcmdzLmF4ZXMgfHwge307XG4gIH1cbn1cblxuLyoqXG4gKiBgdGYuU3ltYm9saWNUZW5zb3JgIGlzIGEgcGxhY2Vob2xkZXIgZm9yIGEgVGVuc29yIHdpdGhvdXQgYW55IGNvbmNyZXRlIHZhbHVlLlxuICpcbiAqIFRoZXkgYXJlIG1vc3Qgb2Z0ZW4gZW5jb3VudGVyZWQgd2hlbiBidWlsZGluZyBhIGdyYXBoIG9mIGBMYXllcmBzIGZvciBhXG4gKiBgdGYuTGF5ZXJzTW9kZWxgIGFuZCB0aGUgaW5wdXQgZGF0YSdzIHNoYXBlLCBidXQgbm90IHZhbHVlcyBhcmUga25vd24uXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsICdzdWJoZWFkaW5nJzogJ0NsYXNzZXMnfVxuICovXG5leHBvcnQgY2xhc3MgU3ltYm9saWNUZW5zb3Ige1xuICAvKiBBIHVuaXF1ZSBJRCBmb3IgdGhlIHRlbnNvciB0byBiZSBhYmxlIHRvIGRpZmZlcmVudGlhdGUgdGVuc29ycy4gKi9cbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcbiAgLy8gVGhlIGZ1bGx5IHNjb3BlZCBuYW1lIG9mIHRoaXMgVmFyaWFibGUsIGluY2x1ZGluZyBhIHVuaXF1ZSBzdWZmaXggaWYgbmVlZGVkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLy8gVGhlIG9yaWdpbmFsbHkgcmVxdWVzdGVkIGZ1bGx5IHNjb3BlZCBuYW1lIG9mIHRoaXMgVmFyaWFibGUsIG5vdCBpbmNsdWRpbmdcbiAgLy8gYW55IHVuaXF1ZSBzdWZmaXguICBUaGlzIG1heSBiZSBuZWVkZWQgd2hlbiByZXN0b3Jpbmcgd2VpZ2h0cyBiZWNhdXNlIHRoaXNcbiAgLy8gb3JpZ2luYWwgbmFtZSBpcyB1c2VkIGFzIGEga2V5LlxuICByZWFkb25seSBvcmlnaW5hbE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBSYW5rL2RpbWVuc2lvbmFsaXR5IG9mIHRoZSB0ZW5zb3IuXG4gICAqL1xuICByZWFkb25seSByYW5rOiBudW1iZXI7XG4gIC8qKlxuICAgKiBSZXBsYWNlbWVudCBmb3IgX2tlcmFzX2hpc3RvcnkuXG4gICAqL1xuICBub2RlSW5kZXg6IG51bWJlcjtcbiAgLyoqXG4gICAqIFJlcGxhY2VtZW50IGZvciBfa2VyYXNfaGlzdG9yeS5cbiAgICovXG4gIHRlbnNvckluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkdHlwZVxuICAgKiBAcGFyYW0gc2hhcGVcbiAgICogQHBhcmFtIHNvdXJjZUxheWVyIFRoZSBMYXllciB0aGF0IHByb2R1Y2VkIHRoaXMgc3ltYm9saWMgdGVuc29yLlxuICAgKiBAcGFyYW0gaW5wdXRzIFRoZSBpbnB1dHMgcGFzc2VkIHRvIHNvdXJjZUxheWVyJ3MgX19jYWxsX18oKSBtZXRob2QuXG4gICAqIEBwYXJhbSBub2RlSW5kZXhcbiAgICogQHBhcmFtIHRlbnNvckluZGV4XG4gICAqIEBwYXJhbSBjYWxsQXJncyBUaGUga2V5d29yZCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBfX2NhbGxfXygpIG1ldGhvZC5cbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIG91dHB1dFRlbnNvckluZGV4IFRoZSBpbmRleCBvZiB0aGlzIHRlbnNvciBpbiB0aGUgbGlzdCBvZiBvdXRwdXRzXG4gICAqICAgcmV0dXJuZWQgYnkgYXBwbHkoKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcmVhZG9ubHkgZHR5cGU6IERhdGFUeXBlLCByZWFkb25seSBzaGFwZTogU2hhcGUsXG4gICAgICBwdWJsaWMgc291cmNlTGF5ZXI6IExheWVyLCByZWFkb25seSBpbnB1dHM6IFN5bWJvbGljVGVuc29yW10sXG4gICAgICByZWFkb25seSBjYWxsQXJnczogS3dhcmdzLCBuYW1lPzogc3RyaW5nLFxuICAgICAgcmVhZG9ubHkgb3V0cHV0VGVuc29ySW5kZXg/OiBudW1iZXIpIHtcbiAgICB0aGlzLmlkID0gZ2V0TmV4dFVuaXF1ZVRlbnNvcklkKCk7XG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5vcmlnaW5hbE5hbWUgPSBnZXRTY29wZWRUZW5zb3JOYW1lKG5hbWUpO1xuICAgICAgdGhpcy5uYW1lID0gZ2V0VW5pcXVlVGVuc29yTmFtZSh0aGlzLm9yaWdpbmFsTmFtZSk7XG4gICAgfVxuICAgIHRoaXMucmFuayA9IHNoYXBlLmxlbmd0aDtcbiAgfVxufVxuXG4vKipcbiAqIENvbnN0cnVjdG9yIGFyZ3VtZW50cyBmb3IgTm9kZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOb2RlQXJncyB7XG4gIC8qKlxuICAgKiBUaGUgbGF5ZXIgdGhhdCB0YWtlcyBgaW5wdXRUZW5zb3JzYCBhbmQgdHVybnMgdGhlbSBpbnRvIGBvdXRwdXRUZW5zb3JzYC5cbiAgICogKHRoZSBub2RlIGdldHMgY3JlYXRlZCB3aGVuIHRoZSBgY2FsbGAgbWV0aG9kIG9mIHRoZSBsYXllciBpcyBjYWxsZWQpLlxuICAgKi9cbiAgb3V0Ym91bmRMYXllcjogTGF5ZXI7XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgbGF5ZXJzLCB0aGUgc2FtZSBsZW5ndGggYXMgYGlucHV0VGVuc29yc2AsIHRoZSBsYXllcnMgZnJvbSB3aGVyZVxuICAgKiBgaW5wdXRUZW5zb3JzYCBvcmlnaW5hdGUuXG4gICAqL1xuICBpbmJvdW5kTGF5ZXJzOiBMYXllcltdO1xuICAvKipcbiAgICogQSBsaXN0IG9mIGludGVnZXJzLCB0aGUgc2FtZSBsZW5ndGggYXMgYGluYm91bmRMYXllcnNgLiBgbm9kZUluZGljZXNbaV1gIGlzXG4gICAqIHRoZSBvcmlnaW4gbm9kZSBvZiBgaW5wdXRUZW5zb3JzW2ldYCAobmVjZXNzYXJ5IHNpbmNlIGVhY2ggaW5ib3VuZCBsYXllclxuICAgKiBtaWdodCBoYXZlIHNldmVyYWwgbm9kZXMsIGUuZy4gaWYgdGhlIGxheWVyIGlzIGJlaW5nIHNoYXJlZCB3aXRoIGFcbiAgICogZGlmZmVyZW50IGRhdGEgc3RyZWFtKS5cbiAgICovXG4gIG5vZGVJbmRpY2VzOiBudW1iZXJbXTtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpbnRlZ2VycywgdGhlIHNhbWUgbGVuZ3RoIGFzIGBpbmJvdW5kTGF5ZXJzYC4gYHRlbnNvckluZGljZXNbaV1gXG4gICAqIGlzIHRoZSBpbmRleCBvZiBgaW5wdXRUZW5zb3JzW2ldYCB3aXRoaW4gdGhlIG91dHB1dCBvZiB0aGUgaW5ib3VuZCBsYXllclxuICAgKiAobmVjZXNzYXJ5IHNpbmNlIGVhY2ggaW5ib3VuZCBsYXllciBtaWdodCBoYXZlIG11bHRpcGxlIHRlbnNvciBvdXRwdXRzLFxuICAgKiB3aXRoIGVhY2ggb25lIGJlaW5nIGluZGVwZW5kZW50bHkgbWFuaXB1bGFibGUpLlxuICAgKi9cbiAgdGVuc29ySW5kaWNlczogbnVtYmVyW107XG4gIC8qKiBMaXN0IG9mIGlucHV0IHRlbnNvcnMuICovXG4gIGlucHV0VGVuc29yczogU3ltYm9saWNUZW5zb3JbXTtcbiAgLyoqIExpc3Qgb2Ygb3V0cHV0IHRlbnNvcnMuICovXG4gIG91dHB1dFRlbnNvcnM6IFN5bWJvbGljVGVuc29yW107XG4gIC8qKiBMaXN0IG9mIGlucHV0IG1hc2tzIChhIG1hc2sgY2FuIGJlIGEgdGVuc29yLCBvciBudWxsKS4gKi9cbiAgaW5wdXRNYXNrczogVGVuc29yW107XG4gIC8qKiBMaXN0IG9mIG91dHB1dCBtYXNrcyAoYSBtYXNrIGNhbiBiZSBhIHRlbnNvciwgb3IgbnVsbCkuICovXG4gIG91dHB1dE1hc2tzOiBUZW5zb3JbXTtcbiAgLyoqIExpc3Qgb2YgaW5wdXQgc2hhcGUgdHVwbGVzLiAqL1xuICBpbnB1dFNoYXBlczogU2hhcGV8U2hhcGVbXTtcbiAgLyoqIExpc3Qgb2Ygb3V0cHV0IHNoYXBlIHR1cGxlcy4gKi9cbiAgb3V0cHV0U2hhcGVzOiBTaGFwZXxTaGFwZVtdO1xufVxuXG4vKipcbiAqIFRoZSB0eXBlIG9mIHRoZSByZXR1cm4gdmFsdWUgb2YgTGF5ZXIuZGlzcG9zZSgpIGFuZCBDb250YWluZXIuZGlzcG9zZSgpLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpc3Bvc2VSZXN1bHQge1xuICAvKipcbiAgICogUmVmZXJlbmNlIGNvdW50IGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAqL1xuICByZWZDb3VudEFmdGVyRGlzcG9zZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgdmFyaWFibGVzIGRpc3Bvc2UgaW4gdGhpcyBkaXNwb3NlIGNhbGwuXG4gICAqL1xuICBudW1EaXNwb3NlZFZhcmlhYmxlczogbnVtYmVyO1xufVxuXG5sZXQgX25leHROb2RlSUQgPSAwO1xuXG4vKipcbiAqIEEgYE5vZGVgIGRlc2NyaWJlcyB0aGUgY29ubmVjdGl2aXR5IGJldHdlZW4gdHdvIGxheWVycy5cbiAqXG4gKiBFYWNoIHRpbWUgYSBsYXllciBpcyBjb25uZWN0ZWQgdG8gc29tZSBuZXcgaW5wdXQsXG4gKiBhIG5vZGUgaXMgYWRkZWQgdG8gYGxheWVyLmluYm91bmROb2Rlc2AuXG4gKlxuICogRWFjaCB0aW1lIHRoZSBvdXRwdXQgb2YgYSBsYXllciBpcyB1c2VkIGJ5IGFub3RoZXIgbGF5ZXIsXG4gKiBhIG5vZGUgaXMgYWRkZWQgdG8gYGxheWVyLm91dGJvdW5kTm9kZXNgLlxuICpcbiAqIGBub2RlSW5kaWNlc2AgYW5kIGB0ZW5zb3JJbmRpY2VzYCBhcmUgYmFzaWNhbGx5IGZpbmUtZ3JhaW5lZCBjb29yZGluYXRlc1xuICogZGVzY3JpYmluZyB0aGUgb3JpZ2luIG9mIHRoZSBgaW5wdXRUZW5zb3JzYCwgdmVyaWZ5aW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogYGlucHV0VGVuc29yc1tpXSA9PVxuICogaW5ib3VuZExheWVyc1tpXS5pbmJvdW5kTm9kZXNbbm9kZUluZGljZXNbaV1dLm91dHB1dFRlbnNvcnNbXG4gKiAgIHRlbnNvckluZGljZXNbaV1dYFxuICpcbiAqIEEgbm9kZSBmcm9tIGxheWVyIEEgdG8gbGF5ZXIgQiBpcyBhZGRlZCB0bzpcbiAqICAgICBBLm91dGJvdW5kTm9kZXNcbiAqICAgICBCLmluYm91bmROb2Rlc1xuICovXG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gIC8qKlxuICAgKiBUaGUgbGF5ZXIgdGhhdCB0YWtlcyBgaW5wdXRUZW5zb3JzYCBhbmQgdHVybnMgdGhlbSBpbnRvIGBvdXRwdXRUZW5zb3JzYFxuICAgKiAodGhlIG5vZGUgZ2V0cyBjcmVhdGVkIHdoZW4gdGhlIGBjYWxsYCBtZXRob2Qgb2YgdGhlIGxheWVyIGlzIGNhbGxlZCkuXG4gICAqL1xuICBvdXRib3VuZExheWVyOiBMYXllcjtcbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBsYXllcnMsIHRoZSBzYW1lIGxlbmd0aCBhcyBgaW5wdXRUZW5zb3JzYCwgdGhlIGxheWVycyBmcm9tIHdoZXJlXG4gICAqIGBpbnB1dFRlbnNvcnNgIG9yaWdpbmF0ZS5cbiAgICovXG4gIGluYm91bmRMYXllcnM6IExheWVyW107XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaW50ZWdlcnMsIHRoZSBzYW1lIGxlbmd0aCBhcyBgaW5ib3VuZExheWVyc2AuIGBub2RlSW5kaWNlc1tpXWAgaXNcbiAgICogdGhlIG9yaWdpbiBub2RlIG9mIGBpbnB1dFRlbnNvcnNbaV1gIChuZWNlc3Nhcnkgc2luY2UgZWFjaCBpbmJvdW5kIGxheWVyXG4gICAqIG1pZ2h0IGhhdmUgc2V2ZXJhbCBub2RlcywgZS5nLiBpZiB0aGUgbGF5ZXIgaXMgYmVpbmcgc2hhcmVkIHdpdGggYVxuICAgKiBkaWZmZXJlbnQgZGF0YSBzdHJlYW0pLlxuICAgKi9cbiAgbm9kZUluZGljZXM6IG51bWJlcltdO1xuICAvKipcbiAgICogQSBsaXN0IG9mIGludGVnZXJzLCB0aGUgc2FtZSBsZW5ndGggYXMgYGluYm91bmRMYXllcnNgLiBgdGVuc29ySW5kaWNlc1tpXWBcbiAgICogaXMgdGhlIGluZGV4IG9mIGBpbnB1dFRlbnNvcnNbaV1gIHdpdGhpbiB0aGUgb3V0cHV0IG9mIHRoZSBpbmJvdW5kIGxheWVyXG4gICAqIChuZWNlc3Nhcnkgc2luY2UgZWFjaCBpbmJvdW5kIGxheWVyIG1pZ2h0IGhhdmUgbXVsdGlwbGUgdGVuc29yIG91dHB1dHMsXG4gICAqIHdpdGggZWFjaCBvbmUgYmVpbmcgaW5kZXBlbmRlbnRseSBtYW5pcHVsYWJsZSkuXG4gICAqL1xuICB0ZW5zb3JJbmRpY2VzOiBudW1iZXJbXTtcbiAgLyoqIExpc3Qgb2YgaW5wdXQgdGVuc29ycy4gKi9cbiAgaW5wdXRUZW5zb3JzOiBTeW1ib2xpY1RlbnNvcltdO1xuICAvKiogTGlzdCBvZiBvdXRwdXQgdGVuc29ycy4gKi9cbiAgb3V0cHV0VGVuc29yczogU3ltYm9saWNUZW5zb3JbXTtcbiAgLyoqIExpc3Qgb2YgaW5wdXQgbWFza3MgKGEgbWFzayBjYW4gYmUgYSB0ZW5zb3IsIG9yIG51bGwpLiAqL1xuICBpbnB1dE1hc2tzOiBUZW5zb3JbXTtcbiAgLyoqIExpc3Qgb2Ygb3V0cHV0IG1hc2tzIChhIG1hc2sgY2FuIGJlIGEgdGVuc29yLCBvciBudWxsKS4gKi9cbiAgb3V0cHV0TWFza3M6IFRlbnNvcltdO1xuICAvKiogTGlzdCBvZiBpbnB1dCBzaGFwZSB0dXBsZXMuICovXG4gIGlucHV0U2hhcGVzOiBTaGFwZXxTaGFwZVtdO1xuICAvKiogTGlzdCBvZiBvdXRwdXQgc2hhcGUgdHVwbGVzLiAqL1xuICBvdXRwdXRTaGFwZXM6IFNoYXBlfFNoYXBlW107XG5cbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIGFyZ3M6IE5vZGVBcmdzLFxuICAgICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBEZWZpbmUgYWN0dWFsIHR5cGUgZm9yIHRoaXMuXG4gICAgICBwdWJsaWMgY2FsbEFyZ3M/OiBLd2FyZ3MpIHtcbiAgICB0aGlzLmlkID0gX25leHROb2RlSUQrKztcbiAgICAvKlxuICAgICAgTGF5ZXIgaW5zdGFuY2UgKE5PVCBhIGxpc3QpLlxuICAgICAgdGhpcyBpcyB0aGUgbGF5ZXIgdGhhdCB0YWtlcyBhIGxpc3Qgb2YgaW5wdXQgdGVuc29yc1xuICAgICAgYW5kIHR1cm5zIHRoZW0gaW50byBhIGxpc3Qgb2Ygb3V0cHV0IHRlbnNvcnMuXG4gICAgICB0aGUgY3VycmVudCBub2RlIHdpbGwgYmUgYWRkZWQgdG9cbiAgICAgIHRoZSBpbmJvdW5kTm9kZXMgb2Ygb3V0Ym91bmRMYXllci5cbiAgICAqL1xuICAgIHRoaXMub3V0Ym91bmRMYXllciA9IGFyZ3Mub3V0Ym91bmRMYXllcjtcblxuICAgIC8qXG4gICAgICAgIFRoZSBmb2xsb3dpbmcgMyBwcm9wZXJ0aWVzIGRlc2NyaWJlIHdoZXJlXG4gICAgICAgIHRoZSBpbnB1dCB0ZW5zb3JzIGNvbWUgZnJvbTogd2hpY2ggbGF5ZXJzLFxuICAgICAgICBhbmQgZm9yIGVhY2ggbGF5ZXIsIHdoaWNoIG5vZGUgYW5kIHdoaWNoXG4gICAgICAgIHRlbnNvciBvdXRwdXQgb2YgZWFjaCBub2RlLlxuICAgICovXG5cbiAgICAvLyBMaXN0IG9mIGxheWVyIGluc3RhbmNlcy5cbiAgICB0aGlzLmluYm91bmRMYXllcnMgPSBhcmdzLmluYm91bmRMYXllcnM7XG4gICAgLy8gTGlzdCBvZiBpbnRlZ2VycywgMToxIG1hcHBpbmcgd2l0aCBpbmJvdW5kTGF5ZXJzLlxuICAgIHRoaXMubm9kZUluZGljZXMgPSBhcmdzLm5vZGVJbmRpY2VzO1xuICAgIC8vIExpc3Qgb2YgaW50ZWdlcnMsIDE6MSBtYXBwaW5nIHdpdGggaW5ib3VuZExheWVycy5cbiAgICB0aGlzLnRlbnNvckluZGljZXMgPSBhcmdzLnRlbnNvckluZGljZXM7XG5cbiAgICAvKlxuICAgICAgICBGb2xsb3dpbmcgMiBwcm9wZXJ0aWVzOlxuICAgICAgICB0ZW5zb3IgaW5wdXRzIGFuZCBvdXRwdXRzIG9mIG91dGJvdW5kTGF5ZXIuXG4gICAgKi9cblxuICAgIC8vIExpc3Qgb2YgdGVuc29ycy4gMToxIG1hcHBpbmcgd2l0aCBpbmJvdW5kTGF5ZXJzLlxuICAgIHRoaXMuaW5wdXRUZW5zb3JzID0gYXJncy5pbnB1dFRlbnNvcnM7XG4gICAgLy8gTGlzdCBvZiB0ZW5zb3JzLCBjcmVhdGVkIGJ5IG91dGJvdW5kTGF5ZXIuY2FsbCgpLlxuICAgIHRoaXMub3V0cHV0VGVuc29ycyA9IGFyZ3Mub3V0cHV0VGVuc29ycztcblxuICAgIC8qXG4gICAgICAgIEZvbGxvd2luZyAyIHByb3BlcnRpZXM6IGlucHV0IGFuZCBvdXRwdXQgbWFza3MuXG4gICAgICAgIExpc3Qgb2YgdGVuc29ycywgMToxIG1hcHBpbmcgd2l0aCBpbnB1dFRlbnNvci5cbiAgICAqL1xuICAgIHRoaXMuaW5wdXRNYXNrcyA9IGFyZ3MuaW5wdXRNYXNrcztcbiAgICAvLyBMaXN0IG9mIHRlbnNvcnMsIGNyZWF0ZWQgYnkgb3V0Ym91bmRMYXllci5jb21wdXRlTWFzaygpLlxuICAgIHRoaXMub3V0cHV0TWFza3MgPSBhcmdzLm91dHB1dE1hc2tzO1xuXG4gICAgLy8gRm9sbG93aW5nIDIgcHJvcGVydGllczogaW5wdXQgYW5kIG91dHB1dCBzaGFwZXMuXG5cbiAgICAvLyBMaXN0IG9mIHNoYXBlIHR1cGxlcywgc2hhcGVzIG9mIGlucHV0VGVuc29ycy5cbiAgICB0aGlzLmlucHV0U2hhcGVzID0gYXJncy5pbnB1dFNoYXBlcztcbiAgICAvLyBMaXN0IG9mIHNoYXBlIHR1cGxlcywgc2hhcGVzIG9mIG91dHB1dFRlbnNvcnMuXG4gICAgdGhpcy5vdXRwdXRTaGFwZXMgPSBhcmdzLm91dHB1dFNoYXBlcztcblxuICAgIC8vIEFkZCBub2RlcyB0byBhbGwgbGF5ZXJzIGludm9sdmVkLlxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgYXJncy5pbmJvdW5kTGF5ZXJzKSB7XG4gICAgICBpZiAobGF5ZXIgIT0gbnVsbCkge1xuICAgICAgICBsYXllci5vdXRib3VuZE5vZGVzLnB1c2godGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGFyZ3Mub3V0Ym91bmRMYXllci5pbmJvdW5kTm9kZXMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3Qge1xuICAgIGNvbnN0IGluYm91bmROYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMuaW5ib3VuZExheWVycykge1xuICAgICAgaWYgKGxheWVyICE9IG51bGwpIHtcbiAgICAgICAgaW5ib3VuZE5hbWVzLnB1c2gobGF5ZXIubmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmJvdW5kTmFtZXMucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG91dGJvdW5kTGF5ZXI6IHRoaXMub3V0Ym91bmRMYXllciA/IHRoaXMub3V0Ym91bmRMYXllci5uYW1lIDogbnVsbCxcbiAgICAgIGluYm91bmRMYXllcnM6IGluYm91bmROYW1lcyxcbiAgICAgIG5vZGVJbmRpY2VzOiB0aGlzLm5vZGVJbmRpY2VzLFxuICAgICAgdGVuc29ySW5kaWNlczogdGhpcy50ZW5zb3JJbmRpY2VzXG4gICAgfTtcbiAgfVxufVxuXG4vKiogQ29uc3RydWN0b3IgYXJndW1lbnRzIGZvciBMYXllci4gKi9cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBMYXllckFyZ3Mge1xuICAvKipcbiAgICogSWYgZGVmaW5lZCwgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhbiBpbnB1dCBsYXllciB0byBpbnNlcnQgYmVmb3JlIHRoaXNcbiAgICogbGF5ZXIuIElmIGJvdGggYGlucHV0U2hhcGVgIGFuZCBgYmF0Y2hJbnB1dFNoYXBlYCBhcmUgZGVmaW5lZCxcbiAgICogYGJhdGNoSW5wdXRTaGFwZWAgd2lsbCBiZSB1c2VkLiBUaGlzIGFyZ3VtZW50IGlzIG9ubHkgYXBwbGljYWJsZSB0byBpbnB1dFxuICAgKiBsYXllcnMgKHRoZSBmaXJzdCBsYXllciBvZiBhIG1vZGVsKS5cbiAgICovXG4gIGlucHV0U2hhcGU/OiBTaGFwZTtcbiAgLyoqXG4gICAqIElmIGRlZmluZWQsIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYW4gaW5wdXQgbGF5ZXIgdG8gaW5zZXJ0IGJlZm9yZSB0aGlzXG4gICAqIGxheWVyLiBJZiBib3RoIGBpbnB1dFNoYXBlYCBhbmQgYGJhdGNoSW5wdXRTaGFwZWAgYXJlIGRlZmluZWQsXG4gICAqIGBiYXRjaElucHV0U2hhcGVgIHdpbGwgYmUgdXNlZC4gVGhpcyBhcmd1bWVudCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gaW5wdXRcbiAgICogbGF5ZXJzICh0aGUgZmlyc3QgbGF5ZXIgb2YgYSBtb2RlbCkuXG4gICAqL1xuICBiYXRjaElucHV0U2hhcGU/OiBTaGFwZTtcbiAgLyoqXG4gICAqIElmIGBpbnB1dFNoYXBlYCBpcyBzcGVjaWZpZWQgYW5kIGBiYXRjaElucHV0U2hhcGVgIGlzICpub3QqIHNwZWNpZmllZCxcbiAgICogYGJhdGNoU2l6ZWAgaXMgdXNlZCB0byBjb25zdHJ1Y3QgdGhlIGBiYXRjaElucHV0U2hhcGVgOiBgW2JhdGNoU2l6ZSxcbiAgICogLi4uaW5wdXRTaGFwZV1gXG4gICAqL1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgZGF0YS10eXBlIGZvciB0aGlzIGxheWVyLiBEZWZhdWx0cyB0byAnZmxvYXQzMicuXG4gICAqIFRoaXMgYXJndW1lbnQgaXMgb25seSBhcHBsaWNhYmxlIHRvIGlucHV0IGxheWVycyAodGhlIGZpcnN0IGxheWVyIG9mIGFcbiAgICogbW9kZWwpLlxuICAgKi9cbiAgZHR5cGU/OiBEYXRhVHlwZTtcbiAgLyoqIE5hbWUgZm9yIHRoaXMgbGF5ZXIuICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSB3ZWlnaHRzIG9mIHRoaXMgbGF5ZXIgYXJlIHVwZGF0YWJsZSBieSBgZml0YC5cbiAgICogRGVmYXVsdHMgdG8gdHJ1ZS5cbiAgICovXG4gIHRyYWluYWJsZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJbml0aWFsIHdlaWdodCB2YWx1ZXMgb2YgdGhlIGxheWVyLlxuICAgKi9cbiAgd2VpZ2h0cz86IFRlbnNvcltdO1xuICAvKiogTGVnYWN5IHN1cHBvcnQuIERvIG5vdCB1c2UgZm9yIG5ldyBjb2RlLiAqL1xuICBpbnB1dERUeXBlPzogRGF0YVR5cGU7XG59XG5cbi8vIElmIG5lY2Vzc2FyeSwgYWRkIGBvdXRwdXRgIGFyZ3VtZW50cyB0byB0aGUgQ2FsbEhvb2sgZnVuY3Rpb24uXG4vLyBUaGlzIGlzIGN1cnJlbnRseSB1c2VkIGZvciB0ZXN0aW5nIG9ubHksIGJ1dCBtYXkgYmUgdXNlZCBmb3IgZGVidWdnZXItcmVsYXRlZFxuLy8gcHVycG9zZXMgaW4gdGhlIGZ1dHVyZS5cbmV4cG9ydCB0eXBlIENhbGxIb29rID0gKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncykgPT4gdm9pZDtcblxubGV0IF9uZXh0TGF5ZXJJRCA9IDA7XG5cbi8qKlxuICogQSBsYXllciBpcyBhIGdyb3VwaW5nIG9mIG9wZXJhdGlvbnMgYW5kIHdlaWdodHMgdGhhdCBjYW4gYmUgY29tcG9zZWQgdG9cbiAqIGNyZWF0ZSBhIGB0Zi5MYXllcnNNb2RlbGAuXG4gKlxuICogTGF5ZXJzIGFyZSBjb25zdHJ1Y3RlZCBieSB1c2luZyB0aGUgZnVuY3Rpb25zIHVuZGVyIHRoZVxuICogW3RmLmxheWVyc10oI0xheWVycy1CYXNpYykgbmFtZXNwYWNlLlxuICpcbiAqIEBkb2Mge2hlYWRpbmc6ICdMYXllcnMnLCBzdWJoZWFkaW5nOiAnQ2xhc3NlcycsIG5hbWVzcGFjZTogJ2xheWVycyd9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXllciBleHRlbmRzIHNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlIHtcbiAgLyoqIE5hbWUgZm9yIHRoaXMgbGF5ZXIuIE11c3QgYmUgdW5pcXVlIHdpdGhpbiBhIG1vZGVsLiAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMaXN0IG9mIElucHV0U3BlYyBjbGFzcyBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEVhY2ggZW50cnkgZGVzY3JpYmVzIG9uZSByZXF1aXJlZCBpbnB1dDpcbiAgICogLSBuZGltXG4gICAqIC0gZHR5cGVcbiAgICogQSBsYXllciB3aXRoIGBuYCBpbnB1dCB0ZW5zb3JzIG11c3QgaGF2ZSBhbiBgaW5wdXRTcGVjYCBvZiBsZW5ndGggYG5gLlxuICAgKi9cbiAgaW5wdXRTcGVjOiBJbnB1dFNwZWNbXTtcbiAgc3VwcG9ydHNNYXNraW5nOiBib29sZWFuO1xuICAvKiogV2hldGhlciB0aGUgbGF5ZXIgd2VpZ2h0cyB3aWxsIGJlIHVwZGF0ZWQgZHVyaW5nIHRyYWluaW5nLiAqL1xuICBwcm90ZWN0ZWQgdHJhaW5hYmxlXzogYm9vbGVhbjtcbiAgYmF0Y2hJbnB1dFNoYXBlOiBTaGFwZTtcbiAgZHR5cGU6IERhdGFUeXBlO1xuICBpbml0aWFsV2VpZ2h0czogVGVuc29yW107XG5cbiAgaW5ib3VuZE5vZGVzOiBOb2RlW107XG4gIG91dGJvdW5kTm9kZXM6IE5vZGVbXTtcblxuICBhY3Rpdml0eVJlZ3VsYXJpemVyOiBSZWd1bGFyaXplcjtcblxuICBwcm90ZWN0ZWQgX3RyYWluYWJsZVdlaWdodHM6IExheWVyVmFyaWFibGVbXTtcbiAgcHJpdmF0ZSBfbm9uVHJhaW5hYmxlV2VpZ2h0czogTGF5ZXJWYXJpYWJsZVtdO1xuICBwcml2YXRlIF9sb3NzZXM6IFJlZ3VsYXJpemVyRm5bXTtcbiAgLy8gVE9ETyhjYWlzKTogX3VwZGF0ZXMgaXMgY3VycmVudGx5IHVudXNlZC5cbiAgcHJpdmF0ZSBfdXBkYXRlczogVGVuc29yW107XG4gIHByaXZhdGUgX2J1aWx0OiBib29sZWFuO1xuICBwcml2YXRlIF9jYWxsSG9vazogQ2FsbEhvb2sgPSBudWxsO1xuXG4gIHByaXZhdGUgX2FkZGVkV2VpZ2h0TmFtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcblxuICAvLyBQb3J0aW5nIE5vdGVzOiBQeUtlcmFzIGRvZXMgbm90IGhhdmUgdGhpcyBwcm9wZXJ0eSBpbiB0aGlzIGJhc2UgTGF5ZXJcbiAgLy8gICBjbGFzcy4gSW5zdGVhZCBsZXRzIExheWVyIHN1YmNsYXNzIHNldCBpdCBkeW5hbWljYWxseSBhbmQgY2hlY2tzIHRoZVxuICAvLyAgIHZhbHVlIHdpdGggYGhhc2F0dHJgLiBJbiB0ZmpzLWxheWVycywgd2UgbGV0IHRoaXMgYmUgYSBtZW1iZXIgb2YgdGhpc1xuICAvLyAgIGJhc2UgY2xhc3MuXG4gIHByb3RlY3RlZCBfc3RhdGVmdWwgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgX3JlZkNvdW50OiBudW1iZXJ8bnVsbDtcblxuICAvLyBBIGZsYWcgZm9yIHdoZXRoZXIgZmFzdCAoaS5lLiwgYWxsLXplcm8pIHdlaWdodCBpbml0aWFsaXphdGlvbiBpcyB0b1xuICAvLyBiZSB1c2VkIGR1cmluZyBgYnVpbGQoKWAgY2FsbC4gVGhpcyBzcGVlZHMgdXAgd2VpZ2h0IGluaXRpYWxpemF0aW9uXG4gIC8vIGJ5IHNhdmluZyB1bm5lY2Vzc2FyeSBjYWxscyB0byBleHBlbnNpdmUgaW5pdGlhbGl6ZXJzIGluIGNhc2VzIHdoZXJlXG4gIC8vIHRoZSBpbml0aWFsaXplZCB2YWx1ZXMgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSBsb2FkZWQgd2VpZ2h0IHZhbHVlc1xuICAvLyBkdXJpbmcgbW9kZWwgbG9hZGluZy5cbiAgcHJpdmF0ZSBmYXN0V2VpZ2h0SW5pdER1cmluZ0J1aWxkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IExheWVyQXJncyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gX25leHRMYXllcklEKys7XG5cbiAgICB0aGlzLmFjdGl2aXR5UmVndWxhcml6ZXIgPSBudWxsO1xuXG4gICAgdGhpcy5pbnB1dFNwZWMgPSBudWxsO1xuICAgIHRoaXMuc3VwcG9ydHNNYXNraW5nID0gZmFsc2U7XG5cbiAgICAvLyBUaGVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgc2V0IHVwb24gY2FsbCBvZiB0aGlzLmJ1aWxkKClcbiAgICB0aGlzLl90cmFpbmFibGVXZWlnaHRzID0gW107XG4gICAgdGhpcy5fbm9uVHJhaW5hYmxlV2VpZ2h0cyA9IFtdO1xuICAgIHRoaXMuX2xvc3NlcyA9IFtdO1xuICAgIHRoaXMuX3VwZGF0ZXMgPSBbXTtcbiAgICB0aGlzLl9idWlsdCA9IGZhbHNlO1xuXG4gICAgLypcbiAgICAgIFRoZXNlIGxpc3RzIHdpbGwgYmUgZmlsbGVkIHZpYSBzdWNjZXNzaXZlIGNhbGxzXG4gICAgICB0byB0aGlzLmFkZEluYm91bmROb2RlKCkuXG4gICAgICovXG4gICAgdGhpcy5pbmJvdW5kTm9kZXMgPSBbXTtcbiAgICB0aGlzLm91dGJvdW5kTm9kZXMgPSBbXTtcblxuICAgIGxldCBuYW1lID0gYXJncy5uYW1lO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5nZXRDbGFzc05hbWUoKTtcbiAgICAgIG5hbWUgPSBnZW5lcmljX3V0aWxzLnRvU25ha2VDYXNlKHByZWZpeCkgKyAnXycgKyBnZXRVaWQocHJlZml4KTtcbiAgICB9XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIHRoaXMudHJhaW5hYmxlXyA9IGFyZ3MudHJhaW5hYmxlID09IG51bGwgPyB0cnVlIDogYXJncy50cmFpbmFibGU7XG5cbiAgICBpZiAoYXJncy5pbnB1dFNoYXBlICE9IG51bGwgfHwgYXJncy5iYXRjaElucHV0U2hhcGUgIT0gbnVsbCkge1xuICAgICAgLypcbiAgICAgICAgSW4gdGhpcyBjYXNlIHdlIHdpbGwgbGF0ZXIgY3JlYXRlIGFuIGlucHV0IGxheWVyXG4gICAgICAgIHRvIGluc2VydCBiZWZvcmUgdGhlIGN1cnJlbnQgbGF5ZXJcbiAgICAgICAqL1xuICAgICAgbGV0IGJhdGNoSW5wdXRTaGFwZTogU2hhcGU7XG4gICAgICBpZiAoYXJncy5iYXRjaElucHV0U2hhcGUgIT0gbnVsbCkge1xuICAgICAgICBiYXRjaElucHV0U2hhcGUgPSBhcmdzLmJhdGNoSW5wdXRTaGFwZTtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5pbnB1dFNoYXBlICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGJhdGNoU2l6ZTogbnVtYmVyID0gbnVsbDtcbiAgICAgICAgaWYgKGFyZ3MuYmF0Y2hTaXplICE9IG51bGwpIHtcbiAgICAgICAgICBiYXRjaFNpemUgPSBhcmdzLmJhdGNoU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBiYXRjaElucHV0U2hhcGUgPSBbYmF0Y2hTaXplXS5jb25jYXQoYXJncy5pbnB1dFNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmF0Y2hJbnB1dFNoYXBlID0gYmF0Y2hJbnB1dFNoYXBlO1xuXG4gICAgICAvLyBTZXQgZHR5cGUuXG4gICAgICBsZXQgZHR5cGUgPSBhcmdzLmR0eXBlO1xuICAgICAgaWYgKGR0eXBlID09IG51bGwpIHtcbiAgICAgICAgZHR5cGUgPSBhcmdzLmlucHV0RFR5cGU7XG4gICAgICB9XG4gICAgICBpZiAoZHR5cGUgPT0gbnVsbCkge1xuICAgICAgICBkdHlwZSA9ICdmbG9hdDMyJztcbiAgICAgIH1cbiAgICAgIHRoaXMuZHR5cGUgPSBkdHlwZTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy53ZWlnaHRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFdlaWdodHMgPSBhcmdzLndlaWdodHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbFdlaWdodHMgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFRoZSB2YWx1ZSBvZiBgX3JlZkNvdW50YCBpcyBpbml0aWFsaXplZCB0byBudWxsLiBXaGVuIHRoZSBsYXllciBpcyB1c2VkXG4gICAgLy8gaW4gYSBzeW1ib2xpYyB3YXkgZm9yIHRoZSBmaXJzdCB0aW1lLCBpdCB3aWxsIGJlIHNldCB0byAxLlxuICAgIHRoaXMuX3JlZkNvdW50ID0gbnVsbDtcblxuICAgIHRoaXMuZmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgbGF5ZXIgYW5kIGl0cyBpbmRleCB0byBhIHVuaXF1ZSAoaW1tdXRhYmxlIHR5cGUpIG5hbWUuXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBpbnRlcm5hbGx5IHdpdGggYHRoaXMuY29udGFpbmVyTm9kZXNgLlxuICAgKiBAcGFyYW0gbGF5ZXIgVGhlIGxheWVyLlxuICAgKiBAcGFyYW0gbm9kZUluZGV4IFRoZSBsYXllcidzIHBvc2l0aW9uIChlLmcuIHZpYSBlbnVtZXJhdGUpIGluIGEgbGlzdCBvZlxuICAgKiAgIG5vZGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgdW5pcXVlIG5hbWUuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIG5vZGVLZXkobGF5ZXI6IExheWVyLCBub2RlSW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBsYXllci5uYW1lICsgJ19pYi0nICsgbm9kZUluZGV4LnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGlzLmluYm91bmROb2RlIGF0IGluZGV4IG5vZGVJbmRleC5cbiAgICpcbiAgICogUG9ydGluZyBub3RlOiBUaGlzIGlzIGEgcmVwbGFjZW1lbnQgZm9yIF9nZXRfbm9kZV9hdHRyaWJ1dGVfYXRfaW5kZXgoKVxuICAgKiBAcGFyYW0gbm9kZUluZGV4XG4gICAqIEBwYXJhbSBhdHRyTmFtZSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHJlbGF0ZWQgdG8gcmVxdWVzdCBmb3IgdGhpcyBub2RlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXROb2RlQXRJbmRleChub2RlSW5kZXg6IG51bWJlciwgYXR0ck5hbWU6IHN0cmluZyk6IE5vZGUge1xuICAgIGlmICh0aGlzLmluYm91bmROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgICAgICAgJ1RoZSBsYXllciBoYXMgbmV2ZXIgYmVlbiBjYWxsZWQgJyArXG4gICAgICAgICAgYGFuZCB0aHVzIGhhcyBubyBkZWZpbmVkICR7YXR0ck5hbWV9LmApO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmJvdW5kTm9kZXMubGVuZ3RoIDw9IG5vZGVJbmRleCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYEFza2VkIHRvIGdldCAke2F0dHJOYW1lfSBhdCBub2RlICR7bm9kZUluZGV4fSwgYCArXG4gICAgICAgICAgYGJ1dCB0aGUgbGF5ZXIgaGFzIG9ubHkgJHt0aGlzLmluYm91bmROb2Rlcy5sZW5ndGh9IGluYm91bmQgbm9kZXMuYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluYm91bmROb2Rlc1tub2RlSW5kZXhdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgaW5wdXQgdGVuc29yKHMpIG9mIGEgbGF5ZXIgYXQgYSBnaXZlbiBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUluZGV4IEludGVnZXIsIGluZGV4IG9mIHRoZSBub2RlIGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdGhlXG4gICAqICAgYXR0cmlidXRlLiBFLmcuIGBub2RlSW5kZXg9MGAgd2lsbCBjb3JyZXNwb25kIHRvIHRoZSBmaXJzdCB0aW1lIHRoZSBsYXllclxuICAgKiAgIHdhcyBjYWxsZWQuXG4gICAqXG4gICAqIEByZXR1cm4gQSB0ZW5zb3IgKG9yIGxpc3Qgb2YgdGVuc29ycyBpZiB0aGUgbGF5ZXIgaGFzIG11bHRpcGxlIGlucHV0cykuXG4gICAqL1xuICBnZXRJbnB1dEF0KG5vZGVJbmRleDogbnVtYmVyKTogU3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXSB7XG4gICAgcmV0dXJuIGdlbmVyaWNfdXRpbHMuc2luZ2xldG9uT3JBcnJheShcbiAgICAgICAgdGhpcy5nZXROb2RlQXRJbmRleChub2RlSW5kZXgsICdpbnB1dCcpLmlucHV0VGVuc29ycyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBvdXRwdXQgdGVuc29yKHMpIG9mIGEgbGF5ZXIgYXQgYSBnaXZlbiBub2RlLlxuICAgKlxuICAgKiBAcGFyYW0gbm9kZUluZGV4IEludGVnZXIsIGluZGV4IG9mIHRoZSBub2RlIGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdGhlXG4gICAqICAgYXR0cmlidXRlLiBFLmcuIGBub2RlSW5kZXg9MGAgd2lsbCBjb3JyZXNwb25kIHRvIHRoZSBmaXJzdCB0aW1lIHRoZSBsYXllclxuICAgKiAgIHdhcyBjYWxsZWQuXG4gICAqXG4gICAqIEByZXR1cm4gQSB0ZW5zb3IgKG9yIGxpc3Qgb2YgdGVuc29ycyBpZiB0aGUgbGF5ZXIgaGFzIG11bHRpcGxlIG91dHB1dHMpLlxuICAgKi9cbiAgZ2V0T3V0cHV0QXQobm9kZUluZGV4OiBudW1iZXIpOiBTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdIHtcbiAgICByZXR1cm4gZ2VuZXJpY191dGlscy5zaW5nbGV0b25PckFycmF5KFxuICAgICAgICB0aGlzLmdldE5vZGVBdEluZGV4KG5vZGVJbmRleCwgJ291dHB1dCcpLm91dHB1dFRlbnNvcnMpO1xuICB9XG5cbiAgLy8gUHJvcGVydGllc1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGlucHV0IHRlbnNvcihzKSBvZiBhIGxheWVyLlxuICAgKlxuICAgKiBPbmx5IGFwcGxpY2FibGUgaWYgdGhlIGxheWVyIGhhcyBleGFjdGx5IG9uZSBpbmJvdW5kIG5vZGUsXG4gICAqIGkuZS4gaWYgaXQgaXMgY29ubmVjdGVkIHRvIG9uZSBpbmNvbWluZyBsYXllci5cbiAgICpcbiAgICogQHJldHVybiBJbnB1dCB0ZW5zb3Igb3IgbGlzdCBvZiBpbnB1dCB0ZW5zb3JzLlxuICAgKlxuICAgKiBAZXhjZXB0aW9uIEF0dHJpYnV0ZUVycm9yIGlmIHRoZSBsYXllciBpcyBjb25uZWN0ZWQgdG8gbW9yZSB0aGFuIG9uZVxuICAgKiAgIGluY29taW5nIGxheWVycy5cbiAgICovXG4gIGdldCBpbnB1dCgpOiBTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdIHtcbiAgICBpZiAodGhpcy5pbmJvdW5kTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEF0dHJpYnV0ZUVycm9yKFxuICAgICAgICAgIGBMYXllciAke3RoaXMubmFtZX1gICtcbiAgICAgICAgICAnIGhhcyBtdWx0aXBsZSBpbmJvdW5kIG5vZGVzLCAnICtcbiAgICAgICAgICAnaGVuY2UgdGhlIG5vdGlvbiBvZiBcImxheWVyIGlucHV0XCIgJyArXG4gICAgICAgICAgJ2lzIGlsbC1kZWZpbmVkLiAnICtcbiAgICAgICAgICAnVXNlIGBnZXRJbnB1dEF0KG5vZGVJbmRleClgIGluc3RlYWQuJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmluYm91bmROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBBdHRyaWJ1dGVFcnJvcihcbiAgICAgICAgICBgTGF5ZXIgJHt0aGlzLm5hbWV9YCArXG4gICAgICAgICAgJyBpcyBub3QgY29ubmVjdGVkLCBubyBpbnB1dCB0byByZXR1cm4uJyk7XG4gICAgfVxuICAgIHJldHVybiBnZW5lcmljX3V0aWxzLnNpbmdsZXRvbk9yQXJyYXkoXG4gICAgICAgIHRoaXMuZ2V0Tm9kZUF0SW5kZXgoMCwgJ2lucHV0JykuaW5wdXRUZW5zb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG91dHB1dCB0ZW5zb3Iocykgb2YgYSBsYXllci5cbiAgICpcbiAgICogT25seSBhcHBsaWNhYmxlIGlmIHRoZSBsYXllciBoYXMgZXhhY3RseSBvbmUgaW5ib3VuZCBub2RlLFxuICAgKiBpLmUuIGlmIGl0IGlzIGNvbm5lY3RlZCB0byBvbmUgaW5jb21pbmcgbGF5ZXIuXG4gICAqXG4gICAqIEByZXR1cm4gT3V0cHV0IHRlbnNvciBvciBsaXN0IG9mIG91dHB1dCB0ZW5zb3JzLlxuICAgKlxuICAgKiBAZXhjZXB0aW9uIEF0dHJpYnV0ZUVycm9yIGlmIHRoZSBsYXllciBpcyBjb25uZWN0ZWQgdG8gbW9yZSB0aGFuIG9uZVxuICAgKiAgIGluY29taW5nIGxheWVycy5cbiAgICovXG4gIGdldCBvdXRwdXQoKTogU3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXSB7XG4gICAgaWYgKHRoaXMuaW5ib3VuZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEF0dHJpYnV0ZUVycm9yKFxuICAgICAgICAgIGBMYXllciAke3RoaXMubmFtZX1gICtcbiAgICAgICAgICAnIGhhcyBubyBpbmJvdW5kIG5vZGVzLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmJvdW5kTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEF0dHJpYnV0ZUVycm9yKFxuICAgICAgICAgIGBMYXllciAke3RoaXMubmFtZX1gICtcbiAgICAgICAgICAnIGhhcyBtdWx0aXBsZSBpbmJvdW5kIG5vZGVzLCAnICtcbiAgICAgICAgICAnaGVuY2UgdGhlIG5vdGlvbiBvZiBcImxheWVyIG91dHB1dFwiICcgK1xuICAgICAgICAgICdpcyBpbGwtZGVmaW5lZC4gJyArXG4gICAgICAgICAgJ1VzZSBgZ2V0T3V0cHV0QXQobm9kZUluZGV4KWAgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyaWNfdXRpbHMuc2luZ2xldG9uT3JBcnJheShcbiAgICAgICAgdGhpcy5nZXROb2RlQXRJbmRleCgwLCAnb3V0cHV0Jykub3V0cHV0VGVuc29ycyk7XG4gIH1cblxuICBnZXQgbG9zc2VzKCk6IFJlZ3VsYXJpemVyRm5bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIExheWVyJ3MgY3VycmVudCBsb3NzIHZhbHVlcy5cbiAgICpcbiAgICogVXNlZCBmb3IgcmVndWxhcml6ZXJzIGR1cmluZyB0cmFpbmluZy5cbiAgICovXG4gIGNhbGN1bGF0ZUxvc3NlcygpOiBTY2FsYXJbXSB7XG4gICAgLy8gUG9ydGluZyBOb2RlOiBUaGlzIGlzIGFuIGF1Z21lbnRhdGlvbiB0byBMYXllci5sb3NzIGluIFB5S2VyYXMuXG4gICAgLy8gICBJbiBQeUtlcmFzLCBMYXllci5sb3NzIHJldHVybnMgc3ltYm9saWMgdGVuc29ycy4gSGVyZSBhIGNvbmNyZXRlXG4gICAgLy8gICBUZW5zb3IgKHNwZWNpZmljYWxseSBTY2FsYXIpIHZhbHVlcyBhcmUgcmV0dXJuZWQuIFRoaXMgaXMgZHVlIHRvIHRoZVxuICAgIC8vICAgaW1wZXJhdGl2ZSBiYWNrZW5kLlxuICAgIHJldHVybiB0aGlzLmxvc3Nlcy5tYXAobG9zc0ZuID0+IGxvc3NGbigpKTtcbiAgfVxuXG4gIGdldCB1cGRhdGVzKCk6IFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlcztcbiAgfVxuXG4gIGdldCBidWlsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbHQ7XG4gIH1cblxuICBzZXQgYnVpbHQoYnVpbHQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9idWlsdCA9IGJ1aWx0O1xuICB9XG5cbiAgZ2V0IHRyYWluYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50cmFpbmFibGVfO1xuICB9XG5cbiAgc2V0IHRyYWluYWJsZSh0cmFpbmFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90cmFpbmFibGVXZWlnaHRzLmZvckVhY2godyA9PiB3LnRyYWluYWJsZSA9IHRyYWluYWJsZSk7XG4gICAgdGhpcy50cmFpbmFibGVfID0gdHJhaW5hYmxlO1xuICB9XG5cbiAgZ2V0IHRyYWluYWJsZVdlaWdodHMoKTogTGF5ZXJWYXJpYWJsZVtdIHtcbiAgICBpZiAodGhpcy50cmFpbmFibGVfKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhaW5hYmxlV2VpZ2h0cy5maWx0ZXIodyA9PiB3LnRyYWluYWJsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBzZXQgdHJhaW5hYmxlV2VpZ2h0cyh3ZWlnaHRzOiBMYXllclZhcmlhYmxlW10pIHtcbiAgICB0aGlzLl90cmFpbmFibGVXZWlnaHRzID0gd2VpZ2h0cztcbiAgfVxuXG4gIGdldCBub25UcmFpbmFibGVXZWlnaHRzKCk6IExheWVyVmFyaWFibGVbXSB7XG4gICAgaWYgKHRoaXMudHJhaW5hYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHJhaW5hYmxlV2VpZ2h0cy5maWx0ZXIodyA9PiAhdy50cmFpbmFibGUpXG4gICAgICAgICAgLmNvbmNhdCh0aGlzLl9ub25UcmFpbmFibGVXZWlnaHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3RyYWluYWJsZVdlaWdodHMuY29uY2F0KHRoaXMuX25vblRyYWluYWJsZVdlaWdodHMpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBub25UcmFpbmFibGVXZWlnaHRzKHdlaWdodHM6IExheWVyVmFyaWFibGVbXSkge1xuICAgIHRoaXMuX25vblRyYWluYWJsZVdlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBsaXN0cyB0cmFpbmFibGVXZWlnaHRzIGFuZCBub25UcmFpbmFibGVXZWlnaHRzXG4gICAqIChpbiB0aGlzIG9yZGVyKS5cbiAgICovXG4gIGdldCB3ZWlnaHRzKCk6IExheWVyVmFyaWFibGVbXSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaW5hYmxlV2VpZ2h0cy5jb25jYXQodGhpcy5ub25UcmFpbmFibGVXZWlnaHRzKTtcbiAgfVxuXG4gIGdldCBzdGF0ZWZ1bCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVmdWw7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHN0YXRlcyBvZiB0aGUgbGF5ZXIuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIG9mIHRoZSBiYXNlIExheWVyIGNsYXNzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAqIFN1YmNsYXNzZXMgdGhhdCBhcmUgc3RhdGVmdWwgKGUuZy4sIHN0YXRlZnVsIFJOTnMpIHNob3VsZCBvdmVycmlkZSB0aGlzXG4gICAqIG1ldGhvZC5cbiAgICovXG4gIHJlc2V0U3RhdGVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZWZ1bCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdDYW5ub3QgY2FsbCB0aGUgcmVzZXRTdGF0ZXMoKSBtZXRob2Qgb2YgYSBub24tc3RhdGVmdWwgTGF5ZXIgJyArXG4gICAgICAgICAgJ29iamVjdC4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGNvbXBhdGliaWxpdHkgYmV0d2VlbiB0aGUgbGF5ZXIgYW5kIHByb3ZpZGVkIGlucHV0cy5cbiAgICpcbiAgICogVGhpcyBjaGVja3MgdGhhdCB0aGUgdGVuc29yKHMpIGBpbnB1dGBcbiAgICogdmVyaWZ5IHRoZSBpbnB1dCBhc3N1bXB0aW9ucyBvZiB0aGUgbGF5ZXJcbiAgICogKGlmIGFueSkuIElmIG5vdCwgZXhjZXB0aW9ucyBhcmUgcmFpc2VkLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRzIElucHV0IHRlbnNvciBvciBsaXN0IG9mIGlucHV0IHRlbnNvcnMuXG4gICAqXG4gICAqIEBleGNlcHRpb24gVmFsdWVFcnJvciBpbiBjYXNlIG9mIG1pc21hdGNoIGJldHdlZW5cbiAgICogICB0aGUgcHJvdmlkZWQgaW5wdXRzIGFuZCB0aGUgZXhwZWN0YXRpb25zIG9mIHRoZSBsYXllci5cbiAgICovXG4gIHByb3RlY3RlZCBhc3NlcnRJbnB1dENvbXBhdGliaWxpdHkoaW5wdXRzOiBUZW5zb3J8VGVuc29yW118U3ltYm9saWNUZW5zb3J8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3ltYm9saWNUZW5zb3JbXSk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0c0xpc3QgPSBnZW5lcmljX3V0aWxzLnRvTGlzdChpbnB1dHMpO1xuICAgIGlmICh0aGlzLmlucHV0U3BlYyA9PSBudWxsIHx8IHRoaXMuaW5wdXRTcGVjLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dFNwZWMgPSBnZW5lcmljX3V0aWxzLnRvTGlzdCh0aGlzLmlucHV0U3BlYyk7XG4gICAgaWYgKGlucHV0c0xpc3QubGVuZ3RoICE9PSBpbnB1dFNwZWMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgTGF5ZXIgJHt0aGlzLm5hbWV9IGV4cGVjdHMgJHtpbnB1dFNwZWMubGVuZ3RofSBpbnB1dHMsIGAgK1xuICAgICAgICAgIGBidXQgaXQgcmVjZWl2ZWQgJHtpbnB1dHNMaXN0Lmxlbmd0aH0gaW5wdXQgdGVuc29ycy4gYCArXG4gICAgICAgICAgYElucHV0IHJlY2VpdmVkOiAke2lucHV0c31gKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaW5wdXRJbmRleCA9IDA7IGlucHV0SW5kZXggPCBpbnB1dHNMaXN0Lmxlbmd0aDsgaW5wdXRJbmRleCsrKSB7XG4gICAgICBjb25zdCB4ID0gaW5wdXRzTGlzdFtpbnB1dEluZGV4XTtcbiAgICAgIGNvbnN0IHNwZWM6IElucHV0U3BlYyA9IGlucHV0U3BlY1tpbnB1dEluZGV4XTtcbiAgICAgIGlmIChzcGVjID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIG5kaW0uXG4gICAgICBjb25zdCBuZGltID0geC5yYW5rO1xuICAgICAgaWYgKHNwZWMubmRpbSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChuZGltICE9PSBzcGVjLm5kaW0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgYElucHV0ICR7aW5wdXRJbmRleH0gaXMgaW5jb21wYXRpYmxlIHdpdGggbGF5ZXIgJHt0aGlzLm5hbWV9OiBgICtcbiAgICAgICAgICAgICAgYGV4cGVjdGVkIG5kaW09JHtzcGVjLm5kaW19LCBmb3VuZCBuZGltPSR7bmRpbX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNwZWMubWF4TkRpbSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChuZGltID4gc3BlYy5tYXhORGltKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGBJbnB1dCAke2lucHV0SW5kZXh9IGlzIGluY29tcGF0aWJsZSB3aXRoIGxheWVyICR7dGhpcy5uYW1lfWAgK1xuICAgICAgICAgICAgICBgOiBleHBlY3RlZCBtYXhfbmRpbT0ke3NwZWMubWF4TkRpbX0sIGZvdW5kIG5kaW09JHtuZGltfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3BlYy5taW5ORGltICE9IG51bGwpIHtcbiAgICAgICAgaWYgKG5kaW0gPCBzcGVjLm1pbk5EaW0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgYElucHV0ICR7aW5wdXRJbmRleH0gaXMgaW5jb21wYXRpYmxlIHdpdGggbGF5ZXIgJHt0aGlzLm5hbWV9YCArXG4gICAgICAgICAgICAgIGA6IGV4cGVjdGVkIG1pbl9uZGltPSR7c3BlYy5taW5ORGltfSwgZm91bmQgbmRpbT0ke25kaW19LmApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGR0eXBlLlxuICAgICAgaWYgKHNwZWMuZHR5cGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoeC5kdHlwZSAhPT0gc3BlYy5kdHlwZSkge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICBgSW5wdXQgJHtpbnB1dEluZGV4fSBpcyBpbmNvbXBhdGlibGUgd2l0aCBsYXllciAke3RoaXMubmFtZX0gYCArXG4gICAgICAgICAgICAgIGA6IGV4cGVjdGVkIGR0eXBlPSR7c3BlYy5kdHlwZX0sIGZvdW5kIGR0eXBlPSR7eC5kdHlwZX0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgc3BlY2lmaWMgc2hhcGUgYXhlcy5cbiAgICAgIGlmIChzcGVjLmF4ZXMpIHtcbiAgICAgICAgY29uc3QgeFNoYXBlID0geC5zaGFwZTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3BlYy5heGVzKSB7XG4gICAgICAgICAgY29uc3QgYXhpcyA9IE51bWJlcihrZXkpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3BlYy5heGVzW2tleV07XG4gICAgICAgICAgLy8gUGVyZm9ybSBQeXRob24tc3R5bGUgc2xpY2luZyBpbiBjYXNlIGF4aXMgPCAwO1xuICAgICAgICAgIC8vIFRPRE8oY2Fpcyk6IFVzZSBodHRwczovL2dpdGh1Yi5jb20vYWx2aXZpL3R5cGVzY3JpcHQtdW5kZXJzY29yZSB0b1xuICAgICAgICAgIC8vIGVuc3VyZSB0eXBlIHNhZmV0eSB0aHJvdWdoIFVuZGVyc2NvcmUgY2FsbHMuXG4gICAgICAgICAgY29uc3QgeFNoYXBlQXRBeGlzID1cbiAgICAgICAgICAgICAgYXhpcyA+PSAwID8geFNoYXBlW2F4aXNdIDogeFNoYXBlW3hTaGFwZS5sZW5ndGggKyBheGlzXTtcbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiBbdmFsdWUsIG51bGxdLmluZGV4T2YoeFNoYXBlQXRBeGlzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgICAgIGBJbnB1dCAke2lucHV0SW5kZXh9IGlzIGluY29tcGF0aWJsZSB3aXRoIGxheWVyIGAgK1xuICAgICAgICAgICAgICAgIGAke3RoaXMubmFtZX06IGV4cGVjdGVkIGF4aXMgJHtheGlzfSBvZiBpbnB1dCBzaGFwZSB0byBgICtcbiAgICAgICAgICAgICAgICBgaGF2ZSB2YWx1ZSAke3ZhbHVlfSBidXQgZ290IHNoYXBlICR7eFNoYXBlfS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgc2hhcGUuXG4gICAgICBpZiAoc3BlYy5zaGFwZSAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BlYy5zaGFwZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNvbnN0IHNwZWNEaW0gPSBzcGVjLnNoYXBlW2ldO1xuICAgICAgICAgIGNvbnN0IGRpbSA9IHguc2hhcGVbaV07XG4gICAgICAgICAgaWYgKHNwZWNEaW0gIT0gbnVsbCAmJiBkaW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHNwZWNEaW0gIT09IGRpbSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBJbnB1dCAke2lucHV0SW5kZXh9IGlzIGluY29tcGF0aWJsZSB3aXRoIGxheWVyIGAgK1xuICAgICAgICAgICAgICAgICAgYCR7dGhpcy5uYW1lfTogZXhwZWN0ZWQgc2hhcGU9JHtzcGVjLnNoYXBlfSwgYCArXG4gICAgICAgICAgICAgICAgICBgZm91bmQgc2hhcGU9JHt4LnNoYXBlfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB3aGVyZSB0aGUgbGF5ZXIncyBsb2dpYyBsaXZlcy5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0cyBJbnB1dCB0ZW5zb3IsIG9yIGxpc3QvdHVwbGUgb2YgaW5wdXQgdGVuc29ycy5cbiAgICogQHBhcmFtIGt3YXJncyBBZGRpdGlvbmFsIGtleXdvcmQgYXJndW1lbnRzLlxuICAgKlxuICAgKiBAcmV0dXJuIEEgdGVuc29yIG9yIGxpc3QvdHVwbGUgb2YgdGVuc29ycy5cbiAgICovXG4gIGNhbGwoaW5wdXRzOiBUZW5zb3J8VGVuc29yW10sIGt3YXJnczogS3dhcmdzKTogVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gaW5wdXRzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGludm9rZUNhbGxIb29rKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncykge1xuICAgIGlmICh0aGlzLl9jYWxsSG9vayAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9jYWxsSG9vayhpbnB1dHMsIGt3YXJncyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjYWxsIGhvb2suXG4gICAqIFRoaXMgaXMgY3VycmVudGx5IHVzZWQgZm9yIHRlc3Rpbmcgb25seS5cbiAgICogQHBhcmFtIGNhbGxIb29rXG4gICAqL1xuICBzZXRDYWxsSG9vayhjYWxsSG9vazogQ2FsbEhvb2spIHtcbiAgICB0aGlzLl9jYWxsSG9vayA9IGNhbGxIb29rO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGNhbGwgaG9vay5cbiAgICogVGhpcyBpcyBjdXJyZW50bHkgdXNlZCBmb3IgdGVzdGluZyBvbmx5LlxuICAgKi9cbiAgY2xlYXJDYWxsSG9vaygpIHtcbiAgICB0aGlzLl9jYWxsSG9vayA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIG9yIGV4ZWN1dGVzIGEgYExheWVyYCdzIGxvZ2ljLlxuICAgKlxuICAgKiBXaGVuIGNhbGxlZCB3aXRoIGB0Zi5UZW5zb3JgKHMpLCBleGVjdXRlIHRoZSBgTGF5ZXJgJ3MgY29tcHV0YXRpb24gYW5kXG4gICAqIHJldHVybiBUZW5zb3IocykuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBkZW5zZUxheWVyID0gdGYubGF5ZXJzLmRlbnNlKHtcbiAgICogICB1bml0czogMSxcbiAgICogICBrZXJuZWxJbml0aWFsaXplcjogJ3plcm9zJyxcbiAgICogICB1c2VCaWFzOiBmYWxzZVxuICAgKiB9KTtcbiAgICpcbiAgICogLy8gSW52b2tlIHRoZSBsYXllcidzIGFwcGx5KCkgbWV0aG9kIHdpdGggYSBgdGYuVGVuc29yYCAod2l0aCBjb25jcmV0ZVxuICAgKiAvLyBudW1lcmljIHZhbHVlcykuXG4gICAqIGNvbnN0IGlucHV0ID0gdGYub25lcyhbMiwgMl0pO1xuICAgKiBjb25zdCBvdXRwdXQgPSBkZW5zZUxheWVyLmFwcGx5KGlucHV0KTtcbiAgICpcbiAgICogLy8gVGhlIG91dHB1dCdzIHZhbHVlIGlzIGV4cGVjdGVkIHRvIGJlIFtbMF0sIFswXV0sIGR1ZSB0byB0aGUgZmFjdCB0aGF0XG4gICAqIC8vIHRoZSBkZW5zZSBsYXllciBoYXMgYSBrZXJuZWwgaW5pdGlhbGl6ZWQgdG8gYWxsLXplcm9zIGFuZCBkb2VzIG5vdCBoYXZlXG4gICAqIC8vIGEgYmlhcy5cbiAgICogb3V0cHV0LnByaW50KCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBXaGVuIGNhbGxlZCB3aXRoIGB0Zi5TeW1ib2xpY1RlbnNvcmAocyksIHRoaXMgd2lsbCBwcmVwYXJlIHRoZSBsYXllciBmb3JcbiAgICogZnV0dXJlIGV4ZWN1dGlvbi4gIFRoaXMgZW50YWlscyBpbnRlcm5hbCBib29rLWtlZXBpbmcgb24gc2hhcGVzIG9mXG4gICAqIGV4cGVjdGVkIFRlbnNvcnMsIHdpcmluZyBsYXllcnMgdG9nZXRoZXIsIGFuZCBpbml0aWFsaXppbmcgd2VpZ2h0cy5cbiAgICpcbiAgICogQ2FsbGluZyBgYXBwbHlgIHdpdGggYHRmLlN5bWJvbGljVGVuc29yYHMgYXJlIHR5cGljYWxseSB1c2VkIGR1cmluZyB0aGVcbiAgICogYnVpbGRpbmcgb2Ygbm9uLWB0Zi5TZXF1ZW50aWFsYCBtb2RlbHMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBmbGF0dGVuTGF5ZXIgPSB0Zi5sYXllcnMuZmxhdHRlbigpO1xuICAgKiBjb25zdCBkZW5zZUxheWVyID0gdGYubGF5ZXJzLmRlbnNlKHt1bml0czogMX0pO1xuICAgKlxuICAgKiAvLyBVc2UgdGYubGF5ZXJzLmlucHV0KCkgdG8gb2J0YWluIGEgU3ltYm9saWNUZW5zb3IgYXMgaW5wdXQgdG8gYXBwbHkoKS5cbiAgICogY29uc3QgaW5wdXQgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyLCAyXX0pO1xuICAgKiBjb25zdCBvdXRwdXQxID0gZmxhdHRlbkxheWVyLmFwcGx5KGlucHV0KTtcbiAgICpcbiAgICogLy8gb3V0cHV0MS5zaGFwZSBpcyBbbnVsbCwgNF0uIFRoZSBmaXJzdCBkaW1lbnNpb24gaXMgdGhlIHVuZGV0ZXJtaW5lZFxuICAgKiAvLyBiYXRjaCBzaXplLiBUaGUgc2Vjb25kIGRpbWVuc2lvbiBjb21lcyBmcm9tIGZsYXR0ZW5pbmcgdGhlIFsyLCAyXVxuICAgKiAvLyBzaGFwZS5cbiAgICogY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3V0cHV0MS5zaGFwZSkpO1xuICAgKlxuICAgKiAvLyBUaGUgb3V0cHV0IFN5bWJvbGljVGVuc29yIG9mIHRoZSBmbGF0dGVuIGxheWVyIGNhbiBiZSB1c2VkIHRvIGNhbGxcbiAgICogLy8gdGhlIGFwcGx5KCkgb2YgdGhlIGRlbnNlIGxheWVyOlxuICAgKiBjb25zdCBvdXRwdXQyID0gZGVuc2VMYXllci5hcHBseShvdXRwdXQxKTtcbiAgICpcbiAgICogLy8gb3V0cHV0Mi5zaGFwZSBpcyBbbnVsbCwgMV0uIFRoZSBmaXJzdCBkaW1lbnNpb24gaXMgdGhlIHVuZGV0ZXJtaW5lZFxuICAgKiAvLyBiYXRjaCBzaXplLiBUaGUgc2Vjb25kIGRpbWVuc2lvbiBtYXRjaGVzIHRoZSBudW1iZXIgb2YgdW5pdHMgb2YgdGhlXG4gICAqIC8vIGRlbnNlIGxheWVyLlxuICAgKiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvdXRwdXQyLnNoYXBlKSk7XG4gICAqXG4gICAqIC8vIFRoZSBpbnB1dCBhbmQgb3V0cHV0IGNhbiBiZSB1c2VkIHRvIGNvbnN0cnVjdCBhIG1vZGVsIHRoYXQgY29uc2lzdHNcbiAgICogLy8gb2YgdGhlIGZsYXR0ZW4gYW5kIGRlbnNlIGxheWVycy5cbiAgICogY29uc3QgbW9kZWwgPSB0Zi5tb2RlbCh7aW5wdXRzOiBpbnB1dCwgb3V0cHV0czogb3V0cHV0Mn0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGlucHV0cyBhIGB0Zi5UZW5zb3JgIG9yIGB0Zi5TeW1ib2xpY1RlbnNvcmAgb3IgYW4gQXJyYXkgb2YgdGhlbS5cbiAgICogQHBhcmFtIGt3YXJncyBBZGRpdGlvbmFsIGtleXdvcmQgYXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byBgY2FsbCgpYC5cbiAgICpcbiAgICogQHJldHVybiBPdXRwdXQgb2YgdGhlIGxheWVyJ3MgYGNhbGxgIG1ldGhvZC5cbiAgICpcbiAgICogQGV4Y2VwdGlvbiBWYWx1ZUVycm9yIGVycm9yIGluIGNhc2UgdGhlIGxheWVyIGlzIG1pc3Npbmcgc2hhcGUgaW5mb3JtYXRpb25cbiAgICogICBmb3IgaXRzIGBidWlsZGAgY2FsbC5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsICdzdWJoZWFkaW5nJzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgLy8gUG9ydGluZyBOb3RlOiBUaGlzIGlzIGEgcmVwbGFjZW1lbnQgZm9yIF9fY2FsbF9fKCkgaW4gUHl0aG9uLlxuICBhcHBseShcbiAgICAgIGlucHV0czogVGVuc29yfFRlbnNvcltdfFN5bWJvbGljVGVuc29yfFN5bWJvbGljVGVuc29yW10sXG4gICAgICBrd2FyZ3M/OiBLd2FyZ3MpOiBUZW5zb3J8VGVuc29yW118U3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXSB7XG4gICAga3dhcmdzID0ga3dhcmdzIHx8IHt9O1xuXG4gICAgdGhpcy5hc3NlcnROb3REaXNwb3NlZCgpO1xuXG4gICAgLy8gRW5zdXJlIGlucHV0cyBhcmUgYWxsIHRoZSBzYW1lIHR5cGUuXG4gICAgY29uc3QgaW5wdXRzTGlzdCA9IGdlbmVyaWNfdXRpbHMudG9MaXN0KGlucHV0cyk7XG5cbiAgICBjb25zdCBhbGxBcmVTeW1ib2xpYyA9IGNoZWNrQWxsU3ltYm9saWMoaW5wdXRzKTtcbiAgICBjb25zdCBub25lQXJlU3ltYm9saWMgPSBjaGVja05vbmVTeW1ib2xpYyhpbnB1dHMpO1xuXG4gICAgaWYgKGFsbEFyZVN5bWJvbGljID09PSBub25lQXJlU3ltYm9saWMpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICdBcmd1bWVudHMgdG8gYXBwbHkoKSBtdXN0IGJlIGFsbCAnICtcbiAgICAgICAgICAnU3ltYm9saWNUZW5zb3JzIG9yIGFsbCBUZW5zb3JzJyk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBuYW1lU2NvcGUoKSBtYXkgbm90IGJlIG5lY2Vzc2FyeS5cbiAgICByZXR1cm4gbmFtZVNjb3BlKHRoaXMubmFtZSwgKCkgPT4ge1xuICAgICAgLy8gSGFuZGxlIGxheWluZyBidWlsZGluZyAod2VpZ2h0IGNyZWF0aW5nLCBpbnB1dCBzcGVjIGxvY2tpbmcpLlxuICAgICAgaWYgKCF0aGlzLmJ1aWx0KSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgVGhyb3cgZXhjZXB0aW9ucyBpbiBjYXNlIHRoZSBpbnB1dCBpcyBub3QgY29tcGF0aWJsZVxuICAgICAgICAgIHdpdGggdGhlIGlucHV0U3BlYyBzcGVjaWZpZWQgaW4gdGhlIGxheWVyIGNvbnN0cnVjdG9yLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hc3NlcnRJbnB1dENvbXBhdGliaWxpdHkoaW5wdXRzKTtcblxuICAgICAgICAvLyBDb2xsZWN0IGlucHV0IHNoYXBlcyB0byBidWlsZCBsYXllci5cbiAgICAgICAgY29uc3QgaW5wdXRTaGFwZXM6IFNoYXBlW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCB4RWxlbSBvZiBnZW5lcmljX3V0aWxzLnRvTGlzdChpbnB1dHMpKSB7XG4gICAgICAgICAgaW5wdXRTaGFwZXMucHVzaCh4RWxlbS5zaGFwZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idWlsZChnZW5lcmljX3V0aWxzLnNpbmdsZXRvbk9yQXJyYXkoaW5wdXRTaGFwZXMpKTtcbiAgICAgICAgdGhpcy5idWlsdCA9IHRydWU7XG5cbiAgICAgICAgLy8gTG9hZCB3ZWlnaHRzIHRoYXQgd2VyZSBzcGVjaWZpZWQgYXQgbGF5ZXIgaW5zdGFudGlhdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFdlaWdodHMpIHtcbiAgICAgICAgICB0aGlzLnNldFdlaWdodHModGhpcy5pbml0aWFsV2VpZ2h0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVmQ291bnQgPT09IG51bGwgJiYgbm9uZUFyZVN5bWJvbGljKSB7XG4gICAgICAgICAgLy8gVGhlIGZpcnN0IHVzZSBvZiB0aGlzIGxheWVyIGlzIGEgbm9uLXN5bWJvbGljIGNhbGwsIHNldCByZWYgY291bnRcbiAgICAgICAgICAvLyB0byAxIHNvIHRoZSBMYXllciBjYW4gYmUgcHJvcGVybHkgZGlzcG9zZWQgaWYgaXRzIGRpc3Bvc2UoKSBtZXRob2RcbiAgICAgICAgICAvLyBpcyBjYWxsZWQuXG4gICAgICAgICAgdGhpcy5fcmVmQ291bnQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgIFRocm93IGV4Y2VwdGlvbnMgaW4gY2FzZSB0aGUgaW5wdXQgaXMgbm90IGNvbXBhdGlibGVcbiAgICAgICAgd2l0aCB0aGUgaW5wdXRTcGVjIHNldCBhdCBidWlsZCB0aW1lLlxuICAgICAgKi9cbiAgICAgIHRoaXMuYXNzZXJ0SW5wdXRDb21wYXRpYmlsaXR5KGlucHV0cyk7XG5cbiAgICAgIC8vIEhhbmRsZSBtYXNrIHByb3BhZ2F0aW9uLlxuICAgICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBNYXNrIHByb3BhZ2F0aW9uIG5vdCBjdXJyZW50bHkgaW1wbGVtZW50ZWQuXG5cbiAgICAgIC8vIEFjdHVhbGx5IGNhbGwgdGhlIGxheWVyLCBjb2xsZWN0aW5nIG91dHB1dChzKSwgbWFzayhzKSwgYW5kIHNoYXBlKHMpLlxuICAgICAgaWYgKG5vbmVBcmVTeW1ib2xpYykge1xuICAgICAgICBsZXQgb3V0cHV0ID0gdGhpcy5jYWxsKGlucHV0cywga3dhcmdzKTtcblxuICAgICAgICAvLyBBcHBseSBtYXNrcyB0byB0aGUgb3V0cHV0IHRlbnNvcnMgaWYgdGhlIGxheWVyIHN1cHBvcnRzIGl0LlxuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c01hc2tpbmcpIHtcbiAgICAgICAgICAvLyBUT0RPKG1hdHRzb3VsYW5pbGxlKTogcGFzcyB0aGUgaW5wdXQgdGVuc29ycycgbWFza3MgdG8gY29tcHV0ZU1hc2tcbiAgICAgICAgICB0aGlzLnNldE1hc2tNZXRhZGF0YShpbnB1dHMsIG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgbGF5ZXIgcmV0dXJucyB0ZW5zb3JzIGZyb20gaXRzIGlucHV0cywgdW5tb2RpZmllZCxcbiAgICAgICAgLy8gd2UgY29weSB0aGVtIHRvIGF2b2lkIGxvc3Mgb2YgdGVuc29yIG1ldGFkYXRhLlxuICAgICAgICBjb25zdCBvdXRwdXRMaXN0OiBUZW5zb3JbXSA9IGdlbmVyaWNfdXRpbHMudG9MaXN0KG91dHB1dCk7XG4gICAgICAgIGNvbnN0IG91dHB1dExpc3RDb3B5OiBUZW5zb3JbXSA9IFtdO1xuICAgICAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IFRoaXMgY29weWluZyBtYXkgbm90IGJlIG5lY2Vzc2FyeSBnaXZlbiBvdXIgZWFnZXJcbiAgICAgICAgLy8gYmFja2VuZC5cbiAgICAgICAgZm9yIChsZXQgeCBvZiBvdXRwdXRMaXN0KSB7XG4gICAgICAgICAgaWYgKGlucHV0c0xpc3QuaW5kZXhPZih4KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHggPSB4LmNsb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dHB1dExpc3RDb3B5LnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ID0gZ2VuZXJpY191dGlscy5zaW5nbGV0b25PckFycmF5KG91dHB1dExpc3RDb3B5KTtcblxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eVJlZ3VsYXJpemVyICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICAgICAgJ0xheWVyIGludm9jYXRpb24gaW4gdGhlIHByZXNlbmNlIG9mIGFjdGl2aXR5ICcgK1xuICAgICAgICAgICAgICAncmVndWxhcml6ZXIocykgaXMgbm90IHN1cHBvcnRlZCB5ZXQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IENhbGwgYWRkSW5ib3VuZE5vZGUoKT9cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0U2hhcGUgPSBjb2xsZWN0SW5wdXRTaGFwZShpbnB1dHMpO1xuICAgICAgICBjb25zdCBvdXRwdXRTaGFwZSA9IHRoaXMuY29tcHV0ZU91dHB1dFNoYXBlKGlucHV0U2hhcGUpO1xuICAgICAgICBsZXQgb3V0cHV0OiBTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdO1xuICAgICAgICBjb25zdCBvdXRwdXREVHlwZSA9IGd1ZXNzT3V0cHV0RFR5cGUoaW5wdXRzKTtcbiAgICAgICAgdGhpcy53YXJuT25JbmNvbXBhdGlibGVJbnB1dFNoYXBlKFxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShpbnB1dHMpID8gaW5wdXRTaGFwZVswXSBhcyBTaGFwZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFNoYXBlIGFzIFNoYXBlKTtcblxuICAgICAgICBpZiAob3V0cHV0U2hhcGUgIT0gbnVsbCAmJiBvdXRwdXRTaGFwZS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KG91dHB1dFNoYXBlWzBdKSkge1xuICAgICAgICAgIC8vIFdlIGhhdmUgbXVsdGlwbGUgb3V0cHV0IHNoYXBlcy4gQ3JlYXRlIG11bHRpcGxlIG91dHB1dCB0ZW5zb3JzLlxuICAgICAgICAgIG91dHB1dCA9IChvdXRwdXRTaGFwZSBhcyBTaGFwZVtdKVxuICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNoYXBlLCBpbmRleCkgPT4gbmV3IFN5bWJvbGljVGVuc29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dERUeXBlLCBzaGFwZSwgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmljX3V0aWxzLnRvTGlzdChpbnB1dHMpLCBrd2FyZ3MsIHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dCA9IG5ldyBTeW1ib2xpY1RlbnNvcihcbiAgICAgICAgICAgICAgb3V0cHV0RFR5cGUsIG91dHB1dFNoYXBlIGFzIFNoYXBlLCB0aGlzLFxuICAgICAgICAgICAgICBnZW5lcmljX3V0aWxzLnRvTGlzdChpbnB1dHMpLCBrd2FyZ3MsIHRoaXMubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgIEFkZCBhbiBpbmJvdW5kIG5vZGUgdG8gdGhlIGxheWVyLCBzbyB0aGF0IGl0IGtlZXBzIHRyYWNrXG4gICAgICAgICAgb2YgdGhlIGNhbGwgYW5kIG9mIGFsbCBuZXcgdmFyaWFibGVzIGNyZWF0ZWQgZHVyaW5nIHRoZSBjYWxsLlxuICAgICAgICAgIFRoaXMgYWxzbyB1cGRhdGVzIHRoZSBsYXllciBoaXN0b3J5IG9mIHRoZSBvdXRwdXQgdGVuc29yKHMpLlxuICAgICAgICAgIElmIHRoZSBpbnB1dCB0ZW5zb3IocykgaGFkIG5vIHByZXZpb3VzIGhpc3RvcnksXG4gICAgICAgICAgdGhpcyBkb2VzIG5vdGhpbmcuXG4gICAgICAgICovXG4gICAgICAgIHRoaXMuYWRkSW5ib3VuZE5vZGUoXG4gICAgICAgICAgICBpbnB1dHMsIG91dHB1dCwgbnVsbCwgbnVsbCwgaW5wdXRTaGFwZSwgb3V0cHV0U2hhcGUsIGt3YXJncyk7XG4gICAgICAgIHRoaXMuX3JlZkNvdW50Kys7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdHlSZWd1bGFyaXplciAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgICAgICdMYXllciBpbnZvY2F0aW9uIGluIHRoZSBwcmVzZW5jZSBvZiBhY3Rpdml0eSAnICtcbiAgICAgICAgICAgICAgJ3JlZ3VsYXJpemVyKHMpIGlzIG5vdCBzdXBwb3J0ZWQgeWV0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjb21wYXRpYmlsaXR5IGJldHdlZW4gaW5wdXQgc2hhcGUgYW5kIHRoaXMgbGF5ZXIncyBiYXRjaElucHV0U2hhcGUuXG4gICAqXG4gICAqIFByaW50IHdhcm5pbmcgaWYgYW55IGluY29tcGF0aWJpbGl0eSBpcyBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0U2hhcGUgSW5wdXQgc2hhcGUgdG8gYmUgY2hlY2tlZC5cbiAgICovXG4gIHByb3RlY3RlZCB3YXJuT25JbmNvbXBhdGlibGVJbnB1dFNoYXBlKGlucHV0U2hhcGU6IFNoYXBlKSB7XG4gICAgaWYgKHRoaXMuYmF0Y2hJbnB1dFNoYXBlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGlucHV0U2hhcGUubGVuZ3RoICE9PSB0aGlzLmJhdGNoSW5wdXRTaGFwZS5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgVGhlIHJhbmsgb2YgdGhlIGlucHV0IHRlbnNvciBwcm92aWRlZCAoc2hhcGU6IGAgK1xuICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGlucHV0U2hhcGUpfSkgZG9lcyBub3QgbWF0Y2ggdGhhdCBvZiB0aGUgYCArXG4gICAgICAgICAgYGJhdGNoSW5wdXRTaGFwZSAoJHtKU09OLnN0cmluZ2lmeSh0aGlzLmJhdGNoSW5wdXRTaGFwZSl9KSBgICtcbiAgICAgICAgICBgb2YgdGhlIGxheWVyICR7dGhpcy5uYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZGltTWlzbWF0Y2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuYmF0Y2hJbnB1dFNoYXBlLmZvckVhY2goKGRpbWVuc2lvbiwgaSkgPT4ge1xuICAgICAgICBpZiAoZGltZW5zaW9uICE9IG51bGwgJiYgaW5wdXRTaGFwZVtpXSAhPSBudWxsICYmXG4gICAgICAgICAgICBpbnB1dFNoYXBlW2ldICE9PSBkaW1lbnNpb24pIHtcbiAgICAgICAgICBkaW1NaXNtYXRjaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGRpbU1pc21hdGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBUaGUgc2hhcGUgb2YgdGhlIGlucHV0IHRlbnNvciBgICtcbiAgICAgICAgICAgIGAoJHtKU09OLnN0cmluZ2lmeShpbnB1dFNoYXBlKX0pIGRvZXMgbm90IGAgK1xuICAgICAgICAgICAgYG1hdGNoIHRoZSBleHBlY3RhdGlvbiBvZiBsYXllciAke3RoaXMubmFtZX06IGAgK1xuICAgICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkodGhpcy5iYXRjaElucHV0U2hhcGUpfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG91dHB1dCBzaGFwZShzKSBvZiBhIGxheWVyLlxuICAgKlxuICAgKiBPbmx5IGFwcGxpY2FibGUgaWYgdGhlIGxheWVyIGhhcyBvbmx5IG9uZSBpbmJvdW5kIG5vZGUsIG9yIGlmIGFsbCBpbmJvdW5kXG4gICAqIG5vZGVzIGhhdmUgdGhlIHNhbWUgb3V0cHV0IHNoYXBlLlxuICAgKlxuICAgKiBAcmV0dXJucyBPdXRwdXQgc2hhcGUgb3Igc2hhcGVzLlxuICAgKiBAdGhyb3dzIEF0dHJpYnV0ZUVycm9yOiBpZiB0aGUgbGF5ZXIgaXMgY29ubmVjdGVkIHRvIG1vcmUgdGhhbiBvbmUgaW5jb21pbmdcbiAgICogICBub2Rlcy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsICdzdWJoZWFkaW5nJzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgZ2V0IG91dHB1dFNoYXBlKCk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGlmICh0aGlzLmluYm91bmROb2RlcyA9PSBudWxsIHx8IHRoaXMuaW5ib3VuZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEF0dHJpYnV0ZUVycm9yKFxuICAgICAgICAgIGBUaGUgbGF5ZXIgJHt0aGlzLm5hbWV9IGhhcyBuZXZlciBiZWVuIGNhbGxlZCBhbmQgdGh1cyBoYXMgbm8gYCArXG4gICAgICAgICAgYGRlZmluZWQgb3V0cHV0IHNoYXBlLmApO1xuICAgIH1cbiAgICBjb25zdCBhbGxPdXRwdXRTaGFwZXM6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuaW5ib3VuZE5vZGVzKSB7XG4gICAgICBjb25zdCBzaGFwZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KG5vZGUub3V0cHV0U2hhcGVzKTtcbiAgICAgIGlmIChhbGxPdXRwdXRTaGFwZXMuaW5kZXhPZihzaGFwZVN0cmluZykgPT09IC0xKSB7XG4gICAgICAgIGFsbE91dHB1dFNoYXBlcy5wdXNoKHNoYXBlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsbE91dHB1dFNoYXBlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IG91dHB1dFNoYXBlcyA9IHRoaXMuaW5ib3VuZE5vZGVzWzBdLm91dHB1dFNoYXBlcztcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG91dHB1dFNoYXBlcykgJiYgQXJyYXkuaXNBcnJheShvdXRwdXRTaGFwZXNbMF0pICYmXG4gICAgICAgICAgb3V0cHV0U2hhcGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gKG91dHB1dFNoYXBlcyBhcyBTaGFwZVtdKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvdXRwdXRTaGFwZXM7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEF0dHJpYnV0ZUVycm9yKFxuICAgICAgICAgIGBUaGUgbGF5ZXIgJHt0aGlzLm5hbWV9IGhhcyBtdWx0aXBsZSBpbmJvdW5kIG5vZGVzIHdpdGggZGlmZmVyZW50IGAgK1xuICAgICAgICAgIGBvdXRwdXQgc2hhcGVzLiBIZW5jZSB0aGUgbm90aW9uIG9mIFwib3V0cHV0IHNoYXBlXCIgaXMgaWxsLWRlZmluZWQgYCArXG4gICAgICAgICAgYGZvciB0aGUgbGF5ZXIuYCk7XG4gICAgICAvLyBUT0RPKGNhaXMpOiBJbXBsZW1lbnQgZ2V0T3V0cHV0U2hhcGVBdCgpLlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb3VudHMgdGhlIHRvdGFsIG51bWJlciBvZiBudW1iZXJzIChlLmcuLCBmbG9hdDMyLCBpbnQzMikgaW4gdGhlXG4gICAqIHdlaWdodHMuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGludGVnZXIgY291bnQuXG4gICAqIEB0aHJvd3MgUnVudGltZUVycm9yOiBJZiB0aGUgbGF5ZXIgaXMgbm90IGJ1aWx0IHlldCAoaW4gd2hpY2ggY2FzZSBpdHNcbiAgICogICB3ZWlnaHRzIGFyZSBub3QgZGVmaW5lZCB5ZXQuKVxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgJ3N1YmhlYWRpbmcnOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBjb3VudFBhcmFtcygpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5idWlsdCkge1xuICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgICBgWW91IHRyaWVkIHRvIGNhbGwgY291bnRQYXJhbXMoKSBvbiAke3RoaXMubmFtZX0sIGAgK1xuICAgICAgICAgIGBidXQgdGhlIGxheWVyIGlzIG5vdCBidWlsdCB5ZXQuIEJ1aWxkIGl0IGZpcnN0IGJ5IGNhbGxpbmcgYCArXG4gICAgICAgICAgYGJ1aWxkKGJhdGNoSW5wdXRTaGFwZSkuYCk7XG4gICAgfVxuICAgIHJldHVybiB2YXJpYWJsZV91dGlscy5jb3VudFBhcmFtc0luV2VpZ2h0cyh0aGlzLndlaWdodHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGxheWVyIHdlaWdodHMuXG4gICAqXG4gICAqIE11c3QgYmUgaW1wbGVtZW50ZWQgb24gYWxsIGxheWVycyB0aGF0IGhhdmUgd2VpZ2h0cy5cbiAgICpcbiAgICogQ2FsbGVkIHdoZW4gYXBwbHkoKSBpcyBjYWxsZWQgdG8gY29uc3RydWN0IHRoZSB3ZWlnaHRzLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRTaGFwZSBBIGBTaGFwZWAgb3IgYXJyYXkgb2YgYFNoYXBlYCAodW51c2VkKS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsICdzdWJoZWFkaW5nJzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgYnVpbGQoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSkge1xuICAgIHRoaXMuYnVpbHQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWVzIG9mIHRoZSB3ZWlnaHRzIG9mIHRoZSBsYXllci5cbiAgICpcbiAgICogQHBhcmFtIHRyYWluYWJsZU9ubHkgV2hldGhlciB0byBnZXQgdGhlIHZhbHVlcyBvZiBvbmx5IHRyYWluYWJsZSB3ZWlnaHRzLlxuICAgKiBAcmV0dXJucyBXZWlnaHQgdmFsdWVzIGFzIGFuIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgJ3N1YmhlYWRpbmcnOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBnZXRXZWlnaHRzKHRyYWluYWJsZU9ubHkgPSBmYWxzZSk6IFRlbnNvcltdIHtcbiAgICByZXR1cm4gYmF0Y2hHZXRWYWx1ZSh0cmFpbmFibGVPbmx5ID8gdGhpcy50cmFpbmFibGVXZWlnaHRzIDogdGhpcy53ZWlnaHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB3ZWlnaHRzIG9mIHRoZSBsYXllciwgZnJvbSBUZW5zb3JzLlxuICAgKlxuICAgKiBAcGFyYW0gd2VpZ2h0cyBhIGxpc3Qgb2YgVGVuc29ycy4gVGhlIG51bWJlciBvZiBhcnJheXMgYW5kIHRoZWlyIHNoYXBlXG4gICAqICAgbXVzdCBtYXRjaCBudW1iZXIgb2YgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHdlaWdodHMgb2YgdGhlIGxheWVyIChpLmUuXG4gICAqICAgaXQgc2hvdWxkIG1hdGNoIHRoZSBvdXRwdXQgb2YgYGdldFdlaWdodHNgKS5cbiAgICpcbiAgICogQGV4Y2VwdGlvbiBWYWx1ZUVycm9yIElmIHRoZSBwcm92aWRlZCB3ZWlnaHRzIGxpc3QgZG9lcyBub3QgbWF0Y2ggdGhlXG4gICAqICAgbGF5ZXIncyBzcGVjaWZpY2F0aW9ucy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsICdzdWJoZWFkaW5nJzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgc2V0V2VpZ2h0cyh3ZWlnaHRzOiBUZW5zb3JbXSk6IHZvaWQge1xuICAgIHRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy53ZWlnaHRzO1xuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggIT09IHdlaWdodHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFRPRE8oY2Fpcyk6IFJlc3RvcmUgdGhlIGZvbGxvd2luZyBhbmQgdXNlIGBwcm92aWRlZFdlaWdodHNgLCBpbnN0ZWFkXG4gICAgICAgIC8vIG9mIGB3ZWlnaHRzYCBpbiB0aGUgZXJyb3IgbWVzc2FnZSwgb25jZSB0aGUgZGVlcGxlYXJuLmpzIGJ1ZyBpc1xuICAgICAgICAvLyBmaXhlZDogaHR0cHM6Ly9naXRodWIuY29tL1BBSVItY29kZS9kZWVwbGVhcm5qcy9pc3N1ZXMvNDk4IGNvbnN0XG4gICAgICAgIC8vIHByb3ZpZGVkV2VpZ2h0cyA9IEpTT04uc3RyaW5naWZ5KHdlaWdodHMpLnNsaWNlKDAsIDUwKTtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgWW91IGNhbGxlZCBzZXRXZWlnaHRzKHdlaWdodHMpIG9uIGxheWVyIFwiJHt0aGlzLm5hbWV9XCIgYCArXG4gICAgICAgICAgICBgd2l0aCBhIHdlaWdodCBsaXN0IG9mIGxlbmd0aCAke3dlaWdodHMubGVuZ3RofSwgYCArXG4gICAgICAgICAgICBgYnV0IHRoZSBsYXllciB3YXMgZXhwZWN0aW5nICR7cGFyYW1zLmxlbmd0aH0gd2VpZ2h0cy4gYCArXG4gICAgICAgICAgICBgUHJvdmlkZWQgd2VpZ2h0czogJHt3ZWlnaHRzfS4uLmApO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2VpZ2h0VmFsdWVUdXBsZXM6IEFycmF5PFtMYXllclZhcmlhYmxlLCBUZW5zb3JdPiA9IFtdO1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZXMgPSBiYXRjaEdldFZhbHVlKHBhcmFtcyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtVmFsdWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHB2ID0gcGFyYW1WYWx1ZXNbaV07XG4gICAgICAgIGNvbnN0IHAgPSBwYXJhbXNbaV07XG4gICAgICAgIGNvbnN0IHcgPSB3ZWlnaHRzW2ldO1xuICAgICAgICBpZiAoIXV0aWwuYXJyYXlzRXF1YWwocHYuc2hhcGUsIHcuc2hhcGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGBMYXllciB3ZWlnaHQgc2hhcGUgJHtwdi5zaGFwZX0gYCArXG4gICAgICAgICAgICAgIGBub3QgY29tcGF0aWJsZSB3aXRoIHByb3ZpZGVkIHdlaWdodCBzaGFwZSAke3cuc2hhcGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgd2VpZ2h0VmFsdWVUdXBsZXMucHVzaChbcCwgd10pO1xuICAgICAgfVxuICAgICAgYmF0Y2hTZXRWYWx1ZSh3ZWlnaHRWYWx1ZVR1cGxlcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHdlaWdodCB2YXJpYWJsZSB0byB0aGUgbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIG5ldyB3ZWlnaHQgdmFyaWFibGUuXG4gICAqIEBwYXJhbSBzaGFwZSBUaGUgc2hhcGUgb2YgdGhlIHdlaWdodC5cbiAgICogQHBhcmFtIGR0eXBlIFRoZSBkdHlwZSBvZiB0aGUgd2VpZ2h0LlxuICAgKiBAcGFyYW0gaW5pdGlhbGl6ZXIgQW4gaW5pdGlhbGl6ZXIgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSByZWd1bGFyaXplciBBIHJlZ3VsYXJpemVyIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gdHJhaW5hYmxlIFdoZXRoZXIgdGhlIHdlaWdodCBzaG91bGQgYmUgdHJhaW5lZCB2aWEgYmFja3Byb3Agb3Igbm90XG4gICAqICAgKGFzc3VtaW5nIHRoYXQgdGhlIGxheWVyIGl0c2VsZiBpcyBhbHNvIHRyYWluYWJsZSkuXG4gICAqIEBwYXJhbSBjb25zdHJhaW50IEFuIG9wdGlvbmFsIHRyYWluYWJsZS5cbiAgICogQHJldHVybiBUaGUgY3JlYXRlZCB3ZWlnaHQgdmFyaWFibGUuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCAnc3ViaGVhZGluZyc6ICdDbGFzc2VzJ31cbiAgICovXG4gIHByb3RlY3RlZCBhZGRXZWlnaHQoXG4gICAgICBuYW1lOiBzdHJpbmcsIHNoYXBlOiBTaGFwZSwgZHR5cGU/OiBEYXRhVHlwZSwgaW5pdGlhbGl6ZXI/OiBJbml0aWFsaXplcixcbiAgICAgIHJlZ3VsYXJpemVyPzogUmVndWxhcml6ZXIsIHRyYWluYWJsZT86IGJvb2xlYW4sIGNvbnN0cmFpbnQ/OiBDb25zdHJhaW50LFxuICAgICAgZ2V0SW5pdGlhbGl6ZXJGdW5jPzogRnVuY3Rpb24pOiBMYXllclZhcmlhYmxlIHtcbiAgICAvLyBSZWplY3QgZHVwbGljYXRlIHdlaWdodCBuYW1lcy5cbiAgICBpZiAodGhpcy5fYWRkZWRXZWlnaHROYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYER1cGxpY2F0ZSB3ZWlnaHQgbmFtZSAke25hbWV9IGZvciBsYXllciAke3RoaXMubmFtZX1gKTtcbiAgICB9XG4gICAgdGhpcy5fYWRkZWRXZWlnaHROYW1lcy5wdXNoKG5hbWUpO1xuXG4gICAgaWYgKGR0eXBlID09IG51bGwpIHtcbiAgICAgIGR0eXBlID0gJ2Zsb2F0MzInO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZhc3RXZWlnaHRJbml0RHVyaW5nQnVpbGQpIHtcbiAgICAgIGluaXRpYWxpemVyID0gZ2V0SW5pdGlhbGl6ZXJGdW5jICE9IG51bGwgPyBnZXRJbml0aWFsaXplckZ1bmMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW5pdGlhbGl6ZXIoJ3plcm9zJyk7XG4gICAgfVxuICAgIGNvbnN0IGluaXRWYWx1ZSA9IGluaXRpYWxpemVyLmFwcGx5KHNoYXBlLCBkdHlwZSk7XG4gICAgY29uc3Qgd2VpZ2h0ID1cbiAgICAgICAgbmV3IExheWVyVmFyaWFibGUoaW5pdFZhbHVlLCBkdHlwZSwgbmFtZSwgdHJhaW5hYmxlLCBjb25zdHJhaW50KTtcbiAgICBpbml0VmFsdWUuZGlzcG9zZSgpO1xuICAgIC8vIFJlcXVlc3QgYmFja2VuZCBub3QgdG8gZGlzcG9zZSB0aGUgd2VpZ2h0cyBvZiB0aGUgbW9kZWwgb24gc2NvcGUoKSBleGl0LlxuICAgIGlmIChyZWd1bGFyaXplciAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFkZExvc3MoKCkgPT4gcmVndWxhcml6ZXIuYXBwbHkod2VpZ2h0LnJlYWQoKSkpO1xuICAgIH1cbiAgICBpZiAodHJhaW5hYmxlID09IG51bGwpIHtcbiAgICAgIHRyYWluYWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0cmFpbmFibGUpIHtcbiAgICAgIHRoaXMuX3RyYWluYWJsZVdlaWdodHMucHVzaCh3ZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9ub25UcmFpbmFibGVXZWlnaHRzLnB1c2god2VpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHdlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZhc3Qtd2VpZ2h0LWluaXRpYWxpemF0aW9uIGZsYWcuXG4gICAqXG4gICAqIEluIGNhc2VzIHdoZXJlIHRoZSBpbml0aWFsaXplZCB3ZWlnaHQgdmFsdWVzIHdpbGwgYmUgaW1tZWRpYXRlbHlcbiAgICogb3ZlcndyaXR0ZW4gYnkgbG9hZGVkIHdlaWdodCB2YWx1ZXMgZHVyaW5nIG1vZGVsIGxvYWRpbmcsIHNldHRpbmdcbiAgICogdGhlIGZsYWcgdG8gYHRydWVgIHNhdmVzIHVubmVjZXNzYXJ5IGNhbGxzIHRvIHBvdGVudGlhbGx5IGV4cGVuc2l2ZVxuICAgKiBpbml0aWFsaXplcnMgYW5kIHNwZWVkcyB1cCB0aGUgbG9hZGluZyBwcm9jZXNzLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgVGFyZ2V0IHZhbHVlIG9mIHRoZSBmbGFnLlxuICAgKi9cbiAgc2V0RmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmFzdFdlaWdodEluaXREdXJpbmdCdWlsZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBsb3NzZXMgdG8gdGhlIGxheWVyLlxuICAgKlxuICAgKiBUaGUgbG9zcyBtYXkgcG90ZW50aWFsbHkgYmUgY29uZGl0aW9uYWwgb24gc29tZSBpbnB1dHMgdGVuc29ycyxcbiAgICogZm9yIGluc3RhbmNlIGFjdGl2aXR5IGxvc3NlcyBhcmUgY29uZGl0aW9uYWwgb24gdGhlIGxheWVyJ3MgaW5wdXRzLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgJ3N1YmhlYWRpbmcnOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhZGRMb3NzKGxvc3NlczogUmVndWxhcml6ZXJGbnxSZWd1bGFyaXplckZuW10pOiB2b2lkIHtcbiAgICBpZiAobG9zc2VzID09IG51bGwgfHwgQXJyYXkuaXNBcnJheShsb3NzZXMpICYmIGxvc3Nlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoaXMubG9zc2VzXG4gICAgbG9zc2VzID0gZ2VuZXJpY191dGlscy50b0xpc3QobG9zc2VzKTtcbiAgICBpZiAodGhpcy5fbG9zc2VzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fbG9zc2VzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxvc3Nlcy5wdXNoKC4uLmxvc3Nlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBvdXRwdXQgc2hhcGUgb2YgdGhlIGxheWVyLlxuICAgKlxuICAgKiBBc3N1bWVzIHRoYXQgdGhlIGxheWVyIHdpbGwgYmUgYnVpbHQgdG8gbWF0Y2ggdGhhdCBpbnB1dCBzaGFwZSBwcm92aWRlZC5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0U2hhcGUgQSBzaGFwZSAodHVwbGUgb2YgaW50ZWdlcnMpIG9yIGEgbGlzdCBvZiBzaGFwZSB0dXBsZXNcbiAgICogICAob25lIHBlciBvdXRwdXQgdGVuc29yIG9mIHRoZSBsYXllcikuIFNoYXBlIHR1cGxlcyBjYW4gaW5jbHVkZSBudWxsIGZvclxuICAgKiAgIGZyZWUgZGltZW5zaW9ucywgaW5zdGVhZCBvZiBhbiBpbnRlZ2VyLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgJ3N1YmhlYWRpbmcnOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIHJldHVybiBpbnB1dFNoYXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIGFuIG91dHB1dCBtYXNrIHRlbnNvci5cbiAgICpcbiAgICogQHBhcmFtIGlucHV0cyBUZW5zb3Igb3IgbGlzdCBvZiB0ZW5zb3JzLlxuICAgKiBAcGFyYW0gbWFzayBUZW5zb3Igb3IgbGlzdCBvZiB0ZW5zb3JzLlxuICAgKlxuICAgKiBAcmV0dXJuIG51bGwgb3IgYSB0ZW5zb3IgKG9yIGxpc3Qgb2YgdGVuc29ycywgb25lIHBlciBvdXRwdXQgdGVuc29yIG9mIHRoZVxuICAgKiBsYXllcikuXG4gICAqL1xuICBjb21wdXRlTWFzayhpbnB1dHM6IFRlbnNvcnxUZW5zb3JbXSwgbWFzaz86IFRlbnNvcnxUZW5zb3JbXSk6IFRlbnNvclxuICAgICAgfFRlbnNvcltdIHtcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNNYXNraW5nKSB7XG4gICAgICBpZiAobWFzayAhPSBudWxsKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hc2spKSB7XG4gICAgICAgICAgbWFzay5mb3JFYWNoKG1hc2tFbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChtYXNrRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICAgICBgTGF5ZXIgJHt0aGlzLm5hbWV9IGRvZXMgbm90IHN1cHBvcnQgbWFza2luZywgYCArXG4gICAgICAgICAgICAgICAgICAnYnV0IHdhcyBwYXNzZWQgYW4gaW5wdXRNYXNrLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIGBMYXllciAke3RoaXMubmFtZX0gZG9lcyBub3Qgc3VwcG9ydCBtYXNraW5nLCBgICtcbiAgICAgICAgICAgICAgJ2J1dCB3YXMgcGFzc2VkIGFuIGlucHV0TWFzay4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWFza2luZyBub3QgZXhwbGljaXRseSBzdXBwb3J0ZWQ6IHJldHVybiBudWxsIGFzIG1hc2tcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBpZiBtYXNraW5nIGlzIGV4cGxpY3RseSBzdXBwb3J0ZWQsIGJ5IGRlZmF1bHRcbiAgICAvLyBjYXJyeSBvdmVyIHRoZSBpbnB1dCBtYXNrXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cblxuICBwcml2YXRlIHNldE1hc2tNZXRhZGF0YShcbiAgICAgIGlucHV0czogVGVuc29yfFRlbnNvcltdLCBvdXRwdXRzOiBUZW5zb3J8VGVuc29yW10sXG4gICAgICBwcmV2aW91c01hc2s/OiBUZW5zb3J8VGVuc29yW10pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNNYXNraW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0cHV0TWFza3MgPSB0aGlzLmNvbXB1dGVNYXNrKGlucHV0cywgcHJldmlvdXNNYXNrKTtcbiAgICBjb25zdCBvdXRwdXRzTGlzdCA9IGdlbmVyaWNfdXRpbHMudG9MaXN0KG91dHB1dHMpO1xuICAgIGNvbnN0IG91dHB1dE1hc2tzTGlzdCA9IGdlbmVyaWNfdXRpbHMudG9MaXN0KG91dHB1dE1hc2tzKTtcblxuICAgIGlmIChvdXRwdXRzTGlzdC5sZW5ndGggIT09IG91dHB1dE1hc2tzTGlzdC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgJHt0aGlzLm5hbWV9IG91dHB1dHMgJHtvdXRwdXRzTGlzdC5sZW5ndGh9IHRlbnNvcnMgYCArXG4gICAgICAgICAgYGJ1dCAke291dHB1dHNMaXN0Lmxlbmd0aH0gbWFza3MgZm9yIHRob3NlIHRlbnNvcnNgKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRwdXRzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgb3V0cHV0c0xpc3RbaV0ua2VyYXNNYXNrID0gb3V0cHV0TWFza3NMaXN0W2ldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gY3JlYXRlIGFuIGluYm91bmQgbm9kZSBmb3IgdGhlIGxheWVyLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRUZW5zb3JzIExpc3Qgb2YgaW5wdXQgdGVuc29ycy5cbiAgICogQHBhcmFtIG91dHB1dFRlbnNvcnMgTGlzdCBvZiBvdXRwdXQgdGVuc29ycy5cbiAgICogQHBhcmFtIGlucHV0TWFza3MgTGlzdCBvZiBpbnB1dCBtYXNrcyAoYSBtYXNrIGNhbiBiZSBhIHRlbnNvciwgb3IgbnVsbCkuXG4gICAqIEBwYXJhbSBvdXRwdXRNYXNrcyBMaXN0IG9mIG91dHB1dCBtYXNrcyAoYSBtYXNrIGNhbiBiZSBhIHRlbnNvciwgb3IgbnVsbCkuXG4gICAqIEBwYXJhbSBpbnB1dFNoYXBlcyBMaXN0IG9mIGlucHV0IHNoYXBlIHR1cGxlcy5cbiAgICogQHBhcmFtIG91dHB1dFNoYXBlcyBMaXN0IG9mIG91dHB1dCBzaGFwZSB0dXBsZXMuXG4gICAqIEBwYXJhbSBrd2FyZ3MgRGljdGlvbmFyeSBvZiBrZXl3b3JkIGFyZ3VtZW50cyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZVxuICAgKiAgIGBjYWxsYCBtZXRob2Qgb2YgdGhlIGxheWVyIGF0IHRoZSBjYWxsIHRoYXQgY3JlYXRlZCB0aGUgbm9kZS5cbiAgICovXG4gIHByaXZhdGUgYWRkSW5ib3VuZE5vZGUoXG4gICAgICBpbnB1dFRlbnNvcnM6IFN5bWJvbGljVGVuc29yfFN5bWJvbGljVGVuc29yW10sXG4gICAgICBvdXRwdXRUZW5zb3JzOiBTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdLFxuICAgICAgaW5wdXRNYXNrczogVGVuc29yfFRlbnNvcltdLCBvdXRwdXRNYXNrczogVGVuc29yfFRlbnNvcltdLFxuICAgICAgaW5wdXRTaGFwZXM6IFNoYXBlfFNoYXBlW10sIG91dHB1dFNoYXBlczogU2hhcGV8U2hhcGVbXSxcbiAgICAgIGt3YXJnczoge30gPSBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRUZW5zb3JMaXN0OiBTeW1ib2xpY1RlbnNvcltdID1cbiAgICAgICAgZ2VuZXJpY191dGlscy50b0xpc3QoaW5wdXRUZW5zb3JzKTtcbiAgICBvdXRwdXRUZW5zb3JzID0gZ2VuZXJpY191dGlscy50b0xpc3Qob3V0cHV0VGVuc29ycyk7XG4gICAgaW5wdXRNYXNrcyA9IGdlbmVyaWNfdXRpbHMudG9MaXN0KGlucHV0TWFza3MpO1xuICAgIG91dHB1dE1hc2tzID0gZ2VuZXJpY191dGlscy50b0xpc3Qob3V0cHV0TWFza3MpO1xuICAgIGlucHV0U2hhcGVzID0gdHlwZXNfdXRpbHMubm9ybWFsaXplU2hhcGVMaXN0KGlucHV0U2hhcGVzKTtcbiAgICBvdXRwdXRTaGFwZXMgPSB0eXBlc191dGlscy5ub3JtYWxpemVTaGFwZUxpc3Qob3V0cHV0U2hhcGVzKTtcblxuICAgIC8vIENvbGxlY3QgaW5wdXQgdGVuc29yKHMpIGNvb3JkaW5hdGVzLlxuICAgIGNvbnN0IGluYm91bmRMYXllcnM6IExheWVyW10gPSBbXTtcbiAgICBjb25zdCBub2RlSW5kaWNlczogbnVtYmVyW10gPSBbXTtcbiAgICBjb25zdCB0ZW5zb3JJbmRpY2VzOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeCBvZiBpbnB1dFRlbnNvckxpc3QpIHtcbiAgICAgIC8qXG4gICAgICAgKiBUT0RPKG1pY2hhZWx0ZXJyeSk6IEtlcmFzIGFkZHMgdGhpcyB2YWx1ZSB0byB0ZW5zb3JzOyBpdCdzIG5vdFxuICAgICAgICogY2xlYXIgd2hldGhlciB3ZSdsbCB1c2UgdGhpcyBvciBub3QuXG4gICAgICAgKi9cbiAgICAgIGluYm91bmRMYXllcnMucHVzaCh4LnNvdXJjZUxheWVyKTtcbiAgICAgIG5vZGVJbmRpY2VzLnB1c2goeC5ub2RlSW5kZXgpO1xuICAgICAgdGVuc29ySW5kaWNlcy5wdXNoKHgudGVuc29ySW5kZXgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBub2RlLCBhZGQgaXQgdG8gaW5ib3VuZCBub2Rlcy5cbiAgICAvLyAoVGhpcyBjYWxsIGhhcyBzaWRlIGVmZmVjdHMuKVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBOb2RlKFxuICAgICAgICB7XG4gICAgICAgICAgb3V0Ym91bmRMYXllcjogdGhpcyxcbiAgICAgICAgICBpbmJvdW5kTGF5ZXJzLFxuICAgICAgICAgIG5vZGVJbmRpY2VzLFxuICAgICAgICAgIHRlbnNvckluZGljZXMsXG4gICAgICAgICAgaW5wdXRUZW5zb3JzOiBpbnB1dFRlbnNvckxpc3QsXG4gICAgICAgICAgb3V0cHV0VGVuc29ycyxcbiAgICAgICAgICBpbnB1dE1hc2tzLFxuICAgICAgICAgIG91dHB1dE1hc2tzLFxuICAgICAgICAgIGlucHV0U2hhcGVzLFxuICAgICAgICAgIG91dHB1dFNoYXBlc1xuICAgICAgICB9LFxuICAgICAgICBrd2FyZ3MpO1xuXG4gICAgLy8gVXBkYXRlIHRlbnNvciBoaXN0b3J5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRwdXRUZW5zb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeTogX3VzZXNfbGVhcm5pbmdfcGhhc2Ugbm90IHRyYWNrZWQuXG4gICAgICBvdXRwdXRUZW5zb3JzW2ldLnNvdXJjZUxheWVyID0gdGhpcztcbiAgICAgIG91dHB1dFRlbnNvcnNbaV0ubm9kZUluZGV4ID0gdGhpcy5pbmJvdW5kTm9kZXMubGVuZ3RoIC0gMTtcbiAgICAgIG91dHB1dFRlbnNvcnNbaV0udGVuc29ySW5kZXggPSBpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25maWcgb2YgdGhlIGxheWVyLlxuICAgKlxuICAgKiBBIGxheWVyIGNvbmZpZyBpcyBhIFRTIGRpY3Rpb25hcnkgKHNlcmlhbGl6YWJsZSlcbiAgICogY29udGFpbmluZyB0aGUgY29uZmlndXJhdGlvbiBvZiBhIGxheWVyLlxuICAgKiBUaGUgc2FtZSBsYXllciBjYW4gYmUgcmVpbnN0YW50aWF0ZWQgbGF0ZXJcbiAgICogKHdpdGhvdXQgaXRzIHRyYWluZWQgd2VpZ2h0cykgZnJvbSB0aGlzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIFRoZSBjb25maWcgb2YgYSBsYXllciBkb2VzIG5vdCBpbmNsdWRlIGNvbm5lY3Rpdml0eVxuICAgKiBpbmZvcm1hdGlvbiwgbm9yIHRoZSBsYXllciBjbGFzcyBuYW1lLiAgVGhlc2UgYXJlIGhhbmRsZWRcbiAgICogYnkgJ0NvbnRhaW5lcicgKG9uZSBsYXllciBvZiBhYnN0cmFjdGlvbiBhYm92ZSkuXG4gICAqXG4gICAqIFBvcnRpbmcgTm90ZTogVGhlIFRTIGRpY3Rpb25hcnkgZm9sbG93cyBUUyBuYW1pbmcgc3RhbmRhcmRzIGZvclxuICAgKiBrZXlzLCBhbmQgdXNlcyB0ZmpzLWxheWVycyB0eXBlLXNhZmUgRW51bXMuICBTZXJpYWxpemF0aW9uIG1ldGhvZHNcbiAgICogc2hvdWxkIHVzZSBhIGhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IHRvIHRoZSBweXRob25pYyBzdG9yYWdlXG4gICAqIHN0YW5kYXJkLiAoc2VlIHNlcmlhbGl6YXRpb25fdXRpbHMuY29udmVydFRzVG9QeXRob25pYylcbiAgICpcbiAgICogQHJldHVybnMgVFMgZGljdGlvbmFyeSBvZiBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAZG9jIHtoZWFkaW5nOiAnTW9kZWxzJywgJ3N1YmhlYWRpbmcnOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCBjb25maWc6XG4gICAgICAgIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCA9IHtuYW1lOiB0aGlzLm5hbWUsIHRyYWluYWJsZTogdGhpcy50cmFpbmFibGV9O1xuICAgIGlmICh0aGlzLmJhdGNoSW5wdXRTaGFwZSAhPSBudWxsKSB7XG4gICAgICBjb25maWdbJ2JhdGNoSW5wdXRTaGFwZSddID0gdGhpcy5iYXRjaElucHV0U2hhcGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmR0eXBlICE9IG51bGwpIHtcbiAgICAgIGNvbmZpZ1snZHR5cGUnXSA9IHRoaXMuZHR5cGU7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSB0aGUgd2VpZ2h0IHZhcmlhYmxlcyB0aGF0IHRoaXMgTGF5ZXIgaW5zdGFuY2UgaG9sZHMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IE51bWJlciBvZiBkaXNwb3NlZCB2YXJpYWJsZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZGlzcG9zZVdlaWdodHMoKTogbnVtYmVyIHtcbiAgICB0aGlzLndlaWdodHMuZm9yRWFjaCh3ZWlnaHQgPT4gd2VpZ2h0LmRpc3Bvc2UoKSk7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0cy5sZW5ndGg7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXNzZXJ0Tm90RGlzcG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuX3JlZkNvdW50ID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYExheWVyICcke3RoaXMubmFtZX0nIGlzIGFscmVhZHkgZGlzcG9zZWQuYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gZGlzcG9zZSBsYXllcidzIHdlaWdodHMuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGRlY3JlYXNlcyB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIHRoZSBMYXllciBvYmplY3QgYnkgMS5cbiAgICpcbiAgICogQSBMYXllciBpcyByZWZlcmVuY2UtY291bnRlZC4gSXRzIHJlZmVyZW5jZSBjb3VudCBpcyBpbmNyZW1lbnRlZCBieSAxXG4gICAqIHRoZSBmaXJzdCBpdGVtIGl0cyBgYXBwbHkoKWAgbWV0aG9kIGlzIGNhbGxlZCBhbmQgd2hlbiBpdCBiZWNvbWVzIGEgcGFydFxuICAgKiBvZiBhIG5ldyBgTm9kZWAgKHRocm91Z2ggY2FsbGluZyB0aGUgYGFwcGx5KClgIG1ldGhvZCBvbiBhXG4gICAqIGB0Zi5TeW1ib2xpY1RlbnNvcmApLlxuICAgKlxuICAgKiBJZiB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIGEgTGF5ZXIgYmVjb21lcyAwLCBhbGwgdGhlIHdlaWdodHMgd2lsbCBiZVxuICAgKiBkaXNwb3NlZCBhbmQgdGhlIHVuZGVybHlpbmcgbWVtb3J5IChlLmcuLCB0aGUgdGV4dHVyZXMgYWxsb2NhdGVkIGluIFdlYkdMKVxuICAgKiB3aWxsIGJlIGZyZWVkLlxuICAgKlxuICAgKiBOb3RlOiBJZiB0aGUgcmVmZXJlbmNlIGNvdW50IGlzIGdyZWF0ZXIgdGhhbiAwIGFmdGVyIHRoZSBkZWNyZW1lbnQsIHRoZVxuICAgKiB3ZWlnaHRzIG9mIHRoZSBMYXllciB3aWxsICpub3QqIGJlIGRpc3Bvc2VkLlxuICAgKlxuICAgKiBBZnRlciBhIExheWVyIGlzIGRpc3Bvc2VkLCBpdCBjYW5ub3QgYmUgdXNlZCBpbiBjYWxscyBzdWNoIGFzIGBhcHBseSgpYCxcbiAgICogYGdldFdlaWdodHMoKWAgb3IgYHNldFdlaWdodHMoKWAgYW55bW9yZS5cbiAgICpcbiAgICogQHJldHVybnMgQSBEaXNwb3NlUmVzdWx0IE9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICAgKiAgIC0gcmVmQ291bnRBZnRlckRpc3Bvc2U6IFRoZSByZWZlcmVuY2UgY291bnQgb2YgdGhlIENvbnRhaW5lciBhZnRlciB0aGlzXG4gICAqICAgICBgZGlzcG9zZSgpYCBjYWxsLlxuICAgKiAgIC0gbnVtRGlzcG9zZWRWYXJpYWJsZXM6IE51bWJlciBvZiBgdGYuVmFyaWFibGVgcyAoaS5lLiwgd2VpZ2h0cykgZGlzcG9zZWRcbiAgICogICAgIGR1cmluZyB0aGlzIGBkaXNwb3NlKClgIGNhbGwuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgbGF5ZXIgaXMgbm90IGJ1aWx0IHlldCwgb3IgaWYgdGhlIGxheWVyIGhhcyBhbHJlYWR5XG4gICAqICAgYmVlbiBkaXNwb3NlZC5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsICdzdWJoZWFkaW5nJzogJ0NsYXNzZXMnfVxuICAgKi9cbiAgZGlzcG9zZSgpOiBEaXNwb3NlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuYnVpbHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2Fubm90IGRpc3Bvc2UgTGF5ZXIgJHt0aGlzLm5hbWV9IGJlY2F1c2UgaXQgaGFzIG5vdCBiZWVuIGAgK1xuICAgICAgICAgIGBidWlsdCB5ZXQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JlZkNvdW50ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENhbm5vdCBkaXNwb3NlIExheWVyICR7dGhpcy5uYW1lfSBiZWNhdXNlIGl0IGhhcyBub3QgYmVlbiB1c2VkIGAgK1xuICAgICAgICAgIGB5ZXQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5hc3NlcnROb3REaXNwb3NlZCgpO1xuXG4gICAgbGV0IG51bURpc3Bvc2VkVmFyaWFibGVzID0gMDtcbiAgICBpZiAoLS10aGlzLl9yZWZDb3VudCA9PT0gMCkge1xuICAgICAgbnVtRGlzcG9zZWRWYXJpYWJsZXMgPSB0aGlzLmRpc3Bvc2VXZWlnaHRzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZWZDb3VudEFmdGVyRGlzcG9zZTogdGhpcy5fcmVmQ291bnQsIG51bURpc3Bvc2VkVmFyaWFibGVzfTtcbiAgfVxufVxuXG4vKipcbiAqIENvbGxlY3RzIHRoZSBpbnB1dCBzaGFwZShzKSBvZiBhIGxpc3Qgb2YgYHRmLlRlbnNvcmBzIG9yXG4gKiBgdGYuU3ltYm9saWNUZW5zb3Jgcy5cbiAqXG4gKiBUT0RPKG1pY2hhZWx0ZXJyeSk6IFVwZGF0ZSBQeUtlcmFzIGRvY3MgKGJhY2twb3J0KS5cbiAqXG4gKiBAcGFyYW0gaW5wdXRUZW5zb3JzIExpc3Qgb2YgaW5wdXQgdGVuc29ycyAob3Igc2luZ2xlIGlucHV0IHRlbnNvcikuXG4gKlxuICogQHJldHVybiBMaXN0IG9mIHNoYXBlIHR1cGxlcyAob3Igc2luZ2xlIHR1cGxlKSwgb25lIHR1cGxlIHBlciBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gY29sbGVjdElucHV0U2hhcGUoaW5wdXRUZW5zb3JzOiBTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdfFRlbnNvcnxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbnNvcltdKTogU2hhcGV8U2hhcGVbXSB7XG4gIGlucHV0VGVuc29ycyA9XG4gICAgICBnZW5lcmljX3V0aWxzLnRvTGlzdChpbnB1dFRlbnNvcnMpIGFzIFN5bWJvbGljVGVuc29yW10gfCBUZW5zb3JbXTtcbiAgY29uc3Qgc2hhcGVzOiBTaGFwZVtdID0gW107XG4gIGZvciAoY29uc3QgeCBvZiBpbnB1dFRlbnNvcnMpIHtcbiAgICBzaGFwZXMucHVzaCh4LnNoYXBlKTtcbiAgfVxuICByZXR1cm4gZ2VuZXJpY191dGlscy5zaW5nbGV0b25PckFycmF5KHNoYXBlcyk7XG59XG5cbi8qKlxuICogR3Vlc3NlcyBvdXRwdXQgZHR5cGUgYmFzZWQgb24gaW5wdXRzLlxuICpcbiAqIEF0IHByZXNlbnQsIGp1c3QgcmV0dXJucyAnZmxvYXQzMicgZm9yIGFueSBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gaW5wdXRUZW5zb3JzIExpc3Qgb2YgaW5wdXQgdGVuc29ycyAob3Igc2luZ2xlIGlucHV0IHRlbnNvcikuXG4gKlxuICogQHJldHVybiBUaGUgZ3Vlc3NlZCBEVHlwZS4gQXQgcHJlc2VudCwgYWx3YXlzIHJldHVybnMgJ2Zsb2F0MzInLlxuICovXG5mdW5jdGlvbiBndWVzc091dHB1dERUeXBlKGlucHV0VGVuc29yczogU3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXXxUZW5zb3J8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlbnNvcltdKTogRGF0YVR5cGUge1xuICByZXR1cm4gJ2Zsb2F0MzInO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxpc3Qgb2YgaW5wdXQgdGVuc29ycyBuZWNlc3NhcnkgdG8gY29tcHV0ZSBgdGVuc29yYC5cbiAqXG4gKiBPdXRwdXQgd2lsbCBhbHdheXMgYmUgYSBsaXN0IG9mIHRlbnNvcnMgKHBvdGVudGlhbGx5IHdpdGggMSBlbGVtZW50KS5cbiAqXG4gKiBAcGFyYW0gdGVuc29yIFRoZSB0ZW5zb3IgdG8gc3RhcnQgZnJvbS5cbiAqIEBwYXJhbSBsYXllciBPcmlnaW4gbGF5ZXIgb2YgdGhlIHRlbnNvci5cbiAqIEBwYXJhbSBub2RlSW5kZXggT3JpZ2luIG5vZGUgaW5kZXggb2YgdGhlIHRlbnNvci5cbiAqXG4gKiBAcmV0dXJuIEFycmF5IG9mIGlucHV0IHRlbnNvcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VJbnB1dHMoXG4gICAgdGVuc29yOiBTeW1ib2xpY1RlbnNvciwgbGF5ZXI/OiBMYXllcixcbiAgICBub2RlSW5kZXg/OiBudW1iZXIpOiBTeW1ib2xpY1RlbnNvcltdIHtcbiAgaWYgKGxheWVyID09IG51bGwgfHwgKG5vZGVJbmRleCAhPSBudWxsICYmIG5vZGVJbmRleCA+IDApKSB7XG4gICAgbGF5ZXIgPSB0ZW5zb3Iuc291cmNlTGF5ZXI7XG4gICAgbm9kZUluZGV4ID0gdGVuc29yLm5vZGVJbmRleDtcbiAgfVxuICBpZiAobGF5ZXIuaW5ib3VuZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbdGVuc29yXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub2RlID0gbGF5ZXIuaW5ib3VuZE5vZGVzW25vZGVJbmRleF07XG4gICAgaWYgKG5vZGUuaW5ib3VuZExheWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBub2RlLmlucHV0VGVuc29ycztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc291cmNlVGVuc29yczogU3ltYm9saWNUZW5zb3JbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmluYm91bmRMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IG5vZGUuaW5wdXRUZW5zb3JzW2ldO1xuICAgICAgICBjb25zdCBsYXllciA9IG5vZGUuaW5ib3VuZExheWVyc1tpXTtcbiAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbm9kZS5ub2RlSW5kaWNlc1tpXTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTb3VyY2VzID0gZ2V0U291cmNlSW5wdXRzKHgsIGxheWVyLCBub2RlSW5kZXgpO1xuICAgICAgICAvLyBBdm9pZCBpbnB1dCByZWR1bmRhbmN5LlxuICAgICAgICBmb3IgKGNvbnN0IHggb2YgcHJldmlvdXNTb3VyY2VzKSB7XG4gICAgICAgICAgaWYgKHNvdXJjZVRlbnNvcnMuaW5kZXhPZih4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNvdXJjZVRlbnNvcnMucHVzaCh4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3VyY2VUZW5zb3JzO1xuICAgIH1cbiAgfVxufVxuXG50eXBlIE1heWJlU3ltYm9saWMgPSBTeW1ib2xpY1RlbnNvcnxUZW5zb3I7XG5cbmZ1bmN0aW9uIGNoZWNrQWxsU3ltYm9saWModGVuc29yczogTWF5YmVTeW1ib2xpY3xNYXliZVN5bWJvbGljW10pOlxuICAgIHRlbnNvcnMgaXMgU3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXSB7XG4gIGxldCBhbGxBcmVTeW1ib2xpYyA9IHRydWU7XG4gIGZvciAoY29uc3QgdGVuc29yIG9mIGdlbmVyaWNfdXRpbHMudG9MaXN0KHRlbnNvcnMpKSB7XG4gICAgaWYgKCEodGVuc29yIGluc3RhbmNlb2YgU3ltYm9saWNUZW5zb3IpKSB7XG4gICAgICBhbGxBcmVTeW1ib2xpYyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhbGxBcmVTeW1ib2xpYztcbn1cblxuZnVuY3Rpb24gY2hlY2tOb25lU3ltYm9saWModGVuc29yczogTWF5YmVTeW1ib2xpY3xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE1heWJlU3ltYm9saWNbXSk6IHRlbnNvcnMgaXMgVGVuc29yfFRlbnNvcltdIHtcbiAgbGV0IG5vbmVBcmVTeW1ib2xpYyA9IHRydWU7XG4gIGZvciAoY29uc3QgdGVuc29yIG9mIGdlbmVyaWNfdXRpbHMudG9MaXN0KHRlbnNvcnMpKSB7XG4gICAgaWYgKHRlbnNvciBpbnN0YW5jZW9mIFN5bWJvbGljVGVuc29yKSB7XG4gICAgICBub25lQXJlU3ltYm9saWMgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9uZUFyZVN5bWJvbGljO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/input_layer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "Input",
    ()=>Input,
    "InputLayer",
    ()=>InputLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
;
;
;
;
class InputLayer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super({
            dtype: args.dtype,
            name: args.name != null ? args.name : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUid"])('input').toString()
        });
        // Normalize config.batchSize and config.sparse
        if (args.batchSize == null) {
            args.batchSize = null;
        }
        if (args.sparse == null) {
            args.sparse = false;
        }
        this.trainable = false;
        this.built = true;
        this.sparse = args.sparse;
        if (args.inputShape != null && args.batchInputShape != null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Only provide the inputShape OR ' + 'batchInputShape argument to inputLayer, not both at the same time.');
        }
        let batchInputShape = args.batchInputShape;
        if (batchInputShape == null) {
            if (args.inputShape == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('An InputLayer should be passed either a ' + '`batchInputShape` or an `inputShape`.');
            } else {
                batchInputShape = [
                    args.batchSize
                ].concat(args.inputShape);
            }
        } else {
            // TODO(michaelterry): Backport to PyKeras
            if (args.batchSize != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Cannot specify batchSize if batchInputShape is ' + 'specified when creating an InputLayer.');
            }
        }
        const dtype = args.dtype || 'float32';
        this.batchInputShape = batchInputShape;
        this.dtype = dtype;
        // TODO(michaelterry): Backport this to PyKeras?
        this.inputSpec = [
            {
                shape: batchInputShape
            }
        ];
        const inputTensor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolicTensor"](this.dtype, this.batchInputShape, this, [], {}, this.name);
        inputTensor.nodeIndex = 0;
        inputTensor.tensorIndex = 0;
        // Create an input node to add to this.outboundNode.
        // (This call has side effects.)
        // tslint:disable-next-line:no-unused-expression
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"]({
            outboundLayer: this,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: [
                inputTensor
            ],
            outputTensors: [
                inputTensor
            ],
            inputMasks: [
                null
            ],
            outputMasks: [
                null
            ],
            inputShapes: [
                batchInputShape
            ],
            outputShapes: [
                batchInputShape
            ]
        });
    }
    apply(inputs, kwargs) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Cannot pass any input to an ' + `InputLayer's apply() method. InputLayer name: ${this.name}`);
    }
    dispose() {
        // dispose() for InputLayer is overridden as no-op.
        return {
            refCountAfterDispose: this._refCount,
            numDisposedVariables: 0
        };
    }
    getConfig() {
        return {
            batchInputShape: this.batchInputShape,
            dtype: this.dtype,
            sparse: this.sparse,
            name: this.name
        };
    }
}
/** @nocollapse */ InputLayer.className = 'InputLayer';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(InputLayer);
function Input(config) {
    if (config.batchShape == null && config.shape == null) {
        throw new Error('Please provide to Input either a `shape`' + ' or a `batchShape` argument. Note that ' + '`shape` does not include the batch ' + 'dimension.');
    }
    if (config.batchShape != null && config.shape != null) {
        // TODO(michaelterry): Backport to PyKeras.
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Please provide either a `shape` or `batchShape` ' + 'argument to Input, but not both.');
    }
    let batchShape = config.batchShape;
    if (config.shape != null && batchShape == null) {
        batchShape = [
            null
        ].concat(config.shape);
    }
    let dtype = config.dtype;
    if (dtype == null) {
        dtype = 'float32';
    }
    const inputLayer = new InputLayer({
        batchInputShape: batchShape,
        name: config.name,
        dtype,
        sparse: config.sparse
    });
    const outputs = inputLayer.inboundNodes[0].outputTensors;
    return outputs[0];
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRfbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZW5naW5lL2lucHV0X2xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFXLGFBQWEsRUFBUyxNQUFNLHVCQUF1QixDQUFDO0FBRXRFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBSXJDLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUMsTUFBTSxZQUFZLENBQUM7QUEyQnRFLE1BQWEsVUFBVyxTQUFRLEtBQUs7SUFJbkMsWUFBWSxJQUFvQjtRQUM5QixLQUFLLENBQUM7WUFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ2pFLENBQUMsQ0FBQztRQUNILCtDQUErQztRQUMvQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxVQUFVLElB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QUFNLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtRQUNyRCxNQUFNLElBQUksS0FBSyxDQUNYLDBDQUEwQztZQUMxQyx5Q0FBeUM7WUFDekMscUNBQXFDO1lBQ3JDLFlBQVksQ0FBQyxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtRQUNyRCwyQ0FBMkM7UUFDM0MsTUFBTSxJQUFJLFVBQVUsQ0FDaEIsa0RBQWtEO1lBQ2xELGtDQUFrQyxDQUFDLENBQUM7S0FDekM7SUFDRCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ25DLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtRQUM5QyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDO0lBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsS0FBSyxHQUFHLFNBQVMsQ0FBQztLQUNuQjtJQUVELE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDO1FBQ2hDLGVBQWUsRUFBRSxVQUFVO1FBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixLQUFLO1FBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO0tBQ3RCLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3pELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQge0RhdGFUeXBlLCBzZXJpYWxpemF0aW9uLCBUZW5zb3J9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7Z2V0VWlkfSBmcm9tICcuLi9iYWNrZW5kL3N0YXRlJztcbmltcG9ydCB7VmFsdWVFcnJvcn0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7U2hhcGV9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9jb21tb24nO1xuaW1wb3J0IHtLd2FyZ3N9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHtEaXNwb3NlUmVzdWx0LCBMYXllciwgTm9kZSwgU3ltYm9saWNUZW5zb3J9IGZyb20gJy4vdG9wb2xvZ3knO1xuXG4vKipcbiAqIENvbnN0cnVjdG9yIGFyZ3VtZW50cyBmb3IgSW5wdXRMYXllci5cbiAqXG4gKiBOb3RlOiBZb3Ugc2hvdWxkIHByb3ZpZGUgb25seSBpbnB1dFNoYXBlIG9yIGJhdGNoSW5wdXRTaGFwZSAobm90IGJvdGgpLlxuICogSWYgb25seSBpbnB1dFNoYXBlIGlzIHByb3ZpZGVkLCB0aGVuIHRoZSBiYXRjaElucHV0U2hhcGUgaXMgZGV0ZXJtaW5lZCBieVxuICogdGhlIGJhdGNoU2l6ZSBhcmd1bWVudCBhbmQgdGhlIGlucHV0U2hhcGU6IFtiYXRjaFNpemVdLmNvbmNhdChpbnB1dFNoYXBlKS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElucHV0TGF5ZXJBcmdzIHtcbiAgLyoqIElucHV0IHNoYXBlLCBub3QgaW5jbHVkaW5nIHRoZSBiYXRjaCBheGlzLiAqL1xuICBpbnB1dFNoYXBlPzogU2hhcGU7XG4gIC8qKiBPcHRpb25hbCBpbnB1dCBiYXRjaCBzaXplIChpbnRlZ2VyIG9yIG51bGwpLiAqL1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG4gIC8qKiBCYXRjaCBpbnB1dCBzaGFwZSwgaW5jbHVkaW5nIHRoZSBiYXRjaCBheGlzLiAqL1xuICBiYXRjaElucHV0U2hhcGU/OiBTaGFwZTtcbiAgLyoqIERhdGF0eXBlIG9mIHRoZSBpbnB1dC4gICovXG4gIGR0eXBlPzogRGF0YVR5cGU7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwbGFjZWhvbGRlciBjcmVhdGVkIGlzIG1lYW50IHRvIGJlIHNwYXJzZS5cbiAgICovXG4gIHNwYXJzZT86IGJvb2xlYW47ICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IE5vdCBjbGVhciB3aGV0aGVyIHdlJ2xsIG5lZWQgdGhpcy5cblxuICAvKiogTmFtZSBvZiB0aGUgbGF5ZXIuICovXG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dExheWVyIGV4dGVuZHMgTGF5ZXIge1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHJlYWRvbmx5IGNsYXNzTmFtZSA9ICdJbnB1dExheWVyJztcbiAgc3BhcnNlOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihhcmdzOiBJbnB1dExheWVyQXJncykge1xuICAgIHN1cGVyKHtcbiAgICAgIGR0eXBlOiBhcmdzLmR0eXBlLFxuICAgICAgbmFtZTogYXJncy5uYW1lICE9IG51bGwgPyBhcmdzLm5hbWUgOiBnZXRVaWQoJ2lucHV0JykudG9TdHJpbmcoKVxuICAgIH0pO1xuICAgIC8vIE5vcm1hbGl6ZSBjb25maWcuYmF0Y2hTaXplIGFuZCBjb25maWcuc3BhcnNlXG4gICAgaWYgKGFyZ3MuYmF0Y2hTaXplID09IG51bGwpIHtcbiAgICAgIGFyZ3MuYmF0Y2hTaXplID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGFyZ3Muc3BhcnNlID09IG51bGwpIHtcbiAgICAgIGFyZ3Muc3BhcnNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy50cmFpbmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcbiAgICB0aGlzLnNwYXJzZSA9IGFyZ3Muc3BhcnNlO1xuXG4gICAgaWYgKGFyZ3MuaW5wdXRTaGFwZSAhPSBudWxsICYmIGFyZ3MuYmF0Y2hJbnB1dFNoYXBlICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICdPbmx5IHByb3ZpZGUgdGhlIGlucHV0U2hhcGUgT1IgJyArXG4gICAgICAgICAgJ2JhdGNoSW5wdXRTaGFwZSBhcmd1bWVudCB0byBpbnB1dExheWVyLCBub3QgYm90aCBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgIH1cbiAgICBsZXQgYmF0Y2hJbnB1dFNoYXBlID0gYXJncy5iYXRjaElucHV0U2hhcGU7XG4gICAgaWYgKGJhdGNoSW5wdXRTaGFwZSA9PSBudWxsKSB7XG4gICAgICBpZiAoYXJncy5pbnB1dFNoYXBlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAnQW4gSW5wdXRMYXllciBzaG91bGQgYmUgcGFzc2VkIGVpdGhlciBhICcgK1xuICAgICAgICAgICAgJ2BiYXRjaElucHV0U2hhcGVgIG9yIGFuIGBpbnB1dFNoYXBlYC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhdGNoSW5wdXRTaGFwZSA9IFthcmdzLmJhdGNoU2l6ZV0uY29uY2F0KGFyZ3MuaW5wdXRTaGFwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8obWljaGFlbHRlcnJ5KTogQmFja3BvcnQgdG8gUHlLZXJhc1xuICAgICAgaWYgKGFyZ3MuYmF0Y2hTaXplICE9IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAnQ2Fubm90IHNwZWNpZnkgYmF0Y2hTaXplIGlmIGJhdGNoSW5wdXRTaGFwZSBpcyAnICtcbiAgICAgICAgICAgICdzcGVjaWZpZWQgd2hlbiBjcmVhdGluZyBhbiBJbnB1dExheWVyLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR0eXBlID0gYXJncy5kdHlwZSB8fCAnZmxvYXQzMic7XG5cbiAgICB0aGlzLmJhdGNoSW5wdXRTaGFwZSA9IGJhdGNoSW5wdXRTaGFwZTtcbiAgICB0aGlzLmR0eXBlID0gZHR5cGU7XG4gICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBCYWNrcG9ydCB0aGlzIHRvIFB5S2VyYXM/XG4gICAgdGhpcy5pbnB1dFNwZWMgPSBbe3NoYXBlOiBiYXRjaElucHV0U2hhcGV9XTtcblxuICAgIGNvbnN0IGlucHV0VGVuc29yID0gbmV3IFN5bWJvbGljVGVuc29yKFxuICAgICAgICB0aGlzLmR0eXBlLCB0aGlzLmJhdGNoSW5wdXRTaGFwZSwgdGhpcywgW10sIHt9LCB0aGlzLm5hbWUpO1xuICAgIGlucHV0VGVuc29yLm5vZGVJbmRleCA9IDA7XG4gICAgaW5wdXRUZW5zb3IudGVuc29ySW5kZXggPSAwO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGlucHV0IG5vZGUgdG8gYWRkIHRvIHRoaXMub3V0Ym91bmROb2RlLlxuICAgIC8vIChUaGlzIGNhbGwgaGFzIHNpZGUgZWZmZWN0cy4pXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IE5vZGUoe1xuICAgICAgb3V0Ym91bmRMYXllcjogdGhpcyxcbiAgICAgIGluYm91bmRMYXllcnM6IFtdLFxuICAgICAgbm9kZUluZGljZXM6IFtdLFxuICAgICAgdGVuc29ySW5kaWNlczogW10sXG4gICAgICBpbnB1dFRlbnNvcnM6IFtpbnB1dFRlbnNvcl0sXG4gICAgICBvdXRwdXRUZW5zb3JzOiBbaW5wdXRUZW5zb3JdLFxuICAgICAgaW5wdXRNYXNrczogW251bGxdLFxuICAgICAgb3V0cHV0TWFza3M6IFtudWxsXSxcbiAgICAgIGlucHV0U2hhcGVzOiBbYmF0Y2hJbnB1dFNoYXBlXSxcbiAgICAgIG91dHB1dFNoYXBlczogW2JhdGNoSW5wdXRTaGFwZV1cbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIGFwcGx5KFxuICAgICAgaW5wdXRzOiBUZW5zb3J8VGVuc29yW118U3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXSxcbiAgICAgIGt3YXJncz86IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXXxTeW1ib2xpY1RlbnNvciB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcGFzcyBhbnkgaW5wdXQgdG8gYW4gJyArXG4gICAgICAgIGBJbnB1dExheWVyJ3MgYXBwbHkoKSBtZXRob2QuIElucHV0TGF5ZXIgbmFtZTogJHt0aGlzLm5hbWV9YCk7XG4gIH1cblxuICBvdmVycmlkZSBkaXNwb3NlKCk6IERpc3Bvc2VSZXN1bHQge1xuICAgIC8vIGRpc3Bvc2UoKSBmb3IgSW5wdXRMYXllciBpcyBvdmVycmlkZGVuIGFzIG5vLW9wLlxuICAgIHJldHVybiB7cmVmQ291bnRBZnRlckRpc3Bvc2U6IHRoaXMuX3JlZkNvdW50LCBudW1EaXNwb3NlZFZhcmlhYmxlczogMH07XG4gIH1cblxuICBvdmVycmlkZSBnZXRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hJbnB1dFNoYXBlOiB0aGlzLmJhdGNoSW5wdXRTaGFwZSxcbiAgICAgIGR0eXBlOiB0aGlzLmR0eXBlLFxuICAgICAgc3BhcnNlOiB0aGlzLnNwYXJzZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgIH07XG4gIH1cbn1cbnNlcmlhbGl6YXRpb24ucmVnaXN0ZXJDbGFzcyhJbnB1dExheWVyKTtcblxuLyoqXG4gKiBDb25maWcgZm9yIHRoZSBJbnB1dCBmdW5jdGlvbi5cbiAqXG4gKiBOb3RlOiBZb3Ugc2hvdWxkIHByb3ZpZGUgb25seSBzaGFwZSBvciBiYXRjaFNoYXBlIChub3QgYm90aCkuXG4gKiBJZiBvbmx5IHNoYXBlIGlzIHByb3ZpZGVkLCB0aGVuIHRoZSBiYXRjaFNoYXBlIGJlY29tZXNcbiAqIFtudWxsXS5jb25jYXQoaW5wdXRTaGFwZSkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRDb25maWcge1xuICAvKipcbiAgICogQSBzaGFwZSwgbm90IGluY2x1ZGluZyB0aGUgYmF0Y2ggc2l6ZS4gRm9yIGluc3RhbmNlLCBgc2hhcGU9WzMyXWBcbiAgICogaW5kaWNhdGVzIHRoYXQgdGhlIGV4cGVjdGVkIGlucHV0IHdpbGwgYmUgYmF0Y2hlcyBvZiAzMi1kaW1lbnNpb25hbFxuICAgKiB2ZWN0b3JzLlxuICAgKi9cbiAgc2hhcGU/OiBTaGFwZTtcbiAgLyoqXG4gICAqIEEgc2hhcGUgdHVwbGUgKGludGVnZXIpLCBpbmNsdWRpbmcgdGhlIGJhdGNoIHNpemUuIEZvciBpbnN0YW5jZSxcbiAgICogYGJhdGNoU2hhcGU9WzEwLCAzMl1gIGluZGljYXRlcyB0aGF0IHRoZSBleHBlY3RlZCBpbnB1dCB3aWxsIGJlIGJhdGNoZXMgb2ZcbiAgICogMTAgMzItZGltZW5zaW9uYWwgdmVjdG9ycy4gYGJhdGNoU2hhcGU9W251bGwsIDMyXWAgaW5kaWNhdGVzIGJhdGNoZXMgb2YgYW5cbiAgICogYXJiaXRyYXJ5IG51bWJlciBvZiAzMi1kaW1lbnNpb25hbCB2ZWN0b3JzLlxuICAgKi9cbiAgYmF0Y2hTaGFwZT86IFNoYXBlO1xuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbmFtZSBzdHJpbmcgZm9yIHRoZSBsYXllci4gU2hvdWxkIGJlIHVuaXF1ZSBpbiBhIG1vZGVsIChkbyBub3RcbiAgICogcmV1c2UgdGhlIHNhbWUgbmFtZSB0d2ljZSkuIEl0IHdpbGwgYmUgYXV0b2dlbmVyYXRlZCBpZiBpdCBpc24ndCBwcm92aWRlZC5cbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIGR0eXBlPzogRGF0YVR5cGU7XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gc3BlY2lmeWluZyB3aGV0aGVyIHRoZSBwbGFjZWhvbGRlciB0byBiZSBjcmVhdGVkIGlzIHNwYXJzZS5cbiAgICovXG4gIHNwYXJzZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dChjb25maWc6IElucHV0Q29uZmlnKTogU3ltYm9saWNUZW5zb3Ige1xuICBpZiAoY29uZmlnLmJhdGNoU2hhcGUgPT0gbnVsbCAmJiBjb25maWcuc2hhcGUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1BsZWFzZSBwcm92aWRlIHRvIElucHV0IGVpdGhlciBhIGBzaGFwZWAnICtcbiAgICAgICAgJyBvciBhIGBiYXRjaFNoYXBlYCBhcmd1bWVudC4gTm90ZSB0aGF0ICcgK1xuICAgICAgICAnYHNoYXBlYCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBiYXRjaCAnICtcbiAgICAgICAgJ2RpbWVuc2lvbi4nKTtcbiAgfVxuICBpZiAoY29uZmlnLmJhdGNoU2hhcGUgIT0gbnVsbCAmJiBjb25maWcuc2hhcGUgIT0gbnVsbCkge1xuICAgIC8vIFRPRE8obWljaGFlbHRlcnJ5KTogQmFja3BvcnQgdG8gUHlLZXJhcy5cbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgJ1BsZWFzZSBwcm92aWRlIGVpdGhlciBhIGBzaGFwZWAgb3IgYGJhdGNoU2hhcGVgICcgK1xuICAgICAgICAnYXJndW1lbnQgdG8gSW5wdXQsIGJ1dCBub3QgYm90aC4nKTtcbiAgfVxuICBsZXQgYmF0Y2hTaGFwZSA9IGNvbmZpZy5iYXRjaFNoYXBlO1xuICBpZiAoY29uZmlnLnNoYXBlICE9IG51bGwgJiYgYmF0Y2hTaGFwZSA9PSBudWxsKSB7XG4gICAgYmF0Y2hTaGFwZSA9IFtudWxsXS5jb25jYXQoY29uZmlnLnNoYXBlKTtcbiAgfVxuXG4gIGxldCBkdHlwZSA9IGNvbmZpZy5kdHlwZTtcbiAgaWYgKGR0eXBlID09IG51bGwpIHtcbiAgICBkdHlwZSA9ICdmbG9hdDMyJztcbiAgfVxuXG4gIGNvbnN0IGlucHV0TGF5ZXIgPSBuZXcgSW5wdXRMYXllcih7XG4gICAgYmF0Y2hJbnB1dFNoYXBlOiBiYXRjaFNoYXBlLFxuICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxuICAgIGR0eXBlLFxuICAgIHNwYXJzZTogY29uZmlnLnNwYXJzZVxuICB9KTtcblxuICBjb25zdCBvdXRwdXRzID0gaW5wdXRMYXllci5pbmJvdW5kTm9kZXNbMF0ub3V0cHV0VGVuc29ycztcbiAgcmV0dXJuIG91dHB1dHNbMF07XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/executor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Executor: Evaluates SymbolicTensor based on feeds.
 */ __turbopack_context__.s([
    "FeedDict",
    ()=>FeedDict,
    "cachedRecipientCounts",
    ()=>cachedRecipientCounts,
    "cachedSorted",
    ()=>cachedSorted,
    "execute",
    ()=>execute,
    "getTopologicalSortAndRecipientCountsForOneFetch",
    ()=>getTopologicalSortAndRecipientCountsForOneFetch,
    "updateCacheMaxEntries",
    ()=>updateCacheMaxEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$executor_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/executor_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/input_layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
/**
 * Helper function to check the dtype and shape compatibility of a feed value.
 */ function assertFeedCompatibility(key, val) {
    // Check dtype compatibility.
    if (key.dtype == null || key.dtype === val.dtype) {
        //  a.  If types match, return val tensor as is.
        return val;
    }
    try {
        //  b. Attempt to convert to expected type.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"])(val, key.dtype);
    } catch (err) {
        //  c. If conversion fails, return helpful error.
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The dtype of the feed (${val.dtype}) can not be cast to the dtype ` + `of the key '${key.name}' (${key.dtype}).`);
    }
}
class FeedDict {
    /**
     * Constructor, optionally does copy-construction.
     * @param feeds An Array of `Feed`s, or another `FeedDict`, in which case
     *   copy-construction will be performed.
     */ constructor(feeds){
        this.id2Value = {};
        this.id2Mask = {};
        this.name2Id = {};
        if (feeds instanceof FeedDict) {
            for(const id in feeds.id2Value){
                this.id2Value[id] = feeds.id2Value[id];
                if (id in feeds.id2Mask) {
                    this.id2Mask[id] = feeds.id2Mask[id];
                }
            }
        } else {
            if (feeds == null) {
                return;
            }
            for (const feed of feeds){
                this.add(feed.key, feed.value);
            }
        }
    }
    /**
     * Add a key-value pair to the FeedDict.
     *
     * @param key The key of the feed.
     * @param value The value of the tensor feed.
     * @param mask The value of the mask feed (optional).
     * @returns This `FeedDict`.
     * @throws ValueError: If the key `SymbolicTensor` already exists in the
     *   `FeedDict`.
     */ add(key, value, mask) {
        if (this.id2Value[key.id] == null) {
            this.id2Value[key.id] = assertFeedCompatibility(key, value);
            this.name2Id[key.name] = key.id;
            if (mask != null) {
                this.id2Mask[key.id] = mask;
            }
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Duplicate key: name=${key.name}, id=${key.id}`);
        }
        return this;
    }
    /**
     * Add a Feed to the FeedDict.
     * @param feed The new `Feed` to add.
     * @returns This `FeedDict`.
     */ addFeed(feed) {
        this.add(feed.key, feed.value);
    }
    /**
     * Probe whether a key already exists in the FeedDict.
     * @param key
     */ hasKey(key) {
        return this.id2Value[key.id] != null;
    }
    /**
     * Get all the SymbolicTensor available in this FeedDict.
     */ names() {
        return Object.keys(this.name2Id);
    }
    /**
     * Get the feed value for given key.
     * @param key The SymbolicTensor, or its name (as a string), of which the
     *     value is sought.
     * @returns If `key` exists, the corresponding feed value.
     * @throws ValueError: If `key` does not exist in this `FeedDict`.
     */ getValue(key) {
        if (key instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolicTensor"]) {
            if (this.id2Value[key.id] == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Nonexistent key: ${key.name}`);
            } else {
                return this.id2Value[key.id];
            }
        } else {
            const id = this.name2Id[key];
            if (id == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Feed dict has no SymbolicTensor name: ${key}`);
            }
            return this.id2Value[id];
        }
    }
    /**
     * Get the feed mask for given key.
     * @param key The SymbolicTensor, or its name (as a string), of which the
     *     value is sought.
     * @returns If `key` exists, the corresponding feed mask.
     * @throws ValueError: If `key` does not exist in this `FeedDict`.
     */ getMask(key) {
        if (key instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SymbolicTensor"]) {
            if (this.id2Value[key.id] == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Nonexistent key: ${key.name}`);
            } else {
                return this.id2Mask[key.id];
            }
        } else {
            const id = this.name2Id[key];
            if (id == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Feed dict has no SymbolicTensor name: ${key}`);
            }
            return this.id2Mask[id];
        }
    }
    /** Dispose all mask Tensors held by this object. */ disposeMasks() {
        if (this.id2Mask != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(this.id2Mask);
        }
    }
}
const cachedSorted = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$executor_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruCache"]();
const cachedRecipientCounts = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$executor_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruCache"]();
function updateCacheMaxEntries(maxEntries) {
    if (cachedSorted != null) {
        cachedSorted.setMaxEntries(maxEntries);
    }
    if (cachedRecipientCounts != null) {
        cachedRecipientCounts.setMaxEntries(maxEntries);
    }
}
function execute(fetches, feedDict, kwargs, probe) {
    const training = kwargs == null ? false : kwargs['training'];
    const arrayFetches = Array.isArray(fetches);
    const fetchArray = arrayFetches ? fetches : [
        fetches
    ];
    const outputNames = fetchArray.map((t)=>t.name);
    const finalOutputs = [];
    const feedNames = feedDict.names();
    for (const outputName of outputNames){
        if (feedNames.indexOf(outputName) !== -1) {
            finalOutputs.push(feedDict.getValue(outputName));
        } else {
            finalOutputs.push(null);
        }
    }
    if (probe != null) {
        // For optional probing of memory footprint during execution.
        probe.maxNumTensors = -Infinity;
        probe.minNumTensors = Infinity;
    }
    // Check cache.
    const fetchAndFeedKey = outputNames.join(',') + '|' + feedDict.names().sort().join(',');
    let sorted = cachedSorted.get(fetchAndFeedKey);
    let recipientCounts;
    if (sorted == null) {
        // Cache doesn't contain the desired combination of fetches. Compute
        // topological sort for the combination for the first time.
        const out = getTopologicalSortAndRecipientCounts(fetchArray, feedDict);
        sorted = out.sorted;
        recipientCounts = out.recipientCounts;
        // Store results in cache for future use.
        cachedSorted.put(fetchAndFeedKey, sorted);
        cachedRecipientCounts.put(fetchAndFeedKey, recipientCounts);
    }
    recipientCounts = {};
    if (!training) {
        Object.assign(recipientCounts, cachedRecipientCounts.get(fetchAndFeedKey));
    }
    const internalFeedDict = new FeedDict(feedDict);
    // Start iterative execution on the topologically-sorted SymbolicTensors.
    for(let i = 0; i < sorted.length; ++i){
        if (probe != null) {
            // For optional probing of memory usage during execution.
            const numTensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memory"])().numTensors;
            if (numTensors > probe.maxNumTensors) {
                probe.maxNumTensors = numTensors;
            }
            if (numTensors < probe.minNumTensors) {
                probe.minNumTensors = numTensors;
            }
        }
        const symbolic = sorted[i];
        const srcLayer = symbolic.sourceLayer;
        if (srcLayer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputLayer"]) {
            continue;
        }
        const inputValues = [];
        const inputMasks = [];
        const tensorsToDispose = [];
        let maskExists = false;
        for (const input of symbolic.inputs){
            const value = internalFeedDict.getValue(input);
            const mask = internalFeedDict.getMask(input);
            inputValues.push(value);
            inputMasks.push(mask);
            if (mask != null) {
                maskExists = true;
            }
            if (!training) {
                recipientCounts[input.name]--;
                if (recipientCounts[input.name] === 0 && !feedDict.hasKey(input) && outputNames.indexOf(input.name) === -1 && !value.isDisposed && input.sourceLayer.stateful !== true) {
                    tensorsToDispose.push(value);
                }
            }
        }
        if (maskExists) {
            kwargs = kwargs || {};
            kwargs['mask'] = inputMasks[0];
        }
        const outputTensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"])(srcLayer.apply(inputValues, kwargs));
        let outputMask = null;
        if (srcLayer.supportsMasking) {
            outputMask = srcLayer.computeMask(inputValues, inputMasks);
        }
        const layerOutputs = getNodeOutputs(symbolic);
        const outputSymbolicTensors = Array.isArray(layerOutputs) ? layerOutputs : [
            layerOutputs
        ];
        for(let i = 0; i < outputSymbolicTensors.length; ++i){
            if (!internalFeedDict.hasKey(outputSymbolicTensors[i])) {
                internalFeedDict.add(outputSymbolicTensors[i], outputTensors[i], Array.isArray(outputMask) ? outputMask[0] : outputMask);
            }
            const index = outputNames.indexOf(outputSymbolicTensors[i].name);
            if (index !== -1) {
                finalOutputs[index] = outputTensors[i];
            }
        }
        if (!training) {
            // Clean up Tensors that are no longer needed.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(tensorsToDispose);
        }
    }
    // NOTE(cais): Unlike intermediate tensors, we don't discard mask
    // tensors as we go, because these tensors are sometimes passed over a
    // series of mutliple layers, i.e., not obeying the immediate input
    // relations in the graph. If this becomes a memory-usage concern,
    // we can improve this in the future.
    internalFeedDict.disposeMasks();
    return arrayFetches ? finalOutputs : finalOutputs[0];
}
/**
 * Sort the `SymbolicTensor`s topologically, for an array of fetches.
 *
 * This function calls getTopologicalSortAndRecipientCountsForOneFetch and
 * merges their results.
 *
 * @param fetch The array of fetches requested. Must be a non-empty array.
 * @param feedDict The dictionary of fed values.
 * @returns sorted: Topologically-sorted array of SymbolicTensors.
 *   recipientCounts: Recipient counts for all SymbolicTensors in `sorted`.
 */ function getTopologicalSortAndRecipientCounts(fetches, feedDict) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(fetches != null && fetches.length > 0, ()=>`Expected at least one fetch, got none`);
    let finalSorted = [];
    let finalRecipientMap = {};
    if (fetches.length === 1) {
        // Special-casing 1 fetch for efficiency.
        const out = getTopologicalSortAndRecipientCountsForOneFetch(fetches[0], feedDict);
        finalSorted = out.sorted;
        finalRecipientMap = out.recipientMap;
    } else {
        const visited = new Set();
        for (const fetch of fetches){
            const { sorted, recipientMap } = getTopologicalSortAndRecipientCountsForOneFetch(fetch, feedDict);
            // Merge sorted SymbolicTensor Arrays.
            for (const symbolicTensor of sorted){
                if (!visited.has(symbolicTensor.name)) {
                    finalSorted.push(symbolicTensor);
                    visited.add(symbolicTensor.name);
                }
            }
            // Merge recipient maps.
            for(const name in recipientMap){
                if (finalRecipientMap[name] == null) {
                    finalRecipientMap[name] = new Set();
                }
                recipientMap[name].forEach((recipient)=>finalRecipientMap[name].add(recipient));
            }
        }
    }
    return {
        sorted: finalSorted,
        recipientCounts: recipientMap2Counts(finalRecipientMap)
    };
}
function recipientMap2Counts(recipientMap) {
    const recipientCounts = {};
    for(const name in recipientMap){
        recipientCounts[name] = recipientMap[name].size;
    }
    return recipientCounts;
}
function getTopologicalSortAndRecipientCountsForOneFetch(fetch, feedDict) {
    const visited = new Set();
    const sorted = [];
    const recipientMap = {};
    // Put keys of the feedDict into visited first, so they don't have to be
    // walked. This is needed in case where there are feeds for intermediate
    // SymbolicTensors of the graph.
    for (const key of feedDict.names()){
        visited.add(key);
    }
    const stack = [];
    const marks = [];
    // Initial population of stack and marks.
    stack.push(fetch);
    while(stack.length > 0){
        const top = stack[stack.length - 1];
        if (visited.has(top.name)) {
            stack.pop();
            continue;
        }
        const topIsMarked = marks[marks.length - 1] === stack.length - 1;
        if (top.inputs.length === 0 || topIsMarked) {
            // Input SymbolicTensor or all children have been visited.
            stack.pop();
            sorted.push(top);
            visited.add(top.name);
            if (topIsMarked) {
                marks.pop();
            }
        } else {
            // A non-input SymbolicTensor whose upstream SymbolicTensors haven't
            // been visited yet. Push them onto the stack.
            marks.push(stack.length - 1);
            for (const input of top.inputs){
                // Increment the recipient count. Note that this needs to happen
                // regardless of whether the SymbolicTensor has been visited before.
                if (recipientMap[input.name] == null) {
                    recipientMap[input.name] = new Set();
                }
                recipientMap[input.name].add(top.name);
                if (visited.has(input.name)) {
                    continue; // Avoid repeated visits to the same SymbolicTensor.
                }
                stack.push(input);
            }
        }
    }
    return {
        sorted,
        recipientMap
    };
}
/**
 * Get the symbolic output tensors of the node to which a given fetch belongs.
 * @param fetch The fetched symbolic tensor.
 * @returns The Array of symbolic tensors output by the node to which `fetch`
 *   belongs.
 */ function getNodeOutputs(fetch) {
    let layerOutputs;
    if (fetch.sourceLayer.inboundNodes.length === 1) {
        layerOutputs = fetch.sourceLayer.output;
    } else {
        let nodeIndex = null;
        for(let i = 0; i < fetch.sourceLayer.inboundNodes.length; ++i){
            for (const outputTensor of fetch.sourceLayer.inboundNodes[i].outputTensors){
                if (outputTensor.id === fetch.id) {
                    nodeIndex = i;
                    break;
                }
            }
        }
        layerOutputs = fetch.sourceLayer.getOutputAt(nodeIndex);
    }
    return layerOutputs;
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZW5naW5lL2V4ZWN1dG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUg7O0dBRUc7QUFFSCxPQUFPLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQVUsSUFBSSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFMUUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVyQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTlDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUUxQzs7R0FFRztBQUNILFNBQVMsdUJBQXVCLENBQUMsR0FBbUIsRUFBRSxHQUFXO0lBQy9ELDZCQUE2QjtJQUM3QixJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBRTtRQUNoRCxnREFBZ0Q7UUFDaEQsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUNELElBQUk7UUFDRiwyQ0FBMkM7UUFDM0MsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3QjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osaURBQWlEO1FBQ2pELE1BQU0sSUFBSSxVQUFVLENBQ2hCLDBCQUEwQixHQUFHLENBQUMsS0FBSyxpQ0FBaUM7WUFDcEUsZUFBZSxHQUFHLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQVVEOzs7R0FHRztBQUNILE1B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RUFBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsY0FBYyxDQUFDLEtBQXFCO0lBRTNDLElBQUksWUFBNkMsQ0FBQztJQUNsRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDL0MsWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0tBQ3pDO1NBQU07UUFDTCxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM5RCxLQUFLLE1BQU0sWUFBWSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDbEQsYUFBYSxFQUFFO2dCQUN2QixJQUFJLFlBQVksQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtvQkFDaEMsU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFDZCxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6RDtJQUNELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEV4ZWN1dG9yOiBFdmFsdWF0ZXMgU3ltYm9saWNUZW5zb3IgYmFzZWQgb24gZmVlZHMuXG4gKi9cblxuaW1wb3J0IHtjYXN0LCBkaXNwb3NlLCBtZW1vcnksIFRlbnNvciwgdXRpbH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuaW1wb3J0IHtWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtLd2FyZ3N9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7THJ1Q2FjaGV9IGZyb20gJy4uL3V0aWxzL2V4ZWN1dG9yX3V0aWxzJztcbmltcG9ydCB7dG9MaXN0fSBmcm9tICcuLi91dGlscy9nZW5lcmljX3V0aWxzJztcblxuaW1wb3J0IHtJbnB1dExheWVyfSBmcm9tICcuL2lucHV0X2xheWVyJztcbmltcG9ydCB7U3ltYm9saWNUZW5zb3J9IGZyb20gJy4vdG9wb2xvZ3knO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayB0aGUgZHR5cGUgYW5kIHNoYXBlIGNvbXBhdGliaWxpdHkgb2YgYSBmZWVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhc3NlcnRGZWVkQ29tcGF0aWJpbGl0eShrZXk6IFN5bWJvbGljVGVuc29yLCB2YWw6IFRlbnNvcik6IFRlbnNvciB7XG4gIC8vIENoZWNrIGR0eXBlIGNvbXBhdGliaWxpdHkuXG4gIGlmIChrZXkuZHR5cGUgPT0gbnVsbCB8fCBrZXkuZHR5cGUgPT09IHZhbC5kdHlwZSkge1xuICAgIC8vICBhLiAgSWYgdHlwZXMgbWF0Y2gsIHJldHVybiB2YWwgdGVuc29yIGFzIGlzLlxuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyAgYi4gQXR0ZW1wdCB0byBjb252ZXJ0IHRvIGV4cGVjdGVkIHR5cGUuXG4gICAgcmV0dXJuIGNhc3QodmFsLCBrZXkuZHR5cGUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgYy4gSWYgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIGhlbHBmdWwgZXJyb3IuXG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgIGBUaGUgZHR5cGUgb2YgdGhlIGZlZWQgKCR7dmFsLmR0eXBlfSkgY2FuIG5vdCBiZSBjYXN0IHRvIHRoZSBkdHlwZSBgICtcbiAgICAgICAgYG9mIHRoZSBrZXkgJyR7a2V5Lm5hbWV9JyAoJHtrZXkuZHR5cGV9KS5gKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgY29uY3JldGUgVGVuc29yIHZhbHVlIGZvciBhIHN5bWJvbGljIHRlbnNvciBhcyB0aGUga2V5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZlZWQge1xuICBrZXk6IFN5bWJvbGljVGVuc29yO1xuICB2YWx1ZTogVGVuc29yO1xufVxuXG4vKipcbiAqIEZlZWREaWN0OiBBIG1hcHBpbmcgZnJvbSB1bmlxdWUgU3ltYm9saWNUZW5zb3JzIHRvIGZlZWQgdmFsdWVzIGZvciB0aGVtLlxuICogQSBmZWVkIHZhbHVlIGlzIGEgY29uY3JldGUgdmFsdWUgcmVwcmVzZW50ZWQgYXMgYW4gYFRlbnNvcmAuXG4gKi9cbmV4cG9ydCBjbGFzcyBGZWVkRGljdCB7XG4gIHByaXZhdGUgaWQyVmFsdWU6IHtbaWQ6IG51bWJlcl06IFRlbnNvcn0gPSB7fTtcbiAgcHJpdmF0ZSBpZDJNYXNrOiB7W2lkOiBudW1iZXJdOiBUZW5zb3J9ID0ge307XG4gIHByaXZhdGUgbmFtZTJJZDoge1tuYW1lOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yLCBvcHRpb25hbGx5IGRvZXMgY29weS1jb25zdHJ1Y3Rpb24uXG4gICAqIEBwYXJhbSBmZWVkcyBBbiBBcnJheSBvZiBgRmVlZGBzLCBvciBhbm90aGVyIGBGZWVkRGljdGAsIGluIHdoaWNoIGNhc2VcbiAgICogICBjb3B5LWNvbnN0cnVjdGlvbiB3aWxsIGJlIHBlcmZvcm1lZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGZlZWRzPzogRmVlZFtdfEZlZWREaWN0KSB7XG4gICAgaWYgKGZlZWRzIGluc3RhbmNlb2YgRmVlZERpY3QpIHtcbiAgICAgIGZvciAoY29uc3QgaWQgaW4gZmVlZHMuaWQyVmFsdWUpIHtcbiAgICAgICAgdGhpcy5pZDJWYWx1ZVtpZF0gPSBmZWVkcy5pZDJWYWx1ZVtpZF07XG4gICAgICAgIGlmIChpZCBpbiBmZWVkcy5pZDJNYXNrKSB7XG4gICAgICAgICAgdGhpcy5pZDJNYXNrW2lkXSA9IGZlZWRzLmlkMk1hc2tbaWRdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmZWVkcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgZmVlZCBvZiBmZWVkcykge1xuICAgICAgICB0aGlzLmFkZChmZWVkLmtleSwgZmVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGtleS12YWx1ZSBwYWlyIHRvIHRoZSBGZWVkRGljdC5cbiAgICpcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IG9mIHRoZSBmZWVkLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSB0ZW5zb3IgZmVlZC5cbiAgICogQHBhcmFtIG1hc2sgVGhlIHZhbHVlIG9mIHRoZSBtYXNrIGZlZWQgKG9wdGlvbmFsKS5cbiAgICogQHJldHVybnMgVGhpcyBgRmVlZERpY3RgLlxuICAgKiBAdGhyb3dzIFZhbHVlRXJyb3I6IElmIHRoZSBrZXkgYFN5bWJvbGljVGVuc29yYCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAgICogICBgRmVlZERpY3RgLlxuICAgKi9cbiAgYWRkKGtleTogU3ltYm9saWNUZW5zb3IsIHZhbHVlOiBUZW5zb3IsIG1hc2s/OiBUZW5zb3IpOiBGZWVkRGljdCB7XG4gICAgaWYgKHRoaXMuaWQyVmFsdWVba2V5LmlkXSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmlkMlZhbHVlW2tleS5pZF0gPSBhc3NlcnRGZWVkQ29tcGF0aWJpbGl0eShrZXksIHZhbHVlKTtcbiAgICAgIHRoaXMubmFtZTJJZFtrZXkubmFtZV0gPSBrZXkuaWQ7XG4gICAgICBpZiAobWFzayAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaWQyTWFza1trZXkuaWRdID0gbWFzaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYER1cGxpY2F0ZSBrZXk6IG5hbWU9JHtrZXkubmFtZX0sIGlkPSR7a2V5LmlkfWApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBGZWVkIHRvIHRoZSBGZWVkRGljdC5cbiAgICogQHBhcmFtIGZlZWQgVGhlIG5ldyBgRmVlZGAgdG8gYWRkLlxuICAgKiBAcmV0dXJucyBUaGlzIGBGZWVkRGljdGAuXG4gICAqL1xuICBhZGRGZWVkKGZlZWQ6IEZlZWQpIHtcbiAgICB0aGlzLmFkZChmZWVkLmtleSwgZmVlZC52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvYmUgd2hldGhlciBhIGtleSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgRmVlZERpY3QuXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGhhc0tleShrZXk6IFN5bWJvbGljVGVuc29yKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWQyVmFsdWVba2V5LmlkXSAhPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIFN5bWJvbGljVGVuc29yIGF2YWlsYWJsZSBpbiB0aGlzIEZlZWREaWN0LlxuICAgKi9cbiAgbmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm5hbWUySWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZmVlZCB2YWx1ZSBmb3IgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5IFRoZSBTeW1ib2xpY1RlbnNvciwgb3IgaXRzIG5hbWUgKGFzIGEgc3RyaW5nKSwgb2Ygd2hpY2ggdGhlXG4gICAqICAgICB2YWx1ZSBpcyBzb3VnaHQuXG4gICAqIEByZXR1cm5zIElmIGBrZXlgIGV4aXN0cywgdGhlIGNvcnJlc3BvbmRpbmcgZmVlZCB2YWx1ZS5cbiAgICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBga2V5YCBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGBGZWVkRGljdGAuXG4gICAqL1xuICBnZXRWYWx1ZShrZXk6IFN5bWJvbGljVGVuc29yfHN0cmluZyk6IFRlbnNvciB7XG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIFN5bWJvbGljVGVuc29yKSB7XG4gICAgICBpZiAodGhpcy5pZDJWYWx1ZVtrZXkuaWRdID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYE5vbmV4aXN0ZW50IGtleTogJHtrZXkubmFtZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkMlZhbHVlW2tleS5pZF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5uYW1lMklkW2tleV07XG4gICAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgRmVlZCBkaWN0IGhhcyBubyBTeW1ib2xpY1RlbnNvciBuYW1lOiAke2tleX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmlkMlZhbHVlW2lkXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBmZWVkIG1hc2sgZm9yIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSBUaGUgU3ltYm9saWNUZW5zb3IsIG9yIGl0cyBuYW1lIChhcyBhIHN0cmluZyksIG9mIHdoaWNoIHRoZVxuICAgKiAgICAgdmFsdWUgaXMgc291Z2h0LlxuICAgKiBAcmV0dXJucyBJZiBga2V5YCBleGlzdHMsIHRoZSBjb3JyZXNwb25kaW5nIGZlZWQgbWFzay5cbiAgICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBga2V5YCBkb2VzIG5vdCBleGlzdCBpbiB0aGlzIGBGZWVkRGljdGAuXG4gICAqL1xuICBnZXRNYXNrKGtleTogU3ltYm9saWNUZW5zb3J8c3RyaW5nKTogVGVuc29yIHtcbiAgICBpZiAoa2V5IGluc3RhbmNlb2YgU3ltYm9saWNUZW5zb3IpIHtcbiAgICAgIGlmICh0aGlzLmlkMlZhbHVlW2tleS5pZF0gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgTm9uZXhpc3RlbnQga2V5OiAke2tleS5uYW1lfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQyTWFza1trZXkuaWRdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMubmFtZTJJZFtrZXldO1xuICAgICAgaWYgKGlkID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoYEZlZWQgZGljdCBoYXMgbm8gU3ltYm9saWNUZW5zb3IgbmFtZTogJHtrZXl9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pZDJNYXNrW2lkXTtcbiAgICB9XG4gIH1cblxuICAvKiogRGlzcG9zZSBhbGwgbWFzayBUZW5zb3JzIGhlbGQgYnkgdGhpcyBvYmplY3QuICovXG4gIGRpc3Bvc2VNYXNrcygpIHtcbiAgICBpZiAodGhpcy5pZDJNYXNrICE9IG51bGwpIHtcbiAgICAgIGRpc3Bvc2UodGhpcy5pZDJNYXNrKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2FjaGUgZm9yIHRvcG9sb2dpY2FsbHkgc29ydGVkIFN5bWJvbGljVGVuc29ycyBmb3IgZ2l2ZW4gZXhlY3V0aW9uXG4vLyB0YXJnZXRzIChpLmUuLCBmZXRjaGVzKS5cbmV4cG9ydCBjb25zdCBjYWNoZWRTb3J0ZWQ6IExydUNhY2hlPFN5bWJvbGljVGVuc29yW10+ID1cbiAgICBuZXcgTHJ1Q2FjaGU8U3ltYm9saWNUZW5zb3JbXT4oKTtcblxuLy8gQ2FjaGUgZm9yIHJlY2lwaWVudCBjb3VudCBtYXBzIGZvciBnaXZlbiBleGVjdXRpb24gdGFyZ2V0cyAoaS5lLiwgZmV0Y2hlcykuXG5leHBvcnQgY29uc3QgY2FjaGVkUmVjaXBpZW50Q291bnRzOiBMcnVDYWNoZTxSZWNpcGllbnRDb3VudHM+ID1cbiAgICBuZXcgTHJ1Q2FjaGU8UmVjaXBpZW50Q291bnRzPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FjaGVNYXhFbnRyaWVzKG1heEVudHJpZXM6IG51bWJlcikge1xuICBpZiAoY2FjaGVkU29ydGVkICE9IG51bGwpIHtcbiAgICBjYWNoZWRTb3J0ZWQuc2V0TWF4RW50cmllcyhtYXhFbnRyaWVzKTtcbiAgfVxuICBpZiAoY2FjaGVkUmVjaXBpZW50Q291bnRzICE9IG51bGwpIHtcbiAgICBjYWNoZWRSZWNpcGllbnRDb3VudHMuc2V0TWF4RW50cmllcyhtYXhFbnRyaWVzKTtcbiAgfVxufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIG9wdGlvbmFsIG9iamVjdCB1c2VkIGZvciBwcm9iaW5nIHRoZSBtZW1vcnlcbiAqIHVzYWdlIGFuZCBvdGhlciBzdGF0aXN0aWNzIGR1cmluZyBleGVjdXRpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0aW9uUHJvYmUge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgdGVuc29ycyB0aGF0IGV4aXN0IGR1cmluZyBhbGwgc3RlcHMgb2YgdGhlXG4gICAqIGV4ZWN1dGlvbi4gVGVuc29yIGNvdW50cyBhcmUgbWVhc3VyZWQgYXQgdGhlIGJlZ2lubmluZyBvZiBldmVyeVxuICAgKiBzdGVwLlxuICAgKi9cbiAgbWF4TnVtVGVuc29ycz86IG51bWJlcjtcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2YgdGVuc29ycyB0aGF0IGV4aXN0IGR1cmluZyBhbGwgc3RlcHMgb2YgdGhlXG4gICAqIGV4ZWN1dGlvbi4gVGVuc29yIGNvdW50cyBhcmUgbWVhc3VyZWQgYXQgdGhlIGJlZ2lubmluZyBvZiBldmVyeVxuICAgKiBzdGVwLlxuICAgKi9cbiAgbWluTnVtVGVuc29ycz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgU3ltYm9saWNUZW5zb3IgYnkgdXNpbmcgY29uY3JldGUgZmVlZCB2YWx1ZXMuXG4gKlxuICogQSBgU3ltYm9saWNUZW5zb3JgIG9iamVjdCBpcyBhIG5vZGUgaW4gYSBjb21wdXRhdGlvbiBncmFwaCBvZiBURi5qc1xuICogTGF5ZXJzLiBUaGUgb2JqZWN0IGlzIGJhY2tlZCBieSBhIHNvdXJjZSBsYXllciBhbmQgaW5wdXRcbiAqIGBTeW1ib2xpY1RlbnNvcmBzIHRvIHRoZSBzb3VyY2UgbGF5ZXIuIFRoaXMgbWV0aG9kIGV2YWx1YXRlc1xuICogdGhlIGBjYWxsKClgIG1ldGhvZCBvZiB0aGUgc291cmNlIGxheWVyLCB1c2luZyBjb25jcmV0ZSB2YWx1ZXMgb2YgdGhlXG4gKiBpbnB1dHMgb2J0YWluZWQgZnJvbSBlaXRoZXJcbiAqICogYGZlZWREaWN0YCwgaWYgdGhlIGlucHV0IGtleSBleGlzdHMgaW4gYGZlZWREaWN0YCwgb3IgZWxzZSxcbiAqICogYSByZWN1cnNpdmUgY2FsbCB0byBgZXhlY3V0ZSgpYCBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHg6IFRoZSBgU3ltYm9saWNUZW5zb3JgIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0gZmVlZERpY3Q6IFRoZSBmZWVkIHZhbHVlcywgYXMgYmFzZSBjb25kaXRpb24gb2YgdGhlIHJlY3Vyc2lvbi5cbiAqICAgZXhlY3V0aW9uLlxuICogQHBhcmFtIGt3YXJnczogT3B0aW9uYWwga2V5d29yZCBhcmd1bWVudHMuXG4gKiBAcGFyYW0gcHJvYmU6IEEgcHJvYmUgb2JqZWN0IChvZiBpbnRlcmZhY2UgYEV4ZWN1dGlvblByb2JlYCkgdXNlZCBmb3JcbiAqICAgdGVzdGluZyBtZW1vcnkgZm9vdHByaW50IG9mIGBleGVjdXRlYCBjYWxscy5cbiAqIEByZXR1cm5zIFJlc3VsdCBvZiB0aGUgZXhlY3V0aW9uLlxuICogQHRocm93cyBWYWx1ZUVycm9yOiBJZiBhbnkgYFN5bWJvbGljVGVuc29yYHMgZnJvbSBgSW5wdXRMYXllcmBzXG4gKiAgIGVuY291bnRlcmVkIGR1cmluZyB0aGUgZXhlY3V0aW9uIGxhY2tzIGEgZmVlZCB2YWx1ZSBpbiBgZmVlZERpY3RgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY3V0ZShcbiAgICBmZXRjaGVzOiBTeW1ib2xpY1RlbnNvcnxTeW1ib2xpY1RlbnNvcltdLCBmZWVkRGljdDogRmVlZERpY3QsXG4gICAga3dhcmdzPzogS3dhcmdzLCBwcm9iZT86IEV4ZWN1dGlvblByb2JlKTogVGVuc29yfFxuICAgIFRlbnNvcltdfFtUZW5zb3IgfCBUZW5zb3JbXV0ge1xuICBjb25zdCB0cmFpbmluZzogYm9vbGVhbiA9IGt3YXJncyA9PSBudWxsID8gZmFsc2UgOiBrd2FyZ3NbJ3RyYWluaW5nJ107XG5cbiAgY29uc3QgYXJyYXlGZXRjaGVzID0gQXJyYXkuaXNBcnJheShmZXRjaGVzKTtcbiAgY29uc3QgZmV0Y2hBcnJheTogU3ltYm9saWNUZW5zb3JbXSA9XG4gICAgICBhcnJheUZldGNoZXMgPyBmZXRjaGVzIDogW2ZldGNoZXNdO1xuXG4gIGNvbnN0IG91dHB1dE5hbWVzID0gZmV0Y2hBcnJheS5tYXAodCA9PiB0Lm5hbWUpO1xuICBjb25zdCBmaW5hbE91dHB1dHM6IFRlbnNvcltdID0gW107XG4gIGNvbnN0IGZlZWROYW1lcyA9IGZlZWREaWN0Lm5hbWVzKCk7XG4gIGZvciAoY29uc3Qgb3V0cHV0TmFtZSBvZiBvdXRwdXROYW1lcykge1xuICAgIGlmIChmZWVkTmFtZXMuaW5kZXhPZihvdXRwdXROYW1lKSAhPT0gLTEpIHtcbiAgICAgIGZpbmFsT3V0cHV0cy5wdXNoKGZlZWREaWN0LmdldFZhbHVlKG91dHB1dE5hbWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluYWxPdXRwdXRzLnB1c2gobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2JlICE9IG51bGwpIHtcbiAgICAvLyBGb3Igb3B0aW9uYWwgcHJvYmluZyBvZiBtZW1vcnkgZm9vdHByaW50IGR1cmluZyBleGVjdXRpb24uXG4gICAgcHJvYmUubWF4TnVtVGVuc29ycyA9IC1JbmZpbml0eTtcbiAgICBwcm9iZS5taW5OdW1UZW5zb3JzID0gSW5maW5pdHk7XG4gIH1cblxuICAvLyBDaGVjayBjYWNoZS5cbiAgY29uc3QgZmV0Y2hBbmRGZWVkS2V5ID1cbiAgICAgIG91dHB1dE5hbWVzLmpvaW4oJywnKSArICd8JyArIGZlZWREaWN0Lm5hbWVzKCkuc29ydCgpLmpvaW4oJywnKTtcbiAgbGV0IHNvcnRlZDogU3ltYm9saWNUZW5zb3JbXSA9IGNhY2hlZFNvcnRlZC5nZXQoZmV0Y2hBbmRGZWVkS2V5KTtcbiAgbGV0IHJlY2lwaWVudENvdW50czoge1tmZXRjaE5hbWU6IHN0cmluZ106IG51bWJlcn07XG4gIGlmIChzb3J0ZWQgPT0gbnVsbCkge1xuICAgIC8vIENhY2hlIGRvZXNuJ3QgY29udGFpbiB0aGUgZGVzaXJlZCBjb21iaW5hdGlvbiBvZiBmZXRjaGVzLiBDb21wdXRlXG4gICAgLy8gdG9wb2xvZ2ljYWwgc29ydCBmb3IgdGhlIGNvbWJpbmF0aW9uIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICBjb25zdCBvdXQgPSBnZXRUb3BvbG9naWNhbFNvcnRBbmRSZWNpcGllbnRDb3VudHMoZmV0Y2hBcnJheSwgZmVlZERpY3QpO1xuICAgIHNvcnRlZCA9IG91dC5zb3J0ZWQ7XG4gICAgcmVjaXBpZW50Q291bnRzID0gb3V0LnJlY2lwaWVudENvdW50cztcblxuICAgIC8vIFN0b3JlIHJlc3VsdHMgaW4gY2FjaGUgZm9yIGZ1dHVyZSB1c2UuXG4gICAgY2FjaGVkU29ydGVkLnB1dChmZXRjaEFuZEZlZWRLZXksIHNvcnRlZCk7XG4gICAgY2FjaGVkUmVjaXBpZW50Q291bnRzLnB1dChmZXRjaEFuZEZlZWRLZXksIHJlY2lwaWVudENvdW50cyk7XG4gIH1cbiAgcmVjaXBpZW50Q291bnRzID0ge307XG4gIGlmICghdHJhaW5pbmcpIHtcbiAgICBPYmplY3QuYXNzaWduKHJlY2lwaWVudENvdW50cywgY2FjaGVkUmVjaXBpZW50Q291bnRzLmdldChmZXRjaEFuZEZlZWRLZXkpKTtcbiAgfVxuXG4gIGNvbnN0IGludGVybmFsRmVlZERpY3QgPSBuZXcgRmVlZERpY3QoZmVlZERpY3QpO1xuXG4gIC8vIFN0YXJ0IGl0ZXJhdGl2ZSBleGVjdXRpb24gb24gdGhlIHRvcG9sb2dpY2FsbHktc29ydGVkIFN5bWJvbGljVGVuc29ycy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAocHJvYmUgIT0gbnVsbCkge1xuICAgICAgLy8gRm9yIG9wdGlvbmFsIHByb2Jpbmcgb2YgbWVtb3J5IHVzYWdlIGR1cmluZyBleGVjdXRpb24uXG4gICAgICBjb25zdCBudW1UZW5zb3JzID0gbWVtb3J5KCkubnVtVGVuc29ycztcbiAgICAgIGlmIChudW1UZW5zb3JzID4gcHJvYmUubWF4TnVtVGVuc29ycykge1xuICAgICAgICBwcm9iZS5tYXhOdW1UZW5zb3JzID0gbnVtVGVuc29ycztcbiAgICAgIH1cbiAgICAgIGlmIChudW1UZW5zb3JzIDwgcHJvYmUubWluTnVtVGVuc29ycykge1xuICAgICAgICBwcm9iZS5taW5OdW1UZW5zb3JzID0gbnVtVGVuc29ycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzeW1ib2xpYyA9IHNvcnRlZFtpXTtcbiAgICBjb25zdCBzcmNMYXllciA9IHN5bWJvbGljLnNvdXJjZUxheWVyO1xuICAgIGlmIChzcmNMYXllciBpbnN0YW5jZW9mIElucHV0TGF5ZXIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dFZhbHVlczogVGVuc29yW10gPSBbXTtcbiAgICBjb25zdCBpbnB1dE1hc2tzOiBUZW5zb3JbXSA9IFtdO1xuICAgIGNvbnN0IHRlbnNvcnNUb0Rpc3Bvc2U6IFRlbnNvcltdID0gW107XG5cbiAgICBsZXQgbWFza0V4aXN0cyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2Ygc3ltYm9saWMuaW5wdXRzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGludGVybmFsRmVlZERpY3QuZ2V0VmFsdWUoaW5wdXQpO1xuICAgICAgY29uc3QgbWFzayA9IGludGVybmFsRmVlZERpY3QuZ2V0TWFzayhpbnB1dCk7XG4gICAgICBpbnB1dFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIGlucHV0TWFza3MucHVzaChtYXNrKTtcbiAgICAgIGlmIChtYXNrICE9IG51bGwpIHtcbiAgICAgICAgbWFza0V4aXN0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRyYWluaW5nKSB7XG4gICAgICAgIHJlY2lwaWVudENvdW50c1tpbnB1dC5uYW1lXS0tO1xuICAgICAgICBpZiAocmVjaXBpZW50Q291bnRzW2lucHV0Lm5hbWVdID09PSAwICYmICFmZWVkRGljdC5oYXNLZXkoaW5wdXQpICYmXG4gICAgICAgICAgICBvdXRwdXROYW1lcy5pbmRleE9mKGlucHV0Lm5hbWUpID09PSAtMSAmJiAhdmFsdWUuaXNEaXNwb3NlZCAmJlxuICAgICAgICAgICAgaW5wdXQuc291cmNlTGF5ZXIuc3RhdGVmdWwgIT09IHRydWUpIHtcbiAgICAgICAgICB0ZW5zb3JzVG9EaXNwb3NlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hc2tFeGlzdHMpIHtcbiAgICAgIGt3YXJncyA9IGt3YXJncyB8fCB7fTtcbiAgICAgIGt3YXJnc1snbWFzayddID0gaW5wdXRNYXNrc1swXTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0VGVuc29ycyA9XG4gICAgICAgIHRvTGlzdChzcmNMYXllci5hcHBseShpbnB1dFZhbHVlcywga3dhcmdzKSkgYXMgVGVuc29yW107XG4gICAgbGV0IG91dHB1dE1hc2s6IFRlbnNvcnxUZW5zb3JbXSA9IG51bGw7XG4gICAgaWYgKHNyY0xheWVyLnN1cHBvcnRzTWFza2luZykge1xuICAgICAgb3V0cHV0TWFzayA9IHNyY0xheWVyLmNvbXB1dGVNYXNrKGlucHV0VmFsdWVzLCBpbnB1dE1hc2tzKTtcbiAgICB9XG4gICAgY29uc3QgbGF5ZXJPdXRwdXRzID0gZ2V0Tm9kZU91dHB1dHMoc3ltYm9saWMpO1xuICAgIGNvbnN0IG91dHB1dFN5bWJvbGljVGVuc29ycyA9XG4gICAgICAgIEFycmF5LmlzQXJyYXkobGF5ZXJPdXRwdXRzKSA/IGxheWVyT3V0cHV0cyA6IFtsYXllck91dHB1dHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0U3ltYm9saWNUZW5zb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoIWludGVybmFsRmVlZERpY3QuaGFzS2V5KG91dHB1dFN5bWJvbGljVGVuc29yc1tpXSkpIHtcbiAgICAgICAgaW50ZXJuYWxGZWVkRGljdC5hZGQoXG4gICAgICAgICAgICBvdXRwdXRTeW1ib2xpY1RlbnNvcnNbaV0sIG91dHB1dFRlbnNvcnNbaV0sXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KG91dHB1dE1hc2spID8gb3V0cHV0TWFza1swXSA6IG91dHB1dE1hc2spO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5kZXggPSBvdXRwdXROYW1lcy5pbmRleE9mKG91dHB1dFN5bWJvbGljVGVuc29yc1tpXS5uYW1lKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZmluYWxPdXRwdXRzW2luZGV4XSA9IG91dHB1dFRlbnNvcnNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0cmFpbmluZykge1xuICAgICAgLy8gQ2xlYW4gdXAgVGVuc29ycyB0aGF0IGFyZSBubyBsb25nZXIgbmVlZGVkLlxuICAgICAgZGlzcG9zZSh0ZW5zb3JzVG9EaXNwb3NlKTtcbiAgICB9XG4gIH1cbiAgLy8gTk9URShjYWlzKTogVW5saWtlIGludGVybWVkaWF0ZSB0ZW5zb3JzLCB3ZSBkb24ndCBkaXNjYXJkIG1hc2tcbiAgLy8gdGVuc29ycyBhcyB3ZSBnbywgYmVjYXVzZSB0aGVzZSB0ZW5zb3JzIGFyZSBzb21ldGltZXMgcGFzc2VkIG92ZXIgYVxuICAvLyBzZXJpZXMgb2YgbXV0bGlwbGUgbGF5ZXJzLCBpLmUuLCBub3Qgb2JleWluZyB0aGUgaW1tZWRpYXRlIGlucHV0XG4gIC8vIHJlbGF0aW9ucyBpbiB0aGUgZ3JhcGguIElmIHRoaXMgYmVjb21lcyBhIG1lbW9yeS11c2FnZSBjb25jZXJuLFxuICAvLyB3ZSBjYW4gaW1wcm92ZSB0aGlzIGluIHRoZSBmdXR1cmUuXG4gIGludGVybmFsRmVlZERpY3QuZGlzcG9zZU1hc2tzKCk7XG5cbiAgcmV0dXJuIGFycmF5RmV0Y2hlcyA/IGZpbmFsT3V0cHV0cyA6IGZpbmFsT3V0cHV0c1swXTtcbn1cblxudHlwZSBSZWNpcGllbnRDb3VudHMgPSB7XG4gIFtmZXRjaE5hbWU6IHN0cmluZ106IG51bWJlclxufTtcblxuZXhwb3J0IHR5cGUgUmVjaXBpZW50TWFwID0ge1xuICBbZmV0Y2hOYW1lOiBzdHJpbmddOiBTZXQ8c3RyaW5nPjtcbn07XG5cbi8qKlxuICogU29ydCB0aGUgYFN5bWJvbGljVGVuc29yYHMgdG9wb2xvZ2ljYWxseSwgZm9yIGFuIGFycmF5IG9mIGZldGNoZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBjYWxscyBnZXRUb3BvbG9naWNhbFNvcnRBbmRSZWNpcGllbnRDb3VudHNGb3JPbmVGZXRjaCBhbmRcbiAqIG1lcmdlcyB0aGVpciByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSBmZXRjaCBUaGUgYXJyYXkgb2YgZmV0Y2hlcyByZXF1ZXN0ZWQuIE11c3QgYmUgYSBub24tZW1wdHkgYXJyYXkuXG4gKiBAcGFyYW0gZmVlZERpY3QgVGhlIGRpY3Rpb25hcnkgb2YgZmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHNvcnRlZDogVG9wb2xvZ2ljYWxseS1zb3J0ZWQgYXJyYXkgb2YgU3ltYm9saWNUZW5zb3JzLlxuICogICByZWNpcGllbnRDb3VudHM6IFJlY2lwaWVudCBjb3VudHMgZm9yIGFsbCBTeW1ib2xpY1RlbnNvcnMgaW4gYHNvcnRlZGAuXG4gKi9cbmZ1bmN0aW9uIGdldFRvcG9sb2dpY2FsU29ydEFuZFJlY2lwaWVudENvdW50cyhcbiAgICBmZXRjaGVzOiBTeW1ib2xpY1RlbnNvcltdLCBmZWVkRGljdDogRmVlZERpY3QpOlxuICAgIHtzb3J0ZWQ6IFN5bWJvbGljVGVuc29yW10sIHJlY2lwaWVudENvdW50czogUmVjaXBpZW50Q291bnRzfSB7XG4gIHV0aWwuYXNzZXJ0KFxuICAgICAgZmV0Y2hlcyAhPSBudWxsICYmIGZldGNoZXMubGVuZ3RoID4gMCxcbiAgICAgICgpID0+IGBFeHBlY3RlZCBhdCBsZWFzdCBvbmUgZmV0Y2gsIGdvdCBub25lYCk7XG5cbiAgbGV0IGZpbmFsU29ydGVkOiBTeW1ib2xpY1RlbnNvcltdID0gW107XG4gIGxldCBmaW5hbFJlY2lwaWVudE1hcDogUmVjaXBpZW50TWFwID0ge307XG4gIGlmIChmZXRjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIFNwZWNpYWwtY2FzaW5nIDEgZmV0Y2ggZm9yIGVmZmljaWVuY3kuXG4gICAgY29uc3Qgb3V0ID1cbiAgICAgICAgZ2V0VG9wb2xvZ2ljYWxTb3J0QW5kUmVjaXBpZW50Q291bnRzRm9yT25lRmV0Y2goZmV0Y2hlc1swXSwgZmVlZERpY3QpO1xuICAgIGZpbmFsU29ydGVkID0gb3V0LnNvcnRlZDtcbiAgICBmaW5hbFJlY2lwaWVudE1hcCA9IG91dC5yZWNpcGllbnRNYXA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgZmV0Y2ggb2YgZmV0Y2hlcykge1xuICAgICAgY29uc3Qge3NvcnRlZCwgcmVjaXBpZW50TWFwfSA9XG4gICAgICAgICAgZ2V0VG9wb2xvZ2ljYWxTb3J0QW5kUmVjaXBpZW50Q291bnRzRm9yT25lRmV0Y2goZmV0Y2gsIGZlZWREaWN0KTtcblxuICAgICAgLy8gTWVyZ2Ugc29ydGVkIFN5bWJvbGljVGVuc29yIEFycmF5cy5cbiAgICAgIGZvciAoY29uc3Qgc3ltYm9saWNUZW5zb3Igb2Ygc29ydGVkKSB7XG4gICAgICAgIGlmICghdmlzaXRlZC5oYXMoc3ltYm9saWNUZW5zb3IubmFtZSkpIHtcbiAgICAgICAgICBmaW5hbFNvcnRlZC5wdXNoKHN5bWJvbGljVGVuc29yKTtcbiAgICAgICAgICB2aXNpdGVkLmFkZChzeW1ib2xpY1RlbnNvci5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSByZWNpcGllbnQgbWFwcy5cbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiByZWNpcGllbnRNYXApIHtcbiAgICAgICAgaWYgKGZpbmFsUmVjaXBpZW50TWFwW25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICBmaW5hbFJlY2lwaWVudE1hcFtuYW1lXSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICB9XG4gICAgICAgIHJlY2lwaWVudE1hcFtuYW1lXS5mb3JFYWNoKFxuICAgICAgICAgICAgcmVjaXBpZW50ID0+IGZpbmFsUmVjaXBpZW50TWFwW25hbWVdLmFkZChyZWNpcGllbnQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzb3J0ZWQ6IGZpbmFsU29ydGVkLFxuICAgIHJlY2lwaWVudENvdW50czogcmVjaXBpZW50TWFwMkNvdW50cyhmaW5hbFJlY2lwaWVudE1hcClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVjaXBpZW50TWFwMkNvdW50cyhyZWNpcGllbnRNYXA6IFJlY2lwaWVudE1hcCk6IFJlY2lwaWVudENvdW50cyB7XG4gIGNvbnN0IHJlY2lwaWVudENvdW50czogUmVjaXBpZW50Q291bnRzID0ge307XG4gIGZvciAoY29uc3QgbmFtZSBpbiByZWNpcGllbnRNYXApIHtcbiAgICByZWNpcGllbnRDb3VudHNbbmFtZV0gPSByZWNpcGllbnRNYXBbbmFtZV0uc2l6ZTtcbiAgfVxuICByZXR1cm4gcmVjaXBpZW50Q291bnRzO1xufVxuXG4vKipcbiAqIFNvcnQgdGhlIGBTeW1ib2xpY1RlbnNvcmBzIHRvcG9sb2dpY2FsbHksIGZvciBhIHNpbmdsZSBmZXRjaC5cbiAqXG4gKiBUaGlzIGhlbHBlciBmdW5jdGlvbiBwcm9jZXNzZXMgdGhlIHVwc3RyZWFtIFN5bWJvbGljVGVuc29ycyBvZiBhIHNpbmdsZVxuICogZmV0Y2guXG4gKlxuICogQHBhcmFtIGZldGNoIFRoZSBzaW5nbGUgZmV0Y2ggcmVxdWVzdGVkLlxuICogQHBhcmFtIGZlZWREaWN0IFRoZSBkaWN0aW9uYXJ5IG9mIGZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyBzb3J0ZWQ6IFRvcG9sb2dpY2FsbHktc29ydGVkIGFycmF5IG9mIFN5bWJvbGljVGVuc29ycy5cbiAqICAgcmVjaXBpZW50TWFwOiBSZWNpcGllbnQgbmFtZXMgZm9yIGFsbCBTeW1ib2xpY1RlbnNvcnMgaW4gYHNvcnRlZGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BvbG9naWNhbFNvcnRBbmRSZWNpcGllbnRDb3VudHNGb3JPbmVGZXRjaChcbiAgICBmZXRjaDogU3ltYm9saWNUZW5zb3IsIGZlZWREaWN0OiBGZWVkRGljdCk6XG4gICAge3NvcnRlZDogU3ltYm9saWNUZW5zb3JbXSwgcmVjaXBpZW50TWFwOiBSZWNpcGllbnRNYXB9IHtcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBzb3J0ZWQ6IFN5bWJvbGljVGVuc29yW10gPSBbXTtcbiAgY29uc3QgcmVjaXBpZW50TWFwOiBSZWNpcGllbnRNYXAgPSB7fTtcblxuICAvLyBQdXQga2V5cyBvZiB0aGUgZmVlZERpY3QgaW50byB2aXNpdGVkIGZpcnN0LCBzbyB0aGV5IGRvbid0IGhhdmUgdG8gYmVcbiAgLy8gd2Fsa2VkLiBUaGlzIGlzIG5lZWRlZCBpbiBjYXNlIHdoZXJlIHRoZXJlIGFyZSBmZWVkcyBmb3IgaW50ZXJtZWRpYXRlXG4gIC8vIFN5bWJvbGljVGVuc29ycyBvZiB0aGUgZ3JhcGguXG4gIGZvciAoY29uc3Qga2V5IG9mIGZlZWREaWN0Lm5hbWVzKCkpIHtcbiAgICB2aXNpdGVkLmFkZChrZXkpO1xuICB9XG5cbiAgY29uc3Qgc3RhY2s6IFN5bWJvbGljVGVuc29yW10gPSBbXTtcbiAgY29uc3QgbWFya3M6IG51bWJlcltdID0gW107XG5cbiAgLy8gSW5pdGlhbCBwb3B1bGF0aW9uIG9mIHN0YWNrIGFuZCBtYXJrcy5cbiAgc3RhY2sucHVzaChmZXRjaCk7XG5cbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB0b3AgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICBpZiAodmlzaXRlZC5oYXModG9wLm5hbWUpKSB7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCB0b3BJc01hcmtlZCA9IG1hcmtzW21hcmtzLmxlbmd0aCAtIDFdID09PSBzdGFjay5sZW5ndGggLSAxO1xuICAgIGlmICh0b3AuaW5wdXRzLmxlbmd0aCA9PT0gMCB8fCB0b3BJc01hcmtlZCkge1xuICAgICAgLy8gSW5wdXQgU3ltYm9saWNUZW5zb3Igb3IgYWxsIGNoaWxkcmVuIGhhdmUgYmVlbiB2aXNpdGVkLlxuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICBzb3J0ZWQucHVzaCh0b3ApO1xuICAgICAgdmlzaXRlZC5hZGQodG9wLm5hbWUpO1xuICAgICAgaWYgKHRvcElzTWFya2VkKSB7XG4gICAgICAgIG1hcmtzLnBvcCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBIG5vbi1pbnB1dCBTeW1ib2xpY1RlbnNvciB3aG9zZSB1cHN0cmVhbSBTeW1ib2xpY1RlbnNvcnMgaGF2ZW4ndFxuICAgICAgLy8gYmVlbiB2aXNpdGVkIHlldC4gUHVzaCB0aGVtIG9udG8gdGhlIHN0YWNrLlxuICAgICAgbWFya3MucHVzaChzdGFjay5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdG9wLmlucHV0cykge1xuICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIHJlY2lwaWVudCBjb3VudC4gTm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gaGFwcGVuXG4gICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgU3ltYm9saWNUZW5zb3IgaGFzIGJlZW4gdmlzaXRlZCBiZWZvcmUuXG4gICAgICAgIGlmIChyZWNpcGllbnRNYXBbaW5wdXQubmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHJlY2lwaWVudE1hcFtpbnB1dC5uYW1lXSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgICAgICB9XG4gICAgICAgIHJlY2lwaWVudE1hcFtpbnB1dC5uYW1lXS5hZGQodG9wLm5hbWUpO1xuXG4gICAgICAgIGlmICh2aXNpdGVkLmhhcyhpbnB1dC5uYW1lKSkge1xuICAgICAgICAgIGNvbnRpbnVlOyAgLy8gQXZvaWQgcmVwZWF0ZWQgdmlzaXRzIHRvIHRoZSBzYW1lIFN5bWJvbGljVGVuc29yLlxuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2goaW5wdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge3NvcnRlZCwgcmVjaXBpZW50TWFwfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHN5bWJvbGljIG91dHB1dCB0ZW5zb3JzIG9mIHRoZSBub2RlIHRvIHdoaWNoIGEgZ2l2ZW4gZmV0Y2ggYmVsb25ncy5cbiAqIEBwYXJhbSBmZXRjaCBUaGUgZmV0Y2hlZCBzeW1ib2xpYyB0ZW5zb3IuXG4gKiBAcmV0dXJucyBUaGUgQXJyYXkgb2Ygc3ltYm9saWMgdGVuc29ycyBvdXRwdXQgYnkgdGhlIG5vZGUgdG8gd2hpY2ggYGZldGNoYFxuICogICBiZWxvbmdzLlxuICovXG5mdW5jdGlvbiBnZXROb2RlT3V0cHV0cyhmZXRjaDogU3ltYm9saWNUZW5zb3IpOiBTeW1ib2xpY1RlbnNvcnxcbiAgICBTeW1ib2xpY1RlbnNvcltdIHtcbiAgbGV0IGxheWVyT3V0cHV0czogU3ltYm9saWNUZW5zb3J8U3ltYm9saWNUZW5zb3JbXTtcbiAgaWYgKGZldGNoLnNvdXJjZUxheWVyLmluYm91bmROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICBsYXllck91dHB1dHMgPSBmZXRjaC5zb3VyY2VMYXllci5vdXRwdXQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG5vZGVJbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZldGNoLnNvdXJjZUxheWVyLmluYm91bmROb2Rlcy5sZW5ndGg7ICsraSkge1xuICAgICAgZm9yIChjb25zdCBvdXRwdXRUZW5zb3Igb2YgZmV0Y2guc291cmNlTGF5ZXIuaW5ib3VuZE5vZGVzW2ldXG4gICAgICAgICAgICAgICAub3V0cHV0VGVuc29ycykge1xuICAgICAgICBpZiAob3V0cHV0VGVuc29yLmlkID09PSBmZXRjaC5pZCkge1xuICAgICAgICAgIG5vZGVJbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbGF5ZXJPdXRwdXRzID0gZmV0Y2guc291cmNlTGF5ZXIuZ2V0T3V0cHV0QXQobm9kZUluZGV4KTtcbiAgfVxuICByZXR1cm4gbGF5ZXJPdXRwdXRzO1xufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/container.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original source: keras/engine/topology.py */ __turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/serialization_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/types_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/variables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/executor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/input_layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
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
// get weights key from tensor map in order to check if it is from keras v3.
// e.g. dense/0
const isKerasSavedModelFormat = (weights)=>{
    const keys = Object.keys(weights);
    if (keys.length === 0) {
        return false;
    }
    const key = keys[0].split('/');
    return !isNaN(parseInt(key[key.length - 1], 10));
};
class Container extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        // No args passed to super's constructor.
        super({});
        this.containerNodes = new Set();
        this.name = args.name;
        if (this.name == null) {
            const prefix = this.getClassName().toLowerCase();
            this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUid"])(prefix);
        }
        this.supportsMasking = false;
        this.trainable_ = true;
        // TODO(michaelterry): Initialize perInputLosses/Updates here.
        // Container-specific properties.
        if (Array.isArray(args.inputs)) {
            this.inputs = args.inputs.slice();
        } else {
            this.inputs = [
                args.inputs
            ];
        }
        if (Array.isArray(args.outputs)) {
            this.outputs = args.outputs.slice();
        } else {
            this.outputs = [
                args.outputs
            ];
        }
        // Check for redundancy in inputs.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unique"](this.inputs).length !== this.inputs.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('The list of inputs passed to the model is ' + 'redundant. All inputs should only appear once. Found: ' + `${this.inputs.map((x)=>x.name)}`);
        }
        // Check for redundancy in outputs.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unique"](this.outputs).length !== this.outputs.length) {
            console.warn('The list of outputs passed to the model is redundant. ' + 'All outputs should only appear once. Found: ' + `${this.outputs.map((x)=>x.name)}`);
        }
        /*
          List of initial layers (1 to 1 mapping with this.inputs, hence the same
          layer might appear twice)
        */ this.inputLayers = [];
        this.inputLayersNodeIndices = [];
        this.inputLayersTensorIndices = [];
        /*
          List of layers (1 to 1 mapping with this.outputs, hence the same layer
          might appear twice)
        */ this.outputLayers = [];
        this.outputLayersNodeIndices = [];
        this.outputLayersTensorIndices = [];
        /*
          All layers in order of horizontal graph traversal. Entries are unique.
          Includes input and output layers.
        */ this.layers = [];
        /*
          References to container layers that were constructed internally. We need
          these to properly dispose of tensors from nested containers.
        */ this.internalContainerRefs = [];
        // TODO(michaelterry): Determine if caching still needed with eager
        // backend.
        /*
          This is for performance optimization when calling the Container on new
          inputs. Every time the Container is called on a set on input tensors,
          we compute the output tensors, output masks and output shapes in one pass,
          then cache them here. When one of these outputs is queried later,
          we retrieve it from there instead of recomputing it.
        */ // this.outputTensorCache = {};
        // this.outputShapeCache = {};
        // Build this.outputLayers:
        for (const x of this.outputs){
            const layer = x.sourceLayer;
            const nodeIndex = x.nodeIndex;
            const tensorIndex = x.tensorIndex;
            this.outputLayers.push(layer);
            this.outputLayersNodeIndices.push(nodeIndex);
            this.outputLayersTensorIndices.push(tensorIndex);
        }
        // TODO(michaelterry): Add output mask cache code.
        // Build this.inputLayers:
        for (const x of this.inputs){
            const layer = x.sourceLayer;
            const nodeIndex = x.nodeIndex;
            const tensorIndex = x.tensorIndex;
            /*
              It's supposed to be an input layer, so only one node
              and one tensor output.
            */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](nodeIndex === 0, 'input layer has >1 nodes');
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](tensorIndex === 0, 'input layer has >1 tensors');
            this.inputLayers.push(layer);
            this.inputLayersNodeIndices.push(nodeIndex);
            this.inputLayersTensorIndices.push(tensorIndex);
        }
        // Build this.inputNames and this.outputNames.
        this.inputNames = [];
        this.outputNames = [];
        this.feedInputShapes = [];
        this.feedInputNames = [];
        this.feedOutputNames = [];
        for(let i = 0; i < this.inputLayers.length; i++){
            const layer = this.inputLayers[i];
            // Check that layer is an InputLayer.
            if (!(layer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$input_layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputLayer"])) {
                throw new TypeError('Input layers to a LayersModel must be InputLayer objects. ' + `Received inputs: ${args.inputs}. ` + `Input ${i} (0-based) originates ` + `from layer type ${layer.getClassName()}.`);
            }
            this.inputNames.push(layer.name);
            this.feedInputShapes.push(layer.batchInputShape);
            this.feedInputNames.push(layer.name);
        }
        for (const layer of this.outputLayers){
            this.outputNames.push(layer.name);
        }
        this.internalInputShapes = this.inputs.map((x)=>x.shape);
        this.internalOutputShapes = this.outputs.map((x)=>x.shape);
        /*
          Container_nodes: set of nodes included in the graph (not all nodes
          included in the layers are relevant to the current graph).
        */ // ids of all nodes relevant to the Container:
        const nodesDepths = {};
        // To recover nodes from their ID.
        const nodeIDToNode = {};
        const layersDepths = {};
        // To layers from their ID.
        const layerIDToLayer = {};
        const layerIndices = {};
        const nodesInDecreasingDepth = [];
        /**
         * Builds a map of the graph of layers.
         *
         * This recursively updates the map `layerIndices`,
         * the list `nodesInDecreasingDepth` and the set `containerNodes`.
         *
         * @param tensor Some tensor in a graph.
         * @param finishedNodes Set of nodes whose subgraphs have been traversed
         *         completely. Useful to prevent duplicated work.
         * @param nodesInProgress Set of nodes that are currently active on the
         *         recursion stack. Useful to detect cycles.
         * @param layer Layer from which `tensor` comes from. If not provided,
         *   will be obtained from tensor.sourceLayer.
         * @param nodeIndex Node index from which `tensor` comes from.
         * @param tensorIndex TensorIndex from which `tensor` comes from.
         *
         * @exception RuntimeError if a cycle is detected.
         */ const buildMapOfGraph = (tensor, finishedNodes, nodesInProgress, layer, nodeIndex, tensorIndex)=>{
            if (layer == null || nodeIndex == null || tensorIndex == null) {
                layer = tensor.sourceLayer;
                nodeIndex = tensor.nodeIndex;
                tensorIndex = tensor.tensorIndex;
            }
            const node = layer.inboundNodes[nodeIndex];
            // Prevent cycles.
            if (nodesInProgress.indexOf(node) !== -1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"](`The tensor ${tensor.name} at layer "${layer.name}" ` + 'is part of a cycle.');
            }
            // Don't repeat work for shared subgraphs
            if (finishedNodes.indexOf(node) !== -1) {
                return;
            }
            // Update containerNodes.
            this.containerNodes.add(Container.nodeKey(layer, nodeIndex));
            // Store the traversal order for layer sorting.
            if (!(layer.id in layerIndices)) {
                layerIndices[layer.id] = Object.keys(layerIndices).length;
            }
            if (nodesInProgress.indexOf(node) === -1) {
                nodesInProgress.push(node);
            }
            // Propagate to all previous tensors connected to this node.
            const numInboundLayers = node.inboundLayers.length;
            for(let i = 0; i < numInboundLayers; i++){
                const x = node.inputTensors[i];
                const layer = node.inboundLayers[i];
                const nodeIndex = node.nodeIndices[i];
                const tensorIndex = node.tensorIndices[i];
                buildMapOfGraph(x, finishedNodes, nodesInProgress, layer, nodeIndex, tensorIndex);
            }
            finishedNodes.push(node);
            while(nodesInProgress.indexOf(node) >= 0){
                nodesInProgress.splice(nodesInProgress.indexOf(node), 1);
            }
            nodesInDecreasingDepth.push(node);
        };
        const finishedNodes = [];
        const nodesInProgress = [];
        for (const x of this.outputs){
            buildMapOfGraph(x, finishedNodes, nodesInProgress);
        }
        const reversedNodesInDecreasingDepth = nodesInDecreasingDepth.slice().reverse();
        for (const node of reversedNodesInDecreasingDepth){
            nodeIDToNode[node.id] = node;
            // If the depth is not set, the node has no outbound nodes (depth 0).
            if (!(node.id in nodesDepths)) {
                nodesDepths[node.id] = 0;
            }
            let depth = nodesDepths[node.id];
            // Update the depth of the corresponding layer
            const previousDepth = layersDepths[node.outboundLayer.id] == null ? 0 : layersDepths[node.outboundLayer.id];
            /*
              If we've seen this layer before at a higher depth, we should use that
              depth instead of the node depth.  This is necessary for shared layers
              that have inputs at different depth levels in the graph.
            */ depth = Math.max(depth, previousDepth);
            layersDepths[node.outboundLayer.id] = depth;
            layerIDToLayer[node.outboundLayer.id] = node.outboundLayer;
            nodesDepths[node.id] = depth;
            // Update the depth of inbound nodes.
            for(let i = 0; i < node.inboundLayers.length; i++){
                const inboundLayer = node.inboundLayers[i];
                const nodeIndex = node.nodeIndices[i];
                const inboundNode = inboundLayer.inboundNodes[nodeIndex];
                const previousDepth = nodesDepths[inboundNode.id] == null ? 0 : nodesDepths[inboundNode.id];
                nodesDepths[inboundNode.id] = Math.max(depth + 1, previousDepth);
                nodeIDToNode[inboundNode.id] = inboundNode;
            }
        }
        // Build a dict {depth: list of nodes with this depth}
        const nodesByDepth = {};
        for(const nodeID in nodesDepths){
            const depth = nodesDepths[nodeID];
            if (!(depth in nodesByDepth)) {
                nodesByDepth[depth] = [];
            }
            nodesByDepth[depth].push(nodeIDToNode[nodeID]);
        }
        // Build a dict {depth: list of layers with this depth}
        const layersByDepth = {};
        for(const layerID in layersDepths){
            const depth = layersDepths[layerID];
            if (!(depth in layersByDepth)) {
                layersByDepth[depth] = [];
            }
            layersByDepth[depth].push(layerIDToLayer[layerID]);
        }
        // Get sorted list of layer depths.
        let depthKeys = Object.keys(layersByDepth).map((x)=>parseInt(x, 10)).sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseNumberCompare"]);
        // Set this.layers and this.layersByDepth.
        this.layers = [];
        for (const depth of depthKeys){
            const layersForDepth = layersByDepth[depth];
            // Container.layers needs to have a deterministic order:
            // here we order them by traversal order.
            layersForDepth.sort((a, b)=>{
                const aIndex = layerIndices[a.id];
                const bIndex = layerIndices[b.id];
                if (aIndex < bIndex) {
                    return -1;
                }
                if (aIndex > bIndex) {
                    return 1;
                }
                return 0;
            });
            for (const layer of layersForDepth){
                if (layer instanceof Container) {
                    this.internalContainerRefs.push(layer);
                }
                this.layers.push(layer);
            }
        }
        this.layersByDepth = layersByDepth;
        // Get sorted list of node depths;
        depthKeys = Object.keys(nodesByDepth).map((x)=>parseInt(x, 10)).sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseNumberCompare"]);
        // Check that all tensors required are computable.
        // computable_tensors: all tensors in the graph
        // that can be computed from the inputs provided.
        const computableTensors = this.inputs.slice();
        // To provide a better error msg.
        const layersWithCompleteInput = [];
        for (const depth of depthKeys){
            for (const node of nodesByDepth[depth]){
                const layer = node.outboundLayer;
                if (layer != null) {
                    for (const x of node.inputTensors){
                        if (computableTensors.indexOf(x) === -1) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"](`Graph disconnected: cannot obtain value for tensor ${x}` + ` at layer "${layer.name}". ` + 'The following previous layers were accessed without ' + `issue: ${layersWithCompleteInput}`);
                        }
                    }
                    for (const x of node.outputTensors){
                        computableTensors.push(x);
                    }
                    layersWithCompleteInput.push(layer.name);
                }
            }
        }
        // Set this.containerNodes and this.nodesByDepth.
        this.nodesByDepth = nodesByDepth;
        // Ensure name unicity, which will be crucial for serialization
        // (since serialized nodes refer to layers by their name).
        const allNames = this.layers.map((x)=>x.name);
        for (const name of allNames){
            const numOccurrences = allNames.filter((x)=>x === name).length;
            if (numOccurrences !== 1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"](`The name "${name}" is used ${numOccurrences} times ` + 'in the model. All layer names should be unique. Layer names: ' + JSON.stringify(allNames));
            }
        }
        // Layer parameters.
        // The new container starts with a single inbound node
        // for its inputs, and no outbound nodes.
        // Will be appended to by future calls to apply().
        this.outboundNodes = [];
        // Will be appended to below, and by future calls to apply().
        this.inboundNodes = [];
        // Create the node linking internal inputs to internal outputs.
        // (This call has side effects.)
        // tslint:disable-next-line:no-unused-expression
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"]({
            outboundLayer: this,
            inboundLayers: [],
            nodeIndices: [],
            tensorIndices: [],
            inputTensors: this.inputs,
            outputTensors: this.outputs,
            inputMasks: this.inputs.map((x)=>null),
            outputMasks: this.outputs.map((x)=>null),
            inputShapes: this.inputs.map((x)=>x.shape),
            outputShapes: this.outputs.map((x)=>x.shape)
        });
        this.built = true;
        this._refCount = 1; // The ref count of a container always start at 1.
    }
    assertNotDisposed() {
        if (this._refCount === 0) {
            throw new Error(`Container '${this.name}' is already disposed.`);
        }
    }
    /**
     * Attempt to dispose a LayersModel's weights.
     *
     * This method decrease the reference count of the LayersModel object by 1.
     *
     * A LayersModel is reference-counted. Its reference count is incremented by 1
     * when it is first constructed and when it is used as a Layer of another
     * LayersModel.
     *
     * If the reference count of a LayersModel becomes 0, the `dispose` method of
     * all its constituent `Layer`s will be called.
     *
     * Note: If the reference count is greater than 0 after the decrement, the
     * `dispose` method of its constituent `Layer`s will *not* be called.
     *
     * After a LayersModel is disposed, it cannot be used in calls such as
     * 'predict`, `evaluate` or `fit` anymore.
     *
     * @returns A DisposeResult Object with the following fields:
     *   - refCountAfterDispose: The reference count of the LayersModel after this
     *     `dispose()` call.
     *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
     *     during this `dispose()` call.
     * @throws {Error} If the layer is not built yet, or if the LayersModel has
     *   already been disposed.
     */ dispose() {
        this.assertNotDisposed();
        const result = {
            refCountAfterDispose: null,
            numDisposedVariables: 0
        };
        if (--this._refCount === 0) {
            for (const layer of this.layers){
                result.numDisposedVariables += layer.dispose().numDisposedVariables;
            }
            // Call dispose on each internally created container layer again to ensure
            // their refCounts hit zero and their tensors are subsequently deleted.
            for (const container of this.internalContainerRefs){
                result.numDisposedVariables += container.dispose().numDisposedVariables;
            }
        }
        result.refCountAfterDispose = this._refCount;
        return result;
    }
    get trainable() {
        return this.trainable_;
    }
    set trainable(trainable) {
        this.layers.forEach((layer)=>{
            // tslint:disable-next-line:no-any
            layer._trainableWeights.forEach((w)=>w.trainable = trainable);
        });
        this.trainable_ = trainable;
    }
    get trainableWeights() {
        // Porting Note: This check below is to prevent errors where the
        //   _trainableWeights inherited from the parent class (Layer) gets
        //   inadvertently used.
        if (this._trainableWeights.length > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Container instance unexpectedly contains _trainableWeights.' + 'The trainable weights of a Container are a union of the ' + 'trainable weights of its consituent Layers. Its own ' + '_trainableWeights must remain an empty Array.');
        }
        if (!this.trainable) {
            return [];
        }
        let weights = [];
        for (const layer of this.layers){
            weights = weights.concat(layer.trainableWeights);
        }
        return weights;
    }
    get nonTrainableWeights() {
        const weights = [];
        for (const layer of this.layers){
            weights.push(...layer.nonTrainableWeights);
        }
        if (!this.trainable) {
            const trainableWeights = [];
            for (const layer of this.layers){
                trainableWeights.push(...layer.trainableWeights);
            }
            return trainableWeights.concat(weights);
        }
        return weights;
    }
    get weights() {
        return this.trainableWeights.concat(this.nonTrainableWeights);
    }
    /**
     * Loads all layer weights from a JSON object.
     *
     * Porting Note: HDF5 weight files cannot be directly loaded in JavaScript /
     *   TypeScript. The utility script at `scripts/pykeras.py` offers means
     *   to convert them into JSON strings compatible with this method.
     * Porting Note: TensorFlow.js Layers supports only loading by name currently.
     *
     * @param weights A JSON mapping weight names to weight values as nested
     *   arrays of numbers, or a `NamedTensorMap`, i.e., a JSON mapping weight
     *   names to `tf.Tensor` objects.
     * @param strict Require that the provided weights exactly match those
     *   required by the container.  Default: `true`.  Passing `false` means that
     *   extra weights and missing weights will be silently ignored.
     */ loadWeights(weights, strict = true) {
        const nameToWeight = {};
        let totalWeightsCount = 0;
        const modelIsKerasSavedModelFormat = isKerasSavedModelFormat(weights);
        if (modelIsKerasSavedModelFormat) {
            this.parseWeights(weights);
        }
        // Check if weights from keras v3.
        for (const layer of this.layers){
            for (const [index, weight] of layer.weights.entries()){
                // Parse the name to layerName/index.
                // e.g. dense/0, dense/1, dense_1/0, dense_1/1
                const parsedName = modelIsKerasSavedModelFormat ? `${weight.name.split('/').slice(0, -1).join('/') + '/'}${index}` : weight.originalName;
                if (nameToWeight[parsedName] != null) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Duplicate weight name: ${parsedName}`);
                }
                nameToWeight[parsedName] = weight;
                totalWeightsCount++;
            }
        }
        const weightValueTuples = [];
        for(const name in weights){
            // TF 2.2.0 added cell name to the weight name in the format of
            // layer_name/cell_name/weight_name, we need to remove
            // the inner cell name.
            let validatedName = name;
            if (nameToWeight[name] == null) {
                const tokens = name.split('/');
                const shortenNameArray = tokens.slice(0, -2).concat([
                    tokens[tokens.length - 1]
                ]);
                validatedName = shortenNameArray.join('/');
            }
            if (nameToWeight[validatedName] != null) {
                weightValueTuples.push([
                    nameToWeight[validatedName],
                    weights[name]
                ]);
            } else if (strict) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Provided weight data has no target variable: ${name}`);
            }
            delete nameToWeight[validatedName];
        }
        if (strict) {
            // Check that all weights are set.
            const unsetNames = [];
            for(const name in nameToWeight){
                unsetNames.push(name);
            }
            if (unsetNames.length > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`${unsetNames.length} of ${totalWeightsCount} weights are not set: ` + `${unsetNames}`);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$variables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["batchSetValue"])(weightValueTuples);
    }
    parseWeights(weights) {
        for(const key in Object.keys(weights)){
            const listParts = key.split('/');
            const list = [
                'vars',
                'layer_checkpoint_dependencies'
            ];
            // For keras v3, the weights name are saved based on the folder structure.
            // e.g. _backbone/_layer_checkpoint_dependencies/transformer/_self../
            // _output_dense/vars/0
            // Therefore we discard the `vars` and `layer_checkpoint_depencies` within
            // the saved name and only keeps the layer name and weights.
            // This can help to mapping the actual name of the layers and load each
            // weight accordingly.
            const newKey = listParts.map((str)=>{
                if (str.startsWith('_')) {
                    return str.slice(1);
                }
                return str;
            }).filter((str)=>!list.includes(str)).join('/');
            if (newKey !== key) {
                weights[newKey] = weights[key];
                delete weights[key];
            }
        }
    }
    /**
     * Util shared between different serialization methods.
     * @returns LayersModel config with Keras version information added.
     */ updatedConfig() {
        const theConfig = this.getConfig();
        const modelConfig = {};
        modelConfig['className'] = this.getClassName();
        modelConfig['config'] = theConfig;
        modelConfig['kerasVersion'] = `tfjs-layers ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`;
        // TODO(nielsene): Replace something like K.backend() once
        // possible.
        modelConfig['backend'] = 'TensorFlow.js';
        return modelConfig;
    }
    /**
     * Returns a JSON string containing the network configuration.
     *
     * To load a network from a JSON save file, use
     * models.modelFromJSON(jsonString);
     * @param extraJsonArgs Unused in tfjs-layers, maintained for PyKeras
     * @param returnString Whether the return value should be stringified
     *    (default: `true`).
     * @returns a JSON string if `returnString` (default), or a JSON object if
     *   `!returnString`.
     */ // tslint:disable-next-line:no-any
    toJSON(unused, returnString = true) {
        const modelConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertTsToPythonic"])(this.updatedConfig());
        return returnString ? JSON.stringify(modelConfig) : modelConfig;
    }
    /**
     * Call the model on new inputs.
     *
     * In this case `call` just reapplies all ops in the graph to the new inputs
     * (e.g. build a new computational graph from the provided inputs).
     *
     * @param inputs A tensor or list of tensors.
     * @param mask A mask or list of masks. A mask can be either a tensor or null
     *   (no mask).
     *
     * @return A tensor if there is a single output, or a list of tensors if there
     *   are more than one outputs.
     */ call(inputs, kwargs) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs);
            const feedDict = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeedDict"]();
            for(let i = 0; i < this.inputs.length; ++i){
                feedDict.add(this.inputs[i], inputs[i]);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(this.outputs, feedDict, kwargs);
        });
    }
    /**
     * Computes an output mask tensor.
     *
     * @param inputs Tensor or list of tensors.
     * @param mask Tensor or list of tensors.
     *
     * @return null or a tensor (or list of tensors, one per output tensor of the
     * layer).
     */ computeMask(inputs, mask) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            inputs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](inputs);
            let masks;
            if (mask == null) {
                masks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pyListRepeat"](null, inputs.length);
            } else {
                masks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](mask);
            }
            // TODO(michaelterry): Add support for mask caching.
            return this.runInternalGraph(inputs, masks)[1];
        });
    }
    /**
     * Computes the output shape of the layer.
     *
     * Assumes that the layer will be built to match that input shape provided.
     *
     * @param inputShape A shape (tuple of integers) or a list of shape tuples
     *   (one per output tensor of the layer). Shape tuples can include null for
     *   free dimensions, instead of an integer.
     */ computeOutputShape(inputShape) {
        const inputShapes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeShapeList"](inputShape);
        if (inputShapes.length !== this.inputLayers.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Invalid inputShape argument ${inputShape}: ` + `model has ${this.inputLayers.length} tensor inputs.`);
        }
        // TODO(michaelterry): Add caching
        const layersToOutputShapes = {};
        for(let i = 0; i < inputShapes.length; i++){
            const layer = this.inputLayers[i];
            const inputShape = inputShapes[i];
            // It's an input layer: computeOutputShape is identity,
            // and there is only one node and one tensor output.
            const shapeKey = layer.name + '_0_0';
            layersToOutputShapes[shapeKey] = inputShape;
        }
        const depthKeys = Object.keys(this.nodesByDepth).map((x)=>parseInt(x, 10)).sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseNumberCompare"]);
        // Iterate over nodes, by depth level.
        if (depthKeys.length > 1) {
            for (const depth of depthKeys){
                const nodes = this.nodesByDepth[depth];
                for (const node of nodes){
                    // This is always a single layer, never a list.
                    const layer = node.outboundLayer;
                    if (this.inputLayers.map((x)=>x.id).indexOf(layer.id) !== -1) {
                        continue;
                    }
                    // Potentially redundant list, same size of node.inputTensors.
                    const inputShapes = [];
                    for(let j = 0; j < node.inboundLayers.length; j++){
                        const inboundLayer = node.inboundLayers[j];
                        const nodeIndex = node.nodeIndices[j];
                        const tensorIndex = node.tensorIndices[j];
                        const shapeKey = `${inboundLayer.name}_${nodeIndex}_${tensorIndex}`;
                        const inputShape = layersToOutputShapes[shapeKey];
                        inputShapes.push(inputShape);
                    }
                    const outputShape = layer.computeOutputShape(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](inputShapes));
                    const outputShapes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$types_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeShapeList"](outputShape);
                    const nodeIndex = layer.inboundNodes.indexOf(node);
                    for(let j = 0; j < outputShapes.length; j++){
                        const shapeKey = `${layer.name}_${nodeIndex}_${j}`;
                        layersToOutputShapes[shapeKey] = outputShapes[j];
                    }
                }
            }
        }
        // Read final output shapes from layersToOutputShapes.
        const outputShapes = [];
        const outputShapeKeys = [];
        for(let i = 0; i < this.outputLayers.length; i++){
            const layer = this.outputLayers[i];
            const nodeIndex = this.outputLayersNodeIndices[i];
            const tensorIndex = this.outputLayersTensorIndices[i];
            const shapeKey = `${layer.name}_${nodeIndex}_${tensorIndex}`;
            outputShapeKeys.push(shapeKey);
        }
        for(let i = 0; i < outputShapeKeys.length; i++){
            const key = outputShapeKeys[i];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](key in layersToOutputShapes);
            outputShapes.push(layersToOutputShapes[key]);
        }
        // TODO(michaelterry): Update cache
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](outputShapes);
    }
    /**
     * Computes output tensors for new inputs.
     *
     * Note:
     *   - Expects `inputs` to be a list (potentially with 1 element).
     *
     * @param inputs List of tensors
     * @param masks List of masks (tensors or null).
     * @return Three lists: outputTensors, outputMasks, outputShapes
     */ runInternalGraph(inputs, masks) {
        if (masks == null) {
            masks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pyListRepeat"](null, inputs.length);
        }
        // Dictionary mapping reference tensors to tuples
        // (computed tensor, compute mask)
        // we assume a 1:1 mapping from tensor to mask
        // TODO: raise exception when a `.computeMask()` call
        // does not return a list the same size as `call`
        const tensorMap = {};
        for(let i = 0; i < this.inputs.length; ++i){
            const x = this.inputs[i];
            const y = inputs[i];
            const mask = masks[i];
            tensorMap[x.id] = [
                y,
                mask
            ];
        }
        const depthKeys = Object.keys(this.nodesByDepth).map((x)=>parseInt(x, 10)).sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseNumberCompare"]);
        for (const depth of depthKeys){
            const nodes = this.nodesByDepth[depth];
            for (const node of nodes){
                // This is always a single layer, never a list.
                const layer = node.outboundLayer;
                const referenceInputTensors = node.inputTensors;
                const referenceOutputTensors = node.outputTensors;
                // If all previous input tensors are available in tensorMap,
                // then call node.inboundLayer on them.
                // List of tuples [input, mask]:
                const computedData = new Array();
                for (const x of referenceInputTensors){
                    if (x.id in tensorMap) {
                        computedData.push(tensorMap[x.id]);
                    }
                }
                if (computedData.length === referenceInputTensors.length) {
                    // TODO(michaelterry): Add K.name_scope here, if we need it.
                    let kwargs = {};
                    let computedTensors;
                    let computedMasks;
                    let outputTensors;
                    let outputMasks;
                    // call layer
                    if (node.callArgs != null) {
                        kwargs = node.callArgs;
                    }
                    if (computedData.length === 1) {
                        const [computedTensor, computedMask] = computedData[0];
                        if (kwargs['mask'] == null) {
                            kwargs['mask'] = computedMask;
                        }
                        outputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](layer.call(computedTensor, kwargs));
                        outputMasks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](layer.computeMask(computedTensor, computedMask));
                        computedTensors = [
                            computedTensor
                        ];
                        computedMasks = [
                            computedMask
                        ];
                    } else {
                        computedTensors = computedData.map((x)=>x[0]);
                        computedMasks = computedData.map((x)=>x[1]);
                        if (kwargs['mask'] == null) {
                            kwargs['mask'] = computedMasks;
                        }
                        outputTensors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](layer.call(computedTensors, kwargs));
                        outputMasks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"](layer.computeMask(computedTensors, computedMasks));
                    }
                    if (layer.activityRegularizer) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('LayersModel invocation with concrete Tensor value(s) in the ' + 'presence of activity regularizer(s) is not supported yet.');
                    }
                    // TODO(michaelterry): Add model updates and losses
                    // Update tensor map.
                    for(let i = 0; i < referenceOutputTensors.length; ++i){
                        const x = referenceOutputTensors[i];
                        const y = outputTensors[i];
                        const mask = outputMasks[i];
                        tensorMap[x.id] = [
                            y,
                            mask
                        ];
                    }
                }
            }
        }
        const outputTensors = [];
        const outputMasks = [];
        const outputShapes = [];
        for (const x of this.outputs){
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](x.id in tensorMap, `Could not compute output ${x.name} : ${x.id}`);
            const [tensor, mask] = tensorMap[x.id];
            outputShapes.push(tensor.shape);
            outputTensors.push(tensor);
            outputMasks.push(mask);
        }
        // TODO(michaelterry): Add support for caches.
        return [
            outputTensors,
            outputMasks,
            outputShapes
        ];
    }
    /**
     * Builds a map of internal node keys to node ordering.
     * Used in serializaion a node orderings may change as unused nodes are
     * dropped. Porting Note:  This helper method was pulled out of getConfig to
     * improve readability.
     * @param layers An array of Layers in the model.
     * @returns Map of Node Keys to index order within the layer.
     */ buildNodeConversionMap(layers) {
        const nodeConversionMap = {};
        let keptNodes;
        for (const layer of this.layers){
            keptNodes = layer instanceof Container ? 1 : 0;
            for(let originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++){
                const nodeKey = Container.nodeKey(layer, originalNodeIndex);
                if (this.containerNodes.has(nodeKey)) {
                    // i.e. we mark it to be saved
                    nodeConversionMap[nodeKey] = keptNodes;
                    keptNodes += 1;
                }
            }
        }
        return nodeConversionMap;
    }
    getLayer(nameOrIndex, index) {
        if (index != null) {
            return this.findLayer(index);
        } else {
            if (nameOrIndex == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Provide either a layer name or layer index');
            }
            if (typeof nameOrIndex === 'number') {
                return this.findLayer(nameOrIndex);
            }
        }
        for (const layer of this.layers){
            if (layer.name === nameOrIndex) {
                return layer;
            }
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`No such layer: ${nameOrIndex}`);
    }
    findLayer(index) {
        if (this.layers.length <= index) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Was asked to retrieve layer at index ${index}, but model only ` + `has ${this.layers.length} layer(s).`);
        } else {
            return this.layers[index];
        }
    }
    /**
     * Retrieves the Container's current loss values.
     *
     * Used for regularizers during training.
     */ calculateLosses() {
        // Porting Node: This is an augmentation to Container.loss in PyKeras.
        //   In PyKeras, Container.loss returns symbolic tensors. Here a concrete
        //   Tensor (specifically Scalar) values are returned. This is due to the
        //   imperative backend.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            const losses = [];
            for (const layer of this.layers){
                for(let nodeIndex = 0; nodeIndex < layer.inboundNodes.length; ++nodeIndex){
                    const nodeKey = Container.nodeKey(layer, nodeIndex);
                    if (this.containerNodes.has(nodeKey)) {
                        losses.push(...layer.calculateLosses());
                    }
                }
            }
            // TODO(cais): Add any unconditional model-level losses?
            return losses;
        });
    }
    getConfig() {
        const config = {
            name: this.name
        };
        // Build a map from layer unique name (self._node_key)
        // to the index of the nodes that are saved in the config.
        // Only nodes in container_nodes are saved.
        const nodeConversionMap = this.buildNodeConversionMap(this.layers);
        // Serialize and save the layers in layerConfigs
        const layerConfigs = [];
        for (const layer of this.layers){
            const layerClassName = layer.getClassName();
            const layerConfig = layer.getConfig();
            const filteredInboundNodes = [];
            for(let originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++){
                const node = layer.inboundNodes[originalNodeIndex];
                const nodeKey = Container.nodeKey(layer, originalNodeIndex);
                let kwargs = {};
                if (this.containerNodes.has(nodeKey)) {
                    // The node is relevant to the model:
                    // add to filteredInboundNodes.
                    if (node.callArgs) {
                        try {
                            JSON.stringify(node.callArgs);
                            kwargs = node.callArgs;
                        } catch (err) {
                            console.warn(`Layer ${layer.name} was passed ` + `non-serializable keyword arguments: ` + `${node.callArgs}. They will not be included ` + `in the serialized model (and thus will be ` + `missing at deserialization time).`);
                            kwargs = {};
                        }
                    }
                    if (node.inboundLayers.length > 0) {
                        const nodeData = [];
                        for(let i = 0; i < node.inboundLayers.length; i++){
                            const inboundLayer = node.inboundLayers[i];
                            const nodeIndex = node.nodeIndices[i];
                            const tensorIndex = node.tensorIndices[i];
                            const nodeKey = Container.nodeKey(inboundLayer, nodeIndex);
                            let newNodeIndex = nodeConversionMap[nodeKey];
                            if (newNodeIndex == null) {
                                newNodeIndex = 0;
                            }
                            nodeData.push([
                                inboundLayer.name,
                                newNodeIndex,
                                tensorIndex,
                                kwargs
                            ]);
                        }
                        filteredInboundNodes.push(nodeData);
                    }
                }
            }
            const dict = {};
            dict['name'] = layer.name;
            dict['className'] = layerClassName;
            dict['config'] = layerConfig;
            dict['inboundNodes'] = filteredInboundNodes;
            layerConfigs.push(dict);
        }
        config['layers'] = layerConfigs;
        // Gather info about inputs and outputs
        const modelInputs = [];
        for(let i = 0; i < this.inputLayers.length; i++){
            const layer = this.inputLayers[i];
            const nodeIndex = this.inputLayersNodeIndices[i];
            const nodeKey = Container.nodeKey(layer, nodeIndex);
            if (!this.containerNodes.has(nodeKey)) {
                continue;
            }
            let newNodeIndex = nodeConversionMap[nodeKey];
            if (newNodeIndex === null || newNodeIndex === undefined) {
                newNodeIndex = 0;
            }
            const tensorIndex = this.inputLayersTensorIndices[i];
            modelInputs.push([
                layer.name,
                newNodeIndex,
                tensorIndex
            ]);
        }
        config['inputLayers'] = modelInputs;
        const modelOutputs = [];
        for(let i = 0; i < this.outputLayers.length; i++){
            const layer = this.outputLayers[i];
            const nodeIndex = this.outputLayersNodeIndices[i];
            const nodeKey = Container.nodeKey(layer, nodeIndex);
            if (!this.containerNodes.has(nodeKey)) {
                continue;
            }
            let newNodeIndex = nodeConversionMap[nodeKey];
            if (newNodeIndex === null || newNodeIndex === undefined) {
                newNodeIndex = 0;
            }
            const tensorIndex = this.outputLayersTensorIndices[i];
            modelOutputs.push([
                layer.name,
                newNodeIndex,
                tensorIndex
            ]);
        }
        config['outputLayers'] = modelOutputs;
        return config;
    }
    /**
     * Instantiates a LayersModel from its config (output of `get_config()`).
     * @param cls the class to create
     * @param config LayersModel config dictionary.
     * @param customObjects An optional dictionary of custom objects.
     * @param fastWeightInit Optional flag to use fast weight initialization
     *   during deserialization. This is applicable to cases in which
     *   the initialization will be immediately overwritten by loaded weight
     *   values. Default: `false`.
     * @returns A LayersModel instance.
     * @throws ValueError: In case of improperly formatted config dict.
     */ /** @nocollapse */ static fromConfig(cls, config, customObjects = {}, fastWeightInit = false) {
        // Layer instances created during
        // the graph reconstruction process
        const createdLayers = {};
        // Dictionary mapping layer instances to
        // node data that specifies a layer call.
        // It acts as a queue that maintains any unprocessed
        // layer call until it becomes possible to process it
        // (i.e. until the input tensors to the call all exist).
        const unprocessedNodes = {};
        function addUnprocessedNode(layer, nodeData) {
            if (!(layer.name in unprocessedNodes)) {
                unprocessedNodes[layer.name] = [
                    nodeData
                ];
            } else {
                unprocessedNodes[layer.name].push(nodeData);
            }
        }
        function processNode(layer, nodeData) {
            const inputTensors = [];
            let kwargs;
            for (const inputData of nodeData){
                const inboundLayerName = inputData[0];
                const inboundNodeIndex = inputData[1];
                const inboundTensorIndex = inputData[2];
                kwargs = inputData[3] == null ? {} : inputData[3];
                if (!(inboundLayerName in createdLayers)) {
                    addUnprocessedNode(layer, nodeData);
                    return;
                }
                const inboundLayer = createdLayers[inboundLayerName];
                if (inboundLayer.inboundNodes.length <= inboundNodeIndex) {
                    addUnprocessedNode(layer, nodeData);
                    return;
                }
                const inboundNode = inboundLayer.inboundNodes[inboundNodeIndex];
                inputTensors.push(inboundNode.outputTensors[inboundTensorIndex]);
            }
            // Call layer on its inputs, thus creating the node
            // and building the layer if needed.
            // Note: This has Eager vs Graph Implications.
            if (inputTensors.length > 0) {
                layer.apply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"](inputTensors), kwargs); // was ** kwargs
            }
        }
        /**
         * Deserialize a layer, then call it on appropriate inputs.
         * @param layerData: layer config dict.
         * @throws ValueError: In case of improperly formatted `layer_data`
         * dict.
         */ function processLayer(layerData) {
            const layerName = layerData['name'];
            // Instantiate layer.
            const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(layerData, config['customObjects'] != null ? config['customObjects'] : {});
            layer.setFastWeightInitDuringBuild(fastWeightInit);
            createdLayers[layerName] = layer;
            // Gather layer inputs.
            const inboundNodesData = layerData['inboundNodes'];
            inboundNodesData.forEach((nodeData)=>{
                if (!(nodeData instanceof Array)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Corrupted configuration, expected array for nodeData: ${nodeData}`);
                }
                // We don't process nodes (i.e. make layer calls)
                // on the fly because the inbound node may not yet exist,
                // in case of layer shared at different topological depths
                // (e.g.a model such as A(B(A(B(x)))))
                addUnprocessedNode(layer, nodeData);
            });
        }
        // First, we create all layers and enqueue nodes to be processed.
        const name = config['name'];
        const layersFromConfig = config['layers'];
        for (const layerData of layersFromConfig){
            processLayer(layerData);
        }
        // Then we process nodes in order of layer depth.
        // Nodes that cannot yet be processed(if the inbound node
        // does not yet exist) are re - enqueued, and the process
        // is repeated until all nodes are processed.
        while(!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObjectEmpty"](unprocessedNodes)){
            for (const layerData of layersFromConfig){
                const layer = createdLayers[layerData['name']];
                if (layer.name in unprocessedNodes) {
                    const currentUnprocessedNodesForLayer = unprocessedNodes[layer.name];
                    delete unprocessedNodes[layer.name];
                    for (const nodeData of currentUnprocessedNodesForLayer){
                        processNode(layer, nodeData);
                    }
                }
            }
        }
        const inputTensors = [];
        const outputTensors = [];
        const inputLayersFromConfig = config['inputLayers'];
        for (const layerData of inputLayersFromConfig){
            const layerName = layerData[0];
            const nodeIndex = layerData[1];
            const tensorIndex = layerData[2];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](layerName in createdLayers);
            const layer = createdLayers[layerName];
            const layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
            inputTensors.push(layerOutputTensors[tensorIndex]);
        }
        const outputLayersFromConfig = config['outputLayers'];
        for (const layerData of outputLayersFromConfig){
            const layerName = layerData[0];
            const nodeIndex = layerData[1];
            const tensorIndex = layerData[2];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"](layerName in createdLayers);
            const layer = createdLayers[layerName];
            const layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
            outputTensors.push(layerOutputTensors[tensorIndex]);
        }
        return new cls({
            inputs: inputTensors,
            outputs: outputTensors,
            name
        });
    }
    /**
     * Determine whether the container is stateful.
     *
     * Porting Note: this is the equivalent of the stateful @property of
     *   the Container class in PyKeras.
     */ get stateful() {
        // Porting Note: This check is to prevent inadvertent setting of the
        //   _stateful property of the Container instance.
        if (this._stateful) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Container instance unexpectedly has _stateful = true. The ' + 'statefulness of a Container is determined by the Layers it ' + 'contains. Its _stateful property must remain the default false.');
        }
        for (const layer of this.layers){
            if (layer.stateful) {
                return true;
            }
        }
        return false;
    }
    /**
     * Reset the state of all stateful constituent layers (if any).
     *
     * Examples of stateful layers include RNN layers whose `stateful` property
     * is set as `true`.
     */ resetStates() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            this.layers.forEach((layer)=>{
                // tslint:disable:no-any
                if (layer.stateful) {
                    layer.resetStates();
                }
            // tslint:enable:no-any
            });
        });
    }
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vdGZqcy1sYXllcnMvc3JjL2VuZ2luZS9jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCwrQ0FBK0M7QUFFL0MsT0FBTyxFQUFnRCxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDeEMsT0FBTyxFQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFJeEUsT0FBTyxFQUFDLFdBQVcsSUFBSSxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXhFLE9BQU8sS0FBSyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsYUFBYSxFQUFnQixNQUFNLGNBQWMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsT0FBTyxJQUFJLGFBQWEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUVwRCxPQUFPLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLElBQUksRUFBaUIsTUFBTSxZQUFZLENBQUM7QUFTdEUsNEVBQTRFO0FBQzVFLGVBQWU7QUFDZixNQUFNLHVCQUF1QixHQUFHLENBQUMsT0FBdUIsRUFBVyxFQUFFO0lBQ25FLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtR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Q0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxJQUFJLEdBQUcsQ0FBQyxFQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQWEsUUFBUTtRQUNuQixvRUFBb0U7UUFDcEUsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLElBQUksVUFBVSxDQUNoQiw0REFBNEQ7Z0JBQzVELDZEQUE2RDtnQkFDN0QsaUVBQWlFLENBQUMsQ0FBQztTQUN4RTtRQUNELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ00sV0FBVztRQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLHdCQUF3QjtnQkFDeEIsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELHVCQUF1QjtZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyogT3JpZ2luYWwgc291cmNlOiBrZXJhcy9lbmdpbmUvdG9wb2xvZ3kucHkgKi9cblxuaW1wb3J0IHtOYW1lZFRlbnNvck1hcCwgU2NhbGFyLCBzZXJpYWxpemF0aW9uLCBUZW5zb3IsIHRpZHl9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmltcG9ydCB7Z2V0VWlkfSBmcm9tICcuLi9iYWNrZW5kL3N0YXRlJztcbmltcG9ydCB7Tm90SW1wbGVtZW50ZWRFcnJvciwgUnVudGltZUVycm9yLCBWYWx1ZUVycm9yfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtTaGFwZX0gZnJvbSAnLi4va2VyYXNfZm9ybWF0L2NvbW1vbic7XG5pbXBvcnQge1RlbnNvcktleVdpdGhBcmdzQXJyYXl9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9ub2RlX2NvbmZpZyc7XG5pbXBvcnQge1B5SnNvbkRpY3R9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC90eXBlcyc7XG5pbXBvcnQge2Rlc2VyaWFsaXplIGFzIGRlc2VyaWFsaXplTGF5ZXJ9IGZyb20gJy4uL2xheWVycy9zZXJpYWxpemF0aW9uJztcbmltcG9ydCB7S3dhcmdzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgKiBhcyBnZW5lcmljX3V0aWxzIGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuaW1wb3J0IHtjb252ZXJ0VHNUb1B5dGhvbmljfSBmcm9tICcuLi91dGlscy9zZXJpYWxpemF0aW9uX3V0aWxzJztcbmltcG9ydCAqIGFzIHR5cGVzX3V0aWxzIGZyb20gJy4uL3V0aWxzL3R5cGVzX3V0aWxzJztcbmltcG9ydCB7YmF0Y2hTZXRWYWx1ZSwgTGF5ZXJWYXJpYWJsZX0gZnJvbSAnLi4vdmFyaWFibGVzJztcbmltcG9ydCB7dmVyc2lvbiBhcyBsYXllcnNWZXJzaW9ufSBmcm9tICcuLi92ZXJzaW9uJztcblxuaW1wb3J0IHtleGVjdXRlLCBGZWVkRGljdH0gZnJvbSAnLi9leGVjdXRvcic7XG5pbXBvcnQge0lucHV0TGF5ZXJ9IGZyb20gJy4vaW5wdXRfbGF5ZXInO1xuaW1wb3J0IHtEaXNwb3NlUmVzdWx0LCBMYXllciwgTm9kZSwgU3ltYm9saWNUZW5zb3J9IGZyb20gJy4vdG9wb2xvZ3knO1xuXG4vKiogQ29uc3RydWN0b3IgY29uZmlnIGZvciBDb250YWluZXIuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lckFyZ3Mge1xuICBpbnB1dHM6IFN5bWJvbGljVGVuc29yfFN5bWJvbGljVGVuc29yW107XG4gIG91dHB1dHM6IFN5bWJvbGljVGVuc29yfFN5bWJvbGljVGVuc29yW107XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbi8vIGdldCB3ZWlnaHRzIGtleSBmcm9tIHRlbnNvciBtYXAgaW4gb3JkZXIgdG8gY2hlY2sgaWYgaXQgaXMgZnJvbSBrZXJhcyB2My5cbi8vIGUuZy4gZGVuc2UvMFxuY29uc3QgaXNLZXJhc1NhdmVkTW9kZWxGb3JtYXQgPSAod2VpZ2h0czogTmFtZWRUZW5zb3JNYXApOiBib29sZWFuID0+IHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdlaWdodHMpO1xuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5ID0ga2V5c1swXS5zcGxpdCgnLycpO1xuICByZXR1cm4gIWlzTmFOKHBhcnNlSW50KGtleVtrZXkubGVuZ3RoIC0gMV0sIDEwKSk7XG59O1xuXG4vKipcbiAqIEEgQ29udGFpbmVyIGlzIGEgZGlyZWN0ZWQgYWN5Y2xpYyBncmFwaCBvZiBsYXllcnMuXG4gKlxuICogSXQgaXMgdGhlIHRvcG9sb2dpY2FsIGZvcm0gb2YgYSBcIm1vZGVsXCIuIEEgTGF5ZXJzTW9kZWxcbiAqIGlzIHNpbXBseSBhIENvbnRhaW5lciB3aXRoIGFkZGVkIHRyYWluaW5nIHJvdXRpbmVzLlxuICpcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIExheWVyIHtcbiAgaW5wdXRzOiBTeW1ib2xpY1RlbnNvcltdO1xuICBvdXRwdXRzOiBTeW1ib2xpY1RlbnNvcltdO1xuXG4gIGlucHV0TGF5ZXJzOiBMYXllcltdO1xuICBpbnB1dExheWVyc05vZGVJbmRpY2VzOiBudW1iZXJbXTtcbiAgaW5wdXRMYXllcnNUZW5zb3JJbmRpY2VzOiBudW1iZXJbXTtcblxuICBvdXRwdXRMYXllcnM6IExheWVyW107XG4gIG91dHB1dExheWVyc05vZGVJbmRpY2VzOiBudW1iZXJbXTtcbiAgb3V0cHV0TGF5ZXJzVGVuc29ySW5kaWNlczogbnVtYmVyW107XG5cbiAgbGF5ZXJzOiBMYXllcltdO1xuICBsYXllcnNCeURlcHRoOiB7W2RlcHRoOiBzdHJpbmddOiBMYXllcltdfTtcbiAgbm9kZXNCeURlcHRoOiB7W2RlcHRoOiBzdHJpbmddOiBOb2RlW119O1xuXG4gIGludGVybmFsQ29udGFpbmVyUmVmczogQ29udGFpbmVyW107XG5cbiAgY29udGFpbmVyTm9kZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IEFkZCBjYWNoZSBzdXBwb3J0XG4gIC8vIHByaXZhdGUgb3V0cHV0TWFza0NhY2hlOiBhbnk7XG4gIC8vIHByaXZhdGUgb3V0cHV0VGVuc29yQ2FjaGU6IGFueTtcbiAgLy8gcHJpdmF0ZSBvdXRwdXRTaGFwZUNhY2hlOiBhbnk7XG5cbiAgaW5wdXROYW1lczogc3RyaW5nW107XG4gIG91dHB1dE5hbWVzOiBzdHJpbmdbXTtcbiAgZmVlZElucHV0U2hhcGVzOiBTaGFwZVtdO1xuXG4gIHByb3RlY3RlZCBpbnRlcm5hbElucHV0U2hhcGVzOiBTaGFwZVtdO1xuICBwcm90ZWN0ZWQgaW50ZXJuYWxPdXRwdXRTaGFwZXM6IFNoYXBlW107XG4gIC8vIFRPRE8oY2Fpcyk6IE1heWJlICdmZWVkJyBzaG91bGQgbm90IGluIHRoZSBuYW1lcyBvZiB0aGVzZSB2YXJpYWJsZXMsXG4gIC8vICAgZHVlIHRvIHRoZSBmYWN0IHRoYXQgb3VyIGJhY2tlbmQgaXMgbm90IHN5bWJvbGljLlxuICBwcm90ZWN0ZWQgZmVlZElucHV0TmFtZXM6IHN0cmluZ1tdO1xuICBwcm90ZWN0ZWQgZmVlZE91dHB1dE5hbWVzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBDb250YWluZXJBcmdzKSB7XG4gICAgLy8gTm8gYXJncyBwYXNzZWQgdG8gc3VwZXIncyBjb25zdHJ1Y3Rvci5cbiAgICBzdXBlcih7fSk7XG4gICAgdGhpcy5uYW1lID0gYXJncy5uYW1lO1xuICAgIGlmICh0aGlzLm5hbWUgPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5nZXRDbGFzc05hbWUoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5uYW1lID0gZ2V0VWlkKHByZWZpeCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdXBwb3J0c01hc2tpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnRyYWluYWJsZV8gPSB0cnVlO1xuXG4gICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBJbml0aWFsaXplIHBlcklucHV0TG9zc2VzL1VwZGF0ZXMgaGVyZS5cblxuICAgIC8vIENvbnRhaW5lci1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MuaW5wdXRzKSkge1xuICAgICAgdGhpcy5pbnB1dHMgPSBhcmdzLmlucHV0cy5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlucHV0cyA9IFthcmdzLmlucHV0c107XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3Mub3V0cHV0cykpIHtcbiAgICAgIHRoaXMub3V0cHV0cyA9IGFyZ3Mub3V0cHV0cy5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dHMgPSBbYXJncy5vdXRwdXRzXTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgcmVkdW5kYW5jeSBpbiBpbnB1dHMuXG4gICAgaWYgKGdlbmVyaWNfdXRpbHMudW5pcXVlKHRoaXMuaW5wdXRzKS5sZW5ndGggIT09IHRoaXMuaW5wdXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgJ1RoZSBsaXN0IG9mIGlucHV0cyBwYXNzZWQgdG8gdGhlIG1vZGVsIGlzICcgK1xuICAgICAgICAgICdyZWR1bmRhbnQuIEFsbCBpbnB1dHMgc2hvdWxkIG9ubHkgYXBwZWFyIG9uY2UuIEZvdW5kOiAnICtcbiAgICAgICAgICBgJHt0aGlzLmlucHV0cy5tYXAoeCA9PiB4Lm5hbWUpfWApO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciByZWR1bmRhbmN5IGluIG91dHB1dHMuXG4gICAgaWYgKGdlbmVyaWNfdXRpbHMudW5pcXVlKHRoaXMub3V0cHV0cykubGVuZ3RoICE9PSB0aGlzLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1RoZSBsaXN0IG9mIG91dHB1dHMgcGFzc2VkIHRvIHRoZSBtb2RlbCBpcyByZWR1bmRhbnQuICcgK1xuICAgICAgICAgICdBbGwgb3V0cHV0cyBzaG91bGQgb25seSBhcHBlYXIgb25jZS4gRm91bmQ6ICcgK1xuICAgICAgICAgIGAke3RoaXMub3V0cHV0cy5tYXAoeCA9PiB4Lm5hbWUpfWApO1xuICAgIH1cblxuICAgIC8qXG4gICAgICBMaXN0IG9mIGluaXRpYWwgbGF5ZXJzICgxIHRvIDEgbWFwcGluZyB3aXRoIHRoaXMuaW5wdXRzLCBoZW5jZSB0aGUgc2FtZVxuICAgICAgbGF5ZXIgbWlnaHQgYXBwZWFyIHR3aWNlKVxuICAgICovXG4gICAgdGhpcy5pbnB1dExheWVycyA9IFtdO1xuICAgIHRoaXMuaW5wdXRMYXllcnNOb2RlSW5kaWNlcyA9IFtdO1xuICAgIHRoaXMuaW5wdXRMYXllcnNUZW5zb3JJbmRpY2VzID0gW107XG4gICAgLypcbiAgICAgIExpc3Qgb2YgbGF5ZXJzICgxIHRvIDEgbWFwcGluZyB3aXRoIHRoaXMub3V0cHV0cywgaGVuY2UgdGhlIHNhbWUgbGF5ZXJcbiAgICAgIG1pZ2h0IGFwcGVhciB0d2ljZSlcbiAgICAqL1xuICAgIHRoaXMub3V0cHV0TGF5ZXJzID0gW107XG4gICAgdGhpcy5vdXRwdXRMYXllcnNOb2RlSW5kaWNlcyA9IFtdO1xuICAgIHRoaXMub3V0cHV0TGF5ZXJzVGVuc29ySW5kaWNlcyA9IFtdO1xuICAgIC8qXG4gICAgICBBbGwgbGF5ZXJzIGluIG9yZGVyIG9mIGhvcml6b250YWwgZ3JhcGggdHJhdmVyc2FsLiBFbnRyaWVzIGFyZSB1bmlxdWUuXG4gICAgICBJbmNsdWRlcyBpbnB1dCBhbmQgb3V0cHV0IGxheWVycy5cbiAgICAqL1xuICAgIHRoaXMubGF5ZXJzID0gW107XG5cbiAgICAvKlxuICAgICAgUmVmZXJlbmNlcyB0byBjb250YWluZXIgbGF5ZXJzIHRoYXQgd2VyZSBjb25zdHJ1Y3RlZCBpbnRlcm5hbGx5LiBXZSBuZWVkXG4gICAgICB0aGVzZSB0byBwcm9wZXJseSBkaXNwb3NlIG9mIHRlbnNvcnMgZnJvbSBuZXN0ZWQgY29udGFpbmVycy5cbiAgICAqL1xuICAgIHRoaXMuaW50ZXJuYWxDb250YWluZXJSZWZzID0gW107XG5cbiAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IERldGVybWluZSBpZiBjYWNoaW5nIHN0aWxsIG5lZWRlZCB3aXRoIGVhZ2VyXG4gICAgLy8gYmFja2VuZC5cbiAgICAvKlxuICAgICAgVGhpcyBpcyBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHdoZW4gY2FsbGluZyB0aGUgQ29udGFpbmVyIG9uIG5ld1xuICAgICAgaW5wdXRzLiBFdmVyeSB0aW1lIHRoZSBDb250YWluZXIgaXMgY2FsbGVkIG9uIGEgc2V0IG9uIGlucHV0IHRlbnNvcnMsXG4gICAgICB3ZSBjb21wdXRlIHRoZSBvdXRwdXQgdGVuc29ycywgb3V0cHV0IG1hc2tzIGFuZCBvdXRwdXQgc2hhcGVzIGluIG9uZSBwYXNzLFxuICAgICAgdGhlbiBjYWNoZSB0aGVtIGhlcmUuIFdoZW4gb25lIG9mIHRoZXNlIG91dHB1dHMgaXMgcXVlcmllZCBsYXRlcixcbiAgICAgIHdlIHJldHJpZXZlIGl0IGZyb20gdGhlcmUgaW5zdGVhZCBvZiByZWNvbXB1dGluZyBpdC5cbiAgICAqL1xuICAgIC8vIHRoaXMub3V0cHV0VGVuc29yQ2FjaGUgPSB7fTtcbiAgICAvLyB0aGlzLm91dHB1dFNoYXBlQ2FjaGUgPSB7fTtcblxuICAgIC8vIEJ1aWxkIHRoaXMub3V0cHV0TGF5ZXJzOlxuICAgIGZvciAoY29uc3QgeCBvZiB0aGlzLm91dHB1dHMpIHtcbiAgICAgIGNvbnN0IGxheWVyID0geC5zb3VyY2VMYXllcjtcbiAgICAgIGNvbnN0IG5vZGVJbmRleCA9IHgubm9kZUluZGV4O1xuICAgICAgY29uc3QgdGVuc29ySW5kZXggPSB4LnRlbnNvckluZGV4O1xuICAgICAgdGhpcy5vdXRwdXRMYXllcnMucHVzaChsYXllcik7XG4gICAgICB0aGlzLm91dHB1dExheWVyc05vZGVJbmRpY2VzLnB1c2gobm9kZUluZGV4KTtcbiAgICAgIHRoaXMub3V0cHV0TGF5ZXJzVGVuc29ySW5kaWNlcy5wdXNoKHRlbnNvckluZGV4KTtcbiAgICB9XG5cbiAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IEFkZCBvdXRwdXQgbWFzayBjYWNoZSBjb2RlLlxuXG4gICAgLy8gQnVpbGQgdGhpcy5pbnB1dExheWVyczpcbiAgICBmb3IgKGNvbnN0IHggb2YgdGhpcy5pbnB1dHMpIHtcbiAgICAgIGNvbnN0IGxheWVyID0geC5zb3VyY2VMYXllcjtcbiAgICAgIGNvbnN0IG5vZGVJbmRleCA9IHgubm9kZUluZGV4O1xuICAgICAgY29uc3QgdGVuc29ySW5kZXggPSB4LnRlbnNvckluZGV4O1xuICAgICAgLypcbiAgICAgICAgSXQncyBzdXBwb3NlZCB0byBiZSBhbiBpbnB1dCBsYXllciwgc28gb25seSBvbmUgbm9kZVxuICAgICAgICBhbmQgb25lIHRlbnNvciBvdXRwdXQuXG4gICAgICAqL1xuICAgICAgZ2VuZXJpY191dGlscy5hc3NlcnQobm9kZUluZGV4ID09PSAwLCAnaW5wdXQgbGF5ZXIgaGFzID4xIG5vZGVzJyk7XG4gICAgICBnZW5lcmljX3V0aWxzLmFzc2VydCh0ZW5zb3JJbmRleCA9PT0gMCwgJ2lucHV0IGxheWVyIGhhcyA+MSB0ZW5zb3JzJyk7XG4gICAgICB0aGlzLmlucHV0TGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgICAgdGhpcy5pbnB1dExheWVyc05vZGVJbmRpY2VzLnB1c2gobm9kZUluZGV4KTtcbiAgICAgIHRoaXMuaW5wdXRMYXllcnNUZW5zb3JJbmRpY2VzLnB1c2godGVuc29ySW5kZXgpO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIHRoaXMuaW5wdXROYW1lcyBhbmQgdGhpcy5vdXRwdXROYW1lcy5cbiAgICB0aGlzLmlucHV0TmFtZXMgPSBbXTtcbiAgICB0aGlzLm91dHB1dE5hbWVzID0gW107XG4gICAgdGhpcy5mZWVkSW5wdXRTaGFwZXMgPSBbXTtcbiAgICB0aGlzLmZlZWRJbnB1dE5hbWVzID0gW107XG4gICAgdGhpcy5mZWVkT3V0cHV0TmFtZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5wdXRMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5pbnB1dExheWVyc1tpXTtcbiAgICAgIC8vIENoZWNrIHRoYXQgbGF5ZXIgaXMgYW4gSW5wdXRMYXllci5cbiAgICAgIGlmICghKGxheWVyIGluc3RhbmNlb2YgSW5wdXRMYXllcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnB1dCBsYXllcnMgdG8gYSBMYXllcnNNb2RlbCBtdXN0IGJlIElucHV0TGF5ZXIgb2JqZWN0cy4gJyArXG4gICAgICAgICAgICBgUmVjZWl2ZWQgaW5wdXRzOiAke2FyZ3MuaW5wdXRzfS4gYCArXG4gICAgICAgICAgICBgSW5wdXQgJHtpfSAoMC1iYXNlZCkgb3JpZ2luYXRlcyBgICtcbiAgICAgICAgICAgIGBmcm9tIGxheWVyIHR5cGUgJHtsYXllci5nZXRDbGFzc05hbWUoKX0uYCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlucHV0TmFtZXMucHVzaChsYXllci5uYW1lKTtcbiAgICAgIHRoaXMuZmVlZElucHV0U2hhcGVzLnB1c2gobGF5ZXIuYmF0Y2hJbnB1dFNoYXBlKTtcblxuICAgICAgdGhpcy5mZWVkSW5wdXROYW1lcy5wdXNoKGxheWVyLm5hbWUpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMub3V0cHV0TGF5ZXJzKSB7XG4gICAgICB0aGlzLm91dHB1dE5hbWVzLnB1c2gobGF5ZXIubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnRlcm5hbElucHV0U2hhcGVzID0gdGhpcy5pbnB1dHMubWFwKHggPT4geC5zaGFwZSk7XG4gICAgdGhpcy5pbnRlcm5hbE91dHB1dFNoYXBlcyA9IHRoaXMub3V0cHV0cy5tYXAoeCA9PiB4LnNoYXBlKTtcblxuICAgIC8qXG4gICAgICBDb250YWluZXJfbm9kZXM6IHNldCBvZiBub2RlcyBpbmNsdWRlZCBpbiB0aGUgZ3JhcGggKG5vdCBhbGwgbm9kZXNcbiAgICAgIGluY2x1ZGVkIGluIHRoZSBsYXllcnMgYXJlIHJlbGV2YW50IHRvIHRoZSBjdXJyZW50IGdyYXBoKS5cbiAgICAqL1xuICAgIC8vIGlkcyBvZiBhbGwgbm9kZXMgcmVsZXZhbnQgdG8gdGhlIENvbnRhaW5lcjpcbiAgICBjb25zdCBub2Rlc0RlcHRoczoge1tub2RlSUQ6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgICAvLyBUbyByZWNvdmVyIG5vZGVzIGZyb20gdGhlaXIgSUQuXG4gICAgY29uc3Qgbm9kZUlEVG9Ob2RlOiB7W25vZGVJRDogc3RyaW5nXTogTm9kZX0gPSB7fTtcbiAgICBjb25zdCBsYXllcnNEZXB0aHM6IHtbbGF5ZXJJRDogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICAgIC8vIFRvIGxheWVycyBmcm9tIHRoZWlyIElELlxuICAgIGNvbnN0IGxheWVySURUb0xheWVyOiB7W2xheWVySUQ6IHN0cmluZ106IExheWVyfSA9IHt9O1xuICAgIGNvbnN0IGxheWVySW5kaWNlczoge1tsYXllcklEOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gICAgY29uc3Qgbm9kZXNJbkRlY3JlYXNpbmdEZXB0aDogTm9kZVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYSBtYXAgb2YgdGhlIGdyYXBoIG9mIGxheWVycy5cbiAgICAgKlxuICAgICAqIFRoaXMgcmVjdXJzaXZlbHkgdXBkYXRlcyB0aGUgbWFwIGBsYXllckluZGljZXNgLFxuICAgICAqIHRoZSBsaXN0IGBub2Rlc0luRGVjcmVhc2luZ0RlcHRoYCBhbmQgdGhlIHNldCBgY29udGFpbmVyTm9kZXNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRlbnNvciBTb21lIHRlbnNvciBpbiBhIGdyYXBoLlxuICAgICAqIEBwYXJhbSBmaW5pc2hlZE5vZGVzIFNldCBvZiBub2RlcyB3aG9zZSBzdWJncmFwaHMgaGF2ZSBiZWVuIHRyYXZlcnNlZFxuICAgICAqICAgICAgICAgY29tcGxldGVseS4gVXNlZnVsIHRvIHByZXZlbnQgZHVwbGljYXRlZCB3b3JrLlxuICAgICAqIEBwYXJhbSBub2Rlc0luUHJvZ3Jlc3MgU2V0IG9mIG5vZGVzIHRoYXQgYXJlIGN1cnJlbnRseSBhY3RpdmUgb24gdGhlXG4gICAgICogICAgICAgICByZWN1cnNpb24gc3RhY2suIFVzZWZ1bCB0byBkZXRlY3QgY3ljbGVzLlxuICAgICAqIEBwYXJhbSBsYXllciBMYXllciBmcm9tIHdoaWNoIGB0ZW5zb3JgIGNvbWVzIGZyb20uIElmIG5vdCBwcm92aWRlZCxcbiAgICAgKiAgIHdpbGwgYmUgb2J0YWluZWQgZnJvbSB0ZW5zb3Iuc291cmNlTGF5ZXIuXG4gICAgICogQHBhcmFtIG5vZGVJbmRleCBOb2RlIGluZGV4IGZyb20gd2hpY2ggYHRlbnNvcmAgY29tZXMgZnJvbS5cbiAgICAgKiBAcGFyYW0gdGVuc29ySW5kZXggVGVuc29ySW5kZXggZnJvbSB3aGljaCBgdGVuc29yYCBjb21lcyBmcm9tLlxuICAgICAqXG4gICAgICogQGV4Y2VwdGlvbiBSdW50aW1lRXJyb3IgaWYgYSBjeWNsZSBpcyBkZXRlY3RlZC5cbiAgICAgKi9cbiAgICBjb25zdCBidWlsZE1hcE9mR3JhcGggPVxuICAgICAgICAodGVuc29yOiBTeW1ib2xpY1RlbnNvciwgZmluaXNoZWROb2RlczogTm9kZVtdLCBub2Rlc0luUHJvZ3Jlc3M6IE5vZGVbXSxcbiAgICAgICAgIGxheWVyPzogTGF5ZXIsIG5vZGVJbmRleD86IG51bWJlciwgdGVuc29ySW5kZXg/OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAobGF5ZXIgPT0gbnVsbCB8fCBub2RlSW5kZXggPT0gbnVsbCB8fCB0ZW5zb3JJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICBsYXllciA9IHRlbnNvci5zb3VyY2VMYXllcjtcbiAgICAgICAgICAgIG5vZGVJbmRleCA9IHRlbnNvci5ub2RlSW5kZXg7XG4gICAgICAgICAgICB0ZW5zb3JJbmRleCA9IHRlbnNvci50ZW5zb3JJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGxheWVyLmluYm91bmROb2Rlc1tub2RlSW5kZXhdO1xuXG4gICAgICAgICAgLy8gUHJldmVudCBjeWNsZXMuXG4gICAgICAgICAgaWYgKG5vZGVzSW5Qcm9ncmVzcy5pbmRleE9mKG5vZGUpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHRlbnNvciAke3RlbnNvci5uYW1lfSBhdCBsYXllciBcIiR7bGF5ZXIubmFtZX1cIiBgICtcbiAgICAgICAgICAgICAgICAnaXMgcGFydCBvZiBhIGN5Y2xlLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERvbid0IHJlcGVhdCB3b3JrIGZvciBzaGFyZWQgc3ViZ3JhcGhzXG4gICAgICAgICAgaWYgKGZpbmlzaGVkTm9kZXMuaW5kZXhPZihub2RlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVcGRhdGUgY29udGFpbmVyTm9kZXMuXG4gICAgICAgICAgdGhpcy5jb250YWluZXJOb2Rlcy5hZGQoQ29udGFpbmVyLm5vZGVLZXkobGF5ZXIsIG5vZGVJbmRleCkpO1xuXG4gICAgICAgICAgLy8gU3RvcmUgdGhlIHRyYXZlcnNhbCBvcmRlciBmb3IgbGF5ZXIgc29ydGluZy5cbiAgICAgICAgICBpZiAoIShsYXllci5pZCBpbiBsYXllckluZGljZXMpKSB7XG4gICAgICAgICAgICBsYXllckluZGljZXNbbGF5ZXIuaWRdID0gT2JqZWN0LmtleXMobGF5ZXJJbmRpY2VzKS5sZW5ndGg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vZGVzSW5Qcm9ncmVzcy5pbmRleE9mKG5vZGUpID09PSAtMSkge1xuICAgICAgICAgICAgbm9kZXNJblByb2dyZXNzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUHJvcGFnYXRlIHRvIGFsbCBwcmV2aW91cyB0ZW5zb3JzIGNvbm5lY3RlZCB0byB0aGlzIG5vZGUuXG4gICAgICAgICAgY29uc3QgbnVtSW5ib3VuZExheWVycyA9IG5vZGUuaW5ib3VuZExheWVycy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1JbmJvdW5kTGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBub2RlLmlucHV0VGVuc29yc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gbm9kZS5pbmJvdW5kTGF5ZXJzW2ldO1xuICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbm9kZS5ub2RlSW5kaWNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHRlbnNvckluZGV4ID0gbm9kZS50ZW5zb3JJbmRpY2VzW2ldO1xuICAgICAgICAgICAgYnVpbGRNYXBPZkdyYXBoKFxuICAgICAgICAgICAgICAgIHgsIGZpbmlzaGVkTm9kZXMsIG5vZGVzSW5Qcm9ncmVzcywgbGF5ZXIsIG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICB0ZW5zb3JJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpbmlzaGVkTm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB3aGlsZSAobm9kZXNJblByb2dyZXNzLmluZGV4T2Yobm9kZSkgPj0gMCkge1xuICAgICAgICAgICAgbm9kZXNJblByb2dyZXNzLnNwbGljZShub2Rlc0luUHJvZ3Jlc3MuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGVzSW5EZWNyZWFzaW5nRGVwdGgucHVzaChub2RlKTtcbiAgICAgICAgfTtcblxuICAgIGNvbnN0IGZpbmlzaGVkTm9kZXM6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IG5vZGVzSW5Qcm9ncmVzczogTm9kZVtdID0gW107XG4gICAgZm9yIChjb25zdCB4IG9mIHRoaXMub3V0cHV0cykge1xuICAgICAgYnVpbGRNYXBPZkdyYXBoKHgsIGZpbmlzaGVkTm9kZXMsIG5vZGVzSW5Qcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmV2ZXJzZWROb2Rlc0luRGVjcmVhc2luZ0RlcHRoID1cbiAgICAgICAgbm9kZXNJbkRlY3JlYXNpbmdEZXB0aC5zbGljZSgpLnJldmVyc2UoKTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgcmV2ZXJzZWROb2Rlc0luRGVjcmVhc2luZ0RlcHRoKSB7XG4gICAgICBub2RlSURUb05vZGVbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgLy8gSWYgdGhlIGRlcHRoIGlzIG5vdCBzZXQsIHRoZSBub2RlIGhhcyBubyBvdXRib3VuZCBub2RlcyAoZGVwdGggMCkuXG4gICAgICBpZiAoIShub2RlLmlkIGluIG5vZGVzRGVwdGhzKSkge1xuICAgICAgICBub2Rlc0RlcHRoc1tub2RlLmlkXSA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgZGVwdGggPSBub2Rlc0RlcHRoc1tub2RlLmlkXTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBkZXB0aCBvZiB0aGUgY29ycmVzcG9uZGluZyBsYXllclxuICAgICAgY29uc3QgcHJldmlvdXNEZXB0aCA9XG4gICAgICAgICAgKGxheWVyc0RlcHRoc1tub2RlLm91dGJvdW5kTGF5ZXIuaWRdID09IG51bGwgP1xuICAgICAgICAgICAgICAgMCA6XG4gICAgICAgICAgICAgICBsYXllcnNEZXB0aHNbbm9kZS5vdXRib3VuZExheWVyLmlkXSk7XG5cbiAgICAgIC8qXG4gICAgICAgIElmIHdlJ3ZlIHNlZW4gdGhpcyBsYXllciBiZWZvcmUgYXQgYSBoaWdoZXIgZGVwdGgsIHdlIHNob3VsZCB1c2UgdGhhdFxuICAgICAgICBkZXB0aCBpbnN0ZWFkIG9mIHRoZSBub2RlIGRlcHRoLiAgVGhpcyBpcyBuZWNlc3NhcnkgZm9yIHNoYXJlZCBsYXllcnNcbiAgICAgICAgdGhhdCBoYXZlIGlucHV0cyBhdCBkaWZmZXJlbnQgZGVwdGggbGV2ZWxzIGluIHRoZSBncmFwaC5cbiAgICAgICovXG4gICAgICBkZXB0aCA9IE1hdGgubWF4KGRlcHRoLCBwcmV2aW91c0RlcHRoKTtcbiAgICAgIGxheWVyc0RlcHRoc1tub2RlLm91dGJvdW5kTGF5ZXIuaWRdID0gZGVwdGg7XG4gICAgICBsYXllcklEVG9MYXllcltub2RlLm91dGJvdW5kTGF5ZXIuaWRdID0gbm9kZS5vdXRib3VuZExheWVyO1xuICAgICAgbm9kZXNEZXB0aHNbbm9kZS5pZF0gPSBkZXB0aDtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBkZXB0aCBvZiBpbmJvdW5kIG5vZGVzLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmluYm91bmRMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5ib3VuZExheWVyID0gbm9kZS5pbmJvdW5kTGF5ZXJzW2ldO1xuICAgICAgICBjb25zdCBub2RlSW5kZXggPSBub2RlLm5vZGVJbmRpY2VzW2ldO1xuICAgICAgICBjb25zdCBpbmJvdW5kTm9kZSA9IGluYm91bmRMYXllci5pbmJvdW5kTm9kZXNbbm9kZUluZGV4XTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNEZXB0aCA9XG4gICAgICAgICAgICAobm9kZXNEZXB0aHNbaW5ib3VuZE5vZGUuaWRdID09IG51bGwgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzRGVwdGhzW2luYm91bmROb2RlLmlkXSk7XG4gICAgICAgIG5vZGVzRGVwdGhzW2luYm91bmROb2RlLmlkXSA9IE1hdGgubWF4KGRlcHRoICsgMSwgcHJldmlvdXNEZXB0aCk7XG4gICAgICAgIG5vZGVJRFRvTm9kZVtpbmJvdW5kTm9kZS5pZF0gPSBpbmJvdW5kTm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCdWlsZCBhIGRpY3Qge2RlcHRoOiBsaXN0IG9mIG5vZGVzIHdpdGggdGhpcyBkZXB0aH1cbiAgICBjb25zdCBub2Rlc0J5RGVwdGg6IHtbZGVwdGg6IHN0cmluZ106IE5vZGVbXX0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IG5vZGVJRCBpbiBub2Rlc0RlcHRocykge1xuICAgICAgY29uc3QgZGVwdGggPSBub2Rlc0RlcHRoc1tub2RlSURdO1xuICAgICAgaWYgKCEoZGVwdGggaW4gbm9kZXNCeURlcHRoKSkge1xuICAgICAgICBub2Rlc0J5RGVwdGhbZGVwdGhdID0gW107XG4gICAgICB9XG4gICAgICBub2Rlc0J5RGVwdGhbZGVwdGhdLnB1c2gobm9kZUlEVG9Ob2RlW25vZGVJRF0pO1xuICAgIH1cblxuICAgIC8vIEJ1aWxkIGEgZGljdCB7ZGVwdGg6IGxpc3Qgb2YgbGF5ZXJzIHdpdGggdGhpcyBkZXB0aH1cbiAgICBjb25zdCBsYXllcnNCeURlcHRoOiB7W2RlcHRoOiBzdHJpbmddOiBMYXllcltdfSA9IHt9O1xuICAgIGZvciAoY29uc3QgbGF5ZXJJRCBpbiBsYXllcnNEZXB0aHMpIHtcbiAgICAgIGNvbnN0IGRlcHRoID0gbGF5ZXJzRGVwdGhzW2xheWVySURdO1xuICAgICAgaWYgKCEoZGVwdGggaW4gbGF5ZXJzQnlEZXB0aCkpIHtcbiAgICAgICAgbGF5ZXJzQnlEZXB0aFtkZXB0aF0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGxheWVyc0J5RGVwdGhbZGVwdGhdLnB1c2gobGF5ZXJJRFRvTGF5ZXJbbGF5ZXJJRF0pO1xuICAgIH1cblxuICAgIC8vIEdldCBzb3J0ZWQgbGlzdCBvZiBsYXllciBkZXB0aHMuXG4gICAgbGV0IGRlcHRoS2V5cyA9IE9iamVjdC5rZXlzKGxheWVyc0J5RGVwdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoZ2VuZXJpY191dGlscy5yZXZlcnNlTnVtYmVyQ29tcGFyZSk7XG5cbiAgICAvLyBTZXQgdGhpcy5sYXllcnMgYW5kIHRoaXMubGF5ZXJzQnlEZXB0aC5cbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZGVwdGggb2YgZGVwdGhLZXlzKSB7XG4gICAgICBjb25zdCBsYXllcnNGb3JEZXB0aCA9IGxheWVyc0J5RGVwdGhbZGVwdGhdO1xuICAgICAgLy8gQ29udGFpbmVyLmxheWVycyBuZWVkcyB0byBoYXZlIGEgZGV0ZXJtaW5pc3RpYyBvcmRlcjpcbiAgICAgIC8vIGhlcmUgd2Ugb3JkZXIgdGhlbSBieSB0cmF2ZXJzYWwgb3JkZXIuXG4gICAgICBsYXllcnNGb3JEZXB0aC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFJbmRleCA9IGxheWVySW5kaWNlc1thLmlkXTtcbiAgICAgICAgY29uc3QgYkluZGV4ID0gbGF5ZXJJbmRpY2VzW2IuaWRdO1xuICAgICAgICBpZiAoYUluZGV4IDwgYkluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhSW5kZXggPiBiSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnNGb3JEZXB0aCkge1xuICAgICAgICBpZiAobGF5ZXIgaW5zdGFuY2VvZiBDb250YWluZXIpIHtcbiAgICAgICAgICB0aGlzLmludGVybmFsQ29udGFpbmVyUmVmcy5wdXNoKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXllcnNCeURlcHRoID0gbGF5ZXJzQnlEZXB0aDtcblxuICAgIC8vIEdldCBzb3J0ZWQgbGlzdCBvZiBub2RlIGRlcHRocztcbiAgICBkZXB0aEtleXMgPSBPYmplY3Qua2V5cyhub2Rlc0J5RGVwdGgpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KGdlbmVyaWNfdXRpbHMucmV2ZXJzZU51bWJlckNvbXBhcmUpO1xuXG4gICAgLy8gQ2hlY2sgdGhhdCBhbGwgdGVuc29ycyByZXF1aXJlZCBhcmUgY29tcHV0YWJsZS5cbiAgICAvLyBjb21wdXRhYmxlX3RlbnNvcnM6IGFsbCB0ZW5zb3JzIGluIHRoZSBncmFwaFxuICAgIC8vIHRoYXQgY2FuIGJlIGNvbXB1dGVkIGZyb20gdGhlIGlucHV0cyBwcm92aWRlZC5cbiAgICBjb25zdCBjb21wdXRhYmxlVGVuc29ycyA9IHRoaXMuaW5wdXRzLnNsaWNlKCk7XG5cbiAgICAvLyBUbyBwcm92aWRlIGEgYmV0dGVyIGVycm9yIG1zZy5cbiAgICBjb25zdCBsYXllcnNXaXRoQ29tcGxldGVJbnB1dDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRlcHRoIG9mIGRlcHRoS2V5cykge1xuICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzQnlEZXB0aFtkZXB0aF0pIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBub2RlLm91dGJvdW5kTGF5ZXI7XG4gICAgICAgIGlmIChsYXllciAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB4IG9mIG5vZGUuaW5wdXRUZW5zb3JzKSB7XG4gICAgICAgICAgICBpZiAoY29tcHV0YWJsZVRlbnNvcnMuaW5kZXhPZih4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBHcmFwaCBkaXNjb25uZWN0ZWQ6IGNhbm5vdCBvYnRhaW4gdmFsdWUgZm9yIHRlbnNvciAke3h9YCArXG4gICAgICAgICAgICAgICAgICBgIGF0IGxheWVyIFwiJHtsYXllci5uYW1lfVwiLiBgICtcbiAgICAgICAgICAgICAgICAgICdUaGUgZm9sbG93aW5nIHByZXZpb3VzIGxheWVycyB3ZXJlIGFjY2Vzc2VkIHdpdGhvdXQgJyArXG4gICAgICAgICAgICAgICAgICBgaXNzdWU6ICR7bGF5ZXJzV2l0aENvbXBsZXRlSW5wdXR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAoY29uc3QgeCBvZiBub2RlLm91dHB1dFRlbnNvcnMpIHtcbiAgICAgICAgICAgIGNvbXB1dGFibGVUZW5zb3JzLnB1c2goeCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxheWVyc1dpdGhDb21wbGV0ZUlucHV0LnB1c2gobGF5ZXIubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdGhpcy5jb250YWluZXJOb2RlcyBhbmQgdGhpcy5ub2Rlc0J5RGVwdGguXG4gICAgdGhpcy5ub2Rlc0J5RGVwdGggPSBub2Rlc0J5RGVwdGg7XG5cbiAgICAvLyBFbnN1cmUgbmFtZSB1bmljaXR5LCB3aGljaCB3aWxsIGJlIGNydWNpYWwgZm9yIHNlcmlhbGl6YXRpb25cbiAgICAvLyAoc2luY2Ugc2VyaWFsaXplZCBub2RlcyByZWZlciB0byBsYXllcnMgYnkgdGhlaXIgbmFtZSkuXG4gICAgY29uc3QgYWxsTmFtZXMgPSB0aGlzLmxheWVycy5tYXAoeCA9PiB4Lm5hbWUpO1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBhbGxOYW1lcykge1xuICAgICAgY29uc3QgbnVtT2NjdXJyZW5jZXMgPSBhbGxOYW1lcy5maWx0ZXIoeCA9PiB4ID09PSBuYW1lKS5sZW5ndGg7XG4gICAgICBpZiAobnVtT2NjdXJyZW5jZXMgIT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgICAgIGBUaGUgbmFtZSBcIiR7bmFtZX1cIiBpcyB1c2VkICR7bnVtT2NjdXJyZW5jZXN9IHRpbWVzIGAgK1xuICAgICAgICAgICAgJ2luIHRoZSBtb2RlbC4gQWxsIGxheWVyIG5hbWVzIHNob3VsZCBiZSB1bmlxdWUuIExheWVyIG5hbWVzOiAnICtcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGFsbE5hbWVzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTGF5ZXIgcGFyYW1ldGVycy5cbiAgICAvLyBUaGUgbmV3IGNvbnRhaW5lciBzdGFydHMgd2l0aCBhIHNpbmdsZSBpbmJvdW5kIG5vZGVcbiAgICAvLyBmb3IgaXRzIGlucHV0cywgYW5kIG5vIG91dGJvdW5kIG5vZGVzLlxuICAgIC8vIFdpbGwgYmUgYXBwZW5kZWQgdG8gYnkgZnV0dXJlIGNhbGxzIHRvIGFwcGx5KCkuXG4gICAgdGhpcy5vdXRib3VuZE5vZGVzID0gW107XG4gICAgLy8gV2lsbCBiZSBhcHBlbmRlZCB0byBiZWxvdywgYW5kIGJ5IGZ1dHVyZSBjYWxscyB0byBhcHBseSgpLlxuICAgIHRoaXMuaW5ib3VuZE5vZGVzID0gW107XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5vZGUgbGlua2luZyBpbnRlcm5hbCBpbnB1dHMgdG8gaW50ZXJuYWwgb3V0cHV0cy5cbiAgICAvLyAoVGhpcyBjYWxsIGhhcyBzaWRlIGVmZmVjdHMuKVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBOb2RlKHtcbiAgICAgIG91dGJvdW5kTGF5ZXI6IHRoaXMsXG4gICAgICBpbmJvdW5kTGF5ZXJzOiBbXSxcbiAgICAgIG5vZGVJbmRpY2VzOiBbXSxcbiAgICAgIHRlbnNvckluZGljZXM6IFtdLFxuICAgICAgaW5wdXRUZW5zb3JzOiB0aGlzLmlucHV0cyxcbiAgICAgIG91dHB1dFRlbnNvcnM6IHRoaXMub3V0cHV0cyxcbiAgICAgIGlucHV0TWFza3M6IHRoaXMuaW5wdXRzLm1hcCh4ID0+IG51bGwpLFxuICAgICAgb3V0cHV0TWFza3M6IHRoaXMub3V0cHV0cy5tYXAoeCA9PiBudWxsKSxcbiAgICAgIGlucHV0U2hhcGVzOiB0aGlzLmlucHV0cy5tYXAoeCA9PiB4LnNoYXBlKSxcbiAgICAgIG91dHB1dFNoYXBlczogdGhpcy5vdXRwdXRzLm1hcCh4ID0+IHguc2hhcGUpXG4gICAgfSk7XG4gICAgdGhpcy5idWlsdCA9IHRydWU7XG4gICAgdGhpcy5fcmVmQ291bnQgPSAxOyAgLy8gVGhlIHJlZiBjb3VudCBvZiBhIGNvbnRhaW5lciBhbHdheXMgc3RhcnQgYXQgMS5cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBhc3NlcnROb3REaXNwb3NlZCgpIHtcbiAgICBpZiAodGhpcy5fcmVmQ291bnQgPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29udGFpbmVyICcke3RoaXMubmFtZX0nIGlzIGFscmVhZHkgZGlzcG9zZWQuYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gZGlzcG9zZSBhIExheWVyc01vZGVsJ3Mgd2VpZ2h0cy5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZGVjcmVhc2UgdGhlIHJlZmVyZW5jZSBjb3VudCBvZiB0aGUgTGF5ZXJzTW9kZWwgb2JqZWN0IGJ5IDEuXG4gICAqXG4gICAqIEEgTGF5ZXJzTW9kZWwgaXMgcmVmZXJlbmNlLWNvdW50ZWQuIEl0cyByZWZlcmVuY2UgY291bnQgaXMgaW5jcmVtZW50ZWQgYnkgMVxuICAgKiB3aGVuIGl0IGlzIGZpcnN0IGNvbnN0cnVjdGVkIGFuZCB3aGVuIGl0IGlzIHVzZWQgYXMgYSBMYXllciBvZiBhbm90aGVyXG4gICAqIExheWVyc01vZGVsLlxuICAgKlxuICAgKiBJZiB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIGEgTGF5ZXJzTW9kZWwgYmVjb21lcyAwLCB0aGUgYGRpc3Bvc2VgIG1ldGhvZCBvZlxuICAgKiBhbGwgaXRzIGNvbnN0aXR1ZW50IGBMYXllcmBzIHdpbGwgYmUgY2FsbGVkLlxuICAgKlxuICAgKiBOb3RlOiBJZiB0aGUgcmVmZXJlbmNlIGNvdW50IGlzIGdyZWF0ZXIgdGhhbiAwIGFmdGVyIHRoZSBkZWNyZW1lbnQsIHRoZVxuICAgKiBgZGlzcG9zZWAgbWV0aG9kIG9mIGl0cyBjb25zdGl0dWVudCBgTGF5ZXJgcyB3aWxsICpub3QqIGJlIGNhbGxlZC5cbiAgICpcbiAgICogQWZ0ZXIgYSBMYXllcnNNb2RlbCBpcyBkaXNwb3NlZCwgaXQgY2Fubm90IGJlIHVzZWQgaW4gY2FsbHMgc3VjaCBhc1xuICAgKiAncHJlZGljdGAsIGBldmFsdWF0ZWAgb3IgYGZpdGAgYW55bW9yZS5cbiAgICpcbiAgICogQHJldHVybnMgQSBEaXNwb3NlUmVzdWx0IE9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICAgKiAgIC0gcmVmQ291bnRBZnRlckRpc3Bvc2U6IFRoZSByZWZlcmVuY2UgY291bnQgb2YgdGhlIExheWVyc01vZGVsIGFmdGVyIHRoaXNcbiAgICogICAgIGBkaXNwb3NlKClgIGNhbGwuXG4gICAqICAgLSBudW1EaXNwb3NlZFZhcmlhYmxlczogTnVtYmVyIG9mIGB0Zi5WYXJpYWJsZWBzIChpLmUuLCB3ZWlnaHRzKSBkaXNwb3NlZFxuICAgKiAgICAgZHVyaW5nIHRoaXMgYGRpc3Bvc2UoKWAgY2FsbC5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBsYXllciBpcyBub3QgYnVpbHQgeWV0LCBvciBpZiB0aGUgTGF5ZXJzTW9kZWwgaGFzXG4gICAqICAgYWxyZWFkeSBiZWVuIGRpc3Bvc2VkLlxuICAgKi9cbiAgb3ZlcnJpZGUgZGlzcG9zZSgpOiBEaXNwb3NlUmVzdWx0IHtcbiAgICB0aGlzLmFzc2VydE5vdERpc3Bvc2VkKCk7XG4gICAgY29uc3QgcmVzdWx0OlxuICAgICAgICBEaXNwb3NlUmVzdWx0ID0ge3JlZkNvdW50QWZ0ZXJEaXNwb3NlOiBudWxsLCBudW1EaXNwb3NlZFZhcmlhYmxlczogMH07XG4gICAgaWYgKC0tdGhpcy5fcmVmQ291bnQgPT09IDApIHtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgcmVzdWx0Lm51bURpc3Bvc2VkVmFyaWFibGVzICs9IGxheWVyLmRpc3Bvc2UoKS5udW1EaXNwb3NlZFZhcmlhYmxlcztcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbCBkaXNwb3NlIG9uIGVhY2ggaW50ZXJuYWxseSBjcmVhdGVkIGNvbnRhaW5lciBsYXllciBhZ2FpbiB0byBlbnN1cmVcbiAgICAgIC8vIHRoZWlyIHJlZkNvdW50cyBoaXQgemVybyBhbmQgdGhlaXIgdGVuc29ycyBhcmUgc3Vic2VxdWVudGx5IGRlbGV0ZWQuXG4gICAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiB0aGlzLmludGVybmFsQ29udGFpbmVyUmVmcykge1xuICAgICAgICByZXN1bHQubnVtRGlzcG9zZWRWYXJpYWJsZXMgKz0gY29udGFpbmVyLmRpc3Bvc2UoKS5udW1EaXNwb3NlZFZhcmlhYmxlcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJlZkNvdW50QWZ0ZXJEaXNwb3NlID0gdGhpcy5fcmVmQ291bnQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldCB0cmFpbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaW5hYmxlXztcbiAgfVxuXG4gIG92ZXJyaWRlIHNldCB0cmFpbmFibGUodHJhaW5hYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAoKGxheWVyIGFzIGFueSkuX3RyYWluYWJsZVdlaWdodHMgYXMgTGF5ZXJWYXJpYWJsZVtdKVxuICAgICAgICAgIC5mb3JFYWNoKHcgPT4gdy50cmFpbmFibGUgPSB0cmFpbmFibGUpO1xuICAgIH0pO1xuICAgIHRoaXMudHJhaW5hYmxlXyA9IHRyYWluYWJsZTtcbiAgfVxuXG4gIG92ZXJyaWRlIGdldCB0cmFpbmFibGVXZWlnaHRzKCk6IExheWVyVmFyaWFibGVbXSB7XG4gICAgLy8gUG9ydGluZyBOb3RlOiBUaGlzIGNoZWNrIGJlbG93IGlzIHRvIHByZXZlbnQgZXJyb3JzIHdoZXJlIHRoZVxuICAgIC8vICAgX3RyYWluYWJsZVdlaWdodHMgaW5oZXJpdGVkIGZyb20gdGhlIHBhcmVudCBjbGFzcyAoTGF5ZXIpIGdldHNcbiAgICAvLyAgIGluYWR2ZXJ0ZW50bHkgdXNlZC5cbiAgICBpZiAodGhpcy5fdHJhaW5hYmxlV2VpZ2h0cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnQ29udGFpbmVyIGluc3RhbmNlIHVuZXhwZWN0ZWRseSBjb250YWlucyBfdHJhaW5hYmxlV2VpZ2h0cy4nICtcbiAgICAgICAgICAnVGhlIHRyYWluYWJsZSB3ZWlnaHRzIG9mIGEgQ29udGFpbmVyIGFyZSBhIHVuaW9uIG9mIHRoZSAnICtcbiAgICAgICAgICAndHJhaW5hYmxlIHdlaWdodHMgb2YgaXRzIGNvbnNpdHVlbnQgTGF5ZXJzLiBJdHMgb3duICcgK1xuICAgICAgICAgICdfdHJhaW5hYmxlV2VpZ2h0cyBtdXN0IHJlbWFpbiBhbiBlbXB0eSBBcnJheS4nKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudHJhaW5hYmxlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGxldCB3ZWlnaHRzOiBMYXllclZhcmlhYmxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICB3ZWlnaHRzID0gd2VpZ2h0cy5jb25jYXQobGF5ZXIudHJhaW5hYmxlV2VpZ2h0cyk7XG4gICAgfVxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0IG5vblRyYWluYWJsZVdlaWdodHMoKTogTGF5ZXJWYXJpYWJsZVtdIHtcbiAgICBjb25zdCB3ZWlnaHRzOiBMYXllclZhcmlhYmxlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICB3ZWlnaHRzLnB1c2goLi4ubGF5ZXIubm9uVHJhaW5hYmxlV2VpZ2h0cyk7XG4gICAgfVxuICAgIGlmICghdGhpcy50cmFpbmFibGUpIHtcbiAgICAgIGNvbnN0IHRyYWluYWJsZVdlaWdodHM6IExheWVyVmFyaWFibGVbXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgICB0cmFpbmFibGVXZWlnaHRzLnB1c2goLi4ubGF5ZXIudHJhaW5hYmxlV2VpZ2h0cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhaW5hYmxlV2VpZ2h0cy5jb25jYXQod2VpZ2h0cyk7XG4gICAgfVxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0IHdlaWdodHMoKTogTGF5ZXJWYXJpYWJsZVtdIHtcbiAgICByZXR1cm4gdGhpcy50cmFpbmFibGVXZWlnaHRzLmNvbmNhdCh0aGlzLm5vblRyYWluYWJsZVdlaWdodHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCBsYXllciB3ZWlnaHRzIGZyb20gYSBKU09OIG9iamVjdC5cbiAgICpcbiAgICogUG9ydGluZyBOb3RlOiBIREY1IHdlaWdodCBmaWxlcyBjYW5ub3QgYmUgZGlyZWN0bHkgbG9hZGVkIGluIEphdmFTY3JpcHQgL1xuICAgKiAgIFR5cGVTY3JpcHQuIFRoZSB1dGlsaXR5IHNjcmlwdCBhdCBgc2NyaXB0cy9weWtlcmFzLnB5YCBvZmZlcnMgbWVhbnNcbiAgICogICB0byBjb252ZXJ0IHRoZW0gaW50byBKU09OIHN0cmluZ3MgY29tcGF0aWJsZSB3aXRoIHRoaXMgbWV0aG9kLlxuICAgKiBQb3J0aW5nIE5vdGU6IFRlbnNvckZsb3cuanMgTGF5ZXJzIHN1cHBvcnRzIG9ubHkgbG9hZGluZyBieSBuYW1lIGN1cnJlbnRseS5cbiAgICpcbiAgICogQHBhcmFtIHdlaWdodHMgQSBKU09OIG1hcHBpbmcgd2VpZ2h0IG5hbWVzIHRvIHdlaWdodCB2YWx1ZXMgYXMgbmVzdGVkXG4gICAqICAgYXJyYXlzIG9mIG51bWJlcnMsIG9yIGEgYE5hbWVkVGVuc29yTWFwYCwgaS5lLiwgYSBKU09OIG1hcHBpbmcgd2VpZ2h0XG4gICAqICAgbmFtZXMgdG8gYHRmLlRlbnNvcmAgb2JqZWN0cy5cbiAgICogQHBhcmFtIHN0cmljdCBSZXF1aXJlIHRoYXQgdGhlIHByb3ZpZGVkIHdlaWdodHMgZXhhY3RseSBtYXRjaCB0aG9zZVxuICAgKiAgIHJlcXVpcmVkIGJ5IHRoZSBjb250YWluZXIuICBEZWZhdWx0OiBgdHJ1ZWAuICBQYXNzaW5nIGBmYWxzZWAgbWVhbnMgdGhhdFxuICAgKiAgIGV4dHJhIHdlaWdodHMgYW5kIG1pc3Npbmcgd2VpZ2h0cyB3aWxsIGJlIHNpbGVudGx5IGlnbm9yZWQuXG4gICAqL1xuICBsb2FkV2VpZ2h0cyh3ZWlnaHRzOiBOYW1lZFRlbnNvck1hcCwgc3RyaWN0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IG5hbWVUb1dlaWdodDoge1tuYW1lOiBzdHJpbmddOiBMYXllclZhcmlhYmxlfSA9IHt9O1xuICAgIGxldCB0b3RhbFdlaWdodHNDb3VudCA9IDA7XG4gICAgY29uc3QgbW9kZWxJc0tlcmFzU2F2ZWRNb2RlbEZvcm1hdCA9IGlzS2VyYXNTYXZlZE1vZGVsRm9ybWF0KHdlaWdodHMpO1xuICAgIGlmIChtb2RlbElzS2VyYXNTYXZlZE1vZGVsRm9ybWF0KSB7XG4gICAgICB0aGlzLnBhcnNlV2VpZ2h0cyh3ZWlnaHRzKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgd2VpZ2h0cyBmcm9tIGtlcmFzIHYzLlxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgIGZvciAoY29uc3QgW2luZGV4LCB3ZWlnaHRdIG9mIGxheWVyLndlaWdodHMuZW50cmllcygpKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBuYW1lIHRvIGxheWVyTmFtZS9pbmRleC5cbiAgICAgICAgLy8gZS5nLiBkZW5zZS8wLCBkZW5zZS8xLCBkZW5zZV8xLzAsIGRlbnNlXzEvMVxuICAgICAgICBjb25zdCBwYXJzZWROYW1lID0gbW9kZWxJc0tlcmFzU2F2ZWRNb2RlbEZvcm1hdCA/XG4gICAgICAgICAgICBgJHt3ZWlnaHQubmFtZS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5qb2luKCcvJykgKyAnLyd9JHtpbmRleH1gIDpcbiAgICAgICAgICAgIHdlaWdodC5vcmlnaW5hbE5hbWU7XG4gICAgICAgIGlmIChuYW1lVG9XZWlnaHRbcGFyc2VkTmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKGBEdXBsaWNhdGUgd2VpZ2h0IG5hbWU6ICR7cGFyc2VkTmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBuYW1lVG9XZWlnaHRbcGFyc2VkTmFtZV0gPSB3ZWlnaHQ7XG4gICAgICAgIHRvdGFsV2VpZ2h0c0NvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd2VpZ2h0VmFsdWVUdXBsZXM6IEFycmF5PFtMYXllclZhcmlhYmxlLCBUZW5zb3JdPiA9IFtdO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiB3ZWlnaHRzKSB7XG4gICAgICAvLyBURiAyLjIuMCBhZGRlZCBjZWxsIG5hbWUgdG8gdGhlIHdlaWdodCBuYW1lIGluIHRoZSBmb3JtYXQgb2ZcbiAgICAgIC8vIGxheWVyX25hbWUvY2VsbF9uYW1lL3dlaWdodF9uYW1lLCB3ZSBuZWVkIHRvIHJlbW92ZVxuICAgICAgLy8gdGhlIGlubmVyIGNlbGwgbmFtZS5cbiAgICAgIGxldCB2YWxpZGF0ZWROYW1lID0gbmFtZTtcbiAgICAgIGlmIChuYW1lVG9XZWlnaHRbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBuYW1lLnNwbGl0KCcvJyk7XG4gICAgICAgIGNvbnN0IHNob3J0ZW5OYW1lQXJyYXkgPVxuICAgICAgICAgICAgdG9rZW5zLnNsaWNlKDAsIC0yKS5jb25jYXQoW3Rva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV1dKTtcbiAgICAgICAgdmFsaWRhdGVkTmFtZSA9IHNob3J0ZW5OYW1lQXJyYXkuam9pbignLycpO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWVUb1dlaWdodFt2YWxpZGF0ZWROYW1lXSAhPSBudWxsKSB7XG4gICAgICAgIHdlaWdodFZhbHVlVHVwbGVzLnB1c2goW25hbWVUb1dlaWdodFt2YWxpZGF0ZWROYW1lXSwgd2VpZ2h0c1tuYW1lXV0pO1xuICAgICAgfSBlbHNlIGlmIChzdHJpY3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgUHJvdmlkZWQgd2VpZ2h0IGRhdGEgaGFzIG5vIHRhcmdldCB2YXJpYWJsZTogJHtuYW1lfWApO1xuICAgICAgfVxuICAgICAgZGVsZXRlIG5hbWVUb1dlaWdodFt2YWxpZGF0ZWROYW1lXTtcbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAvLyBDaGVjayB0aGF0IGFsbCB3ZWlnaHRzIGFyZSBzZXQuXG4gICAgICBjb25zdCB1bnNldE5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBuYW1lIGluIG5hbWVUb1dlaWdodCkge1xuICAgICAgICB1bnNldE5hbWVzLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAodW5zZXROYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYCR7dW5zZXROYW1lcy5sZW5ndGh9IG9mICR7XG4gICAgICAgICAgICAgICAgdG90YWxXZWlnaHRzQ291bnR9IHdlaWdodHMgYXJlIG5vdCBzZXQ6IGAgK1xuICAgICAgICAgICAgYCR7dW5zZXROYW1lc31gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYXRjaFNldFZhbHVlKHdlaWdodFZhbHVlVHVwbGVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJzZVdlaWdodHMod2VpZ2h0czogTmFtZWRUZW5zb3JNYXApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBPYmplY3Qua2V5cyh3ZWlnaHRzKSkge1xuICAgICAgY29uc3QgbGlzdFBhcnRzID0ga2V5LnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBsaXN0ID0gWyd2YXJzJywgJ2xheWVyX2NoZWNrcG9pbnRfZGVwZW5kZW5jaWVzJ107XG4gICAgICAvLyBGb3Iga2VyYXMgdjMsIHRoZSB3ZWlnaHRzIG5hbWUgYXJlIHNhdmVkIGJhc2VkIG9uIHRoZSBmb2xkZXIgc3RydWN0dXJlLlxuICAgICAgLy8gZS5nLiBfYmFja2JvbmUvX2xheWVyX2NoZWNrcG9pbnRfZGVwZW5kZW5jaWVzL3RyYW5zZm9ybWVyL19zZWxmLi4vXG4gICAgICAvLyBfb3V0cHV0X2RlbnNlL3ZhcnMvMFxuICAgICAgLy8gVGhlcmVmb3JlIHdlIGRpc2NhcmQgdGhlIGB2YXJzYCBhbmQgYGxheWVyX2NoZWNrcG9pbnRfZGVwZW5jaWVzYCB3aXRoaW5cbiAgICAgIC8vIHRoZSBzYXZlZCBuYW1lIGFuZCBvbmx5IGtlZXBzIHRoZSBsYXllciBuYW1lIGFuZCB3ZWlnaHRzLlxuICAgICAgLy8gVGhpcyBjYW4gaGVscCB0byBtYXBwaW5nIHRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgbGF5ZXJzIGFuZCBsb2FkIGVhY2hcbiAgICAgIC8vIHdlaWdodCBhY2NvcmRpbmdseS5cbiAgICAgIGNvbnN0IG5ld0tleSA9IGxpc3RQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoc3RyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHIuc3RhcnRzV2l0aCgnXycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihzdHIgPT4gIWxpc3QuaW5jbHVkZXMoc3RyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLycpO1xuICAgICAgaWYgKG5ld0tleSAhPT0ga2V5KSB7XG4gICAgICAgIHdlaWdodHNbbmV3S2V5XSA9IHdlaWdodHNba2V5XTtcbiAgICAgICAgZGVsZXRlIHdlaWdodHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXRpbCBzaGFyZWQgYmV0d2VlbiBkaWZmZXJlbnQgc2VyaWFsaXphdGlvbiBtZXRob2RzLlxuICAgKiBAcmV0dXJucyBMYXllcnNNb2RlbCBjb25maWcgd2l0aCBLZXJhcyB2ZXJzaW9uIGluZm9ybWF0aW9uIGFkZGVkLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZWRDb25maWcoKTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0IHtcbiAgICBjb25zdCB0aGVDb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIGNvbnN0IG1vZGVsQ29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fTtcbiAgICBtb2RlbENvbmZpZ1snY2xhc3NOYW1lJ10gPSB0aGlzLmdldENsYXNzTmFtZSgpO1xuICAgIG1vZGVsQ29uZmlnWydjb25maWcnXSA9IHRoZUNvbmZpZztcbiAgICBtb2RlbENvbmZpZ1sna2VyYXNWZXJzaW9uJ10gPSBgdGZqcy1sYXllcnMgJHtsYXllcnNWZXJzaW9ufWA7XG4gICAgLy8gVE9ETyhuaWVsc2VuZSk6IFJlcGxhY2Ugc29tZXRoaW5nIGxpa2UgSy5iYWNrZW5kKCkgb25jZVxuICAgIC8vIHBvc3NpYmxlLlxuICAgIG1vZGVsQ29uZmlnWydiYWNrZW5kJ10gPSAnVGVuc29yRmxvdy5qcyc7XG4gICAgcmV0dXJuIG1vZGVsQ29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKU09OIHN0cmluZyBjb250YWluaW5nIHRoZSBuZXR3b3JrIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIFRvIGxvYWQgYSBuZXR3b3JrIGZyb20gYSBKU09OIHNhdmUgZmlsZSwgdXNlXG4gICAqIG1vZGVscy5tb2RlbEZyb21KU09OKGpzb25TdHJpbmcpO1xuICAgKiBAcGFyYW0gZXh0cmFKc29uQXJncyBVbnVzZWQgaW4gdGZqcy1sYXllcnMsIG1haW50YWluZWQgZm9yIFB5S2VyYXNcbiAgICogQHBhcmFtIHJldHVyblN0cmluZyBXaGV0aGVyIHRoZSByZXR1cm4gdmFsdWUgc2hvdWxkIGJlIHN0cmluZ2lmaWVkXG4gICAqICAgIChkZWZhdWx0OiBgdHJ1ZWApLlxuICAgKiBAcmV0dXJucyBhIEpTT04gc3RyaW5nIGlmIGByZXR1cm5TdHJpbmdgIChkZWZhdWx0KSwgb3IgYSBKU09OIG9iamVjdCBpZlxuICAgKiAgIGAhcmV0dXJuU3RyaW5nYC5cbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdG9KU09OKHVudXNlZD86IGFueSwgcmV0dXJuU3RyaW5nID0gdHJ1ZSk6IHN0cmluZ3xQeUpzb25EaWN0IHtcbiAgICBjb25zdCBtb2RlbENvbmZpZyA9IGNvbnZlcnRUc1RvUHl0aG9uaWModGhpcy51cGRhdGVkQ29uZmlnKCkpIGFzIFB5SnNvbkRpY3Q7XG4gICAgcmV0dXJuIHJldHVyblN0cmluZyA/IEpTT04uc3RyaW5naWZ5KG1vZGVsQ29uZmlnKSA6IG1vZGVsQ29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgdGhlIG1vZGVsIG9uIG5ldyBpbnB1dHMuXG4gICAqXG4gICAqIEluIHRoaXMgY2FzZSBgY2FsbGAganVzdCByZWFwcGxpZXMgYWxsIG9wcyBpbiB0aGUgZ3JhcGggdG8gdGhlIG5ldyBpbnB1dHNcbiAgICogKGUuZy4gYnVpbGQgYSBuZXcgY29tcHV0YXRpb25hbCBncmFwaCBmcm9tIHRoZSBwcm92aWRlZCBpbnB1dHMpLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRzIEEgdGVuc29yIG9yIGxpc3Qgb2YgdGVuc29ycy5cbiAgICogQHBhcmFtIG1hc2sgQSBtYXNrIG9yIGxpc3Qgb2YgbWFza3MuIEEgbWFzayBjYW4gYmUgZWl0aGVyIGEgdGVuc29yIG9yIG51bGxcbiAgICogICAobm8gbWFzaykuXG4gICAqXG4gICAqIEByZXR1cm4gQSB0ZW5zb3IgaWYgdGhlcmUgaXMgYSBzaW5nbGUgb3V0cHV0LCBvciBhIGxpc3Qgb2YgdGVuc29ycyBpZiB0aGVyZVxuICAgKiAgIGFyZSBtb3JlIHRoYW4gb25lIG91dHB1dHMuXG4gICAqL1xuICBvdmVycmlkZSBjYWxsKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBrd2FyZ3M6IEt3YXJncyk6IFRlbnNvcnxUZW5zb3JbXSB7XG4gICAgcmV0dXJuIHRpZHkoKCkgPT4ge1xuICAgICAgaW5wdXRzID0gZ2VuZXJpY191dGlscy50b0xpc3QoaW5wdXRzKTtcbiAgICAgIGNvbnN0IGZlZWREaWN0ID0gbmV3IEZlZWREaWN0KCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZlZWREaWN0LmFkZCh0aGlzLmlucHV0c1tpXSwgaW5wdXRzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleGVjdXRlKHRoaXMub3V0cHV0cywgZmVlZERpY3QsIGt3YXJncykgYXMgVGVuc29yIHwgVGVuc29yW107XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgYW4gb3V0cHV0IG1hc2sgdGVuc29yLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRzIFRlbnNvciBvciBsaXN0IG9mIHRlbnNvcnMuXG4gICAqIEBwYXJhbSBtYXNrIFRlbnNvciBvciBsaXN0IG9mIHRlbnNvcnMuXG4gICAqXG4gICAqIEByZXR1cm4gbnVsbCBvciBhIHRlbnNvciAob3IgbGlzdCBvZiB0ZW5zb3JzLCBvbmUgcGVyIG91dHB1dCB0ZW5zb3Igb2YgdGhlXG4gICAqIGxheWVyKS5cbiAgICovXG4gIG92ZXJyaWRlIGNvbXB1dGVNYXNrKGlucHV0czogVGVuc29yfFRlbnNvcltdLCBtYXNrPzogVGVuc29yfFRlbnNvcltdKTogVGVuc29yXG4gICAgICB8VGVuc29yW10ge1xuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGlucHV0cyA9IGdlbmVyaWNfdXRpbHMudG9MaXN0KGlucHV0cyk7XG4gICAgICBsZXQgbWFza3M6IFRlbnNvcltdO1xuICAgICAgaWYgKG1hc2sgPT0gbnVsbCkge1xuICAgICAgICBtYXNrcyA9IGdlbmVyaWNfdXRpbHMucHlMaXN0UmVwZWF0KG51bGwsIGlucHV0cy5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFza3MgPSBnZW5lcmljX3V0aWxzLnRvTGlzdChtYXNrKTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE8obWljaGFlbHRlcnJ5KTogQWRkIHN1cHBvcnQgZm9yIG1hc2sgY2FjaGluZy5cbiAgICAgIHJldHVybiB0aGlzLnJ1bkludGVybmFsR3JhcGgoaW5wdXRzLCBtYXNrcylbMV07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIG91dHB1dCBzaGFwZSBvZiB0aGUgbGF5ZXIuXG4gICAqXG4gICAqIEFzc3VtZXMgdGhhdCB0aGUgbGF5ZXIgd2lsbCBiZSBidWlsdCB0byBtYXRjaCB0aGF0IGlucHV0IHNoYXBlIHByb3ZpZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRTaGFwZSBBIHNoYXBlICh0dXBsZSBvZiBpbnRlZ2Vycykgb3IgYSBsaXN0IG9mIHNoYXBlIHR1cGxlc1xuICAgKiAgIChvbmUgcGVyIG91dHB1dCB0ZW5zb3Igb2YgdGhlIGxheWVyKS4gU2hhcGUgdHVwbGVzIGNhbiBpbmNsdWRlIG51bGwgZm9yXG4gICAqICAgZnJlZSBkaW1lbnNpb25zLCBpbnN0ZWFkIG9mIGFuIGludGVnZXIuXG4gICAqL1xuICBvdmVycmlkZSBjb21wdXRlT3V0cHV0U2hhcGUoaW5wdXRTaGFwZTogU2hhcGV8U2hhcGVbXSk6IFNoYXBlfFNoYXBlW10ge1xuICAgIGNvbnN0IGlucHV0U2hhcGVzID0gdHlwZXNfdXRpbHMubm9ybWFsaXplU2hhcGVMaXN0KGlucHV0U2hhcGUpO1xuICAgIGlmIChpbnB1dFNoYXBlcy5sZW5ndGggIT09IHRoaXMuaW5wdXRMYXllcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBpbnB1dFNoYXBlIGFyZ3VtZW50ICR7aW5wdXRTaGFwZX06IGAgK1xuICAgICAgICAgIGBtb2RlbCBoYXMgJHt0aGlzLmlucHV0TGF5ZXJzLmxlbmd0aH0gdGVuc29yIGlucHV0cy5gKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IEFkZCBjYWNoaW5nXG4gICAgY29uc3QgbGF5ZXJzVG9PdXRwdXRTaGFwZXM6IHtbc2hhcGVLZXk6IHN0cmluZ106IFNoYXBlfSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRTaGFwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5pbnB1dExheWVyc1tpXTtcbiAgICAgIGNvbnN0IGlucHV0U2hhcGUgPSBpbnB1dFNoYXBlc1tpXTtcbiAgICAgIC8vIEl0J3MgYW4gaW5wdXQgbGF5ZXI6IGNvbXB1dGVPdXRwdXRTaGFwZSBpcyBpZGVudGl0eSxcbiAgICAgIC8vIGFuZCB0aGVyZSBpcyBvbmx5IG9uZSBub2RlIGFuZCBvbmUgdGVuc29yIG91dHB1dC5cbiAgICAgIGNvbnN0IHNoYXBlS2V5ID0gbGF5ZXIubmFtZSArICdfMF8wJztcbiAgICAgIGxheWVyc1RvT3V0cHV0U2hhcGVzW3NoYXBlS2V5XSA9IGlucHV0U2hhcGU7XG4gICAgfVxuXG4gICAgY29uc3QgZGVwdGhLZXlzID0gT2JqZWN0LmtleXModGhpcy5ub2Rlc0J5RGVwdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KGdlbmVyaWNfdXRpbHMucmV2ZXJzZU51bWJlckNvbXBhcmUpO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBub2RlcywgYnkgZGVwdGggbGV2ZWwuXG4gICAgaWYgKGRlcHRoS2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICBmb3IgKGNvbnN0IGRlcHRoIG9mIGRlcHRoS2V5cykge1xuICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMubm9kZXNCeURlcHRoW2RlcHRoXTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBhbHdheXMgYSBzaW5nbGUgbGF5ZXIsIG5ldmVyIGEgbGlzdC5cbiAgICAgICAgICBjb25zdCBsYXllciA9IG5vZGUub3V0Ym91bmRMYXllcjtcbiAgICAgICAgICBpZiAodGhpcy5pbnB1dExheWVycy5tYXAoeCA9PiB4LmlkKS5pbmRleE9mKGxheWVyLmlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIFdlJ3ZlIGFscmVhZHkgY292ZXJlZCB0aGUgaW5wdXQgbGF5ZXJzIGEgZmV3IGxpbmVzIGFib3ZlLlxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFBvdGVudGlhbGx5IHJlZHVuZGFudCBsaXN0LCBzYW1lIHNpemUgb2Ygbm9kZS5pbnB1dFRlbnNvcnMuXG4gICAgICAgICAgY29uc3QgaW5wdXRTaGFwZXM6IFNoYXBlW10gPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuaW5ib3VuZExheWVycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgaW5ib3VuZExheWVyID0gbm9kZS5pbmJvdW5kTGF5ZXJzW2pdO1xuICAgICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbm9kZS5ub2RlSW5kaWNlc1tqXTtcbiAgICAgICAgICAgIGNvbnN0IHRlbnNvckluZGV4ID0gbm9kZS50ZW5zb3JJbmRpY2VzW2pdO1xuICAgICAgICAgICAgY29uc3Qgc2hhcGVLZXkgPSBgJHtpbmJvdW5kTGF5ZXIubmFtZX1fJHtub2RlSW5kZXh9XyR7dGVuc29ySW5kZXh9YDtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0U2hhcGUgPSBsYXllcnNUb091dHB1dFNoYXBlc1tzaGFwZUtleV07XG4gICAgICAgICAgICBpbnB1dFNoYXBlcy5wdXNoKGlucHV0U2hhcGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG91dHB1dFNoYXBlID0gbGF5ZXIuY29tcHV0ZU91dHB1dFNoYXBlKFxuICAgICAgICAgICAgICBnZW5lcmljX3V0aWxzLnNpbmdsZXRvbk9yQXJyYXkoaW5wdXRTaGFwZXMpKTtcblxuICAgICAgICAgIGNvbnN0IG91dHB1dFNoYXBlcyA9IHR5cGVzX3V0aWxzLm5vcm1hbGl6ZVNoYXBlTGlzdChvdXRwdXRTaGFwZSk7XG4gICAgICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbGF5ZXIuaW5ib3VuZE5vZGVzLmluZGV4T2Yobm9kZSk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvdXRwdXRTaGFwZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlS2V5ID0gYCR7bGF5ZXIubmFtZX1fJHtub2RlSW5kZXh9XyR7an1gO1xuICAgICAgICAgICAgbGF5ZXJzVG9PdXRwdXRTaGFwZXNbc2hhcGVLZXldID0gb3V0cHV0U2hhcGVzW2pdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlYWQgZmluYWwgb3V0cHV0IHNoYXBlcyBmcm9tIGxheWVyc1RvT3V0cHV0U2hhcGVzLlxuICAgIGNvbnN0IG91dHB1dFNoYXBlczogU2hhcGVbXSA9IFtdO1xuICAgIGNvbnN0IG91dHB1dFNoYXBlS2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3V0cHV0TGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsYXllciA9IHRoaXMub3V0cHV0TGF5ZXJzW2ldO1xuICAgICAgY29uc3Qgbm9kZUluZGV4ID0gdGhpcy5vdXRwdXRMYXllcnNOb2RlSW5kaWNlc1tpXTtcbiAgICAgIGNvbnN0IHRlbnNvckluZGV4ID0gdGhpcy5vdXRwdXRMYXllcnNUZW5zb3JJbmRpY2VzW2ldO1xuICAgICAgY29uc3Qgc2hhcGVLZXkgPSBgJHtsYXllci5uYW1lfV8ke25vZGVJbmRleH1fJHt0ZW5zb3JJbmRleH1gO1xuICAgICAgb3V0cHV0U2hhcGVLZXlzLnB1c2goc2hhcGVLZXkpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0U2hhcGVLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBvdXRwdXRTaGFwZUtleXNbaV07XG4gICAgICBnZW5lcmljX3V0aWxzLmFzc2VydChrZXkgaW4gbGF5ZXJzVG9PdXRwdXRTaGFwZXMpO1xuICAgICAgb3V0cHV0U2hhcGVzLnB1c2gobGF5ZXJzVG9PdXRwdXRTaGFwZXNba2V5XSk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBVcGRhdGUgY2FjaGVcbiAgICByZXR1cm4gZ2VuZXJpY191dGlscy5zaW5nbGV0b25PckFycmF5KG91dHB1dFNoYXBlcyk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgb3V0cHV0IHRlbnNvcnMgZm9yIG5ldyBpbnB1dHMuXG4gICAqXG4gICAqIE5vdGU6XG4gICAqICAgLSBFeHBlY3RzIGBpbnB1dHNgIHRvIGJlIGEgbGlzdCAocG90ZW50aWFsbHkgd2l0aCAxIGVsZW1lbnQpLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRzIExpc3Qgb2YgdGVuc29yc1xuICAgKiBAcGFyYW0gbWFza3MgTGlzdCBvZiBtYXNrcyAodGVuc29ycyBvciBudWxsKS5cbiAgICogQHJldHVybiBUaHJlZSBsaXN0czogb3V0cHV0VGVuc29ycywgb3V0cHV0TWFza3MsIG91dHB1dFNoYXBlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHJ1bkludGVybmFsR3JhcGgoaW5wdXRzOiBUZW5zb3JbXSwgbWFza3M/OiBUZW5zb3JbXSk6XG4gICAgICBbVGVuc29yW10sIFRlbnNvcltdLCBTaGFwZVtdXSB7XG4gICAgaWYgKG1hc2tzID09IG51bGwpIHtcbiAgICAgIG1hc2tzID0gZ2VuZXJpY191dGlscy5weUxpc3RSZXBlYXQobnVsbCwgaW5wdXRzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy8gRGljdGlvbmFyeSBtYXBwaW5nIHJlZmVyZW5jZSB0ZW5zb3JzIHRvIHR1cGxlc1xuICAgIC8vIChjb21wdXRlZCB0ZW5zb3IsIGNvbXB1dGUgbWFzaylcbiAgICAvLyB3ZSBhc3N1bWUgYSAxOjEgbWFwcGluZyBmcm9tIHRlbnNvciB0byBtYXNrXG4gICAgLy8gVE9ETzogcmFpc2UgZXhjZXB0aW9uIHdoZW4gYSBgLmNvbXB1dGVNYXNrKClgIGNhbGxcbiAgICAvLyBkb2VzIG5vdCByZXR1cm4gYSBsaXN0IHRoZSBzYW1lIHNpemUgYXMgYGNhbGxgXG4gICAgY29uc3QgdGVuc29yTWFwOiB7W3RlbnNvcklEOiBzdHJpbmddOiBbVGVuc29yLCBUZW5zb3JdfSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnB1dHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHggPSB0aGlzLmlucHV0c1tpXTtcbiAgICAgIGNvbnN0IHkgPSBpbnB1dHNbaV07XG4gICAgICBjb25zdCBtYXNrID0gbWFza3NbaV07XG4gICAgICB0ZW5zb3JNYXBbeC5pZF0gPSBbeSwgbWFza107XG4gICAgfVxuXG4gICAgY29uc3QgZGVwdGhLZXlzID0gT2JqZWN0LmtleXModGhpcy5ub2Rlc0J5RGVwdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KGdlbmVyaWNfdXRpbHMucmV2ZXJzZU51bWJlckNvbXBhcmUpO1xuICAgIGZvciAoY29uc3QgZGVwdGggb2YgZGVwdGhLZXlzKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMubm9kZXNCeURlcHRoW2RlcHRoXTtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAvLyBUaGlzIGlzIGFsd2F5cyBhIHNpbmdsZSBsYXllciwgbmV2ZXIgYSBsaXN0LlxuICAgICAgICBjb25zdCBsYXllciA9IG5vZGUub3V0Ym91bmRMYXllcjtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlSW5wdXRUZW5zb3JzID0gbm9kZS5pbnB1dFRlbnNvcnM7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU91dHB1dFRlbnNvcnMgPSBub2RlLm91dHB1dFRlbnNvcnM7XG5cbiAgICAgICAgLy8gSWYgYWxsIHByZXZpb3VzIGlucHV0IHRlbnNvcnMgYXJlIGF2YWlsYWJsZSBpbiB0ZW5zb3JNYXAsXG4gICAgICAgIC8vIHRoZW4gY2FsbCBub2RlLmluYm91bmRMYXllciBvbiB0aGVtLlxuICAgICAgICAvLyBMaXN0IG9mIHR1cGxlcyBbaW5wdXQsIG1hc2tdOlxuICAgICAgICBjb25zdCBjb21wdXRlZERhdGEgPSBuZXcgQXJyYXk8W1RlbnNvciwgVGVuc29yXT4oKTtcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIHJlZmVyZW5jZUlucHV0VGVuc29ycykge1xuICAgICAgICAgIGlmICh4LmlkIGluIHRlbnNvck1hcCkge1xuICAgICAgICAgICAgY29tcHV0ZWREYXRhLnB1c2godGVuc29yTWFwW3guaWRdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGVkRGF0YS5sZW5ndGggPT09IHJlZmVyZW5jZUlucHV0VGVuc29ycy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBUT0RPKG1pY2hhZWx0ZXJyeSk6IEFkZCBLLm5hbWVfc2NvcGUgaGVyZSwgaWYgd2UgbmVlZCBpdC5cbiAgICAgICAgICBsZXQga3dhcmdzOiBLd2FyZ3MgPSB7fTtcbiAgICAgICAgICBsZXQgY29tcHV0ZWRUZW5zb3JzOiBUZW5zb3JbXTtcbiAgICAgICAgICBsZXQgY29tcHV0ZWRNYXNrczogVGVuc29yW107XG4gICAgICAgICAgbGV0IG91dHB1dFRlbnNvcnM6IFRlbnNvcltdO1xuICAgICAgICAgIGxldCBvdXRwdXRNYXNrczogVGVuc29yW107XG4gICAgICAgICAgLy8gY2FsbCBsYXllclxuICAgICAgICAgIGlmIChub2RlLmNhbGxBcmdzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGt3YXJncyA9IG5vZGUuY2FsbEFyZ3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb21wdXRlZERhdGEubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBbY29tcHV0ZWRUZW5zb3IsIGNvbXB1dGVkTWFza10gPSBjb21wdXRlZERhdGFbMF07XG4gICAgICAgICAgICBpZiAoa3dhcmdzWydtYXNrJ10gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBrd2FyZ3NbJ21hc2snXSA9IGNvbXB1dGVkTWFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dFRlbnNvcnMgPVxuICAgICAgICAgICAgICAgIGdlbmVyaWNfdXRpbHMudG9MaXN0KGxheWVyLmNhbGwoY29tcHV0ZWRUZW5zb3IsIGt3YXJncykpO1xuICAgICAgICAgICAgb3V0cHV0TWFza3MgPSBnZW5lcmljX3V0aWxzLnRvTGlzdChcbiAgICAgICAgICAgICAgICBsYXllci5jb21wdXRlTWFzayhjb21wdXRlZFRlbnNvciwgY29tcHV0ZWRNYXNrKSk7XG4gICAgICAgICAgICBjb21wdXRlZFRlbnNvcnMgPSBbY29tcHV0ZWRUZW5zb3JdO1xuICAgICAgICAgICAgY29tcHV0ZWRNYXNrcyA9IFtjb21wdXRlZE1hc2tdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wdXRlZFRlbnNvcnMgPSBjb21wdXRlZERhdGEubWFwKHggPT4geFswXSk7XG4gICAgICAgICAgICBjb21wdXRlZE1hc2tzID0gY29tcHV0ZWREYXRhLm1hcCh4ID0+IHhbMV0pO1xuICAgICAgICAgICAgaWYgKGt3YXJnc1snbWFzayddID09IG51bGwpIHtcbiAgICAgICAgICAgICAga3dhcmdzWydtYXNrJ10gPSBjb21wdXRlZE1hc2tzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0VGVuc29ycyA9XG4gICAgICAgICAgICAgICAgZ2VuZXJpY191dGlscy50b0xpc3QobGF5ZXIuY2FsbChjb21wdXRlZFRlbnNvcnMsIGt3YXJncykpO1xuICAgICAgICAgICAgb3V0cHV0TWFza3MgPSBnZW5lcmljX3V0aWxzLnRvTGlzdChcbiAgICAgICAgICAgICAgICBsYXllci5jb21wdXRlTWFzayhjb21wdXRlZFRlbnNvcnMsIGNvbXB1dGVkTWFza3MpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobGF5ZXIuYWN0aXZpdHlSZWd1bGFyaXplcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0xheWVyc01vZGVsIGludm9jYXRpb24gd2l0aCBjb25jcmV0ZSBUZW5zb3IgdmFsdWUocykgaW4gdGhlICcgK1xuICAgICAgICAgICAgICAgICdwcmVzZW5jZSBvZiBhY3Rpdml0eSByZWd1bGFyaXplcihzKSBpcyBub3Qgc3VwcG9ydGVkIHlldC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBBZGQgbW9kZWwgdXBkYXRlcyBhbmQgbG9zc2VzXG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGVuc29yIG1hcC5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZU91dHB1dFRlbnNvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSByZWZlcmVuY2VPdXRwdXRUZW5zb3JzW2ldO1xuICAgICAgICAgICAgY29uc3QgeSA9IG91dHB1dFRlbnNvcnNbaV07XG4gICAgICAgICAgICBjb25zdCBtYXNrID0gb3V0cHV0TWFza3NbaV07XG4gICAgICAgICAgICB0ZW5zb3JNYXBbeC5pZF0gPSBbeSwgbWFza107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0cHV0VGVuc29yczogVGVuc29yW10gPSBbXTtcbiAgICBjb25zdCBvdXRwdXRNYXNrczogVGVuc29yW10gPSBbXTtcbiAgICBjb25zdCBvdXRwdXRTaGFwZXM6IFNoYXBlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHggb2YgdGhpcy5vdXRwdXRzKSB7XG4gICAgICBnZW5lcmljX3V0aWxzLmFzc2VydChcbiAgICAgICAgICB4LmlkIGluIHRlbnNvck1hcCwgYENvdWxkIG5vdCBjb21wdXRlIG91dHB1dCAke3gubmFtZX0gOiAke3guaWR9YCk7XG4gICAgICBjb25zdCBbdGVuc29yLCBtYXNrXSA9IHRlbnNvck1hcFt4LmlkXTtcbiAgICAgIG91dHB1dFNoYXBlcy5wdXNoKHRlbnNvci5zaGFwZSk7XG4gICAgICBvdXRwdXRUZW5zb3JzLnB1c2godGVuc29yKTtcbiAgICAgIG91dHB1dE1hc2tzLnB1c2gobWFzayk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhtaWNoYWVsdGVycnkpOiBBZGQgc3VwcG9ydCBmb3IgY2FjaGVzLlxuICAgIHJldHVybiBbb3V0cHV0VGVuc29ycywgb3V0cHV0TWFza3MsIG91dHB1dFNoYXBlc107XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgbWFwIG9mIGludGVybmFsIG5vZGUga2V5cyB0byBub2RlIG9yZGVyaW5nLlxuICAgKiBVc2VkIGluIHNlcmlhbGl6YWlvbiBhIG5vZGUgb3JkZXJpbmdzIG1heSBjaGFuZ2UgYXMgdW51c2VkIG5vZGVzIGFyZVxuICAgKiBkcm9wcGVkLiBQb3J0aW5nIE5vdGU6ICBUaGlzIGhlbHBlciBtZXRob2Qgd2FzIHB1bGxlZCBvdXQgb2YgZ2V0Q29uZmlnIHRvXG4gICAqIGltcHJvdmUgcmVhZGFiaWxpdHkuXG4gICAqIEBwYXJhbSBsYXllcnMgQW4gYXJyYXkgb2YgTGF5ZXJzIGluIHRoZSBtb2RlbC5cbiAgICogQHJldHVybnMgTWFwIG9mIE5vZGUgS2V5cyB0byBpbmRleCBvcmRlciB3aXRoaW4gdGhlIGxheWVyLlxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZE5vZGVDb252ZXJzaW9uTWFwKGxheWVyczogTGF5ZXJbXSk6IHtbbm9kZUtleTogc3RyaW5nXTogbnVtYmVyfSB7XG4gICAgY29uc3Qgbm9kZUNvbnZlcnNpb25NYXA6IHtbbm9kZUtleTogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xuICAgIGxldCBrZXB0Tm9kZXM6IG51bWJlcjtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICBrZXB0Tm9kZXMgPSBsYXllciBpbnN0YW5jZW9mIENvbnRhaW5lciA/IDEgOiAwO1xuICAgICAgZm9yIChsZXQgb3JpZ2luYWxOb2RlSW5kZXggPSAwO1xuICAgICAgICAgICBvcmlnaW5hbE5vZGVJbmRleCA8IGxheWVyLmluYm91bmROb2Rlcy5sZW5ndGg7IG9yaWdpbmFsTm9kZUluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgbm9kZUtleSA9IENvbnRhaW5lci5ub2RlS2V5KGxheWVyLCBvcmlnaW5hbE5vZGVJbmRleCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lck5vZGVzLmhhcyhub2RlS2V5KSkge1xuICAgICAgICAgIC8vIGkuZS4gd2UgbWFyayBpdCB0byBiZSBzYXZlZFxuICAgICAgICAgIG5vZGVDb252ZXJzaW9uTWFwW25vZGVLZXldID0ga2VwdE5vZGVzO1xuICAgICAgICAgIGtlcHROb2RlcyArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlQ29udmVyc2lvbk1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYSBsYXllciBiYXNlZCBvbiBlaXRoZXIgaXRzIG5hbWUgKHVuaXF1ZSkgb3IgaW5kZXguXG4gICAqXG4gICAqIEluZGljZXMgYXJlIGJhc2VkIG9uIG9yZGVyIG9mIGhvcml6b250YWwgZ3JhcGggdHJhdmVyc2FsIChib3R0b20tdXApLlxuICAgKlxuICAgKiBJZiBib3RoIGBuYW1lYCBhbmQgYGluZGV4YCBhcmUgc3BlY2lmaWVkLCBgaW5kZXhgIHRha2VzIHByZWNlZGVuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgbGF5ZXIuXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiBsYXllci5cbiAgICogQHJldHVybnMgQSBMYXllciBpbnN0YW5jZS5cbiAgICogQHRocm93cyBWYWx1ZUVycm9yOiBJbiBjYXNlIG9mIGludmFsaWQgbGF5ZXIgbmFtZSBvciBpbmRleC5cbiAgICpcbiAgICogQGRvYyB7XG4gICAqICAgIGhlYWRpbmc6ICdMYXllcnMnLFxuICAgKiAgICBzdWJoZWFkaW5nOiAnQ2xhc3NlcycsXG4gICAqICAgIG5hbWVzcGFjZTogJ2xheWVycycsXG4gICAqICAgIHN1YmNsYXNzZXM6IFsnTGF5ZXJzTW9kZWwnXVxuICAgKiB9XG4gICAqL1xuICBnZXRMYXllcihuYW1lOiBzdHJpbmcpOiBMYXllcjtcbiAgZ2V0TGF5ZXIoaW5kZXg6IG51bWJlcik6IExheWVyO1xuICBnZXRMYXllcihuYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBMYXllcjtcbiAgZ2V0TGF5ZXIobmFtZU9ySW5kZXg/OiBzdHJpbmd8bnVtYmVyLCBpbmRleD86IG51bWJlcik6IExheWVyIHtcbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmluZExheWVyKGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWVPckluZGV4ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoJ1Byb3ZpZGUgZWl0aGVyIGEgbGF5ZXIgbmFtZSBvciBsYXllciBpbmRleCcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lT3JJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZExheWVyKG5hbWVPckluZGV4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICBpZiAobGF5ZXIubmFtZSA9PT0gbmFtZU9ySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihgTm8gc3VjaCBsYXllcjogJHtuYW1lT3JJbmRleH1gKTtcbiAgfVxuXG4gIGZpbmRMYXllcihpbmRleDogbnVtYmVyKTogTGF5ZXIge1xuICAgIGlmICh0aGlzLmxheWVycy5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBXYXMgYXNrZWQgdG8gcmV0cmlldmUgbGF5ZXIgYXQgaW5kZXggJHtpbmRleH0sIGJ1dCBtb2RlbCBvbmx5IGAgK1xuICAgICAgICAgIGBoYXMgJHt0aGlzLmxheWVycy5sZW5ndGh9IGxheWVyKHMpLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcnNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIENvbnRhaW5lcidzIGN1cnJlbnQgbG9zcyB2YWx1ZXMuXG4gICAqXG4gICAqIFVzZWQgZm9yIHJlZ3VsYXJpemVycyBkdXJpbmcgdHJhaW5pbmcuXG4gICAqL1xuICBvdmVycmlkZSBjYWxjdWxhdGVMb3NzZXMoKTogU2NhbGFyW10ge1xuICAgIC8vIFBvcnRpbmcgTm9kZTogVGhpcyBpcyBhbiBhdWdtZW50YXRpb24gdG8gQ29udGFpbmVyLmxvc3MgaW4gUHlLZXJhcy5cbiAgICAvLyAgIEluIFB5S2VyYXMsIENvbnRhaW5lci5sb3NzIHJldHVybnMgc3ltYm9saWMgdGVuc29ycy4gSGVyZSBhIGNvbmNyZXRlXG4gICAgLy8gICBUZW5zb3IgKHNwZWNpZmljYWxseSBTY2FsYXIpIHZhbHVlcyBhcmUgcmV0dXJuZWQuIFRoaXMgaXMgZHVlIHRvIHRoZVxuICAgIC8vICAgaW1wZXJhdGl2ZSBiYWNrZW5kLlxuICAgIHJldHVybiB0aWR5KCgpID0+IHtcbiAgICAgIGNvbnN0IGxvc3NlczogU2NhbGFyW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZUluZGV4ID0gMDsgbm9kZUluZGV4IDwgbGF5ZXIuaW5ib3VuZE5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICArK25vZGVJbmRleCkge1xuICAgICAgICAgIGNvbnN0IG5vZGVLZXkgPSBDb250YWluZXIubm9kZUtleShsYXllciwgbm9kZUluZGV4KTtcbiAgICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2Rlcy5oYXMobm9kZUtleSkpIHtcbiAgICAgICAgICAgIGxvc3Nlcy5wdXNoKC4uLmxheWVyLmNhbGN1bGF0ZUxvc3NlcygpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBhbnkgdW5jb25kaXRpb25hbCBtb2RlbC1sZXZlbCBsb3NzZXM/XG4gICAgICByZXR1cm4gbG9zc2VzO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7bmFtZTogdGhpcy5uYW1lfTtcblxuICAgIC8vIEJ1aWxkIGEgbWFwIGZyb20gbGF5ZXIgdW5pcXVlIG5hbWUgKHNlbGYuX25vZGVfa2V5KVxuICAgIC8vIHRvIHRoZSBpbmRleCBvZiB0aGUgbm9kZXMgdGhhdCBhcmUgc2F2ZWQgaW4gdGhlIGNvbmZpZy5cbiAgICAvLyBPbmx5IG5vZGVzIGluIGNvbnRhaW5lcl9ub2RlcyBhcmUgc2F2ZWQuXG4gICAgY29uc3Qgbm9kZUNvbnZlcnNpb25NYXA6IHtbbm9kZUtleTogc3RyaW5nXTogbnVtYmVyfSA9XG4gICAgICAgIHRoaXMuYnVpbGROb2RlQ29udmVyc2lvbk1hcCh0aGlzLmxheWVycyk7XG5cbiAgICAvLyBTZXJpYWxpemUgYW5kIHNhdmUgdGhlIGxheWVycyBpbiBsYXllckNvbmZpZ3NcbiAgICBjb25zdCBsYXllckNvbmZpZ3MgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMubGF5ZXJzKSB7XG4gICAgICBjb25zdCBsYXllckNsYXNzTmFtZSA9IGxheWVyLmdldENsYXNzTmFtZSgpO1xuICAgICAgY29uc3QgbGF5ZXJDb25maWcgPSBsYXllci5nZXRDb25maWcoKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkSW5ib3VuZE5vZGVzID0gW107XG4gICAgICBmb3IgKGxldCBvcmlnaW5hbE5vZGVJbmRleCA9IDA7XG4gICAgICAgICAgIG9yaWdpbmFsTm9kZUluZGV4IDwgbGF5ZXIuaW5ib3VuZE5vZGVzLmxlbmd0aDsgb3JpZ2luYWxOb2RlSW5kZXgrKykge1xuICAgICAgICBjb25zdCBub2RlID0gbGF5ZXIuaW5ib3VuZE5vZGVzW29yaWdpbmFsTm9kZUluZGV4XTtcbiAgICAgICAgY29uc3Qgbm9kZUtleSA9IENvbnRhaW5lci5ub2RlS2V5KGxheWVyLCBvcmlnaW5hbE5vZGVJbmRleCk7XG4gICAgICAgIGxldCBrd2FyZ3MgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZXMuaGFzKG5vZGVLZXkpKSB7XG4gICAgICAgICAgLy8gVGhlIG5vZGUgaXMgcmVsZXZhbnQgdG8gdGhlIG1vZGVsOlxuICAgICAgICAgIC8vIGFkZCB0byBmaWx0ZXJlZEluYm91bmROb2Rlcy5cbiAgICAgICAgICBpZiAobm9kZS5jYWxsQXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobm9kZS5jYWxsQXJncyk7XG4gICAgICAgICAgICAgIGt3YXJncyA9IG5vZGUuY2FsbEFyZ3M7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgYExheWVyICR7bGF5ZXIubmFtZX0gd2FzIHBhc3NlZCBgICtcbiAgICAgICAgICAgICAgICAgIGBub24tc2VyaWFsaXphYmxlIGtleXdvcmQgYXJndW1lbnRzOiBgICtcbiAgICAgICAgICAgICAgICAgIGAke25vZGUuY2FsbEFyZ3N9LiBUaGV5IHdpbGwgbm90IGJlIGluY2x1ZGVkIGAgK1xuICAgICAgICAgICAgICAgICAgYGluIHRoZSBzZXJpYWxpemVkIG1vZGVsIChhbmQgdGh1cyB3aWxsIGJlIGAgK1xuICAgICAgICAgICAgICAgICAgYG1pc3NpbmcgYXQgZGVzZXJpYWxpemF0aW9uIHRpbWUpLmApO1xuICAgICAgICAgICAgICBrd2FyZ3MgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5vZGUuaW5ib3VuZExheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlRGF0YSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmluYm91bmRMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5ib3VuZExheWVyID0gbm9kZS5pbmJvdW5kTGF5ZXJzW2ldO1xuICAgICAgICAgICAgICBjb25zdCBub2RlSW5kZXggPSBub2RlLm5vZGVJbmRpY2VzW2ldO1xuICAgICAgICAgICAgICBjb25zdCB0ZW5zb3JJbmRleCA9IG5vZGUudGVuc29ySW5kaWNlc1tpXTtcbiAgICAgICAgICAgICAgY29uc3Qgbm9kZUtleSA9IENvbnRhaW5lci5ub2RlS2V5KGluYm91bmRMYXllciwgbm9kZUluZGV4KTtcbiAgICAgICAgICAgICAgbGV0IG5ld05vZGVJbmRleCA9IG5vZGVDb252ZXJzaW9uTWFwW25vZGVLZXldO1xuICAgICAgICAgICAgICBpZiAobmV3Tm9kZUluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlSW5kZXggPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGVEYXRhLnB1c2goXG4gICAgICAgICAgICAgICAgICBbaW5ib3VuZExheWVyLm5hbWUsIG5ld05vZGVJbmRleCwgdGVuc29ySW5kZXgsIGt3YXJnc10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyZWRJbmJvdW5kTm9kZXMucHVzaChub2RlRGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBkaWN0OiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7fTtcbiAgICAgIGRpY3RbJ25hbWUnXSA9IGxheWVyLm5hbWU7XG4gICAgICBkaWN0WydjbGFzc05hbWUnXSA9IGxheWVyQ2xhc3NOYW1lO1xuICAgICAgZGljdFsnY29uZmlnJ10gPSBsYXllckNvbmZpZztcbiAgICAgIGRpY3RbJ2luYm91bmROb2RlcyddID0gZmlsdGVyZWRJbmJvdW5kTm9kZXM7XG4gICAgICBsYXllckNvbmZpZ3MucHVzaChkaWN0KTtcbiAgICB9XG4gICAgY29uZmlnWydsYXllcnMnXSA9IGxheWVyQ29uZmlncztcbiAgICAvLyBHYXRoZXIgaW5mbyBhYm91dCBpbnB1dHMgYW5kIG91dHB1dHNcbiAgICBjb25zdCBtb2RlbElucHV0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnB1dExheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmlucHV0TGF5ZXJzW2ldO1xuICAgICAgY29uc3Qgbm9kZUluZGV4ID0gdGhpcy5pbnB1dExheWVyc05vZGVJbmRpY2VzW2ldO1xuXG4gICAgICBjb25zdCBub2RlS2V5ID0gQ29udGFpbmVyLm5vZGVLZXkobGF5ZXIsIG5vZGVJbmRleCk7XG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyTm9kZXMuaGFzKG5vZGVLZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IG5ld05vZGVJbmRleCA9IG5vZGVDb252ZXJzaW9uTWFwW25vZGVLZXldO1xuICAgICAgaWYgKG5ld05vZGVJbmRleCA9PT0gbnVsbCB8fCBuZXdOb2RlSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdOb2RlSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVuc29ySW5kZXggPSB0aGlzLmlucHV0TGF5ZXJzVGVuc29ySW5kaWNlc1tpXTtcbiAgICAgIG1vZGVsSW5wdXRzLnB1c2goW2xheWVyLm5hbWUsIG5ld05vZGVJbmRleCwgdGVuc29ySW5kZXhdKTtcbiAgICB9XG4gICAgY29uZmlnWydpbnB1dExheWVycyddID0gbW9kZWxJbnB1dHM7XG5cbiAgICBjb25zdCBtb2RlbE91dHB1dHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3V0cHV0TGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsYXllciA9IHRoaXMub3V0cHV0TGF5ZXJzW2ldO1xuICAgICAgY29uc3Qgbm9kZUluZGV4ID0gdGhpcy5vdXRwdXRMYXllcnNOb2RlSW5kaWNlc1tpXTtcblxuICAgICAgY29uc3Qgbm9kZUtleSA9IENvbnRhaW5lci5ub2RlS2V5KGxheWVyLCBub2RlSW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lck5vZGVzLmhhcyhub2RlS2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBuZXdOb2RlSW5kZXggPSBub2RlQ29udmVyc2lvbk1hcFtub2RlS2V5XTtcbiAgICAgIGlmIChuZXdOb2RlSW5kZXggPT09IG51bGwgfHwgbmV3Tm9kZUluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3Tm9kZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbnNvckluZGV4ID0gdGhpcy5vdXRwdXRMYXllcnNUZW5zb3JJbmRpY2VzW2ldO1xuICAgICAgbW9kZWxPdXRwdXRzLnB1c2goW2xheWVyLm5hbWUsIG5ld05vZGVJbmRleCwgdGVuc29ySW5kZXhdKTtcbiAgICB9XG4gICAgY29uZmlnWydvdXRwdXRMYXllcnMnXSA9IG1vZGVsT3V0cHV0cztcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlcyBhIExheWVyc01vZGVsIGZyb20gaXRzIGNvbmZpZyAob3V0cHV0IG9mIGBnZXRfY29uZmlnKClgKS5cbiAgICogQHBhcmFtIGNscyB0aGUgY2xhc3MgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSBjb25maWcgTGF5ZXJzTW9kZWwgY29uZmlnIGRpY3Rpb25hcnkuXG4gICAqIEBwYXJhbSBjdXN0b21PYmplY3RzIEFuIG9wdGlvbmFsIGRpY3Rpb25hcnkgb2YgY3VzdG9tIG9iamVjdHMuXG4gICAqIEBwYXJhbSBmYXN0V2VpZ2h0SW5pdCBPcHRpb25hbCBmbGFnIHRvIHVzZSBmYXN0IHdlaWdodCBpbml0aWFsaXphdGlvblxuICAgKiAgIGR1cmluZyBkZXNlcmlhbGl6YXRpb24uIFRoaXMgaXMgYXBwbGljYWJsZSB0byBjYXNlcyBpbiB3aGljaFxuICAgKiAgIHRoZSBpbml0aWFsaXphdGlvbiB3aWxsIGJlIGltbWVkaWF0ZWx5IG92ZXJ3cml0dGVuIGJ5IGxvYWRlZCB3ZWlnaHRcbiAgICogICB2YWx1ZXMuIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAqIEByZXR1cm5zIEEgTGF5ZXJzTW9kZWwgaW5zdGFuY2UuXG4gICAqIEB0aHJvd3MgVmFsdWVFcnJvcjogSW4gY2FzZSBvZiBpbXByb3Blcmx5IGZvcm1hdHRlZCBjb25maWcgZGljdC5cbiAgICovXG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgb3ZlcnJpZGUgZnJvbUNvbmZpZzxUIGV4dGVuZHMgc2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGU+KFxuICAgICAgY2xzOiBzZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZUNvbnN0cnVjdG9yPFQ+LFxuICAgICAgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QsXG4gICAgICBjdXN0b21PYmplY3RzID0ge30gYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0LFxuICAgICAgZmFzdFdlaWdodEluaXQgPSBmYWxzZSk6IFQge1xuICAgIC8vIExheWVyIGluc3RhbmNlcyBjcmVhdGVkIGR1cmluZ1xuICAgIC8vIHRoZSBncmFwaCByZWNvbnN0cnVjdGlvbiBwcm9jZXNzXG4gICAgY29uc3QgY3JlYXRlZExheWVyczoge1tsYXllck5hbWU6IHN0cmluZ106IExheWVyfSA9IHt9O1xuXG4gICAgLy8gRGljdGlvbmFyeSBtYXBwaW5nIGxheWVyIGluc3RhbmNlcyB0b1xuICAgIC8vIG5vZGUgZGF0YSB0aGF0IHNwZWNpZmllcyBhIGxheWVyIGNhbGwuXG4gICAgLy8gSXQgYWN0cyBhcyBhIHF1ZXVlIHRoYXQgbWFpbnRhaW5zIGFueSB1bnByb2Nlc3NlZFxuICAgIC8vIGxheWVyIGNhbGwgdW50aWwgaXQgYmVjb21lcyBwb3NzaWJsZSB0byBwcm9jZXNzIGl0XG4gICAgLy8gKGkuZS4gdW50aWwgdGhlIGlucHV0IHRlbnNvcnMgdG8gdGhlIGNhbGwgYWxsIGV4aXN0KS5cbiAgICBjb25zdCB1bnByb2Nlc3NlZE5vZGVzOiB7W2xheWVyOiBzdHJpbmddOiBUZW5zb3JLZXlXaXRoQXJnc0FycmF5W11bXX0gPSB7fTtcbiAgICBmdW5jdGlvbiBhZGRVbnByb2Nlc3NlZE5vZGUoXG4gICAgICAgIGxheWVyOiBMYXllciwgbm9kZURhdGE6IFRlbnNvcktleVdpdGhBcmdzQXJyYXlbXSkge1xuICAgICAgaWYgKCEobGF5ZXIubmFtZSBpbiB1bnByb2Nlc3NlZE5vZGVzKSkge1xuICAgICAgICB1bnByb2Nlc3NlZE5vZGVzW2xheWVyLm5hbWVdID0gW25vZGVEYXRhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVucHJvY2Vzc2VkTm9kZXNbbGF5ZXIubmFtZV0ucHVzaChub2RlRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc05vZGUobGF5ZXI6IExheWVyLCBub2RlRGF0YTogVGVuc29yS2V5V2l0aEFyZ3NBcnJheVtdKSB7XG4gICAgICBjb25zdCBpbnB1dFRlbnNvcnM6IFN5bWJvbGljVGVuc29yW10gPSBbXTtcbiAgICAgIGxldCBrd2FyZ3M7XG4gICAgICBmb3IgKGNvbnN0IGlucHV0RGF0YSBvZiBub2RlRGF0YSkge1xuICAgICAgICBjb25zdCBpbmJvdW5kTGF5ZXJOYW1lID0gaW5wdXREYXRhWzBdO1xuICAgICAgICBjb25zdCBpbmJvdW5kTm9kZUluZGV4ID0gaW5wdXREYXRhWzFdO1xuICAgICAgICBjb25zdCBpbmJvdW5kVGVuc29ySW5kZXggPSBpbnB1dERhdGFbMl07XG5cbiAgICAgICAga3dhcmdzID0gaW5wdXREYXRhWzNdID09IG51bGwgP1xuICAgICAgICAgICAge30gOlxuICAgICAgICAgICAgaW5wdXREYXRhWzNdIGFzIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdDtcbiAgICAgICAgaWYgKCEoaW5ib3VuZExheWVyTmFtZSBpbiBjcmVhdGVkTGF5ZXJzKSkge1xuICAgICAgICAgIGFkZFVucHJvY2Vzc2VkTm9kZShsYXllciwgbm9kZURhdGEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmJvdW5kTGF5ZXIgPSBjcmVhdGVkTGF5ZXJzW2luYm91bmRMYXllck5hbWVdO1xuICAgICAgICBpZiAoaW5ib3VuZExheWVyLmluYm91bmROb2Rlcy5sZW5ndGggPD0gaW5ib3VuZE5vZGVJbmRleCkge1xuICAgICAgICAgIGFkZFVucHJvY2Vzc2VkTm9kZShsYXllciwgbm9kZURhdGEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmJvdW5kTm9kZSA9IGluYm91bmRMYXllci5pbmJvdW5kTm9kZXNbaW5ib3VuZE5vZGVJbmRleF07XG4gICAgICAgIGlucHV0VGVuc29ycy5wdXNoKGluYm91bmROb2RlLm91dHB1dFRlbnNvcnNbaW5ib3VuZFRlbnNvckluZGV4XSk7XG4gICAgICB9XG4gICAgICAvLyBDYWxsIGxheWVyIG9uIGl0cyBpbnB1dHMsIHRodXMgY3JlYXRpbmcgdGhlIG5vZGVcbiAgICAgIC8vIGFuZCBidWlsZGluZyB0aGUgbGF5ZXIgaWYgbmVlZGVkLlxuICAgICAgLy8gTm90ZTogVGhpcyBoYXMgRWFnZXIgdnMgR3JhcGggSW1wbGljYXRpb25zLlxuICAgICAgaWYgKGlucHV0VGVuc29ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxheWVyLmFwcGx5KFxuICAgICAgICAgICAgZ2VuZXJpY191dGlscy5zaW5nbGV0b25PckFycmF5KGlucHV0VGVuc29ycyksXG4gICAgICAgICAgICBrd2FyZ3MpOyAgLy8gd2FzICoqIGt3YXJnc1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGEgbGF5ZXIsIHRoZW4gY2FsbCBpdCBvbiBhcHByb3ByaWF0ZSBpbnB1dHMuXG4gICAgICogQHBhcmFtIGxheWVyRGF0YTogbGF5ZXIgY29uZmlnIGRpY3QuXG4gICAgICogQHRocm93cyBWYWx1ZUVycm9yOiBJbiBjYXNlIG9mIGltcHJvcGVybHkgZm9ybWF0dGVkIGBsYXllcl9kYXRhYFxuICAgICAqIGRpY3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xheWVyKGxheWVyRGF0YTogc2VyaWFsaXphdGlvbi5Db25maWdEaWN0fG51bGwpIHtcbiAgICAgIGNvbnN0IGxheWVyTmFtZSA9IGxheWVyRGF0YVsnbmFtZSddIGFzIHN0cmluZztcbiAgICAgIC8vIEluc3RhbnRpYXRlIGxheWVyLlxuICAgICAgY29uc3QgbGF5ZXIgPVxuICAgICAgICAgIGRlc2VyaWFsaXplTGF5ZXIoXG4gICAgICAgICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgICAgICAgY29uZmlnWydjdXN0b21PYmplY3RzJ10gIT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICBjb25maWdbJ2N1c3RvbU9iamVjdHMnXSBhcyBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgOlxuICAgICAgICAgICAgICAgICAge30pIGFzIExheWVyO1xuICAgICAgbGF5ZXIuc2V0RmFzdFdlaWdodEluaXREdXJpbmdCdWlsZChmYXN0V2VpZ2h0SW5pdCk7XG4gICAgICBjcmVhdGVkTGF5ZXJzW2xheWVyTmFtZV0gPSBsYXllcjtcbiAgICAgIC8vIEdhdGhlciBsYXllciBpbnB1dHMuXG4gICAgICBjb25zdCBpbmJvdW5kTm9kZXNEYXRhID1cbiAgICAgICAgICBsYXllckRhdGFbJ2luYm91bmROb2RlcyddIGFzIFRlbnNvcktleVdpdGhBcmdzQXJyYXlbXVtdO1xuICAgICAgaW5ib3VuZE5vZGVzRGF0YS5mb3JFYWNoKG5vZGVEYXRhID0+IHtcbiAgICAgICAgaWYgKCEobm9kZURhdGEgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgYENvcnJ1cHRlZCBjb25maWd1cmF0aW9uLCBleHBlY3RlZCBhcnJheSBmb3Igbm9kZURhdGE6ICR7XG4gICAgICAgICAgICAgICAgICBub2RlRGF0YX1gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBkb24ndCBwcm9jZXNzIG5vZGVzIChpLmUuIG1ha2UgbGF5ZXIgY2FsbHMpXG4gICAgICAgIC8vIG9uIHRoZSBmbHkgYmVjYXVzZSB0aGUgaW5ib3VuZCBub2RlIG1heSBub3QgeWV0IGV4aXN0LFxuICAgICAgICAvLyBpbiBjYXNlIG9mIGxheWVyIHNoYXJlZCBhdCBkaWZmZXJlbnQgdG9wb2xvZ2ljYWwgZGVwdGhzXG4gICAgICAgIC8vIChlLmcuYSBtb2RlbCBzdWNoIGFzIEEoQihBKEIoeCkpKSkpXG4gICAgICAgIGFkZFVucHJvY2Vzc2VkTm9kZShsYXllciwgbm9kZURhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmlyc3QsIHdlIGNyZWF0ZSBhbGwgbGF5ZXJzIGFuZCBlbnF1ZXVlIG5vZGVzIHRvIGJlIHByb2Nlc3NlZC5cbiAgICBjb25zdCBuYW1lID0gY29uZmlnWyduYW1lJ107XG4gICAgY29uc3QgbGF5ZXJzRnJvbUNvbmZpZyA9IGNvbmZpZ1snbGF5ZXJzJ10gYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0W107XG4gICAgZm9yIChjb25zdCBsYXllckRhdGEgb2YgbGF5ZXJzRnJvbUNvbmZpZykge1xuICAgICAgcHJvY2Vzc0xheWVyKGxheWVyRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gVGhlbiB3ZSBwcm9jZXNzIG5vZGVzIGluIG9yZGVyIG9mIGxheWVyIGRlcHRoLlxuICAgIC8vIE5vZGVzIHRoYXQgY2Fubm90IHlldCBiZSBwcm9jZXNzZWQoaWYgdGhlIGluYm91bmQgbm9kZVxuICAgIC8vIGRvZXMgbm90IHlldCBleGlzdCkgYXJlIHJlIC0gZW5xdWV1ZWQsIGFuZCB0aGUgcHJvY2Vzc1xuICAgIC8vIGlzIHJlcGVhdGVkIHVudGlsIGFsbCBub2RlcyBhcmUgcHJvY2Vzc2VkLlxuICAgIHdoaWxlICghZ2VuZXJpY191dGlscy5pc09iamVjdEVtcHR5KHVucHJvY2Vzc2VkTm9kZXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyRGF0YSBvZiBsYXllcnNGcm9tQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gY3JlYXRlZExheWVyc1tsYXllckRhdGFbJ25hbWUnXSBhcyBzdHJpbmddO1xuICAgICAgICBpZiAobGF5ZXIubmFtZSBpbiB1bnByb2Nlc3NlZE5vZGVzKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFVucHJvY2Vzc2VkTm9kZXNGb3JMYXllciA9IHVucHJvY2Vzc2VkTm9kZXNbbGF5ZXIubmFtZV07XG4gICAgICAgICAgZGVsZXRlIHVucHJvY2Vzc2VkTm9kZXNbbGF5ZXIubmFtZV07XG4gICAgICAgICAgZm9yIChjb25zdCBub2RlRGF0YSBvZiBjdXJyZW50VW5wcm9jZXNzZWROb2Rlc0ZvckxheWVyKSB7XG4gICAgICAgICAgICBwcm9jZXNzTm9kZShsYXllciwgbm9kZURhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlucHV0VGVuc29yczogU3ltYm9saWNUZW5zb3JbXSA9IFtdO1xuICAgIGNvbnN0IG91dHB1dFRlbnNvcnM6IFN5bWJvbGljVGVuc29yW10gPSBbXTtcbiAgICBjb25zdCBpbnB1dExheWVyc0Zyb21Db25maWcgPVxuICAgICAgICBjb25maWdbJ2lucHV0TGF5ZXJzJ10gYXMgc2VyaWFsaXphdGlvbi5Db25maWdEaWN0W107XG4gICAgZm9yIChjb25zdCBsYXllckRhdGEgb2YgaW5wdXRMYXllcnNGcm9tQ29uZmlnKSB7XG4gICAgICBjb25zdCBsYXllck5hbWUgPSBsYXllckRhdGFbMF0gYXMgc3RyaW5nO1xuICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbGF5ZXJEYXRhWzFdIGFzIG51bWJlcjtcbiAgICAgIGNvbnN0IHRlbnNvckluZGV4ID0gbGF5ZXJEYXRhWzJdIGFzIG51bWJlcjtcbiAgICAgIGdlbmVyaWNfdXRpbHMuYXNzZXJ0KGxheWVyTmFtZSBpbiBjcmVhdGVkTGF5ZXJzKTtcbiAgICAgIGNvbnN0IGxheWVyID0gY3JlYXRlZExheWVyc1tsYXllck5hbWVdO1xuICAgICAgY29uc3QgbGF5ZXJPdXRwdXRUZW5zb3JzID0gbGF5ZXIuaW5ib3VuZE5vZGVzW25vZGVJbmRleF0ub3V0cHV0VGVuc29ycztcbiAgICAgIGlucHV0VGVuc29ycy5wdXNoKGxheWVyT3V0cHV0VGVuc29yc1t0ZW5zb3JJbmRleF0pO1xuICAgIH1cbiAgICBjb25zdCBvdXRwdXRMYXllcnNGcm9tQ29uZmlnID1cbiAgICAgICAgY29uZmlnWydvdXRwdXRMYXllcnMnXSBhcyBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3RbXTtcbiAgICBmb3IgKGNvbnN0IGxheWVyRGF0YSBvZiBvdXRwdXRMYXllcnNGcm9tQ29uZmlnKSB7XG4gICAgICBjb25zdCBsYXllck5hbWUgPSBsYXllckRhdGFbMF0gYXMgc3RyaW5nO1xuICAgICAgY29uc3Qgbm9kZUluZGV4ID0gbGF5ZXJEYXRhWzFdIGFzIG51bWJlcjtcbiAgICAgIGNvbnN0IHRlbnNvckluZGV4ID0gbGF5ZXJEYXRhWzJdIGFzIG51bWJlcjtcbiAgICAgIGdlbmVyaWNfdXRpbHMuYXNzZXJ0KGxheWVyTmFtZSBpbiBjcmVhdGVkTGF5ZXJzKTtcbiAgICAgIGNvbnN0IGxheWVyID0gY3JlYXRlZExheWVyc1tsYXllck5hbWVdO1xuICAgICAgY29uc3QgbGF5ZXJPdXRwdXRUZW5zb3JzID0gbGF5ZXIuaW5ib3VuZE5vZGVzW25vZGVJbmRleF0ub3V0cHV0VGVuc29ycztcbiAgICAgIG91dHB1dFRlbnNvcnMucHVzaChsYXllck91dHB1dFRlbnNvcnNbdGVuc29ySW5kZXhdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBjbHMoe2lucHV0czogaW5wdXRUZW5zb3JzLCBvdXRwdXRzOiBvdXRwdXRUZW5zb3JzLCBuYW1lfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGNvbnRhaW5lciBpcyBzdGF0ZWZ1bC5cbiAgICpcbiAgICogUG9ydGluZyBOb3RlOiB0aGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHRoZSBzdGF0ZWZ1bCBAcHJvcGVydHkgb2ZcbiAgICogICB0aGUgQ29udGFpbmVyIGNsYXNzIGluIFB5S2VyYXMuXG4gICAqL1xuICBvdmVycmlkZSBnZXQgc3RhdGVmdWwoKTogYm9vbGVhbiB7XG4gICAgLy8gUG9ydGluZyBOb3RlOiBUaGlzIGNoZWNrIGlzIHRvIHByZXZlbnQgaW5hZHZlcnRlbnQgc2V0dGluZyBvZiB0aGVcbiAgICAvLyAgIF9zdGF0ZWZ1bCBwcm9wZXJ0eSBvZiB0aGUgQ29udGFpbmVyIGluc3RhbmNlLlxuICAgIGlmICh0aGlzLl9zdGF0ZWZ1bCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgJ0NvbnRhaW5lciBpbnN0YW5jZSB1bmV4cGVjdGVkbHkgaGFzIF9zdGF0ZWZ1bCA9IHRydWUuIFRoZSAnICtcbiAgICAgICAgICAnc3RhdGVmdWxuZXNzIG9mIGEgQ29udGFpbmVyIGlzIGRldGVybWluZWQgYnkgdGhlIExheWVycyBpdCAnICtcbiAgICAgICAgICAnY29udGFpbnMuIEl0cyBfc3RhdGVmdWwgcHJvcGVydHkgbXVzdCByZW1haW4gdGhlIGRlZmF1bHQgZmFsc2UuJyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5sYXllcnMpIHtcbiAgICAgIGlmIChsYXllci5zdGF0ZWZ1bCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBzdGF0ZSBvZiBhbGwgc3RhdGVmdWwgY29uc3RpdHVlbnQgbGF5ZXJzIChpZiBhbnkpLlxuICAgKlxuICAgKiBFeGFtcGxlcyBvZiBzdGF0ZWZ1bCBsYXllcnMgaW5jbHVkZSBSTk4gbGF5ZXJzIHdob3NlIGBzdGF0ZWZ1bGAgcHJvcGVydHlcbiAgICogaXMgc2V0IGFzIGB0cnVlYC5cbiAgICovXG4gIG92ZXJyaWRlIHJlc2V0U3RhdGVzKCkge1xuICAgIHRpZHkoKCkgPT4ge1xuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuICAgICAgICBpZiAobGF5ZXIuc3RhdGVmdWwpIHtcbiAgICAgICAgICBsYXllci5yZXNldFN0YXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRzbGludDplbmFibGU6bm8tYW55XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "computeWeightedLoss",
    ()=>computeWeightedLoss,
    "standardizeClassWeights",
    ()=>standardizeClassWeights,
    "standardizeSampleWeights",
    ()=>standardizeSampleWeights,
    "standardizeWeights",
    ()=>standardizeWeights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$arg_max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/arg_max.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/clone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/reshape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-ssr] (ecmascript)");
;
function standardizeSampleOrClassWeights(xWeight, outputNames, weightType) {
    const numOutputs = outputNames.length;
    if (xWeight == null || Array.isArray(xWeight) && xWeight.length === 0) {
        return outputNames.map((name)=>null);
    }
    if (numOutputs === 1) {
        if (Array.isArray(xWeight) && xWeight.length === 1) {
            return xWeight;
        } else if (typeof xWeight === 'object' && outputNames[0] in xWeight) {
            return [
                xWeight[outputNames[0]]
            ];
        } else {
            return [
                xWeight
            ];
        }
    }
    if (Array.isArray(xWeight)) {
        if (xWeight.length !== numOutputs) {
            throw new Error(`Provided ${weightType} is an array of ${xWeight.length} ` + `element(s), but the model has ${numOutputs} outputs. ` + `Make sure a set of weights is provided for each model output.`);
        }
        return xWeight;
    } else if (typeof xWeight === 'object' && Object.keys(xWeight).length > 0 && typeof xWeight[Object.keys(xWeight)[0]] === 'object') {
        const output = [];
        outputNames.forEach((outputName)=>{
            if (outputName in xWeight) {
                output.push(xWeight[outputName]);
            } else {
                output.push(null);
            }
        });
        return output;
    } else {
        throw new Error(`The model has multiple (${numOutputs}) outputs, ` + `so ${weightType} must be either an array with ` + `${numOutputs} elements or an object with ${outputNames} keys. ` + `Provided ${weightType} not understood: ${JSON.stringify(xWeight)}`);
    }
}
function standardizeClassWeights(classWeight, outputNames) {
    return standardizeSampleOrClassWeights(classWeight, outputNames, 'classWeight');
}
function standardizeSampleWeights(classWeight, outputNames) {
    return standardizeSampleOrClassWeights(classWeight, outputNames, 'sampleWeight');
}
async function standardizeWeights(y, sampleWeight, classWeight, sampleWeightMode) {
    if (sampleWeight != null || sampleWeightMode != null) {
        // TODO(cais): Once 'temporal' mode is implemented, document it in the doc
        // string.
        throw new Error('Support sampleWeight is not implemented yet');
    }
    if (classWeight != null) {
        // Apply class weights per sample.
        const yClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"])(()=>{
            if (y.shape.length === 1) {
                // Assume class indices.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clone"])(y);
            } else if (y.shape.length === 2) {
                if (y.shape[1] > 1) {
                    // Assume one-hot encoding of classes.
                    const axis = 1;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$arg_max$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["argMax"])(y, axis);
                } else if (y.shape[1] === 1) {
                    // Class index.
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$reshape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reshape"])(y, [
                        y.shape[0]
                    ]);
                } else {
                    throw new Error(`Encountered unexpected last-dimension size (${y.shape[1]}) ` + `during handling of class weights. The size is expected to be ` + `>= 1.`);
                }
            } else {
                throw new Error(`Unexpected rank of target (y) tensor (${y.rank}) during ` + `handling of class weights. The rank is expected to be 1 or 2.`);
            }
        });
        const yClassIndices = Array.from(await yClasses.data());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"])(yClasses);
        const classSampleWeight = [];
        yClassIndices.forEach((classIndex)=>{
            if (classWeight[classIndex] == null) {
                throw new Error(`classWeight must contain all classes in the training data. ` + `The class ${classIndex} exists in the data but not in ` + `classWeight`);
            } else {
                classSampleWeight.push(classWeight[classIndex]);
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tensor1d"])(classSampleWeight, 'float32');
    } else {
        return null;
    }
}
function computeWeightedLoss(losses, sampleWeights) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"])(losses, sampleWeights);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW5pbmdfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZW5naW5lL3RyYWluaW5nX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQW9CLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQXVCN0csU0FBUywrQkFBK0IsQ0FDcEMsT0FBaUQsRUFBRSxXQUFxQixFQUN4RSxVQUF3QztJQUMxQyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN2RSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QztJQUNELElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtRQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEQsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFO1lBQ25FLE9BQU8sQ0FBRSxPQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxPQUFzQixDQUFDLENBQUM7U0FDakM7S0FDRjtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENB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dXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAqIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmltcG9ydCB7YXJnTWF4LCBjbG9uZSwgZGlzcG9zZSwgbXVsLCByZXNoYXBlLCBUZW5zb3IsIFRlbnNvcjFELCB0ZW5zb3IxZCwgdGlkeX0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcblxuLyoqXG4gKiBGb3IgbXVsdGktY2xhc3MgY2xhc3NpZmljYXRpb24gcHJvYmxlbXMsIHRoaXMgb2JqZWN0IGlzIGRlc2lnbmVkIHRvIHN0b3JlIGFcbiAqIG1hcHBpbmcgZnJvbSBjbGFzcyBpbmRleCB0byB0aGUgXCJ3ZWlnaHRcIiBvZiB0aGUgY2xhc3MsIHdoZXJlIGhpZ2hlciB3ZWlnaHRlZFxuICogY2xhc3NlcyBoYXZlIGxhcmdlciBpbXBhY3Qgb24gbG9zcywgYWNjdXJhY3ksIGFuZCBvdGhlciBtZXRyaWNzLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjYXNlcyBpbiB3aGljaCB5b3Ugd2FudCB0aGUgbW9kZWwgdG8gXCJwYXkgbW9yZSBhdHRlbnRpb25cIlxuICogdG8gZXhhbXBsZXMgZnJvbSBhbiB1bmRlci1yZXByZXNlbnRlZCBjbGFzcywgZS5nLiwgaW4gdW5iYWxhbmNlZCBkYXRhc2V0cy5cbiAqL1xuZXhwb3J0IHR5cGUgQ2xhc3NXZWlnaHQgPSB7XG4gIFtjbGFzc0luZGV4OiBudW1iZXJdOiBudW1iZXJcbn07XG5cbi8qKlxuICogQ2xhc3Mgd2VpZ2h0aW5nIGZvciBhIG1vZGVsIHdpdGggbXVsdGlwbGUgb3V0cHV0cy5cbiAqXG4gKiBUaGlzIG9iamVjdCBtYXBzIGVhY2ggb3V0cHV0IG5hbWUgdG8gYSBjbGFzcy13ZWlnaHRpbmcgb2JqZWN0LlxuICovXG5leHBvcnQgdHlwZSBDbGFzc1dlaWdodE1hcCA9IHtcbiAgW291dHB1dE5hbWU6IHN0cmluZ106IENsYXNzV2VpZ2h0XG59O1xuXG5mdW5jdGlvbiBzdGFuZGFyZGl6ZVNhbXBsZU9yQ2xhc3NXZWlnaHRzKFxuICAgIHhXZWlnaHQ6IENsYXNzV2VpZ2h0fENsYXNzV2VpZ2h0W118Q2xhc3NXZWlnaHRNYXAsIG91dHB1dE5hbWVzOiBzdHJpbmdbXSxcbiAgICB3ZWlnaHRUeXBlOiAnc2FtcGxlV2VpZ2h0J3wnY2xhc3NXZWlnaHQnKTogQ2xhc3NXZWlnaHRbXSB7XG4gIGNvbnN0IG51bU91dHB1dHMgPSBvdXRwdXROYW1lcy5sZW5ndGg7XG4gIGlmICh4V2VpZ2h0ID09IG51bGwgfHwgKEFycmF5LmlzQXJyYXkoeFdlaWdodCkgJiYgeFdlaWdodC5sZW5ndGggPT09IDApKSB7XG4gICAgcmV0dXJuIG91dHB1dE5hbWVzLm1hcChuYW1lID0+IG51bGwpO1xuICB9XG4gIGlmIChudW1PdXRwdXRzID09PSAxKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeFdlaWdodCkgJiYgeFdlaWdodC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB4V2VpZ2h0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHhXZWlnaHQgPT09ICdvYmplY3QnICYmIG91dHB1dE5hbWVzWzBdIGluIHhXZWlnaHQpIHtcbiAgICAgIHJldHVybiBbKHhXZWlnaHQgYXMgQ2xhc3NXZWlnaHRNYXApW291dHB1dE5hbWVzWzBdXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbeFdlaWdodCBhcyBDbGFzc1dlaWdodF07XG4gICAgfVxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHhXZWlnaHQpKSB7XG4gICAgaWYgKHhXZWlnaHQubGVuZ3RoICE9PSBudW1PdXRwdXRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFByb3ZpZGVkICR7d2VpZ2h0VHlwZX0gaXMgYW4gYXJyYXkgb2YgJHt4V2VpZ2h0Lmxlbmd0aH0gYCArXG4gICAgICAgICAgYGVsZW1lbnQocyksIGJ1dCB0aGUgbW9kZWwgaGFzICR7bnVtT3V0cHV0c30gb3V0cHV0cy4gYCArXG4gICAgICAgICAgYE1ha2Ugc3VyZSBhIHNldCBvZiB3ZWlnaHRzIGlzIHByb3ZpZGVkIGZvciBlYWNoIG1vZGVsIG91dHB1dC5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHhXZWlnaHQ7XG4gIH0gZWxzZSBpZiAoXG4gICAgICB0eXBlb2YgeFdlaWdodCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoeFdlaWdodCkubGVuZ3RoID4gMCAmJlxuICAgICAgdHlwZW9mICh4V2VpZ2h0IGFzIENsYXNzV2VpZ2h0TWFwKVtPYmplY3Qua2V5cyh4V2VpZ2h0KVswXV0gPT09XG4gICAgICAgICAgJ29iamVjdCcpIHtcbiAgICBjb25zdCBvdXRwdXQ6IENsYXNzV2VpZ2h0W10gPSBbXTtcbiAgICBvdXRwdXROYW1lcy5mb3JFYWNoKG91dHB1dE5hbWUgPT4ge1xuICAgICAgaWYgKG91dHB1dE5hbWUgaW4geFdlaWdodCkge1xuICAgICAgICBvdXRwdXQucHVzaCgoeFdlaWdodCBhcyBDbGFzc1dlaWdodE1hcClbb3V0cHV0TmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUaGUgbW9kZWwgaGFzIG11bHRpcGxlICgke251bU91dHB1dHN9KSBvdXRwdXRzLCBgICtcbiAgICAgICAgYHNvICR7d2VpZ2h0VHlwZX0gbXVzdCBiZSBlaXRoZXIgYW4gYXJyYXkgd2l0aCBgICtcbiAgICAgICAgYCR7bnVtT3V0cHV0c30gZWxlbWVudHMgb3IgYW4gb2JqZWN0IHdpdGggJHtvdXRwdXROYW1lc30ga2V5cy4gYCArXG4gICAgICAgIGBQcm92aWRlZCAke3dlaWdodFR5cGV9IG5vdCB1bmRlcnN0b29kOiAke0pTT04uc3RyaW5naWZ5KHhXZWlnaHQpfWApO1xuICB9XG59XG5cbi8qKlxuICogU3RhbmRhcmRpemUgY2xhc3Mgd2VpZ2h0aW5nIG9iamVjdHMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHNpbmdsZSBjbGFzcy13ZWlnaHRpbmcgb2JqZWN0LCBhbiBhcnJheSBvZiB0aGVtLFxuICogb3IgYSBtYXAgZnJvbSBvdXRwdXQgbmFtZSB0byBjbGFzcy13ZWlnaHRpbmcgb2JqZWN0LiBJdCBjb21wYXJlcyBpdCB0byB0aGVcbiAqIG91dHB1dCBuYW1lKHMpIG9mIHRoZSBtb2RlbCwgYmFzZSBvbiB3aGljaCBpdCBvdXRwdXRzIGFuIGFycmF5IG9mXG4gKiBjbGFzcy13ZWlnaHRpbmcgb2JqZWN0cyBvZiB3aGljaCB0aGUgbGVuZ3RoIG1hdGNoZXMgdGhlIG51bWJlciBvZiBvdXRwdXRzLlxuICpcbiAqIEBwYXJhbSBjbGFzc1dlaWdodCBJbnB1dCBjbGFzcy13ZWlnaHRpbmcgb2JqZWN0KHMpLlxuICogQHBhcmFtIG91dHB1dE5hbWVzIEFsbCBvdXRwdXQgbmFtZShzKSBvZiB0aGUgbW9kZWwuXG4gKiBAcmV0dXJuIEFuIGFycmF5IG9mIGNsYXNzLXdlaWdodGluZyBvYmplY3RzLiBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheSBtYXRjaGVzXG4gKiAgIHRoZSBtb2RlbCdzIG51bWJlciBvZiBvdXRwdXRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhbmRhcmRpemVDbGFzc1dlaWdodHMoXG4gICAgY2xhc3NXZWlnaHQ6IENsYXNzV2VpZ2h0fENsYXNzV2VpZ2h0W118Q2xhc3NXZWlnaHRNYXAsXG4gICAgb3V0cHV0TmFtZXM6IHN0cmluZ1tdKTogQ2xhc3NXZWlnaHRbXSB7XG4gIHJldHVybiBzdGFuZGFyZGl6ZVNhbXBsZU9yQ2xhc3NXZWlnaHRzKFxuICAgICAgY2xhc3NXZWlnaHQsIG91dHB1dE5hbWVzLCAnY2xhc3NXZWlnaHQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YW5kYXJkaXplU2FtcGxlV2VpZ2h0cyhcbiAgICBjbGFzc1dlaWdodDogQ2xhc3NXZWlnaHR8Q2xhc3NXZWlnaHRbXXxDbGFzc1dlaWdodE1hcCxcbiAgICBvdXRwdXROYW1lczogc3RyaW5nW10pOiBDbGFzc1dlaWdodFtdIHtcbiAgcmV0dXJuIHN0YW5kYXJkaXplU2FtcGxlT3JDbGFzc1dlaWdodHMoXG4gICAgICBjbGFzc1dlaWdodCwgb3V0cHV0TmFtZXMsICdzYW1wbGVXZWlnaHQnKTtcbn1cblxuLyoqXG4gKiBTdGFuZGFyZGl6ZSBieS1zYW1wbGUgYW5kL29yIGJ5LWNsYXNzIHdlaWdodHMgZm9yIHRyYWluaW5nLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIG9wZXJhdGVzIG9uIG9uZSBtb2RlbCBvdXRwdXQgYXQgYSB0aW1lLiBGb3IgYSBtb2RlbFxuICogd2l0aCBtdWx0aXBsZSBvdXRwdXRzLCB5b3UgbXVzdCBjYWxsIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMuXG4gKlxuICogQHBhcmFtIHkgVGhlIHRhcmdldCB0ZW5zb3IgdGhhdCB0aGUgYnktc2FtcGxlIGFuZC9vciBieS1jbGFzcyB3ZWlnaHQgaXMgZm9yLlxuICogICAgIFRoZSB2YWx1ZXMgb2YgeSBhcmUgYXNzdW1lZCB0byBlbmNvZGUgdGhlIGNsYXNzZXMsIGVpdGhlciBkaXJlY3RseVxuICogICAgIGFzIGFuIGludGVnZXIgaW5kZXgsIG9yIGFzIG9uZS1ob3QgZW5jb2RpbmcuXG4gKiBAcGFyYW0gc2FtcGxlV2VpZ2h0IEJ5LXNhbXBsZSB3ZWlnaHRzLlxuICogQHBhcmFtIGNsYXNzV2VpZ2h0IEJ5LWNsYXNzIHdlaWdodHM6IGFuIG9iamVjdCBtYXBwaW5nIGNsYXNzIGluZGljZXNcbiAqICAgICAoaW50ZWdlcnMpIHRvIGEgd2VpZ2h0IChmbG9hdCkgdG8gYXBwbHkgdG8gdGhlIG1vZGVsJ3MgbG9zcyBmb3IgdGhlXG4gKiAgICAgc2FtcGxlcyBmcm9tIHRoaXMgY2xhc3MgZHVyaW5nIHRyYWluaW5nLiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gdGVsbCB0aGVcbiAqICAgICBtb2RlbCB0byBcInBheSBtb3JlIGF0dGVudGlvblwiIHRvIHNhbXBsZXMgZnJvbSBhbiB1bmRlci1yZXByZXNlbnRlZCBjbGFzcy5cbiAqIEBwYXJhbSBzYW1wbGVXZWlnaHRNb2RlIFRoZSBtb2RlIGZvciB0aGUgc2FtcGxlIHdlaWdodHMuXG4gKiBAcmV0dXJuIEEgUHJvbWlzZSBvZiB3ZWlnaHQgdGVuc29yLCBvZiB3aGljaCB0aGUgc2l6ZSBvZiB0aGUgZmlyc3QgZGltZW5zaW9uXG4gKiAgICAgbWF0Y2hlcyB0aGF0IG9mIGB5YC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN0YW5kYXJkaXplV2VpZ2h0cyhcbiAgICB5OiBUZW5zb3IsIHNhbXBsZVdlaWdodD86IFRlbnNvciwgY2xhc3NXZWlnaHQ/OiBDbGFzc1dlaWdodCxcbiAgICBzYW1wbGVXZWlnaHRNb2RlPzogJ3RlbXBvcmFsJyk6IFByb21pc2U8VGVuc29yPiB7XG4gIGlmIChzYW1wbGVXZWlnaHQgIT0gbnVsbCB8fCBzYW1wbGVXZWlnaHRNb2RlICE9IG51bGwpIHtcbiAgICAvLyBUT0RPKGNhaXMpOiBPbmNlICd0ZW1wb3JhbCcgbW9kZSBpcyBpbXBsZW1lbnRlZCwgZG9jdW1lbnQgaXQgaW4gdGhlIGRvY1xuICAgIC8vIHN0cmluZy5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N1cHBvcnQgc2FtcGxlV2VpZ2h0IGlzIG5vdCBpbXBsZW1lbnRlZCB5ZXQnKTtcbiAgfVxuXG4gIGlmIChjbGFzc1dlaWdodCAhPSBudWxsKSB7XG4gICAgLy8gQXBwbHkgY2xhc3Mgd2VpZ2h0cyBwZXIgc2FtcGxlLlxuICAgIGNvbnN0IHlDbGFzc2VzOiBUZW5zb3IxRCA9IHRpZHkoKCkgPT4ge1xuICAgICAgaWYgKHkuc2hhcGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIEFzc3VtZSBjbGFzcyBpbmRpY2VzLlxuICAgICAgICByZXR1cm4gY2xvbmUoeSkgYXMgVGVuc29yMUQ7XG4gICAgICB9IGVsc2UgaWYgKHkuc2hhcGUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh5LnNoYXBlWzFdID4gMSkge1xuICAgICAgICAgIC8vIEFzc3VtZSBvbmUtaG90IGVuY29kaW5nIG9mIGNsYXNzZXMuXG4gICAgICAgICAgY29uc3QgYXhpcyA9IDE7XG4gICAgICAgICAgcmV0dXJuIGFyZ01heCh5LCBheGlzKTtcbiAgICAgICAgfSBlbHNlIGlmICh5LnNoYXBlWzFdID09PSAxKSB7XG4gICAgICAgICAgLy8gQ2xhc3MgaW5kZXguXG4gICAgICAgICAgcmV0dXJuIHJlc2hhcGUoeSwgW3kuc2hhcGVbMF1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBFbmNvdW50ZXJlZCB1bmV4cGVjdGVkIGxhc3QtZGltZW5zaW9uIHNpemUgKCR7eS5zaGFwZVsxXX0pIGAgK1xuICAgICAgICAgICAgICBgZHVyaW5nIGhhbmRsaW5nIG9mIGNsYXNzIHdlaWdodHMuIFRoZSBzaXplIGlzIGV4cGVjdGVkIHRvIGJlIGAgK1xuICAgICAgICAgICAgICBgPj0gMS5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFVuZXhwZWN0ZWQgcmFuayBvZiB0YXJnZXQgKHkpIHRlbnNvciAoJHt5LnJhbmt9KSBkdXJpbmcgYCArXG4gICAgICAgICAgICBgaGFuZGxpbmcgb2YgY2xhc3Mgd2VpZ2h0cy4gVGhlIHJhbmsgaXMgZXhwZWN0ZWQgdG8gYmUgMSBvciAyLmApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgeUNsYXNzSW5kaWNlcyA9IEFycmF5LmZyb20oYXdhaXQgeUNsYXNzZXMuZGF0YSgpKTtcbiAgICBkaXNwb3NlKHlDbGFzc2VzKTtcbiAgICBjb25zdCBjbGFzc1NhbXBsZVdlaWdodDogbnVtYmVyW10gPSBbXTtcbiAgICB5Q2xhc3NJbmRpY2VzLmZvckVhY2goY2xhc3NJbmRleCA9PiB7XG4gICAgICBpZiAoY2xhc3NXZWlnaHRbY2xhc3NJbmRleF0gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgY2xhc3NXZWlnaHQgbXVzdCBjb250YWluIGFsbCBjbGFzc2VzIGluIHRoZSB0cmFpbmluZyBkYXRhLiBgICtcbiAgICAgICAgICAgIGBUaGUgY2xhc3MgJHtjbGFzc0luZGV4fSBleGlzdHMgaW4gdGhlIGRhdGEgYnV0IG5vdCBpbiBgICtcbiAgICAgICAgICAgIGBjbGFzc1dlaWdodGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NTYW1wbGVXZWlnaHQucHVzaChjbGFzc1dlaWdodFtjbGFzc0luZGV4XSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGVuc29yMWQoY2xhc3NTYW1wbGVXZWlnaHQsICdmbG9hdDMyJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBcHBseSBwZXItc2FtcGxlIHdlaWdodHMgb24gdGhlIGxvc3MgdmFsdWVzIGZyb20gYSBudW1iZXIgb2Ygc2FtcGxlcy5cbiAqXG4gKiBAcGFyYW0gbG9zc2VzIExvc3MgdGVuc29yIG9mIHNoYXBlIGBbYmF0Y2hTaXplXWAuXG4gKiBAcGFyYW0gc2FtcGxlV2VpZ2h0cyBQZXItc2FtcGxlIHdlaWdodCB0ZW5zb3Igb2Ygc2hhcGUgYFtiYXRjaFNpemVdYC5cbiAqIEByZXR1cm5zIFRlbnNvciBvZiB0aGUgc2FtZSBzaGFwZSBhc2Bsb3NzZXNgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVdlaWdodGVkTG9zcyhsb3NzZXM6IFRlbnNvciwgc2FtcGxlV2VpZ2h0czogVGVuc29yKSB7XG4gIHJldHVybiBtdWwobG9zc2VzLCBzYW1wbGVXZWlnaHRzKTtcbn1cbiJdfQ==
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_dataset.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Interfaces and methods for training models using TensorFlow.js datasets.
 */ __turbopack_context__.s([
    "evaluateDataset",
    ()=>evaluateDataset,
    "fitDataset",
    ()=>fitDataset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/base_callbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/logs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Default batch size used during tensor-based validation.
const DEFAULT_VALIDATION_BATCH_SIZE = 32;
/**
 * Standardize the output of a dataset iterator for use by
 * LayersModel.fitDataset().
 *
 * @param model: A `tf.LayersModel` object.
 * @param iteratorOut The output of a dataset iterator. It is required to be
 *   an object of the form `{xs: TensorOrArrayOrMap, ys:
 * TensorOrArrayOrMap}`, where `TensorOrArrayOrMap` is a single `tf.Tensor`,
 * a `tf.Tensor[]`, or a flat map from string names to `tf.Tensor`s.
 * @returns A flat array of `tf.Tensor` objects: the input `tf.Tensor`s
 *   followed by the target `tf.Tensor`s.  When `tf.Tensor`s are provided
 *   as a map, the order in the resulting array is taken from the `inputNames`
 *   and `outputNames` of the model.
 */ function standardizeDataIteratorOutput(// Type `model` as `any` here to avoid circular dependency w/
// training.ts.
// tslint:disable-next-line:no-any
model, iteratorOut) {
    let xs;
    let ys;
    const iteratorOutObj = iteratorOut;
    xs = iteratorOutObj['xs'];
    ys = iteratorOutObj['ys'];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(xs != null && ys != null, ()=>'A Dataset iterator for fitDataset() is expected to generate ' + 'objects of the form `{xs: xVal, ys: yVal}`, where the two ' + 'values may be `tf.Tensor`, an array of Tensors, or a map of ' + 'string to Tensor.  The provided Dataset instead generates ' + `${iteratorOut}`);
    const flattenedXs = flattenTensorOrArrayOrMap('input', model.inputNames, xs);
    const flattenedYs = flattenTensorOrArrayOrMap('output', model.outputNames, ys);
    const batchSize = flattenedXs[0].shape[0];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(flattenedXs.length === model.inputs.length, ()=>`LayersModel has ${model.inputs.length} inputs, but the dataset ` + `provides ${flattenedXs.length} inputs.  (Expected input keys: ` + `${JSON.stringify(model.inputNames)})`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(flattenedYs.length === model.outputs.length, ()=>`LayersModel has ${model.outputs.length} outputs, but the dataset ` + `provides ${flattenedYs.length} outputs.  (Expected output keys: ` + `${JSON.stringify(model.outputNames)})`);
    for(let xIndex = 0; xIndex < flattenedXs.length; xIndex++){
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(flattenedXs[xIndex].shape[0] === batchSize, ()=>`Batch size mismatch: input ` + `${model.inputNames[xIndex]} has ${flattenedXs[xIndex].shape[0]}; ` + `expected  ${batchSize} based on input ${model.inputNames[0]}.`);
    }
    for(let yIndex = 0; yIndex < flattenedYs.length; yIndex++){
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(flattenedYs[yIndex].shape[0] === batchSize, ()=>`Batch size mismatch: output ` + `${model.outputNames[yIndex]} has ${flattenedYs[yIndex].shape[0]}; ` + `expected  ${batchSize} based on input ${model.inputNames[0]}.`);
    }
    return {
        xs: flattenedXs,
        ys: flattenedYs
    };
}
function flattenTensorOrArrayOrMap(inputOrOutput, names, values) {
    if (values instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]) {
        return [
            values
        ];
    } else if (Array.isArray(values)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(values.length === names.length, ()=>`Received an array of ${values.length} Tensors, but expected ${names.length} to match the ${inputOrOutput} keys ${names}.`);
        return values;
    } else {
        const result = [];
        // Check that all the required keys are available.
        for (const name of names){
            if (values[name] == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The feature data generated by the dataset lacks the required ` + `${inputOrOutput} key '${name}'.`);
            }
            result.push(values[name]);
        }
        return result;
    }
}
function standardizeTensorValidationData(data) {
    if (data.length === 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Validation with sample weights is not implemented yet.');
    }
    return {
        xs: data[0],
        ys: data[1]
    };
}
async function fitDataset(// Type `model` as `any` here to avoid circular dependency w/
// training.ts.
// tslint:disable-next-line:no-any
model, dataset, args) {
    const hasBatchesPerEpoch = args.batchesPerEpoch != null;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(model.optimizer != null, ()=>'You must compile a model before training/testing. Use ' + 'LayersModel.compile(modelCompileConfig).');
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(args != null, ()=>`For fitDataset(), the 2nd argument (config) is required, ` + `but it is not provided in this call.`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(args.epochs != null && args.epochs > 0 && Number.isInteger(args.epochs), ()=>`For fitDataset(), config.epochs is expected to be a positive ` + `integer, but got ${args.epochs}`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(!hasBatchesPerEpoch || args.batchesPerEpoch > 0 && Number.isInteger(args.batchesPerEpoch), ()=>`For fitDataset(), config.batchesPerEpoch is expected to be a ` + `positive integer if specified, but got ${args.batchesPerEpoch}`);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(// tslint:disable-next-line:no-any
    args['validationSplit'] == null, ()=>'`validationSplit` is not supported by `fitDataset()`. ' + 'Use validationData instead.');
    if (model.isTraining) {
        throw new Error('Cannot start training because another fit() call is ongoing.');
    }
    model.isTraining = true;
    try {
        const doValidation = args.validationData != null;
        let valXs;
        let valYs;
        if (doValidation) {
            if (isDatasetObject(args.validationData)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(args.validationBatches == null || args.validationBatches > 0 && Number.isInteger(args.validationBatches), ()=>`For fitDataset() with dataset-based validation, ` + `config.validationBatches is expected not to be provided, ` + `or to be a positive integer, ` + `but got ${args.validationBatches}`);
            } else {
                const validationData = standardizeTensorValidationData(args.validationData);
                valXs = validationData.xs;
                valYs = validationData.ys;
            }
        }
        const trainFunction = model.makeTrainFunction();
        const outLabels = model.getDedupedMetricsNames();
        let callbackMetrics;
        if (doValidation) {
            callbackMetrics = outLabels.slice().concat(outLabels.map((n)=>'val_' + n));
        } else {
            callbackMetrics = outLabels.slice();
        }
        const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["standardizeCallbacks"])(args.callbacks, args.yieldEvery);
        const verbose = args.verbose == null ? 1 : args.verbose;
        const { callbackList, history } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configureCallbacks"])(callbacks, verbose, args.epochs, null, null, getStepsPerEpoch(dataset, args), null, doValidation, callbackMetrics);
        callbackList.setModel(model);
        model.history = history;
        await callbackList.onTrainBegin();
        model.stopTraining_ = false;
        let epoch = args.initialEpoch == null ? 0 : args.initialEpoch;
        let dataIterator = await dataset.iterator();
        while(epoch < args.epochs){
            const epochLogs = {};
            await callbackList.onEpochBegin(epoch);
            let stepsDone = 0;
            let batchIndex = 0;
            if (!hasBatchesPerEpoch) {
                dataIterator = await dataset.iterator();
            }
            while(hasBatchesPerEpoch ? stepsDone < args.batchesPerEpoch : true){
                const iteratorOut = await dataIterator.next();
                // If `batchesPerEpoch` is specified, the dataset should not be
                // exhausted until all epoches are done.
                if (hasBatchesPerEpoch && iteratorOut.done) {
                    console.warn('You provided `batchesPerEpoch` as ' + `${args.batchesPerEpoch}, ` + 'but your dataset iterator ran out of data after ' + `${stepsDone} batches; ` + 'interrupting training. Make sure that your ' + 'dataset can generate at least `batchesPerEpoch * epochs` ' + 'batches (in this case, ' + `${args.batchesPerEpoch * args.epochs} batches). ` + 'You may need to use the repeat() function when building ' + 'your dataset.');
                    break;
                }
                if (iteratorOut.value != null) {
                    const { xs, ys } = standardizeDataIteratorOutput(model, iteratorOut.value);
                    const batchLogs = {};
                    batchLogs['batch'] = batchIndex;
                    batchLogs['size'] = xs[0].shape[0];
                    await callbackList.onBatchBegin(batchIndex, batchLogs);
                    const sampleWeights = [];
                    if (args.classWeight != null) {
                        const standardClassWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["standardizeClassWeights"])(args.classWeight, model.outputNames);
                        for(let i = 0; i < standardClassWeights.length; ++i){
                            sampleWeights.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["standardizeWeights"])(ys[i], null, standardClassWeights[i]));
                        }
                    }
                    // Train on batch.
                    const ins = xs.concat(ys).concat(sampleWeights);
                    const outs = trainFunction(ins);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](ins);
                    for(let i = 0; i < outLabels.length; ++i){
                        const label = outLabels[i];
                        const out = outs[i];
                        batchLogs[label] = out;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keep"](out);
                    }
                    await callbackList.onBatchEnd(batchIndex, batchLogs);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeTensorsInLogs"])(batchLogs);
                    batchIndex++;
                    stepsDone++;
                }
                if (hasBatchesPerEpoch ? stepsDone >= args.batchesPerEpoch : iteratorOut.done) {
                    // Epoch finished. Perform validation.
                    if (doValidation) {
                        let valOuts;
                        if (isDatasetObject(args.validationData)) {
                            valOuts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"])(await model.evaluateDataset(args.validationData, {
                                batches: args.validationBatches
                            }));
                        } else {
                            valOuts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toList"])(model.evaluate(valXs, valYs, {
                                batchSize: args.validationBatchSize == null ? DEFAULT_VALIDATION_BATCH_SIZE : args.validationBatchSize,
                                verbose: 0
                            }));
                        }
                        for(let i = 0; i < model.metricsNames.length; ++i){
                            epochLogs[`val_${model.metricsNames[i]}`] = valOuts[i];
                        }
                    }
                    break;
                }
                if (model.stopTraining_) {
                    break;
                }
            }
            await callbackList.onEpochEnd(epoch, epochLogs);
            epoch++;
            if (model.stopTraining_) {
                break;
            }
        }
        await callbackList.onTrainEnd();
        await model.history.syncData();
        return model.history;
    } finally{
        model.isTraining = false;
    }
}
/** Helper function that determines number of steps (batches) per epoch. */ function getStepsPerEpoch(dataset, args) {
    // Attempt to determine # of batches in an epoch.
    let stepsPerEpoch = null;
    if (args.batchesPerEpoch != null) {
        stepsPerEpoch = args.batchesPerEpoch;
    } else if (Number.isFinite(dataset.size)) {
        stepsPerEpoch = dataset.size;
    }
    return stepsPerEpoch;
}
// Check if provided object is a Dataset object by checking its .iterator
// element.
function isDatasetObject(dataset) {
    return typeof dataset.iterator === 'function';
}
// Check if provided object is a LazyIterator object by checking it's .next
// element.
function isLazyIteratorObject(iterator) {
    return typeof iterator.next === 'function';
}
async function evaluateDataset(// Type `model` as `any` here to avoid circular dependency w/
// training.ts.
// tslint:disable-next-line:no-any
model, dataset, args) {
    args = args || {};
    const hasBatches = args.batches != null;
    const f = model.testFunction;
    let outs = [];
    if (args.verbose > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Verbose mode is not implemented yet.');
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(!hasBatches || args.batches > 0 && Number.isInteger(args.batches), ()=>'Test loop expects `batches` to be a positive integer, but ' + `received ${JSON.stringify(args.batches)}`);
    const dataIterator = isLazyIteratorObject(dataset) ? dataset : await dataset.iterator();
    // Keeps track of number of examples used in this evaluation.
    let numExamples = 0;
    let batch = 0;
    while(hasBatches ? batch < args.batches : true){
        const iteratorOut = await dataIterator.next();
        outs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
            if (iteratorOut.value) {
                // TODO(cais): Once real dataset is available, use
                //   `map(x => standardizeDataIteratorOutput(model, x).map(f)`.
                const { xs, ys } = standardizeDataIteratorOutput(model, iteratorOut.value);
                const xsAndYs = xs.concat(ys);
                const batchOuts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>f(xsAndYs));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](xsAndYs);
                if (batch === 0) {
                    for(let i = 0; i < batchOuts.length; ++i){
                        outs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scalar"])(0));
                    }
                }
                const batchSize = xsAndYs[0].shape[0];
                for(let i = 0; i < batchOuts.length; ++i){
                    const batchOut = batchOuts[i];
                    const oldScalar = outs[i];
                    outs[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](outs[i], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](batchSize, batchOut)));
                    if (batch > 0) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](oldScalar);
                    }
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](batchOuts);
                numExamples += batchSize;
                ++batch;
            }
            return outs;
        });
        if (iteratorOut.done) {
            if (hasBatches) {
                console.warn('Your dataset iterator ran out of data during evaluateDataset(). ' + 'Interrupting evalution. Make sure that your ' + 'dataset can generate at least `batches` ' + `batches (in this case, ${args.batches} batches). ` + 'You may need to use the repeat() function when building ' + 'your dataset.');
            }
            break;
        }
    }
    for(let i = 0; i < outs.length; ++i){
        const oldScalar = outs[i];
        outs[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](outs[i], numExamples);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](oldScalar);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"])(outs);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW5pbmdfZGF0YXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9lbmdpbmUvdHJhaW5pbmdfZGF0YXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUgsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFlLGtCQUFrQixFQUFzRCxvQkFBb0IsRUFBb0IsTUFBTSxtQkFBbUIsQ0FBQztBQUNoSyxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzFELE9BQU8sRUFBQyxvQkFBb0IsRUFBaUIsTUFBTSxTQUFTLENBQUM7QUFFN0QsT0FBTyxFQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR2hFLE9BQU8sRUFBOEIsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQWlLMUcsMERBQTBEO0FBQzFELE1BQU0sNkJBQTZCLEdBQUcsRUFBRSxDQUFDO0FBRXpDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxTQUFTLDZCQUE2QjtBQUNsQyw2REFBNkQ7QUFDN0QsZUFBZTtBQUNmLGtDQUFrQztBQUNsQyxLQUFVLEVBQUUsV0FBZTtJQUM3QixJQUFJLEVBQXNCLENBQUM7SUFDM0IsSUFBSSxFQUFzQixDQUFDO0lBRTNCLE1BQU0sY0FBYyxHQUFHLFdBQWdDLENBQUM7SUFDeEQsRUFBRSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixFQUFFLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNYLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJ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YixHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUN4QjtpQkFDRjtnQkFDRCxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixXQUFXLElBQUksU0FBUyxDQUFDO2dCQUV6QixFQUFFLEtBQUssQ0FBQzthQUNUO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksV0FBVyxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLFVBQVUsRUFBRTtnQkFDZCxPQUFPLENBQUMsSUFBSSxDQUNSLGtFQUFrRTtvQkFDbEUsOENBQThDO29CQUM5QywwQ0FBMEM7b0JBQzFDLDBCQUEwQixJQUFJLENBQUMsT0FBTyxhQUFhO29CQUNuRCwwREFBMEQ7b0JBQzFELGVBQWUsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsTUFBTTtTQUNQO0tBQ0Y7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNwQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEI7SUFFRCxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZXMgYW5kIG1ldGhvZHMgZm9yIHRyYWluaW5nIG1vZGVscyB1c2luZyBUZW5zb3JGbG93LmpzIGRhdGFzZXRzLlxuICovXG5cbmltcG9ydCAqIGFzIHRmYyBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuaW1wb3J0IHtzY2FsYXJ9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge0Jhc2VDYWxsYmFjaywgY29uZmlndXJlQ2FsbGJhY2tzLCBDdXN0b21DYWxsYmFja0FyZ3MsIEhpc3RvcnksIE1vZGVsTG9nZ2luZ1ZlcmJvc2l0eSwgc3RhbmRhcmRpemVDYWxsYmFja3MsIFlpZWxkRXZlcnlPcHRpb25zfSBmcm9tICcuLi9iYXNlX2NhbGxiYWNrcyc7XG5pbXBvcnQge05vdEltcGxlbWVudGVkRXJyb3IsIFZhbHVlRXJyb3J9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQge2Rpc3Bvc2VUZW5zb3JzSW5Mb2dzLCBVbnJlc29sdmVkTG9nc30gZnJvbSAnLi4vbG9ncyc7XG5pbXBvcnQge1RlbnNvck9yQXJyYXlPck1hcH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtzaW5nbGV0b25PckFycmF5LCB0b0xpc3R9IGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuXG5pbXBvcnQge0RhdGFzZXQsIExhenlJdGVyYXRvcn0gZnJvbSAnLi9kYXRhc2V0X3N0dWInO1xuaW1wb3J0IHtDbGFzc1dlaWdodCwgQ2xhc3NXZWlnaHRNYXAsIHN0YW5kYXJkaXplQ2xhc3NXZWlnaHRzLCBzdGFuZGFyZGl6ZVdlaWdodHN9IGZyb20gJy4vdHJhaW5pbmdfdXRpbHMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgY29uZmlndXJpbmcgbW9kZWwgdHJhaW5pbmcgYmFzZWQgb24gYSBkYXRhc2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNb2RlbEZpdERhdGFzZXRBcmdzPFQ+IHtcbiAgLyoqXG4gICAqIChPcHRpb25hbCkgVG90YWwgbnVtYmVyIG9mIHN0ZXBzIChiYXRjaGVzIG9mIHNhbXBsZXMpIGJlZm9yZVxuICAgKiBkZWNsYXJpbmcgb25lIGVwb2NoIGZpbmlzaGVkIGFuZCBzdGFydGluZyB0aGUgbmV4dCBlcG9jaC4gSXQgc2hvdWxkXG4gICAqIHR5cGljYWxseSBiZSBlcXVhbCB0byB0aGUgbnVtYmVyIG9mIHNhbXBsZXMgb2YgeW91ciBkYXRhc2V0IGRpdmlkZWQgYnlcbiAgICogdGhlIGJhdGNoIHNpemUsIHNvIHRoYXQgYGZpdERhdGFzZXRgKCkgY2FsbCBjYW4gdXRpbGl6ZSB0aGUgZW50aXJlIGRhdGFzZXQuXG4gICAqIElmIGl0IGlzIG5vdCBwcm92aWRlZCwgdXNlIGBkb25lYCByZXR1cm4gdmFsdWUgaW4gYGl0ZXJhdG9yLm5leHQoKWAgYXNcbiAgICogc2lnbmFsIHRvIGZpbmlzaCBhbiBlcG9jaC5cbiAgICovXG4gIGJhdGNoZXNQZXJFcG9jaD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZWdlciBudW1iZXIgb2YgdGltZXMgdG8gaXRlcmF0ZSBvdmVyIHRoZSB0cmFpbmluZyBkYXRhc2V0LlxuICAgKi9cbiAgZXBvY2hzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZlcmJvc2l0eSBsZXZlbC5cbiAgICpcbiAgICogRXhwZWN0ZWQgdG8gYmUgMCwgMSwgb3IgMi4gRGVmYXVsdDogMS5cbiAgICpcbiAgICogMCAtIE5vIHByaW50ZWQgbWVzc2FnZSBkdXJpbmcgZml0KCkgY2FsbC5cbiAgICogMSAtIEluIE5vZGUuanMgKHRmanMtbm9kZSksIHByaW50cyB0aGUgcHJvZ3Jlc3MgYmFyLCB0b2dldGhlciB3aXRoXG4gICAqICAgICByZWFsLXRpbWUgdXBkYXRlcyBvZiBsb3NzIGFuZCBtZXRyaWMgdmFsdWVzIGFuZCB0cmFpbmluZyBzcGVlZC5cbiAgICogICAgIEluIHRoZSBicm93c2VyOiBubyBhY3Rpb24uIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAqIDIgLSBOb3QgaW1wbGVtZW50ZWQgeWV0LlxuICAgKi9cbiAgdmVyYm9zZT86IE1vZGVsTG9nZ2luZ1ZlcmJvc2l0eTtcblxuICAvKipcbiAgICogTGlzdCBvZiBjYWxsYmFja3MgdG8gYmUgY2FsbGVkIGR1cmluZyB0cmFpbmluZy5cbiAgICogQ2FuIGhhdmUgb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZyBjYWxsYmFja3M6XG4gICAqICAgLSBgb25UcmFpbkJlZ2luKGxvZ3MpYDogY2FsbGVkIHdoZW4gdHJhaW5pbmcgc3RhcnRzLlxuICAgKiAgIC0gYG9uVHJhaW5FbmQobG9ncylgOiBjYWxsZWQgd2hlbiB0cmFpbmluZyBlbmRzLlxuICAgKiAgIC0gYG9uRXBvY2hCZWdpbihlcG9jaCwgbG9ncylgOiBjYWxsZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IGVwb2NoLlxuICAgKiAgIC0gYG9uRXBvY2hFbmQoZXBvY2gsIGxvZ3MpYDogY2FsbGVkIGF0IHRoZSBlbmQgb2YgZXZlcnkgZXBvY2guXG4gICAqICAgLSBgb25CYXRjaEJlZ2luKGJhdGNoLCBsb2dzKWA6IGNhbGxlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgYmF0Y2guXG4gICAqICAgLSBgb25CYXRjaEVuZChiYXRjaCwgbG9ncylgOiBjYWxsZWQgYXQgdGhlIGVuZCBvZiBldmVyeSBiYXRjaC5cbiAgICogICAtIGBvbllpZWxkKGVwb2NoLCBiYXRjaCwgbG9ncylgOiBjYWxsZWQgZXZlcnkgYHlpZWxkRXZlcnlgIG1pbGxpc2Vjb25kc1xuICAgKiAgICAgIHdpdGggdGhlIGN1cnJlbnQgZXBvY2gsIGJhdGNoIGFuZCBsb2dzLiBUaGUgbG9ncyBhcmUgdGhlIHNhbWVcbiAgICogICAgICBhcyBpbiBgb25CYXRjaEVuZCgpYC4gTm90ZSB0aGF0IGBvbllpZWxkYCBjYW4gc2tpcCBiYXRjaGVzIG9yXG4gICAqICAgICAgZXBvY2hzLiBTZWUgYWxzbyBkb2NzIGZvciBgeWllbGRFdmVyeWAgYmVsb3cuXG4gICAqL1xuICBjYWxsYmFja3M/OiBCYXNlQ2FsbGJhY2tbXXxDdXN0b21DYWxsYmFja0FyZ3N8Q3VzdG9tQ2FsbGJhY2tBcmdzW107XG5cbiAgLyoqXG4gICAqIERhdGEgb24gd2hpY2ggdG8gZXZhbHVhdGUgdGhlIGxvc3MgYW5kIGFueSBtb2RlbFxuICAgKiBtZXRyaWNzIGF0IHRoZSBlbmQgb2YgZWFjaCBlcG9jaC4gVGhlIG1vZGVsIHdpbGwgbm90IGJlIHRyYWluZWQgb24gdGhpc1xuICAgKiBkYXRhLiBUaGlzIGNvdWxkIGJlIGFueSBvZiB0aGUgZm9sbG93aW5nOlxuICAgKlxuICAgKiAgIC0gQW4gYXJyYXkgYFt4VmFsLCB5VmFsXWAsIHdoZXJlIHRoZSB0d28gdmFsdWVzIG1heSBiZSBgdGYuVGVuc29yYCxcbiAgICogICAgIGFuIGFycmF5IG9mIFRlbnNvcnMsIG9yIGEgbWFwIG9mIHN0cmluZyB0byBUZW5zb3IuXG4gICAqICAgLSBTaW1pbGFybHksIGFuIGFycmF5IGAgW3hWYWwsIHlWYWwsIHZhbFNhbXBsZVdlaWdodHNdYFxuICAgKiAgICAgKG5vdCBpbXBsZW1lbnRlZCB5ZXQpLlxuICAgKiAgIC0gYSBgRGF0YXNldGAgb2JqZWN0IHdpdGggZWxlbWVudHMgb2YgdGhlIGZvcm0gYHt4czogeFZhbCwgeXM6IHlWYWx9YCxcbiAgICogICAgIHdoZXJlIGB4c2AgYW5kIGB5c2AgYXJlIHRoZSBmZWF0dXJlIGFuZCBsYWJlbCB0ZW5zb3JzLCByZXNwZWN0aXZlbHkuXG4gICAqXG4gICAqIElmIGB2YWxpZGF0aW9uRGF0YWAgaXMgYW4gQXJyYXkgb2YgVGVuc29yIG9iamVjdHMsIGVhY2ggYHRmLlRlbnNvcmAgd2lsbCBiZVxuICAgKiBzbGljZWQgaW50byBiYXRjaGVzIGR1cmluZyB2YWxpZGF0aW9uLCB1c2luZyB0aGUgcGFyYW1ldGVyXG4gICAqIGB2YWxpZGF0aW9uQmF0Y2hTaXplYCAod2hpY2ggZGVmYXVsdHMgdG8gMzIpLiBUaGUgZW50aXJldHkgb2YgdGhlXG4gICAqIGB0Zi5UZW5zb3JgIG9iamVjdHMgd2lsbCBiZSB1c2VkIGluIHRoZSB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBJZiBgdmFsaWRhdGlvbkRhdGFgIGlzIGEgZGF0YXNldCBvYmplY3QsIGFuZCB0aGUgYHZhbGlkYXRpb25CYXRjaGVzYFxuICAgKiBwYXJhbWV0ZXIgaXMgc3BlY2lmaWVkLCB0aGUgdmFsaWRhdGlvbiB3aWxsIHVzZSBgdmFsaWRhdGlvbkJhdGNoZXNgIGJhdGNoZXNcbiAgICogZHJhd24gZnJvbSB0aGUgZGF0YXNldCBvYmplY3QuIElmIGB2YWxpZGF0aW9uQmF0Y2hlc2AgcGFyYW1ldGVyIGlzIG5vdFxuICAgKiBzcGVjaWZpZWQsIHRoZSB2YWxpZGF0aW9uIHdpbGwgc3RvcCB3aGVuIHRoZSBkYXRhc2V0IGlzIGV4aGF1c3RlZC5cbiAgICpcbiAgICogVGhlIG1vZGVsIHdpbGwgbm90IGJlIHRyYWluZWQgb24gdGhpcyBkYXRhLlxuICAgKi9cbiAgdmFsaWRhdGlvbkRhdGE/OiBbXG4gICAgVGVuc29yT3JBcnJheU9yTWFwLCBUZW5zb3JPckFycmF5T3JNYXBcbiAgXXxbVGVuc29yT3JBcnJheU9yTWFwLCBUZW5zb3JPckFycmF5T3JNYXAsIFRlbnNvck9yQXJyYXlPck1hcF18RGF0YXNldDxUPjtcblxuICAvKipcbiAgICogT3B0aW9uYWwgYmF0Y2ggc2l6ZSBmb3IgdmFsaWRhdGlvbi5cbiAgICpcbiAgICogVXNlZCBvbmx5IGlmIGB2YWxpZGF0aW9uRGF0YWAgaXMgYW4gYXJyYXkgb2YgYHRmLlRlbnNvcmAgb2JqZWN0cywgaS5lLiwgbm90XG4gICAqIGEgZGF0YXNldCBvYmplY3QuXG4gICAqXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIGl0cyB2YWx1ZSBkZWZhdWx0cyB0byAzMi5cbiAgICovXG4gIHZhbGlkYXRpb25CYXRjaFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIChPcHRpb25hbCkgT25seSByZWxldmFudCBpZiBgdmFsaWRhdGlvbkRhdGFgIGlzIHNwZWNpZmllZCBhbmQgaXMgYSBkYXRhc2V0XG4gICAqIG9iamVjdC5cbiAgICpcbiAgICogVG90YWwgbnVtYmVyIG9mIGJhdGNoZXMgb2Ygc2FtcGxlcyB0byBkcmF3IGZyb20gYHZhbGlkYXRpb25EYXRhYCBmb3JcbiAgICogdmFsaWRhdGlvbiBwdXJwb3NlIGJlZm9yZSBzdG9wcGluZyBhdCB0aGUgZW5kIG9mIGV2ZXJ5IGVwb2NoLiBJZiBub3RcbiAgICogc3BlY2lmaWVkLCBgZXZhbHVhdGVEYXRhc2V0YCB3aWxsIHVzZSBgaXRlcmF0b3IubmV4dCgpLmRvbmVgIGFzIHNpZ25hbCB0b1xuICAgKiBzdG9wIHZhbGlkYXRpb24uXG4gICAqL1xuICB2YWxpZGF0aW9uQmF0Y2hlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgZnJlcXVlbmN5IG9mIHlpZWxkaW5nIHRoZSBtYWluIHRocmVhZCB0byBvdGhlciB0YXNrcy5cbiAgICpcbiAgICogSW4gdGhlIGJyb3dzZXIgZW52aXJvbm1lbnQsIHlpZWxkaW5nIHRoZSBtYWluIHRocmVhZCBjYW4gaW1wcm92ZSB0aGVcbiAgICogcmVzcG9uc2l2ZW5lc3Mgb2YgdGhlIHBhZ2UgZHVyaW5nIHRyYWluaW5nLiBJbiB0aGUgTm9kZS5qcyBlbnZpcm9ubWVudCxcbiAgICogaXQgY2FuIGVuc3VyZSB0YXNrcyBxdWV1ZWQgaW4gdGhlIGV2ZW50IGxvb3AgY2FuIGJlIGhhbmRsZWQgaW4gYSB0aW1lbHlcbiAgICogbWFubmVyLlxuICAgKlxuICAgKiBUaGUgdmFsdWUgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuICAgKiAgIC0gYCdhdXRvJ2A6IFRoZSB5aWVsZGluZyBoYXBwZW5zIGF0IGEgY2VydGFpbiBmcmFtZSByYXRlIChjdXJyZW50bHkgc2V0XG4gICAqICAgICAgICAgICAgICAgYXQgMTI1bXMpLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgKiAgIC0gYCdiYXRjaCdgOiB5aWVsZCBldmVyeSBiYXRjaC5cbiAgICogICAtIGAnZXBvY2gnYDogeWllbGQgZXZlcnkgZXBvY2guXG4gICAqICAgLSBhIGBudW1iZXJgOiBXaWxsIHlpZWxkIGV2ZXJ5IGBudW1iZXJgIG1pbGxpc2Vjb25kcy5cbiAgICogICAtIGAnbmV2ZXInYDogbmV2ZXIgeWllbGQuIChCdXQgeWllbGRpbmcgY2FuIHN0aWxsIGhhcHBlbiB0aHJvdWdoIGBhd2FpdFxuICAgKiAgICAgIG5leHRGcmFtZSgpYCBjYWxscyBpbiBjdXN0b20gY2FsbGJhY2tzLilcbiAgICovXG4gIHlpZWxkRXZlcnk/OiBZaWVsZEV2ZXJ5T3B0aW9ucztcblxuICAvKipcbiAgICogRXBvY2ggYXQgd2hpY2ggdG8gc3RhcnQgdHJhaW5pbmcgKHVzZWZ1bCBmb3IgcmVzdW1pbmcgYSBwcmV2aW91cyB0cmFpbmluZ1xuICAgKiBydW4pLiBXaGVuIHRoaXMgaXMgdXNlZCwgYGVwb2Noc2AgaXMgdGhlIGluZGV4IG9mIHRoZSBcImZpbmFsIGVwb2NoXCIuXG4gICAqIFRoZSBtb2RlbCBpcyBub3QgdHJhaW5lZCBmb3IgYSBudW1iZXIgb2YgaXRlcmF0aW9ucyBnaXZlbiBieSBgZXBvY2hzYCxcbiAgICogYnV0IG1lcmVseSB1bnRpbCB0aGUgZXBvY2ggb2YgaW5kZXggYGVwb2Noc2AgaXMgcmVhY2hlZC5cbiAgICovXG4gIGluaXRpYWxFcG9jaD86IG51bWJlcjtcblxuICAvKipcbiAgICogT3B0aW9uYWwgb2JqZWN0IG1hcHBpbmcgY2xhc3MgaW5kaWNlcyAoaW50ZWdlcnMpIHRvXG4gICAqIGEgd2VpZ2h0IChmbG9hdCkgdG8gYXBwbHkgdG8gdGhlIG1vZGVsJ3MgbG9zcyBmb3IgdGhlIHNhbXBsZXMgZnJvbSB0aGlzXG4gICAqIGNsYXNzIGR1cmluZyB0cmFpbmluZy4gVGhpcyBjYW4gYmUgdXNlZnVsIHRvIHRlbGwgdGhlIG1vZGVsIHRvIFwicGF5IG1vcmVcbiAgICogYXR0ZW50aW9uXCIgdG8gc2FtcGxlcyBmcm9tIGFuIHVuZGVyLXJlcHJlc2VudGVkIGNsYXNzLlxuICAgKlxuICAgKiBJZiB0aGUgbW9kZWwgaGFzIG11bHRpcGxlIG91dHB1dHMsIGEgY2xhc3Mgd2VpZ2h0IGNhbiBiZSBzcGVjaWZpZWQgZm9yXG4gICAqIGVhY2ggb2YgdGhlIG91dHB1dHMgYnkgc2V0dGluZyB0aGlzIGZpZWxkIGFuIGFycmF5IG9mIHdlaWdodCBvYmplY3RcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgbWFwcyBtb2RlbCBvdXRwdXQgbmFtZXMgKGUuZy4sIGBtb2RlbC5vdXRwdXROYW1lc1swXWApXG4gICAqIHRvIHdlaWdodCBvYmplY3RzLlxuICAgKi9cbiAgY2xhc3NXZWlnaHQ/OiBDbGFzc1dlaWdodHxDbGFzc1dlaWdodFtdfENsYXNzV2VpZ2h0TWFwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpdERhdGFzZXRFbGVtZW50IHtcbiAgeHM6IFRlbnNvck9yQXJyYXlPck1hcDtcbiAgeXM6IFRlbnNvck9yQXJyYXlPck1hcDtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGNvbmZpZ3VyaW5nIG1vZGVsIGV2YWx1YXRpb24gYmFzZWQgb24gYSBkYXRhc2V0IG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNb2RlbEV2YWx1YXRlRGF0YXNldEFyZ3Mge1xuICAvKipcbiAgICogTnVtYmVyIG9mIGJhdGNoZXMgdG8gZHJhdyBmcm9tIHRoZSBkYXRhc2V0IG9iamVjdCBiZWZvcmUgZW5kaW5nIHRoZVxuICAgKiBldmFsdWF0aW9uLlxuICAgKi9cbiAgYmF0Y2hlcz86IG51bWJlcjtcblxuICAvKipcbiAgICogVmVyYm9zaXR5IG1vZGUuXG4gICAqL1xuICB2ZXJib3NlPzogTW9kZWxMb2dnaW5nVmVyYm9zaXR5O1xufVxuXG4vLyBEZWZhdWx0IGJhdGNoIHNpemUgdXNlZCBkdXJpbmcgdGVuc29yLWJhc2VkIHZhbGlkYXRpb24uXG5jb25zdCBERUZBVUxUX1ZBTElEQVRJT05fQkFUQ0hfU0laRSA9IDMyO1xuXG4vKipcbiAqIFN0YW5kYXJkaXplIHRoZSBvdXRwdXQgb2YgYSBkYXRhc2V0IGl0ZXJhdG9yIGZvciB1c2UgYnlcbiAqIExheWVyc01vZGVsLmZpdERhdGFzZXQoKS5cbiAqXG4gKiBAcGFyYW0gbW9kZWw6IEEgYHRmLkxheWVyc01vZGVsYCBvYmplY3QuXG4gKiBAcGFyYW0gaXRlcmF0b3JPdXQgVGhlIG91dHB1dCBvZiBhIGRhdGFzZXQgaXRlcmF0b3IuIEl0IGlzIHJlcXVpcmVkIHRvIGJlXG4gKiAgIGFuIG9iamVjdCBvZiB0aGUgZm9ybSBge3hzOiBUZW5zb3JPckFycmF5T3JNYXAsIHlzOlxuICogVGVuc29yT3JBcnJheU9yTWFwfWAsIHdoZXJlIGBUZW5zb3JPckFycmF5T3JNYXBgIGlzIGEgc2luZ2xlIGB0Zi5UZW5zb3JgLFxuICogYSBgdGYuVGVuc29yW11gLCBvciBhIGZsYXQgbWFwIGZyb20gc3RyaW5nIG5hbWVzIHRvIGB0Zi5UZW5zb3Jgcy5cbiAqIEByZXR1cm5zIEEgZmxhdCBhcnJheSBvZiBgdGYuVGVuc29yYCBvYmplY3RzOiB0aGUgaW5wdXQgYHRmLlRlbnNvcmBzXG4gKiAgIGZvbGxvd2VkIGJ5IHRoZSB0YXJnZXQgYHRmLlRlbnNvcmBzLiAgV2hlbiBgdGYuVGVuc29yYHMgYXJlIHByb3ZpZGVkXG4gKiAgIGFzIGEgbWFwLCB0aGUgb3JkZXIgaW4gdGhlIHJlc3VsdGluZyBhcnJheSBpcyB0YWtlbiBmcm9tIHRoZSBgaW5wdXROYW1lc2BcbiAqICAgYW5kIGBvdXRwdXROYW1lc2Agb2YgdGhlIG1vZGVsLlxuICovXG5mdW5jdGlvbiBzdGFuZGFyZGl6ZURhdGFJdGVyYXRvck91dHB1dChcbiAgICAvLyBUeXBlIGBtb2RlbGAgYXMgYGFueWAgaGVyZSB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5IHcvXG4gICAgLy8gdHJhaW5pbmcudHMuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIG1vZGVsOiBhbnksIGl0ZXJhdG9yT3V0OiB7fSk6IHt4czogdGZjLlRlbnNvcltdLCB5czogdGZjLlRlbnNvcltdfSB7XG4gIGxldCB4czogVGVuc29yT3JBcnJheU9yTWFwO1xuICBsZXQgeXM6IFRlbnNvck9yQXJyYXlPck1hcDtcblxuICBjb25zdCBpdGVyYXRvck91dE9iaiA9IGl0ZXJhdG9yT3V0IGFzIEZpdERhdGFzZXRFbGVtZW50O1xuICB4cyA9IGl0ZXJhdG9yT3V0T2JqWyd4cyddO1xuICB5cyA9IGl0ZXJhdG9yT3V0T2JqWyd5cyddO1xuICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICB4cyAhPSBudWxsICYmIHlzICE9IG51bGwsXG4gICAgICAoKSA9PiAnQSBEYXRhc2V0IGl0ZXJhdG9yIGZvciBmaXREYXRhc2V0KCkgaXMgZXhwZWN0ZWQgdG8gZ2VuZXJhdGUgJyArXG4gICAgICAgICAgJ29iamVjdHMgb2YgdGhlIGZvcm0gYHt4czogeFZhbCwgeXM6IHlWYWx9YCwgd2hlcmUgdGhlIHR3byAnICtcbiAgICAgICAgICAndmFsdWVzIG1heSBiZSBgdGYuVGVuc29yYCwgYW4gYXJyYXkgb2YgVGVuc29ycywgb3IgYSBtYXAgb2YgJyArXG4gICAgICAgICAgJ3N0cmluZyB0byBUZW5zb3IuICBUaGUgcHJvdmlkZWQgRGF0YXNldCBpbnN0ZWFkIGdlbmVyYXRlcyAnICtcbiAgICAgICAgICBgJHtpdGVyYXRvck91dH1gKTtcblxuICBjb25zdCBmbGF0dGVuZWRYczogdGZjLlRlbnNvcltdID1cbiAgICAgIGZsYXR0ZW5UZW5zb3JPckFycmF5T3JNYXAoJ2lucHV0JywgbW9kZWwuaW5wdXROYW1lcywgeHMpO1xuICBjb25zdCBmbGF0dGVuZWRZczogdGZjLlRlbnNvcltdID1cbiAgICAgIGZsYXR0ZW5UZW5zb3JPckFycmF5T3JNYXAoJ291dHB1dCcsIG1vZGVsLm91dHB1dE5hbWVzLCB5cyk7XG5cbiAgY29uc3QgYmF0Y2hTaXplOiBudW1iZXIgPSBmbGF0dGVuZWRYc1swXS5zaGFwZVswXTtcblxuICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICBmbGF0dGVuZWRYcy5sZW5ndGggPT09IG1vZGVsLmlucHV0cy5sZW5ndGgsXG4gICAgICAoKSA9PiBgTGF5ZXJzTW9kZWwgaGFzICR7bW9kZWwuaW5wdXRzLmxlbmd0aH0gaW5wdXRzLCBidXQgdGhlIGRhdGFzZXQgYCArXG4gICAgICAgICAgYHByb3ZpZGVzICR7ZmxhdHRlbmVkWHMubGVuZ3RofSBpbnB1dHMuICAoRXhwZWN0ZWQgaW5wdXQga2V5czogYCArXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkobW9kZWwuaW5wdXROYW1lcyl9KWApO1xuXG4gIHRmYy51dGlsLmFzc2VydChcbiAgICAgIGZsYXR0ZW5lZFlzLmxlbmd0aCA9PT0gbW9kZWwub3V0cHV0cy5sZW5ndGgsXG4gICAgICAoKSA9PlxuICAgICAgICAgIGBMYXllcnNNb2RlbCBoYXMgJHttb2RlbC5vdXRwdXRzLmxlbmd0aH0gb3V0cHV0cywgYnV0IHRoZSBkYXRhc2V0IGAgK1xuICAgICAgICAgIGBwcm92aWRlcyAke2ZsYXR0ZW5lZFlzLmxlbmd0aH0gb3V0cHV0cy4gIChFeHBlY3RlZCBvdXRwdXQga2V5czogYCArXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkobW9kZWwub3V0cHV0TmFtZXMpfSlgKTtcblxuICBmb3IgKGxldCB4SW5kZXggPSAwOyB4SW5kZXggPCBmbGF0dGVuZWRYcy5sZW5ndGg7IHhJbmRleCsrKSB7XG4gICAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgICBmbGF0dGVuZWRYc1t4SW5kZXhdLnNoYXBlWzBdID09PSBiYXRjaFNpemUsXG4gICAgICAgICgpID0+IGBCYXRjaCBzaXplIG1pc21hdGNoOiBpbnB1dCBgICtcbiAgICAgICAgICAgIGAke21vZGVsLmlucHV0TmFtZXNbeEluZGV4XX0gaGFzICR7XG4gICAgICAgICAgICAgICAgICBmbGF0dGVuZWRYc1t4SW5kZXhdLnNoYXBlWzBdfTsgYCArXG4gICAgICAgICAgICBgZXhwZWN0ZWQgICR7YmF0Y2hTaXplfSBiYXNlZCBvbiBpbnB1dCAke21vZGVsLmlucHV0TmFtZXNbMF19LmApO1xuICB9XG5cbiAgZm9yIChsZXQgeUluZGV4ID0gMDsgeUluZGV4IDwgZmxhdHRlbmVkWXMubGVuZ3RoOyB5SW5kZXgrKykge1xuICAgIHRmYy51dGlsLmFzc2VydChcbiAgICAgICAgZmxhdHRlbmVkWXNbeUluZGV4XS5zaGFwZVswXSA9PT0gYmF0Y2hTaXplLFxuICAgICAgICAoKSA9PiBgQmF0Y2ggc2l6ZSBtaXNtYXRjaDogb3V0cHV0IGAgK1xuICAgICAgICAgICAgYCR7bW9kZWwub3V0cHV0TmFtZXNbeUluZGV4XX0gaGFzICR7XG4gICAgICAgICAgICAgICAgICBmbGF0dGVuZWRZc1t5SW5kZXhdLnNoYXBlWzBdfTsgYCArXG4gICAgICAgICAgICBgZXhwZWN0ZWQgICR7YmF0Y2hTaXplfSBiYXNlZCBvbiBpbnB1dCAke21vZGVsLmlucHV0TmFtZXNbMF19LmApO1xuICB9XG5cbiAgcmV0dXJuIHt4czogZmxhdHRlbmVkWHMsIHlzOiBmbGF0dGVuZWRZc307XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5UZW5zb3JPckFycmF5T3JNYXAoXG4gICAgaW5wdXRPck91dHB1dDogc3RyaW5nLCBuYW1lczogc3RyaW5nW10sIHZhbHVlczogVGVuc29yT3JBcnJheU9yTWFwKSB7XG4gIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiB0ZmMuVGVuc29yKSB7XG4gICAgcmV0dXJuIFt2YWx1ZXNdO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIHRmYy51dGlsLmFzc2VydChcbiAgICAgICAgdmFsdWVzLmxlbmd0aCA9PT0gbmFtZXMubGVuZ3RoLFxuICAgICAgICAoKSA9PiBgUmVjZWl2ZWQgYW4gYXJyYXkgb2YgJHt2YWx1ZXMubGVuZ3RofSBUZW5zb3JzLCBidXQgZXhwZWN0ZWQgJHtcbiAgICAgICAgICAgIG5hbWVzLmxlbmd0aH0gdG8gbWF0Y2ggdGhlICR7aW5wdXRPck91dHB1dH0ga2V5cyAke25hbWVzfS5gKTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlc3VsdDogdGZjLlRlbnNvcltdID0gW107XG4gICAgLy8gQ2hlY2sgdGhhdCBhbGwgdGhlIHJlcXVpcmVkIGtleXMgYXJlIGF2YWlsYWJsZS5cbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgbmFtZXMpIHtcbiAgICAgIGlmICh2YWx1ZXNbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZmVhdHVyZSBkYXRhIGdlbmVyYXRlZCBieSB0aGUgZGF0YXNldCBsYWNrcyB0aGUgcmVxdWlyZWQgYCArXG4gICAgICAgICAgICBgJHtpbnB1dE9yT3V0cHV0fSBrZXkgJyR7bmFtZX0nLmApO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWVzW25hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFuZGFyZGl6ZVRlbnNvclZhbGlkYXRpb25EYXRhPFQ+KFxuICAgIGRhdGE6XG4gICAgICAgIFtcbiAgICAgICAgICB0ZmMuVGVuc29yfHRmYy5UZW5zb3JbXSwgdGZjLlRlbnNvcnx0ZmMuVGVuc29yW11cbiAgICAgICAgXXxbdGZjLlRlbnNvciB8IHRmYy5UZW5zb3JbXSwgdGZjLlRlbnNvciB8IHRmYy5UZW5zb3JbXSxcbiAgICAgICAgICAgdGZjLlRlbnNvciB8IHRmYy5UZW5zb3JbXV0pOlxuICAgIHt4czogdGZjLlRlbnNvcnx0ZmMuVGVuc29yW10sIHlzOiB0ZmMuVGVuc29yfHRmYy5UZW5zb3JbXX0ge1xuICBpZiAoZGF0YS5sZW5ndGggPT09IDMpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgJ1ZhbGlkYXRpb24gd2l0aCBzYW1wbGUgd2VpZ2h0cyBpcyBub3QgaW1wbGVtZW50ZWQgeWV0LicpO1xuICB9XG4gIHJldHVybiB7eHM6IGRhdGFbMF0sIHlzOiBkYXRhWzFdfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpdERhdGFzZXQ8VD4oXG4gICAgLy8gVHlwZSBgbW9kZWxgIGFzIGBhbnlgIGhlcmUgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeSB3L1xuICAgIC8vIHRyYWluaW5nLnRzLlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBtb2RlbDogYW55LCBkYXRhc2V0OiBEYXRhc2V0PFQ+LFxuICAgIGFyZ3M6IE1vZGVsRml0RGF0YXNldEFyZ3M8VD4pOiBQcm9taXNlPEhpc3Rvcnk+IHtcbiAgY29uc3QgaGFzQmF0Y2hlc1BlckVwb2NoID0gYXJncy5iYXRjaGVzUGVyRXBvY2ggIT0gbnVsbDtcbiAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgbW9kZWwub3B0aW1pemVyICE9IG51bGwsXG4gICAgICAoKSA9PiAnWW91IG11c3QgY29tcGlsZSBhIG1vZGVsIGJlZm9yZSB0cmFpbmluZy90ZXN0aW5nLiBVc2UgJyArXG4gICAgICAgICAgJ0xheWVyc01vZGVsLmNvbXBpbGUobW9kZWxDb21waWxlQ29uZmlnKS4nKTtcblxuICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICBhcmdzICE9IG51bGwsXG4gICAgICAoKSA9PiBgRm9yIGZpdERhdGFzZXQoKSwgdGhlIDJuZCBhcmd1bWVudCAoY29uZmlnKSBpcyByZXF1aXJlZCwgYCArXG4gICAgICAgICAgYGJ1dCBpdCBpcyBub3QgcHJvdmlkZWQgaW4gdGhpcyBjYWxsLmApO1xuICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICBhcmdzLmVwb2NocyAhPSBudWxsICYmIGFyZ3MuZXBvY2hzID4gMCAmJiBOdW1iZXIuaXNJbnRlZ2VyKGFyZ3MuZXBvY2hzKSxcbiAgICAgICgpID0+IGBGb3IgZml0RGF0YXNldCgpLCBjb25maWcuZXBvY2hzIGlzIGV4cGVjdGVkIHRvIGJlIGEgcG9zaXRpdmUgYCArXG4gICAgICAgICAgYGludGVnZXIsIGJ1dCBnb3QgJHthcmdzLmVwb2Noc31gKTtcbiAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgIWhhc0JhdGNoZXNQZXJFcG9jaCB8fFxuICAgICAgICAgIChhcmdzLmJhdGNoZXNQZXJFcG9jaCA+IDAgJiYgTnVtYmVyLmlzSW50ZWdlcihhcmdzLmJhdGNoZXNQZXJFcG9jaCkpLFxuICAgICAgKCkgPT4gYEZvciBmaXREYXRhc2V0KCksIGNvbmZpZy5iYXRjaGVzUGVyRXBvY2ggaXMgZXhwZWN0ZWQgdG8gYmUgYSBgICtcbiAgICAgICAgICBgcG9zaXRpdmUgaW50ZWdlciBpZiBzcGVjaWZpZWQsIGJ1dCBnb3QgJHthcmdzLmJhdGNoZXNQZXJFcG9jaH1gKTtcbiAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKGFyZ3MgYXMgYW55KVsndmFsaWRhdGlvblNwbGl0J10gPT0gbnVsbCxcbiAgICAgICgpID0+ICdgdmFsaWRhdGlvblNwbGl0YCBpcyBub3Qgc3VwcG9ydGVkIGJ5IGBmaXREYXRhc2V0KClgLiAnICtcbiAgICAgICAgICAnVXNlIHZhbGlkYXRpb25EYXRhIGluc3RlYWQuJyk7XG5cbiAgaWYgKG1vZGVsLmlzVHJhaW5pbmcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3Qgc3RhcnQgdHJhaW5pbmcgYmVjYXVzZSBhbm90aGVyIGZpdCgpIGNhbGwgaXMgb25nb2luZy4nKTtcbiAgfVxuICBtb2RlbC5pc1RyYWluaW5nID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRvVmFsaWRhdGlvbiA9IGFyZ3MudmFsaWRhdGlvbkRhdGEgIT0gbnVsbDtcbiAgICBsZXQgdmFsWHM6IHRmYy5UZW5zb3J8dGZjLlRlbnNvcltdO1xuICAgIGxldCB2YWxZczogdGZjLlRlbnNvcnx0ZmMuVGVuc29yW107XG4gICAgaWYgKGRvVmFsaWRhdGlvbikge1xuICAgICAgaWYgKGlzRGF0YXNldE9iamVjdChhcmdzLnZhbGlkYXRpb25EYXRhKSkge1xuICAgICAgICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICAgICAgICBhcmdzLnZhbGlkYXRpb25CYXRjaGVzID09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAoYXJncy52YWxpZGF0aW9uQmF0Y2hlcyA+IDAgJiZcbiAgICAgICAgICAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihhcmdzLnZhbGlkYXRpb25CYXRjaGVzKSksXG4gICAgICAgICAgICAoKSA9PiBgRm9yIGZpdERhdGFzZXQoKSB3aXRoIGRhdGFzZXQtYmFzZWQgdmFsaWRhdGlvbiwgYCArXG4gICAgICAgICAgICAgICAgYGNvbmZpZy52YWxpZGF0aW9uQmF0Y2hlcyBpcyBleHBlY3RlZCBub3QgdG8gYmUgcHJvdmlkZWQsIGAgK1xuICAgICAgICAgICAgICAgIGBvciB0byBiZSBhIHBvc2l0aXZlIGludGVnZXIsIGAgK1xuICAgICAgICAgICAgICAgIGBidXQgZ290ICR7YXJncy52YWxpZGF0aW9uQmF0Y2hlc31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25EYXRhID0gc3RhbmRhcmRpemVUZW5zb3JWYWxpZGF0aW9uRGF0YShcbiAgICAgICAgICAgIGFyZ3MudmFsaWRhdGlvbkRhdGEgYXNcbiAgICAgICAgICAgICAgICAgICAgW3RmYy5UZW5zb3IgfCB0ZmMuVGVuc29yW10sIHRmYy5UZW5zb3IgfCB0ZmMuVGVuc29yW11dIHxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdGZjLlRlbnNvciB8IHRmYy5UZW5zb3JbXSwgdGZjLlRlbnNvciB8IHRmYy5UZW5zb3JbXSxcbiAgICAgICAgICAgICAgdGZjLlRlbnNvciB8IHRmYy5UZW5zb3JbXVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIHZhbFhzID0gdmFsaWRhdGlvbkRhdGEueHM7XG4gICAgICAgIHZhbFlzID0gdmFsaWRhdGlvbkRhdGEueXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdHJhaW5GdW5jdGlvbiA9IG1vZGVsLm1ha2VUcmFpbkZ1bmN0aW9uKCk7XG4gICAgY29uc3Qgb3V0TGFiZWxzID0gbW9kZWwuZ2V0RGVkdXBlZE1ldHJpY3NOYW1lcygpIGFzIHN0cmluZ1tdO1xuXG4gICAgbGV0IGNhbGxiYWNrTWV0cmljczogc3RyaW5nW107XG4gICAgaWYgKGRvVmFsaWRhdGlvbikge1xuICAgICAgY2FsbGJhY2tNZXRyaWNzID1cbiAgICAgICAgICBvdXRMYWJlbHMuc2xpY2UoKS5jb25jYXQob3V0TGFiZWxzLm1hcChuID0+ICd2YWxfJyArIG4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2tNZXRyaWNzID0gb3V0TGFiZWxzLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbGJhY2tzID0gc3RhbmRhcmRpemVDYWxsYmFja3MoYXJncy5jYWxsYmFja3MsIGFyZ3MueWllbGRFdmVyeSk7XG4gICAgY29uc3QgdmVyYm9zZSA9IGFyZ3MudmVyYm9zZSA9PSBudWxsID8gMSA6IGFyZ3MudmVyYm9zZTtcbiAgICBjb25zdCB7Y2FsbGJhY2tMaXN0LCBoaXN0b3J5fSA9IGNvbmZpZ3VyZUNhbGxiYWNrcyhcbiAgICAgICAgY2FsbGJhY2tzLCB2ZXJib3NlLCBhcmdzLmVwb2NocywgbnVsbCwgbnVsbCxcbiAgICAgICAgZ2V0U3RlcHNQZXJFcG9jaChkYXRhc2V0LCBhcmdzKSxcbiAgICAgICAgbnVsbCwgIC8vIEJhdGNoIHNpemUgZGV0ZXJtaW5lZCBieSB0aGUgZGF0YXNldCBpdHNlbGYuXG4gICAgICAgIGRvVmFsaWRhdGlvbiwgY2FsbGJhY2tNZXRyaWNzKTtcbiAgICBjYWxsYmFja0xpc3Quc2V0TW9kZWwobW9kZWwpO1xuICAgIG1vZGVsLmhpc3RvcnkgPSBoaXN0b3J5O1xuXG4gICAgYXdhaXQgY2FsbGJhY2tMaXN0Lm9uVHJhaW5CZWdpbigpO1xuICAgIG1vZGVsLnN0b3BUcmFpbmluZ18gPSBmYWxzZTtcbiAgICBsZXQgZXBvY2ggPSBhcmdzLmluaXRpYWxFcG9jaCA9PSBudWxsID8gMCA6IGFyZ3MuaW5pdGlhbEVwb2NoO1xuXG4gICAgbGV0IGRhdGFJdGVyYXRvciA9IGF3YWl0IGRhdGFzZXQuaXRlcmF0b3IoKTtcbiAgICB3aGlsZSAoZXBvY2ggPCBhcmdzLmVwb2Nocykge1xuICAgICAgY29uc3QgZXBvY2hMb2dzOiBVbnJlc29sdmVkTG9ncyA9IHt9O1xuICAgICAgYXdhaXQgY2FsbGJhY2tMaXN0Lm9uRXBvY2hCZWdpbihlcG9jaCk7XG4gICAgICBsZXQgc3RlcHNEb25lID0gMDtcbiAgICAgIGxldCBiYXRjaEluZGV4ID0gMDtcbiAgICAgIGlmICghaGFzQmF0Y2hlc1BlckVwb2NoKSB7XG4gICAgICAgIGRhdGFJdGVyYXRvciA9IGF3YWl0IGRhdGFzZXQuaXRlcmF0b3IoKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChoYXNCYXRjaGVzUGVyRXBvY2ggPyBzdGVwc0RvbmUgPCBhcmdzLmJhdGNoZXNQZXJFcG9jaCA6IHRydWUpIHtcbiAgICAgICAgY29uc3QgaXRlcmF0b3JPdXQgPSBhd2FpdCBkYXRhSXRlcmF0b3IubmV4dCgpO1xuXG4gICAgICAgIC8vIElmIGBiYXRjaGVzUGVyRXBvY2hgIGlzIHNwZWNpZmllZCwgdGhlIGRhdGFzZXQgc2hvdWxkIG5vdCBiZVxuICAgICAgICAvLyBleGhhdXN0ZWQgdW50aWwgYWxsIGVwb2NoZXMgYXJlIGRvbmUuXG4gICAgICAgIGlmIChoYXNCYXRjaGVzUGVyRXBvY2ggJiYgaXRlcmF0b3JPdXQuZG9uZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgJ1lvdSBwcm92aWRlZCBgYmF0Y2hlc1BlckVwb2NoYCBhcyAnICtcbiAgICAgICAgICAgICAgYCR7YXJncy5iYXRjaGVzUGVyRXBvY2h9LCBgICtcbiAgICAgICAgICAgICAgJ2J1dCB5b3VyIGRhdGFzZXQgaXRlcmF0b3IgcmFuIG91dCBvZiBkYXRhIGFmdGVyICcgK1xuICAgICAgICAgICAgICBgJHtzdGVwc0RvbmV9IGJhdGNoZXM7IGAgK1xuICAgICAgICAgICAgICAnaW50ZXJydXB0aW5nIHRyYWluaW5nLiBNYWtlIHN1cmUgdGhhdCB5b3VyICcgK1xuICAgICAgICAgICAgICAnZGF0YXNldCBjYW4gZ2VuZXJhdGUgYXQgbGVhc3QgYGJhdGNoZXNQZXJFcG9jaCAqIGVwb2Noc2AgJyArXG4gICAgICAgICAgICAgICdiYXRjaGVzIChpbiB0aGlzIGNhc2UsICcgK1xuICAgICAgICAgICAgICBgJHthcmdzLmJhdGNoZXNQZXJFcG9jaCAqIGFyZ3MuZXBvY2hzfSBiYXRjaGVzKS4gYCArXG4gICAgICAgICAgICAgICdZb3UgbWF5IG5lZWQgdG8gdXNlIHRoZSByZXBlYXQoKSBmdW5jdGlvbiB3aGVuIGJ1aWxkaW5nICcgK1xuICAgICAgICAgICAgICAneW91ciBkYXRhc2V0LicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZXJhdG9yT3V0LnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7eHMsIHlzfSA9XG4gICAgICAgICAgICAgIHN0YW5kYXJkaXplRGF0YUl0ZXJhdG9yT3V0cHV0KG1vZGVsLCBpdGVyYXRvck91dC52YWx1ZSk7XG4gICAgICAgICAgY29uc3QgYmF0Y2hMb2dzOiBVbnJlc29sdmVkTG9ncyA9IHt9O1xuICAgICAgICAgIGJhdGNoTG9nc1snYmF0Y2gnXSA9IGJhdGNoSW5kZXg7XG4gICAgICAgICAgYmF0Y2hMb2dzWydzaXplJ10gPSB4c1swXS5zaGFwZVswXTtcblxuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrTGlzdC5vbkJhdGNoQmVnaW4oYmF0Y2hJbmRleCwgYmF0Y2hMb2dzKTtcblxuICAgICAgICAgIGNvbnN0IHNhbXBsZVdlaWdodHM6IHRmYy5UZW5zb3JbXSA9IFtdO1xuICAgICAgICAgIGlmIChhcmdzLmNsYXNzV2VpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YW5kYXJkQ2xhc3NXZWlnaHRzID1cbiAgICAgICAgICAgICAgICBzdGFuZGFyZGl6ZUNsYXNzV2VpZ2h0cyhhcmdzLmNsYXNzV2VpZ2h0LCBtb2RlbC5vdXRwdXROYW1lcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YW5kYXJkQ2xhc3NXZWlnaHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgIHNhbXBsZVdlaWdodHMucHVzaChhd2FpdCBzdGFuZGFyZGl6ZVdlaWdodHMoXG4gICAgICAgICAgICAgICAgICB5c1tpXSwgbnVsbCwgc3RhbmRhcmRDbGFzc1dlaWdodHNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBUcmFpbiBvbiBiYXRjaC5cbiAgICAgICAgICBjb25zdCBpbnMgPSB4cy5jb25jYXQoeXMpLmNvbmNhdChzYW1wbGVXZWlnaHRzKTtcbiAgICAgICAgICBjb25zdCBvdXRzID0gdHJhaW5GdW5jdGlvbihpbnMpO1xuICAgICAgICAgIHRmYy5kaXNwb3NlKGlucyk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRMYWJlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gb3V0TGFiZWxzW2ldO1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0gb3V0c1tpXTtcbiAgICAgICAgICAgIGJhdGNoTG9nc1tsYWJlbF0gPSBvdXQ7XG4gICAgICAgICAgICB0ZmMua2VlcChvdXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrTGlzdC5vbkJhdGNoRW5kKGJhdGNoSW5kZXgsIGJhdGNoTG9ncyk7XG4gICAgICAgICAgZGlzcG9zZVRlbnNvcnNJbkxvZ3MoYmF0Y2hMb2dzKTtcblxuICAgICAgICAgIGJhdGNoSW5kZXgrKztcbiAgICAgICAgICBzdGVwc0RvbmUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNCYXRjaGVzUGVyRXBvY2ggPyBzdGVwc0RvbmUgPj0gYXJncy5iYXRjaGVzUGVyRXBvY2ggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3JPdXQuZG9uZSkge1xuICAgICAgICAgIC8vIEVwb2NoIGZpbmlzaGVkLiBQZXJmb3JtIHZhbGlkYXRpb24uXG4gICAgICAgICAgaWYgKGRvVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgbGV0IHZhbE91dHM6IHRmYy5TY2FsYXJbXTtcbiAgICAgICAgICAgIGlmIChpc0RhdGFzZXRPYmplY3QoYXJncy52YWxpZGF0aW9uRGF0YSkpIHtcbiAgICAgICAgICAgICAgdmFsT3V0cyA9IHRvTGlzdChhd2FpdCBtb2RlbC5ldmFsdWF0ZURhdGFzZXQoXG4gICAgICAgICAgICAgICAgICBhcmdzLnZhbGlkYXRpb25EYXRhLCB7YmF0Y2hlczogYXJncy52YWxpZGF0aW9uQmF0Y2hlc30pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbE91dHMgPSB0b0xpc3QobW9kZWwuZXZhbHVhdGUodmFsWHMsIHZhbFlzLCB7XG4gICAgICAgICAgICAgICAgYmF0Y2hTaXplOiBhcmdzLnZhbGlkYXRpb25CYXRjaFNpemUgPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgIERFRkFVTFRfVkFMSURBVElPTl9CQVRDSF9TSVpFIDpcbiAgICAgICAgICAgICAgICAgICAgYXJncy52YWxpZGF0aW9uQmF0Y2hTaXplLFxuICAgICAgICAgICAgICAgIHZlcmJvc2U6IDBcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2RlbC5tZXRyaWNzTmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgZXBvY2hMb2dzW2B2YWxfJHttb2RlbC5tZXRyaWNzTmFtZXNbaV19YF0gPSB2YWxPdXRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDYWxsIGBicmVha2AgdG8gZXhpdCBvbmUgZXBvY2ggbG9wcCBhZnRlciB2YWxpZGF0aW9uIGlzIGRvbmUuIElmXG4gICAgICAgICAgLy8gY29uZmlnLmJhdGNoZXNQZXJFcG9jaCBpcyBzcGVjaWZpZWQsIGFuIGVwb2NoIHdoaWxlIGxvb3Agd2lsbFxuICAgICAgICAgIC8vIHN0b3Agd2hlbiBgc3RlcHNEb25lID49IGNvbmZpZy5iYXRjaGVzUGVyRXBvY2hgLiBXaGVuXG4gICAgICAgICAgLy8gY29uZmlnLmJhdGNoZXNQZXJFcG9jaCBpcyBub3QgcHJvdmlkZWQsIHRoZSBmb2xsb3dpbmcgYGJyZWFrYCBpc1xuICAgICAgICAgIC8vIHJlcXVpcmVkIHRvIGV4aXQgdGhlIHdoaWxlIGxvcHAgYWZ0ZXIgZGF0YXNldCBpcyBleGhhdXN0ZWQuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZWwuc3RvcFRyYWluaW5nXykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCBjYWxsYmFja0xpc3Qub25FcG9jaEVuZChlcG9jaCwgZXBvY2hMb2dzKTtcbiAgICAgIGVwb2NoKys7XG4gICAgICBpZiAobW9kZWwuc3RvcFRyYWluaW5nXykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgY2FsbGJhY2tMaXN0Lm9uVHJhaW5FbmQoKTtcbiAgICBhd2FpdCBtb2RlbC5oaXN0b3J5LnN5bmNEYXRhKCk7XG4gICAgcmV0dXJuIG1vZGVsLmhpc3Rvcnk7XG4gIH0gZmluYWxseSB7XG4gICAgbW9kZWwuaXNUcmFpbmluZyA9IGZhbHNlO1xuICB9XG59XG5cbi8qKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIG51bWJlciBvZiBzdGVwcyAoYmF0Y2hlcykgcGVyIGVwb2NoLiAqL1xuZnVuY3Rpb24gZ2V0U3RlcHNQZXJFcG9jaDxUPihcbiAgICBkYXRhc2V0OiBEYXRhc2V0PFQ+LCBhcmdzOiBNb2RlbEZpdERhdGFzZXRBcmdzPFQ+KTogbnVtYmVyIHtcbiAgLy8gQXR0ZW1wdCB0byBkZXRlcm1pbmUgIyBvZiBiYXRjaGVzIGluIGFuIGVwb2NoLlxuICBsZXQgc3RlcHNQZXJFcG9jaDogbnVtYmVyID0gbnVsbDtcbiAgaWYgKGFyZ3MuYmF0Y2hlc1BlckVwb2NoICE9IG51bGwpIHtcbiAgICBzdGVwc1BlckVwb2NoID0gYXJncy5iYXRjaGVzUGVyRXBvY2g7XG4gIH0gZWxzZSBpZiAoTnVtYmVyLmlzRmluaXRlKGRhdGFzZXQuc2l6ZSkpIHtcbiAgICBzdGVwc1BlckVwb2NoID0gZGF0YXNldC5zaXplO1xuICB9XG4gIHJldHVybiBzdGVwc1BlckVwb2NoO1xufVxuXG4vLyBDaGVjayBpZiBwcm92aWRlZCBvYmplY3QgaXMgYSBEYXRhc2V0IG9iamVjdCBieSBjaGVja2luZyBpdHMgLml0ZXJhdG9yXG4vLyBlbGVtZW50LlxuZnVuY3Rpb24gaXNEYXRhc2V0T2JqZWN0PFQ+KFxuICAgIGRhdGFzZXQ6XG4gICAgICAgIFtcbiAgICAgICAgICBUZW5zb3JPckFycmF5T3JNYXAsIFRlbnNvck9yQXJyYXlPck1hcFxuICAgICAgICBdfFtUZW5zb3JPckFycmF5T3JNYXAsIFRlbnNvck9yQXJyYXlPck1hcCwgVGVuc29yT3JBcnJheU9yTWFwXXxcbiAgICBEYXRhc2V0PFQ+KTogYm9vbGVhbiB7XG4gIHJldHVybiAodHlwZW9mIChkYXRhc2V0IGFzIERhdGFzZXQ8VD4pLml0ZXJhdG9yID09PSAnZnVuY3Rpb24nKTtcbn1cblxuLy8gQ2hlY2sgaWYgcHJvdmlkZWQgb2JqZWN0IGlzIGEgTGF6eUl0ZXJhdG9yIG9iamVjdCBieSBjaGVja2luZyBpdCdzIC5uZXh0XG4vLyBlbGVtZW50LlxuZnVuY3Rpb24gaXNMYXp5SXRlcmF0b3JPYmplY3Q8VD4oaXRlcmF0b3I6IERhdGFzZXQ8VD58XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXp5SXRlcmF0b3I8VD4pOiBib29sZWFuIHtcbiAgcmV0dXJuICh0eXBlb2YgKGl0ZXJhdG9yIGFzIExhenlJdGVyYXRvcjxUPikubmV4dCA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBldmFsdWF0ZURhdGFzZXQ8VD4oXG4gICAgLy8gVHlwZSBgbW9kZWxgIGFzIGBhbnlgIGhlcmUgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeSB3L1xuICAgIC8vIHRyYWluaW5nLnRzLlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBtb2RlbDogYW55LCBkYXRhc2V0OiBEYXRhc2V0PFQ+fExhenlJdGVyYXRvcjxUPixcbiAgICBhcmdzOiBNb2RlbEV2YWx1YXRlRGF0YXNldEFyZ3MpOiBQcm9taXNlPHRmYy5TY2FsYXJ8dGZjLlNjYWxhcltdPiB7XG4gIGFyZ3MgPSBhcmdzIHx8IHt9O1xuICBjb25zdCBoYXNCYXRjaGVzID0gYXJncy5iYXRjaGVzICE9IG51bGw7XG4gIGNvbnN0IGYgPSBtb2RlbC50ZXN0RnVuY3Rpb247XG4gIGxldCBvdXRzOiB0ZmMuU2NhbGFyW10gPSBbXTtcbiAgaWYgKGFyZ3MudmVyYm9zZSA+IDApIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcignVmVyYm9zZSBtb2RlIGlzIG5vdCBpbXBsZW1lbnRlZCB5ZXQuJyk7XG4gIH1cblxuICB0ZmMudXRpbC5hc3NlcnQoXG4gICAgICAhaGFzQmF0Y2hlcyB8fCAoYXJncy5iYXRjaGVzID4gMCAmJiBOdW1iZXIuaXNJbnRlZ2VyKGFyZ3MuYmF0Y2hlcykpLFxuICAgICAgKCkgPT4gJ1Rlc3QgbG9vcCBleHBlY3RzIGBiYXRjaGVzYCB0byBiZSBhIHBvc2l0aXZlIGludGVnZXIsIGJ1dCAnICtcbiAgICAgICAgICBgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShhcmdzLmJhdGNoZXMpfWApO1xuICBjb25zdCBkYXRhSXRlcmF0b3IgPSBpc0xhenlJdGVyYXRvck9iamVjdChkYXRhc2V0KSA/XG4gICAgICBkYXRhc2V0IGFzIExhenlJdGVyYXRvcjxUPjpcbiAgICAgIGF3YWl0IChkYXRhc2V0IGFzIERhdGFzZXQ8VD4pLml0ZXJhdG9yKCk7XG4gIC8vIEtlZXBzIHRyYWNrIG9mIG51bWJlciBvZiBleGFtcGxlcyB1c2VkIGluIHRoaXMgZXZhbHVhdGlvbi5cbiAgbGV0IG51bUV4YW1wbGVzID0gMDtcbiAgbGV0IGJhdGNoID0gMDtcblxuICB3aGlsZSAoaGFzQmF0Y2hlcyA/IGJhdGNoIDwgYXJncy5iYXRjaGVzIDogdHJ1ZSkge1xuICAgIGNvbnN0IGl0ZXJhdG9yT3V0ID0gYXdhaXQgZGF0YUl0ZXJhdG9yLm5leHQoKTtcbiAgICBvdXRzID0gdGZjLnRpZHkoKCkgPT4ge1xuICAgICAgaWYgKGl0ZXJhdG9yT3V0LnZhbHVlKSB7XG4gICAgICAgIC8vIFRPRE8oY2Fpcyk6IE9uY2UgcmVhbCBkYXRhc2V0IGlzIGF2YWlsYWJsZSwgdXNlXG4gICAgICAgIC8vICAgYG1hcCh4ID0+IHN0YW5kYXJkaXplRGF0YUl0ZXJhdG9yT3V0cHV0KG1vZGVsLCB4KS5tYXAoZilgLlxuICAgICAgICBjb25zdCB7eHMsIHlzfSA9XG4gICAgICAgICAgICBzdGFuZGFyZGl6ZURhdGFJdGVyYXRvck91dHB1dChtb2RlbCwgaXRlcmF0b3JPdXQudmFsdWUpO1xuICAgICAgICBjb25zdCB4c0FuZFlzID0geHMuY29uY2F0KHlzKTtcbiAgICAgICAgY29uc3QgYmF0Y2hPdXRzID0gdGZjLnRpZHkoKCkgPT4gZih4c0FuZFlzKSk7XG4gICAgICAgIHRmYy5kaXNwb3NlKHhzQW5kWXMpO1xuXG4gICAgICAgIGlmIChiYXRjaCA9PT0gMCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0Y2hPdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBvdXRzLnB1c2goc2NhbGFyKDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiYXRjaFNpemUgPSB4c0FuZFlzWzBdLnNoYXBlWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdGNoT3V0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGNvbnN0IGJhdGNoT3V0ID0gYmF0Y2hPdXRzW2ldO1xuICAgICAgICAgIGNvbnN0IG9sZFNjYWxhciA9IG91dHNbaV07XG4gICAgICAgICAgb3V0c1tpXSA9XG4gICAgICAgICAgICAgIHRmYy50aWR5KCgpID0+IHRmYy5hZGQob3V0c1tpXSwgdGZjLm11bChiYXRjaFNpemUsIGJhdGNoT3V0KSkpO1xuICAgICAgICAgIGlmIChiYXRjaCA+IDApIHtcbiAgICAgICAgICAgIHRmYy5kaXNwb3NlKG9sZFNjYWxhcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRmYy5kaXNwb3NlKGJhdGNoT3V0cyk7XG4gICAgICAgIG51bUV4YW1wbGVzICs9IGJhdGNoU2l6ZTtcblxuICAgICAgICArK2JhdGNoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHM7XG4gICAgfSk7XG5cbiAgICBpZiAoaXRlcmF0b3JPdXQuZG9uZSkge1xuICAgICAgaWYgKGhhc0JhdGNoZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgJ1lvdXIgZGF0YXNldCBpdGVyYXRvciByYW4gb3V0IG9mIGRhdGEgZHVyaW5nIGV2YWx1YXRlRGF0YXNldCgpLiAnICtcbiAgICAgICAgICAgICdJbnRlcnJ1cHRpbmcgZXZhbHV0aW9uLiBNYWtlIHN1cmUgdGhhdCB5b3VyICcgK1xuICAgICAgICAgICAgJ2RhdGFzZXQgY2FuIGdlbmVyYXRlIGF0IGxlYXN0IGBiYXRjaGVzYCAnICtcbiAgICAgICAgICAgIGBiYXRjaGVzIChpbiB0aGlzIGNhc2UsICR7YXJncy5iYXRjaGVzfSBiYXRjaGVzKS4gYCArXG4gICAgICAgICAgICAnWW91IG1heSBuZWVkIHRvIHVzZSB0aGUgcmVwZWF0KCkgZnVuY3Rpb24gd2hlbiBidWlsZGluZyAnICtcbiAgICAgICAgICAgICd5b3VyIGRhdGFzZXQuJyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHMubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBvbGRTY2FsYXIgPSBvdXRzW2ldO1xuICAgIG91dHNbaV0gPSB0ZmMuZGl2KG91dHNbaV0sIG51bUV4YW1wbGVzKTtcbiAgICB0ZmMuZGlzcG9zZShvbGRTY2FsYXIpO1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZXRvbk9yQXJyYXkob3V0cyk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_tensors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 * Interfaces and methods for training models using tf.Tensor objects.
 */ __turbopack_context__.s([
    "checkBatchSize",
    ()=>checkBatchSize,
    "disposeNewTensors",
    ()=>disposeNewTensors,
    "ensureTensorsRank2OrHigher",
    ()=>ensureTensorsRank2OrHigher,
    "makeBatches",
    ()=>makeBatches,
    "sliceArrays",
    ()=>sliceArrays,
    "sliceArraysByIndices",
    ()=>sliceArraysByIndices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/cast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
;
;
;
function checkBatchSize(batchSize) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].assert(batchSize > 0 && Number.isInteger(batchSize), ()=>`batchSize is required to be a positive integer, but got ${batchSize}`);
}
function sliceArrays(arrays, start, stop) {
    if (arrays == null) {
        return [
            null
        ];
    } else if (Array.isArray(arrays)) {
        return arrays.map((array)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceAlongFirstAxis"])(array, start, stop - start));
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceAlongFirstAxis"])(arrays, start, stop - start);
    }
}
function sliceArraysByIndices(arrays, indices) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
        if (arrays == null) {
            return null;
        } else if (Array.isArray(arrays)) {
            return arrays.map((array)=>sliceArraysByIndices(array, indices));
        } else {
            // TODO(cais): indices should be a pre-constructed Tensor1D to avoid
            //   tensor1d() calls.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gather"])(arrays, indices.dtype === 'int32' ? indices : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$cast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cast"](indices, 'int32'));
        }
    });
}
function makeBatches(size, batchSize) {
    const output = [];
    let batchStart = 0;
    let batchEnd = null;
    while(batchStart < size){
        batchEnd = batchStart + batchSize;
        if (batchEnd >= size) {
            batchEnd = size;
        }
        output.push([
            batchStart,
            batchEnd
        ]);
        batchStart = batchEnd;
    }
    return output;
}
function ensureTensorsRank2OrHigher(tensors) {
    const outs = [];
    if (tensors instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]) {
        tensors = [
            tensors
        ];
    }
    // Make Tensors at least 2D.
    for(let i = 0; i < tensors.length; ++i){
        const tensor = tensors[i];
        if (tensor.rank === 1) {
            outs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandDims"])(tensor, 1));
        } else if (tensor.rank === 0) {
            throw new Error('Expected tensor to be at least 1D, but received a 0D tensor ' + '(scalar).');
        } else {
            outs.push(tensor);
        }
    }
    return outs;
}
function disposeNewTensors(tensors, refTensors) {
    if (tensors == null) {
        return;
    }
    const oldTensorIds = [];
    if (refTensors instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]) {
        oldTensorIds.push(refTensors.id);
    } else if (Array.isArray(refTensors)) {
        refTensors.forEach((t)=>oldTensorIds.push(t.id));
    } else if (refTensors != null) {
        // `oldTensors` is a map from string name to Tensor.
        for(const name in refTensors){
            const oldTensor = refTensors[name];
            oldTensorIds.push(oldTensor.id);
        }
    }
    const tensorsToDispose = [];
    if (tensors instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]) {
        if (oldTensorIds.indexOf(tensors.id) === -1) {
            tensorsToDispose.push(tensors);
        }
    } else if (Array.isArray(tensors)) {
        tensors.forEach((t)=>{
            if (oldTensorIds.indexOf(t.id) === -1) {
                tensorsToDispose.push(t);
            }
        });
    } else if (tensors != null) {
        // `oldTensors` is a map from string name to Tensor.
        for(const name in tensors){
            const tensor = tensors[name];
            if (oldTensorIds.indexOf(tensor.id) === -1) {
                tensorsToDispose.push(tensor);
            }
        }
    }
    tensorsToDispose.forEach((t)=>{
        if (!t.isDisposed) {
            t.dispose();
        }
    });
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW5pbmdfdGVuc29ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RmanMtbGF5ZXJzL3NyYy9lbmdpbmUvdHJhaW5pbmdfdGVuc29ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVIOztHQUVHO0FBRUgsT0FBTyxLQUFLLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsTUFBTSxFQUFXLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQTZJaEYsTUFBTSxVQUFVLGNBQWMsQ0FBQyxTQUFpQjtJQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDWCxTQUFTLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQzVDLEdBQUcsRUFBRSxDQUFDLDJEQUNGLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQ3ZCLE1BQXVCLEVBQUUsS0FBYSxFQUFFLElBQVk7SUFDdEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmO1NBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDN0U7U0FBTSxFQUFHLFVBQVU7UUFDbEIsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztLQUN6RDtB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QyxDQUFDLEVBQUU7Z0JBQzFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQjtTQUNGO0tBQ0Y7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDakIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gKiBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEludGVyZmFjZXMgYW5kIG1ldGhvZHMgZm9yIHRyYWluaW5nIG1vZGVscyB1c2luZyB0Zi5UZW5zb3Igb2JqZWN0cy5cbiAqL1xuXG5pbXBvcnQgKiBhcyB0ZmMgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7VGVuc29yLCBUZW5zb3IxRH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlJztcbmltcG9ydCB7ZXhwYW5kRGltcywgZ2F0aGVyLCBzbGljZUFsb25nRmlyc3RBeGlzfSBmcm9tICcuLi9iYWNrZW5kL3RmanNfYmFja2VuZCc7XG5pbXBvcnQge0Jhc2VDYWxsYmFjaywgQ3VzdG9tQ2FsbGJhY2tBcmdzLCBNb2RlbExvZ2dpbmdWZXJib3NpdHksIFlpZWxkRXZlcnlPcHRpb25zfSBmcm9tICcuLi9iYXNlX2NhbGxiYWNrcyc7XG5pbXBvcnQge0NsYXNzV2VpZ2h0LCBDbGFzc1dlaWdodE1hcH0gZnJvbSAnLi90cmFpbmluZ191dGlscyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGNvbmZpZ3VyYXRpb24gbW9kZWwgdHJhaW5pbmcgYmFzZWQgb24gZGF0YSBhcyBgdGYuVGVuc29yYHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWxGaXRBcmdzIHtcbiAgLyoqXG4gICAqIE51bWJlciBvZiBzYW1wbGVzIHBlciBncmFkaWVudCB1cGRhdGUuIElmIHVuc3BlY2lmaWVkLCBpdFxuICAgKiB3aWxsIGRlZmF1bHQgdG8gMzIuXG4gICAqL1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEludGVnZXIgbnVtYmVyIG9mIHRpbWVzIHRvIGl0ZXJhdGUgb3ZlciB0aGUgdHJhaW5pbmcgZGF0YSBhcnJheXMuXG4gICAqL1xuICBlcG9jaHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZlcmJvc2l0eSBsZXZlbC5cbiAgICpcbiAgICogRXhwZWN0ZWQgdG8gYmUgMCwgMSwgb3IgMi4gRGVmYXVsdDogMS5cbiAgICpcbiAgICogMCAtIE5vIHByaW50ZWQgbWVzc2FnZSBkdXJpbmcgZml0KCkgY2FsbC5cbiAgICogMSAtIEluIE5vZGUuanMgKHRmanMtbm9kZSksIHByaW50cyB0aGUgcHJvZ3Jlc3MgYmFyLCB0b2dldGhlciB3aXRoXG4gICAqICAgICByZWFsLXRpbWUgdXBkYXRlcyBvZiBsb3NzIGFuZCBtZXRyaWMgdmFsdWVzIGFuZCB0cmFpbmluZyBzcGVlZC5cbiAgICogICAgIEluIHRoZSBicm93c2VyOiBubyBhY3Rpb24uIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAqIDIgLSBOb3QgaW1wbGVtZW50ZWQgeWV0LlxuICAgKi9cbiAgdmVyYm9zZT86IE1vZGVsTG9nZ2luZ1ZlcmJvc2l0eSB8IDI7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgY2FsbGJhY2tzIHRvIGJlIGNhbGxlZCBkdXJpbmcgdHJhaW5pbmcuXG4gICAqIENhbiBoYXZlIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2tzOlxuICAgKiAgIC0gYG9uVHJhaW5CZWdpbihsb2dzKWA6IGNhbGxlZCB3aGVuIHRyYWluaW5nIHN0YXJ0cy5cbiAgICogICAtIGBvblRyYWluRW5kKGxvZ3MpYDogY2FsbGVkIHdoZW4gdHJhaW5pbmcgZW5kcy5cbiAgICogICAtIGBvbkVwb2NoQmVnaW4oZXBvY2gsIGxvZ3MpYDogY2FsbGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBlcG9jaC5cbiAgICogICAtIGBvbkVwb2NoRW5kKGVwb2NoLCBsb2dzKWA6IGNhbGxlZCBhdCB0aGUgZW5kIG9mIGV2ZXJ5IGVwb2NoLlxuICAgKiAgIC0gYG9uQmF0Y2hCZWdpbihiYXRjaCwgbG9ncylgOiBjYWxsZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IGJhdGNoLlxuICAgKiAgIC0gYG9uQmF0Y2hFbmQoYmF0Y2gsIGxvZ3MpYDogY2FsbGVkIGF0IHRoZSBlbmQgb2YgZXZlcnkgYmF0Y2guXG4gICAqICAgLSBgb25ZaWVsZChlcG9jaCwgYmF0Y2gsIGxvZ3MpYDogY2FsbGVkIGV2ZXJ5IGB5aWVsZEV2ZXJ5YCBtaWxsaXNlY29uZHNcbiAgICogICAgICB3aXRoIHRoZSBjdXJyZW50IGVwb2NoLCBiYXRjaCBhbmQgbG9ncy4gVGhlIGxvZ3MgYXJlIHRoZSBzYW1lXG4gICAqICAgICAgYXMgaW4gYG9uQmF0Y2hFbmQoKWAuIE5vdGUgdGhhdCBgb25ZaWVsZGAgY2FuIHNraXAgYmF0Y2hlcyBvclxuICAgKiAgICAgIGVwb2Nocy4gU2VlIGFsc28gZG9jcyBmb3IgYHlpZWxkRXZlcnlgIGJlbG93LlxuICAgKi9cbiAgY2FsbGJhY2tzPzogQmFzZUNhbGxiYWNrW118Q3VzdG9tQ2FsbGJhY2tBcmdzfEN1c3RvbUNhbGxiYWNrQXJnc1tdO1xuXG4gIC8qKlxuICAgKiBGbG9hdCBiZXR3ZWVuIDAgYW5kIDE6IGZyYWN0aW9uIG9mIHRoZSB0cmFpbmluZyBkYXRhXG4gICAqIHRvIGJlIHVzZWQgYXMgdmFsaWRhdGlvbiBkYXRhLiBUaGUgbW9kZWwgd2lsbCBzZXQgYXBhcnQgdGhpcyBmcmFjdGlvbiBvZlxuICAgKiB0aGUgdHJhaW5pbmcgZGF0YSwgd2lsbCBub3QgdHJhaW4gb24gaXQsIGFuZCB3aWxsIGV2YWx1YXRlIHRoZSBsb3NzIGFuZFxuICAgKiBhbnkgbW9kZWwgbWV0cmljcyBvbiB0aGlzIGRhdGEgYXQgdGhlIGVuZCBvZiBlYWNoIGVwb2NoLlxuICAgKiBUaGUgdmFsaWRhdGlvbiBkYXRhIGlzIHNlbGVjdGVkIGZyb20gdGhlIGxhc3Qgc2FtcGxlcyBpbiB0aGUgYHhgIGFuZCBgeWBcbiAgICogZGF0YSBwcm92aWRlZCwgYmVmb3JlIHNodWZmbGluZy5cbiAgICovXG4gIHZhbGlkYXRpb25TcGxpdD86IG51bWJlcjtcblxuICAvKipcbiAgICogRGF0YSBvbiB3aGljaCB0byBldmFsdWF0ZSB0aGUgbG9zcyBhbmQgYW55IG1vZGVsXG4gICAqIG1ldHJpY3MgYXQgdGhlIGVuZCBvZiBlYWNoIGVwb2NoLiBUaGUgbW9kZWwgd2lsbCBub3QgYmUgdHJhaW5lZCBvbiB0aGlzXG4gICAqIGRhdGEuIFRoaXMgY291bGQgYmUgYSB0dXBsZSBbeFZhbCwgeVZhbF0gb3IgYSB0dXBsZSBbeFZhbCwgeVZhbCxcbiAgICogdmFsU2FtcGxlV2VpZ2h0c10uIFRoZSBtb2RlbCB3aWxsIG5vdCBiZSB0cmFpbmVkIG9uIHRoaXMgZGF0YS5cbiAgICogYHZhbGlkYXRpb25EYXRhYCB3aWxsIG92ZXJyaWRlIGB2YWxpZGF0aW9uU3BsaXRgLlxuICAgKi9cbiAgdmFsaWRhdGlvbkRhdGE/OiBbXG4gICAgVGVuc29yfFRlbnNvcltdLCBUZW5zb3J8VGVuc29yW11cbiAgXXxbVGVuc29yIHwgVGVuc29yW10sIFRlbnNvcnxUZW5zb3JbXSwgVGVuc29yfFRlbnNvcltdXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBzaHVmZmxlIHRoZSB0cmFpbmluZyBkYXRhIGJlZm9yZSBlYWNoIGVwb2NoLiBIYXNcbiAgICogbm8gZWZmZWN0IHdoZW4gYHN0ZXBzUGVyRXBvY2hgIGlzIG5vdCBgbnVsbGAuXG4gICAqL1xuICBzaHVmZmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3B0aW9uYWwgb2JqZWN0IG1hcHBpbmcgY2xhc3MgaW5kaWNlcyAoaW50ZWdlcnMpIHRvXG4gICAqIGEgd2VpZ2h0IChmbG9hdCkgdG8gYXBwbHkgdG8gdGhlIG1vZGVsJ3MgbG9zcyBmb3IgdGhlIHNhbXBsZXMgZnJvbSB0aGlzXG4gICAqIGNsYXNzIGR1cmluZyB0cmFpbmluZy4gVGhpcyBjYW4gYmUgdXNlZnVsIHRvIHRlbGwgdGhlIG1vZGVsIHRvIFwicGF5IG1vcmVcbiAgICogYXR0ZW50aW9uXCIgdG8gc2FtcGxlcyBmcm9tIGFuIHVuZGVyLXJlcHJlc2VudGVkIGNsYXNzLlxuICAgKlxuICAgKiBJZiB0aGUgbW9kZWwgaGFzIG11bHRpcGxlIG91dHB1dHMsIGEgY2xhc3Mgd2VpZ2h0IGNhbiBiZSBzcGVjaWZpZWQgZm9yXG4gICAqIGVhY2ggb2YgdGhlIG91dHB1dHMgYnkgc2V0dGluZyB0aGlzIGZpZWxkIGFuIGFycmF5IG9mIHdlaWdodCBvYmplY3RcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgbWFwcyBtb2RlbCBvdXRwdXQgbmFtZXMgKGUuZy4sIGBtb2RlbC5vdXRwdXROYW1lc1swXWApXG4gICAqIHRvIHdlaWdodCBvYmplY3RzLlxuICAgKi9cbiAgY2xhc3NXZWlnaHQ/OiBDbGFzc1dlaWdodHxDbGFzc1dlaWdodFtdfENsYXNzV2VpZ2h0TWFwO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBhcnJheSBvZiB0aGUgc2FtZSBsZW5ndGggYXMgeCwgY29udGFpbmluZ1xuICAgKiB3ZWlnaHRzIHRvIGFwcGx5IHRvIHRoZSBtb2RlbCdzIGxvc3MgZm9yIGVhY2ggc2FtcGxlLiBJbiB0aGUgY2FzZSBvZlxuICAgKiB0ZW1wb3JhbCBkYXRhLCB5b3UgY2FuIHBhc3MgYSAyRCBhcnJheSB3aXRoIHNoYXBlIChzYW1wbGVzLFxuICAgKiBzZXF1ZW5jZUxlbmd0aCksIHRvIGFwcGx5IGEgZGlmZmVyZW50IHdlaWdodCB0byBldmVyeSB0aW1lc3RlcCBvZiBldmVyeVxuICAgKiBzYW1wbGUuIEluIHRoaXMgY2FzZSB5b3Ugc2hvdWxkIG1ha2Ugc3VyZSB0byBzcGVjaWZ5XG4gICAqIHNhbXBsZVdlaWdodE1vZGU9XCJ0ZW1wb3JhbFwiIGluIGNvbXBpbGUoKS5cbiAgICovXG4gIHNhbXBsZVdlaWdodD86IFRlbnNvcjtcblxuICAvKipcbiAgICogRXBvY2ggYXQgd2hpY2ggdG8gc3RhcnQgdHJhaW5pbmcgKHVzZWZ1bCBmb3IgcmVzdW1pbmcgYSBwcmV2aW91cyB0cmFpbmluZ1xuICAgKiBydW4pLiBXaGVuIHRoaXMgaXMgdXNlZCwgYGVwb2Noc2AgaXMgdGhlIGluZGV4IG9mIHRoZSBcImZpbmFsIGVwb2NoXCIuXG4gICAqIFRoZSBtb2RlbCBpcyBub3QgdHJhaW5lZCBmb3IgYSBudW1iZXIgb2YgaXRlcmF0aW9ucyBnaXZlbiBieSBgZXBvY2hzYCxcbiAgICogYnV0IG1lcmVseSB1bnRpbCB0aGUgZXBvY2ggb2YgaW5kZXggYGVwb2Noc2AgaXMgcmVhY2hlZC5cbiAgICovXG4gIGluaXRpYWxFcG9jaD86IG51bWJlcjtcblxuICAvKipcbiAgICogVG90YWwgbnVtYmVyIG9mIHN0ZXBzIChiYXRjaGVzIG9mIHNhbXBsZXMpIGJlZm9yZVxuICAgKiBkZWNsYXJpbmcgb25lIGVwb2NoIGZpbmlzaGVkIGFuZCBzdGFydGluZyB0aGUgbmV4dCBlcG9jaC4gV2hlbiB0cmFpbmluZ1xuICAgKiB3aXRoIElucHV0IFRlbnNvcnMgc3VjaCBhcyBUZW5zb3JGbG93IGRhdGEgdGVuc29ycywgdGhlIGRlZmF1bHQgYG51bGxgIGlzXG4gICAqIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgdW5pcXVlIHNhbXBsZXMgaW4geW91ciBkYXRhc2V0IGRpdmlkZWQgYnkgdGhlXG4gICAqIGJhdGNoIHNpemUsIG9yIDEgaWYgdGhhdCBjYW5ub3QgYmUgZGV0ZXJtaW5lZC5cbiAgICovXG4gIHN0ZXBzUGVyRXBvY2g/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE9ubHkgcmVsZXZhbnQgaWYgYHN0ZXBzUGVyRXBvY2hgIGlzIHNwZWNpZmllZC4gVG90YWwgbnVtYmVyIG9mIHN0ZXBzXG4gICAqIChiYXRjaGVzIG9mIHNhbXBsZXMpIHRvIHZhbGlkYXRlIGJlZm9yZSBzdG9wcGluZy5cbiAgICovXG4gIHZhbGlkYXRpb25TdGVwcz86IG51bWJlcjtcblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgZnJlcXVlbmN5IG9mIHlpZWxkaW5nIHRoZSBtYWluIHRocmVhZCB0byBvdGhlciB0YXNrcy5cbiAgICpcbiAgICogSW4gdGhlIGJyb3dzZXIgZW52aXJvbm1lbnQsIHlpZWxkaW5nIHRoZSBtYWluIHRocmVhZCBjYW4gaW1wcm92ZSB0aGVcbiAgICogcmVzcG9uc2l2ZW5lc3Mgb2YgdGhlIHBhZ2UgZHVyaW5nIHRyYWluaW5nLiBJbiB0aGUgTm9kZS5qcyBlbnZpcm9ubWVudCxcbiAgICogaXQgY2FuIGVuc3VyZSB0YXNrcyBxdWV1ZWQgaW4gdGhlIGV2ZW50IGxvb3AgY2FuIGJlIGhhbmRsZWQgaW4gYSB0aW1lbHlcbiAgICogbWFubmVyLlxuICAgKlxuICAgKiBUaGUgdmFsdWUgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuICAgKiAgIC0gYCdhdXRvJ2A6IFRoZSB5aWVsZGluZyBoYXBwZW5zIGF0IGEgY2VydGFpbiBmcmFtZSByYXRlIChjdXJyZW50bHkgc2V0XG4gICAqICAgICAgICAgICAgICAgYXQgMTI1bXMpLiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgKiAgIC0gYCdiYXRjaCdgOiB5aWVsZCBldmVyeSBiYXRjaC5cbiAgICogICAtIGAnZXBvY2gnYDogeWllbGQgZXZlcnkgZXBvY2guXG4gICAqICAgLSBhbnkgYG51bWJlcmA6IHlpZWxkIGV2ZXJ5IGBudW1iZXJgIG1pbGxpc2Vjb25kcy5cbiAgICogICAtIGAnbmV2ZXInYDogbmV2ZXIgeWllbGQuICh5aWVsZGluZyBjYW4gc3RpbGwgaGFwcGVuIHRocm91Z2ggYGF3YWl0XG4gICAqICAgICAgbmV4dEZyYW1lKClgIGNhbGxzIGluIGN1c3RvbSBjYWxsYmFja3MuKVxuICAgKi9cbiAgeWllbGRFdmVyeT86IFlpZWxkRXZlcnlPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tCYXRjaFNpemUoYmF0Y2hTaXplOiBudW1iZXIpIHtcbiAgdGZjLnV0aWwuYXNzZXJ0KFxuICAgICAgYmF0Y2hTaXplID4gMCAmJiBOdW1iZXIuaXNJbnRlZ2VyKGJhdGNoU2l6ZSksXG4gICAgICAoKSA9PiBgYmF0Y2hTaXplIGlzIHJlcXVpcmVkIHRvIGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgYnV0IGdvdCAke1xuICAgICAgICAgIGJhdGNoU2l6ZX1gKTtcbn1cblxuLyoqXG4gKiBTbGljZSBhIFRlbnNvciBvciBhbiBBcnJheSBvZiBUZW5zb3JzLCBieSBzdGFydCBhbmQgc3RvcCBpbmRpY2VzLlxuICpcbiAqIFBvcnRpbmcgTm90ZTogVGhlIGBfc2xpY2VfYXJyYXlzYCBmdW5jdGlvbiBpbiBQeUtlcmFzIGlzIGNvdmVyZWQgYnkgdGhpc1xuICogICBmdW5jdGlvbiBhbmQgYHNsaWNlQXJyYXlzQnlJbmRpY2VzKClgIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSBhcnJheXM6IHRoZSBpbnB1dC5cbiAqIEBwYXJhbSBzdGFydDogdGhlIHN0YXJ0aW5nIGluZGV4IChpbmNsdXNpdmUpLlxuICogQHBhcmFtIHN0b3A6IHRoZSBzdG9wcGluZyBpbmRleCAoZXhjbHVzaXZlKS5cbiAqIEByZXR1cm5zIFRoZSByZXN1bHQgb2YgdGhlIHNsaWNpbmcuIElmIGBhcnJheXNgIGlzIGFuIGBBcnJheWAgb2ZcbiAqICAgYHRmLlRlbnNvcmBzLCB0aGUgc2xpY2luZyB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGVsZW1lbnRzIG9mIHRoZSBgQXJyYXlgXG4gKiAgIGluIHRoZSBzYW1lIHdheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsaWNlQXJyYXlzKFxuICAgIGFycmF5czogVGVuc29yfFRlbnNvcltdLCBzdGFydDogbnVtYmVyLCBzdG9wOiBudW1iZXIpOiBUZW5zb3J8VGVuc29yW10ge1xuICBpZiAoYXJyYXlzID09IG51bGwpIHtcbiAgICByZXR1cm4gW251bGxdO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXlzKSkge1xuICAgIHJldHVybiBhcnJheXMubWFwKGFycmF5ID0+IHNsaWNlQWxvbmdGaXJzdEF4aXMoYXJyYXksIHN0YXJ0LCBzdG9wIC0gc3RhcnQpKTtcbiAgfSBlbHNlIHsgIC8vIFRlbnNvci5cbiAgICByZXR1cm4gc2xpY2VBbG9uZ0ZpcnN0QXhpcyhhcnJheXMsIHN0YXJ0LCBzdG9wIC0gc3RhcnQpO1xuICB9XG59XG5cbi8qKlxuICogU2xpY2UgYSBUZW5zb3Igb3IgYW4gQXJyYXkgb2YgVGVuc29ycywgYnkgcmFuZG9tLW9yZGVyIGluZGljZXMuXG4gKlxuICogUG9ydGluZyBOb3RlOiBUaGUgYF9zbGljZV9hcnJheXNgIGZ1bmN0aW9uIGluIFB5S2VyYXMgaXMgY292ZXJlZCBieSB0aGlzXG4gKiAgIGZ1bmN0aW9uIGFuZCBgc2xpY2VBcnJheXMoKWAgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIGFycmF5cyBUaGUgaW5wdXQgYHRmLlRlbnNvcmAgb3IgYEFycmF5YCBvZiBgdGYuVGVuc29yYHMgdG8gc2xpY2UuXG4gKiAgIElmIGFuIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzLCBhbGwgYHRmLlRlbnNvcmBzIHdpbGwgYmUgc2xpY2VkIGluIHRoZVxuICogICBzYW1lIGZhc2hpb24uXG4gKiBAcGFyYW0gaW5kaWNlcyBUaGUgaW5kaWNlcyB0byB1c2UgZm9yIHNsaWNpbmcgYWxvbmcgdGhlIGZpcnN0IChiYXRjaClcbiAqICAgZGltZW5zaW9uLlxuICogQHJldHVybnMgUmVzdWx0KHMpIG9mIHRoZSBzbGljaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2VBcnJheXNCeUluZGljZXMoXG4gICAgYXJyYXlzOiBUZW5zb3J8VGVuc29yW10sIGluZGljZXM6IFRlbnNvcjFEKTogVGVuc29yfFRlbnNvcltdIHtcbiAgcmV0dXJuIHRmYy50aWR5KCgpID0+IHtcbiAgICBpZiAoYXJyYXlzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcnJheXMpKSB7XG4gICAgICByZXR1cm4gYXJyYXlzLm1hcChcbiAgICAgICAgICBhcnJheSA9PiAoc2xpY2VBcnJheXNCeUluZGljZXMoYXJyYXksIGluZGljZXMpIGFzIFRlbnNvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKGNhaXMpOiBpbmRpY2VzIHNob3VsZCBiZSBhIHByZS1jb25zdHJ1Y3RlZCBUZW5zb3IxRCB0byBhdm9pZFxuICAgICAgLy8gICB0ZW5zb3IxZCgpIGNhbGxzLlxuICAgICAgcmV0dXJuIGdhdGhlcihcbiAgICAgICAgICBhcnJheXMsXG4gICAgICAgICAgaW5kaWNlcy5kdHlwZSA9PT0gJ2ludDMyJyA/IGluZGljZXMgOiB0ZmMuY2FzdChpbmRpY2VzLCAnaW50MzInKSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBiYXRjaCBpbmRpY2VzICh0dXBsZXMgb2YgaW5kaWNlcykuXG4gKiBAcGFyYW0gc2l6ZTogSW50ZWdlciwgdG90YWwgc2l6ZSBvZiB0aGUgZGF0YSB0byBzbGljZSBpbnRvIGJhdGNoZXMuXG4gKiBAcGFyYW0gYmF0Y2hTaXplOiBJbnRlZ2VyLCBiYXRjaCBzaXplLlxuICogQHJldHVybnMgQW4gQXJyYXkgb2YgW2JhdGNoU3RhcnQsIGJhdGNoRW5kXSB0dXBsZXMuIGJhdGNoU3RhcnQgaXNcbiAqICAgaW5jbHVzaXZlOyBiYXRjaEVuZCBpcyBleGNsdXNpdmUuIEkuZS4sIGVhY2ggYmF0Y2ggY29uc2lzdHMgb2YgaW5kaWNlcyB4XG4gKiAgIHRoYXQgc2F0aXNmeSBiYXRjaFN0YXJ0IDw9IHggPCBiYXRjaEVuZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCYXRjaGVzKFxuICAgIHNpemU6IG51bWJlciwgYmF0Y2hTaXplOiBudW1iZXIpOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiB7XG4gIGNvbnN0IG91dHB1dDogQXJyYXk8W251bWJlciwgbnVtYmVyXT4gPSBbXTtcbiAgbGV0IGJhdGNoU3RhcnQgPSAwO1xuICBsZXQgYmF0Y2hFbmQ6IG51bWJlciA9IG51bGw7XG4gIHdoaWxlIChiYXRjaFN0YXJ0IDwgc2l6ZSkge1xuICAgIGJhdGNoRW5kID0gYmF0Y2hTdGFydCArIGJhdGNoU2l6ZTtcbiAgICBpZiAoYmF0Y2hFbmQgPj0gc2l6ZSkge1xuICAgICAgYmF0Y2hFbmQgPSBzaXplO1xuICAgIH1cbiAgICBvdXRwdXQucHVzaChbYmF0Y2hTdGFydCwgYmF0Y2hFbmRdKTtcbiAgICBiYXRjaFN0YXJ0ID0gYmF0Y2hFbmQ7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGVuc29ycyBhbGwgaGF2ZSBhIHJhbmsgb2YgYXQgbGVhc3QgMi5cbiAqXG4gKiBJZiBhIHRlbnNvciBoYXMgYSByYW5rIG9mIDEsIGl0IGlzIGRpbWVuc2lvbi1leHBhbmRlZCB0byByYW5rIDIuXG4gKiBJZiBhbnkgdGVuc29yIGhhcyBhIHJhbmsgb2YgMCAoaS5lLiwgaXMgYSBzY2FsYXIpLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVRlbnNvcnNSYW5rMk9ySGlnaGVyKHRlbnNvcnM6IFRlbnNvcnxUZW5zb3JbXSk6IFRlbnNvcltdIHtcbiAgY29uc3Qgb3V0czogVGVuc29yW10gPSBbXTtcbiAgaWYgKHRlbnNvcnMgaW5zdGFuY2VvZiBUZW5zb3IpIHtcbiAgICB0ZW5zb3JzID0gW3RlbnNvcnNdO1xuICB9XG5cbiAgLy8gTWFrZSBUZW5zb3JzIGF0IGxlYXN0IDJELlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbnNvcnMubGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCB0ZW5zb3IgPSB0ZW5zb3JzW2ldO1xuICAgIGlmICh0ZW5zb3IucmFuayA9PT0gMSkge1xuICAgICAgb3V0cy5wdXNoKGV4cGFuZERpbXModGVuc29yLCAxKSk7XG4gICAgfSBlbHNlIGlmICh0ZW5zb3IucmFuayA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdFeHBlY3RlZCB0ZW5zb3IgdG8gYmUgYXQgbGVhc3QgMUQsIGJ1dCByZWNlaXZlZCBhIDBEIHRlbnNvciAnICtcbiAgICAgICAgICAnKHNjYWxhcikuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHMucHVzaCh0ZW5zb3IpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0cztcbn1cblxuLyoqXG4gKiBDb21wYXJlIGEgc2V0IG9mIHRlbnNvcnMgd2l0aCBhIHJlZmVyZW5jZSAob2xkKSBzZXQsIGRpc2NhcmQgdGhlIG9uZXNcbiAqIGluIHRoZSBuZXcgc2V0IHRoYXQgYXJlIG5vdCBwcmVzZW50IGluIHRoZSByZWZlcmVuY2Ugc2V0LlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgZm9yIG1lbW9yeSBjbGVuYXVwIGR1cmluZyBjYWxscyBzdWNoIGFzXG4gKiBMYXllcnNNb2RlbC5maXQoKS5cbiAqXG4gKiBAcGFyYW0gdGVuc29ycyBOZXcgc2V0IHdoaWNoIG1heSBjb250YWluIFRlbnNvcnMgbm90IHByZXNlbnQgaW5cbiAqICAgYHJlZlRlbnNvcnNgLlxuICogQHBhcmFtIHJlZlRlbnNvcnMgUmVmZXJlbmNlIFRlbnNvciBzZXQuXG4gKi9cbi8vIFRPRE8oY2Fpcywga2FuZ3lpemhhbmcpOiBEZWR1cGxpY2F0ZSB3aXRoIHRmanMtZGF0YS5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwb3NlTmV3VGVuc29ycyhcbiAgICB0ZW5zb3JzOiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgcmVmVGVuc29yczogVGVuc29yfFRlbnNvcltdfHtbaW5wdXROYW1lOiBzdHJpbmddOiBUZW5zb3J9KTogdm9pZCB7XG4gIGlmICh0ZW5zb3JzID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb2xkVGVuc29ySWRzOiBudW1iZXJbXSA9IFtdO1xuICBpZiAocmVmVGVuc29ycyBpbnN0YW5jZW9mIFRlbnNvcikge1xuICAgIG9sZFRlbnNvcklkcy5wdXNoKHJlZlRlbnNvcnMuaWQpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVmVGVuc29ycykpIHtcbiAgICByZWZUZW5zb3JzLmZvckVhY2godCA9PiBvbGRUZW5zb3JJZHMucHVzaCh0LmlkKSk7XG4gIH0gZWxzZSBpZiAocmVmVGVuc29ycyAhPSBudWxsKSB7XG4gICAgLy8gYG9sZFRlbnNvcnNgIGlzIGEgbWFwIGZyb20gc3RyaW5nIG5hbWUgdG8gVGVuc29yLlxuICAgIGZvciAoY29uc3QgbmFtZSBpbiByZWZUZW5zb3JzKSB7XG4gICAgICBjb25zdCBvbGRUZW5zb3IgPSByZWZUZW5zb3JzW25hbWVdO1xuICAgICAgb2xkVGVuc29ySWRzLnB1c2gob2xkVGVuc29yLmlkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0ZW5zb3JzVG9EaXNwb3NlOiBUZW5zb3JbXSA9IFtdO1xuICBpZiAodGVuc29ycyBpbnN0YW5jZW9mIFRlbnNvcikge1xuICAgIGlmIChvbGRUZW5zb3JJZHMuaW5kZXhPZih0ZW5zb3JzLmlkKSA9PT0gLTEpIHtcbiAgICAgIHRlbnNvcnNUb0Rpc3Bvc2UucHVzaCh0ZW5zb3JzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0ZW5zb3JzKSkge1xuICAgIHRlbnNvcnMuZm9yRWFjaCh0ID0+IHtcbiAgICAgIGlmIChvbGRUZW5zb3JJZHMuaW5kZXhPZih0LmlkKSA9PT0gLTEpIHtcbiAgICAgICAgdGVuc29yc1RvRGlzcG9zZS5wdXNoKHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHRlbnNvcnMgIT0gbnVsbCkge1xuICAgIC8vIGBvbGRUZW5zb3JzYCBpcyBhIG1hcCBmcm9tIHN0cmluZyBuYW1lIHRvIFRlbnNvci5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGVuc29ycykge1xuICAgICAgY29uc3QgdGVuc29yID0gdGVuc29yc1tuYW1lXTtcbiAgICAgIGlmIChvbGRUZW5zb3JJZHMuaW5kZXhPZih0ZW5zb3IuaWQpID09PSAtMSkge1xuICAgICAgICB0ZW5zb3JzVG9EaXNwb3NlLnB1c2godGVuc29yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0ZW5zb3JzVG9EaXNwb3NlLmZvckVhY2godCA9PiB7XG4gICAgaWYgKCF0LmlzRGlzcG9zZWQpIHtcbiAgICAgIHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */ /* Original Source: engine/training.py */ __turbopack_context__.s([
    "Functional",
    ()=>Functional,
    "LayersModel",
    ()=>LayersModel,
    "checkArrayLengths",
    ()=>checkArrayLengths,
    "collectMetrics",
    ()=>collectMetrics,
    "isDataArray",
    ()=>isDataArray,
    "isDataDict",
    ()=>isDataDict,
    "isDataTensor",
    ()=>isDataTensor,
    "standardizeInputData",
    ()=>standardizeInputData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/globals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/add.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mul.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/div.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/mean.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/io/io.js [app-ssr] (ecmascript) <export * as io>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$optimizers$2f$optimizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/optimizers/optimizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/scalar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/serialization.js [app-ssr] (ecmascript) <export * as serialization>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/tensor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/ops/tensor1d.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs-core/dist/util.js [app-ssr] (ecmascript) <export * as util>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/tfjs_backend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/base_callbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/layers/serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/logs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/losses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/metrics.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$optimizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/optimizers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$user_defined_metadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/user_defined_metadata.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/generic_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$layer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/layer_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/math_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/utils/serialization_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/version.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/executor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_dataset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_dataset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_tensors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/training_utils.js [app-ssr] (ecmascript)");
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
function isDataTensor(x) {
    return x instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"];
}
function isDataArray(x) {
    return Array.isArray(x);
}
function isDataDict(x) {
    return !isDataTensor(x) && !isDataArray(x);
}
function standardizeInputData(data, names, shapes, checkBatchAxis = true, exceptionPrefix = '') {
    if (names == null || names.length === 0) {
        // Check for the case where the model expected no data, but some data got
        // sent.
        if (data != null) {
            let gotUnexpectedData = false;
            if (isDataArray(data) && data.length > 0) {
                gotUnexpectedData = true;
            } else if (isDataDict(data)) {
                for(const key in data){
                    if (data.hasOwnProperty(key)) {
                        gotUnexpectedData = true;
                        break;
                    }
                }
            } else {
                // `data` is a singleton Tensor in this case.
                gotUnexpectedData = true;
            }
            if (gotUnexpectedData) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Error when checking model ${exceptionPrefix} expected no data, ` + `but got ${data}`);
            }
        }
        return [];
    }
    if (data == null) {
        return names.map((name)=>null);
    }
    let arrays;
    if (isDataDict(data)) {
        data = data;
        arrays = [];
        for (const name of names){
            if (data[name] == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`No data provided for "${name}". Need data for each key in: ` + `${names}`);
            }
            arrays.push(data[name]);
        }
    } else if (isDataArray(data)) {
        data = data;
        if (data.length !== names.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Error when checking model ${exceptionPrefix}: the Array of ` + `Tensors that you are passing to your model is not the size the ` + `model expected. Expected to see ${names.length} Tensor(s), but ` + `instead got the following list of Tensor(s): ${data}`);
        }
        arrays = data;
    } else {
        data = data;
        if (names.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The model ${exceptionPrefix} expects ${names.length} Tensor(s), ` + `but only received one Tensor. Found: Tensor with shape ${data.shape}`);
        }
        arrays = [
            data
        ];
    }
    arrays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureTensorsRank2OrHigher"])(arrays);
    // Check shape compatibility.
    if (shapes != null) {
        for(let i = 0; i < names.length; ++i){
            if (shapes[i] == null) {
                continue;
            }
            const array = arrays[i];
            if (array.shape.length !== shapes[i].length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Error when checking ${exceptionPrefix}: expected ${names[i]} ` + `to have ${shapes[i].length} dimension(s). but got array with ` + `shape ${array.shape}`);
            }
            for(let j = 0; j < shapes[i].length; ++j){
                if (j === 0 && !checkBatchAxis) {
                    continue;
                }
                const dim = array.shape[j];
                const refDim = shapes[i][j];
                if (refDim != null && refDim >= 0 && dim !== refDim) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`${exceptionPrefix} expected a batch of elements where each ` + `example has shape [${shapes[i].slice(1, shapes[i].length)}] ` + `(i.e.,tensor shape [*,${shapes[i].slice(1, shapes[i].length)}])` + ` but the ${exceptionPrefix} received an input with ${array.shape[0]}` + ` examples, each with shape [${array.shape.slice(1, array.shape.length)}]` + ` (tensor shape [${array.shape}])`);
                }
            }
        }
    }
    return arrays;
}
function checkArrayLengths(inputs, targets, weights) {
    const setX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unique"])(inputs.map((input)=>input.shape[0]));
    setX.sort();
    const setY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unique"])(targets.map((target)=>target.shape[0]));
    setY.sort();
    // TODO(cais): Check `weights` as well.
    if (setX.length > 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`All input Tensors (x) should have the same number of samples. ` + `Got array shapes: ` + `${JSON.stringify(inputs.map((input)=>input.shape))}`);
    }
    if (setY.length > 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`All target Tensors (y) should have the same number of samples. ` + `Got array shapes: ` + `${JSON.stringify(targets.map((target)=>target.shape))}`);
    }
    if (setX.length > 0 && setY.length > 0 && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].arraysEqual(setX, setY)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Input Tensors should have the same number of samples as target ` + `Tensors. Found ${setX[0]} input sample(s) and ${setY[0]} target ` + `sample(s).`);
    }
}
/**
 * Validation on the compatibility of targes and loss functions.
 *
 * This helps prevent users from using loss functions incorrectly.
 *
 * @param targets `Array` of `tf.Tensor`s of targets.
 * @param lossFns `Array` of loss functions.
 * @param outputShapes `Array` of shapes of model outputs.
 */ function checkLossAndTargetCompatibility(targets, lossFns, outputShapes) {
    // TODO(cais): Dedicated test coverage?
    const keyLosses = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meanSquaredError"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryCrossentropy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalCrossentropy"]
    ];
    for(let i = 0; i < targets.length; ++i){
        const y = targets[i];
        const loss = lossFns[i];
        const shape = outputShapes[i];
        if (loss == null) {
            continue;
        }
        if (loss === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalCrossentropy"]) {
            if (y.shape[y.shape.length - 1] === 1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`You are passing a target array of shape ${y.shape} while using ` + `a loss 'categorical_crossentropy'. 'categorical_crossentropy'` + `expects targets to be binary matrices (1s and 0s) of shape ` + `[samples, classes].`);
            // TODO(cais): Example code in error message.
            }
        }
        if (keyLosses.indexOf(loss) !== -1) {
            const slicedYShape = y.shape.slice(1);
            const slicedShape = shape.slice(1);
            for(let j = 0; j < slicedYShape.length; ++j){
                const targetDim = slicedYShape[j];
                const outDim = slicedShape[j];
                if (outDim != null && targetDim !== outDim) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`A target Tensor with shape ${y.shape} was passed for an ` + `output of shape ${shape}, while using a loss function that ` + `expects targets to have the same shape as the output.`);
                }
            }
        }
    }
}
/**
 * Check inputs provided by the user.
 *
 * Porting Note: This corresponds to _standardize_input_data() in Python
 *   Keras. Because of the strong typing in TF.js, we do not need to convert
 *   the data. Specifically:
 *   1) in PyKeras, `data` can be `DataFrame` instances from pandas, for
 *      example. We don't need to worry about that here because there is no
 *      widely popular javascript/typesdcript equivalent of pandas (so far).
 *      If one becomes available in the future, we can add support.
 *   2) in PyKeras, inputs can be Python dict. But here we are stipulating
 * that the data is either a single `tf.Tensor` or an Array of `tf.Tensor`s. We
 * may add support for `Object` data inputs in the future when the need
 * arises.
 *
 * Instead, we perform basic checks for number of parameters and shapes.
 *
 * @param data: The input data.
 * @param names: Name for the inputs, from the model.
 * @param shapes: Expected shapes for the input data, from the model.
 * @param checkBatchAxis: Whether the size along the batch axis (i.e., the
 *   first dimension) will be checked for matching.
 * @param exceptionPrefix: Execption prefix message, used in generating error
 *   messages.
 * @throws ValueError: on incorrect number of inputs or mismatches in shapes.
 */ function checkInputData(data, names, shapes, checkBatchAxis = true, exceptionPrefix = '') {
    let arrays;
    if (Array.isArray(data)) {
        if (data.length !== names.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Error when checking model ${exceptionPrefix}: the Array of ` + `Tensors that you are passing to your model is not the size the ` + `the model expected. Expected to see ${names.length} Tensor(s),` + ` but instead got ${data.length} Tensors(s).`);
        }
        arrays = data;
    } else {
        if (names.length > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The model expects ${names.length} ${exceptionPrefix} Tensors, ` + `but only received one Tensor. Found: array with shape ` + `${JSON.stringify(data.shape)}.`);
        }
        arrays = [
            data
        ];
    }
    if (shapes != null) {
        for(let i = 0; i < names.length; ++i){
            if (shapes[i] == null) {
                continue;
            }
            const array = arrays[i];
            if (array.shape.length !== shapes[i].length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Error when checking ${exceptionPrefix}: expected ${names[i]} ` + `to have ${shapes[i].length} dimension(s), but got array with ` + `shape ${JSON.stringify(array.shape)}`);
            }
            for(let j = 0; j < shapes[i].length; ++j){
                if (j === 0 && !checkBatchAxis) {
                    continue;
                }
                const dim = array.shape[j];
                const refDim = shapes[i][j];
                if (refDim != null) {
                    if (refDim !== dim) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Error when checking ${exceptionPrefix}: expected ` + `${names[i]} to have shape ${JSON.stringify(shapes[i])} but ` + `got array with shape ${JSON.stringify(array.shape)}.`);
                    }
                }
            }
        }
    }
}
function collectMetrics(metrics, outputNames) {
    if (metrics == null || Array.isArray(metrics) && metrics.length === 0) {
        return outputNames.map((name)=>[]);
    }
    let wrappedMetrics;
    if (typeof metrics === 'string' || typeof metrics === 'function') {
        wrappedMetrics = [
            metrics
        ];
    } else if (Array.isArray(metrics) || typeof metrics === 'object') {
        wrappedMetrics = metrics;
    } else {
        throw new TypeError('Type of metrics argument not understood. Expected an string,' + `function, Array, or Object, found: ${metrics}`);
    }
    if (Array.isArray(wrappedMetrics)) {
        // We then apply all metrics to all outputs.
        return outputNames.map((name)=>wrappedMetrics);
    } else {
        // In this case, metrics is a dict.
        const nestedMetrics = [];
        for (const name of outputNames){
            let outputMetrics = wrappedMetrics.hasOwnProperty(name) ? wrappedMetrics[name] : [];
            if (!Array.isArray(outputMetrics)) {
                outputMetrics = [
                    outputMetrics
                ];
            }
            nestedMetrics.push(outputMetrics);
        }
        return nestedMetrics;
    }
}
const LAYERS_MODEL_FORMAT_NAME = 'layers-model';
/**
 * A `tf.LayersModel` is a directed, acyclic graph of `tf.Layer`s plus methods
 * for training, evaluation, prediction and saving.
 *
 * `tf.LayersModel` is the basic unit of training, inference and evaluation in
 * TensorFlow.js. To create a `tf.LayersModel`, use `tf.LayersModel`.
 *
 * See also:
 *   `tf.Sequential`, `tf.loadLayersModel`.
 *
 * @doc {heading: 'Models', subheading: 'Classes'}
 */ class LayersModel extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"] {
    constructor(args){
        super(args);
        this.isTraining = false;
    }
    /**
     * Print a text summary of the model's layers.
     *
     * The summary includes
     * - Name and type of all layers that comprise the model.
     * - Output shape(s) of the layers
     * - Number of weight parameters of each layer
     * - If the model has non-sequential-like topology, the inputs each layer
     *   receives
     * - The total number of trainable and non-trainable parameters of the model.
     *
     * ```js
     * const input1 = tf.input({shape: [10]});
     * const input2 = tf.input({shape: [20]});
     * const dense1 = tf.layers.dense({units: 4}).apply(input1);
     * const dense2 = tf.layers.dense({units: 8}).apply(input2);
     * const concat = tf.layers.concatenate().apply([dense1, dense2]);
     * const output =
     *     tf.layers.dense({units: 3, activation: 'softmax'}).apply(concat);
     *
     * const model = tf.model({inputs: [input1, input2], outputs: output});
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`This model has never been called, thus its weights have not been ` + `created yet. So no summary can be displayed. Build the model ` + `first (e.g., by calling it on some test data).`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$layer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["printSummary"])(this, lineLength, positions, printFn);
    }
    /**
     * Configures and prepares the model for training and evaluation.  Compiling
     * outfits the model with an optimizer, loss, and/or metrics.  Calling `fit`
     * or `evaluate` on an un-compiled model will throw an error.
     *
     * @param args a `ModelCompileArgs` specifying the loss, optimizer, and
     * metrics to be used for fitting and evaluating this model.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ compile(args) {
        if (args.loss == null) {
            args.loss = [];
        }
        this.loss = args.loss;
        if (typeof args.optimizer === 'string') {
            this.optimizer_ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$optimizers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptimizer"](args.optimizer);
            this.isOptimizerOwned = true;
        } else {
            if (!(args.optimizer instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$optimizers$2f$optimizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Optimizer"])) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`User-defined optimizer must be an instance of tf.Optimizer.`);
            }
            this.optimizer_ = args.optimizer;
            this.isOptimizerOwned = false;
        }
        // TODO(cais): Add lossWeights.
        // TODO(cais): Add sampleWeightMode.
        // Prepare loss functions.
        let lossFunctions = [];
        if (!Array.isArray(args.loss) && typeof args.loss !== 'string' && typeof args.loss !== 'function') {
            args.loss = args.loss;
            for(const name in args.loss){
                if (this.outputNames.indexOf(name) === -1) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Unknown entry in loss dictionary: "${name}". ` + `Only expected the following keys: ${this.outputNames}`);
                }
            }
            for (const name of this.outputNames){
                if (args.loss[name] == null) {
                    console.warn(`Output "${name}" is missing from loss dictionary. We assume ` + `this was done on purpose, and we will not be expecting data ` + `to be passed to ${name} during training`);
                }
                lossFunctions.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"](args.loss[name]));
            }
        } else if (Array.isArray(args.loss)) {
            if (args.loss.length !== this.outputs.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`When passing an Array as loss, it should have one entry per ` + `model output. The model has ${this.outputs.length} output(s), ` + `but you passed loss=${args.loss}.`);
            }
            const theLosses = args.loss;
            lossFunctions = theLosses.map((l)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"](l));
        } else {
            const lossFunction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"](args.loss);
            this.outputs.forEach((_)=>{
                lossFunctions.push(lossFunction);
            });
        }
        this.lossFunctions = lossFunctions;
        this.feedOutputNames = [];
        this.feedOutputShapes = [];
        this.feedLossFns = [];
        for(let i = 0; i < this.outputs.length; ++i){
            // TODO(cais): Logic for skipping target(s).
            const shape = this.internalOutputShapes[i];
            const name = this.outputNames[i];
            this.feedOutputNames.push(name);
            this.feedOutputShapes.push(shape);
            this.feedLossFns.push(this.lossFunctions[i]);
        }
        // TODO(cais): Add logic for output masks.
        // TODO(cais): Add logic for sample weights.
        const skipTargetIndices = [];
        // Prepare metrics.
        this.metrics = args.metrics;
        // TODO(cais): Add weightedMetrics.
        this.metricsNames = [
            'loss'
        ];
        this.metricsTensors = [];
        // Compute total loss.
        // Porting Note: In PyKeras, metrics_tensors are symbolic tensor objects.
        //   Here, metricsTensors are TypeScript functions. This difference is due
        //   to the difference in symbolic/imperative property of the backends.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nameScope"])('loss', ()=>{
            for(let i = 0; i < this.outputs.length; ++i){
                if (skipTargetIndices.indexOf(i) !== -1) {
                    continue;
                }
                // TODO(cais): Add weightedLoss, sampleWeight and mask.
                //   The following line should be weightedLoss
                const weightedLoss = this.lossFunctions[i];
                if (this.outputs.length > 1) {
                    this.metricsTensors.push([
                        weightedLoss,
                        i
                    ]);
                    this.metricsNames.push(this.outputNames[i] + '_loss');
                }
            }
        // Porting Note: Due to the imperative nature of the backend, we calculate
        //   the regularizer penalties in the totalLossFunction, instead of here.
        });
        const nestedMetrics = collectMetrics(args.metrics, this.outputNames);
        // TODO(cais): Add nestedWeightedMetrics.
        /**
         * Helper function used in loop below.
         */ const appendMetric = (outputIndex, metricName, metricTensor)=>{
            if (this.outputNames.length > 1) {
                metricName = this.outputNames[outputIndex] + '_' + metricName;
            }
            this.metricsNames.push(metricName);
            this.metricsTensors.push([
                metricTensor,
                outputIndex
            ]);
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nameScope"])('metric', ()=>{
            for(let i = 0; i < this.outputs.length; ++i){
                if (skipTargetIndices.indexOf(i) !== -1) {
                    continue;
                }
                const outputMetrics = nestedMetrics[i];
                // TODO(cais): Add weights and outputWeightedMetrics.
                // TODO(cais): Add optional arg `weights` to the following function.
                const handleMetrics = (metrics)=>{
                    const metricNamePrefix = '';
                    let metricName;
                    let accFn;
                    let weightedMetricFn;
                    //  TODO(cais): Use 'weights_' for weighted metrics.
                    for (const metric of metrics){
                        if (typeof metric === 'string' && [
                            'accuracy',
                            'acc',
                            'crossentropy',
                            'ce'
                        ].indexOf(metric) !== -1) {
                            const outputShape = this.internalOutputShapes[i];
                            if (outputShape[outputShape.length - 1] === 1 || this.lossFunctions[i] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryCrossentropy"]) {
                                // case: binary accuracy/crossentropy.
                                if ([
                                    'accuracy',
                                    'acc'
                                ].indexOf(metric) !== -1) {
                                    accFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryAccuracy"];
                                } else if ([
                                    'crossentropy',
                                    'ce'
                                ].indexOf(metric) !== -1) {
                                    accFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binaryCrossentropy"];
                                }
                            } else if (this.lossFunctions[i] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseCategoricalCrossentropy"]) {
                                // case: categorical accuracy / crossentropy with sparse
                                // targets.
                                if ([
                                    'accuracy',
                                    'acc'
                                ].indexOf(metric) !== -1) {
                                    accFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseCategoricalAccuracy"];
                                } else if ([
                                    'crossentropy',
                                    'ce'
                                ].indexOf(metric) !== -1) {
                                    accFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseCategoricalCrossentropy"];
                                }
                            } else {
                                // case: categorical accuracy / crossentropy.
                                if ([
                                    'accuracy',
                                    'acc'
                                ].indexOf(metric) !== -1) {
                                    accFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalAccuracy"];
                                } else if ([
                                    'crossentropy',
                                    'ce'
                                ].indexOf(metric) !== -1) {
                                    accFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categoricalCrossentropy"];
                                }
                            }
                            let suffix;
                            if ([
                                'accuracy',
                                'acc'
                            ].indexOf(metric) !== -1) {
                                suffix = 'acc';
                            } else if ([
                                'crossentropy',
                                'ce'
                            ].indexOf(metric) !== -1) {
                                suffix = 'ce';
                            }
                            // TODO(cais): Add weighting actually.
                            weightedMetricFn = accFn;
                            metricName = metricNamePrefix + suffix;
                        } else {
                            const metricFn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"](metric);
                            // TODO(cais): Add weighting actually.
                            weightedMetricFn = metricFn;
                            metricName = metricNamePrefix + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLossOrMetricName"](metric);
                        }
                        // TODO(cais): Add weighting and masking to metricResult.
                        let metricResult;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nameScope"])(metricName, ()=>{
                            metricResult = weightedMetricFn;
                        });
                        appendMetric(i, metricName, metricResult);
                    }
                };
                handleMetrics(outputMetrics);
            // TODO(cais): Call handleMetrics with weights.
            }
        });
        // Porting Notes: Given the imperative backend of tfjs-core,
        //   there is no need for constructing the symbolic graph and placeholders.
        this.collectedTrainableWeights = this.trainableWeights;
    }
    /**
     * Check trainable weights count consistency.
     *
     * This will raise a warning if `this.trainableWeights` and
     * `this.collectedTrainableWeights` are inconsistent (i.e., have different
     * numbers of parameters).
     * Inconsistency will typically arise when one modifies `model.trainable`
     * without calling `model.compile()` again.
     */ checkTrainableWeightsConsistency() {
        if (this.collectedTrainableWeights == null) {
            return;
        }
        if (this.trainableWeights.length !== this.collectedTrainableWeights.length) {
            console.warn('Discrepancy between trainableweights and collected trainable ' + 'weights. Did you set `model.trainable` without calling ' + '`model.compile()` afterwards?');
        }
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
     * const result = model.evaluate(
     *     tf.ones([8, 10]), tf.ones([8, 1]), {batchSize: 4});
     * result.print();
     * ```
     *
     * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
     * model has multiple inputs.
     * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
     * model has multiple outputs.
     * @param args A `ModelEvaluateArgs`, containing optional fields.
     *
     * @return `Scalar` test loss (if the model has a single output and no
     *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
     *   and/or metrics). The attribute `model.metricsNames`
     *   will give you the display labels for the scalar outputs.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ evaluate(x, y, args = {}) {
        const batchSize = args.batchSize == null ? 32 : args.batchSize;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkBatchSize"])(batchSize);
        // TODO(cais): Standardize `config.sampleWeights` as well.
        // Validate user data.
        const checkBatchAxis = true;
        const standardizedOuts = this.standardizeUserDataXY(x, y, checkBatchAxis, batchSize);
        try {
            // TODO(cais): If uses `useLearningPhase`, set the corresponding element
            // of the input to 0.
            const ins = standardizedOuts[0].concat(standardizedOuts[1]);
            this.makeTestFunction();
            const f = this.testFunction;
            const testOuts = this.testLoop(f, ins, batchSize, args.verbose, args.steps);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"])(testOuts);
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(standardizedOuts[0], x);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(standardizedOuts[1], y);
        }
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
        this.makeTestFunction();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_dataset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evaluateDataset"])(this, dataset, args);
    }
    /**
     * Get number of samples provided for training, evaluation or prediction.
     *
     * @param ins Input `tf.Tensor`.
     * @param batchSize Integer batch size, optional.
     * @param steps Total number of steps (batches of samples) before
     * declaring loop finished. Optional.
     * @param stepsName The public API's parameter name for `steps`.
     * @returns Number of samples provided.
     */ checkNumSamples(ins, batchSize, steps, stepsName = 'steps') {
        let numSamples;
        if (steps != null) {
            numSamples = null;
            if (batchSize != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`If ${stepsName} is set, batchSize must be null or undefined.` + `Got batchSize = ${batchSize}`);
            }
        } else if (ins != null) {
            if (Array.isArray(ins)) {
                numSamples = ins[0].shape[0];
            } else {
                numSamples = ins.shape[0];
            }
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Either the input data should have a defined shape, or ` + `${stepsName} shoud be specified.`);
        }
        return numSamples;
    }
    /**
     * Execute internal tensors of the model with input data feed.
     * @param inputs Input data feed. Must match the inputs of the model.
     * @param outputs Names of the output tensors to be fetched. Must match
     *   names of the SymbolicTensors that belong to the graph.
     * @returns Fetched values for `outputs`.
     */ execute(inputs, outputs) {
        if (Array.isArray(outputs) && outputs.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('`outputs` is an empty Array, which is not allowed.');
        }
        const outputsIsArray = Array.isArray(outputs);
        const outputNames = outputsIsArray ? outputs : [
            outputs
        ];
        const outputSymbolicTensors = this.retrieveSymbolicTensors(outputNames);
        // Format the input into a FeedDict.
        const feedDict = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeedDict"]();
        if (inputs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tensor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tensor"]) {
            inputs = [
                inputs
            ];
        }
        if (Array.isArray(inputs)) {
            if (inputs.length !== this.inputs.length) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`The number of inputs provided (${inputs.length}) ` + `does not match the number of inputs of this model ` + `(${this.inputs.length}).`);
            }
            for(let i = 0; i < this.inputs.length; ++i){
                feedDict.add(this.inputs[i], inputs[i]);
            }
        } else {
            for (const input of this.inputs){
                const tensorValue = inputs[input.name];
                if (tensorValue == null) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`No value is provided for the model's input ${input.name}`);
                }
                feedDict.add(input, tensorValue);
            }
        }
        // Run execution.
        const executeOutputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(outputSymbolicTensors, feedDict);
        return outputsIsArray ? executeOutputs : executeOutputs[0];
    }
    /**
     * Retrieve the model's internal symbolic tensors from symbolic-tensor names.
     */ retrieveSymbolicTensors(symbolicTensorNames) {
        const outputSymbolicTensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pyListRepeat"])(null, symbolicTensorNames.length);
        let outputsRemaining = symbolicTensorNames.length;
        for (const layer of this.layers){
            const layerOutputs = Array.isArray(layer.output) ? layer.output : [
                layer.output
            ];
            const layerOutputNames = layerOutputs.map((output)=>output.name);
            for(let i = 0; i < symbolicTensorNames.length; ++i){
                const index = layerOutputNames.indexOf(symbolicTensorNames[i]);
                if (index !== -1) {
                    outputSymbolicTensors[i] = layerOutputs[index];
                    outputsRemaining--;
                }
                if (outputsRemaining === 0) {
                    break;
                }
            }
            if (outputsRemaining === 0) {
                break;
            }
        }
        if (outputsRemaining > 0) {
            const remainingNames = [];
            outputSymbolicTensors.forEach((tensor, i)=>{
                if (tensor == null) {
                    remainingNames.push(symbolicTensorNames[i]);
                }
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Cannot find SymbolicTensors for output name(s): ` + `${JSON.stringify(remainingNames)}`);
        }
        return outputSymbolicTensors;
    }
    /**
     * Helper method to loop over some data in batches.
     *
     * Porting Note: Not using the functional approach in the Python equivalent
     *   due to the imperative backend.
     * Porting Note: Does not support step mode currently.
     *
     * @param ins: input data
     * @param batchSize: integer batch size.
     * @param verbose: verbosity model
     * @returns: Predictions as `tf.Tensor` (if a single output) or an `Array` of
     *   `tf.Tensor` (if multipe outputs).
     */ predictLoop(ins, batchSize = 32, verbose = false) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
            const numSamples = this.checkNumSamples(ins);
            if (verbose) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Verbose predictLoop() is not implemented yet.');
            }
            // Sample-based predictions.
            // Porting Note: Tensor currently does not support sliced assignments as
            //   in numpy, e.g., x[1:3] = y. Therefore we use concatenation while
            //   iterating over the batches.
            const batches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBatches"])(numSamples, batchSize);
            const outsBatches = this.outputs.map((output)=>[]);
            // TODO(cais): Can the scope() be pushed down inside the for loop?
            for(let batchIndex = 0; batchIndex < batches.length; ++batchIndex){
                const batchOuts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
                    const batchStart = batches[batchIndex][0];
                    const batchEnd = batches[batchIndex][1];
                    // TODO(cais): Take care of the case of the last element is a flag for
                    //   training/test.
                    const insBatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArrays"])(ins, batchStart, batchEnd);
                    // Construct the feeds for execute();
                    const feeds = [];
                    if (Array.isArray(insBatch)) {
                        for(let i = 0; i < insBatch.length; ++i){
                            feeds.push({
                                key: this.inputs[i],
                                value: insBatch[i]
                            });
                        }
                    } else {
                        feeds.push({
                            key: this.inputs[0],
                            value: insBatch
                        });
                    }
                    const feedDict = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeedDict"](feeds);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(this.outputs, feedDict);
                });
                batchOuts.forEach((batchOut, i)=>outsBatches[i].push(batchOut));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"])(outsBatches.map((batches)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"](batches, 0)));
        });
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
     * model.predict(tf.ones([8, 10]), {batchSize: 4}).print();
     * ```
     *
     * @param x The input data, as a Tensor, or an `Array` of `tf.Tensor`s if
     *   the model has multiple inputs.
     * @param args A `ModelPredictArgs` object containing optional fields.
     *
     * @return Prediction results as a `tf.Tensor`(s).
     *
     * @exception ValueError In case of mismatch between the provided input data
     *   and the model's expectations, or in case a stateful model receives a
     *   number of samples that is not a multiple of the batch size.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ predict(x, args = {}) {
        const xsRank2OrHigher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureTensorsRank2OrHigher"])(x);
        checkInputData(xsRank2OrHigher, this.inputNames, this.feedInputShapes, false);
        try {
            // TODO(cais): Take care of stateful models.
            //   if (this.stateful) ...
            // TODO(cais): Take care of the learning_phase boolean flag.
            //   if (this.useLearningPhase) ...
            const batchSize = args.batchSize == null ? 32 : args.batchSize;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkBatchSize"])(batchSize);
            return this.predictLoop(xsRank2OrHigher, batchSize);
        } finally{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(xsRank2OrHigher, x);
        }
    }
    /**
     * Returns predictions for a single batch of samples.
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.predictOnBatch(tf.ones([8, 10])).print();
     * ```
     * @param x: Input samples, as a Tensor (for models with exactly one
     *   input) or an array of Tensors (for models with more than one input).
     * @return Tensor(s) of predictions
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ predictOnBatch(x) {
        checkInputData(x, this.inputNames, this.feedInputShapes, true);
        // TODO(cais): Take care of the learning_phase boolean flag.
        //   if (this.useLearningPhase) ...
        const batchSize = (Array.isArray(x) ? x[0] : x).shape[0];
        return this.predictLoop(x, batchSize);
    }
    standardizeUserDataXY(x, y, checkBatchAxis = true, batchSize) {
        // TODO(cais): Add sampleWeight, classWeight
        if (this.optimizer_ == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"]('You must compile a model before training/testing. Use ' + 'LayersModel.compile(modelCompileArgs).');
        }
        const outputShapes = [];
        for(let i = 0; i < this.feedOutputShapes.length; ++i){
            const outputShape = this.feedOutputShapes[i];
            const lossFn = this.feedLossFns[i];
            if (lossFn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$losses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sparseCategoricalCrossentropy"]) {
                outputShapes.push(outputShape.slice(0, outputShape.length - 1).concat([
                    1
                ]));
            } else {
                // Porting Note: Because of strong typing `lossFn` must be a function.
                outputShapes.push(outputShape);
            }
        }
        x = standardizeInputData(x, this.feedInputNames, this.feedInputShapes, false, 'input');
        y = standardizeInputData(y, this.feedOutputNames, outputShapes, false, 'target');
        // TODO(cais): Standardize sampleWeights & classWeights.
        checkArrayLengths(x, y, null);
        // TODO(cais): Check sampleWeights as well.
        checkLossAndTargetCompatibility(y, this.feedLossFns, this.feedOutputShapes);
        if (this.stateful && batchSize != null && batchSize > 0) {
            if (x[0].shape[0] % batchSize !== 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`In a stateful network, you should only pass inputs with a ` + `number of samples that is divisible by the batch size ` + `${batchSize}. Found: ${x[0].shape[0]} sample(s).`);
            }
        }
        return [
            x,
            y
        ];
    }
    async standardizeUserData(x, y, sampleWeight, classWeight, checkBatchAxis = true, batchSize) {
        const [standardXs, standardYs] = this.standardizeUserDataXY(x, y, checkBatchAxis, batchSize);
        // TODO(cais): Handle sampleWeights.
        if (sampleWeight != null) {
            throw new Error('sample weight is not supported yet.');
        }
        let standardSampleWeights = null;
        if (classWeight != null) {
            const classWeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["standardizeClassWeights"])(classWeight, this.outputNames);
            standardSampleWeights = [];
            for(let i = 0; i < classWeights.length; ++i){
                standardSampleWeights.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["standardizeWeights"])(standardYs[i], null, classWeights[i]));
            }
        }
        // TODO(cais): Deal with the case of model.stateful == true.
        return [
            standardXs,
            standardYs,
            standardSampleWeights
        ];
    }
    /**
     * Loop over some test data in batches.
     * @param f A Function returning a list of tensors.
     * @param ins Array of tensors to be fed to `f`.
     * @param batchSize Integer batch size or `null` / `undefined`.
     * @param verbose verbosity mode.
     * @param steps Total number of steps (batches of samples) before
     * declaring test finished. Ignored with the default value of `null` /
     * `undefined`.
     * @returns Array of Scalars.
     */ testLoop(f, ins, batchSize, verbose = 0, steps) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
            const numSamples = this.checkNumSamples(ins, batchSize, steps, 'steps');
            const outs = [];
            if (verbose > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('Verbose mode is not implemented yet.');
            }
            // TODO(cais): Use `indicesForConversionToDense' to prevent slow down.
            if (steps != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('steps mode in testLoop() is not implemented yet');
            } else {
                const batches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBatches"])(numSamples, batchSize);
                const indexArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tensor1d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["range"])(0, numSamples));
                for(let batchIndex = 0; batchIndex < batches.length; ++batchIndex){
                    const batchStart = batches[batchIndex][0];
                    const batchEnd = batches[batchIndex][1];
                    const batchIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceAlongFirstAxis"](indexArray, batchStart, batchEnd - batchStart);
                    // TODO(cais): In ins, train flag can be a number, instead of an
                    //   Tensor? Do we need to handle this in tfjs-layers?
                    const insBatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArraysByIndices"])(ins, batchIds);
                    const batchOuts = f(insBatch);
                    if (batchIndex === 0) {
                        for(let i = 0; i < batchOuts.length; ++i){
                            outs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$scalar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scalar"])(0));
                        }
                    }
                    for(let i = 0; i < batchOuts.length; ++i){
                        const batchOut = batchOuts[i];
                        outs[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](outs[i], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mul$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mul"](batchEnd - batchStart, batchOut));
                    }
                }
                for(let i = 0; i < outs.length; ++i){
                    outs[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$div$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["div"](outs[i], numSamples);
                }
            }
            return outs;
        });
    }
    getDedupedMetricsNames() {
        const outLabels = this.metricsNames;
        // Rename duplicated metrics names (can happen with an output layer
        // shared among multiple dataflows).
        const dedupedOutLabels = [];
        for(let i = 0; i < outLabels.length; ++i){
            const label = outLabels[i];
            let newLabel = label;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["count"])(outLabels, label) > 1) {
                const dupIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["count"])(outLabels.slice(0, i), label);
                newLabel += `_${dupIndex}`;
            }
            dedupedOutLabels.push(newLabel);
        }
        return dedupedOutLabels;
    }
    /**
     * Creates a function that performs the following actions:
     *
     * 1. computes the losses
     * 2. sums them to get the total loss
     * 3. call the optimizer computes the gradients of the LayersModel's
     *    trainable weights w.r.t. the total loss and update the variables
     * 4. calculates the metrics
     * 5. returns the values of the losses and metrics.
     */ makeTrainFunction() {
        return (data)=>{
            const lossValues = [];
            const inputs = data.slice(0, this.inputs.length);
            const targets = data.slice(this.inputs.length, this.inputs.length + this.outputs.length);
            const sampleWeights = data.slice(this.inputs.length + this.outputs.length, this.inputs.length + this.outputs.length * 2);
            const metricsValues = [];
            // Create a function that computes the total loss based on the
            // inputs. This function is used for obtaining gradients through
            // backprop.
            const totalLossFunction = ()=>{
                const feeds = [];
                for(let i = 0; i < this.inputs.length; ++i){
                    feeds.push({
                        key: this.inputs[i],
                        value: inputs[i]
                    });
                }
                const feedDict = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeedDict"](feeds);
                const outputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(this.outputs, feedDict, {
                    'training': true
                });
                // TODO(cais): Take care of the case of multiple outputs from a
                //   single layer?
                let totalLoss;
                for(let i = 0; i < this.lossFunctions.length; ++i){
                    const lossFunction = this.lossFunctions[i];
                    let loss = lossFunction(targets[i], outputs[i]);
                    if (sampleWeights[i] != null) {
                        loss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeWeightedLoss"])(loss, sampleWeights[i]);
                    }
                    // TODO(cais): push Scalar instead.
                    const meanLoss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](loss);
                    // TODO(cais): Use a scope() instead, to avoid ownership.
                    lossValues.push(meanLoss);
                    if (i === 0) {
                        totalLoss = loss;
                    } else {
                        totalLoss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](totalLoss, loss);
                    }
                }
                // Compute the metrics.
                // TODO(cais): These should probably be calculated outside
                //   totalLossFunction to benefit speed?
                for(let i = 0; i < this.metricsTensors.length; ++i){
                    let weightedMetric;
                    if (this.outputs.length > 1 && i < this.outputs.length) {
                        weightedMetric = lossValues[i];
                    } else {
                        const metric = this.metricsTensors[i][0];
                        const outputIndex = this.metricsTensors[i][1];
                        weightedMetric = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](metric(targets[outputIndex], outputs[outputIndex]));
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keep"](weightedMetric);
                    // TODO(cais): Use a scope() instead, to avoid ownership.
                    metricsValues.push(weightedMetric);
                }
                totalLoss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](totalLoss);
                // Add regularizer penalties.
                this.calculateLosses().forEach((regularizerLoss)=>{
                    totalLoss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](totalLoss, regularizerLoss);
                });
                return totalLoss;
            };
            const variables = this.collectedTrainableWeights.map((param)=>param.read());
            const returnCost = true;
            const totalLossValue = this.optimizer_.minimize(totalLossFunction, returnCost, variables);
            return [
                totalLossValue
            ].concat(metricsValues);
        };
    }
    /**
     * Create a function which, when invoked with an array of `tf.Tensor`s as a
     * batch of inputs, returns the prespecified loss and metrics of the model
     * under the batch of input data.
     */ makeTestFunction() {
        this.testFunction = (data)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
                const valOutputs = [];
                let totalLoss;
                const inputs = data.slice(0, this.inputs.length);
                const targets = data.slice(this.inputs.length, this.inputs.length + this.outputs.length);
                const feeds = [];
                for(let i = 0; i < this.inputs.length; ++i){
                    feeds.push({
                        key: this.inputs[i],
                        value: inputs[i]
                    });
                }
                const feedDict = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeedDict"](feeds);
                const outputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$executor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execute"])(this.outputs, feedDict);
                // Compute total loss.
                for(let i = 0; i < this.lossFunctions.length; ++i){
                    const lossFunction = this.lossFunctions[i];
                    // TODO(cais): Add sample weighting and replace the simple
                    // averaging.
                    const loss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](lossFunction(targets[i], outputs[i]));
                    if (i === 0) {
                        totalLoss = loss;
                    } else {
                        totalLoss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$add$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["add"](totalLoss, loss);
                    }
                    valOutputs.push(totalLoss);
                }
                // Compute the metrics.
                for(let i = 0; i < this.metricsTensors.length; ++i){
                    const metric = this.metricsTensors[i][0];
                    const outputIndex = this.metricsTensors[i][1];
                    // TODO(cais): Replace K.mean() with a proper weighting function.
                    const meanMetric = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$mean$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mean"](metric(targets[outputIndex], outputs[outputIndex]));
                    valOutputs.push(meanMetric);
                }
                return valOutputs;
            });
        };
    }
    /**
     * Trains the model for a fixed number of epochs (iterations on a
     * dataset).
     *
     * ```js
     * const model = tf.sequential({
     *     layers: [tf.layers.dense({units: 1, inputShape: [10]})]
     * });
     * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
     * for (let i = 1; i < 5 ; ++i) {
     *   const h = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
     *       batchSize: 4,
     *       epochs: 3
     *   });
     *   console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
     * }
     * ```
     *
     * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
     * model has multiple inputs. If all inputs in the model are named, you
     * can also pass a dictionary mapping input names to `tf.Tensor`s.
     * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
     * the model has multiple outputs. If all outputs in the model are named,
     * you can also pass a dictionary mapping output names to `tf.Tensor`s.
     * @param args A `ModelFitArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @exception ValueError In case of mismatch between the provided input
     * data and what the model expects.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async fit(x, y, args = {}) {
        if (this.isTraining) {
            throw new Error('Cannot start training because another fit() call is ongoing.');
        }
        this.isTraining = true;
        let inputs;
        let targets;
        let originalInputs;
        let originalTargets;
        let inputValX;
        let inputValY;
        let valX;
        let valY;
        let sampleWeights;
        try {
            const batchSize = args.batchSize == null ? 32 : args.batchSize;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkBatchSize"])(batchSize);
            // Validate user data.
            // TODO(cais): Support sampleWeight.
            const checkBatchAxis = false;
            const standardizedOuts = await this.standardizeUserData(x, y, args.sampleWeight, args.classWeight, checkBatchAxis, batchSize);
            inputs = standardizedOuts[0];
            targets = standardizedOuts[1];
            sampleWeights = standardizedOuts[2];
            // Prepare validation data.
            let doValidation = false;
            let valIns;
            if (args.validationData != null && args.validationData.length > 0) {
                doValidation = true;
                if (args.validationData.length === 2) {
                    // config.validationData consists of valX and valY.
                    inputValX = args.validationData[0];
                    inputValY = args.validationData[1];
                } else if (args.validationData.length === 3) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('validationData including sample weights is not supported yet.');
                } else {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`When passing validation data, it must contain 2 (valX, valY) ` + `or 3 (valX, valY, valSampleWeight) items; ` + `${args.validationData} is invalid.`);
                }
                const checkBatchAxis = true;
                const valStandardized = await this.standardizeUserData(inputValX, inputValY, null, /** Unused sample weights. */ null, /** Unused class weights. */ checkBatchAxis, batchSize);
                valX = valStandardized[0];
                valY = valStandardized[1];
                valIns = valX.concat(valY);
            // TODO(cais): Add useLearningPhase data properly.
            } else if (args.validationSplit != null && args.validationSplit > 0 && args.validationSplit < 1) {
                doValidation = true;
                // Porting Note: In tfjs-layers, inputs[0] is always a Tensor.
                const splitAt = Math.floor(inputs[0].shape[0] * (1 - args.validationSplit));
                const originalBatchSize = inputs[0].shape[0];
                valX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArrays"])(inputs, splitAt, originalBatchSize);
                originalInputs = inputs;
                inputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArrays"])(inputs, 0, splitAt);
                valY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArrays"])(targets, splitAt, originalBatchSize);
                originalTargets = targets;
                targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArrays"])(targets, 0, splitAt);
                // TODO(cais): Once sampleWeights becomes available, slice it to get
                //   valSampleWeights.
                valIns = valX.concat(valY);
            // TODO(cais): Add useLearningPhase data properly.
            } else if (args.validationSteps != null) {
                doValidation = true;
            // TODO(cais): Add useLearningPhase.
            }
            const ins = inputs.concat(targets).concat(sampleWeights);
            this.checkTrainableWeightsConsistency();
            // TODO(cais): Handle use_learning_phase and learning_phase?
            // Porting Note: Here we see a key deviation of tfjs-layers from
            // Keras.
            //  Due to the imperative nature of tfjs-layers' backend (tfjs-core),
            //  we do not construct symbolic computation graphs to embody the
            //  training process. Instead, we define a function that performs the
            //  training action. In PyKeras, the data (inputs and targets) are fed
            //  through graph placeholders. In tfjs-layers, the data are fed as
            //  function arguments. Since the function are defined below in the
            //  scope, we don't have equivalents of PyKeras's
            //  `_make_train_funciton`.
            const trainFunction = this.makeTrainFunction();
            const outLabels = this.getDedupedMetricsNames();
            let valFunction;
            let callbackMetrics;
            if (doValidation) {
                this.makeTestFunction();
                valFunction = this.testFunction;
                callbackMetrics = outLabels.slice().concat(outLabels.map((n)=>'val_' + n));
            } else {
                valFunction = null;
                valIns = [];
                callbackMetrics = outLabels.slice();
            }
            const callbacks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["standardizeCallbacks"])(args.callbacks, args.yieldEvery);
            const out = await this.fitLoop(trainFunction, ins, outLabels, batchSize, args.epochs, args.verbose, callbacks, valFunction, valIns, args.shuffle, callbackMetrics, args.initialEpoch, null, null);
            return out;
        } finally{
            this.isTraining = false;
            // Memory clean up.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(inputs, x);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(targets, y);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(originalInputs, x);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(originalTargets, y);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(valX, inputValX);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(valY, inputValY);
            if (sampleWeights != null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](sampleWeights);
            }
        }
    // TODO(cais): Add value to outLabels.
    }
    /**
     * Abstract fit function for `f(ins)`.
     * @param f A Function returning a list of tensors. For training, this
     *   function is expected to perform the updates to the variables.
     * @param ins List of tensors to be fed to `f`.
     * @param outLabels List of strings, display names of the outputs of `f`.
     * @param batchSize Integer batch size or `== null` if unknown. Default : 32.
     * @param epochs Number of times to iterate over the data. Default : 1.
     * @param verbose Verbosity mode: 0, 1, or 2. Default: 1.
     * @param callbacks List of callbacks to be called during training.
     * @param valF Function to call for validation.
     * @param valIns List of tensors to be fed to `valF`.
     * @param shuffle Whether to shuffle the data at the beginning of every
     * epoch. Default : true.
     * @param callbackMetrics List of strings, the display names of the metrics
     *   passed to the callbacks. They should be the concatenation of the
     *   display names of the outputs of `f` and the list of display names
     *   of the outputs of `valF`.
     * @param initialEpoch Epoch at which to start training (useful for
     *   resuming a previous training run). Default : 0.
     * @param stepsPerEpoch Total number of steps (batches on samples) before
     *   declaring one epoch finished and starting the next epoch. Ignored with
     *   the default value of `undefined` or `null`.
     * @param validationSteps Number of steps to run validation for (only if
     *   doing validation from data tensors). Not applicable for tfjs-layers.
     * @returns A `History` object.
     */ async fitLoop(f, ins, outLabels, batchSize, epochs, verbose, callbacks, valF, valIns, shuffle, callbackMetrics, initialEpoch, stepsPerEpoch, validationSteps) {
        if (batchSize == null) {
            batchSize = 32;
        }
        if (epochs == null) {
            epochs = 1;
        }
        if (shuffle == null) {
            shuffle = true;
        }
        if (initialEpoch == null) {
            initialEpoch = 0;
        }
        // TODO(cais): Change const to let below when implementing validation.
        let doValidation = false;
        if (valF != null && valIns != null) {
            doValidation = true;
        // TODO(cais): verbose message.
        }
        if (validationSteps != null) {
            doValidation = true;
            if (stepsPerEpoch == null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('Can only use `validationSteps` when doing step-wise training, ' + 'i.e., `stepsPerEpoch` must be set.');
            }
        }
        const numTrainSamples = this.checkNumSamples(ins, batchSize, stepsPerEpoch, 'steps_per_epoch');
        let indexArray;
        if (numTrainSamples != null) {
            indexArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$math_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["range"])(0, numTrainSamples);
        }
        if (verbose == null) {
            verbose = 1;
        }
        const { callbackList, history } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$base_callbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configureCallbacks"])(callbacks, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics);
        callbackList.setModel(this);
        this.history = history;
        await callbackList.onTrainBegin();
        this.stopTraining_ = false;
        // TODO(cais): Take care of callbacks.validation_data as in PyKeras.
        // TODO(cais): Pre-convert feeds for performance as in PyKeras.
        for(let epoch = initialEpoch; epoch < epochs; ++epoch){
            await callbackList.onEpochBegin(epoch);
            const epochLogs = {};
            if (stepsPerEpoch != null) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('stepsPerEpoch mode is not implemented yet.');
            } else {
                if (shuffle === 'batch') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotImplementedError"]('batch shuffling is not implemneted' + ' yet');
                } else if (shuffle) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__util$3e$__["util"].shuffle(indexArray);
                }
                // Convert the potentially shuffled indices to Tensor1D, to avoid the
                // cost of repeated creation of Array1Ds later on.
                const epochIndexArray1D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$ops$2f$tensor1d$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tensor1d"])(indexArray);
                const batches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBatches"])(numTrainSamples, batchSize);
                for(let batchIndex = 0; batchIndex < batches.length; ++batchIndex){
                    const batchLogs = {};
                    await callbackList.onBatchBegin(batchIndex, batchLogs);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tidy"](()=>{
                        const batchStart = batches[batchIndex][0];
                        const batchEnd = batches[batchIndex][1];
                        const batchIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$tfjs_backend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceAlongFirstAxis"](epochIndexArray1D, batchStart, batchEnd - batchStart);
                        batchLogs['batch'] = batchIndex;
                        batchLogs['size'] = batchEnd - batchStart;
                        // TODO(cais): In ins, train flag can be a number, instead of an
                        //   Tensor? Do we need to handle this in tfjs-layers?
                        const insBatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sliceArraysByIndices"])(ins, batchIds);
                        const outs = f(insBatch);
                        for(let i = 0; i < outLabels.length; ++i){
                            const label = outLabels[i];
                            const out = outs[i];
                            batchLogs[label] = out;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keep"](out);
                        // TODO(cais): Use scope() to avoid ownership.
                        }
                        if (batchIndex === batches.length - 1) {
                            if (doValidation) {
                                const valOuts = this.testLoop(valF, valIns, batchSize);
                                // Porting Notes: In tfjs-layers, valOuts is always an Array.
                                for(let i = 0; i < outLabels.length; ++i){
                                    const label = outLabels[i];
                                    const out = valOuts[i];
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keep"](out);
                                    // TODO(cais): Use scope() to avoid ownership.
                                    epochLogs['val_' + label] = out;
                                }
                            }
                        }
                    });
                    await callbackList.onBatchEnd(batchIndex, batchLogs);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$logs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeTensorsInLogs"])(batchLogs);
                    if (this.stopTraining_) {
                        break;
                    }
                // TODO(cais): return outs as list of Tensor.
                }
                epochIndexArray1D.dispose();
            }
            // TODO(cais): Run validation at the end of the epoch.
            await callbackList.onEpochEnd(epoch, epochLogs);
            if (this.stopTraining_) {
                break;
            }
        }
        await callbackList.onTrainEnd();
        await this.history.syncData();
        return this.history;
    }
    // TODO(cais): Add code snippet below when it's possible to instantiate
    //   actual dataset objects.
    /**
     * Trains the model using a dataset object.
     *
     * @param dataset A dataset object. Its `iterator()` method is expected
     *   to generate a dataset iterator object, the `next()` method of which
     *   is expected to produce data batches for training. The return value
     *   of the `next()` call ought to contain a boolean `done` field and a
     *   `value` field. The `value` field is expected to be an array of two
     *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
     *   case is for models with exactly one input and one output (e.g.
     *   a sequential model). The latter case is for models with multiple
     *   inputs and/or multiple outputs.
     *   Of the two items in the array, the first is the input feature(s) and
     *   the second is the output target(s).
     * @param args A `ModelFitDatasetArgs`, containing optional fields.
     *
     * @return A `History` instance. Its `history` attribute contains all
     *   information collected during training.
     *
     * @doc {heading: 'Models', subheading: 'Classes'}
     */ async fitDataset(dataset, args) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_dataset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fitDataset"])(this, dataset, args);
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
        // TODO(cais): Support sampleWeight and classWeight.
        // TODO(cais): Support Dataset objects.
        const standardizeOut = await this.standardizeUserData(x, y);
        const inputs = standardizeOut[0];
        const targets = standardizeOut[1];
        const trainFunction = this.makeTrainFunction();
        const losses = trainFunction(inputs.concat(targets));
        const lossValues = [];
        for (const loss of losses){
            const v = await loss.data();
            lossValues.push(v[0]);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispose"](losses);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(standardizeOut[0], x);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$training_tensors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["disposeNewTensors"])(standardizeOut[1], y);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["singletonOrArray"])(lossValues);
    }
    /**
     * Extract weight values of the model.
     *
     * @param config: An instance of `io.SaveConfig`, which specifies
     * model-saving options such as whether only trainable weights are to be
     * saved.
     * @returns A `NamedTensorMap` mapping original weight names (i.e.,
     *   non-uniqueified weight names) to their values.
     */ getNamedWeights(config) {
        const namedWeights = [];
        const trainableOnly = config != null && config.trainableOnly;
        const weights = trainableOnly ? this.trainableWeights : this.weights;
        const weightValues = this.getWeights(trainableOnly);
        for(let i = 0; i < weights.length; ++i){
            if (trainableOnly && !weights[i].trainable) {
                continue;
            }
            namedWeights.push({
                name: weights[i].originalName,
                tensor: weightValues[i]
            });
        }
        return namedWeights;
    }
    /**
     * Setter used for force stopping of LayersModel.fit() (i.e., training).
     *
     * Example:
     *
     * ```js
     * const input = tf.input({shape: [10]});
     * const output = tf.layers.dense({units: 1}).apply(input);
     * const model = tf.model({inputs: [input], outputs: [output]});
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
     * // There should be only 3 values in the loss array, instead of 10
     * values,
     * // due to the stopping after 3 epochs.
     * console.log(history.history.loss);
     * ```
     */ set stopTraining(stop) {
        this.stopTraining_ = stop;
    }
    get stopTraining() {
        return this.stopTraining_;
    }
    get optimizer() {
        return this.optimizer_;
    }
    set optimizer(optimizer) {
        if (this.optimizer_ !== optimizer) {
            this.optimizer_ = optimizer;
            this.isOptimizerOwned = false;
        }
    }
    dispose() {
        const result = super.dispose();
        if (result.refCountAfterDispose === 0 && this.optimizer != null && this.isOptimizerOwned) {
            const numTensorsBeforeOptmizerDisposal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memory"]().numTensors;
            this.optimizer_.dispose();
            result.numDisposedVariables += numTensorsBeforeOptmizerDisposal - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$globals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memory"]().numTensors;
        }
        return result;
    }
    getLossIdentifiers() {
        let lossNames;
        if (typeof this.loss === 'string') {
            lossNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"])(this.loss);
        } else if (Array.isArray(this.loss)) {
            for (const loss of this.loss){
                if (typeof loss !== 'string') {
                    throw new Error('Serialization of non-string loss is not supported.');
                }
            }
            lossNames = this.loss.map((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"])(name));
        } else {
            const outputNames = Object.keys(this.loss);
            lossNames = {};
            const losses = this.loss;
            for (const outputName of outputNames){
                if (typeof losses[outputName] === 'string') {
                    lossNames[outputName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"])(losses[outputName]);
                } else {
                    throw new Error('Serialization of non-string loss is not supported.');
                }
            }
        }
        return lossNames;
    }
    getMetricIdentifiers() {
        if (typeof this.metrics === 'string' || typeof this.metrics === 'function') {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLossOrMetricName"](this.metrics))
            ];
        } else if (Array.isArray(this.metrics)) {
            return this.metrics.map((metric)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLossOrMetricName"](metric)));
        } else {
            const metricsIdentifiers = {};
            for(const key in this.metrics){
                metricsIdentifiers[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSnakeCase"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLossOrMetricName"](this.metrics[key]));
            }
            return metricsIdentifiers;
        }
    }
    getTrainingConfig() {
        return {
            loss: this.getLossIdentifiers(),
            metrics: this.getMetricIdentifiers(),
            optimizer_config: {
                class_name: this.optimizer.getClassName(),
                config: this.optimizer.getConfig()
            }
        };
    // TODO(cais): Add weight_metrics when they are supported.
    // TODO(cais): Add sample_weight_mode when it's supported.
    // TODO(cais): Add loss_weights when it's supported.
    }
    loadTrainingConfig(trainingConfig) {
        if (trainingConfig.weighted_metrics != null) {
            throw new Error('Loading weight_metrics is not supported yet.');
        }
        if (trainingConfig.loss_weights != null) {
            throw new Error('Loading loss_weights is not supported yet.');
        }
        if (trainingConfig.sample_weight_mode != null) {
            throw new Error('Loading sample_weight_mode is not supported yet.');
        }
        const tsConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$serialization_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertPythonicToTs"])(trainingConfig.optimizer_config);
        const optimizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$layers$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])(tsConfig);
        let loss;
        if (typeof trainingConfig.loss === 'string') {
            loss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(trainingConfig.loss);
        } else if (Array.isArray(trainingConfig.loss)) {
            loss = trainingConfig.loss.map((lossEntry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(lossEntry));
        } else if (trainingConfig.loss != null) {
            loss = {};
            for(const key in trainingConfig.loss){
                loss[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(trainingConfig.loss[key]);
            }
        }
        let metrics;
        if (Array.isArray(trainingConfig.metrics)) {
            metrics = trainingConfig.metrics.map((metric)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(metric));
        } else if (trainingConfig.metrics != null) {
            metrics = {};
            for(const key in trainingConfig.metrics){
                metrics[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$utils$2f$generic_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toCamelCase"])(trainingConfig.metrics[key]);
            }
        }
        this.compile({
            loss,
            metrics,
            optimizer
        });
    }
    /**
     * Save the configuration and/or weights of the LayersModel.
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
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 2. Saving `model`'s topology and weights to browser
     * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('indexeddb://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 3. Saving `model`'s topology and weights as two files
     * (`my-model-1.json` and `my-model-1.weights.bin`) downloaded from
     * browser.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * const saveResults = await model.save('downloads://my-model-1');
     * ```
     *
     * Example 4. Send  `model`'s topology and weights to an HTTP server.
     * See the documentation of `tf.io.http` for more details
     * including specifying request parameters and implementation of the
     * server.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * const saveResults = await model.save('http://my-server/model/upload');
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
            const handlers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].getSaveHandlers(handlerOrURL);
            if (handlers.length === 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Cannot find any save handlers for URL '${handlerOrURL}'`);
            } else if (handlers.length > 1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"](`Found more than one (${handlers.length}) save handlers for ` + `URL '${handlerOrURL}'`);
            }
            handlerOrURL = handlers[0];
        }
        if (handlerOrURL.save == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValueError"]('LayersModel.save() cannot proceed because the IOHandler ' + 'provided does not have the `save` attribute defined.');
        }
        const weightDataAndSpecs = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].encodeWeights(this.getNamedWeights(config));
        const returnString = false;
        const unusedArg = null;
        const modelConfig = this.toJSON(unusedArg, returnString);
        const modelArtifacts = {
            modelTopology: modelConfig,
            format: LAYERS_MODEL_FORMAT_NAME,
            generatedBy: `TensorFlow.js tfjs-layers v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`,
            convertedBy: null
        };
        const includeOptimizer = config == null ? false : config.includeOptimizer;
        if (includeOptimizer && this.optimizer != null) {
            modelArtifacts.trainingConfig = this.getTrainingConfig();
            const weightType = 'optimizer';
            const { data: optimizerWeightData, specs: optimizerWeightSpecs } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].encodeWeights(await this.optimizer.getWeights(), weightType);
            weightDataAndSpecs.specs.push(...optimizerWeightSpecs);
            weightDataAndSpecs.data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$io$2f$io$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__io$3e$__["io"].concatenateArrayBuffers([
                weightDataAndSpecs.data,
                optimizerWeightData
            ]);
        }
        if (this.userDefinedMetadata != null) {
            // Check serialized size of user-defined metadata.
            const checkSize = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$user_defined_metadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkUserDefinedMetadata"])(this.userDefinedMetadata, this.name, checkSize);
            modelArtifacts.userDefinedMetadata = this.userDefinedMetadata;
        }
        modelArtifacts.weightData = weightDataAndSpecs.data;
        modelArtifacts.weightSpecs = weightDataAndSpecs.specs;
        return handlerOrURL.save(modelArtifacts);
    }
    /**
     * Set user-defined metadata.
     *
     * The set metadata will be serialized together with the topology
     * and weights of the model during `save()` calls.
     *
     * @param setUserDefinedMetadata
     */ setUserDefinedMetadata(userDefinedMetadata) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$user_defined_metadata$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkUserDefinedMetadata"])(userDefinedMetadata, this.name);
        this.userDefinedMetadata = userDefinedMetadata;
    }
    /**
     * Get user-defined metadata.
     *
     * The metadata is supplied via one of the two routes:
     *   1. By calling `setUserDefinedMetadata()`.
     *   2. Loaded during model loading (if the model is constructed
     *      via `tf.loadLayersModel()`.)
     *
     * If no user-defined metadata is available from either of the
     * two routes, this function will return `undefined`.
     */ getUserDefinedMetadata() {
        return this.userDefinedMetadata;
    }
}
// The class name is 'Model' rather than 'LayersModel' for backwards
// compatibility since this class name shows up in the serialization format.
/** @nocollapse */ LayersModel.className = 'Model';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(LayersModel);
/**
 * A `tf.Functional` is an alias to `tf.LayersModel`.
 *
 * See also:
 *   `tf.LayersModel`, `tf.Sequential`, `tf.loadLayersModel`.
 */ /** @doc {heading: 'Models', subheading: 'Classes'} */ class Functional extends LayersModel {
}
Functional.className = 'Functional';
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__serialization$3e$__["serialization"].registerClass(Functional); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW5pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZW5naW5lL3RyYWluaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgseUNBQXlDO0FBRXpDLE9BQU8sS0FBSyxHQUFHLE1BQU0sdUJBQXVCLENBQUM7QUFDN0MsT0FBTyxFQUFDLEVBQUUsRUFBMEQsU0FBUyxFQUFVLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFZLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU3SyxPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sRUFBZSxrQkFBa0IsRUFBa0Msb0JBQW9CLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN6SCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBS3hFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQWtCLE1BQU0sU0FBUyxDQUFDO0FBQy9ELE9BQU8sS0FBSyxNQUFNLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxVQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTVDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0csT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8s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O09BVUc7SUFDSCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7QUF0ckRELG9FQUFvRTtBQUNwRSw0RUFBNEU7QUFDNUUsa0JBQWtCO0FBQ1gscUJBQVMsR0FBRyxPQUFPLENBQUM7U0FKaEIsV0FBVztBQXlyRHhCLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekM7Ozs7O0dBS0c7QUFDSCxzREFBc0Q7QUFDdEQsTUFBYSxVQUFXLFNBQVEsV0FBVzs7QUFDekIsb0JBQVMsR0FBRyxZQUFZLENBQUM7U0FEOUIsVUFBVTtBQUd2QixhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLyogT3JpZ2luYWwgU291cmNlOiBlbmdpbmUvdHJhaW5pbmcucHkgKi9cblxuaW1wb3J0ICogYXMgdGZjIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5pbXBvcnQge2lvLCBNb2RlbFByZWRpY3RDb25maWcgYXMgTW9kZWxQcmVkaWN0QXJncywgTmFtZWRUZW5zb3JNYXAsIE9wdGltaXplciwgU2NhbGFyLCBzY2FsYXIsIHNlcmlhbGl6YXRpb24sIFRlbnNvciwgVGVuc29yMUQsIHRlbnNvcjFkLCB1dGlsfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuXG5pbXBvcnQgKiBhcyBLIGZyb20gJy4uL2JhY2tlbmQvdGZqc19iYWNrZW5kJztcbmltcG9ydCB7QmFzZUNhbGxiYWNrLCBjb25maWd1cmVDYWxsYmFja3MsIEhpc3RvcnksIE1vZGVsTG9nZ2luZ1ZlcmJvc2l0eSwgc3RhbmRhcmRpemVDYWxsYmFja3N9IGZyb20gJy4uL2Jhc2VfY2FsbGJhY2tzJztcbmltcG9ydCB7bmFtZVNjb3BlfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHtOb3RJbXBsZW1lbnRlZEVycm9yLCBSdW50aW1lRXJyb3IsIFZhbHVlRXJyb3J9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQge1NoYXBlfSBmcm9tICcuLi9rZXJhc19mb3JtYXQvY29tbW9uJztcbmltcG9ydCB7TG9zc0lkZW50aWZpZXJ9IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9sb3NzX2NvbmZpZyc7XG5pbXBvcnQge09wdGltaXplclNlcmlhbGl6YXRpb259IGZyb20gJy4uL2tlcmFzX2Zvcm1hdC9vcHRpbWl6ZXJfY29uZmlnJztcbmltcG9ydCB7TWV0cmljc0lkZW50aWZpZXIsIFRyYWluaW5nQ29uZmlnfSBmcm9tICcuLi9rZXJhc19mb3JtYXQvdHJhaW5pbmdfY29uZmlnJztcbmltcG9ydCB7ZGVzZXJpYWxpemV9IGZyb20gJy4uL2xheWVycy9zZXJpYWxpemF0aW9uJztcbmltcG9ydCB7IGRpc3Bvc2VUZW5zb3JzSW5Mb2dzLCBVbnJlc29sdmVkTG9ncyB9IGZyb20gJy4uL2xvZ3MnO1xuaW1wb3J0ICogYXMgbG9zc2VzIGZyb20gJy4uL2xvc3Nlcyc7XG5pbXBvcnQgKiBhcyBNZXRyaWNzIGZyb20gJy4uL21ldHJpY3MnO1xuaW1wb3J0ICogYXMgb3B0aW1pemVycyBmcm9tICcuLi9vcHRpbWl6ZXJzJztcbmltcG9ydCB7TG9zc09yTWV0cmljRm4sIE5hbWVkVGVuc29yfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2NoZWNrVXNlckRlZmluZWRNZXRhZGF0YX0gZnJvbSAnLi4vdXNlcl9kZWZpbmVkX21ldGFkYXRhJztcbmltcG9ydCB7Y291bnQsIHB5TGlzdFJlcGVhdCwgc2luZ2xldG9uT3JBcnJheSwgdG9DYW1lbENhc2UsIHRvU25ha2VDYXNlLCB1bmlxdWV9IGZyb20gJy4uL3V0aWxzL2dlbmVyaWNfdXRpbHMnO1xuaW1wb3J0IHtwcmludFN1bW1hcnl9IGZyb20gJy4uL3V0aWxzL2xheWVyX3V0aWxzJztcbmltcG9ydCB7cmFuZ2V9IGZyb20gJy4uL3V0aWxzL21hdGhfdXRpbHMnO1xuaW1wb3J0IHtjb252ZXJ0UHl0aG9uaWNUb1RzfSBmcm9tICcuLi91dGlscy9zZXJpYWxpemF0aW9uX3V0aWxzJztcbmltcG9ydCB7TGF5ZXJWYXJpYWJsZX0gZnJvbSAnLi4vdmFyaWFibGVzJztcbmltcG9ydCB7dmVyc2lvbn0gZnJvbSAnLi4vdmVyc2lvbic7XG5cbmltcG9ydCB7Q29udGFpbmVyLCBDb250YWluZXJBcmdzfSBmcm9tICcuL2NvbnRhaW5lcic7XG5pbXBvcnQge0RhdGFzZXR9IGZyb20gJy4vZGF0YXNldF9zdHViJztcbmltcG9ydCB7ZXhlY3V0ZSwgRmVlZERpY3R9IGZyb20gJy4vZXhlY3V0b3InO1xuaW1wb3J0IHtEaXNwb3NlUmVzdWx0LCBTeW1ib2xpY1RlbnNvcn0gZnJvbSAnLi90b3BvbG9neSc7XG5pbXBvcnQge2V2YWx1YXRlRGF0YXNldCwgZml0RGF0YXNldCwgTW9kZWxFdmFsdWF0ZURhdGFzZXRBcmdzLCBNb2RlbEZpdERhdGFzZXRBcmdzfSBmcm9tICcuL3RyYWluaW5nX2RhdGFzZXQnO1xuaW1wb3J0IHtjaGVja0JhdGNoU2l6ZSwgZGlzcG9zZU5ld1RlbnNvcnMsIGVuc3VyZVRlbnNvcnNSYW5rMk9ySGlnaGVyLCBtYWtlQmF0Y2hlcywgTW9kZWxGaXRBcmdzLCBzbGljZUFycmF5cywgc2xpY2VBcnJheXNCeUluZGljZXN9IGZyb20gJy4vdHJhaW5pbmdfdGVuc29ycyc7XG5pbXBvcnQge0NsYXNzV2VpZ2h0LCBDbGFzc1dlaWdodE1hcCwgY29tcHV0ZVdlaWdodGVkTG9zcywgc3RhbmRhcmRpemVDbGFzc1dlaWdodHMsIHN0YW5kYXJkaXplV2VpZ2h0c30gZnJvbSAnLi90cmFpbmluZ191dGlscyc7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBwb2x5bW9ycGhpYyBpbnB1dCBkYXRhOiAxLiBzaW5nbGV0b24gVGVuc29yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRhVGVuc29yKHg6IFRlbnNvcnxUZW5zb3JbXXx7W2lucHV0TmFtZTogc3RyaW5nXTogVGVuc29yfXxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcltdfSk6IGJvb2xlYW4ge1xuICByZXR1cm4geCBpbnN0YW5jZW9mIFRlbnNvcjtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHBvbHltb3JwaGljIGlucHV0IGRhdGE6IDIuIEFycmF5IG9mIFRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0YUFycmF5KHg6IFRlbnNvcnxUZW5zb3JbXXxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7W2lucHV0TmFtZTogc3RyaW5nXTogVGVuc29yfSk6IGJvb2xlYW4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHBvbHltb3JwaGljIGlucHV0IGRhdGE6IDMuIFwiZGljdFwiIG9mIFRlbnNvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0YURpY3QoeDogVGVuc29yfFRlbnNvcltdfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAge1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0pOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc0RhdGFUZW5zb3IoeCkgJiYgIWlzRGF0YUFycmF5KHgpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgaW5wdXRzIGFuZCB0YXJnZXRzIHByb3ZpZGVkIGJ5IHVzZXJzLlxuICogQHBhcmFtIGRhdGEgVXNlci1wcm92aWRlZCBpbnB1dCBkYXRhIChwb2x5bW9ycGhpYykuXG4gKiBAcGFyYW0gbmFtZXMgQW4gQXJyYXkgb2YgZXhwZWN0ZWQgVGVuc29yIG5hbWVzLlxuICogQHBhcmFtIHNoYXBlcyBPcHRpb25hbCBBcnJheSBvZiBleHBlY3RlZCBUZW5zb3Igc2hhcGVzLlxuICogQHBhcmFtIGNoZWNrQmF0Y2hBeGlzIFdoZXRoZXIgdG8gY2hlY2sgdGhhdCB0aGUgYmF0Y2ggYXhpcyBvZiB0aGUgYXJyYXlzXG4gKiAgIG1hdGNoICB0aGUgZXhwZWN0ZWQgdmFsdWUgZm91bmQgaW4gYHNoYXBlc2AuXG4gKiBAcGFyYW0gZXhjZXB0aW9uUHJlZml4IFN0cmluZyBwcmVmaXggdXNlZCBmb3IgZXhjZXB0aW9uIGZvcm1hdHRpbmcuXG4gKiBAcmV0dXJucyBMaXN0IG9mIHN0YW5kYXJkaXplZCBpbnB1dCBUZW5zb3JzIChvbmUgVGVuc29yIHBlciBtb2RlbCBpbnB1dCkuXG4gKiBAdGhyb3dzIFZhbHVlRXJyb3I6IGluIGNhc2Ugb2YgaW1wcm9wZXJseSBmb3JtYXR0ZWQgdXNlciBkYXRhLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhbmRhcmRpemVJbnB1dERhdGEoXG4gICAgZGF0YTogVGVuc29yfFRlbnNvcltdfHtbaW5wdXROYW1lOiBzdHJpbmddOiBUZW5zb3J9LCBuYW1lczogc3RyaW5nW10sXG4gICAgc2hhcGVzPzogU2hhcGVbXSwgY2hlY2tCYXRjaEF4aXMgPSB0cnVlLCBleGNlcHRpb25QcmVmaXggPSAnJyk6IFRlbnNvcltdIHtcbiAgaWYgKG5hbWVzID09IG51bGwgfHwgbmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gQ2hlY2sgZm9yIHRoZSBjYXNlIHdoZXJlIHRoZSBtb2RlbCBleHBlY3RlZCBubyBkYXRhLCBidXQgc29tZSBkYXRhIGdvdFxuICAgIC8vIHNlbnQuXG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgbGV0IGdvdFVuZXhwZWN0ZWREYXRhID0gZmFsc2U7XG4gICAgICBpZiAoaXNEYXRhQXJyYXkoZGF0YSkgJiYgKGRhdGEgYXMgVGVuc29yW10pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ290VW5leHBlY3RlZERhdGEgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChpc0RhdGFEaWN0KGRhdGEpKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBnb3RVbmV4cGVjdGVkRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGBkYXRhYCBpcyBhIHNpbmdsZXRvbiBUZW5zb3IgaW4gdGhpcyBjYXNlLlxuICAgICAgICBnb3RVbmV4cGVjdGVkRGF0YSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZ290VW5leHBlY3RlZERhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgRXJyb3Igd2hlbiBjaGVja2luZyBtb2RlbCAke2V4Y2VwdGlvblByZWZpeH0gZXhwZWN0ZWQgbm8gZGF0YSwgYCArXG4gICAgICAgICAgICBgYnV0IGdvdCAke2RhdGF9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5hbWVzLm1hcChuYW1lID0+IG51bGwpO1xuICB9XG5cbiAgbGV0IGFycmF5czogVGVuc29yW107XG4gIGlmIChpc0RhdGFEaWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgYXMge1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn07XG4gICAgYXJyYXlzID0gW107XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICBpZiAoZGF0YVtuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYE5vIGRhdGEgcHJvdmlkZWQgZm9yIFwiJHtuYW1lfVwiLiBOZWVkIGRhdGEgZm9yIGVhY2gga2V5IGluOiBgICtcbiAgICAgICAgICAgIGAke25hbWVzfWApO1xuICAgICAgfVxuICAgICAgYXJyYXlzLnB1c2goZGF0YVtuYW1lXSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRGF0YUFycmF5KGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgYXMgVGVuc29yW107XG4gICAgaWYgKGRhdGEubGVuZ3RoICE9PSBuYW1lcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBFcnJvciB3aGVuIGNoZWNraW5nIG1vZGVsICR7ZXhjZXB0aW9uUHJlZml4fTogdGhlIEFycmF5IG9mIGAgK1xuICAgICAgICAgIGBUZW5zb3JzIHRoYXQgeW91IGFyZSBwYXNzaW5nIHRvIHlvdXIgbW9kZWwgaXMgbm90IHRoZSBzaXplIHRoZSBgICtcbiAgICAgICAgICBgbW9kZWwgZXhwZWN0ZWQuIEV4cGVjdGVkIHRvIHNlZSAke25hbWVzLmxlbmd0aH0gVGVuc29yKHMpLCBidXQgYCArXG4gICAgICAgICAgYGluc3RlYWQgZ290IHRoZSBmb2xsb3dpbmcgbGlzdCBvZiBUZW5zb3Iocyk6ICR7ZGF0YX1gKTtcbiAgICB9XG4gICAgYXJyYXlzID0gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhID0gZGF0YSBhcyBUZW5zb3I7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBUaGUgbW9kZWwgJHtleGNlcHRpb25QcmVmaXh9IGV4cGVjdHMgJHtuYW1lcy5sZW5ndGh9IFRlbnNvcihzKSwgYCArXG4gICAgICAgICAgYGJ1dCBvbmx5IHJlY2VpdmVkIG9uZSBUZW5zb3IuIEZvdW5kOiBUZW5zb3Igd2l0aCBzaGFwZSAke1xuICAgICAgICAgICAgICBkYXRhLnNoYXBlfWApO1xuICAgIH1cbiAgICBhcnJheXMgPSBbZGF0YV07XG4gIH1cblxuICBhcnJheXMgPSBlbnN1cmVUZW5zb3JzUmFuazJPckhpZ2hlcihhcnJheXMpO1xuXG4gIC8vIENoZWNrIHNoYXBlIGNvbXBhdGliaWxpdHkuXG4gIGlmIChzaGFwZXMgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChzaGFwZXNbaV0gPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFycmF5ID0gYXJyYXlzW2ldO1xuICAgICAgaWYgKGFycmF5LnNoYXBlLmxlbmd0aCAhPT0gc2hhcGVzW2ldLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBFcnJvciB3aGVuIGNoZWNraW5nICR7ZXhjZXB0aW9uUHJlZml4fTogZXhwZWN0ZWQgJHtuYW1lc1tpXX0gYCArXG4gICAgICAgICAgICBgdG8gaGF2ZSAke3NoYXBlc1tpXS5sZW5ndGh9IGRpbWVuc2lvbihzKS4gYnV0IGdvdCBhcnJheSB3aXRoIGAgK1xuICAgICAgICAgICAgYHNoYXBlICR7YXJyYXkuc2hhcGV9YCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoYXBlc1tpXS5sZW5ndGg7ICsraikge1xuICAgICAgICBpZiAoaiA9PT0gMCAmJiAhY2hlY2tCYXRjaEF4aXMpIHtcbiAgICAgICAgICAvLyBTa2lwIHRoZSBmaXJzdCAoYmF0Y2gpIGF4aXMuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGltID0gYXJyYXkuc2hhcGVbal07XG4gICAgICAgIGNvbnN0IHJlZkRpbSA9IHNoYXBlc1tpXVtqXTtcbiAgICAgICAgaWYgKHJlZkRpbSAhPSBudWxsICYmIHJlZkRpbSA+PSAwICYmIGRpbSAhPT0gcmVmRGltKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGAke2V4Y2VwdGlvblByZWZpeH0gZXhwZWN0ZWQgYSBiYXRjaCBvZiBlbGVtZW50cyB3aGVyZSBlYWNoIGAgK1xuICAgICAgICAgICAgICBgZXhhbXBsZSBoYXMgc2hhcGUgWyR7c2hhcGVzW2ldLnNsaWNlKDEsIHNoYXBlc1tpXS5sZW5ndGgpfV0gYCArXG4gICAgICAgICAgICAgIGAoaS5lLix0ZW5zb3Igc2hhcGUgWyosJHtcbiAgICAgICAgICAgICAgICAgIHNoYXBlc1tpXS5zbGljZSgxLCBzaGFwZXNbaV0ubGVuZ3RoKX1dKWAgK1xuICAgICAgICAgICAgICBgIGJ1dCB0aGUgJHtleGNlcHRpb25QcmVmaXh9IHJlY2VpdmVkIGFuIGlucHV0IHdpdGggJHtcbiAgICAgICAgICAgICAgICAgIGFycmF5LnNoYXBlWzBdfWAgK1xuICAgICAgICAgICAgICBgIGV4YW1wbGVzLCBlYWNoIHdpdGggc2hhcGUgWyR7XG4gICAgICAgICAgICAgICAgICBhcnJheS5zaGFwZS5zbGljZSgxLCBhcnJheS5zaGFwZS5sZW5ndGgpfV1gICtcbiAgICAgICAgICAgICAgYCAodGVuc29yIHNoYXBlIFske2FycmF5LnNoYXBlfV0pYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5cztcbn1cblxuLyoqXG4gKiBVc2VyIGlucHV0IHZhbGlkYXRpb24gZm9yIFRlbnNvcnMuXG4gKiBAcGFyYW0gaW5wdXRzIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzIGZvciBpbnB1dHMuXG4gKiBAcGFyYW0gdGFyZ2V0cyBgQXJyYXlgIG9mIGB0Zi5UZW5zb3JgcyBmb3IgdGFyZ2V0cy5cbiAqIEBwYXJhbSB3ZWlnaHRzIE9wdGlvbmFsIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzIGZvciBzYW1wbGUgd2VpZ2h0cy5cbiAqIEB0aHJvd3MgVmFsdWVFcnJvcjogaW4gY2FzZSBvZiBpbmNvcnJlY3RseSBmb3JtYXR0ZWQgZGF0YS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQXJyYXlMZW5ndGhzKFxuICAgIGlucHV0czogVGVuc29yW10sIHRhcmdldHM6IFRlbnNvcltdLCB3ZWlnaHRzPzogVGVuc29yW10pIHtcbiAgY29uc3Qgc2V0WCA9IHVuaXF1ZShpbnB1dHMubWFwKGlucHV0ID0+IGlucHV0LnNoYXBlWzBdKSk7XG4gIHNldFguc29ydCgpO1xuICBjb25zdCBzZXRZID0gdW5pcXVlKHRhcmdldHMubWFwKHRhcmdldCA9PiB0YXJnZXQuc2hhcGVbMF0pKTtcbiAgc2V0WS5zb3J0KCk7XG4gIC8vIFRPRE8oY2Fpcyk6IENoZWNrIGB3ZWlnaHRzYCBhcyB3ZWxsLlxuICBpZiAoc2V0WC5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgIGBBbGwgaW5wdXQgVGVuc29ycyAoeCkgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHNhbXBsZXMuIGAgK1xuICAgICAgICBgR290IGFycmF5IHNoYXBlczogYCArXG4gICAgICAgIGAke0pTT04uc3RyaW5naWZ5KGlucHV0cy5tYXAoaW5wdXQgPT4gaW5wdXQuc2hhcGUpKX1gKTtcbiAgfVxuICBpZiAoc2V0WS5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgIGBBbGwgdGFyZ2V0IFRlbnNvcnMgKHkpIHNob3VsZCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBzYW1wbGVzLiBgICtcbiAgICAgICAgYEdvdCBhcnJheSBzaGFwZXM6IGAgK1xuICAgICAgICBgJHtKU09OLnN0cmluZ2lmeSh0YXJnZXRzLm1hcCh0YXJnZXQgPT4gdGFyZ2V0LnNoYXBlKSl9YCk7XG4gIH1cbiAgaWYgKHNldFgubGVuZ3RoID4gMCAmJiBzZXRZLmxlbmd0aCA+IDAgJiYgIXV0aWwuYXJyYXlzRXF1YWwoc2V0WCwgc2V0WSkpIHtcbiAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgYElucHV0IFRlbnNvcnMgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHNhbXBsZXMgYXMgdGFyZ2V0IGAgK1xuICAgICAgICBgVGVuc29ycy4gRm91bmQgJHtzZXRYWzBdfSBpbnB1dCBzYW1wbGUocykgYW5kICR7c2V0WVswXX0gdGFyZ2V0IGAgK1xuICAgICAgICBgc2FtcGxlKHMpLmApO1xuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGlvbiBvbiB0aGUgY29tcGF0aWJpbGl0eSBvZiB0YXJnZXMgYW5kIGxvc3MgZnVuY3Rpb25zLlxuICpcbiAqIFRoaXMgaGVscHMgcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGxvc3MgZnVuY3Rpb25zIGluY29ycmVjdGx5LlxuICpcbiAqIEBwYXJhbSB0YXJnZXRzIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzIG9mIHRhcmdldHMuXG4gKiBAcGFyYW0gbG9zc0ZucyBgQXJyYXlgIG9mIGxvc3MgZnVuY3Rpb25zLlxuICogQHBhcmFtIG91dHB1dFNoYXBlcyBgQXJyYXlgIG9mIHNoYXBlcyBvZiBtb2RlbCBvdXRwdXRzLlxuICovXG5mdW5jdGlvbiBjaGVja0xvc3NBbmRUYXJnZXRDb21wYXRpYmlsaXR5KFxuICAgIHRhcmdldHM6IFRlbnNvcltdLCBsb3NzRm5zOiBMb3NzT3JNZXRyaWNGbltdLCBvdXRwdXRTaGFwZXM6IFNoYXBlW10pIHtcbiAgLy8gVE9ETyhjYWlzKTogRGVkaWNhdGVkIHRlc3QgY292ZXJhZ2U/XG4gIGNvbnN0IGtleUxvc3NlcyA9IFtcbiAgICBsb3NzZXMubWVhblNxdWFyZWRFcnJvciwgbG9zc2VzLmJpbmFyeUNyb3NzZW50cm9weSxcbiAgICBsb3NzZXMuY2F0ZWdvcmljYWxDcm9zc2VudHJvcHlcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgeSA9IHRhcmdldHNbaV07XG4gICAgY29uc3QgbG9zcyA9IGxvc3NGbnNbaV07XG4gICAgY29uc3Qgc2hhcGUgPSBvdXRwdXRTaGFwZXNbaV07XG4gICAgaWYgKGxvc3MgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChsb3NzID09PSBsb3NzZXMuY2F0ZWdvcmljYWxDcm9zc2VudHJvcHkpIHtcbiAgICAgIGlmICh5LnNoYXBlW3kuc2hhcGUubGVuZ3RoIC0gMV0gPT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgWW91IGFyZSBwYXNzaW5nIGEgdGFyZ2V0IGFycmF5IG9mIHNoYXBlICR7eS5zaGFwZX0gd2hpbGUgdXNpbmcgYCArXG4gICAgICAgICAgICBgYSBsb3NzICdjYXRlZ29yaWNhbF9jcm9zc2VudHJvcHknLiAnY2F0ZWdvcmljYWxfY3Jvc3NlbnRyb3B5J2AgK1xuICAgICAgICAgICAgYGV4cGVjdHMgdGFyZ2V0cyB0byBiZSBiaW5hcnkgbWF0cmljZXMgKDFzIGFuZCAwcykgb2Ygc2hhcGUgYCArXG4gICAgICAgICAgICBgW3NhbXBsZXMsIGNsYXNzZXNdLmApO1xuICAgICAgICAvLyBUT0RPKGNhaXMpOiBFeGFtcGxlIGNvZGUgaW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGtleUxvc3Nlcy5pbmRleE9mKGxvc3MpICE9PSAtMSkge1xuICAgICAgY29uc3Qgc2xpY2VkWVNoYXBlID0geS5zaGFwZS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IHNsaWNlZFNoYXBlID0gc2hhcGUuc2xpY2UoMSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNsaWNlZFlTaGFwZS5sZW5ndGg7ICsraikge1xuICAgICAgICBjb25zdCB0YXJnZXREaW0gPSBzbGljZWRZU2hhcGVbal07XG4gICAgICAgIGNvbnN0IG91dERpbSA9IHNsaWNlZFNoYXBlW2pdO1xuICAgICAgICBpZiAob3V0RGltICE9IG51bGwgJiYgdGFyZ2V0RGltICE9PSBvdXREaW0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgYEEgdGFyZ2V0IFRlbnNvciB3aXRoIHNoYXBlICR7eS5zaGFwZX0gd2FzIHBhc3NlZCBmb3IgYW4gYCArXG4gICAgICAgICAgICAgIGBvdXRwdXQgb2Ygc2hhcGUgJHtzaGFwZX0sIHdoaWxlIHVzaW5nIGEgbG9zcyBmdW5jdGlvbiB0aGF0IGAgK1xuICAgICAgICAgICAgICBgZXhwZWN0cyB0YXJnZXRzIHRvIGhhdmUgdGhlIHNhbWUgc2hhcGUgYXMgdGhlIG91dHB1dC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlucHV0cyBwcm92aWRlZCBieSB0aGUgdXNlci5cbiAqXG4gKiBQb3J0aW5nIE5vdGU6IFRoaXMgY29ycmVzcG9uZHMgdG8gX3N0YW5kYXJkaXplX2lucHV0X2RhdGEoKSBpbiBQeXRob25cbiAqICAgS2VyYXMuIEJlY2F1c2Ugb2YgdGhlIHN0cm9uZyB0eXBpbmcgaW4gVEYuanMsIHdlIGRvIG5vdCBuZWVkIHRvIGNvbnZlcnRcbiAqICAgdGhlIGRhdGEuIFNwZWNpZmljYWxseTpcbiAqICAgMSkgaW4gUHlLZXJhcywgYGRhdGFgIGNhbiBiZSBgRGF0YUZyYW1lYCBpbnN0YW5jZXMgZnJvbSBwYW5kYXMsIGZvclxuICogICAgICBleGFtcGxlLiBXZSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQgaGVyZSBiZWNhdXNlIHRoZXJlIGlzIG5vXG4gKiAgICAgIHdpZGVseSBwb3B1bGFyIGphdmFzY3JpcHQvdHlwZXNkY3JpcHQgZXF1aXZhbGVudCBvZiBwYW5kYXMgKHNvIGZhcikuXG4gKiAgICAgIElmIG9uZSBiZWNvbWVzIGF2YWlsYWJsZSBpbiB0aGUgZnV0dXJlLCB3ZSBjYW4gYWRkIHN1cHBvcnQuXG4gKiAgIDIpIGluIFB5S2VyYXMsIGlucHV0cyBjYW4gYmUgUHl0aG9uIGRpY3QuIEJ1dCBoZXJlIHdlIGFyZSBzdGlwdWxhdGluZ1xuICogdGhhdCB0aGUgZGF0YSBpcyBlaXRoZXIgYSBzaW5nbGUgYHRmLlRlbnNvcmAgb3IgYW4gQXJyYXkgb2YgYHRmLlRlbnNvcmBzLiBXZVxuICogbWF5IGFkZCBzdXBwb3J0IGZvciBgT2JqZWN0YCBkYXRhIGlucHV0cyBpbiB0aGUgZnV0dXJlIHdoZW4gdGhlIG5lZWRcbiAqIGFyaXNlcy5cbiAqXG4gKiBJbnN0ZWFkLCB3ZSBwZXJmb3JtIGJhc2ljIGNoZWNrcyBmb3IgbnVtYmVyIG9mIHBhcmFtZXRlcnMgYW5kIHNoYXBlcy5cbiAqXG4gKiBAcGFyYW0gZGF0YTogVGhlIGlucHV0IGRhdGEuXG4gKiBAcGFyYW0gbmFtZXM6IE5hbWUgZm9yIHRoZSBpbnB1dHMsIGZyb20gdGhlIG1vZGVsLlxuICogQHBhcmFtIHNoYXBlczogRXhwZWN0ZWQgc2hhcGVzIGZvciB0aGUgaW5wdXQgZGF0YSwgZnJvbSB0aGUgbW9kZWwuXG4gKiBAcGFyYW0gY2hlY2tCYXRjaEF4aXM6IFdoZXRoZXIgdGhlIHNpemUgYWxvbmcgdGhlIGJhdGNoIGF4aXMgKGkuZS4sIHRoZVxuICogICBmaXJzdCBkaW1lbnNpb24pIHdpbGwgYmUgY2hlY2tlZCBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0gZXhjZXB0aW9uUHJlZml4OiBFeGVjcHRpb24gcHJlZml4IG1lc3NhZ2UsIHVzZWQgaW4gZ2VuZXJhdGluZyBlcnJvclxuICogICBtZXNzYWdlcy5cbiAqIEB0aHJvd3MgVmFsdWVFcnJvcjogb24gaW5jb3JyZWN0IG51bWJlciBvZiBpbnB1dHMgb3IgbWlzbWF0Y2hlcyBpbiBzaGFwZXMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrSW5wdXREYXRhKFxuICAgIGRhdGE6IFRlbnNvcnxUZW5zb3JbXSwgbmFtZXM6IHN0cmluZ1tdLCBzaGFwZXM/OiBTaGFwZVtdLFxuICAgIGNoZWNrQmF0Y2hBeGlzID0gdHJ1ZSwgZXhjZXB0aW9uUHJlZml4ID0gJycpIHtcbiAgbGV0IGFycmF5czogVGVuc29yW107XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoICE9PSBuYW1lcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBFcnJvciB3aGVuIGNoZWNraW5nIG1vZGVsICR7ZXhjZXB0aW9uUHJlZml4fTogdGhlIEFycmF5IG9mIGAgK1xuICAgICAgICAgIGBUZW5zb3JzIHRoYXQgeW91IGFyZSBwYXNzaW5nIHRvIHlvdXIgbW9kZWwgaXMgbm90IHRoZSBzaXplIHRoZSBgICtcbiAgICAgICAgICBgdGhlIG1vZGVsIGV4cGVjdGVkLiBFeHBlY3RlZCB0byBzZWUgJHtuYW1lcy5sZW5ndGh9IFRlbnNvcihzKSxgICtcbiAgICAgICAgICBgIGJ1dCBpbnN0ZWFkIGdvdCAke2RhdGEubGVuZ3RofSBUZW5zb3JzKHMpLmApO1xuICAgIH1cbiAgICBhcnJheXMgPSBkYXRhO1xuICB9IGVsc2Uge1xuICAgIGlmIChuYW1lcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICBgVGhlIG1vZGVsIGV4cGVjdHMgJHtuYW1lcy5sZW5ndGh9ICR7ZXhjZXB0aW9uUHJlZml4fSBUZW5zb3JzLCBgICtcbiAgICAgICAgICBgYnV0IG9ubHkgcmVjZWl2ZWQgb25lIFRlbnNvci4gRm91bmQ6IGFycmF5IHdpdGggc2hhcGUgYCArXG4gICAgICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoZGF0YS5zaGFwZSl9LmApO1xuICAgIH1cbiAgICBhcnJheXMgPSBbZGF0YV07XG4gIH1cblxuICBpZiAoc2hhcGVzICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoc2hhcGVzW2ldID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBhcnJheSA9IGFycmF5c1tpXTtcbiAgICAgIGlmIChhcnJheS5zaGFwZS5sZW5ndGggIT09IHNoYXBlc1tpXS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgRXJyb3Igd2hlbiBjaGVja2luZyAke2V4Y2VwdGlvblByZWZpeH06IGV4cGVjdGVkICR7bmFtZXNbaV19IGAgK1xuICAgICAgICAgICAgYHRvIGhhdmUgJHtzaGFwZXNbaV0ubGVuZ3RofSBkaW1lbnNpb24ocyksIGJ1dCBnb3QgYXJyYXkgd2l0aCBgICtcbiAgICAgICAgICAgIGBzaGFwZSAke0pTT04uc3RyaW5naWZ5KGFycmF5LnNoYXBlKX1gKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hhcGVzW2ldLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGlmIChqID09PSAwICYmICFjaGVja0JhdGNoQXhpcykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpbSA9IGFycmF5LnNoYXBlW2pdO1xuICAgICAgICBjb25zdCByZWZEaW0gPSBzaGFwZXNbaV1bal07XG4gICAgICAgIGlmIChyZWZEaW0gIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChyZWZEaW0gIT09IGRpbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgICAgYEVycm9yIHdoZW4gY2hlY2tpbmcgJHtleGNlcHRpb25QcmVmaXh9OiBleHBlY3RlZCBgICtcbiAgICAgICAgICAgICAgICBgJHtuYW1lc1tpXX0gdG8gaGF2ZSBzaGFwZSAke0pTT04uc3RyaW5naWZ5KHNoYXBlc1tpXSl9IGJ1dCBgICtcbiAgICAgICAgICAgICAgICBgZ290IGFycmF5IHdpdGggc2hhcGUgJHtKU09OLnN0cmluZ2lmeShhcnJheS5zaGFwZSl9LmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1hcHMgbWV0cmljIGZ1bmN0aW9ucyB0byBtb2RlbCBvdXRwdXRzLlxuICogQHBhcmFtIG1ldHJpY3MgQW4gc2hvcnRjdXQgc3RyaW5ncyBuYW1lLCBtZXRyaWMgZnVuY3Rpb24sIGBBcnJheWAgb3IgZGljdFxuICogICAoYE9iamVjdGApIG9mIG1ldHJpYyBmdW5jdGlvbnMuXG4gKiBAcGFyYW0gb3V0cHV0TmFtZXMgQW4gYEFycmF5YCBvZiB0aGUgbmFtZXMgb2YgbW9kZWwgb3V0cHV0cy5cbiAqIEByZXR1cm5zIEFuIGBBcnJheWAgKG9uZSBlbnRyeSBwZXIgbW9kZWwgb3V0cHV0KSBvZiBgQXJyYXlgIG9mIG1ldHJpY1xuICogICBmdW5jdGlvbnMuIEZvciBpbnN0YW5jZSwgaWYgdGhlIG1vZGVsIGhhcyAyIG91dHB1dHMsIGFuZCBmb3IgdGhlIGZpcnN0XG4gKiAgIG91dHB1dCB3ZSB3YW50IHRvIGNvbXB1dGUgYGJpbmFyeUFjY3VyYWN5YCBhbmQgYGJpbmFyeUNyb3NzZW50cm9weWAsXG4gKiAgIGFuZCBqdXN0IGBiaW5hcnlBY2N1cmFjeWAgZm9yIHRoZSBzZWNvbmQgb3V0cHV0LCB0aGUgYEFycmF5YCB3b3VsZCBsb29rXG4gKiAgIGxpa2U6XG4gKiAgICAgYFtbYmluYXJ5QWNjdXJhY3ksIGJpbmFyeUNyb3NzZW50cm9weV0sICBbYmluYXJ5QWNjdXJhY3ldXWBcbiAqIEB0aHJvd3MgVHlwZUVycm9yOiBpbmNvbXBhdGlibGUgbWV0cmljcyBmb3JtYXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0TWV0cmljcyhcbiAgICBtZXRyaWNzOiBzdHJpbmd8TG9zc09yTWV0cmljRm58QXJyYXk8c3RyaW5nfExvc3NPck1ldHJpY0ZuPnxcbiAgICB7W291dHB1dE5hbWU6IHN0cmluZ106IHN0cmluZyB8IExvc3NPck1ldHJpY0ZufSxcbiAgICBvdXRwdXROYW1lczogc3RyaW5nW10pOiBBcnJheTxBcnJheTxzdHJpbmd8TG9zc09yTWV0cmljRm4+PiB7XG4gIGlmIChtZXRyaWNzID09IG51bGwgfHwgQXJyYXkuaXNBcnJheShtZXRyaWNzKSAmJiBtZXRyaWNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvdXRwdXROYW1lcy5tYXAobmFtZSA9PiBbXSk7XG4gIH1cblxuICBsZXQgd3JhcHBlZE1ldHJpY3M6IEFycmF5PHN0cmluZ3xMb3NzT3JNZXRyaWNGbj58XG4gICAgICB7W291dHB1dE5hbWU6IHN0cmluZ106IHN0cmluZyB8IExvc3NPck1ldHJpY0ZufTtcbiAgaWYgKHR5cGVvZiBtZXRyaWNzID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWV0cmljcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHdyYXBwZWRNZXRyaWNzID0gW21ldHJpY3NdO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWV0cmljcykgfHwgdHlwZW9mIG1ldHJpY3MgPT09ICdvYmplY3QnKSB7XG4gICAgd3JhcHBlZE1ldHJpY3MgPSBtZXRyaWNzIGFzIEFycmF5PHN0cmluZ3xMb3NzT3JNZXRyaWNGbj58XG4gICAgICAgIHtbb3V0cHV0TmFtZTogc3RyaW5nXTogc3RyaW5nfSB8IHtbb3V0cHV0TmFtZTogc3RyaW5nXTogTG9zc09yTWV0cmljRm59O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUeXBlIG9mIG1ldHJpY3MgYXJndW1lbnQgbm90IHVuZGVyc3Rvb2QuIEV4cGVjdGVkIGFuIHN0cmluZywnICtcbiAgICAgICAgYGZ1bmN0aW9uLCBBcnJheSwgb3IgT2JqZWN0LCBmb3VuZDogJHttZXRyaWNzfWApO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkod3JhcHBlZE1ldHJpY3MpKSB7XG4gICAgLy8gV2UgdGhlbiBhcHBseSBhbGwgbWV0cmljcyB0byBhbGwgb3V0cHV0cy5cbiAgICByZXR1cm4gb3V0cHV0TmFtZXMubWFwKFxuICAgICAgICBuYW1lID0+IHdyYXBwZWRNZXRyaWNzIGFzIEFycmF5PHN0cmluZ3xMb3NzT3JNZXRyaWNGbj4pO1xuICB9IGVsc2Uge1xuICAgIC8vIEluIHRoaXMgY2FzZSwgbWV0cmljcyBpcyBhIGRpY3QuXG4gICAgY29uc3QgbmVzdGVkTWV0cmljczogQXJyYXk8QXJyYXk8c3RyaW5nfExvc3NPck1ldHJpY0ZuPj4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2Ygb3V0cHV0TmFtZXMpIHtcbiAgICAgIGxldCBvdXRwdXRNZXRyaWNzOiBzdHJpbmd8TG9zc09yTWV0cmljRm58QXJyYXk8c3RyaW5nfExvc3NPck1ldHJpY0ZuPiA9XG4gICAgICAgICAgd3JhcHBlZE1ldHJpY3MuaGFzT3duUHJvcGVydHkobmFtZSkgPyB3cmFwcGVkTWV0cmljc1tuYW1lXSA6IFtdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG91dHB1dE1ldHJpY3MpKSB7XG4gICAgICAgIG91dHB1dE1ldHJpY3MgPSBbb3V0cHV0TWV0cmljc107XG4gICAgICB9XG4gICAgICBuZXN0ZWRNZXRyaWNzLnB1c2gob3V0cHV0TWV0cmljcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXN0ZWRNZXRyaWNzO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWxFdmFsdWF0ZUFyZ3Mge1xuICAvKipcbiAgICogQmF0Y2ggc2l6ZSAoSW50ZWdlcikuIElmIHVuc3BlY2lmaWVkLCBpdCB3aWxsIGRlZmF1bHQgdG8gMzIuXG4gICAqL1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZlcmJvc2l0eSBtb2RlLlxuICAgKi9cbiAgdmVyYm9zZT86IE1vZGVsTG9nZ2luZ1ZlcmJvc2l0eTtcblxuICAvKipcbiAgICogVGVuc29yIG9mIHdlaWdodHMgdG8gd2VpZ2h0IHRoZSBjb250cmlidXRpb24gb2YgZGlmZmVyZW50IHNhbXBsZXMgdG8gdGhlXG4gICAqIGxvc3MgYW5kIG1ldHJpY3MuXG4gICAqL1xuICBzYW1wbGVXZWlnaHQ/OiBUZW5zb3I7XG5cbiAgLyoqXG4gICAqIGludGVnZXI6IHRvdGFsIG51bWJlciBvZiBzdGVwcyAoYmF0Y2hlcyBvZiBzYW1wbGVzKVxuICAgKiBiZWZvcmUgZGVjbGFyaW5nIHRoZSBldmFsdWF0aW9uIHJvdW5kIGZpbmlzaGVkLiBJZ25vcmVkIHdpdGggdGhlIGRlZmF1bHRcbiAgICogdmFsdWUgb2YgYHVuZGVmaW5lZGAuXG4gICAqL1xuICBzdGVwcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIGZvciBjYWxscyB0byBgTGF5ZXJzTW9kZWwuY29tcGlsZSgpYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNb2RlbENvbXBpbGVBcmdzIHtcbiAgLyoqXG4gICAqIEFuIGluc3RhbmNlIG9mIGB0Zi50cmFpbi5PcHRpbWl6ZXJgIG9yIGEgc3RyaW5nIG5hbWUgZm9yIGFuIE9wdGltaXplci5cbiAgICovXG4gIG9wdGltaXplcjogc3RyaW5nfE9wdGltaXplcjtcblxuICAvKipcbiAgICogT2JqZWN0IGZ1bmN0aW9uKHMpIG9yIG5hbWUocykgb2Ygb2JqZWN0IGZ1bmN0aW9uKHMpLlxuICAgKiBJZiB0aGUgbW9kZWwgaGFzIG11bHRpcGxlIG91dHB1dHMsIHlvdSBjYW4gdXNlIGEgZGlmZmVyZW50IGxvc3NcbiAgICogb24gZWFjaCBvdXRwdXQgYnkgcGFzc2luZyBhIGRpY3Rpb25hcnkgb3IgYW4gQXJyYXkgb2YgbG9zc2VzLlxuICAgKiBUaGUgbG9zcyB2YWx1ZSB0aGF0IHdpbGwgYmUgbWluaW1pemVkIGJ5IHRoZSBtb2RlbCB3aWxsIHRoZW4gYmUgdGhlIHN1bVxuICAgKiBvZiBhbGwgaW5kaXZpZHVhbCBsb3NzZXMuXG4gICAqL1xuICBsb3NzOiBzdHJpbmd8c3RyaW5nW118e1tvdXRwdXROYW1lOiBzdHJpbmddOiBzdHJpbmd9fExvc3NPck1ldHJpY0ZufFxuICAgICAgTG9zc09yTWV0cmljRm5bXXx7W291dHB1dE5hbWU6IHN0cmluZ106IExvc3NPck1ldHJpY0ZufTtcblxuICAvKipcbiAgICogTGlzdCBvZiBtZXRyaWNzIHRvIGJlIGV2YWx1YXRlZCBieSB0aGUgbW9kZWwgZHVyaW5nIHRyYWluaW5nIGFuZCB0ZXN0aW5nLlxuICAgKiBUeXBpY2FsbHkgeW91IHdpbGwgdXNlIGBtZXRyaWNzPVsnYWNjdXJhY3knXWAuXG4gICAqIFRvIHNwZWNpZnkgZGlmZmVyZW50IG1ldHJpY3MgZm9yIGRpZmZlcmVudCBvdXRwdXRzIG9mIGEgbXVsdGktb3V0cHV0XG4gICAqIG1vZGVsLCB5b3UgY291bGQgYWxzbyBwYXNzIGEgZGljdGlvbmFyeS5cbiAgICovXG4gIG1ldHJpY3M/OiBzdHJpbmd8TG9zc09yTWV0cmljRm58QXJyYXk8c3RyaW5nfExvc3NPck1ldHJpY0ZuPnxcbiAgICAgIHtbb3V0cHV0TmFtZTogc3RyaW5nXTogc3RyaW5nIHwgTG9zc09yTWV0cmljRm59O1xuXG4gIC8vIFRPRE8oY2Fpcyk6IEFkZCBsb3NzV2VpZ2h0cywgc2FtcGxlV2VpZ2h0TW9kZSwgd2VpZ2h0ZWRNZXRyaWNzLCBhbmRcbiAgLy8gICB0YXJnZXRUZW5zb3JzLlxufVxuXG5jb25zdCBMQVlFUlNfTU9ERUxfRk9STUFUX05BTUUgPSAnbGF5ZXJzLW1vZGVsJztcblxuLyoqXG4gKiBBIGB0Zi5MYXllcnNNb2RlbGAgaXMgYSBkaXJlY3RlZCwgYWN5Y2xpYyBncmFwaCBvZiBgdGYuTGF5ZXJgcyBwbHVzIG1ldGhvZHNcbiAqIGZvciB0cmFpbmluZywgZXZhbHVhdGlvbiwgcHJlZGljdGlvbiBhbmQgc2F2aW5nLlxuICpcbiAqIGB0Zi5MYXllcnNNb2RlbGAgaXMgdGhlIGJhc2ljIHVuaXQgb2YgdHJhaW5pbmcsIGluZmVyZW5jZSBhbmQgZXZhbHVhdGlvbiBpblxuICogVGVuc29yRmxvdy5qcy4gVG8gY3JlYXRlIGEgYHRmLkxheWVyc01vZGVsYCwgdXNlIGB0Zi5MYXllcnNNb2RlbGAuXG4gKlxuICogU2VlIGFsc286XG4gKiAgIGB0Zi5TZXF1ZW50aWFsYCwgYHRmLmxvYWRMYXllcnNNb2RlbGAuXG4gKlxuICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAqL1xuZXhwb3J0IGNsYXNzIExheWVyc01vZGVsIGV4dGVuZHMgQ29udGFpbmVyIGltcGxlbWVudHMgdGZjLkluZmVyZW5jZU1vZGVsIHtcbiAgLy8gVGhlIGNsYXNzIG5hbWUgaXMgJ01vZGVsJyByYXRoZXIgdGhhbiAnTGF5ZXJzTW9kZWwnIGZvciBiYWNrd2FyZHNcbiAgLy8gY29tcGF0aWJpbGl0eSBzaW5jZSB0aGlzIGNsYXNzIG5hbWUgc2hvd3MgdXAgaW4gdGhlIHNlcmlhbGl6YXRpb24gZm9ybWF0LlxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIGNsYXNzTmFtZSA9ICdNb2RlbCc7XG4gIHByb3RlY3RlZCBvcHRpbWl6ZXJfOiBPcHRpbWl6ZXI7XG4gIC8vIFdoZXRoZXIgdGhlIG1vZGVsIGluc3RhbmNlIG93bnMgdGhlIG9wdGltaXplcjogYHRydWVgIGlmIGFuZCBvbmx5IGlmXG4gIC8vIGBvcHRpbWl6ZXJgIGlzIGNyZWF0ZWQgZnJvbSBhIHN0cmluZyBwYXJhbWV0ZXIgZHVyaW5nIGBjb21waWxlKClgIGNhbGwuXG4gIHByb3RlY3RlZCBpc09wdGltaXplck93bmVkOiBib29sZWFuO1xuXG4gIGxvc3M6IHN0cmluZ3xzdHJpbmdbXXx7W291dHB1dE5hbWU6IHN0cmluZ106IHN0cmluZ318TG9zc09yTWV0cmljRm58XG4gICAgICBMb3NzT3JNZXRyaWNGbltdfHtbb3V0cHV0TmFtZTogc3RyaW5nXTogTG9zc09yTWV0cmljRm59O1xuICBsb3NzRnVuY3Rpb25zOiBMb3NzT3JNZXRyaWNGbltdO1xuXG4gIC8vIFRPRE8oY2Fpcyk6IFRoZXNlIHByaXZhdGUgdmFyaWFibGVzIHNob3VsZCBwcm9iYWJseSBub3QgaGF2ZSB0aGUgc3RyaW5nXG4gIC8vICAgJ2ZlZWQnIGluIHRoZWlyIG5hbWVzLCBiZWNhdXNlIHdlIGFyZSBub3QgZGVhbGluZyB3aXRoIGEgc3ltYm9saWNcbiAgLy8gICBiYWNrZW5kLlxuICBwcml2YXRlIGZlZWRPdXRwdXRTaGFwZXM6IFNoYXBlW107XG4gIHByaXZhdGUgZmVlZExvc3NGbnM6IExvc3NPck1ldHJpY0ZuW107XG4gIHByaXZhdGUgY29sbGVjdGVkVHJhaW5hYmxlV2VpZ2h0czogTGF5ZXJWYXJpYWJsZVtdO1xuICBwcml2YXRlIHRlc3RGdW5jdGlvbjogKGRhdGE6IFRlbnNvcltdKSA9PiBTY2FsYXJbXTtcbiAgaGlzdG9yeTogSGlzdG9yeTtcblxuICAvLyBBIHB1YmxpYyBwcm9wZXJ0eSB0aGF0IGNhbiBiZSBzZXQgYnkgQ2FsbGJhY2tzIHRvIG9yZGVyIGVhcmx5IHN0b3BwaW5nXG4gIC8vIGR1cmluZyBgZml0KClgIGNhbGxzLlxuICBwcm90ZWN0ZWQgc3RvcFRyYWluaW5nXzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIGlzVHJhaW5pbmc6IGJvb2xlYW47XG5cbiAgbWV0cmljczogc3RyaW5nfExvc3NPck1ldHJpY0ZufEFycmF5PHN0cmluZ3xMb3NzT3JNZXRyaWNGbj58XG4gICAgICB7W291dHB1dE5hbWU6IHN0cmluZ106IHN0cmluZyB8IExvc3NPck1ldHJpY0ZufTtcbiAgbWV0cmljc05hbWVzOiBzdHJpbmdbXTtcbiAgLy8gUG9ydGluZyBOb3RlOiBgbWV0cmljc190ZW5zb3JzYCBpbiBQeUtlcmFzIGlzIGEgc3ltYm9saWMgdGVuc29yLiBCdXQgZ2l2ZW5cbiAgLy8gICB0aGUgaW1wZXJhdGl2ZSBuYXR1cmUgb2YgdGZqcy1jb3JlLCBgbWV0cmljc1RlbnNvcnNgIGlzIGFcbiAgLy8gICBUeXBlU2NyaXB0IGZ1bmN0aW9uIGhlcmUuXG4gIC8vICAgQWxzbyBub3RlIHRoYXQgZHVlIHRvIHRoZSBpbXBlcmF0aXZlIG5hdHVyZSBvZiB0ZmpzLWNvcmUsIGBtZXRyaWNzVGVuc29yYFxuICAvLyAgIGhlcmUgbmVlZHMgYW4gb3V0cHV0IGluZGV4IHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggb3V0cHV0IG9mIHRoZVxuICAvLyAgIExheWVyc01vZGVsIGEgbWV0cmljIGJlbG9uZ3MgdG8uIFRoaXMgaXMgdW5saWtlIGBtZXRyaWNzX3RlbnNvcnNgIGluXG4gIC8vICAgUHlLZXJhcywgd2hpY2ggaXMgYSBgbGlzdGAgb2Ygc3ltYm9saWMgdGVuc29ycywgZWFjaCBvZiB3aGljaCBoYXNcbiAgLy8gICBpbXBsaWNpdCBcImtub3dsZWRnZVwiIG9mIHRoZSBvdXRwdXRzIGl0IGRlcGVuZHMgb24uXG4gIG1ldHJpY3NUZW5zb3JzOiBBcnJheTxbTG9zc09yTWV0cmljRm4sIG51bWJlcl0+O1xuXG4gIC8vIFVzZXIgZGVmaW5kIG1ldGFkYXRhIChpZiBhbnkpLlxuICBwcml2YXRlIHVzZXJEZWZpbmVkTWV0YWRhdGE6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGFyZ3M6IENvbnRhaW5lckFyZ3MpIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLmlzVHJhaW5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBhIHRleHQgc3VtbWFyeSBvZiB0aGUgbW9kZWwncyBsYXllcnMuXG4gICAqXG4gICAqIFRoZSBzdW1tYXJ5IGluY2x1ZGVzXG4gICAqIC0gTmFtZSBhbmQgdHlwZSBvZiBhbGwgbGF5ZXJzIHRoYXQgY29tcHJpc2UgdGhlIG1vZGVsLlxuICAgKiAtIE91dHB1dCBzaGFwZShzKSBvZiB0aGUgbGF5ZXJzXG4gICAqIC0gTnVtYmVyIG9mIHdlaWdodCBwYXJhbWV0ZXJzIG9mIGVhY2ggbGF5ZXJcbiAgICogLSBJZiB0aGUgbW9kZWwgaGFzIG5vbi1zZXF1ZW50aWFsLWxpa2UgdG9wb2xvZ3ksIHRoZSBpbnB1dHMgZWFjaCBsYXllclxuICAgKiAgIHJlY2VpdmVzXG4gICAqIC0gVGhlIHRvdGFsIG51bWJlciBvZiB0cmFpbmFibGUgYW5kIG5vbi10cmFpbmFibGUgcGFyYW1ldGVycyBvZiB0aGUgbW9kZWwuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGlucHV0MSA9IHRmLmlucHV0KHtzaGFwZTogWzEwXX0pO1xuICAgKiBjb25zdCBpbnB1dDIgPSB0Zi5pbnB1dCh7c2hhcGU6IFsyMF19KTtcbiAgICogY29uc3QgZGVuc2UxID0gdGYubGF5ZXJzLmRlbnNlKHt1bml0czogNH0pLmFwcGx5KGlucHV0MSk7XG4gICAqIGNvbnN0IGRlbnNlMiA9IHRmLmxheWVycy5kZW5zZSh7dW5pdHM6IDh9KS5hcHBseShpbnB1dDIpO1xuICAgKiBjb25zdCBjb25jYXQgPSB0Zi5sYXllcnMuY29uY2F0ZW5hdGUoKS5hcHBseShbZGVuc2UxLCBkZW5zZTJdKTtcbiAgICogY29uc3Qgb3V0cHV0ID1cbiAgICogICAgIHRmLmxheWVycy5kZW5zZSh7dW5pdHM6IDMsIGFjdGl2YXRpb246ICdzb2Z0bWF4J30pLmFwcGx5KGNvbmNhdCk7XG4gICAqXG4gICAqIGNvbnN0IG1vZGVsID0gdGYubW9kZWwoe2lucHV0czogW2lucHV0MSwgaW5wdXQyXSwgb3V0cHV0czogb3V0cHV0fSk7XG4gICAqIG1vZGVsLnN1bW1hcnkoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBsaW5lTGVuZ3RoIEN1c3RvbSBsaW5lIGxlbmd0aCwgaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMuXG4gICAqIEBwYXJhbSBwb3NpdGlvbnMgQ3VzdG9tIHdpZHRocyBvZiBlYWNoIG9mIHRoZSBjb2x1bW5zLCBhcyBlaXRoZXJcbiAgICogICBmcmFjdGlvbnMgb2YgYGxpbmVMZW5ndGhgIChlLmcuLCBgWzAuNSwgMC43NSwgMV1gKSBvciBhYnNvbHV0ZSBudW1iZXJcbiAgICogICBvZiBjaGFyYWN0ZXJzIChlLmcuLCBgWzMwLCA1MCwgNjVdYCkuIEVhY2ggbnVtYmVyIGNvcnJlc3BvbmRzIHRvXG4gICAqICAgcmlnaHQtbW9zdCAoaS5lLiwgZW5kaW5nKSBwb3NpdGlvbiBvZiBhIGNvbHVtbi5cbiAgICogQHBhcmFtIHByaW50Rm4gQ3VzdG9tIHByaW50IGZ1bmN0aW9uLiBDYW4gYmUgdXNlZCB0byByZXBsYWNlIHRoZSBkZWZhdWx0XG4gICAqICAgYGNvbnNvbGUubG9nYC4gRm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIGB4ID0+IHt9YCB0byBtdXRlIHRoZSBwcmludGVkXG4gICAqICAgbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBzdW1tYXJ5KFxuICAgICAgbGluZUxlbmd0aD86IG51bWJlciwgcG9zaXRpb25zPzogbnVtYmVyW10sXG4gICAgICBwcmludEZuOlxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHZvaWQgPSBjb25zb2xlLmxvZykge1xuICAgIGlmICghdGhpcy5idWlsdCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYFRoaXMgbW9kZWwgaGFzIG5ldmVyIGJlZW4gY2FsbGVkLCB0aHVzIGl0cyB3ZWlnaHRzIGhhdmUgbm90IGJlZW4gYCArXG4gICAgICAgICAgYGNyZWF0ZWQgeWV0LiBTbyBubyBzdW1tYXJ5IGNhbiBiZSBkaXNwbGF5ZWQuIEJ1aWxkIHRoZSBtb2RlbCBgICtcbiAgICAgICAgICBgZmlyc3QgKGUuZy4sIGJ5IGNhbGxpbmcgaXQgb24gc29tZSB0ZXN0IGRhdGEpLmApO1xuICAgIH1cbiAgICBwcmludFN1bW1hcnkodGhpcywgbGluZUxlbmd0aCwgcG9zaXRpb25zLCBwcmludEZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGFuZCBwcmVwYXJlcyB0aGUgbW9kZWwgZm9yIHRyYWluaW5nIGFuZCBldmFsdWF0aW9uLiAgQ29tcGlsaW5nXG4gICAqIG91dGZpdHMgdGhlIG1vZGVsIHdpdGggYW4gb3B0aW1pemVyLCBsb3NzLCBhbmQvb3IgbWV0cmljcy4gIENhbGxpbmcgYGZpdGBcbiAgICogb3IgYGV2YWx1YXRlYCBvbiBhbiB1bi1jb21waWxlZCBtb2RlbCB3aWxsIHRocm93IGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0gYXJncyBhIGBNb2RlbENvbXBpbGVBcmdzYCBzcGVjaWZ5aW5nIHRoZSBsb3NzLCBvcHRpbWl6ZXIsIGFuZFxuICAgKiBtZXRyaWNzIHRvIGJlIHVzZWQgZm9yIGZpdHRpbmcgYW5kIGV2YWx1YXRpbmcgdGhpcyBtb2RlbC5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGNvbXBpbGUoYXJnczogTW9kZWxDb21waWxlQXJncyk6IHZvaWQge1xuICAgIGlmIChhcmdzLmxvc3MgPT0gbnVsbCkge1xuICAgICAgYXJncy5sb3NzID0gW107XG4gICAgfVxuICAgIHRoaXMubG9zcyA9IGFyZ3MubG9zcztcblxuICAgIGlmICh0eXBlb2YgYXJncy5vcHRpbWl6ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm9wdGltaXplcl8gPSBvcHRpbWl6ZXJzLmdldE9wdGltaXplcihhcmdzLm9wdGltaXplcik7XG4gICAgICB0aGlzLmlzT3B0aW1pemVyT3duZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShhcmdzLm9wdGltaXplciBpbnN0YW5jZW9mIE9wdGltaXplcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgVXNlci1kZWZpbmVkIG9wdGltaXplciBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIHRmLk9wdGltaXplci5gKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW1pemVyXyA9IGFyZ3Mub3B0aW1pemVyO1xuICAgICAgdGhpcy5pc09wdGltaXplck93bmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhjYWlzKTogQWRkIGxvc3NXZWlnaHRzLlxuICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBzYW1wbGVXZWlnaHRNb2RlLlxuXG4gICAgLy8gUHJlcGFyZSBsb3NzIGZ1bmN0aW9ucy5cbiAgICBsZXQgbG9zc0Z1bmN0aW9uczogTG9zc09yTWV0cmljRm5bXSA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzLmxvc3MpICYmIHR5cGVvZiBhcmdzLmxvc3MgIT09ICdzdHJpbmcnICYmXG4gICAgICAgIHR5cGVvZiBhcmdzLmxvc3MgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MubG9zcyA9IGFyZ3MubG9zcyBhcyB7W291dHB1dE5hbWU6IHN0cmluZ106IHN0cmluZ307XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gYXJncy5sb3NzKSB7XG4gICAgICAgIGlmICh0aGlzLm91dHB1dE5hbWVzLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGBVbmtub3duIGVudHJ5IGluIGxvc3MgZGljdGlvbmFyeTogXCIke25hbWV9XCIuIGAgK1xuICAgICAgICAgICAgICBgT25seSBleHBlY3RlZCB0aGUgZm9sbG93aW5nIGtleXM6ICR7dGhpcy5vdXRwdXROYW1lc31gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMub3V0cHV0TmFtZXMpIHtcbiAgICAgICAgaWYgKGFyZ3MubG9zc1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgT3V0cHV0IFwiJHtuYW1lfVwiIGlzIG1pc3NpbmcgZnJvbSBsb3NzIGRpY3Rpb25hcnkuIFdlIGFzc3VtZSBgICtcbiAgICAgICAgICAgICAgYHRoaXMgd2FzIGRvbmUgb24gcHVycG9zZSwgYW5kIHdlIHdpbGwgbm90IGJlIGV4cGVjdGluZyBkYXRhIGAgK1xuICAgICAgICAgICAgICBgdG8gYmUgcGFzc2VkIHRvICR7bmFtZX0gZHVyaW5nIHRyYWluaW5nYCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9zc0Z1bmN0aW9ucy5wdXNoKGxvc3Nlcy5nZXQoYXJncy5sb3NzW25hbWVdKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZ3MubG9zcykpIHtcbiAgICAgIGlmIChhcmdzLmxvc3MubGVuZ3RoICE9PSB0aGlzLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgYFdoZW4gcGFzc2luZyBhbiBBcnJheSBhcyBsb3NzLCBpdCBzaG91bGQgaGF2ZSBvbmUgZW50cnkgcGVyIGAgK1xuICAgICAgICAgICAgYG1vZGVsIG91dHB1dC4gVGhlIG1vZGVsIGhhcyAke3RoaXMub3V0cHV0cy5sZW5ndGh9IG91dHB1dChzKSwgYCArXG4gICAgICAgICAgICBgYnV0IHlvdSBwYXNzZWQgbG9zcz0ke2FyZ3MubG9zc30uYCk7XG4gICAgICB9XG4gICAgICBjb25zdCB0aGVMb3NzZXMgPSBhcmdzLmxvc3MgYXMgQXJyYXk8c3RyaW5nfExvc3NPck1ldHJpY0ZuPjtcbiAgICAgIGxvc3NGdW5jdGlvbnMgPSB0aGVMb3NzZXMubWFwKGwgPT4gbG9zc2VzLmdldChsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvc3NGdW5jdGlvbiA9IGxvc3Nlcy5nZXQoYXJncy5sb3NzKTtcbiAgICAgIHRoaXMub3V0cHV0cy5mb3JFYWNoKF8gPT4ge1xuICAgICAgICBsb3NzRnVuY3Rpb25zLnB1c2gobG9zc0Z1bmN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubG9zc0Z1bmN0aW9ucyA9IGxvc3NGdW5jdGlvbnM7XG5cbiAgICB0aGlzLmZlZWRPdXRwdXROYW1lcyA9IFtdO1xuICAgIHRoaXMuZmVlZE91dHB1dFNoYXBlcyA9IFtdO1xuICAgIHRoaXMuZmVlZExvc3NGbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3V0cHV0cy5sZW5ndGg7ICsraSkge1xuICAgICAgLy8gVE9ETyhjYWlzKTogTG9naWMgZm9yIHNraXBwaW5nIHRhcmdldChzKS5cbiAgICAgIGNvbnN0IHNoYXBlID0gdGhpcy5pbnRlcm5hbE91dHB1dFNoYXBlc1tpXTtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLm91dHB1dE5hbWVzW2ldO1xuICAgICAgdGhpcy5mZWVkT3V0cHV0TmFtZXMucHVzaChuYW1lKTtcbiAgICAgIHRoaXMuZmVlZE91dHB1dFNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIHRoaXMuZmVlZExvc3NGbnMucHVzaCh0aGlzLmxvc3NGdW5jdGlvbnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBsb2dpYyBmb3Igb3V0cHV0IG1hc2tzLlxuICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBsb2dpYyBmb3Igc2FtcGxlIHdlaWdodHMuXG4gICAgY29uc3Qgc2tpcFRhcmdldEluZGljZXM6IG51bWJlcltdID0gW107XG5cbiAgICAvLyBQcmVwYXJlIG1ldHJpY3MuXG4gICAgdGhpcy5tZXRyaWNzID0gYXJncy5tZXRyaWNzO1xuICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCB3ZWlnaHRlZE1ldHJpY3MuXG4gICAgdGhpcy5tZXRyaWNzTmFtZXMgPSBbJ2xvc3MnXTtcbiAgICB0aGlzLm1ldHJpY3NUZW5zb3JzID0gW107XG5cbiAgICAvLyBDb21wdXRlIHRvdGFsIGxvc3MuXG4gICAgLy8gUG9ydGluZyBOb3RlOiBJbiBQeUtlcmFzLCBtZXRyaWNzX3RlbnNvcnMgYXJlIHN5bWJvbGljIHRlbnNvciBvYmplY3RzLlxuICAgIC8vICAgSGVyZSwgbWV0cmljc1RlbnNvcnMgYXJlIFR5cGVTY3JpcHQgZnVuY3Rpb25zLiBUaGlzIGRpZmZlcmVuY2UgaXMgZHVlXG4gICAgLy8gICB0byB0aGUgZGlmZmVyZW5jZSBpbiBzeW1ib2xpYy9pbXBlcmF0aXZlIHByb3BlcnR5IG9mIHRoZSBiYWNrZW5kcy5cbiAgICBuYW1lU2NvcGUoJ2xvc3MnLCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3V0cHV0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoc2tpcFRhcmdldEluZGljZXMuaW5kZXhPZihpKSAhPT0gLTEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPKGNhaXMpOiBBZGQgd2VpZ2h0ZWRMb3NzLCBzYW1wbGVXZWlnaHQgYW5kIG1hc2suXG4gICAgICAgIC8vICAgVGhlIGZvbGxvd2luZyBsaW5lIHNob3VsZCBiZSB3ZWlnaHRlZExvc3NcbiAgICAgICAgY29uc3Qgd2VpZ2h0ZWRMb3NzID0gdGhpcy5sb3NzRnVuY3Rpb25zW2ldO1xuICAgICAgICBpZiAodGhpcy5vdXRwdXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLm1ldHJpY3NUZW5zb3JzLnB1c2goW3dlaWdodGVkTG9zcywgaV0pO1xuICAgICAgICAgIHRoaXMubWV0cmljc05hbWVzLnB1c2godGhpcy5vdXRwdXROYW1lc1tpXSArICdfbG9zcycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBvcnRpbmcgTm90ZTogRHVlIHRvIHRoZSBpbXBlcmF0aXZlIG5hdHVyZSBvZiB0aGUgYmFja2VuZCwgd2UgY2FsY3VsYXRlXG4gICAgICAvLyAgIHRoZSByZWd1bGFyaXplciBwZW5hbHRpZXMgaW4gdGhlIHRvdGFsTG9zc0Z1bmN0aW9uLCBpbnN0ZWFkIG9mIGhlcmUuXG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXN0ZWRNZXRyaWNzID0gY29sbGVjdE1ldHJpY3MoYXJncy5tZXRyaWNzLCB0aGlzLm91dHB1dE5hbWVzKTtcbiAgICAvLyBUT0RPKGNhaXMpOiBBZGQgbmVzdGVkV2VpZ2h0ZWRNZXRyaWNzLlxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHVzZWQgaW4gbG9vcCBiZWxvdy5cbiAgICAgKi9cbiAgICBjb25zdCBhcHBlbmRNZXRyaWMgPVxuICAgICAgICAob3V0cHV0SW5kZXg6IG51bWJlciwgbWV0cmljTmFtZTogc3RyaW5nLFxuICAgICAgICAgbWV0cmljVGVuc29yOiBMb3NzT3JNZXRyaWNGbikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLm91dHB1dE5hbWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIG1ldHJpY05hbWUgPSB0aGlzLm91dHB1dE5hbWVzW291dHB1dEluZGV4XSArICdfJyArIG1ldHJpY05hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubWV0cmljc05hbWVzLnB1c2gobWV0cmljTmFtZSk7XG4gICAgICAgICAgdGhpcy5tZXRyaWNzVGVuc29ycy5wdXNoKFttZXRyaWNUZW5zb3IsIG91dHB1dEluZGV4XSk7XG4gICAgICAgIH07XG5cbiAgICBuYW1lU2NvcGUoJ21ldHJpYycsICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vdXRwdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChza2lwVGFyZ2V0SW5kaWNlcy5pbmRleE9mKGkpICE9PSAtMSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dE1ldHJpY3MgPSBuZXN0ZWRNZXRyaWNzW2ldO1xuICAgICAgICAvLyBUT0RPKGNhaXMpOiBBZGQgd2VpZ2h0cyBhbmQgb3V0cHV0V2VpZ2h0ZWRNZXRyaWNzLlxuXG4gICAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBvcHRpb25hbCBhcmcgYHdlaWdodHNgIHRvIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24uXG4gICAgICAgIGNvbnN0IGhhbmRsZU1ldHJpY3MgPSAobWV0cmljczogQXJyYXk8c3RyaW5nfExvc3NPck1ldHJpY0ZuPikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1ldHJpY05hbWVQcmVmaXggPSAnJztcbiAgICAgICAgICBsZXQgbWV0cmljTmFtZTogc3RyaW5nO1xuICAgICAgICAgIGxldCBhY2NGbjogTG9zc09yTWV0cmljRm47XG4gICAgICAgICAgbGV0IHdlaWdodGVkTWV0cmljRm46IExvc3NPck1ldHJpY0ZuO1xuICAgICAgICAgIC8vICBUT0RPKGNhaXMpOiBVc2UgJ3dlaWdodHNfJyBmb3Igd2VpZ2h0ZWQgbWV0cmljcy5cblxuICAgICAgICAgIGZvciAoY29uc3QgbWV0cmljIG9mIG1ldHJpY3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0cmljID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgIFsnYWNjdXJhY3knLCAnYWNjJywgJ2Nyb3NzZW50cm9weScsICdjZSddLmluZGV4T2YobWV0cmljKSAhPT1cbiAgICAgICAgICAgICAgICAgICAgLTEpIHtcbiAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0U2hhcGUgPSB0aGlzLmludGVybmFsT3V0cHV0U2hhcGVzW2ldO1xuXG4gICAgICAgICAgICAgIGlmIChvdXRwdXRTaGFwZVtvdXRwdXRTaGFwZS5sZW5ndGggLSAxXSA9PT0gMSB8fFxuICAgICAgICAgICAgICAgICAgdGhpcy5sb3NzRnVuY3Rpb25zW2ldID09PSBsb3NzZXMuYmluYXJ5Q3Jvc3NlbnRyb3B5KSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogYmluYXJ5IGFjY3VyYWN5L2Nyb3NzZW50cm9weS5cbiAgICAgICAgICAgICAgICBpZiAoWydhY2N1cmFjeScsICdhY2MnXS5pbmRleE9mKG1ldHJpYykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBhY2NGbiA9IE1ldHJpY3MuYmluYXJ5QWNjdXJhY3k7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChbJ2Nyb3NzZW50cm9weScsICdjZSddLmluZGV4T2YobWV0cmljKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGFjY0ZuID0gTWV0cmljcy5iaW5hcnlDcm9zc2VudHJvcHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgdGhpcy5sb3NzRnVuY3Rpb25zW2ldID09PVxuICAgICAgICAgICAgICAgICAgbG9zc2VzLnNwYXJzZUNhdGVnb3JpY2FsQ3Jvc3NlbnRyb3B5KSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogY2F0ZWdvcmljYWwgYWNjdXJhY3kgLyBjcm9zc2VudHJvcHkgd2l0aCBzcGFyc2VcbiAgICAgICAgICAgICAgICAvLyB0YXJnZXRzLlxuICAgICAgICAgICAgICAgIGlmIChbJ2FjY3VyYWN5JywgJ2FjYyddLmluZGV4T2YobWV0cmljKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGFjY0ZuID0gTWV0cmljcy5zcGFyc2VDYXRlZ29yaWNhbEFjY3VyYWN5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoWydjcm9zc2VudHJvcHknLCAnY2UnXS5pbmRleE9mKG1ldHJpYykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBhY2NGbiA9IE1ldHJpY3Muc3BhcnNlQ2F0ZWdvcmljYWxDcm9zc2VudHJvcHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhc2U6IGNhdGVnb3JpY2FsIGFjY3VyYWN5IC8gY3Jvc3NlbnRyb3B5LlxuICAgICAgICAgICAgICAgIGlmIChbJ2FjY3VyYWN5JywgJ2FjYyddLmluZGV4T2YobWV0cmljKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGFjY0ZuID0gTWV0cmljcy5jYXRlZ29yaWNhbEFjY3VyYWN5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoWydjcm9zc2VudHJvcHknLCAnY2UnXS5pbmRleE9mKG1ldHJpYykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBhY2NGbiA9IE1ldHJpY3MuY2F0ZWdvcmljYWxDcm9zc2VudHJvcHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBzdWZmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgaWYgKFsnYWNjdXJhY3knLCAnYWNjJ10uaW5kZXhPZihtZXRyaWMpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1ZmZpeCA9ICdhY2MnO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFsnY3Jvc3NlbnRyb3B5JywgJ2NlJ10uaW5kZXhPZihtZXRyaWMpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1ZmZpeCA9ICdjZSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gVE9ETyhjYWlzKTogQWRkIHdlaWdodGluZyBhY3R1YWxseS5cbiAgICAgICAgICAgICAgd2VpZ2h0ZWRNZXRyaWNGbiA9IGFjY0ZuO1xuICAgICAgICAgICAgICBtZXRyaWNOYW1lID0gbWV0cmljTmFtZVByZWZpeCArIHN1ZmZpeDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldHJpY0ZuID0gTWV0cmljcy5nZXQobWV0cmljKTtcbiAgICAgICAgICAgICAgLy8gVE9ETyhjYWlzKTogQWRkIHdlaWdodGluZyBhY3R1YWxseS5cbiAgICAgICAgICAgICAgd2VpZ2h0ZWRNZXRyaWNGbiA9IG1ldHJpY0ZuO1xuICAgICAgICAgICAgICBtZXRyaWNOYW1lID1cbiAgICAgICAgICAgICAgICAgIG1ldHJpY05hbWVQcmVmaXggKyBNZXRyaWNzLmdldExvc3NPck1ldHJpY05hbWUobWV0cmljKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETyhjYWlzKTogQWRkIHdlaWdodGluZyBhbmQgbWFza2luZyB0byBtZXRyaWNSZXN1bHQuXG4gICAgICAgICAgICBsZXQgbWV0cmljUmVzdWx0OiBMb3NzT3JNZXRyaWNGbjtcbiAgICAgICAgICAgIG5hbWVTY29wZShtZXRyaWNOYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAgIG1ldHJpY1Jlc3VsdCA9IHdlaWdodGVkTWV0cmljRm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFwcGVuZE1ldHJpYyhpLCBtZXRyaWNOYW1lLCBtZXRyaWNSZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVNZXRyaWNzKG91dHB1dE1ldHJpY3MpO1xuICAgICAgICAvLyBUT0RPKGNhaXMpOiBDYWxsIGhhbmRsZU1ldHJpY3Mgd2l0aCB3ZWlnaHRzLlxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUG9ydGluZyBOb3RlczogR2l2ZW4gdGhlIGltcGVyYXRpdmUgYmFja2VuZCBvZiB0ZmpzLWNvcmUsXG4gICAgLy8gICB0aGVyZSBpcyBubyBuZWVkIGZvciBjb25zdHJ1Y3RpbmcgdGhlIHN5bWJvbGljIGdyYXBoIGFuZCBwbGFjZWhvbGRlcnMuXG4gICAgdGhpcy5jb2xsZWN0ZWRUcmFpbmFibGVXZWlnaHRzID0gdGhpcy50cmFpbmFibGVXZWlnaHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRyYWluYWJsZSB3ZWlnaHRzIGNvdW50IGNvbnNpc3RlbmN5LlxuICAgKlxuICAgKiBUaGlzIHdpbGwgcmFpc2UgYSB3YXJuaW5nIGlmIGB0aGlzLnRyYWluYWJsZVdlaWdodHNgIGFuZFxuICAgKiBgdGhpcy5jb2xsZWN0ZWRUcmFpbmFibGVXZWlnaHRzYCBhcmUgaW5jb25zaXN0ZW50IChpLmUuLCBoYXZlIGRpZmZlcmVudFxuICAgKiBudW1iZXJzIG9mIHBhcmFtZXRlcnMpLlxuICAgKiBJbmNvbnNpc3RlbmN5IHdpbGwgdHlwaWNhbGx5IGFyaXNlIHdoZW4gb25lIG1vZGlmaWVzIGBtb2RlbC50cmFpbmFibGVgXG4gICAqIHdpdGhvdXQgY2FsbGluZyBgbW9kZWwuY29tcGlsZSgpYCBhZ2Fpbi5cbiAgICovXG4gIHByb3RlY3RlZCBjaGVja1RyYWluYWJsZVdlaWdodHNDb25zaXN0ZW5jeSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsZWN0ZWRUcmFpbmFibGVXZWlnaHRzID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhaW5hYmxlV2VpZ2h0cy5sZW5ndGggIT09XG4gICAgICAgIHRoaXMuY29sbGVjdGVkVHJhaW5hYmxlV2VpZ2h0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnRGlzY3JlcGFuY3kgYmV0d2VlbiB0cmFpbmFibGV3ZWlnaHRzIGFuZCBjb2xsZWN0ZWQgdHJhaW5hYmxlICcgK1xuICAgICAgICAgICd3ZWlnaHRzLiBEaWQgeW91IHNldCBgbW9kZWwudHJhaW5hYmxlYCB3aXRob3V0IGNhbGxpbmcgJyArXG4gICAgICAgICAgJ2Btb2RlbC5jb21waWxlKClgIGFmdGVyd2FyZHM/Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvc3MgdmFsdWUgJiBtZXRyaWNzIHZhbHVlcyBmb3IgdGhlIG1vZGVsIGluIHRlc3QgbW9kZS5cbiAgICpcbiAgICogTG9zcyBhbmQgbWV0cmljcyBhcmUgc3BlY2lmaWVkIGR1cmluZyBgY29tcGlsZSgpYCwgd2hpY2ggbmVlZHMgdG8gaGFwcGVuXG4gICAqIGJlZm9yZSBjYWxscyB0byBgZXZhbHVhdGUoKWAuXG4gICAqXG4gICAqIENvbXB1dGF0aW9uIGlzIGRvbmUgaW4gYmF0Y2hlcy5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKHtcbiAgICogICBsYXllcnM6IFt0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBpbnB1dFNoYXBlOiBbMTBdfSldXG4gICAqIH0pO1xuICAgKiBtb2RlbC5jb21waWxlKHtvcHRpbWl6ZXI6ICdzZ2QnLCBsb3NzOiAnbWVhblNxdWFyZWRFcnJvcid9KTtcbiAgICogY29uc3QgcmVzdWx0ID0gbW9kZWwuZXZhbHVhdGUoXG4gICAqICAgICB0Zi5vbmVzKFs4LCAxMF0pLCB0Zi5vbmVzKFs4LCAxXSksIHtiYXRjaFNpemU6IDR9KTtcbiAgICogcmVzdWx0LnByaW50KCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0geCBgdGYuVGVuc29yYCBvZiB0ZXN0IGRhdGEsIG9yIGFuIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzIGlmIHRoZVxuICAgKiBtb2RlbCBoYXMgbXVsdGlwbGUgaW5wdXRzLlxuICAgKiBAcGFyYW0geSBgdGYuVGVuc29yYCBvZiB0YXJnZXQgZGF0YSwgb3IgYW4gYEFycmF5YCBvZiBgdGYuVGVuc29yYHMgaWYgdGhlXG4gICAqIG1vZGVsIGhhcyBtdWx0aXBsZSBvdXRwdXRzLlxuICAgKiBAcGFyYW0gYXJncyBBIGBNb2RlbEV2YWx1YXRlQXJnc2AsIGNvbnRhaW5pbmcgb3B0aW9uYWwgZmllbGRzLlxuICAgKlxuICAgKiBAcmV0dXJuIGBTY2FsYXJgIHRlc3QgbG9zcyAoaWYgdGhlIG1vZGVsIGhhcyBhIHNpbmdsZSBvdXRwdXQgYW5kIG5vXG4gICAqICAgbWV0cmljcykgb3IgYEFycmF5YCBvZiBgU2NhbGFyYHMgKGlmIHRoZSBtb2RlbCBoYXMgbXVsdGlwbGUgb3V0cHV0c1xuICAgKiAgIGFuZC9vciBtZXRyaWNzKS4gVGhlIGF0dHJpYnV0ZSBgbW9kZWwubWV0cmljc05hbWVzYFxuICAgKiAgIHdpbGwgZ2l2ZSB5b3UgdGhlIGRpc3BsYXkgbGFiZWxzIGZvciB0aGUgc2NhbGFyIG91dHB1dHMuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBldmFsdWF0ZShcbiAgICAgIHg6IFRlbnNvcnxUZW5zb3JbXSwgeTogVGVuc29yfFRlbnNvcltdLFxuICAgICAgYXJnczogTW9kZWxFdmFsdWF0ZUFyZ3MgPSB7fSk6IFNjYWxhcnxTY2FsYXJbXSB7XG4gICAgY29uc3QgYmF0Y2hTaXplID0gYXJncy5iYXRjaFNpemUgPT0gbnVsbCA/IDMyIDogYXJncy5iYXRjaFNpemU7XG4gICAgY2hlY2tCYXRjaFNpemUoYmF0Y2hTaXplKTtcblxuICAgIC8vIFRPRE8oY2Fpcyk6IFN0YW5kYXJkaXplIGBjb25maWcuc2FtcGxlV2VpZ2h0c2AgYXMgd2VsbC5cbiAgICAvLyBWYWxpZGF0ZSB1c2VyIGRhdGEuXG4gICAgY29uc3QgY2hlY2tCYXRjaEF4aXMgPSB0cnVlO1xuICAgIGNvbnN0IHN0YW5kYXJkaXplZE91dHMgPVxuICAgICAgICB0aGlzLnN0YW5kYXJkaXplVXNlckRhdGFYWSh4LCB5LCBjaGVja0JhdGNoQXhpcywgYmF0Y2hTaXplKTtcbiAgICB0cnkge1xuICAgICAgLy8gVE9ETyhjYWlzKTogSWYgdXNlcyBgdXNlTGVhcm5pbmdQaGFzZWAsIHNldCB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50XG4gICAgICAvLyBvZiB0aGUgaW5wdXQgdG8gMC5cbiAgICAgIGNvbnN0IGlucyA9IHN0YW5kYXJkaXplZE91dHNbMF0uY29uY2F0KHN0YW5kYXJkaXplZE91dHNbMV0pO1xuICAgICAgdGhpcy5tYWtlVGVzdEZ1bmN0aW9uKCk7XG4gICAgICBjb25zdCBmID0gdGhpcy50ZXN0RnVuY3Rpb247XG4gICAgICBjb25zdCB0ZXN0T3V0cyA9XG4gICAgICAgICAgdGhpcy50ZXN0TG9vcChmLCBpbnMsIGJhdGNoU2l6ZSwgYXJncy52ZXJib3NlLCBhcmdzLnN0ZXBzKTtcbiAgICAgIHJldHVybiBzaW5nbGV0b25PckFycmF5KHRlc3RPdXRzKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZGlzcG9zZU5ld1RlbnNvcnMoc3RhbmRhcmRpemVkT3V0c1swXSwgeCk7XG4gICAgICBkaXNwb3NlTmV3VGVuc29ycyhzdGFuZGFyZGl6ZWRPdXRzWzFdLCB5KTtcbiAgICB9XG4gIH1cblxuICAvLyBUT0RPKGNhaXMpOiBBZGQgY29kZSBzbmlwcGV0IGJlbG93IG9uY2UgcmVhbCBkYXRhc2V0IG9iamVjdHMgYXJlXG4gIC8vICAgYXZhaWxhYmxlLlxuICAvKipcbiAgICogRXZhbHVhdGUgbW9kZWwgdXNpbmcgYSBkYXRhc2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZTogVW5saWtlIGBldmFsdWF0ZSgpYCwgdGhpcyBtZXRob2QgaXMgYXN5bmNocm9ub3VzIChgYXN5bmNgKS5cbiAgICpcbiAgICogQHBhcmFtIGRhdGFzZXQgQSBkYXRhc2V0IG9iamVjdC4gSXRzIGBpdGVyYXRvcigpYCBtZXRob2QgaXMgZXhwZWN0ZWRcbiAgICogICB0byBnZW5lcmF0ZSBhIGRhdGFzZXQgaXRlcmF0b3Igb2JqZWN0LCB0aGUgYG5leHQoKWAgbWV0aG9kIG9mIHdoaWNoXG4gICAqICAgaXMgZXhwZWN0ZWQgdG8gcHJvZHVjZSBkYXRhIGJhdGNoZXMgZm9yIGV2YWx1YXRpb24uIFRoZSByZXR1cm4gdmFsdWVcbiAgICogICBvZiB0aGUgYG5leHQoKWAgY2FsbCBvdWdodCB0byBjb250YWluIGEgYm9vbGVhbiBgZG9uZWAgZmllbGQgYW5kIGFcbiAgICogICBgdmFsdWVgIGZpZWxkLiBUaGUgYHZhbHVlYCBmaWVsZCBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheSBvZiB0d29cbiAgICogICBgdGYuVGVuc29yYHMgb3IgYW4gYXJyYXkgb2YgdHdvIG5lc3RlZCBgdGYuVGVuc29yYCBzdHJ1Y3R1cmVzLiBUaGUgZm9ybWVyXG4gICAqICAgY2FzZSBpcyBmb3IgbW9kZWxzIHdpdGggZXhhY3RseSBvbmUgaW5wdXQgYW5kIG9uZSBvdXRwdXQgKGUuZy5cbiAgICogICBhIHNlcXVlbnRpYWwgbW9kZWwpLiBUaGUgbGF0dGVyIGNhc2UgaXMgZm9yIG1vZGVscyB3aXRoIG11bHRpcGxlXG4gICAqICAgaW5wdXRzIGFuZC9vciBtdWx0aXBsZSBvdXRwdXRzLiBPZiB0aGUgdHdvIGl0ZW1zIGluIHRoZSBhcnJheSwgdGhlXG4gICAqICAgZmlyc3QgaXMgdGhlIGlucHV0IGZlYXR1cmUocykgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIG91dHB1dCB0YXJnZXQocykuXG4gICAqIEBwYXJhbSBhcmdzIEEgY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBkYXRhc2V0LWJhc2VkIGV2YWx1YXRpb24uXG4gICAqIEByZXR1cm5zIExvc3MgYW5kIG1ldHJpYyB2YWx1ZXMgYXMgYW4gQXJyYXkgb2YgYFNjYWxhcmAgb2JqZWN0cy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGFzeW5jIGV2YWx1YXRlRGF0YXNldChkYXRhc2V0OiBEYXRhc2V0PHt9PiwgYXJncz86IE1vZGVsRXZhbHVhdGVEYXRhc2V0QXJncyk6XG4gICAgICBQcm9taXNlPFNjYWxhcnxTY2FsYXJbXT4ge1xuICAgIHRoaXMubWFrZVRlc3RGdW5jdGlvbigpO1xuICAgIHJldHVybiBldmFsdWF0ZURhdGFzZXQodGhpcywgZGF0YXNldCwgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG51bWJlciBvZiBzYW1wbGVzIHByb3ZpZGVkIGZvciB0cmFpbmluZywgZXZhbHVhdGlvbiBvciBwcmVkaWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gaW5zIElucHV0IGB0Zi5UZW5zb3JgLlxuICAgKiBAcGFyYW0gYmF0Y2hTaXplIEludGVnZXIgYmF0Y2ggc2l6ZSwgb3B0aW9uYWwuXG4gICAqIEBwYXJhbSBzdGVwcyBUb3RhbCBudW1iZXIgb2Ygc3RlcHMgKGJhdGNoZXMgb2Ygc2FtcGxlcykgYmVmb3JlXG4gICAqIGRlY2xhcmluZyBsb29wIGZpbmlzaGVkLiBPcHRpb25hbC5cbiAgICogQHBhcmFtIHN0ZXBzTmFtZSBUaGUgcHVibGljIEFQSSdzIHBhcmFtZXRlciBuYW1lIGZvciBgc3RlcHNgLlxuICAgKiBAcmV0dXJucyBOdW1iZXIgb2Ygc2FtcGxlcyBwcm92aWRlZC5cbiAgICovXG4gIHByaXZhdGUgY2hlY2tOdW1TYW1wbGVzKFxuICAgICAgaW5zOiBUZW5zb3J8VGVuc29yW10sIGJhdGNoU2l6ZT86IG51bWJlciwgc3RlcHM/OiBudW1iZXIsXG4gICAgICBzdGVwc05hbWUgPSAnc3RlcHMnKTogbnVtYmVyIHtcbiAgICBsZXQgbnVtU2FtcGxlczogbnVtYmVyO1xuICAgIGlmIChzdGVwcyAhPSBudWxsKSB7XG4gICAgICBudW1TYW1wbGVzID0gbnVsbDtcbiAgICAgIGlmIChiYXRjaFNpemUgIT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBJZiAke3N0ZXBzTmFtZX0gaXMgc2V0LCBiYXRjaFNpemUgbXVzdCBiZSBudWxsIG9yIHVuZGVmaW5lZC5gICtcbiAgICAgICAgICAgIGBHb3QgYmF0Y2hTaXplID0gJHtiYXRjaFNpemV9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnMgIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5zKSkge1xuICAgICAgICBudW1TYW1wbGVzID0gaW5zWzBdLnNoYXBlWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtU2FtcGxlcyA9IGlucy5zaGFwZVswXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgYEVpdGhlciB0aGUgaW5wdXQgZGF0YSBzaG91bGQgaGF2ZSBhIGRlZmluZWQgc2hhcGUsIG9yIGAgK1xuICAgICAgICAgIGAke3N0ZXBzTmFtZX0gc2hvdWQgYmUgc3BlY2lmaWVkLmApO1xuICAgIH1cbiAgICByZXR1cm4gbnVtU2FtcGxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGludGVybmFsIHRlbnNvcnMgb2YgdGhlIG1vZGVsIHdpdGggaW5wdXQgZGF0YSBmZWVkLlxuICAgKiBAcGFyYW0gaW5wdXRzIElucHV0IGRhdGEgZmVlZC4gTXVzdCBtYXRjaCB0aGUgaW5wdXRzIG9mIHRoZSBtb2RlbC5cbiAgICogQHBhcmFtIG91dHB1dHMgTmFtZXMgb2YgdGhlIG91dHB1dCB0ZW5zb3JzIHRvIGJlIGZldGNoZWQuIE11c3QgbWF0Y2hcbiAgICogICBuYW1lcyBvZiB0aGUgU3ltYm9saWNUZW5zb3JzIHRoYXQgYmVsb25nIHRvIHRoZSBncmFwaC5cbiAgICogQHJldHVybnMgRmV0Y2hlZCB2YWx1ZXMgZm9yIGBvdXRwdXRzYC5cbiAgICovXG4gIGV4ZWN1dGUoaW5wdXRzOiBUZW5zb3J8VGVuc29yW118TmFtZWRUZW5zb3JNYXAsIG91dHB1dHM6IHN0cmluZ3xzdHJpbmdbXSk6XG4gICAgICBUZW5zb3J8VGVuc29yW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG91dHB1dHMpICYmIG91dHB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAnYG91dHB1dHNgIGlzIGFuIGVtcHR5IEFycmF5LCB3aGljaCBpcyBub3QgYWxsb3dlZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRwdXRzSXNBcnJheSA9IEFycmF5LmlzQXJyYXkob3V0cHV0cyk7XG4gICAgY29uc3Qgb3V0cHV0TmFtZXMgPVxuICAgICAgICAob3V0cHV0c0lzQXJyYXkgPyBvdXRwdXRzIDogW291dHB1dHNdKTtcbiAgICBjb25zdCBvdXRwdXRTeW1ib2xpY1RlbnNvcnMgPSB0aGlzLnJldHJpZXZlU3ltYm9saWNUZW5zb3JzKG91dHB1dE5hbWVzKTtcblxuICAgIC8vIEZvcm1hdCB0aGUgaW5wdXQgaW50byBhIEZlZWREaWN0LlxuICAgIGNvbnN0IGZlZWREaWN0ID0gbmV3IEZlZWREaWN0KCk7XG4gICAgaWYgKGlucHV0cyBpbnN0YW5jZW9mIFRlbnNvcikge1xuICAgICAgaW5wdXRzID0gW2lucHV0c107XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0cykpIHtcbiAgICAgIGlmIChpbnB1dHMubGVuZ3RoICE9PSB0aGlzLmlucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgVGhlIG51bWJlciBvZiBpbnB1dHMgcHJvdmlkZWQgKCR7aW5wdXRzLmxlbmd0aH0pIGAgK1xuICAgICAgICAgICAgYGRvZXMgbm90IG1hdGNoIHRoZSBudW1iZXIgb2YgaW5wdXRzIG9mIHRoaXMgbW9kZWwgYCArXG4gICAgICAgICAgICBgKCR7dGhpcy5pbnB1dHMubGVuZ3RofSkuYCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGZlZWREaWN0LmFkZCh0aGlzLmlucHV0c1tpXSwgaW5wdXRzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLmlucHV0cykge1xuICAgICAgICBjb25zdCB0ZW5zb3JWYWx1ZSA9IGlucHV0c1tpbnB1dC5uYW1lXTtcbiAgICAgICAgaWYgKHRlbnNvclZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgYE5vIHZhbHVlIGlzIHByb3ZpZGVkIGZvciB0aGUgbW9kZWwncyBpbnB1dCAke2lucHV0Lm5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZmVlZERpY3QuYWRkKGlucHV0LCB0ZW5zb3JWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUnVuIGV4ZWN1dGlvbi5cbiAgICBjb25zdCBleGVjdXRlT3V0cHV0cyA9IGV4ZWN1dGUob3V0cHV0U3ltYm9saWNUZW5zb3JzLCBmZWVkRGljdCkgYXMgVGVuc29yW107XG4gICAgcmV0dXJuIG91dHB1dHNJc0FycmF5ID8gZXhlY3V0ZU91dHB1dHMgOiBleGVjdXRlT3V0cHV0c1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgbW9kZWwncyBpbnRlcm5hbCBzeW1ib2xpYyB0ZW5zb3JzIGZyb20gc3ltYm9saWMtdGVuc29yIG5hbWVzLlxuICAgKi9cbiAgcHJpdmF0ZSByZXRyaWV2ZVN5bWJvbGljVGVuc29ycyhzeW1ib2xpY1RlbnNvck5hbWVzOiBzdHJpbmdbXSk6XG4gICAgICBTeW1ib2xpY1RlbnNvcltdIHtcbiAgICBjb25zdCBvdXRwdXRTeW1ib2xpY1RlbnNvcnM6IFN5bWJvbGljVGVuc29yW10gPVxuICAgICAgICBweUxpc3RSZXBlYXQobnVsbCwgc3ltYm9saWNUZW5zb3JOYW1lcy5sZW5ndGgpO1xuICAgIGxldCBvdXRwdXRzUmVtYWluaW5nID0gc3ltYm9saWNUZW5zb3JOYW1lcy5sZW5ndGg7XG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLmxheWVycykge1xuICAgICAgY29uc3QgbGF5ZXJPdXRwdXRzOiBTeW1ib2xpY1RlbnNvcltdID1cbiAgICAgICAgICBBcnJheS5pc0FycmF5KGxheWVyLm91dHB1dCkgPyBsYXllci5vdXRwdXQgOiBbbGF5ZXIub3V0cHV0XTtcbiAgICAgIGNvbnN0IGxheWVyT3V0cHV0TmFtZXMgPSBsYXllck91dHB1dHMubWFwKG91dHB1dCA9PiBvdXRwdXQubmFtZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbGljVGVuc29yTmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsYXllck91dHB1dE5hbWVzLmluZGV4T2Yoc3ltYm9saWNUZW5zb3JOYW1lc1tpXSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBvdXRwdXRTeW1ib2xpY1RlbnNvcnNbaV0gPSBsYXllck91dHB1dHNbaW5kZXhdO1xuICAgICAgICAgIG91dHB1dHNSZW1haW5pbmctLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3V0cHV0c1JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3V0cHV0c1JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3V0cHV0c1JlbWFpbmluZyA+IDApIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgb3V0cHV0U3ltYm9saWNUZW5zb3JzLmZvckVhY2goKHRlbnNvciwgaSkgPT4ge1xuICAgICAgICBpZiAodGVuc29yID09IG51bGwpIHtcbiAgICAgICAgICByZW1haW5pbmdOYW1lcy5wdXNoKHN5bWJvbGljVGVuc29yTmFtZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgZmluZCBTeW1ib2xpY1RlbnNvcnMgZm9yIG91dHB1dCBuYW1lKHMpOiBgICtcbiAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeShyZW1haW5pbmdOYW1lcyl9YCk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRTeW1ib2xpY1RlbnNvcnM7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byBsb29wIG92ZXIgc29tZSBkYXRhIGluIGJhdGNoZXMuXG4gICAqXG4gICAqIFBvcnRpbmcgTm90ZTogTm90IHVzaW5nIHRoZSBmdW5jdGlvbmFsIGFwcHJvYWNoIGluIHRoZSBQeXRob24gZXF1aXZhbGVudFxuICAgKiAgIGR1ZSB0byB0aGUgaW1wZXJhdGl2ZSBiYWNrZW5kLlxuICAgKiBQb3J0aW5nIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgc3RlcCBtb2RlIGN1cnJlbnRseS5cbiAgICpcbiAgICogQHBhcmFtIGluczogaW5wdXQgZGF0YVxuICAgKiBAcGFyYW0gYmF0Y2hTaXplOiBpbnRlZ2VyIGJhdGNoIHNpemUuXG4gICAqIEBwYXJhbSB2ZXJib3NlOiB2ZXJib3NpdHkgbW9kZWxcbiAgICogQHJldHVybnM6IFByZWRpY3Rpb25zIGFzIGB0Zi5UZW5zb3JgIChpZiBhIHNpbmdsZSBvdXRwdXQpIG9yIGFuIGBBcnJheWAgb2ZcbiAgICogICBgdGYuVGVuc29yYCAoaWYgbXVsdGlwZSBvdXRwdXRzKS5cbiAgICovXG4gIHByaXZhdGUgcHJlZGljdExvb3AoaW5zOiBUZW5zb3J8VGVuc29yW10sIGJhdGNoU2l6ZSA9IDMyLCB2ZXJib3NlID0gZmFsc2UpOlxuICAgICAgVGVuc29yfFRlbnNvcltdIHtcbiAgICByZXR1cm4gdGZjLnRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgbnVtU2FtcGxlcyA9IHRoaXMuY2hlY2tOdW1TYW1wbGVzKGlucyk7XG4gICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICAgICdWZXJib3NlIHByZWRpY3RMb29wKCkgaXMgbm90IGltcGxlbWVudGVkIHlldC4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2FtcGxlLWJhc2VkIHByZWRpY3Rpb25zLlxuICAgICAgLy8gUG9ydGluZyBOb3RlOiBUZW5zb3IgY3VycmVudGx5IGRvZXMgbm90IHN1cHBvcnQgc2xpY2VkIGFzc2lnbm1lbnRzIGFzXG4gICAgICAvLyAgIGluIG51bXB5LCBlLmcuLCB4WzE6M10gPSB5LiBUaGVyZWZvcmUgd2UgdXNlIGNvbmNhdGVuYXRpb24gd2hpbGVcbiAgICAgIC8vICAgaXRlcmF0aW5nIG92ZXIgdGhlIGJhdGNoZXMuXG5cbiAgICAgIGNvbnN0IGJhdGNoZXMgPSBtYWtlQmF0Y2hlcyhudW1TYW1wbGVzLCBiYXRjaFNpemUpO1xuICAgICAgY29uc3Qgb3V0c0JhdGNoZXM6IFRlbnNvcltdW10gPSB0aGlzLm91dHB1dHMubWFwKG91dHB1dCA9PiBbXSk7XG5cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IENhbiB0aGUgc2NvcGUoKSBiZSBwdXNoZWQgZG93biBpbnNpZGUgdGhlIGZvciBsb29wP1xuICAgICAgZm9yIChsZXQgYmF0Y2hJbmRleCA9IDA7IGJhdGNoSW5kZXggPCBiYXRjaGVzLmxlbmd0aDsgKytiYXRjaEluZGV4KSB7XG4gICAgICAgIGNvbnN0IGJhdGNoT3V0cyA9IHRmYy50aWR5KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBiYXRjaFN0YXJ0ID0gYmF0Y2hlc1tiYXRjaEluZGV4XVswXTtcbiAgICAgICAgICBjb25zdCBiYXRjaEVuZCA9IGJhdGNoZXNbYmF0Y2hJbmRleF1bMV07XG4gICAgICAgICAgLy8gVE9ETyhjYWlzKTogVGFrZSBjYXJlIG9mIHRoZSBjYXNlIG9mIHRoZSBsYXN0IGVsZW1lbnQgaXMgYSBmbGFnIGZvclxuICAgICAgICAgIC8vICAgdHJhaW5pbmcvdGVzdC5cbiAgICAgICAgICBjb25zdCBpbnNCYXRjaCA9IHNsaWNlQXJyYXlzKGlucywgYmF0Y2hTdGFydCwgYmF0Y2hFbmQpO1xuXG4gICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBmZWVkcyBmb3IgZXhlY3V0ZSgpO1xuICAgICAgICAgIGNvbnN0IGZlZWRzID0gW107XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5zQmF0Y2gpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc0JhdGNoLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgIGZlZWRzLnB1c2goe2tleTogdGhpcy5pbnB1dHNbaV0sIHZhbHVlOiBpbnNCYXRjaFtpXX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWVkcy5wdXNoKHtrZXk6IHRoaXMuaW5wdXRzWzBdLCB2YWx1ZTogaW5zQmF0Y2h9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZmVlZERpY3QgPSBuZXcgRmVlZERpY3QoZmVlZHMpO1xuICAgICAgICAgIHJldHVybiBleGVjdXRlKHRoaXMub3V0cHV0cywgZmVlZERpY3QpIGFzIFRlbnNvcltdO1xuICAgICAgICB9KTtcbiAgICAgICAgYmF0Y2hPdXRzLmZvckVhY2goKGJhdGNoT3V0LCBpKSA9PiBvdXRzQmF0Y2hlc1tpXS5wdXNoKGJhdGNoT3V0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2luZ2xldG9uT3JBcnJheShcbiAgICAgICAgICBvdXRzQmF0Y2hlcy5tYXAoYmF0Y2hlcyA9PiB0ZmMuY29uY2F0KGJhdGNoZXMsIDApKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIG91dHB1dCBwcmVkaWN0aW9ucyBmb3IgdGhlIGlucHV0IHNhbXBsZXMuXG4gICAqXG4gICAqIENvbXB1dGF0aW9uIGlzIGRvbmUgaW4gYmF0Y2hlcy5cbiAgICpcbiAgICogTm90ZTogdGhlIFwic3RlcFwiIG1vZGUgb2YgcHJlZGljdCgpIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLlxuICAgKiAgIFRoaXMgaXMgYmVjYXVzZSB0aGUgVGVuc29yRmxvdy5qcyBjb3JlIGJhY2tlbmQgaXMgaW1wZXJhdGl2ZSBvbmx5LlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoe1xuICAgKiAgIGxheWVyczogW3RmLmxheWVycy5kZW5zZSh7dW5pdHM6IDEsIGlucHV0U2hhcGU6IFsxMF19KV1cbiAgICogfSk7XG4gICAqIG1vZGVsLnByZWRpY3QodGYub25lcyhbOCwgMTBdKSwge2JhdGNoU2l6ZTogNH0pLnByaW50KCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0geCBUaGUgaW5wdXQgZGF0YSwgYXMgYSBUZW5zb3IsIG9yIGFuIGBBcnJheWAgb2YgYHRmLlRlbnNvcmBzIGlmXG4gICAqICAgdGhlIG1vZGVsIGhhcyBtdWx0aXBsZSBpbnB1dHMuXG4gICAqIEBwYXJhbSBhcmdzIEEgYE1vZGVsUHJlZGljdEFyZ3NgIG9iamVjdCBjb250YWluaW5nIG9wdGlvbmFsIGZpZWxkcy5cbiAgICpcbiAgICogQHJldHVybiBQcmVkaWN0aW9uIHJlc3VsdHMgYXMgYSBgdGYuVGVuc29yYChzKS5cbiAgICpcbiAgICogQGV4Y2VwdGlvbiBWYWx1ZUVycm9yIEluIGNhc2Ugb2YgbWlzbWF0Y2ggYmV0d2VlbiB0aGUgcHJvdmlkZWQgaW5wdXQgZGF0YVxuICAgKiAgIGFuZCB0aGUgbW9kZWwncyBleHBlY3RhdGlvbnMsIG9yIGluIGNhc2UgYSBzdGF0ZWZ1bCBtb2RlbCByZWNlaXZlcyBhXG4gICAqICAgbnVtYmVyIG9mIHNhbXBsZXMgdGhhdCBpcyBub3QgYSBtdWx0aXBsZSBvZiB0aGUgYmF0Y2ggc2l6ZS5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIHByZWRpY3QoeDogVGVuc29yfFRlbnNvcltdLCBhcmdzOiBNb2RlbFByZWRpY3RBcmdzID0ge30pOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIGNvbnN0IHhzUmFuazJPckhpZ2hlciA9IGVuc3VyZVRlbnNvcnNSYW5rMk9ySGlnaGVyKHgpO1xuICAgIGNoZWNrSW5wdXREYXRhKFxuICAgICAgICB4c1JhbmsyT3JIaWdoZXIsIHRoaXMuaW5wdXROYW1lcywgdGhpcy5mZWVkSW5wdXRTaGFwZXMsIGZhbHNlKTtcbiAgICB0cnkge1xuICAgICAgLy8gVE9ETyhjYWlzKTogVGFrZSBjYXJlIG9mIHN0YXRlZnVsIG1vZGVscy5cbiAgICAgIC8vICAgaWYgKHRoaXMuc3RhdGVmdWwpIC4uLlxuICAgICAgLy8gVE9ETyhjYWlzKTogVGFrZSBjYXJlIG9mIHRoZSBsZWFybmluZ19waGFzZSBib29sZWFuIGZsYWcuXG4gICAgICAvLyAgIGlmICh0aGlzLnVzZUxlYXJuaW5nUGhhc2UpIC4uLlxuICAgICAgY29uc3QgYmF0Y2hTaXplID0gYXJncy5iYXRjaFNpemUgPT0gbnVsbCA/IDMyIDogYXJncy5iYXRjaFNpemU7XG4gICAgICBjaGVja0JhdGNoU2l6ZShiYXRjaFNpemUpO1xuICAgICAgcmV0dXJuIHRoaXMucHJlZGljdExvb3AoeHNSYW5rMk9ySGlnaGVyLCBiYXRjaFNpemUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBkaXNwb3NlTmV3VGVuc29ycyh4c1JhbmsyT3JIaWdoZXIsIHgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHByZWRpY3Rpb25zIGZvciBhIHNpbmdsZSBiYXRjaCBvZiBzYW1wbGVzLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoe1xuICAgKiAgIGxheWVyczogW3RmLmxheWVycy5kZW5zZSh7dW5pdHM6IDEsIGlucHV0U2hhcGU6IFsxMF19KV1cbiAgICogfSk7XG4gICAqIG1vZGVsLnByZWRpY3RPbkJhdGNoKHRmLm9uZXMoWzgsIDEwXSkpLnByaW50KCk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0geDogSW5wdXQgc2FtcGxlcywgYXMgYSBUZW5zb3IgKGZvciBtb2RlbHMgd2l0aCBleGFjdGx5IG9uZVxuICAgKiAgIGlucHV0KSBvciBhbiBhcnJheSBvZiBUZW5zb3JzIChmb3IgbW9kZWxzIHdpdGggbW9yZSB0aGFuIG9uZSBpbnB1dCkuXG4gICAqIEByZXR1cm4gVGVuc29yKHMpIG9mIHByZWRpY3Rpb25zXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBwcmVkaWN0T25CYXRjaCh4OiBUZW5zb3J8VGVuc29yW10pOiBUZW5zb3J8VGVuc29yW10ge1xuICAgIGNoZWNrSW5wdXREYXRhKHgsIHRoaXMuaW5wdXROYW1lcywgdGhpcy5mZWVkSW5wdXRTaGFwZXMsIHRydWUpO1xuICAgIC8vIFRPRE8oY2Fpcyk6IFRha2UgY2FyZSBvZiB0aGUgbGVhcm5pbmdfcGhhc2UgYm9vbGVhbiBmbGFnLlxuICAgIC8vICAgaWYgKHRoaXMudXNlTGVhcm5pbmdQaGFzZSkgLi4uXG4gICAgY29uc3QgYmF0Y2hTaXplID0gKEFycmF5LmlzQXJyYXkoeCkgPyB4WzBdIDogeCkuc2hhcGVbMF07XG4gICAgcmV0dXJuIHRoaXMucHJlZGljdExvb3AoeCwgYmF0Y2hTaXplKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGFuZGFyZGl6ZVVzZXJEYXRhWFkoXG4gICAgICB4OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgICB5OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sIGNoZWNrQmF0Y2hBeGlzID0gdHJ1ZSxcbiAgICAgIGJhdGNoU2l6ZT86IG51bWJlcik6IFtUZW5zb3JbXSwgVGVuc29yW11dIHtcbiAgICAvLyBUT0RPKGNhaXMpOiBBZGQgc2FtcGxlV2VpZ2h0LCBjbGFzc1dlaWdodFxuICAgIGlmICh0aGlzLm9wdGltaXplcl8gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgICAnWW91IG11c3QgY29tcGlsZSBhIG1vZGVsIGJlZm9yZSB0cmFpbmluZy90ZXN0aW5nLiBVc2UgJyArXG4gICAgICAgICAgJ0xheWVyc01vZGVsLmNvbXBpbGUobW9kZWxDb21waWxlQXJncykuJyk7XG4gICAgfVxuICAgIGNvbnN0IG91dHB1dFNoYXBlczogU2hhcGVbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mZWVkT3V0cHV0U2hhcGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBvdXRwdXRTaGFwZSA9IHRoaXMuZmVlZE91dHB1dFNoYXBlc1tpXTtcbiAgICAgIGNvbnN0IGxvc3NGbiA9IHRoaXMuZmVlZExvc3NGbnNbaV07XG4gICAgICBpZiAobG9zc0ZuID09PSBsb3NzZXMuc3BhcnNlQ2F0ZWdvcmljYWxDcm9zc2VudHJvcHkpIHtcbiAgICAgICAgb3V0cHV0U2hhcGVzLnB1c2goXG4gICAgICAgICAgICBvdXRwdXRTaGFwZS5zbGljZSgwLCBvdXRwdXRTaGFwZS5sZW5ndGggLSAxKS5jb25jYXQoWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb3J0aW5nIE5vdGU6IEJlY2F1c2Ugb2Ygc3Ryb25nIHR5cGluZyBgbG9zc0ZuYCBtdXN0IGJlIGEgZnVuY3Rpb24uXG4gICAgICAgIG91dHB1dFNoYXBlcy5wdXNoKG91dHB1dFNoYXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgeCA9IHN0YW5kYXJkaXplSW5wdXREYXRhKFxuICAgICAgICB4LCB0aGlzLmZlZWRJbnB1dE5hbWVzLCB0aGlzLmZlZWRJbnB1dFNoYXBlcywgZmFsc2UsICdpbnB1dCcpO1xuICAgIHkgPSBzdGFuZGFyZGl6ZUlucHV0RGF0YShcbiAgICAgICAgeSwgdGhpcy5mZWVkT3V0cHV0TmFtZXMsIG91dHB1dFNoYXBlcywgZmFsc2UsICd0YXJnZXQnKTtcbiAgICAvLyBUT0RPKGNhaXMpOiBTdGFuZGFyZGl6ZSBzYW1wbGVXZWlnaHRzICYgY2xhc3NXZWlnaHRzLlxuICAgIGNoZWNrQXJyYXlMZW5ndGhzKHgsIHksIG51bGwpO1xuICAgIC8vIFRPRE8oY2Fpcyk6IENoZWNrIHNhbXBsZVdlaWdodHMgYXMgd2VsbC5cbiAgICBjaGVja0xvc3NBbmRUYXJnZXRDb21wYXRpYmlsaXR5KHksIHRoaXMuZmVlZExvc3NGbnMsIHRoaXMuZmVlZE91dHB1dFNoYXBlcyk7XG4gICAgaWYgKHRoaXMuc3RhdGVmdWwgJiYgYmF0Y2hTaXplICE9IG51bGwgJiYgYmF0Y2hTaXplID4gMCkge1xuICAgICAgaWYgKHhbMF0uc2hhcGVbMF0gJSBiYXRjaFNpemUgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgSW4gYSBzdGF0ZWZ1bCBuZXR3b3JrLCB5b3Ugc2hvdWxkIG9ubHkgcGFzcyBpbnB1dHMgd2l0aCBhIGAgK1xuICAgICAgICAgICAgYG51bWJlciBvZiBzYW1wbGVzIHRoYXQgaXMgZGl2aXNpYmxlIGJ5IHRoZSBiYXRjaCBzaXplIGAgK1xuICAgICAgICAgICAgYCR7YmF0Y2hTaXplfS4gRm91bmQ6ICR7eFswXS5zaGFwZVswXX0gc2FtcGxlKHMpLmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIHN0YW5kYXJkaXplVXNlckRhdGEoXG4gICAgICB4OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgICB5OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgICBzYW1wbGVXZWlnaHQ/OiBUZW5zb3J8VGVuc29yW118e1tvdXRwdXROYW1lOiBzdHJpbmddOiBUZW5zb3J9LFxuICAgICAgY2xhc3NXZWlnaHQ/OiBDbGFzc1dlaWdodHxDbGFzc1dlaWdodFtdfENsYXNzV2VpZ2h0TWFwLFxuICAgICAgY2hlY2tCYXRjaEF4aXMgPSB0cnVlLFxuICAgICAgYmF0Y2hTaXplPzogbnVtYmVyKTogUHJvbWlzZTxbVGVuc29yW10sIFRlbnNvcltdLCBUZW5zb3JbXV0+IHtcbiAgICBjb25zdCBbc3RhbmRhcmRYcywgc3RhbmRhcmRZc10gPVxuICAgICAgICB0aGlzLnN0YW5kYXJkaXplVXNlckRhdGFYWSh4LCB5LCBjaGVja0JhdGNoQXhpcywgYmF0Y2hTaXplKTtcbiAgICAvLyBUT0RPKGNhaXMpOiBIYW5kbGUgc2FtcGxlV2VpZ2h0cy5cbiAgICBpZiAoc2FtcGxlV2VpZ2h0ICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2FtcGxlIHdlaWdodCBpcyBub3Qgc3VwcG9ydGVkIHlldC4nKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhbmRhcmRTYW1wbGVXZWlnaHRzOiBUZW5zb3JbXSA9IG51bGw7XG4gICAgaWYgKGNsYXNzV2VpZ2h0ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNsYXNzV2VpZ2h0cyA9XG4gICAgICAgICAgc3RhbmRhcmRpemVDbGFzc1dlaWdodHMoY2xhc3NXZWlnaHQsIHRoaXMub3V0cHV0TmFtZXMpO1xuICAgICAgc3RhbmRhcmRTYW1wbGVXZWlnaHRzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzV2VpZ2h0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdGFuZGFyZFNhbXBsZVdlaWdodHMucHVzaChcbiAgICAgICAgICAgIGF3YWl0IHN0YW5kYXJkaXplV2VpZ2h0cyhzdGFuZGFyZFlzW2ldLCBudWxsLCBjbGFzc1dlaWdodHNbaV0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPKGNhaXMpOiBEZWFsIHdpdGggdGhlIGNhc2Ugb2YgbW9kZWwuc3RhdGVmdWwgPT0gdHJ1ZS5cbiAgICByZXR1cm4gW3N0YW5kYXJkWHMsIHN0YW5kYXJkWXMsIHN0YW5kYXJkU2FtcGxlV2VpZ2h0c107XG4gIH1cblxuICAvKipcbiAgICogTG9vcCBvdmVyIHNvbWUgdGVzdCBkYXRhIGluIGJhdGNoZXMuXG4gICAqIEBwYXJhbSBmIEEgRnVuY3Rpb24gcmV0dXJuaW5nIGEgbGlzdCBvZiB0ZW5zb3JzLlxuICAgKiBAcGFyYW0gaW5zIEFycmF5IG9mIHRlbnNvcnMgdG8gYmUgZmVkIHRvIGBmYC5cbiAgICogQHBhcmFtIGJhdGNoU2l6ZSBJbnRlZ2VyIGJhdGNoIHNpemUgb3IgYG51bGxgIC8gYHVuZGVmaW5lZGAuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHZlcmJvc2l0eSBtb2RlLlxuICAgKiBAcGFyYW0gc3RlcHMgVG90YWwgbnVtYmVyIG9mIHN0ZXBzIChiYXRjaGVzIG9mIHNhbXBsZXMpIGJlZm9yZVxuICAgKiBkZWNsYXJpbmcgdGVzdCBmaW5pc2hlZC4gSWdub3JlZCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGBudWxsYCAvXG4gICAqIGB1bmRlZmluZWRgLlxuICAgKiBAcmV0dXJucyBBcnJheSBvZiBTY2FsYXJzLlxuICAgKi9cbiAgcHJpdmF0ZSB0ZXN0TG9vcChcbiAgICAgIGY6IChkYXRhOiBUZW5zb3JbXSkgPT4gU2NhbGFyW10sIGluczogVGVuc29yW10sIGJhdGNoU2l6ZT86IG51bWJlcixcbiAgICAgIHZlcmJvc2UgPSAwLCBzdGVwcz86IG51bWJlcik6IFNjYWxhcltdIHtcbiAgICByZXR1cm4gdGZjLnRpZHkoKCkgPT4ge1xuICAgICAgY29uc3QgbnVtU2FtcGxlcyA9IHRoaXMuY2hlY2tOdW1TYW1wbGVzKGlucywgYmF0Y2hTaXplLCBzdGVwcywgJ3N0ZXBzJyk7XG4gICAgICBjb25zdCBvdXRzOiBTY2FsYXJbXSA9IFtdO1xuICAgICAgaWYgKHZlcmJvc2UgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCdWZXJib3NlIG1vZGUgaXMgbm90IGltcGxlbWVudGVkIHlldC4nKTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IFVzZSBgaW5kaWNlc0ZvckNvbnZlcnNpb25Ub0RlbnNlJyB0byBwcmV2ZW50IHNsb3cgZG93bi5cbiAgICAgIGlmIChzdGVwcyAhPSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKFxuICAgICAgICAgICAgJ3N0ZXBzIG1vZGUgaW4gdGVzdExvb3AoKSBpcyBub3QgaW1wbGVtZW50ZWQgeWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBiYXRjaGVzID0gbWFrZUJhdGNoZXMobnVtU2FtcGxlcywgYmF0Y2hTaXplKTtcbiAgICAgICAgY29uc3QgaW5kZXhBcnJheSA9IHRlbnNvcjFkKHJhbmdlKDAsIG51bVNhbXBsZXMpKTtcbiAgICAgICAgZm9yIChsZXQgYmF0Y2hJbmRleCA9IDA7IGJhdGNoSW5kZXggPCBiYXRjaGVzLmxlbmd0aDsgKytiYXRjaEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgYmF0Y2hTdGFydCA9IGJhdGNoZXNbYmF0Y2hJbmRleF1bMF07XG4gICAgICAgICAgY29uc3QgYmF0Y2hFbmQgPSBiYXRjaGVzW2JhdGNoSW5kZXhdWzFdO1xuICAgICAgICAgIGNvbnN0IGJhdGNoSWRzID1cbiAgICAgICAgICAgICAgSy5zbGljZUFsb25nRmlyc3RBeGlzKFxuICAgICAgICAgICAgICAgICAgaW5kZXhBcnJheSwgYmF0Y2hTdGFydCwgYmF0Y2hFbmQgLSBiYXRjaFN0YXJ0KSBhcyBUZW5zb3IxRDtcbiAgICAgICAgICAvLyBUT0RPKGNhaXMpOiBJbiBpbnMsIHRyYWluIGZsYWcgY2FuIGJlIGEgbnVtYmVyLCBpbnN0ZWFkIG9mIGFuXG4gICAgICAgICAgLy8gICBUZW5zb3I/IERvIHdlIG5lZWQgdG8gaGFuZGxlIHRoaXMgaW4gdGZqcy1sYXllcnM/XG4gICAgICAgICAgY29uc3QgaW5zQmF0Y2ggPSBzbGljZUFycmF5c0J5SW5kaWNlcyhpbnMsIGJhdGNoSWRzKSBhcyBTY2FsYXJbXTtcbiAgICAgICAgICBjb25zdCBiYXRjaE91dHMgPSBmKGluc0JhdGNoKTtcbiAgICAgICAgICBpZiAoYmF0Y2hJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXRjaE91dHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgb3V0cy5wdXNoKHNjYWxhcigwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmF0Y2hPdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBiYXRjaE91dCA9IGJhdGNoT3V0c1tpXTtcbiAgICAgICAgICAgIG91dHNbaV0gPVxuICAgICAgICAgICAgICAgIHRmYy5hZGQob3V0c1tpXSwgdGZjLm11bChiYXRjaEVuZCAtIGJhdGNoU3RhcnQsIGJhdGNoT3V0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIG91dHNbaV0gPSB0ZmMuZGl2KG91dHNbaV0sIG51bVNhbXBsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cztcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWR1cGVkTWV0cmljc05hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBvdXRMYWJlbHMgPSB0aGlzLm1ldHJpY3NOYW1lcztcbiAgICAvLyBSZW5hbWUgZHVwbGljYXRlZCBtZXRyaWNzIG5hbWVzIChjYW4gaGFwcGVuIHdpdGggYW4gb3V0cHV0IGxheWVyXG4gICAgLy8gc2hhcmVkIGFtb25nIG11bHRpcGxlIGRhdGFmbG93cykuXG4gICAgY29uc3QgZGVkdXBlZE91dExhYmVscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TGFiZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IG91dExhYmVsc1tpXTtcbiAgICAgIGxldCBuZXdMYWJlbCA9IGxhYmVsO1xuICAgICAgaWYgKGNvdW50KG91dExhYmVscywgbGFiZWwpID4gMSkge1xuICAgICAgICBjb25zdCBkdXBJbmRleCA9IGNvdW50KG91dExhYmVscy5zbGljZSgwLCBpKSwgbGFiZWwpO1xuICAgICAgICBuZXdMYWJlbCArPSBgXyR7ZHVwSW5kZXh9YDtcbiAgICAgIH1cbiAgICAgIGRlZHVwZWRPdXRMYWJlbHMucHVzaChuZXdMYWJlbCk7XG4gICAgfVxuICAgIHJldHVybiBkZWR1cGVkT3V0TGFiZWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIHRoZSBmb2xsb3dpbmcgYWN0aW9uczpcbiAgICpcbiAgICogMS4gY29tcHV0ZXMgdGhlIGxvc3Nlc1xuICAgKiAyLiBzdW1zIHRoZW0gdG8gZ2V0IHRoZSB0b3RhbCBsb3NzXG4gICAqIDMuIGNhbGwgdGhlIG9wdGltaXplciBjb21wdXRlcyB0aGUgZ3JhZGllbnRzIG9mIHRoZSBMYXllcnNNb2RlbCdzXG4gICAqICAgIHRyYWluYWJsZSB3ZWlnaHRzIHcuci50LiB0aGUgdG90YWwgbG9zcyBhbmQgdXBkYXRlIHRoZSB2YXJpYWJsZXNcbiAgICogNC4gY2FsY3VsYXRlcyB0aGUgbWV0cmljc1xuICAgKiA1LiByZXR1cm5zIHRoZSB2YWx1ZXMgb2YgdGhlIGxvc3NlcyBhbmQgbWV0cmljcy5cbiAgICovXG4gIHByb3RlY3RlZCBtYWtlVHJhaW5GdW5jdGlvbigpOiAoZGF0YTogVGVuc29yW10pID0+IFNjYWxhcltdIHtcbiAgICByZXR1cm4gKGRhdGE6IFRlbnNvcltdKSA9PiB7XG4gICAgICBjb25zdCBsb3NzVmFsdWVzOiBTY2FsYXJbXSA9IFtdO1xuXG4gICAgICBjb25zdCBpbnB1dHMgPSBkYXRhLnNsaWNlKDAsIHRoaXMuaW5wdXRzLmxlbmd0aCk7XG4gICAgICBjb25zdCB0YXJnZXRzID0gZGF0YS5zbGljZShcbiAgICAgICAgICB0aGlzLmlucHV0cy5sZW5ndGgsIHRoaXMuaW5wdXRzLmxlbmd0aCArIHRoaXMub3V0cHV0cy5sZW5ndGgpO1xuICAgICAgY29uc3Qgc2FtcGxlV2VpZ2h0cyA9IGRhdGEuc2xpY2UoXG4gICAgICAgICAgdGhpcy5pbnB1dHMubGVuZ3RoICsgdGhpcy5vdXRwdXRzLmxlbmd0aCxcbiAgICAgICAgICB0aGlzLmlucHV0cy5sZW5ndGggKyB0aGlzLm91dHB1dHMubGVuZ3RoICogMik7XG5cbiAgICAgIGNvbnN0IG1ldHJpY3NWYWx1ZXM6IFNjYWxhcltdID0gW107XG5cbiAgICAgIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgdGhlIHRvdGFsIGxvc3MgYmFzZWQgb24gdGhlXG4gICAgICAvLyBpbnB1dHMuIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBmb3Igb2J0YWluaW5nIGdyYWRpZW50cyB0aHJvdWdoXG4gICAgICAvLyBiYWNrcHJvcC5cbiAgICAgIGNvbnN0IHRvdGFsTG9zc0Z1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmZWVkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5wdXRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgZmVlZHMucHVzaCh7a2V5OiB0aGlzLmlucHV0c1tpXSwgdmFsdWU6IGlucHV0c1tpXX0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZlZWREaWN0ID0gbmV3IEZlZWREaWN0KGZlZWRzKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9XG4gICAgICAgICAgICBleGVjdXRlKHRoaXMub3V0cHV0cywgZmVlZERpY3QsIHsndHJhaW5pbmcnOiB0cnVlfSkgYXMgVGVuc29yW107XG4gICAgICAgIC8vIFRPRE8oY2Fpcyk6IFRha2UgY2FyZSBvZiB0aGUgY2FzZSBvZiBtdWx0aXBsZSBvdXRwdXRzIGZyb20gYVxuICAgICAgICAvLyAgIHNpbmdsZSBsYXllcj9cblxuICAgICAgICBsZXQgdG90YWxMb3NzOiBUZW5zb3I7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb3NzRnVuY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY29uc3QgbG9zc0Z1bmN0aW9uID0gdGhpcy5sb3NzRnVuY3Rpb25zW2ldO1xuICAgICAgICAgIGxldCBsb3NzID0gbG9zc0Z1bmN0aW9uKHRhcmdldHNbaV0sIG91dHB1dHNbaV0pO1xuICAgICAgICAgIGlmIChzYW1wbGVXZWlnaHRzW2ldICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxvc3MgPSBjb21wdXRlV2VpZ2h0ZWRMb3NzKGxvc3MsIHNhbXBsZVdlaWdodHNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRPRE8oY2Fpcyk6IHB1c2ggU2NhbGFyIGluc3RlYWQuXG4gICAgICAgICAgY29uc3QgbWVhbkxvc3M6IFNjYWxhciA9IHRmYy5tZWFuKGxvc3MpO1xuICAgICAgICAgIC8vIFRPRE8oY2Fpcyk6IFVzZSBhIHNjb3BlKCkgaW5zdGVhZCwgdG8gYXZvaWQgb3duZXJzaGlwLlxuICAgICAgICAgIGxvc3NWYWx1ZXMucHVzaChtZWFuTG9zcyk7XG4gICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIHRvdGFsTG9zcyA9IGxvc3M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvdGFsTG9zcyA9IHRmYy5hZGQodG90YWxMb3NzLCBsb3NzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wdXRlIHRoZSBtZXRyaWNzLlxuICAgICAgICAvLyBUT0RPKGNhaXMpOiBUaGVzZSBzaG91bGQgcHJvYmFibHkgYmUgY2FsY3VsYXRlZCBvdXRzaWRlXG4gICAgICAgIC8vICAgdG90YWxMb3NzRnVuY3Rpb24gdG8gYmVuZWZpdCBzcGVlZD9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1ldHJpY3NUZW5zb3JzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgbGV0IHdlaWdodGVkTWV0cmljOiBTY2FsYXI7XG5cbiAgICAgICAgICBpZiAodGhpcy5vdXRwdXRzLmxlbmd0aCA+IDEgJiYgaSA8IHRoaXMub3V0cHV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdlaWdodGVkTWV0cmljID0gbG9zc1ZhbHVlc1tpXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWV0cmljID0gdGhpcy5tZXRyaWNzVGVuc29yc1tpXVswXTtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dEluZGV4ID0gdGhpcy5tZXRyaWNzVGVuc29yc1tpXVsxXTtcbiAgICAgICAgICAgIHdlaWdodGVkTWV0cmljID1cbiAgICAgICAgICAgICAgICB0ZmMubWVhbihtZXRyaWModGFyZ2V0c1tvdXRwdXRJbmRleF0sIG91dHB1dHNbb3V0cHV0SW5kZXhdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGZjLmtlZXAod2VpZ2h0ZWRNZXRyaWMpO1xuICAgICAgICAgIC8vIFRPRE8oY2Fpcyk6IFVzZSBhIHNjb3BlKCkgaW5zdGVhZCwgdG8gYXZvaWQgb3duZXJzaGlwLlxuICAgICAgICAgIG1ldHJpY3NWYWx1ZXMucHVzaCh3ZWlnaHRlZE1ldHJpYyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbExvc3MgPSB0ZmMubWVhbih0b3RhbExvc3MpO1xuXG4gICAgICAgIC8vIEFkZCByZWd1bGFyaXplciBwZW5hbHRpZXMuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTG9zc2VzKCkuZm9yRWFjaChyZWd1bGFyaXplckxvc3MgPT4ge1xuICAgICAgICAgIHRvdGFsTG9zcyA9IHRmYy5hZGQodG90YWxMb3NzLCByZWd1bGFyaXplckxvc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdG90YWxMb3NzIGFzIFNjYWxhcjtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuY29sbGVjdGVkVHJhaW5hYmxlV2VpZ2h0cy5tYXAoXG4gICAgICAgICAgcGFyYW0gPT4gcGFyYW0ucmVhZCgpIGFzIHRmYy5WYXJpYWJsZSk7XG4gICAgICBjb25zdCByZXR1cm5Db3N0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRvdGFsTG9zc1ZhbHVlID1cbiAgICAgICAgICB0aGlzLm9wdGltaXplcl8ubWluaW1pemUodG90YWxMb3NzRnVuY3Rpb24sIHJldHVybkNvc3QsIHZhcmlhYmxlcyk7XG5cbiAgICAgIHJldHVybiBbdG90YWxMb3NzVmFsdWVdLmNvbmNhdChtZXRyaWNzVmFsdWVzKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGludm9rZWQgd2l0aCBhbiBhcnJheSBvZiBgdGYuVGVuc29yYHMgYXMgYVxuICAgKiBiYXRjaCBvZiBpbnB1dHMsIHJldHVybnMgdGhlIHByZXNwZWNpZmllZCBsb3NzIGFuZCBtZXRyaWNzIG9mIHRoZSBtb2RlbFxuICAgKiB1bmRlciB0aGUgYmF0Y2ggb2YgaW5wdXQgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgbWFrZVRlc3RGdW5jdGlvbigpIHtcbiAgICB0aGlzLnRlc3RGdW5jdGlvbiA9IChkYXRhOiBUZW5zb3JbXSkgPT4ge1xuICAgICAgcmV0dXJuIHRmYy50aWR5KCgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsT3V0cHV0czogU2NhbGFyW10gPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsTG9zczogU2NhbGFyO1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBkYXRhLnNsaWNlKDAsIHRoaXMuaW5wdXRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHRhcmdldHMgPSBkYXRhLnNsaWNlKFxuICAgICAgICAgICAgdGhpcy5pbnB1dHMubGVuZ3RoLCB0aGlzLmlucHV0cy5sZW5ndGggKyB0aGlzLm91dHB1dHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgZmVlZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmlucHV0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGZlZWRzLnB1c2goe2tleTogdGhpcy5pbnB1dHNbaV0sIHZhbHVlOiBpbnB1dHNbaV19KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZWVkRGljdCA9IG5ldyBGZWVkRGljdChmZWVkcyk7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBleGVjdXRlKHRoaXMub3V0cHV0cywgZmVlZERpY3QpIGFzIFRlbnNvcltdO1xuICAgICAgICAvLyBDb21wdXRlIHRvdGFsIGxvc3MuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb3NzRnVuY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY29uc3QgbG9zc0Z1bmN0aW9uID0gdGhpcy5sb3NzRnVuY3Rpb25zW2ldO1xuICAgICAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCBzYW1wbGUgd2VpZ2h0aW5nIGFuZCByZXBsYWNlIHRoZSBzaW1wbGVcbiAgICAgICAgICAvLyBhdmVyYWdpbmcuXG4gICAgICAgICAgY29uc3QgbG9zczogU2NhbGFyID0gdGZjLm1lYW4obG9zc0Z1bmN0aW9uKHRhcmdldHNbaV0sIG91dHB1dHNbaV0pKTtcbiAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgdG90YWxMb3NzID0gbG9zcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG90YWxMb3NzID0gdGZjLmFkZCh0b3RhbExvc3MsIGxvc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWxPdXRwdXRzLnB1c2godG90YWxMb3NzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb21wdXRlIHRoZSBtZXRyaWNzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWV0cmljc1RlbnNvcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjb25zdCBtZXRyaWMgPSB0aGlzLm1ldHJpY3NUZW5zb3JzW2ldWzBdO1xuICAgICAgICAgIGNvbnN0IG91dHB1dEluZGV4ID0gdGhpcy5tZXRyaWNzVGVuc29yc1tpXVsxXTtcbiAgICAgICAgICAvLyBUT0RPKGNhaXMpOiBSZXBsYWNlIEsubWVhbigpIHdpdGggYSBwcm9wZXIgd2VpZ2h0aW5nIGZ1bmN0aW9uLlxuICAgICAgICAgIGNvbnN0IG1lYW5NZXRyaWMgPVxuICAgICAgICAgICAgICB0ZmMubWVhbihtZXRyaWModGFyZ2V0c1tvdXRwdXRJbmRleF0sIG91dHB1dHNbb3V0cHV0SW5kZXhdKSk7XG4gICAgICAgICAgdmFsT3V0cHV0cy5wdXNoKG1lYW5NZXRyaWMgYXMgU2NhbGFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsT3V0cHV0cztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVHJhaW5zIHRoZSBtb2RlbCBmb3IgYSBmaXhlZCBudW1iZXIgb2YgZXBvY2hzIChpdGVyYXRpb25zIG9uIGFcbiAgICogZGF0YXNldCkuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IG1vZGVsID0gdGYuc2VxdWVudGlhbCh7XG4gICAqICAgICBsYXllcnM6IFt0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBpbnB1dFNoYXBlOiBbMTBdfSldXG4gICAqIH0pO1xuICAgKiBtb2RlbC5jb21waWxlKHtvcHRpbWl6ZXI6ICdzZ2QnLCBsb3NzOiAnbWVhblNxdWFyZWRFcnJvcid9KTtcbiAgICogZm9yIChsZXQgaSA9IDE7IGkgPCA1IDsgKytpKSB7XG4gICAqICAgY29uc3QgaCA9IGF3YWl0IG1vZGVsLmZpdCh0Zi5vbmVzKFs4LCAxMF0pLCB0Zi5vbmVzKFs4LCAxXSksIHtcbiAgICogICAgICAgYmF0Y2hTaXplOiA0LFxuICAgKiAgICAgICBlcG9jaHM6IDNcbiAgICogICB9KTtcbiAgICogICBjb25zb2xlLmxvZyhcIkxvc3MgYWZ0ZXIgRXBvY2ggXCIgKyBpICsgXCIgOiBcIiArIGguaGlzdG9yeS5sb3NzWzBdKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHggYHRmLlRlbnNvcmAgb2YgdHJhaW5pbmcgZGF0YSwgb3IgYW4gYXJyYXkgb2YgYHRmLlRlbnNvcmBzIGlmIHRoZVxuICAgKiBtb2RlbCBoYXMgbXVsdGlwbGUgaW5wdXRzLiBJZiBhbGwgaW5wdXRzIGluIHRoZSBtb2RlbCBhcmUgbmFtZWQsIHlvdVxuICAgKiBjYW4gYWxzbyBwYXNzIGEgZGljdGlvbmFyeSBtYXBwaW5nIGlucHV0IG5hbWVzIHRvIGB0Zi5UZW5zb3Jgcy5cbiAgICogQHBhcmFtIHkgYHRmLlRlbnNvcmAgb2YgdGFyZ2V0IChsYWJlbCkgZGF0YSwgb3IgYW4gYXJyYXkgb2YgYHRmLlRlbnNvcmBzIGlmXG4gICAqIHRoZSBtb2RlbCBoYXMgbXVsdGlwbGUgb3V0cHV0cy4gSWYgYWxsIG91dHB1dHMgaW4gdGhlIG1vZGVsIGFyZSBuYW1lZCxcbiAgICogeW91IGNhbiBhbHNvIHBhc3MgYSBkaWN0aW9uYXJ5IG1hcHBpbmcgb3V0cHV0IG5hbWVzIHRvIGB0Zi5UZW5zb3Jgcy5cbiAgICogQHBhcmFtIGFyZ3MgQSBgTW9kZWxGaXRBcmdzYCwgY29udGFpbmluZyBvcHRpb25hbCBmaWVsZHMuXG4gICAqXG4gICAqIEByZXR1cm4gQSBgSGlzdG9yeWAgaW5zdGFuY2UuIEl0cyBgaGlzdG9yeWAgYXR0cmlidXRlIGNvbnRhaW5zIGFsbFxuICAgKiAgIGluZm9ybWF0aW9uIGNvbGxlY3RlZCBkdXJpbmcgdHJhaW5pbmcuXG4gICAqXG4gICAqIEBleGNlcHRpb24gVmFsdWVFcnJvciBJbiBjYXNlIG9mIG1pc21hdGNoIGJldHdlZW4gdGhlIHByb3ZpZGVkIGlucHV0XG4gICAqIGRhdGEgYW5kIHdoYXQgdGhlIG1vZGVsIGV4cGVjdHMuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhc3luYyBmaXQoXG4gICAgICB4OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgICB5OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgICBhcmdzOiBNb2RlbEZpdEFyZ3MgPSB7fSk6IFByb21pc2U8SGlzdG9yeT4ge1xuICAgIGlmICh0aGlzLmlzVHJhaW5pbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ2Fubm90IHN0YXJ0IHRyYWluaW5nIGJlY2F1c2UgYW5vdGhlciBmaXQoKSBjYWxsIGlzIG9uZ29pbmcuJyk7XG4gICAgfVxuICAgIHRoaXMuaXNUcmFpbmluZyA9IHRydWU7XG4gICAgbGV0IGlucHV0czogVGVuc29yW107XG4gICAgbGV0IHRhcmdldHM6IFRlbnNvcltdO1xuICAgIGxldCBvcmlnaW5hbElucHV0czogVGVuc29yW107XG4gICAgbGV0IG9yaWdpbmFsVGFyZ2V0czogVGVuc29yW107XG4gICAgbGV0IGlucHV0VmFsWDogVGVuc29yfFRlbnNvcltdO1xuICAgIGxldCBpbnB1dFZhbFk6IFRlbnNvcnxUZW5zb3JbXTtcbiAgICBsZXQgdmFsWDogVGVuc29yfFRlbnNvcltdO1xuICAgIGxldCB2YWxZOiBUZW5zb3J8VGVuc29yW107XG4gICAgbGV0IHNhbXBsZVdlaWdodHM6IFRlbnNvcltdO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXRjaFNpemUgPSBhcmdzLmJhdGNoU2l6ZSA9PSBudWxsID8gMzIgOiBhcmdzLmJhdGNoU2l6ZTtcbiAgICAgIGNoZWNrQmF0Y2hTaXplKGJhdGNoU2l6ZSk7XG5cbiAgICAgIC8vIFZhbGlkYXRlIHVzZXIgZGF0YS5cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IFN1cHBvcnQgc2FtcGxlV2VpZ2h0LlxuICAgICAgY29uc3QgY2hlY2tCYXRjaEF4aXMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHN0YW5kYXJkaXplZE91dHMgPVxuICAgICAgICAgIGF3YWl0IHRoaXMuc3RhbmRhcmRpemVVc2VyRGF0YShcbiAgICAgICAgICAgICAgeCwgeSwgYXJncy5zYW1wbGVXZWlnaHQsIGFyZ3MuY2xhc3NXZWlnaHQsIGNoZWNrQmF0Y2hBeGlzLFxuICAgICAgICAgICAgICBiYXRjaFNpemUpIGFzIFtUZW5zb3JbXSwgVGVuc29yW10sIFRlbnNvcltdXTtcbiAgICAgIGlucHV0cyA9IHN0YW5kYXJkaXplZE91dHNbMF07XG4gICAgICB0YXJnZXRzID0gc3RhbmRhcmRpemVkT3V0c1sxXTtcbiAgICAgIHNhbXBsZVdlaWdodHMgPSBzdGFuZGFyZGl6ZWRPdXRzWzJdO1xuXG4gICAgICAvLyBQcmVwYXJlIHZhbGlkYXRpb24gZGF0YS5cbiAgICAgIGxldCBkb1ZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICAgIGxldCB2YWxJbnM6IFRlbnNvcltdO1xuICAgICAgaWYgKGFyZ3MudmFsaWRhdGlvbkRhdGEgIT0gbnVsbCAmJiBhcmdzLnZhbGlkYXRpb25EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZG9WYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgaWYgKGFyZ3MudmFsaWRhdGlvbkRhdGEubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgLy8gY29uZmlnLnZhbGlkYXRpb25EYXRhIGNvbnNpc3RzIG9mIHZhbFggYW5kIHZhbFkuXG4gICAgICAgICAgaW5wdXRWYWxYID0gYXJncy52YWxpZGF0aW9uRGF0YVswXTtcbiAgICAgICAgICBpbnB1dFZhbFkgPSBhcmdzLnZhbGlkYXRpb25EYXRhWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MudmFsaWRhdGlvbkRhdGEubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoXG4gICAgICAgICAgICAgICd2YWxpZGF0aW9uRGF0YSBpbmNsdWRpbmcgc2FtcGxlIHdlaWdodHMgaXMgbm90IHN1cHBvcnRlZCB5ZXQuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICAgIGBXaGVuIHBhc3NpbmcgdmFsaWRhdGlvbiBkYXRhLCBpdCBtdXN0IGNvbnRhaW4gMiAodmFsWCwgdmFsWSkgYCArXG4gICAgICAgICAgICAgIGBvciAzICh2YWxYLCB2YWxZLCB2YWxTYW1wbGVXZWlnaHQpIGl0ZW1zOyBgICtcbiAgICAgICAgICAgICAgYCR7YXJncy52YWxpZGF0aW9uRGF0YX0gaXMgaW52YWxpZC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoZWNrQmF0Y2hBeGlzID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdmFsU3RhbmRhcmRpemVkID1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RhbmRhcmRpemVVc2VyRGF0YShcbiAgICAgICAgICAgICAgICBpbnB1dFZhbFgsIGlucHV0VmFsWSwgbnVsbCwgLyoqIFVudXNlZCBzYW1wbGUgd2VpZ2h0cy4gKi9cbiAgICAgICAgICAgICAgICBudWxsLCAgICAgICAgICAgICAgICAgICAgICAgLyoqIFVudXNlZCBjbGFzcyB3ZWlnaHRzLiAqL1xuICAgICAgICAgICAgICAgIGNoZWNrQmF0Y2hBeGlzLCBiYXRjaFNpemUpIGFzIFtUZW5zb3JbXSwgVGVuc29yW10sIFRlbnNvcltdXTtcbiAgICAgICAgdmFsWCA9IHZhbFN0YW5kYXJkaXplZFswXTtcbiAgICAgICAgdmFsWSA9IHZhbFN0YW5kYXJkaXplZFsxXTtcbiAgICAgICAgdmFsSW5zID0gdmFsWC5jb25jYXQodmFsWSk7XG4gICAgICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCB1c2VMZWFybmluZ1BoYXNlIGRhdGEgcHJvcGVybHkuXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGFyZ3MudmFsaWRhdGlvblNwbGl0ICE9IG51bGwgJiYgYXJncy52YWxpZGF0aW9uU3BsaXQgPiAwICYmXG4gICAgICAgICAgYXJncy52YWxpZGF0aW9uU3BsaXQgPCAxKSB7XG4gICAgICAgIGRvVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICAgIC8vIFBvcnRpbmcgTm90ZTogSW4gdGZqcy1sYXllcnMsIGlucHV0c1swXSBpcyBhbHdheXMgYSBUZW5zb3IuXG4gICAgICAgIGNvbnN0IHNwbGl0QXQgPVxuICAgICAgICAgICAgTWF0aC5mbG9vcihpbnB1dHNbMF0uc2hhcGVbMF0gKiAoMSAtIGFyZ3MudmFsaWRhdGlvblNwbGl0KSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQmF0Y2hTaXplID0gaW5wdXRzWzBdLnNoYXBlWzBdO1xuICAgICAgICB2YWxYID0gc2xpY2VBcnJheXMoaW5wdXRzLCBzcGxpdEF0LCBvcmlnaW5hbEJhdGNoU2l6ZSkgYXMgVGVuc29yW107XG4gICAgICAgIG9yaWdpbmFsSW5wdXRzID0gaW5wdXRzO1xuICAgICAgICBpbnB1dHMgPSBzbGljZUFycmF5cyhpbnB1dHMsIDAsIHNwbGl0QXQpIGFzIFRlbnNvcltdO1xuICAgICAgICB2YWxZID0gc2xpY2VBcnJheXModGFyZ2V0cywgc3BsaXRBdCwgb3JpZ2luYWxCYXRjaFNpemUpIGFzIFRlbnNvcltdO1xuICAgICAgICBvcmlnaW5hbFRhcmdldHMgPSB0YXJnZXRzO1xuICAgICAgICB0YXJnZXRzID0gc2xpY2VBcnJheXModGFyZ2V0cywgMCwgc3BsaXRBdCkgYXMgVGVuc29yW107XG4gICAgICAgIC8vIFRPRE8oY2Fpcyk6IE9uY2Ugc2FtcGxlV2VpZ2h0cyBiZWNvbWVzIGF2YWlsYWJsZSwgc2xpY2UgaXQgdG8gZ2V0XG4gICAgICAgIC8vICAgdmFsU2FtcGxlV2VpZ2h0cy5cbiAgICAgICAgdmFsSW5zID0gdmFsWC5jb25jYXQodmFsWSk7XG5cbiAgICAgICAgLy8gVE9ETyhjYWlzKTogQWRkIHVzZUxlYXJuaW5nUGhhc2UgZGF0YSBwcm9wZXJseS5cbiAgICAgIH0gZWxzZSBpZiAoYXJncy52YWxpZGF0aW9uU3RlcHMgIT0gbnVsbCkge1xuICAgICAgICBkb1ZhbGlkYXRpb24gPSB0cnVlO1xuICAgICAgICAvLyBUT0RPKGNhaXMpOiBBZGQgdXNlTGVhcm5pbmdQaGFzZS5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5zID0gaW5wdXRzLmNvbmNhdCh0YXJnZXRzKS5jb25jYXQoc2FtcGxlV2VpZ2h0cyk7XG5cbiAgICAgIHRoaXMuY2hlY2tUcmFpbmFibGVXZWlnaHRzQ29uc2lzdGVuY3koKTtcblxuICAgICAgLy8gVE9ETyhjYWlzKTogSGFuZGxlIHVzZV9sZWFybmluZ19waGFzZSBhbmQgbGVhcm5pbmdfcGhhc2U/XG5cbiAgICAgIC8vIFBvcnRpbmcgTm90ZTogSGVyZSB3ZSBzZWUgYSBrZXkgZGV2aWF0aW9uIG9mIHRmanMtbGF5ZXJzIGZyb21cbiAgICAgIC8vIEtlcmFzLlxuICAgICAgLy8gIER1ZSB0byB0aGUgaW1wZXJhdGl2ZSBuYXR1cmUgb2YgdGZqcy1sYXllcnMnIGJhY2tlbmQgKHRmanMtY29yZSksXG4gICAgICAvLyAgd2UgZG8gbm90IGNvbnN0cnVjdCBzeW1ib2xpYyBjb21wdXRhdGlvbiBncmFwaHMgdG8gZW1ib2R5IHRoZVxuICAgICAgLy8gIHRyYWluaW5nIHByb2Nlc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlXG4gICAgICAvLyAgdHJhaW5pbmcgYWN0aW9uLiBJbiBQeUtlcmFzLCB0aGUgZGF0YSAoaW5wdXRzIGFuZCB0YXJnZXRzKSBhcmUgZmVkXG4gICAgICAvLyAgdGhyb3VnaCBncmFwaCBwbGFjZWhvbGRlcnMuIEluIHRmanMtbGF5ZXJzLCB0aGUgZGF0YSBhcmUgZmVkIGFzXG4gICAgICAvLyAgZnVuY3Rpb24gYXJndW1lbnRzLiBTaW5jZSB0aGUgZnVuY3Rpb24gYXJlIGRlZmluZWQgYmVsb3cgaW4gdGhlXG4gICAgICAvLyAgc2NvcGUsIHdlIGRvbid0IGhhdmUgZXF1aXZhbGVudHMgb2YgUHlLZXJhcydzXG4gICAgICAvLyAgYF9tYWtlX3RyYWluX2Z1bmNpdG9uYC5cbiAgICAgIGNvbnN0IHRyYWluRnVuY3Rpb24gPSB0aGlzLm1ha2VUcmFpbkZ1bmN0aW9uKCk7XG4gICAgICBjb25zdCBvdXRMYWJlbHMgPSB0aGlzLmdldERlZHVwZWRNZXRyaWNzTmFtZXMoKTtcblxuICAgICAgbGV0IHZhbEZ1bmN0aW9uOiAoZGF0YTogVGVuc29yW10pID0+IFNjYWxhcltdO1xuICAgICAgbGV0IGNhbGxiYWNrTWV0cmljczogc3RyaW5nW107XG4gICAgICBpZiAoZG9WYWxpZGF0aW9uKSB7XG4gICAgICAgIHRoaXMubWFrZVRlc3RGdW5jdGlvbigpO1xuICAgICAgICB2YWxGdW5jdGlvbiA9IHRoaXMudGVzdEZ1bmN0aW9uO1xuICAgICAgICBjYWxsYmFja01ldHJpY3MgPVxuICAgICAgICAgICAgb3V0TGFiZWxzLnNsaWNlKCkuY29uY2F0KG91dExhYmVscy5tYXAobiA9PiAndmFsXycgKyBuKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxGdW5jdGlvbiA9IG51bGw7XG4gICAgICAgIHZhbElucyA9IFtdO1xuICAgICAgICBjYWxsYmFja01ldHJpY3MgPSBvdXRMYWJlbHMuc2xpY2UoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FsbGJhY2tzID0gc3RhbmRhcmRpemVDYWxsYmFja3MoYXJncy5jYWxsYmFja3MsIGFyZ3MueWllbGRFdmVyeSk7XG4gICAgICBjb25zdCBvdXQgPSBhd2FpdCB0aGlzLmZpdExvb3AoXG4gICAgICAgICAgdHJhaW5GdW5jdGlvbiwgaW5zLCBvdXRMYWJlbHMsIGJhdGNoU2l6ZSwgYXJncy5lcG9jaHMsXG4gICAgICAgICAgYXJncy52ZXJib3NlLCBjYWxsYmFja3MsIHZhbEZ1bmN0aW9uLCB2YWxJbnMsIGFyZ3Muc2h1ZmZsZSxcbiAgICAgICAgICBjYWxsYmFja01ldHJpY3MsIGFyZ3MuaW5pdGlhbEVwb2NoLCBudWxsLCBudWxsKTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNUcmFpbmluZyA9IGZhbHNlO1xuICAgICAgLy8gTWVtb3J5IGNsZWFuIHVwLlxuICAgICAgZGlzcG9zZU5ld1RlbnNvcnMoaW5wdXRzLCB4KTtcbiAgICAgIGRpc3Bvc2VOZXdUZW5zb3JzKHRhcmdldHMsIHkpO1xuICAgICAgZGlzcG9zZU5ld1RlbnNvcnMob3JpZ2luYWxJbnB1dHMsIHgpO1xuICAgICAgZGlzcG9zZU5ld1RlbnNvcnMob3JpZ2luYWxUYXJnZXRzLCB5KTtcbiAgICAgIGRpc3Bvc2VOZXdUZW5zb3JzKHZhbFggYXMgVGVuc29yW10sIGlucHV0VmFsWCk7XG4gICAgICBkaXNwb3NlTmV3VGVuc29ycyh2YWxZIGFzIFRlbnNvcltdLCBpbnB1dFZhbFkpO1xuICAgICAgaWYgKHNhbXBsZVdlaWdodHMgIT0gbnVsbCkge1xuICAgICAgICB0ZmMuZGlzcG9zZShzYW1wbGVXZWlnaHRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVE9ETyhjYWlzKTogQWRkIHZhbHVlIHRvIG91dExhYmVscy5cbiAgfVxuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBmaXQgZnVuY3Rpb24gZm9yIGBmKGlucylgLlxuICAgKiBAcGFyYW0gZiBBIEZ1bmN0aW9uIHJldHVybmluZyBhIGxpc3Qgb2YgdGVuc29ycy4gRm9yIHRyYWluaW5nLCB0aGlzXG4gICAqICAgZnVuY3Rpb24gaXMgZXhwZWN0ZWQgdG8gcGVyZm9ybSB0aGUgdXBkYXRlcyB0byB0aGUgdmFyaWFibGVzLlxuICAgKiBAcGFyYW0gaW5zIExpc3Qgb2YgdGVuc29ycyB0byBiZSBmZWQgdG8gYGZgLlxuICAgKiBAcGFyYW0gb3V0TGFiZWxzIExpc3Qgb2Ygc3RyaW5ncywgZGlzcGxheSBuYW1lcyBvZiB0aGUgb3V0cHV0cyBvZiBgZmAuXG4gICAqIEBwYXJhbSBiYXRjaFNpemUgSW50ZWdlciBiYXRjaCBzaXplIG9yIGA9PSBudWxsYCBpZiB1bmtub3duLiBEZWZhdWx0IDogMzIuXG4gICAqIEBwYXJhbSBlcG9jaHMgTnVtYmVyIG9mIHRpbWVzIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZGF0YS4gRGVmYXVsdCA6IDEuXG4gICAqIEBwYXJhbSB2ZXJib3NlIFZlcmJvc2l0eSBtb2RlOiAwLCAxLCBvciAyLiBEZWZhdWx0OiAxLlxuICAgKiBAcGFyYW0gY2FsbGJhY2tzIExpc3Qgb2YgY2FsbGJhY2tzIHRvIGJlIGNhbGxlZCBkdXJpbmcgdHJhaW5pbmcuXG4gICAqIEBwYXJhbSB2YWxGIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIHZhbGlkYXRpb24uXG4gICAqIEBwYXJhbSB2YWxJbnMgTGlzdCBvZiB0ZW5zb3JzIHRvIGJlIGZlZCB0byBgdmFsRmAuXG4gICAqIEBwYXJhbSBzaHVmZmxlIFdoZXRoZXIgdG8gc2h1ZmZsZSB0aGUgZGF0YSBhdCB0aGUgYmVnaW5uaW5nIG9mIGV2ZXJ5XG4gICAqIGVwb2NoLiBEZWZhdWx0IDogdHJ1ZS5cbiAgICogQHBhcmFtIGNhbGxiYWNrTWV0cmljcyBMaXN0IG9mIHN0cmluZ3MsIHRoZSBkaXNwbGF5IG5hbWVzIG9mIHRoZSBtZXRyaWNzXG4gICAqICAgcGFzc2VkIHRvIHRoZSBjYWxsYmFja3MuIFRoZXkgc2hvdWxkIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxuICAgKiAgIGRpc3BsYXkgbmFtZXMgb2YgdGhlIG91dHB1dHMgb2YgYGZgIGFuZCB0aGUgbGlzdCBvZiBkaXNwbGF5IG5hbWVzXG4gICAqICAgb2YgdGhlIG91dHB1dHMgb2YgYHZhbEZgLlxuICAgKiBAcGFyYW0gaW5pdGlhbEVwb2NoIEVwb2NoIGF0IHdoaWNoIHRvIHN0YXJ0IHRyYWluaW5nICh1c2VmdWwgZm9yXG4gICAqICAgcmVzdW1pbmcgYSBwcmV2aW91cyB0cmFpbmluZyBydW4pLiBEZWZhdWx0IDogMC5cbiAgICogQHBhcmFtIHN0ZXBzUGVyRXBvY2ggVG90YWwgbnVtYmVyIG9mIHN0ZXBzIChiYXRjaGVzIG9uIHNhbXBsZXMpIGJlZm9yZVxuICAgKiAgIGRlY2xhcmluZyBvbmUgZXBvY2ggZmluaXNoZWQgYW5kIHN0YXJ0aW5nIHRoZSBuZXh0IGVwb2NoLiBJZ25vcmVkIHdpdGhcbiAgICogICB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBgdW5kZWZpbmVkYCBvciBgbnVsbGAuXG4gICAqIEBwYXJhbSB2YWxpZGF0aW9uU3RlcHMgTnVtYmVyIG9mIHN0ZXBzIHRvIHJ1biB2YWxpZGF0aW9uIGZvciAob25seSBpZlxuICAgKiAgIGRvaW5nIHZhbGlkYXRpb24gZnJvbSBkYXRhIHRlbnNvcnMpLiBOb3QgYXBwbGljYWJsZSBmb3IgdGZqcy1sYXllcnMuXG4gICAqIEByZXR1cm5zIEEgYEhpc3RvcnlgIG9iamVjdC5cbiAgICovXG4gIGFzeW5jIGZpdExvb3AoXG4gICAgICBmOiAoZGF0YTogVGVuc29yW10pID0+IFNjYWxhcltdLCBpbnM6IFRlbnNvcltdLCBvdXRMYWJlbHM/OlxuICAgICAgc3RyaW5nW10sIGJhdGNoU2l6ZT86IG51bWJlciwgZXBvY2hzPzogbnVtYmVyLCB2ZXJib3NlPzogbnVtYmVyLFxuICAgICAgY2FsbGJhY2tzPzogQmFzZUNhbGxiYWNrW10sIHZhbEY/OiAoZGF0YTogVGVuc29yW10pID0+IFNjYWxhcltdLCB2YWxJbnM/OlxuICAgICAgVGVuc29yW10sIHNodWZmbGU/OiBib29sZWFufHN0cmluZywgY2FsbGJhY2tNZXRyaWNzPzogc3RyaW5nW10sXG4gICAgICBpbml0aWFsRXBvY2g/OiBudW1iZXIsIHN0ZXBzUGVyRXBvY2g/OiBudW1iZXIsIHZhbGlkYXRpb25TdGVwcz86IG51bWJlcik6XG4gICAgICBQcm9taXNlPEhpc3Rvcnk+IHtcbiAgICBpZiAoYmF0Y2hTaXplID09IG51bGwpIHtcbiAgICAgIGJhdGNoU2l6ZSA9IDMyO1xuICAgIH1cbiAgICBpZiAoZXBvY2hzID09IG51bGwpIHtcbiAgICAgIGVwb2NocyA9IDE7XG4gICAgfVxuICAgIGlmIChzaHVmZmxlID09IG51bGwpIHtcbiAgICAgIHNodWZmbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5pdGlhbEVwb2NoID09IG51bGwpIHtcbiAgICAgIGluaXRpYWxFcG9jaCA9IDA7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhjYWlzKTogQ2hhbmdlIGNvbnN0IHRvIGxldCBiZWxvdyB3aGVuIGltcGxlbWVudGluZyB2YWxpZGF0aW9uLlxuICAgIGxldCBkb1ZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICBpZiAodmFsRiAhPSBudWxsICYmIHZhbElucyAhPSBudWxsKSB7XG4gICAgICBkb1ZhbGlkYXRpb24gPSB0cnVlO1xuICAgICAgLy8gVE9ETyhjYWlzKTogdmVyYm9zZSBtZXNzYWdlLlxuICAgIH1cbiAgICBpZiAodmFsaWRhdGlvblN0ZXBzICE9IG51bGwpIHtcbiAgICAgIGRvVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICBpZiAoc3RlcHNQZXJFcG9jaCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBWYWx1ZUVycm9yKFxuICAgICAgICAgICAgJ0NhbiBvbmx5IHVzZSBgdmFsaWRhdGlvblN0ZXBzYCB3aGVuIGRvaW5nIHN0ZXAtd2lzZSB0cmFpbmluZywgJyArXG4gICAgICAgICAgICAnaS5lLiwgYHN0ZXBzUGVyRXBvY2hgIG11c3QgYmUgc2V0LicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG51bVRyYWluU2FtcGxlcyA9XG4gICAgICAgIHRoaXMuY2hlY2tOdW1TYW1wbGVzKGlucywgYmF0Y2hTaXplLCBzdGVwc1BlckVwb2NoLCAnc3RlcHNfcGVyX2Vwb2NoJyk7XG4gICAgbGV0IGluZGV4QXJyYXk6IG51bWJlcltdO1xuICAgIGlmIChudW1UcmFpblNhbXBsZXMgIT0gbnVsbCkge1xuICAgICAgaW5kZXhBcnJheSA9IHJhbmdlKDAsIG51bVRyYWluU2FtcGxlcyk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmJvc2UgPT0gbnVsbCkge1xuICAgICAgdmVyYm9zZSA9IDE7XG4gICAgfVxuXG4gICAgY29uc3Qge2NhbGxiYWNrTGlzdCwgaGlzdG9yeX0gPSBjb25maWd1cmVDYWxsYmFja3MoXG4gICAgICAgIGNhbGxiYWNrcywgdmVyYm9zZSwgZXBvY2hzLCBpbml0aWFsRXBvY2gsIG51bVRyYWluU2FtcGxlcyxcbiAgICAgICAgc3RlcHNQZXJFcG9jaCwgYmF0Y2hTaXplLCBkb1ZhbGlkYXRpb24sIGNhbGxiYWNrTWV0cmljcyk7XG4gICAgY2FsbGJhY2tMaXN0LnNldE1vZGVsKHRoaXMpO1xuICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgYXdhaXQgY2FsbGJhY2tMaXN0Lm9uVHJhaW5CZWdpbigpO1xuICAgIHRoaXMuc3RvcFRyYWluaW5nXyA9IGZhbHNlO1xuICAgIC8vIFRPRE8oY2Fpcyk6IFRha2UgY2FyZSBvZiBjYWxsYmFja3MudmFsaWRhdGlvbl9kYXRhIGFzIGluIFB5S2VyYXMuXG4gICAgLy8gVE9ETyhjYWlzKTogUHJlLWNvbnZlcnQgZmVlZHMgZm9yIHBlcmZvcm1hbmNlIGFzIGluIFB5S2VyYXMuXG5cbiAgICBmb3IgKGxldCBlcG9jaCA9IGluaXRpYWxFcG9jaDsgZXBvY2ggPCBlcG9jaHM7ICsrZXBvY2gpIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrTGlzdC5vbkVwb2NoQmVnaW4oZXBvY2gpO1xuICAgICAgY29uc3QgZXBvY2hMb2dzOiBVbnJlc29sdmVkTG9ncyA9IHt9O1xuICAgICAgaWYgKHN0ZXBzUGVyRXBvY2ggIT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcihcbiAgICAgICAgICAgICdzdGVwc1BlckVwb2NoIG1vZGUgaXMgbm90IGltcGxlbWVudGVkIHlldC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzaHVmZmxlID09PSAnYmF0Y2gnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ2JhdGNoIHNodWZmbGluZyBpcyBub3QgaW1wbGVtbmV0ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnIHlldCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHNodWZmbGUpIHtcbiAgICAgICAgICB1dGlsLnNodWZmbGUoaW5kZXhBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29udmVydCB0aGUgcG90ZW50aWFsbHkgc2h1ZmZsZWQgaW5kaWNlcyB0byBUZW5zb3IxRCwgdG8gYXZvaWQgdGhlXG4gICAgICAgIC8vIGNvc3Qgb2YgcmVwZWF0ZWQgY3JlYXRpb24gb2YgQXJyYXkxRHMgbGF0ZXIgb24uXG4gICAgICAgIGNvbnN0IGVwb2NoSW5kZXhBcnJheTFEID0gdGVuc29yMWQoaW5kZXhBcnJheSk7XG5cbiAgICAgICAgY29uc3QgYmF0Y2hlcyA9IG1ha2VCYXRjaGVzKG51bVRyYWluU2FtcGxlcywgYmF0Y2hTaXplKTtcbiAgICAgICAgZm9yIChsZXQgYmF0Y2hJbmRleCA9IDA7IGJhdGNoSW5kZXggPCBiYXRjaGVzLmxlbmd0aDsgKytiYXRjaEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgYmF0Y2hMb2dzOiBVbnJlc29sdmVkTG9ncyA9IHt9O1xuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrTGlzdC5vbkJhdGNoQmVnaW4oYmF0Y2hJbmRleCwgYmF0Y2hMb2dzKTtcblxuICAgICAgICAgIHRmYy50aWR5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhdGNoU3RhcnQgPSBiYXRjaGVzW2JhdGNoSW5kZXhdWzBdO1xuICAgICAgICAgICAgY29uc3QgYmF0Y2hFbmQgPSBiYXRjaGVzW2JhdGNoSW5kZXhdWzFdO1xuICAgICAgICAgICAgY29uc3QgYmF0Y2hJZHMgPSBLLnNsaWNlQWxvbmdGaXJzdEF4aXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcG9jaEluZGV4QXJyYXkxRCwgYmF0Y2hTdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoRW5kIC0gYmF0Y2hTdGFydCkgYXMgVGVuc29yMUQ7XG4gICAgICAgICAgICBiYXRjaExvZ3NbJ2JhdGNoJ10gPSBiYXRjaEluZGV4O1xuICAgICAgICAgICAgYmF0Y2hMb2dzWydzaXplJ10gPSBiYXRjaEVuZCAtIGJhdGNoU3RhcnQ7XG5cbiAgICAgICAgICAgIC8vIFRPRE8oY2Fpcyk6IEluIGlucywgdHJhaW4gZmxhZyBjYW4gYmUgYSBudW1iZXIsIGluc3RlYWQgb2YgYW5cbiAgICAgICAgICAgIC8vICAgVGVuc29yPyBEbyB3ZSBuZWVkIHRvIGhhbmRsZSB0aGlzIGluIHRmanMtbGF5ZXJzP1xuICAgICAgICAgICAgY29uc3QgaW5zQmF0Y2ggPSBzbGljZUFycmF5c0J5SW5kaWNlcyhpbnMsIGJhdGNoSWRzKSBhcyBUZW5zb3JbXTtcbiAgICAgICAgICAgIGNvbnN0IG91dHMgPSBmKGluc0JhdGNoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TGFiZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gb3V0TGFiZWxzW2ldO1xuICAgICAgICAgICAgICBjb25zdCBvdXQgPSBvdXRzW2ldO1xuICAgICAgICAgICAgICBiYXRjaExvZ3NbbGFiZWxdID0gb3V0O1xuICAgICAgICAgICAgICB0ZmMua2VlcChvdXQpO1xuICAgICAgICAgICAgICAvLyBUT0RPKGNhaXMpOiBVc2Ugc2NvcGUoKSB0byBhdm9pZCBvd25lcnNoaXAuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChiYXRjaEluZGV4ID09PSBiYXRjaGVzLmxlbmd0aCAtIDEpIHsgIC8vIExhc3QgYmF0Y2guXG4gICAgICAgICAgICAgIGlmIChkb1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxPdXRzID0gdGhpcy50ZXN0TG9vcCh2YWxGLCB2YWxJbnMsIGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgLy8gUG9ydGluZyBOb3RlczogSW4gdGZqcy1sYXllcnMsIHZhbE91dHMgaXMgYWx3YXlzIGFuIEFycmF5LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TGFiZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IG91dExhYmVsc1tpXTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IHZhbE91dHNbaV07XG4gICAgICAgICAgICAgICAgICB0ZmMua2VlcChvdXQpO1xuICAgICAgICAgICAgICAgICAgLy8gVE9ETyhjYWlzKTogVXNlIHNjb3BlKCkgdG8gYXZvaWQgb3duZXJzaGlwLlxuICAgICAgICAgICAgICAgICAgZXBvY2hMb2dzWyd2YWxfJyArIGxhYmVsXSA9IG91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrTGlzdC5vbkJhdGNoRW5kKGJhdGNoSW5kZXgsIGJhdGNoTG9ncyk7XG4gICAgICAgICAgZGlzcG9zZVRlbnNvcnNJbkxvZ3MoYmF0Y2hMb2dzKTtcblxuICAgICAgICAgIGlmICh0aGlzLnN0b3BUcmFpbmluZ18pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUT0RPKGNhaXMpOiByZXR1cm4gb3V0cyBhcyBsaXN0IG9mIFRlbnNvci5cbiAgICAgICAgfVxuXG4gICAgICAgIGVwb2NoSW5kZXhBcnJheTFELmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE8oY2Fpcyk6IFJ1biB2YWxpZGF0aW9uIGF0IHRoZSBlbmQgb2YgdGhlIGVwb2NoLlxuICAgICAgYXdhaXQgY2FsbGJhY2tMaXN0Lm9uRXBvY2hFbmQoZXBvY2gsIGVwb2NoTG9ncyk7XG4gICAgICBpZiAodGhpcy5zdG9wVHJhaW5pbmdfKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCBjYWxsYmFja0xpc3Qub25UcmFpbkVuZCgpO1xuXG4gICAgYXdhaXQgdGhpcy5oaXN0b3J5LnN5bmNEYXRhKCk7XG4gICAgcmV0dXJuIHRoaXMuaGlzdG9yeTtcbiAgfVxuXG4gIC8vIFRPRE8oY2Fpcyk6IEFkZCBjb2RlIHNuaXBwZXQgYmVsb3cgd2hlbiBpdCdzIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlXG4gIC8vICAgYWN0dWFsIGRhdGFzZXQgb2JqZWN0cy5cbiAgLyoqXG4gICAqIFRyYWlucyB0aGUgbW9kZWwgdXNpbmcgYSBkYXRhc2V0IG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIGRhdGFzZXQgQSBkYXRhc2V0IG9iamVjdC4gSXRzIGBpdGVyYXRvcigpYCBtZXRob2QgaXMgZXhwZWN0ZWRcbiAgICogICB0byBnZW5lcmF0ZSBhIGRhdGFzZXQgaXRlcmF0b3Igb2JqZWN0LCB0aGUgYG5leHQoKWAgbWV0aG9kIG9mIHdoaWNoXG4gICAqICAgaXMgZXhwZWN0ZWQgdG8gcHJvZHVjZSBkYXRhIGJhdGNoZXMgZm9yIHRyYWluaW5nLiBUaGUgcmV0dXJuIHZhbHVlXG4gICAqICAgb2YgdGhlIGBuZXh0KClgIGNhbGwgb3VnaHQgdG8gY29udGFpbiBhIGJvb2xlYW4gYGRvbmVgIGZpZWxkIGFuZCBhXG4gICAqICAgYHZhbHVlYCBmaWVsZC4gVGhlIGB2YWx1ZWAgZmllbGQgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXkgb2YgdHdvXG4gICAqICAgYHRmLlRlbnNvcmBzIG9yIGFuIGFycmF5IG9mIHR3byBuZXN0ZWQgYHRmLlRlbnNvcmAgc3RydWN0dXJlcy4gVGhlIGZvcm1lclxuICAgKiAgIGNhc2UgaXMgZm9yIG1vZGVscyB3aXRoIGV4YWN0bHkgb25lIGlucHV0IGFuZCBvbmUgb3V0cHV0IChlLmcuXG4gICAqICAgYSBzZXF1ZW50aWFsIG1vZGVsKS4gVGhlIGxhdHRlciBjYXNlIGlzIGZvciBtb2RlbHMgd2l0aCBtdWx0aXBsZVxuICAgKiAgIGlucHV0cyBhbmQvb3IgbXVsdGlwbGUgb3V0cHV0cy5cbiAgICogICBPZiB0aGUgdHdvIGl0ZW1zIGluIHRoZSBhcnJheSwgdGhlIGZpcnN0IGlzIHRoZSBpbnB1dCBmZWF0dXJlKHMpIGFuZFxuICAgKiAgIHRoZSBzZWNvbmQgaXMgdGhlIG91dHB1dCB0YXJnZXQocykuXG4gICAqIEBwYXJhbSBhcmdzIEEgYE1vZGVsRml0RGF0YXNldEFyZ3NgLCBjb250YWluaW5nIG9wdGlvbmFsIGZpZWxkcy5cbiAgICpcbiAgICogQHJldHVybiBBIGBIaXN0b3J5YCBpbnN0YW5jZS4gSXRzIGBoaXN0b3J5YCBhdHRyaWJ1dGUgY29udGFpbnMgYWxsXG4gICAqICAgaW5mb3JtYXRpb24gY29sbGVjdGVkIGR1cmluZyB0cmFpbmluZy5cbiAgICpcbiAgICogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ31cbiAgICovXG4gIGFzeW5jIGZpdERhdGFzZXQ8VD4oZGF0YXNldDogRGF0YXNldDxUPiwgYXJnczogTW9kZWxGaXREYXRhc2V0QXJnczxUPik6XG4gICAgICBQcm9taXNlPEhpc3Rvcnk+IHtcbiAgICByZXR1cm4gZml0RGF0YXNldCh0aGlzLCBkYXRhc2V0LCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGEgc2luZ2xlIGdyYWRpZW50IHVwZGF0ZSBvbiBhIHNpbmdsZSBiYXRjaCBvZiBkYXRhLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBkaWZmZXJzIGZyb20gYGZpdCgpYCBhbmQgYGZpdERhdGFzZXQoKWAgaW4gdGhlIGZvbGxvd2luZ1xuICAgKiByZWdhcmRzOlxuICAgKiAgIC0gSXQgb3BlcmF0ZXMgb24gZXhhY3RseSBvbmUgYmF0Y2ggb2YgZGF0YS5cbiAgICogICAtIEl0IHJldHVybnMgb25seSB0aGUgbG9zcyBhbmQgbWV0cmljIHZhbHVlcywgaW5zdGVhZCBvZlxuICAgKiAgICAgcmV0dXJuaW5nIHRoZSBiYXRjaC1ieS1iYXRjaCBsb3NzIGFuZCBtZXRyaWMgdmFsdWVzLlxuICAgKiAgIC0gSXQgZG9lc24ndCBzdXBwb3J0IGZpbmUtZ3JhaW5lZCBvcHRpb25zIHN1Y2ggYXMgdmVyYm9zaXR5IGFuZFxuICAgKiAgICAgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBAcGFyYW0geCBJbnB1dCBkYXRhLiBJdCBjb3VsZCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcbiAgICogICAtIEEgYHRmLlRlbnNvcmAsIG9yIGFuIEFycmF5IG9mIGB0Zi5UZW5zb3JgcyAoaW4gY2FzZSB0aGUgbW9kZWwgaGFzXG4gICAqICAgICBtdWx0aXBsZSBpbnB1dHMpLlxuICAgKiAgIC0gQW4gT2JqZWN0IG1hcHBpbmcgaW5wdXQgbmFtZXMgdG8gY29ycmVzcG9uZGluZyBgdGYuVGVuc29yYCAoaWYgdGhlXG4gICAqICAgICBtb2RlbCBoYXMgbmFtZWQgaW5wdXRzKS5cbiAgICogQHBhcmFtIHkgVGFyZ2V0IGRhdGEuIEl0IGNvdWxkIGJlIGVpdGhlciBhIGB0Zi5UZW5zb3JgIG9yIG11bHRpcGxlXG4gICAqICAgYHRmLlRlbnNvcmBzLiBJdCBzaG91bGQgYmUgY29uc2lzdGVudCB3aXRoIGB4YC5cbiAgICogQHJldHVybnMgVHJhaW5pbmcgbG9zcyBvciBsb3NzZXMgKGluIGNhc2UgdGhlIG1vZGVsIGhhc1xuICAgKiAgIG11bHRpcGxlIG91dHB1dHMpLCBhbG9uZyB3aXRoIG1ldHJpY3MgKGlmIGFueSksIGFzIG51bWJlcnMuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3Nlcyd9XG4gICAqL1xuICBhc3luYyB0cmFpbk9uQmF0Y2goXG4gICAgICB4OiBUZW5zb3J8VGVuc29yW118e1tpbnB1dE5hbWU6IHN0cmluZ106IFRlbnNvcn0sXG4gICAgICB5OiBUZW5zb3J8VGVuc29yW118XG4gICAgICB7W2lucHV0TmFtZTogc3RyaW5nXTogVGVuc29yfSk6IFByb21pc2U8bnVtYmVyfG51bWJlcltdPiB7XG4gICAgLy8gVE9ETyhjYWlzKTogU3VwcG9ydCBzYW1wbGVXZWlnaHQgYW5kIGNsYXNzV2VpZ2h0LlxuICAgIC8vIFRPRE8oY2Fpcyk6IFN1cHBvcnQgRGF0YXNldCBvYmplY3RzLlxuICAgIGNvbnN0IHN0YW5kYXJkaXplT3V0ID0gYXdhaXQgdGhpcy5zdGFuZGFyZGl6ZVVzZXJEYXRhKHgsIHkpO1xuICAgIGNvbnN0IGlucHV0cyA9IHN0YW5kYXJkaXplT3V0WzBdO1xuICAgIGNvbnN0IHRhcmdldHMgPSBzdGFuZGFyZGl6ZU91dFsxXTtcbiAgICBjb25zdCB0cmFpbkZ1bmN0aW9uID0gdGhpcy5tYWtlVHJhaW5GdW5jdGlvbigpO1xuICAgIGNvbnN0IGxvc3NlcyA9IHRyYWluRnVuY3Rpb24oaW5wdXRzLmNvbmNhdCh0YXJnZXRzKSk7XG4gICAgY29uc3QgbG9zc1ZhbHVlczogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGxvc3Mgb2YgbG9zc2VzKSB7XG4gICAgICBjb25zdCB2ID0gYXdhaXQgbG9zcy5kYXRhKCk7XG4gICAgICBsb3NzVmFsdWVzLnB1c2godlswXSk7XG4gICAgfVxuICAgIHRmYy5kaXNwb3NlKGxvc3Nlcyk7XG4gICAgZGlzcG9zZU5ld1RlbnNvcnMoc3RhbmRhcmRpemVPdXRbMF0sIHgpO1xuICAgIGRpc3Bvc2VOZXdUZW5zb3JzKHN0YW5kYXJkaXplT3V0WzFdLCB5KTtcbiAgICByZXR1cm4gc2luZ2xldG9uT3JBcnJheShsb3NzVmFsdWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IHdlaWdodCB2YWx1ZXMgb2YgdGhlIG1vZGVsLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnOiBBbiBpbnN0YW5jZSBvZiBgaW8uU2F2ZUNvbmZpZ2AsIHdoaWNoIHNwZWNpZmllc1xuICAgKiBtb2RlbC1zYXZpbmcgb3B0aW9ucyBzdWNoIGFzIHdoZXRoZXIgb25seSB0cmFpbmFibGUgd2VpZ2h0cyBhcmUgdG8gYmVcbiAgICogc2F2ZWQuXG4gICAqIEByZXR1cm5zIEEgYE5hbWVkVGVuc29yTWFwYCBtYXBwaW5nIG9yaWdpbmFsIHdlaWdodCBuYW1lcyAoaS5lLixcbiAgICogICBub24tdW5pcXVlaWZpZWQgd2VpZ2h0IG5hbWVzKSB0byB0aGVpciB2YWx1ZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0TmFtZWRXZWlnaHRzKGNvbmZpZz86IGlvLlNhdmVDb25maWcpOiBOYW1lZFRlbnNvcltdIHtcbiAgICBjb25zdCBuYW1lZFdlaWdodHM6IE5hbWVkVGVuc29yW10gPSBbXTtcblxuICAgIGNvbnN0IHRyYWluYWJsZU9ubHkgPSBjb25maWcgIT0gbnVsbCAmJiBjb25maWcudHJhaW5hYmxlT25seTtcbiAgICBjb25zdCB3ZWlnaHRzID0gdHJhaW5hYmxlT25seSA/IHRoaXMudHJhaW5hYmxlV2VpZ2h0cyA6IHRoaXMud2VpZ2h0cztcbiAgICBjb25zdCB3ZWlnaHRWYWx1ZXMgPSB0aGlzLmdldFdlaWdodHModHJhaW5hYmxlT25seSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWlnaHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodHJhaW5hYmxlT25seSAmJiAhd2VpZ2h0c1tpXS50cmFpbmFibGUpIHtcbiAgICAgICAgLy8gT3B0aW9uYWxseSBza2lwIG5vbi10cmFpbmFibGUgd2VpZ2h0cy5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBuYW1lZFdlaWdodHMucHVzaChcbiAgICAgICAgICB7bmFtZTogd2VpZ2h0c1tpXS5vcmlnaW5hbE5hbWUsIHRlbnNvcjogd2VpZ2h0VmFsdWVzW2ldfSk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lZFdlaWdodHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGVyIHVzZWQgZm9yIGZvcmNlIHN0b3BwaW5nIG9mIExheWVyc01vZGVsLmZpdCgpIChpLmUuLCB0cmFpbmluZykuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGlucHV0ID0gdGYuaW5wdXQoe3NoYXBlOiBbMTBdfSk7XG4gICAqIGNvbnN0IG91dHB1dCA9IHRmLmxheWVycy5kZW5zZSh7dW5pdHM6IDF9KS5hcHBseShpbnB1dCk7XG4gICAqIGNvbnN0IG1vZGVsID0gdGYubW9kZWwoe2lucHV0czogW2lucHV0XSwgb3V0cHV0czogW291dHB1dF19KTtcbiAgICogbW9kZWwuY29tcGlsZSh7bG9zczogJ21lYW5TcXVhcmVkRXJyb3InLCBvcHRpbWl6ZXI6ICdzZ2QnfSk7XG4gICAqIGNvbnN0IHhzID0gdGYub25lcyhbOCwgMTBdKTtcbiAgICogY29uc3QgeXMgPSB0Zi56ZXJvcyhbOCwgMV0pO1xuICAgKlxuICAgKiBjb25zdCBoaXN0b3J5ID0gYXdhaXQgbW9kZWwuZml0KHhzLCB5cywge1xuICAgKiAgIGVwb2NoczogMTAsXG4gICAqICAgY2FsbGJhY2tzOiB7XG4gICAqICAgICBvbkVwb2NoRW5kOiBhc3luYyAoZXBvY2gsIGxvZ3MpID0+IHtcbiAgICogICAgICAgaWYgKGVwb2NoID09PSAyKSB7XG4gICAqICAgICAgICAgbW9kZWwuc3RvcFRyYWluaW5nID0gdHJ1ZTtcbiAgICogICAgICAgfVxuICAgKiAgICAgfVxuICAgKiAgIH1cbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFRoZXJlIHNob3VsZCBiZSBvbmx5IDMgdmFsdWVzIGluIHRoZSBsb3NzIGFycmF5LCBpbnN0ZWFkIG9mIDEwXG4gICAqIHZhbHVlcyxcbiAgICogLy8gZHVlIHRvIHRoZSBzdG9wcGluZyBhZnRlciAzIGVwb2Nocy5cbiAgICogY29uc29sZS5sb2coaGlzdG9yeS5oaXN0b3J5Lmxvc3MpO1xuICAgKiBgYGBcbiAgICovXG4gIHNldCBzdG9wVHJhaW5pbmcoc3RvcDogYm9vbGVhbikge1xuICAgIHRoaXMuc3RvcFRyYWluaW5nXyA9IHN0b3A7XG4gIH1cblxuICBnZXQgc3RvcFRyYWluaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3BUcmFpbmluZ187XG4gIH1cblxuICBnZXQgb3B0aW1pemVyKCk6IE9wdGltaXplciB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW1pemVyXztcbiAgfVxuXG4gIHNldCBvcHRpbWl6ZXIob3B0aW1pemVyOiBPcHRpbWl6ZXIpIHtcbiAgICBpZiAodGhpcy5vcHRpbWl6ZXJfICE9PSBvcHRpbWl6ZXIpIHtcbiAgICAgIHRoaXMub3B0aW1pemVyXyA9IG9wdGltaXplcjtcbiAgICAgIHRoaXMuaXNPcHRpbWl6ZXJPd25lZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIGRpc3Bvc2UoKTogRGlzcG9zZVJlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGlzcG9zZSgpO1xuICAgIGlmIChyZXN1bHQucmVmQ291bnRBZnRlckRpc3Bvc2UgPT09IDAgJiYgdGhpcy5vcHRpbWl6ZXIgIT0gbnVsbCAmJlxuICAgICAgICB0aGlzLmlzT3B0aW1pemVyT3duZWQpIHtcbiAgICAgIGNvbnN0IG51bVRlbnNvcnNCZWZvcmVPcHRtaXplckRpc3Bvc2FsID0gdGZjLm1lbW9yeSgpLm51bVRlbnNvcnM7XG4gICAgICB0aGlzLm9wdGltaXplcl8uZGlzcG9zZSgpO1xuICAgICAgcmVzdWx0Lm51bURpc3Bvc2VkVmFyaWFibGVzICs9XG4gICAgICAgICAgbnVtVGVuc29yc0JlZm9yZU9wdG1pemVyRGlzcG9zYWwgLSB0ZmMubWVtb3J5KCkubnVtVGVuc29ycztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TG9zc0lkZW50aWZpZXJzKCk6IExvc3NJZGVudGlmaWVyfExvc3NJZGVudGlmaWVyW118XG4gICAgICB7W291dHB1dE5hbWU6IHN0cmluZ106IExvc3NJZGVudGlmaWVyfSB7XG4gICAgbGV0IGxvc3NOYW1lczogTG9zc0lkZW50aWZpZXJ8TG9zc0lkZW50aWZpZXJbXXxcbiAgICAgICAge1tvdXRwdXROYW1lOiBzdHJpbmddOiBMb3NzSWRlbnRpZmllcn07XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxvc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsb3NzTmFtZXMgPSB0b1NuYWtlQ2FzZSh0aGlzLmxvc3MpIGFzIExvc3NJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmxvc3MpKSB7XG4gICAgICBmb3IgKGNvbnN0IGxvc3Mgb2YgdGhpcy5sb3NzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9zcyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcmlhbGl6YXRpb24gb2Ygbm9uLXN0cmluZyBsb3NzIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvc3NOYW1lcyA9ICh0aGlzLmxvc3MgYXMgc3RyaW5nW10pLm1hcChuYW1lID0+IHRvU25ha2VDYXNlKG5hbWUpKSBhc1xuICAgICAgICAgIExvc3NJZGVudGlmaWVyW107XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG91dHB1dE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5sb3NzKTtcbiAgICAgIGxvc3NOYW1lcyA9IHt9IGFzIHtbb3V0cHV0TmFtZTogc3RyaW5nXTogTG9zc0lkZW50aWZpZXJ9O1xuICAgICAgY29uc3QgbG9zc2VzID1cbiAgICAgICAgICB0aGlzLmxvc3MgYXMge1tvdXRwdXROYW1lOiBzdHJpbmddOiBMb3NzT3JNZXRyaWNGbiB8IHN0cmluZ307XG4gICAgICBmb3IgKGNvbnN0IG91dHB1dE5hbWUgb2Ygb3V0cHV0TmFtZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb3NzZXNbb3V0cHV0TmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgbG9zc05hbWVzW291dHB1dE5hbWVdID1cbiAgICAgICAgICAgICAgdG9TbmFrZUNhc2UobG9zc2VzW291dHB1dE5hbWVdIGFzIHN0cmluZykgYXMgTG9zc0lkZW50aWZpZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJpYWxpemF0aW9uIG9mIG5vbi1zdHJpbmcgbG9zcyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb3NzTmFtZXM7XG4gIH1cblxuICBwcml2YXRlIGdldE1ldHJpY0lkZW50aWZpZXJzKCk6IE1ldHJpY3NJZGVudGlmaWVyW118XG4gICAgICB7W2tleTogc3RyaW5nXTogTWV0cmljc0lkZW50aWZpZXJ9IHtcbiAgICBpZiAodHlwZW9mIHRoaXMubWV0cmljcyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMubWV0cmljcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIFt0b1NuYWtlQ2FzZShNZXRyaWNzLmdldExvc3NPck1ldHJpY05hbWUodGhpcy5tZXRyaWNzKSldO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm1ldHJpY3MpKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXRyaWNzLm1hcChcbiAgICAgICAgICBtZXRyaWMgPT4gdG9TbmFrZUNhc2UoTWV0cmljcy5nZXRMb3NzT3JNZXRyaWNOYW1lKG1ldHJpYykpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0cmljc0lkZW50aWZpZXJzOiB7W2tleTogc3RyaW5nXTogTWV0cmljc0lkZW50aWZpZXJ9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLm1ldHJpY3MpIHtcbiAgICAgICAgbWV0cmljc0lkZW50aWZpZXJzW2tleV0gPVxuICAgICAgICAgICAgdG9TbmFrZUNhc2UoTWV0cmljcy5nZXRMb3NzT3JNZXRyaWNOYW1lKHRoaXMubWV0cmljc1trZXldKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWV0cmljc0lkZW50aWZpZXJzO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRUcmFpbmluZ0NvbmZpZygpOiBUcmFpbmluZ0NvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvc3M6IHRoaXMuZ2V0TG9zc0lkZW50aWZpZXJzKCksXG4gICAgICBtZXRyaWNzOiB0aGlzLmdldE1ldHJpY0lkZW50aWZpZXJzKCksXG4gICAgICBvcHRpbWl6ZXJfY29uZmlnOiB7XG4gICAgICAgIGNsYXNzX25hbWU6IHRoaXMub3B0aW1pemVyLmdldENsYXNzTmFtZSgpLFxuICAgICAgICBjb25maWc6IHRoaXMub3B0aW1pemVyLmdldENvbmZpZygpXG4gICAgICB9IGFzIE9wdGltaXplclNlcmlhbGl6YXRpb25cbiAgICB9O1xuICAgIC8vIFRPRE8oY2Fpcyk6IEFkZCB3ZWlnaHRfbWV0cmljcyB3aGVuIHRoZXkgYXJlIHN1cHBvcnRlZC5cbiAgICAvLyBUT0RPKGNhaXMpOiBBZGQgc2FtcGxlX3dlaWdodF9tb2RlIHdoZW4gaXQncyBzdXBwb3J0ZWQuXG4gICAgLy8gVE9ETyhjYWlzKTogQWRkIGxvc3Nfd2VpZ2h0cyB3aGVuIGl0J3Mgc3VwcG9ydGVkLlxuICB9XG5cbiAgbG9hZFRyYWluaW5nQ29uZmlnKHRyYWluaW5nQ29uZmlnOiBUcmFpbmluZ0NvbmZpZykge1xuICAgIGlmICh0cmFpbmluZ0NvbmZpZy53ZWlnaHRlZF9tZXRyaWNzICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTG9hZGluZyB3ZWlnaHRfbWV0cmljcyBpcyBub3Qgc3VwcG9ydGVkIHlldC4nKTtcbiAgICB9XG4gICAgaWYgKHRyYWluaW5nQ29uZmlnLmxvc3Nfd2VpZ2h0cyAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRpbmcgbG9zc193ZWlnaHRzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0LicpO1xuICAgIH1cbiAgICBpZiAodHJhaW5pbmdDb25maWcuc2FtcGxlX3dlaWdodF9tb2RlICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTG9hZGluZyBzYW1wbGVfd2VpZ2h0X21vZGUgaXMgbm90IHN1cHBvcnRlZCB5ZXQuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdHNDb25maWcgPSBjb252ZXJ0UHl0aG9uaWNUb1RzKHRyYWluaW5nQ29uZmlnLm9wdGltaXplcl9jb25maWcpIGFzXG4gICAgICAgIHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdDtcbiAgICBjb25zdCBvcHRpbWl6ZXIgPSBkZXNlcmlhbGl6ZSh0c0NvbmZpZykgYXMgT3B0aW1pemVyO1xuXG4gICAgbGV0IGxvc3M7XG4gICAgaWYgKHR5cGVvZiB0cmFpbmluZ0NvbmZpZy5sb3NzID09PSAnc3RyaW5nJykge1xuICAgICAgbG9zcyA9IHRvQ2FtZWxDYXNlKHRyYWluaW5nQ29uZmlnLmxvc3MpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0cmFpbmluZ0NvbmZpZy5sb3NzKSkge1xuICAgICAgbG9zcyA9IHRyYWluaW5nQ29uZmlnLmxvc3MubWFwKGxvc3NFbnRyeSA9PiB0b0NhbWVsQ2FzZShsb3NzRW50cnkpKTtcbiAgICB9IGVsc2UgaWYgKHRyYWluaW5nQ29uZmlnLmxvc3MgIT0gbnVsbCkge1xuICAgICAgbG9zcyA9IHt9IGFzIHtbb3V0cHV0TmFtZTogc3RyaW5nXTogTG9zc0lkZW50aWZpZXJ9O1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdHJhaW5pbmdDb25maWcubG9zcykge1xuICAgICAgICBsb3NzW2tleV0gPSB0b0NhbWVsQ2FzZSh0cmFpbmluZ0NvbmZpZy5sb3NzW2tleV0pIGFzIExvc3NJZGVudGlmaWVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtZXRyaWNzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRyYWluaW5nQ29uZmlnLm1ldHJpY3MpKSB7XG4gICAgICBtZXRyaWNzID0gdHJhaW5pbmdDb25maWcubWV0cmljcy5tYXAobWV0cmljID0+IHRvQ2FtZWxDYXNlKG1ldHJpYykpO1xuICAgIH0gZWxzZSBpZiAodHJhaW5pbmdDb25maWcubWV0cmljcyAhPSBudWxsKSB7XG4gICAgICBtZXRyaWNzID0ge30gYXMge1tvdXRwdXROYW1lOiBzdHJpbmddOiBNZXRyaWNzSWRlbnRpZmllcn07XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0cmFpbmluZ0NvbmZpZy5tZXRyaWNzKSB7XG4gICAgICAgIG1ldHJpY3Nba2V5XSA9IHRvQ2FtZWxDYXNlKHRyYWluaW5nQ29uZmlnLm1ldHJpY3Nba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21waWxlKHtsb3NzLCBtZXRyaWNzLCBvcHRpbWl6ZXJ9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSBjb25maWd1cmF0aW9uIGFuZC9vciB3ZWlnaHRzIG9mIHRoZSBMYXllcnNNb2RlbC5cbiAgICpcbiAgICogQW4gYElPSGFuZGxlcmAgaXMgYW4gb2JqZWN0IHRoYXQgaGFzIGEgYHNhdmVgIG1ldGhvZCBvZiB0aGUgcHJvcGVyXG4gICAqIHNpZ25hdHVyZSBkZWZpbmVkLiBUaGUgYHNhdmVgIG1ldGhvZCBtYW5hZ2VzIHRoZSBzdG9yaW5nIG9yXG4gICAqIHRyYW5zbWlzc2lvbiBvZiBzZXJpYWxpemVkIGRhdGEgKFwiYXJ0aWZhY3RzXCIpIHRoYXQgcmVwcmVzZW50IHRoZVxuICAgKiBtb2RlbCdzIHRvcG9sb2d5IGFuZCB3ZWlnaHRzIG9udG8gb3IgdmlhIGEgc3BlY2lmaWMgbWVkaXVtLCBzdWNoIGFzXG4gICAqIGZpbGUgZG93bmxvYWRzLCBsb2NhbCBzdG9yYWdlLCBJbmRleGVkREIgaW4gdGhlIHdlYiBicm93c2VyIGFuZCBIVFRQXG4gICAqIHJlcXVlc3RzIHRvIGEgc2VydmVyLiBUZW5zb3JGbG93LmpzIHByb3ZpZGVzIGBJT0hhbmRsZXJgXG4gICAqIGltcGxlbWVudGF0aW9ucyBmb3IgYSBudW1iZXIgb2YgZnJlcXVlbnRseSB1c2VkIHNhdmluZyBtZWRpdW1zLCBzdWNoIGFzXG4gICAqIGB0Zi5pby5icm93c2VyRG93bmxvYWRzYCBhbmQgYHRmLmlvLmJyb3dzZXJMb2NhbFN0b3JhZ2VgLiBTZWUgYHRmLmlvYFxuICAgKiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBhbHNvIGFsbG93cyB5b3UgdG8gcmVmZXIgdG8gY2VydGFpbiB0eXBlcyBvZiBgSU9IYW5kbGVyYHNcbiAgICogYXMgVVJMLWxpa2Ugc3RyaW5nIHNob3J0Y3V0cywgc3VjaCBhcyAnbG9jYWxzdG9yYWdlOi8vJyBhbmRcbiAgICogJ2luZGV4ZWRkYjovLycuXG4gICAqXG4gICAqIEV4YW1wbGUgMTogU2F2ZSBgbW9kZWxgJ3MgdG9wb2xvZ3kgYW5kIHdlaWdodHMgdG8gYnJvd3NlciBbbG9jYWxcbiAgICogc3RvcmFnZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9sb2NhbFN0b3JhZ2UpO1xuICAgKiB0aGVuIGxvYWQgaXQgYmFjay5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKFxuICAgKiAgICAge2xheWVyczogW3RmLmxheWVycy5kZW5zZSh7dW5pdHM6IDEsIGlucHV0U2hhcGU6IFszXX0pXX0pO1xuICAgKiBjb25zb2xlLmxvZygnUHJlZGljdGlvbiBmcm9tIG9yaWdpbmFsIG1vZGVsOicpO1xuICAgKiBtb2RlbC5wcmVkaWN0KHRmLm9uZXMoWzEsIDNdKSkucHJpbnQoKTtcbiAgICpcbiAgICogY29uc3Qgc2F2ZVJlc3VsdHMgPSBhd2FpdCBtb2RlbC5zYXZlKCdsb2NhbHN0b3JhZ2U6Ly9teS1tb2RlbC0xJyk7XG4gICAqXG4gICAqIGNvbnN0IGxvYWRlZE1vZGVsID0gYXdhaXQgdGYubG9hZExheWVyc01vZGVsKCdsb2NhbHN0b3JhZ2U6Ly9teS1tb2RlbC0xJyk7XG4gICAqIGNvbnNvbGUubG9nKCdQcmVkaWN0aW9uIGZyb20gbG9hZGVkIG1vZGVsOicpO1xuICAgKiBsb2FkZWRNb2RlbC5wcmVkaWN0KHRmLm9uZXMoWzEsIDNdKSkucHJpbnQoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEV4YW1wbGUgMi4gU2F2aW5nIGBtb2RlbGAncyB0b3BvbG9neSBhbmQgd2VpZ2h0cyB0byBicm93c2VyXG4gICAqIFtJbmRleGVkREJdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbmRleGVkREJfQVBJKTtcbiAgICogdGhlbiBsb2FkIGl0IGJhY2suXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IG1vZGVsID0gdGYuc2VxdWVudGlhbChcbiAgICogICAgIHtsYXllcnM6IFt0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOiAxLCBpbnB1dFNoYXBlOiBbM119KV19KTtcbiAgICogY29uc29sZS5sb2coJ1ByZWRpY3Rpb24gZnJvbSBvcmlnaW5hbCBtb2RlbDonKTtcbiAgICogbW9kZWwucHJlZGljdCh0Zi5vbmVzKFsxLCAzXSkpLnByaW50KCk7XG4gICAqXG4gICAqIGNvbnN0IHNhdmVSZXN1bHRzID0gYXdhaXQgbW9kZWwuc2F2ZSgnaW5kZXhlZGRiOi8vbXktbW9kZWwtMScpO1xuICAgKlxuICAgKiBjb25zdCBsb2FkZWRNb2RlbCA9IGF3YWl0IHRmLmxvYWRMYXllcnNNb2RlbCgnaW5kZXhlZGRiOi8vbXktbW9kZWwtMScpO1xuICAgKiBjb25zb2xlLmxvZygnUHJlZGljdGlvbiBmcm9tIGxvYWRlZCBtb2RlbDonKTtcbiAgICogbG9hZGVkTW9kZWwucHJlZGljdCh0Zi5vbmVzKFsxLCAzXSkpLnByaW50KCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBFeGFtcGxlIDMuIFNhdmluZyBgbW9kZWxgJ3MgdG9wb2xvZ3kgYW5kIHdlaWdodHMgYXMgdHdvIGZpbGVzXG4gICAqIChgbXktbW9kZWwtMS5qc29uYCBhbmQgYG15LW1vZGVsLTEud2VpZ2h0cy5iaW5gKSBkb3dubG9hZGVkIGZyb21cbiAgICogYnJvd3Nlci5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKFxuICAgKiAgICAge2xheWVyczogW3RmLmxheWVycy5kZW5zZSh7dW5pdHM6IDEsIGlucHV0U2hhcGU6IFszXX0pXX0pO1xuICAgKiBjb25zdCBzYXZlUmVzdWx0cyA9IGF3YWl0IG1vZGVsLnNhdmUoJ2Rvd25sb2FkczovL215LW1vZGVsLTEnKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEV4YW1wbGUgNC4gU2VuZCAgYG1vZGVsYCdzIHRvcG9sb2d5IGFuZCB3ZWlnaHRzIHRvIGFuIEhUVFAgc2VydmVyLlxuICAgKiBTZWUgdGhlIGRvY3VtZW50YXRpb24gb2YgYHRmLmlvLmh0dHBgIGZvciBtb3JlIGRldGFpbHNcbiAgICogaW5jbHVkaW5nIHNwZWNpZnlpbmcgcmVxdWVzdCBwYXJhbWV0ZXJzIGFuZCBpbXBsZW1lbnRhdGlvbiBvZiB0aGVcbiAgICogc2VydmVyLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoXG4gICAqICAgICB7bGF5ZXJzOiBbdGYubGF5ZXJzLmRlbnNlKHt1bml0czogMSwgaW5wdXRTaGFwZTogWzNdfSldfSk7XG4gICAqIGNvbnN0IHNhdmVSZXN1bHRzID0gYXdhaXQgbW9kZWwuc2F2ZSgnaHR0cDovL215LXNlcnZlci9tb2RlbC91cGxvYWQnKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBoYW5kbGVyT3JVUkwgQW4gaW5zdGFuY2Ugb2YgYElPSGFuZGxlcmAgb3IgYSBVUkwtbGlrZSxcbiAgICogc2NoZW1lLWJhc2VkIHN0cmluZyBzaG9ydGN1dCBmb3IgYElPSGFuZGxlcmAuXG4gICAqIEBwYXJhbSBjb25maWcgT3B0aW9ucyBmb3Igc2F2aW5nIHRoZSBtb2RlbC5cbiAgICogQHJldHVybnMgQSBgUHJvbWlzZWAgb2YgYFNhdmVSZXN1bHRgLCB3aGljaCBzdW1tYXJpemVzIHRoZSByZXN1bHQgb2ZcbiAgICogdGhlIHNhdmluZywgc3VjaCBhcyBieXRlIHNpemVzIG9mIHRoZSBzYXZlZCBhcnRpZmFjdHMgZm9yIHRoZSBtb2RlbCdzXG4gICAqICAgdG9wb2xvZ3kgYW5kIHdlaWdodCB2YWx1ZXMuXG4gICAqXG4gICAqIEBkb2Mge2hlYWRpbmc6ICdNb2RlbHMnLCBzdWJoZWFkaW5nOiAnQ2xhc3NlcycsIGlnbm9yZUNJOiB0cnVlfVxuICAgKi9cbiAgYXN5bmMgc2F2ZShoYW5kbGVyT3JVUkw6IGlvLklPSGFuZGxlcnxzdHJpbmcsIGNvbmZpZz86IGlvLlNhdmVDb25maWcpOlxuICAgICAgUHJvbWlzZTxpby5TYXZlUmVzdWx0PiB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyT3JVUkwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBoYW5kbGVycyA9IGlvLmdldFNhdmVIYW5kbGVycyhoYW5kbGVyT3JVUkwpO1xuICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVmFsdWVFcnJvcihcbiAgICAgICAgICAgIGBDYW5ub3QgZmluZCBhbnkgc2F2ZSBoYW5kbGVycyBmb3IgVVJMICcke2hhbmRsZXJPclVSTH0nYCk7XG4gICAgICB9IGVsc2UgaWYgKGhhbmRsZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgICBgRm91bmQgbW9yZSB0aGFuIG9uZSAoJHtoYW5kbGVycy5sZW5ndGh9KSBzYXZlIGhhbmRsZXJzIGZvciBgICtcbiAgICAgICAgICAgIGBVUkwgJyR7aGFuZGxlck9yVVJMfSdgKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXJPclVSTCA9IGhhbmRsZXJzWzBdO1xuICAgIH1cbiAgICBpZiAoaGFuZGxlck9yVVJMLnNhdmUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFZhbHVlRXJyb3IoXG4gICAgICAgICAgJ0xheWVyc01vZGVsLnNhdmUoKSBjYW5ub3QgcHJvY2VlZCBiZWNhdXNlIHRoZSBJT0hhbmRsZXIgJyArXG4gICAgICAgICAgJ3Byb3ZpZGVkIGRvZXMgbm90IGhhdmUgdGhlIGBzYXZlYCBhdHRyaWJ1dGUgZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWlnaHREYXRhQW5kU3BlY3MgPVxuICAgICAgICBhd2FpdCBpby5lbmNvZGVXZWlnaHRzKHRoaXMuZ2V0TmFtZWRXZWlnaHRzKGNvbmZpZykpO1xuXG4gICAgY29uc3QgcmV0dXJuU3RyaW5nID0gZmFsc2U7XG4gICAgY29uc3QgdW51c2VkQXJnOiB7fSA9IG51bGw7XG4gICAgY29uc3QgbW9kZWxDb25maWcgPSB0aGlzLnRvSlNPTih1bnVzZWRBcmcsIHJldHVyblN0cmluZyk7XG4gICAgY29uc3QgbW9kZWxBcnRpZmFjdHM6IGlvLk1vZGVsQXJ0aWZhY3RzID0ge1xuICAgICAgbW9kZWxUb3BvbG9neTogbW9kZWxDb25maWcsXG4gICAgICBmb3JtYXQ6IExBWUVSU19NT0RFTF9GT1JNQVRfTkFNRSxcbiAgICAgIGdlbmVyYXRlZEJ5OiBgVGVuc29yRmxvdy5qcyB0ZmpzLWxheWVycyB2JHt2ZXJzaW9ufWAsXG4gICAgICBjb252ZXJ0ZWRCeTogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgaW5jbHVkZU9wdGltaXplciA9IGNvbmZpZyA9PSBudWxsID8gZmFsc2UgOiBjb25maWcuaW5jbHVkZU9wdGltaXplcjtcbiAgICBpZiAoaW5jbHVkZU9wdGltaXplciAmJiB0aGlzLm9wdGltaXplciAhPSBudWxsKSB7XG4gICAgICBtb2RlbEFydGlmYWN0cy50cmFpbmluZ0NvbmZpZyA9IHRoaXMuZ2V0VHJhaW5pbmdDb25maWcoKTtcbiAgICAgIGNvbnN0IHdlaWdodFR5cGUgPSAnb3B0aW1pemVyJztcbiAgICAgIGNvbnN0IHtkYXRhOiBvcHRpbWl6ZXJXZWlnaHREYXRhLCBzcGVjczogb3B0aW1pemVyV2VpZ2h0U3BlY3N9ID1cbiAgICAgICAgICBhd2FpdCBpby5lbmNvZGVXZWlnaHRzKGF3YWl0IHRoaXMub3B0aW1pemVyLmdldFdlaWdodHMoKSwgd2VpZ2h0VHlwZSk7XG4gICAgICB3ZWlnaHREYXRhQW5kU3BlY3Muc3BlY3MucHVzaCguLi5vcHRpbWl6ZXJXZWlnaHRTcGVjcyk7XG4gICAgICB3ZWlnaHREYXRhQW5kU3BlY3MuZGF0YSA9IGlvLmNvbmNhdGVuYXRlQXJyYXlCdWZmZXJzKFxuICAgICAgICAgIFt3ZWlnaHREYXRhQW5kU3BlY3MuZGF0YSwgb3B0aW1pemVyV2VpZ2h0RGF0YV0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVzZXJEZWZpbmVkTWV0YWRhdGEgIT0gbnVsbCkge1xuICAgICAgLy8gQ2hlY2sgc2VyaWFsaXplZCBzaXplIG9mIHVzZXItZGVmaW5lZCBtZXRhZGF0YS5cbiAgICAgIGNvbnN0IGNoZWNrU2l6ZSA9IHRydWU7XG4gICAgICBjaGVja1VzZXJEZWZpbmVkTWV0YWRhdGEodGhpcy51c2VyRGVmaW5lZE1ldGFkYXRhLCB0aGlzLm5hbWUsIGNoZWNrU2l6ZSk7XG4gICAgICBtb2RlbEFydGlmYWN0cy51c2VyRGVmaW5lZE1ldGFkYXRhID0gdGhpcy51c2VyRGVmaW5lZE1ldGFkYXRhO1xuICAgIH1cblxuICAgIG1vZGVsQXJ0aWZhY3RzLndlaWdodERhdGEgPSB3ZWlnaHREYXRhQW5kU3BlY3MuZGF0YTtcbiAgICBtb2RlbEFydGlmYWN0cy53ZWlnaHRTcGVjcyA9IHdlaWdodERhdGFBbmRTcGVjcy5zcGVjcztcbiAgICByZXR1cm4gaGFuZGxlck9yVVJMLnNhdmUobW9kZWxBcnRpZmFjdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB1c2VyLWRlZmluZWQgbWV0YWRhdGEuXG4gICAqXG4gICAqIFRoZSBzZXQgbWV0YWRhdGEgd2lsbCBiZSBzZXJpYWxpemVkIHRvZ2V0aGVyIHdpdGggdGhlIHRvcG9sb2d5XG4gICAqIGFuZCB3ZWlnaHRzIG9mIHRoZSBtb2RlbCBkdXJpbmcgYHNhdmUoKWAgY2FsbHMuXG4gICAqXG4gICAqIEBwYXJhbSBzZXRVc2VyRGVmaW5lZE1ldGFkYXRhXG4gICAqL1xuICBzZXRVc2VyRGVmaW5lZE1ldGFkYXRhKHVzZXJEZWZpbmVkTWV0YWRhdGE6IHt9KTogdm9pZCB7XG4gICAgY2hlY2tVc2VyRGVmaW5lZE1ldGFkYXRhKHVzZXJEZWZpbmVkTWV0YWRhdGEsIHRoaXMubmFtZSk7XG4gICAgdGhpcy51c2VyRGVmaW5lZE1ldGFkYXRhID0gdXNlckRlZmluZWRNZXRhZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdXNlci1kZWZpbmVkIG1ldGFkYXRhLlxuICAgKlxuICAgKiBUaGUgbWV0YWRhdGEgaXMgc3VwcGxpZWQgdmlhIG9uZSBvZiB0aGUgdHdvIHJvdXRlczpcbiAgICogICAxLiBCeSBjYWxsaW5nIGBzZXRVc2VyRGVmaW5lZE1ldGFkYXRhKClgLlxuICAgKiAgIDIuIExvYWRlZCBkdXJpbmcgbW9kZWwgbG9hZGluZyAoaWYgdGhlIG1vZGVsIGlzIGNvbnN0cnVjdGVkXG4gICAqICAgICAgdmlhIGB0Zi5sb2FkTGF5ZXJzTW9kZWwoKWAuKVxuICAgKlxuICAgKiBJZiBubyB1c2VyLWRlZmluZWQgbWV0YWRhdGEgaXMgYXZhaWxhYmxlIGZyb20gZWl0aGVyIG9mIHRoZVxuICAgKiB0d28gcm91dGVzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGB1bmRlZmluZWRgLlxuICAgKi9cbiAgZ2V0VXNlckRlZmluZWRNZXRhZGF0YSgpOiB7fSB7XG4gICAgcmV0dXJuIHRoaXMudXNlckRlZmluZWRNZXRhZGF0YTtcbiAgfVxufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKExheWVyc01vZGVsKTtcblxuLyoqXG4gKiBBIGB0Zi5GdW5jdGlvbmFsYCBpcyBhbiBhbGlhcyB0byBgdGYuTGF5ZXJzTW9kZWxgLlxuICpcbiAqIFNlZSBhbHNvOlxuICogICBgdGYuTGF5ZXJzTW9kZWxgLCBgdGYuU2VxdWVudGlhbGAsIGB0Zi5sb2FkTGF5ZXJzTW9kZWxgLlxuICovXG4vKiogQGRvYyB7aGVhZGluZzogJ01vZGVscycsIHN1YmhlYWRpbmc6ICdDbGFzc2VzJ30gKi9cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbmFsIGV4dGVuZHMgTGF5ZXJzTW9kZWwge1xuICBzdGF0aWMgb3ZlcnJpZGUgY2xhc3NOYW1lID0gJ0Z1bmN0aW9uYWwnO1xufVxuc2VyaWFsaXphdGlvbi5yZWdpc3RlckNsYXNzKEZ1bmN0aW9uYWwpO1xuIl19
}),
"[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/base_random_layer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "BaseRandomLayer",
    ()=>BaseRandomLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/engine/topology.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$random_seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tensorflow/tfjs/node_modules/@tensorflow/tfjs-layers/dist/backend/random_seed.js [app-ssr] (ecmascript)");
;
;
class BaseRandomLayer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$engine$2f$topology$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"] {
    constructor(args){
        super(args);
        this.randomGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tensorflow$2f$tfjs$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$layers$2f$dist$2f$backend$2f$random_seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomSeed"](args.seed);
    }
    getConfig() {
        const config = {
            'seed': this.randomGenerator.seed
        };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
    }
}
// A layer handle the random number creation and savemodel behavior.
/** @nocollapse */ BaseRandomLayer.className = 'BaseRandomLayer';
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9yYW5kb21fbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi90ZmpzLWxheWVycy9zcmMvZW5naW5lL2Jhc2VfcmFuZG9tX2xheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBRUgsT0FBTyxFQUFhLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPcEQsTUFBc0IsZUFBZ0IsU0FBUSxLQUFLO0lBTWpELFlBQVksSUFBeUI7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVRLFNBQVM7UUFDaEIsTUFBTSxNQUFNLEdBQTZCO1lBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUk7U0FDbEMsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQWxCRCxvRUFBb0U7QUFDcEUsa0JBQWtCO0FBQ1gseUJBQVMsR0FBRyxpQkFBaUIsQ0FBQztTQUhqQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgQ29kZVNtaXRoIExMQ1xuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICogbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IHsgTGF5ZXJBcmdzLCBMYXllciB9IGZyb20gJy4vdG9wb2xvZ3knO1xuaW1wb3J0IHsgUmFuZG9tU2VlZCB9IGZyb20gJy4uL2JhY2tlbmQvcmFuZG9tX3NlZWQnO1xuaW1wb3J0IHsgc2VyaWFsaXphdGlvbiB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZSc7XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBCYXNlUmFuZG9tTGF5ZXJBcmdzIGV4dGVuZHMgTGF5ZXJBcmdzIHtcbiAgc2VlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSYW5kb21MYXllciBleHRlbmRzIExheWVyIHtcbiAgLy8gQSBsYXllciBoYW5kbGUgdGhlIHJhbmRvbSBudW1iZXIgY3JlYXRpb24gYW5kIHNhdmVtb2RlbCBiZWhhdmlvci5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyBjbGFzc05hbWUgPSAnQmFzZVJhbmRvbUxheWVyJztcbiAgcHJvdGVjdGVkIHJhbmRvbUdlbmVyYXRvcjogUmFuZG9tU2VlZDtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBCYXNlUmFuZG9tTGF5ZXJBcmdzKSB7XG4gICAgc3VwZXIoYXJncyk7XG4gICAgdGhpcy5yYW5kb21HZW5lcmF0b3IgPSBuZXcgUmFuZG9tU2VlZChhcmdzLnNlZWQpO1xuICB9XG5cbiAgb3ZlcnJpZGUgZ2V0Q29uZmlnKCk6IHNlcmlhbGl6YXRpb24uQ29uZmlnRGljdCB7XG4gICAgY29uc3QgY29uZmlnOiBzZXJpYWxpemF0aW9uLkNvbmZpZ0RpY3QgPSB7XG4gICAgICAnc2VlZCc6IHRoaXMucmFuZG9tR2VuZXJhdG9yLnNlZWRcbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNvbmZpZyA9IHN1cGVyLmdldENvbmZpZygpO1xuICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiYXNlQ29uZmlnKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG59XG4iXX0=
}),
];

//# sourceMappingURL=2a3f1_%40tensorflow_tfjs-layers_dist_engine_a39c749e._.js.map