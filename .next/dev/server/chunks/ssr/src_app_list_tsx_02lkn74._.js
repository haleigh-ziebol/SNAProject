module.exports = [
"[project]/src/app/list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './ListData.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el)=>{
        //if no input the return the original
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        children: filteredData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: item.text
            }, item.id, false, {
                fileName: "[project]/src/app/list.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/list.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = List;
}),
];

//# sourceMappingURL=src_app_list_tsx_02lkn74._.js.map