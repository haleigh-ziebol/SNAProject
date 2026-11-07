module.exports = [
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/pg/lib/result.js [external] (pg/lib/result.js, cjs, [project]/node_modules/pg)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("pg-587764f78a6c7a9c/lib/result.js", () => require("pg-587764f78a6c7a9c/lib/result.js"));

module.exports = mod;
}),
"[externals]/pg/lib/utils.js [external] (pg/lib/utils.js, cjs, [project]/node_modules/pg)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("pg-587764f78a6c7a9c/lib/utils.js", () => require("pg-587764f78a6c7a9c/lib/utils.js"));

module.exports = mod;
}),
"[project]/node_modules/@ark/util/out/arrays.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts duplicated elements and their indices from an array, returning them.
 *
 * Note that given `a === b && b === c`, then `c === a` must be `true` for this to give accurate results.
 *
 * @param arr The array to extract duplicate elements from.
 */ __turbopack_context__.s([
    "ReadonlyArray",
    ()=>ReadonlyArray,
    "append",
    ()=>append,
    "appendUnique",
    ()=>appendUnique,
    "arrayEquals",
    ()=>arrayEquals,
    "conflatenate",
    ()=>conflatenate,
    "conflatenateAll",
    ()=>conflatenateAll,
    "getDuplicatesOf",
    ()=>getDuplicatesOf,
    "getPath",
    ()=>getPath,
    "groupBy",
    ()=>groupBy,
    "includes",
    ()=>includes,
    "intersectUniqueLists",
    ()=>intersectUniqueLists,
    "join",
    ()=>join,
    "liftArray",
    ()=>liftArray,
    "range",
    ()=>range,
    "spliterate",
    ()=>spliterate
]);
const getDuplicatesOf = (arr, opts)=>{
    const isEqual = opts?.isEqual ?? ((l, r)=>l === r);
    const elementFirstSeenIndx = new Map();
    const duplicates = [];
    for (const [indx, element] of arr.entries()){
        const duplicatesIndx = duplicates.findIndex((duplicate)=>isEqual(duplicate.element, element));
        if (duplicatesIndx !== -1) {
            // This is at least the third occurrence of an item equal to `element`,
            // so add this index to the list of indices where the element is duplicated.
            duplicates[duplicatesIndx].indices.push(indx);
            continue;
        }
        // At this point, we know this is either the first
        // or second occurrence of an item equal to `element`...
        let found = false;
        for (const [existingElement, firstSeenIndx] of elementFirstSeenIndx){
            if (isEqual(element, existingElement)) {
                // This is the second occurrence of an item equal to `element`,
                // so store it as a duplicate.
                found = true;
                duplicates.push({
                    element: existingElement,
                    indices: [
                        firstSeenIndx,
                        indx
                    ]
                });
            }
        }
        if (!found) {
            // We haven't seen this element before,
            // so just store the index it was first seen
            elementFirstSeenIndx.set(element, indx);
        }
    }
    return duplicates;
};
const join = (segments, delimiter)=>segments.join(delimiter);
const getPath = (root, path)=>{
    let result = root;
    for (const segment of path){
        if (typeof result !== "object" || result === null) return undefined;
        result = result[segment];
    }
    return result;
};
const intersectUniqueLists = (l, r)=>{
    const intersection = [
        ...l
    ];
    for (const item of r)if (!l.includes(item)) intersection.push(item);
    return intersection;
};
const liftArray = (data)=>Array.isArray(data) ? data : [
        data
    ];
const spliterate = (arr, predicate)=>{
    const result = [
        [],
        []
    ];
    for (const item of arr){
        if (predicate(item)) result[0].push(item);
        else result[1].push(item);
    }
    return result;
};
const ReadonlyArray = Array;
const includes = (array, element)=>array.includes(element);
const range = (length, offset = 0)=>[
        ...new Array(length)
    ].map((_, i)=>i + offset);
const append = (to, value, opts)=>{
    if (to === undefined) {
        return value === undefined ? [] : Array.isArray(value) ? value : [
            value
        ];
    }
    if (opts?.prepend) {
        if (Array.isArray(value)) to.unshift(...value);
        else to.unshift(value);
    } else {
        if (Array.isArray(value)) to.push(...value);
        else to.push(value);
    }
    return to;
};
const conflatenate = (to, elementOrList)=>{
    if (elementOrList === undefined || elementOrList === null) return to ?? [];
    if (to === undefined || to === null) return liftArray(elementOrList);
    return to.concat(elementOrList);
};
const conflatenateAll = (...elementsOrLists)=>elementsOrLists.reduce(conflatenate, []);
const appendUnique = (to, value, opts)=>{
    if (to === undefined) return Array.isArray(value) ? value : [
        value
    ];
    const isEqual = opts?.isEqual ?? ((l, r)=>l === r);
    for (const v of liftArray(value))if (!to.some((existing)=>isEqual(existing, v))) to.push(v);
    return to;
};
const groupBy = (array, discriminant)=>array.reduce((result, item)=>{
        const key = item[discriminant];
        result[key] = append(result[key], item);
        return result;
    }, {});
const arrayEquals = (l, r, opts)=>l.length === r.length && l.every(opts?.isEqual ? (lItem, i)=>opts.isEqual(lItem, r[i]) : (lItem, i)=>lItem === r[i]);
}),
"[project]/node_modules/@ark/util/out/clone.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepClone",
    ()=>deepClone,
    "shallowClone",
    ()=>shallowClone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/objectKinds.js [app-rsc] (ecmascript)");
;
const shallowClone = (input)=>_clone(input, null);
const deepClone = (input)=>_clone(input, new Map());
const _clone = (input, seen)=>{
    if (typeof input !== "object" || input === null) return input;
    if (seen?.has(input)) return seen.get(input);
    const builtinConstructorName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBuiltinNameOfConstructor"])(input.constructor);
    if (builtinConstructorName === "Date") return new Date(input.getTime());
    // we don't try and clone other prototypes here since this we can't guarantee arrow functions attached to the object
    // are rebound in case they reference `this` (see https://x.com/colinhacks/status/1818422039210049985)
    if (builtinConstructorName && builtinConstructorName !== "Array") return input;
    const cloned = Array.isArray(input) ? input.slice() : Object.create(Object.getPrototypeOf(input));
    const propertyDescriptors = Object.getOwnPropertyDescriptors(input);
    if (seen) {
        seen.set(input, cloned);
        for(const k in propertyDescriptors){
            const desc = propertyDescriptors[k];
            if ("get" in desc || "set" in desc) continue;
            desc.value = _clone(desc.value, seen);
        }
    }
    Object.defineProperties(cloned, propertyDescriptors);
    return cloned;
};
}),
"[project]/node_modules/@ark/util/out/domain.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domainDescriptions",
    ()=>domainDescriptions,
    "domainOf",
    ()=>domainOf,
    "hasDomain",
    ()=>hasDomain,
    "jsTypeOfDescriptions",
    ()=>jsTypeOfDescriptions
]);
const hasDomain = (data, kind)=>domainOf(data) === kind;
const domainOf = (data)=>{
    const builtinType = typeof data;
    return builtinType === "object" ? data === null ? "null" : "object" : builtinType === "function" ? "object" : builtinType;
};
const domainDescriptions = {
    boolean: "boolean",
    null: "null",
    undefined: "undefined",
    bigint: "a bigint",
    number: "a number",
    object: "an object",
    string: "a string",
    symbol: "a symbol"
};
const jsTypeOfDescriptions = {
    ...domainDescriptions,
    function: "a function"
};
}),
"[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalArktypeError",
    ()=>InternalArktypeError,
    "ParseError",
    ()=>ParseError,
    "ZeroWidthSpace",
    ()=>ZeroWidthSpace,
    "noSuggest",
    ()=>noSuggest,
    "throwError",
    ()=>throwError,
    "throwInternalError",
    ()=>throwInternalError,
    "throwParseError",
    ()=>throwParseError
]);
class InternalArktypeError extends Error {
}
const throwInternalError = (message)=>throwError(message, InternalArktypeError);
const throwError = (message, ctor = Error)=>{
    throw new ctor(message);
};
class ParseError extends Error {
    name = "ParseError";
}
const throwParseError = (message)=>throwError(message, ParseError);
const noSuggest = (s)=>` ${s}`;
const ZeroWidthSpace = "\u{200B}";
}),
"[project]/node_modules/@ark/util/out/flatMorph.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flatMorph",
    ()=>flatMorph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/arrays.js [app-rsc] (ecmascript)");
;
const flatMorph = (o, flatMapEntry)=>{
    const result = {};
    const inputIsArray = Array.isArray(o);
    let outputShouldBeArray = false;
    for (const [i, entry] of Object.entries(o).entries()){
        const mapped = inputIsArray ? flatMapEntry(i, entry[1]) : flatMapEntry(...entry, i);
        outputShouldBeArray ||= typeof mapped[0] === "number";
        const flattenedEntries = Array.isArray(mapped[0]) || mapped.length === 0 ? // if we have an empty array (for filtering) or an array with
        // another array as its first element, treat it as a list
        mapped : [
            mapped
        ];
        for (const [k, v] of flattenedEntries){
            if (typeof k === "object") result[k.group] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["append"])(result[k.group], v);
            else result[k] = v;
        }
    }
    return outputShouldBeArray ? Object.values(result) : result;
};
}),
"[project]/node_modules/@ark/util/out/functions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Callable",
    ()=>Callable,
    "DynamicFunction",
    ()=>DynamicFunction,
    "cached",
    ()=>cached,
    "envHasCsp",
    ()=>envHasCsp,
    "isThunk",
    ()=>isThunk,
    "tryCatch",
    ()=>tryCatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/records.js [app-rsc] (ecmascript)");
;
;
const cached = (thunk)=>{
    let result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unset"];
    return ()=>result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unset"] ? result = thunk() : result;
};
const isThunk = (value)=>typeof value === "function" && value.length === 0;
const tryCatch = (fn, onError)=>{
    try {
        return fn();
    } catch (e) {
        return onError?.(e);
    }
};
const DynamicFunction = class extends Function {
    constructor(...args){
        const params = args.slice(0, -1);
        const body = args[args.length - 1];
        try {
            super(...params, body);
        } catch (e) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwInternalError"])(`Encountered an unexpected error while compiling your definition:
                Message: ${e} 
                Source: (${args.slice(0, -1)}) => {
                    ${args[args.length - 1]}
                }`);
        }
    }
};
class Callable {
    constructor(fn, ...[opts]){
        return Object.assign(Object.setPrototypeOf(fn.bind(opts?.bind ?? this), this.constructor.prototype), opts?.attach);
    }
}
const envHasCsp = cached(()=>{
    try {
        return new Function("return false")();
    } catch  {
        return true;
    }
});
}),
"[project]/node_modules/@ark/util/out/generics.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brand",
    ()=>brand,
    "inferred",
    ()=>inferred,
    "narrow",
    ()=>narrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
;
const brand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noSuggest"])("brand");
const narrow = (t)=>t;
const inferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noSuggest"])("arkInferred");
}),
"[project]/node_modules/@ark/util/out/hkt.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hkt",
    ()=>Hkt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
;
const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noSuggest"])("args");
class Hkt {
    constructor(){}
}
}),
"[project]/node_modules/@ark/util/out/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$clone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/clone.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/flatMorph.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$functions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/functions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$generics$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/generics.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$hkt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/hkt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$numbers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/numbers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/objectKinds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/records.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$scanner$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/scanner.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/serialize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$traits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/traits.js [app-rsc] (ecmascript)");
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
}),
"[project]/node_modules/@ark/util/out/isomorphic.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isomorphic",
    ()=>isomorphic
]);
// based on the util of the same name in @ark/fs
// isolated here for use with registry
/** get a CJS/ESM compatible string representing the current file */ const fileName = ()=>{
    try {
        const error = new Error();
        const stackLine = error.stack?.split("\n")[2]?.trim() || ""; // [1]=this func, [2]=caller
        const filePath = stackLine.match(/\(?(.+?)(?::\d+:\d+)?\)?$/)?.[1] || "unknown";
        return filePath.replace(/^file:\/\//, "");
    } catch  {
        return "unknown";
    }
};
const env = globalThis.process?.env ?? {};
const isomorphic = {
    fileName,
    env
};
}),
"[project]/node_modules/@ark/util/out/numbers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "integerLikeMatcher",
    ()=>integerLikeMatcher,
    "isNumericString",
    ()=>isNumericString,
    "isWellFormedInteger",
    ()=>isWellFormedInteger,
    "isWellFormedNumber",
    ()=>isWellFormedNumber,
    "nearestFloat",
    ()=>nearestFloat,
    "numberLikeMatcher",
    ()=>numberLikeMatcher,
    "numericStringMatcher",
    ()=>numericStringMatcher,
    "tryParseInteger",
    ()=>tryParseInteger,
    "tryParseNumber",
    ()=>tryParseNumber,
    "tryParseWellFormedBigint",
    ()=>tryParseWellFormedBigint,
    "tryParseWellFormedNumber",
    ()=>tryParseWellFormedNumber,
    "wellFormedIntegerMatcher",
    ()=>wellFormedIntegerMatcher,
    "wellFormedNumberMatcher",
    ()=>wellFormedNumberMatcher,
    "writeMalformedNumericLiteralMessage",
    ()=>writeMalformedNumericLiteralMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/strings.js [app-rsc] (ecmascript)");
;
;
/*
 * The goal of the number literal and bigint literal regular expressions is to:
 *
 *   1. Ensure definitions form a bijection with the values they represent.
 *   2. Attempt to mirror TypeScript's own format for stringification of numeric
 *      values such that the regex should match a given definition if any only if
 *      a precise literal type will be inferred (in TS4.8+).
 */ const anchoredNegativeZeroPattern = /^-0\.?0*$/.source;
const positiveIntegerPattern = /[1-9]\d*/.source;
const looseDecimalPattern = /\.\d+/.source;
const strictDecimalPattern = /\.\d*[1-9]/.source;
const createNumberMatcher = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anchoredRegex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].negativeLookahead(anchoredNegativeZeroPattern) + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup("-?" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup("0|" + positiveIntegerPattern) + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup(opts.decimalPattern) + "?") + (opts.allowDecimalOnly ? "|" + opts.decimalPattern : "") + "?"));
const wellFormedNumberMatcher = createNumberMatcher({
    decimalPattern: strictDecimalPattern,
    allowDecimalOnly: false
});
const isWellFormedNumber = wellFormedNumberMatcher.test.bind(wellFormedNumberMatcher);
const numericStringMatcher = createNumberMatcher({
    decimalPattern: looseDecimalPattern,
    allowDecimalOnly: true
});
const isNumericString = numericStringMatcher.test.bind(numericStringMatcher);
const numberLikeMatcher = /^-?\d*\.?\d*$/;
const isNumberLike = (s)=>s.length !== 0 && numberLikeMatcher.test(s);
const wellFormedIntegerMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anchoredRegex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].negativeLookahead("^-0$") + "-?" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegexPatterns"].nonCapturingGroup("0|" + positiveIntegerPattern)));
const isWellFormedInteger = wellFormedIntegerMatcher.test.bind(wellFormedIntegerMatcher);
const integerLikeMatcher = /^-?\d+$/;
const isIntegerLike = integerLikeMatcher.test.bind(integerLikeMatcher);
const numericLiteralDescriptions = {
    number: "a number",
    bigint: "a bigint",
    integer: "an integer"
};
const writeMalformedNumericLiteralMessage = (def, kind)=>`'${def}' was parsed as ${numericLiteralDescriptions[kind]} but could not be narrowed to a literal value. Avoid unnecessary leading or trailing zeros and other abnormal notation`;
const isWellFormed = (def, kind)=>kind === "number" ? isWellFormedNumber(def) : isWellFormedInteger(def);
const parseKind = (def, kind)=>kind === "number" ? Number(def) : Number.parseInt(def);
const isKindLike = (def, kind)=>kind === "number" ? isNumberLike(def) : isIntegerLike(def);
const tryParseNumber = (token, options)=>parseNumeric(token, "number", options);
const tryParseWellFormedNumber = (token, options)=>parseNumeric(token, "number", {
        ...options,
        strict: true
    });
const tryParseInteger = (token, options)=>parseNumeric(token, "integer", options);
const parseNumeric = (token, kind, options)=>{
    const value = parseKind(token, kind);
    if (!Number.isNaN(value)) {
        if (isKindLike(token, kind)) {
            if (options?.strict) {
                return isWellFormed(token, kind) ? value : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwParseError"])(writeMalformedNumericLiteralMessage(token, kind));
            }
            return value;
        }
    }
    return options?.errorOnFail ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwParseError"])(options?.errorOnFail === true ? `Failed to parse ${numericLiteralDescriptions[kind]} from '${token}'` : options?.errorOnFail) : undefined;
};
const tryParseWellFormedBigint = (def)=>{
    if (def[def.length - 1] !== "n") return;
    const maybeIntegerLiteral = def.slice(0, -1);
    let value;
    try {
        value = BigInt(maybeIntegerLiteral);
    } catch  {
        return;
    }
    if (wellFormedIntegerMatcher.test(maybeIntegerLiteral)) return value;
    if (integerLikeMatcher.test(maybeIntegerLiteral)) {
        // If the definition looks like a bigint but is
        // not well-formed, throw.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwParseError"])(writeMalformedNumericLiteralMessage(def, "bigint"));
    }
};
const nearestFloat = (n, direction = "+")=>{
    const buffer = new ArrayBuffer(8);
    const f64 = new Float64Array(buffer);
    const u32 = new Uint32Array(buffer);
    f64[0] = n;
    if (n === 0) {
        u32[0] = 1;
        u32[1] = direction === "-" ? 1 << 31 : 0;
    } else if (n > 0 && direction === "+" || n < 0 && direction === "-") {
        if (u32[0]++ === 0xffffffff) u32[1]++;
    } else if (u32[0]-- === 0) u32[1]--;
    return f64[0];
};
}),
"[project]/node_modules/@ark/util/out/objectKinds.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileConstructor",
    ()=>FileConstructor,
    "ancestorsOf",
    ()=>ancestorsOf,
    "builtinConstructors",
    ()=>builtinConstructors,
    "constructorExtends",
    ()=>constructorExtends,
    "ecmascriptConstructors",
    ()=>ecmascriptConstructors,
    "ecmascriptDescriptions",
    ()=>ecmascriptDescriptions,
    "getBuiltinNameOfConstructor",
    ()=>getBuiltinNameOfConstructor,
    "hasObjectKind",
    ()=>hasObjectKind,
    "isArray",
    ()=>isArray,
    "objectKindDescriptions",
    ()=>objectKindDescriptions,
    "objectKindOf",
    ()=>objectKindOf,
    "objectKindOrDomainOf",
    ()=>objectKindOrDomainOf,
    "platformConstructors",
    ()=>platformConstructors,
    "platformDescriptions",
    ()=>platformDescriptions,
    "typedArrayConstructors",
    ()=>typedArrayConstructors,
    "typedArrayDescriptions",
    ()=>typedArrayDescriptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/domain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/records.js [app-rsc] (ecmascript)");
;
;
const ecmascriptConstructors = {
    Array,
    Boolean,
    Date,
    Error,
    Function,
    Map,
    Number,
    Promise,
    RegExp,
    Set,
    String,
    WeakMap,
    WeakSet
};
const FileConstructor = globalThis.File ?? Blob;
const platformConstructors = {
    ArrayBuffer,
    Blob,
    File: FileConstructor,
    FormData,
    Headers,
    Request,
    Response,
    URL
};
const typedArrayConstructors = {
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array
};
const builtinConstructors = {
    ...ecmascriptConstructors,
    ...platformConstructors,
    ...typedArrayConstructors,
    String,
    Number,
    Boolean
};
const objectKindOf = (data)=>{
    let prototype = Object.getPrototypeOf(data);
    while(prototype?.constructor && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isKeyOf"])(prototype.constructor.name, builtinConstructors) || !(data instanceof builtinConstructors[prototype.constructor.name])))prototype = Object.getPrototypeOf(prototype);
    const name = prototype?.constructor?.name;
    if (name === undefined || name === "Object") return undefined;
    return name;
};
const objectKindOrDomainOf = (data)=>typeof data === "object" && data !== null ? objectKindOf(data) ?? "object" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOf"])(data);
const hasObjectKind = (data, kind)=>objectKindOf(data) === kind;
const isArray = Array.isArray;
const ecmascriptDescriptions = {
    Array: "an array",
    Function: "a function",
    Date: "a Date",
    RegExp: "a RegExp",
    Error: "an Error",
    Map: "a Map",
    Set: "a Set",
    String: "a String object",
    Number: "a Number object",
    Boolean: "a Boolean object",
    Promise: "a Promise",
    WeakMap: "a WeakMap",
    WeakSet: "a WeakSet"
};
const platformDescriptions = {
    ArrayBuffer: "an ArrayBuffer instance",
    Blob: "a Blob instance",
    File: "a File instance",
    FormData: "a FormData instance",
    Headers: "a Headers instance",
    Request: "a Request instance",
    Response: "a Response instance",
    URL: "a URL instance"
};
const typedArrayDescriptions = {
    Int8Array: "an Int8Array",
    Uint8Array: "a Uint8Array",
    Uint8ClampedArray: "a Uint8ClampedArray",
    Int16Array: "an Int16Array",
    Uint16Array: "a Uint16Array",
    Int32Array: "an Int32Array",
    Uint32Array: "a Uint32Array",
    Float32Array: "a Float32Array",
    Float64Array: "a Float64Array",
    BigInt64Array: "a BigInt64Array",
    BigUint64Array: "a BigUint64Array"
};
const objectKindDescriptions = {
    ...ecmascriptDescriptions,
    ...platformDescriptions,
    ...typedArrayDescriptions
};
const getBuiltinNameOfConstructor = (ctor)=>{
    const constructorName = Object(ctor).name ?? null;
    return constructorName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isKeyOf"])(constructorName, builtinConstructors) && builtinConstructors[constructorName] === ctor ? constructorName : null;
};
const ancestorsOf = (o)=>{
    let proto = Object.getPrototypeOf(o);
    const result = [];
    while(proto !== null){
        result.push(proto.constructor);
        proto = Object.getPrototypeOf(proto);
    }
    return result;
};
const constructorExtends = (ctor, base)=>{
    let current = ctor.prototype;
    while(current !== null){
        if (current === base.prototype) return true;
        current = Object.getPrototypeOf(current);
    }
    return false;
};
}),
"[project]/node_modules/@ark/util/out/path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadonlyPath",
    ()=>ReadonlyPath,
    "appendStringifiedKey",
    ()=>appendStringifiedKey,
    "stringifyPath",
    ()=>stringifyPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/arrays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/serialize.js [app-rsc] (ecmascript)");
;
;
;
;
const appendStringifiedKey = (path, prop, ...[opts])=>{
    const stringifySymbol = opts?.stringifySymbol ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["printable"];
    let propAccessChain = path;
    switch(typeof prop){
        case "string":
            propAccessChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDotAccessible"])(prop) ? path === "" ? prop : `${path}.${prop}` : `${path}[${JSON.stringify(prop)}]`;
            break;
        case "number":
            propAccessChain = `${path}[${prop}]`;
            break;
        case "symbol":
            propAccessChain = `${path}[${stringifySymbol(prop)}]`;
            break;
        default:
            if (opts?.stringifyNonKey) propAccessChain = `${path}[${opts.stringifyNonKey(prop)}]`;
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwParseError"])(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["printable"])(prop)} must be a PropertyKey or stringifyNonKey must be passed to options`);
            }
    }
    return propAccessChain;
};
const stringifyPath = (path, ...opts)=>path.reduce((s, k)=>appendStringifiedKey(s, k, ...opts), "");
class ReadonlyPath extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$arrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReadonlyArray"] {
    // alternate strategy for caching since the base object is frozen
    cache = {};
    constructor(...items){
        super();
        this.push(...items);
    }
    toJSON() {
        if (this.cache.json) return this.cache.json;
        this.cache.json = [];
        for(let i = 0; i < this.length; i++){
            this.cache.json.push(typeof this[i] === "symbol" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["printable"])(this[i]) : this[i]);
        }
        return this.cache.json;
    }
    stringify() {
        if (this.cache.stringify) return this.cache.stringify;
        return this.cache.stringify = stringifyPath(this);
    }
    stringifyAncestors() {
        if (this.cache.stringifyAncestors) return this.cache.stringifyAncestors;
        let propString = "";
        const result = [
            propString
        ];
        for (const path of this){
            propString = appendStringifiedKey(propString, path);
            result.push(propString);
        }
        return this.cache.stringifyAncestors = result;
    }
}
}),
"[project]/node_modules/@ark/util/out/primitive.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializePrimitive",
    ()=>serializePrimitive
]);
const serializePrimitive = (value)=>typeof value === "string" ? JSON.stringify(value) : typeof value === "bigint" ? `${value}n` : `${value}`;
}),
"[project]/node_modules/@ark/util/out/records.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CastableBase",
    ()=>CastableBase,
    "DynamicBase",
    ()=>DynamicBase,
    "InnerDynamicBase",
    ()=>InnerDynamicBase,
    "NoopBase",
    ()=>NoopBase,
    "defineProperties",
    ()=>defineProperties,
    "entriesOf",
    ()=>entriesOf,
    "enumValues",
    ()=>enumValues,
    "fromEntries",
    ()=>fromEntries,
    "hasDefinedKey",
    ()=>hasDefinedKey,
    "hasKey",
    ()=>hasKey,
    "invert",
    ()=>invert,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isKeyOf",
    ()=>isKeyOf,
    "keysOf",
    ()=>keysOf,
    "omit",
    ()=>omit,
    "pick",
    ()=>pick,
    "splitByKeys",
    ()=>splitByKeys,
    "stringAndSymbolicEntriesOf",
    ()=>stringAndSymbolicEntriesOf,
    "unset",
    ()=>unset,
    "withAlphabetizedKeys",
    ()=>withAlphabetizedKeys
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/flatMorph.js [app-rsc] (ecmascript)");
;
;
const entriesOf = Object.entries;
const fromEntries = (entries)=>Object.fromEntries(entries);
const keysOf = (o)=>Object.keys(o);
const isKeyOf = (k, o)=>k in o;
const hasKey = (o, k)=>k in o;
const hasDefinedKey = (o, k)=>o[k] !== undefined;
const InnerDynamicBase = class {
};
class DynamicBase {
    constructor(properties){
        Object.assign(this, properties);
    }
}
const NoopBase = class {
};
class CastableBase extends NoopBase {
}
const splitByKeys = (o, leftKeys)=>{
    const l = {};
    const r = {};
    let k;
    for(k in o){
        if (k in leftKeys) l[k] = o[k];
        else r[k] = o[k];
    }
    return [
        l,
        r
    ];
};
const pick = (o, keys)=>splitByKeys(o, keys)[0];
const omit = (o, keys)=>splitByKeys(o, keys)[1];
const isEmptyObject = (o)=>Object.keys(o).length === 0;
const stringAndSymbolicEntriesOf = (o)=>[
        ...Object.entries(o),
        ...Object.getOwnPropertySymbols(o).map((k)=>[
                k,
                o[k]
            ])
    ];
const defineProperties = (base, merged)=>// declared like this to avoid https://github.com/microsoft/TypeScript/issues/55049
    Object.defineProperties(base, Object.getOwnPropertyDescriptors(merged));
const withAlphabetizedKeys = (o)=>{
    const keys = Object.keys(o).sort();
    const result = {};
    for(let i = 0; i < keys.length; i++)result[keys[i]] = o[keys[i]];
    return result;
};
const invert = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$flatMorph$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flatMorph"])(t, (k, v)=>[
            v,
            k
        ]);
const unset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noSuggest"])(`unset${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZeroWidthSpace"]}`);
const enumValues = (tsEnum)=>Object.values(tsEnum).filter((v)=>{
        if (typeof v === "number") return true;
        return typeof tsEnum[v] !== "number";
    });
}),
"[project]/node_modules/@ark/util/out/registry.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arkUtilVersion",
    ()=>arkUtilVersion,
    "initialRegistryContents",
    ()=>initialRegistryContents,
    "isDotAccessible",
    ()=>isDotAccessible,
    "register",
    ()=>register,
    "registry",
    ()=>registry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/domain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$isomorphic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/isomorphic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/objectKinds.js [app-rsc] (ecmascript)");
;
;
;
;
const arkUtilVersion = "0.56.2";
const initialRegistryContents = {
    version: arkUtilVersion,
    filename: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$isomorphic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isomorphic"].fileName(),
    FileConstructor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FileConstructor"]
};
const registry = initialRegistryContents;
const namesByResolution = new Map();
const nameCounts = Object.create(null);
const register = (value)=>{
    const existingName = namesByResolution.get(value);
    if (existingName) return existingName;
    let name = baseNameFor(value);
    if (nameCounts[name]) name = `${name}${nameCounts[name]++}`;
    else nameCounts[name] = 1;
    registry[name] = value;
    namesByResolution.set(value, name);
    return name;
};
const isDotAccessible = (keyName)=>/^[$A-Z_a-z][\w$]*$/.test(keyName);
const baseNameFor = (value)=>{
    switch(typeof value){
        case "object":
            {
                if (value === null) break;
                const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["objectKindOf"])(value) ?? "object";
                // convert to camelCase
                return prefix[0].toLowerCase() + prefix.slice(1);
            }
        case "function":
            return isDotAccessible(value.name) ? value.name : "fn";
        case "symbol":
            return value.description && isDotAccessible(value.description) ? value.description : "symbol";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["throwInternalError"])(`Unexpected attempt to register serializable value of type ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOf"])(value)}`);
};
}),
"[project]/node_modules/@ark/util/out/scanner.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scanner",
    ()=>Scanner,
    "writeUnclosedGroupMessage",
    ()=>writeUnclosedGroupMessage,
    "writeUnmatchedGroupCloseMessage",
    ()=>writeUnmatchedGroupCloseMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/strings.js [app-rsc] (ecmascript)");
;
class Scanner {
    chars;
    i;
    def;
    constructor(def){
        this.def = def;
        this.chars = [
            ...def
        ];
        this.i = 0;
    }
    /** Get lookahead and advance scanner by one */ shift() {
        return this.chars[this.i++] ?? "";
    }
    get lookahead() {
        return this.chars[this.i] ?? "";
    }
    get nextLookahead() {
        return this.chars[this.i + 1] ?? "";
    }
    get length() {
        return this.chars.length;
    }
    shiftUntil(condition) {
        let shifted = "";
        while(this.lookahead){
            if (condition(this, shifted)) break;
            else shifted += this.shift();
        }
        return shifted;
    }
    shiftUntilEscapable(condition) {
        let shifted = "";
        while(this.lookahead){
            if (this.lookahead === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Backslash"]) {
                this.shift();
                if (condition(this, shifted)) shifted += this.shift();
                else if (this.lookahead === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Backslash"]) shifted += this.shift();
                else shifted += `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Backslash"]}${this.shift()}`;
            } else if (condition(this, shifted)) break;
            else shifted += this.shift();
        }
        return shifted;
    }
    shiftUntilLookahead(charOrSet) {
        return typeof charOrSet === "string" ? this.shiftUntil((s)=>s.lookahead === charOrSet) : this.shiftUntil((s)=>s.lookahead in charOrSet);
    }
    shiftUntilNonWhitespace() {
        return this.shiftUntil(()=>!(this.lookahead in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$strings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whitespaceChars"]));
    }
    jumpToIndex(i) {
        this.i = i < 0 ? this.length + i : i;
    }
    jumpForward(count) {
        this.i += count;
    }
    get location() {
        return this.i;
    }
    get unscanned() {
        return this.chars.slice(this.i, this.length).join("");
    }
    get scanned() {
        return this.chars.slice(0, this.i).join("");
    }
    sliceChars(start, end) {
        return this.chars.slice(start, end).join("");
    }
    lookaheadIs(char) {
        return this.lookahead === char;
    }
    lookaheadIsIn(tokens) {
        return this.lookahead in tokens;
    }
}
const writeUnmatchedGroupCloseMessage = (char, unscanned)=>`Unmatched ${char}${unscanned === "" ? "" : ` before ${unscanned}`}`;
const writeUnclosedGroupMessage = (missingChar)=>`Missing ${missingChar}`;
}),
"[project]/node_modules/@ark/util/out/serialize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeCollapsibleDate",
    ()=>describeCollapsibleDate,
    "print",
    ()=>print,
    "printable",
    ()=>printable,
    "snapshot",
    ()=>snapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/domain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/primitive.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/records.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/registry.js [app-rsc] (ecmascript)");
;
;
;
;
const snapshot = (data, opts = {})=>_serialize(data, {
        onUndefined: `$ark.undefined`,
        onBigInt: (n)=>`$ark.bigint-${n}`,
        ...opts
    }, []);
const print = (data, opts)=>console.log(printable(data, opts));
const printable = (data, opts)=>{
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOf"])(data)){
        case "object":
            const o = data;
            const ctorName = o.constructor?.name ?? "Object";
            return ctorName === "Object" || ctorName === "Array" ? opts?.quoteKeys === false ? stringifyUnquoted(o, opts?.indent ?? 0, "") : JSON.stringify(_serialize(o, printableOpts, []), null, opts?.indent) : stringifyUnquoted(o, opts?.indent ?? 0, "");
        case "symbol":
            return printableOpts.onSymbol(data);
        default:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializePrimitive"])(data);
    }
};
const stringifyUnquoted = (value, indent, currentIndent)=>{
    if (typeof value === "function") return printableOpts.onFunction(value);
    if (typeof value !== "object" || value === null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$primitive$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializePrimitive"])(value);
    const nextIndent = currentIndent + " ".repeat(indent);
    if (Array.isArray(value)) {
        if (value.length === 0) return "[]";
        const items = value.map((item)=>stringifyUnquoted(item, indent, nextIndent)).join(",\n" + nextIndent);
        return indent ? `[\n${nextIndent}${items}\n${currentIndent}]` : `[${items}]`;
    }
    const ctorName = value.constructor?.name ?? "Object";
    if (ctorName === "Object") {
        const keyValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringAndSymbolicEntriesOf"])(value).map(([key, val])=>{
            const stringifiedKey = typeof key === "symbol" ? printableOpts.onSymbol(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDotAccessible"])(key) ? key : JSON.stringify(key);
            const stringifiedValue = stringifyUnquoted(val, indent, nextIndent);
            return `${nextIndent}${stringifiedKey}: ${stringifiedValue}`;
        });
        if (keyValues.length === 0) return "{}";
        return indent ? `{\n${keyValues.join(",\n")}\n${currentIndent}}` : `{${keyValues.join(", ")}}`;
    }
    if (value instanceof Date) return describeCollapsibleDate(value);
    if ("expression" in value && typeof value.expression === "string") return value.expression;
    return ctorName;
};
const printableOpts = {
    onCycle: ()=>"(cycle)",
    onSymbol: (v)=>`Symbol(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"])(v)})`,
    onFunction: (v)=>`Function(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"])(v)})`
};
const _serialize = (data, opts, seen)=>{
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domainOf"])(data)){
        case "object":
            {
                const o = data;
                if ("toJSON" in o && typeof o.toJSON === "function") return o.toJSON();
                if (typeof o === "function") return printableOpts.onFunction(o);
                if (seen.includes(o)) return "(cycle)";
                const nextSeen = [
                    ...seen,
                    o
                ];
                if (Array.isArray(o)) return o.map((item)=>_serialize(item, opts, nextSeen));
                if (o instanceof Date) return o.toDateString();
                const result = {};
                for(const k in o)result[k] = _serialize(o[k], opts, nextSeen);
                for (const s of Object.getOwnPropertySymbols(o)){
                    result[opts.onSymbol?.(s) ?? s.toString()] = _serialize(o[s], opts, nextSeen);
                }
                return result;
            }
        case "symbol":
            return printableOpts.onSymbol(data);
        case "bigint":
            return opts.onBigInt?.(data) ?? `${data}n`;
        case "undefined":
            return opts.onUndefined ?? "undefined";
        case "string":
            return data.replace(/\\/g, "\\\\");
        default:
            return data;
    }
};
const describeCollapsibleDate = (date)=>{
    const year = date.getFullYear();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    if (month === 0 && dayOfMonth === 1 && hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) return `${year}`;
    const datePortion = `${months[month]} ${dayOfMonth}, ${year}`;
    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0) return datePortion;
    let timePortion = date.toLocaleTimeString();
    const suffix = timePortion.endsWith(" AM") || timePortion.endsWith(" PM") ? timePortion.slice(-3) : "";
    if (suffix) timePortion = timePortion.slice(0, -suffix.length);
    if (milliseconds) timePortion += `.${pad(milliseconds, 3)}`;
    else if (timeWithUnnecessarySeconds.test(timePortion)) timePortion = timePortion.slice(0, -3);
    return `${timePortion + suffix}, ${datePortion}`;
};
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const timeWithUnnecessarySeconds = /:\d\d:00$/;
const pad = (value, length)=>String(value).padStart(length, "0");
}),
"[project]/node_modules/@ark/util/out/strings.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backslash",
    ()=>Backslash,
    "RegexPatterns",
    ()=>RegexPatterns,
    "alphabet",
    ()=>alphabet,
    "anchoredRegex",
    ()=>anchoredRegex,
    "anchoredSource",
    ()=>anchoredSource,
    "capitalize",
    ()=>capitalize,
    "deanchoredRegex",
    ()=>deanchoredRegex,
    "deanchoredSource",
    ()=>deanchoredSource,
    "emojiToUnicode",
    ()=>emojiToUnicode,
    "uncapitalize",
    ()=>uncapitalize,
    "whitespaceChars",
    ()=>whitespaceChars
]);
const capitalize = (s)=>s[0].toUpperCase() + s.slice(1);
const uncapitalize = (s)=>s[0].toLowerCase() + s.slice(1);
const anchoredRegex = (regex)=>new RegExp(anchoredSource(regex), typeof regex === "string" ? "" : regex.flags);
const deanchoredRegex = (regex)=>new RegExp(deanchoredSource(regex), typeof regex === "string" ? "" : regex.flags);
const anchoredSource = (regex)=>{
    const source = typeof regex === "string" ? regex : regex.source;
    return `^(?:${source})$`;
};
const deanchoredSource = (regex)=>{
    const source = typeof regex === "string" ? regex : regex.source;
    if (source.startsWith("^(?:") && source.endsWith(")$")) return source.slice(4, -2);
    return source.slice(source[0] === "^" ? 1 : 0, source[source.length - 1] === "$" ? -1 : undefined);
};
const RegexPatterns = {
    negativeLookahead: (pattern)=>`(?!${pattern})`,
    nonCapturingGroup: (pattern)=>`(?:${pattern})`
};
const Backslash = "\\";
const whitespaceChars = {
    " ": 1,
    "\n": 1,
    "\t": 1
};
const emojiToUnicode = (emoji)=>emoji.split("").map((char)=>{
        const codePoint = char.codePointAt(0);
        return codePoint ? `\\u${codePoint.toString(16).padStart(4, "0")}` : "";
    }).join("");
const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
}),
"[project]/node_modules/@ark/util/out/traits.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trait",
    ()=>Trait,
    "compose",
    ()=>compose,
    "hasTrait",
    ()=>hasTrait,
    "implement",
    ()=>implement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/domain.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/objectKinds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ark/util/out/records.js [app-rsc] (ecmascript)");
;
;
;
;
// even though the value we attach will be identical, we use this so classes
// won't be treated as instanceof a Trait
const implementedTraits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noSuggest"])("implementedTraits");
const hasTrait = (traitClass)=>(o)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$domain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasDomain"])(o, "object")) return false;
        if (implementedTraits in o.constructor && o.constructor[implementedTraits].includes(traitClass)) return true;
        // emulate standard instanceof behavior
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$objectKinds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ancestorsOf"])(o).includes(traitClass);
    };
class Trait extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ark$2f$util$2f$out$2f$records$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NoopBase"] {
    static get [Symbol.hasInstance]() {
        return hasTrait(this);
    }
    traitsOf() {
        return implementedTraits in this.constructor ? this.constructor[implementedTraits] : [];
    }
}
const collectPrototypeDescriptors = (trait)=>{
    let proto = trait.prototype;
    let result = {};
    do {
        // ensure prototypes are sorted from lowest to highest precedence
        result = Object.assign(Object.getOwnPropertyDescriptors(proto), result);
        proto = Object.getPrototypeOf(proto);
    }while (proto !== Object.prototype && proto !== null)
    return result;
};
const compose = (...traits)=>{
    const base = function(...args) {
        for (const trait of traits){
            const instance = Reflect.construct(trait, args, this.constructor);
            Object.assign(this, instance);
        }
    };
    const flatImplementedTraits = [];
    for (const trait of traits){
        // copy static properties
        Object.assign(base, trait);
        // flatten and copy prototype
        Object.defineProperties(base.prototype, collectPrototypeDescriptors(trait));
        if (implementedTraits in trait) {
            // add any ancestor traits from which the current trait was composed
            for (const innerTrait of trait[implementedTraits]){
                if (!flatImplementedTraits.includes(innerTrait)) flatImplementedTraits.push(innerTrait);
            }
        }
        if (!flatImplementedTraits.includes(trait)) flatImplementedTraits.push(trait);
    }
    Object.defineProperty(base, implementedTraits, {
        value: flatImplementedTraits,
        enumerable: false
    });
    return base;
};
const implement = (...args)=>{
    if (args[args.length - 1] instanceof Trait) return compose(...args);
    const implementation = args[args.length - 1];
    const base = compose(...args.slice(0, -1));
    // copy implementation last since it overrides traits
    Object.defineProperties(base.prototype, Object.getOwnPropertyDescriptors(implementation));
    return base;
};
}),
"[project]/node_modules/@noble/hashes/_u64.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "add3H",
    ()=>add3H,
    "add3L",
    ()=>add3L,
    "add4H",
    ()=>add4H,
    "add4L",
    ()=>add4L,
    "add5H",
    ()=>add5H,
    "add5L",
    ()=>add5L,
    "fromBig",
    ()=>fromBig,
    "fromNumH",
    ()=>fromNumH,
    "fromNumL",
    ()=>fromNumL,
    "rotr32H",
    ()=>rotr32H,
    "rotr32L",
    ()=>rotr32L,
    "rotrBH",
    ()=>rotrBH,
    "rotrBL",
    ()=>rotrBL,
    "rotrSH",
    ()=>rotrSH,
    "rotrSL",
    ()=>rotrSL,
    "setU64FromNum",
    ()=>setU64FromNum,
    "shrSH",
    ()=>shrSH,
    "shrSL",
    ()=>shrSL,
    "split",
    ()=>split,
    "toBig",
    ()=>toBig
]);
const U32_MASK64 = /* @__PURE__ */ (()=>BigInt(2 ** 32 - 1))();
const _32n = /* @__PURE__ */ BigInt(32);
// Split bigint into two 32-bit halves. With `le=true`, returned fields become `{ h: low, l: high
// }` to match little-endian word order rather than the property names.
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
// Split bigint list into `[highWords, lowWords]` when `le=false`; with `le=true`, the first array
// holds the low halves because `fromBig(...)` swaps the semantic meaning of `h` and `l`.
function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
// Combine explicit `(high, low)` 32-bit halves into a bigint; `>>> 0` normalizes signed JS
// bitwise results back to uint32 first, and little-endian callers must swap.
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
// Split a JS number into u32 halves without a BigInt allocation. Exact only for integers
// `0 <= n < 2**53`; callers use it on byte / bit counters, which JS length math caps far below
// that (an ArrayBuffer cannot exceed 2**53 - 1 bytes).
const fromNumH = (n)=>n / 2 ** 32 | 0;
const fromNumL = (n)=>n >>> 0;
// Drop-in replacement for `view.setBigUint64(byteOffset, BigInt(n), isLE)` without the per-call
// BigInt allocation. Same `n < 2**53` precondition as `fromNumH`/`fromNumL`.
function setU64FromNum(view, byteOffset, n, isLE) {
    const h = fromNumH(n);
    const l = fromNumL(n);
    view.setUint32(byteOffset, isLE ? l : h, isLE);
    view.setUint32(byteOffset + 4, isLE ? h : l, isLE);
}
// High 32-bit half of a 64-bit logical right shift for `s` in `0..31`.
const shrSH = (h, _l, s)=>h >>> s;
// Low 32-bit half of a 64-bit logical right shift, valid for `s` in `1..31`.
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// High 32-bit half of a 64-bit right rotate, valid for `s` in `1..31`.
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
// Low 32-bit half of a 64-bit right rotate, valid for `s` in `1..31`.
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// High 32-bit half of a 64-bit right rotate, valid for `s` in `33..63`; `32` uses `rotr32*`.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
// Low 32-bit half of a 64-bit right rotate, valid for `s` in `33..63`; `32` uses `rotr32*`.
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// High 32-bit half of a 64-bit right rotate for `s === 32`; this is just the swapped low half.
const rotr32H = (_h, l)=>l;
// Low 32-bit half of a 64-bit right rotate for `s === 32`; this is just the swapped high half.
const rotr32L = (h, _l)=>h;
// 64-bit left rotates (rotl*) are not defined here: sha3.ts, their only consumer, keeps
// local copies so V8 inlines them into keccakP.
// Add two split 64-bit words and return the split `{ h, l }` sum.
// JS uses 32-bit signed integers for bitwise operations, so we cannot simply shift the carry out
// of the low sum and instead use division.
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
// Addition with more than 2 elements
// Unmasked low-word accumulator for 3-way addition; pass the raw result into `add3H(...)`.
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
// High-word finalize step for 3-way addition; `low` must be the untruncated output of `add3L(...)`.
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
// Unmasked low-word accumulator for 4-way addition; pass the raw result into `add4H(...)`.
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
// High-word finalize step for 4-way addition; `low` must be the untruncated output of `add4L(...)`.
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
// Unmasked low-word accumulator for 5-way addition; pass the raw result into `add5H(...)`.
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
// High-word finalize step for 5-way addition; `low` must be the untruncated output of `add5L(...)`.
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
;
}),
"[project]/node_modules/@noble/hashes/sha3.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Keccak",
    ()=>Keccak,
    "keccakP",
    ()=>keccakP,
    "keccak_224",
    ()=>keccak_224,
    "keccak_256",
    ()=>keccak_256,
    "keccak_384",
    ()=>keccak_384,
    "keccak_512",
    ()=>keccak_512,
    "sha3_224",
    ()=>sha3_224,
    "sha3_256",
    ()=>sha3_256,
    "sha3_384",
    ()=>sha3_384,
    "sha3_512",
    ()=>sha3_512,
    "shake128",
    ()=>shake128,
    "shake128_32",
    ()=>shake128_32,
    "shake256",
    ()=>shake256,
    "shake256_64",
    ()=>shake256_64
]);
/**
 * SHA3 (keccak) hash function, based on a new "Sponge function" design.
 * Different from older hashes, the internal state is bigger than output size.
 *
 * Check out
 * {@link https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf | FIPS-202},
 * {@link https://keccak.team/keccak.html | Website}, and
 * {@link https://crypto.stackexchange.com/q/15727 | the differences between
 * SHA-3 and Keccak}.
 *
 * Check out `sha3-addons` module for cSHAKE, k12, and others.
 * @module
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/_u64.js [app-rsc] (ecmascript)");
// prettier-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
;
;
// No __PURE__ annotations in sha3 header:
// EVERYTHING is in fact used on every export.
// Various per round constants calculations
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
// FIPS 202 Algorithm 5 rc(): when the outgoing bit is 1, the 8-bit LFSR xors
// taps 0, 4, 5, and 6, which compresses to the feedback mask `0x71`.
const _0x71n = BigInt(0x71);
const SHA3_PI = [];
const SHA3_ROTL = [];
const _SHA3_IOTA = []; // no pure annotation: var is always used
for(let round = 0, R = _1n, x = 1, y = 0; round < 24; round++){
    // Pi
    [x, y] = [
        y,
        (2 * x + 3 * y) % 5
    ];
    SHA3_PI.push(2 * (5 * y + x));
    // Rotational
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    // Iota
    let t = _0n;
    for(let j = 0; j < 7; j++){
        R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
        if (R & _2n) t ^= _1n << (_1n << BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
}
const IOTAS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$_u64$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["split"])(_SHA3_IOTA, true);
// `split(..., true)` keeps the local little-endian lane-word layout used by
// `state32`, so these `H` / `L` tables follow the file's first-word /
// second-word lane slots rather than `_u64.ts`'s usual high/low naming.
const SHA3_IOTA_H = IOTAS[0];
const SHA3_IOTA_L = IOTAS[1];
// 64-bit left rotates as u32 pairs. Inlined here (not imported from _u64) so V8 can
// inline them into keccakP — the import path costs ~24% on sha3_256. SHA3 is the only
// consumer of left-rotates; other hashes use right-rotates from _u64.
// Valid for s in 1..31 (SH/SL) and 33..63 (BH/BL); keccak never rotates by 0/32/64.
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
const rotlH = (h, l, s)=>s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
const rotlL = (h, l, s)=>s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
// Reused Theta scratch buffer (column parities), same pattern as SHA256_W in sha2.
// keccakP never calls user code, so the shared buffer cannot be observed mid-permutation.
const B = new Uint32Array(5 * 2);
function keccakP(s, rounds = 24) {
    if (!(s instanceof Uint32Array)) throw new TypeError('"s" expected Uint32Array(50), got type=' + typeof s);
    if (s.length !== 50) throw new RangeError('"s" expected Uint32Array(50), got length=' + s.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(rounds, 'rounds');
    // This implementation precomputes only the standard Keccak-f[1600] 24-round Iota table.
    if (rounds < 1 || rounds > 24) throw new Error('"rounds" expected integer 1..24');
    // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
    for(let round = 24 - rounds; round < 24; round++){
        // Theta θ
        for(let x = 0; x < 10; x++)B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
        for(let x = 0; x < 10; x += 2){
            const idx1 = (x + 8) % 10;
            const idx0 = (x + 2) % 10;
            const B0 = B[idx0];
            const B1 = B[idx0 + 1];
            const Th = rotlH(B0, B1, 1) ^ B[idx1];
            const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
            for(let y = 0; y < 50; y += 10){
                s[x + y] ^= Th;
                s[x + y + 1] ^= Tl;
            }
        }
        // Rho (ρ) and Pi (π)
        let curH = s[2];
        let curL = s[3];
        for(let t = 0; t < 24; t++){
            const shift = SHA3_ROTL[t];
            const Th = rotlH(curH, curL, shift);
            const Tl = rotlL(curH, curL, shift);
            const PI = SHA3_PI[t];
            curH = s[PI];
            curL = s[PI + 1];
            s[PI] = Th;
            s[PI + 1] = Tl;
        }
        // Chi (χ)
        // Same as:
        // for (let x = 0; x < 10; x++) B[x] = s[y + x];
        // for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
        for(let y = 0; y < 50; y += 10){
            const b0 = s[y], b1 = s[y + 1], b2 = s[y + 2], b3 = s[y + 3];
            s[y] ^= ~s[y + 2] & s[y + 4];
            s[y + 1] ^= ~s[y + 3] & s[y + 5];
            s[y + 2] ^= ~s[y + 4] & s[y + 6];
            s[y + 3] ^= ~s[y + 5] & s[y + 7];
            s[y + 4] ^= ~s[y + 6] & s[y + 8];
            s[y + 5] ^= ~s[y + 7] & s[y + 9];
            s[y + 6] ^= ~s[y + 8] & b0;
            s[y + 7] ^= ~s[y + 9] & b1;
            s[y + 8] ^= ~b0 & b2;
            s[y + 9] ^= ~b1 & b3;
        }
        // Iota (ι)
        s[0] ^= SHA3_IOTA_H[round];
        s[1] ^= SHA3_IOTA_L[round];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(B);
}
class Keccak {
    state;
    pos = 0;
    posOut = 0;
    finished = false;
    state32;
    destroyed = false;
    blockLen;
    suffix;
    outputLen;
    canXOF;
    enableXOF = false;
    rounds;
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(blockLen, 'blockLen');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(suffix, 'suffix');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(rounds, 'rounds');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abool"])(enableXOF, 'enableXOF');
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.canXOF = enableXOF;
        this.rounds = rounds;
        // Can be passed from user as dkLen
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(outputLen, 'outputLen');
        // Only keccak-f1600 is supported: 1600 bits (5x5 matrix of 64bit) === 200 bytes of state.
        if (!(0 < blockLen && blockLen < 200)) throw new Error('"blockLen" must be 1..199');
        this.state = new Uint8Array(200);
        this.state32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(this.state);
    }
    clone() {
        return this._cloneInto();
    }
    keccak() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        keccakP(this.state32, this.rounds);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["swap32IfBE"])(this.state32);
        this.posOut = 0;
        this.pos = 0;
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(data);
        const { blockLen, state, state32 } = this;
        const len = data.length;
        // Absorb full blocks with u32 XORs when both sides are 4-byte aligned.
        // XOR of same-position words equals XOR of same-position bytes, so this is endianness-safe.
        const canUseU32 = blockLen % 4 === 0 && data.byteOffset % 4 === 0;
        const blockLen32 = blockLen / 4;
        const data32 = canUseU32 && len >= blockLen ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u32"])(data) : undefined;
        for(let pos = 0; pos < len;){
            if (data32 !== undefined && this.pos === 0 && pos % 4 === 0 && len - pos >= blockLen) {
                for(let i = 0, o = pos / 4; i < blockLen32; i++)state32[i] ^= data32[o + i];
                pos += blockLen;
                // Subclasses (_KeccakPRG) read `this.pos` inside their `keccak()` override,
                // so it must reflect the fully-absorbed block before the permutation fires.
                this.pos = blockLen;
                this.keccak();
                continue;
            }
            const take = Math.min(blockLen - this.pos, len - pos);
            for(let i = 0; i < take; i++)state[this.pos++] ^= data[pos++];
            if (this.pos === blockLen) this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        // FIPS 202 appends the SHA3/SHAKE domain-separation suffix before pad10*1.
        // These byte values already include the first padding bit, while the
        // final `0x80` below supplies the closing `1` bit in the last rate byte.
        state[pos] ^= suffix;
        // If that combined suffix lands in the last rate byte and already sets
        // bit 7, absorb it first so the final pad10*1 bit can be xored into a
        // fresh block.
        if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
        state[blockLen - 1] ^= 0x80;
        this.keccak();
    }
    writeInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aexists"])(this, false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["abytes"])(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for(let pos = 0, len = out.length; pos < len;){
            if (this.posOut >= blockLen) this.keccak();
            const take = Math.min(blockLen - this.posOut, len - pos);
            out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
            this.posOut += take;
            pos += take;
        }
        return out;
    }
    xofInto(out) {
        // Plain SHA3/Keccak usage with XOF is probably a mistake, but this base
        // class is also reused by SHAKE/cSHAKE/KMAC/TupleHash/ParallelHash/
        // TurboSHAKE/KangarooTwelve wrappers that intentionally enable XOF.
        if (!this.enableXOF) throw new Error('XOF is not enabled');
        return this.writeInto(out);
    }
    xof(bytes) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["anumber"])(bytes);
        return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        if (this.finished) throw new Error('digest() was already called');
        // `aoutput(...)` allows oversized buffers; digestInto() must fill only the advertised digest.
        this.writeInto(out.length === this.outputLen ? out : out.subarray(0, this.outputLen));
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.outputLen);
        this.digestInto(out);
        return out;
    }
    destroy() {
        this.destroyed = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clean"])(this.state);
    }
    _cloneInto(to) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to ||= new Keccak(blockLen, suffix, outputLen, enableXOF, rounds);
        // Reused destinations can come from a different rate/capacity variant, so clone must rewrite
        // the sponge geometry as well as the state words.
        to.blockLen = blockLen;
        to.state32.set(this.state32);
        // Sponge padding and XOF output are positional, so both offsets are part of the clone state.
        to.pos = this.pos;
        to.posOut = this.posOut;
        to.finished = this.finished;
        to.rounds = rounds;
        // Suffix can change in cSHAKE
        to.suffix = suffix;
        to.outputLen = outputLen;
        to.enableXOF = enableXOF;
        // Clones must preserve the public capability bit too; `_KMAC` reuses this path and deep clone
        // tests compare instance fields directly, so leaving `canXOF` behind makes the clone lie.
        to.canXOF = this.canXOF;
        to.destroyed = this.destroyed;
        return to;
    }
}
const genKeccak = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])(()=>new Keccak(blockLen, suffix, outputLen), info);
const sha3_224 = /* @__PURE__ */ genKeccak(0x06, 144, 28, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x07));
const sha3_256 = /* @__PURE__ */ genKeccak(0x06, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x08));
const sha3_384 = /* @__PURE__ */ genKeccak(0x06, 104, 48, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x09));
const sha3_512 = /* @__PURE__ */ genKeccak(0x06, 72, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0a));
const keccak_224 = /* @__PURE__ */ genKeccak(0x01, 144, 28);
const keccak_256 = /* @__PURE__ */ genKeccak(0x01, 136, 32);
const keccak_384 = /* @__PURE__ */ genKeccak(0x01, 104, 48);
const keccak_512 = /* @__PURE__ */ genKeccak(0x01, 72, 64);
const genShake = (suffix, blockLen, outputLen, info = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHasher"])((opts = {})=>{
        opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkOpts"])({}, opts);
        return new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true);
    }, info);
const shake128 = /* @__PURE__ */ genShake(0x1f, 168, 16, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256 = /* @__PURE__ */ genShake(0x1f, 136, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
const shake128_32 = /* @__PURE__ */ genShake(0x1f, 168, 32, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0b));
const shake256_64 = /* @__PURE__ */ genShake(0x1f, 136, 64, /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oidNist"])(0x0c));
}),
"[project]/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if something is Uint8Array. Be careful: nodejs Buffer will return true.
 * @param a - value to test
 * @returns `true` when the value is a Uint8Array-compatible view.
 * @example
 * Check whether a value is a Uint8Array-compatible view.
 * ```ts
 * isBytes(new Uint8Array([1, 2, 3]));
 * ```
 */ __turbopack_context__.s([
    "abool",
    ()=>abool,
    "abytes",
    ()=>abytes,
    "aexists",
    ()=>aexists,
    "ahash",
    ()=>ahash,
    "anumber",
    ()=>anumber,
    "aoutput",
    ()=>aoutput,
    "asyncLoop",
    ()=>asyncLoop,
    "byteSwap",
    ()=>byteSwap,
    "byteSwap32",
    ()=>byteSwap32,
    "bytesToHex",
    ()=>bytesToHex,
    "checkOpts",
    ()=>checkOpts,
    "clean",
    ()=>clean,
    "concatBytes",
    ()=>concatBytes,
    "copyBytes",
    ()=>copyBytes,
    "createHasher",
    ()=>createHasher,
    "createView",
    ()=>createView,
    "hexToBytes",
    ()=>hexToBytes,
    "isBytes",
    ()=>isBytes,
    "isLE",
    ()=>isLE,
    "kdfInputToBytes",
    ()=>kdfInputToBytes,
    "nextTick",
    ()=>nextTick,
    "oidNist",
    ()=>oidNist,
    "randomBytes",
    ()=>randomBytes,
    "rotl",
    ()=>rotl,
    "rotr",
    ()=>rotr,
    "swap32IfBE",
    ()=>swap32IfBE,
    "swap8IfBE",
    ()=>swap8IfBE,
    "u32",
    ()=>u32,
    "u8",
    ()=>u8,
    "utf8ToBytes",
    ()=>utf8ToBytes,
    "validateObject",
    ()=>validateObject
]);
function isBytes(a) {
    // Plain `instanceof Uint8Array` is too strict for some Buffer / proxy / cross-realm cases.
    // The fallback still requires a real ArrayBuffer view, so plain
    // JSON-deserialized `{ constructor: ... }` spoofing is rejected, and
    // `BYTES_PER_ELEMENT === 1` keeps the fallback on byte-oriented views.
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array' && 'BYTES_PER_ELEMENT' in a && a.BYTES_PER_ELEMENT === 1;
}
// Shared error-message prefix builder. Only called on throw paths, so assert
// success paths never pay for the string concatenation.
const atitle = (title)=>title ? `"${title}" ` : '';
function anumber(n, title = '') {
    if (typeof n !== 'number') throw new TypeError(atitle(title) + 'expected number, got ' + typeof n);
    if (!Number.isSafeInteger(n) || n < 0) throw new RangeError(atitle(title) + 'expected integer >= 0, got ' + n);
    return n;
}
function abool(value, title = '') {
    if (typeof value !== 'boolean') throw new TypeError(atitle(title) + 'expected boolean, got type=' + typeof value);
    return value;
}
function abytes(value, length, title = '') {
    // Success path first: this runs at the start of every update() / digestInto(), and the
    // common `abytes(data)` form must not pay for length handling it does not use.
    if (isBytes(value) && (length === undefined || value.length === length)) return value;
    // Error path: recompute freely to build the exact message.
    if (length !== undefined) anumber(length, 'length');
    const bytes = isBytes(value);
    const ofLen = length !== undefined ? ` of length ${length}` : '';
    const got = bytes ? `length=${value.length}` : `type=${typeof value}`;
    const message = atitle(title) + 'expected Uint8Array' + ofLen + ', got ' + got;
    if (!bytes) throw new TypeError(message);
    throw new RangeError(message);
}
function copyBytes(bytes) {
    // `Uint8Array.from(...)` would also accept arrays / other typed arrays. Keep this helper strict
    // because callers use it at byte-validation boundaries before mutating the detached copy.
    return Uint8Array.from(abytes(bytes));
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new TypeError('expected hash wrapped by utils.createHasher');
    anumber(h.outputLen);
    anumber(h.blockLen);
    // HMAC and KDF callers treat these as real byte lengths; allowing zero lets fake wrappers pass
    // validation and can produce empty outputs instead of failing fast.
    if (h.outputLen < 1 || h.blockLen < 1) throw new Error('hash blockLen / outputLen must be >= 1');
}
const aobject = (value, label)=>{
    if (value === null || typeof value !== 'object' || Array.isArray(value)) throw new TypeError((label === 'object' ? '' : `"${label}" `) + 'expected object, got type=' + typeof value);
};
const aopts = (value, label)=>{
    aobject(value, label);
    const proto = Object.getPrototypeOf(value);
    if (proto !== Object.prototype && proto !== null) throw new TypeError(`"${label}" expected plain object`);
    // Object.assign() treats an own "__proto__" source key as a write to the target's legacy
    // prototype setter. Reject it before merging so inherited option values cannot be injected.
    if (Object.hasOwn(value, '__proto__')) throw new TypeError(`"${label}.__proto__" is not allowed`);
};
function aexists(instance, checkFinished = true) {
    // Runs on every update()/digestInto(); the flags are library-owned booleans, so only their
    // truthiness is checked - re-validating their type per call was pure hot-path overhead.
    if (instance.destroyed) throw new Error('hash was destroyed');
    if (checkFinished && instance.finished) throw new Error('digest() was already called');
}
function aoutput(out, instance) {
    abytes(out, undefined, 'output');
    // `outputLen` is a library-owned readonly number; the negated comparison keeps failing fast
    // when it is missing/NaN (comparisons with undefined/NaN are false) without an anumber() call.
    const min = instance.outputLen;
    if (!(out.length >= min)) {
        throw new RangeError('"output" expected length >= ' + min);
    }
}
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++){
        arrays[i].fill(0);
    }
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
const isLE = /* @__PURE__ */ (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
const swap8IfBE = isLE ? (n)=>n : (n)=>byteSwap(n) >>> 0;
function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = byteSwap(arr[i]);
    }
    return arr;
}
const swap32IfBE = isLE ? (u)=>u : byteSwap32;
// Built-in hex conversion https://caniuse.com/mdn-javascript_builtins_uint8array_fromhex
const hasHexBuiltin = /* @__PURE__ */ (()=>// @ts-ignore
    typeof Uint8Array.from([]).toHex === 'function' && typeof Uint8Array.fromHex === 'function')();
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    abytes(bytes);
    // @ts-ignore
    if (hasHexBuiltin) return bytes.toHex();
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
// Strict ASCII nibble parser: non-ASCII hex lookalikes are rejected as undefined.
// ASCII codes: '0'..'9' = 48..57, 'A'..'F' = 65..70, 'a'..'f' = 97..102.
// prettier-ignore
function asciiToBase16(ch) {
    return ch >= 48 && ch <= 57 ? ch - 48 // '2' => 50-48
     : ch >= 65 && ch <= 70 ? ch - (65 - 10) // 'B' => 66-(65-10)
     : ch >= 97 && ch <= 102 ? ch - (97 - 10) // 'b' => 98-(97-10)
     : undefined;
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new TypeError('hex string expected, got ' + typeof hex);
    if (hasHexBuiltin) {
        try {
            return Uint8Array.fromHex(hex);
        } catch (error) {
            if (error instanceof SyntaxError) throw new RangeError(error.message);
            throw error;
        }
    }
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new RangeError('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi)); // parse first char, multiply it by 16
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1)); // parse second char
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new RangeError('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // example: 'A9' => 10*16 + 9
    }
    return array;
}
function nextTick(onReject) {
    const host = globalThis;
    if (typeof host.scheduler?.yield === 'function') {
        const promise = host.scheduler.yield();
        // Keep the original scheduler rejection; this handler exists only for cleanup.
        if (onReject) promise.catch(onReject);
        return promise;
    }
    return new Promise((resolve)=>host.setTimeout(resolve, 0));
}
async function asyncLoop(iters, tick, cb, onReject) {
    anumber(iters, 'iters');
    anumber(tick, 'tick');
    if (typeof cb !== 'function') throw new TypeError('callback must be a function');
    // Callback is synchronous by contract; asyncLoop only yields between sync work windows.
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await nextTick(onReject);
        // Track only synchronous work time; scheduler delay after yielding is outside our budget.
        ts = Date.now();
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new TypeError('string expected');
    const encoded = new TextEncoder().encode(str);
    try {
        // Copy into the current realm for Firefox extension contexts. Callers that own the returned
        // buffer can then wipe it independently of TextEncoder's temporary result.
        return new Uint8Array(encoded); // https://bugzil.la/1681809
    } finally{
        clean(encoded);
    }
}
function kdfInputToBytes(data, errorTitle = '') {
    if (typeof data === 'string') return utf8ToBytes(data);
    return abytes(data, undefined, errorTitle);
}
function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        abytes(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
const validateObject = (object, fields = {}, optFields = {}, title = 'object')=>{
    aobject(object, title);
    aobject(fields, 'fields');
    aobject(optFields, 'optFields');
    function checkField(fieldName, expectedType, isOpt) {
        const label = title === 'object' ? `param "${String(fieldName)}"` : `"${title}.${String(fieldName)}"`;
        // Config fields must be explicit own properties. Optional inherited values are rejected too
        // because callers keep reading the same options object after validation.
        const val = object[fieldName];
        // Runtime objects such as Field instances intentionally satisfy required method slots
        // via their shared prototype.
        if (!Object.hasOwn(object, fieldName) && (isOpt ? val !== undefined : expectedType !== 'function')) {
            throw new TypeError(`${label} is invalid: expected own property`);
        }
        if (isOpt && val === undefined) return;
        const current = typeof val;
        if (current !== expectedType || val === null) throw new TypeError(`${label} is invalid: expected ${expectedType}, got ${current}`);
    }
    const iter = (f, isOpt)=>Object.entries(f).forEach(([k, v])=>checkField(k, v, isOpt));
    iter(fields, false);
    iter(optFields, true);
};
function checkOpts(defaults, opts, title = 'opts') {
    aopts(defaults, 'defaults');
    if (opts !== undefined) aopts(opts, title);
    // Callers read optional fields directly, so omitted values must not fall through to ambient
    // Object.prototype pollution (for example a forged `dkLen` changing SHAKE's default output).
    const merged = Object.assign(Object.create(null), defaults, opts);
    return merged;
}
function createHasher(hashCons, info = {}) {
    if (typeof hashCons !== 'function') throw new TypeError('"hashCons" expected function, got type=' + typeof hashCons);
    info = checkOpts({}, info, 'info');
    const hashC = (msg, opts)=>hashCons(opts).update(msg).digest();
    const tmp = hashCons(undefined);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.canXOF = tmp.canXOF;
    hashC.create = (opts)=>hashCons(opts);
    Object.assign(hashC, info);
    return Object.freeze(hashC);
}
function randomBytes(bytesLength = 32) {
    // Match the repo's other length-taking helpers instead of relying on Uint8Array coercion.
    anumber(bytesLength, 'bytesLength');
    const cr = typeof globalThis === 'object' ? globalThis.crypto : null;
    if (typeof cr?.getRandomValues !== 'function') throw new Error('crypto.getRandomValues must be defined');
    // Web Cryptography API Level 2 §10.1.1:
    // if `byteLength > 65536`, throw `QuotaExceededError`.
    // Keep the guard explicit so callers can see the quota in code
    // instead of discovering it by reading the spec or host errors.
    // This wrapper surfaces the same quota as a stable library RangeError.
    if (bytesLength > 65536) throw new RangeError(`"bytesLength" expected <= 65536, got ${bytesLength}`);
    return cr.getRandomValues(new Uint8Array(bytesLength));
}
const oidNist = (suffix)=>({
        // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
        // Larger suffix values would need base-128 OID encoding and a different length byte.
        oid: Uint8Array.from([
            0x06,
            0x09,
            0x60,
            0x86,
            0x48,
            0x01,
            0x65,
            0x03,
            0x04,
            0x02,
            suffix
        ])
    });
}),
"[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>matchesPathPattern,
    "t",
    ()=>createPreserveEmptyPredicate
]);
//#region src/canonicalization-path-match.ts
function matchesPathPattern(path, pattern) {
    if (path.length !== pattern.length) return false;
    for(let i = 0; i < pattern.length; i++){
        const segment = pattern[i];
        const value = path[i];
        if (segment === void 0 || value === void 0) return false;
        if (segment === "*") continue;
        if (typeof segment === "string") {
            if (value !== segment) return false;
            continue;
        }
        if (Array.isArray(segment)) {
            if (!segment.includes(value)) return false;
        }
    }
    return true;
}
function createPreserveEmptyPredicate(patterns) {
    return (path)=>patterns.some((pattern)=>matchesPathPattern(path, pattern));
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript) <export n as matchesPathPattern>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchesPathPattern",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript) <export t as createPreserveEmptyPredicate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPreserveEmptyPredicate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>DomainNamespaceResolutionError,
    "t",
    ()=>ContractValidationError
]);
//#region src/contract-validation-error.ts
var ContractValidationError = class extends Error {
    code = "CONTRACT.VALIDATION_FAILED";
    phase;
    constructor(message, phase){
        super(message);
        this.name = "ContractValidationError";
        this.phase = phase;
    }
};
var DomainNamespaceResolutionError = class extends Error {
    constructor(message){
        super(message);
        this.name = "DomainNamespaceResolutionError";
    }
};
;
}),
"[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractValidationError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/default-namespace-rpdJeUMq.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>soleDomainNamespaceId,
    "t",
    ()=>UNBOUND_DOMAIN_NAMESPACE_ID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript)");
;
//#region src/default-namespace.ts
/**
* Reserved sentinel domain namespace id for the late-bound application-domain
* slot — the namespace a model lands in when it is authored without an explicit
* namespace. This is target-agnostic: targets that allow un-namespaced
* authoring (e.g. Mongo, SQLite) declare this id as their default on the target
* descriptor; the framework names the sentinel, never a target. Mirrors
* storage's `UNBOUND_NAMESPACE_ID` on the domain plane.
*/ const UNBOUND_DOMAIN_NAMESPACE_ID = "__unbound__";
/**
* Resolve the single domain namespace of a single-namespace contract.
*
* Bare-name access (`db.User`) reads "the contract's one namespace". Every
* contract in scope today declares exactly one domain namespace, so this is
* exact — there is nothing to infer. A contract that declares more than one
* namespace is ambiguous for a bare name, so rather than silently pick one this
* throws; cross-namespace selection is made explicit (TML-2550).
*/ function soleDomainNamespaceId(domain) {
    const [soleNamespaceId, ...rest] = Object.keys(domain.namespaces);
    if (soleNamespaceId === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]("domain has no namespaces");
    if (rest.length > 0) {
        const all = [
            soleNamespaceId,
            ...rest
        ];
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"](`bare-name resolution requires exactly one domain namespace, found ${all.length} (${all.join(", ")}); select a namespace explicitly`);
    }
    return soleNamespaceId;
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/default-namespace-rpdJeUMq.mjs [app-rsc] (ecmascript) <export t as UNBOUND_DOMAIN_NAMESPACE_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNBOUND_DOMAIN_NAMESPACE_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$default$2d$namespace$2d$rpdJeUMq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$default$2d$namespace$2d$rpdJeUMq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/default-namespace-rpdJeUMq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/enum-accessor.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildEnumsMapForNamespace",
    ()=>buildEnumsMapForNamespace,
    "buildNamespacedEnums",
    ()=>buildNamespacedEnums,
    "createEnumAccessor",
    ()=>createEnumAccessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
//#region src/enum-accessor.ts
function createEnumAccessor(contractEnum) {
    const values = Object.freeze(contractEnum.members.map((m)=>m.value));
    const names = Object.freeze(contractEnum.members.map((m)=>m.name));
    const members = Object.freeze(Object.fromEntries(contractEnum.members.map((m)=>[
            m.name,
            m.value
        ])));
    const valueSet = new Set(values);
    const nameSet = Object.freeze(new Set(names));
    const valueToName = new Map(contractEnum.members.map((m)=>[
            m.value,
            m.name
        ]));
    const valueToOrdinal = new Map(values.map((v, i)=>[
            v,
            i
        ]));
    return {
        values,
        names,
        members,
        has: (v)=>valueSet.has(v),
        hasName: (name)=>nameSet.has(name),
        nameOf: (v)=>valueToName.get(v),
        ordinalOf: (v)=>valueToOrdinal.get(v) ?? -1
    };
}
function buildEnumsMapForNamespace(domain, namespaceId) {
    const result = {};
    const namespace = domain.namespaces[namespaceId];
    if (namespace?.enum) for (const [name, contractEnum] of Object.entries(namespace.enum))result[name] = createEnumAccessor(contractEnum);
    return result;
}
function buildNamespacedEnums(domain) {
    const result = {};
    for (const namespaceId of Object.keys(domain.namespaces))result[namespaceId] = buildEnumsMapForNamespace(domain, namespaceId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(result);
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/hashing-utils.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareByNameProperty",
    ()=>compareByNameProperty,
    "createStorageSort",
    ()=>createStorageSort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript)");
;
;
//#region src/canonicalization-storage-sort.ts
function compareCodeUnits(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
function compareByNameProperty(a, b) {
    return compareCodeUnits((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(a) && typeof a["name"] === "string" ? a["name"] : "", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(b) && typeof b["name"] === "string" ? b["name"] : "");
}
function sortArrayKeysOnRecord(record, arrayKeys, compare) {
    const sorted = {
        ...record
    };
    for (const key of arrayKeys){
        const value = record[key];
        if (Array.isArray(value)) sorted[key] = [
            ...value
        ].sort(compare);
    }
    return sorted;
}
function walkAndSort(node, pathSegments, arrayKeys, compare) {
    if (pathSegments.length === 0) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(node)) return node;
        return sortArrayKeysOnRecord(node, arrayKeys, compare);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(node)) return node;
    const [head, ...rest] = pathSegments;
    if (head === void 0) return node;
    if (head === "*") {
        const sorted = {
            ...node
        };
        for (const key of Object.keys(node))sorted[key] = walkAndSort(node[key], rest, arrayKeys, compare);
        return sorted;
    }
    const child = node[head];
    if (child === void 0) return node;
    return {
        ...node,
        [head]: walkAndSort(child, rest, arrayKeys, compare)
    };
}
function createStorageSort(targets, compare = compareByNameProperty) {
    return (storage)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(storage)) return storage;
        let result = storage;
        for (const target of targets)result = walkAndSort(result, target.path, target.arrayKeys, compare);
        return result;
    };
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>isPlainRecord
]);
//#region src/is-plain-record.ts
/**
* Strict plain-object guard: accepts only objects with `Object.prototype`
* or `null` as their prototype. Rejects arrays, class instances, and other
* non-plain objects. Used to distinguish raw-data records from IR class
* instances in validation and hydration paths.
*/ function isPlainRecord(value) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/namespace-id-CUxYd4KL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>asNamespaceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
//#region src/namespace-id.ts
function asNamespaceId(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/namespace-id-CUxYd4KL.mjs [app-rsc] (ecmascript) <export t as asNamespaceId>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asNamespaceId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/namespace-id-CUxYd4KL.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/resolve-domain-model-BovPAsW2.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>resolveDomainModel
]);
//#region src/resolve-domain-model.ts
/**
* Resolve a bare domain model name to its namespace coordinate and model IR by
* scanning the contract's namespaces. For the single-namespace contracts in
* scope the scan is exact; cross-namespace bare-name collisions are selected
* explicitly (TML-2550).
*/ function resolveDomainModel(domain, modelName) {
    for (const namespaceId of Object.keys(domain.namespaces)){
        const model = domain.namespaces[namespaceId]?.models[modelName];
        if (model !== void 0) return {
            namespaceId,
            model
        };
    }
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/resolve-domain-model-BovPAsW2.mjs [app-rsc] (ecmascript) <export t as resolveDomainModel>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveDomainModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$resolve$2d$domain$2d$model$2d$BovPAsW2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$resolve$2d$domain$2d$model$2d$BovPAsW2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/resolve-domain-model-BovPAsW2.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/contract/dist/types.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrossReferenceSchema",
    ()=>CrossReferenceSchema,
    "coreHash",
    ()=>coreHash,
    "crossRef",
    ()=>crossRef,
    "domainModelsAtDefaultNamespace",
    ()=>domainModelsAtDefaultNamespace,
    "domainValueObjectsAtDefaultNamespace",
    ()=>domainValueObjectsAtDefaultNamespace,
    "effectiveControlPolicy",
    ()=>effectiveControlPolicy,
    "executionHash",
    ()=>executionHash,
    "isColumnDefault",
    ()=>isColumnDefault,
    "isColumnDefaultLiteralInputValue",
    ()=>isColumnDefaultLiteralInputValue,
    "isExecutionMutationDefaultValue",
    ()=>isExecutionMutationDefaultValue,
    "profileHash",
    ()=>profileHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$default$2d$namespace$2d$rpdJeUMq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/default-namespace-rpdJeUMq.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$resolve$2d$domain$2d$model$2d$BovPAsW2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/resolve-domain-model-BovPAsW2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/namespace-id-CUxYd4KL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
//#region src/control-policy.ts
/**
* Resolves the effective control policy for a storage-plane node.
*
* Precedence: node-level value → contract default → `'managed'`.
*
* Both parameters are optional raw values so this function stays node-type-agnostic
* and can be called by any consumer (verifier, planner, etc.) without importing IR classes.
*/ function effectiveControlPolicy(nodeControl, defaultControlPolicy) {
    return nodeControl ?? defaultControlPolicy ?? "managed";
}
//#endregion
//#region src/cross-reference.ts
const CrossReferenceSchema = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    namespace: "string",
    model: "string",
    "space?": "string"
}));
const DEFAULT_CROSS_REF_NAMESPACE = "__unbound__";
function crossRef(model, namespace = DEFAULT_CROSS_REF_NAMESPACE, space) {
    return {
        namespace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(namespace),
        model,
        ...space !== void 0 ? {
            space
        } : {}
    };
}
//#endregion
//#region src/domain-namespace-access.ts
/**
* Models map for the contract's single domain namespace. Throws when the
* contract does not declare exactly one namespace — bare-name access is
* ambiguous across namespaces and must be qualified explicitly (TML-2550).
*/ function domainModelsAtDefaultNamespace(domain) {
    const namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$default$2d$namespace$2d$rpdJeUMq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(domain);
    const domainNamespace = domain.namespaces[namespaceId];
    if (domainNamespace === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"](`domain namespace "${namespaceId}" is not present on the contract`);
    return domainNamespace.models;
}
/**
* Value objects for the contract's single domain namespace, when present.
* Throws when the contract does not declare exactly one namespace.
*/ function domainValueObjectsAtDefaultNamespace(domain) {
    return domain.namespaces[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$default$2d$namespace$2d$rpdJeUMq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(domain)]?.valueObjects;
}
//#endregion
//#region src/types.ts
function executionHash(value) {
    return value;
}
function coreHash(value) {
    return value;
}
function profileHash(value) {
    return value;
}
/**
* Runtime predicate for `ColumnDefaultLiteralInputValue`. Authoring layers
* resolve template values from caller-supplied args (typed `unknown` at the
* boundary) and need to validate before constructing a `ColumnDefault`.
* Accepts JSON primitives, plain arrays/objects of JSON values, and `Date`
* instances. Rejects functions, class instances (other than `Date`),
* `undefined`, `bigint`, `symbol`, and arrays/objects containing those.
*/ function isColumnDefaultLiteralInputValue(value) {
    if (value === null) return true;
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean") return true;
    if (value instanceof Date) return true;
    if (Array.isArray(value)) return value.every(isColumnDefaultLiteralInputValue);
    if (t === "object" && Object.getPrototypeOf(value) === Object.prototype) return Object.values(value).every(isColumnDefaultLiteralInputValue);
    return false;
}
function isColumnDefault(value) {
    if (typeof value !== "object" || value === null) return false;
    const kind = value.kind;
    if (kind === "literal") return "value" in value;
    if (kind === "function") return typeof value.expression === "string";
    return false;
}
function isExecutionMutationDefaultValue(value) {
    if (typeof value !== "object" || value === null) return false;
    const candidate = value;
    if (candidate.kind !== "generator") return false;
    if (typeof candidate.id !== "string") return false;
    if (candidate.params !== void 0 && (typeof candidate.params !== "object" || candidate.params === null || Array.isArray(candidate.params))) return false;
    return true;
}
;
}),
"[project]/node_modules/@prisma-next/contract/dist/validate-domain.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateContractDomain",
    ()=>validateContractDomain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/namespace-id-CUxYd4KL.mjs [app-rsc] (ecmascript)");
;
;
//#region src/validate-domain.ts
function indexDomainModels(contract) {
    const index = /* @__PURE__ */ new Map();
    for (const [namespaceKey, namespace] of Object.entries(contract.domain.namespaces)){
        const namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(namespaceKey);
        let modelsInNamespace = index.get(namespaceId);
        if (modelsInNamespace === void 0) {
            modelsInNamespace = /* @__PURE__ */ new Map();
            index.set(namespaceId, modelsInNamespace);
        }
        for (const [name, model] of Object.entries(namespace.models))modelsInNamespace.set(name, {
            namespaceId,
            name,
            model
        });
    }
    return index;
}
function lookupModel(index, ref) {
    return index.get(ref.namespace)?.get(ref.model);
}
function* iterateIndexedModels(index) {
    for (const modelsInNamespace of index.values())for (const entry of modelsInNamespace.values())yield entry;
}
function validateContractDomain(contract) {
    const errors = [];
    const modelIndex = indexDomainModels(contract);
    validateRoots(contract, modelIndex, errors);
    validateVariantsAndBases(modelIndex, errors);
    validateRelationTargets(modelIndex, errors);
    validateDiscriminators(modelIndex, errors);
    validateOwnership(contract, modelIndex, errors);
    validateValueObjectReferences(contract, errors);
    validateFieldModifiers(modelIndex, contract, errors);
    if (errors.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"](`Contract domain validation failed:\n- ${errors.join("\n- ")}`, "domain");
}
function validateRoots(contract, modelIndex, errors) {
    const seenRootTargets = /* @__PURE__ */ new Map();
    for (const [rootKey, crossRef] of Object.entries(contract.roots)){
        let modelsInNamespace = seenRootTargets.get(crossRef.namespace);
        if (modelsInNamespace === void 0) {
            modelsInNamespace = /* @__PURE__ */ new Set();
            seenRootTargets.set(crossRef.namespace, modelsInNamespace);
        }
        if (modelsInNamespace.has(crossRef.model)) errors.push(`Duplicate root value: "${crossRef.namespace}:${crossRef.model}" is mapped by multiple root keys`);
        modelsInNamespace.add(crossRef.model);
        if (!lookupModel(modelIndex, crossRef)) errors.push(`Root "${rootKey}" references model "${crossRef.namespace}:${crossRef.model}" which does not exist in domain.namespaces`);
    }
}
function validateVariantsAndBases(modelIndex, errors) {
    for (const { namespaceId, name: modelName, model } of iterateIndexedModels(modelIndex)){
        if (model.variants) for (const variantName of Object.keys(model.variants)){
            const variantEntry = lookupModel(modelIndex, {
                namespace: namespaceId,
                model: variantName
            });
            if (!variantEntry) {
                errors.push(`Model "${namespaceId}:${modelName}" lists variant "${variantName}" which does not exist at that namespace coordinate`);
                continue;
            }
            const variantBase = variantEntry.model.base;
            if (variantBase?.namespace !== namespaceId || variantBase?.model !== modelName) errors.push(`Variant "${namespaceId}:${variantName}" has base "${variantBase?.namespace ?? "?"}:${variantBase?.model ?? "(none)"}" but expected "${namespaceId}:${modelName}"`);
        }
        if (model.base) {
            const baseEntry = lookupModel(modelIndex, model.base);
            if (!baseEntry) {
                errors.push(`Model "${namespaceId}:${modelName}" has base "${model.base.namespace}:${model.base.model}" which does not exist in domain.namespaces`);
                continue;
            }
            if (!baseEntry.model.variants || !Object.hasOwn(baseEntry.model.variants, modelName)) errors.push(`Model "${namespaceId}:${modelName}" has base "${model.base.namespace}:${model.base.model}" which does not list it as a variant`);
        }
    }
}
function validateRelationTargets(modelIndex, errors) {
    for (const { namespaceId, name: modelName, model } of iterateIndexedModels(modelIndex))for (const [relName, relation] of Object.entries(model.relations ?? {})){
        if (relation.to.space !== void 0) continue;
        if (!lookupModel(modelIndex, relation.to)) errors.push(`Relation "${relName}" on model "${namespaceId}:${modelName}" targets "${relation.to.namespace}:${relation.to.model}" which does not exist in domain.namespaces`);
    }
}
function validateDiscriminators(modelIndex, errors) {
    for (const { namespaceId, name: modelName, model } of iterateIndexedModels(modelIndex)){
        if (model.discriminator) {
            if (!model.variants || Object.keys(model.variants).length === 0) errors.push(`Model "${namespaceId}:${modelName}" has discriminator but no variants`);
            if (!Object.hasOwn(model.fields, model.discriminator.field)) errors.push(`Discriminator field "${model.discriminator.field}" is not a field on model "${namespaceId}:${modelName}"`);
        }
        if (model.variants && Object.keys(model.variants).length > 0 && !model.discriminator) errors.push(`Model "${namespaceId}:${modelName}" has variants but no discriminator`);
        if (model.base) {
            if (model.discriminator) errors.push(`Model "${namespaceId}:${modelName}" has base and must not have discriminator`);
            if (model.variants && Object.keys(model.variants).length > 0) errors.push(`Model "${namespaceId}:${modelName}" has base and must not have variants`);
        }
    }
}
function validateOwnership(contract, modelIndex, errors) {
    for (const { namespaceId, name: modelName, model } of iterateIndexedModels(modelIndex)){
        if (!model.owner) continue;
        if (model.owner === modelName) errors.push(`Model "${namespaceId}:${modelName}" cannot own itself`);
        if (!lookupModel(modelIndex, {
            namespace: namespaceId,
            model: model.owner
        })) errors.push(`Model "${namespaceId}:${modelName}" has owner "${namespaceId}:${model.owner}" which does not exist in domain.namespaces`);
        for (const [rootKey, rootRef] of Object.entries(contract.roots))if (rootRef.namespace === namespaceId && rootRef.model === modelName) errors.push(`Owned model "${namespaceId}:${modelName}" must not appear in roots (found as root "${rootKey}")`);
    }
}
function validateValueObjectReferences(contract, errors) {
    const voNamesByNamespace = /* @__PURE__ */ new Map();
    for (const [namespaceKey, namespace] of Object.entries(contract.domain.namespaces)){
        const namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(namespaceKey);
        voNamesByNamespace.set(namespaceId, new Set(Object.keys(namespace.valueObjects ?? {})));
    }
    function checkType(type, location, namespaceId) {
        if (!type) return;
        const voNames = voNamesByNamespace.get(namespaceId) ?? /* @__PURE__ */ new Set();
        if (type.kind === "valueObject" && type.name && !voNames.has(type.name)) {
            errors.push(`${location} references value object "${namespaceId}:${type.name}" which does not exist in that namespace's valueObjects`);
            return;
        }
        if (type.kind === "union") for (const member of type.members ?? [])checkType(member, location, namespaceId);
    }
    for (const [namespaceKey, namespace] of Object.entries(contract.domain.namespaces)){
        const namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(namespaceKey);
        for (const [modelName, model] of Object.entries(namespace.models))for (const [fieldName, field] of Object.entries(model.fields))checkType(field?.type, `Model "${namespaceId}:${modelName}" field "${fieldName}"`, namespaceId);
        for (const [voName, vo] of Object.entries(namespace.valueObjects ?? {}))for (const [fieldName, field] of Object.entries(vo.fields))checkType(field?.type, `Value object "${namespaceId}:${voName}" field "${fieldName}"`, namespaceId);
    }
}
function validateFieldModifiers(modelIndex, contract, errors) {
    for (const { namespaceId, name: modelName, model } of iterateIndexedModels(modelIndex))for (const [fieldName, field] of Object.entries(model.fields)){
        const f = field;
        if (f?.many && f?.dict) errors.push(`Model "${namespaceId}:${modelName}" field "${fieldName}" cannot have both "many" and "dict" modifiers`);
    }
    for (const [namespaceKey, namespace] of Object.entries(contract.domain.namespaces)){
        const namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(namespaceKey);
        for (const [voName, vo] of Object.entries(namespace.valueObjects ?? {}))for (const [fieldName, field] of Object.entries(vo.fields)){
            const f = field;
            if (f?.many && f?.dict) errors.push(`Value object "${namespaceId}:${voName}" field "${fieldName}" cannot have both "many" and "dict" modifiers`);
        }
    }
}
;
}),
"[project]/node_modules/@prisma-next/driver-postgres/dist/normalize-error-DnabvDFD.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>postgresDriverDescriptorMeta,
    "n",
    ()=>isPostgresError,
    "r",
    ()=>normalizePgError,
    "t",
    ()=>isAlreadyConnectedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$errors$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-errors/dist/index.mjs [app-rsc] (ecmascript)");
;
//#region src/core/descriptor-meta.ts
const postgresDriverDescriptorMeta = {
    kind: "driver",
    familyId: "sql",
    targetId: "postgres",
    id: "postgres",
    version: "0.0.1",
    capabilities: {}
};
//#endregion
//#region src/normalize-error.ts
/**
* Checks if an error is a connection-related error.
*/ function isConnectionError(error) {
    const code = error.code;
    if (code) {
        if (code === "ECONNRESET" || code === "ETIMEDOUT" || code === "ECONNREFUSED" || code === "ENOTFOUND" || code === "EHOSTUNREACH") return true;
    }
    const message = error.message.toLowerCase();
    if (message.includes("connection terminated") || message.includes("connection closed") || message.includes("connection refused") || message.includes("connection timeout") || message.includes("connection reset")) return true;
    return false;
}
/**
* Checks if a connection error is transient (might succeed on retry).
*/ function isTransientConnectionError(error) {
    const code = error.code;
    if (code) {
        if (code === "ETIMEDOUT" || code === "ECONNRESET") return true;
        if (code === "ECONNREFUSED") return false;
    }
    const message = error.message.toLowerCase();
    if (message.includes("timeout") || message.includes("connection reset")) return true;
    return false;
}
/**
* PostgreSQL-specific error properties that indicate an error originated from pg library.
* These properties are not present on Node.js system errors.
* Excludes generic properties like 'detail', 'file', 'line', and 'position' that could appear on any error.
*/ const PG_ERROR_PROPERTIES = [
    "constraint",
    "table",
    "column",
    "hint",
    "internalPosition",
    "internalQuery",
    "where",
    "schema",
    "routine"
];
/**
* Type predicate to check if an error is a Postgres error from the pg library.
*
* Distinguishes pg library errors from Node.js system errors by checking for:
* - SQLSTATE codes (5-character alphanumeric codes like '23505', '42601')
* - pg-specific properties (constraint, table, column, hint, etc.) that Node.js errors don't have
*
* Node.js system errors (ECONNREFUSED, ETIMEDOUT, etc.) are excluded to prevent false positives.
*/ function isPostgresError(error) {
    if (!(error instanceof Error)) return false;
    const pgError = error;
    if (pgError.code && isPostgresSqlState(pgError.code)) return true;
    return PG_ERROR_PROPERTIES.some((prop)=>pgError[prop] !== void 0);
}
/**
* Checks if an error is an "already connected" error from pg.Client.connect().
* When calling connect() on an already-connected client, pg throws an error that can be safely ignored.
*/ function isAlreadyConnectedError(error) {
    if (!(error instanceof Error)) return false;
    const message = error.message.toLowerCase();
    return message.includes("already") && message.includes("connected");
}
/**
* Checks if an error code is a Postgres SQLSTATE (5-character alphanumeric code).
* SQLSTATE codes are standardized SQL error codes (e.g., '23505' for unique violation).
*/ function isPostgresSqlState(code) {
    if (!code) return false;
    return /^[A-Z0-9]{5}$/.test(code);
}
/**
* Normalizes a Postgres error into a SQL-shared error type.
*
* - Postgres SQLSTATE errors (5-char codes like '23505') → SqlQueryError
* - Connection errors (ECONNRESET, ETIMEDOUT, etc.) → SqlConnectionError
* - Unknown errors → returns the original error as-is
*
* The original error is preserved via Error.cause to maintain stack traces.
*
* @param error - The error to normalize (typically from pg library)
* @returns SqlQueryError for query-related failures
* @returns SqlConnectionError for connection-related failures
* @returns The original error if it cannot be normalized
*/ function normalizePgError(error) {
    if (!(error instanceof Error)) return new Error(String(error));
    const pgError = error;
    if (isPostgresSqlState(pgError.code)) {
        const options = {
            cause: error,
            sqlState: pgError.code
        };
        if (pgError.constraint !== void 0) options.constraint = pgError.constraint;
        if (pgError.table !== void 0) options.table = pgError.table;
        if (pgError.column !== void 0) options.column = pgError.column;
        if (pgError.detail !== void 0) options.detail = pgError.detail;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$errors$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqlQueryError"](error.message, options);
    }
    if (isConnectionError(error)) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$errors$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqlConnectionError"](error.message, {
        cause: error,
        transient: isTransientConnectionError(error)
    });
    return error;
}
;
}),
"[project]/node_modules/@prisma-next/driver-postgres/dist/runtime.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>postgresRuntimeDriverDescriptor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/driver-postgres/dist/normalize-error-DnabvDFD.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pg$2d$cursor$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pg-cursor/esm/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
//#region src/callback-to-promise.ts
function callbackToPromise(fn) {
    return new Promise((resolve, reject)=>{
        fn((err, result)=>{
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}
//#endregion
//#region src/named-cursor.ts
let nextNamedPortalId = 1;
/** Streaming cursor for a server-side named prepared statement. */ var NamedCursor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pg$2d$cursor$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] {
    name;
    constructor(opts){
        super(opts.text, [
            ...opts.values
        ], opts.config);
        this.name = opts.name;
        this.submit = this.submitNamed;
    }
    submitNamed(connection) {
        const self = this;
        const conn = connection;
        self.state = "submitted";
        self.connection = conn;
        self._portal = `np_${nextNamedPortalId++}`;
        if (!conn.parsedStatements[this.name]) {
            const parseMessage = {
                text: self.text,
                name: this.name,
                types: []
            };
            conn.parse(parseMessage, true);
        }
        const bindMessage = {
            portal: self._portal,
            statement: this.name,
            values: self.values ?? []
        };
        conn.bind(bindMessage, true);
        conn.describe({
            type: "P",
            name: self._portal
        }, true);
        conn.flush();
        if (self._conf.types) self._result._getTypeParser = self._conf.types.getTypeParser;
        conn.once("noData", self._ifNoData);
        conn.once("rowDescription", self._rowDescription);
    }
};
//#endregion
//#region src/postgres-driver.ts
const DEFAULT_BATCH_SIZE = 100;
const DEFAULT_PREPARED_STATEMENTS = true;
function createHandleAllocator() {
    let next = 1;
    return {
        mint: ()=>`pn_${next++}`
    };
}
function buildConnectionOptions(options) {
    return {
        ...options.cursor?.disabled ? {
            cursorDisabled: true
        } : {
            cursorBatchSize: options.cursor?.batchSize ?? DEFAULT_BATCH_SIZE,
            cursorDisabled: false
        },
        preparedStatementsEnabled: options.preparedStatements ?? DEFAULT_PREPARED_STATEMENTS,
        handleAllocator: createHandleAllocator()
    };
}
function isStalePreparedStatementError(error) {
    if (!(error instanceof Error)) return false;
    const code = error.code;
    return code === "26000" || code === "0A000";
}
var AsyncMutex = class {
    #queue = Promise.resolve();
    async lock() {
        const previous = this.#queue;
        let releaseLock;
        this.#queue = new Promise((resolve)=>{
            releaseLock = resolve;
        });
        await previous;
        return ()=>{
            releaseLock?.();
            releaseLock = void 0;
        };
    }
};
var PostgresQueryable = class {
    options;
    constructor(options){
        this.options = options;
    }
    async *execute(request) {
        try {
            yield* this.runQuery(request);
        } catch (error) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(error);
        }
    }
    async *executePrepared(request) {
        if (!this.options.preparedStatementsEnabled) {
            yield* this.execute(request);
            return;
        }
        let handle = request.handle.get();
        if (handle === void 0) {
            handle = this.options.handleAllocator.mint();
            request.handle.set(handle);
        }
        yield* this.withStaleHandleRetry(request, handle, (h)=>this.runQuery(request, h));
    }
    async *withStaleHandleRetry(request, handle, attempt) {
        let yielded = false;
        try {
            for await (const row of attempt(handle)){
                yielded = true;
                yield row;
            }
            return;
        } catch (error) {
            if (yielded || !isStalePreparedStatementError(error)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(error);
            const retryHandle = this.options.handleAllocator.mint();
            request.handle.set(retryHandle);
            try {
                yield* attempt(retryHandle);
            } catch (retryError) {
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(retryError);
            }
        }
    }
    async *runQuery(request, name) {
        const client = await this.acquireClient();
        try {
            if (!this.options.cursorDisabled) try {
                for await (const row of this.executeWithCursor(client, request.sql, request.params, this.options.cursorBatchSize, name))yield row;
                return;
            } catch (cursorError) {
                if (!(cursorError instanceof Error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(cursorError)) throw cursorError;
            }
            for await (const row of this.executeBuffered(client, request.sql, request.params, name))yield row;
        } finally{
            await this.releaseClient(client);
        }
    }
    async explain(request) {
        const text = `EXPLAIN (FORMAT JSON) ${request.sql}`;
        const client = await this.acquireClient();
        try {
            return {
                rows: (await client.query(text, request.params).catch(rethrowNormalizedError)).rows
            };
        } finally{
            await this.releaseClient(client);
        }
    }
    async query(sql, params) {
        const client = await this.acquireClient();
        try {
            return await client.query(sql, params).catch(rethrowNormalizedError);
        } finally{
            await this.releaseClient(client);
        }
    }
    async *executeWithCursor(client, sql, params, cursorBatchSize, name) {
        const values = params ?? [];
        const cursor = client.query(name === void 0 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pg$2d$cursor$2f$esm$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](sql, values) : new NamedCursor({
            name,
            text: sql,
            values
        }));
        try {
            while(true){
                const rows = await readCursor(cursor, cursorBatchSize);
                if (rows.length === 0) break;
                for (const row of rows)yield row;
            }
        } finally{
            await closeCursor(cursor);
        }
    }
    async *executeBuffered(client, sql, params, name) {
        const config = {
            name,
            text: sql,
            values: params ?? []
        };
        const result = await client.query(config);
        for (const row of result.rows)yield row;
    }
};
var PostgresConnectionImpl = class extends PostgresQueryable {
    #connection;
    #onRelease;
    #onDestroy;
    constructor(connection, options, onRelease, onDestroy){
        super(options);
        this.#connection = connection;
        this.#onRelease = onRelease;
        this.#onDestroy = onDestroy;
    }
    acquireClient() {
        return Promise.resolve(this.#connection);
    }
    releaseClient(_client) {
        return Promise.resolve();
    }
    async beginTransaction() {
        await this.#connection.query("BEGIN").catch(rethrowNormalizedError);
        return new PostgresTransactionImpl(this.#connection, this.options);
    }
    async release() {
        const conn = this.#connection;
        if ("release" in conn) conn.release();
        const onRelease = this.#onRelease;
        this.#onRelease = void 0;
        this.#onDestroy = void 0;
        onRelease?.();
    }
    async destroy(reason) {
        const onDestroy = this.#onDestroy;
        const onRelease = this.#onRelease;
        this.#onDestroy = void 0;
        this.#onRelease = void 0;
        const conn = this.#connection;
        if ("release" in conn) {
            const releaseArg = reason instanceof Error ? reason : /* @__PURE__ */ new Error("Connection destroyed");
            conn.release(releaseArg);
        }
        if (onDestroy) await onDestroy(reason);
        else onRelease?.();
    }
};
var PostgresTransactionImpl = class extends PostgresQueryable {
    #connection;
    constructor(connection, options){
        super(options);
        this.#connection = connection;
    }
    acquireClient() {
        return Promise.resolve(this.#connection);
    }
    releaseClient(_client) {
        return Promise.resolve();
    }
    async commit() {
        await this.#connection.query("COMMIT").catch(rethrowNormalizedError);
    }
    async rollback() {
        await this.#connection.query("ROLLBACK").catch(rethrowNormalizedError);
    }
};
var PostgresPoolDriverImpl = class extends PostgresQueryable {
    pool;
    #closed = false;
    constructor(options){
        super(buildConnectionOptions(options));
        this.pool = options.connect.pool;
    }
    get state() {
        return this.#closed ? "closed" : "connected";
    }
    async connect(_binding) {}
    async acquireConnection() {
        return new PostgresConnectionImpl(await this.acquireClient(), this.options);
    }
    async close() {
        if (this.#closed) return;
        this.#closed = true;
        await this.pool.end();
    }
    async acquireClient() {
        return this.pool.connect();
    }
    async releaseClient(client) {
        client.release();
    }
};
var PostgresDirectDriverImpl = class extends PostgresQueryable {
    directClient;
    #connectionMutex = new AsyncMutex();
    #closed = false;
    #connected = false;
    #connectPromise;
    constructor(options){
        super(buildConnectionOptions(options));
        this.directClient = options.connect.client;
    }
    get state() {
        return this.#closed ? "closed" : "connected";
    }
    async connect(_binding) {}
    async acquireConnection() {
        const releaseLease = await this.#connectionMutex.lock();
        try {
            return new PostgresConnectionImpl(await this.acquireClient(), this.options, releaseLease, async ()=>{
                try {
                    await this.#closeWhileHoldingLease();
                } finally{
                    releaseLease();
                }
            });
        } catch (error) {
            releaseLease();
            throw error;
        }
    }
    async close() {
        const releaseLease = await this.#connectionMutex.lock();
        try {
            await this.#closeWhileHoldingLease();
        } finally{
            releaseLease();
        }
    }
    async #closeWhileHoldingLease() {
        if (this.#closed) return;
        this.#closed = true;
        await this.directClient.end();
        this.#connected = false;
    }
    async acquireClient() {
        if (this.#connected) return this.directClient;
        if (this.#connectPromise !== void 0) {
            await this.#connectPromise;
            return this.directClient;
        }
        this.#connectPromise = (async ()=>{
            try {
                await this.directClient.connect();
            } catch (error) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(error)) throw error;
            } finally{
                this.#connectPromise = void 0;
            }
            this.#connected = true;
        })();
        await this.#connectPromise;
        return this.directClient;
    }
    async releaseClient(_client) {}
};
function createBoundDriverFromBinding(binding, cursorOpts, extraOpts) {
    const preparedStatements = extraOpts?.preparedStatements;
    switch(binding.kind){
        case "url":
            return new PostgresPoolDriverImpl({
                connect: {
                    pool: new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
                        connectionString: binding.url,
                        connectionTimeoutMillis: 2e4,
                        idleTimeoutMillis: 3e4
                    })
                },
                cursor: cursorOpts,
                preparedStatements
            });
        case "pgPool":
            return new PostgresPoolDriverImpl({
                connect: {
                    pool: binding.pool
                },
                cursor: cursorOpts,
                preparedStatements
            });
        case "pgClient":
            return new PostgresDirectDriverImpl({
                connect: {
                    client: binding.client
                },
                cursor: cursorOpts,
                preparedStatements
            });
    }
}
function readCursor(cursor, size) {
    return callbackToPromise((cb)=>{
        cursor.read(size, (err, rows)=>cb(err, rows));
    });
}
function closeCursor(cursor) {
    return callbackToPromise((cb)=>cursor.close(cb));
}
function rethrowNormalizedError(error) {
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(error);
}
//#endregion
//#region src/exports/runtime.ts
const USE_BEFORE_CONNECT_MESSAGE = "Postgres driver not connected. Call connect(binding) before acquireConnection or execute.";
const ALREADY_CONNECTED_MESSAGE = "Postgres driver already connected. Call close() before reconnecting with a new binding.";
function driverError(code, message, details) {
    const error = new Error(message);
    Object.defineProperty(error, "name", {
        value: "RuntimeError",
        configurable: true
    });
    return Object.assign(error, {
        code,
        category: "RUNTIME",
        severity: "error",
        message,
        details
    });
}
function unboundExecute() {
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    throw driverError("DRIVER.NOT_CONNECTED", USE_BEFORE_CONNECT_MESSAGE);
                }
            };
        }
    };
}
var PostgresUnboundDriverImpl = class {
    familyId = "sql";
    targetId = "postgres";
    #delegate = null;
    #closed = false;
    #cursorOpts;
    #preparedStatements;
    constructor(options){
        this.#cursorOpts = options?.cursor;
        this.#preparedStatements = options?.preparedStatements;
    }
    get state() {
        if (this.#delegate !== null) return "connected";
        if (this.#closed) return "closed";
        return "unbound";
    }
    #requireDelegate() {
        const delegate = this.#delegate;
        if (delegate === null) throw driverError("DRIVER.NOT_CONNECTED", USE_BEFORE_CONNECT_MESSAGE);
        return delegate;
    }
    async connect(binding) {
        if (this.#delegate !== null) throw driverError("DRIVER.ALREADY_CONNECTED", ALREADY_CONNECTED_MESSAGE, {
            bindingKind: binding.kind
        });
        this.#delegate = createBoundDriverFromBinding(binding, this.#cursorOpts, {
            preparedStatements: this.#preparedStatements
        });
        this.#closed = false;
    }
    async acquireConnection() {
        const delegate = this.#requireDelegate();
        const connection = await delegate.acquireConnection();
        return this.#wrapConnection(connection, delegate);
    }
    /**
	* Wraps an acquired connection so that teardown paths which close the
	* underlying delegate (notably `destroy()` on a pgClient binding, where
	* the single socket means a destroyed connection invalidates the driver)
	* also reset our own `#delegate` reference. Without this, a failed
	* transaction rollback would leave the outer unbound wrapper reporting
	* `connected` while routing subsequent work to an already-ended delegate.
	*/ #wrapConnection(connection, delegate) {
        const syncDelegateState = ()=>{
            if (this.#delegate === delegate && delegate.state === "closed") {
                this.#delegate = null;
                this.#closed = true;
            }
        };
        const wrapped = {
            beginTransaction: connection.beginTransaction.bind(connection),
            execute: connection.execute.bind(connection),
            executePrepared: connection.executePrepared.bind(connection),
            query: connection.query.bind(connection),
            release: async ()=>{
                try {
                    await connection.release();
                } finally{
                    syncDelegateState();
                }
            },
            destroy: async (reason)=>{
                try {
                    await connection.destroy(reason);
                } finally{
                    syncDelegateState();
                }
            }
        };
        if (connection.explain) wrapped.explain = connection.explain.bind(connection);
        return wrapped;
    }
    async close() {
        const delegate = this.#delegate;
        if (delegate !== null) {
            this.#delegate = null;
            await delegate.close();
        }
        this.#closed = true;
    }
    execute(request) {
        const delegate = this.#delegate;
        if (delegate === null) return unboundExecute();
        return delegate.execute(request);
    }
    executePrepared(request) {
        const delegate = this.#delegate;
        if (delegate === null) return unboundExecute();
        return delegate.executePrepared(request);
    }
    async explain(request) {
        const delegate = this.#requireDelegate();
        const explain = delegate.explain;
        if (explain === void 0) throw driverError("DRIVER.NOT_CONNECTED", USE_BEFORE_CONNECT_MESSAGE);
        return explain.call(delegate, request);
    }
    async query(sql, params) {
        return this.#requireDelegate().query(sql, params);
    }
};
const postgresRuntimeDriverDescriptor = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$normalize$2d$error$2d$DnabvDFD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"],
    create (options) {
        return new PostgresUnboundDriverImpl(options);
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma-next/errors/dist/control-BVMQqofj.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>errorOutputFormatMutex,
    "a",
    ()=>errorContractMissingExtensionPacks,
    "b",
    ()=>errorUnexpected,
    "c",
    ()=>errorDriverRequired,
    "d",
    ()=>errorFileNotFound,
    "f",
    ()=>errorInvalidOutputFormat,
    "g",
    ()=>errorMigrationPlanningFailed,
    "h",
    ()=>errorMigrationCliUnknownFlag,
    "i",
    ()=>errorContractConfigMissing,
    "l",
    ()=>errorEnumCodecNotInPackStack,
    "m",
    ()=>errorMigrationCliInvalidConfigArg,
    "n",
    ()=>errorConfigFileNotFound,
    "o",
    ()=>errorContractValidationFailed,
    "p",
    ()=>errorJsonFormatNotSupported,
    "r",
    ()=>errorConfigValidation,
    "s",
    ()=>errorDatabaseConnectionRequired,
    "t",
    ()=>CliStructuredError,
    "u",
    ()=>errorFamilyReadMarkerSqlRequired,
    "v",
    ()=>errorQueryRunnerFactoryRequired,
    "y",
    ()=>errorTargetMigrationNotSupported
]);
//#region src/control.ts
/**
* Domain prefix for structured CLI error codes.
*
* The full envelope code is rendered as `PN-<domain>-<code>` (see
* `CliStructuredError.toEnvelope`). The supported domains follow the
* taxonomy documented in `docs/CLI Style Guide.md`:
*
* - `CLI`    — CLI command processing (config, validation, planning)
* - `MIG`    — Migration subsystem (authoring, planning conflicts, runner)
* - `RUN`    — Application runtime (query execution, streaming)
* - `CON`    — Contract subsystem (validation, normalization)
* - `SCHEMA` — Schema subsystem
*
* Sub-clustering within a domain is conveyed by the numeric code range; see
* the per-domain source files for reserved ranges.
*/ const CLI_ERROR_DOMAINS = [
    "CLI",
    "RUN",
    "MIG",
    "CON",
    "SCHEMA"
];
/**
* Structured CLI error that contains all information needed for error envelopes.
* Call sites throw these errors with full context.
*/ var CliStructuredError = class extends Error {
    code;
    domain;
    severity;
    why;
    fix;
    where;
    meta;
    docsUrl;
    constructor(code, summary, options){
        super(summary);
        this.name = "CliStructuredError";
        this.code = code;
        this.domain = options?.domain ?? "CLI";
        this.severity = options?.severity ?? "error";
        this.why = options?.why;
        this.fix = options?.fix === options?.why ? void 0 : options?.fix;
        this.where = options?.where ? {
            path: options.where.path,
            line: options.where.line
        } : void 0;
        this.meta = options?.meta;
        this.docsUrl = options?.docsUrl;
    }
    /**
	* Converts this error to a CLI error envelope for output formatting.
	*/ toEnvelope() {
        return {
            ok: false,
            code: `PN-${this.domain}-${this.code}`,
            domain: this.domain,
            severity: this.severity,
            summary: this.message,
            why: this.why,
            fix: this.fix,
            where: this.where,
            meta: this.meta,
            docsUrl: this.docsUrl
        };
    }
    /**
	* Type guard to check if an error is a CliStructuredError.
	* Uses duck-typing to work across module boundaries where instanceof may fail.
	*/ static is(error) {
        if (!(error instanceof Error)) return false;
        const candidate = error;
        return candidate.name === "CliStructuredError" && typeof candidate.code === "string" && isCliErrorDomain(candidate.domain) && typeof candidate.toEnvelope === "function";
    }
};
const CLI_ERROR_DOMAIN_SET = new Set(CLI_ERROR_DOMAINS);
function isCliErrorDomain(value) {
    return typeof value === "string" && CLI_ERROR_DOMAIN_SET.has(value);
}
/**
* Config file not found or missing.
*/ function errorConfigFileNotFound(configPath, options) {
    return new CliStructuredError("4001", "Config file not found", {
        domain: "CLI",
        ...options?.why ? {
            why: options.why
        } : {
            why: "Config file not found"
        },
        fix: "Run 'prisma-next init' to create a config file",
        docsUrl: "https://prisma-next.dev/docs/cli/config",
        ...configPath ? {
            where: {
                path: configPath
            }
        } : {}
    });
}
/**
* Contract configuration missing from config.
*/ function errorContractConfigMissing(options) {
    return new CliStructuredError("4002", "Contract configuration missing", {
        domain: "CLI",
        why: options?.why ?? "The contract configuration is required for emit",
        fix: "Add contract configuration to your prisma-next.config.ts",
        docsUrl: "https://prisma-next.dev/docs/cli/contract-emit"
    });
}
/**
* Contract validation failed.
*/ function errorContractValidationFailed(reason, options) {
    return new CliStructuredError("4003", "Contract validation failed", {
        domain: "CLI",
        why: reason,
        fix: "Re-run `prisma-next contract emit`, or fix the contract file and try again",
        docsUrl: "https://prisma-next.dev/docs/contracts",
        ...options?.where ? {
            where: options.where
        } : {}
    });
}
/**
* File not found.
*/ function errorFileNotFound(filePath, options) {
    return new CliStructuredError("4004", "File not found", {
        domain: "CLI",
        why: options?.why ?? `File not found: ${filePath}`,
        fix: options?.fix ?? "Check that the file path is correct",
        where: {
            path: filePath
        },
        ...options?.docsUrl ? {
            docsUrl: options.docsUrl
        } : {}
    });
}
/**
* Database connection is required but not provided.
*/ function errorDatabaseConnectionRequired(options) {
    const runHint = options?.retryCommand ? `Run \`${options.retryCommand}\`` : options?.commandName ? `Run \`prisma-next ${options.commandName} --db <url>\`` : "Provide `--db <url>`";
    return new CliStructuredError("4005", "Database connection is required", {
        domain: "CLI",
        why: options?.why ?? "Database connection is required for this command",
        fix: `${runHint}, or set \`db: { connection: "postgres://…" }\` in prisma-next.config.ts`,
        ...options?.missingFlags !== void 0 ? {
            meta: {
                missingFlags: [
                    ...options.missingFlags
                ]
            }
        } : {}
    });
}
/**
* Query runner factory is required but not provided in config.
*/ function errorQueryRunnerFactoryRequired(options) {
    return new CliStructuredError("4006", "Query runner factory is required", {
        domain: "CLI",
        why: options?.why ?? "Config.db.queryRunnerFactory is required for db verify",
        fix: "Add db.queryRunnerFactory to prisma-next.config.ts",
        docsUrl: "https://prisma-next.dev/docs/cli/db-verify"
    });
}
/**
* Family verify.readMarker is required but not provided.
*/ function errorFamilyReadMarkerSqlRequired(options) {
    return new CliStructuredError("4007", "Family readMarker() is required", {
        domain: "CLI",
        why: options?.why ?? "Family verify.readMarker is required for db verify",
        fix: "Ensure family.verify.readMarker() is exported by your family package",
        docsUrl: "https://prisma-next.dev/docs/cli/db-verify"
    });
}
/**
* JSON output format not supported.
*/ function errorJsonFormatNotSupported(options) {
    return new CliStructuredError("4008", "Unsupported JSON format", {
        domain: "CLI",
        why: `The ${options.command} command does not support --json ${options.format}`,
        fix: `Use --json ${options.supportedFormats.join(" or ")}, or omit --json for human output`,
        meta: {
            command: options.command,
            format: options.format,
            supportedFormats: options.supportedFormats
        }
    });
}
/**
* Driver is required for DB-connected commands but not provided.
*/ function errorDriverRequired(options) {
    return new CliStructuredError("4010", "Driver is required for DB-connected commands", {
        domain: "CLI",
        why: options?.why ?? "Config.driver is required for DB-connected commands",
        fix: "Add a control-plane driver to prisma-next.config.ts (e.g. import a driver descriptor and set `driver: postgresDriver`)",
        docsUrl: "https://prisma-next.dev/docs/cli/config"
    });
}
/**
* Contract requires extension packs that are not provided by config descriptors.
*/ function errorContractMissingExtensionPacks(options) {
    const missing = [
        ...options.missingExtensionPacks
    ].sort();
    return new CliStructuredError("4011", "Missing extension packs in config", {
        domain: "CLI",
        why: missing.length === 1 ? `Contract requires extension pack '${missing[0]}', but CLI config does not provide a matching descriptor.` : `Contract requires extension packs ${missing.map((p)=>`'${p}'`).join(", ")}, but CLI config does not provide matching descriptors.`,
        fix: "Add the missing extension descriptors to `extensions` in prisma-next.config.ts",
        docsUrl: "https://prisma-next.dev/docs/cli/config",
        meta: {
            missingExtensionPacks: missing,
            providedComponentIds: [
                ...options.providedComponentIds
            ].sort()
        }
    });
}
/**
* Migration planning failed due to conflicts.
*/ function errorMigrationPlanningFailed(options) {
    const conflictSummaries = options.conflicts.map((c)=>c.summary);
    const computedWhy = options.why ?? conflictSummaries.join("\n");
    const conflictFixes = options.conflicts.map((c)=>c.why).filter((why)=>typeof why === "string");
    return new CliStructuredError("4020", "Migration planning failed", {
        domain: "CLI",
        why: computedWhy,
        fix: conflictFixes.length > 0 ? conflictFixes.join("\n") : "Use `db verify --schema-only` to inspect conflicts, or ensure the database is empty",
        meta: {
            conflicts: options.conflicts
        },
        docsUrl: "https://prisma-next.dev/docs/cli/db-init"
    });
}
/**
* Target does not support migrations (missing createPlanner/createRunner).
*/ function errorTargetMigrationNotSupported(options) {
    return new CliStructuredError("4021", "Target does not support migrations", {
        domain: "CLI",
        why: options?.why ?? "The configured target does not provide migration planner/runner",
        fix: "Select a target that provides migrations (it must export `target.migrations` for db init)",
        docsUrl: "https://prisma-next.dev/docs/cli/db-init"
    });
}
/**
* The migration-file CLI received `--config` without a path argument (either
* a bare trailing `--config`, or `--config` followed by another flag like
* `--config --dry-run`). Surfacing this as a structured error fails fast
* rather than silently consuming the next flag as the config path or
* falling back to default discovery against the wrong project.
*/ function errorMigrationCliInvalidConfigArg(options) {
    return new CliStructuredError("4012", "--config flag requires a path argument", {
        domain: "CLI",
        why: options?.nextToken !== void 0 ? `\`--config\` was followed by another flag (\`${options.nextToken}\`) instead of a path argument.` : "`--config` was passed without a following path argument.",
        fix: "Pass a config path: `--config <path>` or `--config=<path>`.",
        meta: options?.nextToken !== void 0 ? {
            nextToken: options.nextToken
        } : {}
    });
}
/**
* The migration-file CLI received a flag it does not recognise. Surfaced as a
* structured error so consumers can render their own "did you mean"
* suggestions from `meta.knownFlags` rather than parsing the message.
*
* Designed to wrap clipanion's `UnknownSyntaxError` at the parser boundary:
* pass the offending token as `flag` and the option declarations as
* `knownFlags`.
*/ function errorMigrationCliUnknownFlag(options) {
    const knownList = options.knownFlags.join(", ");
    return new CliStructuredError("4013", "Unknown migration CLI flag", {
        domain: "CLI",
        why: `Unknown flag \`${options.flag}\`.`,
        fix: `Known flags: ${knownList}. Run with \`--help\` to see the full list.`,
        meta: {
            flag: options.flag,
            knownFlags: options.knownFlags
        }
    });
}
/**
* The main CLI received an unsupported `--format` value.
*/ function errorInvalidOutputFormat(value) {
    return new CliStructuredError("4014", `Invalid --format value "${value}". Allowed values: pretty, json.`, {
        domain: "CLI",
        meta: {
            value,
            allowed: [
                "pretty",
                "json"
            ]
        }
    });
}
/**
* The main CLI received mutually exclusive output format flags
* (`--format pretty` together with `--json`).
*/ function errorOutputFormatMutex() {
    return new CliStructuredError("4015", "Cannot use --format pretty together with --json. Use --format json or --json alone for JSON output.", {
        domain: "CLI"
    });
}
/**
* Config validation error (missing required fields).
*/ function errorConfigValidation(field, options) {
    return new CliStructuredError("4009", "Config validation error", {
        domain: "CLI",
        why: options?.why ?? `Config must have a "${field}" field`,
        fix: "Check your prisma-next.config.ts and ensure all required fields are provided",
        docsUrl: "https://prisma-next.dev/docs/cli/config"
    });
}
/**
* An enum declares a codecId that no component in the contract's pack stack provides,
* so its member values cannot be encoded. Thrown by both authoring paths (TS `defineContract`
* and PSL interpretation) when the codec lookup built from the contract's packs has no
* descriptor for the codecId.
*/ function errorEnumCodecNotInPackStack(options) {
    return new CliStructuredError("4016", `Enum codec "${options.codecId}" is not part of the contract's pack stack`, {
        domain: "CON",
        why: `An enum uses codec "${options.codecId}", but no family, target, or extension pack in the contract provides it.`,
        fix: "Use a codec provided by the contract's target/extension packs, or add the pack that supplies this codec.",
        meta: {
            codecId: options.codecId
        }
    });
}
/**
* Generic unexpected error.
*/ function errorUnexpected(message, options) {
    return new CliStructuredError("4999", "Unexpected error", {
        domain: "CLI",
        why: options?.why ?? message,
        fix: options?.fix ?? "Check the error message and try again"
    });
}
;
}),
"[project]/node_modules/@prisma-next/errors/dist/execution.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_CODE_DESTRUCTIVE_CHANGES",
    ()=>ERROR_CODE_DESTRUCTIVE_CHANGES,
    "errorDestructiveChanges",
    ()=>errorDestructiveChanges,
    "errorHashMismatch",
    ()=>errorHashMismatch,
    "errorMarkerMissing",
    ()=>errorMarkerMissing,
    "errorMarkerReadFailed",
    ()=>errorMarkerReadFailed,
    "errorMarkerRequired",
    ()=>errorMarkerRequired,
    "errorMarkerRowCorrupt",
    ()=>errorMarkerRowCorrupt,
    "errorRunnerFailed",
    ()=>errorRunnerFailed,
    "errorRuntime",
    ()=>errorRuntime,
    "errorSchemaVerificationFailed",
    ()=>errorSchemaVerificationFailed,
    "errorTargetMismatch",
    ()=>errorTargetMismatch,
    "parseMarkerRowSafely",
    ()=>parseMarkerRowSafely,
    "rethrowMarkerReadError",
    ()=>rethrowMarkerReadError,
    "withMarkerReadErrorHandling",
    ()=>withMarkerReadErrorHandling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/errors/dist/control-BVMQqofj.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
;
;
//#region src/execution.ts
/**
* Contract marker not found in database.
*/ function errorMarkerMissing(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3001", "Database not signed", {
        domain: "RUN",
        why: options?.why ?? "No database signature (marker) found",
        fix: "Run `prisma-next db sign --db <url>` to sign the database"
    });
}
/**
* Contract hash does not match database marker.
*/ function errorHashMismatch(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3002", "Hash mismatch", {
        domain: "RUN",
        why: options?.why ?? "Contract hash does not match database marker",
        fix: "Migrate database or re-sign if intentional",
        ...options?.expected !== void 0 || options?.actual !== void 0 ? {
            meta: {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("expected", options?.expected),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("actual", options?.actual)
            }
        } : {}
    });
}
/**
* Contract target does not match config target.
*/ function errorTargetMismatch(expected, actual, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3003", "Target mismatch", {
        domain: "RUN",
        why: options?.why ?? `Contract target does not match config target (expected: ${expected}, actual: ${actual})`,
        fix: "Align contract target and config target",
        meta: {
            expected,
            actual
        }
    });
}
/**
* Marker row exists but column values fail schema validation.
*/ function errorMarkerRowCorrupt(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3005", "Marker row is corrupt or incompatible", {
        domain: "RUN",
        why: options.why,
        fix: `The ${options.markerLocation} row for space "${options.space}" contains invalid data. Delete the row, then run \`prisma-next db sign --db <url>\` to write a fresh marker.`,
        meta: {
            space: options.space
        }
    });
}
/**
* Driver-level failure while reading the contract marker table.
*/ function errorMarkerReadFailed(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3006", "Database error while reading contract marker", {
        domain: "RUN",
        why: options.why,
        fix: `Could not read marker at ${options.markerLocation} for space "${options.space}". Verify read permissions, connectivity, and locks, then retry.`,
        meta: {
            space: options.space
        }
    });
}
function isMarkerRowParseError(err) {
    return err instanceof Error && (err.message.startsWith("Invalid contract marker row:") || err.message.startsWith("Invalid marker doc on"));
}
function isLegacyMarkerShapeReadError(message) {
    const normalized = message.toLowerCase();
    return normalized.includes("column \"space\" does not exist") || normalized.includes("no such column: space");
}
function errorLegacyMarkerShape(options) {
    return errorRunnerFailed(`Legacy marker-table shape detected on ${options.markerLocation} (no \`space\` column). Prisma Next is in pre-1.0; the previous transitional auto-migration to the per-space-row schema has been removed. Drop \`${options.markerLocation}\` and re-run \`prisma-next db init\` to reinitialise from a clean baseline.`, {
        why: options.why,
        fix: "Legacy marker-table shape detected. Drop `prisma_contract.marker` (Postgres) or `_prisma_marker` (SQLite) and re-run `prisma-next db init` to recreate it with the current per-space schema.",
        meta: {
            code: "RUNNER_FAILED",
            runnerErrorCode: "LEGACY_MARKER_SHAPE"
        }
    });
}
function rethrowMarkerReadError(err, context) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"].is(err)) throw err;
    if (isMarkerRowParseError(err)) throw errorMarkerRowCorrupt({
        why: err.message,
        space: context.space,
        markerLocation: context.markerLocation
    });
    const message = err instanceof Error ? err.message : String(err);
    if (isLegacyMarkerShapeReadError(message)) throw errorLegacyMarkerShape({
        why: message,
        markerLocation: context.markerLocation
    });
    throw errorMarkerReadFailed({
        why: message,
        space: context.space,
        markerLocation: context.markerLocation
    });
}
async function withMarkerReadErrorHandling(operation, context) {
    try {
        return await operation();
    } catch (err) {
        rethrowMarkerReadError(err, context);
    }
}
function parseMarkerRowSafely(row, parse, context) {
    try {
        return parse(row);
    } catch (err) {
        rethrowMarkerReadError(err, context);
    }
}
/**
* Database marker is required but not found.
* Used by commands that require a pre-existing marker as a precondition.
*/ function errorMarkerRequired(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3010", "Database must be signed first", {
        domain: "RUN",
        why: options?.why ?? "No database signature (marker) found",
        fix: options?.fix ?? "Run `prisma-next db init` first to sign the database"
    });
}
/**
* Schema verification found mismatches between the database and the contract.
* The full verification result is preserved in `meta.verificationResult`.
*/ function errorSchemaVerificationFailed(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3004", options.summary, {
        domain: "RUN",
        why: "Database schema does not satisfy the contract",
        fix: "Run `prisma-next db update` to reconcile, or adjust your contract to match the database",
        meta: {
            verificationResult: options.verificationResult,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("issues", options.issues)
        }
    });
}
/**
* Migration runner failed during execution.
*/ function errorRunnerFailed(summary, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3020", summary, {
        domain: "RUN",
        why: options?.why ?? "Migration runner failed",
        fix: options?.fix ?? "Inspect the reported conflict and reconcile schema drift",
        ...options?.meta ? {
            meta: options.meta
        } : {}
    });
}
/** Error code for destructive changes that require explicit confirmation. */ const ERROR_CODE_DESTRUCTIVE_CHANGES = "3030";
/**
* Destructive operations require explicit confirmation via -y/--yes.
*/ function errorDestructiveChanges(summary, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"](ERROR_CODE_DESTRUCTIVE_CHANGES, summary, {
        domain: "RUN",
        why: options?.why ?? "Planned operations include destructive changes that require confirmation",
        fix: options?.fix ?? "Re-run with `-y` to apply, or use `--dry-run` to preview first",
        ...options?.meta ? {
            meta: options.meta
        } : {}
    });
}
/**
* Generic runtime error.
*/ function errorRuntime(summary, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$errors$2f$dist$2f$control$2d$BVMQqofj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]("3000", summary, {
        domain: "RUN",
        ...options?.why ? {
            why: options.why
        } : {
            why: "Verification failed"
        },
        ...options?.fix ? {
            fix: options.fix
        } : {
            fix: "Check contract and database state"
        },
        ...options?.meta ? {
            meta: options.meta
        } : {}
    });
}
;
}),
"[project]/node_modules/@prisma-next/family-sql/dist/runtime.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>runtime_default,
    "timestampNowRuntimeGenerator",
    ()=>timestampNowRuntimeGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$DRXygu32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/family-sql/dist/timestamp-now-generator-DRXygu32.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$default$2d$namespace$2d$rpdJeUMq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__UNBOUND_DOMAIN_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/default-namespace-rpdJeUMq.mjs [app-rsc] (ecmascript) <export t as UNBOUND_DOMAIN_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$resolve$2d$domain$2d$model$2d$BovPAsW2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__resolveDomainModel$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/resolve-domain-model-BovPAsW2.mjs [app-rsc] (ecmascript) <export t as resolveDomainModel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$resolve$2d$storage$2d$table$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/resolve-storage-table.mjs [app-rsc] (ecmascript)");
;
;
;
//#region src/core/runtime-instance.ts
/**
* Creates a SQL execution-plane family instance.
*
* This will be renamed to `createSqlExecutionFamilyInstance()` as part of `TML-1842`.
*/ function createSqlRuntimeFamilyInstance() {
    return {
        familyId: "sql"
    };
}
//#endregion
//#region src/core/runtime-descriptor.ts
/**
* SQL execution-plane family descriptor.
*
* Note: this is currently named `sqlRuntimeFamilyDescriptor` because the execution plane
* framework types are still using the `Runtime*` naming (`RuntimeFamilyDescriptor`, etc.).
*
* This will be renamed to `sqlExecutionFamilyDescriptor` as part of `TML-1842`.
*/ const sqlRuntimeFamilyDescriptor = {
    kind: "family",
    id: "sql",
    familyId: "sql",
    version: "0.0.1",
    create () {
        return createSqlRuntimeFamilyInstance();
    }
};
Object.freeze(sqlRuntimeFamilyDescriptor);
//#endregion
//#region src/core/timestamp-now-runtime-generator.ts
/**
* Builds the canonical runtime-plane generator for the wall-clock-now
* mutation default. Returns `new Date()`; semantics are target-agnostic
* so all SQL targets share this single implementation.
*
* Declares `stability: 'query'` so a single ORM bulk operation
* (e.g. `createAll([...])`) shares one timestamp across every row and
* every timestamp-defaulted column. Matches Prisma 6's `@updatedAt`
* semantics: one `new Date()` per lowered mutation, not per row.
*
* Lives in a runtime-plane-only module so the control-plane
* `timestamp-now-generator.ts` (descriptor + authoring presets) stays
* free of `@prisma-next/sql-runtime` imports.
*/ function timestampNowRuntimeGenerator() {
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$DRXygu32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
        generate: ()=>/* @__PURE__ */ new Date(),
        stability: "query"
    };
}
//#endregion
//#region src/exports/runtime.ts
var runtime_default = sqlRuntimeFamilyDescriptor;
;
}),
"[project]/node_modules/@prisma-next/family-sql/dist/sql-contract-serializer-C75cfMSS.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>SqlContractSerializerBase,
    "t",
    ()=>SqlContractSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$canonicalization$2d$hooks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/canonicalization-hooks.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/types.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$entity$2d$kinds$2d$CVg6HzG2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__composeSqlEntityKinds$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/entity-kinds-CVg6HzG2.mjs [app-rsc] (ecmascript) <export t as composeSqlEntityKinds>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$validators$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/validators.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
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
//#region src/core/ir/sql-contract-serializer-base.ts
const NamespaceRawSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    id: "string",
    "kind?": "string",
    entries: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "ignore"
    })
});
/**
* SQL family `ContractSerializer` abstract base. Carries the SQL-shared
* deserialization pipeline:
*
* 1. `parseSqlContractStructure` validates the on-disk JSON envelope
*    against the SQL contract arktype schema (`validateSqlContractFully`)
*    and returns the validated flat-data shape.
* 2. `hydrateSqlStorage` walks the validated `storage` subtree and
*    constructs the family-shared SQL Contract IR class hierarchy
*    (`SqlStorage` -> `StorageTable` -> `StorageColumn` / `PrimaryKey`
*    / …). The rest of the contract envelope is JSON-clean primitive
*    data and passes through unchanged.
* 3. `constructTargetContract` is the target-specific extension hook;
*    defaults to identity. Targets that need to attach target-only
*    fields (e.g. target-specific derived storage fields) override it.
*
* Default `serializeContract` is identity over the contract — concrete
* SQL targets ship JSON-clean class instances, so the contract value
* can be stringified directly. The non-enumerable family-level `kind`
* discriminator on `SqlNode` instances stays out of the persisted
* envelope automatically. Targets that need to canonicalize on the way
* out (key ordering, dropping computed-only fields) override
* `serializeContract` directly.
*/ var SqlContractSerializerBase = class {
    entityHydrationRegistry;
    contractSchema;
    entryKinds;
    constructor(entityHydrationRegistry = /* @__PURE__ */ new Map(), packEntityKinds = []){
        this.entityHydrationRegistry = entityHydrationRegistry;
        this.entryKinds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$entity$2d$kinds$2d$CVg6HzG2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__composeSqlEntityKinds$3e$__["composeSqlEntityKinds"])(packEntityKinds);
        this.contractSchema = packEntityKinds.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$validators$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSqlContractSchema"])(this.entryKinds) : void 0;
    }
    deserializeContract(json) {
        const validated = this.parseSqlContractStructure(json);
        const hydrated = this.hydrateSqlStorage(validated);
        return this.constructTargetContract(hydrated);
    }
    serializeContract(contract) {
        return contract;
    }
    shouldPreserveEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$canonicalization$2d$hooks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqlContractCanonicalizationHooks"].shouldPreserveEmpty;
    sortStorage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$canonicalization$2d$hooks$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqlContractCanonicalizationHooks"].sortStorage;
    parseSqlContractStructure(json) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$validators$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateSqlContractFully"])(json, this.contractSchema !== void 0 ? {
            contractSchema: this.contractSchema
        } : void 0);
    }
    hydrateSqlStorage(validated) {
        const types = validated.storage.types;
        const hydratedTypes = types !== void 0 ? Object.fromEntries(Object.entries(types).map(([name, entry])=>[
                name,
                this.hydrateStorageTypeEntry(entry)
            ])) : void 0;
        const rawNamespaces = validated.storage.namespaces;
        if (rawNamespaces === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("Contract storage.namespaces is required after structural validation", "structural");
        const hydratedNamespaces = this.hydrateSqlNamespaceMap((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(rawNamespaces));
        return {
            ...validated,
            storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SqlStorage"]({
                storageHash: validated.storage.storageHash,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("types", hydratedTypes),
                namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(hydratedNamespaces)
            })
        };
    }
    hydrateSqlNamespaceMap(namespaces) {
        return Object.fromEntries(Object.entries(namespaces).map(([nsId, namespaceEntryRaw])=>{
            const namespaceHydrated = this.hydrateSqlNamespaceEntry(nsId, namespaceEntryRaw);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isMaterializedSqlNamespace"])(namespaceHydrated)) throw new Error(`Target serializer bug: hydrateSqlNamespaceEntry for namespace "${nsId}" returned a non-NamespaceBase value. Override hydrateSqlNamespaceEntry to produce a target namespace concretion.`);
            return [
                nsId,
                namespaceHydrated
            ];
        }));
    }
    hydrateSqlNamespaceEntry(nsId, raw) {
        const id = typeof raw["id"] === "string" ? raw["id"] : nsId;
        const parsed = NamespaceRawSchema({
            ...raw,
            id
        });
        if (parsed instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace hydration failed: ${parsed.map((p)=>p.message).join("; ")}`, "structural");
        const entriesRaw = parsed.entries;
        const rawEntriesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(entriesRaw) ? entriesRaw : {};
        const entriesInput = {};
        for (const [key, innerMap] of Object.entries(rawEntriesMap))entriesInput[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(innerMap) ? innerMap : Object.freeze({});
        const entriesOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hydrateNamespaceEntities"])(entriesInput, this.entryKinds, "fail", id);
        if (!Object.hasOwn(entriesOutput, "table")) entriesOutput["table"] = {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            id,
            entries: entriesOutput
        });
    }
    hydrateStorageTypeEntry(entry) {
        if (typeof entry !== "object" || entry === null) return entry;
        const kind = entry.kind;
        if (typeof kind !== "string") return entry;
        const factory = this.entityHydrationRegistry.get(kind);
        if (factory === void 0) return entry;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(factory(entry));
    }
    constructTargetContract(hydrated) {
        return hydrated;
    }
    /**
	* Serializes a namespace's `entries` dict by walking every enumerable
	* kind — no kind is named here, mirroring the generic hydrate walk in
	* `hydrateSqlNamespaceEntry` above. `table` is the SQL family's one
	* universal base kind (every namespace carries it), so it is always
	* emitted, even when empty; every other kind — target- or
	* pack-contributed — is emitted only when it holds at least one entry.
	* A kind carried non-enumerable on `entries` is excluded here for free,
	* since `Object.entries` honors enumerability.
	*/ serializeNamespaceEntries(entries) {
        const out = {
            table: this.serializeEntries(entries["table"] ?? {})
        };
        for (const [kind, record] of Object.entries(entries)){
            if (kind === "table" || record == null || Object.keys(record).length === 0) continue;
            out[kind] = this.serializeEntries(record);
        }
        return out;
    }
    serializeEntries(entries) {
        const out = {};
        for (const [name, entry] of Object.entries(entries))out[name] = this.serializeJsonObject(entry);
        return out;
    }
    serializeJsonObject(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(this.serializeJsonValue(value));
    }
    serializeJsonValue(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(JSON.parse(JSON.stringify(value)));
    }
};
//#endregion
//#region src/core/ir/sql-contract-serializer.ts
/**
* Default SQL family `ContractSerializer` concretion. Inherits the
* full SQL-shared deserialization pipeline (structural validation +
* IR-class hydration) without pack-registered `storage.types`
* hydration factories — targets that emit polymorphic JSON outside the
* codec-typed envelope wire a target-specific subclass with a populated
* registry (see Postgres). Family-level call sites instantiate this
* default directly when no target serializer is supplied.
*
* Because this serializer has no target concretion, deserialization of
* contracts that include namespace entries from JSON will throw unless
* the caller provides pre-hydrated `NamespaceBase` instances. Production
* paths always supply a target-specific serializer.
*/ var SqlContractSerializer = class extends SqlContractSerializerBase {
    constructor(){
        super(/* @__PURE__ */ new Map());
    }
};
;
}),
"[project]/node_modules/@prisma-next/family-sql/dist/sql-contract-serializer-C75cfMSS.mjs [app-rsc] (ecmascript) <export n as SqlContractSerializerBase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlContractSerializerBase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$sql$2d$contract$2d$serializer$2d$C75cfMSS$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$sql$2d$contract$2d$serializer$2d$C75cfMSS$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/family-sql/dist/sql-contract-serializer-C75cfMSS.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/family-sql/dist/timestamp-now-generator-DRXygu32.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>timestampNowControlDescriptor,
    "i",
    ()=>temporalCodecPresetWithPrecision,
    "n",
    ()=>temporalAuthoringPresets,
    "r",
    ()=>temporalCodecPreset,
    "t",
    ()=>TIMESTAMP_NOW_GENERATOR_ID
]);
//#region src/core/timestamp-now-generator.ts
/**
* Canonical id for the wall-clock-now mutation default generator.
*
* Owned by `family-sql` because that's where the generator lives. The
* id flows out from here to (1) the control-plane descriptor and the
* temporal field-preset pair below, (2) the runtime-plane sibling
* `timestamp-now-runtime-generator.ts`, and (3) authoring surfaces
* (PSL `temporal.updatedAt()`, TS `field.temporal.updatedAt()`) via
* the descriptor flow. Co-locating the constant with its only owner
* keeps the framework layer free of concrete generator ids.
*/ const TIMESTAMP_NOW_GENERATOR_ID = "timestampNow";
/**
* Builds the canonical control-plane descriptor for the wall-clock-now
* mutation default generator. The descriptor's `id` and `buildPhases`
* are target-agnostic so PSL `temporal.updatedAt()` and TS
* `field.temporal.updatedAt()` lower to byte-identical contracts.
*
* `applicableCodecIds` is omitted: `timestampNow` is preset-only (not
* reachable via `@default(timestampNow())` lowering), and the codec is
* co-registered by the preset descriptor itself, so the
* `@default(...)` compatibility check has no role to play here.
*/ function timestampNowControlDescriptor() {
    return {
        id: TIMESTAMP_NOW_GENERATOR_ID,
        buildPhases: ()=>({
                onCreate: {
                    kind: "generator",
                    id: TIMESTAMP_NOW_GENERATOR_ID
                },
                onUpdate: {
                    kind: "generator",
                    id: TIMESTAMP_NOW_GENERATOR_ID
                }
            })
    };
}
/**
* Builds the canonical `temporal.{createdAt,updatedAt}` field-preset pair
* for a SQL target. `createdAt` lowers to a `now()` storage default;
* `updatedAt` lowers to the `timestampNow` execution generator on both
* `onCreate` and `onUpdate` (RD: "last modified time", non-null). Targets
* supply the codec/native-type pair that matches their timestamp column;
* everything else is shared so PSL `temporal.updatedAt()` and TS
* `field.temporal.updatedAt()` lower to byte-identical contracts across
* targets by construction.
*/ /* @__NO_SIDE_EFFECTS__ */ function temporalAuthoringPresets(input) {
    const { codecId, nativeType } = input;
    return {
        createdAt: {
            kind: "fieldPreset",
            output: {
                codecId,
                nativeType,
                default: {
                    kind: "function",
                    expression: "now()"
                }
            }
        },
        updatedAt: {
            kind: "fieldPreset",
            output: {
                codecId,
                nativeType,
                executionDefaults: {
                    onCreate: {
                        kind: "generator",
                        id: TIMESTAMP_NOW_GENERATOR_ID
                    },
                    onUpdate: {
                        kind: "generator",
                        id: TIMESTAMP_NOW_GENERATOR_ID
                    }
                }
            }
        }
    };
}
const TEMPORAL_PRECISION_ARG = {
    name: "precision",
    kind: "number",
    optional: true,
    integer: true,
    minimum: 0
};
const TEMPORAL_ON_CREATE_ARG = {
    name: "onCreate",
    kind: "option",
    values: [
        "now"
    ],
    optional: true
};
const TEMPORAL_ON_UPDATE_ARG = {
    name: "onUpdate",
    kind: "option",
    values: [
        "now"
    ],
    optional: true
};
/**
* Selects the `timestampNow` generator descriptor for the preset's `now`
* token. The token is preset vocabulary; the generator id never appears in a
* user's spelling (ADR 169 — `timestampNow` is preset-only).
*/ function temporalPhaseTemplate(index) {
    return {
        kind: "select",
        index,
        cases: {
            now: {
                kind: "generator",
                id: TIMESTAMP_NOW_GENERATOR_ID
            }
        }
    };
}
/**
* Builds a `temporal.<codec>` field preset for a codec that takes a precision
* parameter (`pg/timestamp@1`, `pg/timestamptz@1`). Arguments change field
* properties only — never the codec, which the caller fixes here.
*
* All three arguments are optional: omitting `precision` omits `typeParams`
* entirely, and omitting a phase omits that phase (both omitted omits
* `executionDefaults`).
*/ /* @__NO_SIDE_EFFECTS__ */ function temporalCodecPresetWithPrecision(input) {
    return {
        kind: "fieldPreset",
        args: [
            TEMPORAL_PRECISION_ARG,
            TEMPORAL_ON_CREATE_ARG,
            TEMPORAL_ON_UPDATE_ARG
        ],
        output: {
            codecId: input.codecId,
            nativeType: input.nativeType,
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            },
            executionDefaults: {
                onCreate: temporalPhaseTemplate(1),
                onUpdate: temporalPhaseTemplate(2)
            }
        }
    };
}
/**
* Builds a `temporal.<codec>` field preset for a codec with no type
* parameters (`sqlite/datetime@1`). As with the precision-bearing variant,
* both phase arguments are optional and omitting one omits that phase.
*/ /* @__NO_SIDE_EFFECTS__ */ function temporalCodecPreset(input) {
    return {
        kind: "fieldPreset",
        args: [
            TEMPORAL_ON_CREATE_ARG,
            TEMPORAL_ON_UPDATE_ARG
        ],
        output: {
            codecId: input.codecId,
            nativeType: input.nativeType,
            executionDefaults: {
                onCreate: temporalPhaseTemplate(0),
                onUpdate: temporalPhaseTemplate(1)
            }
        }
    };
}
;
}),
"[project]/node_modules/@prisma-next/family-sql/dist/timestamp-now-generator-DRXygu32.mjs [app-rsc] (ecmascript) <export i as temporalCodecPresetWithPrecision>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "temporalCodecPresetWithPrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$DRXygu32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$DRXygu32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/family-sql/dist/timestamp-now-generator-DRXygu32.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/family-sql/dist/timestamp-now-generator-DRXygu32.mjs [app-rsc] (ecmascript) <export n as temporalAuthoringPresets>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "temporalAuthoringPresets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$DRXygu32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$DRXygu32$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/family-sql/dist/timestamp-now-generator-DRXygu32.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/family-sql/dist/verify-C-G0obRm.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>parseContractMarkerRow,
    "t",
    ()=>collectSupportedCodecTypeIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
;
//#region src/core/verify.ts
const MetaSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "[string]": "unknown"
});
function parseMeta(meta) {
    if (meta === null || meta === void 0) return {};
    let parsed;
    if (typeof meta === "string") try {
        parsed = JSON.parse(meta);
    } catch  {
        return {};
    }
    else parsed = meta;
    const result = MetaSchema(parsed);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) return {};
    return result;
}
/**
* SQLite stores `contract_json` as TEXT, so the wire shape is a JSON string;
* Postgres uses `jsonb` and returns an already-parsed value. Normalize both
* here so `ContractMarkerRecord.contractJson` is always the structured form.
*/ function parseContractJson(value) {
    if (value === null || value === void 0) return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(value);
    } catch  {
        return null;
    }
}
const ContractMarkerRowSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    core_hash: "string",
    profile_hash: "string",
    "contract_json?": "unknown | null",
    "canonical_version?": "number | null",
    "updated_at?": "Date | string",
    "app_tag?": "string | null",
    "meta?": "unknown | null",
    invariants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string").array()
});
/**
* Parses a contract marker row from database query result.
* This is SQL-specific parsing logic (handles SQL row structure with snake_case columns).
*/ function parseContractMarkerRow(row) {
    const result = ContractMarkerRowSchema(row);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) {
        const messages = result.map((p)=>p.message).join("; ");
        throw new Error(`Invalid contract marker row: ${messages}`);
    }
    const updatedAt = result.updated_at ? result.updated_at instanceof Date ? result.updated_at : new Date(result.updated_at) : /* @__PURE__ */ new Date();
    return {
        storageHash: result.core_hash,
        profileHash: result.profile_hash,
        contractJson: parseContractJson(result.contract_json),
        canonicalVersion: result.canonical_version ?? null,
        updatedAt,
        appTag: result.app_tag ?? null,
        meta: parseMeta(result.meta),
        invariants: result.invariants
    };
}
/**
* Collects supported codec type IDs from adapter and extension manifests.
* Returns a sorted, unique array of type IDs that are declared in the manifests.
* This enables coverage checks by comparing contract column types against supported types.
*
* Note: This extracts type IDs from manifest type imports, not from runtime codec registries.
* The manifests declare which codec types are available, but the actual type IDs
* are defined in the codec-types TypeScript modules that are imported.
*
* For MVP, we return an empty array since extracting type IDs from TypeScript modules
* would require runtime evaluation or static analysis. This can be enhanced later.
*/ function collectSupportedCodecTypeIds(descriptors) {
    return [];
}
;
}),
"[project]/node_modules/@prisma-next/family-sql/dist/verify-C-G0obRm.mjs [app-rsc] (ecmascript) <export n as parseContractMarkerRow>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseContractMarkerRow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$verify$2d$C$2d$G0obRm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$family$2d$sql$2f$dist$2f$verify$2d$C$2d$G0obRm$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/family-sql/dist/verify-C-G0obRm.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/ids/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "builtinGeneratorIds",
    ()=>builtinGeneratorIds,
    "builtinGeneratorRegistryMetadata",
    ()=>builtinGeneratorRegistryMetadata,
    "cuid2",
    ()=>cuid2,
    "ksuid",
    ()=>ksuid,
    "nanoid",
    ()=>nanoid,
    "resolveBuiltinGeneratedColumnDescriptor",
    ()=>resolveBuiltinGeneratedColumnDescriptor,
    "ulid",
    ()=>ulid,
    "uuidv4",
    ()=>uuidv4,
    "uuidv7",
    ()=>uuidv7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
;
//#region src/generator-ids.ts
const builtinGeneratorIds = [
    "ulid",
    "nanoid",
    "uuidv7",
    "uuidv4",
    "cuid2",
    "ksuid"
];
//#endregion
//#region src/index.ts
function resolveNanoidColumnDescriptor(params) {
    const rawSize = params?.["size"];
    if (rawSize === void 0) return {
        type: {
            codecId: "sql/char@1",
            nativeType: "character"
        },
        typeParams: {
            length: 21
        }
    };
    if (typeof rawSize !== "number" || !Number.isInteger(rawSize) || rawSize < 2 || rawSize > 255) throw new Error("nanoid size must be an integer between 2 and 255");
    return {
        type: {
            codecId: "sql/char@1",
            nativeType: "character"
        },
        typeParams: {
            length: rawSize
        }
    };
}
const builtinGeneratorMetadataById = {
    ulid: {
        applicableCodecIds: [
            "pg/text@1",
            "sql/char@1"
        ],
        generatedColumnDescriptor: {
            type: {
                codecId: "sql/char@1",
                nativeType: "character"
            },
            typeParams: {
                length: 26
            }
        }
    },
    nanoid: {
        applicableCodecIds: [
            "pg/text@1",
            "sql/char@1"
        ],
        generatedColumnDescriptor: {
            type: {
                codecId: "sql/char@1",
                nativeType: "character"
            },
            typeParams: {
                length: 21
            }
        },
        resolveGeneratedColumnDescriptor: resolveNanoidColumnDescriptor
    },
    uuidv7: {
        applicableCodecIds: [
            "pg/text@1",
            "sql/char@1",
            "pg/uuid@1"
        ],
        generatedColumnDescriptor: {
            type: {
                codecId: "sql/char@1",
                nativeType: "character"
            },
            typeParams: {
                length: 36
            }
        }
    },
    uuidv4: {
        applicableCodecIds: [
            "pg/text@1",
            "sql/char@1",
            "pg/uuid@1"
        ],
        generatedColumnDescriptor: {
            type: {
                codecId: "sql/char@1",
                nativeType: "character"
            },
            typeParams: {
                length: 36
            }
        }
    },
    cuid2: {
        applicableCodecIds: [
            "pg/text@1",
            "sql/char@1"
        ],
        generatedColumnDescriptor: {
            type: {
                codecId: "sql/char@1",
                nativeType: "character"
            },
            typeParams: {
                length: 24
            }
        }
    },
    ksuid: {
        applicableCodecIds: [
            "pg/text@1",
            "sql/char@1"
        ],
        generatedColumnDescriptor: {
            type: {
                codecId: "sql/char@1",
                nativeType: "character"
            },
            typeParams: {
                length: 27
            }
        }
    }
};
const builtinGeneratorRegistryMetadata = builtinGeneratorIds.map((id)=>({
        id,
        applicableCodecIds: builtinGeneratorMetadataById[id].applicableCodecIds
    }));
function resolveBuiltinGeneratedColumnDescriptor(input) {
    const metadata = builtinGeneratorMetadataById[input.id];
    if (metadata.resolveGeneratedColumnDescriptor) return metadata.resolveGeneratedColumnDescriptor(input.params);
    return metadata.generatedColumnDescriptor;
}
function createGeneratedSpec(id, options) {
    const params = options;
    const resolvedDescriptor = resolveBuiltinGeneratedColumnDescriptor({
        id,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("params", params)
    });
    return {
        type: resolvedDescriptor.type,
        nullable: false,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("typeParams", resolvedDescriptor.typeParams),
        generated: {
            kind: "generator",
            id,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("params", params)
        }
    };
}
const ulid = (options)=>createGeneratedSpec("ulid", options);
const nanoid = (options)=>createGeneratedSpec("nanoid", options);
const uuidv7 = (options)=>createGeneratedSpec("uuidv7", options);
const uuidv4 = (options)=>createGeneratedSpec("uuidv4", options);
const cuid2 = (options)=>createGeneratedSpec("cuid2", options);
const ksuid = (options)=>createGeneratedSpec("ksuid", options);
;
}),
"[project]/node_modules/@prisma-next/ids/dist/runtime.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateId",
    ()=>generateId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$cuid2$2f$cuid2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/cuid2/cuid2.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$ksuid$2f$ksuid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/ksuid/ksuid.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$nanoid$2f$nanoid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/nanoid/nanoid.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$ulid$2f$ulid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/ulid/ulid.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2f$v4$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid/v4.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2f$v7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid/v7.mjs [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
//#region src/generators.ts
function invokeGenerator(generator, params) {
    if (params === void 0) return generator();
    return generator(params);
}
const idGenerators = {
    ulid: (params)=>invokeGenerator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$ulid$2f$ulid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ulid"], params),
    nanoid: (params)=>invokeGenerator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$nanoid$2f$nanoid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"], params),
    uuidv7: (params)=>invokeGenerator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2f$v7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uuidv7"], params),
    uuidv4: (params)=>invokeGenerator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2f$v4$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["uuidv4"], params),
    cuid2: (params)=>invokeGenerator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$cuid2$2f$cuid2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cuid2"], params),
    ksuid: (params)=>invokeGenerator(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$ksuid$2f$ksuid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ksuid"], params)
};
//#endregion
//#region src/runtime.ts
function isBuiltinGeneratorId(id) {
    return Object.hasOwn(idGenerators, id);
}
function generateId(spec) {
    if (!isBuiltinGeneratorId(spec.id)) throw new Error(`Unknown built-in ID generator "${spec.id}".`);
    return idGenerators[spec.id](spec.params);
}
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>n,
    "r",
    ()=>t,
    "t",
    ()=>e
]);
function e(e) {
    for(let t = e.length - 1; t >= 0; --t){
        if (e[t] < 255) return e[t] += 1, !0;
        e[t] = 0;
    }
    return !1;
}
function t(e, t, n) {
    e[t] = n / 1099511627776 & 255, e[t + 1] = n / 4294967296 & 255, e[t + 2] = n / 16777216 & 255, e[t + 3] = n / 65536 & 255, e[t + 4] = n / 256 & 255, e[t + 5] = n & 255;
}
function n(e, t, n) {
    e[t] = n >>> 24 & 255, e[t + 1] = n >>> 16 & 255, e[t + 2] = n >>> 8 & 255, e[t + 3] = n & 255;
}
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/cuid2/cuid2.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cuid2",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/sha3.js [app-rsc] (ecmascript)");
;
;
;
const i = /^[a-z][0-9a-z]+$/, a = `0123456789abcdefghijklmnopqrstuvwxyz`, o = new TextEncoder, s = {
    counter: void 0,
    fingerprint: void 0
};
function c() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])() % 476782368;
}
function l(e) {
    let t = 0n;
    for (let n of e)t = t * 256n + BigInt(n);
    return t;
}
function u(e) {
    if (e === 0n) return `0`;
    let t = [];
    for(; e > 0n;)t.push(a[Number(e % 36n)]), e /= 36n;
    return t.reverse().join(``);
}
function d(e) {
    return `abcdefghijklmnopqrstuvwxyz`[Math.floor(e() * 26)];
}
function f(e, t) {
    let n = Array(e);
    for(let r = 0; r < e; r++)n[r] = a[Math.floor(t() * 36)];
    return n.join(``);
}
function p(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha3_512"])(o.encode(e));
}
function m() {
    let e = h;
    return u(l(p(Object.keys(globalThis).toString() + f(32, e)))).slice(1, 33);
}
function h() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])() / 4294967296;
}
function g(e) {
    if (e) {
        if (e.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`CUID2_RANDOM_BYTES_EMPTY`, `Random byte array cannot be empty`);
        let n = 0;
        return ()=>{
            let t = e[n % e.length] / 256;
            return n += 1, t;
        };
    }
    return h;
}
function _(e) {
    let n = e?.length;
    if (n !== void 0 && (!Number.isInteger(n) || n < 2 || n > 32)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`CUID2_LENGTH_OUT_OF_RANGE`, `CUID2 length must be between 2 and 32. Received: ${n}`);
    let r = n ?? 24, i = g(e?.random);
    s.counter === void 0 && (s.counter = c()), s.fingerprint === void 0 && (s.fingerprint = m());
    let a = d(i), o = Date.now().toString(36);
    s.counter += 1;
    let h = s.counter.toString(36);
    return a + u(l(p(o + f(r, i) + h + s.fingerprint))).slice(1, r);
}
function v(e) {
    return typeof e == `string` && e.length >= 2 && e.length <= 32 && i.test(e);
}
const y = Object.assign(_, {
    isValid: v
});
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferError",
    ()=>r,
    "InvalidInputError",
    ()=>t,
    "ParseError",
    ()=>n,
    "UniqueIdError",
    ()=>e
]);
var e = class extends Error {
    constructor(e){
        super(e), this.name = this.constructor.name;
    }
}, t = class extends e {
    code;
    _tag = `InvalidInputError`;
    constructor(e, t){
        super(t), this.code = e;
    }
}, n = class extends e {
    code;
    _tag = `ParseError`;
    constructor(e, t){
        super(t), this.code = e;
    }
}, r = class extends e {
    code;
    _tag = `BufferError`;
    constructor(e, t){
        super(t), this.code = e;
    }
};
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/ksuid/ksuid.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ksuid",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-rsc] (ecmascript)");
;
;
;
;
const s = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`, c = 62n, l = (1n << 160n) - 1n, u = new Uint8Array(65536);
u.fill(255);
for(let e = 0; e < 62; e += 1)u[s.charCodeAt(e)] = e;
function d(e) {
    if (e.length < 20) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`KSUID_BYTES_TOO_SHORT`, `KSUID bytes must be at least 20 bytes, got ${e.length}`);
    let t = 0n;
    for(let n = 0; n < 20; n += 1)t = t << 8n | BigInt(e[n]);
    let r = ``;
    for(; t > 0n;){
        let e = t % c;
        t /= c, r = s[Number(e)] + r;
    }
    return r.padStart(27, `0`);
}
function f(e) {
    if (e.length !== 27) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`KSUID_INVALID_LENGTH`, `KSUID string must be 27 characters, got ${e.length}`);
    let t = 0n;
    for(let n = 0; n < 27; n += 1){
        let r = u[e.charCodeAt(n)];
        if (r === 255) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`KSUID_INVALID_CHAR`, `Invalid KSUID character: ${e[n]}`);
        t = t * c + BigInt(r);
    }
    if (t > l) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`KSUID_OVERFLOW`, `KSUID string exceeds 160-bit range`);
    let n = new Uint8Array(20);
    for(let e = 19; e >= 0; --e)n[e] = Number(t & 255n), t >>= 8n;
    return n;
}
const p = 14e8, m = d(new Uint8Array(20).fill(255)), h = /^[0-9A-Za-z]{27}$/;
function g(e, t, n, r) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(n, r, e);
    for(let e = 0; e < 16; e += 1)n[r + 4 + e] = t[e];
}
function _(i, a, o = 0) {
    let s = i?.random;
    if (s && s.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`KSUID_RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16 for KSUID`);
    let c, l = i?.secs;
    if (l !== void 0) {
        if (!Number.isInteger(l) || l < p) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`KSUID_TIMESTAMP_TOO_LOW`, `Timestamp must be >= KSUID epoch`);
        if (l > 5694967295) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`KSUID_TIMESTAMP_TOO_HIGH`, `Timestamp must be <= maximum KSUID timestamp`);
        c = l - p;
    } else c = Math.floor(Date.now() / 1e3) - p;
    let u = s ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])();
    if (a) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a, o, 20)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`KSUID_BUFFER_OUT_OF_BOUNDS`, `KSUID byte range ${o}:${o + 20 - 1} is out of buffer bounds`);
        return g(c, u, a, o), a;
    }
    let f = new Uint8Array(20);
    return g(c, u, f, 0), d(f);
}
function v(e) {
    return f(e);
}
function y(e) {
    if (e.length !== 20) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`KSUID_BYTES_INVALID_LENGTH`, `KSUID bytes must be exactly 20 bytes, got ${e.length}`);
    return d(e);
}
function b(e) {
    let t = f(e);
    return (((t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]) >>> 0) + p) * 1e3;
}
function x(e) {
    return typeof e == `string` && e.length === 27 && h.test(e) && e <= m;
}
const S = Object.assign(_, {
    toBytes: v,
    fromBytes: y,
    timestamp: b,
    isValid: x,
    NIL: `000000000000000000000000000`,
    MAX: m
});
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/nanoid/nanoid.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "URL_ALPHABET",
    ()=>n,
    "nanoid",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
;
const n = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-`, r = 2048, i = /^[A-Za-z0-9_-]+$/;
let a, o = 0;
function s(e) {
    let t = Math.min(e * 128, 65536);
    !a || a.length < t ? (a = new Uint8Array(t), crypto.getRandomValues(a), o = 0) : o + e > a.length && (crypto.getRandomValues(a), o = 0), o += e;
}
function c(e) {
    s(e);
    let t = ``;
    for(let r = o - e; r < o; r++)t += n[a[r] & 63];
    return t;
}
function l(t) {
    if (t.length < 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_ALPHABET_TOO_SHORT`, `Alphabet must contain at least 2 characters`);
    if (t.length > 256) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_ALPHABET_TOO_LONG`, `Alphabet must not exceed 256 characters`);
    let n = new Set;
    for (let r of t){
        let t = r.charCodeAt(0);
        if (t < 32 || t > 126) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_ALPHABET_INVALID_CHAR`, `Alphabet must contain only printable ASCII characters (32-126)`);
        if (n.has(r)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_ALPHABET_DUPLICATE`, `Duplicate character in alphabet: "${r}"`);
        n.add(r);
    }
}
function u(t) {
    if (!Number.isInteger(t) || t < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_SIZE_INVALID`, `Size must be a non-negative integer`);
    if (t > r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_SIZE_TOO_LARGE`, `Size must not exceed ${r}`);
}
function d(t) {
    if (t === void 0) return c(21);
    let r = 21, i = n, a;
    if (typeof t == `number` ? r = t : (r = t.size ?? 21, i = t.alphabet ?? `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-`, a = t.random, t.alphabet !== void 0 && l(i)), u(r), r === 0) return ``;
    if (i === `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-` && a === void 0) return c(r);
    let o = i.length;
    if (!(o & o - 1)) {
        let t = o - 1;
        if (a && a.length < r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_RANDOM_BYTES_INSUFFICIENT`, `Insufficient random bytes: need ${r}, have ${a.length}`);
        let n = a?.subarray(0, r) ?? globalThis.crypto.getRandomValues(new Uint8Array(r)), s = ``;
        for(let e = 0; e < r; e++)s += i[n[e] & t];
        return s;
    }
    let s = (2 << 31 - Math.clz32(o - 1 | 1)) - 1, d = Math.ceil(1.6 * s * r / o), f = ``, p = 0;
    for(; f.length < r;){
        let t;
        if (a) {
            if (a.length - p < d) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`NANOID_RANDOM_BYTES_INSUFFICIENT`, `Insufficient random bytes: need at least ${d} more, have ${a.length - p}`);
            t = a.subarray(p, p + d), p += d;
        } else t = globalThis.crypto.getRandomValues(new Uint8Array(d));
        for(let e = 0; e < t.length && f.length < r; e++){
            let n = t[e] & s;
            n < o && (f += i[n]);
        }
    }
    return f;
}
function f(e) {
    return typeof e == `string` && e.length > 0 && i.test(e);
}
const p = Object.assign(d, {
    isValid: f
});
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>a,
    "r",
    ()=>o,
    "t",
    ()=>i
]);
const e = globalThis.crypto.getRandomValues.bind(globalThis.crypto), t = new Uint8Array(256);
let n = 256;
function r() {
    e(t), n = 0;
}
function i(i) {
    if (i > 256) return e(new Uint8Array(i));
    n + i > 256 && r();
    let a = n;
    return n += i, t.subarray(a, n);
}
function a() {
    n > 252 && r();
    let e = t[n] * 16777216 + t[n + 1] * 65536 + t[n + 2] * 256 + t[n + 3] >>> 0;
    return n += 4, e;
}
function o() {
    n > 240 && r();
    let e = n;
    return n += 16, t.subarray(e, n);
}
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/ulid/ulid.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ulid",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-rsc] (ecmascript)");
;
;
;
;
const l = `0123456789ABCDEFGHJKMNPQRSTVWXYZ`, u = new Uint8Array(65536);
u.fill(255);
for(let e = 0; e < 32; e += 1){
    let t = l.charCodeAt(e), n = l[e].toLowerCase().charCodeAt(0);
    u[t] = e, u[n] = e;
}
function d(e, t) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`ULID_INVALID_CHAR`, `Invalid ULID character: ${e[t]}`);
}
function f() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`ULID_TIMESTAMP_OVERFLOW`, `ULID timestamp exceeds 48 bits`);
}
function p(e) {
    let t = u[e.charCodeAt(0)];
    if (t === 255) throw d(e, 0);
    if (t > 7) throw f();
    let n = t;
    for(let t = 1; t < 10; t += 1){
        let r = u[e.charCodeAt(t)];
        if (r === 255) throw d(e, t);
        n = n * 32 + r;
    }
    return n;
}
function m(e) {
    return l[Math.floor(e / 35184372088832) & 31] + l[Math.floor(e / 1099511627776) & 31] + l[Math.floor(e / 34359738368) & 31] + l[Math.floor(e / 1073741824) & 31] + l[Math.floor(e / 33554432) & 31] + l[Math.floor(e / 1048576) & 31] + l[Math.floor(e / 32768) & 31] + l[Math.floor(e / 1024) & 31] + l[Math.floor(e / 32) & 31] + l[e & 31];
}
function h(e) {
    return l[e[0] >> 3 & 31] + l[(e[0] << 2 | e[1] >> 6) & 31] + l[e[1] >> 1 & 31] + l[(e[1] << 4 | e[2] >> 4) & 31] + l[(e[2] << 1 | e[3] >> 7) & 31] + l[e[3] >> 2 & 31] + l[(e[3] << 3 | e[4] >> 5) & 31] + l[e[4] & 31] + l[e[5] >> 3 & 31] + l[(e[5] << 2 | e[6] >> 6) & 31] + l[e[6] >> 1 & 31] + l[(e[6] << 4 | e[7] >> 4) & 31] + l[(e[7] << 1 | e[8] >> 7) & 31] + l[e[8] >> 2 & 31] + l[(e[8] << 3 | e[9] >> 5) & 31] + l[e[9] & 31];
}
function g(e) {
    if (e.length !== 26) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`ULID_INVALID_LENGTH`, `ULID string must be 26 characters`);
    return p(e);
}
function _(e) {
    if (e.length !== 26) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`ULID_INVALID_LENGTH`, `ULID string must be 26 characters`);
    let t = new Uint8Array(16), n = u[e.charCodeAt(0)], r = u[e.charCodeAt(1)], i = u[e.charCodeAt(2)], o = u[e.charCodeAt(3)], s = u[e.charCodeAt(4)], c = u[e.charCodeAt(5)], l = u[e.charCodeAt(6)], p = u[e.charCodeAt(7)], m = u[e.charCodeAt(8)], h = u[e.charCodeAt(9)], g = u[e.charCodeAt(10)], _ = u[e.charCodeAt(11)], v = u[e.charCodeAt(12)], y = u[e.charCodeAt(13)], b = u[e.charCodeAt(14)], x = u[e.charCodeAt(15)], S = u[e.charCodeAt(16)], C = u[e.charCodeAt(17)], w = u[e.charCodeAt(18)], T = u[e.charCodeAt(19)], E = u[e.charCodeAt(20)], D = u[e.charCodeAt(21)], O = u[e.charCodeAt(22)], k = u[e.charCodeAt(23)], A = u[e.charCodeAt(24)], j = u[e.charCodeAt(25)];
    if ((n | r | i | o | s | c | l | p | m | h | g | _ | v | y | b | x | S | C | w | T | E | D | O | k | A | j) & 128) {
        for(let t = 0; t < 26; t += 1)if (u[e.charCodeAt(t)] === 255) throw d(e, t);
    }
    if (n > 7) throw f();
    return t[0] = n << 5 | r, t[1] = i << 3 | o >> 2, t[2] = o << 6 | s << 1 | c >> 4, t[3] = c << 4 | l >> 1, t[4] = l << 7 | p << 2 | m >> 3, t[5] = m << 5 | h, t[6] = g << 3 | _ >> 2, t[7] = _ << 6 | v << 1 | y >> 4, t[8] = y << 4 | b >> 1, t[9] = b << 7 | x << 2 | S >> 3, t[10] = S << 5 | C, t[11] = w << 3 | T >> 2, t[12] = T << 6 | E << 1 | D >> 4, t[13] = D << 4 | O >> 1, t[14] = O << 7 | k << 2 | A >> 3, t[15] = A << 5 | j, t;
}
function v(e) {
    if (e.length !== 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`ULID_BYTES_INVALID_LENGTH`, `ULID bytes must be exactly 16 bytes, got ${e.length}`);
    let t = 0;
    for(let n = 0; n < 6; n += 1)t = t * 256 + e[n];
    return m(t) + h(e.subarray(6, 16));
}
const y = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i, b = 0xffffffffffff, x = {
    msecs: -1 / 0,
    lastRandom: new Uint8Array(10)
};
function S(e, t, n, r) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(n, r, e);
    for(let e = 0; e < 10; e += 1)n[r + 6 + e] = t[e];
}
function C(e, n, i, a) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(i, a, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`ULID_BUFFER_OUT_OF_BOUNDS`, `ULID byte range ${a}:${a + 16 - 1} is out of buffer bounds`);
    S(e, n, i, a);
}
function w(t, r, a = 0) {
    let o, s;
    if (t) {
        let r = t.msecs;
        if (r !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(r, 0, b)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ULID_TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between 0 and ${b}`);
        o = r ?? Date.now();
        let a = t.random;
        if (a) {
            if (a.length < 10) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ULID_RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 10 for ULID`);
            s = a;
        } else s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])();
    } else if (o = Date.now(), o > x.msecs) s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(), x.msecs = o, x.lastRandom.set(s.subarray(0, 10));
    else {
        if (o = x.msecs, !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(x.lastRandom)) throw x.lastRandom.fill(255), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ULID_RANDOM_OVERFLOW`, `ULID random component overflowed while preserving monotonic order`);
        s = x.lastRandom;
    }
    return r ? (C(o, s, r, a), r) : m(o) + h(s);
}
function T(e) {
    return typeof e == `string` && y.test(e);
}
const E = Object.assign(w, {
    toBytes: (e)=>_(e),
    fromBytes: (e)=>v(e),
    timestamp: (e)=>g(e),
    isValid: T,
    NIL: `00000000000000000000000000`,
    MAX: `7ZZZZZZZZZZZZZZZZZZZZZZZZZ`
});
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid-CnQIYoQi.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>s,
    "r",
    ()=>c,
    "t",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
;
function n(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : -1;
}
const r = [
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    -1,
    4,
    4,
    5,
    5,
    -1,
    6,
    6,
    7,
    7,
    -1,
    8,
    8,
    9,
    9,
    -1,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    14,
    14,
    15,
    15
], i = [
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1
], a = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, `0`));
function o(t) {
    if (t.length !== 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`UUID_BYTES_INVALID_LENGTH`, `UUID bytes must be exactly 16 bytes, got ${t.length}`);
    return s(t);
}
function s(e) {
    return a[e[0]] + a[e[1]] + a[e[2]] + a[e[3]] + `-` + a[e[4]] + a[e[5]] + `-` + a[e[6]] + a[e[7]] + `-` + a[e[8]] + a[e[9]] + `-` + a[e[10]] + a[e[11]] + a[e[12]] + a[e[13]] + a[e[14]] + a[e[15]];
}
function c(e) {
    if (e.length !== 36) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`UUID_INVALID_LENGTH`, `UUID string must be 36 characters, got ${e.length}`);
    if (e[8] !== `-` || e[13] !== `-` || e[18] !== `-` || e[23] !== `-`) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`UUID_INVALID_SEPARATORS`, `UUID string has invalid separators at positions 8, 13, 18, 23. Received: "${e}"`);
    let a = new Uint8Array(16);
    for(let o = 0; o < 36; o += 1){
        let s = r[o];
        if (s === -1) continue;
        let c = n(e.charCodeAt(o));
        if (c === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`UUID_INVALID_HEX_CHAR`, `UUID string contains invalid hex character at position ${o}`);
        i[o] ? a[s] = c << 4 : a[s] |= c;
    }
    return a;
}
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid/v4.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuidv4",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid-CnQIYoQi.mjs [app-rsc] (ecmascript)");
;
;
;
;
const l = globalThis.crypto.randomUUID.bind(globalThis.crypto), u = new Uint8Array(16), d = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function f(e, t, n) {
    for(let r = 0; r < 16; r += 1)t[n + r] = e[r];
    t[n + 6] = t[n + 6] & 15 | 64, t[n + 8] = t[n + 8] & 63 | 128;
}
function p(e, t, n) {
    return !t && !e ? l() : m(e, t, n);
}
function m(i, a, s) {
    let c = i?.random;
    if (c && c.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`UUID_RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16`);
    let l = a ? s ?? 0 : 0;
    if (a && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a, l, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`UUID_BUFFER_OUT_OF_BOUNDS`, `UUID byte range ${l}:${l + 16 - 1} is out of buffer bounds`);
    let d = a ?? u;
    return f(c ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(), d, l), a ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(d);
}
function h(e) {
    return typeof e == `string` && d.test(e);
}
const g = Object.assign(p, {
    toBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"],
    fromBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
    isValid: h,
    NIL: `00000000-0000-0000-0000-000000000000`,
    MAX: `ffffffff-ffff-ffff-ffff-ffffffffffff`
});
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid/v7.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuidv7",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/uuid-CnQIYoQi.mjs [app-rsc] (ecmascript)");
;
;
;
;
const u = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, d = 0xffffffffffff, f = 4294967295, p = new Uint8Array(16), m = {
    msecs: -1 / 0,
    seq: 0
};
function h(e, t, n, r, i) {
    r[i++] = t / 1099511627776 & 255, r[i++] = t / 4294967296 & 255, r[i++] = t / 16777216 & 255, r[i++] = t / 65536 & 255, r[i++] = t / 256 & 255, r[i++] = t & 255, r[i++] = 112 | n >>> 28 & 15, r[i++] = n >>> 20 & 255, r[i++] = 128 | n >>> 14 & 63, r[i++] = n >>> 6 & 255, r[i++] = n << 2 & 255 | e[10] & 3, r[i++] = e[11], r[i++] = e[12], r[i++] = e[13], r[i++] = e[14], r[i++] = e[15];
}
function g(e, n, i, a, o) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a, o, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`UUID_BUFFER_OUT_OF_BOUNDS`, `UUID byte range ${o}:${o + 16 - 1} is out of buffer bounds`);
    h(e, n, i, a, o);
}
function _(t, r, a = 0) {
    let o = t.msecs;
    if (o !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(o, 0, d)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`UUID_TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between 0 and ${d}`);
    let c = t.seq;
    if (c !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(c, 0, f)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`UUID_SEQUENCE_OUT_OF_RANGE`, `Sequence must be an integer between 0 and ${f}`);
    let l = t.random;
    if (l && l.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`UUID_RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16`);
    let u = l ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(), m = o ?? Date.now(), _1 = c ?? u[6] << 23 | u[7] << 16 | u[8] << 8 | u[9];
    return r ? (g(u, m, _1, r, a), r) : (h(u, m, _1, p, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(p));
}
function v(t, n, r) {
    if (t) return _(t, n, r);
    let i = Date.now(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])();
    return i > m.msecs ? (m.seq = a[6] << 23 | a[7] << 16 | a[8] << 8 | a[9], m.msecs = i) : (m.seq = m.seq + 1 | 0, m.seq < 0 && (m.seq = 0, m.msecs++)), n ? (g(a, m.msecs, m.seq, n, r ?? 0), n) : (h(a, m.msecs, m.seq, p, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(p));
}
function y(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(e), n = 0;
    for(let e = 0; e < 6; e += 1)n = n * 256 + t[e];
    return n;
}
function b(e) {
    return typeof e == `string` && u.test(e);
}
const x = Object.assign(v, {
    toBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"],
    fromBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$ids$2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$CnQIYoQi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
    timestamp: y,
    isValid: b,
    NIL: `00000000-0000-0000-0000-000000000000`,
    MAX: `ffffffff-ffff-ffff-ffff-ffffffffffff`
});
;
}),
"[project]/node_modules/@prisma-next/ids/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>t,
    "t",
    ()=>e
]);
function e(e, t, n) {
    return Number.isInteger(e) && e >= t && e <= n;
}
function t(e, t, n) {
    return Number.isInteger(t) && t >= 0 && t + n <= e.length;
}
;
}),
"[project]/node_modules/@prisma-next/operations/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOperationRegistry",
    ()=>createOperationRegistry
]);
//#region src/index.ts
function createOperationRegistry() {
    const operations = Object.create(null);
    return {
        register (name, descriptor) {
            if (name in operations) throw new Error(`Operation "${name}" is already registered`);
            if (descriptor.self) {
                const hasCodecId = descriptor.self.codecId !== void 0;
                const hasTraits = descriptor.self.traits !== void 0 && descriptor.self.traits.length > 0;
                if (!hasCodecId && !hasTraits) throw new Error(`Operation "${name}" self has neither codecId nor traits`);
                if (hasCodecId && hasTraits) throw new Error(`Operation "${name}" self has both codecId and traits`);
            }
            operations[name] = descriptor;
        },
        entries () {
            return Object.freeze({
                ...operations
            });
        }
    };
}
;
}),
"[project]/node_modules/@prisma-next/postgres/dist/postgres-runtime-BocCkHO6.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>PostgresRuntimeImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlRuntimeBase$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-runtime/dist/exports-D5-Py3YP.mjs [app-rsc] (ecmascript) <export t as SqlRuntimeBase>");
;
//#region src/runtime/postgres-runtime.ts
var PostgresRuntimeImpl = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__SqlRuntimeBase$3e$__["SqlRuntimeBase"] {
};
;
}),
"[project]/node_modules/@prisma-next/postgres/dist/postgres-static-BaUZiN25.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>postgresStatic,
    "r",
    ()=>buildNamespacedNativeEnums,
    "t",
    ()=>buildPostgresStaticContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$D3G8K0YM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__o__as__PG_ENUM_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/target-postgres/dist/codec-ids-D3G8K0YM.mjs [app-rsc] (ecmascript) <locals> <export o as PG_ENUM_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$enum$2d$accessor$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/enum-accessor.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$adapter$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/adapter-postgres/dist/runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$builder$2f$dist$2f$runtime$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-builder/dist/runtime/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__createExecutionContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-runtime/dist/exports-D5-Py3YP.mjs [app-rsc] (ecmascript) <export a as createExecutionContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__createSqlExecutionStack$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-runtime/dist/exports-D5-Py3YP.mjs [app-rsc] (ecmascript) <export o as createSqlExecutionStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/target-postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$DebHMqGR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__PostgresContractSerializer$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/target-postgres/dist/postgres-contract-view-DebHMqGR.mjs [app-rsc] (ecmascript) <export n as PostgresContractSerializer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/exports/expression.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
;
;
;
;
;
//#region src/runtime/native-enums.ts
/**
* Reads the namespace's `valueSet` entries directly off the plain contract
* shape (`storage.namespaces[id].entries.valueSet`), not through a hydrated
* `PostgresSchema` class instance — the same plain-data path `db.enums`
* reads `domain.namespaces[id].enum` through. Works on a `validateContract`'d
* JSON contract as well as one produced by `PostgresContractSerializer`.
*
* A native enum is never re-emitted as its own entity: once `native_enum` is
* lowered, its member values live on in the `valueSet` entry it derives (the
* SQL family's generic `deriveValueSet` mechanism) — the same slot
* `column.valueSet`-typed columns read. A member is a value, not a
* name→value pair (matching `CREATE TYPE … AS ENUM ('a', 'b')`), so each
* value doubles as its own accessor name.
*/ function buildNativeEnumsMapForNamespace(storage, namespaceId) {
    const result = {};
    const valueSets = storage.namespaces[namespaceId]?.entries.valueSet;
    if (!valueSets) return result;
    for (const [name, valueSet] of Object.entries(valueSets))result[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$enum$2d$accessor$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnumAccessor"])({
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$D3G8K0YM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__o__as__PG_ENUM_CODEC_ID$3e$__["PG_ENUM_CODEC_ID"],
        members: valueSet.values.map((value)=>({
                name: String(value),
                value
            }))
    });
    return result;
}
function buildNamespacedNativeEnums(storage) {
    const result = {};
    for (const namespaceId of Object.keys(storage.namespaces))result[namespaceId] = buildNativeEnumsMapForNamespace(storage, namespaceId);
    return result;
}
//#endregion
//#region src/static/postgres-static.ts
function buildPostgresStaticContext(context, rawCodecInferer) {
    const sqlDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$builder$2f$dist$2f$runtime$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"])({
        context,
        rawCodecInferer
    });
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRawSql"])(rawCodecInferer);
    const enums = Object.freeze((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$enum$2d$accessor$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildNamespacedEnums"])(context.contract.domain));
    const nativeEnums = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Object.freeze(buildNamespacedNativeEnums(context.contract.storage)));
    return {
        context,
        contract: context.contract,
        enums,
        nativeEnums,
        sql: sqlDb,
        raw
    };
}
function postgresStatic(options) {
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$DebHMqGR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__PostgresContractSerializer$3e$__["PostgresContractSerializer"]().deserializeContract(options.contractJson));
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__createSqlExecutionStack$3e$__["createSqlExecutionStack"])({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        adapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$adapter$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        extensionPacks: options.extensions ?? []
    });
    return buildPostgresStaticContext((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__createExecutionContext$3e$__["createExecutionContext"])({
        contract,
        stack
    }), stack.adapter.rawCodecInferer);
}
;
}),
"[project]/node_modules/@prisma-next/postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>postgres,
    "isPgClient",
    ()=>isPgClient,
    "isPgPool",
    ()=>isPgPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$postgres$2d$static$2d$BaUZiN25$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/postgres/dist/postgres-static-BaUZiN25.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$postgres$2d$runtime$2d$BocCkHO6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/postgres/dist/postgres-runtime-BocCkHO6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$adapter$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/adapter-postgres/dist/runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/driver-postgres/dist/runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$execution$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/execution.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$builder$2f$dist$2f$runtime$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-builder/dist/runtime/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$orm$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-orm-client/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__createExecutionContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-runtime/dist/exports-D5-Py3YP.mjs [app-rsc] (ecmascript) <export a as createExecutionContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__createSqlExecutionStack$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-runtime/dist/exports-D5-Py3YP.mjs [app-rsc] (ecmascript) <export o as createSqlExecutionStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__withTransaction$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-runtime/dist/exports-D5-Py3YP.mjs [app-rsc] (ecmascript) <export n as withTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/target-postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$DebHMqGR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__PostgresContractSerializer$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/target-postgres/dist/postgres-contract-view-DebHMqGR.mjs [app-rsc] (ecmascript) <export n as PostgresContractSerializer>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
//#region src/runtime/binding.ts
const isPgPool = (pg)=>"totalCount" in pg && "idleCount" in pg && "waitingCount" in pg;
const isPgClient = (pg)=>"escapeIdentifier" in pg && "escapeLiteral" in pg;
function validatePostgresUrl(url) {
    const trimmed = url.trim();
    if (trimmed.length === 0) throw new Error("Postgres URL must be a non-empty string");
    let parsed;
    try {
        parsed = new URL(trimmed);
    } catch  {
        throw new Error("Postgres URL must be a valid URL");
    }
    if (parsed.protocol !== "postgres:" && parsed.protocol !== "postgresql:") throw new Error("Postgres URL must use postgres:// or postgresql://");
    return trimmed;
}
function resolvePostgresBinding(options) {
    if (Number(options.binding !== void 0) + Number(options.url !== void 0) + Number(options.pg !== void 0) !== 1) throw new Error("Provide one binding input: binding, url, or pg");
    if (options.binding !== void 0) return options.binding;
    if (options.url !== void 0) return {
        kind: "url",
        url: validatePostgresUrl(options.url)
    };
    const pgBinding = options.pg;
    if (pgBinding === void 0) throw new Error("Invariant violation: expected pg binding after validation");
    if (isPgPool(pgBinding)) return {
        kind: "pgPool",
        pool: pgBinding
    };
    if (isPgClient(pgBinding)) return {
        kind: "pgClient",
        client: pgBinding
    };
    throw new Error("Unable to determine pg binding type from pg input; use binding with explicit kind");
}
function resolveOptionalPostgresBinding(options) {
    if (Number(options.binding !== void 0) + Number(options.url !== void 0) + Number(options.pg !== void 0) === 0) return;
    return resolvePostgresBinding(options);
}
//#endregion
//#region src/runtime/postgres.ts
function hasContractJson(options) {
    return "contractJson" in options;
}
const contractSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$DebHMqGR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__PostgresContractSerializer$3e$__["PostgresContractSerializer"]();
function resolveContract(options) {
    const contractJson = hasContractJson(options) ? options.contractJson : contractSerializer.serializeContract(options.contract);
    return contractSerializer.deserializeContract(contractJson);
}
function toRuntimeBinding(binding, options) {
    if (binding.kind !== "url") return binding;
    return {
        kind: "pgPool",
        pool: new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
            connectionString: binding.url,
            connectionTimeoutMillis: options.poolOptions?.connectionTimeoutMillis ?? 2e4,
            idleTimeoutMillis: options.poolOptions?.idleTimeoutMillis ?? 3e4
        })
    };
}
function postgres(options) {
    const contract = resolveContract(options);
    let binding = resolveOptionalPostgresBinding(options);
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__createSqlExecutionStack$3e$__["createSqlExecutionStack"])({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$target$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        adapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$adapter$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        extensionPacks: options.extensions ?? []
    });
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__createExecutionContext$3e$__["createExecutionContext"])({
        contract,
        stack,
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$driver$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    });
    const { sql: sql$1, raw: rawSqlTag, enums, nativeEnums } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$postgres$2d$static$2d$BaUZiN25$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(context, stack.adapter.rawCodecInferer);
    let runtimeInstance;
    let runtimeDriver;
    let driverConnected = false;
    let connectPromise;
    let backgroundConnectError;
    let closed = false;
    let ownedDispose;
    const connectDriver = async (resolvedBinding)=>{
        if (driverConnected) return;
        if (!runtimeDriver) throw new Error("Postgres runtime driver missing");
        if (connectPromise) return connectPromise;
        const runtimeBinding = toRuntimeBinding(resolvedBinding, options);
        if (resolvedBinding.kind === "url" && runtimeBinding.kind === "pgPool") {
            const pool = runtimeBinding.pool;
            let disposed = false;
            ownedDispose = async ()=>{
                if (disposed) return;
                disposed = true;
                await pool.end().then(()=>void 0);
            };
        }
        connectPromise = runtimeDriver.connect(runtimeBinding).then(()=>{
            driverConnected = true;
        }).catch(async (err)=>{
            backgroundConnectError = err;
            connectPromise = void 0;
            await ownedDispose?.().catch(()=>void 0);
            throw err;
        });
        return connectPromise;
    };
    const getRuntime = ()=>{
        if (closed) throw new Error("Postgres client is closed");
        if (backgroundConnectError !== void 0) throw backgroundConnectError;
        if (runtimeInstance) return runtimeInstance;
        const stackInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$execution$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["instantiateExecutionStack"])(stack);
        const driverDescriptor = stack.driver;
        if (!driverDescriptor) throw new Error("Driver descriptor missing from execution stack");
        const driver = driverDescriptor.create({
            cursor: {
                disabled: true
            }
        });
        runtimeDriver = driver;
        if (binding !== void 0) connectDriver(binding).catch(()=>void 0);
        runtimeInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$postgres$2d$runtime$2d$BocCkHO6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]({
            context,
            adapter: stackInstance.adapter,
            driver,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("verifyMarker", options.verifyMarker),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("middleware", options.middleware)
        });
        return runtimeInstance;
    };
    return {
        sql: sql$1,
        orm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$orm$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orm"])({
            runtime: {
                execute (plan) {
                    return getRuntime().execute(plan);
                },
                connection () {
                    return getRuntime().connection();
                }
            },
            context
        }),
        enums,
        nativeEnums,
        raw: rawSqlTag,
        context,
        contract,
        stack,
        async connect (bindingInput) {
            if (closed) throw new Error("Postgres client is closed");
            if (driverConnected || connectPromise) throw new Error("Postgres client already connected");
            if (bindingInput !== void 0) binding = resolvePostgresBinding(bindingInput);
            if (binding === void 0) throw new Error("Postgres binding not configured. Pass url/pg/binding to postgres(...) or call db.connect({ ... }).");
            const runtime = getRuntime();
            if (driverConnected) return runtime;
            await connectDriver(binding);
            return runtime;
        },
        runtime () {
            return getRuntime();
        },
        prepare (declaration, callback) {
            return getRuntime().prepare(declaration, (params)=>callback(sql$1, params));
        },
        transaction (fn) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$runtime$2f$dist$2f$exports$2d$D5$2d$Py3YP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__withTransaction$3e$__["withTransaction"])(getRuntime(), (txCtx)=>{
                const rawCodecInferer = stack.adapter.rawCodecInferer;
                const txSql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$builder$2f$dist$2f$runtime$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"])({
                    context,
                    rawCodecInferer
                });
                const txOrm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$orm$2d$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orm"])({
                    runtime: {
                        execute (plan) {
                            return txCtx.execute(plan);
                        }
                    },
                    context
                });
                return fn(Object.assign(Object.create(txCtx), {
                    sql: txSql,
                    orm: txOrm,
                    enums,
                    nativeEnums
                }));
            });
        },
        async close () {
            if (closed) return;
            closed = true;
            await connectPromise?.catch(()=>void 0);
            await ownedDispose?.();
        },
        [Symbol.asyncDispose] () {
            return this.close();
        }
    };
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma-next/psl-parser/dist/declarations-DR6To8_k.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>SyntaxNode,
    "C",
    ()=>QualifiedNameAst,
    "D",
    ()=>findChildToken,
    "E",
    ()=>filterChildren,
    "M",
    ()=>TokenAtOffset,
    "N",
    ()=>createSyntaxTree,
    "O",
    ()=>findFirstChild,
    "S",
    ()=>castExpression,
    "T",
    ()=>any,
    "_",
    ()=>FunctionCallAst,
    "a",
    ()=>KeyValuePairAst,
    "b",
    ()=>ObjectLiteralExprAst,
    "c",
    ()=>NamespaceDeclarationAst,
    "d",
    ()=>AttributeArgListAst,
    "f",
    ()=>FieldAttributeAst,
    "g",
    ()=>BooleanLiteralExprAst,
    "h",
    ()=>AttributeArgAst,
    "i",
    ()=>GenericBlockDeclarationAst,
    "j",
    ()=>SyntaxToken,
    "k",
    ()=>printSyntax,
    "l",
    ()=>TypesBlockAst,
    "m",
    ()=>ArrayLiteralAst,
    "n",
    ()=>DocumentAst,
    "o",
    ()=>ModelDeclarationAst,
    "p",
    ()=>ModelAttributeAst,
    "r",
    ()=>FieldDeclarationAst,
    "s",
    ()=>NamedTypeDeclarationAst,
    "t",
    ()=>CompositeTypeDeclarationAst,
    "u",
    ()=>TypeAnnotationAst,
    "v",
    ()=>NumberLiteralExprAst,
    "w",
    ()=>IdentifierAst,
    "x",
    ()=>StringLiteralExprAst,
    "y",
    ()=>ObjectFieldAst
]);
//#region src/syntax/red.ts
/**
* A token in the red tree. Unlike the green-layer {@link Token} (kind + text
* only), a red token also carries its absolute `offset` within the source and a
* link back to its `parent` {@link SyntaxNode}, so a cursor anchored on a token
* can walk outward (parent, previous/next token, siblings) without re-scanning
* from the document root.
*/ var SyntaxToken = class {
    green;
    kind;
    text;
    offset;
    parent;
    /** Position within the parent's children, enabling O(1) sibling navigation without rescanning the green layer. */ index;
    constructor(green, offset, parent, index){
        this.green = green;
        this.kind = green.kind;
        this.text = green.text;
        this.offset = offset;
        this.parent = parent;
        this.index = index;
    }
    get textLength() {
        return this.text.length;
    }
    get endOffset() {
        return this.offset + this.textLength;
    }
    /** Whether `offset` falls within this token, inclusive of both ends. */ isInside(offset) {
        return offset >= this.offset && offset <= this.endOffset;
    }
    isOutside(offset) {
        return !this.isInside(offset);
    }
    /** The sibling element immediately after this token within its parent. */ get nextSiblingOrToken() {
        return childAt(this.parent, this.index + 1);
    }
    /** The sibling element immediately before this token within its parent. */ get prevSiblingOrToken() {
        return childAt(this.parent, this.index - 1);
    }
    /** The next token in document order, crossing node boundaries. */ get nextToken() {
        for(let el = climbingNext(this); el !== void 0; el = climbingNext(el)){
            const token = firstToken(el);
            if (token !== void 0) return token;
        }
    }
    /** The previous token in document order, crossing node boundaries. */ get prevToken() {
        for(let el = climbingPrev(this); el !== void 0; el = climbingPrev(el)){
            const token = lastToken(el);
            if (token !== void 0) return token;
        }
    }
};
var TokenAtOffset = class TokenAtOffset {
    #state;
    constructor(state){
        this.#state = state;
    }
    static none() {
        return new TokenAtOffset({
            kind: "none"
        });
    }
    static single(token) {
        return new TokenAtOffset({
            kind: "single",
            token
        });
    }
    static between(left, right) {
        return new TokenAtOffset({
            kind: "between",
            left,
            right
        });
    }
    get isEmpty() {
        return this.#state.kind === "none";
    }
    get isBetween() {
        return this.#state.kind === "between";
    }
    leftBiased() {
        switch(this.#state.kind){
            case "none":
                return;
            case "single":
                return this.#state.token;
            case "between":
                return this.#state.left;
        }
    }
    rightBiased() {
        switch(this.#state.kind){
            case "none":
                return;
            case "single":
                return this.#state.token;
            case "between":
                return this.#state.right;
        }
    }
};
var SyntaxNode = class SyntaxNode {
    green;
    offset;
    parent;
    /** Position within the parent's children, enabling O(1) sibling navigation without rescanning the green layer. */ index;
    constructor(green, offset, parent, index){
        this.green = green;
        this.offset = offset;
        this.parent = parent;
        this.index = index;
    }
    get kind() {
        return this.green.kind;
    }
    get textLength() {
        return this.green.textLength;
    }
    get endOffset() {
        return this.offset + this.textLength;
    }
    /** Whether `offset` falls within this node, inclusive of both ends. */ isInside(offset) {
        return offset >= this.offset && offset <= this.endOffset;
    }
    isOutside(offset) {
        return !this.isInside(offset);
    }
    get firstChild() {
        return childAt(this, 0);
    }
    get lastChild() {
        const len = this.green.children.length;
        if (len === 0) return void 0;
        return childAt(this, len - 1);
    }
    get nextSibling() {
        return this.parent === void 0 ? void 0 : childAt(this.parent, this.index + 1);
    }
    get prevSibling() {
        return this.parent === void 0 ? void 0 : childAt(this.parent, this.index - 1);
    }
    /** The sibling element immediately after this node within its parent. */ get nextSiblingOrToken() {
        return this.nextSibling;
    }
    /** The sibling element immediately before this node within its parent. */ get prevSiblingOrToken() {
        return this.prevSibling;
    }
    /** The first token in this subtree (depth-first), or `undefined` if empty. */ get firstToken() {
        return firstToken(this);
    }
    /** The last token in this subtree (depth-first), or `undefined` if empty. */ get lastToken() {
        return lastToken(this);
    }
    *children() {
        let offset = this.offset;
        let index = 0;
        for (const child of this.green.children){
            yield wrapElement(child, offset, this, index);
            offset += elementTextLength(child);
            index++;
        }
    }
    *childNodes() {
        for (const child of this.children())if (child instanceof SyntaxNode) yield child;
    }
    *ancestors() {
        let current = this.parent;
        while(current){
            yield current;
            current = current.parent;
        }
    }
    /** The nearest match, testing this node itself before walking its ancestors. */ findAncestor(cast) {
        const self = cast(this);
        if (self !== void 0) return self;
        for (const ancestor of this.ancestors()){
            const result = cast(ancestor);
            if (result !== void 0) return result;
        }
    }
    *descendants() {
        const stack = [
            this
        ];
        for(let el = stack.pop(); el !== void 0; el = stack.pop()){
            yield el;
            if (el instanceof SyntaxNode) {
                const children = Array.from(el.children());
                for(let i = children.length - 1; i >= 0; i--){
                    const child = children[i];
                    if (child !== void 0) stack.push(child);
                }
            }
        }
    }
    *tokens() {
        for (const el of this.descendants())if (el instanceof SyntaxToken) yield el;
    }
    /**
	* The token(s) at `offset`. The between-two-tokens case (offset exactly on a
	* token seam) is represented explicitly so callers can left/right bias.
	*/ tokenAtOffset(offset) {
        return tokenAtOffsetOf(this, offset);
    }
    /**
	* The smallest element fully containing the range `[start, end]`. At a seam
	* (and for empty ranges) the left-hand element is preferred, matching
	* {@link containsOffset}'s inclusive span.
	*/ coveringElement(start, end) {
        let result = this;
        for(;;){
            if (result instanceof SyntaxToken) return result;
            let next;
            for (const child of result.children())if (containsRange(child, start, end)) {
                next = child;
                break;
            }
            if (next === void 0) return result;
            result = next;
        }
    }
};
function elementTextLength(el) {
    return el.type === "token" ? el.text.length : el.textLength;
}
function elementLength(el) {
    return el instanceof SyntaxToken ? el.text.length : el.textLength;
}
/**
* Whether `el` contains `offset`. The span is inclusive on both ends so a seam
* offset touches both neighbours.
*/ function containsOffset(el, offset) {
    const start = el.offset;
    const len = elementLength(el);
    return offset >= start && offset <= start + len;
}
function containsRange(el, start, end) {
    const elStart = el.offset;
    const len = elementLength(el);
    return elStart <= start && end <= elStart + len;
}
function tokenAtOffsetOf(el, offset) {
    if (el instanceof SyntaxToken) return TokenAtOffset.single(el);
    let left;
    let right;
    for (const child of el.children()){
        if (!containsOffset(child, offset)) continue;
        if (left === void 0) left = child;
        else {
            right = child;
            break;
        }
    }
    if (left === void 0) return TokenAtOffset.none();
    if (right === void 0) return tokenAtOffsetOf(left, offset);
    const leftToken = tokenAtOffsetOf(left, offset).rightBiased();
    const rightToken = tokenAtOffsetOf(right, offset).leftBiased();
    if (leftToken !== void 0 && rightToken !== void 0) return TokenAtOffset.between(leftToken, rightToken);
    if (leftToken !== void 0) return TokenAtOffset.single(leftToken);
    if (rightToken !== void 0) return TokenAtOffset.single(rightToken);
    return TokenAtOffset.none();
}
function firstToken(el) {
    if (el instanceof SyntaxToken) return el;
    for (const child of el.children()){
        const token = firstToken(child);
        if (token !== void 0) return token;
    }
}
function lastToken(el) {
    if (el instanceof SyntaxToken) return el;
    const children = Array.from(el.children());
    for(let i = children.length - 1; i >= 0; i--){
        const child = children[i];
        if (child !== void 0) {
            const token = lastToken(child);
            if (token !== void 0) return token;
        }
    }
}
function climbingNext(el) {
    let current = el;
    for(;;){
        const parent = current.parent;
        if (parent === void 0) return void 0;
        const sibling = childAt(parent, current.index + 1);
        if (sibling !== void 0) return sibling;
        current = parent;
    }
}
function climbingPrev(el) {
    let current = el;
    for(;;){
        const parent = current.parent;
        if (parent === void 0) return void 0;
        const sibling = childAt(parent, current.index - 1);
        if (sibling !== void 0) return sibling;
        current = parent;
    }
}
function wrapElement(green, offset, parent, index) {
    if (green.type === "token") return new SyntaxToken(green, offset, parent, index);
    return new SyntaxNode(green, offset, parent, index);
}
function childAt(node, index) {
    const children = node.green.children;
    const target = children[index];
    if (target === void 0) return void 0;
    let offset = node.offset;
    for(let i = 0; i < index; i++){
        const child = children[i];
        if (child !== void 0) offset += elementTextLength(child);
    }
    return wrapElement(target, offset, node, index);
}
function createSyntaxTree(green) {
    return new SyntaxNode(green, 0, void 0, 0);
}
//#endregion
//#region src/syntax/ast-helpers.ts
function findChildToken(node, kind) {
    for (const child of node.children())if (!(child instanceof SyntaxNode) && child.kind === kind) return child;
}
function findFirstChild(node, cast) {
    for (const child of node.childNodes()){
        const result = cast(child);
        if (result !== void 0) return result;
    }
}
function* filterChildren(node, cast) {
    for (const child of node.childNodes()){
        const result = cast(child);
        if (result !== void 0) yield result;
    }
}
function any(...casts) {
    return (node)=>{
        for (const cast of casts){
            const result = cast(node);
            if (result !== void 0) return result;
        }
    };
}
/**
* Raw source text of a CST node, verbatim (quotes and brackets preserved). For
* the decoded value of a string literal, decode it instead.
*/ function printSyntax(node) {
    let text = "";
    for (const token of node.tokens())text += token.text;
    return text;
}
//#endregion
//#region src/syntax/ast/identifier.ts
var IdentifierAst = class IdentifierAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    token() {
        return findChildToken(this.syntax, "Ident");
    }
    name() {
        return this.token()?.text;
    }
    static cast(node) {
        return node.kind === "Identifier" ? new IdentifierAst(node) : void 0;
    }
};
//#endregion
//#region src/syntax/ast/qualified-name.ts
/** A namespace-qualified name, e.g. `pgvector.Vector` or `supabase:auth.User`. */ var QualifiedNameAst = class QualifiedNameAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    #segmentBefore(boundary) {
        let found;
        for (const segment of filterChildren(this.syntax, IdentifierAst.cast)){
            if (segment.syntax.offset >= boundary) break;
            found = segment;
        }
        return found;
    }
    #segmentAfter(boundary) {
        for (const segment of filterChildren(this.syntax, IdentifierAst.cast))if (segment.syntax.offset > boundary) return segment;
    }
    #separatorCount(kind) {
        let count = 0;
        for (const child of this.syntax.children())if (!(child instanceof SyntaxNode) && child.kind === kind) count++;
        return count;
    }
    colon() {
        return findChildToken(this.syntax, "Colon");
    }
    dot() {
        return findChildToken(this.syntax, "Dot");
    }
    space() {
        const colon = this.colon();
        if (!colon) return void 0;
        return this.#segmentBefore(colon.offset);
    }
    namespace() {
        const dot = this.dot();
        if (!dot) return void 0;
        return this.#segmentBefore(dot.offset);
    }
    identifier() {
        const dot = this.dot();
        if (dot) return this.#segmentAfter(dot.offset);
        const colon = this.colon();
        if (colon) return this.#segmentAfter(colon.offset);
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    /**
	* Every identifier segment, in source order. A bare `Vector` yields
	* `['Vector']`; a qualified `pgvector.Vector` yields `['pgvector', 'Vector']`.
	*/ path() {
        const segments = [];
        for (const segment of filterChildren(this.syntax, IdentifierAst.cast)){
            const text = segment.token()?.text;
            if (text !== void 0) segments.push(text);
        }
        return segments;
    }
    /** True iff this is a single unqualified identifier whose text equals `name`. */ isSimpleName(name) {
        if (this.dot() !== void 0 || this.colon() !== void 0) return false;
        return this.identifier()?.token()?.text === name;
    }
    /**
	* Flags a malformed name with more qualifier segments than allowed (a second
	* `:`-space or a second `.`-namespace).
	*/ isOverQualified() {
        return this.#separatorCount("Dot") > 1 || this.#separatorCount("Colon") > 1;
    }
    static cast(node) {
        return node.kind === "QualifiedName" ? new QualifiedNameAst(node) : void 0;
    }
};
//#endregion
//#region src/syntax/ast/expressions.ts
var FunctionCallAst = class FunctionCallAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    /** The qualified-name callee, or `undefined` when identifier segments sit directly under the node. */ name() {
        return findFirstChild(this.syntax, QualifiedNameAst.cast);
    }
    /**
	* The dotted call path, in source order. A bare `Vector(…)` yields
	* `['Vector']`; a namespace-qualified `pgvector.Vector(…)` yields
	* `['pgvector', 'Vector']`. Empty when the call carries no identifier.
	*/ path() {
        const qualified = this.name();
        const segments = [];
        for (const segment of filterChildren(qualified?.syntax ?? this.syntax, IdentifierAst.cast)){
            const text = segment.token()?.text;
            if (text !== void 0) segments.push(text);
        }
        return segments;
    }
    lparen() {
        return findChildToken(this.syntax, "LParen");
    }
    rparen() {
        return findChildToken(this.syntax, "RParen");
    }
    *args() {
        yield* filterChildren(this.syntax, AttributeArgAst.cast);
    }
    static cast(node) {
        return node.kind === "FunctionCall" ? new FunctionCallAst(node) : void 0;
    }
};
var ArrayLiteralAst = class ArrayLiteralAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    lbracket() {
        return findChildToken(this.syntax, "LBracket");
    }
    rbracket() {
        return findChildToken(this.syntax, "RBracket");
    }
    *elements() {
        yield* filterChildren(this.syntax, castExpression);
    }
    static cast(node) {
        return node.kind === "ArrayLiteral" ? new ArrayLiteralAst(node) : void 0;
    }
};
const HEX = /^[0-9a-fA-F]+$/;
function decodeFixedHex(raw, start, width) {
    if (start + width > raw.length) return void 0;
    const hex = raw.slice(start, start + width);
    if (!HEX.test(hex)) return void 0;
    return String.fromCharCode(Number.parseInt(hex, 16));
}
function decodeStringLiteral(raw) {
    let out = "";
    let i = 0;
    while(i < raw.length){
        const ch = raw.charAt(i);
        if (ch !== "\\" || i + 1 >= raw.length) {
            out += ch;
            i++;
            continue;
        }
        const next = raw.charAt(i + 1);
        switch(next){
            case "n":
                out += "\n";
                i += 2;
                continue;
            case "r":
                out += "\r";
                i += 2;
                continue;
            case "t":
                out += "	";
                i += 2;
                continue;
            case "\"":
                out += "\"";
                i += 2;
                continue;
            case "'":
                out += "'";
                i += 2;
                continue;
            case "\\":
                out += "\\";
                i += 2;
                continue;
            case "x":
                {
                    const decoded = decodeFixedHex(raw, i + 2, 2);
                    if (decoded === void 0) {
                        out += "\\x";
                        i += 2;
                        continue;
                    }
                    out += decoded;
                    i += 4;
                    continue;
                }
            case "u":
                {
                    const decoded = decodeFixedHex(raw, i + 2, 4);
                    if (decoded === void 0) {
                        out += "\\u";
                        i += 2;
                        continue;
                    }
                    out += decoded;
                    i += 6;
                    continue;
                }
            default:
                out += `\\${next}`;
                i += 2;
                continue;
        }
    }
    return out;
}
var StringLiteralExprAst = class StringLiteralExprAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    token() {
        return findChildToken(this.syntax, "StringLiteral");
    }
    value() {
        const tok = this.token();
        if (!tok) return void 0;
        return decodeStringLiteral(tok.text.slice(1, -1));
    }
    static cast(node) {
        return node.kind === "StringLiteralExpr" ? new StringLiteralExprAst(node) : void 0;
    }
};
var NumberLiteralExprAst = class NumberLiteralExprAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    token() {
        return findChildToken(this.syntax, "NumberLiteral");
    }
    value() {
        const tok = this.token();
        if (!tok) return void 0;
        return Number(tok.text);
    }
    static cast(node) {
        return node.kind === "NumberLiteralExpr" ? new NumberLiteralExprAst(node) : void 0;
    }
};
var BooleanLiteralExprAst = class BooleanLiteralExprAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    token() {
        return findChildToken(this.syntax, "Ident");
    }
    value() {
        const tok = this.token();
        if (!tok) return void 0;
        if (tok.text === "true") return true;
        if (tok.text === "false") return false;
    }
    static cast(node) {
        return node.kind === "BooleanLiteralExpr" ? new BooleanLiteralExprAst(node) : void 0;
    }
};
var ObjectLiteralExprAst = class ObjectLiteralExprAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    lbrace() {
        return findChildToken(this.syntax, "LBrace");
    }
    rbrace() {
        return findChildToken(this.syntax, "RBrace");
    }
    *fields() {
        yield* filterChildren(this.syntax, ObjectFieldAst.cast);
    }
    static cast(node) {
        return node.kind === "ObjectLiteralExpr" ? new ObjectLiteralExprAst(node) : void 0;
    }
};
var ObjectFieldAst = class ObjectFieldAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    key() {
        for (const child of this.syntax.children()){
            if (!(child instanceof SyntaxNode)) {
                if (child.kind === "Colon") break;
                continue;
            }
            return IdentifierAst.cast(child);
        }
    }
    /**
	* The field's logical key name, unquoted. An identifier key (`length:`) yields
	* its text; a string-literal key (`"length":`) yields the decoded string.
	* `undefined` when the field carries no key node.
	*/ keyName() {
        for (const child of this.syntax.children()){
            if (!(child instanceof SyntaxNode)) {
                if (child.kind === "Colon") break;
                continue;
            }
            const identifier = IdentifierAst.cast(child);
            if (identifier) return identifier.token()?.text;
            const stringKey = StringLiteralExprAst.cast(child);
            if (stringKey) return stringKey.value();
            return;
        }
    }
    colon() {
        return findChildToken(this.syntax, "Colon");
    }
    value() {
        if (this.colon()) {
            let pastColon = false;
            for (const child of this.syntax.children()){
                if (!(child instanceof SyntaxNode)) {
                    if (child.kind === "Colon") pastColon = true;
                    continue;
                }
                if (pastColon) {
                    const expr = castExpression(child);
                    if (expr) return expr;
                }
            }
            return;
        }
        return findFirstChild(this.syntax, castExpression);
    }
    static cast(node) {
        return node.kind === "ObjectField" ? new ObjectFieldAst(node) : void 0;
    }
};
function castExpression(node) {
    return FunctionCallAst.cast(node) ?? ArrayLiteralAst.cast(node) ?? StringLiteralExprAst.cast(node) ?? NumberLiteralExprAst.cast(node) ?? BooleanLiteralExprAst.cast(node) ?? ObjectLiteralExprAst.cast(node) ?? IdentifierAst.cast(node);
}
var AttributeArgAst = class AttributeArgAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    name() {
        if (!this.colon()) return void 0;
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    colon() {
        return findChildToken(this.syntax, "Colon");
    }
    value() {
        if (this.colon()) {
            let pastColon = false;
            for (const child of this.syntax.children()){
                if (!(child instanceof SyntaxNode)) {
                    if (child.kind === "Colon") pastColon = true;
                    continue;
                }
                if (pastColon) {
                    const expr = castExpression(child);
                    if (expr) return expr;
                }
            }
            return;
        }
        return findFirstChild(this.syntax, castExpression);
    }
    static cast(node) {
        return node.kind === "AttributeArg" ? new AttributeArgAst(node) : void 0;
    }
};
//#endregion
//#region src/syntax/ast/attributes.ts
var AttributeArgListAst = class AttributeArgListAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    lparen() {
        return findChildToken(this.syntax, "LParen");
    }
    rparen() {
        return findChildToken(this.syntax, "RParen");
    }
    *args() {
        yield* filterChildren(this.syntax, AttributeArgAst.cast);
    }
    static cast(node) {
        return node.kind === "AttributeArgList" ? new AttributeArgListAst(node) : void 0;
    }
};
var FieldAttributeAst = class FieldAttributeAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    at() {
        return findChildToken(this.syntax, "At");
    }
    name() {
        return findFirstChild(this.syntax, QualifiedNameAst.cast);
    }
    argList() {
        return findFirstChild(this.syntax, AttributeArgListAst.cast);
    }
    static cast(node) {
        return node.kind === "FieldAttribute" ? new FieldAttributeAst(node) : void 0;
    }
};
var ModelAttributeAst = class ModelAttributeAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    doubleAt() {
        return findChildToken(this.syntax, "DoubleAt");
    }
    name() {
        return findFirstChild(this.syntax, QualifiedNameAst.cast);
    }
    argList() {
        return findFirstChild(this.syntax, AttributeArgListAst.cast);
    }
    static cast(node) {
        return node.kind === "ModelAttribute" ? new ModelAttributeAst(node) : void 0;
    }
};
//#endregion
//#region src/syntax/ast/type-annotation.ts
var TypeAnnotationAst = class TypeAnnotationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    /** The annotation's reference, doubling as the constructor callee when an {@link argList} follows. */ name() {
        return findFirstChild(this.syntax, QualifiedNameAst.cast);
    }
    /** Present when the annotation is a constructor (`Vector(1536)`) rather than a plain reference. */ argList() {
        return findFirstChild(this.syntax, AttributeArgListAst.cast);
    }
    isConstructor() {
        return this.argList() !== void 0;
    }
    lbracket() {
        return findChildToken(this.syntax, "LBracket");
    }
    rbracket() {
        return findChildToken(this.syntax, "RBracket");
    }
    questionMark() {
        return findChildToken(this.syntax, "Question");
    }
    isList() {
        return this.lbracket() !== void 0;
    }
    isOptional() {
        return this.questionMark() !== void 0;
    }
    static cast(node) {
        return node.kind === "TypeAnnotation" ? new TypeAnnotationAst(node) : void 0;
    }
};
//#endregion
//#region src/syntax/ast/declarations.ts
function castNamespaceMember(node) {
    return ModelDeclarationAst.cast(node) ?? CompositeTypeDeclarationAst.cast(node) ?? GenericBlockDeclarationAst.cast(node);
}
var DocumentAst = class DocumentAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    *declarations() {
        yield* filterChildren(this.syntax, (node)=>castNamespaceMember(node) ?? TypesBlockAst.cast(node) ?? NamespaceDeclarationAst.cast(node));
    }
    static cast(node) {
        return node.kind === "Document" ? new DocumentAst(node) : void 0;
    }
};
var ModelDeclarationAst = class ModelDeclarationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    keyword() {
        return findChildToken(this.syntax, "Ident");
    }
    name() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    lbrace() {
        return findChildToken(this.syntax, "LBrace");
    }
    rbrace() {
        return findChildToken(this.syntax, "RBrace");
    }
    *fields() {
        yield* filterChildren(this.syntax, FieldDeclarationAst.cast);
    }
    *attributes() {
        yield* filterChildren(this.syntax, ModelAttributeAst.cast);
    }
    *members() {
        yield* filterChildren(this.syntax, (node)=>FieldDeclarationAst.cast(node) ?? ModelAttributeAst.cast(node));
    }
    static cast(node) {
        return node.kind === "ModelDeclaration" ? new ModelDeclarationAst(node) : void 0;
    }
};
var CompositeTypeDeclarationAst = class CompositeTypeDeclarationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    keyword() {
        return findChildToken(this.syntax, "Ident");
    }
    name() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    lbrace() {
        return findChildToken(this.syntax, "LBrace");
    }
    rbrace() {
        return findChildToken(this.syntax, "RBrace");
    }
    *fields() {
        yield* filterChildren(this.syntax, FieldDeclarationAst.cast);
    }
    *attributes() {
        yield* filterChildren(this.syntax, ModelAttributeAst.cast);
    }
    *members() {
        yield* filterChildren(this.syntax, (node)=>FieldDeclarationAst.cast(node) ?? ModelAttributeAst.cast(node));
    }
    static cast(node) {
        return node.kind === "CompositeTypeDeclaration" ? new CompositeTypeDeclarationAst(node) : void 0;
    }
};
var NamespaceDeclarationAst = class NamespaceDeclarationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    keyword() {
        return findChildToken(this.syntax, "Ident");
    }
    name() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    lbrace() {
        return findChildToken(this.syntax, "LBrace");
    }
    rbrace() {
        return findChildToken(this.syntax, "RBrace");
    }
    *declarations() {
        yield* filterChildren(this.syntax, castNamespaceMember);
    }
    static cast(node) {
        return node.kind === "Namespace" ? new NamespaceDeclarationAst(node) : void 0;
    }
};
var TypesBlockAst = class TypesBlockAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    keyword() {
        return findChildToken(this.syntax, "Ident");
    }
    lbrace() {
        return findChildToken(this.syntax, "LBrace");
    }
    rbrace() {
        return findChildToken(this.syntax, "RBrace");
    }
    *declarations() {
        yield* filterChildren(this.syntax, NamedTypeDeclarationAst.cast);
    }
    static cast(node) {
        return node.kind === "TypesBlock" ? new TypesBlockAst(node) : void 0;
    }
};
var GenericBlockDeclarationAst = class GenericBlockDeclarationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    keyword() {
        return findChildToken(this.syntax, "Ident");
    }
    name() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    lbrace() {
        return findChildToken(this.syntax, "LBrace");
    }
    rbrace() {
        return findChildToken(this.syntax, "RBrace");
    }
    *entries() {
        yield* filterChildren(this.syntax, KeyValuePairAst.cast);
    }
    *attributes() {
        yield* filterChildren(this.syntax, ModelAttributeAst.cast);
    }
    *members() {
        yield* filterChildren(this.syntax, (node)=>KeyValuePairAst.cast(node) ?? ModelAttributeAst.cast(node));
    }
    static cast(node) {
        return node.kind === "GenericBlockDeclaration" ? new GenericBlockDeclarationAst(node) : void 0;
    }
};
var KeyValuePairAst = class KeyValuePairAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    key() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    equals() {
        return findChildToken(this.syntax, "Equals");
    }
    value() {
        let pastEquals = false;
        for (const child of this.syntax.children()){
            if (!(child instanceof SyntaxNode)) {
                if (child.kind === "Equals") pastEquals = true;
                continue;
            }
            if (pastEquals) {
                const expr = castExpression(child);
                if (expr) return expr;
            }
        }
    }
    static cast(node) {
        return node.kind === "KeyValuePair" ? new KeyValuePairAst(node) : void 0;
    }
};
var FieldDeclarationAst = class FieldDeclarationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    name() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    typeAnnotation() {
        return findFirstChild(this.syntax, TypeAnnotationAst.cast);
    }
    *attributes() {
        yield* filterChildren(this.syntax, FieldAttributeAst.cast);
    }
    static cast(node) {
        return node.kind === "FieldDeclaration" ? new FieldDeclarationAst(node) : void 0;
    }
};
var NamedTypeDeclarationAst = class NamedTypeDeclarationAst {
    syntax;
    constructor(syntax){
        this.syntax = syntax;
    }
    name() {
        return findFirstChild(this.syntax, IdentifierAst.cast);
    }
    equals() {
        return findChildToken(this.syntax, "Equals");
    }
    typeAnnotation() {
        return findFirstChild(this.syntax, TypeAnnotationAst.cast);
    }
    *attributes() {
        yield* filterChildren(this.syntax, FieldAttributeAst.cast);
    }
    static cast(node) {
        return node.kind === "NamedTypeDeclaration" ? new NamedTypeDeclarationAst(node) : void 0;
    }
};
;
}),
"[project]/node_modules/@prisma-next/psl-parser/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bool",
    ()=>bool,
    "buildSymbolTable",
    ()=>buildSymbolTable,
    "entityRef",
    ()=>entityRef,
    "fieldAttribute",
    ()=>fieldAttribute,
    "fieldRef",
    ()=>fieldRef,
    "findBlockDescriptor",
    ()=>findBlockDescriptor,
    "funcCall",
    ()=>funcCall,
    "getPositionalArgument",
    ()=>getPositionalArgument,
    "identifier",
    ()=>identifier,
    "int",
    ()=>int,
    "interpretArgs",
    ()=>interpretArgs,
    "interpretAttribute",
    ()=>interpretAttribute,
    "keywordPslSpan",
    ()=>keywordPslSpan,
    "leafDiagnostic",
    ()=>leafDiagnostic,
    "list",
    ()=>list,
    "modelAttribute",
    ()=>modelAttribute,
    "nodePslSpan",
    ()=>nodePslSpan,
    "num",
    ()=>num,
    "oneOf",
    ()=>oneOf,
    "optional",
    ()=>optional,
    "parseQuotedStringLiteral",
    ()=>parseQuotedStringLiteral,
    "rangeToPslSpan",
    ()=>rangeToPslSpan,
    "readResolvedAttribute",
    ()=>readResolvedAttribute,
    "readResolvedAttributes",
    ()=>readResolvedAttributes,
    "readResolvedConstructorCall",
    ()=>readResolvedConstructorCall,
    "record",
    ()=>record,
    "str",
    ()=>str,
    "validateExtensionBlockFromSymbol",
    ()=>validateExtensionBlockFromSymbol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/psl-parser/dist/declarations-DR6To8_k.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$psl$2d$ast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/psl-ast.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/result.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$framework$2d$authoring$2d$C00w236K$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isAuthoringPslBlockDescriptor$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/framework-authoring-C00w236K.mjs [app-rsc] (ecmascript) <export d as isAuthoringPslBlockDescriptor>");
;
;
;
;
;
//#region src/attribute-helpers.ts
function getPositionalArgument(attribute, index = 0) {
    return attribute.args.filter((arg)=>arg.kind === "positional")[index]?.value;
}
function parseQuotedStringLiteral(value) {
    const match = value.trim().match(/^(['"])(.*)\1$/);
    if (!match) return void 0;
    return match[2] ?? "";
}
//#endregion
//#region src/resolve.ts
function readResolvedAttribute(attribute, sourceFile) {
    return {
        name: attributeName(attribute.name()),
        args: readResolvedArgList(attribute.argList(), sourceFile),
        span: nodePslSpan(attribute.syntax, sourceFile)
    };
}
function readResolvedAttributes(attributes, sourceFile) {
    return Array.from(attributes, (attribute)=>readResolvedAttribute(attribute, sourceFile));
}
function readResolvedConstructorCall(annotation, sourceFile) {
    const argList = annotation?.argList();
    if (annotation === void 0 || argList === void 0) return void 0;
    return {
        path: annotation.name()?.path() ?? [],
        args: readResolvedArgList(argList, sourceFile),
        span: nodePslSpan(annotation.syntax, sourceFile)
    };
}
function readResolvedArgList(argList, sourceFile) {
    if (argList === void 0) return [];
    const args = [];
    for (const arg of argList.args()){
        const name = arg.name()?.name();
        const expression = arg.value();
        args.push({
            kind: name !== void 0 ? "named" : "positional",
            ...name !== void 0 ? {
                name
            } : {},
            value: renderExpression(expression),
            ...expression !== void 0 ? {
                expression
            } : {},
            span: nodePslSpan(arg.syntax, sourceFile)
        });
    }
    return args;
}
function attributeName(name) {
    return name?.path().join(".") ?? "";
}
function renderExpression(expression) {
    if (expression === void 0) return "";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"])(expression.syntax).trim();
}
function nodePslSpan(node, sourceFile) {
    const start = node.offset;
    const end = start + node.green.textLength;
    return {
        start: offsetToPslPosition(start, sourceFile),
        end: offsetToPslPosition(end, sourceFile)
    };
}
/** Unsupported-top-level-block diagnostics are anchored to the keyword token. */ function keywordPslSpan(node, keyword, sourceFile) {
    const start = node.offset;
    const end = start + keyword.length;
    return {
        start: offsetToPslPosition(start, sourceFile),
        end: offsetToPslPosition(end, sourceFile)
    };
}
function rangeToPslSpan(range, sourceFile) {
    return {
        start: offsetToPslPosition(sourceFile.offsetAt(range.start), sourceFile),
        end: offsetToPslPosition(sourceFile.offsetAt(range.end), sourceFile)
    };
}
function offsetToPslPosition(offset, sourceFile) {
    const position = sourceFile.positionAt(offset);
    return {
        offset,
        line: position.line + 1,
        column: position.character + 1
    };
}
//#endregion
//#region src/attribute-spec/combinators/diagnostic.ts
const ATTRIBUTE_DIAGNOSTIC_CODE = "PSL_INVALID_ATTRIBUTE_SYNTAX";
function leafDiagnostic(ctx, node, message) {
    return {
        code: ATTRIBUTE_DIAGNOSTIC_CODE,
        message,
        sourceId: ctx.sourceId,
        span: nodePslSpan(node.syntax, ctx.sourceFile)
    };
}
//#endregion
//#region src/attribute-spec/combinators/bool.ts
function bool() {
    return {
        kind: "bool",
        label: "boolean",
        parse: (arg, ctx)=>{
            if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"]) {
                const value = arg.value();
                if (value !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(value);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected a boolean literal")
            ]);
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/entity-ref.ts
function entityRef() {
    return {
        kind: "entityRef",
        label: "model name",
        parse: (arg, ctx)=>{
            if (!(arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["w"])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected a model name")
            ]);
            const name = arg.name();
            if (name === void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected a model name")
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(name);
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/field-ref.ts
function fieldRef(scope) {
    return {
        kind: "fieldRef",
        label: "field name",
        scope,
        parse: (arg, ctx)=>{
            if (!(arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["w"])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected a field name")
            ]);
            const name = arg.name();
            if (name === void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected a field name")
            ]);
            const model = scope === "self" ? ctx.selfModel : ctx.resolveReferencedModel();
            if (model !== void 0 && !Object.hasOwn(model.fields, name)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, `Field "${name}" does not exist on model "${model.name}"`)
            ]);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(name);
        }
    };
}
//#endregion
//#region src/attribute-spec/interpret.ts
function interpretArgs(args, spec, ctx, span) {
    const diagnostics = [];
    const output = {};
    const seen = /* @__PURE__ */ new Set();
    let positionalSlot = 0;
    let reportedExcess = false;
    for (const arg of args){
        const name = arg.name()?.name();
        let key;
        let param;
        if (name === void 0) {
            const posParam = spec.positional[positionalSlot];
            if (posParam === void 0) {
                if (!reportedExcess) {
                    diagnostics.push(diagnostic(`Attribute "${spec.name}" received too many positional arguments`, ctx, span));
                    reportedExcess = true;
                }
                continue;
            }
            positionalSlot += 1;
            key = posParam.key;
            param = posParam.type;
        } else {
            const namedParam = Object.hasOwn(spec.named, name) ? spec.named[name] : void 0;
            if (namedParam === void 0) {
                diagnostics.push(diagnostic(`Attribute "${spec.name}" received unknown argument "${name}"`, ctx, nodePslSpan(arg.syntax, ctx.sourceFile)));
                continue;
            }
            key = name;
            param = namedParam;
        }
        if (seen.has(key)) {
            diagnostics.push(diagnostic(`Attribute "${spec.name}" received duplicate argument "${key}"`, ctx, nodePslSpan(arg.syntax, ctx.sourceFile)));
            continue;
        }
        seen.add(key);
        const result = parseArgValue(arg, param, ctx, diagnostics);
        if (result.ok) output[key] = result.value;
    }
    const finalized = /* @__PURE__ */ new Set();
    const finalizeAbsentKey = (key, positionalParam, namedParam)=>{
        if (finalized.has(key) || seen.has(key)) return;
        finalized.add(key);
        const effective = namedParam ?? positionalParam;
        if (effective === void 0) return;
        if (isOptionalArgType(effective)) {
            if (effective.hasDefault) output[key] = effective.defaultValue;
            return;
        }
        diagnostics.push(diagnostic(`Attribute "${spec.name}" is missing required argument "${key}"`, ctx, span));
    };
    for (const param of spec.positional){
        const namedParam = Object.hasOwn(spec.named, param.key) ? spec.named[param.key] : void 0;
        finalizeAbsentKey(param.key, param.type, namedParam);
    }
    for (const key of Object.keys(spec.named))finalizeAbsentKey(key, void 0, spec.named[key]);
    if (diagnostics.length > 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])(diagnostics);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(output);
}
function interpretAttribute(attrNode, spec, ctx) {
    const attributeSpan = nodePslSpan(attrNode.syntax, ctx.sourceFile);
    const bound = interpretArgs(attrNode.argList()?.args() ?? [], spec, ctx, attributeSpan);
    if (!bound.ok) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])(bound.failure);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(bound.value);
    if (spec.refine !== void 0) {
        const refineDiagnostics = spec.refine(value, ctx);
        if (refineDiagnostics.length > 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])(refineDiagnostics);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(value);
}
function parseArgValue(arg, argType, ctx, diagnostics) {
    const value = arg.value();
    if (value === void 0) {
        const missing = diagnostic("Attribute argument is missing a value", ctx, nodePslSpan(arg.syntax, ctx.sourceFile));
        diagnostics.push(missing);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
            missing
        ]);
    }
    const result = argType.parse(value, ctx);
    if (!result.ok) for (const failure of result.failure)diagnostics.push(failure);
    return result;
}
function isOptionalArgType(param) {
    return "optional" in param && param.optional === true;
}
function diagnostic(message, ctx, span) {
    return {
        code: ATTRIBUTE_DIAGNOSTIC_CODE,
        message,
        sourceId: ctx.sourceId,
        span
    };
}
//#endregion
//#region src/attribute-spec/combinators/func-call.ts
function funcCall(name, sig) {
    return {
        kind: "funcCall",
        label: "function call",
        parse: (arg, ctx)=>{
            const guard = matchCallee(arg, name, ctx);
            if (!guard.ok) return guard;
            const span = nodePslSpan(guard.value.syntax, ctx.sourceFile);
            const bound = interpretArgs(guard.value.args(), {
                name,
                positional: sig.positional ?? [],
                named: sig.named ?? {}
            }, ctx, span);
            if (!bound.ok) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])(bound.failure);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])({
                fn: name,
                span,
                args: bound.value
            });
        }
    };
}
function matchCallee(arg, name, ctx) {
    if (!(arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_"])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
        leafDiagnostic(ctx, arg, "Expected a function call")
    ]);
    const qname = arg.name();
    if (qname === void 0 || qname.dot() !== void 0 || qname.colon() !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
        leafDiagnostic(ctx, arg, "Expected a function call")
    ]);
    const calleeName = qname.identifier()?.token()?.text;
    if (calleeName === void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
        leafDiagnostic(ctx, arg, "Expected a function call")
    ]);
    if (calleeName !== name) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
        leafDiagnostic(ctx, arg, `Expected ${name}()`)
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(arg);
}
//#endregion
//#region src/attribute-spec/combinators/identifier.ts
function identifier(name) {
    return {
        kind: "identifier",
        label: name,
        parse: (arg, ctx)=>{
            if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["w"] && arg.name() === name) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(name);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, `Expected ${name}`)
            ]);
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/int.ts
function int(opts) {
    const min = opts?.min;
    const max = opts?.max;
    return {
        kind: "int",
        label: "integer",
        parse: (arg, ctx)=>{
            if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v"]) {
                const value = arg.value();
                if (value !== void 0 && Number.isInteger(value)) {
                    if ((min === void 0 || value >= min) && (max === void 0 || value <= max)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(value);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                        leafDiagnostic(ctx, arg, rangeMessage(min, max))
                    ]);
                }
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected an integer literal")
            ]);
        }
    };
}
function rangeMessage(min, max) {
    if (min !== void 0 && max !== void 0) return `Expected an integer between ${min} and ${max}`;
    if (min !== void 0) return `Expected an integer greater than or equal to ${min}`;
    return `Expected an integer less than or equal to ${max}`;
}
//#endregion
//#region src/attribute-spec/combinators/list.ts
function list(of, opts) {
    return {
        kind: "list",
        label: `${of.label}[]`,
        parse: (arg, ctx)=>{
            if (!(arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, `Expected a list of ${of.label}`)
            ]);
            const diagnostics = [];
            const parsed = [];
            let count = 0;
            for (const element of arg.elements()){
                count += 1;
                const result = of.parse(element, ctx);
                if (result.ok) parsed.push({
                    node: element,
                    value: result.value
                });
                else diagnostics.push(...result.failure);
            }
            if (opts?.nonEmpty === true && count === 0) diagnostics.push(leafDiagnostic(ctx, arg, "Expected a non-empty list"));
            if (opts?.unique === true) {
                const seen = /* @__PURE__ */ new Set();
                for (const { node, value } of parsed)if (seen.has(value)) diagnostics.push(leafDiagnostic(ctx, node, "Duplicate list entry"));
                else seen.add(value);
            }
            if (diagnostics.length > 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])(diagnostics);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(parsed.map((entry)=>entry.value));
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/num.ts
function num(value) {
    return {
        kind: "num",
        label: value === void 0 ? "number" : String(value),
        parse: (arg, ctx)=>{
            if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v"]) {
                const parsed = arg.value();
                if (parsed !== void 0 && (value === void 0 || parsed === value)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(parsed);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, value === void 0 ? "Expected a number literal" : `Expected ${value}`)
            ]);
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/one-of.ts
function oneOf(...alts) {
    const label = alts.map((alt)=>alt.label).join(" | ");
    return {
        kind: "oneOf",
        label,
        parse: (arg, ctx)=>{
            for (const alt of alts){
                const result = alt.parse(arg, ctx);
                if (result.ok) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(result.value));
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, `Expected one of: ${label}`)
            ]);
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/record.ts
function record(of) {
    return {
        kind: "record",
        label: `{ [key]: ${of.label} }`,
        parse: (arg, ctx)=>{
            if (!(arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["b"])) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected an object literal")
            ]);
            const diagnostics = [];
            const result = {};
            for (const field of arg.fields()){
                const key = field.keyName();
                if (key === void 0) {
                    diagnostics.push(leafDiagnostic(ctx, field, "Expected a key"));
                    continue;
                }
                const value = field.value();
                if (value === void 0) {
                    diagnostics.push(leafDiagnostic(ctx, field, `Expected a value for key "${key}"`));
                    continue;
                }
                const parsed = of.parse(value, ctx);
                if (!parsed.ok) {
                    diagnostics.push(...parsed.failure);
                    continue;
                }
                if (Object.hasOwn(result, key)) {
                    diagnostics.push(leafDiagnostic(ctx, field, `Duplicate key "${key}"`));
                    continue;
                }
                result[key] = parsed.value;
            }
            if (diagnostics.length > 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])(diagnostics);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(result);
        }
    };
}
//#endregion
//#region src/attribute-spec/combinators/str.ts
function str() {
    return {
        kind: "str",
        label: "string",
        parse: (arg, ctx)=>{
            if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["x"]) {
                const value = arg.value();
                if (value !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ok"])(value);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$result$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notOk"])([
                leafDiagnostic(ctx, arg, "Expected a string literal")
            ]);
        }
    };
}
//#endregion
//#region src/attribute-spec/field-attribute.ts
function fieldAttribute(name, config) {
    return {
        level: "field",
        name,
        positional: config.positional ?? [],
        named: config.named ?? {},
        ...config.refine !== void 0 ? {
            refine: config.refine
        } : {}
    };
}
//#endregion
//#region src/attribute-spec/model-attribute.ts
function modelAttribute(name, config) {
    return {
        level: "model",
        name,
        positional: config.positional ?? [],
        named: config.named ?? {},
        ...config.refine !== void 0 ? {
            refine: config.refine
        } : {}
    };
}
//#endregion
//#region src/attribute-spec/optional.ts
function optional(type, ...rest) {
    if (rest.length === 0) return {
        ...type,
        optional: true,
        hasDefault: false
    };
    return {
        ...type,
        optional: true,
        hasDefault: true,
        defaultValue: rest[0]
    };
}
//#endregion
//#region src/extension-block.ts
function findBlockDescriptor(descriptors, keyword) {
    if (descriptors === void 0) return void 0;
    for (const value of Object.values(descriptors)){
        if (value === void 0) continue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$framework$2d$authoring$2d$C00w236K$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isAuthoringPslBlockDescriptor$3e$__["isAuthoringPslBlockDescriptor"])(value)) {
            if (value.keyword === keyword) return value;
            continue;
        }
        const nested = findBlockDescriptor(value, keyword);
        if (nested !== void 0) return nested;
    }
}
function validateExtensionBlockFromSymbol(input) {
    const refCtx = buildRefResolutionContext(input.symbolTable, input.block);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$psl$2d$ast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateExtensionBlock"])(input.block.block, input.descriptor, input.sourceId, input.codecLookup, refCtx);
}
const ZERO_SPAN = {
    start: {
        offset: 0,
        line: 1,
        column: 1
    },
    end: {
        offset: 0,
        line: 1,
        column: 1
    }
};
function buildRefResolutionContext(symbolTable, block) {
    const unspecifiedNamespace = makeNamespace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$psl$2d$ast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNSPECIFIED_PSL_NAMESPACE_ID"], Object.values(symbolTable.topLevel.models));
    const allNamespaces = [
        unspecifiedNamespace,
        ...Object.values(symbolTable.topLevel.namespaces).map((namespace)=>makeNamespace(namespace.name, Object.values(namespace.models)))
    ];
    const ownerNamespaceName = findOwnerNamespaceName(symbolTable, block);
    return {
        ownerNamespace: allNamespaces.find((namespace)=>namespace.name === ownerNamespaceName) ?? unspecifiedNamespace,
        allNamespaces
    };
}
function makeNamespace(name, models) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$psl$2d$ast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makePslNamespace"])({
        kind: "namespace",
        name,
        entries: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$psl$2d$ast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makePslNamespaceEntries"])(models.map((model)=>({
                kind: "model",
                name: model.name,
                fields: [],
                attributes: [],
                span: ZERO_SPAN
            })), [], []),
        span: ZERO_SPAN
    });
}
function findOwnerNamespaceName(symbolTable, block) {
    for (const namespace of Object.values(symbolTable.topLevel.namespaces))if (Object.values(namespace.blocks).some((candidate)=>candidate === block)) return namespace.name;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$psl$2d$ast$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNSPECIFIED_PSL_NAMESPACE_ID"];
}
//#endregion
//#region src/block-reconstruction.ts
/**
* Descriptor-free and unknown parameters become `value` stubs so validation can
* report them via key-set comparison. Duplicate member names are first-wins.
*/ function reconstructExtensionBlock(node, descriptor, sourceFile, diagnostics) {
    const keyword = node.keyword()?.text ?? "";
    const blockName = node.name()?.name() ?? "";
    const blockAttributes = [];
    for (const attribute of node.attributes()){
        const name = attribute.name()?.path().join(".") ?? "";
        const args = Array.from(attribute.argList()?.args() ?? [], (arg)=>{
            const value = arg.value();
            return {
                kind: "positional",
                value: value === void 0 ? "" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"])(value.syntax).trim(),
                span: nodePslSpan(arg.syntax, sourceFile)
            };
        });
        blockAttributes.push({
            name,
            args,
            span: nodePslSpan(attribute.syntax, sourceFile)
        });
    }
    const parameters = {};
    for (const entry of node.entries()){
        const key = entry.key()?.name();
        if (key === void 0) continue;
        const span = nodePslSpan(entry.syntax, sourceFile);
        if (Object.hasOwn(parameters, key)) {
            diagnostics.push({
                code: "PSL_EXTENSION_DUPLICATE_PARAMETER",
                message: `Duplicate parameter "${key}" in "${keyword}" block "${blockName}"; first occurrence wins`,
                range: {
                    start: sourceFile.positionAt(entry.syntax.offset),
                    end: sourceFile.positionAt(entry.syntax.offset + entry.syntax.green.textLength)
                }
            });
            continue;
        }
        parameters[key] = reconstructParamValue(entry, descriptor?.parameters[key], span, sourceFile, diagnostics);
    }
    return {
        kind: descriptor?.discriminator ?? keyword,
        keyword,
        name: blockName,
        parameters,
        blockAttributes,
        span: nodePslSpan(node.syntax, sourceFile)
    };
}
function reconstructParamValue(entry, param, span, sourceFile, diagnostics) {
    const value = entry.value();
    if (value === void 0) return {
        kind: "bare",
        span
    };
    return reconstructFromExpression(value, param, span, sourceFile, diagnostics);
}
function reconstructFromExpression(value, param, span, sourceFile, diagnostics) {
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"])(value.syntax).trim();
    if (param?.kind === "list") {
        const array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"].cast(value.syntax);
        if (!array) {
            diagnostics?.push({
                code: "PSL_EXTENSION_INVALID_VALUE",
                message: `List parameter expects an array literal, got ${raw}`,
                range: {
                    start: sourceFile.positionAt(value.syntax.offset),
                    end: sourceFile.positionAt(value.syntax.offset + value.syntax.green.textLength)
                }
            });
            return {
                kind: "value",
                raw,
                span
            };
        }
        const items = [];
        for (const element of array.elements())items.push(reconstructFromExpression(element, param.of, nodePslSpan(element.syntax, sourceFile), sourceFile, diagnostics));
        return {
            kind: "list",
            items,
            span
        };
    }
    switch(param?.kind){
        case "ref":
            return {
                kind: "ref",
                identifier: raw,
                span
            };
        case "option":
            return {
                kind: "option",
                token: raw,
                span
            };
        default:
            return {
                kind: "value",
                raw,
                span
            };
    }
}
//#endregion
//#region src/symbol-table.ts
/**
* Owns duplicate-declaration detection for all PSL scopes; downstream consumers
* should consume first-wins symbols rather than re-emitting duplicate diagnostics.
*/ function buildSymbolTable(options) {
    const { document, sourceFile, scalarTypes, pslBlockDescriptors } = options;
    const diagnostics = [];
    const scalarSet = new Set(scalarTypes);
    const namespaces = {};
    const scalars = {};
    const typeAliases = {};
    const blocks = {};
    const models = {};
    const compositeTypes = {};
    const topLevelNames = /* @__PURE__ */ new Set();
    const claim = (taken, name)=>{
        const text = name?.name();
        if (text === void 0) return void 0;
        if (taken.has(text)) {
            const range = nameRange(name, sourceFile);
            if (range) diagnostics.push({
                code: "PSL_DUPLICATE_DECLARATION",
                message: `Duplicate declaration of "${text}"`,
                range
            });
            return;
        }
        taken.add(text);
        return text;
    };
    for (const declaration of document.declarations())if (declaration instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]) {
        const name = claim(topLevelNames, declaration.name());
        if (name !== void 0) models[name] = buildModel(name, declaration, sourceFile, diagnostics);
    } else if (declaration instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]) {
        const name = claim(topLevelNames, declaration.name());
        if (name !== void 0) compositeTypes[name] = buildCompositeType(name, declaration, sourceFile, diagnostics);
    } else if (declaration instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]) {
        const name = claim(topLevelNames, declaration.name());
        if (name !== void 0) blocks[name] = buildBlock(name, declaration, sourceFile, pslBlockDescriptors, diagnostics);
    } else if (declaration instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]) {
        const name = claim(topLevelNames, declaration.name());
        if (name !== void 0) namespaces[name] = buildNamespace(name, declaration, diagnostics, sourceFile, pslBlockDescriptors);
    } else if (declaration instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]) for (const binding of declaration.declarations()){
        const name = claim(topLevelNames, binding.name());
        if (name === void 0) continue;
        const resolved = resolveNamedTypeBinding(binding, sourceFile);
        const span = nodePslSpan(binding.syntax, sourceFile);
        if (isScalarBinding(binding, scalarSet)) scalars[name] = {
            kind: "scalar",
            name,
            node: binding,
            span,
            ...resolved
        };
        else typeAliases[name] = {
            kind: "typeAlias",
            name,
            node: binding,
            span,
            ...resolved
        };
    }
    return {
        table: {
            topLevel: {
                namespaces,
                scalars,
                typeAliases,
                blocks,
                models,
                compositeTypes
            }
        },
        diagnostics
    };
}
function buildModel(name, node, sourceFile, diagnostics) {
    return {
        kind: "model",
        name,
        node,
        span: nodePslSpan(node.syntax, sourceFile),
        fields: buildFields(name, node.fields(), sourceFile, diagnostics),
        attributes: readResolvedAttributes(node.attributes(), sourceFile)
    };
}
function buildCompositeType(name, node, sourceFile, diagnostics) {
    return {
        kind: "compositeType",
        name,
        node,
        span: nodePslSpan(node.syntax, sourceFile),
        fields: buildFields(name, node.fields(), sourceFile, diagnostics),
        attributes: readResolvedAttributes(node.attributes(), sourceFile)
    };
}
function buildBlock(name, node, sourceFile, pslBlockDescriptors, diagnostics) {
    const keyword = node.keyword()?.text ?? "";
    const descriptor = findBlockDescriptor(pslBlockDescriptors, keyword);
    return {
        kind: "block",
        name,
        keyword,
        node,
        span: nodePslSpan(node.syntax, sourceFile),
        block: reconstructExtensionBlock(node, descriptor, sourceFile, diagnostics)
    };
}
function buildNamespace(name, node, diagnostics, sourceFile, pslBlockDescriptors) {
    const models = {};
    const compositeTypes = {};
    const blocks = {};
    const taken = /* @__PURE__ */ new Set();
    for (const member of node.declarations()){
        const memberName = member.name()?.name();
        if (memberName === void 0) continue;
        if (taken.has(memberName)) {
            const range = nameRange(member.name(), sourceFile);
            if (range) diagnostics.push({
                code: "PSL_DUPLICATE_DECLARATION",
                message: `Duplicate declaration of "${memberName}"`,
                range
            });
            continue;
        }
        taken.add(memberName);
        if (member instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]) models[memberName] = buildModel(memberName, member, sourceFile, diagnostics);
        else if (member instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]) compositeTypes[memberName] = buildCompositeType(memberName, member, sourceFile, diagnostics);
        else if (member instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$psl$2d$parser$2f$dist$2f$declarations$2d$DR6To8_k$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]) blocks[memberName] = buildBlock(memberName, member, sourceFile, pslBlockDescriptors, diagnostics);
    }
    return {
        kind: "namespace",
        name,
        node,
        span: nodePslSpan(node.syntax, sourceFile),
        models,
        compositeTypes,
        blocks
    };
}
function buildFields(ownerName, fields, sourceFile, diagnostics) {
    const result = {};
    for (const field of fields){
        const nameNode = field.name();
        const name = nameNode?.name();
        if (name === void 0) continue;
        if (Object.hasOwn(result, name)) {
            const range = nameRange(nameNode, sourceFile);
            if (range) diagnostics.push({
                code: "PSL_DUPLICATE_DECLARATION",
                message: `Duplicate declaration of "${name}"`,
                range
            });
            continue;
        }
        result[name] = buildField(ownerName, name, field, sourceFile, diagnostics);
    }
    return result;
}
function buildField(ownerName, name, node, sourceFile, diagnostics) {
    const attributes = readResolvedAttributes(node.attributes(), sourceFile);
    const span = nodePslSpan(node.syntax, sourceFile);
    const annotation = node.typeAnnotation();
    const typeName = annotation?.name();
    if (typeName?.isOverQualified()) {
        const path = typeName.path();
        diagnostics.push({
            code: "PSL_INVALID_QUALIFIED_TYPE",
            message: `Field "${ownerName}.${name}" has an invalid qualified type "${path.join(".")}"; use at most one namespace qualifier (e.g. "ns.TypeName")`,
            range: nodeRange(typeName.syntax, sourceFile)
        });
        return {
            kind: "field",
            name,
            node,
            span,
            typeName: path[path.length - 1] ?? "",
            optional: false,
            list: false,
            malformedType: true,
            attributes
        };
    }
    const typeConstructor = annotation?.isConstructor() ? readResolvedConstructorCall(annotation, sourceFile) : void 0;
    const typeNamespaceId = typeName?.namespace()?.name();
    const typeContractSpaceId = typeName?.space()?.name();
    return {
        kind: "field",
        name,
        node,
        span,
        typeName: typeName?.identifier()?.name() ?? "",
        ...typeNamespaceId !== void 0 ? {
            typeNamespaceId
        } : {},
        ...typeContractSpaceId !== void 0 ? {
            typeContractSpaceId
        } : {},
        optional: annotation?.isOptional() ?? false,
        list: annotation?.isList() ?? false,
        ...typeConstructor !== void 0 ? {
            typeConstructor
        } : {},
        attributes
    };
}
function resolveNamedTypeBinding(node, sourceFile) {
    const annotation = node.typeAnnotation();
    const isConstructor = annotation?.isConstructor() ?? false;
    const baseType = annotation?.name()?.identifier()?.name();
    const typeConstructor = readResolvedConstructorCall(annotation, sourceFile);
    return {
        isConstructor,
        ...!isConstructor && baseType !== void 0 ? {
            baseType
        } : {},
        ...typeConstructor !== void 0 ? {
            typeConstructor
        } : {},
        attributes: readResolvedAttributes(node.attributes(), sourceFile)
    };
}
function isScalarBinding(node, scalarTypes) {
    const annotation = node.typeAnnotation();
    if (annotation === void 0 || annotation.isConstructor()) return false;
    const base = annotation.name()?.identifier()?.name();
    return base !== void 0 && scalarTypes.has(base);
}
function nameRange(name, sourceFile) {
    if (name === void 0) return void 0;
    for (const token of name.syntax.tokens())if (token.kind === "Ident") return {
        start: sourceFile.positionAt(token.offset),
        end: sourceFile.positionAt(token.offset + token.text.length)
    };
}
function nodeRange(node, sourceFile) {
    const start = node.offset;
    const end = start + node.green.textLength;
    return {
        start: sourceFile.positionAt(start),
        end: sourceFile.positionAt(end)
    };
}
;
}),
"[project]/node_modules/@prisma-next/sql-builder/dist/runtime/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpressionImpl",
    ()=>ExpressionImpl,
    "createAggregateFunctions",
    ()=>createAggregateFunctions,
    "createFieldProxy",
    ()=>createFieldProxy,
    "createFunctions",
    ()=>createFunctions,
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__AggregateExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export t as AggregateExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__AndExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export n as AndExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__BinaryExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export r as BinaryExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__ColumnRef$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export i as ColumnRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__DeleteAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export o as DeleteAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__DerivedTableSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export s as DerivedTableSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__ExistsExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export d as ExistsExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__IdentifierRef$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export p as IdentifierRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__InsertAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export m as InsertAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__JoinAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export g as JoinAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__y__as__ListExpression$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export y as ListExpression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b__as__LiteralExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export b as LiteralExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__S__as__NullCheckExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export S as NullCheckExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__w__as__OrExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export w as OrExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__OrderByItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export T as OrderByItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__E__as__ParamRef$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export E as ParamRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__O__as__ProjectionItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export O as ProjectionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__j__as__SelectAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export j as SelectAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__M__as__SubqueryExpr$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export M as SubqueryExpr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__N__as__TableSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export N as TableSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__P__as__UpdateAst$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/types-DtzFztRV.mjs [app-rsc] (ecmascript) <export P as UpdateAst>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$util$2d$DQQgv2j1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__collectOrderedParamRefs$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/util-DQQgv2j1.mjs [app-rsc] (ecmascript) <export t as collectOrderedParamRefs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/exports/expression.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$codec$2d$descriptor$2d$registry$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-relational-core/dist/exports/codec-descriptor-registry.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/runtime.mjs [app-rsc] (ecmascript) <locals>");
;
;
;
;
//#region src/runtime/expression-impl.ts
/**
* Runtime wrapper around a relational-core AST expression node. Carries ScopeField metadata (codecId, nullable) so aggregate-like combinators can propagate the input codec onto their result.
*
* `codec` records the column-bound {@link CodecRef} when the field-proxy knows the binding — both the namespaced form (`f.user.email` → `ColumnRef`) and the top-level shortcut (`f.email` → `IdentifierRef`) stamp the ref derived from contract storage. `codecOf(expression)` exposes it for operation implementations forwarding the ref to `toExpr`.
*/ var ExpressionImpl = class {
    ast;
    returnType;
    codec;
    constructor(ast, returnType, codec){
        this.ast = ast;
        this.returnType = returnType;
        this.codec = codec;
    }
    buildAst() {
        return this.ast;
    }
};
//#endregion
//#region src/runtime/field-proxy.ts
function createFieldProxy(scope) {
    return new Proxy({}, {
        get (_target, prop) {
            if (Object.hasOwn(scope.topLevel, prop)) {
                const topField = scope.topLevel[prop];
                if (topField) return new ExpressionImpl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__IdentifierRef$3e$__["IdentifierRef"].of(prop), topField, topField.codec);
            }
            if (Object.hasOwn(scope.namespaces, prop)) {
                const nsFields = scope.namespaces[prop];
                if (nsFields) return createNamespaceProxy(prop, nsFields);
            }
        }
    });
}
function createNamespaceProxy(namespaceName, fields) {
    return new Proxy({}, {
        get (_target, prop) {
            if (Object.hasOwn(fields, prop)) {
                const field = fields[prop];
                if (field) return new ExpressionImpl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__ColumnRef$3e$__["ColumnRef"].of(namespaceName, prop), field, field.codec);
            }
        }
    });
}
//#endregion
//#region src/runtime/functions.ts
const BOOL_FIELD = {
    codecId: "pg/bool@1",
    nullable: false
};
const resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toExpr"];
/**
* Resolve a binary-comparison operand into an AST expression, threading the column-bound side's {@link CodecRef} to the raw-value side.
*
* For `fns.eq(f.email, 'alice@example.com')`, `f.email` is the column-bound expression carrying a `ColumnRef` AST and a `CodecRef` derived from contract storage; the raw string operand has no codec context. By deriving the codec context from the column-bound side and forwarding it via `toExpr(value, codec)`, the resulting `ParamRef` carries the `CodecRef` that encode-side dispatch needs to materialise the per-instance codec for parameterized codec ids (`vector(1024)` vs. `vector(1536)`).
*/ function resolveOperand(operand, otherCodec) {
    if (isExpressionLike(operand)) return operand.buildAst();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toExpr"])(operand, otherCodec);
}
function isExpressionLike(value) {
    return typeof value === "object" && value !== null && "buildAst" in value && typeof value.buildAst === "function";
}
/**
* Resolves an Expression via `buildAst()`, or wraps a raw value as a `LiteralExpr` — an SQL literal inlined into the query text, not a bound parameter.
*
* Used for `and` / `or` operands. The usual operand is an `Expression<bool>` (e.g. the result of `fns.eq`), which this function passes through by calling `buildAst()`. The only time the raw-value branch fires is when the caller writes `fns.and(true, x)` or similar — inlining `TRUE`/`FALSE` literals lets the SQL planner statically simplify `TRUE AND x` to `x`, which it cannot do for an opaque `ParamRef`.
*/ function toLiteralExpr(value) {
    if (typeof value === "object" && value !== null && "buildAst" in value && typeof value.buildAst === "function") return value.buildAst();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b__as__LiteralExpr$3e$__["LiteralExpr"](value);
}
function boolExpr(astNode) {
    return new ExpressionImpl(astNode, BOOL_FIELD);
}
function binaryWithSharedCodec(a, b, build) {
    const aCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codecOf"])(a);
    return build(resolveOperand(a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codecOf"])(b)), resolveOperand(b, aCodec));
}
function eq(a, b) {
    if (b === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__S__as__NullCheckExpr$3e$__["NullCheckExpr"].isNull(resolve(a)));
    if (a === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__S__as__NullCheckExpr$3e$__["NullCheckExpr"].isNull(resolve(b)));
    return boolExpr(binaryWithSharedCodec(a, b, (l, r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__BinaryExpr$3e$__["BinaryExpr"]("eq", l, r)));
}
function ne(a, b) {
    if (b === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__S__as__NullCheckExpr$3e$__["NullCheckExpr"].isNotNull(resolve(a)));
    if (a === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__S__as__NullCheckExpr$3e$__["NullCheckExpr"].isNotNull(resolve(b)));
    return boolExpr(binaryWithSharedCodec(a, b, (l, r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__BinaryExpr$3e$__["BinaryExpr"]("neq", l, r)));
}
function comparison(a, b, op) {
    return boolExpr(binaryWithSharedCodec(a, b, (l, r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__BinaryExpr$3e$__["BinaryExpr"](op, l, r)));
}
function inOrNotIn(expr, valuesOrSubquery, op) {
    const left = expr.buildAst();
    const leftCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codecOf"])(expr);
    const binaryFn = op === "in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__BinaryExpr$3e$__["BinaryExpr"].in : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__BinaryExpr$3e$__["BinaryExpr"].notIn;
    if (Array.isArray(valuesOrSubquery)) {
        const refs = valuesOrSubquery.map((v)=>resolveOperand(v, leftCodec));
        return boolExpr(binaryFn(left, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__y__as__ListExpression$3e$__["ListExpression"].of(refs)));
    }
    return boolExpr(binaryFn(left, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__M__as__SubqueryExpr$3e$__["SubqueryExpr"].of(valuesOrSubquery.buildAst())));
}
function numericAgg(fn, expr) {
    return new ExpressionImpl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__AggregateExpr$3e$__["AggregateExpr"][fn](expr.buildAst()), {
        codecId: expr.returnType.codecId,
        nullable: true
    });
}
function createBuiltinFunctions(rawCodecInferer) {
    return {
        eq: (a, b)=>eq(a, b),
        ne: (a, b)=>ne(a, b),
        gt: (a, b)=>comparison(a, b, "gt"),
        gte: (a, b)=>comparison(a, b, "gte"),
        lt: (a, b)=>comparison(a, b, "lt"),
        lte: (a, b)=>comparison(a, b, "lte"),
        and: (...exprs)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__AndExpr$3e$__["AndExpr"].of(exprs.map(toLiteralExpr))),
        or: (...exprs)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__w__as__OrExpr$3e$__["OrExpr"].of(exprs.map(toLiteralExpr))),
        exists: (subquery)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__ExistsExpr$3e$__["ExistsExpr"].exists(subquery.buildAst())),
        notExists: (subquery)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__ExistsExpr$3e$__["ExistsExpr"].notExists(subquery.buildAst())),
        in: (expr, valuesOrSubquery)=>inOrNotIn(expr, valuesOrSubquery, "in"),
        notIn: (expr, valuesOrSubquery)=>inOrNotIn(expr, valuesOrSubquery, "notIn"),
        raw: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRawSql"])(rawCodecInferer)
    };
}
function createAggregateOnlyFunctions() {
    return {
        count: (expr)=>{
            const astExpr = expr ? expr.buildAst() : void 0;
            return new ExpressionImpl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__AggregateExpr$3e$__["AggregateExpr"].count(astExpr), {
                codecId: "pg/int8@1",
                nullable: false
            });
        },
        sum: (expr)=>numericAgg("sum", expr),
        avg: (expr)=>numericAgg("avg", expr),
        min: (expr)=>numericAgg("min", expr),
        max: (expr)=>numericAgg("max", expr)
    };
}
function createFunctions(operations, rawCodecInferer) {
    const builtins = createBuiltinFunctions(rawCodecInferer);
    return new Proxy({}, {
        get (_target, prop) {
            if (Object.hasOwn(builtins, prop)) return builtins[prop];
            const op = operations[prop];
            if (op) return op.impl;
        }
    });
}
function createAggregateFunctions(operations, rawCodecInferer) {
    const baseFns = createFunctions(operations, rawCodecInferer);
    const aggregates = createAggregateOnlyFunctions();
    return new Proxy({}, {
        get (_target, prop) {
            const agg = aggregates[prop];
            if (agg) return agg;
            return baseFns[prop];
        }
    });
}
//#endregion
//#region src/runtime/resolve-table.ts
function resolveTableInNamespace(storage, namespaceId, tableName) {
    const namespace = storage.namespaces[namespaceId];
    if (namespace === void 0) return void 0;
    const tables = namespace.entries.table;
    if (tables === void 0 || !Object.hasOwn(tables, tableName)) return void 0;
    return tables[tableName];
}
//#endregion
//#region ../../../1-framework/0-foundation/utils/dist/casts-DpaahrlC.mjs
/**
* **Last-resort escape hatch for unsafe type assertions. Not a sanctioned tool to reach for.**
*
* Before reaching for `blindCast`, **rewrite the surrounding code so the cast becomes
* unnecessary**: tighten an input type, add a runtime check that narrows via a type
* predicate, restructure a generic so the compiler can see the relationship you're
* asserting, or use {@link castAs} when the value already satisfies the target type.
* Only when no rewrite is feasible does `blindCast` become the right answer — and at
* that point, the `Reason` literal you supply must articulate the compromise in
* language a reviewer can evaluate.
*
* The reviewer **will** validate the `Reason`. If it doesn't hold up under scrutiny,
* that is not a signal to soften the reason; it is a signal to go back and solve the
* underlying type-system problem properly. An unconvincing justification is rework,
* not a free pass.
*
* `blindCast` is the auditable form of `as Foo` / `as unknown as Foo`: it bypasses
* the compiler's checks (the input type is `unknown`, the output type is whatever the
* caller asks for), but it forces the unsafety to be named at the call site instead of
* smuggled in via a bare `as`. The `Reason` type parameter exists only at compile
* time — it is not present in the emitted JavaScript — but it is grep-able and
* visible to future readers.
*
* @example
* ```typescript
* const stringValue = blindCast<
*   string,
*   "JSON.parse returns `unknown`; this field is documented to be a string in the API contract"
* >(parsed[key]);
* ```
*
* @typeParam TargetType - The type the caller is asserting the input has.
* @typeParam _Reason - A string literal describing why bypassing the type system is necessary here.
*                     Only meaningful at compile time. The reviewer evaluates whether it justifies the unsafety.
*/ function blindCast(input) {
    return input;
}
//#endregion
//#region ../../../1-framework/0-foundation/utils/dist/defined-BQWA85QH.mjs
/**
* Returns an object with the key/value if value is defined, otherwise an empty object.
*
* Use with spread to conditionally include optional properties while satisfying
* exactOptionalPropertyTypes. This is explicit about which properties are optional
* and won't inadvertently strip other undefined values.
*
* @example
* ```typescript
* // Instead of:
* const obj = {
*   required: 'value',
*   ...(optional ? { optional } : {}),
* };
*
* // Use:
* const obj = {
*   required: 'value',
*   ...ifDefined('optional', optional),
* };
* ```
*/ function ifDefined(key, value) {
    return value !== void 0 ? blindCast({
        [key]: value
    }) : {};
}
//#endregion
//#region src/runtime/builder-base.ts
var BuilderBase = class {
    ctx;
    constructor(ctx){
        this.ctx = ctx;
    }
    _gate(required, methodName, method) {
        return (...args)=>{
            assertCapability(this.ctx, required, methodName);
            return method(...args);
        };
    }
};
/**
* Derive the canonical {@link CodecRef} for a `(table, column)` from the builder context's storage. Returns `undefined` when the builder context has no storage attached or when the column is unknown to the contract.
*/ function codecRefFor(ctx, namespaceId, tableName, columnName) {
    if (!ctx.storage) return void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$codec$2d$descriptor$2d$registry$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codecRefForStorageColumn"])(ctx.storage, namespaceId, tableName, columnName);
}
function emptyState(from, scope) {
    return {
        from,
        joins: [],
        projections: [],
        where: [],
        orderBy: [],
        groupBy: [],
        having: void 0,
        limit: void 0,
        offset: void 0,
        distinct: void 0,
        distinctOn: void 0,
        scope,
        rowFields: {},
        annotations: /* @__PURE__ */ new Map()
    };
}
function cloneState(state, overrides) {
    return {
        ...state,
        ...overrides
    };
}
function combineWhereExprs(exprs) {
    if (exprs.length === 0) return void 0;
    if (exprs.length === 1) return exprs[0];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__AndExpr$3e$__["AndExpr"].of(exprs);
}
function buildSelectAst(state) {
    const where = combineWhereExprs(state.where);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__j__as__SelectAst$3e$__["SelectAst"]({
        from: state.from,
        joins: state.joins.length > 0 ? state.joins : void 0,
        projection: state.projections,
        where,
        orderBy: state.orderBy.length > 0 ? state.orderBy : void 0,
        distinct: state.distinct,
        distinctOn: state.distinctOn && state.distinctOn.length > 0 ? state.distinctOn : void 0,
        groupBy: state.groupBy.length > 0 ? state.groupBy : void 0,
        having: state.having,
        limit: state.limit,
        offset: state.offset,
        selectAllIntent: void 0
    });
}
function buildQueryPlan(ast, ctx, annotations) {
    const paramValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$util$2d$DQQgv2j1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__collectOrderedParamRefs$3e$__["collectOrderedParamRefs"])(ast).map((r)=>r.kind === "param-ref" ? r.value : void 0);
    const annotationsRecord = annotations !== void 0 && annotations.size > 0 ? Object.freeze(Object.fromEntries(annotations)) : void 0;
    const meta = Object.freeze({
        target: ctx.target,
        storageHash: ctx.storageHash,
        lane: "dsl",
        ...ifDefined("annotations", annotationsRecord)
    });
    return Object.freeze({
        ast,
        params: paramValues,
        meta
    });
}
function buildPlan(state, ctx) {
    return buildQueryPlan(buildSelectAst(state), ctx, state.annotations);
}
function tableToScope(alias, table, options) {
    const storage = options?.storage;
    const lookupName = options?.tableName;
    const namespaceId = options?.namespaceId;
    const fields = {};
    for (const [colName, col] of Object.entries(table.columns)){
        const codec = storage && lookupName && namespaceId !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$codec$2d$descriptor$2d$registry$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["codecRefForStorageColumn"])(storage, namespaceId, lookupName, colName) : void 0;
        fields[colName] = {
            codecId: col.codecId,
            nullable: col.nullable,
            ...col.many ? {
                many: true
            } : {},
            ...codec !== void 0 ? {
                codec
            } : {}
        };
    }
    return {
        topLevel: {
            ...fields
        },
        namespaces: {
            [alias]: fields
        }
    };
}
function mergeScopes(a, b) {
    const topLevel = {};
    for (const [k, v] of Object.entries(a.topLevel))if (!(k in b.topLevel)) topLevel[k] = v;
    for (const [k, v] of Object.entries(b.topLevel))if (!(k in a.topLevel)) topLevel[k] = v;
    return {
        topLevel,
        namespaces: {
            ...a.namespaces,
            ...b.namespaces
        }
    };
}
function nullableScope(scope) {
    const mkNullable = (tbl)=>{
        const result = {};
        for (const [k, v] of Object.entries(tbl))result[k] = {
            codecId: v.codecId,
            nullable: true,
            ...v.codec !== void 0 ? {
                codec: v.codec
            } : {}
        };
        return result;
    };
    const namespaces = {};
    for (const [k, v] of Object.entries(scope.namespaces))namespaces[k] = mkNullable(v);
    return {
        topLevel: mkNullable(scope.topLevel),
        namespaces
    };
}
function orderByScopeOf(scope, rowFields) {
    return {
        topLevel: {
            ...scope.topLevel,
            ...rowFields
        },
        namespaces: scope.namespaces
    };
}
function assertCapability(ctx, required, methodName) {
    for (const [ns, keys] of Object.entries(required))for (const key of Object.keys(keys))if (!ctx.capabilities[ns]?.[key]) throw new Error(`${methodName}() requires capability ${ns}.${key}`);
}
function resolveSelectArgs(args, scope, ctx) {
    const projections = [];
    const newRowFields = {};
    if (args.length === 0) return {
        projections,
        newRowFields
    };
    if (typeof args[0] === "string" && (args.length === 1 || typeof args[1] !== "function")) {
        for (const colName of args){
            const field = scope.topLevel[colName];
            if (!field) throw new Error(`Column "${colName}" not found in scope`);
            projections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__O__as__ProjectionItem$3e$__["ProjectionItem"].of(colName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__IdentifierRef$3e$__["IdentifierRef"].of(colName), field.codec));
            newRowFields[colName] = field;
        }
        return {
            projections,
            newRowFields
        };
    }
    if (typeof args[0] === "string" && typeof args[1] === "function") {
        const alias = args[0];
        const exprFn = args[1];
        const fns = createAggregateFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        const result = exprFn(createFieldProxy(scope), fns);
        const field = result.returnType;
        projections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__O__as__ProjectionItem$3e$__["ProjectionItem"].of(alias, result.buildAst(), field.codec));
        newRowFields[alias] = field;
        return {
            projections,
            newRowFields
        };
    }
    if (typeof args[0] === "function") {
        const callbackFn = args[0];
        const fns = createAggregateFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        const record = callbackFn(createFieldProxy(scope), fns);
        for (const [key, expr] of Object.entries(record)){
            const field = expr.returnType;
            projections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__O__as__ProjectionItem$3e$__["ProjectionItem"].of(key, expr.buildAst(), field.codec));
            newRowFields[key] = field;
        }
        return {
            projections,
            newRowFields
        };
    }
    throw new Error("Invalid .select() arguments");
}
function resolveOrderBy(arg, options, scope, rowFields, ctx, useAggregateFns) {
    const dir = options?.direction ?? "asc";
    if (typeof arg === "string") {
        if (!(arg in orderByScopeOf(scope, rowFields).topLevel)) throw new Error(`Column "${arg}" not found in scope for orderBy`);
        const expr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__IdentifierRef$3e$__["IdentifierRef"].of(arg);
        return dir === "asc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__OrderByItem$3e$__["OrderByItem"].asc(expr) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__OrderByItem$3e$__["OrderByItem"].desc(expr);
    }
    if (typeof arg === "function") {
        const combined = orderByScopeOf(scope, rowFields);
        const fns = useAggregateFns ? createAggregateFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer) : createFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        const result = arg(createFieldProxy(combined), fns);
        return dir === "asc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__OrderByItem$3e$__["OrderByItem"].asc(result.buildAst()) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__OrderByItem$3e$__["OrderByItem"].desc(result.buildAst());
    }
    throw new Error("Invalid orderBy argument");
}
function resolveGroupBy(args, scope, rowFields, ctx) {
    if (typeof args[0] === "string") {
        const combined = orderByScopeOf(scope, rowFields);
        return args.map((colName)=>{
            if (!(colName in combined.topLevel)) throw new Error(`Column "${colName}" not found in scope for groupBy`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__IdentifierRef$3e$__["IdentifierRef"].of(colName);
        });
    }
    if (typeof args[0] === "function") {
        const combined = orderByScopeOf(scope, rowFields);
        const fns = createFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        return [
            args[0](createFieldProxy(combined), fns).buildAst()
        ];
    }
    throw new Error("Invalid groupBy arguments");
}
function resolveDistinctOn(args, scope, rowFields, ctx) {
    if (args.length === 1 && typeof args[0] === "function") {
        const combined = orderByScopeOf(scope, rowFields);
        const fns = createFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        return [
            args[0](createFieldProxy(combined), fns).buildAst()
        ];
    }
    const combined = orderByScopeOf(scope, rowFields);
    return args.map((colName)=>{
        if (!(colName in combined.topLevel)) throw new Error(`Column "${colName}" not found in scope for distinctOn`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__IdentifierRef$3e$__["IdentifierRef"].of(colName);
    });
}
//#endregion
//#region src/runtime/query-impl.ts
var QueryBase = class extends BuilderBase {
    state;
    constructor(state, ctx){
        super(ctx);
        this.state = state;
    }
    distinctOn = this._gate({
        postgres: {
            distinctOn: true
        }
    }, "distinctOn", (...args)=>{
        const exprs = resolveDistinctOn(args, this.state.scope, this.state.rowFields, this.ctx);
        return this.clone(cloneState(this.state, {
            distinctOn: [
                ...this.state.distinctOn ?? [],
                ...exprs
            ]
        }));
    });
    limit(count) {
        const limit = typeof count === "number" ? count : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toExpr"])(count);
        return this.clone(cloneState(this.state, {
            limit
        }));
    }
    offset(count) {
        const offset = typeof count === "number" ? count : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$exports$2f$expression$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toExpr"])(count);
        return this.clone(cloneState(this.state, {
            offset
        }));
    }
    distinct() {
        return this.clone(cloneState(this.state, {
            distinct: true
        }));
    }
    /**
	* Attach one or more annotations to this query plan.
	*
	* Read builders (`SelectQueryImpl`, `GroupedQueryImpl`) accept
	* annotations whose declared `applicableTo` includes `'read'`.
	* The type-level `As & ValidAnnotations<'read', As>` gate rejects
	* write-only annotations at the call site; the runtime check below
	* fails closed for callers that bypass the type gate (cast / `any`).
	*
	* Multiple `.annotate(...)` calls compose; duplicate namespaces use
	* last-write-wins. The accumulated annotations are merged into
	* `plan.meta.annotations` at `.build()` time, alongside any framework-
	* internal metadata under reserved namespaces (e.g. `codecs`).
	*
	* Chainable in any position (before / after `.where`, `.select`,
	* `.limit`, etc.); the returned builder has the same row type.
	*/ annotate(...annotations) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertAnnotationsApplicable"])(annotations, "read", "sql-dsl.annotate");
        const next = new Map(this.state.annotations);
        for (const annotation of annotations)next.set(annotation.namespace, annotation);
        return this.clone(cloneState(this.state, {
            annotations: next
        }));
    }
    groupBy(...args) {
        const exprs = resolveGroupBy(args, this.state.scope, this.state.rowFields, this.ctx);
        return new GroupedQueryImpl(cloneState(this.state, {
            groupBy: [
                ...this.state.groupBy,
                ...exprs
            ]
        }), this.ctx);
    }
    as(alias) {
        const ast = buildSelectAst(this.state);
        const derivedSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__DerivedTableSource$3e$__["DerivedTableSource"].as(alias, ast);
        const scope = {
            topLevel: this.state.rowFields,
            namespaces: {
                [alias]: this.state.rowFields
            }
        };
        return {
            getJoinOuterScope: ()=>scope,
            buildAst: ()=>derivedSource
        };
    }
    getRowFields() {
        return this.state.rowFields;
    }
    buildAst() {
        return buildSelectAst(this.state);
    }
    build() {
        return buildPlan(this.state, this.ctx);
    }
};
var SelectQueryImpl = class SelectQueryImpl extends QueryBase {
    clone(state) {
        return new SelectQueryImpl(state, this.ctx);
    }
    select(...args) {
        const { projections, newRowFields } = resolveSelectArgs(args, this.state.scope, this.ctx);
        return new SelectQueryImpl(cloneState(this.state, {
            projections: [
                ...this.state.projections,
                ...projections
            ],
            rowFields: {
                ...this.state.rowFields,
                ...newRowFields
            }
        }), this.ctx);
    }
    where(expr) {
        const result = expr(createFieldProxy(this.state.scope), createFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer));
        return new SelectQueryImpl(cloneState(this.state, {
            where: [
                ...this.state.where,
                result.buildAst()
            ]
        }), this.ctx);
    }
    orderBy(arg, options) {
        const item = resolveOrderBy(arg, options, this.state.scope, this.state.rowFields, this.ctx, false);
        return this.clone(cloneState(this.state, {
            orderBy: [
                ...this.state.orderBy,
                item
            ]
        }));
    }
};
var GroupedQueryImpl = class GroupedQueryImpl extends QueryBase {
    clone(state) {
        return new GroupedQueryImpl(state, this.ctx);
    }
    having(expr) {
        const combined = orderByScopeOf(this.state.scope, this.state.rowFields);
        const fns = createAggregateFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer);
        const result = expr(createFieldProxy(combined), fns);
        return new GroupedQueryImpl(cloneState(this.state, {
            having: result.buildAst()
        }), this.ctx);
    }
    orderBy(arg, options) {
        const item = resolveOrderBy(arg, options, this.state.scope, this.state.rowFields, this.ctx, true);
        return this.clone(cloneState(this.state, {
            orderBy: [
                ...this.state.orderBy,
                item
            ]
        }));
    }
};
//#endregion
//#region src/runtime/joined-tables-impl.ts
var JoinedTablesImpl = class JoinedTablesImpl extends BuilderBase {
    #state;
    constructor(state, ctx){
        super(ctx);
        this.#state = state;
    }
    lateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "lateralJoin", (alias, builder)=>{
        const { derivedSource, lateralScope } = this.#buildLateral(alias, builder);
        const resultScope = mergeScopes(this.#state.scope, lateralScope);
        return this.#addLateralJoin("inner", resultScope, derivedSource);
    });
    outerLateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "outerLateralJoin", (alias, builder)=>{
        const { derivedSource, lateralScope } = this.#buildLateral(alias, builder);
        const resultScope = mergeScopes(this.#state.scope, nullableScope(lateralScope));
        return this.#addLateralJoin("left", resultScope, derivedSource);
    });
    select(...args) {
        const { projections, newRowFields } = resolveSelectArgs(args, this.#state.scope, this.ctx);
        return new SelectQueryImpl(cloneState(this.#state, {
            projections: [
                ...this.#state.projections,
                ...projections
            ],
            rowFields: {
                ...this.#state.rowFields,
                ...newRowFields
            }
        }), this.ctx);
    }
    innerJoin(other, on) {
        const targetScope = mergeScopes(this.#state.scope, other.getJoinOuterScope());
        return this.#addJoin(other, "inner", targetScope, on);
    }
    outerLeftJoin(other, on) {
        const targetScope = mergeScopes(this.#state.scope, nullableScope(other.getJoinOuterScope()));
        return this.#addJoin(other, "left", targetScope, on);
    }
    outerRightJoin(other, on) {
        const targetScope = mergeScopes(nullableScope(this.#state.scope), other.getJoinOuterScope());
        return this.#addJoin(other, "right", targetScope, on);
    }
    outerFullJoin(other, on) {
        const targetScope = mergeScopes(nullableScope(this.#state.scope), nullableScope(other.getJoinOuterScope()));
        return this.#addJoin(other, "full", targetScope, on);
    }
    #addJoin(other, joinType, resultScope, onExpr) {
        const onResult = onExpr(createFieldProxy(mergeScopes(this.#state.scope, other.getJoinOuterScope())), createFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer));
        const joinAst = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__JoinAst$3e$__["JoinAst"](joinType, other.buildAst(), onResult.buildAst());
        return new JoinedTablesImpl(cloneState(this.#state, {
            joins: [
                ...this.#state.joins,
                joinAst
            ],
            scope: resultScope
        }), this.ctx);
    }
    #buildLateral(alias, builderFn) {
        const subquery = builderFn({
            from: (other)=>{
                const otherScope = other.getJoinOuterScope();
                const parentMerged = mergeScopes(this.#state.scope, otherScope);
                return new SelectQueryImpl(emptyState(other.buildAst(), parentMerged), this.ctx);
            }
        });
        const subqueryAst = subquery.buildAst();
        const derivedSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__DerivedTableSource$3e$__["DerivedTableSource"].as(alias, subqueryAst);
        const subqueryRowFields = subquery.getRowFields();
        return {
            derivedSource,
            lateralScope: {
                topLevel: subqueryRowFields,
                namespaces: {
                    [alias]: subqueryRowFields
                }
            }
        };
    }
    #addLateralJoin(joinType, resultScope, derivedSource) {
        const joinAst = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__JoinAst$3e$__["JoinAst"](joinType, derivedSource, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__AndExpr$3e$__["AndExpr"].of([]), true);
        return new JoinedTablesImpl(cloneState(this.#state, {
            joins: [
                ...this.#state.joins,
                joinAst
            ],
            scope: resultScope
        }), this.ctx);
    }
};
//#endregion
//#region src/runtime/mutation-impl.ts
/**
* Validates and merges a variadic annotations call into a builder's
* accumulated user-annotations map. Used by `.annotate(...)` on each of
* the three mutation builders (`InsertQueryImpl`, `UpdateQueryImpl`,
* `DeleteQueryImpl`); the read builders share the same logic via
* `QueryBase.annotate()` in `./query-impl.ts`.
*
* Runs `assertAnnotationsApplicable` at call time (not at `.build()`) so
* inapplicable annotations forced through casts surface immediately
* rather than at plan-construction time.
*/ function mergeWriteAnnotations(current, annotations) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["assertAnnotationsApplicable"])(annotations, "write", "sql-dsl.annotate");
    const next = new Map(current);
    for (const annotation of annotations)next.set(annotation.namespace, annotation);
    return next;
}
function buildParamValues(values, namespaceId, table, tableName, op, ctx) {
    const params = {};
    for (const [col, value] of Object.entries(values)){
        const codec = table.columns[col] ? codecRefFor(ctx, namespaceId, tableName, col) : void 0;
        params[col] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__E__as__ParamRef$3e$__["ParamRef"].of(value, codec ? {
            codec
        } : void 0);
    }
    for (const def of ctx.applyMutationDefaults({
        op,
        namespace: namespaceId,
        table: tableName,
        values
    })){
        const codec = table.columns[def.column] ? codecRefFor(ctx, namespaceId, tableName, def.column) : void 0;
        params[def.column] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__E__as__ParamRef$3e$__["ParamRef"].of(def.value, codec ? {
            codec
        } : void 0);
    }
    return params;
}
function buildReturningProjections(tableName, columns, rowFields) {
    return columns.map((col)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__O__as__ProjectionItem$3e$__["ProjectionItem"].of(col, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__ColumnRef$3e$__["ColumnRef"].of(tableName, col), rowFields[col]?.codec));
}
function evaluateWhere(whereCallback, scope, queryOperationTypes, rawCodecInferer) {
    return whereCallback(createFieldProxy(scope), createFunctions(queryOperationTypes, rawCodecInferer)).buildAst();
}
function evaluateUpdateCallback(callback, scope, queryOperationTypes, rawCodecInferer) {
    const result = callback(createFieldProxy(scope), createFunctions(queryOperationTypes, rawCodecInferer));
    const set = {};
    for (const [col, expr] of Object.entries(result))if (expr !== void 0) set[col] = expr.buildAst();
    return set;
}
function buildSetExpressions(exprs, namespaceId, table, tableName, op, ctx) {
    const set = {
        ...exprs
    };
    for (const def of ctx.applyMutationDefaults({
        op,
        namespace: namespaceId,
        table: tableName,
        values: exprs
    }))if (!(def.column in set)) {
        const codec = table.columns[def.column] ? codecRefFor(ctx, namespaceId, tableName, def.column) : void 0;
        set[def.column] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__E__as__ParamRef$3e$__["ParamRef"].of(def.value, ifDefined("codec", codec));
    }
    return set;
}
var InsertQueryImpl = class InsertQueryImpl extends BuilderBase {
    #tableSource;
    #tableName;
    #namespaceId;
    #table;
    #scope;
    #rows;
    #returningColumns;
    #rowFields;
    #annotations;
    constructor(tableSource, namespaceId, table, scope, rows, ctx, returningColumns = [], rowFields = {}, annotations = /* @__PURE__ */ new Map()){
        super(ctx);
        this.#tableSource = tableSource;
        this.#tableName = tableSource.name;
        this.#namespaceId = namespaceId;
        this.#table = table;
        this.#scope = scope;
        this.#rows = rows;
        this.#returningColumns = returningColumns;
        this.#rowFields = rowFields;
        this.#annotations = annotations;
    }
    returning = this._gate({
        sql: {
            returning: true
        }
    }, "returning", (...columns)=>{
        const newRowFields = {};
        for (const col of columns){
            const field = this.#scope.topLevel[col];
            if (!field) throw new Error(`Column "${col}" not found in scope`);
            newRowFields[col] = field;
        }
        return new InsertQueryImpl(this.#tableSource, this.#namespaceId, this.#table, this.#scope, this.#rows, this.ctx, columns, newRowFields, this.#annotations);
    });
    /**
	* Attach one or more write-typed annotations to this query plan.
	* The type-level `As & ValidAnnotations<'write', As>` gate rejects
	* read-only annotations at the call site; the runtime check fails
	* closed for callers that bypass the type gate. See `QueryBase.annotate`
	* in `./query-impl.ts` for the read-builder counterpart.
	*/ annotate(...annotations) {
        return new InsertQueryImpl(this.#tableSource, this.#namespaceId, this.#table, this.#scope, this.#rows, this.ctx, this.#returningColumns, this.#rowFields, mergeWriteAnnotations(this.#annotations, annotations));
    }
    build() {
        if (this.#rows.length === 0) throw new Error("insert() called with an empty row array — at least one row is required");
        const paramRows = this.#rows.map((rowValues)=>buildParamValues(rowValues, this.#namespaceId, this.#table, this.#tableName, "create", this.ctx));
        let ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__InsertAst$3e$__["InsertAst"].into(this.#tableSource).withRows(paramRows);
        if (this.#returningColumns.length > 0) ast = ast.withReturning(buildReturningProjections(this.#tableName, this.#returningColumns, this.#rowFields));
        return buildQueryPlan(ast, this.ctx, this.#annotations);
    }
};
var UpdateQueryImpl = class UpdateQueryImpl extends BuilderBase {
    #tableSource;
    #tableName;
    #scope;
    #setExpressions;
    #whereExprs;
    #returningColumns;
    #rowFields;
    #annotations;
    constructor(tableSource, scope, setExpressions, ctx, whereExprs = [], returningColumns = [], rowFields = {}, annotations = /* @__PURE__ */ new Map()){
        super(ctx);
        this.#tableSource = tableSource;
        this.#tableName = tableSource.name;
        this.#scope = scope;
        this.#setExpressions = setExpressions;
        this.#whereExprs = whereExprs;
        this.#returningColumns = returningColumns;
        this.#rowFields = rowFields;
        this.#annotations = annotations;
    }
    where(expr) {
        const result = expr(createFieldProxy(this.#scope), createFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer));
        return new UpdateQueryImpl(this.#tableSource, this.#scope, this.#setExpressions, this.ctx, [
            ...this.#whereExprs,
            result.buildAst()
        ], this.#returningColumns, this.#rowFields, this.#annotations);
    }
    returning = this._gate({
        sql: {
            returning: true
        }
    }, "returning", (...columns)=>{
        const newRowFields = {};
        for (const col of columns){
            const field = this.#scope.topLevel[col];
            if (!field) throw new Error(`Column "${col}" not found in scope`);
            newRowFields[col] = field;
        }
        return new UpdateQueryImpl(this.#tableSource, this.#scope, this.#setExpressions, this.ctx, this.#whereExprs, columns, newRowFields, this.#annotations);
    });
    /**
	* Attach one or more write-typed annotations to this query plan.
	* See `InsertQueryImpl.annotate` for semantics; the runtime check
	* fails closed for callers that bypass the type-level gate.
	*/ annotate(...annotations) {
        return new UpdateQueryImpl(this.#tableSource, this.#scope, this.#setExpressions, this.ctx, this.#whereExprs, this.#returningColumns, this.#rowFields, mergeWriteAnnotations(this.#annotations, annotations));
    }
    build() {
        let ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__P__as__UpdateAst$3e$__["UpdateAst"].table(this.#tableSource).withSet(this.#setExpressions).withWhere(combineWhereExprs(this.#whereExprs));
        if (this.#returningColumns.length > 0) ast = ast.withReturning(buildReturningProjections(this.#tableName, this.#returningColumns, this.#rowFields));
        return buildQueryPlan(ast, this.ctx, this.#annotations);
    }
};
var DeleteQueryImpl = class DeleteQueryImpl extends BuilderBase {
    #tableSource;
    #tableName;
    #scope;
    #whereCallbacks;
    #returningColumns;
    #rowFields;
    #annotations;
    constructor(tableSource, scope, ctx, whereCallbacks = [], returningColumns = [], rowFields = {}, annotations = /* @__PURE__ */ new Map()){
        super(ctx);
        this.#tableSource = tableSource;
        this.#tableName = tableSource.name;
        this.#scope = scope;
        this.#whereCallbacks = whereCallbacks;
        this.#returningColumns = returningColumns;
        this.#rowFields = rowFields;
        this.#annotations = annotations;
    }
    where(expr) {
        return new DeleteQueryImpl(this.#tableSource, this.#scope, this.ctx, [
            ...this.#whereCallbacks,
            expr
        ], this.#returningColumns, this.#rowFields, this.#annotations);
    }
    returning = this._gate({
        sql: {
            returning: true
        }
    }, "returning", (...columns)=>{
        const newRowFields = {};
        for (const col of columns){
            const field = this.#scope.topLevel[col];
            if (!field) throw new Error(`Column "${col}" not found in scope`);
            newRowFields[col] = field;
        }
        return new DeleteQueryImpl(this.#tableSource, this.#scope, this.ctx, this.#whereCallbacks, columns, newRowFields, this.#annotations);
    });
    /**
	* Attach one or more write-typed annotations to this query plan.
	* See `InsertQueryImpl.annotate` for semantics.
	*/ annotate(...annotations) {
        return new DeleteQueryImpl(this.#tableSource, this.#scope, this.ctx, this.#whereCallbacks, this.#returningColumns, this.#rowFields, mergeWriteAnnotations(this.#annotations, annotations));
    }
    build() {
        const whereExpr = combineWhereExprs(this.#whereCallbacks.map((cb)=>evaluateWhere(cb, this.#scope, this.ctx.queryOperationTypes, this.ctx.rawCodecInferer)));
        let ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__DeleteAst$3e$__["DeleteAst"].from(this.#tableSource).withWhere(whereExpr);
        if (this.#returningColumns.length > 0) ast = ast.withReturning(buildReturningProjections(this.#tableName, this.#returningColumns, this.#rowFields));
        return buildQueryPlan(ast, this.ctx, this.#annotations);
    }
};
//#endregion
//#region src/runtime/table-source-for-proxy.ts
function tableSourceForProxy(tableName, alias, namespaceId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$relational$2d$core$2f$dist$2f$types$2d$DtzFztRV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__N__as__TableSource$3e$__["TableSource"].named(tableName, alias !== tableName ? alias : void 0, namespaceId);
}
//#endregion
//#region src/runtime/table-proxy-impl.ts
var TableProxyImpl = class TableProxyImpl extends BuilderBase {
    #tableName;
    #table;
    #namespaceId;
    #fromSource;
    #scope;
    constructor(tableName, table, alias, ctx, namespaceId){
        super(ctx);
        this.#tableName = tableName;
        this.#table = table;
        this.#namespaceId = namespaceId;
        this.#scope = tableToScope(alias, table, {
            storage: ctx.storage,
            tableName,
            namespaceId
        });
        this.#fromSource = tableSourceForProxy(tableName, alias, namespaceId);
    }
    lateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "lateralJoin", (alias, builder)=>{
        return this.#toJoined().lateralJoin(alias, builder);
    });
    outerLateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "outerLateralJoin", (alias, builder)=>{
        return this.#toJoined().outerLateralJoin(alias, builder);
    });
    getJoinOuterScope() {
        return this.#scope;
    }
    buildAst() {
        return this.#fromSource;
    }
    as(newAlias) {
        return new TableProxyImpl(this.#tableName, this.#table, newAlias, this.ctx, this.#namespaceId);
    }
    select(...args) {
        return new SelectQueryImpl(emptyState(this.#fromSource, this.#scope), this.ctx).select(...args);
    }
    innerJoin(other, on) {
        return this.#toJoined().innerJoin(other, on);
    }
    outerLeftJoin(other, on) {
        return this.#toJoined().outerLeftJoin(other, on);
    }
    outerRightJoin(other, on) {
        return this.#toJoined().outerRightJoin(other, on);
    }
    outerFullJoin(other, on) {
        return this.#toJoined().outerFullJoin(other, on);
    }
    insert(rows) {
        return new InsertQueryImpl(this.#fromSource, this.#namespaceId, this.#table, this.#scope, rows, this.ctx);
    }
    update(setOrCallback) {
        if (typeof setOrCallback === "function") {
            const setExpressions = buildSetExpressions(evaluateUpdateCallback(setOrCallback, this.#scope, this.ctx.queryOperationTypes, this.ctx.rawCodecInferer), this.#namespaceId, this.#table, this.#tableName, "update", this.ctx);
            return new UpdateQueryImpl(this.#fromSource, this.#scope, setExpressions, this.ctx);
        }
        const setExpressions = buildParamValues(setOrCallback, this.#namespaceId, this.#table, this.#tableName, "update", this.ctx);
        return new UpdateQueryImpl(this.#fromSource, this.#scope, setExpressions, this.ctx);
    }
    delete() {
        return new DeleteQueryImpl(this.#fromSource, this.#scope, this.ctx);
    }
    #toJoined() {
        return new JoinedTablesImpl(emptyState(this.#fromSource, this.#scope), this.ctx);
    }
};
//#endregion
//#region src/runtime/sql.ts
function sql(options) {
    const { context, rawCodecInferer } = options;
    const ctx = {
        capabilities: context.contract.capabilities,
        queryOperationTypes: context.queryOperations.entries(),
        target: context.contract.target ?? "unknown",
        storageHash: context.contract.storage.storageHash ?? "unknown",
        storage: context.contract.storage,
        applyMutationDefaults: (options)=>context.applyMutationDefaults(options),
        rawCodecInferer
    };
    const { storage } = context.contract;
    return new Proxy({}, {
        get (_target, prop) {
            if (typeof prop !== "string") return;
            if (!Object.hasOwn(storage.namespaces, prop)) return;
            const namespaceId = prop;
            return new Proxy({}, {
                get (_facetTarget, tableName) {
                    if (typeof tableName !== "string") return;
                    const table = resolveTableInNamespace(storage, namespaceId, tableName);
                    if (table) return new TableProxyImpl(tableName, table, tableName, ctx, namespaceId);
                }
            });
        }
    });
}
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/canonicalization-hooks.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlContractCanonicalizationHooks",
    ()=>sqlContractCanonicalizationHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__createPreserveEmptyPredicate$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript) <export t as createPreserveEmptyPredicate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$hashing$2d$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/hashing-utils.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__matchesPathPattern$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/canonicalization-path-match-CNgHuwM_.mjs [app-rsc] (ecmascript) <export n as matchesPathPattern>");
;
//#region src/canonicalization-hooks.ts
const preserveEmptyPatterns = [
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table"
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*"
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*",
        [
            "uniques",
            "indexes",
            "foreignKeys"
        ]
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*",
        "columns",
        "*",
        "default",
        "value"
    ]
];
const columnDefaultValuePrefix = [
    "storage",
    "namespaces",
    "*",
    "entries",
    "table",
    "*",
    "columns",
    "*",
    "default",
    "value"
];
const isColumnDefaultValuePath = (path)=>path.length >= columnDefaultValuePrefix.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__matchesPathPattern$3e$__["matchesPathPattern"])(path.slice(0, columnDefaultValuePrefix.length), columnDefaultValuePrefix);
const sortTargets = [
    {
        path: [
            "namespaces",
            "*",
            "entries",
            "table",
            "*"
        ],
        arrayKeys: [
            "indexes",
            "uniques"
        ]
    }
];
const matchesPreserveEmptyPattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__createPreserveEmptyPredicate$3e$__["createPreserveEmptyPredicate"])(preserveEmptyPatterns);
const shouldPreserveEmpty = (path)=>isColumnDefaultValuePath(path) || matchesPreserveEmptyPattern(path);
const sqlContractCanonicalizationHooks = {
    shouldPreserveEmpty,
    sortStorage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$hashing$2d$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStorageSort"])(sortTargets)
};
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/contract-view.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SQL_BUILTIN_KINDS",
    ()=>SQL_BUILTIN_KINDS,
    "buildSqlSchemaQualifiedView",
    ()=>buildSqlSchemaQualifiedView,
    "buildSqlSingleNamespaceView",
    ()=>buildSqlSingleNamespaceView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
;
//#region src/contract-view.ts
/**
* The SQL family's statically-named built-in entity kinds. `table` and
* `valueSet` are promoted to top-level view accessors; pack-contributed kinds
* (e.g. `policy`) stay under `.entries`.
*/ const SQL_BUILTIN_KINDS = [
    "table",
    "valueSet"
];
/**
* Builds the single-namespace SQL view: unwraps the sole namespace's SQL
* built-in kinds (`table`, `valueSet`) to the root, attaches the namespace-keyed
* `namespace` map, and layers both over the deserialized contract. Targets with
* one default namespace (SQLite) call this directly; Postgres qualifies by
* schema.
*/ function buildSqlSingleNamespaceView(contract) {
    const rootAccessors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildSingleNamespaceView"])(contract.storage, SQL_BUILTIN_KINDS);
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildNamespacedEntities"])(contract.storage, SQL_BUILTIN_KINDS);
    return {
        ...contract,
        ...rootAccessors,
        namespace
    };
}
/**
* Builds the schema-qualified SQL view: attaches the namespace-keyed `namespace`
* map over the deserialized contract. Postgres uses this.
*/ function buildSqlSchemaQualifiedView(contract) {
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["buildNamespacedEntities"])(contract.storage, SQL_BUILTIN_KINDS);
    return {
        ...contract,
        namespace
    };
}
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/entity-kinds-CVg6HzG2.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>ColumnDefaultFunctionSchema,
    "c",
    ()=>ForeignKeyReferenceSchema,
    "d",
    ()=>IndexSchema,
    "f",
    ()=>ReferentialActionSchema,
    "i",
    ()=>CheckConstraintSchema,
    "l",
    ()=>ForeignKeySchema,
    "m",
    ()=>StorageValueSetSchema,
    "n",
    ()=>tableEntityKind,
    "o",
    ()=>ColumnDefaultLiteralSchema,
    "p",
    ()=>StorageTableSchema,
    "r",
    ()=>valueSetEntityKind,
    "s",
    ()=>ColumnDefaultSchema,
    "t",
    ()=>composeSqlEntityKinds,
    "u",
    ()=>ForeignKeySourceSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/storage-table-DBpYBmty.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$value$2d$set$2d$3BKuha5q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/storage-value-set-3BKuha5q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
;
;
;
//#region src/ir/storage-entry-schemas.ts
const literalKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'literal'");
const functionKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'function'");
const ControlPolicySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'managed' | 'tolerated' | 'external' | 'observed'");
const ColumnDefaultLiteralSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    kind: literalKindSchema,
    value: "string | number | boolean | null | unknown[] | Record<string, unknown>"
});
const ColumnDefaultFunctionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    kind: functionKindSchema,
    expression: "string"
});
const ColumnDefaultSchema = ColumnDefaultLiteralSchema.or(ColumnDefaultFunctionSchema);
const StorageValueSetRefSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    plane: "'storage'",
    namespaceId: "string",
    entityKind: "'valueSet'",
    entityName: "string",
    "spaceId?": "string"
});
const StorageColumnSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    nativeType: "string",
    codecId: "string",
    nullable: "boolean",
    "many?": "boolean",
    "typeParams?": "Record<string, unknown>",
    "typeRef?": "string",
    "default?": ColumnDefaultSchema,
    "control?": ControlPolicySchema,
    "valueSet?": StorageValueSetRefSchema
}).narrow((col, ctx)=>{
    if (col.typeParams !== void 0 && col.typeRef !== void 0) return ctx.mustBe("a column with either typeParams or typeRef, not both");
    return true;
});
/**
* Storage value-set entry under `storage.namespaces[id].entries.valueSet[name]`.
* Carries a `kind: 'valueSet'` discriminator (enumerable, survives JSON) and an
* ordered `values` array of codec-encoded permitted values.
*/ const StorageValueSetSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    kind: "'valueSet'",
    values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string | number | boolean | null | unknown[] | Record<string, unknown>").array().readonly()
});
const PrimaryKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "name?": "string"
});
const UniqueConstraintSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "name?": "string"
});
const IndexSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "name?": "string",
    "type?": "string",
    "options?": "Record<string, unknown>"
});
const ForeignKeyReferenceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    namespaceId: "string",
    tableName: "string",
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "spaceId?": "string"
});
const ForeignKeySourceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    namespaceId: "string",
    tableName: "string",
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly()
});
const ReferentialActionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type("'noAction' | 'restrict' | 'cascade' | 'setNull' | 'setDefault'");
const ForeignKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    source: ForeignKeySourceSchema,
    target: ForeignKeyReferenceSchema,
    "name?": "string",
    "onDelete?": ReferentialActionSchema,
    "onUpdate?": ReferentialActionSchema
});
const CheckConstraintSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    name: "string",
    column: "string",
    valueSet: StorageValueSetRefSchema
});
const StorageTableSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": StorageColumnSchema
    }),
    "primaryKey?": PrimaryKeySchema,
    uniques: UniqueConstraintSchema.array().readonly(),
    indexes: IndexSchema.array().readonly(),
    foreignKeys: ForeignKeySchema.array().readonly(),
    "control?": ControlPolicySchema,
    "checks?": CheckConstraintSchema.array().readonly()
});
//#endregion
//#region src/entity-kinds.ts
const tableEntityKind = {
    kind: "table",
    schema: StorageTableSchema,
    construct: (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"](input)
};
const valueSetEntityKind = {
    kind: "valueSet",
    schema: StorageValueSetSchema,
    construct: (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$value$2d$set$2d$3BKuha5q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"](input)
};
/**
* Assembles the `kind → descriptor` registry for SQL namespaces: the built-in
* `table` and `valueSet` kinds plus any target `packKinds`. This builds the
* lookup table — it does not touch contract data. `hydrateNamespaceEntities`
* later consumes this registry to turn a namespace's raw entries into IR
* instances, and `createSqlContractSchema` derives validation from the same
* registry. Throws on a duplicate kind.
*/ function composeSqlEntityKinds(packKinds = []) {
    const kinds = /* @__PURE__ */ new Map([
        [
            "table",
            tableEntityKind
        ],
        [
            "valueSet",
            valueSetEntityKind
        ]
    ]);
    for (const descriptor of packKinds){
        if (kinds.has(descriptor.kind)) throw new Error(`composeSqlEntityKinds: duplicate entity kind "${descriptor.kind}" — each kind may be registered only once`);
        kinds.set(descriptor.kind, descriptor);
    }
    return kinds;
}
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/entity-kinds-CVg6HzG2.mjs [app-rsc] (ecmascript) <export t as composeSqlEntityKinds>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeSqlEntityKinds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$entity$2d$kinds$2d$CVg6HzG2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$entity$2d$kinds$2d$CVg6HzG2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/entity-kinds-CVg6HzG2.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/referential-action-sql.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REFERENTIAL_ACTION_SQL",
    ()=>REFERENTIAL_ACTION_SQL
]);
//#region src/referential-action-sql.ts
/**
* Maps each `ReferentialAction` value to the SQL keyword used in ON DELETE /
* ON UPDATE clauses. Shared across the migration planner and adapter DDL
* renderers — single source of truth for the action → SQL mapping.
*/ const REFERENTIAL_ACTION_SQL = {
    noAction: "NO ACTION",
    restrict: "RESTRICT",
    cascade: "CASCADE",
    setNull: "SET NULL",
    setDefault: "SET DEFAULT"
};
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/resolve-storage-table.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveStorageTable",
    ()=>resolveStorageTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
;
//#region src/resolve-storage-table.ts
/**
* Resolve a bare storage table name to its namespace coordinate and table IR.
*
* When `namespaceId` is supplied, the table is resolved strictly within that
* namespace (no scan). When omitted, a bare name unique across namespaces
* resolves to its sole namespace; a bare name declared in more than one
* namespace throws a fail-fast diagnostic naming the candidate namespaces
* rather than silently selecting the first match.
*/ function resolveStorageTable(storage, tableName, namespaceId) {
    if (namespaceId !== void 0) {
        const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityAt"])(storage, {
            namespaceId,
            entityKind: "table",
            entityName: tableName
        });
        return table === void 0 ? void 0 : {
            namespaceId,
            table
        };
    }
    const matches = [];
    for (const candidateNamespaceId of Object.keys(storage.namespaces)){
        const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityAt"])(storage, {
            namespaceId: candidateNamespaceId,
            entityKind: "table",
            entityName: tableName
        });
        if (table !== void 0) matches.push({
            namespaceId: candidateNamespaceId,
            table
        });
    }
    if (matches.length > 1) {
        const candidates = matches.map((match)=>match.namespaceId).sort().join(", ");
        throw new Error(`Storage table "${tableName}" is ambiguous across namespaces [${candidates}]; qualify it with a namespace coordinate.`);
    }
    return matches[0];
}
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/storage-table-DBpYBmty.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>PrimaryKey,
    "c",
    ()=>CheckConstraint,
    "i",
    ()=>Index,
    "l",
    ()=>SqlNode,
    "n",
    ()=>UniqueConstraint,
    "o",
    ()=>ForeignKey,
    "r",
    ()=>StorageColumn,
    "s",
    ()=>ForeignKeyReference,
    "t",
    ()=>StorageTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__asNamespaceId$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/namespace-id-CUxYd4KL.mjs [app-rsc] (ecmascript) <export t as asNamespaceId>");
;
;
//#region src/ir/sql-node.ts
/**
* SQL family IR node base. Carries the family-level `kind` discriminator
* `'sql'` and inherits the framework's `freezeNode` affordance.
*
* Single family-level discriminator (not per-leaf) reflects the fact that
* SQL IR has no polymorphic dispatch today — verifiers and serializers
* walk by structural position (`storage.tables[name].columns[name]`),
* not by inspecting `kind`. The abstract bar for per-leaf discriminators
* isn't earned until a future polymorphic consumer arrives.
*
* `kind` is installed as a non-enumerable own property on every instance,
* which keeps three things clean simultaneously:
*
* - `JSON.stringify(node)` produces the canonical pre-lift JSON envelope
*   shape (no `kind` field), so emitted contract.json files and the
*   `validateSqlContractFully` arktype schemas stay unchanged.
* - Test assertions that use `toEqual({...})` against the pre-lift flat
*   shape continue to pass — only enumerable own properties are
*   compared.
* - Direct access (`node.kind`) and runtime narrowing
*   (`if (node.kind === 'sql')`) still work, so future polymorphic
*   dispatch can begin reading `kind` without a runtime change.
*
* Future per-leaf overrides land cleanly: a class that gains a
* polymorphic-dispatch consumer (e.g. an enum type instance walked
* alongside other types) overrides `kind` with its narrower literal
* at that leaf level. Per-leaf overrides will use enumerable kind
* (matching the Mongo per-class-discriminator precedent) because they
* encode dispatch-relevant information that callers need to see in
* JSON envelopes; the family-level `'sql'` is uniform across all SQL
* IR and carries no dispatch-relevant information.
*/ var SqlNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IRNodeBase"] {
    kind;
    constructor(){
        super();
        Object.defineProperty(this, "kind", {
            value: "sql",
            writable: false,
            enumerable: false,
            configurable: true
        });
    }
};
//#endregion
//#region src/ir/check-constraint.ts
/**
* SQL Contract IR node for a table-level check constraint that restricts
* a column to the permitted values of a value-set.
*
* The constraint is **structured** (names a column and a value-set
* reference), not a raw SQL expression. Each target renders its own DDL
* from the structured form, keeping the contract target-agnostic.
*
* Construction is idempotent: passing an existing `CheckConstraint`
* instance as input produces a new instance with identical fields.
* The constructor does not use `instanceof` for input discrimination —
* it reads plain named properties, which is sufficient since
* `CheckConstraintInput` is a structural type.
*/ var CheckConstraint = class extends SqlNode {
    name;
    column;
    valueSet;
    constructor(input){
        super();
        this.name = input.name;
        this.column = input.column;
        this.valueSet = input.valueSet;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/foreign-key-reference.ts
/**
* SQL Contract IR node for one side (source or target) of a foreign-key
* declaration. Carries the full coordinate: namespace, table, and columns.
*
* Cross-space discrimination is based on `spaceId` presence: absent means
* local (same contract-space); present means cross-space (the referenced
* table lives in the contract-space identified by `spaceId`).
*
* For local references `spaceId` is absent from JSON, keeping the serialized
* shape byte-identical to contracts authored before cross-space support was
* added. For cross-space references `spaceId` appears in JSON so round-trips
* are lossless.
*
* Use `UNBOUND_NAMESPACE_ID` from `@prisma-next/framework-components/ir`
* as the sentinel `namespaceId` for single-namespace (unbound) references.
*/ var ForeignKeyReference = class extends SqlNode {
    namespaceId;
    tableName;
    columns;
    constructor(input){
        super();
        this.namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$namespace$2d$id$2d$CUxYd4KL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__asNamespaceId$3e$__["asNamespaceId"])(input.namespaceId);
        this.tableName = input.tableName;
        this.columns = input.columns;
        if (input.spaceId !== void 0) this.spaceId = input.spaceId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/foreign-key.ts
/**
* SQL Contract IR node for a table-level foreign-key declaration — the
* referential constraint only (source, target, `onDelete`/`onUpdate`).
*
* A persisted `foreignKeys[]` entry always denotes a real constraint: whether
* to emit the constraint at all, and whether to back it with an index, are
* authoring-time decisions (PSL `@relation(index:)`, TS `fk({ constraint,
* index })`) resolved once at `contract emit` — a `constraint: false` FK
* simply has no entry here, and a backing index (if any) is its own discrete,
* named entry in the table's `indexes[]`.
*
* Each FK carries explicit `source` and `target` {@link ForeignKeyReference}
* coordinates (namespace, table, columns). For single-namespace contracts the
* sentinel `UNBOUND_NAMESPACE_ID` appears on both sides.
*
* The nested references are normalised to {@link ForeignKeyReference}
* instances inside the constructor so downstream walks see a uniform AST
* regardless of whether the input was a JSON literal or an already-constructed
* class instance.
*/ var ForeignKey = class extends SqlNode {
    source;
    target;
    constructor(input){
        super();
        this.source = input.source instanceof ForeignKeyReference ? input.source : new ForeignKeyReference(input.source);
        this.target = input.target instanceof ForeignKeyReference ? input.target : new ForeignKeyReference(input.target);
        if (input.name !== void 0) this.name = input.name;
        if (input.onDelete !== void 0) this.onDelete = input.onDelete;
        if (input.onUpdate !== void 0) this.onUpdate = input.onUpdate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/primary-key.ts
/**
* SQL Contract IR node for a table's primary-key constraint.
*/ var PrimaryKey = class extends SqlNode {
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/sql-index.ts
/**
* SQL Contract IR node for a table-level secondary index.
*
* Note that this class shadows the global TypeScript `Index` lib type
* at the family-shared name; consumer files that need both should
* alias one (e.g.
* `import { Index as SqlIndexNode } from '@prisma-next/sql-contract/types'`).
*/ var Index = class extends SqlNode {
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        if (input.type !== void 0) this.type = input.type;
        if (input.options !== void 0) this.options = input.options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/storage-column.ts
/**
* SQL Contract IR node for a single column entry in `StorageTable.columns`.
*
* Single concrete family-shared class — every SQL target reads the
* same column shape today, so there is no per-target subclass. The
* class type accepts any caller that constructs via
* `new StorageColumn(input)`; literal construction sites must pass
* through the constructor or the family-base hydration walker.
*
* The column's `name` is not on the class — columns are keyed by name
* in the parent `StorageTable.columns: Record<string, StorageColumn>`
* map, so a `name` field would be redundant with the key.
*/ var StorageColumn = class extends SqlNode {
    nativeType;
    codecId;
    nullable;
    constructor(input){
        super();
        this.nativeType = input.nativeType;
        this.codecId = input.codecId;
        this.nullable = input.nullable;
        if (input.many !== void 0) this.many = input.many;
        if (input.typeParams !== void 0) this.typeParams = input.typeParams;
        if (input.typeRef !== void 0) this.typeRef = input.typeRef;
        if (input.default !== void 0) this.default = input.default;
        if (input.control !== void 0) this.control = input.control;
        if (input.valueSet !== void 0) this.valueSet = input.valueSet;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/unique-constraint.ts
/**
* SQL Contract IR node for a table-level unique constraint.
*/ var UniqueConstraint = class extends SqlNode {
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
//#endregion
//#region src/ir/storage-table.ts
/**
* SQL Contract IR node for a single table entry in a namespace's
* `tables` map.
*
* The constructor normalises nested IR-class fields (columns, primary
* key, uniques, indexes, foreign keys) into the appropriate class
* instances so downstream walks see a uniform AST regardless of whether
* the input was a JSON literal or an already-constructed class.
*
* The table's `name` is not on the class — tables are keyed by name in
* the parent namespace's `tables: Record<string, StorageTable>` map.
*/ var StorageTable = class StorageTable extends SqlNode {
    columns;
    uniques;
    indexes;
    foreignKeys;
    constructor(input){
        super();
        this.columns = Object.freeze(Object.fromEntries(Object.entries(input.columns).map(([name, col])=>[
                name,
                col instanceof StorageColumn ? col : new StorageColumn(col)
            ])));
        if (input.primaryKey !== void 0) this.primaryKey = input.primaryKey instanceof PrimaryKey ? input.primaryKey : new PrimaryKey(input.primaryKey);
        this.uniques = Object.freeze(input.uniques.map((u)=>u instanceof UniqueConstraint ? u : new UniqueConstraint(u)));
        this.indexes = Object.freeze(input.indexes.map((i)=>i instanceof Index ? i : new Index(i)));
        this.foreignKeys = Object.freeze(input.foreignKeys.map((fk)=>fk instanceof ForeignKey ? fk : new ForeignKey(fk)));
        if (input.control !== void 0) this.control = input.control;
        if (input.checks !== void 0 && input.checks.length > 0) this.checks = Object.freeze(input.checks.map((cc)=>new CheckConstraint(cc)));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    /**
	* Runtime guard that a namespace `table` entry is really a `StorageTable`.
	* The compiler already types the entry as `StorageTable`, but a
	* freshly-deserialized contract may carry plain JSON at that slot until
	* hydration; this duck-types the structural shape. Accepts `undefined` so
	* optional-chained entry lookups pass straight through.
	*/ static is(value) {
        if (typeof value !== "object" || value === null) return false;
        return "columns" in value && "uniques" in value && "indexes" in value && "foreignKeys" in value;
    }
    static assert(value, coordinate) {
        if (!StorageTable.is(value)) throw new Error(`Expected a StorageTable at ${coordinate}`);
    }
};
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/storage-table-DBpYBmty.mjs [app-rsc] (ecmascript) <export l as SqlNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/storage-table-DBpYBmty.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/storage-value-set-3BKuha5q.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>isStorageValueSet,
    "t",
    ()=>StorageValueSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/storage-table-DBpYBmty.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
;
;
//#region src/ir/storage-value-set.ts
/**
* SQL Contract IR node for a value-set entry in a namespace's `valueSet`
* map (`SqlNamespace.entries.valueSet`).
*
* A value-set records the ordered set of permitted codec-encoded values for
* an enum-like column restriction. It does not carry a `codecId` — the
* column that references it already holds the codec; the value-set holds
* only the permitted values.
*
* The node's `kind` is enumerable (`'valueSet'`) so the JSON envelope
* carries the discriminator and the serializer hydration walker can
* dispatch on it. This follows the per-leaf enumerable-kind convention
* established in the SQL-node comment (future polymorphic dispatch on
* namespace entries needs the discriminator in JSON).
*
* The entry's name is not on the class — value-sets are keyed by name in
* the parent namespace's `valueSet: Record<string, StorageValueSet>` map.
*/ var StorageValueSet = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"] {
    kind = "valueSet";
    values;
    constructor(input){
        super();
        this.values = Object.freeze([
            ...input.values
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
function isStorageValueSet(value) {
    if (typeof value !== "object" || value === null) return false;
    return "kind" in value && value.kind === "valueSet" && "values" in value;
}
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/types.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CODEC_INSTANCE_KIND",
    ()=>CODEC_INSTANCE_KIND,
    "DEFAULT_FK_CONSTRAINT",
    ()=>DEFAULT_FK_CONSTRAINT,
    "DEFAULT_FK_INDEX",
    ()=>DEFAULT_FK_INDEX,
    "SqlNamespaceBase",
    ()=>SqlNamespaceBase,
    "SqlStorage",
    ()=>SqlStorage,
    "applyFkDefaults",
    ()=>applyFkDefaults,
    "isMaterializedSqlNamespace",
    ()=>isMaterializedSqlNamespace,
    "isSqlAuthoringContributions",
    ()=>isSqlAuthoringContributions,
    "isStorageTypeInstance",
    ()=>isStorageTypeInstance,
    "toStorageTypeInstance",
    ()=>toStorageTypeInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/storage-table-DBpYBmty.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$value$2d$set$2d$3BKuha5q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/storage-value-set-3BKuha5q.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>");
;
;
;
//#region src/ir/storage-type-instance.ts
/**
* Sentinel kind for the legacy codec-triple shape persisted under
* `SqlStorage.types`. Plain JSON-clean object literals carry this
* discriminator so the polymorphic slot dispatch can route them down
* the codec path while target-specific IR class instances (e.g. the
* Postgres enum class) keep their own narrower `kind` literal.
*/ const CODEC_INSTANCE_KIND = "codec-instance";
/**
* Stamp the codec-instance `kind` discriminator on a caller-supplied
* codec triple. Idempotent: input that already carries the discriminator
* passes through unchanged. Missing `typeParams` is normalised to `{}`.
*/ function toStorageTypeInstance(input) {
    return {
        kind: CODEC_INSTANCE_KIND,
        codecId: input.codecId,
        nativeType: input.nativeType,
        typeParams: input.typeParams ?? {}
    };
}
/**
* Type-guard for codec-typed entries on the polymorphic
* `SqlStorage.types` slot. Distinguishes `StorageTypeInstance` from
* any class-instance kinds a target pack contributes.
*/ function isStorageTypeInstance(value) {
    if (typeof value !== "object" || value === null) return false;
    return value.kind === CODEC_INSTANCE_KIND;
}
//#endregion
//#region src/ir/sql-storage.ts
/**
* Narrows framework `AuthoringContributions` to the SQL-family shape by testing
* for the SQL-specific `createNamespace` capability.
*/ function isSqlAuthoringContributions(authoring) {
    if (authoring === void 0 || !Object.hasOwn(authoring, "createNamespace")) return false;
    return typeof Reflect.get(authoring, "createNamespace") === "function";
}
/**
* Abstract SQL family namespace base class. Target concretions (`PostgresSchema`,
* `SqliteDatabase`, …) extend this — it is never instantiated directly.
* `entries` is the open ADR 224 dictionary: `entries[entityKind][entityName]`
* addresses any entity.
*/ var SqlNamespaceBase = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NamespaceBase"] {
};
/**
* Realm-safe guard for hydrated `SqlNamespaceBase` concretions. Checks
* `qualifyTable` structurally instead of `instanceof NamespaceBase`, so it
* survives duplicate-module boundaries (e.g. dist e2e where the target and
* the family carry separate copies of `@prisma-next/framework-components`).
*
* Every concrete `SqlNamespaceBase` subclass (`PostgresSchema`, `SqliteDatabase`,
* `TestSqlNamespace`, …) implements `qualifyTable`. Raw `SqlNamespaceInput`
* objects (`{ id, entries }`) do not.
*/ function isMaterializedSqlNamespace(x) {
    if (typeof x !== "object" || x === null || !("qualifyTable" in x)) return false;
    return typeof x.qualifyTable === "function";
}
var SqlStorage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$storage$2d$table$2d$DBpYBmty$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"] {
    storageHash;
    namespaces;
    constructor(input){
        super();
        this.storageHash = input.storageHash;
        this.namespaces = Object.freeze(input.namespaces);
        if (input.types !== void 0) this.types = Object.freeze(Object.fromEntries(Object.entries(input.types).map(([name, ti])=>[
                name,
                normaliseTypeEntry(name, ti)
            ])));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
};
/**
* Strict polymorphic-slot dispatch for `SqlStorage.types` entries.
* Every entry must carry a `kind: 'codec-instance'` discriminator or
* be an already-constructed `StorageTypeInstance`. Untagged or
* unrecognised inputs throw a diagnostic naming the entry and its
* `kind`, so format drift surfaces loudly at the deserializer
* boundary instead of slipping past the seam and corrupting
* downstream IR walks.
*
* Codec-triple authors that have an untagged shape on hand can call
* `toStorageTypeInstance(...)` (which stamps the `'codec-instance'`
* discriminator) before constructing `SqlStorage`. On-disk reads
* cross `familyInstance.deserializeContract` first; the structural
* arktype schema rejects untagged entries earlier, so this throw
* only fires for in-memory authoring bugs.
*/ function normaliseTypeEntry(name, entry) {
    if (isStorageTypeInstance(entry)) {
        if ("typeParams" in entry) return entry;
        return toStorageTypeInstance(entry);
    }
    const rawKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(entry) ? entry["kind"] : void 0;
    const kindDescription = rawKind === void 0 ? "missing `kind` discriminator" : `unrecognised \`kind\` discriminator ${JSON.stringify(rawKind)}`;
    throw new Error(`storage.types[${JSON.stringify(name)}] has ${kindDescription}; expected ${JSON.stringify("codec-instance")}. Untagged codec triples should be wrapped with toStorageTypeInstance(...) before construction.`);
}
//#endregion
//#region src/types.ts
const DEFAULT_FK_CONSTRAINT = true;
const DEFAULT_FK_INDEX = true;
function applyFkDefaults(fk, overrideDefaults) {
    return {
        constraint: fk.constraint ?? overrideDefaults?.constraint ?? true,
        index: fk.index ?? overrideDefaults?.index ?? true
    };
}
;
}),
"[project]/node_modules/@prisma-next/sql-contract/dist/validators.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractEnumSchema",
    ()=>ContractEnumSchema,
    "createNamespaceEntrySchema",
    ()=>createNamespaceEntrySchema,
    "createSqlContractSchema",
    ()=>createSqlContractSchema,
    "createSqlStorageSchema",
    ()=>createSqlStorageSchema,
    "validateModel",
    ()=>validateModel,
    "validateModelStorageReferences",
    ()=>validateModelStorageReferences,
    "validateSqlContractFully",
    ()=>validateSqlContractFully,
    "validateSqlStorageConsistency",
    ()=>validateSqlStorageConsistency,
    "validateStorage",
    ()=>validateStorage,
    "validateStorageSemantics",
    ()=>validateStorageSemantics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$entity$2d$kinds$2d$CVg6HzG2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-contract/dist/entity-kinds-CVg6HzG2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/is-plain-record-CUofyVQ7.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/types.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/contract-validation-error-BFA66rwU.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$validate$2d$domain$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/contract/dist/validate-domain.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
;
;
;
;
;
;
;
;
//#region src/validators.ts
const generatorKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'generator'");
const ControlPolicySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'managed' | 'tolerated' | 'external' | 'observed'");
const ExecutionMutationDefaultValueSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    kind: generatorKindSchema,
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string").narrow((value, ctx)=>{
        return /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value) ? true : ctx.mustBe("a flat generator id");
    }),
    "params?": "Record<string, unknown>"
});
const ExecutionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    executionHash: "string",
    mutations: {
        "+": "reject",
        defaults: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "+": "reject",
            ref: {
                "+": "reject",
                namespace: "string",
                table: "string",
                column: "string"
            },
            "onCreate?": ExecutionMutationDefaultValueSchema,
            "onUpdate?": ExecutionMutationDefaultValueSchema
        }).array().readonly()
    }
});
const DomainEnumRefSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    plane: "'domain'",
    namespaceId: "string",
    entityKind: "'enum'",
    entityName: "string",
    "spaceId?": "string"
});
/** Document-scoped `storage.types`: codec triples only. */ const DocumentScopedStorageTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    kind: "'codec-instance'",
    codecId: "string",
    nativeType: "string",
    "typeParams?": "Record<string, unknown>"
});
/**
* Domain enum entry under `domain.namespaces[id].enum[name]`.
* Carries the codec id and an ordered `members` array of `{name, value}` pairs.
*/ const ContractEnumSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    codecId: "string",
    members: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        name: "string",
        value: "string | number | boolean | null | unknown[] | Record<string, unknown>"
    }).array().readonly()
});
/**
* Derives a schema map from a descriptor map: maps each kind's key to its
* `schema` field. Used by validation functions to validate entries.
*/ function schemaViewOf(kinds) {
    return new Map([
        ...kinds
    ].map(([k, d])=>[
            k,
            d.schema
        ]));
}
const DEFAULT_SQL_KINDS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$contract$2f$dist$2f$entity$2d$kinds$2d$CVg6HzG2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])();
/**
* Builds the per-namespace entry schema for `storage.namespaces[id]`.
*
* Validation is descriptor-driven: the `kinds` map carries both the schema
* (used here for structural validation) and the construct function (used at
* hydration time). An unregistered key fails validation naming the kind and
* the namespace id, so validation fails closed.
*/ function createNamespaceEntrySchema(kinds) {
    const schemas = schemaViewOf(kinds);
    const knownKinds = new Set(kinds.keys());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "reject",
        id: "string",
        "kind?": "string",
        entries: "object"
    }).narrow((ns, ctx)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(ns.entries)) return ctx.mustBe("an entries object");
        for (const [key, innerMap] of Object.entries(ns.entries)){
            if (!knownKinds.has(key)) return ctx.reject({
                expected: `entries key "${key}" in namespace "${ns.id}" is not a registered entity kind`
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(innerMap)) return ctx.reject({
                expected: `entries["${key}"] in namespace "${ns.id}" must be an object`
            });
            const entrySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(schemas.get(key));
            for (const [, value] of Object.entries(innerMap)){
                const parsed = entrySchema(value);
                if (parsed instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) return ctx.reject({
                    expected: parsed.summary
                });
            }
        }
        return true;
    });
}
/**
* Builds the storage schema. Pack contributions reach the per-namespace
* entry shape through {@link createNamespaceEntrySchema}; the
* document-scoped `storage.types` field (codec triples only) and the
* storage hash stay family-shared.
*/ function createSqlStorageSchema(kinds) {
    const namespaceEntry = createNamespaceEntrySchema(kinds);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "reject",
        storageHash: "string",
        "types?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "[string]": DocumentScopedStorageTypeSchema
        }),
        "namespaces?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "[string]": namespaceEntry
        })
    });
}
const StorageSchema = createSqlStorageSchema(DEFAULT_SQL_KINDS);
function eachStorageTable(storage) {
    return Object.entries(storage.namespaces).flatMap(([namespaceId, ns])=>Object.entries(ns.entries["table"] ?? {}).map(([tableName, table])=>({
                namespaceId,
                tableName,
                table
            })));
}
function findDuplicateValue(values) {
    const seen = /* @__PURE__ */ new Set();
    for (const value of values){
        if (seen.has(value)) return value;
        seen.add(value);
    }
}
function isContractFieldType(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(value)) return false;
    const kind = value["kind"];
    if (kind === "scalar") {
        if (typeof value["codecId"] !== "string") return false;
        const typeParams = value["typeParams"];
        if (typeParams !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(typeParams)) return false;
        return true;
    }
    if (kind === "valueObject") return typeof value["name"] === "string";
    if (kind === "union") {
        const members = value["members"];
        if (!Array.isArray(members)) return false;
        return members.every((m)=>isContractFieldType(m));
    }
    return false;
}
const ModelFieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    nullable: "boolean",
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("unknown").narrow((value, ctx)=>isContractFieldType(value) ? true : ctx.mustBe("scalar, valueObject, or union field type")),
    "many?": "true",
    "dict?": "true",
    "valueSet?": DomainEnumRefSchema
});
const ModelStorageSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    table: "string",
    namespaceId: "string",
    fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            column: "string",
            "codecId?": "string",
            "nullable?": "boolean"
        })
    })
});
const ContractRelationThroughSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    table: "string",
    namespaceId: "string",
    parentColumns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    childColumns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    targetColumns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly()
});
const ContractRelationOnSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    localFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    targetFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly()
});
const ContractManyToManyRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CrossReferenceSchema"],
    cardinality: "'N:M'",
    on: ContractRelationOnSchema,
    through: ContractRelationThroughSchema
});
const ContractNonJunctionRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CrossReferenceSchema"],
    cardinality: "'1:1' | '1:N' | 'N:1'",
    on: ContractRelationOnSchema
});
const ContractReferenceRelationSchema = ContractManyToManyRelationSchema.or(ContractNonJunctionRelationSchema);
const ContractEmbedRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CrossReferenceSchema"],
    cardinality: "'1:1' | '1:N'"
});
const ContractRelationSchema = ContractReferenceRelationSchema.or(ContractEmbedRelationSchema);
const ModelSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    storage: ModelStorageSchema,
    "fields?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": ModelFieldSchema
    }),
    "relations?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": ContractRelationSchema
    }),
    "discriminator?": "unknown",
    "variants?": "unknown",
    "base?": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CrossReferenceSchema"],
    "owner?": "string"
});
const ContractMetaSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "[string]": "unknown"
});
/**
* Builds the full SQL contract schema. The storage subtree threads
* pack contributions through {@link createSqlStorageSchema}; the rest
* of the contract envelope is family-shared.
*/ function createSqlContractSchema(kinds) {
    const storage = createSqlStorageSchema(kinds);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "reject",
        target: "string",
        targetFamily: "'sql'",
        "coreHash?": "string",
        profileHash: "string",
        "capabilities?": "Record<string, Record<string, boolean>>",
        "extensionPacks?": "Record<string, unknown>",
        "meta?": ContractMetaSchema,
        "defaultControlPolicy?": ControlPolicySchema,
        "roots?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "[string]": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$types$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CrossReferenceSchema"]
        }),
        domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                "[string]": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                    models: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                        "[string]": ModelSchema
                    }),
                    "valueObjects?": "Record<string, unknown>",
                    "enum?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                        "[string]": ContractEnumSchema
                    })
                })
            })
        }),
        storage,
        "execution?": ExecutionSchema
    });
}
const SqlContractSchema = createSqlContractSchema(DEFAULT_SQL_KINDS);
/**
* Validates the structural shape of SqlStorage using Arktype. Pure
* structural check: namespace IR is never materialized here (that needs
* a target concretion via the serializer hydration path), so this throws
* on invalid input and constructs nothing.
*
* @param value - The storage value to validate
* @throws Error if the storage structure is invalid
*/ function validateStorage(value) {
    const result = StorageSchema(value);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) {
        const messages = result.map((p)=>p.message).join("; ");
        throw new Error(`Storage validation failed: ${messages}`);
    }
}
function validateModel(value) {
    const result = ModelSchema(value);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) {
        const messages = result.map((p)=>p.message).join("; ");
        throw new Error(`Model validation failed: ${messages}`);
    }
    return result;
}
/**
* Structural arktype validation of an SQL contract envelope. Internal
* helper for {@link validateSqlContractFully} — exposed only inside
* this module, since the family seam-of-record is the
* `SqlContractSerializerBase.deserializeContract` SPI.
*/ function validateSqlContractStructure(value, contractSchema) {
    if (typeof value !== "object" || value === null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("Contract structural validation failed: value must be an object", "structural");
    const rawValue = value;
    if (rawValue.targetFamily !== void 0 && rawValue.targetFamily !== "sql") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Unsupported target family: ${rawValue.targetFamily}`, "structural");
    const contractResult = contractSchema(value);
    if (contractResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Contract structural validation failed: ${contractResult.map((p)=>p.message).join("; ")}`, "structural");
    return contractResult;
}
/**
* Validates semantic constraints on SqlStorage that cannot be expressed in Arktype schemas.
*
* Returns an array of human-readable error strings. Empty array = valid.
*
* Currently checks:
* - duplicate named primary key / unique / index / foreign key objects within a table
* - duplicate unique, index, or foreign key declarations within a table
* - duplicate columns within primary key / unique / index definitions
* - nullable columns in primary key definitions
* - `setNull` referential action on a non-nullable FK column (would fail at runtime)
* - `setDefault` referential action on a non-nullable FK column without a DEFAULT (would fail at runtime)
*/ function validateStorageSemantics(storage) {
    const errors = [];
    for (const { namespaceId, tableName, table: rawTable } of eachStorageTable(storage)){
        const table = rawTable;
        const namedObjects = /* @__PURE__ */ new Map();
        const registerNamedObject = (kind, name)=>{
            if (!name) return;
            namedObjects.set(name, [
                ...namedObjects.get(name) ?? [],
                kind
            ]);
        };
        registerNamedObject("primary key", table.primaryKey?.name);
        for (const unique of table.uniques)registerNamedObject("unique constraint", unique.name);
        for (const index of table.indexes)registerNamedObject("index", index.name);
        for (const fk of table.foreignKeys)registerNamedObject("foreign key", fk.name);
        for (const check of table.checks ?? [])registerNamedObject("check constraint", check.name);
        for (const [name, kinds] of namedObjects)if (kinds.length > 1) errors.push(`Namespace "${namespaceId}" table "${tableName}": named object "${name}" is declared multiple times (${kinds.join(", ")})`);
        if (table.primaryKey) {
            const duplicateColumn = findDuplicateValue(table.primaryKey.columns);
            if (duplicateColumn !== void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": primary key contains duplicate column "${duplicateColumn}"`);
            for (const columnName of table.primaryKey.columns)if (table.columns[columnName]?.nullable === true) errors.push(`Namespace "${namespaceId}" table "${tableName}": primary key column "${columnName}" is nullable; primary key columns must be NOT NULL`);
        }
        const seenUniqueDefinitions = /* @__PURE__ */ new Set();
        for (const unique of table.uniques){
            const duplicateColumn = findDuplicateValue(unique.columns);
            if (duplicateColumn !== void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": unique constraint contains duplicate column "${duplicateColumn}"`);
            const signature = JSON.stringify({
                columns: unique.columns
            });
            if (seenUniqueDefinitions.has(signature)) {
                errors.push(`Namespace "${namespaceId}" table "${tableName}": duplicate unique constraint definition on columns [${unique.columns.join(", ")}]`);
                continue;
            }
            seenUniqueDefinitions.add(signature);
        }
        const sortOptions = (o)=>o ? Object.fromEntries(Object.entries(o).sort(([a], [b])=>a.localeCompare(b))) : null;
        const seenIndexDefinitions = /* @__PURE__ */ new Set();
        for (const index of table.indexes){
            const duplicateColumn = findDuplicateValue(index.columns);
            if (duplicateColumn !== void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": index contains duplicate column "${duplicateColumn}"`);
            const signature = JSON.stringify({
                columns: index.columns,
                type: index.type ?? null,
                options: sortOptions(index.options)
            });
            if (seenIndexDefinitions.has(signature)) {
                errors.push(`Namespace "${namespaceId}" table "${tableName}": duplicate index definition on columns [${index.columns.join(", ")}]`);
                continue;
            }
            seenIndexDefinitions.add(signature);
        }
        const seenForeignKeyDefinitions = /* @__PURE__ */ new Set();
        for (const fk of table.foreignKeys){
            const signature = JSON.stringify({
                source: fk.source,
                target: fk.target,
                onDelete: fk.onDelete ?? null,
                onUpdate: fk.onUpdate ?? null
            });
            if (seenForeignKeyDefinitions.has(signature)) {
                errors.push(`Namespace "${namespaceId}" table "${tableName}": duplicate foreign key definition on columns [${fk.source.columns.join(", ")}]`);
                continue;
            }
            seenForeignKeyDefinitions.add(signature);
        }
        for (const fk of table.foreignKeys)for (const colName of fk.source.columns){
            const column = table.columns[colName];
            if (!column) continue;
            if (fk.onDelete === "setNull" && !column.nullable) errors.push(`Namespace "${namespaceId}" table "${tableName}": onDelete setNull on foreign key column "${colName}" which is NOT NULL`);
            if (fk.onUpdate === "setNull" && !column.nullable) errors.push(`Namespace "${namespaceId}" table "${tableName}": onUpdate setNull on foreign key column "${colName}" which is NOT NULL`);
            if (fk.onDelete === "setDefault" && !column.nullable && column.default === void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": onDelete setDefault on foreign key column "${colName}" which is NOT NULL and has no DEFAULT`);
            if (fk.onUpdate === "setDefault" && !column.nullable && column.default === void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": onUpdate setDefault on foreign key column "${colName}" which is NOT NULL and has no DEFAULT`);
        }
        const seenCheckDefinitions = /* @__PURE__ */ new Set();
        for (const check of table.checks ?? []){
            const signature = JSON.stringify({
                column: check.column,
                valueSet: check.valueSet
            });
            if (seenCheckDefinitions.has(signature)) {
                errors.push(`Namespace "${namespaceId}" table "${tableName}": duplicate check constraint definition on column "${check.column}"`);
                continue;
            }
            seenCheckDefinitions.add(signature);
        }
    }
    return errors;
}
/**
* SQL storage logical-consistency checks: every model.storage.table
* resolves to a real table, every model.storage.fields[*].column
* resolves to a real column, and value-object fields land on JSON-native
* columns. Throws `ContractValidationError` on the first mismatch.
*/ function validateModelStorageReferences(contract) {
    for (const [namespaceId, namespace] of Object.entries(contract.domain.namespaces)){
        const models = namespace.models;
        for (const [modelName, model] of Object.entries(models)){
            const qualifiedName = `${namespaceId}:${modelName}`;
            const storageNamespaceId = model.storage.namespaceId;
            if (storageNamespaceId !== namespaceId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" storage.namespaceId "${storageNamespaceId}" does not match domain namespace "${namespaceId}"`, "storage");
            const storageTable = model.storage.table;
            const rawTable = contract.storage.namespaces[storageNamespaceId]?.entries.table?.[storageTable];
            if (rawTable === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" references non-existent table "${storageNamespaceId}.${storageTable}"`, "storage");
            const table = rawTable;
            const columnNames = new Set(Object.keys(table.columns));
            for (const [fieldName, field] of Object.entries(model.storage.fields))if (!columnNames.has(field.column)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" field "${fieldName}" references non-existent column "${field.column}" in table "${storageTable}"`, "storage");
            const JSON_NATIVE_TYPES = /* @__PURE__ */ new Set([
                "json",
                "jsonb"
            ]);
            for (const [fieldName, domainField] of Object.entries(model.fields ?? {})){
                if (domainField.type?.kind !== "valueObject") continue;
                const storageField = model.storage.fields[fieldName];
                if (!storageField) continue;
                const column = table.columns[storageField.column];
                if (!column) continue;
                if (!JSON_NATIVE_TYPES.has(column.nativeType)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" field "${fieldName}" is a value object but storage column "${storageField.column}" has nativeType "${column.nativeType}" (expected json or jsonb)`, "storage");
            }
        }
    }
}
/**
* Cross-table consistency checks for SQL storage: primary key, unique,
* index, and foreign key column references resolve to real columns;
* NOT NULL columns don't carry a literal `null` default; FK column
* counts match their referenced columns. Throws on the first mismatch.
*/ function validateSqlStorageConsistency(contract) {
    for (const { namespaceId, tableName, table: rawTable } of eachStorageTable(contract.storage)){
        const table = rawTable;
        const columnNames = new Set(Object.keys(table.columns));
        if (table.primaryKey) {
            for (const colName of table.primaryKey.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" primaryKey references non-existent column "${colName}"`, "storage");
        }
        for (const unique of table.uniques)for (const colName of unique.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" unique constraint references non-existent column "${colName}"`, "storage");
        for (const index of table.indexes)for (const colName of index.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" index references non-existent column "${colName}"`, "storage");
        for (const check of table.checks ?? [])if (!columnNames.has(check.column)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" check constraint "${check.name}" references non-existent column "${check.column}"`, "storage");
        for (const [colName, column] of Object.entries(table.columns))if (!column.nullable && column.default?.kind === "literal" && column.default.value === null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" column "${colName}" is NOT NULL but has a literal null default`, "storage");
        for (const fk of table.foreignKeys){
            if (fk.source.namespaceId !== namespaceId || fk.source.tableName !== tableName) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" contains foreignKey with mismatched source coordinates (${fk.source.namespaceId}.${fk.source.tableName})`, "storage");
            for (const colName of fk.source.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey references non-existent column "${colName}"`, "storage");
            if (fk.target.spaceId === void 0) {
                const referencedRaw = contract.storage.namespaces[fk.target.namespaceId]?.entries.table?.[fk.target.tableName];
                if (referencedRaw === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey references non-existent table "${fk.target.namespaceId}.${fk.target.tableName}"`, "storage");
                const referencedColumnNames = new Set(Object.keys(referencedRaw.columns));
                for (const colName of fk.target.columns)if (!referencedColumnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey references non-existent column "${colName}" in table "${fk.target.tableName}"`, "storage");
            }
            if (fk.source.columns.length !== fk.target.columns.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey column count (${fk.source.columns.length}) does not match referenced column count (${fk.target.columns.length})`, "storage");
        }
    }
}
/**
* Full SQL contract validation: structural (arktype) +
* framework-shared domain + SQL storage logical-consistency + SQL
* storage semantic + model ↔ storage reference checks. Throws
* `ContractValidationError` on the first failure. Returns the
* validated flat-data shape; IR class hydration happens in the SPI
* base on top of this helper.
*/ function validateSqlContractFully(value, options) {
    const validated = validateSqlContractStructure(typeof value === "object" && value !== null ? (()=>{
        const { schemaVersion: _, _generated: _g, ...rest } = value;
        return rest;
    })() : value, options?.contractSchema ?? SqlContractSchema);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$validate$2d$domain$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateContractDomain"])({
        roots: validated.roots,
        domain: validated.domain
    });
    validateSqlStorageConsistency(validated);
    const semanticErrors = validateStorageSemantics(validated.storage);
    if (semanticErrors.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Contract semantic validation failed: ${semanticErrors.join("; ")}`, "storage");
    validateModelStorageReferences(validated);
    validateRelationThroughConsistency(validated);
    return validated;
}
/** Storage column lookup for through-consistency validation. */ function lookupStorageColumn(contract, namespaceId, tableName, columnName) {
    const rawTable = contract.storage.namespaces[namespaceId]?.entries.table?.[tableName];
    if (rawTable === void 0) return;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(rawTable).columns[columnName];
}
/**
* Two storage columns share a type when their `nativeType` and `typeParams`
* match. The contract is canonicalized, so `typeParams` key order is stable and
* a JSON comparison is exact. `codecId` and `nullable` are intentionally not
* compared: they do not change the database-level type that governs a join.
*/ function sameStorageType(a, b) {
    return a.nativeType === b.nativeType && JSON.stringify(a.typeParams ?? null) === JSON.stringify(b.typeParams ?? null);
}
function describeColumnType(column) {
    return column.typeParams === void 0 ? column.nativeType : `${column.nativeType} ${JSON.stringify(column.typeParams)}`;
}
/**
* Validates one side of an N:M join: the junction columns and the model
* columns they pair against positionally must be equal in number, exist in
* their tables, and share the same storage type (`nativeType` + `typeParams`).
* The junction's storage foreign keys already guarantee this for user-declared
* FK constraints, but `through` is a logical descriptor never tied to them by
* the rest of validation — and the TS builder accepts explicit join columns
* without requiring a junction FK at all — so this checks the columns directly
* against storage, one path regardless of how the junction was authored.
*
* Joined columns must be the *same* storage type, not merely compatible:
* relying on implicit conversion (e.g. `text`↔`character`) is unsafe on writes
* — `character(n)` space-padding makes such coercions non-associative — and no
* ADR sanctions heterogeneous junction columns. Equality is the conservative
* default; it can be relaxed deliberately if a real use case ever appears.
*/ function validateThroughJoinSide(input) {
    const fail = (detail)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$contract$2f$dist$2f$contract$2d$validation$2d$error$2d$BFA66rwU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Many-to-many relation "${input.qualifiedName}" ${detail}`, "storage");
    if (input.junctionColumns.length !== input.modelColumns.length) throw fail(`pairs ${input.junctionColumnsLabel} (${input.junctionColumns.length}) with ${input.modelColumnsLabel} (${input.modelColumns.length}) of differing length; they join positionally and must match.`);
    for (const [index, junctionColumnName] of input.junctionColumns.entries()){
        const modelColumnRef = input.modelColumns[index];
        if (modelColumnRef === void 0) continue;
        const junctionColumn = lookupStorageColumn(input.contract, input.junctionNamespaceId, input.junctionTable, junctionColumnName);
        if (junctionColumn === void 0) throw fail(`${input.junctionColumnsLabel} references column "${junctionColumnName}" absent from junction table "${input.junctionNamespaceId}.${input.junctionTable}".`);
        const model = input.model;
        if (model === void 0) continue;
        let modelColumnName = modelColumnRef;
        if (model.fieldToColumn !== void 0) {
            const mapped = model.fieldToColumn[modelColumnRef];
            if (mapped === void 0) throw fail(`${input.modelColumnsLabel} references field "${modelColumnRef}" absent from model on table "${model.namespaceId}.${model.table}".`);
            modelColumnName = mapped.column;
        }
        const modelColumn = lookupStorageColumn(input.contract, model.namespaceId, model.table, modelColumnName);
        if (modelColumn === void 0) throw fail(`${input.modelColumnsLabel} references column "${modelColumnName}" absent from table "${model.namespaceId}.${model.table}".`);
        if (!sameStorageType(junctionColumn, modelColumn)) throw fail(`joins "${input.junctionTable}.${junctionColumnName}" (${describeColumnType(junctionColumn)}) with "${model.table}.${modelColumnName}" (${describeColumnType(modelColumn)}) of differing storage type; junction columns must match the type of the column they reference.`);
    }
}
/**
* Validates that every N:M relation's `through` descriptor is consistent with
* the storage columns it joins: both join sides match in column count,
* reference columns that exist in their tables, and pair columns of the same
* storage type. Without this, a `through` that disagrees with storage surfaces
* as a silently wrong JOIN at query time rather than a validation error here.
*/ function validateRelationThroughConsistency(contract) {
    for (const [namespaceId, namespace] of Object.entries(contract.domain.namespaces))for (const [modelName, model] of Object.entries(namespace.models))for (const [relationName, relation] of Object.entries(model.relations)){
        if (relation.cardinality !== "N:M") continue;
        const qualifiedName = `${namespaceId}.${modelName}.${relationName}`;
        const { on, through } = relation;
        const modelStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(model.storage);
        validateThroughJoinSide({
            contract,
            qualifiedName,
            modelColumns: on.localFields,
            modelColumnsLabel: "on.localFields",
            model: {
                namespaceId,
                table: modelStorage.table,
                fieldToColumn: modelStorage.fields
            },
            junctionColumns: through.parentColumns,
            junctionColumnsLabel: "through.parentColumns",
            junctionNamespaceId: through.namespaceId,
            junctionTable: through.table
        });
        const targetModel = relation.to.space === void 0 ? contract.domain.namespaces[relation.to.namespace]?.models[relation.to.model] : void 0;
        const targetModelSide = targetModel === void 0 ? void 0 : {
            namespaceId: relation.to.namespace,
            table: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(targetModel.storage).table
        };
        validateThroughJoinSide({
            contract,
            qualifiedName,
            modelColumns: through.targetColumns,
            modelColumnsLabel: "through.targetColumns",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("model", targetModelSide),
            junctionColumns: through.childColumns,
            junctionColumnsLabel: "through.childColumns",
            junctionNamespaceId: through.namespaceId,
            junctionTable: through.table
        });
    }
}
;
}),
"[project]/node_modules/@prisma-next/sql-errors/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlConnectionError",
    ()=>SqlConnectionError,
    "SqlQueryError",
    ()=>SqlQueryError,
    "UNIQUE_VIOLATION_SQLSTATE",
    ()=>UNIQUE_VIOLATION_SQLSTATE,
    "isUniqueConstraintViolation",
    ()=>isUniqueConstraintViolation
]);
//#region src/errors.ts
/**
* SQL query error for query-related failures (syntax errors, constraint violations, permissions).
*/ var SqlQueryError = class SqlQueryError extends Error {
    static ERROR_NAME = "SqlQueryError";
    kind = "sql_query";
    sqlState;
    constraint;
    table;
    column;
    detail;
    constructor(message, options){
        super(message, {
            cause: options?.cause
        });
        this.name = SqlQueryError.ERROR_NAME;
        this.sqlState = options?.sqlState;
        this.constraint = options?.constraint;
        this.table = options?.table;
        this.column = options?.column;
        this.detail = options?.detail;
    }
    /**
	* Type predicate to check if an error is a SqlQueryError.
	*/ static is(error) {
        return typeof error === "object" && error !== null && Object.hasOwn(error, "kind") && error.kind === "sql_query";
    }
};
/**
* SQLSTATE for a unique-constraint / primary-key violation — the SQL-standard
* `unique_violation` class. Drivers normalize their target-specific codes (e.g.
* Postgres `23505`, SQLite `SQLITE_CONSTRAINT_UNIQUE`/`PRIMARYKEY`) onto this
* value on {@link SqlQueryError.sqlState}, so consumers classify violations
* without knowing any target-specific error shape.
*/ const UNIQUE_VIOLATION_SQLSTATE = "23505";
/**
* Whether an error is a unique-constraint (or primary-key) violation, decided
* solely from the driver-normalized {@link SqlQueryError.sqlState}. Raw driver
* errors that were never normalized are not classified — callers run behind the
* driver, which always normalizes before the error escapes.
*/ function isUniqueConstraintViolation(error) {
    return SqlQueryError.is(error) && error.sqlState === "23505";
}
/**
* SQL connection error (timeouts, connection resets, etc.).
*/ var SqlConnectionError = class SqlConnectionError extends Error {
    static ERROR_NAME = "SqlConnectionError";
    kind = "sql_connection";
    transient;
    constructor(message, options){
        super(message, {
            cause: options?.cause
        });
        this.name = SqlConnectionError.ERROR_NAME;
        this.transient = options?.transient;
    }
    /**
	* Type predicate to check if an error is a SqlConnectionError.
	*/ static is(error) {
        return typeof error === "object" && error !== null && Object.hasOwn(error, "kind") && error.kind === "sql_connection";
    }
};
;
}),
"[project]/node_modules/@prisma-next/sql-operations/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSqlOperationRegistry",
    ()=>createSqlOperationRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$operations$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/operations/dist/index.mjs [app-rsc] (ecmascript)");
;
//#region src/index.ts
function createSqlOperationRegistry() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$operations$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOperationRegistry"])();
}
;
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>SqlForeignKeyIR,
    "c",
    ()=>SqlCheckConstraintIR,
    "d",
    ()=>assertNode,
    "f",
    ()=>defineNonEnumerable,
    "h",
    ()=>relationalNodeGranularity,
    "i",
    ()=>SqlIndexIR,
    "l",
    ()=>PrimaryKey,
    "m",
    ()=>relationalNodeEntityKind,
    "n",
    ()=>SqlTableIR,
    "o",
    ()=>SqlColumnIR,
    "p",
    ()=>RelationalSchemaNodeKind,
    "r",
    ()=>SqlUniqueIR,
    "s",
    ()=>SqlColumnDefaultIR,
    "t",
    ()=>SqlSchemaIR,
    "u",
    ()=>SqlSchemaIRNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/framework-components/dist/ir.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/canonical-stringify.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
;
;
;
;
//#region src/ir/schema-node-kinds.ts
/**
* The `nodeKind` discriminant for each relational schema-diff leaf node.
* Each node carries a unique value; the differ pairs siblings by `id`, and
* these kinds distinguish the node types that appear as `PostgresTableSchemaNode`
* children (columns, primary key, foreign keys, uniques, indexes, checks) from
* each other and from the RLS policy/role kinds a target defines separately.
*/ const RelationalSchemaNodeKind = {
    schema: "sql-schema",
    table: "sql-table",
    column: "sql-column",
    columnDefault: "sql-column-default",
    primaryKey: "sql-primary-key",
    foreignKey: "sql-foreign-key",
    unique: "sql-unique",
    index: "sql-index",
    check: "sql-check-constraint"
};
/**
* The one real map from a relational `nodeKind` to the framework-neutral
* {@link DiffSubjectGranularity} its diff issues carry — the SQL family's
* post-diff filters (issue category, strict-mode gating) and the framework
* aggregate's unclaimed-elements sweep key on the granularity, never on the
* `nodeKind` spelling and never on anything stamped on the node. Resolution
* is by `nodeKind` equality against this map, not a suffix string match.
* Target-specific node kinds (Postgres namespace/table/policy/role) are
* outside this family layer's vocabulary and map their own kinds directly.
*/ const RELATIONAL_NODE_GRANULARITY = {
    [RelationalSchemaNodeKind.schema]: "structural",
    [RelationalSchemaNodeKind.table]: "entity",
    [RelationalSchemaNodeKind.column]: "field",
    [RelationalSchemaNodeKind.columnDefault]: "auxiliary",
    [RelationalSchemaNodeKind.primaryKey]: "auxiliary",
    [RelationalSchemaNodeKind.foreignKey]: "auxiliary",
    [RelationalSchemaNodeKind.unique]: "auxiliary",
    [RelationalSchemaNodeKind.index]: "auxiliary",
    [RelationalSchemaNodeKind.check]: "auxiliary"
};
function isRelationalSchemaNodeKind(nodeKind) {
    return Object.hasOwn(RELATIONAL_NODE_GRANULARITY, nodeKind);
}
/**
* Looks up the subject granularity for a relational `nodeKind`. Throws for a
* `nodeKind` outside this map (a target-specific kind, e.g. Postgres's
* namespace/table/policy/role) — those map their own kinds directly rather
* than through this family-level map.
*/ function relationalNodeGranularity(nodeKind) {
    if (!isRelationalSchemaNodeKind(nodeKind)) throw new Error(`relationalNodeGranularity: unrecognized relational node kind "${nodeKind}"`);
    return RELATIONAL_NODE_GRANULARITY[nodeKind];
}
/**
* The one real map from a relational `nodeKind` to its storage `entityKind`
* — the same vocabulary the contract storage's `entries` dictionary keys use
* (`elementCoordinates` walks it). Only the whole-table kind has an entity of
* its own; every other relational node (a column, an index, …) is nested
* under one and maps to nothing here.
*/ const RELATIONAL_NODE_ENTITY_KIND = {
    [RelationalSchemaNodeKind.table]: "table"
};
/**
* Looks up the storage `entityKind` for a relational `nodeKind` — sibling of
* {@link relationalNodeGranularity}, resolved by `nodeKind` equality against
* {@link RELATIONAL_NODE_ENTITY_KIND}. `undefined` for a target-specific kind
* (targets map their own kinds directly) or a relational kind with no entity
* of its own.
*/ function relationalNodeEntityKind(nodeKind) {
    return isRelationalSchemaNodeKind(nodeKind) ? RELATIONAL_NODE_ENTITY_KIND[nodeKind] : void 0;
}
//#endregion
//#region src/ir/sql-schema-ir-node.ts
/**
* SQL Schema IR node base. Carries the family-level
* `kind = 'sql-schema-ir'` discriminator and inherits the framework's
* `freezeNode` affordance.
*
* SQL Schema IR represents the actual database state as discovered by
* introspection (the parallel to SQL Contract IR, which represents the
* desired state).
*
* The discriminator is installed as a non-enumerable own property,
* matching the SqlNode pattern. This keeps `JSON.stringify(node)`
* canonical (no `kind` field), keeps `toEqual({...})` test assertions
* against pre-lift flat shapes passing, and keeps `node.kind` readable
* for dispatch.
*
* Both `kind` and `nodeKind` are required: every concrete leaf is a node
* the generic differ can pair and compare, so every leaf must declare which
* node it is. `nodeKind` has no default here — every direct subclass sets its
* own literal value (the relational leaves via `RelationalSchemaNodeKind`,
* target concretions via their own vocabulary, e.g. `PostgresSchemaNodeKind`).
*/ var SqlSchemaIRNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IRNodeBase"] {
    constructor(){
        super();
        Object.defineProperty(this, "kind", {
            value: "sql-schema-ir",
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
};
/**
* Asserts `node` matches `predicate`, narrowing its type to `T`. The one
* shared implementation every node class's `static assert` and `isEqualTo`
* reach for, instead of each hand-writing its own throw: the message names
* the class the caller expected.
*/ function assertNode(node, className, predicate) {
    if (node === void 0 || !predicate(node)) throw new Error(`Expected a ${className} but got nodeKind=${node?.nodeKind ?? "undefined"}`);
}
/**
* Defines a non-enumerable own property, the same treatment `kind` gets
* above: a derivation-time render-support field stays out of
* `JSON.stringify`, `toEqual({...})` structural assertions, and spreads,
* while remaining directly readable (`node.field`) for the one consumer
* that resolves it at plan time. A no-op when `value` is `undefined` — the
* property is simply absent, matching every other optional field on these
* nodes.
*/ function defineNonEnumerable(target, key, value) {
    if (value === void 0) return;
    Object.defineProperty(target, key, {
        value,
        enumerable: false,
        writable: false,
        configurable: false
    });
}
//#endregion
//#region src/ir/primary-key.ts
/**
* Primary-key Schema IR node. Mirrors the Contract IR `PrimaryKey`
* shape (same `columns` + optional `name`) so verification can compare
* intent and actual structurally. Defined here independently to avoid
* a sql-schema-ir -> sql-contract dependency.
*
* Implements `DiffableNode` so a primary key is directly a table's diff-tree
* child. `id` is a fixed sentinel — a table has at most one primary key, so
* there is never a sibling to disambiguate against. `isEqualTo` compares the
* column tuple; the PK's own `name` is a database-assigned label with no
* semantic weight, so it is not compared (mirrors the policy node's
* name-insensitivity to non-identifying detail).
*/ var PrimaryKey = class PrimaryKey extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.primaryKey;
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return "primary-key";
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.primaryKey;
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "PrimaryKey", PrimaryKey.is);
        return this.columns.length === node.columns.length && this.columns.every((c, i)=>c === node.columns[i]);
    }
};
//#endregion
//#region src/ir/sql-check-constraint-ir.ts
/**
* Schema IR node for a table-level check constraint that restricts a
* column to a set of permitted values (an enum-style `IN (...)` check).
*
* Carries the **resolved values** rather than a raw SQL predicate so
* callers can compare value-sets without parsing SQL.
*
* Implements `DiffableNode` so a check constraint is directly a table's
* diff-tree child: `id` is the constraint name. `isEqualTo` compares
* `column` and the permitted-value set (order-insensitive — the database
* does not guarantee `IN (...)` ordering).
*/ var SqlCheckConstraintIR = class SqlCheckConstraintIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.check;
    name;
    column;
    permittedValues;
    constructor(input){
        super();
        this.name = input.name;
        this.column = input.column;
        this.permittedValues = Object.freeze([
            ...input.permittedValues
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return `check:${this.name}`;
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.check;
    }
    /**
	* Compares the permitted-value sets only (unordered), matching the
	* relational walk's `verifyCheckConstraints`: two checks pairing by name
	* compare their value sets — the `column` field is descriptive, not part
	* of the comparison, so a name-paired check with equal values verifies
	* regardless of which column carries it.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlCheckConstraintIR", SqlCheckConstraintIR.is);
        const thisValues = new Set(this.permittedValues);
        const otherValues = new Set(node.permittedValues);
        if (thisValues.size !== otherValues.size) return false;
        return [
            ...thisValues
        ].every((v)=>otherValues.has(v));
    }
};
//#endregion
//#region src/ir/resolved-default-equality.ts
/**
* Structural equality for two resolved column defaults, ported from the
* relational walk's `columnDefaultsEqual` normalized branch: kinds must
* match; literal values are normalized (Date and temporal-typed strings to
* ISO instants) then compared canonically (JSON objects match their
* canonical string form); function expressions compare case- and
* whitespace-insensitively.
*
* `nativeType` provides the temporal-normalization context (the actual
* side's resolved native type in a diff comparison).
*/ function resolvedDefaultsEqual(expected, actual, nativeType) {
    if (expected.kind !== actual.kind) return false;
    if (expected.kind === "literal" && actual.kind === "literal") return literalValuesEqual(normalizeLiteralValue(expected.value, nativeType), normalizeLiteralValue(actual.value, nativeType));
    if (expected.kind === "function" && actual.kind === "function") return normalizeFunctionExpression(expected.expression) === normalizeFunctionExpression(actual.expression);
    return false;
}
function normalizeFunctionExpression(expression) {
    return expression.toLowerCase().replace(/\s+/g, "");
}
function isTemporalNativeType(nativeType) {
    if (!nativeType) return false;
    const normalized = nativeType.toLowerCase();
    return normalized.includes("timestamp") || normalized === "date";
}
function normalizeLiteralValue(value, nativeType) {
    if (value instanceof Date) return value.toISOString();
    if (typeof value === "string" && isTemporalNativeType(nativeType)) {
        const parsed = new Date(value);
        if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
    }
    return value;
}
function literalValuesEqual(a, b) {
    if (a === b) return true;
    if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalStringify"])(a) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalStringify"])(b);
    if (typeof a === "object" && a !== null && typeof b === "string") try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalStringify"])(a) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalStringify"])(JSON.parse(b));
    } catch  {
        return false;
    }
    if (typeof a === "string" && typeof b === "object" && b !== null) try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalStringify"])(JSON.parse(a)) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$canonical$2d$stringify$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalStringify"])(b);
    } catch  {
        return false;
    }
    return false;
}
//#endregion
//#region src/ir/sql-column-default-ir.ts
/**
* Schema-diff node for a column's default value. The default is the one
* column attribute with an extra/missing/drift lifecycle of its own, so it
* is a child node of the column rather than a compared attribute: an
* undeclared live default surfaces as `not-expected`, a declared default the
* database lacks as `not-found`, and a divergent value as `not-equal` — the
* three reasons cover the legacy `extra_default` / `default_missing` /
* `default_mismatch` vocabulary with no attribute inspection.
*
* `id` is a fixed sentinel — a column has at most one default. Built
* transiently by `SqlColumnIR.children()` from the column's own fields;
* never constructed by derivation or introspection directly.
*/ var SqlColumnDefaultIR = class SqlColumnDefaultIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.columnDefault;
    constructor(input){
        super();
        if (input.resolved !== void 0) this.resolved = input.resolved;
        if (input.raw !== void 0) this.raw = input.raw;
        if (input.nativeTypeContext !== void 0) this.nativeTypeContext = input.nativeTypeContext;
        defineNonEnumerable(this, "many", input.many);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return "default";
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.columnDefault;
    }
    /**
	* Structured comparison with `this` as the expected side: both sides
	* resolved compare per the relational walk's `columnDefaultsEqual`
	* semantics; a declared expected default against an unparseable actual
	* (raw present, no resolved parse) is a mismatch; two raw-only nodes fall
	* back to raw string equality.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlColumnDefaultIR", SqlColumnDefaultIR.is);
        if (this.resolved !== void 0 && node.resolved !== void 0) return resolvedDefaultsEqual(this.resolved, node.resolved, node.nativeTypeContext ?? this.nativeTypeContext);
        if (this.resolved !== void 0 || node.resolved !== void 0) return false;
        return this.raw === node.raw;
    }
};
//#endregion
//#region src/ir/sql-column-ir.ts
/**
* Schema IR node for a single column on a table, as observed by
* introspection. Unlike the Contract IR `StorageColumn`, this carries
* the column's `name` (Schema IR columns are returned as arrays from
* introspection queries; the parent table re-keys them into a record
* for downstream consumers).
*
* Implements `DiffableNode` so a column is directly a table's diff-tree
* child: `id` is the column name (unique among a table's columns); `isEqualTo`
* compares this column's own attributes only — never children, since a
* column is a leaf. When both sides carry `resolvedNativeType` (stamped at
* derivation/introspection), the comparison uses the resolved values —
* resolved native type, nullability, and structured default equality per
* the relational walk's `columnDefaultsEqual` semantics, with `this` as the
* expected side. Otherwise it falls back to comparing raw fields.
*/ var SqlColumnIR = class SqlColumnIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.column;
    name;
    nativeType;
    nullable;
    constructor(input){
        super();
        this.name = input.name;
        this.nativeType = input.nativeType;
        this.nullable = input.nullable;
        if (input.default !== void 0) this.default = input.default;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        if (input.many !== void 0) this.many = input.many;
        if (input.resolvedNativeType !== void 0) this.resolvedNativeType = input.resolvedNativeType;
        if (input.resolvedDefault !== void 0) this.resolvedDefault = input.resolvedDefault;
        defineNonEnumerable(this, "codecRef", input.codecRef);
        defineNonEnumerable(this, "codecBaseNativeType", input.codecBaseNativeType);
        defineNonEnumerable(this, "codecNamedType", input.codecNamedType);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return `column:${this.name}`;
    }
    /**
	* The column's default, when declared/present, is the column's one child
	* node — it has an extra/missing/drift lifecycle of its own, so the differ
	* recurses to it rather than `isEqualTo` comparing it. Built transiently
	* from this column's own fields.
	*/ children() {
        if (this.resolvedDefault === void 0 && this.default === void 0) return [];
        return [
            new SqlColumnDefaultIR({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("resolved", this.resolvedDefault),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("raw", this.default),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("nativeTypeContext", this.resolvedNativeType),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("many", this.many ?? this.codecRef?.many)
            })
        ];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.column;
    }
    /**
	* Compares the column's own attributes only — the default lives on the
	* child node. When both sides carry `resolvedNativeType`, the resolved
	* value governs (array-ness rides on its `[]` suffix); otherwise raw
	* fields compare.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlColumnIR", SqlColumnIR.is);
        if (this.resolvedNativeType !== void 0 && node.resolvedNativeType !== void 0) return this.resolvedNativeType === node.resolvedNativeType && this.nullable === node.nullable;
        return this.nativeType === node.nativeType && this.nullable === node.nullable && Boolean(this.many) === Boolean(node.many);
    }
};
//#endregion
//#region src/ir/sql-foreign-key-ir.ts
/**
* Schema IR node for a foreign-key constraint as observed by
* introspection. The `referencedTable` / `referencedColumns` field
* names match the introspection vocabulary (`pg_constraint.confkey`,
* etc.) and intentionally differ from the Contract IR's nested
* `references: { table, columns }` shape so that the verifier's
* structural comparison stays explicit about which side it's reading.
*
* Implements `DiffableNode` so a foreign key is directly a table's diff-tree
* child. Foreign keys are frequently unnamed (introspection may not carry a
* constraint name, and the contract side never invents one), so `id` is
* derived from the referencing/referenced coordinates rather than `name` —
* the same tuple that makes two FK constraints the same constraint. This
* also serves as the comparison key: two FKs with the same coordinates are
* paired by the differ, and `isEqualTo` then compares the remaining
* attribute — the referential actions.
*/ var SqlForeignKeyIR = class SqlForeignKeyIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.foreignKey;
    columns;
    referencedTable;
    referencedColumns;
    constructor(input){
        super();
        this.columns = input.columns;
        this.referencedTable = input.referencedTable;
        this.referencedColumns = input.referencedColumns;
        if (input.referencedSchema !== void 0) this.referencedSchema = input.referencedSchema;
        if (input.name !== void 0) this.name = input.name;
        if (input.onDelete !== void 0) this.onDelete = input.onDelete;
        if (input.onUpdate !== void 0) this.onUpdate = input.onUpdate;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        const resolvedReferencedNamespace = input.resolvedReferencedNamespace ?? input.referencedSchema;
        if (resolvedReferencedNamespace !== void 0) this.resolvedReferencedNamespace = resolvedReferencedNamespace;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        const referencedNamespace = this.resolvedReferencedNamespace ?? "";
        return `foreign-key:${this.columns.join(",")}->${referencedNamespace}.${this.referencedTable}(${this.referencedColumns.join(",")})`;
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.foreignKey;
    }
    /**
	* Referential-action comparison with `this` as the expected side, matching
	* the relational walk's `getReferentialActionMismatches`: `noAction` is the
	* database default and equivalent to an undeclared action, and drift is
	* flagged only when the expected side declares a (normalized) action.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlForeignKeyIR", SqlForeignKeyIR.is);
        return referentialActionMatches(this.onDelete, node.onDelete) && referentialActionMatches(this.onUpdate, node.onUpdate);
    }
};
function referentialActionMatches(expected, actual) {
    const normalizedExpected = expected === "noAction" ? void 0 : expected;
    if (normalizedExpected === void 0) return true;
    return normalizedExpected === (actual === "noAction" ? void 0 : actual);
}
//#endregion
//#region src/ir/sql-index-ir.ts
/**
* Schema IR node for a secondary index as observed by introspection.
* Unlike the Contract IR `Index`, the Schema IR carries an explicit
* `unique` field — introspection sees the underlying index regardless
* of whether the user expressed it as `@@index` or `@@unique`, and the
* verifier needs to distinguish them when comparing to the Contract.
*
* Implements `DiffableNode` so an index is directly a table's diff-tree
* child. Indexes are frequently unnamed, so `id` is derived from the column
* tuple — the same tuple that makes two indexes the same index, so it
* doubles as the pairing key. `isEqualTo` is symmetric structural equality
* on the remaining attributes: `unique`, `type`, and `options`. A unique
* index and a non-unique index on the same columns are different objects
* and are not equal — there is no "stronger satisfies weaker".
*
* Deliberately column-tuple-only (not `unique`): a contract `@@index`
* (non-unique) must still pair against a live unique index of the same
* columns so the differ can report the mismatch as an incompatible index
* change rather than a spurious missing+extra pair — see
* `planner.unique-index-structural.test.ts`. The corollary is that two
* indexes legitimately coexisting on one table with the *same* column tuple
* (e.g. a unique index and a redundant plain index Postgres has no problem
* hosting side by side) collide on this id; the postgres control adapter's
* introspection keeps only one such index per table+column-tuple rather
* than handing the differ two same-tree siblings it cannot represent.
*/ var SqlIndexIR = class SqlIndexIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.index;
    columns;
    unique;
    constructor(input){
        super();
        this.columns = input.columns;
        this.unique = input.unique;
        if (input.name !== void 0) this.name = input.name;
        if (input.type !== void 0) this.type = input.type;
        if (input.options !== void 0) this.options = input.options;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return `index:${this.columns.join(",")}`;
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.index;
    }
    /**
	* Symmetric structural equality: two paired index nodes are equal iff their
	* `unique` flag, `type`, and (loosely-compared) `options` all match. There
	* is no satisfaction — a unique index does not equal a non-unique index.
	* `options` compares loosely (introspection stringifies reloptions); `type`
	* compares strictly after the introspection-side btree→undefined
	* normalization done at construction.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlIndexIR", SqlIndexIR.is);
        return this.unique === node.unique && this.type === node.type && indexOptionsLooselyEqual(this.options, node.options);
    }
};
/**
* Option-bag equality ported from the relational walk: same key set, values
* compared via `String()` coercion — Postgres introspection returns
* reloptions values as raw strings (`'70'`, `'false'`) while contract option
* leaves are typed (number, boolean, string).
*/ function indexOptionsLooselyEqual(a, b) {
    const aKeys = a ? Object.keys(a).sort() : [];
    const bKeys = b ? Object.keys(b).sort() : [];
    if (aKeys.length !== bKeys.length) return false;
    for(let i = 0; i < aKeys.length; i += 1)if (aKeys[i] !== bKeys[i]) return false;
    if (aKeys.length === 0) return true;
    for (const key of aKeys)if (String(a?.[key]) !== String(b?.[key])) return false;
    return true;
}
//#endregion
//#region src/ir/sql-unique-ir.ts
/**
* Schema IR node for a table-level unique constraint as observed by
* introspection.
*
* Implements `DiffableNode` so a unique constraint is directly a table's
* diff-tree child. Unique constraints are frequently unnamed, so `id` is
* derived from the column tuple rather than `name` — the column tuple is
* also what makes two unique constraints the same constraint, so it doubles
* as the pairing key. There are no further attributes to compare once
* columns are equal (the differ pairs on `id`), so `isEqualTo` is identity.
*/ var SqlUniqueIR = class SqlUniqueIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.unique;
    columns;
    constructor(input){
        super();
        this.columns = [
            ...input.columns
        ];
        if (input.name !== void 0) this.name = input.name;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return `unique:${this.columns.join(",")}`;
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.unique;
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlUniqueIR", SqlUniqueIR.is);
        return this.id === node.id;
    }
};
//#endregion
//#region src/ir/sql-table-ir.ts
/**
* Schema IR node for a single table as observed by introspection.
*
* Unlike the Contract IR `StorageTable`, this carries the table's
* `name` — introspection queries return tables as arrays and the
* verifier keys them into `SqlSchemaIR.tables` afterwards, so the name
* stays on the table object for downstream call sites that walk
* `Object.values(schema.tables)`.
*
* The constructor normalises nested IR-class fields so downstream
* walks see a uniform AST regardless of whether the input was a
* plain-data literal (from introspection) or already-constructed
* class instances.
*
* Implements `DiffableNode` so a flat (single-schema) tree is directly
* diffable: `id` is the table name; `isEqualTo` is identity (the table's
* structural drift is entirely expressed by its children); `children()`
* yields every column, the primary key (when present), every foreign key,
* unique, index, and check constraint — the same composition and order as
* the Postgres table node, minus policies.
*/ var SqlTableIR = class extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.table;
    name;
    columns;
    foreignKeys;
    uniques;
    indexes;
    constructor(input){
        super();
        this.name = input.name;
        this.columns = Object.freeze(Object.fromEntries(Object.entries(input.columns).map(([key, col])=>[
                key,
                col instanceof SqlColumnIR ? col : new SqlColumnIR(col)
            ])));
        this.foreignKeys = Object.freeze(input.foreignKeys.map((fk)=>fk instanceof SqlForeignKeyIR ? fk : new SqlForeignKeyIR(fk)));
        this.uniques = Object.freeze(input.uniques.map((u)=>u instanceof SqlUniqueIR ? u : new SqlUniqueIR(u)));
        this.indexes = Object.freeze(input.indexes.map((i)=>i instanceof SqlIndexIR ? i : new SqlIndexIR(i)));
        if (input.primaryKey !== void 0) this.primaryKey = input.primaryKey instanceof PrimaryKey ? input.primaryKey : new PrimaryKey(input.primaryKey);
        if (input.annotations !== void 0) this.annotations = input.annotations;
        if (input.checks !== void 0 && input.checks.length > 0) this.checks = Object.freeze(input.checks.map((c)=>c instanceof SqlCheckConstraintIR ? c : new SqlCheckConstraintIR(c)));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.name;
    }
    isEqualTo(other) {
        return this.id === other.id;
    }
    children() {
        return [
            ...Object.values(this.columns),
            ...this.primaryKey ? [
                this.primaryKey
            ] : [],
            ...this.foreignKeys,
            ...this.uniques,
            ...this.indexes,
            ...this.checks ?? []
        ];
    }
};
//#endregion
//#region src/ir/sql-schema-ir.ts
/**
* Root Schema IR node representing the complete database schema as
* observed by introspection. Target-agnostic; used by both verifiers
* (compare against intended Contract storage) and migration planners
* (derive operations needed to reconcile).
*
* The constructor normalises nested `SqlTableIR` instances so
* downstream walks see a uniform AST regardless of whether the input
* was a plain-data literal or already-constructed class instances.
*
* Implements `DiffableNode` as the root of a flat (single-schema) diff
* tree: `id` is the fixed sentinel `'database'` (roots have no siblings),
* `isEqualTo` is identity (a container has no own attributes), and
* `children()` yields the table nodes.
*/ var SqlSchemaIR = class extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.schema;
    tables;
    constructor(input){
        super();
        this.tables = Object.freeze(Object.fromEntries(Object.entries(input.tables).map(([key, t])=>[
                key,
                t instanceof SqlTableIR ? t : new SqlTableIR(t)
            ])));
        if (input.annotations !== void 0) this.annotations = input.annotations;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$framework$2d$components$2f$dist$2f$ir$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["freezeNode"])(this);
    }
    get id() {
        return "database";
    }
    isEqualTo(other) {
        return this.id === other.id;
    }
    children() {
        return Object.values(this.tables);
    }
};
;
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export a as SqlForeignKeyIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlForeignKeyIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export c as SqlCheckConstraintIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlCheckConstraintIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export d as assertNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export f as defineNonEnumerable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineNonEnumerable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export h as relationalNodeGranularity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "relationalNodeGranularity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export i as SqlIndexIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlIndexIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export l as PrimaryKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export m as relationalNodeEntityKind>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "relationalNodeEntityKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export o as SqlColumnIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlColumnIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export p as RelationalSchemaNodeKind>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelationalSchemaNodeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export r as SqlUniqueIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlUniqueIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript) <export u as SqlSchemaIRNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlSchemaIRNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$sql$2d$schema$2d$ir$2f$dist$2f$types$2d$pxgoVAJq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/sql-schema-ir/dist/types-pxgoVAJq.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/utils/dist/assertions.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertDefined",
    ()=>assertDefined,
    "invariant",
    ()=>invariant
]);
//#region src/assertions.ts
/**
* Asserts that a value is defined (not null or undefined).
* Use for invariants where the value should always exist at runtime.
*
* @throws Error if value is null or undefined
*
* @example
* ```typescript
* const table = storage.namespaces[namespaceId].entries.table[tableName];
* assertDefined(table, `Table "${tableName}" not found`);
* // table is now narrowed to non-nullable
* ```
*/ function assertDefined(value, message) {
    if (value === null || value === void 0) throw new Error(message);
}
/**
* Asserts that a condition is true.
* Use for invariants that should always hold at runtime.
*
* @throws Error if condition is false
*
* @example
* ```typescript
* invariant(columns.length > 0, 'Primary key must have at least one column');
* ```
*/ function invariant(condition, message) {
    if (!condition) throw new Error(message);
}
;
}),
"[project]/node_modules/@prisma-next/utils/dist/canonical-stringify.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canonicalStringify",
    ()=>canonicalStringify
]);
//#region src/canonical-stringify.ts
/**
* Produces a deterministic, JSON-like string representation of a value.
*
* Designed for use as a stable identity / cache key. Two values that are
* structurally equivalent — regardless of object key insertion order —
* produce the same string. Two values that differ in any meaningful way
* (including types that JSON would conflate, like `BigInt(1)` vs `1`)
* produce different strings.
*
* Supported inputs:
* - `null`, `undefined` (distinguishable: `null` → `"null"`, `undefined` → `"undefined"`)
* - `boolean`, `string`, `number` (including `NaN`, `Infinity`, `-Infinity`)
* - `bigint` (suffixed with `n` to disambiguate from `number`)
* - `Date` (tagged + ISO string)
* - `Buffer` / `Uint8Array` (tagged + hex-encoded as `Bytes(<hex>)`)
* - Other `ArrayBuffer` views — `Int8Array`, `Uint16Array`, `Float64Array`,
*   `DataView`, etc. (tagged with the constructor name + hex-encoded over
*   the underlying bytes, e.g. `Uint16Array(<hex>)`). Note that the bytes
*   are read in host byte order, so callers that need cross-platform
*   stability for multi-byte typed arrays should normalize endianness
*   before passing the value in.
* - Arrays (order-preserving)
* - Plain objects (key-sorted) — only objects whose prototype is
*   `Object.prototype` or `null`. Non-plain objects (`Map`, `Set`,
*   `RegExp`, class instances, etc.) are rejected so they cannot silently
*   collapse to `{}` and collide with each other.
*
* Throws on `function`, `symbol`, circular references, non-plain objects,
* and objects with symbol-keyed properties (which `Object.keys` would
* silently drop). Callers that need to canonicalize any of these must
* convert them to a supported representation first.
*
* The output format is intentionally not JSON: the type tags and BigInt
* suffix mean it cannot be round-tripped via `JSON.parse`. The goal is
* keying, not serialization.
*
* @example
* ```typescript
* canonicalStringify({ a: 1, b: 2 }) === canonicalStringify({ b: 2, a: 1 })
* // → true
*
* canonicalStringify(1n) !== canonicalStringify(1)
* // → true
* ```
*/ function canonicalStringify(value) {
    return write(value, /* @__PURE__ */ new Set());
}
function write(value, seen) {
    if (value === null) return "null";
    if (value === void 0) return "undefined";
    switch(typeof value){
        case "boolean":
            return value ? "true" : "false";
        case "number":
            return writeNumber(value);
        case "bigint":
            return `${value.toString()}n`;
        case "string":
            return JSON.stringify(value);
        case "function":
            throw new TypeError("canonicalStringify: functions are not supported");
        case "symbol":
            throw new TypeError("canonicalStringify: symbols are not supported");
    }
    const obj = value;
    if (value instanceof Date) return `Date(${value.toISOString()})`;
    if (value instanceof Uint8Array) return `Bytes(${bytesToHex(value)})`;
    if (ArrayBuffer.isView(value)) return `${value.constructor.name}(${bytesToHex(new Uint8Array(value.buffer, value.byteOffset, value.byteLength))})`;
    if (seen.has(obj)) throw new TypeError("canonicalStringify: circular reference detected");
    seen.add(obj);
    try {
        if (Array.isArray(value)) return `[${value.map((item)=>write(item, seen)).join(",")}]`;
        return writePlainObject(obj, seen);
    } finally{
        seen.delete(obj);
    }
}
function writeNumber(value) {
    if (Number.isNaN(value)) return "NaN";
    if (value === Number.POSITIVE_INFINITY) return "Infinity";
    if (value === Number.NEGATIVE_INFINITY) return "-Infinity";
    if (value === 0 && 1 / value === Number.NEGATIVE_INFINITY) return "-0";
    return String(value);
}
function writePlainObject(obj, seen) {
    const proto = Object.getPrototypeOf(obj);
    if (proto !== Object.prototype && proto !== null) {
        const tag = proto?.constructor?.name ?? "unknown";
        throw new TypeError(`canonicalStringify: non-plain objects are not supported (got ${tag})`);
    }
    if (Object.getOwnPropertySymbols(obj).length > 0) throw new TypeError("canonicalStringify: objects with symbol-keyed properties are not supported");
    const keys = Object.keys(obj).sort();
    const parts = [];
    for (const key of keys)parts.push(`${JSON.stringify(key)}:${write(obj[key], seen)}`);
    return `{${parts.join(",")}}`;
}
function bytesToHex(bytes) {
    let out = "";
    for(let i = 0; i < bytes.length; i++){
        const byte = bytes[i];
        out += byte.toString(16).padStart(2, "0");
    }
    return out;
}
;
}),
"[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>castAs,
    "t",
    ()=>blindCast
]);
//#region src/casts.ts
/**
* **Last-resort escape hatch for unsafe type assertions. Not a sanctioned tool to reach for.**
*
* Before reaching for `blindCast`, **rewrite the surrounding code so the cast becomes
* unnecessary**: tighten an input type, add a runtime check that narrows via a type
* predicate, restructure a generic so the compiler can see the relationship you're
* asserting, or use {@link castAs} when the value already satisfies the target type.
* Only when no rewrite is feasible does `blindCast` become the right answer — and at
* that point, the `Reason` literal you supply must articulate the compromise in
* language a reviewer can evaluate.
*
* The reviewer **will** validate the `Reason`. If it doesn't hold up under scrutiny,
* that is not a signal to soften the reason; it is a signal to go back and solve the
* underlying type-system problem properly. An unconvincing justification is rework,
* not a free pass.
*
* `blindCast` is the auditable form of `as Foo` / `as unknown as Foo`: it bypasses
* the compiler's checks (the input type is `unknown`, the output type is whatever the
* caller asks for), but it forces the unsafety to be named at the call site instead of
* smuggled in via a bare `as`. The `Reason` type parameter exists only at compile
* time — it is not present in the emitted JavaScript — but it is grep-able and
* visible to future readers.
*
* @example
* ```typescript
* const stringValue = blindCast<
*   string,
*   "JSON.parse returns `unknown`; this field is documented to be a string in the API contract"
* >(parsed[key]);
* ```
*
* @typeParam TargetType - The type the caller is asserting the input has.
* @typeParam _Reason - A string literal describing why bypassing the type system is necessary here.
*                     Only meaningful at compile time. The reviewer evaluates whether it justifies the unsafety.
*/ function blindCast(input) {
    return input;
}
/**
* Type-checked, runtime pass-through alternative to a bare `as Type` cast.
*
* Use `castAs` when the value already satisfies the target type but you want to make
* the type assertion explicit at the call site — for example, when an inferred type is
* wider than the type you want to publish, or when a literal object should be tagged
* with its nominal interface. Unlike {@link blindCast}, the compiler still checks that
* the value is assignable to the target type, so this helper cannot smuggle in an
* unsafe assertion.
*
* `castAs` exists alongside `blindCast` so authors pick the right name at the call
* site: a `castAs` is type-checked and benign; a `blindCast` is the unsafe escape
* hatch. The split makes review faster — readers know which casts to scrutinize and
* which are pure annotations.
*
* @example
* ```typescript
* interface FancyObject {
*   key: string;
*   keyTwo: {
*     subKey: string;
*     subKeyTwo: number;
*   };
* }
*
* const typedObject = castAs<FancyObject>({
*   key: 'Chookede',
*   keyTwo: {
*     subKey: 'Choookeeeee',
*     subKeyTwo: 2,
*   },
* });
* ```
*
* @typeParam Type - The type to constrain and tag the value with. The value must be assignable to `Type`.
*/ function castAs(value) {
    return value;
}
;
}),
"[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export n as castAs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "castAs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript) <export t as blindCast>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blindCast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>ifDefined
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript)");
;
//#region src/defined.ts
/**
* Returns an object with the key/value if value is defined, otherwise an empty object.
*
* Use with spread to conditionally include optional properties while satisfying
* exactOptionalPropertyTypes. This is explicit about which properties are optional
* and won't inadvertently strip other undefined values.
*
* @example
* ```typescript
* // Instead of:
* const obj = {
*   required: 'value',
*   ...(optional ? { optional } : {}),
* };
*
* // Use:
* const obj = {
*   required: 'value',
*   ...ifDefined('optional', optional),
* };
* ```
*/ function ifDefined(key, value) {
    return value !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        [key]: value
    }) : {};
}
;
}),
"[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript) <export t as ifDefined>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ifDefined",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$defined$2d$BQWA85QH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/defined-BQWA85QH.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma-next/utils/dist/hash-content.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashContent",
    ()=>hashContent
]);
//#region src/hash-content.ts
/**
* Hashes a canonical-string representation of an execution into a bounded,
* opaque cache-key digest.
*
* Designed for use as the final step of `RuntimeMiddlewareContext.contentHash`
* implementations: family runtimes compose a canonical string from
* `meta.storageHash`, the rendered statement (or wire command), and
* canonicalized parameters via `canonicalStringify`, then pipe the result
* through this helper.
*
* Why hash the canonical string instead of using it directly as a `Map` key:
*
* 1. **Bounded memory.** A raw canonical key includes concrete parameter
*    values, so a query bound to a 10 MB JSON column or binary blob produces
*    a 10 MB cache key. With `maxEntries = 1000`, that scales to gigabytes
*    of cache keys alone. SHA-512 pins per-key cost at a fixed digest
*    length regardless of input size.
*
* 2. **Sensitive-data isolation.** The canonical string contains parameter
*    values verbatim. Cache keys flow into debug logs, Redis `KEYS`/`MONITOR`
*    output, persistence dumps, monitoring tools, and any user-supplied
*    `CacheStore` implementation. Hashing prevents PII / credentials /
*    tokens that appear in query parameters from showing up in any of those
*    surfaces.
*
* Algorithm choice — SHA-512 (`SHA-512` via the WebCrypto API):
*
* - **Portability.** WebCrypto (`globalThis.crypto.subtle`) is available in
*   every modern JavaScript runtime — Node, Deno, Bun, browsers, edge
*   workers — without importing a Node-specific module. This keeps the
*   helper usable in non-Node hosts where `node:crypto` is not available.
* - **Collision space.** 512 bits of output makes accidental collisions
*   astronomically improbable — far beyond what a cache needs, but the
*   incremental cost over 256-bit output is negligible and the headroom
*   is free.
* - **No additional dependency.** SHA-512 is part of the WebCrypto standard
*   set of digest algorithms; no third-party package needed.
*
* The function is `async` because the WebCrypto digest API is async by
* design. Callers must await the result.
*
* Output format: `sha512:HEXDIGEST` (128-char hex with the algorithm tag
* prefix). Self-describing so a future migration to a different hash
* produces visibly distinct keys, and consistent with the
* `sha256:HEXDIGEST` shape already used by `meta.storageHash`.
*
* @example
* ```typescript
* const canonical = `${exec.meta.storageHash}|${exec.sql}|${canonicalStringify(exec.params)}`;
* return await hashContent(canonical);
* // → 'sha512:8f3...e1c' (always 135 chars: 'sha512:' + 128 hex chars)
* ```
*/ async function hashContent(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-512", bytes);
    return `sha512:${Array.from(new Uint8Array(digest), (b)=>b.toString(16).padStart(2, "0")).join("")}`;
}
;
}),
"[project]/node_modules/@prisma-next/utils/dist/result.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notOk",
    ()=>notOk,
    "ok",
    ()=>ok,
    "okVoid",
    ()=>okVoid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/utils/dist/casts-DpaahrlC.mjs [app-rsc] (ecmascript)");
;
//#region src/result.ts
/**
* Generic Result type for representing success or failure outcomes.
*
* This is the standard way to return "expected failures" as values rather than
* throwing exceptions. See docs/Error Handling.md for the full taxonomy.
*
* Naming rationale:
* - `Ok<T>` / `NotOk<F>` mirror the `ok: true/false` discriminator
* - `NotOk` avoids collision with domain types like "Failure" or "Error"
* - `failure` property distinguishes from JS Error semantics
*/ /**
* Result class that implements both Ok and NotOk variants.
*/ var ResultImpl = class ResultImpl {
    ok;
    _value;
    _failure;
    constructor(ok, valueOrFailure){
        this.ok = ok;
        if (ok) this._value = valueOrFailure;
        else this._failure = valueOrFailure;
        Object.freeze(this);
    }
    get value() {
        if (!this.ok) throw new Error("Cannot access value on NotOk result");
        return this._value;
    }
    get failure() {
        if (this.ok) throw new Error("Cannot access failure on Ok result");
        return this._failure;
    }
    /**
	* Creates a successful result.
	*/ static ok(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(new ResultImpl(true, value));
    }
    /**
	* Creates an unsuccessful result.
	*/ static notOk(failure) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$utils$2f$dist$2f$casts$2d$DpaahrlC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(new ResultImpl(false, failure));
    }
    /**
	* Asserts that this result is Ok and returns the value.
	* Throws if the result is NotOk.
	*/ assertOk() {
        if (!this.ok) throw new Error("Expected Ok result but got NotOk");
        return this.value;
    }
    /**
	* Asserts that this result is NotOk and returns the failure.
	* Throws if the result is Ok.
	*/ assertNotOk() {
        if (this.ok) throw new Error("Expected NotOk result but got Ok");
        return this.failure;
    }
};
/**
* Creates a successful result.
*/ function ok(value) {
    return ResultImpl.ok(value);
}
/**
* Creates an unsuccessful result.
*/ function notOk(failure) {
    return ResultImpl.notOk(failure);
}
/**
* Singleton for void success results.
* Use this for validation checks that don't produce a value.
*/ const OK_VOID = ResultImpl.ok(void 0);
/**
* Returns a successful void result.
* Use this for validation checks that don't produce a value.
*/ function okVoid() {
    return OK_VOID;
}
;
}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeService",
    ()=>ComputeService,
    "bucket",
    ()=>bucket,
    "bucketContract",
    ()=>bucketContract,
    "compute",
    ()=>compute,
    "credentialsContract",
    ()=>credentialsContract,
    "http",
    ()=>http,
    "postgres",
    ()=>postgres,
    "postgresContract",
    ()=>postgresContract,
    "s3Credentials",
    ()=>s3Credentials,
    "s3StoreService",
    ()=>s3StoreService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$Doubjztg$2d$CWHCDiuX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/secret-Doubjztg-CWHCDiuX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/serializer-Ch1Tmx-2-D7cNhkEp.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$provisioned$2d$edges$2d$COr17uxy$2d$DymAGn_V$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/provisioned-edges-COr17uxy-DymAGn_V.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$BrrJarzc$2d$DeP50pBu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-BrrJarzc-DeP50pBu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export i as dependency>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__hydrateSync$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export r as hydrateSync>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__number$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export a as number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__resource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export m as resource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__service$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export _ as service>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export c as string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
;
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/index.mjs
/**
* The contract a provisioned Bucket provides — deliberately kind-equal to the
* storage module's `s3Contract` (`kind: 's3'`). `satisfies` compares KIND,
* not identity (mirrors `postgresContract`): a real bucket and the emulator
* are interchangeable at every `s3()` dependency slot. Cross-layer import of
* the storage module's contract is not allowed (layering: 2-shared-modules
* depends on 1-extensions, not the reverse), which is exactly the design
* rationale for kind-equality — the two contracts cooperate through their
* shared kind string, not through object identity.
*/ const bucketContract = Object.freeze({
    kind: "s3",
    __cmp: {
        url: "",
        bucket: "",
        accessKeyId: "",
        secretAccessKey: ""
    },
    satisfies: (required)=>required.kind === "s3"
});
function bucket(opts) {
    if (opts?.name !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__resource$3e$__["resource"])({
        name: opts.name,
        extension: "@prisma/composer-prisma-cloud",
        provides: bucketContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__["dependency"])({
        type: "s3",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                accessKeyId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                secretAccessKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>v
        },
        required: bucketContract
    });
}
const reservedParams = {
    port: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__number$3e$__["number"])({
        default: 3e3
    })
};
/**
* A Prisma Compute service — declarations only (deps + one input schema +
* build + the ports it exposes), no descriptor. The reserved `port` param
* rides its own channel (ADR-0042 leaves it untouched); a dependency named
* like it fails at authoring.
*
*   · run(address, boot) — the process controller: deserialize the platform
*     environment (keyed off `address`, the extension's ONE env read) into a
*     typed Config, re-emit it (and the input document row) under address-free
*     process-local stash keys, then call boot() to start the app's entry.
*   · load() / input() — called from inside the app's entry: read the stash;
*     load() hydrates + memoizes the deps, input() parses the input document,
*     replaces each `$secret` pointer with a redacting box over the named
*     platform var, validates with the declared schema, and memoizes (ADR-0042).
*   · origin() — this service's platform-assigned public origin, read from the
*     stash `run()` populates; memoized per process.
*   · port() — this service's resolved reserved port (the value `run()` routes
*     to and exports as PORT), read from that same stash via #processConfig();
*     defaults to 3000 when the platform binds none.
*
* The underlying node carries `extension: '@prisma/composer-prisma-cloud'` —
* the control-plane registry key `prisma-composer deploy` resolves through the
* app's `prisma-composer.config.ts` (ADR-0017). This module loads nothing at
* deploy time; nodes are pure data until run() or load() is called.
*/ var ComputeService = class {
    #resolved;
    #loadedDeps;
    #loadedInput;
    #origin;
    constructor(node){
        Object.assign(this, node);
    }
    #processConfig() {
        if (this.#resolved === void 0) this.#resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(this, "");
        return this.#resolved;
    }
    async run(address, boot) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(this, address);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(this, config);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$provisioned$2d$edges$2d$COr17uxy$2d$DymAGn_V$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"], address);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"])(this, address);
        const port = config.service["port"];
        if (typeof port === "number") process.env["PORT"] = String(port);
        return boot();
    }
    load() {
        if (this.#loadedDeps === void 0) this.#loadedDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__hydrateSync$3e$__["hydrateSync"])(this, this.#processConfig()));
        return this.#loadedDeps;
    }
    input() {
        if (this.#loadedInput === void 0) this.#loadedInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(this, ""));
        return this.#loadedInput;
    }
    /** This service's platform-assigned public origin — read from the stash
	*  run() populates and memoized per process. Throws if called before run()
	*  has stashed it (readOrigin's pinned message). */ origin() {
        this.#origin ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])();
        return this.#origin;
    }
    /** This service's resolved reserved port — the value run() routes to and
	*  exports as PORT — read the same way load() reads the stash. Defaults to
	*  3000 when the platform binds none. */ port() {
        const port = this.#processConfig().service["port"];
        if (typeof port !== "number") throw new Error(`service "${this.name}" resolved a non-numeric port — the reserved port param is number({ default: 3000 }), so a stashed config always carries a number here.`);
        return port;
    }
};
const compute = (def)=>{
    for (const reserved of Object.keys(reservedParams))if (reserved in def.deps) throw new Error(`compute(): dependency "${reserved}" collides with the reserved service param of the same name — rename the dependency.`);
    const instance = new ComputeService((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__service$3e$__["service"])({
        name: def.name,
        extension: "@prisma/composer-prisma-cloud",
        type: "compute",
        inputs: def.deps,
        params: reservedParams,
        ...def.input !== void 0 ? {
            input: def.input
        } : {},
        build: def.build,
        ...def.expose !== void 0 ? {
            expose: def.expose
        } : {}
    }));
    Object.freeze(instance);
    return instance;
};
const defaultHttpClient = (cfg)=>({
        url: cfg.url,
        fetch: (path, init)=>fetch(new URL(path, cfg.url), init)
    });
/**
* A service-to-service dependency. Its binding (what `load()` returns) is a
* derived HttpClient — a thin URL-anchored fetch wrapper (fetch is standard
* across runtimes — no driver, no runtime coupling). http() is a
* protocol-owned kind: the framework owns the transport, so the client is
* kind-canonical and derived from the contract, with no user client in the
* declaration (ADR-0015). The typed generated client arrives with the
* interface primitive (a later extension point).
*/ const http = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__["dependency"])({
        name: opts.name,
        type: "http",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>defaultHttpClient({
                    url: v.url
                })
        }
    });
/**
* The contract a Postgres provides — and the contract its consumers require.
* `satisfies` compares KIND, not identity: an extension module can be duplicated
* across a workspace (same rationale as the Symbol.for node brand), and every
* duplicate's contract must still satisfy. `__cmp` is the connection config a
* postgres offers; core never inspects it.
*/ const postgresContract = Object.freeze({
    kind: "postgres",
    __cmp: {
        url: ""
    },
    satisfies: (required)=>required.kind === "postgres"
});
function postgres(opts) {
    if (opts?.name !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__resource$3e$__["resource"])({
        name: opts.name,
        extension: "@prisma/composer-prisma-cloud",
        provides: postgresContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__["dependency"])({
        type: "postgres",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>v
        },
        required: postgresContract
    });
}
/**
* The contract the `s3-credentials` resource provides — a minted SigV4 key
* pair. `satisfies` compares KIND only (mirrors `postgresContract`); `__cmp` is
* the config the resource offers, which core never inspects.
*/ const credentialsContract = Object.freeze({
    kind: "credentials",
    __cmp: {
        accessKeyId: "",
        secretAccessKey: ""
    },
    satisfies: (required)=>required.kind === "credentials"
});
function s3Credentials(opts) {
    if (opts?.name !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__resource$3e$__["resource"])({
        name: opts.name,
        extension: "@prisma/composer-prisma-cloud",
        provides: credentialsContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__["dependency"])({
        type: "credentials",
        connection: {
            params: {
                accessKeyId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                secretAccessKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>v
        },
        required: credentialsContract
    });
}
/**
* The storage service authoring factory — a `compute` service routed to the
* `s3-store` lowering instead of `compute`'s. It is exactly `compute`'s
* runnable (run/load/input, deps, input schema, build, expose) with the
* routing `type` overridden to `'s3-store'`: nothing at runtime keys off
* `type` (the serializer keys off the deployment address and each param's
* owner/name, and `load`/`input` off deps/the input schema), so only the
* deploy-time descriptor lookup sees the override and routes to the
* extended-output lowering (§ 5). The return type is compute's exactly
* (including the reserved `port` param). The storage module (D4b) calls this
* with its `db`/`credentials` deps and `expose: { store: s3Contract }`.
*
* `compute()`'s result is a `ComputeService` instance — its run/load/input/
* origin methods live on the class prototype, not as the instance's own
* properties, so a plain object spread (`{ ...node }`) would silently drop
* them. Building a fresh `ComputeService` from the same data fields (which
* `{ ...node }` DOES copy — they're the node's own enumerable properties)
* with `type` overridden keeps every method intact.
*/ function s3StoreService(def) {
    const instance = new ComputeService({
        ...compute(def),
        type: "s3-store"
    });
    Object.freeze(instance);
    return instance;
}
;
}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/pg-connection-CadPZuEK-CF3FsSQu.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>retryTransientConnect,
    "r",
    ()=>withConnectionRetry,
    "t",
    ()=>normalizeSslMode
]);
//#region ../../1-prisma-cloud/1-extensions/target/dist/pg-connection-CadPZuEK.mjs
/** Connection resilience helpers for Prisma Postgres cold-starts (FT-5226); no heavy imports (no `effect`/`alchemy`/`pg`), so the deploy lowerings, the pnPostgres runtime client, and bun-runnable services (the storage store, via the pure `@internal/prisma-cloud/connection` subpath) all share one implementation. */ /** Network-level socket failures node-postgres surfaces as `err.code`. */ const TRANSIENT_CODES = /* @__PURE__ */ new Set([
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT",
    "EPIPE",
    "ENOTFOUND",
    "EAI_AGAIN"
]);
/** Connection-establishment failure messages (no useful `err.code`). */ const TRANSIENT_MESSAGE_FRAGMENTS = [
    "upstream database",
    "connection terminated",
    "connection refused",
    "terminating connection",
    "server closed the connection",
    "connection timeout",
    "timeout expired"
];
/** Whether an error is a transient connection failure worth retrying, as opposed to a real query error that must surface at once. */ function isTransientConnectionError(error) {
    if (typeof error !== "object" || error === null) return false;
    const code = "code" in error && typeof error.code === "string" ? error.code : void 0;
    if (code !== void 0 && TRANSIENT_CODES.has(code)) return true;
    const message = "message" in error && typeof error.message === "string" ? error.message.toLowerCase() : "";
    return TRANSIENT_MESSAGE_FRAGMENTS.some((fragment)=>message.includes(fragment));
}
/**
* Rewrites a deprecating `sslmode` (`require`/`prefer`/`verify-ca`) to the
* explicit `verify-full` these already mean, silencing node-postgres's
* deprecation warning. `disable`/`no-verify`/unset are left untouched.
*/ function normalizeSslMode(url) {
    let parsed;
    try {
        parsed = new URL(url);
    } catch  {
        return url;
    }
    const sslmode = parsed.searchParams.get("sslmode");
    if (sslmode === "require" || sslmode === "prefer" || sslmode === "verify-ca") {
        parsed.searchParams.set("sslmode", "verify-full");
        return parsed.toString();
    }
    return url;
}
/**
* Retries an operation past a transient connection failure, bounded (default
* ~1 min). `shouldRetry` decides what's transient — defaults to retrying
* everything; the runtime client passes {@link isTransientConnectionError}.
*/ async function withConnectionRetry(operation, opts = {}) {
    const attempts = opts.attempts ?? 12;
    const delayMs = opts.delayMs ?? 5e3;
    const sleep = opts.sleep ?? ((ms)=>new Promise((resolve)=>setTimeout(resolve, ms)));
    const shouldRetry = opts.shouldRetry ?? (()=>true);
    let lastError;
    for(let attempt = 1; attempt <= attempts; attempt++)try {
        return await operation();
    } catch (error) {
        if (!shouldRetry(error)) throw error;
        lastError = error;
        if (attempt < attempts) await sleep(delayMs);
    }
    throw lastError;
}
/** Retries acquiring a connection past a transient cold-start; {@link withConnectionRetry} with {@link isTransientConnectionError} fixed as the predicate. */ function retryTransientConnect(acquire, opts = {}) {
    return withConnectionRetry(acquire, {
        ...opts,
        shouldRetry: isTransientConnectionError
    });
}
;
}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-DmPGOIm2-3V7kdn8T.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "i",
    ()=>pnPostgres,
    "n",
    ()=>isPnPostgresResourceNode,
    "r",
    ()=>pnContract,
    "t",
    ()=>PnPostgresResourceNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$BrrJarzc$2d$DeP50pBu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-BrrJarzc-DeP50pBu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$pg$2d$connection$2d$CadPZuEK$2d$CF3FsSQu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/pg-connection-CadPZuEK-CF3FsSQu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__ResourceNodeBase$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export r as ResourceNodeBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export i as dependency>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export a as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export c as string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma-next/postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/prisma-next-DmPGOIm2.mjs
/**
* The `prisma-next` resource node: a core Resource node plus `config`, the
* `prisma-next.config.ts` path the deploy-only migration lowering loads to
* find the migrations directory — the app build never imports it.
*/ var PnPostgresResourceNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__ResourceNodeBase$3e$__["ResourceNodeBase"] {
    config;
    constructor(def){
        super({
            name: def.name,
            extension: "@prisma/composer-prisma-cloud",
            provides: def.contract
        });
        this.config = def.config;
        if (def.targetRef !== void 0) this.targetRef = def.targetRef;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
/** Narrows `ctx.node` to a `pnPostgres` resource node so the deploy lowering reads `config` without a bare cast. Structural, never `instanceof`. */ function isPnPostgresResourceNode(node) {
    return node.kind === "resource" && node.type === "prisma-next" && "config" in node && typeof node.config === "string";
}
function pnContract(contract) {
    const value = {
        kind: "prisma-next",
        __cmp: {
            contractJson: contract
        },
        satisfies: (required)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$BrrJarzc$2d$DeP50pBu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(required) !== void 0) return true;
            const requiredHash = storageHashOf(required);
            return requiredHash !== void 0 && requiredHash === storageHashOf(value);
        }
    };
    return Object.freeze(value);
}
function pnPostgres(arg) {
    if (!isPnPostgresContract(arg)) return new PnPostgresResourceNode(arg);
    const contract = arg;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__dependency$3e$__["dependency"])({
        type: "prisma-next",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: ({ url })=>bindLazyClient(contract, url)
        },
        required: contract
    });
}
function isPnPostgresContract(value) {
    return typeof value === "object" && value !== null && "kind" in value && value.kind === "prisma-next" && "__cmp" in value && "satisfies" in value;
}
/**
* The hydrated binding: `url` as delivered, `client` built by `buildClient`
* on first access. Construction stays out of hydrate because the runtime
* validates `contractJson` eagerly — deferring it keeps a bad contract from
* poisoning `load()` and spares URL-only consumers the cost (ADR-0040).
*/ function bindLazyClient(contract, url) {
    let client;
    return Object.freeze({
        url,
        get client () {
            client ??= buildClient(contract, url);
            return client;
        }
    });
}
/**
* Builds the typed Prisma Next client over a connection pool that rides out
* a transient cold-start (FT-5226). We pass our own `pg.Pool` rather than a
* bare `url`: the runtime's bare-`url` connect is a one-shot that fails
* permanently, but a pool connects lazily on first query, so a bounded retry there suffices.
*/ function buildClient(contract, url) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2d$next$2f$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
        contractJson: contract.__cmp.contractJson,
        binding: {
            kind: "pgPool",
            pool: resilientPool(url)
        }
    });
}
/**
* A `pg.Pool` whose connection acquisition retries a transient cold-start
* (bounded ~1 min). Only `pool.connect()` is wrapped — a real query error
* still surfaces at once from `client.query()`.
*/ function resilientPool(url) {
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool({
        connectionString: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$pg$2d$connection$2d$CadPZuEK$2d$CF3FsSQu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(url),
        connectionTimeoutMillis: 2e4,
        idleTimeoutMillis: 5e3
    });
    pool.on("error", (err)=>console.error("pg pool idle client error", err));
    const acquire = pool.connect.bind(pool);
    pool.connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$pg$2d$connection$2d$CadPZuEK$2d$CF3FsSQu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(()=>acquire()));
    return pool;
}
/** Reads `__cmp.contractJson.storage.storageHash` off a `prisma-next` Contract, defensively — `__cmp` is opaque to core, so nothing guarantees its shape without a runtime check. */ function storageHashOf(contract) {
    if (contract === void 0) return void 0;
    const cmp = contract.__cmp;
    if (typeof cmp !== "object" || cmp === null || !("contractJson" in cmp)) return void 0;
    const contractJson = cmp.contractJson;
    if (typeof contractJson !== "object" || contractJson === null || !("storage" in contractJson)) return;
    const storage = contractJson.storage;
    if (typeof storage !== "object" || storage === null || !("storageHash" in storage)) return void 0;
    const hash = storage.storageHash;
    return typeof hash === "string" ? hash : void 0;
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-DmPGOIm2-3V7kdn8T.mjs [app-rsc] (ecmascript) <export i as pnPostgres>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "pnPostgres",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-DmPGOIm2-3V7kdn8T.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-DmPGOIm2-3V7kdn8T.mjs [app-rsc] (ecmascript) <export r as pnContract>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "pnContract",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-DmPGOIm2-3V7kdn8T.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$BrrJarzc$2d$DeP50pBu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-BrrJarzc-DeP50pBu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/prisma-next-DmPGOIm2-3V7kdn8T.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$prisma$2d$next$2d$DmPGOIm2$2d$3V7kdn8T$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/provisioned-edges-COr17uxy-DymAGn_V.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>provisionedEdges,
    "i",
    ()=>STREAMS_API_KEY_ENV,
    "n",
    ()=>SELF_ORIGIN,
    "o",
    ()=>streamsApiKeyNeed,
    "r",
    ()=>STREAMS_API_KEY,
    "t",
    ()=>RESERVED_PROVIDER_PARAMS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/serializer-Ch1Tmx-2-D7cNhkEp.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__provisionNeed$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export p as provisionNeed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$service$2d$rpc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/service-rpc.mjs [app-rsc] (ecmascript)");
;
;
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/provisioned-edges-COr17uxy.mjs
/**
* The service's own origin as a reserved provider param (ADR-0031): the ONE
* brand and the ONE entry — shared by control.ts (which registers the
* deploy-side value function that resolves the provisioned service's
* `endpointDomain` — see its `selfOriginValue`) and compute.ts (which
* validates and stashes the row at boot through the generic
* `stashProviderParams` loop), so writer and reader cannot drift.
*
* Unlike the key-minting brands (`service-keys.ts`, `streams-keys.ts`) this
* brand has no provisioner and no consumer edges: the value derives from the
* service's OWN provisioned attributes, so control.ts registers it as a
* service-derived provider param (`descriptors/shared.ts`'s
* `ServiceProviderParam`) and the descriptor writes it for EVERY compute
* service, exposing or not.
*
* This module is reachable from the RUNTIME/authoring side — it must never
* import `@internal/lowering` or `effect`, or those tokens leak into a user
* service's bundle (the deploy-side value function lives in control.ts, the
* control-plane-only entry).
*/ /** ADR-0031's brand for the service's own origin — control.ts registers the deploy-side value function under this. */ const SELF_ORIGIN = Symbol.for("prisma:self-origin");
/**
* The reserved provider param for the origin row: the var name is `ORIGIN`,
* derived through `configKey` at both ends (`configKey(address, …)` at
* deploy, `configKey('', …)` — `COMPOSER_ORIGIN` — at boot, where
* `readOrigin` reads it back). `brand` is `SELF_ORIGIN` — control.ts looks
* its deploy-side value function up by this field.
*/ const ORIGIN_PARAM = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string"),
    brand: SELF_ORIGIN
};
/**
* RPC's reserved provider param (ADR-0030/ADR-0031): the declaration —
* name + schema + brand — for the accepted-keys set a provider stores, shared
* by `control.ts` (which registers the deploy-side `value(refs)` that mints
* and aggregates it — see its `rpcAcceptedKeysValue`) and `compute.ts` (which
* validates and stashes it at boot), so writer and reader cannot drift.
* Finding the edges themselves is `provisioned-edges.ts`'s generic,
* brand-blind scan — RPC is not special-cased anywhere in this target.
*
* This module is reachable from the RUNTIME/authoring side — it must never
* import `@internal/lowering` or `effect`, or those tokens leak into a user
* service's bundle (the deploy-side `value(refs)` lives in control.ts, the
* control-plane-only entry).
*/ /**
* The reserved provider param for RPC's accepted-keys set: the var name is
* `RPC_ACCEPTED_KEYS`, derived through `configKey` at both ends
* (`configKey(address, …)` at deploy, `configKey('', …)` at boot — the
* address-free form is `@internal/service-rpc`'s `RPC_ACCEPTED_KEYS_ENV`). `brand` is
* `RPC_PEER_KEY`, the same brand `perBindingToken()`'s need carries — control.ts
* looks its `value(refs)` up by this field.
*/ const RPC_ACCEPTED_KEYS_PARAM = {
    name: "RPC_ACCEPTED_KEYS",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string[]"),
    brand: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$service$2d$rpc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RPC_PEER_KEY"]
};
/** ADR-0031's need brand for the streams module's bearer key — control.ts registers the provisioner under this. */ const STREAMS_API_KEY = Symbol.for("prisma:streams/api-key");
/**
* The provisioning need `durableStreams()`'s `apiKey` param declares: an
* unguessable value the target mints ONCE PER PROVIDER (not per edge) —
* `@prisma/streams-server` authenticates a single `API_KEY`, so every
* consumer of one streams module must present the same value. Per-provider
* cardinality is provisioner policy (ADR-0031), invisible to core.
*/ const streamsApiKeyNeed = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__provisionNeed$3e$__["provisionNeed"])(STREAMS_API_KEY);
/**
* The reserved provider param for the streams bearer key: the var name is
* `STREAMS_API_KEY`. `brand` is `STREAMS_API_KEY` itself (the same symbol
* `streamsApiKeyNeed()`'s need carries) — control.ts looks its `value(refs)`
* up by this field.
*/ const STREAMS_API_KEY_PARAM = {
    name: "STREAMS_API_KEY",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string"),
    brand: STREAMS_API_KEY
};
/** The address-free name compute.ts re-stashes to and the streams entrypoint reads. */ const STREAMS_API_KEY_ENV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$Ch1Tmx$2d$2$2d$D7cNhkEp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])("", {
    owner: "service",
    name: STREAMS_API_KEY_PARAM.name
});
/**
* The list of provider-side reserved params the boot path validates and
* stashes (ADR-0031): every brand's `{name, schema, brand}` declaration,
* collected from that brand's own module (`service-keys.ts`,
* `streams-keys.ts`, `origin-key.ts`) so `compute.ts` names no brand itself.
*
* This list exists separately from `control.ts`'s deploy-side registry
* (`PROVIDER_PARAMS`) because `control.ts` is deploy-only code — it imports
* `@internal/lowering` and `effect` to mint values — and a booted service
* must never import it. This module is reachable from a user service's
* bundle through `compute.ts`, so it must never import `@internal/lowering`,
* `effect`, `alchemy`, or `control.ts`.
*
* This is the single source of which reserved provider params exist:
* control.ts builds `PROVIDER_PARAMS` by mapping over this list and looking
* up each entry's deploy-side value function (edge-derived `value(refs)` or
* service-derived `valueForService(provisioned, address)`) by its `brand`,
* throwing at module load if one is missing. Adding a brand means adding its
* entry here, plus its deploy-side value function in control.ts — a brand
* registered for deploy but absent here is no longer expressible, because
* deploy no longer names its own param set independently.
*/ const RESERVED_PROVIDER_PARAMS = [
    RPC_ACCEPTED_KEYS_PARAM,
    STREAMS_API_KEY_PARAM,
    ORIGIN_PARAM
];
/**
* Every provisioned edge in the graph. Core resolves and mints these (one
* value per edge, keyed by `edgeId`); this scan is how the target finds them
* again when it gathers a provider's inbound values.
*/ function provisionedEdges(graph) {
    const edges = [];
    for (const edge of graph.edges){
        if (edge.kind !== "dependency") continue;
        const consumer = graph.nodes.find((n)=>n.id === edge.to)?.node;
        if (consumer === void 0 || consumer.kind !== "service") continue;
        const slot = consumer.inputs[edge.input];
        if (slot === void 0) continue;
        for (const param of Object.values(slot.connection.params)){
            const brand = param.provision?.brand;
            if (brand === void 0) continue;
            edges.push({
                edgeId: `${edge.to}.${edge.input}`,
                consumerAddress: edge.to,
                input: edge.input,
                providerAddress: edge.from,
                brand
            });
            break;
        }
    }
    return edges;
}
;
}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-BrrJarzc-DeP50pBu.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>requiredPackHeadOf,
    "t",
    ()=>requiredPackHead
]);
//#region ../../1-prisma-cloud/1-extensions/target/dist/required-pack-head-BrrJarzc.mjs
/**
* A `prisma-next`-kind required contract carrying a pack-head claim instead
* of a contract value. Wireable to any `pnContract()` provider (wireability
* only); the deploy preflight enforces that the wired resource's PN config
* lists the pack at the required head.
*/ function requiredPackHead(req) {
    return Object.freeze({
        kind: "prisma-next",
        __cmp: {
            contractJson: void 0,
            requiredPackHead: req
        },
        satisfies: (required)=>{
            const other = requiredPackHeadOf(required);
            return other !== void 0 && other.packId === req.packId && other.headHash === req.headHash;
        }
    });
}
/** Reads `__cmp.requiredPackHead` off a Contract, defensively — `__cmp` is opaque to core, so nothing guarantees its shape without a runtime check. */ function requiredPackHeadOf(contract) {
    if (contract === void 0) return void 0;
    const cmp = contract.__cmp;
    if (typeof cmp !== "object" || cmp === null || !("requiredPackHead" in cmp)) return void 0;
    const req = cmp.requiredPackHead;
    if (typeof req !== "object" || req === null) return void 0;
    if (!("packId" in req) || typeof req.packId !== "string") return void 0;
    if (!("headHash" in req) || typeof req.headHash !== "string") return void 0;
    return {
        packId: req.packId,
        headHash: req.headHash
    };
}
;
}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/secret-Doubjztg-CWHCDiuX.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isGeneratedParamSource,
    "c",
    ()=>secretName,
    "i",
    ()=>isEnvParamSource,
    "n",
    ()=>envSecret,
    "o",
    ()=>paramBindingFor,
    "r",
    ()=>generatedParam,
    "s",
    ()=>paramName,
    "t",
    ()=>envParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__isParamSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export s as isParamSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__paramSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export f as paramSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__secretSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export g as secretSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/secret-Doubjztg.mjs
/**
* Brands the payload `envParam` builds. Core's `paramSource()` is a public
* SPI, so a user could bypass `envParam` and bind a raw `paramSource('x')`;
* the brand lets `paramName` reject such a source (or another target's) with
* a clear error instead of reading an absent `.name`.
*/ const PRISMA_CLOUD_PARAM_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Symbol.for("prisma:prisma-cloud-param-source"));
const RESERVED_PARAM_PREFIX = "COMPOSER_";
const POISONED_PARAM_NAMES = /* @__PURE__ */ new Set([
    "DATABASE_URL",
    "DATABASE_URL_POOLED"
]);
/**
* Binds a param slot to a named Prisma Cloud platform env var — the non-secret
* sibling of `envSecret` (spec: env-sourced config params). The platform
* injects the value into the running instance per stage; the param's own
* schema validates it at boot, unredacted. The name may not use the
* framework's reserved `COMPOSER_` prefix or the poisoned
* `DATABASE_URL(_POOLED)` keys — same parity as `envSecret`.
*/ function envParam(name) {
    if (typeof name !== "string" || name.length === 0) throw new Error("envParam() requires a non-empty platform env-var name, e.g. envParam('APP_ORIGIN').");
    if (name.startsWith(RESERVED_PARAM_PREFIX)) throw new Error(`envParam name "${name}" may not start with "${RESERVED_PARAM_PREFIX}" — that prefix is reserved for the framework's own generated config keys.`);
    if (POISONED_PARAM_NAMES.has(name)) throw new Error(`envParam name "${name}" is reserved — ${[
        ...POISONED_PARAM_NAMES
    ].join(" and ")} are poisoned at project provision and cannot back a param.`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__paramSource$3e$__["paramSource"])({
        [PRISMA_CLOUD_PARAM_SOURCE]: true,
        name
    });
}
/** True only for a payload that `envParam` built — i.e. one carrying the brand. */ function isEnvParamPayload(payload) {
    return typeof payload === "object" && payload !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(payload)[PRISMA_CLOUD_PARAM_SOURCE] === true;
}
/** True iff a resolved param value is an env-sourced pointer this target built (as opposed to a literal, or a foreign/raw `ParamSource`). */ function isEnvParamSource(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__isParamSource$3e$__["isParamSource"])(value) && isEnvParamPayload(value.payload);
}
/**
* Brands the payload `generatedParam` builds — a distinct brand from
* `envParam`'s, so `isGeneratedParamSource` and `isEnvParamSource` are mutually
* exclusive even though both are `ParamSource`s.
*/ const PRISMA_CLOUD_GENERATED_PARAM_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Symbol.for("prisma:prisma-cloud-generated-param-source"));
const GENERATED_PARAM_DEFAULT_BYTES = 32;
const GENERATED_PARAM_MIN_BYTES = 16;
const GENERATED_PARAM_MAX_BYTES = 1024;
/**
* Binds an input leaf to a value the target GENERATES at deploy — the sibling
* of `envParam` whose value comes from deploy-time generation instead of the
* environment. The generated value is produced once and persisted in deploy
* state, so it is stable across redeploys (rotation is destroy/recreate). It is
* config, not a secret; `redacted` is an orthogonal facet (default `true`).
* `bytes` must be an integer between 16 and 1024 (default 32).
*/ function generatedParam(opts = {}) {
    const bytes = opts.bytes ?? GENERATED_PARAM_DEFAULT_BYTES;
    const redacted = opts.redacted ?? true;
    if (!Number.isInteger(bytes) || bytes < GENERATED_PARAM_MIN_BYTES || bytes > GENERATED_PARAM_MAX_BYTES) throw new Error(`generatedParam() bytes must be an integer between ${GENERATED_PARAM_MIN_BYTES} and ${GENERATED_PARAM_MAX_BYTES} (got ${String(bytes)}).`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__paramSource$3e$__["paramSource"])({
        [PRISMA_CLOUD_GENERATED_PARAM_SOURCE]: true,
        bytes,
        redacted
    });
}
/** True only for a payload that `generatedParam` built — i.e. one carrying the brand. */ function isGeneratedParamPayload(payload) {
    return typeof payload === "object" && payload !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(payload)[PRISMA_CLOUD_GENERATED_PARAM_SOURCE] === true;
}
/** True iff a resolved value is a generated-param source this target built (as opposed to a literal, an `envParam` source, or a foreign/raw `ParamSource`). */ function isGeneratedParamSource(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__isParamSource$3e$__["isParamSource"])(value) && isGeneratedParamPayload(value.payload);
}
/**
* Reads the Prisma Cloud env-var name back out of a param binding's opaque
* source. A source not built by `envParam` (a raw `paramSource(...)` or
* another target's source) carries no name — reject it here. `paramName` runs
* in preflight and at serialize before any value ever crosses the wire, so a
* foreign source fails early and clearly rather than producing a broken
* deploy with an undefined name.
*/ function paramName(binding) {
    const { binding: bound } = binding;
    if (!isEnvParamSource(bound)) throw new Error(`param slot "${binding.slot}" of service "${binding.serviceAddress}" is bound to a source not created by envParam() — bind env-sourced params with envParam('NAME') from @prisma/composer-prisma-cloud.`);
    return bound.payload.name;
}
/**
* Finds the manifest entry for one service param slot. `serialize` calls this
* only after confirming `buildConfig` resolved the slot to a `ParamSource`
* (`isParamSource(value)`), so a miss here means `graph.params` and the
* resolved `Config` have drifted — a Load invariant violation, surfaced
* loudly rather than producing a pointer row with an undefined name.
*/ function paramBindingFor(bindings, serviceAddress, slot) {
    const binding = bindings.find((b)=>b.serviceAddress === serviceAddress && b.slot === slot);
    if (binding === void 0) throw new Error(`param slot "${slot}" of "${serviceAddress}" resolved to a source but has no bound entry in the manifest — Load should have recorded it.`);
    return binding;
}
/**
* Brands the payload `envSecret` builds. Core's `secretSource()` is a public
* SPI, so a user could bypass `envSecret` and bind a raw `secretSource('x')`;
* the brand lets `secretName` reject such a source (or another target's) with a
* clear error instead of reading an absent `.name`.
*/ const PRISMA_CLOUD_SECRET_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Symbol.for("prisma:prisma-cloud-secret-source"));
const RESERVED_SECRET_PREFIX = "COMPOSER_";
const POISONED_SECRET_NAMES = /* @__PURE__ */ new Set([
    "DATABASE_URL",
    "DATABASE_URL_POOLED"
]);
/**
* Binds a secret slot to a named Prisma Cloud platform env var (ADR-0029). The
* value is provisioned out-of-band; only the name is carried. The name may not
* use the framework's reserved `COMPOSER_` prefix or the poisoned
* `DATABASE_URL(_POOLED)` keys.
*/ function envSecret(name) {
    if (typeof name !== "string" || name.length === 0) throw new Error("envSecret() requires a non-empty platform env-var name, e.g. envSecret('STRIPE_SECRET_KEY').");
    if (name.startsWith(RESERVED_SECRET_PREFIX)) throw new Error(`envSecret name "${name}" may not start with "${RESERVED_SECRET_PREFIX}" — that prefix is reserved for the framework's own generated config keys.`);
    if (POISONED_SECRET_NAMES.has(name)) throw new Error(`envSecret name "${name}" is reserved — ${[
        ...POISONED_SECRET_NAMES
    ].join(" and ")} are poisoned at project provision and cannot back a secret.`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__g__as__secretSource$3e$__["secretSource"])({
        [PRISMA_CLOUD_SECRET_SOURCE]: true,
        name
    });
}
/** True only for a payload that `envSecret` built — i.e. one carrying the brand. */ function isEnvSecretPayload(payload) {
    return typeof payload === "object" && payload !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(payload)[PRISMA_CLOUD_SECRET_SOURCE] === true;
}
/**
* Reads the Prisma Cloud env-var name back out of an opaque secret source —
* an `envSecret` leaf of an input binding (ADR-0042). A source not built by
* `envSecret` (a raw `secretSource(...)` or another target's source) carries
* no name — reject it here, with `where` naming the leaf's position, so a
* foreign source fails early and clearly rather than producing a broken
* deploy with an undefined name.
*/ function secretName(source, where) {
    const payload = source.payload;
    if (!isEnvSecretPayload(payload)) throw new Error(`${where} is bound to a secret source not created by envSecret() — bind secrets with envSecret('NAME') from @prisma/composer-prisma-cloud.`);
    return payload.name;
}
;
}),
"[project]/node_modules/@prisma/composer-prisma-cloud/dist/serializer-Ch1Tmx-2-D7cNhkEp.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>encodeParamPointer,
    "c",
    ()=>readOrigin,
    "d",
    ()=>stashInput,
    "f",
    ()=>stashProviderParams,
    "i",
    ()=>encode,
    "l",
    ()=>serializeInput,
    "n",
    ()=>configKey,
    "o",
    ()=>paramEntries,
    "r",
    ()=>deserialize,
    "s",
    ()=>readInput,
    "t",
    ()=>ORIGIN_KEY_NAME,
    "u",
    ()=>stash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$Doubjztg$2d$CWHCDiuX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/secret-Doubjztg-CWHCDiuX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__isParamSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export s as isParamSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__isSecretSource$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export l as isSecretSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
;
;
;
;
//#region ../../0-framework/0-foundation/foundation/dist/casts-DpaahrlC.mjs
/**
* **Last-resort escape hatch for unsafe type assertions. Not a sanctioned tool to reach for.**
*
* Before reaching for `blindCast`, **rewrite the surrounding code so the cast becomes
* unnecessary**: tighten an input type, add a runtime check that narrows via a type
* predicate, restructure a generic so the compiler can see the relationship you're
* asserting, or use {@link castAs} when the value already satisfies the target type.
* Only when no rewrite is feasible does `blindCast` become the right answer — and at
* that point, the `Reason` literal you supply must articulate the compromise in
* language a reviewer can evaluate.
*
* The reviewer **will** validate the `Reason`. If it doesn't hold up under scrutiny,
* that is not a signal to soften the reason; it is a signal to go back and solve the
* underlying type-system problem properly. An unconvincing justification is rework,
* not a free pass.
*
* `blindCast` is the auditable form of `as Foo` / `as unknown as Foo`: it bypasses
* the compiler's checks (the input type is `unknown`, the output type is whatever the
* caller asks for), but it forces the unsafety to be named at the call site instead of
* smuggled in via a bare `as`. The `Reason` type parameter exists only at compile
* time — it is not present in the emitted JavaScript — but it is grep-able and
* visible to future readers.
*
* @example
* ```typescript
* const stringValue = blindCast<
*   string,
*   "JSON.parse returns `unknown`; this field is documented to be a string in the API contract"
* >(parsed[key]);
* ```
*
* @typeParam TargetType - The type the caller is asserting the input has.
* @typeParam _Reason - A string literal describing why bypassing the type system is necessary here.
*                     Only meaningful at compile time. The reviewer evaluates whether it justifies the unsafety.
*/ function blindCast$1(input) {
    return input;
}
//#endregion
//#region ../../0-framework/0-foundation/foundation/dist/secret-DoWGmN7m.mjs
/**
* A value wrapper that redacts everywhere except the one explicit reader,
* `expose()`. Sensitivity is carried by the TYPE (`SecretBox<T>`), not a flag a
* sink must remember to check: `String(box)`, template interpolation,
* `JSON.stringify`, and `console.log`/`util.inspect` all print `[REDACTED]`, so
* a secret can't leak through an accidental log or serialization.
*
* Every box carries a brand property keyed by the registered symbol
* `Symbol.for('prisma:secret-box')`, which is what `isSecretString` checks. A
* symbol key is invisible to `JSON.stringify` and `Object.keys`, so the box's
* public shape still matches the platform's own `secrecy` type
* (pdp-control-plane).
*/ const REDACTED = "[REDACTED]";
const SECRET_BOX = blindCast$1(Symbol.for("prisma:secret-box"));
var SecretBox = class {
    [SECRET_BOX] = true;
    #value;
    constructor(value){
        this.#value = value;
    }
    /** The sole explicit door to the wrapped value. */ expose() {
        return this.#value;
    }
    toString() {
        return REDACTED;
    }
    toJSON() {
        return REDACTED;
    }
    valueOf() {
        return REDACTED;
    }
    [Symbol.toPrimitive]() {
        return REDACTED;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return REDACTED;
    }
};
//#endregion
//#region ../../1-prisma-cloud/1-extensions/target/dist/serializer-Ch1Tmx-2.mjs
/**
* Walks a node's own params, then each dependency input's connection params —
* the same enumeration order `configOf` uses, but carrying the raw
* `ConfigParam` (with its `serialize`/`deserialize`) instead of a pure-data
* projection.
*/ function paramEntries(node) {
    const entries = [];
    for (const [input, value] of Object.entries(node.inputs)){
        if (typeof value !== "object" || value === null) continue;
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value).connection.params;
        for (const [name, param] of Object.entries(params))entries.push({
            owner: {
                input
            },
            name,
            param
        });
    }
    for (const [name, param] of Object.entries(node.params))entries.push({
        owner: "service",
        name,
        param
    });
    return entries;
}
const configKey = (address, d)=>{
    const segments = address.split(".").filter((s)=>s.length > 0);
    const owner = d.owner === "service" ? [] : [
        d.owner.input
    ];
    return [
        "COMPOSER",
        ...segments,
        ...owner,
        d.name
    ].join("_").toUpperCase();
};
/**
* Typed value → its stored string. Service-own literals are JSON-encoded; a
* dependency-input value is a provisioning ref at deploy (and a resolved
* string at boot) and passes through untouched — LANDMINE: JSON-encoding it
* would break the ordering edge Alchemy resolves through it.
*/ function encode(owner, value) {
    return owner === "service" ? JSON.stringify(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
}
/** Reverses `encode`: JSON-parse a service-own value, take a dependency-input value raw. */ function decode(owner, raw) {
    return owner === "service" ? JSON.parse(raw) : raw;
}
const PARAM_POINTER_PREFIX = "@composer-param-pointer:";
/** True iff `raw` is a param pointer row (as opposed to a JSON-encoded literal). */ const isParamPointerRow = (raw)=>raw.startsWith(PARAM_POINTER_PREFIX);
/** Builds a param pointer row's stored value from the platform var NAME it points to. */ const encodeParamPointer = (name)=>`${PARAM_POINTER_PREFIX}${name}`;
/** Reverses `encodeParamPointer`: the platform var NAME a pointer row points to. */ const decodeParamPointer = (raw)=>raw.slice(24);
function coerce(raw, d, key) {
    if (!(raw !== void 0 && raw !== "")) {
        if (d.param.default !== void 0) return d.param.default;
        if (d.param.optional === true) return void 0;
        throw new Error(`missing required config param "${d.name}" (env ${key})`);
    }
    if (d.owner === "service" && isParamPointerRow(raw)) return coerceEnvSourcedParam(raw, d, key);
    try {
        return standardValidateSync(d.param.schema, decode(d.owner, raw));
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid value for config param "${d.name}" (env ${key}): ${message}`);
    }
}
/**
* Boot resolution for an env-sourced param: double-lookup (pointer → platform
* var), then the param's own schema on the raw string — no JSON decode, and
* no redaction (it's config, not a secret). An UNSET platform var is a loud
* boot failure naming both the param and the platform var; an EMPTY string is
* not special-cased here — it reaches the schema like any other value, so it
* passes iff the schema accepts it (deliberately unlike a literal param's own
* ""-means-absent rule, and unlike a secret's non-empty requirement).
*/ function coerceEnvSourcedParam(raw, d, key) {
    const platformVar = decodeParamPointer(raw);
    const value = process.env[platformVar];
    if (value === void 0) throw new Error(`env-sourced config param "${d.name}" (env ${key} → ${platformVar}) is unset: the platform variable "${platformVar}" was not injected — the deploy did not provision it.`);
    try {
        return standardValidateSync(d.param.schema, value);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid value for env-sourced config param "${d.name}" (env ${key} → ${platformVar}): ${message}`);
    }
}
/**
* Boot: read each declared param from env by its key, reverse the param's own
* serialization (missing/invalid fails loudly), assemble the typed Config.
* The input document rides its own channel (readInput), not this one.
*/ const deserialize = (node, address)=>{
    const service = {};
    const inputs = {};
    for (const d of paramEntries(node)){
        const key = configKey(address, d);
        const value = coerce(process.env[key], d, key);
        if (d.owner === "service") service[d.name] = value;
        else {
            let bucket = inputs[d.owner.input];
            if (bucket === void 0) {
                bucket = {};
                inputs[d.owner.input] = bucket;
            }
            bucket[d.name] = value;
        }
    }
    return {
        service,
        inputs
    };
};
/**
* run()'s setup step: write the resolved config to the environment under
* address-free keys (configKey("", d) + each serialize suffix), which load()
* reads back with no address. Uses env, not a module variable, because a
* framework may fork worker processes that inherit env but not memory.
* Writes only these keys; nothing else is touched.
*/ const stash = (node, config)=>{
    for (const d of paramEntries(node)){
        const value = d.owner === "service" ? config.service[d.name] : config.inputs[d.owner.input]?.[d.name];
        if (value === void 0) continue;
        process.env[configKey("", d)] = encode(d.owner, value);
    }
};
/** The input document's own row name; its full key is COMPOSER_<addr>_INPUT. */ const INPUT_KEY_NAME = "INPUT";
/** The input document row's key for a service address. */ const inputKey = (address)=>configKey(address, {
        owner: "service",
        name: INPUT_KEY_NAME
    });
/**
* The platform var the deploy provisions for a generated input leaf's value:
* COMPOSER_<addr>_<KEY>_GENERATED, where <KEY> is the leaf's input-document
* path normalized the way `configKey` normalizes its keys (segments joined
* with "_", uppercased). Lives in the framework's reserved COMPOSER_ namespace
* (envParam/envSecret reject COMPOSER_ names), so it can never collide with a
* user-provisioned var.
*/ const generatedParamVarName = (address, path)=>{
    const segments = address.split(".").filter((s)=>s.length > 0);
    const pathSegments = path.split(".").filter((s)=>s.length > 0);
    return [
        "COMPOSER",
        ...segments,
        ...pathSegments,
        "GENERATED"
    ].join("_").toUpperCase();
};
const SECRET_MARKER = "$secret";
const GENERATED_MARKER = "$generated";
const ESCAPABLE_KEY = /^\$+(?:secret|generated)$/;
const ESCAPED_KEY = /^\$\$+(?:secret|generated)$/;
/** True for the framework's secret pointer: `{ "$secret": "<PLATFORM_VAR>" }` and nothing else. */ function isSecretPointer(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length === 1 && SECRET_MARKER in value && typeof value[SECRET_MARKER] === "string";
}
/** True for the framework's generated pointer: `{ "$generated": "<PLATFORM_VAR>", "redacted": <bool> }` and nothing else. The `redacted` facet rides the pointer so boot — which is schema-blind — knows whether to box (§ 4.1). */ function isGeneratedPointer(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length === 2 && GENERATED_MARKER in value && typeof value[GENERATED_MARKER] === "string" && "redacted" in value && typeof value["redacted"] === "boolean";
}
/** A plain data object (not an array, not a class instance) — the only object shape a binding/document may nest. */ function isPlainObject(value) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
const ABSENT = Symbol("composer-input-absent");
/**
* Deploy guard (ADR-0041, closing review finding F02): every pointer var name a
* service's input binding produces — `$secret` names AND `$generated` names —
* must be distinct after normalization. Env var names compare case-insensitively
* (the platform uppercases), so two input paths whose names differ only in case
* would silently overwrite each other at deploy; fail loudly naming both. One
* general check over both pointer kinds, not a per-marker special case (it also
* covers the pre-existing `foo`/`FOO` class for secrets).
*/ function assertDistinctPointerNames(pointers, address) {
    const seen = /* @__PURE__ */ new Map();
    for (const pointer of pointers){
        const normalized = pointer.varName.toUpperCase();
        const prior = seen.get(normalized);
        if (prior !== void 0) throw new Error(`invalid input for service "${address}": input paths "${prior.path}" and "${pointer.path}" both resolve to the platform variable "${normalized}" — pointer variable names must be distinct (env var names compare case-insensitively).`);
        seen.set(normalized, pointer);
    }
}
/**
* Deploy: recursive descent over the provision-time binding (plain data).
* `envSecret` leaves become empty sentinel `SecretBox`es (the value never
* enters the deploy); `envParam` leaves read the deploy shell — unset or
* empty means the enclosing object key is OMITTED, and the schema arbitrates
* whether that absence is legal (ADR-0042). Everything non-plain (a class
* instance, a function, a raw SecretBox holding a value) is rejected loudly.
*/ function resolveInputBinding(binding, env, address = "") {
    const sentinels = /* @__PURE__ */ new Map();
    const generated = [];
    const pointers = [];
    const absent = [];
    const walk = (value, path)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$Doubjztg$2d$CWHCDiuX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(value)) {
            const { bytes, redacted } = value.payload;
            const varName = generatedParamVarName(address, path);
            generated.push({
                varName,
                bytes,
                redacted,
                path
            });
            pointers.push({
                path,
                varName
            });
            return redacted ? new SecretBox("") : "";
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__isSecretSource$3e$__["isSecretSource"])(value)) {
            const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$Doubjztg$2d$CWHCDiuX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(value, path === "" ? "the input binding root" : `input key "${path}"`);
            const sentinel = new SecretBox("");
            sentinels.set(sentinel, name);
            pointers.push({
                path,
                varName: name
            });
            return sentinel;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__s__as__isParamSource$3e$__["isParamSource"])(value)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$Doubjztg$2d$CWHCDiuX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(value)) throw new Error(`input binding${path === "" ? "" : ` key "${path}"`} is bound to a param source not created by envParam() — bind env-sourced input values with envParam('NAME') from @prisma/composer-prisma-cloud.`);
            const raw = env[value.payload.name];
            if (raw === void 0 || raw === "") {
                absent.push(path === "" ? `(root) → ${value.payload.name}` : `${path} → ${value.payload.name}`);
                return ABSENT;
            }
            return raw;
        }
        if (Array.isArray(value)) return value.map((member, index)=>{
            const resolvedMember = walk(member, path === "" ? String(index) : `${path}.${index}`);
            if (resolvedMember === ABSENT) throw new Error(`input binding key "${path}[${index}]" is an env-bound array element whose variable is unset — an array position cannot be omitted; bind a literal or provision the variable.`);
            return resolvedMember;
        });
        if (isPlainObject(value)) {
            const out = {};
            for (const [key, member] of Object.entries(value)){
                const resolvedMember = walk(member, path === "" ? key : `${path}.${key}`);
                if (resolvedMember === ABSENT) continue;
                out[key] = resolvedMember;
            }
            return out;
        }
        if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
        throw new Error(`input binding${path === "" ? "" : ` key "${path}"`} holds a value that is not plain data (${typeof value === "object" ? "a non-plain object" : `a ${typeof value}`}) — a binding's leaves are literals, envParam(...), or envSecret(...) (ADR-0042). A secret VALUE (e.g. a SecretBox) never belongs in a binding — bind envSecret('NAME') instead.`);
    };
    const resolved = walk(binding, "");
    assertDistinctPointerNames(pointers, address);
    return {
        resolved: resolved === ABSENT ? void 0 : resolved,
        sentinels,
        generated,
        absent
    };
}
/**
* Deploy: resolve the binding, judge it with the service's own schema
* (secrets as opaque sentinel boxes), and serialize the defaults-applied
* VALIDATED output — pointers substituted back where the sentinels sit — into
* one JSON row. Returns `undefined` for a service with no input schema.
* A validation failure that mentions a secret leaf means either a
* misclassified binding (a literal where the schema wants a `SecretString`,
* or vice versa) or a schema refining on secret CONTENT — deploy-time
* validation sees only empty boxes, and the ADR forbids content refinements.
*/ function serializeInput(node, address, binding, env = process.env) {
    const schema = node.inputSchema;
    if (schema === void 0) {
        if (binding !== void 0) throw new Error(`service "${address}" has an input binding but declares no input schema — Load should have rejected it (ADR-0042).`);
        return;
    }
    if (binding === void 0) throw new Error(`service "${address}" declares an input schema but has no recorded input binding — Load should have required it (ADR-0042).`);
    const { resolved, sentinels, generated, absent } = resolveInputBinding(binding, env, address);
    let validated;
    try {
        validated = standardValidateSync(schema, resolved);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid input for service "${address}": ${message}\n(Deploy-time validation sees each envSecret leaf as an opaque, empty SecretString box. A failure naming a secret field means the binding and schema disagree about its secretness, or the schema refines on secret content — which ADR-0042 forbids.)`);
    }
    const document = substitutePointers(validated, sentinels, generated, address);
    return {
        key: inputKey(address),
        value: JSON.stringify(document),
        absent,
        generated
    };
}
/**
* Walks the VALIDATED output, mapping each generated leaf (by input path) to
* its `{ "$generated": VAR, "redacted": <bool> }` pointer and each sentinel box
* (by identity) to its `{ "$secret": name }` pointer, escaping any user key that
* matches a reserved marker. The generated check runs FIRST, so a redacted
* generated leaf's sentinel box becomes `$generated`, never mistaken for a
* secret. The `redacted` facet rides the pointer so schema-blind boot knows
* whether to box. A `SecretString` the walk does not recognize came from the
* schema itself (a default or transform minting a box) — there is no platform
* var behind it, so it is rejected rather than serialized. The path format
* matches `resolveInputBinding`'s exactly, so generated leaves are found by path.
*/ function substitutePointers(value, sentinels, generated, address) {
    const generatedByPath = new Map(generated.map((leaf)=>[
            leaf.path,
            leaf
        ]));
    const walk = (v, path)=>{
        const leaf = generatedByPath.get(path);
        if (leaf !== void 0) return {
            [GENERATED_MARKER]: leaf.varName,
            redacted: leaf.redacted
        };
        if (v instanceof SecretBox) {
            const name = sentinels.get(v);
            if (name === void 0) throw new Error(`input key "${path}" of service "${address}" validated to a SecretString the binding did not supply — a schema must not mint secret boxes (a default/transform cannot name a platform variable); bind the field with envSecret('NAME') instead.`);
            return {
                [SECRET_MARKER]: name
            };
        }
        if (Array.isArray(v)) return v.map((m, i)=>walk(m, path === "" ? String(i) : `${path}.${i}`));
        if (isPlainObject(v)) {
            const out = {};
            for (const [key, member] of Object.entries(v)){
                if (member === void 0) continue;
                const written = ESCAPABLE_KEY.test(key) ? `$${key}` : key;
                out[written] = walk(member, path === "" ? key : `${path}.${key}`);
            }
            return out;
        }
        if (v === null || v === void 0 || typeof v === "string" || typeof v === "number" || typeof v === "boolean") return v;
        throw new Error(`input key "${path}" of service "${address}" validated to a value that cannot be serialized (a ${typeof v === "object" ? "non-plain object" : typeof v}) — the input document is plain JSON (ADR-0042).`);
    };
    return walk(value, "");
}
/**
* Boot: read the one input document row (address-free after run()'s
* re-stash), swap each `$secret` pointer for a redacting box over the named
* platform var, unescape reserved keys, validate with the service's own
* schema, and return the typed object. A missing row is a loud failure naming
* the env var — a deployed environment always writes it; a local harness must
* supply it (set the row to the serialized input document).
*/ function readInput(node, address) {
    const schema = node.inputSchema;
    if (schema === void 0) throw new Error(`input() called on service "${node.name}", which declares no input schema — declare \`input: <schema>\` on compute() to use it (ADR-0042).`);
    const key = inputKey(address);
    const raw = process.env[key];
    if (raw === void 0 || raw === "") throw new Error(`this service's input is not available (env ${key} is unset) — a deployed environment writes it automatically; a local harness must supply it like any other config value (set ${key} to the serialized input document).`);
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`this service's input document is not valid JSON (env ${key}): ${message} — a deployed environment writes it automatically; a local harness must supply the serialized input document (set ${key} to it).`);
    }
    const hydrated = hydrateInputDocument(parsed, key);
    try {
        return standardValidateSync(schema, hydrated);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid input document (env ${key}): ${message}`);
    }
}
/** Reverses the document encoding: `$secret` pointers become redacting boxes; a `$generated` pointer becomes a box iff its `redacted` facet is true, a plain string otherwise; escaped reserved keys drop one "$". */ function hydrateInputDocument(value, key) {
    if (isSecretPointer(value)) {
        const name = value[SECRET_MARKER];
        const secret = process.env[name];
        if (secret === void 0 || secret === "") throw new Error(`secret input is not provisioned (env ${key} → ${name}): the platform var "${name}" is unset or empty.`);
        return new SecretBox(secret);
    }
    if (isGeneratedPointer(value)) {
        const varName = value[GENERATED_MARKER];
        const generated = process.env[varName];
        if (generated === void 0 || generated === "") throw new Error(`generated input is not provisioned (env ${key} → ${varName}): the platform variable "${varName}" is unset or empty — the deploy provisions this variable, so its absence means the deploy and the running service disagree.`);
        return value.redacted ? new SecretBox(generated) : generated;
    }
    if (Array.isArray(value)) return value.map((member)=>hydrateInputDocument(member, key));
    if (isPlainObject(value)) {
        const out = {};
        for (const [k, member] of Object.entries(value)){
            const read = ESCAPED_KEY.test(k) ? k.slice(1) : k;
            out[read] = hydrateInputDocument(member, key);
        }
        return out;
    }
    return value;
}
/**
* run()'s setup step for the input document: re-emit the row under its
* address-free key, so the address-free `readInput` reads identically. The
* document carries pointers, never values — the values stay only in their
* platform vars.
*/ const stashInput = (node, address)=>{
    if (node.inputSchema === void 0) return;
    const raw = process.env[inputKey(address)];
    if (raw === void 0) return;
    process.env[inputKey("")] = raw;
};
/**
* Boot: for each reserved provider param, read its address-scoped row through
* the same `coerce` a declared param uses (JSON-decode, schema-validate), and
* re-emit it address-free — `stash`'s counterpart for this separate
* declaration space. A param is declared optional here unconditionally: an
* absent row means "never provisioned" (local dev, tests, a provider with no
* registered value for this deploy), never a boot failure, so nothing is
* stashed and the runtime reader that owns this slot falls back to its own
* pass-through behavior.
*/ function stashProviderParams(entries, address) {
    for (const entry of entries){
        const d = {
            owner: "service",
            name: entry.name,
            param: {
                schema: entry.schema,
                optional: true
            }
        };
        const key = configKey(address, d);
        const value = coerce(process.env[key], d, key);
        if (value === void 0) continue;
        process.env[configKey("", d)] = encode("service", value);
    }
}
/** The framework-resolved origin row: COMPOSER_<addr>_ORIGIN. Written per
*  compute service at serialize — the service's own provisioned endpoint URL,
*  riding the reserved-provider-param machinery (`origin-key.ts`'s
*  `ORIGIN_PARAM`); never a declared param, never in config(). A harness with
*  no deploy behind it supplies it by setting `COMPOSER_ORIGIN` to the
*  JSON-encoded origin URL — exactly how the existing entrypoint tests supply
*  their other `COMPOSER_*` rows. */ const ORIGIN_KEY_NAME = "ORIGIN";
/**
* Reads this service's origin back out of the address-free stash
* `stashProviderParams` wrote for the ORIGIN entry. `COMPOSER_ORIGIN` unset is
* a loud failure — a deployed environment always writes it, so an unset row
* means either a local harness that hasn't supplied it or a boot() called
* before run().
*/ function readOrigin() {
    const d = {
        owner: "service",
        name: ORIGIN_KEY_NAME,
        param: {
            schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string"),
            optional: true
        }
    };
    const key = configKey("", d);
    const value = coerce(process.env[key], d, key);
    if (value === void 0) throw new Error("this service's origin is not available (env COMPOSER_ORIGIN is unset) — a deployed environment writes it automatically; a local harness must supply it like any other config value (set COMPOSER_ORIGIN to the JSON-encoded origin URL).");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
}
/** Synchronous Standard Schema validation — see the matching note in core's `config.ts`. */ function standardValidateSync(schema, value) {
    const result = schema["~standard"].validate(value);
    if (result instanceof Promise) throw new Error("config param schema validation must be synchronous — async Standard Schema validators are not supported for config params");
    if (result.issues !== void 0) throw new Error(`config param validation failed: ${result.issues.map((issue)=>issue.message).join("; ")}`);
    return result.value;
}
;
}),
"[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>castAs,
    "t",
    ()=>blindCast
]);
//#region ../../0-framework/0-foundation/foundation/dist/casts-DpaahrlC.mjs
/**
* **Last-resort escape hatch for unsafe type assertions. Not a sanctioned tool to reach for.**
*
* Before reaching for `blindCast`, **rewrite the surrounding code so the cast becomes
* unnecessary**: tighten an input type, add a runtime check that narrows via a type
* predicate, restructure a generic so the compiler can see the relationship you're
* asserting, or use {@link castAs} when the value already satisfies the target type.
* Only when no rewrite is feasible does `blindCast` become the right answer — and at
* that point, the `Reason` literal you supply must articulate the compromise in
* language a reviewer can evaluate.
*
* The reviewer **will** validate the `Reason`. If it doesn't hold up under scrutiny,
* that is not a signal to soften the reason; it is a signal to go back and solve the
* underlying type-system problem properly. An unconvincing justification is rework,
* not a free pass.
*
* `blindCast` is the auditable form of `as Foo` / `as unknown as Foo`: it bypasses
* the compiler's checks (the input type is `unknown`, the output type is whatever the
* caller asks for), but it forces the unsafety to be named at the call site instead of
* smuggled in via a bare `as`. The `Reason` type parameter exists only at compile
* time — it is not present in the emitted JavaScript — but it is grep-able and
* visible to future readers.
*
* @example
* ```typescript
* const stringValue = blindCast<
*   string,
*   "JSON.parse returns `unknown`; this field is documented to be a string in the API contract"
* >(parsed[key]);
* ```
*
* @typeParam TargetType - The type the caller is asserting the input has.
* @typeParam _Reason - A string literal describing why bypassing the type system is necessary here.
*                     Only meaningful at compile time. The reviewer evaluates whether it justifies the unsafety.
*/ function blindCast(input) {
    return input;
}
/**
* Type-checked, runtime pass-through alternative to a bare `as Type` cast.
*
* Use `castAs` when the value already satisfies the target type but you want to make
* the type assertion explicit at the call site — for example, when an inferred type is
* wider than the type you want to publish, or when a literal object should be tagged
* with its nominal interface. Unlike {@link blindCast}, the compiler still checks that
* the value is assignable to the target type, so this helper cannot smuggle in an
* unsafe assertion.
*
* `castAs` exists alongside `blindCast` so authors pick the right name at the call
* site: a `castAs` is type-checked and benign; a `blindCast` is the unsafe escape
* hatch. The split makes review faster — readers know which casts to scrutinize and
* which are pure annotations.
*
* @example
* ```typescript
* interface FancyObject {
*   key: string;
*   keyTwo: {
*     subKey: string;
*     subKeyTwo: number;
*   };
* }
*
* const typedObject = castAs<FancyObject>({
*   key: 'Chookede',
*   keyTwo: {
*     subKey: 'Choookeeeee',
*     subKeyTwo: 2,
*   },
* });
* ```
*
* @typeParam Type - The type to constrain and tag the value with. The value must be assignable to `Type`.
*/ function castAs(value) {
    return value;
}
;
}),
"[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blindCast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>number,
    "c",
    ()=>string,
    "i",
    ()=>inputManifest,
    "n",
    ()=>hydrate,
    "o",
    ()=>param,
    "r",
    ()=>hydrateSync,
    "s",
    ()=>paramManifest,
    "t",
    ()=>configOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$secret$2d$DoWGmN7m$2d$DO5Brq1Y$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/secret-DoWGmN7m-DO5Brq1Y.mjs [app-rsc] (ecmascript)");
;
;
//#region ../../0-framework/1-core/core/dist/index.mjs
/**
* A data-only descriptor of a param's schema for introspection — the
* validator's vendor tag, never the schema's own `validate`. `configOf`
* reports it where the old model reported `type: 'string' | 'number'`, so the
* config surface stays enumerable without leaking a function. Nothing consumes
* more than the vendor tag yet; a richer projection (e.g. a JSON-Schema export
* when the vendor offers one) is an additive change if a consumer needs it.
*/ function projectSchema(schema) {
    return {
        vendor: schema["~standard"].vendor
    };
}
/**
* Enumerates every config param the service declares: each input's connection
* params, then the service's own params. Pure — reads `root.inputs`/`params`
* directly, executes nothing but the (also pure) schema projection. Deliberately
* does not go through `Load`: a service's connection-end inputs are legitimately
* unwired from its own point of view (wiring is an enclosing module's concern),
* and this introspects one service's declared shape regardless of how — or
* whether — it composes into a larger graph.
*/ function configOf(root) {
    const entries = [];
    for (const [input, value] of Object.entries(root.inputs)){
        if (typeof value !== "object" || value === null) continue;
        for (const [name, param] of Object.entries(value.connection.params))entries.push({
            owner: {
                input
            },
            name,
            schema: projectSchema(param.schema),
            optional: param.optional === true,
            default: param.default
        });
    }
    for (const [name, param] of Object.entries(root.params))entries.push({
        owner: "service",
        name,
        schema: projectSchema(param.schema),
        optional: param.optional === true,
        default: param.default
    });
    return entries;
}
/**
* The app's input manifest: every service input binding a `provision()` call
* supplied (ADR-0042). Pure graph introspection, TARGET-AGNOSTIC — a deploy
* target's recursive descent classifies the binding's leaves (its preflight
* verifies each `envSecret` leaf's platform var exists before deploy; the
* values are provisioned out-of-band).
*/ function inputManifest(graph) {
    return graph.inputBindings;
}
/**
* The app's param-binding manifest: every param a `provision()` call bound —
* literal or an opaque, target-defined `ParamSource` — at the address that
* declared it. The param sibling of `provisionManifest`, for a deploy
* target's own preflight to consume. Pure graph introspection,
* TARGET-AGNOSTIC; a param this manifest omits simply falls back to its own
* `default` at `buildConfig`.
*/ function paramManifest(graph) {
    return graph.params;
}
function scalarSchema(name, check) {
    return {
        "~standard": {
            version: 1,
            vendor: "@prisma/composer",
            validate: (value)=>check(value) ? {
                    value
                } : {
                    issues: [
                        {
                            message: `expected ${name}, got ${typeof value}`
                        }
                    ]
                }
        }
    };
}
const stringSchema = scalarSchema("string", (v)=>typeof v === "string");
const numberSchema = scalarSchema("number", (v)=>typeof v === "number" && Number.isFinite(v));
function withFacets(schema, opts) {
    return {
        schema,
        ...opts.optional !== void 0 ? {
            optional: opts.optional
        } : {},
        ...opts.default !== void 0 ? {
            default: opts.default
        } : {},
        ...opts.provision !== void 0 ? {
            provision: opts.provision
        } : {}
    };
}
/** A string-valued param. */ function string(opts = {}) {
    return withFacets(stringSchema, opts);
}
/** A number-valued param. */ function number(opts = {}) {
    return withFacets(numberSchema, opts);
}
/** A param over any caller-supplied Standard Schema — a structured `jobs`, say. */ function param(schema, opts = {}) {
    return withFacets(schema, opts);
}
/**
* Given a service and a concrete typed Config, hydrate every input
* (connection.hydrate with its typed value slice). A resource dep and a
* connection dep hydrate through identical machinery — the loaded client is
* indistinguishable. The service's own params ride alongside in
* `config.service`; the node's `load()` merges the two.
*/ async function hydrate(root, config) {
    const deps = {};
    for (const [name, inputNode] of Object.entries(root.inputs)){
        const values = config.inputs[name] ?? {};
        deps[name] = await inputNode.connection.hydrate(values);
    }
    return deps;
}
/**
* Synchronous hydrate — what the node's `load()` uses so
* `const { db } = service.load()` reads without `await`. Requires every
* connection.hydrate to return synchronously; a Promise return is a loud error
* naming the input (an async client factory must use the async `hydrate` path).
*/ function hydrateSync(root, config) {
    const deps = {};
    for (const [name, inputNode] of Object.entries(root.inputs)){
        const values = config.inputs[name] ?? {};
        const client = inputNode.connection.hydrate(values);
        if (client instanceof Promise) throw new Error(`Connection hydrate for input "${name}" returned a Promise; load() requires a synchronous client factory.`);
        deps[name] = client;
    }
    return deps;
}
;
}),
"[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export a as number>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "number",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export c as string>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "string",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript) <export r as hydrateSync>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hydrateSync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>service,
    "a",
    ()=>freezeNode,
    "c",
    ()=>isProvisionNeed,
    "d",
    ()=>paramNeed,
    "f",
    ()=>paramSource,
    "g",
    ()=>secretSource,
    "h",
    ()=>secret,
    "i",
    ()=>dependency,
    "l",
    ()=>isSecretSource,
    "m",
    ()=>resource,
    "n",
    ()=>LoadError,
    "o",
    ()=>isNode,
    "p",
    ()=>provisionNeed,
    "r",
    ()=>ResourceNodeBase,
    "s",
    ()=>isParamSource,
    "t",
    ()=>Load,
    "u",
    ()=>module
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript)");
;
//#region ../../0-framework/1-core/core/dist/graph-DgbALPDo.mjs
/** Thrown by Load when the graph is malformed. */ var LoadError = class extends Error {
    constructor(message){
        super(message);
        this.name = "LoadError";
    }
};
/**
* Core model: node types and the factories that construct them, plain frozen
* data objects. A node's `extension` + `type` form its deploy-time registry key (ADR-0017).
*/ const NODE = Symbol.for("prisma:node");
const SECRET_NEED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Symbol.for("prisma:secret-need"));
const SECRET_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Symbol.for("prisma:secret-source"));
/** Declares a secret NEED. Nameless — the platform name is bound at the root via `envSecret`. */ function secret() {
    return Object.freeze({
        [SECRET_NEED]: true,
        kind: "secret"
    });
}
/** Builds an opaque secret source from a target-defined payload — the SPI a deploy target's own source constructor (e.g. `envSecret`) calls. Core forwards the source and never inspects the payload. */ function secretSource(payload) {
    return Object.freeze({
        [SECRET_SOURCE]: true,
        payload
    });
}
/** True if `value` is a secret source (an `envSecret` result or a forwarded ctx.secrets ref). */ function isSecretSource(value) {
    return typeof value === "object" && value !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(value)[SECRET_SOURCE] === true;
}
const PROVISION_NEED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Symbol.for("prisma:provision-need"));
/** Builds an opaque provisioning need — the declaring package's own brand plus whatever payload its provisioner reads back. */ function provisionNeed(brand, payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Object.freeze({
        [PROVISION_NEED]: true,
        brand,
        payload
    }));
}
/** True if `value` is a provisioning need (a `provisionNeed()` result). */ function isProvisionNeed(value) {
    return typeof value === "object" && value !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(value)[PROVISION_NEED] === true;
}
const PARAM_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Symbol.for("prisma:param-source"));
const PARAM_NEED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Symbol.for("prisma:param-need"));
/** Builds an opaque param source from a target-defined payload — the SPI a deploy target's own source constructor (e.g. `envParam`) calls. Core forwards the source and never inspects the payload. */ function paramSource(payload) {
    return Object.freeze({
        [PARAM_SOURCE]: true,
        payload
    });
}
/** True if `value` is a param source (an `envParam` result or a forwarded ctx.params ref). */ function isParamSource(value) {
    return typeof value === "object" && value !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(value)[PARAM_SOURCE] === true;
}
/** Declares a module param-forwarding NEED. Nameless — bound to a `ParamSource` by an enclosing scope and forwarded into a child's real param. */ function paramNeed() {
    return Object.freeze({
        [PARAM_NEED]: true,
        kind: "param"
    });
}
function requireType(type, factory) {
    if (typeof type !== "string" || type.length === 0) throw new Error(`${factory}() requires a non-empty node type.`);
}
function requireName(name, factory) {
    if (typeof name !== "string" || name.length === 0) throw new Error(`${factory}() requires a non-empty name.`);
}
function requireExtension(extension, factory) {
    if (typeof extension !== "string" || extension.length === 0) throw new Error(`${factory}() requires a non-empty extension (the authoring extension's package name).`);
}
/**
* Core's grammar for every name that becomes a config-key segment —
* addresses, input/param/secret names: ASCII letters and digits only.
* Conservative by design so any target medium — POSIX env-var keys
* included — can uppercase and "_"-join segments without escaping.
*/ function isConfigKeySegment(name) {
    return /^[A-Za-z0-9]+$/.test(name);
}
function requireConfigKeySegmentName(name, kind, factory) {
    if (!isConfigKeySegment(name)) throw new Error(`${factory}() ${kind} name "${name}" must contain only ASCII letters and digits ([A-Za-z0-9]) — declared names derive deterministic config keys, uppercased and joined with "_" (an input "db"'s param "url" becomes config key "DB_URL"), so an underscore inside a name collides with that separator and any other character has no place in a config key. "${name}" would put "${name.toUpperCase()}" inside the derived key.`);
}
function requireConfigKeySegmentNames(names, kind, factory) {
    for (const name of names)requireConfigKeySegmentName(name, kind, factory);
}
function freezeParams(params) {
    const frozen = {};
    for (const [name, param] of Object.entries(params))frozen[name] = Object.freeze({
        ...param
    });
    return Object.freeze(frozen);
}
/** A frozen shallow copy that keeps the caller's declared type. */ function frozenShallowCopy(obj) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Object.freeze({
        ...obj
    }));
}
/**
* Seals a node instance after its constructor has assigned all fields — the
* last statement of a concrete node class's constructor. A free function, not
* a base-class method, so an instance stays structurally a plain frozen node.
*/ function freezeNode(node) {
    Object.freeze(node);
    return node;
}
/**
* Everything `resource()` establishes, minus the freeze — an extension
* whose resource node carries extra fields extends this, assigns them, and
* calls `freezeNode(this)` as its constructor's last statement.
*/ var ResourceNodeBase = class {
    [NODE] = true;
    kind = "resource";
    name;
    extension;
    type;
    provides;
    constructor(def){
        requireName(def.name, "resource");
        requireExtension(def.extension, "resource");
        const provides = def.provides;
        if (typeof provides !== "object" || provides === null || typeof provides.kind !== "string" || provides.kind.length === 0 || typeof provides.satisfies !== "function") throw new Error("resource() requires `provides` — the Contract this resource offers (a non-empty `kind` plus its `satisfies()`).");
        this.name = def.name;
        this.extension = def.extension;
        this.type = provides.kind;
        this.provides = provides;
    }
};
/** The core leaf: exactly the base, frozen. */ var FrozenResourceNode = class extends ResourceNodeBase {
    constructor(def){
        super(def);
        freezeNode(this);
    }
};
/**
* Constructs a branded, frozen Resource node — an identity plus the Contract
* it provides; the routing `type` is the contract's `kind`. Pure — nothing
* is provisioned until a module provisions it.
*/ function resource(def) {
    return new FrozenResourceNode(def);
}
/**
* Constructs a branded, frozen Service node — declarations only (inputs,
* params, the input schema, build adapter, and the ports it exposes). Pure;
* carries no runtime behavior.
*/ function service(def) {
    requireName(def.name, "service");
    requireExtension(def.extension, "service");
    requireType(def.type, "service");
    requireConfigKeySegmentNames(Object.keys(def.inputs), "input", "service");
    requireConfigKeySegmentNames(Object.keys(def.params), "param", "service");
    if (def.input !== void 0 && typeof def.input["~standard"]?.validate !== "function") throw new Error("service() `input` must be a Standard Schema (an object with a \"~standard\".validate function) — see https://standardschema.dev (ADR-0042).");
    return Object.freeze({
        [NODE]: true,
        kind: "service",
        name: def.name,
        extension: def.extension,
        type: def.type,
        inputs: frozenShallowCopy(def.inputs),
        params: freezeParams(def.params),
        inputSchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(def.input),
        build: Object.freeze({
            ...def.build
        }),
        expose: def.expose !== void 0 ? frozenShallowCopy(def.expose) : void 0
    });
}
/**
* Constructs a branded, frozen DependencyEnd. `required` (if given) is the
* contract Load compares a wired ref against via `satisfies()`; an unnamed
* end's diagnostic `name` falls back to its `type`.
*/ function dependency(def) {
    requireType(def.type, "dependency");
    requireConfigKeySegmentNames(Object.keys(def.connection.params), "param", "dependency");
    const connection = Object.freeze({
        params: freezeParams(def.connection.params),
        hydrate: def.connection.hydrate
    });
    return Object.freeze({
        [NODE]: true,
        kind: "dependency",
        name: def.name !== void 0 && def.name.length > 0 ? def.name : def.type,
        type: def.type,
        connection,
        required: def.required
    });
}
/**
* Constructs a branded, frozen Module node. Construction is INERT — the body is
* wiring, not user code, and runs only when the module is Loaded.
*/ function module(name, boundaryOrBody, maybeBody) {
    requireName(name, "module");
    const closedRoot = typeof boundaryOrBody === "function";
    const boundary = closedRoot ? {} : boundaryOrBody;
    const deps = frozenShallowCopy(boundary.deps ?? {});
    const secretSlots = frozenShallowCopy(boundary.secrets ?? {});
    const paramSlots = frozenShallowCopy(boundary.params ?? {});
    const expose = frozenShallowCopy(boundary.expose ?? {});
    const body = closedRoot ? (ctx)=>{
        boundaryOrBody(ctx);
        return {};
    } : maybeBody;
    return Object.freeze({
        [NODE]: true,
        kind: "module",
        name,
        deps,
        secretSlots,
        paramSlots,
        expose,
        body
    });
}
/**
* True if `value` was constructed by this module's factories. Checks the
* brand only, never a prototype — a graph may mix nodes from a different
* installed copy of core (dual-package hazard).
*/ function isNode(value) {
    return typeof value === "object" && value !== null && value[NODE] === true;
}
/**
* Stable topological sort: every edge's `from` precedes its `to` in the
* result. Ties (nodes with no ordering constraint between them) keep their
* relative order from `nodes` — so a graph already authored producer-first
* comes out byte-identical to its pre-sort layout; only a graph that
* genuinely needs reordering (e.g. a module wired via a forged ref pointing at a
* not-yet-provisioned producer) actually moves. A Kahn's-algorithm variant
* that always picks the ready node with the smallest original index. Edges
* whose endpoint falls outside `nodes` (e.g. a service-root's input edges
* targeting the root, which is appended separately) are ignored. Cycles
* cannot reach here: `assertDependencyDag` already rejects them for
* dependency edges, and input edges never cycle.
*/ function topoSort(nodes, edges) {
    const byId = new Map(nodes.map((n)=>[
            n.id,
            n
        ]));
    const indexOf = new Map(nodes.map((n, i)=>[
            n.id,
            i
        ]));
    const indegree = new Map(nodes.map((n)=>[
            n.id,
            0
        ]));
    const successors = /* @__PURE__ */ new Map();
    for (const edge of edges){
        if (!byId.has(edge.from) || !byId.has(edge.to)) continue;
        const targets = successors.get(edge.from) ?? [];
        targets.push(edge.to);
        successors.set(edge.from, targets);
        indegree.set(edge.to, (indegree.get(edge.to) ?? 0) + 1);
    }
    const ready = new Set(nodes.filter((n)=>indegree.get(n.id) === 0).map((n)=>n.id));
    const order = [];
    while(ready.size > 0){
        let next;
        let bestIndex = Number.POSITIVE_INFINITY;
        for (const id of ready){
            const index = indexOf.get(id) ?? Number.POSITIVE_INFINITY;
            if (index < bestIndex) {
                bestIndex = index;
                next = id;
            }
        }
        if (next === void 0) break;
        ready.delete(next);
        order.push(next);
        for (const target of successors.get(next) ?? []){
            const remaining = (indegree.get(target) ?? 0) - 1;
            indegree.set(target, remaining);
            if (remaining === 0) ready.add(target);
        }
    }
    if (order.length !== nodes.length) throw new LoadError(`topological sort processed ${order.length} of ${nodes.length} nodes — the graph contains a cycle that slipped past the DAG validation.`);
    return order.map((id)=>byId.get(id)).filter((n)=>n !== void 0);
}
function serviceInputs(service, serviceId) {
    if (typeof service.inputs !== "object" || service.inputs === null) throw new LoadError(`Service "${serviceId}" has no inputs map.`);
    const nodes = [];
    const edges = [];
    for (const [input, value] of Object.entries(service.inputs)){
        const kind = isNode(value) ? value.kind : void 0;
        if (kind === "resource") throw new LoadError(`Input "${input}" of "${serviceId}" is a resource node — a resource is provisioned by the composing module, never created for a service that mentions it. Declare the input as a dependency (the pack's dependency factory) and wire the module-provisioned resource's ref into it.`);
        if (kind !== "dependency") throw new LoadError(`Input "${input}" of "${serviceId}" is not a branded dependency end (construct it with the dependency() factory).`);
        if (value.type.length === 0) throw new LoadError(`Input "${input}" of "${serviceId}" has an empty node type.`);
        const id = `${serviceId}.${input}`;
        nodes.push({
            id,
            node: value
        });
        edges.push({
            from: id,
            to: serviceId,
            input,
            kind: "input"
        });
    }
    return {
        nodes,
        edges
    };
}
function loadService(root, rootId) {
    for (const [input, value] of Object.entries(root.inputs))if (isNode(value) && value.kind === "dependency") throw new LoadError(`Service "${rootId}" has an unwired dependency input "${input}" — this service is composed by a module; deploy the module instead of loading "${rootId}" directly.`);
    if (root.inputSchema !== void 0) throw new LoadError(`Service "${rootId}" declares an input schema but is being loaded directly — a lone service has no enclosing scope to bind its input. Compose it inside a module whose provision() call binds \`input: { … }\` (ADR-0042).`);
    const rootGraphNode = {
        id: rootId,
        node: root
    };
    const { nodes, edges } = serviceInputs(root, rootId);
    return {
        root: rootGraphNode,
        nodes: [
            ...topoSort(nodes, edges),
            rootGraphNode
        ],
        edges,
        inputBindings: [],
        params: []
    };
}
/**
* Builds the ref a provision() call hands back: the id (so a producer with no
* exposed ports — or an untyped slot — can still be wired wholesale) plus one
* ref-port per exposed contract, each the contract's own runtime value (so
* its `satisfies()` still works) tagged with the provider's id.
*/ function refFor(id, service) {
    const ports = {};
    for (const [port, contract] of Object.entries(service.expose ?? {}))ports[port] = {
        ...contract,
        __providerId: id
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        id,
        ...ports
    });
}
/**
* The resource variant of refFor: a resource has exactly one port — the
* contract it provides — flattened onto the ref itself, tagged with the
* provider id. `id` is written last so a hostile contract value cannot
* clobber it.
*/ function refForResource(id, resource) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        ...resource.provides,
        __providerId: id,
        id
    });
}
/** A wired value's producer id: a ref-port's `__providerId`, or a bare ref's `id`. */ function producerIdOf(ref) {
    if (typeof ref !== "object" || ref === null) return void 0;
    if ("__providerId" in ref && typeof ref.__providerId === "string") return ref.__providerId;
    if ("id" in ref && typeof ref.id === "string") return ref.id;
}
/**
* Brands each `ctx.inputs` entry with the input key it stands for (see
* flatten): diagnostic only — usage attribution relies on the per-key object
* identity the branding copy creates, never on reading this back.
*/ const MODULE_INPUT_KEY = Symbol("prisma:module-input-key");
/** Same per-key identity trick as MODULE_INPUT_KEY, for the parallel `ctx.secrets` forwarding channel. */ const MODULE_SECRET_KEY = Symbol("prisma:module-secret-key");
/** Same per-key identity trick as MODULE_INPUT_KEY, for the parallel `ctx.params` forwarding channel. */ const MODULE_PARAM_KEY = Symbol("prisma:module-param-key");
/** Whether `ref` carries a callable `satisfies` that accepts `required` truthily. */ function satisfiesRequired(ref, required) {
    return typeof ref === "object" && ref !== null && "satisfies" in ref && typeof ref.satisfies === "function" && ref.satisfies(required);
}
/**
* Checks one recorded `wiring` object against the Deps it was wired against:
* every named input exists and is a dependency slot, every referenced
* producer is a real (by-now-provisioned) address, and a wired ref whose
* slot declares a required contract must satisfy() it — no producer-kind
* branching, the contract alone determines validity, whether the producer is
* a service port or a resource. Shared by both provisioned kinds so a
* module-as-child gets exactly the checks a service gets, and run once per
* entry against the one `byId` shared by the whole recursive flatten, so a
* forwarded ref resolves through to its real producer address regardless of
* which ancestor scope provisioned it.
*/ function validateWiring(pending, byId) {
    const { deps, wiring, targetId, targetKind, enclosingModuleName } = pending;
    for (const [input, ref] of Object.entries(wiring)){
        const declared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(deps[input]);
        if (declared === void 0 || !isNode(declared) || declared.kind !== "dependency") throw new LoadError(`The deps for "${targetId}" name "${input}", which is not a dependency slot of that ${targetKind}.`);
        const producerId = producerIdOf(ref);
        const producer = producerId !== void 0 ? byId.get(producerId) : void 0;
        if (producerId === void 0 || producer === void 0) throw new LoadError(`The deps for "${targetId}.${input}" reference "${String(producerId)}", which is not provisioned in module "${enclosingModuleName}".`);
        const required = declared.required;
        if (required !== void 0 && !satisfiesRequired(ref, required)) throw new LoadError(`The deps for "${targetId}.${input}" do not satisfy the slot's required contract.`);
    }
    for (const [input, rawValue] of Object.entries(deps)){
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(rawValue);
        if (!isNode(value) || wiring[input] !== void 0) continue;
        if (value.kind === "dependency") throw new LoadError(`Dependency input "${input}" of provisioned ${targetKind} "${targetId}" is not wired to a producer (module "${enclosingModuleName}").`);
    }
}
/**
* Flattens a value into itself plus every nested object/array member value —
* identity fodder for the ctx.secrets/ctx.params usage marking, which must
* see a forwarded source wherever it sits inside an input binding (ADR-0042).
* A secret/param source is an opaque leaf: it is pushed (a forwarded ref IS
* such a source, so identity-matching still needs it) but never descended
* into, so a ref buried in an unrelated source's payload is not falsely seen
* as used. `seen` guards object cycles so a self-referential binding cannot
* recurse forever.
*/ function deepValues(value, out, seen = /* @__PURE__ */ new WeakSet()) {
    out.push(value);
    if (typeof value !== "object" || value === null) return;
    if (isSecretSource(value) || isParamSource(value)) return;
    if (seen.has(value)) return;
    seen.add(value);
    const members = Array.isArray(value) ? value : Object.values(value);
    for (const member of members)deepValues(member, out, seen);
}
/** The (unvalidated) edges a `wiring` object implies — one dependency edge per entry; `validateWiring` does the real checking. */ function wiringEdges(wiring, targetId) {
    return Object.entries(wiring).map(([input, ref])=>({
            from: producerIdOf(ref) ?? "",
            to: targetId,
            input,
            kind: "dependency"
        }));
}
/**
* Checks the secrets wired into one provisioned child MODULE: every declared
* forwarding slot is bound to a real secret source (an `envSecret` or a
* forwarded ctx.secrets ref), and no wired key names a slot the module
* doesn't declare — the secret analog of `validateWiring`'s per-input checks,
* but resolved inline (a source carries its own name, so no whole-graph pass
* is needed).
*/ function validateSecretBinding(child, id, secretWiring, enclosingModuleName) {
    const { kind } = child;
    for (const slot of Object.keys(child.secretSlots)){
        const bound = secretWiring[slot];
        if (bound === void 0) throw new LoadError(`Secret slot "${slot}" of provisioned ${kind} "${id}" is not bound (module "${enclosingModuleName}") — bind it with envSecret('NAME') or forward ctx.secrets.`);
        if (!isSecretSource(bound)) throw new LoadError(`Secret slot "${slot}" of "${id}" (module "${enclosingModuleName}") was wired with a non-secret value — use envSecret('NAME') or a forwarded ctx.secrets ref.`);
    }
    for (const slot of Object.keys(secretWiring))if (!Object.hasOwn(child.secretSlots, slot)) throw new LoadError(`The secrets for "${id}" name "${slot}", which is not a secret slot of that ${kind} (module "${enclosingModuleName}").`);
}
/**
* Checks the params wired into a provisioned SERVICE: unlike a secret slot, a
* declared param is never required to be bound here — it may fall back to its
* own `default` (checked later, at `buildConfig`) — so this only rejects a
* wired key that names something other than a real declared param.
*/ function validateServiceParamBinding(child, id, paramWiring, enclosingModuleName) {
    for (const slot of Object.keys(paramWiring))if (!Object.hasOwn(child.params, slot)) throw new LoadError(`The params for "${id}" name "${slot}", which is not a param of that service (module "${enclosingModuleName}").`);
}
/**
* Checks the params wired into a provisioned MODULE: every declared
* param-forwarding slot must be bound to a real `ParamSource` — a slot has no
* schema of its own, so (unlike a service param) it cannot fall back to a
* literal or a default; the param analog of `validateSecretBinding`.
*/ function validateParamNeedBinding(child, id, paramWiring, enclosingModuleName) {
    for (const slot of Object.keys(child.paramSlots)){
        const bound = paramWiring[slot];
        if (bound === void 0) throw new LoadError(`Param slot "${slot}" of provisioned module "${id}" is not bound (module "${enclosingModuleName}") — bind it with a param source (e.g. envParam('NAME')) or forward ctx.params.`);
        if (!isParamSource(bound)) throw new LoadError(`Param slot "${slot}" of "${id}" (module "${enclosingModuleName}") was wired with a non-source value — a module param-forwarding slot carries no schema to validate a literal against; use envParam('NAME') or a forwarded ctx.params ref.`);
    }
    for (const slot of Object.keys(paramWiring))if (!Object.hasOwn(child.paramSlots, slot)) throw new LoadError(`The params for "${id}" name "${slot}", which is not a param slot of that module (module "${enclosingModuleName}").`);
}
/**
* Recursively flattens one module's body into the shared graph state and
* returns its resolved ModuleOutputs (one ref-port per expose key) for the
* caller (the enclosing provision() call, or Load itself for the root) to
* use. `address` is this module's OWN full address, or `undefined` for the root
* scope — its direct children then get bare (unprefixed) addresses, keeping
* a single-level module identical to before nesting existed. `wiring` supplies a
* resolved producer ref-port for each of this module's OWN declared deps (empty
* for the root, which may not declare any — see the root non-empty-deps
* check in loadModule). `nodes`, `edges`, `pending`, and `byId` are shared
* across the ENTIRE recursive flatten, not per scope — a nested module may
* forward in a producer provisioned by an ancestor scope, and it is the
* shared `byId` (keyed by full address) that lets that resolve.
*/ function flatten(moduleNode, address, wiring, secretWiring, paramWiring, nodes, edges, pending, inputBindings, paramBindings, byId) {
    const localIds = /* @__PURE__ */ new Set();
    const used = /* @__PURE__ */ new Set();
    const usedSecrets = /* @__PURE__ */ new Set();
    const usedParams = /* @__PURE__ */ new Set();
    const ctxInputs = {};
    for (const key of Object.keys(moduleNode.deps)){
        const wired = wiring[key];
        ctxInputs[key] = typeof wired === "object" && wired !== null ? {
            ...wired,
            [MODULE_INPUT_KEY]: key
        } : wired;
    }
    const markUsed = (values)=>{
        for (const value of values)for (const key of Object.keys(ctxInputs))if (value === ctxInputs[key]) used.add(key);
    };
    const ctxSecrets = {};
    for (const key of Object.keys(moduleNode.secretSlots)){
        const bound = secretWiring[key];
        ctxSecrets[key] = typeof bound === "object" && bound !== null ? {
            ...bound,
            [MODULE_SECRET_KEY]: key
        } : bound;
    }
    const markSecretsUsed = (values)=>{
        for (const value of values)for (const key of Object.keys(ctxSecrets))if (value === ctxSecrets[key]) usedSecrets.add(key);
    };
    const ctxParams = {};
    for (const key of Object.keys(moduleNode.paramSlots)){
        const bound = paramWiring[key];
        ctxParams[key] = typeof bound === "object" && bound !== null ? {
            ...bound,
            [MODULE_PARAM_KEY]: key
        } : bound;
    }
    const markParamsUsed = (values)=>{
        for (const value of values)for (const key of Object.keys(ctxParams))if (value === ctxParams[key]) usedParams.add(key);
    };
    const provision = (child, opts)=>{
        const id = opts?.id ?? child.name;
        const provisionWiring = opts?.deps;
        const provisionSecrets = opts?.secrets;
        const provisionInput = opts?.input;
        const provisionParams = opts?.params;
        if (typeof id !== "string" || id.length === 0) throw new LoadError(`provision() requires a non-empty id (module "${moduleNode.name}").`);
        if (!isConfigKeySegment(id)) throw new LoadError(`provision() id "${id}" (module "${moduleNode.name}") must contain only ASCII letters and digits ([A-Za-z0-9]) — the id becomes an address segment, and addresses derive deterministic config keys (segments uppercased and joined with "_"). "${id}" would put "${id.toUpperCase()}" inside the derived key. ("_" collides with the key separator and "." with the address separator.)`);
        if (localIds.has(id)) throw new LoadError(`Duplicate provision id "${id}" in module "${moduleNode.name}".`);
        const untrusted = child;
        if (!isNode(untrusted) || untrusted.kind !== "service" && untrusted.kind !== "resource" && untrusted.kind !== "module") throw new LoadError(`provision("${id}") expects a branded service, resource, or module node (construct it with the service()/resource()/module() factories or a pack's own).`);
        localIds.add(id);
        const fullAddress = address === void 0 ? id : `${address}.${id}`;
        if (child.kind === "resource") {
            if (provisionWiring !== void 0) throw new LoadError(`provision("${id}") received deps for a resource — a resource has no dependency slots to satisfy.`);
            if (provisionSecrets !== void 0) throw new LoadError(`provision("${id}") received secrets for a resource — a resource has no secret slots to satisfy.`);
            if (provisionInput !== void 0) throw new LoadError(`provision("${id}") received an input binding for a resource — a resource declares no input schema.`);
            if (provisionParams !== void 0) throw new LoadError(`provision("${id}") received params for a resource — a resource has no params to satisfy.`);
            if (child.type.length === 0) throw new LoadError(`provision("${id}") received a resource with an empty node type.`);
            byId.set(fullAddress, child);
            nodes.push({
                id: fullAddress,
                node: child
            });
            return refForResource(fullAddress, child);
        }
        const localWiring = {
            ...provisionWiring ?? {}
        };
        markUsed(Object.values(localWiring));
        const localSecrets = {
            ...provisionSecrets ?? {}
        };
        markSecretsUsed(Object.values(localSecrets));
        const localParams = {
            ...provisionParams ?? {}
        };
        markParamsUsed(Object.values(localParams));
        if (child.kind === "service") {
            if (provisionSecrets !== void 0) throw new LoadError(`provision("${id}") received secrets for a service — a service takes its secrets as envSecret(...) leaves of its \`input\` binding (ADR-0042), not a secrets map.`);
            if (child.inputSchema !== void 0 && provisionInput === void 0) throw new LoadError(`Input of provisioned service "${id}" is not bound (module "${moduleNode.name}") — the service declares an input schema; bind it with \`input: { … }\` on its provision() call.`);
            if (child.inputSchema === void 0 && provisionInput !== void 0) throw new LoadError(`provision("${id}") received an input binding, but the service declares no input schema (module "${moduleNode.name}").`);
            if (provisionInput !== void 0) {
                const leaves = [];
                deepValues(provisionInput, leaves);
                markSecretsUsed(leaves);
                markParamsUsed(leaves);
                inputBindings.push({
                    serviceAddress: fullAddress,
                    binding: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(provisionInput)
                });
            }
            validateServiceParamBinding(child, id, localParams, moduleNode.name);
            for (const [slot, binding] of Object.entries(localParams))paramBindings.push({
                serviceAddress: fullAddress,
                slot,
                binding
            });
            const inputs = serviceInputs(child, fullAddress);
            nodes.push(...inputs.nodes, {
                id: fullAddress,
                node: child
            });
            edges.push(...inputs.edges, ...wiringEdges(localWiring, fullAddress));
            pending.push({
                deps: child.inputs,
                wiring: localWiring,
                targetId: fullAddress,
                targetKind: "service",
                enclosingModuleName: moduleNode.name
            });
            byId.set(fullAddress, child);
            return refFor(fullAddress, child);
        }
        if (provisionInput !== void 0) throw new LoadError(`provision("${id}") received an input binding for a module — a module has no input schema; bind the input on the service that declares it.`);
        validateSecretBinding(child, id, localSecrets, moduleNode.name);
        validateParamNeedBinding(child, id, localParams, moduleNode.name);
        edges.push(...wiringEdges(localWiring, fullAddress));
        pending.push({
            deps: child.deps,
            wiring: localWiring,
            targetId: fullAddress,
            targetKind: "module",
            enclosingModuleName: moduleNode.name
        });
        const childOutputs = flatten(child, fullAddress, localWiring, localSecrets, localParams, nodes, edges, pending, inputBindings, paramBindings, byId);
        nodes.push({
            id: fullAddress,
            node: child
        });
        byId.set(fullAddress, child);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
            id: fullAddress,
            ...childOutputs
        });
    };
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        inputs: ctxInputs,
        secrets: ctxSecrets,
        params: ctxParams,
        provision: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(provision)
    });
    const outputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(moduleNode.body(ctx) ?? {});
    markUsed(Object.values(outputs));
    for (const key of Object.keys(moduleNode.deps))if (!used.has(key)) throw new LoadError(`Module "${moduleNode.name}" declares input "${key}" but never forwards it into a provision nor returns it as an output.`);
    for (const key of Object.keys(moduleNode.secretSlots))if (!usedSecrets.has(key)) throw new LoadError(`Module "${moduleNode.name}" declares secret "${key}" but never forwards it into a provision.`);
    for (const key of Object.keys(moduleNode.paramSlots))if (!usedParams.has(key)) throw new LoadError(`Module "${moduleNode.name}" declares param "${key}" but never forwards it into a provision.`);
    for (const [key, contract] of Object.entries(moduleNode.expose)){
        const port = outputs[key];
        if (port === void 0) throw new LoadError(`Module "${moduleNode.name}" declares expose "${key}" but its body did not return a port for it.`);
        if (!satisfiesRequired(port, contract)) throw new LoadError(`Module "${moduleNode.name}"'s returned port for expose "${key}" does not satisfy its declared contract.`);
    }
    return outputs;
}
function loadModule(root, opts) {
    const rootId = opts?.id ?? root.name;
    const rootDepKeys = Object.keys(root.deps);
    if (rootDepKeys.length > 0) {
        const names = rootDepKeys.map((k)=>`"${k}"`).join(", ");
        throw new LoadError(`Module "${root.name}" declares input${rootDepKeys.length > 1 ? "s" : ""} ${names} but is being deployed as the root — a root has no enclosing scope to wire them; compose "${root.name}" from another module that provisions and wires it instead.`);
    }
    const rootSecretKeys = Object.keys(root.secretSlots);
    if (rootSecretKeys.length > 0) {
        const names = rootSecretKeys.map((k)=>`"${k}"`).join(", ");
        throw new LoadError(`Module "${root.name}" declares secret${rootSecretKeys.length > 1 ? "s" : ""} ${names} but is being deployed as the root — a root has no enclosing scope to bind them; the root binds secrets with envSecret('NAME'), it does not declare secret slots of its own.`);
    }
    const rootParamKeys = Object.keys(root.paramSlots);
    if (rootParamKeys.length > 0) {
        const names = rootParamKeys.map((k)=>`"${k}"`).join(", ");
        throw new LoadError(`Module "${root.name}" declares param${rootParamKeys.length > 1 ? "s" : ""} ${names} but is being deployed as the root — a root has no enclosing scope to bind them; the root binds params directly on each provision() call, it does not declare param-forwarding slots of its own.`);
    }
    const nodes = [];
    const edges = [];
    const pending = [];
    const inputBindings = [];
    const paramBindings = [];
    const byId = /* @__PURE__ */ new Map();
    flatten(root, void 0, {}, {}, {}, nodes, edges, pending, inputBindings, paramBindings, byId);
    for (const entry of pending)validateWiring(entry, byId);
    assertDependencyDag(edges);
    const rootGraphNode = {
        id: rootId,
        node: root
    };
    return {
        root: rootGraphNode,
        nodes: [
            ...topoSort(nodes, edges),
            rootGraphNode
        ],
        edges,
        inputBindings,
        params: paramBindings
    };
}
/**
* The dependency edges must form a DAG — a cycle means neither producer can
* deploy first. Resources take no wiring, so only service/module-to-service/module
* edges can ever participate in a cycle; no special-casing needed.
*/ function assertDependencyDag(edges) {
    const adjacency = /* @__PURE__ */ new Map();
    for (const edge of edges){
        if (edge.kind !== "dependency") continue;
        const targets = adjacency.get(edge.from) ?? [];
        targets.push(edge.to);
        adjacency.set(edge.from, targets);
    }
    const visiting = /* @__PURE__ */ new Set();
    const done = /* @__PURE__ */ new Set();
    const stack = [];
    const visit = (id)=>{
        if (done.has(id)) return;
        if (visiting.has(id)) throw new LoadError(`Dependency cycle: ${[
            ...stack.slice(stack.indexOf(id)),
            id
        ].join(" → ")} — no deploy order exists.`);
        visiting.add(id);
        stack.push(id);
        for (const next of adjacency.get(id) ?? [])visit(next);
        stack.pop();
        visiting.delete(id);
        done.add(id);
    };
    for (const id of adjacency.keys())visit(id);
}
/**
* Builds the in-memory graph from a root node. A service root walks its own
* `inputs`; a module root executes its body (wiring, not user code — the
* designed exception to imports-run-nothing) and recursively flattens every
* module it provisions into one graph of hierarchical addresses. A malformed
* graph is a `LoadError` that names its fix; the individual validation rules
* live with `loadService` / `loadModule` and are covered by name in the Load
* tests. Executes nothing of the user's own code beyond module bodies.
*/ function Load(root, opts) {
    if (!isNode(root)) throw new LoadError("Load expects a branded service or module node (construct it with the service()/module() factories).");
    if (root.kind === "module") return loadModule(root, opts);
    if (root.kind === "service") return loadService(root, opts?.id ?? "root");
    throw new LoadError("Load expects a service or module root (received another node kind).");
}
;
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export _ as service>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "service",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export a as freezeNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "freezeNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export f as paramSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paramSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export g as secretSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "secretSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export i as dependency>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dependency",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export l as isSecretSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSecretSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export m as resource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export p as provisionNeed>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "provisionNeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export r as ResourceNodeBase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceNodeBase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript) <export s as isParamSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isParamSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$secret$2d$DoWGmN7m$2d$DO5Brq1Y$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/secret-DoWGmN7m-DO5Brq1Y.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/node_modules/@prisma/composer/dist/nextjs.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nextjsBuild
]);
//#region ../../0-framework/2-authoring/nextjs/dist/index.mjs
const nextjsBuild = (opts)=>({
        extension: "@prisma/composer/nextjs",
        type: "nextjs",
        module: opts.module,
        appDir: opts.appDir,
        entry: "server.js"
    });
;
}),
"[project]/node_modules/@prisma/composer/dist/secret-DoWGmN7m-DO5Brq1Y.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>isSecretString,
    "t",
    ()=>SecretBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript)");
;
//#region ../../0-framework/0-foundation/foundation/dist/secret-DoWGmN7m.mjs
/**
* A value wrapper that redacts everywhere except the one explicit reader,
* `expose()`. Sensitivity is carried by the TYPE (`SecretBox<T>`), not a flag a
* sink must remember to check: `String(box)`, template interpolation,
* `JSON.stringify`, and `console.log`/`util.inspect` all print `[REDACTED]`, so
* a secret can't leak through an accidental log or serialization.
*
* Every box carries a brand property keyed by the registered symbol
* `Symbol.for('prisma:secret-box')`, which is what `isSecretString` checks. A
* symbol key is invisible to `JSON.stringify` and `Object.keys`, so the box's
* public shape still matches the platform's own `secrecy` type
* (pdp-control-plane).
*/ const REDACTED = "[REDACTED]";
const SECRET_BOX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(Symbol.for("prisma:secret-box"));
var SecretBox = class {
    [SECRET_BOX] = true;
    #value;
    constructor(value){
        this.#value = value;
    }
    /** The sole explicit door to the wrapped value. */ expose() {
        return this.#value;
    }
    toString() {
        return REDACTED;
    }
    toJSON() {
        return REDACTED;
    }
    valueOf() {
        return REDACTED;
    }
    [Symbol.toPrimitive]() {
        return REDACTED;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return REDACTED;
    }
};
/**
* True for a redacting secret box — what a schema's secret leaf checks
* (ADR-0042). Reads the brand rather than `instanceof`, so a box from a
* duplicated module copy in a bundle counts and a look-alike does not.
*/ function isSecretString(value) {
    return typeof value === "object" && value !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(value)[SECRET_BOX] === true;
}
;
}),
"[project]/node_modules/@prisma/composer/dist/service-rpc.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RPC_ACCEPTED_KEYS_ENV",
    ()=>RPC_ACCEPTED_KEYS_ENV,
    "RPC_PEER_KEY",
    ()=>RPC_PEER_KEY,
    "contract",
    ()=>contract,
    "isRpcContract",
    ()=>isRpcContract,
    "makeClient",
    ()=>makeClient,
    "perBindingToken",
    ()=>perBindingToken,
    "rpc",
    ()=>rpc,
    "serve",
    ()=>serve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/graph-DgbALPDo-BEHF94BN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/dist-BdvFDCLV.mjs [app-rsc] (ecmascript)");
;
;
;
//#region ../../0-framework/2-authoring/service-rpc/dist/index.mjs
/** Bounded jittered backoff for retrying a dropped call. `maxRetries` is retries after the first attempt. */ const RETRY = {
    initialDelayMs: 250,
    multiplier: 2,
    maxDelayMs: 5e3,
    maxRetries: 5
};
const IDEMPOTENCY_KEY_HEADER$1 = "Idempotency-Key";
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
/** Whether a non-OK response is safe to retry: 429 or any 5xx, never another 4xx. */ function isRetryableStatus(status) {
    return status === 429 || status >= 500;
}
/** The server's `{ error }` body, if the response has one — undefined otherwise. */ async function errorDetail(res) {
    try {
        const body = await res.json();
        return typeof body === "object" && body !== null && "error" in body ? String(body.error) : void 0;
    } catch  {
        return;
    }
}
/** `<base>/rpc/<method>`, preserving a base URL's own path (e.g. a mount point). */ function methodUrl(base, method) {
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    return new URL(`rpc/${method}`, normalizedBase).toString();
}
/**
* Sends one call over `send`, retrying a thrown error, 429, or 5xx with
* full-jitter backoff. `buildRequest` runs per attempt but carries the same
* idempotency key each time — only the transport call repeats, not the key.
*/ async function callWithRetry(send, buildRequest, method) {
    let delay = RETRY.initialDelayMs;
    let retries = 0;
    for(;;){
        let res;
        try {
            res = await send(buildRequest());
        } catch (err) {
            if (retries >= RETRY.maxRetries) throw err;
            retries += 1;
            await sleep(Math.random() * delay);
            delay = Math.min(delay * RETRY.multiplier, RETRY.maxDelayMs);
            continue;
        }
        if (res.ok) return res.json();
        if (!isRetryableStatus(res.status) || retries >= RETRY.maxRetries) {
            const detail = await errorDetail(res);
            throw new Error(`RPC call "${method}" failed: ${res.status} ${res.statusText}` + (detail !== void 0 ? ` — ${detail}` : ""));
        }
        retries += 1;
        await sleep(Math.random() * delay);
        delay = Math.min(delay * RETRY.multiplier, RETRY.maxDelayMs);
    }
}
function makeClient(contract, url, opts) {
    const send = opts?.fetch ?? fetch;
    const baseHeaders = {
        "content-type": "application/json"
    };
    if (opts?.serviceKey !== void 0) baseHeaders["Authorization"] = `Bearer ${opts.serviceKey}`;
    const client = {};
    for (const method of Object.keys(contract.__cmp))client[method] = async (input)=>{
        const idempotencyKey = crypto.randomUUID();
        const body = JSON.stringify(input);
        return callWithRetry(send, ()=>new Request(methodUrl(url, method), {
                method: "POST",
                headers: {
                    ...baseHeaders,
                    [IDEMPOTENCY_KEY_HEADER$1]: idempotencyKey
                },
                body
            }), method);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(client);
}
function contract(fns) {
    const value = {
        kind: "rpc",
        __cmp: fns,
        satisfies: (required)=>value === required
    };
    return Object.freeze(value);
}
/** ADR-0031's need brand for RPC's per-binding service key — the target registers a provisioner under this. */ const RPC_PEER_KEY = Symbol.for("prisma:rpc/per-binding-key");
/** The provisioning need `rpc()`'s `serviceKey` param declares (ADR-0030): a shared, unguessable value the target mints per consumer edge. */ const perBindingToken = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"])(RPC_PEER_KEY);
function rpc(arg) {
    if (!isRpcContract(arg)) return arg;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$DgbALPDo$2d$BEHF94BN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])({
        type: "rpc",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(),
                serviceKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$BdvFDCLV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])({
                    optional: true,
                    provision: perBindingToken()
                })
            },
            hydrate: ({ url, serviceKey })=>makeClient(arg, url, {
                    serviceKey
                })
        },
        required: arg
    });
}
/** True iff `value` is an RPC-kind Contract (a function-map `__cmp`, dispatchable by serve()). */ function isRpcContract(value) {
    return typeof value === "object" && value !== null && "kind" in value && value.kind === "rpc" && "__cmp" in value && "satisfies" in value;
}
async function standardValidate(schema, value) {
    const result = await schema["~standard"].validate(value);
    if (result.issues !== void 0) throw new Error(`Schema validation failed: ${result.issues.map((issue)=>issue.message).join("; ")}`);
    return result.value;
}
/** The reserved env var the target (slice 2) writes the accepted key set to. */ const RPC_ACCEPTED_KEYS_ENV = "COMPOSER_RPC_ACCEPTED_KEYS";
function outcome(body, status = 200) {
    return {
        status,
        bodyText: JSON.stringify(body)
    };
}
function toResponse(o) {
    return new Response(o.bodyText, {
        status: o.status,
        headers: {
            "content-type": "application/json"
        }
    });
}
/** The generic message every caller-facing 500 carries — the real error goes to `console.error` instead. */ const INTERNAL_ERROR_MESSAGE = "Internal server error";
/** Request body cap. Internal RPC payloads are small records, not uploads; 1 MiB bounds a slow request's memory. */ const MAX_BODY_BYTES = 1048576;
var RequestBodyTooLargeError = class extends Error {
};
/** Reads the body as text, aborting past `maxBytes` of bytes actually read — `content-length` is caller-supplied, so untrusted. */ async function readBoundedBody(req, maxBytes) {
    const reader = req.body?.getReader();
    if (reader === void 0) return "";
    const decoder = new TextDecoder();
    let text = "";
    let total = 0;
    for(;;){
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > maxBytes) {
            await reader.cancel();
            throw new RequestBodyTooLargeError();
        }
        text += decoder.decode(value, {
            stream: true
        });
    }
    text += decoder.decode();
    return text;
}
/** How long a completed 2xx/4xx answer stays replayable for a repeated key. */ const REPLAY_TTL_MS = 6e4;
/**
* Per-method, per-key deduplication. A duplicate arriving mid-execution
* single-flights onto the same promise; a completed 2xx/4xx replays for
* REPLAY_TTL_MS; a 5xx is never kept, since that is what a retry re-executes.
* Keyed by method first, so a replay can never answer a different method.
*/ var IdempotencyStore = class {
    byMethod = /* @__PURE__ */ new Map();
    lru = /* @__PURE__ */ new Set();
    async dispatch(method, key, run) {
        const bucket = this.bucketFor(method);
        const existing = bucket.get(key);
        if (existing?.kind === "pending") return existing.promise;
        if (existing?.kind === "completed") {
            if (Date.now() - existing.completedAt < REPLAY_TTL_MS) {
                this.lru.delete(existing);
                this.lru.add(existing);
                return existing.outcome;
            }
            bucket.delete(key);
            this.lru.delete(existing);
        }
        const promise = run();
        bucket.set(key, {
            kind: "pending",
            promise
        });
        let result;
        try {
            result = await promise;
        } catch (err) {
            bucket.delete(key);
            throw err;
        }
        if (result.status >= 500) bucket.delete(key);
        else {
            const entry = {
                kind: "completed",
                outcome: result,
                completedAt: Date.now(),
                method,
                key
            };
            bucket.set(key, entry);
            this.lru.add(entry);
            this.evictOverflow();
        }
        return result;
    }
    bucketFor(method) {
        let bucket = this.byMethod.get(method);
        if (bucket === void 0) {
            bucket = /* @__PURE__ */ new Map();
            this.byMethod.set(method, bucket);
        }
        return bucket;
    }
    evictOverflow() {
        if (this.lru.size <= 1e3) return;
        const oldest = this.lru.values().next().value;
        if (oldest !== void 0) {
            this.lru.delete(oldest);
            this.byMethod.get(oldest.method)?.delete(oldest.key);
        }
    }
};
/** The provisioned accepted key set, or undefined when the deploy never provisioned one (local/test — enforcement off). */ function acceptedKeys() {
    const raw = process.env[RPC_ACCEPTED_KEYS_ENV];
    if (raw === void 0 || raw === "") return void 0;
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch  {
        return [];
    }
    return Array.isArray(parsed) && parsed.every((key)=>typeof key === "string") ? parsed : [];
}
/**
* Length-independent constant-time string equality — no early exit on the
* first mismatched character or on a length difference, so a caller cannot
* time its way toward a valid key. No `node:crypto`, to keep this module
* runtime-agnostic.
*/ function constantTimeEquals(a, b) {
    const length = Math.max(a.length, b.length);
    let diff = a.length ^ b.length;
    for(let i = 0; i < length; i++)diff |= (i < a.length ? a.charCodeAt(i) : 0) ^ (i < b.length ? b.charCodeAt(i) : 0);
    return diff === 0;
}
/** Whether `presented` is a member of `accepted` — always compares against every key. */ function isAcceptedKey(presented, accepted) {
    let matched = false;
    for (const key of accepted)matched = constantTimeEquals(presented, key) || matched;
    return matched;
}
const BEARER_PREFIX = "Bearer ";
/** The bearer token on `Authorization`, or `''` if the header is missing or malformed. */ function bearerToken(req) {
    const header = req.headers.get("authorization");
    return header?.startsWith(BEARER_PREFIX) ? header.slice(7) : "";
}
const IDEMPOTENCY_KEY_HEADER = "Idempotency-Key";
/**
* Flattens every exposed port's methods into one method → {schemas, handler}
* table. RPC dispatch is flat (`/rpc/<method>`), so a method name exposed by
* more than one port is a construction-time error, as is a missing handler.
*/ function methodTable(expose, handlers) {
    const table = /* @__PURE__ */ new Map();
    for (const [port, contract] of Object.entries(expose)){
        if (!isRpcContract(contract)) continue;
        const portHandlers = handlers[port] ?? {};
        for (const [method, fn] of Object.entries(contract.__cmp)){
            if (table.has(method)) throw new Error(`serve(): method "${method}" is exposed by more than one port — RPC dispatch is flat (POST /rpc/<method>), so method names must be unique across a service's exposed ports.`);
            const handler = portHandlers[method];
            if (handler === void 0) throw new Error(`serve(): no handler supplied for exposed method "${port}.${method}".`);
            const { input, output } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(fn);
            table.set(method, {
                input,
                output,
                handler
            });
        }
    }
    return table;
}
/**
* Routes `POST /rpc/<method>`: checks the service key, requires an
* Idempotency-Key, single-flights/replays through `IdempotencyStore`, and —
* per call — parses JSON within the body cap, validates input, calls the
* handler with `service.load()`'s deps plus `{ idempotencyKey }`, validates
* the output, and responds JSON. A handler or output-validation failure
* masks its message behind a generic 500 and logs the real error; an
* unknown method or invalid input is a 4xx. `load()` is called exactly
* once, here, before the handler ever runs.
*/ function serve(service, handlers) {
    const table = methodTable(service.expose ?? {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(handlers));
    const deps = service.load();
    const idempotency = new IdempotencyStore();
    return async (req)=>{
        const accepted = acceptedKeys();
        if (accepted !== void 0 && !isAcceptedKey(bearerToken(req), accepted)) return toResponse(outcome({
            error: "Unauthorized: missing or invalid service key"
        }, 401));
        const { pathname } = new URL(req.url);
        const methodName = /^\/rpc\/([^/]+)$/.exec(pathname)?.[1];
        if (methodName === void 0) return toResponse(outcome({
            error: `Not found: ${pathname}`
        }, 404));
        const method = table.get(methodName);
        if (method === void 0) return toResponse(outcome({
            error: `Unknown RPC method "${methodName}"`
        }, 404));
        if (req.method !== "POST") return toResponse(outcome({
            error: `Method "${methodName}" requires POST`
        }, 405));
        const idempotencyKey = req.headers.get(IDEMPOTENCY_KEY_HEADER.toLowerCase()) || void 0;
        const ctx = {
            idempotencyKey
        };
        const run = async ()=>{
            let bodyText;
            try {
                bodyText = await readBoundedBody(req, MAX_BODY_BYTES);
            } catch (err) {
                if (err instanceof RequestBodyTooLargeError) return outcome({
                    error: `Request body exceeds the ${MAX_BODY_BYTES}-byte limit`
                }, 413);
                console.error(`serve(): reading the request body for "${methodName}" failed:`, err);
                return outcome({
                    error: INTERNAL_ERROR_MESSAGE
                }, 500);
            }
            let body;
            try {
                body = JSON.parse(bodyText);
            } catch  {
                return outcome({
                    error: "Request body must be JSON"
                }, 400);
            }
            let input;
            try {
                input = await standardValidate(method.input, body);
            } catch (err) {
                return outcome({
                    error: err instanceof Error ? err.message : String(err)
                }, 400);
            }
            try {
                const result = await method.handler(input, deps, ctx);
                let output;
                try {
                    output = await standardValidate(method.output, result);
                } catch (err) {
                    console.error(`serve(): handler for "${methodName}" returned output that failed schema validation — this is a provider bug:`, err);
                    return outcome({
                        error: INTERNAL_ERROR_MESSAGE
                    }, 500);
                }
                return outcome(output);
            } catch (err) {
                console.error(`serve(): handler for "${methodName}" threw:`, err);
                return outcome({
                    error: INTERNAL_ERROR_MESSAGE
                }, 500);
            }
        };
        return toResponse(idempotencyKey === void 0 ? await run() : await idempotency.dispatch(methodName, idempotencyKey, run));
    };
}
;
}),
"[project]/node_modules/@prisma/orm-postgres/dist/errors-DfWK9xep-CYOOg0sB.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>postgresError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
;
//#region ../../../3-extensions/postgres/dist/errors-DfWK9xep.mjs
function postgresError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
;
}),
"[project]/node_modules/@prisma/orm-postgres/dist/postgres-runtime-GybTEgP4-DpGY305_.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>PostgresRuntimeImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/runtime.mjs [app-rsc] (ecmascript)");
;
//#region ../../../3-extensions/postgres/dist/postgres-runtime-GybTEgP4.mjs
var PostgresRuntimeImpl = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqlRuntimeBase"] {
};
;
}),
"[project]/node_modules/@prisma/orm-postgres/dist/postgres-static-DBYpkrmX-W8VjIiiv.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>buildPostgresStaticContext,
    "r",
    ()=>postgresStatic,
    "t",
    ()=>buildNamespacedNativeEnums
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$D3ZEAmt2$2d$DjoKUAas$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__PG_ENUM_CODEC_ID$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/codec-ids-D3ZEAmt2-DjoKUAas.mjs [app-rsc] (ecmascript) <locals> <export s as PG_ENUM_CODEC_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$Db5DaTNX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__buildNamespacedEnums$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/enum-accessor-Db5DaTNX.mjs [app-rsc] (ecmascript) <export n as buildNamespacedEnums>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$Db5DaTNX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__createEnumAccessor$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/enum-accessor-Db5DaTNX.mjs [app-rsc] (ecmascript) <export r as createEnumAccessor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/adapter__runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/builder__runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$CzWRnkxb$2d$BpyBv1vn$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresContractSerializer$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-CzWRnkxb-BpyBv1vn.mjs [app-rsc] (ecmascript) <export t as PostgresContractSerializer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
;
;
;
;
//#region ../../../3-extensions/postgres/dist/postgres-static-DBYpkrmX.mjs
/**
* Reads the namespace's `valueSet` entries directly off the plain contract
* shape (`storage.namespaces[id].entries.valueSet`), not through a hydrated
* `PostgresSchema` class instance — the same plain-data path `db.enums`
* reads `domain.namespaces[id].enum` through. Works on a `validateContract`'d
* JSON contract as well as one produced by `PostgresContractSerializer`.
*
* A native enum is never re-emitted as its own entity: once `native_enum` is
* lowered, its member values live on in the `valueSet` entry it derives (the
* SQL family's generic `deriveValueSet` mechanism) — the same slot
* `column.valueSet`-typed columns read. A member is a value, not a
* name→value pair (matching `CREATE TYPE … AS ENUM ('a', 'b')`), so each
* value doubles as its own accessor name.
*/ function buildNativeEnumsMapForNamespace(storage, namespaceId) {
    const result = {};
    const valueSets = storage.namespaces[namespaceId]?.entries.valueSet;
    if (!valueSets) return result;
    for (const [name, valueSet] of Object.entries(valueSets))result[name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$Db5DaTNX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__createEnumAccessor$3e$__["createEnumAccessor"])({
        codecId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$codec$2d$ids$2d$D3ZEAmt2$2d$DjoKUAas$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__s__as__PG_ENUM_CODEC_ID$3e$__["PG_ENUM_CODEC_ID"],
        members: valueSet.values.map((value)=>({
                name: String(value),
                value
            }))
    });
    return result;
}
function buildNamespacedNativeEnums(storage) {
    const result = {};
    for (const namespaceId of Object.keys(storage.namespaces))result[namespaceId] = buildNativeEnumsMapForNamespace(storage, namespaceId);
    return result;
}
function buildPostgresStaticContext(context, rawCodecInferer) {
    const sqlDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"])({
        context,
        rawCodecInferer
    });
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRawLane"])({
        context,
        rawCodecInferer
    });
    const enums = Object.freeze((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$enum$2d$accessor$2d$Db5DaTNX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__buildNamespacedEnums$3e$__["buildNamespacedEnums"])(context.contract.domain));
    const nativeEnums = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Object.freeze(buildNamespacedNativeEnums(context.contract.storage)));
    return {
        context,
        contract: context.contract,
        enums,
        nativeEnums,
        sql: sqlDb,
        raw
    };
}
function postgresStatic(options) {
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$CzWRnkxb$2d$BpyBv1vn$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresContractSerializer$3e$__["PostgresContractSerializer"]().deserializeContract(options.contractJson));
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSqlExecutionStack"])({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        adapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        extensions: options.extensions ?? []
    });
    return buildPostgresStaticContext((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExecutionContext"])({
        contract,
        stack
    }), stack.adapter.rawCodecInferer);
}
;
}),
"[project]/node_modules/@prisma/orm-postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>postgres,
    "isPgClient",
    ()=>isPgClient,
    "isPgPool",
    ()=>isPgPool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-postgres/dist/errors-DfWK9xep-CYOOg0sB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$static$2d$DBYpkrmX$2d$W8VjIiiv$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-postgres/dist/postgres-static-DBYpkrmX-W8VjIiiv.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$runtime$2d$GybTEgP4$2d$DpGY305_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-postgres/dist/postgres-runtime-GybTEgP4-DpGY305_.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$BIc$2d$ehme$2d$ouBQPoEL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/internal-error-BIc-ehme-ouBQPoEL.mjs [app-rsc] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/adapter__runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/builder__runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/runtime.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/target__runtime.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$CzWRnkxb$2d$BpyBv1vn$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresContractSerializer$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/postgres-contract-view-CzWRnkxb-BpyBv1vn.mjs [app-rsc] (ecmascript) <export t as PostgresContractSerializer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$BJrfP1e8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-target-postgres/dist/runtime-BJrfP1e8.mjs [app-rsc] (ecmascript) <locals> <export t as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__$3c$export__suppressIdleConnectionErrors__as__n$3e$__$3c$export__n__as__suppressIdleConnectionErrors$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/suppress-idle-connection-errors-DzApeUb3.mjs [app-rsc] (ecmascript) <export t as suppressIdleConnectionErrors> <export suppressIdleConnectionErrors as n> <export n as suppressIdleConnectionErrors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$BNwBzmRd$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__instantiateExecutionStack$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-framework/dist/execution-BNwBzmRd.mjs [app-rsc] (ecmascript) <export r as instantiateExecutionStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-family-sql/dist/orm-client.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$BJrfP1e8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$BJrfP1e8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
//#region ../../../3-extensions/postgres/dist/runtime.mjs
const isPgPool = (pg)=>"totalCount" in pg && "idleCount" in pg && "waitingCount" in pg;
const isPgClient = (pg)=>"escapeIdentifier" in pg && "escapeLiteral" in pg;
function validatePostgresUrl(url) {
    const trimmed = url.trim();
    if (trimmed.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Postgres URL must be a non-empty string", {
        meta: {
            extension: "postgres",
            reason: "empty url"
        }
    });
    let parsed;
    try {
        parsed = new URL(trimmed);
    } catch  {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Postgres URL must be a valid URL", {
            meta: {
                extension: "postgres",
                reason: "unparseable url"
            }
        });
    }
    if (parsed.protocol !== "postgres:" && parsed.protocol !== "postgresql:") throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Postgres URL must use postgres:// or postgresql://", {
        meta: {
            extension: "postgres",
            reason: "wrong scheme",
            received: parsed.protocol
        }
    });
    return trimmed;
}
function resolvePostgresBinding(options) {
    if (Number(options.binding !== void 0) + Number(options.url !== void 0) + Number(options.pg !== void 0) !== 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Provide one binding input: binding, url, or pg", {
        fix: "Pass exactly one of `binding`, `url`, or `pg`.",
        meta: {
            extension: "postgres",
            reason: "zero or multiple binding inputs"
        }
    });
    if (options.binding !== void 0) return options.binding;
    if (options.url !== void 0) return {
        kind: "url",
        url: validatePostgresUrl(options.url)
    };
    const pgBinding = options.pg;
    if (pgBinding === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$BIc$2d$ehme$2d$ouBQPoEL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("Invariant violation: expected pg binding after validation");
    if (isPgPool(pgBinding)) return {
        kind: "pgPool",
        pool: pgBinding
    };
    if (isPgClient(pgBinding)) return {
        kind: "pgClient",
        client: pgBinding
    };
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_INVALID", "Unable to determine pg binding type from pg input; use binding with explicit kind", {
        fix: "Pass `binding: { kind: \"pgPool\", pool }` or `binding: { kind: \"pgClient\", client }` instead of `pg`.",
        meta: {
            extension: "postgres",
            reason: "unrecognizable pg object"
        }
    });
}
function resolveOptionalPostgresBinding(options) {
    if (Number(options.binding !== void 0) + Number(options.url !== void 0) + Number(options.pg !== void 0) === 0) return;
    return resolvePostgresBinding(options);
}
function hasContractJson(options) {
    return "contractJson" in options;
}
const contractSerializer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$postgres$2d$contract$2d$view$2d$CzWRnkxb$2d$BpyBv1vn$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__PostgresContractSerializer$3e$__["PostgresContractSerializer"]();
function resolveContract(options) {
    const contractJson = hasContractJson(options) ? options.contractJson : contractSerializer.serializeContract(options.contract);
    return contractSerializer.deserializeContract(contractJson);
}
function toRuntimeBinding(binding, options) {
    if (binding.kind !== "url") return binding;
    return {
        kind: "pgPool",
        pool: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$suppress$2d$idle$2d$connection$2d$errors$2d$DzApeUb3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__suppressIdleConnectionErrors$3e$__$3c$export__suppressIdleConnectionErrors__as__n$3e$__$3c$export__n__as__suppressIdleConnectionErrors$3e$__["suppressIdleConnectionErrors"])(new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
            connectionString: binding.url,
            connectionTimeoutMillis: options.poolOptions?.connectionTimeoutMillis ?? 2e4,
            idleTimeoutMillis: options.poolOptions?.idleTimeoutMillis ?? 3e4
        }))
    };
}
function postgres(options) {
    const contract = resolveContract(options);
    let binding = resolveOptionalPostgresBinding(options);
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSqlExecutionStack"])({
        target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$target_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
        adapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$adapter_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$BJrfP1e8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__["default"],
        extensions: options.extensions ?? []
    });
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExecutionContext"])({
        contract,
        stack,
        driver: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$target$2d$postgres$2f$dist$2f$runtime$2d$BJrfP1e8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__t__as__default$3e$__["default"]
    });
    const { sql: sql$1, raw: rawSqlTag, enums, nativeEnums } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$static$2d$DBYpkrmX$2d$W8VjIiiv$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(context, stack.adapter.rawCodecInferer);
    let runtimeInstance;
    let runtimeDriver;
    let driverConnected = false;
    let connectPromise;
    let backgroundConnectError;
    let closed = false;
    let ownedDispose;
    const connectDriver = async (resolvedBinding)=>{
        if (driverConnected) return;
        if (!runtimeDriver) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$BIc$2d$ehme$2d$ouBQPoEL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("Postgres runtime driver missing");
        if (connectPromise) return connectPromise;
        const runtimeBinding = toRuntimeBinding(resolvedBinding, options);
        if (resolvedBinding.kind === "url" && runtimeBinding.kind === "pgPool") {
            const pool = runtimeBinding.pool;
            let disposed = false;
            ownedDispose = async ()=>{
                if (disposed) return;
                disposed = true;
                await pool.end().then(()=>void 0);
            };
        }
        connectPromise = runtimeDriver.connect(runtimeBinding).then(()=>{
            driverConnected = true;
        }).catch(async (err)=>{
            backgroundConnectError = err;
            connectPromise = void 0;
            await ownedDispose?.().catch(()=>void 0);
            throw err;
        });
        return connectPromise;
    };
    const getRuntime = ()=>{
        if (closed) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("DRIVER.NOT_CONNECTED", "Postgres client is closed", {
            why: "close() was called on this client.",
            fix: "Create a new postgres(...) client.",
            meta: {
                extension: "postgres"
            }
        });
        if (backgroundConnectError !== void 0) throw backgroundConnectError;
        if (runtimeInstance) return runtimeInstance;
        const stackInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$execution$2d$BNwBzmRd$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__instantiateExecutionStack$3e$__["instantiateExecutionStack"])(stack);
        const driverDescriptor = stack.driver;
        if (!driverDescriptor) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$BIc$2d$ehme$2d$ouBQPoEL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"]("Driver descriptor missing from execution stack");
        const driver = driverDescriptor.create({
            cursor: {
                disabled: true
            }
        });
        runtimeDriver = driver;
        if (binding !== void 0) connectDriver(binding).catch(()=>void 0);
        runtimeInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$postgres$2d$runtime$2d$GybTEgP4$2d$DpGY305_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]({
            context,
            adapter: stackInstance.adapter,
            driver,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("verifyMarker", options.verifyMarker),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("middleware", options.middleware)
        });
        return runtimeInstance;
    };
    return {
        sql: sql$1,
        orm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orm"])({
            runtime: {
                query (plan) {
                    return getRuntime().query(plan);
                },
                execute (plan) {
                    return getRuntime().execute(plan);
                },
                connection () {
                    return getRuntime().connection();
                }
            },
            context
        }),
        enums,
        nativeEnums,
        raw: rawSqlTag,
        context,
        contract,
        stack,
        async connect (bindingInput) {
            if (closed) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("DRIVER.NOT_CONNECTED", "Postgres client is closed", {
                why: "close() was called on this client.",
                fix: "Create a new postgres(...) client.",
                meta: {
                    extension: "postgres"
                }
            });
            if (driverConnected || connectPromise) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("DRIVER.ALREADY_CONNECTED", "Postgres client already connected", {
                fix: "Call connect() at most once per client.",
                meta: {
                    extension: "postgres"
                }
            });
            if (bindingInput !== void 0) binding = resolvePostgresBinding(bindingInput);
            if (binding === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$errors$2d$DfWK9xep$2d$CYOOg0sB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("RUNTIME.BINDING_MISSING", "Postgres binding not configured. Pass url/pg/binding to postgres(...) or call db.connect({ ... }).", {
                meta: {
                    extension: "postgres"
                }
            });
            const runtime = getRuntime();
            if (driverConnected) return runtime;
            await connectDriver(binding);
            return runtime;
        },
        runtime () {
            return getRuntime();
        },
        prepare (declaration, callback) {
            return getRuntime().prepare(declaration, (params)=>callback(sql$1, params));
        },
        transaction (fn) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withTransaction"])(getRuntime(), (txCtx)=>{
                const rawCodecInferer = stack.adapter.rawCodecInferer;
                const txSql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$builder_$5f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"])({
                    context,
                    rawCodecInferer
                });
                const txOrm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$orm$2d$client$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orm"])({
                    runtime: {
                        query (plan) {
                            return txCtx.query(plan);
                        },
                        execute (plan) {
                            return txCtx.execute(plan);
                        }
                    },
                    context
                });
                return fn(Object.assign(Object.create(txCtx), {
                    sql: txSql,
                    orm: txOrm,
                    enums,
                    nativeEnums
                }));
            });
        },
        async close () {
            if (closed) return;
            closed = true;
            await connectPromise?.catch(()=>void 0);
            await ownedDispose?.();
        },
        [Symbol.asyncDispose] () {
            return this.close();
        }
    };
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/arkregex/out/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arkregex$2f$out$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arkregex/out/regex.js [app-rsc] (ecmascript)");
;
}),
"[project]/node_modules/arkregex/out/regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "regex",
    ()=>regex
]);
const regex = (src, flags)=>new RegExp(src, flags);
Object.assign(regex, {
    as: regex
});
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/pg-cursor/esm/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ESM wrapper for pg-cursor
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pg$2d$cursor$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pg-cursor/index.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pg$2d$cursor$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/node_modules/pg-cursor/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// note: can remove these deep requires when we bump min version of pg to 9.x
const Result = __turbopack_context__.r("[externals]/pg/lib/result.js [external] (pg/lib/result.js, cjs, [project]/node_modules/pg)");
const prepare = __turbopack_context__.r("[externals]/pg/lib/utils.js [external] (pg/lib/utils.js, cjs, [project]/node_modules/pg)").prepareValue;
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)").EventEmitter;
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
let nextUniqueID = 1 // concept borrowed from org.postgresql.core.v3.QueryExecutorImpl
;
class Cursor extends EventEmitter {
    constructor(text, values, config){
        super();
        this._conf = config || {};
        this.text = text;
        this.values = values ? values.map(prepare) : null;
        this.connection = null;
        this._queue = [];
        this.state = 'initialized';
        this._result = new Result(this._conf.rowMode, this._conf.types);
        this._Promise = this._conf.Promise || /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
        this._cb = null;
        this._rows = null;
        this._portal = null;
        this._ifNoData = this._ifNoData.bind(this);
        this._rowDescription = this._rowDescription.bind(this);
    }
    _ifNoData() {
        this.state = 'idle';
        this._shiftQueue();
        if (this.connection) {
            this.connection.removeListener('rowDescription', this._rowDescription);
        }
    }
    _rowDescription() {
        if (this.connection) {
            this.connection.removeListener('noData', this._ifNoData);
        }
    }
    submit(connection) {
        this.state = 'submitted';
        this.connection = connection;
        this._portal = 'C_' + nextUniqueID++;
        const con = connection;
        con.parse({
            text: this.text
        }, true);
        con.bind({
            portal: this._portal,
            values: this.values
        }, true);
        con.describe({
            type: 'P',
            name: this._portal
        }, true);
        con.flush();
        if (this._conf.types) {
            this._result._getTypeParser = this._conf.types.getTypeParser;
        }
        con.once('noData', this._ifNoData);
        con.once('rowDescription', this._rowDescription);
    }
    _shiftQueue() {
        if (this._queue.length) {
            this._getRows.apply(this, this._queue.shift());
        }
    }
    _closePortal() {
        if (this.state === 'done') return;
        // because we opened a named portal to stream results
        // we need to close the same named portal.  Leaving a named portal
        // open can lock tables for modification if inside a transaction.
        // see https://github.com/brianc/node-pg-cursor/issues/56
        this.connection.close({
            type: 'P',
            name: this._portal
        });
        // If we've received an error we already sent a sync message.
        // do not send another sync as it triggers another readyForQuery message.
        if (this.state !== 'error') {
            this.connection.sync();
        }
        this.state = 'done';
    }
    handleRowDescription(msg) {
        this._result.addFields(msg.fields);
        this.state = 'idle';
        this._shiftQueue();
    }
    handleDataRow(msg) {
        const row = this._result.parseRow(msg.fields);
        this.emit('row', row, this._result);
        this._rows.push(row);
    }
    _sendRows() {
        this.state = 'idle';
        setImmediate(()=>{
            const cb = this._cb;
            // remove callback before calling it
            // because likely a new one will be added
            // within the call to this callback
            this._cb = null;
            if (cb) {
                this._result.rows = this._rows;
                cb(null, this._rows, this._result);
            }
            this._rows = [];
        });
    }
    handleCommandComplete(msg) {
        this._result.addCommandComplete(msg);
        this._closePortal();
    }
    handlePortalSuspended() {
        this._sendRows();
    }
    handleReadyForQuery() {
        this._sendRows();
        this.state = 'done';
        this.emit('end', this._result);
    }
    handleEmptyQuery() {
        this.connection.sync();
    }
    handleError(msg) {
        // If this cursor has already closed, don't try to handle the error.
        if (this.state === 'done') return;
        // If we're in an initialized state we've never been submitted
        // and don't have a connection instance reference yet.
        // This can happen if you queue a stream and close the client before
        // the client has submitted the stream.  In this scenario we don't have
        // a connection so there's nothing to unsubscribe from.
        if (this.state !== 'initialized') {
            this.connection.removeListener('noData', this._ifNoData);
            this.connection.removeListener('rowDescription', this._rowDescription);
            // call sync to trigger a readyForQuery
            this.connection.sync();
        }
        this.state = 'error';
        this._error = msg;
        // satisfy any waiting callback
        if (this._cb) {
            this._cb(msg);
        }
        // dispatch error to all waiting callbacks
        for(let i = 0; i < this._queue.length; i++){
            const queuedCallback = this._queue[i][1];
            queuedCallback.call(this, msg);
        }
        this._queue.length = 0;
        if (this.listenerCount('error') > 0) {
            // only dispatch error events if we have a listener
            this.emit('error', msg);
        }
    }
    _getRows(rows, cb) {
        this.state = 'busy';
        this._cb = cb;
        this._rows = [];
        const msg = {
            portal: this._portal,
            rows: rows
        };
        this.connection.execute(msg, true);
        this.connection.flush();
    }
    // users really shouldn't be calling 'end' here and terminating a connection to postgres
    // via the low level connection.end api
    end(cb) {
        if (this.state !== 'initialized') {
            this.connection.sync();
        }
        this.connection.once('end', cb);
        this.connection.end();
    }
    close(cb) {
        let promise;
        if (!cb) {
            promise = new this._Promise((resolve, reject)=>{
                cb = (err)=>err ? reject(err) : resolve();
            });
        }
        if (!this.connection || this.state === 'done') {
            setImmediate(cb);
            return promise;
        }
        this._closePortal();
        this.connection.once('readyForQuery', function() {
            cb();
        });
        // Return the promise (or undefined)
        return promise;
    }
    read(rows, cb) {
        let promise;
        if (!cb) {
            promise = new this._Promise((resolve, reject)=>{
                cb = (err, rows)=>err ? reject(err) : resolve(rows);
            });
        }
        if (this.state === 'idle' || this.state === 'submitted') {
            this._getRows(rows, cb);
        } else if (this.state === 'busy' || this.state === 'initialized') {
            this._queue.push([
                rows,
                cb
            ]);
        } else if (this.state === 'error') {
            setImmediate(()=>cb(this._error));
        } else if (this.state === 'done') {
            setImmediate(()=>cb(null, []));
        } else {
            throw new Error('Unknown state: ' + this.state);
        }
        // Return the promise (or undefined)
        return promise;
    }
}
Cursor.prototype.end = util.deprecate(Cursor.prototype.end, 'Cursor.end is deprecated. Call end on the client itself to end a connection to the database.');
module.exports = Cursor;
}),
"[project]/node_modules/temporal-utils/dist/errorMessages.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Low-Level
__turbopack_context__.s([
    "expectedFinite",
    ()=>expectedFinite,
    "expectedPositive",
    ()=>expectedPositive,
    "forbiddenBigIntToNumber",
    ()=>forbiddenBigIntToNumber,
    "invalidEntity",
    ()=>invalidEntity,
    "invalidObject",
    ()=>invalidObject,
    "invalidOverflowOption",
    ()=>invalidOverflowOption,
    "nonOneRoundingIncrement",
    ()=>nonOneRoundingIncrement,
    "numberOutOfRange",
    ()=>numberOutOfRange,
    "unsupportedWeekNumbers",
    ()=>unsupportedWeekNumbers
]);
const expectedPositive = (entityName, num)=>`Non-positive ${entityName}: ${num}`;
const expectedFinite = (entityName, num)=>`Non-finite ${entityName}: ${num}`;
const forbiddenBigIntToNumber = (entityName)=>`Cannot convert bigint to ${entityName}`;
const invalidObject = 'Invalid object';
const numberOutOfRange = (entityName, val, min, max)=>invalidEntity(entityName, val) + `; must be between ${min}-${max}`;
const invalidEntity = (fieldName, val)=>`Invalid ${fieldName}: ${val}`;
const unsupportedWeekNumbers = 'Calendar week operations forbidden';
const nonOneRoundingIncrement = 'Non-1 roundingIncrement not allowed';
const invalidOverflowOption = 'Invalid overflow option';
}),
"[project]/node_modules/temporal-utils/dist/protected-error-messages.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/temporal-utils/dist/protected.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/temporal-utils/dist/utils.js [app-rsc] (ecmascript)");
;
}),
"[project]/node_modules/temporal-utils/dist/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constrainToRange",
    ()=>constrainToRange,
    "isObjectLike",
    ()=>isObjectLike,
    "nanoInHour",
    ()=>nanoInHour,
    "nanoInMicro",
    ()=>nanoInMicro,
    "nanoInMilli",
    ()=>nanoInMilli,
    "nanoInMinute",
    ()=>nanoInMinute,
    "nanoInSec",
    ()=>nanoInSec,
    "normalizeNumberInRange",
    ()=>normalizeNumberInRange,
    "normalizeOptions",
    ()=>normalizeOptions,
    "requireNumberIsPositive",
    ()=>requireNumberIsPositive,
    "requireObjectLike",
    ()=>requireObjectLike,
    "toFiniteNumber",
    ()=>toFiniteNumber,
    "toIntegerWithTrunc",
    ()=>toIntegerWithTrunc,
    "toPositiveIntegerWithTruncation",
    ()=>toPositiveIntegerWithTruncation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/temporal-utils/dist/errorMessages.js [app-rsc] (ecmascript)");
;
const nanoInMicro = 1_000;
const nanoInMilli = 1_000_000;
const nanoInSec = 1_000_000_000;
const nanoInMinute = 60_000_000_000;
const nanoInHour = 3_600_000_000_000;
function normalizeOptions(options) {
    if (options === undefined) {
        return Object.create(null);
    }
    return requireObjectLike(options);
}
function toFiniteNumber(arg, entityName = 'number') {
    if (typeof arg === 'bigint') {
        throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forbiddenBigIntToNumber"](entityName));
    }
    arg = Number(arg);
    if (!Number.isFinite(arg)) {
        throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["expectedFinite"](entityName, arg));
    }
    return arg;
}
function toIntegerWithTrunc(arg, entityName) {
    return Math.trunc(toFiniteNumber(arg, entityName)) || 0; // ensure no -0
}
function toPositiveIntegerWithTruncation(arg, entityName) {
    return requireNumberIsPositive(toIntegerWithTrunc(arg, entityName), entityName);
}
function requireNumberIsPositive(num, entityName = 'number') {
    if (num <= 0) {
        throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["expectedPositive"](entityName, num));
    }
    return num;
}
function constrainToRange(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function isObjectLike(arg) {
    return arg !== null && (typeof arg === 'object' || typeof arg === 'function');
}
function requireObjectLike(arg) {
    if (!isObjectLike(arg)) {
        throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidObject"]);
    }
    return arg;
}
function normalizeNumberInRange(num, min, max, options) {
    const clamped = constrainToRange(num, min, max);
    if (normalizeOverflow(options) === 'reject' && num !== clamped) {
        throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numberOutOfRange"]('number', num, min, max));
    }
    return clamped;
}
/*
Match Temporal's field overflow shape without depending on the polyfill's
internal option readers. Undefined defaults to constrain; explicit reject asks
for exact in-range input.
*/ function normalizeOverflow(options) {
    options = normalizeOptions(options);
    const overflow = options.overflow;
    if (overflow === undefined) {
        return 'constrain';
    }
    if (overflow === 'constrain' || overflow === 'reject') {
        return overflow;
    }
    throw new RangeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$utils$2f$dist$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidOverflowOption"]);
}
}),
"[project]/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>n,
    "r",
    ()=>t,
    "t",
    ()=>e
]);
function e(e) {
    for(let t = e.length - 1; t >= 0; --t){
        if (e[t] < 255) return e[t] += 1, !0;
        e[t] = 0;
    }
    return !1;
}
function t(e, t, n) {
    e[t] = n / 1099511627776 & 255, e[t + 1] = n / 4294967296 & 255, e[t + 2] = n / 16777216 & 255, e[t + 3] = n / 65536 & 255, e[t + 4] = n / 256 & 255, e[t + 5] = n & 255;
}
function n(e, t, n) {
    e[t] = n >>> 24 & 255, e[t + 1] = n >>> 16 & 255, e[t + 2] = n >>> 8 & 255, e[t + 3] = n & 255;
}
;
}),
"[project]/node_modules/uniku/build/cuid2/cuid2.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cuid2",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@noble/hashes/sha3.js [app-rsc] (ecmascript)");
;
;
;
const i = /^[a-z][0-9a-z]+$/, a = `0123456789abcdefghijklmnopqrstuvwxyz`, o = new TextEncoder, s = {
    counter: void 0,
    fingerprint: void 0
};
function c() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])() % 476782368;
}
function l(e) {
    let t = 0n;
    for (let n of e)t = t * 256n + BigInt(n);
    return t;
}
function u(e) {
    if (e === 0n) return `0`;
    let t = [];
    for(; e > 0n;)t.push(a[Number(e % 36n)]), e /= 36n;
    return t.reverse().join(``);
}
function d(e) {
    return `abcdefghijklmnopqrstuvwxyz`[Math.floor(e() * 26)];
}
function f(e, t) {
    let n = Array(e);
    for(let r = 0; r < e; r++)n[r] = a[Math.floor(t() * 36)];
    return n.join(``);
}
function p(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha3_512"])(o.encode(e));
}
function m() {
    let e = h;
    return u(l(p(Object.keys(globalThis).toString() + f(32, e)))).slice(1, 33);
}
function h() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])() / 4294967296;
}
function g(e) {
    if (e) {
        if (e.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random byte array cannot be empty`, {
            strategy: `cuid`
        });
        let n = 0;
        return ()=>{
            let t = e[n % e.length] / 256;
            return n += 1, t;
        };
    }
    return h;
}
function _(e) {
    let n = e?.length;
    if (n !== void 0 && (!Number.isInteger(n) || n < 2 || n > 32)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`LENGTH_OUT_OF_RANGE`, `CUID2 length must be between 2 and 32. Received: ${n}`, {
        strategy: `cuid`
    });
    let r = n ?? 24, i = g(e?.random);
    s.counter === void 0 && (s.counter = c()), s.fingerprint === void 0 && (s.fingerprint = m());
    let a = d(i), o = Date.now().toString(36);
    s.counter += 1;
    let h = s.counter.toString(36);
    return a + u(l(p(o + f(r, i) + h + s.fingerprint))).slice(1, r);
}
function v(e) {
    return typeof e == `string` && e.length >= 2 && e.length <= 32 && i.test(e);
}
const y = Object.assign(_, {
    isValid: v
});
;
}),
"[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BufferError",
    ()=>i,
    "ERROR_CODES",
    ()=>e,
    "InvalidInputError",
    ()=>n,
    "ParseError",
    ()=>r,
    "UniqueIdError",
    ()=>t
]);
const e = [
    `TIMESTAMP_OUT_OF_RANGE`,
    `CONFLICTING_OPTIONS`,
    `COUNTER_OUT_OF_RANGE`,
    `NODE_OUT_OF_RANGE`,
    `NODE_BITS_OUT_OF_RANGE`,
    `EPOCH_INVALID`,
    `PROCESS_ID_OUT_OF_RANGE`,
    `MACHINE_ID_BYTES_TOO_SHORT`,
    `RANDOM_BYTES_TOO_SHORT`,
    `RANDOM_OVERFLOW`,
    `LENGTH_OUT_OF_RANGE`,
    `ALPHABET_OUT_OF_RANGE`,
    `ALPHABET_INVALID_CHAR`,
    `ALPHABET_DUPLICATE`,
    `PREFIX_TOO_LONG`,
    `PREFIX_INVALID_CHAR`,
    `PREFIX_INVALID_BOUNDARY`,
    `UUID_NOT_V7`,
    `BYTES_INVALID_LENGTH`,
    `BUFFER_OUT_OF_BOUNDS`,
    `INVALID_CHAR`,
    `INVALID_LENGTH`,
    `INVALID_FORMAT`,
    `NON_CANONICAL`,
    `VALUE_OUT_OF_RANGE`
];
var t = class extends Error {
    strategy;
    constructor(e, t){
        super(e), this.name = this.constructor.name, this.strategy = t?.strategy;
    }
}, n = class extends t {
    code;
    _tag = `InvalidInputError`;
    constructor(e, t, n){
        super(t, n), this.code = e;
    }
}, r = class extends t {
    code;
    _tag = `ParseError`;
    constructor(e, t, n){
        super(t, n), this.code = e;
    }
}, i = class extends t {
    code;
    _tag = `BufferError`;
    constructor(e, t, n){
        super(t, n), this.code = e;
    }
};
;
}),
"[project]/node_modules/uniku/build/ksuid/ksuid.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ksuid",
    ()=>C
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$timestamp$2d$ChrSuQCR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/timestamp-ChrSuQCR.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
const c = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`, l = 62n, u = (1n << 160n) - 1n, d = new Uint8Array(65536);
d.fill(255);
for(let e = 0; e < 62; e += 1)d[c.charCodeAt(e)] = e;
function f(e) {
    if (e.length < 20) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `KSUID bytes must be at least 20 bytes, got ${e.length}`, {
        strategy: `ksuid`
    });
    let t = 0n;
    for(let n = 0; n < 20; n += 1)t = t << 8n | BigInt(e[n]);
    let r = ``;
    for(; t > 0n;){
        let e = t % l;
        t /= l, r = c[Number(e)] + r;
    }
    return r.padStart(27, `0`);
}
function p(e) {
    if (e.length !== 27) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `KSUID string must be 27 characters, got ${e.length}`, {
        strategy: `ksuid`
    });
    let t = 0n;
    for(let n = 0; n < 27; n += 1){
        let r = d[e.charCodeAt(n)];
        if (r === 255) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_CHAR`, `Invalid KSUID character: ${e[n]}`, {
            strategy: `ksuid`
        });
        t = t * l + BigInt(r);
    }
    if (t > u) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`VALUE_OUT_OF_RANGE`, `KSUID string exceeds 160-bit range`, {
        strategy: `ksuid`
    });
    let n = new Uint8Array(20);
    for(let e = 19; e >= 0; --e)n[e] = Number(t & 255n), t >>= 8n;
    return n;
}
const m = 14e8, h = f(new Uint8Array(20).fill(255)), g = /^[0-9A-Za-z]{27}$/;
function _(e, t, n, r) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(n, r, e);
    for(let e = 0; e < 16; e += 1)n[r + 4 + e] = t[e];
}
function v(i, a, o = 0) {
    let c = i?.random;
    if (c && c.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16 for KSUID`, {
        strategy: `ksuid`
    });
    let l, u = i === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$timestamp$2d$ChrSuQCR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(i, m, 5694967295, `ksuid`);
    l = u === void 0 ? Math.floor(Date.now() / 1e3) - m : u - m;
    let d = c ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])();
    if (a) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a, o, 20)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `KSUID byte range ${o}:${o + 20 - 1} is out of buffer bounds`, {
            strategy: `ksuid`
        });
        return _(l, d, a, o), a;
    }
    let p = new Uint8Array(20);
    return _(l, d, p, 0), f(p);
}
function y(e) {
    return p(e);
}
function b(e) {
    if (e.length !== 20) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `KSUID bytes must be exactly 20 bytes, got ${e.length}`, {
        strategy: `ksuid`
    });
    return f(e);
}
function x(e) {
    let t = p(e);
    return (((t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]) >>> 0) + m) * 1e3;
}
function S(e) {
    return typeof e == `string` && e.length === 27 && g.test(e) && e <= h;
}
const C = Object.assign(v, {
    toBytes: y,
    fromBytes: b,
    timestamp: x,
    isValid: S,
    NIL: `000000000000000000000000000`,
    MAX: h
});
;
}),
"[project]/node_modules/uniku/build/nanoid/nanoid.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "URL_ALPHABET",
    ()=>n,
    "nanoid",
    ()=>h
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
;
const n = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-`, r = 2048, i = /^[A-Za-z0-9_-]+$/, a = new TextDecoder;
let o, s = ``, c = 0;
function l(e) {
    let t = Math.min(e * 128, 65536);
    if ((!o || o.length < t) && (o = new Uint8Array(t)), c + e > s.length) {
        crypto.getRandomValues(o);
        for(let e = 0; e < o.length; e++)o[e] = n.charCodeAt(o[e] & 63);
        s = a.decode(o), c = 0;
    }
}
function u(e) {
    l(e);
    let t = s.substring(c, c + e);
    return c += e, t;
}
function d(t) {
    if (t.length < 2) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_OUT_OF_RANGE`, `Alphabet must contain at least 2 characters`, {
        strategy: `nanoid`
    });
    if (t.length > 256) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_OUT_OF_RANGE`, `Alphabet must not exceed 256 characters`, {
        strategy: `nanoid`
    });
    let n = new Set;
    for (let r of t){
        let t = r.charCodeAt(0);
        if (t < 32 || t > 126) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_INVALID_CHAR`, `Alphabet must contain only printable ASCII characters (32-126)`, {
            strategy: `nanoid`
        });
        if (n.has(r)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`ALPHABET_DUPLICATE`, `Duplicate character in alphabet: "${r}"`, {
            strategy: `nanoid`
        });
        n.add(r);
    }
}
function f(t) {
    if (!Number.isInteger(t) || t < 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`LENGTH_OUT_OF_RANGE`, `Length must be a non-negative integer`, {
        strategy: `nanoid`
    });
    if (t > r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`LENGTH_OUT_OF_RANGE`, `Length must not exceed ${r}`, {
        strategy: `nanoid`
    });
}
function p(t) {
    if (t === void 0) return u(21);
    let r = 21, i = n, a;
    if (typeof t == `number`) r = t;
    else {
        if (t.length !== void 0 && t.size !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`CONFLICTING_OPTIONS`, "Pass only one of `length` or `size`, not both", {
            strategy: `nanoid`
        });
        r = t.length ?? t.size ?? 21, i = t.alphabet ?? `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-`, a = t.random, t.alphabet !== void 0 && d(i);
    }
    if (f(r), r === 0) return ``;
    if (i === `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-` && a === void 0) return u(r);
    let o = i.length;
    if (!(o & o - 1)) {
        let t = o - 1;
        if (a && a.length < r) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Insufficient random bytes: need ${r}, have ${a.length}`, {
            strategy: `nanoid`
        });
        let n = a?.subarray(0, r) ?? globalThis.crypto.getRandomValues(new Uint8Array(r)), s = ``;
        for(let e = 0; e < r; e++)s += i[n[e] & t];
        return s;
    }
    let s = (2 << 31 - Math.clz32(o - 1 | 1)) - 1, c = Math.ceil(1.6 * s * r / o), l = ``, p = 0;
    for(; l.length < r;){
        let t;
        if (a) {
            if (a.length - p < c) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Insufficient random bytes: need at least ${c} more, have ${a.length - p}`, {
                strategy: `nanoid`
            });
            t = a.subarray(p, p + c), p += c;
        } else t = globalThis.crypto.getRandomValues(new Uint8Array(c));
        for(let e = 0; e < t.length && l.length < r; e++){
            let n = t[e] & s;
            n < o && (l += i[n]);
        }
    }
    return l;
}
function m(e) {
    return typeof e == `string` && e.length > 0 && i.test(e);
}
const h = Object.assign(p, {
    isValid: m
});
;
}),
"[project]/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>a,
    "r",
    ()=>o,
    "t",
    ()=>i
]);
const e = globalThis.crypto.getRandomValues.bind(globalThis.crypto), t = new Uint8Array(256);
let n = 256;
function r() {
    e(t), n = 0;
}
function i(i) {
    if (i > 256) return e(new Uint8Array(i));
    n + i > 256 && r();
    let a = n;
    return n += i, t.subarray(a, n);
}
function a() {
    n > 252 && r();
    let e = t[n] * 16777216 + t[n + 1] * 65536 + t[n + 2] * 256 + t[n + 3] >>> 0;
    return n += 4, e;
}
function o() {
    n > 240 && r();
    let e = n;
    return n += 16, t.subarray(e, n);
}
;
}),
"[project]/node_modules/uniku/build/timestamp-ChrSuQCR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
;
;
function n(n, r, i, a) {
    let { msecs: o, secs: s } = n;
    if (o !== void 0 && s !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`CONFLICTING_OPTIONS`, "Pass only one of `msecs` or `secs`, not both", {
        strategy: a
    });
    if (o !== void 0) {
        let n = r * 1e3, s = i * 1e3 + 999;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(o, n, s)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between ${n} and ${s} milliseconds`, {
            strategy: a
        });
        return Math.floor(o / 1e3);
    }
    if (s !== void 0) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(s, r, i)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between ${r} and ${i} seconds`, {
            strategy: a
        });
        return s;
    }
}
;
}),
"[project]/node_modules/uniku/build/ulid/ulid.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ulid",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/bytes-xqWxFYsM.mjs [app-rsc] (ecmascript)");
;
;
;
;
const l = `0123456789ABCDEFGHJKMNPQRSTVWXYZ`, u = new Uint8Array(65536);
u.fill(255);
for(let e = 0; e < 32; e += 1){
    let t = l.charCodeAt(e), n = l[e].toLowerCase().charCodeAt(0);
    u[t] = e, u[n] = e;
}
function d(e, t) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_CHAR`, `Invalid ULID character: ${e[t]}`, {
        strategy: `ulid`
    });
}
function f() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`TIMESTAMP_OUT_OF_RANGE`, `ULID timestamp exceeds 48 bits`, {
        strategy: `ulid`
    });
}
function p(e) {
    let t = u[e.charCodeAt(0)];
    if (t === 255) throw d(e, 0);
    if (t > 7) throw f();
    let n = t;
    for(let t = 1; t < 10; t += 1){
        let r = u[e.charCodeAt(t)];
        if (r === 255) throw d(e, t);
        n = n * 32 + r;
    }
    return n;
}
function m(e) {
    return l[Math.floor(e / 35184372088832) & 31] + l[Math.floor(e / 1099511627776) & 31] + l[Math.floor(e / 34359738368) & 31] + l[Math.floor(e / 1073741824) & 31] + l[Math.floor(e / 33554432) & 31] + l[Math.floor(e / 1048576) & 31] + l[Math.floor(e / 32768) & 31] + l[Math.floor(e / 1024) & 31] + l[Math.floor(e / 32) & 31] + l[e & 31];
}
function h(e) {
    return l[e[0] >> 3 & 31] + l[(e[0] << 2 | e[1] >> 6) & 31] + l[e[1] >> 1 & 31] + l[(e[1] << 4 | e[2] >> 4) & 31] + l[(e[2] << 1 | e[3] >> 7) & 31] + l[e[3] >> 2 & 31] + l[(e[3] << 3 | e[4] >> 5) & 31] + l[e[4] & 31] + l[e[5] >> 3 & 31] + l[(e[5] << 2 | e[6] >> 6) & 31] + l[e[6] >> 1 & 31] + l[(e[6] << 4 | e[7] >> 4) & 31] + l[(e[7] << 1 | e[8] >> 7) & 31] + l[e[8] >> 2 & 31] + l[(e[8] << 3 | e[9] >> 5) & 31] + l[e[9] & 31];
}
function g(e) {
    if (e.length !== 26) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `ULID string must be 26 characters`, {
        strategy: `ulid`
    });
    return p(e);
}
function _(e) {
    if (e.length !== 26) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `ULID string must be 26 characters`, {
        strategy: `ulid`
    });
    let t = new Uint8Array(16), n = u[e.charCodeAt(0)], r = u[e.charCodeAt(1)], i = u[e.charCodeAt(2)], o = u[e.charCodeAt(3)], s = u[e.charCodeAt(4)], c = u[e.charCodeAt(5)], l = u[e.charCodeAt(6)], p = u[e.charCodeAt(7)], m = u[e.charCodeAt(8)], h = u[e.charCodeAt(9)], g = u[e.charCodeAt(10)], _ = u[e.charCodeAt(11)], v = u[e.charCodeAt(12)], y = u[e.charCodeAt(13)], b = u[e.charCodeAt(14)], x = u[e.charCodeAt(15)], S = u[e.charCodeAt(16)], C = u[e.charCodeAt(17)], w = u[e.charCodeAt(18)], T = u[e.charCodeAt(19)], E = u[e.charCodeAt(20)], D = u[e.charCodeAt(21)], O = u[e.charCodeAt(22)], k = u[e.charCodeAt(23)], A = u[e.charCodeAt(24)], j = u[e.charCodeAt(25)];
    if ((n | r | i | o | s | c | l | p | m | h | g | _ | v | y | b | x | S | C | w | T | E | D | O | k | A | j) & 128) {
        for(let t = 0; t < 26; t += 1)if (u[e.charCodeAt(t)] === 255) throw d(e, t);
    }
    if (n > 7) throw f();
    return t[0] = n << 5 | r, t[1] = i << 3 | o >> 2, t[2] = o << 6 | s << 1 | c >> 4, t[3] = c << 4 | l >> 1, t[4] = l << 7 | p << 2 | m >> 3, t[5] = m << 5 | h, t[6] = g << 3 | _ >> 2, t[7] = _ << 6 | v << 1 | y >> 4, t[8] = y << 4 | b >> 1, t[9] = b << 7 | x << 2 | S >> 3, t[10] = S << 5 | C, t[11] = w << 3 | T >> 2, t[12] = T << 6 | E << 1 | D >> 4, t[13] = D << 4 | O >> 1, t[14] = O << 7 | k << 2 | A >> 3, t[15] = A << 5 | j, t;
}
function v(e) {
    if (e.length !== 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `ULID bytes must be exactly 16 bytes, got ${e.length}`, {
        strategy: `ulid`
    });
    let t = 0;
    for(let n = 0; n < 6; n += 1)t = t * 256 + e[n];
    return m(t) + h(e.subarray(6, 16));
}
const y = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i, b = 0xffffffffffff, x = {
    msecs: -1 / 0,
    lastRandom: new Uint8Array(10)
};
function S(e, t, n, r) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(n, r, e);
    for(let e = 0; e < 10; e += 1)n[r + 6 + e] = t[e];
}
function C(e, n, i, a) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(i, a, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `ULID byte range ${a}:${a + 16 - 1} is out of buffer bounds`, {
        strategy: `ulid`
    });
    S(e, n, i, a);
}
function w(t, r, a = 0) {
    let o, s;
    if (t) {
        let r = t.msecs;
        if (r !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(r, 0, b)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between 0 and ${b}`, {
            strategy: `ulid`
        });
        o = r ?? Date.now();
        let a = t.random;
        if (a) {
            if (a.length < 10) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 10 for ULID`, {
                strategy: `ulid`
            });
            s = a;
        } else s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])();
    } else if (o = Date.now(), o > x.msecs) s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(), x.msecs = o, x.lastRandom.set(s.subarray(0, 10));
    else {
        if (o = x.msecs, !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$bytes$2d$xqWxFYsM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(x.lastRandom)) throw x.lastRandom.fill(255), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_OVERFLOW`, `ULID random component overflowed while preserving monotonic order`, {
            strategy: `ulid`
        });
        s = x.lastRandom;
    }
    return r ? (C(o, s, r, a), r) : m(o) + h(s);
}
function T(e) {
    return typeof e == `string` && y.test(e);
}
const E = Object.assign(w, {
    toBytes: (e)=>_(e),
    fromBytes: (e)=>v(e),
    timestamp: (e)=>g(e),
    isValid: T,
    NIL: `00000000000000000000000000`,
    MAX: `7ZZZZZZZZZZZZZZZZZZZZZZZZZ`
});
;
}),
"[project]/node_modules/uniku/build/uuid-BPebYihz.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>s,
    "r",
    ()=>c,
    "t",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
;
function n(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : -1;
}
const r = [
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    -1,
    4,
    4,
    5,
    5,
    -1,
    6,
    6,
    7,
    7,
    -1,
    8,
    8,
    9,
    9,
    -1,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    14,
    14,
    15,
    15
], i = [
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1,
    !0,
    !1
], a = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, `0`));
function o(t) {
    if (t.length !== 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BYTES_INVALID_LENGTH`, `UUID bytes must be exactly 16 bytes, got ${t.length}`, {
        strategy: `uuid`
    });
    return s(t);
}
function s(e) {
    return a[e[0]] + a[e[1]] + a[e[2]] + a[e[3]] + `-` + a[e[4]] + a[e[5]] + `-` + a[e[6]] + a[e[7]] + `-` + a[e[8]] + a[e[9]] + `-` + a[e[10]] + a[e[11]] + a[e[12]] + a[e[13]] + a[e[14]] + a[e[15]];
}
function c(e) {
    if (e.length !== 36) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_LENGTH`, `UUID string must be 36 characters, got ${e.length}`, {
        strategy: `uuid`
    });
    if (e[8] !== `-` || e[13] !== `-` || e[18] !== `-` || e[23] !== `-`) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_FORMAT`, `UUID string has invalid separators at positions 8, 13, 18, 23. Received: "${e}"`, {
        strategy: `uuid`
    });
    let a = new Uint8Array(16);
    for(let o = 0; o < 36; o += 1){
        let s = r[o];
        if (s === -1) continue;
        let c = n(e.charCodeAt(o));
        if (c === -1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParseError"](`INVALID_CHAR`, `UUID string contains invalid hex character at position ${o}`, {
            strategy: `uuid`
        });
        i[o] ? a[s] = c << 4 : a[s] |= c;
    }
    return a;
}
;
}),
"[project]/node_modules/uniku/build/uuid/v4.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuidv4",
    ()=>g
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/uuid-BPebYihz.mjs [app-rsc] (ecmascript)");
;
;
;
;
const l = globalThis.crypto.randomUUID.bind(globalThis.crypto), u = new Uint8Array(16), d = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function f(e, t, n) {
    for(let r = 0; r < 16; r += 1)t[n + r] = e[r];
    t[n + 6] = t[n + 6] & 15 | 64, t[n + 8] = t[n + 8] & 63 | 128;
}
function p(e, t, n) {
    return !t && !e ? l() : m(e, t, n);
}
function m(i, a, s) {
    let c = i?.random;
    if (c && c.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16`, {
        strategy: `uuid`
    });
    let l = a ? s ?? 0 : 0;
    if (a && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a, l, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `UUID byte range ${l}:${l + 16 - 1} is out of buffer bounds`, {
        strategy: `uuid`
    });
    let d = a ?? u;
    return f(c ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(), d, l), a ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(d);
}
function h(e) {
    return typeof e == `string` && d.test(e);
}
const g = Object.assign(p, {
    toBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"],
    fromBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
    isValid: h,
    NIL: `00000000-0000-0000-0000-000000000000`,
    MAX: `ffffffff-ffff-ffff-ffff-ffffffffffff`
});
;
}),
"[project]/node_modules/uniku/build/uuid/v7.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uuidv7",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/random-Chp-Nkzi.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/errors.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uniku/build/uuid-BPebYihz.mjs [app-rsc] (ecmascript)");
;
;
;
;
const u = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, d = 0xffffffffffff, f = 4294967295, p = new Uint8Array(16), m = {
    msecs: -1 / 0,
    seq: 0
};
function h(e, t, n, r, i) {
    r[i++] = t / 1099511627776 & 255, r[i++] = t / 4294967296 & 255, r[i++] = t / 16777216 & 255, r[i++] = t / 65536 & 255, r[i++] = t / 256 & 255, r[i++] = t & 255, r[i++] = 112 | n >>> 28 & 15, r[i++] = n >>> 20 & 255, r[i++] = 128 | n >>> 14 & 63, r[i++] = n >>> 6 & 255, r[i++] = n << 2 & 255 | e[10] & 3, r[i++] = e[11], r[i++] = e[12], r[i++] = e[13], r[i++] = e[14], r[i++] = e[15];
}
function g(e, n, i, a, o) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a, o, 16)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BufferError"](`BUFFER_OUT_OF_BOUNDS`, `UUID byte range ${o}:${o + 16 - 1} is out of buffer bounds`, {
        strategy: `uuid`
    });
    h(e, n, i, a, o);
}
function _(t, r, a = 0) {
    let o = t.msecs;
    if (o !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(o, 0, d)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`TIMESTAMP_OUT_OF_RANGE`, `Timestamp must be an integer between 0 and ${d}`, {
        strategy: `uuid`
    });
    if (t.counter !== void 0 && t.seq !== void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`CONFLICTING_OPTIONS`, "Pass only one of `counter` or `seq`, not both", {
        strategy: `uuid`
    });
    let c = t.counter ?? t.seq;
    if (c !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$validation$2d$CTNpXm94$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(c, 0, f)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`COUNTER_OUT_OF_RANGE`, `Counter must be an integer between 0 and ${f}`, {
        strategy: `uuid`
    });
    let l = t.random;
    if (l && l.length < 16) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$errors$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidInputError"](`RANDOM_BYTES_TOO_SHORT`, `Random bytes length must be >= 16`, {
        strategy: `uuid`
    });
    let u = l ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(), m = o ?? Date.now(), _1 = c ?? u[6] << 23 | u[7] << 16 | u[8] << 8 | u[9];
    return r ? (g(u, m, _1, r, a), r) : (h(u, m, _1, p, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(p));
}
function v(t, n, r) {
    if (t) return _(t, n, r);
    let i = Date.now(), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$random$2d$Chp$2d$Nkzi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])();
    return i > m.msecs ? (m.seq = a[6] << 23 | a[7] << 16 | a[8] << 8 | a[9], m.msecs = i) : (m.seq = m.seq + 1 | 0, m.seq < 0 && (m.seq = 0, m.msecs++)), n ? (g(a, m.msecs, m.seq, n, r ?? 0), n) : (h(a, m.msecs, m.seq, p, 0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(p));
}
function y(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(e), n = 0;
    for(let e = 0; e < 6; e += 1)n = n * 256 + t[e];
    return n;
}
function b(e) {
    return typeof e == `string` && u.test(e);
}
const x = Object.assign(v, {
    toBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"],
    fromBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uniku$2f$build$2f$uuid$2d$BPebYihz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
    timestamp: y,
    isValid: b,
    NIL: `00000000-0000-0000-0000-000000000000`,
    MAX: `ffffffff-ffff-ffff-ffff-ffffffffffff`
});
;
}),
"[project]/node_modules/uniku/build/validation-CTNpXm94.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>t,
    "t",
    ()=>e
]);
function e(e, t, n) {
    return Number.isInteger(e) && e >= t && e <= n;
}
function t(e, t, n) {
    return Number.isInteger(t) && t >= 0 && t + n <= e.length;
}
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13lre7-._.js.map