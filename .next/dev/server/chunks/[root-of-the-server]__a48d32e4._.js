module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/inference/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Backend Inference API Endpoint
 * 
 * Handles image inference requests from the frontend.
 * This endpoint receives base64 image data and returns predictions.
 * 
 * POST /api/inference
 * Body: { image: string } - base64 encoded image
 * Response: { result: string, confidence: number, predictions: number[] }
 */ __turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const body = await request.json();
        const { image, user_id } = body;
        if (!image || typeof image !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing or invalid image data'
            }, {
                status: 400
            });
        }
        console.log('[Inference API] Processing inference request...');
        if (user_id) {
            console.log(`[Inference API] User ID: ${user_id}`);
        }
        const startTime = Date.now();
        // Run inference via Python backend
        const predictions = await runModelInference(image, user_id);
        const inferenceTime = Date.now() - startTime;
        console.log(`[Inference API] Inference completed in ${inferenceTime}ms`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            result: predictions.result,
            confidence: predictions.confidence,
            predictions: predictions.predictions,
            inferenceTime
        });
    } catch (error) {
        console.error('[Inference API] Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Inference failed',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
/**
 * Run model inference via Python backend
 * 
 * Connects to the Python TFLite backend server
 * 
 * @param imageBase64 - Base64 encoded image
 * @param userId - User ID for tracking (optional)
 * @returns Prediction results
 */ async function runModelInference(imageBase64, userId) {
    try {
        // Python backend URL (can be configured via environment variable)
        const backendUrl = process.env.PYTHON_BACKEND_URL || 'http://localhost:5000';
        console.log('[Inference API] Calling Python backend at:', backendUrl);
        // Call Python backend with user_id for automatic history saving
        const response = await fetch(`${backendUrl}/api/model/run`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: imageBase64,
                user_id: userId // Pass user_id to backend
            })
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Python backend returned ${response.status}: ${errorText}`);
        }
        const data = await response.json();
        if (!data.success) {
            throw new Error(data.error || 'Python backend inference failed');
        }
        console.log('[Inference API] Python backend response:', {
            label: data.output.label,
            confidence: data.output.confidence,
            inferenceTime: data.inferenceTime,
            saved: data.saved,
            history_id: data.history_id
        });
        // Return in format expected by frontend
        return {
            result: data.output.label,
            confidence: data.output.confidence,
            predictions: data.output.predictions,
            saved: data.saved,
            history_id: data.history_id
        };
    } catch (error) {
        console.error('[Inference API] Python backend error:', error);
        throw new Error(`Failed to connect to Python backend: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
async function GET() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: 'healthy',
        endpoint: '/api/inference',
        message: 'Inference API is running. Send POST requests with image data.'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a48d32e4._.js.map